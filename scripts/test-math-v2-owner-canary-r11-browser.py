#!/usr/bin/env python3
"""R11 Parent-facing QA canary: functional page, no production progress, backup/transfer.
Chromium desktop and 390px mobile viewport only. Real iPad Safari owner QA follows.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
PAGE="http://127.0.0.1:8765/qa/math-v2-owner-canary.html"
LEARNER="http://127.0.0.1:8765/luyen-tap/"

def stat(page, id):
    return page.locator("#"+id).inner_text().strip()

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        opts={"viewport":{"width":width,"height":900 if width==1365 else 844},
              "accept_downloads":True}
        ctx=browser.new_context(**opts)
        learner=ctx.new_page()
        learner.goto(LEARNER,wait_until="domcontentloaded")
        assert learner.evaluate("typeof MathV2JournalFirstR8")=="undefined"
        assert learner.evaluate("typeof MathV2JournalBackupR10")=="undefined"
        learner.close()

        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        res=page.goto(PAGE,wait_until="domcontentloaded")
        assert res and res.status==200,(width,"QA page must be deployed")
        assert page.get_by_role("heading",name="Bản thử nghiệm bộ đếm v2").count()==1
        page.locator("#stat-answer").wait_for()
        page.wait_for_function("() => document.querySelector('#stat-answer').textContent==='0'",timeout=20000)
        assert page.locator("#answer-correct").is_disabled(),(width,"no submit before parent enables")
        page.evaluate("localStorage.setItem('r11-unrelated-sentinel','untouched')")
        page.locator("#start").click()
        page.wait_for_function("() => !document.querySelector('#answer-correct').disabled",timeout=20000)
        page.locator("#answer-correct").click()
        page.wait_for_function("() => document.querySelector('#stat-answer').textContent==='1'",timeout=20000)
        assert stat(page,"stat-correct")=="1"
        page.locator("#answer-wrong").click()
        page.wait_for_function("() => document.querySelector('#stat-answer').textContent==='2'",timeout=20000)
        assert stat(page,"stat-correct")=="1"
        page.locator("#readiness").click()
        page.wait_for_function("() => document.querySelector('#stat-readiness').textContent==='1'",timeout=20000)
        assert "không" in page.locator("#grade-note").inner_text().lower() or "chưa" in page.locator("#grade-note").inner_text().lower()
        page.locator("#written").click()
        page.wait_for_function("() => document.querySelector('#stat-written').textContent==='1'",timeout=20000)
        assert stat(page,"stat-pending")=="4"
        assert "Đã lưu" in page.locator("#status").inner_text()
        assert page.evaluate("localStorage.getItem('r11-unrelated-sentinel')")=="untouched"
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") is None
        first=page.evaluate("async () => {const j=await MathV2JournalR6.createCanary({learner_scope:'QA_OWNER_R11'});try{return await j.readEvents();}finally{j.close();}}")
        assert len(first)==4
        assert {x["kind"] for x in first}=={"answer_attempt","readiness_submission","written_self_check"}
        assert all(x["learner_scope"]=="QA_OWNER_R11" for x in first)
        assert not errors,(width,errors)
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 2"),(width,"mobile overflow")

        with page.expect_download() as promise:
            page.locator("#export").click()
        download=promise.value
        assert download.suggested_filename.endswith(".json")
        saved=download.path()
        with open(saved,encoding="utf8") as f:
            backup=json.load(f)
        assert backup["schema"]=="math-v2-journal-backup-r10"
        assert len(backup["events"])==4 and len(backup["pending"])==4
        assert len(backup["sha256"])==64

        # Import to a fresh separate browser context: same opaque QA scope, no account.
        second=browser.new_context(**opts)
        target=second.new_page()
        target.goto(PAGE,wait_until="domcontentloaded")
        # Regression: import must work directly on the receiving PC/iPad,
        # without requiring the separate "Bắt đầu thử nghiệm" button.
        assert target.locator("#restore").is_disabled(),(width,"no file selected")
        assert target.locator("#start").is_enabled(),(width,"QA not yet started")
        target.locator("#file").set_input_files(str(saved))
        assert target.locator("#restore").is_enabled(),(width,"selected backup must unlock import")
        assert "tự bật kho QA" in target.locator("#status").inner_text()
        target.locator("#restore").click()
        target.wait_for_function("() => document.querySelector('#stat-readiness').textContent==='1'",timeout=20000)
        assert stat(target,"stat-answer")=="2"
        assert stat(target,"stat-written")=="1"
        assert stat(target,"stat-pending")=="4"
        assert "khôi phục" in target.locator("#status").inner_text().lower()
        target.reload(wait_until="domcontentloaded")
        target.wait_for_function("() => document.querySelector('#stat-answer').textContent==='2'",timeout=20000)
        assert stat(target,"stat-readiness")=="1",(width,"reload must persist")
        # A real learner backup MUST NOT be misinterpreted as synthetic QA.
        # Use metadata-only synthetic fixtures, never actual student records.
        real_backup={
            "schema":"self-learning-math-local-backup-v1",
            "app":"self-learning-math","version":1,
            "created_at":"2026-10-17T12:00:00+07:00",
            "entries":{},"sha256":"0"*64
        }
        target.locator("#file").set_input_files({
            "name":"real-progress-synthetic.json","mimeType":"application/json",
            "buffer":json.dumps(real_backup).encode("utf8")
        })
        assert target.locator("#restore").is_enabled(),(width,"selected file triggers import")
        target.locator("#restore").click()
        target.wait_for_function(
            "() => document.querySelector('#status').textContent.includes('sao lưu tiến độ học thật')",
            timeout=20000
        )
        rejection=target.locator("#status").inner_text()
        assert "KHÔNG phải bản sao lưu QA R11" in rejection
        assert "Không có dữ liệu nào được nhập" in rejection
        assert stat(target,"stat-answer")=="2" and stat(target,"stat-pending")=="4"
        assert stat(target,"stat-readiness")=="1" and stat(target,"stat-written")=="1"
        # Journal remained byte-for-byte the same after rejecting the real-backup schema.
        unchanged=target.evaluate("""async () => {
            const j=await MathV2JournalR6.createCanary({learner_scope:'QA_OWNER_R11'});
            try {return {events:await j.readEvents(),pending:await j.readPending()};}
            finally {j.close();}
        }""")
        assert unchanged["events"]==backup["events"] and unchanged["pending"]==backup["pending"]

        # Reject unrelated JSON with a distinct, actionable message.
        target.locator("#file").set_input_files({
            "name":"unrelated.json","mimeType":"application/json",
            "buffer":json.dumps({"schema":"unrelated"}).encode("utf8")
        })
        target.locator("#restore").click()
        target.wait_for_function(
            "() => document.querySelector('#status').textContent.includes('Không đúng loại tệp')",
            timeout=20000
        )
        assert stat(target,"stat-answer")=="2"

        # Importing into occupied QA storage must refuse without two consents,
        # even when the page has just reloaded and Start has NOT been pressed.
        assert target.locator("#start").is_enabled(),(width,"fresh reload is not yet active")
        target.locator("#file").set_input_files(str(saved))
        assert target.locator("#restore").is_enabled(),(width,"occupied target direct import")
        target.locator("#restore").click()
        target.wait_for_function("() => document.querySelector('#status').textContent.includes('Chưa nhập dữ liệu')",timeout=20000)
        assert "đã có dữ liệu" in target.locator("#status").inner_text().lower()
        with target.expect_download() as another:
            target.locator("#export").click()
        assert another.value.suggested_filename.endswith(".json")
        target.locator("#confirm-backup").check()
        target.locator("#confirm-replace").check()
        target.locator("#restore").click()
        target.wait_for_function("() => document.querySelector('#status').textContent.includes('khôi phục')",timeout=20000)
        assert stat(target,"stat-answer")=="2",(width,"consented replace preserves counts")
        second.close()

        # Tampered backup must fail before any imported events are written.
        bad=browser.new_context(**opts)
        test=bad.new_page()
        test.goto(PAGE,wait_until="domcontentloaded")
        tampered=json.loads(json.dumps(backup))
        tampered["events"][0]["item_id"]="FORGED_QA_ID"
        test.locator("#file").set_input_files({
            "name":"tampered.json","mimeType":"application/json",
            "buffer":json.dumps(tampered).encode("utf8")
        })
        assert test.locator("#restore").is_enabled(),(width,"tampered import also self-initializes")
        test.locator("#restore").click()
        test.wait_for_function("() => document.querySelector('#status').textContent.includes('Chưa nhập dữ liệu')",timeout=20000)
        assert "BACKUP_SHA_MISMATCH" in test.locator("#status").inner_text()
        assert stat(test,"stat-answer")=="0"
        bad.close()
        ctx.close()
        print("PASS R11 owner canary",width,
              "separate QA counters, downloaded backup, cross-device restore, conflict guard, tamper and reload")
    browser.close()
