# Chuẩn hệ thống Luyện tập & Tự kiểm tra – Roadmap Toán THCS

Tài liệu này quy định cách xây `bai-tap.md` và `tu-kiem-tra.md` cho các chuyên đề sau khi prototype Chuyên đề 08 đã được kiểm chứng.

---

## 1. Mô hình mini-course

Mỗi chuyên đề khi được mở rộng đầy đủ sẽ có:

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
Luyện tập 4 mức
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

- Luyện theo 4 mức.
- Có mã bài cố định.
- Có đáp án nhanh.
- Chỉ chọn một phần bài để hướng dẫn chi tiết.
- Có checklist tiến độ.

### `tu-kiem-tra.md`

- Là bài kiểm tra độc lập.
- Không nên chia đề quá rõ theo dạng nếu việc đó làm lộ phương pháp.
- Có thang điểm 10.
- Có đáp án/hướng dẫn chấm.
- Có bảng truy nguyên lỗi.

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

## 4. Bốn mức bài tập

| Mức | Vai trò | Tỉ lệ gợi ý |
|---|---|---:|
| M1 – Nhận biết | Thao tác nền, quy tắc trực tiếp | 20–30% |
| M2 – Thông hiểu | Nhận dạng phương pháp, bài nhiều bước | 25–30% |
| M3 – Vận dụng | Kết hợp kiến thức, bài thực tế | 25–30% |
| M4 – Tổng hợp / ôn thi | Tổng hợp, tham số, mô hình hóa, bài khó hơn | 15–25% |

Không ép mọi chuyên đề có cùng số bài. Số lượng phụ thuộc độ rộng và mức ưu tiên của chuyên đề.

Gợi ý:
- chuyên đề hẹp: 24–30 bài;
- chuyên đề trung bình: 30–36 bài;
- chuyên đề trọng tâm ⭐⭐⭐⭐⭐: 36–48 bài.

---

## 5. Đáp án và lời giải

### Đáp án nhanh

- Phải đủ cho toàn bộ bài.
- Ưu tiên kết quả cuối.
- Ghi điều kiện quan trọng nếu thiếu điều kiện có thể làm sai bản chất.

### Hướng dẫn chọn lọc

- Khoảng 20–30% số bài.
- Ưu tiên bài đại diện cho phương pháp cốt lõi.
- Ưu tiên bài có lỗi sai điển hình.
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
- bảng truy nguyên lỗi.

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

1. Không sao chép nguyên bài tập từ Chuyên đề 08 sang chuyên đề khác.
2. Sao chép **cấu trúc**, không sao chép nội dung.
3. Mỗi chuyên đề phải có phân bố mức phù hợp bản chất kiến thức.
4. Các chuyên đề hình học cần hình vẽ khi đề bài không thể hiểu rõ bằng chữ.
5. Các chuyên đề thống kê/xác suất cần dữ liệu hoặc bảng/biểu đồ đủ rõ.
6. Các bài “ôn thi vào 10” phải được diễn đạt thận trọng theo yêu cầu địa phương, không coi một dạng là bắt buộc xuất hiện trong mọi đề.
7. Chỉ nhân rộng theo từng nhóm nhỏ, kiểm định rồi mới chuyển nhóm tiếp theo.
