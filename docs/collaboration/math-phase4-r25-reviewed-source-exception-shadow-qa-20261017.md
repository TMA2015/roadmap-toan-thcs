# Math Phase 4 R25 — Reviewed source exception shadow (QA only)

**Date:** 2026-10-17 · **Status:** source integrity candidate; no learner cutover.

## Why R25 follows R22–R24

R22's strict whole-file SHA check found 2,750 source-locked family candidate rows, 214 formative/no-Family rows, and 150 holds among 3,114 historical questions. R23 verified the five changed chunks and found 59 additional latest-catalog question IDs (49 MCQ/10 rich). R24's original assumption that four CT08 notation edits still needed independent review was corrected after locating the **already existing, exact-id NotebookLM notation-only lock**:

- `review-packets/academic-depth/ct08-p1a/01_CT08_P1A_NOTATION_ACADEMIC_LOCK_R1.json`: `NOTEBOOKLM_R1_APPROVED_NOTATION_ONLY_EXCEPTION`, exact four `EQ08V1_047..050` question/explanation replacements, original reviewed source SHA, protected fields.
- `review-packets/academic-depth/ct09-p1c1/01_CT09_PRACTICE_ACADEMIC_LOCK_R1.json`: all 120 historical CT09 item payloads, allowing **only** additive `variant_group`.
- `review-packets/academic-depth/ct09-p1c2/04_CT09_P1C2_OWNER_QA_PASS.md`: owner QA PASS for released 129-question / 27-group CT09 integration.

R25 adds an **isolated command-line QA reconciliation** using those existing locks. It cross-checks all 150 historical records against their reviewed payloads and five exact observed current Git blob SHAs. This is stricter than treating an altered file SHA as proof all of its questions changed. It also refuses *new* blob changes even if they only add whitespace.

## Current supported partition (subject to exact-head CI)

| Status | Count | Interpretation |
| --- | ---: | --- |
| R22 original source-locked historical Family candidate | 2,750 | Already held to original reviewed source blobs |
| R22 explicit formative/no Family | 214 | Never infer a Family from raw skill tags |
| R25 reviewed unchanged item records inside changed files | 26 | Same exact question payload as archived lock |
| R25 reviewed CT08 notation-only edits | 4 | Existing CT08 P1 narrow approval; no changed answer/skill |
| R25 reviewed CT09 variant metadata-only edits | 120 | Existing CT09 P1-C1/P1-C2 metadata/owner QA |
| **QA-reconcilable historical Family candidate total** | **2,900** | 2,750 + 26 + 4 + 120; not a production Skill credit |
| **Historical Taxonomy source SHA holds pending controlled refresh** | **150** | Frozen whole-file pins stay unchanged; no silent patch |
| **Newer candidate-bank IDs outside the historical 3,114-row policy** | **59** | Nine CT09 P1-C2 IDs have separate review receipts; this R25 shadow assigns none of the 59 a new Skill credit |

A source-reconciled Family candidate is **not** an independent graded Skill achievement. Classification roles include methods, partial MCQ evidence and contextual evidence. Neither the reviewed source lock nor the R25 shadow supplies stable canonical option identities, verified mastery thresholds, Readiness scores, or v1/v2 cross-device reconciliation.

## Safety boundaries

- Run only `node scripts/test-math-v2-reviewed-source-exception-shadow-r25.js` or the read-only CLI. No browser registration or Production Practice injection.
- The source SHA pins in `ct08-r1.json` and `ct09-r1.json` remain frozen, and R22's 150 source holds are not silently erased. The **separate shadow** explains which differences are already covered by a narrowly reviewed exception.
- A future source or lock change fails closed, as does a change to the 3,173-question candidate catalog or the 59-item newer-question partition. Test cases simulate whitespace-only source changes, altered variants, and withdrawal of the CT08 academic approval.
- No localStorage, IndexedDB, learner dataset, state migration, content changes, automatic mastery or Readiness credit.
- Before an eventual production Skill counter switch: controlled reviewed source-version contract, stable option/action IDs, revised full Practice inventory, independent evidence lanes, family PC/iPad Safari canary, and explicit owner cutover authorization.

**Release gate:** Exact-head full public Math CI PASS only authorizes merge of this read-only QA code and note; it does not grant a Skill counting production release.
