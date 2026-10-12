"""Reproduce B1 R2 current save-failure paths in disposable Chromium profiles.

BASELINE mode intentionally asserts present defects rather than claiming safe UX.
Never loads real learner data; run against a locally built static site only.
"""
import json
import shutil
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:8765"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Google Chrome / Chromium is required")

PRACTICE = "toan-thcs-practice-v1"
READINESS = "toan-thcs-assessment-v1"
VALID_PRACTICE = json.dumps({"questions": {}, "tags": {}, "observed_signals": []}, separators=(",", ":"))
VALID_READINESS = json.dumps({"assessments": {}}, separators=(",", ":"))
BAD_VALUE = "{B1-R2-invalid-json"

def begin(browser, route, key, raw):
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.goto(BASE + route, wait_until="domcontentloaded")
    page.evaluate("(kv) => localStorage.setItem(kv[0],kv[1])", [key, raw])
    page.reload(wait_until="domcontentloaded")
    return context, page, errors

def deny_write(page, key):
    page.evaluate("""key => {
      const native = Storage.prototype.setItem;
      Storage.prototype.setItem = function(k, v) {
        if (k === key) throw new DOMException('B1 R2 synthetic storage denial', 'QuotaExceededError');
        return native.call(this, k, v);
      };
    }""", key)

def check_practice(browser, denied):
    original = VALID_PRACTICE if denied else BAD_VALUE
    context, page, errors = begin(browser, "/kien-thuc/02-so-va-phep-tinh/bai-tap/", PRACTICE, original)
    try:
        option = page.locator("[data-practice-bank-v2] .practice-option").first
        option.wait_for(timeout=30000)
        if denied:
            deny_write(page, PRACTICE)
        errors.clear()
        option.click()
        raw_after = page.evaluate("(k)=>localStorage.getItem(k)", PRACTICE)
        feedback = page.locator("[data-practice-bank-v2] .practice-feedback")
        if denied:
            assert raw_after == original, "Denied storage write unexpectedly mutated Practice key"
            assert errors and any("B1 R2 synthetic storage denial" in error for error in errors), errors
            assert feedback.is_hidden(), "Baseline changed: Practice now provides feedback on a denied write"
            assert not page.get_by_role("button", name="Câu tiếp theo").count(), "Baseline changed: continuation appears"
            print("REPRODUCED B1-R2-01: Practice storage failure aborts feedback and next controls; prior bytes preserved.")
        else:
            assert raw_after != BAD_VALUE, "Baseline changed: invalid Practice raw bytes no longer overwritten"
            assert json.loads(raw_after).get("questions"), "Expected newly saved Practice item"
            print("REPRODUCED B1-R2-03 Practice: malformed previous store overwritten on next answer.")
    finally:
        context.close()

def check_readiness(browser, denied):
    original = VALID_READINESS if denied else BAD_VALUE
    context, page, errors = begin(browser, "/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/", READINESS, original)
    try:
        page.locator("[data-readiness-check-v1] .readiness-card").wait_for(timeout=30000)
        page.locator("[data-readiness-check-v1] .readiness-option input[type=radio]").first.check()
        if denied:
            deny_write(page, READINESS)
        errors.clear()
        page.once("dialog", lambda dialog: dialog.accept())
        page.get_by_role("button", name="Nộp bài", exact=True).click()
        after = page.evaluate("(k)=>localStorage.getItem(k)", READINESS)
        result_visible = page.locator("[data-readiness-check-v1] .readiness-result").is_visible()
        if denied:
            assert after == original, "Denied storage write unexpectedly mutated Readiness key"
            assert errors and any("B1 R2 synthetic storage denial" in error for error in errors), errors
            assert not result_visible, "Baseline changed: Readiness rendered results despite storage denial"
            print("REPRODUCED B1-R2-02: Readiness storage failure aborts result after submission; prior bytes preserved.")
        else:
            assert after != BAD_VALUE, "Baseline changed: corrupt Readiness raw bytes no longer overwritten"
            assert json.loads(after).get("assessments"), "Expected new Readiness assessment saved"
            assert result_visible, "Ordinary Readiness result did not render"
            print("REPRODUCED B1-R2-03 Readiness: malformed previous store overwritten on submission.")
    finally:
        context.close()

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
    try:
        check_practice(browser, denied=True)
        check_readiness(browser, denied=True)
        check_practice(browser, denied=False)
        check_readiness(browser, denied=False)
    finally:
        browser.close()

print("PASS: isolated BASELINE reproducer confirms 4 source-predicted behaviors. THIS IS A CONFIRMED DEFECT BASELINE, NOT A SAFE-UX PASS.")
print("No production learner data were read, reset, or altered.")
