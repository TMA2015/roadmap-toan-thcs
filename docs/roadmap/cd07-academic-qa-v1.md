# CĐ07 — kiểm định điều kiện phân thức và phạm vi đánh giá

**Ngày:** 27/09/2026 · **Trạng thái:** QA theo nguồn, bản thay đổi chờ duyệt; overlay chỉ để review, chưa được Practice Engine đọc.

## Phạm vi và giới hạn

- Kiểm kê đủ **120 câu / 4 chunk**, mỗi chunk 30 câu; kiểm tra ID, đáp án hợp lệ, tag gốc, SHA tệp nguồn và tính đồng bộ với overlay/queue.
- Kiểm tra toán học có trọng tâm **8 câu đang chờ duyệt**: sáu biểu thức nhiều phép tính `RAT07V1_109–114` và hai bài tìm giá trị nguyên `RAT07V1_119–120`.
- Việc kiểm tra cấu trúc 120 câu **không có nghĩa đã chứng minh toán học độc lập từng đáp án và từng phương án nhiễu của cả 120 câu**. Các ứng viên primary khác vẫn cần QA theo họ câu.
- Không đổi tổng 120 câu, ID, đáp án, tags, độ khó, Practice Engine, bản Beta v2, Knowledge Graph hay dữ liệu lịch sử.

## 1. Sáu bài rút gọn nhiều phép tính: điều kiện cần ghi rõ

Các câu `109–114` có dạng

\[
A=\left(\frac{1}{x-a}+\frac{1}{x+a}\right)\frac{x^2-a^2}{2x},
\quad a=1,2,3,4,5,6.
\]

Điều kiện xác định **đầy đủ** là `x ≠ 0, x ≠ a, x ≠ −a`. Với đúng điều kiện này:

\[
\frac{1}{x-a}+\frac{1}{x+a}=\frac{2x}{x^2-a^2},
\qquad A=1.
\]

Đã sửa **đúng sáu prompt và sáu lời giải**, đưa miền xác định vào đề và trình bày quy đồng, nhân, rút gọn. Đáp án A (=1) không thay đổi. Đừng suy từ `A=1` rằng biểu thức ban đầu xác định với mọi x.

**Đo kỹ năng:** Một đáp án cuối cùng không chứng minh độc lập học sinh đã làm đúng bước cộng, nhân hoặc giữ điều kiện. Sáu câu giữ `proposed_assessed_skill: null` và cờ chờ rubric/chấm từng bước; ba tag nguồn vẫn giữ nguyên.

## 2. Hai bài tìm x nguyên

- `RAT07V1_119`: `(x+1)/(x−2)=1+3/(x−2)`, nên `x−2 ∈ {−3,−1,1,3}`. Đáp án `x ∈ {−1,1,3,5}` đúng, x=2 không thuộc miền xác định.
- `RAT07V1_120`: `(x+2)/(x−3)=1+5/(x−3)`, nên `x−3 ∈ {−5,−1,1,5}`. Đáp án `x ∈ {−2,2,4,8}` đúng, x=3 không thuộc miền xác định.

Hai bài chưa được xác định là Core mặc định và vẫn chưa chọn primary assessed skill. Chỉ phản biện tầng chương trình sau khi đối chiếu chuẩn cần đạt thực tế; không suy từ tần suất xuất hiện trong ngân hàng tự biên soạn.

## 3. Điểm biên tập để xử lý ở vòng sau

- `RAT07V1_081–086`: kết quả dạng `4/(2x), 6/(2x), 8/(2x)` có giá trị đúng nhưng chưa viết tối giản. Cân nhắc yêu cầu và lời giải nhất quán giữa “Tính” và “Tính rồi rút gọn” khi nâng chất lượng nội dung. Đây **không** phải lỗi khóa đáp án được xác nhận trong đợt này.
- `RAT07V1_115–116`: phương án nhiễu “Không thể phân tích thêm” không sát mục tiêu tính giá trị; nên thay bằng sai lầm tính toán có thể chẩn đoán, sau khi kiểm định bốn lựa chọn.
- Cần kiểm tra toán học độc lập các họ câu còn lại trước khi cho overlay tính mastery.

## Khóa nguồn và tương thích

Nguồn `07-phan-thuc-dai-so-v1-04.json` đã thay đổi; overlay `primary-skill-overlay-draft-07-phan-thuc-dai-so-v1.json` được cập nhật SHA và hàng đợi `primary-skill-review-queue-06-07-v1.json` cập nhật đúng sáu bản toàn văn. `question.id` được giữ nguyên để bảo toàn lịch sử; trong đánh giá mới phải phân biệt source-version theo ID + blob SHA, không hồi tố gộp điểm v1 thành mastery mới.

Chạy `node scripts/test-cd07-domain-qa.js` cùng `node scripts/test-primary-skill-overlay-04-07.js`, các QA CĐ04–06 và `mkdocs build --strict`. Kiểm thử tự động chỉ hỗ trợ bằng chứng trong phạm vi nêu trên; trước khi phát hành còn cần kiểm tra trình duyệt và duyệt nội dung độc lập.

**Không merge/deploy chỉ vì QA có màu xanh.** Không kích hoạt overlay chưa được duyệt, không ghi đè hay chuyển đổi dữ liệu học sinh.
