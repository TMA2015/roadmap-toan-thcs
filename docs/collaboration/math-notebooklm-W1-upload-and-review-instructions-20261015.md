# NotebookLM academic review — upload guide and reviewer prompt (W1)

**Packet ID:** `MATH-EXERCISE-RECLASSIFY-W1-20261015`  
**Project:** Self-Learning Math · **Scope:** 19 representative legacy items, four topics (CT02, CT03, CT04, CT21).  
**Status:** `READY_FOR_INDEPENDENT_REVIEW`, **not** academic PASS; no grader, learner history or legacy visibility changes are authorized.

## 1. Sources to use in NotebookLM

### Permanent baseline (keep selected)
Use the newest and only active copies of these durable project sources:

- `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`.
- `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md`.
- `03_GOLDEN_TEMPLATE_AND_LEARNING_ARCHITECTURE.md`.
- `04_ACADEMIC_SOURCE_AND_DEPTH_AUDIT_RULES.md`.
- `05_WRITTEN_EXERCISE_LIBRARY_CONTRACT_v1.md`.

**Master Plan is v1.2.1** for this review. Deselect/remove obsolete Master Plans and temporary packets from previous review rounds. Reviewer is independent; final approval remains with the owner.

### Temporary sources (replace previous batch sources)
Upload **four** repository review artifacts as separate Markdown/text documents:

1. `docs/collaboration/math-exercise-conversion-academic-packet-W1-20261014.md` — original W1 tasks and item-by-item question list.
2. `review-packets/math-exercise-w1-20261015/math-w1-notebooklm-verbatim-four-topic-source-20261015.md` — **full verbatim** CĐ02/03/04/21 authored pages, with source Git blob SHAs.
3. `review-packets/math-exercise-w1-20261015/math-w1-notebooklm-existing-bank-source-extract-20261015.md` — **134 existing Micro formative items**, including correct options and explanations for reviewer comparison, plus **10 topic-matched approved/recorded WX** shared Written entries.
4. `docs/collaboration/math-four-topic-legacy-complete-inventory-r1.json` — all **75 distinct paper exercise IDs**, with 19 W1 and 56 not yet triaged (JSON may alternatively be read from the source list below if NotebookLM rejects JSON).

**Critical outside evidence:** S1 official curriculum / official KNTT textbooks or source extracts, *with edition and exact class/chapter/lesson*, are required to approve any **new KNTT-Core grade placement**. The project-written source and Micro `curriculum.grades` metadata are **not** substitutes for S1. If S1 is not attached, mark grade placement `INSUFFICIENT_EVIDENCE`; do **not** grant an overall academic content PASS on unsupported placements.

The two large source/extract documents are kept under `review-packets/` **outside the learner MkDocs site** to avoid accidental publishing of reviewer-only answer comparisons or treating original relative links as live navigation. All four temporary documents are **audit-only snapshots/extracts**. Do not import them as new learner banks. No authentic-exam frequency claims are requested in this W1.

## 2. Exact 19 W1 IDs

1. `02-G6-WR-01` — CT02; candidate: `ADAPT_INTERACTIVE`; proposed format: `numeric`
2. `02-G6-WR-02` — CT02; candidate: `REVIEW_REUSE_FAMILY`; proposed format: `numeric`; Micro comparison: `NUM02MICRO_006` (SIMILAR_FAMILY_NOT_DUPLICATE)
3. `02-G6-WR-03` — CT02; candidate: `ADAPT_INTERACTIVE`; proposed format: `rational`
4. `02-G6-WR-04` — CT02; candidate: `ADAPT_INTERACTIVE`; proposed format: `numeric`
5. `02-M2-03` — CT02; candidate: `ADAPT_INTERACTIVE`; proposed format: `order_steps`
6. `03-M1-01` — CT03; candidate: `ADAPT_INTERACTIVE`; proposed format: `structured_relation`
7. `03-M1-02` — CT03; candidate: `REVIEW_REUSE_FAMILY`; proposed format: `rational`; Micro comparison: `RAT03MICRO_005` (SIMILAR_FAMILY_NOT_DUPLICATE)
8. `03-M3-01` — CT03; candidate: `ADAPT_INTERACTIVE`; proposed format: `numeric_with_unit`
9. `03-M4-01` — CT03; candidate: `ADAPT_INTERACTIVE`; proposed format: `fill_multiple`
10. `04-WR-01` — CT04; candidate: `ADAPT_INTERACTIVE`; proposed format: `fill_multiple`
11. `04-WR-02` — CT04; candidate: `REUSE_CANDIDATE`; proposed format: `single_choice`; Micro comparison: `ALG04MICRO_005` (EXACT_TASK_MATCH_SOURCE_CONFIRMED)
12. `04-WR-03` — CT04; candidate: `ADAPT_INTERACTIVE`; proposed format: `fill_multiple`
13. `04-CH-01` — CT04; candidate: `KEEP_PAPER_WRITTEN`; proposed format: `paper_proof`
14. `21-WR-01` — CT21; candidate: `ADAPT_INTERACTIVE`; proposed format: `match_pairs`
15. `21-WR-02` — CT21; candidate: `REVIEW_REUSE_FAMILY`; proposed format: `numeric`; Micro comparison: `STA21MICRO_004` (SIMILAR_FAMILY_NOT_DUPLICATE)
16. `21-M1-01` — CT21; candidate: `ADAPT_INTERACTIVE`; proposed format: `single_choice_or_fill`
17. `21-M2-01` — CT21; candidate: `ADAPT_INTERACTIVE`; proposed format: `structured_table_or_paper`
18. `21-M3-01` — CT21; candidate: `REVIEW_SCOPE`; proposed format: `structured_table_or_paper`
19. `21-M4-01` — CT21; candidate: `REVIEW_SCOPE`; proposed format: `structured_table_or_paper`

