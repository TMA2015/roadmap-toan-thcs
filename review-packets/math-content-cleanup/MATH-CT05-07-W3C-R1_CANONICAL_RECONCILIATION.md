# W3C R1 — Source-to-live reconciliation of the 14 reviewed legacy exercises

**Date:** 2026-10-20 · **Disposition is an implementation decision, not a new NotebookLM academic verdict or publication authorization.**  
**Evidence:** [Owner-submitted 14/14 W3C NotebookLM PASS receipt](MATH-CT05-07-W3C-20261020_NOTEBOOKLM_VERDICT_RECEIPT.md), [W3C source packet](MATH-CT05-07-W3C-20261016_NOTEBOOKLM_REVIEW.md), canonical deployed **CT06 120 + CT07 120 = 240 MCQ prompts**, **67 current canonical Written exercises**, source-locked original `bai-tap.md` files.

**Scope partition:** `06-WR-08`, `06-WR-09`, `06-WR-10`, `06-ENT-01`, `07-WR-02`, `07-WR-03`, `07-WR-04`, `07-WR-05`, `07-WR-06`, `07-WR-08`, `07-WR-09`, `07-ENT-01`, `07-ENT-02`, `07-CH-01`. Neither W3A nor W3B is reopened.

## Per-ID implementation triage

| Source ID | NotebookLM role | Current live evidence / boundary | Minimal R1 disposition (QA-only) |
|---|---|---|---|
| `06-WR-08` | CONVERT_INTERACTIVE | Existing `WX06-FAC-002` explicitly cites this historical source, teaching **continue factoring**; this is a related *Written lineage*, not proof of an identical MCQ stem | `REUSE_WRITTEN_CONTEXT` — hold any MCQ until distinct error diagnosis justified |
| `06-WR-09` | CONVERT_INTERACTIVE | `x³−2x²+x=x(x−1)²` is valid; no identical current CT06 MCQ prompt established in this reconciliation | `HOLD_NEW_MCQ` — evidence-based density check first |
| `06-WR-10` | CONVERT_INTERACTIVE | Existing `FAC06V1_075` asks to **factor** `x²−2x−8`; source asks to **verify by multiplying** `(x−4)(x+2)`. Same polynomial, different task/action | `REUSE_RELATED_PRACTICE` — no clone; preserve verify-vs-factor distinction |
| `06-ENT-01` | CONVERT_INTERACTIVE | `FAC06V1_065` has exact `x²+5x+6` factoring task (by splitting middle term). Reviewer-suggested `Entrance10` layer is not a mandate to alter its existing Core labels | `REUSE_EXACT_PRACTICE` — add no MCQ |
| `07-WR-02` | CONVERT_INTERACTIVE | Original `6x/(9x²)` needs `x≠0` as well as result; comparable rational-reduction MCQs, but no exact same full question stem confirmed | `HOLD_NEW_MCQ` |
| `07-WR-03` | CONVERT_INTERACTIVE | Current `RAT07V1_071`–`080` tests common-denominator choice with related pairs (not exact `1/x` and `1/(x+1)`), source requires condition as well | `REUSE_RELATED_PRACTICE` — hold exact duplicate creation |
| `07-WR-04` | CONVERT_INTERACTIVE | **Same algebraic expression live** in `RAT07V1_064`: `(x²−9)/(x−3)=x+3`, asks **correct observation about cancellation/domain**. NotebookLM labeled duplication `no`; actual live evidence is stronger for **same-expression / different action** | `REUSE_SAME_EXPRESSION_PRACTICE`; do not create a new trivial clone |
| `07-WR-05` | CONVERT_INTERACTIVE | `RAT07V1_083` asks `1/x+3/(2x)`; historical source asks `2/x+3/(2x)`: related method, **different numerator and result** | `REUSE_RELATED_PRACTICE` |
| `07-WR-06` | CONVERT_INTERACTIVE | Source `x/(x−1)−1/(x−1)` simplifies to `1` only if `x≠1`. Same denominator/subtraction skill in bank but identical prompt not established | `HOLD_NEW_MCQ` |
| `07-WR-08` | CONVERT_INTERACTIVE | Existing `RAT07V1_093`–`100` tests similar rational products; **not** the same `x/(x+1)·(x²−1)/x` stem. Original needs `x≠0,-1` | `REUSE_RELATED_PRACTICE` |
| `07-WR-09` | CONVERT_INTERACTIVE | Existing `RAT07V1_101`–`108` tests related rational division, not exact source expression. Crucial original-domain guard `x≠-1,1` includes **nonzero divisor** | `REUSE_RELATED_PRACTICE`; no symbolic/free-input grader assumed |
| `07-ENT-01` | KEEP_WRITTEN | No live canonical WX with exact **integer value of `(x+1)/(x−2)`** task. Current related domain MCQs do not require integer-divisor argument | `DRAFT_WX07-ENT-001` — optional Entrance10, non-gating, separate authoring QA |
| `07-ENT-02` | CONVERT_INTERACTIVE | Original asks learner to **invent a three-fraction example** with opposing denominators; the sample `1/(x−2)+1/(2−x)=0` contains only **two** fractions and is illustrative, **not a complete instance of the original three-fraction request**. `RAT07V1_031`–`038` already test sign changes | `HOLD_MCq_AUTHORING` — preserve open-generation intent; require a new specified and reviewed MCQ stem before any conversion |
| `07-CH-01` | KEEP_WRITTEN | Open-ended learner-chosen expression requiring parentheses and at least **three fraction operations**, with **strategy before algebra**. Existing `WX07-RAT-002` is a fixed exercise with three fractions; not the same choice/strategy task | `DRAFT_WX07-CH-001` — optional Specialized-Challenge with representative demonstration; needs independent authoring QA |

