# Math Phase 4 R6 — Atomic V2 Event Journal and Recovery Outbox

**2026-10-17 · ENGINEERING CANDIDATE / QA-ONLY · NO LEARNER RUNTIME RELEASE**

## Context

- R1 (#485): read-only inventory/projection, no destructive history conversion.
- R2 (#486): schema and isolated counter classes.
- R3 (#487): canary backup/recovery on fixture storage.
- R4 (#488): isolated IndexedDB transactional event store with browser QA and multi-tab tests.
- R5 (#489): successful original Practice/Readiness writes trigger inert-by-default observer hooks; no live v2 metrics.

**R5 limitation:** the original Practice/Readiness local save finishes before the optional shadow v2 write. If the shadow write fails after a successful legacy save, the new v2 count can lag. That makes R5 unsuitable for authoritative new metrics without a durable first-write or recovery mechanism.

## R6 proof and contract

`scripts/prototypes/math-v2-idb-journal-r6.js` is a separate QA-only IndexedDB database, `math-v2-qa-journal-r6`. It has two object stores keyed by `[learner_scope,event_id]`: `events` (authoritative immutable new-event journal) and `outbox` (pending projection/delivery work).

1. **Single atomic commit:** insert the new canonical v2 event and pending outbox record inside one IndexedDB `readwrite` transaction. A forced abort cannot persist half a submission.
2. **No duplicate credit:** repeated identical event IDs do not add a second journal event or a second outbox item; conflicting content under an ID is rejected.
3. **No lost updates:** simultaneous commits through two independent IndexedDB connections are transaction-serialized, not read–modify–write of a shared JSON aggregate.
4. **Retry after interruption:** a failed consumer leaves an outbox item pending. Reprocessing must be **idempotent at the consumer by event ID**; delivery is *at least once*, not magically exactly once.
5. **Counters are projections:** Formative, submitted Readiness, Written self-check, remediation and exams are separately derived from immutable journal events. Written self-check contributes zero automatic Readiness credit.
6. **Strict isolation:** R6 source and test code live under `scripts/` and are never loaded by student pages. No existing student localStorage keys, scores, timestamps, IDs, backup allowlist or legacy history are changed. The default flag is off.

The CI browser test `scripts/test-math-v2-atomic-journal-r6-browser.py` checks desktop/390px, flag off, duplicate/conflict, atomic abort, parallel connections, cross-tab visibility, failed delivery and retry, unchanged derived counts, browser reload and an untouched localStorage sentinel.

## Before official learner release

A green CI result here is **not** a live R6 rollout. Future work must first reconcile the original submission UX with the new authoritative journal (including persistent device-scoped learner identity, retry notices, browser storage permissions, and independent Readiness scoring). An owner-controlled canary should then test real PC/iPad use and backups. Owner policy permits archiving unreliable legacy counters and starting clean v2 counters, but historical learner data must not be silently overwritten or claimed as reconciled.

**Next decision gate:** design how the user-facing submission flow confirms journal durability before showing “saved,” and offer a recovery path if the local database is unavailable. The old dataset can remain an archived, read-only reference rather than blocking the new design.
