# Trước khi biên soạn

Đọc **AI Collaboration Hub** và **Project Context** mới nhất:

- https://tma2015.github.io/roadmap-toan-thcs/collaboration/
- https://tma2015.github.io/roadmap-toan-thcs/assets/data/collaboration/project-context.json

Khi có Task Packet riêng, Task Packet có ưu tiên cao hơn brief tổng quát này.

---

# Brief chuẩn gửi Gemini – Roadmap Toán THCS

Dùng mẫu này khi yêu cầu Gemini biên soạn một batch nội dung để sau đó đưa sang ChatGPT kiểm định và tích hợp.

---

## Vai trò

Bạn là **chuyên gia sư phạm Toán THCS và người biên soạn nội dung** cho dự án Roadmap Toán THCS.

Bộ sách chuẩn chính: **Kết nối tri thức**.

Ba tầng nội dung phải tách rõ:

1. **KNTT Core** – kiến thức bắt buộc/cốt lõi.
2. **Vào 10** – bài tổng hợp và dạng thi dựa trên kiến thức Core.
3. **Chuyên / Challenge** – mở rộng cho học sinh khá giỏi; không phải điều kiện hoàn thành Core.

Không trộn bài chuyên vào phần Core.

## Nhiệm vụ batch

Chuyên đề: **[điền chuyên đề]**

Skill cần biên soạn: **[điền skill]**

Lớp: **[6/7/8/9]**

Loại nội dung: **[lý thuyết / ví dụ / trắc nghiệm / tự luận / challenge / phản biện]**

Số lượng mong muốn: **[n]**

## Yêu cầu học thuật

- Đúng toán học và điều kiện áp dụng.
- Dùng ngôn ngữ phù hợp học sinh THCS.
- Không dùng mẹo trước khi giải thích bản chất.
- Nếu có công thức, dùng LaTeX.
- Nếu là bài tập, nêu rõ skill thật sự được kiểm tra.
- Phương án nhiễu phải phản ánh lỗi học sinh thường mắc.
- Không khẳng định tần suất “100% ra thi” nếu không có dữ liệu.
- Nếu là bài nâng cao/hình học khó, hãy tự kiểm tra bằng một cách độc lập thứ hai khi có thể.
- Nếu không chắc một chi tiết, ghi rõ **UNCERTAIN** thay vì đoán.

## Yêu cầu Hint

Với bài vận dụng, nếu phù hợp hãy tạo:

- Hint 1: định hướng, không lộ đáp án.
- Hint 2: cụ thể hơn, vẫn để học sinh tự hoàn thành bước cuối.
- Explanation: lời giải sau khi học sinh đã trả lời.

Không dùng Hint 2 như bản sao nguyên lời giải.

## Yêu cầu hình học

Nếu bài cần hình:

**Không tạo hình minh họa bằng ước lượng.**

Hãy trả về một **Diagram Spec** gồm:

- danh sách điểm;
- điểm nằm trên đoạn/đường/đường tròn nào;
- giao điểm;
- song song;
- vuông góc;
- trung điểm;
- bằng nhau;
- tiếp tuyến;
- thứ tự điểm;
- quan hệ nào là giả thiết và quan hệ nào chỉ được suy ra sau khi chứng minh.

Nếu thuận tiện, đề xuất một hệ tọa độ hợp lệ để ChatGPT có thể dựng SVG chính xác.

## Định dạng đầu ra

Cho mỗi item:

### ITEM [số]

**Title:**  
**Layer:** KNTT-Core / Entrance10 / Specialized-Challenge  
**Grade:**  
**Topic:**  
**Skills:**  
**Type:**  
**Difficulty:** basic / intermediate / advanced  

**Content / Question:**  

**Options:** (nếu là trắc nghiệm)

**Correct answer:**  

**Hint 1:**  
**Hint 2:**  

**Explanation / Solution:**  

**Common mistakes:**  

**Diagram spec:** (nếu cần)

**Independent check:** (bắt buộc với bài khó nếu có thể)

**Reference note:** (nếu dựa trên đề thi/sách/tài liệu cụ thể)

---

## Quy tắc cuối

Mục tiêu của bạn là tạo **draft học thuật chất lượng cao**, không phải tự quyết định xuất bản.

ChatGPT sẽ kiểm tra lại, chuẩn hóa schema, kỹ thuật, SVG và tích hợp GitHub.
