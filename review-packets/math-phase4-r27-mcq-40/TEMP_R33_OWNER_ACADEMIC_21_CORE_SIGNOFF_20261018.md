# R33 — Owner academic approval of 21 KNTT-Core Grade 6–7 MCQs

**Date:** 2026-10-18  
**Packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Approval scope:** exactly **21 source-checked Grade 6–7 MCQs**, specifically `NUM02V1_121–132`, `NUM02V1_145–147`, `ALG04V2_133–138`.  
**Approval source:** Project Owner explicitly agreed in the active chat to **academically accept the 21 Grade 6/7 questions now**, while holding the three Grade-9 CT12 items for a separate academic layer/evidence-type decision. This is the owner's signoff, **not** NotebookLM independently granting authorization.

## Exact accepted classifications

| Group | IDs | Approved evidence-type distribution | Approved primary layer |
|---|---|---|---|
| Rounding / estimation, Grade 6 KNTT Toán 6 tập 2 Bài 30 | `NUM02V1_121–132` (12) | 4 `STRUCTURAL_CLONE`, 8 `CONCEPT_BASE` | `KNTT-Core` |
| Absolute value, Grade 7 KNTT Toán 7 tập 1 Bài 7 | `NUM02V1_145–147` (3) | 2 `STRUCTURAL_CLONE`, 1 `CONCEPT_BASE` | `KNTT-Core` |
| Division of polynomials, Grade 7 KNTT Toán 7 tập 2 Bài 28 and Luyện tập chung | `ALG04V2_133–138` (6) | 2 `STRUCTURAL_CLONE`, 4 `CONCEPT_BASE` | `KNTT-Core` |
| **Approved total** | **21** | **8 `STRUCTURAL_CLONE`, 13 `CONCEPT_BASE`, 0 `EXACT_MATCH`** | **21 `KNTT-Core`** |

Every ID's original exact question stem, source Git blob SHA, original 4 options/answer index, printed SGK locator, evidence type and approved layer are preserved in the source-locked JSON signoff receipt:

`TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json`

### Evidence basis and qualifications

- Original SGK KNTT source pages from the owner's Toán 6 tập 2 scan, original NXBGD Toán 7 page views and the R33 per-item matrix were checked. NotebookLM independently returned `PASS` on all 21 Grade 6/7 rows and **the same evidence type and Core placement** as the R33 editorial proposals.
- The reviewer report's summary counted `STRUCTURAL_CLONE=12 / CONCEPT_BASE=12` for all 24 rows; the *actual 24-item table* contains `11/13`. **This error does not affect the 21 approved rows**: the table and R33 matrix independently agree on **8/13** for Grade 6/7. The original report is retained without rewriting its summary.
- The accepted `STRUCTURAL_CLONE` and `CONCEPT_BASE` labels describe *academic alignment to textbook reasoning/knowledge*, **not** permission to mark those items as new canonical reviewed Skills or inflate skill coverage.

## Explicit hold — the remaining 3 CT12 items

`QUA12V1_121`, `QUA12V1_122` and `QUA12V1_123` are **NOT approved in this decision** for a final S1 evidence category or curriculum layer. NotebookLM proposes `STRUCTURAL_CLONE + Entrance10`, while the older R33 source audit proposed `CONCEPT_BASE + LAYER_HOLD`. Those claims require a separate owner choice. An authentic TP.HCM 2024 exam demonstrates one transferable intersection structure; it does not prove national prevalence. SGK GeoGebra intersection activities are not, without further reasoning, exact manual intersection/tangency clones.

The revised wording of `QUA12V1_121` was separately approved and merged in PR #520, with reviewer mathematical PASS on the new SHA. This **does not authorize its curriculum layer** in the current R33 21-ID signoff.

## Implementation boundary

| Operation | Status |
|---|---|
| Academic `PASS` and `KNTT-Core` source-layer receipt on the 21 IDs | **OWNER APPROVED** |
| Change MCQ contents/keys/options or 40-ID historical R27 receipts | **NOT AUTHORIZED** |
| Change 3 Grade-9 CT12 evidence types or primary layers | **NOT AUTHORIZED** |
| Runtime Skills / Assessment / Readiness / Mastery eligibility | **NOT AUTHORIZED** |
| Historical learner data changes, regrade, migration or backfill | **NOT AUTHORIZED** |
| Import source-layer tags into canonical production bank automatically | **NOT AUTHORIZED** |
| Merge or release PR #519 based solely on this 21-ID signoff | **NOT AUTHORIZED** |

R33 QA must verify the exact 21 IDs in the approval receipt, their historical source blobs, original question strings and zero-index answer keys, 8/13 evidence-type counts, and exactly three distinct still-pending CT12 IDs. **Approval is meaningful and recorded, but there is no student-facing change.** The current R33 GitHub branch remains Draft until the separate remaining academic issue is decided.

**Review provenance:** Master Plan v1.2.1; NotebookLM Math Review Rules v1.2; current R27/R33 exact-source inventories and the user's 2026-10-18 independent NotebookLM 24-row report.
