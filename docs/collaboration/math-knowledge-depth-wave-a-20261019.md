# Self-Learning Math — Knowledge Depth Wave A (2026-10-19)

Status: **DRAFT / OWNER REVIEW REQUIRED**. This is a content-only learner knowledge proposal; not academic release authorization.

## Basis
- R1–R6 NotebookLM independent reviews covering 25 PDF topic learning pages.
- Direct verification against the original CT07, CT10 and CT23 PDFs and current `main` Markdown/SVG source.
- Scope: **01 · Đọc & hiểu** only; no changes to Core, Practice, Skill, Readiness, learner history or exam frequency claims.

## Changes and reasons
1. **CT07 – Dạng 7 Chia phân thức**: Change wrong term “phân thức bị chia khác 0” to correct “phân thức chia C/D khác 0”. Keep denominators B and D nonzero and C nonzero; students must distinguish dividend A/B from divisor C/D.
2. **CT10 – Infographic 3, Cách vẽ nhanh**: Handle **b = 0** explicitly. With A=(0,b), B=(-b/a,0) works for b ≠ 0. When b = 0 choose B=(1,a), a ≠ 0, to guarantee distinct points. Existing worked y=2x example remains unchanged and is not duplicated.
3. **CT23 – Mục 3.4 Xác suất cổ điển**: Add a clearly labeled **mở rộng** counterexample: 11 possible sums from two distinguishable fair dice are **not equiprobable**, unlike 36 ordered outcomes. Correct checks: P(sum=2)=1/36, P(sum=7)=6/36. Existing treatment of experimental probability remains unchanged.

## Scope and pedagogical constraints
- No new mandatory Core objectives or assessment items.
- Preserve existing examples, topic numbers, and H2 accordion sections.
- This wave is intentionally small, to verify presentation and teaching value before broader upgrades.
- All changes require Owner desktop/mobile visual QA and academic signoff prior to merge; no deployment or release in this Draft PR.

## Acceptance checklist
- [ ] CT07 division examples correctly state `B ≠ 0`, `D ≠ 0`, `C ≠ 0` and label **divisor** correctly.
- [ ] CT10 infographic is legible in both desktop and mobile views; for b = 0, its two plotted points are distinct.
- [ ] CT23 student can explain why 11 sums cannot be used as 11 equiprobable outcomes.
- [ ] Expanded example is visibly optional, not a KNTT Core requirement.
- [ ] Markdown headings/accordion still work; published page compiles and layout does not overflow.
- [ ] No changes to Core, Practice, Skill, Readiness or learner data.

## Next candidates, NOT included here
- CT17 internal angle-bisector theorem and visual example (need S1 scope and geometry review).
- CT20 line/concurrency reasoning examples.
- CT24 contextual conditions and positive-but-invalid root examples.
