"""Browser QA for Skill Taxonomy v2 I3C CT02-CT04 shadow expansion.

Focuses on the newly opened CT04 lane, including coexistence with the already-live
Canonical Evidence G2 observer.
"""
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3C browser QA")

TOPIC = {
    "manifest": "04-bieu-thuc-dai-so-v2.manifest.json",
    "page": "/kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
}

TARGET_FAMILIES = {
    "ALG04V2_001": "ALG-STRUCTURE",
    "ALG04V2_012": "ALG-SIMPLIFY-ADD-SUB",
    "ALG04V2_051": "ALG-MULTIPLY",
    "ALG04V2_077": "ALG-EVALUATE",
    "ALG04V2_089": "RATEX-DOMAIN",
    "ALG04V2_111": "ALG-MODEL-EXPR",
    "ALG04V2_121": "ALG-DIV-MONOMIAL",
}
G2_OVERLAP = "ALG04V2_013"
GUARDS = ["ALG04V2_099", "ALG04V2_110"]
ALL_TARGETS = list(TARGET_FAMILIES) + [G2_OVERLAP] + GUARDS

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

CT04_POLICY = load_json("docs/assets/data/curriculum/taxonomy-v2-runtime/ct04-r1.json")
ROW_BY_ID = {row["question_id"]: row for row in CT04_POLICY["rows"]}
MANIFEST = load_json("docs/assets/data/practice/" + TOPIC["manifest"])

SOURCE_CACHE = {}
QUESTION_BY_ID = {}
for qid in ALL_TARGETS:
    row = ROW_BY_ID[qid]
    source_file = row["source_file"]
    if source_file not in SOURCE_CACHE:
        SOURCE_CACHE[source_file] = load_json("docs/assets/data/practice/" + source_file)
    q = next((item for item in SOURCE_CACHE[source_file]["questions"] if item["id"] == qid), None)
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

I3B_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{
        "schema": "taxonomy-v2-evidence-event-v1",
        "event_id": "I3B-SENTINEL",
        "capture_version": "taxonomy-v2-i3b-ct02-03-v1",
        "question_id": "RAT03V1_088",
        "topic_id": "CT03",
        "diagnostic_skill_id": "phan-biet-thuan-nghich",
        "family_id": "RATIO-DISTINGUISH",
        "family_layer": "KNTT-Core",
        "mapping_role": "ASSESSED_SKILL",
        "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
        "clone_family": None,
        "correct": True,
        "attempted_at": "2026-10-02T16:00:00Z",
        "source_file": "03-ti-le-ti-le-thuc-v1-03.json",
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
        "independent_unit_key": "RATIO-DISTINGUISH|CT03|q:RAT03V1_088",
    }],
    "seen_questions": {
        "CT03|q:RAT03V1_088": {
            "first_event_id": "I3B-SENTINEL",
            "first_seen_at": "2026-10-02T16:00:00Z",
            "first_assisted": False,
        }
    },
    "independent_units": {
        "RATIO-DISTINGUISH|CT03|q:RAT03V1_088": {
            "first_event_id": "I3B-SENTINEL",
            "first_seen_at": "2026-10-02T16:00:00Z",
            "question_id": "RAT03V1_088",
            "topic_id": "CT03",
            "diagnostic_skill_id": "phan-biet-thuan-nghich",
            "family_id": "RATIO-DISTINGUISH",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
            "correct": True,
        }
    },
}, ensure_ascii=False, separators=(",", ":"))

def install_forced_bank(page, current):
    def handler(route):
        name = route.request.url.split("/")[-1].split("?")[0]
        qid = current.get("target")
        if not qid:
            route.continue_()
            return
        source_file = ROW_BY_ID[qid]["source_file"]
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
            source["questions"] = [QUESTION_BY_ID[qid]]
            route.fulfill(status=200, content_type="application/json",
                          body=json.dumps(source, ensure_ascii=False))
            return
        route.continue_()
    page.route("**/assets/data/practice/*.json", handler)

