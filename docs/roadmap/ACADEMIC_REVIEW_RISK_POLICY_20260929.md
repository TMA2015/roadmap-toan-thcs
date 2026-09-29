# Academic review triage — proportional evidence, not a blanket NotebookLM gate

**Decision date:** 29 September 2026. **Status:** owner-approved review practice; does not override the Master Plan's accuracy, source, Core/Support, evidence or release safeguards.

## Three levels

- **Low risk / self-audit:** spelling, phrasing, unambiguous simple identities, a few standalone basic practice items and rendering fixes. The author may review and approve without sending each item to NotebookLM, provided source/skill scope, exact answer uniqueness, plausible distractors, conditions, age appropriateness and original learner-data invariants are checked. Keep file/ID-level notes and relevant automated tests. Self-audit is not independent review.
- **Medium risk / bounded batch:** a cluster of items, new assessed-skill coverage, changing existing mappings, item counts, cross-path canonical reuse, hints/evidence or Core status. Require a source-locked inventory, structured self-audit, regression tests, and independent spot checks where there is meaningful uncertainty. Batch independent review by topic rather than per item.
- **High risk / independent academic audit:** unfamiliar or contested concepts, substantive solution/key changes, complex transformations, proof/diagram geometry, exam/readiness scoring, changing assessment semantics, missing domains/extraneous roots, or novel/risky curriculum mapping. Seek independent review before approval. A CI success is never math approval.

**Escalate by actual downstream impact, not just elementary-looking arithmetic.** No silent ID reuse, duplication, altered answer semantics, fabricated coverage or progress, or unsupported claim of mastery. Do not merge draft work without its stated gates.

## CĐ07 concrete case: two proposed canonical Practice Room items

- \`RAT07V1_025\`: mathematically correct. On \(x\ne2\), \(\frac{x+1}{x-2}=\frac{2x+2}{2x-4}\); index 0 is uniquely correct under the prompt. It directly targets equality of rational expressions.
- \`RAT07V1_039\`: mathematically correct factorization \(x^2-9=(x-3)(x+3)\), but it asks only for one isolated polynomial factorization. It is a useful introductory check; **one such response does not independently evidence the whole 'factor numerator and denominator' skill**. Do not relabel it as complete 3/3 coverage merely to clear the card warning.
- **Technical boundary:** \`RAT07V1_025\` currently lists two values under \`tags.skill\`. The shared \`learner-evidence-v1.js\` counts every value, while the Core coverage UI counts only the first/primary. Direct cross-path reuse of this ID without first defining and testing canonical assessed-skill/supporting-skill behavior could misrepresent skill evidence. This is medium-risk, not a trivial content paste.
- **Decision:** do not merge PR #163's original unqualified proposal or silently inject these two references. The simple algebra is resolved by bounded self-audit, so an individual NotebookLM round is unnecessary. Implement separate, source-checked Core coverage items or a properly designed canonical overlay in a focused follow-up; retain the three existing Base→Trap→Apply questions, make any extra questions explicitly labelled, preserve original IDs and backward-compatible records, run strict/full browser QA. For the second gap, include a question genuinely requiring factorization of **both numerator and denominator**. Coverage means 'at least one dedicated formative item', not proof of mastery.

## Minimal review record per small batch

Record: item/skill IDs and exact source version, checks of mathematics and domain, unique answer, why each distractor fails, intended assessed skill (supporting skills separately), whether a reviewed example gives away the answer, impact on evidence/old attempts, test results, and release status. Escalate uncertainties instead of certifying by confidence alone.
