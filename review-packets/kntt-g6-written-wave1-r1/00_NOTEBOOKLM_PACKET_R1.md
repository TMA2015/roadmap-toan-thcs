# NotebookLM Review Packet — Grade 6 Written Wave 1 R1

**packet_id:** `MATH-KNTT-G6-WRITTEN-WAVE1-R1-20261007`  
**scope:** Independent academic review of exactly 3 new Grade-6 KNTT deep Written anchors for the reviewed Wave 1 priorities: Bài 27, Bài 20, and Bài 34–37  
**release boundary:** ACADEMIC REVIEW ONLY — do not merge, deploy, mutate the canonical Written Library, change Readiness/Mastery, or create new canonical skills from this packet alone

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 6 Written Wave 1 R1**

This follows the project invariant:

**2 permanent governance sources + 2 Grade-6 SGK sources + 1 temporary packet = 5 selected Sources total.**

Do **not** add `Written Exercise Library Contract v1` as a separate NotebookLM Source in this round. It remains a durable Project Source, but the current Master Plan, NotebookLM Rules, and this packet already carry the relevant Written-library boundaries.

Do not select older Wave packets, old Master Plans, previous placement/gap packets, or unrelated Project Sources.

## 2. Why these 3 items exist

The prior reviewed packet `MATH-KNTT-G6-WRITTEN-GAP-PRIORITY-R1-20261007` passed with clearance `G6_WRITTEN_GAP_PRIORITY_R1_REVIEW_COMPLETE`.

It set Wave 1 to exactly these three high-value Written targets:

- **Bài 27 — Hai bài toán về phân số**
- **Bài 20 — Chu vi và diện tích một số tứ giác đã học**
- **Bài 34–37 — Đoạn thẳng, trung điểm, góc và số đo góc**

and bounded the wave at **MAX_NEW_ITEMS_WAVE1 = 3**.

This review checks the actual candidate item content. It must not expand the wave merely to increase counts.

## 3. Review contract

For each candidate, review:

1. mathematical correctness;
2. exact Grade-6 KNTT placement against S1;
3. whether the problem is a genuine full-process Written anchor rather than a dressed-up routine MCQ;
4. wording, ambiguity, units and conditions;
5. hint ladder quality and whether it leaks too much too early;
6. full solution logic;
7. method rationale;
8. rubric completeness and self-check suitability;
9. common mistakes and remediation;
10. structural distinctness from already-existing simple Micro/Practice items;
11. whether any requirement exceeds Grade-6 KNTT Core.

Do not require a new canonical skill merely because the Written item combines already-reviewed skills/problem types.

## 4. Candidate 1 — WX02-NUM-003

### Metadata

- **ID:** `WX02-NUM-003`
- **Topic:** CT02 — Số và phép tính
- **Layer:** KNTT-Core
- **Level:** CORE_APPLY
- **Proposed placement:** Grade 6 · Chapter 6 · **Bài 27 — Hai bài toán về phân số**
- **Reviewed lesson-local problem types:** `tim-gia-tri-phan-so-cua-so`; `tim-so-khi-biet-gia-tri-phan-so`
- **Canonical supporting skill:** `phep-tinh-phan-so`

### Title

**Biết một phần để tìm toàn bộ, rồi từ toàn bộ tìm tiếp một phần**

### Problem

Lớp 6A đặt mục tiêu quyên góp một số sách cho thư viện. Sau tuần thứ nhất, lớp đã quyên góp được **72 quyển**, bằng $\frac35$ số sách theo kế hoạch. Trong tuần thứ hai, lớp quyên góp thêm số sách bằng $\frac14$ số sách theo kế hoạch.

1. Tính số sách theo kế hoạch. Giải thích vì sao ở bước này phải **chia** $72$ cho $\frac35$.
2. Tính số sách lớp quyên góp thêm trong tuần thứ hai. Giải thích vì sao ở bước này lại **nhân** với $\frac14$.
3. Sau hai tuần, lớp còn thiếu bao nhiêu quyển để đạt kế hoạch?
4. Viết một phép tính khác để kiểm tra kết quả câu 3.

### Hint ladder

1. $72$ là **giá trị của $\frac35$ số sách theo kế hoạch**, còn tổng số sách theo kế hoạch chưa biết. Đây là dạng tìm số ban đầu khi biết một phân số của nó.
2. Muốn tìm toàn bộ kế hoạch, tính $72\div\frac35$. Sau khi đã biết toàn bộ, tuần thứ hai là $\frac14$ **của số đã biết**, nên dùng phép nhân.
3. Sau hai tuần, có thể kiểm tra bằng cách cộng hai phần đã quyên góp: $\frac35+\frac14$, rồi tìm phần còn thiếu của kế hoạch.

