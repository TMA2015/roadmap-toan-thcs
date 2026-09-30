# Learner-help disclosure toggle — production release receipt

Date: 2026-09-30

- Task: `MATH-HELP-DISCLOSURE-TOGGLE-001`.
- Owner approved the rule: collapse is presentation-only; a viewed hint remains viewed.
- Implementation PR: #227.
- Exact tested HEAD: `e55667c5a0db5b034e832feeef1d95334d63aa01`.
- Roadmap PR Quality run: `36719189942` — SUCCESS.
- Browser QA: desktop/mobile PASS for Practice help open/close/reopen and Core hint reveal/collapse/reopen.
- Evidence invariant: after two hints are viewed, collapse/reopen does not reduce `hints_used`; a later answer still records `hints_used >= 2` and `hinted_attempts = 1`.
- Disclosure-only actions do not create phantom attempts.
- Production merge: `fb571ec78cfaf56f82d7dd81b719481dc4296e2b`.
- Deploy MkDocs run: `36719709094` — SUCCESS.
- Semantics changed: **false**.
- Next gate: owner production spot-QA.
