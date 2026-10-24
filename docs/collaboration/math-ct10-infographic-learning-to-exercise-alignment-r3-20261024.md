# Self-Learning Math — CT10 infographic / knowledge / problem type / exercise alignment R3

**Scope:** owner feedback from six screenshots 2026-10-24 and live repository comparison.  
**Status:** SOURCE_INVENTORY_COMPLETE_FOR_CT10 / EDITORIAL_POLICY_PROPOSAL / ACADEMIC_REVIEW_NOT_COMPLETE / NO SITE DEPLOYMENT.  
**Target:** Inspect and reconcile learning diagrams **before** rolling out the new tab UI across the curriculum. Maintain current three interactive learning roles and one canonical Written Library.


> **R4 correction 2026-10-24 — IMPORTANT (supersedes earlier “local exercises” availability wording):** The 13 `10-WR`/`10-ENT`/`10-CH` examples named below are **present in legacy Markdown source only**, but `hooks/topic_markdown_fixes.py` replaces `docs/kien-thuc/10-ham-so-do-thi/bai-tap.md` with the interactive-only Practice player in the deployed build. They are **NOT live learner-visible named exercises** and must **never be linked as active 10-WR-xx/10-ENT-xx/10-CH-xx tasks**. Treat the type-to-legacy list below as archival coverage evidence, **not accepted live destination mapping**. Active verified destinations are the 120-question interactive Practice source with its actual skill tags and the three canonical Written IDs `WX10-FUN-001/002/003`. The current live linked-type gaps requiring a representative independent exercise are **#3, #9, #10, #11** (not merely three). R4 candidate docs separately propose 3 parameter items plus one line–parabola item; all await source review and are NOT released. 

## I. Owner-observed UX problems (confirmed examples)

1. Screenshots 1–3: old text-heavy “infographic” recapitulates the same definition, value table and membership rule immediately followed by HTML theory. This increases vertical length and risks divergence.
2. Screenshot 4: the card says “4. Dạng bài trọng tâm” and lists five **summary bullets**, but the page has **eleven detailed problem types**, visually displayed in **five grouped UI tabs** in the R2 prototype. The “4.” is *a box/section ordinal* rather than claiming four exercise types; nevertheless the numbering and different granularities create genuine reader confusion. Avoid changing the source types just to make an image count match.
3. Screenshots 5–6: short KNTT Core prototype centers important stand-alone equations/definitions in display blocks, whereas old CT10 topic page predominantly left-aligns everything and uses `inline code` for equations. The problem is poor **typographic hierarchy**, not the lack of universal center alignment.

**Owner direction:** keep/new tab UX candidate is approved as a *promising direction*, but revise infographic purposes/content, align lesson concept vs visual facts, and link every **meaningful listed problem family** to actual practice/representative written exercises before any bulk presentation upgrade.

## II. Facts from current repo `main`, confirmed 2026-10-24

- `docs/kien-thuc/10-ham-so-do-thi/index.md`: 11 main sections; §3 has 8 real knowledge subsections, §5 has 11 enumerated problem types.
- Nine referenced SVGs all exist in `docs/assets/infographics/10`.
- Topic Practice Bank `docs/assets/data/practice/10-ham-so-do-thi-v1.manifest.json`: 120 interactive items across four files/16 declared `skill_labels`; **skill tag lists do not explicitly cover parameter-solving** for problem families 3, 9, 10. This is a **coverage mapping warning**, not proof the broader website lacks every possible example.
- `docs/kien-thuc/10-ham-so-do-thi/bai-tap.md`: 10 `10-WR` introductory response prompts, 2 `10-ENT` and 1 `10-CH`; **older topic-local Markdown exercises** differ from canonical Written Library entries.
- Canonical `docs/assets/data/written-exercises/written-exercise-library-v1.json` has 87 items total, **three CT10 items**: `WX10-FUN-001` standard (linear-function intercept/variation), `WX10-FUN-002` standard (parabola symmetry/value-table), `WX10-FUN-003` anchor (line intersections/system). All report `academic_review.status=APPROVED`. Do not alter ids/keys/solutions, erase historical data or silently copy local Markdown exercises into the canonical bank.
- Readiness: `docs/kien-thuc/10-ham-so-do-thi/tu-kiem-tra.md`, independent KNTT Core; Entrance10/Challenge not part of its score.

## III. Concrete nine-SVG first-pass audit

