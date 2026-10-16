# P0 Wave 1 — Interactive-only Practice presentation

**Date:** 2026-10-16
**Owner decision:** Prioritize Content & UX Cleanup ahead of A2 student usability testing.
**Source lock:** public Math main b6c21cbee5e3fac97c8c74f1131d562351282d9f.

## Scope and safety

- Four pilot topics CT02, CT03, CT04, CT21 only.
- Authored legacy paper Markdown in docs/kien-thuc/*/bai-tap.md remains byte-identical; the original 75 source IDs and independent NotebookLM W1/W2 audit data are still in Git.
- A narrowly scoped MkDocs build hook publishes a clean version with the original first-paint banner, ONE existing interactive Practice player and links to Shared Written Library / Readiness.
- Old paper tasks, answers, four-level headings and development instructions are absent from published learner HTML during pending classification. They are not academically deleted, retired, migrated, or regraded.
- Manifests are pinned to CT02 v4, CT03 v4, CT04 v6, CT21 v2; old MCQ, Micro, rich responses, Readiness, learner history, skills, evidence counters and backup/restore are unchanged.
- Reclassify remaining old paper items individually after matching canonical MCQ/Micro/Written, with NotebookLM gate for substantive new mathematical content.

## Acceptance

1. Exact four original Git blob SHAs checked before the Markdown hook transforms the page.
2. Every published page contains one interactive Practice marker, the same documented bank, and no legacy paper blocks.
3. 1365px desktop and 390px phone Chromium can open four topic Practice players, with working three entry links, no visible paper drawer, and unchanged localStorage when simply navigating.
4. CT22 four-level paper browser regression remains active; CT03's old paper-level UI is intentionally no longer student-facing.
5. GitHub public Math strict build + full tests PASS on exact candidate HEAD before merge. No use of private English Actions.

**Next Wave:** Student navigation + four-page Written Library; then remaining topic cleanups. A2 learner gate remains deferred. A separate design/QA decision will govern attempt-writer unification.
