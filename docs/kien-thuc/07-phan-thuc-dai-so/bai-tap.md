# Practice Room – Chuyên đề 07: Phân thức đại số

> **Mục tiêu:** rèn kỹ năng đến mức ổn định bằng hai cách bổ sung cho nhau: **luyện nhanh tương tác** và **luyện tự luận có lời giải ẩn**.
>
> **Core mặc định:** các bài Entrance10 / Challenge được tách riêng và không ảnh hưởng KNTT Core readiness.

## B. ✍️ Luyện tự luận & trình bày

Hãy tự giải trên giấy hoặc vở trước. Chỉ mở **Gợi ý** khi thật sự cần và mở **Lời giải** sau khi đã hoàn thành hoặc bị mắc ở một bước cụ thể.

### Core 1 – Điều kiện xác định, rút gọn, quy đồng

#### 07-WR-01 · Điều kiện xác định

Tìm điều kiện xác định của

\[
\frac{3}{x-2}.
\]

??? tip "Gợi ý"
    Mẫu thức phải khác 0.

??? example "Xem lời giải"
    \[
    x-2\ne0\Rightarrow x\ne2.
    \]

#### 07-WR-02 · Rút gọn đơn thức

Rút gọn

\[
\frac{6x}{9x^2}.
\]

??? tip "Gợi ý"
    Trước hết ghi điều kiện \(x\ne0\), sau đó chia tử và mẫu cho nhân tử chung \(3x\).

??? example "Xem lời giải"
    Với \(x\ne0\),

    \[
    \frac{6x}{9x^2}=\frac{2}{3x}.
    \]

#### 07-WR-03 · Quy đồng hai phân thức

Quy đồng

\[
\frac1x\quad\text{và}\quad\frac1{x+1}.
\]

??? tip "Gợi ý"
    Hai mẫu không có nhân tử chung khác 1, nên có thể chọn MTC là \(x(x+1)\).

??? example "Xem lời giải"
    Điều kiện:

    \[
    x\ne0,\quad x\ne-1.
    \]

    Khi đó:

    \[
    \frac1x=\frac{x+1}{x(x+1)},\qquad
    \frac1{x+1}=\frac{x}{x(x+1)}.
    \]

#### 07-WR-04 · Hằng đẳng thức và điều kiện ban đầu

Rút gọn

\[
\frac{x^2-9}{x-3}.
\]

??? tip "Gợi ý"
    Dùng hiệu hai bình phương và giữ điều kiện của biểu thức ban đầu.

??? example "Xem lời giải"
    Điều kiện \(x\ne3\).

    \[
    x^2-9=(x-3)(x+3),
    \]

    nên

    \[
    \frac{x^2-9}{x-3}=x+3,\qquad x\ne3.
    \]

### Core 2 – Cộng, trừ, nhân, chia

#### 07-WR-05 · Cộng khác mẫu

Tính

\[
\frac{2}{x}+\frac{3}{2x}.
\]

??? tip "Gợi ý"
    MTC là \(2x\).

??? example "Xem lời giải"
    Với \(x\ne0\),

    \[
    \frac{2}{x}+\frac{3}{2x}
    =\frac{4}{2x}+\frac{3}{2x}
    =\frac{7}{2x}.
    \]

#### 07-WR-06 · Trừ cùng mẫu

Tính

\[
\frac{x}{x-1}-\frac1{x-1}.
\]

??? tip "Gợi ý"
    Giữ nguyên mẫu và trừ hai tử thức.

??? example "Xem lời giải"
    Với \(x\ne1\),

    \[
    \frac{x}{x-1}-\frac1{x-1}
    =\frac{x-1}{x-1}=1.
    \]

#### 07-WR-07 · Rút gọn có điều kiện

Rút gọn

\[
A=\frac{x^2-4}{x^2-2x}.
\]

??? tip "Gợi ý"
    Phân tích cả tử và mẫu thành nhân tử trước khi rút gọn.

??? example "Xem lời giải"
    Mẫu ban đầu:

    \[
    x^2-2x=x(x-2),
    \]

    nên \(x\ne0,2\).

    Sau đó:

    \[
    A=\frac{(x-2)(x+2)}{x(x-2)}
    =\frac{x+2}{x},
    \]

    với **điều kiện ban đầu** \(x\ne0,2\).

#### 07-WR-08 · Nhân phân thức

Tính

\[
\frac{x}{x+1}\cdot\frac{x^2-1}{x}.
\]

??? tip "Gợi ý"
    Phân tích \(x^2-1\) trước rồi rút các nhân tử chung.

??? example "Xem lời giải"
    Điều kiện \(x\ne0,-1\).

    \[
    \frac{x}{x+1}\cdot\frac{(x-1)(x+1)}{x}=x-1.
    \]

#### 07-WR-09 · Chia phân thức

Tính

\[
\frac{x^2-1}{x^2+2x+1}:\frac{x-1}{x+1}.
\]

??? tip "Gợi ý"
    Nhớ điều kiện số chia khác 0 rồi đổi phép chia thành nhân với nghịch đảo.

