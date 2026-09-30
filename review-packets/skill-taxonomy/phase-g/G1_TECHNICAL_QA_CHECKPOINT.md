# Phase G1 — Practice shadow canary technical QA checkpoint

**Date:** 2026-09-30  
**State:** `STAGED / TECHNICAL_QA_PASS / NOT_MERGED / NOT_DEPLOYED`

## Academic authorization

NotebookLM independently reviewed Phase G productionization R1:
- packet `MATH-CANONICAL-EVIDENCE-PRODUCTIONIZATION-G1-R1-20260930`;
- source blob `1d2b4fbb736002a6c3ef9e8329e6d4605346ebe1`;
- design blob `9302ba28e1c9bf506a290b7b05f6defee2d38e92`;
- verdict **PASS, 0 revisions, 9/9 architecture questions PASS**.

Authorization is limited to technical implementation/QA of G1.

## Staged implementation

Draft PR #217, exact tested HEAD:
`540be8b17ffb12dd26c8dee459ff8874a57156b5`

Scope:
- exact 27 Beta-v4/v5-proven Practice items;
- 7 canonical skills;
- max 16 skill/topic-scoped independent units;
- no normal learner-facing UI change;
- no G2/G3 activation.

Store/integration:
- frozen Beta `toan-thcs-canonical-evidence-v1` remains untouched;
- new production `toan-thcs-canonical-evidence-v2`;
- bounded `recent_events` (1000) + persistent `seen_questions` + `independent_units`;
- legacy Practice write first; canonical observer second/fail-open;
- no retry/backfill;
- canonical primary from reviewed runtime policy, not legacy tag order.

## Exact-head technical QA

All three workflows at tested HEAD succeeded:
- Roadmap PR Quality `36698929683`: **SUCCESS**.
- Skill assessment pilot QA `36698929574`: **SUCCESS**.
- G Learning branding QA `36698929696`: **SUCCESS**.

Roadmap QA evidence:
- 27 source-locked rows / 7 skills /16 skill-topic units PASS;
- assistance, negative evidence, repeat, clone and cross-topic semantics PASS;
- retention stress: 1000 recent events retained while 1105 de-dup indexes remain preserved;
- synthetic v2 store size 1,175,762 bytes;
- actual Practice browser QA across CĐ04–07 PASS;
- forced observer failure produces identical legacy Practice stats;
- assessment-v1, assessment-v2 and frozen canonical-v1 remain unchanged;
- normal learner UI has no canonical panel;
- QA-only debug surface is opt-in via query.

Artifact:
- id `11089467337`;
- digest `sha256:bbd5da8d5f0aecece709f4e17601fe57a3b76fcbd2f6d1db41e9b36f20f382fe`.

Historical note: first Roadmap run `36698435149` failed only from incorrect Playwright Python test argument syntax. No product/unit assertion failed. The test was corrected and the exact HEAD above passed all gates.

## Release boundary

PR #217 remains draft and is not merged/deployed.

Still OFF:
- G2/G3;
- mastery/readiness score or labels;
- canonical remediation/weak-skill ranking;
- migration/backfill/regrade;
- normal learner-facing canonical UI;
- PENDING/NO/Extension capture;
- capture outside exact G1 policy.

**Next gate:** explicit owner controlled-release decision for G1 shadow capture. If released, owner real-device QA must use the QA debug surface to confirm v2 capture while normal learner UI remains unchanged before any G2 consideration.
