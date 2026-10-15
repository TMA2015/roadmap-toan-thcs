BÁO CÁO KIỂM TOÁN HỌC THUẬT ĐỘC LẬP
**GÓI XEM XÉT VÀ PHÂN LOẠI CÂU HỎI: `MATH-EXERCISE-RECLASSIFY-W1-20261015`**
*(Dự án Self-Learning Math / G Learning — Master Plan v1.2.1 & Review Rules v1.2)*

---

### TÓM TẮT KẾT QUẢ KIỂM TOÁN VÀ CƠ SỞ NGUYÊN TẮC

1. **Cơ sở quy tắc & Phân cấp nguồn chứng cứ**:
   * **Quy tắc kiểm định**: Tuân thủ tuyệt đối **Master Plan v1.2.1**, **NotebookLM Math Review Rules v1.2**, **Academic Source & Depth Audit Rules**, và **Shared Written Library Contract v1**.
   * **Thứ bậc chứng cứ (S1 > S2 > S3 > S4)**: Vị trí lớp/chương/bài KNTT-Core phải do nguồn **S1** (Chương trình/SGK/SBT chính thức) xác nhận. Không suy đoán vị trí lớp học từ mã chuyên đề, nhãn Entrance10 cũ, URL hay tiến trình sư phạm tự định nghĩa. Do các tập tin SGK KNTT PDF hiện không có trong tập nguồn được chọn (đã bị gạch tên khỏi ngữ cảnh), mọi phân vị lớp học chưa có đối soát S1 trực tiếp đều phải ghi nhận **`UNKNOWN`** và báo **`INSUFFICIENT_EVIDENCE`** cho mục đích phát hành.
   * **Bảo đảm không phình ngân hàng & Quản lý trùng lặp**: Không tạo clone vô ích. Một bài toán có cùng dạng cấu trúc nhưng khác số liệu được xếp vào nhóm **`SAME_FAMILY`**, không gọi là **`EXACT_MATCH`**.

2. **Kết quả rà soát trùng lặp 19 câu W1 với 134 câu Micro & 10 bài Tự luận mỏ neo (WX)**:
   * **Trùng lặp tuyệt đối (EXACT_MATCH)**: `04-WR-02` trùng 100% về biểu thức, yêu cầu và kết quả với câu hỏi đã xuất bản `ALG04MICRO_005` (\\(3x^2y-5xy^2+2x^2y+xy^2 \to 5x^2y-4xy^2\\)).
   * **Trùng họ / Tương tự số liệu (SAME_FAMILY / Canonical Reference)**:
     * `02-G6-WR-02` tương tự dạng bài chia quà ƯCLN với `NUM02MICRO_006` (24 bút/36 vở), nhưng đã có bài tự luận mỏ neo chính thức `WX02-NUM-001`.
     * `02-G6-WR-04` đã được tích hợp thành bài mỏ neo `WX02-NUM-002`.
     * `03-M1-02` cùng họ tìm \\(x\\) trong tỉ lệ thức với `RAT03MICRO_005`.
     * `21-WR-02` cùng họ đọc biểu đồ cột tính chênh lệch với `STA21MICRO_004`.

3. **Nguyên tắc chấm điểm tự động & Đánh giá năng lực độc lập**:
   * Việc chỉ nhập đúng một đáp số cuối cùng không chứng minh được tư duy lập luận, mô hình hóa hay phương pháp giải. Các bài đòi hỏi chứng minh đại số (`04-CH-01`) bắt buộc giữ dạng **`KEEP_PAPER_WRITTEN`**.
   * Phân biệt rõ Formative Practice (được mở gợi ý, AI Tutor, xem lời giải) và Independent Core Readiness (không gợi ý, không AI Tutor, nộp bài mới báo điểm, bộ đề riêng). Tuyệt đối không bê nguyên key trắc nghiệm luyện tập sang làm bài đánh giá độc lập mà không qua kiểm định độc lập.

---

### BẢNG TỔNG HỢP KẾT QUẢ RÀ SOÁT 19 CÂU HỎI W1 (19-ROW TABLE)

