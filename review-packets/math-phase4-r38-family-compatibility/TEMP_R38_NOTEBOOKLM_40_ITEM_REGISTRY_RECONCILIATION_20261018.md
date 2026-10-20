# R38 — Independent NotebookLM report: actual Registry 131-family reconciliation

**Date:** 2026-10-18  
**Packet:** `MATH-R38-R27-40-SKILL-FAMILY-PREFLIGHT-20261018`.  
**Provenance:** original report pasted by Project Owner in the conversation as `Văn bản đã dán (1)(20261018-142014).txt`, 15,944 UTF-8 bytes, 130 lines, SHA-256 `6a8b0310e7454cae10ce015d694cbc10977f7a717f74e85d115f82f7c10459cb`. The original bytes **are not copied** to this GitHub branch; `TEMP_R38_USER_NOTEBOOKLM_40_ID_FAMILY_VERDICT_TRANSCRIPTION_20261018.json` records an item-level structured transcription, not a byte-identical NotebookLM export. The report mistakenly abbreviates its source target filename as `..._2026101.md`; actual source ends `..._20261018.md`.

## Reviewer findings as submitted

The report has **40 distinct IDs, 33 PASS / 7 REVISE**, proposes `ASSESSED_SKILL` for all 40, and explicitly states **0 approved mappings / 0 Skill or learner-history writes**. Review verdicts are academic *recommendations*. They do not modify Owner's R33/R35 **question-level curriculum layer** decisions.

## Material registry verification issue (separate from question mathematics)

Current [131-Family Registry](../../docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json) Git blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4` **does not contain these proposed Family IDs**:

| Proposed Family ID | Report verdict | Affected IDs | Registry status |
|---|---:|---:|---|
| `NUM-ROUNDING` | 12 PASS | `NUM02V1_121–132` | **Missing**; `NUM-SETS` already has `lam-tron-so` diagnostic subskill |
| `NUM-RATIONAL-OPS` | 6 PASS | `NUM02V1_133–138` | **Missing**; `NUM-FRACTION-OPS` has rational-arithmetic subskill; `NUM-ORDER` and `NUM-POWER` should be considered independently for 137/138 |
| `NUM-IRRATIONAL` | 3 PASS | `NUM02V1_139–141` | **Missing**; `NUM-SETS` has `so-vo-ti` subskill |
| `ALG-DIV-POLYNOMIAL` | 6 PASS | `ALG04V2_133–138` | **Missing**; existing `ALG-DIV-MONOMIAL` has `chia-da-thuc-mot-bien` as diagnostic subskill; *the more restrictive Family name deserves semantic review* |
| `NUM-SQUARE-ROOT-INTRO` | 3 REVISE | `NUM02V1_142–144` | **Missing** (new Family proposal). Report's alternative `NUM-REAL-SETS` is also **not** a Registry ID; `NUM-SETS` does exist, but assessed-role suitability for arithmetic square roots remains open |
| `RATIO-SCALE` | 2 REVISE | `RAT03V1_122,124` | **Missing**; report itself permits existing `RATIO-BASIC` as alternative for scale and maps |

**Recomputed tally: 27 of 33 reviewer PASS rows refer to nonexistent Family IDs; 5 of 7 REVISE rows also use nonexistent IDs.** Consequently **32/40** literal primary `family_id` proposals cannot be imported into the 131-family Registry. The remaining **8 existing-ID proposals** are 3 `NUM-ABS`, 3 `QUAD-GRAPH` (all marked PASS), and 2 `RATIO-DIRECT` (marked REVISE). *Registry-ID existence alone is not academic authorization.*

### Important scope clarifications

- The report says four CT03 items should be changed from `Entrance10` to `KNTT-Core`. The **item-level primary curriculum layer was already approved as `KNTT-Core`** by Owner in R35. What conflicts is the **old `tags.skill=mo-hinh-ti-le` → `RATIO-MODEL` Entrance10 Family**, so the remedy is an independently reviewed candidate Family role/mapping, not silently editing the Owner-approved item layer.
- The report correctly proposes `RATIO-DIRECT` for `RAT03V1_121,123`. For `RAT03V1_122,124`, use existing `RATIO-BASIC` as a review candidate rather than creating `RATIO-SCALE` without justification.
- The 3 square-root items are true Grade-7 Core source tasks, but no new `NUM-SQUARE-ROOT-INTRO` can be inserted automatically. The old `CT02 can-bac-hai` mapping has `role=SUPPORTING_SKILL, family_id=null, layer=Core-Support`. A separate `CT11 can-bac-hai-so-hoc` points to `RAD-BASIC`, but that is a **different Grade-9 topic** and is **not** an automatic cross-topic replacement.
- The original 6 rational-arithmetic-group items require checking whether `NUM02V1_137` mainly assesses order of operations and `NUM02V1_138` mainly assesses powers, rather than approving all six as one assessed Family.
- Academic PASS for **40 original MCQ stems** (R33/R35) remains intact. This reconciliation concerns **a different authorization: 40 source-to-Family evidence roles**. Do not relabel the 27 reviewer PASS rows as mathematical errors.

## Current exact result and next academic gate

| Dimension | Status |
|---|---|
| Reviewer verdict (quoted faithfully) | 33 PASS, 7 REVISE |
| Reviewer PASS with currently valid Family ID | **6** (candidate only) |
| Reviewer PASS with missing Family ID | **27 — not importable** |
| Reviewer REVISE with valid Family ID | **2** |
| Reviewer REVISE with missing Family ID | **5** |
| Reviewed Family mappings signed by Owner for these 40 | **0** |
| Canonical bank / taxonomy / Skill / Readiness / Mastery / history changes | **0** |

**Follow-up for NotebookLM:** submit only a short **registry ID validity correction** citing the existing 131-Family registry and the 40-row R38 candidate JSON. Resolve the 27 incorrectly named PASS rows, 3 square-root Family omissions, and 2 `RATIO-SCALE` rows; verify two `RATIO-DIRECT` and 6 truly existing compatible candidates. Give per-ID final candidate `family_id` **that exists in the registry or exactly `NEW_FAMILY_PROPOSAL / HOLD`**, plus role and PASS / REVISE / INSUFFICIENT_EVIDENCE. No new learning materials or runtime credit activation.

**QA protection:** all intake files are readonly. A green CI on PR #524 **never grants** assessed Family mapping, taxonomy edits, option-ID authorization, learner writes, retroactive credit or merge approval. R36/R37 option-ID QA remains independent.
