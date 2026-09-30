# Phase G2 — proven-skill expansion technical QA checkpoint

**Date:** 2026-09-30  
**State:** `STAGED / TECHNICAL_QA_PASS / NOT_MERGED / NOT_DEPLOYED`

## Academic authorization

NotebookLM G2 R1 compact completion check:
- packet `MATH-CANONICAL-EVIDENCE-G2-PROVEN-SKILLS-R1-20260930`;
- source blob `95b32fa4b5ebebdc88886cc9725b7b90ae991e46`;
- **74/74 delta item PASS**;
- **8/8 architecture checks PASS**;
- authorization limited to separate G2 technical implementation/QA.

## Staged implementation

Technical PR #224.

Exact tested HEAD:
`56892b0d5b8a9791e99e48e4f9022412097e764b`

Boundary:
- 101 runtime-policy rows = 27 existing G1 + 74 G2 delta;
- same 7 proven canonical skills;
- max 23 topic-scoped independent units;
- CĐ04–07 only;
- production store remains `toan-thcs-canonical-evidence-v2`;
- Beta v1 remains frozen/read-only;
- no migration/backfill/regrade;
- no normal learner-facing canonical UI;
- mastery/Readiness/remediation/ranking remain OFF.

Runtime validator now enforces the actual 101/27/74/7/23 boundary and exact CĐ04–07 topic set, rather than trusting only metadata counts.

## Exact-head technical QA

Roadmap PR Quality run `36708260947`: **SUCCESS**.

Key evidence from the exact-head run:
- G1 regression subset: 27 accepted rows preserved inside the G2 101-row policy — PASS;
- synthetic retention/store stress remains PASS; 1000 recent events retained and de-dup indexes preserved;
- synthetic store size: 1,175,762 bytes;
- G2 manifest↔runtime-policy reconciliation: 101 = 27 G1 + 74 delta — PASS;
- G2 boundary: 7 proven skills / 23 topic-scoped units — PASS;
- G2 delta semantics: clone repeat, standalone units, cross-topic independence and negative evidence — PASS;
- strict MkDocs build — PASS;
- real Practice browser QA across CĐ04–07 — PASS;
- G2 delta capture, clone, negative evidence, cross-topic identity and method-selection semantics — PASS;
- legacy-write-first/canonical-fail-open regression remains protected;
- frozen assessment/Beta stores remain untouched;
- no normal learner-facing canonical panel.

QA artifact:
- id `11093235811`;
- digest `sha256:e1a971357be742e5f3da39c93fea0326e199152902c96fc169c8506b960eb916`.

## Release boundary

PR #224 is not merged and not deployed.

Still OFF / not authorized by this checkpoint:
- production release;
- G3;
- mastery labels/percentages/thresholds;
- Core Readiness credit;
- canonical remediation/weak-skill ranking;
- migration/backfill/regrade;
- PENDING/formative-only capture;
- capture outside the exact G2 CĐ04–07 seven-skill boundary.

**Next gate:** explicit owner controlled-production-release authorization for exact tested HEAD `56892b0d5b8a9791e99e48e4f9022412097e764b`. After release, owner production QA should confirm new G2 delta capture on a small representative set while normal learner UI remains unchanged.
