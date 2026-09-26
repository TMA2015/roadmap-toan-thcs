# CĐ04–11 — đối soát 10 cặp tag với toàn bộ câu hỏi nguồn

Ngày 26/09/2026. Phản hồi cho Gemini, **chưa phải quyết định migration**. Toàn văn 10 câu có đề, phương án, đáp án và giải thích: [gói câu hỏi thực tế](gemini-question-evidence-10-cases-2026-09-26.md).

## Quan niệm thiết kế chốt cho đợt review

Mục tiêu là bộ kỹ năng **tối thiểu nhưng đủ chẩn đoán**: những năng lực nền, làm bài độc lập và ứng dụng thiết thực. Không biến mọi công thức, biểu diễn, thuật toán con, nhóm dạng bài, ví dụ thực tế hoặc kỹ thuật chuyên thành một skill mastery riêng. Một câu hỏi có thể có một **assessed skill chính** và nhiều **supporting/context/method tags**. Nếu bài đo được hai năng lực độc lập cần câu phụ, rubric hoặc bài khác để tách bằng chứng. Không tự trừ/cộng cả hai mastery chỉ từ một câu trả lời.

## Đếm tập câu đầy đủ, không chỉ 3 ID ví dụ

| Cặp | Số câu tag A | Số câu tag B | Đồng xuất hiện | Nhận định sơ bộ |
|---|---:|---:|---:|---|
| CĐ04 `cong-tru-da-thuc` / `bo-ngoac-dau` | 14 | 26 | 14 | Giữ khả năng đo phép cộng/trừ và dấu ngoặc riêng khi có bài riêng; câu ghép không cho hai bằng chứng độc lập. |
| CĐ04 `nhan-bieu-thuc` / `tinh-phan-phoi` | 26 | 26 | 26 | Ứng viên chuẩn hóa thành một assessed skill; phân phối là quy tắc/phương pháp hỗ trợ. |
| CĐ04 `lap-bieu-thuc` / `bai-toan-thuc-te` | 10 | 10 | 10 | Lập biểu thức là năng lực; thực tế là bối cảnh ứng dụng, không tự tạo mastery riêng. |
| CĐ05 `nhan-dang-hdt` / `binh-phuong-hoan-chinh` | 21 | 16 | 14 | **Không trùng hoàn toàn**; xem kỹ năng chung–riêng, tránh đánh giá hai lần. |
| CĐ05 `phan-tich-hdt` / `hieu-hai-binh-phuong` | 30 | 19 | 12 | **Không trùng hoàn toàn**; phương pháp tổng quát và hằng đẳng thức cụ thể. |
| CĐ07 `hai-phan-thuc-bang-nhau` / `giu-dieu-kien-ban-dau` | 6 | 14 | 6 | Kết luận bằng nhau khác với bảo toàn miền xác định, nên cần hai tín hiệu chẩn đoán khi có bằng chứng riêng. |
| CĐ09 `so-nghiem-he` / `y-nghia-hinh-hoc` | 12 | 12 | 12 | Hai cách nhìn của cùng bài trong tập hiện tại; cân nhắc một assessed skill và phương diện hình học là hỗ trợ. |
| CĐ09 `lap-he-bai-toan` / `bai-toan-so` | 32 | 12 | 12 | Năng lực lập hệ vs bối cảnh bài toán số. |
| CĐ10 `giao-diem-do-thi` / `lien-he-he-phuong-trinh` | 8 | 8 | 8 | Tìm giao điểm là đích; giải hệ là phương pháp/liên hệ, không tự nhận có hai mastery độc lập. |
| CĐ11 `khai-phuong-tich` / `dua-thua-so-ra` | 12 | 12 | 12 | Khai phương tích là cơ sở; thao tác đo trực tiếp ở câu mẫu là đưa thừa số ra ngoài căn. |

Tổng cộng **5 cặp có tập câu trùng hoàn toàn, 5 cặp chỉ giao nhau một phần**. Nhận định Gemini rằng cả 10 cặp chia sẻ 100% câu nguồn không đúng: mỗi catalogue chỉ cho tối đa 3 ID ví dụ/tag. Số liệu ở đây được đếm trên toàn bộ file nguồn của 6 chuyên đề liên quan.

## Bằng chứng từ 10 câu

- `ALG04V2_037`: rút gọn `(5x+2)-(-x+2)`, cần bỏ ngoặc rồi cộng/trừ.
- `ALG04V2_051`: khai triển `4x(x+3)`, nhân biểu thức bằng quy tắc phân phối.
- `ALG04V2_111`: mô hình chu vi chữ nhật `2x+3` và `x-1`; assessed là lập biểu thức, bối cảnh là hình học thực tế.
- `ID05V1_061`: viết `x²+4x+4` thành `(x+2)²` (nhận dạng mẫu cụ thể).
- `ID05V1_021`: phân tích `x²-16` thành tích (phương pháp và mẫu công thức).
- `RAT07V1_025`: hai phân thức bằng nhau trên miền `x != 2`; đáp án gắn cả hai ý, không đủ để chấm độc lập cả hai.
- `SYS09V1_029`: xác định số nghiệm qua vị trí hình học của hai đường thẳng.
- `SYS09V1_089`: từ tổng/hiệu hai số, chọn hệ tương ứng; `bai-toan-so` là ngữ cảnh.
- `FUN10V1_103`: tìm giao điểm hai đường thẳng bằng giải phương trình hoành độ.
- `RAD11V1_043`: rút gọn căn `√8=2√2`, sử dụng phép khai căn tích để đưa thừa số ra ngoài.

## Yêu cầu Gemini ở lượt tới

Không cần tranh luận giữ/gộp toàn bộ 116 tag nữa. Chỉ đánh giá các cặp theo **assessed skill / supporting concept-method / context / specialized optional** và đề xuất số kỹ năng đo độc lập tối thiểu đủ chẩn đoán. Dùng nguyên ID; đề xuất gộp phải ghi `canonical_id` và `legacy_ids` *ở lớp mapping*, không đổi ID ngân hàng hoặc cộng lại số liệu học sinh ngay. Nêu kỹ năng nào thiếu bài đo độc lập, nên bổ sung 1–3 câu micro-practice hay không. Chưa đánh giá tần suất thi hoặc mở rộng 346 node vào đồ thị.

## Ghi chú kỹ thuật

Mã Practice Engine hiện duyệt mọi `question.tags.skill` khi ghi thống kê, vì vậy cùng một lần trả lời có thể làm tăng cả hai bộ đếm. Điều này phù hợp với tag mô tả nhưng **không chứng minh người học đã làm độc lập được từng kỹ năng**. Khi chuẩn hóa, phải bảo toàn số liệu cũ và phân biệt thống kê tag lịch sử với bằng chứng đánh giá kỹ năng chính từ những lượt làm mới. Chưa sửa runtime trong đợt này.
