# CHECKPOINT 2026-10-28 · G10 VII–VIII · NotebookLM D1/D2 + held-out scope reconciliation v0.4

**Workstream:** học liệu Chương VII–VIII và các chương tiếp; branch `content/thpt-g10-chvii-chviii-authoring-20261028`, forked from PR #612 head `20e0a6041daa6378f1d45f2b0806bc1482fd0e83`. **Never commit into PR #612 integration branch or Chương VI files in this workstream.** PR #612 may advance independently. No merge/deploy.

## Reviewer verdict received
The owner pasted NotebookLM batch receipt `THPT-G10-CHVII-VIII-BATCH-REVIEW-20261028`.
- B19,B20,B21,B22,B23,B24,B25 `D1_D2_ACADEMIC=PASS` on the three exact Temp sources/snapshots.
- 14 original independent-check candidate IDs `ACADEMIC=PASS` (math review) with `EXPECTED=14, REVIEWED=14, MISSING=0, UNEXPECTED=0, DUPLICATED=0`.
- `ACADEMIC_OVERALL=PASS` **for this limited packet only**; `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
- 63 existing canonical Core/Practice/Application/Written bank IDs remain `D3_D4_NOT_REVIEWED`. 35 provisional outcomes are not automatically 35/35 independently cleared. Full SGK/SBT item-depth audit pending.

## Independent reconciliation and safety delta
- **Original RD02 retired**: `THPT-G10-CHVII-RD02=RETIRED_EXPOSED_CANDIDATE`. Same mathematical result/direction as public worked B19 example; moreover a historical Git commit of the reviewer receipt inadvertently disclosed a solution-specific expression. A later commit removed the expression from current receipt, but historical Git remains; do not ship RD02, do not reassign its canonical ID.
- **New replacement review-only candidate:** `THPT-G10-CHVII-RD09`, same assessment blueprint slot `CHVII-READ-B19-02`, fully authored and algebraically checked in the **local-only** owner handoff `Temp_THPT_G10_CHVII_VIII_NOTEBOOKLM_SCOPE_AND_RD_DELTA_20261028.md`. New stem/key are intentionally **not** stored in GitHub. `RD09_ACADEMIC=NOT_REVIEWED`; 13 other reviewed candidate IDs preserved only as unchanged mathematical candidates, not deployable engines. `DELTA_CLASS=DELTA_C_ACADEMIC_MATERIAL` for the replacement; reviewer delta re-review required.
- **35 vs 29 outcome rows:** 6 provisional outcome IDs did not get their own explicit reviewer matrix row. These are B19-MULTISTEP, B19-LINEAR_MODEL, B21-CIRCLE_THROUGH_POINTS, B22-HYPERBOLA_ASYMPTOTES, B22-CONIC_INTERSECTION, B22-CONIC_MODEL. Also 6 shortened reviewer aliases refer to different spelling of existing canonical IDs; never create extra skills/IDs for aliases.
- **Reviewer P1:** `THPT-G10-B22-C01`, `THPT-G10-B25-P02`, `THPT-G10-B25-P06` have scope flags; do not silently promote advanced/optional material to KNTT-Core or adopt proposed metadata enums without actual S1 and engine schema confirmation.
- **Reviewer P2:** when secure validation exists, normalize equivalent algebraic forms for the RD04 distance value.
- **Readiness security:** slot metadata and review receipt may be on branch; stem/key/solution for RD09 must remain outside public GitHub/HTML/JS. No student exposure until protected server-side key validation, exposure tracking, answer reveal only after Final Submit and owner authorization.

## Authoring assets and guards
- `THPT_G10_CHVII_SGK_KNOWLEDGE_AUTHORING_v0.1.md`: B19–22 D1/D2.
- `THPT_G10_CHVIII_SGK_KNOWLEDGE_AUTHORING_v0.1.md`: B23–25 D1/D2.
- Reuse old 63 item IDs without copies: 56 C/P/Application + 7 Written (2 Anchor-tagged), 35 provisional outcomes and 4 SVG draft.
- No Topic Core: Topic = Kiến thức / Luyện tập / Tự kiểm tra; SGK Core follows lesson, SGK Chapter Readiness only at chapter end. Topic scopes 10–12 still need independent source audit.
- Golden UI R4 and Adaptive Knowledge Tabs v2 untouched. No CHVI integration edits, no THCS edits, no score/mastery, no CI/browser QA claimed.

## Handoff and next work
1. Owner can add **one real local Temp Markdown file** for focused RD09 + six-outcome delta review to NotebookLM with short prompt, per Sources 06/07.
2. Continue existing 63-item D3/D4 review with complete item stems/keys/solutions/rubrics and original SGK/SBT outcome mapping; no silent PASS transfer.
3. Reconcile reviewer deltas and source scope by risk class (A/B/C/D), then prepare code-only integration handoff for other conversation **only after owner gate**.

GATES: `D1_D2_7_LESSONS=NOTEBOOKLM_PASS_SCOPED` | `ORIGINAL_RD_14=NOTEBOOKLM_MATH_PASS_SCOPED` | `RD02=RETIRED_EXPOSED` | `RD09=NEW_PRIVATE_CANDIDATE_NOT_REVIEWED` | `ITEM_BANK_63=NOT_REVIEWED_D3_D4` | `OUTCOME_35=NOT_FULLY_RECONCILED` | `ACADEMIC_CLEARANCE_FOR_RELEASE=NO` | `MERGE_DEPLOY=NO`.
