#!/usr/bin/env python3
"""Browser regression for Written Exercise Library v1 pilot."""
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765/"
SENTINEL_KEY = "written-library-sentinel"

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )
    for device, width, height in [("desktop", 1440, 900), ("mobile", 390, 844)]:
        context = browser.new_context(viewport={"width": width, "height": height})
        page = context.new_page()
        page.goto(BASE + "luyen-tap/", wait_until="networkidle")
        root = page.locator("[data-written-exercise-library]")
        root.wait_for(state="visible", timeout=15000)
        page.wait_for_function(
            "document.querySelector('[data-written-exercise-library]')?.dataset.ready === '1'",
            timeout=15000,
        )

        cards = page.locator(".written-exercise-card")
        assert cards.count() == 6, (device, "six pilot cards")
        assert page.locator(".written-exercise-card#wx07-rat-001").count() == 1
        assert page.locator(".written-exercise-card#wx14-tri-001 img").is_visible(), (device, "geometry figure")

        page.evaluate("([k,v]) => localStorage.setItem(k,v)", [SENTINEL_KEY, json.dumps({"stable": True})])
        before = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL_KEY)

        first = page.locator(".written-exercise-card").first
        solution = first.locator("details.written-solution")
        rubric = first.locator("details.written-rubric")
        assert not solution.get_attribute("open"), (device, "solution initially closed")
        solution.locator("summary").click()
        assert solution.get_attribute("open") is not None, (device, "solution opens")
        rubric.locator("summary").click()
        assert rubric.get_attribute("open") is not None, (device, "rubric opens")
        after = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL_KEY)
        assert after == before, (device, "disclosures do not write progress")

        topic = page.locator('select[aria-label="Lọc theo chuyên đề"]')
        topic.select_option("CT14")
        assert cards.count() == 2, (device, "CT14 filter")
        assert page.locator(".written-exercise-card#wx14-tri-002").count() == 1

        level = page.locator('select[aria-label="Lọc theo mức"]')
        level.select_option("CORE_APPLY")
        assert cards.count() == 1, (device, "CT14 apply filter")
        assert page.locator(".written-exercise-card#wx14-tri-002").count() == 1

        topic.select_option("all")
        level.select_option("all")
        problem_type = page.locator('select[aria-label="Lọc theo dạng bài"]')
        problem_type.select_option("rat-multi-operation")
        assert cards.count() == 1, (device, "problem type filter")
        assert page.locator(".written-exercise-card#wx07-rat-002").count() == 1
        problem_type.select_option("all")
        search = page.locator('input[aria-label="Tìm bài tự luận"]')
        search.fill("chuyển động")
        assert cards.count() == 1, (device, "search filter")
        assert page.locator(".written-exercise-card#wx24-mod-001").count() == 1

        mjx = page.locator(".written-exercise-card mjx-container")
        assert mjx.count() > 0, (device, "MathJax rendered")
        context.close()

    browser.close()

print("PASS: Written Exercise Library renders six pilot items on desktop/mobile.")
print("PASS: topic/level/search filters, geometry figure and MathJax work.")
print("PASS: solution/rubric disclosure is presentation-only with no localStorage write.")
