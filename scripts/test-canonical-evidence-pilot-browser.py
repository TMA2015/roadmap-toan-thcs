"""Desktop + mobile browser QA for Beta v4 canonical evidence isolation and de-dup."""
import json
import pathlib
import shutil
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8765"
PREVIEWS = ROOT / "previews"
PREVIEWS.mkdir(exist_ok=True)
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required for Beta v4 browser QA")

config = json.loads((ROOT / "docs/assets/data/curriculum/canonical-evidence-beta-v4-config-v1.json").read_text(encoding="utf-8"))
manifest = json.loads((ROOT / "docs/assets/data/curriculum/canonical-evidence-pilot-core07-r1.json").read_text(encoding="utf-8"))
reviewed = {row["question_id"]: row for row in manifest["pilot_scope"]["selected_items"]}
items = [reviewed[qid] for qid in config["selected_item_ids"]]
assert len(items) == 12

expected_reason = {
    "RAT07V1_009": ("first_unseen_unit", True, False),
    "RAT07V1_010": ("clone_family_repeat", False, False),
    "RAT07V1_017": ("first_unseen_unit", True, False),
    "RAT07V1_018": ("clone_family_repeat", False, False),
    "RAT07V1_047": ("first_unseen_unit", True, False),
    "RAT07V1_055": ("clone_family_repeat", False, False),
    "RAT07V1_048": ("first_unseen_unit", True, False),
    "RAT07V1_056": ("clone_family_repeat", False, False),
    "RAT07V1_049": ("first_unseen_unit", True, False),
    "RAT07V1_057": ("clone_family_repeat", False, False),
    "RAT07V1_115": ("first_unseen_unit", True, False),
    "RAT07V1_116": ("first_unseen_unit", True, False),
}

old_practice = '{"questions":{"LEGACY_Q":{"attempted":7,"correct":5}},"tags":{"legacy":{"attempted":7,"correct":5}}}'
old_readiness = '{"assessments":{"LEGACY_READY":{"attempts":[{"correct":3,"total":4}]}}}'
old_beta3 = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","assessed_skill":"old-skill","correct":true}]}'

with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True, args=["--no-sandbox","--disable-dev-shm-usage"])

    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([a,b,c]) => {
          localStorage.setItem('toan-thcs-practice-v1', a);
          localStorage.setItem('toan-thcs-assessment-v1', b);
          localStorage.setItem('toan-thcs-assessment-v2', c);
          localStorage.removeItem('toan-thcs-canonical-evidence-v1');
        }""",
        [old_practice, old_readiness, old_beta3],
    )
    page.goto(BASE + "/huong-dan/thu-nghiem-bang-chung-ky-nang-v4/", wait_until="domcontentloaded")
    page.locator("[data-canonical-evidence-build='canonical-evidence-beta-v4-copy1-20260930']").wait_for(timeout=30000)
    assert "Beta v4" in page.locator(".skill-pilot-intro").inner_text()
    assert page.evaluate("typeof window.SelfLearningCanonicalEvidenceV4") == "object"
    assert page.locator(".skill-pilot-option").count() == 4
    assert page.locator(".skill-pilot-nav-back").is_disabled()
    assert page.locator(".skill-pilot-nav-next").is_disabled()

    for index, item in enumerate(items):
        qid = item["question_id"]
        assert qid in page.locator(".skill-pilot-meta").inner_text()
        if item["supporting_skills"]:
            assert "không được tính thành một kỹ năng riêng" in page.locator(".skill-pilot-secondary").all_inner_texts()[0]
        picked = (item["answer_index"] + 1) % 4 if qid == "RAT07V1_009" else item["answer_index"]
        page.locator(f'.skill-pilot-option[data-original-index="{picked}"]').click()
        page.locator(".skill-pilot-feedback").wait_for()

        state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1'))")
        assert len(state["events"]) == index + 1
        event = state["events"][-1]
        reason, independent, assisted = expected_reason[qid]
        assert event["question_id"] == qid
        assert event["canonical_skill_id"] == item["canonical_skill_id"]
        assert event["supporting_skills"] == item["supporting_skills"]
        assert event["evidence_class"] == item["evidence_class"]
        assert event["clone_family"] == item["clone_family"]
        assert event["independent_reason"] == reason
        assert event["independent_evidence"] is independent
        assert event["assisted"] is assisted
        if qid == "RAT07V1_009":
            assert event["correct"] is False and event["independent_evidence"] is True
        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == old_practice
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == old_readiness
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == old_beta3
        page.locator(".skill-pilot-nav-next").click()

    assert page.locator(".skill-pilot-heading").inner_text() == "Tổng kết lượt đầu"
    summary_text = page.locator(".skill-pilot-summary-lead").inner_text()
    assert "đúng 11/12" in summary_text
    assert "có 7 mẫu bài được kiểm tra độc lập" in summary_text
    assert "không phải kết luận thành thạo" in summary_text
    assert page.locator(".skill-pilot-review-item").count() == 1
    assert "Mastered" not in page.locator(".skill-assessment-pilot").inner_text()
    assert "Mastery %" not in page.locator(".skill-assessment-pilot").inner_text()
    learner_text = page.locator(".skill-assessment-pilot").inner_text()
    assert "metadata" not in learner_text.lower()
    assert "RAT07-DOMAIN-LINEAR-009-016" not in learner_text
    assert "Kỹ năng đang theo dõi" in learner_text

    stats = page.evaluate(
        "window.SelfLearningCanonicalEvidenceV4.descriptiveSummary(JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1')))"
    )
    assert sum(row["independent_units"] for row in stats.values()) == 7
    assert sum(row["independent_correct"] for row in stats.values()) == 6
    assert sum(row["independent_incorrect"] for row in stats.values()) == 1
    assert "phan-tich-tu-mau" not in stats

    page.screenshot(path=str(PREVIEWS / "canonical-evidence-beta-v4-mobile.png"), full_page=True)

    before = stats
    page.get_by_role("button", name="Luyện lại 1 câu vừa sai").click()
    assert "không tính thêm lần kiểm tra độc lập" in page.locator(".skill-pilot-intro").inner_text()
    item = items[0]
    page.locator(f'.skill-pilot-option[data-original-index="{item["answer_index"]}"]').click()
    retry_event = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1')).events.at(-1)")
    assert retry_event["question_id"] == "RAT07V1_009"
    assert retry_event["independent_evidence"] is False
    assert retry_event["assisted"] is True
    assert retry_event["independent_reason"] == "assisted"
    page.locator(".skill-pilot-nav-next").click()
    after = page.evaluate(
        "window.SelfLearningCanonicalEvidenceV4.descriptiveSummary(JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1')))"
    )
    assert {k:(v["independent_units"],v["independent_correct"],v["independent_incorrect"]) for k,v in before.items()} == {
        k:(v["independent_units"],v["independent_correct"],v["independent_incorrect"]) for k,v in after.items()
    }
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == old_practice
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == old_readiness
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == old_beta3
    assert not errors, errors
    context.close()

    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    page2.goto(BASE + "/huong-dan/thu-nghiem-bang-chung-ky-nang-v4/", wait_until="domcontentloaded")
    page2.locator("[data-canonical-evidence-build='canonical-evidence-beta-v4-copy1-20260930']").wait_for(timeout=30000)
    assert page2.locator(".skill-pilot-option").count() == 4
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "canonical-evidence-beta-v4-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()
    print("PASS Beta v4 browser QA: mobile evidence de-dup + negative evidence + immutable old stores.")
    print("PASS Beta v4 desktop/mobile render with zero page errors and no horizontal overflow.")
