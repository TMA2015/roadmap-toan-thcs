# CT09 Content Delta Plan R1

Date: 2026-10-03  
Status: **PROPOSED PILOT DELTA / REVIEW BEFORE IMPLEMENTATION**

Depends on:
- `09_CT09_PROBLEM_TYPE_CATALOGUE_COVERAGE_MATRIX_R0.md`
- `10_CT09_CURRENT_SITE_D1_D6_GAP_AUDIT_R1.md`

Goal:
Improve CT09 for self-study without inflating content or disturbing existing learner history.

This plan prefers **small, high-value additions and re-layering** over mass content expansion.

---

## 1. Non-negotiable constraints

1. KNTT SGK/SBT remains Core authority.
2. Current-program entrance evidence is Hà Nội 2025–2026 only; n=2.
3. Historical 2023–2024 evidence stays separate.
4. Do not copy commercial-book exercise wording.
5. New learner items must be original or clearly permitted.
6. Existing Practice v1 question IDs and recorded attempts should not be silently deleted/regraded.
7. Mastery/Readiness expansion is out of scope.
8. Skill-taxonomy work is not the goal of this patch.
9. No raw question-count target.

---

## 2. Delta A — Correct learner-facing framing

### A1. Parameter split

Current:
- simple parameter-lite tasks and full parameter classification are blurred.

Change:
- **Core-Support:** find a coefficient/parameter so a given pair satisfies an equation/system; solve after a specified parameter value.
- **Entrance10:** classify one/no/infinite solutions by parameter; integer/positive solution constraints; relationships among solution components.

Files likely affected:
- `docs/kien-thuc/09-he-phuong-trinh/index.md`
- `docs/kien-thuc/09-he-phuong-trinh/bai-tap.md`
- Learning Workspace extension labels if needed.

### A2. Replace unsupported star ratings

Remove:
- fixed star ratings under “Dạng bài thi vào lớp 10”.

Replace with:
- **Nền tảng bắt buộc:** substitution/elimination and system meaning;
- **Đã quan sát trong mẫu Hà Nội 2025–2026:** two-unknown system modeling in 2/2 reviewed papers;
- **Dấu hiệu lịch sử 2023–2024:** transform repeated expression → solve linear system in 2/2 reviewed historical papers;
- explicit note that the sample is small and descriptive.

No claim such as “luôn có / chắc chắn / rất hay gặp” is allowed.

---

## 3. Delta B — Deepen theory where self-study currently breaks

### B1. Add one full graph worked example

Teach:
- choose two points on each line;
- draw/read the lines;
- identify intersection;
- verify intersection algebraically;
- contrast with parallel/coincident cases.

Purpose:
- close PT03 depth gap;
- make the geometry more than a memorized statement.

### B2. Add one full modeling worked example

Use an **original count/value** problem structurally similar to current S1/S3 evidence, not copied from an exam.

Required structure:
1. identify unknowns;
2. state units and conditions;
3. build a small relation table;
4. translate first relation;
5. translate second independent relation;
6. solve;
7. check conditions;
8. answer in context.

Include:
- one tempting wrong model;
- explanation of why it is redundant/wrong.

### B3. Add short calculator-support note

Teach:
- calculator may check/obtain a system solution;
- substitution/elimination understanding remains required;
- always verify that entered coefficients match the original system.

---

## 4. Delta C — Upgrade written problem solving

Add **4 Core written anchors** and **2 Entrance10 anchors**.

All statements must be original.

### Core written anchors

#### C1 — Count/value
Layer: CORE  
Problem type: PT12  
Role: exam-authentic modeling anchor.

Must require:
- two unknowns;
- two independent relations;
- full contextual conclusion.

#### C2 — Price/discount
Layer: CORE / Entrance10 bridge depending arithmetic complexity  
Problem type: PT13  
Role: current-program entrance transfer.

Must teach:
- listed price vs paid price;
- percent conversion;
- equation construction.

#### C3 — Mixture/composition
Layer: CORE_SUPPORT  
Problem type: PT14  
Role: model quantities × concentration.

Must include:
- units;
- total quantity relation;
- component-amount relation.

#### C4 — Genuine work/rate
Layer: CORE_SUPPORT  
Problem type: PT16  
Role: distinguish rate from completed work.

Must **not** be a disguised sum/difference-only problem.

### Entrance10 written anchors

#### C5 — Repeated-expression substitution
Layer: ENTRANCE10  
Problem type: PT18  
Role: historical exam-transfer archetype.

Teach:
- identify repeated expression;
- set temporary variable;
- solve resulting linear system;
- back-substitute;
- domain check.

