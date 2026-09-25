# Bộ bài toán mỏ neo – Toán vào lớp 10

> **Học bằng cấu trúc, không học thuộc đáp án.** Sáu bài tự biên soạn nối đại số, bài toán thực tế, hình học và tối ưu. Hãy tự làm rồi mới mở phần giải; sau đó thử biến thể.

| Mã | Dạng bài | Dấu hiệu → công cụ |
|---|---|---|
| CLASSIC_ALG_001 | Biểu thức căn và số nguyên | Điều kiện → tách phần nguyên → xét ước |
| CLASSIC_ALG_002 | Parabol, tham số, Viète | Phương trình giao điểm → biệt thức → Viète |
| CLASSIC_REAL_001 | Làm chung – làm riêng | Công việc/giờ → cộng năng suất |
| CLASSIC_GEO_001 | Tiếp tuyến và cát tuyến | Góc nội tiếp → tam giác đồng dạng |
| CLASSIC_GEO_002 | Trực tâm – tứ giác nội tiếp | Hai góc vuông → đường tròn phụ |
| CLASSIC_INEQ_001 | Bất đẳng thức điểm rơi | Tổng không đổi → dấu bằng đồng thời |

---

## 1. CLASSIC_ALG_001 – Căn thức, điều kiện và bài toán số nguyên

**Bài gốc.** Cho
\[
P=\frac{\sqrt{x}+2}{\sqrt{x}-1}.
\]
a) Tìm điều kiện xác định và tách phần nguyên. b) Tính \(P\) khi \(x=4\). c) Với \(x\) là **số chính phương không âm**, tìm \(x\) để \(P\) nguyên.

??? tip "Gợi ý nhỏ"
    Viết \(\sqrt{x}+2=(\sqrt{x}-1)+3\), rồi xét khi nào \(\frac3{\sqrt{x}-1}\) nguyên.

??? success "Lời giải và lỗi cần tránh"
    Điều kiện: \(x\ge0,\ x\ne1\). Khi đó
    \[
    P=1+\frac3{\sqrt{x}-1}.
    \]
    Với \(x=4\), \(P=4\).

    Đặt \(t=\sqrt{x}\) là số nguyên không âm, \(t\ne1\). Muốn \(P\) nguyên, phải có
    \[
    t-1\in\{-3,-1,1,3\}.
    \]
    Do \(t\ge0\), suy ra \(t\in\{0,2,4\}\). Kết luận
    \[
    \boxed{x\in\{0,4,16\}}.
    \]
    Điều kiện “\(x\) chính phương” chỉ áp dụng ở ý c); không được quên loại \(x=1\).

**Biến thể:** thay số \(2\) ở tử bằng \(4\), giữ điều kiện ý c). Tìm \(x\).

??? success "Đáp số biến thể"
    \(P=1+\frac5{t-1}\Rightarrow t-1\in\{-5,-1,1,5\}\). Giá trị thỏa \(t\ge0\) là \(t=0,2,6\), nên \(x=0,4,36\).

---

## 2. CLASSIC_ALG_002 – Parabol và Viète có tham số

**Bài gốc.** Tìm giao điểm của \(y=x^2\) và đường thẳng \(d_m:y=2(m+1)x-2m\). Chứng minh luôn có hai giao điểm phân biệt; tìm \(m\) để bình phương hai hoành độ giao điểm có tổng bằng \(12\).

