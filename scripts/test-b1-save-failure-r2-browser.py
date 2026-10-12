"""Verify B1 R2 saved/unsaved feedback in disposable Chromium profiles.

FIX mode asserts persisted-data safety and feedback despite storage exceptions.
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
            assert not errors, errors
            assert not feedback.is_hidden(), "Practice must still show mathematical feedback on failed save"
            assert page.locator(".practice-save-warning[role=alert]").is_visible(), "Missing unsaved warning"
            assert "chưa được" in page.locator(".practice-save-warning").inner_text().lower()
            assert page.locator(".practice-actions .practice-btn").count() > 0, "No next action"
            assert not errors, errors
            print("PASS B1-R2-01: Practice renders feedback, warns UNSAVED and preserves prior raw bytes.")
        else:
            assert raw_after == BAD_VALUE, "Malformed old Practice JSON must never be overwritten"
            assert page.locator(".practice-save-warning[role=alert]").is_visible()
            assert "không ghi đè" in page.locator(".practice-save-warning").inner_text().lower()
            assert not errors, errors
            print("PASS B1-R2-03 Practice: prior malformed bytes preserved, no false save claim.")
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
            assert result_visible, "Readiness must render result despite denied save"
            assert page.locator(".readiness-save-warning[role=alert]").is_visible(), "Missing unsaved warning"
            assert not errors, errors
            print("PASS B1-R2-02: Readiness renders result, warns UNSAVED and preserves prior raw bytes.")
        else:
            assert after == BAD_VALUE, "Malformed old Readiness JSON must never be overwritten"
            assert result_visible, "Result should still display with unsaved warning"
            assert page.locator(".readiness-save-warning[role=alert]").is_visible()
            assert "không ghi đè" in page.locator(".readiness-save-warning").inner_text().lower()
            assert not errors, errors
            print("PASS B1-R2-03 Readiness: prior malformed bytes preserved, no false save claim.")
    finally:
        context.close()

def check_positive_control(browser, readiness):
    key = READINESS if readiness else PRACTICE
    raw = VALID_READINESS if readiness else VALID_PRACTICE
    route = "/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/" if readiness else "/kien-thuc/02-so-va-phep-tinh/bai-tap/"
    context, page, errors = begin(browser, route, key, raw)
    try:
        if readiness:
            page.locator("[data-readiness-check-v1] .readiness-option input[type=radio]").first.check()
            page.once("dialog", lambda dialog: dialog.accept())
            page.get_by_role("button", name="Nộp bài", exact=True).click()
            assert page.locator("[data-readiness-check-v1] .readiness-result").is_visible()
            assert page.locator(".readiness-save-warning").count() == 0
        else:
            page.locator("[data-practice-bank-v2] .practice-option").first.click()
            assert not page.locator("[data-practice-bank-v2] .practice-feedback").is_hidden()
            assert page.locator(".practice-save-warning").count() == 0
        after = page.evaluate("(k)=>localStorage.getItem(k)", key)
        assert after != raw, "Valid new test answer should be saved normally"
        assert json.loads(after), "Saved JSON should be parseable"
        assert not errors, errors
        print("PASS positive-control: "+("Readiness" if readiness else "Practice")+" normally saves without warning.")
    finally:
        context.close()

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True, args=["--no-sandbox", "--disable-dev-shm-usage"])
    try:
        check_practice(browser, denied=True)
        check_readiness(browser, denied=True)
        check_practice(browser, denied=False)
        check_readiness(browser, denied=False)
        check_positive_control(browser, readiness=False)
        check_positive_control(browser, readiness=True)
    finally:
        browser.close()

print("PASS: four isolated B1 R2 safety tests verify failed-save feedback and non-destructive fallback.")
print("No production learner data were read, reset, or altered.")