| Existing SVG basename | Present contents, role | Initial editorial decision, not a mathematics PASS |
|---|---|---|
| 10-01-tong-quan | 35 labels, cards with programme path, goals, typical errors | `REWORK_AS_KNOWLEDGE_MAP` or concise optional summary; it repeats page goals/map |
| 10-02-toa-do-ham-so | 30 labels: function definition, value table, quadrants, point test | `REMOVE_FROM_INLINE_THEORY_OR_REDESIGN_VISUALLY`; repeated §3.1–3.4 |
| 10-03-ham-bac-nhat-duong-thang | 28 labels: formulae, draw steps, slope/intercept, cases | `CONVERT_TO_OPTIONAL_CHEATSHEET` or replace with worked plotted comparison; repeated §3.5–3.6 |
| 10-04-giao-diem-parabol-loi-sai | 29 labels: intersection method, parabola, 5 summary bullets, pitfalls | `RETIRE_OR_REWRITE`; editorial relation to **11 full problem types** + 5 UI tabs unclear |
| 10-05-mat-phang-toa-do-diem | Actual plotted axes, A/B point membership example | `RETAIN_FOR_VISUAL_REVIEW` under §3.3–3.4; verify plotted coordinates and readable labels |
| 10-06-he-so-a-b | Two coordinate plots comparing slope/intercept | `RETAIN_FOR_VISUAL_REVIEW` under §3.5; verify shared scale, equations and contrast |
| 10-07-giao-diem-hai-duong-thang | Graph intersection plus algebra step | `RETAIN_FOR_VISUAL_REVIEW` under §3.7 |
| 10-08-parabol-y-ax2 | Real parabolas comparing a's sign/magnitude | `RETAIN_FOR_VISUAL_REVIEW` under §3.8; source scope is special `y=ax²`, not general quadratics |
| 10-09-duong-thang-parabol | Actual line/parabola intersections | `RETAIN_FOR_VISUAL_REVIEW` under §5/type11 as optional Entrance10/Challenge |

**No automatic deletion:** preserve source SVGs as assets; only later hide/remove duplicates from reading flow *after* source-preserving academic comparison, link/alt audit and owner acceptance. Text-summary cheat sheets can remain as separately opened downloadable review aids *if* regenerated from approved lessons and properly versioned.

### Required infographic roles (max two simultaneous)

- `concept_map`: show **relationships and routes** in one glance, not reprint all theory.
- `concept_visual`: mathematical figures, changes, counterexamples, side-by-side comparisons, geometric/coordinate logic impossible to explain as efficiently in prose.
- `method_flow`: small decision tree or transformations a learner actually uses, without duplicating all worked examples.
- `optional_recap`: compact revision/print sheet **after** study, not mandatory full-page image before first concept.

SVGs should have one *explicit primary* role, source concept/skill IDs, math label QA, readable mobile presentation, alt and caption describing the mathematical insight. **Static SVG should not hardcode counts of current exercise families/tabs**; a tab is a presentation group, not a domain classification.

## IV. Source-of-truth and synchronisation contract

- **Canonical concept/skill and editorial lesson source** owns definition, domain, condition, named mathematics and scope. Figures are *derived pedagogical views*, never a second independent source of theorem/truth.
- For each visual, record `asset_id`, `visual_role`, `topic_id`, `concept_ids`, `skill_ids`, `placed_in`, `source_refs`, `alt`, `display_caption`, `reviewed_source_revision`, `math_visual_QA`, `status` (`KEEP/REVISE/OPTIONAL_RECAP/REMOVE_FROM_PAGE`), and last-reviewed revision.
- Source revision changes to a fact referenced by SVG -> **flag visual for re-review**. No need to generate full infographics automatically; a maintainable source crosswalk plus QA gate is sufficient for this family/free-first repo.
- Do not embed definitions, rubric keys, page/tab counts or curriculum-level status in pictures when ordinary selectable text would be better. Real math diagrams must preserve axis scale, label correctness, arrow markers, contrast and legibility.
- A caption should answer "**hình này cho thấy điều gì mà công thức không làm nổi bật?**" Examples: "Giữ b, đổi a làm đổi độ dốc; giữ a, đổi b thì đồ thị dịch song song". If this answer is just a copied definition, reconsider the infographic.
- Never present redundant picture/text sequences separated by a full-screen block when it interrupts lesson reasoning.

## V. Type-to-exercise coverage crosswalk: **CURRENT EVIDENCE** (not future promises)

Topic §5 enumerates **eleven academic problem types**; five R2 tabs are merely user-interface clusters. Do **not** demand exactly eleven Written items or replace current Practice categories; classify the best destination by method complexity and learner stage.

| Source problem type | Relevant current local topic exercises | Canonical Written representative | Provisional destination / review need |
|---|---|---|---|
| 1. Tính giá trị hàm số | `10-WR-01` | no dedicated CT10 canonical single-type exercise | Topic Practice; source-specific question link needed |
| 2. Kiểm tra điểm thuộc đồ thị | `10-WR-04` | combined `WX10-FUN-002` (parabola variant) | Topic Practice and selected written |
| 3. Tìm tham số để điểm thuộc đồ thị | **none among named topic-local 13** | none dedicated | **COVERAGE_CANDIDATE**; source KNTT layer before adding examples |
| 4. Vẽ đồ thị hàm bậc nhất | `10-WR-07` | `WX10-FUN-001` | Practice plus paper task |
| 5. Giao điểm với các trục | `10-WR-07` as embedded step | `WX10-FUN-001` | skill drill and paper task |
| 6. Đồng biến, nghịch biến | `10-WR-06` | `WX10-FUN-001` | Practice |
| 7. Vị trí hai đường thẳng | `10-ENT-01` | no dedicated canonical item | Entrance10/Extension; reviewed source/skill placements |
| 8. Giao điểm hai đường thẳng | `10-ENT-02` | `WX10-FUN-003` anchor | Written + Entrance10 |
| 9. Tìm tham số để song song | **none specifically tagged/named** | none dedicated | **COVERAGE_CANDIDATE** (Entrance10) |
| 10. Tìm tham số để cắt nhau | **none specifically tagged/named** | none dedicated | **COVERAGE_CANDIDATE** (Entrance10) |
| 11. Giao điểm đường thẳng & parabol | `10-CH-01` | none dedicated | Extension/Challenge; prerequisite CĐ12 explicitly signposted |

