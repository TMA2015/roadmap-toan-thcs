#!/usr/bin/env python3
"""Browser regression for collapsible Practice/Core help disclosures."""
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium required")

BASE = "http://127.0.0.1:8765"
KEY = "toan-thcs-practice-v1"

def storage(page):
    return page.evaluate("(key) => localStorage.getItem(key)", KEY)

with sync_playwright() as p:
    browser = p.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    for device, width, height in [("desktop", 1440, 900), ("mobile", 390, 844)]:
        context = browser.new_context(viewport={"width": width, "height": height})
        page = context.new_page()

        # Practice Room: the post-answer help button is a true disclosure toggle.
        page.goto(
            BASE + "/kien-thuc/07-phan-thuc-dai-so/bai-tap/",
            wait_until="networkidle",
        )
        page.locator(".practice-engine").wait_for(state="visible", timeout=20000)
        page.locator(".practice-option").first.click()
        page.locator(".practice-feedback").wait_for(state="visible", timeout=10000)

        review = page.get_by_role("button", name="📘 Xem hướng dẫn / lời giải")
        tutor = page.locator(".practice-tutor")
        baseline = storage(page)

        assert review.get_attribute("aria-expanded") == "false", (device, "practice initial aria")
        review.click()
        assert tutor.is_visible(), (device, "practice open")
        assert review.get_attribute("aria-expanded") == "true", (device, "practice open aria")
        assert storage(page) == baseline, (device, "practice open must not write attempt")

        review.click()
        assert tutor.is_hidden(), (device, "practice collapse")
        assert review.get_attribute("aria-expanded") == "false", (device, "practice collapsed aria")
        assert storage(page) == baseline, (device, "practice collapse must not write attempt")

        review.click()
        assert tutor.is_visible(), (device, "practice reopen")
        assert review.get_attribute("aria-expanded") == "true", (device, "practice reopen aria")
        assert storage(page) == baseline, (device, "practice reopen must not write attempt")

        # Core micro-practice: reveal both hints, collapse, reopen, then answer.
        page.goto(
            BASE + "/kien-thuc/02-so-va-phep-tinh/core/",
            wait_until="networkidle",
        )
        sentinel = {
            "questions": {"SENTINEL_OLD": {"attempted": 2, "correct": 1}},
            "tags": {"sentinel-old": {"attempted": 2, "correct": 1}},
            "observed_signals": [],
        }
        page.evaluate(
            "([key,value]) => localStorage.setItem(key, JSON.stringify(value))",
            [KEY, sentinel],
        )
        before = storage(page)

        card = page.locator(".topic-core-card").first
        card.wait_for(state="visible", timeout=20000)
        card.locator(".topic-core-practice-start").click()
        dialog = page.locator("dialog.topic-core-dialog")
        dialog.wait_for(state="visible", timeout=10000)

        hint = dialog.locator(".topic-micro-hint")
        assert hint.is_enabled(), (device, "core hint enabled")
        assert hint.get_attribute("aria-expanded") == "false", (device, "core hint initial aria")

        hint.click()
        assert dialog.locator(".topic-micro-hints .practice-hint").count() == 1, (device, "first hint")
        assert hint.get_attribute("aria-expanded") == "true", (device, "first hint aria")
        assert storage(page) == before, (device, "hint 1 must not create attempt")

        hint.click()
        assert dialog.locator(".topic-micro-hints .practice-hint").count() == 2, (device, "second hint")
        assert "Thu gọn gợi ý" in hint.inner_text(), (device, "collapse label")
        assert hint.get_attribute("aria-expanded") == "true", (device, "all hints aria")
        assert storage(page) == before, (device, "hint 2 must not create attempt")

        hint.click()
        assert dialog.locator(".topic-micro-hints").count() == 0, (device, "hints collapsed")
        assert "Xem lại gợi ý (2/2)" in hint.inner_text(), (device, "reopen label")
        assert hint.get_attribute("aria-expanded") == "false", (device, "collapsed aria")
        assert storage(page) == before, (device, "collapse must not create attempt")

        hint.click()
        assert dialog.locator(".topic-micro-hints .practice-hint").count() == 2, (device, "hints reopened")
        assert "Thu gọn gợi ý" in hint.inner_text(), (device, "reopened collapse label")
        assert hint.get_attribute("aria-expanded") == "true", (device, "reopened aria")
        assert storage(page) == before, (device, "reopen must not create attempt")

        dialog.locator(".topic-micro-option").first.click()
        after = page.evaluate("(key) => JSON.parse(localStorage.getItem(key))", KEY)
        rec = after["questions"]["NUM02MICRO_001"]
        assert rec["attempted"] == 1, (device, "one real answer")
        assert rec["hints_used"] >= 2, (device, "collapsed hints remain counted")
        assert rec["hinted_attempts"] == 1, (device, "assistance remains recorded")
        assert after["questions"]["SENTINEL_OLD"] == sentinel["questions"]["SENTINEL_OLD"]
        assert after["tags"]["sentinel-old"] == sentinel["tags"]["sentinel-old"]

        context.close()

    browser.close()

print("PASS: Practice help opens/closes/reopens with one button on desktop/mobile.")
print("PASS: Core hints reveal sequentially, collapse/reopen, and remain counted as viewed.")
print("PASS: disclosure-only actions create no phantom attempts and preserve legacy data.")
