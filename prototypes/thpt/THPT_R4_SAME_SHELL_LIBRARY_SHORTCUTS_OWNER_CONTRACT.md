> **CẬP NHẬT QUY TẮC 27/10/2026 — SUPERSEDED IN PART:** Quy tắc Core trong Chuyên đề và bốn mục cố định đã được thay thế bởi `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md`. Chuyên đề nay chỉ có **Kiến thức / Luyện tập / Tự kiểm tra**; SGK Core dùng chung item ID với Practice cơ bản khi phù hợp. Phần shell, shortcut 5+N và thư viện Written trong tài liệu lịch sử này vẫn có hiệu lực.

# THPT R4 — Cấu trúc website thống nhất, thư viện bài tập và điều hướng nhanh

**Ngày:** 26/10/2026 · **Trạng thái:** yêu cầu sản phẩm được chủ dự án xác nhận; triển khai trong **Draft PR #612**, chưa phát hành.  
**Kế thừa:** THPT R3 về shell MkDocs Material/THCS, THPT R2 về hai trục kiến thức đầy đủ và cùng Core; những ý khác trái R4 đều bị thay thế.

## Quy tắc tổng thể

- **Chỉ một Self-Learning Math**: một repo, một theme navy đang sử dụng, một thanh nav toàn cục và header, search, dark mode, nút lối tắt; không tạo giao diện THPT độc lập.
- Trang bìa 3 thẻ: **THCS** (trang đã duyệt), **THPT** (trang mới), **SAT/ACT** (chưa phát hành; khi phát triển sẽ nối vào cùng trang bìa, không xây một trang bìa khác). Trang chủ THPT **chỉ chứa các lựa chọn** học theo SGK, chuyên đề, thư viện, tiến độ, hướng dẫn; không có cây kiến thức, roadmap hay hero giải thích dài.
- Giữ nguyên toàn bộ THCS, kể cả những URL đã phát hành và dữ liệu học sinh. Việc biến root thành trang bìa phải là đợt QA triển khai/redirect được chủ dự án chấp thuận riêng.
- **Thanh nav trên cùng THCS giữ nguyên cấu trúc**: Trang chủ, Học theo lớp, Học theo chuyên đề, Thư viện bài tập, Tiến độ học tập, Hướng dẫn; cùng hệ trên THPT với label cụ thể `Học theo SGK KNTT` khi phù hợp.
- **LỐI TẮT CHỈ RIÊNG TOÁN THPT:** tạo menu nhanh theo chính kiểu của THCS nhưng các mục độc lập, gồm **đúng năm nhóm** theo thứ tự: **(1) Trang chủ THPT, (2) Học theo SGK, (3) Chuyên đề, (4) Thư viện bài tập, (5) Tiến độ học tập**; cộng **N = số chuyên đề THPT thực sự có trong danh mục đã phát hành**. Label `5 + N lối tắt` trên trang THPT. **Không** thêm Bản đồ học tập, AI, Hướng dẫn hoặc trang bìa vào *năm nhóm lối tắt*; Hướng dẫn vẫn có thể hiện diện trên thanh nav thường theo thiết kế. **THCS tuyệt đối giữ nguyên lối tắt `7 + 25` và toàn bộ mã, trang, dữ liệu đã nghiệm thu.** `docs/assets/javascripts/sticky-nav-v1.js` chỉ là nguồn **tham khảo cách thể hiện**; **không sửa tệp này** trong công việc THPT. Nếu menu THPT được gắn trong header chung, phải giới hạn theo đường dẫn `/thpt/` hoặc `/thpt-preview/`, chỉ thay đổi ở phạm vi THPT, không thay đổi THCS. Khi mới demo, N phải thể hiện đúng số topic mẫu cùng chú thích `mẫu, chưa phát hành`; không tự nhận danh mục THPT đủ 25.
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
2. Header/nav/shortcut phải tách **theo phạm vi đường dẫn**: THCS **giữ nguyên `7 + 25` và hành vi hiện tại**; THPT mới có **`5 + N`**, với năm mục cố định **Trang chủ / Học theo SGK / Chuyên đề / Thư viện bài tập / Tiến độ học tập**, và N từ danh mục chuyên đề THPT đã phát hành. Trong preview, N là số chuyên đề mẫu và phải ghi rõ `Mẫu`; không để menu THCS xuất hiện thay cho menu THPT hoặc ghi nhầm nhãn `5 + 25` trên THCS.
3. Xác minh top nav, sidebar, tìm kiếm, Right TOC chỉ tắt cho trang kiến thức chuyên đề, 4 điểm đến, shared core identity; không tạo link chết. Ngay cả trong demo, chỉ kích hoạt những liên kết đã có.
4. NotebookLM THPT (SGK+SBT) đánh giá học thuật trước khi xuất bản Core/Practice/Readiness/Written thật; demo không tính tiến độ. QA tương tác desktop/iPhone/iPad giả lập, bản thật do chủ dự án nghiệm thu.
5. **Chưa đổi trang chủ thực `docs/index.md`, chưa chỉnh bank THCS, chưa merge Draft PR #612** trước khi bản mẫu shell R4 và các cổng review đạt.
