# NotebookLM Review Guide — S3 Combined Full-Bank Audit CT13–CT20 R1

Packet ID: `MATH-SKILL-S3-CT13-20-COMBINED-R1-20261002`

## Scope
- CT13: 156 questions
- CT14: 140 questions
- CT15: 124 questions
- CT16: 120 questions
- CT17: 132 questions
- CT18: 132 questions
- CT19: 147 questions
- CT20: 195 questions
- **Combined: 1,146 questions**
- Proposed family evidence: **1,136 mapped + 10 formative/no-family**
- Clone-family candidates: **165**
- Machine preflight: exact IDs, no missing primary, no invalid no-family credit, no duplicate clone membership, no runtime/Readiness/legacy changes.

## Temporary Sources to select
- `CT13_OVERLAY_SOURCE.md`
- `CT14_OVERLAY_SOURCE.md`
- `CT15_OVERLAY_SOURCE.md`
- `CT16_OVERLAY_SOURCE.md`
- `CT17_OVERLAY_SOURCE.md`
- `CT18_OVERLAY_SOURCE.md`
- `CT19_OVERLAY_SOURCE.md`
- `CT20_OVERLAY_SOURCE.md`
- this review guide

JSON overlays remain GitHub provenance/machine-check data only and are not uploaded to NotebookLM.

## Global academic rules
- Max one primary diagnostic skill per one-answer MCQ.
- Learner-facing family remains broader than diagnostic subskill.
- Supporting/method/composite/cross-topic tags do not create duplicate learner mastery.
- Proof, construction, synthesis and strategy MCQs are partial evidence only when full written reasoning is the real target.
- Cross-topic canonical reuse from S3 family PASS must be preserved.
- Core-Support / Entrance10 / Specialized-Challenge evidence does not gate Core.
- `CT20:nhan-dang-cong-cu` is intentionally METHOD / NO_FAMILY; its 10 items remain formative/no-family.
- Clone families are future evidence de-duplication guidance only.
- Legacy questions, answers, IDs and tags are immutable; no runtime/history migration is authorized.

## Topic-specific focus
- **CT13:** direct angle/parallel diagnostics vs generic proof competence; proof-chain MCQs remain partial.
- **CT14:** Pythagore reuses CT18 canonical family; congruence cases remain diagnostics inside one learner family; perpendicular-bisector written proof gap remains.
- **CT15:** perpendicular-bisector/equidistance reuse from CT14; incenter/circumcenter concepts must remain distinct but cross-topic compatible with CT19.
- **CT16:** property vs recognition/sign criteria remain diagnostic subskills; CT20 special-quadrilateral recognition must reuse these families.
- **CT17:** similarity criteria and correspondence remain diagnostics; ratio-area/product relations are support; proof chains need written evidence.
- **CT18:** Pythagore canonical home; trig ratios and solving skills remain distinct diagnostics; altitude-system optional family and real-world application boundaries preserved.
- **CT19:** tangent proof and power-of-point style items are optional layers; in/circumcircle triangle concepts reuse CT15 families; proof MCQs remain partial.
- **CT20:** 10 tool-selection items remain no-family formative; synthesis chains reuse CT17/CT19 capabilities; solid-measurement families remain Core.

## Required output
Return only machine-checkable lines.

`BATCH|MATH-SKILL-S3-CT13-20-COMBINED-R1-20261002|PASS`
or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

`TOPIC|CT13|PASS` or `TOPIC|CT13|REVISIONS_REQUIRED`
`COVERAGE|CT13|156|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT14|PASS` or `TOPIC|CT14|REVISIONS_REQUIRED`
`COVERAGE|CT14|140|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT15|PASS` or `TOPIC|CT15|REVISIONS_REQUIRED`
`COVERAGE|CT15|124|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT16|PASS` or `TOPIC|CT16|REVISIONS_REQUIRED`
`COVERAGE|CT16|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT17|PASS` or `TOPIC|CT17|REVISIONS_REQUIRED`
`COVERAGE|CT17|132|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT18|PASS` or `TOPIC|CT18|REVISIONS_REQUIRED`
`COVERAGE|CT18|132|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT19|PASS` or `TOPIC|CT19|REVISIONS_REQUIRED`
`COVERAGE|CT19|147|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT20|PASS` or `TOPIC|CT20|REVISIONS_REQUIRED`
`COVERAGE|CT20|195|<reviewed_count>|<revision_count>|<missing_count>`
`COVERAGE|COMBINED|1146|<reviewed_count>|<revision_count>|<missing_count>`

