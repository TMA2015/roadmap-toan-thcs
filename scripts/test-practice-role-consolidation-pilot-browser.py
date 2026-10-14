#!/usr/bin/env python3
"""Read-only four-topic learner presentation smoke. Browser-desktop and phone.

No item migration, answer change, learner history mutation, or system-verified grades.
"""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chrome/Chromium must be installed"
BASE="http://127.0.0.1:8765/"
TOPICS={
  "02-so-va-phep-tinh":"02-G6-WR-01",
  "03-ti-le-ti-le-thuc":"03-M1-01",
  "04-bieu-thuc-dai-so":"04-WR-01",
  "21-thong-ke":"21-WR-01",
}
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('practice-role-qa-sentinel', 'untouched')")
        for slug,old_id in TOPICS.items():
            response=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded")
            assert response and response.status==200,slug
            static_entry=page.locator("[data-practice-ui-v2]")
            static_entry.wait_for(state="visible",timeout=15000)
            assert static_entry.get_attribute("data-practice-ui-v2")=="CT"+slug[:2]
            assert static_entry.locator("nav a").count()==3,slug
            root=page.locator("[data-practice-role-pilot]")
            root.wait_for(state="visible",timeout=15000)
            assert root.locator("h2").inner_text()=="Luyện tập trực tiếp",slug
            assert "không phải bài Tự kiểm tra" in root.inner_text(),slug
            assert root.locator("a").count()==3,slug
            assert root.locator("a").first.get_attribute("href").startswith("#"),slug
            assert "luyen-tap/?topic=CT"+slug[:2] in root.locator("a").nth(1).get_attribute("href"),slug
            assert "/tu-kiem-tra/" in root.locator("a").last.get_attribute("href"),slug
            options=page.locator("[data-practice-bank-v2] .practice-option")
            options.first.wait_for(state="visible",timeout=18000)
            if slug=="03-ti-le-ti-le-thuc":
                assert page.locator("[data-practice-level-focus] .practice-level-button").count()==4
            drawer=page.locator("[data-legacy-exercises]")
            assert drawer.count()==1,slug
            assert not drawer.evaluate("(node)=>node.open"),slug
            assert old_id in (drawer.text_content() or ""), (slug,"Original paper source must remain")
            drawer.locator(":scope > summary").click()
            assert drawer.evaluate("(node)=>node.open"), (slug,"legacy disclosure opens")
            assert old_id in drawer.inner_text(), (slug,"original paper text becomes visible")
            drawer.locator(":scope > summary").click()
            assert not drawer.evaluate("(node)=>node.open"),(slug,"disclosure recloses")
            anchor=drawer.locator("h3,h4,h2").first.get_attribute("id")
            assert anchor,slug
            page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/#"+anchor,wait_until="domcontentloaded")
            page.locator("[data-legacy-exercises]").wait_for(timeout=15000)
            assert page.locator("[data-legacy-exercises]").evaluate("(node)=>node.open"),(slug,"legacy deep links")
            options.first.wait_for(state="visible",timeout=18000)
            assert page.evaluate("localStorage.getItem('practice-role-qa-sentinel')")=="untouched"
        assert not errors,(width,errors)
        print("PASS practice role pilot",width,"px: 4 topics, interactive primary, paper source/deep links preserved")
        ctx.close()
    browser.close()
print("BOUNDARY: no grading or academic relabeling certified")
