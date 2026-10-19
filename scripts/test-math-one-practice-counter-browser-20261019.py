"""Release-candidate browser QA: one active Practice counter, truthful Family display.

Uses exact original real questions, with one-question manifests isolated in Playwright
routes. Does not modify original banks, source answers or real learner storage.
"""
import json
import pathlib
import shutil
from copy import deepcopy
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8765"
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chrome/Chromium required for one-counter browser QA")

CASES = {
    "NUM02V1_121": {
        "page": "/kien-thuc/02-so-va-phep-tinh/bai-tap/",
        "manifest": "02-so-va-phep-tinh-v4.manifest.json",
        "source": "02-so-va-phep-tinh-v1-05.json",
    },
    "NUM02V1_142": {
        "page": "/kien-thuc/02-so-va-phep-tinh/bai-tap/",
        "manifest": "02-so-va-phep-tinh-v4.manifest.json",
        "source": "02-so-va-phep-tinh-v1-06.json",
    },
    "ALG04V2_013": {
        "page": "/kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
        "manifest": "04-bieu-thuc-dai-so-v6.manifest.json",
        "source": "04-bieu-thuc-dai-so-v2-01.json",
    },
}
DATA = {}
for qid, meta in CASES.items():
    manifest = json.loads((ROOT / "docs/assets/data/practice" / meta["manifest"]).read_text(encoding="utf-8"))
    source = json.loads((ROOT / "docs/assets/data/practice" / meta["source"]).read_text(encoding="utf-8"))
    q = next((q for q in source["questions"] if q["id"] == qid), None)
    assert q is not None, f"Missing real question {qid}"
    DATA[qid] = (manifest, source, q)

TAXONOMY_SENTINEL = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{"event_id": "EXISTING_TAXONOMY_HISTORY"}],
    "seen_questions": {}, "independent_units": {}
}, ensure_ascii=False)
CANONICAL_SENTINEL = json.dumps({
    "schema": "canonical-skill-evidence-store-v2",
    "recent_events": [{"event_id": "EXISTING_CANONICAL_HISTORY"}],
    "seen_questions": {}, "independent_units": {}
}, ensure_ascii=False)
READINESS_SENTINEL = '{"assessments":{"READINESS_OLD":{"attempts":[]}}}'


def install_source_routes(page, current):
    def intercept(route):
        name = route.request.url.split("/")[-1].split("?")[0]
        qid = current.get("qid")
        if qid is None:
            return route.continue_()
        cfg = CASES[qid]
        manifest, source, question = DATA[qid]
        if name == cfg["manifest"]:
            data = deepcopy(manifest)
            data["sources"] = [cfg["source"]]
            data["session_size"] = 1
            data["question_count"] = 1
            return route.fulfill(status=200, content_type="application/json",
                                 body=json.dumps(data, ensure_ascii=False))
        if name == cfg["source"]:
            data = deepcopy(source)
            data["questions"] = [question]
            return route.fulfill(status=200, content_type="application/json",
                                 body=json.dumps(data, ensure_ascii=False))
        return route.continue_()
    page.route("**/assets/data/practice/*.json", intercept)


def storage(page, key):
    raw = page.evaluate("(k) => localStorage.getItem(k)", key)
    return json.loads(raw) if raw else None


def assert_shadow_untouched(page):
    assert page.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") == TAXONOMY_SENTINEL
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") == CANONICAL_SENTINEL
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == READINESS_SENTINEL


def answer_one(page, current, qid, correct=True):
    current["qid"] = qid
    page.goto(BASE + CASES[qid]["page"], wait_until="domcontentloaded")
    buttons = page.locator(".practice-option")
    buttons.first.wait_for(timeout=30000)
    _, _, question = DATA[qid]
    assert buttons.count() == len(question["options"])
    index = question["answer"] if correct else (question["answer"] + 1) % len(question["options"])
    page.locator(f'.practice-option[data-original-index="{index}"]').click()
    page.wait_for_function(
        "(qid) => { const p=JSON.parse(localStorage.getItem('toan-thcs-practice-v1')||'{}'); return !!p.questions?.[qid]?.attempted; }",
        arg=qid, timeout=10000
    )
    page.locator(".practice-feedback").wait_for(timeout=10000)
    assert_shadow_untouched(page)


