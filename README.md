# Self-Learning Math

**Nền tảng tự học Toán theo lộ trình.** Hiện tập trung chương trình THCS lớp 6–9 (Kết nối tri thức): kiến thức, hình minh họa, bài luyện tập có giải thích, AI Tutor và theo dõi tiến độ. Roadmap 25 chuyên đề là bản đồ định hướng, không phải toàn bộ sản phẩm.

## Phạm vi hiện tại

- Học theo lớp hoặc theo mạch kiến thức; Core, ôn thi vào 10 và mở rộng được phân tầng.
- Học – luyện – tự kiểm tra, gợi ý/giải thích và phát hiện kỹ năng cần ôn.
- Thí điểm đánh giá mỗi câu một kỹ năng chính; chưa chuyển toàn bộ ngân hàng sang cơ chế mới.
- Thiết kế dạng module, dự kiến có thể bổ sung Toán THPT, SAT/ACT Math và tư duy logic khi nền tảng THCS được củng cố.

## Đường dẫn được giữ ổn định

Website: https://tma2015.github.io/roadmap-toan-thcs/

Repository: https://github.com/TMA2015/roadmap-toan-thcs

**Self-Learning Math là tên sản phẩm chính thức của G Learning; AI Tutor là một tính năng hỗ trợ.** Tên repo, GitHub Pages path, URL của các chuyên đề, ID bài tập, cấu hình Firebase/App Check, Gemini và dữ liệu học sinh đều được giữ nguyên. Không đổi slug kỹ thuật khi chưa thiết kế và kiểm thử chuyển hướng. Các tài liệu tên cũ được giữ làm dấu vết nguồn.

Website dùng MkDocs Material, triển khai bằng GitHub Pages.

## Nguồn quy tắc học thuật

[Master Plan v1.1.1](governance/TOAN_THCS_MASTER_PLAN.md) là nguồn chuẩn cho nguyên tắc dài hạn; [hướng dẫn học sinh và phụ huynh](docs/huong-dan/phuong-phap-tu-hoc-va-danh-gia.md) là bản diễn giải công khai. Hồ sơ Batch và QA theo phiên bản được lưu riêng, không đưa tiến độ ngắn hạn vào Master Plan.

## Quy trình chính thức THPT — biên soạn → NotebookLM → bàn giao → phát hành

- **Mọi cuộc trò chuyện/nhánh mới** phụ trách Self-Learning Math THPT bắt đầu bằng việc kiểm tra GitHub `main`, [quy trình hai nhánh, một checklist](prototypes/thpt/release-queue/README.md), [danh mục gói](prototypes/thpt/release-queue/REGISTER.md) và [handoff hiện hành](docs/collaboration/current-handoff.md). Không chỉ dựa vào ký ức chat hoặc checkpoint cũ.
- **Nhánh học liệu:** đối chiếu SGK/SBT S1, NotebookLM review đúng snapshot, hoàn tất A1–A7, chuyển manifest của gói đủ điều kiện từ `inventory/` sang `ready/`. Không sao chép câu hỏi; PASS thành phần không bằng `CONTENT_READY`.
- **Nhánh phát hành:** nhận gói `ready/`, kiểm tra R1–R5 gồm CI đúng commit, giao diện sạch, an toàn đánh giá và **phê duyệt rõ của chủ dự án**; chỉ merge/deploy khi toàn bộ cổng đạt; ghi P1/P2 hậu phát hành. Không tự bật Mastery, không lộ câu Readiness.
- **Hai hành trình:** SGK chương và Chuyên đề độc lập theo [kiến trúc THPT v2.0](prototypes/thpt/release-queue/README.md); chung canonical item_id, Written/Anchor và hình nhưng không suy PASS/Readiness giữa hai nhánh. File 06 về bàn giao NotebookLM, file 07 về delta và file 08 về kiến trúc vẫn ưu tiên theo phạm vi của chúng.

## Bàn giao khi chuyển cuộc trò chuyện

[Project Handoff hiện hành](docs/collaboration/current-handoff.md) ghi công việc vừa hoàn thành, quyết định đã duyệt và điểm nối. Luôn so sánh với GitHub `main` trước khi tiếp tục.
