# Quyết định tên hiển thị Self-Learning Math — 27/09/2026

**Tên sản phẩm:** Self-Learning Math. **Phụ đề:** Nền tảng tự học Toán theo lộ trình. **Phạm vi hiện tại:** Toán THCS 6–9; Roadmap 25 chuyên đề là một module điều hướng. Mở rộng Toán THPT, SAT/ACT Math và suy luận logic vẫn là mục tiêu dài hạn, chưa được công bố là nội dung đã phát hành.

## Tương thích bắt buộc

- GitHub repository vẫn là `TMA2015/roadmap-toan-thcs`, site vẫn là `https://tma2015.github.io/roadmap-toan-thcs/`; không đổi base path.
- Không đổi slug chuyên đề, question IDs, manifest, Knowledge Graph, GitHub Pages deployment, đường dẫn đến hình/bank, hay các khóa tiến độ localStorage.
- Không đổi Firebase project ID, public web config, reCAPTCHA Enterprise site key, whitelist production hostname, Gemini adapter hoặc lời nhắc chương trình THCS. Đổi tên hiển thị không ảnh hưởng API; **đổi hostname/domain trong tương lai thì phải kiểm tra App Check, domain được phép và các kiểm tra origin**.
- Giữ nguyên tài liệu/tên thư mục legacy có chữ roadmap để tương thích và truy vết; không đổi hàng loạt thuật ngữ Roadmap trong module Roadmap vì đó là tên chức năng thực.
- Chưa tạo URL mới. Khi cần domain riêng trong tương lai, phải chuẩn bị domain/DNS, canonical URL, chuyển hướng từng path, kiểm tra external Gemini links và có thông báo trước.

## Định nghĩa hiển thị

`mkdocs.yml` ghi tên mới trên header/tab và meta description; trang chủ giới thiệu tên sản phẩm, vẫn giữ CTA Roadmap và học theo lớp. README mô tả phạm vi hiện tại, không hứa học liệu cấp cao đã có.

## Kiểm thử trước và sau phát hành

- Build nghiêm ngặt, kiểm tra đường dẫn trang chủ và chuyên đề được giữ đúng.
- Trên trang học/luyện tập thật, xác minh Firebase App Check + Gemini hoạt động khi người dùng chủ động bấm yêu cầu, không lộ API key riêng.
- Kiểm tra tên header/tab và lối vào Roadmap/Practice/AI Tutor trên desktop/mobile.
- Kiểm tra liên kết đã chia sẻ trước đây mở được trực tiếp, không cần chuyển hướng.

Đổi branding trước để tránh rủi ro. Không rename repo chỉ vì mục tiêu nhất quán tên gọi.
