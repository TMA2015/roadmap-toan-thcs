# R38 consolidation · 40/40 canonical items, no learning block

**Date:** 2026-10-20  
**Scope:** 40 existing canonical MCQs in PR #524; 16 independent NotebookLM Family-role R1/R2 decisions + 24 currently source-verified items. **Not 40 new exercises and not an authorization of 40 assessed Family mappings.**  
**Operational decision:** `ALL_40_NORMAL_PRACTICE_AVAILABLE`, `NO_FAMILY_DEPENDENCY_FOR_FORMATIVE_COUNTER`.  
**Academic status:** `16_INDEPENDENT_ITEM_ROLE_REVIEWS` + `24_INTERNAL_RECONCILIATIONS_NOT_INDEPENDENT_ROLE_APPROVAL`.  
**Production gates:** `0_NEW_ASSESSED_FAMILY_AUTHORIZATIONS`, `0_NEW_MASTERY_READINESS_CREDITS`, `0_REGISTRY_EDITS`, `NO_LEARNER_HISTORY_CHANGE`.

## Why this closes the practical blocker

Owner preference is to **finish the backlog without holding exercises hostage to perfect Skill Family classification**. The pending `NUM02V1_142–144` are valid and already served in normal Practice; their previous Owner HOLD applied **only to assessed-Family credit**, not the ability to teach and practice Grade-7 square roots. The six CT04 binomial-division questions also remain **normal formative Practice**, but must not count towards the more narrowly named `ALG-DIV-MONOMIAL` ("divide polynomial by monomial") Family.

This dossier does **not** claim that unsupported Family roles are independently cleared for Mastery, and it does not silently reverse previous R1/R2 academic verdicts. Instead it removes the false dependency between getting a useful **single formative Practice counter** and finishing a 131-Family assessed taxonomy.

**Active manifest source check (GitHub `main`, 2026-10-20):** all six pinned source chunks appear in live Practice bank manifests: CT02 `02-so-va-phep-tinh-v1.manifest.json` (147 questions), CT03 `03-ti-le-ti-le-thuc-v1.manifest.json` (124 questions), CT04 `04-bieu-thuc-dai-so-v2.manifest.json` (138 questions), CT12 `12-phuong-trinh-bac-hai-viete-v1.manifest.json` (123 questions). This establishes inclusion in current candidate banks; it **does not independently prove** that every one of the 40 items appeared in a particular learner session. Randomly sampled sessions may not surface a specific ID immediately.

**Final operational dispositions for the 40 old questions:** 31 with plausible *existing* Registry Family candidates (still not enabled/Owner-signed as assessed); 9 with **no assessed Family assignment**, still practiceable. The nine are 3 Grade-7 square-root items `NUM02V1_142–144` and all six binomial-division items `ALG04V2_133–138`.

## Reproducible source evidence

