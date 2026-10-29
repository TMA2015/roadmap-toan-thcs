# Checkpoint · G10 ChIX B26–B27 · D5/D6 authoring R01 ready for NotebookLM (2026-10-29)

**STATUS:** `AUTHORING_SOURCE_COMPLETE_FOR_D5D6_REVIEW`, **NOT academic cleared**, not CONTENT_READY, not released.

## Current verified GitHub source

- Existing learner Draft PR #616 `1c205a9a87f5e0fc2563be14e1c1a911a14c6d76` (dependent on historical VIII branch; release lane must rebase). Public D1–D4 has 14 formative + 2 Written IDs reviewed on independent snapshot; 6 private held-out Chapter Readiness candidates reviewed but **0 runtime active**.
- New D6 HELP cards authoring file: `prototypes/thpt/content-drafts/THPT_G10_CHIX_B26_B27_D6_HELP_REMEDIATION_CANDIDATE_v0.1.md` Git blob `79de21d2538b5dffe6483e58a4b11c06644a57b5`, 4 HELP_ID for B26/B27 with 16 existing canonical references, no new question/item IDs.
- New **actual editable SVG** (not briefs): FIG01 `prototypes/thpt/visuals/THPT_G10_B26_COIN_DIE_SAMPLE_SPACE_CANDIDATE.svg` Git blob `e03d92262abb4aa99e88da565f07b7054adc803e`; FIG02 `prototypes/thpt/visuals/THPT_G10_B27_WITHOUT_REPLACEMENT_TREE_CANDIDATE.svg` Git blob `877abd0e755950e6112f1c2aaa33f281027ad33f`.
- Both source SVGs independently reconstructed locally and verified with Git blob SHA (exact source fidelity), parsed as XML, rendered in CairoSVG. FIG01 matrix 2×6 = 12 cells, 4 marked for P=1/3, hit set (N,3),(N,6),(S,3),(S,6). FIG02 has 4 initial choices × 3 remaining = 12 distinct ordered pairs, RR/RB/BR/BB multiplicities 2/4/4/2, each detailed pair probability 1/12. This is **local math + renderer preflight**, not NotebookLM PASS, browser physical-device UAT or S1-scope review.
- Actual reviewer handoff **one Temp Markdown file** `Temp_THPT_G10_CHIX_B26_B27_D5_D6_R01.md` SHA256 `0f78b39fd5db116b571794105e5f8e2108acb72aa663cab2f2b6eda6a2c6e7d5`, size 26,752 bytes. Contains 4 complete D6 instructional cards + *exact complete XML* of 2 source SVGs + 16 canonical ID register + explicit S1 review criteria. No JSON delivered; file + 3–6 sentence prompt in chat.
- **Snapshot caution:** The Temp file is independently versioned and includes some text rewritten for review clarity compared with GitHub D6 candidate v0.1. If NotebookLM later PASSes Temp, do not automatically attribute that PASS to GitHub D6 source without checking exact paragraphs/delta class and reconciling them. The two SVG blocks **are byte exact** vs GitHub blobs.

## Remaining A gates / blockers

- `D5_FIG01/FIG02_ACADEMIC=NOT_REVIEWED` and `D6_FOUR_HELP_ID_ACADEMIC=NOT_REVIEWED`; no owner-supplied NotebookLM verdict yet. Need reviewer S1 printed pages, lesson scope, math, labels, avoidance of premature conditional-probability framework and exact item link mapping.
- Chapter IX A5 remains HOLD until D5+D6 reviewed against actual snapshot and independent D1–D6 scope matrix reconciled. A6 final delta still HOLD. Cannot promote `G10-SGK-CHIX` inventory to ready. Do not use 6 held-out answers/keys/hints/rubrics in public packet. No Topic readiness assumption.
- For release lane once A gates close: rebase #616 from old dependency onto current main/#620/#621, integrate approved academic D5/D6 content **without rewriting canonical C/P/Written**, exact-head CI, browser/device QA, Final Submit safety and owner approval before merge/deploy.

**Next decision:** Obtain NotebookLM verdict for D5 FIG01–02 and D6 four HELP_ID. If all P0/P1 cleared, perform minimal delta, freeze corresponding exact source and close scoped A5/A6; otherwise keep inventory blocker.
