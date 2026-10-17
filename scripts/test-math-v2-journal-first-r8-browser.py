#!/usr/bin/env python3
"""R8 QA-only authoritative submit: accepted only after atomic IDB journal commit."""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
R6=Path("scripts/prototypes/math-v2-idb-journal-r6.js").read_text(encoding="utf-8")
R8=Path("scripts/prototypes/math-v2-journal-first-submit-r8.js").read_text(encoding="utf-8")
JS=r"""
async ({scope,action})=>{
 const api=window.MathV2JournalFirstR8;
 const e=(id,kind,extra={})=>({
   event_id:id,item_id:"QA-R8-ITEM",kind,
   occurred_at:"2026-10-17T11:30:00+07:00",...extra
 });
 if(action==="off"){
   const disabled=await api.create({learner_scope:scope});
   return disabled.submit(e("EVENT_R801","answer_attempt",{correct:true}));
 }
 if(action==="unavailable"){
   const blocked=await api.create({learner_scope:scope,enabled:true,
     createJournal:async()=>{throw Error("BROWSER_IDB_BLOCKED");}});
   return blocked.submit(e("EVENT_R808","answer_attempt",{correct:true}));
 }
 if(action==="abort"){
   const aborting=await api.create({learner_scope:scope,enabled:true,
     createJournal:async opts=>{
       const driver=await window.MathV2JournalR6.createCanary(opts);
       return {...driver,append:ev=>driver.append(ev,{simulateAbort:true})};
     }});
   try{return await aborting.submit(e("EVENT_R809","readiness_submission"));}
   finally{aborting.close();}
 }
 const c=await api.create({learner_scope:scope,enabled:true});
 try{
   if(action==="first"){
     const attempt=e("EVENT_R801","answer_attempt",{correct:true});
     const first=await c.submit(attempt);
     const same=await c.submit({...attempt});
     const conflict=await c.submit({...attempt,correct:false});
     const badLane=await c.submit(e("EVENT_R802","readiness_submission",{correct:true}));
     const readiness=await c.submit(e("EVENT_R803","readiness_submission"));
     const written=await c.submit(e("EVENT_R804","written_self_check"));
     return {first,same,conflict,badLane,readiness,written,
       summary:await c.summary(),pending:(await c.pending()).length};
   }
   if(action==="concurrent"){
     const [a,b]=await Promise.all([
       c.submit(e("EVENT_R805","answer_attempt",{correct:false})),
       c.submit(e("EVENT_R806","remediation_action"))
     ]);
     return {a,b,summary:await c.summary()};
   }
   if(action==="summary")return {summary:await c.summary(),pending:(await c.pending()).length};
   throw Error("unknown R8 action");
 }finally{c.close();}
}
"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        page=ctx.new_page()
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.add_script_tag(content=R6)
        page.add_script_tag(content=R8)
        page.evaluate("localStorage.setItem('r8-sentinel','keep')")
        legacy_before=page.evaluate("() => [localStorage.getItem('toan-thcs-practice-v1'),localStorage.getItem('toan-thcs-assessment-v1')]")
        scope=f"QA_R8_{width}"
        assert page.evaluate(JS,{"scope":scope,"action":"off"})["state"]=="DISABLED"
        first=page.evaluate(JS,{"scope":scope,"action":"first"})
        assert first["first"]["state"]=="SAVED" and first["first"]["saved"]
        assert first["first"]["source"]=="V2_JOURNAL" and not first["first"]["duplicate"]
        assert first["same"]["state"]=="SAVED" and first["same"]["duplicate"]
        assert first["conflict"]["state"]=="NOT_SAVED"
        assert "EVENT_ID_CONFLICT" in first["conflict"]["reason"]
        assert first["badLane"]["state"]=="INVALID" and not first["badLane"]["saved"]
        assert first["readiness"]["state"]=="SAVED" and first["written"]["state"]=="SAVED"
        assert first["summary"]["events"]==3 and first["pending"]==3
        assert first["summary"]["formative"]=={"answers":1,"correct":1}
        assert first["summary"]["readiness"]=={"submissions":1}
        assert first["summary"]["written"]=={"self_checks":1,"assessment_credit":0}
        aborted=page.evaluate(JS,{"scope":scope,"action":"abort"})
        assert aborted["state"]=="NOT_SAVED" and not aborted["saved"]
        assert "SIMULATED_ATOMIC_ABORT" in aborted["reason"]
        unavailable=page.evaluate(JS,{"scope":scope,"action":"unavailable"})
        assert unavailable["state"]=="NOT_SAVED" and unavailable["reason"]=="JOURNAL_UNAVAILABLE"
        assert page.evaluate(JS,{"scope":scope,"action":"summary"})["summary"]["events"]==3
        concurrent=page.evaluate(JS,{"scope":scope,"action":"concurrent"})
        assert concurrent["a"]["saved"] and concurrent["b"]["saved"]
        assert concurrent["summary"]["events"]==5 and concurrent["summary"]["pending"]==5
        page.reload(wait_until="domcontentloaded")
        page.add_script_tag(content=R6)
        page.add_script_tag(content=R8)
        final=page.evaluate(JS,{"scope":scope,"action":"summary"})
        assert final["summary"]==concurrent["summary"],(width,"journal is persistent across reload")
        assert final["pending"]==5
        assert page.evaluate("localStorage.getItem('r8-sentinel')")=="keep"
        legacy_after=page.evaluate("() => [localStorage.getItem('toan-thcs-practice-v1'),localStorage.getItem('toan-thcs-assessment-v1')]")
        assert legacy_after==legacy_before,(width,"unified QA journal must not touch legacy Practice/Readiness stores")
        print("PASS R8",width,"journal-first: flag off, saved vs unsaved, idempotency, abort, IDB denied, concurrent and persistent")
        ctx.close()
    browser.close()
