# Self-Learning Math — Owner product direction and workflow agreement

**Confirmed by Project Owner:** 2026-10-21.  
**Kind:** Durable product direction and collaboration decisions, **not** an academic source verdict, deployment approval, question authoring instruction, or a replacement for Master Plan v1.2.1.  
**Read together with:** `01_TOAN_THCS_MASTER_PLAN_v1.2.1_PROJECT_SOURCE.md`, NotebookLM rules v1.2, Golden Template and Written Library Contract v1. Repository **main** determines actual implementation state.

## A. Owner-confirmed product principles

1. **Four-year self-study and review resource.** The mathematics website is intended to serve a learner throughout Grades 6–9 over multiple school years, not a short demonstration or rapid test-score optimizer. In Grades 8–9, judging a learner's progress can require **months** of genuine use. Measure improvement over meaningful intervals and consider whether the learner actually used the available resources; do not treat short-term scores or quick satisfaction surveys as conclusive quality evidence.
2. **Always improve.** Even when learners find it effective or satisfying, that is **not** a reason to stop improving the material or its presentation. The absence of observed longitudinal progress data is **not** grounds to abandon content development.
3. **Core coverage over superficial volume.** The site need not contain *every* secondary-school mathematics exercise. It **must cover the most essential KNTT-Core knowledge, foundational concepts, and skills across Grades 6–9**. Validate coverage by *actual objectives, skills, representative problem families and grade/lesson placement*, not by number of questions alone. Important gaps must be addressed; a large bank without essential coverage is insufficient.
4. **Multiple complementary exercise purposes:** (a) immediate examples and short practice that clarify Learn/Core theory, (b) sufficient routine and misconception practice to develop skills, and (c) **representative written-response problems**, including common forms and selected integrative/reasoning tasks. The written library need not supply huge quantities for exhaustive drill, but it must introduce how to choose methods, combine knowledge, reason and present solutions; an engaged learner should be better prepared for examinations.
5. **One canonical learning architecture.** Reuse the Master Plan's 25-topic knowledge graph, two grade/topic learning paths and single canonical Written Exercise Library. Distinguish KNTT lesson Core practice from topic-level transfer/Entrance10; preserve source IDs, reviewed correct keys, canonical placement, historical attempts and separate formative Practice vs independent Readiness/Mastery evidence.
6. **Future applicability:** The same principled design should be extensible to Vietnamese upper secondary mathematics and SAT/ACT-style mathematics, **without assuming that THCS content itself exhausts those curricula**.
7. **Learning material must be usable.** Clear visual hierarchy, intelligible explanations, easily discoverable relationships among concepts, tasks, examples and prerequisites, good alignment/spacing, and a direct path from theory to practice/review are essential. Recent UI improvements are acknowledged as useful but are not considered final.

## B. Owner-confirmed scheduling and product priority

- First **strengthen the learning/practice content and exercise coverage** while finishing already-reviewed, open academic/QA work responsibly (e.g. Grade9 CT23 independent Readiness), and expand the class-wide formative route only with independently reviewed and grade-mapped core sources.
- **After upgrading Practice content, revisit the Learn/knowledge-page presentation.** Current long vertical pages, typography, heading/line spacing, alignment and information density are **not optimal**. This issue is **important but not urgent**.
- No direct obligation to measure an individual learner's progression now or within a short pilot. Design the evidence model so meaningful **multi-month longitudinal evaluation** becomes possible later, without declaring that longitudinal learner evidence is a release prerequisite for core content.
- Avoid feature-count or question-count targets as proxies for academic adequacy.

## C. Not decided — proposals requiring Owner discussion/approval

**Do not implement a full knowledge-page UI redesign yet.** Options for later discussion (ASSISTANT SUGGESTIONS, NOT APPROVED):
- Desktop: concise topic overview and anchored/sticky table of contents, segmented sections or a two-column reading workspace with an optional concept map/skill relationships; reduce long scrolling without breaking deep links.
- iPad/mobile: stacked or accordion sections, persistent lightweight section navigation, generous touch targets.
- Consistent headings, width, text measure, margins, formulas and whitespace; accessible defaults, no excessive hiding of foundational explanations.
- One canonical content source used by multiple views; preserve old route IDs/bookmarks and links from Core cards/Practice/Written.

**Owner will discuss, then approve a prototype and release schedule.** Do not treat these alternatives as a settled design.

## D. Collaboration agreement

- Work in **larger coherent waves** with a meaningful deliverable, test results and one consolidated review, not a sequence of tiny PRs and repeated "tiếp tục" prompts.
- Within a wave, autonomously run compatible checks, address technical regressions, log GitHub evidence and prepare the output. Do not ask Owner to supervise routine CI or every small technical step. Only request decisions when academically material, there is a publication/data-safety boundary, or a genuinely unresolved product choice.
- A phase report should answer: **what was delivered; whether evidence is sufficient; what remains; what major wave comes next**.
- Do not promise autonomous background execution between chat turns unless an actual scheduled automation exists. The commitment here is to consolidate active work and reduce interruptions.
- Preserve **confirmed Owner decisions** as durable GitHub records and refresh a **current checkpoint** after major releases, with specific references. Draft proposals, academic reviewer judgments, implementation status and release permission MUST be labeled as different categories.

## E. At this confirmed checkpoint

- Grade6 10-item mixed formative review (NotebookLM full-set 4/4/2) released via PR #563; Grade6 math/visibility hotfix PR #564. Owner confirmed desktop and physical iPad functioning. This closes that observed learner UI acceptance.
- Grade9 CT23 independent Readiness candidate #561 remains draft (academic 10/10 PASS and automated QA PASS), but *QA-only* persistence role is not an approved production evidence lane. Keep historical Grade6–8 CT23 12-item Readiness unchanged.
- Combined Grade6+Grade9 integration QA PR #562 must **never** be merged to production. Review-only academic #560 remains independent.
- Next coherent work: close Grade9 Readiness production-semantic gate, then **systematically audit and strengthen Core Practice + canonical representative Written problem coverage across Grades 6–9**. Only after Practice improvement discuss/approve the knowledge-page information architecture.

**Never silently overwrite Master Plan, source question keys or historical learner evidence based on this note.**
