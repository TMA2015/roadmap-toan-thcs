# CĐ08–12 source-locked academic and learner-evidence audit

Date: 2026-09-29. Academic method: **SELF_AUDITED / SOURCE_LOCKED_BOUNDED_SELF_AUDIT**. This is **not an independent NotebookLM review or an independent academic PASS**. Escalate multi-step ambiguities and uncovered mathematical conflicts. The existing prior independent source review and the actual live lesson are source of truth, not this document. User approved proportionate risk-based review for simple foundational items.

## Scope and immutable source provenance

Five established topic pages (the 25-spine pages, not a grade-fragmented duplicate), five cards each. Original source lesson Git blobs before this rollout:

| Topic | Source | Original lesson Git blob | Original 15-question micro bank Git blob |
|---|---|---|---|
| 08 | \`docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md\` | \`15efa3e8f772c7648bf0ea2d734110c6bbc83d31\` | \`6b226a417d0bb2d6498b74d9206b85c942499a54\` |
| 09 | \`docs/kien-thuc/09-he-phuong-trinh/index.md\` | \`7fdcd7368f4e0a31ab6c784e21b500597f3684eb\` | \`39b7154b7da71b818a367fdfe1d869caaa1bbfbd\` |
| 10 | \`docs/kien-thuc/10-ham-so-do-thi/index.md\` | \`bbba2357371803f641410ad8b5cf61980d7c3081\` | \`5ed48b26af58f0104d18b2a1d04210773fb38434\` |
| 11 | \`docs/kien-thuc/11-can-thuc/index.md\` | \`244f6f4267614cb3624a34928507431e3c8e5383\` | \`daa537d24635cb525f04b3b809022f40e2821dc9\` |
| 12 | \`docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md\` | \`93e05718230c48900129a5042e0537aeb8e3c398\` | \`925a9e487fd15803ba462a9639aff2c0973f3267\` |

**Every one of the original 75 micro question records remains byte-equivalent in JSON**: all IDs, ordering, question/card relationships, answer keys, skill tags, signals, hints, context, evidence and difficulty are retained. Only four new IDs are appended; \`question_count\` is reconciled with the resulting bank. Existing \`toan-thcs-practice-v1\` and readiness evidence stores are not migrated or altered. Each lecture's \`source_question_ids\` points to the original three items, not to newly appended coverage items.

The new 25 lectures each contain five fields (core idea, worked problem, step-by-step solution, misconception, recall) plus the exact source path and section locators. The problem is not an exact old micro question prompt. Existing approved CĐ07 lectures, CĐ04–06 lectures and all main topic knowledge pages remain untouched. No auto grade/readiness score is assigned for merely opening a card.

## Source-grounded self-audit of all 25 worked examples

| Card | Source section | Independent mathematical check |
|---|---|---|
| eq08-core-1 | §3.1 and §5 example 1 | \(2(x+1)+3=3x-1\Rightarrow x=6\); both sides =17. |
| eq08-core-2 | §3.2–3.3 | \((x^2-4)/(x-2)=0\); \(x\ne2\). \(x^2-4=0\) gives \(\pm2\), only \(-2\) remains. |
| eq08-core-3 | §3.4 | \(-4x+5\le13\Rightarrow x\ge-2\); negative divisor reverses sign. |
| eq08-core-4 | §3.4/trục số | \(-3x+2\ge8\Rightarrow x\le-2\); filled boundary and shade left. |
| eq08-core-5 | §5 application | 8 tickets: \(50x+30(8-x)=340\Rightarrow x=5\), 3 child tickets; integer/nonnegative. |
| sys09-core-1 | §3.1–3.3/3.5 | \((3,1)\) satisfies \(x+y=4,2x-y=5\); unique solution. |
| sys09-core-2 | §3.4 and dạng 2 | \(x+y=7,2x-y=2\Rightarrow (3,4)\). |
| sys09-core-3 | §3.3A/3.4 | \(2x+3y=12,4x-3y=6\Rightarrow(3,2)\). |
| sys09-core-4 | §3.3/3.4/3.5 | \(y=3x-1,x+y=7\Rightarrow(2,5)\). |
| sys09-core-5 | §5 dạng 8 | \(x+y=50,3x+y=90\Rightarrow x=20,y=30\) products/hour, positive. |
| fun10-core-1 | §3.1–3.2 | \(f(x)=-x+4\) gives \(f(-2)=6,f(0)=4,f(2)=2\). |
| fun10-core-2 | §3.3–3.4 | \(A(-1,5)\) lies on \(y=-2x+3\). |
| fun10-core-3 | §3.5 | \(y=-3x+6\): slope -3, axis intercepts \((0,6),(2,0)\). |
| fun10-core-4 | §3.5 and dạng 4/6 | \(y=-x+2\): distinct points \((0,2),(2,0)\), strictly decreasing. |
| fun10-core-5 | §3.8 | **Only** \(y=-2x^2\): values at ±2 = -8 and at 0 = 0; symmetry \(Oy\), downward opening; never generalize to \(ax^2+bx+c\). |
| rad11-core-1 | §3.1–3.3 | \(E=\sqrt{(x-5)^2}+\sqrt{3x-6}\); domain \(x\ge2\), \(E(2)=3\), absolute value retained. |
| rad11-core-2 | §3.4–3.5 | \(\sqrt{32}=4\sqrt2\), \(\sqrt{98}/\sqrt2=7\). |
| rad11-core-3 | §3.6–3.7 | \(\sqrt{32x^2}=4|x|\sqrt2\); at \(x=-3\), \(12\sqrt2\); \(-2\sqrt7=-\sqrt{28}\). |
| rad11-core-4 | §5 dạng 3–6 | \(\sqrt{18}+\sqrt8=5\sqrt2\); \(3/\sqrt5=3\sqrt5/5\); \(1/(\sqrt3+1)=(\sqrt3-1)/2\). |
| rad11-core-5 | §3.8 | \(\sqrt[3]{-125}=-5\), \(\sqrt[3]{(x-1)^3}=x-1\) without absolute value. |
| qua12-core-1 | §3.1 | \(2x(x-1)=5-x\Rightarrow2x^2-x-5=0\), coefficients \(2,-1,-5\). |
| qua12-core-2 | §3.2/3.4 | \(2x^2-4x+2=0\): \(\Delta=\Delta'=0\), repeated root 1. |
| qua12-core-3 | §3.3/§5 dạng 1 | \(x^2-4x-5=0\): \(\Delta=36\), roots \(5,-1\). |
| qua12-core-4 | §5 dạng 2 | \(2x^2-7x+3=(2x-1)(x-3)\), roots \(1/2,3\). |
| qua12-core-5 | §5 dạng 4/8 | \(2x^2-5x+2=0:\Delta=9,S=5/2,P=1\). Roots \(-2,5\) produce \(x^2-3x-10=0\). |

## Four new precisely assessed items — not substitutions

1. \`EQ08MICRO_016\` → \`eq08-core-2\`, assessed only \`khu-mau-phuong-trinh\`. In \(2/(x-3)=x/(x-3)+1\), \(x\ne3\), multiply **both entire sides** by \(x-3\): \(2=x+(x-3)\), with valid solution \(x=5/2\). Three distractors omit the multiplication of 1, multiply only one side, or replace \(x-3\) by \(x+3\). Support tags do not receive score.
2. \`SYS09MICRO_016\` → \`sys09-core-1\`, assessed \`so-nghiem-he\`. \(x+2y=5,\;3x+6y=15\) are the same line (second is three times the first): infinitely many solutions, not one/none/two. Distinct from original Core4 item about distinct parallel lines.
3. \`SYS09MICRO_017\` → \`sys09-core-5\`, assessed \`nang-suat-he\`. 3 hours each gives \(3x+3y=180\); A 1 hour/B 2 hours gives \(x+2y=100\), unique positive solution \((20,40)\) items/hour. Distractors misread work hours. No exam layer promotion.
4. \`RAD11MICRO_016\` → \`rad11-core-4\`, assessed \`truc-can-mau-don\). \(2/\sqrt7=2\sqrt7/7\) by multiplying both numerator and denominator; distractors omit square root, reverse quotient or omit 2. Denominator positive.

All four are new unique IDs, four distinct answers, correct answer index 0, two scaffold hints, immediate post-answer explanation, singleton \`tags.skill\`; original Base–Trap–Apply order is retained and extra item uses the role \`coverage\`. Adding an opportunity is **not mastery**.

**CĐ09 pre-existing metadata discrepancy:** Original \`SYS09MICRO_012\`, already in \`sys09-core-4\`, assesses \`so-nghiem-he\` but the containing card had not declared this skill. The card's declared skill list now includes it. Its original question record (ID, card, prompt, answer and attempts) and all original three lecture source IDs are unchanged. Repeated coverage of the same skill in Core1 and Core4 is a deliberately different learning context, not two scored skills on one answer.

## Scope and release gates

- CĐ08: Core equation, denominator condition, inequality and setup; parameter/giao tập/lập BPT extension stays non-gating.
- CĐ09: system interpretation, solve, check, everyday linear system applications; parameter/complex tasks extension non-gating.
- CĐ10: \(y=ax^2\) treated as Grade 9 Core overlay while explicit extended topics involving two-line position/intersections are not silently pulled into Core.
- CĐ11: simple denominator rationalization is Core; radical equations and integer-value/parameter tasks remain extension.
- CĐ12: Δ/Δ', solution formula, elementary Vieta and constructing quadratic from roots are Core; advanced symmetric expressions/parameter signs and general quadratic graph stay separate.
- Independent JS numerical oracles + source excerpts, unique options and single assessed tags, frozen original 15-question bank record snapshots, 25/25 lecture fields, 4/4 new items, route and mobile modal/no-phantom-evidence tests, strict MkDocs build, Pages deployment and published-gh-pages smoke check are required.
- Real desktop/iPhone/iPad owner QA is a distinct post-release gate.

Status: **candidate until PR checks and deployment explicitly PASS**. No claim that this document proves independent academic certification.