??? example "Xem lời giải"
    Ta có \(x^2+2x+1=(x+1)^2\). Điều kiện từ các mẫu là \(x\ne-1\), đồng thời phân thức chia phải khác 0 nên \(x\ne1\).

    \[
    \frac{(x-1)(x+1)}{(x+1)^2}\cdot\frac{x+1}{x-1}=1.
    \]

    Vậy kết quả là \(1\), với \(x\ne-1,1\).

### Core 3 – Tổng hợp

#### 07-WR-10 · Biểu thức nhiều phép tính

Rút gọn

\[
A=\frac{x}{x-1}-\frac1{x+1}-\frac{2}{x^2-1}.
\]

??? tip "Gợi ý"
    Phân tích \(x^2-1=(x-1)(x+1)\), sau đó quy đồng.

??? example "Xem lời giải"
    Điều kiện \(x\ne\pm1\).

    Quy đồng về mẫu \((x-1)(x+1)\):

    \[
    A=
    \frac{x(x+1)-(x-1)-2}{(x-1)(x+1)}
    =\frac{x^2-1}{x^2-1}=1.
    \]

#### 07-WR-11 · Vì sao phải giữ điều kiện cũ?

Giải thích vì sao khi rút gọn

\[
\frac{x^2-4}{x-2}=x+2
\]

vẫn phải giữ điều kiện \(x\ne2\).

??? tip "Gợi ý"
    Hãy so sánh miền xác định của biểu thức ban đầu và biểu thức sau khi rút gọn.

??? example "Xem lời giải"
    Phân thức ban đầu không xác định tại \(x=2\) vì mẫu bằng 0. Việc rút gọn nhân tử \(x-2\) không thể làm xuất hiện lại một giá trị vốn đã bị loại khỏi miền xác định ban đầu. Vì vậy đẳng thức chỉ đúng trên miền \(x\ne2\).

---

## C. 🚀 Entrance10 / Extension

Các bài dưới đây **không tính vào KNTT Core readiness**.

#### 07-ENT-01 · Giá trị nguyên

Cho

\[
A=\frac{x+1}{x-2}.
\]

Tìm các giá trị nguyên của \(x\) để \(A\) nguyên.

??? tip "Gợi ý"
    Biến đổi về dạng “số nguyên + phân số có tử cố định”.

??? example "Xem lời giải"
    \[
    A=1+\frac{3}{x-2}.
    \]

    Với \(x\in\mathbb Z\), \(A\) nguyên khi \(x-2\) là ước khác 0 của 3:

    \[
    x-2\in\{-3,-1,1,3\}.
    \]

    Suy ra

    \[
    x\in\{-1,1,3,5\}.
    \]

#### 07-ENT-02 · Ba mẫu thức và đổi dấu

Rút gọn một biểu thức gồm ba phân thức trong đó có hai mẫu dạng \(x-a\) và \(a-x\). Tự đặt một ví dụ đơn giản rồi chỉ ra bước đổi dấu trước khi quy đồng.

??? tip "Gợi ý"
    Luôn dùng \(a-x=-(x-a)\).

??? example "Xem một mẫu"
    Chẳng hạn

    \[
    \frac1{x-2}+\frac1{2-x}=0,\qquad x\ne2.
    \]

    Điểm chính là phải đổi dấu **cả phân thức**, không chỉ đổi dấu mẫu.

---

## D. 🧠 Challenge

Challenge là vùng tự chọn; không phải điều kiện hoàn thành Core.

#### 07-CH-01 · Biểu thức hữu tỉ nhiều tầng

Tự chọn một biểu thức có ngoặc và ít nhất ba phép tính phân thức. Hãy viết **kế hoạch biến đổi** trước khi thực hiện phép tính.

??? tip "Gợi ý"
    Ưu tiên: ĐKXĐ → phân tích nhân tử → rút gọn cục bộ → nhân/chia → cộng/trừ → rút gọn cuối.

??? example "Tiêu chí tự kiểm tra"
    Một lời giải tốt cần:
    
    - ghi đủ ĐKXĐ;
    - không triệt tiêu qua dấu cộng/trừ;
    - không quy đồng quá sớm nếu có thể rút gọn cục bộ;
    - giữ các giá trị bị loại từ biểu thức ban đầu.

---

## Theo dõi sau khi luyện

- [ ] Tôi đã làm một lượt luyện tương tác không dùng gợi ý.
- [ ] Tôi biết kỹ năng nào hiện còn có accuracy thấp.
- [ ] Tôi đã tự giải ít nhất 3 bài tự luận Core trên giấy trước khi mở lời giải.
- [ ] Tôi đã làm lại các bài sai mà không nhìn đáp án.
- [ ] Khi tương đối chắc, tôi chuyển sang [✅ Core Readiness Check](tu-kiem-tra.md).

---

## Liên kết Roadmap

- **← Học:** [Chuyên đề 07 – Phân thức đại số](index.md)
- **→ Tự kiểm tra:** [Core Readiness Check](tu-kiem-tra.md)
- **→ Chuyên đề tiếp theo:** [08 – Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)
