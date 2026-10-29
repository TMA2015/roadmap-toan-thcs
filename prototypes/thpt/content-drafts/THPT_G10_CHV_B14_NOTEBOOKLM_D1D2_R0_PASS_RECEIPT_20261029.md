# NotebookLM independent R0 receipt — Toán 10 ChV B14 D1/D2 PASS (2026-10-29)

**Exact reviewed snapshot:** `prototypes/thpt/content-drafts/THPT_G10_CHV_B14_S1_D1D2_KNOWLEDGE_AUTHORING_v0.1.md` (verified original Git blob `e98dcc7ae936fd85afdaaed2a094f547828e3236`). Reviewer applies only to Bài 14 original D1/D2 knowledge and solved examples; previous B12/B13 D1/D2 scoped PASS preserved. The old source header says review pending because it is an *immutable pre-verdict snapshot*; this metadata-only receipt supplies its current reviewer status.

```text
PACKET_ID|THPT-G10-CHV-B14-S1-D1D2-20261029-R0
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G10_SGK|SGK_TOAN_10_TAP_1_KNTT,TRANG_84-90
SOURCE_RECEIPT_G10_SBT|SBT_TOAN_10_TAP_1_KNTT,TRANG_80-88
PREVIOUS_VERDICTS_PRESERVED|G10_CHIV_ALL_D1D5_READINESS_PASS;G10_CHV_B12_B13_D1D2_PASS
LESSON_B14_D1D2_VERDICT|PASS
OUTCOME_ALIGNMENT_COVERAGE|7/7_CANONICAL_OUTCOMES_CHECKED
KNOWLEDGE_REGISTER_COVERAGE|5/5_KNOWLEDGE_MODULES_CHECKED
EXAMPLE_REGISTER_COVERAGE|7/7_WORKED_EXAMPLES_CHECKED
P0_ERRORS|0
P1_WARNINGS|3
P2_NOTICES|1
MINIMAL_DELTA|AUTHOR_B14_D3_D4_ITEMS;AUTHOR_PRIVATE_CHAPTER_V_READINESS;ADD_D5_STATISTICS_GRAPHICS
ACADEMIC_OVERALL_G10_CHV_B14_D1D2|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

## Original S1 source receipt
- Bài 14, Các số đặc trưng đo độ phân tán: SGK Toán 10 KNTT Tập 1 pp.84–88; SBT Toán 10 KNTT Tập 1 pp.80–85.
- Chương V end-of-chapter exercises: SGK pp.89–90; SBT pp.86–88, **receipts only**, not a Readiness verdict.
- Previous independent source packets: B12 SGK pp.73–77/SBT pp.69–73, B13 SGK pp.78–83/SBT pp.74–79, both D1/D2 PASS. Thus all **three B12/B13/B14 D1/D2 have scoped PASS**, 13 knowledge modules, 17 fully worked examples, 17 outcome IDs. Not yet whole ChV PASS.

## D1/D2 accepted register and scope
- `KT-B14-01` Range, `KT-B14-02` IQR, `KT-B14-03` outlier threshold `1.5×IQR` (reviewer expressly confirms **SGK_CORE**, p.86), `KT-B14-04` variance with division by `n` and frequency-table form (also **SGK_CORE**), `KT-B14-05` standard deviation `s≥0` and correct units, all 5/5 PASS.
- `EX-B14-01..07`: all seven reviewed PASS; `G10-B14-RANGE_UNGROUPED`, `QUARTILE_RANGE`, `OUTLIER_IQR_FENCES`, `VARIANCE_UNGROUPED`, `FREQUENCY_VARIANCE`, `STANDARD_DEVIATION_UNITS`, `COMPARE_DISPERSION` all seven checked.
- **P2:** variance units are squared (e.g. cm², min²), standard deviation has original unit (cm, min). Odd-sample KNTT quartiles exclude median when finding `Q1,Q3`.
- **P1:** D3/D4 canonical Core/Practice/Written items not reviewed, protected Chapter V `SGK_CHAPTER_READINESS` not created/reviewed, original statistical D5 visual graphics not reviewed. A scoped B14 D1/D2 PASS does not confer any of these.

**Academic and security:** SGK full independent Knowledge/Core/Practice + chapter-end `SGK_CHAPTER_READINESS` only after all B12–B14 practice verified, distinct from Topic's exactly three independent sections Knowledge/Practice/Topic Readiness, no Topic Core. One canonical ID, answer, solution, rubric, history shared by placement only. Keep protected heldout sources/keys/rubrics server-side, never in public GitHub/JS; no hint/Tutor/correctness/score before Final Submit. No mastery activation or release permission from NotebookLM academic review. Golden UI R4, THCS, student progress unchanged; no merge/deploy.

```text
G10_CHV_B12_B13_D1D2|NOTEBOOKLM_PASS
G10_CHV_B14_D1D2|NOTEBOOKLM_PASS
G10_CHV_ALL_THREE_LESSONS_D1D2|SCOPED_PASS
G10_CHV_D3D4|NOT_YET_REVIEWED
G10_CHV_PRIVATE_READINESS|NOT_YET_REVIEWED
G10_CHV_D5|NOT_YET_REVIEWED
G10_CHV_WHOLE_CHAPTER|NOT_PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
