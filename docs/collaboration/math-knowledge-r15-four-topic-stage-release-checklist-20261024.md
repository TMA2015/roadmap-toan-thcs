# Math Knowledge R15 — four-topic final-route release-candidate gate

**Date:** 2026-10-24 · **Status:** DRAFT / STAGING ONLY — NEVER DEPLOY OR MERGE WITHOUT OWNER PERMISSION.

## Purpose and branch relationship

- The extensive design source remains Draft PR **#574**, `design/math-knowledge-pages-and-hub-r0-20261023`, and does **not** change any official topic `index.md` page.
- This branch `release-candidate/math-knowledge-4topics-r15-20261024` starts at the current production `main` commit **`680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f`** and implements **four genuine final-route `index.md` files** only to validate how the future release would work.
- The matching source previews were `docs/kien-thuc/<topic>/preview-composition-r3.md` in design PR #574; they are **not** copied into this branch as extra preview routes. Current production remains untouched until an explicit merge/deploy action.
- The release candidate carries the previously authored opt-in `docs/assets/stylesheets/math-knowledge-composition-v1.css` and area SVG `docs/assets/infographics/05/05-05-mo-hinh-dien-tich-binh-phuong-r2.svg`; no original infographic SVG file is deleted.

## The first four topic migrations

| Topic | Live-route candidate | Production-original blob SHA (in base main) | Real kept/new visuals | Link rules |
| --- | --- | --- | --- | --- |
| CT05 Hằng đẳng thức | `docs/kien-thuc/05-7-hang-dang-thuc/index.md` | `6e34411e59ebf8589ba8ee14f2464edd5c0e822f` | New four-area model `05-05` | skill `nhan-dang-hdt`, Written `WX05-IDN-001` |
| CT14 Tam giác | `docs/kien-thuc/14-tam-giac/index.md` | `f9fae782453f7126b39f123d728188d49787c149` | Original triangle/Pythagoras SVGs | `so-sanh-canh-goc`, Written `WX14-TRI-003` |
| CT21 Thống kê | `docs/kien-thuc/21-thong-ke/index.md` | `27b0938c5ee263a8c60dd73cf6d42d3d52d0d89a` | 8 source statistics SVGs retained | `bang-tan-so`, **no fake Written** |
| CT23 Xác suất | `docs/kien-thuc/23-xac-suat/index.md` | `1b69ae97f0597a3c7b521ecb315cf2a5d3d82187` | 4 original probability SVGs | `xac-suat-thuc-nghiem`, Written `WX23-PRO-001` |

## Route adaptation: preview and release route are NOT interchangeable

```text
Markdown in topic folder:                 ../../assets/... (MkDocs rewrites source links)
HTML link to stylesheet on preview:      ../../../assets/stylesheets/...
HTML link to stylesheet on main topic:   ../../assets/stylesheets/...
HTML raw <img> on preview subpage:       ../../../assets/geometry|statistics|probability/...
HTML raw <img> on topic index route:     ../../assets/geometry|statistics|probability/...
Practice from preview subpage:           ../bai-tap/?mode=remediation&focus=<real-skill>
Practice from topic index route:         bai-tap/?mode=remediation&focus=<real-skill>
Written from preview subpage:            ../../../luyen-tap/tu-luan/?topic=CTxx#wx...
Written from topic index route:          ../../luyen-tap/tu-luan/?topic=CTxx#wx...
```

These changes are deliberate **URL-path rewrites**, not new problem keys, bank moves or grading changes. Verify actual browser resolution and target page HTTP 200 before release. Link destinations also require owner-facing verification of what skill/exercise is shown, not just routing.

## Automated gates included in this branch

