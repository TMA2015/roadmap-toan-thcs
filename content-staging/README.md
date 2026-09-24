# Content Staging – Kho nội dung chờ kiểm định

Thư mục này là **kho trung gian**, không phải nội dung xuất bản trực tiếp lên website.

Mục tiêu là cho phép nội dung được biên soạn bởi Gemini, ChatGPT, giáo viên hoặc nguồn khác đi qua cùng một quy trình trước khi được đưa vào `docs/` hoặc Practice Bank.

## Trạng thái chuẩn

Mỗi item dùng một trong các trạng thái:

- `draft` – bản nháp mới nhận.
- `academic-review` – đang kiểm tra toán học/sư phạm.
- `technical-review` – đã đúng học thuật, đang chuẩn hóa Markdown/LaTeX/JSON/diagram.
- `visual-review` – cần QA hình, bố cục hoặc khả năng đọc trên màn hình nhỏ.
- `approved` – đủ điều kiện đưa vào website.
- `published` – đã tích hợp vào `docs/` hoặc Practice Bank.
- `rejected` – không dùng; phải ghi lý do.

## Nguyên tắc nguồn

Không có nguồn nào được tự động coi là đúng chỉ vì được tạo bởi một AI mạnh.

Mỗi item phải ghi:
- `author_source`: Gemini / ChatGPT / teacher / exam / textbook / other.
- `curriculum`: KNTT Core / Entrance10 / Specialized Challenge.
- `topic` và `skills`.
- nguồn tham chiếu nếu nội dung dựa trên đề thi, sách hoặc tài liệu bên ngoài.
- người/bước đã kiểm tra học thuật.

## Quy trình

`Draft → Academic QA → Technical QA → Visual QA (nếu có) → Approved → Published`

### Academic QA
Kiểm tra:
- đề bài đủ điều kiện và không mâu thuẫn;
- lời giải đúng;
- không nhảy bước quan trọng;
- mức độ phù hợp học sinh;
- phân biệt rõ KNTT Core, Vào 10 và Chuyên/Challenge;
- bài hình học phải có kiểm tra độc lập cấu hình hình.

### Technical QA
Kiểm tra:
- LaTeX hợp lệ;
- Markdown/JSON đúng schema;
- ID/tag không trùng;
- đáp án và explanation nhất quán;
- link/hình local hợp lệ.

### Visual QA
Bắt buộc với diagram:
- quan hệ hình học cốt lõi phải đúng;
- nhãn không chồng nhau;
- nhìn rõ trên iPad/điện thoại;
- phong cách thống nhất;
- không dùng hình Internet nếu có thể dựng lại bằng SVG chuẩn.

## Cách dùng với Gemini

Gemini có thể đóng vai trò **biên soạn hoặc phản biện học thuật**. Nội dung từ Gemini nên được đưa vào mẫu ở `content-staging/templates/`, sau đó ChatGPT kiểm tra chéo và tích hợp.

Việc một lời giải được Gemini hoặc ChatGPT tạo đúng một lần không thay thế QA. Với bài vận dụng cao/hình học, nên có ít nhất một kiểm tra độc lập thứ hai.

## Không để kho staging trở thành kho rác

- Không lưu hàng nghìn draft chưa phân loại.
- Mỗi batch nên gắn với một chuyên đề/skill cụ thể.
- Sau khi published, cập nhật trạng thái và đường dẫn đích.
- Nếu rejected, ghi ngắn gọn lý do để tránh lặp lại lỗi biên soạn.
