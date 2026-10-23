# W9 — NUM-ABS bounded Grade6 Core source gap: three Micro + one Written candidate (NOT APPROVED)

**PACKET_ID:** `MATH-W9-NUMABS-G6-3MICRO-1WRITTEN-CANDIDATE-R0-20261021`  
**State:** `DRAFT_CONTENT_FOR_INDEPENDENT_S1_NOTEBOOKLM_REVIEW_ONLY / NO_IMPORT / NO_LIVE_RELEASE`  
**Rationale:** Historical NotebookLM-approved Practice Coverage Priority `MATH-PRACTICE-COVERAGE-PRIORITY-R1-20261009` classified `NUM-ABS` as `ADD`. On current `main`, source-tagged Grade6 Core `gia-tri-tuyet-doi` currently has **one** Micro (`NUM02MICRO_019`, geometric distance from 0 to −9). Canonical Written has **no exact matching skill/prerequisite metadata**, not proof no related problem exists elsewhere. The Grade6 `num02-g6-core-3` card spans **Bài 13–17**, mixing number-line reasoning and integer arithmetic; precise SGK subsection placement of new candidates **must be checked against independent KNTT S1**. All this is a prospective gap, not a completed academic audit.

**Source locks (Git blobs at candidate authoring):** existing Micro CT02 `61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622`; canonical Written 74 items `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d`; historical taxonomy `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`.  
**Design boundary:** Do not delete or rewrite `NUM02MICRO_019`; do not declare these candidate IDs canonical. Unchanged learner progress and original math/answer keys. No Core/Mastery/independent Readiness credit. No invented S1 approval.

## Why these three, not a large question quota?

Each candidate assesses a distinct observable reasoning structure relative to `NUM02MICRO_019`:

1. `NUM-ABS-R0-MC01` — recognize **two symmetric points** at the same distance from zero, unlike existing one-point distance.
2. `NUM-ABS-R0-MC02` — choose the correct **distance between two signed coordinates** spanning zero (trap: signed subtraction).
3. `NUM-ABS-R0-MC03` — combine **two absolute values** with integer arithmetic, avoiding a false sign/parenthesis rule.

`base`, `trap`, `apply` are **proposed learning functions**, not independently certified L1/L2/L3. Review could reject, merge, substitute, or relocate any candidate. If a candidate duplicates existing Core/Practice outside the checked Micro scope, mark redundancy.

## Candidate MC01 — symmetric positions (proposed BASE)

**Question:** Trên trục số, những điểm nào cách điểm 0 đúng 6 đơn vị?

- A. Chỉ điểm biểu diễn số 6.
- B. Chỉ điểm biểu diễn số −6.
- C. Hai điểm biểu diễn số −6 và số 6.
- D. Hai điểm biểu diễn số 0 và số 6.

**Draft key:** C (zero-based index 2).

**Draft explanation:** Hai số đối nhau −6 và 6 đều có khoảng cách đến 0 bằng 6 đơn vị. Điểm 0 có khoảng cách đến 0 bằng 0, không phải 6. Không được coi số âm là có khoảng cách âm.

**Anticipated misconception:** học sinh cho rằng khoảng cách trên trục số có dấu, hoặc chỉ chọn vị trí dương.

## Candidate MC02 — across-zero coordinate distance (proposed TRAP)

**Question:** Trên trục số, điểm A biểu diễn số −4, điểm B biểu diễn số 3. Độ dài đoạn AB là bao nhiêu đơn vị?

- A. 1 đơn vị.
- B. 7 đơn vị.
- C. −7 đơn vị.
- D. 4 đơn vị.

**Draft key:** B (zero-based index 1).

**Draft explanation:** Hai điểm nằm hai phía của 0: khoảng cách từ −4 đến 0 là 4, từ 0 đến 3 là 3; vì vậy AB = 4 + 3 = 7 đơn vị. Cũng có thể viết khoảng cách là |3 − (−4)| = 7. Độ dài không âm.

**Anticipated misconception:** tính 3 + (−4) hoặc coi khoảng cách có dấu; cộng/trừ nhầm khi bỏ dấu ngoặc.

## Candidate MC03 — two absolute values and integer arithmetic (proposed APPLY)

**Question:** Tính giá trị của biểu thức |−7| − |3 − 8|.

- A. −12.
- B. 12.
- C. 2.
- D. −2.

**Draft key:** C (zero-based index 2).

**Draft explanation:** |−7| = 7; 3 − 8 = −5 nên |3 − 8| = 5. Kết quả 7 − 5 = 2. Phải tính từng giá trị tuyệt đối trước khi thực hiện phép trừ bên ngoài.

**Anticipated misconception:** bỏ dấu giá trị tuyệt đối mà không đổi âm thành không âm; bỏ ngoặc nhầm.

## One representative canonical Written *candidate*, not new live ID

**Temporary review ID:** `NUM-ABS-R0-WR01`.  
**Proposed level:** `CORE_BASE` with multiple connected reasoning steps; grade/lesson pending independent S1.  
**Proposed form:** self-study on paper, optional drawn number line, approximately 8–10 minutes.  
**Proposed skills:** `gia-tri-tuyet-doi` and `so-nguyen-phep-tinh`, and concept of betweenness on the number line.  
**No new source ID is reserved.**

