# CT09 Current-Site D1–D6 Gap Audit R1

Date: 2026-10-03  
Status: **AUDIT ONLY / NO LEARNER-FACING EDIT YET**

Audit target:
- `docs/kien-thuc/09-he-phuong-trinh/index.md`
- `docs/kien-thuc/09-he-phuong-trinh/bai-tap.md`
- Topic 09 Learning Workspace / micro-practice
- 120-item Practice Bank v1
- Core Readiness Check

Source baseline:
- accepted Academic Depth Framework R1;
- KNTT SGK + SBT Grade 9 S1 extraction;
- Vũ Hữu Bình advanced/pedagogical reference extraction;
- Hà Nội entrance S3 extraction;
- `09_CT09_PROBLEM_TYPE_CATALOGUE_COVERAGE_MATRIX_R0.md`.

## Executive verdict

**CT09 is structurally strong but is NOT yet `SELF_LEARNING_READY_V1`.**

No P0 mathematical-correctness blocker was found in this bounded audit.

Main issue:
- the current module is much stronger in **short theory + routine/MCQ practice** than in **worked modeling depth, written transfer, source-grounded exam coverage and remediation**.

Dimension results:

| Dimension | Verdict | Priority |
| --- | --- | --- |
| D1 Theory Depth | REVISE | P1 |
| D2 Worked Examples | REVISE | P1 |
| D3 Interactive Practice | REVISE | P1 |
| D4 Written Problem Solving | REVISE | P1 |
| D5 Exam & Authentic Coverage | REVISE | P1 |
| D6 Help / Remediation | REVISE | P1 |

Topic closure: **NOT_READY_FOR_SELF_LEARNING_READY_V1**

School-semester/final-test frequency remains a separate evidence gap; this does not invalidate the entrance-exam observations already recorded.

---

## D1 — Theory Depth

### What is already strong

Current theory correctly covers:
- linear equations in two variables;
- system solution meaning;
- geometric interpretation;
- substitution;
- elimination;
- equivalent transformations;
- one/no/infinitely many solutions;
- basic parameter handling;
- five-step real-world modeling process;
- common errors;
- prerequisite and next-topic links.

The determinant-style `D` check is explicitly labeled as an extension/checking tool rather than the required solving method.

### Gaps

#### D1-G1 — S1 calculator support is absent
KNTT SGK/SBT explicitly includes calculator support for solving/checking systems. Current CT09 theory and Learning Cards do not teach a short “use calculator as a checking/tool step, not a substitute for understanding” workflow.

**Verdict:** REVISE / P2 inside D1.

#### D1-G2 — graphical meaning is stated but under-taught
The page correctly states that a two-variable linear equation represents a line and that system solutions are intersections. However, there is no substantial worked example that:
- chooses points / constructs or reads the two lines;
- connects algebraic solution to the visible intersection;
- contrasts cut / parallel / coincident lines with algebraic behavior.

**Verdict:** REVISE / P1.

#### D1-G3 — parameter boundary is inconsistent across learner-facing surfaces
The main theory:
- includes “Tìm tham số để hệ có nghiệm cho trước” and
- “Tìm tham số để hệ có một nghiệm, vô nghiệm hoặc vô số nghiệm”
inside the general “Các dạng bài cần nắm vững”.

Practice Room says:
- parameter systems are Entrance10 / Extension by default.

New S1 evidence requires a more precise split:
- **Core-Support parameter-lite:** substitute a specified parameter value; find a simple coefficient so a given pair satisfies an equation/system.
- **Entrance10:** full parameter classification, integer/positive constraints, solution-expression conditions.

**Verdict:** REVISE / P1.

#### D1-G4 — modeling theory is procedural but not deep enough for self-study transfer
The five-step process is correct, but the knowledge page lacks a full, source-backed worked modeling section showing:
- how to choose unknowns;
- how to record units/conditions;
- how to translate each sentence into one independent relation;
- how to tell whether two equations are genuinely independent;
- how to check the final answer in context.

**Verdict:** REVISE / P1.

### D1 result

**REVISE / P1**

---

## D2 — Worked Examples

### Current strengths

The site has clean worked examples for:
- substitution;
- elimination;
- direct transformation before solving;
- method choice;
- simple Learning Card modeling.

The examples are concise and mathematically readable.

### Gaps

#### D2-G1 — example set is procedure-heavy
Most worked examples show the mechanics of solving a system. They do not yet cover the richer roles required by Academic Depth:
- TRAP/CONTRAST;
- CANONICAL;
- TRANSFER;
- SYNTHESIS.

#### D2-G2 — no entrance-authentic modeling anchor
The current-program Hà Nội S3 sample gives two directly relevant modeling structures:
- count/value;
- price/discount.

The current knowledge page has no full worked example of either structure with unknown selection, conditions, equations, solving and contextual conclusion.

#### D2-G3 — no canonical “why this model?” example
A self-study learner needs at least one example where the hard part is not solving the system, but deciding:
- what the two unknowns are;
- what the two independent equations are;
- why another tempting equation is wrong or redundant.

