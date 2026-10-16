# W3A — Ba bản thảo tự luận nguồn-được-duyệt, CHƯA đưa vào thư viện (R0)

**Tình trạng:** ACADEMIC_DRAFT / AWAITING_SUBSTANTIVE_AUTHORING_REVIEW / NOT_PUBLISHED. Đề & lời giải cốt lõi được phục hồi từ 3 file `bai-tap.md` đã khóa trong packet W3A; gợi ý phân tầng, rubric mới và nội dung mở rộng bên dưới là **biên soạn mới** nên cần review độc lập trước khi phát hành.

**Cấm nhập nguyên văn các bản thảo này vào** `written-exercise-library-v1.json` **trước khi phê duyệt**. Mã `PROPOSED-...` chỉ là khóa bản thảo, KHÔNG PHẢI canonical `exercise_id`.

## PROPOSED-WX05-ENT-001 — Chứng minh biểu thức là hằng số

- `source_id`: `05-ENT-01`
- `topic_id`: `CT05`
- `written_role`: **TRANSFER** hoặc **ENTRANCE10** (tạm thời; phải xác nhận tầng bằng S1 và quy tắc lớp học)
- `kntt_placements`: **PENDING**, không ghi Core Readiness từ nhãn `ENT`.
- `topic_placements`: CT05, sử dụng bình phương/lập phương và thu gọn nhiều hạng tử
- `prerequisite_skills`: hằng đẳng thức lập phương, hiệu hai bình phương, trừ đa thức
- `canonical_owner`: bản WX mới **nếu** không trùng bài đã phát hành và được duyệt.

**Đề bài:** Chứng minh biểu thức
\[
A=(x-1)^3-(x+1)^3+6(x-1)(x+1)
\]
không phụ thuộc vào giá trị của `x`. *Trình bày các bước biến đổi và kết luận.*

**Gợi ý phân tầng (draft):**
1. Khai triển riêng hai lập phương. Khi trừ `(x+1)^3`, cẩn thận đổi dấu **toàn bộ** các hạng tử.
2. Áp dụng hiệu hai bình phương cho `(x-1)(x+1)`.
3. Gộp hệ số `x²` rồi kết luận dựa trên kết quả còn lại.

**Lời giải (source-verified math):**
\[
(x-1)^3=x^3-3x^2+3x-1,\quad
(x+1)^3=x^3+3x^2+3x+1.
\]
Do đó
\[
(x-1)^3-(x+1)^3=-6x^2-2.
\]
Mặt khác,
\[
6(x-1)(x+1)=6(x^2-1)=6x^2-6.
\]
Suy ra `A=(-6x²-2)+(6x²-6)=-8` với mọi số `x`; vậy `A` không phụ thuộc vào `x`.

**Rubric bản thảo 4 điểm:** Khai triển và trừ hai lập phương đúng (1,5); biến đổi `6(x-1)(x+1)` đúng (1); thu gọn và kết luận rõ tính độc lập với `x` (1,5).

**Lỗi thường gặp:** bỏ sót đổi dấu khi trừ lập phương; viết sai dấu `6x²-6`; chỉ cho ra `-8` mà không kết luận tính độc lập.

## PROPOSED-WX06-CH-001 — Thêm bớt tạo hiệu hai bình phương

- `source_id`: `06-CH-01`
- `topic_id`: `CT06`
- `written_role`: **CHALLENGE**, KHÔNG `KNTT-Core`
- `kntt_placements`: **PENDING/NO CORE CLAIM**; lớp 8 chỉ là mức kiến thức nền, không khẳng định SGK bắt buộc kỹ thuật chuyên đề
- `topic_placements`: CT06 · Challenge, phép biến đổi thêm bớt
- `prerequisite_skills`: bình phương một tổng, hiệu hai bình phương, phân tích đa thức
- `canonical_owner`: WX Challenge mới nếu kiểm định và chủ dự án chấp thuận.

**Đề bài:** Phân tích biểu thức `x⁴+4` thành nhân tử với hệ số nguyên. *Giải thích vì sao chọn thêm và bớt cùng một hạng tử.*

