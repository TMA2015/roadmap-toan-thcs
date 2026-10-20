# NotebookLM Review Guide — S4 Combined Full-Bank Audit CT21–CT25 R1

Packet ID: `MATH-SKILL-S4-CT21-25-COMBINED-R1-20261002`

## Gate entering this audit
The S4 family-level review is closed PASS:
- 19/19 learner-facing families PASS
- MAP_FIX_COUNT = 0
- 4/4 written-gap proposals PASS
- CROSS_1..4 PASS
- ARCH_1..12 PASS
- authorization = `CLEARED_FOR_S4_ITEM_AUDITS`

This audit does **not** reopen the family count as a quota exercise. It checks whether all 612 individual questions are academically correct and correctly attached to the approved family / role / layer boundary.

## Scope
- CT21: 132 questions
- CT22: 120 questions
- CT23: 120 questions
- CT24: 120 questions
- CT25: 120 questions
- **Combined: 612 questions**
- Approved-family evidence rows: **492**
- Intentional context/category NO_FAMILY rows: **120**
  - CT24: 40 context rows
  - CT25: 80 category rows
- Clone-family candidates: **66**
- Machine preflight from generated overlays: **612 rows / 612 unique IDs**.

## Selected Sources for this review
Batch Sources:
1. `CT21_OVERLAY_SOURCE.md`
2. `CT22_OVERLAY_SOURCE.md`
3. `CT23_OVERLAY_SOURCE.md`
4. `CT24_OVERLAY_SOURCE.md`
5. `CT25_OVERLAY_SOURCE.md`
6. this review guide

Permanent baseline Sources:
7. `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`
8. `01_TOAN_THCS_MASTER_PLAN_v1.1.md`

Total selected Sources: **8 = 2 permanent baseline + 6 S4 batch Sources**.
Do not select old batch packets or `gemini-catalogue-*` sources.

## Global academic rules
- Review **every one of the 612 item rows**, not only family summaries.
- Each one-answer MCQ should have at most one primary diagnostic target.
- Learner-facing family is broader than a diagnostic subskill; do not create new mastery families from wording/context alone.
- MCQ evidence is partial. A correct final option does not prove full written reasoning, modeling, proof, or strategy.
- Preserve family-level PASS unless a concrete item shows an incorrect mapping; report that exact item rather than globally redesigning the taxonomy.
- Check mathematical correctness, answer key, unambiguous wording, units/conditions, and whether the claimed primary/family/role/layer matches what the item actually asks.
- Clone groups are evidence-de-duplication candidates only. Verify membership by actual task structure, not just shared numbers or wording.
- No authored-bank frequency may be treated as real-exam frequency.
- Preserve all legacy question IDs/tags/history. No runtime/mastery/Readiness/history migration is authorized.

## Topic-specific boundaries
- **CT21:** verify statistics/data families, especially data quality/bias, chart reading/representation, grouped data and scale-unit traps. Entrance10 rows do not gate Core.
- **CT22:** entire topic remains **THPT-Bridge / non-gating**. Do not silently relabel these 120 items as THCS Core.
- **CT23:** preserve Core vs Core-Support vs Entrance10. `dong-xu-nhieu-lan` is CONTEXT inside PROB-SPACE-SUPPORT; `xuc-xac-hai-lan` is CONTEXT and `so-do-cay` METHOD inside PROB-MULTISTEP. Their MCQs are partial evidence.
- **CT24:** cross-topic modeling workspace. The 40 `chuyen-dong`, `nang-suat`, `hinh-hoc-do-luong`, `thong-ke-thuc-te` rows are intentional CONTEXT/NO_FAMILY unless an individual item demonstrably measures an already-approved canonical family. Existing approved reuse mappings must remain reuse, not duplicate families.
- **CT25:** the 80 `on-thi-*` rows are CATEGORY/NO_FAMILY by design. They may practice earlier mathematics but do not create new CT25 mastery bars. EXAM-STRATEGY and EXAM-REVIEW are optional Entrance10 and never gate Core.

## Required output
Return only machine-checkable lines.

`BATCH|MATH-SKILL-S4-CT21-25-COMBINED-R1-20261002|PASS`
or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

