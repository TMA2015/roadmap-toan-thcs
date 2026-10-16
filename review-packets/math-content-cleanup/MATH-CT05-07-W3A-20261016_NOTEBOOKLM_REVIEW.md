# MATH-CT05-07-W3A-20261016 — NotebookLM Independent Academic Placement Review

**packet_id:** `MATH-CT05-07-W3A-20261016`
**scope:** 12 bài / 3 chuyên đề (CĐ05–07); 40 bài nguồn trong sổ R1, 28 bài còn lại CHƯA được thẩm định ở gói này.
**source_baseline:** GitHub public Math `main` commit `373ece459f0a851f7015ecd92102304d32fc272b`; SHA từng file ghi ở mỗi mục.
**current status:** CANDIDATE_REVIEW / **NOT PASS** / **NO IMPLEMENTATION AUTHORIZATION**.

## 1. Source model — nguồn cần chọn trên NotebookLM

Permanent: `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md` và `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`. Tạm thời: **chính file Markdown này**. Bỏ chọn các packet đợt trước để không gây nhiễu. Nếu Notebook có S1 SGK/SBT/curriculum đã xác minh, có thể chọn thêm đúng mục cần kiểm chứng về lớp; nếu không có S1, đánh dấu `INSUFFICIENT_EVIDENCE` đối với grade/layer placement, không phỏng đoán.

## 2. Quy tắc thẩm định

- Xét riêng **đề gốc, gợi ý, lời giải, điều kiện, kiến thức lớp**, so sánh Core, MCQ Practice và WX hiện hành. `source_refs` chỉ chứng minh phả hệ; công thức tương tự chưa đủ kết luận trùng.
- Chỉ có hai dạng sản phẩm cuối: bài tương tác (đáp án kiểm được một cách tin cậy) và bài tự luận giấy (gợi ý/giải/rubric); Core/Readiness là vai trò học/đánh giá, không tạo kho câu hỏi độc lập.
- Quyết định đề xuất trên từng ID: `REUSE_CORE`, `CONVERT_INTERACTIVE`, `KEEP_WRITTEN`, `ARCHIVE_DUPLICATE`, `INSUFFICIENT_EVIDENCE`. Trường hợp muốn WRITTEN phải nêu canonical WX dùng lại hay đề xuất WX mới, và giá trị khác biệt về năng lực.
- Không cho phép reviewer tự đổi ID, nhập toàn bộ bài cũ, nâng Challenge vào KNTT-Core, sửa điểm/Readiness, hoặc tuyên bố đã phát hành. **PASS cho rà soát không có nghĩa tự động cho phép triển khai**.

## 3. Danh sách kỳ vọng — đối chiếu đủ 12/12

1. `05-WR-01`
2. `05-WR-02`
3. `05-WR-05`
4. `05-ENT-01`
5. `06-WR-02`
6. `06-WR-03`
7. `06-ENT-02`
8. `06-CH-01`
9. `07-WR-01`
10. `07-WR-07`
11. `07-WR-10`
12. `07-WR-11`

## 4. Bối cảnh Core đang xuất bản (chỉ làm đối chiếu)

