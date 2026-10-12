# B2 R2 — Narrow reflow, geometric SVG and touch-target diagnostics

**Source:** public Math repo `cb233878f698ffe481d0ee60ad6c6756226f7ccf`  
**Scope:** source-locked diagnostic only; no learner runtime, content, score, ID, Firebase, or English Actions change.  
**State:** `DIAGNOSTIC_CANDIDATE / RUN_PENDING`

## Method

- In a **disposable Chromium mobile-touch context**, evaluate CSS viewport widths **640, 390 and 320 px**, respectively: desktop-at-200%-zoom *reflow proxy*, common phone viewport, and stringent narrow reflow proxy. These widths do **not** simulate native browser zoom, device text magnification or assistive technology.
- Verify two actual SVG geometry images on Topic 14 load, preserve accessible alt text, and stay within their immediate containing element. Record MathJax presence but do not infer mathematical legibility from a DOM count.
- Open the Topic 14 Core teaching dialog by touch; measure clipping at each width and close without answering.
- Open Topic 02 Practice; record visible option and action touch-target widths/heights and exercise one answer using `tap()`.
- Open Topic 02 Readiness; record choice and nav targets, choose with `tap()` and ensure **no assessment is saved before submit**.
- Inspect Dashboard backup buttons' visible touch rects, without downloading or importing any file.
- Log JSON metrics in **job console only**; no Actions artifacts or cache, no screenshots exported, no private English workflow.
- Do not label all measured targets PASS from this diagnostics-only probe. First review measured hit rectangles and choose a focused CSS/UX repair separately if necessary.

## Required follow-up

Triage overflow or under-sized tap targets against practical 44 CSS-px target guidance; ignore intentionally scrollable mathematics wrappers but never silently crop geometry or conceal answer controls. Review with owner on real iPhone/Android and at native 200% zoom. Add independent pass/fail thresholds only after baseline observations, and preserve all established math/spelling/taxonomy outcomes.

**Academic boundary:** no new math items; NotebookLM review not needed for layout/technical QA.
