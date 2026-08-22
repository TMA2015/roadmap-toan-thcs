# Chuyên đề 20 – Hình học tổng hợp, đo lường và hình khối

> **Trạng thái:** Nội dung cốt lõi đã hoàn thiện theo cấu trúc Roadmap.
>
> **Lớp trọng tâm:** 6–9  
> **Mạch kiến thức:** Hình học/Đo lường  
> **Mức ưu tiên:** ⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

```text
HÌNH HỌC TỔNG HỢP
│
├── Góc và đường thẳng
│   └── song song • vuông góc • góc bằng nhau
│
├── Tam giác
│   ├── bằng nhau
│   ├── đồng dạng
│   └── đường đặc biệt
│
├── Tứ giác
│   └── bình hành • chữ nhật • thoi • vuông • nội tiếp
│
├── Tam giác vuông
│   └── Pythagore • hệ thức lượng • lượng giác
│
├── Đường tròn
│   └── góc nội tiếp • tiếp tuyến • hệ thức tích
│
└── Hình khối & đo lường
    └── diện tích • thể tích • bài toán thực tế
```

Mạch tư duy trọng tâm:

**đọc giả thiết → đánh dấu quan hệ → tìm cấu hình quen thuộc → tạo kết quả trung gian → nối các kết quả thành chuỗi chứng minh.**

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

- [ ] Nhận ra được cấu hình hình học quen thuộc trong một bài tổng hợp.
- [ ] Biết chọn công cụ phù hợp giữa đồng dạng, nội tiếp, tiếp tuyến, Thales và hệ thức lượng.
- [ ] Xây dựng được chuỗi suy luận gồm nhiều bước trung gian.
- [ ] Chứng minh được quan hệ góc, song song, vuông góc, đồng dạng, nội tiếp.
- [ ] Chứng minh và tính được các hệ thức độ dài.
- [ ] Giải được bài đo lường và hình khối cơ bản.
- [ ] Trình bày bài chứng minh có lý do rõ ràng ở từng bước.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Nguyên tắc giải bài hình học tổng hợp

Một bài tổng hợp thường không dùng một định lý duy nhất. Cần ghép nhiều mảnh kiến thức.

Quy trình nên dùng:

1. Đọc kỹ giả thiết và kết luận.
2. Đánh dấu song song, vuông góc, trung điểm, tiếp tuyến, đường kính.
3. Tìm tam giác có khả năng đồng dạng.
4. Kiểm tra khả năng xuất hiện tứ giác nội tiếp.
5. Tìm các tỉ số hoặc hệ thức trung gian.
6. Chỉ sau đó mới hướng tới kết luận cuối.

### 3.2. Các “cầu nối” thường gặp

**Từ song song đến đồng dạng**

`DE ∥ BC`

→ góc tương ứng bằng nhau

→ hai tam giác đồng dạng

→ suy ra tỉ số cạnh.

**Từ hai góc vuông đến nội tiếp**

Nếu:

`∠AEB = ∠AFB = 90°`

thì `E`, `F` cùng nằm trên đường tròn đường kính `AB`.

**Từ đồng dạng đến hệ thức tích**

Nếu:

`AB/AC = AD/AE`

thì có thể biến đổi thành:

`AB × AE = AC × AD`

### 3.3. Chiến lược chứng minh tứ giác nội tiếp

Các dấu hiệu ưu tiên:

- tổng hai góc đối bằng `180°`;
- hai góc bằng nhau cùng chắn một đoạn;
- hai góc vuông cùng nhìn một đoạn;
- bốn điểm cùng nằm trên đường tròn có đường kính xác định.

### 3.4. Chiến lược chứng minh tiếp tuyến

Muốn chứng minh đường thẳng `d` là tiếp tuyến tại `A`, thường chứng minh:

`OA ⟂ d`

với `A` thuộc đường tròn tâm `O`.

Trong bài khó, quan hệ vuông góc này thường được suy ra từ:
- góc nội tiếp;
- tam giác đồng dạng;
- tổng góc;
- tứ giác nội tiếp.

### 3.5. Chiến lược chứng minh hệ thức độ dài

Nếu cần chứng minh dạng:

