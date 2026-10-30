# G10 ChVI · RD1 private item-review handoff — PUBLIC METADATA ONLY

**DATE:** 2026-10-30 · **PACKET_ID:** `THPT-G10-CHVI-SGK-CHAPTER-READINESS-RD1-PRIVATE-ITEMS-20261030-R01` · **VERSION:** `PRIVATE_CANDIDATE_R01_20261030` · **PATH:** `SGK_CHAPTER_READINESS:G10:CHVI` (not `TOPIC_READINESS`).

**STATE:** `DELTA_C_NEW_PRIVATE_ITEMS` · `AUTHOR_MATH_STATIC_QA=PASS` · `NOTEBOOKLM_RD1_ITEM_VERDICT=PENDING` · `RELEASE_AUTHORIZATION=NO`.

**CURRENT_OWNER_NOTEBOOKLM_REVIEW (2026-10-30):** Independent reviewer reports `ACADEMIC_MATH_VERDICT=PASS` and `ACADEMIC_CLEARANCE_FOR_RD1_SNAPSHOT=YES` for 20/20 private candidate items and 19/19 outcomes, `P0/P1/P2=0/0/0`, `MINIMAL_DELTA=0`. **Separately**, `EXPOSURE_ISOLATION_VERDICT=HOLD` for comparison against historical 18 private ChVI Readiness candidates (28/10); `EXACT_NOTEBOOKLM_SOURCE_BYTE_PARITY=HOLD` because reviewer abbreviated actual file name and supplied no uploaded-source SHA. [Metadata-only scoped owner receipt](G10_CHVI_RD1_OWNER_NOTEBOOKLM_R01_SCOPED_MATH_PASS_EXPOSURE_HOLD_METADATA_20261030.md). The earlier `NOTEBOOKLM_RD1_ITEM_VERDICT=PENDING` and `RD1_ACADEMIC_PASS=NO` statements below are **historical pre-review state**, superseded for item mathematics **only**; exposure, secure delivery, Final Submit and Mastery remain HOLD / NOT_ACTIVE. The reviewer report also mislabels SBT ChVI as Tập 1; source verified as **SBT Tập 2**. No content/key/rubric edits, no release or deployment.

## Original S1, exact sources and independent RD0 limitation

- **Original SGK Toán 10 KNTT Tập 2** (user-supplied 102-page scan; SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`), representative source pages *visually inspected*: B15 printed pp4–10, B16 pp11–18, B17 pp19–24, B18 pp25–27, end-ChVI pp28–29.
- **Original SBT Toán 10 KNTT Tập 2** (user-supplied 143-page scan; SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`), representative source pages inspected: B15 pp3–9, B16 pp10–15, B17 pp16–18, B18 pp19–21, end-ChVI pp22–27.
- RD0 outcome blueprint Git blob `2b7e04d8fd279879a44a41e1810a345feb8873ac`; independent owner-provided NotebookLM RD0 scope receipt Git blob `e9aefca9faedf65265a142bc8a018e733fac6c76`. Exactly **19 original outcomes = 15 CORE_KEEP + 4 SUPPORT_ONLY**, 0 active protected items and `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` in RD0. The 4 Support IDs are `B15_OUT_05`, `B16_OUT_05`, `B17_OUT_05`, `B18_OUT_04`; 15 other original IDs remain mandatory Core.
- **B17_OUT_04 remains Core** on a fixed leading coefficient `a≠0`. SGK printed p24 exercise 6.17, SBT p17 example 3/p18 exercise 6.24 directly support fixed-a parameter questions; targeted owner NotebookLM R02 source/tier delta PASS on separate Draft #649. Do not make parameter-dependent leading coefficient changing through zero a mandatory Core item; no public D1 modification in this authoring task.

## Public and historical protected-source exposure gate

