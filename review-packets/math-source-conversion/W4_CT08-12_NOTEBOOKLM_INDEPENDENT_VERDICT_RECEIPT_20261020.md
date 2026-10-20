# W4 CT08–12 — Independent NotebookLM placement and authoring verdict receipt

**PACKET_ID:** `MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020`  
**Received:** 2026-10-20, Project Owner supplied the 112-line independent NotebookLM report in conversation.  
**Status:** `INDEPENDENT_ACADEMIC_PASS` / `NOT_OWNER_RELEASE_APPROVAL` / `NO_LIVE_RELEASE`.  
**Source:** `review-packets/math-source-conversion/W4_CT08-12_EIGHT_SOURCE_TASKS_INTERACTIVE_WRITTEN_REVIEW_20261020.md` on PR #549; eight exact historical Markdown sources pinned in that source packet. NotebookLM S1 page references are **reviewer-reported**, not independently re-scanned by this receipt.

## Submitted exact machine verdict

```text
PACKET_ID|MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020
EXPECTED_SOURCE_ITEMS=8
REVIEWED_SOURCE_ITEMS=8
EXPECTED_WRITTEN_CANDIDATES=6
EXPECTED_INTERACTIVE_REUSE=2
08-WR-03 | MATH:PASS | S1_LAYER:CT08 KNTT-Core | DISTINCTNESS:PASS | DISPOSITION:PUBLISH_WX_AFTER_OWNER_APPROVAL
08-WR-10 | MATH:PASS | S1_LAYER:CT08 KNTT-Core | DISTINCTNESS:PASS | DISPOSITION:REUSE_EXISTING_INTERACTIVE
09-WR-02 | MATH:PASS | S1_LAYER:CT09 KNTT-Core | DISTINCTNESS:PASS | DISPOSITION:REUSE_EXISTING_INTERACTIVE
09-WR-05 | MATH:PASS | S1_LAYER:CT09 KNTT-Core | DISTINCTNESS:PASS | DISPOSITION:PUBLISH_WX_AFTER_OWNER_APPROVAL
10-ENT-02 | MATH:PASS | S1_LAYER:CT10 Entrance10 | DISTINCTNESS:PASS | DISPOSITION:PUBLISH_WX_AFTER_OWNER_APPROVAL
11-WR-10 | MATH:PASS | S1_LAYER:CT11 KNTT-Core | DISTINCTNESS:REDUNDANT_SIMPLE_WX | DISPOSITION:REUSE_EXISTING_INTERACTIVE
11-ENT-01 | MATH:PASS | S1_LAYER:CT11 Entrance10 | DISTINCTNESS:PASS | DISPOSITION:PUBLISH_WX_AFTER_OWNER_APPROVAL
12-ENT-02 | MATH:PASS | S1_LAYER:CT12 Entrance10 | DISTINCTNESS:PASS | DISPOSITION:PUBLISH_WX_AFTER_OWNER_APPROVAL
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS_FOR_PLACEMENT_AND_AUTHORING
AUTHORIZATION|NO_LIVE_RELEASE
```

## Reconciled post-review decisions

Exactly **8/8 source items** math PASS as reported by independent reviewer. The *draft* originally proposed **six** Written items + **two** interactive reuses. The **final independent verdict** approves **five** new Written candidates and **three** existing-interactive reuses; this change is intentional **non-inflation**, not a REVIEWED/EXPECTED mismatch.

| Existing historical source ID | Final disposition | Depth and layering boundary |
|---|---|---|
| `08-WR-03` | **5-WX candidate** `PUBLISH_WX_AFTER_OWNER_APPROVAL` | CT08 KNTT-Core, zero-product equation, two separate branches and verification. |
| `08-WR-10` | **REUSE** `EQ08V1_108` | Analogue of word-to-equation sequence, NOT literal identity of source problem. |
| `09-WR-02` | **REUSE** `SYS09V1_033` | No-solution geometry of distinct parallel lines. |
| `09-WR-05` | **5-WX candidate** `PUBLISH_WX_AFTER_OWNER_APPROVAL` | CT09 KNTT-Core, clear denominators, solve fractional pair, verify both original equations. |
| `10-ENT-02` | **5-WX candidate** `PUBLISH_WX_AFTER_OWNER_APPROVAL` | CT10 Entrance10; intersection `I(1;3)`, not Core Readiness. |
| `11-WR-10` | **REUSE** existing cube-root Practice family (12 active MCQs), not new WX | Too simple for a distinct 4-point Written exercise. Reviewer report's plain-text `\\sqrt{-216}` and `\\sqrt{8x^3}` are **notation transcription mistakes**: the verified historical source has **cube-root index `\\sqrt[3]`**, consistent with its narrative numerical values `-6` and `2x`. Do not teach it as square roots. |
| `11-ENT-01` | **5-WX candidate** `PUBLISH_WX_AFTER_OWNER_APPROVAL` | CT11 Entrance10, impose `x>=1`, reject extraneous root 0 after squaring, verify 3. |
| `12-ENT-02` | **5-WX candidate** `PUBLISH_WX_AFTER_OWNER_APPROVAL` | CT12 Entrance10, opposite root signs by Viète without solving individual roots. |

Final count: `INDEPENDENT_PLACEMENT_REVIEWED=8`, `CANDIDATE_WRITTEN_APPROVED_FOR_OWNER_DECISION=5`, `INTERACTIVE_REUSE=3`, `NEW_MCQ_AUTHORIZED=0`, `NEW_CANONICAL_WRITTEN_RELEASED=0`.

**Rubric and help quality:** Reviewer confirmed the original candidate 4-point rubric and three-step hints on all five accepted Written candidates. Authoring placement must preserve written communication: source problem, progressive hints, full worked solution, misconceptions and rubric. For reused MCQs the source Markdown remains present and no learner attempt at an analogous MCQ is misrepresented as completion of the historical source task.

**Hard boundary:** `PASS_FOR_PLACEMENT_AND_AUTHORING` is not Project Owner publication consent. Canonical 69 Written library, original Markdown, 636 CT08–12 MCQs, Core/Skill/Readiness/Mastery, scores/history and live GitHub Pages remain unchanged until a **separate release PR** passes canonical-schema and real browser QA and receives explicit Owner authorization. Any code published for Entrance10 candidates must remain outside KNTT-Core scoring.

**Next action:** Prepare a **review-only release candidate** on a separate **Draft PR**, assign only provisional collision-free IDs, verify 5 items' exact source, stage five rubric/solution objects and record 3 reuse decisions. Do not merge until explicit Owner approval.
