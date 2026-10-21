# W6 CT18–20 — NotebookLM independent academic verdict receipt (2026-10-21)

**Packet ID:** `MATH-W6-CT18-20-EIGHT-SOURCE-CORRECTNESS-R0-20261021`  
**Review received from Project Owner:** NotebookLM independent report pasted to Math App conversation on 2026-10-21, with eight ID-level outcomes.  
**Temp review source in Draft #553:** `review-packets/math-source-conversion/TEMP_W6_CT18-20_EIGHT_SOURCE_CORRECTNESS_20261021.md`. Owner report identifies same basename with `.txt` extension, a supported NotebookLM upload format. Do not infer a changed original question from extension alone.  
**Pinned original main:** `1f0f2ccb1ca40f62b78b8ccafefe2a64368a6214`.  
**Status:** REVIEW_RECEIVED / `OVERALL|REVISION_REQUIRED` / `AUTHORIZATION|NO_LIVE_RELEASE`. Not a source-authoring or deployment approval.

## Exact machine verdict received

```text
PACKET_ID|MATH-W6-CT18-20-EIGHT-SOURCE-CORRECTNESS-R0-20261021
EXPECTED_SOURCE_ITEMS=8
REVIEWED_SOURCE_ITEMS=8
18-WR-09|MATH:PASS|S1_LAYER:CT18 KNTT-Core|DISTINCTNESS:EXACT_MATCH_GEO18V1_029_AND_WX18-TRI-002|DISPOSITION:REUSE_EXISTING_INTERACTIVE
18-WR-10|MATH:PASS|S1_LAYER:CT18 KNTT-Core|DISTINCTNESS:CONCEPT_EXPLANATION_ONLY|DISPOSITION:RETAIN_SOURCE_OR_CORE_ONLY
19-WR-06|MATH:REVISION_REQUIRED|S1_LAYER:CT19 KNTT-Core|DISTINCTNESS:MISSING_DISTINCT_CIRCLES_CONDITION|DISPOSITION:REVISE_SOURCE_FIRST
19-WR-08|MATH:PASS|S1_LAYER:CT19 KNTT-Core|DISTINCTNESS:OVERLAPS_GEO19V1_008_AND_WX19-CIR-002|DISPOSITION:REUSE_EXISTING_INTERACTIVE
19-CH-01|MATH:PASS|S1_LAYER:CT19 Specialized-Challenge|DISTINCTNESS:TOPICAL_NOTE_NO_NUMERICAL_TASK|DISPOSITION:RETAIN_SOURCE_OR_CORE_ONLY
20-WR-06|MATH:REVISION_REQUIRED|S1_LAYER:CT20 KNTT-Core|DISTINCTNESS:GEOMETRIC_IMPOSSIBILITY_SLANT_APOTHEM_SMALLER_THAN_HEIGHT|DISPOSITION:REVISE_SOURCE_FIRST
20-WR-08|MATH:PASS|S1_LAYER:CT20 KNTT-Core|DISTINCTNESS:EXACT_MATCH_SYN20V1_181_AND_WX20-GEO-002|DISPOSITION:REUSE_EXISTING_INTERACTIVE
20-WR-10|MATH:PASS|S1_LAYER:CT20 KNTT-Core|DISTINCTNESS:OVERLAPS_WX20-GEO-001_AND_INTERACTIVE|DISPOSITION:REUSE_EXISTING_INTERACTIVE
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|REVISION_REQUIRED
AUTHORIZATION|NO_LIVE_RELEASE
```

## Reconciliation

