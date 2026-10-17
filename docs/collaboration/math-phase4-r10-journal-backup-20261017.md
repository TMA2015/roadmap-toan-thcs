# Math Phase 4 R10 — Journal and Outbox Transfer Backup

**Date:** 2026-10-17 · **State:** QA-only candidate, NOT student-facing

## What this closes

R6–R8 establish a canonical V2 new-event journal and atomic submission contract. Before any production cutover, that new source of truth needs a transfer/restore story. Backing up only legacy localStorage would **not** preserve R6 IndexedDB journal records or the pending processing receipts. R10 therefore exercises a coherent export/import of **both** event journal and outbox. It does not transfer real student history.

## Implementation

- `scripts/prototypes/math-v2-journal-backup-r10.js` opens the isolated R6 QA IndexedDB database and reads the `events` and `outbox` stores in the **same readonly transaction**, preventing inconsistent exports during a concurrent write.
- The backup is versioned `math-v2-journal-backup-r10`, scoped to one explicit opaque learner ID, with `created_at`, full events, pending receipts and a canonical SHA-256 integrity check. Source events are checked for type/evidence-lane validity, duplicate IDs and learner ownership. Each pending receipt must refer to an actual event in the same snapshot.
- Restore validates scope, structure and hash **before** writing. Both stores are restored in one `readwrite` transaction. An occupied target refuses replacement unless both `replace:true` and `acknowledged:true` are explicitly supplied. Forced-abort tests confirm the original snapshot remains intact.
- The browser QA `scripts/test-math-v2-journal-backup-r10-browser.py` exercises desktop 1365px and 390px: one device with three distinct event types and two pending receipts; hash verification, tamper rejection, disabled restore, transfer to isolated device context, conflict/acknowledgment and forced rollback, reload durability and untouched legacy localStorage sentinel.

## Out of scope / limitations

The R10 exporter remains only under `scripts/prototypes/`, not on actual learner pages and not in the existing backup UI. It does not import legacy cumulative Practice, Readiness or Written aggregates; old scores cannot be inferred from a clean V2 journal. It does not establish account-backed multi-device sync, and backup SHA-256 proves transfer integrity rather than authenticity against a malicious actor who recomputes the hash.

A subsequent controlled learner-facing canary should provide a **downloadable JSON file** plus user-led restore UI, test iPad Safari restrictions and offline/local storage failure modes, then obtain separate owner approval for changing visible counts. If historical data cannot be safely replayed, archive it and label a clean V2 start rather than fabricating attempts.

**QA PASS is not permission to delete old learner data or enable the new counter.**