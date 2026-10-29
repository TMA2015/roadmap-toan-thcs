# THPT G10 ChVI–IX · Academic / D6 Gate Evidence — 2026-10-29

STATUS: PROCESS_AND_EVIDENCE_CHECKPOINT_ONLY
SOURCE_BRANCH: process/thpt-release-queue-checklists-20261029
BASE_REPO: TMA2015/self-learning-math
NO_NEW_ACADEMIC_PASS: YES
NO_CONTENT_READY_PROMOTION: YES
NO_MERGE_DEPLOY: YES

## 1. Chính sách và phân biệt hai nghĩa D6

- Academic Depth **D6 = Help / Remediation**, theo Project Source 04: học sinh có thể được hỗ trợ không phụ thuộc AI ở các điểm kẹt và quay lại tiền đề. Đây là một phần của **A5_D1_D6_SCOPE**.
- Hồ sơ tác giả ChVII–VIII gọi **D6 Gate Preflight** là kiểm thử runtime/Golden UI/security/device gồm D6-01...D6-20. Để không nhầm lẫn, checkpoint này gọi tập đó là **RUNTIME_D6_QA**, không thay thế academic D6 và cũng không biến CI thành PASS NotebookLM.
- Nếu chưa chứng minh đầy đủ trong RELEASE_SCOPE, A5 vẫn [ ] và packet ở inventory/. Reviewed item bank, SVG, Readiness candidates không tự cấp CONTENT_READY.

## 2. Pin GitHub và phạm vi học liệu đã đối chiếu

| Gói | PR, exact head | Academic/source snapshot | A gate còn chặn |
|---|---|---|---|
| G10-SGK-CHVI | merged #612, main 3ad8d87297f3dcc2e65b3d29350ba1ef933e3043 | 54 IDs: 28 formative + 8 Written + 18 private Readiness; 0 active Readiness | A5: chưa đủ đường học/assessment cho phạm vi hoàn chỉnh, tiếp tục HOLD |
| G10-SGK-CHVII | Draft #620 @ 51b0fc0cf1f8bb79a7d0280380ac83b1850658e1 | 36 IDs = 32 formative + 4 Written (1 Anchor); B19–B22; D5 FIG01–03; reviewer receipts pinned trong manifest | A5: academic D6/help-remediation và toàn chương chưa được clear |
| G10-SGK-CHVIII | Draft #621 @ 5d14ee0b027d276a3b1824af8a0ff15f72a5acfe (base #620) | 28 IDs = 25 formative + 3 Written (1 Anchor); B23–B25; FIG04; B25-P07 delta scoped PASS | A5: academic D6/help-remediation và toàn chương chưa được clear |
| G10-SGK-CHIX | Draft #616 @ 1c205a9a87f5e0fc2563be14e1c1a911a14c6d76 | 16 public IDs = 14 formative + 2 Written; 6 private Readiness candidates reviewed, 0 active | A5: D5/D6 còn thiếu; A6: final delta reconciliation pending |

ChVII–VIII: 35/35 S1 reviewer-reported outcome receipts; 64 unique public canonical items (36 + 28); 14 mandatory SGK Readiness slots were academically reviewed but remain private and inactive. ChVII RD02 is permanently RETIRED_EXPOSED_CANDIDATE, replaced in narrowly reviewed delta by RD09. ChVIII RD05/RD06 optional, RD07/RD08 v0.2 replace mandatory slots. Không lặp ID/khởi tạo ngân hàng mới.

**Nguồn S1:** KNTT Toán 10 tập 2, ChVII SGK trang in 29–58 / SBT 27–49; ChVIII SGK 59–79 / SBT 50–59. Con số trang và reviewer receipts từ các hồ sơ nguồn đã khóa; không tuyên bố source-by-source full academic audit mới.

## 3. QA GitHub đã kiểm tra theo đúng commit (không phải owner device QA)

