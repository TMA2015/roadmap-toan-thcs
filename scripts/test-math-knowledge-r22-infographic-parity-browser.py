#!/usr/bin/env python3
"""R22 targeted *rendered* parity checks for three hidden infographic posters.

These are visibility/readability regressions on real MkDocs pages, not an
independent academic certification of all 80 hidden source image placements.
Do not write learner state, exercise answers or Firebase data.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required for R22 rendered parity QA")
BASE = "http://127.0.0.1:8765/kien-thuc/"
CASES = (
    ("05-7-hang-dang-thuc", "types",
     ("Hai hạng tử là lập phương", "Bốn hạng tử có hệ số theo mẫu 1–3–3–1"),
     "05-03-nhom-lap-phuong.svg"),
    ("21-thong-ke", "core",
     ("không suy luận vượt quá phạm vi khảo sát", "tên, trục, đơn vị, thang chia"),
     "21-03-bieu-do-chat-luong-loi-sai.svg"),
    ("23-xac-suat", "core",
     ("Kiểm tra trước khi dùng công thức cổ điển", "chưa đủ", "đồng khả năng"),
     "23-02-khong-gian-mau-bien-co.svg"),
)
Path("previews").mkdir(exist_ok=True)

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, width in (("desktop", 1365), ("ipad-sim", 820), ("phone", 390)):
        ctx = browser.new_context(viewport={"width": width, "height": 900})
        for slug, zone, phrases, omitted_poster in CASES:
            page = ctx.new_page()
            errors = []
            page.on("pageerror", lambda e: errors.append(str(e)))
            response = page.goto(BASE + slug + "/", wait_until="domcontentloaded",
                                 timeout=30000)
            assert response and response.status == 200, (slug, device, "missing canonical page")
            root = page.locator(".md-content__inner.math-knowledge-r19")
            root.wait_for(state="visible", timeout=15000)
            section = root.locator("details.topic-learning-card#" + zone)
            assert section.is_visible(), (slug, device, "learning section hidden")
            tabs = section.locator(".tabbed-set .tabbed-labels label")
            blocks = section.locator(".tabbed-set .tabbed-content > .tabbed-block")
            assert tabs.count() >= 2 and tabs.count() == blocks.count(), (
                slug, device, "native semantic tabs missing")
            # Editorial omission is intentional ONLY after preserving unique
            # mathematical/interpretive facts as native text and tables.
            assert root.locator('img[src*="' + omitted_poster + '"]').count() == 0, (
                slug, device, "redundant text poster still displayed")
            indices = {}
            for phrase in phrases:
                matching = [i for i in range(blocks.count())
                            if phrase in (blocks.nth(i).text_content() or "")]
                assert matching, (slug, device, "unique infographic cue lost", phrase)
                idx = matching[0]
                indices[phrase] = idx
                tabs.nth(idx).click()
                assert tabs.nth(idx).get_attribute("aria-selected") == "true", (
                    slug, device, "cue tab did not activate", phrase)
                assert blocks.nth(idx).is_visible(), (
                    slug, device, "cue exists but is not visible", phrase)
                assert phrase in blocks.nth(idx).inner_text(), (
                    slug, device, "cue missing from rendered text", phrase)
            if slug == "05-7-hang-dang-thuc":
                # This is the shared decision flow preceding the method tabs.
                assert section.get_by_text("Quy trình chọn công thức:", exact=False).first.is_visible(), (
                    slug, device, "method-selection flow hidden")
                assert blocks.nth(indices[phrases[0]]).locator("table").count() >= 1, (
                    slug, device, "two-pattern recognition comparison not rendered as a table")
            elif slug == "23-xac-suat":
                check_block = blocks.nth(indices[phrases[0]])
                tabs.nth(indices[phrases[0]]).click()
                assert check_block.locator("table").count() >= 1, (
                    slug, device, "classical probability conditions table missing")
                assert "Đếm đủ và không trùng" in check_block.inner_text(), (
                    slug, device, "equiprobability caveat missing")
            assert page.evaluate(
                "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
            ), (slug, device, "horizontal document overflow")
            assert not errors, (slug, device, "JavaScript errors", errors[:2])
            if device in ("desktop", "phone"):
                page.screenshot(path=f"previews/math-r22-{slug[:2]}-{device}.png",
                                animations="disabled")
            page.close()
        ctx.close()
        print("PASS R22 infographic-to-native rendered parity", device, len(CASES), flush=True)
    browser.close()
