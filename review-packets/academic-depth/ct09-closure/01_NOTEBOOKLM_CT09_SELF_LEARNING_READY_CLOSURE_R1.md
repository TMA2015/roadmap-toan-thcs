# NOTEBOOKLM SOURCE — CT09 Self-Learning Readiness Closure Audit R1

Packet: `MATH-ACADEMIC-DEPTH-CT09-SELF-LEARNING-READY-R1-20261003`  
State: **REVIEW ONLY / CLOSURE AUDIT / NO NEW LEARNER-FACING RELEASE AUTHORIZED**

Permanent sources expected:
- `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`
- `01_TOAN_THCS_MASTER_PLAN_v1.1.md`

Companion batch sources expected:
- `10_CT09_CURRENT_SITE_D1_D6_GAP_AUDIT_R1.md`
- `11_CT09_CONTENT_DELTA_PLAN_R1.md`

This packet asks whether the completed CT09 pilot may now be classified as:

`SELF_LEARNING_READY_V1`

It does **not** ask for new content unless a real remaining P0/P1 gap is identified.

---

# 1. Original accepted state

The accepted R1 gap audit concluded:

`NOT_READY_FOR_SELF_LEARNING_READY_V1`

All six dimensions D1–D6 were `REVISE / P1`.

No P0 mathematical-correctness blocker was identified.

The independently reviewed Delta Plan authorized exactly three implementation slices:
- P1-A — framing + theory;
- P1-B — written anchors + hint ladders;
- P1-C — interactive rebalance.

The Delta Plan acceptance criteria say CT09 may be reconsidered for `SELF_LEARNING_READY_V1` after those gaps are closed or explicitly justified.

---

# 2. Production implementation status

All planned slices are now implemented and owner-QA closed.

## P1-A — framing + theory

Task: `MATH-ACADEMIC-DEPTH-CT09-P1A-001`  
Status: **DONE / OWNER QA PASS desktop + iPad**

Owner-accepted changes include:
- learner-facing navigation and reading layout;
- calculator disclosure/support;
- graph worked example;
- clearer parameter boundary;
- improved modeling teaching;
- accepted mobile/tablet presentation.

Current knowledge page now contains:
- a deep graph example for
  [
  \begin{cases}
  x+y=4\\
  x-y=0
  \end{cases}
  ]
  with point selection, two lines, visible intersection meaning and algebraic verification;
- explicit calculator guidance: use as a checking tool when allowed, not as a substitute for learning the method;
- parameter-lite separated from full Entrance10 parameter classification;
- a full modeling example using 28 notebooks/pencils and total cost, including unknown selection, units, conditions, relation table, two independent equations, solving, contextual check and a highlighted wrong-model contrast.

## P1-B — written anchors + progressive self-study support

Task: `MATH-ACADEMIC-DEPTH-CT09-P1B-001`  
Status: **DONE / NOTEBOOKLM PASS / OWNER PRODUCTION QA PASS**

NotebookLM:
- W1–W10: PASS
- revisions: 0

CT09 Written Exercise Library now has 8 exercises:
- `WX09-SYS-001`, `WX09-SYS-002` preserved;
- six deep append-only anchors `WX09-SYS-003..008`.

Deep anchors:
- 003 count/value;
- 004 price/discount;
- 005 mixture/concentration;
- 006 genuine work/rate;
- 007 repeated-expression substitution;
- 008 parameter classification.

The six new anchors include:
- three progressive static hints;
- full solution;
- “why this method” explanation;
- common mistakes;
- self-check rubric;
- prerequisite/remediation route;
- easier-sibling path where authored.

Layering:
- Core learner labels: **Nền tảng / Củng cố**;
- optional advanced labels: **Ôn thi vào 10**.

No automatic written scoring or Mastery/Readiness credit was introduced.

## P1-C1 — interactive anti-clone rebalance

Task: `MATH-ACADEMIC-DEPTH-CT09-P1C1-001`  
Status: **DONE / OWNER PRODUCTION QA PASS**

Original 120 Practice questions and IDs were preserved.

Implementation:
- added non-evidence `variant_group` metadata;
- original 120 questions grouped into 18 structural groups;
- session selector prefers unseen structural groups before repeating a group;
- weighted preference for unseen / previously wrong questions remains;
- no learner history migration or regrade/backfill.

