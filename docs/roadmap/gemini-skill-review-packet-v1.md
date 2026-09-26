# Gói phản biện độc lập cho Gemini — Skill Taxonomy v1

Trạng thái: **REQUEST_FOR_REVIEW** (chưa được Gemini kiểm định; tuyệt đối không coi các gợi ý dưới đây là kết luận đã chốt).

## Tài liệu đầu vào (phải đọc đủ cả 4)

- Manifest 04–11: https://raw.githubusercontent.com/TMA2015/roadmap-toan-thcs/main/docs/assets/data/curriculum/review-snapshot-04-11.json
- Manifest 12–18: https://raw.githubusercontent.com/TMA2015/roadmap-toan-thcs/main/docs/assets/data/curriculum/review-snapshot-12-18.json
- Manifest 19–25: https://raw.githubusercontent.com/TMA2015/roadmap-toan-thcs/main/docs/assets/data/curriculum/review-snapshot-19-25.json
- Kiểm kê và nghi vấn: https://raw.githubusercontent.com/TMA2015/roadmap-toan-thcs/main/docs/assets/data/curriculum/skill-taxonomy-audit-v1.json
- Knowledge Graph đang chạy (chỉ là bản chọn lọc 41 node, KHÔNG phải chuẩn bao phủ): https://raw.githubusercontent.com/TMA2015/roadmap-toan-thcs/main/docs/assets/data/curriculum/knowledge-graph-v1.json

Mỗi snapshot lưu đường dẫn manifest gốc, SHA, `skill_labels`, `skill_groups`, nguồn câu hỏi và số câu **khai báo**. Cần mở file nguồn tương ứng khi gặp ca trùng/tách; không kết luận chỉ từ tên tag.

## Nguồn học thuật, đề thi

- Văn bản chương trình GDPT môn Toán (ban hành kèm TT 32/2018): https://thcsandong.haiphong.edu.vn/van-ban-bo-gddt/chuong-trinh-giao-duc-pho-thong-mon-toan-ban-hanh-kem-theo-thong-tu-so-322018tt/vbctmb/20343/91425
- Đề/đáp án chính thức Hà Nội 2025–2026 **không chuyên**: https://www.hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctmb/552/16329
- Đề/đáp án chính thức Hà Nội 2026–2027 **không chuyên**: https://hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctmb/552/16984

Không được ước lượng tần suất từ hai đề rồi khái quát thành toàn quốc. Muốn nhận xét về đề chuyên, phải bổ sung corpus đề chuyên chính thức riêng, ghi địa phương, năm và cách đếm.

## Prompt gửi Gemini — vòng A: kiểm định học thuật và sự trùng lặp

Bạn là phản biện độc lập cho hệ thống tự học Toán THCS (lớp 6–9), định hướng Core trước, luyện thi lớp 10 sau, nhánh chuyên tự chọn. Đọc đầy đủ 4 JSON đầu vào. Nếu không truy cập được URL hoặc file nguồn câu hỏi, báo thiếu, không giả vờ đã đọc.

Mục tiêu: chuẩn hóa danh mục kỹ năng **theo năng lực có thể đo được**, KHÔNG biến mỗi loại câu hỏi hay mỗi công thức thành một skill độc lập. Với từng mã, kiểm tra: (1) học sinh phải làm được gì, (2) có câu hỏi đo riêng không, (3) lỗi sai đặc thù là gì, (4) kỹ năng khác gần giống có thực sự đo cùng năng lực không. Phân biệt năng lực cơ bản, dạng bài ứng dụng, kỹ thuật nâng cao, năng lực siêu nhận thức, tag ôn tập tổng hợp.

Trình bày đề xuất theo 6 hành động: KEEP, MERGE, SPLIT, RENAME, RECLASSIFY, ADD; nêu rõ `old_ids`, `proposed_canonical_id`, nhãn, mô tả đầu ra, chuyên đề/lớp, ID câu hỏi ví dụ, lý do, độ tin cậy, và `needs_human_review`. Không xóa hay đổi ID trong question bank, không tự gộp thống kê học sinh; cần `legacy_aliases` và chiến lược migration có thể kiểm thử.

