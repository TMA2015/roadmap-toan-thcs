# Chương VI B15–B18 — A5 D1–D6 source-scope audit, 31/10/2026

**AUDIT_TYPE:** owner-requested authoring handoff; NOT a new NotebookLM academic verdict, NOT website integration or deploy.
**SCOPE:** `G10-SGK-CHVI` / `SGK_CHAPTER` / `PUBLIC_FORMATIVE_ONLY` (Knowledge + Core/Practice/Application + Written/Anchor + D6 remediation); **exclude** Chapter Readiness, Topic Readiness, scores and Skill Mastery.
**SOURCE_CROSSWALK_BASELINE:** inspected GitHub main commit `83f9020cd116369e94bd6a91a5f48ac454139d71` (31/10) and authoring PR #642 / technical Draft PR #643. Main will continue evolving: release lane must verify final HEAD separately.

## 1. Source receipts, immutable IDs and coverage

1. Original ChVI SGK/SBT / D1–D5 academic packet `THPT-G10-CHVI-KNTT-BATCH-CANDIDATE-20261028`, NotebookLM `ACADEMIC_OVERALL=PASS` for 54/54 exact reviewed items, with **19** outcomes (reviewer prose said 18 by clerical error), recorded in `prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md` Git blob `23156f35aab6ec28771a6a57d48bad74f3900e9c`. Original five Temp files/ZIP SHA values are in that receipt. **18 Readiness candidates within 54 remain excluded from this public formative scope.**
2. Full reviewed Knowledge outcome/source map: `prototypes/thpt/THPT_G10_CHVI_APPROVED_KNOWLEDGE_PARITY_S1_20261028.md` Git blob `2f4828b18905991bfa87004009e49bb4dd2aa914`. Exactly **19/19** B15_OUT_01..05, B16_OUT_01..05, B17_OUT_01..05, B18_OUT_01..04 map to existing SGK Knowledge B15–18. Current main checked all four original lesson Markdown bodies.
3. Public D3 canonical: `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` (main inspected blob `1223d4c2b574433479c5d222dbeff363718ee4bb`) has **18** unique B15/B17/B18 Core+Practice item IDs. Existing **two** B16 Core/Practice IDs remain in the original R4 source, not cloned. `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md` includes eight single-source `THPT-G10-CHVI-APP-A1..A4, B1..B4` (Git blob `4876a1d38267bfaf0a570b9ea5bffa48563488ad`). 18 + 2 + 8 = **28 formative/application**. No new canonical ID from this handoff.
4. Existing shared D4 Written/Anchor library `docs/thpt-preview/thu-vien/tu-luan.md` (main blob `4da918f36d30c9b7110099e81fc88943e5b7705b`) has eight ChVI Written entries: six reviewed new `HPT-G10-CHVI-WRI-15/17/18-01/02` plus two existing B16 R4 Written (`HPT-WRI-DEMO-01`, `HPT-WRI-DEMO-ANCHOR-01`). Anchor = tag on Written, not a second bank.
5. D5 actual learning support: B15 source uses domain/graph tables and examples, B16 original R4 interactive parabol SVG and worked vertex/axis examples, B17 discriminant/sign tables, B18 radical-equation steps and application. The D1/D2 and D5 placements were inspected as source, not newly certified on mobile; do **not** invent 4 new figures just to satisfy a visual quota.
6. New D6 independent scoped `ACADEMIC_D6_OVERALL=PASS` on exactly eight five-step cards in source `prototypes/thpt/content-drafts/THPT_G10_CHVI_B15_B18_D6_A5_GAP_R01_EXACT_SNAPSHOT.md` (Git blob `396585c59f902f6b4078b4b494adf53d1793f252`; original Temp SHA256 `a9535d51870ae5d345a40d7991336fba360faf84df63a725c5bff70413ec3cb0`). Owner NotebookLM receipt Git blob `5bc4f081322d1c0833bf385f3d3d0a39dfaba067`; 8/8 PASS, 4/4 lessons, P0/P1=0, P2=1 UI/mobile check, `MINIMAL_DELTA=0`. No re-review of other 54 items required.

## 2. Exactly 8 canonical D6 helpers and outcome/item mapping

