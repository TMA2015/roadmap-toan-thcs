# Skill Taxonomy v2 — I5 Policy Closure

Date: 2026-10-03  
Status: **I5 POLICY CLOSED — R2 INDEPENDENT REVIEW PASS**  
Runtime effect: **NONE**

## Accepted policy

Durable policy:
`docs/roadmap/skill-taxonomy-v2-evidence-policy-r2.md`

Independent recheck receipt:
`review-packets/skill-taxonomy/phase-i5/08_NOTEBOOKLM_I5_R2_PASS_RECEIPT.md`

## Closed decisions

I5 closes with these binding interpretations:

1. The first unseen, unassisted reviewed unit is independent evidence whether correct or incorrect.
2. Earlier independent evidence is immutable; later success never rewrites an earlier wrong unit.
3. Practice evidence sufficiency is a descriptive/formative reviewability state, not Mastery or Readiness.
4. Evidence quantity, evidence quality, correctness pattern and future assessment corroboration remain separate dimensions.
5. Sparse-family handling is capacity-aware; no universal fixed evidence count applies to all 131 families.
6. N <= 2 is sparse evidence; future learner UI must avoid presenting a naked 0%/100% as a stable skill judgment.
7. No time decay is used initially; at most the latest 5 independent units may later be shown descriptively.
8. Cross-topic reuse preserves one canonical family identity with topic provenance.
9. Assisted attempts, same-question repeats and clone repeats do not create new independent evidence.
10. Future Core Readiness may require only KNTT-Core; optional/support/Bridge/Challenge layers cannot lower Core.
11. Unseen Core means no evidence / more evidence needed, not weak; future Readiness must separate coverage from observed performance.
12. Proof/modeling/construction/multi-step reasoning may require separately verified constructed-response evidence for any future mastery claim.
13. Paper/rubric self-check is not system-verified mastery evidence.
14. Current Practice metadata is sufficient for I5 descriptive policy; no recovery flag or context field is required merely to close I5.

## Explicitly still OFF

- Mastery labels and thresholds;
- Core Readiness scoring/gating;
- historical backfill/regrade;
- learner-facing general Skill Map release;
- automatic written scoring;
- runtime schema migration.

## Next gate

Per the accepted implementation plan, the next phase is **I6 — Controlled learner-facing release**.

I6 must:
- remain reversible;
- preserve legacy Practice and frozen G2 stores;
- implement R2 sparse-data/descriptive wording only;
- keep Mastery/Readiness OFF;
- run exact-head automated QA and controlled owner QA before any broader activation.

I5 closure alone does not authorize I6 deployment.
