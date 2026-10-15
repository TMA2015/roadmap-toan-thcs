# Math W1 Wave 3 — Owner preview evidence and source-locked QA

Date: 2026-10-15 (owner screenshot evidence in Math App chat).
PR: #461; source-lock: `docs/collaboration/math-w1-wave3-source-dedup-and-grading-20261015.md`.
Candidate source: `04-WR-03`; new immutable formative ID: `ALG04-RICH-W1-02-V1`.

## Screenshots provided by owner

1. Three fields entered `1`, `-5`, `4`: the real preview displayed **✓ Chính xác** and the correct polynomial expansion `x² − 5x + 4`.
2. Three fields entered `1`, `5`, `4`: the preview displayed **✗ Chưa đúng** with the same source-faithful worked solution.
3. Third field left blank after `1`, `-5`: the preview displayed **Em hãy nhập đầy đủ các ô trước khi chấm. Lượt này chưa được tính.** The current form remained open and submit available.

Thus the requested **three manual owner QA scenarios PASS**, corroborated by owner screenshots. This does not independently verify every backend/localStorage assertion; those are tested in automated CI.

## Findings, non-regression and release gate

- Correct exact contract `[1,-5,4]`; do not change learner mathematical source, keys or curriculum claims.
- No new algebra grader; reuse `numeric_fields` exact mathematical comparator.
- CĐ03 `03-M4-01` not imported as an extra typed variant because legacy `RAT03V1_045` substantially duplicates the numerical task.
- Owner screenshots are from an isolated preview, not `main`.
- Initial PR #461 CI failed in legacy `test-canonical-evidence-g1-browser.py` because the test's network-intercept manifest filename was still hard-coded to `04-bieu-thuc-dai-so-v3.manifest.json`, while site entry now loads v4. The test target must follow the active manifest, **without weakening event/legacy protection assertions**.
- Release gates: rerun exact-head PR CI, verify no false legacy evidence, remove temporary preview workflow before merge, and verify official GitHub Pages deploy after merging. Do not announce publication until GitHub confirms.
