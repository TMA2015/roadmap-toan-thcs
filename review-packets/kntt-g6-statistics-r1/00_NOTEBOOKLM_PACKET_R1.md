# NotebookLM Review Packet — Grade 6 Bài 38–41 Statistics Repair R1

**packet_id:** `MATH-KNTT-G6-STATISTICS-R1-20261004`  
**scope:** KNTT Grade 6 · Bài 38–41 — *Dữ liệu, thu thập dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép*  
**repair boundary:** Learn + Grade-6 Micro evidence only  
**release boundary:** ACADEMIC REVIEW ONLY — no merge/deploy/runtime authorization

## 1. Select exactly 4 Sources

Select exactly these 4 sources in the Math Notebook:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
4. **This packet — MATH-KNTT-G6-STATISTICS-R1-20261004**

Do **not** select old review packets, other SGK grades, or the old Master Plan v1.1.

## 2. Why this repair exists

The current Grade-6 Dimension Coverage Audit records Bài 38–41 as:

- `SKILL_MAP = VERIFIED_SEMANTIC`
- `LEARN_CONTENT = PARTIAL_LOCAL_OR_FAMILY`
- `MICRO_PRACTICE = PARTIAL`
- `PRACTICE_BANK = PARTIAL_TOPIC_EVIDENCE`
- `WRITTEN_LIBRARY = NONE`
- `READINESS = AUTHORIZED_TOPIC_LEVEL`

The Grade-6 row has four direct canonical skills:

```text
thu-thap-du-lieu
doc-bieu-do-cot
doc-bieu-do-cot-kep
nhan-xet-du-lieu
```

Existing Grade-6 Micro already directly covers:

```text
doc-bieu-do-cot      -> STA21MICRO_004
nhan-xet-du-lieu    -> STA21MICRO_013
```

The candidate therefore adds direct Grade-6 evidence only for the two missing canonical skills:

```text
thu-thap-du-lieu       -> STA21MICRO_016
doc-bieu-do-cot-kep    -> STA21MICRO_017
```

The row also contains three reviewed family/local references:

```text
du-lieu        -> STAT-DATA       -> LESSON_LOCAL_CONCEPT
bang-thong-ke  -> STAT-REPRESENT  -> LESSON_LOCAL_REPRESENTATION
bieu-do-tranh  -> STAT-CHART-READ -> LESSON_LOCAL_REPRESENTATION
```

The candidate adds one formative item for each local reference without creating new canonical learner skills.

## 3. Candidate source locks

- Topic21 Learning Workspace candidate: `docs/assets/data/curriculum/topic21-learning-workspace.json` — blob `2e1a0dc26890ae06e4046d633637e5409af2cc3b`
- Topic21 Micro candidate: `docs/assets/data/practice/21-thong-ke-micro-v1.json` — blob `1099db63934a09fa55e0ec87a5933f7419f6711b`
- Practice manifest unchanged: `docs/assets/data/practice/21-thong-ke-v1.manifest.json` — blob `3d88c1ce48ac1129648980de3f0544e6024251b9`
- Grade-6 reconciliation baseline: `docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json` — blob `4c16bf690a08225b79ee54234983c766d175db34`
- Grade-6 Dimension Audit baseline: `docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json` — blob `21031f51cfa67f23e025aeff1dcd37dccf7c47e0`
- Canonical Taxonomy v2 baseline: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json` — blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`
- Existing full-topic Readiness artifact unchanged: `content-staging/reviews/STA21-READY-CHATGPT-INTEGRATION-001.json` — blob `eb2c001d4d46e3f4007688cf87ecf57e6f50b05d`

No Practice Bank question or Readiness item is added or changed in this candidate.

## 4. Candidate architecture boundary

Two kinds of evidence are intentionally separated.

### A. Missing direct canonical skill evidence

`STA21MICRO_016` and `STA21MICRO_017` use one canonical assessed skill each:

