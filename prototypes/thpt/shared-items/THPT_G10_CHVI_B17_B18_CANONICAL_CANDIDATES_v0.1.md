# Toán THPT · Chương VI · Bài 17–18 — Canonical Candidates v0.1

**Status:** DRAFT_NOT_ACADEMICALLY_REVIEWED; NO_CREDIT; IDs chỉ là ứng viên dự kiến, chưa phát hành.
**Nguồn S1 đối chiếu:** SGK Toán 10 KNTT tập 2, B17 trang 19–24 và B18 trang 25–27; SBT B17 trang 16–18 và B18 trang 19–21.
**Xuất xứ bài:** 16 câu và lời giải tự biên soạn; không chép nguyên bài SGK/SBT. Không thuộc snapshot B16 đã Academic PASS.
**Lưu trữ:** Trong prototypes/thpt, không thuộc trang docs công khai của ứng dụng. Không đưa đáp án của các câu Tự kiểm tra vào bản HTML hoặc JS trước Final Submit.

## A. Item register — 16 câu dự kiến, một ID duy nhất mỗi câu

| ID | Vai trò SGK | Placement Chuyên đề dự kiến | Skill gọn | Academic |
|---|---|---|---|---|
| THPT-G10-B17-C01 | CORE | Practice cơ bản | QUAD_SIGN | PENDING |
| THPT-G10-B17-C02 | CORE | Practice cơ bản | QUAD_SIGN_DOUBLE | PENDING |
| THPT-G10-B17-P01 | PRACTICE | Practice luyện tập | QUAD_INEQUALITY | PENDING |
| THPT-G10-B17-P02 | PRACTICE | Practice luyện tập | QUAD_INEQUALITY | PENDING |
| THPT-G10-B17-P03 | PRACTICE vận dụng | Practice vận dụng | QUAD_PARAM | PENDING |
| THPT-G10-B17-P04 | PRACTICE vận dụng | Practice vận dụng | QUAD_MODELING | PENDING |
| THPT-G10-B18-C01 | CORE | Practice cơ bản | RADICAL_CONDITION | PENDING |
| THPT-G10-B18-C02 | CORE | Practice cơ bản | RADICAL_TWO_ROOTS | PENDING |
| THPT-G10-B18-P01 | PRACTICE | Practice luyện tập | RADICAL_FILTER | PENDING |
| THPT-G10-B18-P02 | PRACTICE | Practice luyện tập | RADICAL_FILTER | PENDING |
| THPT-G10-B18-P03 | PRACTICE hiểu bản chất | Practice hiểu bản chất | RADICAL_DOMAIN | PENDING |
| THPT-G10-B18-P04 | PRACTICE vận dụng | Practice vận dụng | RADICAL_MODELING | PENDING |
| THPT-G10-B17-R01 | SGK Chapter Readiness candidate | Topic Readiness, nếu đạt scope | QUAD_INEQUALITY | HELD_OUT |
| THPT-G10-B17-R02 | SGK Chapter Readiness candidate | Topic Readiness, nếu đạt scope | QUAD_PARAM | HELD_OUT |
| THPT-G10-B18-R01 | SGK Chapter Readiness candidate | Topic Readiness, nếu đạt scope | RADICAL_FILTER | HELD_OUT |
| THPT-G10-B18-R02 | SGK Chapter Readiness candidate | Topic Readiness, nếu đạt scope | RADICAL_TWO_ROOTS | HELD_OUT |

Cùng item_id có thể dùng nhiều nơi qua placement_id; không nhân bản đề/đáp án/hồ sơ. Role Readiness **không mặc định đủ điều kiện** chỉ vì có bản ghi trong bảng.

## B. Bài 17 — Core

### THPT-G10-B17-C01
**Đề:** Xét dấu \(f(x)=x^2-4x+8\) trên \(\mathbb R\).
**Đáp án:** \(f(x)>0\) với mọi \(x\in\mathbb R\).
**Giải:** \(a=1>0,\ \Delta=16-32=-16<0\) nên dấu luôn cùng dấu \(a\).
**Gợi ý Core:** Tính biệt thức, xem tam thức có nghiệm không.

