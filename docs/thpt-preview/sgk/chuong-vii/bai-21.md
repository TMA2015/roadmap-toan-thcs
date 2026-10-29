# Bài 21. Đường tròn trong mặt phẳng tọa độ

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng học Toán 10 Chương VII"><a href="../">Tổng quan Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Phương trình đường tròn

Đường tròn tâm \(I(a;b)\), bán kính \(R>0\) có phương trình:

\[
(x-a)^2+(y-b)^2=R^2.
\]

Phương trình tổng quát \(x^2+y^2+Dx+Ey+F=0\) biểu diễn **đường tròn thực có bán kính dương** khi

\[
I\left(-\frac D2;-\frac E2\right),\qquad R^2=\frac{D^2+E^2}{4}-F>0.
\]

Nếu \(R^2=0\), tập điểm chỉ có một điểm; nếu \(R^2<0\), không có điểm thực. Không gọi hai trường hợp này là đường tròn có bán kính dương.

## 2. Tiếp tuyến và vị trí với đường thẳng

Tại điểm \(M(x_M;y_M)\) **thuộc đường tròn**, tiếp tuyến vuông góc với bán kính \(IM\):

\[
(x_M-a)(x-x_M)+(y_M-b)(y-y_M)=0.
\]

Với đường thẳng \(d\), đặt \(h=d(I,d)\):

- \(h<R\): hai giao điểm;
- \(h=R\): tiếp xúc;
- \(h>R\): không giao nhau.

## 3. Ví dụ có kiểm tra

Với \(x^2+y^2-4x+6y-12=0\), hoàn thành bình phương:

\[
(x-2)^2+(y+3)^2=25.
\]

Vậy \(I(2;-3)\) và \(R=5\). Điểm \(M(5;1)\) thuộc đường tròn vì \(IM^2=3^2+4^2=25\). Vectơ \(IM=(3;4)\) là pháp tuyến của tiếp tuyến tại \(M\), nên:

\[
3(x-5)+4(y-1)=0\iff \boxed{3x+4y-19=0}.
\]

!!! tip "Nhớ kiểm tra"
    Để viết tiếp tuyến **tại một điểm**, phải xác nhận điểm đó thuộc đường tròn. Đừng nhầm bán kính \(R\) với \(R^2\).

## 4. Tiếp tục học

- [Bài 22 — Ba đường conic](bai-22.md).
- [Core và Luyện tập/Vận dụng](luyen-tap.md).

<small>Nguồn đối chiếu: SGK KNTT tập 2, trang in 42–46; SBT trang 38–41. Ví dụ do dự án biên soạn.</small>