```text
STA21MICRO_016 -> tags.skill = [thu-thap-du-lieu]
STA21MICRO_017 -> tags.skill = [doc-bieu-do-cot-kep]
```

They are Grade-6 KNTT-Core Micro items and may contribute ordinary future skill evidence under the existing runtime contract. This candidate does not regrade or backfill old attempts.

### B. Lesson-local concept / representation evidence

`STA21MICRO_018–020` use:

```text
evidence_role = LESSON_LOCAL_CORE_FORMATIVE
tags.skill = []
gates_core = false
lesson_local_targets = [...]
```

Meaning:

- the content is Grade-6 KNTT Core;
- it gives direct lesson learning/practice evidence;
- it does **not** create a new global learner skill;
- it does **not** grant Core mastery/readiness credit;
- learner question-level history may record the attempt, but there is no new skill counter for these local identities.

## 5. Candidate Learn changes

### Card `sta21-core-1` — Dữ liệu và phương pháp thu thập

Existing canonical skills remain:

```text
du-lieu-phan-loai
thu-thap-du-lieu
```

Added Grade-6 lesson-local declaration:

```text
du-lieu | STAT-DATA | LESSON_LOCAL_CONCEPT | Grade 6 | Bài 38-41
```

The existing cross-grade teaching copy is intentionally preserved:

> Dữ liệu thống kê được chia thành hai loại chính: dữ liệu số (đo đạc, đếm số lượng có giá trị số tính toán được) và dữ liệu không là số / dữ liệu phân loại (tên nhóm, nhãn, màu sắc, trình độ). Phương pháp thu thập dữ liệu gồm thu thập trực tiếp (quan sát, đo đạc, lập phiếu hỏi/phỏng vấn) và thu thập gián tiếp (trích xuất từ sách báo, tài liệu, cơ sở dữ liệu có sẵn).

### Card `sta21-core-2` — candidate title

```text
Bảng thống kê, biểu đồ tranh, cột và cột kép
```

Existing canonical skills remain:

```text
doc-bieu-do-cot
doc-bieu-do-cot-kep
```

Added Grade-6 lesson-local representation declarations:

```text
bang-thong-ke | STAT-REPRESENT  | LESSON_LOCAL_REPRESENTATION | Grade 6 | Bài 38-41
bieu-do-tranh | STAT-CHART-READ | LESSON_LOCAL_REPRESENTATION | Grade 6 | Bài 38-41
```

Candidate key idea:

> Bảng thống kê sắp xếp dữ liệu theo hàng và cột để dễ đọc, đối chiếu. Biểu đồ tranh dùng hình hoặc ký hiệu và phải đọc chú giải để biết mỗi hình đại diện bao nhiêu đơn vị. Biểu đồ cột biểu diễn số liệu bằng chiều cao cột. Biểu đồ cột kép dùng hai cột đặt cạnh nhau, có chú giải phân biệt, để so sánh hai dãy dữ liệu tương ứng của cùng các đối tượng trên cùng một thang đo.

Candidate misconception:

> Không đếm số hình trong biểu đồ tranh như số lượng thật nếu chú giải cho biết mỗi hình đại diện nhiều đơn vị. Với biểu đồ cột kép, đọc nhầm màu/ký hiệu chú giải có thể làm so sánh nhầm hai dãy số liệu.

Candidate summary:

> Luôn đọc kỹ tiêu đề, hàng/cột hoặc chú giải, trục, đơn vị và thang đo trước khi lấy số liệu hay thực hiện phép so sánh.

The existing shared-card worked example about a Grade-6 class and a double-column chart remains unchanged. Please verify that the candidate changes remain safe for the existing cross-grade shared card.

## 6. Candidate Grade-6 Micro items

### `STA21MICRO_016`

**Assessed skill:** `thu-thap-du-lieu`  
**Difficulty:** basic  
**Grade/Lesson:** Grade 6 · Bài 38

