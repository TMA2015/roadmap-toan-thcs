# KG-REVIEW-001 — Independent review packet

TASK_ID: KG-REVIEW-001  
CONTEXT_VERSION: 1.0.7  
ROLE: reviewer  
LAYER: Knowledge-Graph  
TOPIC: prerequisite/remediation audit

## Goal

Review Knowledge Graph v1 independently. Do **not** redesign the 25-topic Vertical Spine.

## Review rules

Classify every proposed active edge as one of:

- `KEEP_PREREQUISITE`: target skill materially depends on source skill.
- `DOWNGRADE_SEQUENCE`: useful earlier learning but not a true prerequisite.
- `CROSS_LINK`: related/reused, not required.
- `REJECT`: misleading or wrong direction.
- `NEEDS_EVIDENCE`: cannot decide from curriculum/pedagogy alone.

Also review remediation rules separately: a useful remediation recommendation does not have to be a prerequisite.

## Mandatory checks

1. Algebra chain: factorization → rational expressions → equations with denominators.
2. Linear equations → systems.
3. Function concepts → linear/quadratic graphs.
4. Square roots → quadratic formula.
5. Thales/similarity dependency direction.
6. Pythagoras/trigonometry dependency direction.
7. Inscribed angle → cyclic quadrilateral.
8. Experimental → classical probability: prerequisite or only conceptual bridge?

## Constraints

- No 100% hard gates.
- Specialized-Challenge can never gate Core.
- “Taught earlier” is not enough to call something a prerequisite.
- Distinguish logical dependency from curriculum sequence.
- Flag uncertainty explicitly.

## Required output

A. EDGE REVIEW TABLE  
B. REMEDIATION REVIEW  
C. MISSING HIGH-VALUE EDGES  
D. FALSE/OVERSTRONG EDGES  
E. GRAPH POLICY NOTES  
F. UNCERTAINTIES  
G. VERDICT: PASS / PASS-WITH-CHANGES / FAIL
