# Bài toán kinh điển – Chuyên đề 25

> **Mục tiêu:** học những bài có cấu trúc điển hình, không phải để học thuộc lời giải mà để nhận ra **dấu hiệu → công cụ → chuỗi suy luận**. Mỗi mẫu dưới đây đều nên được làm lại với số liệu khác sau khi đã hiểu lời giải.

## 1. Biểu thức căn: điều kiện trước, biến đổi sau

**Bài mẫu**

Cho
\[
A=\frac{\sqrt{x}-2}{\sqrt{x}+1},\qquad x\ge 0.
\]

1. Tìm điều kiện để biểu thức có nghĩa.
2. Tính \(A\) khi \(x=9\).
3. Giải phương trình \(A=\frac14\).

**Cách nghĩ**

- Nhìn thấy \(\sqrt{x}\): kiểm tra \(x\ge0\).
- Mẫu \(sqrt{x}+1>0\) với mọi \(x\ge0\), nên không phát sinh điều kiện loại thêm.
- Khi giải phương trình, có thể đặt \(t=\sqrt{x}\ge0\) để nhìn cấu trúc rõ hơn.

**Lời giải**

Với \(x\ge0\), biểu thức xác định.

Khi \(x=9\):
\[
A=\frac{3-2}{3+1}=\frac14.
\]

Giải \(A=\frac14\). Đặt \(t=\sqrt{x}\ge0\):
\[
\frac{t-2}{t+1}=\frac14
\Rightarrow 4t-8=t+1
\Rightarrow 3t=9
\Rightarrow t=3.
\]
Suy ra \(x=9\).

**Điều cần rút ra**

Không bắt đầu bằng biến đổi dài. Hãy tìm điều kiện và đổi biến nếu cấu trúc căn lặp lại.

---

## 2. Viète: không cần giải phương trình nếu chỉ hỏi biểu thức đối xứng

**Bài mẫu**

Cho phương trình
\[
x^2-5x+3=0
\]
có hai nghiệm \(x_1,x_2\). Không giải phương trình, tính
\[
S=x_1^2+x_2^2.
\]

**Cách nghĩ**

Từ Viète:
\[
x_1+x_2=5,qquad x_1x_2=3.
\]

Biểu thức cần tính là đối xứng theo hai nghiệm:
\[
x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2.
\]

**Lời giải**

\[
S=5^2-2\cdot3=19.
\]

**Điều cần rút ra**

Khi đề chỉ hỏi tổng, tích hoặc biểu thức đối xứng của hai nghiệm, hãy kiểm tra Viète trước khi dùng công thức nghiệm.

---

## 3. Bài toán thực tế bằng hệ phương trình: đặt ẩn phải gắn đơn vị

**Bài mẫu**

Một buổi biểu diễn bán 40 vé gồm vé người lớn giá 80 nghìn đồng và vé học sinh giá 50 nghìn đồng. Tổng tiền thu được là 2,42 triệu đồng. Tính số vé mỗi loại.

**Cách nghĩ**

- Chọn ẩn đúng đại lượng bài hỏi.
- Viết điều kiện nguyên không âm.
- Một phương trình từ tổng số vé; một phương trình từ tổng tiền.

**Lời giải**

Gọi \(x\) là số vé người lớn, \(y\) là số vé học sinh. Điều kiện \(x,y\in\mathbb N\).

\[
\begin{cases}
x+y=40,\\
80x+50y=2420.
\end{cases}
\]

Từ \(y=40-x\):
\[
80x+50(40-x)=2420
\Rightarrow30x=420
\Rightarrow x=14.
\]
Suy ra \(y=26\).

Vậy có **14 vé người lớn và 26 vé học sinh**.

**Điều cần rút ra**

Một bài hệ thực tế tốt luôn có bước: đặt ẩn có đơn vị → lập mô hình → giải → kiểm tra điều kiện → trả lời bằng lời.

---

## 4. Hình học kinh điển: đường cao trong tam giác vuông

**Bài mẫu**

Tam giác \(ABC\) vuông tại \(A\), đường cao \(AH\) xuống cạnh huyền \(BC\). Biết \(BH=9\), \(CH=16\).

1. Tính \(BC\).
2. Tính \(AH\).
3. Tính \(AB\) và \(AC\).

**Ý tưởng cốt lõi**

Ba tam giác \(ABH\), \(AHC\), \(ABC\) đồng dạng. Từ đó có các hệ thức:
\[
AH^2=BH\cdot CH,
\]
\[
AB^2=BH\cdot BC,\qquad AC^2=CH\cdot BC.
\]

**Lời giải**

\[
BC=BH+CH=25.
\]

\[
AH^2=9\cdot16=144\Rightarrow AH=12.
\]

\[
AB^2=9\cdot25=225\Rightarrow AB=15.
\]

\[
AC^2=16\cdot25=400\Rightarrow AC=20.
\]

**Điều cần rút ra**

Bài này không quan trọng ở bộ số \(9,16,25\). Giá trị nằm ở việc hiểu rằng **đồng dạng tạo ra hệ thức lượng**, và từ một cặp đoạn trên cạnh huyền có thể suy ra toàn bộ tam giác.

---

## 5. Tối ưu đại số: biến điều kiện thành bình phương không âm

**Bài mẫu**

Cho \(x,y>0\) và \(x+y=10\). Tìm giá trị lớn nhất của \(P=xy\).

**Lời giải**

Từ
\[
(x-y)^2\ge0
\]
suy ra
\[
(x+y)^2\ge4xy.
\]

Do \(x+y=10\):
\[
100\ge4xy\Rightarrow xy\le25.
\]

Dấu bằng xảy ra khi \(x=y=5\).

Vậy
\[
P_{\max}=25.
\]

**Điều cần rút ra**

Khi tổng cố định và cần tối ưu tích, hãy nghĩ tới (\(x-y\)^2\ge0) hoặc bất đẳng thức tương đương trước khi thử số.

---

## Cách dùng bộ bài kinh điển

Với mỗi bài:

1. Tự làm ít nhất 10–15 phút.
2. Nếu chưa ra, xem **ý tưởng cốt lõi** trước, chưa xem lời giải.
3. Đóng lời giải và tự viết lại toàn bộ.
4. Đổi số liệu hoặc điều kiện nhỏ rồi làm lại.
5. Ghi một dòng: **“Dấu hiệu nào giúp tôi nhận ra công cụ?”**

> Một bài chỉ thực sự trở thành kiến thức của mình khi có thể giải lại với dữ kiện khác, không phải khi đọc lời giải và thấy “có vẻ hiểu”.
