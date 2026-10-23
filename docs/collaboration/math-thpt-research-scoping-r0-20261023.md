# Khảo cứu khởi động Toán THPT — khung mở rộng sau kiểm toán THCS

**Research ID:** MATH-THPT-FEASIBILITY-R0-20261023  
**Trạng thái:** RESEARCH_ONLY | NO_NEW_STUDENT_COURSE | NO_DEPLOY | NO_CURRICULUM_CERTIFICATION  
**Điều kiện:** THCS bảo toàn 87 bài tự luận và chỉ còn thực hiện các kiểm tra dữ liệu/bằng chứng không chặn trải nghiệm gia đình; chủ sở hữu xác nhận con học được bình thường. Việc xây chương trình THPT thực tế là một quyết định tiếp theo, không phải nhánh nội dung đang chạy trên website THCS.

## 1. Nguồn công khai đầu vào đã đối chiếu

- Chương trình GDPT 2018 (và văn bản hợp nhất chương trình tổng thể trên cổng Bộ GDĐT) mô tả môn Toán theo 3 mạch: **Số, Đại số và Một số yếu tố giải tích; Hình học và Đo lường; Thống kê và Xác suất**, với cấu trúc tăng dần, xoáy ốc. Nguồn: https://moet.gov.vn/content/vanban/Lists/VBPQ/Attachments/1483/vbhn-chuong-trinh-tong-the.pdf. Chưa thực hiện đối chiếu từng yêu cầu cần đạt của lớp 10–12 với bản SGK hiện hành trong R0.
- Cấu trúc thi tốt nghiệp THPT từ 2025 do Bộ GDĐT công bố: đề Toán dự kiến 90 phút/34 lệnh hỏi trong bảng minh hoạ 2023; ba hình thức trắc nghiệm **nhiều lựa chọn, Đúng/Sai 4 ý, trả lời ngắn**. Văn bản công bố lưu ý số câu/lệnh hỏi có thể được điều chỉnh. Nguồn: https://vqa.moet.gov.vn/vi/news/thong-bao/cau-truc-dinh-dang-de-thi-tot-nghiep-thpt-tu-nam-2025-74.html. Không hard-code “34 câu” bất biến trong phần mềm.
- Phương án thi năm 2026 được Bộ GDĐT thông tin theo hướng ổn định so với khung mới: https://vqa.moet.gov.vn/vi/news/tin-tuc-su-kien/ky-thi-tot-nghiep-thpt-nam-2026-giu-on-dinh-mot-so-dieu-chinh-khong-anh-huong-toi-thi-sinh-226.html.
- Bảng chương Toán 10 KNTT được các nguồn học liệu liệt kê gồm: mệnh đề/tập hợp, bất phương trình hai ẩn, hệ thức lượng tam giác, vectơ, thống kê, hàm số bậc hai, phương pháp tọa độ, tổ hợp, xác suất. **Nguồn tham khảo S2**, không thay SGK gốc: https://nghengu.vn/toan/chuong-trinh-toan-10-11711.html. Trước khi cấp bài học S1 phải đối chiếu SGK Toán 10 tập 1–2 và sách chuyên đề; không chép nguyên SGK lên website.

## 2. Định hướng được đề xuất, chưa phải quyết định triển khai

**Nên tách chương trình THPT thành một sản phẩm/phạm vi dữ liệu độc lập** nằm cùng thương hiệu G Learning, tái sử dụng phần mềm/hệ thống QA có ích từ THCS nhưng không trộn các bằng chứng Readiness/Mastery/lịch sử THCS với lớp 10–12. “Kế thừa kiến trúc” không đồng nghĩa cùng một schema dữ liệu hoặc cùng bộ kỹ năng.

| Thành phần | Kế thừa từ THCS | Phần riêng của THPT cần nghiên cứu |
|---|---|---|
| Lối học | Hai đường: theo lớp/bài SGK và theo cây chuyên đề | KNTT lớp 10–12, 3 mạch chương trình THPT, các chuyên đề học tập lựa chọn riêng, xác định trình độ THCS→10 |
| Kiến thức | Thẻ Core, ví dụ mẫu, lỗi thường gặp, từng bước gợi ý, D1–D6 | Hàm số/đồ thị nâng cao, lượng giác, vectơ, hình học không gian, xác suất–thống kê, giải tích; cần source-by-source S1 check |
| Practice | Phản hồi tức thì, đề phong phú, phân tách Formative/Readiness | Hợp đồng chấm 3 kiểu hỏi chính thức: MCQ, Đúng/Sai đa mệnh đề, trả lời ngắn; hỗ trợ biểu thức/hàm/đồ thị có kiểm tra điều kiện |
| Tự luận | Rubric trình bày từng bước, hướng dẫn tự kiểm tra | Phân tích hàm số, lập luận, chứng minh, tọa độ/vectơ/giải tích; tránh chấm đủ tín nhiệm chỉ từ kết quả cuối |
| Đánh giá | Hệ thống trạng thái nguồn, kiểm toán NotebookLM theo ID, không tự nhận mastery | Core theo lớp 10–12; ôn tốt nghiệp THPT là tầng riêng, bộ đề/từ năm nào có metadata và chính sách điểm versioned |
| Dữ liệu | Triết lý local/free-first, không buộc login | Namespace/storage riêng, không backfill lịch sử THCS hoặc đặt điểm 9 thành minh chứng đã qua 10 |

## 3. Trình tự tối thiểu, tránh phình dự án

1. **R1 nguồn:** xác minh SGK KNTT Toán 10–12 (6 tập), chương trình GDPT 2018 môn Toán và phần chuyên đề lựa chọn; mỗi bài học ánh xạ sang yêu cầu cần đạt **S1**. Ghi chính xác nguồn và phiên bản. Không sinh ngân hàng câu hỏi trước khi có dữ liệu S1.
2. **R2 thiết kế:** công bố **Master Plan THPT riêng**, schema lớp 10–12, tree kỹ năng mới và bảng cầu nối tiền đề 9→10. Phân biệt Core, ôn tốt nghiệp, chuyên đề lựa chọn và nâng cao.
3. **R3 thử nghiệm lớp 10 nhỏ:** lấy một chủ đề có dữ liệu S1 đầy đủ, làm 1–2 Core lessons với Micro + Practice + 1 tự luận thực sự khác tư duy; NotebookLM audit, chủ sở hữu QA trên PC/iPad.
4. **R4 mở rộng theo bằng chứng:** thêm bài theo lỗ hổng D1–D6 được xác minh, không lập quota hàng nghìn câu từ đầu; chỉ sau khi pilot đạt mới chốt hosting/repo và lộ trình cả cấp.

**Boundary:** Không phát hành THPT hay làm thay đổi trang THCS trong giai đoạn R0; không dùng API trả phí; không triển khai Firebase/Auth mới; không giả định cấu trúc thi mãi không đổi; không gộp dữ liệu học sinh cấp học khác nhau. Chủ sở hữu cần có quyết định triển khai riêng sau thiết kế/nguồn.

## 4. Những việc R0 chưa chứng minh

- Chưa có đối chiếu đầy đủ 6 tập SGK Toán 10–12 KNTT; nguồn S2 về bảng chương không được ghi là S1.
- Chưa tạo lộ trình/kỹ năng THPT đã được NotebookLM duyệt.
- Chưa đánh giá chi tiết cấu trúc đề tốt nghiệp THPT 2027 trở đi; mọi policy thi phải có năm hiệu lực.
- Chưa quyết định thêm trên cùng website hay repo khác; kiến nghị phân vùng vì an toàn dữ liệu, không phải yêu cầu kỹ thuật bắt buộc.
