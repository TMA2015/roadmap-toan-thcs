"""Browser QA for Skill Taxonomy v2 I2 CT02 shadow canary."""
import json
import pathlib
import shutil
from copy import deepcopy
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
BASE = "http://127.0.0.1:8765"
PREVIEWS = ROOT / "previews"
PREVIEWS.mkdir(exist_ok=True)
CHROME = shutil.which("google-chrome") or shutil.which("chromium")
if not CHROME:
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I2 browser QA")

TOPIC = {
    "manifest": "02-so-va-phep-tinh-v1.manifest.json",
    "page": "/kien-thuc/02-so-va-phep-tinh/bai-tap/",
}

TARGETS = {
    "NUM02V1_001": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_002": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_004": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_005": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_006": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_017": "02-so-va-phep-tinh-v1-01.json",
    "NUM02V1_019": "02-so-va-phep-tinh-v1-01.json",  # outside canary
    "NUM02V1_059": "02-so-va-phep-tinh-v1-02.json",  # NO_FAMILY guard
    "NUM02V1_103": "02-so-va-phep-tinh-v1-04.json",  # NO_FAMILY guard
}

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

MANIFEST = load_json("docs/assets/data/practice/" + TOPIC["manifest"])
SOURCE_CACHE = {}
QUESTION_BY_ID = {}
for qid, source_file in TARGETS.items():
    if source_file not in SOURCE_CACHE:
        SOURCE_CACHE[source_file] = load_json("docs/assets/data/practice/" + source_file)
    q = next((row for row in SOURCE_CACHE[source_file]["questions"] if row["id"] == qid), None)
    if not q:
        raise AssertionError("Missing source question " + qid)
    QUESTION_BY_ID[qid] = q

OLD_PRACTICE = json.dumps({
    "questions": {"LEGACY_Q": {"attempted": 7, "correct": 5}},
    "tags": {"legacy": {"attempted": 7, "correct": 5}},
    "observed_signals": [],
}, ensure_ascii=False, separators=(",", ":"))
OLD_READY = '{"assessments":{"LEGACY_READY":{"attempts":[{"correct":3,"total":4}]}}}'
OLD_BETA3 = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","assessed_skill":"old-skill","correct":true}]}'
OLD_G2 = '{"schema":"canonical-skill-evidence-store-v2","recent_events":[{"event_id":"G2-SENTINEL"}],"seen_questions":{},"independent_units":{}}'

def install_forced_bank(page, current):
    def handler(route):
        name = route.request.url.split("/")[-1].split("?")[0]
        target = current.get("target")
        if not target:
            route.continue_()
            return
        source_file = TARGETS[target]
        if name == TOPIC["manifest"]:
            manifest = deepcopy(MANIFEST)
            manifest["sources"] = [source_file]
            manifest["session_size"] = 1
            manifest["question_count"] = 1
            route.fulfill(status=200, content_type="application/json",
                          body=json.dumps(manifest, ensure_ascii=False))
            return
        if name == source_file:
            source = deepcopy(SOURCE_CACHE[source_file])
            source["questions"] = [QUESTION_BY_ID[target]]
            route.fulfill(status=200, content_type="application/json",
                          body=json.dumps(source, ensure_ascii=False))
            return
        route.continue_()
    page.route("**/assets/data/practice/*.json", handler)

