# Self-Learning Math — R17 source-SHA-safe Knowledge presentation pilot

**Date:** 2026-10-24 · **Status:** DRAFT_ONLY / NOT_DEPLOYED / EXACT_HEAD_CI_PENDING / OWNER_AND_ACADEMIC_GATE_PENDING.  
**Base:** GitHub `main` at `680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f`.  
**Prior status:** Draft design PR #574 R16 is open, its CI PASS; closed release attempt PR #575 was not merged because immutable academic source SHAs were challenged. R16 NotebookLM packet exists but has **no verified independent review PASS**.

## What is different about R17

R17 is an *experimental alternative to rewriting source pages*:

- The official longform `docs/kien-thuc/<topic>/index.md` files remain **byte-for-byte identical** for **CT05, CT14, CT21 and CT23**. All previous SHA checks stay enabled.
- New globally-registered assets `math-knowledge-source-safe-r17.js` and `math-knowledge-source-safe-r17.css` contain **route-specific opt-in guards**; if the expected headings/phrases/adjacency are absent, nothing is reflowed.
- The only intended browser changes are **layout**, not facts. The script moves original existing DOM nodes *without cloning, removing, rewriting, re-serializing or hiding them*. Academic notes, source diagrams, KNTT-Core boundaries and original visible infographic content all remain on the page, in the same reading order.
- **CT05 §4.2**: two complete source paragraphs and fenced demonstrations (“Chiều khai triển”, “Chiều nhận dạng / phân tích”) are displayed as two adjacent cards on screens >=672 px, in original sequential reading order on phones.
- **CT14 §3.5**: two original opposite-side/angle rules are displayed as a two-card comparison instead of a stretched vertical list.
- **CT14 §3.6A**: two original directions of perpendicular-bisector reasoning are candidates for the same two-card layout, *only when source text can be matched without assumptions*. No inference added.
- CT21 and CT23 are negative-control routes: no R17 card layout should be applied. **No infographic is hidden or removed** anywhere by this pilot.

This is **not** a method to bypass academic source governance. The approved academic source remains authoritative and no newly-authored math is introduced. Even browser-only structural changes still require academic/owner visual review **before merge**, because rendering might affect perceived reasoning, sequence, symbols, accessibility or teaching intent.

## Scope and safeguards

- `mkdocs.yml`: adds one CSS and one JS path. The scripts run only on exact final-route CT05/CT14 pages, including GitHub Pages repository-prefix URLs.
- The initial baseline of 159 image placements from R14 is untouched; the 80 proposed hidden images in PR #574 **are not hidden on R17's rendered pages**. R17 is a conservative rendering-only solution pending academic review of the large editorial redesign.
- All 87 canonical Written objects, Practice manifests/answers, KNTT Core/Micro, Readiness and learner evidence/IDs remain unchanged.
- No external JavaScript dependencies, endpoints, Firebase network reads, localStorage or IndexedDB writes, DOM `innerHTML`, synthetic grading, or invented interactive buttons. Existing AI tutor and Practice routes unchanged.
- On nonmatching browsers or source shape the native vertical Markdown layout remains usable.
- CSS uses existing light/dark theme tokens, 2-column wide and 1-column below 42rem, no font shrinking, original HTML list semantics retained, and print shows both cards.

## QA gates

1. `scripts/test-math-knowledge-r17-original-source-integrity.js` validates exact original Git blob SHAs for **four protected longforms**, asset registration and the absence of known JS side-effect primitives.
2. Existing full repo QA incl. Grade-9 source locks, Wave F and Wave C checks, MkDocs `--strict`, and browser regression unchanged.
3. `scripts/test-math-knowledge-r17-source-safe-browser.py` reads the built real final topic URLs at desktop **1365px**, tablet-sim **820px**, and phone **390px**. Checks original words/expressions, full original SVG decode and appearance, source-derived 2→1 responsive grid, print and dark theme, zero JS errors and page horizontal overflow. CT21 negative control.
4. Browser tests run without submitting exercises, accessing Firebase, uploading CI screenshots or cache/artifacts.
5. Parent owner should inspect actual MkDocs output and real iPad Safari, especially code blocks in parallel layout and CT14's two logical directions. No claim physical Safari is covered by Chromium test.
6. If the source layout is ambiguous, skip enhancement; *do not* auto-convert arbitrary mathematical reasoning content into two columns.
7. A source-SHA-safe rendered UI QA PASS does **not** authorize merging the large preview redesign from #574, retiring SVGs or updating source locks. The separate R16 review packet still requires NotebookLM and explicit academic-governance decision.

## Proposed outcome decision

If R17 passes academic/rendering review, it can be a **small additive visual improvement** with exact source data intact. The full 25-topic re-authoring/editing of actual lessons in PR #574 must remain pending independent academic equivalence and source-versioned approval; never silently reinterpret a frontend-only enhancement as permission to modify the approved Markdown.

**Deployment hold:** PR remains Draft, no merge/deploy without explicit user authorization and final-route smoke check plan.
