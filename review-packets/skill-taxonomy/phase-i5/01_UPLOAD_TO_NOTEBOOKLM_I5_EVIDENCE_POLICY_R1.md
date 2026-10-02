# NOTEBOOKLM SOURCE — Skill Taxonomy v2 I5 Evidence Policy Review R1

**Packet ID:** `MATH-SKILL-TAXONOMY-V2-I5-EVIDENCE-POLICY-R1-20261003`  
**Date:** 03/10/2026  
**State:** `REVIEW ONLY / NO MASTERY OR READINESS ACTIVATION`

## 1. Purpose

Taxonomy v2 academic structure and shadow collection are now closed through CT25. The next question is not whether the mapping is correct, but **how the collected evidence may eventually be interpreted without overstating what it proves**.

I5 must define an evidence policy before any future mastery/readiness implementation.

Do not review the taxonomy family definitions again unless an I5 decision logically exposes a contradiction. Do not change question mappings or family IDs in this review.

## 2. Locked source state

Durable family registry:
- path: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`
- blob: `c2f2e5b8d78a58d874f88524861326223fdbdf45`
- 131 unique learner-facing families
- 98 KNTT-Core
- 6 Core-Support
- 20 Entrance10
- 3 THPT-Bridge
- 4 Specialized-Challenge

Full shadow runtime policy:
- path: `docs/assets/data/curriculum/taxonomy-v2-runtime/i3g-ct02-25-r1.json`
- blob: `945fc1d42ff1dc6e1e3b52b41808592ce338e399`
- 3,114 reviewed Practice rows
- 2,900 active family-linked rows
- 214 intentional NO_FAMILY/formative guards
- 127 families with direct runtime evidence
- 650 max topic-scoped independent units

Four registry families intentionally have no direct runtime evidence in the current reviewed bank:
- `RATIO-MODEL`
- `ID-APPLY`
- `ID-PROOF`
- `RATEX-INTEGER`

## 3. Accepted evidence semantics — do not reopen by default

1. Legacy Practice store remains separate: `toan-thcs-practice-v1`.
2. Taxonomy v2 store: `toan-thcs-taxonomy-v2-evidence-v1`.
3. One answer has at most one primary family evidence target.
4. Same-question repeat is not a new independent unit.
5. Clone-family repeat is not a new independent unit.
6. Assisted attempt may be stored but is not independent evidence.
7. NO_FAMILY/formative rows create no family evidence.
8. Independent unit identity is family + topic + reviewed clone/question unit.
9. Cross-topic family reuse remains one learner-facing family, while topic provenance is preserved.
10. No history backfill or regrade.
11. Evidence accuracy = correct independent units / attempted independent units.
12. Evidence accuracy is descriptive, not mastery.
13. Missing evidence means unknown/no evidence, never “weak”.
14. Optional/Bridge/Challenge evidence must never lower Core Readiness.
15. Paper self-check/rubric is not system-verified mastery.
16. MCQ correctness alone does not prove deep understanding for proof/modeling/justification competencies.

## 4. I4 owner production observation

Owner QA on the deployed read-only Skill Map preview showed:

- 42 independent units;
- 18 correct independent units;
- 51 seen questions;
- 51 recent events;
- 28/131 families with at least one independent unit in that browser profile;
- evidence-only filter worked;
- KNTT-Core subset in the filtered profile: 23 families;
- legacy Practice remained separate with 74 old tags.

Representative cards showed the practical interpretation problem:
- 1 independent unit may display 0/1 = 0%;
- 1 independent unit may display 1/1 = 100%;
- 2 independent units may display 2/2 = 100%.

These percentages are mathematically correct summaries but can be misleading if interpreted as stable skill judgments.

## 5. Structural evidence-capacity asymmetry

The current reviewed bank has the following maximum independent-unit capacity by family:

| Max units | Families |
|---:|---:|
| 0 | 4 |
| 1 | 12 |
| 2 | 29 |
| 3 | 18 |
| 4 | 17 |
| 5 | 12 |
| 6 | 9 |
| 7 | 5 |
| 8 | 6 |
| 10 | 5 |
| 11 | 3 |
| 12 | 1 |
| 13 | 1 |
| 14 | 1 |
| 15 | 3 |
| 16 | 1 |
| 17 | 1 |
| 20 | 2 |
| 21 | 1 |

Important consequence:
- 16/131 families have capacity <= 1;
- 45/131 have capacity <= 2;
- 63/131 have capacity <= 3.

Therefore a single universal “minimum 3 independent units” policy cannot work as a general mastery prerequisite for the current reviewed bank.

The accompanying machine preflight file provides all 131 families with:
- layer;
- topics;
- active row count;
- max independent units;
- source-file count;
- evidence-class distribution;
- mapping-role distribution.

## 6. Evidence classes present

Active runtime evidence includes:

- `MCQ_RECOGNITION_ONLY`
- `MCQ_FINAL_ANSWER_ONLY`
- `MCQ_FINAL_OUTPUT_ONLY`
- `MCQ_METHOD_SELECTION_ONLY`
- `MCQ_MODELING_PARTIAL_FINAL_ANSWER`
- `MCQ_MODELING_PARTIAL_SYSTEM_SELECTION`
- `MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION`
- `MCQ_MULTISTEP_PARTIAL_FINAL_ANSWER`
- `MCQ_CONSTRUCTION_PARTIAL_FINAL_ANSWER`
- `MCQ_PROOF_PARTIAL_FINAL_ANSWER`
- `MCQ_APPLICATION_FINAL_ANSWER_ONLY`
- `MCQ_PROOF_OR_SYNTHESIS_PARTIAL_FINAL_ANSWER`
- `MCQ_MEASUREMENT_FINAL_ANSWER_ONLY`
- `MCQ_DIRECT_PARTIAL_EVIDENCE`
- `MCQ_SUPPORTING_EVIDENCE_ONLY`
- `MCQ_CONTEXT_PARTIAL_EVIDENCE`
- `MCQ_METHOD_PARTIAL_EVIDENCE`
- `MCQ_CROSS_TOPIC_PARTIAL_EVIDENCE`
- `MCQ_EXAM_SKILL_PARTIAL_EVIDENCE`

Do not assume these classes are equally strong evidence for mastery.

## 7. Master Plan constraints relevant to I5

The Master Plan requires:

- formative evidence and assessment evidence remain conceptually distinct;
- do not mechanically combine them into one mastery score;
- one assessed skill per graded question; supporting skills do not automatically receive mastery credit;
- accuracy alone is not enough to claim deep understanding;
- low-data cases must say “chưa đủ bằng chứng” rather than make a confident diagnosis;
- distinguish correct without help, correct after help, repeated errors, later retest, and history;
- written proof/modeling/justification may require rubric/constructed-response evidence;
- paper self-check is not system-verified evidence;
- no hard 100% gate;
- learner agency remains important;
- optional/Challenge branches do not become Core prerequisites.

## 8. Decision problem

Review the evidence-policy draft and determine the most defensible policy for this specific system.

Do not import a generic educational threshold unless you explain why it fits the actual bank structure above.

For each item below return one of:
- `APPROVE`
- `APPROVE_WITH_CHANGES`
- `REJECT`
- `INSUFFICIENT_EVIDENCE`

### D1 — Evidence sufficiency model
Choose and justify:
- absolute count;
- relative coverage;
- hybrid;
- family/evidence-class-specific;
- or another explicitly defined rule.

### D2 — Sparse families
Define policy for max capacity:
- 0;
- 1;
- 2.

State clearly whether any such family can ever become “mastery eligible” without adding new assessment material.

### D3 — Evidence-class strength
Classify the evidence classes into policy categories such as:
- descriptive only;
- eligible for sufficiency;
- eligible for mastery support;
- requires corroboration;
- not eligible for mastery.

Use different categories if academically better.

### D4 — Written evidence boundary
Define which competency/family characteristics require written/constructed evidence before mastery can be claimed.

Do not assume automatic handwriting/AI scoring exists.

### D5 — Correctness pattern
Decide whether mastery/sufficiency may use:
- raw accuracy;
- recent accuracy;
- minimum correct count;
- error-recovery pattern;
- or a different pattern.

Explicitly address 1/1, 0/1, 2/2, and 0/2.

### D6 — Recency
Choose:
- no decay initially;
- fixed recent window;
- recency weighting;
- or another rule.

Explain the learner-data implications.

### D7 — Cross-topic reuse
Decide whether evidence from the same family across different topics should:
- simply aggregate;
- receive extra confidence as transfer evidence;
- or remain topic-qualified for mastery.

### D8 — Assisted/recovery evidence
Define the role of:
- hint-assisted success;
- full-solution exposure;
- retry after feedback;
- later unassisted recovery.

### D9 — Core Readiness contributors
Specify layer roles:
- KNTT-Core;
- Core-Support;
- Entrance10;
- THPT-Bridge;
- Specialized-Challenge.

No optional layer may reduce Core Readiness.

### D10 — Unseen family
Define how an unseen Core family should be represented:
- unknown;
- insufficient evidence;
- not ready;
- excluded from denominator;
- or another policy.

### D11 — Learner-facing vocabulary
Approve or replace wording for:
- no evidence;
- early evidence;
- sufficient evidence for review;
- mastery eligible;
- readiness eligible.

Avoid stigmatizing or falsely certain labels.

### D12 — Sparse-percentage UI
For denominator 1–2, choose:
- show raw percentage unchanged;
- show with explicit sparse-evidence caution;
- hide percentage until sufficiency threshold;
- or another rule.

## 9. Required architecture checks

Return PASS/FAIL with reasoning for each:

- ARCH_1: Practice legacy percentages remain separate from Taxonomy v2.
- ARCH_2: Mastery and evidence sufficiency are distinct.
- ARCH_3: NO_FAMILY never affects family mastery.
- ARCH_4: assisted/repeat/clone events cannot inflate independent evidence.
- ARCH_5: optional/Bridge/Challenge cannot reduce Core Readiness.
- ARCH_6: low-data cases do not become confident weakness/mastery labels.
- ARCH_7: cross-topic reuse remains one family identity.
- ARCH_8: proof/modeling/written-reasoning limits of MCQ are acknowledged.
- ARCH_9: paper self-check is not treated as verified mastery.
- ARCH_10: no backfill/regrade is required.
- ARCH_11: learner agency / soft remediation is preserved.
- ARCH_12: policy is implementable with the current stored event fields, or explicitly identifies any new metadata needed.

## 10. Required output

Return:

1. `packet_id`
2. `overall_verdict`
3. `decision_matrix` for D1–D12
4. `architecture_checks` ARCH_1–ARCH_12
5. `recommended_policy_r1` with explicit rules
6. `family_capacity_policy` for max units 0,1,2,3+
7. `evidence_class_policy`
8. `written_evidence_policy`
9. `readiness_layer_policy`
10. `learner_facing_wording`
11. `metadata_gaps`
12. `implementation_risks`
13. `required_changes_before_i5_close`

Do not authorize runtime activation. I5 closure only means the evidence policy is academically/product accepted and ready for a later implementation gate.
