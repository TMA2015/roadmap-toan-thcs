# Math W1 — Owner QA closure and controlled next gate (2026-10-15)

## Authority, exact release, and evidence

- Baseline: `main` at `edc030678a417929e32ca49132b6c7be56f7ffeb`; merged PR #457.
- Owner examined the live public Practice pages and shared screenshots demonstrating successful grading of `18` (CĐ02), `7.5` (CĐ03), and `3,4,7` (CĐ04), plus feedback and 1/1 completion.
- In Math App chat on 2026-10-15 owner expressly stated: **"Tôi đã kiểm tra và xác nhận cả 3 trường hợp biên W1 đều đạt."** This is an **owner-reported manual QA PASS**, not independently captured browser telemetry.
- Owner additional edge checks, as requested in chat: CĐ02 wrong answer `17` must be marked wrong; CĐ03 `30/4` must equal `15/2`; CĐ04 last field blank must not count as wrong attempt.
- Source-based automated evidence: `scripts/test-math-w1-rich-practice-pilot-v1.js` and `scripts/test-math-w1-rich-practice-browser.py`; earlier merge gate CI passed. This documentation action **did not rerun CI**, nor observe a fresh browser session.
- **Verdict: W1 THREE-ITEM PILOT — OWNER QA PASS / CLOSED.** Closure applies only to the three released versioned formative variants: `NUM02-RICH-W1-01-V1` ⇐ `02-G6-WR-01`; `RAT03-RICH-W1-01-V1` ⇐ `03-M1-02`; `ALG04-RICH-W1-01-V1` ⇐ `04-WR-01`. It does not clear the rest of W1.

## Reconcile 19-item R2a independent academic overlay with live conversion

Authoritative overlay: `docs/collaboration/math-w1-notebooklm-r2a-erratum-overlay-20261015.json`.

- Total reviewed **19 of 75** original paper tasks; **56 remain unreviewed**. R2a: **14 PASS, 5 REVISE** academically, not a blanket production approval.
- Released as new opt-in rich Practice variants and now owner QA closed: `02-G6-WR-01`, `03-M1-02`, `04-WR-01`.
- Remaining **11 academically PASS, NOT deployed as rich variants**:
  - CĐ02: `02-G6-WR-03` (fraction calculation), `02-M2-03` (order four rational values).
  - CĐ03: `03-M3-01` (map scale/distance), `03-M4-01` (three-class donation ratio).
  - CĐ04: `04-WR-03` (subtract polynomials), `04-CH-01` (proof expression independent of x; keep full written reasoning, do **not** turn into final-number-only evidence).
  - CĐ21: `21-WR-01` (data types), `21-WR-02` (difference based on described bar-data), `21-M1-01` (frequency concept), `21-M2-01` (frequency table), `21-M3-01` (frequency table and check total).
- Still **5 REVISE**, must not silently deploy or count as approved conversion:
  - Exact canonical reuse pointer: `02-G6-WR-02` → `WX02-NUM-001`; `02-G6-WR-04` → `WX02-NUM-002`; `04-WR-02` → `ALG04MICRO_005`. Preserve true history and original source; do not create duplicates or treat pointer repair as content reapproval.
  - `03-M1-01`: accessible four-slot proportion builder; use each of {3,4,15,20} exactly once and exact cross products, multiple valid permutations.
  - `21-M4-01`: exact one-decimal percentages; unresolved original **frequency + percentage** objective versus five-percentage-field candidate. Ten-field extension is research-only; resolve scope with academic gate before release.

## Controlled execution sequence — not automatic import

1. **Next engineering wave — narrow, source-locked:** prioritize `02-G6-WR-03` using the already tested exact-rational input mechanism and `03-M3-01` only after an explicit input-unit contract. Verify canonical duplication and curriculum placement, source answer, feedback, stable new variant ID and unit parse policy item by item. Do not transform CĐ04 proof to numeric evidence.
2. Group distinct answer families separately: ordered rational numbers; three independent fields; polynomial coefficients; categorical matching; structured frequency table. Each new grader type requires deterministic correct/incorrect/invalid/partial fixtures and desktop/mobile tests before live activation.
3. Correct conservative post-one-question messaging: **1/1 correct is one practice result, not proof of a firm foundation/mastery**. Revisit math presentation (`x/12 = 5/8` versus properly typeset fractions) as a shared Practice Engine UX refinement, without changing mathematical keys or evidence semantics.
4. For each small wave: academic/source lock → review/contract → new immutable variant(s) in existing Practice Engine (formative only, opt-in first) → non-regression CI → preview/owner UX gate → explicit merge/release approval. Preserve all original paper tasks and old 10-MCQ flow.
5. Do not alter Core Readiness, assessment scores, learner history, old keys, IDs, or automatic mastery claims. No broad 75-item conversion.

## Release boundary

This document records the user acceptance and a **plan only**. It is not authorization to deploy the remaining 11 academically passing source items, to clear the five REVISE items, or to merge an implementation without its own reviewed gate.