**Question:**  
Muốn biết số cuốn sách mỗi bạn lớp 6A đã đọc trong tháng 9, cách thu thập dữ liệu nào phù hợp nhất?

A. Phát phiếu hỏi từng bạn và ghi lại số cuốn sách đã đọc  
B. Hỏi một bạn đoán số sách của cả lớp  
C. Dùng số liệu của một lớp khác  
D. Ước lượng số sách dựa vào chiều cao của từng bạn

**Correct:** A

**Explanation:**  
Cần thu thập đúng thông tin từ từng bạn trong lớp 6A; phiếu hỏi trực tiếp từng bạn là cách phù hợp với dữ liệu cần khảo sát.

### `STA21MICRO_017`

**Assessed skill:** `doc-bieu-do-cot-kep`  
**Difficulty:** basic  
**Grade/Lesson:** Grade 6 · Bài 41

**Question:**  
Dữ liệu từ một biểu đồ cột kép được chép lại: tuần 2, lớp 6A trồng 18 cây và lớp 6B trồng 16 cây. Tuần 2 lớp 6A trồng nhiều hơn lớp 6B bao nhiêu cây?

A. 2 cây  
B. 3 cây  
C. 4 cây  
D. 34 cây

**Correct:** A

**Explanation:**  
Tuần 2, lớp 6A có 18 cây và lớp 6B có 16 cây; chênh lệch là 18 − 16 = 2 cây.

### `STA21MICRO_018`

**Lesson-local target:** `du-lieu`  
**Difficulty:** basic

**Question:**  
Trong một khảo sát về màu yêu thích, bốn câu trả lời là: xanh, đỏ, xanh, vàng. Dãy “xanh, đỏ, xanh, vàng” là gì?

A. Dữ liệu thu được  
B. Phương pháp thu thập dữ liệu  
C. Đơn vị đo  
D. Một biểu đồ cột

**Correct:** A

**Explanation:**  
Các câu trả lời ghi nhận được từ khảo sát chính là dữ liệu thu được.

### `STA21MICRO_019`

**Lesson-local target:** `bang-thong-ke`  
**Difficulty:** basic

**Question:**  
Một bảng thống kê ghi: Toán — 12 bạn; Khoa học — 8 bạn; Mỹ thuật — 10 bạn. Có bao nhiêu bạn chọn Khoa học?

A. 8 bạn  
B. 10 bạn  
C. 12 bạn  
D. 30 bạn

**Correct:** A

**Explanation:**  
Đọc đúng hàng “Khoa học” trong bảng thống kê, ta được 8 bạn.

### `STA21MICRO_020`

**Lesson-local target:** `bieu-do-tranh`  
**Difficulty:** basic

**Question:**  
Trong một biểu đồ tranh, mỗi ★ đại diện 2 cuốn sách. Hàng của Lan có ★★★★. Lan đã đọc bao nhiêu cuốn sách?

A. 8 cuốn  
B. 4 cuốn  
C. 6 cuốn  
D. 10 cuốn

**Correct:** A

**Explanation:**  
Có 4 ký hiệu ★, mỗi ký hiệu đại diện 2 cuốn sách nên số sách là 4 × 2 = 8 cuốn.

## 7. Existing Grade-6 Micro that must remain distinct

The candidate must not relabel or reuse these existing items as substitutes for the two missing direct skills:

```text
STA21MICRO_001 -> du-lieu-phan-loai -> Grade 6 Bài 38
STA21MICRO_004 -> doc-bieu-do-cot   -> Grade 6 Bài 39
STA21MICRO_013 -> nhan-xet-du-lieu  -> Grade 6 Bài 41
```

In particular, `du-lieu-phan-loai` is not automatically the same identity as lesson-local `du-lieu`.

## 8. Explicit non-goals

This candidate does **not**:

