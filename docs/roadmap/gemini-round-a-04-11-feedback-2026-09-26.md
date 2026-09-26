# Phản hồi cho Gemini — Vòng A CĐ04–11 (26/09/2026)

**Trạng thái: REVISIONS_REQUIRED.** Đây là phản hồi trên bản báo cáo và JSON do Gemini gửi, không phải quyết định đổi skill ID hay chấp nhận migration. Website, ngân hàng câu hỏi và dữ liệu học sinh giữ nguyên.

## Các lỗi cần sửa trước khi xét học thuật

1. **Nguồn số liệu:** Có 8 manifest, **996** câu hỏi và **116 lượt tag** theo chuyên đề (04:132/15, 05:120/15, 06:120/11, 07:120/14, 08:132/17, 09:120/14, 10:120/16, 11:132/14). Báo cáo Gemini ghi 1.016 câu là không đúng.
2. **Sai định danh:** Báo cáo dùng `ALG_VAL`, `ALG_DIV`, `SYS_SUB`, `RAD_DOM`, `EQ_WORD_MOTION`... không tồn tại dưới dạng skill ID trong manifest hiện tại. ID thực tế tương ứng, ví dụ, là `tinh-gia-tri-bieu-thuc`, `chia-da-thuc-cho-don-thuc`, `giai-he-the`, `dkxd-can`. ID đề xuất mới phải tách ở trường proposed_id, không ghi thành original_id. Không tạo ID chứng cứ hoặc tên chuyên đề tưởng tượng.
3. **Coverage không khớp:** JSON chỉ chứa 9 record quyết định nhưng metadata khẳng định 116/116, unreviewed=0. Báo cáo văn bản có thêm một số dòng nhưng vẫn không phải quyết định/đối chiếu theo từng ID gốc. Chưa thể ghi coverage=100%.
4. **Nhầm phạm vi:** `chuyen-dong` trong ngân hàng hiện ở CĐ24; `chuyen-dong-he` ở CĐ09. CĐ08 không có tag `chuyen-dong`. Không đưa chúng vào danh mục CĐ04–11 như thể đã có ở CĐ08. Cặp `chung-minh-tiep-tuyen` (CĐ19) và `tiep-tuyen-chung-minh` (CĐ20) thuộc vòng kiểm định chéo, không thuộc batch 04–11.
5. **Đề xuất vượt dữ liệu:** Manifest CĐ04 có `chia-da-thuc-cho-don-thuc`; không có skill chung `ALG_DIV` về chia đa thức đặt tính dọc. Nếu đề xuất thêm dạng bài, dùng ADD + căn cứ, không ghi SPLIT một mã không tồn tại. Các nhãn `ID_MINMAX` hoặc `RAD_SIM` tự đặt không được trình bày là ID gốc.
6. **Chưa có full text:** Catalogue có mã, nhãn, số câu và ví dụ ID, không có nguyên đề/đáp án. Ghi “đã kiểm tra cấu trúc”, không ghi đã kiểm định nội dung/toàn văn hoặc độ phù hợp tag. Mọi đề xuất KEEP/MERGE/SPLIT dựa chỉ tên/nhãn cần đánh dấu provisional.

## Nhiệm vụ sửa bản trả lời

- Dùng **duy nhất ID nguyên văn ở catalogue CĐ04–11** làm original_id; lập bảng một hàng cho mỗi ID thuộc 116 lượt tag. Nếu một mã xuất hiện ở nhiều chuyên đề, nêu các topic occurrences. Nếu thiếu dữ liệu, để REVIEW_PENDING; không lấp bằng ID chế tác.
- Với từng mục, có nhãn chính xác, `proposed_action`, lý do, `source_topic`, `evidence_question_ids` lấy từ catalogue, `confidence`, `needs_full_text`. Đề xuất kỹ năng mới phải có `proposed_id` khác `original_id` và không đưa vào lịch sử hiện hữu.
- Chọn các cụm có nguy cơ thật để phân tích sâu: CĐ05 `binh-phuong-hoan-chinh` vs CĐ06 cùng ID nhưng bối cảnh khác; CĐ04/CĐ07 `dieu-kien-xac-dinh`; CĐ07 `giu-dieu-kien-ban-dau` và CĐ08 `doi-chieu-nghiem` phải phân biệt hành vi; CĐ08 `pt-bac-nhat` và `bien-doi-pt-nhieu-buoc`; CĐ09 `giai-he-the`, `giai-he-cong`, `chon-phuong-phap`; CĐ11 các kỹ năng căn thức. Không gộp chỉ vì dùng cùng công thức.
- Với CĐ07 `tim-gia-tri-nguyen` và CĐ06 `tach-hang-tu-giua`, kiểm tra tầng kiến thức dựa trên chương trình/đề thi, không tự gắn nhãn chuyên hay Core khi chưa có chứng cứ.
- Xuất JSON có `input_ids=116`, `reviewed_ids` bằng số ID thực tế có quyết định/đánh giá, `unreviewed_ids` là phần còn lại; liệt kê cụ thể `unreviewed_skill_ids`. Hai con số phải cộng thành 116. Đừng gọi “full coverage” nếu mới nêu ví dụ.
- Chỉ làm Round A, không tự chấm tần suất đề hoặc ra lệnh ChatGPT migration. Không yêu cầu ChatGPT sửa runtime cho tới khi có phản biện được đối chiếu.

## Tài liệu Gemini cần dùng

Đính kèm trực tiếp (không phụ thuộc URL): GEMINI_CONTEXT_ONE_FILE và `gemini-catalogue-04-11.md`. Nếu cần kiểm định chất lượng gắn tag, phải yêu cầu tiếp toàn văn những câu hỏi liên quan theo ID; tuyệt đối không giả vờ đã đọc full-text.

**Đầu ra yêu cầu:** báo cáo corrigendum ngắn, bảng CSV/JSON chuẩn có đủ 116 original_id, danh sách 10–20 ca cần xem nguyên câu, danh sách quyết định tạm giữ và CHECKPOINT đủ chuyển chat. Chỉ sau khi được đối chiếu mới tiếp tục CĐ12–18 (lưu ý CĐ12 là phương trình bậc hai, không phải hình học).
