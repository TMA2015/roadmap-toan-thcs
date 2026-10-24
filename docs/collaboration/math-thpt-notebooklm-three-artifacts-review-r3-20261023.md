# Self-Learning Math THPT — R3 source candidate audit: NotebookLM Core / Readiness / Written

**Packet:** MATH-THPT-NOTEBOOKLM-SAMPLES-AUDIT-R3-20261023  
**Source date:** 2026-10-23, owner-supplied research materials.  
**State:** REVIEW_RECEIPT_REVISIONS_REQUIRED; **NO_OVERALL_NOTEBOOKLM_PASS**, NO_LEARNER_RELEASE, NO_NEW_THPT_CARD/SCORER.  
**Owner sources:** pasted `CORE-10-VI-16` sample (full four tasks and draft JSON); attached `Văn bản đã dán (1)(20261023-152414).txt` (22-topic proposal); `Văn bản đã dán (2).txt` (8-item Readiness); `thu-vien-tu-luan-cap-3.md` (five written archetypes, 3 anchors and rubrics). THESE ARE **candidate suggestions** attributed to NotebookLM, not a source-locked independent PASS result. Source filenames are just research handles, not canonical curriculum authorities. Do not commit source documents verbatim, user-private Drive locations, textbooks or any learner data.

**Controlling project contracts:** Master Plan v1.2.1 + permanent NotebookLM review rules v1.2 + golden Learn→Practice→independent Readiness + source/depth audit D1–D6 + single canonical Written Library. Existing live THCS remains 87 approved Written. THPT current recommendation R2 **24 provisional topics** is *not* superseded by an unaudited alternative 22-topic list.

## A. Provisional review verdict

| Source block | Technical/math check | Decision |
| --- | --- | --- |
| NotebookLM 22 cross-grade topics | Valuable coverage/UX comparison; conflates some topic sizes and does not establish every 79 SGK lesson, 2018 Math programme outcome, or optional scope | `KEEP_AS_REFERENCE`; NO replacing R2 until line-level mapping |
| G10 KNTT Chapter VI Lesson 16 quadratic Core | Formulae for vertex, axis, domain, monotonicity, global range on R: sound; 4 full exercises duplicate Practice Room | `REVISE_UI_AND_CANONICAL_PLACEMENT` |
| 8-item "Chuyên đề 05" Readiness | Eight mathematical answer keys checked with problem statements; Q1 relies on ambiguous plaintext diagram, Q4 covers Grade12-level derivative-sign information; time-lock/mastery policy conflicts | `REVISE_ASSESSMENT_CONTRACT` |
| Written: optimization carton | Correct cost function and minimizer; two published decimal results imprecise | `REVISE_NUMERIC_KEY` |
| Written: pyramid distance | Two methods lead to same exact expression `2a/sqrt(7)`, given a>0 assumed as a side length; geometric argument uses valid auxiliary perpendicular | `PROVISIONAL_MATH_OK`; classroom/wording review still needed |
| Written: rare-disease Bayes | 2.93% positive rate and ~32.42% posterior correct under given assumptions; "95% accuracy" technically wrong vs sensitivity, medical conclusion overgeneralized | `REVISE_CONTEXT_INTERPRETATION` |

**Overall:** `REVISION_REQUIRED` before any publishing; academic opinion in this file is not a substitute for the subsequent independent source-locked NotebookLM review. No automatic approval for any item.

## B. Precise corrections & acceptance tests

