"""Browser QA for I6B broader learner-facing Skill Map."""
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
    raise RuntimeError("Chromium/Chrome required for I6B Skill Map browser QA")

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
        "CT14|q:P1": {}, "CT15|q:P2": {},
        "CT02|q:N1": {}, "CT02|q:N2": {}, "CT02|q:N3": {},
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
    page.goto(BASE + "/ban-do-ky-nang/", wait_until="domcontentloaded")
    root = page.locator('[data-skill-map-v2-controlled][data-skill-map-ready="true"]')
    root.wait_for(timeout=30000)

    assert root.get_attribute("data-skill-map-build") == "skill-map-v2-i6b-learner-r1-20261003"
    assert page.locator("article h1").inner_text().strip() == "Bản đồ kỹ năng"
    intro = root.locator(".skill-map-v2-intro").inner_text()
    assert intro.startswith("Bản đồ kỹ năng")
    assert "Thử nghiệm có kiểm soát" not in intro

    article_text = page.locator("article").inner_text()
    for forbidden in ("Controlled learner-facing release", "Skill Map v2 I6 Controlled QA", "Skill Taxonomy v2"):
        assert forbidden not in article_text

    sparse = root.locator('[data-family-id="TRI-PERPBISECTOR"]')
    sparse_text = sparse.inner_text()
    assert "Dữ liệu còn ít" in sparse_text
    assert "1/2 đúng" in sparse_text
    assert "50%" not in sparse_text

    trend = root.locator('[data-family-id="NUM-SETS"]')
    trend_text = trend.inner_text()
    assert "Đã có dữ liệu để xem xu hướng" in trend_text
    assert "2/3 đúng" in trend_text
    assert "Tỷ lệ đúng quan sát 67%" in trend_text

    no_direct = root.locator('[data-family-id="ID-APPLY"]')
    assert "Hiện chưa có bài luyện trực tiếp" in no_direct.inner_text()

    # Main navigation exposes the learner-friendly route.
    public_links = page.locator('a[href$="/ban-do-ky-nang/"]')
    assert public_links.count() >= 1

    # Topic actions from the public route resolve to real site routes.
    learn_href = trend.locator("a", has_text="Học chuyên đề").get_attribute("href")
    practice_href = trend.locator("a", has_text="Luyện tập").get_attribute("href")
    assert learn_href.endswith("/kien-thuc/02-so-va-phep-tinh/")
    assert practice_href.endswith("/kien-thuc/02-so-va-phep-tinh/bai-tap/")

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
    page.screenshot(path=str(PREVIEWS / "skill-map-v2-i6b-public-desktop.png"), full_page=True)
    assert not errors, errors
    desktop.close()

    mobile = browser.new_context(viewport={"width": 390, "height": 844})
    seed(mobile)
    page2 = mobile.new_page()
    errors2 = []
    page2.on("pageerror", lambda err: errors2.append(str(err)))
    validate(page2)
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "skill-map-v2-i6b-public-mobile.png"), full_page=True)
    assert not errors2, errors2
    mobile.close()

    browser.close()

print("PASS I6B public Skill Map desktop/mobile.")
print("PASS learner-facing copy/navigation has no controlled-release jargon.")
print("PASS public route actions, sparse evidence and read-only boundaries.")
