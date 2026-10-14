"""A2 technical smoke: wrong-answer feedback and non-AI paths for Grades 6 and 8.

Runs only against a local MkDocs build with isolated Chromium contexts.
NOT a mathematical/academic review or human learner A2 PASS. Never uses real
learner profiles, provider credentials, Gemini calls or Firebase writes.
"""
import json
from pathlib import Path
from urllib.parse import urlparse
import shutil

from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
ROOT = Path(__file__).resolve().parents[1]
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
PRACTICE_KEY = "toan-thcs-practice-v1"
READINESS_KEY = "toan-thcs-assessment-v1"
CASES = ((6, "02-so-va-phep-tinh"), (8, "07-phan-thuc-dai-so"))

if not CHROME:
    raise RuntimeError("Chromium/Google Chrome is required")


def read_json(relative):
    with (ROOT / "docs" / relative).open(encoding="utf-8") as source:
        return json.load(source)


def get(page, key):
    return page.evaluate("(key) => localStorage.getItem(key)", key)


def load_bank(slug):
    folder = "assets/data/practice/"
    name = f"{slug}-v1.manifest.json"
    manifest = read_json(folder + name)
    assert manifest["schema"] == "practice-bank-manifest-v1"
    questions = {}
    for src in manifest["sources"]:
        for question in read_json(folder + src)["questions"]:
            assert question["id"] not in questions
            questions[question["id"]] = question
    return questions


def wrong_index(question):
    assert len(question["options"]) >= 2
    return (question["answer"] + 1) % len(question["options"])


def block_ai_transport(route):
    """Simulate unavailable AI transport without blocking the local study site."""
    host = (urlparse(route.request.url).hostname or "").lower()
    ai_hosts = (
        "generativelanguage.googleapis.com",
        "firebase.googleapis.com",
        "firebaseapp.com",
        "firebasedatabase.app",
        "firebaseio.com",
    )
    if host in ai_hosts or host.endswith(".firebaseio.com") or (
        host == "www.gstatic.com" and "/firebasejs/" in route.request.url
    ):
        route.abort()
    else:
        route.continue_()


