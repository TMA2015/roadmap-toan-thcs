BÁO CÁO KIỂM TOÁN HỌC THUẬT ĐỘC LẬP
**GÓI PHÂN LOẠI VÀ PHÂN VỊ LỘ TRÌNH: `MATH-CT05-07-W3A-20261016`**
*(Dự án Self-Learning Math / G Learning — Master Plan v1.2.1 & Review Rules v1.2)*

---

### I. QUY TRÌNH KIỂM TOÁN VÀ THỨ BẬC CHỨNG CỨ (AUDIT METHODOLOGY)

1. **Cơ sở quy tắc & Phạm vi nguồn chứng cứ**:
   * Kiểm toán độc lập dựa strictly trên các nguồn được chọn trong Notebook: **Master Plan v1.2.1**, **NotebookLM Math Review Rules v1.2**, **Golden Architecture**, **Academic Source & Depth Audit Rules**, **Shared Written Exercise Library Contract v1**, gói **W3A Review Packet** (`MATH-CT05-07-W3A-20261016_NOTEBOOKLM_REVIEW.txt`), và bộ **SGK KNTT Toán 7, Toán 8 (S1)**.
   * Đã thẩm định **đúng và đủ 12/12 mã câu hỏi** thuộc 3 chuyên đề CĐ05 (7 Hằng đẳng thức), CĐ06 (Phân tích đa thức thành nhân tử), và CĐ07 (Phân thức đại số). không bỏ sót và không tự ý thêm mã ngoài phạm vi.

2. **Nguyên tắc Phân loại & Ranh giới Hệ thống (Protected Boundaries)**:
   * **Chứng cứ S1 (SGK KNTT)**: Toàn bộ 12 bài toán đều thuộc chương trình Toán 8 (Tập 1 cho CĐ05–06 và Tập 2 cho CĐ07). Vị trí chương, bài học và trang SGK đã được đối soát 100%.
   * **Phân định Hình thức & Vai trò học tập**:
     * Bài tập biến đổi 1 bước/tính toán đơn giản được chuyển sang dạng tương tác **`CONVERT_INTERACTIVE`** thuộc không gian Luyện tập (Formative Practice).
     * Bài trùng 100% biểu thức với bài mỏ neo WX đã xuất bản được gắn nhãn **`ARCHIVE_DUPLICATE`** (Canonical Pointer), tuyệt đối không tạo ID clone mới.
     * Bài chứng minh/giải thích lý thuyết nhiều bước hoặc phương pháp nâng cao được giữ dạng **`KEEP_WRITTEN`** thuộc Thư viện Tự luận dùng chung.
   * **Cấm tự động triển khai**: Quyết định **`PASS_FOR_PLACEMENT_REVIEW`** chỉ xác nhận tính đúng đắn toán học, vị trí SGK và phân loại học tập; **KHÔNG** đồng nghĩa với việc tự động duyệt phát hành, chạy code, migration dữ liệu hay gán điểm Core Readiness.

---

### II. BẢNG TỔNG HỢP KẾT QUẢ KIỂM TOÁN 12 CÂU HỎI (12-ROW AUDIT TABLE)

