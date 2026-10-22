# Class-wide composite review — scope and owner decisions (2026-10-21)

**Status:** R2 G6 STRUCTURAL PILOT, NOT PUBLISHED / NOT ACADEMICALLY APPROVED.  
**Purpose:** User has approved developing **Ôn tập tổng hợp theo lớp** as a new learning path; **not** another topical composite because topical Practice + Readiness already exist. This file records QA governance, not a launch authorization.

## Product intent
- Entry: **Học theo lớp → Chọn lớp 6–9 → Ôn tập tổng hợp** (start with Grade 6 only).
- Pick from **multiple** grade-authenticated **Core cards** and chapters already learned; never assume an entire mixed-grade topic is Grade 6.
- Propose an initial **10-question formative pilot** (20 only after enough distinct, academically approved choices), no hints during attempt, Previous/Next/review unanswered, results after Final Submit, explanation + remedial routes.
- Score = **điểm ôn tập tổng hợp (tự luyện)**, not exam marks, not automatic Core Mastery / Readiness. Separate versioned attempt storage, never overwrite historical data, never clone/credit a Core Micro or topic Readiness attempt.
- Strictly exclude Challenge/Entrance10, uncertain age/grade mapping, missing Core card or source quality; prevent exact stem, ID and variant-group duplicates.
- Independent NotebookLM reviews candidate **mathematics, KNTT layer, inter-topic balance, depth, fairness and class 6 scope** before live feature; QA desk/mobile afterward.

## Baseline G6 structural count (published 2026-10-14 source audit)
- Across 6 topics CT02 CT03 CT13 CT20 CT21 CT23: 195 total Micro, **87 grade-6 tagged**, **81 linked to a present KNTT Core card**; in particular CT20 6 of 9 tagged Micro have no matching current card and are **ineligible**.
- The project has a read-only inventory script `scripts/audit-class-mixed-quiz-g6-source-r1.js`.
- This R2 candidate selector script: `scripts/prototypes/math-class-mixed-g6-r2.js`; proposes a 10-item spread **CT02 3, CT03 1, CT13 2, CT20 1, CT21 2, CT23 1**. It outputs actual immutable question IDs for independent academic review; no website route, no assessment runtime code, no import of new items.
- Candidate grade/skill coverage is provisional, not evidence of the learner having studied those chapters; later UI should allow limiting **chapters already learned** with stable KNTT mapping.
- Do not read existing Micro/Practice historical attempts as independent quiz mastery. Independent diagnostic score must have fresh attempt provenance.

## Topical Practice decision (separate Draft #557)
- Default: adapt to wrong answers/weak skills plus >=30% unseen if possible, avoid last two question sets via tab-local recent-ID cache.
- Explicit `Bộ 10 câu mới`: exclusively questions never answered, short set if fewer than ten; no misleading silent re-use.
- Existing `Luyện điểm yếu` remains in same UI; no new composite topical page.
- Never leak new selection into the independent Readiness grade/report.

## Readiness source policy
- Across 21 interactive topic Readiness banks currently **237 fixed-source questions**, usually 10–18/topic. Four other topic check pages remain paper-style.
- Fixed number of prompts from each bank (only MCQ answer order shuffles); short form is a **screen**, not statistically reliable per-skill mastery evidence when each skill has one item. It may be retained as a quick check; additions require an **all-topics batch** academic review of depth, variety and grade Core coverage.
- Candidate errors corrected separately at CT17 Readiness IDs 001/002/004/006 via Draft #556; no keys/IDs changed. Existing attempt history must never be retroactively rescored, upgraded or erased.
- Do not add questions merely to reach 20/30. If independent review says current checks are adequate as quick screening and recommends no batch change, do not expand.
