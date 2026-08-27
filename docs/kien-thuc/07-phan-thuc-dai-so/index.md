# Chuyên đề 07 – Phân thức đại số


> **Trạng thái:** Đã kiểm định nội dung học thuật; cấu trúc Roadmap chuẩn 11 mục.
>
> **Lớp trọng tâm:** 8
> **Mạch kiến thức:** Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

> **Vai trò trong Roadmap:** cầu nối trực tiếp từ phân tích đa thức thành nhân tử sang phương trình chứa ẩn ở mẫu và các phép biến đổi đại số phức tạp.
>

---

## 🧭 1. Bản đồ kiến thức

```text
PHÂN THỨC ĐẠI SỐ
│
├── 1. Khái niệm và điều kiện xác định
│   ├── Tử thức – mẫu thức
│   ├── Mẫu khác 0
│   └── Hai phân thức bằng nhau
│
├── 2. Tính chất cơ bản
│   ├── Nhân cả tử và mẫu với cùng một đa thức khác 0
│   ├── Chia cả tử và mẫu cho nhân tử chung
│   └── Đổi dấu
│
├── 3. Rút gọn phân thức
│   ├── Phân tích tử, mẫu thành nhân tử
│   ├── Tìm nhân tử chung
│   └── Rút gọn nhưng không làm mất điều kiện xác định
│
├── 4. Quy đồng mẫu thức
│   ├── Phân tích mẫu
│   ├── Chọn mẫu thức chung
│   └── Tìm nhân tử phụ
│
├── 5. Phép tính
│   ├── Cộng – trừ
│   ├── Nhân
│   ├── Chia
│   └── Biểu thức nhiều phép tính
│
└── 6. Ứng dụng
    ├── Tính giá trị biểu thức
    ├── Chứng minh đẳng thức
    ├── Tìm giá trị nguyên
    └── Chuẩn bị phương trình chứa ẩn ở mẫu
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Nhận biết đúng phân thức đại số và xác định tử thức, mẫu thức.
- [ ] Tìm điều kiện xác định trước khi thực hiện các phép biến đổi.
- [ ] Hiểu và sử dụng đúng tính chất cơ bản của phân thức.
- [ ] Rút gọn phân thức bằng cách phân tích đa thức thành nhân tử.
- [ ] Quy đồng mẫu thức của hai hoặc nhiều phân thức.
- [ ] Thực hiện đúng cộng, trừ, nhân, chia phân thức.
- [ ] Biến đổi biểu thức hữu tỉ nhiều bước theo thứ tự hợp lý.
- [ ] Tính giá trị biểu thức sau khi rút gọn và kiểm tra điều kiện.
- [ ] Nhận diện các lỗi sai do rút gọn sai, đổi dấu sai hoặc quên điều kiện xác định.
- [ ] Chuẩn bị tốt cho Chuyên đề 08 – Phương trình và bất phương trình.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Phân thức đại số là gì?

Phân thức đại số có dạng:

`A/B`

trong đó `A`, `B` là các đa thức và `B` là **đa thức khác đa thức 0**.

- `A` gọi là **tử thức**.
- `B` gọi là **mẫu thức**.

Khi thay biến bằng một giá trị cụ thể, còn phải bảo đảm **giá trị của mẫu thức khác 0**.

Ví dụ:

- `(x + 1)/(x - 2)`
- `(2x² - 3x + 1)/(x² - 9)`
- `5/(x + 4)`

Một đa thức cũng có thể xem là một phân thức có mẫu bằng `1`.

---

### 3.2. Điều kiện xác định

Với một giá trị cụ thể của biến, phân thức xác định khi giá trị của mẫu thức khác `0`.

Ví dụ:

`A = (x + 1)/(x - 3)`

Điều kiện xác định:

`x - 3 ≠ 0 ⇒ x ≠ 3`

Với:

`B = (x + 2)/(x² - 9)`

Ta có:

`x² - 9 = (x - 3)(x + 3)`

nên:

`x ≠ 3` và `x ≠ -3`.

!!! warning "Quy tắc bắt buộc"
    Với bài có phân thức chứa biến ở mẫu, hãy tìm **điều kiện xác định trước khi rút gọn hoặc biến đổi**.

---

### 3.3. Hai phân thức bằng nhau

Với `B ≠ 0`, `D ≠ 0`:

`A/B = C/D`

khi và chỉ khi:

`A·D = B·C`.

Ví dụ:

`(x + 1)/(x - 2) = (2x + 2)/(2x - 4)`

trên miền xác định `x ≠ 2`.

---

### 3.4. Tính chất cơ bản của phân thức

Với `M` là một đa thức khác đa thức `0`:

`A/B = (A·M)/(B·M)`

Khi xét giá trị của biểu thức, cần giữ các điều kiện để cả hai mẫu thức đều khác `0`.

Nếu `N` là nhân tử chung khác đa thức `0` của cả tử và mẫu thì có thể rút gọn:

`(A·N)/(B·N) = A/B`

trên các giá trị của biến mà phân thức ban đầu xác định.

Đây là cơ sở của hai thao tác quan trọng:

- **quy đồng**: nhân thêm nhân tử;
- **rút gọn**: chia đi nhân tử chung.

---

### 3.5. Quy tắc đổi dấu

Ta có:

`A/B = (-A)/(-B)`

và:

`A/(-B) = (-A)/B = -(A/B)`.

Đặc biệt:

`x - a = -(a - x)`.

Ví dụ:

`1/(x - 2) = -1/(2 - x)`.

Đây là kỹ năng rất quan trọng khi quy đồng mẫu thức.

---

## 🔗 4. Kiến thức liên quan

### Kiến thức cần nắm trước

- [Chuyên đề 04 – Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [Chuyên đề 05 – 7 Hằng đẳng thức đáng nhớ](../05-7-hang-dang-thuc/index.md)
- [Chuyên đề 06 – Phân tích đa thức thành nhân tử](../06-phan-tich-da-thuc/index.md)

### Kiến thức sẽ sử dụng tiếp

- [Chuyên đề 08 – Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)

Chuỗi kiến thức chính:

```text
04. Biểu thức đại số
        ↓
