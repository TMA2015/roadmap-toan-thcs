# CT09 Academic Depth P1-C1 — Owner Production QA PASS

Date: 2026-10-03  
Task: `MATH-ACADEMIC-DEPTH-CT09-P1C1-001`  
Status: **DONE / OWNER PRODUCTION QA PASS**

## Released scope

P1-C1 introduced non-evidence `variant_group` metadata and structurally diverse Practice-session selection for CT09 while preserving all 120 historical question IDs/content and learner history.

Release:
- PR #298
- exact tested head: `e4437d0b508123401ffce279f0997634537f38c5`
- Roadmap PR Quality #635: PASS
- main merge: `9bae4667357c8a0faec9935ed0891eb7830d259b`
- MkDocs deploy #550: PASS
- deployed gh-pages checkpoint verified after release

## Owner production QA

Owner checked the live CT09 learner Practice UI and confirmed:

`P1-C1 QA PASS`

Owner acceptance covers the required production spot-check:
- repeated **Bộ 10 câu mới** sessions feel structurally more varied;
- no internal `variant_group` / `SYS09-...` metadata is exposed in learner UI;
- normal Practice interaction remains functional.

Automated QA already verifies exact 10-group diversity when enough groups exist, weak-fallback diversity, nonvisual metadata and no evidence write caused merely by rebuilding a session.

## Preserved boundaries

- `variant_group` remains delivery metadata only;
- no Mastery/Readiness change;
- no regrade/backfill;
- no historical Practice migration;
- original 120 IDs/content remain preserved.

## Closure

`CT09_P1C1 = OWNER_QA_PASS_CLOSED`

This closure satisfies the final prerequisite for CT09 P1-C2 production release, subject to P1-C2 exact-head CI remaining green.
