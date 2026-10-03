# Skill Taxonomy v2 — I5 Evidence Policy Draft R1

Date: 2026-10-03  
Status: **REVIEW_ONLY / NO_RUNTIME_ACTIVATION**

## 1. Purpose

I3 is closed across the full reviewed CT02–CT25 Practice basis. I4 owner preview is also closed PASS.

I5 is the first gate allowed to discuss **how evidence may eventually be interpreted**. It does not authorize mastery labels, Readiness scores, hard gates, migration/backfill, or learner-facing activation.

The problem is not merely “choose a percentage”. The current evidence bank is intentionally heterogeneous:

- 131 learner-facing families in the durable registry;
- 127 currently have direct independent runtime evidence;
- 4 intentionally have no direct independent runtime evidence: `RATIO-MODEL`, `ID-APPLY`, `ID-PROOF`, `RATEX-INTEGER`;
- 3,114 reviewed Practice rows;
- 2,900 active family-linked rows;
- 214 intentional NO_FAMILY/formative guards;
- max 650 topic-scoped independent units.

Family evidence capacity is highly uneven:

| Max independent units available in current reviewed bank | Number of families |
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

Therefore a universal rule such as “3 independent questions before judging a skill” would be structurally impossible for 45/131 families in the current reviewed bank. I5 must not hide this asymmetry.

## 2. I4 production observation that motivates I5

The owner’s real browser profile at I4 QA showed:

- 42 independent units;
- 18 correct independent units;
- 51 seen questions;
- 51 recent events;
- 28/131 families with at least one independent unit.

Representative visible cards already demonstrate the risk of over-interpretation:

- a family with 1 unit can show 0/1 = 0%;
- another family with 1 unit can show 1/1 = 100%;
- another family with 2 units can show 2/2 = 100%.

These are useful descriptive observations, but they are not sufficient by themselves to claim “weak”, “strong”, “mastered”, or “ready”.

Legacy Practice also remains a different evidence source. The same owner profile contains 74 legacy tags with attempt/correct percentages. I4 correctly displays these separately and does not combine them with Taxonomy v2 evidence accuracy.

## 3. Fixed rules inherited from I2–I4

These rules are already implemented and must not be reopened casually:

1. One answer may create at most one primary family evidence target.
2. Independent evidence is based on reviewed family + topic + clone/question unit.
3. Same-question repeats do not create a new independent unit.
4. Clone-family repeats do not create a new independent unit.
5. Assisted attempts may be retained as provenance but are not independent evidence.
6. NO_FAMILY/formative rows do not create family evidence.
7. Legacy Practice and Taxonomy v2 remain separate stores.
8. No historical backfill or regrade.
9. G2 remains frozen and separate.
10. Optional / Bridge / Challenge evidence may never lower Core Readiness.
11. Evidence accuracy is descriptive: correct independent units / independent units attempted.
12. A missing family record means “no evidence”, not “weak”.
13. A small denominator must not be presented as a stable mastery conclusion.

## 4. Candidate evidence model for review

I5 should review a **multi-dimensional sufficiency model**, not a single accuracy threshold.

### 4.1 Quantity

Candidate input:
- number of independent units observed;
- number of independent units available in the reviewed bank for that family;
- number of distinct source files / question structures represented.

Open decision:
- absolute minimum;
- relative coverage of available units;
- or hybrid rule.

A family with max capacity 1–2 cannot be judged by the same count rule as a family with capacity 15–21.

### 4.2 Quality / evidence class

Current active rows include materially different evidence classes, including:

- recognition-only;
- final-answer only;
- final-output only;
- method selection;
- modeling partial evidence;
- graph-drawing partial evidence;
- multistep partial evidence;
- construction partial evidence;
- proof/synthesis partial evidence;
- measurement/application evidence;
- direct/supporting/context/method/cross-topic/exam partial evidence.

Open decision:
- whether all independent units count equally toward sufficiency;
- which classes may support only “observed evidence” but not mastery;
- which families require stronger evidence types.

### 4.3 Independence and assistance

Recommended fixed interpretation:
- only independent units enter any future mastery/sufficiency numerator/denominator;
- assisted events remain useful for learner support and UI explanation;
- assisted success must not be silently converted into independent success;
- repeated success after feedback is progress evidence, but not a new independent unit.

### 4.4 Correctness

Accuracy alone is insufficient.

Candidate interpretation:
- 1/1 or 0/1 = one observation, not a stable status;
- 2/2 or 0/2 may still be sparse;
- incorrect independent evidence should be visible and useful for remediation;
- one failure must not permanently label the learner “weak”.