```text
PACKET_ID|MATH-CT05-07-W3A-20261016
EXPECTED=12
REVIEWED=12

05-WR-01 | PASS | exact | Formative Practice | ID05V1_002 | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 6, Tr. 30–33; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Khai triển đơn bước (x+3)^2=x^2+6x+9, đã có MCQ ID05V1_002, chuyển thành bài tập tương tác điền hệ số trên Practice Room. | PASS
05-WR-02 | PASS | related | Formative Practice / Canonical Pointer | WX05-IDN-001 | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 6, Tr. 31–33; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Khai triển (2x-5)^2 trùng MCQ ID05V1_019; nhu cầu tự luận mỏ neo nhận dạng ngược đã có WX05-IDN-001. Pointer về WX05-IDN-001 hoặc chuyển tương tác. | PASS
05-WR-05 | PASS | structural | Formative Practice | N/A | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 7, Tr. 34–37; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Khai triển lập phương một tổng (x+2)^3=x^3+6x^2+12x+8 cơ bản, chuyển thành bài tập tương tác điền hệ số. | PASS
05-ENT-01 | PASS | no | Shared Written Library (Paper Written Anchor) | N/A (Đề xuất WX mới) | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 7 & Luyện tập chung; Entrance10 / KNTT-Core Vận dụng cao Lớp 8) | KEEP_WRITTEN: Bài toán chứng minh A=(x-1)^3-(x+1)^3+6(x-1)(x+1)=-8 không phụ thuộc x đòi hỏi biến đổi 3 HĐT và thu gọn nhiều bước, giữ tự luận trình bày trên giấy. | PASS
06-WR-02 | PASS | exact | Shared Written Library (Canonical Pointer) | WX06-FAC-001 | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 10, Tr. 46–49; KNTT-Core Lớp 8) | ARCHIVE_DUPLICATE: Trùng 100% biểu thức 2x(x-y)+4(y-x) với WX06-FAC-001, tạo pointer canonical về WX06-FAC-001, không tạo ID mới. | PASS
06-WR-03 | PASS | structural | Formative Practice | N/A | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 10, Tr. 47–49; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Phân tích x^2-36=(x-6)(x+6) 1 bước áp dụng HĐT hiệu hai bình phương, chuyển thành bài tập tương tác trắc nghiệm/điền biểu thức. | PASS
06-ENT-02 | PASS | structural | Formative Practice | N/A | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 10 & SGK Toán 8 T2, Ch. VII; KNTT-Core / Entrance10 Lớp 8) | CONVERT_INTERACTIVE: Giải phương trình tích x^2-7x=0 => x=0 hoặc x=7, máy chấm chính xác 2 ô điền số nghiệm. | PASS
06-CH-01 | PASS | no | Specialized-Challenge / Shared Written Library | N/A | S1 Verified (SGK Toán 8 T1, Ch. II, Bài 11 Luyện tập chung; Specialized-Challenge Lớp 8) | KEEP_WRITTEN: Kỹ thuật Sophie Germain x^4+4=(x^2-2x+2)(x^2+2x+2) thêm bớt hạng tử thuộc tầng Thách thức, giữ bài tự luận trình bày trên giấy. | PASS
07-WR-01 | PASS | structural | Formative Practice | N/A | S1 Verified (SGK Toán 8 T2, Ch. VI, Bài 21, Tr. 5–9; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Nhận biết ĐKXĐ mẫu bậc nhất x-2 != 0 => x != 2, chuyển thành bài tập tương tác. | PASS
07-WR-07 | PASS | related | Formative Practice / Canonical Pointer | WX07-RAT-001 | S1 Verified (SGK Toán 8 T2, Ch. VI, Bài 22, Tr. 10–14; KNTT-Core Lớp 8) | CONVERT_INTERACTIVE: Rút gọn phân thức (x^2-4)/(x^2-2x) cơ bản, nhu cầu tự luận tự chấm kèm ĐKXĐ ban đầu đã có WX07-RAT-001 đảm nhiệm. | PASS
07-WR-10 | PASS | exact | Shared Written Library (Canonical Pointer) | WX07-RAT-002 | S1 Verified (SGK Toán 8 T2, Ch. VI, Bài 23, Tr. 15–20; KNTT-Core Lớp 8) | ARCHIVE_DUPLICATE: Trùng 100% biểu thức x/(x-1)-1/(x+1)-2/(x^2-1)=1 với WX07-RAT-002, tạo pointer canonical về WX07-RAT-002, không tạo ID mới. | PASS
07-WR-11 | PASS | related | Shared Written Library / Core Concept Check | WX07-RAT-001 / RAT07V1_063 | S1 Verified (SGK Toán 8 T2, Ch. VI, Bài 22, Tr. 12–13; KNTT-Core Lớp 8) | KEEP_WRITTEN: Bài toán giải thích lý thuyết bản chất miền xác định sau rút gọn (x^2-4)/(x-2)=x+2, giữ dạng tự luận lý thuyết hoặc MCQ khái niệm. | PASS
```

---

### III. HỒ SƠ KIỂM TOÁN CHI TIẾT TỪNG MÃ CÂU HỎI (EXACT SCHEMA RECORDS)

