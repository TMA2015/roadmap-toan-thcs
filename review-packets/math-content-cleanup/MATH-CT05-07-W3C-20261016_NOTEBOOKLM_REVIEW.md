# NotebookLM Independent Source-Placement Review — MATH-CT05-07-W3C-20261016

**packet_id:** `MATH-CT05-07-W3C-20261016`  
**scope:** exactly 14 remaining old source items (CĐ06: 4, CĐ07: 10), distinct from W3A (12) and W3B (14).  
**status:** CANDIDATE_REVIEW / NOT_PASSED / NO_DEPLOY_AUTHORIZATION.

## 1. Reviewer sources and protected boundaries

Keep Math Master Plan v1.2.1, NotebookLM Math Review Rules v1.2 and relevant permanent Academic Source/Depth, Golden Architecture, Written Library Contract; select this Markdown as **only current temporary batch packet**, deselect older batch packets. Add KNTT SGK Toán 8 S1 if connected; otherwise mark curriculum-layer evidence `INSUFFICIENT_EVIDENCE`. Do not claim an old source is academically retired or its learner results are scored.

## 2. Scope and source locking

- `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647` (120 current MCQ).
- `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d` (120 current MCQ).

1. `06-WR-08`
2. `06-WR-09`
3. `06-WR-10`
4. `06-ENT-01`
5. `07-WR-02`
6. `07-WR-03`
7. `07-WR-04`
8. `07-WR-05`
9. `07-WR-06`
10. `07-WR-08`
11. `07-WR-09`
12. `07-ENT-01`
13. `07-ENT-02`
14. `07-CH-01`

## 3. Independent review questions

For every ID verify math correctness, conditions of rational expressions, complete solution/proof, hints and misconception; classify duplication separately into `exact/structural/related/no/unknown` against Core Micro, Practice MCQ and canonical WX. Recommend `REUSE_CORE`, `CONVERT_INTERACTIVE`, `KEEP_WRITTEN`, `ARCHIVE_DUPLICATE`, or `INSUFFICIENT_EVIDENCE`; for duplicates cite canonical owner, and for proposed new written justify necessity and minimal self-check rubric. Never promote Entrance10/Challenge into KNTT Core merely due to known skills. For symbolic/domain responses, current practice runtime has no general symbolic-equivalence check; do not promise machine grading until a safe answer contract and tests exist. No release authorization from this review.

## 4. Current authored Core examples (for comparison, not S1)

### CT06 Core
- fac06-core-1: Đặt nhân tử chung; KNTT-Core; Đặt nhân tử chung bằng cách tìm ước chung của hệ số và phần biến với số mũ nhỏ nhất. Nếu có hai ngoặc đối nhau, nhớ \(a-b=-(b-a)\) để đổi dấu rồi mới nhóm thành nhân tử chung.
- fac06-core-2: Dùng hằng đẳng thức; KNTT-Core; Muốn dùng hằng đẳng thức để phân tích, nhận diện \(A,B\) trước. Các mẫu thường dùng: \(A^2-B^2=(A-B)(A+B)\); \(A^2\pm2AB+B^2=(A\pm B)^2\); \(A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2)\) với dấu được chọn nhất quán.
- fac06-core-3: Nhóm hạng tử; KNTT-Core; Khi không có nhân tử chung cho toàn bộ đa thức, thử nhóm các hạng tử sao cho sau khi đặt nhân tử chung từng nhóm, các nhóm còn lại có cùng một ngoặc. Có thể đổi thứ tự hạng tử nhưng không được tự đổi dấu.
- fac06-core-4: Phối hợp nhiều phương pháp; KNTT-Core; Một biểu thức có thể cần nhiều phương pháp. Ưu tiên tìm nhân tử chung trước; sau đó quan sát hằng đẳng thức hoặc nhóm, rồi kiểm tra có phân tích tiếp được không. Không dùng kỹ thuật tách hạng tử giữa hoặc giải phương trình tích để tính là KNTT Core của chặng này.
- fac06-core-5: Kiểm tra & chọn phương pháp; KNTT-Core; Để chọn cách phân tích, xét nhân tử chung trước rồi nhận dạng hằng đẳng thức hoặc nhóm; kết quả phải là tích và phải đúng khi nhân ngược. Nếu đề yêu cầu phân tích hoàn toàn theo các phương pháp đã học, không được dừng khi còn nhân tử có thể phân tích tiếp.

