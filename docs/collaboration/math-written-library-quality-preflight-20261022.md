# Self-Learning Math — Written Exercise Library Quality Preflight R0

**Date:** 2026-10-22  
**Scope:** QA-only / documentary; **no learner-facing content, runtime, IDs, progress, Readiness or history changes**  
**Repository baseline:** `main` at read time; canonical JSON file `docs/assets/data/written-exercises/written-exercise-library-v1.json`, exact Git blob SHA `5141a40bf1b8f8763257857d3b805d681a0956fa`  
**Catalog metadata:** `snapshot_date=2026-10-21`, `status=ACTIVE_APPEND_ONLY`, `published_scope.exercise_count=75`  
**Owner UX acceptance (conversation, not a technical device-test receipt):** 2026-10-22, new filters working on desktop and iPad.

## 1. Purpose and authority boundaries

This is an initial **structural/data audit and 8-item pilot selection**, not an exhaustive mathematical verification, a curriculum placement approval, an independent NotebookLM verdict or deployment authorization. Preserve one canonical Written Exercise Library, one item identity per exercise, two discovery paths (KNTT and topic), and separation of written self-check from independently verified Core Readiness.

Standards: `governance/TOAN_THCS_MASTER_PLAN.md` v1.2.1, Written Exercise Library Contract v1, Golden Learning Architecture, NotebookLM Math Review Rules v1.2, Academic Source and Depth Audit Rules (D1–D6).

## 2. Reproducible structural baseline

| Check | Observed |
|---|---:|
| Catalog records | **75** |
| Distinct `exercise_id` | **75** |
| `exercise_kind=standard` | **54** |
| `exercise_kind=anchor` | **21** |
| Topic IDs represented | **22** (CT02–CT21 except CT22, plus CT23–CT24; not a curriculum gap finding for CT22/CT25) |
| `CORE_BASE` | 34 |
| `CORE_APPLY` | 30 |
| `ENTRANCE10` | 8 |
| `CHALLENGE` | 3 |
| Exercises with verified `kntt_placements` | **27** |
| Exercises without `kntt_placements` | **48** |
| CORE_BASE/CORE_APPLY without `kntt_placements` | **37** |
| Grade 6/7/8/9 canonical KNTT placements (distinct exercises) | **9 / 6 / 6 / 6** |
| Grade overlays 6/7/8/9 (advisory only; may overlap) | **10 / 14 / 30 / 29** |
| `solution_steps` present | 64 |
| `full_solution_markdown` present | 22 |
| At least one of the two solution representations | **75/75** |
| Progressive `hint_steps` present | **22** |
| `method_rationale_markdown` present | **22** |
| `common_mistakes` nonempty | **75** |
| Remediation link or `remediation_markdown` present | **75** |
| Nonempty `rubric`, with points summing to `rubric_total` | **75/75** |
| Figures declared | **2** (WX14-TRI-001 and WX14-TRI-002, both with alt text) |
| Explicit `written_role` set | **5** |
| `academic_review.status=APPROVED` **metadata** | **75** |
| Empty problems, duplicate IDs, missing full solutions, missing mistakes/remediation, invalid rubric totals or unalted referenced figures found by this structural check | **0** |

Caveats:
- 75 distinct `problem_type_id` values are **not proof** of 75 structurally diverse mathematical types; semantic clone audit remains to do.
- `grade_overlay` is advisory, **not permission** to populate the classroom filter. The UI expressly reads only academically reviewed `kntt_placements`.
- No KNTT placement may be invented from the presence of lower-grade prerequisite skills; some unplaced records are intentionally topic-first or Entrance10/Challenge.
- `academic_review.status=APPROVED` records the catalog's declared state; the source-pinned receipts, individual mathematics and current curriculum positions have **not** been reverified item-by-item in this preflight.
- No source-ref target, image rendering, on-device post-release behavior or time estimate has been exhaustively tested here.

## 3. Findings and triage (no automatic content edits)

**P1 / curriculum discovery audit, not a confirmed defect.** 48/75 exercises have no approved `kntt_placements`, including 37 CORE_BASE/CORE_APPLY. Before promoting any item into a school class/chapter/lesson search, match the actual exercise objective against authoritative KNTT S1 evidence. Record VERIFIED, TOPIC_ONLY, OUT_OF_CORE, or INSUFFICIENT_SOURCE per item. Do not bulk-fill from `grade_overlay`, prerequisites or the exam corpus.

**P1 / source corpus dependency.** User previously supplied Grade 6–9 semester papers; the exact original ZIP payloads are not verified or accessible in this specific audit workspace. Do **not** claim exam prevalence or create question-by-question matches until source inventory, provenance and deduplication are re-established. Separate official school tests, third-party prepared semester papers, mock papers, specialist exams and compiled reference materials; report denominators per corpus.

