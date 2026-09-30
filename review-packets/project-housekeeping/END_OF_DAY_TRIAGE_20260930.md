# Math project end-of-day triage — 2026-09-30

Baseline reviewed:
- main: `f5d2979164e919d56ef79b697bbe85b993c4a1ef`
- Project Context: v1.0.89 before this housekeeping update
- G2: CLOSED DONE
- learner-help disclosure toggle: CLOSED DONE after owner QA on desktop+iPad

## Triage result

### A. Real owner QA debt (4)

1. `MATH-CORE03-OWNER-QA-001` — CĐ03 standalone Core.
2. `C07-MICRO15-001` — scope migrated to current CĐ07 17-item Core owner QA.
3. `G6-T02-OWNER-UX-001` — CĐ02 Grade6 full journey/Readiness; basic card functions already accepted.
4. `MATH-UI-BATCH-A-OWNER-QA-001` — remaining CĐ21/CĐ24/CĐ25; CĐ02/CĐ23 basics already accepted.

### B. Retired stale/superseded tasks (2)

- `CONTENT-PILOT-001` → DONE / superseded by released production content pipeline.
- `GEO-BATCH-16-18-GEMINI-REVIEW-001` → DONE / retired by explicit current baseline “Không làm lại”; no independent-review PASS is implied.

### C. Valid non-blocking backlog (5)

- `BENCH-CAP-001`
- `GEO-LIB-001`
- `ALG-REVIEW-04-11-GEMINI-001`
- `GEO13-GEMINI-REVIEW-001`
- `G6-T03-SCOPE-001`

### D. Historical open PRs

Repository still contains numerous open historical PRs. Most are review/audit/provenance drafts and should not be bulk-merged. A few old implementation/design PRs are visibly superseded; optional PR hygiene can be done later after provenance references are verified.

## Resume rule for tomorrow

Clear/decide the four owner-QA debts first. Do not open G3 or new mastery/Readiness/canonical rollout automatically.
