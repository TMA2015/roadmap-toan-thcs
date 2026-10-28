# Toán THPT — Checkpoint Chương VI S1 source audit + Candidate Bank v0.2

**Date:** 27/10/2026 · **Branch:** feature/thpt-g10-b16-knowledge-pilot-r1-20261026 · **PR:** #612 DRAFT.  
**Priorities:** Math App Project Sources 08 v2.0, 06 handoff, 07 v1.1 batch/delta; owner v7 Golden UI with small menu changes.  
**Do not merge/deploy or issue Academic PASS.**

## 1. Source status and lesson authoring

| Unit | Original SGK KNTT printed | Original SBT KNTT printed | Direct visual read | Lesson draft | Independent academic review |
|---|---|---|---|---|---|
| G10 ChVI B15 | 4–10 | 3–9 | **YES** (both SGK & SBT) | Expanded function, graph, table, piecewise model | NO |
| G10 ChVI B16 | 11–18 | 10–15 | **YES** for omitted SGK17–18/SBT15, earlier review SGK11–16/SBT10–14 | Postfix PASS scope plus **new draft motion/revenue** | PASS only preexisting snapshot, **new delta pending** |
| G10 ChVI B17 | 19–24 | 16–18 | **YES** (both) | Sign chart Δ cases, inequalities, parameter, real context | NO |
| G10 ChVI B18 | 25–27 | 19–21 | **YES** (both) | Two radical equation types, root validation and geometry | NO |
| ChVI end | 28–29 | 22–27 | Pages visually inspected at overview | Existing 8 cumulative exercises remain DRAFT | NO |

Scanned PDFs were visually inspected, not OCRed. Page references here are printed pages. SGK/SBT text is **not** copied into public repo. Additional original worked examples are mathematically self-checked but still pending NotebookLM.

B15 receipt: THPT_G10_B15_S1_VISUAL_CONTENT_RECEIPT_20261027.md and THPT_G10_B15_SBT_DIRECT_VISUAL_CONTENT_RECEIPT_20261027.md.
B17 receipt: THPT_G10_B17_SGK_SBT_DIRECT_VISUAL_AUDIT_20261027.md.
B18 receipt: THPT_G10_B18_SGK_SBT_DIRECT_VISUAL_AUDIT_20261027.md.
B16 scope delta: THPT_G10_B16_S1_OMITTED_PAGES_CONTENT_DELTA_20261027.md.

## 2. Question bank work

- B15: **9 item candidates** = 2 Core + 4 Practice/Application + 3 held-out Readiness.
- B17+B18: **16 item candidates** = 4 Core + 8 Practice/Application + 4 held-out Readiness.
- Total new: **25 unique candidate IDs**, provisional and not exported to production; **7 proposed held-out Readiness items** are absent from preview JS/pages.
- Original B16 R4 reviewer register contains **5 separate IDs** already validated only within old scope (Core, Practice, readiness technical demo bundle, Written, Written/Anchor). The new 25 IDs do not reuse or overwrite those five.
- A metadata-only shared placement contract in shared-items/placement-contract-v0.1.cjs continues to cover the **five existing B16 IDs**. New candidates remain outside this active metadata pilot until academic review and source/outcome/item reconciliation; **do not claim registry now has 30 live items**.
- Candidate packs: shared-items/THPT_G10_CHVI_B15_CANONICAL_CANDIDATES_v0.1.md and shared-items/THPT_G10_CHVI_B17_B18_CANONICAL_CANDIDATES_v0.1.md. Answers in internal review files are not permitted into the production Readiness HTML before Final Submit.
- Automated QA: scripts/test-thpt-shared-item-placement.cjs; scripts/test-thpt-chvi-draft-item-bank.cjs invoked by THPT browser QA. Unique ID counts, status and no held-out IDs in user-facing pages/JS are asserted.

## 3. Readiness / shared role boundaries

- Both independent routes remain academically complete by design: SGK has chapter-end Readiness, Topic has topic-level Readiness. Topic UI exactly 3 sections, no Core tab.
- One canonical item may appear in SGK Core/Practice or Topic Practice at appropriate difficulty, **and** in one or both Readiness assessment pools only after outcome/eligibility review and exposure control.
- 4-question Chapter Readiness in the UI is **TECHNICAL_DEMO_ONLY**. No mastery / credits. The 7 new held-out candidates are not placed there and do not provide coverage enough for entire Chapter VI.
- Core/Practice modal layout v7 is owner broadly accepted, small sidebar/home corrections recorded separately; no further HTML QA artifact requested.

## 4. Next engineering/academic tasks

1. Build **ChVI independent Chapter Readiness outcome blueprint** for all B15–18 with appropriate held-out B16 items (missing in current new pool); ensure sufficient graph, modeling, discriminant, root filtering coverage.
2. Reconcile each candidate ID against a specific verified SGK/SBT outcome and difficulty/source tier, strengthen Written/Anchor and misconception remediation for B15,17,18.
3. Build canonical renderer/assessment exposure engine **separately from the preview**; currently the new 25 questions exist as reviewed-pending Markdown candidates only.
4. Prepare a coherent **NotebookLM academic batch**, preferably Chương VI or B15/B17/B18 + explicit B16 omitted-page delta, with **actual Temp_ Markdown/TXT files or ZIP + short prompt**, per Project Sources 06/07; do not package prematurely without complete snapshot and expected ID reconciliation.
5. Follow up exact-head CI. No merge/deploy until owner explicit approval.

## 5. Gates

SOURCE_SGK_SBT_B15_B17_B18=VISUALLY_VERIFIED  
B16_OLD_ACADEMIC=PASS_ON_REVIEWED_SNAPSHOT_ONLY  
B16_NEW_SCOPE=DELTA_C_NOT_REVIEWED  
NEW_CANONICAL_CANDIDATES=25_NOT_REVIEWED  
CHVI_READINESS=TECHNICAL_DEMO_ONLY  
NOTEBOOKLM_BATCH=NOT_SUBMITTED  
MERGE_DEPLOY=NOT_AUTHORIZED
