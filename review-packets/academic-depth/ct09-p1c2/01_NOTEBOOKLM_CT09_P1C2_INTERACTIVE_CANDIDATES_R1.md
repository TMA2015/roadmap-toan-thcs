# NOTEBOOKLM SOURCE — CT09 P1-C2 Targeted Interactive Candidates R1

Packet: `MATH-ACADEMIC-DEPTH-CT09-P1C2-INTERACTIVE-R1-20261003`  
State: **REVIEW ONLY / CANDIDATE CONTENT / NO LEARNER-FACING RELEASE YET**

Permanent sources expected:
- `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`
- `01_TOAN_THCS_MASTER_PLAN_v1.1.md`

Accepted context:
- Academic Depth Framework R1: PASS.
- CT09 Gap Audit + Content Delta R1: PASS, 0 revisions.
- CT09 P1-A: owner production QA PASS.
- CT09 P1-B: NotebookLM PASS and owner production QA PASS.
- CT09 P1-C1: anti-clone `variant_group` selector released; all 120 legacy IDs/content preserved.
- P1-C2 is the **small targeted interactive-coverage addition** authorized by Delta E3/E4.

No candidate below is copied verbatim from a commercial book or an official exam. Structures are source-backed; wording and numbers are original.

---

# 1. Why only 9 candidates

The accepted Delta Plan explicitly says **rebalance, not expand**.

The existing main CT09 bank already contains 120 questions, but structural diversity is much smaller. P1-C1 now prevents a normal 10-question session from drawing several near-clones when diverse groups are available.

P1-C2 therefore adds only the remaining high-value interactive structures:

| Problem type | Current state after P1-A/P1-B/P1-C1 | P1-C2 decision |
| --- | --- | --- |
| PT01 recognize valid two-variable linear equation | theory strong; direct interactive recognition thin | add 1 |
| PT03 graph/solution-line interpretation | P1-A deep graph teaching added; interactive construction still thin | add 1 |
| PT07 elimination | only 4 main-bank questions, all narrow structural pattern | add 2 |
| PT09 coefficient variation | fraction support exists; decimal/irrational variation weak | add 2 |
| PT12 count/value | 10 main-bank near-clones + deep P1-B written anchor | **add 0** |
| PT13 price/discount | deep P1-B written anchor, no concise interactive transfer | add 1 |
| PT14 mixture/concentration | deep P1-B written anchor, no concise interactive transfer | add 1 |
| PT16 genuine work/rate | micro + deep written anchor exist; main-bank family still weak | add 1 |

Total candidate additions: **9**.

This is intentionally below any quota. No new Entrance10-only interactive family is proposed in this slice.

---

# 2. Release/evidence contract under review

If approved, proposed IDs are append-only:
- `SYS09V1_121` ... `SYS09V1_129`

Implementation should place them in a new fifth chunk:
- `09-he-phuong-trinh-v1-05.json`

Do not rewrite or renumber the original 120 questions.

Each candidate includes:
- one existing legacy Practice skill bucket for backward compatibility;
- a precise `tags.type`;
- a new `variant_group`;
- 2-step stored hints;
- explanation after answer;
- proposed Skill Taxonomy v2 family/evidence mapping.

Important boundaries:
- a correct MCQ is **formative evidence**, not proof of Mastery/Readiness;
- no backfill/regrade;
- no historical attempt migration;
- no automatic written scoring;
- `variant_group` is delivery metadata, not an assessed skill;
- new taxonomy rows must preserve clone de-duplication.

---

# 3. Candidate inventory

