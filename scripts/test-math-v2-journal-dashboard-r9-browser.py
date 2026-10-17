#!/usr/bin/env python3
"""R9 QA projection from persisted R6 IndexedDB journal (desktop/390px).
Runs on disposable isolated browser contexts only, not student-owned storage.
"""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
R6=Path("scripts/prototypes/math-v2-idb-journal-r6.js").read_text(encoding="utf-8")
R9=Path("scripts/prototypes/math-v2-journal-dashboard-projection-r9.js").read_text(encoding="utf-8")
JS=r"""
async ({scope,action})=>{
 const driver=await MathV2JournalR6.createCanary({enabled:action==="seed",learner_scope:scope});
 const ev=(event_id,kind,extra={})=>({
   schema:"math-evidence-event-v2",learner_scope:scope,event_id,
   item_id:"TEST_ASSESSMENT_01",kind,
   evidence_class:MathV2JournalDashboardR9.classes[kind],
   occurred_at:"2026-10-17T11:00:00+07:00",...extra
 });
 try{
   if(action==="seed"){
     await driver.append(ev("EVENT_R901","answer_attempt",{item_id:"Q01",topic_id:"CT02",correct:true}));
     await driver.append(ev("EVENT_R902","readiness_submission",{topic_id:"CT02",
       occurred_at:"2026-10-17T11:01:00+07:00"}));
     await driver.append(ev("EVENT_R903","readiness_submission",{topic_id:"CT02",
       occurred_at:"2026-10-17T11:02:00+07:00",
       result:{correct:4,answered:5,total:5,readiness_state:"FOLLOW_UP"}}));
     await driver.append(ev("EVENT_R904","written_self_check",{topic_id:"CT02",item_id:"WX02"}));
     return {events:(await driver.readEvents()).length};
   }
   const events=await driver.readEvents();
   const report=MathV2JournalDashboardR9.project(events,{learner_scope:scope});
   return {report,source_count:events.length};
 }finally{driver.close();}
}
"""
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        context=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
        page=context.new_page()
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r9-projection-sentinel','preserve')")
        page.add_script_tag(content=R6)
        page.add_script_tag(content=R9)
        scope="QA_R9_"+str(width)
        seeded=page.evaluate(JS,{"scope":scope,"action":"seed"})
        assert seeded["events"]==4
        original=page.evaluate(JS,{"scope":scope,"action":"report"})
        r=original["report"]
        assert r["events"]==4 and r["source"]=="NEW_CANONICAL_V2_ONLY"
        assert r["formative"]["answers"]==1 and r["formative"]["correct"]==1
        assert r["readiness"]["submissions"]==2
        assert r["readiness"]["scored"]==1 and r["readiness"]["unscored"]==1
        assert r["readiness"]["latest_by_assessment"]["TEST_ASSESSMENT_01"]["correct"]==4
        assert r["readiness"]["latest_by_assessment"]["TEST_ASSESSMENT_01"]["readiness_state"]=="FOLLOW_UP"
        assert r["written"]=={"self_checks":1,"automatic_readiness_credit":0}
        assert r["per_topic"]["CT02"]=={
            "formative_answers":1,"formative_correct":1,
            "independent_submissions":2,"written_self_checks":1
        }
        page.reload(wait_until="domcontentloaded")
        page.add_script_tag(content=R6)
        page.add_script_tag(content=R9)
        restored=page.evaluate(JS,{"scope":scope,"action":"report"})
        assert restored==original,(width,"dashboard projection must match after reload")
        assert page.evaluate("localStorage.getItem('r9-projection-sentinel')")=="preserve"
        context.close()
        print("PASS R9 browser",width,"persisted v2 journal → separated counts, unknown score preserved, no original progress rewrite")
    browser.close()
