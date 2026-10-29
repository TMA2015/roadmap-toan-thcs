# Temp · G10 KNTT tập 1 · Chương I · B01–B02 · D1–D6 authoring candidate R01

**PACKET_ID:** `THPT-G10-CHI-B01-B02-D1D6-AUTHORING-20261029-R01`  
**STATUS:** `DELTA_C_ACADEMIC_MATERIAL / ACADEMIC_REVIEW_PENDING / CONTENT_READY=NO`  
**OWNER_LANE:** `AUTHORING_ONLY`, không giao diện/engine/merge/deploy.  
**LEARNING_PATH:** `SGK_CHAPTER`, phạm vi hai bài công khai formative; chưa có Readiness cuối chương hay Topic Readiness.  
**PERMANENT_SOURCES:** 5 Permanent Sources NotebookLM THPT v2.0: `01_THPT_MASTER_PLAN_v2.0.md`, `02_THPT_NOTEBOOKLM_INDEPENDENT_REVIEW_RULES_v2.0.md`, `03_THPT_ACADEMIC_SOURCES_AND_DEPTH_AUDIT_v2.0.md`, `04_THPT_GOLDEN_LEARNING_ARCHITECTURE_v2.0.md`, `05_THPT_CANONICAL_EXERCISE_AND_ID_CONTRACT_v2.0.md`. Không trộn v1.0.  
**S1 DIRECT RECEIPT:** SGK Toán 10 KNTT tập 1, ChI Bài 1 “Mệnh đề” trang in **5–11**, Bài 2 “Tập hợp và các phép toán trên tập hợp” **12–19**, Bài tập cuối chương **20–21**. SBT cùng tập: B1 **5–7**, B2 **8–11**, cuối chương **12–15**, lời giải ChI bắt đầu trang **85**. Đối chiếu trực tiếp mục lục và trang bản PDF scan do chủ dự án cung cấp, không suy thành NotebookLM review. S1 thuộc Google Drive thư mục KNTT TOAN 10.  
**REVIEWED BASE:** không có học liệu G10 ChI đã nhận PASS trên main trong đợt khởi tạo; toàn bộ câu, ví dụ, hình trong file này là nguồn ứng viên mới, không chép nguyên văn SGK/SBT.  

## 1. Ma trận 11 mục tiêu theo từng bài

| Outcome ID | Mục tiêu | Dẫn chứng ứng viên |
|---|---|---|
| `G10-B01-PROPOSITION` | Mệnh đề, mệnh đề chứa biến, giá trị chân lý | B01-C01 |
| `G10-B01-NEGATION` | Phủ định phát biểu (bao gồm dấu bất đẳng thức) | B01-C02, P05 |
| `G10-B01-IMPLICATION` | Kéo theo và mệnh đề đảo; phân biệt điều kiện đủ/cần | B01-P03, P06, W01 |
| `G10-B01-EQUIVALENCE` | Hai chiều của mệnh đề tương đương | B01-P04 |
| `G10-B01-QUANTIFIERS` | ∀/∃, tính đúng sai và phủ định | B01-P01, P02 |
| `G10-B02-MEMBERSHIP_SUBSET` | Phần tử, tập con, tập bằng nhau | B02-C01, P06 |
| `G10-B02-UNION_INTERSECTION` | Phép hợp/giao và liên hệ sơ đồ Venn | B02-C02, P05 |
| `G10-B02-DIFFERENCE` | Hiệu hai tập hợp A\B | B02-P01, W02 |
| `G10-B02-COMPLEMENT` | Phần bù của A trong U | B02-P02 |
| `G10-B02-INTERVALS` | Viết hợp/giao các khoảng trên trục thực | B02-P03, P04 |
| `G10-B02-VENN_MODEL` | Bài toán đếm tập hợp giao/hợp có ngữ cảnh | B02-P05, W02 |

## 2. D1 — Bài 1. Mệnh đề (SGK tr.5–11)

