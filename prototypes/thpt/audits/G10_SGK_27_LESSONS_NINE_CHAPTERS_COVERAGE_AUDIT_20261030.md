# Toán 10 KNTT — Kiểm toán phủ học liệu theo SGK, 9 chương / 27 bài (30/10/2026)

**AUDIT_KIND:** SOURCE_AND_GITHUB_LIVE_RECONCILIATION · **MAIN_BASELINE_AT_FIRST_AUDIT:** `6a9003dfd51ae249a02f4239b75a093dac4e1b81`. **LIVE_REFRESH_20261030:** GitHub main `95a02d52ca616f100ecb1e4f1aa78cd829abcfa8`; #631 and #636 independently verified MERGED; do not infer deployment from PR state alone.
**PHẠM VI:** Nhánh SGK KNTT duy nhất lớp 10, từ Bài 1 đến Bài 27, hai tập. Chỉ **kiểm toán / điều phối / mô tả thiếu**, không tự tạo câu Readiness, không nâng Academic PASS, không sửa website, không merge/deploy.

## 1. Nguồn và khóa tiêu chuẩn

- Kiến trúc quyền ưu tiên: `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md` — lớp → chương → bài (D1–D6 và Core/Practice) → **Tự kiểm tra CUỐI CHƯƠNG**; nhánh Chuyên đề độc lập, để sau hoàn tất SGK.
- Nguồn S1: SGK và SBT KNTT, hai tập Toán 10, đã xác định trong đúng thư mục `FULL BỘ SGK TOAN KNTT LOP 6 ĐẾN 12 - HOT 26-27 / KNTT TOAN 10` trên Google Drive; bốn PDF: SGK tập 1/tập 2, SBT tập 1/tập 2. Đã rà trực tiếp SGK/SBT tập 1 và kiểm kê file thật ở Drive, **không tuyên bố đã kiểm trực quan lại mọi trang tập 2 trong đợt audit này**.
- Audit từ GitHub **main + các PR đang mở**, không tính 2 nhánh khác là hai bộ câu hỏi. NotebookLM PASS chỉ áp dụng đúng snapshot reviewer đã duyệt, không suy ra runtime/Chapter Readiness PASS.

## 2. Ma trận các chương, bài, tình trạng thực tế

| Chương | Bài SGK | Snapshot Academic D1–D6 trong phạm vi công khai | Đã tích hợp / tình trạng release | Khoảng trống còn lại |
|---|---|---|---|---|
| **I. Mệnh đề và tập hợp** | **B01–B02** | 18/18 public formative + Written, 11 outcomes, NotebookLM PASS exact R01; authoring #628 đã merge | Release #635 đã **merge**; manifest main vẫn `RELEASE_READY`; cần đối chiếu P1/P2 exact deployed receipt của #638 | Chapter Readiness chưa hoạt động; cần xác minh P1/P2 |
| **II. Bất phương trình và hệ bất phương trình bậc nhất hai ẩn** | **B03–B04** | 18/18 items, 10 outcomes, D1–D6 PASS R01; authoring **#631 MERGED** | Technical release **#636 MERGED ngày 30/10/2026** (verified PR metadata); P1 website/gh-pages chưa được kiểm toán trong báo cáo này | Verify exact deploy receipt/device UAT + independent Chapter Readiness |
| **III. Hệ thức lượng trong tam giác** | **B05–B06** | 18/18 items, 10 outcomes, D1–D6 PASS R01; **#633 MERGED vào main `1643c60e`** | Release integration #644 Draft, chưa xác minh phát hành | Canonical registration, UI/QA, Chapter Readiness |
| **IV. Vectơ** | **B07–B11** | B07–08 18/18 PASS Draft #634; B09–11 27/27 PASS Draft #637, tổng **45 public items**, không nhân bản | Hai gói nguồn riêng chưa merge, cần kết hợp thành **một chương SGK** tại release lane | Hòa giải cùng canonical bank, UI/QA, Chapter Readiness |
| **V. Các số đặc trưng của mẫu số liệu không ghép nhóm** | **B12–B14** | 27/27 items, 14 outcomes, D1–D6 PASS R01; **Draft #639** | Authoring only, chưa tích hợp | Canonical registration, UI/QA, Chapter Readiness |
| **VI. Hàm số, đồ thị và ứng dụng** | **B15–B18** | Reviewer ChVI 54/54 **gồm 36 public (28 formative + 8 Written) và 18 private Readiness candidate**; source-specific Academic PASS | Public pilot #612 **merged/published**; manifest main `PUBLISHED_SCOPED` | **A5 trong manifest còn HOLD** về chiều sâu tự học/đánh giá toàn chương; 18 Readiness candidate **0 active**, cần rà D1–D6 công khai thay vì tự nâng cổng |
| **VII. Phương pháp tọa độ trong mặt phẳng** | **B19–B22** | 36 public (32 formative + 4 Written), D5 3 SVG, D6 8 HELP R02, A1–A7 scoped PASS | #625 **merged/published**; manifest main `RELEASE_READY` là nhãn kỹ thuật lịch sử | Tự kiểm tra cuối chương chưa hoạt động; P2 Safari thiết bị thực tế theo biên bản riêng |
| **VIII. Đại số tổ hợp** | **B23–B25** | 28 public (25 formative + 3 Written), D5 1 SVG, D6 6 HELP R02, A1–A7 scoped PASS | #625 **merged/published**; manifest main `RELEASE_READY` lịch sử | Tự kiểm tra cuối chương chưa hoạt động |
| **IX. Tính xác suất theo định nghĩa cổ điển** | **B26–B27** | 16 public (14 formative + 2 Written), D5 2 SVG, D6 4 HELP PASS; 6 private Chapter Readiness candidates được review nhưng **0 active** | #630 **merged/published**, P1 đã được lưu; manifest main `RELEASE_READY` lịch sử | Chưa phát hành Tự kiểm tra độc lập, không bật Mastery |

