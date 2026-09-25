# Collaboration Relay Protocol v2 – ChatGPT ↔ Gemini

## Mục tiêu

Loại bỏ kiểu cộng tác “mỗi ý kiến = một thay đổi nhỏ”. Hai AI làm việc theo **artifact + batch + acceptance gate**. Project owner chỉ cần chuyển một packet khi không có shared transport; không phải diễn giải hay hòa giải hai AI.

## Giới hạn kỹ thuật

Hiện không giả định ChatGPT có thể gọi trực tiếp một phiên Gemini hoặc ngược lại. “Direct collaboration” của dự án nghĩa là cả hai đọc/ghi theo **cùng một giao thức và source-of-truth**, qua một transport được cấu hình (ưu tiên repository/shared workspace), thay vì trao đổi văn xuôi tự do.

Không đặt API key trong GitHub Pages hoặc repository.

## Đơn vị giao tiếp: Collaboration Packet

Mỗi packet là JSON theo `collaboration-packet-v2.schema.json`.

Bắt buộc:
- protocol_version
- packet_id
- task_id
- context_version
- from / to
- mode: AUTHOR | REVIEW | INDEPENDENT_CHECK | INTEGRATION_DECISION
- scope
- source_artifacts
- claims[]
- proposed_changes[]
- tests[]
- uncertainties[]
- acceptance

Mỗi claim có trạng thái:
- FACT_VERIFIED
- PEDAGOGICAL_PROPOSAL
- TECHNICAL_PROPOSAL
- HYPOTHESIS
- DISAGREEMENT

Không được biến proposal thành fact chỉ vì AI còn lại đồng ý.

## Vòng kín chuẩn

1. ChatGPT tạo **BATCH_SPEC**: scope, schema, invariants, acceptance tests.
2. Gemini AUTHOR/REVIEW một batch đủ lớn và trả đúng packet.
3. ChatGPT chạy source verification + schema/technical QA và phát **INTEGRATION_DECISION**.
4. Nếu PASS/PASS-WITH-CHANGES: tích hợp **cả batch** bằng một PR.
5. Nếu có DISAGREEMENT học thuật: chỉ các item tranh chấp quay lại vòng review; phần còn lại không bị chia vụn.
6. Sau khi pilot đạt acceptance gate, cùng template được rollout theo batch.

## Acceptance gate cho pilot

Một pilot chỉ được coi là template-ready khi:
- curriculum scope đúng nguồn;
- Core/Entrance10/Challenge tách đúng;
- schema validation đạt;
- UI desktop + mobile không lỗi nghiêm trọng;
- learner evidence không suy diễn causal từ một lựa chọn;
- distractor trigger chỉ là evidence signal;
- remediation target chỉ được gọi causal khi Knowledge Graph/rule đã review;
- authored answer/hint QA đạt;
- regression không phá Practice Engine/Tutor.

## Batch sizing

Mặc định:
- content/practice: 1 topic hoàn chỉnh hoặc 3–5 topic cùng mạch;
- metadata/mapping: 1 grade hoặc 1 strand;
- UI: 1 pilot hoàn chỉnh → sau PASS rollout toàn bộ compatible topics;
- bugfix: gom theo một subsystem.

Không tạo PR cho từng card/câu hỏi trừ khi là hotfix.

## Transport

Ưu tiên:
1. **GitHub repository artifacts**: source-of-truth, versioned, reviewable.
2. Shared workspace (Google Drive/Docs, Slack, ClickUp) chỉ khi cả hai phía thực sự có connector đọc/ghi.
3. Offline copy/file là fallback.

Transport không thay đổi protocol.

## Micro-practice evidence rule

Option-level `misconception_trigger` là **observed signal**, không phải diagnosis chắc chắn.

Một lần chọn distractor:
- ghi signal code + question/skill + timestamp;
- có thể đưa hint cục bộ;
- KHÔNG tự động kết luận prerequisite yếu.

Remediation chỉ nâng thành recommendation khi đủ evidence theo Tutor/Knowledge Graph policy.

## Quy tắc rollout

Sau khi CĐ07 micro-practice pilot PASS:
- đóng băng schema v1 cho Learning Card + distractor evidence;
- tạo generator/template;
- Gemini soạn/review theo batch;
- ChatGPT validate/integrate theo batch;
- chỉ quay lại item-level nếu test hoặc academic review fail.