**Disposition partition (14 unique):** 1 `REUSE_WRITTEN_CONTEXT` + 1 `REUSE_EXACT_PRACTICE` + 5 `REUSE_RELATED_PRACTICE` + 1 `REUSE_SAME_EXPRESSION_PRACTICE` + 3 `HOLD_NEW_MCQ` + 1 `HOLD_MCQ_AUTHORING` + 2 `DRAFT_NEW_WX` = **14**.

## Academic precision notes

1. All per-source `MATH:PASS` and the 14 item verdicts are faithfully retained as **reported**. The additional `RAT07V1_064` evidence revises only **implementation duplicate triage** for `07-WR-04`, not the independent verdict.
2. The reported W3C `07-ENT-02` worked example is mathematically valid for its **two-fraction illustration**, but the original source requests a **three-fraction self-constructed task**. Neither should be silently substituted for the other; require an exact item and separate review if pursuing an MCQ.
3. `07-WR-09`: when dividing `(x²−1)/(x+1)²` by `(x−1)/(x+1)`, restrictions must include both `x≠-1` (existing denominators) and `x≠1` (nonzero divisor); the quotient equals 1 only on this domain.
4. The `Entrance10` placement of `07-ENT-01` refers to optional **practice transfer**, not proof the exact item appeared in a specific entrance exam. The Challenge task is not compulsory KNTT Core. Grade/page citations in the Owner-provided NotebookLM report are S1 reviewer reports, not fresh SGK scans.

## Hard gates and next packet

- **No** production change to any of the **240 CT06+CT07 MCQs**, **67 WX**, original authored source Markdown, `source_refs`, learner attempts/IDs, Core/Skill/Readiness or answer parser.
- No new MCQ without a differentiated learning need and reviewed distractors/answer contract. Simple mathematical feasibility is not evidence new content is needed.
- Two distinct optional Written proposals `WX07-ENT-001`, `WX07-CH-001` can be **drafted and independently authoring-reviewed**, never automatically inserted from this placement verdict.
- Draft source packet: [W3C R0 two new Written candidates](MATH-CT05-07-W3C-R0_TWO_WRITTEN_AUTHORING_CANDIDATES.md).
