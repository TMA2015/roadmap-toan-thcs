# W9 R3 — Per-skill Core Micro evidence census and academic prioritization

**PACKET_ID:** `MATH-W9-PERCORE-SKILL-DEPTH-SOURCE-CENSUS-R3-20261022`  
**Date:** 2026-10-22, source crosswalk of current published `main` bank/question/card IDs.  
**Academic status:** `TAG_EVIDENCE_ONLY / NO_INDEPENDENT_S1_DEPTH_VERDICT / NO_LIVE_RELEASE`.  
**Scope:** 22 active topic Micro banks; 21 with Core cards and CT24 support-only. Source census script on Draft #566: `scripts/audit-w9-per-core-skill-source-evidence-r1.js`. It reads **CT20 active Core v2 overlay**, NOT frozen CT20 v1 alone.

## Main result

There are **293 declared Core-card × skill occurrences** on **120 actively displayed Core cards** across topics. The active MCQ source IDs map as follows:

- **0** occurrences have no directly skill-tagged Micro item.
- **212** occurrences have **exactly one** directly tagged Micro item (72.35% of declared Core-card skill occurrences).
- **81** occurrences have **two or more** directly tagged Micro items.
- CT20 v2 adds **five coverage-only** display cards to the 115 original primary learning cards; their one-question-per-skill profile is intentional, **not** an instruction to create a full base/trap/apply trio for every supplemental sub-card.
- For a full original Core **card**, source confirms 115 primary cards with base/trap/apply Micro roles, but this must **never** be restated as three genuinely different problems for **each skill** within a card.

**Source limitation:** A declared skill and a `tags.skill` entry are author metadata, not an independently verified judgment of mathematical content, distractor quality, cognitive depth, true problem-type diversity or chapter S1 placement. Conversely, one tagged item does not prove the student has no exposure through other skills, a worked example, full-written solutions, or prior lessons. This census provides **review priorities**, not new-item quotas.

## Source-local comparative distribution

The counts below are exact active card–skill occurrences, not unique skill IDs globally. Primary grades may differ within a topic. `2+` is the count of card-skills with at least two directly tagged Micro IDs.

| CĐ | Active Core area | Declared card–skill occurrences | Exactly one Micro | 2+ Micro |
|---:|---|---:|---:|---:|
| 02 | Số và phép tính | 20 | 10 | 10 |
| 03 | Tỉ số / tỉ lệ | 12 | 8 | 4 |
| 04 | Biểu thức đại số | 12 | 7 | 5 |
| 05 | Hằng đẳng thức | 12 | 10 | 2 |
| 06 | Phân tích đa thức | 9 | 5 | 4 |
| 07 | Phân thức đại số | 12 | 8 | 4 |
| 08 | Phương trình, BPT | 14 | 13 | 1 |
| 09 | Hệ phương trình | 14 | 12 | 2 |
| 10 | Hàm số, đồ thị | 13 | 11 | 2 |
| 11 | Căn thức | 12 | 9 | 3 |
| 12 | Phương trình bậc hai | 11 | 6 | 5 |
| 13 | Góc và đường thẳng | 21 | 19 | 2 |
| 14 | Tam giác | 13 | 10 | 3 |
| 15 | Đồng quy | 11 | 7 | 4 |
| 16 | Tứ giác | 13 | 10 | 3 |
| 17 | Thales, đồng dạng | 12 | 9 | 3 |
| 18 | Hệ thức lượng | 11 | 7 | 4 |
| 19 | Đường tròn | 14 | 12 | 2 |
| 20 | Hình học tổng hợp (Core v2) | 29 | 29 | 0 |
| 21 | Thống kê | 13 | 3 | 10 |
| 23 | Xác suất | 15 | 7 | 8 |
| 24 | Bài toán thực tế (Support) | 0 | 0 | 0 |
| **Total** | **22 banks** | **293** | **212** | **81** |

## Risk-based academic follow-up, not automatic question expansion

**P1: Examine demanding foundational and procedural Core skills first.** Topic 08 (phương trình / bất phương trình: 13 of 14 declared card–skills have one tagged Micro), topic 09 (hệ phương trình: 12 of 14), topic 13 (góc/đường thẳng: 19 of 21) and topic 17 (Thales/đồng dạng: 9 of 12) are high-priority **source-difficulty case-selection areas**, *not* asserted inadequacies. Check worked examples, genuine variation of problem structures, multi-step written tasks, common mistakes and prerequisite links before recommending anything new.

**P1: Grade6 `NUM-ABS` specific case** still shows one direct tagged Micro `NUM02MICRO_019`. Separate temporary proposed 3 Micro + 1 Written must be reviewed against textbook S1 for cognitive fit and structural distinctness, **not** imported yet.

**P1: Written coverage and navigation:** source-confirmed 74 canonical Written, all with solutions/rubrics, but only eight have nonempty **recorded** `kntt_placements` metadata (nine Grade6 rows, not a fresh independent S1 verification). Grade7/8/9 have numerous grade overlays but **zero recorded grade-specific KNTT placement rows**. In student UI, filtering by topic/type/level/kind/text does not replace Grade→Chapter→Lesson browse. Review 18 full original Written examples first; reuse those same IDs rather than cloning.

**P1: Scope consistency with explicit non-gating support.** `RAT03MICRO_002` (ratio of 2 m to 50 cm) is Grade6 `Core-Support`, `evidence_role=FORMATIVE_SUPPORT_ONLY` and `gates_core=false`. It is deliberately in the Grade6 Core teaching card's Micro practice list but **not** a declared core-denominator skill. Its tag `doi-don-vi-ti-so` must not be mislabeled a missing Core skill or a grading error. The census script therefore reports such explicitly nongating support tags separately.

**P2: Shallow visual recognition vs multistep reasoning.** CĐ20 Grade6/7/9 visual geometry has 29 of 29 card–skills with a single tagged Micro in the 10-card v2 layout; it has five supplemental cards with 14 questions already displayed (no missing content). For figure recognition, adding near-duplicate MCQs solely to reach a numeric quota is undesirable. Review authentic figure-based reasoning and links to existing Written examples when needed.

**P2: Optional extension is distinct from Core.** Old `RATIO-MODEL` taxonomy label `Entrance10` conflicts with the source's four Grade7 Bài22–23 Core items; the curriculum allows ordinary direct/inverse ratio concepts, and independent KNTT S1 must resolve scope and aliasing. `QUAD-GRAPH` (optional Entrance10 transfer) is **not** a missing prerequisite for Grade9 Core completion.

**Review outcome after independent S1 + NotebookLM:** identify a small set of *structurally distinct* required examples, a short selection of reusable existing Written source IDs and their academically verified placements, then offer Owner one consolidated content-delta approval. Do not change original question keys, grade evidence, Mastery, Readiness or history.

## Reproducibility and release boundary

- Source cohort: 22 Micro bank files, 22 workspace files plus Grade6–9 geometry CT20's explicit v2 display overlay. The audit script prints per-source Git blobs and individual direct Micro IDs for reviewer tracing.
- Older independently reviewed 237 **topic Readiness** questions remain untouched.
- This is a technical **metadata/tag census**, not an independent academic review, completeness certificate or learner ability judgment.
- Exact-head CI must PASS before claiming QA validated. Existing PR #566 contains only scripts and review source packets, **not** modifications to the published learner content.
- `OWNER_AUTHORIZATION|NO_NEW_LIVE_RELEASE`, academic status `NOTEBOOKLM_S1_REVIEW_PENDING`.
