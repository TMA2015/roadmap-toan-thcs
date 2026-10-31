# G10-SGK-CHV — Toán 10 KNTT Chương V, B12–B14 (release custody)

PACKET_ID: G10-SGK-CHV
LEARNING_PATH: SGK_CHAPTER
LESSON_SCOPE: B12–B14 ONLY
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY
STATE: RELEASE_READY
SOURCE_COMMIT: ff1866fd62e2a45379a0372566e1a87ce8156033
SOURCE_SNAPSHOT: prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md [Git blob 49502fe39cf0a67f6a3e973a77f94164150637a7; original SHA256 77a189bb1aa199f3b81b8915903f85bae6659729849251ad92fa092761fd850c]
REVIEW_RECEIPT: Authoring #639 ready/G10-SGK-CHV.md [blob e2c713f899ea2e2f17abffb4d70f07866361fed5], NotebookLM D1–D6 R01 27/27 and 14/14 PASS, reviewed HELP01/02 R02 and FIG01 R02 scoped receipts, independent HELP02 R03 source equivalence
CURRENT_PR: #680 consolidated release candidate (B12 integration from #677, ChVI D6 from #668, G10 9-chapter self-check); B13/B14 #671 published

**Phạm vi:** 24 câu SGK Core/Practice (B12/B13/B14 mỗi bài 8), 3 Written gồm một Anchor, 3 SVG, 6 HELP_ID; 14 outcomes, 9 worked examples. Đã phát hành B13/B14 tại #671; #677 bổ sung riêng B12 với 8 canonical, W12, hai HELP R02 và SVG R02. PUBLIC_FORMATIVE_ONLY ở đây phân loại gói B12–B14 Core/Practice/Written; trang Tự kiểm tra ChV tích hợp cùng release #680 ở chế độ **client-side tự đánh giá sau Final Submit**, không ghi tiến độ hay Skill Mastery, không phải bằng chứng khảo thí độc lập.

## A — biên soạn/review
- [x] A1_SOURCE_SNAPSHOT — Authoring #639 khóa source R01 Git blob 49502fe39cf0a67f6a3e973a77f94164150637a7 và các R02 overlay; R1 integration test kiểm chứng lại blob bất biến.
- [x] A2_SGK_SBT_SCOPE — S1 KNTT Toán 10 tập 1: SGK B12 trang 73–77, B13 78–83, B14 84–88; SBT B12 72–73, B13 74–77, B14 78–80 theo receipt #639.
- [x] A3_NOTEBOOKLM_VERDICT — R01 27/27 IDs và 14/14 outcomes PASS; B12 HELP01/02 R02 và SVG FIG01 R02 có verdict delta riêng; không suy rộng sang Readiness/Topic.
- [x] A4_ITEM_OUTCOME_IDS — 24 public canonical Core/Practice (8+8+8) + 3 Written; 6 canonical HELP_ID, 3 SVG; B12 8/8 mới và B13/B14 giữ nguyên, kiểm tra không trùng.
- [x] A5_D1_D6_SCOPE — D1–D6 public formative đủ theo gói này: 9 ví dụ, 24 câu, 3 Written, 3 SVG, 6 HELP; chưa có full Chapter Readiness.
- [x] A6_DELTA_RESOLVED — HELP01, HELP02 và FIG01 R01 sai được thay duy nhất bằng bản R02 đã review; HELP02 recovered Temp xác nhận 5/5 bước, không gán nhầm byte parity của bản gốc chưa có checksum.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — Ngân hàng 18 câu RD1 ChV được học thuật review riêng và chuyển thành bài tự đánh giá client-side theo owner #662; đáp án chỉ hiển thị trên UI sau Final Submit, không chống xem mã nguồn, không nhân bản vào SGK formative bank và không ghi tiến độ/Mastery.

