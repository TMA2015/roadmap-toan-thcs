# Chuẩn ngân hàng câu hỏi – Practice Bank v1

Tài liệu này quy định cấu trúc dữ liệu dùng chung cho phần **Luyện tập tương tác** của toàn bộ Roadmap Toán THCS.

## 1. Mục tiêu

Ngân hàng câu hỏi phải:

- dùng được chung với Practice Engine;
- mở rộng được lên hàng trăm câu cho mỗi chuyên đề;
- theo dõi kết quả theo **kỹ năng**, không chỉ theo chương;
- cho phép ưu tiên câu chưa làm, câu từng làm sai và kỹ năng yếu;
- dễ kiểm định, sửa lỗi và chia nhỏ để nhiều người có thể biên soạn độc lập.

## 2. Cấu trúc thư mục

Mỗi chuyên đề lớn dùng một **manifest** và một hoặc nhiều **question chunk**.

```text
docs/assets/data/practice/
├── 04-bieu-thuc-dai-so-v2.manifest.json
├── 04-bieu-thuc-dai-so-v2-01.json
├── 04-bieu-thuc-dai-so-v2-02.json
├── 04-bieu-thuc-dai-so-v2-03.json
└── 04-bieu-thuc-dai-so-v2-04.json
```

Không nên để quá nhiều câu trong một tệp. Khuyến nghị **25–50 câu/chunk**.

## 3. Manifest

Ví dụ:

```json
{
  "version": 2,
  "schema": "practice-bank-manifest-v1",
  "bank_id": "ALG04-V2",
  "topic": {
    "id": "04-bieu-thuc-dai-so",
    "title": "Biểu thức đại số"
  },
  "session_size": 10,
  "question_count": 120,
  "skill_labels": {
    "thu-gon-da-thuc": "Thu gọn đa thức",
    "bo-ngoac-dau": "Bỏ ngoặc và dấu"
  },
  "sources": [
    "04-bieu-thuc-dai-so-v2-01.json",
    "04-bieu-thuc-dai-so-v2-02.json"
  ]
}
```

### Trường bắt buộc

| Trường | Ý nghĩa |
|---|---|
| `schema` | Luôn là `practice-bank-manifest-v1` |
| `bank_id` | ID duy nhất của ngân hàng |
| `topic.id` | ID chuyên đề |
| `topic.title` | Tên chuyên đề |
| `session_size` | Số câu mặc định mỗi lượt |
| `question_count` | Tổng số câu dự kiến |
| `skill_labels` | Tên hiển thị của từng skill tag |
| `sources` | Danh sách các chunk JSON |

## 4. Question chunk

```json
{
  "version": 2,
  "schema": "practice-question-chunk-v1",
  "bank_id": "ALG04-V2-01",
  "topic": {
    "id": "04-bieu-thuc-dai-so",
    "title": "Biểu thức đại số"
  },
  "questions": []
}
```

## 5. Chuẩn một câu hỏi

```json
{
  "id": "ALG04V2_001",
  "question": "Thu gọn \\(3x+5x-2\\).",
  "options": [
    "\\(8x-2\\)",
    "\\(8x+2\\)",
    "\\(15x-2\\)",
    "\\(2x-2\\)"
  ],
  "answer": 0,
  "tags": {
    "topic": "bieu-thuc-dai-so",
    "skill": [
      "thu-gon-da-thuc",
      "hang-tu-dong-dang"
    ],
    "type": "thu-gon"
  },
  "difficulty": "basic",
  "explanation": "Chỉ gộp các hạng tử đồng dạng: \\(3x+5x=8x\\)."
}
```

## 6. Quy tắc ID

Mẫu khuyến nghị:

```text
<MẠCH><CHUYÊN_ĐỀ><VERSION>_<SỐ_THỨ_TỰ>
```

Ví dụ:

```text
ALG04V2_001
ALG04V2_002
GEO14V1_001
```

ID phải **duy nhất và không đổi** sau khi câu hỏi đã được phát hành. Nếu thay đổi bản chất câu hỏi, nên tạo ID mới.

## 7. Tag

Mỗi câu phải có tối thiểu ba lớp tag:

- `topic`: chuyên đề lớn;
- `skill`: một hoặc nhiều kỹ năng thực sự được kiểm tra;
- `type`: dạng bài.

### Nguyên tắc quan trọng

`skill` phải đủ nhỏ để có giá trị chẩn đoán. Không dùng tên chương làm skill.

Ví dụ tốt:

```text
thu-gon-da-thuc
bo-ngoac-dau
tinh-gia-tri-bieu-thuc
dieu-kien-xac-dinh
```

Ví dụ quá rộng:

```text
dai-so
bieu-thuc
lop-8
```

Practice Engine dùng `skill` để tính tỉ lệ đúng và xác định **Luyện điểm yếu**.

## 8. Độ khó

Chỉ dùng ba mức:

| Giá trị | Ý nghĩa |
|---|---|
| `basic` | Nhận biết, thao tác một bước |
| `intermediate` | Kết hợp 2–3 thao tác hoặc dễ sai dấu |
| `advanced` | Vận dụng, nhiều bước hoặc bài toán thực tế |

Độ khó là thuộc tính của **câu hỏi**, không phải của toàn bộ kỹ năng.

## 9. Phương án nhiễu

Một câu trắc nghiệm chuẩn nên có 4 phương án. Phương án sai không được tạo ngẫu nhiên vô nghĩa mà nên phản ánh **lỗi sai thật của học sinh**, ví dụ:

- quên đổi dấu khi bỏ ngoặc;
- gộp hạng tử không đồng dạng;
- quên nhân một hạng tử;
- sai dấu khi thay số âm;
- quên điều kiện mẫu khác 0.

Nhờ đó, một câu sai vẫn cung cấp thông tin học tập có ích.

## 10. Lời giải

`explanation` phải:

- ngắn, thường 1–3 bước;
- chỉ ra quy tắc then chốt;
- đủ để học sinh tự sửa lỗi;
- không chỉ ghi lại đáp án đúng.

## 11. Quy tắc chất lượng trước khi phát hành

Mỗi ngân hàng phải được kiểm tra:

- không trùng ID;
- đủ 4 phương án và không trùng phương án;
- `answer` nằm trong phạm vi phương án;
- mọi `skill` đều có trong `skill_labels` của manifest;
- `question_count` đúng với tổng số câu từ các chunk;
- công thức MathJax hiển thị đúng;
- câu hỏi và lời giải không mâu thuẫn;
- đáp án nhiễu có ý nghĩa;
- phân bố câu hỏi không quá lệch về một kỹ năng.

## 12. Mục tiêu quy mô

Trong giai đoạn hiện tại:

- chuyên đề nền tảng: khoảng **80–150 câu**;
- chuyên đề trọng tâm thi vào 10: có thể **150–300 câu**;
- mỗi lượt học sinh chỉ làm khoảng **10 câu**, được lấy thích nghi từ ngân hàng lớn.

Như vậy quy mô ngân hàng có thể tăng mà giao diện học sinh vẫn đơn giản.
