# Project Handoff — Self-Learning Math

> **CURRENT CHECKPOINT — 30/09/2026, sau CĐ03 + đóng 7 gap CĐ02/CĐ23.** Tên sản phẩm: **Self-Learning Math**, thuộc **G Learning**; AI Tutor là một tính năng. Snapshot đối chiếu với `main` `0f00e939e1dc4dd3a2035d4e1bd0e116fc5d3809`; trạng thái GitHub live và PR/workflow mới hơn phải được tra lại khi tiếp nối.

## Khôi phục trong cuộc trò chuyện mới

Đọc tài liệu này trước, cùng [Master Plan v1.1.1](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/governance/TOAN_THCS_MASTER_PLAN.md), [Golden Template](../huong-dan/golden-template-hoc-luyen-kiem-tra.md), `assets/data/collaboration/task-registry.json` và GitHub `main`. Kiểm tra mở/merge/deploy theo commit thực tế. Quyết định được duyệt và trạng thái mới ghi ở đây có ưu tiên cao hơn tường thuật cũ, nhưng không thay được bằng chứng source/code. Sau mỗi mốc QA/định hướng/merge/deploy, cập nhật checkpoint này và registry/context có liên quan.

## Mốc mới nhất — CĐ03 và 7 gap kỹ năng đã đóng (30/09/2026)

