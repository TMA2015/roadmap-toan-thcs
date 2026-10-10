# NotebookLM Review Packet — Written Coverage Priority R1

**packet_id:** `MATH-WRITTEN-COVERAGE-PRIORITY-R1-20261010`  
**status:** CANDIDATE — classification only, no authoring

## Goal

Decide whether each of the 34 KNTT-Core families with zero mapped Written evidence genuinely needs a paper-first written exercise.

This review must follow the Written Exercise Library contract:
- Written is for complete mathematical solutions and reasoning that MCQ/Micro cannot observe well.
- There is NO one-family-one-written-exercise quota.
- Start with one CORE_BASE problem per genuinely necessary problem type.
- Add CORE_APPLY only when a second level is pedagogically useful.
- Written self-marking does not grant Readiness or Mastery credit.

## Current library state

- 54 exercises
- 22 topics
- 54 unique problem types
- 50 KNTT-Core, 2 Core-Support, 2 Entrance10
- 67 mapped taxonomy families
- 66/100 KNTT-Core families currently have mapped Written evidence
- 34/100 KNTT-Core families are in the zero-written review queue
- 2 existing Written exercises have unresolved family crosswalks:
  - WX24-MOD-002
  - WX23-PRO-003

## Task A — zero-written KNTT-Core families

Review all 34 families in `01_ZERO_WRITTEN_TAXONOMY_EXTRACT_R1.md`.

For each choose exactly one:
- ADD_WRITTEN — a paper-first full solution would observe reasoning materially better than current Micro/Practice/Readiness.
- KEEP_NO_WRITTEN — no separate Written exercise is needed; current modalities are sufficient or the skill is too atomic.
- NEEDS_MORE_EVIDENCE — selected sources do not justify either decision.

Do NOT choose ADD_WRITTEN merely because the count is zero.

Prefer KEEP_NO_WRITTEN for atomic recognition/computation skills when a full written solution would add little evidence.

## Task B — unresolved existing Written crosswalks

Map these already-reviewed exercises only to EXISTING taxonomy families when justified:

1. WX24-MOD-002 — ticket-system modelling by a system of equations; includes setup, solve, validate.
2. WX23-PRO-003 — Grade-6 event/outcome distinction; intentionally no probability calculation.

Return:
- CROSSWALK|WX24-MOD-002|<existing family ids>|PASS|REVISIONS_REQUIRED
- CROSSWALK|WX23-PRO-003|<existing family ids>|PASS|REVISIONS_REQUIRED

Do not create a new canonical family.

## Task C — anti-inflation check

Confirm:
- the current 54 unique problem types do not imply a need to duplicate written tasks for every family;
- Topic 25 Anchors remain a separate source of truth and are not copied into Written merely for coverage counts;
- no Readiness/Mastery credit is inferred from Written self-marking.

## Required machine-readable block

```text
PACKET|MATH-WRITTEN-COVERAGE-PRIORITY-R1-20261010
OVERALL|PASS|REVISIONS_REQUIRED
WRITTEN|<family_id>|ADD_WRITTEN|KEEP_NO_WRITTEN|NEEDS_MORE_EVIDENCE
CROSSWALK|WX24-MOD-002|<comma-separated-existing-family-ids>|PASS|REVISIONS_REQUIRED
CROSSWALK|WX23-PRO-003|<comma-separated-existing-family-ids>|PASS|REVISIONS_REQUIRED
BOUNDARY|NO_ONE_FAMILY_ONE_WRITTEN_QUOTA|PASS|FAIL
BOUNDARY|NO_NEW_CANONICAL_FAMILY|PASS|FAIL
BOUNDARY|ANCHORS_NOT_DUPLICATED|PASS|FAIL
BOUNDARY|NO_READINESS_MASTERY_CREDIT|PASS|FAIL
MISSING_DECISIONS|NONE|...
CLEARANCE|WRITTEN_COVERAGE_PRIORITY_R1_REVIEW_COMPLETE
```

Include exactly 34 WRITTEN lines and exactly 2 CROSSWALK lines.
