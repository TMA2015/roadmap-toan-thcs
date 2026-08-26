# Chuyên đề 12 – Phương trình bậc hai & Viète – chuẩn bị THPT


> **Trạng thái:** Cấu trúc Roadmap đã chuẩn hóa; đang kiểm định nội dung học thuật.
>
> **Lớp trọng tâm:** 9
> **Mạch kiến thức:** Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

> **Vai trò trong Roadmap:** chuyên đề tổng hợp Đại số lớp 9, kết nối phương trình, hàm số, căn thức và chuẩn bị trực tiếp cho Toán THPT.
>

---

## 🧭 1. Bản đồ kiến thức

```text
PHƯƠNG TRÌNH BẬC HAI & VIÈTE
│
├── 1. Phương trình bậc hai ax² + bx + c = 0
│   ├── Điều kiện a ≠ 0
│   ├── Biệt thức Δ = b² - 4ac
│   └── Số nghiệm theo dấu của Δ
│
├── 2. Công thức nghiệm
│   ├── Δ > 0: hai nghiệm phân biệt
│   ├── Δ = 0: nghiệm kép
│   └── Δ < 0: vô nghiệm trong R
│
├── 3. Công thức nghiệm thu gọn
│   └── Δ' = b'² - ac khi b = 2b'
│
├── 4. Hệ thức Viète
│   ├── x₁ + x₂ = -b/a
│   └── x₁x₂ = c/a
│
├── 5. Ứng dụng Viète
│   ├── Nhẩm nghiệm
│   ├── Tính biểu thức đối xứng
│   ├── Tìm tham số
│   └── Lập phương trình khi biết nghiệm
│
└── 6. Mở rộng / cầu nối đồ thị
    ├── y = ax² + bx + c
    └── Nghiệm là hoành độ giao điểm với trục Ox
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Nhận dạng đúng phương trình bậc hai một ẩn.
- [ ] Tính chính xác `Δ` hoặc `Δ'` và kết luận số nghiệm.
- [ ] Giải thành thạo phương trình bậc hai bằng công thức nghiệm.
- [ ] Biết khi nào có thể nhẩm nghiệm thay vì dùng công thức dài.
- [ ] Sử dụng hệ thức Viète theo cả hai chiều.
- [ ] Tính các biểu thức đối xứng theo hai nghiệm mà không cần giải phương trình.
- [ ] Xử lý bài toán có tham số về số nghiệm, dấu nghiệm và quan hệ giữa hai nghiệm.
- [ ] Lập phương trình bậc hai khi biết tổng và tích hai nghiệm.
- [ ] Hiểu ở mức mở rộng mối liên hệ giữa nghiệm phương trình và giao điểm của đồ thị bậc hai với trục hoành.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Phương trình bậc hai một ẩn

Dạng tổng quát:

`ax² + bx + c = 0`, với `a ≠ 0`.

Trong đó:

- `a` là hệ số của `x²`;
- `b` là hệ số của `x`;
- `c` là hệ số tự do.

> ⚠️ Nếu `a = 0`, phương trình không còn là phương trình bậc hai.

Ví dụ:

- `2x² - 3x + 1 = 0` là phương trình bậc hai.
- `5x - 2 = 0` không phải phương trình bậc hai.

---

### 3.2. Biệt thức Δ

Với:

`ax² + bx + c = 0`

Ta đặt:

`Δ = b² - 4ac`

Số nghiệm thực phụ thuộc vào dấu của `Δ`:

| Điều kiện | Kết luận |
|---|---|
| `Δ > 0` | Có hai nghiệm phân biệt |
| `Δ = 0` | Có một nghiệm kép |
| `Δ < 0` | Vô nghiệm trong tập số thực |

---

### 3.3. Công thức nghiệm

Nếu `Δ > 0`:

`x₁ = (-b + √Δ)/(2a)`

`x₂ = (-b - √Δ)/(2a)`

Nếu `Δ = 0`:

