#!/usr/bin/env python3
"""Phase4 R16: atomic same-IDB intent+event+outbox commit and portable backup.
Run only in disposable Chromium contexts (1365px desktop, 390px mobile).
"""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
SCRIPT=Path("scripts/prototypes/math-v2-unified-ledger-r16.js").read_text(encoding="utf8")
URL="http://127.0.0.1:8765/luyen-tap/"
RUN=r"""
async ({scope,action,backup})=>{
 const api=MathV2UnifiedLedgerR16;
 if(action==="off"){
   const x=await api.create({learner_scope:scope});
   return {stage:await x.stage(),commit:await x.commit(),read:await x.read()};
 }
 const db=await api.create({enabled:true,learner_scope:scope});
 const input=(submission_key,kind,extra={})=>({
   submission_key,item_id:"QA_ITEM_"+submission_key,kind,...extra
 });
 try{
   if(action==="seed"){
     const p=input("QA_R16_SUBMIT_01","answer_attempt",{correct:true});
     const first=await db.stage(p);
     const same=await db.stage({...p});
     let conflict=false;
     try{await db.stage({...p,correct:false});}
     catch(e){conflict=e.message==="R16_SUBMISSION_KEY_CONFLICT";}
     const independent=await db.stage(input("QA_R16_READY_02","readiness_submission"));
     const self=await db.stage(input("QA_R16_WRITE_03","written_self_check"));
     let aborted=false;
     try{await db.commit(p.submission_key,{simulateAbort:true});}
     catch(e){aborted=e.message==="R16_SIMULATED_ATOMIC_ABORT";}
     const failed=await db.summary();
     return {first,same,conflict,independent,self,aborted,failed,
       rows:await db.read()};
   }
   if(action==="commit"){
     const p=await db.commit("QA_R16_SUBMIT_01");
     const duplicate=await db.commit("QA_R16_SUBMIT_01");
     const ready=await db.commit("QA_R16_READY_02");
     return {p,duplicate,ready,summary:await db.summary()};
   }
   if(action==="two_connections"){
     const second=await api.create({enabled:true,learner_scope:scope});
     try{
       const key="QA_R16_TWOTABS_04";
       const data=input(key,"answer_attempt",{correct:false});
       const [one,two]=await Promise.all([db.stage(data),second.stage({...data})]);
       const [x,y]=await Promise.all([db.commit(key),second.commit(key)]);
       return {one,two,x,y,summary:await db.summary()};
     }finally{second.close();}
   }
   if(action==="export")return {backup:await db.exportBackup("2026-10-17T14:00:00+07:00"),
     summary:await db.summary()};
   if(action==="verify")return await db.verifyBackup(backup);
   if(action==="restore")return await db.restore(backup);
   if(action==="conflict"){
     let denied=false,ack=false,aborted=false;
     const before=await db.read();
     try{await db.restore(backup);}catch(e){denied=e.message==="R16_RESTORE_CONFLICT";}
     try{await db.restore(backup,{replace:true});}
     catch(e){ack=e.message==="R16_REPLACE_ACK_REQUIRED";}
     try{await db.restore(backup,{replace:true,acknowledged:true,simulateAbort:true});}
     catch(e){aborted=e.message==="R16_SIMULATED_RESTORE_ABORT";}
     const after=await db.read();
     return {denied,ack,aborted,unchanged:JSON.stringify(before)===JSON.stringify(after)};
   }
   if(action==="repair")return await db.commit("QA_R16_WRITE_03");
   if(action==="snapshot")return {rows:await db.read(),summary:await db.summary()};
   if(action==="invalid"){
     let blocked=false,missing=false,scopeRejection=false;
     try{await db.stage(input("QA_R16_BAD_05","readiness_submission",{correct:true}));}
     catch(e){blocked=e.message==="R16_INVALID_SUBMISSION";}
     try{await db.commit("QA_R16_NOT_FOUND");}
     catch(e){missing=e.message==="R16_INTENT_NOT_FOUND";}
     try{await api.create({learner_scope:"STUDENT_REAL_ID",enabled:true});}
     catch(e){scopeRejection=e.message==="R16_QA_SCOPE_ONLY";}
     return {blocked,missing,scopeRejection};
   }
   throw Error("unknown R16 action");
 }finally{db.close();}
}
"""
with sync_playwright() as playwright:
    browser=playwright.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        scope=f"QA_R16_SOURCE_{width}"
        ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        page=ctx.new_page()
        page.goto(URL,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r16-test-sentinel','preserved')")
        original=page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        page.add_script_tag(content=SCRIPT)
        disabled=page.evaluate(RUN,{"scope":scope,"action":"off"})
        assert disabled=={"stage":{"state":"DISABLED","saved":False},
           "commit":{"state":"DISABLED","saved":False},
           "read":{"intents":[],"events":[],"outbox":[]}}
        seeded=page.evaluate(RUN,{"scope":scope,"action":"seed"})
        assert seeded["first"]["reused"] is False and seeded["same"]["reused"] is True
        assert seeded["first"]["intent"]["event_id"]==seeded["same"]["intent"]["event_id"]
        assert seeded["conflict"] and seeded["aborted"]
        assert seeded["failed"]=={
          "intents":3,"staged":3,"saved":0,"events":0,"pending":0,
          "formative":{"answers":0,"correct":0},
          "readiness":{"submissions":0},
          "written":{"self_checks":0,"automatic_readiness_credit":0}
        },(width,"aborted commit must roll back ALL 3 stores")
        original_id=seeded["first"]["intent"]["event_id"]
        original_timestamp=seeded["first"]["intent"]["occurred_at"]
        assert all(x["state"]=="STAGED" for x in seeded["rows"]["intents"])
        page.reload(wait_until="domcontentloaded")
        page.add_script_tag(content=SCRIPT)
        before=page.evaluate(RUN,{"scope":scope,"action":"snapshot"})
        restored_intent=next(x for x in before["rows"]["intents"]
                             if x["submission_key"]=="QA_R16_SUBMIT_01")
        assert restored_intent["event_id"]==original_id
        assert restored_intent["occurred_at"]==original_timestamp
        committed=page.evaluate(RUN,{"scope":scope,"action":"commit"})
        assert committed["p"]["saved"] and not committed["p"]["duplicate"]
        assert committed["p"]["event_id"]==original_id
        assert committed["duplicate"]["duplicate"] and committed["duplicate"]["saved"]
        assert committed["ready"]["saved"] and not committed["ready"]["duplicate"]
        assert committed["summary"]["events"]==2 and committed["summary"]["pending"]==2
        assert committed["summary"]["formative"]=={"answers":1,"correct":1}
        assert committed["summary"]["readiness"]=={"submissions":1}
        assert committed["summary"]["staged"]==1
        race=page.evaluate(RUN,{"scope":scope,"action":"two_connections"})
        assert race["one"]["intent"]["event_id"]==race["two"]["intent"]["event_id"]
        assert race["x"]["saved"] and race["y"]["saved"]
        assert race["x"]["duplicate"]!=race["y"]["duplicate"]
        assert race["summary"]["events"]==3 and race["summary"]["pending"]==3
        assert race["summary"]["formative"]=={"answers":2,"correct":1}
        failed=page.evaluate(RUN,{"scope":scope,"action":"invalid"})
        assert all(failed.values()),(width,"input and scope failures")
        exported=page.evaluate(RUN,{"scope":scope,"action":"export"})
        backup=exported["backup"]
        assert backup["schema"]=="math-v2-unified-ledger-backup-r16"
        assert len(backup["intents"])==4 and len(backup["events"])==3
        assert len(backup["outbox"])==3 and len(backup["sha256"])==64
        assert len([x for x in backup["intents"] if x["state"]=="STAGED"])==1
        assert page.evaluate("localStorage.getItem('r16-test-sentinel')")=="preserved"
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==original

        # Separate destination browser = fresh "device", no account/sync.
        receiver=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        dest=receiver.new_page()
        dest.goto(URL,wait_until="domcontentloaded")
        dest.add_script_tag(content=SCRIPT)
        restored=dest.evaluate(RUN,{"scope":scope,"action":"restore","backup":backup})
        assert restored=={"restored_intents":4,"restored_events":3,"restored_pending":3}
        moved=dest.evaluate(RUN,{"scope":scope,"action":"snapshot"})
        assert moved["rows"]=={k:backup[k] for k in ("intents","events","outbox")}
        assert moved["summary"]==exported["summary"]

        # Signed JSON tamper and learner-scope crossover must reject before write.
        bad=dict(backup)
        bad["events"]=[dict(x) for x in backup["events"]]
        bad["events"][0]["item_id"]="FORGED_EVENT"
        rejected=False
        try: dest.evaluate(RUN,{"scope":scope,"action":"verify","backup":bad})
        except Exception as e: rejected="R16_INVALID_EVENT_LINK" in str(e) or "R16_SHA_MISMATCH" in str(e)
        assert rejected,(width,"modified event must be rejected")
        other=dict(backup)
        other["learner_scope"]="QA_R16_OTHER_SCOPE"
        rejected=False
        try: dest.evaluate(RUN,{"scope":scope,"action":"verify","backup":other})
        except Exception as e: rejected="R16_INVALID_ARCHIVE" in str(e)
        assert rejected,(width,"wrong learner scope must reject")
        conflict=dest.evaluate(RUN,{"scope":scope,"action":"conflict","backup":backup})
        assert conflict=={"denied":True,"ack":True,"aborted":True,"unchanged":True},(width,conflict)
        # Resume imported pending written intent; one commit changes all stores.
        repaired=dest.evaluate(RUN,{"scope":scope,"action":"repair"})
        assert repaired["saved"] and not repaired["duplicate"]
        stable=dest.evaluate(RUN,{"scope":scope,"action":"snapshot"})
        assert stable["summary"]["events"]==4 and stable["summary"]["staged"]==0
        assert stable["summary"]["written"]=={
          "self_checks":1,"automatic_readiness_credit":0}
        dest.reload(wait_until="domcontentloaded")
        dest.add_script_tag(content=SCRIPT)
        assert dest.evaluate(RUN,{"scope":scope,"action":"snapshot"})==stable
        receiver.close()
        ctx.close()
        print("PASS R16",width,
              "single-tx rollback/commit, concurrent duplicate IDs, signed 3-store transfer, staged resume")
    browser.close()
