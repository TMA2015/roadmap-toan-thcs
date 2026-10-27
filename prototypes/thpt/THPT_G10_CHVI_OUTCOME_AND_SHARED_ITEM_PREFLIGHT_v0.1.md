# Chương VI · Toán 10 KNTT — Academic and Shared-Item Preflight v0.1

**Date:** 27/10/2026  
**Phase:** INTERNAL_DRAFT / NOT_A_NOTEBOOKLM_REVIEW_PACKET / NOT_ACADEMICALLY_CLEARED  
**Implementation:** Draft PR #612, THPT Dual Complete Paths v2.0.

## 1. Verified S1 source boundaries vs full audit

The original SGK/SBT **scanned PDF files** were visually checked at the lesson boundaries. Do not treat the following index as an outcome-by-outcome audit.

| SGK unit | SGK printed pages | SBT printed pages | Full source/outcome audit |
|---|---|---|---|
| Bài 15. Hàm số | 4–10 | 3–9 | PENDING |
| Bài 16. Hàm số bậc hai | 11–18 | 10–15 | R4 Postfix reviewed only SGK 11–16 and SBT 10–14; **remaining source scope PENDING** |
| Bài 17. Dấu của tam thức bậc hai | 19–24 | 16–18 | PENDING |
| Bài 18. Phương trình quy về phương trình bậc hai | 25–27 | 19–21 | PENDING |
| Bài tập cuối chương | 28–29 | 22–27 | PENDING |

Source-index evidence: `THPT_G10_CHVI_S1_PDF_VISUAL_INDEX_RECEIPT_20261027.md`. SGK/SBT original page content and figures must be examined before claiming a full S1 receipt.

## 2. Planned coverage groups — not certified SGK outcomes

**Every ID below is temporary planning notation, NOT a final canonical outcome ID or a quotation of SGK.**

| Group | Planned checks for draft content | Current artifact | Missing before academic batch |
|---|---|---|---|
| DRAFT_B15_A | Function definition, unique output, domain and range | SGK B15 draft | SGK activities/examples/conditions; source-specific examples and item register |
| DRAFT_B15_B | Graph as (x,f(x)); identify whether points belong | SGK B15 draft | Graph figure inspection and source extent |
| DRAFT_B15_C | Monotonicity on valid intervals and related applications | SGK B15 draft | Exercises by outcome, misconception mapping |
| B16_OUT_01..05 | Definition; vertex/axis; 4-step plotting; monotonicity/range; modeling | SGK B16 R4 Postfix PASS in reviewed scope | SGK printed p17–18 + SBT p15 content/coverage delta, no assumption existing PASS covers all |
| DRAFT_B17_A | Quadratic trinomial and discriminant | SGK B17 draft | Signs/formulas and exact original coverage |
| DRAFT_B17_B | Sign cases Δ<0 / =0 / >0; visual proof | SGK B17 draft | Proof/figures and SGK applications |
| DRAFT_B17_C | Solve quadratic inequalities, interval boundary precision | SGK B17 draft | SBT difficulty and source-backed examples |
| DRAFT_B18_A | Radical equation sqrt(A)=sqrt(B), conditions | SGK B18 draft | Textbook definitions and original examples |
| DRAFT_B18_B | Radical equation sqrt(A)=B, nonnegative side, validate roots | SGK B18 draft | Conditions, extraneous-root examples and SBT source |
| DRAFT_CHVI_END | Integrated problem solving across lessons | Eight original **unreviewed** problems | Cross-lesson coverage and validated rubrics vs official chapter work |

## 3. One shared item bank — pilot inventory

**Metadata-only registry:** `prototypes/thpt/shared-items/placement-contract-v0.1.cjs`.

