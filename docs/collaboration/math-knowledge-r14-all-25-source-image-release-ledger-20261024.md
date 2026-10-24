# Self-Learning Math — Sổ đối chiếu nguồn/hình 25 chuyên đề (R14)

**Nguồn:** So sánh trực tiếp `docs/kien-thuc/*/index.md` trên GitHub main với các bản thử ứng viên PR #574, ngày 24/10/2026. **Trạng thái: SOURCE INVENTORY PASS, CI R14 / OWNER RENDER QA PENDING, PRODUCTION HOLD.**

## 1. Tổng quan định lượng

- **25/25** chuyên đề có bản thử chỉnh lý: 24 bản `preview-composition-rN.md`, 1 bản `preview-tabs-r6.md` riêng cho CĐ10. Chưa có bản nào được phát hành đè lên `index.md` chính thức.
- **159** vị trí hình trong các trang gốc; giữ **79**, tách khỏi luồng đọc **80**, bổ sung **2** vị trí hình mới. Đây là *vị trí hiển thị*, không phải số file hình duy nhất.
- Toàn bộ file infographic gốc không bị xóa. Hình minh họa toán học và sơ đồ chiến lược có giá trị được giữ; hình tóm tắt chữ được ẩn **trên bản thử**, có thể sử dụng làm recap/in ấn sau kiểm định.
- Đối chiếu thứ tự H2–H5: **23 chuyên đề giữ nguyên chính xác**, **CĐ02 có đúng ba H4 chuyển thành nhãn cột bảng**, **CĐ10 được thiết kế có chủ đích thành 5 tab kiến thức + 5 tab phương pháp**. Không đánh dấu hai ngoại lệ này là `heading parity exact`.

## 2. Bảng kiểm kê hình và ngoại lệ

| Chuyên đề | Bản thử | Hình gốc | Giữ | Tách | Mới | Ghi chú kiểm định |
|---|---|---:|---:|---:|---:|---|
| 01 | r13 | 1 | 1 | 0 | 0 | Điều hướng; không tạo bài luyện |
| 02 | r9 | 4 | 1 | 3 | 0 | 3 nhãn H4 chuyển thành tiêu đề cột |
| 03 | r9 | 4 | 1 | 3 | 0 | Theo bố cục mẫu |
| 04 | r10 | 3 | 0 | 3 | 0 | Theo bố cục mẫu |
| 05 | r3 | 4 | 0 | 4 | 1 | Thêm hình diện tích (a+b)² |
| 06 | r9 | 3 | 1 | 2 | 0 | Giữ sơ đồ chọn phương pháp |
| 07 | r10 | 4 | 0 | 4 | 0 | Theo bố cục mẫu |
| 08 | r10 | 6 | 2 | 4 | 0 | Giữ hai hình tập nghiệm |
| 09 | r9 | 4 | 1 | 3 | 0 | Theo bố cục mẫu |
| 10 | tabs-r6 | 9 | 5 | 4 | 1 | Ngoại lệ 5+5 tab; 2 dạng chưa có bài đại diện |
| 11 | r10 | 4 | 0 | 4 | 0 | Theo bố cục mẫu |
| 12 | r11 | 5 | 1 | 4 | 0 | Giữ parabol và trục Ox |
| 13 | r11 | 6 | 3 | 3 | 0 | Giữ hình góc, đường song song |
| 14 | r3 | 6 | 2 | 4 | 0 | Giữ hình học thật |
| 15 | r11 | 8 | 4 | 4 | 0 | Giữ hình bốn tâm |
| 16 | r11 | 9 | 5 | 4 | 0 | Giữ hình các loại tứ giác |
| 17 | r12 | 7 | 3 | 4 | 0 | Giữ Thales, trung bình, đồng dạng |
| 18 | r12 | 13 | 11 | 2 | 0 | Giữ hình lượng giác và đồ thị có ý nghĩa |
| 19 | r12 | 8 | 4 | 4 | 0 | Giữ hình góc, tiếp tuyến, dây |
| 20 | r12 | 13 | 11 | 2 | 0 | Giữ hai sơ đồ chiến lược/suy luận |
| 21 | r3 | 11 | 8 | 3 | 0 | Giữ biểu đồ thống kê |
| 22 | r13 | 6 | 3 | 3 | 0 | Không có Written chuẩn riêng |
| 23 | r3 | 7 | 4 | 3 | 0 | Giữ sơ đồ cây và mô hình |
| 24 | r13 | 7 | 4 | 3 | 0 | Giữ sơ đồ chọn mô hình; Written WX24-MOD-001 |
| 25 | r13 | 7 | 4 | 3 | 0 | Giữ sơ đồ vòng luyện đề; không có Written riêng |

