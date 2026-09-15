# Audit độ phủ Practice Bank 21–25 – v1

## Mục tiêu

Đồng bộ Practice Bank 21–25 với vòng audit học thuật mới nhất, giữ **120 câu/chuyên đề** và không tăng tổng số câu. Các câu bị thay về bản chất được **nghỉ sử dụng ID cũ và cấp ID mới**, đúng nguyên tắc ổn định ID của Practice Bank.

## Kết quả audit trước khi sửa

- **21 – Thống kê:** 120 câu cũ không có câu nào về biểu đồ cột kép, biểu đồ hình quạt tròn hoặc dữ liệu ghép nhóm.
- **22 – Đại lượng đặc trưng:** độ phủ cân đối; giữ nguyên toàn bộ 120 câu.
- **23 – Xác suất:** rút không hoàn lại đã có độ phủ tốt, nhưng xác suất thực nghiệm gần như chưa được luyện có hệ thống.
- **24 – Bài toán thực tế:** vận tốc trung bình và giả định mô hình đã xuất hiện rải rác; phần trăm liên tiếp và nguyên tắc làm tròn cuối còn mỏng.
- **25 – Tổng hợp:** chưa có câu tổng hợp về thống kê mới và xác suất thực nghiệm; chiến lược ưu tiên dựa trên bằng chứng còn ít.
- Trong 600 prompt có 3 nhóm trùng giữa Topic 21/23 và Topic 25.

## Điều chỉnh

### Topic 21

Giữ 120 câu nhưng tái cân bằng thành:

- 12 skill cũ × 8 câu = 96 câu;
- `doc-bieu-do-cot-kep` = 8 câu;
- `bieu-do-quat-tron` = 8 câu;
- `du-lieu-ghep-nhom` = 8 câu.

Các câu mới tận dụng chính SVG minh họa đã được duyệt ở Chuyên đề 21 để luyện đọc biểu đồ trực quan.

### Topic 22

Không thay đổi.

### Topic 23

Thêm skill `xac-suat-thuc-nghiem` với 10 câu: tính `m/n`, phân biệt thực nghiệm – lý thuyết, diễn giải mẫu hữu hạn và xu hướng ổn định của tần số tương đối. Giữ nguyên 10 câu xác suất cổ điển và 10 câu rút không hoàn lại; giảm nhẹ 1 câu ở 10 skill khác để tổng vẫn là 120.

### Topic 24

Không thêm skill mới; thay 6 câu tổng quát bằng 6 câu nhắm đúng:

- 2 câu vận tốc trung bình = tổng quãng đường / tổng thời gian;
- 2 câu phần trăm liên tiếp bằng tích hệ số thay đổi;
- 1 câu kiểm tra giả định năng suất không đổi;
- 1 câu tránh làm tròn sớm.

### Topic 25

Thay 10 câu trong đúng các skill tổng hợp hiện có:

- 4 câu thống kê: quạt tròn, cột kép, dữ liệu ghép nhóm;
- 3 câu xác suất thực nghiệm;
- 3 câu lập ưu tiên ôn tập dựa trên kết quả 3–5 bài gần nhất, tỉ lệ đúng, thời gian và lỗi lặp lại.

Ba prompt trùng trước đây nằm trong các câu Topic 25 được nghỉ sử dụng, nên sau batch này mục tiêu QA là **600/600 prompt duy nhất**.

## Nguyên tắc giữ ổn định

- Tổng câu: 5 × 120 = 600.
- Topic 22 không bị thay đổi.
- Không tái sử dụng ID cũ cho câu hỏi có bản chất mới.
- Không thay đổi schema Practice Engine.
- Hình dùng trong câu thống kê là asset local SVG đã qua kiểm tra integrity.