| ID | PT | Purpose | Legacy skill bucket | Proposed family | Proposed evidence class |
| --- | --- | --- | --- | --- | --- |
| SYS09V1_121 | PT01 | recognize valid linear equation in two variables | `nghiem-pt-hai-an` | SYS-CONCEPT | MCQ_RECOGNITION_ONLY |
| SYS09V1_122 | PT03 | choose two points that determine solution line | `y-nghia-hinh-hoc` | SYS-CONCEPT | MCQ_RECOGNITION_ONLY |
| SYS09V1_123 | PT07 | prepare elimination by scaling one full equation | `giai-he-cong` | SYS-SOLVE | MCQ_METHOD_SELECTION_ONLY |
| SYS09V1_124 | PT07 | execute subtraction with equal coefficients | `giai-he-cong` | SYS-SOLVE | MCQ_FINAL_ANSWER_ONLY |
| SYS09V1_125 | PT09 | remove decimal coefficients equivalently | `bien-doi-truoc-giai` | SYS-SOLVE | MCQ_METHOD_SELECTION_ONLY |
| SYS09V1_126 | PT09 | eliminate with irrational coefficient kept exactly | `bien-doi-truoc-giai` | SYS-SOLVE | MCQ_FINAL_ANSWER_ONLY |
| SYS09V1_127 | PT13 | model listed price + discounts | `lap-he-bai-toan` | SYS-MODEL | MCQ_MODELING_PARTIAL_SYSTEM_SELECTION |
| SYS09V1_128 | PT14 | model total volume + solute amount | `lap-he-bai-toan` | SYS-MODEL | MCQ_MODELING_PARTIAL_SYSTEM_SELECTION |
| SYS09V1_129 | PT16 | model rate × time with different times | `lap-he-bai-toan` (+ context `nang-suat-he`) | SYS-MODEL | MCQ_MODELING_PARTIAL_SYSTEM_SELECTION |

The legacy bucket on 121 is intentionally reused rather than inventing a fifteenth learner-facing Practice skill. Please review whether that compatibility choice is acceptable; the precise problem type remains in `tags.type`, while Taxonomy v2 maps it to SYS-CONCEPT.

---

# 4. Candidate 121 — PT01 recognition

ID: `SYS09V1_121`  
Difficulty: basic  
Variant group: `SYS09-CONCEPT-EQ-RECOGNITION`

## Question
Phương trình nào dưới đây là **phương trình bậc nhất hai ẩn**?

A. \\(2x-3y=7\\)  
B. \\(x^2+y=7\\)  
C. \\(xy=6\\)  
D. \\(0x+0y=5\\)

Correct answer: **A**

## Hints
1. Dạng cần nhận ra là \\(ax+by=c\\), trong đó \\(a,b\\) không đồng thời bằng \\(0\\).
2. Không được có \\(x^2\\), tích \\(xy\\), và hai hệ số của \\(x,y\\) không thể cùng bằng \\(0\\).

## Explanation
A có đúng dạng \\(ax+by=c\\) với \\(a=2,b=-3\\). B có \\(x^2\\), C có tích \\(xy\\), còn D có cả hai hệ số \\(a=b=0\\), nên không thỏa định nghĩa.

## Distractor check
- B targets confusion with any equation containing two variables.
- C targets failure to distinguish linear from multiplicative structure.
- D targets omission of the non-simultaneously-zero coefficient condition.

---

# 5. Candidate 122 — PT03 solution line from two points

ID: `SYS09V1_122`  
Difficulty: basic/intermediate  
Variant group: `SYS09-GRAPH-TWO-POINTS`

## Question
Muốn vẽ đường thẳng biểu diễn tập nghiệm của \\(2x+y=4\\), cặp hai điểm nào có thể dùng ngay?

A. \\((0;4)\\) và \\((2;0)\\)  
B. \\((0;2)\\) và \\((4;0)\\)  
C. \\((1;1)\\) và \\((2;2)\\)  
D. \\((0;0)\\) và \\((2;0)\\)

Correct answer: **A**

## Hints
1. Mỗi điểm dùng để vẽ phải thỏa phương trình.
2. Thay từng cặp vào \\(2x+y=4\\).

## Explanation
\\((0;4)\\) cho \\(0+4=4\\); \\((2;0)\\) cho \\(4+0=4\\). Hai điểm phân biệt này xác định đường thẳng nghiệm.