??? tip "Gợi ý nhỏ"
    Phương trình hoành độ là \(x^2-2(m+1)x+2m=0\). Hãy tính \(\Delta'\), rồi dùng \(x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2\).

??? success "Lời giải đầy đủ"
    \[
    \Delta'=(m+1)^2-2m=m^2+1>0
    \]
    với mọi \(m\). Do đó hai giao điểm luôn phân biệt.

    Theo Viète,
    \[
    x_1+x_2=2(m+1),\qquad x_1x_2=2m.
    \]
    \[
    x_1^2+x_2^2=4(m+1)^2-4m=4(m^2+m+1).
    \]
    Yêu cầu bài cho \(m^2+m-2=0\), suy ra
    \[
    \boxed{m=1\text{ hoặc }m=-2}.
    \]
    Cả hai giá trị đều thỏa \(\Delta'>0\). Không áp dụng điều kiện “hai nghiệm phân biệt” mà bỏ qua bước xét biệt thức.

**Biến thể:** thay \(12\) bằng \(4\). Đáp số \(m=0\) hoặc \(m=-1\).

---

## 3. CLASSIC_REAL_001 – Chỉ cộng năng suất, không cộng thời gian

**Bài gốc.** Hai đội làm chung một công việc hết 4 giờ. Đội A làm một mình nhanh hơn đội B 6 giờ. Hỏi thời gian mỗi đội làm riêng?

| Đại lượng | Đội A | Đội B |
|---|---:|---:|
| Thời gian một mình | \(x\) giờ | \(x+6\) giờ |
| Công việc trong 1 giờ | \(1/x\) | \(1/(x+6)\) |

??? tip "Gợi ý nhỏ"
    Trong một giờ hai đội làm \(\frac14\) công việc.

??? success "Lời giải từng bước"
    Gọi \(x>0\) là thời gian đội A làm riêng. Phương trình:
    \[
    \frac1x+\frac1{x+6}=\frac14
    \iff 4(2x+6)=x(x+6)
    \iff (x-6)(x+4)=0.
    \]
    Loại \(x=-4\). Vậy A làm \(6\) giờ và B làm \(12\) giờ. Kiểm tra \(\frac16+\frac1{12}=\frac14\).

    **Bẫy:** không được cộng các thời gian \(x+(x+6)\) để bằng 4; phương trình mô hình phải cộng **phần công việc hoàn thành trong một giờ**.

**Biến thể:** làm chung 6 giờ; A nhanh hơn B 9 giờ. Đáp số: A làm \(9\) giờ, B làm \(18\) giờ.

---

## 4. CLASSIC_GEO_001 – Tiếp tuyến và cát tuyến

**Bài gốc.** Từ \(A\) ngoài đường tròn \((O)\), kẻ hai tiếp tuyến \(AB,AC\) tại \(B,C\); cát tuyến \(ADE\), \(D,E\) thuộc đường tròn và \(D\) nằm giữa \(A,E\). Biết \(AB=6,\ AD=4\).

a) Chứng minh \(ABOC\) nội tiếp. b) Chứng minh \(AB^2=AD\cdot AE\). c) Tính \(AE,DE\).

??? tip "Gợi ý nhỏ"
    Hai bán kính vuông góc với tiếp tuyến. So sánh \(\triangle ABD\) và \(\triangle AEB\) bằng định lý góc tạo bởi tiếp tuyến và dây.

??? success "Lời giải"
    \(\angle ABO=\angle ACO=90^\circ\), nên tứ giác \(ABOC\) nội tiếp.

    Từ định lý góc tạo bởi tiếp tuyến và dây:
    \[
    \angle ABD=\angle BED=\angle AEB.
    \]
    Lại có \(\angle BAD=\angle EAB\), vì \(A,D,E\) thẳng hàng. Suy ra
    \[
    \triangle ABD\sim\triangle AEB,\quad
    \frac{AB}{AE}=\frac{AD}{AB}
    \Rightarrow AB^2=AD\cdot AE.
    \]
    Do đó \(36=4AE\Rightarrow AE=9\); và \(DE=AE-AD=5\).

    **Bẫy:** ghi đúng thứ tự tam giác tương ứng; đừng nhầm toàn đoạn \(AE\) với đoạn trong đường tròn \(DE\).

**Biến thể:** \(AB=8,\ AD=4\). Đáp số: \(AE=16,\ DE=12\).

---

## 5. CLASSIC_GEO_002 – Trực tâm, đường tròn phụ và góc

