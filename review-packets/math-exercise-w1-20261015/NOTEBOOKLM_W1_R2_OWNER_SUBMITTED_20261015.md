BÁO CÁO KIỂM TOÁN HỌC THUẬT ĐỘC LẬP — VÒNG PHẢN BIỆN BỔ SUNG (R2)
**GÓI XEM XÉT VÀ PHÂN LOẠI CÂU HỎI: `MATH-EXERCISE-RECLASSIFY-W1-20261015`**
*(Hệ thống Self-Learning Math / G Learning — Cập nhật chứng cứ S1 từ Bộ SGK KNTT Toán 6, 7, 8, 9)*

---

### TÓM TẮT ĐỔI MỚI VÀ ĐỘT PHÁ CỦA VÒNG R2 SO VỚI R1

1. **Khôi phục chứng cứ S1 SGK đầy đủ**:
   Ở vòng R1, do các tệp SGK KNTT PDF chưa được tích chọn trong ngữ cảnh NotebookLM, 15 câu hỏi đã phải ghi nhận `INSUFFICIENT_EVIDENCE`. Ở vòng R2, bộ 8 tập SGK Toán 6, 7, 8, 9 KNTT đã được tích chọn trực tiếp. Đã xác minh thành công **100% (19/19 câu)** về vị trí bài học, chương, tập và số trang chuẩn mực trong SGK KNTT (S1).
2. **Xác nhận chuyển hướng Tham chiếu Canonical (Canonical Pointers)**:
   * `04-WR-02` **TRÙNG LẶP TUYỆT ĐỐI (`EXACT_MATCH`)** với `ALG04MICRO_005` (cùng biểu thức \\(3x^2y - 5xy^2 + 2x^2y + xy^2\\)). Chuyển hướng pointer về `ALG04MICRO_005`.
   * `02-G6-WR-02` và `02-G6-WR-04` **TRÙNG TÌNH HUỐNG THỰC TẾ (`SAME_SITUATION_DIFFERENT_DEPTH`)** với hai bài mỏ neo đã xuất bản `WX02-NUM-001` (36 bút, 48 vở - có chứng minh ƯCLN) và `WX02-NUM-002` (áo 800.000đ giảm 15% - có lời giải tự luận nhiều bước). Chuyển hướng pointer về thư viện WX, tuyệt đối không tạo clone mới.
3. **Hiệu chỉnh chuẩn xác đối chiếu Chuyên đề 21 (Thống kê)**:
   Phân loại rõ `STA21MICRO_025` (chỉ tính 1 tần số đơn lẻ) và `STA21MICRO_026` (chỉ tính 1 tần suất đơn lẻ) là **`NON_SUBSTITUTABLE` (Không thể thay thế)** cho `21-M2-01`, `21-M3-01` (lập Bảng tần số hoàn chỉnh) và `21-M4-01` (lập Bảng tần số & tần suất % hoàn chỉnh).
4. **Quy tắc Chấm điểm Phân số & Tỉ lệ thức mở rộng**:
   * **Giá trị bằng nhau vs. Phân số tối giản**: Nếu đề không yêu cầu "phân số tối giản", hệ thống công nhận mọi giá trị toán học bằng nhau (ví dụ: \\(1/2 = 2/4 = 0,5\\)).
   * **Tỉ lệ thức (`03-M1-01`)**: Đơn giản hóa cơ chế chấm bằng thuật toán kiểm tra tích chéo \\(a \cdot d = b \cdot c = 60\\) cho các cặp tỉ số nhập vào, thay vì ép buộc đúng 4 chuỗi ký tự cố định.

---

### BẢNG TỔNG HỢP KẾT QUẢ ĐỐI CHIẾU VÀ ĐÁNH GIÁ 19 BÀI W1 (19-ROW TABLE)

