# Phase F / Beta v5 — production release checkpoint

**Date:** 2026-09-30  
**State:** `PRODUCTION_RELEASED / OWNER_DEVICE_QA_PENDING`

## Release authorization

Owner explicitly approved controlled production release of Beta v5 after the staged academic + technical gates passed.

## Exact release lineage

- Academic audit PR: #208 — NotebookLM PASS 15/15, 0 revisions.
- Implementation PR: #210.
- Exact reconciled release HEAD: `5017ffc134b9bd076771fa5496d8fb23149fb20b`.
- Release branch merge-base before merge: current `main` `ececaf81cb577cee1174e8118df07abd516b593c`.
- Branch behind_by before release: `0`.
- Production squash merge: `371b4980586ae684729060ae1a4c8dc1443cb45d`.

## Release-head QA

All three workflows on exact release HEAD succeeded:

- Roadmap PR Quality `36690938386`: **SUCCESS**.
- Skill assessment pilot QA `36690938362`: **SUCCESS**.
- G Learning branding QA `36690938341`: **SUCCESS**.

The release-head diff remained limited to the same 8 reviewed Beta v5 runtime/config/page/test/QA files.

## Production deploy

- Deploy MkDocs run: `36691324129`.
- Result: **SUCCESS**.
- Production route:
  `https://tma2015.github.io/roadmap-toan-thcs/huong-dan/thu-nghiem-bang-chung-da-chuyen-de-v5/`

## Released scope

- separate opt-in Beta v5 multi-topic page;
- 15 source-locked items across CĐ04–07;
- 5 canonical skills in the Phase F batch;
- maximum 9 new independent evidence units;
- same canonical store `toan-thcs-canonical-evidence-v1`, append-only;
- prospective v4+v5 canonical history with `topic` and `evidence_class` retained;
- learner-facing breakdown by evidence class and topic;
- canonical primary follows reviewed Phase D overlay rather than legacy tag order;
- no second canonical event from legacy secondary tags;
- accepted Beta v4 remains unchanged.

## Boundaries that remain OFF

- mastery threshold / mastery percentage / Mastered labels;
- Core Readiness credit;
- historical backfill / regrade / migration;
- Practice Engine interception;
- PENDING / NO / Extension nodes;
- expansion beyond the reviewed 15 Phase F items.

## Next gate

Owner real-device production QA. Automated QA does not substitute for owner acceptance. Recommended checks: dynamic CĐ04–07 labels, evidence-class labels, 15-item flow, 9-new-unit maximum on a clean Phase F session, v4+v5 history breakdown, and no mastery/readiness claim.
