# Math Phase 4 R13 — Durable submission intent / same-event retry

**Date:** 2026-10-17 · **Status:** QA CANDIDATE ONLY · NO LIVE LEARNER CUTOVER

## Context and owner checkpoint

R12 (#498) verified the real local-progress backup contract on disposable desktop/mobile fixtures. The owner has visually checked R12 on two real devices: PC 149 Practice attempts / 2 Readiness submissions / 10 backup zones; phone 116 / 2 / 10. Both independent device SHA-256 preflights displayed PASS and agreed with their own real learner progress dashboards. These are **device-local, potentially overlapping histories** and must not be summed or silently converted to 265 events. The screenshots do not prove a JSON was downloaded and preserved; keep separate archive files before a live release.

R6 created an atomic QA-only IndexedDB event journal/outbox. R8 returns `SAVED` only after a new canonical event is committed. However, R8 requires the caller to hold an identical `event_id` through errors and browser reloads. If the caller generates a new ID for a retry, an otherwise correct journal would count that retry as another answer. R13 closes this *QA contract gap*, not production integration.

## How R13 works

`scripts/prototypes/math-v2-stable-submission-intent-r13.js` uses a **separate QA-only IndexedDB** database `math-v2-qa-submission-intents-r13`. An opaque caller-provided `submission_key` stands for **one single learner submission action**, not a question ID and not a random ID regenerated on every retry. The key is unique together with an explicit synthetic learner scope.

- Feature flag defaults off and no intent/journal write is attempted while disabled.
- `stage({submission_key,item_id,kind,correct?})` allocates `event_id` + `occurred_at` **once** in an IndexedDB readwrite transaction. Repeating the same key+payload returns the original event_id; a conflicting answer/content under the same key rejects safely.
- `commit(submission_key)` loads that immutable intent and calls the reviewed R8 journal-first writer. A blocked/failed journal write returns `NOT_SAVED`; the staged intent remains ready for replay after reload.
- Once the R6 event/outbox transaction commits, `SAVED` is true and R13 tries to mark the local intent receipt `SAVED`. The intent receipt and journal are **separate databases**, so there is **no cross-database atomic transaction**. A simulated crash after the journal commit but before the intent receipt leaves the original intent staged. Replaying the *same event_id* through R8 causes a duplicate acknowledgment but no extra count, then repairs the receipt.
- `pending()` lists unresolved staged intents for that learner scope. It never invents historical attempts or mixes device identities.
- Practice answers, submitted independent Readiness, and Written self-check use distinct canonical types. Written still yields zero automatic Readiness credit.

## Browser and QA checks

`scripts/test-math-v2-stable-submission-intent-r13-browser.py` exercises real IndexedDB on disposable 1365px and 390px Chromium contexts with QA-only scope. It checks disabled mode, idempotent staging, conflicting answer rejection, simulated journal unavailability, reload-stable IDs/timestamps, true journal recovery, simulated loss of the local saved receipt, replay without double count, same-token concurrent submissions, scope isolation and byte-for-byte preservation of the original learner Practice/Readiness stores.

No R13 script is referenced from `docs/` or `mkdocs.yml`. No live score calculations, existing question IDs, answer keys, localStorage keys, backup allowlist or school records change.

## Required before real activation

1. A production Practice/Readiness UI must allocate a unique **submission token once per actual answer or test submit**. The same question attempted again intentionally gets a NEW submission token; pressing retry on a failed save retains the original token and content.
2. The UI must not show durable saved status or update canonical new counters until the event journal transaction commits.
3. Provide learner-facing pending-intent diagnostics, retry action and device-specific identity; test browser quota/permission errors on real iPad Safari, cross-tab races and file-based export of any new authoritative event ledger.
4. Resolve real assessment grading/result payloads as **original authoritative evidence** rather than using R13's unscored QA readiness event, and enforce independent Readiness versus formative/written separation.
5. Obtain explicit owner QA gate, archive current real local progress on each device, label any clean v2 metric epoch and provide a rollback path. Legacy backups must remain separate from R11 QA JSON.

**R13 QA PASS is not a license to replace production recording or delete old learner history.**