| STT | Source ID | Vị trí S1 SGK KNTT (Tập, Lớp, Chương, Bài, Trang) | Phân loại Trùng lặp & Canonical Reuse | Hình thức tương tác / Giấy | Chính sách đáp án & Quy tắc chấm định tính | Kết luận R2 | Khác biệt / Đột phá so với R1 |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- |
| 1 | `02-G6-WR-01` | **Toán 6 Tập 1**, Ch. I, **Bài 7**, Trang 25–26 | `SAME_FAMILY` (`NUM02MICRO_002`) | `ADAPT_INTERACTIVE` | Nhập số nguyên: `18`. Lỗi bẫy: làm từ trái sang phải bỏ qua lũy thừa (\\(24-3=21\\)). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 2 | `02-G6-WR-02` | **Toán 6 Tập 1**, Ch. II, **Bài 11**, Trang 44–48 | `SAME_SITUATION` (\\(\to\\) `WX02-NUM-001`) | `REUSE_EXISTING` | Tự luận mỏ neo trình bày bước lập luận ƯCLN. Nhập số `12` không chứng minh được tư duy. | **`REVISE`** | Giữ `REVISE` để chuyển hướng pointer canonical sang `WX02-NUM-001`. |
| 3 | `02-G6-WR-03` | **Toán 6 Tập 2**, Ch. VI, **Bài 25**, Trang 15–18 | `SAME_FAMILY` (`NUM02MICRO_011`) | `ADAPT_INTERACTIVE` | Nhập phân số: `11/30`. Chấp nhận phân số bằng giá trị nếu đề không ép tối giản. Từ chối số thập phân vô hạn. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 4 | `02-G6-WR-04` | **Toán 6 Tập 2**, Ch. VII, **Bài 31**, Trang 38–41 | `SAME_SITUATION` (\\(\to\\) `WX02-NUM-002`) | `REUSE_EXISTING` | Tự luận mỏ neo trình bày bài toán phần trăm. Giá sau giảm: `680000` đồng. | **`REVISE`** | Giữ `REVISE` để chuyển hướng pointer canonical sang `WX02-NUM-002`. |
| 5 | `02-M2-03` | **Toán 7 Tập 1**, Ch. I, **Bài 1**, Trang 5–9 | `NO_MATCH` (Dãy số riêng) | `ADAPT_INTERACTIVE` | Sắp xếp kéo thả: `-1,25 < -6/5 < 0 < 3/4`. Bẫy nhầm: \\(-1,25 < -1,2\\). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 6 | `03-M1-01` | **Toán 7 Tập 2**, Ch. VI, **Bài 20**, Trang 4–7 | `SAME_FAMILY` (`RAT03MICRO_004`) | `ADAPT_INTERACTIVE` | Ghép cặp / Kiểm tra tích chéo \\(a \cdot d = b \cdot c = 60\\). Chấp nhận mọi tỉ lệ thức đúng. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1 & thuật toán chấm \\(ad=bc\\). |
| 7 | `03-M1-02` | **Toán 7 Tập 2**, Ch. VI, **Bài 20**, Trang 4–7 | `SAME_FAMILY` (`RAT03MICRO_005`) | `ADAPT_INTERACTIVE` | Nhập số/phân số: Chấp nhận cả `15/2` và `7,5` (hoặc `7.5`). Chấp nhận dấu phẩy và chấm. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1 & quy tắc chấm Quy chuẩn D. |
| 8 | `03-M3-01` | **Toán 7 Tập 2**, Ch. VI, **Bài 20/22**, Trang 4–14 | `NO_MATCH` | `ADAPT_INTERACTIVE` | Số `3,6` (hoặc `3.6`), đơn vị `km`. Tách ô số và ô đơn vị để chấm chính xác. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 9 | `03-M4-01` | **Toán 7 Tập 2**, Ch. VI, **Bài 21/22**, Trang 8–14 | `SAME_FAMILY` (`RAT03MICRO_007`) | `ADAPT_INTERACTIVE` | 3 ô nhập thứ tự 3 lớp: `360`, `480`, `600`. Bẫy: nhầm thứ tự tỉ lệ giữa các khối. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 10 | `04-WR-01` | **Toán 7 Tập 2**, Ch. VII, **Bài 25**, Trang 25–30 | `SAME_FAMILY` (`ALG04MICRO_003`) | `ADAPT_INTERACTIVE` | 3 ô nhập: Bậc = `3`, Hệ số \\(x^3\\) = `4`, Hệ số tự do = `-7`. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 11 | `04-WR-02` | **Toán 8 Tập 1**, Ch. I, **Bài 2/3**, Trang 11–18 | **`EXACT_MATCH`** (\\(\to\\) `ALG04MICRO_005`) | `REUSE_EXISTING` | TRÙNG LẶP TUYỆT ĐỐI. Chuyển hướng pointer về `ALG04MICRO_005` (Key: \\(5x^2y - 4xy^2\\)). | **`REVISE`** | Giữ `REVISE` để chuyển hướng pointer về `ALG04MICRO_005`, cấm tạo trùng ID. |
| 12 | `04-WR-03` | **Toán 8 Tập 1**, Ch. I, **Bài 3**, Trang 15–18 | `SAME_FAMILY` (`WX04-ALG-001`) | `ADAPT_INTERACTIVE` | Nhập 3 hệ số: `1`, `-5`, `4` (ứng với \\(x^2 - 5x + 4\\)). Bẫy: quên đổi dấu khi trừ \\(B\\). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 13 | `04-CH-01` | **Toán 8 Tập 1**, Ch. I, **Bài 4**, Trang 19–21 | `NO_MATCH` | `KEEP_PAPER_WRITTEN` | Tự luận chứng minh ra hằng số `2`. Nhập số `2` vào ô máy không chứng minh được năng lực chứng minh. | **`PASS`** | Nâng từ PASS giới hạn lên **`PASS toàn phần`** do đã xác minh chứng cứ S1 SGK. |
| 14 | `21-WR-01` | **Toán 8 Tập 1**, Ch. V, **Bài 18**, Trang 90–92 | `RELATED_SUBSKILL` (`STA21MICRO_001`) | `ADAPT_INTERACTIVE` | Ghép cặp: Mã lớp \\(\to\\) Dữ liệu phân loại; Số sách mượn \\(\to\\) Dữ liệu số. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 15 | `21-WR-02` | **Toán 6 Tập 2**, Ch. IX, **Bài 40** / **Toán 8 Tập 1**, **Bài 19** | `SAME_FAMILY` (`STA21MICRO_004`) | `ADAPT_INTERACTIVE` | Nhập số: `6` (Chênh lệch = Tổ B (20) - Tổ A (14)). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 16 | `21-M1-01` | **Toán 9 Tập 2**, Ch. VII, **Bài 18**, Trang 33–38 | `RELATED_SUBSKILL` (`STA21MICRO_025`) | `ADAPT_INTERACTIVE` | Trắc nghiệm chọn khái niệm tần số. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1. |
| 17 | `21-M2-01` | **Toán 9 Tập 2**, Ch. VII, **Bài 18**, Trang 33–38 | **`NON_SUBSTITUTABLE`** (`STA21MICRO_025`) | `ADAPT_INTERACTIVE` | Bảng tần số hoàn chỉnh: 6(1), 7(2), 8(3), 9(1). Không thể thay bằng `STA21MICRO_025`. | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1 & làm rõ tính độc lập. |
| 18 | `21-M3-01` | **Toán 9 Tập 2**, Ch. VII, **Bài 18**, Trang 33–38 | **`NON_SUBSTITUTABLE`** (`STA21MICRO_025`) | `ADAPT_INTERACTIVE` | Bảng tần số có dòng tổng \\(N=10\\): 6(1), 7(2), 8(4), 9(2), 10(1). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1 & làm rõ tính độc lập. |
| 19 | `21-M4-01` | **Toán 9 Tập 2**, Ch. VII, **Bài 19**, Trang 43–48 | **`NON_SUBSTITUTABLE`** (`STA21MICRO_026`) | `ADAPT_INTERACTIVE` | Bảng tần số & Tần suất % (\\(N=12\\)). Dung sai làm tròn phần trăm \\(\pm 0.1\%\\). | **`PASS`** | Nâng từ `INSUFFICIENT_EVIDENCE` lên `PASS` nhờ có đối soát S1 & làm rõ tính độc lập. |