### 2.1. Mệnh đề và mệnh đề chứa biến
- **Mệnh đề** là câu khẳng định có giá trị đúng hoặc sai, không đồng thời cả hai. Câu hỏi/câu cảm thán không phải mệnh đề. Mệnh đề chứa biến P(x) có giá trị chân lý khi thay x bằng một giá trị xác định trong miền đang xét; nếu x chưa được gán, phải có lượng từ cùng miền xét mới thành mệnh đề xác định.
- **Miền xét (domain)** cần được ghi rõ: “n chia hết cho 2” có nghĩa khi n là số nguyên; P(x) với x∈ℝ khác P(n) với n∈ℕ.
### 2.2. Phủ định
- Ký hiệu phủ định `¬P` hoặc `\overline P`. Nếu P đúng thì ¬P sai và ngược lại. Phủ định “x≥a” là “x<a”, phủ định “A⊆B” là tồn tại phần tử thuộc A mà không thuộc B.
### 2.3. Kéo theo, đảo và tương đương
- `P⇒Q` chỉ sai khi P đúng và Q sai; các trường hợp khác được xem là đúng theo quy ước giá trị chân lý. **Không** tự suy từ P⇒Q ra Q⇒P. Với P⇒Q, P là điều kiện **đủ** cho Q, còn Q là điều kiện **cần** cho P.
- `P⇔Q` đúng khi hai chiều P⇒Q và Q⇒P đều đúng. Khi chứng minh một phát biểu “khi và chỉ khi”, phải chứng minh đủ hai chiều (hoặc dùng lập luận tương đương logic).
### 2.4. Lượng từ
- `∀x∈D, P(x)` nghĩa là mọi phần tử x trong D thỏa P(x); chỉ cần **một phản ví dụ** để bác bỏ. `∃x∈D, P(x)` chỉ cần một chứng cứ thỏa. Phủ định: `¬(∀x∈D, P(x)) ⇔ ∃x∈D, ¬P(x)` và `¬(∃x∈D, P(x)) ⇔ ∀x∈D, ¬P(x)`.

## 3. D1 — Bài 2. Tập hợp và các phép toán trên tập hợp (SGK tr.12–19)

### 3.1. Phần tử, tập hợp, tập con và tập bằng nhau
- `x∈A` phát biểu x là phần tử của tập A. `A⊆B` khi **mọi** phần tử của A đều nằm trong B. Hai tập bằng nhau A=B khi A⊆B và B⊆A. Tập rỗng `∅` không có phần tử và là tập con của mọi tập.
- Phải phân biệt `x∈A` (phần tử) với `A⊆B` (tập con); tập `{1}` và phần tử `1` là hai đối tượng khác nhau. Biểu diễn tập qua liệt kê hoặc tính chất đặc trưng kèm miền xét.
### 3.2. Hợp, giao, hiệu và phần bù
- `A∪B={x|x∈A hoặc x∈B}` (“hoặc” có thể đồng thời). `A∩B={x|x∈A và x∈B}`; `A\B={x∈A|x∉B}`. Nếu A⊆U, **phần bù** của A trong U là `U\A`; phải biết U để tính phần bù.
- Với tập hữu hạn, `n(A∪B)=n(A)+n(B)−n(A∩B)`. Không cộng hai tập khi có phần chung mà không trừ giao.
### 3.3. Khoảng, đoạn, nửa khoảng trên ℝ
- `(a,b)`, `[a,b]`, `(a,b]`, `[a,b)` lần lượt biểu thị điều kiện nghiêm ngặt hoặc bao gồm đầu mút. Với vô cực luôn dùng ngoặc tròn; `(-∞,b]` có x≤b, `(a,+∞)` có x>a. Dùng trục số để xem hợp (một trong hai) và giao (cả hai).
### 3.4. Ứng dụng — sơ đồ Venn
- Đếm bốn miền **chỉ A**, **A∩B**, **chỉ B**, **ngoài cả hai**. Tổng bốn miền bằng số phần tử U. Đây là mô hình tập hợp; không suy năng lực xác suất, không nhầm số phần tử với điểm Mastery.

## 4. D2 — Bảy ví dụ giải mẫu

### EX-G10-B01-01 · B01