### CT07 Core
- pt07-core-1: Khái niệm & điều kiện xác định; KNTT-Core; Phân thức đại số có dạng \(\frac{A}{B}\), trong đó \(A,B\) là đa thức và \(B\) không phải đa thức \(0\); \(A\) là tử thức, \(B\) là mẫu thức. Mỗi đa thức cũng được coi là phân thức có mẫu bằng \(1\). Điều kiện xác định là \(B\ne0\): phải tìm trước khi thay số hoặc biến đổi. Tại các giá trị biến thỏa \(B\ne0\) và \(D\ne0\), hai phân thức \(\frac{A}{B}\) và \(\frac{C}{D}\) bằng nhau khi và chỉ khi \(A\cdot D=B\cdot C\).
- pt07-core-2: Tính chất cơ bản & rút gọn; KNTT-Core; Rút gọn phân thức bằng cách phân tích tử, mẫu thành nhân tử rồi chia nhân tử chung khác \(0\). Đẳng thức sau rút gọn chỉ đúng trên miền xác định ban đầu. Quy tắc đổi dấu: \(\frac{A}{B}=\frac{-A}{-B}\) và \(\frac{A}{-B}=\frac{-A}{B}=-\frac{A}{B}\), với các mẫu khác \(0\).
- pt07-core-3: Quy đồng mẫu thức; KNTT-Core; Muốn quy đồng: (1) Phân tích các mẫu thành nhân tử, chọn mẫu thức chung (MTC) chia hết cho tất cả mẫu cũ; mỗi nhân tử được lấy với số mũ lớn nhất cần thiết. (2) Tìm nhân tử phụ của từng phân thức: \(\text{nhân tử phụ}=\text{MTC}:\text{mẫu thức cũ}\). (3) Nhân cả tử và mẫu của từng phân thức với nhân tử phụ tương ứng. Trong suốt quá trình, giữ điều kiện xác định chung của các phân thức ban đầu.
- pt07-core-4: Phép cộng & phép trừ; KNTT-Core; Cùng mẫu: \(\frac AM\pm\frac BM=\frac{A\pm B}{M}\) với \(M\ne0\). Khác mẫu: quy đồng trước rồi cộng/trừ tử thức. Dấu trừ trước một tử thức nhiều hạng tử phải đổi dấu toàn bộ tử thức trong ngoặc.
- pt07-core-5: Phép nhân & phép chia; KNTT-Core; Phép nhân: \(\frac{A}{B}\cdot\frac{C}{D}=\frac{AC}{BD}\). Phép chia: \(\frac{A}{B}:\frac{C}{D}=\frac{A}{B}\cdot\frac{D}{C}\). Mẫu của tất cả phân thức ban đầu phải khác \(0\). Riêng phép chia, phân thức chia (số chia) \(\frac{C}{D}\) cũng phải khác \(0\), nghĩa là \(C\ne0\) và \(D\ne0\). Nên phân tích các tử và mẫu thành nhân tử để rút gọn trước khi khai triển.

## 5. Complete original source items and nearby authored practice evidence

### 06-WR-08

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md`; Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

#### 06-WR-08 · Phối hợp nhân tử chung và HĐT

Phân tích hoàn toàn \(2x^3-8x\).

??? tip "Gợi ý"
    Đặt \(2x\) trước rồi tiếp tục với \(x^2-4\).

??? example "Xem lời giải"
    \[
    2x(x^2-4)=2x(x-2)(x+2).
    \]

**Canonical WX source lineage:** `WX06-FAC-002`

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 06-WR-09

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md`; Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

#### 06-WR-09 · Phối hợp nhân tử chung và bình phương hoàn chỉnh

Phân tích \(x^3-2x^2+x\).

??? tip "Gợi ý"
    Đặt \(x\), rồi nhìn \(x^2-2x+1\).

