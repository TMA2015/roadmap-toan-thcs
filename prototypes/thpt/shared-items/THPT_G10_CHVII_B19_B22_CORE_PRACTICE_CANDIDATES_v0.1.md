# Toán 10 KNTT · Chương VII — Core và Luyện tập/Vận dụng ứng viên v0.1

**Status:** DRAFT_NOT_ACADEMICALLY_REVIEWED · NO_MASTERY_CREDIT · CANDIDATE_ONLY

**Nguồn S1:** SGK Toán 10 tập 2 Chương VII tr.29–60; SBT tập 2 tr.27–49, dựa trên việc đọc trực quan bản quét gốc. Chi tiết tại `THPT_G10_CHVII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md`. Không chép nguyên bài từ sách.

**Quy mô:** 24 item ứng viên = 8 Core + 12 Practice + 4 Vận dụng. Mỗi item có **một ID, một đáp án và một lời giải chuẩn**. Chưa đăng ký thành ngân hàng production; không sử dụng làm mastery hay Tự kiểm tra chính thức. Các ID tham chiếu Chuyên đề là placement khả dĩ, không ngụ ý chuyên đề dọc 10–12 đã hoàn chỉnh.

**Lưu trữ:** file `prototypes/` nội bộ phát triển, không phải route học sinh của website. Repo GitHub có thể là công khai: **mọi đáp án ở đây chỉ phục vụ Practice**, tuyệt đối không dùng nguyên xi item đã lộ làm Readiness độc lập.

## A. Register 24 canonical candidates

| Item ID | Bài | SGK role | Chuyên đề role dự kiến | Skill | Academic |
|---|---|---|---|---|---|
| THPT-G10-B19-C01 | B19 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_NORMAL_DIRECTION | NOT_REVIEWED |
| THPT-G10-B19-C02 | B19 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_POINT_NORMAL | NOT_REVIEWED |
| THPT-G10-B19-P01 | B19 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_PARAMETRIC | NOT_REVIEWED |
| THPT-G10-B19-P02 | B19 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_TWO_POINTS | NOT_REVIEWED |
| THPT-G10-B19-P03 | B19 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_MEMBERSHIP | NOT_REVIEWED |
| THPT-G10-B19-P04 | B19 | SGK_CHAPTER_APPLICATION | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_LINEAR_MODEL | NOT_REVIEWED |
| THPT-G10-B20-C01 | B20 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_RELATIVE_POSITION | NOT_REVIEWED |
| THPT-G10-B20-C02 | B20 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_PERPENDICULAR | NOT_REVIEWED |
| THPT-G10-B20-P01 | B20 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_INTERSECTION | NOT_REVIEWED |
| THPT-G10-B20-P02 | B20 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | POINT_LINE_DISTANCE | NOT_REVIEWED |
| THPT-G10-B20-P03 | B20 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_ANGLE | NOT_REVIEWED |
| THPT-G10-B20-P04 | B20 | SGK_CHAPTER_APPLICATION | TOPIC_PRACTICE (nếu scope phù hợp) | LINE_PERPENDICULAR_THROUGH_POINT | NOT_REVIEWED |
| THPT-G10-B21-C01 | B21 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_STANDARD_EQUATION | NOT_REVIEWED |
| THPT-G10-B21-C02 | B21 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_CENTER_RADIUS | NOT_REVIEWED |
| THPT-G10-B21-P01 | B21 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_DIAMETER | NOT_REVIEWED |
| THPT-G10-B21-P02 | B21 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_TANGENT | NOT_REVIEWED |
| THPT-G10-B21-P03 | B21 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_LINE_TANGENCY | NOT_REVIEWED |
| THPT-G10-B21-P04 | B21 | SGK_CHAPTER_APPLICATION | TOPIC_PRACTICE (nếu scope phù hợp) | CIRCLE_THROUGH_THREE_POINTS | NOT_REVIEWED |
| THPT-G10-B22-C01 | B22 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | ELLIPSE_PARAMETERS | NOT_REVIEWED |
| THPT-G10-B22-C02 | B22 | SGK_CORE | TOPIC_PRACTICE (nếu scope phù hợp) | HYPERBOLA_PARAMETERS | NOT_REVIEWED |
| THPT-G10-B22-P01 | B22 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | ELLIPSE_FROM_FOCI | NOT_REVIEWED |
| THPT-G10-B22-P02 | B22 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | HYPERBOLA_FROM_VERTICES | NOT_REVIEWED |
| THPT-G10-B22-P03 | B22 | SGK_PRACTICE | TOPIC_PRACTICE (nếu scope phù hợp) | PARABOLA_FROM_FOCUS | NOT_REVIEWED |
| THPT-G10-B22-P04 | B22 | SGK_CHAPTER_APPLICATION | TOPIC_PRACTICE (nếu scope phù hợp) | PARABOLA_FOCUS_DIRECTRIX | NOT_REVIEWED |

