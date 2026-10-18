# TEMP R32 — Intake và kiểm toán rủi ro dẫn chứng S1

**Ngày:** 2026-10-18  
**Packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Trạng thái:** `ACADEMIC_HOLD_R32_RECEIPT_RECONCILIATION_REQUIRED`  
**Loại:** QA-only, không chỉnh câu hỏi, không duyệt học thuật và không ghi dữ liệu học sinh.

## 1. Xuất xứ và mức tin cậy

Một báo cáo NotebookLM R32 được người dùng **dán dưới dạng Markdown trong cuộc trò chuyện** và báo cáo `21 PASS / 3 REVISE` trên đúng **24 ID** thuộc R29–R31. Tệp `TEMP_R32_USER_SUBMITTED_S1_CLAIMS_TRANSCRIPTION_20261018.json` là **bản chép lại có cấu trúc các cột metadata** từ báo cáo đó, **KHÔNG phải bản gốc nguyên văn được SHA-lock**. Báo cáo gốc chưa được đính kèm/đóng dấu tệp; các ô REASON của `NUM02V1_145–147` đã bị cắt tại ký tự giá trị tuyệt đối trong bảng Markdown được dán.

Phải lưu ý tách:
- **Reviewer claims:** 21 PASS, 3 REVISE, 0 thiếu theo tuyên bố NotebookLM.
- **Technical intake:** 24/24 ID được ghép vào R27, các nguồn JSON ngân hàng câu hỏi và record SHA-256 được kiểm lại bởi `R27.inspect()`; R31 và R30 giữ nguyên.
- **Approved academic PASS:** **0**, vì báo cáo không kèm ảnh trang SGK gốc/định danh nguồn NotebookLM đủ để kiểm tra từng trích dẫn và các xung đột dưới đây chưa đóng.

## 2. Những trường hợp cần điều chỉnh trước khi nghiệm thu

| IDs | Vấn đề xác định qua so sánh R27/R32 và nguồn công khai | Quyết định an toàn |
|---|---|---|
| `NUM02V1_132` | R32 vẫn ghi **37–38**, dù Bài 7.12 làm tròn nằm trang 37, Bài 31 bắt đầu trang 38. Câu R27 là *đảo ngược làm tròn*, trong khi Bài 7.12 yêu cầu làm tròn thuận. | Giữ `CONCEPT_BASE` làm ứng viên thay cho `STRUCTURAL_CLONE` nếu không có S1 minh chứng đảo ngược; kiểm đúng trang 37. |
| `NUM02V1_147` | R32 `EXACT_MATCH` với Bài 2.18 trang 36, nhưng nội dung bài tham khảo dùng `|x| = 2,5`, trong khi câu R27 dùng `|x| = 4` và hỏi chọn phát biểu đúng. | `EXACT_MATCH` chưa đúng; xét `STRUCTURAL_CLONE` sau khi kiểm S1. Ba ô REASON của `_145–147` cũng cần khôi phục nguyên văn. |
| `ALG04V2_133,135,137` | R32 dẫn Bài 7.32a/b nhưng phạm vi trang gán **40–42**, trong khi Bài 7.32 được trích ở **trang 43**. | Tách trang dạy quy tắc (40–42) khỏi trang bài tập 7.32 (43). |
| `ALG04V2_134,136` | R32 dẫn Bài 7.39a nhưng ghi khoảng **41–43** hoặc trang **43**, còn Bài 7.39a ở **trang 45, Luyện tập chung**. | Sửa định vị sang trang 45 nếu SGK xác nhận. Đặc biệt `_136` trùng biểu thức toán, nhưng không trùng nguyên định dạng MCQ. |
| `NUM02V1_127,128,129,130` | Nguồn dẫn mang đặc điểm nhận thức khác: Bài 7.14 chia độ dài rồi làm tròn; 7.16 ước lượng chi phí nhiều món; 7.13 chọn ước lượng tổng nhiều số, không phải phép nhân của `_130`. | Kiểm riêng `STRUCTURAL_CLONE` so với `CONCEPT_BASE`, không xem trùng chủ đề = trùng cấu trúc. |
| `QUA12V1_121–123` | Có hỗ trợ công khai rằng thực hành GeoGebra trang 114 vẽ/tìm giao điểm đường thẳng và parabol. R32 đề xuất `Entrance10`, nhưng Bài thực hành GeoGebra không tự chứng minh nhãn lớp học; `_123` còn yêu cầu điều kiện tiếp xúc/nghiệm kép. | Giữ `Entrance10` là đề xuất, không coi phân tầng đã phê duyệt. Cần bằng chứng S1/chuẩn chương trình và, khi viện dẫn ôn thi, S3 có xuất xứ. |

Đặc biệt: R31 chỉ đối chiếu **phạm vi Bài 28 (39–43)**; bài *Luyện tập chung* trang 45 nằm tiếp sau, không phải vì vậy mà bài trùng nguyên văn ở trang 45 tự động nằm trong phạm vi 39–43.

## 3. Nguồn kiểm chứng thứ cấp (S2 crosscheck, KHÔNG thay thế S1)

- Bài 7.12 Toán 6 tập 2 p37 (làm tròn thuận): https://www.vietjack.com/toan-6-ket-noi/bai-7-12-trang-37-toan-lop-6-tap-2-ket-noi-tri-thuc.jsp
- Bài 7.13/7.14/7.16 Toán 6 tập 2 p37: https://vndoc.com/toan-lop-6-bai-30-lam-tron-va-uoc-luong-ket-noi-tri-thuc-244696
- Bài 2.18 Toán 7 tập 1 p36, `|x|=2,5`: https://loigiaihay.com/giai-bai-218-trang-36-sgk-toan-7-tap-1-ket-noi-tri-thuc-a105488.html
- Bài 7.32 Toán 7 tập 2 **p43**: https://loigiaihay.com/giai-bai-732-trang-43-sgk-toan-7-tap-2-ket-noi-tri-thuc-a110366.html
- Bài 7.39a Toán 7 tập 2 **p45**: https://colearn.vn/giai-bai-tap/sgk-toan-7-kntt/bai-7-39-trang-45-sgk-toan-lop-7-1663205499
- Thực hành GeoGebra Toán 9 tập 2 p114: https://loigiaihay.com/giai-cau-hoi-trang-114-sgk-toan-9-tap-2-ket-noi-tri-thuc-a163382.html

## 4. Cổng triển khai

1. Khóa và kiểm tra chéo danh sách 24 ID từ R27, cùng 16 ID ngoài phạm vi.
2. Bảo toàn bản chép lại **phân biệt rõ với báo cáo nguyên văn chưa được lưu**.
3. Đưa tất cả tuyên bố PASS/REVISE R32 về trạng thái **provisional reviewer claim**, không tự chuyển vào `R28` PASS.
4. Kiểm tra độc lập trang, hoạt động, nhãn chứng cứ và phân tầng của các ID có cảnh báo, sau đó rà 24/24 trích dẫn trên sách gốc.
5. Chỉ cập nhật **citation metadata** có bằng chứng; nếu cần đổi `review_layer`, xin phê duyệt học thuật riêng và kiểm tra hệ quả chức năng.
6. Không đổi câu hỏi, options, answer indexes, IDs, họ Skill/Taxonomy v2, frontend, lịch sử học sinh, Readiness, Mastery hay localStorage.

**Lệnh QA trên nhánh:** `node scripts/test-math-v2-r32-s1-claim-reconciliation.js`  
**Đây chỉ là QA provenance; chạy PASS không mang nghĩa academic PASS hoặc quyền merge/release.**
