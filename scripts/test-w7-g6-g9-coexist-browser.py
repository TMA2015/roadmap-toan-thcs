#!/usr/bin/env python3
"""Same-device Grade6/Grade9 QA coexistence; disposable browser, no live data."""
import shutil
from playwright.sync_api import sync_playwright

BROWSER = shutil.which("google-chrome") or shutil.which("chromium")
assert BROWSER
BASE = "http://127.0.0.1:8765/"
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=BROWSER, headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
    context = browser.new_context(viewport={"width": 820, "height": 1180}, has_touch=True, is_mobile=True, device_scale_factor=2)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    page.goto(BASE + "hoc-theo-lop/", wait_until="domcontentloaded")
    page.locator('[data-grade-select="6"]').click()
    link6 = page.locator('#lop-6 a[href="on-tap-tong-hop-lop-6/"]')
    assert link6.is_visible()
    link6.tap()
    g6 = page.locator("[data-class-mixed-g6-qa]")
    g6.locator('input[type=checkbox]').first.wait_for(timeout=15000)
    g6.locator('input[type=checkbox]').nth(0).check()
    g6.locator('input[type=checkbox]').nth(1).check()
    g6.get_by_role("button", name="Bắt đầu ôn tập").click()
    quiz6 = g6.locator(".cmg6-quiz")
    quiz6.locator(".cmg6-options input").first.wait_for(timeout=15000)
    assert "Câu 1/3" in quiz6.inner_text()
    for i in range(3):
        quiz6.locator(".cmg6-jump button").nth(i).click()
        quiz6.locator(".cmg6-options input").first.check()
    quiz6.get_by_role("button", name="Nộp bài và xem kết quả").click()
    assert "Kết quả ôn tập:" in quiz6.inner_text()
    initial6 = page.evaluate("localStorage.getItem('toan-thcs-class-mixed-quiz-v1')")
    assert initial6
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") is None

    page.goto(BASE + "hoc-theo-lop/", wait_until="domcontentloaded")
    page.locator('[data-grade-select="9"]').click()
    link9 = page.locator('#lop-9-chuong-8 a[href*="tu-kiem-tra-lop-9-qa/"]')
    assert link9.is_visible()
    link9.tap()
    g9 = page.locator("[data-readiness-g9-qa]")
    quiz9 = g9.locator(".r9qa-card")
    quiz9.locator(".r9qa-option input").first.wait_for(timeout=15000)
    for i in range(10):
        quiz9.locator(".r9qa-jump button").nth(i).click()
        quiz9.locator(".r9qa-option input").first.check()
    quiz9.get_by_role("button", name="Nộp bài").click()
    assert "Đã lưu riêng kết quả Readiness lớp 9" in quiz9.inner_text()
    saved9 = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v1'))")
    assert set(saved9["assessments"]) == {"PROB23-G9-CORE-READY-V1"}
    assert len(saved9["assessments"]["PROB23-G9-CORE-READY-V1"]["attempts"]) == 1
    assert page.evaluate("localStorage.getItem('toan-thcs-class-mixed-quiz-v1')") == initial6

    page.reload(wait_until="domcontentloaded")
    g9.locator(".r9qa-card").wait_for(timeout=15000)
    assert "đã lưu 1 lượt" in g9.inner_text()
    assert page.evaluate("localStorage.getItem('toan-thcs-class-mixed-quiz-v1')") == initial6
    assert not errors, errors
    print("PASS W7 combined: G6 formative + G9 independent Readiness coexist on same tablet context without bucket contamination")
    context.close()
    browser.close()
