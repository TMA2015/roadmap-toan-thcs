# Self-Learning Math — Current project checkpoint · 2026-10-21 · W8/W9

**State:** Durable cross-chat implementation/evidence checkpoint.  
**Source hierarchy:** Master Plan v1.2.1 + NotebookLM Math Rules + Golden Template/Written Contract for academic rules; `main` for published implementation; [Owner product direction](PROJECT_OWNER_DIRECTION_20261021.md) for confirmed goals.  
**Date of record:** 2026-10-21. Check latest GitHub PR/CI heads on resume rather than assuming this static record remains up to date.

## 0. Owner's working rules (CONFIRMED)

- One 4-year Math Grade6–9 learning/reference product, not a quick short-term test-score project. Evaluate meaningful individual progress only with months and real use; product improvement never stops when students are satisfied.
- Prioritize **essential KNTT-Core concepts and prerequisite coverage**, immediate examples, structurally diverse basic/trap/apply Practice, and **representative fully solved Written reasoning/transfer**, not inflated question totals.
- Maintain one canonical 25-topic graph, 2 learning paths, one shared 74-item Written library, and separate formative Practice, independent Readiness and possible Mastery evidence.
- Work in **larger consolidated waves**, not interrupt Owner with repeated technical `tiếp tục` prompts. Save decisions in GitHub and require Owner signoff for release/academic gates.
- Knowledge-page long-scroll typography/navigation redesign is **DEFERRED until after Practice content work** and separate Owner discussion. Possible outline/overview layout is only an assistant proposal, not an approved design.

## 1. Production completed