Owner verified repeated **Bộ 10 câu mới** sessions feel structurally more varied and internal metadata is not visible.

## P1-C2 — small targeted interactive additions

Task: `MATH-ACADEMIC-DEPTH-CT09-P1C2-001`  
Status: **DONE / NOTEBOOKLM PASS / OWNER PRODUCTION QA PASS**

Independent NotebookLM review:
- `SYS09V1_121..129`: 9/9 PASS;
- C1–C10: PASS;
- revisions: 0.

Production Practice state:
- 129 total questions;
- 27 structural groups;
- original `SYS09V1_001..120` preserved;
- exactly 9 reviewed additions:
  - PT01 ×1;
  - PT03 ×1;
  - PT07 ×2;
  - PT09 ×2;
  - PT13 ×1;
  - PT14 ×1;
  - PT16 ×1;
- PT12 ×0 by explicit anti-inflation decision.

The 9 new interactive questions each have two authored hints and an explanation.

---

# 3. Current D1–D6 closure evidence

## D1 — Theory Depth

Original gaps:
- calculator support absent;
- geometric meaning under-taught;
- parameter boundary inconsistent;
- modeling theory too procedural.

Current evidence:
- calculator-support disclosure is present;
- deep graph construction/interpretation example is present;
- parameter-lite is separated from Entrance10 parameter classification;
- deep real-world modeling example contains unknown choice, units, conditions, relation table, equation construction, solve and contextual verification.

Proposed closure:
`D1 = PASS`

Reviewer must independently confirm.

## D2 — Worked Examples

Original gaps:
- procedure-heavy;
- no deep authentic modeling anchor;
- no canonical “why this model?” example.

Current evidence:
- graph example now connects construction → intersection → algebra;
- full count/value modeling example makes equation choice the central reasoning step;
- explicit wrong-model contrast checks units;
- P1-B gives additional deep transfer anchors for discount, mixture and genuine work/rate.

Proposed closure:
`D2 = PASS`

Reviewer must independently confirm.

## D3 — Interactive Practice

Original findings:
- 120 question strings collapsed to ~21 recurring templates;
- elimination and several problem families were thin;
- raw quantity overstated diversity.

Current evidence:
- selector now uses structural `variant_group`;
- bank is 129 questions / 27 structural groups;
- P1-C2 adds only nine high-value missing/thin structures;
- no mass expansion;
- PT12 deliberately receives no new item because existing coverage is already sufficient;
- historical IDs remain preserved.

Proposed closure:
`D3 = PASS`

Reviewer must verify that displaying a factual bank count is not itself a claim of diversity.

## D4 — Written Problem Solving

Original gaps:
- written Core mostly too short;
- modeling coverage narrow;
- solutions lacked rubric/remediation;
- Challenge labeling was shallow.

Current evidence:
- six independently reviewed deep anchors now cover count/value, discount, mixture, genuine work/rate, repeated-expression transfer and parameter classification;
- Core and Entrance10 are explicitly separated;
- anchors include progressive hints, solution rationale, mistakes, rubric and remediation;
- old short written items remain as supplementary practice rather than being treated as the complete written curriculum.

Proposed closure:
`D4 = PASS`

Reviewer must independently confirm.

## D5 — Exam & Authentic Coverage

Original gap:
- unsupported exam-frequency star ratings;
- school-semester/final-test frequency source still insufficient.

Current production state:
- the old problem-type exam-frequency star claims identified in the R1 gap audit are no longer present;
- Entrance10 section uses conservative descriptive wording and separates Core from optional exam-transfer material;
- school-semester/final-test frequency remains explicitly an evidence gap and should remain `INSUFFICIENT_SOURCE` rather than being invented.

One learner-facing header still contains:
- `Mức ưu tiên: ⭐⭐⭐⭐⭐`

This is a **generic Roadmap priority badge**, not an exam-frequency table.

Required independent decision:
- Is this generic priority badge sufficiently defined/harmless to keep?
- Or does learner-facing source discipline require removing it before `SELF_LEARNING_READY_V1`?

Do not silently assume either answer.

Proposed closure:
`D5 = PASS_IF_GENERIC_PRIORITY_BADGE_ACCEPTABLE`

## D6 — Help / Remediation

Original gap:
- written/modeling tasks jumped too quickly from a small hint to full answer;
- AI could not be the only help path.

