# THPT G10/B16 — NotebookLM Academic Review Packet R4

**Packet ID:** `THPT-G10-B16-R4-MKDOCS-SOURCE-LOCK-20261027`  
**Date:** 2026-10-27  
**Project:** G Learning · Self-Learning Math · Toán THPT  
**Status:** `CANDIDATE / NOT REVIEWED / NO RELEASE AUTHORIZATION`  
**Repository:** `TMA2015/roadmap-toan-thcs` · Draft PR #612  
**Scope:** Toán 10 KNTT, Chương VI, Bài 16 — Hàm số bậc hai; one pilot only. R1/R2 standalone HTML visuals are superseded by MkDocs Material R4.

## A. Authoritative sources in this NotebookLM

Select the **actual original volumes already uploaded** to NotebookLM THPT, especially:

- **S1 / SGK:** `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf`, Chương VI, Bài 16. Google Drive file ID: `1v28SYkWsnxg9qUmn-JEmYaEDcCdZWJgf`.
- **S1 / SBT for problem coverage:** `sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf`, corresponding Chapter VI exercises. Google Drive file ID: `1Ca0XQ7KGuZWViVg2LOru3CoQ1UsFpd4P`.
- Other THPT SGK/SBT sources only when necessary for cross-grade dependencies. Do not substitute a third-party summary for original volumes.

**Important:** The file IDs above establish file identity, **not an academic content audit**. The assistant has verified the files' existence on Drive, but has not independently verified SGK page numbers or complete learning outcomes. Cite exact book pages printed in the documents. If inaccessible, return `BLOCKED_SOURCE` instead of guessing.

## B. Current candidate from R4 native-MkDocs design

The pilot candidate currently uses the same MkDocs Material theme as the established THCS site. R4 draft paths:

- `docs/thpt-preview/sgk/chuong-vi/bai-16.md`: individual lesson with theory, worked example and plotted parabola.
- `docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md`: vertical-topic knowledge page, **quadratic subset only**.
- `docs/thpt-preview/chuyen-de/ham-so/core.md`: one demo canonical Core item, linked from SGK, SGK Core library and topic.
- `docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md`: formative topic practice.
- `docs/thpt-preview/chuyen-de/ham-so/tu-kiem-tra.md`: two-question independent demo.
- `docs/thpt-preview/thu-vien/tu-luan.md`: canonical written sample items, one normal and one anchor subtype.

All are **preview-only**, no real learner credit, no historical data writes. Technical navigation/UX approval and academic review are independent gates.

### B1. Candidate SGK lesson statement excerpt (verify, not assume)

1. Quadratic function `y = ax² + bx + c`, `a, b, c ∈ ℝ`, **`a ≠ 0`**; domain `ℝ`.
2. Vertex form `y = a(x−h)² + k`, `h = −b/(2a)`, `k = f(h)`; vertex `I(h;k)`; symmetry axis `x = h`.
3. For `a>0`, curve opens upward, decreases before `h`, increases after `h`, min = `k` at `h`. For `a<0`, opposite opening/monotonicity, max = `k` at `h`.
4. Worked example `f(x)=x²−4x+3=(x−2)²−1`; vertex `I(2;−1)`, axis `x=2`, min `−1`; intercepts with `Ox`: `x=1`, `x=3`.
5. The diagram is programmatically derived from this exact polynomial, with marks for the vertex and x-intercepts. Visually inspect plotted coordinates, scale, curve, axis and labels.
6. Application to a fixed-perimeter rectangle is signposted through Written. Check which examples/applications belong in **SGK Core** versus merely useful SBT extension.

**Source questions:** Which required Bài 16 outcomes/examples are **missing or incorrectly framed**? Is plotting procedure sufficiently taught? Does SGK require sign/range, vertex calculation via `Δ`, parabolic graph drawing, identification from graph or other learning objectives not yet covered? Do not infer scope from the prototype alone.

### B2. Independent vertical knowledge route

Preview concept page includes definition, properties, vertex form, example, related THCS foundations, 2 sample problem-type tabs and a third tab **Thi tốt nghiệp THPT** as provenance-only filter; plus common misconceptions. This is **not** a completed Grade 10–12 Hàm số topic. Identify the minimal genuinely source-backed cross-grade spine and which links are prerequisites, which are just related, and which are later extensions. No automatic promotion of advanced exam material to general Core.

## C. Exact candidate exercise register (5 roles)

