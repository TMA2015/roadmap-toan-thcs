# Toán 10 · Chương VII — Public formative/Written integration checkpoint (29/10/2026)

**PR:** #614, `feature/thpt-g10-chvii-reviewed-sgk-stage1-20261029` (Draft). **NO_MERGE/NO_DEPLOY; NO_NEW_ACADEMIC_PASS.**

## 1. Current accepted source and academic evidence

- **Academic D1/D2:** NotebookLM snapshot PASS for B19–B22 SGK knowledge in the owner-provided 28/10 review packet; it is not an automatic review of each built website page.
- **D3/D4:** original 63 canonical C/P/W items from ChVII–VIII reviewed as `PASS_WITH_RECLASSIFICATION`, with 36 ChVII candidates including 4 Written; ChVIII separate 27, and subsequent B25-P07 delta. Owner-provided verdict applies to original source + prescribed scope overlay.
- **S1:** SGK Toán 10 KNTT tập 2 ChVII printed p29–58, SBT p27–49; 35/35 outcome receipts for both chapters together, not chapter-wide D1–D6 completeness.
- Original source files in `content/thpt-g10-chvii-chviii-authoring-20261028`:
  - `prototypes/thpt/shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md` blob SHA `224b84960790c4e20262bc556c63fd7479621e4e`;
  - `prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_ADVANCED_PRACTICE_CANDIDATES_v0.2.md` blob SHA `d9953e59d0db4b760feb44be602f506337004d16`;
  - `prototypes/thpt/shared-items/THPT_G10_CHVII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md` source reviewed by the same D3/D4 R01 packet;
  - `prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.4.md` blob SHA `a145b898e13ef88dbc5d37e879b243a1e6e880a3` (metadata mapping).

## 2. What is actually staged in learner-facing MkDocs

| Component | Canonical ID count | Placement and handling |
|---|---:|---|
| SGK knowledge B19–B22 | 4 independent pages | Concepts, conditions, worked examples in R4, mapped to chapter |
| Public Core/Practice/Application | **32** | 7 base Core records + 20 plain Practice + 4 Application + 1 `B22-C01` specialist optional. All 32 original unique IDs; 8 SGK Core *placements* because `B22-P01` is reused for basic ellipse Core without cloning it |
| Written and Anchor | **4** | Separate single source location `thu-vien/tu-luan-chuong-vii.md`; 1 anchor-tagged Written B21, not a fifth item |
| Public ChVII total | **36** | One statement and answer per item_id, with exposed formative self-check but no mastery |
| Independent SGK Chapter Readiness | **0 activated** | Nonfunctional information-only route. Reviewed held-out item bodies, keys and rubrics are not imported |
| Source illustrations D5 | **0 embedded in this integration** | Four reviewed SVGs remain separate pending answer-bearing display timing / visual QA |

**Scope override:** `THPT-G10-B22-C01` involving eccentricity is `OPTIONAL_SPECIALIZED`, at the end of optional Practice and **not mandatory SGK Core**. B22-P01 basic ellipse coverage shares one ID in SGK Core and Practice.

## 3. Changes and delta policy

- Knowledge D1/D2 re-expressed as browser-ready prose with source lineages; source-equivalence and real-device verification remain release gates, not claimed as second NotebookLM verdict.
- 32 original exercise stems, keys, explanations and hints transcribed from two immutable draft source files, retaining canonical IDs and role overlay. One legacy B19-C02 hint had a control character in authored source; source-equivalent plain wording preserved math (DELTA_B; no key/rubric/condition change).
- 4 original Written stems, solutions, rubric labels retained; browser cards hide solution/rubric in default-closed `details`, do not score automatically.
- UI labels, links, lessons and optional tier are implementation changes, not an invented new academic grade or new scope. No `DELTA_C` to original math content intended; any reviewer-discovered substantive mismatch remains HOLD until scoped re-review.

## 4. Tests and outstanding gates

- `scripts/test-thpt-g10-chvii-reviewed-stage1.cjs` checks 32 IDs, 4 Written with 1 Anchor, 36 overall unique IDs, scope flags, no held-out release, and MkDocs navigation.
- `scripts/test-thpt-r4-preview-browser.js` exercises lessons, 8 Core/Practice launcher cards, 6 normal Practice per lesson (7 optional for B22), Written solution concealment, responsive desktop/mobile, no Readiness activation, existing THCS/ChVI routing.
- CI on final exact HEAD, source-to-render screenshot/MathJax and real iPhone/iPad UAT are still separate gates. **Do not call this released, complete chapter, or real learner Readiness PASS.**
- Next wave: assess four D5 figures' placement/exposure; complete ChVII cumulative practice coverage and then start ChVIII B23–25 integration from its own exact reviewed snapshot. Standalone vertical Topic path needs independent review.

```text
PUBLIC_CHVII_C_P_APP=32_CANONICAL
PUBLIC_CHVII_WRITTEN=4_WITH_1_ANCHOR_TAG
PUBLIC_CHVII_TOTAL=36_UNIQUE
SGK_CHVII_KNOWLEDGE=4_PAGES_STAGED
SGK_CHVII_READINESS=0_ACTIVE
TOPIC_10_12_CHVII_SCOPE=NOT_INDEPENDENTLY_REVIEWED
NO_NEW_MASTERy_OR_SCORE=TRUE
GOLDEN_R4_THCS_UNCHANGED=INTENDED_QA_PENDING
MERGE_DEPLOY=NO
```
