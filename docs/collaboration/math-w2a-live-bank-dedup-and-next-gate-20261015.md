# W2A live-bank audit — 2026-10-15

Review receipt: owner submitted NotebookLM `MATH-EXERCISE-RECLASSIFY-W2A-20261015`: 12/12 academic PASS; deployment pending independent bank and grader gates. Repository base SHA: `ea002b9e1f12f0c7062532296d526cbd0810334b`.

| Source ID | Confirmed current-bank references | Dedup/release decision |
|---|---|---|
| 02-M2-02 | NUM02V1_047, NUM02V1_055 | Same 84/126 GCD & LCM split across two MCQs; no new coverage |
| 02-M3-02 | NUM02V1_109 | Identical water-tank task; do not clone |
| 02-M4-02 | NUM02V1_099 | Identical successive 15%/10% discounts; do not clone |
| 03-M2-03 | RAT03V1_076, WX03-RAT-002 | Same 4 people, 15 days, 6 people; canonical Written includes complete reasoning; reuse |
| 03-M4-02 | RAT03V1_108 | Identical 180 km/60 kmh/30 minutes task; do not clone |
| 03-M4-03 | NUM02V1_100 | Same percent-change scenario; retain written proof, not answer-only |
| 04-WR-06 | ALG04V2_071, WX04-ALG-003 | Related multiplication family, different expressions. Candidate 3-field 2, -5, -3 after global collision check |
| 04-WR-07 | ALG04V2_123 | Same division expression; MCQ adds missing source-domain condition xy != 0; no copy |
| 04-ENT-01 | ALG04V2_111 | Same rectangle perimeter; area not covered by this MCQ. Written stays; symbolic-input contract not cleared |
| 21-M2-07 | STA21V1_031 | Same library-club sampling scenario; preserve full written bias explanation |
| 21-M3-08 | STA21V1_021 | Same 50 vs 48 frequencies scenario; preserve multistep written investigation |
| 21-M4-05 | STA21V1_021, STA21V1_022 | Related total and mixed-unit checks; preserve integrated written rationale |

Evidence classes distinguish exact same mathematical task from same scenario with deeper reasoning. The existing bank does not itself grant KNTT curriculum authority.

The reproducible `scripts/audit-math-w2a-live-bank-r1.js` reads the latest manifest for all 25 topics, additional Micro banks and 63 canonical Written items. It does not modify learner data. Verify this audit in CI before accepting the candidate `04-WR-06`.

NotebookLM W2A has reviewed 12 additional IDs, bringing academically reviewed legacy IDs to 31/75. The remaining 44 await review; five older W1 REVISE items remain blocked. No W2A item has been imported here. All new implementations require separately versioned source IDs, grader tests, owner preview and release QA.
