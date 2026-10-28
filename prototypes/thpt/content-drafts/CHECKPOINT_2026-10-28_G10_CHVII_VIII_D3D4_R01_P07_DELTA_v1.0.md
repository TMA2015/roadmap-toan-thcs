# CHECKPOINT v1.0 · 2026-10-28 · Toán 10 KNTT ChVII–VIII · 63-item D3/D4 verdict and P07 core-coverage delta

**Scope:** authoring-only branch `content/thpt-g10-chvii-chviii-authoring-20261028` forked from Draft PR #612. No ChVI integration, Golden UI R4, THCS, scoring runtime or deploy work. Owner-facing approval never assumed.

## Reviewer receipt received, immutable scope

User submitted full NotebookLM text review `THPT-G10-CHVII-VIII-D3D4-63-CANONICAL-BANK-20261028-R01` for the exact three-file D3–D4 Temp snapshot:
- `CHVII_36_ITEMS_ACADEMIC=PASS_WITH_RECLASSIFICATION`; `CHVIII_27_ITEMS_ACADEMIC=PASS_WITH_RECLASSIFICATION`.
- `ID_RECONCILIATION=EXPECTED_63/REVIEWED_63/MISSING_0/UNEXPECTED_0/DUPLICATED_0`.
- `OUTCOME_MATRIX_COVERAGE=35/35_CHECKED`, **but `G10-B25-CONSTANT_TERM=PARTIAL/GAP` for mandatory Core Practice** because its only linked item B25-P02 is optional extension.
- Reviewer `P0=0`, `P1=4_SCOPE_FLAGS_PLUS_CORE_GAP`, `P2=READINESS_SERVER_SIDE_EXPOSURE_CONTROL`.
- Reviewer reported `ACADEMIC_OVERALL_CHVII=PASS`, `ACADEMIC_OVERALL_CHVIII=PASS` for **original D3/D4 snapshots with required role corrections**. `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`. Not the owner's Academic PASS for D1–D6 / Golden UI / deployment.

Source S1 reported: ChVII SGK Toán 10 KNTT Tập 2 pp.29–58 and SBT pp.27–49; ChVIII SGK pp.59–79 and SBT pp.50–59. These are printed page numbers. Full D5 graph/diagram and D6 student/browser QA remain pending.

## Academic reclassification from reviewer R01

- `THPT-G10-B22-C01`: math correct; ellipse eccentricity e=c/a -> `ELECTIVE_SPECIALIZED`, **must not activate as mandatory SGK_CORE** (old v0.1 bank role now superseded by **academic overlay**). The original canonical ID/key remain unchanged; verify whether B22 has sufficient independent Core ellipse coverage after removing it.
- `THPT-G10-B25-P02`: optional `SUPPORT_EXTENSION` due n=6, 1/x.
- `THPT-G10-B25-P05`: optional `SUPPORT_EXTENSION` due n=6.
- `THPT-G10-B25-P06`: optional `ELECTIVE_SPECIALIZED` due n=7 and even/odd coefficient-sum strategy.
- All four original math keys remain reviewer-scoped correct. The layer values are **academic descriptions**, not confirmed runtime enums. No changed answer, stem, rubric, role in active production.
- Two Anchor labels remain tags within the seven Written canonical items, not extra items.

## Delta prepared on this branch

1. New authoring file `prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_D3D4_R01_RECLASSIFICATION_AND_CONSTANT_TERM_DELTA_v0.3.md` contains the four **ID-only curriculum-role overrides** and the **sole source** of the new item:
   - `THPT-G10-B25-P07`: `G10-B25-CONSTANT_TERM`, `SGK_PRACTICE`, Core-level n=5, new original problem/solution/hint/rubric.
   - `P07_ACADEMIC=NOT_REVIEWED`; `DELTA_CLASS=DELTA_C_ACADEMIC_MATERIAL`; no Readiness placement or mastery.
2. New full 35-row mapping successor `prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.3.md` preserves all canonical outcomes and 63 reviewed item refs; adds P07 to `G10-B25-CONSTANT_TERM` (primary) and `G10-B25-COEFFICIENT_SIGN` (secondary pending review), flags four original optional/specialist items. Matrix v0.2 preserved as reviewer snapshot, v0.3 is latest *authoring* mapping.
3. **One actual Markdown review handoff outside repo**, `Temp_THPT_G10_CHVII_VIII_D3D4_R01_P07_CORE_GAP_DELTA_REVIEW_20261028.md` with new stem/key/solution, exact original reviewer verdict, original four flags, source receipts, expected one new ID, and task-specific review instructions. One file must be accompanied by a short NotebookLM prompt, not GitHub link only.

**Preflight:** five original bank files have **63 unique IDs** (24 + 18 + 14 + 4 Written + 3 Written), new P07 not among them, thus **64 unique authoring candidates**, only **63 have the prior D3/D4 academic review**. New matrix has **35 exact unique outcome rows**. Math for P07 independently checked by SymPy: constant term of its polynomial `-243`, distinct exact polynomial from the reviewed source snapshot. Reviewer still must confirm source scope and quality.

## Additional gates that must remain separate

- Prior D1–D2 knowledge/examples for seven lessons B19–B25: NotebookLM snapshot-scoped PASS.
- Prior 14/14 **eligible Chapter VII–VIII Readiness candidate slots** have NotebookLM snapshot-level review PASS (ChVII RD02 retired/exposed and replaced by RD09; ChVIII RD05/RD06 optional only, replaced by reviewed RD07/RD08 v0.2). 0 active/secure Readiness slots. New P07 is exposed Practice, never used as independent assessment.
- Full independent Topic 10–12 remains incomplete; three Topic pages Knowledge/Practice/Topic Readiness and no Topic Core. SGK lesson Core, Practice and chapter-end Readiness kept. Shared item ID across placements, never cloned answers/attempts/learner history.
- Unfinished four SVG D5 figure audits, end-of-chapter S1 activity-by-activity deep audit, D6 UI/scoring/Final Submit/anti-exposure verification. Golden UI R4 untouched.

```text
PACKET_D3D4_63_R01=PASS_WITH_RECLASSIFICATION_SCOPED
EXISTING_REVIEWED=63
ITEM_RECLASSIFIED=4_EXISTING_IDS
NEW_ITEM=THPT-G10-B25-P07
NEW_ITEM_ACADEMIC=NOT_REVIEWED_DELTA_C
TOTAL_AUTHORING_CANDIDATES=64
OUTCOMES=35
CONSTANT_TERM_CORE_COVERAGE=PARTIAL_PENDING_P07
READINESS_CANDIDATES=14_OF_14_REVIEWED_0_ACTIVE
ACADEMIC_CLEARANCE_FOR_RELEASE=NO
OWNER_ACADEMIC_PASS_WHOLE_CHAPTER=NO
MERGE_DEPLOY=NO
```
