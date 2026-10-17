#!/usr/bin/env python3
"""R14: real Practice/Readiness legacy-success hooks -> R13 stable intents.
QA test-only JS injected by Playwright. No real data or production V2 cutover.
"""
from pathlib import Path
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
PRACTICE=BASE+"kien-thuc/02-so-va-phep-tinh/bai-tap/"
READINESS=BASE+"kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/"
SOURCES=[
    Path("scripts/prototypes/math-v2-idb-journal-r6.js"),
    Path("scripts/prototypes/math-v2-journal-first-submit-r8.js"),
    Path("scripts/prototypes/math-v2-stable-submission-intent-r13.js"),
    Path("scripts/prototypes/math-v2-real-submission-intent-bridge-r14.js")
]
JS="\n".join(s.read_text(encoding="utf-8") for s in SOURCES)
SNAP="async () => await MathV2RealIntentBridgeR14.qaSnapshot()"
PENDING="async () => await MathV2RealIntentBridgeR14.qaPending()"
DIAG="() => MathV2RealIntentBridgeR14.qaDiagnostics()"

def context(browser,width,scope,defer=False):
    c=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
    settings="window.__MATH_R14_QA_CONFIG__="+json.dumps({
        "enabled":True,"learner_scope":scope,"deferCommit":defer
    })+";\n"
    c.add_init_script(script=settings+JS)
    return c

def practice(page):
    res=page.goto(PRACTICE,wait_until="domcontentloaded")
    assert res and res.status==200
    option=page.locator("[data-practice-bank-v2] .practice-option").first
    option.wait_for(state="visible",timeout=30000)
    option.click()
    page.locator(".practice-feedback").wait_for(state="visible",timeout=25000)

def readiness(page):
    res=page.goto(READINESS,wait_until="domcontentloaded")
    assert res and res.status==200
    page.locator("[data-readiness-check-v1] .readiness-card").wait_for(timeout=30000)
    page.locator(".readiness-options input[type=radio]").first.check()
    page.evaluate("window.confirm=()=>true")
    page.locator(".readiness-btn-primary").first.click()
    page.locator(".readiness-result").wait_for(state="visible",timeout=30000)

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        # Without injection, the normal student page has no R14 code.
        normal=browser.new_context(viewport={"width":width,"height":844})
        page=normal.new_page()
        page.goto(PRACTICE,wait_until="domcontentloaded")
        assert page.evaluate("typeof window.MathV2RealIntentBridgeR14")=="undefined"
        assert page.evaluate("typeof window.MathV2SubmissionIntentR13")=="undefined"
        normal.close()

        ctx=context(browser,width,f"QA_R14_NORMAL_{width}")
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r14-sentinel','original')")
        practice(page)
        page.wait_for_function("async () => (await MathV2RealIntentBridgeR14.qaSnapshot()).events===1",timeout=25000)
        original_p=json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))
        assert original_p["questions"],(width,"original Practice storage")
        readiness(page)
        page.wait_for_function("async () => (await MathV2RealIntentBridgeR14.qaSnapshot()).events===2",timeout=25000)
        counts=page.evaluate(SNAP)
        assert counts["formative"]["answers"]==1 and counts["readiness"]["submissions"]==1
        assert counts["written"]=={"self_checks":0,"assessment_credit":0}
        assert counts["pending"]==2,(width,"R6 outbox remains pending by design")
        assert json.loads(page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')"))["assessments"]
        assert page.evaluate(PENDING)==[]
        assert page.evaluate("localStorage.getItem('r14-sentinel')")=="original"
        assert not errors,(width,errors)
        page.reload(wait_until="domcontentloaded")
        assert page.evaluate(SNAP)==counts,(width,"R14 journal persists reload")
        assert page.evaluate("async () => await MathV2RealIntentBridgeR14.qaRecover()")==[]
        assert page.evaluate(SNAP)==counts,(width,"empty retry creates no events")
        ctx.close()

        # Intents can persist in their own IndexedDB when the downstream
        # journal step is paused after the existing successful legacy save.
        ctx=context(browser,width,f"QA_R14_DEFER_{width}",defer=True)
        page=ctx.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        practice(page)
        page.wait_for_function("async () => (await MathV2RealIntentBridgeR14.qaPending()).length===1",timeout=25000)
        first=page.evaluate(PENDING)[0]
        assert json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))["questions"]
        readiness(page)
        page.wait_for_function("async () => (await MathV2RealIntentBridgeR14.qaPending()).length===2",timeout=25000)
        rows=page.evaluate(PENDING)
        assert len({x["event_id"] for x in rows})==2
        assert len({x["submission_key"] for x in rows})==2
        assert page.evaluate(SNAP)["events"]==0,(width,"staged only, no false v2 success")
        assert json.loads(page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')"))["assessments"]
        page.reload(wait_until="domcontentloaded")
        resumed=page.evaluate(PENDING)
        assert resumed==rows,(width,"pending events + IDs persist across refresh")
        outcomes=page.evaluate("async () => await MathV2RealIntentBridgeR14.qaRecover()")
        assert len(outcomes)==2 and all(o["saved"] and o["receipt_persisted"] for o in outcomes)
        restored=page.evaluate(SNAP)
        assert restored["events"]==2 and restored["pending"]==2
        assert restored["formative"]["answers"]==1 and restored["readiness"]["submissions"]==1
        assert page.evaluate(PENDING)==[]
        assert page.evaluate("async () => await MathV2RealIntentBridgeR14.qaRecover()")==[]
        assert page.evaluate(SNAP)==restored
        assert first["event_id"] in {o["event_id"] for o in outcomes}
        ctx.close()

        # Legacy persistence failure must NEVER be represented as a
        # successfully staged v2 submission by the after-success hook.
        for lane,key in (("practice","toan-thcs-practice-v1"),
                         ("readiness","toan-thcs-assessment-v1")):
            ctx=context(browser,width,f"QA_R14_FAILED_{lane.upper()}_{width}")
            page=ctx.new_page()
            page.goto(BASE,wait_until="domcontentloaded")
            page.evaluate("(key) => localStorage.setItem(key,'{invalid-json')",key)
            if lane=="practice":
                practice(page)
                assert page.locator(".practice-save-warning").count()>=1
            else:
                readiness(page)
                assert page.locator(".readiness-save-warning").count()==1
            assert page.evaluate("localStorage.getItem(arguments[0])",key)=="{invalid-json"
            assert page.evaluate(PENDING)==[]
            assert page.evaluate(SNAP)["events"]==0
            ctx.close()
        print("PASS R14 real submission hooks",width,
              "legacy preservation; durable R13 pending intents; reload/replay; no duplicate v2 events or false success")
    browser.close()