- create canonical skills named `du-lieu`, `bang-thong-ke`, or `bieu-do-tranh`;
- change the canonical identities `thu-thap-du-lieu`, `doc-bieu-do-cot`, `doc-bieu-do-cot-kep`, or `nhan-xet-du-lieu`;
- change Practice Bank content or question count;
- change the existing STA21 Readiness artifact or its topic-level scope;
- promote the topic-level Readiness artifact into a Grade-6-only assessment;
- activate Taxonomy v2 runtime;
- migrate/backfill/regrade learner history;
- change Mastery/Readiness semantics;
- claim Written Library coverage.

## 9. Review questions

Review all of the following:

1. Do the additions to `sta21-core-1` and `sta21-core-2` accurately represent the selected Grade-6 SGK Bài 38–41 scope?
2. Is the distinction between direct canonical skills and local representations academically appropriate?
3. Is `STA21MICRO_016` a valid direct Grade-6 item for `thu-thap-du-lieu`?
4. Is `STA21MICRO_017` a valid direct Grade-6 item for `doc-bieu-do-cot-kep`, rather than merely arithmetic detached from chart-reading?
5. Are `STA21MICRO_018–020` mathematically/semantically correct, deterministic, age-appropriate and sufficiently tied to their local concepts/representations?
6. Is `du-lieu` correctly kept local under `STAT-DATA` rather than becoming a new canonical skill?
7. Are `bang-thong-ke` and `bieu-do-tranh` correctly kept as Grade-6 lesson-local representations rather than new global assessed skills?
8. Does the modified shared card `sta21-core-2` remain safe for its existing Grade-6 / Grade-8 placement?
9. Is any candidate wording beyond Grade-6 scope, ambiguous, or likely to train a wrong representation-reading habit?
10. Are five new Micro items enough to close the identified direct/local Grade-6 Micro gap without unnecessary duplication?
11. Confirm that no Practice/Readiness clearance is implied by this review.

## 10. Required output contract

Return **all lines**, even if PASS.

```text
PACKET|MATH-KNTT-G6-STATISTICS-R1-20261004
OVERALL|PASS|REVISE
LEARN_CARD|sta21-core-1|PASS|REVISE
LEARN_CARD|sta21-core-2|PASS|REVISE
EXPECTED_MICRO|5
REVIEWED_MICRO|5
ITEM|STA21MICRO_016|PASS|REVISE
ITEM|STA21MICRO_017|PASS|REVISE
ITEM|STA21MICRO_018|PASS|REVISE
ITEM|STA21MICRO_019|PASS|REVISE
ITEM|STA21MICRO_020|PASS|REVISE
DIRECT_SKILL|thu-thap-du-lieu|PASS|REVISE
DIRECT_SKILL|doc-bieu-do-cot-kep|PASS|REVISE
LOCAL|du-lieu|PASS|REVISE
LOCAL|bang-thong-ke|PASS|REVISE
LOCAL|bieu-do-tranh|PASS|REVISE
CROSS_GRADE_BOUNDARY|STA21_CORE_2_G6_G8|PASS|REVISE
PRACTICE_BANK_CHANGE|NONE
READINESS_CHANGE|NONE
MISSING_IDS|NONE|<comma-separated IDs>
DUPLICATE_IDS|NONE|<comma-separated IDs>
UNEXPECTED_IDS|NONE|<comma-separated IDs>
CLEARANCE|G6_STATISTICS_CONTENT_REVIEW_COMPLETE|WITHHELD
```

If any item or boundary is `REVISE`, also return one correction block per affected target:

```text
CORRECTION|<ID or LEARN_CARD or LOCAL or BOUNDARY>|<problem>|<exact recommended correction>
```

A PASS must include exactly:

```text
CLEARANCE|G6_STATISTICS_CONTENT_REVIEW_COMPLETE
```

Do not authorize merge/deployment. Repository QA remains a separate gate after academic reconciliation.
