# Phase G2 — owner production QA PASS

Date: 2026-09-30

Owner tested the live CĐ07 Practice flow and supplied screenshots of the production debug panel plus normal Practice/result/support UI.

## Direct production observations

Live debug panel shows:
- build: `canonical-evidence-g2-proven-skills-20260930`
- `policy_ready = true`
- `policy_error = null`
- store key: `toan-thcs-canonical-evidence-v2`
- Beta v1 key remains `toan-thcs-canonical-evidence-v1`
- observed snapshot: `recent_events = 5`, `seen_questions = 5`, `independent_units = 5`
- positive live capture:
  - `RAT07V1_115`
  - canonical skill `tinh-gia-tri-phan-thuc`
  - `captured = true`
  - `independent_evidence = true`
  - reason `first_unseen_unit`
- live negative policy boundary:
  - `RAT07V1_114`
  - `captured = false`
  - reason `not_in_g2_policy`

The supplied Practice screenshots also show the ordinary learner flow remained intact: answering, feedback, next/similar question actions, result summary, progress/remediation controls and help panel render normally; the canonical QA panel is only present under the explicit debug query.

## Scope interpretation

`RAT07V1_115` is part of the existing G1 subset, not one of the 74 new G2 delta rows. `RAT07V1_114` is outside the G2 runtime allowlist, and its observed no-capture result is correct.

Direct positive G2-delta capture was already verified on the exact release HEAD by automated real-Practice browser QA before production release (Roadmap PR Quality run `36708260947`, artifact `11093235811`, digest `sha256:e1a971357be742e5f3da39c93fea0326e199152902c96fc169c8506b960eb916`). The production screenshots confirm that the same G2 build and policy load successfully on the live site and that the allowlist boundary behaves correctly.

Taken together—exact-head delta browser QA + identical controlled release + successful Pages deploy + live owner confirmation of the G2 build/policy/store/boundary—the G2 production acceptance gate is satisfied without requiring the owner to hunt for a randomly served delta question.

## Decision

**OWNER PRODUCTION QA PASS.**

Task `MATH-CANONICAL-EVIDENCE-PRODUCTIONIZATION-G2-001` is closed DONE.

Accepted live boundary:
- 101 Practice items = 27 G1 + 74 G2;
- same 7 proven canonical skills;
- max 23 topic-scoped independent units;
- CĐ04–07 only;
- shadow capture only;
- store remains `toan-thcs-canonical-evidence-v2`.

Still not authorized:
- G3;
- mastery labels/percentages/thresholds;
- Core Readiness credit from canonical evidence;
- canonical remediation/weak-skill ranking;
- migration/backfill/regrade;
- PENDING/formative-only capture;
- broader CĐ08–25 canonical production capture.

A separate learner-help disclosure/toggle UX issue was observed during owner QA and is intentionally tracked outside the G2 evidence acceptance decision.
