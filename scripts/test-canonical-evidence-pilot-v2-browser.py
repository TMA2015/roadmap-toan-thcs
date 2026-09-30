"""Desktop + mobile browser QA for Phase F Beta v5 multi-topic canonical evidence."""
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
    raise RuntimeError("Chromium/Chrome required for Beta v5 browser QA")

config = json.loads((ROOT / "docs/assets/data/curriculum/canonical-evidence-beta-v5-config-v1.json").read_text(encoding="utf-8"))
manifest = json.loads((ROOT / "docs/assets/data/curriculum/canonical-evidence-phase-f-expansion-r1.json").read_text(encoding="utf-8"))
reviewed = {row["question_id"]: row for row in manifest["scope"]["selected_items"]}
items = [reviewed[qid] for qid in config["selected_item_ids"]]
assert len(items) == 15

expected_reason = {
    "ALG04V2_013": ("first_unseen_unit", True),
    "ALG04V2_014": ("clone_family_repeat", False),
    "ALG04V2_089": ("first_unseen_unit", True),
    "ALG04V2_090": ("clone_family_repeat", False),
    "ID05V1_021": ("first_unseen_unit", True),
    "ID05V1_022": ("clone_family_repeat", False),
    "ID05V1_081": ("first_unseen_unit", True),
    "ID05V1_087": ("first_unseen_unit", True),
    "ID05V1_120": ("first_unseen_unit", True),
    "FAC06V1_001": ("first_unseen_unit", True),
    "FAC06V1_002": ("clone_family_repeat", False),
    "FAC06V1_021": ("first_unseen_unit", True),
    "FAC06V1_022": ("clone_family_repeat", False),
    "RAT07V1_071": ("first_unseen_unit", True),
    "RAT07V1_072": ("clone_family_repeat", False),
}

old_practice = '{"questions":{"LEGACY_Q":{"attempted":7,"correct":5}},"tags":{"legacy":{"attempted":7,"correct":5}}}'
old_readiness = '{"assessments":{"LEGACY_READY":{"attempts":[{"correct":3,"total":4}]}}}'
old_beta3 = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","assessed_skill":"old-skill","correct":true}]}'

v4_seed = {
    "schema": "canonical-skill-evidence-event-v1",
    "event_id": "v4-seed-browser",
    "pilot_version": "beta-v4-core07-r1-20260930",
    "question_id": "RAT07V1_009",
    "canonical_skill_id": "dieu-kien-xac-dinh",
    "topic": "07-phan-thuc-dai-so",
    "evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
    "clone_family": "RAT07-DOMAIN-LINEAR-009-016",
    "correct": True,
    "attempted_at": "2026-09-30T00:00:00Z",
    "content_version": "core07-source-locked-20260930",
    "source_file": "07-phan-thuc-dai-so-v1-01.json",
    "source_blob": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
    "assisted": False,
    "attempt_kind": "first_unseen_unit",
    "independent_evidence": True,
    "independent_reason": "first_unseen_unit",
    "supporting_skills": [],
}
canonical_seed = json.dumps({"schema": "canonical-skill-evidence-store-v1", "events": [v4_seed]}, ensure_ascii=False)

