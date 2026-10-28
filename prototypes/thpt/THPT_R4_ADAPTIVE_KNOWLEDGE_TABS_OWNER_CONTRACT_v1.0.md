# Toán THPT R4 — Adaptive Knowledge Tabs · Owner UI Contract v1.0

**Date:** 2026-10-27  
**Scope:** Toán THPT 10–12, kiến trúc R4; đây là **UI/authoring contract**, không phải học liệu SGK hoặc NotebookLM review packet.  
**Owner decision:** Đã đồng ý phương án Adaptive Knowledge Tabs và thống nhất typography parity cho tab và văn bản thường trong từng mảng.

## 1. Điều bất biến

- Chuyên đề luôn giữ **4 trang**: **Thẻ Core / Kiến thức / Luyện tập / Tự kiểm tra**.
- Trang **Kiến thức** có bốn bộ phận ổn định: **Bản đồ kiến thức / Kiến thức / Kiến thức liên quan / Dạng bài / Lỗi sai thường gặp**. Không thay bằng hình thức khác trong các bài mới nếu chưa có quyết định.
- Nếu chỉ có **một mảng kiến thức nhỏ**, có thể hiển thị tab ngữ nghĩa `Khái niệm / Đồ thị và tính chất / Ví dụ` hoặc tên tương ứng.
- Nếu có **nhiều mảng**, các tab mang tên mảng thực (`3.1 ...`, `3.2 ...`, `3.3 ...`). **Bên trong tab mảng dùng đề mục** `Khái niệm`, `Tính chất`, `Công thức`, `Đồ thị`, `Định lý`, `Chứng minh`, `Ví dụ` khi phù hợp. Không mặc định sinh tab lồng tab theo ba cấp.
- Nếu có rất nhiều mảng, cho phép nhóm theo mạch SGK, accordion hoặc mục lục phụ giúp chọn mảng; không tạo một hàng tab dài gây tràn ngang trên mobile.
- Cách chia không buộc các mảng phải có cùng số mục; tính học thuật quyết định các đề mục, không phải UI.

## 2. Typography parity — yêu cầu bắt buộc

**Tab ngữ nghĩa và tab mảng cùng một visual token set**, không coi tab mảng là tab cấp lớn có chữ to/đậm/màu khác và tab Khái niệm/Ví dụ là tab cấp thấp có chữ nhỏ:

- `font-family`, `font-size`, `font-weight`, `line-height`, `text-transform` và màu khi ở trạng thái tương đương phải giống nhau.
- Trạng thái selected/unselected có thể dùng chung một hệ khác biệt viền/màu, **không thay cỡ chữ, không làm font weight khác** chỉ do cấp.
- **Normal text** trong các panel Kiến thức: một hệ font-family/size/weight/color/line-height, bất kể panel là tab trực tiếp (ít mảng) hay panel mảng (nhiều mảng). Không dùng lớp small/muted cho đoạn văn nội dung thông thường.
- Chỉ **tiêu đề nội dung** (heading) được phân cấp kích cỡ/độ đậm theo semantics (h2/h3); điều này không làm khác typography của tab hoặc normal text.
- Áp dụng giống nhau ở light/dark, desktop/tablet/phone; trên mobile các tab có thể xuống dòng/chuyển thành một cột **nhưng không đổi font**.
- Công thức hoặc kí hiệu toán học có font MathJax/SVG riêng khi cần, nhưng không thu nhỏ normal text kế cận.

## 3. Nguồn triển khai

- CSS scope `docs/assets/stylesheets/thpt-r4-preview.css` — chuẩn chung cho tab ngữ nghĩa và nút tab mảng.
- JS scope `docs/assets/javascripts/thpt-r4-preview.js` — chỉ chuyển panel, điều hướng bằng bàn phím, không lưu lịch sử hoặc điểm.
- SGK-chuyên đề đã duyệt học thuật: `docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md` — giữ ba tab hiện tại của riêng pilot.
- **QA-only demo**: `docs/thpt-preview/qa/adaptive-knowledge-tabs.md` — mảng A/B/C **là placeholder UI**, không phải bài SGK, outcome hay kiến thức đã PASS.
- Offline demo: `Temp_THPT_R4_Golden_UI_Adaptive_Knowledge_Preview_v2.html` dành cho owner tải về kiểm tra. File tạm này **không** phải Batch Source gửi NotebookLM và không thuộc Permanent Sources.

## 4. QA gate

1. So sánh `getComputedStyle` của tab ngữ nghĩa trên pilot và tab mảng trên demo: **font-family, font-size, font-weight và color phải giống nhau** khi trạng thái tương đương.
2. So sánh normal paragraph trong tab B16 và các panel mảng ở mock: **font-family, font-size, color** bằng nhau; line-height cũng cần ngang bằng.
3. Thao tác tab chuột/keyboard, ẩn panel không hoạt động, không tràn ngang ở 390/820/1440px và đủ tương phản light/dark.
4. Core/Practice/Readiness/Written, tập ID và đáp án B16 không được bị thay đổi vì quy tắc trình bày này.
5. `DELTA_CLASS=DELTA_A_UI`; `NOTEBOOKLM_REREVIEW=NOT_REQUIRED_WITH_REASON` nếu không sửa nội dung toán hoặc điều kiện đánh giá.

## 5. Trạng thái quyết định

**Owner đã xác nhận nguyên tắc**, nhưng Golden UI R4 hoàn chỉnh vẫn chờ owner mở và đánh giá file HTML Adaptive v2. Những trang mảng A/B/C tuyệt đối không được tính là chương/chuyên đề hoàn chỉnh hay phát hành nội dung thực.

**Không tự merge/deploy** trước khi có owner acceptance và release gate riêng.