## 3. Đối chiếu học thuật & bài luyện

- Mọi phép toán, định lý, giả thiết, điều kiện và lời giải trung gian phải **bảo toàn đầy đủ**; việc giữ tiêu đề không đủ chứng minh bảo toàn nội dung. Kiểm định riêng những thay đổi bảng/lược đồ: CĐ02 quy tắc dấu, CĐ05 mô hình diện tích (a,b dương), CĐ07 điều kiện xác định, CĐ08 đổi chiều bất phương trình, CĐ10 trường hợp b=0 và kết quả x=2, CĐ11 căn ở mẫu, CĐ13 chiều suy luận song song, CĐ18 nhận biết cạnh đối/kề, CĐ22 ngoại lai, CĐ24 nghiệm bị loại, CĐ25 chiến lược ôn thi.
- Phần mềm tự luyện có các chế độ Core, Practice và Readiness **khác nhau**; việc thêm nút Practice vào trang kiến thức không được can thiệp đánh giá Readiness hoặc gán lại câu hỏi SGK Core.
- CĐ22 và CĐ25 **không có bài tự luận riêng** trong thư viện canonical hiện tại; chỉ có nút Practice phù hợp. CĐ01 là trang điều hướng, không tạo bài luyện giả. CĐ24 có mục viết `WX24-MOD-001`.
- CĐ10 có 11 dạng bài gốc nhóm thành 5 tab phương pháp, và 10 dòng bảng Entrance10; hai dạng tham số chưa có bài đại diện đã đối chiếu, nên thông báo *chưa có* là trạng thái không thể nhấp; các nút `Luyện ngay` còn lại phải deep-link kỹ năng có thật. **Không được xem mỗi tab như một dạng bài**.
- Một bài Written gần chủ đề nhưng không phủ hết kỹ năng không được quảng cáo là chứng minh đầy đủ năng lực. ID/đáp án/rubric/lịch sử học tập là dữ liệu bất biến trong nhánh R14.

## 4. Cổng kiểm định phát hành

1. **CI exact-head PASS:** MkDocs strict, 25 ứng viên HTML thật, tình trạng hình/MathJax, script `test-math-knowledge-all-25-source-integrity-r14.js`, các test trình duyệt PC 1365, tablet 820, phone 390 và toàn bộ hồi quy cũ.
2. **Thẩm định học thuật ảnh–bài:** đối chiếu công thức/giả thiết từng hình được giữ hoặc không còn hiển thị; xác nhận không làm mất lời dẫn hoặc dữ kiện quan trọng. Gói học thuật NotebookLM có thể được chuẩn bị riêng khi thay đổi nội dung toán, tuyệt đối không tự tuyên bố PASS.
3. **Thẩm định trải nghiệm thực tế:** PC, iPad Safari, điện thoại, dark/light, tab có thể dùng bằng bàn phím, print đủ tab, MathJax hiển thị sau khi đổi tab, nút luyện đến đúng bài.
4. **Kế hoạch triển khai từng đợt:** sau phê duyệt của phụ huynh, đợt nhỏ trước, ví dụ CĐ05 / CĐ14 / CĐ21 / CĐ23; kiểm tra lại trang công khai và chỉ số hoạt động, sau đó mới mở rộng. Bản sao nguyên gốc `index.md`, CSS và liên kết phải có cách khôi phục; không chuyển hàng loạt 25 trang một lần.
5. **Bảo vệ hệ thống:** website chính thức, dữ liệu học sinh, Firebase/Gemini và thư viện 87 bài Written đã phê duyệt không thay đổi trong PR thiết kế. PR vẫn **DRAFT** đến khi có quyết định phát hành rõ ràng.

**Quan trọng:** hoàn thành 25 ứng viên thiết kế là mốc học liệu/bố cục; **không** phải 25 trang trên website đã được nâng cấp hoặc toàn bộ nội dung đã được NotebookLM PASS.
