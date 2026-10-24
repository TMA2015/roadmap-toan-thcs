#!/usr/bin/env python3
"""Real built MkDocs browser QA for four source-locked R9 previews.
Runs against the local CI preview server, not Github's Markdown blob UI.
This is Chromium responsive simulation, not physical iPad Safari certification.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/kien-thuc/"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium is required for knowledge-page QA")

TOPICS = {
    "02-so-va-phep-tinh": ("Quy tắc dấu với số nguyên", "02-04-truc-so-gia-tri-tuyet-do.svg"),
    "03-ti-le-ti-le-thuc": ("Phân biệt tỉ lệ thuận và tỉ lệ nghịch", "03-04-ti-le-thuan-nghich.svg"),
    "06-phan-tich-da-thuc": ("Phối hợp nhiều phương pháp", "06-02-so-do-chon-phuong-phap.svg"),
    "09-he-phuong-trinh": ("Cùng một hệ, so sánh phương pháp thế và cộng đại số", "09-04-y-nghia-hinh-hoc-he.svg"),
}
VIEWPORTS = {
    "pc": {"width": 1365, "height": 900},
    "ipad-sim": {"width": 820, "height": 1180},
    "phone": {"width": 390, "height": 844},
}

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, viewport in VIEWPORTS.items():
        context = browser.new_context(viewport=viewport)
        for topic, (marker, graphic) in TOPICS.items():
            page = context.new_page()
            errors = []
            page.on("pageerror", lambda err: errors.append(str(err)))
            url = BASE + topic + "/preview-composition-r9/"
            resp = page.goto(url, wait_until="domcontentloaded", timeout=25000)
            assert resp is not None and resp.status == 200, f"{topic} missing built preview"
            page.locator(".md-content").wait_for(state="visible", timeout=15000)
            text = page.locator(".md-content").inner_text(timeout=10000)
            assert marker.casefold() in text.casefold(), f"{topic}: missing core/method block"
            source = page.locator(".md-content .math-related-practice")
            assert source.count() == 1, f"{topic}: expected one exact related-practice link group"
            assert source.locator("a").count() == 2, f"{topic}: expected practice and approved Written item"
            assert source.locator("a").nth(0).inner_text().strip().startswith("Luyện ngay")
            assert source.locator("a").nth(1).inner_text().strip().startswith("Làm tự luận")
            assert source.evaluate("(x)=>getComputedStyle(x).display")== "flex", f"{topic}: opt-in CSS failed to load"
            img=page.locator('img[src*="'+graphic+'"]')
            assert img.count() == 1, f"{topic}: missing actual retained diagram"
            img.scroll_into_view_if_needed()
            img.evaluate("(img) => img.decode()", timeout=18000)
            assert img.evaluate("(img) => img.complete && img.naturalWidth > 100"), f"{topic}: SVG failed to load"
            assert page.evaluate("""() =>
                document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2
            """), f"{topic}: {device}: horizontal document overflow"
            assert not errors, f"{topic}: {device}: JS error(s) {errors[:3]}"
            if device in ("pc","ipad-sim"):
                Path("previews").mkdir(exist_ok=True)
                source.scroll_into_view_if_needed()
                page.screenshot(path=f"previews/math-r9-{topic}-{device}.png",
                    animations="disabled", full_page=False)
            print("PASS",topic,device,"SVG, CSS, links, layout, no JS errors",flush=True)
            page.close()
        context.close()
    browser.close()
