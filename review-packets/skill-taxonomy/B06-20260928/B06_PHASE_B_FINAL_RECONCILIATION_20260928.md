# B06 Pha B — Hợp nhất 35 ID CĐ09 (28/09/2026)

**Packet:** `MATH-SKILL-TAXONOMY-B06-20260928` · **Source main:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3` · **staging SHA đúng:** `b65389c9f63c2137a0872321d4170a84ab9f8e86` · **status:** `CONTENT_REVIEWED_WITH_TAXONOMY_AND_REVIEWER_QUALIFICATIONS` / `PROPOSAL_ONLY`.

## Coverage

- Bản đầu bị cắt sau 24 dòng đủ từ `SYS09MICRO_013–015` và `SYS09V1_089–109` (không đếm dòng 110 bị đứt).
- Bản nối tiếp bổ sung đúng 11 dòng `SYS09V1_110–120`, 11 PASS. Hợp nhất **35/35 unique IDs**, reviewer báo **35 PASS** đề/đáp án, không có ID thiếu/dư/trùng. Đây là ledger gộp hai bản, không tự dựng JSON 35 item mang danh NotebookLM.
- Ba bank gốc được đối chiếu ID/source answer index 0: micro blob `39b7154b7da71b818a367fdfe1d869caaa1bbfbd` (3), v1-03 blob `18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3` (2), v1-04 blob `09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f` (30). Staging SHA sai trong phần đầu `b65389c9f63c2137a08723f870014cf53bfed9` không khớp B06; phần tiếp theo ghi SHA đúng. Nguồn bank + item ID đã đối chiếu, không cần chạy lại.

## Phân định toán và evidence

- Các câu MCQ chọn hệ có sẵn, kể cả `SYS09MICRO_013`, `SYS09V1_089–120`, thuộc `full_system_recognition`, **không** tự xác minh khả năng viết hệ, giải, kiểm tra điều kiện. `SYS09MICRO_014` chỉ nhận dạng biểu thức `10x+y`, `SYS09MICRO_015` chỉ nhận dạng một phương trình chuyển động.
- `SYS09V1_111–120` thuộc số lượng–đơn giá–**doanh thu**, không phải năng suất làm việc. Legacy tag `nang-suat-he` được giữ trong source, ghi `sales_quantity_and_revenue` ở overlay đề xuất, chưa gộp/chuyển counter cũ.
- `SYS09V1_115`: `x+y=24; 3x+3y=72`. `116`: `x+y=21; 4x+4y=84`. Mỗi cặp phụ thuộc tuyến tính. Có vô số nghiệm **thực**, nhưng số nghiệm **nguyên không âm** lần lượt 25 và 22 (nếu hai loại đều bán ít nhất một: 23 và 20). Vì vậy không xác định duy nhất số lượng từng loại. Phương án nguồn A vẫn trả lời đúng câu “Hệ nào đúng?”; không coi hai câu là bài toán giải hệ cho kết quả duy nhất.
- `SYS09_NUM_SUM_DIFF`, `SYS09_MOTION_OPP` và `SYS09_REVENUE` gần cùng cấu trúc trong mỗi cụm. Không dùng clone để tạo skill atomic mới hay chứng nhận full independent mastery.

## Quyết định

Chỉ lưu `B06_PHASE_B_MAPPING_PROPOSAL.json` dưới dạng **PROPOSAL_ONLY**, mapping read-only chưa tích hợp. Không đổi ID/tag/source, engine, điểm người học, localStorage hay Core Readiness. B06 chưa đủ toàn bộ 71 ID cho tới khi Pha C (23 câu CĐ24) được kiểm định.

**Bàn giao:** dùng chính file **`04_COPY_TO_CHAT_B06_PHASE_C.txt`** đã có trong ZIP B06. Không cần prompt mới hoặc tải lại Sources. Chạy đúng 23 ID Pha C; không chạy lại A/B.