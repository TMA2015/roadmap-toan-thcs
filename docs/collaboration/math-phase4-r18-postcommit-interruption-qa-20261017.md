# Math Phase 4 R18 — Post-commit interruption / read-only reconciliation QA

**Date:** 2026-10-17 · **Status:** ENGINEERING QA ONLY / NO FAMILY LEARNER CUTOVER

## Exact starting point

R17 PR #503 (merge `76cb3fb6f5c3650a2905bed19b325a004760bc2e`) passed full public Math PR QA, MkDocs and Pages deployment. In R17 an actual Practice MCQ waits for the R16 atomic `intent + event + outbox` commit before calling original grading and the separate legacy `toan-thcs-practice-v1` localStorage saver. That order prevents credit on an aborted v2 commit but has a **post-commit / pre-v1** interruption window.

**Do not claim exactly-once end-to-end v1+v2 scoring:** IndexedDB v2 and old localStorage v1 cannot commit atomically together. Retrying legacy save without a durable receipt that represents the *exact session/action/answer* can duplicate the v1 attempt; repeating the same question after reload can also create a different v2 event if the old submission token was lost.

## R18 narrow change

New `scripts/prototypes/math-v2-postcommit-reconciliation-r18.js` is **never loaded by MkDocs or real student pages**. Explicit opt-in accepts only synthetic scopes prefixed `QA_R16_R17_R18_`. It reads the same R16 three-store snapshot and classifies a *specific submission key*:

| Status | Evidence | Permitted automatic action |
| --- | --- | --- |
| `NOT_FOUND` | No matching intent | None; investigate |
| `UNCOMMITTED_RETRY_SAME_TOKEN` | STAGED, no event/outbox | Retry exact existing token via separate reviewed writer |
| `COMMITTED_UI_UNCERTAIN` | SAVED + matching event/outbox | Display v2 evidence only; **never replay v1** |
| `INCONSISTENT_FAIL_CLOSED` | Missing/mismatching atomic receipt | No score/replay; preserve data and investigate |
| `NOT_PRACTICE_EVIDENCE` | Readiness/Written intent | Do not treat it as Practice |

Its `project()` counts **committed unique v2 event IDs** only. Formative, independent Readiness and self-reported Written remain distinct, and Written never grants automatic Readiness. No write/clear/migration/localStorage/network endpoint is implemented. The API never asserts whether old UI feedback happened.

## Failure-window browser QA

`scripts/test-math-v2-postcommit-reconciliation-r18-browser.py` injects the approved R16/R17 QA prototypes into disposable Chromium contexts, visits an actual Practice question, and simulates the missing acknowledgement **after the real v2 atomic save but before R15 can invoke the old grading call**:

1. Immediately after the interruption: exactly **one** SAVED intent, v2 event, pending outbox; **zero** v1 attempt.
2. Read-only inspection returns `COMMITTED_UI_UNCERTAIN`, not a permission to write v1.
3. Exact-token `db.commit(key)` repeat is reported `duplicate:true`; still one event and zero v1.
4. Reload and another same-origin tab see the same journal counts without phantom replay.
5. A different deliberately aborted R16 transaction remains STAGED and contributes no v2 score.
6. SHA-256 checked R16 backup containing both committed and unfinished intent restores into an isolated second device/browser store without inventing v1 points.
7. 1365px desktop and 390px mobile-width Chromium paths both run.
8. Default-off contract and pure Node state-classification tests run in PR CI.

This controlled hook models a lost commit acknowledgement (not a real device power cut or a Safari process kill). The successful QA result demonstrates a **safe diagnosis**, not a repaired learner-facing interface.

## Non-goals / boundaries

- No new production script, flag, account, progress counter, storage key, or QA tester menu.
- No double-writes, replay-to-localStorage or automatic v1 score reconciliation.
- No real learner backup import, cross-device history union, changes to Mastery/Readiness, or regrading.
- No academic item editing; all canonical math IDs and lessons remain unchanged.
- R16's 2 MB export limit and checksum are not a digital signature or a cloud sync promise.
- In R17, recovery keyed by question ID and correctness is **not** a durable, unique identity for separate sessions or different incorrect options. R18 cannot solve that missing information retroactively.

## Decision before production

Next proof must add stable *learner scope + session ID + question presentation instance + selected canonical option + submission action token* and an explicit, journal-derived UI acknowledgement model. All later displays/counters should be projected from the authoritative committed event ledger; do **not** assume v1 and v2 can be repaired to match by repeat writes. Owner-controlled PC multi-tab + real Safari iPad testing, practical backup-size/quota failure checks and explicit owner approval are required before any family rollout or historical migration.

**Release boundary:** passing CI permits merging **QA code only** into public Math `main`; it is not approval to activate v2 on the family site.