### Full solution

Vì $72$ quyển bằng $\frac35$ số sách theo kế hoạch nên số sách theo kế hoạch là

$$72\div\frac35=72\cdot\frac53=120\text{ (quyển)}.$$

Ở câu 1 phải **chia cho $\frac35$** vì ta đã biết giá trị của một phần bằng $\frac35$ của toàn bộ và cần tìm lại toàn bộ.

Tuần thứ hai bằng $\frac14$ của kế hoạch đã biết là $120$ quyển:

$$120\cdot\frac14=30\text{ (quyển)}.$$

Sau hai tuần:

$$72+30=102\text{ (quyển)}.$$

Còn thiếu:

$$120-102=18\text{ (quyển)}.$$

Kiểm tra:

$$\frac35+\frac14=\frac{17}{20},\qquad 1-\frac{17}{20}=\frac3{20},$$

$$120\cdot\frac3{20}=18\text{ (quyển)}.$$

### Why this method

The item must reveal whether the learner distinguishes:

- **known whole → find a fraction of it**: multiply;
- **known fractional value → recover the whole**: divide by the fraction.

The key Written value is the explanation of *why the operation changes*, not just arithmetic.

### Rubric — 5 points

1. Correctly identifies part 1 as “find the whole from a known fractional value” and explains division. — 1
2. Correctly gets 120 books. — 1
3. Correctly identifies part 2 as “find a fraction of a known whole” and gets 30 books. — 1
4. Correctly gets 18 books remaining. — 1
5. Gives a valid independent check, e.g. via $17/20$ collected or $3/20$ remaining. — 1

### Common mistakes

- Compute $72\cdot\frac35$ in part 1 just because a fraction appears.
- Take $\frac14$ of 72 or of the remainder, although the problem says $\frac14$ of the plan.
- Add $\frac35+\frac14$ without a common denominator.
- Give numbers without explaining why one step uses division and the next uses multiplication.

### Remediation

Return to Grade-6 fraction operations and ask “Do I already know the whole?” before choosing multiply/divide.

---

## 5. Candidate 2 — WX20-GEO-003

### Metadata

- **ID:** `WX20-GEO-003`
- **Topic:** CT20 — Hình học tổng hợp, đo lường và hình khối
- **Layer:** KNTT-Core
- **Level:** CORE_APPLY
- **Proposed placement:** Grade 6 · Chapter 4 · **Bài 20 — Chu vi và diện tích một số tứ giác đã học**
- **Targets:** `chu-vi-tu-giac`, `dien-tich-tu-giac`, `do-luong-thuc-te`

### Title

**Rào quanh sân hay phủ kín mặt sân: đừng dùng nhầm công thức**

### Problem

Một khoảng sân hình chữ nhật dài **28 m**, rộng **1800 cm**. Trên một cạnh sân có một cổng rộng **4 m**.

Nhà trường dự định:
- căng dây một vòng quanh mép sân, **trừ chỗ cổng**;
- lát kín toàn bộ mặt sân bằng các tấm vật liệu, theo định mức lý thuyết **1 tấm phủ được $6\text{ m}^2$**, bỏ qua phần hao hụt.

1. Đổi chiều rộng của sân về mét.
2. Tính chiều dài dây cần dùng. Nêu rõ vì sao bài này dùng **chu vi**.
3. Tính diện tích mặt sân. Nêu rõ vì sao bài này dùng **diện tích**.
4. Theo định mức trên, cần bao nhiêu tấm vật liệu để phủ kín sân?
5. Một bạn nói: “Cả câu 2 và câu 3 đều nói về cùng một cái sân nên chỉ cần dùng cùng một phép tính.” Hãy giải thích vì sao nhận xét đó sai.

### Hint ladder

1. Đưa $1800\text{ cm}$ về cùng đơn vị với $28\text{ m}$ trước khi dùng công thức.
2. Dây đi **quanh biên** nên bắt đầu từ chu vi hình chữ nhật rồi trừ phần cổng. Vật liệu phủ **mặt sân** nên dùng diện tích.
3. Sau khi có diện tích theo $\text{m}^2$, chia cho $6\text{ m}^2$ mỗi tấm. Kiểm tra đơn vị: dây là mét, phần phủ là mét vuông.

### Full solution

$$1800\text{ cm}=18\text{ m}.$$

Chu vi sân:

$$2(28+18)=92\text{ m}.$$

Trừ cổng:

$$92-4=88\text{ m}.$$

Dùng chu vi vì dây nằm dọc **đường biên**.

Diện tích sân:

$$28\cdot18=504\text{ m}^2.$$

