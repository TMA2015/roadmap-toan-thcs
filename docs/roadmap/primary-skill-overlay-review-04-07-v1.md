# CĐ04–07 — ánh xạ một kỹ năng chính theo từng câu (đợt 1)

**Ngày:** 26/09/2026 · **Trạng thái:** đề xuất học thuật có khóa nguồn, **chưa kích hoạt trên website**. Kết quả beta v2 do người dùng thử đã được chấp nhận; đợt này chỉ mở rộng bộ dữ liệu để tiến tới phương pháp đánh giá gọn.

## Phạm vi, nguồn và kết quả kiểm kê

Dữ liệu lấy từ manifest và toàn bộ chunk câu hỏi hiện hành trong GitHub `main`, khóa bằng Git blob SHA theo **từng tệp nguồn**. Không tự tái tạo câu hỏi. `original_skill_tags` của từng câu được sao nguyên thứ tự; chỉ thêm lớp `proposed_assessed_skill` và vai trò nhãn khác.

| Chuyên đề | Câu nguồn | Có đề xuất primary | Cần xem thêm | Chưa chọn primary |
|---|---:|---:|---:|---:|
| CĐ04 Biểu thức đại số | 132 | 132 | 2 | 0 |
| CĐ05 Hằng đẳng thức | 120 | 116 | 5 | 4 |
| CĐ06 Phân tích đa thức | 120 | 96 | 24 | 24 |
| CĐ07 Phân thức đại số | 120 | 112 | 8 | 8 |
| **Tổng** | **492** | **456** | **39** | **36** |

**Phân biệt:** 456 là số **ứng viên ánh xạ**, không phải 456 câu đã được phản biện toán học toàn văn hoặc đủ điều kiện chấm mastery. 39 trường hợp cần xem thêm gồm ba trường hợp có primary tạm nhưng nhãn chưa thật khớp. Trường hợp không chọn primary thì không được tự lấy tag đầu tiên hoặc gộp sang nhãn khác. Mọi dữ liệu trong bốn JSON chỉ là overlay chưa được runtime đọc.

## Bốn tệp ánh xạ kiểm kê

- [CĐ04](../assets/data/curriculum/primary-skill-overlay-draft-04-bieu-thuc-dai-so-v1.json)
- [CĐ05](../assets/data/curriculum/primary-skill-overlay-draft-05-7-hang-dang-thuc-v1.json)
- [CĐ06](../assets/data/curriculum/primary-skill-overlay-draft-06-phan-tich-da-thuc-v1.json)
- [CĐ07](../assets/data/curriculum/primary-skill-overlay-draft-07-phan-thuc-dai-so-v1.json)

## Các trường hợp cần phản biện học thuật trước

- **CĐ04 (2):** `ALG04V2_009` hỏi hạng tử tự do nhưng đang gắn nhãn nhận biết đa thức rất rộng; `ALG04V2_010` hỏi phần biến của đơn thức nhưng có thêm tag `he-so-bac`. Đề xuất primary theo mục tiêu hỏi, giữ tag cũ, chờ sửa cách diễn đạt/metadata chứ không lén đổi ID.
- **CĐ05 (5):** `ID05V1_116–119` hiện mang tag `chung-minh-hdt`, nhưng câu trắc nghiệm chỉ chọn đẳng thức hoặc bước chứng minh; không coi đúng một đáp án là năng lực viết chứng minh. `ID05V1_120` nhận ra **bước bắt đầu** phân tích bằng hiệu hai bình phương, không phải chứng minh đã phân tích hoàn toàn.
- **CĐ06 (24):** `FAC06V1_077–092` là phối hợp nhiều phương pháp phân tích. `FAC06V1_113–120` là ứng dụng vào chia hết/lập luận, không tự gán tag ứng dụng chung thành skill Core đo độc lập. Cần xác định đích học tập hoặc rubric thực tế, ưu tiên không thêm hàng loạt tag mới.
- **CĐ07 (8):** `RAT07V1_109–114` là các biểu thức phân thức nhiều phép tính; không suy luận thành nhiều năng lực độc lập từ một đáp án. `RAT07V1_119–120` là bài tìm giá trị nguyên, cần xét ranh giới lớp chương trình/ứng dụng; chưa tự gắn Core.

Gói **toàn văn đề, các lựa chọn, đáp án và giải thích hiện hành** để người phản biện đọc trực tiếp, không giả định mở được link:
[CĐ04–05](../assets/data/curriculum/primary-skill-review-queue-04-05-v1.json) · [CĐ06–07](../assets/data/curriculum/primary-skill-review-queue-06-07-v1.json).

## Điều đã xác nhận và điều chưa xác nhận

- **Kiểm định cấu trúc tự động:** đối chiếu chính xác ID/đề/tag/đáp án với tệp nguồn và SHA; mọi câu xuất hiện đúng một lần, không mất/nhân đôi tag; primary được đề xuất phải có thật trong tag nguồn; kiểm tra khóa nguồn không trôi.
- **Chưa kiểm định học thuật toàn văn cho 492 câu:** việc gán theo họ câu và danh mục tag chỉ là lựa chọn ban đầu, không chứng minh độ đo riêng hay kết luận tầng chương trình.
- **Chưa đụng tới** Practice Engine, Beta v2, learner localStorage v1/v2, Knowledge Graph, phân tầng KNTT-Core và 25 chuyên đề. Cặp `dieu-kien-xac-dinh` xuất hiện ở CĐ04/CĐ07 vẫn giữ nguyên nguồn chuyên đề và lịch sử, không cộng gộp thống kê cũ.

## Tiêu chí trước khi kích hoạt pilot CĐ04–07

1. Phản biện/duyệt từng họ câu theo toàn văn và rà soát các trường hợp đặc biệt; 39 câu cần xem thêm có quyết định riêng, không áp nhãn đo khi chưa rõ.
2. Xác định tệp nguồn vẫn cùng SHA; nếu thay câu, phải dựng lại overlay và QA trước khi áp.
3. Kiểm tra tầng chương trình theo KNTT/chuẩn cần đạt; không suy diễn từ số tag hay tần suất xuất hiện trong bộ bài tự biên soạn.
4. Trong bài một điểm, chỉ phát sinh một assessed evidence khi mapping của câu đã duyệt. Các nhãn hỗ trợ/bối cảnh/phương pháp chỉ dùng để giải thích/lọc; câu chưa duyệt tiếp tục thống kê formative truyền thống nếu luyện trong engine cũ.
5. Chạy QA hồi quy trên desktop/mobile và thử nghiệm với học sinh; bảo toàn hoàn toàn dữ liệu lịch sử, không suy ngược điểm v2 từ bộ đếm v1.

### Quy trình và điểm dừng hiện tại

Bản này là **source-locked review asset**; không được gọi là triển khai tính năng học sinh. Lượt kế tiếp ưu tiên QA học thuật CĐ04 rồi CĐ05, không cố duyệt 492 câu bằng một quyết định hàng loạt. Với sai lệch của Gemini, xem đó là kênh tham khảo, chỉ lấy đề xuất có thể đối chiếu theo câu thực tế.