**Gộp tiến độ D1–D6 công khai theo các gói đã được NotebookLM xét:** **27/27 bài**, 9/9 nhóm chương có học liệu; **242** câu Formative/Written tính theo bảng gói nguồn (18+18+18+45+27+36+36+28+16). Số 242 là **tổng lượng kiểm kê theo packet**, chưa phải bằng chứng toàn bộ 242 đã nằm trong cùng canonical runtime bank hay đã công bố. Không gán `ACADEMIC_PASS` cho toàn chương hoặc lớp vì các verdict và source snapshots tách biệt. **ChVI A5 vẫn bị giữ HOLD** như manifest gốc.

## 3. Thiếu thực chất cần xử lý trước khi tuyên bố lớp 10 hoàn chỉnh

1. **GAP-10-RD-01 · SGK_CHAPTER_READINESS:** Cả **9 chương** chưa có cơ chế Tự kiểm tra cuối chương được xác minh vừa review học thuật, vừa bảo mật exposure, vừa Final Submit, vừa chấm điểm thực. Các candidate ChVI/IX chỉ là candidate, **0 active**. Không đưa stem/answer/rubric held-out lên GitHub Pages hoặc JS public.
2. **GAP-10-INT-02 · tích hợp ChIII–V và hậu kiểm ChII:** #631/#636 cho B03–B04 đã **merge** và không còn thuộc danh sách chờ merge. Chưa đối chiếu P1 deploy thực tế của #636 trong đợt này; xác nhận trên gh-pages/đúng commit mới kết luận đã phát hành. ChIII source #633 đã MERGED; **release #644 vẫn Draft**. ChIV–V vẫn ở các Draft nguồn #634/#637/#639, chưa release: B07–B08, B09–B11, B12–B14. Phải đăng ký ID canonical đúng main hiện hành, không clone stem/key/rubric cho placement.
3. **GAP-10-A5-03 · kiểm toán ChVI:** Main manifest ChVI có `A5_D1_D6_SCOPE` chưa được chốt. Rà D1–D6 cho B15–18 đúng public scope và các hỗ trợ D6 (trong trải nghiệm học sinh thực). Nếu thiếu học liệu học thuật, đây là DELTA_C cần NotebookLM review phần bổ sung. Không tự đổi A5 vì site đã xuất bản.
4. **GAP-10-REG-04 · đối chiếu IDs/provenance:** Kiểm trùng 242 ID theo gói và một canonical bank chính thức tại release head, giữ chung Written/Anchor, skill_id và figure. Không tạo bộ ngân hàng mới. Đặc biệt ChIV B07–B11 phải được xử lý như một chương thống nhất.
5. **GAP-10-UAT-05 · QA chính xác:** Với từng PR release: MathJax, công thức, SVG responsive, điều hướng desktop/mobile, liên kết sâu, không lộ nội dung reviewer vào learner UI; kiểm tra không ảnh hưởng THCS/Gemini/tiến độ. Đối chiếu nhãn manifest lịch sử với P1 thực tế thay vì tự suy `RELEASE_READY` là chưa phát hành hay `PUBLISHED_SCOPED` là đã chốt toàn chương.

## 4. Quy tắc hoàn tất đúng chuẩn SGK (không hạ tiêu chí)