- Previous exact-40 source candidate: `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json`, blob `5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad` from Draft PR #524.
- Existing 131-Family Registry: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`, blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`, `runtime_enabled=false`.
- Family findings R1 (8/8, 5 role PASS / 1 REVISE / 2 HOLD): [Draft #547](https://github.com/TMA2015/roadmap-toan-thcs/pull/547).
- Family findings R2 (8/8, 6 role REVISE / 2 HOLD): [Draft #548](https://github.com/TMA2015/roadmap-toan-thcs/pull/548), `MATH-R38-8ITEM-FAMILY-ROLE-R2_NOTEBOOKLM_VERDICT_RECEIPT.md`.
- Remaining 24: question, options, correct-answer indexes, explanations and exact current source Git blob SHA were checked against **main** on 2026-10-20; no re-authoring. New S1 textbook scans or independent R3/R4/R5 Family-role verdicts have **not** occurred; do not call those 24 independent PASS.

| Canonical immutable Practice source | Verified Git blob SHA | Relevant question scope |
|---|---|---|
| `docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json` | `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` | 12 exact original items |
| `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json` | `c39c177609cd5440de98b81461896c80f7166121` | 12 exact original items |
| `docs/assets/data/practice/02-so-va-phep-tinh-v1-07.json` | `71b6fe79a5a5778dd9dcdefa00681e6f73f8b23e` | 3 exact original items |
| `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json` | `759fd83900fa5b64d5db7f6deb2197c343c46732` | 4 exact original items |
| `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json` | `34e52b7900f77815e0bff79ba82fdb491d6794b3` | 6 exact original items |
| `docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1-05.json` | `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08` | 3 exact original items |

## Forty exact ID decisions (normal formative Practice allowed for **all**)

| Existing question ID | Topic/layer | Role source | Proposed existing assessed Family, **not enabled** | Operational role |
|---|---|---|---|---|
| `NUM02V1_121` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_122` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_123` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_124` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-SETS` | REVISE |
| `NUM02V1_125` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_126` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_127` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_128` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_129` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_130` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-SETS` | REVISE |
| `NUM02V1_131` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_132` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_133` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-FRACTION-OPS` | REVISE |
| `NUM02V1_134` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-FRACTION-OPS` | PROPOSED_ONLY |
| `NUM02V1_135` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-FRACTION-OPS` | PROPOSED_ONLY |
| `NUM02V1_136` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-FRACTION-OPS` | REVISE |
| `NUM02V1_137` | CT02 / KNTT-Core | NotebookLM R1 | `NUM-FRACTION-OPS` | REVISE |
| `NUM02V1_138` | CT02 / KNTT-Core | NotebookLM R1 | `NUM-POWER` | PASS |
| `NUM02V1_139` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-SETS` | REVISE |
| `NUM02V1_140` | CT02 / KNTT-Core | NotebookLM R2 | `NUM-SETS` | REVISE |
| `NUM02V1_141` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-SETS` | PROPOSED_ONLY |
| `NUM02V1_142` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `NUM02V1_143` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `NUM02V1_144` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `NUM02V1_145` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-ABS` | PROPOSED_ONLY |
| `NUM02V1_146` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-ABS` | PROPOSED_ONLY |
| `NUM02V1_147` | CT02 / KNTT-Core | 2026-10-20 internal review / previous V2 | `NUM-ABS` | PROPOSED_ONLY |
| `RAT03V1_121` | CT03 / KNTT-Core | NotebookLM R1 | `RATIO-DIRECT` | PASS |
| `RAT03V1_122` | CT03 / KNTT-Core | NotebookLM R1 | `RATIO-BASIC` | PASS |
| `RAT03V1_123` | CT03 / KNTT-Core | NotebookLM R1 | `RATIO-DIRECT` | PASS |
| `RAT03V1_124` | CT03 / KNTT-Core | NotebookLM R1 | `RATIO-BASIC` | PASS |
| `ALG04V2_133` | CT04 / KNTT-Core | NotebookLM R1 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `ALG04V2_134` | CT04 / KNTT-Core | 2026-10-20 internal review / previous V2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `ALG04V2_135` | CT04 / KNTT-Core | NotebookLM R2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `ALG04V2_136` | CT04 / KNTT-Core | NotebookLM R1 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `ALG04V2_137` | CT04 / KNTT-Core | NotebookLM R2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `ALG04V2_138` | CT04 / KNTT-Core | 2026-10-20 internal review / previous V2 | None | FORMATIVE_ONLY_NO_ASSESSED_FAMILY |
| `QUA12V1_121` | CT12 / Entrance10 | 2026-10-20 internal review / previous V2 | `QUAD-GRAPH` | PROPOSED_ONLY |
| `QUA12V1_122` | CT12 / Entrance10 | 2026-10-20 internal review / previous V2 | `QUAD-GRAPH` | PROPOSED_ONLY |
| `QUA12V1_123` | CT12 / Entrance10 | 2026-10-20 internal review / previous V2 | `QUAD-GRAPH` | PROPOSED_ONLY |

### Details for the 24 not covered by R1/R2 independent item-role review

The following are **internal source and mathematical-operation checks**, not independent NotebookLM academic Family signoffs. All have existing prior content/layer academic approvals from R33/R35; individual precise Family roles stay unactivated. Here “plausible” means category fits the displayed Registry topic/layer/subskill, **not proven independent assessed Mastery**.

| Exact ID | Original mathematical task | Correct option (verified source) | Internal disposition and reasoning |
|---|---|---|---|
| `NUM02V1_121` | \|L\|à\|m\| \|t\|r\|ò\|n\| \|5\|,\|8\|3\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|m\|ư\|ờ\|i\|.\| | \|5\|,\|8\| (slot 0) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_122` | \|L\|à\|m\| \|t\|r\|ò\|n\| \|1\|2\|,\|3\|4\|9\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|t\|r\|ă\|m\|.\| | \|1\|2\|,\|3\|5\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_123` | \|L\|à\|m\| \|t\|r\|ò\|n\| \|4\|,\|2\|6\|5\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|t\|r\|ă\|m\|.\| | \|4\|,\|2\|7\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_125` | \|L\|à\|m\| \|t\|r\|ò\|n\| \|7\|3\|,\|4\|8\|6\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|đ\|ơ\|n\| \|v\|ị\|.\| | \|7\|3\| (slot 0) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_126` | \|L\|à\|m\| \|t\|r\|ò\|n\| \|7\|3\|,\|5\|8\|6\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|đ\|ơ\|n\| \|v\|ị\|.\| | \|7\|4\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_127` | \|M\|ộ\|t\| \|đ\|o\|ạ\|n\| \|d\|â\|y\| \|d\|à\|i\| \|2\|,\|7\|4\|6\| \|m\|.\| \|L\|à\|m\| \|t\|r\|ò\|n\| \|đ\|ộ\| \|d\|à\|i\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|t\|r\|ă\|m\| \|m\|é\|t\|.\| | \|2\|,\|7\|5\| \|m\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_128` | \|M\|ộ\|t\| \|m\|ó\|n\| \|h\|à\|n\|g\| \|c\|ó\| \|g\|i\|á\| \|4\|8\|.\|6\|5\|0\| \|đ\|ồ\|n\|g\|.\| \|L\|à\|m\| \|t\|r\|ò\|n\| \|g\|i\|á\| \|đ\|ế\|n\| \|n\|g\|h\|ì\|n\| \|đ\|ồ\|n\|g\| \|g\|ầ\|n\| \|n\|h\|ấ\|t\|.\| | \|4\|9\|.\|0\|0\|0\| \|đ\|ồ\|n\|g\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_129` | \|Ư\|ớ\|c\| \|l\|ư\|ợ\|n\|g\| \|1\|9\|,\|8\| \|+\| \|3\|0\|,\|3\| \|b\|ằ\|n\|g\| \|c\|á\|c\|h\| \|l\|à\|m\| \|t\|r\|ò\|n\| \|m\|ỗ\|i\| \|s\|ố\| \|đ\|ế\|n\| \|s\|ố\| \|n\|g\|u\|y\|ê\|n\| \|g\|ầ\|n\| \|n\|h\|ấ\|t\|.\| | \|5\|0\| (slot 2) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_131` | \|V\|ì\| \|s\|a\|o\| \|6\|,\|2\|4\|1\| \|l\|à\|m\| \|t\|r\|ò\|n\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|t\|r\|ă\|m\| \|b\|ằ\|n\|g\| \|6\|,\|2\|4\|?\| | \|V\|ì\| \|c\|h\|ữ\| \|s\|ố\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|n\|g\|h\|ì\|n\| \|l\|à\| \|1\| \|<\| \|5\| \|n\|ê\|n\| \|g\|i\|ữ\| \|n\|g\|u\|y\|ê\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|t\|r\|ă\|m\|.\| (slot 0) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_132` | \|S\|ố\| \|n\|à\|o\| \|s\|a\|u\| \|đ\|â\|y\| \|k\|h\|i\| \|l\|à\|m\| \|t\|r\|ò\|n\| \|đ\|ế\|n\| \|h\|à\|n\|g\| \|p\|h\|ầ\|n\| \|m\|ư\|ờ\|i\| \|t\|h\|ì\| \|đ\|ư\|ợ\|c\| \|6\|,\|4\|?\| | \|6\|,\|3\|6\| (slot 1) | Decimal rounding / estimation operation; existing `NUM-SETS` has diagnostic subskill `lam-tron-so`. Quantitative rounding alone does not justify separate Family. |
| `NUM02V1_134` | \|T\|í\|n\|h\| \|\|(\|\|f\|r\|a\|c\|7\|9\|-\|\|l\|e\|f\|t\|(\|-\|\|f\|r\|a\|c\|2\|9\|\|r\|i\|g\|h\|t\|)\|\|)\|.\| | \|\|(\|1\|\|)\| (slot 0) | Signed-rational subtraction or multiplication; `NUM-FRACTION-OPS` and existing `phep-tinh-so-huu-ti` diagnostic subskill align. |
| `NUM02V1_135` | \|T\|í\|n\|h\| \|\|(\|(\|-\|\|f\|r\|a\|c\|5\|6\|)\|\|c\|d\|o\|t\|\|f\|r\|a\|c\|9\|{\|1\|0\|}\|\|)\|.\| | \|\|(\|-\|\|f\|r\|a\|c\|3\|4\|\|)\| (slot 0) | Signed-rational subtraction or multiplication; `NUM-FRACTION-OPS` and existing `phep-tinh-so-huu-ti` diagnostic subskill align. |
| `NUM02V1_141` | \|T\|r\|o\|n\|g\| \|c\|á\|c\| \|s\|ố\| \|\|(\|\|s\|q\|r\|t\|2\|,\|\|s\|q\|r\|t\|9\|,\|\|f\|r\|a\|c\|5\|3\|,\|0\|,\|(\|1\|2\|)\|\|)\|,\| \|c\|ó\| \|b\|a\|o\| \|n\|h\|i\|ê\|u\| \|s\|ố\| \|v\|ô\| \|t\|ỉ\|?\| | \|1\| (slot 0) | Count irrational numbers while distinguishing sqrt(non-square) from sqrt(perfect-square); `NUM-SETS` and `so-vo-ti` align. |
| `NUM02V1_142` | \|T\|í\|n\|h\| \|\|(\|\|s\|q\|r\|t\|{\|1\|2\|1\|}\|\|)\|.\| | \|1\|1\| (slot 0) | Grade-7 **principal arithmetic square root**, existing legacy supporting subskill but no assessed Grade-7 Family. Remains regular Practice; no new 132nd Family. |
| `NUM02V1_143` | \|T\|í\|n\|h\| \|\|(\|\|s\|q\|r\|t\|{\|\|f\|r\|a\|c\|{\|2\|5\|}\|{\|4\|9\|}\|}\|\|)\|.\| | \|\|(\|\|f\|r\|a\|c\|5\|7\|\|)\| (slot 0) | Grade-7 **principal arithmetic square root**, existing legacy supporting subskill but no assessed Grade-7 Family. Remains regular Practice; no new 132nd Family. |
| `NUM02V1_144` | \|S\|ố\| \|n\|à\|o\| \|t\|h\|ỏ\|a\| \|\|(\|x\|=\|\|s\|q\|r\|t\|{\|1\|6\|}\|\|)\|?\| | \|4\| (slot 0) | Grade-7 **principal arithmetic square root**, existing legacy supporting subskill but no assessed Grade-7 Family. Remains regular Practice; no new 132nd Family. |
| `NUM02V1_145` | \|T\|í\|n\|h\| \||\|−\|1\|2\||\|.\| | \|1\|2\| (slot 0) | Absolute value / equation based on distance to 0; existing `NUM-ABS` family fits; previous V2 reviewer PASS, Owner assessed mapping still not signed. |
| `NUM02V1_146` | \|S\|ố\| \|n\|à\|o\| \|c\|ó\| \|g\|i\|á\| \|t\|r\|ị\| \|t\|u\|y\|ệ\|t\| \|đ\|ố\|i\| \|b\|ằ\|n\|g\| \|7\|?\| | \|−\|7\| (slot 0) | Absolute value / equation based on distance to 0; existing `NUM-ABS` family fits; previous V2 reviewer PASS, Owner assessed mapping still not signed. |
| `NUM02V1_147` | \|K\|h\|ẳ\|n\|g\| \|đ\|ị\|n\|h\| \|n\|à\|o\| \|đ\|ú\|n\|g\| \|v\|ề\| \|p\|h\|ư\|ơ\|n\|g\| \|t\|r\|ì\|n\|h\| \||\|x\||\|=\|4\|?\| | \|x\|=\|4\| \|h\|o\|ặ\|c\| \|x\|=\|−\|4\| (slot 0) | Absolute value / equation based on distance to 0; existing `NUM-ABS` family fits; previous V2 reviewer PASS, Owner assessed mapping still not signed. |
| `ALG04V2_134` | \|T\|í\|n\|h\| \|\|(\|(\|x\|^\|2\|-\|4\|)\|:\|(\|x\|-\|2\|)\|\|)\|.\| | \|\|(\|x\|+\|2\|\|)\| (slot 0) | Divisor is a binomial; does not match the **monomial** in ALG-DIV-MONOMIAL. Formative Practice only; do not invent a new Family. |
| `ALG04V2_138` | \|N\|ế\|u\| \|\|(\|P\|(\|x\|)\|=\|(\|x\|-\|3\|)\|(\|x\|^\|2\|+\|2\|x\|+\|1\|)\|\|)\|,\| \|t\|h\|ì\| \|\|(\|P\|(\|x\|)\|:\|(\|x\|-\|3\|)\|\|)\| \|b\|ằ\|n\|g\|:\| | \|\|(\|x\|^\|2\|+\|2\|x\|+\|1\|\|)\| (slot 0) | Divisor is a binomial; does not match the **monomial** in ALG-DIV-MONOMIAL. Formative Practice only; do not invent a new Family. |
| `QUA12V1_121` | \|P\|h\|ư\|ơ\|n\|g\| \|t\|r\|ì\|n\|h\| \|h\|o\|à\|n\|h\| \|đ\|ộ\| \|g\|i\|a\|o\| \|đ\|i\|ể\|m\| \|c\|ủ\|a\| \|p\|a\|r\|a\|b\|o\|l\| \|y\|=\|x\|²\| \|v\|à\| \|đ\|ư\|ờ\|n\|g\| \|t\|h\|ẳ\|n\|g\| \|y\|=\|3\|x\|+\|4\| \|l\|à\| \|p\|h\|ư\|ơ\|n\|g\| \|t\|r\|ì\|n\|h\| \|n\|à\|o\|?\| | \|x\|²\|−\|3\|x\|−\|4\|=\|0\| (slot 0) | Compute/interprete quadratic-graph intersections or tangency. Existing `QUAD-GRAPH` / Entrance10 plausible; previous R38 V2 PASS is not Owner authorization. |
| `QUA12V1_122` | \|P\|a\|r\|a\|b\|o\|l\| \|y\|=\|x\|²\| \|v\|à\| \|đ\|ư\|ờ\|n\|g\| \|t\|h\|ẳ\|n\|g\| \|y\|=\|x\|+\|2\| \|c\|ắ\|t\| \|n\|h\|a\|u\| \|t\|ạ\|i\| \|h\|a\|i\| \|đ\|i\|ể\|m\|.\| \|H\|o\|à\|n\|h\| \|đ\|ộ\| \|h\|a\|i\| \|g\|i\|a\|o\| \|đ\|i\|ể\|m\| \|l\|à\|:\| | \|−\|1\| \|v\|à\| \|2\| (slot 0) | Compute/interprete quadratic-graph intersections or tangency. Existing `QUAD-GRAPH` / Entrance10 plausible; previous R38 V2 PASS is not Owner authorization. |
| `QUA12V1_123` | \|Đ\|ư\|ờ\|n\|g\| \|t\|h\|ẳ\|n\|g\| \|y\|=\|2\|x\|−\|1\| \|t\|i\|ế\|p\| \|x\|ú\|c\| \|v\|ớ\|i\| \|p\|a\|r\|a\|b\|o\|l\| \|y\|=\|x\|²\| \|v\|ì\| \|p\|h\|ư\|ơ\|n\|g\| \|t\|r\|ì\|n\|h\| \|h\|o\|à\|n\|h\| \|đ\|ộ\| \|g\|i\|a\|o\| \|đ\|i\|ể\|m\|:\| | \|(\|x\|−\|1\|)\|²\|=\|0\| \|c\|ó\| \|n\|g\|h\|i\|ệ\|m\| \|k\|é\|p\| (slot 0) | Compute/interprete quadratic-graph intersections or tangency. Existing `QUAD-GRAPH` / Entrance10 plausible; previous R38 V2 PASS is not Owner authorization. |

## Counts, holds, and what genuinely remains

- **Original R38 40/40** exactly partition: CT02 **27**, CT03 **4**, CT04 **6**, CT12 **3**.
- **Independent reviewed Family-role outcomes (16):** R1 5 PASS / 1 REVISE / 2 HOLD; R2 0 PASS / 6 REVISE / 2 HOLD. The 4 HOLD are **not** held from normal Practice.
- **Internally source-checked but not independently Family-role-reviewed (24):** 19 have proposed existing Family matches, 5 are *formative-only* (3 principal square roots + 2 binomial divisions).
- Combined **31 plausible/proposed existing Family assignments** and **9 formative-only without assessed Family**. This is an **operational closure** of the former 24-item work queue for the one formative counter; it is **not an independent 40/40 Family academic acceptance** or assessed credit permission.
- The previous three square-root “HOLD” and the R1/R2 four binomial HOLDS are retained as records of **assessed mapping denial**, but recast as **resolved normal Practice without an assessed Family** for product operation. The two CT04 leftovers are treated likewise by internal reasoning, not falsely credited as independent reviewer HOLD verdicts.
- No change to authored questions, existing 131-Family Registry, `tags.skill`, stable option identity, learner grades, user history, Readiness, Core or Written. No release permission inferred from PR documentation.

## Now prioritize the actual outstanding product work

1. **PR #525**: the Owner-approved conceptual simplification to a **single live formative Practice counter** and one Skill Map display source, independent of precise assessed Family. Keep Grade-7 square roots and binomial division in ordinary Practice counts; never display them as validated assessed Family mastery. Before activating learner-facing code, check current main integration, visual QA on PC/iPad Safari, local backup/restore and user signoff.
2. **Written/conversion backlog**: reuse reconciled historical paper sources for interactive or Written exercises **only when a distinct pedagogical problem type is absent**, avoid clone inflation and preserve 69 published Written items; review 5–10 varied candidates **as one batch** where warranted.
3. Academic assessed Family work R37/R38 is deferred, **not part of the critical path** for Practice. Do not reopen 24 separate review requests merely to turn on the formative counter.

```text
PACKET_ID|MATH-R38-40-FORMATIVE-OPERATIONAL-CLOSURE-R0-20261020
HISTORICAL_EXPECTED=40
HISTORICAL_SOURCE_VERIFIED=40
INDEPENDENT_FAMILY_ROLE_REVIEWED=16
INTERNAL_SOURCE_MATH_TRIAGED_NOT_INDEPENDENT=24
PROPOSED_EXISTING_FAMILY_FOR_FUTURE_ASSESSMENT=31
FORMATIVE_ONLY_NO_ASSESSED_FAMILY=9
OWNER_ASSESSED_MAPPING_APPROVED=0
PRODUCTION_SKILL_FAMILY_CREDIT_ENABLED=0
ALL_40_NORMAL_PRACTICE_AVAILABLE|YES
OPERATIONAL_VERDICT|COMPLETE_FOR_FORMATIVE_PRACTICE_NOT_ASSESSED_MASTERY
```
