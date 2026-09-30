# MATH-CORE03-R2 release reconciliation — 30/09/2026

**Academic packet:** MATH-CORE03-R2-20260930  
**Reviewed source blob:** `a84c2740169070d6919bc8d2f274d10fb914fa32`  
**Independent verdict:** PASS  
**Audit provenance:** Draft PR #180; R1 REVISIONS_REQUIRED → targeted R2 PASS.  
**Release scope:** implementation only; legacy bank migration forbidden.

## Approved content

- 5/5 teaching cards.
- 15/15 `RAT03MICRO_001–015`.
- Grade 6 Core assessed skills: `ti-so`, `ti-so-phan-tram`.
- `doi-don-vi-ti-so`: Prerequisite/Core-Support only; `RAT03MICRO_002` is formative support and must not gate Core Readiness.
- Grade 7 Core: `ti-le-thuc`, `tim-x-ti-le-thuc`, `day-ti-so-bang-nhau`, `chia-theo-ti-le`, `ti-le-thuan`, `he-so-ti-le-thuan`, `ti-le-nghich`, `he-so-ti-le-nghich`, `phan-biet-thuan-nghich`.

## Data preservation contract

1. Keep `RAT03V1_001–120` and `03-ti-le-ti-le-thuc-v1.manifest.json` byte-identical.
2. New micro IDs are append-only and live in a separate micro bank.
3. Do not migrate or recalculate existing `toan-thcs-practice-v1` records.
4. Core progress derives from `card.skills`; supporting skills and Core-Support answers are not Core readiness credit.
5. Route/menu changes may expose the new standalone page but must not remove the full lesson, Practice Room or independent Readiness route.

## R2 corrections integrated

- Card 1: `doi-don-vi-ti-so` removed from Core skills; explicit 2 m → 200 cm example.
- `RAT03MICRO_003`: 15/25 = 60%.
- `RAT03MICRO_005`: x/8=3/4 → x=6.
- `RAT03MICRO_011`: direct-proportion table gives k=3.
- `RAT03MICRO_015`: inverse-proportion table gives xy=36.
- R2 confirmed 4 unchanged cards and 10 unchanged micro items with no regression.

## Remaining release gates

Schema/ID/answer audit, old-bank blob audit, shared-route regression, strict MkDocs build, desktop/mobile modal tests, MathJax/render checks and learner-evidence regression must all pass before merge/deploy. Owner real-device acceptance remains a separate post-deploy gate.
