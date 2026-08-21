# Chuyên đề 06 – Phân tích đa thức thành nhân tử

> **Vai trò trong Roadmap:** cầu nối trực tiếp từ biến đổi đại số và hằng đẳng thức sang phân thức, phương trình và nhiều bài toán tổng hợp.
>
> **Lớp trọng tâm:** 8  
> **Mạch kiến thức:** Đại số  
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

```text
PHÂN TÍCH ĐA THỨC THÀNH NHÂN TỬ
│
├── 1. Đặt nhân tử chung
│   ├── Nhân tử số
│   ├── Nhân tử chứa biến
│   └── Đổi dấu để xuất hiện nhân tử chung
│
├── 2. Dùng hằng đẳng thức
│   ├── Hiệu hai bình phương
│   ├── Bình phương một tổng / hiệu
│   └── Tổng / hiệu hai lập phương
│
├── 3. Nhóm hạng tử
│   ├── Nhóm để xuất hiện nhân tử chung
│   ├── Nhóm để xuất hiện hằng đẳng thức
│   └── Đổi thứ tự hạng tử trước khi nhóm
│
├── 4. Phối hợp nhiều phương pháp
│   ├── Đặt nhân tử chung trước
│   ├── Sau đó dùng HĐT hoặc nhóm
│   └── Kiểm tra xem có thể phân tích tiếp không
│
└── 5. Vận dụng
    ├── Rút gọn biểu thức
    ├── Tính nhanh
    ├── Chứng minh chia hết
    ├── Tìm x
    └── Chuẩn bị cho phân thức và phương trình
```

### Tư duy cốt lõi

Phân tích đa thức thành nhân tử nghĩa là biến một **tổng hoặc hiệu** thành một **tích**.

Ví dụ:

`6x² - 9x = 3x(2x - 3)`

Hai biểu thức ở hai vế bằng nhau, nhưng dạng tích thường hữu ích hơn vì có thể:

- rút gọn phân thức;
- giải phương trình tích;
- nhận ra cấu trúc hằng đẳng thức;
- chứng minh chia hết;
- tính nhanh.

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần có thể:

- [ ] Hiểu đúng ý nghĩa của việc phân tích đa thức thành nhân tử.
- [ ] Nhận ra và đặt được nhân tử chung lớn nhất hợp lý.
- [ ] Nhận dạng được các hằng đẳng thức thường dùng khi phân tích.
- [ ] Biết nhóm hạng tử để tạo nhân tử chung hoặc hằng đẳng thức.
- [ ] Phối hợp nhiều phương pháp trong một bài.
- [ ] Kiểm tra được kết quả bằng cách nhân trở lại.
- [ ] Dùng dạng tích để rút gọn, tính nhanh và giải phương trình đơn giản.
- [ ] Nhận biết khi nào một biểu thức đã phân tích hết trong phạm vi THCS.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Phân tích đa thức thành nhân tử là gì?

Ta biến đa thức thành tích của hai hay nhiều biểu thức.

Ví dụ:

`x² - 5x = x(x - 5)`

`x² - 9 = (x - 3)(x + 3)`

### 3.2. Vì sao cần dạng tích?

Một đa thức ở dạng tổng có thể khó xử lý, còn dạng tích giúp nhìn thấy các nhân tử rõ ràng.

Ví dụ:

`x² - 5x = 0`

Phân tích:

`x(x - 5) = 0`

Từ đó:

`x = 0` hoặc `x = 5`.

> **Nguyên tắc:** khi mục tiêu bài toán liên quan đến nghiệm, chia hết hoặc rút gọn, hãy nghĩ đến việc đưa biểu thức về dạng tích.

---

### 3.3. Phương pháp 1 – Đặt nhân tử chung

Nếu mọi hạng tử đều chứa một nhân tử giống nhau, đưa nhân tử đó ra ngoài ngoặc.

Dạng tổng quát:

`AB + AC = A(B + C)`

Ví dụ:

`6x² + 9x = 3x(2x + 3)`

#### Cách tìm nhân tử chung hợp lý

1. Tìm ước chung lớn nhất của các hệ số.
2. Với mỗi biến, lấy số mũ nhỏ nhất xuất hiện ở tất cả các hạng tử.

Ví dụ:

`12x³y² - 18x²y³`

- ƯCLN của `12` và `18` là `6`.
- Với `x`: số mũ nhỏ nhất là `2`.
- Với `y`: số mũ nhỏ nhất là `2`.

Do đó:

`12x³y² - 18x²y³ = 6x²y²(2x - 3y)`

#### Đổi dấu để tạo nhân tử chung

Nhớ rằng:

`a - b = -(b - a)`

Ví dụ:

`x(a - b) + y(b - a)`

