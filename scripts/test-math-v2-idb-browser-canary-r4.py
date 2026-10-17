#!/usr/bin/env python3
"""QA-only IndexedDB v2 canary: browser transactions, reload, multi-tab, backup, abort."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import shutil

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
BASE="http://127.0.0.1:8765/"
SOURCE=Path("scripts/prototypes/math-v2-idb-browser-canary-r4.js").read_text(encoding="utf-8")
SCRIPT=r"""
async ({scope, action, backup}) => {
 const api=window.MathV2IDBCanaryR4;
 const event=(id,kind,extra={})=>({schema:"math-evidence-event-v2",
  event_id:id,learner_scope:scope,item_id:"QA-ITEM-01",kind,
  evidence_class:({
   answer_attempt:"FORMATIVE",readiness_submission:"INDEPENDENT_ASSESSMENT",
   written_self_check:"SELF_REPORTED",remediation_action:"REMEDIATION",
   exam_submission:"EXAM_ASSESSMENT"
  })[kind],occurred_at:"2026-10-17T09:00:00+07:00",...extra});
 const c=await api.createCanary({learner_scope:scope,enabled:action!=="disabled"});
 try {
  if(action==="disabled"){
   let blocked=false;
   try{await c.append(event("EVENT_0001","answer_attempt",{correct:true}));}
   catch(e){blocked=e.message==="CANARY_FLAG_OFF";}
   return {blocked,count:(await c.read()).length};
  }
  if(action==="first"){
   const first=await c.append(event("EVENT_0001","answer_attempt",{correct:true}));
   const duplicate=await c.append(event("EVENT_0001","answer_attempt",{correct:true}));
   let conflict=false;
   try{await c.append(event("EVENT_0001","answer_attempt",{correct:false}));}
   catch(e){conflict=e.message==="EVENT_ID_CONFLICT";}
   await c.append(event("EVENT_0002","written_self_check"));
   return {first,duplicate,conflict,counts:await c.summarize()};
  }
  if(action==="tab"){
   return await c.append(event("EVENT_0003","readiness_submission"));
  }
  if(action==="other_tab"){
   return await c.append(event("EVENT_0004","answer_attempt",{correct:false}));
  }
  if(action==="check"){
   return {rows:(await c.read()).length,counts:await c.summarize(),
     backup:await c.exportBackup("2026-10-17T10:00:00+07:00")};
  }
  if(action==="import"){
   return await c.restore(backup);
  }
  if(action==="abort"){
   let aborted=false;
   try{await c.restore(backup,{replace:true,acknowledged:true,simulateAbort:true});}
   catch(e){aborted=e.message==="SIMULATED_ATOMIC_ABORT";}
   return {aborted,rows:(await c.read()).length,counts:await c.summarize()};
  }
  if(action==="tamper"){
   const bad=structuredClone(backup);bad.events[0].correct=!bad.events[0].correct;
   let rejected=false;
   try{await c.verifyBackup(bad);}
   catch(e){rejected=e.message==="BACKUP_HASH_MISMATCH";}
   return {rejected};
  }
  if(action==="reimport"){
   let conflict=false,ack=false;
   try{await c.restore(backup);}catch(e){conflict=e.message==="RESTORE_CONFLICT";}
   try{await c.restore(backup,{replace:true});}catch(e){ack=e.message==="ACK_REQUIRED";}
   return {conflict,ack};
  }
  throw Error("unknown test action");
 }finally{c.close();}
}
"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        context=browser.new_context(viewport={"width":width,"height":height})
        page=context.new_page()
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('math-v2-qa-sentinel','untouched')")
        page.add_script_tag(content=SOURCE)
        scope=f"QA_R4_{width}"
        disabled=page.evaluate(SCRIPT,{"scope":scope,"action":"disabled"})
        assert disabled=={"blocked":True,"count":0},(width,"flag defaults off")
        first=page.evaluate(SCRIPT,{"scope":scope,"action":"first"})
        assert first["first"]["written"] is True and first["duplicate"]["duplicate"] is True and first["conflict"]
        assert first["counts"]["written"]=={"self_checks":1,"assessment_credit":0}
        tab=context.new_page()
        tab.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        tab.add_script_tag(content=SOURCE)
        # Two tabs writing different IDs into one IndexedDB scope must not drop either.
        concurrent=page.evaluate("""async ({scope,script})=>{
          const task=eval("("+script+")");
          return task({scope,action:"tab"});
        }""",{"scope":scope,"script":SCRIPT})
        assert concurrent["written"]
        other=tab.evaluate(SCRIPT,{"scope":scope,"action":"other_tab"})
        assert other["written"]
        tab.close()
        page.reload(wait_until="domcontentloaded")
        page.add_script_tag(content=SOURCE)
        check=page.evaluate(SCRIPT,{"scope":scope,"action":"check"})
        assert check["rows"]==4,(width,"reopen retains four unique events")
        assert check["counts"]["formative"]=={"answers":2,"correct":1}
        assert check["counts"]["readiness"]=={"submissions":1}
        assert check["counts"]["written"]=={"self_checks":1,"assessment_credit":0}
        backup=check["backup"]
        assert page.evaluate(SCRIPT,{"scope":scope,"action":"tamper","backup":backup})["rejected"]
        aborted=page.evaluate(SCRIPT,{"scope":scope,"action":"abort","backup":backup})
        assert aborted["aborted"] and aborted["rows"]==4,(width,"restore abort is atomic")
        assert page.evaluate("localStorage.getItem('math-v2-qa-sentinel')")=="untouched"
        context2=browser.new_context(viewport={"width":width,"height":height})
        page2=context2.new_page()
        page2.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page2.add_script_tag(content=SOURCE)
        imported=page2.evaluate(SCRIPT,{"scope":scope,"action":"import","backup":backup})
        assert imported["restored"]==4,(width,"device import")
        assert page2.evaluate(SCRIPT,{"scope":scope,"action":"check"})["counts"]==check["counts"]
        controls=page2.evaluate(SCRIPT,{"scope":scope,"action":"reimport","backup":backup})
        assert controls=={"conflict":True,"ack":True},(width,"restore replacement confirmation")
        context2.close()
        context.close()
        print("PASS Math Phase4 R4: browser IDB canary",width,"flag, reload, isolated counts, transactions, SHA backup and restore")
    browser.close()
