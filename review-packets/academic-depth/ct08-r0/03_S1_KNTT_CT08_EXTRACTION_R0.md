# CT08 S1 KNTT Source Extraction R0

Date: 2026-10-03  
State: **SOURCE EXTRACTION / NO D1–D6 VERDICT**

Source class: **S1 — KNTT curriculum/textbook**

Primary reviewed scope:
- Toán 9 KNTT Tập 1, Chương II
- Bài 4 — Phương trình quy về phương trình bậc nhất một ẩn
- Bài 5 — Bất đẳng thức và tính chất
- Bài 6 — Bất phương trình bậc nhất một ẩn

Public retrieval/index:
- SGKVN Toán 9 Tập 1 chapter/book pages and Bài 4–6 pages, checked 2026-10-03.

This extraction summarizes concepts/skills and problem structures. It does not reproduce textbook wording at length.

---

## 1. Core boundary from Bài 4

KNTT explicitly teaches two major equation structures:

### S1-EQ-01 — Product equation
Core structure:
`(ax+b)(cx+d)=0`

Required reasoning:
1. recognize or transform the equation into product form;
2. apply the zero-product property;
3. solve the resulting first-degree equations;
4. combine all valid roots.

KNTT also includes examples where factorization is required before the zero-product step.

### S1-EQ-02 — Equation with variable in denominator

Required reasoning:
1. identify the domain/ĐKXĐ so all denominators are nonzero;
2. transform/clear denominators only on the valid domain;
3. solve the resulting equation;
4. compare candidate roots against the original domain;
5. reject invalid candidates explicitly.

This is a core logical safety requirement, not optional polish.

### S1-EQ-03 — Contextual equation modeling

KNTT Bài 4 includes contextual applications rather than only symbolic exercises.

Observed source-backed roles include:
- geometry/context equation;
- work/rate modeling leading to an equation.

Therefore CT08 Core should not be reduced to symbolic manipulation alone.

---

## 2. Core boundary from Bài 5

KNTT explicitly covers:

### S1-ORD-01 — Order on real numbers
- use of `<, >, ≤, ≥`;
- recognition/comparison of real numbers.

### S1-ORD-02 — Inequality concept
- identify an inequality;
- distinguish same/opposite direction where relevant.

### S1-ORD-03 — Transitivity
- reasoning across ordered relations.

### S1-ORD-04 — Order and addition
Adding the same quantity to both sides preserves direction.

### S1-ORD-05 — Order and multiplication
- multiplying by a positive number preserves direction;
- multiplying by a negative number reverses direction.

This sign rule is a central reasoning point and should have explicit contrast/error treatment in self-study content.

---

## 3. Core boundary from Bài 6

KNTT explicitly covers:

### S1-INEQ-01 — Recognize a first-degree inequality in one variable
General forms:
- `ax+b<0`
- `ax+b>0`
- `ax+b≤0`
- `ax+b≥0`
with `a≠0`.

### S1-INEQ-02 — Understand a solution of an inequality
A value is a solution when substitution makes the inequality true.

### S1-INEQ-03 — Solve a first-degree inequality
Transform using the order properties from Bài 5.

Essential branching:
- positive coefficient: direction preserved after division;
- negative coefficient: direction reversed after division.

### S1-INEQ-04 — Real-world inequality modeling
KNTT opens Bài 6 with a budget/maximum-quantity context.

Therefore a learner should encounter at least one source-aligned modeling path where an inequality encodes a real constraint.

---

## 4. Source-normalized S1 problem hypotheses

These are S1-backed candidate problem families for the later full catalogue.

| ID | Candidate family | Layer | Source basis |
|---|---|---|---|
| PT08-01 | Recognize/solve product equation already in factored form | KNTT-Core | Bài 4 |
| PT08-02 | Transform/factor then solve product equation | KNTT-Core | Bài 4 |
| PT08-03 | Determine domain of equation with variable in denominator | KNTT-Core | Bài 4 |
| PT08-04 | Clear denominators, solve, and reject invalid root | KNTT-Core | Bài 4 |
| PT08-05 | Contextual equation modeling | KNTT-Core | Bài 4 |
| PT08-06 | Recognize/interpret inequality/order relation | KNTT-Core | Bài 5 |
| PT08-07 | Apply order property under addition | KNTT-Core | Bài 5 |
| PT08-08 | Apply order property under multiplication, including negative multiplier | KNTT-Core | Bài 5 |
| PT08-09 | Recognize a first-degree inequality and its solution | KNTT-Core | Bài 6 |
| PT08-10 | Solve first-degree inequality with positive coefficient | KNTT-Core | Bài 6 |
| PT08-11 | Solve first-degree inequality with negative coefficient / reverse sign | KNTT-Core | Bài 6 |
| PT08-12 | Real-world inequality modeling | KNTT-Core | Bài 6 |

Important:
- this is **not yet the final normalized catalogue**;
- SBT/S2/S3 may merge, split, enrich or re-layer these families;
- no exam-frequency conclusion follows from this table.

---

## 5. Immediate comparison signals against current CT08 site

Already aligned in current site:
- product equations;
- denominator/domain workflow;
- inequality/order properties;
- sign reversal;
- equation modeling;
- inequality modeling exists in an extension surface.

Potential audit questions raised by S1:
1. Is inequality modeling incorrectly pushed out of Core in current learner-facing layering, given Bài 6 uses a real-world budget constraint as a direct teaching context?
2. Is intersection of multiple solution sets truly Core, Support, or extension? S1 Bài 4–6 evidence here does not by itself elevate it to a core family.
3. Are current parameter tasks outside the required S1 boundary? The extracted Bài 4–6 scope does not establish parameter classification as Core.
4. Does current written practice sufficiently train the full denominator-domain-reject-root reasoning path?
5. Does current D2 worked-example sequence include enough method/contrast depth around negative inequality multipliers and invalid rational-equation roots?

These are audit questions only.

---

## 6. S1 evidence still missing

Need before final D1–D6 closure:
- relevant KNTT SBT/workbook extraction;
- exact provenance lock for any additional textbook/SBT pages used;
- later reconciliation with S2 and S3.

Current status:

`CT08_S1_SGK = EXTRACTED_R0`

`CT08_S1_SBT = PENDING`
