# Toán THPT · Chương VI · Bài 15 — Canonical Candidates v0.1

**Status:** DRAFT_NOT_ACADEMICALLY_REVIEWED / CANDIDATE_IDS_ONLY / NO_MASTERY_CREDIT.
**Source:** SGK Toán 10 KNTT tập 2 Bài 15, trang in 4–10; SBT Toán 10 KNTT tập 2 Bài 15, trang in 3–9. Đã quan sát trực tiếp bản quét, không OCR.
**Nature:** 9 bài tự biên soạn: 2 SGK Core, 4 Practice/Vận dụng, 3 held-out Readiness candidates. Không chép nguyên đề SGK/SBT; chưa phát hành bài tập chính thức. Đáp án ở file nội bộ này **không được nhúng vào client Readiness trước Final Submit**.

## 1. Candidate register

| Candidate ID | SGK role | Tái sử dụng phù hợp ở Chuyên đề | Skill | Trạng thái |
|---|---|---|---|---|
| THPT-G10-B15-C01 | SGK_CORE | TOPIC_PRACTICE cơ bản | FUNCTION_MAPPING | NOT_REVIEWED |
| THPT-G10-B15-C02 | SGK_CORE | TOPIC_PRACTICE cơ bản | FUNCTION_DOMAIN | NOT_REVIEWED |
| THPT-G10-B15-P01 | SGK_PRACTICE | TOPIC_PRACTICE cơ bản | FUNCTION_DOMAIN | NOT_REVIEWED |
| THPT-G10-B15-P02 | SGK_PRACTICE | TOPIC_PRACTICE luyện tập | FUNCTION_PIECEWISE | NOT_REVIEWED |
| THPT-G10-B15-P03 | SGK_PRACTICE | TOPIC_PRACTICE luyện tập | FUNCTION_MONOTONIC | NOT_REVIEWED |
| THPT-G10-B15-P04 | SGK_CHAPTER_APPLICATION | TOPIC_PRACTICE vận dụng | FUNCTION_MODELING | NOT_REVIEWED |
| THPT-G10-B15-R01 | SGK_CHAPTER_READINESS candidate | TOPIC_READINESS if independently eligible | FUNCTION_MAPPING | HELD_OUT / NO_CREDIT |
| THPT-G10-B15-R02 | SGK_CHAPTER_READINESS candidate | TOPIC_READINESS if independently eligible | FUNCTION_PIECEWISE | HELD_OUT / NO_CREDIT |
| THPT-G10-B15-R03 | SGK_CHAPTER_READINESS candidate | TOPIC_READINESS if independently eligible | FUNCTION_MONOTONIC | HELD_OUT / NO_CREDIT |

## 2. Core (có gợi ý, chấm sau Check)

### THPT-G10-B15-C01
**Đề:** Bảng số liệu cho ba cặp \((x;y)\): \((1;3),(2;4),(2;5)\). Đây có phải hàm số của \(x\) không?
**Đáp án:** Không.
**Giải:** Cùng đầu vào \(x=2\) lại có hai giá trị đầu ra khác nhau \(4\) và \(5\); vi phạm điều kiện duy nhất.
**Hint:** Xem mỗi giá trị \(x\) có đúng một \(y\) hay không.

### THPT-G10-B15-C02
**Đề:** Tìm tập xác định của \(f(x)=\sqrt{2x-3}\) trong \(\mathbb R\).
**Đáp án:** \(D=[\frac32;+\infty)\).
**Giải:** \(2x-3\ge0\iff x\ge3/2\).
**Hint:** Điều kiện căn bậc hai số học.

## 3. Practice / Vận dụng (gợi ý tùy chọn)

### THPT-G10-B15-P01
**Đề:** Tìm tập xác định của \(g(x)=\frac{x+1}{x^2-9}\).
**Đáp án:** \(\mathbb R\setminus\{-3;3\}\).
**Giải:** Mẫu khác 0: \(x^2-9=(x-3)(x+3)\ne0\).
**Hint:** Xét điều kiện mẫu.

