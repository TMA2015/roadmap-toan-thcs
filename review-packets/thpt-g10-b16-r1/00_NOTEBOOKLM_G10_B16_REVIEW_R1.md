# Self-Learning Math THPT — Gói phản biện học thuật G10/B16 R1

**Review ID:** THPT-G10-B16-R1-20261026  
**Trạng thái:** ACADEMIC_REVIEW_REQUIRED · DESIGN_PROTOTYPE_ONLY · KHÔNG PHÁT HÀNH  
**Bài mẫu:** Toán 10 KNTT, Chương VI, Bài 16 — *Hàm số bậc hai* (xác nhận vị trí/tên bài chính xác từ SGK trước khi kết luận).  
**Mẫu giao diện:** `THPT_G10_B16_knowledge_pilot_R1.html` (kế thừa bản ngày 23/10 `math_knowledge_design_preview_r0.html`).  
**Quy tắc:** THCS và THPT là hai khu vực trong **một** website/repository Self-Learning Math; học liệu, ngân hàng câu hỏi, điểm và lịch sử THPT dùng namespace riêng. Không đổi hay triển khai THCS trong đợt này.

## Nguồn để NotebookLM đối chiếu

NotebookLM THPT mới của phụ huynh đã chứa các SGK/SBT. Trong lần review **hãy chọn làm nguồn chính**:

