#!/usr/bin/env python3
"""CT08–10 learner Practice smoke at desktop and mobile; no old paper blocks."""
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium/Google Chrome required"
BASE = "http://127.0.0.1:8765/"
TOPICS = (
    ("08-phuong-trinh-bat-phuong-trinh", 132),
    ("09-he-phuong-trinh", 129),
    ("10-ham-so-do-thi", 120),
)
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True, args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in [(1365,900),(390,844)]:
        ctx = browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**",lambda route:route.abort())
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('math-wave3-sentinel','preserved')")
        for slug,total in TOPICS:
            topic = "CT"+slug[:2]
            resp=page.goto(BASE+f"kien-thuc/{slug}/bai-tap/",wait_until="domcontentloaded")
            assert resp and resp.status==200,slug
            entry=page.locator(f'[data-practice-ui-v2="{topic}"]')
            entry.wait_for(state="visible",timeout=15000)
            assert entry.locator("nav a").count()==3,slug
            assert entry.locator("a").first.get_attribute("href")=="#luyen-tap-tuong-tac",slug
            assert f"luyen-tap/tu-luan/?topic={topic}" in entry.locator("a").nth(1).get_attribute("href"),slug
            assert "/tu-kiem-tra/" in entry.locator("a").last.get_attribute("href"),slug
            assert page.locator('[data-practice-bank-v2]').count()==1,slug
            page.locator('[data-practice-bank-v2] .practice-option').first.wait_for(state="visible",timeout=18000)
            assert page.locator(".practice-title").count()==1,slug
            assert page.locator(".practice-subtitle").inner_text().strip()==f"Bộ đề {total} câu",slug
            assert page.locator(".practice-progress").inner_text().strip().startswith("Câu 1/10"),slug
            assert page.locator(".md-content__inner h2").filter(has_text="Luyện tập tương tác").count()==0,slug
            assert page.locator("[data-legacy-exercises]").count()==0,slug
            content=page.locator(".md-content__inner").inner_text()
            assert "Luyện tự luận & trình bày" not in content,slug
            assert "Xem lời giải" not in content and "Theo dõi sau khi luyện" not in content,slug
            assert page.evaluate("localStorage.getItem('math-wave3-sentinel')")=="preserved"
        assert not errors,(width,errors)
        print("PASS CT08–10 interactive-only browser",width,"px (132/129/120 question banks)")
        ctx.close()
    browser.close()