| Item ID | Canonical source | Context placements in metadata | Status |
|---|---|---|---|
| THPT-CORE-QF01 | SGK Core B16 | SGK_CORE (live pilot) / TOPIC_PRACTICE CO_BAN (link only) | Academic PASS limited to original B16 reviewer snapshot |
| PRACTICE-THPT-DEMO-01 | Topic Practice B16 | TOPIC_PRACTICE / SGK_PRACTICE via import | Academic PASS limited to original B16 reviewer snapshot |
| READINESS-THPT-DEMO-01 | Topic technical Readiness two-question bundle | TOPIC_READINESS technical-only; no mastery | Academic PASS for reviewed DEMO behavior, **not** evidence of topic mastery |
| HPT-WRI-DEMO-01 | Shared Written source | SGK_WRITTEN / TOPIC_WRITTEN placement | Reviewer PASS within demo scope |
| HPT-WRI-DEMO-ANCHOR-01 | Shared Written source | SGK_WRITTEN / TOPIC_WRITTEN, `is_anchor` | Reviewer PASS within demo scope |

**Nine placement references and five unique item IDs** are tracked, not nine duplicated question records. Some placements are `PLANNED`/`LINK_ONLY` and must not be represented as live production features.

The four-question `SGK-CHVI-TECH-DEMO-01` is a **technical assessment demo**, not a set of four canonical, independently cleared Readiness items. Likewise B15/B17/B18 demo modal questions and A1–B4 cumulative drafts are **not** promoted into the reviewed canonical inventory.

### Readiness eligibility preflight

- An item may have `SGK_CHAPTER_READINESS` and `TOPIC_READINESS` placements without creating copies **only if both outcome matrices justify it**.
- Assessment preflight separately checks **academic clearance for assessment**, approved placement, assessment scope, outcome coverage and **prior exposure** (shown, attempted, hint/solution seen, earlier Final Submit).
- Prior exposure of exactly the same question forbids counting the question as a **fresh independent mastery demonstration** by default. It may be used for remedial practice or an explicitly labeled retake.
- There must be **zero hints/correctness or answer display before Final Submit**. No readiness keys are duplicated in or exported from the metadata registry.
- `scripts/test-thpt-shared-item-placement.cjs` tests positive two-scope eligibility on synthetic **nonproduction** data, negative exposure cases, no credit for demos, ID uniqueness and source references. THPT browser CI executes this test.

## 4. Remaining student learning path work

**SGK KNTT — Chapter VI:** B15/17/18 require source-complete lesson knowledge, formative Core items, lesson-level Practice, cumulative application and a reviewed **Chapter Readiness** assembled after all chapter outcomes are known. Present 4-question Chapter Readiness and two-question Topic Readiness remain UI technical demos.

**Chuyên đề — Hàm số và đồ thị:** one/two-level knowledge tabs and 3 sections already defined. Current `PILOT_PARTIAL_G10` explicitly **does not** cover the full vertical scope 10–12. Develop a separate topic outcome map and tiered question placement before claiming a standalone complete topic.

**Shared resources:** maintain one item/answer/rubric/attempt identity, many placements; Written/Anchor tags, figures, examples and compact skills reused as appropriate. Golden UI locked; no new interface review requested.

## 5. Academic batch readiness gate

Do **not** send NotebookLM a premature “Chapter VI full PASS review” packet until:
1. S1 SGK/SBT original lesson contents and figures have been directly reviewed; exact printed-page references documented;
2. Every lesson outcome has theory, guided example, practice/applications and item IDs;
3. Chapter Readiness has independent held-out, academically reviewed items and a coverage table;
4. Expected/reviewed canonical IDs reconcile, and B16 omitted-page delta is explicit;
5. Then package `Temp_*.md` or ZIP + **short accompanying prompt** per Project Source 06 and group-review policy 07 v1.1.

**Gates:** `CHVI_SOURCE_INDEX=VERIFIED`; `CHVI_FULL_AUDIT=PENDING`; `CANONICAL_METADATA_REGISTRY=INTERNAL_PILOT`; `CHVI_ACADEMIC_BATCH=NOT_READY`; `MERGE/DEPLOY=NO`.
