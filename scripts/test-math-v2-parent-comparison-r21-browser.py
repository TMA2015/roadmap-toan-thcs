#!/usr/bin/env python3
"""R21 independent read-only parent comparison, desktop/mobile Chromium.
The page uses ONLY synthetic built-in fixtures; no authentic backups/accounts.
"""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME,"Chromium required"
URL="http://127.0.0.1:8765/qa/math-v2-parent-comparison-r21.html"
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
         args=["--no-sandbox","--disable-dev-shm-usage"])
    for width in (1365,390):
        ctx=browser.new_context(viewport={"width":width,"height":844})
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda e:errors.append(str(e)))
        response=page.goto(URL,wait_until="domcontentloaded")
        assert response and response.status==200,(width,response.status if response else None)
        page.locator("#status").wait_for(state="visible")
        assert page.locator("#status").get_attribute("data-state")=="NOT_COMPARABLE"
        assert "Chưa thể đối chiếu" in page.locator("#status").inner_text()
        assert page.locator("#old-attempts").inner_text()=="2"
        assert page.locator("#new-attempts").inner_text()=="2"
        assert page.locator("#skill-rows tr").count()==2
        assert "SKILL_NUMBERS" in page.locator("#skill-rows").inner_text()
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth + 1")
        assert page.locator("input[type=file]").count()==0
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
        page.evaluate("localStorage.setItem('qa-r21-sentinel','untouched')")
        page.locator("#paired").click()
        assert page.locator("#status").get_attribute("data-state")=="QA_MATCH"
        assert "dữ liệu MẪU" in page.locator("#status").inner_text()
        assert "Trả lời đúng: 1" in page.locator("#old-correct").inner_text()
        assert page.locator("#skill-note").inner_text().startswith("Tổng lượt câu hỏi của v2: 2")
        page.locator("#mismatch").click()
        assert page.locator("#status").get_attribute("data-state")=="QA_MISMATCH"
        assert "Không khớp" in page.locator("#status").inner_text()
        assert "Trả lời đúng: 2" in page.locator("#old-correct").inner_text()
        assert "Trả lời đúng: 1" in page.locator("#new-correct").inner_text()
        page.locator("#unlinked").click()
        assert page.locator("#status").get_attribute("data-state")=="NOT_COMPARABLE"
        assert "Không tính chênh lệch" in page.locator("#meaning").inner_text()
        assert "Không thể đối chiếu" in page.locator("#readiness").inner_text()
        assert page.evaluate("localStorage.getItem('qa-r21-sentinel')")=="untouched"
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") is None
        assert page.evaluate("indexedDB.databases().then(x=>x.map(y=>y.name))")==[], "QA page must not create a DB"
        assert not errors,(width,errors)
        ctx.close()
        print("PASS R21",width,
            "equal-but-unlinked NOT_COMPARABLE, exact synthetic parity, mismatch, skill overlap; no real storage access")
    browser.close()