Chỉ tuyên bố **một chương COMPLETE** khi cả:
- tất cả bài có đủ kiến thức D1, ví dụ D2, Core/Practice D3, Written D4, minh họa D5 (khi phù hợp), remediation D6, qua nguồn S1, NotebookLM verdict và QA tích hợp;
- cuối chương có **Tự kiểm tra riêng** phủ đủ outcome SGK, câu mới chưa lộ qua practice (kiểm exposure), không hint/đáp án/Tutor cho đến Final Submit, kỹ thuật chấm và lưu chứng cứ đã được kiểm chứng, demo không ghi điểm;
- nội dung đánh giá nhạy cảm không phát hành client-side dưới dạng key có thể đọc; bài kiểm tra chưa an toàn chỉ ở trạng thái **NOT_ACTIVE**, không ghi Mastery;
- owner cho phép merge/deploy đúng commit và phạm vi; P1/P2 theo dõi riêng.

**Thứ tự chốt:** (1) hậu kiểm ChI/II và tích hợp ChIII–V trên nhánh PR phù hợp, (2) đối chiếu ChVI A5, (3) QA/hoàn thiện các chương VII→IX, (4) đánh giá độc lập cuối từng chương khi có nơi lưu an toàn và engine đạt kiểm thử, (5) nghiệm thu lớp 10, sau đó chuyển lớp 11. Không đưa câu readiness private vào public authoring repo.

## 5. Ranh giới sang lớp 11, lớp 12 và Chuyên đề

- **Lớp 11:** đã có gói độc lập `G11-SGK-CHI-B01-B02` NotebookLM PASS 18/18 trên **Draft PR #627** (`PUBLIC_FORMATIVE_ONLY`, chưa merge). Theo thứ tự SGK tập 1: **ChI B01 Giá trị lượng giác của góc lượng giác → B02 Công thức lượng giác → B03 Hàm số lượng giác → B04 Phương trình lượng giác cơ bản**. Không tạo lại B01/B02; sau giai đoạn lớp 10, tiếp tục từ B03. Các chương kế tiếp theo đúng mục lục SGK.
- **Lớp 12:** có học liệu lịch sử ChVI trong Draft retro-audit #623 với A4/A5/A6 HOLD, không biến thành PASS toàn chương; bắt đầu lớp 12 từ B01 theo SGK Tập 1. Đã định vị SGK12 tập 1+2 trên Drive; thư mục `KNTT TOAN 12` hiện chỉ liệt kê hai file SGK, **chưa xác định được hai SBT12 tương ứng trong folder này**. Phải kiểm chứng SBT12 S1 trước khi author nội dung lớp 12.
- **Chuyên đề:** giữ sau hai chặng trên, chỉ lập crosswalk `skill_id/placement/figure/Written` sau khi ba lớp SGK đã đủ. Khi đó xây dựng ba mục độc lập Kiến thức/Luyện tập/Tự kiểm tra; tái sử dụng câu gốc với cùng `item_id`, không nhân bản nội dung và không suy rộng PASS SGK thành PASS Chuyên đề.

## 6. Quyền thực thi

Báo cáo này **không phải phát hành** và **không tạo Academic PASS mới**. Các PR đang Draft không được merge/deploy bởi audit. Tự kiểm tra là BLOCKED ở runtime cho đến khi có bài held-out review độc lập + bảo vệ đề/keys + cơ chế scoring xác thực + chủ dự án đồng ý.

## 7. Bổ sung kiểm toán sau khi chủ dự án yêu cầu tiếp tục (30/10/2026)

- **ChII đã thay đổi trạng thái thật:** PR authoring **#631 MERGED** và release **#636 MERGED** (GitHub verified), không thể tiếp tục báo hai PR này còn Draft. Việc xác nhận P1 deployed HTML và nghiệm thu di động là một bước riêng.
- **ChVI D6:** [PR #643](https://github.com/TMA2015/self-learning-math/pull/643) vẫn Draft; trên exact head `f64b2f81e00725723afe594b7e3bbb73868c813c`, workflow THPT R4 MkDocs Preview [run 41004303692](https://github.com/TMA2015/self-learning-math/actions/runs/41004303692) **SUCCESS** gồm smoke 1280/768/390px. ChVI `A5_D1_D6_SCOPE` trên main vẫn **HOLD**; physical mobile P2 và owner approval chưa đóng. PR #642 giữ riêng reviewer PASS cho 8 HELP_ID.
- **Độ phủ thiết kế assessment đã có 9/9 chương:** [index R00](G10_SGK_NINE_CHAPTER_READINESS_BLUEPRINT_INDEX_R00_20261030.md) dẫn tới chín file blueprint riêng, 133 dòng mục tiêu không chứa đề/keys. ChVII/VIII có 35 ID từ ma trận `DRAFT_NOT_ACADEMICALLY_REVIEWED`, **không được gọi là outcome đã Academic PASS cho Readiness**. Các bảng mới chưa review NotebookLM riêng cho assessment.
- **Không thay đổi trạng thái phát hành** do bản audit này: không tạo account/backend/score/Mastery, không merge/deploy.