If revisions exist:
`FIX|<topic>|<question_id>|<field>|<current>|<corrected>|<reason>`
If none: `FIX_COUNT|0`

## Clone-family review
`CLONE|CT13|GEO13-AUTO-001|PASS` or `CLONE|CT13|GEO13-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-002|PASS` or `CLONE|CT13|GEO13-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-003|PASS` or `CLONE|CT13|GEO13-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-004|PASS` or `CLONE|CT13|GEO13-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-005|PASS` or `CLONE|CT13|GEO13-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-006|PASS` or `CLONE|CT13|GEO13-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-007|PASS` or `CLONE|CT13|GEO13-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-008|PASS` or `CLONE|CT13|GEO13-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-009|PASS` or `CLONE|CT13|GEO13-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-010|PASS` or `CLONE|CT13|GEO13-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-011|PASS` or `CLONE|CT13|GEO13-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-012|PASS` or `CLONE|CT13|GEO13-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-013|PASS` or `CLONE|CT13|GEO13-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-014|PASS` or `CLONE|CT13|GEO13-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-015|PASS` or `CLONE|CT13|GEO13-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-016|PASS` or `CLONE|CT13|GEO13-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-017|PASS` or `CLONE|CT13|GEO13-AUTO-017|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-018|PASS` or `CLONE|CT13|GEO13-AUTO-018|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-019|PASS` or `CLONE|CT13|GEO13-AUTO-019|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-020|PASS` or `CLONE|CT13|GEO13-AUTO-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-021|PASS` or `CLONE|CT13|GEO13-AUTO-021|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-022|PASS` or `CLONE|CT13|GEO13-AUTO-022|REVISE|<corrected membership>|<reason>`
`CLONE|CT13|GEO13-AUTO-023|PASS` or `CLONE|CT13|GEO13-AUTO-023|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-001|PASS` or `CLONE|CT14|TRI14-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-002|PASS` or `CLONE|CT14|TRI14-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-003|PASS` or `CLONE|CT14|TRI14-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-004|PASS` or `CLONE|CT14|TRI14-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-005|PASS` or `CLONE|CT14|TRI14-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-006|PASS` or `CLONE|CT14|TRI14-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-007|PASS` or `CLONE|CT14|TRI14-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-008|PASS` or `CLONE|CT14|TRI14-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-009|PASS` or `CLONE|CT14|TRI14-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-010|PASS` or `CLONE|CT14|TRI14-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-011|PASS` or `CLONE|CT14|TRI14-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-012|PASS` or `CLONE|CT14|TRI14-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-013|PASS` or `CLONE|CT14|TRI14-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-014|PASS` or `CLONE|CT14|TRI14-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-015|PASS` or `CLONE|CT14|TRI14-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-016|PASS` or `CLONE|CT14|TRI14-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-017|PASS` or `CLONE|CT14|TRI14-AUTO-017|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-018|PASS` or `CLONE|CT14|TRI14-AUTO-018|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-019|PASS` or `CLONE|CT14|TRI14-AUTO-019|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-020|PASS` or `CLONE|CT14|TRI14-AUTO-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-021|PASS` or `CLONE|CT14|TRI14-AUTO-021|REVISE|<corrected membership>|<reason>`
`CLONE|CT14|TRI14-AUTO-022|PASS` or `CLONE|CT14|TRI14-AUTO-022|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-001|PASS` or `CLONE|CT15|CEN15-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-002|PASS` or `CLONE|CT15|CEN15-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-003|PASS` or `CLONE|CT15|CEN15-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-004|PASS` or `CLONE|CT15|CEN15-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-005|PASS` or `CLONE|CT15|CEN15-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-006|PASS` or `CLONE|CT15|CEN15-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-007|PASS` or `CLONE|CT15|CEN15-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-008|PASS` or `CLONE|CT15|CEN15-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-009|PASS` or `CLONE|CT15|CEN15-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-010|PASS` or `CLONE|CT15|CEN15-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-011|PASS` or `CLONE|CT15|CEN15-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-012|PASS` or `CLONE|CT15|CEN15-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-013|PASS` or `CLONE|CT15|CEN15-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-014|PASS` or `CLONE|CT15|CEN15-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT15|CEN15-AUTO-015|PASS` or `CLONE|CT15|CEN15-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-001|PASS` or `CLONE|CT16|QUAD16-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-002|PASS` or `CLONE|CT16|QUAD16-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-003|PASS` or `CLONE|CT16|QUAD16-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-004|PASS` or `CLONE|CT16|QUAD16-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-005|PASS` or `CLONE|CT16|QUAD16-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-006|PASS` or `CLONE|CT16|QUAD16-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-007|PASS` or `CLONE|CT16|QUAD16-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-008|PASS` or `CLONE|CT16|QUAD16-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-009|PASS` or `CLONE|CT16|QUAD16-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-010|PASS` or `CLONE|CT16|QUAD16-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-011|PASS` or `CLONE|CT16|QUAD16-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-012|PASS` or `CLONE|CT16|QUAD16-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT16|QUAD16-AUTO-013|PASS` or `CLONE|CT16|QUAD16-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-001|PASS` or `CLONE|CT17|SIM17-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-002|PASS` or `CLONE|CT17|SIM17-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-003|PASS` or `CLONE|CT17|SIM17-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-004|PASS` or `CLONE|CT17|SIM17-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-005|PASS` or `CLONE|CT17|SIM17-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-006|PASS` or `CLONE|CT17|SIM17-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-007|PASS` or `CLONE|CT17|SIM17-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-008|PASS` or `CLONE|CT17|SIM17-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-009|PASS` or `CLONE|CT17|SIM17-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-010|PASS` or `CLONE|CT17|SIM17-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-011|PASS` or `CLONE|CT17|SIM17-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-012|PASS` or `CLONE|CT17|SIM17-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-013|PASS` or `CLONE|CT17|SIM17-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-014|PASS` or `CLONE|CT17|SIM17-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-015|PASS` or `CLONE|CT17|SIM17-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT17|SIM17-AUTO-016|PASS` or `CLONE|CT17|SIM17-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-001|PASS` or `CLONE|CT18|TRIG18-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-002|PASS` or `CLONE|CT18|TRIG18-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-003|PASS` or `CLONE|CT18|TRIG18-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-004|PASS` or `CLONE|CT18|TRIG18-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-005|PASS` or `CLONE|CT18|TRIG18-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-006|PASS` or `CLONE|CT18|TRIG18-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-007|PASS` or `CLONE|CT18|TRIG18-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-008|PASS` or `CLONE|CT18|TRIG18-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-009|PASS` or `CLONE|CT18|TRIG18-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-010|PASS` or `CLONE|CT18|TRIG18-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-011|PASS` or `CLONE|CT18|TRIG18-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-012|PASS` or `CLONE|CT18|TRIG18-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-013|PASS` or `CLONE|CT18|TRIG18-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-014|PASS` or `CLONE|CT18|TRIG18-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-015|PASS` or `CLONE|CT18|TRIG18-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT18|TRIG18-AUTO-016|PASS` or `CLONE|CT18|TRIG18-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-001|PASS` or `CLONE|CT19|CIR19-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-002|PASS` or `CLONE|CT19|CIR19-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-003|PASS` or `CLONE|CT19|CIR19-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-004|PASS` or `CLONE|CT19|CIR19-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-005|PASS` or `CLONE|CT19|CIR19-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-006|PASS` or `CLONE|CT19|CIR19-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-007|PASS` or `CLONE|CT19|CIR19-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-008|PASS` or `CLONE|CT19|CIR19-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-009|PASS` or `CLONE|CT19|CIR19-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-010|PASS` or `CLONE|CT19|CIR19-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-011|PASS` or `CLONE|CT19|CIR19-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-012|PASS` or `CLONE|CT19|CIR19-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-013|PASS` or `CLONE|CT19|CIR19-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-014|PASS` or `CLONE|CT19|CIR19-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-015|PASS` or `CLONE|CT19|CIR19-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-016|PASS` or `CLONE|CT19|CIR19-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-017|PASS` or `CLONE|CT19|CIR19-AUTO-017|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-018|PASS` or `CLONE|CT19|CIR19-AUTO-018|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-019|PASS` or `CLONE|CT19|CIR19-AUTO-019|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-020|PASS` or `CLONE|CT19|CIR19-AUTO-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-021|PASS` or `CLONE|CT19|CIR19-AUTO-021|REVISE|<corrected membership>|<reason>`
`CLONE|CT19|CIR19-AUTO-022|PASS` or `CLONE|CT19|CIR19-AUTO-022|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-001|PASS` or `CLONE|CT20|SYN20-AUTO-001|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-002|PASS` or `CLONE|CT20|SYN20-AUTO-002|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-003|PASS` or `CLONE|CT20|SYN20-AUTO-003|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-004|PASS` or `CLONE|CT20|SYN20-AUTO-004|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-005|PASS` or `CLONE|CT20|SYN20-AUTO-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-006|PASS` or `CLONE|CT20|SYN20-AUTO-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-007|PASS` or `CLONE|CT20|SYN20-AUTO-007|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-008|PASS` or `CLONE|CT20|SYN20-AUTO-008|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-009|PASS` or `CLONE|CT20|SYN20-AUTO-009|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-010|PASS` or `CLONE|CT20|SYN20-AUTO-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-011|PASS` or `CLONE|CT20|SYN20-AUTO-011|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-012|PASS` or `CLONE|CT20|SYN20-AUTO-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-013|PASS` or `CLONE|CT20|SYN20-AUTO-013|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-014|PASS` or `CLONE|CT20|SYN20-AUTO-014|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-015|PASS` or `CLONE|CT20|SYN20-AUTO-015|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-016|PASS` or `CLONE|CT20|SYN20-AUTO-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-017|PASS` or `CLONE|CT20|SYN20-AUTO-017|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-018|PASS` or `CLONE|CT20|SYN20-AUTO-018|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-019|PASS` or `CLONE|CT20|SYN20-AUTO-019|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-020|PASS` or `CLONE|CT20|SYN20-AUTO-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-021|PASS` or `CLONE|CT20|SYN20-AUTO-021|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-022|PASS` or `CLONE|CT20|SYN20-AUTO-022|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-023|PASS` or `CLONE|CT20|SYN20-AUTO-023|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-024|PASS` or `CLONE|CT20|SYN20-AUTO-024|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-025|PASS` or `CLONE|CT20|SYN20-AUTO-025|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-026|PASS` or `CLONE|CT20|SYN20-AUTO-026|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-027|PASS` or `CLONE|CT20|SYN20-AUTO-027|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-028|PASS` or `CLONE|CT20|SYN20-AUTO-028|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-029|PASS` or `CLONE|CT20|SYN20-AUTO-029|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-030|PASS` or `CLONE|CT20|SYN20-AUTO-030|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-031|PASS` or `CLONE|CT20|SYN20-AUTO-031|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-032|PASS` or `CLONE|CT20|SYN20-AUTO-032|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-033|PASS` or `CLONE|CT20|SYN20-AUTO-033|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-034|PASS` or `CLONE|CT20|SYN20-AUTO-034|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-035|PASS` or `CLONE|CT20|SYN20-AUTO-035|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-036|PASS` or `CLONE|CT20|SYN20-AUTO-036|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-037|PASS` or `CLONE|CT20|SYN20-AUTO-037|REVISE|<corrected membership>|<reason>`
`CLONE|CT20|SYN20-AUTO-038|PASS` or `CLONE|CT20|SYN20-AUTO-038|REVISE|<corrected membership>|<reason>`

