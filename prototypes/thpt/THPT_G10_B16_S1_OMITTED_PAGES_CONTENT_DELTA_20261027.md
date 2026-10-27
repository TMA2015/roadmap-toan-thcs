# Bài 16 — Academic source-scope delta from original SGK/SBT scanned pages

**Status:** `DIRECT_S1_VISUAL_INSPECTION`; `DELTA_C_ACADEMIC_MATERIAL`; `NOTEBOOKLM_REVIEW_REQUIRED_FOR_NEW_CONTENT`.  
**Date:** 27/10/2026 · Draft PR #612.  
**Previous reviewer scope:** SGK Toán 10 KNTT tập 2 **printed p11–16**, SBT p10–14; NotebookLM Postfix PASS applies to the original five-item B16 snapshot **only**.  
**New pages directly inspected:** SGK printed **p17–18** (PDF pages 18–19), SBT printed **p15** (PDF page 16); direct screenshot inspection of actual scanned PDFs, **no OCR**.  
**Do not upload original copyrighted textbook scans into the public GitHub repository.**

## Direct evidence from pages outside the previous receipt

| Page | Observed source information | Relevance to draft |
|---|---|---|
| SGK p17 | Continuation of B16 exercise 6.14 on projectile trajectory; visual parabola figure Hình 6.15; “Em có biết” explains quadratic forms in constant-acceleration motion, free fall and angled projectile trajectory. | Application modeling deserves worked lesson examples, clear variable/units, physically valid domain, vertex maximum / landing-root distinction |
| SGK p18 | Hình 6.16 shows real parabolic shapes; source describes revenue `R=x·n` with simplified linear demand `n=a−bx`, so revenue `R(x)=ax−bx²`; optimizing ticket price/revenue. | Add a separate **commercial/revenue** quadratic modeling example; distinguish units, constraints, and maximum |
| SBT p15 | Exercises **6.18** and **6.19** on vertical projectile height, elapsed time and landing; **6.20** on ticket sales/demand and maximal box-office revenue. | The related SBT practice range extends one page beyond the prior p10–14 receipt; model reasoning and algebraic verification should be covered in Chapter VI item/outcome planning |

**Scope interpretation:** These pages **do not establish that the reviewer verdict on unchanged B16 items was wrong**. They do establish that the prior `SOURCE_RECEIPT` did **not cover the complete printed B16 lesson and workbook span**, so claiming “B16 source coverage 100%” would be incorrect without a targeted delta check.

## Authoring delta (new section, not previously reviewed)

Updated `docs/thpt-preview/sgk/chuong-vi/bai-16.md` §5 to include two **original** worked modeling examples:
1. Flight model `h(t)=19.6t−4.9t² = −4.9(t−2)²+19.6`, valid in `0≤t≤4`; maximum height `19.6m` at `t=2s`, landing `t=4s`.
2. Revenue model `n(x)=600−10x`, `0≤x≤60`, `R(x)=600x−10x²=−10(x−30)²+9000` thousand dong; maximum `9 million dong` at `x=30` thousand, `n=300`.

**Self-QA algebra:** completing the square, derivative-free maxima, physical time limits and unit calculations checked. These are created to illustrate **source concepts**, not exact copies of SGK/SBT activities. The new section is explicitly marked `DRAFT_NOT_ACADEMICALLY_REVIEWED`, `SOURCE_SCOPE_DELTA_B16`; **do not extend the old Academic PASS to this content**.

## Independent review path

Under Math App Project Source 07 v1.1, this is **DELTA_C**, because it adds subject matter and worked examples. Include this **specific mathematical delta** in the next coherent Chương VI NotebookLM batch, with SGK pp17–18 and SBT p15 named in its source receipt and exact new Markdown snapshot and outcome mapping. A standalone review is only needed if the whole-chapter batch would be disproportionately delayed.

If sending NotebookLM a packet, strictly comply with Source 06: actual `Temp_*.md` or `Temp_*.zip` download **plus short prompt**, no JSON; NotebookLM verdict neither merges nor deploys.

**Gate:** `B16_OLD_SNAPSHOT_ACADEMIC=PASS`; `B16_NEW_MODELING_SECTION_ACADEMIC=NOT_REVIEWED`; `B16_FULL_SOURCE_SCOPE_CLEARANCE=PENDING`; `PR_MERGE_DEPLOY=NO`.
