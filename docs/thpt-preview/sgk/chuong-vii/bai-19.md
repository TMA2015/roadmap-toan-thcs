# Bài 19. Phương trình đường thẳng

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Nội dung biên soạn theo mạch SGK; các bài B19–B22 đã được NotebookLM duyệt <strong>D1–D2 theo snapshot</strong>. Đây là đợt tích hợp học liệu, chưa kích hoạt chấm điểm hoặc Skill Mastery.</p>
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

## 4. Tiếp tục học

- [Bài 20 — Hai đường thẳng, góc và khoảng cách](bai-20.md).
- [Core và Luyện tập/Vận dụng Chương VII](luyen-tap.md): sử dụng ID canonical đã được review, không ghi điểm thành thạo.

<small>Nguồn đối chiếu: SGK KNTT Toán 10 tập 2, trang in 29–34; SBT trang 27–31. Ví dụ do dự án biên soạn; không chép nguyên SGK.</small>