`x₁ = x₂ = -b/(2a)`

Nếu `Δ < 0`:

phương trình vô nghiệm trong `R`.

### Ví dụ

Giải:

`x² - 5x + 6 = 0`

Ta có:

`Δ = (-5)² - 4·1·6 = 25 - 24 = 1 > 0`

Suy ra:

`x₁ = (5 + 1)/2 = 3`

`x₂ = (5 - 1)/2 = 2`

Vậy tập nghiệm là `{2; 3}`.

---

### 3.4. Công thức nghiệm thu gọn

Nếu `b = 2b'`, ta có thể dùng:

`Δ' = b'² - ac`

Khi đó:

- `Δ' > 0`: phương trình có hai nghiệm phân biệt:
  `x₁ = (-b' + √Δ')/a`, `x₂ = (-b' - √Δ')/a`;
- `Δ' = 0`: phương trình có nghiệm kép:
  `x₁ = x₂ = -b'/a`;
- `Δ' < 0`: phương trình vô nghiệm trong tập số thực.

Ví dụ:

`2x² - 8x + 6 = 0`

Ta có `b' = -4`:

`Δ' = (-4)² - 2·6 = 16 - 12 = 4`

`x₁ = (4 + 2)/2 = 3`

`x₂ = (4 - 2)/2 = 1`

> 💡 Công thức thu gọn giúp giảm số phép tính khi hệ số `b` chẵn.

---

## 🔗 4. Kiến thức liên quan

### Kiến thức cần ôn trước

