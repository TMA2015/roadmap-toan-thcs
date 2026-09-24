# Collaboration Task Board

> Bảng này ghi **task phối hợp giữa Gemini và ChatGPT**, không thay thế GitHub Issues hay Content Staging.

## Trạng thái

- `OPEN` – chưa giao.
- `GEMINI-DRAFT` – đang chờ/đã nhận draft Gemini.
- `CHATGPT-REVIEW` – ChatGPT đang kiểm tra/tích hợp.
- `DUAL-CHECK` – hai AI cần làm độc lập.
- `BLOCKED-ACADEMIC` – còn bất đồng học thuật.
- `READY` – đủ điều kiện đưa qua Content Staging/PR.
- `DONE` – đã tích hợp.

## Task đang hoạt động

| TASK_ID | Mục tiêu | Routing | Trạng thái |
|---|---|---|---|
| COLLAB-SYSTEM-001 | Xây AI Collaboration Hub + context + protocol | CHATGPT_LEAD | DONE |
| KNTT-MAP-001 | Chuẩn hóa mapping KNTT → 25 chuyên đề → skill | GEMINI_LEAD + CHATGPT_INTEGRATE | OPEN |
| KNTT-MAP-G6-001 | Mapping Toán 6 KNTT → 25 chuyên đề/skill | GEMINI_LEAD + CHATGPT_INTEGRATE | DONE (PASS-WITH-CHANGES) |
| KNTT-MAP-G7-001 | Mapping Toán 7 KNTT → 25 chuyên đề/skill | GEMINI_LEAD + CHATGPT_INTEGRATE | DONE (PASS-WITH-CHANGES) |
| KNTT-MAP-G8-001 | Mapping Toán 8 KNTT → Vertical Spine/skill | GEMINI_LEAD + CHATGPT_INTEGRATE | OPEN |
| CONTENT-PILOT-001 | Tạo batch nội dung mẫu Core/Vào10/Challenge để thử pipeline | GEMINI_LEAD + CHATGPT_REVIEW | OPEN |
| BENCH-CAP-001 | Chạy benchmark năng lực Gemini/ChatGPT theo nhóm task | DUAL / CATEGORY-BASED | OPEN |
| GEO-LIB-001 | Chuẩn hóa dần thư viện hình SVG, giảm hình Internet | CHATGPT_LEAD + DUAL_QA_FOR_HARD_GEOMETRY | OPEN |

## Task ID tiếp theo

Khi tạo task mới, ưu tiên một ID ngắn, dễ copy trên iPad.

Ví dụ:

- `ALG04-CONTENT-001`
- `GEO17-REVIEW-001`
- `KNTT-G8-MAP-001`

## Nguyên tắc

Bảng này chỉ chứa **trạng thái và routing**.

Draft dài đặt ở Content Staging hoặc Review Packet riêng để Hub luôn ngắn và dễ đọc.
