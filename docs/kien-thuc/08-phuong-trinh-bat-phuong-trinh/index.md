# Chuyên đề 08 – Phương trình và bất phương trình


> **Trạng thái:** Đã kiểm định nội dung học thuật; cấu trúc Roadmap chuẩn 11 mục.
>
> **Lớp trọng tâm:** 8–9
> **Mạch kiến thức:** Đại số
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

> **Vai trò:** Chuyên đề trọng tâm của Đại số THCS, kết nối trực tiếp với hệ phương trình, hàm số và bài toán thực tế.

---

## 🧭 1. Bản đồ kiến thức

```text
PHƯƠNG TRÌNH & BẤT PHƯƠNG TRÌNH
│
├── Phương trình bậc nhất
│   ├── Quy tắc biến đổi
│   └── Biện luận nghiệm cơ bản
│
├── Phương trình tích
│   ├── Đưa về dạng tích
│   └── Dùng tính chất tích bằng 0
│
├── Phương trình chứa ẩn ở mẫu
│   ├── Điều kiện xác định
│   ├── Quy đồng / khử mẫu
│   └── Đối chiếu điều kiện
│
├── Bất phương trình bậc nhất
│   ├── Quy tắc biến đổi
│   └── Đổi chiều khi nhân/chia số âm
│
├── Mở rộng: nhiều bất phương trình cùng điều kiện
│   └── Giao các tập nghiệm
│
└── Bài toán thực tế
    ├── Lập phương trình
    └── Lập bất phương trình
```

## 🎯 2. Mục tiêu cần đạt

### Bắt buộc

- Hiểu nghiệm của phương trình và bất phương trình.
- Biết các phép biến đổi tương đương cơ bản và điều kiện để phép biến đổi giữ nguyên tập nghiệm.
- Giải thành thạo phương trình bậc nhất một ẩn.
- Nhận dạng và giải phương trình tích.
- Giải phương trình chứa ẩn ở mẫu đúng quy trình.
- Giải bất phương trình bậc nhất một ẩn.
- Biết biểu diễn tập nghiệm trên trục số.

### Vận dụng

- Kết hợp nhiều phép biến đổi.
- Giải bài toán bằng cách lập phương trình/bất phương trình.
- Kiểm tra điều kiện và loại nghiệm không phù hợp.
- Chuyển đổi linh hoạt giữa biểu thức, phương trình và bài toán thực tế.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Phương trình bậc nhất một ẩn

Dạng tổng quát:

$$ax+b=0,\quad a\ne0$$

Nghiệm:

$$x=-\frac ba$$

Các phép biến đổi tương đương thường dùng:

- cộng hoặc trừ cùng một biểu thức vào hai vế;
- nhân hoặc chia hai vế cho cùng một **số khác 0**.

**Quy trình:** thu gọn → chuyển vế → chia cho hệ số khác 0 của $x$ → kiểm tra nếu cần.

> Nếu xuất hiện tham số làm hệ số của $x$ có thể bằng `0`, phải xét riêng trường hợp đó; không được chia ngay cho một biểu thức chưa biết có khác `0` hay không.

### 3.2. Phương trình tích

Nếu:

$$A(x)B(x)=0$$

thì:

$$A(x)=0\quad\text{hoặc}\quad B(x)=0.$$

Điểm quan trọng là phải **đưa phương trình về dạng tích** trước khi áp dụng tính chất.

### 3.3. Phương trình chứa ẩn ở mẫu

Quy trình bắt buộc:

1. Tìm **điều kiện xác định**.
2. Quy đồng hoặc nhân hai vế với mẫu chung phù hợp.
3. Giải phương trình sau khi khử mẫu.
4. Đối chiếu nghiệm với điều kiện xác định.
5. Kết luận.

### 3.4. Bất phương trình bậc nhất một ẩn

