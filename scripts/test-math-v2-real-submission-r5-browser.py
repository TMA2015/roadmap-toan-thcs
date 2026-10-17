#!/usr/bin/env python3
"""R5 isolated test-only bridge, using *real* Practice + Readiness submission paths.
QA contexts are disposable; no browser profile or student history is migrated.
"""
from pathlib import Path
import json, shutil
from playwright.sync_api import sync_playwright
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
R4=Path("scripts/prototypes/math-v2-idb-browser-canary-r4.js").read_text(encoding="utf-8")
R5=Path("scripts/prototypes/math-v2-real-submission-bridge-r5.js").read_text(encoding="utf-8")
PRACTICE=BASE+"kien-thuc/02-so-va-phep-tinh/bai-tap/"
READINESS=BASE+"kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/"
async_counts="""async () => await window.MathV2CanaryBridgeR5.qaSummarize()"""
def bridge_context(browser,width,scope):
    context=browser.new_context(viewport={"width":width,"height":844 if width==390 else 900})
    config="window.__MATH_R5_QA_CONFIG__="+json.dumps({"enabled":True,"learner_scope":scope})+";\n"
    context.add_init_script(script=config+"\n"+R4+"\n"+R5)
    return context

def answer_practice(page):
    page.goto(PRACTICE,wait_until="domcontentloaded")
    answer=page.locator('[data-practice-bank-v2] .practice-option').first
    answer.wait_for(state="visible",timeout=30000)
    answer.click()

def submit_readiness(page):
    page.goto(READINESS,wait_until="domcontentloaded")
    page.locator("[data-readiness-check-v1] .readiness-card").wait_for(timeout=30000)
    page.locator(".readiness-options input[type=radio]").first.check()
    page.evaluate("window.confirm=()=>true")
    page.locator(".readiness-btn-primary").first.click()
    page.locator(".readiness-result").wait_for(state="visible",timeout=30000)

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        scope="QA_R5_"+str(width)
        ctx=bridge_context(browser,width,scope)
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('r5-sentinel','safe')")
        answer_practice(page)
        page.wait_for_function("""async () => (await window.MathV2CanaryBridgeR5.qaRead()).length===1""",timeout=20000)
        baseline=page.evaluate(async_counts)
        assert baseline["formative"]["answers"]==1 and baseline["readiness"]["submissions"]==0,(width,baseline)
        p_store=page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert json.loads(p_store)["questions"],(width,"original Practice saved")
        submit_readiness(page)
        page.wait_for_function("""async () => (await window.MathV2CanaryBridgeR5.qaRead()).length===2""",timeout=20000)
        rows=page.evaluate("async () => await window.MathV2CanaryBridgeR5.qaRead()")
        counts=page.evaluate(async_counts)
        assert {x["kind"] for x in rows}=={"answer_attempt","readiness_submission"},(width,rows)
        assert counts["formative"]["answers"]==1 and counts["readiness"]["submissions"]==1,(width,counts)
        assert counts["written"]=={"self_checks":0,"assessment_credit":0}
        a_store=page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")
        assert json.loads(a_store)["assessments"],(width,"original Readiness saved")
        assert page.evaluate("localStorage.getItem('r5-sentinel')")=="safe"
        page.reload(wait_until="domcontentloaded")
        preserved=page.evaluate(async_counts)
        assert preserved==counts,(width,"R5 IDB events survive reload")
        assert not errors,(width,"javascript errors",errors)
        ctx.close()

        # Corrupt original Practice store: unchanged and no v2 phantom event.
        ctx=bridge_context(browser,width,"QA_R5_BAD_"+str(width))
        page=ctx.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('toan-thcs-practice-v1','{invalid-json')")
        answer_practice(page)
        assert page.locator(".practice-save-warning").count()>=1,(width,"legacy save warning expected")
        assert page.evaluate("async () => (await window.MathV2CanaryBridgeR5.qaRead()).length")==0,(width,"no shadow capture after failed Practice save")
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")=="{invalid-json"
        ctx.close()

        # Corrupt original Readiness store: submitted result is displayed but
        # neither legacy JSON nor the shadow lane is silently overwritten.
        ctx=bridge_context(browser,width,"QA_R5_BADRD_"+str(width))
        page=ctx.new_page()
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('toan-thcs-assessment-v1','{invalid-json')")
        submit_readiness(page)
        assert page.locator(".readiness-save-warning").count()==1,(width,"save error must be reported")
        assert page.evaluate("async () => (await window.MathV2CanaryBridgeR5.qaRead()).length")==0,(width,"no shadow capture after failed Readiness save")
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")=="{invalid-json"
        ctx.close()
        print("PASS R5 on",width,"px: actual Practice + Readiness submissions; off-by-default, separate v2 counters, no shadow on save failure")
    browser.close()
