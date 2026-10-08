# NotebookLM Review Packet — Grade 7 Repair Wave 1 R1

**packet_id:** `MATH-KNTT-G7-REPAIR-W1-R1-20261008`  
**scope:** Independent academic content review of the first Grade-7 repair wave authorized by `G7_GAP_PRIORITY_R1_REVIEW_COMPLETE`  
**release boundary:** CANDIDATE CONTENT REVIEW ONLY — no merge/deploy until this packet passes

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 7, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 7, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 7 Repair Wave 1 R1**

Exactly **2 permanent governance + 2 Grade-7 SGK + 1 temporary packet = 5 Sources**.

Do **not** select separately:
- Written Exercise Library Contract v1;
- Grade-7 evidence-inventory JSON;
- Grade-7 priority-result receipt;
- old packets or obsolete Master Plans.

## 2. Prior independent authorization

The prior priority review returned PASS:

- clearance: `G7_GAP_PRIORITY_R1_REVIEW_COMPLETE`
- first repair wave: `BAI1_3;BAI5_7;BAI26_28`
- allowed dimensions for all three: `LEARN;MICRO;PRACTICE`
- Written: **not authorized**
- Readiness: **not authorized**
- new canonical skills: **NONE**

This packet must not reopen the priority decision unless the actual candidate content reveals a concrete academic problem.

## 3. Candidate size and anti-inflation boundary

Exactly:

- 3 lesson groups
- 3 Learn cards
- 12 Micro items
- 18 Practice items
- 0 Written items
- 0 Readiness items
- 0 new canonical skills

The repair must remain bounded to Grade-7 Core. In particular:

- Bài 5–7 must stay at irrational-number / arithmetic-square-root / real-number-set level; **do not import later-grade radical algebra**.
- Bài 26–28 must match the actual Grade-7 KNTT scope of univariate-polynomial division. If any candidate operation is outside S1, mark it REVISE.
- No item should be approved merely because it fills a missing audit cell.

## BAI1_3

Priority: **P0** · Authorized dimensions: **LEARN;MICRO;PRACTICE**

### Learn card `num02-g7-core-1` — Số hữu tỉ: cộng, trừ, nhân và chia

- KNTT: Lớp 7 · Bài 1–3
- Skills: `phep-tinh-so-huu-ti`
- Prerequisites: `phep-tinh-phan-so`, `so-nguyen-phep-tinh`

**Key idea:** Số hữu tỉ có thể viết dưới dạng a/b với a, b là số nguyên và b khác 0. Khi cộng hoặc trừ hai số hữu tỉ, đưa về cùng mẫu rồi cộng/trừ tử; khi nhân, nhân tử với tử và mẫu với mẫu; khi chia cho một số hữu tỉ khác 0, nhân với số nghịch đảo. Dấu của kết quả phải được xử lí như với số nguyên. Trong biểu thức nhiều phép tính, ưu tiên lũy thừa, rồi nhân/chia, cuối cùng cộng/trừ, trừ khi có ngoặc.

**Worked example:** Tính A = -3/4 + 5/6 và B = (-2/3) : (4/9).

**Solution:** A = -9/12 + 10/12 = 1/12. Với B, đổi phép chia thành nhân với số nghịch đảo: (-2/3) × (9/4) = -18/12 = -3/2.

**Misconception:** Không cộng tử với tử và mẫu với mẫu khi cộng phân số. Khi chia, chỉ đảo số chia, không đảo số bị chia. Đặc biệt chú ý dấu âm và ngoặc: (-2/3)^2 khác với -(2/3)^2.

**Summary:** Xác định đúng phép tính, xử lí dấu, quy đồng khi cộng–trừ, dùng nghịch đảo khi chia và kiểm tra thứ tự phép tính.

### Micro candidates (4)

- `NUM02MICRO_053` — **Tính \(-\frac34+\frac56\).**  
  Options: \(\frac1{12}\) | \(-\frac{19}{12}\) | \(\frac{19}{12}\) | \(-\frac1{12}\)  
  Correct option index: `0`  
  Explanation: Quy đồng mẫu 12: \(-9/12+10/12=1/12\).
