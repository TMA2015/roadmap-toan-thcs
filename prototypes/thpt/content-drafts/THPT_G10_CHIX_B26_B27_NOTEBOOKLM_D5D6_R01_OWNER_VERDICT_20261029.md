### 1. SOURCE_RECEIPT & ĐỐI CHIẾU TRANG IN S1 (SGK/SBT KNTT)

* **PACKET_ID:** `THPT-G10-CHIX-B26-B27-D5D6-ACADEMIC-R01`
* **MASTER_PLAN_VERSION:** `THPT-v2.0` (Owner approved Dual Complete Learning Paths)
* **Permanent Sources v2.0 áp dụng (5/5):**
  1. `01_THPT_MASTER_PLAN_v2.0.md`
  2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`
  3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`
  4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`
  5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`
* **Sách giáo khoa / Sách bài tập đối chiếu thực tế (S1 PDF):**
  * **SGK Toán 10 KNTT Tập 2 — Chương IX (Tính xác suất theo định nghĩa cổ điển):**
    * *Bài 26 (Biến cố và định nghĩa cổ điển của xác suất):* Trang in **77–82**.
    * *Bài 27 (Thực hành tính xác suất theo định nghĩa cổ điển):* Trang in **83–87**.
    * *Bài tập cuối chương IX:* Trang in **88–89**.
  * **SBT Toán 10 KNTT Tập 2 — Chương IX:**
    * *Đề bài:* Trang in **61–69** (Bài 26: pp.61–63; Bài 27: pp.64–66; Bài tập cuối chương IX: pp.67–69).
    * *Lời giải / Đáp số:* Trang in **126–131** (Bài 26: pp.126–127; Bài 27: pp.127–128; Bài tập cuối chương IX: pp.129–131).
  * **Xác minh chênh lệch Receipt:** Tệp receipt cũ trích dẫn phạm vi SBT là `pp.60–69` hoặc `pp.60–67`. Đối chiếu trực tiếp Mục lục SBT Toán 10 Tập 2 xác nhận Chương IX bắt đầu chính xác từ trang **61** đến trang **69**. Cần chỉnh lý số trang chính thức trong hồ sơ lưu trữ.

---

### 2. CANONICAL ID RECONCILIATION & HELPER REGISTER (16/16)

#### Bảng ID Reconciliation
* **EXPECTED_CANONICAL_ITEMS:** 16 (14 Formative C/P + 2 Written/Anchor)
* **REVIEWED_CANONICAL_ITEMS:** 16
* **MISSING_CANONICAL_ITEMS:** 0
* **DUPLICATED_CANONICAL_ITEMS:** 0
* **UNEXPECTED_CANONICAL_ITEMS:** 0
* **EXPECTED_HELP_ID:** 4
* **REVIEWED_HELP_ID:** 4
* **EXPECTED_FIGURE_ID:** 2 (`FIG01`, `FIG02`)
* **REVIEWED_FIGURE_ID:** 2

#### Bảng Kiểm toán 16 Canonical IDs liên kết (Bảo toàn 100%)
* **Bài 26 (8 IDs):**
  * *Formative (7):* `THPT-G10-B26-C01`, `THPT-G10-B26-C02`, `THPT-G10-B26-P01`, `THPT-G10-B26-P02`, `THPT-G10-B26-P03`, `THPT-G10-B26-P04`, `THPT-G10-B26-P05`
  * *Written (1):* `THPT-G10-CHIX-W26-01`
* **Bài 27 (8 IDs):**
  * *Formative (7):* `THPT-G10-B27-C01`, `THPT-G10-B27-C02`, `THPT-G10-B27-P01`, `THPT-G10-B27-P02`, `THPT-G10-B27-P03`, `THPT-G10-B27-P04`, `THPT-G10-B27-P05`
  * *Written (1):* `THPT-G10-CHIX-W27-ANCHOR-01` (Nhãn Anchor gán trên tệp Written, không nhân bản ID).
* **Bảo toàn:** 16 ID cũ giữ nguyên toàn bộ stem, answer key, hint và rubric; không tạo `item_id` mới.

---

