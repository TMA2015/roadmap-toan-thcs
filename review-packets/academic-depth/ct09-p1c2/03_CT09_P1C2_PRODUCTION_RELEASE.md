# CT09 Academic Depth P1-C2 — Production Release Receipt

Date: 2026-10-03  
Task: `MATH-ACADEMIC-DEPTH-CT09-P1C2-001`  
Status: **LIVE / OWNER PRODUCTION QA PENDING**

## Academic authorization

Packet:
- `MATH-ACADEMIC-DEPTH-CT09-P1C2-INTERACTIVE-R1-20261003`

NotebookLM:
- SYS09V1_121..129: **9/9 PASS**
- C1..C10: **PASS**
- revisions: **0**
- authorization: `CLEARED_FOR_CT09_P1C2_INTEGRATION_ONLY`

Receipt:
- `review-packets/academic-depth/ct09-p1c2/02_NOTEBOOKLM_CT09_P1C2_INTERACTIVE_R1_PASS_RECEIPT.md`

## Released implementation

PR:
- **#300**

Exact tested HEAD:
- `4af111313a1ed672be32b90b8a2b6aa0b8b2cad5`

Roadmap PR Quality:
- **#644 PASS**

Squash merge to main:
- `6709e1aec75c2cc838366f8128c26701c0838f3b`

Deploy:
- MkDocs **#552 PASS**

Deployed `gh-pages` checkpoint:
- `4fe2f34d79681391a8df473e95d6b9ca7e57a0fe`

## Production verification

Verified from deployed artifact:
- CT09 Practice question count: **129**
- source chunks: **5**
- structural `variant_group` count: **27**
- new IDs present exactly:
  - `SYS09V1_121`
  - `SYS09V1_122`
  - `SYS09V1_123`
  - `SYS09V1_124`
  - `SYS09V1_125`
  - `SYS09V1_126`
  - `SYS09V1_127`
  - `SYS09V1_128`
  - `SYS09V1_129`
- deployed Taxonomy v2 observer includes the reviewed CT09 P1-C2 extension.

The original `SYS09V1_001..120` remain append-only historical content.

## Preserved boundaries

Still unchanged:
- no Mastery/Readiness credit;
- no historical regrade/backfill;
- no prior-attempt migration;
- no automatic written scoring;
- `variant_group` remains non-evidence delivery metadata;
- frozen I3G aggregate was not rewritten; the 9 new rows use a reviewed additive shadow extension.

## Owner QA gate

Owner production QA is still required for the nine new interactive questions.

Recommended minimum spot-check:
1. confirm CT09 Practice displays **Ngân hàng 129 câu**;
2. encounter/open representative new items from concept/solve/model groups;
3. confirm formulas render correctly;
4. confirm **Xem gợi ý** progresses through 2 hints;
5. answer a new item and confirm explanation/next action behave normally;
6. confirm no internal IDs, clone-family or authorization metadata are visible.

## Current state

`CT09_P1C2 = LIVE_OWNER_QA_PENDING`
