# W1 Wave 2 — Owner preview QA receipt (2026-10-15)

Source-locked PR: #459; reviewed source items `02-G6-WR-03` and `03-M3-01`.

Owner supplied two actual preview screenshots and explicitly wrote **"pass"** in Math App chat on 2026-10-15.

- CĐ02 screenshot: question 2/2, input `11/30`, response **✓ Chính xác**, correct explanation `25/30 − 14/30 = 11/30`.
- CĐ03 screenshot: question 2/2, input `3600` into a numeric km answer field, response **✗ Chưa đúng**, correct explanation `360000 cm = 3600 m = 3,6 km`.
- Both screenshots show proper post-submit feedback and next action.
- Source task and parser also had an exact test for `3,6`, `3.6`, `36/10`; **owner screenshots do not independently show the correct 3,6 submission**. Distinguish source-based automated tests from screenshot evidence.
- Owner acceptance: **PASS — two-item wave preview** (owner-provided). It does not imply unreviewed legacy items or Core Readiness are authorized.

During visual QA the author identified nonblocking localization/label issues: `application` metadata displayed untranslated on CĐ03, and a generic rational input on CĐ02 incorrectly read `Giá trị của x`. Corrected on PR #459 by a mapped difficulty label and optional `answer_contract.field_label` (`Kết quả`, `Khoảng cách thực tế (km)`); these changes require exact-head CI before merging.

Release conditions: final CI PASS on amended PR head; no changes to historic question IDs, earlier MCQs, assessment; merge only then; verify GitHub Pages deploy and active v4 documents.