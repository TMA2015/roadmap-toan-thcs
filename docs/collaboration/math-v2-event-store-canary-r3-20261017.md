# Phase 4 R3 — Unified event-store canary: QA-only persistence

**Status:** IMPLEMENTED PROTOTYPE, NOT STUDENT-FACING · 2026-10-17

## Purpose

This follows merged Phase 4 R1 (#485) and shadow-only event counter R2 (#486).
It proves that future **new** learning events can be persisted, recovered after page reload (simulated by reconstructing the canary instance), deduplicated, backed up with SHA-256, and restored in a controlled way. It does **not** replay untrustworthy historical aggregates, write to legacy student keys, or alter the current dashboard/Readiness grading.

## Boundaries

- Source files live exclusively under `scripts/prototypes/` and `scripts/test-...`; **no learner-facing JavaScript includes this module**.
- `createCanary(storage, {enabled:true, learner_scope:"opaque-local-id"})` requires explicit opt-in. Without it, no writes are permitted.
- The only test key is `math-unified-events-v2-canary`, intentionally **not** on the production backup allowlist. The production backup remains unchanged; the test-only canary has its own `exportBackup/restore` contract.
- Atomicity is one-key set/readback/rollback. Storage quota refusal, corrupt readback and rollback are tested on in-memory fixtures. No external account, sync service or paid API is involved.
- Strict v2 event validation, separate evidence lanes, stable ID idempotency and conflicting ID rejection are reused from R2.
- Existing Readiness, Core, Practice, Written and canonical evidence stores are untouched. `written_self_check` remains excluded from automatic Readiness.
- Cross-device backup import requires the **same explicit opaque learner scope**; there is no automatic account identity reconciliation.

## Cutover order

1. QA PASS of this prototype plus independent review of R1–R3 contracts.
2. Canary UI and a new-event writer behind an explicit off-by-default flag, in a separate PR. No historical backfill.
3. End-to-end test on desktop + iPad: real completed exercises, fast reload, conflict/repeated submit, browser storage restriction, device transfer, backup and restore.
4. Owner decides whether to archive legacy counts and start the new live v2 metrics from zero. Do not present legacy data as false contemporary progress.
5. Only after owner acceptance: switch visible counters and implement reversible transition. Never silently delete old data.

**No production release authorization is implied by green CI.**
