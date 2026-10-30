# Toán 10 KNTT Chương VI · B17_OUT_04 — S1 Core-tier discrepancy and targeted review HOLD

**AUDIT DATE:** 2026-10-30 · **AUTHORING ONLY** · **IMPACT:** one RD0 outcome and one B17 explanatory subsection. **CATEGORY:** `DELTA_C_ACADEMIC_MATERIAL_CANDIDATE` (classification inconsistency, **no academic revision applied**), with `S1_CORE_TIER_REVIEW_HOLD`. Not a new assessment item or an author-issued Academic FAIL/PASS.

## Exactly checked S1 primary source

- Owner's original scanned **SGK Toán 10 KNTT Tập 2**, 102 PDF pages, SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`. **Rendered and visually inspected PDF pages 23–24 (one-based), whose printed SGK page numbers are 22–23.** No external reference or OCR was used to replace source images.
- Printed p22 defines a quadratic inequality for **given real coefficients** `a,b,c` with `a≠0`, explains solving its solution set by the sign of the quadratic, and displays fixed-coefficient worked examples. Printed p23 continues solved inequalities, SGK practice/application for a quadratic model, and calculator guidance. **The inspected p22–23 did not directly present an explicit m-parameter selection problem as a compulsory SGK Core question.** This finding does **not** exclude such work in the original SBT p18 or on other SGK pages: reviewers must inspect full B17/SBT and end-of-chapter resources before deciding.
- No scanned S1 page image or copyrighted PDF was committed. Source visual evidence is held separately in original owner Drive file; this file records minimal page labels/lesson summary for traceability.

## Three nonidentical claims to reconcile

1. **Independently reviewer-reported RD0 R01 ChVI** (packet `THPT-G10-CHVI-SGK-CHAPTER-READINESS-RD0-R01-20261030`, snapshot Git blob `2b7e04d8fd279879a44a41e1810a345feb8873ac`): `B17_OUT_04` = “Tham số và điều kiện dấu với mọi x”; NotebookLM outcome verdict `CORE_KEEP`, narrowed P2 to fixed leading coefficient `a≠0`, with variable-leading-coefficient cases elective. Owner reviewer receipt `G10_CHVI_CHIX_RD0_R01_OWNER_NOTEBOOKLM_SCOPE_PASS_RECEIPT_20261030.md` remains immutable; independent RD0 PASS as originally received remains a **historical source-scoped verdict**.
2. **Student-facing SGK B17 page on `main`**, `docs/thpt-preview/sgk/chuong-vi/bai-17.md`, Git blob `2511190850579c6d83d4e38476be880dd77e38a0`: includes a correct worked example `x²−2(m+1)x+m²+3>0, ∀x∈ℝ` with `a=1`, `Δ=8(m−1)`, hence `m<1`; but its learner note labels **the parameter inequality section** as *luyện tập mở rộng, không phải kiến thức Core bắt buộc*. Page is not changed by this audit.
3. **S1 page image** SGK B17 printed pp22–23: fixed-coefficient quadratic inequalities are explicitly introduced/illustrated, but **parameter-solving as its own mandatory Core outcome is not directly established from those two pages alone**. The mathematical deduction `a>0, Δ<0 ⇒ f(x)>0 ∀x` is distinct from asking the learner to **solve for parameter m**; separate them in reviewer classification.

## Requested targeted verdict (no whole-chapter retest unless needed)

- Inspect SGK B17 printed pp19–24, end ChVI pp28–29, **SBT B17 pp16–18** and end ChVI pp22–27 directly from the five valid THPT Permanent Sources v2.0 and S1 PDFs. Report exact printed pages of any **explicitly parameter-dependent** mandatory tasks; distinguish the theorem's “f(x)>0 for every x” corollary from finding m where coefficients depend on m.
- For canonical `B17_OUT_04` decide `CORE_KEEP`, `SUPPORT_ONLY`, `OPTIONAL` or `MERGE_COVERAGE` **without renaming/removing that ID**. Clarify compulsory Core depth with `a` a fixed nonzero constant, any fixed-a m in b/c, and whether solving for m is actually in Core of SGK vs only SBT/vận dụng/nâng cao.
- Check learner D1 B17 statement against the revised tier: if parameter section is Core, suggest a minimal source-supported wording change; if Support/Optional, preserve current optional note and recommend correcting only the RD0 outcome classification. **Do not edit the published student page or independently reviewed R01 until final reviewer verdict and delta gating**.
- Return `SOURCE_RECEIPT`, `S1_PAGE_EVIDENCE`, `B17_OUT_04_CLASS_VERDICT`, `PUBLIC_D1_VS_RD0_CONSISTENCY`, `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_DELTA_VERDICT`, and whether impacted scope may be certified. **All other 132 RD0 outcomes remain outside delta review** unless a material dependency is demonstrated.

## Impact, gates and conservation

