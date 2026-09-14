# Chuẩn hệ thống Luyện tập & Tự kiểm tra – Roadmap Toán THCS

Tài liệu này quy định cách xây `bai-tap.md` và `tu-kiem-tra.md` cho các chuyên đề. Chuẩn được cập nhật sau khi Roadmap đã có **Practice Bank 120 câu/chuyên đề** để tránh trùng lặp giữa luyện tập tương tác và bài tự luận.

---

## 1. Mô hình mini-course

Mỗi chuyên đề khi được mở rộng đầy đủ có:

```text
<so>-<slug>/
├── index.md
├── bai-tap.md
└── tu-kiem-tra.md
```

Luồng học chuẩn:

```text
Bài học
   ↓
Practice Bank 120 câu + tự luận chọn lọc 4 mức
   ↓
Tự kiểm tra
   ↓
Đạt → chuyên đề tiếp theo
Chưa đạt → quay lại đúng dạng còn yếu
```

---

## 2. Vai trò từng file

### `index.md`

- Giải thích kiến thức cốt lõi.
- Giữ cấu trúc chuẩn 11 mục.
- Có ví dụ mẫu và lỗi sai thường gặp.
- Không biến thành kho bài tập lớn.

### `bai-tap.md`

Có hai lớp luyện tập bổ sung cho nhau:

1. **Practice Bank tương tác**: luyện lặp, phản hồi ngay, theo dõi kỹ năng, luyện điểm yếu.
2. **Tự luận chọn lọc**: luyện trình bày, suy luận, mô hình hóa và các lỗi điển hình khó đánh giá bằng trắc nghiệm ngắn.

Trang phải:

- có bài tự luận theo 4 mức;
- có mã bài cố định;
- có đáp án nhanh;
- có hướng dẫn chi tiết cho một số bài đại diện;
- có checklist tiến độ.

### `tu-kiem-tra.md`

- Là bài kiểm tra độc lập.
- Không nên chia đề quá rõ theo dạng nếu việc đó làm lộ phương pháp.
- Có thang điểm 10.
- Có đáp án/hướng dẫn chấm.
- Có thang tự đánh giá.
- Có bảng truy nguyên lỗi.
- Có checklist sau khi chấm.

---

## 3. Quy ước mã bài

Cấu trúc:

```text
[SỐ]-M[MỨC]-[STT]
```

Ví dụ:

```text
08-M1-01
08-M2-05
14-M3-03
19-M4-02
```

Ý nghĩa:

```text
08-M2-05
│  │  └─ bài số 05
│  └──── mức 2
└─────── chuyên đề 08
```

Không đổi mã bài sau khi đã có liên kết tham chiếu, trừ khi bắt buộc.

---

## 4. Bốn mức bài tập và số lượng tự luận

| Mức | Vai trò | Tỉ lệ gợi ý |
|---|---|---:|
| M1 – Nhận biết | Thao tác nền, quy tắc trực tiếp | 20–30% |
| M2 – Thông hiểu | Nhận dạng phương pháp, bài nhiều bước | 25–30% |
| M3 – Vận dụng | Kết hợp kiến thức, bài thực tế | 25–30% |
| M4 – Tổng hợp / ôn thi | Tổng hợp, tham số, mô hình hóa, bài khó hơn | 15–25% |

### Khi chuyên đề đã có Practice Bank 120 câu

Không cần tiếp tục tăng số bài tự luận chỉ để đạt một con số lớn. Bộ tự luận nên **chọn lọc 12–24 bài**, thường khoảng 3–6 bài mỗi mức, và có thể nhiều hơn với chuyên đề rộng hoặc trọng tâm.

Ưu tiên các bài:

- cần trình bày nhiều bước;
- cần chứng minh hoặc giải thích;
- có nhiều cách làm;
- có mô hình hóa thực tế;
- đại diện cho lỗi sai điển hình;
- cần kết hợp nhiều kỹ năng.

### Khi chuyên đề chưa có Practice Bank

Có thể dùng bộ tự luận lớn hơn, khoảng 24–48 bài tùy độ rộng và mức ưu tiên.

> **Nguyên tắc:** số lượng bài phải phục vụ mục tiêu học. Không sao chép hàng loạt bài tương tự nếu Practice Bank đã đảm nhiệm việc luyện lặp.

---

## 5. Đáp án và lời giải

### Đáp án nhanh