## Distractor check
Every wrong option contains at least one point not satisfying the equation.

---

# 6. Candidate 123 — PT07 elimination after scaling

ID: `SYS09V1_123`  
Difficulty: intermediate  
Variant group: `SYS09-ELIM-SCALE-ONE`

## Question
Xét hệ:
\\[
\\begin{cases}
2x+y=7\\\\
3x-2y=0
\\end{cases}
\\]
Để khử \\(y\\) bằng cộng đại số, bước chuẩn bị nào phù hợp nhất?

A. Nhân **cả hai vế** phương trình thứ nhất với \\(2\\), rồi cộng với phương trình thứ hai.  
B. Nhân cả hai vế phương trình thứ nhất với \\(-2\\), rồi cộng.  
C. Nhân cả hai vế phương trình thứ hai với \\(2\\), rồi cộng.  
D. Cộng ngay hai phương trình, không cần biến đổi.

Correct answer: **A**

## Hints
1. Muốn cộng để khử \\(y\\), hai hệ số của \\(y\\) phải đối nhau.
2. Từ \\(y\\) và \\(-2y\\), hãy tạo \\(2y\\) ở phương trình thứ nhất.

## Explanation
Nhân phương trình đầu với 2 được \\(4x+2y=14\\). Cộng với \\(3x-2y=0\\) thì \\(y\\) bị khử và thu được \\(7x=14\\).

---

# 7. Candidate 124 — PT07 execute elimination

ID: `SYS09V1_124`  
Difficulty: intermediate  
Variant group: `SYS09-ELIM-EQUAL-X`

## Question
Với hệ
\\[
\\begin{cases}
3x+2y=11\\\\
3x-4y=-1
\\end{cases}
\\]
lấy phương trình thứ nhất **trừ** phương trình thứ hai để khử \\(x\\). Phương trình một ẩn thu được là:

A. \\(6y=12\\)  
B. \\(-2y=10\\)  
C. \\(6y=10\\)  
D. \\(6x=12\\)

Correct answer: **A**

## Hints
1. \\(3x-3x=0\\).
2. \\(2y-(-4y)=6y\\) và \\(11-(-1)=12\\).

## Explanation
Trừ từng vế: \\((3x+2y)-(3x-4y)=11-(-1)\\), nên \\(6y=12\\).

---

# 8. Candidate 125 — PT09 decimal coefficients

ID: `SYS09V1_125`  
Difficulty: intermediate  
Variant group: `SYS09-COEFF-DECIMAL-SCALE`

## Question
Trong hệ
\\[
\\begin{cases}
0{,}2x+0{,}5y=2{,}4\\\\
x-y=3
\\end{cases}
\\]
biến đổi tương đương thuận tiện nhất của phương trình đầu là:

A. \\(2x+5y=24\\)  
B. \\(2x+5y=2{,}4\\)  
C. \\(0{,}2x+5y=24\\)  
D. \\(2x+0{,}5y=24\\)

Correct answer: **A**

## Hints
1. Có thể nhân toàn bộ hai vế với cùng một số khác 0.
2. Nhân cả phương trình với \\(10\\).

## Explanation
Nhân **mọi hạng tử ở cả hai vế** với 10: \\(0{,}2x+0{,}5y=2{,}4\\Rightarrow2x+5y=24\\).

---

# 9. Candidate 126 — PT09 irrational coefficient variation

ID: `SYS09V1_126`  
Difficulty: intermediate  
Variant group: `SYS09-COEFF-IRRATIONAL-CANCEL`

## Question
Với hệ
\\[
\\begin{cases}
\\sqrt2 x+y=3\\\\
\\sqrt2 x-y=1
\\end{cases}
\\]
cộng hai phương trình ta được:

A. \\(2\\sqrt2\,x=4\\)  
B. \\(2\\sqrt2\,x=2\\)  
C. \\(2y=4\\)  
D. \\(\\sqrt2\,x=4\\)

