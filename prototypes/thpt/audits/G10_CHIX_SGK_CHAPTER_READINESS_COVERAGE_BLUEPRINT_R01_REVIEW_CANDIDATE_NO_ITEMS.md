# Toán 10 KNTT · RD0 Chương IX R01 review candidate — Tính xác suất theo định nghĩa cổ điển

**PACKET_ID:** `THPT-G10-CHIX-SGK-CHAPTER-READINESS-RD0-R01-20261030`. **AUTHORING_LANE:** `AUDIT_ONLY`; **SCOPE:** `SGK_CHAPTER_READINESS:G10:CHIX` (distinct from `TOPIC_READINESS`); `RD0_ACADEMIC_PENDING`, `NOT_ACTIVE`, `NO_SCORE/NO_MASTERY`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `NO_MERGE_DEPLOY`.

## 1. Original source and citation limits

- **R00 immutable Git blob:** `68e7f2bc88041eb2040542e216d9a36495bde426` — `prototypes/thpt/audits/G10_CHIX_SGK_CHAPTER_READINESS_COVERAGE_BLUEPRINT_R00_NO_ITEMS.md` (not edited); 10 original outcome/skill IDs, no changes/duplicates, **no held-out item bodies**.
- **Existing SGK/SBT candidate receipt:**  SGK Toán 10 KNTT tập 2 ChIX, Bài 26–27 và bài tập cuối chương; cần reviewer xác minh lại trang in chính xác của từng bài từ S1 trong gói review riêng (không suy từ dữ liệu JS).
- **Existing public teaching source (not independent RD0 PASS):**  docs/assets/javascripts/thpt-chix-reviewed-formative-v1.js (public canonical skills/14 question IDs); prototypes/thpt/release-queue/CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md
- **SGK lessons:** B26–B27; do not infer pass of whole chapter from public D1–D6 or previously reviewed private candidate content. The exact printed SGK/SBT lesson pagination is not verified in R00 and must be part of this independent S1 receipt.

## 2. Outcome evidence/depth table

| # | Canonical OUTCOME_ID | Target evidence preserved from R00 | Common misconception preserved from R00 | Risk to check against S1 | Reviewer disposition |
|---:|---|---|---|---|---|
| 1 | `G10-B26-CLASSICAL_RATIO` | Tính xác suất cổ điển theo số kết quả đồng khả năng | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 2 | `G10-B26-COMPLEMENT` | Xác suất biến cố đối ở mô hình đơn giản | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng | `POSSIBLE_MERGE_COVERAGE` | `PENDING_REVIEW` |
| 3 | `G10-B26-EVENT_SUBSET` | Biểu diễn biến cố là tập con của không gian mẫu | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 4 | `G10-B26-EXPERIMENT_SAMPLE_SPACE` | Mô tả phép thử, không gian mẫu và kết quả sơ cấp | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 5 | `G10-B26-SCOPE_SMALL_PROBABILITY` | Chỉ áp dụng định nghĩa cổ điển khi kết quả đồng khả năng | Đếm không gian mẫu theo nhãn thay vì kết quả sơ cấp đồng khả năng | `S1_CORE_VS_SUPPORT` | `PENDING_REVIEW` |
| 6 | `G10-B27-COMPLEMENT_PROBABILITY` | Tính xác suất qua biến cố đối ở tình huống tổng hợp | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại | `POSSIBLE_MERGE_COVERAGE` | `PENDING_REVIEW` |
| 7 | `G10-B27-COUNTING_OUTCOMES` | Đếm trường hợp thuận lợi và toàn bộ trường hợp đúng | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 8 | `G10-B27-EQUIPROBABLE_MODELLING` | Xây dựng mô hình đồng khả năng với mẫu không thay thế | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại | `VERIFY_S1_DEPTH` | `PENDING_REVIEW` |
| 9 | `G10-B27-MULTISTEP_CONTEXT` | Giải thích xác suất nhiều bước theo bối cảnh | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại | `S1_CORE_VS_SUPPORT` | `PENDING_REVIEW` |
| 10 | `G10-B27-TREE_SEQUENCE` | Dùng cây kết quả có thứ tự và đếm tránh sót | Bỏ thứ tự, đếm trùng nhánh hoặc giả sử thay thế khi rút không hoàn lại | `S1_CORE_VS_SUPPORT` | `PENDING_REVIEW` |

## 3. Reviewer-focused S1 checkpoints

1. SGK/SBT Toán 10 tập 2 trang in của B26/B27/cuối ChIX trong R00 **chưa có S1 source receipt chính xác**. Reviewer phải báo trang in và nếu thiếu ảnh trang gốc thì HOLD phần nguồn, không tự đoán.
2. Nhóm B26: `CLASSICAL_RATIO`, `EVENT_SUBSET`, `EXPERIMENT_SAMPLE_SPACE`, `SCOPE_SMALL_PROBABILITY` phân biệt kết quả đồng khả năng, biến cố, đếm thuận lợi; cân nhắc mục nào MERGE_COVERAGE để không nhân đôi yêu cầu.
3. `G10-B26-COMPLEMENT` và `G10-B27-COMPLEMENT_PROBABILITY`: phân biệt kiến thức biến cố đối đơn giản với vận dụng nhiều bước; đề nghị reviewer cân nhắc `MERGE_COVERAGE` nhưng giữ hai ID canonical.
4. Nhóm B27 `COUNTING_OUTCOMES`, `EQUIPROBABLE_MODELLING`, `MULTISTEP_CONTEXT`, `TREE_SEQUENCE`: kiểm điều kiện độc lập/phụ thuộc, rút không hoàn lại, không gian mẫu đồng khả năng và mô hình cây; xác minh mô hình cây có đúng Core S1 hay Support/Optional.
5. 6 candidate Readiness lịch sử đang 0 active; review tài liệu D1–D6/public và bản thiết kế RD0 này không tương đương review item kín hoặc chấm điểm.

Check all 10 original IDs exactly; reviewers may recommend `CORE_KEEP`, `SUPPORT_ONLY`, `OPTIONAL`, `MERGE_COVERAGE`, `ADD`, `HOLD` per ID, but must not rename existing IDs or use one ID per distinct placement. Explain if an ID can share assessment evidence with another ID without collapsing skill coverage. Require source-page receipt, D1–D6 coverage reasoning, true variation of understanding/application, misconceptions and mathematical conditions. Return counts, any P0/P1/P2, MINIMAL_DELTA, final `ACADEMIC_RD0_R01_OVERALL`, `ACADEMIC_CLEARANCE_FOR_RD0_SCOPE`, `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `RELEASE_AUTHORIZATION=NO`.

## 4. Safety and independent gates

- This file is `NO_ITEMS`: no protected question stems, distractors, answers, scoring rubric, or private exposed keys; the historic candidates are **0 active**. Do not copy one public Core/Practice item as independent readiness evidence.
- No hint/AI Tutor/correctness/keys before Final Submit in future independent testing. A demo never grants official points or Skill Mastery. Actual assessment items, exposure protection and scoring need separate content-version review/QA and explicit owner release permission; no backend/account or Firebase change approved.
- Golden THPT R4, THCS Golden UI, deep links and browser learner progress unchanged. No PR merge/deploy is authorized from reviewer RD0 clearance alone.
