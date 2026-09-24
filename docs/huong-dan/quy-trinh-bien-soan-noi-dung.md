# Quy trình biên soạn & kiểm định nội dung

Roadmap Toán THCS dùng mô hình **nhiều nguồn biên soạn – một chuẩn kiểm định**.

Gemini, ChatGPT, giáo viên hoặc tài liệu tham khảo đều có thể tạo draft. Không nguồn nào được xuất bản trực tiếp nếu chưa qua QA.

## 1. Phân vai

### Gemini – biên soạn/phản biện học thuật
Có thể hỗ trợ:
- đề xuất cấu trúc sư phạm;
- biên soạn lý thuyết, ví dụ và bài tập;
- giải độc lập các bài khó để làm đối chứng;
- chỉ ra lỗi diễn đạt hoặc bước suy luận thiếu.

### ChatGPT – tích hợp và kiểm tra chéo
Chịu trách nhiệm:
- đọc repository hiện tại trước khi thay đổi;
- kiểm tra chéo nội dung toán học;
- chuẩn hóa theo KNTT Core / Vào 10 / Chuyên;
- chuyển nội dung vào Markdown/JSON/LaTeX đúng schema;
- kiểm tra ID, tag, hint, explanation;
- dựng/chuẩn hóa SVG và QA kỹ thuật;
- tạo branch/PR, kiểm tra diff và deploy.

### Người học/phụ huynh
Không phải người kiểm định kỹ thuật. Phản hồi chủ yếu dùng để phát hiện:
- phần khó hiểu;
- hình khó đọc;
- thao tác bất tiện;
- bài tập quá dễ/quá khó;
- lỗi thực tế khi học.

## 2. Kho nội dung trung gian

Draft chưa duyệt đặt trong `content-staging/`.

Không đưa draft thẳng vào bài học chỉ vì nội dung “có vẻ đúng”.

Trạng thái:

`draft → academic-review → technical-review → visual-review → approved → published`

## 3. Chuẩn học thuật

### KNTT Core
Phải:
- đúng phạm vi và ngôn ngữ phù hợp chương trình;
- ưu tiên hiểu bản chất;
- không trộn bài chuyên vào điều kiện hoàn thành.

### Vào 10
- dựa trên kiến thức Core;
- dạng bài/trọng số nên dựa trên tập đề thi thật;
- không dùng câu “100% ra” nếu không có cơ sở dữ liệu tương ứng.

### Chuyên / Challenge
- là mở rộng tự chọn;
- có thể khó hơn nhiều so với Core;
- không ảnh hưởng trạng thái hoàn thành lộ trình chính.

## 4. Chuẩn kiểm tra lời giải

### Bài cơ bản
Tối thiểu:
1. tính/giải độc lập;
2. kiểm tra ngược đáp án;
3. kiểm tra điều kiện xác định hoặc nghiệm ngoại lai nếu có.

### Bài vận dụng cao
Nên có hai đường kiểm tra độc lập, ví dụ:
- hai lời giải khác nhau;
- lời giải hình học + tọa độ;
- chứng minh + kiểm tra số;
- lời giải AI + đáp án chính thức.

### Bài hình học
Không chấp nhận “hình nhìn giống đúng” làm bằng chứng.

Phải tách:
1. **spec hình học** – quan hệ bắt buộc;
2. **lời giải** – suy luận;
3. **SVG/render** – biểu diễn;
4. **semantic QA** – kiểm tra render đúng spec.

## 5. Chuẩn hình minh họa

Ưu tiên theo thứ tự:

1. SVG do dự án tự dựng từ spec đã kiểm tra.
2. GeoGebra/diagram tương tác khi có giá trị sư phạm rõ.
3. Hình nguồn ngoài chỉ dùng tạm khi chưa thể dựng chính xác.

Mục tiêu dài hạn là **giảm dần hình Internet** để toàn website có phong cách đồng bộ.

Mọi SVG hình học mới phải:
- nền trắng hoặc trong suốt;
- stroke/nhãn thống nhất;
- không dùng hiệu ứng trang trí;
- có `alt`;
- đọc được ở chiều rộng màn hình khoảng 320–400 px;
- không làm sai quan hệ hình học cốt lõi.

## 6. Chuẩn bài tập ba mức

### Mức 1 – Nhận biết/Thông hiểu
- ưu tiên trắc nghiệm tự chấm;
- distractor phản ánh lỗi thật;
- explanation ngắn, chỉ đúng nguyên nhân.

### Mức 2 – Vận dụng
- có thể là tự luận hoặc trắc nghiệm nhiều bước;
- ưu tiên Hint 1 → Hint 2 → lời giải;
- theo dõi việc học sinh có cần hint hay không.

### Mức 3 – Challenge/Chuyên
- tách khỏi Core;
- lời giải cần QA học thuật chặt hơn;
- nếu là hình học hoặc bài nhiều bước, cần kiểm tra độc lập.

## 7. Quy trình nhận nội dung từ Gemini

Khi Gemini tạo một batch:

1. Giữ nguyên bản draft ban đầu để truy vết.
2. Gắn chuyên đề, skill, tầng học.
3. ChatGPT kiểm tra từng kết luận/toán học.
4. Sửa ngôn ngữ theo phong cách chung của Roadmap.
5. Tách hint khỏi lời giải nếu phù hợp.
6. Chuẩn hóa LaTeX.
7. Nếu có hình: viết diagram spec trước, sau đó mới dựng SVG.
8. Chạy QA.
9. Tạo PR và chỉ merge khi không phá nội dung hiện tại.

## 8. Tiêu chí “đủ tốt để xuất bản”

Một item chỉ được `approved` khi:
- đúng toán;
- đúng tầng học;
- có giá trị sư phạm rõ;
- không trùng nội dung vô ích;
- hiển thị đúng;
- nếu có hình, hình đã semantic QA;
- nếu là Practice Bank, schema/ID/tag/answer/explanation đều hợp lệ.

Mục tiêu của quy trình này không phải làm chậm việc sản xuất nội dung, mà để **AI có thể sản xuất nhanh mà chất lượng vẫn có hàng rào kiểm soát**.