## B. Đề, đáp án, lời giải và gợi ý

## Bài 19 — Phương trình đường thẳng

Nguồn liên quan đã quan sát: SGK 29–34; SBT 27–31. Các câu dưới đây do dự án tự soạn, chưa qua NotebookLM.

### THPT-G10-B19-C01 — CORE

**Đề:** Cho đường thẳng Δ: \(3x-2y+6=0\). Nêu một vectơ pháp tuyến và một vectơ chỉ phương của Δ.

**Đáp án chuẩn:** \(\vec n=(3;-2)\); \(\vec u=(2;3)\).

**Lời giải:** Các hệ số trước \(x,y\) cho \(\vec n\); \(\vec u\cdot\vec n=2\cdot3+3(-2)=0\).

**Gợi ý (chỉ khi luyện tập):** Nhận diện vectơ pháp tuyến trước.

### THPT-G10-B19-C02 — CORE

**Đề:** Viết phương trình tổng quát đường thẳng qua \(A(1;2)\) và có vectơ pháp tuyến \(\vec n=(2;-1)\).

**Đáp án chuẩn:** \(2x-y=0\).

**Lời giải:** \(2(x-1)-(y-2)=0\Rightarrow2x-y=0\).

**Gợi ý (chỉ khi luyện tập):** Thay (A) và (ec n) vào (a(x-x_0)+b(y-y_0)=0).

### THPT-G10-B19-P01 — PRACTICE

**Đề:** Viết phương trình tham số đường thẳng qua \(A(-1;2)\), nhận \(\vec u=(3;-2)\) làm vectơ chỉ phương.

**Đáp án chuẩn:** \(x=-1+3t,\ y=2-2t,\ t\in\mathbb R\).

**Lời giải:** Mọi điểm trên đường thẳng có tọa độ \(A+t\vec u\).

**Gợi ý (chỉ khi luyện tập):** Dùng điểm gốc cộng (t) lần vectơ chỉ phương.

### THPT-G10-B19-P02 — PRACTICE

**Đề:** Viết phương trình tổng quát đường thẳng qua \(A(1;2)\) và \(B(4;-1)\).

**Đáp án chuẩn:** \(x+y-3=0\).

**Lời giải:** \(\overrightarrow{AB}=(3;-3)\), một pháp tuyến là \((1;1)\). Qua \(A\): \((x-1)+(y-2)=0\).

**Gợi ý (chỉ khi luyện tập):** Tìm vectơ AB rồi một pháp tuyến vuông góc.

### THPT-G10-B19-P03 — PRACTICE

**Đề:** Kiểm tra \(M(2;3)\) và \(N(0;0)\) có thuộc Δ: \(2x-y-1=0\) không.

**Đáp án chuẩn:** \(M\in\Delta,\ N\notin\Delta\).

**Lời giải:** Thế \(M\): \(4-3-1=0\); thế \(N\): \(-1\ne0\).

**Gợi ý (chỉ khi luyện tập):** Thế tọa độ mỗi điểm vào phương trình tổng quát.

### THPT-G10-B19-P04 — APPLICATION

**Đề:** Một mô hình nhiệt độ \(T\) (°C) theo thời gian \(t\) (giờ) có đồ thị đường thẳng qua \((0;20)\) và \((5;5)\), trong \(0\le t\le5\). Lập \(T(t)\) và tìm thời điểm \(T=11\)°C.

