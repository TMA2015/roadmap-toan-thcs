# Chuyên đề 24 – Bài toán thực tế và mô hình hóa

> **Trạng thái:** Khung chuẩn đã được tạo. Nội dung chi tiết sẽ được hoàn thiện theo thứ tự ưu tiên của Roadmap.
>
> **Lớp trọng tâm:** 6–9  
> **Mạch kiến thức:** Liên môn/tổng hợp  
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

Bản đồ kiến thức chi tiết của chuyên đề sẽ được bổ sung trong giai đoạn biên soạn nội dung.

---

## Minh họa trực quan

### 1. Bài toán quãng đường – vận tốc – thời gian

<p align="center">
  <img src="../../assets/modeling/24/24-quang-duong-van-toc-thoi-gian.svg"
       alt="Minh họa bài toán quãng đường vận tốc thời gian"
       width="580">
</p>

Ba công thức cơ bản:

`S = v × t`

`v = S / t`

`t = S / v`

Trong ví dụ:

- quãng đường `S = 120 km`;
- vận tốc `v = 60 km/h`;
- thời gian:

`t = 120 / 60 = 2 giờ`

> Khi giải bài chuyển động, phải đổi các đơn vị về cùng hệ trước khi tính.

---

### 2. Bài toán phần trăm – giảm giá

<p align="center">
  <img src="../../assets/modeling/24/24-phan-tram-giam-gia.svg"
       alt="Minh họa bài toán phần trăm và giảm giá"
       width="580">
</p>

Ví dụ một sản phẩm giá `1.200.000 đồng`, giảm `25%`.

Tiền giảm:

`1.200.000 × 25% = 300.000 đồng`

Giá phải trả:

`1.200.000 - 300.000 = 900.000 đồng`

Có thể tính nhanh:

`Giá sau giảm = giá ban đầu × (100% - tỉ lệ giảm)`

Trong ví dụ:

`1.200.000 × 75% = 900.000 đồng`

---

### 3. Mô hình hóa chiều cao bằng lượng giác

<p align="center">
  <img src="../../assets/modeling/24/24-chieu-cao-luong-giac.svg"
       alt="Minh họa bài toán tính chiều cao bằng lượng giác"
       width="580">
</p>

Nếu biết:

- khoảng cách ngang `d`;
- góc nâng `α`;
- chiều cao cần tìm `h`;

thì:

`tan α = h / d`

suy ra:

`h = d × tan α`

Trong bài toán thực tế, nếu góc được đo từ tầm mắt người quan sát thì có thể cần **cộng thêm chiều cao mắt** vào kết quả.

---

### Mô hình hóa toán học là gì?

> Mô hình hóa toán học là quá trình chuyển một tình huống thực tế thành bài toán toán học, giải bài toán đó rồi diễn giải kết quả trở lại thực tế.

Một bài toán thực tế thường gồm ba lớp:

```text
Tình huống thực tế
      ↓
Mô hình toán học
      ↓
Kết quả toán học
      ↓
Kết luận trong thực tế
```

---

### Quy trình giải bài toán thực tế

```text
1. Đọc đề và xác định đại lượng cần tìm
              ↓
2. Đặt ẩn và ghi rõ đơn vị
              ↓
3. Chuyển thông tin thành phương trình / công thức / hình vẽ
              ↓
4. Giải mô hình toán học
              ↓
5. Kiểm tra điều kiện và đơn vị
              ↓
6. Trả lời bằng câu kết luận phù hợp thực tế
```

---

### Bảng chọn công cụ toán học

| Dấu hiệu trong đề | Công cụ nên nghĩ tới |
|---|---|
| Quãng đường, vận tốc, thời gian | `S = v × t` |
| Năng suất, khối lượng công việc, thời gian | Phương trình / hệ phương trình |
| Giá gốc, tăng giá, giảm giá | Tỉ lệ và phần trăm |
| Tuổi, số lượng, quan hệ giữa hai đại lượng | Lập phương trình |
| Hai đại lượng chưa biết | Hệ phương trình |
| Chiều cao, khoảng cách, góc nâng | Lượng giác |
| Diện tích, thể tích, vật liệu | Công thức hình học |
| Số liệu thực tế | Thống kê / trung bình / biểu đồ |

