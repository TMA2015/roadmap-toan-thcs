### 1. SOURCE_RECEIPT & PHẠM VI KIỂM TOÁN

* **PACKET_ID:** `THPT-G10-CHIV-B07-B08-D1D6-AUTHORING-20261029-R01`
* **MASTER_PLAN_VERSION:** `THPT-v2.0` (Owner approved Dual Complete Learning Paths)
* **Permanent Sources v2.0 áp dụng (5/5):**
  1. `01_THPT_MASTER_PLAN_v2.0.md`
  2. `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`
  3. `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`
  4. `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`
  5. `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`
* **Sách giáo khoa / Sách bài tập đối chiếu thực tế (S1):**
  * **SGK Toán 10 KNTT Tập 1 — Chương IV (Vectơ):**
    * *Bài 7 (Các khái niệm mở đầu):* Trang in **46–50**.
    * *Bài 8 (Tổng và hiệu của hai vectơ):* Trang in **51–54**.
  * **SBT Toán 10 KNTT Tập 1:**
    * *Bài 7:* Trang in **45–47**.
    * *Bài 8:* Trang in **48–50**.
* **Quy ước học thuật S1 quan trọng (SBT B07 p.45):** Vectơ-không \\(\vec{0}\\) có độ dài bằng 0 và được quy ước **cùng phương, cùng hướng với mọi vectơ**.
* **Temporary Review Packet Snapshot:** `Temp_THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01.md`
* **Phạm vi kiểm toán độc lập:** Thẩm định toàn bộ lý thuyết D1, 6 ví dụ D2, 10 outcomes (OUTCOME_MATRIX), 18 câu hỏi/tự luận (16 Formative + 2 Written), 2 hình SVG D5 và 4 thẻ hỗ trợ D6 thuộc Bài 7 và Bài 8.

---

### 2. ID RECONCILIATION & BẢNG ĐỐI CHIẾU 18 CANONICAL CANDIDATE IDs

