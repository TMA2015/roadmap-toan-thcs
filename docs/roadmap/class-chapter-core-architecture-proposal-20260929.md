# Thiết kế điều hướng và không gian tự học v2 — 29/09/2026

**Trạng thái:** DESIGN PROPOSAL / SOURCE AUDIT; chưa triển khai nội dung học thuật, không chứng nhận bao phủ SGK. **Nguồn khóa:** main e58a36f8e974a3d1f72b6ffb5a15d0e88a1c8b51 (trước PR #158). Liên hệ báo lỗi: 8 ảnh chủ dự án ngày 29/09. Tuân thủ Master Plan v1, Golden Template v1 và phân biệt Formative/Assessment.

## 1. Kiểm kê đã xác nhận từ repository

- Học theo lớp: 39 chương được hiển thị (KNTT 6: 9; KNTT 7: 10; KNTT 8: 10; KNTT 9: 10). Mapping Grade 9 hiện ở cấp chương, không có danh sách lessons chi tiết như Grade 6–8. Không được tự suy ra lesson IDs từ tên chương.
- 22 Learning Workspace chuyên đề, mỗi workspace 5 thẻ, tổng 110 thẻ; CĐ01/03/22 không có workspace dạng này. 25 thẻ có teaching_copy đủ trường ở CĐ02,21,23,24,25; còn 85 thẻ thiếu bản giảng riêng có cấu trúc. Không suy ra rằng toàn bộ Markdown của các chuyên đề đó thiếu lý thuyết.
- Trang Học theo lớp hiện đưa vào #core-journey của chuyên đề; cùng một đích được dùng bởi nhiều chương (ví dụ G6 chương 1/2/3/6/7 đều vào CĐ02). Vì vậy hiện không lọc đúng nội dung/câu hỏi theo từng chương; G7 có thể được dẫn vào Core lớp 6 của CĐ02.
- 15 câu trên các workspace hiện là 5×3 micro formative, không phải Readiness assessment. "15 câu", "5 thẻ" là số liệu của dữ liệu hiện tại, không phải yêu cầu kiến trúc lâu dài.

## 2. Hai entry points, không nhân bản syllabus

**Học theo lớp:** /hoc-theo-lop/?lop=G → từng chương có hai đường dẫn riêng "Lý thuyết" và "Thực hành"; URL có grade/chapter ổn định; trên trang phải hiện sách, lớp, chương, phạm vi bài, kiến thức nền, hai loại thực hành và mục học tiếp. Mặc định KHÔNG chuyển đến toàn bộ 5 thẻ Core của một chuyên đề.

**Học theo chuyên đề:** /kien-thuc/<topic>/ giữ kiến thức dọc; phần micro Core chuyển sang trang con /kien-thuc/<topic>/core/ với điểm vào rõ từ chuyên đề. Ba không gian Golden Template "Học / Luyện / Tự kiểm tra" tiếp tục có ý nghĩa độc lập; Core micro là formative nằm trong đường học, không đổi thành Readiness. Học phần theo lớp có thể liên kết tới các mục chính xác thuộc chuyên đề nhưng không coi toàn bộ chuyên đề là Core của lớp đã chọn.

**Khả năng tương thích:** link cũ có #core-journey phải có CTA/đường chuyển hợp lệ sang trang con mới; giữ URL trang Bài học/Luyện tập/Tự kiểm tra cũ. Không xóa lời giải/hình ảnh/infographic cũ. Không chạm dữ liệu học sinh khi chỉ chuyển UI.

## 3. Chapter overlay là nguồn định tuyến

Mỗi Chapter View phải liên kết với bản mapping nguồn, có khóa ổn định (grade, chapter, lesson/section), danh sách primary topic và supporting topic, phạm vi KNTT-Core đã review, skill IDs, card IDs và **ID câu được chọn cụ thể**, không lọc chỉ theo nhãn tên chuyên đề hay grade đơn lẻ. Các mục thiếu chứng cứ ở Grade 9 phải để PENDING, không hiển thị như đã được biên soạn.

Cấu trúc gợi ý: {schema_version, book, grade, chapter, lesson_ids, source_map_path, theory_sections:[{skill_id, source_page, anchor, teaching_content_id, review_status}], practice:[{item_id, mode:"concept"|"apply", assessed_skill, curriculum_layer, review_status}], topic_links, prerequisite_skill_ids}. Các trường id/version phải giữ khả năng ánh xạ sang nguồn cũ.

**Lý thuyết**: khái niệm, điều kiện và lý do, ví dụ tối thiểu, lỗi dễ mắc; lấy dữ liệu đã kiểm định từ tài liệu hiện có hoặc soạn thêm rồi review. Cấm lấy nguyên câu SGK làm nội dung tự viết; chỉ dẫn nguồn rõ ràng.

**Thực hành**: nhóm A "Hiểu lý thuyết/nhận biết và lập luận"; nhóm B "Tính toán/vận dụng" nếu cần. Số lượng linh hoạt theo skill coverage và mức độ khó, không buộc 5 Core × 3 câu; không tạo câu ứng dụng chỉ để đủ số. Câu dùng chung được tham chiếu theo canonical ID; không sao chép sang ID mới. Practice theo lớp chỉ chứa đúng kiến thức lớp/chương; practice theo chuyên đề là đường dọc rộng hơn.

**Evidence**: giữ recordAnswer/counters cũ, formatively record only on answer, no duplicates on navigation; mở thêm optional context grade/chapter/path bằng schema/version mới và migration/backward compatible. Không cộng hai bản ghi context vào tổng một câu; không tự tái chấm lịch sử. Readiness vẫn độc lập (không hint/Tutor trong assessment).

## 4. Chuẩn teaching_copy cho 85 thẻ còn thiếu

Trường bắt buộc ở mỗi thẻ: key_idea; worked_example.problem, .solution; misconception; summary; source_reference/skill coverage; academic_review_status. Hình học phải nêu giả thiết, quan hệ đúng và nguồn hình SVG đã kiểm định. Với nội dung chưa QA, giao diện phải nói "Chưa có ví dụ mẫu riêng" và dẫn tới đoạn bài giảng nguồn, KHÔNG suy diễn AI tự động là bản giảng chuẩn.

Thứ tự authoring theo batch kiến thức và nguy cơ: đại số 04–12 → hình học 13–20 → các chuyên đề còn lại thiếu; đối chiếu ngược câu micro với card (Base, Trap, Apply). Batch có source-locked question/card snapshot, phản biện độc lập và QA về đáp án/lời giải rồi mới public. CĐ02/21/23/24/25 giữ content đã có, chỉ kiểm tra rendering và consistency.

## 5. Định nghĩa hoàn thành

- PC desktop/full+half, iPad dọc/ngang và iPhone: mở/đóng ngăn kéo, scroll top/bottom, mở/đóng modal, Escape/focus/overlay, không overlay tiêu đề hay mất đường vào sáu nhóm chính.
- Tất cả thẻ Core có câu hỏi thực, lựa chọn có viền, nút gợi ý/giảng/lời giải rõ ràng; nội dung mỗi modal scroll độc lập; đóng mở lại không thay đổi vị trí ô ngoài; có xem câu trước/sau; bỏ qua không ghi điểm; trả lời lại không nhân đôi evidence.
- Phép toán/MathJax/SVG không tràn chiều ngang, hình/tables có giải pháp zoom/scroll. Bài thường có hint; mở đáp án trước khi làm được đánh dấu trợ giúp; Readiness không bị lộ đáp án.
- 39 chương hiển thị hai đường Lý thuyết/Thực hành. Chỉ công bố chapter content sau khi có coverage từng lesson/skill; Grade 9 hiện cần bổ sung lesson-level mapping.
- 85 teaching_copy được author/review từng mục và kiểm tra toán; thiếu content thì hiển thị honest fallback; không tuyên bố hoàn tất ở CI chỉ vì JSON parse.
- CI/strict build, browser smoke trên các widths, QA thiết bị Safari thật, đối chiếu data ID/score; chốt từng PR hẹp và rollback checkpoint, không gộp release nội dung vào hotfix UI.

**Không trong scope của bản đề xuất này:** sinh đồng loạt câu hỏi/giải thích chưa review, sửa ngân hàng câu hiện có, đưa chuyên/challenge vào điểm Core, thay khóa lưu dữ liệu cũ, merge/deploy tự động.
