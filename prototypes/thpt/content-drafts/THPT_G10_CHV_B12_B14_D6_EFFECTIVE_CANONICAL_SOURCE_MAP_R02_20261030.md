# G10 ChV B12–B14 · Effective academic D6 source map after two scoped R02 PASS reviews

**STATUS:** `AUTHORING_SOURCE_RECONCILED` · `PUBLIC_FORMATIVE_ONLY` · `NO_MERGE_DEPLOY` · **6 and only 6 canonical HELP_IDs** · **NO independent testing/Readiness/Mastery**.

## 1. Source precedence and independent review

- **Frozen R01** 3-lesson D1–D6 authoring source Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7` and NotebookLM R01 receipt blob `7a20d601c5e3e6ef184bcb44e4e7e214e8a06baf`: **never edit archived snapshot**. Original 14 outcomes, 27 unique public item candidates, 9 worked examples, 3 SVG unchanged. **R01 HELP01 and HELP02 were independently superseded by targeted reviews; they are INVALID for fresh integration.**
- **R02 for HELP01**: source exact 5-step content in `THPT_G10_CHV_B12_D6_HELP01_R02_CANONICAL_SOURCE_OVERLAY_20261030.md`, blob `2cecaba020881a560bc33251c38d55cc10a05516`. Source of review is verified original Temp `Temp_THPT_G10_CHV_B12_HELP01_D6_DELTA_C_REVIEW_R02_20261030.md`, 6,706 bytes SHA256 `926fa47af4f43637c375cf4169457784df2d225a0529b6266ecc3202e564651f`, Git candidate mirror blob `43ef063e150c647e0b5025e131b6b0f14d092576`. Owner-provided NotebookLM scoped `ACADEMIC_DELTA_VERDICT=PASS`, old P1 resolved 0/0/0, full R02 receipt blob `d8ed85283d2095ca633613eb1fccde754fdef3d1`.
- **R02 for HELP02**: source `THPT_G10_CHV_B12_D6_HELP02_R02_CANONICAL_SOURCE_OVERLAY_20261030.md`, blob `913400d6aff63befac95a8a47a00870663dd0096`. Owner-provided NotebookLM scoped `HELP02_VERDICT=PASS`, old P1 resolved, receipt blob `9dc02b7fa8a43c72b7988d1685a7e020d8c37738`. **Caveat:** original cited `Temp_THPT_G10_CHV_B12_D6_HELP02_DELTA_REVIEW_20261030.md` is not available as a byte-verified attachment in this authoring conversation; overlay has content extracted from owner-reported review, not asserted byte-identical. **Release R1 must perform exact-source parity check before integration.**

## 2. Six canonical D6 records (one owner per HELP_ID)

| HELP_ID | Outcome ID | Effective content and review status | Linked unchanged public item |
|---|---|---|---|
| `HELP-G10-B12-01` | `G10-B12-ABS_ERROR` | **R02 overlay** · NotebookLM targeted PASS · R01 invalid | `THPT-G10-B12-C02` |
| `HELP-G10-B12-02` | `G10-B12-REL_ERROR` | **R02 overlay** · NotebookLM targeted PASS · R01 invalid | `THPT-G10-B12-P06` |
| `HELP-G10-B13-01` | `G10-B13-QUARTILES` | **Frozen R01** · reviewer scoped PASS | `THPT-G10-B13-P05` |
| `HELP-G10-B13-02` | `G10-B13-MEAN` | **Frozen R01** · reviewer scoped PASS | `THPT-G10-B13-P01` |
| `HELP-G10-B14-01` | `G10-B14-VARIANCE` | **Frozen R01** · reviewer scoped PASS | `THPT-G10-B14-P05` |
| `HELP-G10-B14-02` | `G10-B14-OUTLIERS` | **Frozen R01** · reviewer scoped PASS | `THPT-G10-B14-P03` |

**Rule:** When building runtime, resolve by canonical `HELP_ID`, replacing only R01 body for HELP01 and HELP02 with R02 bodies, not appending a seventh or eighth help entry. Keep the **single existing** canonical question/solution/rubric for each linked item; do not generate a fresh `item_id` per D6 use, `placement`, or `role`.

## 3. Authoring QA / independent remaining gates

- Static audit on GitHub Draft #639 verified frozen original R01 blob, **six unique** `HELP_ID` values, **one** exact five-step HELP01 R02 body equal to reviewed Temp candidate section, single HELP02 R02 body with `\delta_a\le d/|a|`, and unchanged linked C02/P06 source. No hidden/held-out assessment bank changed.
- The academic review scopes are **R01 for unaffected portions + targeted independent R02 PASS for HELP01 and HELP02**. Neither R02 pass authorizes a **Chapter Readiness** assessment, full-ChV completion, or live scoring/Mastery.
- Handoff to release requires current-main integration R1 (including above source parity for HELP02), R2 exact-final-head CI/browsers/mobile SVG, R3 Golden R4/UI/deep links, R4 protected assessment safety, R5 **explicit project-owner release approval**; no release from this Draft PR. Current authoring source evidence and all URLs/IDs should be rechecked at exact release commit.

## FINAL SOP R03 disposition · 31/10/2026 (supersedes previous R1 historic-Temp hold)

- Newest owner policy: educational content provenance decisions follow verified academic standards; no additional owner choice for missing historic Temp if reviewed effective source is sound.
- Independent NotebookLM R03 explicitly checked the effective HELP02@R02 five-step text, correct mathematical conditions and unchanged P06 mapping: `SOURCE_EQUIVALENCE_VERDICT=PASS`, `P0/P1/P2=0`, `MINIMAL_DELTA=0`.
- Thus `HELP-G10-B12-02@R02` Git blob `913400d6aff63befac95a8a47a00870663dd0096` is **ACCEPTED_BY_EVIDENCE**; original historic `HISTORICAL_TEMP_BYTE_PARITY=NOT_VERIFIED` remains a true archival fact, **not a standalone owner-decision or release gate**.
- The effective six HELP_ID mapping stays unchanged (4 R01 + 2 R02). R1 still verifies actual integrated source fingerprint and no duplicated canonical IDs; R2–R5, owner merge/deploy authorization and physical UAT are independent. SOP: `prototypes/thpt/THPT_NOTEBOOKLM_SOURCE_ARCHIVE_AND_PROVENANCE_SOP_v1.0_20261031.md`.
