> **UPDATE 27/10/2026 — Dual Complete Paths v2:** Đây là preflight SGK theo CHƯƠNG, kết thúc bằng `SGK_CHAPTER_READINESS`, **không thay Topic Readiness**. Chuyên đề Hàm số sau này cần kiến thức đầy đủ trục dọc và đúng 3 phần Kiến thức/Luyện tập/Tự kiểm tra; Core chỉ thuộc SGK nhưng canonical item có thể dùng lại trong Practice cơ bản. Dùng `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md` làm chuẩn khi bản dưới còn ghi khác.

# Toán THPT · Chương VI — Batch authoring preflight v0.2

**Ngày:** 2026-10-27  
**Trạng thái:** `GOLDEN_UI_DESIGN_LOCKED` / `CHVI_SOURCE_INDEX_PRELIMINARY` / `AUTHORING_PENDING_S1`  
**Thay thế:** `THPT_G10_CHVI_NEXT_BATCH_PREFLIGHT_v0.1.md` (trước khi owner nghiệm thu HTML v3).  
**Quy tắc:** Math App Project Sources `06` (hợp đồng bàn giao) và `07` (review theo chương / delta).  
**Chương:** Toán 10 KNTT tập 2, Chương VI *Hàm số, đồ thị và ứng dụng*.

## 1. Cổng Golden UI đã chốt