Khi cộng hoặc trừ cùng một biểu thức vào hai vế, chiều bất phương trình được giữ nguyên. Khi nhân hoặc chia hai vế với một **số dương**, chiều được giữ nguyên; với một **số âm**, phải **đổi chiều bất phương trình**.

Ví dụ:

$$-2x>6\Rightarrow x<-3.$$

### 3.5. Mở rộng – nhiều bất phương trình cùng điều kiện

Khi cần tìm các giá trị thỏa mãn đồng thời nhiều bất phương trình một ẩn, giải từng bất phương trình rồi lấy **giao** các tập nghiệm.

> Phần này dùng để rèn tư duy về giao tập nghiệm và hỗ trợ bài toán có nhiều điều kiện; không xem là trọng tâm cốt lõi ngang với phương trình và bất phương trình bậc nhất một ẩn.

---

## 🔗 4. Kiến thức liên quan

**Cần nắm trước:**

- [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [06. Phân tích đa thức thành nhân tử](../06-phan-tich-da-thuc/index.md)
- [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md)
- Biến đổi và rút gọn biểu thức

**Học tiếp / liên hệ:**

- [09. Hệ phương trình bậc nhất hai ẩn](../09-he-phuong-trinh/index.md)
- [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- [12. Phương trình bậc hai & Viète](../12-phuong-trinh-bac-hai-viete/index.md)
- [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md)

**Mạch kiến thức:**

`04 Biểu thức` → `06 Phân tích đa thức` → **`08 Phương trình & bất phương trình`** → `09 Hệ phương trình` / `10 Hàm số` → `24 Mô hình hóa`.

---

## 🧩 5. Các dạng bài cần nắm vững

=== "Mức 1 — Nhận biết"

    - Giải phương trình bậc nhất.
    - Nhận dạng phương trình tích.
    - Tìm điều kiện xác định.
    - Giải bất phương trình đơn giản.
    - Biểu diễn tập nghiệm trên trục số.

=== "Mức 2 — Thông hiểu"

    - Phương trình cần thu gọn nhiều bước.
    - Phương trình tích sau khi phân tích nhân tử.
    - Phương trình chứa ẩn ở mẫu.
    - Bài toán nhiều điều kiện, lấy giao các tập nghiệm (mở rộng).

=== "Mức 3 — Vận dụng"

    - Phương trình kết hợp nhiều kỹ thuật.
    - Bài toán lập phương trình.
    - Bài toán lập bất phương trình.
    - Bài toán có điều kiện nghiệm.

=== "Mức 4 — Nâng cao"

    - Phương trình có tham số.
    - Bài toán biện luận nghiệm.
    - Kết hợp phương trình với điều kiện thực tế.
    - Bài toán liên hệ với hàm số hoặc đồ thị.

---

### Ví dụ mẫu

#### Ví dụ 1 — Phương trình bậc nhất

$$3x-5=10$$

$$3x=15\Rightarrow x=5.$$

#### Ví dụ 2 — Phương trình tích

$$x(x-3)=0$$

$$x=0\quad\text{hoặc}\quad x=3.$$

#### Ví dụ 3 — Bất phương trình

$$-2x+4>0$$

$$-2x>-4\Rightarrow x<2.$$

> Khi nhân/chia với số âm, **đổi chiều**.

---

## 🚀 6. Dạng bài thi vào lớp 10

| Dạng | Ưu tiên | Kỹ năng cần đạt |
|---|---:|---|
| Phương trình cơ bản | ⭐⭐⭐⭐⭐ | Giải nhanh, chính xác |
| Phương trình tích | ⭐⭐⭐⭐ | Phân tích và giải đúng |
| Phương trình chứa ẩn ở mẫu | ⭐⭐⭐⭐⭐ | ĐKXĐ + khử mẫu + đối chiếu |
| Bất phương trình | ⭐⭐⭐⭐ | Biến đổi và biểu diễn nghiệm |
| Nhiều bất phương trình cùng điều kiện (mở rộng) | ⭐⭐⭐ | Lấy giao tập nghiệm |
| Lập phương trình từ bài toán | ⭐⭐⭐⭐⭐ | Mô hình hóa |
| Bài toán tham số/nâng cao | ⭐⭐⭐ | Biện luận |

> ⭐ là **mức độ ưu tiên ôn tập của Roadmap**, không phải cam kết dạng bài sẽ xuất hiện trong mọi đề thi địa phương.

---

## ⚠️ 7. Lỗi sai thường gặp

!!! warning "5 lỗi cần kiểm tra trước khi nộp bài"

    1. Quên điều kiện xác định khi mẫu chứa ẩn.
    2. Khử mẫu nhưng không kiểm tra nghiệm với điều kiện xác định.
    3. Quên đổi chiều bất phương trình khi nhân/chia với số âm.
    4. Phân tích tích sai dấu hoặc bỏ sót nghiệm.
    5. Lập phương trình đúng nhưng kết luận không phù hợp với điều kiện thực tế.

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết / củng cố

10–15 bài giải trực tiếp, tập trung vào độ chính xác.

### Mức 2 – Thông hiểu / thành thạo dạng bài

15–20 bài phân loại theo phương trình bậc nhất, tích, chứa mẫu và bất phương trình.

### Mức 3 – Vận dụng

10–15 bài lập phương trình/bất phương trình và bài tổng hợp.

### Mức 4 – Nâng cao / thi vào 10

Một đề chuyên đề 45–60 phút, trộn các dạng quan trọng.

> **Nguyên tắc:** học sinh nên đạt ít nhất 80% ở Bộ A và B trước khi chuyển trọng tâm sang Bộ C/D.

---

## ✅ 9. Tự kiểm tra

- [ ] Tôi giải được phương trình bậc nhất mà không cần nhìn mẫu.
- [ ] Tôi nhận ra khi nào nên phân tích thành tích.
- [ ] Tôi luôn viết điều kiện xác định trước khi khử mẫu.
- [ ] Tôi nhớ đổi chiều khi nhân/chia với số âm.
- [ ] Tôi biểu diễn được tập nghiệm trên trục số.
- [ ] Tôi lập được phương trình từ một bài toán thực tế đơn giản.
- [ ] Tôi kiểm tra và kết luận nghiệm đúng ngữ cảnh.

---

## 🔄 10. Liên kết Roadmap

**← Trước:** [07. Phân thức đại số](../07-phan-thuc-dai-so/index.md)

**→ Tiếp theo:** [09. Hệ phương trình bậc nhất hai ẩn](../09-he-phuong-trinh/index.md)

**Liên hệ gần:**

- [04. Biểu thức và biến đổi đại số](../04-bieu-thuc-dai-so/index.md)
- [06. Phân tích đa thức thành nhân tử](../06-phan-tich-da-thuc/index.md)
- [10. Hàm số và đồ thị](../10-ham-so-do-thi/index.md)
- [24. Bài toán thực tế và mô hình hóa](../24-bai-toan-thuc-te/index.md)

- **✏️ Luyện tập:** [Bài tập Chuyên đề 08](bai-tap.md)
- **✅ Tự kiểm tra:** [Tự kiểm tra Chuyên đề 08](tu-kiem-tra.md)

---

## 🏁 11. Điều kiện hoàn thành

Học sinh được xem là **nắm vững chuyên đề** khi có thể:

1. Tự giải chính xác các bài cơ bản.
2. Nhận dạng đúng dạng bài trước khi giải.
3. Không mắc các lỗi điều kiện, dấu và kết luận.
4. Giải được bài vận dụng phù hợp với chương trình đang học.
5. Biết kiến thức này liên hệ thế nào với **hệ phương trình, hàm số và bài toán thực tế**.
6. Đạt tối thiểu **80% bài luyện cốt lõi** và **7/10** ở bài Tự kiểm tra; chữa xong các câu sai trước khi chuyển sang chuyên đề kế tiếp.
