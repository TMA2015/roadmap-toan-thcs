# W9 — Focused evidence crosswalk for three previously prioritized low-density skill families

**PACKET_ID:** `MATH-W9-PRIORITY-LOW-DENSITY-LAYER-CHECK-R1-20261021`  
**Scope:** review evidence and distinguish a genuine Core gap from optional Entrance10 and taxonomy source-lane disagreement. **No new authoring, tagging, relayering, or live changes.**  
**Prior independently reviewed priority:** `MATH-PRACTICE-COVERAGE-PRIORITY-R1-20261009`; low_density.add exactly `QUAD-GRAPH`, `NUM-ABS`, `RATIO-MODEL`, **not all three KNTT-Core**.

## Source locks

| Evidence | Git blob SHA |
|---|---|
| Canonical skill-taxonomy v2 registry (runtime disabled) | `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4` |
| NotebookLM-approved older Practice priority | `509264ff08a096f7ccf2b3c0fdd0eb236bc4f416` |
| CT02 active Micro | `61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622` |
| CT03 active Micro | `303dc424e94db8de6271aaef279d8f8d07fa088a` |
| CT12 active Micro | `c943b9e67cd21b25988b467f80acdf1e58638087` |
| 74 canonical Written | `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d` |

## Current vs historical reviewer priority

| Canonical family | Historical priority | Current taxonomy layer | Current target-skill tagged Micro | Canonical Written with exact family skill/prerequisite | Direction |
|---|---|---|---:|---:|---|
| `NUM-ABS` | ADD_LOW_DENSITY_R1 | `KNTT-Core` | 1 | 0 | Core candidate for academic deep check |
| `RATIO-MODEL` | ADD_LOW_DENSITY_R1 | `Entrance10` | 4 | 0 | Source/taxonomy lane mismatch; do NOT automatically reclassify |
| `QUAD-GRAPH` | ADD_LOW_DENSITY_R1 | `Entrance10` | 0 | 0 | Entrance10 optional scope, never force into grade-Core |

### NUM-ABS — Grade6 absolute value (Core triage)

- Current canonical family taxonomy: `NUM-ABS` / skill `gia-tri-tuyet-doi`, `layer=KNTT-Core`, topic CT02.
- Existing Grade6 Core card `num02-g6-core-3` groups `Bài 13–17`, includes `gia-tri-tuyet-doi` among skills and general signed-integer operations. Its **ten original MCQs** include only **one** question explicitly tagged `gia-tri-tuyet-doi`, namely `NUM02MICRO_019`.
- Original focused MCQ:

> Trên trục số, điểm biểu diễn −9 cách 0 bao nhiêu đơn vị?

- Correct answer: `9`. Original explanation: ¦−9¦=9, nên điểm −9 cách 0 đúng 9 đơn vị..
- Current Written library: **zero exact `gia-tri-tuyet-doi` matches in item `skills` or `prerequisites`** (metadata only; this is not proof there is no implicit related task elsewhere). CĐ02 `bai-tap.md` had **zero literal occurrences of “tuyệt đối”** at this checkpoint, but semantic coverage still requires manual review.
- **P1 academic review candidate**: is there a meaningful need for a small variety of independent absolute-value reasoning/number-line problems, common sign traps, and at least one representative written problem? Review S1 lesson placement and structurally different types first; no mass expansion by question count.

### RATIO-MODEL — apparent Core/Entrance10 classification collision

- Historical taxonomy `RATIO-MODEL` / `mo-hinh-ti-le` is classified **`Entrance10`**, `learner_visible_default=false`, `runtime_enabled=false` (registry status is NOT the active runtime).
- Current Grade7 `rat03-core-g7-6` has **four active `KNTT-Core` Micro items tagged the same `mo-hinh-ti-le`**, all mapped in the source to `Bài 22–23`. Original source items:

**`RAT03MICRO_016`** (`base`, Grade7, `KNTT-Core`): Ba ki-lô-gam gạo giá 90 nghìn đồng. Gọi \(x\) là khối lượng gạo (kg), \(y\) là số tiền (nghìn đồng). Mô hình tỉ lệ thuận đúng là:

- Answer: `\(y=30x\)`. Explanation: Hệ số tỉ lệ là \(k=90/3=30\). Vì giá tiền tỉ lệ thuận với khối lượng nên \(y=30x\)..

