# NotebookLM Review Packet — Grade 7 Repair Wave 2 R1

**packet_id:** `MATH-KNTT-G7-REPAIR-W2-R1-20261008`  
**scope:** Independent academic content review of the already-authorized Grade-7 Repair Wave 2 candidate  
**release boundary:** CONTENT REVIEW ONLY — do not merge/deploy from this packet alone

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 7, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 7, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 7 Repair Wave 2 R1**

This is exactly **2 permanent + 2 Grade-7 SGK + 1 temporary packet = 5 selected Sources**.

Do not add the scope receipt, candidate artifact JSON, Written Exercise Library Contract, older packets, or repository files as extra NotebookLM Sources. All candidate content needed for review is embedded below.

## 2. Prior authorization already closed

Scope review is already independently PASS:

- packet: `MATH-KNTT-G7-REPAIR-WAVE2-SCOPE-R1-20261008`
- clearance: `G7_REPAIR_WAVE2_SCOPE_R1_REVIEW_COMPLETE`
- authorized groups:
  - `BAI4` → `LEARN;MICRO`
  - `BAI18_19` → `MICRO`
  - `BAI22_23` → `LEARN;MICRO`
- `BAI8` remains deferred
- `BAI24_25` remains DEFER/NONE
- no Practice expansion
- no Written expansion
- no Readiness expansion
- no new canonical skills
- `quy-tac-chuyen-ve` remains lesson-local

Do not reopen the scope unless candidate content violates it.

## 3. Candidate counts

```text
LEARN=2
MICRO=12
PRACTICE=0
WRITTEN=0
READINESS=0
NEW_CANONICAL_SKILLS=0
```

## 4. Candidate A — BAI4 · Bài 4

Authorized dimensions: **Learn + Micro only**.

Canonical skill: `thu-tu-phep-tinh`.  
Lesson-local technique: `quy-tac-chuyen-ve` — must remain lesson-local.

### Learn card `num02-g7-core-3`

- Title: Thứ tự phép tính và quy tắc chuyển vế
- KNTT: Lớp 7 · Bài 4
- Skills: `thu-tu-phep-tinh`
- Prerequisites: `phep-tinh-so-huu-ti`
- Key idea: Khi tính biểu thức số hữu tỉ, thực hiện theo thứ tự: trong ngoặc trước; lũy thừa; nhân và chia; cuối cùng cộng và trừ. Với một đẳng thức có số chưa biết, có thể dùng quy tắc chuyển vế như một kỹ thuật biến đổi: chuyển một số hạng từ vế này sang vế kia thì đổi dấu số hạng đó, sau đó thực hiện phép tính để tìm giá trị chưa biết.
- Worked example: Tính A = 3/4 - 1/2 × (2/3) và tìm x biết x - 3/5 = 7/10.
- Worked solution: Với A, tính phép nhân trước: 1/2 × 2/3 = 1/3, nên A = 3/4 - 1/3 = 5/12. Với x - 3/5 = 7/10, chuyển -3/5 sang vế phải thành +3/5: x = 7/10 + 3/5 = 13/10.
- Misconception guard: Không tính lần lượt từ trái sang phải khi biểu thức có nhiều loại phép tính. Khi chuyển vế, phải đổi dấu đúng số hạng được chuyển; không được đổi dấu cả hai vế hay tự ý đổi dấu những số hạng không chuyển.
- Summary: Xác định đúng thứ tự phép tính; khi tìm số chưa biết, dùng chuyển vế như một kỹ thuật biến đổi đẳng thức và luôn kiểm tra lại kết quả trong phương trình ban đầu.


#### `NUM02MICRO_061` · base

**Question:** Tính \(\frac34-\frac12\cdot\frac23\).

Options:
0. \(\frac5{12}\) ← correct
1. \(\frac16\)
2. \(\frac14\)
3. \(\frac1{12}\)

**Explanation:** Thực hiện phép nhân trước: \(\frac12\cdot\frac23=\frac13\). Sau đó \(\frac34-\frac13=\frac9{12}-\frac4{12}=\frac5{12}\).

**Skill:** `thu-tu-phep-tinh`  
**Type:** `thu-tu-phep-tinh`  
**Grade:** 7 · **Lesson:** Bài 4

#### `NUM02MICRO_062` · trap

**Question:** Tính \(\left(-\frac12\right)^2+\frac34\).

Options:
0. \(1\) ← correct
1. \(\frac12\)
2. \(-\frac12\)
3. \(\frac54\)