**P2 / learning experience.** The current site can expose progressive hints for 22 items; other items generally expose solution steps in a single "Hướng dẫn" disclosure. Selectively check whether a first hint, why-method explanation or follow-up remediation would improve a genuine reasoning bottleneck. Avoid universal hint quotas. Preserve paper-first use and rubric as self-report only.

**P2 / content representation.** Two exercises include linked geometry SVG figures. Audit whether other diagram-reliant items need a verified orientation diagram; do not infer geometric facts from any drawing. Figure count alone is not a defect.

**P2 / role metadata consistency.** Only 5 exercises explicitly declare `written_role`; the remainder are navigable through `exercise_kind` and `level`. Evaluate normalization against canonical role vocabulary before any mass tagging; no write in this round.

## 4. Eight-source-locked pilot candidates (exact existing IDs)

Each candidate is an **existing** catalog record. Grade/semester labels below are provisional planning context based on catalog KNTT positions; **confirm semester using current KNTT S1 references before an exam-coverage assertion**.

| Grade | Candidate `exercise_id` | Context / kind | Why chosen for D4 self-learning review |
|---|---|---|---|
| 6 | `WX02-NUM-001` | CT02, chapter 2, standard | Explain why divide into the greatest number of identical gifts via GCD; argument before arithmetic |
| 6 | `WX02-NUM-003` | CT02, chapter 6, anchor | Distinguish finding a whole from a known fractional part vs. finding a part from a known whole; three hints, alternative check |
| 7 | `WX13-LIN-001` | CT13, chapter 3, standard | Explain converse parallel-line criterion and avoid proof-from-picture |
| 7 | `WX03-RAT-002` | CT03, chapter 6, standard | State equal productivity / fixed-work assumptions for inverse proportion; verify product |
| 8 | `WX16-QUAD-001` | CT16, chapter 3, standard | Prove parallelogram first, then rectangle; prevent invalid direct conclusion |
| 8 | `WX07-RAT-001` | CT07, chapter 6, standard | Retain original rational-expression domain after cancellation |
| 9 | `WX09-SYS-003` | CT09, chapter 1, anchor | Build equations from tickets and revenue, solve, verify units and integer context; 3-step hints |
| 9 | `WX19-CIR-002` | CT19, chapter 9, standard | Prove cyclic quadrilateral via supplementary opposite angles, then calculate a second angle |

**Preliminary content spot-check, not independent PASS:** sample arithmetic and geometric steps in these eight entries appear internally consistent (G6 12 gifts / 120 books / 18 short; G7 alternate interior angles equal and 10 days; G8 rectangle chain and `x != 0,3`; G9 24 adult + 16 student tickets, and 62-degree opposite angle). Independently check original sources, curriculum scope, exact wording, rubric and diagrams before authoring a replacement.

### Pilot review checklist per item

1. Lock exact `exercise_id`, source catalog blob, current problem, solution, rubric and `source_refs`; reconcile 8 expected IDs = 8 returned verdicts.
2. Verify S1 KNTT skill/objective, correct grade/chapter/lesson and **semester**; no forced mapping if evidence is weak.
3. D4: is the reasoning path explicit, logically necessary, mathematically sound and adequately worked?
4. D6: is the help selective, non-spoiling and usable without AI; are typical errors and remediation specific?
5. D2/D3: compare against nearby worked example and interactive Practice to avoid simple duplicate-number cloning.
6. D5: if a matching authenticated exam question exists, record exact provenance; otherwise `INSUFFICIENT_SOURCE` rather than an exam-frequency claim.
7. Owner QA: try paper-first workflow on desktop/iPad; no typed proof requirement or automatic self-scored mastery.
8. NotebookLM item-level independent verdict `PASS | REVISE | INSUFFICIENT_EVIDENCE | NOT_REVIEWED`; then reconcile and seek separate owner authorization before any content change.

## 5. Corpus and follow-on gates

Before cross-referencing the old semester-exam pack, recover the actual files or a verified manifest. Prior chat described a corpus of 80 distinct documents / 2,051 pages, but **those figures have not been independently reproduced in this round**. Set corpus status **PENDING_SOURCE_RECONCILIATION**, not PASS. A valid inventory should include source filename/hash, grade, school/organization, year, semester, official/prepared/mock label, answer-key status, provenance confidence, and duplicate group.

No production exercises, KNTT placements, UI code, historical data or Readiness semantics are modified by this report. Next change must be a separately reviewed, source-locked minimal content delta.