## Counts
`COUNT|CT13|MAPPED_FAMILY|156`
`COUNT|CT13|FORMATIVE_NO_FAMILY|0`
`COUNT|CT13|PRIMARY|diem-thuoc-duong|6`
`COUNT|CT13|PRIMARY|tia-doi|6`
`COUNT|CT13|PRIMARY|trung-diem|8`
`COUNT|CT13|PRIMARY|phan-loai-goc|10`
`COUNT|CT13|PRIMARY|goc-phu-bu|12`
`COUNT|CT13|PRIMARY|tia-phan-giac|12`
`COUNT|CT13|PRIMARY|goc-doi-dinh|12`
`COUNT|CT13|PRIMARY|duong-vuong-goc|8`
`COUNT|CT13|PRIMARY|goc-so-le-trong|8`
`COUNT|CT13|PRIMARY|goc-dong-vi|8`
`COUNT|CT13|PRIMARY|goc-trong-cung-phia|8`
`COUNT|CT13|PRIMARY|tinh-chat-song-song|7`
`COUNT|CT13|PRIMARY|dau-hieu-song-song|7`
`COUNT|CT13|PRIMARY|vuong-goc-song-song|8`
`COUNT|CT13|PRIMARY|diem-nam-giua|4`
`COUNT|CT13|PRIMARY|tia|4`
`COUNT|CT13|PRIMARY|doan-thang-do-dai|4`
`COUNT|CT13|PRIMARY|khai-niem-goc|4`
`COUNT|CT13|PRIMARY|do-goc|4`
`COUNT|CT13|PRIMARY|nhan-dang-goc-dac-biet|4`
`COUNT|CT13|PRIMARY|tien-de-euclid|4`
`COUNT|CT13|PRIMARY|gia-thiet-ket-luan|4`
`COUNT|CT13|PRIMARY|lap-luan-chung-minh-ngan|4`
`COUNT|CT14|MAPPED_FAMILY|140`
`COUNT|CT14|FORMATIVE_NO_FAMILY|0`
`COUNT|CT14|PRIMARY|phan-loai-tam-giac|8`
`COUNT|CT14|PRIMARY|chu-vi-dien-tich|6`
`COUNT|CT14|PRIMARY|tong-goc-tam-giac|12`
`COUNT|CT14|PRIMARY|goc-ngoai|8`
`COUNT|CT14|PRIMARY|so-sanh-canh-goc|10`
`COUNT|CT14|PRIMARY|bat-dang-thuc-tam-giac|10`
`COUNT|CT14|PRIMARY|tam-giac-can|12`
`COUNT|CT14|PRIMARY|tam-giac-deu|8`
`COUNT|CT14|PRIMARY|pythagore|10`
`COUNT|CT14|PRIMARY|pythagore-dao|6`
`COUNT|CT14|PRIMARY|bang-nhau-ccc|8`
`COUNT|CT14|PRIMARY|bang-nhau-cgc|8`
`COUNT|CT14|PRIMARY|bang-nhau-gcg|8`
`COUNT|CT14|PRIMARY|bang-nhau-tam-giac-vuong|6`
`COUNT|CT14|PRIMARY|viet-tuong-ung-tam-giac-bang-nhau|4`
`COUNT|CT14|PRIMARY|nhan-biet-trung-truc|4`
`COUNT|CT14|PRIMARY|cach-deu-dinh|4`
`COUNT|CT14|PRIMARY|tinh-chat-duong-trung-truc|4`
`COUNT|CT14|PRIMARY|duong-vuong-goc-duong-xien|4`
`COUNT|CT15|MAPPED_FAMILY|124`
`COUNT|CT15|FORMATIVE_NO_FAMILY|0`
`COUNT|CT15|PRIMARY|nhan-biet-trung-tuyen|8`
`COUNT|CT15|PRIMARY|trong-tam|8`
`COUNT|CT15|PRIMARY|ti-so-trong-tam|12`
`COUNT|CT15|PRIMARY|nhan-biet-duong-cao|8`
`COUNT|CT15|PRIMARY|truc-tam|8`
`COUNT|CT15|PRIMARY|vi-tri-truc-tam|8`
`COUNT|CT15|PRIMARY|nhan-biet-phan-giac|8`
`COUNT|CT15|PRIMARY|tam-noi-tiep|10`
`COUNT|CT15|PRIMARY|cach-deu-canh|8`
`COUNT|CT15|PRIMARY|nhan-biet-trung-truc|8`
`COUNT|CT15|PRIMARY|tam-ngoai-tiep|10`
`COUNT|CT15|PRIMARY|cach-deu-dinh|8`
`COUNT|CT15|PRIMARY|vi-tri-tam-ngoai-tiep|8`
`COUNT|CT15|PRIMARY|phan-biet-bon-tam|8`
`COUNT|CT15|PRIMARY|dong-quy-bon-duong-dac-biet|4`
`COUNT|CT16|MAPPED_FAMILY|120`
`COUNT|CT16|FORMATIVE_NO_FAMILY|0`
`COUNT|CT16|PRIMARY|tong-goc-tu-giac|8`
`COUNT|CT16|PRIMARY|hinh-thang|8`
`COUNT|CT16|PRIMARY|hinh-thang-can|8`
`COUNT|CT16|PRIMARY|hbh-tinh-chat|12`
`COUNT|CT16|PRIMARY|hbh-dau-hieu|10`
`COUNT|CT16|PRIMARY|hcn-tinh-chat|10`
`COUNT|CT16|PRIMARY|hcn-dau-hieu|10`
`COUNT|CT16|PRIMARY|hthoi-tinh-chat|10`
`COUNT|CT16|PRIMARY|hthoi-dau-hieu|10`
`COUNT|CT16|PRIMARY|hvuong-tinh-chat|10`
`COUNT|CT16|PRIMARY|hvuong-dau-hieu|10`
`COUNT|CT16|PRIMARY|quan-he-bao-ham|8`
`COUNT|CT16|PRIMARY|duong-cheo-suy-luan|6`
`COUNT|CT17|MAPPED_FAMILY|132`
`COUNT|CT17|FORMATIVE_NO_FAMILY|0`
`COUNT|CT17|PRIMARY|thales-thuan|9`
`COUNT|CT17|PRIMARY|thales-dao|9`
`COUNT|CT17|PRIMARY|ti-le-doan-thang|9`
`COUNT|CT17|PRIMARY|duong-trung-binh|9`
`COUNT|CT17|PRIMARY|nhan-biet-dong-dang|9`
`COUNT|CT17|PRIMARY|dong-dang-gg|9`
`COUNT|CT17|PRIMARY|dong-dang-cgc|9`
`COUNT|CT17|PRIMARY|dong-dang-ccc|9`
`COUNT|CT17|PRIMARY|thu-tu-tuong-ung|8`
`COUNT|CT17|PRIMARY|tinh-do-dai-dong-dang|8`
`COUNT|CT17|PRIMARY|ti-so-chu-vi|8`
`COUNT|CT17|PRIMARY|ti-so-dien-tich|8`
`COUNT|CT17|PRIMARY|he-thuc-tich|8`
`COUNT|CT17|PRIMARY|ket-hop-song-song-dong-dang|8`
`COUNT|CT17|PRIMARY|tinh-chat-duong-phan-giac|6`
`COUNT|CT17|PRIMARY|hinh-dong-dang|6`
`COUNT|CT18|MAPPED_FAMILY|132`
`COUNT|CT18|FORMATIVE_NO_FAMILY|0`
`COUNT|CT18|PRIMARY|pythagore|8`
`COUNT|CT18|PRIMARY|pythagore-dao|8`
`COUNT|CT18|PRIMARY|canh-huyen|8`
`COUNT|CT18|PRIMARY|he-thuc-canh|8`
`COUNT|CT18|PRIMARY|he-thuc-duong-cao|8`
`COUNT|CT18|PRIMARY|dien-tich-duong-cao|8`
`COUNT|CT18|PRIMARY|doi-ke-huyen|8`
`COUNT|CT18|PRIMARY|sin|8`
`COUNT|CT18|PRIMARY|cos|8`
`COUNT|CT18|PRIMARY|tan|8`
`COUNT|CT18|PRIMARY|tim-canh-luong-giac|8`
`COUNT|CT18|PRIMARY|tim-goc-luong-giac|8`
`COUNT|CT18|PRIMARY|goc-nang-ha|8`
`COUNT|CT18|PRIMARY|chieu-cao-khoang-cach|8`
`COUNT|CT18|PRIMARY|ket-hop-he-thuc|8`
`COUNT|CT18|PRIMARY|cot|12`
`COUNT|CT19|MAPPED_FAMILY|147`
`COUNT|CT19|FORMATIVE_NO_FAMILY|0`
`COUNT|CT19|PRIMARY|goc-o-tam|10`
`COUNT|CT19|PRIMARY|goc-noi-tiep|10`
`COUNT|CT19|PRIMARY|nua-duong-tron|10`
`COUNT|CT19|PRIMARY|day-va-tam|9`
`COUNT|CT19|PRIMARY|tiep-tuyen-ban-kinh|9`
`COUNT|CT19|PRIMARY|hai-tiep-tuyen|9`
`COUNT|CT19|PRIMARY|tu-giac-noi-tiep|9`
`COUNT|CT19|PRIMARY|dau-hieu-noi-tiep|9`
`COUNT|CT19|PRIMARY|hai-day-cat-nhau|9`
`COUNT|CT19|PRIMARY|tiep-tuyen-cat-tuyen|9`
`COUNT|CT19|PRIMARY|chung-minh-tiep-tuyen|9`
`COUNT|CT19|PRIMARY|goc-cung|9`
`COUNT|CT19|PRIMARY|do-dai-duong-tron|9`
`COUNT|CT19|PRIMARY|cung-va-day|3`
`COUNT|CT19|PRIMARY|do-dai-cung|3`
`COUNT|CT19|PRIMARY|dien-tich-quat-tron|3`
`COUNT|CT19|PRIMARY|dien-tich-vanh-khuyen|3`
`COUNT|CT19|PRIMARY|vi-tri-tuong-doi-duong-thang-duong-tron|3`
`COUNT|CT19|PRIMARY|vi-tri-tuong-doi-hai-duong-tron|3`
`COUNT|CT19|PRIMARY|duong-tron-ngoai-tiep-tam-giac|3`
`COUNT|CT19|PRIMARY|duong-tron-noi-tiep-tam-giac|3`
`COUNT|CT19|PRIMARY|da-giac-deu|3`
`COUNT|CT20|MAPPED_FAMILY|185`
`COUNT|CT20|FORMATIVE_NO_FAMILY|10`
`COUNT|CT20|PRIMARY|nhan-dang-cong-cu|10`
`COUNT|CT20|PRIMARY|song-song-dong-dang|10`
`COUNT|CT20|PRIMARY|hai-goc-vuong-noi-tiep|10`
`COUNT|CT20|PRIMARY|noi-tiep-dong-dang|9`
`COUNT|CT20|PRIMARY|dong-dang-he-thuc-tich|9`
`COUNT|CT20|PRIMARY|tam-giac-vuong-dong-dang|9`
`COUNT|CT20|PRIMARY|tiep-tuyen-chung-minh|9`
`COUNT|CT20|PRIMARY|chuoi-suy-luan|9`
`COUNT|CT20|PRIMARY|the-tich-hop-chu-nhat|9`
`COUNT|CT20|PRIMARY|the-tich-lang-tru|9`
`COUNT|CT20|PRIMARY|dien-tich-day|9`
`COUNT|CT20|PRIMARY|doi-don-vi-do-luong|9`
`COUNT|CT20|PRIMARY|bai-toan-tong-hop|9`
`COUNT|CT20|PRIMARY|nhan-biet-tam-giac-deu|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-vuong|3`
`COUNT|CT20|PRIMARY|nhan-biet-luc-giac-deu|3`
`COUNT|CT20|PRIMARY|nhan-biet-tu-giac-dac-biet|3`
`COUNT|CT20|PRIMARY|chu-vi-tu-giac|3`
`COUNT|CT20|PRIMARY|dien-tich-tu-giac|3`
`COUNT|CT20|PRIMARY|do-luong-thuc-te|3`
`COUNT|CT20|PRIMARY|truc-doi-xung|3`
`COUNT|CT20|PRIMARY|tam-doi-xung|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-hop-lap-phuong|3`
`COUNT|CT20|PRIMARY|dien-tich-xung-quanh-hop-chu-nhat|3`
`COUNT|CT20|PRIMARY|nhan-biet-lang-tru-dung|3`
`COUNT|CT20|PRIMARY|dien-tich-xung-quanh-lang-tru|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-chop-deu|3`
`COUNT|CT20|PRIMARY|dien-tich-xung-quanh-hinh-chop|3`
`COUNT|CT20|PRIMARY|the-tich-hinh-chop|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-tru|3`
`COUNT|CT20|PRIMARY|dien-tich-xung-quanh-hinh-tru|3`
`COUNT|CT20|PRIMARY|the-tich-hinh-tru|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-non|3`
`COUNT|CT20|PRIMARY|dien-tich-xung-quanh-hinh-non|3`
`COUNT|CT20|PRIMARY|the-tich-hinh-non|3`
`COUNT|CT20|PRIMARY|nhan-biet-hinh-cau|3`
`COUNT|CT20|PRIMARY|dien-tich-mat-cau|3`
`COUNT|CT20|PRIMARY|the-tich-hinh-cau|3`