| ID | Priority / kind | Finding | Required precise action / QA |
| --- | --- | --- | --- |
| NB-R3-01 | P0 product/evidence | Readiness sample says >=80% opens next topic or awards "Mastered Topic"; conflicts with approved SOFT Readiness. | Keep all study routes unlocked; report only descriptive Readiness evidence after Final Submit. No Mastery bridge, retroactive award or migration. |
| NB-R3-02 | P0 governance | No complete independent review manifest: no source-locked expected IDs/actual IDs, no `OVERALL|PASS` and no release approval. | Mark all four provided packets `CANDIDATE_NOT_APPROVED`. An independent review must reconcile IDs & S1 citations; owner separately authorizes release. |
| NB-R3-03 | P1 taxonomy | Notebook 22 and R2 24 have **different** chapter-to-topic folds. "Topic05" in NotebookLM is graphs; `TH05` in R2 is sequences; old R1 HT05 is quadratic sign/equations. | Freeze **NO new IDs**. Explicit local `origin_scheme` in conversion; map source topics to candidate `THxx` *by meaning* before using links/QA. Keep R2 24 a provisional navigation candidate. |
| NB-R3-04 | P1 curriculum | G10/KNTT quadratic location is Chapter VI, Lesson16 in Book 2, TOC verified (not ChapterIII from prior Google exemplar). The latest Notebook Core sample gets it correct. | Preserve source grade/chapter/lesson, verify printed page/skill in original SGK; do not deduce that every formula or practice item matches *Core* solely because header matches. |
| NB-R3-05 | P1 golden Core UX | Latest sample puts 4 full multi-subquestion tasks + English exam overlay + modelling formula input on a single Core Card. | Keep short theory/conditions/Base→Trap→Apply micro only. Move multi-step modelling to canonical Practice and Written; optional SAT/ACT bridge separate. No second duplicate question bank. |
| NB-R3-06 | P1 assessment fairness | Readiness "Topic05" mixes Grade10 quadratic/domain and Grade12 derivative-sign table: not suitable as mandatory common test for an entering Grade10 learner. | Use **scope-labelled grade/band/version readiness**, independently tested target skills, optional cross-grade transfer block accessible later; avoid implying Grade10 failure equals Grade12 deficit. |
| NB-R3-07 | P1 evidence integrity | "15 minutes / 80%" sample proposes a hard timed test without an accepted pacing contract. For **8 equal-weight items**, >=80% means at least 7/8 (87.5%), NOT six. | Default untimed/soft; if timed simulation adopted, optional and versioned, with pauses/submit/expired-state policy specified. Threshold descriptive; never unlock content or turn score into Mastery. |
| NB-R3-08 | P1 diagram/key | Readiness Q1 labels parabola vertex (1,-4) and sketch x-intercepts (-1,3); key signs A require negative y-intercept. ASCII art is brittle/unclear; key text infers `c=-3` not explicitly stated in textual stem. | Supply an accessible exact SVG/diagram/data table with specified intercept coordinates or explicitly describe x-intercepts. No reliance on cropped monospaced sketch. Unique answer and accessibility QA. |
| NB-R3-09 | P1 math/precision | Anchor `ESSAY-OPT-12-01`: `C(x)=6000x²+2250000/x`, critical `x³=187.5`. Actual `x=5.7235712128 cm`, `h=7.6314282837 cm`, `Cmin≈589666.8137 dong`, while submitted text says h≈7.64 and Cmin≈589650. | Correct to **x≈5.72 cm, 2x≈11.45 cm, h≈7.63 cm, Cmin≈589667 đồng** with explicit rounding conventions. No false award for approximate 589650 if tolerances weren't declared. |
| NB-R3-10 | P1 context accuracy | Anchor `ESSAY-PROB-12-03`: `P(+) = 0.01*0.95 + 0.99*0.02 = .0293`; `P(B|+)=.0095/.0293≈.3242321`. Text says 95% is testing "accuracy"; actual assumption is **sensitivity `P(+|disease)`**. "always requires an independent second test" is unsupported as universal medical instruction. | Revise to **95% sensitivity**; state in stylized *hypothetical mathematical setting* that follow-up assessment depends on clinical protocols, not a blanket requirement. |
| NB-R3-11 | P1 answer format | Core Q3 requests `S(x)` as algebraic free-text: equivalence of `x(40−2x)`, `-2x²+40x`, alternative syntax isn't safe with naive string comparator on static website. | Use approved formula input equivalence engine with domain/normalization and anti-code-injection QA, **or** use guided symbolic blocks + two numeric inputs. Numeric input range/units/rounding rules explicit. |
| NB-R3-12 | P1 lesson/reuse | Three written IDs `ESSAY-OPT-12-01`, `ESSAY-GEO-11-12-02`, `ESSAY-PROB-12-03` are proposed only and may collide with future IDs or generate duplicates. | Keep in research; when authoring, use THPT canonical item IDs with distinct `kntt_placements`/`topic_placements`/`prerequisite_skills`/`written_role`. One content/solution/rubric source, multiple entry links. |
| NB-R3-13 | P1 technical/cost | NotebookLM proposes "send hidden context to Gemini" and grade handwritten solutions through Gemini inside static GH Pages. No commissioned service, auth/proxy/consent/prompt/privacy/cost design. API keys cannot be safely hidden in client-side JavaScript. | **Do not integrate paid/live Gemini or claim paper-auto-grading.** Give static hint/solution/rubric first; if ever desired, separate explicit project/product/privacy/API planning and approval. |
| NB-R3-14 | P1 SAT/ACT labels | The `SAT_Passport_Math` and "Passport to Advanced Math" are older names and **not** the current official Digital SAT primary domain; long calculus and log procedural work not automatically part of SAT/ACT scope. | Use 2026 official College Board four domains; classify Grade10 quadratic as optional **Advanced Math** alignment only after item review. Version `exam_alignment`, avoid unsupported topic percentages. Official sources: https://satsuite.collegeboard.org/practice/content-domains and https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-exam-sections-and-structure.html. |
| NB-R3-15 | P2 rubric | Universal four `0.25` rubric criterion split is pedagogically convenient but not fair for every type: complex proof/multi-method geometry require proof-quality-weighted scoring. | Prefer item-specific evidence-weighted rubric with correct dimensions, total score and partial credit; no self-reported paper score → verified mastery. |
| NB-R3-16 | P2 selective hint policy | NotebookLM sample uses exactly three hints for every task. Project only requires tiered assistance where beneficial; static hints on every routine item can inflate authoring. | Use non-spoiling hints at genuine bottlenecks; count 0–3 or more as pedagogically justified, not quota. Readiness remains hint-free. |
| NB-R3-17 | P2 question coverage | The 8 demonstration questions are **not** an academically approved, comprehensive cross-grade readiness. Structural coverage and item/distractor uniqueness need verification and n≥? justification. | Treat as `8/8_KNOWN_SAMPLE_ANSWERS_CHECKED` not `CORE_READINESS_COVERAGE_PASS`; map problem types, identify grade and source evidence, then independently review. No silent release. |

