# R33 — Đối soát phản biện NotebookLM 24 ID (2026-10-18)

**Nguồn:** Báo cáo 111 dòng do Project Owner gửi trong chat, SHA-256 file gốc `b5db437fd2c1b550c7bcfcfd9e5de0b9fb80057bb0dd3c7252c0a246efbf36c0` (12.429 byte). Bản JSON `TEMP_R33_NOTEBOOKLM_24_ITEM_VERDICT_RECEIPT_20261018.json` là **bản chép cấu trúc**, không phải bản sao chính xác nguyên file.

**Kết quả được báo:** đúng 24 ID, không trùng; cả 24 được NotebookLM đánh dấu `PASS`. S1 lớp 6–7: 21 `KNTT-Core`; lớp 9 CT12: 3 đề xuất `Entrance10`; không có quyền phê duyệt / triển khai.

## Hai sai khác phải giữ nguyên khi nhập hồ sơ

**(1) Sai tổng kết bảng chứng cứ.** Khối tổng hợp ghi `STRUCTURAL_CLONE=12, CONCEPT_BASE=12`, nhưng đếm trực tiếp 24 dòng theo ID cho **11 STRUCTURAL_CLONE, 13 CONCEPT_BASE**. Hai dòng công thức giá trị tuyệt đối chứa ký tự `|` trong LaTeX; việc tách cột phải theo dấu ` | ` có khoảng trắng, không theo tất cả dấu gạch đứng. Không tự sửa báo cáo gốc, chỉ ghi đúng số từ bảng và đánh dấu `PACKET_COUNT_REVISE`.

**(2) Sai khác chuyên môn chỉ ở 3 CT12.** So với ma trận R33 đã đối chiếu SGK, **21 ID Toán 6–7 nhất quán** về loại dẫn chứng và tầng Core (8 clone, 13 concept). Ba ID `QUA12V1_121–123` được NotebookLM chuyển từ `CONCEPT_BASE / LAYER_HOLD` sang `STRUCTURAL_CLONE / Entrance10`. Bài 18–19 SGK lớp 9 dạy kiến thức nền và hoạt động GeoGebra ở tr.113–114 yêu cầu tìm giao điểm bằng phần mềm, không phải minh chứng nguyên dạng cho lập phương trình bằng tay hoặc tiếp xúc theo nghiệm kép; vì vậy chưa được nâng mặc định thành `STRUCTURAL_CLONE`.

**(3) Khẳng định tần suất S3 không có mẫu thống kê.** Báo cáo nói dạng bài bắt buộc ở phần lớn đề tuyển sinh toàn quốc nhưng không định nghĩa mẫu, địa phương, năm hay mẫu số. R34 trước đó xác nhận một ví dụ dương tính TP.HCM 2024 và một ví dụ âm tính Hà Nội 2025; hai đề chứng minh dạng bài có giá trị ôn thi nhưng không chứng minh tần suất. `Entrance10` là ứng viên có cơ sở vận dụng, **chưa phê duyệt tầng chính**.

## Kết luận phân định

- `REVIEWER_MATH_PASS_REPORTED`: 24/24. Câu `QUA12V1_121` dùng đúng câu đã sửa R34; SHA-256 item mới `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c` và câu đã được phản biện riêng.
- `S1_EDITORIAL_CONSISTENCY`: 21/21 ID Toán 6–7 khớp đề xuất R33, có thể trình chủ dự án nghiệm thu một lần thay vì phản biện lại.
- `CT12_TYPE_AND_LAYER`: 3 ID đang `HOLD`; không tự thay nguồn/thẻ phân tầng.
- `AGGREGATE`: báo cáo có một lỗi đếm; việc sửa 12/12 thành 11/13 ở bản tổng kết không biến câu hỏi thành sai toán học.
- `ACADEMIC_PASS_AUTHORIZED`: FALSE; `SKILL/READINESS/MASTERY/HISTORICAL_BACKFILL`: FALSE; `DEPLOYMENT`: FALSE; 16 câu ngoài phạm vi bất biến.

**Cổng tiếp theo:** Chủ dự án chấp thuận ma trận 21 ID lớp 6–7 và quyết định ba CT12 riêng sau khi xem các hạn chế S1/S3. Không yêu cầu NotebookLM viết lại toàn bộ 24 dòng chỉ vì lỗi đếm tổng hợp. PR #519 chỉ lưu kiểm toán/QA, không sửa ngân hàng.
