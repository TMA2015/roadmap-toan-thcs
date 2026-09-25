<!-- entrance10-exam: ENTRANCE10-002 -->
# Đề luyện số 2 – Liên kết các mạch Toán

> **Đề tự biên soạn** · 120 phút · 10 điểm · Không phải đề chính thức. Dành cho học sinh đã luyện chắc bài mẫu; đáp án thu gọn cho tới khi nộp.

## Đề bài

### Bài I – Căn thức và biểu thức (2,0 điểm)

1. Rút gọn \(A=\sqrt{75}-\sqrt{12}+\sqrt3\).
2. Cho \(P=\dfrac{\sqrt{x}+2}{\sqrt{x}-1}\).
   a) Tìm điều kiện xác định. b) Tính \(P\) tại \(x=4\). c) Tìm \(x\) để \(P=2\).

### Bài II – Bài toán thực tế và Viète (2,0 điểm)

1. Hai đội làm chung một công việc hết 4 giờ. Đội A làm một mình nhanh hơn B 6 giờ. Tìm thời gian mỗi đội làm riêng.
2. Phương trình \(x^2-5x+3=0\) có hai nghiệm \(x_1,x_2\). Không giải phương trình, tính \(x_1^2+x_2^2\).

### Bài III – Thống kê và xác suất (1,5 điểm)

Dãy điểm: \(5,6,7,7,8,9\).

1. Tìm số trung bình cộng, trung vị và mốt.
2. Rút ngẫu nhiên một thẻ từ 12 thẻ ghi các số 1 đến 12. Tính xác suất được số chia hết cho 4.

### Bài IV – Hình học đường tròn (3,5 điểm)

Từ điểm \(A\) ngoài đường tròn \((O)\), kẻ hai tiếp tuyến \(AB,AC\) tại \(B,C\). Cát tuyến \(ADE\) đi qua đường tròn, \(D\) ở giữa \(A\) và \(E\). Cho \(AB=6,\ AD=4\).

1. Chứng minh tứ giác \(ABOC\) nội tiếp.
2. Chứng minh \(AB^2=AD\cdot AE\).
3. Tính \(AE\) và \(DE\).

### Bài V – Bất đẳng thức (1,0 điểm)

Cho \(x,y>0,\ x+y=4\). Tìm GTNN của \(T=\dfrac1x+\dfrac1y\), kèm điều kiện dấu bằng.

---

??? success "Đáp án và hướng dẫn chấm – chỉ mở sau khi nộp"
    **Bài I (2,0 điểm):** \(A=(5-2+1)\sqrt3=\boxed{4\sqrt3}\). Điều kiện \(x\ge0,\ x\ne1\). Tại \(x=4\), \(P=4\). Đặt \(t=\sqrt{x}\ge0,\ t\ne1\):
    \[
    \frac{t+2}{t-1}=2
    \iff t+2=2t-2
    \iff t=4
    \Rightarrow \boxed{x=16}.
    \]
    Phải đối chiếu điều kiện trước khi kết luận.

    **Bài II (2,0 điểm):** Gọi \(u>0\) là thời gian đội A làm riêng; B hết \(u+6\) giờ.
    \[
    \frac1u+\frac1{u+6}=\frac14
    \iff(u-6)(u+4)=0.
    \]
    Nhận \(u=6\), loại \(-4\). Thời gian riêng: \(\boxed{6\text{ giờ và }12\text{ giờ}}\).  
    Theo Viète \(x_1+x_2=5,\ x_1x_2=3\), suy ra \(x_1^2+x_2^2=25-6=\boxed{19}\).

    **Bài III (1,5 điểm):** Tổng 42, số trung bình \(7\); trung vị \((7+7)/2=7\); mốt \(7\). Các số chia hết cho 4 là \(4,8,12\), nên \(P=3/12=\boxed{1/4}\).

    **Bài IV (3,5 điểm):** Vì \(OB\perp AB,\ OC\perp AC\), hai góc \(\angle ABO\) và \(\angle ACO\) cùng bằng \(90^\circ\); suy ra \(ABOC\) nội tiếp. Góc tạo bởi tiếp tuyến và dây cho \(\angle ABD=\angle AEB\); có thêm \(\angle BAD=\angle EAB\), suy ra \(\triangle ABD\sim\triangle AEB\). Từ đó
    \[
    \frac{AB}{AE}=\frac{AD}{AB}\Rightarrow AB^2=AD\cdot AE.
    \]
    Thế số \(36=4AE\Rightarrow AE=9\), \(DE=AE-AD=\boxed5\).

    **Bài V (1,0 điểm):** \(xy\le(x+y)^2/4=4\), vì vậy
    \[
    T=\frac{x+y}{xy}=\frac4{xy}\ge1.
    \]
    GTNN \(\boxed1\) khi \(x=y=2\).

---

## Chữa theo bài mỏ neo

Bài I → CLASSIC_ALG_001; Bài II → CLASSIC_REAL_001 và Viète; Bài IV → CLASSIC_GEO_001; Bài V → CLASSIC_INEQ_001.

[← Danh sách đề](bo-de-luyen.md) · [Đề số 3 →](de-luyen-03.md)
