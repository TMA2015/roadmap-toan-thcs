# THPT R4 — Cấu trúc website thống nhất, thư viện bài tập và điều hướng nhanh

**Ngày:** 26/10/2026 · **Trạng thái:** yêu cầu sản phẩm được chủ dự án xác nhận; triển khai trong **Draft PR #612**, chưa phát hành.  
**Kế thừa:** THPT R3 về shell MkDocs Material/THCS, THPT R2 về hai trục kiến thức đầy đủ và cùng Core; những ý khác trái R4 đều bị thay thế.

## Quy tắc tổng thể

- **Chỉ một Self-Learning Math**: một repo, một theme navy đang sử dụng, một thanh nav toàn cục và header, search, dark mode, nút lối tắt; không tạo giao diện THPT độc lập.
- Trang bìa 3 thẻ: **THCS** (trang đã duyệt), **THPT** (trang mới), **SAT/ACT** (chưa phát hành; khi phát triển sẽ nối vào cùng trang bìa, không xây một trang bìa khác). Trang chủ THPT **chỉ chứa các lựa chọn** học theo SGK, chuyên đề, thư viện, tiến độ, hướng dẫn; không có cây kiến thức, roadmap hay hero giải thích dài.
- Giữ nguyên toàn bộ THCS, kể cả những URL đã phát hành và dữ liệu học sinh. Việc biến root thành trang bìa phải là đợt QA triển khai/redirect được chủ dự án chấp thuận riêng.
- **Thanh nav trên cùng THCS giữ nguyên cấu trúc**: Trang chủ, Học theo lớp, Học theo chuyên đề, Thư viện bài tập, Tiến độ học tập, Hướng dẫn; cùng hệ trên THPT với label cụ thể `Học theo SGK KNTT` khi phù hợp.
- **Nút lối tắt đầu trang** tồn tại. Đối chiếu `docs/assets/javascripts/sticky-nav-v1.js`: 7 nhóm cũ là Trang chủ / Bản đồ học tập / Tiến độ / 25 chuyên đề / Học theo KNTT / Thư viện bài tập / AI. Bỏ **lối tắt** Bản đồ học tập và AI, còn **5 + 25** (THCS). Không xóa route cũ, nội dung AI, kỹ năng hay bằng chứng. Với THPT, hiện đúng **5 + N chuyên đề đã được kiểm duyệt**; `N` **không** mặc định 25 hoặc suy từ mockup (trong mẫu chỉ có 1 chuyên đề chưa phê duyệt).
- **Phải phân biệt** `Bản đồ học tập` (nút nhanh bị bỏ) với **`Bản đồ kỹ năng` trong Thư viện bài tập** (vẫn giữ!).

## Thư viện bài tập THPT = mẫu THCS

Tái sử dụng cách vận hành và cấu trúc `docs/luyen-tap/index.md`, `tu-luan.md`, `bai-mau-tieu-bieu.md`, `docs/assets/javascripts/written-exercise-library-v1.js`, `model-examples-library-v1.js` và CSS đã được nghiệm thu; **KHÔNG tự tạo một UI “Written/Anchor” khác**.

| Điểm đến | Giữ cấu trúc THCS | THPT khác ở đâu |
|---|---|---|
| **Giới thiệu Thư viện** | Hai ô **Làm bài tự luận / Học bài mẫu tiêu biểu**, giải thích ngắn, đường dẫn trực tiếp | Lọc nguồn chỉ lớp 10–12 |
| **Bài tập tự luận** | Lọc lớp, chuyên đề, dạng bài, mức độ, từ khóa; làm trên giấy, gợi ý tuỳ chọn, lời giải và rubric tự chấm | Câu hỏi/review/nguồn SGK/SBT THPT; namespace `HPT-WRI-...` tách dữ liệu THCS |
| **Bài mẫu tiêu biểu** | Tìm theo lớp/chuyên đề; phân tích đề, cách chọn phương pháp, lời giải mẫu theo bước | Cùng kho canonical THPT Written được gắn kiểu `mỏ neo/tiêu biểu`; không hai thư viện trùng nội dung |
| **Bản đồ kỹ năng** | Giữ đường dẫn/thành phần thư viện giống THCS, chỉ mở khi THPT có bằng chứng được kiểm duyệt | Không trộn mastery hoặc điểm THCS |

