# W9 R2 — Integrated source evidence and academic-review boundary

**PACKET_ID:** `MATH-W9-INTEGRATED-CORE-PRACTICE-WRITTEN-SOURCE-AUDIT-R2-20261021`  
**Source of numbers:** Checked-in active GitHub `main` at W9 baseline, verified by read-only scripts staged on review Draft PR #566; distinguish repository implementation QA from **KNTT S1 / NotebookLM academic review**.  
**Status:** `IMPLEMENTATION_INVENTORY / REVIEW_REQUIRED / NO_LIVE_RELEASE`.  
**Owner goal:** essential Core, basic examples, deliberate trap and Apply practice, representative written reasoning useful over four years. No question-count quota, no forced short-term learner gains.

## 1. Active Micro bank evidence (all 22 topical banks inspected)

The historical 25-topic graph is **not equivalent** to 25 Core Micro bank files: the following counts are for **22 active topical Micro banks**, including CĐ24 Core-Support, not for all possible mathematics content or an S1 textbook lesson completeness verdict.

| Metric | Source-evidenced initial inventory | Correct interpretation |
|---|---:|---|
| Active topical Micro banks | 22 | Distinct existing runtime source banks under `docs/assets/data/practice/` |
| Micro question IDs | 455 | 439 tagged `KNTT-Core` plus 16 tagged `Core-Support`; no added content |
| Source-tagged by grade | G6: 88 / G7: 107 / G8: 120 / G9: 125 / grade unspecified: 15 | Grade count is tagging, not independently verified S1 placement. 15 unspecified are topic24 Core-Support |
| Original primary Core teaching cards | 115 | All include a `base`/ `trap`/ `apply` pattern in existing bank when matched to actual active view |
| Additional CT20 coverage display cards (v2) | 5 | Supplemental coverage cards, NOT required to repeat base/trap/apply triad |
| Core display cards expected in active runtime | 120 | 115 original primary + 5 CT20 v2 supplemental |
| Canonical bank/source ID mutations | 0 | This review does not edit learner-visible questions/answers |

**Semantic limitation:** A role labeled `base`, `trap` or `apply` is not independent proof that a question really tests a distinct misconception or reasoning level; verify stems/distractors and true coverage using independent academic checks.

### CT20 false positive independently investigated and resolved — DO NOT change learner source

An early metadata-only audit saw **14 Grade6/7/9 geometry Micro questions** (IDs `GEO20MICRO_016..029`) with `card_id` values not in the **frozen five-card** file `topic20-learning-workspace.json` and initially labeled them orphaned. This was **NOT** a learner-runtime finding. The current player `topic-workspace-v1.js` explicitly loads `topic20-core-display-v2.json` and substitutes **ten display cards**, with a compatibility contract pinning exact historical five legacy cards, their Micro IDs, original skill denominators, `toan-thcs-practice-v1` progress key and **no history migration**.

Source-locked active overlay `docs/assets/data/curriculum/topic20-core-display-v2.json`: Git blob `ebd5e3e2a7d58d0a75a4cfafd7c026bbd693bd32`; it includes exactly **29 unique Micro IDs** across 10 cards. The five added display cards bind the previously flagged IDs:

| Supplemental display card | Grade | Actual IDs |
|---|---:|---|
| `geo20-core-1a` | 6 | GEO20MICRO_016, 017, 018 |
| `geo20-core-1b` | 6 | GEO20MICRO_019, 020, 021 |
| `geo20-core-2a` | 7 | GEO20MICRO_022, 023, 024 |
| `geo20-core-2b` | 7 | GEO20MICRO_025, 026 |
| `geo20-core-4a` | 9 | GEO20MICRO_027, 028, 029 |

**Decision:** `CT20_LOST_MICRO|NO`; `CT20_LEGACY_SOURCE_MUTATION|FORBIDDEN`; `CT20_ACTIVE_V2_MAPPING|PRESERVED`. This is an important example of why a naive audit of JSON card IDs can create spurious requests for new educational content.

The revised `scripts/audit-w9-active-core-micro-source-r1.js` reads the **same overlay as the player**, verifies all 5 frozen legacy definitions against the active overlay, and requires zero real source orphan IDs / declaration mismatches. Grade-less or broad legacy card metadata is **navigation evidence to review later**, not permission to rewrite the frozen historical contract.

## 2. Written evidence, verified with all 74 source items

| Metric | Recorded count |
|---|---:|
| Canonical Written items | 74, each marked academic `APPROVED` |
| Standard / deeper-anchor written | 54 / 20 |
| Have solution steps or full solution | 74 |
| Have rubric | 74 |
| Have optional `hints` / `hint_steps` | 21 |
| Have explicit `method_rationale_markdown` | 21 |
| Have a valid direct Core workspace card link in `source_refs` | 48 distinct items (70 source-card links) |
| No directly linked Core workspace card in `source_refs` | 26 items |
| Invalid / missing workspace card links | 0 |
| Written items with actual `kntt_placements` | 8 IDs, 9 rows **all Grade6** |
| Remaining unplaced items | 66 IDs (not absent questions) |

