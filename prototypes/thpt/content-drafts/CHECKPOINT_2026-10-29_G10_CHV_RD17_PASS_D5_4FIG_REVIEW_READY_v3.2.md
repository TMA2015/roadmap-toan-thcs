# Checkpoint Toán 10 Chương V · 29/10/2026 · v3.2

## Đã hoàn thành
- NotebookLM độc lập: D1–D2 B12–B14 PASS (13 Knowledge, 17 examples, 17 outcomes).
- NotebookLM độc lập: D3–D4 B12–B14 PASS, 27/27 câu, gồm 9 Core, 15 Practice/Application, 3 Written.
- **SGK Chapter V Readiness:** NotebookLM PASS **17/17**; 17/17 outcomes; HELDOUT_NONCLONE=PASS; P0=0, P1=3, P2=1; ACADEMIC_CLEARANCE_FOR_RELEASE=NO.
- Private exact reviewed original: `Temp_THPT_G10_CHV_PRIVATE_CHAPTER_READINESS_17_HELDOUT_S1_REVIEW_20261029.md`, SHA256 `e8671f388fe41d31240bfb532f6167efb4c048975d0bc641be6d4eedf2f3fbc2`. Public GitHub chỉ lưu metadata, không lưu đề, khóa hay rubric.
- GitHub receipt: `THPT_G10_CHV_PRIVATE_READINESS_17_NOTEBOOKLM_R0_PASS_RECEIPT_20261029.md`; ID-only 17 PASS: `THPT_G10_CHV_PRIVATE_CHAPTER_READINESS_17_ID_ONLY_INDEX_v0.2.md`.

## Mới biên soạn, CHƯA được NotebookLM PASS
- D5 bốn hình thống kê: `FIG01_APPROX_ERROR_INTERVAL`, `FIG02_ORDERED_QUARTILES`, `FIG03_IQR_OUTLIER_BOX`, `FIG04_VARIANCE_SAMPLES`.
- 4 SVG gốc + 4 PNG 1240×760 + 1 dossier; mã XML, khả năng đọc, phép tính và ZIP CRC đã tự QA.
- Gói NotebookLM: `Temp_THPT_G10_CHV_D5_4FIG_9FILES_NOTEBOOKLM_20261029.zip`, 224568 bytes, SHA256 `09ea858dcff4c312b428b82e0d5ed6943f96e4844197f9abb97a55103ed45085`.
- Manifest D5: `prototypes/thpt/content-drafts/THPT_G10_CHV_D5_FOUR_STATS_SVG_CANDIDATE_REGISTER_20261029.md`. Không import SVG ứng viên vào thư viện học liệu được duyệt trước verdict.

## Giới hạn triển khai và việc tiếp theo
- Quyết định chủ dự án `THPT_OWNER_CORRECTION_NO_STUDENT_ACCOUNTS_20261028.md`: website Math là GitHub static, giữ Gemini hiện hữu, **không tài khoản học sinh, không backend mới**. Đề nghị server trong P1 của NotebookLM không phải quyền thay đổi kiến trúc; không nhận là bảo vệ tuyệt đối đề/đáp án bằng client.
- Readiness chưa kích hoạt; không chấm điểm/Mastery. Theo giao diện tự kiểm tra, không gợi ý, AI Tutor, đáp án, kết quả từng câu trước Final Submit.
- Bàn giao D5 ZIP thực cùng prompt ngắn; nhận verdict 4/4, sửa chỉ DELTA_C ảnh hưởng và review lại khi cần; nếu PASS thì import nguyên byte SVG được duyệt.
- Chưa có verdict tổng hợp toàn Chương V riêng, chưa QA D6 website/thiết bị, không merge/deploy nếu chưa có nghiệm thu của chủ dự án.
- Giữ hai hành trình SGK và Chuyên đề học độc lập; Chuyên đề đúng ba mục Kiến thức / Luyện tập / Tự kiểm tra, một item canonical dùng chung bằng placement, không sao chép.

```text
G10_CHV_D1_D4|SCOPED_NOTEBOOKLM_PASS
G10_CHV_SGK_CHAPTER_READINESS|17_OF_17_PASS_NOT_ACTIVE
G10_CHV_D5|FOUR_FIGS_REVIEW_READY_NOT_PASS
G10_CHV_WHOLE_CHAPTER|NOT_SEPARATELY_REVIEWED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
