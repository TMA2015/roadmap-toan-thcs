# Audit học thuật thủ công – Chuyên đề 02–07 (V1)

> Phạm vi: đọc thủ công phần kiến thức cốt lõi, ví dụ, dạng bài và đối chiếu với bài luyện/tự kiểm tra hiện có. Báo cáo này bổ sung cho audit cấu trúc tự động; nó không thay thế việc tiếp tục kiểm tra từng câu Practice Bank.

## Kết luận nhanh

| Chuyên đề | Đánh giá sau audit | Điều chỉnh chính |
|---:|---|---|
| 02 | PASS sau bổ sung | Làm rõ số vô tỉ/số thực; bổ sung làm tròn và giá trị gần đúng |
| 03 | PASS sau bổ sung | Chặt điều kiện của tỉ số trong tỉ lệ thuận; bổ sung dạng hiệu của dãy tỉ số; tiêu chuẩn nhận biết tỉ lệ nghịch |
| 04 | PASS sau bổ sung | Bổ sung phép chia đơn thức/đa thức trong trường hợp chia hết để khớp với bản đồ kiến thức |
| 05 | PASS | 7 hằng đẳng thức, hai chiều sử dụng, ví dụ và lỗi sai đã đủ cân đối; chưa thấy khoảng trống cốt lõi cần sửa ở vòng này |
| 06 | PASS sau bổ sung | Bổ sung kỹ thuật tách hạng tử để tạo nhóm, vì bài tập hiện có yêu cầu phân tích các tam thức như `x²-5x+6` |
| 07 | PASS sau bổ sung | Làm rõ khái niệm hai phân thức bằng nhau và nguyên tắc miền xác định chung khi nhân/rút gọn |

## Các phát hiện đáng chú ý

### 02 – Số và phép tính

Trang đã mạnh ở số nguyên, phân số, lũy thừa, chia hết, ƯCLN–BCNN và phần trăm. Khoảng trống là mạch **hữu tỉ → vô tỉ → số thực** và **làm tròn/giá trị gần đúng** chưa được trình bày đủ rõ so với vai trò chuyên đề 6–9. Đã bổ sung mà không làm nặng phần căn thức lớp 9.

### 03 – Tỉ lệ

Nội dung đúng và thực tế, nhưng công thức `y1/x1 = y2/x2` trước đây chưa ghi điều kiện `x1, x2 ≠ 0`; điều này dễ tạo thói quen viết tỉ số có mẫu 0. Đã sửa. Đồng thời bổ sung dạng hiệu của dãy tỉ số bằng nhau và nhấn mạnh rằng “một tăng, một giảm” chưa đủ để kết luận tỉ lệ nghịch; phải kiểm tra tích không đổi.

### 04 – Biểu thức đại số

Bản đồ kiến thức có nêu phép chia đơn thức/đa thức nhưng phần kiến thức cốt lõi chưa giải thích. Đã bổ sung phép chia trong **trường hợp chia hết**, kèm cảnh báo không rút gọn xuyên qua dấu cộng/trừ. Phần này cũng tạo cầu nối tốt hơn sang phân thức.

### 05 – Hằng đẳng thức

Không phát hiện lỗi học thuật đáng kể trong vòng đọc thủ công này. Bảy công thức, dấu, nhận dạng hai chiều và ví dụ đều nhất quán. Giữ nguyên để tránh thêm nội dung không cần thiết.

### 06 – Phân tích đa thức thành nhân tử

Đây là khoảng trống sư phạm rõ nhất: bài tập/tự kiểm tra đã có các tam thức như `x²-5x+6`, nhưng bài học chưa dạy thao tác **tách hạng tử giữa để nhóm**. Đã bổ sung ở mức “mở rộng/vận dụng”, tránh biến nó thành mẹo bắt buộc cho mọi bài.

### 07 – Phân thức đại số

Nội dung điều kiện xác định nhìn chung tốt. Đã làm chặt thêm sự khác nhau giữa **đẳng thức của phân thức** và **giá trị sau khi thay biến**, đồng thời nhấn mạnh mọi phép nhân/rút gọn chỉ bảo toàn giá trị trên miền xác định chung; rút gọn không được “lấy lại” giá trị bị loại của biểu thức ban đầu.

## Nguyên tắc cho vòng tiếp theo

1. Giữ mô hình: core ngắn gọn nhưng không bỏ điều kiện quan trọng.
2. Nếu bài tập yêu cầu một kỹ thuật, kỹ thuật đó phải xuất hiện trước trong bài học hoặc được đánh dấu rõ là vận dụng/mở rộng.
3. Không thêm mẹo chỉ để tăng số lượng nội dung.
4. Vòng tiếp theo audit 08–12 nên ưu tiên điều kiện nghiệm, bất phương trình, tham số, căn thức và phạm vi kiến thức chuẩn bị THPT.