### THPT-G10-B15-P02
**Đề:** Một dịch vụ giả định tính phí (nghìn đồng) \(C(x)=8x\) khi \(0\le x\le2\), và \(C(x)=16+6(x-2)\) khi \(x>2\), với \(x\) km. Tính \(C(2)\), \(C(3)\).
**Đáp án:** \(16\) và \(22\) nghìn đồng.
**Giải:** \(2\) thuộc nhánh đầu: \(8\cdot2=16\); \(3\) thuộc nhánh thứ hai: \(16+6(3-2)=22\).
**Hint:** Chọn công thức theo khoảng của đầu vào.
**Note:** Cùng hàm minh họa trong bài giảng B15; không thể dùng chính câu này để chứng nhận Readiness độc lập.

### THPT-G10-B15-P03
**Đề:** Hàm \(f(x)=|x+2|\) đồng biến/nghịch biến trên những khoảng nào?
**Đáp án:** Nghịch biến trên \((-\infty;-2)\), đồng biến trên \((-2;+\infty)\).
**Giải:** \(f(x)=-(x+2)\) khi \(x<-2\) và \(f(x)=x+2\) khi \(x\ge-2\); hệ số góc lần lượt \(-1,+1\).
**Hint:** Viết \(|u|\) thành hai công thức theo dấu \(u\).

### THPT-G10-B15-P04
**Đề:** Một mô hình thuê xe tính \(100\) nghìn đồng cho quãng đường lớn hơn 0 và không quá \(2\) km; từ trên \(2\) km tính thêm \(12\) nghìn đồng/km. Nếu ngân sách tối đa \(160\) nghìn đồng, quãng đường \(x\) (km) đi được nằm trong khoảng nào?
**Đáp án:** \(0<x\le7\).
**Giải:** \(0<x\le2\) có phí \(100\le160\). Với \(x>2\), \(C(x)=100+12(x-2)\le160\iff x\le7\). Gộp được \((0;7]\).
**Hint:** Giải bất phương trình trên từng miền, sau đó hợp nghiệm.

## 4. Readiness held-out candidates — chỉ để lập ma trận review

Các câu sau chỉ là ứng viên chuẩn bị, không được đưa vào demo học sinh, không ghi điểm/mastery, chưa được đánh giá đủ phạm vi Tự kiểm tra cả Chương VI. Nếu một item từng xuất hiện ở Practice và đã lộ lời giải, không được tính lại như bằng chứng độc lập.

| Candidate ID | Đề | Khóa đáp án nội bộ |
|---|---|---|
| THPT-G10-B15-R01 | Trong bảng \((1;4),(2;5),(2;5)\), dữ liệu có mô tả hàm số \(y\) theo \(x\) không? Tập xác định là gì? | Có; tập xác định \(\{1;2\}\). Trùng đầu vào \(x=2\) nhưng đầu ra đều bằng \(5\), không vi phạm tính duy nhất |
| THPT-G10-B15-R02 | \(F(x)=5x\) trên \(0\le x\le3\); \(F(x)=15+2(x-3)\) trên \(x>3\). Tính \(F(4)\). | \(17\), vì \(4>3\), dùng nhánh thứ hai |
| THPT-G10-B15-R03 | Hàm \(h(x)=-2x+4\) đồng biến hay nghịch biến trên \(\mathbb R\)? | Nghịch biến; khi \(x_1<x_2\), \(h(x_1)>h(x_2)\) |

## 5. Gates

- 9 IDs ứng viên, không nhân bản ba câu Readiness trong hai nhánh.
- Các hình đồ thị, ví dụ đơn giản từ SGK/SBT có thể dùng chung nguồn, nhưng trang kiến thức mỗi nhánh phải đủ độc lập.
- Cần review theo batch SGK Chương VI; mỗi item có outcome và skill mapping, answer/hint và bài toán thực tế có miền điều kiện rõ.
- Chỉ phân phối Readiness thật sau Final Submit, với giữ riêng khóa đáp án và kiểm soát exposure; không bật production từ ngân hàng này.
