# Self-Learning Math — Owner-confirmed product UX direction (2026-10-23)

**Record ID:** MATH-OWNER-DIRECTION-UX-PORTAL-20261023  
**Kind:** OWNER_CONFIRMED_DIRECTION / NOT_UI_DESIGN_APPROVAL / NO_DEPLOY / NO_NEW_COURSE_CONTENT  
**Owner direction supplements:** `PROJECT_OWNER_DIRECTION_20261021.md`, `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`, permanent NotebookLM review rules, Golden Learning Architecture, Written Library Contract. The newer Owner instruction **prioritizes designing a stronger THPT knowledge presentation before mass authoring**, then considers upgrading THCS. It does **not** authorize a THCS redesign right now or supersede assessment evidence boundaries.

## 1. What the Owner decided (binding direction)

1. **Reuse the existing website learning architecture and interactions.** The two-route system (cross-grade topical spine and KNTT school/grade path), the current **three interactive contexts** (topic-oriented guided Practice; lesson KNTT Core/Micro guided learning; independent no-hint Readiness) and the on-paper Written Library remain. Keep the underlying approved navigation and behavior; change only where a real learning/usability gain can be demonstrated. No automatic new feature scope from AI consultation.
2. **Extreme clarity, low friction.** The purpose of each area must be obvious to a learner and accessible on PC/iPad. The content graph may be complex, but the learner sees a small number of simple choices. Do not introduce extra learning modes/tabs just because they were suggested by third-party AI.
3. **Knowledge pages are the key design opportunity for THPT.** The existing THCS knowledge pages have weaknesses in reading flow/layout and should **not** be copied as-is. Establish a durable, consistent knowledge-page design system **before** large THPT content authoring. After real THPT use and owner acceptance, use the demonstrated better system to upgrade THCS knowledge presentation without losing source content.
4. **Visual standard across curriculum:** font hierarchy, Vietnamese/math readability, coherent colors, graphs/diagrams/image styles, page width, spacing, examples and call-to-action placement must be specified and checked. Readability takes priority over décor.
5. **Future outer site hub:** after expansion, entry route first offers **Toán THCS**, **Toán THPT**, **SAT/ACT**. Future **Logic** can be added as an option. The Owner typed "PTTH" and "SAT/ATC" in shorthand; normalized UI labels are **THPT** and **SAT/ACT**. This is a future product structure request, not immediate authorization to replace the active THCS homepage without QA.
6. **Third-party AI suggestions are nonbinding references.** Gemini, Google, NotebookLM proposal packets can influence a decision **only** after comparing against SGK S1, current owner-approved learning architecture and demonstrated benefit; do not treat authored drafts as release PASS.
7. **Existing assistant context:** GitHub Pages/MkDocs, free-first and small family/group; **Gemini tutor already has an existing Firebase AI integration** in `docs/assets/javascripts/firebase-gemini-v1.js`, `firebase-gemini-config.js`, `floating-ai-tutor-v1.js`. Preserve existing Tutor behavior and assessment boundaries; do not authorize an additional provider, paid API or automatic OCR/handwriting grading on the basis of external sample prompts.

## 2. Explicitly not authorized by this direction

- No alteration of existing THCS routes, CSS, learning cards, published nav or JS.
- No rewriting/deleting the 11-section academic source content, even when some sections may be visually collapsed or summarized in future learner UI.
- No new mandatory assessment timer, hard mastery gate, automatically assigned credit, changed threshold, or learner-data migration.
- No redesign via unchecked global CSS selector changes.
- No new SAT/ACT exam-mode engine, login barrier, hosting product, Firebase infrastructure or paid API.
- No course expansion, THPT question set or SGK page reproduction without independent source and content review.

## 3. Separate approval boundaries

| Layer | Current status | Evidence needed before implementation |
| --- | --- | --- |
| Owner product philosophy | **CONFIRMED** (this record) | None to document |
| Actual typography/layout/color/component specifications | PROPOSED | Owner visual acceptance after a real educational sample page preview |
| THPT Core topic/lesson content | RESEARCH | 79-lesson S1 + academic audit + Owner release decision |
| New site entry hub | PLANNED | Routing/backward-compatibility design, functional QA and Owner UX acceptance |
| THCS knowledge page migration | LATER | THPT layout acceptance, content parity and safe regression QA |
| Independent Readiness Grade9 PR #565 | SEPARATE | Dedicated explicit THCS release/CI/learner QA gate |

## 4. Summary

**Protect what works; improve how knowledge is understood and used.** First author a **design contract and real-page prototype** (prefer `G10 KNTT Ch.VI/Bài16` as pedagogical test subject, not new released lesson), run readability/academic and iPad/PC review, then decide whether to implement on website. Meanwhile existing THCS learner routes remain intact.
