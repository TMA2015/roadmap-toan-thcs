"""Browser QA for I4 Skill Map v2 owner/opt-in preview."""
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
    raise RuntimeError("Chromium/Chrome required for Skill Map v2 browser QA")

STORE = {
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [
        {
            "event_id": "A",
            "family_id": "TRI-PERPBISECTOR",
            "topic_id": "CT14",
            "attempted_at": "2026-10-03T00:00:00Z",
            "assisted": False,
            "independent_evidence": True,
        },
        {
            "event_id": "B",
            "family_id": "TRI-PERPBISECTOR",
            "topic_id": "CT15",
            "attempted_at": "2026-10-03T00:05:00Z",
            "assisted": True,
            "independent_evidence": False,
            "independent_reason": "assisted",
        },
        {
            "event_id": "C",
            "family_id": "TRI-PERPBISECTOR",
            "topic_id": "CT15",
            "attempted_at": "2026-10-03T00:06:00Z",
            "assisted": False,
            "independent_evidence": False,
            "independent_reason": "clone_family_repeat",
        },
    ],
    "seen_questions": {
        "CT14|q:A": {"first_event_id": "A"},
        "CT15|q:B": {"first_event_id": "B"},
        "CT15|q:C": {"first_event_id": "C"},
    },
    "independent_units": {
        "TRI-PERPBISECTOR|CT14|q:A": {
            "first_event_id": "A",
            "question_id": "A",
            "topic_id": "CT14",
            "diagnostic_skill_id": "duong-trung-truc",
            "family_id": "TRI-PERPBISECTOR",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
            "correct": True,
        },
        "TRI-PERPBISECTOR|CT15|clone:X": {
            "first_event_id": "C0",
            "question_id": "C0",
            "topic_id": "CT15",
            "diagnostic_skill_id": "duong-trung-truc",
            "family_id": "TRI-PERPBISECTOR",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
            "correct": False,
        },
    },
}
LEGACY = {
    "questions": {},
    "tags": {
        "legacy-alpha": {"attempted": 4, "correct": 3},
        "legacy-beta": {"attempted": 7, "correct": 5, "hinted_attempts": 2},
    },
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
    page.goto(BASE + "/collaboration/skill-map-v2-preview/", wait_until="domcontentloaded")
    page.locator('[data-skill-map-v2-preview][data-skill-map-ready="true"]').wait_for(timeout=30000)

    root = page.locator("[data-skill-map-v2-preview]")
    assert root.get_attribute("data-skill-map-build") == "skill-map-v2-preview-i4-r1-20261003"

    # One aggregated family card across CT14 and CT15.
    card = root.locator('[data-family-id="TRI-PERPBISECTOR"]')
    assert card.count() == 1
    text = card.inner_text()
    assert "2 đơn vị độc lập" in text
    assert "1/2 đúng" in text
    assert "Evidence accuracy 50%" in text
    assert "14 · Tam giác" in text
    assert "15 · Các đường đồng quy" in text
    assert "Sự kiện gần đây: 3" in text
    assert "Có hỗ trợ: 1" in text

    # Optional layers are collapsed by default.
    optional = root.locator("details.skill-map-v2-layer.is-optional")
    assert optional.count() >= 1
    for i in range(optional.count()):
        assert optional.nth(i).get_attribute("open") is None

    # Layer filtering.
    root.locator(".skill-map-v2-controls select").nth(0).select_option("Entrance10")
    cards = root.locator(".skill-map-v2-card")
    assert cards.count() > 0
    for i in range(cards.count()):
        assert "Ôn thi vào 10" in cards.nth(i).locator(".skill-map-v2-layer-badge").inner_text()

    # Topic filter keeps cross-topic family discoverable from CT15.
    root.locator(".skill-map-v2-controls select").nth(0).select_option("ALL")
    root.locator(".skill-map-v2-controls select").nth(1).select_option("CT15")
    assert root.locator('[data-family-id="TRI-PERPBISECTOR"]').count() == 1

    # Evidence-only filter does not invent evidence for unseen families.
    root.locator(".skill-map-v2-check input").check()
    assert root.locator(".skill-map-v2-card").count() == 1
    assert root.locator('[data-family-id="TRI-PERPBISECTOR"]').count() == 1

    # Legacy statistics are available only in their separate disclosure.
    legacy = root.locator("[data-skill-map-legacy]")
    assert legacy.count() == 1
    legacy.locator("summary").click()
    legacy_text = legacy.inner_text()
    assert "legacy-beta: 5/7 đúng" in legacy_text
    assert "Không cộng gộp với Evidence accuracy" in legacy_text

    # I4 is read-only.
    assert page.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") == STORE_RAW
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == LEGACY_RAW

    # No readiness/mastery action controls are introduced.
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
    page.screenshot(path=str(PREVIEWS / "skill-map-v2-i4-desktop.png"), full_page=True)
    assert not errors, errors
    desktop.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    seed(mobile)
    page2 = mobile.new_page()
    errors2 = []
    page2.on("pageerror", lambda err: errors2.append(str(err)))
    validate(page2)
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "skill-map-v2-i4-mobile.png"), full_page=True)
    assert not errors2, errors2
    mobile.close()

    browser.close()

print("PASS I4 Skill Map v2 owner preview desktop/mobile.")
print("PASS cross-topic aggregation, clone-safe counts, filters and separate legacy stats.")
print("PASS localStorage stores remain byte-for-byte unchanged.")