#### Thống kê ID
* **EXPECTED_FORMATIVE_ITEM_ID:** 16 (4 SGK_CORE + 12 SGK_PRACTICE)
* **EXPECTED_WRITTEN_ITEM_ID:** 2 (gồm 1 nhãn Anchor)
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
| `THPT-G10-B07-C01` | B07 | SGK_CORE | `G10-B07-DEFINITION` | BASIC | **PASS** | Vectơ \\(\overrightarrow{AB}\\) có điểm đầu \\(A\\), điểm cuối \\(B\\). Đáp án B đúng. |
| `THPT-G10-B07-C02` | B07 | SGK_CORE | `G10-B07-EQUALITY` | BASIC | **PASS** | Hai vectơ bằng nhau \\(\iff\\) cùng hướng và cùng độ dài. Đáp án C đúng. |
| `THPT-G10-B07-P01` | B07 | SGK_PRACTICE | `G10-B07-LENGTH` | CORE_APPLY | **PASS** | \\(AB=7\text{ cm} \implies |\overrightarrow{BA}| = BA = AB = 7\text{ cm}\\). |
| `THPT-G10-B07-P02` | B07 | SGK_PRACTICE | `G10-B07-EQUALITY` | CORE_APPLY | **PASS** | Hình bình hành \\(ABCD \implies \overrightarrow{AB} = \overrightarrow{DC}\\). Đáp án A đúng. |
| `THPT-G10-B07-P03` | B07 | SGK_PRACTICE | `G10-B07-DIRECTION` | CORE_APPLY | **PASS** | Trong \\(ABCD\\), vectơ cùng độ dài và ngược hướng với \\(\overrightarrow{AB}\\) là \\(\overrightarrow{CD}\\). |
| `THPT-G10-B07-P04` | B07 | SGK_PRACTICE | `G10-B07-ZERO` | CORE_APPLY | **PASS** | \\(\vec{0}\\) có độ dài 0 và cùng hướng với mọi vectơ theo quy ước SBT p.45. Đáp án D đúng. |
| `THPT-G10-B07-P05` | B07 | SGK_PRACTICE | `G10-B07-DIRECTION` | CORE_APPLY | **PASS** | \\(A,C,B\\) thẳng hàng theo thứ tự đó \\(\implies \overrightarrow{AC}\\) và \\(\overrightarrow{CB}\\) cùng hướng nhưng \\(3 \neq 2\\) nên không bằng nhau. Đáp án B đúng. |
| `THPT-G10-B07-P06` | B07 | SGK_PRACTICE | `G10-B07-LENGTH` | APPLICATION | **PASS** | Tàu đi Đông 4 km, Bắc 3 km \\(\implies |\overrightarrow{AB}| = \sqrt{4^2+3^2} = 5\text{ km}\\) (khác quãng đường 7 km). |
| `THPT-G10-B08-C01` | B08 | SGK_CORE | `G10-B08-TRIANGLE` | BASIC | **PASS** | Quy tắc 3 điểm: \\(\overrightarrow{AB} + \overrightarrow{BC} = \overrightarrow{AC}\\). Đáp án A đúng. |
| `THPT-G10-B08-C02` | B08 | SGK_CORE | `G10-B08-PARALLELOGRAM` | BASIC | **PASS** | Hình bình hành \\(ABCD \implies \overrightarrow{AB} + \overrightarrow{AD} = \overrightarrow{AC}\\). Đáp án B đúng. |
| `THPT-G10-B08-P01` | B08 | SGK_PRACTICE | `G10-B08-OPPOSITE-SUBTRACTION` | CORE_APPLY | **PASS** | \\(\overrightarrow{AB} + \overrightarrow{BA} = \overrightarrow{AA} = \vec{0}\\). |
| `THPT-G10-B08-P02` | B08 | SGK_PRACTICE | `G10-B08-OPPOSITE-SUBTRACTION` | CORE_APPLY | **PASS** | Quy tắc trừ: \\(\overrightarrow{AB} - \overrightarrow{AC} = \overrightarrow{CB}\\). |
| `THPT-G10-B08-P03` | B08 | SGK_PRACTICE | `G10-B08-TRIANGLE` | CORE_APPLY | **PASS** | \\(\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA} = \overrightarrow{AA} = \vec{0}\\). |
| `THPT-G10-B08-P04` | B08 | SGK_PRACTICE | `G10-B08-MIDPOINT` | CORE_APPLY | **PASS** | \\(M\\) trung điểm \\(AB \iff \overrightarrow{MA} + \overrightarrow{MB} = \vec{0}\\). Đáp án C đúng. |
| `THPT-G10-B08-P05` | B08 | SGK_PRACTICE | `G10-B08-CENTROID` | CORE_APPLY | **PASS** | \\(G\\) trọng tâm \\(\Delta ABC \implies \overrightarrow{GA} + \overrightarrow{GB} + \overrightarrow{GC} = \vec{0}\\). |
| `THPT-G10-B08-P06` | B08 | SGK_PRACTICE | `G10-B08-PARALLELOGRAM` | APPLICATION | **PASS** | Hai lực 3 N và 4 N vuông góc \\(\implies F = \sqrt{3^2+4^2} = 5\text{ N}\\). |
| `THPT-G10-CHIV-W07` | B07 | WRITTEN | `G10-B07-EQUALITY` | APPLICATION | **PASS** | \\(ABCD\\) có \\(AB=6, AD=4\\). Chứng minh \\(\overrightarrow{AB}=\overrightarrow{DC}\\), \\(\overrightarrow{CD}\\) đối \\(\overrightarrow{AB}\\), \\(\overrightarrow{AO}=\overrightarrow{OC}\\). Rubric 7 điểm chuẩn. |
| `THPT-G10-CHIV-W08-ANCHOR` | B08 | WRITTEN / ANCHOR | `G10-B08-MIDPOINT` | APPLICATION | **PASS** | \\(M\\) trung điểm \\(BC \implies \overrightarrow{EB}+\overrightarrow{EC}=2\overrightarrow{EM}\\); chứng minh hệ thức trọng tâm \\(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}\\). Rubric 7 điểm. |

