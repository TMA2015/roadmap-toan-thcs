# Toán THPT R4 — Adaptive Knowledge Tabs v2.0 · Two-Level Knowledge Navigation

**Ngày chốt nguyên tắc:** 27/10/2026  
**Trạng thái:** **GOLDEN_UI_DESIGN_LOCKED — OWNER PASS**; file HTML v3 đã được chủ dự án kiểm tra và xác nhận PASS ngày 27/10/2026. Kiểm thử bản MkDocs trên thiết bị thực tế và phát hành vẫn là cổng khác.  
**Phạm vi:** Trình bày phần Kiến thức trong chuyên đề Toán THPT lớp 10–12.  
**Supersedes:** `THPT_R4_ADAPTIVE_KNOWLEDGE_TABS_OWNER_CONTRACT_v1.0.md` ở phần đề xuất không có tab lồng nhau.  
**Loại thay đổi:** DELTA_A_UI, không bổ sung học liệu hoặc sửa nội dung toán Bài 16 đã Academic PASS.

## 1. Hai cấu hình chính thức

### Một mảng kiến thức (ít nội dung)

Trang **Kiến thức** chứa một hàng **tab nội dung**: ví dụ `Khái niệm / Đồ thị và tính chất / Ví dụ`, hoặc các tên khác tùy kiến thức. Không tạo hàng tab mảng khi chuyên đề chỉ có một mảng.

### Nhiều mảng kiến thức (trục dọc lớn)

Trang **Kiến thức** chứa tối đa **hai cấp tab**:

1. **Cấp 1:** `3.1 · Kiến thức A / 3.2 · Kiến thức B / 3.3 · Kiến thức C` (tên thật theo mảng).
2. **Cấp 2 bên trong mỗi mảng:** tab nội dung `Khái niệm / Tính chất / Ví dụ`, hoặc `Định lý / Chứng minh / Phương pháp / Ứng dụng` tùy mảng. Chọn mảng nào thì hiện tab nội dung của mảng đó.

**Không cố định tên hoặc số lượng tab.** Các mảng có thể có bộ tab nhỏ khác nhau. Có thể chỉ dùng đề mục dọc khi mảng rất ngắn; với lượng kiến thức tương đối nhiều, ưu tiên các tab cấp 2 để giảm chiều dài trang. Không tạo tầng thứ ba; mảng quá lớn cần chia lại hoặc dùng danh sách/điều hướng khác.

## 2. Hợp đồng kiểu chữ đồng nhất

Tab nội dung trực tiếp của chuyên đề **một mảng** và tab nội dung **cấp 2** của từng mảng trong chuyên đề lớn **là cùng một thành phần giao diện**:

- Font-family, font-size, font-weight, line-height, text-transform và màu chữ theo từng trạng thái phải **giống nhau**.
- Các thay đổi theo trạng thái active/hover/focus cùng token/biên/ màu; tab cấp 2 **không bị thu nhỏ** so với tab nội dung một mảng.
- Normal text trong tab kiến thức dùng **cùng font-family, font-size, line-height, weight và màu chữ**, không phân biệt cấu trúc một hay nhiều mảng.
- Tab cấp 1 phân biệt với cấp 2 bằng **khung, khoảng cách và vị trí**, không biến tab nhỏ thành chữ quá nhỏ. Heading nội dung có quyền phân cấp riêng theo nghĩa.
- Light/dark, desktop/iPhone/iPad đều áp dụng cùng token. Màn hình nhỏ cho tab xuống dòng; không cắt nhãn, không tràn ngang.

## 3. Hành vi

- Chuyển tab cấp 1 **không xóa trạng thái tab cấp 2** đã chọn ở mảng trước đó trong cùng phiên xem trang.
- Khi mở một mảng lần đầu, hiện tab nội dung đầu tiên của riêng mảng; chưa chọn tab khác thì không hiển thị nội dung của mảng đó.
- Tab có role phù hợp, hỗ trợ click, phím mũi tên, Home/End, nhãn và panel liên kết rõ ràng; panel chưa chọn ẩn.
- Các phần cố định của chuyên đề không thay đổi: **Thẻ Core / Kiến thức / Luyện tập / Tự kiểm tra**; trong Kiến thức vẫn có **Bản đồ kiến thức / Kiến thức / Kiến thức liên quan / Dạng bài / Lỗi sai thường gặp**.

## 4. Mã nguồn và QA

- CSS: `docs/assets/stylesheets/thpt-r4-preview.css`, phần `two-level knowledge navigation`.
- JS: `docs/assets/javascripts/thpt-r4-preview.js`, xử lý **mỗi tab group độc lập qua direct children**, tránh cấp 1 vô tình điều khiển cấp 2.
- Mẫu MkDocs riêng cho kiểm thử: `docs/thpt-preview/qa/adaptive-knowledge-tabs.md` với mảng A/B/C **placeholder**, không phải nội dung được duyệt học thuật.
- Trang Bài 16 thực: `docs/thpt-preview/chuyen-de/ham-so/kien-thuc.md` giữ tab ngữ nghĩa của nhánh chỉ có một mảng; link sang mẫu hai cấp.
- HTML offline để owner mở trực tiếp: `Temp_THPT_R4_Golden_UI_Two_Level_Knowledge_Preview_v3.html`.

### QA acceptance

1. Cả ba mảng có tab cấp 2 và tên có thể khác nhau; một cấp trong B16 không bị thay đổi.
2. Kiểm computed style của tab ngữ nghĩa B16 với tab cấp 2; normal text thống nhất.
3. Chuyển A→B→A: tab nhỏ của A vẫn giữ lựa chọn; kiểm cả bàn phím và trạng thái aria.
4. Chromium giả lập desktop/iPhone/iPad: tương tác, không tràn ngang.
5. Không đổi 5 item IDs, đáp án, rubric hoặc academic scope của Bài 16.

## 5. Cổng phát hành

**ACADEMIC_B16:** PASS theo biên bản NotebookLM R4 Postfix; vẫn chỉ giới hạn Bài 16 và 5 item.  
**TWO_LEVEL_GOLDEN_UI:** **OWNER HTML v3 PASS; DESIGN LOCKED** (ghi nhận trong `THPT_R4_GOLDEN_UI_OWNER_DESIGN_LOCK_20261027.md`).  
**REVIEW_NOTEBOOKLM:** NOT_REQUIRED (DELTA_A_UI, không thay đổi toán học).  
**PR_RELEASE:** Chưa được cho phép merge/deploy; phải qua owner acceptance riêng.

Project Sources 06/07 tiếp tục áp dụng nguyên vẹn khi biên soạn bài mới hoặc cần NotebookLM thẩm định.
