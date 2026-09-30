# Canonical Evidence Beta v4 — technical QA checkpoint

**Date:** 2026-09-30  
**State:** `STAGED / TECHNICAL_QA_PASS / NOT_MERGED / NOT_DEPLOYED`

## Academic gate

Audit PR #202 records NotebookLM PASS for packet `MATH-SKILL-CANONICAL-EVIDENCE-PILOT-R1-20260930` on source blob `18c58eb3c11c7c8ca7e3da1091b6a87787ffa75b`.

- 12/12 items reviewed.
- 0 revisions.
- 3 canonical skills.
- Maximum 7 independent evidence units.
- 5 clone-family pairs + 2 singleton units.
- 8 `phan-tich-tu-mau` occurrences remain supporting metadata only.
- Storage isolation `toan-thcs-canonical-evidence-v1` PASS.
- PASS authorizes technical implementation/QA only, not production release.

## Staged implementation

Draft PR #203: `feature/canonical-evidence-beta-v4-20260930`.

Exact tested HEAD: `175b12499ed6df3155af4d83a33a7afa6d8c4043`.

Scope:
- separate opt-in Beta v4 page;
- 12 unchanged CĐ07 questions;
- one canonical assessed skill per event;
- clone-family evidence de-dup;
- first unassisted incorrect attempt on a new unit remains independent negative evidence;
- descriptive learner-facing counts only;
- no mastery/readiness decision;
- no Practice Engine interception.

## Storage contract

New store only:
- `toan-thcs-canonical-evidence-v1`

Existing stores must remain byte-for-byte untouched by Beta v4:
- `toan-thcs-practice-v1`
- `toan-thcs-assessment-v1`
- `toan-thcs-assessment-v2`

No migration, historical backfill, regrade or dual-write.

## Technical QA evidence

All three PR workflows at tested HEAD PASS:

- Roadmap PR Quality run `36677824734`: **SUCCESS**.
- Skill assessment pilot QA run `36677824732`: **SUCCESS**.
- G Learning branding QA run `36677824752`: **SUCCESS**.

Roadmap PR Quality explicitly reports:
- `PASS 12/12 source-locked Beta v4 items; 3 skills; 7 evidence units.`
- unit checks PASS for clone-family de-dup, negative evidence, singleton evidence, supporting metadata-only and isolated storage;
- mobile browser QA PASS for evidence de-dup + negative evidence + immutable old stores;
- desktop/mobile render PASS with zero page errors and no horizontal overflow.

Visual/browser artifact:
- artifact id `11080419543`
- workflow run `36677824734`
- includes Beta v4 mobile and desktop screenshots along with standard PR previews.

The first Roadmap run `36677543322` failed only because the new test attempted Playwright's separately downloaded browser executable. No product/runtime assertion failed. The test harness was corrected to use the runner-installed Chromium, matching existing project browser tests; exact corrected HEAD above then passed all workflows.

## Release boundary

PR #203 remains draft and is not merged/deployed.

Still prohibited:
- Core Readiness credit;
- mastery threshold or mastery percentage;
- Mastered / Not mastered labels;
- PENDING/NO/Extension counters;
- CĐ04 historical aggregation;
- migration/backfill/regrade;
- integration into normal Practice Room.

**Next gate:** owner decision on a controlled production release of the isolated opt-in Beta v4 page. After any release, owner real-device QA remains separate and must be recorded explicitly.