---

### 3. MA TRẬN MỤC TIÊU VÀ NGUỒN S1 (OUTCOME_MATRIX 10/10)

| Outcome ID | Mô tả mục tiêu SGK | Vị trí S1 SGK / SBT | Bằng chứng học liệu | Coverage Status |
| :--- | :--- | :--- | :--- | :--- |
| `G10-B07-DEFINITION` | Khái niệm vectơ, điểm đầu/cuối, đoạn thẳng có hướng | SGK B07 p.46–47; SBT p.45 | `THPT-G10-B07-C01`, `EX-G10-B07-01` | **FULL** |
| `G10-B07-LENGTH` | Độ dài vectơ, phân biệt độ dài và hướng | SGK B07 p.47; SBT p.45 | `THPT-G10-B07-P01`, `P06` | **FULL** |
| `G10-B07-DIRECTION` | Cùng phương, cùng hướng, ngược hướng | SGK B07 p.48–49; SBT p.45–46 | `THPT-G10-B07-P03`, `P05`, `EX-02` | **FULL** |
| `G10-B07-EQUALITY` | Hai vectơ bằng nhau (cùng hướng và cùng độ dài) | SGK B07 p.48–49; SBT p.45–46 | `THPT-G10-B07-C02`, `P02`, `W07` | **FULL** |
| `G10-B07-ZERO` | Khái niệm vectơ-không theo quy ước KNTT | SGK B07 p.49–50; SBT p.45 | `THPT-G10-B07-P04`, `EX-02` | **FULL** |
| `G10-B08-TRIANGLE` | Phép cộng vectơ và quy tắc 3 điểm | SGK B08 p.51–52; SBT p.48 | `THPT-G10-B08-C01`, `P03`, `EX-01` | **FULL** |
| `G10-B08-PARALLELOGRAM` | Quy tắc hình bình hành và tổng hợp lực | SGK B08 p.52–53; SBT p.48–49 | `THPT-G10-B08-C02`, `P06`, `EX-02` | **FULL** |
| `G10-B08-OPPOSITE-SUBTRACTION` | Vectơ đối, phép trừ và quy tắc trừ | SGK B08 p.52–53; SBT p.48–49 | `THPT-G10-B08-P01`, `P02`, `EX-02` | **FULL** |
| `G10-B08-MIDPOINT` | Hệ thức vectơ trung điểm | SGK B08 p.53; SBT p.48–50 | `THPT-G10-B08-P04`, `W08-ANCHOR` | **FULL** |
| `G10-B08-CENTROID` | Hệ thức vectơ trọng tâm tam giác | SGK B08 p.53; SBT p.48–50 | `THPT-G10-B08-P05`, `W08-ANCHOR` | **FULL** |

---

### 4. THẨM ĐỊNH LÝ THUYẾT D1, VÍ DỤ D2, HÌNH SVG D5 VÀ THẺ D6

#### A. Lý thuyết D1 & 6 Ví dụ D2
* **D1 (Bài 7 & Bài 8):** Định nghĩa vectơ, độ dài \\(|\overrightarrow{AB}|\\), hai vectơ cùng phương/cùng hướng, hai vectơ bằng nhau, quy ước vectơ-không \\(\vec{0}\\) theo KNTT; quy tắc 3 điểm, quy tắc hình bình hành, vectơ đối, quy tắc trừ \\(\overrightarrow{AB}-\overrightarrow{AC}=\overrightarrow{CB}\\), hệ thức trung điểm \\(\overrightarrow{MA}+\overrightarrow{MB}=\vec{0}\\) và trọng tâm \\(\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}=\vec{0}\\).
* **6 Ví dụ D2 (`EX-G10-B07-01` đến `03`, `EX-G10-B08-01` đến `03`):** Phân tích sư phạm sắc bén: phân biệt \\(\overrightarrow{AB}=\overrightarrow{DC}\\) với \\(\overrightarrow{CD}\\) ngược hướng; quy ước \\(\vec{0}\\); phân biệt độ dài độ dời (5 km) với quãng đường thực đi (7 km); rút gọn chỗi 3 điểm; và hợp lực vuông góc bằng định lý Pitago (5 N).

