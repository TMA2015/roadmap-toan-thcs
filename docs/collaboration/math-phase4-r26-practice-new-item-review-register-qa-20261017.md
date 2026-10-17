# Math Phase 4 R26 — 59 câu mới: bảng bằng chứng theo từng mã (chỉ QA)

**Ngày:** 2026-10-17 · **Không chuyển bộ đếm Skill, không cập nhật dữ liệu học sinh.**

## Mục đích

R23 xác định 59 mã câu có trong các manifest Practice mới nhất (dạng *catalog candidate*) nhưng chưa nằm trong 3.114 dòng chính sách Taxonomy v2 cũ. Đây **không có nghĩa cả 59 câu đều chưa được duyệt học thuật**. R25 đã khép lại đối chiếu kỹ thuật 150 câu lịch sử dựa trên hồ sơ độc lập đã có; R26 không đụng lại nguồn và chỉ phân loại 59 câu còn ngoài chính sách.

`scripts/prototypes/math-v2-new-item-evidence-register-r26.js` in đầy đủ **59 dòng có ID chính xác** kèm chuyên đề, file nguồn, SHA Git blob hiện tại, manifest ứng viên, loại câu, mã bài nguồn (nếu có), đường dẫn biên bản đã tìm được và trạng thái liên kết học thuật. `node scripts/prototypes/math-v2-new-item-evidence-register-r26.js` xuất JSON kiểm toán; không đọc dữ liệu người học.

## Thống kê theo nguồn, không suy đoán trạng thái đã phát hành

| Chuyên đề | MCQ mới | Rich nhập đáp án | Tổng | Ghi chú |
| --- | ---: | ---: | ---: | --- |
| CT02 | 27 | 2 | 29 | Các bài rich thuộc W1 |
| CT03 | 4 | 2 | 6 | Các bài rich thuộc W1 |
| CT04 | 6 | 4 | 10 | Rich thuộc W1, W2A, W2B |
| CT09 | 9 | 0 | 9 | Có PASS NotebookLM P1-C2, owner QA và extension riêng |
| CT12 | 3 | 0 | 3 | Ngoài policy cũ, chưa liên kết biên bản duyệt theo từng ID trong R26 |
| CT21 | 0 | 2 | 2 | Rich thuộc W1 |
| **Tổng** | **49** | **10** | **59** | |

Ba **nhóm bằng chứng** (không phải ba mức điểm) được phân biệt:

- **9 CT09 P1-C2:** có đúng mã `SYS09V1_121..129`, biên bản NotebookLM, owner QA và source-locked shadow extension `ct09-p1c2-extension-r1.json`. Tuy nhiên `independent_credit_authorized=false`, không chấm Core Readiness/Mastery.
- **10 rich typed-answer:** 8 biến thể được nối nguồn từ W1 đã ra mắt; 1 từ W2A và 1 từ W2B có biên bản PASS học thuật tương ứng. R26 xác nhận đúng cặp *mã câu mới → mã bài nguồn*, nhưng những biên bản này **không** cấp quyền tự động nhận câu rich như một lượt làm tự luận có chấm độc lập; chưa có family mapping source-lock cho 10 item này.
- **40 MCQ còn lại:** R26 chưa xác định được *biên bản duyệt theo từng ID mới* và không được tự tuyên bố “chưa từng duyệt”. Chúng yêu cầu đối chiếu các gói nguồn/QA liên quan, đánh giá mapping và khóa SHA trước khi bổ sung vào chính sách bộ đếm mới.

## Hàng rào không được vượt qua

1. Một manifest có phiên bản lớn nhất chỉ là *ứng viên danh mục*; việc file `bai-tap.md` có dẫn trực tiếp đến manifest cũng không đủ chứng minh tất cả route/cấu hình thực tế. R26 không tự công bố câu nào “đang live”.
2. Một nội dung đã NotebookLM PASS hoặc owner QA PASS cho phép xét tình huống tương ứng; **không** đồng nghĩa một câu trả lời đúng có thể cộng ngay điểm thành thạo. Hợp đồng đáp án chuẩn, mã lựa chọn bất biến, nguồn chấm và lớp chứng cứ phải được xử lý riêng.
3. R26 không sửa `ctXX-r1.json`, `ct09-p1c2-extension-r1.json`, ngân hàng Practice, metadata học thuật, hay bộ đếm v1 hiện hành.
4. Không thực hiện ghép lịch sử nhiều thiết bị, regrade, di chuyển dữ liệu cũ hoặc tự tạo/Deploy Forms.
5. Nếu tổng danh mục 3.173 hoặc phân vùng 59 thay đổi, QA thất bại để yêu cầu kiểm tra phiên bản nguồn.

## Thực thi và bước kế tiếp

- Node CI: `scripts/test-math-v2-new-item-evidence-register-r26.js`.
- Output tổng kết số lượng theo từng chủ đề; bảng 59 ID đầy đủ được tạo theo nội dung repo hiện tại khi chạy CLI.
- Hướng tiếp theo: tìm biên bản theo đúng ID cho 40 MCQ chưa nối được; đối chiếu học thuật/nguồn cho 10 câu rich và bản đồ Family; chuẩn hóa stable option IDs và score provenance trước khi lập kế hoạch PC/iPad Safari canary có sự đồng ý của phụ huynh.

**Quyết định phát hành:** CI PASS chỉ cho phép hợp nhất **mã kiểm toán QA**, tuyệt đối chưa bật Skill v2 cho học sinh.
