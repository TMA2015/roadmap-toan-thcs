#!/usr/bin/env python3
"""R2 smoke on desktop/mobile: navigation, separate library pages, legacy URL compatibility."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chrome/Chromium required"
BASE="http://127.0.0.1:8765/"
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx=browser.new_context(viewport={"width":width,"height":height})
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda err:errors.append(str(err)))
        page.goto(BASE+"luyen-tap/",wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('library-r2-qa-sentinel','untouched')")
        assert page.locator(".math-library-entry").count()==4
        assert page.locator("[data-written-exercise-library]").count()==0
        assert page.locator('a.math-library-entry[href="tu-luan/"]').count()==2
        page.locator('a.math-library-entry[href="tu-luan/"]').first.click()
        page.wait_for_url("**/luyen-tap/tu-luan/")
        page.wait_for_function("document.querySelector('[data-written-exercise-library]')?.dataset.ready==='1'",timeout=18000)
        assert page.locator(".written-exercise-card").count()==63
        assert page.locator('select[aria-label="Lọc theo chuyên đề"]').count()==1
        page.goto(BASE+"luyen-tap/?topic=CT02",wait_until="domcontentloaded")
        page.wait_for_url("**/luyen-tap/tu-luan/?topic=CT02",timeout=18000)
        page.wait_for_function("document.querySelector('[data-written-exercise-library]')?.dataset.ready==='1'",timeout=18000)
        assert page.locator('select[aria-label="Lọc theo chuyên đề"]').input_value()=="CT02"
        page.goto(BASE+"luyen-tap/?kind=anchor#wx09-sys-003",wait_until="domcontentloaded")
        page.wait_for_url("**/luyen-tap/tu-luan/?kind=anchor#wx09-sys-003",timeout=18000)
        page.locator(".written-exercise-card#wx09-sys-003").wait_for(state="visible",timeout=18000)
        assert page.evaluate("localStorage.getItem('library-r2-qa-sentinel')")=="untouched"
        page.goto(BASE+"roadmap/",wait_until="domcontentloaded")
        assert page.get_by_role("heading",name="Bản đồ học tập Toán THCS").count()==1
        assert page.locator('.math-library-entry[href="../hoc-theo-lop/"]').count()==1
        assert page.locator('.math-library-entry[href="../kien-thuc/"]').count()==1
        assert not errors,(width,errors)
        print("PASS learner navigation/library R2",width,"px, 63 Written items + legacy filtered redirects")
        ctx.close()
    browser.close()
