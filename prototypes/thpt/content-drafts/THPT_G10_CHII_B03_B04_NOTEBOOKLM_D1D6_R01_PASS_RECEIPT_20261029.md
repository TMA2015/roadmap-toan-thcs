### 1. SOURCE_RECEIPT & PHẠM VI KIỂM TOÁN

* **PACKET_ID:** `THPT-G10-CHII-B03-B04-D1D6-AUTHORING-20261029-R01`
* **MASTER_PLAN_VERSION:** `THPT-v2.0` (Owner approved Dual Complete Learning Paths)
* **Permanent Sources v2.0 áp dụng (5/5):**
  1. `01_THPT_MASTER_PLAN_v2.0.md`
  2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`
  3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`
  4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`
  5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`
* **Sách giáo khoa / Sách bài tập đối chiếu thực tế (S1):**
  * **SGK Toán 10 KNTT Tập 1 — Chương II (Bất phương trình và hệ bất phương trình bậc nhất hai ẩn):**
    * *Bài 3 (Bất phương trình bậc nhất hai ẩn):* Trang in **22–25**.
    * *Bài 4 (Hệ bất phương trình bậc nhất hai ẩn):* Trang in **26–30**.
    * *Bài tập cuối chương II:* Trang in **31–32**.
  * **SBT Toán 10 KNTT Tập 1:**
    * *Bài 3:* Trang in **16–18**.
    * *Bài 4:* Trang in **19–23**.
    * *Bài tập cuối chương II:* Trang in **24–28** (Lời giải bắt đầu từ trang **88**).
* **Temporary Review Packet Snapshot:** `Temp_THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01.md`
* **Phạm vi kiểm toán độc lập:** Thẩm định toàn bộ lý thuyết D1, 6 ví dụ D2, 10 outcomes (OUTCOME_MATRIX), 18 câu hỏi/tự luận (16 Formative + 2 Written), 2 hình SVG D5 và 4 thẻ hỗ trợ D6 thuộc Bài 3 và Bài 4.

---

### 2. ID RECONCILIATION & BẢNG ĐỐI CHIẾU 18 CANONICAL CANDIDATE IDs

#### Thống kê ID
* **EXPECTED_FORMATIVE_ITEM_ID:** 16
* **EXPECTED_WRITTEN_ITEM_ID:** 2
* **EXPECTED_CANONICAL_TOTAL:** 18
* **REVIEWED_CANONICAL_TOTAL:** 18
* **MISSING_CANONICAL_ITEM_ID:** 0
* **DUPLICATED_CANONICAL_ITEM_ID:** 0
* **UNEXPECTED_CANONICAL_ITEM_ID:** 0
* **EXPECTED_HELP_ID:** 4 (Reviewed: 4)
* **EXPECTED_FIGURE_ID:** 2 (Reviewed: 2)
* **EXPECTED_D2_EXAMPLES:** 6 (Reviewed: 6)

#### Bảng VERDICT 18 Canonical Candidate Items (18/18 PASS)

