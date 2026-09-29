# CĐ07 Core — bounded self-audit of two additional formative questions

Date: 29 September 2026. Review method: owner-approved **low-content-risk, bounded self-audit**. This is **not** an independent NotebookLM review and should never be represented as one. Status: reviewed candidate; release requires automated academic/schema checks, strict build, browser QA, and owner post-release Safari acceptance.

## Scope and immutable provenance

- Five approved Core lectures and all R2 approval metadata are unchanged. R2 teaching packet remains source-locked to its original first three question IDs per card.
- Original 15 questions in \`RAT07-MICRO-V1\` remain unchanged, in the same order and with the same IDs, prompts, options, keys, explanations, hints, skills and learner-evidence semantics. Original source blob: \`077d3e46a345343cf9219c7f46fa6b56a38d3b42\`.
- New IDs: \`RAT07MICRO_016\` under \`pt07-core-1\` and \`RAT07MICRO_017\` under \`pt07-core-2\`; appended to both the bank and respective card mapping, never substituted for the first three Base→Trap→Apply items.
- Bank ID and original localStorage/evidence keys are preserved. Answer submission remains the only act that records an attempt. Both new questions have one assessed \`tags.skill\` each; \`supporting_skills\` is contextual, not a second scored skill.
- The old Practice Room \`RAT07V1_025\` and \`RAT07V1_039\` remain untouched, unlinked and unmodified. These new examples are not clones of either canonical item.
- Source of the mathematical principles: CĐ07 full lesson §3 and existing R2-approved Core1/2 teaching. Assessment target: foundational Grade 8 KNTT Core. No Entrance10/Challenge gates or readiness score.

## RAT07MICRO_016 — two rational expressions equal on their common domain

Question: Compare \(\frac{x^2-4}{x-2}\) and \(x+2\). Four choices assert equality for \(x\ne2\), equality for all real values including 2, equality only at 0, or inequality for every allowed value.

- **Exact mathematics:** \(x^2-4=(x-2)(x+2)\). For \(x\ne2\), \(\frac{(x-2)(x+2)}{x-2}=x+2\). At \(x=2\), the original fraction is undefined; the polynomial \(x+2\) is defined. Thus only option index 0 is true.
- **Distractors:** option 1 incorrectly restores an excluded domain value; option 2 falsely says equality holds only at \(x=0\), refuted for example by \(x=1\); option 3 falsely denies equality on the admissible domain.
- **Primary skill:** \`hai-phan-thuc-bang-nhau\`. \`dieu-kien-xac-dinh\` is explicitly supporting only. Unlike existing \`RAT07MICRO_003\`, this question actually compares two expressions. Unlike proposed reuse of \`RAT07V1_025\`, it uses a difference-of-squares factorization rather than a doubled numerator/denominator. No canonical duplicate ID or double-tag evidence.
- **Hint ladder:** first check denominator and factor numerator, then recall difference-of-squares while retaining exclusions. The hints do not state the final selected choice. Explanation is shown after answer.
- **Limits:** one formative item is coverage, not demonstrated mastery of equality of rational expressions.

## RAT07MICRO_017 — independently factor both numerator and denominator

Question: Factor \(P=\frac{x^2-25}{x^2+10x+25}\) in preparation for simplification.

- **Exact mathematics:** \(x^2-25=(x-5)(x+5)\); \(x^2+10x+25=(x+5)^2\); domain \(x\ne-5\). Correct choice index 0 is \(\frac{(x-5)(x+5)}{(x+5)^2}\).
- **Distractors:** option 1 misidentifies the numerator as a square, e.g. at \(x=0\) gives \(+25\) rather than \(-25\); option 2 changes the sign of the denominator middle term, e.g. \(x=2\): \((x-5)^2=9\ne49\); option 3 has not factored the numerator and incorrectly lowers the denominator's square to a first power.
- **Primary skill:** \`phan-tich-tu-mau\`, not merely a supporting tag inside a rút gọn exercise. A dedicated question explicitly requires **both** factorizations. Does not repeat the specific \(x^2-9\) canonical factorization or the R2 lecture's \(x^2-16\) worked example.
- **Hint ladder:** identify an identity on each part, then focus on the \(10x\) middle term to distinguish the sign of the square. No option is disclosed before answering.
- **Limits:** one formative item does not establish mastery of all factoring methods.

## Technical/academic checks before release

1. Assert all first 15 records are JSON-deep-equal to the locked 15-item snapshot in the R1 teaching packet; IDs and answers must not change.
2. Assert new IDs unique and isolated, four unique choices, exactly one assessed tag, two hints, explanations and target skill declared on card; the new \`coverage\` role appears only **after** the three original roles.
3. Independently calculate algebraic identities and counterexamples across allowed sample values; verify excluded domain points.
4. Assert 17 total questions and 11/11 unique *declared* Core skills have at least one dedicated formative item; separately preserve the honest 'not mastery' wording.
5. Assert \`learner-evidence-v1.js\` still records only from answer submission; no historical question ID/counter migration or manipulation.
6. Exercise both modals, navigation through new Q4/4, localStorage unaffected on open/close, and recording of exactly the intended single primary skill upon answering a new item. Test desktop, tablet, phone and dark mode.
7. Run existing question-bank, Core R2 provenance, Golden Template, route and strict-site build checks.

### Review decision

These two items are low-risk **mathematically**, but their effect on skill coverage and learner evidence is tested at medium technical rigor. The old proposed direct cross-path reuse in PR #163 is not merged. Independent NotebookLM is not required for this bounded correction; escalate if any math/answer ambiguity, schema incompatibility or evidence change emerges.
