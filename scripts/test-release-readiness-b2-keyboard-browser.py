"""B2 keyboard activation + continuity smoke for Math family V1.

Synthetic, isolated Chromium contexts: no accounts, real learner state or live
browser profiles. Focused keyboard activation is checked; this is NOT an
assistive-technology or authentic student usability certification.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Google Chrome/Chromium required")
PRACTICE = "toan-thcs-practice-v1"
READINESS = "toan-thcs-assessment-v1"


def get(page, key):
    return page.evaluate("(key) => localStorage.getItem(key)", key)


def focused(page, selector):
    return page.locator(selector).first.evaluate("(el) => document.activeElement === el")


def check(browser, viewport):
    context = browser.new_context(viewport=viewport)
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    try:
        # Practice buttons must be operable from the keyboard, with feedback
        # and deterministic persistence in this disposable browser.
        path = "/kien-thuc/02-so-va-phep-tinh/bai-tap/"
        response = page.goto(BASE + path, wait_until="domcontentloaded")
        assert response and response.status == 200
        option = page.locator("[data-practice-bank-v2] .practice-option").first
        option.wait_for(timeout=30000)
        assert get(page, PRACTICE) is None, "Nonempty Practice history in fresh test profile"
        option.focus()
        assert focused(page, "[data-practice-bank-v2] .practice-option")
        page.keyboard.press("Enter")
        feedback = page.locator("[data-practice-bank-v2] .practice-feedback").first
        assert feedback.is_visible(), "Keyboard answer gave no Practice feedback"
        assert page.locator("[data-practice-bank-v2] .practice-save-warning").count() == 0
        assert page.locator("[data-practice-bank-v2] .practice-actions button").count() > 0
        practice_raw = get(page, PRACTICE)
        assert practice_raw is not None and json.loads(practice_raw).get("questions")
        assert not errors, errors

        # Readiness must not store an attempt on load or selecting a radio.
        path = "/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/"
        response = page.goto(BASE + path, wait_until="domcontentloaded")
        assert response and response.status == 200
        option = page.locator("[data-readiness-check-v1] .readiness-option input[type=radio]").first
        option.wait_for(timeout=30000)
        assert get(page, READINESS) is None, "Readiness history mutated before answering"
        option.focus()
        assert focused(page, "[data-readiness-check-v1] .readiness-option input[type=radio]")
        page.keyboard.press("Space")
        assert option.is_checked(), "Space did not select the Readiness answer"
        assert get(page, READINESS) is None, "Unsubmitted Readiness answer must not be saved"

        page.once("dialog", lambda dialog: dialog.accept())
        submit = page.get_by_role("button", name="Nộp bài", exact=True)
        submit.focus()
        assert submit.evaluate("(el) => document.activeElement === el")
        page.keyboard.press("Enter")
        result = page.locator("[data-readiness-check-v1] .readiness-result")
        assert result.is_visible(), "Keyboard submission did not show Readiness result"
        assert page.locator(".readiness-save-warning").count() == 0
        readiness_raw = get(page, READINESS)
        assert readiness_raw and json.loads(readiness_raw).get("assessments")
        assert get(page, PRACTICE) == practice_raw, "Readiness submission regraded Practice history"
        assert not errors, errors

        # Read-only dashboard links must remain semantic and keyboard-operable.
        response = page.goto(BASE + "/tien-do-hoc-tap/", wait_until="domcontentloaded")
        assert response and response.status == 200
        page.get_by_role("heading", name="Tiếp tục học", exact=True).wait_for(timeout=30000)
        link = page.get_by_role("link", name="Học theo lớp 6–9", exact=True)
        assert link.count() == 1
        link.focus()
        assert link.evaluate("(el) => document.activeElement === el")
        page.keyboard.press("Enter")
        page.wait_for_url("**/hoc-theo-lop/", timeout=15000)
        assert get(page, PRACTICE) == practice_raw
        assert get(page, READINESS) == readiness_raw
        assert not errors, errors

        width = page.evaluate("document.documentElement.scrollWidth - document.documentElement.clientWidth")
        assert width <= 2, "Page has horizontal overflow: " + str(width)
        print("PASS B2 keyboard + separated persistence:", viewport["width"], "px")
    finally:
        context.close()


with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    try:
        for viewport in ({"width": 1365, "height": 900},
                         {"width": 390, "height": 844}):
            check(browser, viewport)
    finally:
        browser.close()

print("BOUNDARY: this proves deterministic keyboard activation on Chromium only, not VoiceOver/TalkBack, 200% zoom or real student comprehension.")
