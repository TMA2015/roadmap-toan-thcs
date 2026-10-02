# Skill Taxonomy v2 — CT02–CT25 academic program closure

Date: 2026-10-02

## Final academic state

All four local batches and the whole-project reconciliation are academically closed.

- S1 CT02–CT07: **39 families / 87 mappings**, 732-question reviewed basis.
- S2 CT08–CT12: **29 families / 75 mappings**, **624/624 PASS**, 0 revisions.
- S3 CT13–CT20: **44 families / 162 mappings**, **1,146/1,146 PASS**, 165/165 clone candidates, 0 revisions.
- S4 CT21–CT25: **19 new families / 62 mappings**, **612/612 PASS**, 66/66 clone candidates, 0 revisions.
- Whole-project family definitions: **131/131 PASS**.
- Whole-project legacy mapping rows: **386/386 PASS**.
- Intentional NO_FAMILY mappings: **20 PASS**.
- CT24 canonical reuse mappings: **5/5 PASS**.
- Cross-batch overlap candidates: **2/2 PASS_AS_CONTEXTUAL_REUSE**.
- Cross-batch architecture checks: **16/16 PASS**.
- Cross-batch fixes: **0**.

Authorization: `CLEARED_FOR_TAXONOMY_V2_IMPLEMENTATION_PLANNING`.

## Frozen boundaries entering implementation planning

1. Learner-facing family != diagnostic subskill != legacy tag.
2. A one-answer MCQ has at most one primary assessed target.
3. METHOD / CONTEXT / CATEGORY / COMPOSITE_TASK do not automatically become mastery bars.
4. KNTT-Core / Core-Support / THPT-Bridge / Entrance10 / Specialized-Challenge remain separate axes.
5. Optional, bridge and challenge evidence does not gate Core.
6. MCQ evidence remains partial where written reasoning is the actual target.
7. Legacy question IDs, legacy skill tags, learner history and existing storage remain preserved.
8. No backfill/regrade of old attempts from incomplete historical evidence.
9. Authored-bank frequency is not official exam frequency.
10. Current canonical evidence runtime is a protected production boundary; Taxonomy v2 planning must integrate without silently replacing it.

## Next phase

Implementation planning only:
- define durable taxonomy registry schema;
- define legacy-tag -> canonical family mapping lookup;
- define new evidence-event contract and family aggregation;
- define learner-facing Skill Map behavior;
- define Core Readiness policy and non-gating layers;
- define migration/no-backfill behavior;
- define canary, rollback, QA, and release gates.

No runtime activation is authorized by this closure.
