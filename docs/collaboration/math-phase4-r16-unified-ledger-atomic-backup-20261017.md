# Math Phase 4 R16 — Single-database intent, event, outbox and atomic backup

**Date:** 2026-10-17 · **Status:** QA prototype / owner cutover NOT AUTHORIZED

## Why R16 follows R15

PR #501 (R15) is merged and its complete GitHub Actions run passed. The default-off Practice MCQ QA gate makes a journal save happen before the legacy score path. But the R13 staged-intent store and R6 event/outbox journal still reside in **different** IndexedDB databases. R10 backup covers only R6 events/outbox, not the unfinished R13 intents. This is a material portability/recovery gap: closing the browser after staging but before commit, then restoring the R10 file to another device, could drop an unresolved submission.

## QA-only unified ledger contract

`scripts/prototypes/math-v2-unified-ledger-r16.js` introduces a **new, isolated** `math-v2-qa-unified-ledger-r16` IndexedDB database with three stores: `intents`, `events`, `outbox`. It never reads or rewrites real learner localStorage, R6/R10/R13 QA stores, or old scoring/history. Only synthetic scopes beginning with `QA_R16_` may use it. Feature flag `enabled` defaults to false, and that path does not open a database.

- **Stage** records `submission_key`, stable `event_id`, timestamp and typed Practice/Readiness/Written payload. The same key and content are idempotent; a changed answer under the same key is rejected. This first staged write is its own transaction and survives reload.
- **Commit** uses **one IndexedDB readwrite transaction across all three stores**. The staged intent becomes `SAVED`, the immutable `math-evidence-event-v2` is inserted and the corresponding pending outbox entry is added or none is written. Aborting the transaction must preserve the staged intent without an event/outbox or false confirmation. Retrying a committed key returns `duplicate:true`, not another score.
- **Read/Export** snapshot all three stores within one readonly transaction, so a backup includes an unfinished staged intent along with committed events and pending outbox messages. A versioned `math-v2-unified-ledger-backup-r16` JSON contains a SHA-256 integrity digest and strictly checked ownership/type linkage. Written self-checks retain zero automatic independent Readiness credit; ungraded Readiness stays separate.
- **Restore** validates the entire backup and digest before starting writes; its replacement deletes/reinserts a *single learner scope* into all three stores within **one readwrite transaction**. Existing data refuses restore without explicit `replace` and `acknowledged`. A simulated abort leaves the prior snapshot byte-for-byte intact.
- No v1 Practice/Core/Readiness history import or fabricated event timestamp/grade is attempted. Backup integrity is not authentication or cloud sync.

## Regression scope

`scripts/test-math-v2-unified-ledger-r16.js` checks default-off isolation, one-database transaction boundaries, no localStorage/network/learner loader and strict feature scope.

`scripts/test-math-v2-unified-ledger-r16-browser.py` uses disposable Chromium desktop 1365px and mobile-width 390px contexts. It verifies a staged attempt stays unchanged across reload; deliberate commit abort rolls back all three stores; accepted and duplicate commits count once; simultaneous attempts from independent IndexedDB connections use the same event ID; a staged Written self-check remains in a signed exported backup; it transfers atomically to an independent browser context; signed tampering and foreign learner scope are rejected; occupied restore without explicit consent is refused; forced replacement abort preserves old data; after restore a pending intent can be committed exactly once and retained after reload.

## Gates still required before production activation

R16 is a stronger **storage architecture prototype**, not a full learner interface. The actual Practice path still uses the separate R13/R6 gate in default-off R15 QA, not the new R16 API; Readiness and rich answers are not journal-first. A subsequent bridge would have to test end-to-end grading on authoritative events, retry/resume after crash between journal commit and legacy feedback, correct association of a unique submission key with the actual learning session, the scored independent Readiness evidence, retention/backup limits, and true iPad Safari storage behavior.

For real learners, retain the R12 separately validated existing device backups. Device-local PC and phone histories may overlap and must not be summed. An owner-controlled, reversible cutover can start a clearly labeled fresh v2 epoch without inventing older event history. **QA PASS or merge alone must never enable the new counter or erase old records.**
