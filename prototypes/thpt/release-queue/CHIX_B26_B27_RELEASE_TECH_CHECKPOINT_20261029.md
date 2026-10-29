# G10-SGK-CHIX · Chương IX B26–B27 · Release technical checkpoint (2026-10-29)

**PACKET_ID:** G10-SGK-CHIX  
**LEARNING_PATH:** SGK_CHAPTER  
**RELEASE_SCOPE:** PUBLIC_FORMATIVE_ONLY  
**STATE:** TECHNICALLY_VALIDATED_WAIT_OWNER_R5_AND_AUTHORING_HANDOFF  
**RELEASE_PR:** #630 (Draft, DO NOT MERGE)  
**AUTHORING_PR:** #626 (Draft, A1–A7 CONTENT_READY, DO NOT bypass authoring handoff)  
**MAIN_BASE:** 1951ed67edbcb37da6bda4932298cc6ba4fb55cf (PR #629 merged iOS drawer fix)  
**SOURCE_QA_HEAD_BEFORE_MAIN_RECONCILIATION:** 9d5d3bc4e5883e28aa4522984823e3969a5eb5a4

## Snapshot locks checked in GitHub

- 14 reviewed public canonical formative records, **unchanged** JS Git blob `caf4ca6f8866a2cb3377dfdfa73d723c0e5bd5f0`.
- Two D4 Written (one Anchor): original review snapshot blob `51c5f78e41d569fff11070e0f48f3ab25f58b587`; both complete student cards including stem, answer, rubric and help **unchanged** after removal of reviewer-only labels.
- D5 two exact approved SVG source blobs `e03d92262abb4aa99e88da565f07b7054adc803e` (B26) and `877abd0e755950e6112f1c2aaa33f281027ad33f` (B27). Responsive CSS only; SVG source bytes not edited.
- D6 four student remediation cards B26-01/02, B27-01/02: checked 4/4 exact text and linked canonical IDs against approved NotebookLM Temp R01 mirror Git blob `6ac3c0762d9cf8b41ab614e2163979d9770a436f`. No new item IDs; HELP_IDs distinct from item_id.
- Source-equivalent SBT corrected for printed B26 exercises pp61–63, B27 pp64–66, end chapter pp67–69. No math content, item answer or rubric changed.
- No private `SGK_CHAPTER_READINESS` candidate stems/keys/rubrics or Topic Readiness/official Mastery on public R4 pages. Tự kiểm tra page is explicitly inactive.

## Technical release checklist

- **R1_INTEGRATED_CURRENT_MAIN:** release PR #630 uses same reviewed original bank and Written, source-locked D5/D6, follows main iOS menu fix #629; this checkpoint's merge-parent records main ancestry, preserving already green menu JS/CSS and regression test. Do not merge old source PR #616 / independent UI #620/#621.
- **R2_EXACT_HEAD_CI:** prior candidate 9d5d3bc4e5883e28aa4522984823e3969a5eb5a4 reports **SUCCESS** for THPT R4 Preview [run #40898033634](https://github.com/TMA2015/self-learning-math/actions/runs/40898033634) (23/23 including ChIX D5/D6 browser smoke and iOS menu) and Roadmap PR Quality [run #40898033598](https://github.com/TMA2015/self-learning-math/actions/runs/40898033598) (86 steps including full browser/visual). **Final post-reconciliation HEAD must separately repeat both SUCCESS** before R2 clearance or merge.
- **R3_CLEAN_STUDENT_UI:** no reviewer-only audit labels; SGK B26/B27 + Core/Practice modals, two Written, two responsive SVGs, four collapsible D6 cards; linked canonical public formative. New student routes included in SGK and Written menus; Grade 6–9 THCS not modified.
- **R4_ASSESSMENT_SAFETY:** six independent ChIX readiness candidates kept private and inactive, no Final Submit engine or Mastery writes activated. Formative answers visible only voluntarily in public practice.
- **R5_OWNER_APPROVAL:** **HOLD / NOT AUTHORIZED** for ChIX. Owner authorization of 2026-10-29 applies ONLY to G10 ChVII–VIII PUBLIC_FORMATIVE_ONLY, not ChIX. Require explicit owner approval for exact PR #630 bounded scope after all R1–R4 QA pass.

## Dependencies and actions

1. Authoring handoff PR #626 is A1–A7 READY in its own scoped snapshot, but its `REGISTER.md` is stale (claims ChVII–VIII INTEGRATING although they are already PUBLISHED_SCOPED). Reconcile its register against current main before source handoff merge. Do not replace current main register with old facts. Source receipt must remain immutable.
2. Release PR #630 remains Draft until exact final-head CI successes, source handoff reconciled, and explicit owner R5 authorization. No new Academic PASS inferred.
3. After authorized merge/deploy, P1 must verify Deploy workflow SUCCESS and deployed `gh-pages` HTML/JS/SVG source identity; P2 is separate physical desktop + iPad/iPhone confirmation.
4. Never touch browser progress keys, Firebase/Gemini, THCS Golden UI, or public private Readiness isolation.

**No merge/deploy authorization is implied by this checkpoint.**
