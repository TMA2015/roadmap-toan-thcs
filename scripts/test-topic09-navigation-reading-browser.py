#!/usr/bin/env python3
"""CT09 browser regression: quick-nav, right TOC disclosure, calculator note and reading size."""
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765/kien-thuc/09-he-phuong-trinh/"
Path("previews").mkdir(exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(BASE, wait_until="networkidle")

    # Quick nav: the renamed exam section must still map to the canonical #exam card.
    quick_exam = page.locator('.topic-workspace-nav a[href="#exam"]')
    assert quick_exam.count() == 1, "missing quick-nav exam link"
    quick_exam.click()
    exam_card = page.locator("#exam")
    assert exam_card.count() == 1, "exam card was not created from renamed H2"
    assert exam_card.evaluate("(el) => el.open"), "quick-nav exam click did not open its section"

    # Material right TOC: all top-level source anchors must survive the H2->details transform.
    related = page.locator('.md-sidebar--secondary nav.md-nav--secondary > ul.md-nav__list > li > a[href="#4-kien-thuc-lien-quan"]')
    assert related.count() == 1, "missing right-TOC link for section 4"
    related.click()
    assert page.locator("#links").evaluate("(el) => el.open"), "right-TOC section 4 did not open"
    assert page.locator("#4-kien-thuc-lien-quan").count() == 1, "source H2 anchor alias was not preserved"

    # Right TOC children start closed; + opens, - closes.
    core_item = page.locator('.md-sidebar--secondary nav.md-nav--secondary > ul.md-nav__list > li').filter(
        has=page.locator('a[href="#3-kien-thuc-cot-loi"]')
    )
    toggle = core_item.locator(":scope > button.topic-toc-toggle")
    children = core_item.locator(":scope > nav.topic-toc-children")
    assert toggle.count() == 1 and children.count() == 1, "missing collapsible TOC control"
    assert children.is_hidden(), "TOC children should be closed by default"
    assert toggle.inner_text().strip() == "+", "closed TOC should show +"
    toggle.click()
    assert children.is_visible(), "TOC + did not open children"
    assert toggle.inner_text().strip() == "−", "open TOC should show −"

    # A nested H3 link must reveal its parent lesson section before native anchor scrolling.
    child = children.locator('a[href="#31-phuong-trinh-bac-nhat-hai-an"]')
    assert child.count() == 1, "missing nested 3.1 link"
    child.click()
    assert page.locator("#core").evaluate("(el) => el.open"), "nested TOC link did not open parent section"
    assert page.locator("#31-phuong-trinh-bac-nhat-hai-an").is_visible(), "nested heading target still hidden"

    toggle.click()
    assert children.is_hidden(), "TOC − did not close children"
    assert toggle.inner_text().strip() == "+", "closed TOC should restore +"

    # Calculator guidance is concise and closed by default.
    calculator = page.locator("details.info", has_text="Máy tính cầm tay – mở khi cần")
    assert calculator.count() == 1, "calculator disclosure missing"
    assert not calculator.evaluate("(el) => el.open"), "calculator note should be closed by default"
    calculator.locator("summary").click()
    assert calculator.evaluate("(el) => el.open"), "calculator disclosure did not open"
    assert "nên hạn chế khi đang học phương pháp" in calculator.inner_text()

    # Reading text should be larger than the old default topic size.
    font_px = page.locator(".topic-learning-card-body").first.evaluate(
        "(el) => parseFloat(getComputedStyle(el).fontSize)"
    )
    assert font_px >= 16.5, f"topic reading text still too small: {font_px}px"

    page.screenshot(path="previews/ct09-navigation-reading-desktop.png", full_page=False, animations="disabled")
    context.close()
    browser.close()

print("PASS: CT09 quick-nav and right TOC anchors work after section wrapping.")
print("PASS: right TOC child groups are closed by default and toggle with +/- controls.")
print("PASS: calculator guidance is collapsible and topic reading text is enlarged.")
