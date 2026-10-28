# CHECKPOINT v1.2 · 2026-10-28 · G10 ChVII–VIII · D5 R0 verdict received, 3 SVG fixed R1, delta review pending

**Ownership:** isolated authoring branch `content/thpt-g10-chvii-chviii-authoring-20261028`, forked from Draft PR #612. No merge, deploy, Golden UI R4, ChVI/THCS integration, runtime answer bank or learner data changes.

## D1–D4 / Readiness unchanged
- D1–D2 seven lessons B19–B25: snapshot-scoped NotebookLM PASS; 35/35 canonical outcomes S1 reviewer receipts.
- D3–D4 original 63 canonical C/P/Application/Written item IDs: notebook reviewer `PASS_WITH_RECLASSIFICATION`; four curriculum scope tiers as academic placement overlays, not verified runtime enums. Item 64 `THPT-G10-B25-P07`: separate Delta NotebookLM PASS, closes `G10-B25-CONSTANT_TERM` SGK Core Practice gap. `G10-B22-ELLIPSE_PARAMETERS` Core also reviewer PASS via `B22-P01` / `W22-01`.
- 14/14 SGK Chapter VII–VIII held-out Readiness candidate slots previously reviewed on their respective private snapshots; none activated production; keys not in public GitHub. ChVII-RD02 permanently retired/exposed, ChVIII-RD05/RD06 optional extension, ChVII-RD09 and ChVIII-RD07/RD08 v0.2 reviewed replacements.
- SGK / Topic pathways independent; Topic Knowledge/Practice/Topic Readiness only, no Topic Core. Golden UI R4 locked.

## D5 NotebookLM R0 exact reported verdict

```text
BASE_ACADEMIC_PACKET|THPT-G10-CHVII-VIII-D5-FOUR-SVG-BATCH-20261028-R0
FIG_01|HOLD_FONT_GLYPH_AND_INCOMPLETE_B19_P06
FIG_02|HOLD_FONT_GLYPH
FIG_03|HOLD_FONT_GLYPH
FIG_04|PASS_UNCHANGED
FIGURE_REGISTER|EXPECTED=4_REVIEWED=4_MISSING=0_DUPLICATED=0
ACADEMIC_OVERALL_D5|HOLD_REVISIONS_REQUIRED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

Reviewer says mathematical geometry/number-of-cases correct in all four; error from U+2212 appearing as square under CairoSVG/selected font; B19-P06 diagram only showed I on d1/d2, absent d3 and Delta. Optional FIG04 fontsize enhancement not required; intentionally unmodified to preserve scoped PASS.

## R1 applied corrections in existing SVG paths (3 only)

| SVG figure | Original SHA reviewed HOLD | Current SHA after fix | Delta and evidence | Independent R1 verdict |
|---|---|---|---|---|
| FIG01 `THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg` | `d55f5c9dc277ea90affa04416dda2ddd637650c7` | `8964b708aac7cf56d1848db9d469f2573ce40873` | Replace Unicode minus with ASCII; draw d3=x-2y+1=0 (green dashed), Delta=2x+y-6=0 (purple) with shared 55 px/unit scale; Delta passes I and slopes are -2 vs 1/2; move label to avoid line overlap; improve `desc` | PENDING; DELTA_C_ACADEMIC_MATERIAL |
| FIG02 `THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg` | `2f6097cb04ca38625607fe937cc6c52393b3aabc` | `08e22fbc8ed90db7ccc48d782eb270404f057226` | Normalize Unicode minus in coordinates and circle formula | PENDING local display confirmation (minor UI/source-equivalent) |
| FIG03 `THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg` | `8a5df7db0fb0d2ce849990d68d8ff0ed4eba7b86` | `e28c6500b486ee755fad0fc164d48969fd891c55` | Normalize Unicode minus in directrix label | PENDING local display confirmation (minor UI/source-equivalent) |
| FIG04 `THPT_G10_B23_COUNTING_TREE_DRAFT.svg` | `f24fcdf80d2a4ffc935a415197b30f48a54b4817` | same SHA | No changes, preserve original PASS | R0 PASS |

**Local post-fix tests:** all three revised SVG XML parse successfully, each exact UTF-8 blob matched a fresh GitHub SHA, 0 occurrences of U+2212 in the three SVGs; CairoSVG output recreated and previewed, mathematical line endpoints/slope/intersection checked for B19; no square glyph displayed locally. **Not equivalent to actual Chrome/iPhone testing or independent D5 acceptance.** Demo contact sheet `Temp_THPT_G10_CHVII_VIII_D5_R1_VISUAL_CONTACT_SHEET_20261028.png` is a supplemental visual, not a substitute for SVG source.

## Reviewer handoff ready

- **One real Markdown file for NotebookLM:** `Temp_THPT_G10_CHVII_VIII_D5_THREE_SVG_DELTA_R1_REVIEW_20261028.md`, including exactly three complete changed SVGs, before/after original Git blobs, source ranges, questions and expected 3/3 FIGURE_REGISTER. Must include short 3–6 sentence prompt in same reply under protocol 06. The image contact sheet may be viewed separately but not a required Markdown upload.
- Packet `THPT-G10-CHVII-VIII-D5-THREE-SVG-REVISION-20261028-R1`; expected FIG01/02/03, no re-review of FIG04. Request NotebookLM source/math/visual access/mobile note, P0/P1/P2, per-figure verdicts and `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
- D5 remains HOLD pending independent delta verdict. D6 Golden UI browser/device response/Final Submit and true secure server-side answer control remain unreviewed.

```text
D1_D2|PASS_SCOPED
D3_D4|64_ITEM_SNAPSHOTS_REVIEWED_PASS_WITH_RECLASSIFICATION
OUTCOMES|35_OF_35_S1_REVIEWER_RECEIPTS
READINESS|14_REVIEWED_CANDIDATES_0_ACTIVE
D5_FIG04|R0_PASS
D5_FIG01_02_03|R0_HOLD_R1_FIXED_PENDING_REVIEW
D5_OVERALL|HOLD_REVISIONS_REQUIRED
D6|NOT_QA
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
