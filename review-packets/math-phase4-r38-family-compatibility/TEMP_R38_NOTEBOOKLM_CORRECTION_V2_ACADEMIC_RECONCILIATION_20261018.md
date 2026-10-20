# R38 — Reconciliation of NotebookLM targeted Family correction V2 (2026-10-18)

**Status:** independent reviewer correction **received**; **not** Owner Family mapping authorization. All changes in this PR are receipts, read-only audits, tests, and review notes.

**Packet:** `MATH-R38-R27-40-SKILL-FAMILY-CORRECTION-20261018`.

**Original owner-pasted reviewer document:** `Văn bản đã dán (1)(20261018-150649).txt`, 25,977 UTF-8 bytes, 231 lines, SHA-256 `94c9a7fc256c2e0940a9e989a0bc7d5a5ddfece825dd646dbb9da2cb506d0a26`. This upload contains **three concatenated versions**. The first two end in the middle of a table row (not a clean finalized report). The **final complete 40-item table is source lines 154–193**, and the machine-summary verdict is lines 199–228. The normalized machine-intake receipt is **not** a verbatim copy of the uploaded text. The previous R38 reviewer snapshot and all original R33/R35 academic approvals remain unchanged.

## Reviewer verdict and actual registry crosscheck

| Audit dimension | Verified |
|---|---:|
| Unique original item IDs in final table | 40 |
| Reviewer `PASS` / `REVISE` / `INSUFFICIENT_EVIDENCE` | **6 / 34 / 0** |
| Reviewer `REVISE` proposals to existing valid Family IDs | **31** |
| `REVISE` proposals needing new Family or HOLD | **3** |
| Proposed mapping targets existing Family ID in current Registry | **37** |
| New Family IDs approved into 131-Family Registry | **0** |
| Item-to-Family `ASSESSED_SKILL` mappings signed by Project Owner | **0** |
| Existing academic item-layer decisions from R33/R35 | **40 preserved** |

**Per-family corrected classification:** 15 `NUM-SETS`; 4 `NUM-FRACTION-OPS`; 1 `NUM-ORDER`; 1 `NUM-POWER`; 3 `NUM-ABS`; 2 `RATIO-DIRECT`; 2 `RATIO-BASIC`; 6 `ALG-DIV-MONOMIAL`; 3 `QUAD-GRAPH`; 3 `NEW_FAMILY_PROPOSAL`.

All 37 existing Family IDs were checked against exact current Registry `skill-taxonomy-v2-registry-r1.json`, blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`, including their **topic** and **curriculum layer**. The 3 `NEW_FAMILY_PROPOSAL` placeholders are **not valid production Family IDs**.

## What the correction resolves

- 12 rounding items `NUM02V1_121–132`: `NUM-SETS` with diagnostic subskill `lam-tron-so`, instead of nonexistent `NUM-ROUNDING`.
- 4 arithmetic items `NUM02V1_133–136`: `NUM-FRACTION-OPS`; `_137`: `NUM-ORDER`; `_138`: `NUM-POWER`.
- 3 irrational-number items `NUM02V1_139–141`: `NUM-SETS` with diagnostic subskill `so-vo-ti`.
- 3 absolute-value items `NUM02V1_145–147`: unchanged `NUM-ABS`, PASS.
- 4 CT03 proportionality items: `RAT03V1_121,123` → `RATIO-DIRECT`; `_122,124` → `RATIO-BASIC` (not nonexistent `RATIO-SCALE`). All four **already have Owner-approved KNTT-Core item layer**; changing their *Family target* is not permission to alter that layer or rewrite legacy `tags.skill`.
- 6 Grade-7 polynomial-division items `ALG04V2_133–138`: existing `ALG-DIV-MONOMIAL` has the `chia-da-thuc-mot-bien` diagnostic subskill. However, its *name* refers to division by a monomial, while these questions include division by a polynomial (binomial). This is an existing reviewed Grade-7 reconciliation compromise and remains an **item-level assessed-role validation issue**, not automatic assessed credit.
- 3 Grade-9 quadratic-graph items `QUA12V1_121–123`: unchanged `QUAD-GRAPH` (Entrance10), PASS. R34's approved source stem remains protected.

## Remaining academic decision — 3 Grade-7 square-root items

`NUM02V1_142`, `NUM02V1_143`, `NUM02V1_144` are academically approved **KNTT-Core Grade 7** source tasks. The reviewer proposes a new **`NUM-SQUARE-ROOT-INTRO`** Family (`NEW_FAMILY_PROPOSAL`, `ASSESSED_SKILL`), or holding them. Neither is a present Registry ID nor an Owner-approved mapping.

**Preferred design candidate to evaluate later:** introduce a narrowly defined *Grade-7 arithmetic-square-root* `KNTT-Core` Family `NUM-SQUARE-ROOT-INTRO` that assesses nonnegative principal square roots of perfect squares / simple fractions, and does not accidentally encompass Grade-9 radical manipulation or radical equations. Creation of this 132nd Family is a **separate Owner/academic structural approval**, not justified by a reviewer report alone. Do not auto-reuse `RAD-BASIC` from Grade-9 CT11. The alternative is `HOLD`/formative-only for these three, still preserving their academic item-layer PASS.

**All 40 mappings remain in candidate status** until Owner explicitly approves Family associations and a separate technical gate (R37 authored stable option IDs, R19 exact-action atomic persistence, source/route/device QA) is cleared. No mapping receipt justifies Skill, Readiness, Mastery, historical regrading, or retroactive credit.

## Evidence and QA

- R38 original 40 pinned current bank questions: `TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json`, blob `5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad`.
- Independent reviewer original invalid-IDs report: `TEMP_R38_USER_NOTEBOOKLM_40_ID_FAMILY_VERDICT_TRANSCRIPTION_20261018.json`, blob `b3ae2c4b450d6de9f4de56dc5e077d5914168825`, **retained as historical**.
- Current V2 reviewer correction machine-intake: `TEMP_R38_NOTEBOOKLM_CORRECTION_V2_40_VERDICT_INTAKE_20261018.json` pinned by source Git blob; original user-upload SHA is also preserved.
- Read-only JS `math-v2-r38-notebooklm-40-correction-v2-intake.js` and adversarial test verify **40 unique rows, 6/31/3 partition, Registry existence/layer/topic, exact base, zero authorizations**.
- Permanent [NotebookLM handoff rules](../../governance/NOTEBOOKLM_REVIEW_WORKFLOW.md) v1.1 in `main`: all **temporary NotebookLM input source** basenames `TEMP_*.md`, one file direct link; multiple files **one real ZIP**, brief prompt; no JSON handed to NotebookLM. This receipt's machine JSON is only for GitHub audit and **must not be handed as NotebookLM input**.

**Do not merge PR #524 without a separate instruction. No bank, Taxonomy runtime, live UI, learner store, or historical event change.**