Core học theo bài/được gom ở chuyên đề/có thư viện Core SGK: **một card ID và một kho**. Practice chuyên đề: tương tác có gợi ý. Readiness: không gợi ý, không chấm sớm; chỉ giải thích sau Final Submit. Written: đề trên giấy, gợi ý tự chọn, rubric; mỏ neo không tự động chấm.

## Điều hướng và trình bày

- SGK: trang tổng quan tìm kiếm lớp/chương, accordion Lớp 10/11/12, menu trái lớp→chương→bài, **Thư viện Core cuối menu**; mỗi bài có kiến thức ngắn nhưng đủ S1, theo đề mục thân thiện SGK; Core bên dưới **không có tab lý thuyết**.
- Chuyên đề: tổng quan tìm kiếm nhóm→chuyên đề, không tạo CĐ01 giới thiệu; menu trái tới từng chuyên đề; mỗi chuyên đề 4 tab cấp cao **Thẻ Core / Kiến thức / Luyện tập / Tự kiểm tra**.
- Trang Kiến thức chuyên đề: chỉ **Bản đồ kiến thức** khi hữu ích; **Kiến thức** có tab theo phần kiến thức; **Kiến thức liên quan**; **Dạng bài** có các tab (bao gồm `Thi tốt nghiệp THPT` như bộ lọc cùng nhóm); **Lỗi sai** nếu thực sự cần. Bỏ “Luyện tập tiếp theo”, “Tự kiểm tra mức độ sẵn sàng”, “Liên kết Roadmap”, “Điều kiện hoàn thành” bị trùng. Mục tiêu đánh giá chi tiết đặt trong **Tự kiểm tra**.
- **Bỏ cột Mục lục bên phải CHỈ ở trang Kiến thức chuyên đề THPT**, vì có thanh di chuyển nhanh trong bài và menu trái. **Không xóa TOC phải toàn site**, đặc biệt các trang SGK/thư viện vẫn giữ khi hữu ích.
- Sử dụng chính MkDocs Material/Material nav, CSS/JS hiện có; các bản HTML độc lập R1/R2 chỉ được xem là mock hành vi, KHÔNG là final shell.
- Infographic không có quota. Giữ đồ thị/hình khi giá trị sư phạm vượt xa HTML + MathJax.

## R4 thử nghiệm và cổng release

1. Lập **preview native MkDocs** cho chương trình chọn bìa, Home THPT, tổng quan SGK (Lớp→Chương), tổng quan chuyên đề, một trang Chương VI/Bài 16, một chuyên đề mẫu có 4 điểm đến và thư viện tự luận/mỏ neo giống THCS, trong nhánh PR Draft. **Preview không phải triển khai website học sinh.**
2. Header/nav/shortcut có dữ liệu **đúng theo cấp học**; THCS 5+25, THPT 5+N thực (trước phê duyệt chỉ demo N mẫu, đánh nhãn “Mẫu”). Không để lối tắt THCS trỏ nhầm sang THPT.
3. Xác minh top nav, sidebar, tìm kiếm, Right TOC chỉ tắt cho trang kiến thức chuyên đề, 4 điểm đến, shared core identity; không tạo link chết. Ngay cả trong demo, chỉ kích hoạt những liên kết đã có.
4. NotebookLM THPT (SGK+SBT) đánh giá học thuật trước khi xuất bản Core/Practice/Readiness/Written thật; demo không tính tiến độ. QA tương tác desktop/iPhone/iPad giả lập, bản thật do chủ dự án nghiệm thu.
5. **Chưa đổi trang chủ thực `docs/index.md`, chưa chỉnh bank THCS, chưa merge Draft PR #612** trước khi bản mẫu shell R4 và các cổng review đạt.
