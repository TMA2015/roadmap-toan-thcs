# Skill Taxonomy v2 — I3A full CT02 shadow owner production QA PASS

Date: 2026-10-02

## Owner QA verdict

**PASS**

The owner completed the requested production checks on the live I3A full-CT02 shadow rollout.

### Check 1 — policy readiness

Observed in production with `?taxonomyV2Debug=1`:

- panel title: `QA · Skill Taxonomy v2 I3A CT02 Shadow`
- build: `taxonomy-v2-i3a-full-ct02-20261002`
- `policy_ready: true`
- `policy_error: null`
- store key: `toan-thcs-taxonomy-v2-evidence-v1`
- before answering: `recent_events: 0`, `seen_questions: 0`, `independent_units: 0`, `last_capture: null`

Result: **PASS**

### Check 2 — active full-CT02 capture

After completing CT02 Practice questions, production showed:

- `recent_events: 8`
- `seen_questions: 8`
- `independent_units: 7`
- last capture:
  - `captured: true`
  - `question_id: "NUM02V1_100"`
  - `family_id: "NUM-FRACTION-OPS"`
  - `diagnostic_skill_id: "phep-tinh-phan-so"`
  - `independent_evidence: true`
  - `independent_reason: "first_unseen_unit"`

The 8 seen questions / 7 independent units observation is consistent with active de-duplication rather than naive one-attempt-one-unit counting.

Result: **PASS**

### Check 3 — normal learner UI

CT02 Practice was reopened without the debug query parameter.

Observed:
- no Taxonomy v2 QA panel;
- normal learner-facing Practice UI remained unchanged.

Result: **PASS**

## Closed gate

I3A full CT02 shadow capture has now passed:

- exact-head automated QA;
- production deploy;
- post-deploy `gh-pages` artifact verification;
- owner production QA.

I3A may be marked **DONE**.

## Still not authorized

This PASS does not by itself enable:

- CT03+ capture;
- mastery thresholds;
- Core Readiness credit;
- history backfill/regrade;
- learner-facing Taxonomy v2 UI.

The next bounded rollout is **I3B — CT03 shadow expansion**, pending separate authorization.
