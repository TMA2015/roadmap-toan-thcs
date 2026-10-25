#!/usr/bin/env python3
"""R28: CT09 09-01/02/03 text-poster parity, retain real 09-04 diagram.
A focused academic cue and real-browser regression; NOT full 25-topic parity.
"""
from pathlib import Path
import shutil
from playwright.sync_api import sync_playwright

topic = Path("docs/kien-thuc/09-he-phuong-trinh")
candidate = (topic / "preview-composition-r9.md").read_text()
source = (topic / "index.md").read_text()
assets = Path("docs/assets/infographics/09")
for name in ("09-01-tong-quan.svg", "09-02-the-va-cong-dai-so.svg",
             "09-03-bai-toan-thuc-te-loi-sai.svg"):
    assert (assets / name).exists(), ("original poster lost", name)
    assert name in source, ("expected original source poster missing", name)
    assert name not in candidate, ("duplicate text poster remains", name)
assert "09-04-y-nghia-hinh-hoc-he.svg" in candidate
assert "<line " in (assets / "09-04-y-nghia-hinh-hoc-he.svg").read_text()

# The former poster's substantive choices and practical cues must exist as
# native HTML/Markdown teaching content, not only in a hidden SVG.
for cue in (
    "Rút một ẩn", "Thế vào phương trình kia", "Giải phương trình một ẩn",
    "Phương pháp cộng đại số", "hệ số `1` hoặc `-1`",
    "Rút ẩn tạo phân số phức tạp", "thay nghiệm vào hệ ban đầu",
    "cả hai phương trình", "Chọn hai ẩn", "Đặt điều kiện",
    "hai phương trình độc lập", "Đối chiếu điều kiện",
    "sai dấu", "nhân **cả hai vế", "tuổi", "hình học",
    "chuyển động", "năng suất", "phần trăm",
    "Quãng đường = vận tốc × thời gian",
    "Khối lượng công việc = năng suất × thời gian",
    "Thành tiền = số lượng × đơn giá",
    "giá còn `(100 − p)%` giá gốc",
):
    assert cue.lower() in candidate.lower(), ("CT09 native poster fact missing", cue)
assert "wx09-sys-001" in candidate.lower(), "canonical Written deep link lost"
assert "mode=remediation" in candidate, "contextual Practice link lost"

chrome = shutil.which("google-chrome") or shutil.which("chromium")
if not chrome:
    raise RuntimeError("Chrome/Chromium required for R28 browser QA")
url = "http://127.0.0.1:8765/kien-thuc/09-he-phuong-trinh/"
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
        assert response and response.status == 200, (name, "CT09 route missing")
        root = page.locator(".md-content__inner.math-knowledge-r19")
        root.wait_for(state="visible", timeout=15000)
        assert root.locator("details.topic-learning-card").count() == 11
        root.locator("details.topic-learning-card").evaluate_all(
            "(nodes) => nodes.forEach(node => node.open = true)")
        assert root.get_by_text("giá còn", exact=False).first.is_visible(), (
            name, "native percentage model not visible")
        assert root.get_by_text("Quãng đường = vận tốc", exact=False).first.is_visible(), (
            name, "native motion model not visible")
        assert root.locator('img[src*="09-04-y-nghia-hinh-hoc-he.svg"]').count() == 1
        for suffix in ("09-01-", "09-02-", "09-03-"):
            assert root.locator(f'img[src*="{suffix}"]').count() == 0
        assert root.locator('a[href*="wx09-sys-001"]').count() >= 1
        assert page.evaluate(
            "document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2"
        ), (name, "horizontal overflow")
        font = root.evaluate("(e) => parseFloat(getComputedStyle(e).fontSize)")
        assert font >= (16 if width <= 570 else 17) - .2, (name, "R3 font", font)
        assert not errors, (name, "JS errors", errors[:2])
        page.evaluate("document.documentElement.setAttribute('data-md-color-scheme','slate')")
        assert root.get_by_text("giá còn", exact=False).first.is_visible()
        if name == "desktop":
            page.emulate_media(media="print")
            assert root.get_by_text("giá còn", exact=False).first.is_visible()
        page.screenshot(path=f"previews/math-r28-ct09-{name}.png", animations="disabled")
        ctx.close()
        print("PASS R28 CT09 native poster parity", name, flush=True)
    browser.close()