### CĐ05 — Core hiện có (không phải bằng chứng S1 độc lập)
- **id05-core-1** (KNTT-Core): Bình phương tổng & hiệu; kỹ năng: binh-phuong-tong, binh-phuong-hieu, binh-phuong-hoan-chinh. Ý chính: Bình phương một tổng: \((A+B)^2=A^2+2AB+B^2\); bình phương một hiệu: \((A-B)^2=A^2-2AB+B^2\). Khi nhận dạng ngược, kiểm tra đủ hai bình phương và hạng tử giữa \(\pm2AB\); không chỉ nhìn hạng tử đầu/cuối. Ví dụ: Khai triển và thu gọn \((2x+3)^2+(x-2)^2\).
- **id05-core-2** (KNTT-Core): Hiệu hai bình phương; kỹ năng: hieu-hai-binh-phuong. Ý chính: Hiệu hai bình phương: \(A^2-B^2=(A-B)(A+B)\). Xác định chính xác \(A\), \(B\), kể cả khi chúng là đơn thức hoặc biểu thức; không áp dụng công thức này cho tổng \(A^2+B^2\). Ví dụ: Phân tích \(9x^2-16y^2\) thành nhân tử.
- **id05-core-3** (KNTT-Core): Lập phương tổng & hiệu; kỹ năng: lap-phuong-tong, lap-phuong-hieu, nhan-dang-lap-phuong. Ý chính: Lập phương tổng: \((A+B)^3=A^3+3A^2B+3AB^2+B^3\). Lập phương hiệu: \((A-B)^3=A^3-3A^2B+3AB^2-B^3\). Nhận dạng ngược cần đủ bốn hạng tử theo hệ số \(1,3,3,1\); chú ý dấu \(+,-,+,-\) với lập phương hiệu. Ví dụ: Khai triển \((2x-1)^3\).
- **id05-core-4** (KNTT-Core): Tổng & hiệu hai lập phương; kỹ năng: tong-hai-lap-phuong, hieu-hai-lap-phuong. Ý chính: Tổng hai lập phương: \(A^3+B^3=(A+B)(A^2-AB+B^2)\). Hiệu hai lập phương: \(A^3-B^3=(A-B)(A^2+AB+B^2)\). Ngoặc thứ nhất giữ dấu của đề; dấu của tích \(AB\) trong ngoặc thứ hai là dấu ngược lại. Ví dụ: Phân tích \(8x^3+125\) thành nhân tử.
- **id05-core-5** (KNTT-Core): Nhận dạng & vận dụng; kỹ năng: nhan-dang-hdt, tinh-nhanh-hdt, rut-gon-hdt. Ý chính: Chọn hằng đẳng thức từ cấu trúc của biểu thức, không chỉ từ số lượng hạng tử. Có thể dùng công thức xuôi để khai triển, ngược để nhận dạng hoặc hiệu hai bình phương để tính nhanh. Sau biến đổi, thử nhân trở lại để kiểm tra. Ví dụ: Rút gọn \(S=(x+3)^2-(x-3)^2\).

### CĐ06 — Core hiện có (không phải bằng chứng S1 độc lập)
- **fac06-core-1** (KNTT-Core): Đặt nhân tử chung; kỹ năng: nhan-tu-chung, doi-dau-nhan-tu-chung. Ý chính: Đặt nhân tử chung bằng cách tìm ước chung của hệ số và phần biến với số mũ nhỏ nhất. Nếu có hai ngoặc đối nhau, nhớ \(a-b=-(b-a)\) để đổi dấu rồi mới nhóm thành nhân tử chung. Ví dụ: Phân tích \(6x(x-3)+9(3-x)\) thành nhân tử.
- **fac06-core-2** (KNTT-Core): Dùng hằng đẳng thức; kỹ năng: hieu-hai-binh-phuong, binh-phuong-hoan-chinh, tong-hieu-lap-phuong. Ý chính: Muốn dùng hằng đẳng thức để phân tích, nhận diện \(A,B\) trước. Các mẫu thường dùng: \(A^2-B^2=(A-B)(A+B)\); \(A^2\pm2AB+B^2=(A\pm B)^2\); \(A^3\pm B^3=(A\pm B)(A^2\mp AB+B^2)\) với dấu được chọn nhất quán. Ví dụ: Phân tích \(x^3+27\) thành nhân tử.
- **fac06-core-3** (KNTT-Core): Nhóm hạng tử; kỹ năng: nhom-hang-tu. Ý chính: Khi không có nhân tử chung cho toàn bộ đa thức, thử nhóm các hạng tử sao cho sau khi đặt nhân tử chung từng nhóm, các nhóm còn lại có cùng một ngoặc. Có thể đổi thứ tự hạng tử nhưng không được tự đổi dấu. Ví dụ: Phân tích \(2ax+2ay+3bx+3by\) thành nhân tử.
- **fac06-core-4** (KNTT-Core): Phối hợp nhiều phương pháp; kỹ năng: phoi-hop-phuong-phap. Ý chính: Một biểu thức có thể cần nhiều phương pháp. Ưu tiên tìm nhân tử chung trước; sau đó quan sát hằng đẳng thức hoặc nhóm, rồi kiểm tra có phân tích tiếp được không. Không dùng kỹ thuật tách hạng tử giữa hoặc giải phương trình tích để tính là KNTT Core của chặng này. Ví dụ: Phân tích hoàn toàn \(x^3+2x^2-9x-18\).
- **fac06-core-5** (KNTT-Core): Kiểm tra & chọn phương pháp; kỹ năng: kiem-tra-phan-tich, phoi-hop-phuong-phap. Ý chính: Để chọn cách phân tích, xét nhân tử chung trước rồi nhận dạng hằng đẳng thức hoặc nhóm; kết quả phải là tích và phải đúng khi nhân ngược. Nếu đề yêu cầu phân tích hoàn toàn theo các phương pháp đã học, không được dừng khi còn nhân tử có thể phân tích tiếp. Ví dụ: Kiểm tra đẳng thức \((x-4)(x+1)=x^2-3x-4\) bằng phép nhân ngược.

