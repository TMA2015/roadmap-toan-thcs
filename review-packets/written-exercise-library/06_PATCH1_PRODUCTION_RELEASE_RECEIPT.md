# Written Library Patch 1 — production release receipt

Date: 2026-10-01

Owner-approved scope:
- compact Hướng dẫn / Rubric / Lỗi thường gặp into one horizontal three-action row;
- revealed support content remains full-width beneath the action row;
- support toggles remain presentation-only and do not write learner data;
- add Thư viện bài tập to quick shortcuts, changing launcher from 6 + 25 to 7 + 25;
- add topic-page CTA inside the transformed “Các dạng bài” card only when the written catalog contains items for that topic;
- deep link to `/luyen-tap/?topic=CTxx` so the topic filter is automatic;
- no academic content, Readiness/mastery, canonical-evidence or G3 changes.

Exact-head QA:
- tested HEAD: `8be3c40482dcf48545fa49e27cfccaa1822b8b16`;
- Roadmap PR Quality `36841009154`: SUCCESS;
- static/schema/navigation QA: PASS;
- strict MkDocs build: PASS;
- browser QA: PASS:
  - three support controls share one row;
  - panels open/close without learner-data writes;
  - quick shortcut includes Thư viện bài tập and displays 7 + 25;
  - CĐ07 “Các dạng bài” CTA exists inside `#types`;
  - CTA points to `/luyen-tap/?topic=CT07`;
  - library automatically selects CT07 and renders its two written exercises.

Production:
- implementation PR: #237;
- merge commit: `a80343a5ceba56957af3002f4b128e9fb5545c8e`;
- Deploy MkDocs `36841498180`: SUCCESS.

Current gate:
- owner production spot-QA before closing `MATH-WRITTEN-LIBRARY-UX-PATCH-001` and the parent Written Exercise Library task.
