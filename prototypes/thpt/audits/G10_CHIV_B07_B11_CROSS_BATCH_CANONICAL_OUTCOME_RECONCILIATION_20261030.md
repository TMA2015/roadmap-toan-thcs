# G10 SGK ChIV B07–B11 · cross-batch ID and evidence reconciliation · 2026-10-30

**LANE:** ACADEMIC_AUTHORING_AUDIT_ONLY; **DOCUMENT CHANGE:** `DELTA_A_UI` (audit metadata, no mathematical/source changes) with `CANONICAL_SKILL_ID_MAPPING_HOLD` for one name mismatch; **RELEASE:** NO. This file is a reference-only crosswalk, not a second question bank, not an automatic alias table inserted into the student runtime.

## Source and independent reviewer boundaries

- **Public formative batch 1:** B07–B08, source blob `42b206e31421b33860a1bf697d2d04b7aba992cf` on `main`, ID register blob `9fde1b9009eb44ec5926fe5008082249cc248bfc`; 18 canonical candidates (4 Core, 12 Practice, 2 Written; one Anchor tag). Owner independently reviewed R01 18/18 and 10/10 outcomes for public formative only.
- **Public formative batch 2:** B09–B11, source blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34` on PR #637 branch, ID register blob `f481dcafee2c50540e88fb5b93f089089a9b387b`; 27 canonical candidates (6 Core, 18 Practice, 3 Written; one Anchor tag). Owner independently reviewed R01 27/27 and 14/14 outcomes for public formative only.
- **Independent Chapter Readiness RD0 scope:** ChIV outcome-only R01 blob `7a300fb047b670053b4061dc0339dcf0c708863d` on Draft PR #641; owner NotebookLM subsequently reviewed 24/24 outcome targets and reported `ACADEMIC_CLEARANCE_FOR_RD0_SCOPE=YES`. That **does not** approve an actual test, private item bank, scoring, chapter-complete status or production IDs.
- **Reconciled public item count across authoring batches:** `18+27=45` unique candidate `item_id`, `10 SGK_CORE + 30 SGK_PRACTICE + 5 WRITTEN`. No inter-batch collisions and no new item created. `D2=15 worked examples`, `D5=5 SVG`, `D6=10 HELP_ID` per reviewed receipt totals, NOT a new independent combined-chapter PASS. Two Anchor-marked Written IDs remain in one Written library, not duplicates.

## Full 24-target RD0 ↔ formative-source ID reconciliation

| # | RD0 reviewed OUTCOME_ID | Public formative source outcome ID | Source batch | Mapping status |
|---:|---|---|---|---|
| 1 | `G10-B07-DEFINITION` | `G10-B07-DEFINITION` | B07–B08 | `EXACT_ID` |
| 2 | `G10-B07-DIRECTION` | `G10-B07-DIRECTION` | B07–B08 | `EXACT_ID` |
| 3 | `G10-B07-EQUALITY` | `G10-B07-EQUALITY` | B07–B08 | `EXACT_ID` |
| 4 | `G10-B07-LENGTH` | `G10-B07-LENGTH` | B07–B08 | `EXACT_ID` |
| 5 | `G10-B07-ZERO` | `G10-B07-ZERO` | B07–B08 | `EXACT_ID` |
| 6 | `G10-B08-TRIANGLE` | `G10-B08-TRIANGLE` | B07–B08 | `EXACT_ID` |
| 7 | `G10-B08-PARALLELOGRAM` | `G10-B08-PARALLELOGRAM` | B07–B08 | `EXACT_ID` |
| 8 | `G10-B08-OPPOSITE` | `G10-B08-OPPOSITE-SUBTRACTION` | B07–B08 | `ALIAS_CANDIDATE_HOLD` |
| 9 | `G10-B08-MIDPOINT` | `G10-B08-MIDPOINT` | B07–B08 | `EXACT_ID` |
| 10 | `G10-B08-CENTROID` | `G10-B08-CENTROID` | B07–B08 | `EXACT_ID` |
| 11 | `G10-B09-SCALAR_DEFINITION` | `G10-B09-SCALAR_DEFINITION` | B09–B11 | `EXACT_ID` |
| 12 | `G10-B09-LENGTH_DIRECTION` | `G10-B09-LENGTH_DIRECTION` | B09–B11 | `EXACT_ID` |
| 13 | `G10-B09-DISTRIBUTION` | `G10-B09-DISTRIBUTION` | B09–B11 | `EXACT_ID` |
| 14 | `G10-B09-COLLINEAR` | `G10-B09-COLLINEAR` | B09–B11 | `EXACT_ID` |
| 15 | `G10-B09-MIDPOINT_CENTROID` | `G10-B09-MIDPOINT_CENTROID` | B09–B11 | `EXACT_ID` |
| 16 | `G10-B10-VECTOR_COORDS` | `G10-B10-VECTOR_COORDS` | B09–B11 | `EXACT_ID` |
| 17 | `G10-B10-OPERATIONS` | `G10-B10-OPERATIONS` | B09–B11 | `EXACT_ID` |
| 18 | `G10-B10-NORM_DISTANCE` | `G10-B10-NORM_DISTANCE` | B09–B11 | `EXACT_ID` |
| 19 | `G10-B10-COLLINEAR_COORDS` | `G10-B10-COLLINEAR_COORDS` | B09–B11 | `EXACT_ID` |
| 20 | `G10-B10-MIDPOINT_CENTROID` | `G10-B10-MIDPOINT_CENTROID` | B09–B11 | `EXACT_ID` |
| 21 | `G10-B11-GEOMETRIC_DOT` | `G10-B11-GEOMETRIC_DOT` | B09–B11 | `EXACT_ID` |
| 22 | `G10-B11-COORDINATE_DOT` | `G10-B11-COORDINATE_DOT` | B09–B11 | `EXACT_ID` |
| 23 | `G10-B11-PERPENDICULAR` | `G10-B11-PERPENDICULAR` | B09–B11 | `EXACT_ID` |
| 24 | `G10-B11-APPLICATION` | `G10-B11-APPLICATION` | B09–B11 | `EXACT_ID` |

**Exact string matches 23/24; crosswalk candidates 1/24; math-content discrepancies observed by ID-scope comparison: 0.** The mismatch is *not* silently treated as a verified canonical alias until release's ID/skill mapping review.

## One identified naming conflict: hold on identity, not on mathematics

- **RD0 ChIV (reviewed academic outcome scope):** `G10-B08-OPPOSITE`, defined as **vectơ đối** plus **quy tắc trừ** in SGK B08 pp52–53/SBT pp48–49, with both `-AB=BA` and `AB-AC=CB` capabilities.
- **Independent public formative R01 (Academic PASS):** `G10-B08-OPPOSITE-SUBTRACTION`, also covers vectơ đối and quy tắc trừ at the same cited S1 pages, with two reviewed public practice candidates `THPT-G10-B08-P01` and `THPT-G10-B08-P02`.
- **Assessment by source-text overlap:** these are *likely a naming difference for the same educational skill*, rather than newly missing content. This conclusion is an **authoring crosswalk hypothesis**, not a new NotebookLM PASS, and does **not** authorize renaming protected or published IDs.
- **Resolution policy before runtime mapping:** select ONE canonical `skill_id` and record any legacy/alias edge with stable referential integrity, version and exposure checks. **DO NOT edit the frozen NotebookLM-reviewed R01 source or RD0 snapshot; DO NOT change student history/storage keys or production canonical item IDs.** If the proposed identity mapping impacts outcome coverage or item semantics, classify `DELTA_C_ACADEMIC_MATERIAL` and review that affected crosswalk; if source-equivalent naming only, document `DELTA_B_SOURCE_EQUIVALENT` and run technical ID reference QA. `ID_MAPPING_RELEASE_GATE=HOLD` until explicitly verified.
- No other exact name mismatch found in 24 outcomes. Distinct B08/B09 midpoint/centroid outcomes may share evidence `MERGE_COVERAGE` under reviewer verdict, but retain distinct existing IDs; do not duplicate item questions.

## Remaining educational/release closure

- Both constituent authoring packets have Academic D1–D6 PASS **only within PUBLIC_FORMATIVE_ONLY lesson scopes**. Full ChIV student SGK path still needs integration and R1–R5 QA on the actual latest code; no official end-of-chapter Ready/Score/Mastery and no Topic Readiness.
- Canonical bank registration, inter-bank collision check on *actual current main*, figure/layout browser/physical mobile UAT, THCS regression, and owner release approval remain pending. This 45-ID authoring comparison does not claim those production checks.

**Static QA at creation:** `PUBLIC_SOURCE_ITEM_IDS=45`, `UNIQUE=45`, `RD0_OUTCOMES=24`, `EXACT_MATCH=23`, `ALIAS_CANDIDATE=1`, `DIRECT_ITEM_COLLISIONS=0`, `READINESS_ACTIVE=NO`, `NO_SCORE/NO_MASTERY`, `NO_MERGE_DEPLOY`.