- `NUM02MICRO_054` — **Tính \((-\frac23):\frac49\).**  
  Options: \(-\frac32\) | \(-\frac8{27}\) | \(\frac32\) | \(-\frac29\)  
  Correct option index: `0`  
  Explanation: Chia cho \(4/9\) là nhân với \(9/4\): \((-2/3)\times(9/4)=-3/2\).
- `NUM02MICRO_055` — **Tính \(\frac12-\left(-\frac34\right)\cdot\frac23\).**  
  Options: \(1\) | \(0\) | \(-1\) | \(\frac14\)  
  Correct option index: `0`  
  Explanation: Tích bằng \(-1/2\), nên \(1/2-(-1/2)=1\).
- `NUM02MICRO_056` — **Giá trị của \(\left(-\frac23\right)^2\) là:**  
  Options: \(\frac49\) | \(-\frac49\) | \(\frac23\) | \(-\frac23\)  
  Correct option index: `0`  
  Explanation: Bình phương một số âm cho kết quả dương: \((-2/3)^2=4/9\).

### Practice candidates (6)

- `NUM02V1_133` — **Tính \(-\frac25+\frac3{10}\).**  
  Options: \(-\frac1{10}\) | \(\frac1{10}\) | \(-\frac7{10}\) | \(\frac7{10}\)  
  Correct option index: `0`  
  Explanation: Quy đồng: \(-2/5=-4/10\), nên tổng bằng \(-1/10\).
- `NUM02V1_134` — **Tính \(\frac79-\left(-\frac29\right)\).**  
  Options: \(1\) | \(\frac59\) | \(-1\) | \(\frac19\)  
  Correct option index: `0`  
  Explanation: Trừ số âm là cộng số đối: \(7/9+2/9=1\).
- `NUM02V1_135` — **Tính \((-\frac56)\cdot\frac9{10}\).**  
  Options: \(-\frac34\) | \(\frac34\) | \(-\frac{45}{16}\) | \(-\frac12\)  
  Correct option index: `0`  
  Explanation: Rút gọn trước hoặc sau khi nhân: \((-5/6)(9/10)=-45/60=-3/4\).
- `NUM02V1_136` — **Tính \(\frac38:\left(-\frac9{16}\right)\).**  
  Options: \(-\frac23\) | \(\frac23\) | \(-\frac{27}{128}\) | \(-\frac32\)  
  Correct option index: `0`  
  Explanation: Nhân với nghịch đảo: \((3/8)(-16/9)=-2/3\).
- `NUM02V1_137` — **Tính \(1-\frac23\cdot\left(-\frac34\right)\).**  
  Options: \(\frac32\) | \(\frac12\) | \(-\frac32\) | \(0\)  
  Correct option index: `0`  
  Explanation: Tích bằng \(-1/2\), nên \(1-(-1/2)=3/2\).
- `NUM02V1_138` — **Giá trị của \(\left(-\frac12\right)^3\) là:**  
  Options: \(-\frac18\) | \(\frac18\) | \(-\frac16\) | \(\frac16\)  
  Correct option index: `0`  
  Explanation: Lũy thừa bậc lẻ giữ dấu âm: \((-1/2)^3=-1/8\).


## BAI5_7

Priority: **P0** · Authorized dimensions: **LEARN;MICRO;PRACTICE**

### Learn card `num02-g7-core-2` — Số vô tỉ, căn bậc hai số học và tập số thực

- KNTT: Lớp 7 · Bài 5–7
- Skills: `so-vo-ti`, `can-bac-hai-so-hoc`
- Prerequisites: `so-huu-ti-thap-phan`

**Key idea:** Số hữu tỉ có biểu diễn thập phân hữu hạn hoặc vô hạn tuần hoàn. Số vô tỉ là số không viết được dưới dạng a/b với a, b nguyên và b khác 0; biểu diễn thập phân của nó là vô hạn không tuần hoàn. Với a ≥ 0, căn bậc hai số học của a là số không âm x sao cho x² = a, kí hiệu √a. Tập số thực gồm cả số hữu tỉ và số vô tỉ.

**Worked example:** Phân loại các số 0,25; 0,(3); √2; √49. Tính √49.

**Solution:** 0,25 và 0,(3) là số hữu tỉ. √2 là số vô tỉ. Vì 7² = 49 và căn bậc hai số học là số không âm nên √49 = 7.

