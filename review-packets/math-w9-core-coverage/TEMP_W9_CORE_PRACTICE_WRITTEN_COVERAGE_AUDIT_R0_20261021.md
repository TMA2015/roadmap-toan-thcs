# W9 — Owner-aligned core Practice + representative Written coverage: evidence baseline and batch review plan

**PACKET_ID:** `MATH-W9-PRACTICE-WRITTEN-CORE-COVERAGE-R0-20261021`  
**State:** `SOURCE_INVENTORY_ONLY / ACADEMIC_TRIAGE_PENDING / NO_NEW_ITEMS / NO_LIVE_RELEASE`  
**Owner direction:** [permanent project note](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/PROJECT_OWNER_DIRECTION_20261021.md).  
**Master Plan:** `TOÁN THCS MASTER PLAN v1.2.1`; one 25-topic knowledge graph, KNTT Grade6–9 + topic path, one canonical Written Library.  
**Source lock — Written:** `docs/assets/data/written-exercises/written-exercise-library-v1.json` Git blob `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d`.  
**Source lock — historical KNTT matrix:** `docs/assets/data/curriculum/kntt-coverage-matrix-6-9-v1.json` Git blob `2935f58925918674b5bacd2d8743d5526283adba` (historical 2026-10-04 matrix; NOT a claim of 2026-10-21 classroom completeness).  
**Do not use this inventory to issue a NotebookLM item-content PASS** without the full original exercise statements, solutions and independent S1 curriculum sources.

## 1. Why this wave exists

The product is designed as a **four-school-year** reference and practice environment, not a short-lived content demonstration. Improvement of a specific student's skills may require months to infer and is confounded by how actively they use the resources. For current product quality, audit **coverage of indispensable concepts, correct methods, frequent misconception families, routine skill practice, and representative written reasoning/transfer**. Neither adding many items nor satisfaction/quick test accuracy proves completeness.

The academic goal is **not** to reproduce every mathematics problem in every textbook. Select a defensible set of:
1. Basic Learn/Core practice immediately illustrating a concept and its conditions.
2. Routine and trap/misconception checks to build independent skill.
3. Written problems representative of common methods and deeper anchor/reasoning/combined-skill/Entrance10 routes. Favor explanatory quality over indiscriminate drill volume.
4. Valid learner links: real lesson → Core card → Micro/Practice → canonical Written ID → prerequisite/remediation/optional transfer, with original question IDs and no grade pollution.

## 2. Verified source inventory (metadata only)

- **Canonical Written**: `74` items, academic_review.status `APPROVED` on `74` (this review approval does **not** itself prove correct grade placement).
- **Kinds**: `54` standard, `20` anchor.
- **Levels**: `CORE_BASE 33`; `CORE_APPLY 30`; `ENTRANCE10 8`; `CHALLENGE 3`.
- **Topic keys represented**: `22` unique `topic_id` values; the existence of a topic ID alone does not prove its Core families are covered.
- **Grade-overlays** (advisory, may overlap): G6 8, G7 14, G8 31, G9 29. These **MUST NOT** be silently promoted into verified KNTT placements.
- **True `kntt_placements` currently populated:** `8` distinct Written IDs with `9` placement rows, **all grade 6**; `66` IDs have no independently verified KNTT-placement metadata. This is first and foremost a *coverage-evidence/grade-discovery gap*, **NOT proof that 66 questions or Grade7–9 curriculum content are absent**.
- **Teaching attachments (schema counts, not quality findings):** `64` items with nonempty `solution_steps`; `74` with a rubric; `21` with one of `hints` or `hint_steps`. Other solution/hint designs may exist in alternate schema fields; no claim that items without one field are pedagogically defective.
- **Historical KNTT mapping:** `78` curriculum rows across four grades. Historical skill-reference status is an **ID reconciliation report**, not real exercise distribution nor a validated full lesson-cover audit.

| KNTT grade | Historical map rows | Chapters | Current verified Written placement rows | Historical skill status CURRENT_MAPPED | PARTIAL_RECONCILE | RECONCILE_REQUIRED |
|---:|---:|---:|---:|---:|---:|---:|
| 6 | 31 | 9 | 9 | 13 | 5 | 13 |
| 7 | 21 | 10 | 0 | 14 | 7 | 0 |
| 8 | 16 | 10 | 0 | 14 | 2 | 0 |
| 9 | 10 | 10 | 0 | 7 | 1 | 0 |

