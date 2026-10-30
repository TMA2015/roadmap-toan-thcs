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
| ChVII | B19–B22 | 23 | **RD0 reviewer REVISE**; 18 CORE / 3 SUPPORT / 1 OPTIONAL / 1 MERGE; no item-level PASS | [R01 post-verdict scope blueprint](G10_CHVII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R01_POST_NOTEBOOKLM_REVISE_NO_ITEMS.md) (baseline [R00](G10_CHVII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md)) |
| ChVIII | B23–B25 | 12 | **RD0 reviewer REVISE**; 11 CORE / 1 OPTIONAL, 4 P1 + 3 P2 pooled with ChVII; no item-level PASS | [R01 post-verdict scope blueprint](G10_CHVIII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R01_POST_NOTEBOOKLM_REVISE_NO_ITEMS.md) (baseline [R00](G10_CHVIII_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md)) |
| ChIX | B26–B27 | 10 | skills from live public formative bank, no Readiness clearance | [R00 outcome-only blueprint](G10_CHIX_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md) |

**30/10 provenance correction:** ChVII/VIII 35/35 IDs match the reviewer-reconciled public outcome matrix **v0.4** (Git blob `a145b898e13ef88dbc5d37e879b243a1e6e880a3` on source authoring branch). They are *not* academic-cleared for `SGK_CHAPTER_READINESS`; B22-C01 specialized and B25 optional/Core split must stay explicit. Public source snapshot now in main for ChIII B05–B06 via merged #633, but release #644 remains Draft.

**30/10 independent RD0 update:** NotebookLM reviewer returned `ACADEMIC_RD0_OVERALL=REVISE` for ChVII+VIII together, `EXPECTED=REVIEWED=35`, P0=0/P1=4/P2=3, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`. Both chapters now have R01 classified coverage-only candidates, original R00 preserved. Reviewer-reported SGK pagination conflicts with earlier direct visual SGK source receipts; keep `S1_PAGINATION_CONFLICT_HOLD` rather than overwrite pages. Significant Core/optional changes are `DELTA_C`; review of corrected snapshot pending. Main GitHub PR #644 ChIII public formative release was verified **MERGED** on 30/10; this is unrelated to RD0.

**Sum:** 9/9 chapter blueprints; **27/27 lesson references**, **133 coverage rows**. The 133 are *educational skill/outcome targets*, NOT 133 assessment questions, not an active private item bank and not 133 independently reviewed readiness outcomes. ChVII/VIII IDs have **public-formative S1 outcome receipt (35/35)** in v0.4; **independent RD0 was performed and returned REVISE**, requiring corrected scope/source review before academic clearance. No held-out protected bank is active.

## Why private readiness is still blocked

1. There is no owner-approved protected assessment pipeline containing independently reviewed held-out stems/answer keys, verified scoring and exposure controls for 9 chapters; **do not publish such content in GitHub Pages**.
2. ChVI old batch included 18 private candidate questions and ChIX had 6, but both are **0 active** and cannot be counted as official readiness, score or Skill Mastery.
3. Chapter Readiness must be distinct from Topic Readiness, and neither practice correctness nor access to a worked solution counts as independent Mastery evidence.
4. A NotebookLM source review (ChVII/VIII RD0 has returned REVISE; other chapters pending) plus actual protected item review at the same content_version, is required before any approval of an independent chapter assessment.
5. Golden R4, THCS regressions, mobile/browser, Final Submit/no-hint/no-AI Tutor, physical-device QA and exact release HEAD plus explicit owner approval are still required.

## Prioritized next execution gates

| Gate | Needed action | Owner/technical distinction |
|---|---|---|
| RD0 | ChVII/VIII R01 scope delta re-review (4 P1, 3 P2), S1 pagination audit; independent RD0 of other 7 chapters against SGK/SBT S1 and chapter-end tasks | Academic review; no protected item yet |
| RD1 | Decide secure storage/delivery for genuinely held-out items and key; no new backend/accounts absent owner approval | Owner architecture decision / security review |
| RD2 | Build protected item content and review by chapter / outcome; exposure controls | Independent academic |
| RD3 | Final Submit UX no pre-submit reveals, scoring integrity and demo no-credit tests | Technical QA |
| RD4 | Chapter-by-chapter actual integration + device acceptance, then owner merge/deploy decision | Owner release gate |

**Parallel public-formative integration:** ChII authoring/release PRs #631/#636 **already merged on GitHub** in a later 30/10 status check (P1 actual deployment separate). ChIII source #633 **MERGED** and release #644 **MERGED** (30/10; P1/P2 separately verify); ChIV #634/#637 and ChV #639 remain authoring Draft; ChVI #643 D6 integration draft CI PASS for THPT R4 but A5 HOLD and owner physical-device UAT pending.

**This index documents real curriculum gaps without lowering the standards.** It does not grant chapter-complete, Academic PASS for Readiness or deployment.
