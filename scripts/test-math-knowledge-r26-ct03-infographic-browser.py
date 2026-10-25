#!/usr/bin/env python3
"""R26 CT03 native parity of old 03-03 model-selection/units-check cue.
Does not certify all infographics or physical iPad Safari.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

candidate = Path("docs/kien-thuc/03-ti-le-ti-le-thuc/preview-composition-r9.md").read_text()
svg = Path("docs/assets/infographics/03/03-03-dang-bai-trong-tam.svg").read_text()
for cue in ("ĐỌC KỸ", "ĐỔI ĐƠN VỊ", "CHỌN MÔ HÌNH", "KIỂM TRA", "Đơn vị và tính hợp lí"):
    assert cue in svg, ("CT03 infographic source changed", cue)
for cue in ("Quy trình nhận dạng nhanh (từ infographic cũ)", "Đổi về cùng đơn vị",
            "Chọn mô hình", "Kiểm tra đơn vị và tính hợp lí",
            "cùng khối lượng công việc", "cùng năng suất"):
    assert cue in candidate, ("CT03 poster knowledge missing", cue)
assert "03-03-dang-bai-trong-tam.svg" not in candidate
assert "03-04-ti-le-thuan-nghich.svg" in candidate
assert "## 🧩 5. Các dạng bài cần nắm vững" in candidate
section = candidate.split("## 🧩 5. Các dạng bài cần nắm vững", 1)[1].split("## 🚀 6.", 1)[0]
assert "Quy trình nhận dạng nhanh (từ infographic cũ)" in section
assert "mode=remediation" not in section.split("Quy trình nhận dạng nhanh (từ infographic cũ)", 1)[1].split("### Dạng 1", 1)[0], "No invented CTA"

chrome = shutil.which("google-chrome") or shutil.which("chromium")
if not chrome:
    raise RuntimeError("Chrome/Chromium required for CT03 browser QA")
url = "http://127.0.0.1:8765/kien-thuc/03-ti-le-ti-le-thuc/"
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=chrome, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    for name, width in (("desktop", 1365), ("ipad-sim", 820), ("phone", 390)):
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        response = page.goto(url, wait_until="domcontentloaded", timeout=30000)
        assert response and response.status == 200, (name, "canonical CT03 missing")
        root = page.locator(".md-content__inner.math-knowledge-r19")
        root.wait_for(state="visible", timeout=15000)
        assert root.locator("details.topic-learning-card").count() == 11
        methods = root.locator("details.topic-learning-card#types")
        methods.evaluate("(e) => e.open = true")
        content = methods.text_content()
        for cue in ("Quy trình nhận dạng nhanh", "Đổi về cùng đơn vị",
                    "Chọn mô hình", "Kiểm tra đơn vị và tính hợp lí",
                    "cùng khối lượng công việc"):
            assert cue in content, (name, cue)
        assert root.locator('img[src*="03-03-dang-bai-trong-tam.svg"]').count() == 0
        assert root.locator('img[src*="03-04-ti-le-thuan-nghich.svg"]').count() == 1
        assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"), (name, "overflow")
        font = root.evaluate("(e) => parseFloat(getComputedStyle(e).fontSize)")
        assert font >= (16 if width <= 570 else 17) - .2, (name, "font too small", font)
        assert not errors, (name, errors[:2])
        page.evaluate("document.documentElement.setAttribute('data-md-color-scheme','slate')")
        assert "Quy trình nhận dạng nhanh" in methods.text_content(), (name, "dark")
        if name == "desktop":
            page.emulate_media(media="print")
            assert methods.evaluate("(e) => getComputedStyle(e).display") != "none"
        page.screenshot(path=f"previews/math-r26-ct03-{name}.png", animations="disabled")
        ctx.close()
        print("PASS R26 CT03 model-selection infographic parity", name, flush=True)
    browser.close()
