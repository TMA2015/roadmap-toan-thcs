# Math Phase 4 R17 — Real Practice click → R16 unified ledger (QA only)

**Date:** 2026-10-17 · **Status:** QA CANDIDATE / NO LEARNER CUTOVER

## Starting point

R15 (#501) and R16 (#502) were confirmed merged into `main` with full Github Actions PASS. R15 already added a **default-off** journal-first checkpoint to the real multiple-choice Practice click lifecycle, but its injected test adapter still relied on the old separated R13 intent DB and R6 journal DB. R16 supplied an improved **one-transaction, one-IndexedDB** API for intents, events and outbox, plus a SHA-256 backup containing unresolved intents. R17 connects these reviewed pieces in a new isolated QA adapter rather than adding another storage engine or altering the real student navigation.

## What is changed

`scripts/prototypes/math-v2-practice-unified-ledger-gate-r17.js` is an **injection-only** implementation of the existing `MathV2PracticeCommitGateR15` interface. It:

1. Runs only if Playwright explicitly injects `__MATH_R17_QA_CONFIG__.enabled` and the learner scope begins `QA_R16_R17_`.
2. Opens the reviewed R16 unified ledger; no separate R6/R13 DB or localStorage entry is used.
3. Receives the actual Practice MCQ answer selection **before** the existing Practice grading and legacy localStorage persistence, uses the R16 staged intent and commits all three event/intent/outbox records atomically.
4. On a simulated transaction abort, retains the STAGED intent, reports `NOT_SAVED`, and permits retry with the same ID. **No legacy score or old answer count is written before a successful R16 commit.**
5. On a reload/restore where a still-STAGED intent for the same item remains, reuses that exact `submission_key` and `event_id`. Ambiguous/mismatching pending answers fail closed, rather than changing the content associated with a previous attempt.
6. Exposes test-only `qaExport()`/`qaImport()` that use R16's versioned SHA-256 backup, preserving outstanding staged intents along with events and pending outbox receipts.

The existing default-off R15 guard remains the only modification on the production Practice engine; **R17 and R16 are not registered in `mkdocs.yml`**, and normal learner pages do not load them.

## Regression tests

`scripts/test-math-v2-practice-unified-ledger-r17.js` checks that only the reviewed R16 database is used and that no production script enables the gate.

`scripts/test-math-v2-practice-unified-ledger-r17-browser.py` runs actual Practice clicks in disposable Chromium desktop (1365px) and mobile-width (390px) contexts. The test covers:
- Default learner path with the gate absent.
- First R16 commit intentionally aborted: no event/outbox, staged intent remains, no v1 Practice grade.
- Reload and real Practice click with the staged token: exactly one event, one outbox entry, one legacy Practice attempt and matching stable event ID.
- Standalone R16 backup containing the still-STAGED intent; import into an independent browser/device fixture, then real Practice click recovers and commits that same ID.
- Source isolation and no automatic Readiness or Written credit.

## Remaining production gates

R17 remains an engineering proof, not a production launch. Its unresolved-intent lookup by `item_id` and `correct` is suitable only for this controlled, one-question-at-a-time QA workflow: a full production implementation must associate a stable token with **the exact learner session and submission action**. Additionally, R16's QA backup has a 2 MB limit and its three-store journal is not wired to the actual permanent backup UI. A full family release must test iPad Safari IndexedDB/quota behavior, multiple-tabs, backup durability and reloading after commit but before on-screen feedback. It must also carry exact source evidence and independently graded Readiness results, without self-reported Written Readiness credit.

The verified R12 real legacy histories (PC 149/2; phone 116/2) must remain separately exportable. Do not add old totals together or silently backfill a fresh v2 journal. Obtain explicit owner signoff before any family learner canary or live counters.