Correct answer: **A**

## Hints
1. Hai hệ số của \\(y\\) đang đối nhau.
2. Cộng từng vế và giữ nguyên chính xác hệ số \\(\\sqrt2\\).

## Explanation
\\((\\sqrt2 x+y)+(\\sqrt2 x-y)=3+1\\), nên \\(2\\sqrt2\,x=4\\).

Review point: confirm this coefficient variation remains appropriate Core-Support practice and does not create unnecessary algebraic difficulty.

---

# 10. Candidate 127 — PT13 price/discount modeling

ID: `SYS09V1_127`  
Difficulty: intermediate  
Variant group: `SYS09-MODEL-DISCOUNT`

## Question
Hai món hàng có giá niêm yết lần lượt là \\(x\\) và \\(y\\) nghìn đồng, tổng cộng **1 800 nghìn đồng**. Món thứ nhất giảm **15%**, món thứ hai giảm **25%**; tổng tiền thực trả là **1 450 nghìn đồng**. Hệ nào mô tả đúng?

A. \\(\\begin{cases}x+y=1800\\\\0{,}85x+0{,}75y=1450\\end{cases}\\)  
B. \\(\\begin{cases}x+y=1800\\\\0{,}15x+0{,}25y=1450\\end{cases}\\)  
C. \\(\\begin{cases}x+y=1450\\\\0{,}85x+0{,}75y=1800\\end{cases}\\)  
D. \\(\\begin{cases}x+y=1800\\\\0{,}85x+0{,}25y=1450\\end{cases}\\)

Correct answer: **A**

## Hints
1. Giảm 15% nghĩa là trả 85%; giảm 25% nghĩa là trả 75%.
2. Phương trình thứ hai phải biểu diễn **tổng tiền thực trả**.

## Explanation
Giá niêm yết cho \\(x+y=1800\\). Sau giảm giá, hai khoản phải trả là \\(0{,}85x\\) và \\(0{,}75y\\), tổng bằng 1450.

---

# 11. Candidate 128 — PT14 mixture/concentration

ID: `SYS09V1_128`  
Difficulty: intermediate  
Variant group: `SYS09-MODEL-MIXTURE`

## Question
Trộn \\(x\\) lít dung dịch muối 12% với \\(y\\) lít dung dịch muối 30% để được **15 lít** dung dịch muối **18%**. Hệ nào mô tả đúng?

A. \\(\\begin{cases}x+y=15\\\\0{,}12x+0{,}30y=2{,}7\\end{cases}\\)  
B. \\(\\begin{cases}x+y=15\\\\0{,}12+0{,}30=0{,}18\\end{cases}\\)  
C. \\(\\begin{cases}x+y=15\\\\0{,}12x+0{,}30y=0{,}18\\end{cases}\\)  
D. \\(\\begin{cases}x+y=2{,}7\\\\0{,}12x+0{,}30y=15\\end{cases}\\)

Correct answer: **A**

## Hints
1. Một phương trình là tổng thể tích.
2. Lượng muối cuối là \\(0{,}18\\times15=2{,}7\\) lít tương đương theo mô hình.

## Explanation
Bảo toàn tổng thể tích cho \\(x+y=15\\). Bảo toàn lượng muối cho \\(0{,}12x+0{,}30y=0{,}18\\cdot15=2{,}7\\).

---

# 12. Candidate 129 — PT16 genuine work/rate model

ID: `SYS09V1_129`  
Difficulty: intermediate  
Variant group: `SYS09-MODEL-WORKRATE`

## Question
Máy A và B có năng suất không đổi lần lượt là \\(x,y\\) chi tiết/giờ.
- Cả hai cùng làm 4 giờ được 200 chi tiết.
- A làm 3 giờ và B làm 2 giờ được 130 chi tiết.

Hệ nào biểu diễn đúng dữ kiện?

