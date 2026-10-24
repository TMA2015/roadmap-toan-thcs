# Toán THPT — Golden Learning Page + Design System R0
**Design ID:** MATH-THPT-DESIGN-R0-20261024  
**Owner direction:** 24/10/2026, after successful THCS R21 desktop + physical iPad acceptance.  
**Status:** DESIGN_CANDIDATE / TEMPLATE_PROTOTYPES_ONLY / NOT_S1_ACADEMICALLY_APPROVED / NO_LEARNER_DEPLOY  
**Reference:** THCS R21 visual design + CT10 R4 semantic §3/§5 tabs; durable Academic Source D1–D6, Golden Learning Architecture, separate THPT research scoping R0.  
**Surface:** An isolated four-template prototype under \`docs/qa/thpt-design-system-r0/\` (no navigation link, no account, bank, learner storage, Firebase, or production THPT curriculum).

## 0. The governing decision
**Design the learning page and its reusable components FIRST; write source-backed THPT lessons SECOND; draw diagrams that convey unique mathematical meaning LAST.** One source-backed knowledge/skill graph supports school-class navigation and topic navigation. A page is never a dump of duplicate infographic posters.

Design consistency is mandatory for typography, mathematical notation, tables, diagram labels, line thickness, color meaning, cards, callouts, tab navigation and learning links. **Educational structures remain content-sensitive:** never impose an artificial number of tabs, diagrams, proof steps or method families merely because a template has examples.

THPT is **not** a silent expansion of the THCS topic bank or learner storage. Use THPT-specific Curriculum/skill IDs and independent assessment policies. Do not present S2 chapter lists, artificial demo problems or a design prototype as verified official SGK content.

## 1. Three independent approval contracts
| Layer | Source of truth | Required before live THPT lessons |
| --- | --- | --- |
| Academic Standard | official GDPT 2018 math requirements + exact KNTT SGK/SBT for Grade 10–12 (S1), source-backed D1–D6; S2 reference and S3 authentic exam kept separate | Exact learning outcomes, assumptions, conditions, valid transformations, worked solutions, boundaries of Core/elective/THPT exam and evidence; academic review |
| Learning Architecture | one canonical knowledge graph; two navigation paths; Learn/Core → Practice → independent Readiness; approved Written lane | Each method/problem type links to an existing skill and optionally canonical approved Written exercise; formative hints never enter independent Readiness |
| Visual Design System | versioned tokens/components + **one canonical page route** + profile-specific templates | All typography, table, formula, SVG, image caption, tabs, mobile/print/dark mode and navigation are checked against the same tokens; no per-topic bespoke CSS without template change |

**Version policy:** use \`thpt-design-system:0.x\` until four true S1-reviewed pilot lessons have been accepted. \`v1.0\` is NOT granted merely because the demo renders. Any new component requires design-system change, tests, a version bump and pilot re-review **before** authoring with it.

## 2. Canonical page anatomy (same learner experience, flexible content)
0. **Visible orientation above fold**: topic name, Grade/strand/Core-vs-elective, role and 2–4 measurable goals, 1-line prerequisites/bridge, small knowledge map. These are visible without opening a tab. Do not consume a whole viewport with decorative header.
1. **§3 Kiến thức cốt lõi:** one horizontal tab group; **groups count and names depend on the actual content**. Inside each tab use a pedagogically meaningful sequence: concept/definition → validity conditions → relation/formula/theorem with interpretation → meaningful small diagram or table if useful → representative worked example → common trap. A topic may have 2, 3, 5 or more concept groups with no universal count cap; concise labels plus clear selected/keyboard/focus state.
2. **§4 Liên hệ/mạch kiến thức:** prerequisite, connection to preceding concepts, and next topic; compact horizontal if readable, not an infographic poster.
3. **§5 Các dạng bài/phương pháp:** SECOND INDEPENDENT content-derived horizontal tab group. Each type gives recognition signs, valid assumptions, method choice, complete dependent worked steps with conclusions, one or more differentiated examples, common errors and **verified** contextual Practice/Written targets. Do not confuse two alternative methods (side-by-side) with steps that must be performed in sequence.
4. **§6 Ứng dụng và kiểm tra liên hệ:** authentic/real-world applications only when sourced; THPT assessment/exam role by evidence/year and policy. Unlike THCS do not label these as compulsory Entrance10. Future graduation-exam practice uses versioned official evidence and its formats, not unverified recurring claims.
5. **§7 Lỗi thường gặp → §8 Practice → §9 Independent Readiness → §10 Roadmap/Next:** full tutorial is not repeated as a bank. Helpers/hints are formative; Readiness is separately scored/no in-item guidance; Written remains separate self-checked reasoning.

Not all ten labels must be visualized as ten equally weighted boxes. Top orientation and §3/§5 form the strong reading spine. Other parts are compact and appropriately placed.

## 3. Fixed semantic typography tokens — no per-topic arbitrary sizes
**Single parent font:** system-ui, -apple-system, "Segoe UI", sans-serif; math formulas use existing site MathJax/TeX on the eventual MkDocs lesson. No paid or downloaded fonts. Table and paragraph copy MUST take the same \`--thpt-body\` token unless explicitly a semantic caption/metadata label. Captions are never used for essential mathematical assumptions.

| Token/role | PC and 820px iPad | 390px phone | Semantics |
| --- | --- | --- | --- |
| \`--thpt-title\` H1 | 32px (range 30–34) | 27px | only one page title |
| \`--thpt-section\` H2 | 24px | 22px | top-level learner section |
| \`--thpt-concept\` H3 | 21px | 19px | actual concept/method family |
| \`--thpt-subheading\` H4 | 18px | 17px | conditions/examples |
| \`--thpt-body\` | **17px** | **16px** | body, table cells, list text, ordinary card copy |
| \`--thpt-formula\` | 21px | 19px | primary displayed formula; dense align can wrap/scroll separately |
| \`--thpt-label\` | 15px | 14px | tab labels only, not learning content |
| \`--thpt-caption\` | 15px | 14px | figure note, footnote, ancillary data only |

Line height body 1.65–1.7; headers ~1.35–1.45; touch targets at least 44px; paragraph reading width bounded (approx 76 characters) while figures/tables may use the full learning column. Font overrides must be declared as a reusable **role** and tested across table, card, tabs and diagram contexts. Do not use em-coded math monospace code for display equations.

## 4. Meaningful color, not decoration
| Semantic role | Light | Dark mode | Rule |
| --- | --- | --- | --- |
| Active navigation, important link, selected tab | \`#3452CC\` | legible lighter blue, tested | also show underline/shape, not color alone |
| Body/heading ink | \`#1F2D45\` | soft off-white | contrast and hierarchy |
| Knowledge definition/formula key | surface \`#F0F4FB\`, thin \`#DAE4F4\` border | adapted muted slate | subtle, never full-page rainbow cards |
| Conditions/misconceptions | \`#C78C2D\` accent with near-white warm surface | muted warm surface | words explicitly say *Điều kiện / Lỗi thường gặp* |
| Secondary information | neutral borders/paper | neutral slate | use less saturation than actionable elements |

No per-topic brand palette, gradients, decorative character portraits, repeated logo/emoji labels. Support keyboard focus, light/dark, contrast, print, and reduced motion. Selected tabs retain minimum 44px target and a low-profile horizontal overflow indicator.

## 5. Visual and infographic contract (applies to every Algebra/Function/Geometry/Data lesson)
- **Priority:** real mathematical diagram that conveys shape, coordinate relation, change, distribution, sample space, vector or problem-solving decision that prose/table alone shows poorly. No obligatory infographic quota. A label-packed duplicate summary infographic is discarded or condensed into text/table **after auditing unique information**.
- Preferred **SVG with responsive viewBox**, stable aspect ratio, no stretched picture and no tiny entire-page poster. For genuine photographs use explicit evidence/rights and a meaningful modelling purpose.
- Geometry: mathematically consistent coordinates, true angle/parallel/congruence markings, not hand-wavy sketches presented as proofs. Graphs: correct axes/origin/units/scale/key data and signs; distributions: real counts and source/legend. No “decorative chart”.
- **Image design tokens:** base viewBox 640×400 or 640×420, visible figure at typical 560–640 CSS px desktop and within parent width on tablet/phone; primary line ~2.4 SVG units, helper 1.6–1.8, anchor/point 4–5 unit radius, **SVG labels 20–22 units** on 640 reference (roughly comparable to readable caption/body at ordinary embed size). Text under image 15px PC/14px phone, outer border 1px neutral, padding 12–16px, corner radius 10–12px. Smaller displayed figures REQUIRE larger internal labels/stroke scaling instead of squeezing caption to 10px.
- Labels use same typeface/ink; math variables can be serif italic **consistently** when mathematical convention demands; distinction is not inconsistent UI typography. Color line meanings standardized (main line ink, construction gray-dashed, axis gray, selected/result blue, caution amber) and explained when necessary. Diagram tokens must be measured at actual rendered size, not only raw SVG.
- Figure should sit **beside** tightly coupled explanation when enough horizontal width; phone stacks cleanly. Never convert dependent proof steps into two-column disconnected cards.
- Captions must state what the figure *adds* and any mathematical applicability constraints; alt text describes relation, not “math image”; ensure equations/definitions remain accessible outside the SVG. Print should include all diagrams/tabs and readable captions.

## 6. Four profile templates (common shell; special slots differ)
**A – Đại số & phương trình:** definition/conditions, equivalent-vs-implication transformations, formula, worked calculation **with full logical steps**, cases, alternative approaches (compare only if parallel), domain/roots final check. Core concepts and method tabs separately, no fabricated examples without S1.
  
**B – Hàm số, đồ thị & giải tích:** relationship of formula ↔ selected points/table ↔ graph ↔ behavior; axes/labels/scales clearly specified; domain/range/parameter conditions; graph plus adjacent explanation at tablet+ where readable; tab per actual concept/method family.

**C – Hình học phẳng, không gian & vectơ:** labeled mathematically valid construction, given/conclusion, statement and assumption of theorem, proof narrative, auxiliary construction and why it helps; mark true perpendicular/parallel/congruence relations. Diagram and concise theorem can be side-by-side; **proof is linear**.

**D – Thống kê, xác suất & mô hình hóa:** source data/units/experimental setup, table/graph/tree only if warranted, population vs sample/independence/equiprobability assumptions, calculation, interpretation, limitation and appropriate model validation.

The demo uses small **illustrative** mathematical examples ONLY to exercise rendering. No KNTT S1, difficulty or exam alignment is certified by these demo examples.

## 7. Component registry / update-before-use rule
Approved structural components: \`orientation\`, \`goal-list\`, \`prerequisite-strip\`, \`knowledge-map\`, \`knowledge-tabs\`, \`method-tabs\`, \`definition\`, \`formula\`, \`condition\`, \`theorem\`, \`worked-example\`, \`step-flow\`, \`compare\`, \`diagram\`, \`data-table\`, \`figure-caption\`, \`insight\`, \`warning\`, \`practice-links\`, \`written-link\`, \`roadmap-next\`. Base typography/tokens centrally defined. A component may be optional by mathematical relevance but may never be ad-hoc styled.

**New need procedure:** (1) record a justified missing educational need; (2) extend component schema and CSS/design tokens with one example on each affected template; (3) add responsive/browser/print/a11y QA; (4) obtain design review and version increment; (5) only then allow lesson authoring to use it. **Fail closed** on unknown \`component.type\` or unsafe CSS/image sizes.

Every component requiring mathematical assertions also carries S1 source/evidence pointers at real-lesson time. No academic source → mark \`SOURCE_PENDING\`, not \`APPROVED\`. No fake Practice/Written links: a missing exact mapping is an honest non-link state, never \`href="#"\`.

## 8. Before any live THPT content
1. Validate the official 2018 Toán learning-outcomes source and **all relevant KNTT SGK Grade 10–12 textbooks** at lesson level; record version/edition. S2 chapter list is orientation, not S1.
2. Build and review a separate THPT Master Plan, grade/course map, canonical topic IDs, prerequisite bridge 9→10, new skill graph and source-backed problem-type catalogue. Define elective vs required material.
3. Render **four genuine S1 pilot lessons**, each representing A/B/C/D with both structural accuracy and learner task navigation. Real content may expose missing component requirements; update the design system FIRST.
4. Audit real browser 1365px, 820px, 390px; dark, keyboard/focus, viewport overflow, MathJax, SVG text scale, print all tab panes, working canonical links. Physical iPad Safari owner acceptance is a separate gate.
5. Grade-independent learning evidence: Practice formative, Readiness independent, Written self-review remain segregated. No implicit THCS storage migration, Firebase/Auth launch, or paid API.
6. Only after successful content/design/source gates: owner approval to lock \`THPT Design System v1.0\` and begin a constrained Grade10 production slice.

### Current milestone output
- This document = **R0 design contract, not final production academic curriculum**.
- \`docs/qa/thpt-design-system-r0/index.html\` and CSS/JS = four unlinked **interactive visual template proofs**.
- \`scripts/test-thpt-design-system-r0.js\` + browser QA = first fail-closed design guard, no access to user progress.
- A Draft PR only; no THPT course link in site navigation, no changes to THCS Knowledge pages or student data.

**Do not advance to mass Grade10 authoring unless the four actual content/source-backed pilots have passed the above gates.**
