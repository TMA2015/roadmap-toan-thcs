#!/usr/bin/env python3
"""QA R13: durable learner-scoped intent key, stable event ID, retries/reloads and no v1 mutation.
No production student data, all disposable desktop/mobile Chromium browser contexts.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/luyen-tap/"
SOURCES=[
 Path("scripts/prototypes/math-v2-idb-journal-r6.js"),
 Path("scripts/prototypes/math-v2-journal-first-submit-r8.js"),
 Path("scripts/prototypes/math-v2-stable-submission-intent-r13.js")
]
JS=r"""
async ({scope,action})=>{
 const api=MathV2SubmissionIntentR13;
 const i={submission_key:"QA_R13_SUBMIT_01",item_id:"QA_Q1",kind:"answer_attempt",correct:true};
 if(action==="disabled"){
   const disabled=await api.create({learner_scope:scope,enabled:false});
   return {stage:await disabled.stage(i),pending:await disabled.pending()};
 }
 const options={learner_scope:scope,enabled:true};
 if(action==="failed_submit")options.createWriter=async()=>({
   submit:async()=>({state:"NOT_SAVED",saved:false,reason:"SIMULATED_BLOCKED_STORAGE"}),
   close:()=>{}
 });
 if(action==="broken_receipt")options.simulateReceiptFailure=true;
 const a=await api.create(options);
 try{
   if(action==="stage"){
     const first=await a.stage(i);
     const reused=await a.stage({...i});
     let conflict=false,invalid=false;
     try{await a.stage({...i,correct:false});}
     catch(err){conflict=err.message==="R13_SUBMISSION_KEY_CONFLICT";}
     try{await a.stage({submission_key:"QA_R13_INVALID",item_id:"Q",kind:"readiness_submission",correct:true});}
     catch(err){invalid=err.message==="INVALID_R13_INTENT";}
     return {first,reused,conflict,invalid,pending:await a.pending()};
   }
   if(action==="failed_submit"){
     const result=await a.commit("QA_R13_SUBMIT_01");
     return {result,pending:await a.pending(),row:await a.lookup("QA_R13_SUBMIT_01")};
   }
   if(action==="recover"){
     const result=await a.commit("QA_R13_SUBMIT_01");
     const dup=await a.commit("QA_R13_SUBMIT_01");
     await a.stage({submission_key:"QA_R13_READINESS_02",item_id:"QA_READINESS",kind:"readiness_submission"});
     const check=await a.commit("QA_R13_READINESS_02");
     return {result,dup,check,pending:await a.pending()};
   }
   if(action==="broken_receipt"){
     const stage=await a.stage({submission_key:"QA_R13_WRITTEN_03",
       item_id:"QA_WRITTEN",kind:"written_self_check"});
     const result=await a.commit("QA_R13_WRITTEN_03");
     return {stage,result,pending:await a.pending()};
   }
   if(action==="repair_receipt"){
     const result=await a.commit("QA_R13_WRITTEN_03");
     return {result,pending:await a.pending()};
   }
   if(action==="concurrent"){
     const second=await api.create(options); // independent IDB connection
     try{
       const intent={submission_key:"QA_R13_TAB_04",item_id:"QA_Q_TWO_TABS",kind:"answer_attempt",correct:false};
       const [x,y]=await Promise.all([a.stage(intent),second.stage({...intent})]);
       const [cx,cy]=await Promise.all([a.commit(intent.submission_key),second.commit(intent.submission_key)]);
       return {x,y,cx,cy,pending:await a.pending()};
     }finally{second.close();}
   }
   if(action==="scope_check")return {pending:await a.pending(),missing:await a.lookup("QA_R13_SUBMIT_01")};
   if(action==="read")return {pending:await a.pending(),first:await a.lookup("QA_R13_SUBMIT_01")};
   throw Error("unknown R13 browser action");
 }finally{a.close();}
}
"""
SNAPSHOT=r"""async scope=>{
 const j=await MathV2JournalR6.createCanary({learner_scope:scope,enabled:false});
 try{return await j.snapshot();}finally{j.close();}
}"""
def load(page):
    for src in SOURCES:
        page.add_script_tag(content=src.read_text(encoding="utf-8"))
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        scope=f"QA_R13_{width}"
        ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        page=ctx.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        original=page.evaluate("""() => [
          localStorage.getItem('toan-thcs-practice-v1'),
          localStorage.getItem('toan-thcs-assessment-v1')
        ]""")
        page.evaluate("localStorage.setItem('r13-local-sentinel','untouched')")
        load(page)
        assert page.evaluate(JS,{"scope":scope,"action":"disabled"})=={
            "stage":{"state":"DISABLED","saved":False},"pending":[]}
        initial=page.evaluate(JS,{"scope":scope,"action":"stage"})
        assert initial["first"]["reused"] is False
        assert initial["reused"]["reused"] is True
        first_id=initial["first"]["intent"]["event_id"]
        assert first_id==initial["reused"]["intent"]["event_id"]
        assert initial["conflict"] and initial["invalid"]
        assert len(initial["pending"])==1 and initial["pending"][0]["state"]=="STAGED"
        denied=page.evaluate(JS,{"scope":scope,"action":"failed_submit"})
        assert denied["result"]["state"]=="NOT_SAVED" and denied["result"]["saved"] is False
        assert denied["row"]["event_id"]==first_id
        assert page.evaluate(SNAPSHOT,scope)["events"]==0
        assert len(denied["pending"])==1

        # Reload preserves the exact event ID and occurrence time.
        page.reload(wait_until="domcontentloaded")
        load(page)
        after_reload=page.evaluate(JS,{"scope":scope,"action":"read"})
        assert after_reload["first"]["event_id"]==first_id
        assert after_reload["first"]["occurred_at"]==initial["first"]["intent"]["occurred_at"]
        resumed=page.evaluate(JS,{"scope":scope,"action":"recover"})
        assert resumed["result"]["saved"] and not resumed["result"]["duplicate"]
        assert resumed["dup"]["saved"] and resumed["dup"]["duplicate"]
        assert resumed["check"]["saved"] and len(resumed["pending"])==0
        before_failure=page.evaluate(SNAPSHOT,scope)
        assert before_failure["events"]==2 and before_failure["pending"]==2
        assert before_failure["formative"]=={"answers":1,"correct":1}
        assert before_failure["readiness"]=={"submissions":1}

        # Durable journal commit, then simulated failure writing local receipt.
        crash=page.evaluate(JS,{"scope":scope,"action":"broken_receipt"})
        assert crash["result"]["saved"] and not crash["result"]["receipt_persisted"]
        assert len(crash["pending"])==1
        assert page.evaluate(SNAPSHOT,scope)["events"]==3
        page.reload(wait_until="domcontentloaded")
        load(page)
        repaired=page.evaluate(JS,{"scope":scope,"action":"repair_receipt"})
        assert repaired["result"]["saved"] and repaired["result"]["duplicate"]
        assert repaired["result"]["receipt_persisted"]
        assert repaired["pending"]==[]
        assert page.evaluate(SNAPSHOT,scope)["events"]==3

        # Concurrent click from independent adapters: same submission_key
        # must result in one durable event_id and exactly one extra answer.
        concurrent=page.evaluate(JS,{"scope":scope,"action":"concurrent"})
        assert concurrent["x"]["intent"]["event_id"]==concurrent["y"]["intent"]["event_id"]
        assert concurrent["cx"]["saved"] and concurrent["cy"]["saved"]
        assert concurrent["pending"]==[]
        after=page.evaluate(SNAPSHOT,scope)
        assert after["events"]==4 and after["formative"]=={"answers":2,"correct":1}
        assert after["written"]=={"self_checks":1,"assessment_credit":0}
        assert after["readiness"]=={"submissions":1}

        isolated=page.evaluate(JS,{"scope":f"QA_R13_OTHER_{width}","action":"scope_check"})
        assert isolated["pending"]==[] and isolated["missing"] is None
        latest=page.evaluate("""() => [
          localStorage.getItem('toan-thcs-practice-v1'),
          localStorage.getItem('toan-thcs-assessment-v1')
        ]""")
        assert latest==original,(width,"No learner progress write")
        assert page.evaluate("localStorage.getItem('r13-local-sentinel')")=="untouched"
        ctx.close()
        print("PASS R13",width,
              "staged intent retained after blocked save, reload, crash between writes, multi-call dedup and lane safety")
    browser.close()
