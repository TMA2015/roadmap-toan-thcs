# B06 — Báo cáo hợp nhất cuối, kiểm chứng lại source (28/09/2026)

**Packet:** `MATH-SKILL-TAXONOMY-B06-20260928`. **Locked main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`. **Source staging CĐ24 SHA:** `4c059bc165b25fae61810e8eb2c4a938cfc3862b`. **Status:** `CONTENT_REVIEWED_WITH_TWO_INDEPENDENT_CORRECTIONS` / `PROPOSAL_ONLY`.

## Coverage hoàn tất

- Phase A: 13/13 item IDs CĐ08, reviewer PASS 13.
- Phase B: 35/35 item IDs CĐ09 (bảng đầu 24 + continuation 11), reviewer PASS 35. Metadata SHA đầu báo cáo bị chép nhầm; SHA đúng đã được đối chiếu ở continuation. `SYS09V1_115/116` có phương trình phụ thuộc và thuộc bối cảnh doanh thu, không phải năng suất.
- Phase C: 23/23 unique IDs CĐ24, reviewer PASS 23, JSON summary có đủ expected/reviewed. Hợp nhất reviewer 71/71 PASS; **đó chỉ là kết quả do reviewer báo, không phải nghiệm thu toán cuối**.
- Kiểm tra độc lập các bản ghi source CĐ24 thấy **2 ID phải sửa** trước khi công bố có đáp án MCQ duy nhất/tình huống thực tế khả thi. Do đó trạng thái đối soát toàn B06 là **69 PASS + 2 REVISION_REQUIRED**, 0 missing, trong phạm vi 71 ID. Mỗi source ID vẫn giữ nguyên; không đưa lỗi nguồn vào bảng điểm của học sinh.

## Hai ngoại lệ Pha C bị reviewer bỏ sót

1. `MOD24V1__058`: Options A `(x+4)+(3x+4)=56` và D `x+4+3x=52` **tương đương** (A trừ 4 cả hai vế cho D). Đề hỏi “Phương trình là” không bắt buộc bản viết chưa biến đổi, nên A và D đều là mô hình đúng. Answer index 0 đơn nhất không hợp lệ về chất lượng câu trắc nghiệm. Đề xuất sửa D thành `x+4+3x=56` (mô hình sai do không cộng 4 cho mẹ) và QA lại tính duy nhất.
2. `MOD24V1__069`: 40 món, bút 5000đ, vở 12000đ, tổng 300000đ ⇒ x+y=40 và 5000x+12000y=300000 ⇒ 7000y=100000 ⇒ y=100/7, x=180/7. Hệ trong option A **dịch đúng dữ kiện**, nhưng không thể là số bút/vở nguyên không âm. Đây là lỗi **tính khả thi của bài toán thực tế**, khác lỗi đáp án index; đề xuất chỉnh tổng giá thành thành **298.000đ** để y=14, x=26, đổi đồng bộ đề và options, sau đó QA. Không được âm thầm coi PASS toàn diện khi còn vướng này.

## Exact clone pairs, không chỉ một cặp

- `MOD24MICRO_010` ↔ `MOD24V1__051`.
- `MOD24MICRO_011` ↔ `MOD24V1__061`.
- `MOD24MICRO_012` ↔ `MOD24V1__062`.

Cả ba cặp trùng question/options/answer/explanation (khác ID và bank); không cộng thành sáu bằng chứng độc lập. Bốn câu `011/012/061/062` chỉ chọn một **thành phần** hệ, không đo tự lập đủ hệ. Tám câu `063–070` nhận biết chọn hệ đầy đủ từ options nhưng **không đo independent_written_model_construction**.

## Tóm tắt skill taxonomy ứng viên

Lớp khái niệm: mô hình một phương trình/bất phương trình và mô hình hệ hai ẩn. Lớp nhiệm vụ: biểu diễn đại lượng → nhận diện một phương trình → nhận diện một phương trình thành phần → nhận diện cả hệ → tự viết mô hình → giải → đối chiếu điều kiện thực tế. Lớp bối cảnh: số, tuổi, hình học, chuyển động, năng suất công việc, pha dung dịch, bán hàng/doanh thu. `context` không tự động là assessed skill. Để xác nhận mastery phải có bài viết độc lập, khác clone.

## Tình trạng phát hành

Bản đối soát và overlay JSON là **review-only**. PR sửa câu hỏi tách riêng phải qua kiểm tra JSON, math và kiểm thử giao diện trước khi owner duyệt merge/deploy. Không thay question IDs, legacy tags hay bộ đếm, không nhập kết quả `PROPOSAL_ONLY` vào Core Readiness. File source NotebookLM B06 giữ nguyên để truy vết.
