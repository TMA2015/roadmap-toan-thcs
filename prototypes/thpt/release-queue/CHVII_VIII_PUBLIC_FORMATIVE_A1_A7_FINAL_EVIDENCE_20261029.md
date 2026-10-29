# THPT G10 · Chương VII/VIII — A1–A7 FINAL SCOPED AUTHORING HANDOFF (2026-10-29)

**DECISION:** `CONTENT_READY_CANDIDATE` for precisely `PUBLIC_FORMATIVE_ONLY`, **not** `FULL_LEARNING_PATH`. This document assembles reviewer receipts and performed source-to-learner static reconciliation, **not** a new independent NotebookLM verdict, a production QA certificate or an owner permission to merge/deploy.

## 1. Canonical packets and scope

| Packet | SGK lessons | Outcomes | Public formative IDs | Shared Written | D5 academic SVG | D6 approved help cards | Release target |
|---|---|---:|---:|---:|---:|---:|---|
| G10-SGK-CHVII | B19–B22 | 23 | 32 | 4 (1 Anchor label) | FIG01–FIG03 | 8 HELP_ID | Draft PR #620 @ d84053c3104bc13f2d6945234a3689cbaa6491a4 |
| G10-SGK-CHVIII | B23–B25 | 12 | 25 | 3 (1 Anchor label) | FIG04 | 6 HELP_ID | Draft PR #621 @ cea67fe193d9c67fd21a628b93f1f31f68810118 |

Total = **35 canonical outcomes, 57 formative + 7 Written = 64 canonical public IDs**, 14 `HELP_ID` (not new item_id), 4 reviewed SVG. Numbers are inventories, **not** quantitative proof of complete full-chapter learning. No direct Topic-branch verdict.

### 1.1 Lesson-level completeness against declared `PUBLIC_FORMATIVE_ONLY`

| Bài | D1 theory / D2 worked source | D3 practice canonical | D4 Written canonical | D5 evidence/application | D6 R02 HELP_ID |
|---|---|---:|---:|---|---|
| B19 | SGK knowledge, vector/line prerequisites, examples | 8 | 1 | `B19-P04` application, FIG01 after solution | `D6-G10-B19-01/02` |
| B20 | Position, angle, distance theory/examples | 8 | 1 | `B20-P04` application | `D6-G10-B20-01/02` |
| B21 | Circle/tangent conditions/examples | 8 | 1 Anchor label | `B21-P04` application, FIG02 after solution | `D6-G10-B21-01/02` |
| B22 | Ellipse/hyperbola/parabola theory/examples | 8 | 1 | `B22-P04` application, FIG03 after solution | `D6-G10-B22-01/02` |
| B23 | Add/multiply rules with branch conditions | 8 | 1 | `B23-P04` application, FIG04 teaching/after answer | `D6-G10-B23-01/02` |
| B24 | Permutations/arrangements/combinations | 8 | 1 Anchor label | `B24-P04` application | `D6-G10-B24-01/02` |
| B25 | Newton's binomial, coefficient/constant | 9 | 1 | `B25-P04` application; `P07` required Core constant-term practice | `D6-G10-B25-01/02` |

**Interpretation:** All seven lessons have specific theory, examples, formative questions, Written, evidence/application and independently reviewed help/remediation content. There is **no independent protected Chapter Readiness runtime**; `FULL_LEARNING_PATH` is **NOT READY**. The validated scope is the learner-visible formative slice only; the release lane must integrate the approved D6 cards into clean lesson screens before R2/R3 QA.

## 2. Reviewer evidence: exact snapshot, no inherited chapter-wide PASS

All source receipts on authoring branch `content/thpt-g10-chvii-chviii-authoring-20261028` unless noted:

