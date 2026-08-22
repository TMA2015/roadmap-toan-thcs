# Chuyên đề 18 – Hệ thức lượng trong tam giác vuông

> **Trạng thái:** Nội dung cốt lõi đã hoàn thiện theo cấu trúc Roadmap.
>
> **Lớp trọng tâm:** 9  
> **Mạch kiến thức:** Hình học/Đo lường  
> **Mức ưu tiên:** ⭐⭐⭐⭐⭐

---

## 🧭 1. Bản đồ kiến thức

```text
HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG
│
├── Định lý Pythagore
│   └── a² + b² = c²
│
├── Đường cao xuống cạnh huyền
│   ├── cạnh góc vuông² = hình chiếu × cạnh huyền
│   ├── đường cao² = tích hai hình chiếu
│   └── tích hai cạnh góc vuông = đường cao × cạnh huyền
│
├── Tỉ số lượng giác
│   ├── sin = đối / huyền
│   ├── cos = kề / huyền
│   └── tan = đối / kề
│
└── Bài toán thực tế
    └── góc nâng, góc hạ, chiều cao, khoảng cách
```

Mạch tư duy trọng tâm:

**nhận ra tam giác vuông → chọn hệ thức phù hợp → lập công thức đúng → kiểm tra đơn vị và tính hợp lý.**

---

## Minh họa trực quan

### 1. Đường cao trong tam giác vuông

<p align="center">
  <img src="../../assets/geometry/18/18-duong-cao-canh-huyen.svg"
       alt="Minh họa đường cao trong tam giác vuông"
       width="500">
</p>

Xét tam giác vuông `ABC`, vuông tại `A`, đường cao `AH` hạ xuống cạnh huyền `BC`.

Các hệ thức quan trọng:

`AB² = BH × BC`

`AC² = CH × BC`

`AH² = BH × CH`

`AB × AC = AH × BC`

> Khi bài toán có tam giác vuông và đường cao xuống cạnh huyền, nên nghĩ ngay đến nhóm hệ thức này.

---

### 2. Tỉ số lượng giác của góc nhọn

<p align="center">
  <img src="../../assets/geometry/18/18-ti-so-luong-giac.svg"
       alt="Minh họa các tỉ số lượng giác trong tam giác vuông"
       width="520">
</p>

Với một góc nhọn `α` trong tam giác vuông:

| Tỉ số | Công thức |
|---|---|
| Sin | `sin α = cạnh đối / cạnh huyền` |
| Cos | `cos α = cạnh kề / cạnh huyền` |
| Tan | `tan α = cạnh đối / cạnh kề` |

Mẹo nhớ:

- `sin` → đối / huyền;
- `cos` → kề / huyền;
- `tan` → đối / kề.

---

### 3. Góc nâng và góc hạ

<p align="center">
  <img src="../../assets/geometry/18/18-goc-nang-goc-ha.svg"
       alt="Minh họa góc nâng và góc hạ"
       width="520">
</p>

> Góc nâng là góc tạo bởi tia nhìn lên và phương ngang. Góc hạ là góc tạo bởi tia nhìn xuống và phương ngang.

Dạng bài thường gặp:

- tính chiều cao của tòa nhà, cây, cột;
- tính khoảng cách từ người quan sát đến vật;
- tính độ cao khi biết góc nâng và khoảng cách ngang.

Ví dụ, nếu khoảng cách ngang đến chân tòa nhà là `d`, chiều cao cần tìm là `h`, góc nâng là `α` thì:

`tan α = h / d`

suy ra:

`h = d × tan α`

---

### Bảng chọn công cụ nhanh

| Dấu hiệu trong đề | Công cụ nên nghĩ tới |
|---|---|
| Tam giác vuông có đường cao xuống cạnh huyền | Các hệ thức lượng |
| Biết góc và một cạnh, tìm cạnh khác | `sin`, `cos`, `tan` |
| Biết hai cạnh của tam giác vuông | Pythagore |
| Bài toán chiều cao / khoảng cách | Góc nâng, góc hạ + lượng giác |

---

### Mẹo giải bài

- Vẽ hình trước khi thay số.
- Xác định rõ cạnh nào là **đối**, **kề**, **huyền** so với góc đang xét.
- Không dùng nhầm cạnh kề với cạnh huyền.
- Kiểm tra máy tính đang ở chế độ **DEG** khi góc cho theo độ.
- Với bài thực tế, nhớ cộng hoặc trừ chiều cao mắt người quan sát nếu đề có cho.

---

## 🎯 2. Mục tiêu cần đạt

Sau khi hoàn thành chuyên đề, học sinh cần:

- [ ] Nhớ và vận dụng được các hệ thức trong tam giác vuông có đường cao xuống cạnh huyền.
- [ ] Phân biệt đúng cạnh đối, cạnh kề, cạnh huyền theo góc đang xét.
- [ ] Dùng đúng `sin`, `cos`, `tan` để tìm cạnh hoặc góc.
- [ ] Kết hợp Pythagore và lượng giác trong cùng một bài.
- [ ] Giải được bài toán chiều cao, khoảng cách, góc nâng và góc hạ.
- [ ] Biết kiểm tra đơn vị và chế độ DEG trên máy tính.

---

## 📖 3. Kiến thức cốt lõi

### 3.1. Định lý Pythagore

Trong tam giác vuông có hai cạnh góc vuông `a`, `b` và cạnh huyền `c`:

`a² + b² = c²`

Đảo lại, nếu một tam giác có:

`a² + b² = c²`

thì tam giác đó vuông.

### 3.2. Hệ thức với đường cao xuống cạnh huyền

Xét `△ABC` vuông tại `A`, `AH ⟂ BC`.

Ta có:

`AB² = BH × BC`

`AC² = CH × BC`

`AH² = BH × CH`

`AB × AC = AH × BC`

Ngoài ra:

`BH + CH = BC`

Đây là nhóm công thức cần thuộc và nhận ra nhanh.

### 3.3. Tỉ số lượng giác của góc nhọn

Với góc nhọn `α`:

`sin α = cạnh đối / cạnh huyền`

`cos α = cạnh kề / cạnh huyền`

`tan α = cạnh đối / cạnh kề`

Từ đó có thể:
- biết góc và một cạnh → tìm cạnh;
- biết hai cạnh → tìm góc.

### 3.4. Quan hệ giữa các tỉ số

Với góc nhọn `α`:

`sin² α + cos² α = 1`

và khi `cos α ≠ 0`:

`tan α = sin α / cos α`

### 3.5. Góc nâng và góc hạ

Trong bài toán thực tế:
- góc nâng: tia nhìn hướng lên so với phương ngang;
- góc hạ: tia nhìn hướng xuống so với phương ngang.

Ví dụ, với khoảng cách ngang `d`, chiều cao `h`, góc nâng `α`:

`tan α = h/d`

suy ra:

`h = d × tan α`

Nếu điểm quan sát cao hơn mặt đất, cần cộng hoặc trừ chiều cao mắt theo tình huống.

### 3.6. Bảng chọn công cụ

| Dấu hiệu | Công cụ |
|---|---|
| Biết 2 cạnh tam giác vuông | Pythagore |
| Có đường cao xuống cạnh huyền | Nhóm hệ thức lượng |
| Biết góc + 1 cạnh | `sin`, `cos`, `tan` |
| Biết 2 cạnh, cần tìm góc | Tỉ số lượng giác ngược |
| Bài chiều cao / khoảng cách | Góc nâng, góc hạ + lượng giác |

---

## 🔗 4. Kiến thức liên quan

- **Kiến thức nên ôn trước:** [14 – Tam giác](../14-tam-giac/index.md), [17 – Thales và tam giác đồng dạng](../17-thales-dong-dang/index.md)
- **Liên hệ mạnh:** tam giác vuông, Pythagore, đồng dạng.
- **Chuyên đề sử dụng tiếp:** [19 – Đường tròn](../19-duong-tron/index.md), [20 – Hình học tổng hợp](../20-hinh-hoc-tong-hop/index.md), [24 – Bài toán thực tế](../24-bai-toan-thuc-te/index.md)

---

## 🧩 5. Các dạng bài cần nắm vững

### Dạng 1. Tính cạnh bằng Pythagore

### Dạng 2. Tính đoạn bằng hệ thức đường cao

Nhận ra ngay cấu hình `AH ⟂ BC` trong tam giác vuông.

### Dạng 3. Tính cạnh bằng `sin`, `cos`, `tan`

Chọn tỉ số chứa đúng cạnh đã biết và cạnh cần tìm.

### Dạng 4. Tìm góc

Lập một tỉ số lượng giác rồi dùng máy tính ở chế độ DEG.

### Dạng 5. Bài góc nâng – góc hạ

Vẽ lại tam giác vuông từ tình huống thực tế rồi mới thay số.

### Dạng 6. Bài tổng hợp

Kết hợp Pythagore, đồng dạng và lượng giác để tìm nhiều đại lượng liên tiếp.

---

## 🚀 6. Dạng bài thi vào lớp 10

Đây là chuyên đề có mức độ xuất hiện cao trong bài hình và bài toán thực tế.

