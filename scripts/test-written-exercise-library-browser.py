#!/usr/bin/env python3
"""Browser regression for Written Exercise Library v1 append-only catalog."""
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
        assert cards.count() == 12, (device, "twelve published cards")
        assert page.locator(".written-exercise-card#wx07-rat-001").count() == 1
        assert page.locator(".written-exercise-card#wx14-tri-001 img").is_visible(), (device, "geometry figure")

        page.evaluate("([k,v]) => localStorage.setItem(k,v)", [SENTINEL_KEY, json.dumps({"stable": True})])
        before = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL_KEY)

        first = page.locator(".written-exercise-card").first
        actions = first.locator(".written-help-action")
        assert actions.count() == 3, (device, "three compact help actions")
        boxes = actions.evaluate_all("(nodes) => nodes.map(n => n.getBoundingClientRect())")
        assert max(b["top"] for b in boxes) - min(b["top"] for b in boxes) < 3, (device, "three help actions share one row")
        solution_button = first.locator('[data-help-target="solution"]')
        rubric_button = first.locator('[data-help-target="rubric"]')
        mistakes_button = first.locator('[data-help-target="mistakes"]')
        solution_panel = first.locator('[data-help-panel="solution"]')
        rubric_panel = first.locator('[data-help-panel="rubric"]')
        assert solution_button.get_attribute("aria-expanded") == "false", (device, "solution initially closed")
        solution_button.click()
        assert solution_button.get_attribute("aria-expanded") == "true" and solution_panel.is_visible(), (device, "solution opens")
        rubric_button.click()
        assert rubric_button.get_attribute("aria-expanded") == "true" and rubric_panel.is_visible(), (device, "rubric opens")
        mistakes_button.click()
        assert mistakes_button.get_attribute("aria-expanded") == "true", (device, "mistakes opens")
        solution_button.click()
        assert solution_button.get_attribute("aria-expanded") == "false" and solution_panel.is_hidden(), (device, "solution closes independently")
        after = page.evaluate("(k) => localStorage.getItem(k)", SENTINEL_KEY)
        assert after == before, (device, "help panels do not write progress")

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

        launcher = page.locator("[data-roadmap-topic-launcher]")
        launcher.click()
        dialog = page.locator("[data-roadmap-topic-dialog]")
        assert dialog.is_visible(), (device, "quick shortcut dialog opens")
        assert "7 + 25" in launcher.inner_text(), (device, "quick shortcut count updated")
        assert dialog.get_by_role("link", name="✎ Thư viện bài tập").count() == 1, (device, "written library in quick shortcuts")
        dialog.locator(".roadmap-topic-dialog__close").click()

        topic_page = context.new_page()
        topic_page.goto(BASE + "kien-thuc/07-phan-thuc-dai-so/", wait_until="networkidle")
        topic_link = topic_page.locator("[data-written-topic-link]")
        topic_link.wait_for(state="attached", timeout=15000)
        types_card = topic_page.locator("#types")
        assert types_card.count() == 1, (device, "problem-types learning card exists")
        if types_card.get_attribute("open") is None:
            types_card.locator("summary").click()
        topic_link.wait_for(state="visible", timeout=5000)
        href = topic_link.get_attribute("href")
        assert "luyen-tap/?topic=CT07" in href, (device, "topic deep link prefilters CT07")
        topic_page.goto(BASE.rstrip("/") + href, wait_until="networkidle")
        topic_page.wait_for_function(
            "document.querySelector('[data-written-exercise-library]')?.dataset.ready === '1'",
            timeout=15000,
        )
        assert topic_page.locator('select[aria-label="Lọc theo chuyên đề"]').input_value() == "CT07", (device, "topic filter auto-applied")
        assert topic_page.locator(".written-exercise-card").count() == 2, (device, "CT07 deep link shows two published items")
        topic_page.close()

        for topic_num, topic_id in [("08", "CT08"), ("17", "CT17"), ("19", "CT19")]:
            new_topic_page = context.new_page()
            slug = {
                "08": "08-phuong-trinh-bat-phuong-trinh",
                "17": "17-thales-dong-dang",
                "19": "19-duong-tron",
            }[topic_num]
            new_topic_page.goto(BASE + "kien-thuc/" + slug + "/", wait_until="networkidle")
            new_link = new_topic_page.locator("[data-written-topic-link]")
            new_link.wait_for(state="attached", timeout=15000)
            new_href = new_link.get_attribute("href")
            assert f"luyen-tap/?topic={topic_id}" in new_href, (device, topic_id, "topic deep link")
            new_topic_page.goto(BASE.rstrip("/") + new_href, wait_until="networkidle")
            new_topic_page.wait_for_function(
                "document.querySelector('[data-written-exercise-library]')?.dataset.ready === '1'",
                timeout=15000,
            )
            assert new_topic_page.locator('select[aria-label="Lọc theo chuyên đề"]').input_value() == topic_id, (device, topic_id, "filter auto-applied")
            assert new_topic_page.locator(".written-exercise-card").count() == 2, (device, topic_id, "two published items")
            new_topic_page.close()
        context.close()

    browser.close()

print("PASS: Written Exercise Library renders twelve published items on desktop/mobile.")
print("PASS: topic/level/search filters, geometry figure and MathJax work.")
print("PASS: compact 3-action help row is presentation-only with no localStorage write.")
print("PASS: quick shortcut and topic deep link open the written library with CT07 auto-filter.")
