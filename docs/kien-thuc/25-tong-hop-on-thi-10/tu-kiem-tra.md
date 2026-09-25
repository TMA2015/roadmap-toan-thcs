# Tự kiểm tra Toán học – Chuyên đề 25

> **Đây là bài tự kiểm tra học thuật**, không phải bài hỏi kinh nghiệm ôn thi. Làm độc lập trong khoảng **45–60 phút**, thang điểm 10. Không sử dụng gia sư/gợi ý trước khi hoàn tất; tự đối chiếu đáp án sau khi đã làm.
>
> Bài do Roadmap tự biên soạn để tự học, **không phải đề thi chính thức Hà Nội** và đang chờ một lượt phản biện toán học độc lập. Điểm không khóa quyền học tiếp.

## Đề bài

### Câu 1. Biểu thức căn – 2 điểm

Cho \(x\geq 0,\ x\ne 1\). Rút gọn
\[
A=\frac{\sqrt{x}+1}{\sqrt{x}-1}-\frac{\sqrt{x}-1}{\sqrt{x}+1}.
\]
Tìm \(x\) sao cho \(A=\dfrac83\).

### Câu 2. Phương trình bậc hai – 2 điểm

Cho \(x_1,x_2\) là hai nghiệm của \(x^2-5x+6=0\).

a) Tính \(x_1+x_2\), \(x_1x_2\).

b) Không tính riêng từng nghiệm, hãy tính \(x_1^2+x_2^2\) và \(\dfrac1{x_1}+\dfrac1{x_2}\).

### Câu 3. Mô hình hóa – 2 điểm

Một buổi biểu diễn bán 30 vé gồm vé học sinh giá 25 nghìn đồng và vé người lớn giá 40 nghìn đồng, thu 990 nghìn đồng. Tìm số vé mỗi loại. Nêu điều kiện của ẩn và đối chiếu số tiền sau khi giải.

### Câu 4. Hình học tổng hợp – 3 điểm

Cho đường tròn đường kính \(AB=10\) cm và điểm \(C\) khác \(A,B\) nằm trên đường tròn, \(AC=6\) cm. Gọi \(H\) là chân đường vuông góc từ \(C\) xuống \(AB\).

a) Giải thích vì sao tam giác \(ABC\) vuông tại \(C\) và tính \(BC\).

b) Chứng minh \(AC^2=AH\cdot AB\), suy ra \(AH\).

c) Tính \(CH\) bằng hai cách: diện tích tam giác và hệ thức lượng.

### Câu 5. Thống kê và xác suất – 1 điểm

Một hộp chứa 5 thẻ ghi số \(1,2,3,4,5\), các thẻ cùng khả năng được lấy. Lấy ngẫu nhiên một thẻ. Tính xác suất ghi số nguyên tố; giải thích mẫu số và tử số.

??? success "Đã làm xong — mở đáp án và hướng dẫn chấm"

    **Câu 1 (2 điểm).** Đặt \(t=\sqrt{x}\), nên \(t\geq0,\ t\ne1\). Khi đó:
    \[
    A=\frac{(t+1)^2-(t-1)^2}{(t-1)(t+1)}
     =\frac{4t}{t^2-1}=\frac{4\sqrt{x}}{x-1}.
    \]
    Từ \(A=8/3\) suy ra \(12t=8(t^2-1)\), hay \(2t^2-3t-2=0\). Phân tích \((2t+1)(t-2)=0\); vì \(t\geq0\), chỉ nhận \(t=2\), do đó **\(x=4\)**, hợp điều kiện. (Rút gọn 1 điểm; giải và kiểm tra 1 điểm.)

    **Câu 2 (2 điểm).** Theo Viète, tổng bằng \(5\), tích bằng \(6\). Do đó
    \[
    x_1^2+x_2^2=(x_1+x_2)^2-2x_1x_2=25-12=13,
    \quad
    \frac1{x_1}+\frac1{x_2}=\frac{x_1+x_2}{x_1x_2}=\frac56.
    \]
    Được phép lấy nghịch đảo vì tích \(x_1x_2=6\ne0\). (Viète 1 điểm; hai biểu thức và điều kiện 1 điểm.)

    **Câu 3 (2 điểm).** Đặt \(h,n\) lần lượt là số vé học sinh/người lớn, là các số nguyên không âm. Ta có \(h+n=30,\ 25h+40n=990\) (đơn vị nghìn đồng). Thay \(h=30-n\): \(750-25n+40n=990\), suy ra \(n=16\), \(h=14\). Kiểm tra \(14+16=30\), \(14\cdot25+16\cdot40=990\). (Lập hệ và điều kiện 1 điểm; giải, đối chiếu, kết luận 1 điểm.)

    **Câu 4 (3 điểm).** Góc nội tiếp chắn đường kính \(AB\) bằng \(90^\circ\), vậy tam giác \(ABC\) vuông tại \(C\). Theo Pythagore, \(BC=\sqrt{10^2-6^2}=8\) cm (0,75 điểm). Vì \(CH\perp AB\), hai tam giác \(ACH\) và \(ABC\) đồng dạng (góc \(A\) chung, cùng có góc vuông). Suy ra \(AC/AB=AH/AC\), hay \(AC^2=AH\cdot AB\); \(AH=36/10=3,6\) cm (1,0 điểm). Khi đó \(BH=10-3,6=6,4\) cm. Cách 1: diện tích \(ABC\) tính theo hai cặp đáy–cao là \(AC\cdot BC/2=AB\cdot CH/2\), nên \(CH=6\cdot8/10=4,8\) cm. Cách 2: hệ thức lượng \(CH^2=AH\cdot BH=3,6\cdot6,4=23,04\), nên \(CH=4,8\) cm (1,25 điểm).

    **Câu 5 (1 điểm).** Không gian mẫu có 5 kết quả đồng khả năng. Các số nguyên tố trong đó là \(2,3,5\), gồm 3 kết quả, nên \(P=3/5\). (Liệt kê đúng 0,5 điểm; xác suất và giải thích 0,5 điểm.)

## Chữa bài và học lại

Đừng chỉ ghi điểm tổng. Với từng câu sai, tìm công cụ cần ôn: C1 → [căn thức](../11-can-thuc/) / [phân thức](../07-phan-thuc-dai-so/); C2 → [phương trình bậc hai và Viète](../12-phuong-trinh-bac-hai-viete/); C3 → [hệ phương trình](../09-he-phuong-trinh/); C4 → [tam giác](../14-tam-giac/) / [hệ thức lượng](../18-he-thuc-luong/); C5 → [xác suất](../23-xac-suat/).

[Đề tổng hợp 120 phút số 01](de-thi-tong-hop-01.md) · [Bài toán mẫu kinh điển](bai-toan-kinh-dien.md) · [Tự kiểm tra kỹ năng làm đề](tu-kiem-tra-ky-nang.md)
