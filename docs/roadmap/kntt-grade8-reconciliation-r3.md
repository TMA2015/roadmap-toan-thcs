# KNTT Grade 8 — Reconciliation R3

**Date:** 2026-10-04  
**State:** RECONCILED · NO NEW TAXONOMY IDENTITY · NO RUNTIME CHANGE

## 1. Final result

Grade 8 currently has **3 exact-ID mismatches**. All three can be semantically closed without creating or renaming a canonical skill/family:

- **2 CANONICAL_FAMILY**
- **1 LESSON_LOCAL**
- **0 new canonical skills**
- **0 new canonical families**
- **0 remaining review cases**
- **0 remaining gap candidates**

## 2. Decisions

| Historical ref | Final resolution | Target / role |
|---|---|---|
| `bieu-thuc-nhieu-phep-tinh` | LESSON_LOCAL | `COMPOSITE_TASK` |
| `ket-qua-co-the` | CANONICAL_FAMILY | `PROB-EVENT` |
| `ket-qua-thuan-loi` | CANONICAL_FAMILY | `PROB-EVENT` |

### `bieu-thuc-nhieu-phep-tinh`

Current reviewed Taxonomy v2 already records this exact legacy ID as:
- role `COMPOSITE_TASK`;
- `family_id: null`;
- `canonical_candidate: null`;
- note: composite rational-expression task, not a standalone family.

Therefore it should remain a composite problem type rather than become a mastery counter.

### `ket-qua-co-the` and `ket-qua-thuan-loi`

Current Topic23 Grade-8 Bài 30 learner card is **Phép thử và kết quả thuận lợi** and uses canonical skills:
- `phep-thu-ngau-nhien`
- `bien-co`

Possible/favorable outcomes are vocabulary and event-structure concepts inside this family. Creating separate global counters would duplicate the existing event model.

## 3. Why no new NotebookLM packet is required

R3 introduces **no new taxonomy identity or Core promotion**.

The decisions are already constrained by:
- reviewed Grade-8 KNTT mapping;
- current reviewed Taxonomy v2 semantics;
- current Topic07/Topic23 Learning Workspaces.

Therefore there is no unresolved identity/granularity decision to send back for independent review.

## 4. Protected boundaries

R3 does not:
- change learner-facing UI;
- create/rename a canonical skill or family;
- activate Taxonomy v2 runtime;
- change learner history;
- backfill/regrade attempts;
- change Mastery/Readiness semantics.

## 5. Next step

After CI/merge, proceed to **Grade 9 reconciliation R4**, the final grade pass in Coverage Matrix 6–9.
