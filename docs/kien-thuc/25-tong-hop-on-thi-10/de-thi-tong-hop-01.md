# Đề tổng hợp số 01 – Toán vào 10 (tự biên soạn)

> **Bài thi thực hành 120 phút · 10 điểm · Tự luận.** Không dùng gợi ý, gia sư hoặc lời giải trong thời gian làm đề. Hãy viết từng bước và kiểm tra điều kiện/đơn vị trước khi kết luận.
>
> **Không phải đề thi chính thức hay đề thi thử của Sở GD&ĐT Hà Nội.** Bài do Roadmap biên soạn để bao quát nhiều mạch THCS và đang chờ phản biện học thuật độc lập. Cấu trúc, tỷ trọng điểm có thể khác đề thực tế từng năm.

## I. Dữ liệu và xác suất (1,5 điểm)

Bảng sau ghi số sách bốn nhóm học sinh đã đọc trong một tháng:

| Số sách | 5 | 6 | 7 | 8 |
|:--:|:--:|:--:|:--:|:--:|
| Số học sinh | 3 | 5 | 7 | 5 |

a) Tính số trung bình và trung vị của dãy số liệu. (1,0 điểm)

b) Chọn ngẫu nhiên một học sinh trong 20 học sinh; tính xác suất em đó đọc ít nhất 7 quyển. (0,5 điểm)

## II. Biểu thức chứa căn (2,0 điểm)

Cho \(x\geq0,\ x\ne4\) và
\[
P=\frac{\sqrt{x}+2}{\sqrt{x}-2}-\frac{\sqrt{x}-2}{\sqrt{x}+2}.
\]

a) Rút gọn \(P\). (1,0 điểm)

b) Tìm \(x\) để \(P=\dfrac83\). (1,0 điểm)

## III. Phương trình và hàm số (2,0 điểm)

a) Một buổi chiếu phim bán 40 vé; vé học sinh giá 30 nghìn đồng, vé người lớn giá 50 nghìn đồng. Tổng thu là 1.640 nghìn đồng. Tìm số vé mỗi loại. (1,0 điểm)

b) Tìm tọa độ giao điểm của parabol \(y=x^2\) và đường thẳng \(y=4x+5\). Kiểm tra hai điểm tìm được trên cả hai đồ thị. (1,0 điểm)

## IV. Hình học tổng hợp (3,0 điểm)

Cho đường tròn đường kính \(AB=13\) cm. Điểm \(C\) khác \(A,B\) nằm trên đường tròn sao cho \(AC=5\) cm. Gọi \(H\) là chân đường vuông góc từ \(C\) xuống \(AB\).

a) Chứng minh tam giác \(ABC\) vuông tại \(C\), rồi tính \(BC\). (0,75 điểm)

b) Chứng minh \(AC^2=AH\cdot AB\), tính \(AH\) và \(BH\). (1,25 điểm)

c) Tính \(CH\) bằng hai cách: từ diện tích tam giác và từ hệ thức lượng. (1,0 điểm)

## V. Tối ưu hóa cơ bản (1,5 điểm)

Một mảnh đất hình chữ nhật có tổng chiều dài và chiều rộng bằng 10 m. Tìm kích thước để diện tích lớn nhất, và tính diện tích lớn nhất đó. Giải thích tại sao đạt được giá trị lớn nhất.

