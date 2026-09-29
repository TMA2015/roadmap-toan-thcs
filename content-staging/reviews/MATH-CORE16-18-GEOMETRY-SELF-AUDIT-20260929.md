# CĐ16–18 geometry Core: source-locked, risk-proportional self-audit

Date: 29 September 2026. Review metadata: **SELF_AUDITED / SOURCE_LOCKED_BOUNDED_SELF_AUDIT**, *not an independent NotebookLM review*. This is limited to 15 foundational lectures and one explicitly assessed square-recognition question. Diagram-sensitive, composite or contested geometry requires an independent round before promotion.

## Exact source baseline and data invariants

| Topic | Full knowledge source Git blob | Original 15-item micro bank blob |
|---|---|---|
| 16 Tứ giác | \`b2c76f908ac4679ce139b1f9ad95ad139e74261b\` | \`460dbc0f10a2655717011a94733449b0df8c6bc0\` |
| 17 Thales và đồng dạng | \`2663753568ad19bbf9f168c1b3b703fd24599395\` | \`01c8326343d050959aca0d98d7042e463c993612\` |
| 18 Hệ thức lượng | \`eca50562caaff50a89593a434158618137e9d217\` | \`a4a3335b36b51cb6fbe410aab1e72a7fdb1de36b\` |

Source paths: \`docs/kien-thuc/{16-tu-giac,17-thales-dong-dang,18-he-thuc-luong}/index.md\`. Original 45 micro questions, IDs, roles, answers, tags, explanations, hints, and ordering are unchanged. Five copied lecture source IDs in each topic are the *original* Base–Trap–Apply questions per card; the new fourth item has its own audit provenance, not a retroactive part of an earlier teaching review. Original Practice Room, readiness tests, images/SVGs, navigation anchors and learner storage are unchanged. The new pages link to original full-length lessons and existing diagrams.

## Item-by-item lecture check

| Card | Source | Worked example and verified assumption |
|---|---|---|
| geo16-core-1 | §3.1–3.2A | Trapezoid ABCD with AB∥CD and side midpoints, AB=6, CD=10 → midline 8. Distinguish trapezoid midline from triangle midline. The project's explicit **at least one** parallel pair definition is preserved. |
| geo16-core-2 | §3.3 | Parallelogram from diagonals AC/BD meeting O with OA=OC=4 and OB=OD=3; neither equal diagonals nor perpendicularity given. |
| geo16-core-3 | §3.4 | *Given parallelogram* plus AC=BD=10 → rectangle, OA=5. Equal diagonals on arbitrary quadrilateral alone are not a sufficient rectangle test. |
| geo16-core-4 | §3.5 | *Given parallelogram* plus AC⊥BD → rhombus. Perpendicular diagonals alone can occur in a kite. |
| geo16-core-5 | §3.6–3.7 | *Given rhombus* and AC=BD → square. Never infer square solely from equal diagonals. |
| geo17-core-1 | §3.1–3.2 | D∈AB,E∈AC, AD:DB=3:2, AE:EC=6:4 → parallel DE∥BC by converse Thales; positions and denominator positivity stated. |
| geo17-core-2 | §3.3,3.6, dạng 3 | M,N midpoints of two sides, BC=14 → MN=7 and parallel; separate angle bisector AD with AB:AC=2:3 → BD:DC=2:3. Do not assume bisector is median. |
| geo17-core-3 | §3.4 | ΔABC∼ΔMNP, AB=6/MN=9, AC=8 → MP=12; A↔M, B↔N, C↔P preserved. |
| geo17-core-4 | §3.5 | SAS similarity uses AB/DE=AC/DF=2/3 **and included** ∠BAC=∠EDF; order ΔABC∼ΔDEF. |
| geo17-core-5 | §3.4/3.5A/3.6, dạng 5 | BC/EF=2/3 and BC=10 → EF=15. Area-ratio \(k^2\) is background only; Core item tests side ratio. |
| geo18-core-1 | §3.1 | Three sides 8,15,17: \(8^2+15^2=17^2\) → right triangle and largest/hypotenuse=17. |
| geo18-core-2 | §3.3–3.4 | Right at A, AB=5, AC=12, BC=13: for angle B, AC opposite, AB adjacent, BC hypotenuse → sin B=12/13, cos B=5/13. |
| geo18-core-3 | §3.3–3.4 | Right at A, AB=9, AC=12, for angle B tan B=12/9=4/3 and cot B=9/12=3/4. |
| geo18-core-4 | §3.3/3.4A/3.6 | Right at A, BC=20, B=30°; opposite AC=20sin30°=10. |
| geo18-core-5 | §3.5–3.6 | Eye height 1.5 m; horizontal distance 20 m, angle of elevation 45°, same base elevation → tower height 20tan45°+1.5=21.5 m. |

Each example includes complete independent problem and steps, misconception, recall, exact source path/sections. No worked example reproduces an existing micro question verbatim. The problem **states rather than assumes from an illustration** geometric facts such as parallel, perpendicular, midpoint, similarity order, right angle, horizontal distance, or observer height. Existing full-lesson graphics are not separately image-certified by this packet, and do not generate assumptions.

## One gap, not artificial bulk content

- Original CĐ16 fifth Core card declared \`hvuong-dau-hieu\` without a primary-assessed question. New \`GEO16MICRO_016\`, only after original 001–015 and after Core5's Base–Trap–Apply trio, assesses **exactly** \`hvuong-dau-hieu\`: ABCD **given a rectangle** and AB=BC (adjacent) → square. Options: square / rhombus-but-not-rectangle / not-rhombus / cannot conclude. Unique correct choice index 0. Two scaffold hints and post-answer explanation; \`hcn-tinh-chat\` and \`quan-he-bao-ham\` supporting, not scored again.
- CĐ17 and CĐ18 original 15 items already cover all their declared skill IDs. Keep both banks fully untouched.
- After addition CĐ16 13/13 declared skills, CĐ17 12/12, CĐ18 11/11: **36/36 skill-card opportunities**, not mastery levels. Counts 16/15/15 = 46 questions.

## Curriculum and release safeguards

- The CĐ16 source uses inclusive definition of trapezoid (“at least one pair”), retained across the teaching copy. Distinguish property from sufficient test and note required parallelogram/rectangle/rhombus assumptions.
- For CĐ17, do not swap corresponding sides or use unsourced diagram measurements. Circle, chain proofs, and multi-step similarity remain outside this batch.
- CĐ18 includes the height-to-hypotenuse relations in the full knowledge article, but they remain an independent \`Entrance10\` non-gating extension in the current \`topic18-learning-workspace.json\`. Core uses Pythagore and basic right-triangle trigonometry, not an automatic extension. Inverse trig calculations require degree mode.
- Strict source Git blob checks, original micro JSON reconstruction, exact one assessed skill per question, full teaching fields, step math cross-checks, existing golden/assessment, release and responsive/phone browser QA. Check Q4 label and primary-only increments with no phantom attempts from opening/closing modals. Do not deploy before all workflow PASS.
- Owner iPad/desktop acceptance is a separate post-release gate. CĐ19–20 circle and composite geometry will be a separate higher-risk scholarly review tranche.

Status: candidate; the document itself does not prove CI, release or independent academic approval.
