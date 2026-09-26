# Quy tắc tinh gọn Skill Taxonomy — bản định hướng 1.0

**Phạm vi:** Toán THCS, ưu tiên kiến thức nền và ứng dụng thiết thực. **Trạng thái:** quyết định định hướng; chưa duyệt từng skill, chưa thay đổi runtime/ngân hàng/Knowledge Graph. Ngày 26/09/2026.

## Đơn vị cần đo

Một `assessed_skill` là **đầu ra học sinh có thể thể hiện độc lập**, đủ rõ để nhận biết lỗi và có một hành động ôn bù cụ thể. Không bắt buộc định danh mọi công thức, bước trung gian hoặc biến thể đề. Câu kiểm tra một kết quả tổng hợp **không tự chứng minh** học sinh thành thạo mọi thao tác đã dùng.

| Vai trò | Ý nghĩa | Có cộng mastery riêng theo một câu ghép? |
|---|---|---|
| `assessed_skill` | Kỹ năng chính được câu hỏi/rubric đo | Có, nếu câu hỏi đo thích hợp |
| `supporting_skill` | Kiến thức/thao tác cần dùng nhưng câu hiện tại chưa đo tách biệt | Không |
| `method` | Cách giải, biểu diễn, thủ thuật | Không tự động |
| `context` | Tình huống: chuyển động, bài toán số, thực tế... | Không |
| `extension` | Nhánh nâng cao tùy chọn; có thể có năng lực được đo riêng trong nhánh | Không nhập vào Core Readiness |

Một mục có thể là kỹ năng chính trong câu này nhưng là kiến thức hỗ trợ trong câu khác. **Vai trò gắn với câu hỏi và mục đích đo, không áp một phân loại cố định cho mọi lần xuất hiện của một ID.** Tối đa một `assessed_skill` chính cho câu trắc nghiệm một điểm; nếu có rubric chấm từng bước thì mỗi bước có thể cung cấp bằng chứng riêng, không đếm trùng một câu.

## Quy tắc thêm/bớt

Thêm skill đo độc lập chỉ khi: (1) là yêu cầu đáng học hoặc ứng dụng hữu ích; (2) có lỗi học sinh cần ôn khác biệt; (3) có thể kiểm tra riêng; (4) cho phép đưa khuyến nghị học cụ thể. Nếu không đạt, giữ ở method/context/nhóm hiển thị, không tạo mastery. Không chạy theo tổng số node, tag, độ khó hay danh sách kỹ thuật thi chuyên.

**Ưu tiên 3 vòng:** nền theo chuẩn KNTT/Chương trình GDPT → ứng dụng thực tế & lộ trình thi vào 10 → nhánh tự chọn (Specialized-Challenge/THPT-Bridge). Mức nền tảng và tần suất thi là hai trục tách biệt. Không suy diễn tần suất từ một bộ bài tự soạn hay vài đề thi.

## Kết nối dữ liệu đang có

- Giữ nguyên `question.id`, mọi `tags.skill` hiện hành và khóa `toan-thcs-practice-v1`; đây là dữ liệu lịch sử.
- Practice Engine và Learner Evidence hiện cộng mọi tag kỹ năng khi làm một câu; **đó là thống kê tag lịch sử, không tự động là mastery tách biệt**. Không cộng các bộ đếm alias, không chia ngược điểm cũ khi thiếu nhật ký đủ chi tiết.
- Giai đoạn đầu xây **mapping chỉ đọc**, lựa chọn primary/support/context ở câu có bằng chứng. Khi thay engine sau này, lưu bằng chứng mới tách nguồn, giữ nguyên dữ liệu cũ, làm regression và chỉ chuyển sang kết quả mới khi đã xác minh.
- Knowledge Graph là bản đồ **chọn lọc** của năng lực nền/điểm nối có giá trị tự học; không phải ảnh chụp toàn bộ `tags.skill`. Chỉ thêm prerequisite có căn cứ, không khóa đường học.
- Gemini là kênh phản biện tham khảo: mọi ý kiến phải đối chiếu câu hỏi thật và nguồn chương trình, không cần cố hoàn thiện một ontology bao trùm toàn bộ toán học.

## Đợt pilot đầu tiên

Chỉ xét 10 cặp tag tại [bản đối soát câu nguồn](gemini-pair-audit-04-11-2026-09-26.md), dùng [pilot JSON](../assets/data/curriculum/skill-role-pilot-04-11-v1.json) để giữ quyết định ở lớp dữ liệu. Có thể gộp hiển thị hoặc đổi vai trò tag trước khi đụng vào ID/hồ sơ học sinh. Cần rà soát theo **toàn bộ câu gắn tag** trước khi áp dụng một rule cho mọi câu, đặc biệt khi hai tập câu chỉ giao nhau một phần.
