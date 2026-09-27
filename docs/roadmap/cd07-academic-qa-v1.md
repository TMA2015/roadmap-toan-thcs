# CĐ07 — kiểm định học thuật Phân thức đại số

**Ngày:** 27/09/2026 · **Trạng thái:** kiểm định nội dung và đáp án theo đủ 120 ID; overlay kỹ năng chính chưa được Practice Engine hay Beta v2 sử dụng.

## Phương pháp và kết quả

Nguồn là bốn tệp ngân hàng hiện hành CĐ07, có khóa Git blob SHA riêng cho mỗi tệp. Kiểm thử số học chính xác bằng BigInt và các phép toán trên đa thức/phân thức một biến, không chỉ thay vài giá trị x. Ngoài ra kiểm tra nghiệm mẫu, miền xác định, chia hết số nguyên, và ngữ nghĩa đúng/sai của câu nhận biết.

| Nhóm câu | Số câu | Bằng chứng kiểm định |
|---|---:|---|
| Nhận biết phân thức, ĐKXĐ, bằng nhau, đổi dấu | 38 | Khái niệm, nghiệm mẫu và đẳng thức phân thức |
| Phân tích tử/mẫu và rút gọn, giữ điều kiện | 32 | Đồng nhất thức đa thức/phân thức và miền gốc |
| Mẫu thức chung và cộng/trừ | 22 | Mẫu chung và phép tính phân thức chính xác |
| Nhân/chia | 16 | Tích/thương phân thức |
| Biểu thức nhiều phép tính | 6 | Kết quả và điều kiện xác định đồng thời |
| Thay giá trị và tìm giá trị nguyên | 6 | Số học và kiểm tra ước số chính xác |
| **Tổng** | **120** | [Ledger chi tiết theo ID](../assets/data/curriculum/cd07-academic-qa-ledger-v1.json) |

Không phát hiện phương án đáp án được đánh dấu sai trong phép kiểm chính xác. **Kiểm định đáp án không chứng minh học sinh đã sử dụng một phương pháp cụ thể** khi trả lời trắc nghiệm. Bản kiểm thử không thay thế phản biện độc lập của giáo viên/Gemini.

## Hiệu chỉnh cho người tự học

- Câu `017–024`: ghi rõ phép phân tích mẫu và hai giá trị bị loại.
- `039–046`: hiển thị đẳng thức phân tích nhân tử thay vì lời giải chung chung.
- `047–062`: nhấn mạnh kết quả chỉ tương đương với phân thức ban đầu **trên miền xác định gốc**.
- `063–080`: làm rõ lý do giữ điều kiện sau khi rút gọn, và điều kiện chọn mẫu thức chung.
- `081–086`: hỏi *tính và rút gọn*; ba đáp án `082, 084, 086` được đưa về dạng tối giản lần lượt `2/x`, `3/x`, `4/x`.
- `087–108`: nêu rõ các điểm loại khi cộng/trừ, nhân và chia phân thức, kể cả yêu cầu phân thức chia phải khác 0.
- `109–114`: nêu đầy đủ miền `x ≠ 0, ±a` trước khi kết luận biểu thức bằng 1. Triệt nhân tử không làm mất các điểm bị loại.
- `115–120`: giải thích kiểm tra mẫu khi thay số và liệt kê tường minh các giá trị nguyên sau khi xét ước.

Tổng cộng **90 câu** đã có thay đổi ở câu hỏi và/hoặc lời giải, trong đó **3 câu đổi văn bản đáp án đúng** thành dạng tối giản (không đổi giá trị toán học hoặc vị trí đáp án). Giữ nguyên tất cả `question.id`, `tags.skill`, số câu và `answer` index. Dữ liệu lượt làm cũ vẫn nguyên; không suy diễn hay tính lại mastery từ phiên bản cũ.

## Tám trường hợp không gán primary tự động

| ID | Điều một câu trắc nghiệm có thể cho thấy | Quyết định |
|---|---|---|
| `RAT07V1_109–114` | Tính được kết quả cuối của biểu thức nhiều phép tính, trên miền xác định | Giữ `proposed_assessed_skill=null`; không chấm đồng thời cộng/trừ, nhân và kiểm tra điều kiện từ một câu |
| `RAT07V1_119–120` | Tìm được các x nguyên bằng biến đổi phân thức và xét ước | Giữ `null` tới khi xác định đúng tầng Core/Extension, không mở skill mới chỉ vì có hai bài |

Trong ngân hàng hiện có **8 câu chỉ gắn tag `giu-dieu-kien-ban-dau`** (`063–070`): phải kiểm định câu sẵn có trước khi tạo micro-test trùng lặp. Nhóm cha/phương pháp/bối cảnh tiếp tục không nhận điểm mastery tự động khi câu chỉ có một đáp án.

[Overlay CĐ07 theo từng ID](../assets/data/curriculum/primary-skill-overlay-draft-07-phan-thuc-dai-so-v1.json) và [full-text queue 8 câu](../assets/data/curriculum/primary-skill-review-queue-06-07-v1.json) đã được đồng bộ và khóa lại theo SHA của bốn tệp nguồn.

## Bất biến và bước tiếp theo

Không thay đổi Practice Engine, Beta v2, Knowledge Graph, tên repo/Pages path, Firebase, Gemini hoặc localStorage. **Tên website hiển thị mới Self-Learning Math không làm đổi nguồn học liệu.** Bốn bản overlay CĐ04–07 vẫn chỉ là dữ liệu review, không phải đã kích hoạt đánh giá mới trên toàn site.

Khi hoàn tất đợt này, dữ liệu câu hỏi CĐ04–07 đã có QA toán học theo phương pháp cụ thể; giai đoạn tiếp theo nên xử lý **39 ca kỹ năng chưa duyệt** bằng mục tiêu học tập/rubric rõ ràng, không gộp tag hàng loạt. Kiểm tra xem 4 câu CĐ06 đã đổi nội dung đáp án có được gắn version trong bằng chứng tương lai trước khi bật mastery.

Mã kiểm thử: [CĐ07 QA script](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/scripts/test-cd07-academic-qa.js).
