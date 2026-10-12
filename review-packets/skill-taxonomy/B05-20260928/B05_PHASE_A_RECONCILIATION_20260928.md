# B05 Pha A — Biên bản đối chiếu học thuật (28/09/2026)

**Packet:** `MATH-SKILL-TAXONOMY-B05-20260928` · **source main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3` · **phạm vi:** 28 item CĐ08 · **quyết định:** `CONTENT_REVIEWED_WITH_REVIEWER_MATH_CORRECTION`, `PROPOSAL_ONLY`. Báo cáo được gửi qua file người chủ dự án, có một bảng 28/28 ID hoàn chỉnh và JSON summary 24 PASS + 4 REVISION_REQUIRED. Không dùng kết quả này làm chứng nhận đã chỉnh runtime.

## Đối chiếu và ngoại lệ bắt buộc

- `EQ08V1_047–050`: lỗi ký hiệu `x--4`, `x--3`, `x--2`, `x--1` có trong bank source. Sửa **đề và lời giải giải thích** thành `x+4`, `x+3`, `x+2`, `x+1`; đáp án ĐKXĐ dự kiến vẫn giữ. Không thay ID, options answer index, tags hoặc learner data. Sau sửa phải kiểm thử render MathJax và QA toán riêng.
- Reviewer đã ghi `EQ08V1_067` vô nghiệm, **SAI**: `(x²−4)/(x−2)=0`, điều kiện `x≠2`; từ `(x−2)(x+2)=0` có ứng viên `x=2,-2`; loại 2, nhận -2, **`S={-2}`**. Option nguồn “x=2 bị loại” vẫn đúng. Đây là **reviewer math error**, không phải lý do tự động đổi answer index của bank.
- Các tập nghiệm đầy đủ khi kiểm tra `EQ08V1_067–072` theo bản nguồn:
  - `067`: `{-2}`.
  - `068`: `R\\{3}` vì `(x−3)/(x−3)=1` với mọi x khác 3.
  - `069`: `R\\{-1}` vì `(x+1)/(x+1)=1` với mọi x khác -1.
  - `070`: `∅` vì sau rút gọn x+3=6 ⇒ x=3 bị loại.
  - `071`: `{2}` vì sau rút gọn x−2=0 ⇒ x=2 nhận; x=0 bị loại.
  - `072`: `∅` vì sau rút gọn x+1=6 ⇒ x=5 bị loại.
  Các nhận xét đúng trong option nguồn về việc loại giá trị làm mẫu bằng 0 vẫn giữ. Nên cải thiện lời giải tổng kết cho sáu bài để học sinh phân biệt **giá trị bị loại** với **tập nghiệm cuối cùng**.
- Micro-test mới từ reviewer `(x²−3x)/(x−3)=2`: điều kiện x≠3; sau khử mẫu có (x−3)(x−2)=0; `S={2}`. Đúng toán; chỉ là học liệu ứng viên, chưa thêm bank.
- Bảng 28/28 và summary 24+4 là đủ để lưu coverage theo ID. Tuy nhiên reviewer tự viết một kết luận toán sai ở 067; không được tuyên bố `ALL_MATH_REVIEW_PASSED` hoặc coi kết luận ngoại lai của reviewer là chuẩn. Status máy đọc chỉ dành cho summary, không có 28 object chi tiết.
- Chỉ đề xuất clone/target role, không cộng mastery, không đổi legacy counters, `runtime_enabled=false`, `core_readiness_credit=false`.

## QA và bàn giao Pha B

Chỉ giữ Master Plan v1.1, Math Permanent v1.1, B05 source. Dùng câu lệnh Phase B *có ghi chú hiệu chỉnh Phase A* đi kèm; không chạy lại 28 câu. Pha B chỉ audit 23 câu CĐ11 và căn ở tử/mẫu (>=0 vs >0), các cụm trùng; sau đó ChatGPT hợp nhất đúng hai pha.
