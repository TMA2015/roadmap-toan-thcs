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
        quiz.get_by_role("button", name="Nộp bài").click()
        assert "Còn 10 câu chưa chọn" in root.locator(".r9qa-status").inner_text()
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
        # QA must never create a Readiness result or any other student attempt.
        assert page.evaluate("localStorage.length") == 0
        assert page.evaluate("sessionStorage.length") == 0
        assert not failures, (width, failures)
        print("PASS independent Grade9 CT23 mobile and desktop", width)
        context.close()
    browser.close()
