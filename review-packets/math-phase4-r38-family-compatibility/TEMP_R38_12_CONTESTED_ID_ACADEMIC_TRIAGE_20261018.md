# R38 — Targeted item-level academic triage of 12 disputed candidate mappings
Date: 2026-10-18. QA-only, not independent academic PASS or Owner credit authorization.
Source: exact question/answer and approved layer shown in TEMP_NOTEBOOKLM_R38_SOURCE_B_40_EXACT_ITEMS_AND_MAPPING_20261018.md; candidate IDs from corrected NotebookLM V2.

## Findings
| Item | Mathematical demand in pinned question | Proposed Family | Preliminary evidence assessment |
|---|---|---|---|
| NUM02V1_137 | Compute 1 − (2/3)×(−3/4) = 3/2 | NUM-ORDER | **MISMATCH**: arithmetic, not comparison/ordering; re-evaluate NUM-FRACTION-OPS, no auto reassignment |
| NUM02V1_138 | Compute (−1/2)^3 = −1/8 | NUM-POWER | **PLAUSIBLE** primary power-of-rational demand; await exact subskill/role signoff |
| RAT03V1_121 | Recipe 300g/4 people → 10 people | RATIO-DIRECT | **PLAUSIBLE** direct proportion; legacy RATIO-MODEL Entrance10 cannot be inherited |
| RAT03V1_122 | Scale 1:50,000 and 3cm → 1.5km | RATIO-BASIC | **PLAUSIBLE** ratio scale, but conversion and map representation need explicit Family-scope check |
| RAT03V1_123 | 5 notebooks cost 60k → 8 cost 96k | RATIO-DIRECT | **PLAUSIBLE** direct proportionality/unit rate |
| RAT03V1_124 | 12cm to 3m → ratio 1:25 | RATIO-BASIC | **PLAUSIBLE** ratio reduction after converting units |
| ALG04V2_133 | (x²+3x+2)/(x+1) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor x+1 is a binomial, not a monomial |
| ALG04V2_134 | (x²−4)/(x−2) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor x−2 binomial; factoring difference of squares |
| ALG04V2_135 | (2x²+5x+2)/(2x+1) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor 2x+1 binomial |
| ALG04V2_136 | (x³−8)/(x−2) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor x−2 binomial; difference of cubes |
| ALG04V2_137 | (x³+x²−x−1)/(x+1) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor x+1 binomial; grouping |
| ALG04V2_138 | P(x)=(x−3)(x²+2x+1), find P/(x−3) | ALG-DIV-MONOMIAL | **FAMILY-NAME MISMATCH**: divisor x−3 binomial, here quotient visible from factored form |

## Actionable decisions for next review
- NUM02V1_137: corrected NotebookLM V2 `NUM-ORDER` suggestion is **not defensible as a primary assessed Family based on the actual question**. Treat this target as REVISE_REQUIRED / item-role HOLD until precise family alignment is independently checked, not as 37/37 clean approvals.
- NUM02V1_138: `NUM-POWER` passes a first mathematical fit check only; evidence role remains pending.
- 4 CT03 candidates: structure fits their proposed broad families on first inspection, but existing Registry diagnostic scope and source pins must be checked before signing item-level roles. Owner-approved KNTT-Core remains unchanged.
- All 6 ALG04 questions divide by **binomials**. The Registry may contain `chia-da-thuc-mot-bien` as reviewed diagnostic subskill of `ALG-DIV-MONOMIAL`; that crosswalk needs explicit academic governance. Do not infer `ASSESSED_SKILL` solely from diagnostic subskill membership or rename historical Family silently.
- One question with a valid answer and correct source layer can still have an invalid assessed mapping. No changes to answer, question, Registry or learner evidence.

## Count and boundaries
12/37 contested candidates triaged individually (1 mismatched target; 1 plausible; 4 plausible conditional; 6 family-name conflicts). Remaining 25 pending. Exactly NUM02V1_142–144 are under Owner-selected interim root HOLD; this document flags **additional candidate-level role uncertainty**, not a request to HOLD their normal Practice.
No production writes, no Skill credit, no Mastery/Readiness/history, no PR merge authorization.
