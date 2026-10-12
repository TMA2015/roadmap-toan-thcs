# Math B2-R2-TEXT-01 — 200% font-size overflow isolation

**Status:** `HEADER_ROOT_CAUSE_CONFIRMED / HEADER_FIX_CANDIDATE / GEOMETRY_6PX_OPEN / CI_PENDING`  
**Base:** public Math `main` `9c395ae1f72cc093869fc444e764427bab69c1f8`  
**Reported issue:** 390 CSS-px browser width, root `font-size: 200%`, document-level horizontal overflow of 54 CSS px on both Geometry CĐ14 and Dashboard.

## Isolation design

Temporary DOM probes in two disposable Chromium pages inspect widths, flex min-width, overflow and in-flow elements around the 390–540 px boundary. Each selector is disabled/shrunk independently then immediately restored to test whether overflow changes. The probe records header, tabs, Material navigation, main content, sidebars and footer separately.

**Never** treat off-canvas navigation `getBoundingClientRect()` as proof of document scroll-width. The original trace showed Material nav farther to the right, but their participation in document overflow is unresolved.

Only the diagnostic script and the public Math PR QA invocation are changed. No CSS patch, no content or learner storage change, no private English Actions and no upload artifacts. A separate smallest-scope fix, backed by a failing-then-passing test, may follow after reviewing results.

The root-font enlargement proxy is not native Safari browser zoom, zoom at 200% of physical device text, or a universal accessibility certification. Real-device checks remain open.

## Confirmed experiment and guarded header candidate — 12/10/2026

- Chromium [Math public QA #38257953951](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/38257953951) **SUCCESS**. With root text at 200% on a 390px viewport: both Dashboard and CĐ14 initially had `scrollWidth=444px`; hiding only the header yielded **0px** on Dashboard and **6px** on CĐ14. The shared header, not an off-canvas navigation item alone, explains the main 54px.
- Follow-up candidate experiment [Math public QA #38259269391](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/38259269391) **SUCCESS**. Temporarily applying `.md-header__button.md-icon {box-sizing:border-box;min-width:44px;min-height:44px;margin:0;padding:4px}` reduced Dashboard overflow **54 → 0px**, CĐ14 overflow **54 → 6px**. The visible header icons remained 46×46px at enlarged root text. Removing the logo would **not** fix the overflow, and hiding the search button is unacceptable.
- Small real CSS change under `@media(max-width:44rem)` now reuses this verified candidate; no header controls hidden. Its own CI and positive-controls must pass before merging.
- Remaining **6px** on CĐ14 appears in a math-dense teaching article and requires independent local containment proof before any global overflow/clipping rule. The root-font test is not a native device browser-zoom test.