#### C6 — Parameter classification
Layer: ENTRANCE10  
Problem type: PT19  
Role: one/no/infinite solution.

Teach:
- identify degenerate values;
- avoid unsafe coefficient division;
- connect algebra to line geometry.

---

## 5. Delta D — Written-item pedagogical contract

Every new written anchor must contain:

- **Gợi ý 1 — Nhìn dữ kiện**
- **Gợi ý 2 — Chọn phương pháp**
- **Gợi ý 3 — Bước đầu tiên**
- **Lời giải đầy đủ**
- **Vì sao chọn cách này**
- **Lỗi thường gặp**
- **Tự chấm từng bước**
- **Nếu chưa làm được:** prerequisite link
- optional **Bài tương tự dễ hơn**

### Rubric pattern for modeling anchors

Example 5-point self-check:
1. choose unknowns + units/conditions;
2. form relation 1;
3. form relation 2;
4. solve system correctly;
5. check and conclude in context.

This remains learner self-check, not system-verified mastery evidence.

---

## 6. Delta E — Interactive Practice Bank

### Do not add 50–100 more questions

Current 120-item bank already collapses to only ~21 structural templates.

### E1. Preserve history

Do not delete/re-ID existing questions solely for cleanup.

### E2. Add anti-clone grouping metadata

Introduce an authoring-level field such as:
- `variant_group`

Examples:
- `SYS09-NUM-SUMDIFF`
- `SYS09-MOTION-SAME-TIME`
- `SYS09-COUNT-VALUE`
- `SYS09-PARAM-GIVEN-PAIR`

Session selector should avoid drawing multiple near-identical variants when more diverse families are available.

This is a later implementation detail; the content audit only requires the grouping contract.

### E3. Rebalance, not expand

Priority new interactive coverage:
- PT01 recognition of valid two-variable linear equations;
- PT03 graph/solution-line interpretation;
- PT07 elimination;
- PT09 meaningful decimal/fraction/irrational coefficient variation;
- PT12 count/value;
- PT13 price/discount;
- PT14 mixture;
- PT16 true work/rate.

A small number of high-quality questions per missing family is enough.

### E4. Add hints selectively

Do not hand-author six hints for all 120 legacy items.

Start with:
- new items;
- high-error Core families;
- modeling items.

---

## 7. Delta F — Help / remediation

For each new modeling anchor, create explicit fallback routes:

- unknown-selection trouble → “how to choose two unknowns” mini-explanation;
- cannot form relation → relation-table example;
- algebra trouble → link back to substitution/elimination;
- condition-check trouble → mini checklist;
- still stuck → easier sibling problem;
- AI Tutor can explain further but is not the only path.

---

## 8. Files likely modified in implementation phase

Learner-facing:
- `docs/kien-thuc/09-he-phuong-trinh/index.md`
- `docs/kien-thuc/09-he-phuong-trinh/bai-tap.md`

Potential data updates:
- Learning Workspace JSON;
- micro-practice JSON;
- Practice Bank authoring metadata / selector tests.

Do **not** modify readiness scoring logic in this pilot.

---

## 9. Proposed implementation slices

### Slice P1-A — framing + theory
- parameter split;
- remove unsupported star ratings;
- graph worked example;
- full modeling worked example;
- calculator note.

### Slice P1-B — written anchors + hint ladders
- C1–C4 Core;
- C5–C6 Entrance10;
- rubrics/remediation.

### Slice P1-C — interactive rebalance
- variant-group metadata;
- small missing-family additions;
- selector anti-clone QA.

Each slice gets tests and owner QA before moving on.

---

## 10. Acceptance criteria

CT09 may be reconsidered for `SELF_LEARNING_READY_V1` after:

- D1 theory framing and missing S1 support are fixed;
- D2 has at least one deep graph example and one deep modeling example;
- D3 no longer presents raw 120-question quantity as equivalent to diversity;
- D4 contains the required modeling anchors with rubrics;
- D5 uses source-grounded current/historical wording;
- D6 provides progressive static help for written/modeling tasks;
- no unresolved P0;
- P1 audit items are closed or explicitly justified.

School-semester frequency may remain a separate `INSUFFICIENT_SOURCE` field if the topic otherwise meets the learner-path standard; it must not be fabricated.

---

## 11. Review gate

Before implementation:
- NotebookLM reviews this Delta Plan together with the source-backed matrix and D1–D6 audit.

Required output:
- PASS / REVISIONS_REQUIRED;
- confirm no unnecessary content inflation;
- confirm no Core/Entrance10 contamination;
- confirm written anchors are sufficient for self-study transfer;
- confirm S3 wording is conservative.

A PASS authorizes the **CT09 pilot implementation only**.