### CĐ07 — Core hiện có (không phải bằng chứng S1 độc lập)
- **pt07-core-1** (KNTT-Core): Khái niệm & điều kiện xác định; kỹ năng: nhan-biet-phan-thuc, dieu-kien-xac-dinh, hai-phan-thuc-bang-nhau, tinh-gia-tri-phan-thuc. Ý chính: Phân thức đại số có dạng \(\frac{A}{B}\), trong đó \(A,B\) là đa thức và \(B\) không phải đa thức \(0\); \(A\) là tử thức, \(B\) là mẫu thức. Mỗi đa thức cũng được coi là phân thức có mẫu bằng \(1\). Điều kiện xác định là \(B\ne0\): phải tìm trước khi thay số hoặc biến đổi. Tại các giá trị biến thỏa \(B\ne0\) và \(D\ne0\), hai phân thức \(\frac{A}{B}\) và \(\frac{C}{D}\) bằng nhau khi và chỉ khi \(A\cdot D=B\cdot C\). Ví dụ: Cho \(P=\frac{x+2}{(x-1)(x+3)}\). Tìm điều kiện xác định và tính \(P\) tại \(x=0\).
- **pt07-core-2** (KNTT-Core): Tính chất cơ bản & rút gọn; kỹ năng: doi-dau-phan-thuc, phan-tich-tu-mau, rut-gon-phan-thuc, giu-dieu-kien-ban-dau. Ý chính: Rút gọn phân thức bằng cách phân tích tử, mẫu thành nhân tử rồi chia nhân tử chung khác \(0\). Đẳng thức sau rút gọn chỉ đúng trên miền xác định ban đầu. Quy tắc đổi dấu: \(\frac{A}{B}=\frac{-A}{-B}\) và \(\frac{A}{-B}=\frac{-A}{B}=-\frac{A}{B}\), với các mẫu khác \(0\). Ví dụ: Rút gọn \(Q=\frac{x^2-16}{x^2-4x}\) và nêu điều kiện xác định.
- **pt07-core-3** (KNTT-Core): Quy đồng mẫu thức; kỹ năng: quy-dong-mau-thuc. Ý chính: Muốn quy đồng: (1) Phân tích các mẫu thành nhân tử, chọn mẫu thức chung (MTC) chia hết cho tất cả mẫu cũ; mỗi nhân tử được lấy với số mũ lớn nhất cần thiết. (2) Tìm nhân tử phụ của từng phân thức: \(\text{nhân tử phụ}=\text{MTC}:\text{mẫu thức cũ}\). (3) Nhân cả tử và mẫu của từng phân thức với nhân tử phụ tương ứng. Trong suốt quá trình, giữ điều kiện xác định chung của các phân thức ban đầu. Ví dụ: Quy đồng \(\frac1{x(x-2)}\) và \(\frac2{x+2}\).
- **pt07-core-4** (KNTT-Core): Phép cộng & phép trừ; kỹ năng: cong-tru-phan-thuc. Ý chính: Cùng mẫu: \(\frac AM\pm\frac BM=\frac{A\pm B}{M}\) với \(M\ne0\). Khác mẫu: quy đồng trước rồi cộng/trừ tử thức. Dấu trừ trước một tử thức nhiều hạng tử phải đổi dấu toàn bộ tử thức trong ngoặc. Ví dụ: Tính \(R=\frac1{x-1}-\frac2{x+1}\).
- **pt07-core-5** (KNTT-Core): Phép nhân & phép chia; kỹ năng: nhan-phan-thuc, chia-phan-thuc. Ý chính: Phép nhân: \(\frac{A}{B}\cdot\frac{C}{D}=\frac{AC}{BD}\). Phép chia: \(\frac{A}{B}:\frac{C}{D}=\frac{A}{B}\cdot\frac{D}{C}\). Mẫu của tất cả phân thức ban đầu phải khác \(0\). Riêng phép chia, phân thức chia (số chia) \(\frac{C}{D}\) cũng phải khác \(0\), nghĩa là \(C\ne0\) và \(D\ne0\). Nên phân tích các tử và mẫu thành nhân tử để rút gọn trước khi khai triển. Ví dụ: Rút gọn \(T=\frac{x^2-1}{2x}:\frac{x+1}{3x}\).