## Topic checks
`CHECK|CT13|ANGLE_PARALLEL_DIAGNOSTICS|PASS`
`CHECK|CT13|PROOF_PARTIAL_BOUNDARY|PASS`
`CHECK|CT14|PYTHAGORE_REUSE_CT18|PASS`
`CHECK|CT14|CONGRUENCE_FAMILY_DIAGNOSTICS|PASS`
`CHECK|CT14|PERP_BISECTOR_WRITTEN_GAP|PASS`
`CHECK|CT15|PERP_BISECTOR_REUSE_CT14|PASS`
`CHECK|CT15|CENTER_FAMILIES_DISTINCT|PASS`
`CHECK|CT16|PROPERTY_VS_CRITERIA_DIAGNOSTICS|PASS`
`CHECK|CT16|CT20_REUSE|PASS`
`CHECK|CT17|SIMILARITY_CRITERIA_DIAGNOSTICS|PASS`
`CHECK|CT17|SUPPORT_RATIO_BOUNDARY|PASS`
`CHECK|CT18|PYTHAGORE_CANONICAL_HOME|PASS`
`CHECK|CT18|TRIG_DIAGNOSTICS|PASS`
`CHECK|CT18|ALTITUDE_OPTIONAL_BOUNDARY|PASS`
`CHECK|CT19|TANGENT_PROOF_PARTIAL|PASS`
`CHECK|CT19|POWER_OPTIONAL_BOUNDARY|PASS`
`CHECK|CT19|CENTER_REUSE_CT15|PASS`
`CHECK|CT20|TOOL_SELECTION_NO_FAMILY|PASS`
`CHECK|CT20|SYNTHESIS_REUSE|PASS`
`CHECK|CT20|SOLID_CORE_BOUNDARY|PASS`