```text
source_id: 05-WR-01
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Khai triển (x+3)^2 = x^2 + 2*x*3 + 3^2 = x^2 + 6x + 9.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Hằng đẳng thức đáng nhớ và ứng dụng · Bài 6: Hiệu hai bình phương. Bình phương của một tổng hay một hiệu (Trang 30–33)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Khai triển bình phương của một tổng cơ bản dạng (A+B)^2.
misconception_or_trap: Quên hạng tử 2AB (viết thành x^2 + 9) hoặc tính sai 2*3*x thành 5x.
duplicate_status: VERIFIED_EXACT (Trùng cấu trúc và biểu thức với MCQ ID05V1_002 trên Practice Room).
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Điền 3 hệ số ứng với x^2, x, tự do: "1", "6", "9".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 05-WR-02
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Khai triển (2x-5)^2 = (2x)^2 - 2*(2x)*5 + 5^2 = 4x^2 - 20x + 25.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 6 (Trang 31–33)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Khai triển bình phương của một hiệu với hệ số A là đơn thức 2x.
misconception_or_trap: Quên bình phương hệ số 2 (viết 2x^2 - 20x + 25) hoặc sai dấu hạng tử cuối thành -25.
duplicate_status: SIMILAR_FAMILY (Trùng biểu thức với MCQ ID05V1_019; bài mỏ neo tự luận WX05-IDN-001 giải quyết bài toán nhận dạng ngược).
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Điền 3 hệ số: "4", "-20", "25".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 05-WR-05
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Khai triển (x+2)^3 = x^3 + 3*x^2*2 + 3*x*2^2 + 2^3 = x^3 + 6x^2 + 12x + 8.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 7: Lập phương của một tổng. Lập phương của một hiệu (Trang 34–37)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Khai triển lập phương của một tổng dạng (A+B)^3.
misconception_or_trap: Nhầm công thức thành x^3 + 8 hoặc sai hệ số 3A^2B (viết 3x^2 thay vì 6x^2).
duplicate_status: SIMILAR_FAMILY (Cùng họ khai triển lập phương với ID05V1_106).
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Điền 4 hệ số: "1", "6", "12", "8".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 05-ENT-01
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Ta có (x-1)^3 - (x+1)^3 = (x^3 - 3x^2 + 3x - 1) - (x^3 + 3x^2 + 3x + 1) = -6x^2 - 2. Lại có 6(x-1)(x+1) = 6(x^2 - 1) = 6x^2 - 6. Do đó A = (-6x^2 - 2) + (6x^2 - 6) = -8. Vì A = -8 không chứa biến x nên A không phụ thuộc vào x.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 7 & Luyện tập chung (Trang 36–38)
kntt_layer: Entrance10 / KNTT-Core Vận dụng cao (Lớp 8)
cognitive_objective: Vận dụng phối hợp nhiều hằng đẳng thức để chứng minh biểu thức có giá trị hằng số.
misconception_or_trap: Lỗi sai dấu khi trừ đa thức trong ngoặc -(x+1)^3 hoặc khai triển sai 6(x-1)(x+1).
duplicate_status: NO_DUPLICATE
recommended_route: KEEP_WRITTEN
answer_contract_if_nominated: Tự luận trình bày các bước khai triển, thu gọn và kết luận.
written_rubric_if_needed: Bước 1: Khai triển (x-1)^3 - (x+1)^3 = -6x^2 - 2 (1.5đ). Bước 2: Khai triển 6(x-1)(x+1) = 6x^2 - 6 (1đ). Bước 3: Thu gọn A = -8 và kết luận không phụ thuộc x (1.5đ).
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 06-WR-02
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: 2x(x-y) + 4(y-x) = 2x(x-y) - 4(x-y) = (x-y)(2x-4) = 2(x-y)(x-2).
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 10: Phân tích đa thức thành nhân tử (Trang 46–49)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Đổi dấu ngoặc đối y-x = -(x-y) để đặt nhân tử chung.
misconception_or_trap: Đổi dấu y-x nhưng quên đổi dấu cộng thành trừ trước hệ số 4; hoặc chưa phân tích triệt để nhân tử 2.
duplicate_status: VERIFIED_EXACT (Trùng 100% biểu thức với bài mỏ neo đã xuất bản WX06-FAC-001).
recommended_route: ARCHIVE_DUPLICATE
answer_contract_if_nominated: Pointer Canonical về WX06-FAC-001.
written_rubric_if_needed: N/A (Sử dụng Rubric của WX06-FAC-001).
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 06-WR-03
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: x^2 - 36 = x^2 - 6^2 = (x-6)(x+6).
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 10 (Trang 47–49)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Phân tích đa thức thành nhân tử bằng hằng đẳng thức hiệu hai bình phương.
misconception_or_trap: Viết sai thành (x-6)^2 hoặc (x-36)(x+36).
duplicate_status: SIMILAR_FAMILY
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Điền biểu thức tích: "(x-6)(x+6)".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 06-ENT-02
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: x^2 - 7x = 0 <=> x(x-7) = 0 <=> x = 0 hoặc x - 7 = 0 <=> x = 0 hoặc x = 7.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 10 & SGK Toán 8 T2, Ch. VII (Trang 48, 30–35)
kntt_layer: KNTT-Core / Entrance10 (Lớp 8)
cognitive_objective: Vận dụng phân tích đa thức thành nhân tử để giải phương trình tích.
misconception_or_trap: Bỏ sót nghiệm x = 0 do chia cả hai vế cho x khi chưa biết x != 0.
duplicate_status: SIMILAR_FAMILY
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Ô điền tập nghiệm hoặc 2 ô điền số: "0", "7".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8.

source_id: 06-CH-01
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: x^4 + 4 = x^4 + 4x^2 + 4 - 4x^2 = (x^2 + 2)^2 - (2x)^2 = (x^2 + 2 - 2x)(x^2 + 2 + 2x) = (x^2 - 2x + 2)(x^2 + 2x + 2).
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương II: Bài 11 Luyện tập chung (Bài tập nâng cao, Trang 50)
kntt_layer: Specialized-Challenge (Lớp 8)
cognitive_objective: Sử dụng kỹ thuật thêm bớt hạng tử để tạo dạng hiệu hai bình phương (Đồng nhất thức Sophie Germain).
misconception_or_trap: Thêm bớt sai hạng tử hoặc dừng lại ở (x^2+2)^2 - 4x^2 chưa biến đổi thành tích hai nhân tử bậc 2.
duplicate_status: NO_DUPLICATE
recommended_route: KEEP_WRITTEN
answer_contract_if_nominated: Tự luận trình bày các bước thêm bớt, nhóm HĐT và phân tích thành tích.
written_rubric_if_needed: Bước 1: Thêm và bớt 4x^2 để tạo (x^2+2)^2 - (2x)^2 (2đ). Bước 2: Áp dụng A^2-B^2 phân tích thành (x^2-2x+2)(x^2+2x+2) (2đ).
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 1.

source_id: 07-WR-01
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Phân thức 3/(x-2) xác định khi mẫu thức x - 2 != 0 <=> x != 2.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương VI: Phân thức đại số · Bài 21: Phân thức đại số (Trang 5–9)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Tìm điều kiện xác định của phân thức đại số có mẫu thức bậc nhất.
misconception_or_trap: Cho tử thức khác 0 hoặc nhầm dấu x != -2.
duplicate_status: SIMILAR_FAMILY
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Điền điều kiện: "x != 2" (hoặc chọn đáp án x != 2).
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 2.

source_id: 07-WR-07
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Điều kiện xác định: x^2 - 2x != 0 <=> x(x-2) != 0 <=> x != 0 và x != 2. Rút gọn: A = (x-2)(x+2) / [x(x-2)] = (x+2)/x. Kết luận: A = (x+2)/x với x != 0, x != 2.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương VI: Bài 22: Tính chất cơ bản của phân thức đại số (Trang 10–14)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Rút gọn phân thức đại số và bảo toàn điều kiện xác định ban đầu.
misconception_or_trap: Bỏ qua ĐKXĐ x != 2 sau khi rút gọn triệt tiêu nhân tử (x-2).
duplicate_status: SIMILAR_FAMILY (Bài mỏ neo tự luận WX07-RAT-001 đảm nhiệm câu hỏi rút gọn phân thức kèm ĐKXĐ).
recommended_route: CONVERT_INTERACTIVE
answer_contract_if_nominated: Ô1 nhập biểu thức rút gọn "(x+2)/x"; Ô2 nhập ĐKXĐ "x != 0, 2".
written_rubric_if_needed: N/A
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 2.

source_id: 07-WR-10
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: ĐKXĐ: x != 1 và x != -1. Ta có x^2 - 1 = (x-1)(x+1). Quy đồng mẫu thức chung (x-1)(x+1): A = [x(x+1) - (x-1) - 2] / [(x-1)(x+1)] = (x^2 + x - x + 1 - 2) / (x^2 - 1) = (x^2 - 1) / (x^2 - 1) = 1.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương VI: Bài 23: Phép cộng và phép trừ phân thức đại số (Trang 15–20)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Thực hiện chuỗi phép tính cộng trừ phân thức đại số khác mẫu thức.
misconception_or_trap: Quên đổi dấu khi trừ phân thức -(x-1) thành -x-1 thay vì -x+1.
duplicate_status: VERIFIED_EXACT (Trùng 100% biểu thức toán học với bài mỏ neo đã xuất bản WX07-RAT-002).
recommended_route: ARCHIVE_DUPLICATE
answer_contract_if_nominated: Pointer Canonical về WX07-RAT-002.
written_rubric_if_needed: N/A (Sử dụng Rubric của WX07-RAT-002).
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 2.

source_id: 07-WR-11
academic_verdict: PASS
question_math_correct: YES
original_answer_or_proof: Lời giải: Phân thức ban đầu (x^2-4)/(x-2) có mẫu x-2 nên chỉ xác định khi x != 2. Khi x = 2, phân thức không có giá trị. Biểu thức sau rút gọn x+2 xác định với mọi x, nhưng đẳng thức (x^2-4)/(x-2) = x+2 chỉ có nghĩa trên tập xác định của biểu thức vế trái. Do đó vẫn phải giữ điều kiện x != 2.
s1_grade_chapter_lesson: sach-giao-khoa-toan-8-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Chương VI: Bài 22 (Trang 12–13)
kntt_layer: KNTT-Core (Lớp 8)
cognitive_objective: Giải thích bản chất toán học của việc bảo toàn tập xác định sau phép biến đổi rút gọn phân thức.
misconception_or_trap: Cho rằng sau khi rút gọn mất mẫu thì biểu thức vế trái có thể nhận x = 2.
duplicate_status: SIMILAR_FAMILY (Có liên hệ lý thuyết với WX07-RAT-001 và MCQ RAT07V1_063).
recommended_route: KEEP_WRITTEN
answer_contract_if_nominated: Tự luận giải thích ngắn lý thuyết hoặc chuyển thành MCQ kiểm tra khái niệm.
written_rubric_if_needed: Nêu đủ 2 ý: 1) Phân thức vế trái không xác định tại x=2; 2) Đẳng thức rút gọn chỉ đúng trên tập xác định ban đầu.
source_confidence_and_missing_evidence: Xác minh 100% S1 SGK Toán 8 Tập 2.
```

