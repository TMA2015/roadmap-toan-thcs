# Self-Learning Math — Knowledge Composition Standard R6 / THCS 25 Topics

**Owner decision:** 2026-10-24: accepted the R5 approach for teaching-step comparisons, calls for **all topic knowledge** and other appropriate theoretical contexts, mobile-safe; fix missing displayed intermediate step `2x−4=0⇒x=2`, standardize interactive Practice buttons to **“Luyện ngay”**. No reduction of math depth or font.  
**State:** `DIRECTION_APPROVED / FIRST_PILOTS_IMPLEMENTED / BULK_MIGRATION_PENDING_SOURCE_AND_VISUAL_QA`. This note does not certify 25 finished topic rewrites or approve a website merge.  
**Repo:** `TMA2015/roadmap-toan-thcs`, Draft design PR #574, no learner evidence or canonical bank write.

## 1. Facts: cross-topic source inventory, 25 topic `index.md` inspected

Rough line counts from live GitHub `main`, useful for scope/complexity only; unchanged original source remains authoritative. Special `01` is the program map, not a standard math-teaching topic.

| Topic | Original lines | Best first responsive editorial pattern |
| --- | ---: | --- |
| 01 · Bản đồ chương trình | 346 | existing map/roadmap, **no forced math steps** |
| 02 · Số và phép tính | 725 | sign rules vs. order operations, worked number sequences |
| 03 · Tỉ lệ – tỉ lệ thức | 765 | direct vs inverse proportionality, equal-ratio transformations |
| 04 · Biểu thức đại số | 474 | recognize/transform/evaluate; compact step example |
| 05 · Hằng đẳng thức | 693 | expansion ↔ factor recognition **implemented isolated pilot** |
| 06 · Phân tích đa thức | 710 | compare recognized factorization methods; branch depending on structure |
| 07 · Phân thức đại số | 673 | conditions vs. cancellation, common-denominator process |
| 08 · Phương trình & bất phương trình | 483 | equivalent transformations, domain/solutions/final check |
| 09 · Hệ phương trình | 833 | substitution vs. elimination comparison with worked step flow |
| 10 · Hàm số & đồ thị | 877 | **R6 revised** two-step draw-graph method, 5+5 tabs, 10 Entrance10 rows and verified links |
| 11 · Căn thức | 491 | conditional `sqrt(a²)=|a|` and nested transformation layout |
| 12 · Phương trình bậc hai, Viète | 612 | alternative quadratic-solving methods (not interchangeable steps) |
| 13 · Góc, đường thẳng | 775 | adjacent/interior/alternate corresponding angle-pair comparisons |
| 14 · Tam giác | 666 | sides ↔ associated angles **implemented isolated pilot** |
| 15 · Đường đồng quy | 367 | different line centers and relevant properties |
| 16 · Tứ giác | 447 | shape-property comparison, necessary/sufficient distinctions |
| 17 · Thales, đồng dạng | 417 | corresponding sides and proportion diagrams |
| 18 · Hệ thức lượng | 414 | right-triangle roles and annotated comparison of formula families |
| 19 · Đường tròn | 430 | center/inscribed-angle distinctions and diagram-based comparisons |
| 20 · Hình học tổng hợp | 572 | choose method and diagram, do not flatten proofs |
| 21 · Thống kê | 495 | 4-step frequency-table method **implemented isolated pilot** |
| 22 · Đại lượng đặc trưng | 451 | compare mean/median/mode/range and data choice |
| 23 · Xác suất | 492 | experiment frequency vs equiprobability model **implemented isolated pilot** |
| 24 · Bài toán thực tế | 591 | given → variable/conditions → equations → verify → answer |
| 25 · Tổng hợp vào lớp 10 | 606 | solution selection and feedback/remediation branches |

**Do not apply generic auto-layout to every Markdown list or paragraph.** A long proof, a step depending on previous correctness, a nested conditional, a large plot and a data table each require a different rendering. "All topics" means every topic reviewed and the layout system available consistently, **not** "every piece of math arranged into two columns."

## 2. Reusable, source-preserving visual vocabulary

**CSS:** `docs/assets/stylesheets/math-knowledge-composition-v1.css` (not wired into global `mkdocs.yml`; preview opt-in only). Source text is semantically edited once with clear written math evidence; CSS handles screen adaptation. No new JavaScript, timers, API, font downloads, or task writes.

- `.math-compare` — **2 equal-sized conceptual alternatives**; `.is-three` for three valid parallel situations. Preserve correct order, conditions, mapping. On phone becomes one column; never shrink core font.
- `.math-process` — short **ordered causal steps**, arrows outside actual math, independent step cards. For many/long steps on narrow screens moves vertically, not tiny horizontal cards.
- `.math-principle` — single key equation/conclusion centered, generous whitespace and horizontal formula overflow when necessary.
- `.math-compact-equations` — few short formulas of comparable role, visible without scattering into separate paragraphs.
- `.math-outcome` — a short after-steps conclusion or conditional warning; distinguish *necessary/sufficient* and exceptional cases textually.
- Preserve normal left-aligned long explanation/proof, traditional dense data tables and full-sized math diagrams. Page height is reduced where clutter is artificial, not by omitting explanations, hints or method coverage.
- Readable 16–17px+ body as existing owner design; min 44px interactive targets, true focus, light/dark colors already defined; print show all actual tab content after separate native CSS QA.