**Gợi ý phân tầng (draft):**
1. Cố gắng đưa `x⁴+4` về một bình phương hoàn chỉnh.
2. Thêm và bớt `4x²` để có `(x²+2)²-(2x)²`.
3. Dùng hiệu hai bình phương để tạo hai nhân tử.

**Lời giải (source-verified math):**
\[
x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2
\]
nên
\[
x^4+4=(x^2-2x+2)(x^2+2x+2).
\]
Hai vế bằng nhau theo hằng đẳng thức; có thể nhân ngược để kiểm tra.

**Rubric bản thảo 4 điểm:** tạo bình phương hoàn chỉnh bằng thêm/bớt `4x²` (2); áp dụng hiệu hai bình phương, sắp xếp đúng hai nhân tử (2).

**Lỗi thường gặp:** thêm mà quên bớt `4x²`; dừng ở hiệu hai bình phương chưa thành tích; nhầm `(x²+2)²=x⁴+4`.

## PROPOSED-WX07-CONCEPT-001 — Điều kiện xác định sau rút gọn

- `source_id`: `07-WR-11`
- `topic_id`: `CT07`
- `written_role`: **ROUTINE_PRACTICE / DEEP_ANCHOR** cần chọn sau khi đối chiếu; ưu tiên Core Trap nếu đủ chỗ, KHÔNG sao chép lời giải `WX07-RAT-001`
- `kntt_placements`: lớp 8 Bài 22 theo báo cáo NotebookLM; xác minh placement S1 trước khi thêm metadata
- `topic_placements`: CT07 · điều kiện xác định ban đầu
- `related_canonical`: `WX07-RAT-001` (khác đề), `RAT07V1_063` (đã có MCQ về cùng ý tưởng)
- `canonical_owner`: CHƯA CHỐT. Có thể chỉ bổ sung vào Core mục “vì sao” và **không** thêm WX nếu không có lợi ích độc lập.

**Đề bài:** Vì sao khi biến đổi
\[
\frac{x^2-4}{x-2}=x+2
\]
ta vẫn phải ghi điều kiện `x≠2`, dù biểu thức `x+2` xác định với mọi `x`? *Hãy giải thích bằng lời.*

**Gợi ý phân tầng (draft):**
1. Tại `x=2`, mẫu số của biểu thức ban đầu bằng bao nhiêu?
2. Phân tích tử số thành `(x-2)(x+2)` và hỏi khi nào được rút gọn.
3. Phân biệt “biểu thức mới có nghĩa” với “đẳng thức biến đổi đúng trên miền xác định ban đầu”.

**Lời giải (source-verified math):** Phân thức `(x²-4)/(x-2)` **không xác định tại `x=2`**. Chỉ với `x≠2` mới có `(x²-4)/(x-2)=((x-2)(x+2))/(x-2)=x+2`. Việc thu gọn không thể bổ sung lại một giá trị đã bị loại khỏi tập xác định gốc.

**Rubric bản thảo 2 điểm:** chỉ rõ `x=2` bị loại vì mẫu bằng 0 (1); giải thích phép rút gọn chỉ bảo toàn đẳng thức trên miền `x≠2` (1).

**Lỗi thường gặp:** coi `x+2` xác định với mọi `x` là lý do để bỏ điều kiện; chỉ viết “mẫu khác 0” mà không nêu rõ giá trị bị loại hoặc lập luận miền xác định.

## Yêu cầu thẩm định cho vòng kế tiếp

NotebookLM cần đánh giá **từng bản thảo 3/3** về: (a) phép toán và lời giải, (b) chất lượng hint và rubric mới, (c) giá trị khác biệt so với 6 WX canonical của CĐ05–07, (d) tầng S1, (e) lỗi học thuật/lộ đáp án không chủ đích, (f) quyết định `APPROVE_NEW_WX` / `PLACE_CORE_ONLY` / `REUSE_EXISTING_WX` / `REVISE`. Không biến những quyết định này thành hành động triển khai tự động.

**Ranh giới:** không có câu mới nào ở Practice; không ghi điểm tự động từ tự luận giấy; không thay đổi lịch sử học sinh, Core Readiness hoặc data migration.
