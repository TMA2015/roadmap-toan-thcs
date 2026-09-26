# CĐ05 — kiểm định học thuật Hằng đẳng thức (26/09/2026)

**Trạng thái:** QA nội dung và hồi quy; ánh xạ kỹ năng vẫn chỉ là đề xuất. [Ledger theo 120 ID](../assets/data/curriculum/cd05-academic-qa-ledger-v1.json).

## Phạm vi

Ngân hàng hiện hành gồm 120 câu trong bốn tệp nguồn, có 15 nhãn skill gốc. Bộ QA dùng kiểm tra đại số/nội suy hệ số với 104 câu và kiểm tra đáp án/logic riêng cho 16 câu còn lại. Mỗi câu trắc nghiệm vẫn chỉ có một đáp án đúng trong phạm vi kiểm định. Phép thử tại các bộ giá trị biến **không thay thế chứng minh đồng nhất thức hình thức**; chưa có phản biện độc lập của giáo viên/Gemini cho cả 120 câu.

Điểm cần phân biệt: trả lời đúng câu `tinh-nhanh-hdt` (10 câu số học) không chứng minh em đã dùng HĐT thay vì cách nhân thông thường. Trả lời đúng `giai-phuong-trinh-hdt` (5 câu) cũng chưa chứng minh phương pháp em đã chọn. Đích đánh giá nên dựa trên đầu ra có thể quan sát, không cộng mastery cho phương pháp chưa kiểm chứng.

## Sáu mục được chỉnh diễn đạt hoặc giải thích

- `ID05V1_080`: nêu rõ đang áp dụng **dạng bình phương một hiệu** `(A-B)^2`; `A=3x, B=5`. Nếu chọn dạng bình phương một tổng với số âm thì `B=-5` cũng là cách biểu diễn khác, nên cần cố định dạng trong đề.
- `ID05V1_116–118`: ghi lời giải khai triển chi tiết và làm rõ câu chỉ yêu cầu **nhận biết đẳng thức đúng**, chưa đánh giá khả năng viết chứng minh.
- `ID05V1_119`: thêm phép khai triển, giải thích việc thử một cặp số không đủ chứng minh tổng quát; lựa chọn phương pháp không tương đương trình bày chứng minh.
- `ID05V1_120`: hỏi rõ **bước đầu tiên** khi phân tích `x^4-16`. Bước đầu là `(x²-4)(x²+4)`, còn phân tích hoàn toàn là `(x-2)(x+2)(x²+4)`.

Sáu mục này giữ nguyên `question.id`, bốn lựa chọn, chỉ số đáp án, `tags.skill` và lịch sử học sinh. Tệp nguồn `-03.json`, `-04.json`, overlay CĐ05 và gói full-text cần review đã được đồng bộ theo phiên bản mới.

## Kết luận về skill chính

- `116–119`: vẫn để `proposed_assessed_skill=null`, vì tag legacy `chung-minh-hdt` chưa phù hợp với mục tiêu đo của bài trắc nghiệm. Không tự tạo skill mới cho từng bước lập luận.
- `120`: ứng viên `hieu-hai-binh-phuong` phù hợp cho *nhận diện bước đầu*, `phan-tich-hdt` là nhóm chung. Không được coi câu này là đã thành thạo phân tích đa thức hoàn toàn.
- 115 ứng viên còn lại chỉ là đề xuất theo câu hoặc họ câu; không kích hoạt đồng loạt mastery khi chưa kiểm tra đầy đủ cách đo.

[Overlay nguồn](../assets/data/curriculum/primary-skill-overlay-draft-05-7-hang-dang-thuc-v1.json) tiếp tục có 116 ứng viên, 5 ca cờ review (4 chưa chọn primary). Các nhóm hiển thị không tự trở thành node bắt buộc trong Knowledge Graph.

## Phạm vi hệ thống không thay đổi

Không cập nhật Practice Engine, Beta v2, Knowledge Graph, localStorage v1/v2, điểm mastery hoặc số lượng câu. Đợt QA này chưa suy đoán tần suất đề thi hoặc định tầng chuyên. Bước tiếp theo là rà soát 24 câu CĐ06 (phối hợp phương pháp và ứng dụng), rồi 8 câu CĐ07; chỉ kích hoạt sau khi ánh xạ học thuật được duyệt.