**Editorial signal:** "Cách 1/Cách 2" are **alternative strategies**, "Bước 1/Bước 2" are sequential actions needed **together**. Do not change between these terms without confirming the actual math. CT10 specifically uses both intercept-finding actions together, with exception `b=0`.

## 3. Implemented real-content candidate pages (all OUTSIDE active index route)

| Source route | Draft preview route under same folder | Exactly what was changed |
| --- | --- | --- |
| CĐ10 `index.md` | `preview-tabs-r6.md` | R5 corrected: step 2 displayed full `2x-4=0⇒x=2`; six interactive exam CTAs uniformly `Luyện ngay`. Older content 11 sections, eight Knowledge and eleven method subtypes conserved |
| CĐ05 `index.md` | `preview-composition-r1.md` | §4.2 expansion vs recognition direction, 2-card comparison; other source text unchanged |
| CĐ14 `index.md` | `preview-composition-r1.md` | §3.1 triangle sides vs angles, two cards; original three sides and three angles preserved; other source unchanged |
| CĐ21 `index.md` | `preview-composition-r1.md` | §3.4 frequency table **four** ordered steps, arrows; conditional final step remains optional |
| CĐ23 `index.md` | `preview-composition-r1.md` | §3.4A experimental vs classic equiprobability sample, two cards with conditions; other source unchanged |

All four isolated previews are **full-topic real-source Markdown** with **exactly one semantic passage transformed**. Existing official `index.md`, SGK Core, Practice bank, Readiness, 87 canonical Written, learner storage and tutor are **unchanged**.

## 4. Why not force a bulk 25-page rewrite in one pass?

1. Original 25 pages range ~346–877 source lines with differing levels of nested examples, special SGK layers, MathJax, figures, printable tables and source-linked quizzes.
2. A mechanical text-to-columns conversion would risk logical steps/conditional statements being presented as equal alternatives, misleading correct proofs or formulas.
3. Need each edited source block checked by **math fact/logic parity** and technical screen QA. CSS shape can be common, academic content conversion requires intentional local decisions.
4. First 5 real-topic candidate samples span algebra, function plotting, geometry, data and probability; use them to validate component utility before migrating the remaining 20 topics.
5. Roll out along existing protected QA gates; new semantics or newly authored questions require independent NotebookLM academic review and explicit owner release approval.

### Waves (non-exclusive and not a new curricular route)

- **A: Algebra** CĐ02–12 (11 topic sources, including already piloted 05/10) after comparative read/QA.
- **B: Geometry** CĐ13–20 (8 sources, including piloted 14) including exact diagrams and angle marking.
- **C: Data/probability** CĐ21–23 (3 sources, including piloted 21/23).
- **D: Modeling/mixed/map** CĐ01,24,25 (3 sources; map page requires minimal changes).
- **Integration tests** when each wave is visually approved: original headings/anchors, MathJax, SVG sizes, canonical exercise links, browser Back and physical iPad/phone; exact content/skill provenance.

## 5. R6 offline browser fixture test for standalone HTML

Artifact `math_topic_cd10_steps_exam_links_r6.html` in current conversation (not GitHub production) uses pinned GitHub source fetch when opened normally.

Chromium offline **structure-equivalent** fixture (not full source rendering) at 1365, 820, 390 CSS px: all passed:
- displayed example text `2x − 4 = 0 ⇒ x = 2`;
- 10 Entrance10 rows, exactly six practice CTAs all `Luyện ngay →`, and four correctly marked pending;
- no horizontal document overflow; no JS runtime exceptions.

This validates **the exact corrections and interactions in the standalone preview only**; real MkDocs/math/image/iPad QA remains pending. A user screenshot from the prior R5 HTML showed the (x=2) intermediary was missing; this R6 HTML fix is the source of truth for that correction.

## 6. Release constraints

- Both new work and existing PR #574 remain **DRAFT**. Do not merge this into main without academic and visual acceptance.
- Original 25 `docs/kien-thuc/*/index.md` must remain unchanged on this branch until each topic candidate passes coverage and source parity checks. Build-time preview pages may become discoverable if branch merged; remove or gate previews before actual release if unnecessary.
- Full solution/figures/maths fact/source anchors first, then layout. No arbitrary compression of exam problem types; no claims about completion rates or SAT/ACT correlation.
- Do not infer `Luyện ngay` is now standardized across the **entire** website. At this step, standardized in the **R6 CT10 entrance10 table** only. Other topics/buttons require a separate UI copy audit.
- Tech release requires current GitHub Actions CI PASS **for the exact PR head SHA** + screenshot QA at desktop, iPad, phone, no original-route regression, and explicit Owner release authorization.
