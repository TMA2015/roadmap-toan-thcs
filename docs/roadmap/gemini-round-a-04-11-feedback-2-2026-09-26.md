# Phản hồi lần 2 cho Gemini — Vòng A CĐ04–11 (26/09/2026)

**Trạng thái: REJECTED_AS_SOURCE_GROUNDED_REVIEW / REVISIONS_REQUIRED.** Bản JSON sửa lần 2 vẫn không khớp danh mục thực tế, dù tổng số dòng đã là 116. Không áp dụng migration, đổi tag, phân tầng hay cập nhật Knowledge Graph.

## Đối chiếu cấu trúc

| Chỉ số | Kết quả |
|---|---:|
| Lượt tag thực tế CĐ04–11 | 116 |
| Dòng JSON Gemini | 116 |
| Dòng có cặp `source_topic + original_id` chính xác | **28** |
| Dòng dùng ID không tồn tại ở chuyên đề tương ứng | **88** |
| Số câu thực tế trong nhóm | 996 |
| Action count Gemini tự ghi | KEEP 88, RECLASSIFY 27, REVIEW_PENDING 1 |
| Action count khi đếm trực tiếp 116 dòng | **KEEP 97, RECLASSIFY 18, REVIEW_PENDING 1** |

Ví dụ:
- CĐ04 thực tế dùng `nhan-biet-don-thuc`, `nhan-biet-da-thuc`, `he-so-bac`, `hang-tu-dong-dang`; Gemini đưa `nhan-don-thuc-voi-da-thuc`, `nhan-da-thuc-voi-da-thuc`, `bac-cua-da-thuc`. Mã `chia-da-thuc-mot-bien-da-sap-xep` và `tim-gia-tri-lon-nhat-nho-nhat` không thuộc manifest CĐ04.
- CĐ07 dùng `dieu-kien-xac-dinh`, không dùng `dieu-kien-xac-dinh-phan-thuc` làm original_id. CĐ08 dùng `lap-phuong-trinh`, không dùng `giai-bai-toan-lap-pt`.
- CĐ10 thực tế dùng `khai-niem-ham-so`, `tinh-gia-tri-ham`, `ve-do-thi-ham-bac-nhat`; Gemini thay bằng các ID tự diễn đạt.
- ID câu `CD09_Q035`, `CD07_Q022` trong yêu cầu full-text không dựa trên mẫu câu của catalogue. Mã câu thực tế ví dụ `SYS09V1_101` (`chuyen-dong-he`) và `RAT07V1_025` (`giu-dieu-kien-ban-dau`).

**Lỗi quy trình:** Gemini đã biến nhãn/tên dạng bài do mình suy luận thành `original_id` (nguồn gốc). Phản biện học thuật không được phép thay dữ kiện đầu vào. Nhiều dòng `RECLASSIFY` đề xuất thay mã bằng `adv-...` và kết luận HIGH mặc dù chưa đọc toàn văn hoặc chứng minh tầng chương trình.

## Input đã khóa — dùng tệp trực tiếp

`docs/assets/data/curriculum/gemini-round-a-04-11-locked-input-v1.json` được sinh từ manifest thực tế, gồm **đúng 116 record** và nhãn nguyên văn, chuyên đề, số lần gắn tag, tối đa ba ID câu có thật mỗi record. Đây là input duy nhất cho vòng sửa. Không tái tạo ID từ ký ức hoặc từ ví dụ của mình.

Các trường KHÔNG ĐƯỢC SỬA: `source_topic`, `original_id`, `current_name`, `question_count_with_tag`, `evidence_question_ids`. Chỉ thêm nhận xét/phân loại vào trường riêng, hoặc thay `proposed_action`, `proposed_id`, `confidence`, `needs_full_text`, `reason`; không sử dụng `proposed_id` để thay tên `original_id`. Mã mới phải nằm trong `proposed_additions` nếu là ADD. Trả về đúng 116 cặp key; thứ tự tốt nhất giữ nguyên.

## Bước kiểm chứng bắt buộc trước khi viết nội dung

1. Echo chính xác 5 dòng đầu và 5 dòng cuối của input JSON (cả source_topic + original_id).
2. Xuất kiểm tra tập hợp `input_keys` vs `output_keys`: thiếu 0, dư 0, trùng 0; đếm actions lại từ chính danh sách.
3. Không có toàn văn đề, đáp án hoặc corpus đề thì không tuyên bố đã kiểm định độ đo của item, tần suất đề hay tỷ lệ Core/Extension. `needs_full_text=false` có thể dùng cho nhận xét nhãn hiển nhiên, nhưng không đồng nghĩa item QA đạt.
4. Chỉ sau khi khóa schema/tập ID đạt, tiếp tục phản biện 10–20 ca ưu tiên. Nếu không thể giữ nguyên dữ liệu, dừng và nói rõ giới hạn thay vì tạo thêm bản 116 mã khác.

**Kết luận hiện hành:** 41-node Knowledge Graph và 2.874 câu trong ngân hàng hiện vẫn giữ nguyên; không chuyển kết quả Gemini này vào production.
