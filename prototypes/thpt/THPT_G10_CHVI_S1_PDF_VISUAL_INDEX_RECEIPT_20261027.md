# Toán THPT · Chương VI · S1 PDF Visual Index Receipt

**Ngày:** 2026-10-27  
**Mức kiểm chứng:** `S1_PDF_ACQUIRED` / `VISUAL_INDEX_VERIFIED` / `FULL_CONTENT_AUDIT_PENDING`  
**Nguồn:** Bản PDF SGK/SBT Toán 10, tập 2, Kết nối tri thức, truy xuất từ các tệp gốc mà chủ dự án đã lưu trên Google Drive. **Không đưa file sách hoặc Drive ID/đường dẫn riêng tư vào GitHub.**

## 1. File identification & integrity

| Vai trò | Tên tệp PDF | Số trang PDF | SHA-256 |
|---|---|---:|---|
| S1-SGK | `sach-giao-khoa-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song (2).pdf` | 102 | `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6` |
| S1-SBT | `sach-bai-tap-toan-10-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf` | 143 | `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` |

Hai file là **PDF quét ảnh**, trích xuất văn bản qua PyMuPDF trên các trang đầu không cho ra text; cần xem hình trang gốc khi đánh giá công thức, hình vẽ, mục tiêu, bài tập. Không viện dẫn kết quả OCR tự động như bằng chứng học thuật.

Trong phạm vi Chương VI ở hai file này, **PDF page number = printed page number + 1** (ví dụ SGK printed p11 = PDF page 12, SBT printed p10 = PDF page 11). Quy tắc này đã kiểm tra trực quan qua nhãn số trang và tiêu đề bài.

## 2. Ranh giới bài/chương từ hình quét nguyên gốc

| Phần | SGK trang in (PDF pages) | SBT trang in (PDF pages) | Trạng thái |
|---|---|---|---|
| Bài 15. Hàm số | **4–10** (5–11) | **3–9** (4–10) | VISUAL_INDEX_VERIFIED |
| Bài 16. Hàm số bậc hai | **11–18** (12–19) | **10–15** (11–16) | VISUAL_INDEX_VERIFIED |
| Bài 17. Dấu của tam thức bậc hai | **19–24** (20–25) | **16–18** (17–19) | VISUAL_INDEX_VERIFIED |
| Bài 18. Phương trình quy về phương trình bậc hai | **25–27** (26–28) | **19–21** (20–22) | VISUAL_INDEX_VERIFIED |
| Bài tập cuối Chương VI | **28–29** (29–30) | **22–27** (23–28) | VISUAL_INDEX_VERIFIED |

**Phương pháp:** render và quan sát các contact sheets trang đầu cùng trang chuyển bài, đối chiếu nhan đề và số trang **in trên sách**. Kết quả là **source index receipt**, chưa bao hàm kiểm tra từng câu, từng ví dụ, hình/đáp án hay độ sâu D1–D6.

## 3. Source-scope discrepancy Bài 16 cần xử lý

Biên bản thẩm định R4 Postfix trước đó (được owner chuyển từ NotebookLM) tuyên bố:
- `SGK_TOAN_10_TAP_2_KNTT,TRANG_11-16`.
- `SBT_TOAN_10_TAP_2_KNTT,TRANG_10-14`.
- `ACADEMIC_OVERALL=PASS` và `ACADEMIC_CLEARANCE=YES` trên snapshot B16 cùng 5 item IDs.

**Quan sát trực tiếp bản SGK/SBT gốc mới:** SGK B16 còn trang **17–18** và SBT B16 còn trang **15**. SGK trang 17–18 tiếp tục nội dung vận dụng mô hình hàm số bậc hai (quỹ đạo ném vật và những ứng dụng khác); SBT trang 15 có các bài 6.18–6.20 liên quan mô hình chuyển động và doanh thu.

**Cách diễn giải thận trọng:**
- **Giữ nguyên biên bản PASS của phần B16 đã được reviewer thẩm định**; không tự đảo verdict học thuật cũ hoặc kết luận có lỗi toán.
- Tuy nhiên, **không suy luận coverage toàn bộ trang của B16 là 100%** cho đến khi bổ sung/đối chiếu nguồn còn thiếu.
- Xem xét **delta source-scope review cho 3 trang** trong đợt Chương VI hoặc một đợt bổ sung chuyên biệt nếu ảnh hưởng outcome/độ sâu. Nếu các trang chỉ có mở rộng và không thay kết luận lõi, ghi kết quả rõ, không phải review lại toàn bộ item B16.
- Chưa gửi NotebookLM bất cứ packet nào từ kết quả chỉ mục này. Nếu review thực sự cần thiết, tuân Project Sources 06/07 (file `Temp_*.md` hoặc ZIP có nội dung thực + link tải + prompt ngắn).

## 4. Trạng thái và bước tiếp theo

| Gate | Status |
|---|---|
| S1_PDF_ACQUIRED | **YES (SGK + SBT)** |
| S1_CHVI_PAGE_INDEX | **VISUALLY VERIFIED** |
| S1_CHVI_FULL_OUTCOME_AND_EXERCISE_AUDIT | **PENDING** |
| B15/B17/B18/END_AUTHORING | Draft pages available, must reconcile with S1 |
| B16_ACADEMIC_POSTFIX_RECEIPT | PASS as previously reviewed; **additional source-scope check pending** |
| NOTEBOOKLM_BATCH_RELEASE | NOT_PREPARED |
| PR_PRODUCTION | NOT_AUTHORIZED |

Next: đọc nội dung SGK/SBT theo từng trang/hình để tạo lesson outcome matrix, item register, sửa các bài nháp dựa trên S1; sau đó xuất batch đầy đủ, ưu tiên review Chương VI theo Project Source 07.
