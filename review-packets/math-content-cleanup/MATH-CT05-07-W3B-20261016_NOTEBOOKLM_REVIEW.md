# NotebookLM Independent Source-Placement Review — MATH-CT05-07-W3B-20261016

**packet_id:** `MATH-CT05-07-W3B-20261016`  
**scope:** exactly 14 historical paper-source items (**CT05, CT06**).  
**status:** CANDIDATE_REVIEW · **NOT APPROVED · NOT DEPLOYED**. W3A placement review covers a DIFFERENT 12 IDs and does not approve this batch. W3C (other 14 IDs) remains pending, with no duplicate scope.

## 1. Required reviewer source selection

Keep permanent NotebookLM Math Review Rules v1.2, current Master Plan v1.2.1 and applicable Golden Architecture / Academic Source & Depth / Written Library Contract. Use **only this Markdown file** as the current temporary source; deselect obsolete batch packets to avoid cross-batch confusion. Add official KNTT SGK Toán 8 (S1) already available to the Notebook if needed. Do not infer grade/chapter/page from program-authored bank counts or from this packet; if S1 is absent, return INSUFFICIENT_EVIDENCE for S1 placement.

## 2. Source SHA and exact batch ID list

- `CT05` source `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md`, Git blob SHA `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`, existing interactive bank manifest `05-7-hang-dang-thuc-v1.manifest.json` (120 questions).
- `CT06` source `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md`, Git blob SHA `00e983516ba2025b2bec54d506462553e4ca9647`, existing interactive bank manifest `06-phan-tich-da-thuc-v1.manifest.json` (120 questions).

1. `05-WR-03`
2. `05-WR-04`
3. `05-WR-06`
4. `05-WR-07`
5. `05-WR-08`
6. `05-WR-09`
7. `05-WR-10`
8. `05-ENT-02`
9. `05-CH-01`
10. `06-WR-01`
11. `06-WR-04`
12. `06-WR-05`
13. `06-WR-06`
14. `06-WR-07`

## 3. Academic review instruction

For **each ID** verify: (1) math conditions, ambiguity, solution and proof, (2) cognitive structure independent of coefficient changes, (3) duplication vs canonical Core Micro, 120-question Practice and approved Written Library, (4) learning-role choice: `REUSE_CORE`, `CONVERT_INTERACTIVE`, `KEEP_WRITTEN`, `ARCHIVE_DUPLICATE`, or `INSUFFICIENT_EVIDENCE`, (5) S1-KNTT grade/layer vs Entrance10 and Challenge, (6) student misconceptions and remediation value.

An exact expression in existing MCQ does NOT mean a new written explanation is redundant; likewise common `source_refs` does NOT mean identical tasks. If written work is proposed, specify canonical WX reuse vs a genuinely distinct paper task, and a brief minimal rubric. If converting to interactive, propose an answer contract **compatible with actual runtime**; plain mathematical expression checking is not assumed available. Do not grant Core Readiness from old paper self-check results. Cite S1 evidence separately; do not claim authentic exam frequency without S3 corpus.

## 4. Existing Core context (authored, not independent S1)

### Existing Core reference — CT05