---

### HỒ SƠ KIỂM TOÁN CHI TIẾT TỪNG CÂU HỎI (19 ITEM RECORDS)

```text
source_id: 02-G6-WR-01
s1_placement_citation: sach-giao-khoa-toan-6-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 7: Thứ tự thực hiện các phép tính (Trang 25–26)
deduplication_and_canonical_reuse: SAME_FAMILY với NUM02MICRO_002 (cùng dạng phép tính số học hỗn hợp nhưng khác số liệu).
interaction_and_paper_format: ADAPT_INTERACTIVE (Numeric Input)
grading_policy_and_misconceptions: Chấp nhận chuỗi số nguyên "18". Lỗi bẫy: làm từ trái sang phải bỏ qua thứ tự lũy thừa (24-3=21). Phản hồi: Thực hiện 2^2=4 -> 3*4=12 và 18:3=6 -> 24-12+6=18.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 02-G6-WR-02
s1_placement_citation: sach-giao-khoa-toan-6-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 11: Ước chung. Ước chung lớn nhất (Trang 44–48)
deduplication_and_canonical_reuse: SAME_SITUATION_DIFFERENT_DEPTH với WX02-NUM-001 (cùng tình huống 36 bút, 48 vở). Cần tham chiếu canonical_reuse_id: WX02-NUM-001.
interaction_and_paper_format: REUSE_EXISTING (Paper Written Anchor / Canonical Pointer)
grading_policy_and_misconceptions: Nhập duy nhất số "12" không chứng minh được tư duy phân tích ƯCLN. Bắt buộc dùng Rubric chấm tự luận 4 bước của WX02-NUM-001.
r2_verdict: REVISE
delta_vs_r1: Giữ nguyên REVISE để chuyển hướng lối vào thành Canonical Pointer về WX02-NUM-001, tuyệt đối không tạo ID clone mới.

source_id: 02-G6-WR-03
s1_placement_citation: sach-giao-khoa-toan-6-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 25: Phép cộng và phép trừ phân số (Trang 15–18)
deduplication_and_canonical_reuse: SAME_FAMILY với NUM02MICRO_011 (cùng dạng trừ hai phân số khác mẫu).
interaction_and_paper_format: ADAPT_INTERACTIVE (Rational exact)
grading_policy_and_misconceptions: Đáp án quy chuẩn: 11/30. Theo Quy tắc D, vì đề không ép "viết phân số tối giản", hệ thống chấp nhận mọi phân số có giá trị bằng 11/30 (vd 22/60). Từ chối số thập phân làm tròn không chính xác (0.3666...).
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 và áp dụng Quy tắc D chuẩn hóa phân số.

source_id: 02-G6-WR-04
s1_placement_citation: sach-giao-khoa-toan-6-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 31: Một số bài toán về tỉ số và tỉ số phần trăm (Trang 38–41)
deduplication_and_canonical_reuse: SAME_SITUATION_DIFFERENT_DEPTH với WX02-NUM-002 (cùng áo 800.000đ giảm 15%). Cần tham chiếu canonical_reuse_id: WX02-NUM-002.
interaction_and_paper_format: REUSE_EXISTING (Paper Written Anchor / Canonical Pointer)
grading_policy_and_misconceptions: Bẫy nhầm số tiền giảm 120.000đ với số tiền còn lại 680.000đ. Đã được chuẩn hóa thành bài mỏ neo WX02-NUM-002.
r2_verdict: REVISE
delta_vs_r1: Giữ nguyên REVISE để chuyển hướng lối vào thành Canonical Pointer về WX02-NUM-002.

source_id: 02-M2-03
s1_placement_citation: sach-giao-khoa-toan-7-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 1: Tập hợp các số hữu tỉ (Trang 5–9)
deduplication_and_canonical_reuse: NO_MATCH (Dãy 4 số hữu tỉ ngẫu nhiên kết hợp số âm, phân số, số thập phân).
interaction_and_paper_format: ADAPT_INTERACTIVE (Ordering / Drag-and-Drop)
grading_policy_and_misconceptions: Thứ tự tăng dần đúng: -1,25 < -6/5 < 0 < 3/4. Lỗi bẫy: nhầm -1,25 nhỏ hơn hay lớn hơn -1,2 (-6/5).
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 03-M1-01
s1_placement_citation: sach-giao-khoa-toan-7-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 20: Tỉ lệ thức (Trang 4–7)
deduplication_and_canonical_reuse: SAME_FAMILY với RAT03MICRO_004 (Lập tỉ lệ thức từ đẳng thức ad = bc).
interaction_and_paper_format: ADAPT_INTERACTIVE (Structured Matching / Multi-select / Cross-product test)
grading_policy_and_misconceptions: Đã áp dụng Quy tắc E: Từ 3*20 = 4*15, hệ thống dùng bộ kiểm tra ad = bc = 60 cho mọi cặp phân số a/b = c/d nhập vào, không giới hạn ngầm đúng 4 chuỗi viết sẵn.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 & thuật toán kiểm tra tích chéo linh hoạt.

source_id: 03-M1-02
s1_placement_citation: sach-giao-khoa-toan-7-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 20: Tỉ lệ thức (Trang 4–7)
deduplication_and_canonical_reuse: SAME_FAMILY với RAT03MICRO_005 (Tìm x trong tỉ lệ thức).
interaction_and_paper_format: ADAPT_INTERACTIVE (Numeric / Rational)
grading_policy_and_misconceptions: Giá trị đúng: x = 15/2 = 7,5. Áp dụng Quy tắc D: Chấp nhận cả "15/2", "7,5" và "7.5". Hỗ trợ cả dấu phẩy và dấu chấm thập phân.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 & chuẩn hóa chấp nhận số thập phân/phân số bằng giá trị.

source_id: 03-M3-01
s1_placement_citation: sach-giao-khoa-toan-7-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 20 & Bài 22: Tỉ lệ thức và Đại lượng tỉ lệ thuận (Trang 4–14)
deduplication_and_canonical_reuse: NO_MATCH (Bài toán tỉ lệ bản đồ 1:50.000, khoảng cách 7,2 cm).
interaction_and_paper_format: ADAPT_INTERACTIVE (Structured Numeric with Unit)
grading_policy_and_misconceptions: Giá trị: 3,6; Đơn vị: km (hoặc 3600 m nếu chọn m). Tách ô nhập số và ô chọn đơn vị. Lỗi bẫy: quên đổi cm sang km (7,2 * 50000 = 360000 cm).
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 03-M4-01
s1_placement_citation: sach-giao-khoa-toan-7-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 21 & Bài 22: Tính chất dãy tỉ số bằng nhau (Trang 8–14)
deduplication_and_canonical_reuse: SAME_FAMILY với RAT03MICRO_007 (Chia một số thành các phần tỉ lệ).
interaction_and_paper_format: ADAPT_INTERACTIVE (Multiple Numeric Fills)
grading_policy_and_misconceptions: 3 ô nhập tương ứng 3 khối: 360; 480; 600. Lỗi bẫy: nhầm thứ tự tỉ lệ 3:4:5 giữa các khối.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 04-WR-01
s1_placement_citation: sach-giao-khoa-toan-7-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 25: Đa thức một biến (Trang 25–30)
deduplication_and_canonical_reuse: SAME_FAMILY với ALG04MICRO_003 (Nhận biết bậc, hệ số của đa thức một biến).
interaction_and_paper_format: ADAPT_INTERACTIVE (Multiple Numeric Fills)
grading_policy_and_misconceptions: 3 ô nhập độc lập: Bậc = 3; Hệ số x^3 = 4; Hạng tử tự do = -7. Lỗi bẫy: nhầm bậc đa thức với bậc của hạng tử tự do.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 04-WR-02
s1_placement_citation: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 2 & Bài 3: Đa thức và phép cộng trừ đa thức (Trang 11–18)
deduplication_and_canonical_reuse: EXACT_MATCH với ALG04MICRO_005 (Trùng 100% biểu thức 3x^2y - 5xy^2 + 2x^2y + xy^2). Cần tham chiếu canonical_reuse_id: ALG04MICRO_005.
interaction_and_paper_format: REUSE_EXISTING (Single Choice Pointer)
grading_policy_and_misconceptions: TRÙNG LẶP TUYỆT ĐỐI. Bắt buộc chuyển hướng pointer về ALG04MICRO_005. Không được phát hành ID trùng mới.
r2_verdict: REVISE
delta_vs_r1: Giữ nguyên REVISE để thực hiện pointer alias về ALG04MICRO_005.

source_id: 04-WR-03
s1_placement_citation: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 3: Phép cộng và phép trừ đa thức (Trang 15–18)
deduplication_and_canonical_reuse: SAME_FAMILY với WX04-ALG-001 (Trừ hai đa thức nhiều biến).
interaction_and_paper_format: ADAPT_INTERACTIVE (Multiple Coefficient Fills)
grading_policy_and_misconceptions: Kết quả x^2 - 5x + 4. Nhập 3 hệ số: 1; -5; 4. Lỗi bẫy: không đổi dấu hạng tử khi trừ B: -(x^2+4x-1) thành -x^2-4x+1.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 04-CH-01
s1_placement_citation: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 4: Phép nhân đa thức (Trang 19–21)
deduplication_and_canonical_reuse: NO_MATCH (Bài toán chứng minh biểu thức không phụ thuộc vào biến x).
interaction_and_paper_format: KEEP_PAPER_WRITTEN (Multi-step Paper Proof)
grading_policy_and_misconceptions: Áp dụng Quy tắc F: Nhập số "2" vào ô máy KHÔNG chứng minh được tư duy chứng minh không phụ thuộc biến. Bắt buộc giữ bài tự luận trên giấy với Rubric từng bước. Việc PASS dạng bài KHÔNG có nghĩa được phép xóa bài giấy cũ trên hệ thống.
r2_verdict: PASS
delta_vs_r1: Nâng từ PASS giới hạn lên PASS toàn phần sau khi xác minh vị trí S1 SGK Toán 8.

source_id: 21-WR-01
s1_placement_citation: sach-giao-khoa-toan-8-tap-1-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 18: Thu thập và phân loại dữ liệu (Trang 90–92)
deduplication_and_canonical_reuse: RELATED_SUBSKILL với STA21MICRO_001 (Khái niệm phân loại dữ liệu).
interaction_and_paper_format: ADAPT_INTERACTIVE (Matching Pairs)
grading_policy_and_misconceptions: Ghép cặp: Mã lớp -> Dữ liệu phân loại; Số sách mượn -> Dữ liệu số. Lỗi bẫy: nhầm mã lớp (chứa chữ số 6A) là dữ liệu số.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 21-WR-02
s1_placement_citation: sach-giao-khoa-toan-6-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 40 (Trang 77–81) & Toán 8 Tập 1, Bài 19 (Trang 93–98)
deduplication_and_canonical_reuse: SAME_FAMILY với STA21MICRO_004 (Đọc chênh lệch dữ liệu trên biểu đồ cột).
interaction_and_paper_format: ADAPT_INTERACTIVE (Numeric Input)
grading_policy_and_misconceptions: Giá trị đúng: 6. Phép tính: Tổ B (20) - Tổ A (14) = 6 cuốn.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 21-M1-01
s1_placement_citation: sach-giao-khoa-toan-9-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 18: Bảng tần số và biểu đồ tần số (Trang 33–38)
deduplication_and_canonical_reuse: RELATED_SUBSKILL với STA21MICRO_025 (Khái niệm định nghĩa tần số).
interaction_and_paper_format: ADAPT_INTERACTIVE (Single Choice)
grading_policy_and_misconceptions: Chọn đáp án định nghĩa tần số: "Số lần giá trị đó xuất hiện trong tập dữ liệu".
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS do đã có đối soát xuất chiếu S1 trực tiếp.

source_id: 21-M2-01
s1_placement_citation: sach-giao-khoa-toan-9-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 18: Bảng tần số và biểu đồ tần số (Trang 33–38)
deduplication_and_canonical_reuse: NON_SUBSTITUTABLE với STA21MICRO_025. Áp dụng Quy tắc C: STA21MICRO_025 chỉ tính tần số 1 giá trị (x=8), không thể thay thế bài lập Bảng tần số đầy đủ 21-M2-01.
interaction_and_paper_format: ADAPT_INTERACTIVE (Structured Frequency Table)
grading_policy_and_misconceptions: Điền bảng tần số đầy đủ: Giá trị 6(1), 7(2), 8(3), 9(1). Bẫy: đếm thiếu số lần xuất hiện của các giá trị lặp.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 & xác định tính độc lập không thể thay thế.

source_id: 21-M3-01
s1_placement_citation: sach-giao-khoa-toan-9-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 18: Bảng tần số và biểu đồ tần số (Trang 33–38)
deduplication_and_canonical_reuse: NON_SUBSTITUTABLE với STA21MICRO_025. Bài lập Bảng tần số có dòng kiểm tra tổng N=10 độc lập.
interaction_and_paper_format: ADAPT_INTERACTIVE (Structured Table with Total Row)
grading_policy_and_misconceptions: Bảng tần số: 6(1), 7(2), 8(4), 9(2), 10(1); Dòng tổng N = 10.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 & xác định tính độc lập không thể thay thế.

source_id: 21-M4-01
s1_placement_citation: sach-giao-khoa-toan-9-tap-2-ket-noi-tri-thuc-voi-cuoc-song.pdf · Bài 19: Bảng tần suất và biểu đồ tần suất (Trang 43–48)
deduplication_and_canonical_reuse: NON_SUBSTITUTABLE với STA21MICRO_026. Áp dụng Quy tắc C: STA21MICRO_026 chỉ tính 1 tần suất %, không thể thay thế bài lập Bảng tần số & Tần suất % đầy đủ (N=12).
interaction_and_paper_format: ADAPT_INTERACTIVE (Structured Percentage Table) / KEEP_PAPER_WRITTEN
grading_policy_and_misconceptions: Bảng tần suất %: 8,3%, 16,7%, 25%, 33,3%, 16,7%. Cho phép sai số làm tròn phần trăm ±0.1%.
r2_verdict: PASS
delta_vs_r1: Nâng từ INSUFFICIENT_EVIDENCE lên PASS nhờ đối soát S1 & xác định tính độc lập không thể thay thế.
```

