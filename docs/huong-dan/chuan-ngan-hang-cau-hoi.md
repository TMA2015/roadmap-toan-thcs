# Chuẩn ngân hàng câu hỏi – Practice Bank v1

Tài liệu này quy định cấu trúc dữ liệu dùng chung cho phần **Luyện tập tương tác** của toàn bộ Roadmap Toán THCS.

## 1. Mục tiêu

Ngân hàng câu hỏi phải:

- dùng được chung với Practice Engine;
- mở rộng được lên hàng trăm câu cho mỗi chuyên đề;
- theo dõi kết quả theo **kỹ năng**, không chỉ theo chương;
- cho phép ưu tiên câu chưa làm, câu từng làm sai và kỹ năng yếu;
- hiển thị kỹ năng theo một **lộ trình cố định, dễ hình dung**;
- hỗ trợ **hình minh họa tùy chọn** cho những câu hình học cần đọc cấu hình;
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

Hình minh họa của bài tập nên đặt tách khỏi dữ liệu:

```text
docs/assets/diagrams/practice/<chuyen-de>/
```

Ưu tiên SVG cho hình học đường nét vì nhẹ, rõ trên màn hình retina và co giãn tốt.

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
  "skill_groups": [
    {
      "id": "bien-doi-co-ban",
      "label": "B. Biến đổi cơ bản",
      "skills": [
        "thu-gon-da-thuc",
        "bo-ngoac-dau"
      ]
    }
  ],
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
| `skill_groups` | Nhóm + thứ tự kỹ năng theo lộ trình học |
| `sources` | Danh sách các chunk JSON |

## 4. `skill_groups` – mini-roadmap kỹ năng

`skill_groups` xác định **thứ tự hiển thị cố định** của bảng tiến độ. Thứ tự này không thay đổi theo điểm số.

Nguyên tắc:

1. Sắp theo **quan hệ kiến thức nền → kiến thức sau**.
2. Trong cùng một nhóm, ưu tiên **dễ/cơ bản → phức tạp/vận dụng**.
3. Không dùng bảng chữ cái làm nguyên tắc chính.
4. Mỗi skill trong `skill_labels` phải xuất hiện **đúng một lần** trong `skill_groups`.
5. Tên nhóm nên giúp học sinh hình dung mạch học, ví dụ:
   - A. Nền tảng số
   - B. Chia hết và số nguyên tố
   - C. Phân số và số hữu tỉ
   - D. Ứng dụng mở rộng

Practice Engine dùng cấu trúc này để hiển thị **mini-roadmap** trong bảng tiến độ.

### Phân biệt hai loại thứ tự

- **Thứ tự hiển thị:** cố định theo `skill_groups`.
- **Thứ tự luyện điểm yếu:** động theo kết quả học tập.

Quy tắc hiện tại của **Luyện điểm yếu**:

1. chỉ xét skill có ít nhất 3 lượt làm;
2. accuracy dưới 75%;
3. accuracy thấp nhất được ưu tiên trước;
4. nếu bằng accuracy, skill có nhiều lượt làm hơn được ưu tiên;
5. mỗi lượt tập trung tối đa 2 skill yếu nhất;
6. nếu có 2 skill, số câu được chia gần đều giữa hai skill.

Nhờ đó bảng tiến độ không bị đảo vị trí liên tục nhưng hệ thống vẫn thích nghi với điểm yếu thực tế.

## 5. Question chunk

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

## 6. Chuẩn một câu hỏi

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

### 6.1. Hình minh họa tùy chọn (`diagram`)

Chỉ thêm hình khi việc đọc cấu hình bằng chữ có nguy cơ gây nhầm hoặc hình là một phần tự nhiên của kỹ năng cần luyện. Các câu nhận biết đơn giản không cần hình.

Ví dụ:

```json
{
  "id": "GEO17V1_041",
  "question": "Trong hình, DE song song với BC. Biết AD = 4, DB = 6, AE = 5. Tính EC.",
  "diagram": {
    "src": "../../diagrams/practice/17/GEO17V1_041.svg",
    "alt": "Tam giác ABC có D trên AB, E trên AC và DE song song BC",
    "caption": "Hình minh họa, không nhất thiết theo tỉ lệ."
  }
}
```

Quy tắc:

