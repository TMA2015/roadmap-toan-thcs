# CĐ06 — kiểm định học thuật Phân tích đa thức thành nhân tử

**Ngày:** 26/09/2026 · **Trạng thái:** kiểm tra toán học và nội dung theo toàn bộ 120 câu; ánh xạ kỹ năng là bản review, chưa được engine sử dụng. [Ledger theo từng ID](../assets/data/curriculum/cd06-academic-qa-ledger-v1.json).

## Phạm vi kiểm định

| Nhóm bài | Câu | Phương pháp |
|---|---:|---|
| Phân tích thành nhân tử, gồm bài phối hợp | 92 | Đối chiếu đa thức chính xác bằng hệ số nguyên; kiểm tra yêu cầu về dạng tích |
| Chọn đẳng thức phân tích đúng | 8 | Đối chiếu hai vế đa thức cho cả 4 lựa chọn |
| Giải phương trình bằng phân tích | 12 | Đối chiếu tập nghiệm qua hệ số và biệt thức bậc hai |
| Lập luận chia hết cho số nguyên | 4 | Kiểm tra đẳng thức phân tích và các lớp dư modulo 2/6 |
| Tính giá trị số | 4 | Tính chính xác bằng số nguyên |
| **Tổng** | **120** | Mã QA độc lập với Practice Engine |

Đã đối chiếu ID, đáp án, tag gốc và blob SHA bốn chunk nguồn. Kiểm định hình thức đối với đa thức và đáp án **không đồng nghĩa** kiểm định học sinh đã thực hiện đúng mọi bước trung gian; đó là nhiệm vụ của phân tầng bằng chứng khi có rubric phù hợp.

## Những sửa đổi có căn cứ

**1. Bốn đáp án đặt nhân tử chung lớn nhất chưa đúng yêu cầu.** Trước đây đáp án chỉ đặt một nhân tử chung không lớn nhất dù kết quả vẫn tương đương đại số. Đã sửa phương án đúng và lời giải:

| ID | Đặt nhân tử chung đúng |
|---|---|
| `FAC06V1_004` | `10x²(x+2)` |
| `FAC06V1_007` | `12x(x²−2)` |
| `FAC06V1_011` | `6x(2x²−1)` |
| `FAC06V1_012` | `20x²(x²−1)` |

**2. Lời giải cho học sinh tự học.** Cả 16 câu `FAC06V1_077–092` đã có chuỗi biến đổi đến dạng phân tích hoàn toàn. Các câu `101–112` được viết lại lời giải nghiệm để bỏ dạng dấu âm sai kiểu `x--3`, cho thấy rõ tích bằng 0 và cả hai nghiệm.

**3. Bẫy trắc nghiệm dễ gây hiểu nhầm.** Có **20 phương án sai nhưng tương đương về giá trị đại số**: 13 phương án vẫn là tổng/chưa viết thành tích (`037`, `053–064`), và 7 phương án mới phân tích một phần trong câu yêu cầu *phân tích hoàn toàn* (`077,079,081,083,085,089,091`). Các phương án này vẫn là đáp án sai đúng theo yêu cầu bài, song lời giải đã nhấn mạnh phải phân biệt *biểu thức tương đương* với *đúng dạng kết quả được hỏi*. Đã làm gọn cách viết dấu của phương án gây nhiễu ở nhóm `053–064`.

**4. Một phương án nhiễu chia hết chưa tốt.** `FAC06V1_116` trước đó có cách viết tương đương về đại số khiến tiêu chí đúng/sai thiếu rõ ràng. Đã thay bằng một đẳng thức sai rõ ràng và thêm giải thích về tích hai số nguyên liên tiếp.

## Phản biện 24 câu chưa chọn primary skill

| Nhóm | ID | Điều thực sự quan sát được | Quy tắc tạm thời |
|---|---|---|---|
| Phối hợp phương pháp | `077–092` (16) | Kết quả phân tích **hoàn toàn** | Không tự cộng điểm riêng cho đặt nhân tử chung, HĐT và nhóm hạng tử khi bài chỉ có một đáp án |
| Ứng dụng chia hết | `113–116` (4) | Chọn lời giải thích chia hết hợp lệ | Không nhầm trắc nghiệm chọn lập luận với tự viết chứng minh |
| Ứng dụng tính nhanh | `117–120` (4) | Tính ra kết quả số | Không khẳng định học sinh thật sự dùng phương pháp phân tích thay vì phép tính thông thường |

Tất cả 24 dòng tiếp tục để `proposed_assessed_skill: null` trong [overlay CĐ06](../assets/data/curriculum/primary-skill-overlay-draft-06-phan-tich-da-thuc-v1.json). **Không tạo thêm 24 skill hay gộp toàn cục vào một kỹ năng mới.** Các câu vẫn dùng trong luyện tập theo cơ chế cũ. Muốn đo các bước riêng, cần thêm bài ngắn tách thao tác hoặc rubric chấm từng bước, không cộng nhiều mastery từ một câu.

## Lịch sử và khóa phiên bản

- Giữ nguyên 120 `question.id`, `tags.skill`, số câu và chỉ số đáp án; **bốn đáp án đúng đã thay đổi nội dung lựa chọn**, vì mục tiêu hỏi là *nhân tử chung lớn nhất*. Lượt làm cũ của bốn ID này **không tương đương hoàn toàn với phiên bản câu hiện tại**, không nên hồi tố hay gộp lại để kết luận mastery mới. Ledger có trường `source_version_key` theo ID + SHA tệp nguồn.
- Nội dung 46 câu đã được hiệu chỉnh ở những mức khác nhau (đáp án/lời giải/diễn đạt phương án nhiễu). Overlay nguồn và gói [toàn văn 24 câu cần review](../assets/data/curriculum/primary-skill-review-queue-06-07-v1.json) đã đồng bộ.
- Chưa sửa Practice Engine, Beta v2, learner localStorage v1/v2, Knowledge Graph hoặc tầng KNTT Core/Extension. Chưa có phê duyệt học thuật độc lập từ Gemini/giáo viên đối với từng câu.

[Mã kiểm thử](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/scripts/test-cd06-academic-qa.js) và workflow QA đã được thêm để chặn tái phát lỗi nguồn. **Tiếp theo:** kiểm định CĐ07 và tám trường hợp bài toán nhiều bước/tìm giá trị nguyên; giữ nguyên nguyên tắc phân biệt đáp án bài với kỹ năng được chấm độc lập.