### 3. KIỂM TOÁN CHI TIẾT 4 THẺ D6 REMEDIATION (HELP_ID)

| HELP_ID | Bài SGK | Chẩn đoán lỗi & Bản chất toán học | Căn cứ SGK S1 & Điều kiện biên | Verdict |
| :--- | :--- | :--- | :--- | :--- |
| `D6-G10-B26-01` | B26 | **Đồng nhất nhãn kết quả với kết quả sơ cấp:** Sai lầm gộp nhiều kết quả thành nhãn màu/tổng chấm rồi giả định đồng khả năng. Bản chất: \\(P(A)=\frac{n(A)}{n(\Omega)}\\) chỉ đúng khi các kết quả sơ cấp đồng khả năng. | SGK B26 p.77–80. Điều kiện: \\(\Omega\\) hữu hạn, các phần tử có khả năng xuất hiện như nhau. Trực quan, chính xác. | **PASS** |
| `D6-G10-B26-02` | B26 | **Nhầm "hoặc", biến cố đối và xác suất bé:** Sai lầm cộng xác suất không trừ phần giao hoặc coi \\(P(A)\\) bé là không thể xảy ra. Bản chất: \\(\bar{A}=\Omega \setminus A\\), \\(n(A \cup B)=n(A)+n(B)-n(A \cap B)\\). | SGK B26 p.79 (Biến cố đối), p.81 (Nguyên lý xác suất bé). Diễn giải đúng bản chất xác suất bé là "khó xảy ra", không phỏng đoán tần suất chắc chắn. | **PASS** |
| `D6-G10-B27-01` | B27 | **Đếm lá sơ đồ cây không đồng khả năng:** Sai lầm chia số lá thuận lợi cho tổng số lá khi các nhánh có xác suất khác nhau (rút không hoàn lại). Bản chất: Đếm lá chỉ đúng khi mọi lá đồng khả năng. | SGK B27 p.84–85 (Sơ đồ cây). Yêu cầu kiểm tra điều kiện hoàn lại/không hoàn lại trước khi đếm lá. | **PASS** |
| `D6-G10-B27-02` | B27 | **Lẫn mẫu có thứ tự và tổ hợp:** Sai lầm đếm tử số theo tổ hợp \\(C_n^k\\) nhưng mẫu số đếm theo chuỗi có thứ tự \\(A_n^k\\). Bản chất: Tử và mẫu phải đồng bộ mô hình đếm và giả thiết đồng khả năng. | SGK B27 p.83 (Phương pháp tổ hợp). Nhấn mạnh tính nhất quán mô hình và sử dụng biến cố đối cho bài toán "ít nhất một". | **PASS** |

---

### 4. KIỂM TOÁN CHI TIẾT 2 HÌNH D5 VISUAL ELEMENTS (SVG FIG01 & FIG02)

#### 1. `FIG01` (D5 SVG — Bài 26: 1 đồng xu × 1 xúc xắc, Bảng \\(2 \times 6\\))
* **Mô hình toán học:** Phép thử gieo 1 đồng xu cân đối và 1 con xúc xắc cân đối.
  * Kết quả sơ cấp dạng cặp \\((x, y)\\) với \\(x \in \{N, S\}\\) và \\(y \in \{1, 2, 3, 4, 5, 6\}\\).
  * Tổng số kết quả sơ cấp đồng khả năng: \\(n(\Omega) = 2 \times 6 = 12\\).
  * Biến cố \\(A\\): "Số chấm chia hết cho 3" \\(\implies y \in \{3, 6\}\\).
  * Tập kết quả thuận lợi: \\(A = \{(N,3), (N,6), (S,3), (S,6)\} \implies n(A) = 4\\).
  * Xác suất: \\(P(A) = \frac{4}{12} = \frac{1}{3}\\).
* **Đánh giá XML & Thiết kế:**
  * Kích thước viewbox \\(1120 \times 680\\), thẻ `<title>` và `<desc>` hỗ trợ đọc màn hình chuẩn accessibility.
  * Đúng 4 ô được làm nổi bật (\\(N,3\\)), (\\(N,6\\)), (\\(S,3\\)), (\\(S,6\\)) với viền stroke 4px (`#047857`), nền xanh nhạt (`#ecfdf5`), kèm ký hiệu dấu sao `*` độc lập với màu sắc.
  * Ghi chú rõ điều kiện đồng khả năng và độc lập.
