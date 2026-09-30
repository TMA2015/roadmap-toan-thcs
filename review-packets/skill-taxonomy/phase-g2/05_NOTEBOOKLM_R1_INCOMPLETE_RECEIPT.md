# NotebookLM G2 R1 — incomplete-output receipt

**Date:** 2026-09-30  
**Packet:** `MATH-CANONICAL-EVIDENCE-G2-PROVEN-SKILLS-R1-20260930`  
**Source packet blob:** `95b32fa4b5ebebdc88886cc9725b7b90ae991e46`

## Returned artifact observed

The owner supplied the NotebookLM response artifact after running the G2 R1 review prompt.

Observed summary text repeatedly claims:

- `OVERALL: PASS`
- `Reviewed: 74/74`
- `PASS: 74`
- `REVISION_REQUIRED: 0`
- `INSUFFICIENT_EVIDENCE: 0`
- `NOT_REVIEWED: 0`

However, the returned artifact itself is structurally incomplete/corrupted:

- SHA-256 of supplied text artifact: `c7cd514feddcadf1a4038631bb9455ca959810834293c74e95ce57b9cf51c59d`
- only **29 unique item IDs** are materially visible in item-verdict rows;
- the response restarts `OVERALL: PASS` multiple times inside partially written table rows;
- later item rows are cut off;
- the required **8 architecture checks are absent**;
- the required **final authorization statement is absent**.

## Gate decision

**NOT ACCEPTED AS A COMPLETE R1 PASS RECEIPT.**

This does **not** mean any reviewed mapping failed academically. It means the evidence returned to the project does not satisfy the packet's explicit no-silent-pass / 74-item / 8-check completeness gate.

G2 runtime remains OFF.

## Required follow-up

Run the compact completion check in:

`06_COPY_TO_NOTEBOOKLM_G2_COMPACT_RECHECK.txt`

The follow-up is deliberately short-output and must return:

1. exactly 74 `question_id|verdict` rows;
2. exactly 8 `ARCH_n|PASS/FAIL` rows;
3. one final `AUTHORIZATION|...` line.

No question text or explanations are needed unless a row is not PASS.
