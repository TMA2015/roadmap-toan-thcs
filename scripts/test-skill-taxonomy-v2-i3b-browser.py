"""Browser QA for Skill Taxonomy v2 I3B CT02-CT03 shadow expansion."""
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3B browser QA")

TOPICS = {
    "CT02": {
        "manifest": "02-so-va-phep-tinh-v1.manifest.json",
        "page": "/kien-thuc/02-so-va-phep-tinh/bai-tap/",
    },
    "CT03": {
        "manifest": "03-ti-le-ti-le-thuc-v1.manifest.json",
        "page": "/kien-thuc/03-ti-le-ti-le-thuc/bai-tap/",
    },
}

TARGETS = {
    "NUM02V1_021": ("CT02", "02-so-va-phep-tinh-v1-01.json"),  # preserve CT02 active
    "RAT03V1_001": ("CT03", "03-ti-le-ti-le-thuc-v1-01.json"),  # RATIO-BASIC
    "RAT03V1_015": ("CT03", "03-ti-le-ti-le-thuc-v1-01.json"),  # RATIO-PROP
    "RAT03V1_031": ("CT03", "03-ti-le-ti-le-thuc-v1-02.json"),  # RATIO-SPLIT
    "RAT03V1_061": ("CT03", "03-ti-le-ti-le-thuc-v1-03.json"),  # RATIO-DIRECT
    "RAT03V1_071": ("CT03", "03-ti-le-ti-le-thuc-v1-03.json"),  # RATIO-INVERSE
    "RAT03V1_081": ("CT03", "03-ti-le-ti-le-thuc-v1-03.json"),  # RATIO-DISTINGUISH
    "RAT03V1_099": ("CT03", "03-ti-le-ti-le-thuc-v1-04.json"),  # NUM-PERCENT reuse
    "RAT03V1_105": ("CT03", "03-ti-le-ti-le-thuc-v1-04.json"),  # NO_FAMILY
    "RAT03V1_113": ("CT03", "03-ti-le-ti-le-thuc-v1-04.json"),  # NO_FAMILY
}

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

MANIFESTS = {
    topic: load_json("docs/assets/data/practice/" + info["manifest"])
    for topic, info in TOPICS.items()
}
SOURCE_CACHE = {}
QUESTION_BY_ID = {}
for qid, (topic, source_file) in TARGETS.items():
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
I3A_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{
        "schema": "taxonomy-v2-evidence-event-v1",
        "event_id": "I3A-SENTINEL",
        "capture_version": "taxonomy-v2-i3a-full-ct02-v1",
        "question_id": "NUM02V1_091",
        "topic_id": "CT02",
        "diagnostic_skill_id": "phan-tram",
        "family_id": "NUM-PERCENT",
        "family_layer": "KNTT-Core",
        "mapping_role": "ASSESSED_SKILL",
        "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
        "clone_family": None,
        "correct": True,
        "attempted_at": "2026-10-02T20:00:00Z",
        "source_file": "02-so-va-phep-tinh-v1-04.json",
        "source_blob": "sentinel",
        "source_registry_blob": "sentinel",
        "source_topic_policy_blob": "sentinel",
        "assisted": False,
        "assistance_kind": "none",
        "hints_used": 0,
        "full_solution_viewed": False,
        "practice_mode": "normal",
        "selected_index": 0,
        "independent_evidence": True,
        "independent_reason": "first_unseen_unit",
        "independent_unit_key": "NUM-PERCENT|CT02|q:NUM02V1_091",
    }],
    "seen_questions": {
        "CT02|q:NUM02V1_091": {
            "first_event_id": "I3A-SENTINEL",
            "first_seen_at": "2026-10-02T20:00:00Z",
            "first_assisted": False,
        }
    },
    "independent_units": {
        "NUM-PERCENT|CT02|q:NUM02V1_091": {
            "first_event_id": "I3A-SENTINEL",
            "first_seen_at": "2026-10-02T20:00:00Z",
            "question_id": "NUM02V1_091",
            "topic_id": "CT02",
            "diagnostic_skill_id": "phan-tram",
            "family_id": "NUM-PERCENT",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
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
        topic, source_file = TARGETS[target]
        manifest_name = TOPICS[topic]["manifest"]
        if name == manifest_name:
            manifest = deepcopy(MANIFESTS[topic])
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

def seed_storage(page, taxonomy_store=I3A_STORE):
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
    topic, _ = TARGETS[qid]
    current["target"] = qid
    url = BASE + TOPICS[topic]["page"]
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

    # CT03 debug policy loads and preserves prior CT02/I3A store content.
    goto_target(page, current, "RAT03V1_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3B CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3A-SENTINEL" in json.dumps(snap0["store"])

    # Newly opened CT03 families capture.
    checks = [
        ("RAT03V1_001", "RATIO-BASIC"),
        ("RAT03V1_015", "RATIO-PROP"),
        ("RAT03V1_031", "RATIO-SPLIT"),
        ("RAT03V1_061", "RATIO-DIRECT"),
        ("RAT03V1_071", "RATIO-INVERSE"),
        ("RAT03V1_081", "RATIO-DISTINGUISH"),
        ("RAT03V1_099", "NUM-PERCENT"),
    ]
    for qid, family in checks:
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3b-ct02-03-v1"
        assert event["topic_id"] == "CT03"
        assert event["family_id"] == family

    # Cross-topic NUM-PERCENT is not collapsed into CT02 evidence.
    store = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    assert "NUM-PERCENT|CT02|q:NUM02V1_091" in store["independent_units"]
    ct03_percent_units = [key for key in store["independent_units"] if key.startswith("NUM-PERCENT|CT03|")]
    assert ct03_percent_units, "CT03 NUM-PERCENT should have a distinct topic-scoped unit"

    # CT03 NO_FAMILY rows remain no-write guards.
    count_before = len(store["recent_events"])
    for qid in ["RAT03V1_105", "RAT03V1_113"]:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        current_store = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(current_store["recent_events"]) == count_before

    # CT02 remains active under I3B.
    goto_target(page, current, "NUM02V1_021")
    answer(page, "NUM02V1_021")
    store = wait_event(page, "NUM02V1_021")
    assert store["recent_events"][-1]["topic_id"] == "CT02"
    assert store["recent_events"][-1]["family_id"] == "NUM-POWER"
    assert store["recent_events"][-1]["capture_version"] == "taxonomy-v2-i3b-ct02-03-v1"

    sentinel_assertions(page)

    # Normal learner UI remains unchanged on both topics.
    goto_target(page, current, "RAT03V1_001", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3b-ct03-mobile.png"), full_page=True)
    goto_target(page, current, "NUM02V1_021", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert not errors, errors
    context.close()

    # Fail-open on CT03: legacy Practice result must match with/without I3B policy.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3b-ct02-03-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "RAT03V1_061", debug=True)
        answer(p, "RAT03V1_061")
        if block_policy:
            wait_last_reason(p, "RAT03V1_061", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_event(p, "RAT03V1_061")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        sentinel_assertions(p)
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3B policy failure changed legacy CT03 Practice stats"

    # Desktop debug smoke.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "RAT03V1_031", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3B CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "RAT03V1_031")
    wait_event(page2, "RAT03V1_031")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "RATIO-SPLIT"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3b-ct03-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3B real-Practice CT02-CT03 shadow capture.")
print("PASS seven CT03 family lanes + two CT03 NO_FAMILY guards.")
print("PASS CT02 evidence continuity and cross-topic NUM-PERCENT topic scoping.")
print("PASS fail-open, legacy Practice and G2 isolation; no normal learner UI.")
