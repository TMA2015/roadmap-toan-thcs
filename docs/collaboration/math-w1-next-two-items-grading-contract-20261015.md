# Math W1 — Next two rich-response candidates: source-locked grading contracts

Date: 2026-10-15
Status: DESIGN / IMPLEMENTATION GATE NOT CLEARED
Parent pilot: PR #457 `edc030678a417929e32ca49132b6c7be56f7ffeb`
Owner QA: 3/3 edge cases PASS, documented in PR #458.
Independent academic source: `docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json` (both source items PASS **as source tasks**, not blanket input-mode authorization).

## Candidate A — `02-G6-WR-03`: exact rational answer

- Original task: `5/6 - 7/15`; expected result `11/30`.
- Existing grading mechanism: `docs/assets/javascripts/practice-rich-answer-v1.js`, `response_type=rational`, `answer_contract.expected="11/30"`. Reuse without modifying parser or historical item.
- Accept equivalent forms with the same exact rational number (`22/60`, `0.3666...` is **not** equal as a finite decimal and must not be accepted); sign and blank guard still apply. Existing parser supports finite decimals and fractions; no arbitrary math expression evaluation.
- Reject `11/15`, `-11/30`, `11/0` (invalid), empty field (incomplete).
- Explain via LCM 30: `25/30 - 14/30 = 11/30`; hints about common denominator; do not silently expose answer before protected checks.
- Propose NEW immutable Practice variant, source provenance `02-G6-WR-03`, in separate additive chunk and new manifest; do not modify historical paper source, existing rich pilot chunk, or old source IDs.
- Pre-import gates: confirmed curriculum/source mapping and source-key parity, anti-dup against already live Practice/Micro items, exact parser unit tests, browser click/grade/reload test, opt-in routing, owner preview. No readiness/mastery credit.

## Candidate B — `03-M3-01`: map scale, unit-aware policy needed

- Original task: map scale 1:50,000; map distance 7.2 cm; asks real distance in **km**.
- Calculation: `7.2 × 50,000 = 360,000 cm = 3.6 km`.
- **Safest UI contract for independent approval:** visible field label `Khoảng cách thực tế (km)` and note `Chỉ nhập số, đơn vị km đã được ghi sẵn`. Exact numeric expected `3.6`; accept `3,6`, `36/10`, `3.60`; reject `360000` (cm supplied in km field), `3600` (m supplied in km field), `3.7`, blank, invalid.
- Existing `practice-rich-answer-v1.js` parser explicitly does NOT parse `3,6 km` or `360000 cm`, so these are invalid inputs, not alternative valid answers. **Do not claim unit-synonym support**. If product requires accepting explicit units or multiple unit forms, implement/test a versioned unit-aware grader only after a new academic and UX review; do not overload the generic exact-rational parser with ambiguous separators/units.
- A numeric final answer tests scaled conversion, not evidence that all intermediate reasoning was correct; keep written-work route for full reasoning.
- Do not deploy until authoring exact answer and instructions, unit entry policy, no duplicate, portable regression fixtures, and owner preview are checked.

## Cross-cutting test and release plan

1. Before any import, verify no exact duplicate content/canonical item already exists using live `docs/assets/data/practice/` sources, Micro, and Written Library.
2. Add `correct / incorrect / invalid / incomplete` contract fixtures for both; on entry 3.6 km must be explicitly disallowed **under numeric-only contract**, with learner-friendly unit note.
3. Preserve 10-MCQ sessions, all former IDs, stats, raw responses and independent Readiness.
4. QA Chrome desktop + 390px mobile, after-submit feedback, refresh and localStorage persistence; verify no answer leakage into protected checks.
5. Only after test/owner release gate may new immutable opt-in variants and manifests be merged. This contract file itself has no runtime effects.

**Decision status:** Candidate A is technically compatible with current grader. Candidate B is technically compatible **only if the visible input field is restricted to numeric km**. Source-task academic PASS does not by itself authorize production deployment.
