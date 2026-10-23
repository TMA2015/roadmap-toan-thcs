# Self-Learning Math — 8-item D4/D6 internal pedagogical preflight and minimal-delta candidates

**Date:** 2026-10-22  
**Status:** `INTERNAL_PILOT_REVIEW_ONLY | NOT_NOTEBOOKLM_VERDICT | NO_CONTENT_AUTHORIZATION`  
**Source lock:** canonical Written Library Git blob `5141a40bf1b8f8763257857d3b805d681a0956fa` (75 published items; no change to catalog).  
**Companion packet:** `MATH-WRITTEN-QUALITY-8PILOT-20261022-NOTEBOOKLM.md` (exact eight items).  
**Exam comparison:** `MATH-WRITTEN-QUALITY-8PILOT-EXAM-CROSSWALK-20261022.md` (qualitative, compiled S2 papers; no frequency claims).

## 1. What was reviewed and what was not

Read all eight **current canonical item statements, their solution steps / full solutions, progressive hints where present, rubrics, common errors and remediation paths**. Checked arithmetic and proof direction for these eight items, and compared the learning demand against source-supported exam structures documented in the crosswalk. This is the author's **internal content spot-check**, NOT a separate source-authoritative KNTT mapping exercise, a full D1–D6 bank audit, or a NotebookLM independent verdict.

**Exact expected IDs = inspected IDs = 8; duplicates = 0.** Each currently has a nonempty problem, solution, rubric, common errors, remediation and catalog-approved KNTT placement. All eight rubric totals are arithmetically consistent. The exact textbook placement/semester remains subject to independent S1 review.

## 2. Item-level internal findings

| Item | Math/proof spot-check | D4/D6 learner help assessment | Internal recommendation |
|---|---|---|---|
| `WX02-NUM-001` | 36 and 48 divide into max 12 equal gift bundles; 3 pens + 4 notebooks per bundle. Correct mathematical choice of greatest common divisor. | Problem itself asks **why** greatest common divisor; four solution steps, distinct misconception about least common multiple, good self-check. | `KEEP_AS_IS_PROVISIONALLY`. No extra hint required absent learner confusion; focus on explicit explanation, not more arithmetic. |
| `WX02-NUM-003` | From 72 = 3/5 planned, whole 120; second week 1/4 of planned = 30; remaining 18. Alternative fraction check 3/20 × 120 = 18. Correct. | Three staged hints and why-method emphasize part→whole vs whole→part, a genuine reasoning bottleneck. | `KEEP_AS_IS_PROVISIONALLY`; use as exemplar of staged non-AI help. Separate later exercise may target **fraction/percentage of remaining**, which is not this exact mathematical structure. |
| `WX13-LIN-001` | Equal alternate interior angles (68° and 68°) imply a∥b by **converse parallelism criterion**; proof direction correct. | Short and direct, fits Base. A drawing may help novice orientation but should not introduce unspoken assumptions. | `KEEP_AS_IS_PROVISIONALLY`; consider optional figure/drawing instruction only after learner test. Not an exam-coverage deficiency. |
| `WX03-RAT-002` | 4 workers ×15 days =6 workers ×10 days, assuming fixed work and equal productivity. Correct. | Good two-value inverse relation and explicit assumptions; does not exercise 3-group unknown allocation. | `KEEP_AS_IS_PROVISIONALLY`, then investigate a **distinct deeper sibling**, not a replacement or clone. |
| `WX16-QUAD-001` | AB∥CD and AB=CD (opposite sides) yield parallelogram; angle ABC=90° yields rectangle. Correct chain. | An important two-theorem decision; current 4-step solution is shown only after opening Hướng dẫn, without a smaller first clue. | `SELECTIVE_HINT_CANDIDATE` (2 questions before solution); no new geometry fact from any figure. |
| `WX07-RAT-001` | Original denominator x(x−3), domain x≠0,3; fraction reduces to (x+3)/x **with original exclusions retained**. Correct; symbolic simplification must not erase x=3 exclusion. | The principal decision is **state domain before canceling**. A non-spoiling first clue could help without showing full solution. | `SELECTIVE_HINT_CANDIDATE` (2 questions before solution). |
| `WX09-SYS-003` | Ticket system x+y=40 and 15x+8y=488 (thousand VND) leads to x=24 adults, y=16 students; both check equations. Correct. | Full solution, 3 staged hints, why-method, five-part rubric and misconception checks already support self-study. | `KEEP_AS_IS_PROVISIONALLY`; avoid artificial additional hints. |
| `WX19-CIR-002` | Convex quadrilateral: 72°+108°=180° ⇒ concyclic by criterion; then ADC=180°−118°=62°. Correct and angle sum consistent. | Two-phase logic (first prove cyclic, then apply cyclic property) is meaningful. Could offer two questions before full solution. | `SELECTIVE_HINT_CANDIDATE` (2 questions). A distinct right-angle proof is different and must not be claimed covered by this item. |

