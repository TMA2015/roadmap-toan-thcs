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
3. Chủ dự án phê duyệt và tự **merge** PR #612. **Lưu ý: `.github/workflows/deploy.yml` tự chạy khi có push vào `main` và đẩy `site/` lên `gh-pages`**; vì vậy merge có thể kích hoạt deploy ngay, không cần bấm thêm nút deploy. Đợi deploy PASS, xác nhận website tên cũ vẫn hoạt động rồi mới đổi repo. **Assistant không tự merge hoặc deploy.**
4. Mở chức năng sao lưu tiến độ trên website THCS, **xuất và lưu một file backup thật** trên từng trình duyệt/thiết bị có lịch sử quan trọng. Mở tệp đã tải, kiểm tra có dữ liệu hợp lệ bằng màn hình **Khôi phục từ tệp** ở chế độ chỉ xem, **không bấm thực hiện khôi phục**. Bản sao lưu hiện tại là dữ liệu **localStorage** theo danh sách khóa có kiểm soát; các thử nghiệm IndexedDB Phase4 R4/R10 chưa phải tính năng lưu dữ liệu học sinh đang phát hành. Không được tuyên bố bản backup này đã bao phủ mọi kho dữ liệu của trình duyệt. Chưa có cách kiểm tra backup thật trên máy người dùng bằng CI.
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
- Trên **cùng trình duyệt và hồ sơ người dùng** đã từng học, tiến độ cũ vẫn hiện; thử xuất bản backup mới. Do hostname không đổi nên localStorage/IndexedDB cùng origin, và Chromium QA đã chứng minh dữ liệu thử nghiệm tồn tại qua hai đường dẫn, nhưng **phải xác minh lịch sử thật**, không suy từ CI. Tiến độ ở trình duyệt khác hoặc ở tên miền khác không tự đồng bộ.
- Nếu lỗi đường dẫn/Pages/App Check: **dừng phát hành nội dung mới**, sửa và kiểm thử; có thể đổi lại tên repo cũ từ Settings và tái triển khai, không coi đây là rollback tức thời được bảo đảm.

## Điều kiện đóng đợt

Owner kiểm tra thực địa, xác nhận Pages mới, dữ liệu và Gemini. Ghi checkpoint. **Không tự cấp Academic PASS.**

## Phạm vi kiểm thử và rủi ro còn lại

- Kiểm thử địa chỉ mới dùng **website giả lập**, chưa phải GitHub Pages đã được đổi tên. Không thử được quyền Settings → Pages, DNS/Pages regeneration hoặc cuộc gọi Gemini thực tế với App Check trên trang mới trước thao tác đổi tên.
- Script đổi đường dẫn kiểm tra cả localStorage và cơ sở dữ liệu IndexedDB **QA tạm**, tuyệt đối không đọc hoặc xóa lịch sử học sinh thực.
- GitHub Docs xác nhận chuyển hướng repo/PR, **không chuyển hướng địa chỉ project site cũ**. Không tạo repo mang lại tên cũ sau này vì sẽ làm mất redirect repo.
- Nếu có đường dẫn ngoài website đang ghim `/roadmap-toan-thcs/`, phải cập nhật sau rename; không có quyền kiểm kê tất cả liên kết đã chia sẻ bên ngoài.
