# KNTT Grade 6 — Reconciliation R1

**Date:** 2026-10-04  
**State:** RECONCILED · NOTEBOOKLM PASS · NO RUNTIME CHANGE  
**Review clearance:** `G6_R1_RECONCILIATION_REVIEW_COMPLETE`

## 1. Final result

The Grade-6 Coverage Matrix contained **35 historical exact-ID mismatches**. After repository reconciliation plus independent NotebookLM review of the seven ambiguous cases, Grade 6 R1 is now semantically closed:

- **18 CANONICAL_SKILL**
- **16 CANONICAL_FAMILY**
- **1 LESSON_LOCAL**
- **0 remaining review cases**
- **0 remaining gap candidates**

Only one new global identity was justified:

- `lam-tron-so` → family `NUM-SETS`

The other 34 refs were reconciled without creating a new global skill.

## 2. Independent review result

Packet: `MATH-KNTT-G6-RECON-R1-20261004`

NotebookLM reviewed **7/7** expected refs and returned **PASS**:

| Historical ref | Review decision | Final target |
|---|---|---|
| `cong-tru-so-tu-nhien` | MAP_TO_FAMILY | `NUM-INTEGER-OPS` |
| `nhan-chia-so-tu-nhien` | MAP_TO_FAMILY | `NUM-INTEGER-OPS` |
| `hon-so-duong` | MAP_TO_FAMILY | `NUM-FRACTION-FORM` |
| `phep-tinh-so-thap-phan` | MAP_TO_SKILL | `so-huu-ti-thap-phan` |
| `bang-thong-ke` | MAP_TO_FAMILY | `STAT-REPRESENT` |
| `lam-tron` | ADD_CANONICAL_SKILL | `lam-tron-so` |
| `uoc-luong` | KEEP_LESSON_LOCAL | — |

Review receipt:
`review-packets/kntt-grade6-reconciliation-r1/01_NOTEBOOKLM_RESULT_R1.md`

## 3. Final reconciliation table

