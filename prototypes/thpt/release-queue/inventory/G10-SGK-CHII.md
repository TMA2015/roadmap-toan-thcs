# G10-SGK-CHII — II · Bất phương trình bậc nhất hai ẩn · retrospective audit 29/10/2026

PACKET_ID: G10-SGK-CHII
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: FULL_LEARNING_PATH
STATE: INVENTORY
SOURCE_COMMIT: b99297c1470d9ef3f273c8393a39427172c38fba
REVIEW_RECEIPT: prototypes/thpt/content-drafts/THPT_G10_CHII_D5_NOTEBOOKLM_R0_PASS_RECEIPT_20261028.md [blob 56da6977e49e0dc6d125413e12a12fa3631d22bc]; 3 additional scoped receipts below
CURRENT_PR: academic-only source branch source ref content/thpt-g10-chix-academic-authoring-20261028 @ b99297c1470d9ef3f273c8393a39427172c38fba; no integration PR; process parent #622 draft
CONTENTS: B03–B04; 11 accepted outcomes; 18 original public D3/D4 canonical items; 10 heldout academic PASS (runtime 0); 2 D5 figures PASS

## Source and academic evidence
- **S1 scope:** SGK KNTT Tập 1 pp.22–32; SBT KNTT Tập 1 pp.16–24. Exactly five THPT Permanent Sources v2.0 unchanged.
- **Original reviewed source:** source ref content/thpt-g10-chix-academic-authoring-20261028 @ b99297c1470d9ef3f273c8393a39427172c38fba; source snapshot/ID-only approval receipts are immutable evidence, not new item copies.
- prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_NOTEBOOKLM_D1D2_PASS_R0_RECEIPT_20261028.md
- prototypes/thpt/content-drafts/THPT_G10_CHII_B03_B04_NOTEBOOKLM_D3D4_18ITEMS_R0_PASS_RECEIPT_20261028.md
- prototypes/thpt/content-drafts/THPT_G10_CHII_PRIVATE_READINESS_10_NOTEBOOKLM_R0_PASS_RECEIPT_20261028.md
- prototypes/thpt/content-drafts/THPT_G10_CHII_D5_NOTEBOOKLM_R0_PASS_RECEIPT_20261028.md
- **Private heldout metadata-only index:** prototypes/thpt/content-drafts/THPT_G10_CHII_PRIVATE_CHAPTER_READINESS_10_ID_ONLY_INDEX_v0.2.md. Never commit private questions, numeric inputs, keys or rubrics.
- **Delta log:** Không thay đổi toán học sau các snapshot R0 trong manifest này; hình biên nét liền/đứt đã được reviewer ghi nhận.

## D1–D6 scoped audit (A5 currently HOLD)
| Axis | Evidence status |
|---|---|
| D1 knowledge | NotebookLM scoped PASS for B03–B04, not independently re-reviewed |
| D2 worked examples | NotebookLM scoped PASS from original lesson snapshot |
| D3 SGK Core/Practice | NotebookLM item-level PASS for 18 distinct canonical teaching items |
| D4 Written/Anchor | Included in 18 item register; only one canonical Written per item; no clone |
| D5 evidence, applications, graphics | 2 reviewed original SVG assets PASS; broader practical evidence coverage needs chapter-wide audit |
| D6 remediation and self-study support | NOT AUDITED across lesson gaps/assessment feedback; A5 HOLD, no D6 academic PASS |

## A — authoring and independent academic review
- [x] A1_SOURCE_SNAPSHOT — Pinned source commit b99297c1470d9ef3f273c8393a39427172c38fba, original authoring files and 4 scoped exact-review receipts; no rewriting reviewer snapshots.
- [x] A2_SGK_SBT_SCOPE — S1 page receipts verified: SGK KNTT Tập 1 pp.22–32; SBT KNTT Tập 1 pp.16–24; lesson span B03–B04.
- [x] A3_NOTEBOOKLM_VERDICT — Scoped D1–D5 and private SGK Chapter Readiness NotebookLM PASS evidenced in 4 receipt files; no global verdict invented.
- [x] A4_ITEM_OUTCOME_IDS — Distinct B-lesson canonical IDs: 11 outcomes, 18 teaching item IDs and 10 private RD IDs; Written/Anchor reused by role only.
- [ ] A5_D1_D6_SCOPE — Chưa có D6 remediation và audit toàn phạm vi SGK độc lập; chưa đối chiếu nguồn với website trên exact commit. Remediation evidence and completeness need explicit D1–D6 audit, not inferred from approved visuals.
- [x] A6_DELTA_RESOLVED — Không thay đổi toán học sau các snapshot R0 trong manifest này; hình biên nét liền/đứt đã được reviewer ghi nhận. No new substantial math modifications are introduced by this metadata manifest.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — This inventory contains IDs, hashes, receipts only; 10 confidential heldouts remain out of public GitHub/JS; Topic Readiness not inferred.

## R — integration and release (release lane only)
- [ ] R1_INTEGRATED_CURRENT_MAIN — Not integrated into current main on an exact candidate content SHA; belongs to release lane after CONTENT_READY.
- [ ] R2_EXACT_HEAD_CI — No exact-head full browser, mobile, MathJax, THCS regression or remedy integration QA for this packet.
- [ ] R3_CLEAN_STUDENT_UI — Learner-facing final Golden R4 pages not audited for absent authoring/reviewer remarks.
- [ ] R4_ASSESSMENT_SAFETY — Private chapter Readiness is not active; static-site Final Submit semantics/exposure need owner-approved scope.
- [ ] R5_OWNER_APPROVAL — Owner has not authorized release/merge/deploy of this new academic integration packet.

## P — post-release
- [ ] P1_DEPLOY_RECEIPT — No production deployment event or pages receipt exists for this candidate packet.
- [ ] P2_DEVICE_UAT — No physical desktop/mobile owner acceptance for this candidate release.

BLOCKER/NEXT: Chưa có D6 remediation và audit toàn phạm vi SGK độc lập; chưa đối chiếu nguồn với website trên exact commit. Keep inventory; complete academic D6 and full lesson self-study audit, then check A1–A7 evidence again. No review repeats unless DELTA_C material content changes. Do not activate private Readiness or Mastery.
