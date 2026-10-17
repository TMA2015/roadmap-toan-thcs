#!/usr/bin/env python3
"""R6 QA-only: atomic IndexedDB journal/outbox, retry after interruption,
multi-connection commits, replay-idempotent consumer, distinct evidence lanes.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium is required"
SOURCE=Path("scripts/prototypes/math-v2-idb-journal-r6.js").read_text(encoding="utf-8")
BASE="http://127.0.0.1:8765/"
JS=r"""
async ({scope,action})=>{
 const api=window.MathV2JournalR6;
 const e=(id,kind,extra={})=>({
   schema:"math-evidence-event-v2",event_id:id,learner_scope:scope,
   item_id:"QA-R6-ITEM",kind,
   evidence_class:({
      answer_attempt:"FORMATIVE",readiness_submission:"INDEPENDENT_ASSESSMENT",
      written_self_check:"SELF_REPORTED",remediation_action:"REMEDIATION",
      exam_submission:"EXAM_ASSESSMENT"})[kind],
   occurred_at:"2026-10-17T10:30:00+07:00",...extra
 });
 const disabled=await api.createCanary({learner_scope:scope});
 try {
   if(action==="off"){
     let blocked=false;
     try{await disabled.append(e("EVENT_R601","answer_attempt",{correct:true}));}
     catch(err){blocked=err.message==="R6_FLAG_OFF";}
     return {blocked,counts:await disabled.snapshot()};
   }
 }finally{disabled.close();}
 const c=await api.createCanary({learner_scope:scope,enabled:true});
 try{
   if(action==="seed"){
     const a=await c.append(e("EVENT_R601","answer_attempt",{correct:true}));
     const dup=await c.append(e("EVENT_R601","answer_attempt",{correct:true}));
     let conflict=false;
     try{await c.append(e("EVENT_R601","answer_attempt",{correct:false}));}
     catch(err){conflict=err.message==="EVENT_ID_CONFLICT";}
     await c.append(e("EVENT_R602","readiness_submission"));
     await c.append(e("EVENT_R603","written_self_check"));
     let aborted=false;
     try{await c.append(e("EVENT_R604","exam_submission"),{simulateAbort:true});}
     catch(err){aborted=err.message==="SIMULATED_ATOMIC_ABORT";}
     return {a,dup,conflict,aborted,snapshot:await c.snapshot()};
   }
   if(action==="concurrent"){
     const other=await api.createCanary({learner_scope:scope,enabled:true});
     try{
       const [x,y]=await Promise.all([
         c.append(e("EVENT_R605","remediation_action")),
         other.append(e("EVENT_R606","answer_attempt",{correct:false}))
       ]);
       return {x,y,snapshot:await c.snapshot()};
     }finally{other.close();}
   }
   if(action==="check")return await c.snapshot();
   if(action==="lose_ack"){
     window.__r6_receipts=new Map();
     let interrupted=false;
     try{
       await c.drain(async item=>{
         window.__r6_receipts.set(item.event_id,(window.__r6_receipts.get(item.event_id)||0)+1);
         // External receipt occurred, but our code crashes before IDB ACK.
         throw Error("SIMULATED_CONSUMER_CRASH");
       });
     }catch(err){interrupted=err.message==="SIMULATED_CONSUMER_CRASH";}
     return {interrupted,receipts:[...window.__r6_receipts.entries()],snapshot:await c.snapshot()};
   }
   if(action==="retry"){
     let delivered=0,duplicateReceiver=0;
     const result=await c.drain(async item=>{
       if(window.__r6_receipts.has(item.event_id))duplicateReceiver++;
       else delivered++;
       window.__r6_receipts.set(item.event_id,1);
     });
     return {result,delivered,duplicateReceiver,unique:window.__r6_receipts.size,
       snapshot:await c.snapshot()};
   }
   if(action==="stale_ack"){
     return await c.ack("EVENT_R601");
   }
   throw Error("unknown R6 action");
 }finally{c.close();}
}
"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        page=ctx.new_page()
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.add_script_tag(content=SOURCE)
        page.evaluate("localStorage.setItem('r6-sentinel','unchanged')")
        scope=f"QA_R6_{width}"
        off=page.evaluate(JS,{"scope":scope,"action":"off"})
        assert off["blocked"] and off["counts"]["events"]==0
        seed=page.evaluate(JS,{"scope":scope,"action":"seed"})
        assert seed["a"]["written"] and seed["dup"]["duplicate"]
        assert seed["conflict"] and seed["aborted"]
        assert seed["snapshot"]["events"]==3 and seed["snapshot"]["pending"]==3
        assert seed["snapshot"]["written"]=={"self_checks":1,"assessment_credit":0}
        concurrent=page.evaluate(JS,{"scope":scope,"action":"concurrent"})
        assert concurrent["x"]["written"] and concurrent["y"]["written"]
        assert concurrent["snapshot"]["events"]==5 and concurrent["snapshot"]["pending"]==5
        second=ctx.new_page()
        second.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        second.add_script_tag(content=SOURCE)
        assert second.evaluate(JS,{"scope":scope,"action":"check"})["events"]==5
        second.close()
        broken=page.evaluate(JS,{"scope":scope,"action":"lose_ack"})
        assert broken["interrupted"] and len(broken["receipts"])==1
        assert broken["snapshot"]["events"]==5 and broken["snapshot"]["pending"]==5
        retry=page.evaluate(JS,{"scope":scope,"action":"retry"})
        assert retry["result"]["acknowledged"]==5
        assert retry["unique"]==5 and retry["duplicateReceiver"]==1 and retry["delivered"]==4
        assert retry["snapshot"]["events"]==5 and retry["snapshot"]["pending"]==0
        assert retry["snapshot"]["formative"]=={"answers":2,"correct":1}
        assert retry["snapshot"]["readiness"]=={"submissions":1}
        assert retry["snapshot"]["written"]=={"self_checks":1,"assessment_credit":0}
        assert not page.evaluate(JS,{"scope":scope,"action":"stale_ack"})["wasPending"]
        page.reload(wait_until="domcontentloaded")
        page.add_script_tag(content=SOURCE)
        latest=page.evaluate(JS,{"scope":scope,"action":"check"})
        assert latest==retry["snapshot"],(width,"event journal survives refresh")
        assert page.evaluate("localStorage.getItem('r6-sentinel')")=="unchanged"
        ctx.close()
        print("PASS R6 IndexedDB",width,"atomic journal/outbox, failed delivery retry, consumer idempotency, no extra Readiness")
    browser.close()