### THPT-G10-B17-C02
**Đề:** Với \(g(x)=-3(x-2)^2\), tìm nơi \(g(x)=0\), và có \(g(x)>0\) không?
**Đáp án:** Bằng \(0\) đúng khi \(x=2\); không có \(x\) làm \(g(x)>0\).
**Giải:** Bình phương không âm, nhân \(-3\) luôn không dương.
**Gợi ý Core:** Xét dấu \((x-2)^2\).

## C. Bài 17 — Luyện tập và vận dụng

### THPT-G10-B17-P01
**Đề:** Giải \(2x^2-10x+12\le0\).
**Đáp án:** \([2;3]\).
**Giải:** \(2(x-2)(x-3)\le0\), nhận cả hai đầu mút vì dấu \(\le\).
**Gợi ý:** Phân tích thành nhân tử và xét dấu trên ba khoảng.

### THPT-G10-B17-P02
**Đề:** Giải \(-x^2+2x+8>0\).
**Đáp án:** \((-2;4)\).
**Giải:** \(-(x-4)(x+2)>0\), tam thức hệ số đầu âm nên dương giữa hai nghiệm.
**Gợi ý:** Xét hai nghiệm \(-2,4\) và dấu hệ số \(a\).

### THPT-G10-B17-P03
**Đề:** Tìm \(m\) để \(x^2-2(m+1)x+m^2+3>0\) với mọi \(x\in\mathbb R\).
**Đáp án:** \(m<1\).
**Giải:** \(a=1>0\), điều kiện dương nghiêm ngặt toàn miền là \(\Delta<0\). Ta có \(\Delta=8(m-1)<0\iff m<1\).
**Gợi ý:** Phân biệt điều kiện \(>0\) và \(\ge0\).
**Cấp độ:** Practice vận dụng theo bài SBT, không đưa thành Core đại trà.

### THPT-G10-B17-P04
**Đề:** Có \(30\,\text{m}\) lưới rào ba cạnh hình chữ nhật sát tường. \(x\) là cạnh vuông góc tường. Diện tích **ít nhất** \(100\,\text{m}^2\) thì \(x\) nằm trong khoảng nào?
**Đáp án:** \(5\le x\le10\) m.
**Giải:** \(0<x<15\). \(S=x(30-2x)\ge100\iff 2(x-5)(x-10)\le0\), nên \(x\in[5;10]\), thỏa miền hình học.
**Gợi ý:** Viết cạnh còn lại là \(30-2x\), lập bất phương trình.

## D. Bài 18 — Core

### THPT-G10-B18-C01
**Đề:** Giải \(\sqrt{x+5}=x-1\).
**Đáp án:** \(x=4\).
**Giải:** \(x\ge1\); bình phương \(x+5=(x-1)^2\iff(x-4)(x+1)=0\). Loại \(-1\); thử \(x=4\) cho \(3=3\).
**Gợi ý Core:** Vế phải phải không âm.

### THPT-G10-B18-C02
**Đề:** Giải \(\sqrt{(x+4)^2}=\sqrt{x+4}\) trong tập số thực.
**Đáp án:** \(\{-4;-3\}\).
**Giải:** \(x+4\ge0\). Đặt \(y=x+4\ge0\); bình phương có \(y^2=y\), tức \(y=0\) hoặc \(1\). Hai giá trị tương ứng \(-4\), \(-3\), đều đạt điều kiện.
**Gợi ý Core:** Xét miền xác định trước khi bình phương.

## E. Bài 18 — Luyện tập và vận dụng

