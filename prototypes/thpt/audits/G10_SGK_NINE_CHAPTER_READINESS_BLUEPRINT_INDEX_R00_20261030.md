# Toán 10 · KNTT SGK Tự kiểm tra cuối chương — 9-chapter coverage index R00

**DATE:** 2026-10-30 · **SCOPE:** `SGK_CHAPTER_READINESS` **blueprint metadata only**; no held-out stems, keys, solutions or rubrics.
**RELEASE:** `NOT_ACTIVE`, `ACADEMIC_READINESS_PASS=NO`, `NO_SCORE/NO_MASTERY`. Do not infer source-item Academic PASS means independent Readiness has been reviewed.
**DECISION:** Owner SGK-first (G10 → G11 → G12 → Topic reuse later). A chapter is not COMPLETE without safe assessment and technical QA.

## Inventory and scope

| SGK chapter | Lessons | Coverage rows | Assessment-source caveat | File |
|---|---|---:|---|---|
| ChI | B01–B02 | 11 | R01 public outcome source | [R00 outcome-only blueprint](G10_CHI_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChII | B03–B04 | 10 | R01 public outcome source | [R00 outcome-only blueprint](G10_CHII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChIII | B05–B06 | 10 | R01 public outcome source | [R00 outcome-only blueprint](G10_CHIII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChIV | B07–B11 | 24 | R01 public source in two distinct batches | [R00 outcome-only blueprint](G10_CHIV_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChV | B12–B14 | 14 | R01 public outcome source | [R00 outcome-only blueprint](G10_CHV_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChVI | B15–B18 | 19 | prior public outcome set, ChVI A5 remains HOLD | [R00 outcome-only blueprint](G10_CHVI_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChVII | B19–B22 | 23 | outcome names from pre-review draft matrix v0.2; assessment reconciliation needed | [R00 outcome-only blueprint](G10_CHVII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChVIII | B23–B25 | 12 | outcome names from pre-review draft matrix v0.2; assessment reconciliation needed | [R00 outcome-only blueprint](G10_CHVIII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |
| ChIX | B26–B27 | 10 | skills from live public formative bank, no Readiness clearance | [R00 outcome-only blueprint](G10_CHIX_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |

**Sum:** 9/9 chapter blueprints; **27/27 lesson references**, **133 coverage rows**. The 133 are *educational skill/outcome targets*, NOT 133 assessment questions, not an active private item bank and not 133 independently reviewed readiness outcomes. IDs in ChVII/VIII are specifically from a **draft** placement matrix, so independent source/outcome review is still mandatory.

## Why private readiness is still blocked

1. There is no owner-approved protected assessment pipeline containing independently reviewed held-out stems/answer keys, verified scoring and exposure controls for 9 chapters; **do not publish such content in GitHub Pages**.
2. ChVI old batch included 18 private candidate questions and ChIX had 6, but both are **0 active** and cannot be counted as official readiness, score or Skill Mastery.
3. Chapter Readiness must be distinct from Topic Readiness, and neither practice correctness nor access to a worked solution counts as independent Mastery evidence.
4. A NotebookLM source review of each R00 coverage table, plus actual protected item review at the same content_version, is required before any approval of an independent chapter assessment.
5. Golden R4, THCS regressions, mobile/browser, Final Submit/no-hint/no-AI Tutor, physical-device QA and exact release HEAD plus explicit owner approval are still required.

## Prioritized next execution gates

| Gate | Needed action | Owner/technical distinction |
|---|---|---|
| RD0 | Independent NotebookLM review of 9 **coverage tables** against SGK/SBT S1 and chapter-end tasks; first reconcile provisional ChVII/VIII IDs | Academic review; no protected item yet |
| RD1 | Decide secure storage/delivery for genuinely held-out items and key; no new backend/accounts absent owner approval | Owner architecture decision / security review |
| RD2 | Build protected item content and review by chapter / outcome; exposure controls | Independent academic |
| RD3 | Final Submit UX no pre-submit reveals, scoring integrity and demo no-credit tests | Technical QA |
| RD4 | Chapter-by-chapter actual integration + device acceptance, then owner merge/deploy decision | Owner release gate |

**Parallel public-formative integration:** ChII authoring/release PRs #631/#636 **already merged on GitHub** in a later 30/10 status check (P1 actual deployment separate). ChIII #633, ChIV #634/#637, ChV #639 are still unmerged Draft authoring; ChVI #643 D6 integration draft CI PASS for THPT R4 but A5 HOLD and owner physical-device UAT pending.

**This index documents real curriculum gaps without lowering the standards.** It does not grant chapter-complete, Academic PASS for Readiness or deployment.
