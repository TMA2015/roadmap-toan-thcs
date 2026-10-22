# Core19–20: geometry and measurement academic audit scope (R0)

Date: 2026-09-29. Status: **DESIGN / AUDIT SCOPE ONLY**, not academic PASS, not authorized question bank content, not production release. Parent: owner has accepted production CĐ13–15; CĐ16–18 has passed GitHub CI and Pages release; real-device owner acceptance CĐ16–18 is not yet documented.

## Exact source lock

- Current main parent commit: \`8a13c6c2f076fe360ada6bbaf51d09997e538a4c\`.
- CĐ19 lesson: \`docs/kien-thuc/19-duong-tron/index.md\`, Git blob \`75c9baa052c1ef91bee54e65edcb3dee513007d2\`.
- CĐ19 Core map: \`docs/assets/data/curriculum/topic19-learning-workspace.json\`, Git blob \`240e6622a22a98105555f6924006f10b3c400cdb\`.
- CĐ19 original 15-question bank: \`docs/assets/data/practice/19-duong-tron-micro-v1.json\`, Git blob \`91e61257efa72ef0691eb5db1af42c7b2cd287ff\`.
- CĐ20 lesson: \`docs/kien-thuc/20-hinh-hoc-tong-hop/index.md\`, Git blob \`8a279134ebf5e2f3083d56783d2fdd095be78f18\`.
- CĐ20 Core map: \`docs/assets/data/curriculum/topic20-learning-workspace.json\`, Git blob \`774997cd9ac4d2efc1c53c17c0de48e6fcdba497\`.
- CĐ20 original 15-question bank: \`docs/assets/data/practice/20-hinh-hoc-tong-hop-micro-v1.json\`, Git blob \`d61845552c9a484ab9b220606ff20c9a9e6a7046\`.
- References: permanent Math Master Plan, 25-topic vertical spine, KNTT Core/Support/Entrance10/Challenge boundaries and existing source-provenance/risk-tier policy. This R0 is a review plan, not a replacement for these documents.

## Factual coverage snapshot

CĐ19 has five Core cards, fifteen original micro items and **two** declared skills without a dedicated formative question: \`do-dai-duong-tron\` in geo19-core-1; \`dau-hieu-noi-tiep\` in geo19-core-4. Existing 15 IDs stay immutable. Proposed additions (new IDs only) would bring it to 17, subject to the detailed R1 check.

CĐ20 has five unusually broad Core cards and **fourteen** missing declared skill opportunities, not an excuse to insert fourteen superficial questions into two overcrowded cards:
- geo20-core-1 missing six: \`nhan-biet-hinh-vuong\`, \`nhan-biet-luc-giac-deu\`, \`nhan-biet-tu-giac-dac-biet\`, \`chu-vi-tu-giac\`, \`do-luong-thuc-te\`, \`tam-doi-xung\`.
- geo20-core-2 missing five: \`the-tich-hop-chu-nhat\`, \`dien-tich-day\`, \`doi-don-vi-do-luong\`, \`the-tich-lang-tru\`, \`nhan-biet-lang-tru-dung\`.
- geo20-core-3 already covers its three declared skills.
- geo20-core-4 missing three: \`dien-tich-xung-quanh-hinh-tru\`, \`nhan-biet-hinh-non\`, \`the-tich-hinh-non\`.
- geo20-core-5 already covers its three declared skills.

The broad CĐ20 title includes *hình học tổng hợp*, but its Core cards primarily cover cross-grade measurement and solids. Existing full lesson §3.1–3.5 teaches synthetic geometry as strategic **application**, not a license to gate advanced proof chains as grade-6 geometry. Preserve the vertical-spine dependency links and explicitly separate measurement Core from multi-step Entrance10/Challenge.

## Proposed structural decision for review (not implemented)

CĐ19: retain five cards and build five card-specific teaching copies after source review. Append exactly two **individually assessed** targeted MCQs, one calculating circumference \(C=2\pi R\) and one checking a sufficient cyclic-quadrilateral criterion. For the latter, use a well-specified *nondegenerate* convex quadrilateral and opposite-angle sum \(180^\circ\), or an exact same-side-of-chord condition; never use an unspecified sketch as proof. Validate labels, answer uniqueness and all distractors.

CĐ20: do **not** use a fixed five-card/three-item assumption. First review a revised pedagogical breakdown that does not create a 9-item or 8-item beginner card: distinguish foundational 2D geometry/measurement, symmetry, rectangular boxes/units, right prisms, regular pyramids, cylinder/cone and sphere. A possible design would increase number of Core learning cards **within CĐ20** without adding a 26th top-level topic. Evaluate card count and grouping on actual grade 6–9 KNTT textbook content and source inventory; keep stable top-level topic ID and old question IDs. Original 15 questions must remain mapped to a single stable card/skill/evidence identity unless a separately audited non-migrating route/alias plan is documented. An expanded card map cannot silently remap historic question/card IDs.

## Geometry-specific academic review questions

1. Circle chord theorem: the converse "diameter through midpoint of chord perpendicular" requires a chord **not itself a diameter**. Arc names need minor/major distinction and same-circle assumptions.
2. Position of two circles: verify all five cases with \(d,R+r,|R-r|\); distinguish disjoint internally and concentric coincidences, nondegenerate radii.
3. Inscribed angles: identify the exact intercepted arc; cyclic quadrilateral criteria must state convexity or positional condition where needed. Distinguish *property* vs *converse sign*.
4. Circumcenter vs incenter: equal distances to three **vertices** vs perpendicular distances to three **side-supporting lines**; a circle tangent to sides is not the circumcircle.
5. Arc length \(n/360\cdot2\pi R\), sector area \(n/360\cdot\pi R^2\), annulus \(\pi(R^2-r^2)\), \(R>r\): check radius vs diameter, degrees, units and distractors.
6. Measurement: distinguish lateral surface/total area/base area/volume; pyramid's slant height (apothem) vs perpendicular height; cylinder/cone/sphere formula dimensions.
7. Symmetry and solids: coordinate-free definitions must not rely on a perspective picture; specify exact regular polygon and axis/center assumptions. True squares are a subtype of rectangles/rhombi, not mutually exclusive.
8. Full lesson figures / SVG: verify visible labels, geometrical perpendicular/parallel claims, and mobile fit where a figure becomes evidence. A verbal micro problem without attached diagram must be fully specified by text.

## Review and release protocol

**R1 NotebookLM independent review recommended for CĐ19's five lectures and both newly authored geometry items, and for CĐ20 revised card taxonomy and representative problem types before mass authoring.** Prepare a human-readable TXT (not JSON) containing the exact source passages, candidate teaching copies and all options/keys/explanations. Put it in temporary notebook sources; keep permanent baseline sources unchanged. Reconcile all REQUIRED corrections in R2, and record reviewer verdict plus exact reviewed Git source/blob and packet ID. Simple arithmetic follow-ups may use documented bounded self-audit *after* the core diagram/theorem assumptions are reviewed.

Do not report 100% coverage as mastery. Preserve existing questions/attempts and assessment policies, previous topics CĐ04–18, six-group +25-topic navigation, and independent pages. Require source-locked tests, strict build, desktop/phone/tablet modal QA, and actual successful GitHub Pages output. Owner real-device acceptance remains separate. **No production deployment from this audit-scope PR.**