with sync_playwright() as pw:
    browser = pw.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))

    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([a,b,c,d]) => {
          localStorage.setItem('toan-thcs-practice-v1', a);
          localStorage.setItem('toan-thcs-assessment-v1', b);
          localStorage.setItem('toan-thcs-assessment-v2', c);
          localStorage.setItem('toan-thcs-canonical-evidence-v1', d);
        }""",
        [old_practice, old_readiness, old_beta3, canonical_seed],
    )

    page.goto(BASE + "/huong-dan/thu-nghiem-bang-chung-da-chuyen-de-v5/", wait_until="domcontentloaded")
    page.locator("[data-canonical-evidence-build='canonical-evidence-beta-v5-phase-f-r1-20260930']").wait_for(timeout=30000)

    assert "Beta v5" in page.locator(".skill-pilot-intro").inner_text()
    assert page.evaluate("typeof window.SelfLearningCanonicalEvidenceV5") == "object"
    assert "CĐ04 · Biểu thức đại số" in page.locator(".skill-pilot-meta").inner_text()
    assert "Nhận biết" in page.locator(".skill-pilot-secondary").first.inner_text()
    assert page.locator(".skill-pilot-nav-back").is_disabled()
    assert page.locator(".skill-pilot-nav-next").is_disabled()

    for index, item in enumerate(items):
        qid = item["question_id"]
        meta = page.locator(".skill-pilot-meta").inner_text()
        assert qid in meta
        assert item["topic_code"] in meta

        skill_heading = page.locator(".skill-pilot-heading").inner_text()
        if qid == "ID05V1_120":
            assert "Hiệu hai bình phương" in skill_heading
            assert "phan-tich-hdt" not in page.locator(".skill-assessment-pilot").inner_text()

        picked = (item["answer_index"] + 1) % len(item["options"]) if qid == "ID05V1_081" else item["answer_index"]
        page.locator(f'.skill-pilot-option[data-original-index="{picked}"]').click()
        page.locator(".skill-pilot-feedback").wait_for()

        state = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1'))")
        assert len(state["events"]) == index + 2  # one frozen v4 seed + new v5 events
        event = state["events"][-1]
        reason, independent = expected_reason[qid]
        assert event["question_id"] == qid
        assert event["canonical_skill_id"] == item["canonical_skill_id"]
        assert event["topic"] == item["topic_code"]
        assert event["evidence_class"] == item["evidence_class"]
        assert event["clone_family"] == item["clone_family"]
        assert event["independent_reason"] == reason
        assert event["independent_evidence"] is independent
        assert event["pilot_version"] == "phase-f-beta-v5-r1-20260930"
        assert event["supporting_skills"] == []
        assert state["events"][0] == v4_seed

        assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == old_practice
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == old_readiness
        assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == old_beta3
        page.locator(".skill-pilot-nav-next").click()

    assert page.locator(".skill-pilot-heading").inner_text() == "Tổng kết Beta v5"
    summary_text = page.locator(".skill-pilot-summary-lead").inner_text()
    assert "đúng 14/15" in summary_text
    assert "có 9 mẫu bài được kiểm tra độc lập mới" in summary_text
    assert "không phải kết luận thành thạo" in summary_text
    assert page.locator(".skill-pilot-review-item").count() >= 1

    breakdown = page.evaluate(
        "window.SelfLearningCanonicalEvidenceV5.evidenceBreakdown(JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v1')))"
    )
    assert sum(row["independent_units"] for row in breakdown.values()) == 10  # v4 seed + 9 new
    assert breakdown["dieu-kien-xac-dinh"]["independent_units"] == 2
    assert breakdown["dieu-kien-xac-dinh"]["by_topic"] == {
        "07-phan-thuc-dai-so": 1,
        "CĐ04": 1,
    }
    assert breakdown["dieu-kien-xac-dinh"]["by_class"] == {
        "MCQ_FINAL_OUTPUT_ONLY": 1,
        "MCQ_FINAL_ANSWER_ONLY": 1,
    }
    assert breakdown["hieu-hai-binh-phuong"]["independent_units"] == 5
    assert breakdown["hieu-hai-binh-phuong"]["by_topic"] == {"CĐ05": 4, "CĐ06": 1}
    assert breakdown["hieu-hai-binh-phuong"]["by_class"] == {
        "MCQ_FINAL_OUTPUT_ONLY": 3,
        "MCQ_RECOGNITION_ONLY": 1,
        "MCQ_METHOD_SELECTION_ONLY": 1,
    }
    assert "phan-tich-hdt" not in breakdown
    assert "nhan-dang-hdt" not in breakdown

    history = page.locator(".skill-pilot-history")
    history.locator("summary").first.click()
    skill_detail = history.locator("details").filter(has_text="Điều kiện xác định").first
    skill_detail.locator("summary").click()
    detail_text = skill_detail.inner_text()
    assert "Đáp án cuối 1" in detail_text
    assert "Kết quả cuối 1" in detail_text
    assert "CĐ04 · Biểu thức đại số 1" in detail_text
    assert "CĐ07 · Phân thức đại số 1" in detail_text

    page.screenshot(path=str(PREVIEWS / "canonical-evidence-beta-v5-mobile.png"), full_page=True)

    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == old_practice
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == old_readiness
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == old_beta3
    assert not errors, errors
    context.close()

    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    page2.goto(BASE + "/huong-dan/thu-nghiem-bang-chung-da-chuyen-de-v5/", wait_until="domcontentloaded")
    page2.locator("[data-canonical-evidence-build='canonical-evidence-beta-v5-phase-f-r1-20260930']").wait_for(timeout=30000)
    assert page2.locator(".skill-pilot-option").count() == 4
    assert "CĐ04 · Biểu thức đại số" in page2.locator(".skill-pilot-meta").inner_text()
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "canonical-evidence-beta-v5-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Beta v5 browser QA: 15 items, dynamic topics, 9 new independent units.")
print("PASS v4+v5 prospective aggregation with evidence-class/topic breakdown.")
print("PASS immutable legacy stores and frozen v4 canonical seed.")
print("PASS Beta v5 desktop/mobile render with zero page errors and no horizontal overflow.")
