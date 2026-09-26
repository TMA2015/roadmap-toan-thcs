# Nhiệm vụ Gemini hiện hành — phản biện tinh gọn 10 cặp tag

**Ưu tiên hơn yêu cầu cũ về kiểm định đủ 346 mã.** Bộ 346 mã là lịch sử tag luyện tập, không phải số skill mục tiêu của hệ thống. Đối tượng người học: lớp 6–9 tự học, ưu tiên nền tảng + ứng dụng thực tế, thi vào 10 sau, kỹ thuật chuyên tự chọn.

## Đính kèm trực tiếp (không giả định Gemini mở được GitHub)

1. `skill-taxonomy-minimal-policy-v1.md` — nguyên tắc thiết kế.
2. `skill-role-pilot-04-11-v1.json` — 10 cặp, số câu đồng gắn tag và đề xuất vai trò sơ bộ.
3. `gemini-question-evidence-10-cases-2026-09-26.md` — **toàn văn** 10 câu đại diện, lựa chọn, đáp án và giải thích.
4. `gemini-pair-audit-04-11-2026-09-26.md` — đếm đối chiếu trên toàn bộ câu đã gắn tag.

Nếu thiếu một tệp, báo thiếu trước khi đánh giá. Không bịa ID hoặc dùng lại báo cáo cũ thay cho input.

## Yêu cầu

**Chỉ phản biện 10 cặp**, không cần xuất lại 116 mã và không tìm cách gắn tag toàn bộ toán học.

Với từng cặp: xác định đích đo được của câu mẫu; phân loại vai trò của hai tag thành `assessed_skill`, `supporting_skill`, `method`, `context` hoặc cần bài đánh giá độc lập. Đề nghị giữ/gộp phần **hiển thị đánh giá** khi thực sự có ích cho học sinh. Nếu giữ hai kỹ năng, nêu lỗi sai khác biệt và 1 câu micro-practice nào đủ đo tách biệt; nếu chỉ là bối cảnh/phương pháp, giải thích vì sao không nên tạo một thanh mastery nữa. Không lấy 100% đồng xuất hiện làm bằng chứng toán học duy nhất.

Lưu ý: `binh-phuong-hoan-chinh` còn dùng ở chuyên đề khác; cặp `so-nghiem-he`/`y-nghia-hinh-hoc` là hai cách nhìn một bài ở nguồn hiện tại; `giu-dieu-kien-ban-dau` vẫn có bài riêng và không đồng nghĩa `doi-chieu-nghiem`; `khai-phuong-tich` có thể là kiến thức nền dù trong tập hiện tại luôn cùng `dua-thua-so-ra`.

**Giới hạn:** Chỉ có toàn văn 10 câu đại diện, không phải 996 câu. Số đếm đồng gắn tag đã kiểm tra theo nguồn, nhưng không bảo đảm chất lượng nội dung của toàn tập. Đừng khẳng định toàn bộ 10 cặp đã được kiểm định học thuật chỉ nhờ mười câu.

**Hệ thống hiện hành** dùng `tags.skill` và cộng đúng/sai vào *tất cả* tag trong câu. Đừng đề nghị gộp hoặc chuyển các bộ đếm cũ; chỉ đề xuất mapping chỉ đọc cho đợt mới, với assessed skill chính + tag hỗ trợ/bối cảnh. Không sửa ID/đề, không khóa tiến độ.

## Đầu ra ngắn, có thể đưa thẳng cho ChatGPT

- Một bảng 10 hàng: `topic, ids, main_assessed_target_on_sample, other_tag_role, keep_separate_for_independent_assessment?, rationale, example_question_id, confidence, extra_question_needed?`.
- Danh sách tối đa 5 thay đổi có lợi nhất cho trải nghiệm tự học. Không tạo danh mục mở rộng chỉ vì có thể.
- Điểm chưa đồng ý với pilot, kèm nội dung câu và lý do.
- JSON gọn, nguyên ID, `status: PROPOSAL_ONLY`; không ghi `APPROVED` và không dự đoán tần suất thi.
- CHECKPOINT 10–15 dòng: tài liệu đã đọc, 10 cặp đã xét, quyết định còn treo, file cần bổ sung, bước tiếp.

Chưa chuyển sang vòng B hay mở rộng Knowledge Graph. Có thể đề xuất 1–3 câu micro-practice **mỗi ca thực sự cần tách**, không ép mọi tag đều có bài kiểm tra riêng.