Vì `b - a = -(a - b)` nên:

`= x(a - b) - y(a - b)`

`= (a - b)(x - y)`

---

### 3.4. Phương pháp 2 – Dùng hằng đẳng thức

Các hằng đẳng thức thường gặp nhất khi phân tích đa thức:

#### Hiệu hai bình phương

`A² - B² = (A - B)(A + B)`

Ví dụ:

`x² - 25 = (x - 5)(x + 5)`

`9x² - 4y² = (3x - 2y)(3x + 2y)`

#### Bình phương một tổng

`A² + 2AB + B² = (A + B)²`

Ví dụ:

`x² + 6x + 9 = (x + 3)²`

#### Bình phương một hiệu

`A² - 2AB + B² = (A - B)²`

Ví dụ:

`4x² - 12x + 9 = (2x - 3)²`

#### Tổng hai lập phương

`A³ + B³ = (A + B)(A² - AB + B²)`

Ví dụ:

`x³ + 8 = (x + 2)(x² - 2x + 4)`

#### Hiệu hai lập phương

`A³ - B³ = (A - B)(A² + AB + B²)`

Ví dụ:

`8x³ - 27 = (2x - 3)(4x² + 6x + 9)`

> Khi dùng hằng đẳng thức, việc khó nhất không phải nhớ công thức mà là **nhìn ra A và B**.

---

### 3.5. Phương pháp 3 – Nhóm hạng tử

Dùng khi toàn bộ đa thức chưa có nhân tử chung, nhưng có thể chia thành các nhóm để tạo nhân tử chung.

Ví dụ:

`ax + ay + bx + by`

Nhóm:

`= a(x + y) + b(x + y)`

`= (x + y)(a + b)`

#### Có thể cần đổi thứ tự trước khi nhóm

Ví dụ:

`x² + 3x + 2x + 6`

`= (x² + 3x) + (2x + 6)`

`= x(x + 3) + 2(x + 3)`

`= (x + 3)(x + 2)`

> Không có một cách nhóm duy nhất. Mục tiêu là tạo được **cùng một nhân tử** ở các nhóm.

---

### 3.6. Phương pháp 4 – Phối hợp nhiều phương pháp

Nhiều bài không thể giải chỉ bằng một bước.

Quy trình nên thử:

```text
Bước 1: Có nhân tử chung không?
        ↓
Bước 2: Có hằng đẳng thức không?
        ↓
Bước 3: Có thể nhóm hạng tử không?
        ↓
Bước 4: Sau khi phân tích, còn phân tích tiếp được không?
```

Ví dụ:

`2x³ - 18x`

Đặt nhân tử chung:

`= 2x(x² - 9)`

Dùng hiệu hai bình phương:

`= 2x(x - 3)(x + 3)`

Không nên dừng ở `2x(x² - 9)` nếu đề yêu cầu phân tích hoàn toàn.

---

## 🔗 4. Kiến thức liên quan

### Cần biết trước

