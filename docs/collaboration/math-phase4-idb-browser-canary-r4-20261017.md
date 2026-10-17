# Math Phase 4 R4 — Browser IndexedDB Canary

**Date:** 2026-10-17 · **Status:** QA-only experiment, NOT activated on student pages.

## Reason for R4

The R3 event-store canary validates the recording/backup contract with in-memory fixtures, but a single read-modify-write JSON record in localStorage can lose updates across two tabs. The R4 candidate therefore exercises IndexedDB **readwrite transactions** with a compound event key `[learner_scope,event_id]`, giving atomic event insertion and uniqueness checks across connections.

## Scope

- Code: `scripts/prototypes/math-v2-idb-browser-canary-r4.js`.
- Browser QA: `scripts/test-math-v2-idb-browser-canary-r4.py` on desktop 1365px and narrow 390px.
- Explicit `createCanary({learner_scope,enabled:true})` is required to write. The `enabled:false` default blocks all appends.
- The prototype is injected only by QA into a test browser. **No learner-facing page, script loader or production backup imports this file.**
- New test database `math-v2-qa-idb-r4`, object store `events`, unique key `[learner_scope,event_id]`; no references to existing Math Practice/Readiness/Written or LocalStorage keys.
- The test uses invented learner scope and QA-only event IDs. New event kinds/evidence classes follow Phase 4 R2 and remain separate for FORMATIVE, INDEPENDENT_ASSESSMENT, SELF_REPORTED, REMEDIATION and EXAM_ASSESSMENT.
- Written self-check grants **zero Readiness credit**. No synthetic historic attempts, no legacy backfill.

## QA gates

1. Flag off means no event writes.
2. Same event ID and payload is idempotent; same ID with changed content is rejected.
3. Independent IndexedDB connections can append different events without lost updates; a second browser tab sees the committed events.
4. Data survives page reload; self-check/Readiness/Practice counts remain separate.
5. SHA-256 backup detects tampering. Restore into an isolated browser context succeeds when scope matches.
6. An existing data set blocks restore by default; replacement requires separate acknowledgment. Deliberate transaction abort preserves all original events.
7. LocalStorage sentinel remains unchanged, proving the experiment did not overwrite legacy counters.

## Decision still pending

No production IndexedDB migration or learner-side event listener is authorized. Compare R3 and R4, design opt-in live submission integration, then conduct real PC/iPad owner QA and separately decide v2 cutover. As approved, old cumulative counters need not be replayed when reconstruction is unreliable; archive/backup first and clearly label new counters.

This PR is a **test harness only**. CI PASS is an engineering gate, not permission to change historic scores or production storage.