??? example "Xem lời giải"
    \[
    x(x^2-2x+1)=x(x-1)^2.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 06-WR-10

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md`; Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

#### 06-WR-10 · Kiểm tra bằng nhân ngược

Kiểm tra xem \((x-4)(x+2)\) có phải là phân tích của \(x^2-2x-8\) không.

??? tip "Gợi ý"
    Nhân hai nhân tử trở lại.

??? example "Xem lời giải"
    \[
    (x-4)(x+2)=x^2+2x-4x-8=x^2-2x-8.
    \]
    Vậy phân tích đúng.

### Entrance10 / Extension

**Canonical WX source lineage:** `WX06-FAC-002`

**MCQ candidates matching a prompt formula:** `FAC06V1_075` Phân tích \(x^{2} - 2 x - 8\) thành nhân tử bằng cách tách hạng tử giữa. → \((x-4)(x+2)\); Tìm hai số có tổng \(-2\) và tích \(-8\): đó là \(-4\) và \(2\), rồi tách hạng tử giữa và nhóm.

---

### 06-ENT-01

**Source:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md`; Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

#### 06-ENT-01 · Tách hạng tử giữa

Phân tích \(x^2+5x+6\).

??? tip "Gợi ý"
    Tìm hai số có tổng 5 và tích 6.

??? example "Xem lời giải"
    \[
    x^2+5x+6=x^2+2x+3x+6=(x+2)(x+3).
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** `FAC06V1_065` Phân tích \(x^{2} + 5 x + 6\) thành nhân tử bằng cách tách hạng tử giữa. → \((x+2)(x+3)\); Tìm hai số có tổng \(5\) và tích \(6\): đó là \(2\) và \(3\), rồi tách hạng tử giữa và nhóm.

---

### 07-WR-02

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-02 · Rút gọn đơn thức

Rút gọn

\[
\frac{6x}{9x^2}.
\]

??? tip "Gợi ý"
    Trước hết ghi điều kiện \(x\ne0\), sau đó chia tử và mẫu cho nhân tử chung \(3x\).

??? example "Xem lời giải"
    Với \(x\ne0\),

    \[
    \frac{6x}{9x^2}=\frac{2}{3x}.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-03

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-03 · Quy đồng hai phân thức

Quy đồng

\[
\frac1x\quad\text{và}\quad\frac1{x+1}.
\]

??? tip "Gợi ý"
    Hai mẫu không có nhân tử chung khác 1, nên có thể chọn MTC là \(x(x+1)\).

??? example "Xem lời giải"
    Điều kiện:

    \[
    x\ne0,\quad x\ne-1.
    \]

    Khi đó:

    \[
    \frac1x=\frac{x+1}{x(x+1)},\qquad
    \frac1{x+1}=\frac{x}{x(x+1)}.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-04

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-04 · Hằng đẳng thức và điều kiện ban đầu

Rút gọn

\[
\frac{x^2-9}{x-3}.
\]

??? tip "Gợi ý"
    Dùng hiệu hai bình phương và giữ điều kiện của biểu thức ban đầu.

??? example "Xem lời giải"
    Điều kiện \(x\ne3\).

    \[
    x^2-9=(x-3)(x+3),
    \]

    nên

    \[
    \frac{x^2-9}{x-3}=x+3,\qquad x\ne3.
    \]

### Core 2 – Cộng, trừ, nhân, chia

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-05

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-05 · Cộng khác mẫu

Tính

\[
\frac{2}{x}+\frac{3}{2x}.
\]

??? tip "Gợi ý"
    MTC là \(2x\).

??? example "Xem lời giải"
    Với \(x\ne0\),

    \[
    \frac{2}{x}+\frac{3}{2x}
    =\frac{4}{2x}+\frac{3}{2x}
    =\frac{7}{2x}.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-06

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-06 · Trừ cùng mẫu

Tính

\[
\frac{x}{x-1}-\frac1{x-1}.
\]

??? tip "Gợi ý"
    Giữ nguyên mẫu và trừ hai tử thức.

??? example "Xem lời giải"
    Với \(x\ne1\),

    \[
    \frac{x}{x-1}-\frac1{x-1}
    =\frac{x-1}{x-1}=1.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-08

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-08 · Nhân phân thức

Tính

\[
\frac{x}{x+1}\cdot\frac{x^2-1}{x}.
\]

??? tip "Gợi ý"
    Phân tích \(x^2-1\) trước rồi rút các nhân tử chung.

??? example "Xem lời giải"
    Điều kiện \(x\ne0,-1\).

    \[
    \frac{x}{x+1}\cdot\frac{(x-1)(x+1)}{x}=x-1.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-WR-09

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-WR-09 · Chia phân thức

Tính

\[
\frac{x^2-1}{x^2+2x+1}:\frac{x-1}{x+1}.
\]

??? tip "Gợi ý"
    Nhớ điều kiện số chia khác 0 rồi đổi phép chia thành nhân với nghịch đảo.

??? example "Xem lời giải"
    Ta có \(x^2+2x+1=(x+1)^2\). Điều kiện từ các mẫu là \(x\ne-1\), đồng thời phân thức chia phải khác 0 nên \(x\ne1\).

    \[
    \frac{(x-1)(x+1)}{(x+1)^2}\cdot\frac{x+1}{x-1}=1.
    \]

    Vậy kết quả là \(1\), với \(x\ne-1,1\).

### Core 3 – Tổng hợp

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-ENT-01

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-ENT-01 · Giá trị nguyên

Cho

\[
A=\frac{x+1}{x-2}.
\]

Tìm các giá trị nguyên của \(x\) để \(A\) nguyên.

??? tip "Gợi ý"
    Biến đổi về dạng “số nguyên + phân số có tử cố định”.

??? example "Xem lời giải"
    \[
    A=1+\frac{3}{x-2}.
    \]

    Với \(x\in\mathbb Z\), \(A\) nguyên khi \(x-2\) là ước khác 0 của 3:

    \[
    x-2\in\{-3,-1,1,3\}.
    \]

    Suy ra

    \[
    x\in\{-1,1,3,5\}.
    \]

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-ENT-02

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-ENT-02 · Ba mẫu thức và đổi dấu

Rút gọn một biểu thức gồm ba phân thức trong đó có hai mẫu dạng \(x-a\) và \(a-x\). Tự đặt một ví dụ đơn giản rồi chỉ ra bước đổi dấu trước khi quy đồng.

??? tip "Gợi ý"
    Luôn dùng \(a-x=-(x-a)\).

??? example "Xem một mẫu"
    Chẳng hạn

    \[
    \frac1{x-2}+\frac1{2-x}=0,\qquad x\ne2.
    \]

    Điểm chính là phải đổi dấu **cả phân thức**, không chỉ đổi dấu mẫu.

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).

---

### 07-CH-01

**Source:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md`; Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

#### 07-CH-01 · Biểu thức hữu tỉ nhiều tầng

Tự chọn một biểu thức có ngoặc và ít nhất ba phép tính phân thức. Hãy viết **kế hoạch biến đổi** trước khi thực hiện phép tính.

??? tip "Gợi ý"
    Ưu tiên: ĐKXĐ → phân tích nhân tử → rút gọn cục bộ → nhân/chia → cộng/trừ → rút gọn cuối.

??? example "Tiêu chí tự kiểm tra"
    Một lời giải tốt cần:
    
    - ghi đủ ĐKXĐ;
    - không triệt tiêu qua dấu cộng/trừ;
    - không quy đồng quá sớm nếu có thể rút gọn cục bộ;
    - giữ các giá trị bị loại từ biểu thức ban đầu.

**Canonical WX source lineage:** No explicit source_ref. Does not exclude a conceptual near-duplicate.

**MCQ candidates matching a prompt formula:** No exact-expression candidates found by automated extraction (structural duplicates may exist).


## 6. Current approved canonical written exercises directly citing this batch

### WX06-FAC-002: Không dừng khi nhân tử vẫn còn phân tích được

Source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-06; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-08; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-10; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-3; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-4; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-5; review: `APPROVED`.

**Problem:** Phân tích **hoàn toàn** thành nhân tử:

$$Q=x^3+2x^2-9x-18.$$

Sau khi phân tích, hãy nhân ngược hoặc kiểm tra cấu trúc để xác nhận kết quả.

**Steps:** Nhóm hai hạng tử đầu và hai hạng tử sau:

$$Q=(x^3+2x^2)+(-9x-18).$$

Ta được

$$Q=x^2(x+2)-9(x+2)=(x+2)(x^2-9).$$

Vì

$$x^2-9=x^2-3^2=(x-3)(x+3),$$

nên

$$Q=(x+2)(x-3)(x+3).$$

Ba nhân tử bậc nhất không còn phân tích tiếp bằng các phương pháp Core đã học. Nhân $(x-3)(x+3)=x^2-9$ rồi nhân với $(x+2)$ sẽ thu lại $x^3+2x^2-9x-18$.

**Rubric:** {"criterion":"Nhóm đúng để xuất hiện chung $(x+2)$.","points":1}; {"criterion":"Đặt nhân tử đúng và được $(x+2)(x^2-9)$.","points":1}; {"criterion":"Tiếp tục dùng hiệu hai bình phương để được $(x+2)(x-3)(x+3)$.","points":1}; {"criterion":"Kiểm tra được kết quả và không dừng sớm.","points":1}

## 7. Mandatory verdict 14/14

```text
PACKET_ID|MATH-CT05-07-W3C-20261016
EXPECTED=14
REVIEWED=14
SOURCE_ID | MATH | DUPLICATION(exact/structural/related/no/unknown) | ROLE | CANONICAL_OWNER_OR_NEW | GRADE_LAYER_S1_EVIDENCE | SOLUTION_AND_HINT_ISSUES | PRECISE_ACTION | ITEM_VERDICT
OVERALL|PASS_FOR_PLACEMENT_REVIEW / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
MISSING_IDS|...
DUPLICATE_IDS|...
UNEXPECTED_IDS|...
```

**Boundary:** no auto-deployment, new IDs, migration, deleted original Markdown, new readiness credit or public library changes until owner reconciliation and independent content review.
