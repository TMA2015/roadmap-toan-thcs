# Skill Taxonomy Phase C — canonical registry and migration-free compatibility design

**State:** `READ_ONLY / DESIGN_ONLY / RUNTIME_DISABLED`  
**Academic basis:** Phase A PASS (39/39 items, 9/9 clone families) + Phase B PASS (52/52 codes, 55/55 occurrences, 0 revisions).

## Purpose

Phase C does **not** introduce new academic classifications. It only encodes already-reviewed Phase B decisions into a stable canonical registry and an explicit compatibility contract for a future evidence pilot.

## Files

- `docs/assets/data/curriculum/canonical-skill-registry-04-07-v1.json`
- `docs/assets/data/curriculum/skill-taxonomy-compatibility-04-07-v1.json`
- `scripts/test-skill-taxonomy-phase-c-registry.js`

## Core design decisions

1. The 52 reviewed legacy codes remain immutable in current question banks.
2. The canonical registry has 53 nodes: the 52 reviewed semantic nodes plus the newly approved `phan-tich-da-thuc-hoan-toan` candidate.
3. Phase B learner-counter status is preserved:
   - legacy codes: 38 YES / 7 NO / 7 PENDING;
   - including the new output candidate: 38 YES / 7 NO / 8 PENDING.
4. `dieu-kien-xac-dinh`, `hieu-hai-binh-phuong`, and `binh-phuong-hoan-chinh` each use one canonical concept across their two topics while retaining topic-specific task-demand metadata.
5. NO nodes remain useful metadata but never become direct mastery counters.
6. PENDING nodes do not appear as mastered counters.
7. `phan-tich-da-thuc-hoan-toan` applies only to FAC06V1_077–092 and remains formative/pending until stepwise evidence exists.

## Compatibility policy

- Legacy store: `toan-thcs-practice-v1` remains untouched.
- Future canonical evidence store: `toan-thcs-assessment-v2`.
- No backfill, no rewrite, no synthetic historical v2 events.
- No dual-write is enabled in this phase.
- Future evidence events use one assessed canonical skill per event. Supporting skills, methods, categories and contexts stay metadata.
- Clone families may later de-duplicate independent mastery evidence; they do not remove practice questions.
- Correct MCQ answer is evidence, not mastery. No mastery threshold exists in Phase C.

## Why runtime is still blocked

Code-level semantics are now reviewed, but **full question-level primary mapping is not yet complete** for the CĐ04–07 banks. Runtime activation before that mapping would recreate the exact ambiguity this taxonomy work is intended to remove.

## Next gate — Phase D

Build source-locked primary/evidence overlays at question level, topic by topic, starting with CĐ04. The overlay must:
- assign at most one assessed canonical skill to a question;
- keep method/context/category/support tags as metadata;
- record observable evidence class and clone family;
- leave ambiguous/composite/PENDING items formative-only;
- preserve all current question IDs, content, answers and legacy tags.

Only after a bounded topic overlay is independently reviewed and browser/data QA passes may an opt-in assessment-v2 pilot be considered. No global migration is authorized.
