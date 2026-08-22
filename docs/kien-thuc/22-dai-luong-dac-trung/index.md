# Chuyên đề 22 – Các đại lượng đặc trưng của dữ liệu

> **Trạng thái:** Khung chuẩn đã được tạo. Nội dung chi tiết sẽ được hoàn thiện theo thứ tự ưu tiên của Roadmap.
>
> **Lớp trọng tâm:** 7–9  
> **Mạch kiến thức:** Thống kê  
> **Mức ưu tiên:** ⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

Bản đồ kiến thức chi tiết của chuyên đề sẽ được bổ sung trong giai đoạn biên soạn nội dung.

---

## Minh họa trực quan

### 1. Số trung bình cộng

<p align="center">
  <img src="../../assets/statistics/22/22-trung-binh.svg"
       alt="Minh họa số trung bình cộng"
       width="560">
</p>

> Số trung bình cộng cho biết mức “trung bình” của một bộ dữ liệu.

Công thức:

`Số trung bình = tổng các giá trị / số lượng giá trị`

Ví dụ trong hình:

- tổng các giá trị là `56`;
- có `7` giá trị;
- nên số trung bình là `56 / 7 = 8`.

---

### 2. Trung vị và mốt

<p align="center">
  <img src="../../assets/statistics/22/22-trung-vi-mot.svg"
       alt="Minh họa trung vị và mốt"
       width="560">
</p>

> **Trung vị** là giá trị đứng giữa sau khi dữ liệu đã được sắp xếp theo thứ tự.

> **Mốt** là giá trị xuất hiện nhiều nhất trong bộ dữ liệu.

Trong ví dụ:

- dữ liệu đã sắp xếp là `5, 6, 7, 7, 7, 8, 10`;
- giá trị ở giữa là `7` nên **trung vị = 7**;
- giá trị xuất hiện nhiều nhất cũng là `7` nên **mốt = 7**.

Lưu ý:

- muốn tìm trung vị, luôn phải **sắp xếp dữ liệu trước**;
- một bộ dữ liệu có thể có **một mốt, nhiều mốt hoặc không có mốt rõ ràng**.

---

### 3. Ảnh hưởng của giá trị ngoại lai

<p align="center">
  <img src="../../assets/statistics/22/22-ngoai-lai.svg"
       alt="Minh họa ảnh hưởng của giá trị ngoại lai"
       width="560">
</p>

> **Giá trị ngoại lai** là một giá trị quá lớn hoặc quá nhỏ so với phần còn lại của dữ liệu.

Trong hình:

- Bộ A: `7, 8, 8, 9, 9` có trung bình `8,2` và trung vị `8`;
- Bộ B: `7, 8, 8, 9, 30` có trung bình `12,4` nhưng trung vị vẫn là `8`.

Nhận xét quan trọng:

> Giá trị ngoại lai có thể làm **số trung bình thay đổi mạnh**, nhưng thường **ít ảnh hưởng hơn đến trung vị**.

---

### Khi nào nên dùng đại lượng nào?

| Đại lượng | Ý nghĩa | Phù hợp khi nào? |
|---|---|---|
| Số trung bình cộng | Giá trị trung bình chung | Dữ liệu khá ổn định, không có ngoại lai quá lớn |
| Trung vị | Giá trị đứng giữa | Dữ liệu có ngoại lai hoặc cần mức “điển hình” |
| Mốt | Giá trị xuất hiện nhiều nhất | Cần biết giá trị phổ biến nhất |

---

### Bảng so sánh nhanh

| Đại lượng | Cách tìm | Ưu điểm | Hạn chế |
|---|---|---|---|
| Trung bình | Cộng tất cả rồi chia cho số phần tử | Dễ tính, dùng nhiều | Nhạy với ngoại lai |
| Trung vị | Sắp xếp rồi lấy giá trị giữa | Ít bị ảnh hưởng bởi ngoại lai | Không phản ánh hết mọi giá trị |
| Mốt | Tìm giá trị xuất hiện nhiều nhất | Dễ hiểu, trực quan | Có thể có nhiều mốt |

---

### Mẹo làm bài

- Với **trung bình**, nhớ tính đúng tổng rồi chia đúng số phần tử.
- Với **trung vị**, phải sắp xếp dữ liệu trước.
- Với **mốt**, kiểm tra giá trị nào lặp lại nhiều nhất.
- Khi đề bài có một giá trị quá lớn hoặc quá nhỏ, hãy nghĩ ngay đến **ngoại lai**.
- Nếu đề yêu cầu “giá trị đại diện hợp lý hơn”, nhiều khi **trung vị** là lựa chọn tốt hơn trung bình.

---

### Quy trình xử lý dữ liệu trong bài toán thực tế

```text
Thu thập dữ liệu
      ↓
Sắp xếp dữ liệu
      ↓
Tính trung bình / tìm trung vị / tìm mốt
      ↓
So sánh các kết quả
      ↓
Chọn đại lượng phù hợp để nhận xét
```

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

- **Kiến thức nên ôn trước:** 21
- **Chuyên đề sử dụng tiếp:** 24, 25

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

- **← Trước:** 21
- **→ Tiếp theo:** 24, 25

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Hiểu kiến thức cốt lõi.
- [ ] Làm chắc các dạng bài nền tảng.
- [ ] Nhận diện và tránh được lỗi sai thường gặp.
- [ ] Đạt yêu cầu phần tự kiểm tra.
- [ ] Biết chuyên đề này kết nối với kiến thức nào trong Roadmap.