`AB × CD = EF × GH`

hãy thử:

1. biến thành một tỉ lệ;
2. tìm hai tam giác đồng dạng tạo ra tỉ lệ đó;
3. hoặc kiểm tra cấu hình hai dây cắt nhau / tiếp tuyến – cát tuyến.

### 3.6. Đo lường và hình khối

Một số công thức cần nhớ:

**Hình chữ nhật**

`S = a × b`

**Tam giác**

`S = 1/2 × a × h`

**Hình tròn**

`S = πr²`

`C = 2πr`

**Lăng trụ đứng**

`V = S_đáy × h`

**Hình hộp chữ nhật**

`V = a × b × c`

Khi giải bài thực tế, luôn ghi đơn vị diện tích hoặc thể tích.

### 3.7. Bảng chọn chiến lược

| Mục tiêu | Hướng ưu tiên |
|---|---|
| Chứng minh hai góc bằng nhau | Nội tiếp, đồng dạng |
| Chứng minh song song | Góc so le trong, Thales đảo |
| Chứng minh vuông góc | Góc 90°, bán kính – tiếp tuyến |
| Chứng minh nội tiếp | Hai góc đối bù / hai góc bằng nhau |
| Chứng minh hệ thức tích | Đồng dạng / hai dây / tiếp tuyến–cát tuyến |
| Tính độ dài | Đồng dạng / Pythagore / lượng giác |
| Tính diện tích, thể tích | Chọn đúng công thức và đơn vị |

---

## 🔗 4. Kiến thức liên quan

- **Kiến thức nên ôn trước:** [14 – Tam giác](../14-tam-giac/index.md), [15 – Các đường đồng quy](../15-duong-dong-quy/index.md), [16 – Tứ giác](../16-tu-giac/index.md), [17 – Thales và đồng dạng](../17-thales-dong-dang/index.md), [18 – Hệ thức lượng](../18-he-thuc-luong/index.md), [19 – Đường tròn](../19-duong-tron/index.md)
- **Chuyên đề sử dụng tiếp:** [24 – Bài toán thực tế](../24-bai-toan-thuc-te/index.md), [25 – Tổng hợp ôn thi vào 10](../25-tong-hop-on-thi-10/index.md)

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1. Chứng minh tứ giác nội tiếp

Tìm hai góc đối bù, hai góc bằng nhau hoặc hai góc vuông.

### Dạng 2. Chứng minh hai tam giác đồng dạng

Thường xuất hiện sau khi đã có các góc bằng nhau từ nội tiếp hoặc song song.

### Dạng 3. Chứng minh tiếp tuyến

Đưa bài toán về chứng minh vuông góc với bán kính tại tiếp điểm.

### Dạng 4. Chứng minh hệ thức tích

Đưa tích về tỉ số và tìm cặp tam giác đồng dạng.

### Dạng 5. Chứng minh song song / vuông góc

Dùng góc bằng nhau, Thales đảo, tính chất tiếp tuyến hoặc nội tiếp.

### Dạng 6. Tính độ dài và góc

Kết hợp đồng dạng, Pythagore, lượng giác, hệ thức đường tròn.

### Dạng 7. Đo lường và hình khối

Tính diện tích, chu vi, thể tích và đổi đơn vị.

### Dạng 8. Bài hình tổng hợp nhiều ý

Mỗi ý thường tạo dữ kiện cho ý sau. Cần tận dụng kết quả đã chứng minh thay vì làm lại từ đầu.

---

## 🚀 6. Dạng bài thi vào lớp 10

Đây là chuyên đề tổng hợp trực tiếp cho phần hình học thi vào 10.

Các nhóm kỹ năng thường xuất hiện:
1. Chứng minh tứ giác nội tiếp.
2. Chứng minh hai tam giác đồng dạng.
3. Chứng minh tiếp tuyến.
4. Chứng minh một hệ thức tích.
5. Tính độ dài, góc hoặc diện tích.
6. Câu cuối phân hóa cần nối nhiều kết quả trung gian.

Mức ưu tiên ôn thi: **⭐⭐⭐⭐⭐**.

---

## ⚠️ 7. Lỗi sai thường gặp

