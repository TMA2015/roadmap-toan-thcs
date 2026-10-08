# KNTT Dimension Coverage Audit — Grade 7 v1

**Date:** 2026-10-08  
**State:** EXISTING-EVIDENCE INVENTORY R1 · NO CONTENT / WRITTEN / READINESS MUTATION
**Architecture:** One Knowledge Graph · Two Learning Paths

## 1. Purpose

Scale the Grade-6 six-dimension audit method to the **21 semantically reconciled Grade-7 KNTT rows**. This baseline deliberately separates semantic mapping from learner evidence: a skill/family match does not by itself prove Learn, Micro, Practice, Written or Readiness coverage.

Grade-7 semantic reconciliation is already independently reviewed and closed at `RECONCILED_REVIEWED_R2`, clearance `G7_R2_RECONCILIATION_REVIEW_COMPLETE`.

## 2. Current evidence inventory

| Dimension | Current result |
|---|---|
| SKILL_MAP | 21/21 `VERIFIED_SEMANTIC` |
| LEARN_CONTENT | 14 VERIFIED_DIRECT; 4 PARTIAL_SHARED_SKILL; 1 PARTIAL_LESSON_LOCAL; 2 PARTIAL_FAMILY_EVIDENCE |
| MICRO_PRACTICE | 14 VERIFIED_DIRECT; 4 PARTIAL_DIRECT; 3 NONE_G7_EXPLICIT |
| PRACTICE_BANK | 15 TOPIC_SKILL_EVIDENCE; 4 PARTIAL_TOPIC_EVIDENCE; 2 PARTIAL_FAMILY_EVIDENCE |
| WRITTEN_LIBRARY | 21 `NONE`; 0 true Grade-7 KNTT placements |
| READINESS | 4 PARTIAL_G7_STRUCTURED; 15 NOT_VERIFIED_STRUCTURED; 2 NONE |

This inventory changes **no learner content**. It only classifies existing evidence under the reviewed Grade-7 semantic reconciliation.

### Priority candidates from evidence inventory

- **P0:** Bài 1–3; Bài 5–7; Bài 26–28.
- **P1:** Bài 4; Bài 18–19; Bài 22–23.
- **P2:** Bài 8; Bài 24–25.
- All other rows have no repair priority from this inventory.

Priority labels are audit candidates only; they are **not** authoring authorization.

## 3. Audit rules

- Reuse the reviewed Grade-7 semantic reconciliation; do not reopen taxonomy decisions without new evidence.
- Treat canonical-family and lesson-local mappings as valid curriculum semantics, not missing skills.
- Topic-level Practice evidence must not be promoted automatically to exact lesson coverage.
- Written coverage requires a true `kntt_placement`, not prerequisite/skill overlap.
- `NOT_VERIFIED_STRUCTURED` Readiness is an evidence state, not a mandate to create a test for every lesson.
- Repair only real high-value gaps after evidence classification; do not expand by quota.

## 4. Grade-7 evidence table

| Chapter | Lesson | Learn | Micro | Practice | Written | Readiness | Priority |
|---:|---|---|---|---|---|---|---|
| 1 | Bài 1-3 | PARTIAL_SHARED_SKILL | NONE_G7_EXPLICIT | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P0 |
| 1 | Bài 4 | PARTIAL_LESSON_LOCAL | NONE_G7_EXPLICIT | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P1 |
| 2 | Bài 5-7 | PARTIAL_SHARED_SKILL | NONE_G7_EXPLICIT | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P0 |
| 3 | Bài 8 | VERIFIED_DIRECT | PARTIAL_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P2 |
| 3 | Bài 9-10 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 3 | Bài 11 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 4 | Bài 12 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 4 | Bài 13-15 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 4 | Bài 16 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 5 | Bài 17 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | PARTIAL_G7_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 5 | Bài 18-19 | PARTIAL_FAMILY_EVIDENCE | PARTIAL_DIRECT | PARTIAL_FAMILY_EVIDENCE | NONE | PARTIAL_G7_STRUCTURED | P1 |
| 6 | Bài 20-21 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NONE | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 6 | Bài 22-23 | PARTIAL_SHARED_SKILL | PARTIAL_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NONE | P1 |
| 7 | Bài 24-25 | PARTIAL_FAMILY_EVIDENCE | VERIFIED_DIRECT | PARTIAL_FAMILY_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P2 |
| 7 | Bài 26-28 | PARTIAL_SHARED_SKILL | PARTIAL_DIRECT | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | P0 |
| 8 | Bài 29 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | PARTIAL_G7_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 8 | Bài 30 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | PARTIAL_G7_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 9 | Bài 31-33 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 9 | Bài 34-35 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 10 | Bài 36 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |
| 10 | Bài 37 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED | NO_REPAIR_PRIORITY_FROM_INVENTORY |

## 5. Next phase

The 21 rows are now classified. The next governance step is to review the **P0/P1 repair priority** before authoring anything. In particular, the strongest current evidence gaps are:

1. **Bài 1–3:** missing reviewed canonical `phep-tinh-so-huu-ti` in Grade-7 Learn/Micro/Practice.
2. **Bài 5–7:** missing explicit Grade-7 `so-vo-ti` and `can-bac-hai-so-hoc` learning/micro evidence.
3. **Bài 26–28:** reviewed canonical `chia-da-thuc-mot-bien` is absent from Learn/Micro/Practice.
4. **Bài 4, Bài 18–19, Bài 22–23:** smaller lesson-local/family/application gaps.
5. **Written:** no Grade-7 canonical Written item currently has a true KNTT placement; do not infer that all 21 rows need a new Written item.

A separate independent prioritization/review packet should decide which P0/P1 gaps deserve repair first.
