# Self-Learning Math — Knowledge Wave G, six remaining topics (2026-10-19)

**DRAFT — academic and visual Owner review required before release.**

## Purpose and academic provenance
Continue the 25-topic knowledge-first upgrade informed by NotebookLM R1–R6 and direct source/PDF checks. This Wave covers the last six previously unchanged topics: **CT08, CT09, CT11, CT12, CT13, CT22**. Add only worked explanations, misconceptions and conceptual bridges that improve independent learning; preserve existing equations, procedures and infographics.

## Student-facing content
- **CT08:** Optional counterexample for multiplying an inequality by a variable-sign expression; solve `x/(x−1)>1` using `1/(x−1)>0` with original restriction `x≠1`; expose why blindly multiplying by `x−1` fails.
- **CT09:** Side-by-side solve `x+y=5,2x−y=4` by substitution and elimination; both give `(3,2)`, verified in both original equations; guide method selection instead of labeling a correct longer approach as wrong.
- **CT11:** Optional nested radical `√(5+2√6)=√2+√3` from the square identity and the principal square root's sign, linked to CT05.
- **CT12:** Show that `P=0` invalidates `S/P` for sums of reciprocal roots; explicit roots `0,5` for `x²−5x=0`, with real-root precondition.
- **CT13:** Full geometry proof with named GT/KL, perpendicular and parallel hypotheses and explicit corresponding-angle justification; subsection remains within the current H2 accordion structure.
- **CT22:** Optional Grade-10 population variance/standard-deviation concept using two samples with identical mean 6 but variances 1 and 4; distinguish `n` (whole described dataset) from unrelated `n−1` sample estimator.

## Safety and source integrity
- Only six teaching `index.md` files and scoped test integrations are changed.
- New test `scripts/test-math-knowledge-depth-wave-g-20261019.js` pins each full new Git blob SHA and reconstructs the exact pre-wave SHA; checks the math and disallows new H2.
- The historical locks in `test-core08-12-teaching-rollout.js`, `test-core13-15-geometry-rollout.js` (including CT13 approved heading-depth restoration) and `test-kntt-dimension-coverage-g9-v1.js` (CT12) are retained rather than repinned.
- Technical integration note: Wave G's Grade-9 source gate and Knowledge UI gate overlap with already-CI-green combined Draft PR #533. A combined A–G branch must preserve CT12, CT21, CT23 locks and both independent testing hooks.
- No new Core objective, Practice item, Skill/Readiness writer, history migration or claimed exam-frequency evidence.
- No merge, release or deployment until explicit Owner approval.

## Owner academic/visual checklist
- [ ] Verify CT08 rational inequality solution and rationale for sign reversal.
- [ ] Verify CT09 both algorithms and all original-equation checks.
- [ ] Confirm CT11 positive root logic and optional classification.
- [ ] Confirm CT12 Viète (P\ne0) requirement and zero-root counterexample.
- [ ] Confirm CT13 proof is logically self-contained and its section is within the correct accordion.
- [ ] Confirm CT22 statistics meaning and n-versus-n−1 separation.
- [ ] Inspect MathJax and tables on desktop and iPad/mobile; run entire PR CI.
