# R2 content/source reconciliation and targeted NotebookLM R2a erratum

**Packet:** MATH-EXERCISE-RECLASSIFY-W1-20261015  
**R2 reviewer verdict (as submitted):** ACADEMIC_ITEMS_PASS; 16 PASS + 3 REVISE, 0 insufficient evidence, but deployment requires three canonical pointers.
**Implementation status:** BLOCKED_PENDING_SOURCE_AND_GRADER_CORRECTION_AND_OWNER_QA.
**Primary exact reviewer report:** review-packets/math-exercise-w1-20261015/NOTEBOOKLM_W1_R2_OWNER_SUBMITTED_20261015.md.
**Machine-readable source-preserving comparison:** docs/collaboration/math-w1-notebooklm-r2-verdict-overlay-20261015.json.

## What is already confirmed from source

- R1 was REVISIONS_REQUIRED, with 1 PASS (paper-role only), 3 REVISE and 15 insufficient evidence.
- R2 reports selecting eight official KNTT PDFs, supplies proposed lesson/page placements for all 19 and produces 16 PASS + 3 REVISE.
- The three canonical candidate IDs are present in the repo and correspond to meaningful tasks:
  - 04-WR-02 → ALG04MICRO_005 (same polynomial simplification request, exact match).
  - 02-G6-WR-02 → WX02-NUM-001 (same 36 pens/48 notebooks, stronger reasoning rubric).
  - 02-G6-WR-04 → WX02-NUM-002 (same 800000đ/15%, stronger multistep rubric).
- NotebookLM correctly separates CĐ21 single-frequency questions from full tables: STA21MICRO_025/026 are NOT substitutes for 21-M2/M3/M4.
- R2 S1 placements and page numbers are **asserted by NotebookLM**; the book PDF bytes have not been independently rechecked in the Math GitHub-source audit. Do not upgrade this description to "locally page-verified" without PDFs.

## Three focused corrections before student rollout

### 1. 04-WR-01: signed constant-term error — critical

The unchanged authored Math source at docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md says:

> Cho P(x) = 4x^3 - 2x + 7. Xác định bậc, hệ số của x^3 và hạng tử tự do.

It provides the answer (3, 4, **+7**). NotebookLM R1 also said +7. NotebookLM R2 table and detailed record unexpectedly say **-7**. This is not a matter of equivalent representation: **-7 is incorrect** for this exact source. The original R2 transcript must remain unchanged; ask NotebookLM to issue a clearly named correction with the original item ID, full source quote, corrected key (3,4,+7), reason and corrected item disposition. Do not publish a three-box grader with -7.

### 2. 03-M1-01: cross-products alone allow out-of-scope inputs

The authored task is "Lập tỉ lệ thức từ 3·20 = 4·15." For a four-position builder intended to use those four supplied numbers, merely checking ad=bc=60 does not ensure the submission actually uses **3, 4, 15, 20 exactly once**. For example 1/1 = 60/60 also passes ad=bc=60 but is not formed using the four given factors. Require the four-number multiset constraint, both denominator values nonzero, then mathematical cross-product equality. If the task intends arbitrary equivalent proportions, explicitly revise the stem and response contract instead. Request reviewer approval of the selected mode and a counterexample test.

### 3. 21-M4-01: rounding tolerance needs a defined answer precision

The exact data have N=12, frequencies (1,2,3,4,2) and percentages (8.333...,16.666...,25,33.333...,16.666...%). The report proposes a universal ±0.1 percentage-point tolerance. This may accept a student writing 8.4% when asked to round to **one decimal**, even though 8.3% is the correct rounded form. Confirm whether student output is expected rounded to one decimal, arbitrary decimal approximation under specific tolerance, exact ratio, or numeric-with-percent-unit. Define accepted values, nonempty fields, and row-wise/total handling to avoid silent false positives.

## Copy-ready short R2a NotebookLM prompt

Act as independent academic reviewer for MATH-EXERCISE-RECLASSIFY-W1-20261015. Keep prior R2 as historical evidence. Inspect directly the selected original four practice pages, the official S1 SGK volumes already in the notebook, the 134-Micro / 10-WX comparison extract and this erratum request. Review only three potential R2 errors: (A) 04-WR-01 source P(x)=4x³−2x+7 but R2 says constant term -7: correct or justify with verbatim source; (B) 03-M1-01 from given 3·20=4·15 requires all four input numbers exactly once if using a ratio builder; confirm a mathematically safe deterministic grading contract and reject the 1/1=60/60 counterexample; (C) 21-M4-01 1/12 is 8.333…%; clarify precision and whether 8.4% must be rejected when rounded to one decimal despite a proposed ±0.1-point tolerance. Provide for each the exact original source quote, corrected response contract, typical errors, KNTT S1 reference and verdict PASS/REVISE/BLOCK. Then state whether R2 packet clearance can remain ACADEMIC_ITEMS_PASS with item errata, or changes to PARTIAL_CLEARANCE are necessary. Do not authorize removal of the 75 legacy sources, answer-bank changes, or moving formative keys into independent assessments.

## Safe implementation sequence

1. Preserve the unchanged R2 report and this R2a request; no retroactive alteration of reviewer history.
2. Link three canonical candidate IDs in a **separate staged release**, only with source-grade and owner QA and a stable historical deep link.
3. For other R2 PASS cases, create immutable reviewed response schemas and isolated deterministic tests without importing them into learner assessment.
4. Publish only individual responses whose original answers, pedagogy, accessibility, exact-input parser, rounding and localization pass.
5. Keep all 75 original legacy questions available; the 56 non-W1 items still require item review.

**Current scope:** paper-proof 04-CH-01 stays paper; remaining decisions are candidates, not execution approvals.