| Item ID | Bài SGK | Loại / Placement | Outcome Mapped | Mức độ / Difficulty | Verdict | Nhận xét toán học & Lời giải |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `THPT-G10-B03-C01` | B03 | SGK_CORE | `G10-B03-LINEAR_INEQUALITY` | BASIC | **PASS** | \\(0x-3y>1\\) là BPT bậc nhất hai ẩn với \\((a,b)=(0,-3) \neq (0,0)\\). Các phương án khác chứa \\(x^2, xy\\) hoặc \\(a=b=0\\). |
| `THPT-G10-B03-C02` | B03 | SGK_CORE | `G10-B03-POINT_TEST` | BASIC | **PASS** | Thử cặp \\((2,-1)\\) vào \\(2x-y \le 5 \implies 2(2)-(-1)=5 \le 5\\) (Đúng, có nhận dấu bằng). |
| `THPT-G10-B03-P01` | B03 | SGK_PRACTICE | `G10-B03-BOUNDARY` | CORE_APPLY | **PASS** | Đường biên \\(x+3y=6\\) thuộc miền nghiệm của \\(x+3y \ge 6\\) do có dấu \\(\ge\\). |
| `THPT-G10-B03-P02` | B03 | SGK_PRACTICE | `G10-B03-HALFPLANE` | CORE_APPLY | **PASS** | \\(3x-y<2 \iff -y < 2-3x \iff y > 3x-2\\) (Nằm phía trên đường biên nét đứt, không lấy biên). |
| `THPT-G10-B03-P03` | B03 | SGK_PRACTICE | `G10-B03-POINT_TEST` | CORE_APPLY | **PASS** | Khi vẽ \\(2x+y \ge 0\\), điểm \\(O(0,0)\\) nằm trên đường biên nên không hợp lệ làm điểm thử phía. |
| `THPT-G10-B03-P04` | B03 | SGK_PRACTICE | `G10-B03-MODELING` | APPLICATION | **PASS** | \\(60x+90y \ge 18000 \iff 2x+3y \ge 600\\) với điều kiện \\(x,y \in \mathbb{Z}_{\ge 0}\\). |
| `THPT-G10-B03-P05` | B03 | SGK_PRACTICE | `G10-B03-HALFPLANE` | CORE_APPLY | **PASS** | Điểm \\((0,1)\\) thỏa \\(2(0)+3(1)=3>0\\); các điểm \\((0,0), (-3,2), (3,-2)\\) nằm trên biên nên không thỏa dấu \\(>\\). |
| `THPT-G10-B03-P06` | B03 | SGK_PRACTICE | `G10-B03-MODELING` | APPLICATION | **PASS** | Ngân sách \\(35x+20y \le 700\\) với \\(x,y \in \mathbb{Z}_{\ge 0}\\). Cặp \\((10,15)\\) thỏa \\(350+300=650 \le 700\\). |
| `THPT-G10-B04-C01` | B04 | SGK_CORE | `G10-B04-SYSTEM` | BASIC | **PASS** | Cặp \\((2,3)\\) thỏa đồng thời \\(x \ge 0, y \ge 0\\) và \\(x+y=5 \le 5\\). |
| `THPT-G10-B04-C02` | B04 | SGK_CORE | `G10-B04-REGION_INTERSECTION` | BASIC | **PASS** | Miền nghiệm của hệ \\(x \ge 0, y \ge 0, x+y \le 4\\) là tam giác kín gồm các đỉnh \\((0,0), (4,0), (0,4)\\). |
| `THPT-G10-B04-P01` | B04 | SGK_PRACTICE | `G10-B04-REGION_INTERSECTION` | CORE_APPLY | **PASS** | Điểm \\((3,4)\\) thỏa đồng thời \\(3+4=7 \le 7\\) và \\(2(3)+4=10 \le 10\\). |
| `THPT-G10-B04-P02` | B04 | SGK_PRACTICE | `G10-B04-LINEAR_OBJECTIVE` | CORE_APPLY | **PASS** | Đa giác nghiệm có đỉnh \\((0,0), (5,0), (3,4), (0,7)\\). Giá trị \\(F=4x+3y\\) đạt cực đại bằng \\(24\\) tại \\((3,4)\\). |
| `THPT-G10-B04-P03` | B04 | SGK_PRACTICE | `G10-B04-LINEAR_OBJECTIVE` | CORE_APPLY | **PASS** | Tối đa hóa \\(F=x+y\\) trên \\(x \ge 0, y \ge 0, x+y \le 8\\): Mọi điểm trên đoạn nối \\((8,0)\\) và \\((0,8)\\) đều đạt max \\(F=8\\). |
| `THPT-G10-B04-P04` | B04 | SGK_PRACTICE | `G10-B04-FEASIBILITY` | CORE_APPLY | **PASS** | Hệ \\(x+y \le 2\\) và \\(x+y \ge 5\\) vô nghiệm vì không có \\(t=x+y\\) nào vừa \\(\le 2\\) vừa \\(\ge 5\\). |
| `THPT-G10-B04-P05` | B04 | SGK_PRACTICE | `G10-B04-FEASIBILITY` | CORE_APPLY | **PASS** | Trên miền không bị chặn \\(x \ge 0, y \ge 0\\), hàm \\(F=-x-y \le 0\\) có cực đại bằng \\(0\\) tại \\((0,0)\\) và không có cực tiểu hữu hạn. |
| `THPT-G10-B04-P06` | B04 | SGK_PRACTICE | `G10-B04-INTEGER_MODELS` | APPLICATION | **PASS** | Với \\(x,y \in \mathbb{Z}_{\ge 0}\\), hệ \\(x+2y \le 5, 2x+y \le 5\\) cho max \\(3x+2y=8\\) tại \\((2,1)\\) (khác nghiệm LP liên tục \\(25/3\\)). |
| `THPT-G10-CHI-W03` | B03 | WRITTEN | `G10-B03-MODELING` | APPLICATION | **PASS** | Bài toán gây quỹ: \\(x,y \in \mathbb{Z}_{\ge 0}, x+y \le 55, 40x+65y \ge 2600\\). Thử phương án và rubric 7 điểm chuẩn xác. |
| `THPT-G10-CHII-W04-ANCHOR` | B04 | WRITTEN / ANCHOR | `G10-B04-LINEAR_OBJECTIVE` | APPLICATION | **PASS** | Tối ưu xưởng sản xuất: Đỉnh đa giác \\((0,0), (5,0), (4,3), (0,5)\\), max \\(P=5x+4y=32\\) tại \\((4,3)\\). Rubric 7 điểm minh bạch. |