- Existing repository QA, Math-only isolation, 25-topic checks, `mkdocs build --strict`, all old browser regression tests.
- `scripts/test-math-knowledge-r15-final-route-built.js` checks exactly one contextual practice panel per topic, labels, MathJax wrappers, imported stylesheet, SVG presence/filesystem paths, active Practice destination, canonical Written id/location (CT21 deliberately no Written).
- `scripts/test-math-knowledge-r15-final-route-browser.py` checks four **real `/kien-thuc/<topic>/` pages** × 1365 desktop / 820 simulated tablet / 390 mobile. It resolves URLs in the browser and issues **read-only** GETs against the built Practice and Written targets, loads essential SVG, checks computed CSS, JS exceptions and horizontal overflow.
- Tests use no artifact/cache uploads and never record learner evidence, submit exercise answers or mutate Firebase/Google data.

## Academic/UX release gates remaining

1. Exact-head **GitHub Actions PASS** for *this separate staging Draft PR*. R14 design PASS is not enough.
2. Academic source review: identify each removed text-only infographic fact, verify it remains findable elsewhere in this page and does not remove conditions/assumptions/examples; verify SVG accurately illustrates the demonstrated math. Do not claim independent NotebookLM approval unless formal result exists.
3. Owner should inspect real rendered R15 pages (not GitHub raw Markdown) in light/dark mode, desktop/phone and preferably physical iPad Safari; verify formula and diagrams, table wrapping, touch targets, keyboard and print.
4. Confirm no edits to `docs/assets/data/practice/**`, `docs/assets/data/written-exercises/**`, `docs/assets/data/core/**`, Firebase, hooks, learner login, profiles or scoring.
5. Obtain explicit owner instruction **to merge/release this specific four-topic Draft PR**; do not assume general permission to continue QA is release permission.
6. Validate the live site after merge and published deploy: page assets, redirected links, core and practice paths, no stale cache. Only then consider another wave.

## Rollback plan

- **Before merge:** do nothing; simply close the Draft PR if this candidate is rejected. No production change has occurred.
- **After a future approved merge, if regression occurs:** revert the merge commit through a separate reviewed revert PR, restoring the four exact original `index.md` files from base SHA `680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f`; stylesheet and new SVG may be removed if unused. Then verify rebuilt page routes and learner workflows. Don't rewrite or erase user progress as part of rollback.
- Avoid `git reset --hard` / force pushing `main`, changing canonical bank IDs or dropping old deep links.

**Status phrase:** `RELEASE_CANDIDATE_R15_DRAFT / NONDEPLOYED / EXACT_HEAD_CI_PENDING / ACADEMIC_AND_VISUAL_APPROVAL_PENDING`.


## R15 gate correction — Grade-9 immutable source locks (2026-10-24)

**Blocking CI finding on first R15 attempt:** existing Grade-9 reconciliation requires **the complete canonical CT21 Markdown byte-for-byte** (git blob SHA `27b0938c5ee263a8c60dd73cf6d42d3d52d0d89a`). The audited Grade-9 inventory also source-locks CT23 through its reviewed Wave A mathematical example and historical source. Changing these `index.md` files for UI-only reasons would violate existing academic governance even when example content seems preserved.

**Action taken:** On this separate Draft staging branch both CT21 and CT23 `index.md` files were **restored exactly to current main**. Their R3 design preview files remain untouched in Draft PR #574 for eventual source-aware review. **Only CT05 and CT14 remain proposed for actual final-route modification** in this R15 Draft PR. No academic protection assertion is weakened, deleted, or replaced.

- Updated `scripts/test-math-knowledge-r15-final-route-built.js`: real final-path deep links and math images for CT05/14; explicit SHA checks that CT21/23 remain unchanged.
- Updated `scripts/test-math-knowledge-r15-final-route-browser.py`: six scenarios (two topics × 1365/820/390) rather than twelve.
- CT21/23 are **not** part of release wave 1 even after CT05/14 gain technical PASS; require separate approved academic source revision process or a demonstrably acceptable read-only rendering-layer design reviewed against these locks.
- This appendix **supersedes** earlier R15 description of four topics as active release candidates. Two-topic academic-safe candidate is the only current scope. Original four-topic branch name remains as historical identifier; PR title/body specify active two-topic scope.