**Đáp án chuẩn:** \(T(t)=20-3t\), \(t=3\) giờ.

**Lời giải:** Độ dốc \((5-20)/(5-0)=-3\), nên \(T=20-3t\); giải \(20-3t=11\) cho \(t=3\), thuộc miền.

**Gợi ý (chỉ khi luyện tập):** Tìm hệ số góc theo hai điểm và nhớ miền thực tế.

## Bài 20 — Vị trí tương đối hai đường thẳng, góc và khoảng cách

Nguồn liên quan đã quan sát: SGK 35–41; SBT 31–38. Các câu dưới đây do dự án tự soạn, chưa qua NotebookLM.

### THPT-G10-B20-C01 — CORE

**Đề:** Xét \(d_1:2x-y+3=0\), \(d_2:4x-2y-5=0\). Hai đường có vị trí tương đối nào?

**Đáp án chuẩn:** Song song và phân biệt.

**Lời giải:** Hệ số \(x,y\) của \(d_2\) bằng 2 lần hệ số của \(d_1\), nhưng hằng số \(-5\ne6\); do đó không trùng.

**Gợi ý (chỉ khi luyện tập):** So sánh cả ba hệ số khi kiểm tra trùng nhau.

### THPT-G10-B20-C02 — CORE

**Đề:** Hai đường \(d_1:x+2y=0\) và \(d_2:2x-y+4=0\) có vuông góc không?

**Đáp án chuẩn:** Có, chúng vuông góc.

**Lời giải:** Pháp tuyến \(\vec n_1=(1;2)\), \(\vec n_2=(2;-1)\) có tích vô hướng \(2-2=0\).

**Gợi ý (chỉ khi luyện tập):** Kiểm tra tích vô hướng của hai vectơ pháp tuyến.

### THPT-G10-B20-P01 — PRACTICE

**Đề:** Tìm giao điểm \(d_1:x+y-3=0\) và \(d_2:x-y-1=0\).

**Đáp án chuẩn:** \(I(2;1)\).

**Lời giải:** Giải hệ \(x+y=3,\ x-y=1\) được \(x=2,y=1\).

**Gợi ý (chỉ khi luyện tập):** Giải hệ hai phương trình đường thẳng.

### THPT-G10-B20-P02 — PRACTICE

**Đề:** Tính khoảng cách từ \(P(1;-2)\) đến đường \(d:3x+4y-5=0\).

**Đáp án chuẩn:** \(d(P,d)=2\).

**Lời giải:** \(\dfrac{|3\cdot1+4(-2)-5|}{\sqrt{3^2+4^2}}=\dfrac{10}{5}=2\).

**Gợi ý (chỉ khi luyện tập):** Tử là trị tuyệt đối; mẫu là độ dài vectơ pháp tuyến.

### THPT-G10-B20-P03 — PRACTICE

**Đề:** Tìm góc nhọn giữa \(d_1:x-y=0\) và \(d_2:x=0\).

**Đáp án chuẩn:** \(45^\circ\).

**Lời giải:** Pháp tuyến \((1;-1)\), \((1;0)\) có \(|\cos\varphi|=1/\sqrt2\). Do đó góc nhọn là \(45^\circ\).

**Gợi ý (chỉ khi luyện tập):** Dùng giá trị tuyệt đối trong công thức góc giữa hai đường.

### THPT-G10-B20-P04 — APPLICATION

**Đề:** Viết đường thẳng qua \(A(2;-1)\) và vuông góc với \(d:3x-4y+2=0\).

**Đáp án chuẩn:** \(4x+3y-5=0\).

**Lời giải:** Một pháp tuyến của đường cần tìm là vectơ chỉ phương \((4;3)\) của \(d\). Dùng \(A\): \(4(x-2)+3(y+1)=0\).

**Gợi ý (chỉ khi luyện tập):** Đường vuông góc với d có pháp tuyến song song vectơ chỉ phương d.

## Bài 21 — Đường tròn trong mặt phẳng tọa độ

Nguồn liên quan đã quan sát: SGK 42–46; SBT 38–41. Các câu dưới đây do dự án tự soạn, chưa qua NotebookLM.