### THPT-G10-B18-P01
**Đề:** Giải \(\sqrt{3x+4}=x\).
**Đáp án:** \(x=4\).
**Giải:** Điều kiện \(x\ge0\); \(3x+4=x^2\iff(x-4)(x+1)=0\). Chỉ \(4\) hợp lệ và \(\sqrt{16}=4\).
**Gợi ý:** Bình phương rồi thử lại.

### THPT-G10-B18-P02
**Đề:** Giải \(\sqrt{2x^2+9}=x+3\).
**Đáp án:** \(\{0;6\}\).
**Giải:** \(x\ge-3\). Bình phương: \(2x^2+9=(x+3)^2\iff x(x-6)=0\). Thử \(0\) và \(6\) lần lượt cho \(3=3\), \(9=9\).
**Gợi ý:** Cần kiểm từng nghiệm sau bình phương.

### THPT-G10-B18-P03
**Đề:** Giải trong \(\mathbb R\): \(\sqrt{x^2+7x+11}=\sqrt{x+3}\).
**Đáp án:** \(x=-2\).
**Giải:** Bình phương được \((x+2)(x+4)=0\). Ứng viên \(-4\) khiến hai radicand bằng \(-1\), **không xác định trong \(\mathbb R\)**; ứng viên \(-2\) cho \(1=1\), được nhận.
**Gợi ý:** Hai căn số học chỉ có nghĩa khi cả hai biểu thức dưới căn không âm.
**Lưu ý QA:** Máy giải ký hiệu theo căn phức có thể đưa ra \(-4\), nên đáp án thực phải lọc miền.

### THPT-G10-B18-P04
**Đề:** Tam giác vuông có hai cạnh góc vuông \(x>0\) m và \(3\) m; cạnh huyền bằng \(x+1\) m. Tìm \(x\).
**Đáp án:** \(x=4\) m.
**Giải:** \(\sqrt{x^2+9}=x+1\). Bình phương được \(x^2+9=x^2+2x+1\iff x=4\), thử \(\sqrt{25}=5=4+1\).
**Gợi ý:** Dùng định lí Pythagore, giữ điều kiện độ dài dương.

## F. Held-out Readiness candidates — KHÔNG xuất bản/chấm điểm

Các câu này phải qua review riêng với ma trận phạm vi Chương VI và chuyên đề trước khi dùng trong hai bộ Tự kiểm tra. Không hiển thị đề hoặc khóa trong client trước Final Submit; không dùng câu đã bị lộ lời giải để tính thêm bằng chứng mastery độc lập.

| ID | Đề ứng viên chưa phát hành | Khóa & lý giải nội bộ |
|---|---|---|
| THPT-G10-B17-R01 | Giải \(x^2-x-6\ge0\). | \((-\infty;-2]\cup[3;+\infty)\), vì \((x+2)(x-3)\ge0\) |
| THPT-G10-B17-R02 | Tìm \(m\) để \(x^2-2mx+4>0\) với mọi \(x\). | \(-2<m<2\), do \(\Delta=4m^2-16<0\) |
| THPT-G10-B18-R01 | Giải \(\sqrt{2x+5}=x+1\). | \(x=2\); bình phương cho \(\pm2\), chỉ \(2\) đạt \(x\ge-1\) |
| THPT-G10-B18-R02 | Giải \(\sqrt{x^2+3x+2}=\sqrt{x+2}\). | \(x\in\{-2;0\}\), do \(x(x+2)=0\) và hai giá trị đều xác định |

## G. Release gates

- 16 ID ứng viên, không trùng 5 canonical IDs B16 đang review; ID ứng viên còn có thể sửa trước khi chốt registry.
- Chưa có item đủ điều kiện mastery, không tự động nâng các modal demo hiện tại thành bank production.
- Bài toán được kiểm tra đại số bằng phép giải tượng trưng và kiểm tra miền số thực thủ công.
- Cần NotebookLM review theo batch Chương VI (file Temp_ Markdown + prompt); đáp án, rubric, metadata và vị trí hiển thị chỉ phát hành khi có outcome coverage và academic clearance.
