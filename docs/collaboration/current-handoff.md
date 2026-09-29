# Project Handoff — Self-Learning Math

> **CURRENT CHECKPOINT 29/09/2026.** Trạng thái ngắn hạn, không thay Master Plan. Tên chính thức **Self-Learning Math**, thuộc **G Learning**; AI Tutor là tính năng. Snapshot đối chiếu đến `main` `4cfa70ff999eb469ac4e33dadb6447abae1c7383` (PR #174). Mọi phiên mới phải đối chiếu lại SHA của `main`/PR/deploy vì snapshot có thể cũ sau một lần merge.

## Mở cuộc trò chuyện mới

Đọc [Master Plan v1.1.1](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/governance/TOAN_THCS_MASTER_PLAN.md), tài liệu này, [Golden Template](../huong-dan/golden-template-hoc-luyen-kiem-tra.md) và Task Registry; sau đó kiểm tra GitHub `main` và nhánh/PR đang mở. **Không dùng tên hoặc trạng thái trong chat cũ để ghi đè quyết định và code hiện hành.** Sau mỗi mốc cần cập nhật lại tài liệu này, Task Registry và Project Context.

## Quyết định giao diện/học thuật cần giữ

- 25 chuyên đề là Vertical Spine; KNTT lớp/chương/bài là overlay. Việc chia lại CĐ20 không thêm chuyên đề thứ 26. Core/Support/Entrance10/Challenge/Bridge phân tầng; không đưa Challenge vào Core readiness.
- Golden Template: **Đọc & hiểu → Core theo chặng (học có trợ giúp) → Practice Room → Core Readiness (độc lập, chấm sau Submit)**. Formative evidence và assessment evidence tách biệt; không hard gate.
- **Soft Academic Cards** theo giao diện đã duyệt CĐ04–18/CĐ18: màu nhấn nhẹ, header/content, tối đa ba cột trên khung rộng và responsive trên iPad/mobile; hiển thị bài/lớp, tiên quyết, kỹ năng, số câu và coverage thật. Mỗi thẻ có **Bài giảng / Luyện tập** mở trong modal riêng, không bung card trong lưới; chuyển mode và chuyển câu, hint/giảng lại/lời giải theo yêu cầu. **Mở/đóng/xem câu không tạo lượt sai; chỉ chọn đáp án mới ghi answer.**
- Số câu mỗi thẻ phụ thuộc skill, không ép ba câu; mỗi item một assessed skill chính, supporting skills không nhận điểm giả. Không nói đã luyện khi chưa có câu riêng; 80%/coverage không đồng nghĩa mastery. Không xóa/đổi ID câu, `card_id` lịch sử, URL, dữ liệu học sinh, ảnh SVG đã duyệt hay điều hướng sáu nhóm +25 lối tắt.

## Phạm vi đã xuất bản, không làm lại

| Mốc | Trạng thái xác nhận |
|---|---|
| CĐ04–06 | PR #166; dedicated Core, bài giảng và dual-modal; self-audited. |
| CĐ07 | Pilot, 5 R2-approved teaching copies; 17 micro; 11/11 cơ hội skill. |
| CĐ08–12 | PR #167; 25 bài giảng, bốn câu lấp gap, câu cũ giữ nguyên. |
| CĐ13–15 | PR #168; 15 bài giảng, chín câu thêm; owner đã kiểm tra thiết bị. |
| CĐ16–18 | PR #169 **merged/deployed** tại `8a13c6c2f076fe360ada6bbaf51d09997e538a4c`: 15 bài giảng, 46 micro, 36/36 cơ hội skill, chỉ thêm GEO16MICRO_016. Ảnh CĐ18 chủ dự án cung cấp; nghiệm thu đầy đủ mọi thiết bị cần ghi riêng nếu chưa được xác nhận. Registry cũ ghi READY là sai. |
| Project identity | PR #171 merged tại `e80c5e685a24c36ad632a3c8da9963de644575ea`; Master Plan v1.1.1 và GitHub Pages workflow đã PASS. |

Self-audit ở các batch trước **không được gọi là NotebookLM independent PASS**. Rollout Golden 13–20 trước đó khác với việc phát hành trang Core độc lập mới.

## CĐ19–20 — đã tích hợp và triển khai, không làm lại

- **[PR #173 — CĐ19](https://github.com/TMA2015/roadmap-toan-thcs/pull/173)** merged `607b521635653ae89df68ed1890869a331721da3`; Deploy MkDocs run [36597534733](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36597534733) **SUCCESS**. Trang Core độc lập đúng mẫu Soft Academic Cards, năm bài giảng đúng nguồn NotebookLM R2, thêm `GEO19MICRO_016–017`, giữ nguyên 15 câu gốc và dữ liệu. 17 micro, năm card, 14/14 cơ hội kỹ năng có câu riêng. Source-locked QA, strict build, browser desktop/mobile, hiện hình SVG và không ghi lượt làm ảo đã PASS.
- **[PR #174 — CĐ20](https://github.com/TMA2015/roadmap-toan-thcs/pull/174)** merged `4cfa70ff999eb469ac4e33dadb6447abae1c7383`; Deploy MkDocs run [36599072769](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36599072769) **SUCCESS**. Trang Core độc lập dùng `topic20-core-display-v2.json`: 10 chặng/29 kỹ năng và 29 micro. Bản workspace 5 card cũ giữ nguyên Git blob `774997cd9ac4d2efc1c53c17c0de48e6fcdba497`; 15 câu đầu giữ nguyên toàn bộ record `d61845552c9a484ab9b220606ff20c9a9e6a7046`. `GEO20MICRO_011` vẫn thuộc `geo20-core-4`. V2 **không migration storage**, giữ v1 read-only snapshot và mẫu số kỹ năng 9/8/3/6/3; card `geo20-core-2b` có đúng hai câu. Browser/technical/strict build và SVG render QA PASS.
- CĐ20 Part A: 10 nhóm/29 kỹ năng được phản biện PASS. Part B: 5 **card mới** và 14 câu mới được phản biện nội dung văn bản 19/19 PASS. 5 bản giảng ở card cũ được **self-audit**, không gán nhầm nhãn NotebookLM độc lập. 14 câu mới được hoán vị vị trí phương án đúng A/B/C/D=4/4/3/3 (nguyên văn bốn phương án, chỉ đổi vị trí; key cũ 001–015 không đổi), source-to-published answer mapping được test. Reviewer **không** tự chứng nhận SVG render; CI/browser kiểm riêng.
- **[Draft PR #170](https://github.com/TMA2015/roadmap-toan-thcs/pull/170)** tiếp tục là hồ sơ audit-only; bao gồm Part A, R2 CĐ19 và nguyên văn báo cáo Part B do chủ dự án cung cấp. Không merge #170 như PR triển khai. Tài liệu tái đối chiếu đã nằm trên `main`: `content-staging/reviews/MATH-CORE19-R2-RELEASE-RECONCILIATION-20260929.md`, `MATH-CORE20-V2-RELEASE-RECONCILIATION-20260929.md`, `MATH-CORE20-R1-CANDIDATES-EXACT-20260929.md`.
- **Nghiệm thu thiết bị của chủ dự án chưa ghi nhận cho CĐ19–20 sau bản phát hành này.** CI/browser giả lập không phải bằng chứng owner iPad/iPhone/PC chấp nhận. Giữ task QA thiết bị riêng, không suy diễn.

## Công việc tiếp theo

1. Chủ dự án kiểm tra nhanh CĐ19–20 trên desktop/iPad/iPhone: 4 bước, 5/10 card và hai modal, CĐ20 nhóm 2b đúng hai câu, SVG không vỡ, điều hướng/trở lại, tiến độ cũ giữ nguyên. Ghi kết quả owner QA riêng.
2. Nếu phát hiện lỗi: xác định đúng ID, asset, trình duyệt và phiên bản; sửa bằng PR nhỏ và test không hồi quy. Không chỉnh câu gốc hoặc đánh giá độc lập đã lưu theo cảm tính.
3. Sau QA thiết bị, tiếp tục kiểm định **bảng kỹ năng và mức ưu tiên** trong toàn bộ 25 chuyên đề theo quyết định trước đó: gộp trùng lặp, phân biệt Core/Entrance10/Challenge, đối chiếu ngân hàng hiện có và mẫu đề thi thật trước khi suy diễn tần suất. Đây là workflow tiếp theo, không quay lại tự động nhân rộng Core CĐ04–20.
4. Sau mỗi quyết định/release, cập nhật handoff + Task Registry + Context trong cùng batch và đối chiếu `main`/PR/QA ở lượt chat mới; không ghi đè Master Plan bằng nhật ký tiến độ.

## Giao thức bảo trì và giới hạn chat

Cập nhật checkpoint ngay sau quyết định được chủ dự án duyệt, review kết thúc, PR merge hoặc deploy. Git history lưu các lần cập nhật; không nhét log tiến độ vào Master Plan. Khi đoạn chat dài hoặc trước khi chuyển chat, chủ động chốt checkpoint. Không có bộ đếm chính xác báo trước giới hạn hội thoại, nên **không cam kết cảnh báo đúng ngưỡng**. Câu lệnh khôi phục: **“Đọc Project Handoff trên GitHub, đối chiếu main và tiếp tục.”**
