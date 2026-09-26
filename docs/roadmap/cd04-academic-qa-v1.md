# Kiểm định học thuật CĐ04 — 26/09/2026

Trạng thái: đã kiểm tra đáp án ở phạm vi mô tả dưới đây; ánh xạ skill vẫn chỉ là bản nháp, chưa đưa vào cơ chế đánh giá.

## Phạm vi

- 132 câu nguồn, đúng 132 ID.
- 92 câu đại số/thế số/phép chia: so sánh kết quả với bốn phương án tại bốn bộ giá trị biến; chỉ một phương án tương đương trên các mẫu.
- 40 câu khái niệm/điều kiện/bài toán lời văn: đọc nội dung và đối chiếu đáp án mong đợi.
- Không phát hiện đáp án sai trong phạm vi này. Kiểm thử số không thay thế chứng minh đồng nhất thức hoặc phản biện độc lập của giáo viên.
- Bản ghi từng câu: [ledger](../assets/data/curriculum/cd04-academic-qa-ledger-v1.json).

## Hiệu chỉnh giả thiết, không đổi đáp án

- ALG04V2_123, _125, _128, _129, _130: ghi rõ các điều kiện lần lượt xy khác 0, ab khác 0, mn khác 0, xy khác 0, ab khác 0 trong phép chia cho đơn thức.
- ALG04V2_111: x lớn hơn 1 để chiều rộng dương; ALG04V2_116: x lớn hơn 1 để ba cạnh tạo thành tam giác; ALG04V2_117: x từ 20 trở lên để giá sau giảm không âm.
- ID câu, thứ tự lựa chọn, đáp án, tag và số câu không đổi. Hai SHA nguồn thay đổi đã được cập nhật trong [overlay CĐ04](../assets/data/curriculum/primary-skill-overlay-draft-04-bieu-thuc-dai-so-v1.json).

## Hai trường hợp còn treo

- ALG04V2_009 hỏi hạng tử tự do nhưng mang nhãn tổng quát nhan-biet-da-thuc. Không thêm riêng một mastery chỉ vì một dạng nhận biết.
- ALG04V2_010 hỏi phần biến nhưng còn tag he-so-bac; không dùng câu này làm bằng chứng học sinh đã nhận biết hệ số/bậc. Giữ lịch sử, review riêng lớp mapping.

Tệp gốc CĐ04–07 hiện cất đáp án đúng ở chỉ số 0, nhưng Practice Engine hiện đảo các lựa chọn và kiểm tra theo chỉ số gốc; kiểm thử chống hồi quy phải giữ cơ chế đó.

Chưa sửa Practice Engine, Beta v2, localStorage hoặc Knowledge Graph. Bước kế tiếp: QA năm ca CĐ05 trước, sau đó CĐ06–07.