### Problem

Trên trục số, ba điểm A, B, C lần lượt biểu diễn các số −6, −1 và 4. O biểu diễn số 0.

1. Sắp xếp A, B, O, C theo thứ tự từ trái sang phải và giải thích vì sao.
2. Tìm các khoảng cách OA, OC, AB và BC, tính theo đơn vị trên trục số.
3. Tính AC theo hai cách: (i) dựa vào vị trí các điểm; (ii) sử dụng độ dài AB và BC. Giải thích tại sao hai kết quả bằng nhau.

### Selective hints (only after attempting)

- Gợi ý 1: Xác định thứ tự các số −6, −1, 0, 4.
- Gợi ý 2: Khoảng cách trên trục số luôn không âm. Có thể đếm đoạn hoặc lấy giá trị tuyệt đối của hiệu hai tọa độ.
- Gợi ý 3: Điểm B nằm ở đâu so với A và C? Khi nào AB + BC = AC?

### Full draft solution

**S1 — Vị trí:** Vì −6 < −1 < 0 < 4 nên thứ tự trên trục số là A, B, O, C.

**S2 — Khoảng cách với gốc:** OA = |−6| = 6, OC = |4| = 4 (đơn vị).

**S3 — Hai đoạn liền nhau:** AB = |−1 − (−6)| = 5; BC = |4 − (−1)| = 5 (đơn vị). Có thể kiểm chứng bằng số khoảng đơn vị giữa hai điểm.

**S4 — Tính AC trực tiếp:** AC = |4 − (−6)| = 10 (đơn vị).

**S5 — Giải thích liên kết:** Do −6 < −1 < 4 nên B nằm giữa A và C. Vì vậy AB + BC = AC = 5 + 5 = 10 (đơn vị), trùng với cách tính trực tiếp.

**Why this method:** Trên trục số, thứ tự xác định điểm nằm giữa; khoảng cách là đại lượng không âm. Kết hợp vị trí và độ dài cho hai cách kiểm tra một kết quả, chứ không thay phép trừ có dấu bằng phỏng đoán.

**Common mistakes:**
- Viết OA = −6 vì nhầm tọa độ với khoảng cách.
- Tính BC = 4 + (−1) = 3 do bỏ ngoặc sai.
- Cho rằng AB + BC = AC với bất kỳ ba điểm nào mà không kiểm tra B nằm giữa A và C.

**Self-check rubric** (5 điểm, không phải Readiness):
- 1 điểm: thứ tự A, B, O, C chính xác và giải thích từ −6 < −1 < 0 < 4.
- 1 điểm: OA = 6, OC = 4 và đơn vị.
- 1 điểm: AB = 5, BC = 5 từ tọa độ.
- 1 điểm: AC = 10 tính trực tiếp.
- 1 điểm: nêu B nằm giữa A, C và AB + BC = AC.

**Remediation:** Trở về thẻ `num02-g6-core-3` (số nguyên / trục số / phép tính) và nguồn `NUM02MICRO_019`. Không tự mở toàn bộ phần mở rộng Entrance10.

## Independent review request

Check using permanent Master Plan v1.2.1, NotebookLM Math Rules v1.2, this temporary packet and **real KNTT S1** for grade/topic placement:

- Mathematics and uniqueness of each draft MCQ key, distractor quality, level and structural novelty relative to existing `NUM02MICRO_019`; request math/wording revisions as needed.
- Is the explicit symbol |a| and signed-coordinate subtraction acceptable as a Grade6 KNTT-Core requirement at the proposed point? **If S1 missing, `G6_KNTT_PLACEMENT:INSUFFICIENT_S1`.**
- The Written solution is correct by ordinary mathematics, but independently check whether it genuinely teaches a useful distinct inference, is at an appropriate stage, has a coherent rubric and sufficiently clear text without requiring an image.
- Compare against existing Micro and written content before authorizing new IDs. Avoid numeric quotas and redundant practice.
- **No import of any candidate** until independent academic PASS + Owner approval of the approved minimal content delta and exact-head QA. Preserve original 74 Written, 237 topical Readiness and previous grade6 source.
- Distinguish general mathematical correctness from textbook placement and use of fully independent S1 source.

```text
PACKET_ID|MATH-W9-NUMABS-G6-3MICRO-1WRITTEN-CANDIDATE-R0-20261021
EXPECTED_DRAFT_IDS|NUM-ABS-R0-MC01,NUM-ABS-R0-MC02,NUM-ABS-R0-MC03,NUM-ABS-R0-WR01
MATH_AND_KEYS|...
G6_KNTT_PLACEMENT|VERIFIED / INSUFFICIENT_S1 / REVISE
STRUCTURAL_INDEPENDENCE|...
MC01|PASS / REVISE / REJECT
MC02|PASS / REVISE / REJECT
MC03|PASS / REVISE / REJECT
WR01|PASS / REVISE / REJECT
MINIMAL_APPROVED_DELTA|...
OVERALL|PASS / REVISIONS_REQUIRED / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_LIVE_RELEASE
```