**Primary issue:** Current library contains many apparently Grade7–9-relevant problems via `grade_overlay` and topics, but **zero explicit verified KNTT-placement rows for Grades7–9**. Before saying students can reliably browse all representative written tasks by their own school chapter, independently confirm original mathematics/curriculum placement of existing canonical IDs. Do not clone or relabel by age alone.

## 3. All 74 canonical Written items — index for selection (not question-content verification)

The table reports **source metadata unchanged**. `grade_overlay` = current advisory overlay, NOT an approved KNTT placement. `UNVERIFIED_KNTT_PLACEMENT` means placement field missing, NOT a judgment that the exercise is inappropriate or absent.

| # | Canonical ID | Topic | Level | Grade overlay | Source-verified KNTT placement | Title |
|---:|---|---|---|---|---|---|
| 01 | `WX07-RAT-001` | CT07 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Rút gọn nhưng không làm mất điều kiện ban đầu |
| 02 | `WX07-RAT-002` | CT07 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Quy đồng hợp lý và giữ điều kiện xuyên suốt |
| 03 | `WX14-TRI-001` | CT14 | CORE_BASE | 7 | UNVERIFIED_KNTT_PLACEMENT | Từ trung điểm đến đường cao trong tam giác cân |
| 04 | `WX14-TRI-002` | CT14 | CORE_APPLY | 7 | UNVERIFIED_KNTT_PLACEMENT | Chọn đúng cặp tam giác để tạo đoạn cần chứng minh |
| 05 | `WX24-MOD-001` | CT24 | CORE_BASE | 8,9 | UNVERIFIED_KNTT_PLACEMENT | Đến sớm hơn 36 phút – từ lời văn đến phương trình |
| 06 | `WX24-MOD-002` | CT24 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Hai loại vé – lập hệ, giải và kiểm tra ngược |
| 07 | `WX08-EQI-001` | CT08 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Nghiệm tìm được bị loại bởi điều kiện xác định |
| 08 | `WX08-EQI-002` | CT08 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Thu gọn, đổi chiều đúng lúc và biểu diễn nghiệm |
| 09 | `WX17-SIM-001` | CT17 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Từ hai tỉ số đúng đến kết luận song song |
| 10 | `WX17-SIM-002` | CT17 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Từ song song đến đồng dạng và hai kết quả độ dài |
| 11 | `WX19-CIR-001` | CT19 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Cùng một cung, hai đại lượng khác đơn vị |
| 12 | `WX19-CIR-002` | CT19 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Nhận ra nội tiếp rồi khai thác cặp góc đối |
| 13 | `WX09-SYS-001` | CT09 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Khử ẩn thuận tiện và kiểm tra trên cả hai phương trình |
| 14 | `WX09-SYS-002` | CT09 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Từ hai hóa đơn đến hệ phương trình |
| 15 | `WX16-QUAD-001` | CT16 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Hai dấu hiệu nối tiếp: hình bình hành → hình chữ nhật |
| 16 | `WX16-QUAD-002` | CT16 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Không suy từ hình: chứng minh từng tầng đến hình vuông |
| 17 | `WX18-TRI-001` | CT18 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Chọn đúng cạnh đối – kề – huyền trước khi tính |
| 18 | `WX18-TRI-002` | CT18 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Tách chênh cao khỏi chiều cao toàn vật |
| 19 | `WX10-FUN-001` | CT10 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Từ công thức đến hai điểm vẽ đường thẳng |
| 20 | `WX10-FUN-002` | CT10 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Nhìn cấu trúc parabol từ bảng giá trị đối xứng |
| 21 | `WX11-RAD-001` | CT11 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Xét điều kiện trước, giữ giá trị tuyệt đối đúng chỗ |
| 22 | `WX11-RAD-002` | CT11 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Hai mẫu liên hợp, một kết quả gọn |
| 23 | `WX12-QUA-001` | CT12 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Đọc đúng hệ số, tính Δ rồi kiểm tra đủ hai nghiệm |
| 24 | `WX12-QUA-002` | CT12 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Đi ngược Viète rồi kiểm tra bằng nghiệm |
| 25 | `WX13-LIN-001` | CT13 | CORE_BASE | 7 | UNVERIFIED_KNTT_PLACEMENT | Nhận đúng vị trí góc rồi mới kết luận song song |
| 26 | `WX13-LIN-002` | CT13 | CORE_APPLY | 7 | UNVERIFIED_KNTT_PLACEMENT | Mỗi bước có căn cứ: từ song song đến vuông góc |
| 27 | `WX15-CEN-001` | CT15 | CORE_BASE | 7 | UNVERIFIED_KNTT_PLACEMENT | Đọc đúng chiều tỉ số 2:1 trên trung tuyến |
| 28 | `WX15-CEN-002` | CT15 | CORE_APPLY | 7 | UNVERIFIED_KNTT_PLACEMENT | Không nhầm khoảng cách tới cạnh với khoảng cách tới đỉnh |
| 29 | `WX23-PRO-001` | CT23 | CORE_BASE | 6,7,8 | G6 Ch9 Bài 43 — Xác suất thực nghiệm | Tính từ dữ liệu quan sát, không biến thành lời tiên đoán chắc chắn |
| 30 | `WX23-PRO-002` | CT23 | CORE_APPLY | 7,8 | UNVERIFIED_KNTT_PLACEMENT | Đếm kết quả thuận lợi trước, rồi mới so với dữ liệu thử |
| 31 | `WX04-ALG-001` | CT04 | CORE_BASE | 7,8 | UNVERIFIED_KNTT_PLACEMENT | Đổi dấu toàn bộ đa thức bị trừ rồi mới thu gọn |
| 32 | `WX04-ALG-002` | CT04 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Giữ điều kiện gốc sau khi rút gọn |
| 33 | `WX05-IDN-001` | CT05 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Kiểm tra đủ hai bình phương và hạng tử giữa |
| 34 | `WX05-IDN-002` | CT05 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Nhìn hai bình phương như A²−B² trước khi khai triển dài |
| 35 | `WX06-FAC-001` | CT06 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Nhìn hai ngoặc đối nhau trước khi đặt nhân tử |
| 36 | `WX06-FAC-002` | CT06 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Không dừng khi nhân tử vẫn còn phân tích được |
| 37 | `WX02-NUM-001` | CT02 | CORE_BASE | 6 | G6 Ch2 Bài 11–12 — Ước chung, ƯCLN; bội chung, BCNN và ứng dụng | Nhiều phần quà giống nhau nhất: vì sao phải dùng ƯCLN? |
| 38 | `WX02-NUM-002` | CT02 | CORE_APPLY | 6 | G6 Ch7 Bài 31 — Một số bài toán về tỉ số và tỉ số phần trăm | Giảm 15%: tính đúng đại lượng ở từng bước |
| 39 | `WX03-RAT-001` | CT03 | CORE_BASE | 7 | UNVERIFIED_KNTT_PLACEMENT | Từ tổng số phần đến giá trị từng phần |
| 40 | `WX03-RAT-002` | CT03 | CORE_APPLY | 7 | UNVERIFIED_KNTT_PLACEMENT | Nhiều người hơn thì số ngày phải giảm |
| 41 | `WX20-GEO-001` | CT20 | CORE_BASE | 6,7 | UNVERIFIED_KNTT_PLACEMENT | Phân biệt chu vi đáy, diện tích đáy và chiều cao |
| 42 | `WX20-GEO-002` | CT20 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Cùng một hình nón, hai công thức dùng hai độ dài khác nhau |
| 43 | `WX21-STA-001` | CT21 | CORE_BASE | 8 | G6 Ch9 Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép | Từ bảng số liệu đến biểu đồ cột có thang đo rõ ràng |
| 44 | `WX21-STA-002` | CT21 | CORE_APPLY | 8 | UNVERIFIED_KNTT_PLACEMENT | Cột kép: tăng bao nhiêu và dữ liệu cho phép kết luận đến đâu? |
| 45 | `WX09-SYS-003` | CT09 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Từ tổng số vé và tổng tiền đến hệ phương trình |
| 46 | `WX09-SYS-004` | CT09 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Giá niêm yết và hai mức giảm giá |
| 47 | `WX09-SYS-005` | CT09 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Pha dung dịch bằng bảo toàn lượng chất |
| 48 | `WX09-SYS-006` | CT09 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Năng suất thực sự: lượng công việc = năng suất × thời gian |
| 49 | `WX09-SYS-007` | CT09 | ENTRANCE10 | 9 | UNVERIFIED_KNTT_PLACEMENT | Nhận ra biểu thức lặp và quay lại biến ban đầu |
| 50 | `WX09-SYS-008` | CT09 | ENTRANCE10 | 9 | UNVERIFIED_KNTT_PLACEMENT | Không chia cho biểu thức tham số trước khi xét bằng 0 |
| 51 | `WX02-NUM-003` | CT02 | CORE_APPLY | 6 | G6 Ch6 Bài 27 — Hai bài toán về phân số | Biết một phần để tìm toàn bộ, rồi từ toàn bộ tìm tiếp một phần |
| 52 | `WX20-GEO-003` | CT20 | CORE_APPLY | 6 | G6 Ch4 Bài 20 — Chu vi và diện tích một số tứ giác đã học | Rào quanh sân hay phủ kín mặt sân: đừng dùng nhầm công thức |
| 53 | `WX13-LIN-003` | CT13 | CORE_APPLY | 6 | G6 Ch8 Bài 34–35 — Đoạn thẳng, độ dài đoạn thẳng, trung điểm; G6 Ch8 Bài 36–37 — Góc, số đo góc và phân loại góc | Vẽ đúng rồi mới tính: từ trung điểm đến số đo góc |
| 54 | `WX23-PRO-003` | CT23 | CORE_APPLY | 6 | G6 Ch9 Bài 42 — Kết quả có thể và sự kiện trong trò chơi, thí nghiệm | Một kết quả không phải là cả sự kiện |
| 55 | `WX04-ALG-003` | CT04 | CORE_BASE | 7,8 | UNVERIFIED_KNTT_PLACEMENT | Khai triển đủ hai tích trước khi thu gọn |
| 56 | `WX11-RAD-003` | CT11 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Biến đổi từng căn về cùng một căn cơ bản |
| 57 | `WX14-TRI-003` | CT14 | CORE_BASE | 7 | UNVERIFIED_KNTT_PLACEMENT | Lọc độ dài có thể xảy ra rồi sắp thứ tự các góc |
| 58 | `WX18-TRI-003` | CT18 | CORE_BASE | 8,9 | UNVERIFIED_KNTT_PLACEMENT | Kiểm tra bình phương ba cạnh trước khi kết luận góc vuông |
| 59 | `WX16-QUAD-003` | CT16 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Chứng minh hình bình hành trước rồi mới nâng cấp thành hình thoi |
| 60 | `WX16-QUAD-004` | CT16 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Dùng dấu hiệu hình thang cân rồi tính hai góc còn lại |
| 61 | `WX17-SIM-003` | CT17 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Từ tỉ số phân giác đến hai độ dài cụ thể |
| 62 | `WX19-CIR-003` | CT19 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Phân biệt cung nhỏ và cung lớn trước khi tính góc nội tiếp |
| 63 | `WX19-CIR-004` | CT19 | CORE_BASE | 9 | UNVERIFIED_KNTT_PLACEMENT | Từ khoảng cách tâm–dây đến nửa dây rồi so sánh cung |
| 64 | `WX05-ENT-001` | CT05 | ENTRANCE10 | 8 | UNVERIFIED_KNTT_PLACEMENT | Chứng minh biểu thức không phụ thuộc biến |
| 65 | `WX06-CH-001` | CT06 | CHALLENGE | 8 | UNVERIFIED_KNTT_PLACEMENT | Thêm bớt để phân tích thành nhân tử |
| 66 | `WX05-ENT-002` | CT05 | ENTRANCE10 | 8 | UNVERIFIED_KNTT_PLACEMENT | Tính x² + y² mà không cần tìm riêng x, y |
| 67 | `WX05-CH-001` | CT05 | CHALLENGE | 8 | UNVERIFIED_KNTT_PLACEMENT | Chứng minh tổng ba lập phương khi a + b + c = 0 |
| 68 | `WX07-ENT-001` | CT07 | ENTRANCE10 | 8 | UNVERIFIED_KNTT_PLACEMENT | Tìm giá trị nguyên của x để phân thức nhận giá trị nguyên |
| 69 | `WX07-CH-001` | CT07 | CHALLENGE | 8 | UNVERIFIED_KNTT_PLACEMENT | Tự thiết kế biểu thức và lập kế hoạch biến đổi phân thức |
| 70 | `WX08-EQI-003` | CT08 | CORE_BASE | 8 | UNVERIFIED_KNTT_PLACEMENT | Không bỏ sót nghiệm âm khi giải phương trình tích |
| 71 | `WX09-SYS-009` | CT09 | CORE_APPLY | 9 | UNVERIFIED_KNTT_PLACEMENT | Khử mẫu và kiểm tra cặp nghiệm phân số |
| 72 | `WX10-FUN-003` | CT10 | ENTRANCE10 | 9 | UNVERIFIED_KNTT_PLACEMENT | Tìm đủ hai tọa độ giao điểm của hai đường thẳng |
| 73 | `WX11-RAD-004` | CT11 | ENTRANCE10 | 9 | UNVERIFIED_KNTT_PLACEMENT | Bình phương đúng điều kiện, không nhận nghiệm ngoại lai |
| 74 | `WX12-QUA-003` | CT12 | ENTRANCE10 | 9 | UNVERIFIED_KNTT_PLACEMENT | Xét dấu hai nghiệm không cần giải phương trình |

