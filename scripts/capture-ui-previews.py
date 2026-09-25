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
    written_page = desktop.new_page()
    written_page.goto(BASE + "kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/", wait_until="networkidle")
    answer_section = written_page.locator(".written-self-check-solution")
    check(answer_section.count() == 1, "static written exam answer wrapped")
    check(not answer_section.locator("h1").is_visible(), "answer hidden before learner action")
    answer_section.locator("summary").click()
    check(answer_section.locator("h1").is_visible(), "written answer opens on deliberate user click")
    written_page.close()
    class_page = desktop.new_page()
    class_page.goto(BASE + "hoc-theo-lop/", wait_until="networkidle")
    check(class_page.locator('[data-grade-panel="6"]').is_visible(), "grade 6 first panel visible")
    check(class_page.locator('[data-grade-panel="8"]').is_hidden(), "other grade hidden")
    class_page.locator('[data-grade-select="7"]').click()
    check(class_page.locator('[data-grade-panel="7"]').is_visible(), "grade 7 panel opens")
    check("lop=7" in class_page.url, "grade selection is shareable")
    shot(class_page, "learn-by-grade-7-desktop.png")
    class_page.locator('[data-grade-panel="7"] a[href$="04-bieu-thuc-dai-so/#core-journey"]').first.click()
    class_page.locator("#core-journey .topic-core-card").first.wait_for(state="visible", timeout=12000)
    check(class_page.locator("#core-journey .topic-core-card").count() == 5, "grade 7 link reaches five topic cards")
    shot(class_page, "grade-7-core-cards-desktop.png")
    class_page.close()
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
    # Smoke-check all 25 topic pages, including the 01–03 lessons without micro-workspace.
    # Keep the audit as a downloadable JSON artifact for repeatable review.
    import json
    from urllib.parse import urlparse
    from urllib.request import urlopen
    destinations = page.locator(".library-topic-tile").evaluate_all(
        "(nodes) => nodes.map(n => ({title:n.querySelector('.library-topic-name').textContent.trim(),url:n.href}))")
    audit = []
    check(len(destinations) == 25, "25 unique topic destinations")
    check(len({row["url"] for row in destinations}) == 25, "topic links not duplicated")
    for row in destinations:
        topic_page = desktop.new_page()
        response = topic_page.goto(row["url"], wait_until="domcontentloaded")
        check(response is not None and response.status == 200, "topic page reachable: " + row["url"])
        topic_page.locator(".lesson-switcher-steps a").first.wait_for(state="visible", timeout=12000)
        links = topic_page.locator(".lesson-switcher-steps a")
        check(links.count() == 3, "three steps for " + row["url"])
        check(links.nth(0).get_attribute("aria-current") == "page", "lesson selected " + row["url"])
        check(links.nth(1).get_attribute("href").endswith("/bai-tap/"), "practice route " + row["url"])
        check(links.nth(2).get_attribute("href").endswith("/tu-kiem-tra/"), "self-check route " + row["url"])
        title = topic_page.locator(".topic-workspace-hero h1, .md-content__inner h1").first.inner_text()
        check(bool(title.strip()), "readable title for " + row["url"])
        practice_url = links.nth(1).get_attribute("href")
        self_check_url = links.nth(2).get_attribute("href")
        for subpath in (practice_url, self_check_url):
            with urlopen(BASE.rstrip("/") + subpath, timeout=10) as route:
                check(route.status == 200, "built route available: " + subpath)
        audit.append({"topic":row["title"],"path":urlparse(row["url"]).path,"heading":title.strip(),
                      "lesson":True,"practice_url":practice_url,
                      "self_check_url":self_check_url,"all_three_routes_available":True})
        topic_page.close()
    (OUT / "all-25-topic-pages-audit.json").write_text(
        json.dumps({"topic_count":len(audit),"checked_routes":len(audit)*3,"checked":audit},ensure_ascii=False,indent=2),
        encoding="utf-8")
    print("PASS: all 75 built topic routes (25 x lesson/practice/self-check) and lesson controls.", flush=True)
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
    # Real browser check for explicit full-solution disclosure in normal practice.
    help_page = desktop.new_page()
    help_page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/bai-tap/", wait_until="networkidle")
    helper = help_page.locator(".practice-actions button").filter(has_text="Chọn cách được giúp").first
    helper.click()
    check(help_page.locator(".practice-tutor-choices button").count() == 4, "four explicit help modes")
    help_page.locator(".practice-tutor-choices button").filter(has_text="Xem lời giải hiện có").click()
    check(help_page.locator(".practice-tutor").get_by_text("không tính là tự làm độc lập").is_visible(), "pre-answer evidence disclosure")
    help_page.locator(".practice-tutor button").filter(has_text="Tôi muốn mở lời giải ngay").click()
    check(help_page.locator(".practice-help-answer").first.is_visible(), "offline bank solution displayed")
    shot(help_page, "practice-help-full-solution-desktop.png")
    help_page.locator(".practice-options button").first.click()
    saved = help_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1'))""")
    records = [row for row in saved["questions"].values() if row.get("full_solution_views", 0) > 0]
    check(len(records) == 1 and records[0].get("correct_without_hint",0) == 0, "viewed answer cannot count as independent attempt")
    check(help_page.locator(".practice-help-assisted").is_visible(), "assisted status shown")
    help_page.locator(".practice-actions button").filter(has_text="Xem hướng dẫn / lời giải").click()
    help_page.locator(".practice-tutor-choices button").filter(has_text="Xem lời giải hiện có").click()
    saved_after = help_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1'))""")
    check(saved == saved_after, "reading explanation after submission does not alter original attempt")
    help_page.close()
    micro_page = desktop.new_page()
    micro_page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/", wait_until="networkidle")
    micro_page.locator("#core-journey .topic-micro-start").first.click()
    micro_page.locator(".topic-micro-teach").first.click()
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Mở kiến thức cốt lõi của chuyên đề").is_visible(), "missing card copy falls back to full lesson")
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Đáp án trong ngân hàng").count() == 0, "reteaching does not reveal current question answer")
    micro_page.locator(".topic-micro-reveal").first.click()
    micro_page.locator(".topic-micro-tutor button").filter(has_text="Tôi muốn xem lời giải ngay").first.click()
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Đáp án trong ngân hàng").is_visible(), "micro full reveal after explicit choice")
    shot(micro_page, "micro-04-offline-help-desktop.png")
    micro_page.locator(".topic-micro-options button").first.click()
    micro_saved = micro_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1'))""")
    rec = micro_saved["questions"].get("ALG04MICRO_001", {})
    check(rec.get("full_solution_views") == 1 and rec.get("correct_without_hint", 0) == 0, "micro answer after reveal recorded only as assisted")
    micro_page.close()

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
    grade_phone = phone.new_page()
    grade_phone.goto(BASE + "hoc-theo-lop/?lop=8", wait_until="networkidle")
    check(grade_phone.locator('[data-grade-panel="8"]').is_visible(), "phone grade 8 direct route")
    shot(grade_phone, "learn-by-grade-8-phone.png")
    grade_phone.close()
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
