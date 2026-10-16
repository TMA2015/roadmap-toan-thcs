# Báo cáo NotebookLM — W3A-WR Independent Academic Authoring Review

**Packet:** `MATH-CT05-07-W3A-WR-R1-20261016`  
**Received from project owner:** after PR #479.  
**Provenance:** Structured receipt of the owner-supplied NotebookLM report: the mandatory verdict block is preserved, and the narrative findings are summarized. References to SGK KNTT Toán 8 T1/T2 below are **the reviewer's reported S1 claims**, not a fresh assistant verification of textbook page scans.
**Academic status:** `PASS_FOR_AUTHORING_REVIEW` only — **NOT production deployment approval**.

## I. Source and scope

The reviewer reported consulting Master Plan v1.2.1, NotebookLM Review Rules v1.2, Golden Learning Architecture, Academic Source & Depth Audit Rules, Shared Written Library Contract v1, temporary W3A-WR packet and KNTT Toán 8 volumes 1/2. Exactly three source IDs reviewed: `05-ENT-01`, `06-CH-01`, `07-WR-11`.

## II. Mandatory review verdict (owner-submitted)

```text
PACKET_ID|MATH-CT05-07-W3A-WR-R1-20261016
EXPECTED=3
REVIEWED=3

SOURCE_ID | MATH | HINTS | SOLUTION | RUBRIC | GRADE_AND_LAYER_S1 | DISTINCT_FROM_CANONICAL_WX | PROPOSED_ROLE | PRECISE_REVISION | ITEM_VERDICT
05-ENT-01 | PASS | PASS | PASS | PASS | Grade 8 (KNTT T1 Ch.II tr.34-40) · Layer: TRANSFER/ENTRANCE10 | YES | APPROVE_NEW_WX | NONE | PASS
06-CH-01 | PASS | PASS | PASS | PASS | Grade 8 (KNTT T1 Ch.II tr.42-46) · Layer: SPECIALIZED_CHALLENGE | YES | APPROVE_NEW_WX | NONE | PASS
07-WR-11 | PASS | PASS | PASS | PASS | Grade 8 (KNTT T2 Ch.VI tr.10-14) · Layer: KNTT-CORE (Core Concept Check) | PARTIAL | PLACE_CORE_ONLY | Embed as a Core Card / Core Trap explanation in CT07 Learning Workspace rather than creating a duplicate standalone WX item. | PASS

OVERALL|PASS_FOR_AUTHORING_REVIEW

MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
```

## III. Mathematical and pedagogical judgments

### 05-ENT-01 — Candidate `WX05-ENT-001`

For \(A=(x-1)^3-(x+1)^3+6(x-1)(x+1)\), the review verifies
\[
(x-1)^3-(x+1)^3=-6x^2-2,\quad 6(x-1)(x+1)=6x^2-6,
\]
hence \(A=-8\) for all \(x\). Hints in three stages do not disclose the answer; 4-point rubric distributes 1.5 + 1 + 1.5 points. Distinct from `WX05-IDN-001`. Proposed layer **TRANSFER / ENTRANCE10**, Grade 8; reviewer cited KNTT T1 Ch. II, pp. 34–40. Proposed canonical ID: `WX05-ENT-001`.

### 06-CH-01 — Candidate `WX06-CH-001`

The review verifies the Sophie Germain factorization
\[
x^4+4=x^4+4x^2+4-4x^2=(x^2+2)^2-(2x)^2=(x^2-2x+2)(x^2+2x+2).
\]
Hints lead to adding/subtracting \(4x^2\); 4-point rubric distributes 2 + 2 points. Distinct from `WX06-FAC-001` and `WX06-FAC-002`. Proposed **SPECIALIZED_CHALLENGE** layer; **not compulsory KNTT Core**. Reviewer cited KNTT T1 Ch. II pp. 42–46 as prerequisite subject context, not proof this specialized identity is mandatory.

### 07-WR-11 — Core Concept Check only, NO new WX

The reviewer verifies \( (x^2-4)/(x-2)=x+2\) **only when** \(x\ne 2\). The original fraction is undefined at \(x=2\) and simplification does not enlarge its domain. Hints/rubric (2 points) were rated PASS. Concept overlaps approved `WX07-RAT-001` and `RAT07V1_063`; reviewer chooses **PLACE_CORE_ONLY** in CT07, not a new standalone Written item. Reviewer cited KNTT T2 Ch. VI, Bài 22, pp. 10–14.

## IV. Release restrictions in the submitted verdict

The reviewer explicitly says `PASS_FOR_AUTHORING_REVIEW` is not permission to change production `written-exercise-library-v1.json`, Core Readiness, Mastery, history, or scores. Owner acceptance and a separate release gate are required. Two candidates are ready for possible owner acceptance (`WX05-ENT-001`, `WX06-CH-001`); the third belongs solely as a CT07 Core explanation, without duplicate WX.

**Assistant receipt note:** This file captures owner-supplied findings and has not itself migrated any math content or learner data.
