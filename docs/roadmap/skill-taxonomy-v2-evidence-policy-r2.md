# Skill Taxonomy v2 — I5 Evidence Policy R2

Date: 2026-10-03
Status: ACCEPTED POLICY / NO RUNTIME ACTIVATION
Supersedes: policy draft R1 for I5 closure decisions
Independent recheck: 8/8 PASS — `review-packets/skill-taxonomy/phase-i5/08_NOTEBOOKLM_I5_R2_PASS_RECEIPT.md`

## 1. Purpose

I5 defines how Taxonomy v2 Practice evidence may be interpreted without overstating what it proves.

I5 does not activate Mastery, Core Readiness, learner-facing general Skill Map release, backfill/regrade, migration, automatic written scoring, or hard learning gates.

The current Taxonomy v2 lane is Practice-origin formative/descriptive evidence. Future Mastery or Readiness requires a separately authorized assessment policy.

## 2. Frozen evidence semantics

1. One answer has at most one primary family target.
2. Independent-unit identity is family_id + topic_id + reviewed clone/question unit.
3. The first unseen, unassisted reviewed unit is independent evidence whether correct or incorrect.
4. Incorrect first-unassisted units are negative independent evidence and remain in the denominator.
5. Exact-question repeats do not create new independent units.
6. Clone-family repeats do not create new independent units.
7. Assisted attempts may remain as provenance/formative events but are not independent evidence.
8. After assistance on one question, a later unseen sibling in a not-yet-recorded independent unit may be independent evidence if unassisted; retrying the assisted question is not new independent evidence.
9. NO_FAMILY/formative rows never create family evidence.
10. Legacy Practice statistics and Taxonomy v2 evidence remain separate.
11. No historical backfill or regrade.
12. Earlier independent evidence is immutable; later success never rewrites an earlier wrong unit.

## 3. Separate four dimensions

### 3.1 Quantity
How many independent units have been observed relative to reviewed bank capacity?

### 3.2 Quality
What evidence classes and task structures are represented?

### 3.3 Correctness
What correct/incorrect pattern is visible in the observed independent units?

### 3.4 Assessment corroboration
Is there separately verified assessment or constructed-response evidence where the competence requires it?

Practice quantity + quality + correctness may support a later decision, but do not themselves create Mastery or Readiness.

## 4. D1 — Evidence sufficiency model

Decision: HYBRID / FAMILY-CAPACITY + EVIDENCE-CLASS AWARE.

Practice evidence sufficiency is a reviewability state, not mastery.

Inputs:
- independent units observed;
- maximum reviewed independent-unit capacity for the family;
- evidence-class mix;
- source/question-structure diversity where available.

No universal minimum count applies to every family.

## 5. D2 — Sparse-family policy

### Capacity 0
State: NO_DIRECT_EVIDENCE.
No Practice sufficiency conclusion is possible.

### Capacity 1
Maximum Practice interpretation: EARLY_EVIDENCE.
1/1 correct or 0/1 incorrect is one observation only.

### Capacity 2
Maximum Practice interpretation: LIMITED_EVIDENCE.
2/2, 1/2 or 0/2 remain sparse descriptive outcomes.

### Capacity >= 3
A family may reach PRACTICE_EVIDENCE_SUFFICIENT_FOR_REVIEW when:
- at least 3 independent units have been observed; and
- the evidence classes are relevant to the intended competence.

Correctness does not determine sufficiency; it is reported separately.

## 6. D3 — Evidence-class policy

### A. Descriptive-only / non-mastery-supporting by themselves
- MCQ_RECOGNITION_ONLY
- MCQ_SUPPORTING_EVIDENCE_ONLY
- MCQ_CONTEXT_PARTIAL_EVIDENCE
- MCQ_EXAM_SKILL_PARTIAL_EVIDENCE

Use for progress/remediation context. Never sufficient by themselves for a mastery claim.

### B. Direct Practice evidence for routine/procedural performance
- MCQ_FINAL_ANSWER_ONLY
- MCQ_FINAL_OUTPUT_ONLY
- MCQ_APPLICATION_FINAL_ANSWER_ONLY
- MCQ_MEASUREMENT_FINAL_ANSWER_ONLY
- MCQ_DIRECT_PARTIAL_EVIDENCE

These may support Practice sufficiency for routine/procedural families, but remain formative Practice evidence and do not independently produce Mastery.

### C. Partial reasoning / proof / modeling / construction / transfer
- MCQ_METHOD_SELECTION_ONLY
- MCQ_MODELING_PARTIAL_FINAL_ANSWER
- MCQ_MODELING_PARTIAL_SYSTEM_SELECTION
- MCQ_GRAPH_DRAWING_PARTIAL_POINT_SELECTION
- MCQ_MULTISTEP_PARTIAL_FINAL_ANSWER
- MCQ_CONSTRUCTION_PARTIAL_FINAL_ANSWER
- MCQ_PROOF_PARTIAL_FINAL_ANSWER
- MCQ_PROOF_OR_SYNTHESIS_PARTIAL_FINAL_ANSWER
- MCQ_CROSS_TOPIC_PARTIAL_EVIDENCE
- MCQ_METHOD_PARTIAL_EVIDENCE

