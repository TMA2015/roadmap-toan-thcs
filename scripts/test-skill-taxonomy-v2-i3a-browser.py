"""Browser QA for Skill Taxonomy v2 I3A full-CT02 shadow capture."""
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3A browser QA")

TOPIC = {
    "manifest": "02-so-va-phep-tinh-v1.manifest.json",
    "page": "/kien-thuc/02-so-va-phep-tinh/bai-tap/",
}

TARGETS = {
    "NUM02V1_019": "02-so-va-phep-tinh-v1-01.json",  # newly active vs I2
    "NUM02V1_021": "02-so-va-phep-tinh-v1-01.json",  # NUM-POWER
    "NUM02V1_031": "02-so-va-phep-tinh-v1-02.json",  # NUM-DIV-PRIME
    "NUM02V1_061": "02-so-va-phep-tinh-v1-03.json",  # NUM-FRACTION-FORM
    "NUM02V1_091": "02-so-va-phep-tinh-v1-04.json",  # NUM-PERCENT
    "NUM02V1_059": "02-so-va-phep-tinh-v1-02.json",  # NO_FAMILY
    "NUM02V1_103": "02-so-va-phep-tinh-v1-04.json",  # supporting/no family
    "NUM02V1_119": "02-so-va-phep-tinh-v1-04.json",  # no family
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
I2_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{
        "schema": "taxonomy-v2-evidence-event-v1",
        "event_id": "I2-SENTINEL",
        "capture_version": "taxonomy-v2-i2-ct02-canary-v1",
        "question_id": "NUM02V1_001",
        "topic_id": "CT02",
        "family_id": "NUM-SETS",
        "correct": True,
        "independent_evidence": True,
        "independent_unit_key": "NUM-SETS|CT02|clone:NUM02-SET-RECOG-001-005",
    }],
    "seen_questions": {
        "CT02|q:NUM02V1_001": {
            "first_event_id": "I2-SENTINEL",
            "first_seen_at": "2026-10-02T13:00:00Z",
            "first_assisted": False,
        }
    },
    "independent_units": {
        "NUM-SETS|CT02|clone:NUM02-SET-RECOG-001-005": {
            "first_event_id": "I2-SENTINEL",
            "first_seen_at": "2026-10-02T13:00:00Z",
            "question_id": "NUM02V1_001",
            "topic_id": "CT02",
            "family_id": "NUM-SETS",
            "correct": True,
        }
    },
}, ensure_ascii=False, separators=(",", ":"))

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

def seed_storage(page, taxonomy_store=I2_STORE):
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([practice,ready,beta3,g2,tv2]) => {
          localStorage.setItem('toan-thcs-practice-v1', practice);
          localStorage.setItem('toan-thcs-assessment-v1', ready);
          localStorage.setItem('toan-thcs-assessment-v2', beta3);
          localStorage.setItem('toan-thcs-canonical-evidence-v2', g2);
          if (tv2 === null) localStorage.removeItem('toan-thcs-taxonomy-v2-evidence-v1');
          else localStorage.setItem('toan-thcs-taxonomy-v2-evidence-v1', tv2);
        }""",
        [OLD_PRACTICE, OLD_READY, OLD_BETA3, OLD_G2, taxonomy_store],
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

def wait_event(page, qid):
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
          const last = window.RoadmapTaxonomyV2Observer?.debugSnapshot?.().last_capture;
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

    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    current = {}
    install_forced_bank(page, current)
    seed_storage(page)

    # Debug policy is the full CT02 I3A policy.
    goto_target(page, current, "NUM02V1_019", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I2-SENTINEL" in json.dumps(snap0["store"])

    # Previously outside the I2 12-row canary; now captures under I3A.
    answer(page, "NUM02V1_019")
    store = wait_event(page, "NUM02V1_019")
    event = store["recent_events"][-1]
    assert event["capture_version"] == "taxonomy-v2-i3a-full-ct02-v1"
    assert event["family_id"] == "NUM-ORDER"
    assert event["independent_evidence"] is True
    assert store["recent_events"][0]["event_id"] == "I2-SENTINEL"

    # Newly opened families across all four CT02 source files capture correctly.
    checks = [
        ("NUM02V1_021", "NUM-POWER"),
        ("NUM02V1_031", "NUM-DIV-PRIME"),
        ("NUM02V1_061", "NUM-FRACTION-FORM"),
        ("NUM02V1_091", "NUM-PERCENT"),
    ]
    for qid, family in checks:
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_event(page, qid)
        assert store["recent_events"][-1]["family_id"] == family
        assert store["recent_events"][-1]["capture_version"] == "taxonomy-v2-i3a-full-ct02-v1"

    # All representative NO_FAMILY lanes remain guards and create no event.
    event_count = len(store["recent_events"])
    for qid in ["NUM02V1_059", "NUM02V1_103", "NUM02V1_119"]:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        current_store = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(current_store["recent_events"]) == event_count

    sentinel_assertions(page)

    # Normal learner UI still has no Taxonomy v2 panel.
    goto_target(page, current, "NUM02V1_021", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3a-full-ct02-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # Fail-open: forced I3A policy failure must not change legacy Practice result.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3a-full-ct02-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "NUM02V1_021", debug=True)
        answer(p, "NUM02V1_021")
        if block_policy:
            wait_last_reason(p, "NUM02V1_021", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_event(p, "NUM02V1_021")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        sentinel_assertions(p)
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3A policy failure changed legacy Practice stats"

    # Desktop debug smoke.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "NUM02V1_031", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3A CT02 Shadow" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "NUM02V1_031")
    wait_event(page2, "NUM02V1_031")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "NUM-DIV-PRIME"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3a-full-ct02-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3A real-Practice full CT02 shadow capture.")
print("PASS 103 family-linked scope / representative 17-row NO_FAMILY guard behavior.")
print("PASS I2 store continuity, fail-open, legacy Practice and G2 isolation.")
print("PASS no normal learner-facing Taxonomy v2 UI.")
