"""Mobile Chromium test: immutable prev/next, same-item retry, different-ID assisted transfer."""
import json
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8766"
cfg = json.loads((ROOT / "docs/assets/data/curriculum/complete-factorization-preview-v2.json").read_text(encoding="utf-8"))
by_id = {}
for filename in cfg["source_files"]:
    bank = json.loads((ROOT / "docs/assets/data/practice" / filename).read_text(encoding="utf-8"))
    by_id.update({q["id"]: q for q in bank["questions"]})
initial = [by_id[id] for id in cfg["initial_question_ids"]]
wrong = {0, 2, 6}

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width":390,"height":844})
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    page.goto(BASE + "/", wait_until="domcontentloaded")
    old_store = '{"questions":{"LEGACY_Q":{"attempted":4,"correct":2}},"tags":{"old":{"attempted":4,"correct":2}}}'
    beta_store = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD_Q","assessed_skill":"old","correct":true,"independent":true}]}'
    page.evaluate("([a,b])=>{localStorage.setItem('toan-thcs-practice-v1',a);localStorage.setItem('toan-thcs-assessment-v2',b)}", [old_store,beta_store])
    before = page.evaluate("JSON.stringify({...localStorage})")
    page.goto(BASE + "/huong-dan/thu-nghiem-phan-tich-hoan-toan-v2/",wait_until="domcontentloaded")
    page.locator("[data-complete-factor-build='complete-factor-preview-v2-20260927']").wait_for(timeout=30000)
    assert "Beta CĐ06 v2" in page.locator(".skill-pilot-intro").inner_text()
    assert page.locator(".skill-pilot-nav-back").is_disabled()
    assert page.locator(".skill-pilot-nav-next").is_disabled()
    first_order = page.locator(".skill-pilot-option").evaluate_all("(xs)=>xs.map(x=>x.dataset.originalIndex)")
    page.locator('.skill-pilot-option[data-original-index="1"]').click()
    assert page.locator(".skill-pilot-feedback.is-wrong").count() == 1
    assert page.locator(".skill-pilot-option:disabled").count() == 4
    assert page.locator(".skill-pilot-nav-next").is_enabled()
    page.locator(".skill-pilot-nav-next").click()
    assert initial[1]["id"] in page.locator(".skill-pilot-meta").inner_text()
    assert page.locator(".skill-pilot-nav-next").is_disabled()
    page.locator(".skill-pilot-nav-back").click()
    assert initial[0]["id"] in page.locator(".skill-pilot-meta").inner_text()
    assert "Đã nộp" in page.locator(".skill-pilot-meta").inner_text()
    assert page.locator(".skill-pilot-option").evaluate_all("(xs)=>xs.map(x=>x.dataset.originalIndex)") == first_order
    assert page.locator(".skill-pilot-option:disabled").count() == 4
    page.locator(".skill-pilot-nav-next").click()
    assert initial[1]["id"] in page.locator(".skill-pilot-meta").inner_text()
    assert "Đã nộp 1/8" in page.locator(".skill-pilot-progress").inner_text()

    for i, q in enumerate(initial[1:], start=1):
        assert q["id"] in page.locator(".skill-pilot-meta").inner_text()
        answer = (q["answer"]+1)%4 if i in wrong else q["answer"]
        page.locator(f'.skill-pilot-option[data-original-index="{answer}"]').click()
        page.locator(".skill-pilot-feedback.is-wrong" if i in wrong else ".skill-pilot-feedback.is-correct").wait_for()
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả lượt đầu"
    assert "Lượt đầu: 5/8" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert page.locator(".skill-pilot-review-item").count() == 3
    assert page.evaluate("JSON.stringify({...localStorage})") == before
    page.get_by_role("button",name="Luyện lại 3 câu cũ vừa sai").click()
    assert "không phải bằng chứng độc lập mới" in page.locator(".skill-pilot-intro").inner_text()
    for index in sorted(wrong):
        q = initial[index]
        assert q["id"] in page.locator(".skill-pilot-meta").inner_text()
        page.locator(f'.skill-pilot-option[data-original-index="{q["answer"]}"]').click()
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả ôn lại câu cũ"
    assert "Lượt đầu: 5/8" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "Lượt này: 3/3" in page.locator(".skill-pilot-summary-lead").inner_text()
    page.get_by_role("button",name="Luyện 3 câu tương tự mới (sau phản hồi)").click()
    assert "vận dụng có hỗ trợ" in page.locator(".skill-pilot-intro").inner_text()
    for index in sorted(wrong):
        expected_id=cfg["similar_question_by_initial_id"][initial[index]["id"]]
        assert expected_id in page.locator(".skill-pilot-meta").inner_text()
        assert expected_id not in cfg["initial_question_ids"]
        page.locator(f'.skill-pilot-option[data-original-index="{by_id[expected_id]["answer"]}"]').click()
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả câu tương tự"
    assert "Lượt đầu: 5/8" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "Lượt này: 3/3" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "vận dụng có hỗ trợ" in page.locator(".skill-pilot-warning").inner_text()
    assert page.evaluate("JSON.stringify({...localStorage})") == before
    assert not errors, errors
    print("PASS mobile CĐ06 v2: immutable nav, 5/8 original, 3/3 same-ID retry, 3/3 different-ID assisted transfer, no storage changes")
    browser.close()
