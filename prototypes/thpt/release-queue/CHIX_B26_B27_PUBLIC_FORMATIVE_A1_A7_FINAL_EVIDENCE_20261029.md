# THPT G10 ChIX · B26–B27 · A1–A7 academic closure for PUBLIC_FORMATIVE_ONLY

**DATE:** 2026-10-29  
**PACKET_ID:** `G10-SGK-CHIX`  
**RELEASE_SCOPE:** `PUBLIC_FORMATIVE_ONLY` — KNOWLEDGE + CORE/PRACTICE/APPLICATION + WRITTEN + reviewed D5/D6 supporting content, **NOT** `FULL_LEARNING_PATH`.  
**AUTHORING_VERDICT:** `A1_TO_A7_COMPLETE_FOR_DECLARED_FORMATIVE_SLICE`. This is a **source-/scope-based authoring gate** assembling existing independent NotebookLM receipts, not an additional reviewer verdict or release authorization.  
**RELEASE_STATE:** R1–R5 pending, no merge/deploy/activated SGK_CHAPTER_READINESS/TOPIC_READINESS/Mastery.

## 1. Complete per-lesson source map

| Lesson | D1 theory / D2 worked example | D3 formative IDs | D4 Written/Anchor | D5 reviewed teaching SVG | D6 reviewed support cards |
|---|---|---:|---|---|---|
| B26 · biến cố và định nghĩa cổ điển của xác suất | 26.1–26.5; EX-G10-B26-01, EX-G10-B26-02 | 7: B26-C01/02 + B26-P01–P05 | THPT-G10-CHIX-W26-01 | FIG01 coin+die 2×6 | D6-G10-B26-01, D6-G10-B26-02 |
| B27 · thực hành tính xác suất cổ điển | 27.1–27.4; EX-G10-B27-01/02/03 | 7: B27-C01/02 + B27-P01–P05 | THPT-G10-CHIX-W27-ANCHOR-01 | FIG02 12-leaf no-replacement tree | D6-G10-B27-01, D6-G10-B27-02 |

10 canonical outcomes = 5 B26 + 5 B27; 16 public canonical IDs = 14 formative + 2 Written (Anchor is label, not a new bank), 5 worked examples, 2 actual SVG, 4 unique `HELP_ID` (not `item_id`). Includes prerequisite/refutation/exposure-safe formative remediation, so learners can recover without AI Tutor. No new questions added just to increase counts.

## 2. Academic receipts and exact snapshot lock

### D1–D4 base (independent historic PASS, not automatically new PASS)

- Independent reviewer receipt: `prototypes/thpt/content-drafts/THPT_G10_CHIX_B26_B27_NOTEBOOKLM_D1D4_R0_PASS_RECEIPT_20261028.md` on `content/thpt-g10-chix-academic-authoring-20261028`, blob `05c3dd40a094b4b34c28b48cc72d1752c21190fe`. `B26 PASS, B27 PASS, 10/10 outcomes, 5/5 worked examples, 16/16 item IDs`.
- Existing learner candidate PR #616 head `1c205a9a87f5e0fc2563be14e1c1a911a14c6d76` source JS `docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js` blob `caf4ca6f8866a2cb3377dfdfa73d723c0e5bd5f0` with exactly 14 unique formative IDs; Written `docs/thpt-preview/thu-vien/tu-luan-chuong-ix.md` blob `51c5f78e41d569fff11070e0f48f3ab25f58b587` with 2 canonical IDs. Source math/answers/hints/rubrics remain unmodified here.

### D5–D6 delta R01 (NEW independent PASS delivered by owner)

- Review packet: `THPT-G10-CHIX-B26-B27-D5D6-ACADEMIC-R01`, 5/5 Permanent NotebookLM THPT v2.0 plus SGK/SBT PDF S1.
- Original reviewed file `Temp_THPT_G10_CHIX_B26_B27_D5_D6_R01.md` SHA256 `0f78b39fd5db116b571794105e5f8e2108acb72aa663cab2f2b6eda6a2c6e7d5`. Its **complete byte-identical Git mirror** is `prototypes/thpt/content-drafts/THPT_G10_CHIX_B26_B27_D5D6_R01_EXACT_REVIEW_SNAPSHOT.md` Git blob `6ac3c0762d9cf8b41ab614e2163979d9770a436f` **on this PR branch**, not the earlier authoring D6 v0.1 wording.
- Owner-supplied reviewer report archived **unaltered in mathematical statements, LF-normalized** at `prototypes/thpt/content-drafts/THPT_G10_CHIX_B26_B27_NOTEBOOKLM_D5D6_R01_OWNER_VERDICT_20261029.md` Git blob `32b0ca58e2377c19eda2abaaa3207f3874e7d282`. Reviewer: D6 four HELP_ID PASS, D5 two SVG PASS, B26/B27 lesson verdict PASS, `D5_OVERALL=PASS, D6_OVERALL=PASS, P0=0, ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES` with scoped academic-only authority.
- FIG01 raw SVG `prototypes/thpt/visuals/THPT_G10_B26_COIN_DIE_SAMPLE_SPACE_CANDIDATE.svg` on `content/thpt-g10-chix-academic-authoring-20261028`, exact original Git blob `e03d92262abb4aa99e88da565f07b7054adc803e`; FIG02 `prototypes/thpt/visuals/THPT_G10_B27_WITHOUT_REPLACEMENT_TREE_CANDIDATE.svg` blob `877abd0e755950e6112f1c2aaa33f281027ad33f`. **Both embedded XML source blocks in the reviewed Temp** are byte-identical to these underlying SVG files. Checked independent local CairoSVG renders and XML parse; FIG01 12/4 highlighted; FIG02 12 leaves with RR/RB/BR/BB 2/4/4/2. No production responsive QA claim.
- The prior `THPT_G10_CHIX_B26_B27_D6_HELP_REMEDIATION_CANDIDATE_v0.1.md` blob `79de21d2538b5dffe6483e58a4b11c06644a57b5` is a distinct authoring draft and **NOT** the approved byte-exact teaching source. Any integration must take D6 content verbatim from the `EXACT_REVIEW_SNAPSHOT`; substantial edits need scoped DELTA_C review.

