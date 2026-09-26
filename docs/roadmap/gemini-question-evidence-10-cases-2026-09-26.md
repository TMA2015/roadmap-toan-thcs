# Gói bằng chứng đầy đủ — 10 câu Gemini yêu cầu (CĐ04–11)

Dữ liệu sao từ các tệp câu hỏi thực tế trong repository, ngày 26/09/2026. Không phải kết luận đã phê duyệt về taxonomy. Đáp án tính theo chỉ số 0-based ở JSON; dưới đây ghi thêm chữ cái A–D cho dễ đọc. Cặp tag đồng xuất hiện không đồng nghĩa với hai năng lực được đánh giá độc lập.

## ALG04V2_037

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-02.json`

**Đề:** Rút gọn \((5x + 2) - (-x + 2)\).

**Đáp án lựa chọn:**
- A. \(6 x\)
- B. \(4 x + 4\)
- C. \(6 x + 4\)
- D. \(4 x\)

**Đúng:** A (index 0). **Giải thích:** Bỏ ngoặc đúng dấu rồi gộp hạng tử đồng dạng. Kết quả là \(6 x\).

**Tag gốc:** `cong-tru-da-thuc`, `bo-ngoac-dau`. **Type:** `cong-tru`. **Độ khó khai báo:** `basic`.

## ALG04V2_051

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-02.json`

**Đề:** Khai triển \(4x(x + 3)\).

**Đáp án lựa chọn:**
- A. \(4 x^{2} + 12 x\)
- B. \(4 x + 12\)
- C. \(4 x^{2} + 3\)
- D. \(4 x^{2} - 12 x\)

**Đúng:** A (index 0). **Giải thích:** Nhân \(4x\) với từng hạng tử trong ngoặc rồi thu gọn. Kết quả là \(4 x^{2} + 12 x\).

**Tag gốc:** `nhan-bieu-thuc`, `tinh-phan-phoi`. **Type:** `nhan-don-thuc-da-thuc`. **Độ khó khai báo:** `basic`.

## ALG04V2_111

Nguồn: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json`

**Đề:** Một hình chữ nhật có chiều dài \(2x+3\), chiều rộng \(x-1\). Chu vi là biểu thức nào?

**Đáp án lựa chọn:**
- A. \(6x+4\)
- B. \(3x+2\)
- C. \(6x+2\)
- D. \(2x^2+x-3\)

**Đúng:** A (index 0). **Giải thích:** Chu vi bằng \(2[(2x+3)+(x-1)]=2(3x+2)=6x+4\).

**Tag gốc:** `bai-toan-thuc-te`, `lap-bieu-thuc`. **Type:** `ung-dung`. **Độ khó khai báo:** `intermediate`.

## ID05V1_061

Nguồn: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-03.json`

**Đề:** Viết \(x^{2} + 4 x + 4\) dưới dạng bình phương của một tổng hoặc hiệu.

**Đáp án lựa chọn:**
- A. \((x + 2)^2\)
- B. \((x - 2)^2\)
- C. \((x + 3)^2\)
- D. \(x^{2} + 4\)

**Đúng:** A (index 0). **Giải thích:** Nhận \(A^2\), \(B^2\) và kiểm tra hạng tử giữa bằng \(\pm2AB\).

**Tag gốc:** `binh-phuong-hoan-chinh`, `nhan-dang-hdt`. **Type:** `nhan-dang-binh-phuong-hoan-chinh`. **Độ khó khai báo:** `basic`.

## ID05V1_021

Nguồn: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json`

**Đề:** Phân tích \(x^{2} - 16\) thành nhân tử.

**Đáp án lựa chọn:**
- A. \((x - 4)(x + 4)\)
- B. \((x - 4)^2\)
- C. \((x + 4)^2\)
- D. \((x - 4)(x - 4)\)

**Đúng:** A (index 0). **Giải thích:** Nhận dạng \(A^2-B^2=(A-B)(A+B)\) với \(A=x,\ B=4\).

**Tag gốc:** `hieu-hai-binh-phuong`, `phan-tich-hdt`. **Type:** `phan-tich-hieu-hai-binh-phuong`. **Độ khó khai báo:** `basic`.

## RAT07V1_025

Nguồn: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json`

