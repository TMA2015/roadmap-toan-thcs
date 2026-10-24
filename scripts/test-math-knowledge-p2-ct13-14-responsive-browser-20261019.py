#!/usr/bin/env python3
"""Browser QA for reviewed CT13/CT14 drawing cues at desktop/tablet/phone widths.
The tablet viewport is a responsive Chrome simulation, NOT real iPad Safari QA.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/kien-thuc/"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium executable required for knowledge QA")

PREVIEWS = Path("previews")
PREVIEWS.mkdir(exist_ok=True)
TOPICS = {
    "13-goc-va-duong-thang": [
        "Gợi ý tự phác hình",
        "Chỉ đánh dấu góc vuông tại",
        "Chưa đánh dấu góc vuông tại",
        "kết luận cần chứng minh",
        "góc đồng vị",
    ],
    "14-tam-giac": [
        "Gợi ý tự phác hình",
        "cạnh huyền – góc nhọn",
        "cạnh góc vuông – góc nhọn kề",
        "dùng một hình khác",
        "không gộp cả hai bộ điều kiện",
    ],
}
VIEWPORTS = [
    ("desktop", {"width": 1440, "height": 900}),
    ("tablet", {"width": 820, "height": 1180}),
    ("phone", {"width": 390, "height": 844}),
]

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
    for device, viewport in VIEWPORTS:
        context = browser.new_context(viewport=viewport, device_scale_factor=1)
        for slug, markers in TOPICS.items():
            page = context.new_page()
            errors = []
            page.on("pageerror", lambda exc: errors.append(str(exc)))
            response = page.goto(BASE + slug + "/", wait_until="domcontentloaded")
            assert response and response.status == 200, f"{slug}: missing learner page"
            # The real learner must select the Knowledge tab before opening Core.
            tab = page.get_by_role("tab", name="Kiến thức")
            assert tab.count() == 1, f"{slug} {device}: missing Knowledge tab"
            tab.click()
            lesson = page.locator("details.topic-learning-card#core")
            lesson.locator("summary").wait_for(state="visible", timeout=20000)
            assert page.locator("details.topic-learning-card").count() == 11, (
                f"{slug} {device}: 11 major knowledge sections required"
            )
            if lesson.get_attribute("open") is None:
                lesson.locator("summary").click()
            assert lesson.get_attribute("open") is not None, (
                f"{slug} {device}: Core knowledge panel did not open"
            )
            cue = lesson.locator("blockquote").filter(has_text="Gợi ý tự phác hình")
            assert cue.count() == 1, f"{slug} {device}: missing/duplicated sketch cue"
            cue.scroll_into_view_if_needed(timeout=10000)
            assert cue.is_visible(), f"{slug} {device}: sketch cue hidden"
            text = cue.inner_text()
            for marker in markers:
                assert marker.casefold() in text.casefold(), (
                    f"{slug} {device}: lost drawing guidance: {marker}"
                )
            assert cue.evaluate("""node => {
                const box = node.getBoundingClientRect();
                return box.width > 100 && box.left >= -2 &&
                       box.right <= window.innerWidth + 2;
            }"""), f"{slug} {device}: sketch cue extends beyond the viewport"
            assert page.evaluate("""() => document.documentElement.scrollWidth <=
                document.documentElement.clientWidth + 2"""), (
                    f"{slug} {device}: page creates horizontal overflow"
                )
            assert not errors, f"{slug} {device}: browser error(s) {errors}"
            page.screenshot(
                path=str(PREVIEWS / f"knowledge-p2-{slug[:2]}-{device}.png"),
                animations="disabled", full_page=False
            )
            print(f"PASS learner sketch cue: CĐ{slug[:2]} {device}", flush=True)
            page.close()
        context.close()
    browser.close()

expected = list(PREVIEWS.glob("knowledge-p2-*.png"))
assert len(expected) == 6 and all(p.stat().st_size > 2000 for p in expected), (
    "Expected six inspectable P2 visual previews"
)
print("PASS: CT13/14 P2 accordion, sketch instructions, "
      "responsive overflow and six saved desktop/tablet/phone screenshots.")
