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

## 7. W9 R3 — 2026-10-22 per-skill depth evidence and ready academic handoff

**User workflow:** Continue coherent W9 academic/content audit (not dozens of mini-tasks); Owner does not have to type "tiếp tục" for every routine CI check, source verification or Draft doc update. Do not imply asynchronous background execution without an actual scheduled task.

- Live PR [#566](https://github.com/TMA2015/roadmap-toan-thcs/pull/566) latest head must be re-fetched at handoff. Previous exact head `4715f821a02cb821601d6e492ee1509a4c3171da` CI [#39630805703](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39630805703) **SUCCESS**; subsequent additions changed head. **Do not copy the old success to newest head.**
- New read-only `scripts/audit-w9-per-core-skill-source-evidence-r1.js` is part of PR QA. It compares active 22 Micro banks against 120 visible `KNTT-Core` cards, including 5 CT20 v2 coverage-only cards; distinguishes nongating `Core-Support` from official Core skill denominator.
- **Source evidence as of 2026-10-22:** 293 **card–skill occurrences**, zero without any directly tagged Micro, **212 with exactly one** directly tagged Micro (72.35%), 81 with 2+. This is **tag coverage**, not proof of distinct mathematical problem structures or of curriculum completeness. All 115 original primary teaching cards have base/trap/apply roles, but NOT necessarily one triad for EACH declared skill. CT20 five extra display cards are supplementary, not extra three-question teaching cycles.
- Five high-value example areas for academic depth sampling: CT08 (13 of 14 card-skills with one tagged Micro), CT09 (12/14), CT13 (19/21), CT17 (9/12), CT20 (29/29, includes specialist visual recognition). Do NOT author 212 additional questions just to change the statistic.
- `RAT03MICRO_002` is deliberately `Core-Support`, role `FORMATIVE_SUPPORT_ONLY`, `gates_core=false`, with skill tag `doi-don-vi-ti-so` outside Grade6 Core card skill denominator. **Not** a canonical tag conflict or learner data bug; review audit separates support-only tags. Original math/question/key/historical student evidence remain unchanged.
- Independent public textbook/curriculum indices suggest ordinary Grade7 Bài22–23 proportional reasoning, Grade6 Bài13 number-line absolute value, and Grade6 Bài40 bar charts. These are **secondary S2 orientation**, NOT original KNTT primary S1 proof. `TEMP_W9_PUBLIC_S2_CURRICULUM_CROSSCHECK_20261022.md` records URLs and limitations.
- **One consolidated NotebookLM Markdown file**, now including per-skill priority signals: [W9 one-upload review bundle](https://github.com/TMA2015/roadmap-toan-thcs/blob/review/math-w9-core-practice-written-coverage-baseline-20261021/review-packets/math-w9-core-coverage/ONE_UPLOAD_NOTEBOOKLM_W9_18WRITTEN_3FAMILIES_NUMABS_R1_20261021.md). Contains source-exact 18 original Written cases for G7–9, four unapproved G6 NUM-ABS candidates, separate WX21-STA-001 grade-overlay disagreement, three historic low-density families and explicit primary-S1 review requests. **No NotebookLM verdict yet**, no live question/metadata import, no Grade9 publication permission.
- W8 Readiness Grade9 [Draft #565](https://github.com/TMA2015/roadmap-toan-thcs/pull/565) exact-head automated QA remains PASS from 2026-10-21. User has not granted Grade9 separate release, so **do not merge**. Grade6 production accepted desktop+iPad is unchanged.
- Source of truth: `main` for production and approved owner directions; Draft #566 for technical review packets and mutable QA tools. Next academic gate is a **single consolidated independent NotebookLM result**, followed by selective source-locked changes only when warranted and separately Owner-approved. Revisit knowledge-page layout after substantive Practice/Written coverage improvements.

- **W9 Written discovery correction (2026-10-22):** of the 74 canonical Written items, 26 lack a DIRECT Core workspace-card source link, but **all 26 have at least one existing `docs/kien-thuc/` topic page link** in `source_refs`. Breakdown: 16 standard + 10 anchor; levels 13 CORE_BASE, 4 CORE_APPLY, 6 ENTRANCE10, 3 CHALLENGE. Do not call these 26 missing/orphaned; grade/lesson discoverability is the remaining gap and link-target anchors still need QA. Preserve canonical IDs and old topic bookmarks.

## 8. Owner-confirmed NotebookLM sources and W9 S1 contradiction — 2026-10-22

**Owner's confirmed habitual workflow (screenshot provided in ChatGPT):** For independent Math academic reviews, Owner routinely **selects all eight KNTT textbook PDFs**: Grade6 two volumes, Grade7 two, Grade8 two, Grade9 two. The W9 NotebookLM screenshot shows **14 selected sources total**: permanent five Markdown project sources `01` through `05`, one W9 temporary packet, and all eight SGK PDFs. The website URL and Gemini chat source were **not** selected. **Do not instruct Owner to use "exactly 3 sources" or assume S1 textbooks are absent; read the actual checked source list.** Preserve all five permanent academic/architecture/contract sources where Owner uses them; do not arbitrarily deselect sources that are part of the review context. A review's exact count is based on the *current observed checked sources*, not a universal number.

**Actual W9 NotebookLM output supplied by Owner:** `MATH-W9-CONSOLIDATED-NOTEBOOKLM-ONE-UPLOAD-R1-20261021`, math PASS on 18/18 original Written, math PASS on 4/4 unapproved NUM-ABS candidate problems, `KNTT_PLACEMENT_VERIFIED_COUNT|0`, `KNTT_PLACEMENT_INSUFFICIENT_S1_COUNT|18`, `ACADEMIC_OVERALL|PASS`, `AUTHORIZATION|NO_LIVE_RELEASE`. The report incorrectly/ambiguously asserts no scanned original KNTT textbook S1 was provided, while Owner's screenshot clearly shows eight SGK PDFs selected. **Selected != proven successfully read/cited**, so do not overrule the source-placement hold or say textbook placement PASS. Request a narrowly targeted **S1-only placement/curriculum recheck** against those already-selected SGK PDFs, citing exact PDF title, grade, volume, page/lesson; if PDF cannot be read, explicitly report `S1_PDF_ACCESS_FAILED` or `INSUFFICIENT_S1` and explain why. Do not rerun all math verification or send the Owner to upload eight PDFs again unless the S1 files really are inaccessible.

**Other outputs:** `WX21-STA-001` has Grade8 overlay/Grade6 recorded placement discrepancy; NotebookLM states bar-chart work is Grade6 Core, but still needs source-cited S1 proof before metadata-only update. `RATIO-MODEL` Grade7 Core vs historical Entrance10 taxonomy requires distinct scope and S1-backed crosswalk; `QUAD-GRAPH` optional Entrance10. No live release permission, no re-ID, no edit to prior learner attempts.

**Owner collaboration:** One short, copy-ready targeted NotebookLM follow-up prompt only when needed, no giant boilerplate, keep study progress checkpoints durable and independent academic vs technical gates separate.

## 9. W9 independent S1 PASS and owner-gated implementation candidate — 2026-10-22

**Owner supplied the second independent NotebookLM S1-check report.** With 5 permanent project Markdown sources + all 8 KNTT SGK PDF volumes + one W9 temporary packet selected (14 selected sources), NotebookLM returned:
- `PACKET_ID|MATH-W9-CONSOLIDATED-NOTEBOOKLM-ONE-UPLOAD-R1-20261021`
- `MATH_PASS_WRITTEN_COUNT|18`, `KNTT_PLACEMENT_VERIFIED_COUNT|18`, `KNTT_PLACEMENT_INSUFFICIENT_S1_COUNT|0`
- 3 proposed Grade6 NUM-ABS MCQs and 1 Written PASS; `NUMABS_GRADE6_CURRICULUM_SCOPE|VERIFIED:G6_T1_ChIII_Bai13_Bai14`
- `WX21-STA-001` should have Grade6 ChIX Bài40 as canonical grade placement, Grade8 as potential refresher only.
- Ordinary Grade7 direct/inverse proportion modelling remains `KNTT-Core` (Bài22–23); optional Grade9 `QUAD-GRAPH` stays `Entrance10`, not Core.
- `ACADEMIC_OVERALL|PASS` **but `AUTHORIZATION|NO_LIVE_RELEASE`**.

**Provenance caution:** This is the **independent review result supplied by Owner**; this GitHub checkpoint has not independently opened the original 8 PDFs to replay page numbers. The exact item lesson/page claims and machine-readable verdict are stored in W9 review Draft [#566](https://github.com/TMA2015/roadmap-toan-thcs/pull/566) and separately in implementation Draft [#567](https://github.com/TMA2015/roadmap-toan-thcs/pull/567) as `review-packets/math-w9-core-coverage/02_NOTEBOOKLM_W9_S1_RECHECK_OWNER_RECEIPT_20261022.md`.

**W9 implementation Draft [#567](https://github.com/TMA2015/roadmap-toan-thcs/pull/567):** Owner-gated engineering candidate, not live. Planned coherent delta:
- add `kntt_placements` for the 18 S1-reviewed original Written IDs, preserve their math, solutions, rubrics and IDs;
- reconcile `WX21-STA-001` advisory Grade8 to Grade6 while retaining its recorded Grade6 Chapter9 placement;
- append `NUM02MICRO_065..067` to Grade6 integer/absolute-value card and add one fully worked `WX02-NUM-004` Written;
- Grade→Chapter→Lesson filters use genuine `kntt_placements`, NOT advisory `grade_overlay`; topic/skill and canonical deep links remain;
- preserve original 74 Written and 64 NUM02 source-math payloads, 237 topical Readiness and independent Grade6 mixed quiz results; `published_scope.exercise_count=74` plus a distinct **candidate-only** 75th Written with `NO_LIVE_RELEASE`.
- Candidate CI includes regression tests and desktop/phone/tablet-emulated browser cases; **check exact-head run before claiming PASS**, because some historical tests lock the previous whole-file source SHA/old zero placements and require explicit baseline reconstruction rather than weakening protection.
- **DO NOT merge or publish Draft #567 until Owner authorizes one coherent W9 release**, production candidate scope promoted deliberately, and final exact-head CI/physical device review completed. Grade9 Readiness Draft #565 remains a separate release decision.

**Collaboration rule:** Owner prefers big coherent waves, not many tiny prompts and `tiếp tục` loops; checkpoint update is a durability measure, not an invitation for repeated manual supervision.
