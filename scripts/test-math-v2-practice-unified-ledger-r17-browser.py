#!/usr/bin/env python3
"""R17: the real Practice MCQ callback uses R16 atomic intent/event/outbox.
Only disposable browser contexts + source-injected QA gate; never student data.
"""
from pathlib import Path
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
BASE="http://127.0.0.1:8765/"
PRACTICE=BASE+"kien-thuc/02-so-va-phep-tinh/bai-tap/"
SCRIPTS=[
 Path("scripts/prototypes/math-v2-unified-ledger-r16.js"),
 Path("scripts/prototypes/math-v2-practice-unified-ledger-gate-r17.js")
]
JS="\n".join(p.read_text(encoding="utf8") for p in SCRIPTS)
LEGACY="localStorage.getItem('toan-thcs-practice-v1')"
SNAP="async () => await MathV2PracticeCommitGateR15.qaSnapshot()"
ROWS="async () => await MathV2PracticeCommitGateR15.qaRead()"
PENDING="async () => await MathV2PracticeCommitGateR15.qaPending()"
def fixture(browser,width,scope):
    ctx=browser.new_context(viewport={"width":width,"height":900 if width==1365 else 844})
    init="window.__MATH_R17_QA_CONFIG__="+json.dumps({"enabled":True,"learner_scope":scope})+";\n"
    ctx.add_init_script(script=init+JS)
    return ctx
def start(page):
    result=page.goto(PRACTICE,wait_until="domcontentloaded")
    assert result and result.status==200
    choice=page.locator("[data-practice-bank-v2] .practice-option").first
    choice.wait_for(state="visible",timeout=30000)
    return choice
def count_legacy(page):
    raw=page.evaluate(LEGACY)
    if raw is None: return 0
    return sum(q["attempted"] for q in json.loads(raw)["questions"].values())
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        normal=browser.new_context(viewport={"width":width,"height":850})
        p=normal.new_page()
        option=start(p)
        assert p.evaluate("typeof MathV2PracticeCommitGateR15")=="undefined"
        option.click()
        p.locator(".practice-feedback").wait_for(state="visible",timeout=20000)
        assert count_legacy(p)==1
        normal.close()

        scope=f"QA_R16_R17_{width}"
        ctx=fixture(browser,width,scope)
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e: errors.append(str(e)))
        choice=start(page)
        original=page.evaluate(LEGACY)
        page.evaluate("localStorage.setItem('r17-safe-sentinel','same')")
        page.evaluate("window.__MATH_R17_QA_CONFIG__.failNext=1")
        choice.click()
        page.get_by_role("button",name="Thử lưu lại lượt này").wait_for(state="visible",timeout=20000)
        assert page.evaluate(LEGACY)==original,(width,"legacy result cannot be saved before R16")
        first=page.evaluate(ROWS)
        assert len(first["intents"])==1 and first["intents"][0]["state"]=="STAGED"
        assert first["events"]==[] and first["outbox"]==[],(width,"atomic abort across all 3 stores")
        original_id=first["intents"][0]["event_id"]
        original_key=first["intents"][0]["submission_key"]
        saved_on_source=page.evaluate("async () => await MathV2PracticeCommitGateR15.qaExport()")
        assert saved_on_source["schema"]=="math-v2-unified-ledger-backup-r16"
        assert len(saved_on_source["intents"])==1 and not saved_on_source["events"]
        assert len(saved_on_source["sha256"])==64

        # After browser reload the unresolved intent is still in ONE R16 DB.
        page.reload(wait_until="domcontentloaded")
        again=page.evaluate(PENDING)
        assert len(again)==1 and again[0]["event_id"]==original_id
        assert again[0]["submission_key"]==original_key
        start(page).click()
        page.wait_for_function("async () => (await MathV2PracticeCommitGateR15.qaSnapshot()).events===1",timeout=20000)
        page.locator(".practice-feedback strong").first.wait_for(state="visible",timeout=20000)
        assert count_legacy(page)==1,(width,"exactly one legacy attempt")
        summary=page.evaluate(SNAP)
        assert summary["intents"]==1 and summary["staged"]==0 and summary["saved"]==1
        assert summary["events"]==1 and summary["pending"]==1
        assert summary["formative"]["answers"]==1
        assert summary["readiness"]["submissions"]==0
        assert summary["written"]["automatic_readiness_credit"]==0
        rows=page.evaluate(ROWS)
        assert rows["intents"][0]["event_id"]==original_id
        assert rows["events"][0]["event_id"]==original_id
        assert rows["outbox"][0]["event_id"]==original_id
        assert not errors,(width,errors)
        assert page.evaluate("localStorage.getItem('r17-safe-sentinel')")=="same"
        page.reload(wait_until="domcontentloaded")
        assert page.evaluate(SNAP)==summary,(width,"no phantom replay after refresh")
        ctx.close()

        # Cross-device transfer of a STILL-STAGED intent, including its
        # original event_id. The receiving device finishes the real MCQ click.
        source=fixture(browser,width,f"QA_R16_R17_MOVE_{width}")
        source_page=source.new_page()
        start(source_page)
        source_page.evaluate("window.__MATH_R17_QA_CONFIG__.failNext=1")
        source_page.locator("[data-practice-bank-v2] .practice-option").first.click()
        source_page.get_by_role("button",name="Thử lưu lại lượt này").wait_for(timeout=20000)
        portable=source_page.evaluate("async () => await MathV2PracticeCommitGateR15.qaExport()")
        assert len(portable["intents"])==1 and len(portable["events"])==0
        moved_event_id=portable["intents"][0]["event_id"]
        assert count_legacy(source_page)==0

        dest=fixture(browser,width,f"QA_R16_R17_MOVE_{width}")
        target=dest.new_page()
        start(target)
        imported=target.evaluate(
            "async backup => await MathV2PracticeCommitGateR15.qaImport(backup)",portable)
        assert imported=={"restored_intents":1,"restored_events":0,"restored_pending":0}
        assert target.evaluate(PENDING)[0]["event_id"]==moved_event_id
        target.locator("[data-practice-bank-v2] .practice-option").first.click()
        target.wait_for_function("async () => (await MathV2PracticeCommitGateR15.qaSnapshot()).events===1",timeout=20000)
        target.locator(".practice-feedback strong").first.wait_for(timeout=20000)
        assert count_legacy(target)==1
        assert target.evaluate(ROWS)["events"][0]["event_id"]==moved_event_id
        assert len(target.evaluate(PENDING))==0
        dest.close()
        source.close()
        print("PASS R17",width,
            "Practice-before-grade atomic R16; failed commit no credit; reload/transfer staged ID; no duplicate")
    browser.close()