**Explanation:** Lũy thừa được thực hiện trước: \((-1/2)^2=1/4\). Do đó \(1/4+3/4=1\).

**Skill:** `thu-tu-phep-tinh`  
**Type:** `thu-tu-phep-tinh`  
**Grade:** 7 · **Lesson:** Bài 4

#### `NUM02MICRO_063` · apply

**Question:** Tìm \(x\) biết \(x-\frac35=\frac7{10}\).

Options:
0. \(\frac{13}{10}\) ← correct
1. \(\frac1{10}\)
2. \(-\frac1{10}\)
3. \(\frac{11}{10}\)

**Explanation:** Chuyển \(-3/5\) sang vế phải thành \(+3/5\): \(x=7/10+3/5=7/10+6/10=13/10\).

**Skill:** `thu-tu-phep-tinh`  
**Type:** `quy-tac-chuyen-ve`  
**Grade:** 7 · **Lesson:** Bài 4

#### `NUM02MICRO_064` · coverage

**Question:** Từ \(-\frac23+x=\frac16\), phép biến đổi nào đúng để tìm \(x\)?

Options:
0. \(x=\frac16+\frac23\) ← correct
1. \(x=\frac16-\frac23\)
2. \(x=-\frac16+\frac23\)
3. \(x=-\frac16-\frac23\)

**Explanation:** Chuyển \(-2/3\) sang vế phải thì đổi dấu thành \(+2/3\), nên \(x=1/6+2/3=5/6\).

**Skill:** `thu-tu-phep-tinh`  
**Type:** `quy-tac-chuyen-ve`  
**Grade:** 7 · **Lesson:** Bài 4


Review focus:
- Grade-7 order-of-operations scope;
- correct use of transposition as a lesson-local technique;
- mathematical correctness of all rational calculations;
- no hidden promotion of `quy-tac-chuyen-ve` into a canonical skill.

## 5. Candidate B — BAI18_19 · Bài 18–19

Authorized dimension: **Micro only**.

Existing Learn/Practice remain unchanged. The repair must target only `chuyen-bang-bieu-do`.

#### `STA21MICRO_021` · base

**Question:** Bảng ghi nhiệt độ lúc 6 giờ, 9 giờ, 12 giờ lần lượt là 20°C, 24°C, 29°C. Khi chuyển sang biểu đồ đoạn thẳng, ba điểm dữ liệu đúng là:

Options:
0. (6;20), (9;24), (12;29) ← correct
1. (20;6), (24;9), (29;12)
2. (6;24), (9;29), (12;20)
3. (6;20), (9;29), (12;24)

**Explanation:** Trục ngang biểu diễn thời gian và trục đứng biểu diễn nhiệt độ, nên ba điểm phải là (6;20), (9;24), (12;29).

**Skill:** `chuyen-bang-bieu-do`  
**Type:** `chuyen-bang-sang-doan-thang`  
**Grade:** 7 · **Lesson:** Bài 18-19

#### `STA21MICRO_022` · trap

**Question:** Một bảng cơ cấu có bốn nhóm chiếm lần lượt 25%, 35%, 20%, 20%. Khi vẽ biểu đồ quạt tròn, góc ở tâm của nhóm 25% phải bằng:

Options:
0. 90° ← correct
1. 25°
2. 72°
3. 120°

**Explanation:** Góc ở tâm bằng tỉ lệ phần trăm nhân 360°. Với 25%: 0,25 × 360° = 90°.

**Skill:** `chuyen-bang-bieu-do`  
**Type:** `chuyen-bang-sang-quat-tron`  
**Grade:** 7 · **Lesson:** Bài 19

#### `STA21MICRO_023` · apply

**Question:** Bảng số liệu cho bốn tổ có 12, 18, 9, 15 học sinh tham gia câu lạc bộ. Vẽ biểu đồ cột với mỗi vạch trên trục đứng ứng với 3 học sinh. Chiều cao bốn cột lần lượt là:

Options:
0. 4, 6, 3, 5 vạch ← correct
1. 3, 6, 4, 5 vạch
2. 4, 5, 3, 6 vạch
3. 12, 18, 9, 15 vạch

**Explanation:** Chia mỗi số liệu cho 3: 12/3=4; 18/3=6; 9/3=3; 15/3=5. Vì vậy chiều cao là 4, 6, 3, 5 vạch.

