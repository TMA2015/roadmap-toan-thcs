# Math Phase 4 R7 — Real Submission → V2 Journal / Recovery Verification

**Date:** 2026-10-17 · **Scope:** QA-only end-to-end proof · **No live v2 learner counters**

## Already approved and merged

- R5 (#489) adds two **inert-by-default** optional hooks to the original Practice/Readiness save-success paths.
- R6 (#490) adds a **test-only** transactional IndexedDB event journal and pending outbox with immutable event IDs, no Mastery/Readiness semantic changes.

## R7 experiment

`scripts/prototypes/math-v2-real-journal-bridge-r7.js` is injected exclusively into disposable Playwright browser contexts (desktop 1365px, narrow 390px). It binds the existing R5 callback names to the isolated R6 journal. No application route loads this file; no real student's browser is touched.

`scripts/test-math-v2-real-journal-r7-browser.py` exercises **actual learner interactions**:

1. Student answers an interactive Practice question; the existing local counter is saved, and a FORMATIVE v2 event plus a PENDING outbox item are committed.
2. Student submits an independent Readiness Check; the original assessment record is saved, and one INDEPENDENT_ASSESSMENT v2 event plus one outbox item are committed. Neither is a Written self-check and no self-reported activity contributes to readiness.
3. Reload the real page and verify both authoritative *test journal* events and pending receipts are intact.
4. Simulate downstream processing that receives a record but fails before acknowledgment. Verify the queue remains pending and a retry can deduplicate the already-seen event at the consumer by `event_id`; the derived journal counts do not change.
5. Verify the original local Practice/Readiness stores and an unrelated sentinel remain intact.
6. Simulate a failed journal append after the original Practice write already succeeded; verify the failure is observable in QA diagnostics and **not** described as a successfully saved v2 event.
7. Verify no new journal/bridge scripts are loaded on ordinary learner pages.

## Critical limitation

**R7 does not make v2 a production source of truth.** The R5 callback fires *after* the original v1 localStorage write. If v2 IndexedDB is blocked or writes fail, the old progress is saved but the v2 event is absent. Do not switch the learner-visible unified counters to this v2 journal until the submission protocol itself becomes authoritative, or a durable transactional outbox is attached **before** the learner sees a successful-save acknowledgement.

R6 downstream delivery is *at least once*. A consumer that writes scores must maintain its own durable idempotent `event_id` receipt; R7's in-memory receipt Set is only an explicit failure/retry simulation. A browser reload between delivery and acknowledgment may otherwise cause repeated delivery.

## Next release decision

1. Design an atomic **journal-first** learner submission transaction and durable local projection/receipt in one IndexedDB database; distinguish successful answer feedback from durable save confirmation.
2. Add explicit restore and export of the official new event journal, replayability and constrained browser-storage recovery.
3. Run controlled PC/iPad canary with a parent-owned QA scope before actual family data cutover.
4. If old counters cannot safely replay, archive/back them up, clearly label the v2 new-metric start, and do not manufacture historical activity.

Green CI is an engineering gate only. The owner has prioritized a correct unified recording architecture over forced legacy replay; this PR does **not** delete or migrate old history.
