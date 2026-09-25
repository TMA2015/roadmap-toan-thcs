# Practice Room – Chuyên đề 09: Hệ phương trình bậc nhất hai ẩn

> **Mục tiêu:** hiểu nghiệm hệ, chọn phương pháp giải phù hợp và mô hình hóa bài toán thực tế bằng hệ hai phương trình.
>
> **Core mặc định:** hệ có tham số nằm ở Entrance10 / Extension.

## B. ✍️ Luyện tự luận & trình bày

### Core KNTT

#### 09-WR-01 · Kiểm tra nghiệm hệ
Kiểm tra \((2;1)\) có là nghiệm của hệ \(x+y=3,\ 2x-y=3\) không.

??? tip "Gợi ý"
    Thay cặp số vào cả hai phương trình.

??? example "Xem lời giải"
    \(2+1=3\) và \(2\cdot2-1=3\), nên \((2;1)\) là nghiệm hệ.

#### 09-WR-02 · Ý nghĩa hình học
Một hệ biểu diễn hai đường thẳng song song phân biệt. Hệ có bao nhiêu nghiệm?

??? tip "Gợi ý"
    Nghiệm hệ là giao điểm chung.

??? example "Xem lời giải"
    Hai đường song song phân biệt không có giao điểm, nên hệ vô nghiệm.

#### 09-WR-03 · Phương pháp thế
Giải hệ \(y=x+2,\ x+y=8\).

??? tip "Gợi ý"
    Thế \(y=x+2\) vào phương trình hai.

??? example "Xem lời giải"
    \[
    2x+2=8\Rightarrow x=3,\qquad y=5.
    \]

#### 09-WR-04 · Cộng đại số
Giải hệ \(x+y=9,\ x-y=1\).

??? tip "Gợi ý"
    Cộng hai phương trình để khử \(y\).

??? example "Xem lời giải"
    \[
    2x=10\Rightarrow x=5,\qquad y=4.
    \]

#### 09-WR-05 · Biến đổi trước khi giải
Giải hệ \(\frac{x}{2}+\frac{y}{3}=2,\ x-y=1\).

??? tip "Gợi ý"
    Nhân phương trình đầu với 6.

??? example "Xem lời giải"
    \[
    3x+2y=12,\qquad x-y=1.
    \]
    Từ \(x=y+1\):
    \[
    3(y+1)+2y=12\Rightarrow5y=9\Rightarrow y=\frac95,\qquad x=\frac{14}{5}.
    \]

#### 09-WR-06 · Chọn phương pháp
Với hệ \(y=3x-1,\ 2x+y=9\), giải bằng phương pháp thuận tiện nhất.

??? tip "Gợi ý"
    \(y\) đã được biểu diễn theo \(x\).

??? example "Xem lời giải"
    Thế:
    \[
    2x+3x-1=9\Rightarrow x=2,\qquad y=5.
    \]

#### 09-WR-07 · Kiểm tra nghiệm
Sau khi giải được \((x;y)=(4;3)\), nêu cách kiểm tra kết quả cho một hệ hai phương trình.

??? tip "Gợi ý"
    Không chỉ kiểm tra một phương trình.

??? example "Xem lời giải"
    Thay \(x=4,y=3\) vào **cả hai** phương trình ban đầu; chỉ khi cả hai đẳng thức đều đúng mới xác nhận nghiệm.

#### 09-WR-08 · Bài toán về số
Tổng hai số là 46, hiệu số lớn trừ số bé là 12. Tìm hai số.

??? tip "Gợi ý"
    Gọi số lớn \(x\), số bé \(y\).

??? example "Xem lời giải"
    \[
    \begin{cases}
    x+y=46\\
    x-y=12
    \end{cases}
    \Rightarrow x=29,\qquad y=17.
    \]

#### 09-WR-09 · Chuyển động
Hai xe đi ngược chiều trong 2 giờ được tổng quãng đường 240 km. Xe thứ nhất nhanh hơn xe thứ hai 20 km/h. Tìm vận tốc mỗi xe.

??? tip "Gợi ý"
    Gọi vận tốc là \(x,y\): \(2x+2y=240,\ x-y=20\).

??? example "Xem lời giải"
    \[
    x+y=120,\qquad x-y=20
    \Rightarrow x=70,\qquad y=50.
    \]

#### 09-WR-10 · Năng suất
Hai máy cùng làm được 30 sản phẩm/giờ. Máy A nhiều hơn máy B 6 sản phẩm/giờ. Tìm năng suất mỗi máy.

??? tip "Gợi ý"
    Gọi năng suất \(x,y\).

??? example "Xem lời giải"
    \[
    x+y=30,\qquad x-y=6
    \Rightarrow x=18,\qquad y=12.
    \]

### Entrance10 / Extension

#### 09-ENT-01 · Hệ có tham số
Cho hệ \(x+y=5,\ mx-y=1\). Biết \((2;3)\) là nghiệm, tìm \(m\).

??? tip "Gợi ý"
    Thay cặp nghiệm vào phương trình chứa \(m\).

??? example "Xem lời giải"
    \[
    2m-3=1\Rightarrow m=2.
    \]

#### 09-ENT-02 · Mô hình nhiều bước
Một số có hai chữ số, tổng hai chữ số bằng 11. Đổi chỗ hai chữ số thì số mới nhỏ hơn số cũ 27. Tìm số ban đầu.

??? tip "Gợi ý"
    Gọi hàng chục \(x\), hàng đơn vị \(y\): số là \(10x+y\).

??? example "Xem lời giải"
    \[
    x+y=11,\qquad (10x+y)-(10y+x)=27
    \]
    nên \(x-y=3\). Suy ra \(x=7,y=4\), số là \(74\).

### Challenge

#### 09-CH-01 · Hệ phân thức đơn giản
Giải hệ \(\frac{x+y}{2}=3,\ \frac{x-y}{3}=1\).

??? tip "Gợi ý"
    Khử mẫu từng phương trình trước.

??? example "Xem lời giải"
    \[
    x+y=6,\qquad x-y=3
    \Rightarrow x=\frac92,\qquad y=\frac32.
    \]

---

## Theo dõi sau khi luyện
- [ ] Tôi phân biệt được nghiệm của một phương trình hai ẩn và nghiệm của hệ.
- [ ] Tôi biết khi nào nên dùng thế hoặc cộng đại số.
- [ ] Tôi kiểm tra nghiệm trên cả hai phương trình.
- [ ] Tôi đã tự giải ít nhất 3 bài Core trước khi mở lời giải.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

## Liên kết Roadmap
- **← Học:** [Chuyên đề 09](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Tiếp theo:** [10 – Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
