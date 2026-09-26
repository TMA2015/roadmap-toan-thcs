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

