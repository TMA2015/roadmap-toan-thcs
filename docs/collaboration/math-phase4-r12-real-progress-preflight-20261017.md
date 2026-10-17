# Math Phase 4 R12 — Real progress archival preflight (read-only)

**Date:** 2026-10-17 · **State:** Candidate, PR QA pending · **No unified-counter activation**

## Owner context

The owner tested the R11 QA page on PC and iPad but accidentally tried importing a **real learner backup** (including real Practice/Readiness history) into the QA-only journal. The QA rejection was correct; R11 #497 now displays a clear explanation. R12 makes the next productive step explicit: verify that the **real current learner progress** is still readable and can be exported *before* considering a v2 cutover.

## New public interface

A separate, parent-facing, unlisted page is implemented at `docs/qa/math-v2-cutover-preflight.html`, linked from `docs/tien-do-hoc-tap/index.md`. It:

1. Reads the existing authorized real-progress localStorage stores via the production `MathLocalProgressBackup` API; it never reads QA R11 journal data or browser credentials.
2. Calls `buildBackup(localStorage)`, then `validateBackup(doc)` **in memory**, establishing that the actual current backup would pass the same schema and SHA-256 integrity validation as the real learner restore facility.
3. Rechecks the exact allowlisted source values before accepting the result; changes during the check require a new run.
4. Displays the original Practice/Core attempt count and independent Readiness submission count **only when individual source records are sufficiently well-formed**. If data is absent or inconsistent, it displays an unknown/not-present state rather than an invented zero or score.
5. Offers a JSON download only after successful validation. Immediately before download, rechecks the source snapshot to prevent silently exporting data that has changed since the verification.
6. States the boundaries: this is an archival preflight, **not** a v2 counter launch, historical backfill, old-history merge, or grade conversion.

The document deliberately includes **no JSON import**, to prevent routing a real learner backup into a synthetic QA scope.

## Validation

`scripts/test-math-v2-real-progress-preflight-r12.js` prevents accidental storage writes, IndexedDB opens, or network calls, and checks source/scoping and linkage.

`scripts/test-math-v2-real-progress-preflight-r12-browser.py` uses disposable Chromium profiles, synthetic localStorage data only, at desktop 1365px and mobile 390px. It verifies in-memory SHA success, exported real-backup schema, Practice vs Readiness count distinction, byte-identical localStorage before/after inspection and export, stale-data detection, damaged-store rejection, and mobile overflow. Existing browser tests for real backup/restore and R11 remain unchanged.

## Still blocked pending owner-gated rollout

Even a passing preflight only establishes that the old data can be archived on the device. Production v2 must still receive stable learner IDs, stable retry-safe submission IDs, durable live journal-first writing and user-facing recovery controls, plus PC/iPad owner QA. Per the owner's priority, archival without unreliable backfill is acceptable; never silently erase or recalculate the original records.

No changes to source academic content, approved question keys, learner scoring or Readiness semantics.
