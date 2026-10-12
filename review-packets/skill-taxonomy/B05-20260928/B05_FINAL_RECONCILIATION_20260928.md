# B05 — Biên bản hợp nhất A+B, có đính chính độc lập

**Packet:** `MATH-SKILL-TAXONOMY-B05-20260928`. **Main source SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Trạng thái:** `CONTENT_REVIEWED_WITH_REVISIONS`, `PROPOSAL_ONLY`. Không đồng nghĩa với production PASS, không thay dữ liệu người học.

## Coverage đã đối chiếu

- Pha A (CĐ08): 28/28 unique IDs (`EQ08MICRO_005–006`, `EQ08V1_047–072`), 24 PASS và 4 REVISION_REQUIRED (`EQ08V1_047–050`). Bảng đủ ID và JSON summary hợp lệ; riêng một nhận xét độc lập của reviewer về tập nghiệm `EQ08V1_067` là sai và đã được sửa trong biên bản pha A.
- Pha B (CĐ11): 23/23 unique IDs (`RAD11MICRO_002`, `RAD11V1_011–032`), 21 PASS và 2 REVISION_REQUIRED (`RAD11V1_014`, `RAD11V1_021`). Bảng đủ ID và JSON summary có tổng 23.
- Hợp nhất theo hai bảng riêng: **51/51 IDs**; **45 PASS + 6 REVISION_REQUIRED + 0 missing**. Không bịa một báo cáo JSON 51 item nguyên bản của NotebookLM; đây là biên bản hợp nhất do ChatGPT lập.
- Tag occurrences CĐ08 27 `dkxd-phuong-trinh-mau` + 7 `doi-chieu-nghiem` + 12 `khu-mau-phuong-trinh`, có giao nhau; CĐ11 23 `dkxd-can`. Không lấy tag occurrences làm số kỹ năng atomic.

## Lỗi trình bày cần sửa trước khi nghiệm thu nội dung

1. `EQ08V1_047–050`: mẫu `x--4`, `x--3`, `x--2`, `x--1` phải chuẩn hóa `x+4`, `x+3`, `x+2`, `x+1` trong đề và giải thích. Không đổi answer index, options, ID hoặc tags.
2. `RAD11V1_014`, `RAD11V1_021`: `\\sqrt{4x+0}`→`\\sqrt{4x}`, `\\sqrt{3x+0}`→`\\sqrt{3x}` trong đề/lời giải, không đổi điều kiện `x≥0`.
3. `RAD11V1_030–032` gần như trùng nguyên văn và phương án của `RAD11V1_023–025`; giữ làm formative là một đề xuất, không coi ba câu này tăng độc lập mức mastery.
4. Một số nhận xét nói “ngân hàng CĐ11 không có phân thức căn phức hợp”, nhưng gói chỉ chứa **23 câu có tag `dkxd-can`**, không phải audit mọi câu trong ngân hàng CĐ11. Chỉ kết luận **phạm vi B05 thiếu bài phức hợp**, yêu cầu corpus/scope mở rộng để khẳng định toàn bộ.

## Đính chính tập nghiệm: không trộn giá trị bị loại và nghiệm gốc

- `EQ08V1_067`: `(x²−4)/(x−2)=0`, x≠2 ⇒ **S={−2}**, không vô nghiệm. Option nguồn “x=2 bị loại” vẫn đúng.
- `EQ08V1_068`: `S=R\\{3}`; `069`: `S=R\\{−1}`; `070`: `S=∅`; `071`: `S={2}`; `072`: `S=∅`.
- Micro-test pha A `(x²−3x)/(x−3)=2`: x≠3, S={2}; ứng viên x=3 bị loại, đây chỉ là học liệu ứng viên.

## Kết luận phân loại — đề xuất, chưa bật mapping

Chuỗi nhiệm vụ: **lập miền gốc** (mẫu≠0, radicand≥0, căn ở mẫu>0) → **bảo toàn miền qua biến đổi/khử mẫu** → **tạo và đối chiếu ứng viên nghiệm**. Đích đo phải tách dạng nhận diện MCQ so với tự giải từng bước. Lưu clone groups mà không tự gộp legacy counters. Không suy ra tần suất thi từ ngân hàng tự biên soạn.

## Bàn giao

- Chuẩn bị PR sửa ký hiệu riêng, QA render và toán trước khi xét merge; không triển khai sửa lên production theo biên bản này.
- Vòng taxonomy tiếp theo xem mô hình hóa CĐ08/09/24: `lap-phuong-trinh`, `lap-he-bai-toan`, `lap-he` và context `chuyen-dong(-he)`, `nang-suat(-he)`; cần full-text source SHA.
