# CT09 Academic Depth P1-C1 — Anti-clone Selector Release Receipt

Date: 2026-10-03  
Task: `MATH-ACADEMIC-DEPTH-CT09-P1C1-001`  
Status: **LIVE / OWNER PRODUCTION QA PENDING**

## Scope

P1-C1 is the technical anti-clone half of CT09 P1-C:
- preserve all 120 historical Practice questions and IDs;
- add top-level non-evidence `variant_group` metadata;
- group the 120 questions into 18 structural delivery groups;
- make Practice Engine prefer unseen variant groups within a session before repeating a group;
- fill from repeated groups only when needed to preserve requested session size.

No question wording, answer, legacy skill tags, difficulty, historical attempts, Mastery/Readiness or backfill semantics were changed.

## Source-lock handling

The original Taxonomy v2 I1 source blobs intentionally remain the audited provenance reference.

Because additive `variant_group` metadata changes Git blobs, P1-C1 added a dedicated academic payload lock:
- `review-packets/academic-depth/ct09-p1c1/01_CT09_PRACTICE_ACADEMIC_LOCK_R1.json`

CI permits CT09 source-blob drift only when:
- the old audited blob matches the lock;
- every pre-existing parsed question field remains exactly equal;
- the only additive field is `variant_group`;
- every current CT09 question has a non-empty variant group.

Thus the existing taxonomy provenance is preserved rather than silently rewritten.

## QA and release

PR: **#298**  
Exact tested HEAD: `e4437d0b508123401ffce279f0997634537f38c5`  
Roadmap PR Quality: **#635 PASS**

Automated gates include:
- exact IDs `SYS09V1_001..120`;
- count stays 120;
- original difficulty distribution stays 36/78/6;
- original question-type inventory remains unchanged;
- 18 variant groups exist;
- normal/weak-fallback sessions choose 10 distinct groups when enough groups exist;
- internal variant IDs do not leak into learner UI;
- rebuilding a session does not itself write learner evidence;
- full existing Taxonomy v2 / strict build / browser regressions remain green.

Squash merge to main:
- `9bae4667357c8a0faec9935ed0891eb7830d259b`

Deploy MkDocs:
- run **#550**
- result: **SUCCESS**

Deployed `gh-pages` verification:
- `c406cda1edb43a3103df9e2232bca611357be434`
- deployed Practice Engine contains `buildDiverseSession`;
- deployed CT09 chunk contains `variant_group`;
- deployed manifest declares 18 groups, ID preservation and `affects_evidence: false`.

## Owner QA gate

Still required:
- open CT09 Practice in normal learner UI;
- click **Bộ 10 câu mới** several times;
- confirm the sets feel structurally more varied and there is no visible internal metadata or UI regression.

No need to inspect hidden group IDs; automated browser QA already checks exact uniqueness.

## Next bounded work

P1-C2 may proceed as **review-only academic preparation** while P1-C1 owner QA is pending.

P1-C2 learner-facing integration remains blocked until:
1. NotebookLM independently reviews the candidate packet; and
2. P1-C1 owner QA is closed.
