# G10 Chương VII–VIII · NotebookLM D1–D2 + Readiness Receipt and Independent Reconciliation

**Date:** 2026-10-28. **Source:** Owner-supplied pasted NotebookLM verdict (named batch `THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028`), reviewed 3 Temp Markdown sources, S1 SGK/SBT KNTT, 5 Permanent THPT v2.0. **Branch isolation:** `content/thpt-g10-chvii-chviii-authoring-20261028`. This is a documentary review receipt, **not** a PR merge, release or override of independent reviewer findings.

## Exact verdict, scope locked

```text
PACKET_ID|THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
B19_D1D2_ACADEMIC|PASS
B20_D1D2_ACADEMIC|PASS
B21_D1D2_ACADEMIC|PASS
B22_D1D2_ACADEMIC|PASS
B23_D1D2_ACADEMIC|PASS
B24_D1D2_ACADEMIC|PASS
B25_D1D2_ACADEMIC|PASS
CHVII_VIII_READINESS_14ITEMS_ACADEMIC|PASS
ID_RECONCILIATION|EXPECTED=14|REVIEWED=14|MISSING=0|UNEXPECTED=0|DUPLICATED=0
ACADEMIC_OVERALL|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Academic PASS applies exclusively to the 7 lessons' D1–D2 snapshots and 14 *reviewed candidate* assessment items.** It does not apply to 63 existing Core/Practice/Written items, full chapter D1–D6, full S1 exercise coverage, independently complete 10–12 Topic route or browser/secure scoring. Nothing in this receipt grants owner Academic PASS or release.

## Reviewer findings and non-automatic disposition

| Reviewer finding | Affected content | Proposed action | Policy / classification |
|---|---|---|---|
| P1-01 | `THPT-G10-B22-C01`, eccentricity e=c/a and possible ellipse/hyperbola directrix scope | Flag `SOURCE_SCOPE_REVIEW`; candidate **not eligible for SGK Core activation** until checking actual S1. Preserve canonical ID and answer as existing draft; propose optional layer only after source review. | Material layer change requires D3/D4 review; `DELTA_C` if content/role modified. |
| P1-02 | `THPT-G10-B25-P02`, `THPT-G10-B25-P06`; reviewer discusses n≥6/negative powers/odd coefficient sums | Flag `ADVANCED_SCOPE_REVIEW`. Check page-level original S1 before asserting blanket n≥6 exclusion. Do **not** silently change official scope, answer key, canonical ID or engine enum. | `DELTA_C` for substantive layer/coverage changes, include in next D3–D4 batch. |
| P2-01 | `THPT-G10-CHVII-RD04` distance response presentation | When a secure answer-check design exists, accept mathematically equivalent forms `5/sqrt(2)` and `5sqrt(2)/2`; no static client-side answer. | `DELTA_B` only if normalization preserves math and scoring semantics; otherwise `DELTA_C`. |

**Do not implement undocumented runtime metadata constants** `ELECTIVE_SPECIALIZED` or `SUPPORT_EXTENSION` in production as if validated enums. They were reviewer suggestions, not verified repo schema.

## Additional quality findings from reconciliation (not attributed to NotebookLM)

1. **RD02 exposure/solution collision; item retired.** Reviewed candidate `THPT-G10-CHVII-RD02` shares the **exact final line equation and direction** of worked example `EX-G10-B19-01`, even though point coordinates differ. A solution-specific value from this private candidate was inadvertently included in an earlier public receipt revision (historical Git commit). Consequently **the original `RD02` candidate is permanently ineligible for protected Readiness**; merely hiding it in a later commit cannot undo Git history. Preserve the original canonical identity as `RETIRED_EXPOSED_CANDIDATE`, do not reuse its ID with a new stem, and author a distinct replacement ID for a private `DELTA_C_ACADEMIC_MATERIAL` review. Never commit the new stem/key to public GitHub or client assets. Document keyless reviewer receipt only.
2. **Outcome register vs reviewer receipt is not 1:1.** Repository matrix v0.2 holds **35 provisional outcomes**. Reviewer narrative explicitly enumerates **29 outcome rows**, some using shortened aliases. Six candidate outcome IDs are **not individually evidenced by a separate row**: `G10-B19-MULTISTEP`, `G10-B19-LINEAR_MODEL`, `G10-B21-CIRCLE_THROUGH_POINTS`, `G10-B22-HYPERBOLA_ASYMPTOTES`, `G10-B22-CONIC_INTERSECTION`, `G10-B22-CONIC_MODEL`. Related mathematics may occur in a reviewed row, but **do not infer individual 1:1 PASS**. Ask next independent review to return exact 35-ID matrix for D1–D2/SGK scope; distinguish `COVERED`, `PARTIAL`, `NOT_REVIEWED`, `NOT_CORE`.
3. **Reviewer alias normalization (not new skills)**: `G10-B21-LINE_CIRCLE_POS`→`G10-B21-LINE_CIRCLE_POSITION`, `G10-B22-ELLIPSE_PARAM`→`G10-B22-ELLIPSE_PARAMETERS`, `G10-B22-HYPERBOLA_PARAM`→`G10-B22-HYPERBOLA_PARAMETERS`, `G10-B25-NEWTON_EXP`→`G10-B25-NEWTON_EXPANSION`, `G10-B25-COEFF_SIGN`→`G10-B25-COEFFICIENT_SIGN`, `G10-B25-COEFF_SUM`→`G10-B25-COEFFICIENT_SUM`. Keep canonical names stable; alias list is only a review receipt translation.

## Source receipts
- ChVII SGK Toán 10 KNTT tập 2 printed pp.29–58; SBT printed pp.27–49.
- ChVIII SGK printed pp.59–79; SBT printed pp.50–59.
- Source citation is reviewer-reported; full item/activity/diagram-by-diagram S1 crosswalk remains pending.

## Work boundaries / no collision with ChVI integration
- Existing 63 authored items still have status `D3_D4=NOT_REVIEWED`, and original bank files remain **unchanged** in this branch.
- Reviewed 14 RD candidates and keys remain in **owner-only Temp_ Markdown handoff**, not GitHub static browser/client files. Original 14 held-out slots are still blueprints, not deployable live items.
- No edits to ChVI, reviewed ChVI outcomes, Golden UI R4, preview router, data store, or assessment engine. No PR merge or deploy.
- Independent Topic route is still incomplete and requires a full Topic-specific knowledge/outcome/readiness batch.
- Next reviewer packet should include complete 63-item register (stem/key/solution/hints/rubrics), 35 outcome matrix and explicit lesson/figure S1 crosswalk. Correct RD02 only with an isolated Temp delta review, preserving previously reviewed receipt provenance.

```text
REVIEWER_D1_D2_7_LESSONS=PASS_LOCKED_TO_SNAPSHOT
REVIEWER_RD_14_CANDIDATES=PASS_LOCKED_TO_SNAPSHOT
RD02_INDEPENDENT_EXPOSURE_ELIGIBILITY=RETIRED_EXPOSED_CANDIDATE
OUTCOME_35_ID_RECONCILIATION=PARTIAL_29_ROWS
CORE_PRACTICE_WRITTEN_63=D3_D4_NOT_REVIEWED
ACADEMIC_CLEARANCE_FOR_RELEASE=NO
OWNER_APPROVED_MERGE_DEPLOY=NO
```