**`RAT03MICRO_017`** (`trap`, Grade7, `KNTT-Core`): Một công việc cần tổng cộng 24 giờ-người. Nếu \(x\) người làm với cùng năng suất và hoàn thành trong \(y\) giờ, mô hình nào đúng?

- Answer: `\(xy=24\)`. Explanation: Số người tăng thì thời gian giảm sao cho tích số người × thời gian giữ nguyên bằng 24. Vì vậy \(xy=24\)..

**`RAT03MICRO_018`** (`apply`, Grade7, `KNTT-Core`): Hai đại lượng \(x,y\) tỉ lệ thuận. Khi \(x=4\) thì \(y=10\). Khi \(x=14\), giá trị \(y\) là:

- Answer: `35`. Explanation: Từ \(y=kx\), có \(k=10/4=2,5\). Khi \(x=14\), \(y=2,5\times14=35\)..

**`RAT03MICRO_019`** (`coverage`, Grade7, `KNTT-Core`): Hai đại lượng \(x,y\) có các cặp giá trị \((2,12),(3,8),(4,6)\). Mô hình phù hợp nhất là:

- Answer: `\(xy=24\)`. Explanation: Các tích lần lượt là 24, 24, 24 nên hai đại lượng tỉ lệ nghịch với mô hình \(xy=24\)..

**Finding:** Do NOT interpret the historical Entrance10 taxonomy label as permission to hide Grade7 Core lesson content or to promote the entire Entrance10 family to Core. This is a **taxonomy-to-active-source reconciliation question**, not proof the mathematical content is wrong. Independent reviewer should distinguish Grade7 proportional relationship modeling (S1) from more advanced Entrance10 problem structures; decide whether one family needs split/alias/role-based crosswalk **without changing canonical IDs or assessed results**.

### QUAD-GRAPH — optional transfer priority, not proof of deficient Core

- Historical taxonomy `QUAD-GRAPH` / `lien-he-do-thi` is `Entrance10` and runtime disabled; **zero items explicitly tagged `lien-he-do-thi` in CT12 current Micro**. This is a candidate **optional transfer** coverage check after the Core quality priorities; it must never hold back a student from completing Grade9 KNTT-Core.
- A topic's lack of this *exact tag* does not prove the entire graph/roots concept is absent from other CT10/12 lesson content; check normalized problem types and actual math sources before authoring.

## Review instructions for NotebookLM or another independent S1-backed audit

Use this packet alongside Master Plan v1.2.1, NotebookLM Math Rules v1.2 and focused source excerpts **plus independent KNTT S1 curriculum**. Three proposed decisions must be separated:

1. `NUM-ABS`: `UNDER_COVERED / PRESENT_BUT_RELABELED / NO_ACTION / INSUFFICIENT_SOURCE`, cite distinct structures and any recommendation for a bounded full worked problem.
2. `RATIO-MODEL`: `GRADE7_CORE_SOURCE_VALID / TAXONOMY_LAYER_RECONCILE / INSUFFICIENT_S1`. Distinguish ordinary Grade7 ratio application from true Entrance10 transfer. No automatic relabel.
3. `QUAD-GRAPH`: `OPTIONAL_TRANSFER_GAP / COVERED_ELSEWHERE / NOT_PRIORITY / INSUFFICIENT_SOURCE`, check CT10/CT12 mathematical structure and grade placement.

```text
PACKET_ID|MATH-W9-PRIORITY-LOW-DENSITY-LAYER-CHECK-R1-20261021
SOURCE_LOCKS|NUM:61c1e4ef1e2f0d44476c6f34f48fd7bbcce24622|RATIO:303dc424e94db8de6271aaef279d8f8d07fa088a|QUAD:c943b9e67cd21b25988b467f80acdf1e58638087|TAX:90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4
NUM_ABS_CURRENT_SKILL_TAGGED_MICRO|1
RATIO_MODEL_CURRENT_G7_CORE_SKILL_TAGGED_MICRO|4
QUAD_GRAPH_CURRENT_SKILL_TAGGED_MICRO|0
NUM_ABS_DECISION|...
RATIO_MODEL_DECISION|...
QUAD_GRAPH_DECISION|...
NEW_AUTHORING|NOT_AUTHORIZED
OVERALL|TRIAGE_ONLY / REVIEWED
AUTHORIZATION|NO_LIVE_RELEASE
```
