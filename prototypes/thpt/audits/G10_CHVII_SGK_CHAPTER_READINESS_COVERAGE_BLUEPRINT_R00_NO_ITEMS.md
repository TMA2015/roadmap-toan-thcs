# Toán 10 KNTT — Chương VII (Phương pháp tọa độ trong mặt phẳng) · Ma trận phạm vi Tự kiểm tra R00

**PHÂN LOẠI:** `SGK_CHAPTER_READINESS:G10:CHVII` · `OUTCOME_COVERAGE_BLUEPRINT_ONLY` · `NOT_REVIEWED_FOR_ASSESSMENT` · `NOT_ACTIVE` · `NO_SCORE/NO_MASTERY`.
**BÀI SGK:** B19–B22.
**S1 kiểm kê:** SGK Toán 10 KNTT tập 2 B19 tr.29–34, B20 tr.35–41, B21 tr.42–46, B22 tr.47–56, cuối ChVII tr.57–58; SBT tập 2 B19 tr.27–31, B20 tr.31–38, B21 tr.38–41, B22 tr.41–45, cuối ChVII tr.46–49.
**Nguồn outcome / bằng chứng public:** `prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.4.md` (authoring branch `content/thpt-g10-chvii-chviii-authoring-20261028`, Git blob `a145b898e13ef88dbc5d37e879b243a1e6e880a3`); base v0.2 blob `92808da0176c2ba6e282a1872521a38299802919` chỉ là lịch sử, không dùng làm chuẩn snapshot mới.

**GIỚI HẠN HỌC THUẬT / ĐỐI CHIẾU NGUỒN 30/10:** Reviewer S1 đã đối chiếu **35/35 outcome của ChVII–VIII cho phạm vi PUBLIC_FORMATIVE_ONLY** (D1/D2 + delta R1; D3/D4 63 câu gốc và B25-P07 qua delta riêng), theo `prototypes/thpt/release-queue/CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md` (main Git blob `f9997fc36bc511cc73d96f1a5f4141d7a5b43358`). **Không suy ra** một outcome đã được reviewer chứng nhận cho bài kiểm tra độc lập hoặc đã có Readiness `item_id` hợp lệ. Đây vẫn là R00 assessment proposal.

**Rủi ro phạm vi cần reviewer xét riêng:** B22-C01 về tâm sai đã được phân tầng `ELECTIVE_SPECIALIZED_NOT_CORE` trong v0.4; coverage Core Elip dựa vào B22-P01/W22-01. Không tự đưa kiến thức optional hoặc câu đã luyện vào kiểm tra Core. `THPT-G10-CHVII-RD02` là candidate đã lộ/RETIRED; không dùng lại.

## Ma trận metadata (không có đề / đáp án / thang điểm)

