# R35 — Owner academic classification: all 16 remaining R27 items (2026-10-18)

**Scope:** `MATH-R35-R27-REMAINING-16-20261018`, 16 IDs only. The Project Owner replied `tiếp tục` to the immediately preceding explicit proposal to accept 16 R35 Grade-7 Core classifications and resolve `NUM02V1_144` as a structural clone. This is recorded as authorization to proceed with **academic classification**, not authority to release or change learner history.

**Final owner academic classification:** 16 `KNTT-Core` items; **14 `STRUCTURAL_CLONE`**, **2 `CONCEPT_BASE`** (`NUM02V1_139`, `NUM02V1_140`); 0 `EXACT_MATCH`. All 16 intended answers have unique zero-index key 0 according to the independent report and focused arithmetic check.

## Reviewer-report reconciliation

- NotebookLM's detailed 16-row table marks `NUM02V1_144` as `STRUCTURAL_CLONE`; its summary instead includes the same ID among three `CONCEPT_BASE` items and claims 13 structural + 3 concept. The **table totals 14 structural + 2 concept**. The original contradiction is retained in `TEMP_R35_NOTEBOOKLM_16_VERDICT_CLAIMS_TRANSCRIPTION_20261018.json`.
- SGK **Toán 7 tập 1, printed p30, Luyện tập 1a** explicitly asks for `√16`, which requires calculating `4`. R35 question `NUM02V1_144` asks for `x=√16` and supplies four multiple-choice options. Same input value and fundamental operation, adapted response format: `STRUCTURAL_CLONE`, **not** a verbatim `EXACT_MATCH`. [Official publisher e-book](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-7-tap-mot.4714106181), [original page image p30](https://cdn3.olm.vn/upload/taphuan/2026/0413/4714106181-page-31-1776051684002.png).
- The independent 16-ID NotebookLM report reports S1 SGK Toán 7 primary source references and all content PASS. Direct supplemental original-book checks observed Toán 7 T1 pp10,11,12,13,16,30,33, and T2 pp4–5; S2 crosschecks provide further exercise locators. **Do not claim that an independent item-by-item original S1 exercise comparison was completed for all 16**; that coverage remains partial in the R35 manual-audit trail. The owner acceptance is a separately documented academic judgment informed by the independent reviewer and available original evidence.
- Published originals: [SGK T7 T1](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-7-tap-mot.4714106181), [SGK T7 T2](https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-7-tap-hai.4700015846).
- The academic receipt `TEMP_R35_OWNER_APPROVED_16_KNTT_CORE_ACADEMIC_SIGNOFF_20261018.json` pins each exact R27 question stem, bank blob SHA, keyed answer, evidence type and proposed SGK S1 locator. Original 24 R33-approved item IDs remain untouched.

## Boundary

| Gate | Current state |
|---|---|
| R35 16 distinct original R27 IDs | Owner academic classification recorded |
| KNTT-Core primary layer | 16 academic approvals |
| Structural/concept evidence type | 14 / 2 academic approvals |
| Earlier R33 24-item decisions | Preserved; 40 total original R27 IDs partition 24 + 16 |
| Runtime item tags, Skills, Readiness, Mastery | **NOT CHANGED / NOT AUTHORIZED** |
| Student history, retroactive credit, backfill, migration | **NOT CHANGED / NOT AUTHORIZED** |
| Live MCQ question/options/answer edit | **NOT CHANGED / NOT AUTHORIZED** |
| Merge of PR #521 or deployment | **SEPARATE DECISION REQUIRED** |

**Next gate:** lock receipt by Git blob SHA and test exactly 16 original item records against the R27 historical source, 24 prior approvals disjoint, 14/2 metadata, the original `NUM02V1_144` reviewer-summary contradiction, and zero runtime writes. Complete full CI on exact PR head before any merge.