Phải phân tích các điểm sau trước khi mở rộng danh sách: mã `cach-deu-dinh` gắn vào 14 và 15 với nghĩa khác nhau; câu `TRI14V1_132` có ngữ cảnh ba đỉnh, nên cấm tự động tách chỉ dựa trên chuyên đề. Các nhóm `dieu-kien-xac-dinh / dkxd-phuong-trinh-mau / dkxd-can / giu-dieu-kien-ban-dau / doi-chieu-nghiem`; `lap-he-bai-toan / lap-he / lap-phuong-trinh`; `binh-phuong-hoan-chinh` giữa 05–06; tag tổng hợp ở 25. Chỉ ra cả các trường hợp **không nên gộp**. So sánh toàn bộ 346 mã để tìm trùng khác tên và kỹ năng đầu ra quá rộng.

## Prompt gửi Gemini — vòng B: tầm quan trọng, phân tầng và đề thi

Dùng danh mục đã điều chỉnh ở vòng A; không thay đổi các quyết định còn treo. Với mỗi skill đã xác định, đánh giá các trục độc lập:

- `curriculum_status`: required / application / outside_core / unverified, kèm lớp và yêu cầu cần đạt có dẫn nguồn.
- `foundation_importance`: high / medium / low / unverified, kèm kỹ năng phụ thuộc chứng minh được; không nhầm với tần suất thi.
- `learner_layer`: Core / Entrance10 / Extension / Specialist / ExamStrategy (có thể nhiều giá trị nếu giải thích rõ).
- `exam_non_specialist` và `exam_specialist`: ghi nguồn đề, năm, địa phương, câu số, phương pháp đếm, số cơ hội xuất hiện; khi chưa khảo sát ghi `unverified`, không gán sao hoặc phần trăm theo cảm tính.
- `recommended_practice_weight`: nền tảng/ôn thi/tự chọn; phải có lý do. Một kỹ năng ít ra thành câu riêng vẫn có thể là nền tảng cao.

Kiểm tra các dạng bài trong đề thực tế chưa được ngân hàng đáp ứng; mọi đề xuất ADD phải có yêu cầu cần đạt hoặc dẫn chứng bài thi, ví dụ câu hỏi, lý do không thể biểu diễn bằng skill đang có. Không nâng các kỹ thuật chuyên thành bắt buộc Core. Giải thích bất đồng rõ ràng, không điền tần suất thiếu dữ liệu bằng phỏng đoán.

## Đầu ra và điều kiện hoàn thành

Gửi 3 phần: (1) báo cáo executive ngắn + danh sách vấn đề nghiêm trọng; (2) JSON machine-readable theo mẫu `gemini-skill-review-response-v1.json` trong cùng thư mục; (3) bảng các quyết định còn tranh luận kèm bằng chứng cần thu thập. Để đảm bảo đầy đủ, xuất lần lượt cho 04–11, 12–18, 19–25, rồi một vòng rà soát **trùng chéo giữa các batch**. Không chỉ phản biện 41 node có sẵn. Đừng gắn nhãn APPROVED khi chưa đọc và đối chiếu câu hỏi nguồn.

## Điều kiện tích hợp của ChatGPT sau phản biện

Chỉ đưa thay đổi vào Knowledge Graph sau khi (a) đối chiếu manifest với tag ở câu hỏi, (b) quyết định giữ/tách/gộp có bằng chứng, (c) thống kê localStorage cũ vẫn truy hồi đúng, (d) kiểm định không có dangling edges hoặc hard lock, (e) kiểm thử giao diện học sinh. AI Tutor không dùng dữ liệu suy diễn từ tag trùng mã trước khi xử lý collision.
