# Post-87 audit — kết luận bổ sung theo nguồn hiện hành và xác nhận chủ sở hữu

**Ngày:** 2026-10-23  
**Trạng thái:** SOURCE MATRIX COMPLETE · OWNER FAMILY USE ACCEPTED · THPT RESEARCH STARTED  
**Supersedes:** Tình trạng `HUMAN A2 PENDING` là rào chắn phát triển trong bản nháp `math-post87-curriculum-learning-ux-audit-r1-20261023.md`. Bản nháp cũ giữ lại làm lịch sử; không được trình bày là kết luận cuối.

## Xác nhận của phụ huynh

Con đang sử dụng website THCS bình thường; **tạm chấp nhận vấn đề trải nghiệm học sinh đạt trong phạm vi gia đình**. Không yêu cầu thử lại A2 chỉ để đóng thủ tục. Đây là **OWNER_FAMILY_USE_ACCEPTED**, không phải `HUMAN_A2_COMPLETE_ALL_DEVICES` hoặc chứng nhận tất cả học sinh hiểu mọi lời giải.

## Kiểm toán 78 nhóm bài SGK theo mã nguồn hiện hành

Bằng chứng máy được tạo từ `scripts/audit-post87-kntt-lesson-evidence-r1.js`, lưu đầy đủ từng nhóm trong `review-packets/math-post87-curriculum-ux/01_LIVE_78_ROW_SOURCE_EVIDENCE_MATRIX_R1.json` và bị CI khóa sai khác nguồn.

| Phạm vi | Core teaching | Micro |
|---|---:|---:|
| Có thẻ ghi **Bài** trùng một phần với nhóm SGK | 40 | 40 |
| Có thẻ theo **lớp/ngữ cảnh**, chưa xác nhận riêng mỗi bài | 27 | 32 |
| Có nguồn theo **chuyên đề dùng chung**, chưa xác minh theo bài | 11 | 6 |
| Không thấy nguồn nào theo ba mức trên | 0 | 0 |

- **Practice:** 78/78 nhóm có một ngân hàng tại chuyên đề PRIMARY tương ứng, không mặc nhiên mỗi bài có bank riêng.
- **Readiness:** 21/78 nhóm có assessment nguồn kèm phạm vi lớp, 57/78 được xác nhận cấp chuyên đề. Đó không phải số nhóm “thiếu” Readiness.
- **Written:** 33/78 nhóm có giao cắt với vị trí SGK của bài tự luận đã duyệt; 45 nhóm còn lại không có vị trí **trực tiếp**, không bị coi là lỗi hay quota cần bổ sung. Toàn thư viện vẫn 87/87 APPROVED, 38 bài có 39 vị trí KNTT.
- Định dạng nhóm lớp 9 thường chỉ là **cấp chương**, còn thẻ với dải nhiều Bài có thể bao trùm một phần nhóm; các phép đếm không phải chứng nhận toàn bài đạt D1–D6.
- Các kiểm toán lớp 7–9 chụp tháng 10 trước sửa chữa **không được dùng làm số thiếu hiện tại**; G9 Learn/Micro repair đã đóng riêng, G8 density wave1 CLOSED_DEPLOYED.

## Quyết định

**Không phát hiện P0 nguồn mới; không cần biên soạn hàng loạt hay thay đổi trang THCS.** Bảo toàn THCS 87 bài, giữ Readiness và Progress tách biệt, các bài tự luận tự chấm không tự sinh Mastery. Mọi khó khăn cụ thể được phụ huynh hoặc học sinh gặp trong sử dụng thực tế sẽ xử lý đúng vị trí, không mở lại dự án tối ưu UX lan man.

**Chuyển trọng tâm sang nghiên cứu THPT** trong `docs/collaboration/math-thpt-research-scoping-r0-20261023.md`, chỉ nghiên cứu kiến trúc và nguồn giáo khoa lớp 10–12. Không phát hành THPT, không buộc login, không dùng API trả phí và không nhập nhằng lịch sử học sinh THCS–THPT.

**Nguồn khóa:** THCS `main@6bfafa522a13de0cd6925c076c2e68262f6bdef6`; 87-item Written Git blob `52da473e93101830ecbdb7ee6bb57c876586130f`; audit snapshot `01_LIVE_78_ROW_SOURCE_EVIDENCE_MATRIX_R1.json`.