All 74 have explanatory material and scoring rubric. The missing **verified grade/lesson discovery layer** remains the larger usability gap than raw answer volume. Some of the 26 items without a direct Core-card link may have ordinary topic/lesson links; do not call them missing, broken or unsuited without reviewing actual `source_refs`. Advisory `grade_overlay` cannot substitute for KNTT S1-verified `kntt_placements`.

## 3. Actual instructional gaps and review priorities

**Priority A — source alignment and source-informed reuse.**
Review a bounded first batch of **18 existing full original Written** (6 Grade7, 6 Grade8, 6 Grade9) to verify math, reasoning, pedagogical role and **independent textbook grade/lesson placement**. Only after individual S1-backed placement PASS may their same canonical IDs become grade-level discoveries; do not duplicate them.

**Priority B — foundational Grade6 NUM-ABS.**
The active source has one exact `gia-tri-tuyet-doi` Micro on the Grade6 integer number-line Core card. Older independently reviewed priority says increase variety. Review the **3 distinct Micro + 1 fully worked Written** candidate together in a single S1/NotebookLM packet before authoring. They are **temporary review IDs**, not newly adopted canonical IDs. A base/trap/apply trio for the WHOLE integer card does not prove a full base/trap/apply trio for the single absolute-value skill.

**Priority C — taxonomy/core classification consistency.**
Historical `RATIO-MODEL` family is optional Entrance10 but four actual Grade7 `Bài 22–23` Micro have `KNTT-Core` source layer; ask reviewer to separate mainstream proportional modeling from Entrance10 transfer and recommend a safe alias/split **without relabeling past answers**. `QUAD-GRAPH` is an optional Entrance10 family, not a reason to hold Grade9 Core for additional graph problems.

**Priority D — make existing Written discoverable.**
Current web Written library filters by topic, problem type, difficulty, kind and text. It has **no grade/chapter/lesson filter**. After grade-source verification, add class navigation using the same canonical Written IDs and original solutions; preserve topic bookmarks, assessment history and all Core milestones. Do not create an unreviewed grade filter from broad `grade_overlay`.

**Deferred:** Knowledge-page long-scroll, heading/spacing/navigation redesign only after the Practice/Written content wave and separate Owner design review.

## 4. Independent NotebookLM request, grouped into one review pass

Review the following **three** temporary full-source packets in one academic review, together with *permanent* Master Plan v1.2.1 and NotebookLM Math Review Rules v1.2 and independently verified KNTT S1 curriculum pages:

1. `TEMP_W9_18_CANONICAL_WRITTEN_FULL_CONTENT_G7_G8_G9_R1_20261021.md` — 18 original math tasks with solutions/rubric. Return source-exact item verdict and Grade/Chapter/Lesson placement only when S1 evidence confirms.
2. `TEMP_W9_3_FAMILY_LOW_DENSITY_LAYER_CROSSWALK_R1_20261021.md` — distinguish `NUM-ABS` Core density from optional transfer families; reconcile Grade7 Core proportional modeling vs old taxonomy.
3. `TEMP_W9_NUM_ABS_G6_3MICRO_1WRITTEN_CANDIDATE_R0_20261021.md` — four **unapproved** proposed original Grade6 absolute-value problems; judge distinct math, distractors, pedagogy and exact textbook scope.

If NotebookLM cannot access S1 source, return `INSUFFICIENT_S1` — even mathematically correct questions should **not** be assumed to have independently verified KNTT chapter placement.

**One consolidated requested receipt:**

```text
PACKET_ID|MATH-W9-INTEGRATED-CORE-PRACTICE-WRITTEN-SOURCE-AUDIT-R2-20261021
ORIGINAL_WRITTEN_REVIEWED_IDS|<all exact 18>
ORIGINAL_WRITTEN_MATH|<per-ID PASS/REVISE>
G7_G8_G9_PLACEMENT|<per-ID VERIFIED or INSUFFICIENT_S1>
NUM_ABS_G6_ORIGINAL_DENSITY|<evidence-based judgment>
NUM_ABS_G6_MC01|PASS / REVISE / REJECT
NUM_ABS_G6_MC02|PASS / REVISE / REJECT
NUM_ABS_G6_MC03|PASS / REVISE / REJECT
NUM_ABS_G6_WR01|PASS / REVISE / REJECT
RATIO_MODEL_G7_CORE_VS_ENTRANCE10|<reasoned decision>
QUAD_GRAPH_OPTIONAL_TRANSFER|<reasoned decision>
RECOMMENDED_MINIMAL_WRITTEN_PLACEMENT_CHANGES|<reviewed ID and exact grade chapter lesson, if any>
RECOMMENDED_MINIMAL_NEW_AUTHORING|<only independently justified IDs/concepts>
MISSING_IDS|none / IDs
DUPLICATE_IDS|none / IDs
OVERALL|PASS / REVISIONS_REQUIRED / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_LIVE_RELEASE
```

