# Toán THPT · Chuẩn bị batch Chương VI sau Golden UI — v0.1

**Ngày:** 2026-10-27  
**Status:** PLANNING_ONLY / NO_NEW_LESSON_CONTENT / NOT_SENT_TO_NOTEBOOKLM  
**Phase gate:** Chỉ soạn/gửi Batch Source học thuật sau khi owner nghiệm thu giao diện Golden Pilot R4.  
**Applicable policy:** Project Source `07_THPT_NOTEBOOKLM_BATCH_AND_DELTA_REVIEW_POLICY_v1.0.md` + handoff `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md`.  
**Book:** Toán 10 KNTT, SGK tập 2 + SBT tập 2, Chương VI. Tên chính xác và phạm vi từng bài ngoài Bài 16 phải đối chiếu trực tiếp SGK trước khi coi là đã xác minh.

## 1. Quy mô batch đề xuất, chưa phải quyết định chốt

Ưu tiên **một batch theo Chương VI** nếu dữ liệu thật đủ gọn để NotebookLM đối chiếu không bỏ sót từng item. Bản preview điều hướng hiện đặt các số **Bài 15, Bài 16, Bài 17, Bài 18**; đây chỉ là **danh sách ứng viên để kiểm kê**, không tự coi là danh mục SGK đầy đủ/đúng thứ tự. Cần kiểm tra sách gốc để xác nhận tên từng bài, các phần có thể là ôn tập hoặc bài tập cuối chương và số trang in.

- **Bài 16 — Hàm số bậc hai:** Golden Pilot R4 Postfix, reviewer `ACADEMIC_CLEARANCE=YES` (5/5 outcomes + 5/5 item IDs), **không cần yêu cầu review lại cùng snapshot**. Giữ receipt như nguồn thẩm định nền cho batch.
- **Bài còn lại trong Chương VI:** chuẩn bị từ đầu sau khi source check. Tên bài, lesson ID, outcome ID, hình vẽ và số item **TBD_SOURCE_VERIFICATION**, tuyệt đối không tự sinh `PASS`.
- Nếu kiểm kê phát hiện lượng item/đồ thị nhiều, chia 2 batch theo mạch SGK và ghi danh mục bao phủ; không buộc nguyên chương vào một packet quá dài.

## 2. Các cổng cần hoàn thành trước khi phát batch

1. **UI_LOCK:** Owner kết luận `THPT_R4_OWNER_UI_QA=PASS` hoặc chỉ ra delta nhỏ đã khắc phục kèm QA, dùng checklist R4.
2. **SOURCE_RECEIPT:** ghi rõ SGK/SBT tập, trang in, tên chương/bài chính xác, mục tiêu và bài tập theo từng bài.
3. **AUTHORING:** mỗi bài có URL riêng, kiến thức đủ học độc lập theo phạm vi SGK, hình/đồ thị đúng toán khi cần, Core gắn canonical ID.
4. **EXERCISE_REGISTER:** tách Core, Practice, Readiness, Written/Anchor; không dùng bài `TECHNICAL_DEMO_ONLY` làm chứng cứ mastery. Các ID mới không trùng; mỗi item có key, lời giải, rubric phù hợp.
5. **CROSS_LESSON_CONSISTENCY:** kiểm tra định nghĩa, kí hiệu, điều kiện, kiến thức nối bài và dẫn link chương ↔ bài ↔ chuyên đề. Không gọi một chuyên đề xuyên lớp là hoàn chỉnh dựa trên một chương.
6. **BATCH_MANIFEST:** bảng `LESSON_ID → OUTCOME_ID → SOURCE_PAGE → CONTENT_BLOCK` và `ITEM_ID → ROLE → LESSON/TOPIC → KEY → REVIEW_STATE`.
7. **TECHNICAL_QA:** MkDocs build, route/deep-link, MathJax, đồ thị hình học, responsive, hành vi hint/Final Submit, không ghi mastery thử nghiệm.

## 3. Quy tắc Verdict theo từng bài/item

NotebookLM phải trả:

- `SOURCE_RECEIPT` theo bài và số trang thật.
- `LESSON_OUTCOME_MATRIX`: mỗi outcome `FULL/PARTIAL/MISSING/INCORRECT`.
- `EXERCISE_REGISTER`: từng `ITEM_ID` và `PASS/REVISE/NOT_REVIEWED`, kèm đáp án/lập luận.
- `ID_RECONCILIATION`: Expected/Reviewed/Missing/Unexpected và trùng ID.
- `P0_P1_P2`, `MINIMAL_DELTA`, `ACADEMIC_OVERALL` cho từng bài và toàn batch.
- **Academic clearance từng bài**; bài nào chưa PASS được đánh dấu và không suy rộng kết luận sang phần khác.

## 4. Sau review: quyền quyết định delta

- `DELTA_A_UI` hoặc `DELTA_B_SOURCE_EQUIVALENT`: ChatGPT sửa trên nhánh, ghi log, chạy QA, không lặp lại NotebookLM nếu không đổi nghĩa toán, khóa đáp án, rubric, phân tầng hay mục tiêu.
- `DELTA_C_ACADEMIC_MATERIAL` hoặc `DELTA_D_BLOCKER`: gửi **delta review phần bị ảnh hưởng**, không bắt cả Chương VI review lại vì một thay đổi đơn lẻ.
- **Handoff:** mỗi lần cần NotebookLM mới, bắt buộc `Temp_...` file review Markdown/TXT có link tải thật **và prompt ngắn**; >=3 file đóng `Temp_....zip`. File này chỉ là **plan**, không phải review packet.

## 5. Gate trạng thái tại lúc lập kế hoạch

| Gate | Status |
|---|---|
| GOLDEN_B16_ACADEMIC | PASS (theo receipt NotebookLM) |
| GOLDEN_R4_CI | Preview PASS tại snapshot trước; kiểm tra lại exact-head mới |
| OWNER_REAL_DEVICE_QA | PENDING |
| CHVI_SGK_INDEX_RECEIPT | NOT_YET_VERIFIED |
| CHVI_BATCH_MANIFEST | NOT_AUTHORED |
| CHVI_BATCH_SUBMISSION | NOT_STARTED |

**Không cần gửi bản kế hoạch này cho NotebookLM.** Tránh phát sinh vòng review trước khi có actual batch content.