`TOPIC|CT21|PASS` or `TOPIC|CT21|REVISIONS_REQUIRED`
`COVERAGE|CT21|132|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT22|PASS` or `TOPIC|CT22|REVISIONS_REQUIRED`
`COVERAGE|CT22|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT23|PASS` or `TOPIC|CT23|REVISIONS_REQUIRED`
`COVERAGE|CT23|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT24|PASS` or `TOPIC|CT24|REVISIONS_REQUIRED`
`COVERAGE|CT24|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT25|PASS` or `TOPIC|CT25|REVISIONS_REQUIRED`
`COVERAGE|CT25|120|<reviewed_count>|<revision_count>|<missing_count>`
`COVERAGE|COMBINED|612|<reviewed_count>|<revision_count>|<missing_count>`

If an item needs revision:
`FIX|<topic>|<question_id>|<field>|<current>|<corrected>|<reason>`
Allowed fields include `answer`, `question`, `primary`, `family`, `role`, `layer`, `evidence`, `clone`.
If none: `FIX_COUNT|0`.

## Clone-family review
CLONE|CT21|STA21-AUTO-001|PASS or CLONE|CT21|STA21-AUTO-001|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-002|PASS or CLONE|CT21|STA21-AUTO-002|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-003|PASS or CLONE|CT21|STA21-AUTO-003|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-004|PASS or CLONE|CT21|STA21-AUTO-004|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-005|PASS or CLONE|CT21|STA21-AUTO-005|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-006|PASS or CLONE|CT21|STA21-AUTO-006|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-007|PASS or CLONE|CT21|STA21-AUTO-007|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-008|PASS or CLONE|CT21|STA21-AUTO-008|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-009|PASS or CLONE|CT21|STA21-AUTO-009|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-010|PASS or CLONE|CT21|STA21-AUTO-010|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-011|PASS or CLONE|CT21|STA21-AUTO-011|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-012|PASS or CLONE|CT21|STA21-AUTO-012|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-013|PASS or CLONE|CT21|STA21-AUTO-013|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-014|PASS or CLONE|CT21|STA21-AUTO-014|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-015|PASS or CLONE|CT21|STA21-AUTO-015|REVISE|<corrected membership>|<reason>
CLONE|CT21|STA21-AUTO-016|PASS or CLONE|CT21|STA21-AUTO-016|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-001|PASS or CLONE|CT22|STAT22-AUTO-001|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-002|PASS or CLONE|CT22|STAT22-AUTO-002|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-003|PASS or CLONE|CT22|STAT22-AUTO-003|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-004|PASS or CLONE|CT22|STAT22-AUTO-004|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-005|PASS or CLONE|CT22|STAT22-AUTO-005|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-006|PASS or CLONE|CT22|STAT22-AUTO-006|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-007|PASS or CLONE|CT22|STAT22-AUTO-007|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-008|PASS or CLONE|CT22|STAT22-AUTO-008|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-009|PASS or CLONE|CT22|STAT22-AUTO-009|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-010|PASS or CLONE|CT22|STAT22-AUTO-010|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-011|PASS or CLONE|CT22|STAT22-AUTO-011|REVISE|<corrected membership>|<reason>
CLONE|CT22|STAT22-AUTO-012|PASS or CLONE|CT22|STAT22-AUTO-012|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-001|PASS or CLONE|CT23|PRO23-AUTO-001|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-002|PASS or CLONE|CT23|PRO23-AUTO-002|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-003|PASS or CLONE|CT23|PRO23-AUTO-003|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-004|PASS or CLONE|CT23|PRO23-AUTO-004|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-005|PASS or CLONE|CT23|PRO23-AUTO-005|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-006|PASS or CLONE|CT23|PRO23-AUTO-006|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-007|PASS or CLONE|CT23|PRO23-AUTO-007|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-008|PASS or CLONE|CT23|PRO23-AUTO-008|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-009|PASS or CLONE|CT23|PRO23-AUTO-009|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-010|PASS or CLONE|CT23|PRO23-AUTO-010|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-011|PASS or CLONE|CT23|PRO23-AUTO-011|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-012|PASS or CLONE|CT23|PRO23-AUTO-012|REVISE|<corrected membership>|<reason>
CLONE|CT23|PRO23-AUTO-013|PASS or CLONE|CT23|PRO23-AUTO-013|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-001|PASS or CLONE|CT24|MOD24-AUTO-001|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-002|PASS or CLONE|CT24|MOD24-AUTO-002|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-003|PASS or CLONE|CT24|MOD24-AUTO-003|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-004|PASS or CLONE|CT24|MOD24-AUTO-004|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-005|PASS or CLONE|CT24|MOD24-AUTO-005|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-006|PASS or CLONE|CT24|MOD24-AUTO-006|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-007|PASS or CLONE|CT24|MOD24-AUTO-007|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-008|PASS or CLONE|CT24|MOD24-AUTO-008|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-009|PASS or CLONE|CT24|MOD24-AUTO-009|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-010|PASS or CLONE|CT24|MOD24-AUTO-010|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-011|PASS or CLONE|CT24|MOD24-AUTO-011|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-012|PASS or CLONE|CT24|MOD24-AUTO-012|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-013|PASS or CLONE|CT24|MOD24-AUTO-013|REVISE|<corrected membership>|<reason>
CLONE|CT24|MOD24-AUTO-014|PASS or CLONE|CT24|MOD24-AUTO-014|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-001|PASS or CLONE|CT25|REV25-AUTO-001|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-002|PASS or CLONE|CT25|REV25-AUTO-002|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-003|PASS or CLONE|CT25|REV25-AUTO-003|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-004|PASS or CLONE|CT25|REV25-AUTO-004|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-005|PASS or CLONE|CT25|REV25-AUTO-005|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-006|PASS or CLONE|CT25|REV25-AUTO-006|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-007|PASS or CLONE|CT25|REV25-AUTO-007|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-008|PASS or CLONE|CT25|REV25-AUTO-008|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-009|PASS or CLONE|CT25|REV25-AUTO-009|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-010|PASS or CLONE|CT25|REV25-AUTO-010|REVISE|<corrected membership>|<reason>
CLONE|CT25|REV25-AUTO-011|PASS or CLONE|CT25|REV25-AUTO-011|REVISE|<corrected membership>|<reason>