Dùng diện tích vì vật liệu phủ **phần mặt**.

Số tấm vật liệu:

$$504:6=84\text{ (tấm)}.$$

Hai yêu cầu không dùng cùng phép tính vì chúng đo hai đại lượng khác nhau: độ dài quanh biên (m) và độ lớn phần mặt ($\text{m}^2$).

### Why this method

The Written bottleneck is not formula recall alone. The learner must first distinguish **boundary vs surface** and unify units. The explanation and units are essential evidence.

### Rubric — 5 points

1. Converts $1800\text{ cm}=18\text{ m}$. — 1
2. Computes 92 m perimeter, subtracts the 4 m gate and concludes 88 m wire; explains boundary logic. — 1
3. Computes $504\text{ m}^2$ and explains surface-area logic. — 1
4. Computes 84 material pieces from the stated theoretical coverage. — 1
5. Correctly distinguishes m from $\text{m}^2$ and explains why the two tasks use different operations. — 1

### Common mistakes

- Mix 28 m and 1800 cm without conversion.
- Use $28\cdot18$ for the wire.
- Forget the 4 m gate.
- Write m for area or $\text{m}^2$ for wire length.
- Divide 88 by 6 because the wrong quantity was selected.

### Remediation

Return to the distinction “quanh biên hay phủ mặt?” and practise one rectangle with separate perimeter and area questions.

---

## 6. Candidate 3 — WX13-LIN-003

### Metadata

- **ID:** `WX13-LIN-003`
- **Topic:** CT13 — Góc và đường thẳng
- **Layer:** KNTT-Core
- **Level:** CORE_APPLY
- **Proposed placements:**
  - Grade 6 · Chapter 8 · **Bài 34–35 — Đoạn thẳng, độ dài đoạn thẳng, trung điểm**
  - Grade 6 · Chapter 8 · **Bài 36–37 — Góc, số đo góc và phân loại góc**
- **Targets:** `doan-thang-do-dai`, `trung-diem`, `khai-niem-goc`, `do-goc`, `phan-loai-goc`

### Title

**Vẽ đúng rồi mới tính: từ trung điểm đến số đo góc**

### Problem

Thực hiện trên giấy bằng thước thẳng và thước đo góc.

- Vẽ tia $Ox$.
- Trên tia $Ox$, lấy hai điểm $A,B$ sao cho $OA=4\text{ cm}$, $OB=10\text{ cm}$ và $A$ nằm giữa $O,B$.
- Gọi $M$ là trung điểm của đoạn $AB$.
- Tại $O$, vẽ tia $Oy$ sao cho $\angle xOy=120^\circ$.
- Vẽ tia $Oz$ nằm trong $\angle xOy$ sao cho $\angle xOz=35^\circ$.

1. Tính $AB$, $AM$, $MB$ và $OM$.
2. Nêu **đủ hai điều kiện** để khẳng định $M$ là trung điểm của $AB$.
3. Tính $\angle zOy$.
4. Phân loại ba góc $\angle xOz$, $\angle zOy$, $\angle xOy$.
5. Tự kiểm tra hình vẽ: các số đo và thứ tự điểm trên hình có phù hợp với kết quả tính không?

### Hint ladder

1. Vì $A$ nằm giữa $O$ và $B$, ta có $OB=OA+AB$. Tìm $AB$ trước.
2. Trung điểm cần **hai điều kiện**: nằm giữa hai đầu mút và hai đoạn hai bên bằng nhau. Từ $AB$ tìm $AM=MB$.
3. Vì $Oz$ nằm trong $\angle xOy$, ta có $\angle xOz+\angle zOy=\angle xOy$. Sau đó so sánh với $90^\circ$ và $180^\circ$ để phân loại.

### Full solution

Vì $A$ nằm giữa $O$ và $B$:

$$AB=OB-OA=10-4=6\text{ cm}.$$

Vì $M$ là trung điểm của $AB$:

$$AM=MB=\frac{AB}{2}=3\text{ cm}.$$

Theo thứ tự $O,A,M,B$:

$$OM=OA+AM=4+3=7\text{ cm}.$$

Hai điều kiện đầy đủ để $M$ là trung điểm của $AB$:
1. $M$ nằm giữa $A$ và $B$;
2. $AM=MB$.

Vì $Oz$ nằm trong $\angle xOy$:

$$\angle zOy=120^\circ-35^\circ=85^\circ.$$

Phân loại:
- $35^\circ$: góc nhọn;
- $85^\circ$: góc nhọn;
- $120^\circ$: góc tù.

Hình tự kiểm tra phải cho thứ tự $O,A,M,B$ trên cùng tia; $M$ nằm giữa $A,B$; $Oz$ nằm trong $\angle xOy$.