id05-core-1: Bình phương tổng & hiệu; `KNTT-Core`; Bình phương một tổng: \((A+B)^2=A^2+2AB+B^2\); bình phương một hiệu: \((A-B)^2=A^2-2AB+B^2\). Khi nhận dạng ngược, kiểm tra đủ hai bình phương và hạng tử giữa \(\pm2AB\); không chỉ nhìn hạng tử đầu/cuối.
id05-core-2: Hiệu hai bình phương; `KNTT-Core`; Hiệu hai bình phương: \(A^2-B^2=(A-B)(A+B)\). Xác định chính xác \(A\), \(B\), kể cả khi chúng là đơn thức hoặc biểu thức; không áp dụng công thức này cho tổng \(A^2+B^2\).
id05-core-3: Lập phương tổng & hiệu; `KNTT-Core`; Lập phương tổng: \((A+B)^3=A^3+3A^2B+3AB^2+B^3\). Lập phương hiệu: \((A-B)^3=A^3-3A^2B+3AB^2-B^3\). Nhận dạng ngược cần đủ bốn hạng tử theo hệ số \(1,3,3,1\); chú ý dấu \(+,-,+,-\) với lập phương hiệu.
id05-core-4: Tổng & hiệu hai lập phương; `KNTT-Core`; Tổng hai lập phương: \(A^3+B^3=(A+B)(A^2-AB+B^2)\). Hiệu hai lập phương: \(A^3-B^3=(A-B)(A^2+AB+B^2)\). Ngoặc thứ nhất giữ dấu của đề; dấu của tích \(AB\) trong ngoặc thứ hai là dấu ngược lại.
id05-core-5: Nhận dạng & vận dụng; `KNTT-Core`; Chọn hằng đẳng thức từ cấu trúc của biểu thức, không chỉ từ số lượng hạng tử. Có thể dùng công thức xuôi để khai triển, ngược để nhận dạng hoặc hiệu hai bình phương để tính nhanh. Sau biến đổi, thử nhân trở lại để kiểm tra.

### Existing Core reference — CT06

fac06-core-1: Đặt nhân tử chung; `KNTT-Core`; Đặt nhân tử chung bằng cách tìm ước chung của hệ số và phần biến với số mũ nhỏ nhất. Nếu có hai ngoặc đối nhau, nhớ \(a-b=-(b-a)\) để đổi dấu rồi mới nhóm thành nhân tử chung.
fac06-core-2: Dùng hằng đẳng thức; `KNTT-Core`; Muốn dùng hằng đẳng thức để phân tích, nhận diện \(A,B\) trước. Các mẫu thường dùng: \(A^2-B^2=(A-B)(A+B)\); \(A^2\pm2AB+B^2=(A\pm B)^2\); \(A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2)\) với dấu được chọn nhất quán.
fac06-core-3: Nhóm hạng tử; `KNTT-Core`; Khi không có nhân tử chung cho toàn bộ đa thức, thử nhóm các hạng tử sao cho sau khi đặt nhân tử chung từng nhóm, các nhóm còn lại có cùng một ngoặc. Có thể đổi thứ tự hạng tử nhưng không được tự đổi dấu.
fac06-core-4: Phối hợp nhiều phương pháp; `KNTT-Core`; Một biểu thức có thể cần nhiều phương pháp. Ưu tiên tìm nhân tử chung trước; sau đó quan sát hằng đẳng thức hoặc nhóm, rồi kiểm tra có phân tích tiếp được không. Không dùng kỹ thuật tách hạng tử giữa hoặc giải phương trình tích để tính là KNTT Core của chặng này.
fac06-core-5: Kiểm tra & chọn phương pháp; `KNTT-Core`; Để chọn cách phân tích, xét nhân tử chung trước rồi nhận dạng hằng đẳng thức hoặc nhóm; kết quả phải là tích và phải đúng khi nhân ngược. Nếu đề yêu cầu phân tích hoàn toàn theo các phương pháp đã học, không được dừng khi còn nhân tử có thể phân tích tiếp.

## 5. Full source exercise evidence, current WX/MCQ candidates

### 05-WR-03

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-03 · Bình phương hoàn chỉnh

Viết \(x^2+8x+16\) dưới dạng bình phương.

??? tip "Gợi ý"
    \(16=4^2\) và \(8x=2\cdot x\cdot4\).

