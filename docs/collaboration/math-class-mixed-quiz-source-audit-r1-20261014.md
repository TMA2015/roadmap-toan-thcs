# Kiểm tra tổng hợp theo lớp — phân tích nguồn và cổng thiết kế R1

**Ngày:** 2026-10-14 · **Scope:** G6 pilot only · **Trạng thái:** `SOURCE_AUDIT_ONLY / NO_LEARNER_FEATURE / ACADEMIC_COMPOSITION_REVIEW_REQUIRED`.  
**Nguồn:** kho Micro `assets/data/practice/*-micro-v1.json`, thẻ Core `assets/data/curriculum/topicNN-learning-workspace.json`, các manifest Practice truyền thống và quy tắc Master Plan v1.2.1.

## Vai trò sản phẩm đã được chủ dự án duyệt

“**Kiểm tra tổng hợp**” là bài **ôn nhanh nhiều chặng / nhiều chuyên đề, không gợi ý hoặc AI khi làm**, có chấm điểm sau khi nộp và lưu lịch sử riêng. Chức năng **không** đại diện điểm thi học kỳ/chứng chỉ hoặc điểm `Core Readiness` / `Mastery`, trừ khi sau này có đề và rubric được kiểm định cho đúng mục đích.

Đường vào dự kiến: `Học theo lớp → Chọn lớp → Kiểm tra tổng hợp`. Khi không đủ dữ liệu hợp lệ, phải khóa chế độ hoặc ghi rõ “chưa đủ câu hỏi”; tuyệt đối không lấy ngẫu nhiên câu lớp cao hơn để lấp số lượng.

## Kiểm toán dữ liệu nguồn G6 (số đếm từ bản main tại thời điểm lập audit)

| Nguồn Core Micro | Tổng câu Micro | Khớp tag Grade 6 + `curriculum.grades` + `KNTT-Core` | Có `card_id` xuất hiện trong thẻ Core hiện tại |
|---|---:|---:|---:|
| CĐ02 · Số và phép tính | 64 | 52 | 52 |
| CĐ03 · Tỉ lệ | 19 | 2 | 2 |
| CĐ13 · Góc và đường thẳng | 23 | 10 | 10 |
| CĐ20 · Hình học/đo lường | 29 | 9 | **3** |
| CĐ21 · Thống kê | 32 | 8 | 8 |
| CĐ23 · Xác suất | 28 | 6 | 6 |
| **Tổng** | **195** | **87** | **81** |

Các số liệu là **kiểm tra metadata**, chưa xác nhận đủ loại câu, nguồn phê duyệt học thuật, chất lượng câu hỏi hay khả năng thành một đề cân đối. Riêng sáu câu CĐ20 có tag lớp 6 nhưng không có liên kết `card_id` tới thẻ Core hiện thời: **BLOCK tuyển chọn** tới khi giải thích và kiểm định tình trạng này. Danh mục Practice CĐ02 truyền thống có **147 câu xuyên lớp**, không được nhập tràn vào bộ chọn lớp 6 nếu thiếu placement cấp câu.

Một số thẻ kiến thức CĐ13/CĐ20/CĐ21/CĐ23 có nhiều lớp cùng dùng và thiếu trường `grades` trực tiếp; không suy luận placement bằng cách chỉ nhìn tiêu đề thẻ. Ưu tiên provenance cấp `question.curriculum.grades`, `question.tags.grade` và liên kết thẻ/source review đã xác nhận.

## Eligibility gate cho từng câu

1. ID bất biến và khác nhau; đáp án index hợp lệ; ≥2 phương án; lý do/giải thích đủ rõ.
2. `curriculum.book === KNTT`; `curriculum.grades` có lớp được chọn; `tags.grade` phải khớp cùng lớp; `tags.layer === KNTT-Core`.
3. `card_id` tồn tại trong thẻ Core của chính nguồn; card phải liên hệ với chương/bài đang chọn bằng mapping KNTT đã được kiểm định, không dùng grade từ yêu cầu tiên quyết.
4. Loại mọi item chưa được review học thuật đủ cho vai trò **bài kiểm tra tổng hợp**. Review cũ cho Micro/Practice không mặc nhiên phê duyệt cấu trúc đề mới.
5. Trộn tối thiểu hai chặng hoặc chuyên đề; chặn trùng ID, trùng stem/variant family; có phân phối kỹ năng trước khi tạo lượt.
6. Không lấy câu đã xuất hiện nguyên xi trong Core Readiness để tạo score “độc lập” hoặc tuyên bố năng lực. Nếu dùng Micro đã từng học, ghi đúng **điểm ôn nhanh**, có nguy cơ ghi nhớ đáp án.
7. Nếu chế độ chọn 20/30 câu chưa đủ câu độc lập hoặc mapping chưa xác minh, không hiện hoặc không cho chọn mức đó.

## Hợp đồng kết quả

- Bài kiểm tra nằm ở route mới, không sửa `PracticeEngineV2` / `assessment-engine-v1.js`.
- Trong phiên làm bài: không nút xem lời giải, hint hoặc Gemini; chỉ có câu hỏi, điều hướng, câu chưa trả lời, nút nộp và xác nhận.
- Sau khi nộp: hiện số đúng/tổng, lỗi theo **kỹ năng đã map hợp lệ**, lời giải và liên kết ôn lại; nhãn rõ “điểm tự luyện, không phải điểm học kỳ”.
- Lưu riêng dưới versioned namespace `toan-thcs-class-mixed-quiz-v1` theo phiên làm (immutable source id + version, item ids/order/answers/timestamp/score). Không sửa `toan-thcs-practice-v1`, `toan-thcs-assessment-v1`, Error Bank, Core mastery hoặc attempt lịch sử.
- Chống lịch sử hỏng, giữ backup/export và quy trình migration nếu format thay đổi. Không âm thầm reset/lược bỏ phiên. Thiết bị khác không tự đồng bộ nếu không có dịch vụ được chủ dự án duyệt.
- Bài mới phải có QA desktop/mobile, timer không ép thời gian khi chưa có bằng chứng sư phạm; hỗ trợ lưu nháp cục bộ chỉ sau khi đã kiểm tra hợp đồng lưu trữ.

## Đường triển khai

**R1-Source:** lọc metadata và lập packet học thuật cho một bộ G6 nhỏ. **R2-Academic:** NotebookLM đánh giá cụ thể danh sách câu, phép trộn, phạm vi KNTT và giải thích; kết quả PASS item-by-item mới được đưa vào candidate. **R3-Prototype:** giao diện làm/nộp/chữa, lưu kết quả riêng, thử trên local preview, không có credit Readiness. **R4-Human A2:** quan sát học sinh thật, test thiết bị và lịch sử; chỉ sau đó mới cân nhắc phát hành.

Chưa bật chế độ với G7/G8/G9 hoặc dán nhãn “đề thi học kỳ 2” khi chưa có đủ mapping học kỳ/chương, kế hoạch đánh giá và sự phù hợp thực tế. Ý kiến UX NotebookLM là **tùy chọn**, nhưng review học thuật đối với đề mới vẫn tuân thủ quy tắc dự án.
