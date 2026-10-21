# Independent NotebookLM batch verdict receipt — 21 Readiness topics + G6 pilot

**Reviewed report:** Owner-pasted `Văn bản đã dán (1)(20261021-055934).txt`, supplied 2026-10-21. The original owner upload in Math App chat is the full report; this is a *faithful bounded summary*, **not** a claim that NotebookLM was accessed by connected tools.  
**Reviewer batch ID:** `MATH-TEMP-SOURCES-BULK-ACADEMIC-R0-20261021`.  
**Reference sources:** `TEMP_READINESS_21_TOPIC_FULL_BANK_ACADEMIC_AUDIT_20261021` and `TEMP_CLASS_G6_MIXED_10_CORE_SOURCE_REVIEW_20261021` (the original report cites `.txt` uploads; repository source snapshots are `.md` with same item source IDs/content).  
**Release gate:** `AUTHORIZATION|NO_LIVE_RELEASE`. User's earlier authorization to *build* a class composite does not override the prohibition on automatically merging a new student quiz and changing independent assessment credits.

## Machine verdict — Readiness source

```text
PACKET_ID|MATH-READINESS-21-TOPIC-BULK-ACADEMIC-R0-20261021
EXPECTED_TOPICS=21
REVIEWED_TOPICS=21
TOTAL_ITEMS=237
DEFECTIVE_ITEMS=GEO17READY_001,GEO17READY_002,GEO17READY_004,GEO17READY_006
BATCH_REVISE_TOPICS=17-thales-dong-dang
BATCH_EXPAND_TOPICS=23-xac-suat
KEEP_QUALITY_SCREEN_TOPICS=02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,18,19,20,21
PAPER_ONLY_TOPICS=01,22,24,25
OVERALL|PASS_WITH_BATCH_REVISIONS
AUTHORIZATION|NO_LIVE_RELEASE
```

**Reconciled counts:** 19 KEEP_QUALITY_SCREEN, 1 BATCH_REVISE (CT17), 1 BATCH_EXPAND (CT23), 21 reviewed / 237 source items; 4 additional paper-style topic checks outside total. Review explicitly accepts compact checks as *quick screens*, **not reliable mastery certificates** for each of the 5–14 skills across mixed grades.

### CT17 defect remediation status — ALREADY PUBLISHED before receipt

- [Merged #556](https://github.com/TMA2015/roadmap-toan-thcs/pull/556) fixed four question **stems and explanations** without modifying keys, skill tags, IDs, rubric, history, Readiness threshold or 10-item count. Owner had said confirmed mathematical errors should be fixed immediately.
- `GEO17READY_001` and `_002` needed explicit triangle/point incidence for Thales statements.
- `GEO17READY_004` needed a point D on BC and internal angle bisector condition, **not** an E on AC.
- `GEO17READY_006` needed to identify *two triangles with two pairs of corresponding equal angles* for g-g similarity, **not** Thales D/E incidence. The reviewer table's grouping phrase "all four missing D∈AB,E∈AC" is an overgeneralization; preserve per-item mathematical distinction.
- Merge commit `43ab2cc368fcfcc26fe1978ed969b2af7f2949a9`, CI PASS and GitHub Pages published blob equality verified; do not create duplicate replacements or retroactively rescore historic attempts.

### CT23 probability expansion — REVIEW CONSTRAINTS

- Reviewer recommends `BATCH_EXPAND` to 8–10 skill categories, including probability trees, complementary "at least one" and drawing without replacement. This is a **recommendation for an integrated academic-depth batch**, not permission to add new skills or 1–2 ad hoc MCQs.
- Current topic Core has a *cross-grade* curriculum: Grade 6 experimental probability; Grade 7 event/classical probability; Grade 8 random trials/classical + empirical; Grade 9 distinct Core cards `prob23-core-g9-6` (sample spaces and tree) and `prob23-core-g9-7` (multi-step probability / without replacement). **Any proposed new CT23 assessment item must carry its exact grade-9 lesson / approved skill family; never misrepresent it as Grade 6 Core merely because one topical assessment bank includes Grade 6 prompts.**
- Before authoring: check whether all of the recommended constructs already appear in CT23 Core Micro, topical Practice or grade9 Core content. Distinguish a new *Readiness check slot* from a new canonical skill ID. Use an exact-grade S1 ledger; do not promise every related cognitive target is compulsory KNTT Core without evidence.
- Existing 12 CT23 Readiness item IDs, answer keys, historical attempts and 80% soft readiness behavior immutable unless a separately reviewed and Owner-approved new version / score migration is designed.

## Machine verdict — G6 initial mixed Core 10

```text
PACKET_ID|MATH-CLASS-G6-MIXED-CORE-10SOURCE-R0-20261021
EXPECTED_ITEMS=10
REVIEWED_ITEMS=10
NUM02MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
NUM02MICRO_002|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
NUM02MICRO_003|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_2|VERDICT:PASS
RAT03MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
GEO13MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
GEO13MICRO_002|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
GEO20MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
STA21MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_2|VERDICT:PASS
STA21MICRO_004|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_2|VERDICT:PASS
PRO23MICRO_001|MATH:PASS|S1_LAYER:KNTT-G6-Core|DIFFICULTY:LEVEL_1|VERDICT:PASS
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS_FOR_FORMATIVE_G6_PILOT
AUTHORIZATION|NO_LIVE_RELEASE
```

**Composition accepted mathematically, but not as an exam:** Reviewer describes seven Level-1 and three Level-2 questions; suggested target for *future eligible larger selection* is 40% recognition, 40% comprehension, 20% low application, **when enough independently reviewed Grade6-appropriate source is available**. No Level-3 item is included in the ten approved original pilot IDs. Do not relabel a Level-1 question as application or introduce a higher-grade question to make 4:4:2 quotas.

**Additional read-only source difficulty audit (post-review, not NotebookLM judgment):** all **81** structurally eligible G6 linked Core Micro items in the six pilot topics carry grade/difficulty metadata counts: **43 basic, 37 intermediate, 1 advanced**. The only tagged advanced item is `PRO23MICRO_003`. These metadata labels have NOT been independently validated as 40/40/20 assessment evidence; a ten-question composition with two independently defensible low-application questions cannot be guaranteed by a naive metadata-only selector. Future 40/40/20 blueprint may require academic reclassification of real task depth or authoring an additional, cross-topic G6 application item; never mark a basic task as advanced to satisfy a quota.

**Next authoring gates:** design Grade6 chapter selection and review additional application candidates for 4:4:2 *before* treating the session as a dependable multi-topic diagnostic. Preserving these 10 approved IDs as one initial formative QA cohort is acceptable; repeating them as "new independent tests" would be misleading. Put user-friendly label `Ôn tập tổng hợp · lớp 6` and no Readiness/Skill/Mastery automatic credit, independent versioned progress records only with explicit UX acceptance.

## Release and ownership boundaries

- No new Written canonical exercises, no new MCQs/Readiness IDs/skills, no automatic scores migrated; the 74 existing canonical Written stays unchanged.
- Academic review is accepted as evidence, **not deployment authorization**. Keep candidate class-composite and CT23 expansion in Draft until exact-head CI, owner preview QA and separate explicit release approval.
- Distinguish *paper-only* CĐ01/22/24/25 from the 21 interactive assessments; no pressure to convert just to meet artificial quotas.
- NotebookLM packet rules: 1–2 files each link + a short prompt in the same chat; ≥3 source files use one ZIP; no JSON uploads; temporary file basenames start `TEMP_`.
