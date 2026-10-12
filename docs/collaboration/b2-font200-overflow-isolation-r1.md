# Math B2-R2-TEXT-01 — 200% font-size overflow isolation

**Status:** `EXACT_SHA_QA_SUCCESS / READY_FOR_MERGE_GATE / REAL_DEVICE_QA_OPEN`  
**Base:** public Math `main` `9c395ae1f72cc093869fc444e764427bab69c1f8`  
**Reported issue:** 390 CSS-px browser width, root `font-size: 200%`, document-level horizontal overflow of 54 CSS px on both Geometry CĐ14 and Dashboard.

## Isolation design

Temporary DOM probes in two disposable Chromium pages inspect widths, flex min-width, overflow and in-flow elements around the 390–540 px boundary. Each selector is disabled/shrunk independently then immediately restored to test whether overflow changes. The probe records header, tabs, Material navigation, main content, sidebars and footer separately.

**Never** treat off-canvas navigation `getBoundingClientRect()` as proof of document scroll-width. The original trace showed Material nav farther to the right, but their participation in document overflow is unresolved.

The initial diagnostic changed only the script, public Math PR QA invocation and this record. Subsequent source-locked experiments proved the offending header controls and display-math containment separately; a focused CSS fix is now included in this draft PR. No learner content, scoring, browser history, private English Actions, or upload artifacts are changed. Merge only after the exact final head passes the public Math PR Quality suite.

The root-font enlargement proxy is not native Safari browser zoom, zoom at 200% of physical device text, or a universal accessibility certification. Real-device checks remain open.

## Confirmed experiment and guarded header candidate — 12/10/2026

- Chromium [Math public QA #38257953951](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/38257953951) **SUCCESS**. With root text at 200% on a 390px viewport: both Dashboard and CĐ14 initially had `scrollWidth=444px`; hiding only the header yielded **0px** on Dashboard and **6px** on CĐ14. The shared header, not an off-canvas navigation item alone, explains the main 54px.
- Follow-up candidate experiment [Math public QA #38259269391](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/38259269391) **SUCCESS**. Temporarily applying `.md-header__button.md-icon {box-sizing:border-box;min-width:44px;min-height:44px;margin:0;padding:4px}` reduced Dashboard overflow **54 → 0px**, CĐ14 overflow **54 → 6px**. The visible header icons remained 46×46px at enlarged root text. Removing the logo would **not** fix the overflow, and hiding the search button is unacceptable.
- Small real CSS change under `@media(max-width:44rem)` now reuses this verified candidate; no header controls hidden. Its own CI and positive-controls must pass before merging.
- Remaining **6px** on CĐ14 appears in a math-dense teaching article and requires independent local containment proof before any global overflow/clipping rule. The root-font test is not a native device browser-zoom test.

## Candidate correction and acceptance gates

1. Shared Material header: under `@media(max-width:44rem)`, compact only `.md-header__button.md-icon` using `min-width:44px;min-height:44px;margin:0;padding:4px`; preserve menu, search and palette buttons. Measured trial: Dashboard 54px → 0px, CĐ14 54px → 6px; icons 46×46px when root text is 200%.
2. Geometry's final 6px: Math public QA `38260527011` showed the experimental full `.arithmatex` wrapper scroll removes the residual. Run `38262079930` then **FAILED as intended** on the strict zero-overflow gate after a narrower **div-only** rule left 6px. The updated candidate keeps `div.arithmatex` scrollable and makes only `span.arithmatex` an **inline-block** with local horizontal scrolling. This maintains inline-level sentence flow while containing wide formulas; the exact original candidate at `ba0b8cf261d7681a93d395806fdbe9910f7a277c` achieved **public Math PR Quality SUCCESS**, run `38263114850`. No `overflow-x:hidden` is applied globally.
3. **Technical pass required before merge:** At a 390 CSS-px browser width + `html.style.fontSize='200%'`, `document.documentElement.scrollWidth - clientWidth <= 2` on both the Grade-7 triangle content page and Dashboard. Header icon targets remain ≥44 CSS px and on-screen. Geometry contains display-math and inline-math wrappers with `overflow-x:auto`; inline-math remains `display:inline-block`. Existing B2 320/390/640px, B1 preservation, scoring and academic QA remain PASS.
4. The enlarged-root-type probe is not native Safari browser zoom. Actual iPhone/iPad/Android user checks and Grade 9/10 student learning feedback remain **OPEN**, even if CI passes. No claim of WCAG-wide compliance.

## Complete technical QA receipt — 12/10/2026

- **Public Math only:** [PR #428](https://github.com/TMA2015/roadmap-toan-thcs/pull/428), final source candidate `ba0b8cf261d7681a93d395806fdbe9910f7a277c`, [Roadmap PR Quality #38263114850](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/38263114850) **SUCCESS**. This receipt is recorded in a subsequent **documentation-only** commit which must also pass QA prior to merge.
- At **390 CSS px + root text 200%**, both **CĐ14 Geometry** and **Dashboard** measured `document.scrollWidth=390`, `clientWidth=390`, and **0px page overflow**. No global overflow hiding.
- Three visible Material header icon controls measured **46×46 CSS px** (within viewport). CĐ14 verified 2 display-math wrappers with local `overflow-x:auto` (one 232px viewport, scrollable 465px content), plus **14 inline math wrappers** using inline-block and local auto overflow.
- Existing keyboard QA on 1365/390 px, narrow/touch B2 640/390/320 px, B1 local save-failure and backup QA, remaining Node regression checks and strict MkDocs build passed in the **same** run. Source isolation guard confirmed five Math-only standard Ubuntu workflows; no shared artifact/cache uploads.
- **Not certified:** real iOS Safari native 200% zoom / text enlargement; VoiceOver/TalkBack; independent self-study A2 observations from Grades 9/10. No real learner data was accessed or migrated. These remain OPEN release-readiness observations.
