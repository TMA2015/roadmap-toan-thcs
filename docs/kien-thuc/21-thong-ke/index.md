# Chuyên đề 21 – Thống kê và thu thập dữ liệu

> **Trạng thái:** Nội dung cốt lõi đã hoàn thiện theo cấu trúc Roadmap.
>
> **Lớp trọng tâm:** 6–9  
> **Mạch kiến thức:** Thống kê  
> **Mức ưu tiên:** ⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

```text
THỐNG KÊ & THU THẬP DỮ LIỆU
│
├── Thu thập dữ liệu
│   ├── xác định đối tượng
│   ├── chọn cách thu thập
│   └── kiểm tra tính hợp lý
│
├── Tổ chức dữ liệu
│   ├── bảng dữ liệu
│   ├── bảng tần số
│   └── bảng tần suất
│
├── Biểu diễn dữ liệu
│   ├── biểu đồ cột
│   ├── biểu đồ đoạn thẳng
│   └── biểu đồ phù hợp theo mục tiêu
│
└── Đọc và phân tích
    ├── lớn nhất / nhỏ nhất
    ├── xu hướng
    └── kết luận từ dữ liệu
```

Mạch tư duy trọng tâm:

**thu thập đúng → tổ chức gọn → biểu diễn phù hợp → đọc chính xác → kết luận có căn cứ.**

---

## Minh họa trực quan

### 1. Bảng tần số

<p align="center">
  <img src="../../assets/statistics/21/21-bang-tan-so.svg"
       alt="Minh họa bảng tần số"
       width="560">
</p>

> Bảng tần số giúp ta sắp xếp dữ liệu theo từng giá trị và đếm số lần xuất hiện của mỗi giá trị.

Các khái niệm cần nhớ:

- **Dữ liệu**: các số liệu hoặc thông tin thu thập được;
- **Giá trị của dấu hiệu**: các giá trị cụ thể xuất hiện trong dữ liệu;
- **Tần số**: số lần một giá trị xuất hiện;
- **Tần suất**: tỉ lệ giữa tần số và tổng số quan sát.

Ví dụ trong bảng trên:

- điểm `8` xuất hiện `5` lần;
- tổng số quan sát là `14`;
- tần suất của điểm `8` là `5/14 ≈ 35,7%`.

---

### 2. Biểu đồ cột

<p align="center">
  <img src="../../assets/statistics/21/21-bieu-do-cot.svg"
       alt="Minh họa biểu đồ cột"
       width="560">
</p>

> Biểu đồ cột thường dùng để so sánh số lượng hoặc tần số giữa các nhóm giá trị khác nhau.

Cách đọc:

1. nhìn tên các cột trên trục ngang;
2. nhìn chiều cao cột;
3. đối chiếu với trục dọc để đọc giá trị;
4. so sánh cột cao nhất, thấp nhất và chênh lệch giữa các cột.

Trong ví dụ:

- cột `8 điểm` cao nhất, nghĩa là xuất hiện nhiều nhất;
- cột `6 điểm` thấp nhất, nghĩa là xuất hiện ít nhất.

---

### 3. Biểu đồ đoạn thẳng

<p align="center">
  <img src="../../assets/statistics/21/21-bieu-do-doan-thang.svg"
       alt="Minh họa biểu đồ đoạn thẳng"
       width="560">
</p>

> Biểu đồ đoạn thẳng phù hợp khi ta muốn theo dõi sự thay đổi của dữ liệu theo thời gian.

Cách đọc:

- xác định từng mốc thời gian trên trục ngang;
- đọc giá trị tương ứng trên trục dọc;
- quan sát xu hướng tăng, giảm hoặc giữ nguyên.

Trong ví dụ:

- nhiệt độ tăng từ ngày 1 đến ngày 3;
- giảm ở ngày 4;
- tăng mạnh ở ngày 5.

---

### Khi nào dùng dạng biểu diễn nào?

| Dạng biểu diễn | Phù hợp khi nào? | Điểm mạnh |
|---|---|---|
| Bảng tần số | Cần thống kê dữ liệu gốc | Gọn, dễ tính toán |
| Biểu đồ cột | Cần so sánh các nhóm | Dễ nhìn, trực quan |
| Biểu đồ đoạn thẳng | Cần theo dõi sự thay đổi theo thời gian | Thể hiện xu hướng rõ |

---

### Mẹo làm bài thống kê

- Đọc kỹ đề để xác định **dữ liệu là gì**.
- Khi lập bảng, phải kiểm tra **tổng tần số** có đúng bằng số quan sát hay không.
- Khi đọc biểu đồ, luôn xem rõ **trục ngang**, **trục dọc** và **đơn vị**.
- Không chỉ đọc từng giá trị riêng lẻ, mà còn nên nhận xét **lớn nhất**, **nhỏ nhất**, **xu hướng chung**.
- Với bài thực tế, nên viết kết luận bằng lời sau khi đọc xong số liệu.