- Phải đủ cho toàn bộ bài tự luận chọn lọc.
- Ưu tiên kết quả cuối.
- Ghi điều kiện quan trọng nếu thiếu điều kiện có thể làm sai bản chất.

### Hướng dẫn chọn lọc

- Khoảng 20–30% số bài tự luận.
- Ưu tiên bài đại diện cho phương pháp cốt lõi.
- Ưu tiên bài có lỗi sai điển hình.
- Với bài có nhiều bước, nêu **điểm cần nhớ** hoặc bước tự kiểm tra.
- Không cần giải chi tiết toàn bộ bài tập.

---

## 6. Chuẩn bài tự kiểm tra

Mỗi bài tự kiểm tra nên có:

- thời gian gợi ý;
- tổng 10 điểm;
- 8–12 câu tùy chuyên đề;
- câu nền tảng;
- câu vận dụng;
- ít nhất một câu tổng hợp nếu phù hợp;
- lời giải hoặc hướng dẫn chấm;
- thang tự đánh giá;
- bảng truy nguyên lỗi;
- checklist sau khi chấm.

Ngưỡng gợi ý:

```text
9,0–10   → Hoàn thành tốt
7,0–8,75 → Đạt
5,0–6,75 → Chưa chắc
< 5,0     → Cần củng cố
```

Có thể điều chỉnh theo chuyên đề nhưng phải nêu rõ.

---

## 7. Bảng truy nguyên lỗi

Mục tiêu không chỉ là cho điểm mà phải trả lời:

> “Sai câu này thì quay lại học gì?”

Mỗi câu trong bài tự kiểm tra nên ánh xạ về:

- mục kiến thức trong `index.md`;
- mức hoặc mã bài trong `bai-tap.md`;
- loại lỗi thường gặp nếu có.

Nhóm lỗi chuẩn:

```text
kiến thức
biến đổi
dấu
điều kiện
mô hình hóa
kết luận
trình bày
```

Không phải chuyên đề nào cũng dùng đủ mọi nhóm.

---

## 8. Điều hướng mini-course

Trong `mkdocs.yml`, khi chuyên đề đã có đủ ba trang:

```yaml
- [SỐ]. [TÊN]:
    - Bài học: kien-thuc/[slug]/index.md
    - Luyện tập: kien-thuc/[slug]/bai-tap.md
    - Tự kiểm tra: kien-thuc/[slug]/tu-kiem-tra.md
```

Trong `index.md`:

```markdown
- **✏️ Luyện tập:** [Bài tập Chuyên đề [SỐ]](bai-tap.md)
- **✅ Tự kiểm tra:** [Tự kiểm tra Chuyên đề [SỐ]](tu-kiem-tra.md)
```

Trong `bai-tap.md` phải có link sang `tu-kiem-tra.md`.

Trong `tu-kiem-tra.md` phải có link về bài học, luyện tập và chuyên đề tiếp theo.

---

## 9. Kiểm định trước khi commit

Mỗi chuyên đề mở rộng phải qua ít nhất:

```powershell
git diff --check
python .\validate_practice_bank.py
python .\audit_content_structure.py
python -m mkdocs build --strict
```

Ngoài ra phải kiểm tra:

- mọi đáp án toán học;
- điều kiện xác định;
- dấu bất phương trình;
- đơn vị và điều kiện thực tế;
- tổng điểm bài tự kiểm tra = 10;
- link Markdown đúng;
- không còn câu “sẽ xây dựng” khi trang đã tồn tại.

---

## 10. Nguyên tắc nhân rộng

1. Không sao chép nguyên bài tập từ chuyên đề này sang chuyên đề khác.
2. Sao chép **cấu trúc**, không sao chép nội dung.
3. Mỗi chuyên đề phải có phân bố mức phù hợp bản chất kiến thức.
4. Practice Bank dùng cho luyện lặp; tự luận dùng cho trình bày và suy luận — hai lớp không nên sao chép nhau hàng loạt.
5. Các chuyên đề hình học cần hình vẽ khi đề bài không thể hiểu rõ bằng chữ.
6. Các chuyên đề thống kê/xác suất cần dữ liệu hoặc bảng/biểu đồ đủ rõ.
7. Các bài “ôn thi vào 10” phải được diễn đạt thận trọng theo yêu cầu địa phương, không coi một dạng là bắt buộc xuất hiện trong mọi đề.
8. Chỉ nhân rộng theo từng nhóm nhỏ, kiểm định rồi mới chuyển nhóm tiếp theo.