| Lỗi sai | Cách tránh |
|---|---|
| Lao ngay vào kết luận cuối | Tìm các kết quả trung gian trước |
| Viết tam giác đồng dạng sai thứ tự | Đánh dấu đỉnh tương ứng |
| Dùng kết quả chưa chứng minh | Mỗi bước cần lý do |
| Thấy hai góc vuông nhưng không nghĩ đến nội tiếp | Kiểm tra đường tròn đường kính chung |
| Chứng minh tiếp tuyến thiếu điều kiện điểm thuộc đường tròn | Phải đủ cả hai điều kiện |
| Biến đổi hệ thức tích không nhất quán | Viết về một tỉ lệ rõ ràng trước |
| Sai đơn vị diện tích / thể tích | Ghi `cm²`, `m²`, `cm³`, `m³` đúng loại |

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Hai góc vuông cùng nhìn đoạn `AB` gợi đến kết luận gì?
2. Muốn chứng minh tiếp tuyến tại `A`, thường cần chứng minh quan hệ nào?
3. Một hệ thức tích có thể chuyển về dạng gì để tìm tam giác đồng dạng?

### Mức 2 – Thông hiểu

4. Cho `∠ACB = ∠ADB`. Nêu một hướng để chứng minh bốn điểm `A, B, C, D` nội tiếp.
5. Hai tam giác đã đồng dạng. Hãy nêu cách suy ra một hệ thức tích từ tỉ số cạnh.
6. Một hình hộp chữ nhật có kích thước `3 cm`, `4 cm`, `5 cm`. Tính thể tích.

### Mức 3 – Vận dụng

7. Chứng minh một tứ giác nội tiếp rồi dùng các góc nội tiếp để chứng minh hai tam giác đồng dạng.
8. Từ hai tam giác đồng dạng, suy ra một hệ thức tích đoạn thẳng.
9. Chứng minh một đường thẳng là tiếp tuyến sau khi đã có một tứ giác nội tiếp.

### Mức 4 – Tổng hợp

10. Giải một bài gồm chuỗi: nội tiếp → đồng dạng → hệ thức tích.
11. Giải một bài gồm chuỗi: đồng dạng → vuông góc → tiếp tuyến.
12. Một bài toán thực tế yêu cầu tính diện tích hoặc thể tích sau khi tìm một độ dài bằng lượng giác.

---

## ✅ 9. Tự kiểm tra

Hãy tự trả lời không nhìn tài liệu:

1. Hai góc vuông cùng nhìn một đoạn gợi đến định lý nào?
2. Khi cần chứng minh hệ thức tích, nên thử chuyển về dạng gì?
3. Muốn chứng minh tiếp tuyến, thường cần chứng minh gì?
4. Khi thấy nhiều góc bằng nhau, nên nghĩ tới công cụ nào?
5. Khi thấy song song trong tam giác, nên nghĩ tới gì?
6. Khi thấy hai góc đối bù nhau, nên nghĩ tới gì?
7. Một bài hình nhiều ý có nên dùng lại kết quả ý trước không?
8. Diện tích và thể tích khác nhau về đơn vị như thế nào?

**Tiêu chí đạt:** đúng ít nhất `7/8` câu và giải được một bài tổng hợp có ít nhất ba bước suy luận.

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** [14 – Tam giác](../14-tam-giac/index.md) → [19 – Đường tròn](../19-duong-tron/index.md)
- **→ Tiếp theo:** [24 – Bài toán thực tế](../24-bai-toan-thuc-te/index.md)
- **→ Tổng hợp cuối:** [25 – Ôn thi vào 10](../25-tong-hop-on-thi-10/index.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Nhận diện được cấu hình cần dùng trong bài tổng hợp.
- [ ] Xây dựng được chuỗi suy luận ít nhất ba bước.
- [ ] Chứng minh được nội tiếp, đồng dạng và tiếp tuyến.
- [ ] Chứng minh được một hệ thức tích.
- [ ] Tính đúng độ dài, diện tích hoặc thể tích khi bài yêu cầu.
- [ ] Trình bày mỗi kết luận kèm lý do.
- [ ] Đạt ít nhất `7/8` câu tự kiểm tra.
