# W1 conversion reconciliation — closed implementation batch, NOT a 75-item academic clearance

**Date:** 2026-10-15  
**Canonical public site and main SHA examined:** `70c10fb7819e8dbffd066d78ffa5733d9e6998bb`  
**NotebookLM audit authority:** owner-submitted R2a erratum overlay `docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json`; S1 textbook citations there are reviewer claims, not a fresh verification by this reconciliation.

## Counts without conflating review with release

- 75 unique original legacy source IDs across CĐ02 (16), CĐ03 (13), CĐ04 (13), CĐ21 (33). The source Markdown contains some repeated explanatory headings and should be de-duplicated by ID when counting. **19 academically reviewed**, 56 remain NOT_REVIEWED.
- R2a outcomes within those 19: 14 PASS, 5 REVISE.
- 8 source-linked **new opt-in formative typed variants** released with owner preview QA and GitHub Pages (PRs #457, #459, #461, #462):
  - `02-G6-WR-01` → `NUM02-RICH-W1-01-V1`
  - `03-M1-02` → `RAT03-RICH-W1-01-V1`
  - `04-WR-01` → `ALG04-RICH-W1-01-V1`
  - `02-G6-WR-03` → `NUM02-RICH-W1-02-V1`
  - `03-M3-01` → `RAT03-RICH-W1-02-V1`
  - `04-WR-03` → `ALG04-RICH-W1-02-V1`
  - `21-M2-01` → `STA21-RICH-W1-01-V1`
  - `21-M3-01` → `STA21-RICH-W1-02-V1`
- 6 remaining academically PASS items are **not** 6 missing software features:

| Source ID | Narrowly established relationship | Decision for W1 | Important boundary |
| --- | --- | --- | --- |
| `03-M4-01` | Same 1440 books / 3:4:5 / 360,480,600 already in `RAT03V1_045` | `REUSE_EXISTING` — no cloned rich source item | Difference in answer modality alone is not new problem structure |
| `02-M2-03` | Same four rational numbers and order already in MCQ `NUM02V1_069` | `REUSE_EXISTING`; no exact copy | Keep legacy written source available |
| `04-CH-01` | Prove `(x+1)(x+2)-x(x+3)=2` for all x | `KEEP_PAPER_WRITTEN` | Entering 2 alone does not prove variable independence; proper proof rubric is valuable future work |
| `21-WR-01` | Numeric versus categorical classification; related MCQs `STA21V1_001`–`008`, `STA21MICRO_001`/`002` | `KEEP_PAPER_WRITTEN` / family covered, no new clone in W1 | Related items use different observations, not exact same question |
| `21-WR-02` | Difference between 14 and 20 books; same reasoning family as `STA21V1_061`–`068`, `STA21MICRO_004` | `KEEP_PAPER_WRITTEN` / do not claim new authentic chart-reading evidence | Original gives **described bar-data**, not an actual chart to interpret |
| `21-M1-01` | Definition of frequency; related frequency counting MCQs `STA21V1_041` and `STA21MICRO_025` | `KEEP_PAPER_WRITTEN` / no forced new quiz | This is concept recall; the cited bank items test application, not an identical definition stem |

- 5 R2a REVISE cases **remain blocked**, never silently promoted:
`02-G6-WR-02`, `02-G6-WR-04`, `04-WR-02` (canonical reuse pointers);
`03-M1-01` (4 distinct ratio tiles exact cross-product);
`21-M4-01` (combined frequency + one-decimal percentages with unresolved five-versus-ten-field scope).

## W1 conversion verdict

**`W1_IMPLEMENTATION_WAVES_COMPLETE / W1_ACADEMIC_CORPUS_NOT_COMPLETE`**.

This is a conversion-triage decision, **not** an independent academic approval of unresolved items and not a deletion of any paper exercise. All 75 source tasks continue to exist; prior IDs, learner attempts, historical answers, and Core Readiness remain protected.

Next move is a selective W2 academic triage packet of 12 from the 56 NOT_REVIEWED tasks. Its review does not automatically authorize new coding, grading modes, or releases. Focus on mathematical structural diversity, source authority and full reasoning rather than count expansion.