---

### Ba bước quan trọng khi đặt ẩn

1. **Chọn đại lượng hợp lý** để đặt ẩn.
2. **Ghi điều kiện của ẩn** ngay khi đặt.
3. **Ghi đơn vị** nếu đại lượng có đơn vị.

Ví dụ:

`Gọi x (km/h) là vận tốc của xe, x > 0.`

Không nên chỉ viết:

`Gọi x là vận tốc.`

---

### Kiểm tra tính hợp lý của kết quả

Sau khi tính xong, cần tự hỏi:

- kết quả có đúng đơn vị không?
- có thỏa mãn điều kiện của ẩn không?
- có hợp lý với tình huống thực tế không?
- có cần làm tròn số không?
- đề yêu cầu trả lời theo đơn vị nào?

Ví dụ:

Nếu tính được thời gian đi `120 km` với vận tốc `60 km/h` là `-2 giờ`, kết quả chắc chắn sai vì thời gian không thể âm.

---

### Mẹo đọc đề dài

Khi gặp đề nhiều chữ, có thể lập bảng:

| Đại lượng | Đã biết | Chưa biết |
|---|---:|---:|
| Quãng đường | ... | ... |
| Vận tốc | ... | ... |
| Thời gian | ... | ... |

Hoặc gạch chân:

- **số liệu**;
- **đơn vị**;
- **quan hệ giữa các đại lượng**;
- **câu hỏi cuối cùng**.

---

### Sai lầm thường gặp

- Không đổi đơn vị trước khi tính.
- Đặt ẩn nhưng quên điều kiện.
- Lập đúng phương trình nhưng trả lời sai đại lượng đề hỏi.
- Tính phần trăm theo sai giá trị gốc.
- Có nghiệm toán học nhưng nghiệm không phù hợp thực tế.
- Quên làm tròn theo yêu cầu.

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần:

- [ ] Nắm được các khái niệm và tính chất cốt lõi.
- [ ] Nhận dạng được các dạng bài cơ bản và trọng tâm.
- [ ] Biết lựa chọn phương pháp giải phù hợp.
- [ ] Trình bày lời giải rõ ràng và kiểm tra được kết quả.
- [ ] Biết liên hệ kiến thức với các chuyên đề trước và sau.

---

## 📖 3. Kiến thức cốt lõi

Nội dung cốt lõi sẽ được biên soạn theo chương trình Toán THCS và chuẩn cấu trúc của Roadmap.

---

## 🔗 4. Kiến thức liên quan

- **Kiến thức nên ôn trước:** 02–23
- **Chuyên đề sử dụng tiếp:** 25

---

## 🧩 5. Các dạng bài cần nắm vững

Danh mục dạng bài sẽ được bổ sung khi chuyên đề được biên soạn đầy đủ.

---

## 🚀 6. Dạng bài thi vào lớp 10

Các dạng bài liên quan đến thi vào lớp 10 sẽ được đánh dấu theo mức độ ưu tiên và liên kết sang khu vực ôn thi khi hoàn thiện.

---

## ⚠️ 7. Lỗi sai thường gặp

Mục này sẽ tổng hợp các lỗi sai điển hình, nguyên nhân và cách tự kiểm tra.

---

## 📝 8. Luyện tập

Bài tập sẽ được chia theo 4 mức:

1. Nhận biết
2. Thông hiểu
3. Vận dụng
4. Vận dụng cao / tổng hợp

---

## ✅ 9. Tự kiểm tra

Bộ câu hỏi tự kiểm tra và tiêu chí đạt sẽ được bổ sung cùng nội dung chi tiết.

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** 02–23
- **→ Tiếp theo:** 25

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Hiểu kiến thức cốt lõi.
- [ ] Làm chắc các dạng bài nền tảng.
- [ ] Nhận diện và tránh được lỗi sai thường gặp.
- [ ] Đạt yêu cầu phần tự kiểm tra.
- [ ] Biết chuyên đề này kết nối với kiến thức nào trong Roadmap.
