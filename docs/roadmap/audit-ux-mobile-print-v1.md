# Audit UX vòng 2 – Mobile và Print

## Mục tiêu

Vòng này tập trung vào hai tình huống sử dụng thực tế sau khi navigation đã được làm gọn:

1. học trên điện thoại/màn hình hẹp;
2. in bài học hoặc lưu PDF từ trình duyệt.

Nguyên tắc: chỉ bổ sung CSS phòng lỗi phổ biến, không thay bố cục hoặc phong cách Material hiện tại.

## Kiểm tra mã nguồn

- Practice Engine đã có breakpoint mobile riêng ở `practice-engine.css`.
- Các hình SVG/PNG trong bài thường có kích thước hoặc `width` cụ thể; cần bảo đảm không vượt chiều rộng màn hình.
- Nhiều bảng kiến thức có nhiều cột; trên màn hình hẹp cần cho phép cuộn ngang thay vì kéo rộng toàn trang.
- Công thức MathJax dạng display có thể rộng hơn viewport; cần cho phép cuộn ngang khi thật sự cần.
- Website chưa có stylesheet toàn cục dành riêng cho mobile/print.
- Theme Material đã có hỗ trợ in cơ bản, nhưng tài liệu học dài có lợi khi chủ động tránh cắt hình, bảng, admonition và heading ở vị trí khó đọc.

## Thay đổi trong batch này

Thêm `docs/assets/stylesheets/site-ux.css` và nạp nó qua `extra_css` của MkDocs.

### Mobile

- hình/SVG luôn co tối đa theo viewport;
- bảng Markdown rộng có thể cuộn ngang;
- MathJax display rộng có thể cuộn ngang;
- nút Practice có chiều cao bấm tối thiểu lớn hơn trên màn hình nhỏ.

### Print / Save as PDF

- bỏ header, tabs, sidebar, footer và nút back-to-top khỏi bản in;
- giữ phần nội dung học ở chiều rộng giấy;
- cố gắng tránh ngắt trang giữa hình, bảng, code, blockquote, admonition và Practice card;
- tránh để tiêu đề đứng cuối trang khi phần nội dung nằm ở trang sau;
- trong Practice, bỏ các nút tương tác và bảng tiến độ khi in nhưng không xóa nội dung câu hỏi;
- liên kết chuyển thành dạng gạch chân, không phụ thuộc màu.

## Không thay đổi ở vòng này

- không đổi font, màu hay kích thước chữ toàn website;
- không đổi cấu trúc Practice Engine;
- không tạo nút “In” riêng vì trình duyệt đã có Print / Save as PDF;
- không ép hình chuyển sang đen trắng bằng CSS vì nhiều infographic dùng màu để phân nhóm; người dùng vẫn có thể chọn in grayscale từ hộp thoại máy in.

## Spot-check thủ công sau khi build

Chỉ cần kiểm tra ba tình huống:

1. trên điện thoại hoặc cửa sổ trình duyệt hẹp, mở một bài có bảng và hình lớn (gợi ý Chuyên đề 21);
2. mở một trang Practice trên điện thoại, kiểm tra nút bấm và không có tràn ngang toàn trang;
3. dùng Print Preview ở một bài học có hình dài và một trang Practice, kiểm tra navigation không xuất hiện và hình/bảng không bị cắt bất hợp lý.

Nếu ba spot-check này ổn, có thể coi vòng mobile/print cơ bản hoàn tất; các chỉnh sửa tiếp theo chỉ nên dựa trên lỗi thật phát hiện khi sử dụng.
