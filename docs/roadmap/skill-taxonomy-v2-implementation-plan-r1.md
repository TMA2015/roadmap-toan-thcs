# Skill Taxonomy v2 — Implementation Plan R1

Date: 2026-10-02  
Status: **PLANNING_ONLY / NO_RUNTIME_ACTIVATION**

## 1. Academic input locked

The academic design entering implementation is closed and must not be silently reinterpreted:

- 131 learner-facing family definitions / 131 unique family IDs.
- 386 legacy mapping rows.
- 20 intentional `NO_FAMILY` mappings.
- 5 approved CT24 canonical family-reuse mappings.
- 2 diagnostic-subskill overlaps explicitly approved as contextual reuse.
- S1–S4 local audits closed.
- Whole-project CT02–CT25 reconciliation PASS with 0 fixes.
- Reviewed Practice basis: **3,114 questions**.
- Legacy question IDs, legacy `tags.skill`, learner history and current stores are protected.

Implementation planning authorization:
`CLEARED_FOR_TAXONOMY_V2_IMPLEMENTATION_PLANNING`.

This does **not** authorize mastery thresholds, Readiness gating, migration/backfill, regrade, or production activation.

## 2. Existing production boundary that must be preserved

Canonical Evidence G2 is already live and owner-QA accepted:

- store: `toan-thcs-canonical-evidence-v2`;
- 101 Practice items;
- 7 proven canonical skills;
- CĐ04–07 only;
- max 23 topic-scoped independent units;
- shadow capture only;
- no mastery / Readiness credit;
- no migration/backfill/regrade.

Taxonomy v2 must not mutate the G2 store schema, overwrite its policy, reinterpret its old events, or silently expand its allowlist.

## 3. Proposed architecture

### 3.1 Academic Registry — durable source of truth

Create a new read-only registry:

`docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`

It will contain:

- 131 family definitions;
- family label, layer, topics and diagnostic subskills;
- learner visibility defaults;
- 386 legacy mapping rows;
- role per mapping: assessed/supporting/method/context/category/composite/reuse;
- 20 explicit `NO_FAMILY` mappings;
- 5 cross-topic canonical reuse mappings;
- source/provenance references to the academic closure.

This registry is metadata only. Loading it must not write learner data.

### 3.2 Runtime policy — topic sharded

Do **not** ship one giant 3,114-row runtime file.

Use:

`docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json`

plus topic-local policies:

`taxonomy-v2-runtime/ct02-r1.json` … `taxonomy-v2-runtime/ct25-r1.json`.

Each question row should contain only fields required at runtime:

- `question_id`
- `topic_id`
- `diagnostic_skill_id`
- `family_id | null`
- `role`
- `layer`
- `evidence_class`
- `clone_family | null`
- source file/blob lock
- runtime status

Benefits:
- load only the active topic;
- small blast radius for repairs;
- easier source-lock validation;
- avoids rebuilding unrelated topics.

### 3.3 New evidence store — separate from G2

Introduce a new shadow store rather than changing `toan-thcs-canonical-evidence-v2`.

Proposed key:

`toan-thcs-taxonomy-v2-evidence-v1`

Proposed event schema:

`taxonomy-v2-evidence-event-v1`

Each event should preserve:

- event ID and timestamp;
- question ID and topic;
- diagnostic skill ID;
- family ID, if any;
- role/layer;
- evidence class;
- correctness;
- assistance/hint/full-solution state;
- clone/evidence unit key;
- independent-evidence decision;
- source policy version.

Rules:
- `NO_FAMILY` rows never create family mastery evidence.
- supporting/method/context/category/composite roles never receive independent family credit unless the reviewed item row explicitly names an assessed family.
- clone-equivalent questions count as one independent unit for family evidence.
- assisted attempts remain stored for provenance but are not independent evidence.
- repeat questions do not create a new independent unit.
- old legacy attempts are **not** synthesized into this store.

### 3.4 Preserve legacy learner statistics

The existing `toan-thcs-practice-v1` counters remain unchanged.

They continue to answer the historical question:
“On legacy tag X, how many attempts/correct answers were recorded?”

Taxonomy v2 answers a different question:
“What reviewed independent evidence do we have for learner-facing family Y?”

The UI must not combine these two sources into one percentage without an explicitly reviewed formula.

## 4. Evidence aggregation

For each learner-facing family, calculate a **shadow summary**, not mastery:

- independent units attempted;
- independent units correct;
- assisted events;
- recent reviewed evidence;
- written-evidence availability/state where applicable;
- evidence-source mix.

Do not initially display:
- “Mastered”
- “Weak”
- readiness percentage
- pass/fail threshold
- ranked remediation priority