| STT | Source ID | File nguồn & Tiêu đề gốc | Phân loại đề xuất | Đánh giá trùng lặp | Kết quả kiểm toán |
| :---: | :---: | :--- | :--- | :--- | :---: |
| 1 | `02-G6-WR-01` | `02-so-va-phep-tinh/bai-tap.md#02-G6-WR-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`NUM02MICRO_002`) | **`INSUFFICIENT_EVIDENCE`** |
| 2 | `02-G6-WR-02` | `02-so-va-phep-tinh/bai-tap.md#02-G6-WR-02` | `REUSE_EXISTING` (`WX02-NUM-001`) | `SAME_FAMILY` (`NUM02MICRO_006`) | **`REVISE`** |
| 3 | `02-G6-WR-03` | `02-so-va-phep-tinh/bai-tap.md#02-G6-WR-03` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`NUM02MICRO_011`) | **`INSUFFICIENT_EVIDENCE`** |
| 4 | `02-G6-WR-04` | `02-so-va-phep-tinh/bai-tap.md#02-G6-WR-04` | `REUSE_EXISTING` (`WX02-NUM-002`) | `SAME_FAMILY` (`NUM02MICRO_015`) | **`REVISE`** |
| 5 | `02-M2-03` | `02-so-va-phep-tinh/bai-tap.md#02-M2-03` | `ADAPT_INTERACTIVE` | `NO_MATCH` | **`INSUFFICIENT_EVIDENCE`** |
| 6 | `03-M1-01` | `03-ti-le-ti-le-thuc/bai-tap.md#03-M1-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`RAT03MICRO_004`) | **`INSUFFICIENT_EVIDENCE`** |
| 7 | `03-M1-02` | `03-ti-le-ti-le-thuc/bai-tap.md#03-M1-02` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`RAT03MICRO_005`) | **`INSUFFICIENT_EVIDENCE`** |
| 8 | `03-M3-01` | `03-ti-le-ti-le-thuc/bai-tap.md#03-M3-01` | `ADAPT_INTERACTIVE` | `NO_MATCH` | **`INSUFFICIENT_EVIDENCE`** |
| 9 | `03-M4-01` | `03-ti-le-ti-le-thuc/bai-tap.md#03-M4-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`RAT03MICRO_007`) | **`INSUFFICIENT_EVIDENCE`** |
| 10 | `04-WR-01` | `04-bieu-thuc-dai-so/bai-tap.md#04-WR-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`ALG04MICRO_003`) | **`INSUFFICIENT_EVIDENCE`** |
| 11 | `04-WR-02` | `04-bieu-thuc-dai-so/bai-tap.md#04-WR-02` | `REUSE_EXISTING` (`ALG04MICRO_005`) | **`EXACT_MATCH`** (`ALG04MICRO_005`) | **`REVISE`** |
| 12 | `04-WR-03` | `04-bieu-thuc-dai-so/bai-tap.md#04-WR-03` | `ADAPT_INTERACTIVE` / `PAPER` | `SAME_FAMILY` (`WX04-ALG-001`) | **`INSUFFICIENT_EVIDENCE`** |
| 13 | `04-CH-01` | `04-bieu-thuc-dai-so/bai-tap.md#04-CH-01` | `KEEP_PAPER_WRITTEN` | `NO_MATCH` | **`PASS`** |
| 14 | `21-WR-01` | `21-thong-ke/bai-tap.md#21-WR-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`STA21MICRO_001`) | **`INSUFFICIENT_EVIDENCE`** |
| 15 | `21-WR-02` | `21-thong-ke/bai-tap.md#21-WR-02` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`STA21MICRO_004`) | **`INSUFFICIENT_EVIDENCE`** |
| 16 | `21-M1-01` | `21-thong-ke/bai-tap.md#21-M1-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`STA21MICRO_025`) | **`INSUFFICIENT_EVIDENCE`** |
| 17 | `21-M2-01` | `21-thong-ke/bai-tap.md#21-M2-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`STA21MICRO_025`) | **`INSUFFICIENT_EVIDENCE`** |
| 18 | `21-M3-01` | `21-thong-ke/bai-tap.md#21-M3-01` | `ADAPT_INTERACTIVE` | `SAME_FAMILY` (`STA21MICRO_025`) | **`INSUFFICIENT_EVIDENCE`** |
| 19 | `21-M4-01` | `21-thong-ke/bai-tap.md#21-M4-01` | `ADAPT_INTERACTIVE` / `PAPER` | `SAME_FAMILY` (`STA21MICRO_026`) | **`INSUFFICIENT_EVIDENCE`** |

