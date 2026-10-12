# B2 R2 — Narrow reflow, geometric SVG and touch-target diagnostics

**Source:** public Math repo `cb233878f698ffe481d0ee60ad6c6756226f7ccf`  
**Scope:** source-locked diagnostic only; no learner runtime, content, score, ID, Firebase, or English Actions change.  
**State:** `NARROW_AND_TOUCH_HARD_GATES_PASS / ROOT_FONT_200PCT_OVERFLOW_OPEN / OWNER_REAL_DEVICE_QA_OPEN`

## Method

- In a **disposable Chromium mobile-touch context**, evaluate CSS viewport widths **640, 390 and 320 px**, respectively: desktop-at-200%-zoom *reflow proxy*, common phone viewport, and stringent narrow reflow proxy. These widths do **not** simulate native browser zoom, device text magnification or assistive technology.
- Verify two actual SVG geometry images on Topic 14 load, preserve accessible alt text, and stay within their immediate containing element. Record MathJax presence but do not infer mathematical legibility from a DOM count.
- Open the Topic 14 Core teaching dialog by touch; measure clipping at each width and close without answering.
- Open Topic 02 Practice; record visible option and action touch-target widths/heights and exercise one answer using `tap()`.
- Open Topic 02 Readiness; record choice and nav targets, choose with `tap()` and ensure **no assessment is saved before submit**.
- Inspect Dashboard backup buttons' visible touch rects, without downloading or importing any file.
- Log JSON metrics in **job console only**; no Actions artifacts or cache, no screenshots exported, no private English workflow.
- Do not label all measured targets PASS from this diagnostics-only probe. First review measured hit rectangles and choose a focused CSS/UX repair separately if necessary.

## Recorded first CI baseline and gates — 12/10/2026

- Public Math PR [#427](https://github.com/TMA2015/roadmap-toan-thcs/pull/427) initial SHA `5aa54f953a5b5187a837f3236d41106cacdc98aa`, Roadmap PR Quality `38240773503` **SUCCESS**. Its full CI job log contains the following measured results from disposable Chromium touch contexts:
  - **640/390/320 CSS px:** `documentOverflow = 0` in sampled Core, Practice, Readiness and Dashboard routes.
  - **Geometry CĐ14:** tam giác cân + Pythagore SVGs loaded with meaningful alt, remained inside container at each width; page rendered 32 MathJax nodes in the sampled article.
  - **Core dialog:** widths 618/368/298 px, within their 640/390/320 px viewports; heights 880/824/700 px within test viewports 900/844/720 px.
  - **Sampled tap targets:** Core card teaching and micro controls minimum 44 px high; Practice options minimum approximately 49.6 px; Readiness choices ~55.6 px, nav minimum 51 px; Dashboard main actions ~48.4 px.
  - A touch answer in Practice, unsubmitted selection in Readiness and modal open/close completed without page JS errors.
- In this follow-up, previously descriptive checks are upgraded to hard assertions for sampled 44 CSS-px targets, DOM scroll width and dialog bounds. A **separate 200% root-font-size scaling probe** is diagnostic only, not yet a native browser zoom guarantee. The final commit must receive its own public Math QA PASS before merging.
- Limits: CSS-px sizes and DOM node counts cannot prove readability, legibility of all visual labels, or full semantic access for screen readers.

## QA follow-up: hard gates and text scaling — 12/10/2026

- Final hard-gate source HEAD before this documentation update: `7600cb764b5fe342e3432b65e2f6ee4364359b9b`, public Math PR Quality run `38242509750` **SUCCESS**, no screenshot artifacts.
- **PASS (representative):** At 640/390/320 CSS px, hard assertions verified >=44 CSS-px height/width for sampled Core/Practice/Readiness/Dashboard controls, no sideways page overflow under normal text sizing, contained lesson modal and working synthetic touch actions. Two geometric SVG assets loaded with descriptive alt, and 32 MathJax nodes observed.
- **OPEN B2-R2-TEXT-01:** At 390 CSS px with `document.documentElement.style.fontSize='200%'`, both geometry and dashboard routes reported **54 CSS px of page-level horizontal overflow**. This is a simulated **root font-size enlargement**, not native Safari zoom. Geometry images stayed inside their parents; main dashboard buttons were individually contained.
- The trace includes translated/off-canvas Material navigation nodes outside the viewport, but **does not establish that the off-canvas nav is the scroll-width cause**. Do not apply broad `overflow-x:hidden` to the document or clip MathJax/geometry. Next isolated probe should identify the in-flow width contributor near the actual `scrollWidth=444px` boundary and retest with genuine browser zoom or text enlargement and real hardware.
- This technical diagnostic does **not** authorize a CSS fix, and is **not** an A2 or accessibility certification. Full final SHA QA must still pass after this documentation update.

## Required follow-up

Triage overflow or under-sized tap targets against practical 44 CSS-px target guidance; ignore intentionally scrollable mathematics wrappers but never silently crop geometry or conceal answer controls. Review with owner on real iPhone/Android and at native 200% zoom. Add independent pass/fail thresholds only after baseline observations, and preserve all established math/spelling/taxonomy outcomes.

**Academic boundary:** no new math items; NotebookLM review not needed for layout/technical QA.