Current evidence:
- the six deep written/modeling anchors have three progressive static hints plus full solution, rationale, mistakes, rubric and remediation;
- the nine new interactive P1-C2 questions have two authored hints;
- all Practice questions still have answer/explanation behavior;
- AI remains an optional additional help layer.

### Owner-approved static-hint policy

The project explicitly **does not require hints on every interactive question**.

Reason:
- hint coverage is a pedagogical decision, not a completeness quota;
- simple recognition/routine legacy items do not automatically need an authored hint ladder;
- static hints should be added when a new question or a genuine reasoning bottleneck benefits from them;
- AI can provide extra assistance, but AI must not be the only route for deep written/modeling anchors.

Current CT09 Practice:
- 129 total questions;
- 9 new P1-C2 questions have exactly 2 stored hints;
- the 120 historical main-bank questions do not have stored hints;
- this is intentional and is **not** considered a defect by the owner.

This policy is aligned with accepted Delta E4 wording:
- “Add hints selectively”
- “Do not hand-author six hints for all 120 legacy items”
- start with new items / high-error Core families / modeling items.

Required independent decision:
- confirm that selective hinting plus strong static help on the deep written/modeling anchors satisfies D6;
- do **not** require universal hint coverage merely for visual consistency.

Proposed closure:
`D6 = PASS`

---

# 4. Delta Plan acceptance criteria

Please explicitly review each item.

### A1
D1 theory framing and missing S1 support are fixed.

### A2
D2 has at least one deep graph example and one deep modeling example.

### A3
D3 no longer treats raw question quantity as equivalent to structural diversity.

### A4
D4 contains the required modeling anchors with rubrics.

### A5
D5 uses source-grounded current/historical wording.

### A6
D6 provides progressive static help for written/modeling tasks.

### A7
No unresolved P0 remains.

### A8
P1 audit items are closed or explicitly justified.

### A9
School-semester/final-test frequency may remain `INSUFFICIENT_SOURCE` as a separate evidence field without blocking topic readiness.

---

# 5. Learner-facing minimalism / help policy

Owner-approved design principle:

> Learner-facing UI should show information that directly helps the learner understand, attempt, receive useful help, self-check, or choose the next learning step. Operational metadata should remain hidden unless it changes the learner’s immediate action.

Applied CT09 examples:
- estimated-time tags were removed from written exercise cards;
- internal `variant_group`, clone-family and review metadata remain hidden;
- legacy internal layer codes are translated to learner labels;
- hint buttons are shown only when stored hints actually exist.

This principle should not weaken academic completeness; it is a UI/content-discipline rule.

---

# 6. Non-goals / protected boundaries

A closure PASS does **not** authorize:
- Mastery/Readiness scoring changes;
- historical regrade/backfill;
- learner-history migration;
- automatic written scoring;
- mass copying CT09 content changes into other topics;
- fabricated school-semester exam-frequency claims.

A closure PASS only classifies the **CT09 academic/self-study content path** as sufficiently complete for the V1 learner-path standard.

---

# 7. Required independent review

Evaluate the current post-P1 implementation against:
- the accepted R1 D1–D6 gap audit;
- the accepted Content Delta Plan;
- the permanent project rules / Master Plan.

Return:

## D1–D6
- D1|PASS or REVISE
- D2|PASS or REVISE
- D3|PASS or REVISE
- D4|PASS or REVISE
- D5|PASS or REVISE
- D6|PASS or REVISE

## Original-gap closure
Explicitly decide whether every original P1 gap is:
- CLOSED;
- JUSTIFIED_OPEN;
- or STILL_BLOCKING.

## Acceptance criteria
- A1..A9: PASS / REVISE

## Specific decisions
- PRIORITY_BADGE|KEEP or REMOVE_BEFORE_READY
- SELECTIVE_HINT_POLICY|PASS or REVISE
- SCHOOL_SEMESTER_FREQUENCY_GAP|NON_BLOCKING_INSUFFICIENT_SOURCE or BLOCKING

## Final verdict

Use exactly one:

```
OVERALL|SELF_LEARNING_READY_V1
```

or

```
OVERALL|REVISIONS_REQUIRED
```

If revisions are required:
- list only concrete remaining blockers;
- classify each as P0/P1/P2;
- do not propose broad content expansion when a small correction is sufficient.

If ready, end with:

`CLEARED_FOR_CT09_SELF_LEARNING_READY_V1_CLOSURE`
