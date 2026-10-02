"""Browser QA for Skill Taxonomy v2 I3F CT02-CT20 shadow expansion.

Focuses on the academically closed S3 CT13-CT20 batch. Canonical Evidence G2
remains frozen to CT04-CT07 and must not expand into these topics.
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3F browser QA")

TOPICS = {
    "CT13": {"slug": "13-goc-va-duong-thang", "manifest": "13-goc-va-duong-thang-v1.manifest.json"},
    "CT14": {"slug": "14-tam-giac", "manifest": "14-tam-giac-v1.manifest.json"},
    "CT15": {"slug": "15-duong-dong-quy", "manifest": "15-duong-dong-quy-v1.manifest.json"},
    "CT16": {"slug": "16-tu-giac", "manifest": "16-tu-giac-v1.manifest.json"},
    "CT17": {"slug": "17-thales-dong-dang", "manifest": "17-thales-dong-dang-v1.manifest.json"},
    "CT18": {"slug": "18-he-thuc-luong", "manifest": "18-he-thuc-luong-v1.manifest.json"},
    "CT19": {"slug": "19-duong-tron", "manifest": "19-duong-tron-v1.manifest.json"},
    "CT20": {"slug": "20-hinh-hoc-tong-hop", "manifest": "20-hinh-hoc-tong-hop-v1.manifest.json"},
}
for meta in TOPICS.values():
    meta["page"] = "/kien-thuc/" + meta["slug"] + "/bai-tap/"

TARGET_FAMILIES = {
    "GEO13V1_001": ("CT13", "GEO-LINE-FOUND"),
    "GEO13V1_021": ("CT13", "GEO-ANGLE-REL"),
    "GEO13V1_075": ("CT13", "GEO-TRANSVERSAL"),
    "GEO13V1_099": ("CT13", "GEO-PARALLEL"),
    "GEO13V1_149": ("CT13", "GEO-PROOF-BASIC"),
    "TRI14V1_001": ("CT14", "TRI-SPECIAL"),
    "TRI14V1_009": ("CT14", "GEO-PLANE-MEASURE"),
    "TRI14V1_015": ("CT14", "TRI-ANGLE-SIDE"),
    "TRI14V1_075": ("CT14", "RIGHT-PYTHAGORE"),
    "TRI14V1_091": ("CT14", "TRI-CONGRUENCE"),
    "TRI14V1_125": ("CT14", "TRI-PERPBISECTOR"),
    "CTR15V1_001": ("CT15", "TRI-CENTROID"),
    "CTR15V1_029": ("CT15", "TRI-ORTHOCENTER"),
    "CTR15V1_053": ("CT15", "TRI-INCENTER"),
    "CTR15V1_079": ("CT15", "TRI-PERPBISECTOR"),
    "CTR15V1_087": ("CT15", "TRI-CIRCUMCENTER"),
    "CTR15V1_113": ("CT15", "TRI-CENTERS"),
    "QUAD16V1_001": ("CT16", "QUAD-TRAPEZOID"),
    "QUAD16V1_025": ("CT16", "QUAD-PARALLELOGRAM"),
    "QUAD16V1_047": ("CT16", "QUAD-RECTANGLE"),
    "QUAD16V1_067": ("CT16", "QUAD-RHOMBUS"),
    "QUAD16V1_087": ("CT16", "QUAD-SQUARE-HIER"),
    "GEO17V1_001": ("CT17", "SIM-THALES"),
    "GEO17V1_004": ("CT17", "SIM-MID-BISECTOR"),
    "GEO17V1_005": ("CT17", "SIM-CRITERIA"),
    "GEO17V1_010": ("CT17", "SIM-LENGTH"),
    "GEO17V1_011": ("CT17", "SIM-RATIO-EXT"),
    "GEO17V1_014": ("CT17", "SIM-CHAIN"),
    "GEO18V1_001": ("CT18", "RIGHT-PYTHAGORE"),
    "GEO18V1_004": ("CT18", "RIGHT-ALTITUDE"),
    "GEO18V1_007": ("CT18", "RIGHT-TRIG-RATIO"),
    "GEO18V1_011": ("CT18", "RIGHT-SOLVE"),
    "GEO18V1_013": ("CT18", "RIGHT-APPLICATION"),
    "GEO19V1_001": ("CT19", "CIRCLE-ANGLES"),
    "GEO19V1_004": ("CT19", "CIRCLE-CHORD-ARC"),
    "GEO19V1_005": ("CT19", "CIRCLE-TANGENT"),
    "GEO19V1_007": ("CT19", "CIRCLE-CYCLIC"),
    "GEO19V1_009": ("CT19", "CIRCLE-POWER"),
    "GEO19V1_013": ("CT19", "CIRCLE-MEASURE"),
    "CIR19V1_133": ("CT19", "CIRCLE-POSITION"),
    "CIR19V1_139": ("CT19", "TRI-CIRCUMCENTER"),
    "CIR19V1_142": ("CT19", "TRI-INCENTER"),
    "CIR19V1_145": ("CT19", "GEO-REGULAR-SYMM"),
    "GEO20V1_002": ("CT20", "SIM-CHAIN"),
    "GEO20V1_003": ("CT20", "GEO-SYNTHESIS"),
    "GEO20V1_007": ("CT20", "CIRCLE-TANGENT"),
    "GEO20V1_009": ("CT20", "SOLID-PRISM"),
    "SYN20V1_121": ("CT20", "TRI-SPECIAL"),
    "SYN20V1_124": ("CT20", "QUAD-SQUARE-HIER"),
    "SYN20V1_127": ("CT20", "GEO-REGULAR-SYMM"),
    "SYN20V1_133": ("CT20", "GEO-PLANE-MEASURE"),
    "SYN20V1_160": ("CT20", "SOLID-PYRAMID"),
    "SYN20V1_169": ("CT20", "SOLID-CYL-CONE"),
    "SYN20V1_187": ("CT20", "SOLID-SPHERE"),
}
EXTRA_CLONES = {"GEO13V1_002": ("CT13", "GEO-LINE-FOUND")}
GUARDS = {"GEO20V1_001": "CT20", "GEO20V1_118": "CT20"}
ALL_TARGETS = list(TARGET_FAMILIES) + list(EXTRA_CLONES) + list(GUARDS)

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
for qid in ALL_TARGETS:
    row = ROW_BY_ID[qid]
    source_file = row["source_file"]
    if source_file not in SOURCE_CACHE:
        SOURCE_CACHE[source_file] = load_json("docs/assets/data/practice/" + source_file)
    q = next((item for item in SOURCE_CACHE[source_file]["questions"] if item["id"] == qid), None)
    if not q:
        raise AssertionError("Missing source question " + qid)
    if not isinstance(q.get("options"), list):
        raise AssertionError("Browser QA requires selectable options for " + qid)
    QUESTION_BY_ID[qid] = q

OLD_PRACTICE = json.dumps({
    "questions": {"LEGACY_Q": {"attempted": 7, "correct": 5}},
    "tags": {"legacy": {"attempted": 7, "correct": 5}},
    "observed_signals": [],
}, ensure_ascii=False, separators=(",", ":"))
OLD_READY = '{"assessments":{"LEGACY_READY":{"attempts":[{"correct":3,"total":4}]}}'
OLD_BETA3 = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","assessed_skill":"old-skill","correct":true}]}'

I3E_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [{
        "schema": "taxonomy-v2-evidence-event-v1",
        "event_id": "I3E-OWNER",
        "capture_version": "taxonomy-v2-i3e-ct02-12-v1",
        "question_id": "FUN10V1_004",
        "topic_id": "CT10",
        "diagnostic_skill_id": "tinh-gia-tri-ham",
        "family_id": "FUNC-BASIC",
        "family_layer": "KNTT-Core",
        "mapping_role": "ASSESSED_SKILL",
        "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
        "clone_family": None,
        "correct": True,
        "attempted_at": "2026-10-03T00:30:00+07:00",
        "source_file": "10-ham-so-do-thi-v1-01.json",
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
        "independent_unit_key": "FUNC-BASIC|CT10|q:FUN10V1_004",
    }],
    "seen_questions": {
        "CT10|q:FUN10V1_004": {
            "first_event_id": "I3E-OWNER",
            "first_seen_at": "2026-10-03T00:30:00+07:00",
            "first_assisted": False,
        }
    },
    "independent_units": {
        "FUNC-BASIC|CT10|q:FUN10V1_004": {
            "first_event_id": "I3E-OWNER",
            "first_seen_at": "2026-10-03T00:30:00+07:00",
            "question_id": "FUN10V1_004",
            "topic_id": "CT10",
            "diagnostic_skill_id": "tinh-gia-tri-ham",
            "family_id": "FUNC-BASIC",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_FINAL_ANSWER_ONLY",
            "correct": True,
        }
    },
}, ensure_ascii=False, separators=(",", ":"))

def topic_for(qid):
    if qid in TARGET_FAMILIES:
        return TARGET_FAMILIES[qid][0]
    if qid in EXTRA_CLONES:
        return EXTRA_CLONES[qid][0]
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

def seed_storage(page, taxonomy_store=I3E_STORE):
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

    # Debug policy loads on CT13 and preserves the accepted I3E owner event.
    goto_target(page, current, "GEO13V1_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3F CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3E-OWNER" in json.dumps(snap0["store"])

    # Every family lane newly opened in CT13-CT20 can capture.
    for qid, (topic, family) in TARGET_FAMILIES.items():
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_taxonomy_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3f-ct02-20-v1"
        assert event["topic_id"] == topic
        assert event["family_id"] == family

    # S3 clone-family repeat is captured but not counted independently.
    goto_target(page, current, "GEO13V1_002", debug=True)
    answer(page, "GEO13V1_002")
    store = wait_taxonomy_event(page, "GEO13V1_002")
    clone_event = store["recent_events"][-1]
    assert clone_event["family_id"] == "GEO-LINE-FOUND"
    assert clone_event["independent_evidence"] is False
    assert clone_event["independent_reason"] == "clone_family_repeat"

    # CT20 NO_FAMILY rows remain no-write guards.
    count_before = len(store["recent_events"])
    for qid in GUARDS:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        now = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(now["recent_events"]) == count_before

    # G2 remains frozen: S3 work creates no G2 store.
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None

    # Normal learner UI remains unchanged.
    goto_target(page, current, "GEO19V1_005", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert page.locator("[data-canonical-evidence-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3f-ct19-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # I3F fail-open on CT16: legacy Practice still works and G2 stays absent.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3f-ct02-20-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "QUAD16V1_025", debug=True)
        answer(p, "QUAD16V1_025")
        if block_policy:
            wait_last_reason(p, "QUAD16V1_025", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_taxonomy_event(p, "QUAD16V1_025")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3F policy failure changed legacy CT16 Practice stats"

    # Desktop smoke on CT20.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "SYN20V1_169", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3F CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "SYN20V1_169")
    wait_taxonomy_event(page2, "SYN20V1_169")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "SOLID-CYL-CONE"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3f-ct20-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3F real-Practice CT13-CT20 shadow capture.")
print("PASS all 44 newly opened S3 family lanes + CT20 representative NO_FAMILY guards.")
print("PASS I3E owner evidence continuity and S3 clone-family de-duplication.")
print("PASS G2 stays frozen to CT04-CT07; fail-open preserves legacy Practice; no normal learner UI.")
