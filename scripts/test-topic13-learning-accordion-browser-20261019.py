"""Verify CT13 lesson accordions keep substantive learning content inside details.

Regression for missing nesting of seven 'Lỗi sai thường gặp' items that
previously escaped the collapsed panel due to being rendered as H2.
"""
import shutil
from playwright.sync_api import sync_playwright

BASE="http://127.0.0.1:8765/kien-thuc/13-goc-va-duong-thang/"
CHROME=shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required")

with sync_playwright() as pw:
    browser=pw.chromium.launch(executable_path=CHROME,headless=True,
        args=["--no-sandbox","--disable-dev-shm-usage"])
    for viewport in ({"width":1280,"height":800},{"width":390,"height":844}):
        context=browser.new_context(viewport=viewport)
        page=context.new_page()
        errors=[]
        page.on("pageerror",lambda error:errors.append(str(error)))
        page.goto(BASE,wait_until="domcontentloaded")
        error_card=page.locator("details.topic-learning-card#errors")
        error_card.locator("summary").wait_for(timeout=30000)
        assert page.locator("details.topic-learning-card").count()==11
        headings=error_card.locator(".topic-learning-card-body h3")
        assert headings.count()==7, "seven error headings must belong to the panel"
        assert error_card.locator(".topic-learning-card-body h4").count()==2
        assert error_card.get_attribute("open") is None, "errors panel should start closed"
        assert not headings.first.is_visible(), "collapsed panel leaked its error text"
        error_card.locator("summary").click()
        assert error_card.get_attribute("open") is not None
        assert headings.first.is_visible()
        assert "Thấy hai góc bằng nhau" in error_card.inner_text()
        assert "Lỗi 7: Không ghi căn cứ" in error_card.inner_text()
        assert error_card.locator("h3").count()==7

        for section_id, expected in [("core","3.1. Điểm"),("types","Dạng 1"),("links","Kiến thức nên biết trước"),("map","Minh họa trực quan")]:
            section=page.locator("details.topic-learning-card#"+section_id)
            assert section.count()==1
            assert expected in section.locator(".topic-learning-card-body").text_content(),section_id

        error_card.locator("summary").click()
        assert error_card.get_attribute("open") is None
        assert not headings.first.is_visible()
        assert page.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
        assert not errors,errors
        context.close()
    browser.close()
print("PASS topic13: 11 lesson accordions correctly nest seven error blocks, worked sections and do not leak when closed.")
