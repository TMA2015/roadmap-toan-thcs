# W3C Written Authoring R1 — Owner-submitted NotebookLM verdict receipt

**Packet ID:** `MATH-CT05-07-W3C-WR-AUTHORING-R1`  
**Source packet:** `review-packets/math-content-cleanup/MATH-CT05-07-W3C-R0_TWO_WRITTEN_AUTHORING_CANDIDATES.md`  
**Received:** 2026-10-20 · **Provenance:** The Project Owner pasted the independent NotebookLM academic authoring review in conversation. This file records the submitted verdict and stated evidence; it is not a new independent source-textbook scan or an integration approval.

## Machine-readable verdict (faithful to submitted review)

```text
PACKET_ID|MATH-CT05-07-W3C-WR-AUTHORING-R1
EXPECTED=2
REVIEWED=2
WX07-ENT-001 | MATH:PASS | HINTS:PASS | SOLUTION:PASS | RUBRIC:PASS | GRADE_AND_LAYER:PASS | DISTINCT_FROM_CANONICAL_WX:PASS | PRECISE_REVISION:none | ITEM_VERDICT:PASS
WX07-CH-001 | MATH:PASS | HINTS:PASS | SOLUTION:PASS | RUBRIC:PASS | GRADE_AND_LAYER:PASS | DISTINCT_FROM_CANONICAL_WX:PASS | PRECISE_REVISION:none | ITEM_VERDICT:PASS
OVERALL|PASS_FOR_AUTHORING_REVIEW
```

**Inventory validation:** the submitted block contains exactly both expected IDs once, in the candidate order, no reported revisions or blocked checks; reviewer provides no contradictory item verdict.

## Item-level findings as reported

### `WX07-ENT-001` — `07-ENT-01`; optional Entrance10

- **Mathematics:** Domain `x≠2`; `(x+1)/(x−2)=1+3/(x−2)`. For integer `x`, the expression is integer iff `x−2∈{−3,−1,1,3}`, giving precisely `x∈{−1,1,3,5}`.
- **Back-substitution:** corresponding output values are `0,−2,4,2`, respectively; all integers.
- **Scaffolding:** progressive 3-hint path `domain → integer-part decomposition → positive/negative divisors`; 4-step worked solution `domain → decomposition → necessary/sufficient condition → verification` accepted.
- **Rubric:** four criteria worth `1+1+1.5+0.5=4` points; no duplicated score criteria reported.
- **Scope:** `learning_layer=Entrance10`, `level=ENTRANCE10`, `gates_core=false`, `auto_readiness_credit=false`. No claim that this exact exercise appeared in a verified real entrance exam.
- **Distinctness:** the reviewer compared with `WX07-RAT-001` (rational reduction/domain) and `WX07-RAT-002` (rational arithmetic); integer-divisibility plus negative divisors is a separate written reasoning demand.
- **Typical errors/remediation:** omitted `x≠2`, ignored negative divisors, incorrect `x+1=(x−2)+3` rearrangement; recover prerequisite CT07 domain and integer-divisor knowledge.
- **Final:** `ITEM_VERDICT:PASS`, `PRECISE_REVISION:none`.

### `WX07-CH-001` — `07-CH-01`; optional Specialized-Challenge

- **Source fidelity:** **open learner-designed rational expression** with parentheses and ≥3 fraction operations, and an explicit **plan before solving**. The representative expression is a *newly authored demonstration*, not a replacement for the open task.
- **Demonstration:** `E=((x²−1)/(x−1)² : (x+1)/(x−1)) + (1/(x−1) − 1/(x+1))`, with initial domain `x≠±1`. The divisor is nonzero on that domain; the division simplifies to `1`, the subtraction to `2/(x²−1)`, so `E=(x²+1)/(x²−1)`.
- **Spot check:** `x=2` gives `5/3` for both expressions, a supplement to—not a substitute for—the algebraic derivation.
- **Scaffolding:** three hints emphasize original-domain restrictions (including nonzero divisor), local factorization/multiplication/division, and written plan before computing.
- **Solution/rubric:** four demonstration steps `domain → plan → operations → conclude/check`; generalizable four-part self-mark rubric `1+1+1.5+0.5=4` for independently selected valid expressions.
- **Scope:** `learning_layer=Specialized-Challenge`, `level=CHALLENGE`, `gates_core=false`, `auto_readiness_credit=false`. A challenge noncompletion must not block KNTT Core.
- **Distinctness:** `WX07-RAT-002` presents a fixed problem whereas the new proposed anchor tests construction, planning, and original-domain management.
- **Typical errors/remediation:** cancellation across sum/subtraction, neglecting nonzero divisor, over-early common denominators, losing original exclusions; recover CT07 rational operations.
- **Final:** `ITEM_VERDICT:PASS`, `PRECISE_REVISION:none`.

## Boundaries / authorization

- **Academic authoring approved: 2/2, 0 revisions.** The independent source-placement review for the original W3C 14 items remains separately recorded as `PASS_FOR_PLACEMENT_REVIEW`.
- **RELEASE NOT AUTHORIZED BY THIS RECEIPT.** Do not confuse NotebookLM PASS with Project Owner approval to merge a learner-facing implementation, change the live written-library count, write a new canonical ID, or deploy.
- As of the receipt, the production catalog contains **67 immutable current WX** and the two W3C proposed IDs are **not published**. All 240 CT06/07 Practice MCQs, original paper sources and source refs, learner scores/attempts, Skill, Readiness, grade placement and Core gates remain unchanged.
- Any future publication requires a distinct scoped integration diff, source-preserving tests and UI/browser QA, explicit Owner acceptance; append-only candidate count would be 67→69 **only if later authorized**.
