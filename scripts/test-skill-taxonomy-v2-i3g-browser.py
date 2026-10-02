"""Browser QA for Skill Taxonomy v2 I3G full CT02-CT25 shadow rollout.

Focuses on the final reviewed CT21-CT25 batch, while preserving the accepted
I3F store and keeping Canonical Evidence G2 frozen to CT04-CT07.
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
    raise RuntimeError("Chromium/Chrome required for Taxonomy v2 I3G browser QA")

TOPICS = {
    "CT21": {"slug": "21-thong-ke", "manifest": "21-thong-ke-v1.manifest.json"},
    "CT22": {"slug": "22-dai-luong-dac-trung", "manifest": "22-dai-luong-dac-trung-v1.manifest.json"},
    "CT23": {"slug": "23-xac-suat", "manifest": "23-xac-suat-v1.manifest.json"},
    "CT24": {"slug": "24-bai-toan-thuc-te", "manifest": "24-bai-toan-thuc-te-v1.manifest.json"},
    "CT25": {"slug": "25-tong-hop-on-thi-10", "manifest": "25-tong-hop-on-thi-10-v1.manifest.json"},
}
for meta in TOPICS.values():
    meta["page"] = "/kien-thuc/" + meta["slug"] + "/bai-tap/"

TARGET_FAMILIES = {
    "STA21V1_001": ("CT21", "STAT-DATA"),
    "STA21V1_021": ("CT21", "STAT-QUALITY"),
    "STA21V1_121": ("CT21", "STAT-CHART-READ"),
    "STA21V1_041": ("CT21", "STAT-FREQUENCY"),
    "STA21V1_081": ("CT21", "STAT-REPRESENT"),
    "STA21V1_137": ("CT21", "STAT-ADVANCED-DATA"),
    "STA21V1_101": ("CT21", "STAT-INFER"),
    "STAT22V1_001": ("CT22", "STAT-CENTER"),
    "STAT22V1_051": ("CT22", "STAT-SPREAD-OUTLIER"),
    "STAT22V1_071": ("CT22", "STAT-COMPARE-MEASURE"),
    "PRO23V1__001": ("CT23", "PROB-EVENT"),
    "PRO23V1__011": ("CT23", "PROB-SPACE-SUPPORT"),
    "PRO23V1__121": ("CT23", "PROB-EXPERIMENTAL"),
    "PRO23V1__041": ("CT23", "PROB-CLASSICAL"),
    "PRO23V1__071": ("CT23", "PROB-MULTISTEP"),
    "MOD24V1__001": ("CT24", "MODEL-SETUP"),
    "MOD24V1__041": ("CT24", "NUM-PERCENT"),
    "MOD24V1__051": ("CT24", "EQ-MODEL"),
    "MOD24V1__061": ("CT24", "SYS-MODEL"),
    "MOD24V1__081": ("CT24", "RIGHT-APPLICATION"),
    "MOD24V1__101": ("CT24", "PROB-EXPERIMENTAL"),
    "MOD24V1__111": ("CT24", "MODEL-VALIDATE"),
    "REV25V1_001": ("CT25", "EXAM-STRATEGY"),
    "REV25V1_101": ("CT25", "EXAM-REVIEW"),
}
GUARDS = {
    "MOD24V1__021": "CT24",
    "MOD24V1__121": "CT24",
    "REV25V1_011": "CT25",
    "REV25V1_020": "CT25",
}
ALL_TARGETS = list(TARGET_FAMILIES) + list(GUARDS)

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
OLD_READY = '{"assessments":{"LEGACY_READY":{"attempts":[{"correct":3,"total":4}]}}}'
OLD_BETA3 = '{"schema":"one-skill-assessment-events-v2","events":[{"question_id":"OLD","assessed_skill":"old-skill","correct":true}]}'

I3F_STORE = json.dumps({
    "schema": "taxonomy-v2-evidence-store-v1",
    "recent_events": [
        {
            "schema": "taxonomy-v2-evidence-event-v1",
            "event_id": "I3F-FIRST",
            "capture_version": "taxonomy-v2-i3f-ct02-20-v1",
            "question_id": "GEO19V1_008",
            "topic_id": "CT19",
            "diagnostic_skill_id": "dau-hieu-noi-tiep",
            "family_id": "CIRCLE-CYCLIC",
            "family_layer": "KNTT-Core",
            "mapping_role": "ASSESSED_SKILL",
            "evidence_class": "MCQ_RECOGNITION_ONLY",
            "clone_family": "CIR19-AUTO-008",
            "correct": True,
            "attempted_at": "2026-10-03T00:48:00+07:00",
            "source_file": "19-duong-tron-v1-01.json",
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
            "independent_unit_key": "CIRCLE-CYCLIC|CT19|clone:CIR19-AUTO-008",
        },
        {
            "schema": "taxonomy-v2-evidence-event-v1",
            "event_id": "I3F-OWNER",
            "capture_version": "taxonomy-v2-i3f-ct02-20-v1",
            "question_id": "GEO19V1_060",
            "topic_id": "CT19",
            "diagnostic_skill_id": "dau-hieu-noi-tiep",
            "family_id": "CIRCLE-CYCLIC",
            "family_layer": "KNTT-Core",
            "mapping_role": "ASSESSED_SKILL",
            "evidence_class": "MCQ_RECOGNITION_ONLY",
            "clone_family": "CIR19-AUTO-008",
            "correct": True,
            "attempted_at": "2026-10-03T00:49:00+07:00",
            "source_file": "19-duong-tron-v1-02.json",
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
            "independent_unit_key": "CIRCLE-CYCLIC|CT19|clone:CIR19-AUTO-008",
        },
    ],
    "seen_questions": {
        "CT19|q:GEO19V1_008": {
            "first_event_id": "I3F-FIRST",
            "first_seen_at": "2026-10-03T00:48:00+07:00",
            "first_assisted": False,
        },
        "CT19|q:GEO19V1_060": {
            "first_event_id": "I3F-OWNER",
            "first_seen_at": "2026-10-03T00:49:00+07:00",
            "first_assisted": False,
        },
    },
    "independent_units": {
        "CIRCLE-CYCLIC|CT19|clone:CIR19-AUTO-008": {
            "first_event_id": "I3F-FIRST",
            "first_seen_at": "2026-10-03T00:48:00+07:00",
            "question_id": "GEO19V1_008",
            "topic_id": "CT19",
            "diagnostic_skill_id": "dau-hieu-noi-tiep",
            "family_id": "CIRCLE-CYCLIC",
            "family_layer": "KNTT-Core",
            "evidence_class": "MCQ_RECOGNITION_ONLY",
            "correct": True,
        }
    },
}, ensure_ascii=False, separators=(",", ":"))

def topic_for(qid):
    if qid in TARGET_FAMILIES:
        return TARGET_FAMILIES[qid][0]
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

def seed_storage(page, taxonomy_store=I3F_STORE):
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

    # Full policy loads on CT21 and preserves accepted I3F evidence.
    goto_target(page, current, "STA21V1_001", debug=True)
    page.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3G CT02" in page.locator("[data-taxonomy-v2-debug] summary").inner_text()
    snap0 = page.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap0["policy_ready"] is True
    assert snap0["policy_error"] is None
    assert "I3F-OWNER" in json.dumps(snap0["store"])
    assert len(snap0["store"]["independent_units"]) == 1

    # Every final-batch family lane can capture.
    for qid, (topic, family) in TARGET_FAMILIES.items():
        goto_target(page, current, qid)
        answer(page, qid)
        store = wait_taxonomy_event(page, qid)
        event = store["recent_events"][-1]
        assert event["capture_version"] == "taxonomy-v2-i3g-ct02-25-v1"
        assert event["topic_id"] == topic
        assert event["family_id"] == family

    # Representative CT24/CT25 formative-only rows remain no-write guards.
    before = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
    count_before = len(before["recent_events"])
    for qid in GUARDS:
        goto_target(page, current, qid, debug=True)
        answer(page, qid)
        wait_last_reason(page, qid, "no_family_guard")
        now = page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1'))")
        assert len(now["recent_events"]) == count_before

    # G2 stays frozen and normal learner UI remains unchanged.
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None
    goto_target(page, current, "REV25V1_101", debug=False)
    assert page.locator("[data-taxonomy-v2-debug]").count() == 0
    assert page.locator("[data-canonical-evidence-debug]").count() == 0
    page.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3g-ct25-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # I3G fail-open on CT23 preserves legacy Practice and does not introduce G2.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/taxonomy-v2-runtime/i3g-ct02-25-r1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p, taxonomy_store=None)
        goto_target(p, cur, "PRO23V1__041", debug=True)
        answer(p, "PRO23V1__041")
        if block_policy:
            wait_last_reason(p, "PRO23V1__041", "taxonomy_v2_fail_open")
            assert p.evaluate("localStorage.getItem('toan-thcs-taxonomy-v2-evidence-v1')") is None
        else:
            wait_taxonomy_event(p, "PRO23V1__041")
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        assert p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    assert one_run(False) == one_run(True), "I3G policy failure changed legacy CT23 Practice stats"

    # Desktop smoke on CT24.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "MOD24V1__111", debug=True)
    page2.locator("[data-taxonomy-v2-debug]").wait_for(timeout=10000)
    assert "I3G CT02" in page2.locator("[data-taxonomy-v2-debug] summary").inner_text()
    answer(page2, "MOD24V1__111")
    wait_taxonomy_event(page2, "MOD24V1__111")
    snap = page2.evaluate("window.RoadmapTaxonomyV2Observer.debugSnapshot()")
    assert snap["last_capture"]["family_id"] == "MODEL-VALIDATE"
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "taxonomy-v2-i3g-ct24-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS Taxonomy v2 I3G real-Practice CT21-CT25 full shadow capture.")
print("PASS all 24 final-batch family lanes + representative CT24/CT25 NO_FAMILY guards.")
print("PASS I3F evidence continuity, G2 freeze, fail-open legacy behavior and normal learner UI.")