### D2 result

**REVISE / P1**

---

## D3 — Interactive Practice

### Current inventory

Main Practice Bank v1:
- 120 questions;
- 36 basic;
- 78 intermediate;
- 6 advanced.

Micro-practice:
- 17 questions;
- base / trap / apply / coverage roles;
- two hints per item;
- useful misconception feedback in selected items.

### Quantified anti-inflation finding

The 120-item bank has **120 different strings**, but after structure normalization it collapses to only **21 recurring question templates**.

Large repeated structural families include:
- 16 × “solve this system”;
- 12 × “how many solutions?”;
- 12 × “find parameter so this given pair is a solution”;
- 12 × “sum/difference of two numbers → choose system”;
- 10 × same motion-system template;
- 10 × same count/value shop template.

There are also 22 questions prefixed with wording such as “Dựa vào kiến thức cốt lõi” without a meaningful change in reasoning structure.

This confirms that **question count materially overstates problem-type diversity**.

### Coverage imbalance

Examples:
- substitution-tagged direct solving is represented much more heavily than elimination;
- `giai-he-cong` has only 4 main-bank items;
- main-bank parameter practice is almost entirely one narrow pattern: substitute a given pair and solve for `m`;
- motion and shop/context families repeat the same algebraic skeleton with changed numbers;
- mixture/concentration, price/discount, genuine work-rate, repeated-expression transformation and richer budget/break-even structures are absent or weak.

### Help gap inside the large bank

All 120 main-bank items have explanations, but **0/120 currently contains a stored hint ladder**.

Micro-practice is better designed pedagogically than the large bank.

### D3 result

**REVISE / P1**

The remedy is **not** to add many more questions. First rebalance by problem type and reduce repeated exposure to near-clones.

---

## D4 — Written Problem Solving

### Current inventory

Practice Room currently has:
- 10 Core written items;
- 2 Entrance10 items;
- 1 Challenge item.

This is useful as a starting skeleton.

### Major issues

#### D4-G1 — most Core written items are too short to train full mathematical writing
Several items are essentially one-step checks or routine systems:
- verify a pair;
- identify no solution from parallel lines;
- solve a very simple system;
- state how to check a solution.

These are valid exercises, but they do not by themselves build exam-transfer written competence.

#### D4-G2 — modeling coverage is too narrow
Current Core written modeling includes:
- a simple number sum/difference problem;
- a simple motion sum/difference problem;
- a nominal “productivity” item that is mathematically another sum/difference of two rates.

Missing first-class written anchors include:
- count/value;
- price/discount;
- mixture/composition;
- genuine rate/work problem with different times;
- cost/revenue or budget;
- one model where choosing equations is the main difficulty.

#### D4-G3 — solutions are answers, not rubrics
Current written items have:
- one short hint;
- one full-solution disclosure.

They generally do **not** include:
- method-choice explanation;
- common-error note per problem;
- step rubric / self-check marks;
- prerequisite remediation;
- easier sibling;
- explicit condition-check scoring.

That falls short of the accepted D4 standard.

#### D4-G4 — current Challenge item is not meaningfully Challenge
The item labeled “Hệ phân thức đơn giản” is solved by straightforward denominator clearing and then a routine linear system. It does not represent Specialized-Challenge depth.

### D4 result

**REVISE / P1**

---

## D5 — Exam & Authentic Coverage

### Current-site problem

The knowledge page currently presents:
- “Giải hệ trực tiếp – ⭐⭐⭐⭐⭐”
- “Hệ có tham số – ⭐⭐⭐⭐”
- “Lập hệ từ bài toán thực tế – ⭐⭐⭐⭐⭐”
- “Kết hợp hệ phương trình với hàm số – ⭐⭐⭐⭐”

These star ratings are not tied to a declared S3 corpus and therefore violate the new frequency-discipline rule.

### Source-backed evidence now available

Current-program Hà Nội entrance sample:
- 2025: direct two-unknown price/discount modeling;
- 2026: direct two-unknown count/value modeling.

Observed current sample:
- system modeling: **2/2**;
- standalone direct solve-system item: **0/2**.

Historical continuity only:
- 2023: transformed system after repeated-expression substitution;
- 2024: transformed system after repeated radical-expression substitution.

Observed historical sample:
- transform-then-solve: **2/2**.

Interpretation:
- direct solving remains Core because S1 requires it;
- current S3 strengthens the priority of written modeling;
- historical S3 justifies an Entrance10 transfer bridge;
- none of these small samples justifies universal or predictive language.

### Remaining evidence gap

A provenance-controlled Grade 9 school semester/final-test sample under current KNTT has not yet been normalized.

Therefore:
- entrance-exam coverage can already be described;
- school-year frequency claims remain **INSUFFICIENT_SOURCE**.

### D5 result

**REVISE / P1**

---

## D6 — Help / Remediation

### What exists

Micro-practice:
- two-step hints;
- explanations;
- selected option-specific misconception feedback.

