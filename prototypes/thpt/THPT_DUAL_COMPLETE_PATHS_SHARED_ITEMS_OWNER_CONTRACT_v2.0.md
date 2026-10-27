# Toán THPT — Two Complete Learning Paths · Shared Canonical Resource Contract v2.0

**Owner decision:** APPROVED 27/10/2026 — replaces conflicting R2/R4 rules on topic Core page and separate Core/Practice storage.  
**Scope:** THPT lớp 10–12 · SGK KNTT (trục ngang) + Chuyên đề (trục dọc).  
**Release status:** ARCHITECTURE_APPROVED / IMPLEMENTATION_PREVIEW_ONLY / NO_MERGE_NO_DEPLOY.  
**Precedence:** Owner directive v2.0 > old `THPT_DUAL_KNOWLEDGE_AND_SHARED_CORE_ARCHITECTURE_R2.md`, `THPT_R4_SAME_SHELL_LIBRARY_SHORTCUTS_OWNER_CONTRACT.md` **only where conflicting**; preserve R4 layout, adaptive two-level knowledge tabs, 5+N launcher and Academic PASS scope.

## 1. Two independently complete curricula

| Component | SGK KNTT | Chuyên đề |
|---|---|---|
| Scope | Full SGK learning route 10–12: Grade → Chapter → Lesson | Full vertical knowledge route; can cross 10–12, not merely links to SGK |
| Knowledge | Self-contained lesson: definitions, conditions, properties, graphs, worked examples | Self-contained topic: concept hierarchy, proof/derivation where needed, visualizations, worked methods and errors |
| Core | Short comprehension cards **after learning SGK concepts**; guided formative | **No separate Core page/tab.** Equivalent beginner activity in Practice may reference the exact same canonical item |
| Practice | Exercises and application aligned to SGK lesson/chapter, with optional hints | Problem-type/skill/level practice from beginner to transfer and advanced, with optional hints |
| Readiness | **Independent assessment at end of SGK chapter**, covering chapter outcomes | **Independent assessment at end of topic**, covering full advertised vertical scope |
| Written/Anchor | Filter shared written canonical bank by grade/chapter/lesson | Filter SAME bank by topic/skill/problem type/level |

**Independence test:** Either path alone must cover the applicable official mathematics program, including formative work, examples, written work and self-assessment in its own organization. Extra links into other route are optional, not a requirement to learn mandatory content.

## 2. Topic navigation = exactly three pages

**Kiến thức → Luyện tập → Tự kiểm tra.** No Topic Core page in menus, launchers or topic navigation. Historic Core URL may remain as an unlabeled backward-compatible pointer to SGK Core, **without duplicated answer/question/runtime**.

- Topic Kiến thức retains **Adaptive Knowledge Tabs v2**: one content tab row for small topic; up to two levels (knowledge module → content tabs) for extensive topic; consistent typography and normal-text scale/color.
- Topic Practice starts at a suitable beginner tier (understanding) and may reference an SGK Core item via canonical `item_id`; no second item with a copied answer key.
- Topic Readiness has no hints/Tutor/correctness leak before Final Submit; full topic coverage; two-item pilot remains `TECHNICAL_DEMO_ONLY` and grants no mastery.

## 3. Shared item bank; context-specific placements (not separate IDs)

**Stable `item_id` identifies the mathematical question and answer key, not a branch, UI page or assessment role.**

Example (illustrative only):

```yaml
item_id: THPT-CORE-QF01
content_version: 1
primary_skill_id: QUADRATIC_VERTEX
kntt_placements:
  - lesson_ref: G10_CHVI_B16
    mode: SGK_CORE
topic_placements:
  - topic_ref: HAM_SO_PARABOLA
    mode: TOPIC_PRACTICE
    level: CO_BAN
answer_key_ref: same_canonical_answer_key
readiness_eligibility: false
```

A single item can be used as `SGK_CORE` and `TOPIC_PRACTICE` at low level, **not** two distinct storage records. Keep unique `item_id`, `content_version`, `answer_key`, `solution`, `hint` or `rubric` per item; use many-to-many **placement/role mapping** to display by route and context. A display role is not part of the canonical item identity. Do not treat this YAML sample as currently deployed storage schema.

`entry_context` (route/lesson/topic/placement, attempt/session) distinguishes what learner actually did; **never doubles mastery simply because a question appeared twice**.

**Assessment hygiene:** Chapter Readiness and Topic Readiness use independent no-hint question forms, with sufficient coverage and new/held-out questions or controlled variants. Shared skills/problem types/knowledge are fine; blindly repeating already answered Core/Practice exact items inflates evidence and must be avoided. Results/coverage are indexed by chapter vs topic respectively; only validated evidence contributes to mastery, not unreviewed demo items.

## 4. Shared resources and simpler skills

- One mathematical concept/asset may support both routes: graph SVG, theorem statement, canonical formula, solved example, figure, item, worked solution. The pages may explain and sequence them differently; they do not need identical prose.
- Skills should be compact, understandable and reusable across routes, with **stable skills**, `problem_type_id` for ways of using a skill, optional prerequisites, and grade/lesson/topic mappings. Do not create separate skill solely for SGK or Topic contexts.
- Difficulty/level, origin source, SGK page, topic mapping and official vs challenge layer are **separate metadata**. Do not promote advanced source evidence to mandatory SGK scope.
- Written and Anchor share one bank: `is_anchor` or `written_role` is a tag, not another copy.
- Do not merge formative score, independent assessment and rubric self-check into an unexplained scalar mastery.

## 5. Training/evaluation and release gates

- SGK: lesson-by-lesson `outcome matrix`; at chapter end, chapter Readiness covers expected outcomes. Every lesson must stand alone academically.
- Topic: topic-wide outcome/skill map across 10–12; verify coverage independently from SGK chapter outcomes, including all advertised branches; topic Readiness differs from chapter Readiness.
- NotebookLM review after Golden UI uses batches of coherent lessons/chapters or topic modules (Project Source 07). Every reviewer handoff follows Project Source 06 (`Temp_` Markdown/ZIP + short prompt).
- Historic B16 Postfix academic `PASS` continues **only for unchanged reviewed content/items**. Relocation of a card, navigation changes and the documented multiple placements are a technical/architecture delta; browser QA must confirm one ID, no duplicate logic; any changed mathematics or broader topic mastery claims need relevant academic review.
- No merge/deploy, learner state changes, credits, or production bank release absent explicit owner gate.

## 6. Implementation and compatibility

- `docs/thpt-preview/sgk/core/ham-so-bac-hai.md`: canonical pilot Core runtime content.
- `docs/thpt-preview/sgk/core/index.md`: library link.
- `docs/thpt-preview/sgk/chuong-vi/bai-16.md`: SGK entry.
- `docs/thpt-preview/chuyen-de/ham-so/{kien-thuc,luyen-tap,tu-kiem-tra}.md`: **only three topic pages**, the current pilot remains `PILOT_PARTIAL_G10`.
- `docs/thpt-preview/chuyen-de/ham-so/core.md`: legacy compatibility pointer only (not in navigation, no item engine).
- Core/Practice item references must eventually use shared data-rendering layer; current pilot may **link** the canonical Core item from beginner Practice, but must not duplicate markup under another item ID.
- `SGK chapter Readiness`: new scope distinct from `TOPIC_READINESS`. Do not substitute two-question topic demo.
- Keep previous `R4` visual shell and 5+N shortcuts.

**Approved contract ≠ approved publication.** Owner controls release, historical docs remain as revision history.