---

### 3. MA TRẬN MỤC TIÊU VÀ NGUỒN S1 (OUTCOME_MATRIX 10/10)

| Outcome ID | Mô tả mục tiêu SGK | Vị trí S1 SGK / SBT | Bằng chứng học liệu | Coverage Status |
| :--- | :--- | :--- | :--- | :--- |
| `G10-B03-LINEAR_INEQUALITY` | Khái niệm BPT bậc nhất hai ẩn, hệ số \\((a,b) \neq (0,0)\\) | SGK B03 p.22–23; SBT p.16 | `THPT-G10-B03-C01`, `EX-G10-B03-01` | **FULL** |
| `G10-B03-POINT_TEST` | Thử điểm xác định phía nghiệm (tránh điểm trên biên) | SGK B03 p.23–24; SBT p.16 | `THPT-G10-B03-C02`, `P03` | **FULL** |
| `G10-B03-BOUNDARY` | Đường biên, dấu \\(\le/\ge\\) lấy biên, \\(</>\\) không lấy | SGK B03 p.23; SBT p.17 | `THPT-G10-B03-P01`, `FIG-G10-B03-01` | **FULL** |
| `G10-B03-HALFPLANE` | Biểu diễn miền nghiệm nửa mặt phẳng, lưu ý đổi chiều | SGK B03 p.24; SBT p.17 | `THPT-G10-B03-P02`, `P05`, `FIG-01` | **FULL** |
| `G10-B03-MODELING` | Mô hình hóa thực tế, điều kiện đơn vị, không âm, nguyên | SGK B03 p.24–25; SBT p.18 | `EX-03`, `B03-P04`, `P06`, `W03` | **FULL** |
| `G10-B04-SYSTEM` | Hệ BPT bậc nhất hai ẩn, nghiệm thỏa đồng thời | SGK B04 p.26–27; SBT p.19 | `THPT-G10-B04-C01` | **FULL** |
| `G10-B04-REGION_INTERSECTION` | Miền nghiệm chung là giao các nửa mặt phẳng | SGK B04 p.27–28; SBT p.20 | `THPT-G10-B04-C02`, `P01`, `FIG-02` | **FULL** |
| `G10-B04-FEASIBILITY` | Miền rỗng, bị chặn / không bị chặn, tính khả thi | SGK B04 p.28; SBT p.21 | `THPT-G10-B04-P04`, `P05` | **FULL** |
| `G10-B04-LINEAR_OBJECTIVE` | Tối ưu hàm \\(F(x,y)=px+qy\\) trên đa giác nghiệm | SGK B04 p.28–29; SBT p.21 | `EX-01`, `B04-P02`, `P03`, `W04` | **FULL** |
| `G10-B04-INTEGER_MODELS` | Bài toán đếm/sản phẩm nguyên khác bài toán LP liên tục | SGK B04 p.29–30; SBT p.22 | `EX-03`, `B04-P06`, `W04` | **FULL** |