- **S1**: SGK Toán 10 KNTT tập 2 (Drive: https://drive.google.com/file/d/1v28SYkWsnxg9qUmn-JEmYaEDcCdZWJgf/view).
- **S2**: SBT Toán 10 KNTT tập 2 (Drive: https://drive.google.com/file/d/1Ca0XQ7KGuZWViVg2LOru3CoQ1UsFpd4P/view).
- **Nền khi thật sự cần:** SGK Toán 10 tập 1 / SBT Toán 10 tập 1 và nội dung tiền đề lớp 9. Không dùng SBT để tự mở rộng yêu cầu Core bắt buộc.
- **Bài mẫu để đánh giá:** file HTML R1; đây là đối tượng review, **không phải nguồn S1**. Nếu NotebookLM không thể đọc nội dung HTML, dùng phần "Đối tượng review" bên dưới làm mô tả chính xác và đánh giá bố cục từ ảnh/screenshot do phụ huynh cung cấp.

Không tự suy ra số trang của SGK/SBT từ tên file. Cần trích dẫn theo **tên tập, bài, trang/đề mục thực tế** và nêu khi không truy cập hoặc không đọc được nguồn.

## Đối tượng review (tóm tắt đầy đủ ý toán trong bản HTML R1)

1. Nhận dạng: hàm số bậc hai `y = ax² + bx + c` với `a ≠ 0`, hệ số thực, tập xác định `ℝ`.
2. Dạng đỉnh: `y = a(x − h)² + k`, đỉnh `I(h; k)`, trục đối xứng `x = h`, `a>0` mở lên / `a<0` mở xuống.
3. Đồ thị đã vẽ: `y = (x−2)²−1 = x²−4x+3`; đỉnh `(2,−1)`; trục `x=2`; đi qua `(0,3)`; cắt trục hoành tại `x=1` và `x=3`.
4. Ví dụ giải theo bước: `x²−4x+3 = (x−2)²−1`; kết luận giá trị nhỏ nhất `−1` (do `a>0`); lỗi dễ nhầm dấu của hoành độ đỉnh.
5. Micro-formative (không lưu điểm): `y=(x+3)²−5` có hoành độ đỉnh `−3`, không phải `3` hoặc `−5`; có gợi ý tùy chọn.
6. Giao diện: breadcrumb lớp/chương/bài, mục tiêu, khái niệm cạnh đồ thị SVG, ví dụ từng bước, cảnh báo lỗi, một câu Micro với nút kiểm tra, đổi sáng/tối, không có Readiness chấm điểm độc lập hay bài tự luận thật trong mockup.

**Lưu ý nội dung cố ý chưa đủ:** Bản R1 là **mẫu một đoạn bài để kiểm tra thiết kế**, chưa tuyên bố bao phủ hết nội dung Bài 16. Chẳng hạn cần NotebookLM xác minh xem bài chuẩn phải thêm bảng biến thiên, khoảng đồng biến/nghịch biến, miền giá trị, tọa độ đỉnh dạng tổng quát, ví dụ `a<0`, đọc đồ thị và bối cảnh bài tập ở mức nào. Không được đánh dấu FULL_LESSON_PASS chỉ vì công thức đã cho đúng.

## Yêu cầu đối chiếu học thuật

1. **Đúng nguồn:** Bài 16/Chương VI có đúng chủ đề này trong SGK Toán 10 KNTT tập 2 không? Ghi nguồn/trang chính xác.
2. **Độ đúng:** Kiểm tra từng công thức, điều kiện, ví dụ và tọa độ trên đồ thị; đặc biệt điểm cắt Ox/Oy, đỉnh, trục, chiều mở và lời giải Micro.
3. **Đủ Core:** Liệt kê yêu cầu cần đạt SGK chưa thể hiện, phân loại BẮT BUỘC cho bài hoàn chỉnh hay CÓ THỂ ĐỂ BÀI KẾ TIẾP (theo nguồn, không đoán).
4. **Sư phạm:** Bài có diễn giải rõ *vì sao* không? Ví dụ Base → Trap → Apply có thứ tự hợp lý cho học sinh lớp 10? Lỗi sai điển hình nào cần bổ sung?
5. **SBT:** Chọn 2–4 **dạng kỹ năng đại diện** có giá trị học tập từ SBT, diễn đạt lại không chép nguyên bài. Phân biệt ví dụ ngắn/Micro, Practice nhiều bước, tự luận mỏ neo, Readiness độc lập không hint.
6. **Tầng học:** Không trộn luyện thi tốt nghiệp THPT hoặc SAT/ACT vào KNTT Core; không dùng tỷ lệ ra đề nếu chưa có tập đề kiểm chứng.
7. **Bằng chứng:** Mỗi điểm cần sửa phải có đoạn mục đích giáo dục + tham chiếu nguồn SGK/SBT và mức ưu tiên P0/P1/P2.

## Prompt đưa trực tiếp vào NotebookLM THPT

> Hãy đóng vai nhóm phản biện học thuật Toán 10 KNTT cho hồ sơ `THPT-G10-B16-R1-20261026`. Chỉ dùng SGK Toán 10 KNTT tập 2 làm căn cứ S1 và SBT tập 2 làm nguồn S2. Xác minh chính xác Chương VI/Bài 16 và mọi mệnh đề trong mục “Đối tượng review” của packet. Không coi packet/HTML do AI soạn là nguồn sách. Hãy kiểm tra từng công thức, đồ thị `y=x²−4x+3`, ví dụ và Micro; xác định yêu cầu SGK còn thiếu để thành **một bài Core đầy đủ**. Đề xuất bổ sung nhỏ nhất có giá trị và hai đến bốn dạng luyện đại diện, không chép nguyên SGK/SBT. Kết quả viết bằng tiếng Việt, dẫn tên nguồn và trang/đề mục khi có thể kiểm chứng, phân loại P0/P1/P2. Kết thúc với một trong các verdict **ACADEMIC_OVERALL: PASS / REVISIONS_REQUIRED / INSUFFICIENT_EVIDENCE**; nêu rõ riêng `DESIGN_SAMPLE_OK` và `FULL_LESSON_CORE_COVERAGE` là hai cổng khác nhau. Đừng yêu cầu phát hành, thay ngân hàng câu hỏi hay ghi điểm học sinh.

## Tiêu chí chấp thuận và vận hành

- **Giai đoạn hiện tại:** chỉ xem lại thiết kế R1 và tiếp nhận báo cáo NotebookLM; không xuất bản `/thpt/` hoặc đổi root website.
- **Sau review:** sửa P0/P1 theo nguồn, khóa phần lý thuyết sau academic PASS, rồi bổ sung Micro + Practice + Written và kiểm thử đúng 3 bối cảnh học; Readiness tạo sau khi tiêu chuẩn độc lập được phê duyệt.
- **Phê duyệt chủ dự án:** kiểm tra thật trên desktop và iPad hoặc điện thoại do phụ huynh chấp nhận; website THCS, đường dẫn sâu, dữ liệu và lịch sử vẫn được giữ nguyên.

**Nhận xét cho nhóm làm sản phẩm:** Một mockup đẹp không phải là bằng chứng kiến thức đầy đủ. Không tự nâng trạng thái từ DESIGN_DRAFT lên ACADEMIC_PASS nếu chưa có verdict và kiểm tra đối chiếu nguồn thực tế.