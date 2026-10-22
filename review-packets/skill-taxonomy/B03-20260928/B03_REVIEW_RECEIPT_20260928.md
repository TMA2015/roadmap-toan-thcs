# B03 — Tiếp nhận, phân định kết quả và điều kiện nghiệm thu

**Packet:** MATH-SKILL-TAXONOMY-B03-20260928. **Source main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Locked source blob SHA:** `f7d2472f95e2615144aa8723f870014cf53bfed9`. **Nguồn báo cáo:** NotebookLM, người chủ dự án gửi 28/09/2026. **Trạng thái:** CONTENT_REVIEWED_WITH_REPORT_EXCEPTIONS / PROPOSAL_ONLY.

## Kết quả sử dụng được

- Bảng phản biện liệt kê đầy đủ 26/26 ID: 9 CĐ14 và 17 CĐ15. Reviewer ghi PASS nội dung toán, đáp án và giải thích ở cả 26 trường hợp. Từ bản dữ liệu khóa, tất cả ID nguồn và các đáp án chỉ số đều khớp; không thấy lý do sửa đáp án nguồn chỉ do tag trùng nghĩa.
- `TRI14V1_132` là câu cầu nối đúng: từ OA=OB=OC suy ra OA=OB, OB=OC, OC=OA rồi dùng định lý đảo đường trung trực theo từng cặp. Không phải lỗi toán.
- Hai cụm `CTR15V1_079–086` (8 câu định nghĩa đổi tên đoạn) và `CTR15V1_097–104` (8 câu bán kính đổi số) có tương quan cao. Có thể giữ làm luyện tập, nhưng không xem là 16 kỹ năng riêng hoặc 16 minh chứng độc lập về khả năng viết chứng minh.
- Mô hình đề xuất: hai canonical concepts (trung trực đoạn thẳng; tâm ngoại tiếp) với task_demand rõ ràng; `TRI14V1_132` là cầu nối áp dụng từng cặp, không gán mastery chứng minh đồng quy toàn phần.

## Ngoại lệ báo cáo và điều cần sửa

- File trả lời là **năm bản báo cáo ghép nối**. Mỗi bản có bảng 26 ID, nhưng **cả bốn khối JSON đã mở đều bị cắt** trước khi đủ items/kết thúc cú pháp; không được khai `machine_readable_report=PASS`. Bảng văn bản được tiếp nhận như ý kiến kiểm định, không tự tạo JSON "của Gemini" từ nội dung đã mất.
- `PASS` toán/đáp án không đồng nghĩa chứng nhận taxonomy đã triển khai hoặc mastery được xác minh. Đề xuất phân loại tag/clone là **công việc khắc phục**, không thể suy ra trạng thái kiểm định production PASS.
- Micro-test 1 của báo cáo chỉ trực tiếp đo **chiều đảo**, dù tiêu đề ghi đo cả chiều thuận và đảo. Phải có câu riêng về chiều thuận hoặc yêu cầu cả hai bước.
- Micro-test 2 có giả thiết tam giác nhọn rồi tiếp tục nói cùng tam giác vuông tại A: phải tách thành **hai tình huống khác nhau**. Với trường hợp vuông, đặt N là trung điểm BC, chứng minh NA=NB=NC rồi nhận N trùng tâm ngoại tiếp; tránh kết luận vòng tròn.
- Bài chuyển giao tam giác cân góc A=40° có hướng giải phù hợp; cần trình bày mạch góc/cạnh đầy đủ khi trở thành bài mỏ neo, không coi bản thảo B03 là học liệu đã xuất bản.

## Điều kiện trước khi thay đổi website

1. Mapping chỉ đọc, khóa theo từng `item_id`; không đổi tag gốc/IDs và không cộng/chia ngược bộ đếm lịch sử.
2. Cụm clone vẫn có thể dùng làm luyện tập, nhưng tín hiệu readiness phải có câu không đồng dạng; chứng minh tự luận trên giấy hoặc dạng giải thích từng bước được ghi nhận tách khỏi MCQ.
3. Soạn micro-tests đã sửa, QA nội dung, độc lập phản biện và kiểm thử nguồn–render trước khi tích hợp.
4. Không tạo 26 kỹ năng mới từ 26 câu; không coi một câu MCQ chứng minh trọn vẹn chuỗi lập luận.
5. Bản này là hồ sơ/đề xuất, **không merge hoặc deploy** như một thay đổi ứng dụng.

## Chặng kế tiếp

Rà tiếp nhóm `dieu-kien-xac-dinh`, `dkxd-phuong-trinh-mau`, `dkxd-can`, `giu-dieu-kien-ban-dau`, `doi-chieu-nghiem` trên câu hỏi nguồn với chuẩn phân biệt điều kiện–loại nghiệm–kiểm tra. Đóng B04 theo một source tạm; không chạy lại B03 chỉ để có JSON dài hơn.
