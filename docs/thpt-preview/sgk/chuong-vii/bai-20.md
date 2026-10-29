# Bài 20. Vị trí tương đối, góc và khoảng cách

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng học Toán 10 Chương VII"><a href="../">Tổng quan Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Vị trí tương đối của hai đường thẳng

Với \(d_1:a_1x+b_1y+c_1=0\) và \(d_2:a_2x+b_2y+c_2=0\), mỗi cặp \((a_i;b_i)\ne(0;0)\):

- Nếu \(a_1b_2-a_2b_1\ne0\): hai đường **cắt nhau tại một điểm**.
- Nếu \(a_1b_2-a_2b_1=0\): cần so sánh **cả ba hệ số** để phân biệt hai đường trùng nhau hay song song phân biệt.

Hai đường **vuông góc** nếu \(a_1a_2+b_1b_2=0\).

## 2. Góc giữa hai đường và khoảng cách

Góc nhỏ \(\varphi\) giữa hai đường thẳng thỏa \(0^\circ\le\varphi\le90^\circ\):

\[
\cos\varphi=\frac{|a_1a_2+b_1b_2|}
{\sqrt{a_1^2+b_1^2}\sqrt{a_2^2+b_2^2}}.
\]

Khoảng cách từ điểm \(M(x_M;y_M)\) đến \(d:ax+by+c=0\):

\[
d(M,d)=\frac{|ax_M+by_M+c|}{\sqrt{a^2+b^2}}.
\]

Dấu giá trị tuyệt đối giúp khoảng cách không âm và góc nhỏ không phụ thuộc chiều chọn vectơ pháp tuyến.

## 3. Ví dụ từng bước

Xét \(d_1:x-y-1=0\) và \(d_2:x+y-5=0\).

1. Định thức hệ số bằng \(1\cdot1-1\cdot(-1)=2\ne0\), vậy hai đường cắt nhau.
2. Giải hệ \(x-y=1,\ x+y=5\) được \(I(3;2)\).
3. Pháp tuyến \((1;-1)\) và \((1;1)\) có tích vô hướng \(0\), vậy hai đường vuông góc.
4. Khoảng cách từ \(O(0;0)\) đến \(d_1\) bằng \(1/\sqrt2\).

!!! tip "Lỗi dễ mắc"
    Hai **pháp tuyến tỉ lệ** chỉ cho biết hai đường song song **hoặc trùng nhau**; không tự kết luận trùng. Khi dùng phương trình chứa tham số, kiểm tra các hệ số có thể đồng thời bằng 0.

## 4. Tiếp tục học

- [Bài 19 — Phương trình đường thẳng](../bai-19/).
- [Bài 21 — Đường tròn](../bai-21/).
- [Core và Luyện tập/Vận dụng](../luyen-tap/).

<small>Nguồn đối chiếu: SGK Toán 10 KNTT tập 2, trang in 35–41; SBT trang 31–38. Ví dụ do dự án biên soạn.</small>
