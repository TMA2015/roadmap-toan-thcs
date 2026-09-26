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
    visual = img.evaluate("""node => {
      const canvas = document.createElement("canvas"); canvas.width = node.naturalWidth; canvas.height = node.naturalHeight;
      const ctx = canvas.getContext("2d"); ctx.drawImage(node, 0, 0);
      const a = (x,y) => ctx.getImageData(x,y,1,1).data[3];
      return {loaded:node.complete, width:node.naturalWidth, height:node.naturalHeight,
        cornerAlpha:[a(0,0),a(node.naturalWidth-1,0),a(0,node.naturalHeight-1)]};
    }""")
    check(visual["loaded"] and visual["width"] >= 480 and visual["height"] >= 200, "approved mascot loaded")
    check(page.locator(".study-art-room, .study-art-wakeup").count() == 0, "no stacked room panel or duplicate greeting")
    stage = page.locator(".study-art-stage").bounding_box()
    check(stage is not None and abs(stage["width"] / stage["height"] - 520/276) < .02, "sleeping scene has one landscape panel")
    shot(page, "home-playful-desktop.png")
    page.locator("[data-study-wake]").click()
    check(page.locator("[data-study-gateway]").is_visible(), "wake reveals learning routes")
    check("study-scene-awake-approved.webp" in img.get_attribute("src"), "approved full-room scene swaps in")
    page.wait_for_function("""() => {
      const img = document.querySelector(".study-art-image");
      return img && img.complete && img.naturalWidth >= 780 && img.naturalWidth / img.naturalHeight > 1.7;
    }""")
    check(page.locator(".study-art-stage").evaluate("(el) => getComputedStyle(el).backgroundImage === 'none' || !getComputedStyle(el).backgroundImage.includes('study-room-pastel.svg')"), "awake artwork has no separate room layer")
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

    # Exam Engine: no scoring before submit, persistent draft, explicit self marking.
    exam_page = desktop.new_page()
    exam_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/de-luyen-01/", wait_until="networkidle")
    check(exam_page.locator(".exam-engine").count() == 1, "exam 1 interactive engine mounted")
    check(exam_page.locator(".floating-ai-launcher").count() == 0, "timed exam must not expose reading Tutor before submission")
    check(exam_page.locator(".exam-rubric-item").count() == 0, "no rubric before submission")
    check(exam_page.locator('a[href*="de-luyen-01-dap-an/"]').first.is_hidden(), "source answer link withheld in exam UI")
    exam_page.get_by_role("button", name="Bắt đầu làm đề 120 phút").click()
    check(exam_page.locator(".exam-answer-item").count() == 12, "exam 1 written response slots")
    exam_page.locator(".exam-answer-item textarea").first.fill("Kết quả: 5 căn 2; đã đổi từng căn thức.")
    shot(exam_page, "topic25-exam01-running-desktop.png")
    exam_page.reload(wait_until="networkidle")
    check(exam_page.locator(".exam-answer-item textarea").first.input_value().startswith("Kết quả: 5 căn 2"), "draft persists after reload")
    check(exam_page.locator(".exam-progress").inner_text().startswith("1/12"), "saved progress")
    exam_page.on("dialog", lambda dialog: dialog.accept())
    exam_page.get_by_role("button", name="Nộp bài", exact=True).click()
    check(exam_page.locator(".exam-answer-item").count() == 0, "submission freezes response fields")
    check(exam_page.locator(".exam-rubric-item").count() == 0, "rubric shown only after learner confirms key review")
    exam_page.get_by_role("button", name="Tôi đã đối chiếu lời giải trên giấy").click()
    check(exam_page.locator(".exam-rubric-item").count() == 12, "per-subpart self-scoring controls")
    exam_page.locator(".exam-rubric-item input").first.check()
    check("0,75" in exam_page.locator(".exam-score").inner_text(), "self score follows per-step rubric")
    exam_page.locator(".exam-attest input").check()
    exam_page.get_by_role("button", name="Chốt điểm tự chấm").click()
    check("Đã lưu" in exam_page.locator(".exam-message").last.inner_text(), "finalized self-assessment persisted")
    check(exam_page.locator(".exam-gap-list a").count() > 0, "missed rubric routes to anchor/topic recovery")
    shot(exam_page, "topic25-exam01-self-score-desktop.png")
    exam_page.close()
    for number, expected in [("02", 12), ("03", 11)]:
        exam_page = desktop.new_page()
        exam_page.goto(BASE + "kien-thuc/25-tong-hop-on-thi-10/de-luyen-" + number + "/", wait_until="networkidle")
        check(exam_page.locator(".exam-engine").count() == 1, "exam engine mounted on "+number)
        exam_page.get_by_role("button", name="Bắt đầu làm đề 120 phút").click()
        check(exam_page.locator(".exam-answer-item").count() == expected, "exam "+number+" response mapping")
        if number == "02":
            exam_page.evaluate("""() => {
                const key = "roadmap:exam-v1:EXAM25-02";
                const state = JSON.parse(localStorage.getItem(key));
                state.deadline_at = Date.now() - 1000;
                localStorage.setItem(key, JSON.stringify(state));
            }""")
            exam_page.reload(wait_until="networkidle")
            check(exam_page.locator(".exam-answer-item").count() == 0, "expired exam freezes draft on reload")
            check("Đã hết 120 phút" in exam_page.locator(".exam-message").first.inner_text(), "expired exam submits automatically")
            check(exam_page.locator(".exam-rubric-item").count() == 0, "timeout never reveals rubric before answer-review step")
        exam_page.close()

    # Half-width desktop: the main destinations stay available inside the drawer.
    half = browser.new_context(viewport={"width": 880, "height": 900}, device_scale_factor=1)
    half_page = half.new_page()
    half_page.goto(BASE + "kien-thuc/23-xac-suat/", wait_until="networkidle")
    half_page.locator('.md-header__button[for="__drawer"]').click()
    half_page.wait_for_timeout(550)  # Let Material's translated drawer settle before hit-testing.
    active_shortcuts = half_page.evaluate("""() => {
      const nodes = [...document.querySelectorAll(".md-sidebar--primary .roadmap-mobile-shortcuts")];
      return nodes.findIndex(node => {
        const r = node.getBoundingClientRect();
        const x = r.left + Math.min(r.width/2, 80), y = r.top + 45;
        return r.left >= 0 && r.right <= innerWidth && y > 0 && y < innerHeight &&
          document.elementFromPoint(x,y)?.closest(".roadmap-mobile-shortcuts") === node;
      });
    }""")
    check(active_shortcuts >= 0, "visible compact menu belongs to current Material drill-down")
    quick = half_page.locator(".md-sidebar--primary .roadmap-mobile-shortcuts").nth(active_shortcuts).locator("a")
    check(quick.count() == 6 and quick.first.is_visible(), "six global destinations in half-width drawer")
    check(half_page.locator(".md-sidebar--primary .md-nav__link").count() > 6, "topic links remain in the drawer")
    check([quick.nth(i).evaluate("(a) => a.lastChild.textContent.trim()") for i in range(6)] ==
          ["Trang chủ", "Học theo lớp", "Roadmap", "AI Tutor", "Hướng dẫn", "Kiến thức"],
          "compact navigation order and labels")
    shot(half_page, "lesson-23-half-width-main-navigation.png")
    quick.first.click()
    check(half_page.url.rstrip("/") == BASE.rstrip("/"), "return to home in one drawer click")
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
