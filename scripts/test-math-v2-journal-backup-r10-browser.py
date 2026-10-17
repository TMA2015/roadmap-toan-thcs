#!/usr/bin/env python3
"""R10 disposable browser QA: consistent R6 journal+pending backup, hash, atomic import.
Desktop 1365px and 390px, two isolated device browser contexts, no student data.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/luyen-tap/"
R6=Path("scripts/prototypes/math-v2-idb-journal-r6.js").read_text(encoding="utf-8")
R10=Path("scripts/prototypes/math-v2-journal-backup-r10.js").read_text(encoding="utf-8")
SEED=r"""
async ({scope})=>{
 const j=await MathV2JournalR6.createCanary({learner_scope:scope,enabled:true});
 const event=(event_id,kind,extra={})=>({
   schema:"math-evidence-event-v2",learner_scope:scope,event_id,
   item_id:"QA-R10-TEST",kind,
   evidence_class:({answer_attempt:"FORMATIVE",readiness_submission:"INDEPENDENT_ASSESSMENT",
     written_self_check:"SELF_REPORTED"})[kind],
   occurred_at:"2026-10-17T12:00:00+07:00",...extra
 });
 try{
   await j.append(event("EVENT_R1001","answer_attempt",{correct:true}));
   await j.append(event("EVENT_R1002","readiness_submission"));
   await j.append(event("EVENT_R1003","written_self_check"));
   await j.ack("EVENT_R1001");
   return await j.snapshot();
 }finally{j.close();}
}
"""
RUN=r"""
async ({scope,action,backup})=>{
 const a=await MathV2JournalBackupR10.create({learner_scope:scope,enabled:action!=="disabled"});
 try{
   if(action==="export"){
     const full=await a.exportBackup("2026-10-17T12:15:00+07:00");
     return {backup:full,counts:{events:full.events.length,pending:full.pending.length}};
   }
   if(action==="verify"){
     const valid=await a.verifyBackup(backup);
     return {events:valid.events.length,pending:valid.pending.length};
   }
   if(action==="tamper"){
     const wrong=structuredClone(backup);
     wrong.events[0].correct=!wrong.events[0].correct;
     try{await a.verifyBackup(wrong);return {blocked:false};}
     catch(e){return {blocked:e.message==="BACKUP_SHA_MISMATCH"};}
   }
   if(action==="disabled"){
     try{await a.restore(backup);return {blocked:false};}
     catch(e){return {blocked:e.message==="BACKUP_RESTORE_DISABLED"};}
   }
   if(action==="import")return await a.restore(backup);
   if(action==="conflict"){
     let conflict=false,ack=false,abort=false;
     try{await a.restore(backup);}catch(e){conflict=e.message==="BACKUP_RESTORE_CONFLICT";}
     try{await a.restore(backup,{replace:true});}
     catch(e){ack=e.message==="REPLACEMENT_ACK_REQUIRED";}
     const before=await a.read();
     try{await a.restore(backup,{replace:true,acknowledged:true,simulateAbort:true});}
     catch(e){abort=e.message==="SIMULATED_RESTORE_ABORT";}
     const after=await a.read();
     return {conflict,ack,abort,intact:JSON.stringify(before)===JSON.stringify(after)};
   }
   if(action==="read")return await a.read();
   if(action==="replace")return await a.restore(backup,{replace:true,acknowledged:true});
   throw Error("unknown R10 action");
 }finally{a.close();}
}
"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        scope=f"QA_R10_{width}"
        options={"viewport":{"width":width,"height":900 if width==1365 else 844}}
        pc=browser.new_context(**options)
        page=pc.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r10-sentinel','preserved')")
        page.add_script_tag(content=R6)
        page.add_script_tag(content=R10)
        before=page.evaluate(SEED,{"scope":scope})
        assert before["events"]==3 and before["pending"]==2,(width,before)
        exported=page.evaluate(RUN,{"scope":scope,"action":"export"})
        assert exported["counts"]=={"events":3,"pending":2}
        backup=exported["backup"]
        assert len(backup["sha256"])==64
        assert page.evaluate(RUN,{"scope":scope,"action":"verify","backup":backup})=={"events":3,"pending":2}
        assert page.evaluate(RUN,{"scope":scope,"action":"tamper","backup":backup})["blocked"]
        assert page.evaluate(RUN,{"scope":scope,"action":"disabled","backup":backup})["blocked"]
        assert page.evaluate("localStorage.getItem('r10-sentinel')")=="preserved"

        ipad=browser.new_context(**options)
        restored=ipad.new_page()
        restored.goto(BASE,wait_until="domcontentloaded")
        restored.add_script_tag(content=R6)
        restored.add_script_tag(content=R10)
        # Create R6 database schema, without inserting any events.
        restored.evaluate("""async (scope)=>{
          const db=await MathV2JournalR6.createCanary({learner_scope:scope,enabled:false});
          db.close();
        }""",scope)
        out=restored.evaluate(RUN,{"scope":scope,"action":"import","backup":backup})
        assert out=={"restored_events":3,"restored_pending":2},(width,"transfer")
        after=restored.evaluate(RUN,{"scope":scope,"action":"read"})
        assert after["events"]==backup["events"] and after["pending"]==backup["pending"]
        controls=restored.evaluate(RUN,{"scope":scope,"action":"conflict","backup":backup})
        assert controls=={"conflict":True,"ack":True,"abort":True,"intact":True},(width,"restore guard")
        assert restored.evaluate(RUN,{"scope":scope,"action":"replace","backup":backup})==out
        restored.reload(wait_until="domcontentloaded")
        restored.add_script_tag(content=R6)
        restored.add_script_tag(content=R10)
        latest=restored.evaluate(RUN,{"scope":scope,"action":"read"})
        assert latest==after,(width,"events and pending receipts survive reload")
        ipad.close()
        pc.close()
        print("PASS R10",width,"consistent journal+outbox SHA backup, device import, guarded replacement and atomic rollback")
    browser.close()