---

### Quy trình xử lý dữ liệu cơ bản

```text
Thu thập dữ liệu
      ↓
Sắp xếp dữ liệu
      ↓
Lập bảng tần số / tần suất
      ↓
Vẽ biểu đồ phù hợp
      ↓
Đọc, nhận xét và rút ra kết luận
```

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần:

- [ ] Phân biệt được dữ liệu, giá trị, tần số và tần suất.
- [ ] Biết thu thập và kiểm tra dữ liệu cơ bản.
- [ ] Lập được bảng tần số và tần suất.
- [ ] Đọc chính xác biểu đồ cột và biểu đồ đoạn thẳng.
- [ ] Chọn được dạng biểu diễn phù hợp với mục tiêu.
- [ ] Nhận xét được xu hướng, giá trị lớn nhất, nhỏ nhất và chênh lệch.
- [ ] Viết được kết luận bằng lời từ dữ liệu đã cho.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Dữ liệu và giá trị dữ liệu

**Dữ liệu** là thông tin thu thập được từ quan sát, đo đạc, khảo sát hoặc ghi chép.

Ví dụ:
- điểm kiểm tra của một lớp;
- chiều cao của học sinh;
- nhiệt độ theo ngày;
- số sản phẩm bán được theo tháng.

Một dữ liệu có thể là số hoặc phân loại.

### 3.2. Tần số

**Tần số** của một giá trị là số lần giá trị đó xuất hiện.

Nếu giá trị `8` xuất hiện `5` lần thì tần số của `8` là:

`n = 5`

Tổng các tần số phải bằng tổng số quan sát.

### 3.3. Tần suất

Tần suất cho biết một giá trị chiếm bao nhiêu phần trong toàn bộ dữ liệu:

`tần suất = tần số / tổng số quan sát`

Nếu muốn biểu diễn theo phần trăm:

`tần suất (%) = tần số / tổng số quan sát × 100%`

### 3.4. Bảng tần số và bảng tần suất

Quy trình:
1. liệt kê các giá trị khác nhau;
2. đếm số lần xuất hiện;
3. kiểm tra tổng tần số;
4. nếu cần, tính tần suất.

### 3.5. Biểu đồ cột

Phù hợp khi cần:
- so sánh các nhóm;
- nhìn nhanh nhóm lớn nhất, nhỏ nhất;
- so sánh chênh lệch.

Khi đọc biểu đồ cột phải kiểm tra:
- tên biểu đồ;
- trục ngang;
- trục dọc;
- đơn vị;
- thang chia.

### 3.6. Biểu đồ đoạn thẳng

Phù hợp khi dữ liệu thay đổi theo thời gian.

Cần quan sát:
- xu hướng tăng;
- xu hướng giảm;
- điểm cao nhất, thấp nhất;
- đoạn thay đổi mạnh.

### 3.7. Chất lượng dữ liệu

Dữ liệu tốt cần:
- đúng đối tượng;
- đủ số lượng quan sát;
- ghi chép nhất quán;
- không nhầm đơn vị;
- không bỏ sót hoặc đếm trùng.

### 3.8. Bảng chọn cách biểu diễn

| Mục tiêu | Cách biểu diễn phù hợp |
|---|---|
| Đếm số lần xuất hiện | Bảng tần số |
| So sánh các nhóm | Biểu đồ cột |
| Theo dõi theo thời gian | Biểu đồ đoạn thẳng |
| So sánh theo tỉ lệ | Bảng tần suất / phần trăm |

---

## 🔗 4. Kiến thức liên quan

- **Kiến thức nên ôn trước:** [01 – Bản đồ chương trình](../01-ban-do-chuong-trinh/)
- **Liên hệ mạnh:** tỉ số, phần trăm, đọc bảng và biểu đồ.
- **Chuyên đề sử dụng tiếp:** [22 – Các đại lượng đặc trưng của dữ liệu](../22-dai-luong-dac-trung/), [24 – Bài toán thực tế](../24-bai-toan-thuc-te/)

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1. Đọc bảng dữ liệu

Xác định số quan sát, giá trị lớn nhất, nhỏ nhất và số lần xuất hiện.

### Dạng 2. Lập bảng tần số

Đếm chính xác số lần mỗi giá trị xuất hiện và kiểm tra tổng.

### Dạng 3. Tính tần suất

Dùng:

`tần suất = tần số / tổng số quan sát`

### Dạng 4. Đọc biểu đồ cột

