# Chuyên đề 25 — hồ sơ phản biện độc lập

## Gói hiện hành

- **Dùng:** [GEMINI_REVIEW_PACKET_2026-09-26_MAIN_R2.txt](GEMINI_REVIEW_PACKET_2026-09-26_MAIN_R2.txt).
- Nguồn cố định: `04b275cb5870a2fbd8f540333b96529285277883`.
- 23 file nguyên văn: 13 file cơ sở, thư viện mỏ neo và 4 trang đọc sâu, catalog 11 anchor, rubric ba đề ở JSON, ba SVG hình học.
- Trạng thái: **chờ phản biện độc lập**. Gói này là tập dữ liệu để kiểm định, **không phải chứng nhận nội dung đã đúng toán**.

## Gói lịch sử

`GEMINI_REVIEW_PACKET_2026-09-26.txt` chụp 13 file ở `903042ccae6e1e7a234a1433c533c49eaad259ac`, trước các thay đổi PR #112. Giữ để truy nguyên lịch sử, **không gửi thay gói R2 và không nhận kết quả review của snapshot cũ làm sign-off cho bản hiện tại**.

## Kiểm tra sơ bộ trước phản biện

- EXAM25-01, 02, 03 đều có thời lượng 120 phút, thang điểm 10.
- Tổng điểm các item và tiêu chí rubric JSON khớp.
- ID anchor và đường về chuyên đề được tham chiếu trong rubric đều tồn tại.
- Đây chỉ là kiểm tra cấu trúc và liên kết, **chưa phải kiểm tra chứng minh, hình vẽ hay đáp án toán học độc lập**.

## Quy trình áp dụng phản biện

1. Nhận JSON review ghi đúng `source_commit`, danh sách file đã đọc và vị trí trích nguyên văn.
2. Đối chiếu lại đoạn trích với mã nguồn hiện hành trước khi sửa; nếu nguồn đã đổi thì làm review bổ sung.
3. Chỉ sửa sau khi xác minh lời giải toán/giả thiết/rubric; bảo toàn ID, URL, learner evidence và tách Core/Entrance10/Challenge.
4. Chạy QA toán, schema, browser và strict MkDocs; merge và deploy khi đạt. Task vẫn OPEN nếu chưa có kết quả phản biện.
