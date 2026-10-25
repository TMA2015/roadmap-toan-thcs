#!/usr/bin/env python3
"""R27 CT11 old 11-02 infographic unique sign-case parity in real MkDocs HTML.
Checks actual visible native teaching text, not only a hidden DOM string.
Does not claim full 25-topic academic parity or physical Safari QA.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

candidate = Path("docs/kien-thuc/11-can-thuc/preview-composition-r10.md").read_text()
source = Path("docs/kien-thuc/11-can-thuc/index.md").read_text()
svg = Path("docs/assets/infographics/11/11-02-can-bac-hai-dieu-kien.svg").read_text()
assert "A &lt; 0" in svg and "|A| = −A" in svg, "11-02 source poster changed"
for cue in ("**Xét dấu trước khi bỏ giá trị tuyệt đối:**", "`A ≥ 0`",
            "`|A| = A`", "`A < 0`", "`|A| = -A`",
            "giữ nguyên `|A|`", "`x < 3`", "`|x - 3| = 3 - x`"):
    assert cue in candidate, ("CT11 old-poster fact missing", cue)
assert "### 3.3. Công thức quan trọng nhất" in source
assert "11-02-can-bac-hai-dieu-kien.svg" not in candidate
for cue in ("`√(50x²) =", "`1/(√5 + 2)`", "`√9 = 3`",
            "mẫu phải khác", "`-3√5 = -√45`"):
    assert cue in candidate, ("CT11 other poster knowledge missing", cue)

chrome = shutil.which("google-chrome") or shutil.which("chromium")
if not chrome:
    raise RuntimeError("Chrome/Chromium required for R27 browser QA")
url = "http://127.0.0.1:8765/kien-thuc/11-can-thuc/"
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
        assert response and response.status == 200, (name, "canonical CT11 missing")
        root = page.locator(".md-content__inner.math-knowledge-r19")
        root.wait_for(state="visible", timeout=15000)
        assert root.locator("details.topic-learning-card").count() == 11
        core = root.locator("details.topic-learning-card#core")
        core.evaluate("(e) => e.open = true")
        sign_cue = core.get_by_text("Xét dấu trước khi bỏ giá trị tuyệt đối:", exact=False)
        labels = core.locator(".tabbed-labels label")
        if not sign_cue.is_visible():
            for i in range(labels.count()):
                labels.nth(i).click()
                if sign_cue.is_visible():
                    break
        assert sign_cue.is_visible(), (name, "native sign cases not visible in tab")
        for cue in ("A ≥ 0", "|A| = A", "A < 0", "|A| = -A",
                    "x < 3", "|x - 3| = 3 - x"):
            assert cue in core.text_content(), (name, "lost sign case", cue)
        assert root.locator('img[src*="11-02-can-bac-hai-dieu-kien.svg"]').count() == 0
        assert page.evaluate(
            "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
        ), (name, "horizontal document overflow")
        font = root.evaluate("(e) => parseFloat(getComputedStyle(e).fontSize)")
        assert font >= (16 if width <= 570 else 17) - .2, (name, "R3 font too small", font)
        assert not errors, (name, "JS errors", errors[:2])
        page.evaluate("document.documentElement.setAttribute('data-md-color-scheme','slate')")
        assert sign_cue.is_visible(), (name, "dark mode hides sign cases")
        if name == "desktop":
            page.emulate_media(media="print")
            assert sign_cue.is_visible(), (name, "print hides sign cases")
        page.screenshot(path=f"previews/math-r27-ct11-{name}.png", animations="disabled")
        ctx.close()
        print("PASS R27 CT11 sign-case infographic parity", name, flush=True)
    browser.close()
