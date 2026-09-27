"""Mobile browser smoke QA for the unscored CĐ06 complete-factorization preview."""
import json
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8766"
cfg = json.loads((ROOT / "docs/assets/data/curriculum/complete-factorization-preview-v1.json").read_text(encoding="utf-8"))
bank = json.loads((ROOT / "docs/assets/data/practice" / cfg["source_file"]).read_text(encoding="utf-8"))
by_id = {q["id"]: q for q in bank["questions"]}
source = [by_id[qid] for qid in cfg["question_ids"]]
wrong_indices = {1, 3, 6}

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    page.goto(BASE + "/", wait_until="domcontentloaded")
    legacy = '{"questions":{"LEGACY_Q":{"attempted":4,"correct":2}},"tags":{"legacy":{"attempted":4,"correct":2}}}'
    beta = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD_Q","assessed_skill":"old","correct":true}]}'
    page.evaluate("([legacy,beta]) => {localStorage.setItem('toan-thcs-practice-v1', legacy);localStorage.setItem('toan-thcs-assessment-v2', beta);}", [legacy, beta])
    before = page.evaluate("JSON.stringify({...localStorage})")
    page.goto(BASE + "/huong-dan/thu-nghiem-phan-tich-hoan-toan/", wait_until="domcontentloaded")
    page.locator("[data-complete-factor-build='complete-factor-preview-v1-20260927']").wait_for(timeout=30000)
    assert "không lưu" in page.locator(".skill-pilot-intro").inner_text()
    assert page.locator(".skill-pilot-option").count() == 4
    for i, q in enumerate(source):
        assert q["id"] in page.locator(".skill-pilot-meta").inner_text()
        answer = (q["answer"] + 1) % 4 if i in wrong_indices else q["answer"]
        page.locator(f'.skill-pilot-option[data-original-index="{answer}"]').click()
        page.locator(".skill-pilot-feedback.is-wrong" if i in wrong_indices else ".skill-pilot-feedback.is-correct").wait_for()
        assert page.evaluate("JSON.stringify({...localStorage})") == before
        page.locator(".skill-pilot-primary").click()
    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả lượt vừa làm"
    assert "Hoàn thành: 5/8" in page.locator(".skill-pilot-progress").inner_text()
    assert page.locator(".skill-pilot-review-item").count() == 3
    page.locator(".skill-pilot-review-item").first.locator("summary").click()
    assert page.locator(".skill-pilot-review-answer").first.count() == 1
    assert page.locator(".skill-pilot-lesson-link").get_attribute("href").endswith("/kien-thuc/06-phan-tich-da-thuc/")
    assert page.evaluate("JSON.stringify({...localStorage})") == before
    page.get_by_role("button", name="Luyện lại 3 câu vừa sai").click()
    assert "ôn tập" in page.locator(".skill-pilot-intro").inner_text()
    for i, q in enumerate(source):
        if i not in wrong_indices:
            continue
        page.locator(f'.skill-pilot-option[data-original-index="{q["answer"]}"]').click()
        page.locator(".skill-pilot-feedback.is-correct").wait_for()
        page.locator(".skill-pilot-primary").click()
    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả lượt ôn lại"
    assert "Hoàn thành: 3/3" in page.locator(".skill-pilot-progress").inner_text()
    assert page.locator(".skill-pilot-review-item").count() == 0
    assert page.evaluate("JSON.stringify({...localStorage})") == before
    assert not errors, errors
    print("PASS mobile CĐ06 preview: 5/8, three wrong review cards, retry 3/3, no storage writes/page errors")
    browser.close()
