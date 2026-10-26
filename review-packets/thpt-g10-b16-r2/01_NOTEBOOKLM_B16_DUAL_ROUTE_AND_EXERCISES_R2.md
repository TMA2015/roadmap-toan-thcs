# THPT G10/B16 — NotebookLM academic + exercise-semantics review R2

**Packet:** THPT-G10-B16-R2-ACADEMIC-AND-EXERCISE-SCOPE-20261026  
**Status:** CANDIDATE_FOR_NOTEBOOKLM / NOT ACADEMICALLY APPROVED / NO PRODUCTION AUTHORING.  
**Parent requirements:** Two independent complete knowledge routes (KNTT grade/chapter/lesson and cross-grade topics); unified three-way Core; distinct Core / Practice / Readiness interactive semantics; single canonical Written library with Anchor subtype.

## 1. Scope and source hierarchy

**Primary book to review:** KNTT Toán 10 *tập 2*, Chương VI — Bài 16 “Hàm số bậc hai”. Use the **SGK original** already uploaded to NotebookLM THPT for exact expected outcomes, wording, page references and diagram requirements. Use corresponding **SBT Toán 10 tập 2** to understand exercise families, trap types and appropriate scaffolding; supplementary sources are not authority over SGK. If NotebookLM lacks a source, return **BLOCKED / SOURCE_MISSING**, not guessed page numbers. Never reproduce the entire textbook.

Prototype: `prototypes/thpt/g10-b16-dual-path-full-learning-r2.html` on PR #612 (outside MkDocs `docs/`). Architecture: `prototypes/thpt/THPT_DUAL_KNOWLEDGE_AND_SHARED_CORE_ARCHITECTURE_R2.md`.

## 2. Exact questions to NotebookLM

**A. SGK coverage:** Check whether the demonstration explains all mandatory concepts, requirements/conditions in Bài 16: definition `a ≠ 0`, domain, graph, axis of symmetry, vertex, sign of `a`, variations/min-max, real roots/intersections, range if expected, relevant worked examples and application. For any missing material, provide SGK chapter/page + short summary and severity. **Never certify completeness based only on a nice UI.**

**B. Mathematical proof/calculation:** Verify for `f(x)=x²−4x+3`: `(x−2)²−1`, vertex `I(2;−1)`, axis `x=2`, zeros `1,3`, min `−1`; diagram point placements and plotted curve (not screenshot of the book); cases `a>0` and `a<0` with monotonic intervals. Check no missing conditions when a function/graph application is presented. Cite S1 where relevant.

**C. Two-route completeness:** Is the SGK lesson a complete concise `Bài 16` theory unit even when no topic knowledge page is visited? Does the cross-grade vertical topic page contain independently intelligible knowledge, examples, methods and error cases? Pilot currently **only covers one quadratic subtopic**, so do not certify the entire Hàm số cross-grade topic; propose the missing concept map and 10→11→12 bridge, clearly marking future work.

**D. User-facing headings:** Normalize `Khái niệm/Định nghĩa`, `Tính chất/Đồ thị/Công thức`, `Ví dụ`, `Luyện tập`, `Vận dụng` whenever applicable. Titles can use exact SGK concepts; do not demand identical sections for every future lesson.

**E. Question policy by role** (all R2 questions illustrative only):

| Role | Prototype task | Expected interaction | Academic audit |
|:--|:--|:--|:--|
| Core demo ID `THPT-CORE-QF01` | Vertex of `y=(x+3)²−5` | Hint available before answer, explicit feedback after checking; **same card** via SGK, Core library and topic | Accuracy, skill mapping, common mistake quality |
| Topic Practice demo | x-intercepts of `y=x²−4x+3` | Hint available, formative feedback, separate practice item and attempted skill role | Choice plausibility, uniqueness and reasoning |
| Independent Readiness demo | Vertex ordinate and maximum | Previous/Next, response revision, **NO hints, grading or solution until Final Submit** | Evaluate coverage and whether two items are too few for a real readiness claim; no score/mastery from demo |
| Written `WRI-THPT-DEMO-W01` | Complete square, vertex, min | Paper work; user opens hint and 4-point rubric voluntarily | Correctness, clear reasoning, meaningful partial credit |
| Anchor Written `WRI-THPT-DEMO-A01` | Fixed 24 m perimeter, maximize rectangle area | Same canonical Written library, anchor **label**, 6-point rubric emphasizes modeling and method | Conditions `0<x<12`, area `S=x(12−x)`, max `36 m²` at `x=6`; provenance and grade suitability |

**F. Academic provenance:** Propose `lesson_id`, `topic_ids`, `skill_ids`, `core_id`, `source_book`, `pages`, `expected_outcomes`, `review_status`, `revision`. The 3 Core entry locations are just routes and should not duplicate bank/key/results. Written Anchor is a classification within Written, **not another exercise engine**.

## 3. Response format required from NotebookLM THPT

1. `ACADEMIC_OVERALL: PASS | REVISIONS_REQUIRED | BLOCKED_SOURCE` (PASS only if S1 source coverage is actually checked).
2. `SOURCE_RECEIPT`: SGK/SBT exact filenames, grade, book volume, page ranges, pages used, confidence.
3. `LESSON_16_MATH`: table of statement → verdict → exact correction → source/page.
4. `LESSON_16_COVERAGE`: each expected SGK outcome, whether included, missing key example/range/monotonicity.
5. `DUAL_ROUTE`: completeness assessment limited to available pilot; list missing cross-grade items for full topic.
6. `CORE_PRACTICE_READINESS_WRITTEN`: separate verdict for each of five demo items above, key/rubric and type semantics.
7. `UI_WORDING`: standardized title recommendations, *without* rewriting actual SGK sections unnecessarily.
8. `BLOCKERS` and exact minimal changes required to reach PASS, plus what cannot be concluded yet.

**Boundary:** The reviewer may use the preloaded book PDFs in the user's NotebookLM THPT; this conversation cannot automatically read that NotebookLM notebook. User must paste the review response or attach the exported report back to this GitHub issue/chat. Results remain **advice/review**, not permission to modify protected THCS sources or publish the THPT pilot.

## 4. Owner / engineering QA gate after source review

- Fix S1-mismatches first; ensure both independent knowledge routes have the agreed minimum depth for their defined scope.
- UI: PC, physical iPhone/iPad; tabs/navigation, MathJax/diagram correctness, text readability, Back/Forward.
- Core from 3 entry points; same `core_id`, only one item; Practice stays distinct; Readiness no hints and no early correctness; Written self-check only, Anchor inside same library.
- Never merge this draft until NotebookLM academic verdict, parent visual sign-off, exact-head CI and explicit production release approval.