## 4. One coherent academic remediation wave (proposed, not authorized content)

**Phase A — Validate navigation evidence before adding items.** Against actual KNTT Grade6–9 S1 curriculum and **full problem + solution** text, batch-review the existing `66` unplaced IDs grouped by grade/topic. Recommend only warranted `kntt_placements` and correct cross-topic/prerequisite links. If placement is ambiguous, keep it unplaced in the grade path and explain the reason. Preserve exact ID, problem, key, solution, rubric and historical answer records.

**Phase B — Analyze real Core objective coverage.** Reconcile current KNTT maps and **active** Core cards/Micro/Practice manifests (not the 2026-10-04 map alone), scoring each real lesson/objective by evidence for conceptual explanation, Base, Trap, Apply, independent skill practice and at least a suitable written anchor where warranted. Mark `EVIDENCED`, `CANDIDATE_NEEDS_ITEM_REVIEW`, `UNDER_COVERED` or `NOT_APPLICABLE`. Avoid fabricated quotas for every subskill.

**Phase C — Batch-author only actual gaps.** If some required Core or representative reasoning forms remain missing after reusing canonical items, prepare a **themed multi-item batch** aligned to lessons and problem types, with hints when helpful, full worked solution, method choice, common errors, self-check rubric and remediation. Require independent NotebookLM source-level math and placement review; do **not** silently create 20 items only to reach 20 or assign Entrance10 to Grade6.

