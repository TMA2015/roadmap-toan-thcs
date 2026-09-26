"""End-to-end browser smoke test for the opt-in one-skill pilot."""
import json
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8766"
cfg = json.loads((ROOT / "docs/assets/data/curriculum/skill-assessment-pilot-config-v1.json").read_text(encoding="utf-8"))
micro = json.loads((ROOT / "docs/assets/data/curriculum/skill-diagnostic-micro-pilot-v1.json").read_text(encoding="utf-8"))
questions = []
for row in cfg["sample_questions"]:
    bank = json.loads((ROOT / "docs/assets/data/practice" / row["source_file"]).read_text(encoding="utf-8"))
    q = next(q for q in bank["questions"] if q["id"] == row["question_id"])
    questions.append((q["id"], q["answer"], row["assessed_skill"], row["secondary_tag"]))
for q in micro["items"]:
    questions.append((q["id"], q["answer_index"], q["assessed_skill"], None))

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 390, "height": 844})
    page.goto(BASE + "/", wait_until="domcontentloaded")
    sentinel = '{"questions":{"LEGACY_Q":{"attempted":7,"correct":5}},"tags":{"legacy":{"attempted":7,"correct":5}}}'
    page.evaluate("(value) => localStorage.setItem('toan-thcs-practice-v1', value)", sentinel)
    page.goto(BASE + "/huong-dan/thu-nghiem-danh-gia-ky-nang/", wait_until="domcontentloaded")
    page.locator(".skill-pilot-question").wait_for(timeout=30000)
    assert page.locator(".skill-pilot-option").count() == 4
    assert len(questions) == 14

    wrong_indices = {0, 2, 7, 8, 13}
    for index, (question_id, answer, primary, supporting) in enumerate(questions):
        assert page.locator(".skill-pilot-heading").inner_text().startswith("Kỹ năng đánh giá")
        picked = (answer + 1) % 4 if index in wrong_indices else answer
        page.locator(f'.skill-pilot-option[data-original-index="{picked}"]').click()
        page.locator(".skill-pilot-feedback.is-wrong" if index in wrong_indices else ".skill-pilot-feedback.is-correct").wait_for()
        state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
        assert len(state["events"]) == index + 1
        event = state["events"][-1]
        assert event["question_id"] == question_id, (index, event)
        assert event["assessed_skill"] == primary
        assert event["correct"] == (index not in wrong_indices) and event["independent"] is True
        assert event["supporting_tags"] == ([supporting] if supporting else [])
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == sentinel
        page.locator(".skill-pilot-primary").click()

    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả lượt vừa làm"
    assert "Hoàn thành: 9/14" in page.locator(".skill-pilot-progress").inner_text()
    assert page.locator(".skill-pilot-review-item").count() == 5
    assert page.locator(".skill-pilot-history").count() == 1
    assert "14 lượt" in page.locator(".skill-pilot-history summary").inner_text()
    page.locator(".skill-pilot-review-item").first.locator("summary").click()
    assert page.locator(".skill-pilot-lesson-link").first.get_attribute("href").endswith("/kien-thuc/04-bieu-thuc-dai-so/")
    before = page.evaluate("window.RoadmapSkillAssessmentPilot.firstAttemptSummary(JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')))")
    assert sum(row["distinct"] for row in before.values()) == 14
    assert sum(row["first_correct"] for row in before.values()) == 9
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == sentinel

    page.get_by_role("button", name="Luyện lại 5 câu vừa sai").click()
    assert "5 câu vừa sai" in page.locator(".skill-pilot-intro").inner_text()
    assert "Câu 1/5" in page.locator(".skill-pilot-progress").inner_text()
    for index, question in enumerate(questions):
        if index not in wrong_indices:
            continue
        question_id, answer, primary, supporting = question
        page.locator(f'.skill-pilot-option[data-original-index="{answer}"]').click()
        page.locator(".skill-pilot-feedback.is-correct").wait_for()
        state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
        assert state["events"][-1]["question_id"] == question_id
        assert state["events"][-1]["assessed_skill"] == primary
        page.locator(".skill-pilot-primary").click()

    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả lượt luyện lại"
    assert "Hoàn thành: 5/5" in page.locator(".skill-pilot-progress").inner_text()
    assert page.locator(".skill-pilot-review-item").count() == 0
    after = page.evaluate("window.RoadmapSkillAssessmentPilot.firstAttemptSummary(JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')))")
    assert set(before) == set(after)
    assert all(before[k]["distinct"] == after[k]["distinct"] and before[k]["first_correct"] == after[k]["first_correct"] for k in before)
    assert sum(row["distinct"] for row in after.values()) == 14
    assert sum(row["first_correct"] for row in after.values()) == 9
    assert sum(row["total_attempts"] for row in after.values()) == 19
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == sentinel
    print("PASS browser: 9/14 session, five review cards, retry 5/5, 14 distinct first exposures, v1 unchanged, mobile viewport")
    browser.close()
