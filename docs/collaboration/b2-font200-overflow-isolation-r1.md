# Math B2-R2-TEXT-01 — 200% font-size overflow isolation

**Status:** `DIAGNOSTIC_ONLY / ROOT_CAUSE_PENDING`  
**Base:** public Math `main` `9c395ae1f72cc093869fc444e764427bab69c1f8`  
**Reported issue:** 390 CSS-px browser width, root `font-size: 200%`, document-level horizontal overflow of 54 CSS px on both Geometry CĐ14 and Dashboard.

## Isolation design

Temporary DOM probes in two disposable Chromium pages inspect widths, flex min-width, overflow and in-flow elements around the 390–540 px boundary. Each selector is disabled/shrunk independently then immediately restored to test whether overflow changes. The probe records header, tabs, Material navigation, main content, sidebars and footer separately.

**Never** treat off-canvas navigation `getBoundingClientRect()` as proof of document scroll-width. The original trace showed Material nav farther to the right, but their participation in document overflow is unresolved.

Only the diagnostic script and the public Math PR QA invocation are changed. No CSS patch, no content or learner storage change, no private English Actions and no upload artifacts. A separate smallest-scope fix, backed by a failing-then-passing test, may follow after reviewing results.

The root-font enlargement proxy is not native Safari browser zoom, zoom at 200% of physical device text, or a universal accessibility certification. Real-device checks remain open.
