#!/usr/bin/env python3
"""R18: post-commit/pre-legacy interruption in ACTUAL Practice MCQ browser path.
All data synthetic in disposable Chromium; no production R18 loader or v1 writes.
The test intentionally does NOT claim safe automatic resubmission after reload.
"""
from pathlib import Path
import json
import shutil
from playwright.sync_api import sync_playwright

CHROME = shutil.which("google-chrome") or shutil.which("chromium")
assert CHROME, "Chromium required"
BASE = "http://127.0.0.1:8765/"
PRACTICE = BASE + "kien-thuc/02-so-va-phep-tinh/bai-tap/"
PARTS = [
    Path("scripts/prototypes/math-v2-unified-ledger-r16.js"),
    Path("scripts/prototypes/math-v2-practice-unified-ledger-gate-r17.js"),
    Path("scripts/prototypes/math-v2-postcommit-reconciliation-r18.js"),
]
JS = "\n".join(p.read_text(encoding="utf8") for p in PARTS)
LEGACY = "localStorage.getItem('toan-thcs-practice-v1')"
# R18 injects a controlled interrupted acknowledgement AFTER an actual R16
# atomic commit, BEFORE R15 enters its legacy grading path. Real app unchanged.
FAULT = """
window.__R18_POSTCOMMIT_FAULT__ = true;
{
  const original = window.MathV2PracticeCommitGateR15;
  window.MathV2PracticeCommitGateR15 = Object.freeze({
    ...original,
    accept: async input => {
      const committed = await original.accept(input);
      if (committed.saved && window.__R18_POSTCOMMIT_FAULT__) {
        window.__R18_POSTCOMMIT_FAULT__ = false;
        return {
          saved:false, state:"R18_FAULT_POST_V2_PRE_V1",
          submission_key:committed.submission_key, event_id:committed.event_id
        };
      }
      return committed;
    }
  });
}
"""

def context(browser, width, scope):
    ctx = browser.new_context(viewport={
        "width": width, "height": 900 if width == 1365 else 844
    })
    init = ("Math.random=()=>0.314159265;\n"
            "window.__MATH_R17_QA_CONFIG__="
            + json.dumps({"enabled": True, "learner_scope": scope}) + ";\n")
    ctx.add_init_script(script=init + JS + "\n" + FAULT)
    return ctx

def start(page):
    response = page.goto(PRACTICE, wait_until="domcontentloaded")
    assert response and response.status == 200
    choice = page.locator("[data-practice-bank-v2] .practice-option").first
    choice.wait_for(state="visible", timeout=30000)
    return choice

def saved_rows(page, scope):
    return page.evaluate("""async s => {
      const db = await MathV2UnifiedLedgerR16.create({enabled:true,learner_scope:s});
      const rows = await db.read();
      db.close();
      return rows;
    }""", scope)

def status(page, scope, key):
    return page.evaluate("""async ({scope,key}) => {
      const review = await MathV2PostcommitReviewR18.create({
        enabled:true, learner_scope:scope
      });
      return {inspection:await review.inspect(key),
              projection:await review.project()};
    }""", {"scope":scope, "key":key})