---

### 4. THẨM ĐỊNH LÝ THUYẾT D1, VÍ DỤ D2, HÌNH SVG D5 VÀ THẺ D6

#### A. Lý thuyết D1 & 6 Ví dụ D2
* **D1 (Bài 3 & Bài 4):** Trình bày chuẩn xác định nghĩa BPT bậc nhất hai ẩn, quy trình 5 bước biểu diễn nửa mặt phẳng, điều kiện điểm thử không thuộc biên, việc đảo chiều khi nhân/chia số âm; định nghĩa hệ BPT, miền nghiệm là giao các nửa mặt phẳng; định lý cực trị hàm mục tiêu \\(F(x,y)=px+qy\\) trên đa giác nghiệm kín bị chặn và phương pháp xét bài toán tối ưu nguyên.
* **6 Ví dụ D2 (`EX-G10-B03-01` đến `03`, `EX-G10-B04-01` đến `03`):** Phân tích mẫu sắc bén, bao gồm miền lấy biên, miền nghiêm ngặt nét đứt, bài toán trộn hàng giữ điều kiện mẫu số dương \\(x+y>0\\), hệ vô nghiệm, và bài toán quy hoạch nguyên có đỉnh liên tục không nguyên nhưng tìm đúng max nguyên bằng \\(230\\) tại \\((20,80)\\).

#### B. 2 Hình D5 SVG Visuals
1. **`FIG-G10-B03-01` (SVG Bài 3 — Miền lấy biên \\(x+2y \le 4\\) và miền nét đứt \\(2x-y < 1\\)):**
   * *Tọa độ & Cấu trúc XML:* Panel trái vẽ đường liền \\(x+2y=4\\) qua \\((0,2)\\) và \\((4,0)\\), tô nửa mặt phẳng chứa \\(O(0,0)\\); Panel phải vẽ đường nét đứt `stroke-dasharray="13 12"` cho \\(2x-y=1\\), tô miền phía trên \\(y>2x-1\\), đánh dấu rõ điểm \\((1,1)\\) trên biên không thuộc miền nghiệm. Accessibility đầy đủ (`role="img"`, `aria-labelledby`, `<title>`, `<desc>`). **VERDICT: PASS**.
2. **`FIG-G10-B04-01` (SVG Bài 4 — Đa giác nghiệm tứ giác và cực trị \\(F=3x+2y\\)):**
   * *Tọa độ & Cấu trúc XML:* Vẽ miền giao của 4 nửa mặt phẳng \\(x \ge 0, y \ge 0, x+y \le 6, 2x+y \le 8\\). Đa giác nghiệm có 4 đỉnh \\(O(0,0), A(4,0), B(2,4), C(0,6)\\). Bảng bên phải tính chính xác giá trị \\(F\\) tại 4 đỉnh: \\(0, 12, 14, 12\\), làm nổi bật cực đại bằng \\(14\\) tại \\(B(2,4)\\). **VERDICT: PASS**.

#### C. 4 Thẻ Remediation D6 (HELP_IDs)
1. `HELP-G10-B03-01` (Thử điểm nằm trên đường biên): **PASS**.
2. `HELP-G10-B03-02` (Nhầm đổi dấu khi biến đổi và xử lý đường biên): **PASS**.
3. `HELP-G10-B04-01` (Nhầm hợp với giao trong miền nghiệm hệ): **PASS**.
4. `HELP-G10-B04-02` (Tối ưu sai miền hoặc bỏ qua điều kiện nghiệm nguyên): **PASS**.
* *Đánh giá D6:* Tuân thủ đúng mô-đun 5 bước chẩn đoán điểm nghẽn và tự sửa, liên kết chính xác sang các câu hỏi thực hành đã có, hoàn toàn không làm rò rỉ đáp án các bài kiểm tra đánh giá độc lập.

---

