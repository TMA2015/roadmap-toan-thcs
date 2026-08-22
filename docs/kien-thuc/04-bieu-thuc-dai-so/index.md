# Chuyên đề 04 – Biểu thức và biến đổi đại số


> **Trạng thái:** Nội dung cốt lõi đã hoàn thiện; đang chuẩn hóa cấu trúc Roadmap.
>
> **Lớp trọng tâm:** 7–8
> **Mạch kiến thức:** Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

> **Vai trò trong Roadmap:** nền tảng trực tiếp cho Chuyên đề 05 → 06 → 07 → 08.
>
> **Mục tiêu:** học sinh không chỉ biết thực hiện phép biến đổi mà phải hiểu **vì sao biến đổi được**, biết điều kiện xác định và biết chọn phương pháp phù hợp.

---

## 🧭 1. Bản đồ kiến thức

```text
BIỂU THỨC VÀ BIẾN ĐỔI ĐẠI SỐ
│
├── 1. Ngôn ngữ đại số
│   ├── Biến, hằng số, hệ số
│   ├── Đơn thức
│   └── Đa thức
│
├── 2. Phép tính với biểu thức
│   ├── Thu gọn
│   ├── Cộng – trừ
│   ├── Nhân đơn thức với đa thức
│   ├── Nhân đa thức với đa thức
│   └── Chia đơn thức / đa thức trong trường hợp phù hợp
│
├── 3. Giá trị của biểu thức
│   ├── Thay giá trị của biến
│   ├── Tính giá trị
│   └── Biểu thức có điều kiện xác định
│
└── 4. Biến đổi đại số
    ├── Nhóm hạng tử
    ├── Đưa về dạng tích
    ├── Khai triển
    └── Chuẩn bị cho hằng đẳng thức và phân tích đa thức
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Nhận diện đúng đơn thức, đa thức và bậc của chúng.
- [ ] Thu gọn biểu thức mà không làm thay đổi giá trị.
- [ ] Thực hiện thành thạo cộng, trừ và nhân các đa thức cơ bản.
- [ ] Thay giá trị biến và tính giá trị biểu thức chính xác.
- [ ] Nhận biết khi nào biểu thức có điều kiện xác định.
- [ ] Trình bày biến đổi theo từng bước, hạn chế nhảy bước gây sai dấu.
- [ ] Nhìn thấy cấu trúc biểu thức để chuẩn bị cho hằng đẳng thức và phân tích đa thức.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Đơn thức

Đơn thức là biểu thức đại số chỉ gồm một tích của một số với các biến có số mũ nguyên không âm.

Ví dụ:

- `3x²`
- `-5xy³`
- `7`

#### Hệ số và phần biến

Với `-5x²y`, ta có:

- Hệ số: `-5`
- Phần biến: `x²y`
- Bậc: `2 + 1 = 3`

---

### 3.2. Đa thức

Đa thức là tổng của các đơn thức.

Ví dụ:

`P(x) = 3x³ - 2x² + 5x - 7`

#### Bậc của đa thức

Bậc của đa thức khác 0 là bậc lớn nhất của các hạng tử sau khi đã thu gọn.

> ⚠️ **Lưu ý:** phải thu gọn trước khi xác định bậc nếu các hạng tử đồng dạng có thể triệt tiêu nhau.

---

### 3.3. Các phép biến đổi quan trọng

#### Thu gọn đơn thức

Gộp các thừa số số với nhau và các lũy thừa cùng biến.

Ví dụ:

`2x² · (-3x³y) = -6x⁵y`

---

#### Thu gọn đa thức

Chỉ cộng hoặc trừ được **các hạng tử đồng dạng**.

Ví dụ:

`3x² + 5x - 2x² + 7 = x² + 5x + 7`

##### Quy tắc vàng

> **Đồng dạng mới được gộp.**

`x²` và `x` **không** đồng dạng.

---

#### Cộng – trừ đa thức

Thực hiện theo hai bước:

1. Bỏ ngoặc đúng dấu.
2. Thu gọn các hạng tử đồng dạng.

Ví dụ:

`(2x² - 3x + 1) - (x² + 2x - 4)`

`= 2x² - 3x + 1 - x² - 2x + 4`

`= x² - 5x + 5`

> ⚠️ Khi trước ngoặc là dấu `−`, **tất cả các dấu trong ngoặc phải đổi**.

---

#### Nhân đơn thức với đa thức

Dùng tính phân phối:

`A(B + C) = AB + AC`

Ví dụ:

`2x(3x² - x + 4) = 6x³ - 2x² + 8x`

---

#### Nhân đa thức với đa thức

Mỗi hạng tử của đa thức thứ nhất phải nhân với **từng hạng tử** của đa thức thứ hai.

Ví dụ:

`(x + 2)(x + 3)`

`= x² + 3x + 2x + 6`

`= x² + 5x + 6`

Đây là kỹ năng nền tảng để học **7 hằng đẳng thức đáng nhớ** ở Chuyên đề 05.

---

### 3.4. Điều kiện xác định và giá trị biểu thức

Khi biểu thức có mẫu chứa biến, cần tìm điều kiện để mẫu khác 0 **trước khi biến đổi**.

Ví dụ:

`A = (x + 1)/(x - 2)`

Điều kiện:

`x - 2 ≠ 0 ⇒ x ≠ 2`

> ⚠️ Không được quên điều kiện xác định rồi mới kết luận kết quả.

---

### 3.5. Ví dụ mẫu

#### Ví dụ 1 – Thu gọn

Rút gọn:

`A = 3x² - 2x + 5 - x² + 7x - 3`

**Giải:**

`A = (3x² - x²) + (-2x + 7x) + (5 - 3)`

`A = 2x² + 5x + 2`

---

#### Ví dụ 2 – Nhân và thu gọn

Rút gọn:

`B = 2x(x - 3) + (x + 1)(x - 2)`

`= 2x² - 6x + x² - x - 2`

`= 3x² - 7x - 2`

---

#### Ví dụ 3 – Tính giá trị

Cho:

`P = x² - 3x + 2`

Tính `P` tại `x = 2`.

`P = 2² - 3·2 + 2 = 4 - 6 + 2 = 0`

---

## 🔗 4. Kiến thức liên quan

```text
03. Tỉ lệ – Tỉ lệ thức
          │
          ↓
