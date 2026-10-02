# Skill Taxonomy v2 — I2 CT02 shadow canary owner production QA PASS

Date: 2026-10-02

## Owner QA verdict

**PASS**

The owner completed the three requested production checks on the live CT02 Practice canary.

### Check 1 — debug policy readiness

Observed in production with `?taxonomyV2Debug=1`:

- panel title: `QA · Skill Taxonomy v2 I2 Canary`
- `policy_ready: true`
- `policy_error: null`
- store key: `toan-thcs-taxonomy-v2-evidence-v1`
- before answering: `recent_events: 0`, `seen_questions: 0`, `independent_units: 0`, `last_capture: null`

Result: **PASS**

### Check 2 — non-canary question boundary

After completing question `NUM02V1_119`, the debug panel showed:

- `captured: false`
- `reason: "not_in_i2_canary"`
- `question_id: "NUM02V1_119"`

This is the expected behavior because the question is outside the 12-row I2 canary allowlist.

Result: **PASS**

### Check 3 — normal learner UI

CT02 Practice was reopened without the debug query parameter.

Observed:
- no Taxonomy v2 QA panel;
- normal learner-facing page remained unchanged.

Result: **PASS**

## Closed gate

I2 CT02 shadow observer canary has now passed:

- exact-head automated QA;
- production deploy;
- post-deploy `gh-pages` artifact verification;
- owner production QA.

I2 may be marked **DONE**.

## Still not authorized

This PASS does not by itself enable:

- mastery thresholds;
- Core Readiness credit;
- history backfill/regrade;
- learner-facing Taxonomy v2 UI;
- expansion beyond the approved canary scope.

Any I3 expansion requires a separate implementation/release authorization.