def check(browser, grade, slug, viewport):
    context = browser.new_context(viewport=viewport)
    context.route("**/*", block_ai_transport)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda error: errors.append(str(error)))
    prefix = f"{BASE}/kien-thuc/{slug}/"

    try:
        # 1. Core teaching and an intentionally wrong Micro answer.
        workspace = read_json(f"assets/data/curriculum/topic{slug[:2]}-learning-workspace.json")
        card = workspace["cards"][0]
        micro = read_json(workspace["micro_practice_bank"])
        questions = {q["id"]: q for q in micro["questions"]}
        first = questions[card["micro_practice"][0]]
        response = page.goto(prefix + "core/", wait_until="domcontentloaded")
        assert response and response.status == 200
        page.locator(f'.topic-core-card[data-card-id="{card["id"]}"] .topic-core-teach-start').click()
        dialog = page.locator("dialog.topic-core-dialog[open]")
        assert dialog.is_visible(), f"G{grade}: Core teaching dialog not shown"
        assert dialog.locator(".topic-core-teaching-row").count() > 0, f"G{grade}: no teaching explanation"
        dialog.locator('.topic-core-modal-mode[data-mode="practice"]').click()
        options = dialog.locator(".topic-micro-options .topic-micro-option")
        assert options.count() == len(first["options"]), f"G{grade}: unexpected first Micro item"
        options.nth(wrong_index(first)).click()
        feedback = dialog.locator(".topic-micro-feedback.is-wrong")
        assert feedback.is_visible(), f"G{grade}: Micro did not flag wrong answer"
        explanation = feedback.locator(".topic-micro-explanation").inner_text().strip()
        assert len(explanation) >= 12, f"G{grade}: Micro explanation missing/thin in DOM"
        feedback.locator(".topic-micro-review").click()
        tutor = dialog.locator(".topic-micro-tutor")
        assert tutor.is_visible() and tutor.inner_text().strip(), f"G{grade}: no non-AI Micro review"
        dialog.locator(".topic-core-dialog__close").click()

        # 2. Practice answer chosen by original index, never random guessing.
        response = page.goto(prefix + "bai-tap/", wait_until="domcontentloaded")
        assert response and response.status == 200
        root = page.locator("[data-practice-bank-v2]")
        root.locator(".practice-option").first.wait_for()
        first_id = root.get_attribute("data-session-question-ids").split(",")[0]
        question = load_bank(slug)[first_id]
        wrong = wrong_index(question)
        root.locator(f'.practice-option[data-original-index="{wrong}"]').click()
        practice_feedback = root.locator(".practice-feedback.is-wrong")
        assert practice_feedback.is_visible(), f"G{grade}: wrong Practice feedback absent"
        body = practice_feedback.locator(".practice-explanation").inner_text().strip()
        assert len(body) >= 12, f"G{grade}: Practice explanation absent/thin in DOM"
        assert root.locator(".practice-save-warning").count() == 0
        root.locator(".practice-actions button").filter(has_text="Xem hướng dẫn / lời giải").click()
        root.locator(".practice-help-choice").filter(has_text="Xem lời giải hiện có").click()
        pane = root.locator(".practice-tutor")
        assert pane.is_visible(), f"G{grade}: authored help pane unavailable"
        assert pane.locator(".practice-help-answer,.practice-help-steps").count() > 0, (
            f"G{grade}: no authored non-AI solution available"
        )
        practice_raw = get(page, PRACTICE_KEY)
        assert practice_raw and json.loads(practice_raw).get("questions"), f"G{grade}: Practice not saved"
        assert get(page, READINESS_KEY) is None, f"G{grade}: Readiness unexpectedly written by Practice"

        # 3. Readiness stays private until Submit and never alters Practice.
        assessment = read_json(f"assets/data/assessment/{slug}-core-v1.json")
        first_assessment = assessment["items"][0]
        response = page.goto(prefix + "tu-kiem-tra/", wait_until="domcontentloaded")
        assert response and response.status == 200
        check_root = page.locator("[data-readiness-check-v1]")
        check_root.locator(".readiness-option input[type=radio]").first.wait_for()
        assert not check_root.locator(".readiness-result").is_visible()
        assert get(page, READINESS_KEY) is None
        value = str(wrong_index(first_assessment))
        check_root.locator(f'.readiness-option input[value="{value}"]').check()
        assert get(page, READINESS_KEY) is None, f"G{grade}: Readiness leaked pre-submit save"
        page.once("dialog", lambda alert: alert.accept())
        check_root.get_by_role("button", name="Nộp bài", exact=True).click()
        result = check_root.locator(".readiness-result")
        assert result.is_visible(), f"G{grade}: missing post-submit result"
        reviews = result.locator(".readiness-review-item")
        assert reviews.count() == len(assessment["items"]), f"G{grade}: incomplete post-submit review"
        reviews.first.locator("summary").click()
        assert "Giải thích:" in reviews.first.inner_text(), f"G{grade}: review explanation missing"
        assert len(reviews.first.inner_text().split("Giải thích:", 1)[-1].strip()) >= 12, (
            f"G{grade}: post-submit Readiness explanation absent/thin in DOM"
        )
        redo = result.locator(".readiness-action-link").filter(has_text="Luyện lại").first
        assert redo.count() == 1, f"G{grade}: no actionable remediation link after wrong answer"
        href = redo.get_attribute("href")
        assert "/bai-tap/?focus=" in href and "mode=remediation" in href, href
        readiness_raw = get(page, READINESS_KEY)
        assert readiness_raw and json.loads(readiness_raw).get("assessments")
        assert get(page, PRACTICE_KEY) == practice_raw, f"G{grade}: assessment mutated Practice"

        # Return path must work without an AI response and without a reset.
        redo.click()
        page.wait_for_url("**/bai-tap/?focus=**", timeout=15000)
        page.locator("[data-practice-bank-v2] .practice-option").first.wait_for()
        assert get(page, PRACTICE_KEY) == practice_raw
        assert get(page, READINESS_KEY) == readiness_raw
        assert not errors, f"G{grade}: JavaScript page errors: {errors}"
        print(f"PASS A2 technical G{grade} {viewport['width']}px: Core wrong-feedback, Practice wrong-feedback, authored help, post-submit Readiness, remediation, AI blocked")
    finally:
        context.close()


with sync_playwright() as playwright:
    browser = playwright.chromium.launch(
        executable_path=CHROME, headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"]
    )
    try:
        for viewport in ({"width": 1365, "height": 900},
                         {"width": 390, "height": 844}):
            for grade, slug in CASES:
                check(browser, grade, slug, viewport)
    finally:
        browser.close()

print("OPEN: authentic learner comprehension (A2), Grade 7/9 cross-checks, mathematical semantic review, and total device-offline operation are NOT covered.")