with sync_playwright() as pw:
    browser = pw.chromium.launch(executable_path=CHROME, headless=True,
                                 args=["--no-sandbox", "--disable-dev-shm-usage"])
    ctx = browser.new_context(viewport={"width": 1280, "height": 800})
    page = ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    current = {"qid": None}
    install_source_routes(page, current)
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate("""([a,b,c]) => {
        localStorage.setItem("toan-thcs-practice-v1",
          JSON.stringify({ questions:{},tags:{},observed_signals:[] }));
        localStorage.setItem("toan-thcs-taxonomy-v2-evidence-v1", a);
        localStorage.setItem("toan-thcs-canonical-evidence-v2", b);
        localStorage.setItem("toan-thcs-assessment-v1", c);
    }""", [TAXONOMY_SENTINEL, CANONICAL_SENTINEL, READINESS_SENTINEL])

    answer_one(page, current, "NUM02V1_121", correct=True)
    answer_one(page, current, "NUM02V1_142", correct=True)
    answer_one(page, current, "ALG04V2_013", correct=False)

    p = storage(page, "toan-thcs-practice-v1")
    for qid in CASES:
        assert p["questions"][qid]["attempted"] == 1, (qid, p["questions"].get(qid))
    assert [p["questions"][qid]["correct"] for qid in CASES] == [1, 1, 0]
    assert p["tags"]["lam-tron-so"]["attempted"] == 1
    assert p["tags"]["can-bac-hai-so-hoc"]["attempted"] == 1
    assert p["tags"]["hang-tu-dong-dang"]["attempted"] == 1

    # The dashboard and learner Skill Map read ONE Practice store. No old-v2
    # sentinel ever changes; no Family label is manufactured for sqrt121.
    current["qid"] = None
    page.goto(BASE + "/tien-do-hoc-tap/", wait_until="domcontentloaded")
    page.locator('[data-math-progress-dashboard][data-progress-ready="true"]').wait_for(timeout=30000)
    assert page.locator('.mpd-stat[data-lane="practice"] .mpd-stat-value').inner_text().strip() == "3"
    assert_shadow_untouched(page)
    page.goto(BASE + "/ban-do-ky-nang/", wait_until="domcontentloaded")
    skill_map = page.locator('[data-skill-map-v2-mode="learner"]')
    skill_map.locator(".skill-map-v2-total-card").first.wait_for(timeout=30000)
    cards = skill_map.locator(".skill-map-v2-total-card")
    assert "3" in cards.nth(0).inner_text()
    assert "2" in cards.nth(1).inner_text()
    assert "Làm tròn số: 1/1 đúng" in skill_map.locator('[data-family-id="NUM-SETS"]').inner_text()
    assert "Hạng tử đồng dạng: 0/1 đúng" in skill_map.locator(
        '[data-family-id="ALG-SIMPLIFY-ADD-SUB"]').inner_text()
    assert skill_map.locator('.skill-map-v2-legacy').count() == 0
    assert_shadow_untouched(page)

    # Reopening the map and dashboard does not increment or modify Practice.
    frozen = page.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
    page.reload(wait_until="domcontentloaded")
    skill_map.locator(".skill-map-v2-total-card").first.wait_for(timeout=30000)
    assert page.evaluate("localStorage.getItem('toan-thcs-practice-v1')") == frozen
    assert_shadow_untouched(page)
    assert not errors, errors
    browser.close()
print("PASS one-counter browser: 3 real items, 2 correct, Grade-7 sqrt HOLD counted only globally, old shadow stores untouched.")