with sync_playwright() as pw:
    browser = pw.chromium.launch(
        executable_path=CHROME, headless=True,
        args=["--no-sandbox", "--disable-dev-shm-usage"]
    )
    for width in (1365, 390):
        scope = f"QA_R16_R17_R18_{width}"
        ctx = context(browser, width, scope)
        page = ctx.new_page()
        errors = []
        page.on("pageerror", lambda e: errors.append(str(e)))
        choice = start(page)
        assert page.evaluate(LEGACY) is None
        choice.click()
        page.get_by_role("button", name="Thử lưu lại lượt này").wait_for(
            state="visible", timeout=20000
        )
        # R16 has COMMITTED; R15 has NOT credited v1/session. This is the
        # exact unsafe window which R17's happy-path tests did not cover.
        assert page.evaluate(LEGACY) is None
        rows = saved_rows(page, scope)
        assert len(rows["intents"]) == len(rows["events"]) == len(rows["outbox"]) == 1
        assert rows["intents"][0]["state"] == "SAVED"
        key = rows["intents"][0]["submission_key"]
        event_id = rows["events"][0]["event_id"]
        assert rows["outbox"][0]["event_id"] == event_id
        s1 = status(page, scope, key)
        assert s1["inspection"]["status"] == "COMMITTED_UI_UNCERTAIN"
        assert s1["inspection"]["automatic_v1_credit_allowed"] is False
        assert s1["inspection"]["legacy_replay_allowed"] is False
        assert s1["projection"]["formative_attempts"] == 1
        assert s1["projection"]["legacy_writes"] == 0
        assert s1["projection"]["readiness_submissions"] == 0
        assert s1["projection"]["automatic_written_readiness_credit"] == 0

        # An exact-ID R16 retry is idempotent; NO v1 replay is undertaken.
        duplicate = page.evaluate("""async ({scope,key}) => {
          const db = await MathV2UnifiedLedgerR16.create({enabled:true,learner_scope:scope});
          const response = await db.commit(key);
          db.close();
          return response;
        }""", {"scope":scope, "key":key})
        assert duplicate["saved"] and duplicate["duplicate"]
        assert duplicate["event_id"] == event_id
        assert len(saved_rows(page, scope)["events"]) == 1
        assert page.evaluate(LEGACY) is None

        # Reload and second same-origin tab still see canonical journal.
        page.reload(wait_until="domcontentloaded")
        start_choice = page.locator("[data-practice-bank-v2] .practice-option").first
        start_choice.wait_for(state="visible", timeout=30000)
        s2 = status(page, scope, key)
        assert s2["inspection"] == s1["inspection"]
        assert s2["projection"] == s1["projection"]
        assert page.evaluate(LEGACY) is None
        tab2 = ctx.new_page()
        start(tab2)
        assert status(tab2, scope, key)["projection"]["formative_attempts"] == 1
        assert tab2.evaluate(LEGACY) is None
        tab2.close()

        # A separate failed transaction stays STAGED and has no event credit.
        staged_key = "QA_R18_STAGED_" + str(width)
        staged = page.evaluate("""async ({scope,key}) => {
          const db = await MathV2UnifiedLedgerR16.create({enabled:true,learner_scope:scope});
          const i = await db.stage({
            submission_key:key, item_id:"QA_R18_UNCOMMITTED",
            kind:"answer_attempt", correct:false
          });
          let rejected=false;
          try { await db.commit(key,{simulateAbort:true}); }
          catch (_) { rejected=true; }
          db.close();
          return {rejected, event_id:i.intent.event_id};
        }""", {"scope":scope, "key":staged_key})
        assert staged["rejected"]
        pending = status(page, scope, staged_key)
        assert pending["inspection"]["status"] == "UNCOMMITTED_RETRY_SAME_TOKEN"
        assert pending["projection"]["formative_attempts"] == 1
        assert page.evaluate(LEGACY) is None

        # Transfer v2 backup to a fresh independent browser store: the saved
        # event and unresolved STAGED intent survive; legacy is not fabricated.
        backup = page.evaluate("""async s => {
          const db = await MathV2UnifiedLedgerR16.create({enabled:true,learner_scope:s});
          const snapshot = await db.exportBackup();
          db.close();
          return snapshot;
        }""", scope)
        dest = context(browser, width, scope)
        dest_page = dest.new_page()
        start(dest_page)
        restored = dest_page.evaluate("""async ({scope,backup}) => {
          const db = await MathV2UnifiedLedgerR16.create({enabled:true,learner_scope:scope});
          const result = await db.restore(backup);
          db.close();
          return result;
        }""", {"scope":scope, "backup":backup})
        assert restored == {
            "restored_intents":2, "restored_events":1, "restored_pending":1
        }
        assert status(dest_page, scope, key)["projection"]["formative_attempts"] == 1
        assert status(dest_page, scope, staged_key)["inspection"]["status"] == (
            "UNCOMMITTED_RETRY_SAME_TOKEN"
        )
        assert dest_page.evaluate(LEGACY) is None
        assert not errors, (width, errors)
        dest.close()
        ctx.close()
        print("PASS R18", width,
              "postcommit interruption: 1 v2, 0 v1; exact-ID dedup;"
              " reload/tabs/backup; no unsafe v1 replay")
    browser.close()