## Architecture
`ARCH_1|PASS`
`ARCH_2|PASS`
`ARCH_3|PASS`
`ARCH_4|PASS`
`ARCH_5|PASS`
`ARCH_6|PASS`
`ARCH_7|PASS`
`ARCH_8|PASS`
`ARCH_9|PASS`
`ARCH_10|PASS`
`ARCH_11|PASS`
`ARCH_12|PASS`
`ARCH_13|PASS`
`ARCH_14|PASS`
Meanings:
1 one primary diagnostic max per MCQ
2 learner families remain broader than diagnostic subskills
3 method/support/composite tags do not duplicate learner mastery
4 cross-topic canonical reuse remains coherent
5 generic proof competence is not fragmented into duplicate families
6 proof/synthesis MCQs are partial evidence where written proof is the real target
7 CT20 method-only tool selection remains no-family formative
8 Core-Support and optional layers do not gate Core
9 clone-family candidates are de-dup guidance only
10 written-gap requirements from S3 family PASS remain valid
11 geometry families remain actionable for remediation
12 legacy content/answers/tags/history are preserved
13 no runtime/Readiness/mastery migration is implied
14 whole-batch coverage is complete and topic-local repairability is preserved

Finally:
`OVERALL|PASS` or `OVERALL|REVISIONS_REQUIRED`
`AUTHORIZATION|CLEARED_FOR_S3_CT13_20_RECONCILIATION` or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`

If chat output would be truncated, create a Markdown artifact containing exactly the same machine-checkable lines and return that file instead. Do not omit clone/count/check lines.
