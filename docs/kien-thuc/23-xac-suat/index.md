# Chuyên đề 23 – Xác suất

> **Trạng thái:** Khung chuẩn đã được tạo. Nội dung chi tiết sẽ được hoàn thiện theo thứ tự ưu tiên của Roadmap.
>
> **Lớp trọng tâm:** 6–9  
> **Mạch kiến thức:** Xác suất  
> **Mức ưu tiên:** ⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

Bản đồ kiến thức chi tiết của chuyên đề sẽ được bổ sung trong giai đoạn biên soạn nội dung.

---

## Minh họa trực quan

### 1. Không gian mẫu và biến cố

<p align="center">
  <img src="../../assets/probability/23/23-khong-gian-mau-xuc-xac.svg"
       alt="Minh họa không gian mẫu khi gieo xúc xắc"
       width="560">
</p>

> **Không gian mẫu** là tập hợp tất cả các kết quả có thể xảy ra của một phép thử ngẫu nhiên.

Ví dụ, khi gieo một con xúc xắc một lần:

`Ω = {1, 2, 3, 4, 5, 6}`

Nếu xét biến cố `A`: “ra số chẵn”, thì:

`A = {2, 4, 6}`

Vì có `3` kết quả thuận lợi trên `6` kết quả có thể, nên:

`P(A) = 3/6 = 1/2`

---

### 2. Xác suất của một biến cố đơn giản

<p align="center">
  <img src="../../assets/probability/23/23-dong-xu.svg"
       alt="Minh họa xác suất khi tung đồng xu"
       width="560">
</p>

> Với một phép thử có các kết quả **đồng khả năng**, xác suất của biến cố được tính bằng:

`P(A) = số kết quả thuận lợi / tổng số kết quả có thể`

Ví dụ, khi tung một đồng xu cân đối:

- không gian mẫu gồm `Ngửa`, `Sấp`;
- mỗi kết quả có khả năng như nhau;
- nên:

`P(Ngửa) = 1/2`

`P(Sấp) = 1/2`

Lưu ý quan trọng:

> Xác suất của một biến cố luôn nằm trong khoảng từ `0` đến `1`.

---

### 3. Sơ đồ cây cho thí nghiệm nhiều bước

<p align="center">
  <img src="../../assets/probability/23/23-so-do-cay.svg"
       alt="Minh họa sơ đồ cây khi tung đồng xu hai lần"
       width="620">
</p>

> Khi thí nghiệm có nhiều bước liên tiếp, **sơ đồ cây** là công cụ rất hữu ích để liệt kê kết quả.

Ví dụ, tung đồng xu hai lần:

Không gian mẫu là:

`{NN, NS, SN, SS}`

Nếu đồng xu cân đối, mỗi kết quả có xác suất:

`1/4`

Ví dụ:

- `NN` nghĩa là lần 1 ngửa, lần 2 ngửa;
- `NS` nghĩa là lần 1 ngửa, lần 2 sấp.

Khi đi theo một nhánh trong sơ đồ cây, ta **nhân các xác suất trên đường đi**.

---

### Các khái niệm cần nhớ

| Khái niệm | Ý nghĩa |
|---|---|
| Phép thử ngẫu nhiên | Thao tác có nhiều kết quả không biết trước |
| Không gian mẫu `Ω` | Tập hợp tất cả các kết quả có thể xảy ra |
| Biến cố | Một tập con của không gian mẫu |
| Xác suất của biến cố `A` | Mức độ có thể xảy ra của `A` |

---

### Tính chất cơ bản của xác suất

- `0 ≤ P(A) ≤ 1`
- Biến cố chắc chắn có xác suất bằng `1`
- Biến cố không thể xảy ra có xác suất bằng `0`

Nếu mọi kết quả đều đồng khả năng:

`P(A) = n(A) / n(Ω)`

trong đó:

- `n(A)` là số kết quả thuận lợi cho biến cố `A`;
- `n(Ω)` là số phần tử của không gian mẫu.

---

### Khi nào nên dùng sơ đồ cây?

Sơ đồ cây đặc biệt hữu ích khi:

- thí nghiệm có **nhiều bước liên tiếp**;
- cần liệt kê **toàn bộ kết quả**;
- dễ nhầm nếu chỉ liệt kê bằng lời;
- cần tính xác suất của các biến cố như “ít nhất một lần”, “cả hai lần”, “đúng một lần”.

---

### Mẹo làm bài xác suất

- Luôn xác định **phép thử** trước.
- Viết rõ **không gian mẫu**.
- Xác định đúng **biến cố cần tính**.
- Kiểm tra xem các kết quả có **đồng khả năng** hay không.
- Với bài nhiều bước, ưu tiên dùng **sơ đồ cây** hoặc bảng liệt kê.

---

### Quy trình giải bài xác suất

```text
Xác định phép thử
      ↓
Lập không gian mẫu
      ↓
Xác định biến cố cần xét
      ↓
Đếm số kết quả thuận lợi
      ↓
Áp dụng công thức xác suất
      ↓
Kết luận
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

- **Kiến thức nên ôn trước:** 02, 21
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

- **← Trước:** 02, 21
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
