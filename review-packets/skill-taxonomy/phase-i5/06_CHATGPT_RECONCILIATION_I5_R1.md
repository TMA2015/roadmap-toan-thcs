# I5 R1 NotebookLM reconciliation — NOT CLOSED

Date: 2026-10-03  
Packet: `MATH-SKILL-TAXONOMY-V2-I5-EVIDENCE-POLICY-R1-20261003`  
Status: **R1 REVIEW RECEIVED / POLICY REVISION REQUIRED / NO RUNTIME ACTIVATION**

## 1. Decision

NotebookLM returned overall `PASS`, but I5 is **not closed on R1 as written**.

The review correctly validates the main architecture and several policy directions, but it also introduces policy statements that conflict with already-frozen runtime semantics and with the Master Plan boundary between formative Practice evidence and independent assessment evidence.

The overall disposition is therefore:

`PASS_DIRECTIONALLY_BUT_R2_REQUIRED_BEFORE_I5_CLOSE`

No runtime, Mastery, Readiness, backfill/regrade, learner-facing general release, or data migration is authorized.

## 2. Accepted from the R1 review

Accepted directionally:
- D1: hybrid / family-capacity-aware evidence sufficiency; no universal fixed item count.
- D2: capacity 0/1/2 needs explicit sparse-family handling.
- D7: one canonical family identity across topics with topic provenance retained.
- D9: only KNTT-Core may contribute to future Core Readiness; support/optional layers cannot lower it.
- D11: learner-facing wording must avoid stigmatizing or absolute mastery language.
- D12: denominators 1–2 must not be presented as stable 0%/100% skill judgments.
- ARCH_1–ARCH_11 are directionally consistent with the frozen architecture.

## 3. Required corrections

### C1 — Incorrect independent-unit semantics in the review

The R1 review states that an independent unit is created only when the learner answers correctly on the first unassisted attempt.

That is incorrect.

Frozen runtime semantics are:
- the first unseen, unassisted reviewed unit is independent evidence **whether correct or incorrect**;
- the stored unit carries `correct: true|false`;
- a wrong first-unassisted unit is negative independent evidence and remains in the denominator;
- exact repeats and clone repeats never become new independent units.

This behavior is implemented in `taxonomy-v2-evidence-observer-v1.js` and explicitly regression-tested since I2.

R2 must preserve this unchanged.

### C2 — Recovery must not rewrite prior evidence

A later correct unseen sibling in the same family may be described as later unassisted recovery/progress.

It must **not** mutate an earlier wrong unit from wrong to recovered, delete it, or rewrite its correctness.

The earlier unit remains immutable historical evidence. Recovery is a derived family-level interpretation from a later independent unit.

### C3 — Practice evidence sufficiency is not Mastery

The current Taxonomy v2 evidence store is a **Practice-origin formative evidence lane**.

The Master Plan requires formative Practice evidence and independent assessment/Readiness evidence to remain conceptually distinct and not be mechanically combined into one mastery score.

Therefore Practice data alone must not produce a runtime state equivalent to `MASTERY_ELIGIBLE`.

R2 may define:
- evidence observed;
- sparse/early evidence;
- enough Practice evidence to review a pattern;
- need for written corroboration;
- suggested remediation.

Any future mastery or readiness claim requires a later, separately authorized assessment policy/lane.

### C4 — Correctness must be separated from sufficiency

Evidence sufficiency answers: “Do we have enough independent evidence to interpret a pattern?”

Correctness answers: “What pattern is visible in that evidence?”

They must not be collapsed.

A family may have sufficient Practice evidence while showing a mixed/incorrect pattern. Conversely, 1/1 correct is still sparse evidence.

R2 should use counts/coverage/evidence-class quality for sufficiency, and keep correctness as a separate descriptive dimension.

### C5 — Replace the ambiguous 3–5 recency rule

“Use the latest 3–5 units” is not deterministic.

R2 default:
- no time decay;
- no recency weighting for mastery/readiness;
- optionally show a descriptive recent pattern over **up to the latest 5 independent units**;
- if fewer than 5 exist, use all available units and preserve the sparse-data warning.

Recency is descriptive/remediation support only in I5.

### C6 — Unseen Core families must not disappear from a readiness claim

R1 correctly says unseen != weak, but “exclude unseen Core families from the denominator” can produce a misleading readiness percentage from a tiny observed subset.

R2 must separate:
- **Core evidence coverage**: how much required Core has been observed/assessed;
- **observed performance**: performance within observed evidence.

An unseen Core family is `NO_EVIDENCE` / `MORE_EVIDENCE_NEEDED`, not a failure, but it also cannot silently disappear while the system claims overall readiness.

The exact future Readiness denominator/state machine remains for a later assessment gate.

### C7 — Written self-check is not mastery evidence

Paper/rubric self-check remains useful for learning, but it is not system-verified mastery evidence.

Do not add a self-check flag to the canonical Practice evidence store as if it satisfies mastery.

If a future written-evidence workflow is introduced, verified constructed-response evidence must have a separately validated provenance/verification policy.

### C8 — D12 UI change belongs to the next implementation gate

The R1 review lists an I4 preview UI change as required before I5 close.

I5 is a policy gate. Policy closure does not require runtime/UI activation.

R2 may define the future UI rule:
- for N <= 2, show counts and a sparse-data caution; do not show a naked percentage as a stable skill judgment.

Implementation and browser QA belong to the next explicitly authorized implementation gate.

### C9 — Metadata gaps must distinguish derived fields from required stored fields

Current Practice events already store enough to derive:
- topic provenance;
- evidence class;
- assisted state and assistance kind;
- correctness;
- timestamps;
- immutable independent units.

`unassisted_recovery_flag` is derivable and should not be mandatory stored metadata.

`attempt_context_type` is unnecessary for the current Practice lane because the event already has origin/provenance and future Readiness should remain a separate assessment lane/store unless a later architecture explicitly changes that.

A future verified written-response lane may need new metadata, but that is not required to close I5 policy.

## 4. R2 closure target

I5 can close after an independent compact recheck confirms all of the following:

1. wrong first-unassisted units remain independent negative evidence;
2. prior evidence is immutable;
3. Practice sufficiency is separate from Mastery/Readiness;
4. sparse percentages do not overclaim;
5. unseen Core is represented as unknown/more evidence needed without being labeled weak;
6. written self-check is not verified mastery evidence;
7. no runtime/UI activation is required to close the policy gate;
8. any future metadata requirement is explicit and minimal.

Until that recheck passes, PR #282 remains Draft and unmerged.