- **Grade6 Mixed-Core formative**: release PR [#563](https://github.com/TMA2015/roadmap-toan-thcs/pull/563), 10 NotebookLM-reviewed source IDs across 6 topics, full-group L1/L2/L3 4/4/2; uses an independent formative attempt namespace with no Mastery/Readiness credit. Production JS/math/CSS hotfix [#564](https://github.com/TMA2015/roadmap-toan-thcs/pull/564); Owner confirmed **desktop** and **physical iPad** works. No need to reopen absent a new reproducible bug.
- 237 existing *topic* Readiness MCQs and 74 canonical Written are protected historical baselines. Never silently regrade/migrate student data or rewrite old assessments.
- Review-only 21-topic academic archive PR [#560](https://github.com/TMA2015/roadmap-toan-thcs/pull/560) and integration-only QA PR [#562](https://github.com/TMA2015/roadmap-toan-thcs/pull/562) are **NOT** publication candidates. Never merge #562.

## 2. W8 Grade9 CT23 independent Readiness — candidate, not published

- PR [#565](https://github.com/TMA2015/roadmap-toan-thcs/pull/565), isolated new Grade9-only candidate with 10 NotebookLM-approved source IDs/keys, grade9 Chapter8 path, separate assessment ID `PROB23-G9-CORE-READY-V1`, role `independent_grade9_readiness`. Keeps historical Grade6–8 CT23 12-item assessment and QA-only Grade9 attempts unchanged. QA role attempts stay excluded from descriptive Readiness dashboard.
- Previous exact-head CI run [#39618098316](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39618098316) **SUCCESS**, including source/backup/history/no-Mastery safety and 1365/390/820 Chrome emulator browser tests. This is **automated QA**; physical Grade9 iPad/Safari QA is not claimed.
- Source still has `GRADE9_RELEASE_CANDIDATE_DRAFT` and `OWNER_APPROVAL_PENDING__DO_NOT_MERGE`. Owner has **NOT independently approved this Grade9 live release**. Needs explicit release signoff and production-ready flag/link change in an exact-head tested release PR; do not merge QA #561/#562 as shortcuts.

## 3. W9 Core Practice and Written quality — review-only

- PR [#566](https://github.com/TMA2015/roadmap-toan-thcs/pull/566) contains source-locked full canonical Written inventory, 78-row historical KNTT grade6–9 matrix, plus original full math text/solutions/rubric for 18 existing Written source cases (6 G7, 6 G8, 6 G9). **Independent actual KNTT S1 curriculum placement verdict remains pending**; historical map and grade_overlay are NOT S1 placement proof.
- Verified main Written file `docs/assets/data/written-exercises/written-exercise-library-v1.json` blob `a8f19cea7f0f8b181e3cc1385ddbff13b75c252d`: **74 APPROVED items**; exactly **8 Written IDs with actual `kntt_placements`** (9 placement rows, all Grade6). **66 unplaced**, despite some grade7–9 overlays. This is a **grade-discoverability/verified-placement evidence gap**, not proof of missing 66 learning problems.
- **Actual student Written viewer** `docs/assets/javascripts/written-exercise-library-v1.js` currently supports topic/type/level/kind/text filters but **not grade/chapter/lesson selection**. Do not fake class placement from unverified `grade_overlay`; implement correct class navigation after independent source review.
- Automated W9 source audit scripts staged: `scripts/audit-w9-active-core-micro-source-r1.js` (22 active Micro banks aligned to workspace Core/Support cards; coverage of base/trap/apply labels but no structural-clone or S1 proof) and `scripts/audit-w9-written-core-card-crosswalk-r1.js` (74 canonical items, workspace refs vs verified KNTT placements). Connected to PR Quality in Draft #566. They had passed their individual CI audit steps at last observation; check **latest exact-head full CI** before claiming overall PASS.
- Older reviewed priority `MATH-PRACTICE-COVERAGE-PRIORITY-R1-20261009` called to add coverage for `NUM-ABS`, `RATIO-MODEL`, `QUAD-GRAPH`, but **their current layers differ**:
  - `NUM-ABS` is KNTT-Core; exactly **one** active Micro source item tagged `gia-tri-tuyet-doi` (CT02 `NUM02MICRO_019`), with no exact metadata match in canonical Written. Grade6 foundation **candidate gap**, not yet final S1 depth verdict.
  - `RATIO-MODEL` in historic runtime-disabled taxonomy is `Entrance10`, but **four** active Grade7 Bài22–23 MCQs are source-tagged `KNTT-Core`. Needs independent S1 Core-vs-transfer/type/alias crosswalk before relayering; don't erase genuine Grade7 content.
  - `QUAD-GRAPH` historical `Entrance10` is optional, not a prerequisite for finishing Grade9 Core; zero exact-tagged CT12 Micro does not prove absent elsewhere.
- W9 Grade6 NUM-ABS includes **three candidate Micro + one Written representative** with hints, method rationale, common mistakes, rubric, but this is *unapproved authoring for independent NotebookLM & primary KNTT S1 review*. Do not assign canonical IDs or import until source-level academic PASS and Owner authorization.

## 4. W9 review packet navigation (all on Draft PR #566)

1. [74 Written source metadata and 78 KNTT rows](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/TEMP_W9_CORE_PRACTICE_WRITTEN_COVERAGE_AUDIT_R0_20261021.md)
2. [18 exact existing Written originals for G7/G8/G9 academic placement](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/TEMP_W9_18_CANONICAL_WRITTEN_FULL_CONTENT_G7_G8_G9_R1_20261021.md)
3. [3 priority families: Core vs optional taxonomy/source crosswalk](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/TEMP_W9_3_FAMILY_LOW_DENSITY_LAYER_CROSSWALK_R1_20261021.md)
4. [NUM-ABS Grade6 3 Micro + 1 Written unapproved source candidates](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/TEMP_W9_NUM_ABS_G6_3MICRO_1WRITTEN_CANDIDATE_R0_20261021.md)

## 5. Handoff to next Math chat

- On resume, FIRST fetch latest PR #565/#566 statuses and exact-head CI. PR #566 may have newer commits than this checkpoint. Do **not** conflate completed per-step tests with complete CI success.
- Ask for external independent NotebookLM/S1 verdict **only after** packaging a coherent full-source review, not in small repeated fragments; mathematics correct and textbook placement are separate judgments.
- Once grade placements are independently verified and Owner authorizes metadata changes, surface the **same canonical Written IDs** in class and topic paths. Then author only demonstrably missing Core structure/representative written types via reviewed bounded batches.
- Only **after** Practice/Written content wave, discuss knowledge-page information architecture and layout prototypes with Owner.
- Respect user's request for **consolidated updates** and never promise offline background work without an actual scheduled task.

## 6. W9 R2 updated evidence — 22-bank runtime vs 74 Written (2026-10-21)

- **Latest review-only Draft #566** includes two read-only CI audits and [one consolidated NotebookLM upload](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/ONE_UPLOAD_NOTEBOOKLM_W9_18WRITTEN_3FAMILIES_NUMABS_R1_20261021.md). NotebookLM **has not returned an independent verdict** for this bundle. Never presume source grade/lesson placement PASS just because repository CI passed.
- The **22 active topic Micro banks** have **455 source questions**: 439 `KNTT-Core`, 16 `Core-Support`; grade tags 88 G6 / 107 G7 / 120 G8 / 125 G9 / 15 unspecified Core-Support. This measures live source inventory, NOT whole KNTT S1 depth.
- **Important source-audit correction:** An early audit incorrectly flagged 14 CT20 questions `GEO20MICRO_016..029` as orphaned because it read **only the frozen five-card v1 legacy workspace**. The actual `topic-workspace-v1.js` runtime loads `topic20-core-display-v2.json` and displays 10 Core cards containing **all 29 CT20 Micro IDs**, while protecting original `toan-thcs-practice-v1` student history. The corrected audit checks overlay/legacy invariants and must find **zero actual unmapped IDs**. **Do not rewrite/move/delete these 14 questions.**
- For academic coverage, distinguish **115 primary teaching cards** with base/trap/apply patterns from **five supplemental CT20 v2 coverage-only cards**; never treat their lack of another triad as a curriculum gap or automatic question quota.
- Direct `source_refs` to valid Core workspace cards appear on **48/74 Written IDs**, totaling **70 valid links**; **26** do not have a direct Core workspace card reference (they may have other topic references; do not call them missing). All 74 have solution steps or full solution and rubric; 21 have explicit `method_rationale_markdown`. Only **8 IDs** have true grade-specific `kntt_placements`, 9 rows all G6. The visible Written library presently filters topic/type/level/kind/text but **not grade/chapter/lesson**.
- W9 academic focus: verify the Grade7–9 full original 18 Written examples against **independent KNTT S1**, review old taxonomy `RATIO-MODEL` Entrance10 vs current Grade7 `KNTT-Core` modeling, classify optional `QUAD-GRAPH`, and validate **three unapproved G6 absolute-value Micro + one Written** candidates. A **single NotebookLM bundle** combines their original text and a machine-readable review format, minimizing Owner operations. Unknown S1 material must yield `INSUFFICIENT_S1`, not invented lesson placement.
- The updated `scripts/audit-w9-active-core-micro-source-r1.js` tests actual CT20 v2 behavior, enforces exact 5-card frozen legacy compatibility and zero true orphan/declaration mismatches. Check **latest exact-head CI** on PR #566 before writing `PASS`; previous head audit step PASS is not the same as final complete run.

### W9 R2 extra integrity finding — cross-grade Written metadata hold

- `WX21-STA-001` **already has** advisory `grade_overlay=[8]` but a recorded `kntt_placements` row for **Grade6 Chapter9, Bài38–41**. This is a **metadata discrepancy**, not proof the mathematical problem is wrong or that either grade choice is authoritative. Its original bar-chart drawing/interpretation problem, full solution, rubric and existing source URLs were copied into the **single W9 NotebookLM review bundle** as an extra focused S1 verification case, separate from the 18-item G7–9 batch.
- The read-only W9 Written audit now emits `GRADE_OVERLAY_PLACEMENT_CONTRADICTION|WX21-STA-001|overlay:8|placement_grade:6`. Do **not** silently edit either field or display a definitive grade filter for this item. Request independent primary KNTT S1 placement and Owner approval before a metadata-only correction. The canonical 74 Written questions and past attempts stay unchanged.