These are useful partial evidence but require stronger corroboration if the intended competence includes explanation, construction, modeling, proof, or multi-step written reasoning.

No evidence class receives an automatic numerical mastery weight in I5.

## 7. D4 — Written/constructed-response boundary

Future mastery/readiness for a competence requires independently verified constructed-response evidence when the intended skill essentially includes:
- proof or justification;
- mathematical modeling/setup;
- construction or graph production;
- multi-step explanation where the reasoning path is part of the competence.

Paper self-check/rubric remains a learning activity, not system-verified evidence.

Do not invent automatic handwriting/AI scoring.

A future verified written-response lane must define its own provenance and verification method before it can contribute to Mastery/Readiness.

## 8. D5 — Correctness pattern

Evidence accuracy = correct independent units / attempted independent units remains descriptive.

Rules:
- N = 0: no evidence.
- N = 1–2: show counts with sparse-data wording; do not present the percentage as a stable skill judgment.
- N >= 3: counts and percentage may be shown descriptively with denominator visible.
- One wrong unit never permanently labels the learner weak.
- One correct unit never labels the learner mastered.
- Earlier wrong evidence is not erased by later success.

A later correct unseen independent unit may be described as recovery/progress at the family level, without rewriting prior units.

## 9. D6 — Recency

Initial policy:
- no time decay;
- no automatic recency weighting;
- no expiry of old independent evidence.

For learner support only, a later UI may show a recent pattern of up to the latest 5 independent units by timestamp.
If fewer than 5 exist, show all observed units.

This is descriptive/remediation support, not a Mastery/Readiness gate.

## 10. D7 — Cross-topic reuse

One family remains one canonical learner-facing identity.

Topic provenance is preserved on each independent unit.

Cross-topic diversity may be described as transfer evidence, but receives no automatic bonus or multiplier in I5.

Future topic-level Readiness may use topic provenance without splitting the family into duplicate skills.

## 11. D8 — Assistance and recovery

- hint-assisted success: formative/provenance only;
- full-solution exposure: formative/provenance only;
- retry of the same question: never a new independent unit;
- retry within an already-recorded clone unit: never a new independent unit;
- later unassisted unseen sibling in a not-yet-recorded independent unit: may create new independent evidence;
- later correct independent evidence may support a derived recovery/progress description;
- prior wrong independent evidence remains unchanged.

## 12. D9 — Core Readiness layer roles

Future Core Readiness may use only KNTT-Core as the required curriculum layer.

- Core-Support: remediation/support information; not a silent hard gate.
- Entrance10: separate.
- THPT-Bridge: separate.
- Specialized-Challenge: separate.

Optional/Bridge/Challenge evidence can never reduce Core Readiness.

Exact Readiness scoring/state logic is deferred to a later assessment gate.

## 13. D10 — Unseen Core families

Unseen Core family state:
NO_EVIDENCE / MORE_EVIDENCE_NEEDED.

It is not weak and is not an incorrect result.

However, unseen required Core must not simply disappear while the system claims global readiness.

Future Readiness must separate:
- Core evidence/assessment coverage; and
- observed performance.

The exact denominator/sampling rule is deferred until the independent Readiness assessment blueprint is reviewed.

## 14. D11 — Learner-facing wording

Approved concepts:

- NO_EVIDENCE → Chưa có bằng chứng
- EARLY_EVIDENCE → Bằng chứng ban đầu
- LIMITED_EVIDENCE → Dữ liệu còn ít
- PRACTICE_EVIDENCE_SUFFICIENT_FOR_REVIEW → Đã có đủ lượt luyện để xem xu hướng
- mixed/incorrect pattern → Nên củng cố thêm
- written corroboration needed → Cần luyện tự luận

Do not expose “Mastery Eligible” or “Readiness Eligible” as learner-facing states in I5.

## 15. D12 — Sparse-percentage UI policy

Future implementation rule:
- N = 0: no percentage.
- N = 1–2: show correct/attempted count plus “Dữ liệu còn ít”; hide the raw percentage from the primary skill judgment.
- N >= 3: a descriptive percentage may be shown with its denominator and without mastery/weak coloring.

This is a policy decision only. I5 closure does not require the UI to change before the next implementation gate.

## 16. Metadata / storage policy

Current Practice event/store fields are sufficient for I5 descriptive policy:
- family/topic;
- evidence class;
- correctness;
- timestamps;
- assistance state/kind;
- immutable independent-unit identity.

Derived recovery does not require a stored unassisted_recovery_flag.

Do not add attempt_context_type merely to mix Practice and Readiness; future assessment evidence should remain separate unless a later architecture review explicitly changes that.

A future verified constructed-response lane may require new metadata, but that is outside I5 runtime activation.

## 17. I5 closure rule

I5 policy may close only after independent recheck confirms:
- negative first-unassisted evidence remains independent;
- Practice sufficiency is not Mastery;
- unseen Core is not weak and is not silently omitted from a global readiness claim;
- sparse N <= 2 is not over-interpreted;
- self-check paper work is not verified mastery evidence;
- no runtime/UI activation or backfill is authorized.

Closure of I5 means policy accepted for later implementation design, not runtime release.
