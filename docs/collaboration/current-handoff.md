# Project Handoff — Self-Learning Math

> **CURRENT CHECKPOINT — 30/09/2026, sau Batch A.** Tên sản phẩm: **Self-Learning Math**, thuộc **G Learning**; AI Tutor là một tính năng. Snapshot đối chiếu với `main` `c1b461885d7da1bd3cafef34f357c04c493df3b0`; trạng thái GitHub live và PR/workflow mới hơn phải được tra lại khi tiếp nối.

## Khôi phục trong cuộc trò chuyện mới

Đọc tài liệu này trước, cùng [Master Plan v1.1.1](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/governance/TOAN_THCS_MASTER_PLAN.md), [Golden Template](../huong-dan/golden-template-hoc-luyen-kiem-tra.md), `assets/data/collaboration/task-registry.json` và GitHub `main`. Kiểm tra mở/merge/deploy theo commit thực tế. Quyết định được duyệt và trạng thái mới ghi ở đây có ưu tiên cao hơn tường thuật cũ, nhưng không thay được bằng chứng source/code. Sau mỗi mốc QA/định hướng/merge/deploy, cập nhật checkpoint này và registry/context có liên quan.

## Mốc mới nhất — Batch A chuẩn hóa luồng học (30/09/2026)

- [PR #178](https://github.com/TMA2015/roadmap-toan-thcs/pull/178) merge tại `c1b461885d7da1bd3cafef34f357c04c493df3b0`, [GitHub Pages Deploy](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36606931537) **SUCCESS**; ba workflow PR (Roadmap QA, G Learning branding, Skill assessment pilot) PASS. **Owner device QA cho bản Batch A vẫn OPEN**, không suy từ nghiệm thu CĐ19–20 trước đó.
- CĐ**02/21/23/24/25** đã có trang học độc lập `/core/`, top stepper bốn bước, menu trái và link lớp, cùng Soft Academic Cards hai modal Bài giảng/Luyện tập. Một nguồn route `docs/assets/javascripts/topic-learning-routes-v1.js` dùng chung cho stepper và workspace (22 route đang tồn tại); không thêm nút bốn bước cho CĐ03/CĐ22 khi chưa có học liệu/trang thật. CĐ01 là tổng quan.
- 5 workspace JSON + 5 micro-bank JSON được khóa Git blob, **25 cards + 75 item** nguyên bản; ID, `card_id`, tags, đáp án, tầng học và `toan-thcs-practice-v1` không bị viết lại. CĐ02 chỉ KNTT Core lớp 6; CĐ24 là **Core-Support**, CĐ25 là **Entrance10**. CĐ22 giữ nhánh tự chọn **THPT-Bridge**.
- Trình duyệt desktop/mobile đã kiểm tra các route, modal, mở/đóng/chuyển câu không tạo lượt làm, trả lời mới ghi đúng một lượt, dữ liệu sentinel cũ còn nguyên; kiểm thử 25 trang và strict MkDocs PASS. CI/browser không thay xác nhận của chủ dự án trên iPad/iPhone.
- **Khoảng trống được phát hiện, không được che:** CĐ02 khai báo 15 skill occurrences nhưng 5 skill chưa có câu riêng trong 4 thẻ: `luy-thua`, `phan-tich-thua-so-nguyen-to`, `bcnn`, `gia-tri-tuyet-doi`, `quy-dong-so-sanh-phan-so`; CĐ23 có hai thiếu sót **theo thẻ**: `kiem-tra-xac-suat` tại card 3, `xac-suat-co-dien` tại card 5. Giữ cảnh báo hiển thị thật, không tự tính mastery/cấp credit hoặc tạo câu giả. Xây ứng viên bổ sung theo review học thuật riêng.

### Bước tiếp tục sau mốc này

1. **Batch B — CĐ03:** lập 5 chặng học đúng mapping lớp 6/7 từ bài nguồn và ngân hàng hiện có, soạn bài giảng/câu micro *candidate*, đưa NotebookLM review độc lập và đối soát nguồn/đáp án trước mọi triển khai. Hiện tại **CĐ03 chưa có trang Core hoặc workspace**, menu 3 bước là đúng trạng thái.
2. **Gap CĐ02/23:** chuẩn bị review packet bảy cơ hội luyện còn thiếu, gắn từng ID/card/grade/layer và math answer QA. Không thay thẻ cũ hay key/progress.
3. **Owner QA Batch A:** kiểm tra desktop/iPad thực tế sau deploy và ghi rõ thiết bị/từng phát hiện. CĐ22 không gộp THPT-Bridge vào THCS readiness, CĐ25 không gộp kỹ năng thi với điểm Toán.
4. B01–B07 taxonomy read-only ở ledger đã lưu vẫn có hiệu lực, sẽ tiếp tục sau khi đồng bộ UI/học thuật những phần còn thiếu; không merge các draft học thuật ngoài cổng approval.

### Batch B CĐ03 — R1 candidate đã đóng gói, đang chờ phản biện

- [Draft PR #180](https://github.com/TMA2015/roadmap-toan-thcs/pull/180), packet `MATH-CORE03-R1-20260930`, frozen source lesson blob `61df5dd2a1f352c50005d40147bb229344861ed8`. Một source NotebookLM có bài nguồn nguyên bản, mapping lớp 6/7 và ứng viên **5 card + 15 micro**; prompt chấm từng 5+15 ID riêng. Câu mới RAT03MICRO_001–015, key candidate A/B/C/D = 4/4/4/3, 12 assessed-skill occurrences. Không trùng ID 120 câu RAT03V1 cũ, không có exact-text clone với 120 đề nguồn (preflight tác giả; **chưa phải phản biện độc lập**).
- Chưa merge/deploy PR #180, chưa sinh `topic03-learning-workspace.json`, Core route, micro bank chính thức hay thay data học sinh. Người dùng upload **duy nhất** `review-packets/core03/01_UPLOAD_TO_NOTEBOOKLM_CORE03_R1.md` vào NotebookLM; copy prompt `02_COPY_TO_NOTEBOOKLM_CHAT_R1.txt` vào Chat, rồi chuyển kết quả để đối soát. Trọng tâm grade6 đổi đơn vị là kỹ năng nền/Support hay Core assessed, điều kiện mẫu số và sự khác biệt tỉ lệ thuận/nghịch.
- Sau NotebookLM R1: reconcile correction từng ID, targeted R2 khi nguồn sửa, sau đó mới có PR triển khai CĐ03 và browser QA. **Không tự coi author preflight = academic PASS**.

## Quyết định không được tự làm lệch

- 25 chuyên đề là một Vertical Spine G6–G9, lớp/KNTT là overlay. Có thể mở rộng THPT, SAT/ACT, logic sau này; chia thêm thẻ CĐ20 không tạo chuyên đề thứ 26.
- Học theo **Đọc & hiểu → Core theo chặng → Practice Room → Core Readiness**. Core có trợ giúp; Readiness độc lập, không hint/Tutor, chỉ feedback sau Submit; practice/assessment evidence tách biệt, không khóa cứng.
- Giữ **Soft Academic Cards** đã nghiệm thu: header/body rõ, màu nhấn nhẹ, tối đa ba cột khung rộng, responsive tablet/mobile; bài/lớp, tiên quyết, coverage chính xác; hai nút **Bài giảng / Luyện tập** mở modal riêng, chuyển mode và câu. Mở/đóng/xem câu không ghi thêm attempt; chỉ chọn đáp án mới ghi.
- Số micro theo số skill thực tế, không cố định ba; một item có một assessed skill chính, supporting skill không tính điểm; coverage không phải mastery. Không đổi ID, legacy `card_id`, URL, localStorage, readiness, ảnh/SVG đã duyệt hoặc menu sáu nhóm +25 lối tắt khi không có migration/QA riêng.
- Phân biệt independent academic text review, bounded self-audit, QA render/browser, GitHub deploy và owner real-device acceptance; không đánh đồng.

## Phát hành và nghiệm thu đã có

| Phạm vi | Mốc và bằng chứng | Giới hạn |
|---|---|---|
| CĐ04–06 | PR #166 Core riêng, dual-modal, self-audit | Không suy ra độc lập NotebookLM |
| CĐ07 | Pilot, 5 bài giảng R2, 17 micro, 11/11 cơ hội skill | Coverage ≠ mastery |
| CĐ08–12 | PR #167; 25 bài giảng, bốn item gap | Item cũ được giữ |
| CĐ13–15 | PR #168; 15 giảng, chín item mới; owner đã kiểm tra thiết bị | Tách audit nguồn và thiết bị |
| CĐ16–18 | PR #169, merge `8a13c6c2f076fe360ada6bbaf51d09997e538a4c`; 15 giảng, 46 micro, 36/36 cơ hội skill | Không làm lại |
| **CĐ19** | [PR #173](https://github.com/TMA2015/roadmap-toan-thcs/pull/173) merge `607b521635653ae89df68ed1890869a331721da3`; năm bài giảng R2, 17 micro, 14/14 cơ hội skill | 15 item gốc không được tái kiểm định chỉ từ packet |
| **CĐ20** | [PR #174](https://github.com/TMA2015/roadmap-toan-thcs/pull/174) merge `4cfa70ff999eb469ac4e33dadb6447abae1c7383`; 10 thẻ v2, 29 skill, 15 câu cũ +14 item mới; CI và [Deploy MkDocs](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36599072769) SUCCESS | Năm giảng mới/14 câu text review, năm giảng legacy/hint self-audit; không đồng nghĩa SVG được NotebookLM chứng nhận |

**Owner device acceptance 29/09/2026:** chủ dự án xác nhận “đã kiểm tra trên iPad, desktop. ok” cho **CĐ19–20**. Ghi `OWNER_ACCEPTED_IPAD_DESKTOP` cho phiên bản đã xuất bản. **Không suy diễn đã test iPhone**, cũng không tự gán xác nhận riêng cho từng edge case về lưu tiến độ nếu owner chưa chỉ rõ. QA browser/CI trước phát hành là bằng chứng riêng.

**CĐ20 history contract:** workspace v1 năm thẻ và 15 item cũ bảo toàn; v2 là display overlay riêng, không migration hoặc tính lại mẫu số cũ; `GEO20MICRO_011` vẫn thuộc `geo20-core-4`. `geo20-core-2b` chỉ có hai skill/hai câu, không sinh câu giả. Hoán vị đáp án của 14 câu mới có kiểm thử 4/4/3/3 và provenance, không sửa option text.

**Audit-only [PR #170](https://github.com/TMA2015/roadmap-toan-thcs/pull/170)** vẫn là hồ sơ nguồn/receipt độc lập, không merge thành release. CĐ19 R2 5+2 PASS, CĐ20 Part A 10/10, Part B 19/19 text/math PASS, nhưng phạm vi không gồm SVG rendered hay năm giảng legacy. Master Plan v1.1.1 ở PR #171 và cơ chế handoff PR #172 đã merge. Không chạy lại các vòng review đã đóng khi source không thay.

## Học thuật B01–B07 — hồ sơ tồn tại trước Batch A (chưa bật runtime)

1. **Skill taxonomy / assessed-skill audit:** bắt đầu bằng read-only/source-locked reconciliation của 39 mục CĐ04–07 và các cụm B01–B07, tránh trộn `41 graph nodes` với hệ thống skill toàn chương trình. Đối chiếu các [draft PR #146–155](https://github.com/TMA2015/roadmap-toan-thcs/pulls) và file hiện hành, không mặc định draft đã merge hoặc review toàn bộ item. Phân biệt kỹ năng cốt lõi, kỹ năng phụ thuộc, context, kỹ năng tổng hợp và Extension; soát trùng, nhãn quá rộng, câu trùng phương pháp và độ bao phủ.
2. Tách kết luận đã được NotebookLM/Gemini phản biện khỏi self-audit; các câu sửa học thuật trong PR #151/#153/#155 vẫn là draft, không nhập riêng hoặc tự thay đáp án/kho câu vì nhận định ở một báo cáo.
3. Phân tầng ưu tiên Core/Entrance10/Challenge theo mapping chuẩn, sau đó mới đối chiếu corpus đề thi có nguồn/địa phương/năm để nói về tần suất; tuyệt đối không tự suy tần suất từ ngân hàng tự biên soạn.
4. Lập một bản quyết định read-only đề xuất trước khi thay taxonomy runtime; giữ nguyên ID, tags lịch sử và dữ liệu học sinh cho đến khi có cơ chế compatibility/evidence riêng. Sau quyết định, ghi PR/QA và cập nhật handoff.

**B01–B07 evidence ledger (read-only):** [bản tổng hợp và kiểm tra mười câu sửa nguồn](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/review-packets/skill-taxonomy/B01-B07-CURRENT-RECONCILIATION-20260930.md). Bản này chỉ tổng hợp phản biện và preflight, chưa bật taxonomy hay sửa ngân hàng.

## Duy trì trạng thái

Cập nhật GitHub sau mỗi mốc quyết định, QA, merge, deploy hoặc nghiệm thu; lịch sử Git giữ bản cũ. Không có bộ đếm đáng tin cậy để cảnh báo chính xác giới hạn chat; chủ động chốt checkpoint khi phiên dài. Câu khôi phục: **“Đọc Project Handoff trên GitHub, đối chiếu main và tiếp tục.”**