**Đề và lời giải mẫu:** “12 là số nguyên tố” là mệnh đề sai; “n+1=5” là mệnh đề chứa biến nếu n chưa có giá trị. Giải thích bằng sự tồn tại giá trị chân lý độc lập với biến chưa xác định.


### EX-G10-B01-02 · B01

**Đề và lời giải mẫu:** Với n∈ℤ, P:“n chia hết cho 6”, Q:“n chia hết cho 3”. Chứng minh P⇒Q vì n=6k=3(2k). Q⇒P sai; n=3 là phản ví dụ. Minh họa FIG-G10-B01-01 là hình tập con, không thay chứng minh.


### EX-G10-B01-03 · B01

**Đề và lời giải mẫu:** Phủ định của “∀x∈ℝ, x²≥0” là “∃x∈ℝ: x²<0”; do x² không âm nên phủ định sai. Luôn đổi ∀ thành ∃ và đổi bất đẳng thức tương ứng.


### EX-G10-B01-04 · B01

**Đề và lời giải mẫu:** Với n∈ℤ, “n chẵn ⇔ n² chẵn”: nếu n=2k thì n²=4k² chẵn; nếu n lẻ thì n² lẻ, nên nếu n² chẵn thì n chẵn.


### EX-G10-B02-01 · B02

**Đề và lời giải mẫu:** A={1,2,3,4}, B={3,4,5}. A∩B={3,4}; A∪B={1,2,3,4,5}; A\B={1,2}; B\A={5}. Nêu rõ hiệu không giao hoán.


### EX-G10-B02-02 · B02

**Đề và lời giải mẫu:** X=(-∞,3], Y=(1,+∞). X∩Y=(1,3], X∪Y=ℝ. Xét riêng 1 không thuộc Y và 3 thuộc cả hai.


### EX-G10-B02-03 · B02

**Đề và lời giải mẫu:** Trong lớp 40 học sinh, 23 học Anh, 25 học Toán, 12 học cả hai: chỉ Anh=11, chỉ Toán=13, hợp=36, không học môn nào=4. Hình FIG-G10-B02-01 minh họa bốn miền.


## 5. D3 — 16 câu Formative canonical candidate (8 B01 + 8 B02)

### THPT-G10-B01-C01 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B01-C01`; `skill_id`: `G10-B01-PROPOSITION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xét hai câu: (a) “9 là số chính phương”; (b) “x + 1 = 3”. Câu nào là mệnh đề, và giá trị đúng/sai?
- **Đáp án (formative):** (a) là mệnh đề đúng; (b) là mệnh đề chứa biến, chưa có giá trị chân lý khi chưa quy định x.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Tìm xem câu đã xác định đúng/sai hay còn phụ thuộc biến.
- **Lời giải:** 9=3²; câu x+1=3 đúng khi x=2 và sai khi x khác 2 nên chưa là một mệnh đề xác định nếu không gán biến.

### THPT-G10-B01-C02 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B01-C02`; `skill_id`: `G10-B01-NEGATION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Phủ định của P: “15 chia hết cho 4” là gì? Xét giá trị đúng/sai của P và phủ định.
- **Đáp án (formative):** “15 không chia hết cho 4”; P sai, phủ định đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phủ định thay bằng “không”, không thay 15 bằng số khác.
- **Lời giải:** 15 chia 4 dư 3 nên P sai; phủ định của P đúng.

### THPT-G10-B01-P01 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P01`; `skill_id`: `G10-B01-QUANTIFIERS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xác định đúng/sai của “Với mọi số thực x, x² + 1 > 0”.
- **Đáp án (formative):** Đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Với số thực, bình phương luôn không âm.
- **Lời giải:** Với mọi x∈ℝ, x²≥0 nên x²+1≥1>0.

### THPT-G10-B01-P02 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P02`; `skill_id`: `G10-B01-QUANTIFIERS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xác định đúng/sai của “Tồn tại số nguyên n sao cho n²=2”. Viết phủ định bằng lượng từ.
- **Đáp án (formative):** Sai; phủ định đúng: “Với mọi số nguyên n, n²≠2”.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Bình phương số nguyên kẹp giữa 1 và 4 như thế nào?
- **Lời giải:** Không có số nguyên có bình phương bằng 2; đổi ∃ thành ∀ và = thành ≠ để phủ định.

