# Toán 10 KNTT · D5 PASS SVG asset-to-canonical-item placement manifest v0.1

**Status:** `D5_ACADEMIC_PASS_SCOPED` / `D6_BROWSER_DEVICE_QA_PENDING` / `METADATA_ONLY_NOT_RUNTIME` / `NO_MERGE_DEPLOY`. **Reviewer:** `THPT-G10-CHVII-VIII-D5-THREE-SVG-REVISION-20261028-R1`, FIG04 inherited `THPT-G10-CHVII-VIII-D5-FOUR-SVG-BATCH-20261028-R0`. Exact SVG files and SHA are immutable academic snapshots: if a file changes, require appropriate delta review.

This register **does not duplicate SVG source, answer key, canonical item, attempt, history or score**. It records only attachment references for future safe learning-path integration. A referenced item may have different SGK and Topic placements under a single canonical identity; Topic must independently cover its own Knowledge/Practice/Readiness.

| Fig ID | Single SVG asset path (under `prototypes/thpt/visuals/`) | Git blob SHA reviewed | Canonical item ID | Authorized *planned* display context (no live route) | Risk/gate |
|---|---|---|---|---|---|
| FIG-01 | `THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg` | `8964b708aac7cf56d1848db9d469f2573ce40873` | `THPT-G10-B19-P06` | SGK Practice worked solution / post-check explanation; potential Topic Practice equivalent placement only if subject scope qualifies | Figure **reveals target equation**; **never show as unseen check question or protected readiness evidence before submit** |
| FIG-02 | `THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg` | `08e22fbc8ed90db7ccc48d782eb270404f057226` | `THPT-G10-B21-P03` | SGK Practice post-check worked explanation; Topic Practice same canonical ID only if approved | Figure gives tangent/contact geometry; not unexposed answer evidence |
| FIG-03 | `THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg` | `e28c6500b486ee755fad0fc164d48969fd891c55` | `THPT-G10-B22-P06` | SGK/Topic Practice **post-check** solution illustration if topic scope fits | Figure displays focus/directrix distances; no pre-submit answer exposure in assessments |
| FIG-04 | `THPT_G10_B23_COUNTING_TREE_DRAFT.svg` | `f24fcdf80d2a4ffc935a415197b30f48a54b4817` | `THPT-G10-B23-C02` | SGK Knowledge worked example or SGK Core **post-check** explanation; Topic Knowledge worked visual or Topic basic Practice **post-check** | Six outcome leaves display full answer, **not before checking an unrevealed Core question** |

## Rendering and security contract for D6

1. Do not integrate this manifest into production until D6 static, visual, browser, screen-reader, role navigation and exposure checks are passed. `D5 PASS` is academic, **not integration clearance**.
2. SVG is the one reusable asset; `asset_path` links to that file, and `canonical_item_id` always refers to the same item. **No cloned item/solution/attempt** and no extra Topic Core page.
3. For any learner-facing *assessment* (SGK Chapter Readiness or Topic Readiness): **do not use answer-bearing lesson/practice diagrams or canonical items that were already exposed** as fresh Readiness evidence. No hints, solutions, correctness indicators or Tutor answer leaks before **Final Submit**. Protected answers/rubrics must be server-side, not embedded in HTML/JS/browser assets.
4. Shared item exposure must be checked across SGK and Topic branches; visually showing an answer counts as exposure even if no submit occurred. Revisiting seen items may be practice/review, **not independent mastery** without an approved controlled variant.
5. D6 QA must check mobile layout of actual student pages, SVG `title`/`desc` alt semantics, minimum legibility and font fallback in Chrome/Safari/iPhone/iPad, zoom/scroll, dark and light appearance, and consistent Golden UI R4 adaptive 1/2 level Knowledge tabs.
6. No additional UI menu sections. SGK path remains Knowledge/Core/Practice/Application plus **chapter-end Readiness**; Topic exactly Knowledge/Practice/Topic Readiness. Existing R4 design locked, only separate owner-approved navigation delta 4→3 for Topic.
7. Reviewer P2 physical-device caveat is **open**. Validating SVG XML and CairoSVG render is not physical mobile/browser QA.

```text
D5_APPROVED_ASSET_REFS|4
D5_ACADEMIC_STATUS|PASS
D6_BROWSER_DEVICE|NOT_TESTED
D6_ANSWER_EXPOSURE|NOT_TESTED
D6_ACTIVE_INTEGRATION|NO
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