| # | Historical ref | Final resolution | Canonical target | Local role |
|---:|---|---|---|---|
| 1 | `tap-hop` | CANONICAL_SKILL | `tap-hop-so` | DIRECT_ALIAS |
| 2 | `ghi-so-tu-nhien` | CANONICAL_FAMILY | `NUM-SETS` | LESSON_LOCAL_CONCEPT |
| 3 | `thu-tu-so-tu-nhien` | CANONICAL_FAMILY | `NUM-SETS` | LESSON_LOCAL_CONCEPT |
| 4 | `cong-tru-so-tu-nhien` | CANONICAL_FAMILY | `NUM-INTEGER-OPS` | LESSON_LOCAL_CONCEPT |
| 5 | `nhan-chia-so-tu-nhien` | CANONICAL_FAMILY | `NUM-INTEGER-OPS` | LESSON_LOCAL_CONCEPT |
| 6 | `quan-he-chia-het` | CANONICAL_FAMILY | `NUM-DIV-PRIME` | LESSON_LOCAL_CONCEPT |
| 7 | `tinh-chat-chia-het` | CANONICAL_FAMILY | `NUM-DIV-PRIME` | LESSON_LOCAL_CONCEPT |
| 8 | `so-nguyen-to-hop-so` | CANONICAL_SKILL | `so-nguyen-to` | DIRECT_ALIAS |
| 9 | `uoc-chung-ucln` | CANONICAL_SKILL | `ucln` | DIRECT_ALIAS |
| 10 | `boi-chung-bcnn` | CANONICAL_SKILL | `bcnn` | DIRECT_ALIAS |
| 11 | `bai-toan-ucln-bcnn` | CANONICAL_FAMILY | `NUM-GCD-LCM` | PROBLEM_TYPE |
| 12 | `so-nguyen-truc-so` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 13 | `so-sanh-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 14 | `cong-tru-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 15 | `quy-tac-dau-ngoac` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 16 | `nhan-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 17 | `chia-het-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 18 | `uoc-boi-so-nguyen` | CANONICAL_SKILL | `so-nguyen-phep-tinh` | AGGREGATED_GRANULARITY |
| 19 | `phan-so-bang-nhau` | CANONICAL_FAMILY | `NUM-FRACTION-FORM` | LESSON_LOCAL_CONCEPT |
| 20 | `so-sanh-phan-so` | CANONICAL_SKILL | `quy-dong-so-sanh-phan-so` | DIRECT_ALIAS |
| 21 | `hon-so-duong` | CANONICAL_FAMILY | `NUM-FRACTION-FORM` | LESSON_LOCAL_CONCEPT |
| 22 | `cong-tru-phan-so` | CANONICAL_SKILL | `phep-tinh-phan-so` | AGGREGATED_GRANULARITY |
| 23 | `nhan-chia-phan-so` | CANONICAL_SKILL | `phep-tinh-phan-so` | AGGREGATED_GRANULARITY |
| 24 | `tim-gia-tri-phan-so-cua-so` | CANONICAL_FAMILY | `NUM-FRACTION-OPS` | PROBLEM_TYPE |
| 25 | `tim-so-khi-biet-gia-tri-phan-so` | CANONICAL_FAMILY | `NUM-FRACTION-OPS` | PROBLEM_TYPE |
| 26 | `so-thap-phan` | CANONICAL_SKILL | `so-huu-ti-thap-phan` | DIRECT_ALIAS |
| 27 | `phep-tinh-so-thap-phan` | CANONICAL_SKILL | `so-huu-ti-thap-phan` | AGGREGATED_GRANULARITY |
| 28 | `lam-tron` | CANONICAL_SKILL | `lam-tron-so` | NEW_CANONICAL_SKILL_S1_REVIEWED |
| 29 | `uoc-luong` | LESSON_LOCAL | — | APPLICATION_TECHNIQUE |
| 30 | `bai-toan-phan-tram` | CANONICAL_SKILL | `phan-tram` | PROBLEM_TYPE_TO_SKILL |
| 31 | `du-lieu` | CANONICAL_FAMILY | `STAT-DATA` | LESSON_LOCAL_CONCEPT |
| 32 | `bang-thong-ke` | CANONICAL_FAMILY | `STAT-REPRESENT` | LESSON_LOCAL_REPRESENTATION |
| 33 | `bieu-do-tranh` | CANONICAL_FAMILY | `STAT-CHART-READ` | LESSON_LOCAL_REPRESENTATION |
| 34 | `ket-qua-co-the` | CANONICAL_FAMILY | `PROB-EVENT` | LESSON_LOCAL_CONCEPT |
| 35 | `su-kien-don-gian` | CANONICAL_FAMILY | `PROB-EVENT` | LESSON_LOCAL_CONCEPT |

## 4. Why the raw Matrix still shows 35 unresolved IDs

The Coverage Matrix framework intentionally preserves its original **exact-ID comparison** for traceability. For example, historical `lam-tron` is not literally the same ID as canonical `lam-tron-so`.

Therefore the framework can still show 35 exact-ID mismatches while its Grade-6 semantic overlay states:

`RECONCILED_REVIEWED_R1`

This is deliberate: do not erase historical IDs just to make a counter become zero.

## 5. Taxonomy integration

The durable Taxonomy v2 registry now includes:

`NUM-SETS.diagnostic_subskills += ["lam-tron-so"]`

No fake legacy Practice mapping was created because current Practice Bank evidence does not yet use a `lam-tron` tag.

This change does **not**:
- activate Taxonomy v2 runtime;
- write learner data;
- backfill or regrade learner history;
- alter Mastery/Readiness;
- claim Practice Bank or Readiness evidence for `lam-tron-so`;
- change learner-facing UI.

## 6. Next step

Grade 6 ID/granularity reconciliation is closed.

Proceed to **Grade 7 reconciliation R2**, using the same four-way discipline:
- existing canonical skill;
- existing canonical family / lesson-local detail;
- genuine gap candidate;
- needs independent review.

Do not infer Grade-7 decisions from Grade 6; reconcile against Grade-7 KNTT placement and the current canonical registry.
