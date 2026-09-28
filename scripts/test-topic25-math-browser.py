#!/usr/bin/env python3
"""Browser proof that CĐ25 anchor formulas typeset, including opened hints."""
import re
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/kien-thuc/25-tong-hop-on-thi-10/"
SLUGS = ["bai-toan-kinh-dien", "anchor-25-004", "anchor-25-006", "anchor-25-007",
         "anchor-25-008", "anchor-25-009", "anchor-25-010", "anchor-25-011"]
RAW = re.compile(r"\\(?:cdot|qquad|triangle|sim|sqrt|frac|Rightarrow|angle|leftrightarrow|begin)\b|\\[\[(]")
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required for CĐ25 math browser QA")
Path("previews").mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
    page = browser.new_page(viewport={"width": 1440, "height": 950})
    for slug in SLUGS:
        response = page.goto(BASE + slug + "/", wait_until="networkidle")
        assert response is not None and response.status == 200, slug + " route unavailable"
        page.wait_for_function("""() => !!window.MathJax?.typesetPromise &&
            document.querySelectorAll('.md-content__inner mjx-container').length >= 2""",
            timeout=30000)
        article = page.locator(".md-content__inner")
        assert not RAW.search(article.inner_text()), slug + " exposes raw TeX on main content"
        for hint in article.locator("details").all():
            hint.locator("summary").click()
            page.wait_for_function("""node => node.open &&
              !/\\(?:cdot|triangle|sim|sqrt|frac|Rightarrow|angle|leftrightarrow)\b/.test(node.innerText)""",
              arg=hint.element_handle(), timeout=12000)
        assert not RAW.search(article.inner_text()), slug + " exposes raw TeX after opening hints"
        if slug in ("bai-toan-kinh-dien", "anchor-25-004"):
            page.screenshot(path="previews/topic25-math-" + slug + ".png",
                            full_page=True, animations="disabled")
        print("PASS browser math:", slug, flush=True)
    browser.close()
