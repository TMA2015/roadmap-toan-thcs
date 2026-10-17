# Math Phase 4 R5 — Submission hook canary (Practice + Readiness)

**Date:** 2026-10-17 · **Status:** IMPLEMENTED CANDIDATE / NOT LIVE V2 CUTOVER

## Why R5

Prior steps establish a read-only inventory (R1), separate canonical event lanes (R2), one-key backup prototype (R3), and IndexedDB transactional browser storage (R4). These are not evidence that an actual student submission can be recognized without disturbing the original learner experience. R5 instruments two **existing submission success paths** with optional, nonblocking callbacks to a test-only bridge.

## Only two original-runtime edits

- `docs/assets/javascripts/practice-engine-v2.js`: after the existing Practice save succeeds, optionally call `window.MathV2CanaryBridgeR5.capturePractice({question_id,correct,hints_used,full_solution_viewed})`. This does not award Readiness/Mastery credit; hints/solution assistance remain formative metadata.
- `docs/assets/javascripts/assessment-engine-v1.js`: after `saveStore(store)` returns success for an actual submitted Readiness attempt, optionally call `window.MathV2CanaryBridgeR5.captureReadiness({assessment_id,submitted_at})`. No Written self-check is routed through this hook.

**By default, there is no `MathV2CanaryBridgeR5` installed on learner pages.** The bridge file is inside `scripts/prototypes/`, not in `docs/assets/javascripts` or any route loader. The optional call is fail-open and explicitly catches sync and async exceptions. The original save remains authoritative, and feedback continues to use the original engine.

## QA-only adapter and browser tests

`scripts/prototypes/math-v2-real-submission-bridge-r5.js` is injected only by Playwright alongside the already-reviewed R4 IndexedDB prototype. A QA-local scope `QA_R5_*` supplies synthetic isolated identity. New events receive unique random IDs, the exact canonical type, and only minimal item metadata. Tests exercise actual learner pages rather than fabricated producer calls:

1. Submit an answer on Practice; confirm original localStorage counters are saved and exactly one FORMATIVE v2 event is in QA IndexedDB.
2. Submit a Readiness Check; confirm original Readiness submission is saved and exactly one INDEPENDENT_ASSESSMENT v2 event appears.
3. Reload; both counts persist. Written self-check assessment credit remains 0; all event lanes are distinct.
4. Deliberately corrupt a legacy Practice store. Show the legacy save error, preserve its original bytes and **do not create a phantom v2 event**.
5. Repeat the corruption test for independent Readiness.
6. Run desktop and 390px/mobile in disposable browser contexts; never touch real user devices or synchronize to a cloud service.

## Important limitation before production cutover

The test hook does not make v2 storage authoritative. Because the primary v1 save completes before the optional v2 callback, a v2 write can fail afterward without blocking the legacy learning flow. A future *single authoritative write / outbox* and durable retry policy must be designed before visible v2 metrics replace existing ones. This version is only a **shadow QA proof**.

Student history can be archived and not replayed when replay is unreliable, consistent with owner priority; nevertheless, any production archive/cutover requires separate backup, confirmation, rollback QA and explicit release acceptance. No historical scores are recalculated here.
