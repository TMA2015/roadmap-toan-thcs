#!/usr/bin/env python3
"""R24 CT04 actual canonical MkDocs parity of hidden 04-03 text infographic.

Verify old-poster-only 'lập biểu thức từ lời văn' survives as native §5
two-column method/examples; no invented CTA. Browser widths include iPad
simulation (not physical Safari). Does not certify other hidden infographics.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required for CT04 browser QA")
URL = "http://127.0.0.1:8765/kien-thuc/04-bieu-thuc-dai-so/"
PHRASES = (
    "Lập biểu thức từ lời văn (mở rộng)",
    "Chọn biến và nêu ý nghĩa",
    "chuyển từng quan hệ thành phép toán",
    "đơn vị, điều kiện và tính hợp lí",
    "Hai số nguyên liên tiếp",
    "n + 1",
    "Chu vi hình chữ nhật",
    "P = 2(a + b)",
    "Quãng đường khi chuyển động đều",
    "s = v·t",
)
Path("previews").mkdir(exist_ok=True)
with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, width in (("desktop", 1365), ("ipad-sim", 820), ("phone", 390)):
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda err: errors.append(str(err)))
        resp = page.goto(URL, wait_until="domcontentloaded", timeout=30000)
        assert resp and resp.status == 200, (device, "canonical CT04 page missing")
        root = page.locator(".md-content__inner.math-knowledge-r19")
        root.wait_for(state="visible", timeout=15000)
        assert root.locator("details.topic-learning-card").count() == 11, (
            device, "source sections changed")
        section = root.locator("details.topic-learning-card#types")
        assert section.count() == 1, (device, "§5 missing")
        section.evaluate("(node) => node.open = true")
        assert section.is_visible(), (device, "§5 hidden")
        # R30 owner-approved change: preserve the exact eleven source methods
        # in four semantic HORIZONTAL tabs, not one long vertical table.
        tabs = section.locator(".tabbed-labels label")
        assert tabs.count() == 4, (device, "CT04 grouped method tabs absent")
        assert section.locator(".tabbed-block tbody tr").count() == 11, (
            device, "one or more original method rows missing")
        assert section.locator(".tabbed-block a[href*='bai-tap/']").count() == 11, (
            device, "11 verified method CTAs missing/duplicated")
        tabs.last.click()
        assert root.locator('img[src*="04-03-dang-bai-trong-tam.svg"]').count() == 0, (
            device, "duplicative giant infographic is visible")
        content = section.text_content()
        for phrase in PHRASES:
            assert phrase in content, (device, "lost poster cue", phrase)
        matches = section.locator("table").filter(has_text="Hai số nguyên liên tiếp")
        assert matches.count() == 1, (device, "native comparison table missing")
        table = matches.first
        assert table.locator("tr").count() == 4, (device, "all three examples required")
        assert table.locator("tr").first.locator("th").count() == 2, (
            device, "not a two-column comparison")
        assert table.locator("a").count() == 0, (
            device, "unverified modelling example acquired a fake practice link")
        assert section.locator(".tabbed-block table").count() == 4, (
            device, "canonical methods not partitioned into four original-row tables")
        assert page.evaluate(
            "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
        ), (device, "horizontal document overflow")
        font = root.evaluate("(node) => parseFloat(getComputedStyle(node).fontSize)")
        assert font >= (16 if width <= 570 else 17) - .2, (
            device, "R3 text too small", font)
        assert not errors, (device, "JavaScript errors", errors[:2])
        if device in ("desktop", "phone"):
            page.screenshot(path=f"previews/math-r24-ct04-{device}.png",
                            animations="disabled")
        # Dark mode should not hide native table/text.
        page.evaluate("""() => document.documentElement.setAttribute(
            'data-md-color-scheme', 'slate')""")
        assert table.is_visible() and "s = v·t" in section.inner_text(), (
            device, "dark mode hides the examples")
        if device == "desktop":
            page.emulate_media(media="print")
            assert table.is_visible(), (device, "print hides native examples")
            assert section.evaluate(
                "(node) => getComputedStyle(node).display") != "none", (
                device, "print hides §5")
        page.close()
        ctx.close()
        print("PASS R24 CT04 old-poster native §5 parity", device, flush=True)
    browser.close()
