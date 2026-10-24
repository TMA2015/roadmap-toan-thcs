# CT10 — Three gap-filling WRITTEN CANDIDATES for source review (R4)

**Status:** `AUTHOR_DRAFT_NOT_APPROVED`; **not canonical Written items**, not a learner-facing release, not part of approved 87 Written library.  
**Source:** source-teaching descriptions in `docs/kien-thuc/10-ham-so-do-thi/index.md` §5, on repository `main` as of 2026-10-24; math extrapolations below are **newly authored practice variants**, NOT verbatim SGK KNTT text and NOT official KNTT-level claims.  
**Purpose:** close the unlinked named method families #3/#9/#10 **only after academic source mapping**, and avoid manufacturing fake links from the new Knowledge UI.  
**Metadata:** provisional candidate ID only; final canonical `exercise_id`, `problem_type_id`, `kntt_placements`, `topic/skill`, evidence score remain unchanged until separate NotebookLM academic audit / Owner release.

## CAND-CT10-TYPE03-R4 · Tìm tham số để điểm thuộc đồ thị

**Đề (tự làm trên giấy):** Cho điểm `A(3;7)` và đồ thị `d: y=(m-1)x+1`. Tìm mọi `m` để `A` thuộc đồ thị của một **hàm số bậc nhất**.

**Thinking Flow:** (i) Chọn đúng hoành độ; (ii) điều kiện thuộc đồ thị; (iii) kiểm tra hệ số của x phải khác 0.

**Gợi ý 1:** Điều kiện điểm thuộc đồ thị là tung độ đã cho bằng giá trị hàm số tại x=3.  
**Gợi ý 2:** Giải `7=3(m-1)+1`, rồi kiểm tra `m-1≠0`.

**Lời giải mẫu:** `7=3(m-1)+1` ⇒ `6=3(m-1)` ⇒ `m-1=2` ⇒ `m=3`. Kiểm tra: `m-1=2≠0`, đúng là hàm số bậc nhất; `d` đi qua `A(3;7)`. Kết luận `m=3`.

**Rubric minh họa 1.0:** thay tọa độ đúng 0.25; giải `m` đúng 0.25; điều kiện hệ số khác 0 0.25; kiểm tra/kết luận 0.25.

**Source-level note:** evaluate whether the Grade 7–9 KNTT-Core actually requires an explicit parameterized solution at this topic; if not, keep as optional `Entrance10`/transfer instead of compulsory Readiness.

## CAND-CT10-TYPE09-R4 · Tìm tham số để hai đường thẳng song song

**Đề:** Tìm `m` để hai đường thẳng `d_1: y=(m+2)x-3` và `d_2: y=5x+2` song song phân biệt.

**Thinking Flow:** So sánh hệ số góc và tung độ gốc; kiểm tra hai đường không trùng nhau.

**Gợi ý 1:** Hai đường `y=a_1x+b_1`, `y=a_2x+b_2` song song phân biệt khi `a_1=a_2` và `b_1≠b_2`.  
**Gợi ý 2:** Giải `m+2=5` rồi kiểm tra `-3≠2`.

**Lời giải mẫu:** `m+2=5` ⇒ `m=3`. Khi đó `b_1=-3≠2=b_2`, nên hai đường song song phân biệt. Hệ số góc 5≠0 thỏa cách gọi hàm số bậc nhất. Kết luận `m=3`.

**Rubric minh họa 1.0:** nêu điều kiện song song 0.25; lập đúng phương trình 0.25; giải `m` 0.25; phân biệt trùng nhau và kết luận 0.25.

**Source-level note:** classify `Entrance10`/appropriate KNTT band only after a verified source receipt.

## CAND-CT10-TYPE10-R4 · Tìm tham số để hai ĐỒ THỊ HÀM BẬC NHẤT cắt nhau

**Đề:** Cho `d_1: y=(m-1)x+2` và `d_2:y=4x-3`. Tìm `m` sao cho **cả hai đều là đồ thị hàm số bậc nhất** và hai đường thẳng cắt nhau tại một điểm duy nhất.

**Thinking Flow:** Hai điều kiện **khác nhau**: (i) xác định đúng loại hàm số; (ii) hai hệ số góc khác nhau.

**Gợi ý 1:** `d_1` là đồ thị của một hàm số bậc nhất khi `m-1≠0`.  
**Gợi ý 2:** Để cắt nhau tại một điểm duy nhất, cần `m-1≠4`.

**Lời giải mẫu:** (1) `m-1≠0 ⇒ m≠1`; (2) `m-1≠4 ⇒ m≠5`. Vậy `m∈R\\{1,5}`. **Phân biệt quan trọng:** nếu đề chỉ gọi `d_1` là một đường thẳng, `m=1` vẫn cho đường thẳng ngang `y=2` cắt `d_2`; ở đây phải loại `m=1` do đề yêu cầu `hàm số bậc nhất`.

**Rubric minh họa 1.0:** kiểm tra `a_1≠0` 0.25; điều kiện `a_1≠a_2` 0.25; giải và kết hợp tập loại 0.25; giải thích đáp án với đúng thuật ngữ đề bài 0.25.

**Source-level note:** must NOT conflate "đường thẳng" with "đồ thị hàm số bậc nhất". The existing original CĐ10 teaching example #10 asks only that the two **straight lines** intersect and correctly states `m≠5`; this candidate intentionally changes the stem to include an extra first-degree-function constraint, therefore answer must also exclude `m=1`. Do not "correct" the original key without changing its stem.

## Proposed independent NotebookLM receipt contract

Reviewer checks, individually for all 3 IDs:
1. Algebra math key, domain conditions and ambiguity; uniqueness.
2. KNTT SGK 6–9 exact grade/lesson/source receipt and scope `Core` vs `Entrance10` vs `Challenge`.
3. Are these authentic *separate* skill/problem families or variants of a canonical broader family?
4. Pedagogical representativeness, worksheet clarity, after-solve hints and rubric fairness.
5. Correct placement in **one** Written Library and optional topic/lesson references; no parallel local duplicate.
6. Clear independent `OVERALL|PASS` plus reviewed-item ID reconciliation and owner publication authorization before any bank write.

Current status `REVISION_OR_APPROVAL_REQUIRED` for authoring; original 87 approved Written entries must remain unchanged.