- Public `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` main Git blob `1223d4c2b574433479c5d222dbeff363718ee4bb`: **18 canonical B15/B17/B18 public formative items**. B16 Core/demo appears in `docs/thpt-preview/sgk/chuong-vi/bai-16.md` main blob `0c1ce1ddbd44dd0d50acc0eba5c7e7d58d37c50a`. 8 public cumulative A1–B4 applications in `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md` blob `4876a1d38267bfaf0a570b9ea5bffa48563488ad`. All checked for public stem/context overlap during authoring; **substantive differentiation must be independently reviewed**, not inferred from changed numbers.
- **Separate historical 2026-10-28 five-Temp ChVI academic batch** includes **18 older private Readiness candidate items** (receipt `prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`, Git blob `23156f35aab6ec28771a6a57d48bad74f3900e9c`). **Actual historical private item-bank equivalence and learner exposure have NOT been reconciled.** Avoid a second canonical bank; NotebookLM/owner must assess both snapshots before any protected item ID is registered or reused. `OLD_VS_NEW_PRIVATE_BANK_DEDUP=HOLD`.

## Actual owner-private Markdown packet (not in repository)

- **FILE:** `Temp_G10_CHVI_SGK_CHAPTER_READINESS_RD1_PRIVATE_ITEMS_R01_20261030.md` · **33,365 UTF-8 bytes** · SHA256 **`639dd990e7bcbfe83b620ea427d108a2d1307871f33da9b165386d7a26c9b57e`** verified from the actual file bytes.
- **NEW PRIVATE CANDIDATE IDs:** exactly 20, `THPT-G10-CHVI-RD1-01` through `THPT-G10-CHVI-RD1-20`; all provisional and not production registered, with `item_id` assigned once per candidate and no copies for placements.
- **19 original outcome IDs:** `B15_OUT_01..05` (5), `B16_OUT_01..05` (5), `B17_OUT_01..05` (5), `B18_OUT_01..04` (4); **15 CORE_KEEP + 4 SUPPORT_ONLY**, 0 renamed IDs.
- **MODE DISTRIBUTION:** 5 MCQ_SINGLE (01,03,06,11,16); 3 TRUE_FALSE_GROUP (04,09,12); 6 SHORT_EXPLANATION (02,07,13,17,18,19); 6 WRITTEN_RUBRIC (05,08,10,14,15,20). **16 Core items / 4 Support items** (05,10,15,20). Rubric reference total **47 points = Core 31 + Support 16** for independent review arithmetic only, NOT a validated score/Readiness threshold.
- **AUTHOR QA:** 20 `### Item` sections, 20 `### Answer` sections, 20 distinct candidate IDs and 19/19 outcome mapping, mode/tier counts, and SymPy spot-checks on radical domains/roots, vertex/discriminant sign, fixed-a parameter interval, and model feasibility — `STATIC_QA=PASS`. NotebookLM item-level mathematics/exposure review **PENDING**, not self-awarded Academic PASS.
- **Needed independent verdict:** verify S1 scope, each item/answer/conditions/rubric, per-item `ITEM_VERDICT`, 19-outcome `OUTCOME_MATRIX`, full `ID_RECONCILIATION`, specific public-and-old-private overlap analysis (explicit `EXPOSURE_STRUCTURAL_RISK`), `P0/P1/P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL`, `ACADEMIC_CLEARANCE`. Only 5 current THPT v2.0 NotebookLM Permanent Sources.

## Security and release hard stop

**NO PRIVATE ITEM STEM, A–D OPTION, CORRECT LETTER, WORKED SOLUTION OR RUBRIC TEXT IS STORED IN THIS PUBLIC GITHUB DOCUMENT.** Do not commit actual Temp or keyed NotebookLM reviewer report into public GitHub Pages/repo `docs/`, JS, JSON or PR comments. All private content stays in owner conversation/NotebookLM.

`RD1_ACADEMIC_PASS=NO` (pending) · `ASSESSMENT_ITEM_BANK=PRIVATE_CANDIDATE_ONLY` · `HELDOUT_SOURCE_STORAGE=NOT_IMPLEMENTED` · `FINAL_SUBMIT_SCORING=NOT_ACTIVE` · `NO_SCORE/NO_MASTERY` · `NO_MERGE_DEPLOY` · `OWNER_RELEASE_AUTHORIZATION=NO`. No backend/accounts, Gemini, THCS, student data or progress mutated. Public UI release PRs remain independent.