??? example "Xem lời giải"
    \[
    x^2+8x+16=(x+4)^2.
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** `WX05-IDN-001`.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-04

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-04 · Hiệu hai bình phương

Phân tích \(25x^2-9y^2\) thành tích.

??? tip "Gợi ý"
    \(25x^2=(5x)^2\), \(9y^2=(3y)^2\).

??? example "Xem lời giải"
    \[
    25x^2-9y^2=(5x-3y)(5x+3y).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** `WX05-IDN-002`.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-06

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-06 · Lập phương một hiệu

Khai triển \((x-3)^3\).

??? tip "Gợi ý"
    Dấu lần lượt là \(+,-,+,-\).

??? example "Xem lời giải"
    \[
    (x-3)^3=x^3-9x^2+27x-27.
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-07

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-07 · Tổng hai lập phương

Phân tích \(x^3+64\).

??? tip "Gợi ý"
    \(64=4^3\).

??? example "Xem lời giải"
    \[
    x^3+64=(x+4)(x^2-4x+16).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-08

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-08 · Hiệu hai lập phương

Phân tích \(8x^3-27\).

??? tip "Gợi ý"
    \(8x^3=(2x)^3\), \(27=3^3\).

??? example "Xem lời giải"
    \[
    8x^3-27=(2x-3)(4x^2+6x+9).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-09

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-09 · Tính nhanh

Tính nhanh \(101^2\).

??? tip "Gợi ý"
    Viết \(101=100+1\).

??? example "Xem lời giải"
    \[
    101^2=10000+200+1=10201.
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-WR-10

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-WR-10 · Rút gọn bằng cấu trúc

Rút gọn \((x+3)^2-(x-3)^2\).

??? tip "Gợi ý"
    Xem hai bình phương như \(A^2-B^2\).

??? example "Xem lời giải"
    \[
    [(x+3)-(x-3)]\,[(x+3)+(x-3)]=6\cdot2x=12x.
    \]

### Entrance10 / Extension

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** `WX05-IDN-002`.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-ENT-02

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-ENT-02 · Dùng dữ kiện tổng và tích

Cho \(x+y=10\), \(xy=21\). Tính \(x^2+y^2\).

??? tip "Gợi ý"
    Dùng \((x+y)^2=x^2+2xy+y^2\).

??? example "Xem lời giải"
    \[
    x^2+y^2=10^2-2\cdot21=58.
    \]

### Challenge

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 05-CH-01

**Source:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; **topic:** CT05.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 05-CH-01 · Đẳng thức ba biến

Biết \(a+b+c=0\). Chứng minh \(a^3+b^3+c^3=3abc\).

??? tip "Gợi ý"
    Thay \(c=-(a+b)\) rồi khai triển.

??? example "Xem lời giải"
    \[
    a^3+b^3-(a+b)^3=-3ab(a+b)=3abc
    \]
    vì \(c=-(a+b)\).

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 06-WR-01

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`; **topic:** CT06.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 06-WR-01 · Đặt nhân tử chung

Phân tích \(6x^2+9x\) bằng nhân tử chung lớn nhất.

??? tip "Gợi ý"
    Tìm ƯCLN của 6 và 9, rồi phần biến chung lớn nhất.

??? example "Xem lời giải"
    \[
    6x^2+9x=3x(2x+3).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** `WX06-FAC-001`.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 06-WR-04

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`; **topic:** CT06.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 06-WR-04 · Bình phương hoàn chỉnh rồi hiệu hai bình phương

Phân tích \(x^2+6x+9-y^2\).

??? tip "Gợi ý"
    Ba hạng tử đầu là \((x+3)^2\).

??? example "Xem lời giải"
    \[
    (x+3)^2-y^2=(x+3-y)(x+3+y).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 06-WR-05

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`; **topic:** CT06.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 06-WR-05 · Hiệu hai lập phương

Phân tích \(1-8x^3\).

??? tip "Gợi ý"
    \(8x^3=(2x)^3\).

??? example "Xem lời giải"
    \[
    1-8x^3=(1-2x)(1+2x+4x^2).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 06-WR-06

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`; **topic:** CT06.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 06-WR-06 · Nhóm hạng tử

Phân tích \(xy+3x+y+3\).

??? tip "Gợi ý"
    Nhóm theo \(x\) và phần còn lại để tạo \(y+3\).

??? example "Xem lời giải"
    \[
    x(y+3)+(y+3)=(x+1)(y+3).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** `WX06-FAC-002`.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

---

### 06-WR-07

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`; **topic:** CT06.

**Original authored prompt / hints / solution** (byte text excerpt, not editorially revised):

#### 06-WR-07 · Nhóm với nhân tử âm

Phân tích \(x^2-xy-2x+2y\).

??? tip "Gợi ý"
    Nhóm \(x(x-y)\) và đặt \(-2\) ở nhóm sau.

??? example "Xem lời giải"
    \[
    x(x-y)-2(x-y)=(x-2)(x-y).
    \]

**Canonical Written Library with source lineage (NOT necessarily exact mathematical duplicates):** None with explicit source_refs.

**MCQ same-expression candidates for structural inspection:**
  - Không có ứng viên **cùng biểu thức chính xác** được trích; điều này KHÔNG chứng minh ngân hàng không có bài cùng cấu trúc.

**Reviewer instruction:** Determine correctness, pedagogy, math structure, cognitive demand and whether Core/Practice/Written/Archive is warranted. Never decide solely from shared numbers or formula.

## 6. Already-approved canonical WX items referenced above

### Existing approved WX WX05-IDN-001

**Title:** Kiểm tra đủ hai bình phương và hạng tử giữa; academic status: `APPROVED` · canonical source refs: docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5.

**Problem:** Viết đa thức

$$x^2-10x+25$$

dưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.

**Solution steps:**
- Nhận hai bình phương: Ta có

$$x^2=(x)^2,\qquad 25=5^2.$$
- Kiểm tra hạng tử giữa: Hạng tử giữa là

$$-10x=-2\cdot x\cdot5,$$

đúng với mẫu $A^2-2AB+B^2$.
- Viết bình phương hoàn chỉnh: Vì vậy

$$x^2-10x+25=(x-5)^2.$$
- Khai triển ngược để kiểm tra: Ta có

$$(x-5)^2=x^2-10x+25,$$

trùng với đa thức ban đầu.

**Rubric:**
- {"criterion":"Nhận đúng $x^2$ và $25$ là hai bình phương.","points":1}
- {"criterion":"Kiểm tra đúng $-10x=-2\\cdot x\\cdot5$.","points":1}
- {"criterion":"Viết đúng $(x-5)^2$.","points":1}
- {"criterion":"Khai triển ngược đúng để kiểm tra.","points":1}

### Existing approved WX WX05-IDN-002

**Title:** Nhìn hai bình phương như A²−B² trước khi khai triển dài; academic status: `APPROVED` · canonical source refs: docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-04; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-10; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-2; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5.

**Problem:** Rút gọn

$$E=(2x+5)^2-(2x-5)^2$$

bằng cách nhận dạng cấu trúc hằng đẳng thức trước, không khai triển riêng từng bình phương.

**Solution steps:**
- Đặt cấu trúc A và B: Đặt

$$A=2x+5,\qquad B=2x-5.$$

Khi đó $E=A^2-B^2$.
- Dùng hiệu hai bình phương: Áp dụng

$$A^2-B^2=(A-B)(A+B).$$

Suy ra

$$E=[(2x+5)-(2x-5)]\,[(2x+5)+(2x-5)].$$
- Rút gọn hai nhân tử: Ta có

$$(2x+5)-(2x-5)=10,$$

$$(2x+5)+(2x-5)=4x.$$
- Kết luận: Do đó

$$\boxed{E=10\cdot4x=40x}.$$

**Rubric:**
- {"criterion":"Nhận đúng cấu trúc $A^2-B^2$.","points":1}
- {"criterion":"Áp dụng đúng $(A-B)(A+B)$.","points":1}
- {"criterion":"Rút gọn đúng hai nhân tử thành $10$ và $4x$.","points":1}
- {"criterion":"Kết luận đúng $E=40x$.","points":1}

### Existing approved WX WX06-FAC-001

**Title:** Nhìn hai ngoặc đối nhau trước khi đặt nhân tử; academic status: `APPROVED` · canonical source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1.

**Problem:** Phân tích hoàn toàn thành nhân tử:

$$P=2x(x-y)+4(y-x).$$

Hãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.

**Solution steps:**
- Nhận hai ngoặc đối nhau: Ta có

$$y-x=-(x-y).$$
- Đổi về cùng một ngoặc: Do đó

$$P=2x(x-y)-4(x-y).$$
- Đặt nhân tử chung: Đặt $2(x-y)$ làm nhân tử chung:

$$P=2(x-y)(x-2).$$
- Kiểm tra nhanh: Nhân ngược:

$$2(x-y)(x-2)=2x(x-y)-4(x-y)=2x(x-y)+4(y-x),$$

đúng với biểu thức ban đầu.

**Rubric:**
- {"criterion":"Dùng đúng $y-x=-(x-y)$.","points":1}
- {"criterion":"Đổi biểu thức về $2x(x-y)-4(x-y)$.","points":1}
- {"criterion":"Đặt đúng nhân tử chung để được $2(x-y)(x-2)$.","points":1}
- {"criterion":"Kiểm tra ngược hợp lệ.","points":1}

### Existing approved WX WX06-FAC-002

**Title:** Không dừng khi nhân tử vẫn còn phân tích được; academic status: `APPROVED` · canonical source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-06; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-08; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-10; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-3; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-4; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-5.

**Problem:** Phân tích **hoàn toàn** thành nhân tử:

$$Q=x^3+2x^2-9x-18.$$

Sau khi phân tích, hãy nhân ngược hoặc kiểm tra cấu trúc để xác nhận kết quả.

**Solution steps:**
- Nhóm có mục đích: Nhóm hai hạng tử đầu và hai hạng tử sau:

$$Q=(x^3+2x^2)+(-9x-18).$$
- Đặt nhân tử từng nhóm: Ta được

$$Q=x^2(x+2)-9(x+2)=(x+2)(x^2-9).$$
- Tiếp tục phân tích: Vì

$$x^2-9=x^2-3^2=(x-3)(x+3),$$

nên

$$Q=(x+2)(x-3)(x+3).$$
- Kiểm tra đã phân tích hoàn toàn: Ba nhân tử bậc nhất không còn phân tích tiếp bằng các phương pháp Core đã học. Nhân $(x-3)(x+3)=x^2-9$ rồi nhân với $(x+2)$ sẽ thu lại $x^3+2x^2-9x-18$.

**Rubric:**
- {"criterion":"Nhóm đúng để xuất hiện chung $(x+2)$.","points":1}
- {"criterion":"Đặt nhân tử đúng và được $(x+2)(x^2-9)$.","points":1}
- {"criterion":"Tiếp tục dùng hiệu hai bình phương để được $(x+2)(x-3)(x+3)$.","points":1}
- {"criterion":"Kiểm tra được kết quả và không dừng sớm.","points":1}

## 7. Strict review output

```text
PACKET_ID|MATH-CT05-07-W3B-20261016
EXPECTED=14
REVIEWED=14
SOURCE_ID | MATH_VERDICT | DUPLICATION(exact/structural/related/no/unknown) | ROLE | CANONICAL_OWNER_OR_NEW_PROPOSAL | S1_GRADE_LAYER_WITH_CITATION | HINT_SOLUTION_ISSUE | ACTION_REASON | ITEM_VERDICT
OVERALL|PASS_FOR_PLACEMENT_REVIEW / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
MISSING_IDS|...
UNEXPECTED_IDS|...
DUPLICATE_IDS|...
```

A PASS here is for source-placement decisions **only**. Do NOT rewrite old Markdown, insert bank items or WX, reset student data, alter Readiness or authorize website deployment. Owner acceptance and implementation QA follow as separate gates.