**Misconception:** Không viết √49 = ±7: kí hiệu √49 chỉ căn bậc hai số học, nên bằng 7. Cũng không kết luận mọi số có dấu căn đều vô tỉ; chẳng hạn √49 = 7 là số hữu tỉ.

**Summary:** Phân biệt hữu tỉ/vô tỉ bằng bản chất biểu diễn số; với √a, luôn lấy giá trị không âm và chỉ dùng kiến thức căn bậc hai số học cơ bản của lớp 7.

### Micro candidates (4)

- `NUM02MICRO_057` — **Số nào sau đây là số vô tỉ?**  
  Options: \(\sqrt2\) | \(-\frac34\) | \(0,125\) | \(0,(3)\)  
  Correct option index: `0`  
  Explanation: \(\sqrt2\) không viết được dưới dạng phân số của hai số nguyên; các số còn lại đều là số hữu tỉ.
- `NUM02MICRO_058` — **Căn bậc hai số học của 49 là:**  
  Options: \(7\) | \(-7\) | \(\pm7\) | \(49\)  
  Correct option index: `0`  
  Explanation: Căn bậc hai số học là số không âm; vì \(7^2=49\) nên \(\sqrt{49}=7\).
- `NUM02MICRO_059` — **Khẳng định nào đúng?**  
  Options: \(\sqrt5\) là số vô tỉ. | Mọi số có dấu căn đều vô tỉ. | \(\sqrt{36}=\pm6\). | Số vô tỉ có biểu diễn thập phân vô hạn tuần hoàn.  
  Correct option index: `0`  
  Explanation: \(\sqrt5\) là số vô tỉ. \(\sqrt{36}=6\), và số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn.
- `NUM02MICRO_060` — **Tính \(\sqrt{0,81}\).**  
  Options: \(0,9\) | \(0,09\) | \(9\) | \(\pm0,9\)  
  Correct option index: `0`  
  Explanation: \(0,9^2=0,81\) và căn bậc hai số học lấy giá trị không âm, nên \(\sqrt{0,81}=0,9\).

### Practice candidates (6)

- `NUM02V1_139` — **Số nào là số vô tỉ?**  
  Options: \(\sqrt3\) | \(0,75\) | \(-2\) | \(0,(6)\)  
  Correct option index: `0`  
  Explanation: \(\sqrt3\) là số vô tỉ; các số còn lại là hữu tỉ.
- `NUM02V1_140` — **Khẳng định nào đúng?**  
  Options: Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn. | Mọi số thập phân vô hạn đều vô tỉ. | Mọi căn bậc hai đều vô tỉ. | Số vô tỉ không thuộc tập số thực.  
  Correct option index: `0`  
  Explanation: Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn và vẫn thuộc tập số thực.
- `NUM02V1_141` — **Trong các số \(\sqrt2,\sqrt9,\frac53,0,(12)\), có bao nhiêu số vô tỉ?**  
  Options: 1 | 2 | 3 | 4  
  Correct option index: `0`  
  Explanation: Chỉ \(\sqrt2\) là vô tỉ; \(\sqrt9=3\), \(5/3\) và 0,(12) đều hữu tỉ.
- `NUM02V1_142` — **Tính \(\sqrt{121}\).**  
  Options: 11 | -11 | ±11 | 121  
  Correct option index: `0`  
  Explanation: Vì \(11^2=121\) và căn bậc hai số học không âm nên kết quả là 11.
- `NUM02V1_143` — **Tính \(\sqrt{\frac{25}{49}}\).**  
  Options: \(\frac57\) | \(-\frac57\) | \(\frac{25}{7}\) | \(\frac5{49}\)  
  Correct option index: `0`  
  Explanation: \((5/7)^2=25/49\), nên căn bậc hai số học bằng 5/7.
- `NUM02V1_144` — **Số nào thỏa \(x=\sqrt{16}\)?**  
  Options: 4 | -4 | ±4 | 8  
  Correct option index: `0`  
  Explanation: Kí hiệu \(\sqrt{16}\) chỉ căn bậc hai số học, nên bằng 4.


## BAI26_28

Priority: **P0** · Authorized dimensions: **LEARN;MICRO;PRACTICE**

### Learn card `alg04-g7-core-6` — Chia đa thức một biến

