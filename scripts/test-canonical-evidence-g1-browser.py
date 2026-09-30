"""Browser QA for Phase G1 Practice shadow canonical capture."""
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
    raise RuntimeError("Chromium/Chrome required for G1 browser QA")

TOPICS = {
    "04-bieu-thuc-dai-so": {
        "manifest": "04-bieu-thuc-dai-so-v2.manifest.json",
        "page": "/kien-thuc/04-bieu-thuc-dai-so/bai-tap/",
    },
    "05-7-hang-dang-thuc": {
        "manifest": "05-7-hang-dang-thuc-v1.manifest.json",
        "page": "/kien-thuc/05-7-hang-dang-thuc/bai-tap/",
    },
    "06-phan-tich-da-thuc": {
        "manifest": "06-phan-tich-da-thuc-v1.manifest.json",
        "page": "/kien-thuc/06-phan-tich-da-thuc/bai-tap/",
    },
    "07-phan-thuc-dai-so": {
        "manifest": "07-phan-thuc-dai-so-v1.manifest.json",
        "page": "/kien-thuc/07-phan-thuc-dai-so/bai-tap/",
    },
}

TARGETS = {
    "ALG04V2_013": ("04-bieu-thuc-dai-so", "04-bieu-thuc-dai-so-v2-01.json"),
    "ALG04V2_014": ("04-bieu-thuc-dai-so", "04-bieu-thuc-dai-so-v2-01.json"),
    "ALG04V2_089": ("04-bieu-thuc-dai-so", "04-bieu-thuc-dai-so-v2-03.json"),
    "ID05V1_120": ("05-7-hang-dang-thuc", "05-7-hang-dang-thuc-v1-04.json"),
    "FAC06V1_021": ("06-phan-tich-da-thuc", "06-phan-tich-da-thuc-v1-01.json"),
    "RAT07V1_009": ("07-phan-thuc-dai-so", "07-phan-thuc-dai-so-v1-01.json"),
    "RAT07V1_071": ("07-phan-thuc-dai-so", "07-phan-thuc-dai-so-v1-03.json"),
}

