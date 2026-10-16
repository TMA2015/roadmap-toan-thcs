#!/usr/bin/env python3
"""Four-topic Practice published view: one interactive player, no learner paper drawer."""
import shutil
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
TOPICS=("02-so-va-phep-tinh","03-ti-le-ti-le-thuc","04-bieu-thuc-dai-so","21-thong-ke")
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**",lambda r:r.abort())
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('practice-role-qa-sentinel','untouched')")
        for slug in TOPICS:
            topic="CT"+slug[:2]
            response=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded")
            assert response and response.status==200,slug
            entry=page.locator("[data-practice-ui-v2]")
            entry.wait_for(state="visible",timeout=15000)
            assert entry.get_attribute("data-practice-ui-v2")==topic
            assert entry.locator("nav a").count()==3,slug
            assert entry.locator("a").first.get_attribute("href").startswith("#")
            assert "luyen-tap/?topic="+topic in entry.locator("a").nth(1).get_attribute("href")
            assert "/tu-kiem-tra/" in entry.locator("a").last.get_attribute("href")
            assert page.locator("[data-practice-bank-v2]").count()==1,slug
            page.locator("[data-practice-bank-v2] .practice-option").first.wait_for(state="visible",timeout=18000)
            assert page.locator("[data-legacy-exercises]").count()==0,slug
            assert page.locator("[data-practice-level-focus]").count()==0,slug
            assert "Đáp án nhanh" not in page.locator(".md-content__inner").inner_text(),slug
            assert page.evaluate("localStorage.getItem('practice-role-qa-sentinel')")=="untouched"
        assert not errors,(width,errors)
        print("PASS interactive-only Practice",width,"px: four topics, no paper drawers")
        ctx.close()
    browser.close()
