# Capability Benchmark – Phân công Gemini & ChatGPT theo dữ liệu

## Mục tiêu

Không tìm một “AI tốt nhất” cho toàn dự án.

Mục tiêu là xác định:

> **Với từng loại công việc, AI nào nên làm Lead, AI nào nên làm Reviewer, và khi nào phải dùng hai AI độc lập.**

Kết quả benchmark có thể thay đổi theo thời gian/model, vì vậy đây là một hệ thống **có thể cập nhật**, không phải nhãn cố định.

## 1. Nhóm năng lực cần đo

| Nhóm | Ví dụ task | Chỉ số chính |
|---|---|---|
| Giải toán cơ bản | đại số, số học | đúng đáp án, ít lỗi biến đổi |
| Hình học suy luận | chứng minh, giao điểm, diện tích | đúng logic, không suy diễn từ hình |
| Toán nâng cao/chuyên | BĐT, số học, tổ hợp | độ đúng + độ chặt |
| Sư phạm | giải thích khái niệm | dễ hiểu, đúng mức tuổi, không bỏ bản chất |
| Biên soạn câu hỏi | MCQ/tự luận | chất lượng distractor, không mơ hồ |
| Hint | gợi ý nhiều tầng | hữu ích nhưng không lộ lời giải |
| Curriculum mapping | KNTT → skill | đúng phạm vi, không trộn lớp/tầng |
| Diagram spec | mô tả quan hệ hình học | đủ và chính xác |
| SVG/technical integration | schema/code/GitHub | build pass, ít regression |
| QA/review | tìm lỗi trong draft | recall lỗi + false alarm thấp |

## 2. Bộ benchmark tối thiểu

Mỗi nhóm nên có ít nhất **5–10 task đại diện** trước khi rút ra xu hướng.

Không dùng một bài đơn lẻ để kết luận AI nào “giỏi hơn” một lĩnh vực.

### Với bài toán

Hai AI nhận cùng đề nhưng **không thấy lời giải của nhau**.

### Với biên soạn

Hai AI nhận cùng brief và cùng giới hạn nội dung.

### Với review

Hai AI nhận cùng draft có cài sẵn một số lỗi đã biết khi phù hợp.

## 3. Chấm theo tiêu chí

Mỗi task đánh giá các tiêu chí phù hợp:

- **Correctness** – đúng toán/nội dung.
- **Completeness** – không bỏ điều kiện/bước thiết yếu.
- **Pedagogy** – phù hợp học sinh.
- **Clarity** – rõ, gọn, có cấu trúc.
- **Consistency** – bám chuẩn dự án.
- **Integration cost** – ChatGPT phải sửa bao nhiêu trước khi publish.
- **Hallucination risk** – có tự thêm dữ kiện/nguồn/cấu trúc không tồn tại hay không.

Không nhất thiết cộng thành một điểm tổng. Có thể giữ **profile theo năng lực**.

## 4. Ma trận phân công động

Sau benchmark, mỗi capability được gắn một trạng thái:

- `GEMINI_LEAD`
- `CHATGPT_LEAD`
- `DUAL_INDEPENDENT`
- `EITHER_WITH_REVIEW`

Ví dụ hiện tại của dự án, trước khi benchmark đầy đủ:

- sư phạm/biên soạn: **Gemini Lead + ChatGPT review**;
- GitHub/schema/integration: **ChatGPT Lead**;
- hình học khó: **Dual Independent**;
- SVG + semantic QA: **ChatGPT Lead + academic review khi cần**.

Đây là **working hypothesis**, không phải kết luận vĩnh viễn.

## 5. Regression benchmark

Những lỗi từng xảy ra nên trở thành benchmark cố định.

Ví dụ hiện có:

- `BENCH-GEO-001`: hình chữ nhật, trung điểm, giao điểm, diện tích BMEN = 32.

Khi thay đổi cách dựng hình hoặc quy trình giải, benchmark cũ phải tiếp tục PASS.

## 6. Ghi kết quả

Kết quả benchmark nên lưu dưới dạng dữ liệu, ví dụ:

```json
{
  "capability": "geometry-proof",
  "sample_size": 10,
  "gemini": {
    "correct": 9,
    "major_errors": 1
  },
  "chatgpt": {
    "correct": 8,
    "major_errors": 2
  },
  "routing": "DUAL_INDEPENDENT"
}
```

Không suy diễn từ số mẫu nhỏ sang mọi loại bài.

## 7. Khi nào thay đổi phân công

Cập nhật routing khi:

- model/version thay đổi đáng kể;
- có ít nhất vài task mới cho thấy xu hướng cũ không còn đúng;
- integration cost tăng rõ;
- xuất hiện loại task mới.

Người quản lý dự án có quyền override routing nếu trải nghiệm thực tế cho thấy cần thay đổi.
