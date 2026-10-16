#!/usr/bin/env python3
"""CT11–13 desktop/mobile Practice regression with preserved learner storage."""
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE = "http://127.0.0.1:8765/"
TOPICS = (
    ("11-can-thuc", 132),
    ("12-phuong-trinh-bac-hai-viete", 123),
    ("13-goc-va-duong-thang", 156),
)
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in ((1365,900),(390,844)):
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**",lambda route:route.abort())
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('math-ct11-13-ui-only-qa','unchanged')")
        for slug,count in TOPICS:
            topic="CT"+slug[:2]
            response=page.goto(BASE+f"kien-thuc/{slug}/bai-tap/",wait_until="domcontentloaded")
            assert response and response.status==200, slug
            header=page.locator(f'[data-practice-ui-v2="{topic}"]')
            header.wait_for(state="visible",timeout=15000)
            assert header.locator("nav a").count()==3,slug
            assert header.locator("a").first.get_attribute("href")=="#luyen-tap-tuong-tac",slug
            assert f"luyen-tap/tu-luan/?topic={topic}" in header.locator("a").nth(1).get_attribute("href"),slug
            assert "/tu-kiem-tra/" in header.locator("a").last.get_attribute("href"),slug
            assert page.locator("[data-practice-bank-v2]").count()==1,slug
            page.locator("[data-practice-bank-v2] .practice-option").first.wait_for(state="visible",timeout=18000)
            assert page.locator(".practice-title").count()==1,slug
            assert page.locator(".practice-subtitle").inner_text().strip()==f"Bộ đề {count} câu",slug
            assert page.locator(".practice-progress").inner_text().strip().startswith("Câu 1/10"),slug
            assert page.locator(".md-content__inner h2").filter(has_text="Luyện tập tương tác").count()==0,slug
            assert page.locator("[data-legacy-exercises]").count()==0,slug
            text=page.locator(".md-content__inner").inner_text()
            assert "Luyện tự luận & trình bày" not in text and "Theo dõi sau khi luyện" not in text,slug
            assert "Xem lời giải" not in text,slug
            assert page.evaluate("localStorage.getItem('math-ct11-13-ui-only-qa')")=="unchanged"
        assert not errors,(width,errors)
        print("PASS CT11–13",width,"px, single 132/123/156-question Practice players, no paper drawer")
        ctx.close()
    browser.close()