| Historic source ID | Math audit | Disposition | Consequence |
|---|---|---|---|
| `18-WR-09` | PASS | REUSE_EXISTING_INTERACTIVE | Same 30m, 45°, 1.6m → 31.6m as `GEO18V1_029`; no new WX |
| `18-WR-10` | PASS | RETAIN_SOURCE_OR_CORE_ONLY | One-line explanation of tan as opposite/adjacent; no new WX |
| `19-WR-06` | **REVISION_REQUIRED** | REVISE_SOURCE_FIRST | Explicitly define positive radii, center distance, and *distinct circles* when using internal tangency formula; equal/concentric circles cannot count as tangent |
| `19-WR-08` | PASS | REUSE_EXISTING_INTERACTIVE | Existing `GEO19V1_008` says convex quadrilateral; source lacks explicit convexity. No new item, but do not silently assume all arbitrary quadrilaterals meet the theorem |
| `19-CH-01` | PASS | RETAIN_SOURCE_OR_CORE_ONLY | Challenge note, no numeric or constructive task; do not promote to KNTT Core |
| `20-WR-06` | **REVISION_REQUIRED** | REVISE_SOURCE_FIRST | Existing regular-pyramid slant apothem d=5cm < vertical height h=8cm geometrically impossible; p must be **half** base perimeter; fix numerical givens and dependent volume |
| `20-WR-08` | PASS | REUSE_EXISTING_INTERACTIVE | Side area matched `SYN20V1_181` and existing `WX20-GEO-002`; no new WX |
| `20-WR-10` | PASS | REUSE_EXISTING_INTERACTIVE | Same broader topic as `WX20-GEO-001` / conversion MCQs; note specific targeted `GEO20V1_012` is cm→mm alone, not an exact same composite 2m × 50cm × 40cm calculation. Do not claim exact numerical duplicate or regrade historic evidence |

**Counts:** eight reviewed IDs (6 PASS, 2 REVISION_REQUIRED); 4 interactive reuse, 2 source-only retain, 2 source-revision-first; zero NEW_WRITTEN and zero NEW_MCQ. Preserve 74 global canonical Written; active CT18–20 MCQs 132+147+195=474. All missing/duplicate/unexpected IDs = none.

## Review-specific mathematical remedies — proposals only

### 19-WR-06 · two circles

Original: `Nêu điều kiện tiếp xúc ngoài và tiếp xúc trong theo R,r,d.` / `Tiếp xúc ngoài: d=R+r. Tiếp xúc trong: d=|R-r|.`

Specify positive radii R,r and distance between centers d, then state:
- external tangency: `d=R+r`;
- internal tangency of **distinct** circles: `d=|R-r|>0`, equivalently `R\ne r`;
- if R=r>0 and d=0 the circles are coincident, not tangent (infinitely many points).

### 20-WR-06 · regular square pyramid

Original: `p=12 cm, d=5 cm, Sđáy=36 cm², h=8 cm` / `Sxq=p·d=60 cm²; V=96 cm³`.

The use of p as half perimeter implies a 6-cm square side, so in a **regular square pyramid** the base inradius is 3cm; apothem 5cm and vertical height 4cm form a 3–4–5 triangle, i.e. `5²=4²+3²`. Source correction candidate retains p=12, d=5, Sbase=36, **changes h from 8 to 4**, gives Sxq=60cm² and V=48cm³. Make `p=half perimeter` explicit and specify *regular square pyramid*. No new problem ID.

## Source hierarchy and gate

- NotebookLM report cited S1 book and page details; **exact editions/pages not independently re-scanned** in this receipt. Do not claim a second page-by-page textbook verification.
- Original sources currently in main were re-read; mathematical defect analysis matches pasted review. The independent report does not authorize live release or retrospective scoring changes.
- Reviewer disposition `REUSE_EXISTING_INTERACTIVE` need not mean that all source numbers and worked proof structure exactly match an MCQ; no automatic historical-credit transfer.
- Corrections must be separately authored as *bounded Draft PR*, strict old-source-SHA and reversible-edit QA, public CI, and **Owner authorization before merge/deploy**.
- Preserve all source IDs, canonical Written, public site content outside amended source text, KNTT layering, score/history/Skill/Mastery/Readiness state, and question answers.
- NotebookLM delivery protocol for future rounds: 1–2 source download links; ≥3 files one ZIP; no JSON source; temporary files named `TEMP_...`; always attach a very short inline prompt.