Written Practice Room:
- one small hint;
- full solution disclosure.

Main 120-item bank:
- explanations after answering;
- Tutor integration may provide additional help at runtime.

### Gap against accepted six-step ladder

The static learner path does not consistently provide:

1. small hint;
2. method hint;
3. one worked step;
4. full explanation on request;
5. prerequisite remediation;
6. similar easier example.

The gap matters most in modeling/written problems, where “show solution” jumps too quickly from a single hint to the full answer.

AI Tutor cannot be the only path to the missing pedagogical steps.

### D6 result

**REVISE / P1**

---

# Problem-Type Coverage Against R0 Catalogue

Legend:
- **FULL** — current site teaches and practices the family with reasonable depth.
- **PARTIAL** — present but too shallow / narrow / imbalanced.
- **MISSING** — not meaningfully represented.
- **WRONG_LAYER** — content exists but learner-facing layer needs correction.

| ID | Problem type | Site coverage | Main finding |
| --- | --- | --- | --- |
| PT01 | Recognize linear equation in two variables | PARTIAL | Theory yes; little direct interactive recognition practice. |
| PT02 | Check ordered-pair solution | FULL | Strong theory + micro + bank + written. |
| PT03 | Graph solution set as a line | PARTIAL | Concept stated; worked graph practice is weak. |
| PT04 | System solution as line intersection | FULL | Theory/visual explanation is strong. |
| PT05 | One/no/infinite solutions | FULL | Good conceptual and practice coverage. |
| PT06 | Substitution | FULL | Strong. |
| PT07 | Elimination | PARTIAL | Theory strong; main bank underweights it relative to substitution. |
| PT08 | Transform/scale before solving | PARTIAL | Present, but repeated template variety is low. |
| PT09 | Fraction/decimal/irrational coefficients | PARTIAL | Fractions represented; decimals/irrational variants weak. |
| PT10 | Calculator support | MISSING | Explicit S1 gap. |
| PT11 | Coefficient/parameter-lite | WRONG_LAYER | Content exists but simple S1-supported family is bundled with Entrance10 parameter material. |
| PT12 | Count/value modeling | PARTIAL | Main-bank equation selection exists; full written anchor missing. |
| PT13 | Price/discount modeling | MISSING | Current-program S3 gap. |
| PT14 | Mixture/concentration | MISSING | S1/SBT-supported application family absent. |
| PT15 | Motion/relative rate | PARTIAL | Many near-clone items; written depth limited. |
| PT16 | Work/productivity/fill rate | PARTIAL | Micro support; written item is too trivial to represent the family. |
| PT17 | Cost/revenue/break-even/budget | PARTIAL | Simple count/revenue exists; deeper modeling absent. |
| PT18 | Repeated-expression substitution → linear system | MISSING | Historical Entrance10 transfer family absent. |
| PT19 | Parameter classification one/no/infinite | PARTIAL | Theory mentions it; no strong worked/written sequence. |
| PT20 | Parameter + integer/positive constraints | MISSING | Entrance10 reference family absent. |
| PT21 | Integer-coordinate/divisibility constraints | MISSING | Optional Entrance10 support absent. |
| PT22 | Three-variable/symmetric/Diophantine systems | MISSING | Optional challenge; current “Challenge” item is not equivalent. |

Missing PT18–PT22 does **not** block Core by itself. Their priority follows their layer.

---

# Priority Summary

## P1 — required before CT09 can be considered self-learning-ready

1. Fix learner-facing layer/frequency wording:
   - split parameter-lite Core-Support from advanced Entrance10;
   - remove unsupported star-frequency ratings;
   - describe current/historical S3 evidence conservatively.

2. Add a modeling teaching block:
   - choosing unknowns;
   - units/conditions;
   - two independent relations;
   - solve/check/conclude;
   - at least one full worked example.

3. Upgrade written practice:
   - original count/value anchor;
   - original price/discount anchor;
   - genuine work/rate anchor;
   - mixture/composition or budget/cost anchor;
   - rubrics + common errors + progressive hints.

4. Rebalance interactive practice:
   - no raw-count expansion first;
   - reduce repeated near-clone exposure;
   - strengthen elimination, graph meaning and modeling variety;
   - preserve existing IDs/history where possible.

5. Add static remediation for modeling/written tasks so the learner does not depend on AI Tutor.

## P2 — valuable after P1

- calculator-support mini-section;
- full graph worked example;
- Entrance10 repeated-expression substitution anchor;
- advanced parameter classification anchor;
- optional genuine Challenge item.

---

# Closure Decision

Current CT09 status:

`ACADEMIC_DEPTH_R1 = REVISE`

`SELF_LEARNING_READY_V1 = false`

Reason:
- no P0 correctness blocker;
- multiple P1 gaps remain across D1–D6, especially D2/D4/D5/D6.

Next artifact:
- `CT09 Content Delta Plan R1`;
- then independent NotebookLM review;
- only after review should a minimal learner-facing pilot patch be implemented.