**Skill:** `chuyen-bang-bieu-do`  
**Type:** `chuyen-bang-sang-cot`  
**Grade:** 7 · **Lesson:** Bài 18-19

#### `STA21MICRO_024` · coverage

**Question:** Khảo sát 200 học sinh cho bốn lựa chọn A, B, C, D với số lượng lần lượt 80, 60, 40, 20. Nếu biểu diễn bằng biểu đồ quạt tròn, các góc ở tâm tương ứng là:

Options:
0. 144°, 108°, 72°, 36° ← correct
1. 80°, 60°, 40°, 20°
2. 120°, 90°, 60°, 30°
3. 160°, 120°, 80°, 40°

**Explanation:** Các tỉ lệ là 40%, 30%, 20%, 10%. Nhân lần lượt với 360° được 144°, 108°, 72°, 36°.

**Skill:** `chuyen-bang-bieu-do`  
**Type:** `chuyen-bang-sang-quat-tron`  
**Grade:** 7 · **Lesson:** Bài 19


Review focus:
- correct conversion from table values to line/bar/pie representations;
- correct percentage-to-angle calculations;
- no unnecessary Learn or Practice expansion;
- suitability for Grade 7 KNTT.

## 6. Candidate C — BAI22_23 · Bài 22–23

Authorized dimensions: **Learn + Micro only**.

Canonical skill: `mo-hinh-ti-le`. Existing Practice already contains modelling evidence and must remain unchanged.

### Learn card `rat03-core-g7-6`

- Title: Mô hình hóa bài toán tỉ lệ thuận và tỉ lệ nghịch
- KNTT: Lớp 7 · Bài 22–23
- Skills: `mo-hinh-ti-le`
- Prerequisites: `ti-le-thuan`, `ti-le-nghich`, `phan-biet-thuan-nghich`
- Key idea: Khi giải bài toán về đại lượng tỉ lệ, trước hết xác định hai đại lượng và đơn vị, rồi quyết định quan hệ là tỉ lệ thuận hay tỉ lệ nghịch. Với tỉ lệ thuận, mô hình có dạng y = kx; với tỉ lệ nghịch, mô hình có dạng xy = a hay y = a/x. Tìm hệ số từ dữ liệu đã biết, dùng mô hình để tính giá trị cần tìm và kiểm tra xem kết quả có hợp lí với ngữ cảnh hay không.
- Worked example: a) 3 kg gạo giá 90 nghìn đồng. Lập mô hình giá y (nghìn đồng) theo khối lượng x (kg). b) Một công việc cần 24 giờ-người. Nếu có x người làm với cùng năng suất, thời gian y (giờ) được mô hình hóa thế nào?
- Worked solution: a) Giá và khối lượng tỉ lệ thuận: k = 90/3 = 30, nên y = 30x. b) Số người và thời gian tỉ lệ nghịch với tích không đổi 24, nên xy = 24 hay y = 24/x.
- Misconception guard: Không kết luận hai đại lượng tỉ lệ thuận chỉ vì chúng cùng tăng, hoặc tỉ lệ nghịch chỉ vì một đại lượng tăng còn đại lượng kia giảm. Phải kiểm tra tỉ số y/x không đổi đối với tỉ lệ thuận hoặc tích xy không đổi đối với tỉ lệ nghịch.
- Summary: Xác định loại quan hệ, lập công thức tỉ lệ, tìm hệ số từ dữ liệu, tính giá trị cần tìm và kiểm tra kết quả theo ngữ cảnh.


#### `RAT03MICRO_016` · base

**Question:** Ba ki-lô-gam gạo giá 90 nghìn đồng. Gọi \(x\) là khối lượng gạo (kg), \(y\) là số tiền (nghìn đồng). Mô hình tỉ lệ thuận đúng là:

Options:
0. \(y=30x\) ← correct
1. \(y=90x\)
2. \(xy=30\)
3. \(y=3x\)

**Explanation:** Hệ số tỉ lệ là \(k=90/3=30\). Vì giá tiền tỉ lệ thuận với khối lượng nên \(y=30x\).

**Skill:** `mo-hinh-ti-le`  
**Type:** `mo-hinh-ti-le-thuan`  
**Grade:** 7 · **Lesson:** Bài 22-23

#### `RAT03MICRO_017` · trap

**Question:** Một công việc cần tổng cộng 24 giờ-người. Nếu \(x\) người làm với cùng năng suất và hoàn thành trong \(y\) giờ, mô hình nào đúng?

