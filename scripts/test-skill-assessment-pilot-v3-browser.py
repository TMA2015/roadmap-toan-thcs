"""Mobile Chromium QA: Beta v3 navigation and conservative independent evidence flags."""
import json
import pathlib
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8766"
cfg = json.loads((ROOT/"docs/assets/data/curriculum/skill-assessment-pilot-config-v1.json").read_text(encoding="utf-8"))
micro = json.loads((ROOT/"docs/assets/data/curriculum/skill-diagnostic-micro-pilot-v1.json").read_text(encoding="utf-8"))
items=[]
for row in cfg["sample_questions"]:
    questions = json.loads((ROOT/"docs/assets/data/practice"/row["source_file"]).read_text(encoding="utf-8"))["questions"]
    q = next(q for q in questions if q["id"]==row["question_id"])
    items.append((q["id"],q["answer"],row["assessed_skill"]))
for q in micro["items"]:
    items.append((q["id"],q["answer_index"],q["assessed_skill"]))
assert len(items)==14
wrong={0,2,7,8,13}

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width":390,"height":844})
    errors=[]
    page.on("pageerror",lambda err:errors.append(str(err)))
    page.goto(BASE+"/",wait_until="domcontentloaded")
    old_practice='{"questions":{"LEGACY_Q":{"attempted":7,"correct":5}},"tags":{"legacy":{"attempted":7,"correct":5}}}'
    old_event={
        "schema":"one-skill-assessment-event-v2","question_id":items[0][0],
        "assessed_skill":items[0][2],"correct":True,"independent":True,
        "question_kind":"bank_sample","supporting_tags":[],"context":None,
        "attempted_at":"2026-09-26T00:00:00Z"
    }
    page.evaluate("([a,b])=>{localStorage.setItem('toan-thcs-practice-v1',a);localStorage.setItem('toan-thcs-assessment-v2',JSON.stringify({schema:'one-skill-assessment-events-v2',events:[b]}))}",[old_practice,old_event])
    page.goto(BASE+"/huong-dan/thu-nghiem-danh-gia-ky-nang-v3/",wait_until="domcontentloaded")
    page.locator("[data-skill-pilot-version='learner-review-v3-20260927']").wait_for(timeout=30000)
    assert "Beta v3" in page.locator(".skill-pilot-intro").inner_text()
    assert page.evaluate("typeof window.RoadmapSkillAssessmentPilot")== "object"
    assert page.evaluate("typeof window.SelfLearningSkillAssessmentV3")== "object"
    assert page.locator(".skill-pilot-nav-back").is_disabled()
    assert page.locator(".skill-pilot-nav-next").is_disabled()
    option_order=page.locator(".skill-pilot-option").evaluate_all("(xs)=>xs.map(x=>x.dataset.originalIndex)")
    page.locator('.skill-pilot-option[data-original-index="1"]').click()
    assert page.locator(".skill-pilot-feedback.is-wrong").count()==1
    state=page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
    assert len(state["events"])==2
    assert state["events"][0]==old_event
    assert state["events"][1]["independent"] is False
    assert state["events"][1]["assisted"] is True
    assert state["events"][1]["attempt_kind"]=="repeat_seen_question"
    assert state["events"][1]["evidence_policy"]=="formative_v3"
    page.locator(".skill-pilot-nav-next").click()
    assert items[1][0] in page.locator(".skill-pilot-meta").inner_text()
    assert page.locator(".skill-pilot-nav-next").is_disabled()
    page.locator(".skill-pilot-nav-back").click()
    assert page.locator(".skill-pilot-option").evaluate_all("(xs)=>xs.map(x=>x.dataset.originalIndex)")==option_order
    assert page.locator(".skill-pilot-option:disabled").count()==4
    assert len(page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')).events"))==2
    page.locator(".skill-pilot-nav-next").click()
    for i,(qid,answer,skill) in enumerate(items[1:],start=1):
        assert qid in page.locator(".skill-pilot-meta").inner_text()
        picked=(answer+1)%4 if i in wrong else answer
        page.locator(f'.skill-pilot-option[data-original-index="{picked}"]').click()
        state=page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2'))")
        assert len(state["events"])==i+2
        event=state["events"][-1]
        assert event["question_id"]==qid and event["assessed_skill"]==skill
        assert event["independent"] is True and event["assisted"] is False
        assert event["attempt_kind"]=="first_unseen" and event["evidence_policy"]=="formative_v3"
        assert event["source_file"]
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==old_practice
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text()=="Kết quả lượt đầu"
    assert "Lượt đầu: 9/14" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert page.locator(".skill-pilot-review-item").count()==5
    before=page.evaluate("window.SelfLearningSkillAssessmentV3.verifiedV3Summary(JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')))")
    assert sum(x["distinct_first"] for x in before.values())==13
    assert sum(x["correct_first"] for x in before.values())==9
    page.get_by_role("button",name="Luyện lại 5 câu vừa sai").click()
    assert "không phải bằng chứng độc lập" in page.locator(".skill-pilot-intro").inner_text()
    for i,(qid,answer,skill) in enumerate(items):
        if i not in wrong:continue
        assert qid in page.locator(".skill-pilot-meta").inner_text()
        page.locator(f'.skill-pilot-option[data-original-index="{answer}"]').click()
        event=page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')).events.at(-1)")
        assert event["independent"] is False and event["assisted"] is True
        assert event["attempt_kind"]=="retry_after_feedback"
        page.locator(".skill-pilot-nav-next").click()
    assert page.locator(".skill-pilot-heading").inner_text()=="Kết quả lượt luyện lại"
    assert "Lượt đầu: 9/14" in page.locator(".skill-pilot-summary-lead").inner_text()
    assert "Lượt này: 5/5" in page.locator(".skill-pilot-summary-lead").inner_text()
    after=page.evaluate("window.SelfLearningSkillAssessmentV3.verifiedV3Summary(JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')))")
    assert after==before
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")==old_practice
    assert page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')).events[0]")==old_event
    page.get_by_role("button",name="Ôn lại toàn bộ 14 câu").click()
    page.locator('.skill-pilot-option[data-original-index="0"]').click()
    event=page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-assessment-v2')).events.at(-1)")
    assert event["independent"] is False and event["attempt_kind"]=="retry_after_feedback"
    assert not errors,errors
    print("PASS mobile Beta v3: immutable prev/next, 9/14 original, 5/5 retry, history preserved and zero double independent credit")
    browser.close()
