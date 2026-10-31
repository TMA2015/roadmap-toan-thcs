# G11 SGK Chương I — trọn gói B01–B04, A1–A7 authoring R01 checkpoint

**STATUS:** `AUTHOR_QA_PASS / ONE_WHOLE_CHAPTER_NOTEBOOKLM_REVIEW_PENDING`. Absolutely **NOT** `ACADEMIC_PASS` for new B03/B04/RD1, not a website release, not Mastery.

## Exact scope and source identity

- `PACKET_ID=THPT-G11-CHI-B01-B04-WHOLE-CHAPTER-AUTHORING-R01-20261031` — Grade 11 KNTT Chương I, trục `SGK_CHAPTER` B01–B04.
- **B01/B02**: immutable previously reviewed full text `prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md`, blob `f0e737f2d07a27f233615345b60070319d5bd00f`; original independent NotebookLM R01 PASS receipt `THPT_G11_CHI_B01_B02_NOTEBOOKLM_R01_PASS_RECEIPT_20261029.md`, blob `97c01873aa501e791fb14c45c3a3c88784db5d17`. **Do not alter or re-review unchanged 18 original public items.**
- **B03/B04 new academic source**: `prototypes/thpt/content-drafts/THPT_G11_CHI_B03_B04_D1D6_AUTHORING_R01_20261031.md`, blob `0cbcf95b4e50e6a436e7505655db32018705e41f`; **NEW DELTA_C**, independent reviewer still required.
- **ONE assembled full chapter public review source**: `prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B04_FULL_CHAPTER_D1_D6_REVIEW_SOURCE_R01_20261031.md`, Git blob `599d12ac7c2252001f881833c39978f94112cee4`. The existing B01/B02 23,823-character content is copied without mathematical edits; new B03/B04 source included in full, plus four exact SVG XML candidates. Historic 'NOT_REVIEWED' header in original B01/B02 source reflects its earlier candidate state; current R01 owner verdict receipt overrides that historic header for the old material.
- **S1 SGK** Toán 11 KNTT Tập 1 B01 pp5–16, B02 pp17–21, B03 pp22–30, B04 pp31–39, cuối chương pp40–41. SBT B01 pp4–7, B02 pp8–10 per earlier verified source. **Printed SBT pages B03/B04 not directly verified from original PDF this turn**: must be verified independently by NotebookLM with 5 Permanent Sources v2.0 before final authoring acceptance.

## Whole-chapter item/skill/graphic reconciliation

| Component | B01–B02 previously reviewed | B03–B04 new candidate | Whole chapter |
|---|---:|---:|---:|
| Outcome IDs | 10 | 16 | **26** |
| Public canonical item IDs | 18 (16 C/P + 2 Written) | 28 (26 C/P + 2 Written) | **46** |
| D2 worked examples | 7 | 11 | **18** |
| SVG figure IDs | 2 | 4 | **6** |
| D6 HELP_IDs | 4 | 4 | **8** |
| Independent private RD1 items | 0 in old public source | 20 newly authored, full ChI outcome coverage | **20** |

- Four **new SVG canonical sources** `FIG-G11-B03-01..04` at `prototypes/thpt/content-drafts/svg/FIG-G11-B03-{01,02,03,04}_R01.svg`: sin, cos, tan, cot. Each includes `<title>`/`<desc>`, accurate asymptote branch splitting; source XML provided verbatim in full chapter review file. These diagrams **need** independent mathematical/visual assessment in the same chapter review.
- Four **new D6** HELP IDs B03 01/02, B04 01/02: five-step misconception/remediation and practice return; no new help for B01/B02.
- **Private RD0/RD1 academic source**: `Temp_G11_CHI_B01_B04_RD0_RD1_20_PRIVATE_ITEMS_R01_20261031.md`, 13,535 bytes, SHA256 `9b9235703b165c2ecb6c4b4c6eadcb37c1b72b35382f04c2c4eafb37463821e5` in private ChatGPT Library `Math App/THPT_Academic_Review_Archive`. Exactly 20 distinct `THPT-G11-CHI-RD1-01..20`, one stem+answer+solution+4×1-point rubric each. Not committed to public GitHub.
- Reviewer **PDF transport** (same private content, not byte-identical): `Temp_G11_CHI_B01_B04_RD0_RD1_20_PRIVATE_ITEMS_R01_20261031.pdf`, **88,467 bytes**, SHA256 `651558959c1553d2633189421713e5738caf1c88b00e1c956aa7a04cf9f37665`, seven pages, 20/20 ID text extraction PASS.

## Current self QA / no-overclaim boundaries

- **Public source:** programmatic readback found B01/B02 original 18 item blocks and B03/B04 28 novel item blocks; combined source includes **46 headings / 46 distinct canonical IDs**, source B01/B02 exact, source B03/B04 exact.
- **Private source:** 20/20 unique IDs, all with đề, đáp án, lời giải, 4×1pt rubric. **25/25 automatic math spot-checks PASS** on identities, trig root families, domains and modeling; this is author QA, not exhaustive independent reviewer PASS.
- **SVG:** 4/4 code sources with title/desc, no NaN/Infinity, tan/cot separate branches and dotted asymptotes; physical Safari/iPhone and cross-font QA remains release-lane, NotebookLM should first validate math labels/S1.
- **Private archive:** private MD, PDF and SHA manifest were stored in ChatGPT Library and independently restored; exact source Markdown and PDF byte parity PASS. A copy of the manifest stores snapshots and 25 math checks. **Source-to-canonical post-review promotion must be repeated immediately on NotebookLM verdict**, before final A1–A7 freeze/handoff.
- **Student safety:** no new question bank/JavaScript or Golden UI site code committed; only academic prototypes. Not a functioning chapter-end Final Submit, no credits, no Mastery, no altered THCS/Gemini/Firebase/browser learner state.

