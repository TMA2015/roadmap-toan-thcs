# Self-Learning Math — kế hoạch đổi tên repository (28/10/2026)

> QUYẾT ĐỊNH TÊN: `Self-Learning Math`; repo mục tiêu `TMA2015/self-learning-math`.
> **Trạng thái: CHUẨN BỊ / CHƯA ĐƯỢC PHÉP ĐỔI TÊN.** Không phải lệnh merge/deploy hay Academic PASS.

## Kiến trúc cố định

- **Một repository hiện hữu**, một MkDocs/GitHub Pages chứa THCS và THPT, chung JS/Gemini.
- Trang chọn chương trình `thpt-preview/` (điểm vào cấp 1 về mặt UX); trang chủ THCS và THPT riêng. Việc đưa cover thành `/` là thay đổi giao diện/URL **khác** đợt đổi tên.
- Giữ nguyên Firebase `roadmap-toan-ai`, Firebase AI SDK và App Check theo `tma2015.github.io`. Không tạo Firebase Auth, Worker, D1 hoặc đăng nhập.
- Không đổi bất kỳ khóa localStorage, IndexedDB, item ID, lịch sử hay bằng chứng học tập nào.

## Kiểm tra TRƯỚC khi chủ dự án đổi tên

1. PR #612 **đúng HEAD** phải có đủ 4/4 GitHub Actions QA PASS, bao gồm `scripts/test-self-learning-math-rename-preflight.cjs` và `scripts/test-self-learning-math-rename-browser.cjs`.
2. Bản ghép THCS+THPT phải chạy dưới cả `/roadmap-toan-thcs/` lẫn `/self-learning-math/` trong **mô phỏng**, kiểm thử desktop và điện thoại. THCS 7+25 và THPT 5+1 giữ nguyên; lối tắt Chọn chương trình hoạt động; AI Tutor chỉ hiện trên trang kiến thức và không lộ đáp án Readiness.
3. Chủ dự án phê duyệt và tự merge/deploy PR #612 theo quy trình hiện có; xác nhận website tên cũ vẫn hoạt động trước khi đổi repo. **Không tự merge hoặc deploy.**
4. Mở chức năng sao lưu tiến độ trên website THCS, **xuất và lưu một file backup thật**. Kiểm tra có thể đọc lại file backup mà không ghi đè dữ liệu học sinh. Chưa có cách kiểm tra backup thực trên máy người dùng từ CI.
5. Chủ dự án chấp nhận rủi ro không thể khắc phục chỉ bằng sửa JS: **GitHub tự chuyển hướng URL repository nhưng KHÔNG tự chuyển hướng URL GitHub Pages project site cũ**. Các bookmark tới `https://tma2015.github.io/roadmap-toan-thcs/...` có thể 404 khi đổi tên; cần cập nhật bookmark/link chia sẻ. Muốn giữ nguyên link cũ cần một điểm redirect độc lập (ví dụ repo/site redirect cũ hoặc tên miền riêng), **không nằm trong đợt này**.
6. Xác nhận GitHub Pages publishing source hiện tại trước khi đổi (ghi nhận branch, folder, domain); kiểm tra tên `TMA2015/self-learning-math` còn trống. Thay tên repo không thay owner `TMA2015`.

## Thao tác đổi tên — CHỈ chủ dự án thực hiện

1. Truy cập repository hiện tại → **Settings → General → Repository name**.
2. Nhập chính xác `self-learning-math` → **Rename**. Không tạo repository mới.
3. Nếu có bản Git clone cục bộ, cập nhật `git remote set-url origin https://github.com/TMA2015/self-learning-math.git`.
4. Kiểm tra Settings → Pages vẫn xuất bản từ branch và thư mục đã dùng; kích hoạt build/deploy lại theo workflow được chủ dự án phê duyệt nếu cần.

## Kiểm tra NGAY SAU khi đổi

- GitHub repo và PR/Issues ở tên mới; `main`, nhánh QA, `gh-pages`, commits và lịch sử vẫn có mặt.
- `https://tma2015.github.io/self-learning-math/` mở được; chọn chương trình, THCS, THPT, thư viện bài tập, ảnh, đồ thị, trang luyện tập, Tự kiểm tra demo.
- Trên desktop và iPhone/iPad thực: giao diện Golden không tràn; cả 2 menu nhanh hoạt động; AI Tutor hiện ở trang kiến thức THCS và THPT; Gemini thực tế trả lời thành công bằng kết nối hiện có, không làm lộ đáp án kiểm tra.
- Trên trình duyệt đã từng học, tiến độ cũ vẫn hiện; thử thao tác xuất backup mới. Do hostname không đổi nên storage cùng origin, nhưng **phải xác minh thực tế**, không suy từ CI.
- Nếu lỗi đường dẫn/Pages/App Check: **dừng phát hành nội dung mới**, sửa và kiểm thử; có thể đổi lại tên repo cũ từ Settings và tái triển khai, không coi đây là rollback tức thời được bảo đảm.

## Điều kiện đóng đợt

Owner kiểm tra thực địa, xác nhận Pages mới, dữ liệu và Gemini. Ghi checkpoint. **Không tự cấp Academic PASS.**
