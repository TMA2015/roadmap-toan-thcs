# Phase F / Beta v5 — technical QA checkpoint

**Date:** 2026-09-30  
**State:** `STAGED / TECHNICAL_QA_PASS / NOT_MERGED / NOT_DEPLOYED`

## Academic gate

Audit PR #208 records NotebookLM PASS for packet `MATH-SKILL-PHASE-F-EXPANSION-R1-20260930` on source blob `70d044f1de98f5b283a3e54fdecfd07fb25d82bd`.

- 15/15 items reviewed.
- 0 revisions.
- 5 canonical skills in batch.
- Maximum 9 new independent evidence units.
- Prospective cross-topic aggregation PASS.
- Mixed evidence classes with descriptive breakdown PASS.
- Legacy-tag boundary PASS.
- Append-only reuse of `toan-thcs-canonical-evidence-v1` PASS.

## Staged implementation

Draft PR #210: `feature/canonical-evidence-beta-v5-phase-f-20260930`.

Exact tested HEAD: `1614bf89d8f85a8c40f950fefea7501a4c5cc9ea`.

Scope:
- separate opt-in Beta v5 multi-topic page;
- 15 reviewed questions across CĐ04–07;
- dynamic topic labels;
- evidence-class labels: Nhận biết / Chọn cách làm / Kết quả cuối / Đáp án cuối;
- max 9 new independent evidence units under reviewed clone-family de-dup;
- same canonical store as accepted Beta v4, append-only;
- skill history can combine actual prospective v4 + v5 canonical events while retaining topic/evidence_class;
- canonical primary follows reviewed overlay, not legacy tag order;
- Beta v4 remains unchanged.

## Technical QA evidence

All three PR workflows at tested HEAD PASS:

- Roadmap PR Quality run `36688748721`: **SUCCESS**.
- Skill assessment pilot QA run `36688748761`: **SUCCESS**.
- G Learning branding QA run `36688748845`: **SUCCESS**.

Roadmap PR Quality explicitly reports:
- `PASS Phase F Beta v5: 15/15 source-locked items, 5 skills, 4 topics, 9 units.`
- `PASS prospective cross-topic aggregation with topic/evidence-class breakdown.`
- `PASS legacy tag order boundary and no secondary-tag canonical event.`
- mobile browser PASS for 15 items, dynamic topics and 9 new independent units;
- browser PASS for v4+v5 prospective aggregation with evidence-class/topic breakdown;
- legacy stores remain immutable and the seeded v4 canonical event remains preserved;
- desktop/mobile render with zero page errors and no horizontal overflow.

Visual/browser artifact:
- artifact id `11085062148`
- workflow run `36688748721`
- digest `sha256:49c4ba8d67261690c8adf561faef64c7f03f1aeafa6c236a788f60dadc20f8da`

## Safety / release boundary

PR #210 remains draft and is not merged/deployed.

Still prohibited:
- mastery threshold, mastery percentage or Mastered labels;
- Core Readiness credit;
- historical backfill/regrade/migration;
- Practice Engine interception;
- PENDING/NO/Extension nodes;
- scope expansion beyond reviewed 15 items;
- automatic production deployment.

**Next gate:** owner decision on controlled production release of the isolated Beta v5 page. After any release, owner real-device QA remains a separate acceptance gate.
