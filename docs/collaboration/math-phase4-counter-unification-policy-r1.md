# Math Phase 4 — Counter Unification Policy R1 (2026-10-17)

**Owner priority clarification:** Completion and reliability of the unified learning system outranks indefinite backwards compatibility with historical student counters. This document updates the engineering decision policy; it does **not** authorize silent data deletion or score rewriting.

## Decision

1. Keep current learning/assessment stores **read-only** while prototyping a canonical v2 counter/event pipeline; do not combine formative Practice, independent Readiness, historical exam runs or paper self-check into one mastery number.
2. When the current legacy data model prevents a correct and maintainable migration, prefer a **fresh v2 counter** over inventing fake timestamps, source IDs or reconstructed attempts.
3. Before any production cutover, offer a validated downloadable v1 backup plus a reconciliation/report preview. Historical records can be kept as a legacy archive without remaining a live write dependency.
4. Preserve history if a safe import is possible and proven by fixtures. If safe replay/dedup cannot be shown, label the legacy counts `LEGACY_ARCHIVED_NOT_REPLAYED`; start the canonical v2 counter at zero **only for the new metric** while leaving existing legacy storage intact until the owner has reviewed a separate migration/cutover PR.
5. No forced replacement, deletion, grading change or readiness-credit migration from this audit. Explicit release/owner approval is still needed before any irreversible learner-device mutation.

## Evidence model

- `FORMATIVE` Practice/Micro answer attempts: number of answers, not number of completed lessons.
- `INDEPENDENT_ASSESSMENT` submitted Readiness: number of submissions, not number of answer attempts.
- `SELF_REPORTED` Written: separate learner self-check, never automatic Core Readiness.
- `INTERNAL_CANONICAL_DIAGNOSTIC` and `INDEPENDENT_EVIDENCE_DIAGNOSTIC`: not additive to either above.
- `EXAM_HISTORY` and `REMEDIATION`: own metrics and source identities.

## R1 executable proof

- `docs/assets/javascripts/math-unified-evidence-projection-r1.js` reads existing stores once each, uses no `setItem` or `removeItem`, preserves missing/invalid/unavailable distinctions and does not manufacture timestamped historical events.
- `scripts/test-math-unified-evidence-projection-r1.js` exercises synthetic input, no-write guarantees, unknown/corrupt inputs, and separated metrics. The PR adds a CI gate.
- This is not yet a released v2 learner counter, not a migration, and not an account/cloud synchronization feature.

## Next gate (separate PR)

Implement v2 canonical writer/event semantics **for new attempts** behind a reversible feature flag; run in shadow against synthetic fixtures. Verify idempotent dedup, reload, multi-tab and backup roundtrip. Then run controlled owner QA before switching the visible counts. No mass rollout before a stable canary.
