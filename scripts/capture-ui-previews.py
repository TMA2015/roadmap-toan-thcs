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
    guide = page.locator("#hieu-cach-hoc")
    guide.scroll_into_view_if_needed()
    check(guide.locator("[data-home-guide-open]").count() == 4, "homepage exposes four learning-guide cards")
    check(guide.evaluate("(el) => el.scrollWidth <= el.clientWidth + 2"), "desktop learning-guide has no horizontal overflow")
    check(guide.locator(".home-guide-visual").evaluate_all(
          "(nodes) => nodes.length === 4 && nodes.every(el => Math.abs(el.getBoundingClientRect().width / el.getBoundingClientRect().height - 4/3) < 0.03)"),
          "desktop learning-guide previews share one 4:3 frame")
    check(guide.locator("img").evaluate_all("(nodes) => nodes.length === 4 && nodes.every(img => img.complete && img.naturalWidth >= 500)"),
          "all four approved infographic assets load on desktop")
    shot(page, "home-learning-guide-desktop.png")
    guide.locator("[data-home-guide-open]").first.click()
    guide_dialog = page.locator("[data-home-guide-dialog]")
    check(guide_dialog.is_visible(), "desktop infographic lightbox opens")
    check(guide_dialog.locator("[data-home-guide-dialog-image]").evaluate(
          "(img) => img.complete && img.naturalWidth >= 500"), "desktop lightbox loads full infographic")
    check(guide_dialog.locator(".home-guide-dialog-panel").evaluate(
          "(el) => el.scrollWidth <= el.clientWidth + 2"), "desktop infographic lightbox has no horizontal overflow")
    shot(page, "home-learning-guide-modal-desktop.png")
    guide_dialog.locator(".home-guide-dialog-close").click()
    check(not guide_dialog.is_visible(), "desktop infographic lightbox closes")
    written_page = desktop.new_page()
    written_page.goto(BASE + "kien-thuc/02-so-va-phep-tinh/tu-kiem-tra-tu-luan/", wait_until="networkidle")
    answer_section = written_page.locator(".written-self-check-solution")
    check(answer_section.count() == 1, "static written exam answer wrapped")
    check(not answer_section.locator("h1").is_visible(), "answer hidden before learner action")
    answer_section.locator("summary").click()
    check(answer_section.locator("h1").is_visible(), "written answer opens on deliberate user click")
    written_page.close()
    readiness_page = desktop.new_page()
    readiness_page.goto(BASE + "kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/", wait_until="networkidle")
    readiness_page.locator(".readiness-question").wait_for(state="visible", timeout=12000)
    check(readiness_page.locator(".readiness-engine").count() == 1,
          "grade-six readiness renders its interactive assessment")
    check(readiness_page.locator(".written-self-check-solution").count() == 0, "interactive readiness has no archived answer block")
    check(readiness_page.locator(".readiness-result").is_hidden(), "grade-six readiness hides results before submission")
    check(readiness_page.locator(".readiness-question").is_visible(), "grade-six readiness question visible")
    readiness_page.close()
    class_page = desktop.new_page()
    class_page.goto(BASE + "hoc-theo-lop/", wait_until="networkidle")
    check(class_page.locator('[data-grade-panel="6"]').is_visible(), "grade 6 first panel visible")
    check(class_page.locator('[data-grade-panel="8"]').is_hidden(), "other grade hidden")
    class_page.locator('[data-grade-select="7"]').click()
    check(class_page.locator('[data-grade-panel="7"]').is_visible(), "grade 7 panel opens")
    check("lop=7" in class_page.url, "grade selection is shareable")
    shot(class_page, "learn-by-grade-7-desktop.png")
    class_page.locator('[data-grade-panel="7"] a[href$="04-bieu-thuc-dai-so/#core-journey"]').first.click()
    gateway_grade7=class_page.locator("#core-journey.topic-core-gateway a[href='core/']")
    gateway_grade7.wait_for(state="visible", timeout=12000)
    check(gateway_grade7.count() == 1, "grade 7 mapping reaches the right Core gateway")
    gateway_grade7.click()
    class_page.locator("#core-journey .topic-core-card").first.wait_for(state="visible", timeout=12000)
    grade7_cards = class_page.locator("#core-journey .topic-core-card")
    check(grade7_cards.count() == 6, "grade 7 opens six CĐ04 cards after append-only Wave 1 candidate")
    check(grade7_cards.filter(has_text="Chia đa thức một biến").count() == 1,
          "grade 7 CĐ04 includes the new Bài 28 polynomial-division card")
    shot(class_page, "grade-7-core-cards-desktop.png")
    class_page.close()
    page.locator('.home-style-bar [data-home-select="playful"]').click()
    check(page.locator('[data-home-mode="playful"]').is_visible(), "playful artwork must be visible")
    img = page.locator(".study-art-image")
    visual = img.evaluate("""node => {
      const canvas = document.createElement("canvas"); canvas.width = node.naturalWidth; canvas.height = node.naturalHeight;
      const ctx = canvas.getContext("2d"); ctx.drawImage(node, 0, 0);
      const a = (x,y) => ctx.getImageData(x,y,1,1).data[3];
      return {loaded:node.complete, width:node.naturalWidth, height:node.naturalHeight,
        cornerAlpha:[a(0,0),a(node.naturalWidth-1,0),a(0,node.naturalHeight-1)]};
    }""")
    check(visual["loaded"] and visual["width"] >= 700 and visual["height"] >= 360, "approved full sleeping classroom scene loaded")
    check(page.locator(".study-art-room, .study-art-wakeup").count() == 0, "no stacked room panel or duplicate greeting")
    stage = page.locator(".study-art-stage").bounding_box()
    check(stage is not None and abs(stage["width"] / stage["height"] - 520/276) < .02, "sleeping scene has one landscape panel")
    shot(page, "home-playful-desktop.png")
    page.locator("[data-study-wake]").click()
    check(page.locator("[data-study-gateway]").is_visible(), "wake reveals learning routes")
    check("study-scene-awake-final.webp" in img.get_attribute("src"), "owner-approved awake scene swaps in")
    page.wait_for_function("""() => {
      const img = document.querySelector(".study-art-image");
      return img && img.complete && img.naturalWidth >= 700 && img.naturalWidth / img.naturalHeight > 1.7;
    }""")
    check(page.locator(".study-art-stage").evaluate("(el) => getComputedStyle(el).backgroundImage === 'none'"), "both scene states need no extra image background")
    check(img.evaluate("(node) => getComputedStyle(node).objectFit === 'cover'"), "both scene images use same cover crop")
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
        slug = urlparse(row["url"]).path.rstrip("/").split("/")[-1]
        pilot = topic_page.evaluate("(slug) => Boolean(window.RoadmapTopicRoutes?.get(slug))", slug)
        check(links.count() == (4 if pilot else 3), "correct step count for " + row["url"])
        check(links.nth(0).get_attribute("aria-current") == "page", "lesson selected " + row["url"])
        if pilot:
            check(links.nth(1).get_attribute("href").endswith("/core/"), "pilot Core route from lesson")
        check(links.nth(2 if pilot else 1).get_attribute("href").endswith("/bai-tap/"), "practice route " + row["url"])
        check(links.nth(3 if pilot else 2).get_attribute("href").endswith("/tu-kiem-tra/"), "self-check route " + row["url"])
        title = topic_page.locator(".topic-workspace-hero h1, .md-content__inner h1").first.inner_text()
        check(bool(title.strip()), "readable title for " + row["url"])
        # Every published five-card workspace must open a self-contained modal.
        # Probe without answering, so this sweep never writes learner evidence.
        slug = urlparse(row["url"]).path.rstrip("/").split("/")[-1]
        core_page = None
        exercise_page = topic_page
        if pilot:
            gateway = topic_page.locator("#core-journey.topic-core-gateway a[href='core/']")
            check(gateway.count() == 1, "old Core anchor remains a working gateway")
            check(topic_page.locator("#core-journey .topic-core-card").count() == 0, "Core cards moved off main lesson")
            core_page = desktop.new_page()
            core_url = links.nth(1).get_attribute("href")
            response_core = core_page.goto(BASE.rstrip("/") + core_url, wait_until="networkidle")
            check(response_core is not None and response_core.status == 200, "dedicated Core route reachable")
            check(core_page.locator(".lesson-switcher-steps a").count() == 4, "four-step navigation on Core page")
            check(core_page.locator('.lesson-switcher-steps [aria-current="page"]').get_attribute("href").endswith("/core/"), "Core step selected")
            core_page.locator('#core-journey[data-core-ready="1"]').wait_for(state="visible", timeout=12000)
            check(core_page.locator(".topic-core-teaching-item").count() == 0,
                  "no duplicate lecture accordion outside cards")
            expected_core_cards = 10 if slug == "20-hinh-hoc-tong-hop" else (8 if slug == "02-so-va-phep-tinh" else (7 if slug in ["21-thong-ke", "23-xac-suat"] else (6 if slug in ["03-ti-le-ti-le-thuc", "04-bieu-thuc-dai-so"] else 5)))
            check(core_page.locator(".topic-core-card .topic-core-teach-start").count() == expected_core_cards,
                  "all published Core cards have a lecture button")
            check(core_page.locator(".topic-core-card .topic-micro-start").count() == expected_core_cards,
                  "all published Core cards retain the practice button")
            if slug == "07-phan-thuc-dai-so":
                first_card = core_page.locator('.topic-core-card[data-card-id="pt07-core-1"]')
                second_card = core_page.locator('.topic-core-card[data-card-id="pt07-core-2"]')
                cards_visual = core_page.locator(".topic-core-card")
                check(cards_visual.count() == 5 and core_page.locator(".topic-core-card-header").count() == 5
                      and core_page.locator(".topic-core-card-content").count() == 5,
                      "five semantic soft-card headers and bodies")
                accents = cards_visual.evaluate_all(
                    "(items) => items.map(el => getComputedStyle(el).getPropertyValue('--core-accent').trim())")
                check(len(set(accents)) == 5, "all five cards have distinct restrained accent tones")
                check(first_card.locator(".topic-core-card-header").evaluate(
                    "(el) => getComputedStyle(el).backgroundImage.includes('gradient')"),
                    "card header has a separate soft-tinted treatment")
                grid_cols = core_page.locator(".topic-core-card-grid").evaluate(
                    "(el) => getComputedStyle(el).gridTemplateColumns.split(' ').filter(Boolean).length")
                check(1 <= grid_cols <= 3, "readable maximum three Core columns on desktop")
                check(first_card.locator(".topic-core-card-number").evaluate(
                    "(el) => getComputedStyle(el).backgroundColor !== 'rgba(0, 0, 0, 0)'"),
                    "Core number badge has a solid contrasting background")
                check(first_card.locator(".topic-core-card-actions button").evaluate_all(
                    "(buttons) => buttons.length === 2 && buttons.every(b => b.getBoundingClientRect().height >= 44)"),
                    "both Core actions retain touch-size targets")
                first_card.locator(".topic-core-card-actions").scroll_into_view_if_needed()
                shot(core_page, "topic07-core-soft-cards-desktop.png")
                original_scheme = core_page.evaluate("() => document.body.getAttribute('data-md-color-scheme')")
                core_page.evaluate("() => document.body.setAttribute('data-md-color-scheme','slate')")
                dark_accent = first_card.evaluate(
                    "(el) => getComputedStyle(el).getPropertyValue('--core-accent').trim()")
                check(dark_accent != accents[0], "soft-card accents adapt to dark theme")
                shot(core_page, "topic07-core-soft-cards-dark-desktop.png")
                core_page.evaluate("""(previous) => {
                    if(previous === null) document.body.removeAttribute('data-md-color-scheme');
                    else document.body.setAttribute('data-md-color-scheme', previous);
                }""", original_scheme)

                check(first_card.get_attribute("data-covered-skills") == "4"
                      and first_card.get_attribute("data-total-skills") == "4",
                      "Core1 displays 4/4 actual dedicated-skill coverage")
                check(second_card.get_attribute("data-covered-skills") == "4"
                      and second_card.get_attribute("data-total-skills") == "4",
                      "Core2 displays 4/4 actual dedicated-skill coverage")
                check(first_card.locator(".topic-core-card-gap").count() == 0
                      and second_card.locator(".topic-core-card-gap").count() == 0,
                      "no missing-skill warnings after dedicated items are supplied")
                initial_evidence = core_page.evaluate("() => localStorage.getItem('toan-thcs-practice-v1')")
                fixed_boxes = [core_page.locator(".topic-core-card").nth(i).bounding_box() for i in range(5)]
                first_card.locator(".topic-core-teach-start").click()
                lecture = core_page.locator(".topic-core-dialog")
                check(lecture.is_visible() and lecture.get_attribute("data-mode") == "teach",
                      "lecture opens in its own Core modal")
                check(lecture.locator(".topic-core-teaching-row").count() == 5,
                      "reviewed teaching example/steps/error/summary appear inside modal")
                check(lecture.locator(".topic-core-skill-chip").count() == 4
                      and lecture.locator('.topic-core-skill-chip[data-covered="no"]').count() == 0,
                      "lecture retains four skill mappings in the background")
                check(not lecture.locator(".topic-core-skill-overview").evaluate("el => el.open"),
                      "lecture skill metadata is collapsed by default")
                check(lecture.locator(".topic-micro-option").count() == 0,
                      "lecture contains no scored question")
                shot(core_page, "topic07-lecture-modal-desktop.png")
                lecture.locator(".topic-core-to-practice").click()
                check(lecture.get_attribute("data-mode") == "practice"
                      and lecture.locator(".topic-micro-option").count() == 4,
                      "lecture switches directly to practice in same modal")
                check(lecture.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill") == "nhan-biet-phan-thuc",
                      "first question retains its real primary skill mapping")
                check(not lecture.locator(".topic-micro-skill-details").evaluate("el => el.open"),
                      "per-question skill metadata is collapsed by default")
                lecture.locator('.topic-core-modal-mode[data-mode="teach"]').click()
                check(lecture.get_attribute("data-mode") == "teach", "practice can return to lecture")
                lecture.locator(".topic-core-dialog__close").click()
                check(not lecture.is_visible(), "lecture closes without stretching card")
                check(core_page.evaluate("() => localStorage.getItem('toan-thcs-practice-v1')") == initial_evidence,
                      "opening/closing/moving between modes never creates an attempt")
                check(all(abs(before["height"] - core_page.locator(".topic-core-card").nth(i).bounding_box()["height"]) < 2
                          for i, before in enumerate(fixed_boxes)), "all five card heights remain stable")
                # New questions are appended, not swapped into the original three.
                first_card.locator(".topic-core-practice-start").click()
                check(lecture.locator(".topic-micro-pager button").count() == 4,
                      "first card has original three questions and one new coverage question")
                lecture.locator(".topic-micro-pager button").nth(3).click()
                check(lecture.locator(".topic-micro-meta").inner_text().startswith("Câu 4/4")
                      and "Bổ sung kỹ năng" in lecture.locator(".topic-micro-meta").inner_text(),
                      "fourth question is explicitly labelled as added skill coverage")
                check(lecture.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")
                      == "hai-phan-thuc-bang-nhau", "fourth question assesses the missing equality skill")
                before_extra=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                shot(core_page, "topic07-equality-skill-q4-desktop.png")
                lecture.locator(".topic-micro-option").first.click()
                after_extra=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                check(after_extra.get("questions",{}).get("RAT07MICRO_016",{}).get("attempted",0)
                      == before_extra.get("questions",{}).get("RAT07MICRO_016",{}).get("attempted",0)+1,
                      "new equality question records one canonical attempt")
                check(after_extra.get("tags",{}).get("hai-phan-thuc-bang-nhau",{}).get("attempted",0)
                      == before_extra.get("tags",{}).get("hai-phan-thuc-bang-nhau",{}).get("attempted",0)+1,
                      "equality assessed skill gains one attempt")
                check(after_extra.get("tags",{}).get("dieu-kien-xac-dinh",{}).get("attempted",0)
                      == before_extra.get("tags",{}).get("dieu-kien-xac-dinh",{}).get("attempted",0),
                      "supporting domain tag is not falsely counted as a second assessed skill")
                lecture.locator(".topic-core-dialog__close").click()
                second_card.locator(".topic-core-practice-start").click()
                check(lecture.locator(".topic-micro-pager button").count() == 5,
                      "second card preserves original three plus two coverage questions")
                lecture.locator(".topic-micro-pager button").nth(3).click()
                check(lecture.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")
                      == "phan-tich-tu-mau", "second new question assesses numerator and denominator factorization")
                check("Bổ sung kỹ năng" in lecture.locator(".topic-micro-meta").inner_text(),
                      "second fourth question has accurate role label")
                before_factoring=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                lecture.locator(".topic-micro-option").first.click()
                after_factoring=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                check(after_factoring.get("questions",{}).get("RAT07MICRO_017",{}).get("attempted",0)
                      == before_factoring.get("questions",{}).get("RAT07MICRO_017",{}).get("attempted",0)+1,
                      "new factorization question records one canonical attempt")
                check(after_factoring.get("tags",{}).get("phan-tich-tu-mau",{}).get("attempted",0)
                      == before_factoring.get("tags",{}).get("phan-tich-tu-mau",{}).get("attempted",0)+1
                      and after_factoring.get("tags",{}).get("rut-gon-phan-thuc",{}).get("attempted",0)
                      == before_factoring.get("tags",{}).get("rut-gon-phan-thuc",{}).get("attempted",0),
                      "factoring only increments its own assessed skill")
                lecture.locator(".topic-micro-pager button").nth(4).click()
                check(lecture.locator(".topic-micro-meta").inner_text().startswith("Câu 5/5")
                      and "Bổ sung kỹ năng" in lecture.locator(".topic-micro-meta").inner_text(),
                      "fifth question is the bounded Grade-8 density coverage item")
                check(lecture.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")
                      == "giu-dieu-kien-ban-dau", "fifth question assesses preservation of original domain")
                before_domain=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                shot(core_page, "topic07-domain-preservation-q5-desktop.png")
                lecture.locator(".topic-micro-option").first.click()
                after_domain=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                check(after_domain.get("questions",{}).get("RAT07MICRO_018",{}).get("attempted",0)
                      == before_domain.get("questions",{}).get("RAT07MICRO_018",{}).get("attempted",0)+1,
                      "domain-preservation question records one stable-ID attempt")
                check(after_domain.get("tags",{}).get("giu-dieu-kien-ban-dau",{}).get("attempted",0)
                      == before_domain.get("tags",{}).get("giu-dieu-kien-ban-dau",{}).get("attempted",0)+1
                      and after_domain.get("tags",{}).get("rut-gon-phan-thuc",{}).get("attempted",0)
                      == before_domain.get("tags",{}).get("rut-gon-phan-thuc",{}).get("attempted",0),
                      "domain preservation increments only its own assessed skill")
                lecture.locator(".topic-core-dialog__close").click()
            else:
                first_card = core_page.locator(".topic-core-card").first
                check(core_page.locator(".topic-core-card").count() == expected_core_cards,
                      "correct independent Core-card count " + slug)
                expected_gaps=0
                check(core_page.locator(".topic-core-card-gap").count() == expected_gaps,
                      "truthful declared-vs-assessed coverage (no invented item) " + slug)
                before=core_page.evaluate("() => localStorage.getItem('toan-thcs-practice-v1')")
                boxes=[x.bounding_box() for x in core_page.locator(".topic-core-card").all()]
                first_card.locator(".topic-core-teach-start").click()
                dlg=core_page.locator(".topic-core-dialog")
                check(dlg.is_visible() and dlg.get_attribute("data-mode") == "teach",
                      "new lecture opens in separate modal " + slug)
                check(dlg.locator(".topic-core-teaching-row").count() == 5,
                      "complete source-grounded five-field teaching copy " + slug)
                check(dlg.locator(".topic-core-skill-chip").count() >= 1,
                      "learner-facing skill chips visible " + slug)
                shot(core_page, slug + "-lecture-modal-desktop.png")
                dlg.locator(".topic-core-to-practice").click()
                check(dlg.get_attribute("data-mode") == "practice"
                      and dlg.locator(".topic-micro-pager button").count() == {"02-so-va-phep-tinh":10,"09-he-phuong-trinh":4,"13-goc-va-duong-thang":6,"14-tam-giac":4,"19-duong-tron":4,"21-thong-ke":5,"23-xac-suat":6}.get(slug,3),
                      "lecture opens the actual card question count " + slug)
                dlg.locator(".topic-core-dialog__close").click()
                check(not dlg.is_visible() and core_page.evaluate(
                      "() => localStorage.getItem('toan-thcs-practice-v1')") == before,
                      "closing new Core lecture does not invent attempted question " + slug)
                check(all(abs(x["height"]-core_page.locator(".topic-core-card").nth(i).bounding_box()["height"])<2
                      for i,x in enumerate(boxes)),"Core cards never stretch " + slug)
                # Newly authored Q4 items must preserve one-assessed-skill evidence,
                # while mere open/close/switch creates no attempted question.
                targeted={
                    "08-phuong-trinh-bat-phuong-trinh":[("eq08-core-2","EQ08MICRO_016","khu-mau-phuong-trinh",["dkxd-phuong-trinh-mau","doi-chieu-nghiem"])],
                    "09-he-phuong-trinh":[("sys09-core-1","SYS09MICRO_016","so-nghiem-he",["y-nghia-hinh-hoc"]),("sys09-core-5","SYS09MICRO_017","nang-suat-he",["lap-he-bai-toan"])],
                    "11-can-thuc":[("rad11-core-4","RAD11MICRO_016","truc-can-mau-don",["nhan-chia-can"])]
                }
                if slug in ("13-goc-va-duong-thang","14-tam-giac","15-duong-dong-quy","16-tu-giac","17-thales-dong-dang","18-he-thuc-luong","19-duong-tron","20-hinh-hoc-tong-hop"):
                    check(core_page.locator(".topic-core-card-gap").count()==0,
                          "geometry declared skills have real individually assessed questions "+slug)
                    check(core_page.locator(".topic-core-card").first.locator(".topic-core-card-meta").is_visible(),
                          "geometry skill opportunities visible on card "+slug)
                geometry_targeted={
                    "13-goc-va-duong-thang":[
                        ("geo13-core-1","GEO13MICRO_016","tia",3,6),
                        ("geo13-core-1","GEO13MICRO_017","tia-doi",4,6),
                        ("geo13-core-1","GEO13MICRO_018","doan-thang-do-dai",5,6),
                        ("geo13-core-2","GEO13MICRO_019","do-goc",3,8),
                        ("geo13-core-2","GEO13MICRO_020","phan-loai-goc",4,8),
                        ("geo13-core-2","GEO13MICRO_021","goc-phu-bu",5,8),
                        ("geo13-core-2","GEO13MICRO_022","nhan-dang-goc-dac-biet",6,8),
                        ("geo13-core-2","GEO13MICRO_023","goc-phu-bu",7,8)
                    ],
                    "14-tam-giac":[
                        ("geo14-core-1","GEO14MICRO_016","so-sanh-canh-goc",3,4),
                        ("geo14-core-2","GEO14MICRO_017","cach-deu-dinh",3,4)
                    ],
                    "16-tu-giac":[("geo16-core-5","GEO16MICRO_016","hvuong-dau-hieu",3,4)]
                }
                if slug == "16-tu-giac":
                    square=core_page.locator('.topic-core-card[data-card-id="geo16-core-5"]')
                    check(square.get_attribute("data-covered-skills")=="4"
                          and square.get_attribute("data-total-skills")=="4",
                          "square recognition has an independently assessed question")
                for card_id,qid,skill,index,count in geometry_targeted.get(slug,[]):
                    c=core_page.locator('.topic-core-card[data-card-id="'+card_id+'"]')
                    c.locator(".topic-core-practice-start").click()
                    check(dlg.locator(".topic-micro-pager button").count()==count,
                          "geometry pager shows every original and added skill "+qid)
                    dlg.locator(".topic-micro-pager button").nth(index).click()
                    check(dlg.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")==skill
                          and "Bổ sung kỹ năng" in dlg.locator(".topic-micro-meta").inner_text(),
                          "geometry question has correct own assessed skill "+qid)
                    pre=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                    shot(core_page,slug+"-"+qid+"-desktop.png")
                    dlg.locator(".topic-micro-option").first.click()
                    post=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                    check(post.get("questions",{}).get(qid,{}).get("attempted",0)
                          == pre.get("questions",{}).get(qid,{}).get("attempted",0)+1,
                          "exact stable-ID geometry attempt "+qid)
                    check(post.get("tags",{}).get(skill,{}).get("attempted",0)
                          == pre.get("tags",{}).get(skill,{}).get("attempted",0)+1,
                          "one assessed geometry skill counted "+qid)
                    dlg.locator(".topic-core-dialog__close").click()
                    check(not dlg.is_visible(),"geometry modal closes without layout overlap "+qid)
                if slug == "09-he-phuong-trinh":
                    fourth=core_page.locator('.topic-core-card[data-card-id="sys09-core-4"]')
                    check(fourth.get_attribute("data-covered-skills") == "3"
                          and fourth.get_attribute("data-total-skills") == "3",
                          "existing SYS09MICRO_012 is truthfully declared without rewriting its record")
                for card_id, qid, primary, supporting in targeted.get(slug,[]):
                    this_card=core_page.locator('.topic-core-card[data-card-id="'+card_id+'"]')
                    check(this_card.get_attribute("data-covered-skills")==this_card.get_attribute("data-total-skills"),
                          "dedicated Q4 closes actual card gap "+card_id)
                    this_card.locator(".topic-core-practice-start").click()
                    check(dlg.locator(".topic-micro-pager button").count()==4,
                          "targeted extra item is accessible after three original roles "+card_id)
                    dlg.locator(".topic-micro-pager button").nth(3).click()
                    check(dlg.locator(".topic-micro-meta").inner_text().startswith("Câu 4/4")
                          and "Bổ sung kỹ năng" in dlg.locator(".topic-micro-meta").inner_text()
                          and dlg.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")==primary,
                          "fourth item has accurate assessed tag, not a relabelled old question "+qid)
                    before_q=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                    shot(core_page,slug+"-"+qid+"-desktop.png")
                    dlg.locator(".topic-micro-option").first.click()
                    after_q=core_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1') || '{}')""")
                    check(after_q.get("questions",{}).get(qid,{}).get("attempted",0)
                          == before_q.get("questions",{}).get(qid,{}).get("attempted",0)+1,
                          "new item records exactly one stable-ID attempt "+qid)
                    check(after_q.get("tags",{}).get(primary,{}).get("attempted",0)
                          == before_q.get("tags",{}).get(primary,{}).get("attempted",0)+1,
                          "new item increments exactly its primary assessed skill "+qid)
                    check(all(after_q.get("tags",{}).get(tag,{}).get("attempted",0)
                          == before_q.get("tags",{}).get(tag,{}).get("attempted",0) for tag in supporting),
                          "supporting tags do not acquire phantom attempts "+qid)
                    dlg.locator(".topic-core-dialog__close").click()
                    check(not dlg.is_visible(),"fourth item closes cleanly "+qid)
            exercise_page = core_page
            shot(core_page, slug + "-core-standalone-desktop.png")
        if slug not in ("01-ban-do-chuong-trinh", "03-ti-le-ti-le-thuc", "22-dai-luong-dac-trung"):
            start_core = exercise_page.locator("#core-journey .topic-micro-start").first
            start_core.wait_for(state="visible", timeout=12000)
            card = exercise_page.locator("#core-journey .topic-core-card").first
            original_height = card.bounding_box()["height"]
            start_core.click()
            core_modal = exercise_page.locator(".topic-core-dialog")
            check(core_modal.is_visible(), "Core modal opens on " + slug)
            check(core_modal.locator(".topic-micro-option").count() >= 2, "real answer options on " + slug)
            check(core_modal.locator(".topic-micro-options").evaluate(
                "(el) => el.scrollWidth <= el.clientWidth + 2"), "Core answers do not overflow on " + slug)
            check(exercise_page.locator(".topic-core-card .topic-micro-panel").count() == 0,
                  "Core never mounts inside a grid card on " + slug)
            core_modal.locator(".topic-core-dialog__close").click()
            check(not core_modal.is_visible(), "Core modal closes on " + slug)
            check(abs(original_height - card.bounding_box()["height"]) < 2,
                  "Core card does not expand/collapse on " + slug)
        if core_page is not None:
            core_page.close()
        practice_url = links.nth(2 if pilot else 1).get_attribute("href")
        self_check_url = links.nth(3 if pilot else 2).get_attribute("href")
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
    print("PASS: all 75 original topic routes plus standalone CĐ04–18 Core; modal checks on all 22 workspaces.", flush=True)
    page.locator("#library-local-search").fill("tam giac")
    matches = page.locator(".library-topic-tile:visible")
    check(matches.count() >= 1 and matches.count() < 25, "accent-insensitive filter works")
    check("tam giac" in page.locator("#library-search-result").inner_text().lower() or "/" in page.locator("#library-search-result").inner_text(), "filtered count shown")
    shot(page, "library-search-desktop.png")
    page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/", wait_until="networkidle")
    check(page.locator(".lesson-switcher-steps a").count() == 4, "four-stage CĐ04 navigation")
    check(page.locator('.lesson-switcher-steps [aria-current="page"]').count() == 1, "lesson stage selected")
    check(page.locator(".topic-workspace-hero").count() == 1, "learning workspace retained")
    shot(page, "lesson-04-desktop.png")
    ai_launcher = page.locator(".floating-ai-launcher")
    check(ai_launcher.count() == 1 and ai_launcher.is_visible(), "lesson page must expose floating AI launcher")
    check(ai_launcher.locator("img.floating-ai-face").count() == 1, "approved student avatar in launcher")
    check("tutor-girl-awake.webp" in ai_launcher.locator("img").get_attribute("src"), "avatar image path")
    ai_launcher.click()
    ai_panel = page.locator(".floating-ai-panel")
    check(ai_panel.is_visible(), "floating AI panel opens")
    check(ai_panel.locator(".floating-ai-chip").count() == 4, "four reading help actions")
    check("Đang đọc" in ai_panel.locator(".floating-ai-head small").inner_text(), "panel identifies current lesson context")
    shot(page, "lesson-04-floating-ai-desktop.png")
    ai_panel.locator(".floating-ai-close").click()
    check(ai_panel.is_hidden(), "floating AI closes without altering lesson")
    secure_page = desktop.new_page()
    secure_page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/tu-kiem-tra/", wait_until="networkidle")
    check(secure_page.locator(".floating-ai-launcher").count() == 0, "floating lesson AI must not appear on self-check routes")
    secure_page.close()

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
    # Gemini text is rendered by a safe Markdown/MathJax DOM layer; no live request
    # occurs during CI and the authored question result stays untouched.
    sample = r"""1. **Điều kiện:** \(x^2 + 3x\).
2. Ví dụ: $A=x^2+3x+3$.
- Bước **đúng**: $2x^2-x^2=x^2$.

$$
\frac{9m^3n^2}{3m^2n}=3mn
$$
<img src=x onerror=alert(1)>"""
    report = help_page.evaluate("""text => {
      const panel = document.createElement("div");
      panel.className = "practice-gemini-message";
      document.body.appendChild(panel);
      window.RoadmapRichMath.render(text, panel);
      return {
        strong: panel.querySelectorAll("strong").length,
        lists: panel.querySelectorAll("ol, ul").length,
        inline: panel.querySelectorAll(".ai-math-inline").length,
        display: panel.querySelectorAll(".ai-math-display").length,
        injectedImages: panel.querySelectorAll("img").length,
        literalHtml: panel.textContent.includes("<img src=x"),
        rawDollar: panel.textContent.includes("$A=")
      };
    }""", sample)
    print("AI RICH MATH BROWSER REPORT", report, flush=True)
    check(report["strong"] >= 2 and report["lists"] == 2 and report["inline"] >= 3, "AI Markdown and inline TeX formatting")
    check(report["display"] == 1 and report["injectedImages"] == 0 and report["literalHtml"] and not report["rawDollar"], "display math and safe plain-text HTML")

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
    micro_page.goto(BASE + "kien-thuc/04-bieu-thuc-dai-so/core/", wait_until="networkidle")
    cards = micro_page.locator("#core-journey .topic-core-card")
    original_boxes = [cards.nth(i).bounding_box() for i in range(cards.count())]
    micro_page.locator("#core-journey .topic-micro-start").first.click()
    core_dialog = micro_page.locator(".topic-core-dialog")
    check(core_dialog.is_visible(), "Core practice opens in its own dialog")
    check(cards.count() == 6 and cards.nth(0).get_attribute("class") == "topic-core-card", "CĐ04 keeps six Wave-1 cards as stable card shells while practice opens in a dialog")
    check(core_dialog.locator(".topic-micro-pager button").count() == 3, "per-question navigation")
    check(core_dialog.locator(".topic-micro-option").first.evaluate("(el) => parseFloat(getComputedStyle(el).borderTopWidth) >= 1"), "visible answer boundaries")
    check(core_dialog.locator(".topic-micro-tools > button").count() == 3, "three separate help buttons")
    micro_page.locator(".topic-micro-teach").first.click()
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Ví dụ mẫu", exact=True).is_visible(), "new CĐ04 teaching copy appears on demand")
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Đáp án trong ngân hàng").count() == 0, "reteaching does not reveal current question answer")
    micro_page.locator(".topic-micro-teach").first.click()
    check(micro_page.locator(".topic-micro-tutor").is_hidden(), "repeated teaching click collapses content")
    micro_page.locator(".topic-micro-teach").first.click()
    check(micro_page.locator(".topic-micro-tutor").is_visible(), "reteaching reopens after collapse")
    micro_page.locator(".topic-micro-reveal").first.click()
    micro_page.locator(".topic-micro-tutor button").filter(has_text="Tôi muốn xem lời giải ngay").first.click()
    check(micro_page.locator(".topic-micro-tutor").first.get_by_text("Đáp án trong ngân hàng").is_visible(), "micro full reveal after explicit choice")
    shot(micro_page, "micro-04-offline-help-desktop.png")
    micro_page.locator(".topic-micro-options button").first.click()
    micro_saved = micro_page.evaluate("""() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1'))""")
    rec = micro_saved["questions"].get("ALG04MICRO_001", {})
    check(rec.get("full_solution_views") == 1 and rec.get("correct_without_hint", 0) == 0, "micro answer after reveal recorded only as assisted")
    check(rec.get("attempted") == 1, "first answer recorded exactly once")
    micro_page.locator(".topic-micro-pager button").nth(1).click()
    check(micro_page.locator(".topic-micro-meta").inner_text().startswith("Câu 2/3"), "next question can be viewed before answering")
    micro_page.locator(".topic-micro-pager button").first.click()
    check(micro_page.locator(".topic-micro-options button").first.is_disabled(), "answered question remains locked within session")
    unchanged = micro_page.evaluate("() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1')).questions.ALG04MICRO_001.attempted")
    check(unchanged == 1, "revisiting answered question never double-counts")
    core_dialog.locator(".topic-core-dialog__close").click()
    check(not core_dialog.is_visible(), "close restores static card grid")
    closed_boxes = [cards.nth(i).bounding_box() for i in range(cards.count())]
    # Dialog focus/scroll restoration can move the viewport; compare dimensions
    # and inter-card relative positions rather than viewport-absolute y.
    check(all(before and after and abs(before["height"] - after["height"]) < 2
              for before, after in zip(original_boxes, closed_boxes)), "Core card heights remain unchanged")
    check(all(abs((before["y"] - original_boxes[0]["y"]) - (after["y"] - closed_boxes[0]["y"])) < 2
              for before, after in zip(original_boxes, closed_boxes)), "Core card rows never shift or overlap")
    check(micro_page.locator(".topic-core-card .topic-micro-panel").count() == 0,
          "Core session must never be mounted inside a card")
    micro_page.locator("#core-journey .topic-micro-start").first.click()
    check(micro_page.locator(".topic-micro-options button").first.is_disabled(), "reopening same card retains current session")
    check(micro_page.evaluate("() => JSON.parse(localStorage.getItem('toan-thcs-practice-v1')).questions.ALG04MICRO_001.attempted") == 1,
          "closing and reopening does not invent a new attempt")
    shot(micro_page, "micro-04-dialog-reopen-desktop.png")
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


    # Topic25: ten curated anchors, one extra anchor and valid geometry drawing.
    anchors_page = desktop.new_page()
    anchors_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/kho-bai-mo-neo/", wait_until="networkidle")
    anchors_page.locator('[data-anchor-browser][data-ready="1"]').wait_for(state="visible", timeout=12000)
    check(anchors_page.locator(".anchor-result").count() == 10, "ten curated representative anchors")
    anchors_page.get_by_role("button", name="Toàn bộ thư viện (11)").click()
    check(anchors_page.locator(".anchor-result").count() == 11, "full archive includes new eleventh anchor")
    anchors_page.locator(".anchor-search").fill("A25-011")
    check(anchors_page.locator(".anchor-result").count() == 1, "search across open-ended archive")
    anchors_page.locator(".anchor-link").click()
    check("anchor-25-011" in anchors_page.url, "expanded anchor opens deep proof")
    anchors_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/anchor-25-004/", wait_until="networkidle")
    diagram = anchors_page.locator('.md-typeset img[src*="anchor-25-004-right-altitude.svg"]')
    check(diagram.count() == 1 and diagram.evaluate("(x) => x.complete && x.naturalWidth > 200"), "geometry proof diagram loads")
    check(anchors_page.locator(".floating-ai-launcher").count() == 1, "deep anchor lesson provides contextual AI")
    anchors_page.locator(".floating-ai-launcher").click()
    check("Bài toán mỏ neo" in anchors_page.locator(".floating-ai-head small").inner_text() or
          anchors_page.locator(".floating-ai-head small").inner_text().strip(), "deep AI shows reading section")
    anchors_page.locator(".floating-ai-close").click()
    shot(anchors_page, "topic25-anchor-004-geometry-desktop.png")
    anchors_page.close()

    # CĐ25 paper-first: the three self-authored papers and their keys are plain documents.
    # Legacy JS exam engine is retained as a historical file but is NOT mounted.
    exam_page = desktop.new_page()
    for number, expected_parts in [("01", 12), ("02", 12), ("03", 11)]:
        exam_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/de-luyen-" + number + "/", wait_until="networkidle")
        check(exam_page.locator(".exam-engine, [data-exam-engine], .exam-answers, .exam-notation-toolbar").count() == 0,
              "paper-only exam must have no interactive input on " + number)
        check(exam_page.locator(".floating-ai-launcher").count() == 0, "exam must not reveal AI")
        check(exam_page.get_by_text("Câu 1.", exact=True).count() > 0 and
              exam_page.get_by_text("Câu 2.", exact=True).count() > 0, "explicit per-Bài labels " + number)
        check("không cần nhập" in exam_page.locator(".md-content__inner").inner_text(),
              "student paper guidance " + number)
        if number == "01": shot(exam_page, "topic25-exam01-paper-desktop.png")
        exam_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/de-luyen-" + number + "-dap-an/", wait_until="networkidle")
        check(exam_page.get_by_role("heading",name="Hướng dẫn chấm theo từng ý").count() == 1,
              "clear step rubric "+number)
        check(exam_page.locator(".md-content__inner table").first.locator("tr").count() >= expected_parts,
              "rubric rows "+number)
        check(exam_page.locator(".exam-engine, .exam-answers, .floating-ai-launcher").count() == 0,
              "no mock engine/AI on key "+number)
        if number == "01": shot(exam_page, "topic25-exam01-rubric-desktop.png")
    exam_page.close()

    # Tablet: header launcher is independent of the native, unclipped drawer.
    half = browser.new_context(viewport={"width": 880, "height": 900}, device_scale_factor=1)
    half_page = half.new_page()
    half_page.goto(BASE + "kien-thuc/23-xac-suat/", wait_until="networkidle")
    launcher = half_page.locator(".md-header__inner > [data-roadmap-topic-launcher]")
    check(launcher.count() == 1 and launcher.is_visible(), "single visible independent topic launcher")
    check(half_page.locator(".md-sidebar--primary [data-roadmap-mobile-shortcuts]").count() == 0,
          "zero custom elements inside native drawer")
    launcher.click()
    dialog = half_page.locator("[data-roadmap-topic-dialog]")
    check(dialog.is_visible() and dialog.locator(".roadmap-topic-dialog__list a").count() == 25, "25-topic chooser")
    check(dialog.locator(".roadmap-main-quick__links a").count() == 7, "seven main destinations at half-width")
    check("23. Xác suất" in dialog.locator('.roadmap-topic-dialog__list a[aria-current="page"]').inner_text(), "active topic")
    check("01." in dialog.locator(".roadmap-topic-dialog__list a").first.inner_text(), "topic list begins at 01")
    check(dialog.locator(".roadmap-topic-dialog__list").evaluate("(n) => n.scrollTop") == 0, "fresh dialog starts unscrolled")
    shot(half_page, "lesson-23-half-width-topic-chooser.png")
    dialog.locator('.roadmap-topic-dialog__list a[href$="/24-bai-toan-thuc-te/"]').click()
    check("/kien-thuc/24-bai-toan-thuc-te/" in half_page.url, "direct topic switch")
    half_page.locator('.md-header__button[for="__drawer"]').click()
    half_page.wait_for_timeout(550)
    check(half_page.locator(".md-sidebar--primary [data-roadmap-mobile-shortcuts]").count() == 0,
          "drawer navigation not patched at any nested level")
    native_title = half_page.locator(".md-sidebar--primary .md-nav__title").first
    check(native_title.is_visible(), "native drawer title remains visible")
    shot(half_page, "lesson-24-half-width-native-drawer.png")
    # The drawer's overlay intentionally intercepts the header hamburger while open.
    # Close through the actual dimmed backdrop, as an iOS user would.
    half_page.mouse.click(700, 450)
    check(not half_page.locator('input#__drawer').is_checked(), "backdrop closes native drawer")
    half_page.goto(BASE + "kien-thuc/07-phan-thuc-dai-so/core/", wait_until="networkidle")
    tablet_cards = half_page.locator('#core-journey[data-core-ready="1"] .topic-core-card')
    check(tablet_cards.count() == 5, "tablet renders all Core cards")
    check(half_page.locator(".topic-core-card-header").count() == 5, "tablet renders tinted headers")
    check(tablet_cards.first.locator(".topic-core-card-actions button").evaluate_all(
          "(buttons) => buttons.length === 2 && buttons.every(b => b.getBoundingClientRect().height >= 44)"),
          "tablet Core actions retain accessible targets")
    check(tablet_cards.first.evaluate("(el) => el.scrollWidth <= el.clientWidth + 2"),
          "tablet Core card has no horizontal overflow")
    tablet_cards.first.locator(".topic-core-card-actions").scroll_into_view_if_needed()
    shot(half_page, "topic07-core-soft-cards-tablet.png")
    half_page.close()
    half.close()

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
    phone_guide = first_phone.locator("#hieu-cach-hoc")
    phone_guide.scroll_into_view_if_needed()
    first_phone.wait_for_function("""() => [...document.querySelectorAll('#hieu-cach-hoc img')].length === 4 &&
        [...document.querySelectorAll('#hieu-cach-hoc img')].every(img => img.complete && img.naturalWidth >= 500)""")
    check(phone_guide.locator("img").evaluate_all(
          "(nodes) => nodes.length === 4 && nodes.every(img => img.complete && img.naturalWidth >= 500)"),
          "all four approved infographic assets load on phone")
    first_phone.locator("#hieu-cach-hoc img").evaluate_all(
          "(imgs) => Promise.all(imgs.map(img => img.decode ? img.decode() : Promise.resolve()))")
    first_phone.wait_for_timeout(120)
    check(phone_guide.locator("[data-home-guide-open]").count() == 4, "phone exposes four learning-guide cards")
    check(phone_guide.evaluate("(el) => el.scrollWidth <= el.clientWidth + 2"), "phone learning-guide has no horizontal overflow")
    check(phone_guide.locator(".home-guide-visual").evaluate_all(
          "(nodes) => nodes.length === 4 && nodes.every(el => Math.abs(el.getBoundingClientRect().width / el.getBoundingClientRect().height - 4/3) < 0.03)"),
          "phone learning-guide previews share one 4:3 frame")
    shot(first_phone, "home-learning-guide-phone.png")
    phone_guide.locator("[data-home-guide-open]").nth(1).click()
    phone_guide_dialog = first_phone.locator("[data-home-guide-dialog]")
    check(phone_guide_dialog.is_visible(), "phone infographic lightbox opens")
    check(phone_guide_dialog.locator(".home-guide-dialog-panel").evaluate(
          "(el) => el.scrollWidth <= el.clientWidth + 2"), "phone infographic lightbox fits viewport")
    shot(first_phone, "home-learning-guide-modal-phone.png")
    first_phone.keyboard.press("Escape")
    check(not phone_guide_dialog.is_visible(), "phone infographic lightbox closes with Escape")
    grade_phone = phone.new_page()
    grade_phone.goto(BASE + "hoc-theo-lop/?lop=8", wait_until="networkidle")
    check(grade_phone.locator('[data-grade-panel="8"]').is_visible(), "phone grade 8 direct route")
    shot(grade_phone, "learn-by-grade-8-phone.png")
    grade_phone.close()
    first_phone.locator("[data-study-wake]").click()
    check(first_phone.locator("[data-study-gateway]").is_visible(), "tap interaction works")
    shot(first_phone, "home-awake-phone.png")
    first_phone.goto(BASE + "kien-thuc/23-xac-suat/", wait_until="networkidle")
    check(first_phone.locator(".md-header__inner > [data-roadmap-topic-launcher]").count() == 1,
          "phone header has one independent topic chooser")
    first_phone.locator('.md-header__button[for="__drawer"]').click()
    first_phone.wait_for_timeout(450)
    check(first_phone.locator(".md-sidebar--primary [data-roadmap-mobile-shortcuts]").count() == 0,
          "phone drawer has no injected sticky toolbar")
    shot(first_phone, "lesson-23-phone-native-drawer.png")
    first_phone.mouse.click(375, 350)
    check(not first_phone.locator('input#__drawer').is_checked(), "phone drawer backdrop closes")
    first_phone.locator("[data-roadmap-topic-launcher]").click()
    chooser = first_phone.locator("[data-roadmap-topic-dialog]")
    check(chooser.is_visible() and chooser.locator(".roadmap-topic-dialog__list a").count() == 25, "phone chooser has all 25 topics")
    check(chooser.locator(".roadmap-main-quick__links a").count() == 7, "phone chooser retains the seven main groups")
    check("01." in chooser.locator(".roadmap-topic-dialog__list a").first.inner_text(), "phone chooser starts at 01")
    shot(first_phone, "lesson-23-phone-topic-chooser.png")
    chooser.locator(".roadmap-topic-dialog__close").click()
    check(not chooser.is_visible(), "phone chooser closes and returns to lesson")
    check(first_phone.locator(".lesson-switcher-steps a").count() == 4, "phone topic23 four-stage nav")
    shot(first_phone, "lesson-23-phone.png")
    # Route links are verified from actual static content.
    first_phone.locator('.lesson-switcher-steps a').nth(2).click()
    check("/bai-tap/" in first_phone.url, "topic practice route")
    first_phone.locator('.lesson-switcher-steps a[aria-current="page"]').wait_for(state="visible", timeout=10000)
    check(first_phone.locator('.lesson-switcher-steps a[aria-current="page"]').count() == 1, "practice stage selected")
    shot(first_phone, "practice-23-phone.png")
    # Pilot: Core is now a fourth, independently reachable learning step.
    first_phone.goto(BASE + "kien-thuc/07-phan-thuc-dai-so/", wait_until="networkidle")
    check(first_phone.locator(".lesson-switcher-steps a").count() == 4, "CĐ07 mobile four-step navigation")
    check(first_phone.locator("#core-journey.topic-core-gateway").count() == 1, "legacy anchor reaches gateway")
    first_phone.locator('.lesson-switcher-steps a[href$="/core/"]').click()
    check(first_phone.url.endswith("/07-phan-thuc-dai-so/core/"), "phone opens separate Core page")
    completed_core=first_phone.locator('#core-journey[data-core-ready="1"]')
    completed_core.wait_for(state="visible", timeout=12000)
    check(completed_core.count() == 1, "exactly one fully rendered Core workspace")
    check(completed_core.locator(".topic-core-teaching-item").count() == 0,
          "no separate teaching accordion on phone")
    check(completed_core.locator(".topic-core-teach-start").count() == 5,
          "phone has five lecture buttons")
    check(completed_core.locator(".topic-core-card-header").count() == 5,
          "phone retains five tinted Core card headers")
    check(completed_core.locator(".topic-core-card").first.evaluate(
          "(el) => el.scrollWidth <= el.clientWidth + 2"),
          "card does not create horizontal scrolling on phone")
    check(completed_core.locator(".topic-core-card").first.locator(".topic-core-card-actions button").evaluate_all(
          "(buttons) => buttons.length === 2 && buttons.every(b => b.getBoundingClientRect().height >= 44)"),
          "phone Core actions remain thumb-sized")
    completed_core.locator(".topic-core-card").first.locator(".topic-core-card-actions").scroll_into_view_if_needed()
    shot(first_phone, "topic07-core-soft-cards-phone.png")
    first_phone.locator("#core-journey .topic-core-teach-start").first.click()
    pilot_dialog=first_phone.locator(".topic-core-dialog")
    check(pilot_dialog.is_visible() and pilot_dialog.get_attribute("data-mode") == "teach",
          "phone lecture opens in same stable dialog")
    check(pilot_dialog.locator(".topic-core-skill-chip").count() == 4,
          "four legible skill chips on phone")
    check(pilot_dialog.locator(".topic-core-teaching-row").count() == 5,
          "five approved teaching fields on phone")
    check(pilot_dialog.locator(".topic-core-dialog__body").evaluate(
          "(el) => el.scrollWidth <= el.clientWidth + 2"),
          "lecture and formulas do not overflow phone modal")
    shot(first_phone, "topic07-core-lecture-phone.png")
    pilot_dialog.locator(".topic-core-to-practice").click()
    check(pilot_dialog.get_attribute("data-mode") == "practice"
          and pilot_dialog.locator(".topic-micro-options button").count() == 4,
          "phone lecture-to-practice handoff works")
    check(pilot_dialog.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill") == "nhan-biet-phan-thuc",
          "phone question shows matching skill")
    check(pilot_dialog.locator(".topic-micro-pager button").count() == 4,
          "phone shows all four first-card questions")
    pilot_dialog.locator(".topic-micro-pager button").nth(3).click()
    check(pilot_dialog.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill") == "hai-phan-thuc-bang-nhau",
          "fourth phone question has the correct skill")
    check(pilot_dialog.locator(".topic-core-dialog__body").evaluate(
          "(el) => el.scrollWidth <= el.clientWidth + 2"), "new math question does not overflow phone")
    shot(first_phone, "topic07-core-practice-phone.png")
    pilot_dialog.locator(".topic-core-dialog__close").click()
    check(not pilot_dialog.is_visible(), "phone Core modal closes")
    check(completed_core.locator('.topic-core-card[data-card-id="pt07-core-1"]').get_attribute("data-covered-skills") == "4",
          "phone retains truthful 4/4 coverage")
    second_phone_card=completed_core.locator('.topic-core-card[data-card-id="pt07-core-2"]')
    check(second_phone_card.get_attribute("data-covered-skills")=="4"
          and second_phone_card.get_attribute("data-total-skills")=="4",
          "phone retains truthful Core2 4/4 coverage")
    second_phone_card.locator(".topic-core-practice-start").click()
    pilot_dialog=first_phone.locator(".topic-core-dialog")
    check(pilot_dialog.locator(".topic-micro-pager button").count()==5,
          "phone exposes all five Core2 Micro questions")
    pilot_dialog.locator(".topic-micro-pager button").nth(4).click()
    check(pilot_dialog.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")
          == "giu-dieu-kien-ban-dau", "phone density item shows the correct assessed skill")
    check(pilot_dialog.locator(".topic-core-dialog__body").evaluate(
          "(el)=>el.scrollWidth<=el.clientWidth+2"), "domain-preservation math fits phone")
    shot(first_phone,"topic07-domain-preservation-q5-phone.png")
    pilot_dialog.locator(".topic-core-dialog__close").click()
    # Cover each new subject, plus all four Q4 items, in a real touch viewport.
    new_core_phone=[
        ("08-phuong-trinh-bat-phuong-trinh","eq08-core-2","khu-mau-phuong-trinh"),
        ("09-he-phuong-trinh","sys09-core-1","so-nghiem-he"),
        ("09-he-phuong-trinh","sys09-core-5","nang-suat-he"),
        ("10-ham-so-do-thi","fun10-core-5",None),
        ("11-can-thuc","rad11-core-4","truc-can-mau-don"),
        ("12-phuong-trinh-bac-hai-viete","qua12-core-5",None)
    ]
    for topic_slug,card_id,skill in new_core_phone:
        first_phone.goto(BASE + "kien-thuc/"+topic_slug+"/core/",wait_until="networkidle")
        first_phone.locator('#core-journey[data-core-ready="1"]').wait_for(state="visible",timeout=12000)
        check(first_phone.locator(".lesson-switcher-steps a").count()==4
              and first_phone.locator(".topic-core-card").count()==5,
              "phone Core page and four-step shell "+topic_slug)
        card=first_phone.locator('.topic-core-card[data-card-id="'+card_id+'"]')
        check(card.evaluate("(el)=>el.scrollWidth<=el.clientWidth+2"),"Core card fits phone "+card_id)
        card.locator(".topic-core-teach-start").click()
        modal=first_phone.locator(".topic-core-dialog")
        check(modal.get_attribute("data-mode")=="teach"
              and modal.locator(".topic-core-teaching-row").count()==5,
              "complete Core teaching in phone modal "+card_id)
        check(modal.locator(".topic-core-dialog__body").evaluate(
              "(el)=>el.scrollWidth<=el.clientWidth+2"),"teaching formulas do not overflow phone "+card_id)
        modal.locator(".topic-core-to-practice").click()
        check(modal.get_attribute("data-mode")=="practice","phone switches between teaching and exercise "+card_id)
        if skill is not None:
            check(modal.locator(".topic-micro-pager button").count()==4,
                  "all four phone exercise questions accessible "+card_id)
            modal.locator(".topic-micro-pager button").nth(3).click()
            check(modal.locator(".topic-micro-assessed-skill").get_attribute("data-primary-skill")==skill,
                  "phone Q4 uses real primary skill "+card_id)
            check(modal.locator(".topic-core-dialog__body").evaluate(
                  "(el)=>el.scrollWidth<=el.clientWidth+2"),"targeted math does not overflow phone "+card_id)
        shot(first_phone,topic_slug+"-"+card_id+"-phone.png")
        modal.locator(".topic-core-dialog__close").click()
        check(not modal.is_visible(),"phone Core modal closes without card stretching "+card_id)
    # Geometry route/long pagers must fit a real touch viewport.
    for geometry_slug,card_id,count in [
        ("13-goc-va-duong-thang","geo13-core-1",6),
        ("13-goc-va-duong-thang","geo13-core-2",8),
        ("14-tam-giac","geo14-core-1",4),
        ("14-tam-giac","geo14-core-2",4),
        ("15-duong-dong-quy","geo15-core-1",3),
        ("16-tu-giac","geo16-core-5",4),
        ("17-thales-dong-dang","geo17-core-4",3),
        ("18-he-thuc-luong","geo18-core-5",3)
    ]:
        first_phone.goto(BASE+"kien-thuc/"+geometry_slug+"/core/",wait_until="networkidle")
        first_phone.locator('#core-journey[data-core-ready="1"]').wait_for(state="visible",timeout=12000)
        check(first_phone.locator(".lesson-switcher-steps a").count()==4
              and first_phone.locator(".topic-core-card").count()==5,
              "geometry phone has five cards and four-step menu "+geometry_slug)
        card=first_phone.locator('.topic-core-card[data-card-id="'+card_id+'"]')
        check(card.evaluate("(el)=>el.scrollWidth<=el.clientWidth+2"),"geometry card fits screen "+card_id)
        before=first_phone.evaluate("() => localStorage.getItem('toan-thcs-practice-v1')")
        card.locator(".topic-core-teach-start").click()
        modal=first_phone.locator(".topic-core-dialog")
        check(modal.is_visible() and modal.locator(".topic-core-teaching-row").count()==5
              and modal.locator(".topic-core-dialog__body").evaluate(
                    "(el)=>el.scrollWidth<=el.clientWidth+2"),
              "geometry full lecture and formula layout fit phone "+card_id)
        modal.locator(".topic-core-to-practice").click()
        check(modal.locator(".topic-micro-pager button").count()==count
              and modal.locator(".topic-micro-pager").evaluate(
                    "(el)=>el.scrollWidth<=el.clientWidth+2"),
              "geometry pager wraps without horizontal overflow "+card_id)
        modal.locator(".topic-micro-pager button").last.click()
        check(modal.locator(".topic-core-dialog__body").evaluate(
              "(el)=>el.scrollWidth<=el.clientWidth+2"),"geometry last item fits phone "+card_id)
        shot(first_phone,geometry_slug+"-"+card_id+"-phone.png")
        modal.locator(".topic-core-dialog__close").click()
        check(not modal.is_visible()
              and first_phone.evaluate("() => localStorage.getItem('toan-thcs-practice-v1')")==before,
              "phone geometry open/close/view never records attempt "+card_id)
    browser.close()

checks = sorted(OUT.glob("*.png"))
check(len(checks) >= 10 and all(f.stat().st_size > 2000 for f in checks), "screenshots generated")
print("PASS: interactive themes, responsive chooser, artwork, 25-topic finder, lesson paths, sticky navigation; previews:", len(checks), flush=True)
