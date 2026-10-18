# R38 — Remaining 25/25 source-locked item → Family candidate triage (2026-10-18)

**QA-only academic fit review.** Inputs: `TEMP_NOTEBOOKLM_R38_SOURCE_B_40_EXACT_ITEMS_AND_MAPPING_20261018.md` (verbatim pinned stems/options/answers and approved item layers), `TEMP_NOTEBOOKLM_R38_SOURCE_A_REGISTRY_131_FAMILIES_20261018.md` (actual Family names/layers/topic/diagnostic subskills), corrected reviewer V2. Results below are new reasoned item-to-subskill fit assessments, **not** NotebookLM verdict changes, independent credit validation or Owner `ASSESSED_SKILL` approval.

| Canonical item ID | Existing Family | Exact Registry diagnostic subskill | Tested demand | QA result |
|---|---|---|---|---|
| `NUM02V1_121` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_122` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_123` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_124` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_125` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_126` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_127` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_128` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_129` | `NUM-SETS` | `lam-tron-so` | ROUNDING_ESTIMATION | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_130` | `NUM-SETS` | `lam-tron-so` | ROUNDING_ESTIMATION | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_131` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_132` | `NUM-SETS` | `lam-tron-so` | ROUNDING | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_133` | `NUM-FRACTION-OPS` | `phep-tinh-so-huu-ti` | signed rational addition | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_134` | `NUM-FRACTION-OPS` | `phep-tinh-so-huu-ti` | subtract negative rational | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_135` | `NUM-FRACTION-OPS` | `phep-tinh-so-huu-ti` | signed rational multiplication | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_136` | `NUM-FRACTION-OPS` | `phep-tinh-so-huu-ti` | division by negative rational | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_139` | `NUM-SETS` | `so-vo-ti` | identify irrational √3 | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_140` | `NUM-SETS` | `so-vo-ti` | definition of nonperiodic decimal and real-number inclusion | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_141` | `NUM-SETS` | `so-vo-ti` | classify/count irrational numbers among radicals/rational decimals | `FIT_DIAGNOSTIC_PENDING_ASSESSED_ROLE` |
| `NUM02V1_145` | `NUM-ABS` | `gia-tri-tuyet-doi` | compute absolute value | `REVIEWER_PASS_PENDING_OWNER_ROLE` |
| `NUM02V1_146` | `NUM-ABS` | `gia-tri-tuyet-doi` | identify number by absolute value | `REVIEWER_PASS_PENDING_OWNER_ROLE` |
| `NUM02V1_147` | `NUM-ABS` | `gia-tri-tuyet-doi` | solve |x|=4 by recognizing both ± roots | `REVIEWER_PASS_PENDING_OWNER_ROLE` |
| `QUA12V1_121` | `QUAD-GRAPH` | `lien-he-do-thi` | form intersection equation | `REVIEWER_PASS_PENDING_OWNER_ROLE` |
| `QUA12V1_122` | `QUAD-GRAPH` | `lien-he-do-thi` | solve intersection abscissae | `REVIEWER_PASS_PENDING_OWNER_ROLE` |
| `QUA12V1_123` | `QUAD-GRAPH` | `lien-he-do-thi` | tangency through repeated intersection root | `REVIEWER_PASS_PENDING_OWNER_ROLE` |

## Findings and grading safeguards

1. **NUM02V1_121–132 (12)**: each directly tests rounding or rounding-based estimation and fits the existing `NUM-SETS` diagnostic `lam-tron-so`. Items _129/_130 additionally require addition/multiplication **after** rounding, so no claim of isolated arithmetic mastery should follow. The 12 are not 12 distinct mathematical structures; avoid frequency/coverage inflation.
2. **NUM02V1_133–136 (4)**: each tests a different signed rational arithmetic operation, compatible with `NUM-FRACTION-OPS` / `phep-tinh-so-huu-ti`. Their legacy item skill labels are subskills, not evidence of automatic assessed authorization.
3. **NUM02V1_139–141 (3)**: classification, conceptual definition and count of irrational numbers fit `NUM-SETS` / `so-vo-ti`. Do not misread use of √ as evidence for separately held square-root calculation `NUM02V1_142–144`.
4. **NUM02V1_145–147 (3)**: exact existing `NUM-ABS` diagnostic mapping, reviewer PASS; note _147 asks for both solutions to |x|=4 and should not by itself grant generalized equation-solving mastery.
5. **QUA12V1_121–123 (3)**: exact existing `QUAD-GRAPH` / `lien-he-do-thi` Entrance10 mapping, reviewer PASS; preserve R34 source corrections and original layer. These questions test distinct relationship tasks (setup, solve abscissae, tangency/repeated root), not general quadratic mastery.

## Overall 40-item ledger status

- **25/25 remaining candidates now academically triaged at item level**, in addition to previous 12/12 targeted QA triage; therefore **37/37** existing-Family candidate question structures have been inspected.
- **3 Owner HOLD**: `NUM02V1_142–144` (Grade-7 arithmetic roots) — keep ordinary formative availability; no Family creation.
- **1 explicit contested target**: `NUM02V1_137` computes signed rational arithmetic; reviewer suggestion `NUM-ORDER` (order of operations) does not target the principal skill reliably. Re-review `NUM-FRACTION-OPS`, which actually contains diagnostic `phep-tinh-so-huu-ti`, before accepting any target.
- **6 structural Registry-name conflicts**: `ALG04V2_133–138` divide by binomials, while `ALG-DIV-MONOMIAL` names monomial division. The same Family currently lists diagnostic `chia-da-thuc-mot-bien`, so a precise Family-scope decision is required rather than automatic rejection/credit.
- **30/37** other existing targets have prima facie question→diagnostic fit (25 here + _138 and four CT03). They are NOT approved for assessed Skill credit. The other seven have open material alignment/scope questions.
- **Reviewer outcomes remain** 6 PASS + 31 REVISE + 3 root REVISE/HOLD. Reviewer PASS is not production approval.
- **Owner item-to-Family assessed approvals: 0.** Stable option IDs (R37), R19/R20 exact-action evidence, Safari canary and rollout approval remain separate gates. No bank, legacy skill tag, Registry/Taxonomy, runtime, learner history, Readiness/Mastery, backfill, or PR merge authorization.

Next: reconcile and independently review specifically the 1 arithmetic mapping and 6 polynomial-division Family-scope conflicts; then prepare 37/37 explicit Owner disposition sheet before any implementation.
