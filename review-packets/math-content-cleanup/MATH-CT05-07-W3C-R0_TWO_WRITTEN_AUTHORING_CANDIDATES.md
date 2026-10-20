# W3C R0 — Two newly authored Written candidates for independent review

**Date:** 2026-10-20 · **Status:** `AUTHORING_REVIEW_REQUESTED` / **NOT APPROVED FOR PUBLICATION**.  
**Academic source review:** Owner-supplied W3C `MATH-CT05-07-W3C-20261016`, `EXPECTED=14`, `REVIEWED=14`, `OVERALL|PASS_FOR_PLACEMENT_REVIEW` (original historical sources only). Source placement PASS **does not approve these new hints, rubrics, learner guidance, exemplars or new canonical objects**.

**Exact new proposed IDs only:** `WX07-ENT-001` (from `07-ENT-01`) and `WX07-CH-001` (from `07-CH-01`). Both currently **absent** from the 67-item live Written Library. Original historical source is immutable: `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`, Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

---

## Candidate 1 — `WX07-ENT-001` (original `07-ENT-01`)

**Topic:** CT07 — Phân thức đại số. Proposed `learning_layer=Entrance10`, `level=ENTRANCE10`, `learner_label=Ôn thi vào 10`. This is **optional transfer practice**, not a statement that this exact task appeared in a real entrance exam. `gates_core=false`, `auto_readiness_credit=false`.

**Canonical difference:** Existing `WX07-RAT-001` checks rational simplification and original restrictions; `WX07-RAT-002` checks operations with multiple fractions. Neither asks for all **integer arguments making a rational expression an integer**, including negative divisors.

**Prerequisites:** rational-expression domain, division algorithm `x+1=(x−2)+3`, integer divisors of 3, two-way necessity and sufficiency.

### Learner-facing problem

Cho \(x\in\mathbb Z\) và phân thức

\[
A=\frac{x+1}{x-2}.
\]

Tìm **tất cả** giá trị nguyên của \(x\) để \(A\) là số nguyên. Ghi điều kiện xác định, giải thích vì sao **không được bỏ sót ước âm**, và kiểm tra kết quả.

### Staged hints (3; progressively revealed)

1. Trước khi xét tính nguyên, mẫu \(x-2\) phải thỏa mãn điều kiện gì?
2. Viết \(x+1=(x-2)+3\), rồi tách \(A\) thành một số nguyên cộng với một phân thức có tử không đổi.
3. Nếu \(A\) nguyên và \(x\) nguyên, \(x-2\) phải là **ước nguyên khác 0 của 3**. Hãy liệt kê đủ ước dương **và âm**.

### Worked solution (4 steps)

1. **Điều kiện xác định.** \(x-2\ne0\), nên \(x\ne2\).
2. **Tách phần nguyên.**
   \[
   A=\frac{(x-2)+3}{x-2}=1+\frac3{x-2}.
   \]
3. **Điều kiện cần và đủ.** Với \(x\in\mathbb Z\), ta có \(A\in\mathbb Z\) khi và chỉ khi \(x-2\) là ước nguyên khác 0 của \(3\):
   \[
   x-2\in\{-3,-1,1,3\}.
   \]
   Suy ra \(x\in\{-1,1,3,5\}\). Không giá trị nào bằng \(2\).
4. **Kiểm tra & kết luận.** Tương ứng \(A=0,-2,4,2\), đều nguyên. Vậy \(\boxed{x\in\{-1,1,3,5\}}\).

### Self-mark rubric (total **4.0** points)

| Criterion | Points |
|---|---:|
| Ghi đúng \(x\in\mathbb Z\), điều kiện \(x\ne2\) và ý nghĩa của điều kiện mẫu khác 0 | 1.0 |
| Viết đúng \(A=1+\frac3{x-2}\) | 1.0 |
| Lập đúng điều kiện ước nguyên khác 0 và xét đủ \(\{-3,-1,1,3\}\) | 1.5 |
| Nêu đủ bốn giá trị \(x\), đối chiếu điều kiện và kết luận | 0.5 |
| **Total** | **4.0** |

**Common mistakes:** bỏ điều kiện \(x\ne2\); liệt kê chỉ ước dương \(1,3\); sai phép tách \(x+1=(x-2)+3\).  
**Remediation:** ôn CĐ07 Core về điều kiện phân thức và rút gọn; ôn tập ước nguyên (âm/dương).  
**Editorial caution:** Do not promote this optional Entrance10 task into Grade-8 compulsory Core or assign automatic mastery.

---

## Candidate 2 — `WX07-CH-001` (original `07-CH-01`)

**Topic:** CT07 — Chiến lược biến đổi biểu thức hữu tỉ nhiều tầng. Proposed `learning_layer=Specialized-Challenge`, `level=CHALLENGE`, `learner_label=Thử thách`. **Optional; not KNTT Core gating**; `gates_core=false`, `auto_readiness_credit=false`.

**Source-faithfulness warning:** The original historical task is **open-ended**: students **select an expression of their own** that has parentheses and at least three fraction operations, then write a strategy **before solving**. It does **not** specify a unique target expression or fixed answer. The concrete worked example below is a **newly authored representative example for self-check**, not a transcription of the historical task. Its appropriateness, mathematical correctness, hints and rubric require the separate independent review now requested.

**Canonical difference:** Existing `WX07-RAT-002` gives a **fixed** 3-fraction expression to simplify. This proposal tests the learner's capacity to **construct** a valid expression, justify the **operation plan**, and audit the full domain before calculations; it should not clone the fixed `WX07-RAT-002`.

