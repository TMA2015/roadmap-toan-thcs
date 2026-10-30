# G10 KNTT ChVI B15–B18 · A5 public D1–D6 vs held-out Readiness gate (30/10/2026)

**SOURCE AUDIT ONLY** · `SGK_CHAPTER_PUBLIC_FORMATIVE_ONLY` distinct from `SGK_CHAPTER_READINESS`. This is a source/evidence reconciliation, **not** a newly granted academic PASS, release, or engine QA. `NO_SCORE/NO_MASTERY`, `NO_MERGE_DEPLOY`.

## Evidence available on live repository branches

- **Current `main` B15–B18 SGK D1 lesson pages** (4/4): `docs/thpt-preview/sgk/chuong-vi/bai-15.md` blob `11ec84bedd9ab8b35912a1565751cfa3396149a2`; B16 `0c1ce1ddbd44dd0d50acc0eba5c7e7d58d37c50a`; B17 `2511190850579c6d83d4e38476be880dd77e38a0`; B18 `1f832722a7aec125d5b1868aa59e7a0c3ada78c0`. They contain definitions, mathematical conditions, worked examples, self-practice and worked feedback; this observation alone does not imply all D1–D6 release gates closed.
- **Current public formative JS bank on `main`:** `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` blob `1223d4c2b574433479c5d222dbeff363718ee4bb`, exactly **18 distinct public B15/B17/B18 item IDs** (6 per these three lessons). Additional approved prior B16 formative and 8 cumulative application roles are recorded in historical 54-item NotebookLM receipt, but **not part of the 18-record JS bank itself**. Do not count the 18-record bank as the whole 28-item public collection in the manifest.
- **Current practice UI:** `docs/thpt-preview/sgk/chuong-vi/luyen-tap.md` blob `27effb6bc73887dabcf60af8154a4747be816764`, **8 practice entry buttons** (Core + Practice for each B15–B18); aggregate `bai-tap-cuoi-chuong.md` contains 8 A1–B4 cumulative examples/exercises and opt-in worked solutions. Historical `inventory/G10-SGK-CHVI.md` on main reports `PUBLISHED_SCOPED/PUBLIC_FORMATIVE_ONLY`, with 28 Core/Practice/Application and 8 Written/Anchor among academic-review candidates, while its **A5_D1_D6_SCOPE remains HOLD**. This is a bounded public release, not permission for an assessed chapter exam.
- **Reviewed D6 cards not yet merged:** Draft PR #643 `feature/thpt-g10-chvi-d6-integrate-r1-20261030`, source-locked `docs/assets/javascripts/thpt-chvi-d6-reviewed-r01.js` Git blob `c3cbd8913f80d5b1d4fee15c8afe264aad3a414f`, **8 unique HELP_ID**, 2 per B15–B18, `academic_scope=SGK_CHVI_D6_PUBLIC_SUPPORT_ONLY`, `credit=false`, **0 new canonical item bodies**; static QA `test-thpt-chvi-d6-reviewed-r01.cjs` checks academic hashes, reference IDs and no storage/network/mastery writes. Prior PR #643 exact commit `f64b2f81e00725723afe594b7e3bbb73868c813c` had Roadmap Quality, Preview, branding and pilot QA SUCCESS, but **no release/merge/device UAT**. This audit does not assert any new QA on a new commit.
- **Current SGK ChVI Readiness** `docs/thpt-preview/sgk/chuong-vi/tu-kiem-tra-chuong.md`, Git blob `3ad8c9ccc745793de3628e48c73a2963203d5fcf`, declares `TECHNICAL_DEMO_ONLY`, `mastery_credit:false` and 4 sample questions. Neither this demo nor owner NotebookLM's original review of inactive 18 protected item candidates proves an independent secure test engine; `RD0` now has 19 outcome-only reviewer-cleared targets. **Do not expose hidden item bodies/keys in public repo.**

## What A5 means by release scope — do not collapse gates

| Review dimension | Current grounded evidence | Gate for student-ready public pathway | Gate for official SGK Chapter Readiness |
|---|---|---|---|
| D1 Theory/conditions | 4 original main SGK lesson pages, original NotebookLM academic snapshot | Source-level evidence exists; verify against approved revisions and latest main | Same math plus a distinct assessment-scope review |
| D2 Worked examples | Source pages contain explanations and worked examples | Verify coverage/depth and actual learner QA | Examples alone cannot certify independent mastery |
| D3 Public Core/Practice | 18 canonical JS records in B15/B17/B18 bank plus historical B16 material | Dedup/verify remaining B16 items and 8 cumulative applications on exact integrated head | Can't reuse exposed exercises as held-out exam without exposure control |
| D4 Written/Anchor | 8 reviewed Written/Anchor candidates recorded in 2026-10-28 receipt | Check link/placement/rubric and one backing library (Anchor is label) | No self-marked Written → automatic Mastery |
| D5 Graphs/figures and notation | Main learning pages have graph/formula explanations; physical-device figure QA not established here | SVG/MathJax and mobile Golden R4 must be QA on exact head | Any test figures require separate reviewed secure delivery |
| D6 Remediation | 8 academic-reviewed D6 cards on #643 Draft, not on main | Merge only with owner authorization + exact-head QA + physical device UAT; no answer leak | No D6/hints visible before Final Submit in a real assessment |
| End-chapter readiness | Four-question technical demo, 19/19 RD0 outcome-scope source PASS | Public demo may exist with NO_SCORE/NO_MASTERY disclosure | **HOLD**: protected item bank/exposure, independent scoring/Final Submit, technical QA and owner approval |

## Distinct academic issue found during direct original S1 inspection

`B17_OUT_04` has a **real Core-vs-Support tier discrepancy**: RD0 NotebookLM classified solving parameter m with all-real sign condition `CORE_KEEP`, while learner B17 D1 explicitly labels parameter inequality tasks as non-Core extension. Original SGK Toán 10 T2 printed pp22–23 visually reviewed: fixed-coefficient sign/inequality examples are directly present, an explicit m-solving example not apparent on those pages. **SBT B17 p18 not inspected in this batch**. See [single-ID academic delta hold](G10_CHVI_B17_OUT_04_S1_CORE_SCOPE_CONFLICT_DELTA_C_REVIEW_HOLD_20261030.md) and separate real `Temp_G10_CHVI_B17_OUT_04_CORE_VS_SUPPORT_S1_DELTA_REVIEW_20261030.md` owner handoff; **no premature Core reclassification**.

## Release-safe conclusion

- `CHVI_PUBLIC_D1_D6_CONTENT=SUBSTANTIALLY_AUTHORED_AND_PARTIALLY_INTEGRATED` with independent academic reviewer evidence on defined snapshots; **not newly QA-PASS for full current-head student flow**.
- `CHVI_A5_PUBLIC_FORMATIVE_SCOPE=HOLD_PENDING_EXACT_CONTENT/FIGURE/HELP_PROVENANCE_AND_REAL_DEVICE_QA`; historical manifest A5 remains unchanged. `CHVI_B17_OUT_04_CORE_CLASS=ACADEMIC_DELTA_HOLD` for any **future official test blueprint** until targeted independent review.
- `CHVI_SGK_CHAPTER_READINESS=NOT_ACTIVE`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED_IN_RD0_SCOPE`, `RD3_ENGINE_SCORE=HOLD`, `FULL_CHAPTER_COMPLETE=NO`. Do not equate 133 reviewed RD0 coverage **targets** with 133 tested questions or public learning-path completion.
- Preserve Golden R4, THCS, Firebase/Gemini, URLs and learner progress keys; no merge/deploy permitted here.
