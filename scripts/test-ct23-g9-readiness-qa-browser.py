#!/usr/bin/env python3
"""QA-only browser test for isolated Grade9 CT23 readiness preview."""
import shutil
from playwright.sync_api import sync_playwright

BROWSER = shutil.which("google-chrome") or shutil.which("chromium")
assert BROWSER
URL = "http://127.0.0.1:8765/kien-thuc/23-xac-suat/tu-kiem-tra-lop-9-qa/"
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=BROWSER, headless=True, args=["--no-sandbox"])
    for width, height in ((1365, 900), (390, 844)):
        context = browser.new_context(viewport={"width": width, "height": height})
        page = context.new_page()
        failures = []
        page.on("pageerror", lambda error: failures.append(str(error)))
        response = page.goto(URL, wait_until="domcontentloaded")
        assert response and response.status == 200
        root = page.locator("[data-readiness-g9-qa]")
        quiz = root.locator(".r9qa-card")
        quiz.locator(".r9qa-option input").first.wait_for(timeout=15000)
        assert quiz.locator(".r9qa-jump button").count() == 10
        assert "Đáp án đúng:" not in quiz.inner_text()
        # Seed legacy independent Readiness and preserve it byte-for-byte.
        legacy='{"assessments":{"PROB23-CORE-READY-V1":{"attempts":[{"grade":6,"correct":9}],"latest":{"correct":9}},"NUM02-CORE-READY-V1":{"best":{"accuracy":0.8}}}}'
        page.evaluate("(raw) => localStorage.setItem('toan-thcs-assessment-v1',raw)",legacy)
        quiz.get_by_role("button", name="Nộp bài").click()
        assert "Còn 10 câu chưa chọn" in root.locator(".r9qa-status").inner_text()
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')")==legacy
        for i in range(10):
            quiz.locator(".r9qa-jump button").nth(i).click()
            quiz.locator(".r9qa-option input").first.check()
        quiz.locator(".r9qa-jump button").first.click()
        assert quiz.locator(".r9qa-option input").first.is_checked()
        quiz.locator(".r9qa-option input").nth(1).check()
        quiz.locator(".r9qa-option input").first.check()
        quiz.get_by_role("button", name="Nộp bài").click()
        assert "Kết quả kiểm thử:" in quiz.inner_text()
        assert quiz.locator(".r9qa-review").count() == 10
        assert "Đã lưu riêng kết quả Readiness lớp 9" in quiz.inner_text()
        snapshot=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-assessment-v1'))""")
        assert snapshot["assessments"]["PROB23-CORE-READY-V1"]=={"attempts":[{"grade":6,"correct":9}],"latest":{"correct":9}}
        assert snapshot["assessments"]["NUM02-CORE-READY-V1"]=={"best":{"accuracy":0.8}}
        grade9=snapshot["assessments"]["PROB23-G9-CORE-READY-V1"]
        assert len(grade9["attempts"])==1
        assert grade9["latest"]["grade"]==9
        assert grade9["latest"]["form_version"]==1
        assert grade9["latest"]["total"]==10
        assert len(grade9["latest"]["items"])==10
        assert grade9["latest"]["source_git_blob"]
        assert not page.evaluate("Object.keys(localStorage).some(k => k==='toan-thcs-class-mixed-quiz-v1')")
        # Refresh leaves prior record and makes QA latest visible (independent Grade9 bucket).
        page.reload(wait_until="domcontentloaded")
        root=page.locator("[data-readiness-g9-qa]")
        root.locator(".r9qa-card").wait_for(timeout=15000)
        assert "đã lưu 1 lượt" in root.inner_text()
        again=page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-assessment-v1'))""")
        assert len(again["assessments"]["PROB23-G9-CORE-READY-V1"]["attempts"])==1
        assert not failures, (width, failures)
        print("PASS Grade9 CT23 desktop/mobile independent saved evidence, old grade6–8 retained, refresh", width)
        context.close()
    browser.close()