**Item-level internal disposition counts:** 5 provisional KEEP, 3 selective-HINT candidates; 0 observed arithmetic/proof contradictions in the eight inspected records. `KEEP_AS_IS_PROVISIONALLY` does **not** mean NotebookLM `PASS`. Any future content edit still requires independent item-level review.

## 3. Candidate non-spoiling prompts — review only; NOT current learner content

These do not expose final numerical answers. Do not add these `hint_steps` blindly: the current `written-exercise-library-v1.js` enters its special progressive-hint mode on **any** nonempty `hint_steps`, and then uses `full_solution_markdown` instead of `solution_steps`. All three records below are currently `standard` items with only `solution_steps`. A hint-only catalog update would produce an empty “Lời giải” panel unless accompanied by an independently QA'd help renderer or a full-solution representation. Prefer **single-source solution steps + small backward-compatible hint disclosure**, rather than duplicating the worked solution in two fields; route this as a separately authorized UX/content candidate.

### `WX16-QUAD-001` — proof-chain entry hints

1. `Trong tứ giác ABCD, AB và CD là hai cạnh ở vị trí nào? Có dấu hiệu nào dùng **một cặp cạnh đối vừa song song vừa bằng nhau**?`
2. `Sau khi xác định được ABCD thuộc một họ tứ giác quen thuộc, hãy dùng giả thiết về góc 90° để nhận biết trường hợp đặc biệt hơn.`

### `WX07-RAT-001` — retain original domain

1. `Trước khi rút gọn, phân thức ban đầu có nghĩa với những giá trị x nào? Hãy xem các nhân tử của **mẫu ban đầu**.`
2. `Tử số gợi nhớ hằng đẳng thức nào? Sau khi khử nhân tử chung, những điều kiện nào của biểu thức ban đầu vẫn phải giữ?`

### `WX19-CIR-002` — cyclic-proof sequence

1. `Hai góc BAD và BCD ở vị trí nào trong tứ giác lồi? Tính tổng số đo của chúng rồi tìm dấu hiệu nhận biết phù hợp.`
2. `Chỉ sau khi chứng minh được tứ giác nội tiếp, em mới được dùng quan hệ gì giữa hai góc ABC và ADC?`

## 4. One original *conditional* deeper sibling for expert review, **not a production item**

**Provisional label:** `G7-INVERSE-3TEAM-CONCEPT-DRAFT` (not a canonical `exercise_id`, intentionally no production ID assigned).  
**Potential role:** `DEEP_ANCHOR` / topic CT03 / multi-group inverse proportionality.  
**Curriculum:** Topic-linked draft only; actual KNTT grade/chapter/lesson must be independently confirmed by S1 evidence.  
**Source relationship:** Inspired by the *reasoning family* of a Loigiaihay-prepared G7 HK2 example with three teams; **original numerical conditions and solution** below, not a copy of the paper's statement or answer.

### Problem

Ba đội cùng nhận các phần việc **có khối lượng như nhau**. Năng suất mỗi công nhân như nhau; số công nhân trong mỗi đội giữ nguyên trong suốt thời gian làm việc. Đội A hoàn thành phần việc trong **3 ngày**, đội B trong **4 ngày**, đội C trong **6 ngày**. Tổng số công nhân của ba đội là **54 người**.