def seed_storage(page, taxonomy_store=I3B_STORE):
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([practice,ready,beta3,tv2]) => {
          localStorage.setItem('toan-thcs-practice-v1', practice);
          localStorage.setItem('toan-thcs-assessment-v1', ready);
          localStorage.setItem('toan-thcs-assessment-v2', beta3);
          localStorage.removeItem('toan-thcs-canonical-evidence-v2');
          if (tv2 === null) localStorage.removeItem('toan-thcs-taxonomy-v2-evidence-v1');
          else localStorage.setItem('toan-thcs-taxonomy-v2-evidence-v1', tv2);
        }""",
        [OLD_PRACTICE, OLD_READY, OLD_BETA3, taxonomy_store],
    )

def goto_target(page, current, qid, debug=False):
    current["target"] = qid
    url = BASE + TOPIC["page"]
    if debug:
        url += "?canonicalDebug=1&taxonomyV2Debug=1"
    page.goto(url, wait_until="domcontentloaded")
    page.locator(".practice-engine").wait_for(timeout=30000)
    page.locator(".practice-question").wait_for(timeout=30000)
    assert page.locator(".practice-option").count() == len(QUESTION_BY_ID[qid]["options"])
    if not debug:
        assert page.locator("[data-taxonomy-v2-debug]").count() == 0
        assert page.locator("[data-canonical-evidence-debug]").count() == 0

def answer(page, qid, choice=None):
    q = QUESTION_BY_ID[qid]
    original = q["answer"] if choice is None else choice
    page.locator(f'.practice-option[data-original-index="{original}"]').click()
    page.locator(".practice-feedback").wait_for(timeout=10000)

def wait_taxonomy_event(page, qid):
    page.wait_for_function(
        """qid => {
          const s = JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1') || 'null');
          return s && Array.isArray(s.recent_events) && s.recent_events.at(-1)?.question_id === qid;
        }""",
        arg=qid,
        timeout=10000,
    )
    return page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")

def wait_canonical_event(page, qid):
    page.wait_for_function(
        """qid => {
          const s = JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v2') || 'null');
          return s && Array.isArray(s.recent_events) && s.recent_events.at(-1)?.question_id === qid;
        }""",
        arg=qid,
        timeout=10000,
    )
    return page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v2'))")

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

    # Debug policy loads on CT04 and preserves the accepted I3B store.
    goto_target(page, current, "ALG04V2_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3C CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3B-SENTINEL" in json.dumps(snap0["store"])

    # All seven newly opened CT04 family lanes can capture.
    for qid, family in TARGET_FAMILIES.items():
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_taxonomy_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3c-ct02-04-v1"
        assert event["topic_id"] == "CT04"
        assert event["family_id"] == family

    # A CT04 question already captured by G2 is also captured by I3C, in separate stores.
    goto_target(page, current, G2_OVERLAP)
    answer(page, G2_OVERLAP)
    tv2 = wait_taxonomy_event(page, G2_OVERLAP)
    g2 = wait_canonical_event(page, G2_OVERLAP)
    assert tv2["recent_events"][-1]["family_id"] == "ALG-SIMPLIFY-ADD-SUB"
    assert g2["recent_events"][-1]["canonical_skill_id"] == "hang-tu-dong-dang"
    assert tv2["recent_events"][-1]["event_id"] != g2["recent_events"][-1]["event_id"]
    assert "I3B-SENTINEL" in json.dumps(tv2)

    # CT04 NO_FAMILY rows remain no-write guards.
    count_before = len(tv2["recent_events"])
    for qid in GUARDS:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        current_store = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(current_store["recent_events"]) == count_before

    sentinel_assertions(page)

    # Normal learner UI remains unchanged.
    goto_target(page, current, "ALG04V2_089", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert page.locator("[data-canonical-evidence-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3c-ct04-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # I3C fail-open: legacy Practice and G2 behavior are unchanged if I3C policy fails.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3c-ct02-04-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, G2_OVERLAP, debug=True)
        answer(p, G2_OVERLAP)
        wait_canonical_event(p, G2_OVERLAP)
        if block_policy:
            wait_last_reason(p, G2_OVERLAP, "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_taxonomy_event(p, G2_OVERLAP)
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        canonical = p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')")
        sentinel_assertions(p)
        assert canonical is not None
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3C policy failure changed legacy CT04 Practice stats"

    # Desktop debug smoke.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "ALG04V2_111", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3C CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "ALG04V2_111")
    wait_taxonomy_event(page2, "ALG04V2_111")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "ALG-MODEL-EXPR"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3c-ct04-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3C real-Practice CT04 shadow capture.")
print("PASS seven CT04 family lanes + CT04 NO_FAMILY guards.")
print("PASS I3B store continuity and G2 dual-shadow store isolation.")
print("PASS fail-open leaves legacy Practice and G2 behavior intact; no normal learner UI.")
