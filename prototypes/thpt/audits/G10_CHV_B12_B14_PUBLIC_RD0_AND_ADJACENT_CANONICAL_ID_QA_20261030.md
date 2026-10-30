# Toán 10 ChV B12–B14 · public-formative ↔ RD0 outcome IDs: cross-snapshot QA · 30/10/2026

**AUTHORING QA ONLY**; `NO_NEW_ACADEMIC_VERDICT`, `NO_CHANGE_TO_REVIEWED_MATH`, `NO_MERGE_DEPLOY`, `NO_SCORE/NO_MASTERY`. This file compares identifiers, not mathematical equivalence of independent assessment questions or an active scoring system.

## Frozen evidence and scopes

- **ChV public D1–D6:** owner-supplied NotebookLM academic PASS **27/27 canonical item candidates**, D1–D6 across B12–B14, 14/14 source outcomes; source blob `49502fe39cf0a67f6a3e973a77f94164150637a7`, ID register blob `543300eceed6c62db2a47f7896cb54930cd00f2e` on authoring PR #639. Scope: `PUBLIC_FORMATIVE_ONLY`, 6 SGK Core + 18 Practice + 3 Written (one Anchor tag), 9 worked examples, 3 SVG, 6 HELP_ID.
- **ChV RD0 outcome-only scope:** owner NotebookLM R01 independent PASS for 14 ChV outcome targets (12 CORE_KEEP + 2 SUPPORT_ONLY); Git snapshot blob `7fab3ef216aa96073aa9cc870bb7d2cfa196081e` on Draft PR #641. This is `SGK_CHAPTER_READINESS` coverage planning, no held-out items or scoring.
- **ChIV adjacent source comparisons (IDs only):** main reviewed B07–B08 ID register blob `9fde1b9009eb44ec5926fe5008082249cc248bfc` with 18 public candidates; Draft PR #637 reviewed B09–B11 register blob `f481dcafee2c50540e88fb5b93f089089a9b387b` with 27. These packages are not re-reviewed here.

## Exact ChV source outcome ↔ RD0 target mapping

| # | Reviewed ChV public outcome ID | RD0 ID match |
|---:|---|---|
| 1 | `G10-B12-ABS_ERROR` | `EXACT` |
| 2 | `G10-B12-APPROX_CONCEPT` | `EXACT` |
| 3 | `G10-B12-REL_ERROR` | `EXACT` |
| 4 | `G10-B12-ROUNDING` | `EXACT` |
| 5 | `G10-B13-INTERPRETATION` | `EXACT` |
| 6 | `G10-B13-MEAN` | `EXACT` |
| 7 | `G10-B13-MEDIAN` | `EXACT` |
| 8 | `G10-B13-MODE` | `EXACT` |
| 9 | `G10-B13-QUARTILES` | `EXACT` |
| 10 | `G10-B14-COMPARISON` | `EXACT` |
| 11 | `G10-B14-OUTLIERS` | `EXACT` |
| 12 | `G10-B14-RANGE_IQR` | `EXACT` |
| 13 | `G10-B14-STDDEV` | `EXACT` |
| 14 | `G10-B14-VARIANCE` | `EXACT` |

**ID QA:** `CHV_OUTCOME_SOURCE=14`, `CHV_RD0=14`, `MISSING=0`, `EXTRA=0`, `IDENTITY_REMAP=0`; `CHV_PUBLIC_ITEM_IDS=27`, `WITHIN_CHV_DUPLICATE=0`; `CHIV_PUBLIC_ITEM_IDS=45`, `INTER_CHIV_CHV_ITEM_COLLISION=0`, `TOTAL_UNIQUE_PUBLIC_CANDIDATES_CHECKED=72`.

**Conditions from approved academic source:** B12 relative error denominator uses the approximate nonzero `a`; accuracy `d` bounds—not equals—the actual absolute error. B13 quartiles use KNTT rule for odd sample size, and B14 descriptive variance divides by `n`, with strict outlier boundaries. These are **reviewer-reported curriculum constraints**, not new mathematics or new item answers.

## Release and integration gates unchanged

- Do not interpret exact outcome-ID equality as `ASSESSMENT_ITEM_BANK=REVIEWED`, verified student independence, `FULL_CHAPTER_COMPLETE` or `TOPIC_READINESS`; there is no protected Chapter Readiness exam here.
- The global deployed bank and shared Written/Anchor dedup against **latest production main** remain R1 (this QA compares exactly three given authoring registers, not the entire repository or runtime). R2 real-device SVG/desktop/mobile/THCS regression and owner R5 approval also pending.
- **PR #639 authoring manifest QA fix:** `ready/G10-SGK-CHV.md` previously missing `SOURCE_COMMIT` and had too-short `P1_DEPLOY_RECEIPT` description, failing `test-thpt-release-queue.cjs` in both GH Actions workflows. These two manifest-only fixes were made without touching the SHA-frozen R01 academic snapshot; exact-head CI outcome requires new workflow verification. `DELTA_A_UI=DOCUMENTATION_METADATA_ONLY` (no academic material change; NotebookLM re-review not needed).

**Next:** release lane may import source into existing canonical bank only on exact latest main after full R1–R5 conditions and explicit owner approval; in authoring lane, preserve reviewed 27-item source and fix no question content here.