#### B. 2 Hình D5 SVG Visuals
1. **`FIG-G10-B07-01` (SVG Bài 7 — Hình bình hành \\(ABCD\\): Vectơ bằng nhau & đối nhau):**
   * *Hình học & Cấu trúc XML:* \\(A(140,365), B(440,365), C(580,155), D(280,155)\\).
     * \\(\overrightarrow{AB}\\) và \\(\overrightarrow{DC}\\) vẽ nét liền xanh dương cùng chiều từ trái sang phải (\\(|\overrightarrow{AB}|=|\overrightarrow{DC}|=300\\)).
     * \\(\overrightarrow{CD}\\) vẽ nét đứt màu hồng ngược chiều sang trái (\\(|\overrightarrow{CD}|=300\\)).
     * Tọa độ giao điểm 2 đường chéo \\(O(360,260)\\) chính xác \\(100\%\\) về mặt hình học tích:
       \\[\text{Trung điểm } AC = \left(\frac{140+580}{2}, \frac{365+155}{2}\right) = (360, 260)\\]
       \\[\text{Trung điểm } BD = \left(\frac{440+280}{2}, \frac{365+155}{2}\right) = (360, 260)\\]
     * Mã XML sạch, đầy đủ thẻ gán nhãn accessibility (`role="img"`, `aria-labelledby`, `<title>`, `<desc>`). **VERDICT: PASS**.
2. **`FIG-G10-B08-01` (SVG Bài 8 — Quy tắc 3 điểm & Quy tắc hình bình hành):**
   * *Hình học & Cấu trúc XML:* \\(A(122,392), B(410,392), C(560,172), D(272,172)\\).
     * Vectơ \\(\overrightarrow{AB}\\) (xanh dương), \\(\overrightarrow{BC}\\) (xanh ngọc), \\(\overrightarrow{AD}\\) (xanh ngọc nét đứt), đường chéo tổng \\(\overrightarrow{AC}\\) (hồng) thể hiện minh bạch đồng thời quy tắc 3 điểm \\(\overrightarrow{AB}+\overrightarrow{BC}=\overrightarrow{AC}\\) và quy tắc hình bình hành \\(\overrightarrow{AB}+\overrightarrow{AD}=\overrightarrow{AC}\\). **VERDICT: PASS**.

#### C. 4 Thẻ Remediation D6 (HELP_IDs)
1. `HELP-G10-B07-01` (Nhầm điểm đầu/cuối và chiều của vectơ): **PASS**.
2. `HELP-G10-B07-02` (Nhầm cùng phương, cùng hướng, bằng nhau & quy ước vectơ-không): **PASS**.
3. `HELP-G10-B08-01` (Nhầm hướng và thứ tự quy tắc 3 điểm/hiệu): **PASS**.
4. `HELP-G10-B08-02` (Quên giao điểm trung điểm/trọng tâm, suy luận sai hợp lực): **PASS**.
* *Đánh giá D6:* Tuân thủ đúng mô-đun 5 bước chẩn đoán điểm nghẽn và tự sửa, liên kết chính xác sang các câu hỏi thực hành đã có, hoàn toàn không làm rò rỉ đáp án các bài kiểm tra đánh giá độc lập.

---

### 5. PHÂN LOẠI LỖI P0 / P1 / P2 VÀ MINIMAL DELTA