---

### HỒ SƠ KIỂM TOÁN CHI TIẾT TỪNG MÃ CÂU HỎI (19 ITEM RECORDS)

```text
source_id: 02-G6-WR-01
source_file_and_heading: docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-01 · Thứ tự thực hiện phép tính
academic_scope: UNKNOWN (Thiếu văn bản SGK S1 trực tiếp trong tập nguồn; nhãn lớp cũ ghi Lớp 6)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: numeric
correct_value_and_accepted_equivalents: 18 (Chấp nhận chuỗi số nguyên "18")
misconception_and_feedback_evidence: Lỗi làm từ trái sang phải không tính lũy thừa trước (24-3=21); Lỗi nhầm thứ tự nhân chia. Phản hồi: Thực hiện 2^2=4 -> 3*4=12 và 18:3=6 -> 24-12+6=18.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Phép tính số học xác định nhưng chưa có bản xuất chiếu S1 SGK để chốt vị trí KNTT-Core. Cùng họ thứ tự phép tính với NUM02MICRO_002.

source_id: 02-G6-WR-02
source_file_and_heading: docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-02 · Bài toán ƯCLN
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: REUSE_EXISTING
canonical_reuse_id: WX02-NUM-001
proposed_response_type: paper_written_anchor
correct_value_and_accepted_equivalents: 12 phần quà; mỗi phần 3 bút, 4 vở (Theo WX02-NUM-001)
misconception_and_feedback_evidence: Nhập số 12 không chứng minh được tư duy phân tích ƯCLN. Đã có bài tự luận mỏ neo chuẩn hóa WX02-NUM-001.
changed_math_or_placement_requires_review: YES
review_result: REVISE
reason_and_citations: Cần tái sử dụng WX02-NUM-001 thay vì tạo bài tương tác số đơn lẻ làm giảm độ sâu tư duy. Tương tự họ NUM02MICRO_006 nhưng khác số.

source_id: 02-G6-WR-03
source_file_and_heading: docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-03 · Phân số
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: rational
correct_value_and_accepted_equivalents: 11/30 (Chấp nhận phân số tối giản "11/30"; từ chối số thập phân xấp xỉ 0.3666...)
misconception_and_feedback_evidence: Lỗi trừ tử cho tử, mẫu cho mẫu (5-7)/(6-15). Phản hồi: Quy đồng mẫu chung 30 -> 25/30 - 14/30 = 11/30.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Chuẩn hóa phân số chính xác nhưng thiếu căn cứ vị trí S1 SGK. Cùng họ trừ phân số với NUM02MICRO_011.

source_id: 02-G6-WR-04
source_file_and_heading: docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-G6-WR-04 · Phần trăm
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: REUSE_EXISTING
canonical_reuse_id: WX02-NUM-002
proposed_response_type: paper_written_anchor / numeric
correct_value_and_accepted_equivalents: 680000 đồng (Chấp nhận 680000)
misconception_and_feedback_evidence: Nhầm số tiền giảm 120.000đ với giá phải trả 680.000đ. Đã được chuẩn hóa thành bài mỏ neo WX02-NUM-002.
changed_math_or_placement_requires_review: YES
review_result: REVISE
reason_and_citations: Đã có WX02-NUM-002 trong Thư viện Tự luận dùng chung. Cần chuyển hướng tham chiếu thay vì nhân bản.

source_id: 02-M2-03
source_file_and_heading: docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md#02-M2-03
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: order_steps
correct_value_and_accepted_equivalents: Thứ tự tăng dần: -1,25 < -6/5 < 0 < 3/4 (Chấp nhận thứ tự danh sách ID các số)
misconception_and_feedback_evidence: Nhầm -1,25 nhỏ hơn hay lớn hơn -1,2 (-6/5). Phản hồi: Đổi -6/5 = -1,2. So sánh số âm: -1,25 < -1,2 < 0 < 0,75.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Dạng bài sắp xếp thứ tự phù hợp tương tác nhưng thiếu chứng cứ phân vị S1 SGK.

source_id: 03-M1-01
source_file_and_heading: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M1-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: match_pairs / structured_relation
correct_value_and_accepted_equivalents: Ghép cặp đúng các tỉ lệ thức hợp lệ: 3/4 = 15/20; 3/15 = 4/20; 20/4 = 15/3; 20/15 = 4/3.
misconception_and_feedback_evidence: Nhập 1 chuỗi text duy nhất gây từ chối sai các tỉ lệ thức đồng dạng khác. Phản hồi: Dựa vào ad=bc=60 để lập 4 tỉ lệ thức.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Cần giao diện ghép cặp/dựng quan hệ để tránh lỗi chấm thiển hiển một đáp án text. Thiếu nguồn S1 SGK.

source_id: 03-M1-02
source_file_and_heading: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M1-02
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: rational
correct_value_and_accepted_equivalents: 15/2 hoặc 7,5 (Chấp nhận phân số "15/2" hoặc số thập phân "7,5")
misconception_and_feedback_evidence: Nhân chéo sai x = (12*8)/5. Phản hồi: x = (12*5)/8 = 60/8 = 15/2 = 7,5.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Tương tự họ RAT03MICRO_005 (x/8=3/4) nhưng khác số. Thiếu phân vị S1 SGK.

source_id: 03-M3-01
source_file_and_heading: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M3-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: numeric_with_unit
correct_value_and_accepted_equivalents: 3,6 km (Chấp nhận 3.6 hoặc 3,6 với đơn vị km)
misconception_and_feedback_evidence: Quên đổi đơn vị từ cm sang km (7,2*50000 = 360000 cm). Phản hồi: 360000 cm = 3600 m = 3,6 km.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Bài toán tỉ lệ bản đồ có đổi đơn vị rõ ràng nhưng thiếu nguồn S1 SGK.

source_id: 03-M4-01
source_file_and_heading: docs/kien-thuc/03-ti-le-ti-le-thuc/bai-tap.md#03-M4-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: fill_multiple
correct_value_and_accepted_equivalents: 360; 480; 600 (3 ô nhập liệu có thứ tự tương ứng 3 lớp)
misconception_and_feedback_evidence: Nhầm thứ tự tỉ lệ giữa các lớp. Phản hồi: Tổng số phần = 3+4+5=12. Mỗi phần = 1440/12=120. Ba lớp = 360, 480, 600.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Bắt buộc thứ tự ô nhập đúng lớp; cùng họ chia tỉ lệ với RAT03MICRO_007. Thiếu nguồn S1 SGK.

source_id: 04-WR-01
source_file_and_heading: docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-01 · Nhận biết đa thức một biến
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: fill_multiple
correct_value_and_accepted_equivalents: Bậc = 3; Hệ số x^3 = 4; Hạng tử tự do = 7 (3 ô nhập số nguyên)
misconception_and_feedback_evidence: Nhầm bậc của đa thức với bậc của hạng tử tự do. Phản hồi: Số mũ lớn nhất là 3 -> Bậc 3, hệ số đứng trước x^3 là 4, hạng tử tự do là 7.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Đã tách 3 ô rõ ràng nhưng thiếu văn bản chứng cứ S1 SGK. Cùng họ ALG04MICRO_003.

source_id: 04-WR-02
source_file_and_heading: docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-02 · Thu gọn đa thức nhiều biến
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: REUSE_EXISTING
canonical_reuse_id: ALG04MICRO_005
proposed_response_type: single_choice
correct_value_and_accepted_equivalents: 5x^2y - 4xy^2 (Lựa chọn index 0 của ALG04MICRO_005)
misconception_and_feedback_evidence: Trùng lặp 100% về biểu thức toán học với ALG04MICRO_005. Phản hồi: (3x^2y+2x^2y)+(-5xy^2+xy^2) = 5x^2y - 4xy^2.
changed_math_or_placement_requires_review: NO
review_result: REVISE
reason_and_citations: TRÙNG LẶP TUYỆT ĐỐI (EXACT_MATCH) với ALG04MICRO_005. Bắt buộc REUSE_EXISTING, tuyệt đối không tạo ID mới hay ghi đè.

source_id: 04-WR-03
source_file_and_heading: docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-03 · Cộng và trừ đa thức
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE / KEEP_PAPER_WRITTEN
canonical_reuse_id: NONE (Liên hệ họ WX04-ALG-001)
proposed_response_type: fill_multiple / paper
correct_value_and_accepted_equivalents: x^2 - 5x + 4 (Nhập 3 hệ số 1, -5, 4 hoặc giải trên giấy)
misconception_and_feedback_evidence: Lỗi không đổi dấu khi trừ B: -(x^2+4x-1) thành -x^2-4x+1. Phản hồi: A-B = 2x^2-x+3 - x^2 - 4x + 1 = x^2 - 5x + 4.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Cùng dạng trừ đa thức đổi dấu với bài mỏ neo WX04-ALG-001. Thiếu chứng cứ S1 SGK.

source_id: 04-CH-01
source_file_and_heading: docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-CH-01 · Biểu thức không phụ thuộc vào biến
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: KEEP_PAPER_WRITTEN
canonical_reuse_id: NONE
proposed_response_type: paper_proof
correct_value_and_accepted_equivalents: Lời giải khai triển ra hằng số 2 (Rút gọn (x^2+3x+2) - (x^2+3x) = 2)
misconception_and_feedback_evidence: Nhập số "2" vào ô máy tính KHÔNG chứng minh được học sinh biết chứng minh biểu thức không phụ thuộc x. Bắt buộc chấm tự luận bằng Rubric multi-step.
changed_math_or_placement_requires_review: NO
review_result: PASS
reason_and_citations: Đạt chuẩn duy trì dạng bài tự luận trình bày (KEEP_PAPER_WRITTEN) do không thể chấm điểm máy móc định tính.

source_id: 21-WR-01
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-WR-01 · Dữ liệu và phân loại
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: match_pairs
correct_value_and_accepted_equivalents: Mã lớp -> Dữ liệu phân loại; Số sách mượn -> Dữ liệu số
misconception_and_feedback_evidence: Nhầm mã lớp (chứa chữ số 6A, 6B) là dữ liệu số. Phản hồi: Mã lớp là nhãn định danh (phân loại); số sách mượn là số đếm (dữ liệu số).
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Cùng khái niệm phân loại dữ liệu với STA21MICRO_001. Thiếu nguồn S1 SGK.

source_id: 21-WR-02
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-WR-02 · Đọc dữ liệu
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: numeric
correct_value_and_accepted_equivalents: 6 cuốn (Chấp nhận 6 hoặc "6 cuốn")
misconception_and_feedback_evidence: Tính sai phép trừ 20 - 14. Phản hồi: Chênh lệch = Tổ B (20) - Tổ A (14) = 6 cuốn.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Cùng họ đọc chênh lệch biểu đồ với STA21MICRO_004 nhưng dữ liệu khác. Thiếu nguồn S1 SGK.

source_id: 21-M1-01
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-M1-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: single_choice
correct_value_and_accepted_equivalents: Số lần giá trị đó xuất hiện trong tập dữ liệu
misconception_and_feedback_evidence: Nhầm tần số với tần suất phần trăm. Phản hồi: Tần số là số lần xuất hiện của một giá trị.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Câu hỏi khái niệm lý thuyết. Thiếu nguồn S1 SGK.

source_id: 21-M2-01
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-M2-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: structured_table_or_paper
correct_value_and_accepted_equivalents: Giá trị 6: 1; 7: 2; 8: 3; 9: 1
misconception_and_feedback_evidence: Bỏ sót giá trị hoặc đếm sai tần số của 8. Phản hồi: Đếm từng số: 6(1 lần), 7(2 lần), 8(3 lần), 9(1 lần).
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Lập bảng tần số cơ bản. Thiếu nguồn S1 SGK.

source_id: 21-M3-01
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-M3-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE
canonical_reuse_id: NONE
proposed_response_type: structured_table_or_paper
correct_value_and_accepted_equivalents: 6: 1; 7: 2; 8: 4; 9: 2; 10: 1; Tổng = 10
misconception_and_feedback_evidence: Tổng tần số không bằng tổng số quan sát (10). Phản hồi: Kiểm tra tổng 1+2+4+2+1 = 10.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Lập bảng tần số có dòng kiểm tra tổng. Thiếu nguồn S1 SGK.

source_id: 21-M4-01
source_file_and_heading: docs/kien-thuc/21-thong-ke/bai-tap.md#21-M4-01
academic_scope: UNKNOWN (Thiếu nguồn S1 SGK)
decision: ADAPT_INTERACTIVE / KEEP_PAPER_WRITTEN
canonical_reuse_id: NONE
proposed_response_type: structured_table_or_paper
correct_value_and_accepted_equivalents: Tần số: 5:1, 6:2, 7:3, 8:4, 9:2; Tần suất %: 8,3%, 16,7%, 25%, 33,3%, 16,7%
misconception_and_feedback_evidence: Lỗi làm tròn phần trăm lẻ (1/12 ≈ 8,3%). Phản hồi: Tổng N=12, tính phần trăm từng nhóm và chấp nhận sai số làm tròn nhỏ.
changed_math_or_placement_requires_review: YES
review_result: INSUFFICIENT_EVIDENCE
reason_and_citations: Cần quy định rõ chính sách làm tròn và dung sai phần trăm nếu chấm tự động. Thiếu nguồn S1 SGK.
```