## R — nhánh phát hành
- [x] R1_INTEGRATED_CURRENT_MAIN — #677 HEAD trước khi thêm manifest 7e674d931af75ba96e2a4a0eb005938b83e25b78: test đối chiếu R01 8/8 B12, đúng Git blob SVG FIG01 R02, 2 HELP R02 mỗi cái 5 bước, cùng 16 IDs B13/B14 không đụng nguồn.
- [x] R2_EXACT_HEAD_CI — Gói kết hợp B12/D6/9 RD1 tại PR #680, code HEAD f93c1335525a21834bd1854b1f38574d0a4c444a: THPT R4 Preview #41213570180 SUCCESS; Roadmap PR Quality #41213570178 SUCCESS; Branding #41213570119 SUCCESS; Skill QA #41213570193 SUCCESS. Sau commit cập nhật metadata RELEASE_READY phải chạy lại và yêu cầu 2 workflow trên **exact final HEAD** đều SUCCESS; nếu thiếu/FAIL thì HOLD trước merge.
- [x] R3_CLEAN_STUDENT_UI — #680 đưa B12 Knowledge/Core/Practice/Written và Golden ChV grid lên học sinh, thêm 9 lối Tự kiểm tra từng câu/Final Submit: câu đã review hiển thị đúng chương, sau nộp mới mở đáp án/lời giải; biên bản reviewer và hồ sơ riêng không lên giao diện.
- [x] R4_ASSESSMENT_SAFETY — Chín bài SGK Chapter tự đánh giá client-side (141 ID, 54 câu MCQ/TF kiểm tra khóa, phần tự luận/trả lời mở tự đối chiếu) chỉ báo kết quả sau Final Submit; không ghi localStorage/sessionStorage/Firebase/progress/Mastery và không mở TOPIC_READINESS/đánh giá thành thạo chính thức.
- [x] R5_OWNER_APPROVAL — Chủ dự án 31/10/2026 đã xác nhận kết thúc biên soạn SGK 10 và yêu cầu nhánh A6 hoàn thiện một đợt phát hành, chấp thuận mô hình Tự kiểm tra client-side đơn giản như THCS theo #662/#679, không ghi Mastery; **R5 merge/deploy vẫn cần chủ dự án cho phép phạm vi và commit cụ thể sau khi R1–R4 trên exact final HEAD đạt**.

## AP — Academic Presentation (batch 31/10/2026)
- [x] AP1_IDEA_HIERARCHY — B12 Knowledge phân mảng đúng/gần đúng, sai số tuyệt đối, sai số tương đối, giới hạn độ chính xác và quy tròn; 3 ví dụ riêng.
- [x] AP2_FORMULA_VISIBILITY — THPT R4 browser QA có MathJax/responsive guard 390/820/1440; kiểm tra biểu thức và ký hiệu B12 trong bank 8/8.
- [x] AP3_FIGURE_READABILITY — FIG01 SVG R02 được khóa blob fede1bb23334ff7bd66a6f5a6adc39cf856c5d52, đúng vai a gần đúng và ā số đúng, có title/desc.
- [x] AP4_SELF_STUDY_CLARITY — B12 chia kiến thức, 3 ví dụ, 2 Core + 6 Practice, đúng 2 HELP 5 bước, có đường quay về câu gốc.
- [x] AP5_RESPONSIVE_VISUAL — CI browser trên viewport 390/820/1440 cùng Golden grid và no-overflow/MathJax; **thiết bị Safari vật lý vẫn là P2 riêng**.

## P — sau phát hành
- [ ] P1_DEPLOY_RECEIPT — Chưa merge/deploy PR #680; chỉ ghi SUCCESS sau workflow deploy và đối chiếu đúng SHA/9 trang/27 bài/ChVI D6 trên gh-pages.
- [ ] P2_DEVICE_UAT — Chưa có UAT Safari iPhone / Android Chromium vật lý được xác nhận; không suy từ mô phỏng.

**Release restriction:** PR #680 gói kết hợp B12 + ChVI D6 + 9 chapter self-check đã đạt 4/4 QA trên code HEAD f93c1335. Manifest/REGISTER chuyển RELEASE_READY với điều kiện kiểm chứng lại exact metadata HEAD sau commit này. **Không merge/deploy nếu chưa có cả hai CI cuối SUCCESS và owner quyết định cho phép release đúng phạm vi/commit.** P1/P2 ghi riêng, chưa kích hoạt Skill Mastery hay đánh giá khảo thí độc lập.