The additional **56 distinct items are out of scope for detailed W1 conversion verdicts**, but remain protected from deletion by the 75-item inventory. Some headings reappear in worked solutions; count distinct `source_id`, not repeated headings.

## 3. Prompt to paste into NotebookLM

> Act as an independent academic mathematics reviewer for Self-Learning Math. Review packet `MATH-EXERCISE-RECLASSIFY-W1-20261015` using only the provided permanent rules, source-locked site pages, published formative Micro/Written reference extracts and attached S1 curriculum evidence.
>
> Do NOT infer KNTT grade placement from a topic number, an existing item's tag, an Entrance10 label, a URL, or the educational progression alone. Use S1 for grade/chapter/lesson placement. Treat the old page as the **authored source**, not official curriculum authority. If evidence is missing, report `INSUFFICIENT_EVIDENCE`.
>
> For **each of the 19 W1 IDs** listed in the upload guide, produce a separate record: `source_id`; exact source question and quoted location; required mathematical reasoning; candidate activity (Core micro, topic Practice, independent check or paper Written); true grade and KNTT lesson *with source citation or unknown*; existing bank candidate `item_id` and `EXACT_MATCH / SAME_FAMILY / NO_MATCH / NOT_REVIEWED`; `REUSE_EXISTING / ADAPT_INTERACTIVE / KEEP_PAPER_WRITTEN / MOVE_TO_INDEPENDENT_CHECK / BLOCK`; appropriate response format (free numeric, exact fraction, multiple blanks, matching, ordering, choice, or paper); mathematically valid answer domain, input equivalences, units/tolerance and rejected forms; written-solution requirement; common misconception and feedback; whether a new immutable ID/version is required; confidence and citations.
>
> **Review anti-duplication:** Check the original 19 questions against all 134 source-provided Micro questions and 10 matching canonical WX exercises. A problem with different numbers in the same family is **not** an exact duplicate. If a whole-bank judgment is impossible from the sources, state the limitation. `04-WR-02` vs `ALG04MICRO_005` is a source-level exact-task candidate requiring your independent confirmation.
>
> **Review answerability:** For each proposed rich interaction, decide whether machine-deterministic grading can establish the stated objective. A correct numerical answer alone must NOT be treated as proof of method, model construction or explanation. If not reliably machine-gradable, prefer `PAPER_WRITTEN` with an explicit multi-step rubric. For numeric/fraction inputs, define normalization, precise accepted equivalents (e.g. 1/2 = 2/4 = 0,5 only when source policy allows), zero-denominator handling, formatting ambiguity, and units.
>
> Distinguish **practice** (feedback and hints allowed) from **readiness/mixed assessment** (no hint/AI/answer before submission, separate scoring/history/grade-scoped blueprint). Do NOT approve transplanting existing formative Micro keys into any independent assessment without another gate.
>
> Return a **19-row item-by-item table** with `PASS / REVISE / INSUFFICIENT_EVIDENCE / NOT_REVIEWED` per item, followed by an independent packet verdict `ACADEMIC_ITEMS_PASS / REVISIONS_REQUIRED / INSUFFICIENT_EVIDENCE`. Include exact source citations and a separate owner-decision list. Never invent missing academic receipts or claim that user-facing legacy paper blocks may already be removed. Report any discrepancy between actual source problem and prior candidate packet.

## 4. What is NOT approved by a favorable review alone

- Publishing generated numeric/fraction graders without verified deterministic tests and owner UX acceptance.
- Turning paper proof/model tasks into "four choices" just to raise interaction rate.
- Changing existing `item_id`, historical learner attempts or grades in place.
- Removing historical source sections before **75/75** items have approved canonical destinations and verified deep links.
- Declaring a 19/19 packet pass equivalent to full four-topic or Grade 6–9 academic coverage.
- Adding Grade 6–9 composite quizzes or changing existing Core Readiness selection/scoring rules without a separately approved assessment blueprint.

## 5. Return receipt and follow-up

Save the independent item-by-item review receipt with packet ID, source SHA list, explicit verdict and all citations. Return it in the Math project conversation or attach it to the project review folder. Reconcile each decision to the original item ID and the protected 75-item inventory. Publish only a reviewed, versioned release candidate after owner approval and targeted tests.

**Source URLs** (public repo; use GitHub file download or copy the Markdown file contents into NotebookLM):

- https://github.com/TMA2015/roadmap-toan-thcs/blob/main/docs/collaboration/math-exercise-conversion-academic-packet-W1-20261014.md
- https://github.com/TMA2015/roadmap-toan-thcs/tree/main/review-packets/math-exercise-w1-20261015