---

### ĐÁNH GIÁ ĐẢM BẢO CHẤM ĐIỂM TỰ ĐỘNG VÀ KHẢ NĂNG TƯƠNG TÁC (ANSWERABILITY)

1. **Quy tắc phân định Chấm tự động vs Tự luận trên giấy**:
   * **Chấp nhận chấm tự động (Deterministic Machine Grading)**: Áp dụng khi câu hỏi yêu cầu một giá trị số nguyên (`numeric`), phân số tối giản (`rational`), chuỗi chọn đáp án (`single_choice`), ghép cặp cố định (`match_pairs`), sắp xếp danh sách (`order_steps`), hoặc các ô nhập hệ số/bảng cấu trúc định dạng rõ (`fill_multiple`).
   * **Bắt buộc chuyển Tự luận trình bày (`KEEP_PAPER_WRITTEN`)**: Áp dụng khi bài tập yêu cầu **chứng minh đại số** (`04-CH-01`), giải thích nguyên nhân ƯCLN/tỉ lệ nghịch sâu (`02-G6-WR-02` / `WX02-NUM-001`), hoặc thiết kế quy trình xử lý dữ liệu phức tạp. Nhập một đáp số đơn lẻ không đủ làm bằng chứng cho phương pháp giải.

2. **Chính sách BỘ PHÂN TÍCH NHẬP LIỆU (Parser Policy)**:
   * **Phân số (Rational exact)**: Bắt buộc ở dạng phân số tối giản (vd: `11/30`, `15/2`). Từ chối các dạng làm tròn thập phân không chính xác (vd: `0,3666...`).
   * **Dấu phân cách thập phân**: Chấp nhận cả dấu phẩy `,` và dấu chấm `.` (vd: `3,6` hoặc `3.6`).
   * **Xử lý Mẫu số 0**: Tự động từ chối và báo lỗi phân thức không xác định nếu mẫu số \\(= 0\\).
   * **Đơn vị (Units)**: Chuẩn hóa tách biệt giá trị số và đơn vị (vd: số `3,6`, đơn vị `km`). Không làm trượt câu hỏi chỉ vì học sinh quên viết lại chữ "km" nếu ô nhập đã ghi sẵn nhãn đơn vị.

