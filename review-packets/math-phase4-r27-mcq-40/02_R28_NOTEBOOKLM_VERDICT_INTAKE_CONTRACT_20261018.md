# R28 — Tiếp nhận kết quả NotebookLM cho 40 câu R27 (CHƯA CÓ VERDICT)

**Packet ID** `MATH-R27-NEW-MCQ-40-20261018` · **Status** `NOT_SUBMITTED / NOT_REVIEWED` · Ngày 2026-10-18.

## 1. Nguồn cần dùng

**Permanent Sources:** (1) `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md` và (2) Master Plan Toán THCS v1.2.1. Không chọn đồng thời Master Plan cũ.

**Batch Source:** `01_NOTEBOOKLM_40_MCQ_EXACT_SOURCE_20261018.md` trong thư mục này, 40 câu nguyên văn, sáu Git blob SHA. Đọc kèm các S1 chính thức của chương trình/SGK/SBT KNTT phù hợp trong NotebookLM. Nếu không có S1 cho kết luận Core hoặc phân lớp, ghi `INSUFFICIENT_EVIDENCE`, không suy đoán từ tên topic.

**Không cần phản biện lại** bốn câu ký hiệu CT08, 120 nhãn CT09, hay chín câu CT09 P1-C2 đã có hồ sơ PASS trước đó. R28 chỉ kiểm định 40 mã mới R27.

## 2. Yêu cầu kết quả NotebookLM

Đối với **từng mã trong 40 mã**, bắt buộc:

- `question_id`, giữ chính xác ID R27.
- `verdict`: `PASS`, `REVISE`, `INSUFFICIENT_EVIDENCE`, hoặc `NOT_REVIEWED` nếu chưa xét.
- `review_layer`: `KNTT-Core`, `Core-Support`, `Entrance10`, `Specialized-Challenge`, hoặc `THPT-Bridge`; `grade` 6–9 hoặc `NOT_VERIFIED`.
- `S1_grade_and_lesson` và `source_references` có nguồn/định vị/trích dẫn cụ thể. Với `KNTT-Core` và `Core-Support`, muốn PASS phải có ít nhất một S1 đủ chứng minh lớp/bài.
- Xem xét đầy đủ `math_correct`, `unique_correct_option`, `distractors_valid`, `explanation_correct`, và `structure_distinctness` (`DISTINCT` hoặc `NEAR_DUPLICATE_REVIEWED`).
- `issue`: lý do, kể cả khi PASS; nếu `REVISE` cần `proposed_fix` cụ thể. Nếu thiếu chứng cứ, nói rõ chứng cứ nào thiếu, không điền PASS.

**Kiểm toán độ sâu:** Không lấy 12 câu làm tròn chỉ thay số làm bằng chứng 12 dạng toán khác nhau. Đặc biệt kiểm tra điều kiện mẫu và tính tương đương của 6 bài chia đa thức CT04, các chủ đề số vô tỉ/căn bậc hai, mô hình tỉ lệ, và giao điểm đồ thị.

## 3. Hợp đồng tiếp nhận có kiểm tra tự động

Khi NotebookLM trả kết quả, đánh giá học thuật **chưa tự động thành quyền ghi Skill**. Bộ kiểm toán QA R28 có thể nhận kết quả qua file JSON theo schema `math-r28-independent-review-verdict-v1`, phát hiện thiếu ID, trùng ID, thay source SHA hoặc record SHA, PASS không có S1, và REVISE không có nội dung sửa.

Các lệnh kiểm tra kỹ thuật, chạy trong repo Math:

```bash
node scripts/prototypes/math-v2-r28-verdict-intake-gate.js --template > r28-verdict-draft.json
node scripts/test-math-v2-r28-verdict-intake-gate.js
```

Bản template **mặc định tất cả 40 dòng `NOT_REVIEWED`**, với SHA lấy trực tiếp từ R27. Không có kết luận học thuật nào được tự tạo. Kết quả reviewer phải được giữ nguyên, sau đó đối chiếu thủ công nguồn S1 và phê duyệt riêng trước khi thay đổi chính sách Skill.

Khi cần nhập file verdict, gọi `evaluate(review)` từ Node trong môi trường QA. Trạng thái thành công đầy đủ chỉ là `VERDICTS_PRESENT_REQUIRE_INDEPENDENT_RECONCILIATION` — **không bao giờ là quyền triển khai Skill**.

## 4. Quyết định đã khóa

- **Không có** R28 NotebookLM PASS receipt tính đến mốc lập hồ sơ.
- Không sửa 40 câu, đáp án, nhãn kỹ năng, taxonomy, thuộc tính câu hỏi hay lưu trữ bài học.
- Không trao `KNTT-Core`, `Readiness`, `Mastery` từ 1 đáp án MCQ hoặc từ bằng chứng nguồn S2–S4.
- Không hồi tố, không cộng gộp điểm từ máy tính/iPad hoặc ghép lịch sử v1/v2.
- **PR R28 QA-only PASS** không đồng nghĩa Packet R27 PASS học thuật.

Đường dẫn bản nguồn khóa: `review-packets/math-phase4-r27-mcq-40/01_NOTEBOOKLM_40_MCQ_EXACT_SOURCE_20261018.md`.
