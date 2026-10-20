# Self-Learning Math — Owner direction: ONE counter source and academic-first delivery
**Date:** 2026-10-18 · **Scope:** product priority, learner evidence cutover contract and exercise-quality contract  
**State:** owner direction recorded; proposed technical implementation and QA below; **not** permission to delete arbitrary student data or activate experimental runtime without verified cutover.

## 1. Product outcome over taxonomy perfection

- The learner's first priorities are **accurate, clear, well-explained knowledge pages**, two routes into the *same* 25-topic knowledge graph (KNTT Grades 6–9 and vertical topics), useful interactive exercises, and a shared written exercise library with varied full reasoning.
- The Skill system has two conceptual **sources of skill understanding**, not two counter stores: (a) foundational curriculum skills appearing in SGK chapters/lessons, and (b) integrative, method-choice and application skills visible in written problem solving. Reuse canonical identities; allow a written problem to reference multiple existing foundational skills rather than creating a Family for every combination.
- Never classify KNTT placement based solely on prerequisite; preserve official lesson placement and separate `prerequisite_skills`.
- Do not gate ordinary reading/practice or omit worthwhile questions because an item has no `family_id`, `tags.skill`, or assessed credit. Equally, do not fabricate a Family by using a convenient grade/first-appearance heuristic; that remains an **idea for future academic review**, not an authorization.

## 2. Verified implementation problem as of 2026-10-18

Current `main`:
- `docs/assets/javascripts/learner-evidence-v1.js`: Practice `toan-thcs-practice-v1` (localStorage) stores per-item and `tags.skill` counters, hints and observed signals.
- `docs/assets/javascripts/practice-engine-v2.js`: ordinary Practice reads/writes the legacy store and uses its tags for remediation, then calls canonical/taxonomy observer hooks.
- `docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js`: a separate shadow store `toan-thcs-taxonomy-v2-evidence-v1` (localStorage).
- `docs/assets/javascripts/skill-map-v2-preview.js`: learner view computes Family trends from V2 while retaining an explicitly separated V1 counters section.
- R20 isolated `math-v2-qa-exact-ledger-r20` IndexedDB is a tested **synthetic QA prototype**, not connected to real learner Practice; its fully-fledged atomic journal is not yet a deployed replacement. R21 comparison is synthetic-only.
- Local browser `localStorage` is **per origin/browser/profile/device**, not a server-wide history that a GitHub commit can simply erase.

## 3. Simplified and decisive cutover objective

**One durable canonical event source, one projection service for progress, one learner-facing Skill presentation.** Do not retain two independent writer/counter systems as the final architecture. Inside the one source, keep evidence types distinguishable: ordinary Practice (formative), independent Core Readiness (assessment), Written self-report (self-check), and optional other lanes. **One source must never imply one blended mastery percentage.**

Minimal new-capture event: stable learner-local scope, session/presentation/attempt identity, canonical item ID + source revision, actual selected answer identity when reviewed and available, trusted source-derived correctness, assistance metadata, evidence lane, and zero/one/multiple reviewed Family references. Deduplicate repeat submissions at the event identity; count a Practice attempt once globally even if it is associated with several Families. Never credit a held/unreviewed Family or infer mastery from one MCQ.

**No-family rule:** keep the question fully visible and usable for learning and Practice; count a legitimate completed attempt at the *global Practice* level if technically verified, but **do not synthesize Family credit or mark the learner deficient for missing Family**. A separate audit can flag curriculum/practice coverage gaps.

**Avoid unnecessary historical migration:** Owner permits a deliberate fresh start for the small family/pilot audience if legacy-history reconciliation is obstructive. That is a practical *reset option*, not a mandate to destroy everybody's records. No automatic/backdated synthetic conversions, no silent overwrite, no server-wide wipe. The effective data switch must be explicit, per controlled browser/user scope, with clear data-loss explanation; optional local export before reset; remove only known obsolete Math progress keys after confirmed replacement. Do not erase unrelated English, Firebase, account, or other-site data. Do not claim remote or other-device records were erased by a GitHub deploy.

## 4. Implementation sequence — one short cutover, not a taxonomy-reconciliation program