- KNTT: Lớp 7 · Bài 28
- Skills: `chia-da-thuc-mot-bien`
- Prerequisites: `thu-gon-da-thuc`, `cong-tru-da-thuc`, `nhan-bieu-thuc`

**Key idea:** Khi chia đa thức một biến cho một đa thức khác 0, sắp xếp các hạng tử theo lũy thừa giảm dần của biến. Chia hạng tử bậc cao nhất của đa thức bị chia cho hạng tử bậc cao nhất của đa thức chia để tìm hạng tử đầu của thương; nhân ngược lại, rồi trừ và tiếp tục. Trong các bài chia hết ở phạm vi này, kết quả cuối cùng có dư bằng 0.

**Worked example:** Chia \(x^2+5x+6\) cho \(x+2\).

**Solution:** Lấy \(x^2:x=x\). Nhân \(x(x+2)=x^2+2x\), trừ được \(3x+6\). Tiếp theo \(3x:x=3\). Nhân \(3(x+2)=3x+6\), trừ được 0. Vậy thương là \(x+3\). Kiểm tra: \((x+2)(x+3)=x^2+5x+6\).

**Misconception:** Không chia từng hạng tử của đa thức bị chia cho cả đa thức chia như khi chia cho một đơn thức. Mỗi bước phải lấy hạng tử bậc cao nhất, nhân ngược lại toàn bộ đa thức chia rồi trừ đúng dấu.

**Summary:** Sắp xếp theo bậc giảm dần → chia hạng tử đầu → nhân ngược → trừ → lặp lại → kiểm tra bằng phép nhân.

### Micro candidates (4)

- `ALG04MICRO_016` — **Thương của \((x^2+5x+6):(x+2)\) là:**  
  Options: \(x+3\) | \(x+2\) | \(x-3\) | \(x^2+3\)  
  Correct option index: `0`  
  Explanation: \(x^2+5x+6=(x+2)(x+3)\), nên thương là \(x+3\).
- `ALG04MICRO_017` — **Tính \((2x^2+7x+3):(2x+1)\).**  
  Options: \(x+3\) | \(x+2\) | \(2x+3\) | \(x-3\)  
  Correct option index: `0`  
  Explanation: \((2x+1)(x+3)=2x^2+7x+3\), nên thương là \(x+3\).
- `ALG04MICRO_018` — **Tính \((x^3-x^2-4x+4):(x-1)\).**  
  Options: \(x^2-4\) | \(x^2+4\) | \(x^2-x-4\) | \(x^2-1\)  
  Correct option index: `0`  
  Explanation: \((x-1)(x^2-4)=x^3-x^2-4x+4\), nên thương là \(x^2-4\).
- `ALG04MICRO_019` — **Muốn kiểm tra kết quả \((x^2-1):(x-1)=x+1\), phép tính nào là phù hợp nhất?**  
  Options: Kiểm tra \((x-1)(x+1)=x^2-1\). | Cộng \((x-1)+(x+1)\). | Thay mọi \(x\) bằng 1. | Đạo hàm hai đa thức.  
  Correct option index: `0`  
  Explanation: Kiểm tra phép chia hết bằng cách nhân đa thức chia với thương; ở đây \((x-1)(x+1)=x^2-1\).

### Practice candidates (6)

- `ALG04V2_133` — **Tính \((x^2+3x+2):(x+1)\).**  
  Options: \(x+2\) | \(x+1\) | \(x-2\) | \(x^2+2\)  
  Correct option index: `0`  
  Explanation: \((x+1)(x+2)=x^2+3x+2\).
- `ALG04V2_134` — **Tính \((x^2-4):(x-2)\).**  
  Options: \(x+2\) | \(x-2\) | \(x^2+2\) | \(1\)  
  Correct option index: `0`  
  Explanation: Hiệu hai bình phương: \(x^2-4=(x-2)(x+2)\).
- `ALG04V2_135` — **Tính \((2x^2+5x+2):(2x+1)\).**  
  Options: \(x+2\) | \(2x+2\) | \(x+1\) | \(x-2\)  
  Correct option index: `0`  
  Explanation: \((2x+1)(x+2)=2x^2+5x+2\).