* **Phạm vi Core & An toàn:** Phù hợp hoàn toàn chuẩn SGK B26. Không làm rò rỉ đáp án các câu hỏi Readiness held-out.
* **Verdict:** **PASS** (Yêu cầu QA thiết bị độc lập về responsive layout).

#### 2. `FIG02` (D5 SVG — Bài 27: Rút 2 thẻ không hoàn lại từ 4 thẻ \\(R_1, R_2, B_1, B_2\\), Sơ đồ cây)
* **Mô hình toán học:** Có 4 thẻ phân biệt \\(R_1, R_2, B_1, B_2\\) (2 đỏ, 2 xanh), rút 2 lần không hoàn lại.
  * Lượt 1 có 4 khả năng; Lượt 2 có 3 khả năng cho mỗi nhánh.
  * Tổng số cặp kết quả có thứ tự: \\(4 \times 3 = 12\\) kết quả đồng khả năng (mỗi cặp xác suất \\(\frac{1}{12}\\)).
  * Phân bố nhãn gộp màu (Không đồng khả năng):
    * \\(RR = \{(R_1, R_2), (R_2, R_1)\} \implies 2\\) kết quả \\(\implies P(RR) = \frac{2}{12}\\).
    * \\(RB = \{(R_1, B_1), (R_1, B_2), (R_2, B_1), (R_2, B_2)\} \implies 4\\) kết quả \\(\implies P(RB) = \frac{4}{12}\\).
    * \\(BR = \{(B_1, R_1), (B_1, R_2), (B_2, R_1), (B_2, R_2)\} \implies 4\\) kết quả \\(\implies P(BR) = \frac{4}{12}\\).
    * \\(BB = \{(B_1, B_2), (B_2, B_1)\} \implies 2\\) kết quả \\(\implies P(BB) = \frac{2}{12}\\).
    * Tổng xác suất \\(\frac{2}{12} + \frac{4}{12} + \frac{4}{12} + \frac{2}{12} = 1\\).
* **Đánh giá XML & Thiết kế:**
  * Viewbox \\(1600 \times 1160\\), cấu trúc sơ đồ cây vẽ chính xác 12 lá.
  * Khung nhãn gộp màu hiển thị trực quan sự khác biệt giữa xác suất từng cặp sơ cấp (\\(\frac{1}{12}\\)) và xác suất nhãn gộp (\\(RR: 2/12, RB: 4/12, BR: 4/12, BB: 2/12\\)).
* **Phạm vi Core & An toàn:** Sử dụng sơ đồ cây đếm kết quả sơ cấp đúng chuẩn SGK Lớp 10 B27, không bị vượt cấp sang công thức xác suất có điều kiện \\(P(A|B)\\) của Lớp 12.
* **Verdict:** **PASS**.

---

### 5. PHÂN LOẠI LỖI P0 / P1 / P2 VÀ MINIMAL DELTA

* **Lỗi P0 (Blocker - Sai toán học / Lộ đáp án Readiness):** **0 lỗi**.
* **Lỗi P1 (Revisions Required - Thiếu điều kiện / Sai lệch receipt):** **1 lỗi P1** (Thuộc về hồ sơ lưu trữ receipt):
  * `P1-1` (Receipt Audit): Receipt cũ ghi nhận phạm vi SBT Chương IX là `pp.60–69` hoặc `60–67`. Cần cập nhật chuẩn theo Mục lục SBT Toán 10 Tập 2: `SBT_PAGES: 61–69` (Đề bài pp.61–69, Lời giải pp.126–131).
* **Lỗi P2 (Minor Improvement - Diễn đạt / UI):** **1 lỗi P2**:
  * `P2-1` (D5 SVG Rendering): Do sơ đồ cây `FIG02` có viewbox rộng (\\(1600 \times 1160\\)), cần QA hiển thị thực tế trên thiết bị di động để tránh vỡ khung hình.

