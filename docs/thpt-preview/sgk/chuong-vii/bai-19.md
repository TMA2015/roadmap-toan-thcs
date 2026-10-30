# Bài 19. Phương trình đường thẳng

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Nhận biết vectơ pháp tuyến, vectơ chỉ phương và viết phương trình đường thẳng từ dữ kiện hình học.</p>
<nav class="thpt-r4-lesson-tabs" aria-label="Điều hướng học Toán 10 Chương VII"><a href="../">Tổng quan Chương VII</a><a href="../luyen-tap/">Core và Luyện tập</a><a href="../tu-kiem-tra-chuong/">Tự kiểm tra chương · chưa kích hoạt</a></nav>
</div>

## 1. Vectơ pháp tuyến và vectơ chỉ phương

Đường thẳng \(\Delta\) nhận **vectơ pháp tuyến** \(\vec n=(a;b)\ne(0;0)\) khi \(\vec n\) vuông góc với đường thẳng. Đường thẳng nhận **vectơ chỉ phương** \(\vec u=(u_1;u_2)\ne(0;0)\) khi \(\vec u\) song song với đường thẳng.

Nếu \(\vec n=(a;b)\) thì có thể chọn \(\vec u=(-b;a)\). Cần phân biệt rõ vai trò hai vectơ, không lấy nhầm vectơ nối hai điểm làm pháp tuyến.

## 2. Hai dạng phương trình của đường thẳng

Qua điểm \(M_0(x_0;y_0)\) và pháp tuyến \(\vec n=(a;b)\):

\[
a(x-x_0)+b(y-y_0)=0,\quad a^2+b^2>0.
\]

Đây là phương trình tổng quát \(ax+by+c=0\). Với vectơ chỉ phương \(\vec u=(u_1;u_2)\), phương trình tham số là:

\[
\begin{cases}x=x_0+u_1t,\\y=y_0+u_2t,\end{cases}\qquad t\in\mathbb R.
\]

Nếu đường thẳng đi qua \(A\) và \(B\), **phải có \(A\ne B\)** mới dùng được \(\overrightarrow{AB}\) làm vectơ chỉ phương.

## 3. Ví dụ mẫu có giải thích

Cho \(A(1;2)\), \(B(4;3)\). Ta có \(\overrightarrow{AB}=(3;1)\), nên một pháp tuyến là \((1;-3)\).

- Dạng tổng quát: \((x-1)-3(y-2)=0\), hay \(\boxed{x-3y+5=0}\).
- Dạng tham số: \(x=1+3t,\ y=2+t,\ t\in\mathbb R\).
- Kiểm tra: thế tọa độ \(A,B\) vào phương trình tổng quát đều cho \(0\).

**Vì sao:** điểm \(M\) thuộc đường thẳng khi \(\overrightarrow{AM}\perp\vec n\); biểu thức tham số quét mọi bội số của vectơ chỉ phương.

!!! tip "Tự nhớ"
    Trong \(ax+by+c=0\), không được để đồng thời \(a=b=0\). Hai phương trình khác hệ số vẫn có thể xác định **cùng một đường thẳng** nếu toàn bộ hệ số tỉ lệ.

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B19-01">
<summary>Nhầm vectơ pháp tuyến/chỉ phương</summary>
<p><strong>Dấu hiệu:</strong> Từ ax+by+c=0 dùng (a;b) làm chỉ phương, hoặc chấp nhận vectơ không.</p>
<p><strong>Bản chất toán:</strong> Với (a;b)≠(0;0), n=(a;b) là pháp tuyến, u=(-b;a) có thể làm chỉ phương vì n·u=0 và u≠0.</p>
<p><strong>Tự sửa:</strong> Ôn B19 mục 1: đánh dấu n và u, tự kiểm n·u=0 rồi mới viết phương trình.</p>
<p><strong>Kiến thức cần ôn:</strong> Vectơ tọa độ, tích vô hướng; B19 mục 1.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B19-C01" href="../luyen-tap/?item=THPT-G10-B19-C01">Luyện lại câu 19-C01</a> · <a data-thpt-formative-id="THPT-G10-B19-P05" href="../luyen-tap/?item=THPT-G10-B19-P05">Luyện lại câu 19-P05</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B19-02">
<summary>Viết đường thẳng qua hai điểm chưa kiểm điều kiện</summary>
<p><strong>Dấu hiệu:</strong> Nhầm AB là pháp tuyến, quên A≠B hoặc không thử nghiệm kết quả.</p>
<p><strong>Bản chất toán:</strong> Chỉ khi A≠B, AB khác 0 và là một vectơ chỉ phương; chọn n vuông góc AB, rồi thế cả A và B để kiểm phương trình.</p>
<p><strong>Tự sửa:</strong> Ôn B19 mục 2–3: tìm vectơ \(\overrightarrow{AB}\) với \(A\ne B\), chọn \(\vec n=(a;b)\) vuông góc \(\overrightarrow{AB}\); viết \(a(x-x_A)+b(y-y_A)=0\) (tương đương \(\vec n\cdot\overrightarrow{AM}=0\)); thử lại cả A và B.</p>
<p><strong>Kiến thức cần ôn:</strong> Hiệu tọa độ hai điểm, vectơ khác 0; B19 mục 2–3.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B19-P02" href="../luyen-tap/?item=THPT-G10-B19-P02">Luyện lại câu 19-P02</a> · <a data-thpt-formative-id="THPT-G10-B19-P06" href="../luyen-tap/?item=THPT-G10-B19-P06">Luyện lại câu 19-P06</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W19-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w19-01">Bài tự luận liên quan</a></p>
</details>

## 4. Tiếp tục học

- [Bài 20 — Hai đường thẳng, góc và khoảng cách](bai-20.md).
- [Core và Luyện tập/Vận dụng Chương VII](luyen-tap.md): tự luyện và mở lời giải sau khi tự làm.

<small>Nguồn đối chiếu: SGK KNTT Toán 10 tập 2, trang in 30–35; SBT trang 28–31. Ví dụ do dự án biên soạn; không chép nguyên SGK.</small>
