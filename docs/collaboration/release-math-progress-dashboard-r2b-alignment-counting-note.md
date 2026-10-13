# Dashboard R2-A follow-up — aligned panels and one learner-facing attempt count

**Date:** 13/10/2026  
**Status:** `FIX_CANDIDATE / EXACT_HEAD_PUBLIC_MATH_CI_PENDING`  
**Source base:** public `TMA2015/roadmap-toan-thcs` `main` `b5cc97c42d96a5d6ec00cf69736ed779052373e3`  
**User evidence:** desktop screenshots `20261013-051141` and `20261013-051159`: the two lower panels were offset vertically; the user requested a single simpler counter instead of references to old/new counters, while explicitly noting historical attempts include synthetic deliberate mistakes.

## Observed cause and surgical UI correction

The existing `.mpd-columns` is a two-column CSS Grid with `gap:1rem` and default stretch. An unrelated global sibling rule `.mpd-panel+.mpd-panel{margin-top:1rem}` adds an extra top margin to the second grid child; it sits lower and looks mismatched. Add scoped `.mpd-columns>.mpd-panel+.mpd-panel{margin-top:0}` and `.mpd-columns>.mpd-panel{height:100%}`. Do not remove the global sibling rule from independent, vertically stacked backup panels. On narrow screens Grid uses one column and already has a gap, so this scoped rule does not collapse spacing.

The visible Dashboard uses exactly **one numerical count of cumulative answer attempts** for all Core Micro and topic Practice responses from `toan-thcs-practice-v1.questions`, including repeats. It also shows the **number of submitted Readiness assessments** as a different unit (whole tests), which must remain separate. The Core activity card is explicitly not a separate historic numerical counter. Student-facing descriptions now explain actions and units without referring to “old/new counters” or raw `Taxonomy v2` implementation labels.

## Why not replace the storage engine with “the newest counter” right now?

- `RoadmapLearnerEvidence.recordAnswer()` is used by **both** Core Micro Practice and topic Practice. Its `toan-thcs-practice-v1` cumulative question/tags store is the complete source for that visible number and is used by remediation.
- The newer `RoadmapTaxonomyV2Observer.captureAttempt()` and canonical observer are called in **topic Practice only** and have eligibility filters, evidence deduplication and bounded `recent_events`. Their unit counts measure different things and cannot truthfully replace all cumulative Core+Practice answers.
- `toan-thcs-assessment-v1` is submitted Readiness assessment data, not the same unit as a formative answer attempt; adding it produces a misleading mixed count.
- The Skill Map, remediation and safe cross-device backup support these separate domain records. Do **not** disable underlying observers, backfill, silently overwrite or drop any learner stores to simplify copy on a dashboard.
- User's many developmental/wrong-answer tests make historical totals **poor evidence of learning**, but this is not authorization to delete a device's stored history. A future opt-in clean-start path would need a specific owner review, safeguarded backup and user action; it is not part of this UI correction.

## Acceptance and evidence limits

1. At desktop width 1365px and seeded synthetic activity, the two `.mpd-columns > .mpd-panel` rectangles have equal **x-neutral widths, top position, height**, no page errors; three top activity cards stay intact.
2. At mobile width 390px after protected backup transfer, the panels are stacked in correct order with a visible gap, no horizontal overflow.
3. Student-visible copy mentions one combined answer tally for Core and Practice and a separate submitted test count; neither introduces a fictitious 'newer' total.
4. Original `Dashboard.summarize()`, `practice-v1`, `assessment-v1`, shadow observers, `local-progress-backup-v1`, restorable bytes and scoring **remain unchanged**. Node/Playwright B1/B2 and full Math PR CI must pass before merging/deploying. Zero real learner data accessed.
5. 7/30-day counts, correct grade/topic signals, streaks, A2 independent student understanding and native assistive-device checks remain separate OPEN items. No Firebase/paid AI, English private Actions or shared artifacts/cache.

**Academic rule:** pure CSS/text accessibility and metric explanation, no new mathematical teaching content; NotebookLM review is not applicable to this technical correction.
