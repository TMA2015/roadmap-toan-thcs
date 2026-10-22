# W9 — Owner release authorization

**Decision date:** 2026-10-22 (Asia/Bangkok)  
**Scope:** entire approved W9 cohesive wave in [PR #567](https://github.com/TMA2015/roadmap-toan-thcs/pull/567).  
**Exact Owner statement in conversation:** “đồng ý phát hành toàn bộ gói W9”.  
**Decision:** `OWNER_DECISION|APPROVE_W9_RELEASE`  
**Academic packet:** `MATH-W9-CONSOLIDATED-NOTEBOOKLM-ONE-UPLOAD-R1-20261021`  
**Academic source:** Owner's NotebookLM report, 18/18 original Written math + SGK S1 placement PASS, 3 Micro + 1 Written NUM-ABS candidate PASS. The independent academic receipt remains unchanged, including its earlier `AUTHORIZATION|NO_LIVE_RELEASE`; THIS later explicit Owner decision is the separate deployment authorization.

## Approved wave — one cohesive release

- 18 original canonical Grade7–9 Written IDs: add independently reviewed KNTT grade/chapter/lesson discovery without editing their mathematical source, canonical IDs or old learner attempts.
- `WX21-STA-001`: clarify canonical grade to **G6**, ChIX **Bài 40 — Biểu đồ cột**, preserving original mathematical content.
- `NUM02MICRO_065..067`: release the three independently reviewed original-scope Grade6 absolute-value formative Micro exercises under the existing Grade6 learning card.
- `WX02-NUM-004`: authorize **one** new Grade6 foundational Written with multistep solution, hints, rubric, misconception support; no automatic Readiness/Mastery.
- One shared Written library: filters `Lớp → Chương → Bài học` using only true independently reviewed `kntt_placements`, preserving previous topic/type/level/ID deep links.

**Approved publication count:** `WRITTEN_PUBLISHED_BEFORE|74`, `WRITTEN_NEW|1`, `WRITTEN_PUBLISHED_AFTER|75`.

## Important exclusions and release gates

- `W8_GRADE9_READINESS_RELEASE|NOT_AUTHORIZED` (Draft #565 remains separate).
- `W9_ACADEMIC_REVIEW_BRANCH_566|DO_NOT_MERGE` (read-only review evidence retained).
- `NO_READINESS_MASTERY_AUTOCREDIT|ENFORCED` and preserve existing 237 topical Readiness items / live Grade6 formative quiz / historical local attempts.
- `APPROVAL_CONDITIONAL_ON|EXACT_HEAD_FULL_CI_PASS`
- `APPROVAL_CONDITIONAL_ON|MAIN_GITHUB_PAGES_DEPLOY_SUCCESS`
- Physical iPad Safari review is an **Owner-observed post-release acceptance check**, not a fact implied by desktop/tablet emulation. If it fails, open a narrowly scoped fix instead of claiming device PASS.
- The deployed artifact must have `published_scope.exercise_count=75`, one published W9 batch with `OWNER_APPROVED_RELEASE_20261022`, **zero pending candidates**, and a production preflight guard.

**This record captures the explicit approval supplied in the conversation, not a new academic verdict or a change to any earlier independent review packet.**