## C. Math spot checks

- Quadratic Core Q1: `y=x²−4x+3=(x−2)²−1`; vertex (2,-1); axis x=2. OK.
- Quadratic Core graph Q2: vertex (1,4), y-intercept (0,3), downward parabola implies (f(x)=-(x-1)²+4); increases `(-infty,1)`, range `(-infty,4]`. Keys C and A correct subject to a clear, accessible graph.
- Fence Q3: `S(x)=x(40−2x)=-2(x−10)²+200`; `x=10` and `Smax=200` under `0<x<20`. OK.
- English quadratic Q4: `2(x−3)²−8` minimum `-8` at 3, f(0)=10; A. OK; classify as **SAT-style authored item**, not an authentic official exam question.
- Readiness Q2 right-shift 3/down 5: B. Q3 `sqrt(x+2)/(x−1)` domain `[-2,+infty)\{1}`: C. Q4 "no global minimum" C under given variation. Q5 `h(t)=-5(t−2)²+45=0` => t=5 (other root −1): C. Q6 two horizontal intersections iff m>−1: A. Q7 max on [-2,0] equals 5; Q8 x-intercepts 2 and 4 => distance 2.
- Geometry `ESSAY-GEO-11-12-02`: select A(0,0,0), B(a,0,0), M(a/2,a,0), S(0,0,a√2); plane normal proportional to (2√2,√2,2); distance `2a/√7`. Independently agrees with synthetic construction. Still needs separate exact-source pedagogical review.
- Medical Bayes example is a stylized probability word problem, not clinical guidance.

## D. Normalized design recommendation (research only)

```text
HỌC THEO LỚP (KNTT Grade10 VI/16):
  SHORT CORE THEORY (conditions/why) -> 1–3 Micro (selective hint)
  -> link to canonical Practice and Written/Anchor
HỌC THEO CHUYÊN ĐỀ (provisional R2 TH07 function/graphs):
  foundation subskills -> transfer/mixed practice -> independent grade-scoped Readiness
OPTIONAL SAT/ACT:
  versioned item-level alignment + English word problems, not automatic curriculum identity
ONE WRITTEN LIBRARY:
  item_id + true grade/lesson placements + topic placements + prerequisites
  anchor thinking flow + authored rubric + after-attempt solution and review
EVIDENCE:
  micro/formative != readiness evidence != self-reported written progress != mastery
```

## E. Next gate / owner decisions

1. Review **R2 provisional 24** vs **NotebookLM 22** against S1 exact 79-lesson KNTT table, not just labels, before topic ID lock.
2. Present corrected single Grade10 VI/16 Core example and 3 written anchor candidates in a NotebookLM source-locked academic packet; exact expected source IDs `CORE-10-VI-16`, `ESSAY-OPT-12-01`, `ESSAY-GEO-11-12-02`, `ESSAY-PROB-12-03`; 8 readiness items as `READINESS-DEMO-Q01..Q08`, **renamed temporary audit locators**, never production canonical IDs.
3. Separate `correctness`, `pedagogy`, `S1 curriculum layer/placement`, `exam alignment`, `technical readiness` verdicts; NotebookLM response must provide `OVERALL` and reviewed-item completeness, not generic narrative.
4. Get owner acceptance on topic scheme and explicit release gates. Until then PR #573 remains DRAFT/research, independent Grade9 THCS Readiness #565 unaffected, no THPT production code, no learner history writes.