Các kỹ năng cần chắc:
1. Nhận diện đúng tam giác vuông và cạnh huyền.
2. Dùng hệ thức đường cao để tính đoạn.
3. Dùng lượng giác để tìm cạnh hoặc góc.
4. Giải bài chiều cao / khoảng cách.
5. Kết hợp lượng giác với đường tròn và hình học tổng hợp.

Mức ưu tiên ôn thi: **⭐⭐⭐⭐⭐**.

---

## ⚠️ 7. Lỗi sai thường gặp

| Lỗi sai | Cách tránh |
|---|---|
| Nhầm cạnh đối và cạnh kề | Xác định theo **góc đang xét** |
| Dùng cạnh huyền trong `tan` | `tan = đối/kề`, không có cạnh huyền |
| Dùng sai hình chiếu trong hệ thức | Gắn đúng cạnh góc vuông với hình chiếu của nó |
| Quên `BH + CH = BC` | Ghi cấu hình đầy đủ trước khi tính |
| Máy tính để RAD | Chuyển sang **DEG** |
| Quên chiều cao mắt | Đọc kỹ mô hình thực tế |
| Làm tròn quá sớm | Giữ đủ số đến bước cuối |

---

## 📝 8. Luyện tập

### Mức 1 – Nhận biết

1. Viết định lý Pythagore.
2. Nêu công thức `sin`, `cos`, `tan`.
3. Trong tam giác vuông, cạnh nào luôn đối diện góc vuông?

### Mức 2 – Thông hiểu

4. Tam giác vuông có hai cạnh góc vuông `6 cm`, `8 cm`. Tính cạnh huyền.
5. `AH ⟂ BC`, `BH = 4`, `CH = 9`. Tính `AH`.
6. Với `α = 30°`, cạnh huyền bằng `10 cm`. Tính cạnh đối diện `α`.

### Mức 3 – Vận dụng

7. Biết cạnh kề một góc và góc đó, hãy lập công thức tìm cạnh đối.
8. Một cột cao tạo với điểm quan sát cách chân cột `20 m` góc nâng `35°`. Lập biểu thức tính chiều cao.
9. Dùng hệ thức lượng để tính một cạnh góc vuông khi biết cạnh huyền và hình chiếu tương ứng.

### Mức 4 – Tổng hợp

10. Một tam giác vuông có đường cao xuống cạnh huyền. Từ dữ kiện hai đoạn trên cạnh huyền, tính lần lượt đường cao và hai cạnh góc vuông.
11. Giải một bài thực tế trong đó cần cộng thêm chiều cao mắt người quan sát vào kết quả lượng giác.

---

## ✅ 9. Tự kiểm tra

Hãy tự trả lời không nhìn tài liệu:

1. Pythagore dùng trong tam giác nào?
2. `AH²` bằng tích của hai đoạn nào trên cạnh huyền?
3. `sin α` là tỉ số nào?
4. `tan α` có dùng cạnh huyền không?
5. Khi biết góc và cạnh huyền, muốn tìm cạnh đối nên dùng gì?
6. Khi biết cạnh đối và cạnh kề, muốn tìm góc nên dùng gì?
7. Máy tính cần ở chế độ nào khi góc tính theo độ?
8. Bài chiều cao có thể cần điều chỉnh thêm đại lượng nào ngoài tam giác vuông?

**Tiêu chí đạt:** đúng ít nhất `7/8` câu và giải được một bài lượng giác thực tế.

---

## 🔄 10. Liên kết Roadmap

- **← Trước:** [14 – Tam giác](../14-tam-giac/index.md), [17 – Thales và đồng dạng](../17-thales-dong-dang/index.md)
- **→ Tiếp theo:** [19 – Đường tròn](../19-duong-tron/index.md)
- **→ Liên hệ:** [20 – Hình học tổng hợp](../20-hinh-hoc-tong-hop/index.md), [24 – Bài toán thực tế](../24-bai-toan-thuc-te/index.md)

Xem toàn bộ hệ thống tại [Blueprint 25 chuyên đề](../../roadmap/blueprint-25-chuyen-de.md).

---

## 🏁 11. Điều kiện hoàn thành

Chuyên đề được xem là hoàn thành khi học sinh:

- [ ] Thuộc các hệ thức lượng quan trọng.
- [ ] Phân biệt đúng đối – kề – huyền.
- [ ] Dùng đúng `sin`, `cos`, `tan`.
- [ ] Biết tìm cạnh và góc bằng máy tính.
- [ ] Giải được bài góc nâng / góc hạ.
- [ ] Không quên điều kiện đơn vị và chế độ DEG.
- [ ] Đạt ít nhất `7/8` câu tự kiểm tra.