**Phase D — Learner presentation and links.** Verify Grade / Chapter / Lesson discovery and Topic / Skill / Problem-type discovery refer to **same canonical Written ID** and connect Learn → Practice → Written → remediation. Preserve individual written self-check as descriptive, not automatic Core Readiness/Mastery.

**UI redesign:** after the Practice-content wave and separate Owner discussion, explore more compact knowledge pages (short overview, anchored sections, improved typography/spacing, sensible mobile navigation). This is explicitly **not** authorized by this packet.

## 5. NotebookLM next-stage review: what is and is not possible

This file is suitable as a **coverage triage/index source only** (Markdown or TXT), with Master Plan v1.2.1 and NotebookLM Math Review Rules v1.2. For approving individual KNTT placements or new written questions, add narrow temporary full-content packets and actual primary curriculum evidence. Never issue `MATH:PASS` for a problem merely from its title and metadata.

```text
PACKET_ID|MATH-W9-PRACTICE-WRITTEN-CORE-COVERAGE-R0-20261021
TOTAL_CANONICAL_WRITTEN_IDS|74
WITH_VERIFIED_KNTT_PLACEMENT_IDS|8
GRADE6_WRITTEN_PLACEMENT_ROWS|9
GRADE7_8_9_WRITTEN_PLACEMENT_ROWS|0
HISTORICAL_KNTT_MAP_ROWS|78
SOURCE_LOCK|WRITTEN:a8f19cea7f0f8b181e3cc1385ddbff13b75c252d|KNTT_MATRIX:2935f58925918674b5bacd2d8743d5526283adba
ACADEMIC_STATUS|TRIAGE_ONLY__FULL_SOURCE_REVIEW_REQUIRED
AUTHORIZATION|NO_NEW_ITEMS_NO_LIVE_RELEASE
```

**Governance:** Only Owner can approve change of Grade/Chapter/Lesson mapping after independent review; published items, scores, evidence lanes and the original Written library remain unchanged by this inventory.
