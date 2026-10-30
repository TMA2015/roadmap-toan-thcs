# Bài 21. Đường tròn trong mặt phẳng tọa độ

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Viết phương trình đường tròn, xác định tâm, bán kính và lập tiếp tuyến tại một điểm.</p>
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

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B21-01">
<summary>Nhầm R² với bán kính</summary>
<p><strong>Dấu hiệu:</strong> Hoàn thành bình phương ra R²≤0 nhưng vẫn coi là đường tròn có bán kính dương.</p>
<p><strong>Bản chất toán:</strong> Chỉ R²&gt;0 mới cho đường tròn thực bán kính R&gt;0. R²=0 cho một điểm; R²&lt;0 không có điểm thực.</p>
<p><strong>Tự sửa:</strong> Ôn B21 mục 1: chuyển về (x−a)²+(y−b)²=R² rồi kiểm R² trước khi lấy căn.</p>
<p><strong>Kiến thức cần ôn:</strong> Hằng đẳng thức bình phương và bình phương không âm; B21 mục 1.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B21-C02" href="../luyen-tap/?item=THPT-G10-B21-C02">Luyện lại câu 21-C02</a> · <a data-thpt-formative-id="THPT-G10-B21-P05" href="../luyen-tap/?item=THPT-G10-B21-P05">Luyện lại câu 21-P05</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B21-02">
<summary>Viết tiếp tuyến khi M chưa thuộc đường tròn</summary>
<p><strong>Dấu hiệu:</strong> Dùng IM làm pháp tuyến nhưng chưa chứng minh IM²=R²; nhầm cắt nhau với tiếp xúc.</p>
<p><strong>Bản chất toán:</strong> Công thức tiếp tuyến tại M áp dụng khi M thuộc đường tròn. Đường d bất kỳ tiếp xúc khi d(I,d)=R&gt;0.</p>
<p><strong>Tự sửa:</strong> Ôn B21 mục 2 và B20 mục 3 (khoảng cách): xác minh \(M\in(C)\), tính \(\overrightarrow{IM}\), lập tiếp tuyến qua M vuông góc với \(\overrightarrow{IM}\), rồi kiểm lại \(d(I,d)=R\).</p>
<p><strong>Kiến thức cần ôn:</strong> B19 pháp tuyến, B20 khoảng cách; B21 mục 2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B21-P02" href="../luyen-tap/?item=THPT-G10-B21-P02">Luyện lại câu 21-P02</a> · <a data-thpt-formative-id="THPT-G10-B21-P03" href="../luyen-tap/?item=THPT-G10-B21-P03">Luyện lại câu 21-P03</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W21-ANCHOR-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w21-anchor-01">Bài tự luận liên quan</a></p>
</details>

## 4. Tiếp tục học

- [Bài 22 — Ba đường conic](bai-22.md).
- [Core và Luyện tập/Vận dụng](luyen-tap.md).

<small>Nguồn đối chiếu: SGK KNTT tập 2, trang in 43–47; SBT trang 39–41. Ví dụ do dự án biên soạn.</small>