---

### QUY TẮC CHẤM MỞ RỘNG VÀ PHÂN BIỆT HỌC VS. ĐÁNH GIÁ

1. **Chính sách Bộ phân tích Nhập liệu (Parser & Grading Policy)**:
   * **Phân số (Rational Value vs. Irreducible Fraction)**:
     - Nếu đề bài **KHÔNG** ghi rõ yêu cầu "viết dưới dạng phân số tối giản", hệ thống chấp nhận mọi phân số bằng giá trị (ví dụ: `11/30` = `22/60`).
     - Nếu đề bài **CÓ** ghi rõ "phân số tối giản", hệ thống chỉ chấp nhận dạng rút gọn cuối cùng (`11/30`).
   * **Số thập phân & Định dạng**: Chấp nhận cả dấu phẩy `,` và dấu chấm `.` (ví dụ: `7,5` và `7.5`).
   * **Tỉ lệ thức (`03-M1-01`)**: Hệ thống chấm theo phương pháp kiểm tra đẳng thức tích chéo \\(a \cdot d = b \cdot c = 60\\) cho các số \\(a, b, c, d\\) học sinh chọn, đảm bảo tính khách quan và chấp nhận mọi biến thể tỉ lệ thức hợp lệ.
   * **Đơn vị & Mẫu số 0**: Tách biệt ô nhập giá trị số và ô chọn đơn vị (`km`, `đồng`). Tự động báo lỗi nếu mẫu số bằng \\(0\\).

