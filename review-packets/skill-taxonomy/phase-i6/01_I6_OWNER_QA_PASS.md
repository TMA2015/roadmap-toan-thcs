# Skill Taxonomy v2 — I6 Controlled Release Owner QA

Date: 2026-10-03
Status: **OWNER QA PASS FOR CONTROLLED RELEASE**
Broader learner-facing activation: **NOT YET AUTHORIZED**

## Release checkpoint

- PR #283 merged.
- Merge SHA: `56b56aa03a486d0b78de767b02fa778dd5303ce8`.
- Deploy MkDocs: PASS.
- gh-pages SHA: `15e245b22d5947b4c3a9d55ed0776998bde9fa9a`.
- Controlled page: `/collaboration/skill-map-v2-i6-controlled/`.

## Owner visual QA evidence

Owner screenshots confirm the controlled learner-facing Skill Map is rendering and behaving as intended:

1. Summary counts are coherent:
   - 42 independent Practice units;
   - 18 correct;
   - 28 families with observed evidence;
   - 103 families with no observed evidence;
   - 28 + 103 = 131 total families.
2. Evidence-only filter shows 28/131 families and preserves layer/topic filtering.
3. Sparse evidence is shown with counts only:
   - examples include 2/2, 0/1 and 1/1;
   - no raw percentage is shown for N <= 2.
4. The explanatory section states:
   - no evidence does not mean weak;
   - some families have no direct Practice items;
   - N=1–2 is sparse;
   - N>=3 may show descriptive percentage;
   - wrong independent evidence is retained;
   - hint/solution-assisted attempts are not independent evidence.
5. Current limits are visible and correct:
   - no mastery/weak labels;
   - no Core Readiness scoring;
   - no backfill/regrade;
   - MCQ proof/modeling/construction/multistep evidence is partial;
   - optional/Bridge/Challenge layers do not reduce Core state.
6. THPT-Bridge filtering works and displays the three Bridge families without calling unseen families weak.
7. Topic filter for CĐ05 works across layers:
   - Core family with no observed evidence;
   - Core family with no direct Practice capacity;
   - Entrance10 proof family with no direct Practice capacity.
8. Legacy Practice statistics remain separated from the new Skill Map.

## Minor polish before broader activation

The controlled QA page intentionally still exposes internal release terminology:
- page/title text such as `Skill Map v2 I6 Controlled QA`;
- the explanatory `I6 · Controlled learner-facing release` label.

This is acceptable for owner-controlled QA, but should be removed or renamed before broad learner navigation exposure.

## Closure decision

I6 controlled release is complete and owner-QA PASS.

This closes only the controlled release gate. It does not authorize:
- Mastery;
- Readiness;
- backfill/regrade;
- automatic written scoring;
- broad learner navigation exposure.

Next gate: broader learner-facing activation/polish, with learner-friendly route/title/navigation and the same frozen R2 evidence semantics.
