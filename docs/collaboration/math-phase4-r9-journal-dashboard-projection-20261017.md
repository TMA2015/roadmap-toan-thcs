# Math Phase 4 R9 — Read-only Unified Dashboard Projection (V2 Journal)

**Status:** QA-ONLY CANDIDATE / NOT STUDENT-FACING · 2026-10-17

## Goal

The current learner dashboard still reads several legacy localStorage aggregates. R1 proved the old sources cannot be safely summed or replayed as chronological independent events; R6 established a durable new-event journal. Before any real switch, R9 provides a **pure projection** of the new journal into meaningful, disjoint counters, without inventing history, adding Readiness credit from Written self-checks or altering source grades.

## Exact source contract

`scripts/prototypes/math-v2-journal-dashboard-projection-r9.js` consumes only the caller-provided immutable `math-evidence-event-v2` records scoped to one opaque learner ID. It has **no localStorage, IndexedDB, network or UI access**. The caller explicitly reads the R6 journal and passes events to `project(...,{learner_scope})`.

- `answer_attempt`: count FORMATIVE answers, correct answers and assisted attempts; never interpret as a submitted independent assessment.
- `readiness_submission`: count INDEPENDENT_ASSESSMENT submissions. Optional `result:{correct,answered,total,readiness_state}` is **reported by the original authoritative assessment source**, not regraded or extrapolated.
- A readiness submission without `result` has `score_status=UNAVAILABLE`, `correct=null`, `total=null`, and contributes to **unscored submissions**, not a fabricated zero.
- `written_self_check`: count SELF_REPORTED checks, `automatic_readiness_credit=0`.
- `remediation_action`, `exam_submission`: separate counters.
- Optional `topic_id=CTxx` enables per-topic reporting. An absent topic remains **unassigned** rather than inferred from a question ID.
- Duplicate identical IDs collapse to one event; a conflicting ID or mismatched learner scope rejects the projection. Latest Readiness is determined by the original `occurred_at` timestamp with deterministic ID tie-break; it is not affected by record reading order.
- Historical localStorage data is not read or replayed. No old score is silently corrected.

## Regression gates

`scripts/test-math-v2-journal-dashboard-projection-r9.js` checks source immutability, cross-lane rejection, source-reported score vs unknown score, duplicate ID, wrong learner scope and out-of-order events.

`scripts/test-math-v2-journal-dashboard-r9-browser.py` injects R6 and R9 into disposable desktop and 390px browser contexts, writes test-only events into QA IndexedDB, validates separate results and confirms identical projection after reload. A localStorage sentinel must remain unchanged.

## Limitations before learner use

R9 is not yet a dashboard replacement, learner account, data migration, or scoring algorithm. Existing student pages and backup/restore remain unchanged. An official cutover requires a learner-facing R8 journal-first submission protocol, real-world event IDs stable across retries, a durable readiness result payload and a tested backup/restore of the final journal on PC/iPad. Owner priority allows archiving un-replayable legacy totals and starting new metrics at a clearly labeled boundary.

**Green CI validates engineering fixtures, not production activation.**