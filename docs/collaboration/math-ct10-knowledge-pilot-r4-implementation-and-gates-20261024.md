# CT10 full-knowledge visual harmonization / real-source pilot R4 — execution receipt

**Date:** 2026-10-24  
**Scope:** Owner-authorized design and academic-content harmonization **in a Draft PR only**. **Not deployed** / no learner evidence writes / no changes to site front page, original CT10 page, 120-question bank, original keys, existing Grade9 Readiness or the 87-item Written Library.  
**Source baseline:** `docs/kien-thuc/10-ham-so-do-thi/index.md` immutable blob `bbba2357371803f641410ad8b5cf61980d7c3081`, 17,506 JS UTF-16 characters, 11 H2 sections, 8 knowledge subsections, 11 method types.

## Implemented files (Design PR #574)

1. **True-source native-MkDocs candidate** `docs/kien-thuc/10-ham-so-do-thi/preview-tabs-r4.md` (**not** the live `index.md`): two actual `pymdownx.tabbed` five-tab groups; preserves all 11 H2 main sections, 8 numbered knowledge subsections and 11 numbered problem types. First four **text-dense** infographics are hidden **from reading view only**, original files retained. Five subject-specific mathematical SVGs retained. One new short relation diagram added. Contextual written/practice references added after method types; no new scoring or duplicate exercise code.
2. **Scoped CSS** `docs/assets/stylesheets/math-topic-knowledge-tabs-pilot-r4.css`, only imported by this candidate. 16–17px reading text, scoped heading hierarchy, centered important display math, left-aligned reasoning text, graphs centered, mobile tab scroller, touch targets, light/dark tokens, print-all tabs.
3. **Scoped JavaScript** `docs/assets/javascripts/math-topic-knowledge-tabs-pilot-r4.js`, only imported by this candidate. Native tab prev/next, counter, fragment link, Back/Forward, keyboard Arrow/Home/End and support for print. No `fetch`, `localStorage`, Firebase, score or learner history operations.
4. **New SVG** `docs/assets/infographics/10/10-10-tu-cong-thuc-den-do-thi-r3.svg`: a legible **formula→value table→point coordinates→graph** relation, not another duplicated summary of every paragraph. Plotted demonstration uses `y=2x+1` with graph points `(0;1),(1;3),(2;5)` (line/axes adjusted to match data).
5. **Authoring-only gap proposals** `docs/collaboration/math-ct10-three-missing-problem-type-candidates-r4-20261024.md` and `math-ct10-fourth-unlinked-type11-candidate-r4-20261024.md` for §5 types **3,9,10,11**, pending independent academic review/source-locked placement/Owner release. They **do not** enter the canonical 87 exercise bank.

**Separate local preview artifact for Owner:** `math_topic_cd10_infographic_alignment_r4.html` (conversation artifact). This fetches original pinned `main` text via public GitHub when opened online; in-browser editorial view hides obsolete text-dense SVGs, inserts the new visualization from branch, links only to verified live paths, and explicitly marks unfilled types. This preview is **not** the exact MkDocs build and must not be mistaken for one.

## Concrete source/coverage mapping

- Source §3: `3.1–3.8` → **5 tabs**, no concept omitted.
- Source §5: `Dạng 1–11` → **5 tabs**, 11 distinct problem methods survive.
- Visual: original 9 SVG → **5 kept in reading view**, 4 archived as original assets, **1 new relation diagram** in view.
- Written: **only verified canonical WX10-FUN-001/002/003 are linked as exact item IDs**; actual UI router supports `?topic=CT10#wx10-fun-001` etc (async deep-link scrolling verified by reading `written-exercise-library-v1.js`).
- Practice: existing manifest `FUN10-V1`, 120 questions and 16 skill labels. Links to active interactive Practice Room where a skill family is actually present.
- **Critical correction from inspecting `hooks/topic_markdown_fixes.py`:** 13 old locally authored 10-WR/ENT/CH exercises *exist only in source*; the deployed `bai-tap.md` is replaced by the interactive-only page, so do **NOT** expose links to individual old 10-WR/ENT/CH tasks. All such misleading link labels were removed from R4 candidate and standalone preview.
- Types **3,9,10,11** have no verified *active representative exercise* for their exact family, although source Markdown may include examples and some adjacent generic practice exists. Four candidate items drafted but **no bank writes**. The CT10 SVG #04 “4. Dạng bài trọng tâm” is the fourth panel number, *not* four actual problem methods; this still confuses learners, hence archived from study view.

## QA conducted / limitations

### Verified using current GitHub content in same branch

- Candidate `preview-tabs-r4.md`: exactly 10 native `===` group markers, 11 H2 original sections, all 8 knowledge headings, all 11 problem type headings, **6 visible images** (5 retained authentic math diagrams + one new) and all 3 canonical `WX10` refs. Contains four explicit uncovered-type notices. Original `index.md` blob unchanged.
- New JS source contains **no** learner-storage/database/network calls. CSS isolated by `body.math-topic-pilot-r4` and explicit import only within the preview Markdown.
- New relation SVG corrected to align plotted points with its value table; re-check math/diagram readability at release gate.

### Browser tests for separate standalone preview

- Chromium/Playwright 1365, 820, 390px under **format-matching synthetic lesson fixture**, not full real-source screenshot. PASS: 2 tab groups 5+5, links to known paths, four genuinely missing-type notices, click tabs, next navigation, no viewport overflow and no uncaught JS runtime error.
- Cannot call this full-source **real iPad/MkDocs visual PASS**. The standalone HTML fetches remote GitHub; the container browser is network restricted, so screenshots from synthetic fixture are not official visual evidence.
- GitHub Actions PR CI result tracked separately and MUST NOT be inferred from local fixture.
- Need test deployed native MkDocs output on preview URL with real MathJax, responsive SVG, link resolution, sticky nav + accessibility, print all, browser history, no interference from MkDocs shell/tutor; require Owner PC/iPad acceptance before replacing topic `index.md`.

### Academic and release gates (HOLD)

- Editorial SVG/source consistency D1–D6 and mathematics visual audit for all 5 existing plus 1 new educational diagram.
- Exact KNTT-Core vs Entrance10/Challenge placements and sources for type links; four new candidate written items independent NotebookLM, no blind Mastery projection.
- Verify production Written deep links and Practice target with browser, not only code reading.
- Confirm whether the native tabbed transform preserves proper headers, equations, tooltips, MathJax and print on actual MkDocs output (CI build then manual QA).
- Parent/owner side-by-side comparison, especially iPad and long pages.
- Only then distinct explicit authorization to replace real CT10 `index.md`; thereafter create reusable THPT pattern. **Do not merge design PR automatically.**

## Delivery / QA summary

**Implemented:** actual candidate page & unique infographic, scoped styling/interaction, source-to-exercise crosswalk, four authoring candidates.  
**Verified:** static source parity/counts and standalone fixture interactivity.  
**Not verified:** live native build & academic reviewer `OVERALL|PASS`; exact real rendered image quality; owner/physical iPad acceptance.  
**Next coherent wave:** run branch CI, native MkDocs browser QA with real source + committed SVG, fix screenshot regressions, then Owner evaluation.