Options:
0. \(xy=24\) ← correct
1. \(y=24x\)
2. \(x+y=24\)
3. \(y=x/24\)

**Explanation:** Số người tăng thì thời gian giảm sao cho tích số người × thời gian giữ nguyên bằng 24. Vì vậy \(xy=24\).

**Skill:** `mo-hinh-ti-le`  
**Type:** `mo-hinh-ti-le-nghich`  
**Grade:** 7 · **Lesson:** Bài 22-23

#### `RAT03MICRO_018` · apply

**Question:** Hai đại lượng \(x,y\) tỉ lệ thuận. Khi \(x=4\) thì \(y=10\). Khi \(x=14\), giá trị \(y\) là:

Options:
0. 35 ← correct
1. 24
2. 20
3. 5,6

**Explanation:** Từ \(y=kx\), có \(k=10/4=2,5\). Khi \(x=14\), \(y=2,5\times14=35\).

**Skill:** `mo-hinh-ti-le`  
**Type:** `ap-dung-mo-hinh-ti-le-thuan`  
**Grade:** 7 · **Lesson:** Bài 22-23

#### `RAT03MICRO_019` · coverage

**Question:** Hai đại lượng \(x,y\) có các cặp giá trị \((2,12),(3,8),(4,6)\). Mô hình phù hợp nhất là:

Options:
0. \(xy=24\) ← correct
1. \(y=6x\)
2. \(y=4x\)
3. \(x+y=14\)

**Explanation:** Các tích lần lượt là 24, 24, 24 nên hai đại lượng tỉ lệ nghịch với mô hình \(xy=24\).

**Skill:** `mo-hinh-ti-le`  
**Type:** `nhan-dang-mo-hinh-ti-le`  
**Grade:** 7 · **Lesson:** Bài 22-23


Review focus:
- correct distinction between direct and inverse proportion;
- correct models `y=kx` and `xy=a`;
- context/unit plausibility;
- no redundant Practice expansion;
- Grade-7 KNTT scope only.

## 7. Protected boundaries

Candidate review must preserve all of these:

- exactly 3 lesson groups;
- exactly 2 Learn cards;
- exactly 12 Micro items;
- exactly 0 new Practice items;
- exactly 0 Written items;
- exactly 0 Readiness items;
- exactly 0 new canonical skills;
- `quy-tac-chuyen-ve` remains lesson-local;
- no Mastery/Readiness semantic change;
- no learner-history regrade;
- no runtime taxonomy activation.

If any candidate question or Learn copy is mathematically wrong, misleading, outside Grade-7 scope, or pedagogically weak, return REVISION_REQUIRED and identify exact IDs.

## 8. Required machine-checkable output

Return this block **first**:

```text
PACKET|MATH-KNTT-G7-REPAIR-W2-R1-20261008
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_GROUPS|3
REVIEWED_GROUPS|3
GROUP|BAI4|PASS|REVISE|<SHORT_REASON>
LEARN|BAI4|1|PASS|REVISE|<SHORT_REASON>
MICRO|BAI4|4|PASS|REVISE|<SHORT_REASON>
GROUP|BAI18_19|PASS|REVISE|<SHORT_REASON>
LEARN|BAI18_19|0|PASS|REVISE|<SHORT_REASON>
MICRO|BAI18_19|4|PASS|REVISE|<SHORT_REASON>
GROUP|BAI22_23|PASS|REVISE|<SHORT_REASON>
LEARN|BAI22_23|1|PASS|REVISE|<SHORT_REASON>
MICRO|BAI22_23|4|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_PRACTICE|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_WRITTEN|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_READINESS|PASS|REVISE|<SHORT_REASON>
BOUNDARY|NO_NEW_CANONICAL_SKILL|PASS|REVISE|<SHORT_REASON>
BOUNDARY|TRANSPOSITION_LESSON_LOCAL|PASS|REVISE|<SHORT_REASON>
CONTENT_COUNTS|LEARN=2|MICRO=12|PRACTICE=0
MISSING_GROUPS|NONE|<GROUPS>
MISSING_DECISIONS|NONE|<ROWS>
CLEARANCE|G7_REPAIR_WAVE2_R1_CONTENT_REVIEW_COMPLETE
```

Then give concise reasoning and exact corrections by candidate ID if any.

Do **not** issue `G7_REPAIR_WAVE2_R1_CONTENT_REVIEW_COMPLETE` unless every Learn card, all 12 Micro items, all counts and all protected boundaries materially PASS.
