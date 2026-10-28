# Toán 10 KNTT Chương VIII — Written/Anchor draft v0.1

**DRAFT_NOT_ACADEMICALLY_REVIEWED**, chưa triển khai trong website, không ghi mastery. Written dùng một ngân hàng; Anchor là nhãn trên Written (không nhân bản câu). Nguồn S1: SGK tr.60–79, SBT tr.50–59.

## THPT-G10-CHVIII-W23-01 · Bài 23 · Written, 6 điểm

**Đề:** Một cửa hàng cho khách tự thiết kế bộ quà gồm 1 trong 3 loại hộp, 1 trong 4 loại bánh, và 1 trong 2 kiểu thiệp. (a) Có bao nhiêu bộ quà? (b) Nếu có thêm hai màu ruy băng và mỗi bộ cần đúng một màu, số cách mới là bao nhiêu?

**Giải:** (a) Quy tắc nhân \(3\cdot4\cdot2=24\). (b) Có thêm hai lựa chọn độc lập: \(24\cdot2=48\).

**Rubric /6:** nêu đúng các bước (2), phép nhân thứ nhất (2), phép nhân thứ hai & giải thích (2). **Lỗi hay gặp:** cộng số lựa chọn ở các bước bắt buộc.

## THPT-G10-CHVIII-W24-ANCHOR-01 · Bài 24 · Written + Anchor, 8 điểm

**Đề:** Có 6 học sinh nam và 5 học sinh nữ. (a) Chọn nhóm gồm đúng 2 nam và 2 nữ, không phân vai. (b) Trong mỗi nhóm đã chọn, cử **một** đội trưởng. Có tất cả bao nhiêu cách lập nhóm có đội trưởng?

**Giải:** (a) \(\binom62\binom52=15\cdot10=150\) nhóm. (b) Mỗi nhóm 4 người có 4 lựa chọn đội trưởng: \(150\cdot4=600\).

**Rubric /8:** xác định chọn tổ hợp nam (2), tổ hợp nữ (2), nhân đúng ra 150 (2), chọn đội trưởng & ra 600 (2).

**Misconception và phân tầng:** (a) không xét thứ tự; (b) thêm vai trò có thứ tự trong bước riêng. Một \`item_id\`, \`anchor_tag=true\`, không tạo câu lặp cho Topic Written.

## THPT-G10-CHVIII-W25-01 · Bài 25 · Written, 6 điểm

**Đề:** Dùng nhị thức Newton khai triển \((x-2)^4\), rồi tìm (a) hệ số \(x^2\) và (b) tổng các hệ số.

**Giải:** \((x-2)^4=x^4-8x^3+24x^2-32x+16\). (a) Hệ số \(x^2\) là \(24\). (b) Thay \(x=1\) được \(1-8+24-32+16=1\), cũng bằng \((1-2)^4=1\).

**Rubric /6:** vận dụng hệ số Newton (2), khai triển và dấu (2), xác định hệ số (1), tổng hệ số & đối chiếu (1).

**Safety and release:** ba đề đều là **Practice/Written có lời giải đã biết**, không được chuyển nguyên sang Readiness độc lập nếu học sinh có thể xem đề/đáp án. Cần QA NotebookLM theo Chương VIII sau khi hoàn thiện kiến thức và outcome coverage. Không phát hành/merge/deploy.