- [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [05. 7 Hằng đẳng thức đáng nhớ](../05-7-hang-dang-thuc/index.md)

### Sẽ dùng tiếp

- [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md)
- [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)

### Mạch tư duy

```text
04. Biến đổi đại số
        ↓
05. Hằng đẳng thức
        ↓
06. PHÂN TÍCH ĐA THỨC THÀNH NHÂN TỬ
        ↓
   ┌────┴────┐
   ↓         ↓
07. Phân thức   08. Phương trình
```

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1 – Đặt nhân tử chung trực tiếp

**Dấu hiệu:** mọi hạng tử đều có một phần giống nhau.

Ví dụ:

`15x³y - 10x²y²`

Ta có:

`= 5x²y(3x - 2y)`

**Tự kiểm tra:** nhân `5x²y` trở lại hai hạng tử trong ngoặc.

---

### Dạng 2 – Đổi dấu rồi đặt nhân tử chung

Ví dụ:

`3x(x - 2) + 5(2 - x)`

Vì:

`2 - x = -(x - 2)`

nên:

`= 3x(x - 2) - 5(x - 2)`

`= (x - 2)(3x - 5)`

---

### Dạng 3 – Nhận dạng hiệu hai bình phương

Ví dụ:

`25x² - 16`

`= (5x)² - 4²`

`= (5x - 4)(5x + 4)`

**Dấu hiệu:** hai số hạng, có dấu trừ, cả hai đều là bình phương.

---

### Dạng 4 – Nhận dạng bình phương hoàn chỉnh

Ví dụ:

`x² - 10x + 25`

Ta có:

- `x² = x²`
- `25 = 5²`
- `-10x = -2·x·5`

Do đó:

`x² - 10x + 25 = (x - 5)²`

---

### Dạng 5 – Nhóm hạng tử

Ví dụ:

`x² - 3x + 2x - 6`

`= x(x - 3) + 2(x - 3)`

`= (x - 3)(x + 2)`

---

### Dạng 6 – Đặt nhân tử chung rồi dùng hằng đẳng thức

Ví dụ:

`3x³ - 12x`

`= 3x(x² - 4)`

`= 3x(x - 2)(x + 2)`

Đây là dạng rất quan trọng vì học sinh thường dừng quá sớm.

---

### Dạng 7 – Nhóm rồi tiếp tục phân tích

Ví dụ:

`x³ + x² - 4x - 4`

Nhóm:

`= x²(x + 1) - 4(x + 1)`

`= (x + 1)(x² - 4)`

Tiếp tục:

`= (x + 1)(x - 2)(x + 2)`

---

### Dạng 8 – Dùng dạng tích để tính nhanh

Ví dụ:

`99² - 1`

`= (99 - 1)(99 + 1)`

`= 98·100 = 9800`

---

### Dạng 9 – Dùng dạng tích để chứng minh chia hết

Ví dụ: chứng minh `n² - n` chia hết cho `2` với mọi số nguyên `n`.

Ta có:

`n² - n = n(n - 1)`

Hai số nguyên liên tiếp `n` và `n - 1` luôn có một số chẵn, nên tích của chúng chia hết cho `2`.

---

### Dạng 10 – Dùng phân tích nhân tử để tìm x

Ví dụ:

`x² - 7x = 0`

`x(x - 7) = 0`

Suy ra:

`x = 0` hoặc `x = 7`.

> Dạng này là tiền đề trực tiếp cho phương trình tích ở Chuyên đề 08.

---

## 🚀 6. Dạng bài thi vào lớp 10

Mức sao dưới đây thể hiện **mức ưu tiên ôn tập của Roadmap**.

| Dạng | Mức ưu tiên |
|---|:---:|
| Đặt nhân tử chung | ⭐⭐⭐⭐ |
| Dùng hằng đẳng thức | ⭐⭐⭐⭐⭐ |
| Nhóm hạng tử | ⭐⭐⭐⭐ |
| Phối hợp nhiều phương pháp | ⭐⭐⭐⭐⭐ |
| Rút gọn biểu thức bằng phân tích nhân tử | ⭐⭐⭐⭐⭐ |
| Giải phương trình bằng đưa về tích | ⭐⭐⭐⭐⭐ |
| Chứng minh chia hết / tính nhanh | ⭐⭐⭐⭐ |

### Kỹ năng cần ưu tiên

Trong bài thi tổng hợp, phân tích nhân tử thường không đứng riêng mà xuất hiện như **một bước trung gian**.

Ví dụ mạch bài:

```text
Biểu thức
   ↓
Phân tích tử / mẫu
   ↓
Rút gọn
   ↓
Thay giá trị hoặc giải phương trình
```

Do đó, học sinh cần đạt mức **nhận dạng nhanh phương pháp**, không chỉ làm được khi đề ghi rõ “phân tích đa thức thành nhân tử”.

---

## ⚠️ 7. Lỗi sai thường gặp

### ❌ Lỗi 1 – Không lấy hết nhân tử chung

Ví dụ:

`12x² - 18x`

Viết:

`= 2x(6x - 9)`

không sai, nhưng chưa tối ưu.

Nên viết:

`= 6x(2x - 3)`

---

### ❌ Lỗi 2 – Dừng quá sớm

`x³ - 9x = x(x² - 9)`

Nếu yêu cầu phân tích hoàn toàn thì phải tiếp tục:

`= x(x - 3)(x + 3)`

---

### ❌ Lỗi 3 – Nhầm hiệu hai bình phương với tổng hai bình phương

`x² - 9 = (x - 3)(x + 3)`

nhưng:

`x² + 9`

không thể áp dụng công thức hiệu hai bình phương trong phạm vi số thực THCS.

---

### ❌ Lỗi 4 – Nhận sai bình phương hoàn chỉnh

`x² + 6x + 8`

không phải `(x + 3)²` vì `(x + 3)² = x² + 6x + 9`.

Cần kiểm tra đủ cả ba hạng tử.

---

### ❌ Lỗi 5 – Nhóm hạng tử nhưng không tạo được cùng nhân tử

Nhóm chỉ có ý nghĩa nếu sau khi đặt nhân tử chung ở từng nhóm, xuất hiện cùng một biểu thức.

---

### ❌ Lỗi 6 – Sai dấu khi đổi thứ tự

Nhớ:

`a - b = -(b - a)`

Một dấu âm bị quên có thể làm sai toàn bộ kết quả.

---

### ❌ Lỗi 7 – Không kiểm tra bằng phép nhân ngược

Sau khi có kết quả dạng tích, hãy nhân nhanh trở lại để kiểm tra, đặc biệt khi có nhiều dấu âm.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Phân tích `6x + 12` thành nhân tử.
2. Phân tích `5x² - 10x` thành nhân tử.
3. Phân tích `x² - 16` thành nhân tử.
4. Phân tích `x² + 8x + 16` thành nhân tử.
5. Phân tích `9x² - 25y²` thành nhân tử.

### Mức 2 – Thông hiểu

1. Phân tích `12x³y - 18x²y²`.
2. Phân tích `x² + 5x + 2x + 10`.
3. Phân tích `4x² - 12x + 9`.
4. Phân tích `2x³ - 8x`.
5. Phân tích `3x(x - 2) + 5(2 - x)`.

### Mức 3 – Vận dụng

1. Phân tích `x³ + x² - 9x - 9`.
2. Phân tích `2x³ + 4x² - 18x - 36`.
3. Tính nhanh `1001² - 1`.
4. Giải `x² - 11x = 0`.
5. Chứng minh `n² + n` luôn chia hết cho `2` với mọi số nguyên `n`.

### Mức 4 – Vận dụng cao / tổng hợp

1. Phân tích hoàn toàn `x⁴ - 16`.
2. Phân tích `x³ - 3x² - 4x + 12`.
3. Phân tích `a²(b - c) + b²(c - a) + c²(a - b)` nếu tìm được hướng nhóm phù hợp.
4. Tìm các giá trị nguyên của `x` thỏa mãn một phương trình sau khi đưa hai vế về dạng tích.
5. Chứng minh một biểu thức chứa tích của ba số nguyên liên tiếp chia hết cho `6`.

---

## ✅ 9. Tự kiểm tra

### Mini quiz

**Câu 1.** Nhân tử chung lớn nhất của `12x³y²` và `18x²y³` là gì?

A. `2xy`  
B. `3x²y²`  
C. `6x²y²`  
D. `6x³y³`

**Câu 2.** Kết quả đúng của `x² - 49` là:

A. `(x - 7)²`  
B. `(x - 7)(x + 7)`  
C. `(x + 7)²`  
D. Không phân tích được

**Câu 3.** `x² + 6x + 9` bằng:

A. `(x + 9)(x + 1)`  
B. `(x + 3)²`  
C. `(x - 3)²`  
D. `x(x + 6) + 9`

**Câu 4.** Bước đầu hợp lý nhất với `4x³ - 36x` là:

A. Dùng tổng hai lập phương  
B. Đặt `4x` làm nhân tử chung  
C. Nhóm hạng tử  
D. Không cần biến đổi

**Câu 5.** Sau khi có `2x(x² - 25)`, nếu yêu cầu phân tích hoàn toàn thì kết quả là:

A. `2x(x - 5)`  
B. `2x(x + 5)`  
C. `2x(x - 5)(x + 5)`  
D. `2x(x² - 25)`

### Đáp án

1. C
2. B
3. B
4. B
5. C

### Tự đánh giá

- **5/5:** có thể chuyển sang bài phối hợp và ứng dụng.
- **4/5:** khá chắc, nên xem lại câu sai.
- **3/5:** cần luyện thêm nhận dạng phương pháp.
- **0–2/5:** nên ôn lại Chuyên đề 05 và ba phương pháp cơ bản của chuyên đề này.

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- **← Trực tiếp:** [05. 7 Hằng đẳng thức đáng nhớ](../05-7-hang-dang-thuc/index.md)
- **→ Tiếp theo:** [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md)
- **→ Ứng dụng quan trọng:** [08. Phương trình và bất phương trình](../08-phuong-trinh-bat-phuong-trinh/index.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Tự tìm được nhân tử chung hợp lý trong đa số bài cơ bản.
- [ ] Nhận ra đúng các hằng đẳng thức thường dùng để phân tích.
- [ ] Nhóm được hạng tử trong các bài 4 hạng tử quen thuộc.
- [ ] Phối hợp ít nhất hai phương pháp trong cùng một bài.
- [ ] Biết tiếp tục phân tích nếu kết quả chưa hoàn toàn.
- [ ] Kiểm tra kết quả bằng phép nhân ngược.
- [ ] Giải được phương trình đơn giản bằng cách đưa về tích.
- [ ] Đạt ít nhất **4/5** ở phần tự kiểm tra.

> **Gợi ý học tiếp:** Sau khi làm chắc chuyên đề này, chuyển sang **Chuyên đề 07 – Phân thức đại số**. Khi đó, phân tích nhân tử sẽ được dùng trực tiếp để tìm điều kiện, rút gọn tử và mẫu, và quy đồng biểu thức.