??? success "Tôi đã làm xong — mở đáp án và hướng dẫn chấm"

    ### I. Dữ liệu và xác suất (1,5 điểm)

    Tổng số học sinh là \(3+5+7+5=20\). Tổng số sách là \(5\cdot3+6\cdot5+7\cdot7+8\cdot5=134\); số trung bình bằng \(134/20=6,7\). Vị trí 10 và 11 đều thuộc nhóm đọc 7 quyển, nên trung vị bằng **7** (1,0 điểm). Số em đọc ít nhất 7 quyển là \(7+5=12\); xác suất là **\(12/20=3/5\)** (0,5 điểm).

    ### II. Biểu thức chứa căn (2,0 điểm)

    Đặt \(t=\sqrt{x}\geq0,\ t\ne2\). Khi đó
    \[
    P=\frac{(t+2)^2-(t-2)^2}{(t-2)(t+2)}
    =\frac{8t}{t^2-4}=\frac{8\sqrt{x}}{x-4}.
    \]
    (1,0 điểm.) Giải \(8t/(t^2-4)=8/3\) được \(3t=t^2-4\), tức \((t-4)(t+1)=0\). Nhận \(t=4\) (loại \(t=-1\)), suy ra **\(x=16\)**, thỏa mãn điều kiện. (1,0 điểm.)

    ### III. Phương trình và hàm số (2,0 điểm)

    Gọi \(h,n\) là số vé học sinh/người lớn, nguyên không âm. Ta có \(h+n=40,\ 30h+50n=1640\). Thay \(h=40-n\) được \(1200+20n=1640\), \(n=22,\ h=18\). Kiểm tra \(18\cdot30+22\cdot50=1640\) (1,0 điểm). Giao điểm thỏa \(x^2=4x+5\), hay \((x-5)(x+1)=0\). Với \(x=5\), \(y=25\); với \(x=-1\), \(y=1\). Vậy hai giao điểm **\((5;25)\)** và **\((-1;1)\)**. Cả hai thỏa mãn hai phương trình gốc (1,0 điểm).

    ### IV. Hình học tổng hợp (3,0 điểm)

    Góc \(ACB\) nội tiếp chắn đường kính \(AB\), nên \(\angle ACB=90^\circ\). Theo Pythagore, \(BC=\sqrt{13^2-5^2}=\sqrt{144}=12\) cm (0,75 điểm).

    Vì \(CH\perp AB\), các tam giác \(ACH\) và \(ABC\) đồng dạng (góc \(A\) chung, cùng có một góc vuông). Do đó \(AC/AB=AH/AC\), suy ra \(AC^2=AH\cdot AB\). Vậy \(AH=25/13\) cm, \(BH=AB-AH=169/13-25/13=144/13\) cm (1,25 điểm).

    Cách 1: tính diện tích tam giác \(ABC\) theo hai đáy: \(AC\cdot BC/2=AB\cdot CH/2\), suy ra \(CH=5\cdot12/13=\mathbf{60/13}\) cm. Cách 2: \(CH^2=AH\cdot BH=(25/13)(144/13)=3600/169\), nên \(CH=60/13\) cm vì độ dài dương (1,0 điểm).

    ### V. Tối ưu hóa cơ bản (1,5 điểm)

    Gọi hai kích thước là \(a,b>0\), \(a+b=10\). Từ \((a-b)^2\geq0\) suy ra \((a+b)^2\geq4ab\), vậy \(ab\leq100/4=25\) m². Dấu bằng đạt khi \(a=b=5\) m. Diện tích lớn nhất là **25 m²**, với hình vuông cạnh 5 m (1,5 điểm).

## Sau khi làm đề

Tự chấm theo từng ý, ghi ba cột **câu sai – lý do – chuyên đề ôn lại**. Riêng câu hình, kiểm tra có viết rõ lý do đồng dạng và dùng đúng hệ thức lượng hay chỉ chép kết quả.

[Học các bài toán kinh điển](bai-toan-kinh-dien.md) · [Tự kiểm tra học thuật 45–60 phút](tu-kiem-tra.md) · [Kỹ năng phòng thi](tu-kiem-tra-ky-nang.md)

### Nguồn để đối chiếu định dạng đề thực tế

- [Sở GD&ĐT Hà Nội: đề và đáp án môn Toán không chuyên năm học 2026–2027](https://www.hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctfull/552/16984).
- [Sở GD&ĐT Hà Nội: đề và đáp án năm học 2025–2026](https://www.hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctmb/552/16329).

Những đề chính thức trên được cung cấp để tham khảo trực tiếp; **đề số 01 ở đây là đề gốc do Roadmap tự biên soạn, không chép hoặc gắn nhãn đề thật**.