A. \\(\\begin{cases}4x+4y=200\\\\3x+2y=130\\end{cases}\\)  
B. \\(\\begin{cases}x+y=200\\\\3x+2y=130\\end{cases}\\)  
C. \\(\\begin{cases}4x+4y=200\\\\3x-2y=130\\end{cases}\\)  
D. \\(\\begin{cases}4x+4y=50\\\\3x+2y=130\\end{cases}\\)

Correct answer: **A**

## Hints
1. Số chi tiết = năng suất × thời gian.
2. Mỗi máy phải được nhân với đúng số giờ của chính máy đó.

## Explanation
Trong 4 giờ: A làm \\(4x\\), B làm \\(4y\\), tổng 200. Ở dữ kiện hai: A làm \\(3x\\), B làm \\(2y\\), tổng 130.

---

# 13. Proposed taxonomy / evidence treatment

If all 9 items pass academic review:

- SYS09V1_121–122 → SYS-CONCEPT.
- SYS09V1_123–126 → SYS-SOLVE.
- SYS09V1_127–129 → SYS-MODEL.
- No new SYS-PARAM item is needed.
- No new learner-facing family is created.
- Each new structural item should receive a distinct clone family unless reviewer judges two candidates pedagogically equivalent.
- Maximum additional independent units proposed: **9**, but this must remain descriptive evidence capacity, not Mastery/Readiness credit.

Proposed new clone families:
- `SYS09-P1C2-CONCEPT-EQ-121`
- `SYS09-P1C2-GRAPH-122`
- `SYS09-P1C2-ELIM-SCALE-123`
- `SYS09-P1C2-ELIM-SUBTRACT-124`
- `SYS09-P1C2-DECIMAL-125`
- `SYS09-P1C2-IRRATIONAL-126`
- `SYS09-P1C2-DISCOUNT-127`
- `SYS09-P1C2-MIXTURE-128`
- `SYS09-P1C2-WORKRATE-129`

Please explicitly review whether any pair should share a clone family rather than create a separate independent evidence unit.

---

# 14. Independent review checklist

Return PASS / REVISE for each item and for these architecture checks.

**C1 — Mathematical correctness**  
All prompts, options, unique answers, arithmetic, units and explanations are correct.

**C2 — PT alignment**  
Each candidate really tests the declared PT01/PT03/PT07/PT09/PT13/PT14/PT16 structure rather than a nearby easier skill.

**C3 — Anti-inflation**  
Nine additions are justified; no candidate is redundant with current main/micro/P1-B coverage.

**C4 — Core/layer safety**  
No Entrance10-only or Specialized-Challenge content is silently promoted into Core. In particular, review the irrational-coefficient item.

**C5 — Modeling quality**  
127–129 test model construction, not merely renamed sum/difference arithmetic.

**C6 — Hint quality**  
Hints support the next step without immediately disclosing the complete answer.

**C7 — Distractor quality**  
Every wrong option is mathematically wrong for the stated question and reflects a plausible misconception.

**C8 — Legacy skill compatibility**  
The proposed reuse of existing Practice skill buckets is acceptable and does not require inventing new learner-facing skill labels.

**C9 — Taxonomy/evidence safety**  
SYS-CONCEPT / SYS-SOLVE / SYS-MODEL mappings and evidence classes are appropriate; clone-family treatment does not inflate independent evidence.

**C10 — Release boundary**  
Approval authorizes only a separate P1-C2 technical integration/QA. It does not authorize Mastery/Readiness, backfill/regrade, or mass edits to other topics.

Required final form:

```
OVERALL|PASS
```

or

```
OVERALL|REVISIONS_REQUIRED
```

Then list:
- item-level PASS/REVISE for SYS09V1_121..129;
- C1..C10 PASS/REVISE;
- exact corrections if any;
- authorization string if PASS:
  `CLEARED_FOR_CT09_P1C2_INTEGRATION_ONLY`.
