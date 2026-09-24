# Chuẩn KNTT và các tầng học tập

> Tài liệu này quy định cách Roadmap Toán THCS tổ chức nội dung từ năm học 2026–2027: **Kết nối tri thức** là bộ sách giáo khoa chuẩn chính; ôn thi vào 10 và thi chuyên là các tầng mục tiêu được xây trên cùng nền kiến thức nhưng không trộn lẫn.

## 1. Vertical Spine trước, metadata sau

Roadmap không ưu tiên một **khối lớp** làm cấu trúc chính. Xương sống là mạch kiến thức dọc của 25 chuyên đề.

KNTT, Vào 10 và Chuyên/Challenge là các **lớp metadata/mục tiêu** đặt lên cùng hệ thống kiến thức để học sinh có thể nhìn nội dung theo tiến độ trường học, mục tiêu thi cử hoặc mở rộng.

[Xem triết lý mạch kiến thức dọc](triet-ly-mach-kien-thuc-doc.md)

### 📘 KNTT Core

Đây là lớp metadata xác nhận kiến thức/kỹ năng cốt lõi theo Kết nối tri thức.

- Bám kiến thức và yêu cầu học tập của bộ **Kết nối tri thức**.
- Dùng để xây nền Toán THCS lớp 6–9.
- Là cơ sở cho mọi bài luyện tập, đánh giá và lộ trình tiến bộ.
- Học sinh không cần hoàn thành nội dung thi chuyên để được coi là hoàn thành một chuyên đề Core.

### 🎯 Vào 10

Đây là tầng ôn luyện theo mục tiêu tuyển sinh.

- Dùng lại kiến thức Core nhưng tăng mức tổng hợp, tốc độ và khả năng nhận dạng dạng bài.
- Trọng số dạng bài phải được điều chỉnh dựa trên đề thi thật theo năm/địa phương, không dùng khẳng định tuyệt đối như “luôn ra” nếu chưa có dữ liệu.
- Có thể gắn một câu hỏi Core với nhãn `entrance10: foundation` hoặc `entrance10: direct`.

### 🔥 Chuyên / Challenge

Đây là tầng mở rộng cho học sinh khá giỏi.

- Gồm các bài số học, đại số, bất đẳng thức, hình học tổng hợp, tổ hợp và các kỹ thuật nâng cao phù hợp.
- Không phải kiến thức bắt buộc của KNTT Core.
- Không dùng kết quả Challenge để khóa việc học tiếp trong Roadmap chính.
- Có thể dùng cùng một kỹ năng nền với Core nhưng ở mức suy luận sâu hơn.

## 2. Bốn lối học trên website

Roadmap hướng tới bốn cách truy cập **cùng một đồ thị kiến thức**:

1. **Học theo Roadmap 25 chuyên đề** – đi theo quan hệ prerequisite → skill hiện tại → knowledge-next.
2. **Học theo KNTT** – định vị cùng skill theo lớp/chương/bài đang học ở trường.
3. **Ôn thi vào 10** – lọc các skill/topic hiện hữu theo mức liên quan thi cử và dạng bài.
4. **Chuyên / Challenge** – mở nhánh tự chọn từ Core.

Không lối nào tạo một bộ nội dung riêng. KNTT mapping đặc biệt chỉ là **index/overlay**, không kéo kiến trúc website về bốn cây lớp 6–9.

## 3. Quy tắc dữ liệu câu hỏi

Ngân hàng câu hỏi có thể bổ sung metadata:

```json
{
  "curriculum": {
    "book": "KNTT",
    "grades": [8],
    "level": "core"
  },
  "exam": {
    "entrance10": "foundation",
    "specialized": "none"
  },
  "hints": [
    "Gợi ý định hướng.",
    "Gợi ý cụ thể hơn."
  ]
}
```

Các trường này là tùy chọn để toàn bộ ngân hàng câu hỏi cũ tiếp tục hoạt động.

## 4. Nguyên tắc mastery

Tỉ lệ đúng/sai chỉ là một phần của đánh giá.

Practice Engine sẽ dần phân biệt:

- đúng không cần gợi ý;
- đúng sau khi xem một hoặc nhiều gợi ý;
- sai dù đã xem gợi ý;
- lỗi lặp lại theo skill tag.

Mục tiêu là giúp hệ thống xác định **mức độ độc lập khi làm bài**, không chỉ số đáp án đúng.

## 5. Thứ tự triển khai

1. Hoàn thiện Hint Engine và lưu dữ liệu sử dụng gợi ý.
2. Gắn mapping KNTT chính xác cho từng chuyên đề/kỹ năng.
3. Chuẩn hóa metadata Vào 10 dựa trên tập đề thi thật.
4. Bổ sung Challenge/Chuyên như lớp mở rộng.
5. Xây Mastery Model và Personalized Practice.
6. Sau khi dữ liệu học tập đủ tốt mới kết nối AI Tutor với learner profile.
