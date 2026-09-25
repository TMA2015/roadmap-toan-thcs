# Kết nối Gemini cho Roadmap Toán THCS — triển khai an toàn

**Trạng thái:** frontend/backend đã chuẩn bị nhưng Gemini chưa hoạt động khi chủ dự án chưa cấp dịch vụ, bí mật và bật cấu hình. Không gửi bất cứ API key nào vào tin nhắn, JSON, HTML, JavaScript hoặc commit.

Website GitHub Pages là tĩnh nên không có máy chủ để cất khóa bí mật. Lớp Cloudflare Worker giữ Gemini key và Turnstile secret ở phía server; chỉ nhận câu hỏi, phương án và chế độ trợ giúp. Không gửi tên, email, profile, lịch sử bài làm hoặc toàn bộ LocalStorage.

## Các bước kích hoạt một lần

1. Tạo một Gemini API key tại https://aistudio.google.com/apikey; xem quyền truy cập model và hạn mức của chính tài khoản. Mẫu cấu hình mặc định là **gemini-3.8-flash**, có thể đổi `GEMINI_MODEL` trong Wrangler nếu tài khoản hỗ trợ model khác.
2. Tạo Cloudflare Workers và Turnstile widget cho hostname **tma2015.github.io**. Turnstile cho một khóa công khai *site key* và một khóa bí mật *secret*.
3. Mở repository GitHub → Settings → Secrets and variables → Actions. Thêm `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_API_TOKEN`, `GEMINI_API_KEY`, `TURNSTILE_SECRET` dưới dạng **repository secrets**. Chỉ cấp quyền sửa Worker cần thiết cho Cloudflare token.
4. Chạy thủ công GitHub Action **Deploy optional Gemini Tutor Worker**. Worker đọc file `workers/gemini-tutor/wrangler.jsonc` và nhận 2 secret mà không lưu khóa trong mã nguồn.
5. Xem URL Worker được cấp trong Actions. Sau khi kiểm tra từ PC/điện thoại, cập nhật file công khai `docs/assets/data/tutor-provider-config.json`: `enabled: true`, `endpoint: https://...workers.dev/v1/tutor`, `turnstileSiteKey` = khóa **công khai** của widget.
6. Chỉ merge cấu hình bật khi thử yêu cầu thật thành công. Nếu hết hạn mức/khóa chưa sẵn sàng, website vẫn dùng lời giải offline.

Không bật config nếu chưa có backend, Turnstile và giới hạn số request. Origin/CORS chỉ hỗ trợ kiểm soát trình duyệt, không phải một cơ chế xác thực. Worker yêu cầu Turnstile được **xác minh phía server cho từng lượt** và giới hạn yêu cầu theo IP và toàn trang. Thiết lập quota/budget tại Google là lớp bảo vệ chi phí bổ sung.

## Dữ liệu và sư phạm

- Giữ `help_mode` = HINT / STEP_BY_STEP / FULL_SOLUTION / TEACH_FROM_START.
- Chỉ gửi đáp án tham chiếu cho Gemini khi học sinh yêu cầu FULL_SOLUTION trong bài luyện thường hoặc sau khi nộp bài kiểm tra.
- Khi xem lời giải trước khi trả lời, bản ghi là **có trợ giúp**, không tính thành thạo độc lập.
- Đáp án do Gemini tạo có thể sai. Hiển thị nhãn AI chưa phản biện, khuyến khích kiểm chứng với kiến thức/đáp án biên soạn. Không tự thay thế lời giải đã kiểm duyệt bằng output AI.
- Đối với trẻ em, phụ huynh giám sát và quản lý hạn mức/dữ liệu tại tài khoản dịch vụ.

Nguồn kỹ thuật: [Gemini generateContent](https://ai.google.dev/api/generate-content); [Cloudflare secrets](https://developers.cloudflare.com/workers/configuration/secrets/); [Turnstile Siteverify](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/); [rate limiting](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).
