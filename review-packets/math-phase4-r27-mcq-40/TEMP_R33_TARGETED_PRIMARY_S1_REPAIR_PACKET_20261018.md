# R33 — Targeted S1 Evidence Repair Packet (24-ID closure; 16 priority)

**Project:** Self-Learning Math  
**Date:** 2026-10-18  
**Packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Gate:** `ACADEMIC_HOLD_PRIMARY_S1_REQUIRED`  
**Scope:** 24 R30/R31/R32 IDs. The other 16 of the original R27 40 items remain untouched.  
**Source distinction:** Facts below from GitHub R27 question packet plus *S2 public educational references*. They are **not** authenticated primary SGK/SBT scans and cannot authorize Core, PASS, or Entrance10 by themselves.

## 1. Findings to resolve

| ID | Risk in NotebookLM R32 | Proposed editorial action (**not applied**) |
|---|---|---|
| NUM02V1_127 | R32 cites Vận dụng 1 p36 and 7.14 p37 as a `STRUCTURAL_CLONE` of direct rounding of a measured length; both SGK examples involve additional context/steps. | Compare task structure exactly; default to concept evidence if no closer rounding-measurement exercise. |
| NUM02V1_128 | 7.16 p37 addresses budget feasibility for multiple purchases, unlike rounding a single item's price. | Find closer S1 example; otherwise use Bài 30 rounding concept, not 7.16 as clone. |
| NUM02V1_129 | 7.13 p37 estimates a three-term sum to choose a candidate result; R27 asks a two-term rounded sum. | Review family granularity; retain broad similarity but do not claim identical structure without detail. |
| NUM02V1_130 | 7.13 uses addition, R27 item estimates multiplication. | Find matching product-estimation source; otherwise CONCEPT_BASE. |
| NUM02V1_132 | 7.12 p37 involves **forward** rounding, R27 asks **inverse** recognition; R32 still cites 37–38 though Bài 31 starts p38. | Reference Bài 30 pp35–37 only; distinguish concept vs structural clone. |
| NUM02V1_145 | R32 REASON text truncated in pasted Markdown. | Recover intact original reasoning and check p35–36, Mục 3. |
| NUM02V1_146 | R32 REASON truncated; R27 chooses one number with absolute value 7, Bài 2.18 solves both values for absolute value 2,5. | Different task surface; re-evaluate evidence type. |
| NUM02V1_147 | R32 claims `EXACT_MATCH` with Bài 2.18 p36, but R27 is `|x|=4` MCQ while book exercise is `|x|=2,5`; REASON truncated. | Candidate `STRUCTURAL_CLONE` not `EXACT_MATCH`; verify source. |
| ALG04V2_133 | Bài 7.32a cited within pp40–42 but exercise appears p43. | Separate rule pp40–42 from Bài 7.32a p43; verify reason type. |
| ALG04V2_134 | R32 cites 7.39a in pp41–43, but the exercise is at p45; Luyện tập 2b and 7.39a differ from R27. | Separate Luyện tập 2b p41 and Bài 7.39a p45; select closest. |
| ALG04V2_135 | R32 places Bài 7.32 on pp40–42; actual p43. | Split source/section locators, check structural diversity. |
| ALG04V2_136 | Same **arithmetic expression** as Bài 7.39a but book exercise p45, not p43; R27 uses MCQ choices. | Candidate p45 and `EXACT_MATH_EXPRESSION_WITH_MCQ_ADAPTATION`; do not certify `EXACT_MATCH` for whole item automatically. |
| ALG04V2_137 | Bài 7.32b p43 instead of R32's pp40–42; degree and polynomial shape differ. | Confirm algorithmic clone or concept base with actual SGK. |
| QUA12V1_121 | R32 combines Bài 18/19 (pp11–17) and GeoGebra p114 as if one location, and recommends Entrance10 without explicit layer justification. | Keep Bài 18 pp4–9, Bài 19 pp10–17, TH3 p114 as **separate** source anchors; hold layer decision. |
| QUA12V1_122 | TH3 p114 asks intersection through GeoGebra, R27 solves intersection algebraically. | Establish whether algebraic transfer is Core, Core-Support, or Entrance10 by S1 and approved taxonomy, not exam intuition. |
| QUA12V1_123 | TH3 p114 asks find intersections but does not explicitly state tangent/discriminant-zero rule in displayed exercise. | Require direct S1 support for tangency; if exam-layer is claimed, require authentic S3 evidence and owner layer approval. |

**8 additional IDs** without a priority discrepancy in this secondary review: `NUM02V1_121–126`, `NUM02V1_131`, `ALG04V2_138`. These are **not academic PASS**; their S1 citations must also be checked to close all 24.

### S2 reference register (not original S1)