- **D1/D2:** `THPT_G10_CHVII_VIII_NOTEBOOKLM_D1D2_RD_RECEIPT_AND_RECONCILIATION_20261028.md`, blob `bd7ee513cef2a8a2a6bc44436cec488cf5384eb0`; 7 lesson-specific PASS; 35 S1 outcome refs completed by `THPT_G10_CHVII_VIII_NOTEBOOKLM_DELTA_R1_RECEIPT_20261028.md`, blob `f0be344d381b44e81a4a3669ad716d1b53423246`. S1 is reviewer-reported; some separate receipt files use different per-lesson pagination, so citations should be validated against actual printing before updating learner footnotes.
- **D3/D4:** reviewer 63/63 `PASS_WITH_RECLASSIFICATION` documented in `CHECKPOINT_2026-10-28_G10_CHVII_VIII_D3D4_R01_P07_DELTA_v1.0.md`, blob `5cdf04e9b0a6cc9e6dfb645ee20b3994e072e7b1`; one new `THPT-G10-B25-P07` scoped PASS receipt `THPT_G10_CHVII_VIII_NOTEBOOKLM_P07_DELTA_PASS_AND_OUTCOME_RECEIPT_20261028.md`, blob `e63563121d6a67acf7185331e67b33e9acdb5a5c`. `B22-C01` OPTIONAL_SPECIALIZED; `B25-P02/P05` SUPPORT_EXTENSION, `B25-P06` OPTIONAL_SPECIALIZED, **not mandatory Core**. Keep those roles unchanged. 35-outcome mapping: `THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.4.md`, blob `a145b898e13ef88dbc5d37e879b243a1e6e880a3`.
- **D5:** `THPT_G10_CHVII_VIII_NOTEBOOKLM_D5_R1_PASS_RECEIPT_20261028.md`, blob `89037a16782fef9f0b9352974899eae395816e4a`, 4 figures PASS by source blob: FIG01 `8964b708`, FIG02 `08e22fbc`, FIG03 `e28c6500`, FIG04 `f24fcdf8`. Approved SVG content resides under `prototypes/thpt/visuals/` of the authoring branch.
- **D6 academic remediation:** 14/14 HELP_ID PASS (6 corrected, 8 unchanged), P0/P1/P2 all 0, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES` on **Temp R02 ONLY**, receipt `THPT_G10_CHVII_VIII_D6_NOTEBOOKLM_R02_PASS_RECEIPT_20261029.md` Git blob `cd53c1f6d3fe225e9508f3f7f513a70c319b2612`. Reviewed source `THPT_G10_CHVII_VIII_D6_REMEDIATION_REVIEW_SNAPSHOT_v0.2.md` Git blob `03755fb8e4a192df833820b2b01617de74035076`, byte identical to owner Temp R02. **The v0.1 GitHub working draft differs and is NOT the approved source.**

No new Academic PASS is issued by this checkpoint. A5 is concluded *for the narrower PUBLIC_FORMATIVE_ONLY authoring slice* by combining existing source-locked independently reviewed sub-slices and checking their coverage. This is not a certificate for full SGK chapter or Topic learning.

## 3. Exact current release-candidate source reconciliation

- ChVII release head `d84053c...`, ChVIII release head `cea67fe...` checked against GitHub 2026-10-29. Both are open Draft; ChVIII depends on ChVII PR branch. Existing **reviewed 32 + 25 formative JS blobs byte unchanged**: ChVII `2b191d7abba7a4f5bd79d4c122673cd53a45495b`, ChVIII `2ae62fada28913ec336b3507684408a1e05a3232`. The 57 canonical item IDs are distinct.
- Written source content in release PR has 4 / 3 unchanged canonical IDs. Comparing source-known old Written blobs `89e405b3a5719a877e90ff0c85823ad5e603dca5` / `e53ab99e94a0fad38f277256cb7dbe4e6b40928b` with current `ebc70018a168998c7dd43b34c3e195a2b1e15ed7` / `e78c43ab7b2f6d3ab1b135d1ad09c7030df2c44e`: all seven math/answer/rubric evidence paragraphs preserved verbatim; changes are 7 new prerequisite-remediation lesson links and review-label microcopy, plus one source-equivalent Anchor skill-list wording change. **DELTA_A_UI + DELTA_B_SOURCE_EQUIVALENT**, no math answer/rubric change; visual deep links still need exact-head R2 QA.
- Reviewed SVG source vs live release candidate: all geometric SVG lines byte identical **except one source `DRAFT` footer text line removed per figure**. Current candidate blobs differ: FIG01 `57485fed0a5dcee6ebcd060f100abe5eed43bc76`; FIG02 `0fd1f0671ccdad9b7bdff1d05551a3e32f9d82d1`; FIG03 `6a1d532983804a7cdb7d44b5d99f82c688660d62`; FIG04 `0af9ac442b6ca0c91ba0e77d3d6eb93f413171ec`. This is **DELTA_A_UI** (removes draft watermark/footer, does not modify geometry, formulas, positions or labels). No re-review of figures' mathematical content needed; final rendered responsive QA is R2/R3.
- Seven lesson knowledge pages are accessible at B19–B25 in PR heads; each contains source-authored theory, examples and navigation. **Reviewed D6 Help Card blocks are not yet embedded in the seven student lesson files**: only their source-locked authoring document exists. This is a **release-lane integration task**, not a reason to modify/review the 57 existing items; integration must not alter reviewer-approved D6 mathematical wording.

## 4. A1–A7 adjudication (source-scoped)

| Gate | Decision | Grounded evidence |
|---|---|---|
| A1 SOURCE_SNAPSHOT | PASS_FOR_FORMATIVE_SCOPE | immutable above blobs; current PR heads; reviewed R02 exact source |
| A2 SGK_SBT_SCOPE | PASS_FOR_FORMATIVE_SCOPE | 35/35 reviewer S1 outcome receipts plus four optional-layer exclusions; exact page-footnote discrepancies are a P2 citation QA task, not proof of changed math |
| A3 NOTEBOOKLM_VERDICT | PASS_FOR_FORMATIVE_SCOPE | D1/D2, D3/D4, D5 and D6 receipts; no independent readiness runtime approval |
| A4 ITEM_OUTCOME_IDS | PASS_FOR_FORMATIVE_SCOPE | 35/35 outcomes; 57+7 public unique, 14 non-item HELP_ID; no duplicate Anchor IDs |
| A5 D1_D6_SCOPE | PASS_FOR_FORMATIVE_SCOPE_ONLY | above seven-lesson matrix; end-of-chapter protected Readiness intentionally excluded, so not FULL_LEARNING_PATH |
| A6 DELTA_RESOLVED | PASS_FOR_FORMATIVE_SCOPE | source-locked D3 P07 Delta_C reviewed, D5 R1 reviewed, D6 R02 reviewed; release-only SVG/microcopy deltas A/B audited without math change |
| A7 PUBLIC_PRIVATE_BOUNDARY | PASS_FOR_FORMATIVE_SCOPE | no held-out stems/keys in this packet; original RD02 remains retired; zero active Readiness; no Topic PASS, no automatic score/Mastery |

**Scope warning:** Promotion of `G10-SGK-CHVII`/`CHVIII` to READY is *only* for the **public formative tranche** already described by `RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY`. It is NOT permission to state ChVII/VIII have complete chapter-end self-assessment or independently complete Topic paths. If the owner subsequently requires `FULL_LEARNING_PATH`, that scope needs a new full A5 evaluation, protected assessment QA and owner authorization.

## 5. Release-lane handoff — NOT authorized here

1. R1: integrate current main, preserve canonical blobs; take **exact R02 source** to inject 8 ChVII + 6 ChVIII help cards into lesson UX under learner-friendly headings, without displaying NotebookLM/QA terms.
2. R2: CI/browser check the resulting exact head with all link routes, MathJax, SVG labels, mobile/desktop, every D6 link to an existing item, 7 Written rubrics not revealed initially, THCS regressions. Previous QA on #620 newest head: THPT Preview success, **Roadmap PR Quality cancelled**; #621 newest head: THPT Preview success (PR Quality not confirmed). Neither is final release CI.
3. R3: student-visible controls contain no review metadata/old DRAFT labels; confirm remediation can be opened and reading remains coherent as stand-alone chapter path.
4. R4: preserve `SGK_CHAPTER_READINESS` as non-scoring/inactive; no held-out keys in client, no pre-Final-Submit hints/feedback; no Mastery update. Until secure scoring engine verified, never activate protected Readiness.
5. R5: explicit owner approval for the exact PR/commit, then release workstream merge/deploy. Real-device UAT P2 must be evidenced, not inferred from Chromium simulation.

**No merge/deploy occurred in the authoring lane.** This source evaluation doesn't activate chapter-end Readiness, alter student state or approve a whole chapter completion claim.