### THPT-G10-B21-C01 — CORE

**Đề:** Viết phương trình đường tròn tâm \(I(1;-2)\), bán kính \(R=3\).

**Đáp án chuẩn:** \((x-1)^2+(y+2)^2=9\).

**Lời giải:** Áp dụng \((x-a)^2+(y-b)^2=R^2\).

**Gợi ý (chỉ khi luyện tập):** Dấu trong ngoặc ngược với tọa độ tâm.

### THPT-G10-B21-C02 — CORE

**Đề:** Tìm tâm và bán kính đường tròn \(x^2+y^2-4x+6y-12=0\).

**Đáp án chuẩn:** Tâm \(I(2;-3)\), bán kính \(R=5\).

**Lời giải:** Hoàn thành bình phương: \((x-2)^2+(y+3)^2=25\).

**Gợi ý (chỉ khi luyện tập):** Gom (x) và (y) thành các bình phương.

### THPT-G10-B21-P01 — PRACTICE

**Đề:** Viết phương trình đường tròn đường kính \(AB\), với \(A(-2;1)\), \(B(4;5)\).

**Đáp án chuẩn:** \((x-1)^2+(y-3)^2=13\).

**Lời giải:** Trung điểm \(I(1;3)\); \(AB^2=6^2+4^2=52\), \(R^2=AB^2/4=13\).

**Gợi ý (chỉ khi luyện tập):** Tâm là trung điểm đường kính, bán kính bằng một nửa độ dài AB.

### THPT-G10-B21-P02 — PRACTICE

**Đề:** Viết tiếp tuyến của đường tròn \(x^2+y^2=25\) tại \(M(3;4)\).

**Đáp án chuẩn:** \(3x+4y=25\).

**Lời giải:** \(\overrightarrow{OM}=(3;4)\) là pháp tuyến của tiếp tuyến tại \(M\). Phương trình \(3(x-3)+4(y-4)=0\).

**Gợi ý (chỉ khi luyện tập):** Bán kính tại tiếp điểm vuông góc tiếp tuyến.

### THPT-G10-B21-P03 — PRACTICE

**Đề:** Xét \((C):(x-1)^2+(y+1)^2=4\) và đường thẳng \(d:x=3\). \(d\) có tiếp xúc với \((C)\) không? Nêu tiếp điểm.

**Đáp án chuẩn:** Có, tiếp xúc tại \(H(3;-1)\).

**Lời giải:** Tâm \((1;-1)\), \(R=2\), khoảng cách từ tâm đến \(x=3\) bằng \(2\). Hình chiếu vuông góc là \(H(3;-1)\).

**Gợi ý (chỉ khi luyện tập):** So sánh khoảng cách từ tâm đến đường với bán kính.

### THPT-G10-B21-P04 — APPLICATION

**Đề:** Tìm đường tròn qua \(A(0;0)\), \(B(4;0)\), \(C(0;2)\).

**Đáp án chuẩn:** \((x-2)^2+(y-1)^2=5\).

**Lời giải:** Tam giác ABC vuông tại A; tâm ngoại tiếp là trung điểm BC, \(I(2;1)\), \(R^2=IA^2=5\).

**Gợi ý (chỉ khi luyện tập):** Có thể tìm tâm bằng đường trung trực, hoặc dùng tính chất tam giác vuông.

## Bài 22 — Ba đường conic

Nguồn liên quan đã quan sát: SGK 47–56; SBT 41–45. Các câu dưới đây do dự án tự soạn, chưa qua NotebookLM.

### THPT-G10-B22-C01 — CORE

**Đề:** Cho elip \(E:\dfrac{x^2}{25}+\dfrac{y^2}{9}=1\). Tìm hai tiêu điểm và tâm sai.

**Đáp án chuẩn:** \(F_1(-4;0),F_2(4;0)\), \(e=4/5\).

**Lời giải:** \(a=5,b=3,c=\sqrt{a^2-b^2}=\sqrt{16}=4\), \(e=c/a=4/5\).

**Gợi ý (chỉ khi luyện tập):** Elip có (c^2=a^2-b^2).