- **CĐ03:** academic R2 PASS và [PR #183](https://github.com/TMA2015/roadmap-toan-thcs/pull/183) đã phát hành 5 thẻ +15 micro, route/menu bốn bước; deploy run `36662797203` SUCCESS. Owner desktop/iPad QA riêng vẫn OPEN.
- **CĐ02/CĐ23:** NotebookLM packet `MATH-CORE02-23-GAP-R1-20260930`, source blob `9695c998aade401f4c4129aa25ac6a8392a41b2b`, review **7/7 PASS**. [PR #186](https://github.com/TMA2015/roadmap-toan-thcs/pull/186) merge `0f00e939e1dc4dd3a2035d4e1bd0e116fc5d3809`; PR Quality PASS và Deploy MkDocs run `36664825146` SUCCESS.
- Append-only: CĐ02 thêm `NUM02MICRO_016–020` cho `luy-thua`, `phan-tich-thua-so-nguyen-to`, `bcnn`, `gia-tri-tuyet-doi`, `quy-dong-so-sanh-phan-so`; CĐ23 thêm `PRO23MICRO_016–017` cho card 3 `kiem-tra-xac-suat` và card 5 `xac-suat-co-dien`.
- CĐ02 hiện **20 micro**, CĐ23 **17 micro**; mọi skill đã khai báo trong từng card đều có ít nhất một cơ hội luyện riêng. 30 record gốc được kiểm bằng canonical blob và giữ nguyên; Readiness/localStorage/lịch sử học sinh không migrate hoặc regrade. `coverage ≠ mastery`.
- Audit [PR #185](https://github.com/TMA2015/roadmap-toan-thcs/pull/185) vẫn là provenance review-only, không merge làm release.

## Mốc nền — Batch A chuẩn hóa luồng học (30/09/2026)

- [PR #178](https://github.com/TMA2015/roadmap-toan-thcs/pull/178) merge tại `c1b461885d7da1bd3cafef34f357c04c493df3b0`, [GitHub Pages Deploy](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36606931537) **SUCCESS**; ba workflow PR (Roadmap QA, G Learning branding, Skill assessment pilot) PASS. **Owner device QA cho bản Batch A vẫn OPEN**, không suy từ nghiệm thu CĐ19–20 trước đó.
- CĐ**02/21/23/24/25** đã có trang học độc lập `/core/`, top stepper bốn bước, menu trái và link lớp, cùng Soft Academic Cards hai modal Bài giảng/Luyện tập. Một nguồn route `docs/assets/javascripts/topic-learning-routes-v1.js` dùng chung cho stepper và workspace (22 route đang tồn tại); không thêm nút bốn bước cho CĐ03/CĐ22 khi chưa có học liệu/trang thật. CĐ01 là tổng quan.
- 5 workspace JSON + 5 micro-bank JSON được khóa Git blob, **25 cards + 75 item** nguyên bản; ID, `card_id`, tags, đáp án, tầng học và `toan-thcs-practice-v1` không bị viết lại. CĐ02 chỉ KNTT Core lớp 6; CĐ24 là **Core-Support**, CĐ25 là **Entrance10**. CĐ22 giữ nhánh tự chọn **THPT-Bridge**.
- Trình duyệt desktop/mobile đã kiểm tra các route, modal, mở/đóng/chuyển câu không tạo lượt làm, trả lời mới ghi đúng một lượt, dữ liệu sentinel cũ còn nguyên; kiểm thử 25 trang và strict MkDocs PASS. CI/browser không thay xác nhận của chủ dự án trên iPad/iPhone.
- **Khoảng trống được phát hiện, không được che:** CĐ02 khai báo 15 skill occurrences nhưng 5 skill chưa có câu riêng trong 4 thẻ: `luy-thua`, `phan-tich-thua-so-nguyen-to`, `bcnn`, `gia-tri-tuyet-doi`, `quy-dong-so-sanh-phan-so`; CĐ23 có hai thiếu sót **theo thẻ**: `kiem-tra-xac-suat` tại card 3, `xac-suat-co-dien` tại card 5. Giữ cảnh báo hiển thị thật, không tự tính mastery/cấp credit hoặc tạo câu giả. Xây ứng viên bổ sung theo review học thuật riêng.

### Bước tiếp tục sau mốc này

1. **B01–B07 skill taxonomy:** quay lại read-only/source-locked reconciliation đã lưu; chuẩn hóa concept / task-demand / evidence / clone-family trước khi thay đổi runtime hoặc mastery. Không cộng gộp coverage thành mastery.
2. **Owner QA CĐ03:** kiểm tra desktop/iPad thực tế trang Core mới; xác nhận stepper bốn bước, menu trái, 5 thẻ, modal Bài giảng/Luyện tập, MathJax và không có phantom attempt.
3. **Owner QA Batch A:** trạng thái riêng vẫn OPEN nếu chưa có xác nhận thiết bị cho đúng bản Batch A #178; không kế thừa xác nhận CĐ19–20/CĐ03.
4. **Không mở lại 7 gap CĐ02/23:** academic gate và release đã đóng PASS; chỉ sửa lại nếu có bằng chứng lỗi mới hoặc owner QA phát hiện vấn đề.

### Batch B CĐ03 — academic R2 PASS, đã triển khai

- NotebookLM R1 kiểm đủ **5/5 cards + 15/15 micro** và trả `REVISIONS_REQUIRED`; targeted R2 packet `MATH-CORE03-R2-20260930` trên source blob `a84c2740169070d6919bc8d2f274d10fb914fa32` sau đó trả **PASS**. R2 xác nhận 6/6 mục thay đổi PASS và hồi quy 4/4 card + 10/10 micro không đổi PASS.
- Ranh giới Grade 6 đã khóa: Core assessed chỉ `ti-so`, `ti-so-phan-tram`; `doi-don-vi-ti-so` là Prerequisite/Core-Support. `RAT03MICRO_002` là `FORMATIVE_SUPPORT_ONLY`, `gates_core=false`, không cấp Core Readiness. Grade 7 Core giữ 9 kỹ năng tỉ lệ thức/dãy tỉ số/tỉ lệ thuận-nghịch.
- [PR #183](https://github.com/TMA2015/roadmap-toan-thcs/pull/183) merge bằng squash commit `03e27855e1499cc2f674be2b83ebdb2fb35a0d29`. Ba PR workflow **SUCCESS** và [Deploy MkDocs run 36662797203](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36662797203) **SUCCESS**.
- CĐ03 nay có `topic03-learning-workspace.json`, 5 thẻ, micro bank riêng `RAT03MICRO_001–015`, trang `/core/`, top stepper bốn bước, menu trái và link Học theo lớp cho lớp 6/7. 120 câu `RAT03V1_001–120`, manifest cũ, Practice/Readiness và dữ liệu `toan-thcs-practice-v1` không bị migrate/regrade.
- Draft PR #180 tiếp tục là provenance/audit-only, **không merge làm release**. Owner real-device QA cho CĐ03 vẫn là cổng riêng sau deploy.

## Quyết định không được tự làm lệch

- 25 chuyên đề là một Vertical Spine G6–G9, lớp/KNTT là overlay. Có thể mở rộng THPT, SAT/ACT, logic sau này; chia thêm thẻ CĐ20 không tạo chuyên đề thứ 26.
- Học theo **Đọc & hiểu → Core theo chặng → Practice Room → Core Readiness**. Core có trợ giúp; Readiness độc lập, không hint/Tutor, chỉ feedback sau Submit; practice/assessment evidence tách biệt, không khóa cứng.
- Giữ **Soft Academic Cards** đã nghiệm thu: header/body rõ, màu nhấn nhẹ, tối đa ba cột khung rộng, responsive tablet/mobile; bài/lớp, tiên quyết, coverage chính xác; hai nút **Bài giảng / Luyện tập** mở modal riêng, chuyển mode và câu. Mở/đóng/xem câu không ghi thêm attempt; chỉ chọn đáp án mới ghi.
- Số micro theo số skill thực tế, không cố định ba; một item có một assessed skill chính, supporting skill không tính điểm; coverage không phải mastery. Không đổi ID, legacy `card_id`, URL, localStorage, readiness, ảnh/SVG đã duyệt hoặc menu sáu nhóm +25 lối tắt khi không có migration/QA riêng.
- Phân biệt independent academic text review, bounded self-audit, QA render/browser, GitHub deploy và owner real-device acceptance; không đánh đồng.

## Phát hành và nghiệm thu đã có

| Phạm vi | Mốc và bằng chứng | Giới hạn |
|---|---|---|
| **CĐ03** | PR #183, merge `03e27855e1499cc2f674be2b83ebdb2fb35a0d29`; NotebookLM targeted R2 PASS; 5 thẻ + 15 micro; Deploy run 36662797203 SUCCESS | Owner desktop/iPad QA chưa ghi nhận; `RAT03MICRO_002` support-only, không tính Core Readiness |
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