| Outcome/skill ID có nguồn | Năng lực cần lấy bằng chứng độc lập | Lỗi học sinh cần chẩn đoán |
|---|---|---|
| `G10-B19-NORMAL_DIRECTION` | Pháp tuyến/chỉ phương | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-GENERAL_POINT` | Tổng quát qua điểm và song song | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-PARAMETRIC` | Phương trình tham số | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-TWO_POINTS` | Đường thẳng qua hai điểm | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-MEMBERSHIP` | Điểm thuộc đường | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-MULTISTEP` | Giao điểm và vuông góc tích hợp | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B19-LINEAR_MODEL` | Mô hình tuyến tính | Nhầm vectơ chỉ phương với pháp tuyến hoặc phương trình tương đương |
| `G10-B20-RELATIVE_POSITION` | Song song/trùng/cắt và tham số | Sai dấu góc/khoảng cách hoặc nhầm song song với trùng nhau |
| `G10-B20-PERPENDICULAR` | Vuông góc và đường qua điểm | Sai dấu góc/khoảng cách hoặc nhầm song song với trùng nhau |
| `G10-B20-INTERSECTION` | Giao điểm hai đường | Sai dấu góc/khoảng cách hoặc nhầm song song với trùng nhau |
| `G10-B20-DISTANCE` | Khoảng cách điểm–đường | Sai dấu góc/khoảng cách hoặc nhầm song song với trùng nhau |
| `G10-B20-ANGLE` | Góc giữa hai đường | Sai dấu góc/khoảng cách hoặc nhầm song song với trùng nhau |
| `G10-B21-CIRCLE_STANDARD` | Phương trình chính tắc, tâm, bán kính | Không kiểm điều kiện bán kính dương, tiếp tuyến và số giao điểm |
| `G10-B21-CIRCLE_GENERAL` | Hoàn thành bình phương, điều kiện bán kính | Không kiểm điều kiện bán kính dương, tiếp tuyến và số giao điểm |
| `G10-B21-CIRCLE_TANGENT` | Tiếp tuyến, tiếp xúc | Không kiểm điều kiện bán kính dương, tiếp tuyến và số giao điểm |
| `G10-B21-CIRCLE_THROUGH_POINTS` | Qua hai/ba điểm và tâm có điều kiện | Không kiểm điều kiện bán kính dương, tiếp tuyến và số giao điểm |
| `G10-B21-LINE_CIRCLE_POSITION` | Vị trí đường và đường tròn | Không kiểm điều kiện bán kính dương, tiếp tuyến và số giao điểm |
| `G10-B22-ELLIPSE_PARAMETERS` | Elip, tiêu điểm, trục, tham số | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |
| `G10-B22-HYPERBOLA_PARAMETERS` | Hypebol, tiêu điểm, đỉnh | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |
| `G10-B22-HYPERBOLA_ASYMPTOTES` | Tiệm cận hypebol | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |
| `G10-B22-PARABOLA_FOCUS` | Parabol, tiêu điểm, đường chuẩn | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |
| `G10-B22-CONIC_INTERSECTION` | Điểm trên conic và giao tuyến | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |
| `G10-B22-CONIC_MODEL` | Ứng dụng hình học conic | Nhầm tiêu điểm/đường chuẩn/tiệm cận; suy ngoài phạm vi SGK |

**Số mục kiểm kê:** 23; đây là **độ phủ lý thuyết/skill để reviewer xem xét**, không phải 23 câu private Readiness, không xác nhận độ khó đã đạt. Cần reviewer đối chiếu lại ma trận với hoạt động, ví dụ, bài tập cuối chương SGK/SBT trước khi biên soạn đề kín.

## Bảo vệ đánh giá và chuẩn nghiệm thu

- [ ] S1 + NotebookLM phê duyệt ma trận outcome và độ sâu **riêng cho Tự kiểm tra Chương VII**; tách riêng kết quả Topic Readiness.
- [ ] Câu held-out dùng canonical `item_id/content_version` mới, gắn scope `SGK_CHAPTER_READINESS`, không lấy nguyên câu Core/Practice đã xem; kiểm exposure.
- [ ] Không commit **stem, distractor, answer key, worked solution hoặc rubric chấm kín** vào repository public; không mở backend, tài khoản mới nếu chưa được chủ dự án duyệt kiến trúc lưu trữ/đánh giá an toàn.
- [ ] Mọi câu kiểm tra phải cho phép Previous/Next và sửa đáp án trước **Final Submit**, không hint, D6, AI Tutor, đáp án hay thông báo đúng/sai trước nộp.
- [ ] Demo `NO_SCORE/NO_MASTERY`; kết quả chính thức và Skill Mastery chỉ được ghi sau khi engine + integrity + bảo vệ đề và source review đã QA PASS, chủ dự án duyệt chính thức.
- [ ] UI Golden R4 desktop/mobile, ảnh/svg/công thức MathJax, THCS regression, deep links và khả năng giữ trạng thái bài làm phải QA trên exact release head.
- [ ] Quy trình item/figure/Written-Anchor dùng lại **một bản canonical** khi hợp lệ, không nhân bản theo placement.

**Cổng:** `ASSESSMENT_ACADEMIC_PASS=NO`, `ENGINE_RELEASE_QA=NO`, `OWNER_APPROVAL=NO`, `CHAPTER_COMPLETE=NO`. Tài liệu này được phép đặt trong audit công khai chỉ vì **không chứa câu/đáp án kín**.
