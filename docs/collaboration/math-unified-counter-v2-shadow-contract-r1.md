# Phase 4 R2 — Canonical v2 shadow counter contract

**Date:** 2026-10-17 · **Status:** CODED PROTOTYPE / NO LEARNER RUNTIME

This is the next gated engineering step after Phase 4 R1 read-only projection.

## Event contract

`schema=math-evidence-event-v2` with stable `event_id`, device-local opaque `learner_scope`, `item_id`, `kind`, explicit `evidence_class`, and `occurred_at`. An answer attempt requires `correct: boolean`; other lanes reject `correct` to prevent silently importing grades into unrelated evidence.

Five disjoint event kinds:

- `answer_attempt` → FORMATIVE; count answers/correct answers only.
- `readiness_submission` → INDEPENDENT_ASSESSMENT; count submissions, not attempted questions.
- `written_self_check` → SELF_REPORTED; separate counts, zero automatic assessment credit.
- `remediation_action` → REMEDIATION; separate count.
- `exam_submission` → EXAM_ASSESSMENT; separate count.

Replays of exactly identical IDs are deduplicated; a changed payload under an existing ID causes a hard conflict. The reducer rejects cross-learner events under an explicit scope and never infers timestamps or creates phantom past events.

## Transition priority accepted by owner

Reliability of the new data model wins over forcing unreplayable legacy counters into a new event ledger. Preserve an independently validated legacy backup, show an archive/reconciliation preview, then start *new v2 event metrics* at zero where reliable migration cannot be proven. Do not silently delete legacy browser keys, change old grades or claim historical counts were imported.

## QA and boundaries

`scripts/prototypes/math-unified-counter-v2-shadow-r1.js` is pure and usable only in test/review. `scripts/test-math-unified-counter-v2-shadow-r1.js` verifies lane isolation, exact-ID dedup, conflicting-ID rejection, source immutability and no legacy imports. The PR adds a CI gate. **No localStorage writers, learner page scripts, progress UI, Readiness scoring or backup-schema migration are changed here.**

**Next step:** create an opt-in new-event writer behind an explicit feature flag and test atomic storage failure, reload, backup and de-dup in a dedicated canary. Only after that should real counters be switched and old counters archived.