---

### IV. KẾT LUẬN TỔNG THỂ GÓI KIỂM TOÁN (PACKET VERDICT)

```text
PACKET_ID|MATH-CT05-07-W3A-20261016
OVERALL|PASS_FOR_PLACEMENT_REVIEW

EXCLUSIONS_AND_EXCEPTIONS:
- Không có item nào bị thiếu (Missing: 0).
- Không có item nào bị trùng ngoài dự kiến mà không được chỉ định pointer (Duplicates properly handled: 2 exact duplicates 06-WR-02 & 07-WR-10 converted to Canonical Pointers to WX06-FAC-001 & WX07-RAT-002).
- Không có item nào nằm ngoài phạm vi 3 chuyên đề CĐ05–07 (Out of scope: 0).

DEPLOYMENT_RESTRICTIONS:
- Quyết định này KHÔNG cấp phép tự động triển khai code, không thực hiện data migration, không cấp điểm Core Readiness và không phát hành 12 bài lên hệ thống production.
- Mọi thao tác tích hợp kỹ thuật tiếp theo phải qua kiểm toán trình duyệt (Browser QA) và do Project Owner quyết định nghiệm thu.
```

---

Thắc mắc hoặc yêu cầu làm rõ thêm về từng bài toán đều có thể được giải thích chi tiết dựa trên các văn bản quy tắc baseline và tập SGK KNTT.