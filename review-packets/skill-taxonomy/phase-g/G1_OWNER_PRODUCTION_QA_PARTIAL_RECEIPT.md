# Phase G1 — owner production QA partial receipt

Date: 2026-09-30

Owner-supplied production screenshots confirm:
- CĐ07 normal Practice works on the live site.
- One 10-question session completed at 9/10.
- `canonicalDebug=1` reveals the QA panel; normal learner flow itself is unchanged.
- `policy_ready=true`, `policy_error=null`.
- Active production store is `toan-thcs-canonical-evidence-v2`.

The sampled questions did not include an exact G1 policy item. Observed debug state:
- `recent_events=0`
- `seen_questions=0`
- `independent_units=0`
- `last_capture.captured=false`
- `last_capture.reason=not_in_g1_policy`
- `last_capture.question_id=RAT07V1_089`

Decision: **PARTIAL PASS ONLY**. Do not mark owner production QA complete. Final required evidence is at least one production `captured:true` event on an exact G1 question with v2 counters increasing. G2/G3 remain unauthorized.
