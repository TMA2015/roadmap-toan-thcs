# A2 — Thử nghiệm hành trình tự học với học sinh (R1)

**Audit:** `MATH-RELEASE-READINESS-A2-R1-20261011`  
**Status:** `HUMAN_QA_NOT_STARTED` — kịch bản đã chuẩn bị, chưa có kết quả thử thực tế.  
**Đối tượng:** học sinh/người nhà dùng Self-Learning Math; không cần tuyển mẫu hay mở rộng người dùng.  
**Nguyên tắc:** không hướng dẫn thay trẻ; ghi lại điểm trẻ tự tìm được và điểm trẻ bị mắc. Dùng hồ sơ trình duyệt thử nghiệm riêng nếu có thể, **không xóa dữ liệu học thật**.

## Kiểm thử trước mắt: 2 hành trình

### A2-6 — Toán lớp 6, số học

Bắt đầu ở [trang chủ](https://tma2015.github.io/roadmap-toan-thcs/). Chỉ giao nhiệm vụ:

> "Con thử tìm phần Toán 6 về số và phép tính. Hãy chọn một bài thuộc đúng lớp 6, đọc giải thích, làm một câu, rồi tìm chỗ luyện thêm hoặc tự kiểm tra."

Người quan sát chỉ ghi: có tìm được **Học theo lớp → Lớp 6 → Chương** và thẻ Core phù hợp không; có phân biệt được "Bài giảng", "Luyện tập", "Tự kiểm tra" không; khi trả lời sai có hiểu lời giải thích không; sau khi chuyển trang và quay lại có biết tiếp tục ở đâu không.

Đường dẫn dùng để **kiểm tra sau buổi thử**, không cho trẻ biết trước: `/hoc-theo-lop/` → `/kien-thuc/02-so-va-phep-tinh/core/` → `/kien-thuc/02-so-va-phep-tinh/bai-tap/` → `/kien-thuc/02-so-va-phep-tinh/tu-kiem-tra/`.

### A2-8 — Toán lớp 8, phân thức đại số

Nhiệm vụ:

> "Con tìm bài lớp 8 về phân thức đại số. Hãy đọc điều kiện xác định, làm một ví dụ hoặc câu luyện tập, rồi giải thích vì sao phải kiểm tra mẫu khác 0."

Chú ý: học sinh có tìm đúng **phạm vi lớp 8** trong chuyên đề chứa cả kiến thức xuyên lớp không; có tự tìm được chỗ xem lời giải khi sai không; có bị lẫn giữa luyện có trợ giúp và Readiness độc lập không.

Đường dẫn kiểm tra sau buổi: `/hoc-theo-lop/` → `/kien-thuc/07-phan-thuc-dai-so/core/` → `/kien-thuc/07-phan-thuc-dai-so/bai-tap/` → `/kien-thuc/07-phan-thuc-dai-so/tu-kiem-tra/`.

## Sau hai bài thử đầu tiên: 2 hành trình kiểm tra chéo

- **A2-7 — Lớp 7, tam giác:** `/hoc-theo-lop/` → `/kien-thuc/14-tam-giac/core/`. Kiểm tra trẻ có đọc rõ giả thiết, không dựa vào hình vẽ để suy ra kết luận, và tìm bài tập đúng phạm vi lớp 7.
- **A2-9 — Lớp 9, hệ phương trình:** `/hoc-theo-lop/` → `/kien-thuc/09-he-phuong-trinh/core/`. Kiểm tra lập hệ từ tình huống, đối chiếu điều kiện thực tế, nhận biết phần Core khác phần ôn thi.

Không yêu cầu cùng một trẻ làm cả 4 bài. Chọn nhiệm vụ phù hợp khả năng đang học; không đo hiệu quả giáo dục bằng 1 lần trải nghiệm.

## Quan sát tối thiểu và cách ghi phản hồi

Ghi theo mẫu một dòng cho mỗi chặng:
`A2-<lớp>|<Bước>|PASS/BLOCKED/UNCLEAR|<điều học sinh làm hoặc nói>|<mất bao lâu hoặc số lần cần trợ giúp>`.

Các bước quan sát:
1. Tìm đúng lớp/chương/bài mà không cần người lớn điều hướng.
2. Mở Core, chọn đúng thẻ kiến thức và hiểu mục tiêu.
3. Làm bài, gặp lỗi sai, đọc lý do/điều kiện, biết hướng sửa.
4. Tìm được Practice và tự kiểm tra; không nhầm kết quả luyện có trợ giúp với đánh giá độc lập.
5. Đổi trang, tải lại, tiếp tục được trong phạm vi hệ thống hiện hỗ trợ.
6. Nếu AI không hoạt động, vẫn đọc được bài, làm bài và xem lời giải do hệ thống cung cấp.

Nếu giao diện xảy ra lỗi, ghi **URL, thiết bị, bước vừa thực hiện, biểu hiện**, có thể kèm ảnh chụp. Không cần ghi tên học sinh hay dữ liệu riêng tư.

## Điều kiện nghiệm thu A2 R1

- **Không còn lỗi chặn đường học** trong hai kịch bản bắt buộc (lớp 6/8); kiểm tra lớp 7/9 để xác nhận không cá biệt.
- Ít nhất những bước nêu trên được quan sát thực tế, không lấy việc đã có đường dẫn hay CI xanh làm thay thế.
- Mọi điểm mơ hồ do trẻ gặp phải đều được ghi và phân loại trước khi kết luận `A2_PASS`.
- Không thay đổi kiến trúc hoặc ngân hàng nội dung chỉ từ một quan sát đơn lẻ; sửa có giới hạn và kiểm thử hồi quy nếu xác nhận lỗi.

**Gate owner:** Kịch bản này cần người học thật; ChatGPT không được tự ghi `A2_PASS` khi chưa nhận kết quả trải nghiệm.