So sánh các nhóm, tính chênh lệch và rút ra nhận xét.

### Dạng 5. Đọc biểu đồ đoạn thẳng

Mô tả xu hướng theo thời gian và xác định các giai đoạn tăng/giảm.

### Dạng 6. Chuyển đổi giữa bảng và biểu đồ

Từ bảng → vẽ biểu đồ, hoặc từ biểu đồ → lập lại bảng.

### Dạng 7. Bài toán thực tế từ dữ liệu

Đọc dữ liệu, tính toán rồi viết kết luận phù hợp với ngữ cảnh.

---

## 🚀 6. Dạng bài thi vào lớp 10

Trong đề thi vào 10, thống kê thường xuất hiện ở mức cơ bản đến vận dụng vừa.

Các kỹ năng cần chắc:
1. Đọc đúng bảng hoặc biểu đồ.
2. Tính tần số, tần suất, phần trăm.
3. So sánh hai nhóm dữ liệu.
4. Nhận xét xu hướng.
5. Kết hợp với số trung bình, trung vị ở Chuyên đề 22.

Mức ưu tiên ôn thi: **⭐⭐⭐⭐**.

---

## ⚠️ 7. Lỗi sai thường gặp

| Lỗi sai | Cách tránh |
|---|---|
| Đếm sai tần số | Đánh dấu từng dữ liệu khi đếm |
| Tổng tần số không bằng số quan sát | Luôn kiểm tra dòng tổng |
| Quên nhân `100%` khi tính tần suất phần trăm | Phân biệt tần suất dạng số và dạng % |
| Đọc sai trục biểu đồ | Xem kỹ đơn vị và thang chia |
| Nhầm biểu đồ cột với biểu đồ theo thời gian | Xác định mục tiêu dữ liệu trước |
| Chỉ nêu số mà không kết luận | Viết một câu nhận xét theo ngữ cảnh |

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Tần số là gì?
2. Tần suất được tính như thế nào?
3. Biểu đồ đoạn thẳng phù hợp nhất với loại dữ liệu nào?

### Mức 2 – Thông hiểu

4. Dữ liệu: `6, 7, 8, 8, 9, 8, 7`. Hãy lập bảng tần số.
5. Trong 20 học sinh có 6 học sinh chọn phương án A. Tính tần suất phần trăm.
6. Một biểu đồ cột có các giá trị `12, 18, 15, 20`. Xác định lớn nhất và nhỏ nhất.

### Mức 3 – Vận dụng

7. Từ một bảng tần số, hãy chọn dạng biểu đồ phù hợp và giải thích lựa chọn.
8. Một biểu đồ nhiệt độ theo 7 ngày có xu hướng tăng rồi giảm. Hãy mô tả bằng lời.
9. Từ biểu đồ cột, tính chênh lệch giữa hai nhóm.

### Mức 4 – Tổng hợp

10. Cho dữ liệu khảo sát của một lớp. Hãy lập bảng tần số, tính tần suất, chọn biểu đồ và viết hai nhận xét.
11. Phát hiện một bảng thống kê có tổng tần số không khớp tổng quan sát và nêu cách kiểm tra.

---

## ✅ 9. Tự kiểm tra

Hãy tự trả lời không nhìn tài liệu:

1. Tần số khác tần suất ở điểm nào?
2. Tổng tần số phải bằng đại lượng nào?
3. Công thức tính tần suất phần trăm là gì?
4. Khi nào nên dùng biểu đồ cột?
5. Khi nào nên dùng biểu đồ đoạn thẳng?
6. Khi đọc biểu đồ cần kiểm tra những thành phần nào?
7. Dữ liệu có thể sai do những nguyên nhân nào?
8. Sau khi đọc dữ liệu có nên viết kết luận bằng lời không?

**Tiêu chí đạt:** đúng ít nhất `7/8` câu và hoàn thành được một bài từ dữ liệu thô đến bảng/biểu đồ.

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** [01 – Bản đồ chương trình](../01-ban-do-chuong-trinh/)
- **→ Tiếp theo:** [22 – Các đại lượng đặc trưng](../22-dai-luong-dac-trung/)
- **→ Liên hệ:** [24 – Bài toán thực tế](../24-bai-toan-thuc-te/)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Phân biệt đúng dữ liệu, tần số và tần suất.
- [ ] Lập đúng bảng tần số.
- [ ] Tính đúng tần suất và phần trăm.
- [ ] Đọc chính xác biểu đồ cột và đoạn thẳng.
- [ ] Chọn đúng dạng biểu diễn dữ liệu.
- [ ] Viết được nhận xét có căn cứ.
- [ ] Đạt ít nhất `7/8` câu tự kiểm tra.
