#!/usr/bin/env python3
"""R7: real Practice and independent Readiness -> atomic v2 journal + outbox.
No learner credentials/data; all browser contexts and scopes are disposable QA.
"""
from pathlib import Path
import json, shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
R6=Path("scripts/prototypes/math-v2-idb-journal-r6.js").read_text(encoding="utf-8")
R7=Path("scripts/prototypes/math-v2-real-journal-bridge-r7.js").read_text(encoding="utf-8")
PRACTICE=BASE+"kien-thuc/02-so-va-phep-tinh/bai-tap/"
READINESS=BASE+"kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/"
JS_SNAPSHOT="async () => await window.MathV2JournalBridgeR7.qaSnapshot()"
JS_DIAG="() => window.MathV2JournalBridgeR7.qaDiagnostics()"

def make_context(browser,width,scope,fail=False):
    context=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
    cfg="window.__MATH_R7_QA_CONFIG__="+json.dumps({
        "enabled":True,"learner_scope":scope,"simulateJournalFailure":fail
    })+";\n"
    context.add_init_script(script=cfg+R6+"\n"+R7)
    return context

def submit_practice(page):
    r=page.goto(PRACTICE,wait_until="domcontentloaded")
    assert r and r.status==200
    first=page.locator("[data-practice-bank-v2] .practice-option").first
    first.wait_for(state="visible",timeout=30000)
    first.click()
    page.locator(".practice-feedback").wait_for(state="visible",timeout=18000)

def submit_readiness(page):
    r=page.goto(READINESS,wait_until="domcontentloaded")
    assert r and r.status==200
    page.locator("[data-readiness-check-v1] .readiness-card").wait_for(timeout=30000)
    page.locator(".readiness-options input[type=radio]").first.check()
    page.evaluate("window.confirm=()=>true")
    page.locator(".readiness-btn-primary").first.click()
    page.locator(".readiness-result").wait_for(state="visible",timeout=30000)

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    # Without injection, both new journal and bridge are absent from student UI.
    plain=browser.new_context()
    p=plain.new_page()
    p.goto(PRACTICE,wait_until="domcontentloaded")
    assert p.evaluate("typeof window.MathV2JournalBridgeR7")=="undefined"
    assert p.evaluate("typeof window.MathV2JournalR6")=="undefined"
    plain.close()

    for width in (1365,390):
        scope=f"QA_R7_{width}"
        ctx=make_context(browser,width,scope)
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r7-qa-sentinel','preserved')")
        submit_practice(page)
        page.wait_for_function("async () => (await window.MathV2JournalBridgeR7.qaSnapshot()).events===1",timeout=25000)
        practice=page.evaluate(JS_SNAPSHOT)
        assert practice["formative"]["answers"]==1 and practice["readiness"]["submissions"]==0,(width,practice)
        assert practice["pending"]==1 and practice["written"]["assessment_credit"]==0
        original_practice=page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert json.loads(original_practice)["questions"],(width,"original Practice saved")

        submit_readiness(page)
        page.wait_for_function("async () => (await window.MathV2JournalBridgeR7.qaSnapshot()).events===2",timeout=25000)
        snapshot=page.evaluate(JS_SNAPSHOT)
        assert snapshot["pending"]==2
        assert snapshot["formative"]["answers"]==1 and snapshot["readiness"]["submissions"]==1
        assert snapshot["written"]=={"self_checks":0,"assessment_credit":0}
        kinds=page.evaluate("async () => (await window.MathV2JournalBridgeR7.qaEvents()).map(e=>e.kind)")
        assert set(kinds)=={"answer_attempt","readiness_submission"},(width,kinds)
        original_readiness=page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")
        assert json.loads(original_readiness)["assessments"],(width,"original Readiness saved")
        assert page.evaluate("localStorage.getItem('r7-qa-sentinel')")=="preserved"
        assert not errors,(width,errors)

        page.reload(wait_until="domcontentloaded")
        preserved=page.evaluate(JS_SNAPSHOT)
        assert preserved==snapshot,(width,"journal/outbox survive reload before ACK")
        crashed=page.evaluate("async () => await window.MathV2JournalBridgeR7.qaCrashOnce()")
        assert crashed["crashed"] and crashed["receipt_count"]==1
        assert crashed["snapshot"]["events"]==2 and crashed["snapshot"]["pending"]==2
        retried=page.evaluate("async () => await window.MathV2JournalBridgeR7.qaRetry()")
        assert retried["done"]["acknowledged"]==2
        assert retried["receipt_count"]==2 and retried["duplicateReceiver"]==1
        assert retried["delivered"]==1
        assert retried["snapshot"]["pending"]==0 and retried["snapshot"]["events"]==2
        assert retried["snapshot"]["formative"]==snapshot["formative"]
        assert retried["snapshot"]["readiness"]==snapshot["readiness"]
        page.reload(wait_until="domcontentloaded")
        assert page.evaluate(JS_SNAPSHOT)==retried["snapshot"],(width,"no phantom counters after replay")
        ctx.close()

        # Failure is intentionally injected *after* a real successful legacy
        # save. This proves R5 remains shadow-only: no false claim of a fully
        # reliable authoritative v2 counter before an atomic producer cutover.
        ctx=make_context(browser,width,f"QA_R7_FAIL_{width}",fail=True)
        page=ctx.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        submit_practice(page)
        page.wait_for_function("() => window.MathV2JournalBridgeR7.qaDiagnostics().failures.length===1",timeout=25000)
        diagnostics=page.evaluate(JS_DIAG)
        assert diagnostics["committed"]==0 and diagnostics["started"]==1
        assert diagnostics["failures"]==["R7_QA_JOURNAL_UNAVAILABLE"]
        assert page.evaluate(JS_SNAPSHOT)["events"]==0
        assert json.loads(page.evaluate("localStorage.getItem('toan-thcs-practice-v1')"))["questions"]
        ctx.close()
        print("PASS R7",width,"real Practice/Readiness -> durable journal + outbox; interrupted ACK retry; v2 failure exposed, legacy protected")
    browser.close()
