# NotebookLM W1 R2a — Owner-submitted erratum & grading contract reconciliation

**Packet:** `MATH-EXERCISE-RECLASSIFY-W1-20261015`  
**Evidence:** Owner pasted NotebookLM's report "BÁO CÁO PHẢN BIỆN BỔ SUNG R2a (ERRATUM & GRADING CONTRACT AUDIT)" into the Math App conversation on 2026-10-15. This is a **source-faithful working reconciliation**; the original chat paste remains the primary R2a receipt. The original R2 report is separately retained verbatim at `review-packets/math-exercise-w1-20261015/NOTEBOOKLM_W1_R2_OWNER_SUBMITTED_20261015.md` and must **not** be rewritten.

## R2a academic outcome versus production eligibility

| Evidence layer | PASS | REVISE | Insufficient | Status |
| --- | ---: | ---: | ---: | --- |
| R2 original | 16 | 3 | 0 | Academic-items pass; 3 alias/pointer changes pending; report contained one wrong-key sign and two underspecified graders |
| **R2a erratum** | **14** | **5** | **0** | **ACADEMIC_ITEMS_PASS**, `REVISE_POINTERS_AND_GRADING_CONTRACTS_REQUIRED` for deployment |

Three original canonical reuse cases still need pointers with preserved historical IDs:

- `04-WR-02` → `ALG04MICRO_005` (exact original mathematical task).
- `02-G6-WR-02` → `WX02-NUM-001` (same 36 pens/48 notebooks, deeper step-by-step written rubric).
- `02-G6-WR-04` → `WX02-NUM-002` (same 800,000đ/15% situation, deeper written rubric).

## The three item-level errata

### `04-WR-01`: correct source key **+7**, item PASS

Original source `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md` defines `P(x)=4x^3-2x+7` and explicitly gives degree 3, coefficient of x³ 4, constant **+7**. The independent R2 report wrote **−7** in error. NotebookLM R2a confirms this was a report typo, not an error in the authored learner source. Exact three independent numeric fields: `3`, `4`, `7` or `+7`; reject `-7`. Claimed S1 evidence: Toán 7 KNTT tập 2, chương VII, bài 25, p.25–30 (coefficient discussion p.28–29). This S1 citation comes from the reviewer, not a new manual PDF audit.

### `03-M1-01`: `REVISE` until a strict proportion tile contract is implemented

Original task: `Lập tỉ lệ thức từ 3·20 = 4·15`. The ratio builder must fill four ordered positions `a/b = c/d` using exactly once **each** of 3,4,15,20; denominators `b,d` must not be 0; then compare exact integer cross-products `a*d === b*c`.

- Accept `3/4 = 15/20`, `20/15 = 4/3`, the two other canonical forms and side swaps (8 valid ordered permutations, 4 up to swapping sides).
- Reject `1/1 = 60/60` (incorrect source-multiset), `3/20 = 4/15` (unequal cross-products), `3/3 = 20/20` (repeats).
- Use accessible tile selection for touch, keyboard and mouse. Do not use arbitrary free-entry as a loophole around the source multiset.
- Claimed S1 evidence: Toán 7 KNTT tập 2, chương VI, bài 20, p.4–7.

### `21-M4-01`: `REVISE` until exact one-decimal rounded-percentage grading

Source raw data: `5,6,6,7,7,7,8,8,8,8,9,9`; frequency counts for `5,6,7,8,9` are `1,2,3,4,2`, total 12. Percent outputs rounded to **one decimal place** are **8.3, 16.7, 25.0, 33.3, 16.7 (%)**.

- Accept `8,3`, `8.3`, `8,3%`, `8.3%` (percent sign optional if column labels already include it), similarly for other cells.
- Reject `8,4` and `16,6`; do **not** apply the original loose `±0.1 percentage points` rule to unrounded exact results. Accept `25` and `25,0`.
- Require all five percent fields; absence is `INCOMPLETE`.
- **Additional source-scope risk for implementation:** The *original* task says to create **both** a frequency and percentage table, while R2a explicitly describes only five percentage fields. A five-percent-only grader cannot establish that the student formed the complete frequency table. Therefore research code tests a **ten-field candidate** (five frequencies plus five percentages), but **this expanded UI/contract is not academically approved by R2a alone**. Reviewer or owner must resolve the source objective and field count before live activation.
- Claimed S1 evidence: Toán 9 KNTT tập 2, chương VII, bài 19, p.43–48 (example p.43–44).

## Existing separate exact-rational research engine

`scripts/prototypes/exact-rational-response-v0.cjs` already parses and compares **exact rational values** with both comma/dot decimals. Preserve mathematically equivalent ratios unless an item explicitly asks for simplest fractional form. The new W1 R2a prototype is **not** a replacement engine for independent Core Readiness; it uses this existing parser only as a pure comparator on percentage values.

## Controlled release and immutable history

- **19/75 original questions** reviewed at W1; **56** remain to be classified. No broad legacy drawer deletion or mutation of the current source Markdown.
- `ACADEMIC_ITEMS_PASS` pertains to the question and claimed syllabus evidence; 5 `REVISE` blockers and practical accessibility, independent testing, alias routing and owner visual QA remain.
- Research-only scorers and their fixtures live under `scripts/prototypes/` and `scripts/test-*.js` and are **not imported by MkDocs**.
- All new practice items must use approved new immutable IDs; canonical reuse cases must reference original IDs without duplicating content; no historical answer grade or learner attempt changes.
- Micro keys must not be added to Core Readiness or mixed-composite exams without a separate assessment blueprint/academic gate.

**Next gate:** run source-locked CI, verify full R2a overlay source-ID verdict changes, test both correct and counterexample responses, reconcile five-field vs ten-field statistics scope, then schedule a targeted owner UX check before any learner import.
