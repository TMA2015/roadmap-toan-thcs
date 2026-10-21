#!/usr/bin/env python3
"""Wave 7: CT22–25 live MCQ, specialist exit routes, CT01 orientation on desktop/mobile."""
import shutil
from urllib.parse import urljoin
from playwright.sync_api import sync_playwright

CHROME=shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME
BASE="http://127.0.0.1:8765/"
TOPICS=("22-dai-luong-dac-trung","23-xac-suat","24-bai-toan-thuc-te","25-tong-hop-on-thi-10")
with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,args=["--no-sandbox","--disable-dev-shm-usage"])
    for width,height in ((1365,900),(390,844)):
        ctx=browser.new_context(viewport={"width":width,"height":height})
        ctx.route("https://generativelanguage.googleapis.com/**",lambda route:route.abort())
        page=ctx.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        page.evaluate("localStorage.setItem('wave7-safe','preserved')")
        for slug in TOPICS:
            topic="CT"+slug[:2]
            resp=page.goto(BASE+f"kien-thuc/{slug}/bai-tap/",wait_until="domcontentloaded")
            assert resp and resp.status==200,slug
            header=page.locator(f'[data-practice-ui-v2="{topic}"]')
            header.wait_for(state="visible",timeout=15000)
            assert header.locator("nav a").count()==3,slug
            assert header.locator("a").first.get_attribute("href")=="#luyen-tap-tuong-tac"
            assert "luyen-tap/tu-luan/?topic="+topic in header.locator("a").nth(1).get_attribute("href")
            assert "/tu-kiem-tra/" in header.locator("a").last.get_attribute("href")
            assert page.locator('[data-practice-bank-v2]').count()==1,slug
            page.locator('[data-practice-bank-v2] .practice-option').first.wait_for(state="visible",timeout=18000)
            assert page.locator(".practice-title").count()==1,slug
            assert page.locator(".practice-subtitle").inner_text().strip().startswith("Luyện thích ứng:"),slug
            assert page.locator(".practice-progress").inner_text().strip().startswith("Câu 1/10"),slug
            assert page.locator("[data-practice-level-focus]").count()==0,slug
            assert page.locator(".md-content__inner h2").filter(has_text="Luyện tập tương tác").count()==0,slug
            assert "Xem lời giải" not in page.locator(".md-content__inner").inner_text(),slug
            if topic=="CT22":
                assert "THPT" in page.locator(".md-content__inner").inner_text()
            article=page.locator(".md-content__inner")
            # Evaluate the real link destination, not a particular MkDocs
            # attribute spelling (raw/rewritten relative URLs can differ).
            links=article.locator("a").evaluate_all(
                "(els)=>els.map(a=>({text:a.textContent.trim(),href:a.getAttribute('href'),url:a.href}))"
            )
            if topic=="CT23":
                matched=[a for a in links if "Bộ 10 bài tự luận xác suất" in a["text"]]
                assert len(matched)==1,(slug,"missing special written link",links[-15:])
                assert urljoin(page.url,matched[0]["href"]).endswith(
                    "/kien-thuc/23-xac-suat/tu-kiem-tra-tu-luan/"
                ),(slug,matched)
            if topic=="CT25":
                for label,target in [
                    ("Bài toán kinh điển","bai-toan-kinh-dien"),
                    ("Bài mỏ neo A25","kho-bai-mo-neo"),
                    ("Thư viện đề luyện","thu-vien-de-luyen"),
                    ("Kỹ năng làm bài","tu-danh-gia-ky-nang-thi"),
                ]:
                    matched=[a for a in links if label in a["text"]]
                    assert len(matched)==1,(slug,label,links[-20:])
                    assert urljoin(page.url,matched[0]["href"]).endswith(
                        "/kien-thuc/25-tong-hop-on-thi-10/"+target+"/"
                    ),(slug,label,matched)
            assert page.evaluate("localStorage.getItem('wave7-safe')")=="preserved"
        r=page.goto(BASE+"kien-thuc/01-ban-do-chuong-trinh/bai-tap/",wait_until="domcontentloaded")
        assert r and r.status==200
        assert page.locator("[data-practice-bank-v2]").count()==0
        for name,destination in [
            ("Bản đồ học tập","/roadmap/"),
            ("Học theo lớp","/hoc-theo-lop/"),
        ]:
            links=page.locator(".md-content__inner a").evaluate_all(
                "(els)=>els.map(a=>({text:a.textContent.trim(),href:a.getAttribute('href')}))"
            )
            matched=[a for a in links if name in a["text"]]
            assert len(matched)==1,(name,links)
            assert urljoin(page.url,matched[0]["href"]).endswith(destination),(name,matched)
        assert "01-M1-01" not in page.locator(".md-content__inner").inner_text()
        assert not errors,(width,errors)
        print("PASS final cleanup Wave 7",width,"px 4 live topics plus CT01 guidance")
        ctx.close()
    browser.close()