## Boundary checks
`BOUNDARY_1|PASS` — CT22 stays THPT-Bridge and non-gating.
`BOUNDARY_2|PASS` — CT23 Core/Core-Support/Entrance10 separation is coherent.
`BOUNDARY_3|PASS` — CT24 context rows do not become duplicate mastery families.
`BOUNDARY_4|PASS` — CT24 approved cross-topic reuse remains canonical reuse.
`BOUNDARY_5|PASS` — CT25 on-thi-* rows remain CATEGORY/NO_FAMILY.
`BOUNDARY_6|PASS` — CT25 exam skills remain optional Entrance10/non-gating.
`BOUNDARY_7|PASS` — MCQ evidence does not overclaim written reasoning/mastery.
`BOUNDARY_8|PASS` — the four approved written gaps remain justified and are not replaced by these MCQs.

## Architecture checks
`ARCH_1|PASS`
`ARCH_2|PASS`
`ARCH_3|PASS`
`ARCH_4|PASS`
`ARCH_5|PASS`
`ARCH_6|PASS`
`ARCH_7|PASS`
`ARCH_8|PASS`
`ARCH_9|PASS`
`ARCH_10|PASS`
`ARCH_11|PASS`
`ARCH_12|PASS`
Architecture meanings:
1 all 612 expected items were reviewed exactly once
2 IDs are unique and source-locked
3 one-answer items do not get multiple primary targets
4 family/role assignments measure what each question actually asks
5 intentional NO_FAMILY rows remain non-mastery unless exact item evidence warrants an existing family
6 clone groups are coherent and non-overlapping
7 answer keys/math/conditions/units are correct
8 Core/Core-Support/THPT-Bridge/Entrance10 boundaries are preserved
9 MCQ evidence remains partial where written reasoning is needed
10 legacy IDs/tags/history are preserved
11 no exam-frequency claim is inferred from this bank
12 no runtime/mastery/Readiness/history activation is implied

Finally:
`OVERALL|PASS` or `OVERALL|REVISIONS_REQUIRED`
`COVERAGE|612|<pass_count>|<revision_count>|<missing_count>`
`AUTHORIZATION|CLEARED_FOR_S4_CT21_25_RECONCILIATION` or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`

If chat output would truncate, create a Markdown artifact containing the exact same machine-checkable lines.