1. `diagram` là **tùy chọn**; câu không có trường này hoạt động như trước.
2. `src` phải là đường dẫn local tương đối từ thư mục chứa manifest/chunk; không dùng URL ngoài hoặc `data:` URI.
3. `alt` bắt buộc, mô tả đúng cấu hình hình học cho khả năng truy cập.
4. `caption` tùy chọn; nếu hình không vẽ theo tỉ lệ nên ghi rõ “Hình minh họa, không nhất thiết theo tỉ lệ.”
5. Chấp nhận `.svg`, `.png`, `.jpg`, `.jpeg`, `.webp`; ưu tiên SVG cho hình học.
6. Hình không được vô tình cho biết đáp án bằng cách vẽ đúng tỉ lệ khi đề chỉ cung cấp quan hệ định tính.
7. Nhãn điểm, góc, đường phải rõ trên màn hình nhỏ; tránh trang trí không phục vụ việc đọc đề.
8. Với câu phức tạp, hình được hiển thị ngay dưới đề và trước các phương án.
9. **“Không nhất thiết theo tỉ lệ” chỉ cho phép sai khác về tỉ lệ độ dài hoặc kích thước; không cho phép sai quan hệ hình học cốt lõi.** Nếu đề cho hoặc hình ký hiệu vuông góc, song song, thẳng hàng, tiếp tuyến, điểm thuộc đường tròn, trung điểm, thứ tự điểm hay các quan hệ tương tự thì hình phải thể hiện đúng quan hệ đó về mặt hình học.
10. Không được dùng ký hiệu (ví dụ ô vuông góc) để “che” một hình thực tế vẽ sai quan hệ. Ký hiệu và tọa độ/đường nét của SVG phải nhất quán với nhau.
11. Với các cấu hình nhạy cảm như tiếp tuyến–bán kính, đường cao tam giác vuông, tứ giác nội tiếp, dây/cát tuyến, Thales/đồng dạng, cần có QA hình học riêng trước khi phát hành.

## 7. Quy tắc ID

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

## 8. Tag

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

Practice Engine dùng `skill` để tính tỉ lệ đúng, cho phép bấm luyện riêng và xác định **Luyện điểm yếu**.

## 9. Độ khó

Chỉ dùng ba mức:

| Giá trị | Ý nghĩa |
|---|---|
| `basic` | Nhận biết, thao tác một bước |
| `intermediate` | Kết hợp 2–3 thao tác hoặc dễ sai dấu |
| `advanced` | Vận dụng, nhiều bước hoặc bài toán thực tế |

Độ khó là thuộc tính của **câu hỏi**, không phải của toàn bộ kỹ năng.

## 10. Phương án nhiễu

Một câu trắc nghiệm chuẩn nên có 4 phương án. Phương án sai không được tạo ngẫu nhiên vô nghĩa mà nên phản ánh **lỗi sai thật của học sinh**, ví dụ:

- quên đổi dấu khi bỏ ngoặc;
- gộp hạng tử không đồng dạng;
- quên nhân một hạng tử;
- sai dấu khi thay số âm;
- quên điều kiện mẫu khác 0.

Nhờ đó, một câu sai vẫn cung cấp thông tin học tập có ích.

## 11. Lời giải

`explanation` phải:

- ngắn, thường 1–3 bước;
- chỉ ra quy tắc then chốt;
- đủ để học sinh tự sửa lỗi;
- không chỉ ghi lại đáp án đúng.

## 12. Quy tắc chất lượng trước khi phát hành

Mỗi ngân hàng phải được kiểm tra:

- không trùng ID;
- đủ 4 phương án và không trùng phương án;
- `answer` nằm trong phạm vi phương án;
- mọi `skill` đều có trong `skill_labels` của manifest;
- mọi skill được xếp đúng một lần trong `skill_groups`;
- không trùng `skill_groups.id`;
- `question_count` đúng với tổng số câu từ các chunk;
- công thức MathJax hiển thị đúng;
- câu hỏi và lời giải không mâu thuẫn;
- đáp án nhiễu có ý nghĩa;
- phân bố câu hỏi không quá lệch về một kỹ năng;
- nếu có `diagram`: file tồn tại, đường dẫn local hợp lệ, có `alt`, hình không làm lộ đáp án, và **mọi quan hệ hình học cốt lõi trong hình phải đúng với đề bài/giả thiết**;
- với một đợt bổ sung nhiều hình, nên có gallery QA để rà trực quan toàn bộ diagram và semantic check cho các họ hình nhạy cảm.

## 13. Mục tiêu quy mô

Trong giai đoạn hiện tại:

- chuyên đề nền tảng: khoảng **80–150 câu**;
- chuyên đề trọng tâm thi vào 10: có thể **150–300 câu**;
- mỗi lượt học sinh chỉ làm khoảng **10 câu**, được lấy thích nghi từ ngân hàng lớn.


## 14. Metadata chương trình và mục tiêu học tập

Từ phiên bản mở rộng 2026, ngân hàng câu hỏi phân biệt rõ **kiến thức cốt lõi theo SGK Kết nối tri thức**, **ôn thi vào 10** và **mở rộng thi chuyên**. Ba lớp này không được trộn thành một mức độ khó duy nhất.

