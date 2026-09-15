# Audit UX toàn website – vòng 1

**Ngày:** 15/09/2026  
**Phạm vi:** navigation, trang tổng quan, luồng Bài học → Luyện tập → Tự kiểm tra, Practice, mobile/readability và các điểm cần kiểm tra thủ công trước khi coi website là bản dùng ổn định.

## Kết luận nhanh

Nền tảng hiện đã có cấu trúc học tập khá nhất quán: 25 chuyên đề nằm trong menu, mỗi chuyên đề có Bài học/Luyện tập/Tự kiểm tra, các bài học dài có nút quay lên đầu của Material và phần `10. Liên kết Roadmap`, Practice có giao diện responsive riêng và lưu tiến độ cục bộ trên trình duyệt.

Vòng audit này phát hiện ba điểm UX có tác động rõ ràng và có thể sửa với rủi ro thấp:

1. `navigation.expand` làm toàn bộ cây menu lớn tự mở; với 25 chuyên đề × 3 trang con, sidebar đặc biệt dài trên màn hình nhỏ.
2. Hai mục dành cho quá trình phát triển (`Chuẩn ngân hàng câu hỏi`, `Thư viện hình & QA`) đang đứng ngang hàng với hướng dẫn dành cho học sinh, dễ làm lẫn mục đích sử dụng.
3. Trang `Tổng quan 25 chuyên đề` còn tiêu đề `Thứ tự biên soạn ưu tiên`, mang góc nhìn của người xây dựng nội dung hơn là người học.

## Thay đổi P1 trong batch này

- Bỏ `navigation.expand` để các nhóm menu không tự bung toàn bộ khi mở trang.
- Giữ `navigation.tabs`, `navigation.sections` và `navigation.top`; người dùng vẫn truy cập đầy đủ các chuyên đề nhưng sidebar gọn hơn.
- Gom `Chuẩn ngân hàng câu hỏi` và `Thư viện hình & QA` vào nhóm **Công cụ nội bộ** trong menu Hướng dẫn. Thư viện hình vẫn luôn tìm thấy trên menu như đã thống nhất.
- Đổi phần `Thứ tự biên soạn ưu tiên` ở trang Tổng quan 25 chuyên đề thành **Lộ trình học gợi ý**, viết theo góc nhìn học sinh.

## Các điểm đã kiểm tra và chưa cần sửa ngay

### Luồng học

- Các bài học chuẩn hóa có phần `10. Liên kết Roadmap` với chuyên đề trước/sau, liên kết Luyện tập và Tự kiểm tra.
- Trang chủ đã có luồng bắt đầu từ Bản đồ chương trình → Lộ trình tự học → Tổng quan chuyên đề.
- `navigation.top` đã bật, hữu ích với các chuyên đề dài.

### Practice

- Chuyên đề 02–05 gắn Practice Engine trực tiếp trong Markdown.
- Chuyên đề 06–25 dùng `practice-auto-loader.js`; mục tiêu là cùng một trải nghiệm nhưng giảm lặp mã trong các trang bài tập.
- CSS Practice đã có breakpoint `max-width: 700px` và xử lý `prefers-reduced-motion`.
- Tiến độ được ghi rõ là lưu bằng `localStorage`, tránh tạo kỳ vọng đồng bộ giữa thiết bị.

### Hình ảnh

- Độ phủ hình đã được kiểm tra ở vòng audit trực quan trước; vòng này không tiếp tục thêm hình ngoài các khoảng trống P1–P3 đã xử lý.

## P2 – cần kiểm tra thủ công sau batch này

Những mục sau không nên tự động kết luận chỉ từ mã nguồn và cần spot-check thực tế:

1. **Mobile thật:** menu bên trái, độ rộng bảng, công thức dài, nút Practice và SVG trên điện thoại khoảng 375–430 px.
2. **Print preview:** một bài kiến thức dài, một trang bài tập có Practice và một infographic đen trắng; kiểm tra header/menu có gây lãng phí giấy hay không.
3. **Hiệu năng:** các trang nhiều SVG/hình học trên mạng di động chậm; chỉ tối ưu nếu đo thấy vấn đề thật.
4. **Khả năng đọc:** kiểm tra cỡ chữ trong các SVG dày thông tin trên điện thoại; không giảm kích thước nội dung chỉ để nhét vừa một màn hình.

## Nguyên tắc cho vòng UX tiếp theo

- Ưu tiên vấn đề ảnh hưởng trực tiếp đến học sinh trước thay đổi thẩm mỹ.
- Không đổi đồng loạt giao diện khi chưa có bằng chứng từ spot-check.
- Mỗi batch UX phải nhỏ, có vị trí kiểm tra cụ thể và có thể hoàn tác độc lập.
