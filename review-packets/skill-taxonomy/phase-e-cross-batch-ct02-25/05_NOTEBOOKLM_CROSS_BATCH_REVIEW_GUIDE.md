# NotebookLM Review Guide — whole-project CT02–CT25 cross-batch reconciliation R1

Packet ID: `MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002`

## Gate entering this review
All four Skill Taxonomy v2 batches are academically closed at their local gates:
- S1 CT02–CT07: 39 families; question-level basis 732 reviewed.
- S2 CT08–CT12: 29 families; 624/624 PASS.
- S3 CT13–CT20: 44 families; 1,146/1,146 PASS.
- S4 CT21–CT25: 19 new families; 612/612 PASS.

This review is **not another item-bank audit**. It reconciles the taxonomy across all batches before implementation planning.

## Whole-project machine preflight
- family definitions: **131**
- unique family IDs: **131**
- legacy mapping rows: **386**
- intentional NO_FAMILY mapping rows: **20**
- explicit S4 cross-topic reuse rows: **5**
- duplicate family IDs across batch registries: **0**
- duplicate topic+legacy mapping keys: **0**
- mappings to unknown family IDs: **0**
- diagnostic-subskill strings appearing in more than one family definition: **2**

The two machine-detected overlap candidates are not automatically errors:
- `hieu-hai-binh-phuong`: S1/ID-STRUCTURE ↔ S1/FAC-IDENTITY
- `binh-phuong-hoan-chinh`: S1/ID-STRUCTURE ↔ S1/FAC-IDENTITY

## Required academic questions
Review all 131 family definitions and all 386 mapping rows. Check:
- whether any families from different batches are conceptually duplicated or so similar that they should be merged;
- whether any concept that should reuse an earlier canonical family was instead given a new family;
- whether any reuse points to the wrong earlier family;
- whether family scope is too broad or too narrow for a learner-facing mastery bar;
- whether diagnostic subskills are attached to the correct family while still being allowed to serve different mathematical contexts;
- whether KNTT-Core, Core-Support, THPT-Bridge, Entrance10, and Specialized-Challenge boundaries are coherent;
- whether optional/bridge/challenge families remain non-gating for Core;
- whether the CT02→CT25 progression is intelligible for self-learning and does not create avoidable dead ends or duplicate bars;
- whether CT22 remains THPT-Bridge/non-gating;
- whether CT24 context labels remain context while its five approved cross-topic mappings reuse canonical families;
- whether CT25 `on-thi-*` labels remain CATEGORY/NO_FAMILY while EXAM-STRATEGY and EXAM-REVIEW remain optional Entrance10;
- whether written-evidence gaps remain attached to the right families and are not falsely satisfied by MCQ-only evidence;
- whether the taxonomy remains extensible toward THPT/SAT/ACT without moving current THCS-only boundaries unnecessarily.

Do not reopen passed question wording/answer keys unless an exact cross-batch taxonomy conflict requires it.
Do not infer official exam frequency or importance from authored-bank counts.
Preserve legacy IDs/tags/history.
No runtime/mastery/Readiness/history migration is authorized by this review.

## Required output
Return only machine-checkable lines.

`BATCH|MATH-SKILL-CROSS-BATCH-CT02-25-R1-20261002|PASS`
or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

`BATCH_CHECK|S1|39|87|PASS`
`BATCH_CHECK|S2|29|75|PASS`
`BATCH_CHECK|S3|44|162|PASS`
`BATCH_CHECK|S4|19|62|PASS`
`FAMILY_COVERAGE|131|<reviewed>|<revision_count>|<missing>`
`MAPPING_COVERAGE|386|<reviewed>|<revision_count>|<missing>`

For each of the five explicit reuse rows:
`REUSE|CT24|phan-tram|NUM-PERCENT|PASS`
`REUSE|CT24|lap-phuong-trinh|EQ-MODEL|PASS`
`REUSE|CT24|lap-he|SYS-MODEL|PASS`
`REUSE|CT24|luong-giac-thuc-te|RIGHT-APPLICATION|PASS`
`REUSE|CT24|xac-suat-thuc-te|PROB-EXPERIMENTAL|PASS`
or use `REVISE|<correct family>|<reason>`.

`NO_FAMILY_COUNT|20|PASS`

Review the two machine overlap candidates explicitly:
`OVERLAP|hieu-hai-binh-phuong|ID-STRUCTURE|FAC-IDENTITY|PASS_AS_CONTEXTUAL_REUSE`
`OVERLAP|binh-phuong-hoan-chinh|ID-STRUCTURE|FAC-IDENTITY|PASS_AS_CONTEXTUAL_REUSE`
or use `REVISE|<correction>|<reason>`.

If a taxonomy change is needed:
`FIX|<batch>|<topic>|<legacy_or_family_id>|<field>|<current>|<corrected>|<reason>`
Allowed fields: `family_id`, `family_label`, `family_scope`, `diagnostic_subskills`, `role`, `layer`, `reuse`, `no_family`, `written_evidence`.
If none: `FIX_COUNT|0`.

Architecture checks:
`ARCH_1|PASS` — all 131 family definitions reviewed.
`ARCH_2|PASS` — all 386 mapping rows reviewed.
`ARCH_3|PASS` — family IDs are unique and stable.
`ARCH_4|PASS` — no unintentional near-duplicate family across batches.
`ARCH_5|PASS` — diagnostic-subskill overlaps are justified or corrected.
`ARCH_6|PASS` — all five S4 canonical reuse mappings are correct.
`ARCH_7|PASS` — all 20 intentional NO_FAMILY mappings remain non-mastery.
`ARCH_8|PASS` — family scopes are suitable for learner-facing mastery bars.
`ARCH_9|PASS` — layer assignments are coherent across batches.
`ARCH_10|PASS` — optional/bridge/challenge families do not gate Core.
`ARCH_11|PASS` — CT02–CT25 progression remains coherent for self-learning.
`ARCH_12|PASS` — CT22 stays THPT-Bridge/non-gating.
`ARCH_13|PASS` — CT24/CT25 context/category boundaries are preserved.
`ARCH_14|PASS` — written evidence is not overclaimed by MCQs.
`ARCH_15|PASS` — no real-exam frequency claim is inferred from authored data.
`ARCH_16|PASS` — no runtime/mastery/Readiness/history activation is implied.

Finally:
`OVERALL|PASS` or `OVERALL|REVISIONS_REQUIRED`
`AUTHORIZATION|CLEARED_FOR_TAXONOMY_V2_IMPLEMENTATION_PLANNING`
or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`.

If chat would truncate, create a Markdown artifact containing the exact same machine-checkable lines.
