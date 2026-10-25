#!/usr/bin/env python3
"""R23 actual MkDocs browser QA: CT07/CT09 infographic-only cues in native reading.

Run after mkdocs build --strict with the local preview server on :8765.
Checks visibility, contextual tables, responsive layouts and print; no learner writes.
Does not certify unrelated hidden infographics or independent physical iPad Safari.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required for R23 browser parity QA")
BASE = "http://127.0.0.1:8765/kien-thuc/"
CASES = (
    ("07-phan-thuc-dai-so", "Tự đối chiếu tư duy trước khi luyện tập",
     ("vẫn bị loại sau khi rút gọn", "rút gọn trước", "quy đồng trước",
      "miền xác định ban đầu"), "07-04-dang-bai-loi-sai.svg", 3),
    ("09-he-phuong-trinh", "Hai nhóm dữ kiện dễ bỏ sót",
     ("Bài toán về tuổi", "Bài toán hình học", "tại cùng một thời điểm",
      "cùng đơn vị", "gợi ý nhận dạng dữ kiện"),
     "09-03-bai-toan-thuc-te-loi-sai.svg", 2),
)
Path("previews").mkdir(exist_ok=True)

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, width in (("desktop", 1365), ("ipad-sim", 820), ("phone", 390)):
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        for slug, heading, phrases, hidden_poster, min_rows in CASES:
            page = ctx.new_page()
            errors = []
            page.on("pageerror", lambda err: errors.append(str(err)))
            response = page.goto(BASE + slug + "/", wait_until="domcontentloaded",
                                 timeout=30000)
            assert response and response.status == 200, (slug, device, "canonical page unavailable")
            root = page.locator(".md-content__inner.math-knowledge-r19")
            root.wait_for(state="visible", timeout=15000)
            assert root.locator("details.topic-learning-card").count() == 11, (
                slug, device, "source section coverage changed")
            assert root.locator('img[src*="' + hidden_poster + '"]').count() == 0, (
                slug, device, "redundant old text poster is visible")
            # The editorial note belongs to a later, optionally folded source
            # section; opening it is the actual learner interaction.
            section = root.locator("details.topic-learning-card").filter(has_text=heading)
            assert section.count() == 1, (slug, device, "source section missing or duplicated")
            section.evaluate("(node) => node.open = true")
            assert section.is_visible(), (slug, device, "source section cannot open")
            assert heading in section.inner_text(), (slug, device, "editorial note not rendered")
            for phrase in phrases:
                assert phrase in section.inner_text(), (slug, device, "lost source cue", phrase)
            tables = section.locator("table")
            # R30 nests CT09's original two-column comparison table inside
            # the richer four-column Entrance10 row. Select the actual
            # source comparison, not its enclosing exam table wrapper.
            matches = [tables.nth(i) for i in range(tables.count())
                       if phrases[0] in (tables.nth(i).text_content() or "")
                       and tables.nth(i).locator("tr").first.locator("th").count() == 2]
            assert len(matches) == 1, (slug, device, "native comparison table missing")
            table = matches[0]
            assert table.locator("tr").count() >= min_rows, (
                slug, device, "table rows omitted")
            assert table.locator("tr").first.locator("th").count() == 2, (
                slug, device, "expected side-by-side comparison headings")
            assert page.evaluate(
                "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
            ), (slug, device, "document horizontal overflow")
            font = root.evaluate("(node) => parseFloat(getComputedStyle(node).fontSize)")
            assert font >= (16 if width <= 570 else 17) - .2, (
                slug, device, "R3 text became too small", font)
            assert not errors, (slug, device, "JavaScript errors", errors[:2])
            if device in ("desktop", "phone"):
                page.screenshot(path=f"previews/math-r23-{slug[:2]}-{device}.png",
                                animations="disabled")
            if device == "desktop":
                page.emulate_media(media="print")
                assert section.evaluate("(node) => getComputedStyle(node).display") != "none", (
                    slug, device, "print hides edited section")
            page.close()
        ctx.close()
        print("PASS R23 infographic-to-native rendered parity", device, len(CASES), flush=True)
    browser.close()
