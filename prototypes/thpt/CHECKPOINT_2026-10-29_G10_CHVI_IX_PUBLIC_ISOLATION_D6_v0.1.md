# CHECKPOINT 2026-10-29 · G10 ChVI–IX — cross-chapter D6 public isolation QA

**Scope:** DELTA_A / TECHNICAL_QA_ONLY under Project Source 07 v1.1. No mathematical stem, answer, hint, rubric, outcome, SVG, Golden UI R4, THCS learner content, or learner data was modified. **No new academic verdict.**

## Repository reality (reconciled 29/10/2026)

- GitHub repository is now `TMA2015/self-learning-math` (the former `TMA2015/roadmap-toan-thcs` link redirects).
- Original PR **#612 was merged 28/10/2026 14:58:41 UTC**, not an active Draft. The static ChVI R4 preview is present on `gh-pages`; this checkpoint **does not attribute that merge or publication to this QA run**.
- Root programme selector PR **#617 was separately merged**; `main` has selector at `docs/index.md` and preserved THCS homepage at `docs/thcs/index.md`. This branch predates #617 and must reconcile upstream before release.
- Active dependent Drafts: **#614** ChVII (36 public IDs), **#615** ChVIII (28 public IDs), **#616** ChIX (16 public IDs). This checkpoint belongs to **#616** only. **No merge/deploy by this run.**

## Completed technical delta

1. Added `scripts/test-thpt-g10-public-bank-isolation.cjs`, a source + assembled-site D6 gate for **116 unique public canonical IDs** across ChVI (36), ChVII (36), ChVIII (28), ChIX (16). Breakdown: 89 JS formative, 17 Written, 8 ChVI cumulative, 2 legacy B16.
2. Checks **no canonical ID duplication** across four chapters, no held-out `Rxx/RDxx` IDs in THPT public pages/assets, no `data-mastery-credit="true"`, no accidental protected assessment client, and ChVI remains a **four-question TECHNICAL_DEMO_ONLY**. ChVII/VIII/IX Chapter Readiness pages remain informational with **0 activated** questions.
3. CI workflow now executes the guard **before MkDocs build** and **after one-site assembly** (`--built`), without publishing anything.
4. Updated the ChIX stage3 source QA to accept either original THCS root or the separately approved PR #617 root selector, while **requiring preservation of the real THCS homepage**. No THCS files changed.
5. Independent GitHub source inspection reconciled **116/116 distinct IDs**; CI run #40834803470 on exact functional code commit `a7dd808d7cbb239a9419adffb2f0c2d07fa45b30` completed SUCCESS: source guard, built-site guard, MkDocs assembly, Chromium desktop/iPhone/iPad simulation, and old/new GitHub Pages path smoke. This is not real physical Safari/UAT.

## Academic scope, not inferred from CI

- **ChVI:** NotebookLM reviewer PASS/clearance for the exact five-file 54-ID / 19-outcome snapshot (receipt 28/10). Only 36 are public formative/Written. The 18 held-out Readiness stems/keys are **not** part of this source or client.
- **ChVII/VIII:** reviewed source D1–D5 receipts apply only to their exact academic snapshots and reclassification overlays. Website D6/UAT and chapter release clearance **not granted**.
- **ChIX:** D1–D4 reviewed source snapshot staged; D5 visuals **not authored/reviewed**, D6 and owner release gate pending.
- **Topic route:** still requires independently complete Knowledge/Practice/Topic Readiness; no Topic Core tab. Source placement is not a second canonical item.
- **Security limitation:** the current **static, no-account GitHub Pages** architecture has **no authenticated per-learner exposure ledger or private question/answer service**. Thus a real held-out Final Submit, cross-route independence, scoring, and Mastery **cannot be claimed or activated**. Source scanning is a prevention check, not an exposure-log substitute.

## Gates

```text
D6_SOURCE_CANONICAL_RECONCILIATION|116_UNIQUE_PUBLIC_IDS_CONFIRMED
D6_PUBLIC_HELDOUT_SOURCE_GUARD|IMPLEMENTED
D6_PUBLIC_HELDOUT_BUILT_GUARD|PASS_CI_40834803470
D6_EXACT_FUNCTIONAL_CODE_BROWSER_QA|PASS_CI_40834803470
D6_REAL_DEVICE_SAFARI|NOT_SIGNED_OFF
CHVI_HELDOUT_READINESS|INACTIVE
CHVII_VIII_IX_HELDOUT_READINESS|INACTIVE
PRODUCTION_SCORING_MASTERy|NOT_AUTHORIZED
OWNER_RELEASE_APPROVAL_FOR_NEW_CHAPTERS|NO
MERGE_DEPLOY_BY_THIS_RUN|NO
```

**Next:** reconcile #614–#616 against the separately merged #617 root selector before any release discussion; independently validate real Safari/mobile and source-to-render parity. The checkpoint-only commit after CI changes documentation, not the tested functional source. Do not upload private Readiness or award Mastery.
