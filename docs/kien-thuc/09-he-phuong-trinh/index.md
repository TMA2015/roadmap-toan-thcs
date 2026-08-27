# Chuyên đề 09 – Hệ phương trình bậc nhất hai ẩn


> **Trạng thái:** Đã kiểm định nội dung học thuật; cấu trúc Roadmap chuẩn 11 mục.
>
> **Lớp trọng tâm:** 9
> **Mạch kiến thức:** Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

> **Vai trò trong Roadmap:** kết nối trực tiếp từ phương trình một ẩn sang bài toán có hai đại lượng chưa biết; là nền tảng cho bài toán thực tế, hàm số và ôn thi vào lớp 10.

---

## 🧭 1. Bản đồ kiến thức

```text
HỆ PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
│
├── 1. Phương trình bậc nhất hai ẩn
│   ├── Dạng ax + by = c
│   ├── Nghiệm (x; y)
│   └── Biểu diễn hình học bằng đường thẳng
│
├── 2. Hệ hai phương trình bậc nhất hai ẩn
│   ├── Một nghiệm
│   ├── Vô nghiệm
│   └── Vô số nghiệm
│
├── 3. Phương pháp giải
│   ├── Thế
│   ├── Cộng đại số
│   └── Chọn phương pháp phù hợp
│
├── 4. Vận dụng: số nghiệm và tham số
│   ├── Nhận biết số nghiệm
│   ├── Điều kiện để có nghiệm đặc biệt
│   └── Tìm tham số
│
└── 5. Bài toán thực tế
    ├── Chọn ẩn
    ├── Lập hệ
    ├── Giải hệ
    └── Đối chiếu điều kiện thực tế
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Hiểu khái niệm phương trình bậc nhất hai ẩn và nghiệm của phương trình.
- [ ] Hiểu nghiệm của hệ là cặp số thỏa mãn đồng thời cả hai phương trình.
- [ ] Giải thành thạo hệ bằng phương pháp thế.
- [ ] Giải thành thạo hệ bằng phương pháp cộng đại số.
- [ ] Biết chọn phương pháp ngắn gọn thay vì giải máy móc.
- [ ] Kiểm tra nghiệm bằng cách thay ngược vào hệ ban đầu.
- [ ] Nhận biết trường hợp hệ có một nghiệm, vô nghiệm hoặc vô số nghiệm.
- [ ] Lập được hệ từ bài toán thực tế đơn giản và trung bình.
- [ ] Xử lý được bài toán có tham số ở mức vận dụng phù hợp với THCS.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Phương trình bậc nhất hai ẩn

Phương trình bậc nhất hai ẩn có dạng:

$$
ax + by = c
$$

trong đó `a`, `b` không đồng thời bằng 0.

Một cặp số `(x_0; y_0)` là nghiệm nếu:

$$
a x_0 + b y_0 = c.
$$

Ví dụ:

$$
2x + y = 5
$$

có nghiệm `(2;1)` vì:

$$
2\cdot2 + 1 = 5.
$$

Trên tập số thực, một phương trình bậc nhất hai ẩn có **vô số nghiệm**.

---

### 3.2. Hệ hai phương trình bậc nhất hai ẩn

Hệ có dạng:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

Nghiệm của hệ là cặp `(x;y)` thỏa mãn **đồng thời cả hai phương trình**.

Ví dụ:

$$
\begin{cases}
x+y=5\\
x-y=1
\end{cases}
$$

có nghiệm `(3;2)`.

---

### 3.3. Ý nghĩa hình học

Mỗi phương trình bậc nhất hai ẩn biểu diễn một đường thẳng trên mặt phẳng tọa độ.

Vì vậy:

- Hai đường thẳng cắt nhau → hệ có **một nghiệm**.
- Hai đường thẳng song song → hệ **vô nghiệm**.
- Hai đường thẳng trùng nhau → hệ có **vô số nghiệm**.

Đây là cầu nối quan trọng sang [Chuyên đề 10 – Hàm số và đồ thị](../10-ham-so-do-thi/index.md).

---

### 3.4. Hai phương pháp giải cơ bản

#### Phương pháp thế

Quy trình:

1. Rút một ẩn theo ẩn còn lại từ một phương trình.
2. Thế vào phương trình kia.
3. Giải phương trình một ẩn.
4. Tìm ẩn còn lại.
5. Kết luận nghiệm của hệ.

Ví dụ:

$$
\begin{cases}
x+y=5\\
2x-y=4
\end{cases}
$$

Từ phương trình đầu:

$$
y=5-x.
$$

Thế vào phương trình hai:

$$
2x-(5-x)=4
$$

$$
3x=9 \Rightarrow x=3.
$$

Suy ra:

$$
y=2.
$$

Vậy hệ có nghiệm:

$$
(x;y)=(3;2).
$$

!!! tip "Khi nào nên dùng thế?"
    Ưu tiên phương pháp thế khi một phương trình đã có hệ số `1` hoặc `-1` ở một ẩn, hoặc có thể dễ dàng rút một ẩn.

---

#### Phương pháp cộng đại số

Mục tiêu là làm cho hệ số của một ẩn trở thành hai số đối nhau hoặc bằng nhau để khử ẩn đó.

Ví dụ:

$$
\begin{cases}
2x+3y=7\\
3x-3y=8
\end{cases}
$$

Cộng hai phương trình:

$$
5x=15 \Rightarrow x=3.
$$

Thế vào phương trình đầu:

$$
6+3y=7 \Rightarrow y=\frac13.
$$

Vậy:

$$
(x;y)=\left(3;\frac13\right).
$$

!!! tip "Khi nào nên dùng cộng đại số?"
    Ưu tiên khi hệ số của một ẩn đã đối nhau, bằng nhau, hoặc chỉ cần nhân một phương trình với số nhỏ để khử ẩn.

---

#### Chọn phương pháp nhanh

| Dấu hiệu | Phương pháp nên ưu tiên |
|---|---|
| Có hệ số `1` hoặc `-1` | Thế |
| Hệ số một ẩn đối nhau | Cộng đại số |
| Hệ số một ẩn bằng nhau | Trừ hai phương trình |
| Chỉ cần nhân một phương trình với 2, 3,... | Cộng đại số |
| Rút ẩn tạo phân số phức tạp | Tránh thế nếu có lựa chọn khác |

Không có quy định bắt buộc phải dùng một phương pháp cố định. Mục tiêu là **đúng, rõ và gọn**.

---

### 3.5. Số nghiệm của hệ

Xét hệ:

$$
\begin{cases}
a_1x+b_1y=c_1\\
a_2x+b_2y=c_2
\end{cases}
$$

Ở mức THCS, có thể nhận biết qua biến đổi hoặc qua vị trí tương đối của hai đường thẳng.

#### Một nghiệm

Ví dụ:

$$
\begin{cases}
x+y=3\\
x-y=1
\end{cases}
$$

Hai phương trình độc lập và hệ giải được một cặp duy nhất.

#### Vô nghiệm

Ví dụ:

$$
\begin{cases}
x+y=2\\
2x+2y=5
\end{cases}
$$

Nhân phương trình đầu với 2 được:

$$
2x+2y=4,
$$

mâu thuẫn với `2x+2y=5`.

Vậy hệ vô nghiệm.

#### Vô số nghiệm

Ví dụ:

$$
\begin{cases}
x+y=2\\
2x+2y=4
\end{cases}
$$

Phương trình thứ hai chính là hai lần phương trình thứ nhất.

Vì vậy hai phương trình tương đương và hệ có vô số nghiệm.

---

## 🔗 4. Kiến thức liên quan

- **Cần nắm trước:** [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md).
- **Hỗ trợ biến đổi:** [04. Biểu thức đại số](../04-bieu-thuc-dai-so/index.md), [06. Phân tích đa thức thành nhân tử](../06-phan-tich-da-thuc/index.md), [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md).
- **Dùng tiếp:** [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md), [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md).

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1 – Kiểm tra một cặp số có là nghiệm không

Thay trực tiếp `(x;y)` vào từng phương trình.

Nếu thỏa mãn **cả hai** thì là nghiệm của hệ.

---

### Dạng 2 – Giải hệ bằng phương pháp thế

Ví dụ:

$$
\begin{cases}
x-2y=1\\
3x+y=11
\end{cases}
$$

Từ phương trình đầu:

$$
x=1+2y.
$$

Thế vào phương trình hai:

$$
3(1+2y)+y=11
$$

$$
7y=8 \Rightarrow y=\frac87.
$$

Suy ra:

$$
x=1+2\cdot\frac87=\frac{23}{7}.
$$

Vậy:

$$
(x;y)=\left(\frac{23}{7};\frac87\right).
$$

---

### Dạng 3 – Giải hệ bằng cộng đại số

Ví dụ:

$$
\begin{cases}
2x+5y=1\\
3x-5y=14
\end{cases}
$$

Cộng hai phương trình:

$$
5x=15 \Rightarrow x=3.
$$

Thế `x=3` vào phương trình đầu:

$$
6+5y=1 \Rightarrow y=-1.
$$

Vậy:

$$
(x;y)=(3;-1).
$$

---

### Dạng 4 – Hệ cần biến đổi trước

Ví dụ:

$$
\begin{cases}
2(x+y)-y=5\\
3x-(x-y)=7
\end{cases}
$$

Phải bỏ ngoặc và thu gọn trước:

$$
\begin{cases}
2x+y=5\\
2x+y=7
\end{cases}
$$

Suy ra hệ vô nghiệm.

---

### Dạng 5 – Hệ có hệ số phân số hoặc biểu thức cần khử mẫu

Với hệ bậc nhất hai ẩn có **hệ số phân số**, có thể:

1. Tìm mẫu chung của các hệ số.
2. Nhân hai vế của từng phương trình với một số khác `0` thích hợp để khử mẫu.
3. Thu gọn thành hệ quen thuộc.
4. Giải hệ.

> Nếu mẫu **chứa biến**, bài toán có thể không còn là hệ phương trình bậc nhất hai ẩn. Khi đó phải tìm điều kiện xác định và xem đây là nội dung kết nối/mở rộng, không áp dụng máy móc quy trình của hệ bậc nhất.

---

### Dạng 6 – Tìm tham số để hệ có nghiệm cho trước

Ví dụ: tìm `m` để `(2;1)` là nghiệm của hệ.

Phương pháp:

- Thay `x=2`, `y=1` vào các phương trình.
- Giải điều kiện thu được đối với `m`.

---

### Dạng 7 – Tìm tham số để hệ có một nghiệm, vô nghiệm hoặc vô số nghiệm

> **Mức vận dụng:** cần xét cẩn thận các giá trị tham số làm thay đổi hệ số hoặc làm một phương trình suy biến.

Cách làm phù hợp ở THCS:

1. Biến đổi hai phương trình về dạng đơn giản.
2. So sánh các hệ số hoặc đưa về hai phương trình tương đương/mâu thuẫn.
3. Xác định điều kiện của tham số.

Cần đặc biệt chú ý các giá trị tham số làm mất bậc hoặc làm hệ số trở thành 0.

---

### Dạng 8 – Bài toán bằng cách lập hệ phương trình

Quy trình 5 bước:

1. **Chọn hai ẩn** và ghi rõ đơn vị.
2. **Đặt điều kiện** cho ẩn.
3. Chuyển dữ kiện thành **hai phương trình**.
4. Giải hệ.
5. Đối chiếu điều kiện và trả lời bằng lời.

---

## 🚀 6. Dạng bài thi vào lớp 10

### Giải hệ trực tiếp – ⭐⭐⭐⭐⭐

Đây là kỹ năng nền tảng và có thể xuất hiện độc lập hoặc được dùng như một bước trong bài toán lớn hơn.

Học sinh cần thành thạo:

- hệ hệ số nguyên;
- hệ cần nhân để khử;
- hệ có phân số đơn giản;
- hệ cần biến đổi trước.

### Hệ có tham số – ⭐⭐⭐⭐

Các yêu cầu luyện tập có thể gồm:

- tìm `m` để hệ có nghiệm thỏa điều kiện;
- tìm `m` để nghiệm có quan hệ như `x+y=k`, `x>0`, `x=y`, ...;
- xác định số nghiệm của hệ.

### Lập hệ từ bài toán thực tế – ⭐⭐⭐⭐⭐

Các nhóm quen thuộc:

- chuyển động;
- năng suất;
- số học;
- phần trăm;
- mua bán;
- hình học;
- bài toán hai đại lượng có tổng và quan hệ khác.

### Kết hợp hệ phương trình với hàm số – ⭐⭐⭐⭐

Nghiệm của hệ có thể được hiểu là giao điểm của hai đường thẳng. Đây là mối nối trực tiếp sang Chuyên đề 10.

---

## ⚠️ 7. Lỗi sai thường gặp

### ❌ Lỗi 1 – Chỉ kiểm tra một phương trình

Một cặp số là nghiệm của hệ khi nó thỏa **cả hai phương trình**.

### ❌ Lỗi 2 – Sai dấu khi thế

Ví dụ có `y=5-x`, khi thế cần giữ ngoặc nếu biểu thức nằm sau dấu trừ.

### ❌ Lỗi 3 – Nhân một phương trình nhưng không nhân toàn bộ hai vế

Nếu nhân phương trình với `-2`, phải nhân **mọi hạng tử ở cả hai vế**.

### ❌ Lỗi 4 – Cộng đại số nhưng khử sai ẩn

Chỉ khử được khi hệ số của ẩn cần khử là hai số đối nhau sau biến đổi.

### ❌ Lỗi 5 – Quên kết luận cặp nghiệm

Không chỉ viết `x=...` và `y=...`; nên kết luận:

$$
(x;y)=(...;...).
$$

### ❌ Lỗi 6 – Lập hệ nhưng quên điều kiện của ẩn

Trong bài toán thực tế, nghiệm đại số có thể không phù hợp thực tế.

### ❌ Lỗi 7 – Không kiểm tra lại

Thay nghiệm vào hệ ban đầu là cách phát hiện rất nhanh lỗi tính toán.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Kiểm tra `(2;1)` có là nghiệm của `3x-y=5` hay không.
2. Kiểm tra `(1;2)` có là nghiệm của hệ

   $$
   \begin{cases}
x+y=3\\
2x-y=0
   \end{cases}
   $$

3. Cho biết hệ sau nên ưu tiên phương pháp nào:

   $$
   \begin{cases}
x+3y=7\\
2x-y=4
   \end{cases}
   $$

### Mức 2 – Thông hiểu

1. Giải bằng phương pháp thế:

   $$
   \begin{cases}
x+y=8\\
2x-y=1
   \end{cases}
   $$

2. Giải bằng cộng đại số:

   $$
   \begin{cases}
3x+2y=7\\
5x-2y=9
   \end{cases}
   $$

3. Xác định hệ có một nghiệm, vô nghiệm hay vô số nghiệm:

   $$
   \begin{cases}
x+2y=3\\
2x+4y=6
   \end{cases}
   $$

### Mức 3 – Vận dụng

1. Giải hệ:

   $$
   \begin{cases}
2(x+y)-3y=4\\
3x-(x-y)=8
   \end{cases}
   $$

2. Tìm `m` để `(1;2)` là nghiệm của:

   $$
   \begin{cases}
x+y=3\\
mx-y=2
   \end{cases}
   $$

3. Tổng của hai số là 45, hiệu của chúng là 9. Lập hệ và tìm hai số.

### Mức 4 – Vận dụng cao / tổng hợp

1. Tìm `m` để nghiệm `(x;y)` của hệ thỏa `x+y=5`:

   $$
   \begin{cases}
x+y=m+2\\
2x-y=4
   \end{cases}
   $$

2. Một ô tô đi quãng đường gồm hai đoạn với hai vận tốc khác nhau. Từ tổng thời gian và tổng quãng đường, lập hệ để tìm độ dài từng đoạn.
3. Tìm điều kiện của tham số để hai đường thẳng tương ứng với hai phương trình của hệ cắt nhau tại một điểm thuộc trục hoành.

---

## ✅ 9. Tự kiểm tra

### Mini quiz

**Câu 1.** Nghiệm của hệ là gì?

A. Một giá trị của `x`
B. Một giá trị của `y`
C. Một cặp `(x;y)` thỏa cả hai phương trình
D. Bất kỳ cặp số nào

**Câu 2.** Hệ nào thích hợp nhất để dùng cộng đại số ngay?

A. `x+y=3` và `2x+5y=7`
B. `2x+3y=4` và `5x-3y=8`
C. `x=2y+1` và `3x-y=4`
D. `x-y=0` và `x+y=2`

**Câu 3.** Hệ

$$
\begin{cases}
x+y=2\\
2x+2y=5
\end{cases}
$$

có bao nhiêu nghiệm?

A. Một
B. Hai
C. Vô nghiệm
D. Vô số nghiệm

**Câu 4.** Khi lập hệ từ bài toán thực tế, bước nào không được bỏ qua?

A. Chọn ẩn
B. Ghi điều kiện của ẩn
C. Đối chiếu nghiệm với thực tế
D. Cả A, B, C

### Đáp án

1. C
2. B
3. C
4. D

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)
- **→ Tiếp theo:** [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- **Ứng dụng mạnh:** [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md)
- **Nền tảng biến đổi:** [04. Biểu thức đại số](../04-bieu-thuc-dai-so/index.md), [06. Phân tích đa thức](../06-phan-tich-da-thuc/index.md), [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md)

- **✏️ Luyện tập:** [Bài tập Chuyên đề 09](bai-tap.md)
- **✅ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 09](tu-kiem-tra.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Giải đúng các hệ cơ bản bằng cả hai phương pháp.
- [ ] Tự chọn được phương pháp giải phù hợp.
- [ ] Phân biệt được một nghiệm, vô nghiệm và vô số nghiệm.
- [ ] Biết kiểm tra nghiệm bằng cách thay ngược.
- [ ] Lập được hệ từ bài toán thực tế cơ bản.
- [ ] Làm được bài có tham số ở mức THCS.
- [ ] Đạt tối thiểu **7/10** ở bài Tự kiểm tra, chữa xong các câu sai và làm chắc bài tập Mức 1–2.
