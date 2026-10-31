# Toán 10 KNTT — Chương IX (Tính xác suất theo định nghĩa cổ điển) · Ma trận phạm vi Tự kiểm tra R00

**PHÂN LOẠI:** `SGK_CHAPTER_READINESS:G10:CHIX` · `OUTCOME_COVERAGE_BLUEPRINT_ONLY` · `NOT_REVIEWED_FOR_ASSESSMENT` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY`.
**BÀI SGK:** B26–B27.
**S1 kiểm kê:** SGK Toán 10 KNTT tập 2 ChIX, Bài 26–27 và bài tập cuối chương; cần reviewer xác minh lại trang in chính xác của từng bài từ S1 trong gói review riêng (không suy từ dữ liệu JS).
**Nguồn outcome / bằng chứng public:** docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js (public canonical skills/14 question IDs); prototypes/thpt/release-queue/CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md

**GIỚI HẠN HỌC THUẬT:** 10 outcome lấy từ trường skill của bank public đã reviewer xét D1–D4; 6 private Readiness candidates lịch sử **0 active**, không copy body/key.

## Ma trận metadata (không có đề / đáp án / thang điểm)

| Outcome/skill ID có nguồn | Năng lực cần lấy bằng chứng độc lập | Lỗi học sinh cần chẩn đoán |
|---|---|---|
| `G10-B26-CLASSICAL_RATIO` | Tính xác suất cổ điển theo số kết quả đồng khả năng | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng |
| `G10-B26-COMPLEMENT` | Xác suất biến cố đối ở mô hình đơn giản | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng |
| `G10-B26-EVENT_SUBSET` | Biểu diễn biến cố là tập con của không gian mẫu | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng |
| `G10-B26-EXPERIMENT_SAMPLE_SPACE` | Mô tả phép thử, không gian mẫu và kết quả sơ cấp | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng |
| `G10-B26-SCOPE_SMALL_PROBABILITY` | Chỉ áp dụng định nghĩa cổ điển khi kết quả đồng khả năng | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng |
| `G10-B27-COMPLEMENT_PROBABILITY` | Tính xác suất qua biến cố đối ở tình huống tổng hợp | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại |
| `G10-B27-COUNTING_OUTCOMES` | Đếm trường hợp thuận lợi và toàn bộ trường hợp đúng | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại |
| `G10-B27-EQUIPROBABLE_MODELLING` | Xây dựng mô hình đồng khả năng với mẫu không thay thế | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại |
| `G10-B27-MULTISTEP_CONTEXT` | Giải thích xác suất nhiều bước theo bối cảnh | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại |
| `G10-B27-TREE_SEQUENCE` | Dùng cây kết quả có thứ tự và đếm tránh sót | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại |

**Số mục kiểm kê:** 10; đây là **độ phủ lý thuyết/skill để reviewer xem xét**, không phải 10 câu private Readiness, không xác nhận độ khó đã đạt. Cần reviewer đối chiếu lại ma trận với hoạt động, ví dụ, bài tập cuối chương SGK/SBT trước khi biên soạn đề kín.

## Bảo vệ đánh giá và chuẩn nghiệm thu

- [ ] S1 + NotebookLM phê duyệt ma trận outcome và độ sâu **riêng cho Tự kiểm tra Chương IX**; tách riêng kết quả Topic Readiness.
- [ ] Câu held-out dùng canonical `item_id/content_version` mới, gắn scope `SGK_CHAPTER_READINESS`, không lấy nguyên câu Core/Practice đã xem; kiểm exposure.
- [ ] Không commit **stem, distractor, answer key, worked solution hoặc rubric chấm kín** vào repository public; không mở backend, tài khoản mới nếu chưa được chủ dự án duyệt kiến trúc lưu trữ/đánh giá an toàn.
- [ ] Mọi câu kiểm tra phải cho phép Previous/Next và sửa đáp án trước **Final Submit**, không hint, D6, AI Tutor, đáp án hay thông báo đúng/sai trước nộp.
- [ ] Demo `NO_SCORE/NO_MASTERY`; kết quả chính thức và Skill Mastery chỉ được ghi sau khi engine + integrity + bảo vệ đề và source review đã QA PASS, chủ dự án duyệt chính thức.
- [ ] UI Golden R4 desktop/mobile, ảnh/svg/công thức MathJax, THCS regression, deep links và khả năng giữ trạng thái bài làm phải QA trên exact release head.
- [ ] Quy trình item/figure/Written-Anchor dùng lại **một bản canonical** khi hợp lệ, không nhân bản theo placement.

**Cổng:** `ASSESSMENT_ACADEMIC_PASS=NO`, `ENGINE_RELEASE_QA=NO`, `OWNER_APPROVAL=NO`, `CHAPTER_COMPLETE=NO`. Tài liệu này được phép đặt trong audit công khai chỉ vì **không chứa câu/đáp án kín**.