05. Hằng đẳng thức
        ↓
06. Phân tích đa thức thành nhân tử
        ↓
07. PHÂN THỨC ĐẠI SỐ
        ↓
08. Phương trình và bất phương trình
```

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1 – Tìm điều kiện xác định

**Dấu hiệu:** mẫu thức có chứa biến.

**Cách làm:**

1. Cho từng mẫu thức khác `0`.
2. Phân tích mẫu thành nhân tử nếu cần.
3. Loại các giá trị làm mẫu bằng `0`.

**Ví dụ:**

Tìm điều kiện xác định của:

`A = (x + 2)/(x² - 5x + 6)`

Ta có:

`x² - 5x + 6 = (x - 2)(x - 3)`

Vậy:

`x ≠ 2`, `x ≠ 3`.

---

### Dạng 2 – Rút gọn phân thức

**Dấu hiệu:** tử và mẫu có thể phân tích thành nhân tử chung.

**Quy trình:**

`phân tích tử, mẫu → nhận nhân tử chung → rút gọn → giữ nguyên điều kiện xác định ban đầu`

**Ví dụ:**

`A = (x² - 9)/(x² - 3x)`

Điều kiện:

`x ≠ 0`, `x ≠ 3`.

Phân tích:

`x² - 9 = (x - 3)(x + 3)`

`x² - 3x = x(x - 3)`

Suy ra:

`A = [(x - 3)(x + 3)]/[x(x - 3)] = (x + 3)/x`

với **điều kiện ban đầu**:

`x ≠ 0`, `x ≠ 3`.

!!! danger "Không được làm mất điều kiện"
    Sau khi rút gọn, mẫu mới chỉ còn `x`, nhưng giá trị `x = 3` vẫn phải loại vì phân thức ban đầu không xác định tại đó.

---

### Dạng 3 – Đổi dấu để tạo mẫu giống nhau

Ví dụ:

`A = 1/(x - 2) + 1/(2 - x)`

Vì:

`2 - x = -(x - 2)`

nên:

`1/(2 - x) = -1/(x - 2)`

Do đó:

`A = 0`

với `x ≠ 2`.

---

### Dạng 4 – Quy đồng mẫu thức

**Quy trình chuẩn:**

1. Phân tích các mẫu thành nhân tử.
2. Chọn mẫu thức chung.
3. Xác định nhân tử phụ của từng mẫu.
4. Nhân cả tử và mẫu với nhân tử phụ tương ứng.

**Ví dụ:**

Quy đồng:

`1/[x(x - 1)]` và `1/[x(x + 1)]`.

Mẫu thức chung:

`x(x - 1)(x + 1)`.

Ta được:

`1/[x(x - 1)] = (x + 1)/[x(x - 1)(x + 1)]`

`1/[x(x + 1)] = (x - 1)/[x(x - 1)(x + 1)]`.

---

### Dạng 5 – Cộng, trừ phân thức

#### Cùng mẫu

`A/M + B/M = (A + B)/M`

`A/M - B/M = (A - B)/M`

#### Khác mẫu

Phải quy đồng trước.

**Ví dụ:**

`A = 1/x + 1/(x + 1)`

Điều kiện:

`x ≠ 0`, `x ≠ -1`.

Quy đồng:

`A = (x + 1)/[x(x + 1)] + x/[x(x + 1)]`

`= (2x + 1)/[x(x + 1)]`.

---

### Dạng 6 – Nhân phân thức

Quy tắc:

`A/B · C/D = (A·C)/(B·D)`.

Nên **phân tích thành nhân tử và rút gọn trước khi nhân khai triển**.

**Ví dụ:**

`A = (x² - 4)/(x² - x - 2) · (x - 2)/(x + 2)`

Điều kiện xác định:

`x ≠ 2`, `x ≠ -1`, `x ≠ -2`.

Phân tích:

`x² - 4 = (x - 2)(x + 2)`

`x² - x - 2 = (x - 2)(x + 1)`

Do đó:

`A = [(x - 2)(x + 2)]/[(x - 2)(x + 1)] · (x - 2)/(x + 2)`

`= (x - 2)/(x + 1)`

với điều kiện ban đầu `x ≠ 2`, `x ≠ -1`, `x ≠ -2`.

Ví dụ này cho thấy nên phân tích và rút gọn nhân tử trước khi nghĩ đến khai triển.

---

### Dạng 7 – Chia phân thức

Quy tắc:

`A/B : C/D = A/B · D/C`

Ngoài điều kiện các mẫu khác `0`, cần thêm điều kiện **phân thức bị chia khác `0`**.

Ví dụ:

`A/B : C/D`

cần:

- `B ≠ 0`
- `D ≠ 0`
- `C ≠ 0`

vì `C/D` không được bằng `0`.

---

### Dạng 8 – Biểu thức nhiều phép tính

**Thứ tự ưu tiên:**

1. Điều kiện xác định.
2. Ngoặc.
3. Nhân – chia.
4. Cộng – trừ.
5. Rút gọn cuối cùng.

Không nên quy đồng toàn bộ biểu thức quá sớm nếu có thể rút gọn từng cụm trước.

**Chiến lược tốt:**

`phân tích → rút gọn cục bộ → thực hiện phép tính → rút gọn toàn biểu thức`

---

### Dạng 9 – Tính giá trị biểu thức sau khi rút gọn

**Quy trình:**

1. Tìm điều kiện xác định.
2. Rút gọn biểu thức.
3. Kiểm tra giá trị cần thay có thỏa điều kiện không.
4. Thay số vào biểu thức đã rút gọn.

Ví dụ:

`A = (x² - 4)/(x - 2)` với `x ≠ 2`.

Rút gọn:

`A = x + 2` với `x ≠ 2`.

Tại `x = 5`:

`A = 7`.

Không được tính tại `x = 2`, dù biểu thức rút gọn `x + 2` có nghĩa tại `2`.

---

### Dạng 10 – Tìm giá trị nguyên của biểu thức

> **Mức vận dụng:** dạng này dùng để kết nối phân thức với tính chia hết và không phải là yêu cầu cơ bản của mọi bài về phân thức.

Một hướng xử lý là biến đổi biểu thức về dạng:

`A = k + m/(x - a)`

Muốn `A` nguyên, cần phân tích điều kiện để `x - a` là ước của `m`.

Ví dụ dạng:

`A = 2 + 3/(x - 1)`.

Nếu `x` nguyên và `A` nguyên thì `x - 1` phải là ước nguyên của `3`.

Đây là dạng vận dụng tốt để kết nối đại số với tính chia hết.

---

## 🚀 6. Dạng bài thi vào lớp 10

Trong bài toán tổng hợp, kiến thức phân thức đại số có thể được dùng trong **rút gọn biểu thức**, **tính giá trị**, **tìm điều kiện xác định** hoặc làm nền cho **phương trình chứa ẩn ở mẫu**.

| Nhóm kỹ năng | Mức ưu tiên Roadmap |
|---|:---:|
| Tìm điều kiện xác định | ⭐⭐⭐⭐⭐ |
| Phân tích mẫu thành nhân tử | ⭐⭐⭐⭐⭐ |
| Rút gọn biểu thức hữu tỉ | ⭐⭐⭐⭐⭐ |
| Quy đồng và cộng – trừ | ⭐⭐⭐⭐⭐ |
| Nhân – chia phân thức | ⭐⭐⭐⭐ |
| Tính giá trị sau rút gọn | ⭐⭐⭐⭐⭐ |
| Biểu thức nhiều bước | ⭐⭐⭐⭐⭐ |
| Tìm giá trị nguyên / tham số | ⭐⭐⭐⭐ |
| Chuẩn bị phương trình chứa ẩn ở mẫu | ⭐⭐⭐⭐⭐ |

### Mẫu tư duy cần hình thành

Khi gặp biểu thức hữu tỉ phức tạp, không nên bắt đầu tính ngay. Hãy hỏi:

1. **Điều kiện xác định là gì?**
2. **Có thể phân tích tử hoặc mẫu thành nhân tử không?**
3. **Có nhân tử nào triệt tiêu được không?**
4. **Có cần đổi dấu để tạo cùng mẫu không?**
5. **Nên rút gọn trước hay quy đồng trước?**

---

## ⚠️ 7. Lỗi sai thường gặp

### ❌ Lỗi 1 – Quên điều kiện xác định

Sai khi chỉ rút gọn mà không ghi giá trị bị loại.

**Cách tránh:** viết điều kiện ngay ở dòng đầu tiên.

---

### ❌ Lỗi 2 – Rút gọn các hạng tử thay vì nhân tử

Sai:

`(x + 2)/x` → “rút `x` với `x`”.

Không thể rút gọn vì `x` không phải nhân tử chung của toàn bộ tử `x + 2`.

Chỉ được rút gọn khi tử và mẫu ở dạng tích có nhân tử chung.

---

### ❌ Lỗi 3 – Rút gọn qua dấu cộng hoặc trừ

Sai:

`(x² + x)/x = x² + 1`.

Đúng:

`(x² + x)/x = x(x + 1)/x = x + 1`, với `x ≠ 0`.

---

### ❌ Lỗi 4 – Quên đổi dấu

`x - a` và `a - x` không giống nhau mà đối nhau:

`a - x = -(x - a)`.

---

### ❌ Lỗi 5 – Quy đồng sai mẫu thức chung

Mẫu thức chung không phải lúc nào cũng là tích nguyên xi của mọi mẫu. Hãy phân tích các mẫu trước để tránh lặp thừa nhân tử.

---

### ❌ Lỗi 6 – Chia nhưng quên nghịch đảo

Sai:

`A/B : C/D = AC/BD`.

Đúng:

`A/B : C/D = A/B · D/C`.

---

### ❌ Lỗi 7 – Bỏ quên điều kiện của số chia

Trong phép chia phân thức, phân thức đứng sau dấu `:` phải khác `0`.

---

### ❌ Lỗi 8 – Thay số trước khi rút gọn

Với biểu thức dài, thay số quá sớm thường làm phép tính nặng và tăng nguy cơ sai. Nếu đề cho phép, hãy rút gọn đại số trước.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Xác định tử thức và mẫu thức của `(2x - 1)/(x + 3)`.
2. Tìm điều kiện xác định của `1/(x - 5)`.
3. Tìm điều kiện xác định của `(x + 1)/(x² - 4)`.
4. Viết `1/(3 - x)` dưới dạng có mẫu `x - 3`.
5. Rút gọn `(3x)/(6x)` với điều kiện thích hợp.

### Mức 2 – Thông hiểu

1. Rút gọn `(x² - 4)/(x² + 2x)`.
2. Rút gọn `(x² - 5x)/(x² - 25)`.
3. Quy đồng `1/x` và `1/(x + 2)`.
4. Tính `1/x + 1/(x + 1)`.
5. Tính `2/(x - 1) - 1/(x + 1)`.
6. Thực hiện `(x² - 1)/(x² + x) · x/(x - 1)`.

### Mức 3 – Vận dụng

1. Rút gọn biểu thức:

   `A = (x² - 4)/(x² - x - 2) - 1/(x + 1)`.

2. Rút gọn rồi tính giá trị tại `x = 3`:

   `B = (x² - 1)/(x - 1)`.

3. Thực hiện:

   `C = [1/(x - 1) + 1/(x + 1)] : [2x/(x² - 1)]`.

4. Chứng minh một biểu thức hữu tỉ sau rút gọn không phụ thuộc vào `x` trên miền xác định.

### Mức 4 – Vận dụng cao / tổng hợp

1. Cho biểu thức sau khi rút gọn có dạng `A = 2 + 6/(x - 1)`. Tìm các giá trị nguyên của `x` để `A` nguyên.
2. Tìm giá trị của tham số để hai phân thức bằng nhau trên miền xác định.
3. Rút gọn biểu thức có ba mẫu thức, trong đó một mẫu phải đổi dấu trước khi quy đồng.
4. Kết hợp phân tích đa thức, hằng đẳng thức và phân thức để biến đổi một biểu thức hữu tỉ nhiều tầng.

---

## ✅ 9. Tự kiểm tra

### Mini quiz

**Câu 1.** Điều kiện xác định của `(x + 2)/(x² - 9)` là gì?

**Câu 2.** Rút gọn:

`(x² - 9)/(x - 3)`.

**Câu 3.** Viết `1/(2 - x)` theo mẫu `x - 2`.

**Câu 4.** Tính:

`1/x + 1/(x + 1)`.

**Câu 5.** Khi chia hai phân thức, ngoài điều kiện mẫu khác `0`, còn phải chú ý điều gì?

### Đáp án ngắn

1. `x ≠ 3`, `x ≠ -3`.
2. `x + 3`, với `x ≠ 3`.
3. `-1/(x - 2)`.
4. `(2x + 1)/[x(x + 1)]`, với `x ≠ 0`, `x ≠ -1`.
5. Phân thức đứng sau dấu chia phải khác `0`.

### Tự đánh giá

- [ ] Tôi luôn tìm điều kiện xác định trước khi biến đổi.
- [ ] Tôi biết phân biệt **nhân tử** với **hạng tử** khi rút gọn.
- [ ] Tôi rút gọn được phân thức có hằng đẳng thức và phân tích nhân tử.
- [ ] Tôi quy đồng đúng các mẫu thức đã phân tích.
- [ ] Tôi làm đúng cộng, trừ, nhân, chia phân thức.
- [ ] Tôi giữ lại điều kiện xác định ban đầu sau khi rút gọn.
- [ ] Tôi có thể xử lý biểu thức nhiều phép tính mà không nhảy bước.

---

## 🔄 10. Liên kết Roadmap

**← Kiến thức nền:**

- [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [05. 7 Hằng đẳng thức đáng nhớ](../05-7-hang-dang-thuc/index.md)
- [06. Phân tích đa thức thành nhân tử](../06-phan-tich-da-thuc/index.md)

**→ Tiếp theo:**

- [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Tìm đúng điều kiện xác định trong các bài cơ bản và tổng hợp.
- [ ] Rút gọn đúng ít nhất 8/10 bài phân thức cơ bản.
- [ ] Quy đồng và thực hiện đúng cộng – trừ phân thức.
- [ ] Thực hiện đúng nhân – chia và biết kiểm tra điều kiện của số chia.
- [ ] Giải được biểu thức nhiều bước có kết hợp hằng đẳng thức và phân tích đa thức.
- [ ] Làm đúng ít nhất 4/5 câu mini quiz mà không xem lời giải.
- [ ] Giải thích được vì sao điều kiện xác định ban đầu vẫn phải giữ sau khi rút gọn.
- [ ] Sẵn sàng chuyển sang phương trình chứa ẩn ở mẫu trong Chuyên đề 08.
