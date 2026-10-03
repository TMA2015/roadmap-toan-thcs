# CT08 Current-Site D1–D6 Gap Audit R0

Date: 2026-10-03  
State: **CANDIDATE AUDIT / INDEPENDENT REVIEW REQUIRED / NO LEARNER-FACING EDIT YET**

Audit target:
- CT08 knowledge page;
- Learning Workspace + micro-practice;
- Practice Room;
- 132-item Practice Bank;
- Written Exercise Library;
- Core Readiness Check.

Source baseline:
- KNTT SGK Bài 4–6;
- KNTT SBT Bài 4–6;
- S2 pedagogical/reference extraction;
- official Hà Nội 2025–2026 current-program sample `n=2`;
- validated Academic Depth Standard after CT09 pilot.

No P0 mathematical-correctness blocker has been established in this bounded audit.

A small notation-quality issue exists in four historical items (`x--4` ... `x--1`) and is treated below as a bounded correction, not evidence that the bank is mathematically unusable.

---

# Executive candidate verdict

| Dimension | Candidate verdict | Priority |
|---|---|---|
| D1 Theory Depth | REVISE | P1 |
| D2 Worked Examples | REVISE | P1 |
| D3 Interactive Practice | REVISE | P1 |
| D4 Written Problem Solving | REVISE | P1 |
| D5 Exam & Authentic Coverage | REVISE | P1 |
| D6 Help / Remediation | REVISE | P1 |

Candidate topic status:

`CT08_SELF_LEARNING_READY_V1 = false_pending_review`

The intended remedy is a **small targeted delta**, not a rebuild or mass content expansion.

---

## D1 — Theory Depth

### Current strengths

The combined learner path already contains:
- direct and multi-step first-degree equations;
- product equations;
- rational equations with domain and candidate checking;
- explicit warnings against unsafe division by an unknown/parameter-dependent expression;
- order/inequality properties in Learning Workspace;
- sign reversal for negative multiplier/divisor;
- first-degree inequalities and number-line representation;
- one-variable equation modeling;
- multiple-condition intersection as an extension.

The rational-equation Learning Card has a useful canonical example:
[
rac{x^2-4}{x-2}=0
]
with explicit rejection of `x=2`.

### D1-G1 — source-backed inequality modeling is mislayered

KNTT SGK Bài 6 and SBT Bài 2.17–2.19 directly use real-world upper/lower-bound inequality models.

Current Learning Workspace and Practice Room instead place “Lập bất phương trình từ bài toán” under Entrance10/Extension.

This is a source-boundary mismatch.

**Candidate verdict:** REVISE / P1.

### D1-G2 — multiple-condition intersection is inconsistent across surfaces

Current evidence:
- knowledge page calls it “Mở rộng”;
- Learning Workspace labels it Entrance10;
- Taxonomy v2 family metadata treats `giao-tap-nghiem` as KNTT-Core.

KNTT SBT Bài 2.19 supports combining a dimension inequality with positivity to obtain an interval, but the evidence does not require a separate full Core family at the same status as basic Bài 6 solving.

The learner path needs one consistent decision, likely Core-Support/application rather than conflicting labels.

**Candidate verdict:** REVISE / P1 boundary consistency.

### D1-G3 — the main article under-exposes Bài 5 order concepts

The Learning Workspace card correctly teaches:
- inequality notation;
- addition property;
- positive/negative multiplication rule.

The long knowledge article jumps from rational equations directly to first-degree inequalities and does not contain an explicit “Bất đẳng thức và tính chất thứ tự” teaching subsection.

Because Learning Workspace is a first-class learner surface, this is not a missing-curriculum P0. But the article/card alignment is weaker than the CT09 closure standard.

**Candidate verdict:** REVISE / P2 unless independent review judges the Learning Card sufficient.

### D1 result

`D1 = REVISE / P1`

Primary blocker is source-backed layer consistency, not missing formulas.

---

## D2 — Worked Examples

### Current strengths

Learning Cards contain stronger examples than the short article examples:
- multi-step linear equation with verification;
- rational equation that generates and rejects an invalid candidate;
- negative-coefficient inequality with sign reversal and a check;
- number-line representation;
- equation-modeling ticket example with units, integer condition and contextual verification.

### D2-G1 — transform-to-product is stated but not taught deeply