---

### PHÂN BIỆT THỰC HÀNH (FORMATIVE PRACTICE) VÀ ĐÁNH GIÁ ĐỘC LẬP (CORE READINESS)

1. **Ranh giới chế độ học tập**:
   * **Luyện tập tương tác (Practice Room)**: Cho phép mở [Gợi ý], bấm [Làm câu tương tự], trao đổi với AI Tutor, hiển thị đáp án đúng và giải thích ngay sau mỗi câu.
   * **Tự kiểm tra độc lập (Core Readiness Check)**: **Khóa hoàn toàn** gợi ý và AI Tutor; không báo đúng/sai từng câu trong lúc làm; chỉ trả kết quả và phản hồi tổng thể sau khi bấm [Nộp bài]; dữ liệu lưu trữ ở không gian đánh giá riêng biệt (`Assessment Evidence`).

2. **Cấm chuyển đổi tự động khóa đáp án**:
   * Tuyệt đối không bê nguyên key trắc nghiệm từ ngân hàng Luyện tập (Formative Micro) sang làm bài Tự kiểm tra độc lập mà không qua xây dựng bộ đề độc lập (Blueprint) và kiểm định độc lập.

---

### KẾT LUẬN KIỂM TOÁN TỔNG THỂ (PACKET VERDICT)