- `ALG04V2_136` — **Tính \((x^3-8):(x-2)\).**  
  Options: \(x^2+2x+4\) | \(x^2-2x+4\) | \(x^2+4\) | \(x^2+2\)  
  Correct option index: `0`  
  Explanation: \(x^3-8=(x-2)(x^2+2x+4)\).
- `ALG04V2_137` — **Tính \((x^3+x^2-x-1):(x+1)\).**  
  Options: \(x^2-1\) | \(x^2+1\) | \(x^2-x-1\) | \(x^2+x-1\)  
  Correct option index: `0`  
  Explanation: Nhóm hạng tử: \(x^2(x+1)-1(x+1)=(x+1)(x^2-1)\).
- `ALG04V2_138` — **Nếu \(P(x)=(x-3)(x^2+2x+1)\), thì \(P(x):(x-3)\) bằng:**  
  Options: \(x^2+2x+1\) | \(x^2-2x+1\) | \(x-3\) | \(x^3-x^2-5x-3\)  
  Correct option index: `0`  
  Explanation: Vì \(P(x)\) đã được viết dưới dạng tích của đa thức chia và thương, nên thương là \(x^2+2x+1\).


## 4. Required review questions

For **every group and every candidate item**, verify:

- mathematical correctness;
- exact Grade-7 KNTT scope against S1;
- wording, notation, answer key and explanation;
- whether the Learn card teaches the reviewed bottleneck directly;
- whether Micro questions diagnose the intended misconception/procedure rather than duplicate Practice;
- whether Practice has enough variety without quota inflation;
- whether distractors are mathematically plausible and unambiguous;
- whether Bài 1–3 preserves rational-number operation rules and sign/order-of-operation discipline;
- whether Bài 5–7 keeps `√a` as the nonnegative arithmetic square root and distinguishes rational vs irrational correctly;
- whether Bài 26–28 teaches the Grade-7 method of polynomial division without importing unsupported later-grade theory;
- whether existing canonical skill IDs are reused exactly and no new skill is implied.

## 5. Required machine-checkable output

Return this block **first**:

```text
PACKET|MATH-KNTT-G7-REPAIR-W1-R1-20261008
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_GROUPS|3
REVIEWED_GROUPS|3
GROUP|BAI1_3|PASS|REVISE|BLOCK|<SHORT_REASON>
LEARN|BAI1_3|1|PASS|REVISE|<SHORT_REASON>
MICRO|BAI1_3|4|PASS|REVISE|<SHORT_REASON>
PRACTICE|BAI1_3|6|PASS|REVISE|<SHORT_REASON>
GROUP|BAI5_7|PASS|REVISE|BLOCK|<SHORT_REASON>
LEARN|BAI5_7|1|PASS|REVISE|<SHORT_REASON>
MICRO|BAI5_7|4|PASS|REVISE|<SHORT_REASON>
PRACTICE|BAI5_7|6|PASS|REVISE|<SHORT_REASON>
GROUP|BAI26_28|PASS|REVISE|BLOCK|<SHORT_REASON>
LEARN|BAI26_28|1|PASS|REVISE|<SHORT_REASON>
MICRO|BAI26_28|4|PASS|REVISE|<SHORT_REASON>
PRACTICE|BAI26_28|6|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_WRITTEN|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_READINESS|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_NEW_CANONICAL_SKILL|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_LATER_GRADE_RADICAL_ALGEBRA|PASS|REVISE|<SHORT_REASON>
BOUNDARY|G7_POLYNOMIAL_DIVISION_SCOPE|PASS|REVISE|<SHORT_REASON>
CONTENT_COUNTS|LEARN=3|MICRO=12|PRACTICE=18
MISSING_GROUPS|NONE|<GROUPS>
MISSING_DECISIONS|NONE|<IDS_OR_CHECKS>
CLEARANCE|G7_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE
```

Then provide concise academic reasoning and exact corrections for every REVISE/BLOCK.

Do **not** issue the clearance unless all 3 groups, all 33 candidate content units, and all 5 boundaries are materially reviewed and PASS.

## 6. Protected release boundary

A PASS is an academic content gate only. Reconciliation and exact-head repository QA are still required before merge/deploy. No learner history, Mastery, Readiness, Written Library or runtime taxonomy changes are authorized.
