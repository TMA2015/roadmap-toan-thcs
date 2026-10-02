"""Browser QA for Skill Taxonomy v2 I3D CT02-CT07 shadow expansion.

Focuses on CT05–CT07, completing the overlap band with the already-live
Canonical Evidence G2 observer while keeping stores and failure modes isolated.
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3D browser QA")

TOPICS = {
    "CT05": {
        "manifest": "05-7-hang-dang-thuc-v1.manifest.json",
        "page": "/kien-thuc/05-7-hang-dang-thuc/bai-tap/",
    },
    "CT06": {
        "manifest": "06-phan-tich-da-thuc-v1.manifest.json",
        "page": "/kien-thuc/06-phan-tich-da-thuc/bai-tap/",
    },
    "CT07": {
        "manifest": "07-phan-thuc-dai-so-v1.manifest.json",
        "page": "/kien-thuc/07-phan-thuc-dai-so/bai-tap/",
    },
}

TARGET_FAMILIES = {
    "ID05V1_001": ("CT05", "ID-STRUCTURE"),
    "FAC06V1_001": ("CT06", "FAC-COMMON"),
    "FAC06V1_021": ("CT06", "FAC-IDENTITY"),
    "FAC06V1_053": ("CT06", "FAC-GROUP"),
    "FAC06V1_065": ("CT06", "FAC-SPLIT-MIDDLE"),
    "FAC06V1_077": ("CT06", "FAC-COMBINE"),
    "FAC06V1_101": ("CT06", "EQ-ZERO-PRODUCT"),
    "RAT07V1_001": ("CT07", "RATEX-CONCEPT"),
    "RAT07V1_009": ("CT07", "RATEX-DOMAIN"),
    "RAT07V1_031": ("CT07", "RATEX-SIMPLIFY"),
    "RAT07V1_071": ("CT07", "RATEX-ADD-SUB"),
    "RAT07V1_093": ("CT07", "RATEX-MULT-DIV"),
    "RAT07V1_115": ("CT07", "RATEX-EVALUATE"),
}
EXTRA_G2 = {"ID05V1_023": "CT05"}
GUARDS = {"ID05V1_091": "CT05", "FAC06V1_093": "CT06", "RAT07V1_109": "CT07"}
ALL_TARGETS = list(TARGET_FAMILIES) + list(EXTRA_G2) + list(GUARDS)

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

POLICIES = {
    topic: load_json(f"docs/assets/data/curriculum/taxonomy-v2-runtime/{topic.lower()}-r1.json")
    for topic in TOPICS
}
ROW_BY_ID = {}
for topic, policy in POLICIES.items():
    for row in policy["rows"]:
        ROW_BY_ID[row["question_id"]] = row

MANIFESTS = {
    topic: load_json("docs/assets/data/practice/" + meta["manifest"])
    for topic, meta in TOPICS.items()
}
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

I3C_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{
        "schema": "taxonomy-v2-evidence-event-v1",
        "event_id": "I3C-SENTINEL",
        "capture_version": "taxonomy-v2-i3c-ct02-04-v1",
        "question_id": "ALG04V2_053",
        "topic_id": "CT04",
        "diagnostic_skill_id": "nhan-bieu-thuc",
        "family_id": "ALG-MULTIPLY",
        "family_layer": "KNTT-Core",
        "mapping_role": "ASSESSED_SKILL",
        "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
        "clone_family": None,
        "correct": True,
        "attempted_at": "2026-10-02T16:50:00Z",
        "source_file": "04-bieu-thuc-dai-so-v2-02.json",
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
        "independent_unit_key": "ALG-MULTIPLY|CT04|q:ALG04V2_053",
    }],
    "seen_questions": {
        "CT04|q:ALG04V2_053": {
            "first_event_id": "I3C-SENTINEL",
            "first_seen_at": "2026-10-02T16:50:00Z",
            "first_assisted": False,
        }
    },
    "independent_units": {
        "ALG-MULTIPLY|CT04|q:ALG04V2_053": {
            "first_event_id": "I3C-SENTINEL",
            "first_seen_at": "2026-10-02T16:50:00Z",
            "question_id": "ALG04V2_053",
            "topic_id": "CT04",
            "diagnostic_skill_id": "nhan-bieu-thuc",
            "family_id": "ALG-MULTIPLY",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
            "correct": True,
        }
    },
}, ensure_ascii=False, separators=(",", ":"))

def topic_for(qid):
    if qid in TARGET_FAMILIES:
        return TARGET_FAMILIES[qid][0]
    if qid in EXTRA_G2:
        return EXTRA_G2[qid]
    return GUARDS[qid]

def install_forced_bank(page, current):
    def handler(route):
        name = route.request.url.split("/")[-1].split("?")[0]
        qid = current.get("target")
        if not qid:
            route.continue_()
            return
        topic = topic_for(qid)
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

def seed_storage(page, taxonomy_store=I3C_STORE):
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
    topic = topic_for(qid)
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

    # Debug policy loads on the newly opened band and preserves accepted I3C evidence.
    goto_target(page, current, "ID05V1_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3D CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3C-SENTINEL" in json.dumps(snap0["store"])

    # Every family lane newly opened in CT05–CT07 can capture.
    for qid, (topic, family) in TARGET_FAMILIES.items():
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_taxonomy_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3d-ct02-07-v1"
        assert event["topic_id"] == topic
        assert event["family_id"] == family

    # Representative G2 overlap on each new topic writes to both isolated stores.
    for qid in ["ID05V1_023", "FAC06V1_021", "RAT07V1_009"]:
        goto_target(page, current, qid)
        answer(page, qid)
        tv2 = wait_taxonomy_event(page, qid)
        g2 = wait_canonical_event(page, qid)
        assert tv2["recent_events"][-1]["question_id"] == qid
        assert g2["recent_events"][-1]["question_id"] == qid
        assert tv2["recent_events"][-1]["event_id"] != g2["recent_events"][-1]["event_id"]
        assert "I3C-SENTINEL" in json.dumps(tv2)

    # Representative NO_FAMILY rows from CT05, CT06 and CT07 remain no-write guards.
    before = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    count_before = len(before["recent_events"])
    for qid in GUARDS:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        now = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(now["recent_events"]) == count_before

    # Normal learner UI remains unchanged.
    goto_target(page, current, "RAT07V1_031", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert page.locator("[data-canonical-evidence-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3d-ct07-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # I3D fail-open on a G2-covered CT05 row: legacy Practice and G2 still work.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3d-ct02-07-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "ID05V1_023", debug=True)
        answer(p, "ID05V1_023")
        wait_canonical_event(p, "ID05V1_023")
        if block_policy:
            wait_last_reason(p, "ID05V1_023", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_taxonomy_event(p, "ID05V1_023")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is not None
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3D policy failure changed legacy CT05 Practice stats"

    # Desktop smoke on CT06.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "FAC06V1_077", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3D CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "FAC06V1_077")
    wait_taxonomy_event(page2, "FAC06V1_077")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "FAC-COMBINE"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3d-ct06-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3D real-Practice CT05-CT07 shadow capture.")
print("PASS all 13 newly opened family lanes + representative NO_FAMILY guards.")
print("PASS I3C evidence continuity and G2 dual-shadow coexistence across CT05-CT07.")
print("PASS fail-open preserves legacy Practice and G2; normal learner UI unchanged.")
