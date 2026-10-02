# NOTEBOOKLM SOURCE — I5 Evidence Policy R2 Compact Recheck

Packet: MATH-SKILL-TAXONOMY-V2-I5-EVIDENCE-POLICY-R2-RECHECK-20261003
State: REVIEW ONLY / NO RUNTIME ACTIVATION

## Why R2 exists

The R1 review was directionally useful but introduced statements that conflict with frozen runtime semantics or the Master Plan. R2 corrects those points.

## Locked facts

- 131 learner-facing families.
- 127 currently have direct Practice evidence capacity.
- Capacity distribution includes: 4 families at 0, 12 at 1, 29 at 2, 18 at 3; capacity is highly uneven.
- Current Taxonomy v2 evidence lane originates from Practice and is formative/descriptive.
- Legacy Practice statistics remain separate.
- No backfill/regrade.
- No Mastery or Readiness runtime activation.

## Frozen independent-evidence semantics

1. Independent-unit identity is family + topic + reviewed clone/question unit.
2. The first unseen, unassisted unit is independent evidence whether correct or incorrect.
3. Incorrect first-unassisted evidence remains negative independent evidence in the denominator.
4. Exact repeats and clone repeats never create new independent units.
5. Assisted attempts are not independent.
6. Earlier independent units are immutable; later success never rewrites an earlier wrong unit.
7. A later unassisted unseen sibling may be a new independent unit when its unit has not already been recorded.

## R2 policy to recheck

### Sufficiency
Use hybrid family-capacity + evidence-class policy.
- cap 0: no direct evidence;
- cap 1: early evidence only;
- cap 2: limited evidence only;
- cap >=3: at least 3 observed independent units may be enough to review a Practice pattern, subject to evidence-class relevance.

Practice sufficiency is about whether a pattern can be reviewed; correctness is a separate dimension.

### Evidence strength and written boundary
Routine final-answer/output evidence may support Practice sufficiency but cannot alone create Mastery.
Proof/modeling/construction/graph/multistep reasoning MCQ is partial evidence and requires separately verified constructed-response evidence before any future mastery claim.
Paper self-check is not system-verified mastery evidence.

### Correctness and recency
- Evidence accuracy remains descriptive.
- N <= 2: counts + sparse-data caution; no stable mastery/weak interpretation.
- N >= 3: percentage may be shown descriptively with denominator.
- No time decay or automatic recency weighting initially.
- Optional UI may show up to the latest 5 independent units as a descriptive recent pattern only.

### Cross-topic and assistance
- one family identity across topics;
- keep topic provenance;
- no transfer bonus in I5;
- assisted/same-question/clone repeats do not create independent units;
- later unassisted unseen sibling may create independent evidence;
- recovery is derived and never rewrites prior evidence.

### Readiness boundary
Only KNTT-Core can be required for future Core Readiness.
Core-Support informs remediation; Entrance10/Bridge/Challenge cannot lower Core Readiness.
Unseen Core = no evidence / more evidence needed, not weak.
Do not silently remove unseen Core while claiming overall readiness; future Readiness must separate coverage from observed performance.
Exact Readiness denominator/state logic is deferred to the later assessment gate.

### Learner wording/UI
Use neutral wording:
- Chưa có bằng chứng
- Bằng chứng ban đầu
- Dữ liệu còn ít
- Đã có đủ lượt luyện để xem xu hướng
- Nên củng cố thêm
- Cần luyện tự luận

For N <= 2, future UI should prioritize counts + “Dữ liệu còn ít” and hide the raw percentage from the primary skill judgment.
This is policy only; no UI/runtime change is required to close I5.

## Metadata position

Current Practice schema is sufficient for I5 policy.
Recovery can be derived; no required recovery flag.
Do not add a context field merely to merge Practice and Readiness.
Future verified written-response evidence may require a separate validated lane/schema.

## Recheck questions

Return PASS/FAIL for each:

1. R2-1: Does R2 correctly preserve negative first-unassisted evidence as independent?
2. R2-2: Does R2 correctly keep Practice evidence sufficiency separate from Mastery/Readiness?
3. R2-3: Is the sparse-family policy defensible without a universal count threshold?
4. R2-4: Is the written-evidence boundary conservative enough for proof/modeling/construction/reasoning?
5. R2-5: Is “up to latest 5, descriptive only, no decay” a defensible initial recency rule?
6. R2-6: Is the unseen-Core policy correct: not weak, but not silently omitted from a global readiness claim?
7. R2-7: Is it correct that I5 policy closure does not require UI/runtime activation?
8. R2-8: Are the current metadata sufficient for I5, with verified written-response metadata deferred?

Overall verdict must be exactly:
- PASS
- REVISIONS_REQUIRED

A PASS closes policy review only. It must not authorize Mastery, Readiness, backfill/regrade, or runtime activation.
