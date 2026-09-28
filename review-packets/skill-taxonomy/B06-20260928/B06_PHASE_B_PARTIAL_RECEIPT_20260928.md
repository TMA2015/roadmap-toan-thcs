# B06 Pha B — Tiếp nhận kết quả bị cắt, chưa nghiệm thu 35/35

**Packet:** `MATH-SKILL-TAXONOMY-B06-20260928`; **main source SHA** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`; **correct staging blob SHA CĐ09:** `b65389c9f63c2137a0872321d4170a84ab9f8e86`; **status:** `PARTIAL_REVIEW_RECEIVED` / `PROPOSAL_ONLY`.

Nguồn báo cáo: tệp do chủ dự án gửi `Văn bản đã dán (1)(6).txt`, ba đoạn trả lời khởi động lại bảng rồi bị cắt. Bảng xa nhất đã có 24 dòng hoàn chỉnh đến `SYS09V1_109`; dòng thứ 25 `SYS09V1_110` bị đứt, không được tính PASS. Chưa có bảng 35/35 hoặc coverage JSON phase B. Không lấy tiêu đề “đủ 35” thay cho item-level evidence.

## Coverage

- Đã có dòng phản biện: `SYS09MICRO_013`, `SYS09MICRO_014`, `SYS09MICRO_015`, `SYS09V1_89`, `SYS09V1_90`, `SYS09V1_91`, `SYS09V1_92`, `SYS09V1_93`, `SYS09V1_94`, `SYS09V1_95`, `SYS09V1_96`, `SYS09V1_97`, `SYS09V1_98`, `SYS09V1_99`, `SYS09V1_100`, `SYS09V1_101`, `SYS09V1_102`, `SYS09V1_103`, `SYS09V1_104`, `SYS09V1_105`, `SYS09V1_106`, `SYS09V1_107`, `SYS09V1_108`, `SYS09V1_109`. **24/35**.
- Còn thiếu: `SYS09V1_110`, `SYS09V1_111`, `SYS09V1_112`, `SYS09V1_113`, `SYS09V1_114`, `SYS09V1_115`, `SYS09V1_116`, `SYS09V1_117`, `SYS09V1_118`, `SYS09V1_119`, `SYS09V1_120`. **11/35**.
- Báo cáo ghi staging SHA `b65389c9f63c2137a08723f870014cf53bfed9` — KHÔNG trùng với staging blob thực của B06. Main SHA/three original bank SHAs là căn cứ khóa khác; không cần cho người dùng tải lại source hay xem là 35 kết quả hợp lệ.
- Các nhãn `full_system_construction` đối với câu MCQ **chọn hệ có sẵn** cần được đọc ở mức `full_system_recognition`, không phải independent construction. `SYS09MICRO_015` chỉ hỏi một phương trình thành phần. `SYS09MICRO_014` đo biểu thức giá trị theo hàng số; `bai-toan-so` là bối cảnh, không nên chỉ dựa vào tên tag để coi đã lập hệ.

## Các cờ source-based cho 11 câu cần phản biện

- `SYS09V1_110` là bài nhận diện hệ chuyển động; cùng cấu trúc tham số với cụm 101–109.
- `SYS09V1_111–120` mô tả bán hàng, **số lượng + giá + doanh thu**, không hề là bài năng suất theo định nghĩa tốc độ làm việc. Tag lịch sử `nang-suat-he` là metadata context cần xem xét, không tự sửa source/tag trong vòng phản biện.
- `SYS09V1_115`: hệ `x+y=24, 3x+3y=72` gồm hai phương trình phụ thuộc, không xác định duy nhất `x,y`; `SYS09V1_116`: `x+y=21, 4x+4y=84` cũng vậy. Chọn đúng hệ là một việc, khẳng định có nghiệm duy nhất là một việc khác. Cần reviewer đánh giá tính phù hợp sư phạm của hai câu với câu hỏi chỉ “Hệ nào đúng?” và độ đa dạng của distractors/clone.
- Source gốc của nhóm 109–120: `docs/assets/data/practice/09-he-phuong-trinh-v1-04.json`, Git blob `09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f`.

## Điều kiện khép vòng

Chỉ đề nghị NotebookLM tiếp tục 11 ID còn thiếu, một bảng 11 dòng + JSON coverage **riêng 11 ID**. ChatGPT sẽ đối chiếu và hợp nhất 24+11; không in lại bảng 35 câu hoặc tự chấm PASS các câu chưa được reviewer trả. Pha C chỉ khởi chạy sau khi nhận đủ B. Không merge/deploy runtime/learner data vì biên bản.
