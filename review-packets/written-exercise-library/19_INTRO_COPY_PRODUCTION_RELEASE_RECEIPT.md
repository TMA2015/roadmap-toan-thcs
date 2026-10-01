# Written Library durable intro-copy refresh — production receipt

Date: 2026-10-01

Task: `MATH-WRITTEN-LIBRARY-INTRO-COPY-001`

Owner observation:
- B2 production content was correct;
- library intro was stale because it still said `Pilot v1`, `6 bài`, and listed only CĐ07/CĐ14/CĐ24.

Released behavior:
- no fixed pilot label;
- no fixed exercise count;
- no fixed topic list;
- paper-first workflow retained;
- learners are directed to live filters for current coverage;
- B2 batch metadata reconciled to `PUBLISHED`.

Technical gate:
- PR #244;
- exact tested HEAD: `3f459683f8fe1bff52c1f32eb645e3b24a792b89`;
- Roadmap PR Quality `36869043055`: **SUCCESS**;
- merge: `aa813c19fab105c5e0f3ef12a982f98406fac5de`;
- Deploy MkDocs `36869588454`: **SUCCESS**.

Boundaries:
- no academic exercise content changed;
- no learner data changed;
- no Readiness/mastery change;
- no canonical-evidence/G3 change.

Owner production spot-QA remains pending.
