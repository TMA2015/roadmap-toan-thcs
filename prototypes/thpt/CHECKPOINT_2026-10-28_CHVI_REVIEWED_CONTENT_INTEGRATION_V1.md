# THPT ChVI — reviewed SGK formative integration v1 (2026-10-28)

**Owner instruction:** Start the ChVI integration lane immediately while the separate chat/branch develops other chapters.  
**Repo:** TMA2015/roadmap-toan-thcs · Draft PR #612 · branch feature/thpt-g10-b16-knowledge-pilot-r1-20261026.  
**NO MERGE / NO DEPLOY / NO MASTERY CREDIT / NO NEW ACADEMIC VERDICT.**

## 1. Review provenance and academic scope

NotebookLM reviewer PASS and CLEARANCE YES for `PACKET_ID=THPT-G10-CHVI-KNTT-BATCH-CANDIDATE-20261028` applies only to the 5-file batch of 54 IDs. Detailed SHA256 and academic receipt:
`THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md`.

- `Temp_02...` reviewed formative source SHA256 `31adaab53cc7f5cfd58f94ac8fe1a0b896570dfc6d45addb6751b39df9986b89`;
- `Temp_04...` reviewed Written source SHA256 `3ef22deef5c9d535c707b509a8b60677c92b785a56fe7de768a410dd772d5a16`;
- Reviewed OUTCOME_MATRIX: 19/19 across B15–18.
- Reviewed 18 Chapter Readiness items in `Temp_03...` are deliberately **not** copied into any `docs/`/browser JS/public GitHub. Public metadata-only receipt remains separate.

## 2. What was *actually* implemented in the static R4 MkDocs preview

| Role | Unique canonical item IDs | Live preview backing source | Integration status |
|---|---:|---|---|
| B15/B17/B18 SGK Core + Practice/Application | **18** | `docs/assets/javascripts/thpt-chvi-reviewed-formative-v1.js` | **LIVE_PREVIEW_FORMATIVE**, from reviewed Temp_02; 2 Core + 4 Practice per lesson |
| B16 Core and Practice | **2** | Existing `docs/thpt-preview/sgk/core/ham-so-bac-hai.md` / `docs/thpt-preview/chuyen-de/ham-so/luyen-tap.md` | Existing canonical R4 sources retained; NOT duplicated |
| ChVI cumulative A1–A4/B1–B4 | **8** | Existing single `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md` | Assigned canonical `THPT-G10-CHVI-APP-*` IDs, linked through original lesson Practice modals |
| ChVI Written & Anchor | **8** | Existing `docs/thpt-preview/thu-vien/tu-luan.md` | Six new reviewed items inserted, two B16 existing kept; four are Anchor-tagged Written |
| **Total public formative/Written** | **36** | Four backing source groups, one source per item | Public content only, **NO production scoring or mastery** |
| ChVI Chapter Readiness | 18 reviewer-approved academic IDs, **0 production-published** | Held out *outside* public repo | Current four-question UI remains `TECHNICAL_DEMO_ONLY`, no credit |

The 18 new public questions are rendered as text-answer **self-check with opt-in hint and worked solution**, since reviewed questions are not necessarily MCQ. The R4 modal design/visual shell and grade colors are unchanged. No claim that free-text answers are automatically scored: learners self-compare; the preview stores no attempts. B15-P02 already appeared in teaching examples; it is expressly formative, **not Readiness evidence**.

The 8 cumulative exercises retain original A1–B4 backing content and are never copied into the JS bank. B3's possible Written placement references **the same A/B item ID**, no cloned ninth Written answer. The six new Written item bodies and rubric tables are rendered from the reviewed Temp_04 source; existing two B16 Written items are kept.

## 3. Test gates

- `scripts/test-thpt-chvi-reviewed-formative.cjs` checks **18** exact review manifest IDs, role distributions, all fields present, no Readiness IDs in client, **8** cumulative canonical IDs, **6 new + 2 legacy Written** and total **36 public unique IDs**.
- `scripts/test-thpt-r4-preview-browser.js` checks the B15 reviewed modal, default-closed solution disclosure, next question canonical ID, existing B16 modal, three B17 cumulative references and Written library **8 cards/4 Anchor labels**, plus the existing 4-question technical no-credit Readiness safeguard.
- No tests upload, import, serve or regrade actual held-out exam question text/key.
- **Exact GitHub CI must be checked after current branch HEAD** before claiming green. No snapshot byte-level proof of all prose yet; this is a **semantically transcribed integration stage**. Any mismatch of mathematical conditions/answer/rubric must be corrected and classified per Project Source 07 before release.

## 4. Next integration lane

1. Compare `Temp_01` reviewed knowledge to four existing SGK pages B15–18 section by section, preserving math semantics and Golden UI layout. Current status banners now distinguish snapshot academic PASS from page integration QA pending.
2. Deep QA reviewed 18 public question statements/answers/hints and 6 Written rubric conversions, including accessibility and tablet/mobile.
3. For production Chapter Readiness, require protected assessment delivery and key storage, a per-learner exposure ledger shared across both curricula, Final Submit barrier and answer lock; cannot safely activate as a public/static JS quiz.
4. After QA, request owner acceptance for updated ChVI preview, separately from merge/deploy. Do not extend SGK ChVI PASS to incomplete cross-grade Topic.

**Gates**: `ACADEMIC_REVIEWED_SNAPSHOT=PASS`; `PUBLIC_CHVI_FORMATIVE_WRITTEN=36_IDS_IN_PREVIEW`; `READINESS_HELDOUT=18_NOT_PUBLISHED`; `SECURE_READINESS_ENGINE=NOT_IMPLEMENTED`; `GOLDEN_UI_R4=UNCHANGED`; `MERGE_DEPLOY=NO`.
