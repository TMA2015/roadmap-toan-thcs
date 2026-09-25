<!-- entrance10-exam: ENTRANCE10-003 -->
# Đề luyện số 3 – Vận dụng và chứng minh

> **Đề tự biên soạn** · 120 phút · 10 điểm · Không phải đề chính thức. Bài IV và V có tính phân hóa cao; làm chắc các phần đầu trước.

## Đề bài

### Bài I – Biểu thức và phương trình (2,0 điểm)

1. Rút gọn \(A=\sqrt{48}-\sqrt{12}+\sqrt{27}\).
2. Giải phương trình \(\dfrac{x-2}{x+1}=\dfrac12\).

### Bài II – Parabol, đường thẳng và Viète (2,0 điểm)

1. Tìm tọa độ giao điểm của parabol \(y=x^2\) và đường thẳng \(y=2x+3\).
2. Cho \(m\in\mathbb R\) và phương trình
   \[
   x^2-2(m+1)x+2m=0.
   \]
   Chứng minh phương trình luôn có hai nghiệm phân biệt \(x_1,x_2\). Tìm \(m\) để \(x_1^2+x_2^2=12\).

### Bài III – Bài toán thực tế và xác suất (1,5 điểm)

1. Một khối có 42 học sinh nam và 56 học sinh nữ. Muốn chia thành nhiều nhóm **nhất** sao cho số nam ở mỗi nhóm bằng nhau và số nữ ở mỗi nhóm bằng nhau, hỏi được bao nhiêu nhóm, mỗi nhóm có mấy nam, mấy nữ?
2. Chọn ngẫu nhiên một số nguyên từ 1 đến 10. Tính xác suất chọn được số chia hết cho 2 **hoặc** chia hết cho 3.

### Bài IV – Trực tâm và đường tròn phụ (3,5 điểm)

Tam giác \(ABC\) nhọn, các đường cao \(AD,BE,CF\) cắt nhau ở \(H\); \(D\in BC,\ E\in AC,\ F\in AB\). Gọi \(O\) là tâm đường tròn ngoại tiếp tam giác \(ABC\).

1. Chứng minh \(B,E,F,C\) cùng thuộc một đường tròn.
2. Chứng minh \(A,E,H,F\) cùng thuộc một đường tròn.
3. Chứng minh \(EF\) song song với tiếp tuyến tại \(A\) của đường tròn ngoại tiếp \(ABC\).
4. Suy ra \(OA\perp EF\).

### Bài V – Bất đẳng thức (1,0 điểm)

Cho \(x,y>0,\ x+y=4\). Tìm GTNN của \(Q=x^2+y^2+\dfrac4{xy}\) và nêu điều kiện đạt dấu bằng.

---

??? success "Đáp án và hướng dẫn chấm – chỉ mở sau khi nộp"
    **Bài I (2,0 điểm):**
    \[
    A=(4-2+3)\sqrt3=\boxed{5\sqrt3}.
    \]
    Điều kiện \(x\ne-1\). Từ \(2(x-2)=x+1\), suy ra \(\boxed{x=5}\), thỏa điều kiện.

    **Bài II (2,0 điểm):** Giao điểm thỏa \(x^2=2x+3\), tức \((x-3)(x+1)=0\). Vậy giao điểm \(\boxed{(3;9),\ (-1;1)}\).

    Với phương trình có tham số:
    \[
    \Delta'=(m+1)^2-2m=m^2+1>0.
    \]
    Theo Viète, \(x_1+x_2=2(m+1)\), \(x_1x_2=2m\). Từ
    \[
    4(m+1)^2-4m=12
    \iff (m-1)(m+2)=0
    \]
    suy ra \(\boxed{m=1\text{ hoặc }-2}\).

    **Bài III (1,5 điểm):** Số nhóm nhiều nhất \(=\operatorname{ƯCLN}(42,56)=14\). Mỗi nhóm \(42/14=3\) nam và \(56/14=4\) nữ. Tập số chia hết cho 2 hoặc 3 trong 1–10 là \(\{2,3,4,6,8,9,10\}\), xác suất \(\boxed{7/10}\).

    **Bài IV (3,5 điểm):** \(BE\perp AC,\ CF\perp AB\), nên \(\angle BEC=\angle BFC=90^\circ\), suy ra \(B,E,F,C\) nội tiếp đường tròn đường kính \(BC\).

    Tương tự, \(\angle AEH=\angle AFH=90^\circ\), suy ra \(A,E,H,F\) nội tiếp đường tròn đường kính \(AH\).

    Vì \(BFEC\) nội tiếp, ta có
    \[
    \angle BFE=\angle BCE=\angle BCA.
    \]
    Theo định lý góc tạo bởi tiếp tuyến và dây \(AB\), tiếp tuyến tại \(A\) cũng tạo với đường thẳng \(AB\) một góc bằng \(\angle BCA\). Vì \(BF\) cùng đường thẳng \(AB\), suy ra \(EF\) song song tiếp tuyến tại \(A\). Bán kính \(OA\) vuông góc tiếp tuyến, nên \(\boxed{OA\perp EF}\).

    **Bài V (1,0 điểm):**
    \[
    x^2+y^2\ge\frac{(x+y)^2}{2}=8,\qquad xy\le\frac{(x+y)^2}{4}=4.
    \]
    Do đó \(4/(xy)\ge1\Rightarrow Q\ge\boxed9\). Dấu bằng khi \(x=y=2\).

---

## Chữa theo bài mỏ neo

Bài II → CLASSIC_ALG_002; Bài IV → CLASSIC_GEO_002; Bài V → CLASSIC_INEQ_001. Cần viết đủ luận cứ và kiểm tra dấu bằng, không chỉ ghi kết quả.

[← Danh sách đề](bo-de-luyen.md) · [Bài toán mỏ neo](bai-toan-kinh-dien.md)