### Why this method

The task intentionally requires position information before arithmetic. Segment addition/subtraction is justified by “lies between”; midpoint requires both position and equal lengths; angle subtraction is justified only because $Oz$ is inside $\angle xOy$.

### Rubric — 5 points

1. Draws and labels a coherent figure with $O,A,M,B$ in the intended order and rays $Oy,Oz$ consistent with the given angles. — 1
2. Correctly gets $AB=6$ cm, $AM=MB=3$ cm, $OM=7$ cm. — 1
3. States both midpoint conditions. — 1
4. Correctly gets $\angle zOy=85^\circ$ and cites the inside-ray condition. — 1
5. Correctly classifies 35° and 85° as acute and 120° as obtuse, and self-checks the drawing. — 1

### Common mistakes

- Treat $AM=MB$ alone as sufficient for midpoint.
- Compute $AB=OA+OB$.
- Ignore point order when computing $OM$.
- Compute $120^\circ+35^\circ$ for $\angle zOy$.
- Classify $85^\circ$ as obtuse.

### Remediation

Review “point between”, “midpoint”, and angle addition when a ray lies inside an angle. Practise the segment and angle parts separately before recombining.

## 7. Cross-item architecture checks

Review all three candidates together.

Required checks:

- **ARCH_1:** exactly 3 candidates; no quota expansion.
- **ARCH_2:** IDs are new and stable; do not clone existing items.
- **ARCH_3:** each item has a genuine Written reasoning bottleneck beyond routine final-answer practice.
- **ARCH_4:** each proposed KNTT placement is S1-supported.
- **ARCH_5:** no candidate introduces a new canonical skill.
- **ARCH_6:** hints are progressive and do not reveal the full solution immediately.
- **ARCH_7:** solutions, rationale, rubric, mistakes and remediation are internally consistent.
- **ARCH_8:** self-check remains formative; no Readiness/Mastery credit.
- **ARCH_9:** candidate 3 may have two placements only if the whole task genuinely and materially assesses both Bài 34–35 and Bài 36–37. If not, require a precise revision/split.
- **ARCH_10:** wording and contexts are age-appropriate and mathematically unambiguous.

## 8. Required machine-checkable output

Return this block **first**:

```text
PACKET|MATH-KNTT-G6-WRITTEN-WAVE1-R1-20261007
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_ITEMS|3
REVIEWED_ITEMS|3
ITEM|WX02-NUM-003|PASS|REVISE|BLOCK|<SHORT_REASON>
PLACEMENT|WX02-NUM-003|BAI27|PASS|REVISE|<SHORT_REASON>
ITEM|WX20-GEO-003|PASS|REVISE|BLOCK|<SHORT_REASON>
PLACEMENT|WX20-GEO-003|BAI20|PASS|REVISE|<SHORT_REASON>
ITEM|WX13-LIN-003|PASS|REVISE|BLOCK|<SHORT_REASON>
PLACEMENT|WX13-LIN-003|BAI34_35|PASS|REVISE|<SHORT_REASON>
PLACEMENT|WX13-LIN-003|BAI36_37|PASS|REVISE|<SHORT_REASON>
ARCH_1|PASS|REVISE|<SHORT_REASON>
ARCH_2|PASS|REVISE|<SHORT_REASON>
ARCH_3|PASS|REVISE|<SHORT_REASON>
ARCH_4|PASS|REVISE|<SHORT_REASON>
ARCH_5|PASS|REVISE|<SHORT_REASON>
ARCH_6|PASS|REVISE|<SHORT_REASON>
ARCH_7|PASS|REVISE|<SHORT_REASON>
ARCH_8|PASS|REVISE|<SHORT_REASON>
ARCH_9|PASS|REVISE|<SHORT_REASON>
ARCH_10|PASS|REVISE|<SHORT_REASON>
MISSING_IDS|NONE|<IDS>
DUPLICATE_IDS|NONE|<IDS>
UNEXPECTED_IDS|NONE|<IDS>
CLEARANCE|G6_WRITTEN_WAVE1_R1_CONTENT_REVIEW_COMPLETE
```

Then give concise item-level reasoning and exact corrections for every REVISE/BLOCK.

Do **not** issue the clearance string unless all 3 expected IDs and all 4 placement lines were materially reviewed and all architecture checks are PASS.

## 9. Protected boundaries

This review does not authorize:
- production merge/deploy;
- appending candidates to the canonical Written Library before reconciliation;
- changing any historical Written item;
- creating a new canonical skill;
- changing Practice evidence;
- changing Readiness/Mastery;
- regrading learner history;
- activating a runtime taxonomy.
