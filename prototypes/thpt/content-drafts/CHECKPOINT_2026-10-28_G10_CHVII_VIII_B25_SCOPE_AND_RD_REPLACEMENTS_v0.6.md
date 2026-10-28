# CHECKPOINT v0.6 · G10 Chương VII–VIII · B25 scope R01 and Core-Readiness replacements

**Date:** 2026-10-28. **Workstream:** Content only, branch `content/thpt-g10-chvii-chviii-authoring-20261028`, originally forked from Draft PR #612; no edits to PR #612 integration branch, Golden UI R4, ChVI, THCS, engine, data, or deploy.

## Source review receipts retained (snapshot-scope, not chapter PASS)

1. Original NotebookLM `THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028`: seven B19–25 D1–D2 snapshots PASS; 14 originally reviewed Readiness candidates Math PASS on their original wording; release NO.
2. NotebookLM Delta `THPT-G10-CHVII-VIII-D1D2-RD-DELTA-20261028-R1`: replacement `THPT-G10-CHVII-RD09` Math/Rubric/Heldout PASS, six S1 rows FULL so **35/35 canonical outcomes have S1 reviewer receipts**; release NO.
3. NotebookLM B25 scope boundary `THPT-G10-CHVIII-B25-CORE-BOUNDARY-DELTA-20261028-R01`: exactly six IDs reviewed, `ACADEMIC_OVERALL=PASS_WITH_SCOPE_TIERING`, `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. B25-C01/C02 core eligible; B25-P02/P06 optional extension; ChVIII-RD05/RD06 optional extension **and ineligible for mandatory SGK Chapter VIII Readiness**.

## B25 canonical placement delta (no stem/key changes)

| Canonical item ID | Authoring-level scope | Role/slot action | Review status |
|---|---|---|---|
| `THPT-G10-B25-C01` | CORE_ELIGIBLE | Retain SGK Core candidate | B25 scope reviewer PASS only; D3/D4 bank pending |
| `THPT-G10-B25-C02` | CORE_ELIGIBLE | Retain SGK Core candidate | B25 scope reviewer PASS only; D3/D4 bank pending |
| `THPT-G10-B25-P02` | OPTIONAL_EXTENSION / suggested SUPPORT_EXTENSION | Remove from mandatory basic practice; optional advanced placement | Math answer unchanged; D3/D4 pending |
| `THPT-G10-B25-P06` | OPTIONAL_EXTENSION / suggested ELECTIVE_SPECIALIZED | Advanced elective placement only | Math answer unchanged; D3/D4 pending |
| `THPT-G10-CHVIII-RD05` | OPTIONAL_EXTENSION, Math PASS retained | **Unmap** from mandatory `CHVIII-READ-B25-01` candidate slot; optional-extension record only | Do not retire original canonical ID; no secure activation |
| `THPT-G10-CHVIII-RD06` | OPTIONAL_EXTENSION, Math PASS retained | **Unmap** from mandatory `CHVIII-READ-B25-02` candidate slot; optional-extension record only | Do not retire original canonical ID; no secure activation |
| `THPT-G10-CHVIII-RD07` | Candidate CORE | Proposed new `CHVIII-READ-B25-01` slot, **HELDOUT / NOT_REVIEWED** | New Math/Rubric/Exposure review required |
| `THPT-G10-CHVIII-RD08` | Candidate CORE | Proposed new `CHVIII-READ-B25-02` slot, **HELDOUT / NOT_REVIEWED** | New Math/Rubric/Exposure review required |

**Academic delta:** changing role/placement of optional candidates and adding two new mathematical assessments is `DELTA_C_ACADEMIC_MATERIAL`. The six-ID B25 scope reviewer resolves the old curriculum conflict but **does not** certify the two new core replacement items.

**Private handoff ready:** `Temp_THPT_G10_CHVIII_B25_READINESS_REPLACEMENTS_RD07_RD08_REVIEW_20261028.md`. Actual new stems/keys/rubrics were authored **outside GitHub**; the public repository contains IDs/status only. Do not copy these questions or their answer keys to HTML/JS or public static content, or expose hints/Tutor/correctness before Final Submit. Server-side key security and learner exposure tracking are **requirements not yet demonstrated in runtime**.

## Readiness status after scope reconciliation

- Chapter VII: original RD02 = permanently `RETIRED_EXPOSED_CANDIDATE`; new RD09 = reviewer Math/Rubric/Heldout PASS, still not activated; seven original remaining ChVII candidates keep earlier math review PASS.
- Chapter VIII: RD01–RD04 keep earlier math review PASS as **candidates**; RD05/RD06 keep math PASS only as optional extension, not mandatory chapter readiness; RD07/RD08 pending independent delta review.
- Planned **mandatory-SGK Chapter Readiness slots**: 8 ChVII + 6 ChVIII = 14, of which **12 carry snapshot-scoped mathematical review PASS and 2 have no academic review yet**. None are authorized production items.
- Topic Readiness is independent and has no academic PASS from SGK chapter receipts. SGK only includes Core under SGK lesson; topic menu three sections: Knowledge / Practice / Topic Readiness (no dedicated Core tab).

## The next bank review gate

Actual original source file headings have **63 unique existing C/P/Application/Written item IDs**: ChVII 36 and ChVIII 27, with 7 Written (2 Anchor tags inside the 7). Full stem/answer/solution/hint/rubric **D3/D4 not reviewed**; the current NotebookLM boundary verdict is not a substitute for D3/D4 per-item audit. Next handoff by chapter should deliver two full self-contained snapshots or a Temp_ ZIP if combined with the 35-outcome/figure pack, adhering to protocol 06 and delta policy 07. Reviewer must reconcile all item IDs, correctness, source depth, appropriate mathematical level, clones, accessibility of diagram, and canonical placement.

## Preserved governance

- S1 printed ranges: ChVII SGK 29–58, SBT 27–49; ChVIII SGK 59–79, SBT 50–59.
- Reviewer label spellings like `SUPPORT_EXTENSION` and `ELECTIVE_SPECIALIZED` are **academic metadata suggestions, not verified runtime enum constants**. Keep flagged in docs; no engine writes.
- Do not infer whole-chapter Academic PASS from D1–D2 and 35/35 S1 outcome receipts. Do not merge/deploy, edit ChVI integration files or award learner score/mastery.

```text
SOURCE_REVIEW_B25_R01|PASS_WITH_SCOPE_TIERING
B25_CORE|C01,C02
B25_OPTIONAL|P02,P06
CHVIII_RD05_RD06|MATH_PASS_OPTIONAL_EXTENSION_NOT_CORE_READINESS
CHVIII_RD07_RD08|NEW_HELDOUT_NOT_REVIEWED
MANDATORY_CHAPTER_READINESS_PLAN|14_SLOTS_12_REVIEWED_CANDIDATES_2_PENDING
D3_D4_63_ITEMS|NOT_REVIEWED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