def seed_storage(page):
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([practice,ready,beta3,g2]) => {
          localStorage.setItem('toan-thcs-practice-v1', practice);
          localStorage.setItem('toan-thcs-assessment-v1', ready);
          localStorage.setItem('toan-thcs-assessment-v2', beta3);
          localStorage.setItem('toan-thcs-canonical-evidence-v2', g2);
          localStorage.removeItem('toan-thcs-taxonomy-v2-evidence-v1');
        }""",
        [OLD_PRACTICE, OLD_READY, OLD_BETA3, OLD_G2],
    )

def goto_target(page, current, qid, debug=False):
    current["target"] = qid
    url = BASE + TOPIC["page"]
    if debug:
        url += "?taxonomyV2Debug=1"
    page.goto(url, wait_until="domcontentloaded")
    page.locator(".practice-engine").wait_for(timeout=30000)
    page.locator(".practice-question").wait_for(timeout=30000)
    assert page.locator(".practice-option").count() == len(QUESTION_BY_ID[qid]["options"])
    if not debug:
        assert page.locator("[data-taxonomy-v2-debug]").count() == 0

def answer(page, qid, choice=None):
    q = QUESTION_BY_ID[qid]
    original = q["answer"] if choice is None else choice
    page.locator(f'.practice-option[data-original-index="{original}"]').click()
    page.locator(".practice-feedback").wait_for(timeout=10000)

def wrong_choice(qid):
    q = QUESTION_BY_ID[qid]
    return (int(q["answer"]) + 1) % len(q["options"])

def wait_taxonomy_capture(page, qid):
    page.wait_for_function(
        """qid => {
          const s = JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1') || 'null');
          return s && Array.isArray(s.recent_events) && s.recent_events.at(-1)?.question_id === qid;
        }""",
        arg=qid,
        timeout=10000,
    )
    return page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")

def wait_last_reason(page, qid, reason):
    page.wait_for_function(
        """([qid, reason]) => {
          const api = window.RoadmapTaxonomyV2Observer;
          const last = api?.debugSnapshot?.().last_capture;
          return last?.question_id === qid && last?.reason === reason;
        }""",
        arg=[qid, reason],
        timeout=10000,
    )

def sentinel_assertions(page):
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == OLD_READY
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == OLD_BETA3
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") == OLD_G2

with sync_playwright() as pw:
    browser = pw.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    # Mobile real-Practice integration.
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    current = {}
    install_forced_bank(page, current)
    seed_storage(page)

    # Assisted first exposure: event is stored but is not independent.
    goto_target(page, current, "NUM02V1_001")
    page.get_by_role("button", name="🤖 Chọn cách được giúp").click()
    page.get_by_role("button", name="📖 Xem lời giải hiện có").click()
    page.get_by_role("button", name="Tôi muốn mở lời giải ngay").click()
    answer(page, "NUM02V1_001")
    store = wait_taxonomy_capture(page, "NUM02V1_001")
    event = store["recent_events"][-1]
    assert event["family_id"] == "NUM-SETS"
    assert event["diagnostic_skill_id"] == "tap-hop-so"
    assert event["assisted"] is True
    assert event["assistance_kind"] == "full_solution"
    assert event["independent_evidence"] is False
    assert event["independent_reason"] == "assisted"
    assert len(store["independent_units"]) == 0
    sentinel_assertions(page)

    # Unseen sibling in the same clone can become first independent unit.
    goto_target(page, current, "NUM02V1_002")
    answer(page, "NUM02V1_002")
    store = wait_taxonomy_capture(page, "NUM02V1_002")
    assert store["recent_events"][-1]["independent_evidence"] is True
    assert store["recent_events"][-1]["independent_reason"] == "first_unseen_unit"

    # Another clone sibling cannot inflate independent evidence.
    goto_target(page, current, "NUM02V1_005")
    answer(page, "NUM02V1_005")
    store = wait_taxonomy_capture(page, "NUM02V1_005")
    assert store["recent_events"][-1]["independent_reason"] == "clone_family_repeat"

    # Standalone question in the same family is a distinct unit.
    goto_target(page, current, "NUM02V1_004")
    answer(page, "NUM02V1_004")
    store = wait_taxonomy_capture(page, "NUM02V1_004")
    assert store["recent_events"][-1]["independent_evidence"] is True

    # Wrong first-unassisted answer is valid negative evidence.
    goto_target(page, current, "NUM02V1_006")
    answer(page, "NUM02V1_006", choice=wrong_choice("NUM02V1_006"))
    store = wait_taxonomy_capture(page, "NUM02V1_006")
    event = store["recent_events"][-1]
    assert event["family_id"] == "NUM-INTEGER-OPS"
    assert event["correct"] is False
    assert event["independent_evidence"] is True

    # Exact question repeat is stored but never independent again.
    goto_target(page, current, "NUM02V1_006")
    answer(page, "NUM02V1_006")
    store = wait_taxonomy_capture(page, "NUM02V1_006")
    assert store["recent_events"][-1]["independent_reason"] == "repeat_question"

    # NO_FAMILY guard must not write an event.
    count_before = len(store["recent_events"])
    goto_target(page, current, "NUM02V1_059", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    answer(page, "NUM02V1_059")
    wait_last_reason(page, "NUM02V1_059", "no_family_guard")
    store_after = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    assert len(store_after["recent_events"]) == count_before

    # Supporting-only NO_FAMILY guard also never writes.
    goto_target(page, current, "NUM02V1_103")
    answer(page, "NUM02V1_103")
    wait_last_reason(page, "NUM02V1_103", "no_family_guard")
    store_after_2 = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    assert len(store_after_2["recent_events"]) == count_before

    # Outside-canary CT02 question does not write.
    goto_target(page, current, "NUM02V1_019")
    answer(page, "NUM02V1_019")
    wait_last_reason(page, "NUM02V1_019", "not_in_i2_canary")
    store_after_3 = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    assert len(store_after_3["recent_events"]) == count_before
    sentinel_assertions(page)

    # No normal learner-facing Taxonomy v2 panel.
    page.goto(BASE + TOPIC["page"], wait_until="domcontentloaded")
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i2-canary-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # Fail-open: legacy Practice result is identical if I2 policy fails.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p)
        goto_target(p, cur, "NUM02V1_017")
        answer(p, "NUM02V1_017")
        if not block_policy:
            wait_taxonomy_capture(p, "NUM02V1_017")
        else:
            wait_last_reason(p, "NUM02V1_017", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        sentinel_assertions(p)
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    legacy_success = one_run(False)
    legacy_failure = one_run(True)
    assert legacy_success == legacy_failure, "Taxonomy v2 failure changed legacy Practice stats"

    # Desktop debug smoke.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "NUM02V1_017", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    answer(page2, "NUM02V1_017")
    wait_taxonomy_capture(page2, "NUM02V1_017")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "NUM-ABS"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i2-canary-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I2 real-Practice canary on CT02.")
print("PASS assisted, clone, repeat, negative, NO_FAMILY and outside-canary boundaries.")
print("PASS fail-open: legacy Practice and existing G2 store remain unchanged.")
print("PASS I2 remains shadow-only with debug UI only behind taxonomyV2Debug.")
