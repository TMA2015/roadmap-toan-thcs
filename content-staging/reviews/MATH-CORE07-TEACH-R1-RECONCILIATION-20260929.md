# Reconciliation — CĐ07 teaching R1 → R2 (29/09/2026)

**Status:** R1 corrections integrated as candidate only. Await independent R2 confirmation. Do not merge/deploy as approved teaching.

## Evidence and scope

- R1 review supplied by owner: \`MATH-CORE07-TEACH-R1-20260929\`. Overall: \`REVISIONS_REQUIRED\`; pt07-core-1, -3 and -5 require revision; -2 and -4 passed.
- Source-locked R1 packet: \`content-staging/reviews/MATH-CORE07-TEACH-R1-20260929.json\`.
- Corrected candidate: \`docs/assets/data/curriculum/topic07-learning-workspace.json\` on \`content/core07-five-teaching-copies-review-r1-20260929\`.
- No edits to \`docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json\`, item IDs, answer keys, skills, learner evidence, question difficulty or the source academic lesson.
- A PASS of a technical workflow is **not** academic approval.

## Change log by stable ID

| Card | R1 | Exact fields changed | Resolution |
|---|---|---|---|
| pt07-core-1 | REVISE | \`teaching_copy.key_idea\` | Define numerator/denominator and polynomial-as-fraction; add \(B\ne0\), \(D\ne0\), and equality test \(AD=BC\) on common domain. Worked example unchanged. |
| pt07-core-2 | PASS | \`teaching_copy.key_idea\` | Optional clarity only: explicitly show the two sign-change identities with nonzero denominators. Example, solution and question links unchanged. |
| pt07-core-3 | REVISE | \`teaching_copy.key_idea\`, \`teaching_copy.worked_example.solution\` | Define MTC and multiplier = MTC ÷ old denominator; expand both intermediate numerator/denominator multiplications. Preserve exclusions \(x\ne0,2,-2\). |
| pt07-core-4 | PASS | None (except review metadata) | Preserve original teaching content. |
| pt07-core-5 | REVISE | \`teaching_copy.key_idea\`, \`teaching_copy.worked_example.solution\` | Replace incorrect “phân thức bị chia” with “phân thức chia/số chia” at the divisor \(C/D\); require both \(D\ne0\) and \(C\ne0\). Example retains \(x\ne0,-1\). |

All five candidate cards have \`review_status=R1_REVISED_AWAITING_R2\`. Do not set \`APPROVED\` or insert an academic approval reference until a source-grounded R2 PASS specifically addresses the revisions.

## Release gate

\`node scripts/test-core07-teaching-coverage.js --release\` must reject all unapproved teaching candidates. Normal static checks may pass while mathematical review remains pending. After an R2 response, reconcile each item, check mathematical typesetting on real devices and rerun the 75-route regression suite before any production release.

## R2 requested outcome

Per card: \`CONFIRMED\` or \`REVISIONS_REQUIRED\`, with exact field, mathematical or pedagogical issue, and replacement text. Verify no answer IDs, answer keys, skill IDs or learner evidence changed. R2 should focus on three required fixes, but also confirm two previously passing cards were not degraded. No invented external source citations.
