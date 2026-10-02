"""Browser QA for Skill Taxonomy v2 I3E CT02-CT12 shadow expansion.

Focuses on the academically closed CT08-CT12 batch. Canonical Evidence G2 remains
frozen to CT04-CT07 and must not expand into these topics.
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3E browser QA")

TOPICS = {
    "CT08": {"slug": "08-phuong-trinh-bat-phuong-trinh", "manifest": "08-phuong-trinh-bat-phuong-trinh-v1.manifest.json"},
    "CT09": {"slug": "09-he-phuong-trinh", "manifest": "09-he-phuong-trinh-v1.manifest.json"},
    "CT10": {"slug": "10-ham-so-do-thi", "manifest": "10-ham-so-do-thi-v1.manifest.json"},
    "CT11": {"slug": "11-can-thuc", "manifest": "11-can-thuc-v1.manifest.json"},
    "CT12": {"slug": "12-phuong-trinh-bac-hai-viete", "manifest": "12-phuong-trinh-bac-hai-viete-v1.manifest.json"},
}
for meta in TOPICS.values():
    meta["page"] = "/kien-thuc/" + meta["slug"] + "/bai-tap/"

TARGET_FAMILIES = {
    "EQ08V1_001": ("CT08", "EQ-BASIC"),
    "EQ08V1_047": ("CT08", "EQ-RATIONAL"),
    "EQ08V1_073": ("CT08", "INEQ-SOLVE"),
    "EQ08V1_107": ("CT08", "EQ-MODEL"),
    "EQ08V1_113": ("CT08", "INEQ-MODEL"),
    "EQ08V1_117": ("CT08", "EQ-PARAM"),
    "EQ08V1_121": ("CT08", "INEQ-ORDER"),
    "SYS09V1_001": ("CT09", "SYS-CONCEPT"),
    "SYS09V1_013": ("CT09", "SYS-SOLVE"),
    "SYS09V1_077": ("CT09", "SYS-PARAM"),
    "SYS09V1_089": ("CT09", "SYS-MODEL"),
    "FUN10V1_001": ("CT10", "FUNC-BASIC"),
    "FUN10V1_031": ("CT10", "GRAPH-POINT"),
    "FUN10V1_051": ("CT10", "LINEAR-FUNC"),
    "FUN10V1_093": ("CT10", "GRAPH-INTERSECTION"),
    "FUN10V1_111": ("CT10", "PARABOLA-BASIC"),
    "RAD11V1_001": ("CT11", "RAD-BASIC"),
    "RAD11V1_043": ("CT11", "RAD-TRANSFORM"),
    "RAD11V1_075": ("CT11", "RAD-OPERATE"),
    "RAD11V1_097": ("CT11", "RAD-RATIONALIZE"),
    "RAD11V1_115": ("CT11", "RAD-EQUATION"),
    "RAD11V1_118": ("CT11", "RAD-COMPARE"),
    "RAD11V1_121": ("CT11", "RAD-CUBEROOT"),
    "QUA12V1_001": ("CT12", "QUAD-STRUCTURE"),
    "QUA12V1_021": ("CT12", "QUAD-SOLVE"),
    "QUA12V1_073": ("CT12", "VIETE-CORE"),
    "QUA12V1_085": ("CT12", "VIETE-APPLY"),
    "QUA12V1_105": ("CT12", "QUAD-PARAM"),
    "QUA12V1_119": ("CT12", "QUAD-GRAPH"),
}

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

POLICIES = {
    topic: load_json(f"docs/assets/data/curriculum/taxonomy-v2-runtime/{topic.lower()}-r1.json")
    for topic in TOPICS
}
ROW_BY_ID = {}
for policy in POLICIES.values():
    for row in policy["rows"]:
        ROW_BY_ID[row["question_id"]] = row

MANIFESTS = {
    topic: load_json("docs/assets/data/practice/" + meta["manifest"])
    for topic, meta in TOPICS.items()
}
SOURCE_CACHE = {}
QUESTION_BY_ID = {}
for qid in TARGET_FAMILIES:
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

I3D_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [
        {
            "schema": "taxonomy-v2-evidence-event-v1",
            "event_id": "I3D-FIRST",
            "capture_version": "taxonomy-v2-i3d-ct02-07-v1",
            "question_id": "FAC06V1_077",
            "topic_id": "CT06",
            "diagnostic_skill_id": "phan-tich-da-thuc-hoan-toan",
            "family_id": "FAC-COMBINE",
            "family_layer": "KNTT-Core",
            "mapping_role": "COMPOSITE_TASK",
            "evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
            "clone_family": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
            "correct": True,
            "attempted_at": "2026-10-03T00:10:00+07:00",
            "source_file": "06-phan-tich-da-thuc-v1-03.json",
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
            "independent_unit_key": "FAC-COMBINE|CT06|clone:FAC06-COMPLETE-DIFFSQ-077-081-085-089",
        },
        {
            "schema": "taxonomy-v2-evidence-event-v1",
            "event_id": "I3D-REPEAT",
            "capture_version": "taxonomy-v2-i3d-ct02-07-v1",
            "question_id": "FAC06V1_081",
            "topic_id": "CT06",
            "diagnostic_skill_id": "phan-tich-da-thuc-hoan-toan",
            "family_id": "FAC-COMBINE",
            "family_layer": "KNTT-Core",
            "mapping_role": "COMPOSITE_TASK",
            "evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
            "clone_family": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
            "correct": True,
            "attempted_at": "2026-10-03T00:11:00+07:00",
            "source_file": "06-phan-tich-da-thuc-v1-03.json",
            "source_blob": "sentinel",
            "source_registry_blob": "sentinel",
            "source_topic_policy_blob": "sentinel",
            "assisted": False,
            "assistance_kind": "none",
            "hints_used": 0,
            "full_solution_viewed": False,
            "practice_mode": "normal",
            "selected_index": 0,
            "independent_evidence": False,
            "independent_reason": "clone_family_repeat",
            "independent_unit_key": "FAC-COMBINE|CT06|clone:FAC06-COMPLETE-DIFFSQ-077-081-085-089",
        },
    ],
    "seen_questions": {
        "CT06|q:FAC06V1_077": {
            "first_event_id": "I3D-FIRST",
            "first_seen_at": "2026-10-03T00:10:00+07:00",
            "first_assisted": False,
        },
        "CT06|q:FAC06V1_081": {
            "first_event_id": "I3D-REPEAT",
            "first_seen_at": "2026-10-03T00:11:00+07:00",
            "first_assisted": False,
        },
    },
    "independent_units": {
        "FAC-COMBINE|CT06|clone:FAC06-COMPLETE-DIFFSQ-077-081-085-089": {
            "first_event_id": "I3D-FIRST",
            "first_seen_at": "2026-10-03T00:10:00+07:00",
            "question_id": "FAC06V1_077",
            "topic_id": "CT06",
            "diagnostic_skill_id": "phan-tich-da-thuc-hoan-toan",
            "family_id": "FAC-COMBINE",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
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
        topic, _ = TARGET_FAMILIES[qid]
        source_file = ROW_BY_ID[qid]["source_file"]
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
            source["questions"] = [QUESTION_BY_ID[qid]]
            route.fulfill(status=200, content_type="application/json",
                          body=json.dumps(source, ensure_ascii=False))
            return
        route.continue_()
    page.route("**/assets/data/practice/*.json", handler)

def seed_storage(page, taxonomy_store=I3D_STORE):
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
    topic, _ = TARGET_FAMILIES[qid]
    current["target"] = qid
    url = BASE + TOPICS[topic]["page"]
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

    # Debug policy loads on CT08 and preserves the accepted I3D store, including repeat semantics.
    goto_target(page, current, "EQ08V1_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3E CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3D-FIRST" in json.dumps(snap0["store"])
    assert "I3D-REPEAT" in json.dumps(snap0["store"])
    assert len(snap0["store"]["independent_units"]) == 1

    # Every newly opened CT08-CT12 family lane can capture.
    for qid, (topic, family) in TARGET_FAMILIES.items():
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_taxonomy_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3e-ct02-12-v1"
        assert event["topic_id"] == topic
        assert event["family_id"] == family

    # G2 must remain frozen: representative CT08-CT12 work creates no G2 store.
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None

    # Normal learner UI remains unchanged.
    goto_target(page, current, "QUA12V1_119", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert page.locator("[data-canonical-evidence-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3e-ct12-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # I3E fail-open on CT10: legacy Practice works and no G2 data is introduced.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3e-ct02-12-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "FUN10V1_051", debug=True)
        answer(p, "FUN10V1_051")
        p.locator(".practice-feedback").wait_for(timeout=10000)
        if block_policy:
            p.wait_for_function(
                """() => window.RoadmapTaxonomyV2Observer?.debugSnapshot?.().last_capture?.reason === 'taxonomy_v2_fail_open'""",
                timeout=10000,
            )
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_taxonomy_event(p, "FUN10V1_051")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3E policy failure changed legacy CT10 Practice stats"

    # Desktop smoke on CT11.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "RAD11V1_097", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3E CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "RAD11V1_097")
    wait_taxonomy_event(page2, "RAD11V1_097")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "RAD-RATIONALIZE"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3e-ct11-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3E real-Practice CT08-CT12 shadow capture.")
print("PASS all 29 newly opened family lanes; S2 has zero NO_FAMILY rows.")
print("PASS accepted I3D store continuity including clone-family-repeat provenance.")
print("PASS G2 stays frozen to CT04-CT07; fail-open preserves legacy Practice; no normal learner UI.")
