#!/usr/bin/env python3
"""Browser-level UI regression and previews for PR #100, using runner-installed Chromium."""
import os
import shutil
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765/"
OUT = Path("previews")
OUT.mkdir(exist_ok=True)
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome executable is required for UI QA")


def shot(page, name):
    page.screenshot(path=str(OUT / name), animations="disabled", full_page=False)
    print("CAPTURED", name, flush=True)


def check(cond, what):
    if not cond:
        raise AssertionError(what)


with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=CHROME, headless=True,
                                args=["--no-sandbox", "--disable-dev-shm-usage"])
    desktop = browser.new_context(viewport={"width": 1440, "height": 1000}, device_scale_factor=1)
    page = desktop.new_page()
    page.goto(BASE, wait_until="networkidle")
    page.locator("[data-home-dialog]").wait_for(state="visible")
    shot(page, "home-selector-desktop.png")
    page.locator('[data-home-dialog] [data-home-select="standard"]').click()
    check(page.locator('[data-home-mode="standard"]').is_visible(), "standard orbit must be visible")
    shot(page, "home-standard-desktop.png")
    page.locator('.home-style-bar [data-home-select="playful"]').click()
    check(page.locator('[data-home-mode="playful"]').is_visible(), "playful artwork must be visible")
    img = page.locator(".study-art-image")
    check(img.evaluate("(node) => node.complete && node.naturalWidth >= 480 && node.naturalWidth / node.naturalHeight > 1.7"), "approved artwork loaded")
    shot(page, "home-playful-desktop.png")
    page.locator("[data-study-wake]").click()
    check(page.locator("[data-study-gateway]").is_visible(), "wake reveals learning routes")
    shot(page, "home-awake-desktop.png")
    page.reload(wait_until="networkidle")
    check(page.locator('[data-home-mode="playful"]').is_visible(), "mode persisted after reload")
    check(page.locator("[data-home-dialog]").is_hidden(), "return visit skips chooser")
    page.goto(BASE + "kien-thuc/", wait_until="networkidle")
    check(page.locator(".library-topic-tile").count() == 25, "all 25 topic tiles present")
    check(page.locator(".library-cluster").count() == 4, "four learning groups")
    shot(page, "library-desktop.png")
    page.locator("#library-local-search").fill("tam giac")
    matches = page.locator(".library-topic-tile:visible")
    check(matches.count() >= 1 and matches.count() < 25, "accent-insensitive filter works")
    check("tam giac" in page.locator("#library-search-result").inner_text().lower() or "/" in page.locator("#library-search-result").inner_text(), "filtered count shown")
    shot(page, "library-search-desktop.png")
    page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/", wait_until="networkidle")
    check(page.locator(".lesson-switcher-steps a").count() == 3, "learning step nav on topic")
    check(page.locator('.lesson-switcher-steps [aria-current="page"]').count() == 1, "lesson stage selected")
    check(page.locator(".topic-workspace-hero").count() == 1, "learning workspace retained")
    shot(page, "lesson-04-desktop.png")
    toggle = page.locator(".lesson-focus-toggle")
    check(toggle.is_visible(), "focus toggle available on desktop")
    toggle.click()
    check(toggle.get_attribute("aria-pressed") == "true", "focus mode active state")
    check(page.locator("body").evaluate("(el) => el.classList.contains('roadmap-focus-mode')"), "focus mode applied to body")
    check(not page.locator(".md-sidebar--primary").is_visible() and not page.locator(".md-sidebar--secondary").is_visible(), "focus hides both desktop sidebars")
    shot(page, "lesson-04-focus-desktop.png")
    page.reload(wait_until="networkidle")
    check(page.locator(".lesson-focus-toggle").get_attribute("aria-pressed") == "true", "focus choice persists across reload")
    check(not page.locator(".md-sidebar--primary").is_visible(), "focus layout persists across reload")
    page.locator(".lesson-focus-toggle").click()
    check(page.locator(".lesson-focus-toggle").get_attribute("aria-pressed") == "false", "focus can be disabled")
    check(page.locator(".md-sidebar--primary").is_visible(), "desktop sidebar restored")
    page.evaluate("window.scrollTo(0, 1200)")
    page.wait_for_timeout(350)
    dock = page.locator(".roadmap-nav-dock")
    tabs = page.locator(".md-tabs")
    check(dock.is_visible() or tabs.is_visible(), "desktop navigation available after scrolling")
    shot(page, "lesson-scrolled-desktop.png")

    phone = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=1,
                                is_mobile=True, has_touch=True)
    first_phone = phone.new_page()
    first_phone.goto(BASE, wait_until="networkidle")
    check(first_phone.locator("[data-home-dialog]").is_visible(), "phone first-visit chooser")
    check(first_phone.locator('.home-style-card[data-home-select="standard"]').is_visible(), "standard choice visible")
    check(first_phone.locator('.home-style-card[data-home-select="playful"]').is_visible(), "playful choice visible")
    shot(first_phone, "home-selector-phone.png")
    first_phone.locator('[data-home-dialog] [data-home-select="playful"]').click()
    check(first_phone.locator('[data-home-mode="playful"]').is_visible(), "phone playful selected")
    shot(first_phone, "home-playful-phone.png")
    first_phone.locator("[data-study-wake]").click()
    check(first_phone.locator("[data-study-gateway]").is_visible(), "tap interaction works")
    shot(first_phone, "home-awake-phone.png")
    first_phone.goto(BASE + "kien-thuc/23-xac-suat/", wait_until="networkidle")
    check(first_phone.locator(".lesson-switcher-steps a").count() == 3, "phone lesson nav")
    shot(first_phone, "lesson-23-phone.png")
    # Route links are verified from actual static content.
    first_phone.locator('.lesson-switcher-steps a').nth(1).click()
    check("/bai-tap/" in first_phone.url, "topic practice route")
    first_phone.locator('.lesson-switcher-steps a[aria-current="page"]').wait_for(state="visible", timeout=10000)
    check(first_phone.locator('.lesson-switcher-steps a[aria-current="page"]').count() == 1, "practice stage selected")
    shot(first_phone, "practice-23-phone.png")
    browser.close()

checks = sorted(OUT.glob("*.png"))
check(len(checks) >= 10 and all(f.stat().st_size > 2000 for f in checks), "screenshots generated")
print("PASS: interactive themes, responsive chooser, artwork, 25-topic finder, lesson paths, sticky navigation; previews:", len(checks), flush=True)