| HELP_ID | Outcomes (existing 19) | Public canonical practice return (existing) |
|---|---|---|
| `HELP-G10-B15-01` | B15_OUT_01,03 | `THPT-G10-B15-C01` / B15 graph |
| `HELP-G10-B15-02` | B15_OUT_02,04,05 | `THPT-G10-B15-C02`, `P01..P04` by skill |
| `HELP-G10-B16-01` | B16_OUT_01,02,04 | original B16 R4 Core/Practice (no cloned ID) |
| `HELP-G10-B16-02` | B16_OUT_03,05 | original B16 R4 graph/model Practice (no cloned ID) |
| `HELP-G10-B17-01` | B17_OUT_01,02 | `THPT-G10-B17-C01/C02` |
| `HELP-G10-B17-02` | B17_OUT_03,04,05 | `THPT-G10-B17-P02/P03/P04` |
| `HELP-G10-B18-01` | B18_OUT_01,03 | `THPT-G10-B18-C01/C02/P01/P03` |
| `HELP-G10-B18-02` | B18_OUT_02,04 | `THPT-G10-B18-P02/P04` |

**Reconciliation:** 8 unique HELP_IDs, **19/19** existing outcomes covered, 17 unique current public canonical return IDs in technical module (B16 uses original routes), 0 new/modified canonical `item_id`, 0 edited stems, keys, solutions or Written rubrics. Five-stage D6 content is verbatim from reviewed source; never clone the R4 B16 question bank.

## 3. Actual release-candidate evidence (not live release evidence)

- Draft authoring #642: `content/thpt-g10-chvi-d6-a5-gap-20261030` reviewed exact source and QA contract `CHVI_D6_R01_REVIEW_PASS_RELEASE_P2_QA_CONTRACT_20261030.md`.
- Draft technical #643 HEAD `f64b2f81e00725723afe594b7e3bbb73868c813c` integrates the 8 reviewed D6 cards in SGK Practice modal; its `scripts/test-thpt-chvi-d6-reviewed-r01.cjs` source-fingerprints all **40** five-stage strings, checks 19 outcomes/17 IDs and no key duplication. `scripts/test-thpt-chvi-d6-browser-smoke.cjs` tests UI at 1280/768/390px and no D6 in Readiness. CI for **that head**: THPT Preview `41004303692` SUCCESS, Roadmap PR Quality `41004303767` SUCCESS (also branding/skill QA SUCCESS).
- **Not established:** PR #643 merged, D6 deployed on current main, physical Safari/Android UAT or preservation of every learner state on real devices. Do not infer these from CI.

## 4. Decision: scoped authoring A5, NOT deployment

The actual source-to-learning-path audit now finds **D1–D6 academically complete as a source package** for `PUBLIC_FORMATIVE_ONLY` B15–B18: independent D1–D5 reviewed baseline + independently reviewed D6 R01, 19/19 existing outcomes and 36 existing public canonical items. Hence **`A5_AUTHORING_SOURCE_SCOPE=PASS_FOR_PUBLIC_FORMATIVE_ONLY`**; this is **not** a new NotebookLM verdict and **not** a finding that the eight D6 cards are already live.

- Main `inventory/G10-SGK-CHVI.md` had `A5` unchecked because independent Readiness/Mastery was not active. That rationale was **too broad** for the declared `PUBLIC_FORMATIVE_ONLY` scope. This receipt corrects the *authoring-only* scope classification, without rewriting previous review sources.
- **Deployment/presentation gate separately HOLD:** D6 is currently staged on #643, not deployed. Real-device QA/P2 and R1–R5 exact final commit/owner permission are release-lane tasks. Do not mark the **new D6 integration** as published, do not activate Chapter/Topic Readiness or Mastery.
- Academic delta: **no changes** to any reviewed mathematical body; new audit prose/manifest metadata only `DELTA_A_UI_OR_METADATA`, no NotebookLM re-review.

**STATUS:** `A1–A7_AUTHORING_SOURCE_COMPLETE_FOR_B15_B18_PUBLIC_FORMATIVE_ONLY` (after scope reclassification), `D6_INTEGRATION_DRAFT_ONLY`, `P2_PHYSICAL_UAT_OPEN`, `R1–R5_NEW_D6_RELEASE_PENDING`.
