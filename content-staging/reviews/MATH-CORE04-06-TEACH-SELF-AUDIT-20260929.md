# Source-locked academic self-audit — CĐ04–CĐ06 standalone Core learning cards

Date: 29 September 2026. Scope: 15 teaching copies in 3 topics, each linked to its own immutable original three formative questions. **Method: SELF_AUDITED / SOURCE_LOCKED_BOUNDED_SELF_AUDIT. This is not an independent NotebookLM review or a claim of independent academic PASS.** Owner accepted proportionate, risk-tiered review for simple foundational content; escalate if a test or real-device review exposes mathematical ambiguity.

## Locked public mathematical sources (existing authored lessons)

| Topic | Content source path | Git blob (pre-change lesson) |
|---|---|---|
| 04 | \`docs/kien-thuc/04-bieu-thuc-dai-so/index.md\`, §3.1–3.5 | \`32b349af4d4e0091d3d45c5557195f9a6c2c7d44\` |
| 05 | \`docs/kien-thuc/05-7-hang-dang-thuc/index.md\`, §3.1–3.8 and applicable examples §5 | \`476ab48a1451f38c01face72454f7874fdd8be3f\` |
| 06 | \`docs/kien-thuc/06-phan-tich-da-thuc/index.md\`, §3.1–3.7 and the listed examples/errors §5/§7 | \`9b33506c46235eec49b189c1b80a16ae261201f9\` |

The lesson source is the source of mathematical definitions and Core/Extension boundaries. Individual card \`source_sections\` and \`source_reference\` point back to these sources. Original micro question bank blobs are fixed: CĐ04 \`356e048b57389c828fa06ddbf0eb80fc8fc47226\`, CĐ05 \`5d98b632888d6064ecf592762b0479a56253e50f\`, CĐ06 \`c591e6e6467f436287647bbbf33eef8634c74c97\`. All 45 source micro questions retain their exact content, stable IDs, order, answer keys and assessed-skill tags; no migration of \`toan-thcs-practice-v1\` or readiness evidence.

## Card-level audit

| Card | Source concept and worked example checked | Math / teaching cross-check |
|---|---|---|
| alg04-core-1 | §3.1–3.3: monomial degree and polynomial degree after collecting; example \(-3x^2y\), \(P=2x^3-2x^3+4xy-1\) | Coefficient -3, degree of M 3; the cubic terms cancel so P's degree is 2, not 3. The zero polynomial has no degree under the project's school convention. |
| alg04-core-2 | §3.3/3.5: collect \(4x^2y-3xy^2-x^2y+2xy^2\) | Equals \(3x^2y-xy^2\); unlike parts cannot be combined. |
| alg04-core-3 | §3.3/3.5: subtract \((3x^2-2x+4)-(x^2+x-5)\) | Equals \(2x^2-3x+9\); each sign in the second parentheses changes. |
| alg04-core-4 | §3.3/3.5: multiply \((2x-1)(x+4)\) | Equals \(2x^2+7x-4\); all four distributive products are shown. |
| alg04-core-5 | §3.3–3.5: divide \((9x^3-6x^2+3x)/(3x)\), evaluate x=2 | For \(x\ne0\), equals \(3x^2-2x+1\), giving 9 at x=2. The original excluded value stays excluded. |
| id05-core-1 | §3.1–3.2: sum of \((2x+3)^2+(x-2)^2\) | \(5x^2+8x+13\); \(B^2\) is positive in both identities. |
| id05-core-2 | §3.3: \(9x^2-16y^2\) | \((3x-4y)(3x+4y)\), not a perfect square. |
| id05-core-3 | §3.4–3.5: \((2x-1)^3\) | \(8x^3-12x^2+6x-1\); coefficients and four signs checked. |
| id05-core-4 | §3.6–3.7: \(8x^3+125\) | \((2x+5)(4x^2-10x+25)\); note opposite sign of the middle product. |
| id05-core-5 | §3.1–3.3, §5: \((x+3)^2-(x-3)^2\) | Difference of squares gives \(6\cdot2x=12x\), equal to direct expansion. |
| fac06-core-1 | §3.3, dạng 1/2: \(6x(x-3)+9(3-x)\) | \(3(x-3)(2x-3)\); includes the essential negative sign of reversed parentheses. |
| fac06-core-2 | §3.4, dạng 3/4: \(x^3+27\) | \((x+3)(x^2-3x+9)\); distinct from \((x+3)^3\). |
| fac06-core-3 | §3.5, dạng 5: \(2ax+2ay+3bx+3by\) | \((2a+3b)(x+y)\); both grouped pairs yield the same inner parentheses. |
| fac06-core-4 | §3.7, dạng 6/7: \(x^3+2x^2-9x-18\) | \((x+2)(x^2-9)=(x+2)(x-3)(x+3)\), i.e. grouping then identity; no unreviewed quadratic middle-term split or equation solving added. |
| fac06-core-5 | §3.7, lỗi 2/7: multiply back \((x-4)(x+1)\) | \(x^2-3x-4\); the backward multiplication visibly verifies the factorization. |

## Pedagogical boundary and data invariants

- Each of the 15 copies has a key idea, a mathematically distinct worked example, step-by-step solution, characteristic error and concise recall. No worked problem repeats any of the current micro question prompt verbatim. Learning examples are not answer disclosures for the 45 original practice questions.
- Existing \`base,trap,apply\` micro order remains unchanged, and all skill IDs match each card's declared skills. Existing coverage is **11/11** in CĐ04, **12/12** in CĐ05 and **9/9** in CĐ06 as *dedicated formative opportunities*; coverage does not mean mastery. CĐ07 remains independently R2-approved and is untouched.
- The classroom/book labels in older Core cards are not silently 'corrected' without verifying per-lesson grade overlays against KNTT. A source label such as "Core" is not evidence of a particular textbook lesson number.
- CĐ06 explicitly keeps middle-term splitting and solving equations by factors out of this Core rollout. CĐ04 does not promote broader algebraic domains into its Core readiness. Entrance10/Challenge remain non-gating.
- \`SELF_AUDITED\` is explicit metadata and this record is the sole audit reference; it must not be rewritten as \`APPROVED\` under independent NotebookLM credentials. This bounded audit is academically less independent than CĐ07 R2. Errors or higher-risk developments must escalate.
- New route \`/kien-thuc/<slug>/core/\` is additive; stable old \`#core-journey\` anchors become visible gateways to the new page. Links for main lesson, Practice Room, Readiness, and previously saved question IDs remain valid.

## Automated and browser release gates

\`node scripts/test-core04-06-teaching-rollout.js\` must check source references, question-bank Git blobs, 15 complete teaching cards, inline MathJax delimiter balance, one assessed skill per original micro question, all 32 declared skill-card mappings, and numerical equality for each independently computed worked example. Existing tests for CĐ07, 25 topic routes, 6+25 chooser, dark mode, modal close/reopen, focus and no phantom scoring must continue to pass; \`mkdocs build --strict\` must pass. Browser QA checks four-step navigation, modal content on each new page, stable card geometry and no storage write on open/close. Owner's desktop/iPad/iPhone acceptance is a distinct post-deploy gate.

## Release status

Candidate only until exact PR HEAD CI and site deployment report PASS. Record the exact merge/deploy SHA in the PR after they occur. Do not imply this document itself proves the release took place.