- Affected source IDs: `B17_OUT_04` plus B17 D1 tier-label, **not** any changed item stem/key/solution/rubric or material mathematics. The two original reviewer reports and snapshots are preserved byte-identically.
- **Review uncertainty:** reviewer `133/133 RD0 PASS` remains a historical report; **one** B17 tier classification is now flagged as `S1_SCOPE_HOLD` for further use in official assessment design. Do **not** claim 133 Core-ready test questions, or silently declare the overall previously-reviewed RD0 scope invalid. This is an annotation pending scoped academic adjudication.
- No new held-out item, answer key, scoring, Firebase, browser history, THCS UI or Gemini change. No release authority or full ChVI A5 closure is granted by this audit. `READINESS_ACTIVE=NO`, `NO_SCORE/NO_MASTERY`, `NO_MERGE_DEPLOY`.

## 30/10 NEW DIRECT S1 EVIDENCE: fixed-a Core **confirmed from the original books**

Previous concern was based on SGK printed p22–23 alone; the **full B17 printed pp19–24 and SBT B17 pp16–18 have now been visually inspected**. See the superseding primary-source [R02 receipt](G10_CHVI_B17_OUT_04_PRIMARY_SGK_SBT_SOURCE_CORRECTION_R02_20261030.md). Original SGK p23 `Ví dụ 3` does **not** contain m; the 29-ID reviewer pinpoint was erroneous. But SGK p24 **Bài tập 6.17 explicitly requires finding m** for `x²+(m+1)x+2m+3>0` for all real x with **a=1**, and SBT p17 Ví dụ 3 and p18 Bài 6.24 also give such m-tasks with fixed a=1 or -1. **The originally reviewed `B17_OUT_04=CORE_KEEP` within fixed nonzero a is S1-supported.**

**Change of blocker:** `B17_OUT_04_CLASS_CORE_SOURCE_HOLD=RESOLVED_BY_DIRECT_S1`; `RD0_R01_REVIEWER_CLASS=UNCHANGED_CORE_KEEP`; `SGK_P23_VD3_PINPOINT=CORRECT_TO_SGK_P24_EX6.17`. The **learner's B17 D1 paragraph** still labels every parameter inequality non-Core, which is over-broad. `D1_STUDENT_TIER_NOTE_DELTA_C=INDEPENDENT_REVIEW_PENDING` only for the proposed replacement wording. A real one-file R02 `Temp_G10_CHVI_B17_OUT04_D1_SCOPE_AND_S1_REFERENCE_DELTA_R02_20261030.md` (6365 bytes SHA256 `46cb139f5434b1198c0b7a3920dc8f0b878d98426968c0e7c9bff63a9203fb9d`) is prepared. No main website edit or canonical ID change was made. The earlier 29-ID reviewer text remains as archived; it is not a new 1-ID delta verdict. `NO_SCORE/NO_MASTERY`, `NO_MERGE_DEPLOY`.

## 30/10 R02 targeted NotebookLM verdict received — academic D1 hold closed

- Owner supplied a **new single-ID NotebookLM R02 verdict** for `PACKET_ID=THPT-G10-CHVI-B17_OUT_04-S1-REFERENCE-AND-D1-TIER-DELTA-R02-20261030`: `EXPECTED=REVIEWED=1/1`; `B17_OUT_04=CORE_KEEP` (a fixed nonzero); `S1_CITATION_VERDICT=PASS`; `D1_MINIMAL_REPLACEMENT_VERDICT=PASS`; `ACADEMIC_DELTA_VERDICT=PASS`; `P0=0 P1=0 P2=1`. This is **not** the previously repeated 29-ID R01 batch report.

- Reviewer confirmed source correction **SGK printed p24 Bài 6.17** (not p23 Ví dụ 3), **SBT printed p17 Ví dụ 3**, **SBT printed p18 Bài 6.24**. The new D1 tier note is independently approved for exactly one pedagogical `<details>` block; math, keys, rubric, `item_id`, RD0 snapshot unchanged. `DELTA_B_SOURCE_EQUIVALENT` source pointer + `DELTA_C_ACADEMIC_MATERIAL` one tier-note clarification reviewed PASS.

- **Implementation:** separate [Draft PR #649](https://github.com/TMA2015/self-learning-math/pull/649), page change commit `9631fe2a9d2c78a86ff8ce31c026118d61c23392`; old page blob `2511190850579c6d83d4e38476be880dd77e38a0` → new `d881fa2e9c723dce4148872e355b6703c7e6eeea`. Static one-block-only QA PASS. New reviewer receipt and delta log stored in #649 `prototypes/thpt/content-drafts/THPT_G10_CHVI_B17_OUT04_NOTEBOOKLM_R02_PASS_RECEIPT_AND_DELTA_LOG_20261030.md`.

- **Updated gate:** `B17_ACADEMIC_DELTA_HOLD=RESOLVED_BY_NOTEBOOKLM_R02_PASS`; `B17_D1_SOURCE_CORRECTION=IMPLEMENTED_IN_DRAFT_NOT_MAIN`; `FINAL_HEAD_CI/DEVICE_UAT=NOT_YET_PASSED_AT_RECORDING`; `CHVI_A5=HOLD`; `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`; `NO_SCORE/NO_MASTERY`; `RELEASE_AUTHORIZATION=NO`; no merge/deploy.
