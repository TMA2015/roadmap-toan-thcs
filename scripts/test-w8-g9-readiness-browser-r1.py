#!/usr/bin/env python3
"""Owner-gated Grade9 independent Readiness candidate: desktop, phone, touch-emulated tablet."""
import shutil
from playwright.sync_api import sync_playwright

BROWSER = shutil.which("google-chrome") or shutil.which("chromium")
assert BROWSER
URL = "http://127.0.0.1:8765/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9/"
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=BROWSER, headless=True, args=["--no-sandbox"])
    for width, height in ((1365, 900), (390, 844), (820, 1180)):
        context = browser.new_context(viewport={"width": width, "height": height}, has_touch=(width==820), is_mobile=(width==820), device_scale_factor=2 if width==820 else 1)
        page = context.new_page()
        failures = []
        page.on("pageerror", lambda error: failures.append(str(error)))
        hub = page.goto("http://127.0.0.1:8765/hoc-theo-lop/", wait_until="domcontentloaded")
        assert hub and hub.status == 200
        page.locator('button[data-grade-select="9"]').click()
        grade9_link = page.locator('#lop-9-chuong-8 a[href*="tu-kiem-tra-lop-9/"]')
        assert grade9_link.is_visible()
        grade9_link.tap() if width==820 else grade9_link.click()
        page.wait_for_url(URL, timeout=15000)
        assert page.url == URL
        root = page.locator("[data-readiness-g9]")
        quiz = root.locator(".r9-card")
        quiz.locator(".r9-option input").first.wait_for(timeout=15000)
        assert quiz.locator(".r9-jump button").count() == 10
        assert "Đáp án đúng:" not in quiz.inner_text()
        # Seed legacy independent Readiness and preserve it byte-for-byte.
        legacy='{"assessments":{"PROB23-CORE-READY-V1":{"attempts":[{"grade":6,"correct":9}],"latest":{"correct":9}},"NUM02-CORE-READY-V1":{"best":{"accuracy":0.8}}}}'
        page.evaluate("(raw) => localStorage.setItem('toan-thcs-assessment-v1',raw)",legacy)
        quiz.get_by_role("button", name="Nộp bài").click()
        assert "Còn 10 câu chưa chọn" in root.locator(".r9-status").inner_text()
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")==legacy
        for i in range(10):
            quiz.locator(".r9-jump button").nth(i).click()
            quiz.locator(".r9-option input").first.check()
        quiz.locator(".r9-jump button").first.click()
        assert quiz.locator(".r9-option input").first.is_checked()
        quiz.locator(".r9-option input").nth(1).check()
        quiz.locator(".r9-option input").first.check()
        quiz.get_by_role("button", name="Nộp bài").click()
        assert "Kết quả tự kiểm tra:" in quiz.inner_text()
        assert quiz.locator(".r9-review").count() == 10
        assert "Đã lưu kết quả tự kiểm tra lớp 9" in quiz.inner_text()
        snapshot=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-assessment-v1'))""")
        assert snapshot["assessments"]["PROB23-CORE-READY-V1"]=={"attempts":[{"grade":6,"correct":9}],"latest":{"correct":9}}
        assert snapshot["assessments"]["NUM02-CORE-READY-V1"]=={"best":{"accuracy":0.8}}
        grade9=snapshot["assessments"]["PROB23-G9-CORE-READY-V1"]
        assert len(grade9["attempts"])==1
        assert grade9["best"]["accuracy"]==grade9["latest"]["accuracy"]
        assert grade9["latest"]["grade"]==9
        assert grade9["latest"]["role"]=="independent_grade9_readiness"
        assert grade9["latest"]["form_version"]==1
        assert grade9["latest"]["total"]==10
        assert len(grade9["latest"]["items"])==10
        assert grade9["latest"]["source_git_blob"]
        assert not page.evaluate("Object.keys(localStorage).some(k => k==='toan-thcs-class-mixed-quiz-v1')")
        # Refresh leaves prior record and makes QA latest visible (independent Grade9 bucket).
        page.reload(wait_until="domcontentloaded")
        root=page.locator("[data-readiness-g9]")
        root.locator(".r9-card").wait_for(timeout=15000)
        assert "đã lưu 1 lượt" in root.inner_text()
        again=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-assessment-v1'))""")
        assert len(again["assessments"]["PROB23-G9-CORE-READY-V1"]["attempts"])==1
        assert not failures, (width, failures)
        print("PASS W8 Grade9 official Readiness candidate, Grade6-8 isolated, reload and responsive", width)
        context.close()
    browser.close()