2. **Nguyên tắc Phân tách Học tập (Formative Practice) vs. Đánh giá Độc lập (Core Readiness)**:
   * **Formative Practice (Micro/Practice Room)**: Cho phép mở Gợi ý, AI Tutor, Luyện câu tương tự, và xem Lời giải chi tiết sau mỗi câu.
   * **Independent Core Readiness**: Khóa hoàn toàn Gợi ý và AI Tutor; không hiển thị đúng/sai từng câu trong lúc làm; chỉ trả kết quả và phản hồi sau khi bấm Nộp bài.
   * **Cấm bê nguyên Key**: Tuyệt đối **KHÔNG** đưa đáp án từ ngân hàng Micro sang làm bài Tự kiểm tra Core Readiness hoặc bài kiểm tra tổng hợp khi chưa được kiểm định qua Ma trận Ma trận Đề (Blueprint).

---

### KẾT LUẬN TOÀN DIỆN CHO GÓI (PACKET VERDICT)

```text
PACKET_ID|MATH-EXERCISE-RECLASSIFY-W1-20261015
ACADEMIC_CONTENT_VERDICT|ACADEMIC_ITEMS_PASS
DEPLOYMENT_VERDICT|REVISE_CANONICAL_POINTERS_REQUIRED

SUMMARY_COUNTS:
- TOTAL_REVIEWED: 19
- PASS (Academic Content & Placement Verified): 16
- REVISE (Canonical Pointer Redirection Required): 3 (04-WR-02, 02-G6-WR-02, 02-G6-WR-04)
- INSUFFICIENT_EVIDENCE: 0

CLEARANCE|ACADEMIC_CONTENT_AUDIT_COMPLETE_PENDING_POINTER_MIGRATION
```

