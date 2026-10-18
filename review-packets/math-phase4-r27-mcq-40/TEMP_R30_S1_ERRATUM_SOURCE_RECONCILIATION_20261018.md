# TEMP R30 — Kết quả tiếp nhận đính chính S1, chưa cấp phép Skill

**Ngày:** 2026-10-18. **Packet:** `MATH-R27-NEW-MCQ-40-20261018`. **Phạm vi:** 24 mã đính chính, 16 mã bảo lưu.

## Chứng cứ lưu trữ

- Báo cáo gốc: `TEMP_R29_NOTEBOOKLM_VERDICT_ORIGINAL_20261018.md` — báo 40/40 PASS về nội dung.
- Yêu cầu kiểm tra lại: `TEMP_R29_S1_CITATION_ERRATUM_REVIEW_20261018.md` — 24 mục S1 có lỗi dẫn bài/trang.
- **Bản NotebookLM R30 đã nhận, lưu nguyên văn:** `TEMP_R30_NOTEBOOKLM_S1_ERRATUM_ORIGINAL_20261018.md`. Báo cáo nêu `OVERALL_ERRATUM_VERDICT|REVISIONS_REQUIRED`, `CITATION_REVISIONS_DONE:24`, không sửa câu/đáp án.
- Khóa nguồn R27: đủ 40 mã câu, sáu Git blob SHA cố định; R29 xác nhận 40 vị trí đáp án chính xác so với ngân hàng gốc.

**Nguyên tắc:** 24 kết luận `REVISE` ở đây **chỉ là đính chính metadata dẫn chứng S1**. Không coi đó là 24 câu sai toán, cũng không tự coi đính chính trang là phê duyệt nội dung cuối cùng.

## Nội dung đề xuất mới từ NotebookLM (đã tiếp nhận, còn cần đối chiếu trực tiếp SGK)

| Nhóm | ID | Số câu | S1 mà NotebookLM báo đã đính chính |
|---|---|---:|---|
| Làm tròn | `NUM02V1_121–132` | 12 | Toán 6 KNTT tập 2, Bài 30, trang 35–38 |
| Giá trị tuyệt đối | `NUM02V1_145–147` | 3 | Toán 7 KNTT tập 1, Bài 7, trang 36–38 |
| Chia đa thức một biến | `ALG04V2_133–138` | 6 | Toán 7 KNTT tập 2, Bài 28, trang 39–43 |
| Đồ thị/parabol | `QUA12V1_121–123` | 3 | Toán 9 KNTT tập 2, Bài 18–19, trang 11–22; lớp chính KNTT-Core 9 |

**Lưu ý độ chính xác:** Một số trang cụ thể trong đề xuất có thể vượt khỏi phạm vi của bài, hoặc thuộc phần luyện tập liền kề. Ví dụ tài liệu giải SGK công khai định vị giá trị tuyệt đối Bài 7 chủ yếu ở trang 35–36, không thể tự nâng toàn bộ phạm vi 36–38 thành chính xác cho từng ID; nguồn tra cứu công khai về Bài 30 có khác biệt đánh số trang. Vì vậy khi chưa có dẫn chứng S1 trực tiếp đến từng ví dụ, giữ nguyên trạng thái `RECEIVED_CORRECTION_PENDING_VERIFIED_S1`. Các website hỗ trợ chỉ giúp phát hiện sai lệch, không thay thế S1 chính thức trong NotebookLM.

## Bản ghi R28 chuẩn hóa không giả tạo PASS

Chạy `node scripts/prototypes/math-v2-r30-notebooklm-s1-erratum-intake.js --r28-json` để sinh **40 dòng** theo đúng hợp đồng R28, với SHA-256 từng câu lấy từ R27:

- 24 ID có receipt đính chính: `REVISE` (vì thiếu bước xác minh metadata S1 cuối), ghi nguyên dẫn chứng trước/sau và đề nghị sửa, `source_references=[]` vì báo cáo mới không trích dẫn một vị trí SGK gốc có thể kiểm tra độc lập cho từng nội dung.
- 16 ID ngoài phạm vi: `NOT_REVIEWED` **chỉ trong bản intake R28 tạm thời**. Điều này không xóa 16 PASS được báo trong R29 gốc.
- `PASS:0, REVISE:24, NOT_REVIEWED:16` là **trạng thái quy trình nhận dữ liệu có cấu trúc**, không phải tổng kết toán học mới. Không được trình bày 24 REVISE là 24 lỗi bài toán.
- Bất kỳ chỉnh sửa báo cáo nguồn, câu hỏi, đáp án hay SHA nào đều khiến công cụ fail-closed.

## Ranh giới

- Không sửa 40 câu, `options`, `answer`, `tags` hay question IDs.
- Không thay đổi v1 learner store, máy tính/iPad, localStorage hoặc IndexedDB.
- Không xác thực hay cấp quyền cho 40 nguồn mới theo dạng Mastery/Readiness.
- Không tự tạo đầy đủ 40 PASS trong R28 bằng cách điền nguồn S1 giả, không hồi tố lịch sử, không bật Skill v2.

**Bước sau khi R30 QA PASS:** Nếu cần khép học thuật, kiểm tra trực tiếp S1 các trang chính xác còn tranh luận và lập bản chốt riêng, gắn `source_references` thực sự cùng verdict theo từng ID. Chỉ sau khi có kết quả đối chiếu và owner acceptance mới cân nhắc bước lập chính sách nguồn cho 40 câu; chuyển bộ đếm Skill vẫn là giai đoạn riêng.
