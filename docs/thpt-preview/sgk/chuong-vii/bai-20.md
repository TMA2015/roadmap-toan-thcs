# Bài 20. Vị trí tương đối, góc và khoảng cách

<div class="thpt-r4-screen" data-thpt-r4>
<p class="thpt-r4-eyebrow">TOÁN 10 · CHƯƠNG VII · KIẾN THỨC SGK KNTT</p>
<p class="thpt-r4-lead">Xác định vị trí tương đối, góc và khoảng cách trong mặt phẳng tọa độ.</p>
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

## Khi gặp khó khăn — tự tìm lỗi và học lại

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B20-01">
<summary>Nhầm song song với trùng nhau</summary>
<p><strong>Dấu hiệu:</strong> Thấy a1b2−a2b1=0 thì kết luận hai đường trùng.</p>
<p><strong>Bản chất toán:</strong> Điều kiện này chỉ nói hai pháp tuyến cùng phương. Hai phương trình trùng nhau nếu toàn bộ bộ ba (a,b,c) tỉ lệ theo cùng một λ≠0; nếu không chúng song song phân biệt.</p>
<p><strong>Tự sửa:</strong> Ôn B19 mục 2 và B20 mục 1: kiểm định thức, rồi so sánh cả hằng số; tránh chia cho một hệ số bằng 0.</p>
<p><strong>Kiến thức cần ôn:</strong> Phương trình tổng quát B19; tỉ lệ các hệ số; B20 mục 1.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B20-C01" href="../luyen-tap/?item=THPT-G10-B20-C01">Luyện lại câu 20-C01</a> · <a data-thpt-formative-id="THPT-G10-B20-P05" href="../luyen-tap/?item=THPT-G10-B20-P05">Luyện lại câu 20-P05</a></p>
</details>

<details class="thpt-r4-pedagogical-note" data-thpt-help-id="D6-G10-B20-02">
<summary>Góc hoặc khoảng cách ra giá trị âm</summary>
<p><strong>Dấu hiệu:</strong> Bỏ giá trị tuyệt đối hoặc thiếu độ dài vectơ pháp tuyến ở mẫu.</p>
<p><strong>Bản chất toán:</strong> Khoảng cách là |axM+byM+c|/√(a²+b²)≥0. Với góc nhỏ 0°≤φ≤90°, cosφ=|n1·n2|/(||n1||||n2||)∈[0,1].</p>
<p><strong>Tự sửa:</strong> Ôn B20 mục 2 (góc) và mục 3 (khoảng cách): xác nhận pháp tuyến khác vectơ không, đặt trị tuyệt đối ở tử và chia đúng độ dài pháp tuyến; kiểm \(\cos\varphi\in[0;1]\) cho góc nhỏ, \(d\ge0\) cho khoảng cách.</p>
<p><strong>Kiến thức cần ôn:</strong> Chuẩn vectơ, tích vô hướng; B20 mục 2.</p>
<p><strong>Luyện lại bài đã có:</strong> <a data-thpt-formative-id="THPT-G10-B20-P02" href="../luyen-tap/?item=THPT-G10-B20-P02">Luyện lại câu 20-P02</a> · <a data-thpt-formative-id="THPT-G10-B20-P03" href="../luyen-tap/?item=THPT-G10-B20-P03">Luyện lại câu 20-P03</a> · <a data-thpt-formative-id="THPT-G10-B20-P06" href="../luyen-tap/?item=THPT-G10-B20-P06">Luyện lại câu 20-P06</a> · <a data-thpt-formative-id="THPT-G10-CHVII-W20-01" href="../../../thu-vien/tu-luan-chuong-vii/#thpt-g10-chvii-w20-01">Bài tự luận liên quan</a></p>
</details>

## 4. Tiếp tục học

- [Bài 19 — Phương trình đường thẳng](bai-19.md).
- [Bài 21 — Đường tròn](bai-21.md).
- [Core và Luyện tập/Vận dụng](luyen-tap.md).

<small>Nguồn đối chiếu: SGK Toán 10 KNTT tập 2, trang in 36–42; SBT trang 32–38. Ví dụ do dự án biên soạn.</small>
