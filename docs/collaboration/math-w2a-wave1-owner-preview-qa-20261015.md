# W2A Wave 1 — Owner Preview QA receipt (2026-10-15)

PR: #465. Source: `04-WR-06`. Immutable formative variant: `ALG04-RICH-W2A-01-V1`. Review packet: `MATH-EXERCISE-RECLASSIFY-W2A-20261015`.

## Evidence directly provided by owner

The owner supplied three screenshots from the isolated Preview URL in the Math App conversation on 2026-10-15 and explicitly confirmed **"pass"**.

| Screenshot | Three input fields | Observed visible feedback | Outcome |
| --- | --- | --- | --- |
| Blank guard | `2`, `-5`, empty | "Em hãy nhập đầy đủ các ô trước khi chấm. Lượt này chưa được tính." | OWNER QA PASS |
| Incorrect coefficient | `2`, `-7`, `-3` | "Chưa đúng", with mathematically correct worked solution | OWNER QA PASS |
| Correct coefficients | `2`, `-5`, `-3` | "Chính xác", with correct expansion `2x²−5x−3` | OWNER QA PASS |

The screenshots show question **3/3**, an explanatory solution, and separate field labels for coefficients of `x²`, `x`, and the constant term.

## Scope and non-claims

This manual receipt demonstrates the three pictured input/feedback cases in the Preview, not a fresh production-domain browser test, not every localStorage assertion, and not independent Core Readiness validation. Those protections remain exact-head automated CI gates.

Prior W1 source-linked typed variants and their identifiers are preserved; historical Practice attempts and separate Core Readiness are not re-keyed or migrated. The original paper problem is still available.

The W2A 12/12 academic PASS verdict authorizes item-level examination but not automatic bulk import. No other W2A source item is released by this receipt.

**Owner Preview QA: PASS. Release gate:** retire the temporary preview workflow, obtain exact-final-head CI SUCCESS, merge PR #465, verify GitHub Pages build and published v5 manifest; do not claim live release until confirmed.