Các trường dưới đây là **tùy chọn** để tương thích ngược với toàn bộ ngân hàng hiện có:

```json
{
  "curriculum": {
    "book": "KNTT",
    "grades": [7, 8],
    "level": "core"
  },
  "exam": {
    "entrance10": "foundation",
    "specialized": "none"
  }
}
```

### 14.1. `curriculum.level`

Chỉ dùng:

| Giá trị | Ý nghĩa |
|---|---|
| `core` | Kiến thức/kỹ năng cốt lõi theo Kết nối tri thức |
| `extension` | Mở rộng từ kiến thức cốt lõi, không bắt buộc với mọi học sinh |

### 14.2. `exam.entrance10`

Khuyến nghị dùng:

- `none`: không có mục tiêu trực tiếp cho thi vào 10;
- `foundation`: kiến thức nền thường được dùng trong bài thi;
- `direct`: dạng bài có liên hệ trực tiếp với ôn thi vào 10.

### 14.3. `exam.specialized`

Khuyến nghị dùng:

- `none`: không phải nội dung thi chuyên;
- `foundation`: kiến thức nền phục vụ bài chuyên;
- `challenge`: bài mở rộng/toán chuyên.

**Nguyên tắc:** `specialized: challenge` không được hiểu là kiến thức cốt lõi của KNTT và không được dùng để chặn tiến độ học chương trình chính.

## 15. Gợi ý nhiều tầng (`hints`)

Một câu hỏi có thể khai báo danh sách gợi ý theo thứ tự từ ít tiết lộ đến cụ thể hơn:

```json
{
  "question": "Thu gọn \\(3x^2+4x+1-x^2-2x\\).",
  "hints": [
    "Nhóm riêng các hạng tử chứa x^2, các hạng tử chứa x và hằng số.",
    "Ta có 3x^2-x^2=2x^2 và 4x-2x=2x."
  ]
}
```

Quy tắc biên soạn:

1. Gợi ý 1 chỉ nhắc hướng hoặc kiến thức cần dùng, không cho đáp án.
2. Gợi ý 2 có thể cụ thể hơn nhưng vẫn ưu tiên để học sinh tự hoàn thành bước cuối.
3. Không sao chép nguyên `explanation` vào `hints`.
4. Không bắt buộc mọi câu đều có gợi ý; ưu tiên câu nhiều bước, câu dễ mắc lỗi hoặc câu vận dụng.
5. Practice Engine ghi lại số gợi ý đã xem cho từng lần làm để sau này có thể phân biệt:
   - đúng không cần gợi ý;
   - đúng sau gợi ý;
   - sai dù đã dùng gợi ý.
6. Accuracy hiện tại vẫn giữ cách tính cũ để không làm thay đổi đột ngột dữ liệu người học; dữ liệu hint là lớp thông tin bổ sung cho Mastery Model sau này.

## 16. Nguyên tắc ba tầng nội dung

Khi xây câu hỏi mới, luôn xác định câu hỏi thuộc một trong ba mục tiêu:

1. **KNTT Core** – ưu tiên cao nhất, phải phủ đủ yêu cầu cốt lõi.
2. **Vào 10** – luyện dạng bài và kỹ năng tổng hợp dựa trên kiến thức core.
3. **Chuyên / Challenge** – mở rộng cho học sinh khá giỏi; tuyệt đối không biến thành điều kiện bắt buộc để hoàn thành Roadmap.

Một câu có thể vừa là KNTT Core vừa có giá trị cho Vào 10. Tuy nhiên **Toán chuyên luôn là lớp mở rộng**, không được gộp vào Core chỉ vì cùng sử dụng kiến thức nền.


## 17. Learner Evidence → Remediation

Practice Engine có thể dùng Knowledge Graph để đề nghị ôn kiến thức nền, nhưng phải tuân thủ:

1. Không chẩn đoán từ một câu sai đơn lẻ.
2. Skill đích chỉ được xem là yếu khi có ít nhất **3 lượt** và accuracy dưới **75%**.
3. Chỉ gọi một prerequisite là điểm yếu khi prerequisite đó cũng có ít nhất **3 lượt** evidence.
4. Nếu prerequisite chưa đủ evidence, hệ thống không được khẳng định đó là nguyên nhân.
5. Hint usage là evidence bổ sung; accuracy vẫn giữ tương thích với dữ liệu cũ.
6. Recommendation không phải hard gate: học sinh luôn có thể tiếp tục.
7. Chỉ edge `PREREQUISITE` confidence cao và remediation rule đã review mới được dùng cho chẩn đoán tự động; `SEQUENCE`/`CROSS_LINK` không được coi là nguyên nhân mặc định.
8. Chẩn đoán chạy local, không yêu cầu AI/API.
