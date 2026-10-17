# Math Phase 4 R8 — Journal-First Acceptance Contract

**Date:** 2026-10-17 · **Status:** CODED QA PROTOTYPE / NOT LOADED BY STUDENT APP

## Purpose

R7 demonstrates actual Practice/Readiness submission events can reach a journal and pending outbox, but exposes the fundamental v1→v2 split-write problem: the existing localStorage save may succeed while the subsequent v2 IndexedDB append fails. A new unified counter cannot honestly claim success on that path.

R8 prototypes the **journal-first** alternative. `scripts/prototypes/math-v2-journal-first-submit-r8.js` is a separate, QA-only submission API. It **does not** modify the production Practice or Readiness engines. It accepts a source-validated answer/submission intent with a durable caller-supplied `event_id`; commits that event and an outbox entry using R6's single IndexedDB transaction; and reports `SAVED` only after the transaction completes.

## Contract and UI semantics

- Disabled flag: no journal open, no event writes, no saved acknowledgement.
- Invalid event/assessment lane: explicit `INVALID` result, no save.
- Storage blocked, quota exceeded or transaction aborted: `NOT_SAVED`. The future learner UI **must not** show a successful-save message, advance a persisted score or discard a retryable submission intent on this path.
- Durable commit: `SAVED`, `source=V2_JOURNAL`, stable `event_id`, and a projection derived directly from the immutable journal. A projection read error after commit cannot retroactively reverse an already committed event.
- Exact same `event_id`+payload: idempotent retry, `duplicate=true`; the score/count remains unchanged. Same ID with conflicting content: `NOT_SAVED` and `EVENT_ID_CONFLICT`.
- Practice answer events stay **FORMATIVE**, submitted independent Readiness events stay **INDEPENDENT_ASSESSMENT**; Written self-check stays **SELF_REPORTED** with zero Readiness credit. Do not convert older totals into invented timestamped events.

## QA proof

The Playwright browser regression `scripts/test-math-v2-journal-first-r8-browser.py` uses disposable desktop/390px browser contexts and QA IDs to validate disabled mode, successful journal commits, idempotent exact retry, conflicting-ID rejection, invalid lane rejection, two concurrent submissions, forced atomic abort, simulated IndexedDB denial, reload persistence and preservation of legacy localStorage bytes. GitHub Actions runs this in addition to R1–R6 checks.

## Required before official use

1. Allocate a stable, device-local learner scope and a caller-owned submission/event ID **once per user submit**, retained through retries and reloads.
2. Refactor the real Practice and Readiness submission lifecycle to call the journal-first API **before** confirming the saved attempt; preserve feedback and scoring accuracy. There must be one authoritative event ledger for new v2 counts.
3. Design and implement backup/export/import of the final authoritative v2 journal, not merely QA-only legacy localStorage backup. Confirm recovery on PC and iPad.
4. Separate an immutable submitted-answer evidence event from any later evaluation/diagnostic projection; do not silently regrade legacy attempts. Durable consumer acknowledgment/deduplication is required for at-least-once outbox processing.
5. Offer owner-controlled canary and rollback, including IndexedDB unavailable/quota failure and multi-tab activity. Publish clear labeling for v2 counters that start clean; preserve/archive old history if migration is not reliable.

**R8 is not an approval to switch learner counters or delete history.** The project owner prefers a correct unified architecture to forced backwards-compatible counters, but cutover and user-visible “saved” semantics need separate acceptance testing.