### THPT-G10-B01-P03 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P03`; `skill_id`: `G10-B01-IMPLICATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Xét mệnh đề với n∈ℤ: “Nếu n chia hết cho 6 thì n chia hết cho 3”. Mệnh đề đúng không? Mệnh đề đảo đúng không?
- **Đáp án (formative):** Mệnh đề đúng; mệnh đề đảo sai (n=3).
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Từ n=6k hãy suy ra bội của 3. Đảo chỉ cần một phản ví dụ.
- **Lời giải:** Nếu n=6k=3(2k) nên chia hết cho 3. Đảo “chia hết cho 3 ⇒ chia hết cho 6” sai vì n=3.

### THPT-G10-B01-P04 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P04`; `skill_id`: `G10-B01-EQUIVALENCE`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với n∈ℤ, xét “n chẵn khi và chỉ khi n² chẵn”. Đúng hay sai?
- **Đáp án (formative):** Đúng.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Cần kiểm cả chiều thuận và chiều đảo; ở chiều đảo dùng phản chứng khi n lẻ.
- **Lời giải:** Nếu n=2k thì n²=4k² chẵn; nếu n lẻ, n² lẻ, nên n² chẵn buộc n chẵn.

### THPT-G10-B01-P05 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B01-P05`; `skill_id`: `G10-B01-NEGATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Phủ định của Q: “Với mọi x∈ℝ, x²≥0” là gì? Đúng hay sai?
- **Đáp án (formative):** “Tồn tại x∈ℝ sao cho x²<0”; mệnh đề phủ định sai.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phủ định ∀ là ∃, phủ định ≥ là <.
- **Lời giải:** Với mọi x thực, x²≥0. Vậy không có x thực có bình phương âm, phủ định sai.

### THPT-G10-B01-P06 — SGK_PRACTICE · APPLICATION

- `item_id`: `THPT-G10-B01-P06`; `skill_id`: `G10-B01-IMPLICATION`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Gọi P: “2>3”, Q: “5<4”. Xác định giá trị đúng/sai của P⇒Q và giải thích theo quy ước mệnh đề kéo theo.
- **Đáp án (formative):** P⇒Q đúng theo bảng giá trị chân lý (P sai, Q sai).
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** P⇒Q chỉ sai khi P đúng và Q sai.
- **Lời giải:** P sai vì 2<3, Q sai vì 5>4. Kéo theo với tiền đề sai là đúng theo quy ước logic.

### THPT-G10-B02-C01 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B02-C01`; `skill_id`: `G10-B02-MEMBERSHIP_SUBSET`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho A={1,2}, B={1,2,3}. Xác định 2∈A và A⊆B đúng/sai; phân biệt hai ký hiệu.
- **Đáp án (formative):** Cả hai đúng; ∈ nối phần tử và tập, ⊆ nối hai tập.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phần tử là số 2, còn A là một tập.
- **Lời giải:** 2 là thành viên A; mọi phần tử của A đều trong B nên A⊆B. Không viết A∈B khi B chỉ chứa các số.

### THPT-G10-B02-C02 — SGK_CORE · BASIC