#### Bảng Minimal Delta Hồ sơ (Chỉnh lý Receipt S1)
```yaml
source_receipt_delta:
  sgk_grade_10_vol_2:
    chapter_IX_title: "Tính xác suất theo định nghĩa cổ điển"
    lesson_26_printed_pages: "77–82"
    lesson_27_printed_pages: "83–87"
    chapter_review_printed_pages: "88–89"
  sbt_grade_10_vol_2:
    chapter_IX_printed_pages: "61–69" # Corrected from legacy 60–69 claim
    lesson_26_problems_pages: "61–63"
    lesson_26_solutions_pages: "126–127"
    lesson_27_problems_pages: "64–66"
    lesson_27_solutions_pages: "127–128"
    chapter_review_problems_pages: "67–69"
    chapter_review_solutions_pages: "129–131"
```

---

### 6. ĐÁNH GIÁ TỔNG THỂ ĐỘ SÂU D5 VÀ D6 (D5_OVERALL & D6_OVERALL)

* **D5_OVERALL (Visual & Illustrative Depth):** **PASS**
  * Hai minh họa SVG (`FIG01` và `FIG02`) đạt chuẩn cao về mặt toán học và sư phạm. Giải quyết trực quan rào cản khái niệm "kết quả sơ cấp đồng khả năng" và "mô hình chọn không hoàn lại".
  * Tuân thủ các tiêu chuẩn thiết kế phẳng, phối màu tương phản, có đầy đủ thuộc tính accessibility.
* **D6_OVERALL (Help & Remediation Depth):** **PASS**
  * 4 thẻ D6 chẩn đoán đúng 4 vướng mắc phổ biến nhất của học sinh khi làm bài tập xác suất Lớp 10.
  * Lộ trình tự học 5 bước hướng dẫn học sinh phương pháp tư duy toán học chuẩn xác chứ không làm hộ bài tập.
  * Ánh xạ đúng 100% với 16 canonical IDs công khai đã có.

---

### 7. LESSON_VERDICTS (2/2) VÀ ACADEMIC_CLEARANCE_FOR_THIS_DELTA

#### LESSON_VERDICTS
1. **LESSON_B26 (Biến cố và định nghĩa cổ điển của xác suất):** **PASS**
   * `D6-G10-B26-01`: PASS
   * `D6-G10-B26-02`: PASS
   * `D5-FIG01`: PASS
2. **LESSON_B27 (Thực hành tính xác suất theo định nghĩa cổ điển):** **PASS**
   * `D6-G10-B27-01`: PASS
   * `D6-G10-B27-02`: PASS
   * `D5-FIG02`: PASS

---

#### ACADEMIC_CLEARANCE_FOR_THIS_DELTA

* **PACKET_VERDICT:** **PASS** (Toàn bộ 4 thẻ D6 Remediation và 2 hình D5 SVG đạt chuẩn chính xác toán học và sư phạm).
* **ACADEMIC_CLEARANCE_FOR_THIS_DELTA:** **YES**

#### Ranh giới thẩm quyền bắt buộc:
1. `ACADEMIC_CLEARANCE: YES` áp dụng **chỉ cho đúng phạm vi học thuật** của 4 thẻ D6 và 2 hình D5 SVG trong gói `THPT-G10-CHIX-B26-B27-D5D6-ACADEMIC-R01`.
2. **Không tự động cấp quyền phát hành (Release / Deploy):** Cần tiếp tục qua cổng Technical QA, Browser/Device QA (hiển thị SVG) và kiểm thử CI/CD trước khi xuất bản.
3. **Không suy rộng phạm vi:** Kết luận **không** có nghĩa toàn bộ Chương IX hay nhánh Chuyên đề học tập đã PASS.
4. **Giữ nguyên trạng thái riêng tư:** Không làm thay đổi 6 câu SGK Readiness đang giữ kín, không bật runtime Readiness credit hay tự động cập nhật Mastery.

---

🎯 *Toàn bộ nội dung học thuật D5+D6 thuộc đợt review R01 của Chương IX đã hoàn tất kiểm toán độc lập và đạt điều kiện chuyển sang cổng QA kỹ thuật tiếp theo.*