**Bài gốc.** Tam giác \(ABC\) nhọn; đường cao \(AD,BE,CF\) cắt nhau tại \(H\), với \(D\in BC,\ E\in AC,\ F\in AB\). Gọi \(O\) là tâm đường tròn ngoại tiếp \(ABC\).

a) Chứng minh \(B,E,F,C\) nội tiếp. b) Chứng minh \(A,E,H,F\) nội tiếp. c) Chứng minh \(EF\) song song với tiếp tuyến tại \(A\) của đường tròn \((ABC)\); từ đó \(OA\perp EF\).

??? tip "Gợi ý nhỏ"
    Hãy tìm các góc vuông. Với ý c), từ \(BFEC\) nội tiếp, dùng \(\angle BFE=\angle BCE=\angle BCA\).

??? success "Lời giải có chuỗi suy luận"
    Do \(BE\perp AC\) và \(CF\perp AB\):
    \[
    \angle BEC=\angle BFC=90^\circ.
    \]
    Suy ra \(B,E,F,C\) cùng thuộc đường tròn đường kính \(BC\).

    Tương tự \(\angle AEH=\angle AFH=90^\circ\), nên \(A,E,H,F\) cùng thuộc đường tròn đường kính \(AH\).

    Vì \(BFEC\) nội tiếp:
    \[
    \angle BFE=\angle BCE=\angle BCA.
    \]
    Theo định lý góc tạo bởi tiếp tuyến và dây \(AB\), tiếp tuyến tại \(A\) cũng tạo với đường thẳng \(AB\) một góc bằng góc \(BCA\). Do \(BF\) nằm trên \(AB\), hai đường thẳng \(EF\) và tiếp tuyến tại \(A\) song song. Bán kính \(OA\) vuông góc tiếp tuyến, suy ra \(\boxed{OA\perp EF}\).

    **Bẫy:** khi dùng góc giữa hai đường thẳng, cần để ý góc kề bù do đổi chiều tia.

**Biến thể:** tự liệt kê các cặp góc vuông và xác định đường kính của hai đường tròn phụ mà không xem lời giải.

---

## 6. CLASSIC_INEQ_001 – Dự đoán điểm rơi và xét dấu bằng

**Bài gốc.** Cho \(x,y>0,\ x+y=4\). Tìm GTNN của
\[
Q=x^2+y^2+\frac4{xy}.
\]

??? tip "Gợi ý nhỏ"
    Từ \((x-y)^2\ge0\), suy ra \(x^2+y^2\ge8\) và \(xy\le4\).

??? success "Lời giải và dấu bằng"
    \[
    x^2+y^2\ge\frac{(x+y)^2}{2}=8,\quad
    xy\le\frac{(x+y)^2}{4}=4.
    \]
    Vì \(xy>0\), nên \(4/(xy)\ge1\). Do đó \(Q\ge9\). Dấu bằng xảy ra đồng thời khi \(x=y=2\). Vậy GTNN bằng \(\boxed9\).

    **Bẫy:** chứng minh một cận dưới chưa đủ; phải kiểm tra có giá trị thỏa **tất cả** điều kiện dấu bằng.

**Biến thể:** \(x+y=6\), tìm GTNN của \(x^2+y^2+\dfrac9{xy}\). Đáp số \(19\) tại \(x=y=3\).

---

## Vòng luyện tập đúng cách

**Bài gốc → thử biến thể không xem lời giải → làm đề hoàn chỉnh → phân loại câu sai → quay về bài mỏ neo và chuyên đề gốc.** Xem đáp án trước khi giải là một lượt *học có trợ giúp*, không phải bằng chứng đã tự làm được.

[Đi tới bộ đề hoàn chỉnh](bo-de-luyen.md) · [Bài tập học thuật](bai-tap.md) · [Tự kiểm tra Toán](tu-kiem-tra.md)

*Các bài và biến thể được biên soạn mới cho website; không gắn nhãn là đề chính thức.*
