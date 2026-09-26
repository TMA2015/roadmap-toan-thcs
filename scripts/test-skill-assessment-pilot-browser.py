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

    for index, (question_id, answer, primary, supporting) in enumerate(questions):
        assert page.locator(".skill-pilot-heading").inner_text().startswith("Kỹ năng đánh giá")
        page.locator(f'.skill-pilot-option[data-original-index="{answer}"]').click()
        page.locator(".skill-pilot-feedback.is-correct").wait_for()
        state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
        assert len(state["events"]) == index + 1
        event = state["events"][-1]
        assert event["question_id"] == question_id, (index, event)
        assert event["assessed_skill"] == primary
        assert event["correct"] is True and event["independent"] is True
        assert event["supporting_tags"] == ([supporting] if supporting else [])
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == sentinel
        page.locator(".skill-pilot-primary").click()

    assert page.locator(".skill-pilot-heading").inner_text() == "Kết quả thử nghiệm"
    state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
    assert len(state["events"]) == 14
    counts = page.evaluate("window.RoadmapSkillAssessmentPilot.skillSummary(JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')))")
    assert sum(record["attempted"] for record in counts.values()) == 14
    for excluded in ("tinh-phan-phoi", "bai-toan-thuc-te", "phan-tich-hdt", "lien-he-he-phuong-trinh"):
        assert excluded not in counts
    assert counts["bo-ngoac-dau"]["attempted"] == 2
    assert counts["khai-phuong-tich"]["attempted"] == 2
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == sentinel
    print("PASS browser: 14 questions, correct option after shuffle, single assessed skill, v1 unchanged, mobile viewport")
    browser.close()