- Owner đã mở file HTML v3 và xác nhận **PASS** cho bố cục hai cấp tab `3.1/3.2/3.3 → Khái niệm/Tính chất/Ví dụ...`, với typography thống nhất.
- Biên bản: `THPT_R4_GOLDEN_UI_OWNER_DESIGN_LOCK_20261027.md`.
- Học liệu Golden Pilot Bài 16: `ACADEMIC_OVERALL=PASS`, `ACADEMIC_CLEARANCE=YES` theo biên bản NotebookLM Postfix, 5 outcomes và 5 item IDs đã xét.
- Preview MkDocs/Chromium: SUCCESS ở commit `6be8956344ca9ffb6a73053e10560d60a0421adc` [run #40465903028](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/40465903028).
- Golden UI **design sign-off không tự cấp quyền merge/deploy**; kiểm tra staging trên thiết bị vật lý là gate riêng.

## 2. Danh mục chương — đối chiếu sơ bộ từ nguồn thứ cấp

Đã **đối chiếu chéo danh mục, nhưng CHƯA kiểm lại từ file SGK/SBT PDF gốc**. Nguồn tham khảo mục lục (không được nâng cấp thành Source Receipt S1):
- [Mục lục Chương VI — loigiaihay.com](https://loigiaihay.com/sgk-toan-10-ket-noi-tri-thuc-c811.html).
- [Mục lục Chương VI — sachgiaokhoa.online](https://www.sachgiaokhoa.online/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/toan-10-tap-2-1969.html).
- [Bài tập cuối chương VI — FQA](https://fqa.vn/giai-bai-tap-sgk/chuong/chuong-vi-ham-so-do-thi-va-ung-dung-e26640.html).

| Lesson/key | Tên theo hai nguồn mục lục | Trạng thái học liệu | S1 direct verification |
|---|---|---|---|
| G10-CHVI-B15 | Bài 15. Hàm số | Chưa biên soạn | PENDING |
| G10-CHVI-B16 | Bài 16. Hàm số bậc hai | Golden Pilot R4 Postfix Academic PASS | SGK trang in 11–16; SBT 10–14 **theo receipt NotebookLM** |
| G10-CHVI-B17 | Bài 17. Dấu của tam thức bậc hai | Chưa biên soạn | PENDING |
| G10-CHVI-B18 | Bài 18. Phương trình quy về phương trình bậc hai | Chưa biên soạn | PENDING |
| G10-CHVI-END | Bài tập cuối chương VI | Chưa biên soạn | PENDING |

**Chú ý:** các lesson keys trên là **planning labels**, chưa phải canonical lesson IDs được chốt trong application schema. Các trang in của B15/B17/B18/end-chapter và SBT gốc phải đọc & ghi `SOURCE_RECEIPT` trước khi coi là verified. B16 đã có reviewer receipt nhưng không được mở rộng sang lesson khác.

**Trạng thái truy cập nguồn gốc:** thao tác tìm SGK trên Google Drive bằng connector tại 27/10/2026 gặp lỗi nội bộ. Tìm kiếm trong Project/Library không xác định được bản SGK/SBT Toán 10 tập 2. Vì thế chưa khẳng định đã đọc bản gốc trong lần kiểm kê này. Nguồn thứ cấp chỉ giúp bắt đầu manifest, **không thể thay thế S1** trong verdict học thuật.

## 3. Quy mô batch và chiến lược review

- **Đơn vị lý tưởng:** một **batch Chương VI** gồm 4 bài và bài tập cuối chương nếu số lượng câu, minh họa và luận chứng vẫn đọc được toàn bộ.
- **Tối ưu tránh review lặp:** B16 là **reference PASS**. Trong batch tiếp theo gửi nó dưới dạng **tham chiếu đã được duyệt và ví dụ kết nối kiến thức**, không yêu cầu NotebookLM chấm lại nguyên B16 khi không có thay đổi học thuật.
- **Ưu tiên authoring:** B15 (khái niệm hàm số) → B17 (dấu tam thức bậc hai) → B18 (phương trình quy về bậc hai) → bài tập tổng hợp cuối chương. Kết nối trực tiếp cùng kiến thức B16 đã được duyệt.
- Nếu batch vượt năng lực thẩm định chi tiết, chia **Batch A: B15 + B17** và **Batch B: B18 + bài cuối chương**; B16 giữ biên bản đã PASS và hiện như một liên kết mạch kiến thức.
- **Mỗi bài/item có verdict riêng**, không suy luận PASS toàn batch khi còn thiếu expected IDs.

## 4. Danh sách việc có thể làm song song với xác minh SGK

- Chuẩn hóa đường dẫn chương và từng bài, nhãn `NOT_YET_ACADEMICALLY_REVIEWED` cho học liệu mới.
- Chuẩn hóa template từ Golden UI R4: SGK lesson self-contained, 4 mục chuyên đề, canonical Core chung, Readiness no-hint/no-premature feedback, Written/Anchor trong một thư viện.
- Khai báo manifest `LESSON → OUTCOME → SOURCE_PAGE → CONTENT_BLOCK` và register `ITEM_ID → ROLE → KEY → ANSWER/RUBRIC`.
- Soạn kiến thức **nguyên gốc** phù hợp SGK; hình/đồ thị phải đúng toán và đáp án được tự kiểm. Cần SGK/SBT thực để hoàn tất nguồn, ví dụ gốc, YCĐA và độ sâu.
- UI mới dùng adaptive tab v2 (một hoặc hai cấp theo độ dài kiến thức); cùng typography của normal text. Không tự nâng mỗi bài/chuyên đề mới thành học liệu đã nghiệm thu.

## 5. Review handoff khi đã có học liệu hoàn chỉnh

- Đọc Project Source `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md` trước khi xuất.
- Bắt buộc gửi **file thật, link tải được** (Markdown, không JSON), **và prompt ngắn 3–6 câu**.
- 1–2 file thì gửi link riêng; >=3 file thì `Temp_*.zip` chứa từng `Temp_*.md`, giải nén trước khi thêm vào NotebookLM.
- Snapshot phải chứa nội dung thật, item/outcome IDs, nguồn, phiên bản, đáp án và rubric; verdict theo từng bài, từng item.
- Sau review, tự xử lý `DELTA_A`/`DELTA_B` có chứng cứ; `DELTA_C`/`DELTA_D` cần review delta ảnh hưởng theo Source 07.

## 6. Gates

| Gate | Trạng thái |
|---|---|
| GOLDEN_UI_DESIGN | **PASS / LOCKED** |
| GOLDEN_B16_ACADEMIC | **PASS** |
| SOURCE_INDEX_CHVI | **PRELIMINARY (secondary index)** |
| S1_PDF_RECEIPT_B15_B17_B18_END | **PENDING** |
| CONTENT_AUTHORING_B15_B17_B18_END | **NOT_STARTED** |
| BATCH_REVIEW_NOTEBOOKLM | **NOT_SENT** |
| PRODUCTION_RELEASE | **NOT_AUTHORIZED** |

**Không tạo review packet chỉ để thẩm định sơ đồ kế hoạch.** Bắt đầu batch review sau khi có nội dung thật và danh mục nguồn / IDs phù hợp.