**This document is a technical/content planning crosswalk, not itself an independently issued academic PASS.** No automatic import, scores, question keys or learner progress can be changed on this evidence alone.


---

# ADDENDUM — a pre-existing grade-placement inconsistency, *one extra focused source*

**Not part of the 18-item G7/G8/G9 depth batch:** `WX21-STA-001` already has `grade_overlay: [8]` **but** `kntt_placements: [{grade:6, chapter:9, lesson:"Bài 38–41 — Dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép"}]`. This source contradiction is not evidence of a mathematics error and does not authorize an automated metadata edit.

**Exact original canonical Written source** (Git blob `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d`):

**ID** `WX21-STA-001`; title: Từ bảng số liệu đến biểu đồ cột có thang đo rõ ràng; level: `CORE_BASE`; full source links: docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-2, docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-4, docs/assets/data/curriculum/topic21-learning-workspace.json#sta21-core-5, docs/kien-thuc/21-thong-ke/bai-tap.md#21-M3-09.

**Problem:**

Một thư viện ghi lại số lượt mượn sách theo thể loại trong một tuần:

| Thể loại | Truyện | Khoa học | Lịch sử | Kỹ năng |
|---|---:|---:|---:|---:|
| Số lượt mượn | 24 | 18 | 12 | 16 |

1. Chọn dạng biểu đồ phù hợp để so sánh bốn thể loại và giải thích ngắn gọn.
2. Trên giấy, vẽ biểu đồ với tên biểu đồ, trục, đơn vị và thang chia hợp lý.
3. Xác định thể loại có số lượt mượn lớn nhất, nhỏ nhất và tính chênh lệch giữa hai giá trị đó.
4. Viết một nhận xét chỉ dựa trên số liệu đã cho.

**Original full solution steps:**

**S1: Chọn dạng biểu diễn** — Dữ liệu gồm bốn nhóm thể loại cần so sánh số lượt mượn, nên **biểu đồ cột** là phù hợp. Biểu đồ đoạn thẳng không phù hợp vì bốn thể loại không phải một chuỗi thời gian.

**S2: Thiết lập biểu đồ** — Trục ngang ghi bốn thể loại: Truyện, Khoa học, Lịch sử, Kỹ năng. Trục dọc ghi **Số lượt mượn (lượt)**, bắt đầu từ $0$ và dùng thang chia đều đủ để biểu diễn đến $24$. Bốn cột có chiều cao lần lượt $24,18,12,16$.

**S3: So sánh các giá trị** — Truyện có số lượt mượn lớn nhất: $24$ lượt. Lịch sử nhỏ nhất: $12$ lượt. Chênh lệch là

$$24-12=12\text{ lượt}.$$

**S4: Kết luận trong phạm vi dữ liệu** — Một nhận xét có căn cứ là: **Trong tuần được ghi nhận, sách Truyện có số lượt mượn lớn nhất và nhiều hơn sách Lịch sử 12 lượt.** Dữ liệu này không tự cho biết nguyên nhân vì sao các thể loại có số lượt mượn khác nhau.

**Original self-check rubric:**

- Chọn đúng biểu đồ cột và nêu được mục tiêu là so sánh các nhóm. (1 điểm)
- Vẽ/thiết lập đúng trục, đơn vị, thang chia và bốn cột 24, 18, 12, 16. (1 điểm)
- Xác định đúng lớn nhất 24, nhỏ nhất 12 và chênh lệch 12 lượt. (1 điểm)
- Viết nhận xét đúng phạm vi dữ liệu, không tự suy diễn nguyên nhân. (1 điểm)

**Independent S1 reviewer must answer:** Does this exact bar-chart interpretation/drawing item academically fit Grade6 KNTT Chapter9 Bài38–41, Grade8 data work, **both at different learning purposes**, or neither? Return `WX21-STA-001|MATH:...|GRADE6_PLACEMENT:VERIFIED/INSUFFICIENT_S1/REVISE|GRADE8_OVERLAY:...|ACTION:KEEP/REVISE_METADATA_AFTER_OWNER_APPROVAL/HOLD`. Do not merely choose between conflicting JSON tags; verify primary textbook lesson scope. Do not change live metadata now.
