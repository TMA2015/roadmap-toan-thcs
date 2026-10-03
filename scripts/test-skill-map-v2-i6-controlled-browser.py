"""Browser QA for I6 controlled learner-facing Skill Map."""
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
    raise RuntimeError("Chromium/Chrome required for I6 Skill Map browser QA")

STORE = {
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [
        {"event_id":"P1","family_id":"TRI-PERPBISECTOR","topic_id":"CT14","attempted_at":"2026-10-03T00:00:00Z","assisted":False},
        {"event_id":"P2","family_id":"TRI-PERPBISECTOR","topic_id":"CT15","attempted_at":"2026-10-03T00:05:00Z","assisted":False},
        {"event_id":"N1","family_id":"NUM-SETS","topic_id":"CT02","attempted_at":"2026-10-03T00:10:00Z","assisted":False},
        {"event_id":"N2","family_id":"NUM-SETS","topic_id":"CT02","attempted_at":"2026-10-03T00:11:00Z","assisted":False},
        {"event_id":"N3","family_id":"NUM-SETS","topic_id":"CT02","attempted_at":"2026-10-03T00:12:00Z","assisted":False},
    ],
    "seen_questions": {
        "CT14|q:P1": {},
        "CT15|q:P2": {},
        "CT02|q:N1": {},
        "CT02|q:N2": {},
        "CT02|q:N3": {},
    },
    "independent_units": {
        "TRI-PERPBISECTOR|CT14|q:P1": {
            "question_id":"P1","topic_id":"CT14","family_id":"TRI-PERPBISECTOR",
            "family_layer":"KNTT-Core","evidence_class":"MCQ_FINAL_ANSWER_ONLY","correct":True
        },
        "TRI-PERPBISECTOR|CT15|q:P2": {
            "question_id":"P2","topic_id":"CT15","family_id":"TRI-PERPBISECTOR",
            "family_layer":"KNTT-Core","evidence_class":"MCQ_FINAL_ANSWER_ONLY","correct":False
        },
        "NUM-SETS|CT02|q:N1": {
            "question_id":"N1","topic_id":"CT02","family_id":"NUM-SETS",
            "family_layer":"KNTT-Core","evidence_class":"MCQ_FINAL_ANSWER_ONLY","correct":True
        },
        "NUM-SETS|CT02|q:N2": {
            "question_id":"N2","topic_id":"CT02","family_id":"NUM-SETS",
            "family_layer":"KNTT-Core","evidence_class":"MCQ_FINAL_ANSWER_ONLY","correct":True
        },
        "NUM-SETS|CT02|q:N3": {
            "question_id":"N3","topic_id":"CT02","family_id":"NUM-SETS",
            "family_layer":"KNTT-Core","evidence_class":"MCQ_FINAL_ANSWER_ONLY","correct":False
        },
    },
}
LEGACY = {
    "questions": {},
    "tags": {"legacy-beta":{"attempted":7,"correct":5,"hinted_attempts":2}},
    "observed_signals": [],
}

STORE_RAW = json.dumps(STORE, ensure_ascii=False, separators=(",", ":"))
LEGACY_RAW = json.dumps(LEGACY, ensure_ascii=False, separators=(",", ":"))

def seed(context):
    context.add_init_script(
        "localStorage.setItem('toan-thcs-taxonomy-v2-evidence-v1', " + json.dumps(STORE_RAW) + ");"
        "localStorage.setItem('toan-thcs-practice-v1', " + json.dumps(LEGACY_RAW) + ");"
    )

def validate(page):
    page.goto(BASE + "/collaboration/skill-map-v2-i6-controlled/", wait_until="domcontentloaded")
    root = page.locator('[data-skill-map-v2-controlled][data-skill-map-ready="true"]')
    root.wait_for(timeout=30000)

    assert root.get_attribute("data-skill-map-build") == "skill-map-v2-i6b-learner-r1-20261003"
    intro = root.locator(".skill-map-v2-intro").inner_text()
    assert "Bản đồ kỹ năng" in intro
    assert "không phải kết luận thành thạo" in intro

    sparse = root.locator('[data-family-id="TRI-PERPBISECTOR"]')
    assert sparse.count() == 1
    sparse_text = sparse.inner_text()
    assert "Dữ liệu còn ít" in sparse_text
    assert "1/2 đúng" in sparse_text
    assert "50%" not in sparse_text
    assert sparse.get_attribute("data-evidence-state") == "SPARSE_DATA"

    trend = root.locator('[data-family-id="NUM-SETS"]')
    assert trend.count() == 1
    trend_text = trend.inner_text()
    assert "Đã có dữ liệu để xem xu hướng" in trend_text
    assert "2/3 đúng" in trend_text
    assert "Tỷ lệ đúng quan sát 67%" in trend_text
    assert trend.get_attribute("data-evidence-state") == "PRACTICE_TREND_REVIEWABLE"

    # A visible Core family with no direct Practice capacity gets explicit wording.
    unseen = root.locator('[data-family-id="ID-APPLY"]')
    assert unseen.count() == 1
    unseen_text = unseen.inner_text()
    assert "Hiện chưa có bài luyện trực tiếp" in unseen_text
    assert "không có nghĩa là em yếu" in unseen_text
    assert unseen.get_attribute("data-evidence-state") == "NO_DIRECT_EVIDENCE"

    # Optional layers remain collapsed by default; selecting the layer opens it and
    # preserves the same no-direct-evidence wording.
    root.locator(".skill-map-v2-controls select").nth(0).select_option("Entrance10")
    ratio_model = root.locator('[data-family-id="RATIO-MODEL"]')
    assert ratio_model.count() == 1
    ratio_text = ratio_model.inner_text()
    assert "Hiện chưa có bài luyện trực tiếp" in ratio_text
    assert ratio_model.get_attribute("data-evidence-state") == "NO_DIRECT_EVIDENCE"
    root.locator(".skill-map-v2-controls select").nth(0).select_option("ALL")

    # Learner mode hides technical family IDs from the card copy.
    assert "TRI-PERPBISECTOR" not in sparse_text
    assert "NUM-SETS" not in trend_text

    # Legacy stays visibly separate.
    legacy = root.locator("[data-skill-map-legacy]")
    legacy.locator("summary").click()
    assert "Hệ thống không cộng các số này vào Bản đồ kỹ năng mới" in legacy.inner_text()

    # Controlled page is read-only and introduces no readiness/mastery controls.
    assert page.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") == STORE_RAW
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == LEGACY_RAW
    assert root.locator("[data-readiness-gate]").count() == 0
    assert root.locator("[data-mastery-action]").count() == 0

with sync_playwright() as pw:
    browser = pw.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    desktop = browser.new_context(viewport={"width": 1365, "height": 900})
    seed(desktop)
    page = desktop.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    validate(page)
    page.screenshot(path=str(PREVIEWS / "skill-map-v2-i6-controlled-desktop.png"), full_page=True)
    assert not errors, errors
    desktop.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    seed(mobile)
    page2 = mobile.new_page()
    errors2 = []
    page2.on("pageerror", lambda err: errors2.append(str(err)))
    validate(page2)
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "skill-map-v2-i6-controlled-mobile.png"), full_page=True)
    assert not errors2, errors2
    mobile.close()

    browser.close()

print("PASS I6 controlled Skill Map desktop/mobile.")
print("PASS sparse N<=2 hides percentage; N>=3 shows descriptive observed percentage.")
print("PASS no Mastery/Readiness activation and localStorage remains unchanged.")