- #620 @ 51b0fc0: **THPT R4 Preview QA = success**, **Roadmap PR Quality = success**.
- #621 @ 5d14ee0: **THPT R4 Preview QA = success**; không suy ra Roadmap PR Quality PASS khi chưa có run tương ứng.
- #622 @ 1df86dd08889942e7d77d356d8505edf6bcf97a9: **THPT R4 Preview QA = success**, **Roadmap PR Quality = cancelled** ở bước browser interaction cuối; step kiểm tra release-queue trước đó đã success. Vì vậy không tuyên bố #622 full PR QA PASS.
- Test browser ở #621 (scripts/test-thpt-r4-preview-browser.js tại SHA ec0ece9c9db2ae695e258a42c40a74ab7fc1a4cd) có kiểm tra route ChVII/VIII, số Core/Practice, ID chia sẻ, phân vai B22-C01, hình FIG01–04 chỉ chèn khi mở lời giải, Written ẩn rubric ban đầu, readiness không kích hoạt, viewport giả lập. Đây là **automated Chromium evidence**; không thay thế Safari/iPhone/iPad thiết bị thật hoặc bảo mật đánh giá sản xuất.

## 4. RUNTIME_D6_QA — cập nhật từ preflight cũ, không cấp PASS mới

| Phạm vi test trước đây | Bằng chứng hiện tại | Kết luận hẹp |
|---|---|---|
| D6-03, 08: learner route ChVII/VIII SGK | Đã tồn tại trên hai Draft PR; browser smoke của hai commit thành công | PREVIEW_AUTOMATED_ONLY; không còn mô tả 'chưa tích hợp' như preflight 28/10 |
| D6-04–07, 12: shared SVG/solution disclosure | 3 SVG ở #620; FIG04 ở #621; script có assertions trước/sau mở lời giải | BROWSER_AUTOMATED_ONLY; physical-device chưa PASS |
| D6-10, 11, 17, 18: layout/IDs/Written/optional classification | Stage checks, source parity, modal/viewport smoke | STATIC_AND_BROWSER_PARTIAL; cần source-to-render/real UAT |
| D6-09: full vertical Topic independent path | Chỉ Topic Hàm số pilot trước đó | NOT_FULLY_REVIEWED; SGK PASS không cấp Topic PASS |
| D6-13–16, 20: independent protected Readiness / exposure / secure scoring | ChVII/VIII Readiness thông tin-only; no activated engine/key | HARD_HOLD_FOR_ACTIVATION; không dựa vào static demo |
| D6-19: real device browser matrix | Không có owner iPhone/iPad Safari acceptance mới trong hồ sơ này | NOT_VERIFIED |

## 5. Next academic actions, không biên soạn lại bản đã duyệt

1. **ChVII–VIII A5:** kiểm toán riêng academic D6 (hints, worked solution, lỗi thường gặp, skill prerequisites và remedial link) trên chính 36+28 item và 7 Knowledge pages đã review; lập **minimal delta** theo item/outcome. Đừng tạo item/ID mới chỉ vì muốn tăng số lượng.
2. Nếu chỉ là UI/links không đổi toán, phân loại DELTA_A và tự QA. Nếu thay đổi toán/đáp án/rubric/coverage/remediation học thuật có ý nghĩa, DELTA_C và tạo Temp_ Markdown snapshot + prompt NotebookLM theo Sources 06/07; giữ receipt đúng phiên bản.
3. **ChIX:** hoàn tất D5, D6 và delta reconciliation trên #616 rồi tái tích hợp theo main/#620/#621 dependency; không nhân bản #614/#615.
4. Chỉ khi có bằng chứng đủ A1–A7 theo RELEASE_SCOPE mới chuyển **cùng manifest** từ inventory/ → ready/ trên PR kiểm soát; R1–R5, owner permission và post-deploy là cổng riêng.

## 6. Checkpoint

ACADEMIC_NEW_VERDICTS: NONE
ACADEMIC_D6_REMEDIATION: NOT_YET_INDEPENDENTLY_CLEARED
RUNTIME_D6_AUTOMATION: PARTIAL_PREVIEW_PASS_SCOPED
REAL_DEVICE_UAT: NOT_VERIFIED
CONTENT_READY_COUNT: 0
RELEASE_READY_COUNT: 0
PR622: DRAFT_OPEN_NO_MERGE
