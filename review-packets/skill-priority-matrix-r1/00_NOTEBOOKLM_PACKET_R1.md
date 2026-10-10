# Skill Priority Matrix R1 — Independent Review Packet

**packet_id:** `MATH-SKILL-PRIORITY-MATRIX-R1-20261010`  
**status:** REVIEW PREP ONLY — no learner-facing priority activation  
**scope:** all 131 canonical Skill Taxonomy v2 families

## Purpose

The taxonomy has already been semantically consolidated. This review does **not** reopen family identity, IDs, merge/split decisions, or curriculum layers.

The task is to decide how important each canonical family should be for learner-facing emphasis and practice recommendation, while preserving the difference between:

- required KNTT-Core;
- Core-Support;
- Entrance10;
- Specialized-Challenge;
- THPT-Bridge.

This directly addresses the risk of treating every family as equally important merely because it exists in the taxonomy.

## Required sources

Select exactly **13 NotebookLM Sources**:
1. current Master Plan v1.2.1;
2. NotebookLM Math Review Rules v1.2;
3. this packet, `00_NOTEBOOKLM_PACKET_R1.md`;
4. `04_SKILL_PRIORITY_MATRIX_R1_NOTEBOOKLM_SOURCE.md`;
5. `05_EXAM_FREQUENCY_HANOI_SEED_R1_NOTEBOOKLM_SOURCE.md`;
6–13. KNTT Math textbooks Grades 6, 7, 8, 9 — both volumes.

The official Hanoi entrance seed is only 3 papers (2024–2026), city-specific, non-specialized. It is an **observed sample signal**, not a national frequency model. The exam-seed Markdown source preserves the official-source provenance, URLs, years, denominator limits, and interpretation boundaries.

No specialist-school exam corpus is included in this packet.

## Review principles

1. Do not use the current authored Practice/Readiness/Written question count as a proxy for importance.
2. KNTT/official curriculum defines Core.
3. Foundation importance and exam recurrence are separate axes.
4. Exam recurrence never promotes optional material into KNTT-Core.
5. Specialized-Challenge must remain optional and must not gate ordinary learners.
6. Entrance10 families may be important for entrance preparation without being Core.
7. A family may be KNTT-Core and still be `P2_STANDARD_CORE`; Core does not mean every family needs equal practice weight.
8. A family may be foundational even if it is not directly recurrent in the 3-year Hanoi seed.
9. If evidence is insufficient, use `INSUFFICIENT_EVIDENCE`; do not invent a rating.
10. No question quotas are authorized by this review.

## Decision vocabulary

### Foundation importance
- `HIGH`
- `MEDIUM`
- `LOW`
- `INSUFFICIENT_EVIDENCE`

### Learner priority

For `KNTT-Core`:
- `P0_FOUNDATION_CRITICAL`
- `P1_HIGH_VALUE_CORE`
- `P2_STANDARD_CORE`
- `INSUFFICIENT_EVIDENCE`

For `Core-Support`:
- `SUPPORT_HIGH_VALUE`
- `SUPPORT_ON_DEMAND`
- `INSUFFICIENT_EVIDENCE`

For `Entrance10`:
- `E1_HIGH_TRANSFER`
- `E2_STANDARD_ENTRANCE`
- `INSUFFICIENT_EVIDENCE`

For `Specialized-Challenge`:
- `OPTIONAL_SPECIALIST`

For `THPT-Bridge`:
- `OPTIONAL_BRIDGE`

### Practice-weight guidance
- `HIGH`
- `MEDIUM`
- `LOW`
- `OPTIONAL`
- `INSUFFICIENT_EVIDENCE`

## Required output

Return a concise reasoning summary and then a complete machine-readable block:

```text
PACKET|MATH-SKILL-PRIORITY-MATRIX-R1-20261010
OVERALL|PASS|REVISIONS_REQUIRED

FAMILY|<family_id>|<foundation_importance>|<learner_priority>|<practice_weight_guidance>
... exactly 131 FAMILY lines ...

RATIONALE|<family_id>|<short evidence-based reason>
... exactly one RATIONALE line for every P0_FOUNDATION_CRITICAL, P1_HIGH_VALUE_CORE, E1_HIGH_TRANSFER, SUPPORT_HIGH_VALUE, or INSUFFICIENT_EVIDENCE decision ...

BOUNDARY|NO_ID_MERGE_SPLIT|PASS|FAIL
BOUNDARY|NO_LAYER_CHANGE|PASS|FAIL
BOUNDARY|NO_RUNTIME_ACTIVATION|PASS|FAIL
BOUNDARY|NO_QUESTION_QUOTA|PASS|FAIL
BOUNDARY|HANOI_SEED_NOT_NATIONAL_FREQUENCY|PASS|FAIL
BOUNDARY|SPECIALIST_REMAINS_OPTIONAL|PASS|FAIL
BOUNDARY|NO_MASTERY_HISTORY_CHANGE|PASS|FAIL

MISSING_DECISIONS|NONE|...
CLEARANCE|SKILL_PRIORITY_MATRIX_R1_REVIEW_COMPLETE
```

The review is complete only if all 131 family IDs are present exactly once.

## Important interpretation rule

This review may recommend **relative emphasis** but must not authorize:
- deleting a required Core family;
- changing taxonomy identity;
- changing curriculum layer;
- changing Mastery/Readiness semantics;
- automatically generating more questions;
- presenting the 3-year Hanoi sample as universal national exam frequency.