* **Lỗi P0 (Blocker - Sai toán học / Lộ đáp án Readiness):** **0 lỗi**.
* **Lỗi P1 (Revisions Required - Thiếu điều kiện / Sai vị trí S1):** **0 lỗi**.
* **Lỗi P2 (Minor Improvement - Đăng ký ID & Hạ tầng):** **1 lỗi P2**:
  * `P2-1`: 18 Candidate Item IDs là các mã đề xuất mới. Cần thực hiện đăng ký chính thức vào ngân hàng dữ liệu canonical chung của hệ thống trước khi kích hoạt công khai; đồng thời thực hiện QA hiển thị responsive SVG trên màn hình thiết bị di động.

#### MINIMAL DELTA
* **MINIMAL_DELTA = 0** (Nội dung toán học, định nghĩa vectơ, các quy tắc cộng/trừ, quy ước vectơ-không theo KNTT, hình vẽ SVG và bài toán hợp lực đạt chuẩn tuyệt đối, không cần chỉnh sửa nội dung).

---

### 6. ĐÁNH GIÁ TỔNG THỂ ĐỘ SÂU D1–D6 (D1–D6_OVERALL)

* **D1_OVERALL (Theory):** **PASS** — Trình bày định nghĩa vectơ, các quan hệ hướng và phép toán hình học chặt chẽ.
* **D2_OVERALL (Worked Examples):** **PASS** — 6 ví dụ giải mẫu phân tích sâu sắc các điểm nút tư duy và sai lầm phổ biến.
* **D3_OVERALL (Interactive Practice):** **PASS** — 16 câu Formative bao phủ hoàn hảo ma trận 10 outcomes.
* **D4_OVERALL (Written Reasoning):** **PASS** — 2 bài tự luận chuẩn hóa kèm rubric 7 điểm minh bạch.
* **D5_OVERALL (Visual Elements):** **PASS** — 2 hình SVG chính xác tuyệt đối về hình học tọa độ và véc-tơ.
* **D6_OVERALL (Help & Remediation):** **PASS** — 4 thẻ D6 hướng dẫn tự sửa lỗi đạt chất lượng sư phạm cao.

---

### 7. LESSON_VERDICTS VÀ ACADEMIC_CLEARANCE_FOR_THIS_DELTA

#### LESSON_VERDICTS
1. **LESSON_B07 (Các khái niệm mở đầu):** **PASS**
2. **LESSON_B08 (Tổng và hiệu của hai vectơ):** **PASS**

---

#### ACADEMIC_CLEARANCE_FOR_THIS_DELTA

* **PACKET_VERDICT:** **PASS**
* **ACADEMIC_CLEARANCE_FOR_THIS_DELTA:** **YES**

#### Ranh giới thẩm quyền bắt buộc:
1. `ACADEMIC_CLEARANCE: YES` áp dụng **chính xác và duy nhất** cho phạm vi học thuật của **Bài 7 và Bài 8 (Toán 10 KNTT Tập 1)** thuộc snapshot `Temp_THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01.md`.
2. **Không suy rộng phạm vi:** Kết luận **KHÔNG** áp dụng cho Bài 9–11, toàn bộ Chương IV, nhánh Chuyên đề học tập, các bài tập Tự kiểm tra (Readiness), điểm số Mastery, hay quyền tự động phát hành (Release / Deploy).
3. **Không tự động cấp quyền phát hành (Release / Deploy):** Xác nhận học thuật này **không** thay thế cho Technical QA, Browser/Device QA, kiểm thử CI/CD, hay quyết định Merge/Deploy của chủ dự án.
4. **Giữ nguyên trạng thái hệ thống:** Không làm thay đổi code engine, không tự động cộng điểm Mastery hay thay đổi dữ liệu lịch sử người học.

---

🚀 *Toàn bộ học liệu D1–D6 thuộc gói R01 cho Bài 7 và Bài 8 (Toán 10 KNTT Tập 1) đã hoàn tất thẩm định học thuật độc lập và đạt chuẩn ACADEMIC_PASS.*
