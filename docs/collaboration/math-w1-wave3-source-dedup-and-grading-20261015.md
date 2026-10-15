# Math W1 — Wave 3 source-lock, dedup and response-mode contract
Date: 2026-10-15
Status: CANDIDATE / CI + OWNER PREVIEW GATED
Parent version: `main` commit `2c22a1e5e2d3dd07fd005c23a802c3af48765579`.
Independent review: `docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json` (19 reviewed, 14 PASS, 5 REVISE). The S1 citations are reviewer claims, not a fresh manual PDF audit.

## Reuse decision: CĐ03 `03-M4-01`

The original 03-M4-01 question asks three class donations in ratio 3:4:5 totalling 1,440 books; quick answers 360/480/600. Existing live MCQ `RAT03V1_045` in `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-02.json` already asks **the same 1,440 split into 3:4:5 with the same ordered answer**. Therefore there is no new mathematics/problem-type coverage from an identical typed conversion. **Do not add another item in this wave**. Preserve the original written question and existing MCQ; possible future change to answer-mode mix requires broader pedagogy assessment and a reviewed plan to avoid redundant exposure.

## Wave 3 candidate: CĐ04 `04-WR-03`

Original published source: `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-03`.

Given `A=2x²−x+3`, `B=x²+4x−1`, subtract:
`A−B=2x²−x+3−(x²+4x−1)=x²−5x+4`.
- New immutable variant: `ALG04-RICH-W1-02-V1`.
- Formative practice `response_type=numeric_fields`: 3 explicit labels, expected `1`, `−5`, `4` (coefficients of `x²`, `x`, constant).
- Accept equivalent exact rational expressions for each numeric field: e.g. `2/2`, `-10/2`, `4,0`; reject `+5` and `-4`, missing fields and invalid strings.
- Input-mode intentionally scores coefficients, **not** full written algebraic reasoning. Retain original paper source, its hints and complete written route.
- Existing Written Library `WX04-ALG-001` teaches the same **method** but with different polynomials (`A=3x²−2x+4`, `B=x²+x−5`); it is neither an identical clone nor reason to re-ID the source.
- Add one immutable chunk to CĐ04 v4 manifest (139 → 140), keep v3 immutable, preserve former MCQ options/answers and student attempts.
- Grade 8 KNTT placement as claimed in R2a; source-task PASS does **not** itself clear implementation or independent Readiness.
- No new parser type or AI dependency: reuse approved pure numeric-fields grader.
- UI must show three distinct labelled fields, helpful explanation, incomplete guard, after-submit feedback, opt-in rich mode, and unchanged 10-MCQ normal sessions.
- Required gates: exact-head CI incl. desktop/390px browser, strict build, storage regression, owner preview QA, separate approval before merging and publishing. **Not yet live**.

## Historical protection

Do not change any old `item_id`, legacy written source, Micro/MCQ banks, Readiness, Mastery or historical scoring. The chosen candidate adds only one independent formative variant and does not authorize remaining W1 conversions.
