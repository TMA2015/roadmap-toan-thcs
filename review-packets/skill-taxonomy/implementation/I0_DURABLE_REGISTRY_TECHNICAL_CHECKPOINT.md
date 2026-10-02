# Skill Taxonomy v2 — I0 durable registry technical checkpoint

Date: 2026-10-02

## Scope

I0 only: durable academic registry + schema + invariant QA.  
No runtime observer, no learner-facing UI, no learner-data write.

## Accepted implementation

PR: **#271**  
Exact tested HEAD: `ae8b7264fedbbe62e16b7d2d6a98634341554aa1`  
Roadmap PR Quality run: **37013490363 — SUCCESS**  
Squash merge to `main`: `a8b619a2b1ed5d572f615cd7178e0906978eaa6a`

Main registry:
- path: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`
- blob: `c2f2e5b8d78a58d874f88524861326223fdbdf45`
- schema: `skill-taxonomy-v2-registry-r1`
- status: `I0_DURABLE_REGISTRY_RUNTIME_DISABLED`

## Registry invariants

- 131 family definitions / 131 unique family IDs
- 386 legacy mapping rows
- 20 intentional NO_FAMILY mappings
- 14 total CROSS_TOPIC_REUSE mappings across S1–S4
- exactly 5 explicit CT24 reuse mappings:
  - `phan-tram -> NUM-PERCENT`
  - `lap-phuong-trinh -> EQ-MODEL`
  - `lap-he -> SYS-MODEL`
  - `luong-giac-thuc-te -> RIGHT-APPLICATION`
  - `xac-suat-thuc-te -> PROB-EXPERIMENTAL`
- reviewed Practice basis: 3,114 questions
- two approved diagnostic-subskill overlaps remain unchanged:
  - `hieu-hai-binh-phuong`: ID-STRUCTURE / FAC-IDENTITY
  - `binh-phuong-hoan-chinh`: ID-STRUCTURE / FAC-IDENTITY
- source registries S1–S4 are blob-locked.

## Protected runtime boundaries

- `runtime_enabled = false`
- `learner_data_write_enabled = false`
- `history_backfill_enabled = false`
- `mastery_thresholds_enabled = false`
- `readiness_enabled = false`
- legacy Practice store remains `toan-thcs-practice-v1`
- Canonical Evidence G2 remains `toan-thcs-canonical-evidence-v2`
- G2 boundary remains 101 rows / 7 canonical skills / CĐ04–07
- proposed Taxonomy v2 store `toan-thcs-taxonomy-v2-evidence-v1` is not read or written by runtime JavaScript in I0.

## QA note

Initial I0 CI correctly caught one source-preservation edge case: CT20 `nhan-dang-cong-cu` is an approved METHOD / NO_FAMILY mapping whose academic source has no layer. The schema/test were corrected to preserve `layer: null` rather than inventing a layer. The final exact HEAD passed the complete Roadmap PR Quality workflow including the dedicated I0 registry test, G2 regression, strict build and browser QA.

## Next planned gate

**I1 — compile topic-local CT02–CT25 item policies from the 3,114 reviewed question overlays.**

I1 remains data compilation / validation only until separately started. It must not add a runtime observer, UI, mastery, Readiness, migration, backfill or regrade.
