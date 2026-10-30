# Toán 10 KNTT — Chương VIII (Đại số tổ hợp) · Ma trận phạm vi Tự kiểm tra R00

**PHÂN LOẠI:** `SGK_CHAPTER_READINESS:G10:CHVIII` · `OUTCOME_COVERAGE_BLUEPRINT_ONLY` · `NOT_REVIEWED_FOR_ASSESSMENT` · `NO_SCORE/NO_MASTERY`.
**BÀI SGK:** B23–B25.
**S1 kiểm kê:** SGK Toán 10 KNTT tập 2 B23 tr.59–64, B24 tr.65–71, B25 tr.72–77, cuối ChVIII tr.78–79; SBT tập 2 B23 tr.50–52, B24 tr.53–54, B25 tr.55–56, cuối ChVIII tr.57–59.
**Nguồn outcome / bằng chứng public:** prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.2.md (matrix đề xuất, Git blob 92808da0176c2ba6e282a1872521a38299802919) + scoped public review receipts trong release-queue của main

**GIỚI HẠN HỌC THUẬT:** Danh sách outcome lấy từ matrix v0.2 là proposal; câu/khóa Readiness chưa được phản biện độc lập. Phân biệt tường minh mở rộng nâng cao và Core SGK, nhất là tổng hệ số lẻ.

## Ma trận metadata (không có đề / đáp án / thang điểm)

| Outcome/skill ID có nguồn | Năng lực cần lấy bằng chứng độc lập | Lỗi học sinh cần chẩn đoán |
|---|---|---|
| `G10-B23-ADDITION` | Quy tắc cộng trong các nhóm rời nhau | Đếm lặp/sót do cộng nhóm không rời hoặc nhân bước không đúng |
| `G10-B23-MULTIPLICATION` | Quy tắc nhân các bước và mô hình | Đếm lặp/sót do cộng nhóm không rời hoặc nhân bước không đúng |
| `G10-B23-DIGIT_COUNT` | Đếm chữ số có/không lặp | Đếm lặp/sót do cộng nhóm không rời hoặc nhân bước không đúng |
| `G10-B23-CASE_SPLIT` | Chia trường hợp không trùng | Đếm lặp/sót do cộng nhóm không rời hoặc nhân bước không đúng |
| `G10-B24-PERMUTATION` | Hoán vị, giai thừa, xếp kề nhau | Nhầm thứ tự trong chỉnh hợp/tổ hợp và xử lý điều kiện |
| `G10-B24-ARRANGEMENT` | Chỉnh hợp, chọn chức danh | Nhầm thứ tự trong chỉnh hợp/tổ hợp và xử lý điều kiện |
| `G10-B24-COMBINATION` | Tổ hợp chọn nhóm | Nhầm thứ tự trong chỉnh hợp/tổ hợp và xử lý điều kiện |
| `G10-B24-CONSTRAINTS` | Chọn nhóm có điều kiện và phân vai | Nhầm thứ tự trong chỉnh hợp/tổ hợp và xử lý điều kiện |
| `G10-B25-NEWTON_EXPANSION` | Hệ số Newton và khai triển | Sai dấu hệ số Newton, số hạng hằng hoặc phạm vi nâng cao |
| `G10-B25-COEFFICIENT_SIGN` | Hệ số bậc k có dấu | Sai dấu hệ số Newton, số hạng hằng hoặc phạm vi nâng cao |
| `G10-B25-CONSTANT_TERM` | Số hạng không chứa x | Sai dấu hệ số Newton, số hạng hằng hoặc phạm vi nâng cao |
| `G10-B25-COEFFICIENT_SUM` | Tổng hệ số, tổng bậc lẻ | Sai dấu hệ số Newton, số hạng hằng hoặc phạm vi nâng cao |

**Số mục kiểm kê:** 12; đây là **độ phủ lý thuyết/skill để reviewer xem xét**, không phải 12 câu private Readiness, không xác nhận độ khó đã đạt. Cần reviewer đối chiếu lại ma trận với hoạt động, ví dụ, bài tập cuối chương SGK/SBT trước khi biên soạn đề kín.

## Bảo vệ đánh giá và chuẩn nghiệm thu

- [ ] S1 + NotebookLM phê duyệt ma trận outcome và độ sâu **riêng cho Tự kiểm tra Chương VIII**; tách riêng kết quả Topic Readiness.
- [ ] Câu held-out dùng canonical `item_id/content_version` mới, gắn scope `SGK_CHAPTER_READINESS`, không lấy nguyên câu Core/Practice đã xem; kiểm exposure.
- [ ] Không commit **stem, distractor, answer key, worked solution hoặc rubric chấm kín** vào repository public; không mở backend, tài khoản mới nếu chưa được chủ dự án duyệt kiến trúc lưu trữ/đánh giá an toàn.
- [ ] Mọi câu kiểm tra phải cho phép Previous/Next và sửa đáp án trước **Final Submit**, không hint, D6, AI Tutor, đáp án hay thông báo đúng/sai trước nộp.
- [ ] Demo `NO_SCORE/NO_MASTERY`; kết quả chính thức và Skill Mastery chỉ được ghi sau khi engine + integrity + bảo vệ đề và source review đã QA PASS, chủ dự án duyệt chính thức.
- [ ] UI Golden R4 desktop/mobile, ảnh/svg/công thức MathJax, THCS regression, deep links và khả năng giữ trạng thái bài làm phải QA trên exact release head.
- [ ] Quy trình item/figure/Written-Anchor dùng lại **một bản canonical** khi hợp lệ, không nhân bản theo placement.

**Cổng:** `ASSESSMENT_ACADEMIC_PASS=NO`, `ENGINE_RELEASE_QA=NO`, `OWNER_APPROVAL=NO`, `CHAPTER_COMPLETE=NO`. Tài liệu này được phép đặt trong audit công khai chỉ vì **không chứa câu/đáp án kín**.
