# Toán 10 KNTT — Chương VI (Hàm số, đồ thị và ứng dụng) · Ma trận phạm vi Tự kiểm tra R00

**PHÂN LOẠI:** `SGK_CHAPTER_READINESS:G10:CHVI` · `OUTCOME_COVERAGE_BLUEPRINT_ONLY` · `NOT_REVIEWED_FOR_ASSESSMENT` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY`.
**BÀI SGK:** B15–B18.
**S1 kiểm kê:** SGK Toán 10 KNTT tập 2 B15 tr.4–10, B16 tr.11–18, B17 tr.19–24, B18 tr.25–27, cuối ChVI tr.28–29; SBT tập 2 B15 tr.3–9, B16 tr.10–15, B17 tr.16–18, B18 tr.19–21, cuối ChVI tr.22–27.
**Nguồn outcome / bằng chứng public:** prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md; D6 new R01 Git blob 396585c59f902f6b4078b4b494adf53d1793f252 / Draft #642

**GIỚI HẠN HỌC THUẬT:** ChVI main manifest vẫn A5_D1_D6_SCOPE=HOLD; D6 8/8 PASS riêng nhưng chưa QA thiết bị thật hoặc merge PR #643. 18 private Readiness candidate đã được review lịch sử nhưng **0 active**; không đưa stem/key lên GitHub.

## Ma trận metadata (không có đề / đáp án / thang điểm)

| Outcome/skill ID có nguồn | Năng lực cần lấy bằng chứng độc lập | Lỗi học sinh cần chẩn đoán |
|---|---|---|
| `B15_OUT_01` | Khái niệm hàm số: mỗi đầu vào có đúng một đầu ra | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y |
| `B15_OUT_02` | Tập xác định, điều kiện dưới căn/mẫu | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y |
| `B15_OUT_03` | Đồ thị hàm số và quan hệ điểm (x;f(x)) | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y |
| `B15_OUT_04` | Đồng biến, nghịch biến trên khoảng thuộc tập xác định | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y |
| `B15_OUT_05` | Mô hình thực tế và miền biến hợp lí | Nhầm tập xác định và khoảng xét biến thiên; đọc đồ thị sai x/y |
| `B16_OUT_01` | Hàm số bậc hai, dạng và hệ số a≠0 | Nhầm dấu hệ số a, trục đối xứng và đỉnh |
| `B16_OUT_02` | Tọa độ đỉnh, trục đối xứng | Nhầm dấu hệ số a, trục đối xứng và đỉnh |
| `B16_OUT_03` | Phác họa parabol từ đỉnh và các điểm đối xứng | Nhầm dấu hệ số a, trục đối xứng và đỉnh |
| `B16_OUT_04` | Tính tăng/giảm và giá trị lớn nhất/nhỏ nhất phụ thuộc dấu a | Nhầm dấu hệ số a, trục đối xứng và đỉnh |
| `B16_OUT_05` | Mô hình bậc hai với điều kiện thực tế | Nhầm dấu hệ số a, trục đối xứng và đỉnh |
| `B17_OUT_01` | Dạng tam thức bậc hai và hệ số đầu | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ |
| `B17_OUT_02` | Bảng dấu theo Δ, kể cả nghiệm kép | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ |
| `B17_OUT_03` | Giải bất phương trình bậc hai với biên đúng | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ |
| `B17_OUT_04` | Tham số và điều kiện dấu với mọi x | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ |
| `B17_OUT_05` | Miền giá trị thực tiễn của mô hình tam thức | Bỏ nghiệm kép/biên dấu nghiêm ngặt hoặc điều kiện ∆ |
| `B18_OUT_01` | Phương trình chứa căn và điều kiện xác định | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu |
| `B18_OUT_02` | Dạng căn bằng biểu thức, điều kiện vế không âm | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu |
| `B18_OUT_03` | Bình phương tương đương có điều kiện và nghiệm ngoại lai | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu |
| `B18_OUT_04` | Lọc nghiệm hợp lí trong bài toán thực tiễn | Bình phương làm phát sinh nghiệm ngoại lai; không thử lại phương trình ban đầu |

**Số mục kiểm kê:** 19; đây là **độ phủ lý thuyết/skill để reviewer xem xét**, không phải 19 câu private Readiness, không xác nhận độ khó đã đạt. Cần reviewer đối chiếu lại ma trận với hoạt động, ví dụ, bài tập cuối chương SGK/SBT trước khi biên soạn đề kín.

## Bảo vệ đánh giá và chuẩn nghiệm thu

- [ ] S1 + NotebookLM phê duyệt ma trận outcome và độ sâu **riêng cho Tự kiểm tra Chương VI**; tách riêng kết quả Topic Readiness.
- [ ] Câu held-out dùng canonical `item_id/content_version` mới, gắn scope `SGK_CHAPTER_READINESS`, không lấy nguyên câu Core/Practice đã xem; kiểm exposure.
- [ ] Không commit **stem, distractor, answer key, worked solution hoặc rubric chấm kín** vào repository public; không mở backend, tài khoản mới nếu chưa được chủ dự án duyệt kiến trúc lưu trữ/đánh giá an toàn.
- [ ] Mọi câu kiểm tra phải cho phép Previous/Next và sửa đáp án trước **Final Submit**, không hint, D6, AI Tutor, đáp án hay thông báo đúng/sai trước nộp.
- [ ] Demo `NO_SCORE/NO_MASTERY`; kết quả chính thức và Skill Mastery chỉ được ghi sau khi engine + integrity + bảo vệ đề và source review đã QA PASS, chủ dự án duyệt chính thức.
- [ ] UI Golden R4 desktop/mobile, ảnh/svg/công thức MathJax, THCS regression, deep links và khả năng giữ trạng thái bài làm phải QA trên exact release head.
- [ ] Quy trình item/figure/Written-Anchor dùng lại **một bản canonical** khi hợp lệ, không nhân bản theo placement.

**Cổng:** `ASSESSMENT_ACADEMIC_PASS=NO`, `ENGINE_RELEASE_QA=NO`, `OWNER_APPROVAL=NO`, `CHAPTER_COMPLETE=NO`. Tài liệu này được phép đặt trong audit công khai chỉ vì **không chứa câu/đáp án kín**.