04. BIỂU THỨC & BIẾN ĐỔI ĐẠI SỐ
          │
     ┌────┼────────┐
     ↓    ↓        ↓
    05    06       07
  HĐT   PTĐT     PTĐS
     │    │        │
     └────┼────────┘
          ↓
08. PHƯƠNG TRÌNH & BẤT PHƯƠNG TRÌNH
          │
      ┌───┴────┐
      ↓        ↓
     09       10
    HPT    Hàm số
```

#### Liên kết trực tiếp

- ← 03. Tỉ lệ – Tỉ lệ thức
- → 05. 7 Hằng đẳng thức đáng nhớ
- → 06. Phân tích đa thức thành nhân tử
- → 07. Phân thức đại số
- → [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)

> Các liên kết tới 05–07 sẽ trở thành liên kết hợp lệ khi các chuyên đề tương ứng được xây dựng.

---

## 🧩 5. Các dạng bài cần nắm vững

| Dạng bài | Mức độ | Tần suất |
|---|:---:|:---:|
| Nhận biết đơn thức, đa thức | ⭐ | ⭐⭐⭐⭐ |
| Xác định hệ số, phần biến, bậc | ⭐ | ⭐⭐⭐⭐ |
| Thu gọn đơn thức | ⭐ | ⭐⭐⭐⭐⭐ |
| Thu gọn đa thức | ⭐ | ⭐⭐⭐⭐⭐ |
| Cộng – trừ đa thức | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Nhân đơn thức với đa thức | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Nhân đa thức với đa thức | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Tính giá trị biểu thức | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| Biểu thức có điều kiện xác định | ⭐⭐ | ⭐⭐⭐⭐ |
| Biến đổi nhiều bước | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Nhận dạng cấu trúc để đưa về dạng tích | ⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🚀 6. Dạng bài thi vào lớp 10

### Dạng 1 – Biến đổi nhiều lớp

Học sinh phải kết hợp:

`bỏ ngoặc → nhân → thu gọn → nhóm hạng tử`

Mục tiêu không phải tính thật nhanh mà là **kiểm soát dấu và cấu trúc**.

### Dạng 2 – Tìm giá trị của tham số

Ví dụ dạng:

> Cho biểu thức `P(x)`. Tìm `m` để hệ số của `x²` bằng một giá trị cho trước.

### Dạng 3 – Nhìn cấu trúc để chuẩn bị phân tích nhân tử

Ví dụ:

`ax + ay = a(x + y)`

Đây là cầu nối trực tiếp sang **Chuyên đề 06 – Phân tích đa thức thành nhân tử**.

---

## ⚠️ 7. Lỗi sai thường gặp

#### ❌ Lỗi 1: Gộp hạng tử không đồng dạng

Sai:

`2x + 3x² = 5x³`

Đúng:

`2x + 3x²` đã ở dạng thu gọn.

#### ❌ Lỗi 2: Quên đổi dấu khi bỏ ngoặc

Sai:

`5 - (2x - 3) = 5 - 2x - 3`

Đúng:

`5 - (2x - 3) = 5 - 2x + 3`

#### ❌ Lỗi 3: Nhân thiếu hạng tử

Khi tính `(x + 2)(x + 3)`, không được bỏ sót `2·x` hoặc `2·3`.

#### ❌ Lỗi 4: Quên điều kiện xác định

Với phân thức, phải kiểm tra mẫu khác 0 trước khi kết luận.

#### ❌ Lỗi 5: Thay số quá sớm

Với bài có nhiều biến đổi, nên thu gọn trước rồi mới thay giá trị nếu cách đó giúp giảm sai sót.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Xác định hệ số và bậc của `-4x³y²`.
2. Thu gọn `3x + 5x - 2x`.
3. Xác định các hạng tử đồng dạng trong `2x² + 3x - 5x² + 7`.

### Mức 2 – Thông hiểu

1. Thu gọn `(3x² - 2x + 1) - (x² + 4x - 3)`.
2. Thực hiện `(2x - 3)(x + 5)`.
3. Tính giá trị của `P = 2x² - 3x + 1` tại `x = -2`.

### Mức 3 – Vận dụng

1. Rút gọn biểu thức có nhiều ngoặc rồi tính giá trị tại một giá trị cho trước.
2. Tìm tham số để một hệ số của đa thức bằng 0.
3. Biến đổi biểu thức về dạng thuận lợi để giải phương trình.

### Mức 4 – Vận dụng cao

1. Tìm tham số để biểu thức có tính chất cho trước với mọi `x`.
2. Nhận dạng cấu trúc và lựa chọn biến đổi phù hợp trước khi thực hiện phép tính.
3. Kết hợp nhiều kỹ thuật đại số để đưa một biểu thức phức tạp về dạng tích.

---

## ✅ 9. Tự kiểm tra

Học sinh chỉ nên chuyển sang Chuyên đề 05 khi có thể trả lời **Có** cho hầu hết các câu sau:

- [ ] Em phân biệt được đơn thức và đa thức.
- [ ] Em xác định được bậc của đa thức sau khi thu gọn.
- [ ] Em không nhầm các hạng tử không đồng dạng.
- [ ] Em bỏ ngoặc đúng dấu.
- [ ] Em nhân đơn thức với đa thức không bỏ sót hạng tử.
- [ ] Em nhân hai đa thức đúng và thu gọn được kết quả.
- [ ] Em biết kiểm tra điều kiện xác định khi có mẫu chứa biến.
- [ ] Em có thể giải thích từng bước biến đổi thay vì chỉ ghi kết quả.

**Mức hoàn thành khuyến nghị:** ≥ 80% bài cơ bản và ≥ 60% bài vận dụng.

---

## 🔄 10. Liên kết Roadmap

**Trước:**

`03 – Tỉ lệ, tỉ lệ thức, đại lượng tỉ lệ`

**Hiện tại:**

`04 – Biểu thức và biến đổi đại số`

**Tiếp theo:**

`05 – 7 Hằng đẳng thức đáng nhớ`

#### ⭐ Mức độ ưu tiên

**⭐⭐⭐⭐⭐ – Nền tảng rất quan trọng**

Chuyên đề này xuất hiện dưới dạng kỹ năng nền trong rất nhiều bài Đại số THCS và là tiền đề trực tiếp cho các chuyên đề 05–12.

---

## 🏁 11. Điều kiện hoàn thành

Học sinh được xem là hoàn thành chuyên đề khi:

- [ ] Nhận diện và thu gọn đúng đơn thức, đa thức.
- [ ] Thực hiện chắc các phép cộng, trừ, nhân biểu thức cơ bản.
- [ ] Biết kiểm tra điều kiện xác định khi biểu thức có mẫu chứa biến.
- [ ] Giải thích được các bước biến đổi, không chỉ ghi kết quả.
- [ ] Đạt mức hoàn thành khuyến nghị đã nêu trong phần tự kiểm tra trước khi chuyển chuyên đề.
