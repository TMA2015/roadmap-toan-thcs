# W1 Wave 4 — CĐ21 frequency-table source lock and grading contract (2026-10-15)

Status: candidate only; **CI and owner preview QA required before merging**.
Base: `main` at `8471492141a1bc9f220a58551dd7456fec42229b`.
Source review: NotebookLM R2a owner-submitted `MATH-EXERCISE-RECLASSIFY-W1-20261015`; `docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json`.
No independent textbook PDF re-audit claimed.

## Two approved source tasks, carefully preserved

| Written source | Raw data | Values / expected frequencies | Input fields |
|---|---|---|---|
| `21-M2-01` (PASS) | `6,7,8,8,9,8,7` | `6:1;7:2;8:3;9:1` | 4 |
| `21-M3-01` (PASS) | `6,7,7,8,8,8,9,9,10,8` | `6:1;7:2;8:4;9:2;10:1`, total `10` | 6 |

The original learner task says *lập bảng tần số* and M3 additionally says *kiểm tra tổng*. These are concrete frequency-table exercises, not percentage tasks. Avoid hidden columns/implicit partial credit. Each row requires an explicit answer. M3 has a mandatory `Tổng` row to test the requested consistency check.

The source IDs remain unchanged in `docs/kien-thuc/21-thong-ke/bai-tap.md`. New immutable formative variants:
- `STA21-RICH-W1-01-V1` ← `21-M2-01`
- `STA21-RICH-W1-02-V1` ← `21-M3-01`

They are Core-Support (grade 9 source alignment), **not automatic Core Readiness**, and are kept separately from the unchanged 132 legacy MCQs. A new CĐ21 v2 manifest adds two opt-in items (134 total), while the original v1 manifest and learner history remain intact.

## Exact answer contract and accessibility

- Reuse `numeric_fields` deterministic exact-rational grader, with 4 or 6 fields (supported <=6).
- The purely presentational `answer_contract.table_view` metadata defines two visible column headers and one row label per input. Each input has an accessible label, with `<th scope=row>` and `<th scope=col>` semantics.
- Row order is frozen by source and by grader field order. No reliance on AI or generic free-text interpretation.
- Accept exact numeric equivalents such as `2`, `2,0`, `4/2` where equal; reject any wrong frequency/total, extra/missing field, zero denominator or text.
- Empty single cell = INCOMPLETE, **no learner attempt charged**. Full wrong table is INCORRECT; all correct is CORRECT. No silent partial mastery inference.
- Mobile 390px and desktop test, real table DOM, persistence after refresh and preservation of MCQ and assessment histories are mandatory.
- Prior MCQ checks about interpreting a frequency are not the same cognitive task as organizing **all** data into a table; these two source cases are not exact clones of live question strings.

## Blocked candidates remain blocked

`21-M4-01` stays REVISE. Its original objective requires **frequency and percentage** with one-decimal rounding. R2a does not authorize choosing five-only vs ten-field contract. Do not import, silently truncate, accept tolerance or add a new grader for it during this wave.

Other W1 candidates remain subject to per-source review, duplication tests, and owner QA. No changes to historical IDs, source paper content, legacy multiple choice sessions, independent Readiness, curriculum exams or mastery logic.
