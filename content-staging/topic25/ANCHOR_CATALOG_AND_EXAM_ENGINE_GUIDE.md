# Topic25 – Quy trình thêm bài mỏ neo và quản lý đề tự luận

Đây là tài liệu bảo trì nội bộ; không phải bài học dành cho học sinh.

## Cấu trúc

- docs/kien-thuc/25-tong-hop-on-thi-10/bai-toan-kinh-dien.md: mười bài tiêu biểu (ID A25-001 tới A25-010).
- docs/assets/data/anchors/anchor-catalog-v1.json: toàn bộ danh mục, không giới hạn 10. representative_ids luôn giữ đúng mười ID.
- docs/kien-thuc/25-tong-hop-on-thi-10/anchor-25-NNN.md: bài giảng chi tiết; sơ đồ tại docs/assets/geometry/25/.
- docs/assets/data/exams/topic25-exams-v1.json: rubric và liên kết từng ý đề với bài mỏ neo/chuyên đề.

## Khi thêm bài thứ 12 trở đi

1. Tìm theo ID, skill tags và đọc bài liên quan. Nếu chỉ đổi số, hãy thêm biến thể cho bài gốc, không tạo bài mới.
2. Nếu bổ sung một đường tư duy khác, cấp ID A25-NNN kế tiếp. Không tái sử dụng ID, không đổi URL cũ.
3. Kiểm tra đủ giả thiết, giải độc lập, đối chiếu nghiệm/điều kiện và nêu rõ định lý được phép dùng.
4. Với hình học: SVG dựng từ cấu hình hình học kiểm tra được, có nhãn điểm, nét phụ, mô tả văn bản; nêu cụ thể chỗ cần quan sát ở từng bước chứng minh.
5. Bài sâu tối thiểu có: đề, tư duy nhận dạng, phân tích tiến/lùi từ mục tiêu, ba gợi ý, chứng minh chi tiết, lỗi phổ biến, 2–3 biến thể và liên kết chuyên đề.
6. Ghi topic_ids, skill_tags, learning_layer, related_anchor_ids, exam_question_refs, source_uri/deep_dive_uri, figure_uris, independent_math_review.
7. Thêm bài không tự thay representative_ids. Khi thay một bài tiêu biểu phải có lý do biên tập; bài cũ ở lại kho và giữ ID/URL.
8. Chỉ gắn trạng thái kiểm định ngoài nếu đã nhận và đọc biên bản thực tế. Gemini là người phản biện thứ hai, không tự động sửa dữ liệu.

## Exam Engine

- Đồng hồ dùng dấu thời gian thật: tải lại trang không tạo thêm 120 phút.
- Nháp và điểm lưu localStorage trên thiết bị đang dùng; không đồng bộ giữa máy.
- Đáp án và rubric chỉ mở trong giao diện sau khi nộp/hết giờ, nhưng GitHub Pages không có bảo mật đề thi: URL/JSON công khai.
- Điểm tự chấm được cộng từ bước học sinh tự tích; không phải điểm do AI hoặc giáo viên xác nhận.
- Sai từng ý sẽ liên kết về anchor_ids và topic_uris; không suy diễn rằng điểm tự chấm chứng nhận mức thành thạo.

## Kiểm tra trước phát hành

- Chạy node scripts/test-topic25-expansion-engine-v1.js, python check_svg_integrity.py, mkdocs build --strict và browser QA.
- Không tự nhận đề đang biên soạn là đề chính thức hay dự đoán của Hà Nội.
- Hồ sơ review nguồn: review-packets/topic25/GEMINI_REVIEW_PACKET_2026-09-26.txt, ghi commit chính xác.