---

### DANH MỤC HÀNH ĐỘNG DÀNH CHO OWNER (OWNER ACTION LIST)

1. **Thiết lập chuyển hướng Pointer Canonical (Deduplication Reconciliation)**:
   * Cấu hình `04-WR-02` dưới dạng alias/pointer trỏ về `ALG04MICRO_005`.
   * Cấu hình `02-G6-WR-02` và `02-G6-WR-04` dưới dạng bài mỏ neo chuyên sâu trỏ về `WX02-NUM-001` và `WX02-NUM-002` trong Thư viện Tự luận dùng chung.
2. **Bảo tồn khối bài tập giấy cũ (Old Markdown Page Preservation)**:
   * **KHÔNG ĐƯỢC XÓA** hay ẩn các khối bài tập tự luận cũ trên các trang Markdown (`docs/kien-thuc/*/bai-tap.md`). Việc chuyển đổi sang bài tương tác/pointer chỉ được hoàn tất sau khi kiểm toán trình duyệt (Browser QA) và được Owner nghiệm thu chính thức.
3. **Cập nhật Bộ chấm Parser tự động**:
   * Tích hợp bộ thuật toán kiểm tra tích chéo \\(ad=bc\\) cho dạng bài Tỉ lệ thức `03-M1-01`.
   * Tích hợp dung sai \\(\pm 0.1\%\\) cho các bài tập tính tần suất phần trăm `21-M4-01`.

---
*Báo cáo kiểm toán học thuật bổ sung vòng R2 hoàn tất. Mọi kết luận đều được xuất chiếu chính xác từ tập nguồn SGK KNTT và các quy tắc kiểm định của Master Plan v1.2.1.*