Those require a separate policy review.

Accuracy may be computed internally as:
`correct independent units / attempted independent units`,
but it must be labelled as **evidence accuracy**, not mastery.

## 5. Written-evidence boundary

Some families require written reasoning, proof, modeling, or justification that MCQ cannot fully establish.

Implementation must therefore support a separate evidence lane:

- MCQ reviewed evidence;
- written/rubric evidence;
- evidence sufficiency metadata.

Phase 1 may leave automatic written scoring OFF.

A family that requires written evidence must not become “mastered” based only on MCQ accuracy.

## 6. Learner-facing Skill Map v2

Do not show a flat list of 131 bars.

Default organization:

1. group by subject strand / topic;
2. show KNTT-Core first;
3. show Core-Support as a secondary section;
4. collapse Entrance10, THPT-Bridge and Specialized-Challenge by default;
5. preserve filters by layer/topic;
6. show evidence count and evidence accuracy only after the new shadow store has real evidence.

Recommended initial card fields:
- family label;
- topic(s);
- layer;
- evidence: `x independent units`;
- evidence accuracy when denominator > 0;
- “More evidence needed” when evidence is sparse;
- link to relevant learning/practice route.

No optional/Bridge/Challenge family may lower Core Readiness.

## 7. Readiness v2

Do not reuse the old readiness threshold automatically.

Before enabling Readiness v2, define and review separately:

- which family layers contribute;
- minimum evidence sufficiency;
- how written evidence contributes;
- treatment of unseen families;
- treatment of assisted attempts;
- decay / recency policy, if any;
- topic vs whole-roadmap readiness;
- threshold values.

Hard gates remain OFF.

## 8. Implementation phases

### I0 — Registry build and validation
Create the durable 131-family registry and 386-row mapping table from the academically closed sources.

Gate:
- 131/131 family IDs unique;
- 386/386 mappings accounted for;
- 20 NO_FAMILY rows preserved;
- 5 canonical reuse rows preserved;
- zero unknown family references;
- no runtime writes.

### I1 — Compile topic-local 3,114-item runtime policies
Compile all reviewed item overlays into topic-sharded policies.

Gate:
- 3,114 unique question IDs accounted for;
- source bank blob locks match;
- family/role/layer/evidence/clone fields match the approved review outputs;
- no question bank edit;
- no learner-data write.

### I2 — Shadow observer canary
Add a new observer writing only to `toan-thcs-taxonomy-v2-evidence-v1`.

Start with a small topic allowlist. G2 continues unchanged.

Gate:
- legacy Practice counters unchanged;
- G2 store unchanged;
- no duplicate event from one answer;
- assisted/repeat/clone behavior tested;
- NO_FAMILY produces no family credit;
- fail-open if Taxonomy v2 policy fails to load.

### I3 — Expand shadow capture to CT02–CT25
After canary QA, expand only shadow capture.

Gate:
- per-topic policy load succeeds;
- 3,114 reviewed rows are eligible exactly as approved;
- browser regression;
- mobile regression;
- no visible learner behavior change.

### I4 — Skill Map v2 preview
Add an owner/opt-in preview reading the new store.

Gate:
- no mastery labels;
- no readiness gating;
- no backfill;
- layer filtering works;
- cross-topic reuse aggregates to the same family;
- clone families do not inflate evidence;
- legacy statistics remain separately available.

### I5 — Evidence policy review
Use real shadow data to define evidence sufficiency/mastery/readiness policy.

This is a **new academic/product gate** and must not be inferred from the taxonomy review.

### I6 — Controlled learner-facing release
Only after I5 approval:
- controlled release;
- owner QA;
- rollback checkpoint;
- then broader learner-facing activation.

## 9. Regression invariants

Every phase must prove:

1. `toan-thcs-practice-v1` remains intact.
2. `toan-thcs-canonical-evidence-v2` remains intact.
3. no old attempt is backfilled or regraded.
4. legacy question IDs/tags stay unchanged.
5. G2 101-row capture behavior remains unchanged.
6. no family gets evidence from a NO_FAMILY row.
7. only one primary family evidence target per one-answer MCQ.
8. clone-equivalent rows cannot inflate independent evidence.
9. assisted attempts are not independent evidence.
10. optional/Bridge/Challenge never gates Core.
11. policy load failure does not break Practice.
12. release can be rolled back without learner-data corruption.

## 10. First implementation deliverable

The next coding task should be **I0 only**:

- generate the durable registry;
- validate all 131 families and 386 mappings;
- add tests;
- expose no new learner UI;
- write no learner data.

After I0 PASS, proceed to I1.

