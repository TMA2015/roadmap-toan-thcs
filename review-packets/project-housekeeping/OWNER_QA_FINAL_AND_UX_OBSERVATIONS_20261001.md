# Owner QA completion + UX observations — 2026-10-01

Owner confirmed production PASS on desktop and iPad for:
- CĐ02 end-to-end Grade 6 journey/Readiness;
- CĐ21;
- CĐ24;
- CĐ25.

No functional regression was observed in those tested flows.

## QA closure

This closes:
- `G6-T02-OWNER-UX-001`;
- `MATH-UI-BATCH-A-OWNER-QA-001`.

Together with the earlier CĐ03/CĐ07 PASS, the end-of-day owner-QA debt list from 2026-09-30 is fully cleared.

## New issues observed during owner QA

### 1. Broken "Tiếp tục học" rendering

Owner screenshot shows raw Markdown leaking in the continuation block. Audit found the same vulnerable wrapper in:
- CĐ02;
- CĐ04–CĐ13.

Root cause in source: Markdown links were nested inside a raw HTML `<div class="topic-workspace-actions" markdown>` while the current Markdown extension set does not process that wrapper as intended.

Patch: remove that unnecessary raw HTML wrapper and keep the Markdown links as normal Markdown.

### 2. Roadmap link order

Owner requested a consistent mental model:
1. previous topic at the top;
2. links within the current topic in the middle;
3. next topic at the bottom.

Patch standardizes Practice-page roadmap sections across CĐ02–CĐ25. CĐ25 has no next topic and remains a capstone.

### 3. Duplicate navigation surfaces

Owner noted that the four-step topic header and the in-topic quick menu can feel duplicative. This is not release-blocking. Track as a later UX consolidation candidate rather than removing either surface without broader usability review.

### 4. "Các dạng bài" needs concrete written examples

The current theory pages often describe problem types verbally, while Practice is skill-oriented. Owner selected a paper-first written exercise library as the preferred solution direction:
- small initial coverage;
- one Core Base item per type where sufficient;
- a second Core Apply item only when useful;
- step-by-step solution;
- rubric;
- anchor problems may be surfaced in the same library;
- append-only expansion later.

Design contract: `docs/collaboration/written-exercise-library-v1.md`.
