# W3A-WR — Minimal implementation candidate / Owner acceptance gate R1

**Date:** 2026-10-16 · **Source receipt:** `MATH-CT05-07-W3A-WR-R1-20261016_NOTEBOOKLM_VERDICT.md`  
**Status:** `PROPOSAL_READY_FOR_OWNER` / **NO PRODUCTION CHANGE**.  
**Reviewed:** 3/3; two new written items justified, one core-only correction; preserve existing source and learner results.

## 1. Proposed minimal delta

| Source | Canonical target | Action | Why it is not duplication |
|---|---|---|---|
| `05-ENT-01` | **`WX05-ENT-001`** | Add **one** paper-written anchor/Transfer–Entrance10 exercise to the **single shared WX library** | Independent proof of a constant; not the same as `WX05-IDN-001` |
| `06-CH-01` | **`WX06-CH-001`** | Add **one** *optional Challenge* paper-written anchor exercise to that **same canonical WX library** | Sophie Germain extra-term technique; distinct from `WX06-FAC-001/002` |
| `07-WR-11` | Existing `pt07-core-2` | Add at most one brief **“Vì sao giữ ĐKXĐ?”** conceptual check in the Core Card's already-rendered teaching explanation, and preserve original source ID | `pt07-core-2` already teaches the same invariant with an example and `WX07-RAT-001` and `RAT07V1_063` already cover the concept. **No new card, no new Micro/MCQ, no WX.** |

Do not add a parallel Written Library for KNTT/Topic/Challenge/Entrance10. Only one canonical WX item can appear through multiple learner routes.

## 2. Target objects and compatible roles

Reference authoring file: `MATH-CT05-07-W3A_WRITTEN_CANDIDATES_R0.md`. It already has complete proposed problems, three progressive hints, worked solutions, rubrics and misconceptions; review receipt approves these original drafts' academic correctness.

Both new WX should use the **existing `exercise_kind: "anchor"` contract** (three `hint_steps`, `full_solution_markdown`, `method_rationale_markdown`, rubric, remediation). Add `source_refs` to their original Markdown IDs and W3A-WR receipt. Use grade-overlay `[8]` for recommendation, but **do not silently add grade/chapter lesson `kntt_placements`** unless backed by the exact academic placement, not merely prerequisite techniques.

For `WX05-ENT-001`: normalized `written_role = "ENTRANCE10"` or `TRANSFER` requires choosing *one* visible learner purpose; the current library already supports `learning_layer = "Entrance10"` and `level = "ENTRANCE10"` on canonical WX09 items. Preserve **no Core Readiness credit**.

For `WX06-CH-001`: normalized contract role `written_role = "CHALLENGE"`; **SPECIALIZED_CHALLENGE must not be mapped to `KNTT-Core` or `CORE_APPLY`** just to pass schema tests. The live library currently has no item using a Challenge layer or level; confirm the Written Library renderer, filter options and tests support the new role **before** adding this to the published catalog. If not, implement the small UI compatibility adjustment in the *same reviewable candidate*, then QA, not a Core downgrade.

For `07-WR-11`: favor a minimal addition to `pt07-core-2.teaching_copy.misconception` or `summary`, because `pt07-core-2.teaching_copy.key_idea` and `worked_example` already explain retaining domain conditions. Suggested short text (requires owner UI acceptance):  
**“Vì sao giữ ĐKXĐ?** Với `(x²−4)/(x−2)`, chỉ được rút gọn thành `x+2` khi `x≠2`. Tại `x=2`, mẫu của phân thức gốc bằng 0, nên giá trị đó vẫn bị loại dù biểu thức sau rút gọn có nghĩa.”  
Do not make a new `pt07-core-6` card or claim a new mastery signal.

## 3. Production validation and release conditions

Before publication, prepare a **separate implementation PR** whose diff is scoped to exactly the approved two new WX IDs and a minimal Core teaching-copy delta:

1. Confirm source IDs (`05-ENT-01`, `06-CH-01`, `07-WR-11`) and all original Markdown SHA values unchanged; no existing `WX05-ENT-001`, `WX06-CH-001` ID collision.
2. Validate mathematical identities and 4-point rubrics, full worked solution, three progressive hints, at least two remediation routes, `grade_overlay [8]`, proper `source_refs` and `academic_review` receipt.
3. Verify correct mobile/desktop rendering of Entrance10 and Challenge **without leaking Challenge into mandatory Core filters**. Both new written items are self-marking on paper, no automatic result or Readiness credit.
4. Confirm `pt07-core-2` displays the new explanation in a real learner-visible field, not an unused metadata field; ensure no duplicated new card or micro-activity.
5. Add exactly **2** to `published_scope.exercise_count`, append **one** approved release batch after owner acceptance, and run existing Written Library source, learner navigation, backup/history, Core and Readiness tests.
6. **Owner explicitly accepts** the two IDs, the Entrance10/Challenge labels and the CĐ07 Core display before an actual merge/deployment. Even NotebookLM `PASS_FOR_AUTHORING_REVIEW` is not production authorization.

**No code or bank updates in this documentation review:** catalog still 63 items; accepted target after a separately approved release would be 65 (not already deployed). W3B and W3C academic reviews are independent; 28 remaining historical sources still not reviewed.