1. **Inventory real learner consumers and writers** for V1, V2 shadow, recovery, canonical pilot, Readiness and Written. Classify each storage key as canonical destination, retained separately for semantics, retired, or unrelated. Verify normal Practice answer feedback and remediation behavior.
2. **Connect the single source to actual newly performed Practice attempts** with trusted grading and idempotent save; avoid separate V1 and V2 writes. Where a historical question lacks a reviewed stable option/source contract, keep learner Practice working and record only safely verifiable evidence; do not invent an assessed Family. Prefer minimal truthful tracking over blocking curriculum.
3. **Replace all learner-visible Skill counters and remediation reads** with projections from that source. Retire V1 Skill counter and old taxonomy shadow for live display. Show `Chưa đủ dữ liệu` for sparse or non-attributable skill evidence; never call it weak or 0 mastery.
4. **Provide intentional reset controls** for the active device, with human-readable scope and optional export; only after cutover QA. Do not tie removal of legacy keys to a page load. Fresh-start setup should not require historical cross-device V1/V2 parity.
5. Run GitHub public Math QA and **desktop + real iPad Safari** canary covering ordinary practice, repeated-click reload/dedup, hints, answer shuffle, no-family questions, changed source, quota/write failure, reload/multiple tabs, remediation, optional resetting, and separate Readiness/Written. Verify no regression to learning/navigation and no new dual-write. **Only then** authorize learner rollout/retirement and close the Skill-counter workstream. No new large independent R-number workstream unless a test exposes a concrete blocker.

Existing R38 context: of 40 reviewed R27 MCQs, 3 Grade-7 arithmetic roots `NUM02V1_142–144` are HOLD for assessed-Family links while remaining available for ordinary Practice; 37 existing-Family candidates have preliminary QA fit inspection, seven with material target/scope uncertainty. This incomplete subproject does **not** block students from practicing those questions or block one-store architecture, provided unresolved Family credit stays disabled.

## 5. Minimum academic quality contract for each topic/lesson

Every significant body of knowledge should have suitable ways for learners to:
1. **Understand theory:** concept, meaning, conditions, explanation and representative worked examples, plus common misconceptions.
2. **Practice execution:** adequate, structurally varied exercises from base to common traps, not merely quantity or near-identical numeric clones.
3. **Recognize applications/problem types:** know when and why to use the knowledge in representative forms and contextual problems, with correct units/conditions.
4. **Integrate in written solutions:** choose methods and combine prerequisite skills to develop multi-step reasoning; include full model solutions, useful selective hints and a self-check rubric.
5. **Recover and progress:** see prerequisites and suggested review/next learning without rigid linear gates or over-dense graph links.

Maintain a **KNTT Grade 6–9 coverage matrix** and a **25-topic problem-type inventory**. For each major skill/problem type record practical presence/gap in Learn (D1 theory, D2 examples), Practice (D3), Written (D4), authentic assessment relevance with declared sources (D5), remediation/help (D6). Mark P0 important omissions, P1 weak structural variety, P2 style improvements. Distinguish official KNTT Core (S1) from exam application (S3), specialist challenge (S4). Exam importance/frequency needs identified evidence, not assertions. Prefer fixing misleading/shallow coverage to inflating exercise counts. **Do not delete academically valuable exercise content merely for an imperfect Family label.**

## 6. Completion definition

**Skill-counter phase DONE** only if: (a) normal Practice and its evidence are captured through one durable canonical writer; (b) learner-facing Skill totals and remediation draw from one projection, not hidden parallel V1/V2 counters; (c) uncertain/unmapped questions continue to teach without invented credits; (d) reset (if elected) is explicit and scoped; (e) desktop and Safari canary pass; and (f) public Math QA and explicit rollout signoff have occurred.

The **next academic work**, immediately after a controlled Skill-counter cutover, is (1) strengthen the shared Written Exercise Library with structurally diverse deep anchors and (2) audit actual rendered Learn pages with screenshots **and** text/KNTT sources through NotebookLM (independent reviewer), focusing on both mathematical depth and learner experience. The NotebookLM permanent source and TEMP_ batch handoff rules remain intact.

**Protected until implementation QA and release:** no mass learner wipe, no hidden V1 history migration, no Readiness/Mastery conflation, no promotion of optional material into KNTT Core, no uncontrolled PR merge.