- [Toán 6 Bài 7.12 p37](https://loigiaihay.com/giai-bai-712-trang-37-sgk-toan-6-ket-noi-tri-thuc-voi-cuoc-song-a87681.html): direct forward rounding.
- [Toán 6 Bài 7.13, 7.14, 7.16 p37](https://sachbaitap.com/giai-bai-712-713-714-715-716-trang-37-sgk-toan-6-ket-noi-tri-thuc-tap-2-c158a24770.html): estimation of sum / segment division / shopping-budget estimate.
- [Toán 6 Vận dụng 1 p36](https://loigiaihay.com/tra-loi-van-dung-1-trang-36-sgk-toan-6-ket-noi-tri-thuc-voi-cuoc-song-a94999.html): public-number rounding.
- [Toán 7 Bài 2.18 p36](https://loigiaihay.com/giai-bai-218-trang-36-sgk-toan-7-tap-1-ket-noi-tri-thuc-a105488.html): `|x| = 2,5`.
- [Toán 7 Bài 7.32 p43](https://hayhochoi.vn/bai-732-trang-43-toan-7-tap-2-ket-noi-tri-thuc.html): polynomial division exercises a/b.
- [Toán 7 Bài 7.39 p45](https://loigiaihay.com/giai-bai-739-trang-45-sgk-toan-7-tap-2-ket-noi-tri-thuc-a110381.html): `(x^3-8):(x-2)` appears in subquestion a.
- [Toán 9 GeoGebra Thực hành 3 p114](https://vietjack.com/toan-9-kn/thuc-hanh-3-trang-114-toan-9-tap-2.jsp): drawing and finding intersection of a line and parabol using software.

## 2. NotebookLM R33 primary-S1 prompt

> You are an independent academic reviewer of KNTT Grades 6/7/9. Use ONLY the selected **original textbook/SBT KNTT pages** to assert primary S1 evidence. The R27 exact source is a description of bank MCQs, not evidence of the textbook itself. This R33 list and the secondary websites are challenge points, not authority.
>
> Select current NotebookLM Math Review Rules v1.2 and Master Plan v1.2.1 as permanent sources; select the R27 exact 40-MCQ source, R30 original erratum, R31 page-boundary audit, this R33 packet, and the original SGK/SBT pages as batch sources. Do NOT select obsolete master-plan versions or obsolete batch packets at once.
>
> Review all **24 specified** IDs, focusing first on the 16 flagged above. Do not review the 16 IDs excluded from this batch. Match IDs to exact R27 question text; verify S1 **grade, volume, chapter, lesson, page, subsection/activity and meaning**. Distinguish `EXACT_MATCH` (whole textbook question including numbers/wording), `STRUCTURAL_CLONE` (same reasoning structure with different data), and `CONCEPT_BASE` (common theory only). A textbook exercise that shares an expression but uses a different MCQ presentation must be described precisely. Do not label 7.13 addition as structural evidence for multiplication without an explicit bridge.
>
> For `QUA12V1_121–123`, separately assess **curriculum placement** (including actual original Grade-9 S1 lessons), **whether the reasoning is mandatory Core**, **whether GeoGebra activity is supplementary**, and **whether any Entrance10 claim has authentic S3 exam provenance**. Do not automatically promote or demote based on the exam label. Tangency via a double root must have its own reference, distinct from merely plotting/intersecting curves.
>
> Return exactly 24 rows with fields: `ITEM_ID | GRADE | VOLUME | LESSON | PAGE | SECTION_OR_ACTIVITY | EVIDENCE_TYPE | TEXTBOOK_EVIDENCE_DESCRIPTION | RECOMMENDED_LAYER | VERDICT | REASON | ACTION`. For each PASS, identify a readable original S1 page excerpt/image locator for owner verification. Use `REVISE` for unsupported citation or layer proposals with exact fixes, `INSUFFICIENT_EVIDENCE` for unavailable S1, and `NOT_REVIEWED` for unread IDs. Include counts, ID reconciliation, explicit `ACADEMIC_PASS_AUTHORIZED: FALSE` and `PRODUCTION_SKILL_COUNTER_AUTHORIZED: FALSE`.
>
> **No question edits, option reindexing, answer-key changes, source hash rewriting, taxonomy activation, Mastery/Readiness credit, learner-history migration or deployment.** Do not invent S1 evidence to fill all rows with PASS.

## 3. Technical QA vs academic gate

Machine QA: `node scripts/test-math-v2-r33-s1-proof-matrix.js`. It requires 24 source-locked ID mappings and 16 priority S2 issues (plus 8 still pending), all with `INSUFFICIENT_EVIDENCE` for independent-S1 signoff. This does **not** say all questions are mathematically wrong; it says *this specific academic receipt has not been confirmed from original S1 pages*.

**Closure:** R33 PASS requires independently inspected S1 evidence for every accepted line plus explicit owner approval and separate repo QA. Before that, keep R32/R33 Draft, do not merge academic assumptions or change live classification.
