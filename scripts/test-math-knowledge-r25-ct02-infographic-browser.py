#!/usr/bin/env python3
"""R25 CT02 infographic-to-native parity on the actual canonical MkDocs page.
Only certifies two identified unique cues, not all 25 topics or all posters.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

source = Path("docs/kien-thuc/02-so-va-phep-tinh/index.md").read_text()
candidate = Path("docs/kien-thuc/02-so-va-phep-tinh/preview-composition-r9.md").read_text()
svg2 = Path("docs/assets/infographics/02/02-02-kien-thuc-cot-loi.svg").read_text()
svg3 = Path("docs/assets/infographics/02/02-03-dang-bai-trong-tam.svg").read_text()
assert "Trừ số âm</text>" in svg2 and "= cộng số đối</text>" in svg2
assert "48 − 73 + 25 = 0" in svg3
assert "**Trừ một số nguyên:**" in candidate
assert "a - b = a + (-b)" in candidate
assert "7 - (-3) = 7 + 3 = 10" in candidate
assert "48 - 73 + 25 = -25 + 25 = 0" in candidate
assert "02-04-truc-so-gia-tri-tuyet-do.svg" in candidate
assert "02-02-kien-thuc-cot-loi.svg" not in candidate
assert "02-03-dang-bai-trong-tam.svg" not in candidate
# Do not edit the academic source or convert a poster cue into a fake bank link.
assert "### 3.3. Quy tắc dấu với số nguyên" in source
assert "### Dạng 1 – Thực hiện phép tính" in source
assert candidate.count("mode=remediation&focus=so-nguyen-phep-tinh") >= 1

chrome = shutil.which("google-chrome") or shutil.which("chromium")
if not chrome:
    raise RuntimeError("Chrome/Chromium required for R25 browser QA")
url = "http://127.0.0.1:8765/kien-thuc/02-so-va-phep-tinh/"
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=chrome, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    for name, width in (("desktop", 1365), ("ipad-sim", 820), ("phone", 390)):
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        resp = page.goto(url, wait_until="domcontentloaded", timeout=30000)
        assert resp and resp.status == 200, (name, "CT02 canonical URL missing")
        root = page.locator(".md-content__inner.math-knowledge-r19")
        root.wait_for(state="visible", timeout=15000)
        assert root.locator("details.topic-learning-card").count() == 11, (name, "11 source sections")
        core = root.locator("#core")
        methods = root.locator("#types")
        for card in (core, methods):
            card.evaluate("(e) => e.open = true")
        assert "Trừ một số nguyên:" in core.text_content(), (name, "missing sign rule")
        assert "7 - (-3) = 7 + 3 = 10" in core.text_content(), (name, "missing subtraction example")
        assert "48 - 73 + 25 = -25 + 25 = 0" in methods.text_content(), (
            name, "missing intermediate negative example")
        assert root.locator('img[src*="02-02-kien-thuc-cot-loi.svg"]').count() == 0
        assert root.locator('img[src*="02-03-dang-bai-trong-tam.svg"]').count() == 0
        assert root.locator('img[src*="02-04-truc-so-gia-tri-tuyet-do.svg"]').count() == 1
        assert page.evaluate(
            "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
        ), (name, "horizontal overflow")
        font = root.evaluate("(e) => parseFloat(getComputedStyle(e).fontSize)")
        assert font >= (16 if width <= 570 else 17) - .2, (name, "font below R3", font)
        assert not errors, (name, "JS errors", errors[:2])
        page.evaluate("document.documentElement.setAttribute('data-md-color-scheme','slate')")
        assert "Trừ một số nguyên:" in core.text_content(), (name, "dark lost sign rule")
        if name == "desktop":
            page.emulate_media(media="print")
            assert core.evaluate("(e) => getComputedStyle(e).display") != "none"
            assert methods.evaluate("(e) => getComputedStyle(e).display") != "none"
        page.screenshot(path=f"previews/math-r25-ct02-{name}.png", animations="disabled")
        ctx.close()
        print("PASS R25 CT02 native infographic parity", name, flush=True)
    browser.close()