## 5. Nội dung nguồn và bằng chứng đối chiếu từng bài

### 05-WR-01

**Nguồn nguyên bản:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 05-WR-01 · Bình phương một tổng

Khai triển \((x+3)^2\).

??? tip "Gợi ý"
    Dùng \(a^2+2ab+b^2\).

??? example "Xem lời giải"
    \[
    (x+3)^2=x^2+6x+9.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- `ID05V1_002`: Khai triển \((x+3)^2\).
  - Đáp án đúng: **\(x^{2} + 6 x + 9\)** (option index `0`); kỹ năng: binh-phuong-tong; giải thích: Dùng \((A+B)^2=A^2+2AB+B^2\) với \(A=x,\ B=3\).
- `ID05V1_103`: Rút gọn \((x+3)^2-x^2\).
  - Đáp án đúng: **\(6 x + 9\)** (option index `0`); kỹ năng: rut-gon-hdt, binh-phuong-tong; giải thích: Nhận dạng hằng đẳng thức trước, sau đó khai triển hoặc phân tích và thu gọn.

**Vấn đề cần reviewer giải quyết:** Đối chiếu câu MCQ cùng biểu thức: liệu bài giấy đơn bước có bổ sung lập luận hay chỉ lặp phần Practice?

---

### 05-WR-02

**Nguồn nguyên bản:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 05-WR-02 · Bình phương một hiệu

Khai triển \((2x-5)^2\).

??? tip "Gợi ý"
    Chú ý bình phương hệ số 2 và dấu âm ở hạng tử giữa.

??? example "Xem lời giải"
    \[
    (2x-5)^2=4x^2-20x+25.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- **WX05-IDN-001** — Kiểm tra đủ hai bình phương và hạng tử giữa. Đề WX: Viết đa thức  $$x^2-10x+25$$  dưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.. Source refs: docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- `ID05V1_019`: Khai triển \((2x-5)^2\).
  - Đáp án đúng: **\(4 x^{2} - 20 x + 25\)** (option index `0`); kỹ năng: binh-phuong-hieu; giải thích: Dùng \((A-B)^2=A^2-2AB+B^2\). Hạng tử cuối luôn là \(+B^2\).
- `ID05V1_074`: Tìm \(k\) để \(4x^2+kx+25\) là bình phương hoàn chỉnh \((2x-5)^2\).
  - Đáp án đúng: **\(-20\)** (option index `0`); kỹ năng: binh-phuong-hoan-chinh, nhan-dang-hdt; giải thích: Hạng tử giữa phải bằng \(2\cdot(2x)\cdot(-5)=-20x\), nên \(k=-20\).

**Vấn đề cần reviewer giải quyết:** Nguồn của WX05-IDN-001 nhưng WX là bài nhận dạng ngược khác dữ kiện; không kết luận trùng chỉ vì source_refs.

---

### 05-WR-05

**Nguồn nguyên bản:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 05-WR-05 · Lập phương một tổng

Khai triển \((x+2)^3\).

??? tip "Gợi ý"
    Dùng bốn hạng tử của công thức lập phương một tổng.

??? example "Xem lời giải"
    \[
    (x+2)^3=x^3+6x^2+12x+8.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- `ID05V1_106`: Rút gọn \((x+2)^3+(x-2)^3\).
  - Đáp án đúng: **\(2 x^{3} + 24 x\)** (option index `0`); kỹ năng: rut-gon-hdt, lap-phuong-tong, lap-phuong-hieu; giải thích: Nhận dạng hằng đẳng thức trước, sau đó khai triển hoặc phân tích và thu gọn.

**Vấn đề cần reviewer giải quyết:** Đối chiếu câu khai triển lập phương cùng biểu thức; giá trị riêng của dạng tự luận là gì?

---

### 05-ENT-01

**Nguồn nguyên bản:** `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` · Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 05-ENT-01 · Biểu thức không phụ thuộc biến

Chứng minh
\[
A=(x-1)^3-(x+1)^3+6(x-1)(x+1)
\]
không phụ thuộc vào \(x\).

??? tip "Gợi ý"
    Khai triển ba hằng đẳng thức rồi thu gọn.

??? example "Xem lời giải"
    \[
    (x-1)^3-(x+1)^3=-6x^2-2,
    \]
    \[
    6(x-1)(x+1)=6x^2-6.
    \]
    Do đó \(A=-8\).

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Chứng minh biểu thức không phụ thuộc x; yêu cầu lập luận đầy đủ, xem có nên giữ dưới dạng WRITTEN/TRANSFER.

---

### 06-WR-02

**Nguồn nguyên bản:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 06-WR-02 · Đổi dấu để tạo nhân tử chung

Phân tích \(2x(x-y)+4(y-x)\).

??? tip "Gợi ý"
    \(y-x=-(x-y)\).

??? example "Xem lời giải"
    \[
    2x(x-y)-4(x-y)=2(x-y)(x-2).
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- **WX06-FAC-001** — Nhìn hai ngoặc đối nhau trước khi đặt nhân tử. Đề WX: Phân tích hoàn toàn thành nhân tử:  $$P=2x(x-y)+4(y-x).$$  Hãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.. Source refs: docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Đề biểu thức trùng WX06-FAC-001; so sánh giải thích đổi dấu và rubric đã có.

---

### 06-WR-03

**Nguồn nguyên bản:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 06-WR-03 · Hiệu hai bình phương

Phân tích \(x^2-36\).

??? tip "Gợi ý"
    \(36=6^2\).

??? example "Xem lời giải"
    \[
    x^2-36=(x-6)(x+6).
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Hiệu hai bình phương cơ bản; đối chiếu cấu trúc với Practice và Core.

---

### 06-ENT-02

**Nguồn nguyên bản:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 06-ENT-02 · Giải phương trình bằng nhân tử

Giải \(x^2-7x=0\).

??? tip "Gợi ý"
    Đưa về dạng tích bằng 0.

??? example "Xem lời giải"
    \[
    x(x-7)=0\Rightarrow x=0\text{ hoặc }x=7.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Bài giải phương trình bằng nhân tử, xem ranh giới KNTT/Entrance10 qua S1.

---

### 06-CH-01

**Nguồn nguyên bản:** `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` · Git blob `00e983516ba2025b2bec54d506462553e4ca9647`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 06-CH-01 · Thêm bớt để phân tích

Phân tích \(x^4+4\).

??? tip "Gợi ý"
    Thêm và bớt \(4x^2\).

??? example "Xem lời giải"
    \[
    x^4+4=x^4+4x^2+4-4x^2
    =(x^2+2)^2-(2x)^2
    \]
    \[
    =(x^2-2x+2)(x^2+2x+2).
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Biến đổi Sophie Germain x^4+4; có thể thuộc thử thách, KHÔNG tự động đưa vào Core.

---

### 07-WR-01

**Nguồn nguyên bản:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 07-WR-01 · Điều kiện xác định

Tìm điều kiện xác định của

\[
\frac{3}{x-2}.
\]

??? tip "Gợi ý"
    Mẫu thức phải khác 0.

??? example "Xem lời giải"
    \[
    x-2\ne0\Rightarrow x\ne2.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- Chưa có `source_refs` trực tiếp trong WX hiện hành.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Điều kiện xác định cơ bản, so sánh câu Core/MCQ trùng kỹ năng.

---

### 07-WR-07

**Nguồn nguyên bản:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 07-WR-07 · Rút gọn có điều kiện

Rút gọn

\[
A=\frac{x^2-4}{x^2-2x}.
\]

??? tip "Gợi ý"
    Phân tích cả tử và mẫu thành nhân tử trước khi rút gọn.

??? example "Xem lời giải"
    Mẫu ban đầu:

    \[
    x^2-2x=x(x-2),
    \]

    nên \(x\ne0,2\).

    Sau đó:

    \[
    A=\frac{(x-2)(x+2)}{x(x-2)}
    =\frac{x+2}{x},
    \]

    với **điều kiện ban đầu** \(x\ne0,2\).

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- **WX07-RAT-001** — Rút gọn nhưng không làm mất điều kiện ban đầu. Đề WX: Cho  $$A=\frac{x^2-9}{x^2-3x}.$$  1. Tìm điều kiện xác định của $A$. 2. Rút gọn $A$. 3. Viết kết quả cuối cùng kèm điều kiện của $x$.. Source refs: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07; docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Đã dẫn nguồn cho WX07-RAT-001 (biểu thức WX khác); kiểm tra tính cần thiết của bài gốc.

---

### 07-WR-10

**Nguồn nguyên bản:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 07-WR-10 · Biểu thức nhiều phép tính

Rút gọn

\[
A=\frac{x}{x-1}-\frac1{x+1}-\frac{2}{x^2-1}.
\]

??? tip "Gợi ý"
    Phân tích \(x^2-1=(x-1)(x+1)\), sau đó quy đồng.

??? example "Xem lời giải"
    Điều kiện \(x\ne\pm1\).

    Quy đồng về mẫu \((x-1)(x+1)\):

    \[
    A=
    \frac{x(x+1)-(x-1)-2}{(x-1)(x+1)}
    =\frac{x^2-1}{x^2-1}=1.
    \]

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- **WX07-RAT-002** — Quy đồng hợp lý và giữ điều kiện xuyên suốt. Đề WX: Rút gọn biểu thức  $$A=\frac{x}{x-1}-\frac1{x+1}-\frac2{x^2-1}.$$  Yêu cầu: ghi điều kiện xác định trước khi biến đổi và nêu kết quả cuối cùng.. Source refs: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-10.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- Chưa trích được MCQ cùng biểu thức từ các chunk được chọn. Không kết luận ngân hàng không có dạng tương tự; xem ledger toàn bộ 120 câu.

**Vấn đề cần reviewer giải quyết:** Trùng nguyên biểu thức với WX07-RAT-002, so sánh yêu cầu ghi điều kiện và cách chấm.

---

### 07-WR-11

**Nguồn nguyên bản:** `docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md` · Git blob `80b8620ada44de09ddf34e8c60c57a42adf44b6d`.

**Đề + gợi ý + lời giải đúng như nguồn Git:**

#### 07-WR-11 · Vì sao phải giữ điều kiện cũ?

Giải thích vì sao khi rút gọn

\[
\frac{x^2-4}{x-2}=x+2
\]

vẫn phải giữ điều kiện \(x\ne2\).

??? tip "Gợi ý"
    Hãy so sánh miền xác định của biểu thức ban đầu và biểu thức sau khi rút gọn.

??? example "Xem lời giải"
    Phân thức ban đầu không xác định tại \(x=2\) vì mẫu bằng 0. Việc rút gọn nhân tử \(x-2\) không thể làm xuất hiện lại một giá trị vốn đã bị loại khỏi miền xác định ban đầu. Vì vậy đẳng thức chỉ đúng trên miền \(x\ne2\).

**Liên hệ bài tự luận canonical (chưa phải verdict trùng):**
- **WX07-RAT-001** — Rút gọn nhưng không làm mất điều kiện ban đầu. Đề WX: Cho  $$A=\frac{x^2-9}{x^2-3x}.$$  1. Tìm điều kiện xác định của $A$. 2. Rút gọn $A$. 3. Viết kết quả cuối cùng kèm điều kiện của $x$.. Source refs: docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07; docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11.

**MCQ minh họa cùng biểu thức (khi tìm thấy):**
- `RAT07V1_063`: Nhận xét đúng về phép rút gọn \(\frac{x^2-4}{x-2}=x+2\) là:
  - Đáp án đúng: **Đúng khi giữ điều kiện ban đầu \(x\ne2\).** (option index `0`); kỹ năng: giu-dieu-kien-ban-dau; giải thích: Phân thức ban đầu chỉ xác định khi mẫu khác 0. Sau rút gọn, đẳng thức vẫn phải giữ \(x\ne2\); không được nhận lại giá trị đã bị loại.

**Vấn đề cần reviewer giải quyết:** Giải thích miền xác định sau rút gọn; WX07-RAT-001 có liên hệ ý tưởng, không trùng đề.


## 6. Canonical WX đã duyệt — thông tin cần bảo toàn

### WX05-IDN-001 — Kiểm tra đủ hai bình phương và hạng tử giữa

**Learning layer:** KNTT-Core; **review:** {"status":"APPROVED","method":"NOTEBOOKLM_R1","packet_id":"MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001","receipt":"review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"}; **source refs:** docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-02; docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md#05-WR-03; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-1; docs/assets/data/curriculum/topic05-learning-workspace.json#id05-core-5.

**Đề:**
Viết đa thức

$$x^2-10x+25$$

dưới dạng bình phương của một hiệu. Hãy chỉ rõ ba thành phần dùng để nhận dạng và khai triển ngược để kiểm tra.

**Các bước giải:**
- S1: Nhận hai bình phương. Ta có  $$x^2=(x)^2,\qquad 25=5^2.$$
- S2: Kiểm tra hạng tử giữa. Hạng tử giữa là  $$-10x=-2\cdot x\cdot5,$$  đúng với mẫu $A^2-2AB+B^2$.
- S3: Viết bình phương hoàn chỉnh. Vì vậy  $$x^2-10x+25=(x-5)^2.$$
- S4: Khai triển ngược để kiểm tra. Ta có  $$(x-5)^2=x^2-10x+25,$$  trùng với đa thức ban đầu.

**Rubric:**
- Nhận đúng $x^2$ và $25$ là hai bình phương. — 1 điểm
- Kiểm tra đúng $-10x=-2\cdot x\cdot5$. — 1 điểm
- Viết đúng $(x-5)^2$. — 1 điểm
- Khai triển ngược đúng để kiểm tra. — 1 điểm

### WX06-FAC-001 — Nhìn hai ngoặc đối nhau trước khi đặt nhân tử

**Learning layer:** KNTT-Core; **review:** {"status":"APPROVED","method":"NOTEBOOKLM_R1","packet_id":"MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001","receipt":"review-packets/written-exercise-library/36_NOTEBOOKLM_EXPANSION_B5_R1_PASS_RECEIPT.md"}; **source refs:** docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-01; docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md#06-WR-02; docs/assets/data/curriculum/topic06-learning-workspace.json#fac06-core-1.

**Đề:**
Phân tích hoàn toàn thành nhân tử:

$$P=2x(x-y)+4(y-x).$$

Hãy chỉ rõ bước đổi dấu của ngoặc trước khi đặt nhân tử chung.

**Các bước giải:**
- S1: Nhận hai ngoặc đối nhau. Ta có  $$y-x=-(x-y).$$
- S2: Đổi về cùng một ngoặc. Do đó  $$P=2x(x-y)-4(x-y).$$
- S3: Đặt nhân tử chung. Đặt $2(x-y)$ làm nhân tử chung:  $$P=2(x-y)(x-2).$$
- S4: Kiểm tra nhanh. Nhân ngược:  $$2(x-y)(x-2)=2x(x-y)-4(x-y)=2x(x-y)+4(y-x),$$  đúng với biểu thức ban đầu.

**Rubric:**
- Dùng đúng $y-x=-(x-y)$. — 1 điểm
- Đổi biểu thức về $2x(x-y)-4(x-y)$. — 1 điểm
- Đặt đúng nhân tử chung để được $2(x-y)(x-2)$. — 1 điểm
- Kiểm tra ngược hợp lệ. — 1 điểm

### WX07-RAT-001 — Rút gọn nhưng không làm mất điều kiện ban đầu

**Learning layer:** KNTT-Core; **review:** {"status":"APPROVED","method":"NOTEBOOKLM_R1","packet_id":"MATH-WRITTEN-LIBRARY-PILOT-R1-20261001","receipt":"review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"}; **source refs:** docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-07; docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-11.

**Đề:**
Cho

$$A=\frac{x^2-9}{x^2-3x}.$$

1. Tìm điều kiện xác định của $A$.
2. Rút gọn $A$.
3. Viết kết quả cuối cùng kèm điều kiện của $x$.

**Các bước giải:**
- S1: Điều kiện xác định. Mẫu số là $x^2-3x=x(x-3)$. Vì mẫu phải khác $0$ nên  $$x\ne0,\qquad x\ne3.$$
- S2: Phân tích tử và mẫu. Dùng hiệu hai bình phương:  $$x^2-9=(x-3)(x+3),$$  và  $$x^2-3x=x(x-3).$$
- S3: Rút gọn. Trên miền xác định đã nêu,  $$A=\frac{(x-3)(x+3)}{x(x-3)}=\frac{x+3}{x}.$$
- S4: Kết luận. Vậy  $$A=\frac{x+3}{x},\qquad x\ne0,3.$$  Điều kiện $x\ne3$ vẫn phải giữ dù nhân tử $x-3$ đã được rút gọn.

**Rubric:**
- Xác định đúng mẫu và điều kiện $x\ne0,3$. — 1 điểm
- Phân tích đúng $x^2-9$ và $x^2-3x$ thành nhân tử. — 1 điểm
- Rút gọn đúng về $\frac{x+3}{x}$. — 1 điểm
- Kết luận giữ đủ điều kiện ban đầu $x\ne0,3$. — 1 điểm

### WX07-RAT-002 — Quy đồng hợp lý và giữ điều kiện xuyên suốt

**Learning layer:** KNTT-Core; **review:** {"status":"APPROVED","method":"NOTEBOOKLM_R1","packet_id":"MATH-WRITTEN-LIBRARY-PILOT-R1-20261001","receipt":"review-packets/written-exercise-library/04_NOTEBOOKLM_R1_PASS_RECEIPT.md"}; **source refs:** docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-10.

**Đề:**
Rút gọn biểu thức

$$A=\frac{x}{x-1}-\frac1{x+1}-\frac2{x^2-1}.$$

Yêu cầu: ghi điều kiện xác định trước khi biến đổi và nêu kết quả cuối cùng.

**Các bước giải:**
- S1: Điều kiện xác định. Vì $x^2-1=(x-1)(x+1)$ nên các mẫu khác $0$ khi  $$x\ne1,\qquad x\ne-1.$$
- S2: Chọn mẫu thức chung. Mẫu thức chung thuận tiện là $(x-1)(x+1)=x^2-1$.
- S3: Quy đồng. Ta có  $$A=\frac{x(x+1)}{(x-1)(x+1)}-\frac{x-1}{(x-1)(x+1)}-\frac2{(x-1)(x+1)}.$$
- S4: Thu gọn tử. Tử số là  $$x(x+1)-(x-1)-2=x^2+x-x+1-2=x^2-1.$$
- S5: Kết luận. Do đó  $$A=\frac{x^2-1}{x^2-1}=1,\qquad x\ne\pm1.$$

**Rubric:**
- Ghi đúng điều kiện $x\ne\pm1$. — 1 điểm
- Chọn đúng mẫu thức chung $(x-1)(x+1)$. — 1 điểm
- Quy đồng đúng ba phân thức. — 1 điểm
- Thu gọn tử số đúng về $x^2-1$. — 1 điểm
- Kết luận $A=1$ và giữ điều kiện $x\ne\pm1$. — 1 điểm


## 7. Kết quả bắt buộc từ NotebookLM

Đầu ra từng ID theo đúng thứ tự:

`ID | MATH_CORRECTNESS(PASS/REVISE) | DUPLICATE(exact/structural/related/no/unknown) | RECOMMENDED_ROLE | REFERENCE_CANONICAL_ID | LAYER_GRADE_EVIDENCE(S1/INSUFFICIENT) | ACTION_AND_JUSTIFICATION | VERDICT(PASS/REVISE/INSUFFICIENT_EVIDENCE)`

Trước bảng phải khai báo `PACKET_ID` và số `EXPECTED=12`, `REVIEWED=12`; sau bảng phải liệt kê **thiếu/trùng/ngoài phạm vi**. Với REVISE, nêu lỗi toán chính xác, vị trí và sửa đề xuất. Với RECOMMENDED_ROLE, nếu thiếu chứng cứ phải ghi `INSUFFICIENT_EVIDENCE`. Chỉ khi toàn bộ yêu cầu đã xét đủ mới có thể dùng `OVERALL|PASS_FOR_PLACEMENT_REVIEW` (không phải PASS_DEPLOY). Nếu chưa, ghi `OVERALL|REVISION_REQUIRED` hoặc `OVERALL|INSUFFICIENT_EVIDENCE`.

## 8. Cổng triển khai sau rà soát

Owner/assistant đối chiếu bản verdict với 12 ID nguồn, kiểm tra bằng chứng S1, chốt canonical owner và quyết định content delta nhỏ nhất. Nếu cần bổ sung/chỉnh nội dung toán, chuẩn bị candidate riêng, review bổ sung, QA unit/browser và nghiệm thu. Không thay đổi learner history, score ledger, Readiness hoặc 28 ID ngoài gói.