#!/usr/bin/env python3
"""R15 journal-first gate on a real Practice MCQ: no score before v2 commit.
All test contexts disposable. No real learner data or live V2 counter switch.
"""
from pathlib import Path
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
PRACTICE=BASE+"kien-thuc/02-so-va-phep-tinh/bai-tap/"
SOURCES=[
 Path("scripts/prototypes/math-v2-idb-journal-r6.js"),
 Path("scripts/prototypes/math-v2-journal-first-submit-r8.js"),
 Path("scripts/prototypes/math-v2-stable-submission-intent-r13.js"),
 Path("scripts/prototypes/math-v2-practice-journal-first-gate-r15.js")
]
JS="\n".join(p.read_text(encoding="utf8") for p in SOURCES)
SNAP="async () => await MathV2PracticeCommitGateR15.qaSnapshot()"
PENDING="async () => await MathV2PracticeCommitGateR15.qaPending()"
LEGACY="localStorage.getItem('toan-thcs-practice-v1')"
def browser_context(browser,width,scope,fail_next=0):
    c=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
    config="window.__MATH_R15_QA_CONFIG__="+json.dumps({
      "enabled":True,"learner_scope":scope,"failNext":fail_next
    })+";\n"
    c.add_init_script(script=config+JS)
    return c
def start(page):
    r=page.goto(PRACTICE,wait_until="domcontentloaded")
    assert r and r.status==200
    q=page.locator("[data-practice-bank-v2] .practice-option").first
    q.wait_for(state="visible",timeout=30000)
    return q

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
      args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        plain=browser.new_context(viewport={"width":width,"height":900})
        page=plain.new_page()
        button=start(page)
        assert page.evaluate("typeof MathV2PracticeCommitGateR15")=="undefined"
        button.click()
        page.locator(".practice-feedback").wait_for(state="visible",timeout=20000)
        assert json.loads(page.evaluate(LEGACY))["questions"],(width,"legacy mode unchanged")
        plain.close()

        ctx=browser_context(browser,width,f"QA_R15_RETRY_{width}",fail_next=1)
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        button=start(page)
        page.evaluate("localStorage.setItem('r15-sentinel','preserved')")
        legacy_before=page.evaluate(LEGACY)
        button.click()
        page.get_by_role("button",name="Thử lưu lại lượt này").wait_for(state="visible",timeout=20000)
        assert "Chưa lưu được lượt thử nghiệm v2" in page.locator(".practice-save-warning").inner_text()
        assert page.evaluate(LEGACY)==legacy_before,(width,"no original Practice write before failed v2 commit")
        assert page.evaluate(SNAP)["events"]==0,(width,"no phantom score")
        pending=page.evaluate(PENDING)
        assert len(pending)==1 and pending[0]["state"]=="STAGED"
        first_event_id=pending[0]["event_id"]
        diag=page.evaluate("() => MathV2PracticeCommitGateR15.qaDiagnostics()")
        assert diag["captureCalls"]==1 and diag["commitCalls"]==1
        # Simultaneous repeat clicks should not create a second event.
        retry=page.get_by_role("button",name="Thử lưu lại lượt này")
        retry.click()
        page.wait_for_function("async () => (await MathV2PracticeCommitGateR15.qaSnapshot()).events===1",timeout=20000)
        page.locator(".practice-feedback strong").first.wait_for(state="visible",timeout=20000)
        assert len(page.evaluate(PENDING))==0
        assert page.evaluate("localStorage.getItem('r15-sentinel')")=="preserved"
        saved=page.evaluate(LEGACY)
        assert json.loads(saved)["questions"] and sum(x["attempted"] for x in json.loads(saved)["questions"].values())==1
        journal=page.evaluate("""async () => {
          const j=await MathV2JournalR6.createCanary({learner_scope:'QA_R15_RETRY_"""+str(width)+"""'});
          try{return await j.readEvents();}finally{j.close();}
        }""")
        assert len(journal)==1 and journal[0]["event_id"]==first_event_id
        assert journal[0]["kind"]=="answer_attempt" and journal[0]["evidence_class"]=="FORMATIVE"
        assert not errors,(width,errors)
        # Additional actual attempt is new; refreshing before the new click
        # does not cause hidden double-counting.
        page.reload(wait_until="domcontentloaded")
        assert page.evaluate(SNAP)["events"]==1
        assert page.evaluate(PENDING)==[]
        ctx.close()

        # An ordinary successful first click immediately journals before the
        # existing legacy save, with no two-phase failure UI shown.
        ctx=browser_context(browser,width,f"QA_R15_SUCCESS_{width}")
        page=ctx.new_page()
        start(page).click()
        page.wait_for_function("async () => (await MathV2PracticeCommitGateR15.qaSnapshot()).events===1",timeout=20000)
        page.locator(".practice-feedback strong").first.wait_for(state="visible",timeout=20000)
        assert page.locator(".practice-save-warning").count()==0
        assert sum(x["attempted"] for x in json.loads(page.evaluate(LEGACY))["questions"].values())==1
        assert page.evaluate(PENDING)==[]
        ctx.close()
        print("PASS R15 journal-first Practice",width,
          "failed commit no original score; retry same event ID; success records once; no script in default learner mode")
    browser.close()
