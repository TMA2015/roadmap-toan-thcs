# Self-Learning Math — Knowledge Navigation Wave D (2026-10-19)

Status: **DRAFT — Owner academic and learner UI acceptance required**.

## Purpose
Increase the effectiveness of the existing knowledge pages as an **independent learning and lookup resource**, after 25-topic NotebookLM R1–R6 review. This is not an assessment, readiness, exam frequency, or skill graph project.

## Changes to knowledge pages
1. **CT01 — section 3.8A:** add a six-row reverse lookup guide from a concrete learning difficulty to the topic that teaches that operation, with prerequisites only if the learner remains stuck. Add a rational-expression example retaining the original domain after cancellation.
2. **CT25 — section 3.5A:** add a seven-row "first wrong solution step → teaching topic" lookup with working relative links. A sample error log walks through the zero-intercept graph case `y=2x`, diagnosis, repair with two distinct points, and delayed self-check with `y=-3x`.

## Teaching intent and limits
- Keep the existing knowledge map, prerequisites, error log, learning stage guidance and all major sections. **No duplicate generic roadmap**.
- Every source link is a current `docs/kien-thuc/XX-*/index.md` target. Cited situations are **illustrative**, not measured Entrance10 question frequencies.
- These are learner prompts, not automatic learner diagnoses or prescriptive learning order.
- No change to learner progress, assessment, Core, Practice, Skill, Readiness, or exam datasets.

## QA and source protection
- Added `scripts/test-math-knowledge-navigation-wave-d-20261019.js`, integrated into existing CI knowledge UI check.
- The gate pins each modified full source blob, reconstructs the exact historical `main` blob from the bounded insertion and verifies it, checks every relative topic link and keeps H2 accordion boundaries.
- Original SHA locks: CT01 `fd8797b765c10d974c3491e84ee40dafbd0fcb7f`; CT25 `eaf0c907c9420e146ddde1a3c93c1552d89b9ecf`.

## Owner acceptance
- [ ] Check both knowledge pages on desktop/mobile; especially three-column lookup tables.
- [ ] Follow link from a failure to its target explanation, then a prerequisite, then return to the original problem.
- [ ] Confirm rational-expression domain and line-graph zero-intercept worked examples are understandable.
- [ ] Ensure academic claim boundaries are clear: no invented local-exam frequencies.
- [ ] Verify Math CI, built topic navigation, topic accordion behavior and all source locks.

**This draft PR must not be merged or deployed until explicitly authorized.**