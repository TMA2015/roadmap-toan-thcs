# W3B R0 — two newly authored written candidates for independent review

**Date:** 2026-10-20 · **Review requested, NOT approved for publication.**
**Academic evidence to date:** Source placement `MATH-CT05-07-W3B-20261016` 14/14 `PASS_FOR_PLACEMENT_REVIEW`; original problems and mathematical answers were reviewed, but **the following new hint ladders, detailed worked solutions, rubrics and student-facing guidance have NOT been independently reviewed**.

**Canonical proposals only (IDs reserved conceptually, NOT inserted into live JSON):** `WX05-ENT-002` and `WX05-CH-001`. Original authored sources stay byte-identical; no changes to existing 65 canonical WX, 120 CT05/120 CT06 MCQs, Core, Readiness, Skill history.

---

## Proposal 1 — `WX05-ENT-002` / `05-ENT-02`

- **Topic:** CT05 · Hằng đẳng thức · suggested `learning_layer=Entrance10`, `level=ENTRANCE10` (optional **transfer** practice, **not KNTT Core gating**).
- **Original source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-ENT-02`; Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.
- **Distinct from live:** `WX05-ENT-001` proves a cubic expression is constant; this problem applies known sum/product to a sum of squares. No existing canonical WX source-ref for this source ID.
- **Problem type:** using \((x+y)^2\) when sum and product are given.
- **Suggested prerequisites:** bình phương một tổng, biến đổi đẳng thức, tính toán số nguyên.
- **Learner-facing problem:** Biết \(x+y=10\) và \(xy=21\). **Không cần tìm riêng \(x\) và \(y\)**, hãy tính \(x^2+y^2\), nêu hằng đẳng thức được dùng và trình bày các bước tính.

### Staged hints — preserve independent attempt

1. Có hằng đẳng thức nào liên hệ \((x+y)^2\), \(x^2+y^2\) và tích \(xy\)?
2. Từ \((x+y)^2=x^2+2xy+y^2\), hãy chuyển vế để biểu diễn \(x^2+y^2\) theo tổng và tích đã biết. Sau đó mới thay số.

### Worked solution

1. Bình phương tổng: \((x+y)^2=x^2+2xy+y^2\).
2. Suy ra \(x^2+y^2=(x+y)^2-2xy\).
3. Thay \(x+y=10\), \(xy=21\): \(x^2+y^2=10^2-2\cdot21=100-42=58\).
4. Kết luận: \(x^2+y^2=\boxed{58}\). Không cần xác định riêng hai biến.

### Self-mark rubric (4 points)

| Criterion | Points |
|---|---:|
| Viết đúng hằng đẳng thức \((x+y)^2=x^2+2xy+y^2\) | 1 |
| Biến đổi đúng \(x^2+y^2=(x+y)^2-2xy\) | 1 |
| Thay số và tính \(100-42=58\) chính xác | 1.5 |
| Kết luận rõ kết quả; không suy diễn thêm dữ kiện | 0.5 |
| **Total** | **4** |

**Mistakes to discuss:** cho rằng \(x^2+y^2=(x+y)^2\); quên hệ số \(2\) trước \(xy\); tự đi giải hệ dù đề không yêu cầu. **Remediation:** CĐ05 Core về bình phương tổng, CĐ05 Practice.

**Layer caution:** SGK KNTT lớp 8 supports prerequisite identities. Optional `Entrance10` is a practice-level label; **do not assert this exact task has appeared in entrance examinations without independent S3 corpus evidence**. Suggested `gates_core=false`, `auto_readiness_credit=false`.

---

## Proposal 2 — `WX05-CH-001` / `05-CH-01`

- **Topic:** CT05 · Ba biến và lập phương · suggested `learning_layer=Specialized-Challenge`, `level=CHALLENGE`; **not mandatory KNTT Core**.
- **Original source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-CH-01`; same locked source SHA.
- **Distinct from live:** `WX06-CH-001` handles the Sophie Germain factorization \(x^4+4\), not a constrained three-variable proof.
- **Problem type:** proving a cubic identity using \(a+b+c=0\) and cube expansion.
- **Suggested prerequisites:** lập phương tổng, dấu âm trước lũy thừa, đặt nhân tử chung.
- **Learner-facing problem:** Cho \(a,b,c\) là các số thực thỏa mãn \(a+b+c=0\). Chứng minh \(a^3+b^3+c^3=3abc\). **Nêu rõ nơi sử dụng giả thiết** trong lời chứng minh.

### Staged hints — preserve independent proof

1. Từ giả thiết \(a+b+c=0\), hãy biểu diễn một biến theo hai biến còn lại.
2. Thay \(c=-(a+b)\) vào \(a^3+b^3+c^3\), chú ý \([-(a+b)]^3=-(a+b)^3\).
3. Khai triển lập phương, thu gọn, rồi đặt nhân tử chung để xuất hiện lại biểu thức \(c=-(a+b)\).

### Worked proof

1. Vì \(a+b+c=0\), ta có \(c=-(a+b)\).
2. Do đó \(a^3+b^3+c^3=a^3+b^3-(a+b)^3\).
3. Khai triển \((a+b)^3=a^3+3a^2b+3ab^2+b^3\), suy ra
   \[
   a^3+b^3+c^3=-3a^2b-3ab^2=-3ab(a+b).
   \]
4. Theo giả thiết, \(a+b=-c\), nên \(-3ab(a+b)=-3ab(-c)=3abc\). **Điều phải chứng minh**.

### Self-mark rubric (4 points)

| Criterion | Points |
|---|---:|
| Rút ra đúng \(c=-(a+b)\) từ giả thiết và thay vào tổng lập phương | 1 |
| Khai triển \((a+b)^3\), thu gọn đúng dấu và hệ số | 1.5 |
| Đặt nhân tử đúng \(-3ab(a+b)\) | 1 |
| Dùng lại giả thiết \(a+b=-c\) và kết luận \(=3abc\) | 0.5 |
| **Total** | **4** |

**Mistakes to discuss:** \([-(a+b)]^3=(a+b)^3\) sai dấu; quên các hạng tử giữa \(3a^2b\), \(3ab^2\); khẳng định đẳng thức đúng vô điều kiện, quên sử dụng \(a+b+c=0\). **Remediation:** CĐ05 Core lập phương tổng/hiệu; không suy ra "yếu Core" nếu học sinh chưa hoàn thành bài Challenge.

**Layer boundary:** a specialized optional proof built from Grade 8 prerequisite skills, not proof that the three-variable identity belongs to compulsory textbook Core. Suggested `gates_core=false`, `auto_readiness_credit=false`.

---

## Reviewer-specific requests

Independent academic reviewer must check **both newly written items** for (1) correctness under stated domain/hypotheses, (2) helpful but non-spoiling hint progression, (3) each solution step, (4) 4-point rubric sums/marking alignment, (5) meaningful differentiation from six already published CT05/CT06 canonical WX, (6) appropriate Entrance10/Challenge non-gating status, (7) misconceptions/remediation value.

Return `EXPECTED=2`, `REVIEWED=2`, two item verdicts `PASS`/`REVISION_REQUIRED`/`INSUFFICIENT_EVIDENCE`, and an overall verdict. **`PASS_FOR_AUTHORING_REVIEW` is not auto-deploy authorization.**

The next unrelated batch `W3C` (14 historical items in CT06–07) remains **NOT_REVIEWED**.