**Đề:** Chọn khẳng định đúng:

**Đáp án lựa chọn:**
- A. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) bằng nhau trên miền \(x\ne2\).
- B. \(\frac{x+1}{x-2}\) và \(\frac{2x+2}{2x-4}\) không bao giờ bằng nhau.
- C. Hai biểu thức chỉ bằng nhau khi x=0.
- D. Có thể bỏ mọi điều kiện xác định khi rút gọn.

**Đúng:** A (index 0). **Giải thích:** Nhân chéo hoặc rút gọn cho thấy hai biểu thức bằng nhau trên miền xác định của biểu thức ban đầu.

**Tag gốc:** `hai-phan-thuc-bang-nhau`, `giu-dieu-kien-ban-dau`. **Type:** `hai-phan-thuc-bang-nhau`. **Độ khó khai báo:** `intermediate`.

## SYS09V1_029

Nguồn: `docs/assets/data/practice/09-he-phuong-trinh-v1-01.json`

**Đề:** Hệ \(\begin{cases}1x+1y=3\\1x-1y=2\end{cases}\) có bao nhiêu nghiệm?

**Đáp án lựa chọn:**
- A. Hệ có đúng một nghiệm
- B. Hệ vô nghiệm
- C. Hệ có vô số nghiệm
- D. Không đủ dữ kiện

**Đúng:** A (index 0). **Giải thích:** Hai phương trình biểu diễn hai đường thẳng có hệ số không tỉ lệ nên cắt nhau tại một điểm.

**Tag gốc:** `so-nghiem-he`, `y-nghia-hinh-hoc`. **Type:** `so-nghiem-he`. **Độ khó khai báo:** `intermediate`.

## SYS09V1_089

Nguồn: `docs/assets/data/practice/09-he-phuong-trinh-v1-03.json`

**Đề:** Tổng của hai số là 14 và hiệu của số lớn với số bé là 6. Nếu gọi số lớn là \(x\), số bé là \(y\), hệ nào mô tả bài toán?

**Đáp án lựa chọn:**
- A. \(\begin{cases}x+y=14\\x-y=6\end{cases}\)
- B. \(\begin{cases}x+y=6\\x-y=14\end{cases}\)
- C. \(\begin{cases}x-y=14\\x+y=-6\end{cases}\)
- D. \(\begin{cases}xy=14\\x-y=6\end{cases}\)

**Đúng:** A (index 0). **Giải thích:** Tổng cho phương trình \(x+y\), còn hiệu số lớn trừ số bé cho phương trình \(x-y\).

**Tag gốc:** `lap-he-bai-toan`, `bai-toan-so`. **Type:** `lap-he-bai-toan`. **Độ khó khai báo:** `basic`.

## FUN10V1_103

Nguồn: `docs/assets/data/practice/10-ham-so-do-thi-v1-04.json`

**Đề:** Giao điểm của \(d_1:y=x+3\) và \(d_2:y=-x+1\) là điểm nào?

**Đáp án lựa chọn:**
- A. \((-1;2)\)
- B. \((0;2)\)
- C. \((-1;3)\)
- D. \((2;-1)\)

**Đúng:** A (index 0). **Giải thích:** Tại giao điểm, hai biểu thức của \(y\) bằng nhau. Giải phương trình theo \(x\) rồi thế lại tìm \(y\).

**Tag gốc:** `giao-diem-do-thi`, `lien-he-he-phuong-trinh`. **Type:** `giao-diem-do-thi`. **Độ khó khai báo:** `intermediate`.

## RAD11V1_043

Nguồn: `docs/assets/data/practice/11-can-thuc-v1-02.json`

**Đề:** Rút gọn \(\sqrt{8}\).

**Đáp án lựa chọn:**
- A. \(2\sqrt{2}\)
- B. \(3\sqrt{2}\)
- C. \(2\sqrt{3}\)
- D. \(\sqrt{4}\)

**Đúng:** A (index 0). **Giải thích:** Ta có \(8=2^2\cdot 2\), nên \(\sqrt{8}=2\sqrt{2}\).

**Tag gốc:** `khai-phuong-tich`, `dua-thua-so-ra`. **Type:** `rut-gon-can-so`. **Độ khó khai báo:** `basic`.