**Prerequisites:** rational domain, factorization and cancellations, reciprocal divisor nonzero, brackets, multiple operations.

### Learner-facing problem (preserving the source's open choice)

Tự chọn **một biểu thức phân thức có ngoặc và ít nhất ba phép tính phân thức** (trong các phép cộng, trừ, nhân, chia). Trước khi giải, hãy viết **kế hoạch biến đổi** theo thứ tự hợp lý. Sau đó:

1. Ghi đầy đủ điều kiện xác định của **biểu thức ban đầu**, kể cả điều kiện phân thức chia khác \(0\) nếu có.
2. Thực hiện biến đổi, không triệt tiêu tùy tiện qua dấu cộng/trừ; giải thích vì sao thứ tự đã chọn hợp lý.
3. Trình bày kết quả cùng điều kiện ban đầu và tự kiểm tra lại.

Em có thể chọn biểu thức riêng; **ví dụ dưới đây chỉ để đối chiếu sau khi thử sức**.

### Staged hints (3; no single fixed answer)

1. Kiểm tra từng mẫu trong biểu thức em tự chọn và, nếu có phép chia, bảo đảm **phân thức làm số chia khác 0**. Hãy ghi ĐKXĐ trước mọi phép rút gọn.
2. Phân tích tử/mẫu thành nhân tử nếu có thể. Nên xử lý các phép nhân/chia trong ngoặc, sau đó mới quy đồng cộng/trừ khi cần.
3. Tìm cách viết kế hoạch bằng câu ngắn: “Giữ ĐKXĐ → phân tích → rút gọn các tích/thương → cộng/trừ → kiểm tra kết quả và điều kiện”. Đừng triệt tiêu qua dấu cộng/trừ.

### One representative demonstration (new authoring, not an original fixed question)

Choose the bracketed three-operation expression (one division, one addition and one subtraction):

\[
E=\left(\frac{x^2-1}{(x-1)^2}:\frac{x+1}{x-1}\right)
  +\left(\frac1{x-1}-\frac1{x+1}\right).
\]

1. **Domain before cancellation:** denominators require \(x\ne1\), \(x\ne-1\); the divisor \(\frac{x+1}{x-1}\) must also be nonzero, giving \(x\ne-1\). Therefore \(\boxed{x\ne\pm1}\).
2. **Plan:** Factor \(x^2-1=(x-1)(x+1)\). Simplify the division **first**, then subtract the two fractions in the second bracket, finally add the results and carry forward the original excluded values.
3. **Execute:** For \(x\ne\pm1\),
   \[
   \frac{x^2-1}{(x-1)^2}:\frac{x+1}{x-1}
   =\frac{(x-1)(x+1)}{(x-1)^2}\cdot\frac{x-1}{x+1}=1,
   \]
   and
   \[
   \frac1{x-1}-\frac1{x+1}=\frac{(x+1)-(x-1)}{(x-1)(x+1)}=\frac2{x^2-1}.
   \]
4. **Conclude/check:** \(E=1+\frac2{x^2-1}=\boxed{\frac{x^2+1}{x^2-1}}\), **with original domain \(x\ne\pm1\)**. At \(x=2\), both the original expression and the result equal \(5/3\); this numerical check is supporting evidence, not a replacement for algebraic proof.

### Self-mark rubric (total **4.0** points, applies to learner-chosen expressions)

| Criterion | Points |
|---|---:|
| Student-designed task has brackets and **at least three fraction operations**; correctly establishes all original-domain restrictions, including nonzero divisor *if present* | 1.0 |
| Writes a sensible, explicit order-of-operations **plan before calculating**, including how to factor/reduce and when to combine fractions | 1.0 |
| Executes the student's chosen algebra correctly, respects all denominator/divisor conditions, and avoids cancelling summands across +/− | 1.5 |
| Concludes with simplified expression and original restrictions; provides a suitable check or justification | 0.5 |
| **Total** | **4.0** |

**Common mistakes:** cancels across addition/subtraction; disregards nonzero fraction divisor; prematurely common-denominates before simplifying products/quotients; drops restrictions after cancellation.  
**Remediation:** CT07 Core on rational domain, sign changes and fraction multiplication/division. A challenge noncompletion must not imply weak Core mastery.

---

## Required independent authoring review

Review **exactly these two new candidate IDs**:

1. `WX07-ENT-001`: verify integer solutions and necessity/sufficiency, all hints, four solution steps, total 4-point rubric, distinctness from 67 current WX, optional Entrance10 placement and mistaken answers.
2. `WX07-CH-001`: verify fidelity to the historical **open-choice and planning-first** requirements; decide whether a reviewer-approved representative example helps or misleads; verify all example domain restrictions, reciprocal division, simplification, numerical check, staged hints and **rubric validity for student-chosen expressions**; ensure no accidental new grading automation or Core gating.

Return `PACKET_ID|MATH-CT05-07-W3C-WR-AUTHORING-R1`, `EXPECTED=2`, `REVIEWED=2`, per-ID `MATH/HINTS/SOLUTION/RUBRIC/GRADE_AND_LAYER/DISTINCT_FROM_CANONICAL_WX/PRECISE_REVISION/ITEM_VERDICT`, and an explicit `OVERALL|PASS_FOR_AUTHORING_REVIEW` / `REVISION_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

**Boundary:** This is a temporary NotebookLM candidate file, **not the live Written Library JSON**. Neither W3C placement PASS nor a later authoring PASS automatically authorizes production. Source file, currently published 67 WX, all Practice MCQs, identity, Skill/Readiness and learner history must remain unchanged until explicit Owner acceptance + separate implementation QA.