## 3. Reconcile NotebookLM reviewer P1 source-page issue

- New reviewer S1 page receipts: SGK B26 77–82, B27 83–87, end ChIX 88–89. SBT B26 question 61–63/solution 126–127; B27 question 64–66/solution 127–128; end ChIX question 67–69/solution 129–131.
- Old D1–D4 source receipts used approximate SBT 60–69 or 60–74. Resolved **academically as DELTA_B_SOURCE_EQUIVALENT** by addendum `THPT_G10_CHIX_SBT_PAGINATION_R01_SOURCE_EQUIVALENT_ADDENDUM_20261029.md` (on this branch) — historical receipts unchanged. This is the reviewer's one `P1_RECEIPT_AUDIT`, **not P1 of any D5/D6 math**.
- **Release-lane still must update learner displayed footnotes** on B26, B27 and Written page before publication, then validate no stale ranges with exact-head QA. Citation source edit is not a new item or math solution delta.

## 4. A1–A7 disposition, Chapter IX PUBLIC_FORMATIVE_ONLY

| Gate | Authoring result | Evidence |
|---|---|---|
| A1_SOURCE_SNAPSHOT | PASS | D1–D4 learner/source SHA plus byte-exact Temp+2 SVG original blobs |
| A2_SGK_SBT_SCOPE | PASS | original D1–D4 S1 review; newer D5/D6 S1 receipt; P1 citation reconciled with addendum |
| A3_NOTEBOOKLM_VERDICT | PASS | separate D1–D4 16/16 snapshot and D5 2/2 + D6 4/4 exact Temp R01 PASS |
| A4_ITEM_OUTCOME_IDS | PASS | 10/10 outcomes; exactly 16 canonical IDs, two shared Written (one Anchor label), four non-item HELP_ID |
| A5_D1_D6_SCOPE | PASS only for PUBLIC_FORMATIVE_ONLY | two SGK lesson paths contain scoped D1–D6 academically reviewed segments; no independent scoring Readiness |
| A6_DELTA_RESOLVED | PASS for content authoring | D5/D6 DELTA_C reviewed exact Temp; SBT citation P1 corrected by logged DELTA_B; no changed C/P/Written content |
| A7_PUBLIC_PRIVATE_BOUNDARY | PASS | six independently reviewed SGK Chapter Readiness held-out candidates remain outside public source (0 active). Topic not covered; no Mastery credit |

**Important:** a public formative-only chapter packet can be marked `CONTENT_READY` **without** claiming that the independent `SGK_CHAPTER_READINESS` or vertical `TOPIC_READINESS` has been completed. It is not a full autonomous chapter path, only a bounded published learning slice with clear restricted scope.

## 5. Release lane (R1–R5 all TODO; DO NOT MERGE/DEPLOY HERE)

1. R1: rebase old Draft #616 onto current main and release stack #620/#621 as needed; avoid duplicate canonical items and do not touch THCS Golden/Firebase/Gemini/learner history.
2. R1/R3: integrate **approved exact D5 SVG FIG01/FIG02** and **four exact D6 HELP_ID** into learner-first B26/B27 pages, with proper placement (figures as teaching illustrations or voluntary formative explanations), no NotebookLM/QA metadata visible to students. No private Readiness keys/stems on public website.
3. R2: run exact-head automated QA, mobile/tablet/desktop source-to-render, MathJax, SVG accessibility, deep links, all 16 item IDs, two Written rubrics behind voluntary reveal, and THCS regression; specifically address FIG02 SVG 1600×1160 responsive/overflow P2.
4. R2/R3: apply source-equivalent SBT printed-page corrections to B26, B27 and Written footnotes (P1 source receipt audit); confirm no misleading text remains.
5. R4: Chapter Readiness inactive, no hints/keys in public client, no pre-Final-Submit feedback, no independent scoring or Mastery. No Topic scoring.
6. R5: explicit owner permission for **exact release PR and scope** only after all technical checks, then authorized merge/deploy; subsequent P1 deploy proof and P2 real-device owner UAT required.

**No project-level MERGE/DEPLOY, no new independent Academic PASS issued, no owner release authorization assumed.**