a) Giải thích vì sao số công nhân của ba đội tỉ lệ nghịch với số ngày hoàn thành.  
b) Tính số công nhân của từng đội.  
c) Kiểm tra rằng ba đội thực hiện cùng khối lượng công việc theo giả thiết.

### Progressive hint candidates

1. `Nếu mỗi người làm một lượng việc như nhau mỗi ngày, để ba đội hoàn thành khối lượng công việc bằng nhau thì **số người × số ngày** của từng đội liên hệ thế nào?`
2. `Gọi số người từng đội là a, b, c. Hãy viết một dãy các tích bằng nhau liên quan đến 3a, 4b, 6c rồi kết hợp với a+b+c=54.`
3. `Có thể quy đổi dãy tích bằng nhau sang tỉ số số người, nhưng hãy nhớ tỉ số số người phải **nghịch** với tỉ số ngày.`

### Full mathematical worked solution (internal)

Gọi a, b, c lần lượt là số công nhân của A, B, C. Các số nguyên dương này thỏa `a+b+c=54`.

Vì ba đội có cùng khối lượng công việc và mỗi công nhân có năng suất như nhau, ta có

`3a=4b=6c`.

Suy ra

`a:b:c=(1/3):(1/4):(1/6)=4:3:2`.

Đặt `a=4k, b=3k, c=2k` với `k>0`. Khi đó `9k=54`, nên `k=6`. Vậy A có **24 người**, B **18 người**, C **12 người**.

Kiểm tra: `3·24=4·18=6·12=72` (người-ngày); tất cả các đội tạo ra cùng lượng công việc theo giả thiết năng suất như nhau.

### Why method / rubric / errors

**Why:** Năng suất và khối lượng công việc bằng nhau dẫn đến tích người × ngày bằng nhau, **không** dẫn đến số người tỉ lệ thuận với số ngày. Với ba đội, dãy tỉ số giúp giải đồng thời nhiều đại lượng.

**Provisional self-check rubric (5 points):**
1. Nêu đúng giả thiết và giải thích được quan hệ tỉ lệ nghịch — 1.
2. Lập đúng `3a=4b=6c` và tổng `a+b+c=54` — 1.
3. Chuyển đúng thành tỉ lệ `a:b:c=4:3:2` — 1.
4. Tìm đúng các số nguyên 24, 18, 12 — 1.
5. Kiểm tra tích người-ngày và kết luận có đơn vị — 1.

**Likely errors:** dùng `3:4:6` cho số người (nhầm thuận/nghịch); suy từ thời gian mà quên điều kiện năng suất bằng nhau; viết đúng tỉ lệ nhưng không dùng tổng 54; quên kiểm tra.

**Remediation / easier sibling:** return to existing `WX03-RAT-002` to learn the two-group constant-product relation before a three-group allocation.

**Publication gate:** Do NOT add to 75-item catalog until a structural-duplicate audit (other existing CT03 questions), KNTT S1 boundary check, independent NotebookLM audit, and explicit owner release/QA decision. This is an *option*, not a recommendation to increase item count by default.

## 5. QA-only renderer guard added in this draft PR

Current renderer behavior: `const deep=Array.isArray(x.hint_steps)&&x.hint_steps.length>0;`, then deep solution reads `x.full_solution_markdown||""`. The existing `scripts/test-written-exercise-library-v1.js` now checks every hint-mode item has nonempty `full_solution_markdown`.

At present **22 hint-mode records / 22 with full solutions; 0 missing**. The workflow `.github/workflows/qa-pr.yml` already invokes the test script. The new guard protects future data edits without changing learner-facing JS or catalog JSON. Verify exact-PR-head CI before interpreting merge readiness.

## 6. Next academic checkpoint

Review the eight exact existing items plus these **three optional help prompts** and the **single conditional deeper sibling** independently. Require `EXPECTED=REVIEWED=8`; ensure source class S1/S2/S3 and modelled context are separately reported. A review `PASS` still does not authorize release; owner device QA and content deployment decision remain separate. No exam-frequency claims.
