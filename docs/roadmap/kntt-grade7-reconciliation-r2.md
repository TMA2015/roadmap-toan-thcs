# KNTT Grade 7 — Reconciliation R2

**Date:** 2026-10-04  
**State:** RECONCILED · NOTEBOOKLM PASS · NO RUNTIME CHANGE  
**Review clearance:** `G7_R2_RECONCILIATION_REVIEW_COMPLETE`

## 1. Final result

The Grade-7 Coverage Matrix contained **11 historical exact-ID mismatches**. After repository reconciliation plus independent NotebookLM review of the five ambiguous cases, Grade 7 R2 is now semantically closed:

- **6 CANONICAL_SKILL**
- **4 CANONICAL_FAMILY**
- **1 LESSON_LOCAL**
- **0 remaining review cases**
- **0 remaining gap candidates**

Three new global identities were justified:

- `phep-tinh-so-huu-ti` → family `NUM-FRACTION-OPS`
- `so-vo-ti` → family `NUM-SETS`
- `chia-da-thuc-mot-bien` → current division family `ALG-DIV-MONOMIAL`

The other eight refs reconcile without a new global skill.

## 2. Independent review result

Packet: `MATH-KNTT-G7-RECON-R2-20261004`

NotebookLM reviewed **5/5** expected refs and returned **PASS**:

| Historical ref | Review decision | Final target |
|---|---|---|
| `phep-tinh-so-huu-ti` | ADD_CANONICAL_SKILL | `phep-tinh-so-huu-ti` |
| `quy-tac-chuyen-ve` | KEEP_LESSON_LOCAL | — |
| `so-vo-ti` | ADD_CANONICAL_SKILL | `so-vo-ti` |
| `tap-hop-so-thuc` | MAP_TO_FAMILY | `NUM-SETS` |
| `chia-da-thuc-mot-bien` | ADD_CANONICAL_SKILL | `chia-da-thuc-mot-bien` |

Review receipt:
`review-packets/kntt-grade7-reconciliation-r2/01_NOTEBOOKLM_RESULT_R2.md`

## 3. Final reconciliation table

| Historical ref | Final resolution | Canonical target |
|---|---|---|
| `phep-tinh-so-huu-ti` | CANONICAL_SKILL | `phep-tinh-so-huu-ti` / `NUM-FRACTION-OPS` |
| `quy-tac-chuyen-ve` | LESSON_LOCAL | prerequisite technique |
| `can-bac-hai` | CANONICAL_SKILL | `can-bac-hai-so-hoc` / `RAD-BASIC` |
| `so-thap-phan-vo-han-tuan-hoan` | CANONICAL_SKILL | `so-huu-ti-thap-phan` / `NUM-SETS` |
| `so-vo-ti` | CANONICAL_SKILL | `so-vo-ti` / `NUM-SETS` |
| `tap-hop-so-thuc` | CANONICAL_FAMILY | `NUM-SETS` |
| `ve-bieu-do-quat-tron` | CANONICAL_FAMILY | `STAT-REPRESENT` |
| `ve-bieu-do-doan-thang` | CANONICAL_FAMILY | `STAT-REPRESENT` |
| `da-thuc-mot-bien` | CANONICAL_FAMILY | `ALG-STRUCTURE` |
| `chia-da-thuc-mot-bien` | CANONICAL_SKILL | `chia-da-thuc-mot-bien` / `ALG-DIV-MONOMIAL` |
| `xac-suat-bien-co-don-gian` | CANONICAL_SKILL | `xac-suat-co-dien` / `PROB-CLASSICAL` |

## 4. Family placement boundary

The review authorizes three **skills**, not a broad family restructuring.

Therefore:
- rational arithmetic is placed under the existing operations family `NUM-FRACTION-OPS`;
- irrational numbers are placed under `NUM-SETS`;
- general univariate-polynomial division is attached to current `ALG-DIV-MONOMIAL` for this bounded reconciliation.

The last placement is intentionally conservative. The family ID/label remains unchanged in R2; any future family rename/split requires a separate reviewed taxonomy task.

## 5. Why the raw Matrix still shows 11 unresolved IDs

Coverage Matrix v1 preserves its original exact-ID comparison for audit traceability.

The Grade-7 semantic overlay now states:

`RECONCILED_REVIEWED_R2`

Thus exact-ID mismatch does not imply a curriculum gap.

## 6. Taxonomy integration

Durable Taxonomy v2 adds three diagnostic skill identities only. It does **not** add fake Practice mappings or evidence.

This change does **not**:
- activate Taxonomy v2 runtime;
- write learner data;
- backfill/regrade learner history;
- alter Mastery/Readiness;
- claim Practice Bank or Readiness evidence for the three new skills;
- rename/restructure canonical families;
- change learner-facing UI.

## 7. Next step

Grade 7 identity/granularity reconciliation is closed.

Proceed to **Grade 8 reconciliation R3** using the same discipline. Do not infer Grade-8 decisions from Grade 6/7; reconcile the three Grade-8 exact-ID mismatches against Grade-8 KNTT placement and the current registry.