def load_json(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

SOURCE_CACHE = {}
MANIFEST_CACHE = {}
for qid, (topic, source_file) in TARGETS.items():
    if source_file not in SOURCE_CACHE:
        SOURCE_CACHE[source_file] = load_json("docs/assets/data/practice/" + source_file)
    manifest_name = TOPICS[topic]["manifest"]
    if manifest_name not in MANIFEST_CACHE:
        MANIFEST_CACHE[manifest_name] = load_json("docs/assets/data/practice/" + manifest_name)

QUESTION_BY_ID = {}
for qid, (_, source_file) in TARGETS.items():
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
OLD_BETA_V1 = '{"schema":"canonical-skill-evidence-store-v1","events":[{"event_id":"BETA-OLD","question_id":"OLD-BETA","canonical_skill_id":"old-beta"}]}'

def install_forced_bank(page, current):
    def handler(route):
        name = route.request.url.split("/")[-1].split("?")[0]
        target = current.get("target")
        if not target:
            route.continue_()
            return
        qid = target
        topic, source_file = TARGETS[qid]
        manifest_name = TOPICS[topic]["manifest"]
        if name == manifest_name:
            manifest = deepcopy(MANIFEST_CACHE[manifest_name])
            manifest["sources"] = [source_file]
            manifest["session_size"] = 1
            manifest["question_count"] = 1
            route.fulfill(status=200, content_type="application/json", body=json.dumps(manifest, ensure_ascii=False))
            return
        if name == source_file:
            source = deepcopy(SOURCE_CACHE[source_file])
            source["questions"] = [QUESTION_BY_ID[qid]]
            route.fulfill(status=200, content_type="application/json", body=json.dumps(source, ensure_ascii=False))
            return
        route.continue_()
    page.route("**/assets/data/practice/*.json", handler)

def seed_storage(page):
    page.goto(BASE + "/", wait_until="domcontentloaded")
    page.evaluate(
        """([a,b,c,d]) => {
          localStorage.setItem('toan-thcs-practice-v1', a);
          localStorage.setItem('toan-thcs-assessment-v1', b);
          localStorage.setItem('toan-thcs-assessment-v2', c);
          localStorage.setItem('toan-thcs-canonical-evidence-v1', d);
          localStorage.removeItem('toan-thcs-canonical-evidence-v2');
        }""",
        [OLD_PRACTICE, OLD_READY, OLD_BETA3, OLD_BETA_V1],
    )

def goto_target(page, current, qid, debug=False):
    topic, _ = TARGETS[qid]
    current["target"] = qid
    url = BASE + TOPICS[topic]["page"]
    if debug:
        url += "?canonicalDebug=1"
    page.goto(url, wait_until="domcontentloaded")
    page.locator(".practice-engine").wait_for(timeout=30000)
    page.locator(".practice-question").wait_for(timeout=30000)
    expected = QUESTION_BY_ID[qid]["question"].replace("\\(", "").replace("\\)", "")
    # Math source remains in textContent pre-typeset; ID is verified by answering/event.
    assert page.locator(".practice-option").count() == len(QUESTION_BY_ID[qid]["options"])
    if not debug:
        assert page.locator("[data-canonical-evidence-debug]").count() == 0

def answer(page, qid, choice=None):
    q = QUESTION_BY_ID[qid]
    original = q["answer"] if choice is None else choice
    page.locator(f'.practice-option[data-original-index="{original}"]').click()
    page.locator(".practice-feedback").wait_for(timeout=10000)

def wait_event(page, qid):
    page.wait_for_function(
        """qid => {
          const s = JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v2') || 'null');
          return s && Array.isArray(s.recent_events) && s.recent_events.at(-1)?.question_id === qid;
        }""",
        qid,
        timeout=10000,
    )
    return page.evaluate("JSON.parse(localStorage.getItem('toan-thcs-canonical-evidence-v2'))")

def sentinel_assertions(page):
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v1')") == OLD_READY
    assert page.evaluate("localStorage.getItem('toan-thcs-assessment-v2')") == OLD_BETA3
    assert page.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v1')") == OLD_BETA_V1

with sync_playwright() as pw:
    browser = pw.chromium.launch(
        executable_path=CHROME,
        headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"],
    )

    # Mobile integration: actual Practice UI, all four topics, assistance + transfer.
    context = browser.new_context(viewport={"width": 390, "height": 844})
    page = context.new_page()
    errors = []
    page.on("pageerror", lambda err: errors.append(str(err)))
    current = {}
    install_forced_bank(page, current)
    seed_storage(page)

    # Assisted first exposure: exact question becomes seen, no independent unit.
    goto_target(page, current, "ALG04V2_013")
    page.get_by_role("button", name="🤖 Chọn cách được giúp").click()
    page.get_by_role("button", name="📖 Xem lời giải hiện có").click()
    page.get_by_role("button", name="Tôi muốn mở lời giải ngay").click()
    answer(page, "ALG04V2_013")
    store = wait_event(page, "ALG04V2_013")
    event = store["recent_events"][-1]
    assert event["assisted"] is True
    assert event["assistance_kind"] == "full_solution"
    assert event["independent_evidence"] is False
    assert event["independent_reason"] == "assisted"
    assert len(store["independent_units"]) == 0
    sentinel_assertions(page)

    # Unseen sibling in same clone family may become first independent unit.
    goto_target(page, current, "ALG04V2_014")
    answer(page, "ALG04V2_014")
    store = wait_event(page, "ALG04V2_014")
    event = store["recent_events"][-1]
    assert event["independent_evidence"] is True
    assert event["independent_reason"] == "first_unseen_unit"

    # Cross-topic same canonical skill: CĐ07 then CĐ04 must remain separate units.
    goto_target(page, current, "RAT07V1_009")
    answer(page, "RAT07V1_009")
    store = wait_event(page, "RAT07V1_009")
    e07 = store["recent_events"][-1]
    assert e07["canonical_skill_id"] == "dieu-kien-xac-dinh"
    assert e07["normalized_topic_key"] == "07-phan-thuc-dai-so"
    assert e07["independent_evidence"] is True

    goto_target(page, current, "ALG04V2_089")
    answer(page, "ALG04V2_089", choice=1)  # deliberate wrong = negative independent evidence
    store = wait_event(page, "ALG04V2_089")
    e04 = store["recent_events"][-1]
    assert e04["canonical_skill_id"] == "dieu-kien-xac-dinh"
    assert e04["normalized_topic_key"] == "04-bieu-thuc-dai-so"
    assert e04["correct"] is False
    assert e04["independent_evidence"] is True
    assert e04["independent_unit_key"] != e07["independent_unit_key"]

    # Legacy-tag-order boundary on CĐ05.
    goto_target(page, current, "ID05V1_120")
    answer(page, "ID05V1_120")
    store = wait_event(page, "ID05V1_120")
    event = store["recent_events"][-1]
    assert event["canonical_skill_id"] == "hieu-hai-binh-phuong"
    assert "phan-tich-hdt" not in [e["canonical_skill_id"] for e in store["recent_events"]]

    # Same canonical skill on CĐ06 remains topic-specific.
    goto_target(page, current, "FAC06V1_021")
    answer(page, "FAC06V1_021")
    store = wait_event(page, "FAC06V1_021")
    event = store["recent_events"][-1]
    assert event["canonical_skill_id"] == "hieu-hai-binh-phuong"
    assert event["normalized_topic_key"] == "06-phan-tich-da-thuc"

    # CĐ07 method-selection canary.
    goto_target(page, current, "RAT07V1_071", debug=True)
    page.locator("[data-canonical-evidence-debug]").wait_for(timeout=10000)
    answer(page, "RAT07V1_071")
    store = wait_event(page, "RAT07V1_071")
    event = store["recent_events"][-1]
    assert event["canonical_skill_id"] == "quy-dong-mau-thuc"
    assert event["evidence_class"] == "MCQ_METHOD_SELECTION_ONLY"
    assert event["normalized_topic_key"] == "07-phan-thuc-dai-so"
    sentinel_assertions(page)

    # G1 remains shadow-only: no normal learner-facing canonical panel.
    page.goto(BASE + TOPICS["07-phan-thuc-dai-so"]["page"], wait_until="domcontentloaded")
    assert page.locator("[data-canonical-evidence-debug]").count() == 0

    page.screenshot(path=str(PREVIEWS / "canonical-evidence-g1-practice-mobile.png"), full_page=True)
    assert not errors, errors
    context.close()

    # Fail-open regression: Practice legacy result must be identical with observer success/failure.
    def one_run(block_policy):
        ctx = browser.new_context(viewport={"width": 390, "height": 844})
        p = ctx.new_page()
        local_errors = []
        p.on("pageerror", lambda err: local_errors.append(str(err)))
        cur = {}
        install_forced_bank(p, cur)
        if block_policy:
            p.route(
                "**/assets/data/curriculum/canonical-evidence-runtime-policy-04-07-v1.json",
                lambda route: route.fulfill(status=500, content_type="application/json", body='{"error":"forced"}')
            )
        seed_storage(p)
        goto_target(p, cur, "ALG04V2_089")
        answer(p, "ALG04V2_089")
        if not block_policy:
            wait_event(p, "ALG04V2_089")
        else:
            p.wait_for_timeout(250)
            assert p.evaluate("localStorage.getItem('toan-thcs-canonical-evidence-v2')") is None
        legacy = p.evaluate("localStorage.getItem('toan-thcs-practice-v1')")
        sentinel_assertions(p)
        assert not local_errors, local_errors
        ctx.close()
        return legacy

    legacy_success = one_run(False)
    legacy_failure = one_run(True)
    assert legacy_success == legacy_failure, "canonical failure changed legacy Practice stats"

    # Desktop render + real Practice integration smoke.
    desktop = browser.new_context(viewport={"width": 1365, "height": 768})
    page2 = desktop.new_page()
    desktop_errors = []
    page2.on("pageerror", lambda err: desktop_errors.append(str(err)))
    current2 = {}
    install_forced_bank(page2, current2)
    seed_storage(page2)
    goto_target(page2, current2, "ID05V1_120", debug=True)
    page2.locator("[data-canonical-evidence-debug]").wait_for(timeout=10000)
    answer(page2, "ID05V1_120")
    wait_event(page2, "ID05V1_120")
    assert page2.evaluate("document.documentElement.scrollWidth <= document.documentElement.clientWidth + 2")
    page2.screenshot(path=str(PREVIEWS / "canonical-evidence-g1-practice-desktop.png"), full_page=True)
    assert not desktop_errors, desktop_errors
    desktop.close()

    browser.close()

print("PASS G1 Practice browser QA across CĐ04–07.")
print("PASS assistance semantics, negative evidence, cross-topic identity and legacy-tag boundary.")
print("PASS legacy-write-first/canonical-fail-open: Practice stats identical on observer failure.")
print("PASS frozen beta-v1 and assessment stores remain unchanged; G1 has no normal learner UI.")
