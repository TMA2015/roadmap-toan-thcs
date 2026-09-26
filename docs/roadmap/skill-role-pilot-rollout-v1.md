# Chốt thí điểm tinh gọn 10 cặp kỹ năng — và kế hoạch tích hợp an toàn

**Ngày:** 26/09/2026 · **Trạng thái:** phản biện mẫu đã đối soát, đề xuất triển khai; chưa đổi engine/ngân hàng/đồ thị.

## Kết quả vòng phản biện Gemini

Gemini đã xem 10 câu đại diện và đồng ý trọng tâm: một đích đo chính mỗi câu 1 điểm; phương pháp/bối cảnh/nhóm kiến thức không tự nhận mastery. Điều chỉnh đáng giá: `ID05V1_021` đo cụ thể **hiệu hai bình phương**, `phan-tich-hdt` là nhóm hiển thị trong câu này. `ID05V1_061` tương tự đo bình phương hoàn chỉnh dưới nhóm nhận dạng HĐT.

**Hai giới hạn cần giữ rõ:** (1) Nhóm cha trên giao diện chỉ để tổ chức nội dung, **không** mặc nhiên là kỹ năng phải đạt hoặc là cạnh `PREREQUISITE`; (2) vai trò một tag thay đổi theo mục đích của từng câu. Trong câu khác, kỹ năng hiện chỉ là supporting có thể là đích đo chính. Không áp phép gộp toàn cục từ 10 ví dụ.

## Xếp loại 10 câu mẫu

| Câu | Assessed skill chính | Nhãn bổ trợ/bối cảnh | Quy tắc hiển thị |
|---|---|---|---|
| ALG04V2_037 | `cong-tru-da-thuc` | `bo-ngoac-dau`: hỗ trợ và lỗi dấu riêng | Chỉ ghi bằng chứng độc lập khi hỏi riêng bước bỏ ngoặc. |
| ALG04V2_051 | `nhan-bieu-thuc` | `tinh-phan-phoi`: phương pháp | Một thanh đo; giữ quy tắc trong lời giải. |
| ALG04V2_111 | `lap-bieu-thuc` | `bai-toan-thuc-te`: bối cảnh | Có thể lọc câu theo bối cảnh, không tạo mastery bối cảnh. |
| ID05V1_061 | `binh-phuong-hoan-chinh` | `nhan-dang-hdt`: nhóm cha | Không suy ra nắm mọi HĐT từ một câu. |
| ID05V1_021 | `hieu-hai-binh-phuong` | `phan-tich-hdt`: nhóm cha | Câu này đo công thức cụ thể; không cộng thêm điểm cho nhóm. |
| RAT07V1_025 | `hai-phan-thuc-bang-nhau` | `giu-dieu-kien-ban-dau`: kiểm soát miền xác định | Giữ khả năng đo riêng; bài trực tiếp sẵn có RAT07V1_063 trở đi. |
| SYS09V1_029 | `so-nghiem-he` | `y-nghia-hinh-hoc`: biểu diễn hình học | Cần câu có đồ thị mới đo đọc hiểu hình độc lập. |
| SYS09V1_089 | `lap-he-bai-toan` | `bai-toan-so`: bối cảnh | Bộ lọc tình huống, không tạo mastery. |
| FUN10V1_103 | `giao-diem-do-thi` | `lien-he-he-phuong-trinh`: phương pháp/liên hệ | Hướng dẫn cách tìm giao điểm; không chấm 2 thanh từ một đáp án. |
| RAD11V1_043 | `dua-thua-so-ra` | `khai-phuong-tich`: nền | Muốn chẩn đoán điều kiện quy tắc cần câu đo riêng. |

Các nhận xét trên đã ghi vào `docs/assets/data/curriculum/skill-role-pilot-04-11-v1.json`. 10 câu mẫu có toàn văn trong `docs/roadmap/gemini-question-evidence-10-cases-2026-09-26.md`.

## Không làm ồ ạt micro-test

Đã có 8 câu gắn duy nhất `giu-dieu-kien-ban-dau` (ví dụ `RAT07V1_063`) nên **QA bài đang có trước khi biên soạn lại**. Ngược lại, 12 câu `bo-ngoac-dau` không chung tag với `cong-tru-da-thuc` vẫn là bài rút gọn nhiều bước, chưa phải phép đo sạch lỗi dấu. Draft bốn micro-item cho **lỗi dấu** và **quy tắc khai phương tích** nằm trong `docs/assets/data/curriculum/skill-diagnostic-micro-pilot-v1.json`, chưa vào loader. Bài đọc đồ thị hình học cần minh họa được thẩm định riêng; không tự tạo một mastery từ hình chưa có.

## Kế hoạch triển khai có kiểm soát

1. **Đóng băng lịch sử:** giữ `question.id`, `tags.skill`, khóa localStorage `toan-thcs-practice-v1` và mọi số liệu quá khứ. Không cộng lại alias hoặc gán lại kỹ năng chính cho lượt làm cũ thiếu chứng cứ.
2. **Xác thực toàn ngân hàng trước khi quy tắc chạy tự động:** mỗi câu mới phải có một `assessed_skill` hợp lệ; `supporting_skills`, `method`, `context` tùy chọn. Khi import file cũ, chỉ suy ra primary từ mapping **đã duyệt theo câu hoặc một nhóm câu được kiểm định**, không tự chọn phần tử thứ nhất trong `tags.skill`.
3. **Bằng chứng mới tách khỏi thống kê cũ:** thử nghiệm lưu dưới khóa mới, ví dụ `toan-thcs-assessment-v2`, gồm `question_id`, `assessed_skill`, `correct`, nguồn Practice/Readiness, số gợi ý; không phát sinh 2 bộ đếm skill chỉ từ một câu trắc nghiệm. Bảng thống kê v1 vẫn hiển thị là “Thống kê luyện tập theo tag” trong giai đoạn quá độ, không gọi là mastery đã xác nhận.
4. **Giao diện đơn giản:** nhóm cha để điều hướng, tối đa vài kỹ năng đo thiết yếu trong một nhóm; bối cảnh chỉ phục vụ lọc bài; sau câu sai đưa một gợi ý bù cụ thể, không khóa tiến độ.
5. **QA hồi quy:** kiểm tra v1 trước/sau trả lời; không mất lịch sử; câu có hai tag cũ chỉ sinh một assessed evidence v2; kiểm tra không dangling link; kiểm tra bài mới và bài cũ trên máy/điện thoại; build/deploy/QA độc lập trước rollout.

### Chưa được coi là hoàn tất

Chưa QA toàn bộ 996 câu về *ý nghĩa* tag; chưa gắn assessed skill chính cho mọi câu; chưa xây graph hình; chưa sửa Practice Engine hoặc Learner Evidence; chưa chạy build/CI cho một thay đổi runtime. Bản thí điểm hiện là **dữ liệu phản biện và blueprint**, không phải chức năng đã triển khai trên website.
