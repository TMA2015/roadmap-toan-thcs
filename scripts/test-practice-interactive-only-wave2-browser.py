#!/usr/bin/env python3
"""CT05–07: desktop/mobile visible only one 120-question interactive player."""
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE = "http://127.0.0.1:8765/"
TOPICS = ("05-7-hang-dang-thuc", "06-phan-tich-da-thuc", "07-phan-thuc-dai-so")
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True, args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**", lambda route:route.abort())
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('math-wave2-readonly','preserved')")
        for slug in TOPICS:
            topic="CT"+slug[:2]
            resp=page.goto(BASE+"kien-thuc/"+slug+"/bai-tap/",wait_until="domcontentloaded")
            assert resp and resp.status==200,slug
            entry=page.locator('[data-practice-ui-v2="'+topic+'"]')
            entry.wait_for(state="visible",timeout=15000)
            assert entry.locator("nav a").count()==3,slug
            assert entry.locator("a").first.get_attribute("href")=="#luyen-tap-tuong-tac"
            assert "luyen-tap/tu-luan/?topic="+topic in entry.locator("a").nth(1).get_attribute("href")
            assert "/tu-kiem-tra/" in entry.locator("a").last.get_attribute("href")
            assert page.locator('[data-practice-bank-v2]').count()==1,slug
            page.locator('[data-practice-bank-v2] .practice-option').first.wait_for(state="visible",timeout=18000)
            assert page.locator(".practice-title").count()==1,slug
            assert page.locator(".practice-subtitle").inner_text().strip()=="Bộ đề 120 câu",slug
            assert page.locator('.practice-progress').inner_text().strip().startswith("Câu 1/10"),slug
            assert page.locator('.md-content__inner h2').filter(has_text="Luyện tập tương tác").count()==0,slug
            assert page.locator('[data-legacy-exercises]').count()==0,slug
            text=page.locator(".md-content__inner").inner_text()
            assert "Luyện tự luận & trình bày" not in text,slug
            assert "Xem lời giải" not in text and "Theo dõi sau khi luyện" not in text,slug
            assert page.evaluate("localStorage.getItem('math-wave2-readonly')")=="preserved"
        assert not errors,(width,errors)
        print("PASS CT05–07 Practice",width,"px, 120-question banks, no old paper blocks")
        ctx.close()
    browser.close()
