# Geometry CĐ13–15 — source-locked bounded self-audit

Date: 2026-09-29. **Review status SELF_AUDITED**: not an independent NotebookLM review or independent academic PASS. Current KNTT project lessons and confirmed geometry Core coverage map are the curricular references. These items test explicit, basic relations; escalate any diagram-dependent ambiguity, multi-step theorem reversal, or conflict with KNTT. Keep this packet available for later independent NotebookLM audit of the geometry tranche.

## Sources and invariants

| Topic | Frozen full-lesson source Git blob | Original 15 micro bank Git blob |
|---|---|---|
| CĐ13 | \`87808197120ef356c7f839cb8322f307ea32eb15\` | \`566cd1e0f1e7e873b1ef74afe3617a3792d0cd62\` |
| CĐ14 | \`a2743c1cdaff5d072ae98b706f63fa29c23a2654\` | \`130a12a631f676c43010ecc8817c01f6dde2e455\` |
| CĐ15 | \`5bff7b5e5dca04ad7f2288e31442d7536491f386\` | \`9e36e342ede18aa3317bb3d7e00f365fd1217b87\` |

Actual files: \`docs/kien-thuc/{13-goc-va-duong-thang,14-tam-giac,15-duong-dong-quy}/index.md\` and their same-slug \`docs/assets/data/practice/*-micro-v1.json\`. All 45 original questions, IDs/keys/options/tags and ordering are unchanged, including CĐ15 which has no new questions. The first three \`source_question_ids\` of every teaching card remain the original Base–Trap–Apply items; newly appended coverage items do not replace source citations. Prior CĐ04–12 source, learner evidence, practice and readiness schemas are untouched.

## Fifteen teaching cards (exact assumptions and independent check)

| Card | Source sections / worked example check |
|---|---|
| geo13-core-1 | §3.1: A–O–B with AO=OB=3 cm → two rays OA, OB opposite, O midpoint AB; both location and equality required. |
| geo13-core-2 | §3.2–3.6: Ox/Oy opposite and Oz between, xOz=65° → zOy=115°; pair adjacent supplementary and small angle acute. |
| geo13-core-3 | §3.7–3.9: *Given parallel a∥b*, one same-side-interior angle 112° → paired angle 68°, not 112°. Recognizing relative positions alone never implies parallel. |
| geo13-core-4 | §3.8–3.11: distinct a,b perpendicular c → a∥b in the same plane; Euclid exactly one parallel through exterior M. Property and converse not mixed. |
| geo13-core-5 | §3.12: a∥b,c⊥a as *given* → c⊥b by property; diagram not evidence. |
| geo14-core-1 | §3.3/3.5/3.6/3.6A: angles 50°,60°,70° → BC<AC<AB. Opposite side, not adjacent side. |
| geo14-core-2 | §3.6A/3.7: P on perpendicular bisector AB and P≠its midpoint M → PA=PB without claiming P midpoint. |
| geo14-core-3 | §3.8/3.8A: AB=DE, BC=EF, CA=FD → ΔABC=ΔDEF (SSS), B↔E. |
| geo14-core-4 | §3.8/3.8A: AB=DE, AC=DF and included ∠BAC=∠EDF → SAS; written corresponding order. |
| geo14-core-5 | §3.8: right at A,D; BC=EF=13 hypotenuse and AB=DE=5 leg → congruent by hypotenuse–leg; right-angle precondition stated. |
| geo15-core-1 | §3.1: AM=18, G centroid → AG=12, GM=6, and G between A,M. |
| geo15-core-2 | §3.2: right triangle at B: altitudes along AB,BC intersect at B → H=B. |
| geo15-core-3 | §3.3: I interior and on angle bisectors of A,B → equal perpendicular distances to *supporting lines of sides*, not IA=IB=IC. |
| geo15-core-4 | §3.4: right at A, BC=10 → circumcenter midpoint BC, all OA=OB=OC=5. |
| geo15-core-5 | §3.5/3.6A: equilateral triangle has coincident G,H,I,O, not every triangle. |

The existing infographic SVGs and lesson drawings remain untouched; the standalone Core explicitly links to the complete lesson's figures. The worked problems are fully specified in words and symbols, without requiring the learner to guess lengths/equalities from an illustration. Do not claim the full-lesson infographic is itself a geometric proof or a per-item geometry diagram.

## Nine targeted new question checks (one assessed skill per item)

| New ID | Core | Assessed skill | Unique answer and false alternatives |
|---|---|---|---|
| GEO13MICRO_016 | 13-1 | tia | OA: root O, through A, one infinite direction. Segment/line/reversed origin wrong. |
| GEO13MICRO_017 | 13-1 | tia-doi | A–O–B: OA and OB opposite; other choices different origins. |
| GEO13MICRO_018 | 13-1 | doan-thang-do-dai | M between A,B, AM=4,MB=7 → AB=11 cm; 3,28,7 false. |
| GEO13MICRO_019 | 13-2 | do-goc | Oz interior, xOy=110°, xOz=35° → zOy=75°, not 145,55,35. |
| GEO13MICRO_020 | 13-2 | phan-loai-goc | 125° strictly 90°–180° → obtuse, not acute/right/straight. |
| GEO13MICRO_021 | 13-2 | goc-phu-bu | Complementary pair 90°, 34° → 56°, not supplementary 146°. |
| GEO13MICRO_022 | 13-2 | nhan-dang-goc-dac-biet | Ox and Oy opposite, Oz between → xOz, zOy *adjacent supplementary* from relative position and sum. Not vertical/corresponding/complementary. |
| GEO14MICRO_016 | 14-1 | so-sanh-canh-goc | Angles A45/B60/C75 → AB longest (opposite C). Others false. |
| GEO14MICRO_017 | 14-2 | cach-deu-dinh | P on perp bisector AB and PA=6 → PB=6; P need not be midpoint nor lie in segment AB. |

Four options unique each; correct answer index 0; two scaffold hints and post-answer explanation; \`tags.skill\` singleton; support tags (if any) do not affect learner scoring. Original source 45 unchanged, no ID migration. Final micro totals CĐ13 22, CĐ14 17, CĐ15 15; dedicated skill-card opportunities 21/21, 13/13, 11/11 (45 total), **not a mastery score**. KNTT/Extension boundaries unchanged.

## Release gates

1. Independently verify original 15-item snapshots, source Git blobs, all fifteen lecture fields and source_sections, 9 unique appended IDs, 45 declared/assessed skill opportunities, geometric assumptions and answer distractors. Code validation does **not** replace human geometry critique.
2. Existing geometry manifest, source-bank, readiness and Core/Extension tests must still pass; update only legacy test expectations that incorrectly fixed 15 micro/3 per card.
3. Full 25-topic route smoke test, 13–15 four-stage step navigation, five stable Core cards, both modals, Q4–7 pager and phone overflow, no phantom attempts on open/close; check single primary evidence increment on answer.
4. Strict MkDocs build, PR QA, GitHub Pages deployment and verification of actual gh-pages output. Owner iPad/desktop review is separately pending after deploy.

Status: candidate until exact PR CI and deploy succeed. The harder CĐ16–20 and complex circle/synthetic diagrams need separate, risk-tiered independent review where appropriate; no blanket automatic source inheritance.