Current article says “đưa phương trình về dạng tích”, but the visible article example and micro/base item start from an already-factored product.

S1/SBT/S2 explicitly distinguish:
- already-factored product;
- transform/factor first, then zero-product.

A self-study learner needs at least one canonical worked example where the transformation itself is the reasoning step.

**Candidate verdict:** REVISE / P1.

### D2-G2 — transformed first-degree inequality is under-taught

SBT Bài 2.15–2.16 includes inequalities that look more complex before cancellation/expansion reduces them to first-degree form.

Current examples mostly begin close to `ax+b square c`.

Need one source-aligned worked example showing:
- expand/collect;
- observe cancellation;
- preserve/flip direction only at the correct operation.

**Candidate verdict:** REVISE / P1.

### D2-G3 — authentic one-variable modeling depth is too light

Current ticket example is pedagogically sound but simple.

The official Hà Nội 2025 and 2026 papers provide current transfer evidence for:
- travel-time modeling;
- production-plan modeling.

A deeper original model should demonstrate:
- choose one unknown;
- express the second quantity/time through it;
- build the equation;
- solve;
- check unit/context.

Do not copy the official question wording.

**Candidate verdict:** REVISE / P1.

### D2 result

`D2 = REVISE / P1`

---

## D3 — Interactive Practice

### Current strengths

Main bank:
- 132 questions;
- 17 authored top-level type buckets;
- broad equation/inequality coverage.

Micro-practice:
- 16 items;
- every item has two static hints;
- useful misconception feedback for several traps.

### D3-G1 — repeated structural blocks remain prominent

Examples:
- 12 near-identical multi-step linear-equation skeletons;
- 8 near-identical domain-recognition items;
- 12 product-equation items, mostly already factored;
- multiple direct first-degree equation/inequality numeric variants.

The count 132 therefore overstates independent structural diversity.

**Candidate verdict:** REVISE / P1.

Recommended remedy:
- add `variant_group`-style structural metadata;
- session selector prefers diverse groups;
- preserve all historical IDs/content except bounded correctness/notation fixes.

### D3-G2 — thin interactive coverage in specific source-backed families

Likely thin:
- PT08-05 transform-to-product;
- PT08-11 direct recognition/solution meaning for first-degree inequality;
- PT08-13 transform/cancel before solving inequality.

A **small** number of reviewed new items is enough.

Do not add dozens of questions.

### D3-G3 — layer metadata for inequality modeling needs correction

Four main-bank `lap-bat-phuong-trinh` items are pedagogically useful, but the current learner/workspace classification treats this family as Entrance10 despite S1 Core authority.

Layer correction should not regrade prior attempts.

### D3-G4 — four learner-facing denominator strings use poor notation

Historical items `EQ08V1_047..050` include:
- `x--4`, `x--3`, `x--2`, `x--1`.

The intended meaning and answer are internally consistent, but the notation should be normalized to learner-readable forms such as `x+4`, etc.

This can be done while preserving:
- IDs;
- answer index;
- assessed skill;
- historical attempts.

**Candidate priority:** P1 quality correction because it is learner-facing mathematical notation.

### D3 result

`D3 = REVISE / P1`

---

## D4 — Written Problem Solving

### Current strengths

Practice Room has short written coverage for major routine skills.

Written Exercise Library already has two useful standard items:
- rational/domain exclusion;
- inequality transform/number-line.

### D4-G1 — most written items remain routine one-step demonstrations

Current 10 Core Practice Room items are useful exercises, but most are:
- one direct equation;
- one direct product;
- domain only;
- simple rational equation;
- one order-property manipulation;
- one direct inequality;
- number-line description;
- very simple equation modeling.

They do not yet provide enough full-process self-study transfer.

### D4-G2 — no deep equation-modeling anchor aligned to current S3 transfer

Current Hà Nội sample has one-variable equation modeling in 2/2 reviewed current papers.

CT08 needs an **original** deep anchor with:
- variable + unit/condition;
- relation construction;
- complete equation;
- solving;
- contextual check;
- why this model;
- common error;
- self-check rubric.

### D4-G3 — no deep inequality-modeling anchor at its correct Core boundary

KNTT SBT directly supports:
- maximum capacity;
- minimum earnings;
- physical/geometric bounds;
- discrete integer interpretation.