- [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)
- [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- [11. Căn thức và biến đổi căn thức](../11-can-thuc/index.md)

### Kiến thức sử dụng tiếp

- Chuyên đề 25 – Tổng hợp và chiến lược ôn thi vào 10.
- Phương trình, hàm số bậc hai và đại số ở THPT.

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1 – Giải phương trình bậc hai bằng công thức nghiệm

**Dấu hiệu:** phương trình đã ở dạng `ax² + bx + c = 0` và khó phân tích nhanh thành nhân tử.

**Quy trình:**

1. Xác định `a, b, c`.
2. Tính `Δ`.
3. Kết luận số nghiệm.
4. Tính nghiệm nếu có.

Ví dụ:

`2x² + x - 3 = 0`

`Δ = 1 + 24 = 25`

`x₁ = 1`, `x₂ = -3/2`.

---

### Dạng 2 – Nhẩm nghiệm

Một số trường hợp có thể nhận ra nhanh.

Nếu:

`a + b + c = 0`

thì `x = 1` là một nghiệm và nghiệm còn lại là `c/a`.

Nếu:

`a - b + c = 0`

thì `x = -1` là một nghiệm và nghiệm còn lại là `-c/a`.

Ví dụ:

`2x² - 5x + 3 = 0`

Có `2 - 5 + 3 = 0`, nên `x = 1` là một nghiệm.

Nghiệm còn lại:

`x = c/a = 3/2`.

---

### Dạng 3 – Xét số nghiệm theo tham số

Ví dụ:

`x² - 2x + m = 0`

Ta có:

`Δ = 4 - 4m = 4(1 - m)`.

- Hai nghiệm phân biệt khi `m < 1`.
- Nghiệm kép khi `m = 1`.
- Vô nghiệm thực khi `m > 1`.

> ⚠️ Với phương trình chứa tham số ở hệ số `x²`, phải kiểm tra thêm điều kiện để phương trình thực sự là bậc hai.

---

### Dạng 4 – Hệ thức Viète

Nếu phương trình:

`ax² + bx + c = 0`, `a ≠ 0`

có các nghiệm thực `x₁, x₂` (có thể trùng nhau), thì:

`x₁ + x₂ = -b/a`

`x₁x₂ = c/a`

Đặt:

`S = x₁ + x₂`

`P = x₁x₂`

thì:

`S = -b/a`, `P = c/a`.

---

### Dạng 5 – Tính biểu thức theo hai nghiệm mà không giải phương trình

Với `S = x₁ + x₂`, `P = x₁x₂`:

`x₁² + x₂² = S² - 2P`

`(x₁ - x₂)² = S² - 4P`

`1/x₁ + 1/x₂ = S/P` với `P ≠ 0`.

`x₁³ + x₂³ = S³ - 3PS`.

Ví dụ:

Cho `x² - 5x + 3 = 0` có hai nghiệm `x₁, x₂`.

Theo Viète:

`S = 5`, `P = 3`.

Do đó:

`x₁² + x₂² = 25 - 6 = 19`.

Không cần tính riêng từng nghiệm.

---

### Dạng 6 – Tìm tham số từ điều kiện về nghiệm

Ví dụ:

`x² - (m + 1)x + m = 0`

Có hai nghiệm `x₁, x₂` thỏa:

`x₁ + x₂ = 5`.

Theo Viète:

`m + 1 = 5`

nên `m = 4`.

Sau đó phải kiểm tra phương trình ứng với `m = 4` có nghiệm phù hợp với yêu cầu đề bài.

---

### Dạng 7 – Xét dấu của hai nghiệm

Giả sử phương trình có hai nghiệm thực.

Theo Viète:

- `P < 0` → hai nghiệm trái dấu.
- `P > 0` và `S > 0` → hai nghiệm cùng dương.
- `P > 0` và `S < 0` → hai nghiệm cùng âm.

> Điều kiện về dấu chỉ có ý nghĩa sau khi bảo đảm phương trình có nghiệm thực phù hợp.

---

### Dạng 8 – Lập phương trình khi biết hai nghiệm

Nếu muốn lập phương trình có hai nghiệm `x₁, x₂`, đặt:

`S = x₁ + x₂`, `P = x₁x₂`.

Phương trình đơn giản nhất là:

`x² - Sx + P = 0`.

Ví dụ: hai nghiệm là `2` và `-3`.

`S = -1`, `P = -6`.

Phương trình:

`x² + x - 6 = 0`.

---

### Dạng 9 – Biến đổi nghiệm

Nếu `x₁, x₂` là nghiệm của một phương trình và cần lập phương trình có nghiệm mới, hãy tính tổng và tích của nghiệm mới.

Ví dụ, nghiệm mới là:

`y₁ = x₁ + 1`, `y₂ = x₂ + 1`.

Ta có:

`y₁ + y₂ = S + 2`

`y₁y₂ = P + S + 1`.

Sau đó lập:

`y² - (y₁ + y₂)y + y₁y₂ = 0`.

---

### Dạng 10 – Mở rộng / cầu nối với đồ thị

> Phần này dùng để kết nối sang tư duy hàm số bậc hai; không xem là trọng tâm cốt lõi ngang với công thức nghiệm và hệ thức Viète ở THCS.

Phương trình:

`ax² + bx + c = 0`

có thể được hiểu là bài toán tìm hoành độ giao điểm của đồ thị:

`y = ax² + bx + c`

với trục `Ox`.

- `Δ > 0`: parabol cắt `Ox` tại hai điểm.
- `Δ = 0`: parabol tiếp xúc `Ox`.
- `Δ < 0`: parabol không cắt `Ox`.

Đây là cầu nối quan trọng từ Đại số sang tư duy hàm số.

---

## 🚀 6. Dạng bài thi vào lớp 10

| Nhóm dạng | Mức ưu tiên Roadmap |
|---|:---:|
| Giải phương trình bậc hai | ⭐⭐⭐⭐⭐ |
| Tính số nghiệm theo tham số | ⭐⭐⭐⭐⭐ |
| Viète – tính biểu thức theo nghiệm | ⭐⭐⭐⭐⭐ |
| Viète – tìm tham số | ⭐⭐⭐⭐⭐ |
| Điều kiện hai nghiệm dương/âm/trái dấu | ⭐⭐⭐⭐⭐ |
| Lập phương trình từ tổng và tích nghiệm | ⭐⭐⭐⭐ |
| Biến đổi nghiệm | ⭐⭐⭐⭐ |
| Liên hệ đồ thị bậc hai (mở rộng) | ⭐⭐⭐⭐ |

### Chiến lược làm bài

1. Chuẩn hóa phương trình về dạng `ax² + bx + c = 0`.
2. Kiểm tra điều kiện `a ≠ 0` nếu có tham số.
3. Nếu chỉ cần tổng/tích nghiệm, ưu tiên Viète thay vì giải nghiệm cụ thể.
4. Nếu đề hỏi số nghiệm, tập trung vào `Δ`.
5. Nếu đề hỏi dấu nghiệm, kết hợp `Δ`, `S`, `P`.
6. Kiểm tra điều kiện cuối cùng trước khi kết luận tham số.

---

## ⚠️ 7. Lỗi sai thường gặp

### ❌ Lỗi 1 – Xác định sai hệ số

Với:

`x² - 5x + 6 = 0`

phải có `a = 1`, `b = -5`, `c = 6`.

Dấu của `b` rất quan trọng.

### ❌ Lỗi 2 – Tính sai Δ

`Δ = b² - 4ac`, không phải `b² + 4ac`.

### ❌ Lỗi 3 – Quên mẫu `2a`

Công thức nghiệm là:

`x = (-b ± √Δ)/(2a)`.

### ❌ Lỗi 4 – Dùng Viète khi chưa bảo đảm có nghiệm

Trong bài tham số, trước khi áp dụng quan hệ giữa hai nghiệm thực, phải bảo đảm phương trình có nghiệm thực theo yêu cầu.

### ❌ Lỗi 5 – Nhầm dấu trong Viète

`x₁ + x₂ = -b/a`, có dấu âm.

`x₁x₂ = c/a`.

### ❌ Lỗi 6 – Kết luận dấu nghiệm chỉ từ tích

`P > 0` chỉ cho biết hai nghiệm cùng dấu; muốn biết dương hay âm cần xét thêm `S`.

### ❌ Lỗi 7 – Quên kiểm tra phương trình còn bậc hai

Nếu `a` chứa tham số, phải loại trường hợp `a = 0` trước khi dùng `Δ` của phương trình bậc hai.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Xác định `a, b, c` của `3x² - 7x + 2 = 0`.
2. Tính `Δ` của `x² - 4x + 3 = 0`.
3. Giải `x² - 9 = 0`.
4. Giải `x² - 6x + 9 = 0`.

### Mức 2 – Thông hiểu

1. Giải `2x² - 5x + 2 = 0`.
2. Giải `3x² + 2x - 1 = 0`.
3. Với `x² - 7x + 10 = 0`, tính tổng và tích hai nghiệm.
4. Cho hai nghiệm của `x² - 4x + 1 = 0`. Tính `x₁² + x₂²`.

### Mức 3 – Vận dụng

1. Tìm `m` để `x² - 2x + m = 0` có hai nghiệm phân biệt.
2. Tìm `m` để `x² - (m + 2)x + 2m = 0` có hai nghiệm dương.
3. Cho `x₁, x₂` là nghiệm của `x² - 5x + 2 = 0`. Tính `x₁³ + x₂³`.
4. Lập phương trình bậc hai có hai nghiệm là `3` và `-2`.

### Mức 4 – Nâng cao / tổng hợp

1. Cho `x₁, x₂` là hai nghiệm của `x² - (m + 1)x + m - 2 = 0`. Tìm `m` để `x₁² + x₂² = 13`.
2. Tìm `m` để phương trình `x² - 2(m + 1)x + m² = 0` có hai nghiệm dương phân biệt.
3. Cho `x₁, x₂` là nghiệm của `x² - 3x - 1 = 0`. Lập phương trình có hai nghiệm `x₁ + 1` và `x₂ + 1`.
4. Chứng minh một biểu thức đối xứng theo hai nghiệm không phụ thuộc vào việc tính riêng từng nghiệm.

---

## ✅ 9. Tự kiểm tra

### Mini quiz

**Câu 1.** Với `x² - 5x + 6 = 0`, `Δ` bằng bao nhiêu?

A. `1`
B. `5`
C. `25`
D. `49`

**Câu 2.** Nếu phương trình bậc hai có `Δ = 0` thì:

A. vô nghiệm
B. có một nghiệm kép
C. có hai nghiệm phân biệt
D. luôn có nghiệm `0`

**Câu 3.** Nếu `x₁, x₂` là nghiệm của `2x² - 3x - 5 = 0` thì `x₁ + x₂` bằng:

A. `-3/2`
B. `3/2`
C. `-5/2`
D. `5/2`

**Câu 4.** Nếu `x₁x₂ < 0` thì hai nghiệm thực:

A. cùng dương
B. cùng âm
C. trái dấu
D. bằng nhau

**Câu 5.** Phương trình có hai nghiệm tổng `S`, tích `P` có thể viết dạng:

A. `x² + Sx + P = 0`
B. `x² - Sx + P = 0`
C. `x² + Px - S = 0`
D. `x² - Px + S = 0`

### Đáp án

1. A
2. B
3. B
4. C
5. B

### Checklist tự đánh giá

- [ ] Tôi xác định đúng `a, b, c` kể cả khi hệ số âm.
- [ ] Tôi tính đúng `Δ` và kết luận đúng số nghiệm.
- [ ] Tôi dùng được công thức nghiệm và công thức thu gọn.
- [ ] Tôi nhớ đúng hai hệ thức Viète.
- [ ] Tôi tính được biểu thức đối xứng theo hai nghiệm mà không cần giải phương trình.
- [ ] Tôi biết xử lý bài tham số về số nghiệm và dấu nghiệm.
- [ ] Tôi biết lập phương trình khi biết tổng và tích nghiệm.
- [ ] Tôi hiểu ở mức mở rộng mối liên hệ giữa nghiệm phương trình và giao điểm của đồ thị bậc hai với trục `Ox`.

---

## 🔄 10. Liên kết Roadmap

- **→ Tiếp theo:** [13 – Góc và quan hệ đường thẳng](../13-goc-va-duong-thang/index.md)

```text
08. Phương trình
       │
       ├──────────┐
       ↓          ↓
10. Hàm số      11. Căn thức
       │          │
       └────┬─────┘
            ↓
12. PHƯƠNG TRÌNH BẬC HAI & VIÈTE
            │
            ↓
25. Tổng hợp – Ôn thi vào 10
            │
            ↓
          THPT
```

- **← Ôn lại:** [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)
- **← Liên hệ:** [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- **← Liên hệ:** [11. Căn thức và biến đổi căn thức](../11-can-thuc/index.md)
- **→ Tổng hợp cuối:** [25. Tổng hợp & chiến lược ôn thi vào 10](../25-tong-hop-on-thi-10/index.md)

Xem toàn bộ kiến trúc tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Giải chính xác các phương trình bậc hai cơ bản.
- [ ] Phân biệt được ba trường hợp của `Δ`.
- [ ] Sử dụng Viète thành thạo theo cả hai chiều.
- [ ] Làm được bài tính biểu thức theo nghiệm mà không cần giải nghiệm cụ thể.
- [ ] Xử lý được bài tham số về số nghiệm và dấu nghiệm.
- [ ] Lập được phương trình mới từ tổng và tích nghiệm.
- [ ] Đạt tối thiểu 4/5 câu mini quiz.
- [ ] Làm độc lập được phần luyện tập Mức 2 và phần lớn Mức 3.

> 🎯 **Đích cuối:** không học công thức nghiệm và Viète như hai mảng rời rạc. Hãy nhìn chúng như hai công cụ bổ sung nhau: **Δ cho biết phương trình có bao nhiêu nghiệm; Viète cho biết các nghiệm liên hệ với hệ số như thế nào**.
