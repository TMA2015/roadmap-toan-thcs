# Project Handoff — Self-Learning Math

> **CURRENT CHECKPOINT 29/09/2026.** Trạng thái ngắn hạn, không thay Master Plan. Tên chính thức **Self-Learning Math**, thuộc **G Learning**; AI Tutor là tính năng. Snapshot dựa trên `main` `e80c5e685a24c36ad632a3c8da9963de644575ea`. Mọi phiên mới phải đối chiếu lại SHA của `main`/PR/deploy vì snapshot có thể cũ sau một lần merge.

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

## CĐ19–20 — điểm nối hiện hành

**[Draft PR #170](https://github.com/TMA2015/roadmap-toan-thcs/pull/170)** chứa gói nguồn và receipt kiểm định; head `275749b59c528f0bf6b324018db516b65d250ed3`, baseline `8a13c6c2f076fe360ada6bbaf51d09997e538a4c`. Đây là **audit-only, không merge thành release**. CĐ19–20 candidate chưa xuất bản.

- **CĐ19 R2:** 5 bản giảng + hai câu `GEO19MICRO_016–017` đã có xác nhận học thuật targeted R2. Đã xác nhận điều kiện đảo định lý dây cung, vị trí tương đối đường tròn và ID chuẩn. Receipt: `content-staging/reviews/MATH-CORE19-20-R1-20260929/12_CD19_R2_FINAL_RECEIPT.md` trong PR #170. Không suy diễn 15 câu gốc được regrade.
- **CĐ20 Part A:** 10 nhóm thẻ đề xuất, chia đúng 29 skill, reviewer 10/10 PASS; 5 legacy anchors + 5 subcards. Receipt `11_CD20_PART_A_R1_RECEIPT.md` trong PR #170.
- **CĐ20 Part B:** Báo cáo NotebookLM chủ dự án đã cung cấp ghi 5 bản giảng đề xuất (`geo20-core-1a,1b,2a,2b,4a`) và 14 câu `GEO20MICRO_016–029`, **19/19 PASS cho toán học và văn bản**. *Không chứng nhận SVG sau render và chưa deploy.* Cần lưu receipt có khóa packet/source trước khi tích hợp.
- **Safety:** hai bộ 15 câu gốc, ID, assessed skill, card mapping và lịch sử attempt giữ nguyên. CĐ20 phải có overlay chia thẻ **có phiên bản, không migration ngầm**, tiến độ cũ không bị tính lại theo mẫu số mới. `GEO20MICRO_011` tiếp tục thuộc legacy `geo20-core-4`; `geo20-core-2b` hai kỹ năng/hai câu không cần tạo câu giả.

## Công việc tiếp theo

1. Lưu receipt CĐ20 Part B và đối chiếu exact source/packet IDs; không chạy lại CĐ20 Part A hoặc CĐ19 R2 nếu nguồn không thay.
2. So sánh draft #170 với `main` mới nhất, rà soát hình SVG render thực tế và giả thiết hình học.
3. PR triển khai riêng CĐ19–20 đúng Soft Academic Cards/dual-modal, câu/giảng được review và CĐ20 overlay v2 bảo toàn history.
4. Chạy theorem/diagram/math QA, schema, answer indices, evidence regression, strict MkDocs build, desktop/iPad/mobile browser, merge/deploy chỉ khi đủ điều kiện; owner device acceptance là cổng riêng.
5. Sau từng mốc cập nhật checkpoint này và registry/context, ghi rõ **draft / QA / merged / deployed / owner-accepted**.

## Giao thức bảo trì và giới hạn chat

Cập nhật checkpoint ngay sau quyết định được chủ dự án duyệt, review kết thúc, PR merge hoặc deploy. Git history lưu các lần cập nhật; không nhét log tiến độ vào Master Plan. Khi đoạn chat dài hoặc trước khi chuyển chat, chủ động chốt checkpoint. Không có bộ đếm chính xác báo trước giới hạn hội thoại, nên **không cam kết cảnh báo đúng ngưỡng**. Câu lệnh khôi phục: **“Đọc Project Handoff trên GitHub, đối chiếu main và tiếp tục.”**