```text
PACKET_ID|MATH-EXERCISE-RECLASSIFY-W1-20261015
OVERALL_VERDICT|REVISIONS_REQUIRED

REASON_1|EXACT_MATCH_DUPLICATION|Item 04-WR-02 trùng lặp 100% với ALG04MICRO_005. Bắt buộc REUSE_EXISTING thay vì tạo bản sao.
REASON_2|CANONICAL_WRITTEN_REUSE|Item 02-G6-WR-02 và 02-G6-WR-04 đã có bài mỏ neo chính thức WX02-NUM-001 và WX02-NUM-002 trong Shared Written Library. Bắt buộc chuyển hướng canonical reference.
REASON_3|MISSING_S1_PROOF|Các tập tin SGK KNTT PDF (S1) chưa có trong ngữ cảnh kiểm toán để xác nhận 100% vị trí bài học KNTT-Core cho mục đích phát hành chính thức.

CLEARANCE|BLOCKED_PENDING_RECONCILIATION
```

---

### DANH MỤC HÀNH ĐỘNG DÀNH CHO OWNER (OWNER-DECISION LIST)

1. **Khôi phục / Bổ sung nguồn S1 chính thức**: Tải/chọn các tập tin SGK KNTT Toán 6, 7, 8, 9 PDF vào NotebookLM trước đợt duyệt phát hành chính thức để giải quyết trạng thái `INSUFFICIENT_EVIDENCE` về vị trí bài học.
2. **Loại bỏ nhân bản bài tập (Deduplication Reconciliation)**:
   * Duy trì `04-WR-02` dưới dạng alias/pointer về `ALG04MICRO_005`.
   * Duy trì `02-G6-WR-02` và `02-G6-WR-04` dưới dạng lối vào chuyển hướng đến bài mỏ neo `WX02-NUM-001` và `WX02-NUM-002` trong Thư viện Tự luận dùng chung.
3. **Bảo tồn trang Markdown cũ (Old Page Preservation)**:
   * Giữ nguyên các trang Markdown bài tập cũ (`docs/kien-thuc/*/bai-tap.md`), không xóa hay ẩn phần bài tập giấy cho đến khi hoàn tất kiểm toán trình duyệt (Browser QA), chuyển đổi liên kết lịch sử và được Owner nghiệm thu chính thức.

---
*Báo cáo kiểm toán học thuật hoàn tất. Mọi kết luận đều được truy xuất trực tiếp từ các văn bản quy tắc và tập nguồn được chọn.*