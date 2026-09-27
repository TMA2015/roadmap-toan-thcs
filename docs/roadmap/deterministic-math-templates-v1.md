# Module sinh câu tương tự xác định — Pilot 27/09/2026

## Quyết định sản phẩm

**Học liệu gốc thuộc về website, không thuộc về AI.** Câu hỏi theo mẫu được tạo từ dữ liệu mẫu do nhóm biên soạn kiểm soát, điều kiện tham số, phép tính chính xác và các quy tắc giải thích đã viết sẵn. Đối với mọi biến thể, học sinh nhận cùng lúc đề bài, đáp án đúng, ba phương án nhiễu và giải thích được thay số mới. AI Tutor chỉ có thể giải thích thêm trên yêu cầu; **không quyết định đáp án chuẩn** và không cần chạy để làm bài.

Đợt pilot giới hạn tại ba dạng: cộng hai số nguyên trái dấu (CĐ02), cộng hai phân số khác mẫu (CĐ02) và hiệu hai bình phương với số nguyên dương (CĐ05). [Catalog có phạm vi tham số và phiên bản](../assets/data/curriculum/arithmetic-template-catalog-v1.json) → [engine thuần công thức](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/docs/assets/javascripts/arithmetic-template-engine-v1.js) → [trang thử nghiệm](../huong-dan/thu-nghiem-sinh-cau-tuong-tu.md). Đây không phải gói học liệu chính cho toàn bộ 25 chuyên đề.

## Hợp đồng học thuật/kỹ thuật của mẫu

| Thuộc tính | Ý nghĩa |
|---|---|
| `template_id`, `template_version` | Định nghĩa chính xác một công thức và cách giải; thay công thức phải nâng version |
| `seed`, `params`, `signature`, `id` | Tái hiện đúng biến thể; ngăn lặp tham số trong phiên |
| `question`, `options`, `answer`, `explanation` | Tính từ cùng bộ tham số; không dùng chuỗi lời giải cố định có số sai |
| `diagnostics` | Giải thích riêng cho lựa chọn sai, gắn với sai lầm thường gặp |
| `correct_value` | Giá trị chuẩn hóa chính xác: số nguyên/phân số tối giản |
| `source_kind`, `independent_credit` | Khai báo nguồn xác định; vòng này luôn `independent_credit=false` |

Engine tạo lựa chọn qua chuẩn hóa giá trị, loại bỏ các giá trị trùng đáp án hoặc trùng nhau, có phương án dự phòng khi một lỗi thường gặp dẫn tới kết quả bằng đáp án khác. Đối với phân số, dùng ƯCLN để rút gọn cả kết quả và phương án nhiễu; mẫu số luôn khác 0, hai mẫu ban đầu khác nhau. Phạm vi số hữu hạn giúp tránh tràn số nguyên. Tất cả mẫu có tên và mã cố định, không thực thi biểu thức/JavaScript lấy từ catalog.

**Thử nghiệm QA:** kiểm tra độc lập công thức và ràng buộc qua 1.500 seed/mẫu, tổng 4.500 biến thể; kiểm tra tính tái hiện, bốn lựa chọn khác nhau về giá trị, bước giải/lỗi thường gặp, xử lý seed sai và tệp không dùng API AI hoặc lưu trữ học sinh. Kiểm thử trình duyệt mobile phải đi qua sai → giải thích → ôn câu cũ → biến thể số mới, giữ nguyên điểm lượt đầu. Đây là kiểm thử trong miền tham số đã định, không chứng nhận chung cho mọi mẫu mới về sau.

## Tính điểm, tránh nhầm trí nhớ với năng lực

- Điểm lượt đầu cố định; xem lại câu không tạo sự kiện trả lời mới.
- Ôn cùng ID sau khi xem đáp án chỉ là ôn tập.
- Biến thể khác ID và khác chữ ký tham số, làm ngay sau hướng dẫn, là **vận dụng có hỗ trợ**. Không tăng mastery theo một hệ số tùy ý.
- Mã kỹ năng ở catalog chỉ để hiển thị/điều hướng; chưa được đăng ký thành mastery, Core Readiness hay dữ liệu lịch sử.
- Pilot không chạm `toan-thcs-practice-v1`, `toan-thcs-assessment-v2`, Practice Engine hoặc Gemini adapter.

## Điều kiện mở rộng thư viện mẫu

Mỗi dạng bổ sung cần có: nguồn chương trình/lớp học, mô tả chính xác mục tiêu đo, miền tham số hợp lệ, công thức đáp án được kiểm tra độc lập, bộ phương án nhiễu không trùng giá trị, lời giải viết lại theo tham số, test biên và quy tắc gắn phiên bản/nguồn. Các mẫu có phép chia, căn, phương trình phải kiểm tra điều kiện xác định, nghiệm ngoại lai, nghiệm trùng và tính đầy đủ của tập nghiệm. Không đánh đồng thay số với tạo một họ bài mới về mặt năng lực.

**Hình học:** tiếp tục ưu tiên cặp bài–hình–lời giải đã kiểm định. Không tự thay số giữ hình cũ hoặc sinh hình AI rồi suy luận đáp án; muốn phát triển mẫu hình học phải có mô hình hình học và bộ dựng hình xác định, tính chất được kiểm chứng riêng.

**Bước triển khai sau pilot:** phản hồi học sinh về ba dạng, chọn mẫu nào thực sự phân biệt được lỗi, rồi mới thiết kế schema nội dung để tích hợp từng nhóm vào Practice Engine. Không chuyển đổi toàn bộ ngân hàng 25 chuyên đề hoặc dữ liệu cũ trong một lần.
