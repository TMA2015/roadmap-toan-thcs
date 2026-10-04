# KNTT Grade 7 — Reconciliation R2

**Date:** 2026-10-04  
**State:** DRAFT RECONCILIATION · ACADEMIC REVIEW PENDING · NO RUNTIME CHANGE  
**Input:** 11 Grade-7 historical exact-ID mismatches from Coverage Matrix v1

## 1. Draft result

- **3 CANONICAL_SKILL**
- **3 CANONICAL_FAMILY**
- **5 NEEDS_REVIEW**
- **6/11** can be reconciled without a new global identity before independent review.

| # | Historical ref | R2 draft | Current target / review candidate |
|---:|---|---|---|
| 1 | `phep-tinh-so-huu-ti` | NEEDS_REVIEW | `so-huu-ti-thap-phan`, `NUM-SETS` |
| 2 | `quy-tac-chuyen-ve` | NEEDS_REVIEW | `bien-doi-pt-nhieu-buoc`, `EQ-BASIC` |
| 3 | `can-bac-hai` | CANONICAL_SKILL | `can-bac-hai-so-hoc` |
| 4 | `so-thap-phan-vo-han-tuan-hoan` | CANONICAL_SKILL | `so-huu-ti-thap-phan` |
| 5 | `so-vo-ti` | NEEDS_REVIEW | `NUM-SETS` |
| 6 | `tap-hop-so-thuc` | NEEDS_REVIEW | `NUM-SETS` |
| 7 | `ve-bieu-do-quat-tron` | CANONICAL_FAMILY | `STAT-REPRESENT` |
| 8 | `ve-bieu-do-doan-thang` | CANONICAL_FAMILY | `STAT-REPRESENT` |
| 9 | `da-thuc-mot-bien` | CANONICAL_FAMILY | `ALG-STRUCTURE` |
| 10 | `chia-da-thuc-mot-bien` | NEEDS_REVIEW | `chia-da-thuc-cho-don-thuc`, `ALG-DIV-MONOMIAL` |
| 11 | `xac-suat-bien-co-don-gian` | CANONICAL_SKILL | `xac-suat-co-dien` |

## 2. Safe closures

- `can-bac-hai` -> `can-bac-hai-so-hoc` / RAD-BASIC, using the registry's existing canonical candidate.
- `so-thap-phan-vo-han-tuan-hoan` -> `so-huu-ti-thap-phan` / NUM-SETS.
- chart construction refs -> STAT-REPRESENT family.
- `da-thuc-mot-bien` -> ALG-STRUCTURE family.
- `xac-suat-bien-co-don-gian` -> `xac-suat-co-dien` / PROB-CLASSICAL.

## 3. Five cases requiring independent review

1. `phep-tinh-so-huu-ti`
2. `quy-tac-chuyen-ve`
3. `so-vo-ti`
4. `tap-hop-so-thuc`
5. `chia-da-thuc-mot-bien`

The Grade-7 mapping previously identified `chia-da-thuc-mot-bien` as lacking a sufficiently clear Practice skill; R2 therefore does not collapse it into the narrower `chia-da-thuc-cho-don-thuc` without review.

## 4. Anti-inflation rule

Do not create a global skill merely because KNTT uses a lesson phrase. Review each case for:
- S1 curriculum identity;
- diagnostic value;
- overlap with existing family/skill;
- cross-grade stability;
- problem type vs skill;
- granularity.

## 5. Protected boundaries

No learner-facing change, Taxonomy runtime activation, history migration/backfill/regrade, Mastery/Readiness change, or new-skill creation occurs in this draft.

## 6. Next gate

Independent NotebookLM review of exactly the five review-queue refs using:
- current NotebookLM Math Review Rules v1.2;
- current Master Plan v1.2.1;
- official/reusable SGK Toán 7 tập một;
- official/reusable SGK Toán 7 tập hai;
- the R2 packet.

After review, reconcile the result into this artifact before any taxonomy change.