Current `08-ENT-01` merely asks to form one inequality and stops.

A Core/Core-Support anchor should require model → solve → interpret.

### D4-G4 — transform-to-product deserves written reasoning

A full written item should require the learner to perform the factorization/structural transformation rather than start from an already-factored product.

### D4 result

`D4 = REVISE / P1`

A minimal anchor set of about **3–4 deep Core items** appears sufficient; no large written expansion is justified.

---

## D5 — Exam & Authentic Coverage

### Current strengths

The page explicitly says its stars are Roadmap priority rather than a guarantee of exam appearance.

That is better than presenting them as frequency.

### D5-G1 — relative star ranking is still not source-grounded enough

Current “Dạng bài thi vào lớp 10” table assigns different star levels to:
- basic equation;
- product equation;
- rational equation;
- inequality;
- condition intersection;
- equation modeling;
- parameter work.

No declared scoring rubric or source corpus explains why one gets 5 stars and another 3–4.

Because this is a **relative learner-facing ranking across problem types**, the disclaimer does not fully solve the evidence problem.

This is different from CT09’s final accepted single generic topic-level Roadmap priority badge.

**Candidate verdict:** remove/replace the row-level star ranking with source-grounded layer/evidence wording.

### D5-G2 — current authentic evidence is not reflected

Official Hà Nội current-program sample `n=2` shows:
- one-variable equation modeling relevant to CT08 in 2/2;
- no standalone direct product/rational/first-degree-inequality item in this tiny sample;
- one cross-topic inequality constraint inside radical-expression work in 2025.

Correct learner wording should distinguish:
- **KNTT-Core because curriculum requires it**;
- **observed current entrance transfer in the declared sample**;
- **no frequency conclusion from 0/2 or 2/2 alone**.

School-semester/final-test frequency remains:
`INSUFFICIENT_SOURCE`.

### D5 result

`D5 = REVISE / P1`

---

## D6 — Help / Remediation

### Current strengths

- Learning Cards provide worked examples/misconceptions.
- All 16 micro items have two hints.
- Practice Engine has explanations and optional AI support.
- Main bank explanations are present.

### Selective-hint policy applies

The fact that 0/132 legacy main-bank items have stored hints is **not automatically a defect**.

Do not retrofit hints to all 132 merely for consistency.

### D6-G1 — deep written/modeling bottlenecks lack progressive non-AI support

The current short written items generally provide:
- one hint;
- full solution.

For routine items this may be enough.

For the missing deep anchors identified in D4, the CT09-validated pattern should be reused:
- progressive hints;
- full solution;
- why method;
- common errors;
- self-check rubric;
- prerequisite/remediation link;
- easier sibling where useful.

AI remains supplemental rather than essential.

### D6 result

`D6 = REVISE / P1`

This does **not** authorize universal hint coverage.

---

# Priority summary

## P1 before CT08 can be reconsidered for SELF_LEARNING_READY_V1

1. Reconcile source-backed layers:
   - inequality modeling → Core application;
   - multiple-condition intersection → one consistent reviewed layer.

2. Add/deepen a few worked examples:
   - transform-to-product;
   - transformed inequality;
   - richer one-variable modeling.

3. Upgrade written transfer with ~3–4 deep original Core anchors:
   - transform-to-product;
   - equation modeling;
   - inequality modeling/discrete bound;
   - rational candidate-rejection if independent review says the current Library item is insufficient.

4. Rebalance interactive delivery:
   - structural variant grouping;
   - a few thin-family additions only;
   - preserve history.

5. Normalize four `x--n` learner-facing strings without changing IDs/answers.

6. Replace relative problem-type star ranking with conservative source-grounded wording.

7. Add progressive static help to the new/deep anchors, not to every legacy MCQ.

## Non-blocking optional scope

- parameter classification;
- inequality proof/extremum;
- repeated-expression substitution;
- broader challenge material.

These must not gate Core.

---

# Candidate closure state

`ACADEMIC_DEPTH_CT08_R0 = REVISE_PENDING_INDEPENDENT_REVIEW`

`SELF_LEARNING_READY_V1 = false_pending_review`

Next artifact:
- minimal Content Delta Plan R0;
- independent NotebookLM review before learner-facing implementation.
