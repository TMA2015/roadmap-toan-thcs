# CĐ25 — hồ sơ phản biện độc lập theo phiên bản nguồn

## Bản cần gửi Gemini tiếp theo: Targeted R3

- [GEMINI_REVIEW_PACKET_2026-09-26_TARGETED_R3.txt](GEMINI_REVIEW_PACKET_2026-09-26_TARGETED_R3.txt)
- Source snapshot cố định: `5f74d7c377bc94f2688a9b5ee431d90c88af0536`.
- **9 tệp bắt buộc kiểm định:** A25-006/007/010 mới; A25-011, catalog, rubric JSON ba đề, SVG hình 004/008/009 chưa được liệt kê trong phản hồi R2. **8 tệp đối chiếu**: kho gốc, đề/đáp án 02 và 03, ba trang giải sâu hình học 004/008/009.
- 17/17 git blob SHA đã đối chiếu với commit cố định. Kiểm tra sơ bộ phép tính/biến thể của ba trang mới đạt; đây **không phải phê duyệt độc lập**.
- Trạng thái: **CHỜ phản hồi Gemini R3 với đủ 9 target_files_reviewed và kiểm tra chi tiết từng tệp**. Thừa nhận thiếu danh sách nguồn không thay cho kiểm định trực tiếp.

## Đã tiếp nhận R2, phạm vi phê duyệt có giới hạn

- [GEMINI_REVIEW_PACKET_2026-09-26_MAIN_R2.txt](GEMINI_REVIEW_PACKET_2026-09-26_MAIN_R2.txt) chụp 23 tệp tại `04b275cb5870a2fbd8f540333b96529285277883`.
- Gemini trả `APPROVE` và không có critical corrections, nhưng `source_files_reviewed` chỉ liệt kê 17/23. Đọc [biên bản tích hợp R2](REVIEW_INTEGRATION_2026-09-26.md) để biết sáu tệp chưa đủ chứng cứ danh sách đọc và ba trang được viết **sau** lần phản biện.
- Đề gốc và đáp án giữ nguyên khi không có lỗi toán được chứng minh. Exam Engine chỉ hỗ trợ **học sinh tự đối chiếu**, không tự động chấm tự luận.
- Không dùng bản R2 để ghi các trang mới đã được Gemini duyệt.

## Gói lịch sử

`GEMINI_REVIEW_PACKET_2026-09-26.txt` chụp 13 tệp ở `903042ccae6e1e7a234a1433c533c49eaad259ac` trước khi mở rộng kho bài và Exam Engine. Chỉ giữ để truy nguyên, không dùng ký duyệt nội dung hiện hành.

## Quy trình chốt phản biện

1. Nhận JSON nêu đúng source_commit, đủ chín tệp `target_files_reviewed`, trạng thái và bằng chứng riêng cho từng tệp.
2. Đối chiếu từng trích dẫn/lỗi với chính blob đã chụp và mã nguồn hiện hành. Phần nào không được đọc hoặc nguồn đã đổi phải để REVIEW_NEEDED.
3. Chỉ sửa lỗi được xác minh; bảo toàn ID/URL, phân tầng Core/Entrance10/Challenge và dữ liệu học sinh.
4. QA toán/schema/browser/build rồi mới merge/deploy phần sửa. Không đánh dấu 9/9 APPROVE chỉ dựa vào lời xác nhận chung.
