# Chuyên đề 20 – Hình học tổng hợp, đo lường và hình khối

> **Trạng thái:** Khung chuẩn đã được tạo. Nội dung chi tiết sẽ được hoàn thiện theo thứ tự ưu tiên của Roadmap.
>
> **Lớp trọng tâm:** 6–9  
> **Mạch kiến thức:** Hình học/Đo lường  
> **Mức ưu tiên:** ⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

Bản đồ kiến thức chi tiết của chuyên đề sẽ được bổ sung trong giai đoạn biên soạn nội dung.

---

## Minh họa trực quan

### 1. Tứ giác nội tiếp

<p align="center">
  <img src="../../assets/geometry/20/20-tu-giac-noi-tiep.svg"
       alt="Minh họa tứ giác nội tiếp"
       width="500">
</p>

> Một tứ giác có bốn đỉnh cùng nằm trên một đường tròn được gọi là **tứ giác nội tiếp**.

Tính chất rất quan trọng:

`∠A + ∠C = 180°`

`∠B + ∠D = 180°`

Các dấu hiệu thường dùng để chứng minh một tứ giác nội tiếp:

- tổng hai góc đối bằng `180°`;
- hai đỉnh cùng nhìn một đoạn thẳng dưới hai góc bằng nhau;
- hai góc cùng chắn một đoạn thẳng bằng nhau;
- xuất hiện hai góc vuông cùng nhìn một đoạn thẳng.

---

### 2. Tam giác đồng dạng trong bài toán tổng hợp

<p align="center">
  <img src="../../assets/geometry/20/20-tam-giac-dong-dang.svg"
       alt="Minh họa hai tam giác đồng dạng"
       width="540">
</p>

Tam giác đồng dạng thường là “cầu nối” giữa phần góc và phần độ dài.

Nếu:

`△ABC ∼ △DEF`

thì:

`AB/DE = BC/EF = AC/DF`

và các góc tương ứng bằng nhau.

Trong bài hình học tổng hợp, đồng dạng thường được dùng để:

- suy ra tỉ số đoạn thẳng;
- chứng minh hai tích đoạn thẳng bằng nhau;
- chứng minh một hệ thức độ dài;
- tạo bước trung gian để chứng minh tiếp tuyến hoặc nội tiếp.

---

### 3. Đồng dạng trong tam giác vuông

<p align="center">
  <img src="../../assets/geometry/20/20-dong-dang-tam-giac-vuong.svg"
       alt="Minh họa các tam giác đồng dạng trong tam giác vuông"
       width="520">
</p>

Khi từ góc vuông hạ đường cao xuống cạnh huyền, thường xuất hiện ba tam giác đồng dạng.

Đây là cấu hình đặc biệt quan trọng vì từ đồng dạng có thể suy ra các hệ thức lượng như:

`AH² = BH × CH`

`AB² = BH × BC`

`AC² = CH × BC`

Vì vậy, khi gặp tam giác vuông có đường cao xuống cạnh huyền, nên kiểm tra ngay các cặp tam giác đồng dạng.

---

### Quy trình giải bài hình học tổng hợp

```text
Đọc kỹ giả thiết
      ↓
Đánh dấu góc bằng nhau, vuông góc, song song
      ↓
Tìm tam giác đồng dạng
      ↓
Suy ra góc hoặc tỉ số đoạn thẳng
      ↓
Kiểm tra khả năng có tứ giác nội tiếp / tiếp tuyến
      ↓
Kết hợp các kết quả trung gian
      ↓
Hoàn thành chứng minh hoặc tính toán
```

---

### Bảng chiến lược nhận dạng

| Dấu hiệu trong hình | Hướng suy nghĩ ưu tiên |
|---|---|
| Có nhiều góc bằng nhau | Tam giác đồng dạng |
| Có hai góc vuông | Tứ giác nội tiếp |
| Có tổng hai góc đối bằng `180°` | Tứ giác nội tiếp |
| Có tiếp tuyến | Bán kính vuông góc tiếp tuyến, góc tạo bởi tiếp tuyến và dây |
| Có đường tròn + nhiều đoạn cắt nhau | Tích đoạn thẳng, đồng dạng |
| Có đường cao trong tam giác vuông | Đồng dạng + hệ thức lượng |
| Có song song | Thales + góc bằng nhau + đồng dạng |

---

### Mẹo trình bày bài chứng minh

1. Mỗi kết luận nên có lý do ngay sau đó.
2. Khi chứng minh hai tam giác đồng dạng, ghi đúng thứ tự các đỉnh tương ứng.
3. Không viết tỉ số trước khi xác định đúng cặp cạnh tương ứng.
4. Nếu cần chứng minh một tích đoạn thẳng, thử biến đổi về tỉ số rồi tìm tam giác đồng dạng.
5. Nếu cần chứng minh bốn điểm cùng thuộc một đường tròn, ưu tiên tìm một cặp góc bằng nhau hoặc hai góc đối bù nhau.

---

### Một chuỗi suy luận mẫu

Ví dụ trong một bài có đường tròn và tam giác:

```text
∠ABC = ∠ADC
      ↓
A, B, C, D cùng thuộc một đường tròn
      ↓
Khai thác các góc nội tiếp cùng chắn một cung
      ↓
Tìm được hai tam giác đồng dạng
      ↓
Suy ra tỉ số cạnh
      ↓
Chứng minh hệ thức cần tìm
```

> Hình học tổng hợp không yêu cầu nhớ một “công thức duy nhất”. Quan trọng nhất là nhận ra **chuỗi liên kết giữa các kiến thức**.

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

- **Kiến thức nên ôn trước:** 14–19
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

- **← Trước:** 14–19
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