| ID / Role | Candidate task | Key and required evidence behavior |
|---|---|---|
| `THPT-CORE-QF01` · Core | `y=(x+3)²−5`. Ask vertex abscissa. Options `−3 / 3 / −5`. | Correct `−3`. Hint on demand; immediate formative feedback after Check. **Same item identity in 3 entry paths.** |
| `PRACTICE-THPT-DEMO-01` · Topic Practice | `y=x²−4x+3`: abscissas of intersections with `Ox`. Options `1,3 / 2 / −1,3`. | Correct `1,3`; hint and feedback after Check. Distinct role/item from Core. |
| `READINESS-THPT-DEMO-01` · independent two-question **technical** demo | Q1: `y=(x−4)²+2`, vertex ordinate: `4 / 2 / −4`. Q2: `y=−(x−1)²+5`, maximum: `1 / −5 / 5`. | Keys `2`, `5`. Allow Previous/Next/answer change; no hint or correctness/solution until **Final Submit**. Two questions cannot justify a real mastery or topic Readiness claim. |
| `HPT-WRI-DEMO-01` · Written routine | `y=x²−6x+7`, vertex form, vertex, axis and min. | `(x−3)²−2`, `I(3;−2)`, axis `x=3`, min `−2` at `x=3`. On-paper, optional hint, solution, four-point self-rubric only. |
| `HPT-WRI-DEMO-ANCHOR-01` · Written anchor subtype | Rectangle with 24 m perimeter; x a side; model and find max area. | `0<x<12`, `S=x(12−x)=−(x−6)²+36`, max `36 m²` at square `6×6`. On-paper, hint, six-point self-rubric; **same Written library**, not a new engine. |

For every row verify mathematics, wording, distractors, uniqueness, grade suitability, problem-type placement, hints, worked reasoning, self-rubric and the distinction between formative response, independent assessment and self-reported Written.

## D. Approved product constraints — audit only, do not redesign

- Single existing GitHub repository/site; THPT extends MkDocs Material navy-header shell, not a second standalone micro-app.
- THCS routes, nav, `7 + 25` launcher, learner data and assets remain **untouched**.
- THPT has two complete study perspectives within their own scope: SGK `Grade → Chapter → Lesson`, and vertical `Topic → Core / Kiến thức / Luyện tập / Tự kiểm tra`.
- One shared Core canonical ID, three surfaces; Topic Practice separate; controlled Readiness separate; Written / Anchor as one library. Do not duplicate banks.
- THPT preview launcher `5 + 1 mẫu` is explicitly demo-only, not a claim of N=1 published topics. Final N must equal verified/published topic count.
- No exam prevalence claim without a defined verified exam corpus. No paid APIs, forced login, mass rollout, merge or deploy authorized by a reviewer verdict alone.

## E. Required NotebookLM response — evidence and verdict

Please produce these exact sections:

1. `ACADEMIC_OVERALL: PASS | REVISIONS_REQUIRED | BLOCKED_SOURCE`
2. `SOURCE_RECEIPT`: exact selected SGK/SBT names, printed page numbers, what was actually inspected, and scope limits.
3. `B16_OUTCOME_MATRIX`: each **actual SGK learning outcome** as one row: source page/section, candidate coverage `FULL/PARTIAL/MISSING/INCORRECT`, minimal needed correction. Do not invent outcomes.
4. `MATH_CHECK`: equations, assumptions, signs, monotonicity, vertex/range, graph coordinates, examples and modeling. Precise correction if needed.
5. `VERTICAL_TOPIC_SCOPE`: what the quadratic preview covers and what it **does not** cover for Grade 10–12; prerequisite/source trace.
6. `EXERCISE_REGISTER`: **five explicit ID rows**, verdict `PASS/REVISE/NOT_REVIEWED`, answer key, mathematical reasoning, minimal changes. Missing row must not be treated as PASS.
7. `P0_P1_P2_FINDINGS`: prioritize mathematical error, curriculum mismatch and misleading assessment claims over decorative UI.
8. `MINIMAL_DELTA_TO_PASS` plus `REVIEW_COMPLETENESS` accounting for all outcomes and five candidate IDs.

End with `ACADEMIC_CLEARANCE: YES/NO`; `YES` may clear **only the academic pilot content** when S1-backed. It **does not** authorize production merge, student scoring, Firebase/Auth/storage changes, or changes to THCS. Owner retains release approval.