Open decision:
- whether recent independent evidence should have more weight than old evidence;
- whether recovery after an earlier wrong unit changes descriptive status;
- whether a future mastery claim requires all recent units, a majority, or a pattern across structures.

### 4.5 Cross-topic reuse

One family may be reused in more than one topic.

Recommended interpretation:
- one family card remains the canonical learner-facing identity;
- unit provenance keeps topic;
- cross-topic diversity may increase confidence;
- a reused family must not be double-counted as two different skills.

Open decision:
- whether cross-topic evidence is merely additive or qualifies as stronger transfer evidence.

### 4.6 Written / constructed-response boundary

The Master Plan already states that MCQ accuracy is not enough to prove deep understanding, especially for proof, modeling, explanation, and written reasoning.

Recommended boundary:
- MCQ-only evidence may support descriptive progress;
- families whose intended competence includes proof/justification/model construction should not receive a future “mastered” status from MCQ evidence alone;
- paper/rubric self-check must not be treated as system-verified mastery;
- automatic written scoring remains out of scope unless separately validated.

I5 must identify which family categories require written evidence before mastery or Readiness can ever be claimed.

## 5. Candidate learner-facing states

The following are **labels for review**, not approved runtime labels:

- `NO_EVIDENCE` — no independent unit observed.
- `EARLY_EVIDENCE` — independent evidence exists, but sufficiency is not yet established.
- `SUFFICIENT_EVIDENCE_FOR_REVIEW` — enough reviewed evidence exists to evaluate a pattern, but this is still not mastery.
- `MASTERY_ELIGIBLE` — only if future policy says quantity + quality + correctness + written-evidence requirements are satisfied.
- `READINESS_ELIGIBLE` — separate topic/Core policy, never inferred directly from family accuracy alone.

I5 may reject or rename these states. The key rule is that “evidence sufficiency” and “mastery” remain separate concepts.

## 6. Readiness v2 boundary

Readiness must remain OFF until I5 is accepted and a later implementation gate is explicitly authorized.

Questions to review:

1. Which family layers contribute?
   - KNTT-Core is the obvious candidate.
   - Core-Support may inform support but should not silently become a hard gate.
   - Entrance10 / THPT-Bridge / Specialized-Challenge must not lower Core Readiness.

2. What is the unit of readiness?
   - topic-level;
   - strand-level;
   - whole-roadmap;
   - or a combination.

3. How are unseen Core families handled?
   - not ready;
   - unknown;
   - or excluded until sufficient opportunity exists.

4. How should sparse-bank families be treated?
   - their evidence capacity may be only 1–2 units.

5. What role does written evidence play?

6. Should Readiness use only recent evidence, all evidence, or a capped recent window?

7. How should recovery after remediation be reflected without claiming causality from one session?

## 7. Recommended conservative defaults pending review

Until I5 closes:

- keep I4 wording as **Evidence accuracy**;
- always show the denominator;
- do not color 0% as “weak” or 100% as “mastered”;
- do not rank learners/families by sparse percentages;
- do not merge legacy Practice accuracy into Taxonomy v2 accuracy;
- do not set a universal minimum independent-unit count;
- do not apply time decay;
- do not activate Readiness;
- do not activate mastery;
- preserve learner choice and soft remediation.

## 8. I5 decision outputs required

NotebookLM/academic review should return explicit decisions for:

1. **Evidence sufficiency model** — absolute, relative, hybrid, or family-class-specific.
2. **Sparse family rule** — especially capacity 0, 1, and 2.
3. **Evidence-class weighting/eligibility**.
4. **Written-evidence-required family criteria**.
5. **Correctness pattern rule** — if any.
6. **Recency / decay rule**.
7. **Cross-topic reuse interpretation**.
8. **Assisted/recovery event role**.
9. **Core Readiness contributing layers**.
10. **Unseen-family treatment**.
11. **Allowed learner-facing labels and wording**.
12. **Whether I4 should hide raw percentages for denominator 1–2, show them with a caution, or keep them unchanged.**

Each decision must distinguish:
- academic policy;
- product wording;
- implementation consequence.

## 9. Non-goals

I5 does not authorize:

- code changes to mastery/readiness;
- learner-facing release of Skill Map v2;
- history migration/backfill;
- automatic written scoring;
- hard 100% gates;
- AI-generated diagnosis without reviewed evidence;
- replacing the 131-family registry.