### 5. PHÂN LOẠI LỖI P0 / P1 / P2 VÀ MINIMAL DELTA

* **Lỗi P0 (Blocker - Sai toán học / Lộ đáp án Readiness):** **0 lỗi**.
* **Lỗi P1 (Revisions Required - Thiếu điều kiện / Sai vị trí S1):** **0 lỗi**.
* **Lỗi P2 (Minor Improvement - Đăng ký ID & Hạ tầng):** **1 lỗi P2**:
  * `P2-1`: 18 Candidate Item IDs là các mã đề xuất mới. Cần thực hiện đăng ký chính thức vào ngân hàng dữ liệu canonical chung của hệ thống trước khi kích hoạt công khai; đồng thời thực hiện QA hiển thị SVG responsive trên thiết bị di động.

#### MINIMAL DELTA
* **MINIMAL_DELTA = 0** (Nội dung toán học, điều kiện nguyên, miền nghiệm, hình vẽ SVG và các mô hình tối ưu tuyến tính đạt chuẩn tuyệt đối, không cần chỉnh sửa nội dung).

---

### 6. ĐÁNH GIÁ TỔNG THỂ ĐỘ SÂU D1–D6 (D1–D6_OVERALL)

* **D1_OVERALL (Theory):** **PASS** — Định nghĩa chặt chẽ BPT, hệ BPT và thuật toán tối ưu trên đa giác.
* **D2_OVERALL (Worked Examples):** **PASS** — 6 ví dụ giải mẫu phân tích sâu sắc các điều kiện biên và bài toán quy hoạch nguyên.
* **D3_OVERALL (Interactive Practice):** **PASS** — 16 câu Formative bao phủ hoàn hảo ma trận 10 outcomes.
* **D4_OVERALL (Written Reasoning):** **PASS** — 2 bài tự luận chuẩn hóa kèm rubric 7 điểm minh bạch.
* **D5_OVERALL (Visual Elements):** **PASS** — 2 hình SVG chính xác tuyệt đối về hình học tọa độ và miền nghiệm.
* **D6_OVERALL (Help & Remediation):** **PASS** — 4 thẻ D6 hướng dẫn tự sửa lỗi đạt chất lượng sư phạm cao.

---

### 7. LESSON_VERDICTS VÀ ACADEMIC_CLEARANCE_FOR_THIS_DELTA

#### LESSON_VERDICTS
1. **LESSON_B03 (Bất phương trình bậc nhất hai ẩn):** **PASS**
2. **LESSON_B04 (Hệ bất phương trình bậc nhất hai ẩn):** **PASS**

---

#### ACADEMIC_CLEARANCE_FOR_THIS_DELTA

* **PACKET_VERDICT:** **PASS**
* **ACADEMIC_CLEARANCE_FOR_THIS_DELTA:** **YES**

#### Ranh giới thẩm quyền bắt buộc:
1. `ACADEMIC_CLEARANCE: YES` áp dụng **chính xác và duy nhất** cho phạm vi học thuật của **Bài 3 và Bài 4 (Toán 10 KNTT Tập 1)** thuộc snapshot `Temp_THPT_G10_CHII_B03_B04_D1D6_AUTHORING_R01.md`.
2. **Không suy rộng phạm vi:** Kết luận **KHÔNG** áp dụng cho toàn bộ Chương II, nhánh Chuyên đề học tập, các bài tập Tự kiểm tra (Readiness), điểm số Mastery, hay quyền tự động phát hành (Release / Deploy).
3. **Không tự động cấp quyền phát hành (Release / Deploy):** Xác nhận học thuật này **không** thay thế cho Technical QA, Browser/Device QA, kiểm thử CI/CD, hay quyết định Merge/Deploy của chủ dự án.
4. **Giữ nguyên trạng thái hệ thống:** Không làm thay đổi code engine, không tự động cộng điểm Mastery hay thay đổi dữ liệu lịch sử người học.

---

📌 *Bạn có muốn tôi hỗ trợ trích xuất toàn bộ ma trận Outcome và danh mục 18 Item IDs này thành bản tổng hợp định dạng Markdown để phục vụ công tác đối chiếu hồ sơ dự án không?*