### THPT-G10-B22-C02 — CORE

**Đề:** Cho hypebol \(H:\dfrac{x^2}{9}-\dfrac{y^2}{16}=1\). Tìm hai tiêu điểm và hai tiệm cận.

**Đáp án chuẩn:** \(F_{1,2}=(\mp5;0)\); \(y=\pm\frac43x\).

**Lời giải:** \(a=3,b=4,c=\sqrt{a^2+b^2}=5\). Tiệm cận \(y=\pm(b/a)x\).

**Gợi ý (chỉ khi luyện tập):** Hypebol có (c^2=a^2+b^2), khác elip.

### THPT-G10-B22-P01 — PRACTICE

**Đề:** Elip có tiêu điểm \((-3;0)\), \((3;0)\), độ dài trục lớn \(10\). Viết phương trình chính tắc.

**Đáp án chuẩn:** \(\dfrac{x^2}{25}+\dfrac{y^2}{16}=1\).

**Lời giải:** \(a=5,c=3,b^2=a^2-c^2=16\).

**Gợi ý (chỉ khi luyện tập):** Dùng độ dài trục lớn (2a) và khoảng cách tiêu điểm (2c).

### THPT-G10-B22-P02 — PRACTICE

**Đề:** Hypebol có hai đỉnh \((-2;0),(2;0)\), hai tiêu điểm \((-\sqrt{13};0),(\sqrt{13};0)\). Viết phương trình chính tắc.

**Đáp án chuẩn:** \(\dfrac{x^2}{4}-\dfrac{y^2}{9}=1\).

**Lời giải:** \(a=2,c=\sqrt{13},b^2=c^2-a^2=9\).

**Gợi ý (chỉ khi luyện tập):** Hypebol: trừ (y^2/b^2) và (c^2=a^2+b^2).

### THPT-G10-B22-P03 — PRACTICE

**Đề:** Viết phương trình chính tắc của parabol có tiêu điểm \(F(2;0)\) và đường chuẩn \(x=-2\).

**Đáp án chuẩn:** \(y^2=8x\).

**Lời giải:** Với \(y^2=2px\), tiêu điểm \((p/2;0)\), đường chuẩn \(x=-p/2\), nên \(p=4\).

**Gợi ý (chỉ khi luyện tập):** Dùng quy ước SGK (y^2=2px), (p>0).

### THPT-G10-B22-P04 — APPLICATION

**Đề:** Một mặt cắt chảo phản xạ được mô hình bằng \(y^2=12x\) (đơn vị cm). Xác định tiêu điểm và đường chuẩn.

**Đáp án chuẩn:** \(F(3;0)\), đường chuẩn \(x=-3\) (cm).

**Lời giải:** So với \(y^2=2px\) được \(p=6\); \(F(p/2;0)=(3;0)\), đường chuẩn \(x=-p/2=-3\). Đây là mô hình hình học lý tưởng, không phải thông số thiết bị thực.

**Gợi ý (chỉ khi luyện tập):** So hệ số (12) với (2p); đừng nhầm (p) với tiêu cự đến đỉnh.


## C. Gate và nguyên tắc sử dụng

- Academic/answer QA là **tự kiểm nội bộ**, không phải NotebookLM PASS. Cần thẩm định độ khó, tính độc lập của hai nhánh, điều kiện tham số và diễn đạt theo SGK/SBT.
- SGK chương VII có Core ở từng bài; luyện tập theo bài/chương; **Tự kiểm tra cuối chương** độc lập. Chuyên đề dọc có đúng **Kiến thức / Luyện tập / Tự kiểm tra** và không có Core tab.
- Câu cùng ID được dùng ở nhiều Practice placements phù hợp; không nhân bản đáp án/lịch sử. Các câu này được định hướng có hint, **không phải nguồn cho đề held-out** khi người học đã thấy lời giải.
- Tách riêng blueprint đánh giá Chương VII, không đưa answer key vào bundle ứng dụng trước Final Submit.
- Chưa merge, chưa deploy, chưa cập nhật trang SGK Golden UI R4, chưa Academic PASS.