- `item_id`: `THPT-G10-B02-C02`; `skill_id`: `G10-B02-UNION_INTERSECTION`; `placement`: `SGK_CORE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với A={1,2,3,4}, B={3,4,5}, tìm A∩B và A∪B.
- **Đáp án (formative):** A∩B={3,4}; A∪B={1,2,3,4,5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Giao là cùng nằm trong hai tập; hợp là nằm trong ít nhất một tập.
- **Lời giải:** Phần tử chung: 3,4. Phần tử thuộc A hoặc B: 1,2,3,4,5 không lặp.

### THPT-G10-B02-P01 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P01`; `skill_id`: `G10-B02-DIFFERENCE`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Với A={1,2,3,4}, B={3,4,5}, hãy tìm A\B và B\A.
- **Đáp án (formative):** A\B={1,2}; B\A={5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Hiệu phụ thuộc thứ tự A trừ B hay B trừ A.
- **Lời giải:** A\B lấy phần tử chỉ trong A; B\A lấy phần tử chỉ trong B.

### THPT-G10-B02-P02 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P02`; `skill_id`: `G10-B02-COMPLEMENT`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Trong tập vũ trụ U={1,2,3,4,5,6}, cho A={2,4,6}. Tìm phần bù U\A.
- **Đáp án (formative):** {1,3,5}.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Phần bù luôn cần chỉ rõ tập vũ trụ U.
- **Lời giải:** Loại 2,4,6 khỏi U, còn 1,3,5.

### THPT-G10-B02-P03 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P03`; `skill_id`: `G10-B02-INTERVALS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho X=(-∞,3], Y=(1,+∞). Tìm X∩Y.
- **Đáp án (formative):** (1,3].
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Kiểm lần lượt đầu mút 1 và 3.
- **Lời giải:** Hai điều kiện đồng thời x≤3 và x>1 nên 1<x≤3.

### THPT-G10-B02-P04 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P04`; `skill_id`: `G10-B02-INTERVALS`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho X=(-∞,3], Y=(1,+∞). Tìm X∪Y.
- **Đáp án (formative):** ℝ.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Xét mọi số thực x: x≤3 hoặc x>1.
- **Lời giải:** Mọi số thực x đều thuộc ít nhất một trong hai khoảng nên hợp bằng ℝ.

### THPT-G10-B02-P05 — SGK_PRACTICE · APPLICATION

- `item_id`: `THPT-G10-B02-P05`; `skill_id`: `G10-B02-VENN_MODEL`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Lớp có 40 học sinh, 23 học câu lạc bộ Anh, 25 học câu lạc bộ Toán, 12 học cả hai. Hỏi bao nhiêu học sinh không học câu lạc bộ nào?
- **Đáp án (formative):** 4 học sinh.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Tính số học ít nhất một CLB bằng công thức cộng trừ giao.
- **Lời giải:** n(A∪B)=23+25−12=36; ngoài cả hai =40−36=4.

### THPT-G10-B02-P06 — SGK_PRACTICE · CORE_APPLY

- `item_id`: `THPT-G10-B02-P06`; `skill_id`: `G10-B02-SET_EQUALITY`; `placement`: `SGK_PRACTICE`; `content_version`: `R01_CANDIDATE`.
- **Đề:** Cho A={x∈ℤ | x²=4}, B={−2,2}. Hai tập A và B có bằng nhau không?
- **Đáp án (formative):** Có, A=B.
- **Gợi ý (mở tự nguyện, KHÔNG phải Readiness):** Giải phương trình trên ℤ, rồi so hai chiều chứa nhau.
- **Lời giải:** x²=4 ⇔ x=±2; A={−2,2}=B.

## 6. D4 — Written dùng chung; Anchor chỉ là nhãn

### THPT-G10-CHI-W01 — Bài 01

**item_id:** `THPT-G10-CHI-W01` · **skill_id:** `G10-B01-IMPLICATION` · **written=true** · **anchor_tag:** `false`.

**Đề tự luận:** Tự luận: Xét các số nguyên n. (a) Chứng minh “n chia hết cho 12 ⇒ n chia hết cho 4”. (b) Viết mệnh đề đảo và cho biết đúng/sai. (c) Viết phủ định của mệnh đề “Mọi n chia hết cho 4 đều chia hết cho 12”.

**Lời giải:** (a) n=12k=4·3k. (b) “n chia hết cho 4 ⇒ n chia hết cho 12” là sai, phản ví dụ n=4. (c) “Tồn tại n nguyên chia hết cho 4 nhưng không chia hết cho 12”, đúng, ví dụ n=4.

**Rubric tự đối chiếu:** Rubric 7 điểm: (a) biểu diễn n=12k 2đ, suy ra n=4(3k) 1đ; (b) phát biểu đảo 1đ, phản ví dụ n=4 1đ; (c) đổi đúng ∀→∃ 1đ, nêu đồng thời chia hết 4 và không chia hết 12 1đ.

**Không** tự động ghi điểm/Skill Mastery dựa trên rubrics tự đối chiếu.

### THPT-G10-CHI-W02-ANCHOR — Bài 02

**item_id:** `THPT-G10-CHI-W02-ANCHOR` · **skill_id:** `G10-B02-VENN_MODEL` · **written=true** · **anchor_tag:** `true`.

**Đề tự luận:** Tự luận/Anchor: Khối lớp có 42 học sinh. Có 24 bạn đăng kí CLB Tiếng Anh, 21 bạn đăng kí CLB Âm nhạc, 9 bạn đăng kí cả hai. (a) Vẽ sơ đồ Venn kèm đủ bốn miền; (b) tính số bạn chỉ học Tiếng Anh; (c) số bạn không vào CLB nào; (d) giải thích ý nghĩa hiệu A\B.

**Lời giải:** Giao =9; chỉ Anh 24−9=15; chỉ Nhạc 21−9=12; hợp =24+21−9=36; ngoài =42−36=6; A\B là tập 15 bạn chỉ học Anh.

**Rubric tự đối chiếu:** Rubric 7 điểm: sơ đồ đúng hai tập và giao 2đ; chỉ Anh 1đ; chỉ Nhạc 1đ; hợp và ngoài 2đ; giải thích A\B 1đ.

**Không** tự động ghi điểm/Skill Mastery dựa trên rubrics tự đối chiếu.

## 7. D5 — Hai SVG nguồn thật, accessible, xuất xứ tự dựng

### FIG-G10-B01-01 — Hình bội 6 nằm trong bội 3; ví dụ 3 bác bỏ chiều đảo, hình không thay chứng minh.

**Source asset:** `prototypes/thpt/visuals/THPT_G10_B01_IMPLICATION_DIVISIBILITY_D5_R01.svg` (candidate, chưa tích hợp website).

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="510" viewBox="0 0 1000 510" role="img" aria-labelledby="title desc">
<title id="title">Ví dụ minh họa chiều kéo theo của mệnh đề chia hết</title>
<desc id="desc">Các bội của 6 nằm trong tập bội của 3 trên số nguyên. Chiều nếu chia hết cho 6 thì chia hết cho 3 đúng. Chiều đảo sai, vì 3 chia hết cho 3 nhưng không chia hết cho 6. Hai ô tập hợp không thay thế chứng minh tổng quát.</desc>
<rect width="1000" height="510" rx="20" fill="#f8fafc"/>
<text x="40" y="55" font-family="Arial,sans-serif" font-size="29" font-weight="bold" fill="#0f172a">Mệnh đề kéo theo và mệnh đề đảo</text>
<rect x="54" y="94" width="892" height="335" rx="16" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
<text x="84" y="134" font-family="Arial,sans-serif" font-size="22" fill="#1d4ed8">Các số nguyên chia hết cho 3 (ví dụ: −9, −6, −3, 0, 3, 6, 9)</text>
<rect x="218" y="190" width="564" height="176" rx="25" fill="#dcfce7" stroke="#047857" stroke-width="4"/>
<text x="500" y="242" text-anchor="middle" font-family="Arial,sans-serif" font-weight="bold" font-size="27" fill="#065f46">Các số nguyên chia hết cho 6</text>
<text x="500" y="290" text-anchor="middle" font-family="Arial,sans-serif" font-size="29" fill="#0f172a">… −12, −6, 0, 6, 12 …</text>
<text x="500" y="332" text-anchor="middle" font-family="Arial,sans-serif" font-size="21" fill="#065f46">Những số này cũng chia hết cho 3</text>
<text x="54" y="476" font-family="Arial,sans-serif" font-size="19" fill="#334155">Ví dụ phản chứng cho chiều đảo: 3 chia hết cho 3, nhưng không chia hết cho 6.</text>
</svg>
```

### FIG-G10-B02-01 — Bốn miền Venn 11/12/13/4 theo ví dụ 40 bạn, có <title>/<desc>; không lấy nguyên bài tự luận để kiểm tra độc lập.

**Source asset:** `prototypes/thpt/visuals/THPT_G10_B02_VENN_TWO_CLUBS_D5_R01.svg` (candidate, chưa tích hợp website).

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="590" viewBox="0 0 1000 590" role="img" aria-labelledby="title desc">
<title id="title">Sơ đồ Venn cho bài toán 40 học sinh, 23 học Anh, 25 học Toán, 12 học cả hai</title>
<desc id="desc">Hình chữ nhật là lớp 40 học sinh. Hai hình tròn giao nhau, phần chỉ học Anh có 11, giao có 12, chỉ học Toán có 13, ngoài cả hai có 4. Tổng 11+12+13+4=40.</desc>
<rect width="1000" height="590" rx="20" fill="#f8fafc"/>
<text x="40" y="55" font-family="Arial,sans-serif" font-size="29" font-weight="bold" fill="#0f172a">Sơ đồ Venn — cùng một lớp 40 học sinh</text>
<rect x="70" y="102" width="860" height="387" rx="17" fill="#fff" stroke="#64748b" stroke-width="3"/>
<circle cx="405" cy="290" r="150" fill="#bfdbfe" fill-opacity=".78" stroke="#2563eb" stroke-width="4"/>
<circle cx="605" cy="290" r="150" fill="#bbf7d0" fill-opacity=".74" stroke="#047857" stroke-width="4"/>
<text x="300" y="170" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#1e40af">Học Anh (23)</text>
<text x="622" y="170" font-family="Arial,sans-serif" font-weight="bold" font-size="23" fill="#065f46">Học Toán (25)</text>
<text x="330" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">11</text>
<text x="505" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">12</text>
<text x="679" y="305" font-family="Arial,sans-serif" font-size="43" text-anchor="middle" font-weight="bold" fill="#0f172a">13</text>
<text x="810" y="458" font-family="Arial,sans-serif" font-size="23" font-weight="bold" fill="#334155">Ngoài: 4</text>
<text x="48" y="536" font-family="Arial,sans-serif" font-size="20" fill="#334155">11 (chỉ Anh) + 12 (cả hai) + 13 (chỉ Toán) + 4 (không học môn nào) = 40.</text>
</svg>
```

## 8. D6 — Bốn thẻ hỗ trợ học sinh tự khắc phục

### HELP-G10-B01-01 · Nhầm mệnh đề với mệnh đề chứa biến

- **Dấu hiệu:** Thấy x+2=5 thì khẳng định đúng/sai dù x chưa xác định.
- **Bản chất:** Một mệnh đề cần chân lý xác định; phát biểu có biến phải nêu x hoặc miền x và lượng từ.
- **Tự sửa:** Hỏi: phát biểu có biến nào chưa định? Gán hai giá trị x khác nhau để thử. Nếu đúng/sai đổi theo x, đó là P(x) chưa phải mệnh đề xác định.
- **Tiền đề:** EX-G10-B01-01
- **Quay lại item đã có:** THPT-G10-B01-C01. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B01-02 · Nhầm chiều kéo theo, đảo và lượng từ

- **Dấu hiệu:** Từ P⇒Q kết luận Q⇒P, hoặc phủ định “mọi” thành “mọi không”.
- **Bản chất:** P⇒Q không đảm bảo Q⇒P; phủ định ∀ là ∃ với mệnh đề phủ định.
- **Tự sửa:** Viết P,Q rõ bằng lời; chứng minh chiều có cơ sở; thử tìm phản ví dụ cho chiều đảo; khi phủ định ∀, chỉ cần một trường hợp không đạt.
- **Tiền đề:** EX-G10-B01-02/03
- **Quay lại item đã có:** THPT-G10-B01-P03, THPT-G10-B01-P05. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B02-01 · Nhầm phần tử và tập con

- **Dấu hiệu:** Viết 1⊆A thay vì 1∈A, hoặc cho rằng A=B khi chỉ kiểm một chiều A⊆B.
- **Bản chất:** Một số là phần tử; một tập được so bằng quan hệ tập con. Để kết luận hai tập bằng nhau cần đủ hai chiều.
- **Tự sửa:** Ghi loại đối tượng mỗi vế. Khi là tập, liệt kê phần tử; kiểm mọi phần tử A trong B và mọi phần tử B trong A.
- **Tiền đề:** EX-G10-B02-01
- **Quay lại item đã có:** THPT-G10-B02-C01, THPT-G10-B02-P06. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

### HELP-G10-B02-02 · Nhầm giao, hợp, phần bù và đếm trùng

- **Dấu hiệu:** Khi có 12 người ở giao, cộng 23+25 không trừ; hoặc tìm U\A mà quên U.
- **Bản chất:** Giao là “và”, hợp là “hoặc”; tổng hai tập đếm giao hai lần. Phần bù phụ thuộc tập vũ trụ.
- **Tự sửa:** Vẽ bốn miền Venn; điền giao trước, trừ ra hai miền chỉ một tập, cuối cùng lấy tổng U trừ hợp. Với khoảng, tô đúng đầu mút và dùng giao/hợp.
- **Tiền đề:** EX-G10-B02-03
- **Quay lại item đã có:** THPT-G10-B02-C02, THPT-G10-B02-P02, THPT-G10-B02-P05. Đây là HELP_ID, không cấp item_id mới, không dùng làm chứng cứ kiểm tra độc lập.

## 9. QA tác giả và giới hạn

- Có đúng **16 formative**, **2 Written (1 Anchor tag)** = **18 candidate canonical IDs**, **11 outcome IDs**, **7 ví dụ**, **2 FIG_ID SVG**, **4 HELP_ID**. Không tạo ngân hàng riêng cho Anchor hoặc Topic.
- Tất cả ví dụ và câu được tự biên soạn dựa trên phạm vi SGK/SBT; chưa được NotebookLM review, chưa được đăng ký vào canonical bank runtime. Cần kiểm toán S1 B01 pp.5–11, B02 pp.12–19, phần bài tập cuối chương, SBT 5–15 và cảnh báo nếu thiếu kiến thức bắt buộc Core.
- Các câu luyện tập hiển thị gợi ý/giải khi tự nguyện; **không** tái dùng nguyên câu đã xem làm chứng cứ Readiness độc lập. Không có item Readiness, key private, Firebase/Gemini hay lịch sử learner trong packet.
- Phân loại thay đổi: DELTA_C_ACADEMIC_MATERIAL toàn bộ packet mới, phải review độc lập. D1–D6 trong packet là bằng chứng biên soạn, chưa phải clearance.

## 10. Yêu cầu NotebookLM

1. Xác minh 5 Permanent v2.0, trực tiếp SGK/SBT KNTT 10 tập 1 S1, kiểm trang in và phạm vi hai bài. Phân biệt Core bắt buộc vs mở rộng.
2. Trả reviewer verdict D1–D6 theo từng B01/B02, 11 outcome, 18 item, 7 ví dụ, 2 SVG và 4 HELP_ID, bao gồm tính đúng đắn, điều kiện, độ khó, tính đa dạng/không trùng.
3. Kiểm chặt tính chân lý của câu P⇒Q có tiền đề sai (B01-P06), miền ℤ/ℝ cho lượng từ và phản ví dụ, đầu mút khoảng, sơ đồ Venn và độ trùng thực chất với SGK/SBT.
4. Trả `SOURCE_RECEIPT`, `ID_RECONCILIATION`, `P0/P1/P2`, `MINIMAL_DELTA`, `LESSON_VERDICTS`, `ACADEMIC_CLEARANCE_FOR_THIS_DELTA`. Nếu chưa đủ S1, kết luận HOLD; không tự cấp PASS từ số lượng.
5. Không kết luận cả ChI FULL, Tự kiểm tra cuối chương, nhánh Topic, website QA hoặc quyền phát hành/Skill Mastery.

**FINAL_STATE:** `NOT_REVIEWED / A5_HOLD / NO_RELEASE`
