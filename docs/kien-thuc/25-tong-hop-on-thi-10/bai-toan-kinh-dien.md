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
- Mẫu \(\sqrt{x}+1>0\) với mọi \(x\ge0\), nên không phát sinh điều kiện loại thêm.
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
x_1+x_2=5,\qquad x_1x_2=3.
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


---

## 6. Rút gọn căn thức và câu hỏi phụ về số nguyên

**Bài mẫu.** Với \(x=n^2\), \(n\) nguyên không âm, \(n\ne1\), xét
\[
P=\frac{\sqrt{x}+1}{\sqrt{x}-1}.
\]
Tìm \(n\) để \(P\) nguyên.

**Nhận dạng:** dạng căn có cấu trúc lặp lại; nếu \(x=n^2\) thì phải đổi về biến nguyên \(n\) trước khi xét tính chia hết.

Vì \(\sqrt{x}=n\), ta có
\[
P=\frac{n+1}{n-1}=1+\frac{2}{n-1}.
\]
\(P\) nguyên khi và chỉ khi \(n-1\mid 2\). Từ \(n\ge0\) và \(n\ne1\), suy ra
\[
n-1\in\{-1,1,2\},\quad n\in\{0,2,3\}.
\]
Cả ba giá trị đều thỏa điều kiện và làm \(P\) nguyên.

**Bẫy:** chỉ ghi các ước dương của 2, bỏ sót \(n=0\); hoặc giải câu phụ mà không mang theo \(n\ne1\).

**Biến thể:** thay 2 trong biểu thức \(1+2/(n-1)\) bằng 3 và tự liệt kê cả ước âm hợp điều kiện.

## 7. Tham số, biệt thức và Viète

**Bài mẫu.** Cho phương trình
\[
x^2-2(m+1)x+2m=0.
\]
Tìm \(m\) để phương trình có hai nghiệm phân biệt \(x_1,x_2\) thỏa
\[
x_1^2+x_2^2=12.
\]

**Bước 1 – kiểm tra tồn tại nghiệm.** Ta có
\[
\Delta'=(m+1)^2-2m=m^2+1>0
\]
với mọi \(m\in\mathbb R\), nên luôn có hai nghiệm phân biệt.

**Bước 2 – dùng Viète, không vội tìm từng nghiệm:**
\[
x_1+x_2=2(m+1),\qquad x_1x_2=2m.
\]
Suy ra
\[
x_1^2+x_2^2=4(m+1)^2-4m=4(m^2+m+1).
\]
Do đó \(4(m^2+m+1)=12\), hay
\[
m^2+m-2=0\iff (m+2)(m-1)=0.
\]
Vậy \(\boxed{m=-2\ \text{hoặc}\ m=1}\).

**Bẫy:** có được biểu thức nghiệm theo Viète nhưng quên điều kiện hai nghiệm phân biệt; ở bài này điều kiện đúng với mọi \(m\), song không được bỏ qua bước chứng minh.

## 8. Tiếp tuyến–cát tuyến: một cấu hình, nhiều mục tiêu

**Bài mẫu.** Từ \(A\) ngoài \((O)\), kẻ tiếp tuyến \(AB,AC\) và cát tuyến \(ADE\), với \(A,D,E\) theo thứ tự. Chứng minh
\[
AB^2=AD\cdot AE.
\]

**Dấu hiệu:** thấy bình phương tiếp tuyến và tích hai đoạn cùng nằm trên cát tuyến thì nghĩ tới hai tam giác đồng dạng.

Do \(A,D,E\) thẳng hàng, \(\angle BAD=\angle EAB\). Theo định lý góc giữa tiếp tuyến và dây cung:
\[
\angle ABD=\angle BEA.
\]
Suy ra \(\triangle ABD\sim\triangle AEB\), nên
\[
\frac{AB}{AE}=\frac{AD}{AB}
\Rightarrow AB^2=AD\cdot AE.
\]

**Mở rộng:** \(OB\perp AB\), \(OC\perp AC\) nên \(ABOC\) nội tiếp đường tròn đường kính \(AO\). Hai tiếp tuyến từ cùng điểm cũng cho \(AB=AC\).

**Bẫy:** viết hai tam giác đồng dạng nhưng đảo thứ tự đỉnh làm suy ra tỷ số sai. Hãy viết cặp góc tương ứng trước khi viết tỷ số cạnh.

## 9. Trực tâm và hai tứ giác nội tiếp từ đường cao

Cho tam giác nhọn \(ABC\), đường cao \(BE\perp AC\), \(CF\perp AB\) cắt nhau tại \(H\).

**Nút mở khóa thứ nhất:**
\[
\angle BEC=\angle BFC=90^\circ.
\]
Suy ra \(B,E,C,F\) cùng nằm trên đường tròn đường kính \(BC\).

**Nút mở khóa thứ hai:**
\[
\angle AEH=\angle AFH=90^\circ.
\]
Suy ra \(A,E,H,F\) cùng nằm trên đường tròn đường kính \(AH\).

**Vận dụng:** vì \(B,E,C,F\) nội tiếp, \(\angle BEF=\angle BCF\) (hai góc nội tiếp cùng chắn dây \(BF\)).

**Bẫy:** nhìn hình đoán tứ giác nội tiếp nhưng không chỉ ra cặp góc vuông hoặc góc bù nhau.

## 10. Bài toán năng suất: cộng phần việc mỗi ngày

Một đội A làm một mình xong trong 20 ngày; A và B cùng làm xong trong 12 ngày. Hỏi B làm một mình mất bao lâu?

**Mô hình:** lấy toàn bộ công việc là \(1\). Năng suất A là \(1/20\), năng suất A+B là \(1/12\). Vì vậy:
\[
\text{Năng suất B}=\frac1{12}-\frac1{20}=\frac1{30}.
\]
Vậy đội B làm một mình trong **30 ngày**.

**Bẫy:** không lấy \(20-12=8\) ngày. Khi ghép hai đội, thứ có thể cộng/trừ trực tiếp là *phần công việc làm được trong một đơn vị thời gian*, không phải thời gian hoàn thành.

---

## Liên kết tới đề thực hành

- [Đề 1 – nền tảng tổng hợp](de-luyen-01.md)
- [Đề 2 – căn thức phụ trợ, parabol–Viète, tiếp tuyến–cát tuyến](de-luyen-02.md)
- [Đề 3 – năng suất, trực tâm và tứ giác nội tiếp](de-luyen-03.md)

**Cách tự học:** Hãy chọn một bài mẫu, che lời giải rồi làm lại bằng số liệu hoặc điều kiện khác. Nếu không giải được biến thể, cần quay lại thẻ kiến thức nền thay vì học thuộc lời giải mẫu.