## One NotebookLM chapter-batch contract (no piecemeal review)

Review exactly two self-contained sources: public complete Chapter I D1–D6 with four SVGs (GitHub source above) and private complete Chapter I RD0/RD1 (Markdown or verified PDF). Validate S1 scope B01–B04 and precise B03/B04 SBT page receipts, D1–D6 completeness, 26 outcomes, 46 public canonical IDs (18 old already approved), 20 independent held-out RD1 items and exposure against the public bank; return per-lesson, outcome and item verdict plus P0/P1/P2, MINIMAL_DELTA and scoped Academic Clearance.

**Gate:** `G11_CHI_WHOLE_CHAPTER_AUTHORING=QA_PASS_REVIEW_PENDING`, `ACADEMIC_NEW_B03_B04_RD1=NOT_GRANTED`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`, `NEXT_CHAPTER=G11_CHII_AFTER_CHI_REVIEW_FIX_CANONICAL_FREEZE`.
## Two actual NotebookLM import sources (ONE CHAPTER batch)

1. Public `Temp_THPT_G11_CHI_B01_B04_D1D6_WHOLE_CHAPTER_R01_20261031.md` at `prototypes/thpt/review-packets/` on this Draft PR. **Byte-identical Git blob `599d12ac7c2252001f881833c39978f94112cee4`** to full Chapter I D1–D6 authoring review source. It includes exact frozen B01/B02, all B03/B04 D1–D6 new, all 46 public item IDs and complete SVG XML.
2. Private `Temp_G11_CHI_B01_B04_RD0_RD1_20_PRIVATE_ITEMS_R01_20261031.pdf`, seven-page text layer, SHA256 `651558959c1553d2633189421713e5738caf1c88b00e1c956aa7a04cf9f37665`, plus original Markdown SHA256 `9b9235703b165c2ecb6c4b4c6eadcb37c1b72b35382f04c2c4eafb37463821e5`. Both retained and restored exact bytes in private Library. **Do not place private item questions in GitHub.**

Delivery to owner: download **both sources** separately and add to NotebookLM with existing five Permanent Sources v2.0 and SGK/SBT S1. No JSON review file and no need for a third source. Review one time for the entire chapter; no fragment-per-lesson review requests. After verdict, archive raw report/complete canonical with source SHA, then release A1–A7 handoff; no automatic merge/deploy.

## UPDATE 31/10 — Independent NotebookLM entire chapter PASS (supersedes author-QA-only status above)

- Owner supplied independent NotebookLM verdict for exact `THPT-G11-CHI-B01-B04-WHOLE-CHAPTER-AUTHORING-R01-20261031`: `ACADEMIC_CHAPTER_I=PASS`; `OUTCOME_MATRIX_26=ALL_FULL_COVERAGE`; `PUBLIC_ITEMS_VERDICT_46=ALL_PASS`; `PRIVATE_RD1_ITEMS_VERDICT_20=ALL_PASS`; `SVG_GRAPH_VERDICT_4=ALL_PASS`; `REMEDIATION_HELP_VERDICT_4=ALL_PASS`; P0/P1/P2=0, MINIMAL_DELTA=0.
- B01–B02 prior PASS preserved, new B03–B04 D1–D6 and original full Chapter I RD1 **independently PASS**. No change to reviewed math or canonical public Git blobs. Old `AUTHOR_QA_PASS / REVIEW_PENDING` content above is a **historical pre-review checkpoint**, not current status.
- S1 SBT printed pages verified by reviewer: B03 pp11–18, B04 pp19–24, ChI final pp25–30 (B01 pp4–7, B02 pp8–10). This resolves earlier source page placeholder only.
- Full academic receipt and post-PASS private canonical source digests: `prototypes/thpt/content-drafts/G11_CHI_B01_B04_R01_NOTEBOOKLM_ACADEMIC_PASS_SOURCE_LOCK_20261031.md`; final A6 whole-chapter effective-source handoff: `prototypes/thpt/release-queue/ready/G11-SGK-CHI-B01-B04-WHOLE_CHAPTER_A6_HANDOFF_R01_20261031.md` on this Draft branch.
- Private canonical 20 held-out source SHA256 `b34b5f232b41e03eaddd1c3566ce2f73881ec09f8b3449432814b763d754f107`; private final source-lock manifest SHA256 `f1c1177d76506f483d4025ee68e27c8548adedb88cb8b3ec06f353762a2e8b12`; original source 13,535 bytes SHA256 `9b9235703b165c2ecb6c4b4c6eadcb37c1b72b35382f04c2c4eafb37463821e5`. Canonical/per-item SHA and 3/3 library RESTORE PASS.
- `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`, `SYSTEM_HOLD=YES`, `G11_CHI_AUTHORING_ACADEMIC_SOURCE_COMPLETE=YES`, `RELEASE_QA=NOT_PERFORMED`. Do not infer the entire Grade 11 or Topic academic PASS.