**Important:** no dedicated canonical `WX` item is **not by itself a curricular failure**. Fundamental elementary types rightly live mostly in guided Practice. Multi-step and method-comparison families deserve representative Written/Anchor. For each retained type, identify **at least one verified active exercise destination** with correct `skill_id`/layer, subject to academic approvals. A generic Practice Room link alone is not a complete mapping. If a truly important type lacks an item across all suitable banks, nominate *one* source-locked representative, not a bulk count quota.

### Page UX at each problem type

```text
Dạng 8 · Giao điểm hai đường thẳng
[Dấu hiệu] -> [Chọn phương pháp] -> [1 example/trap]
  ↳ [Luyện kỹ năng (guided)]   ↳ [Làm bài tự luận WX10-FUN-003]
    grade/layer note when Extension is required
```

Use existing canonical deep links/filter context to open the exact item if supported; **inspect actual router first**. Do not invent `?exercise_id=` support or add new routes. Links must resolve, return/back preserve context, and not duplicate lesson/attempt data.

## VI. Visual information hierarchy & alignment

**Do not center the whole theory article.** Text explanation and multistep solutions remain *left-aligned* for scanning and mathematical reasoning. Add focused visual emphasis with scoped components:
- Title/subsection headings: left-aligned.
- One high-value central equation or one principle per teaching block: **centered on a calm contrasting surface**, true MathJax display (not raw `code`), adequate whitespace.
- Diagram/coordinate axes: centered in their figure frame when scale demands it, caption left or centered consistently.
- Short comparison formulae: at suitable widths two restrained columns; fall back to one mobile column.
- Step-by-step algorithm, definitions with explanatory text, conditions, rubric: **left-aligned**. Alert for common mistake uses a border/label, not giant colored panel.
- 17px+ body copy, 22–24px H2, 18–20px H3, sufficient `line-height`, aim readable 62–78 characters per line; maintain existing CSS theme tokens and math fonts; no added paid fonts.
- One primary visual focal point every meaningful *concept*, not one giant general infographic for each §. Avoid 8 consecutive identical left-aligned formula/code paragraphs.

**Potential implementation source issue:** CT10 knowledge Markdown currently wraps many formulas in single backticks (inline code) rather than true `\\(...\\)` / `\\[...\\]` MathJax. This is another distinct reason source appears flat. Migrate markup carefully and independently **without changing the formulas or mathematical conditions**. Handle equality/inequality and grades correctly, do not silently edit academic source during a CSS change.

## VII. Proposed safe execution order and acceptance gates

0. Freeze UI release changes: current PR #574 Draft design only, no CSS/MkDocs live edits and no THCS learner-history writes.
1. **CT10 source crosswalk:** 9 SVG inventory, 8 knowledge headings, 11 problem families, 120 bank questions/skills, 13 local paper prompts, 3 canonical CT10 `WX` items, stage Core vs Extension; explicitly mark ambiguous or missing.
2. **Editorial plan per graphic:** retain/replace/recap/hide using *actual educational benefit*, not graphic quota. Audit all SVG coordinates/formulae and text contrast.
3. **One integrated preview:** full CT10 real-source page with 5+5 tabs, retained graph figures, cleaned prose presentation, focused centered key math, direct existing practice/written destinations, no dead links; preserve all source facts.
4. **Academic independent review** of any changed mathematics, mapping of newly authored items to SGK KNTT/layer and all new answer keys. Visual reformatting alone does not rewrite learning science or mark `academic_review=PASS`.
5. Compare old vs new side by side: no extra scrolling to find the actual concept, no redundant text-image repetition, real figure readability PC/iPad/390px, learner can find one relevant active exercise from each important type. Check light/dark/200% zoom, printing all tabs, browser Back, keyboard, accessibility, old THCS bookmarks, Tutor no-Readiness access.
6. Only after owner acceptance: scoped MkDocs template/CSS pilot in a separately gated PR; then selectively scale within THPT and revisit THCS with exact source parity. Avoid global font changes or image deletion before regression checks.

**Acceptance meaning:** academic concept truth aligned, no misleading infographic counts, source problem-type ↔ actual practice link documented, hierarchy readable, and no damage to three interactive functions or learner data.

**Current disposition:** RESEARCH/AUDIT FINDINGS only. The owner asked "Bạn nghĩ sao?" and specified a direction; no authorization to make production content edits, approve missing exercises or replace all nine SVGs silently.
