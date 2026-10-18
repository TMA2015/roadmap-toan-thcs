# R33 P0 — Ambiguous MCQ QUA12V1_121: two equations have the same number of real roots

**Date:** 2026-10-18  
**Packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Severity:** `P0_ACADEMIC_MCQ_AMBIGUITY` (requires content revision before academic clearance)  
**Source:** exact source-locked R27 authored MCQ (not an external SGK quotation).  
**Status:** `REVISION_PROPOSED_NOT_APPLIED`. Canonical bank question, options, key `answer=0`, tags and learner data remain unchanged.

## Original question and response set

**ID:** `QUA12V1_121`  
**Question:** Số giao điểm của parabol y=x² và đường thẳng y=3x+4 bằng số nghiệm thực của phương trình nào?

| Option index | Text | Real-root discriminant | Real-root count |
|---|---|---:|---:|
| 0 — keyed | `x²−3x−4=0` | `Δ=(-3)²−4(1)(−4)=25` | **2** |
| 1 | `x²+3x+4=0` | `Δ=3²−4(1)(4)=−7` | 0 |
| 2 | `x²−3x+4=0` | `Δ=(-3)²−4(1)(4)=−7` | 0 |
| 3 | `x²+3x−4=0` | `Δ=3²−4(1)(−4)=25` | **2** |

The original line/parabola intersections satisfy **`x²=3x+4`**, so the actual abscissa equation is **index 0** and roots are `x=4`, `x=−1`. However the sentence explicitly asks which equation has **the same number of real solutions** as the number of intersections, rather than strictly asking for the equation *formed by equating their y-values*. **Both indexes 0 and 3 have two real roots** and therefore satisfy that count. In an MCQ that promises one correct answer this is genuinely ambiguous, despite the explanation computing the intended equation correctly.

## Minimal repair proposal (owner academic approval required)

**Replace only the question text** with:

> Phương trình hoành độ giao điểm của parabol `y=x²` và đường thẳng `y=3x+4` là phương trình nào?

Retain existing four options and `answer=0`. The new wording requires algebraic equality of the two function values; the sole valid equation is `x²−3x−4=0`. No numerical values or source SKG classification need change to fix the ambiguity. The **original item hash WILL change if this text is approved and applied**; do not pretend a change is metadata-only or retain the old R27 record SHA as if still exact. This requires a separate source-delta receipt and re-audit of its record identity, item-level correctness, option IDs, and regression QA.

### Additional safeguards

- Keep `QUA12V1_121` at `REVISE_REQUIRED`, irrespective of the SGK citation decision.
- `QUA12V1_122` and `QUA12V1_123` remain separately under `LAYER_HOLD`, not automatically implicated in this ambiguity.
- Existing R29/R32 statements of blanket mathematical PASS or 24/24 unique-answer readiness must be superseded for this item.
- The `R27.inspect()` source audit verifies **unique option strings** but cannot prove **semantic uniqueness of correct mathematical answers**. A green CI does not contradict this finding.
- No question, option, answer, credit, Skill, taxonomy, Mastery, Readiness, historical records, migrations, or production deployment are modified in this QA-only PR.
- Owner must approve even this minimal content change before editing the actual bank. A standalone academic review may challenge the analysis; present the full discriminant/count counterexample rather than claiming an unquestionable verdict without evidence.

**Academic gate:** `ACADEMIC_PASS_AUTHORIZED=false`; `CONTENT_REVISION_AUTHORIZED=false`; `PRODUCTION_SKILL_COUNTER_AUTHORIZED=false`.
