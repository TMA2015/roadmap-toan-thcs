# Self-Learning Math — Knowledge Depth Wave E (2026-10-19)

**DRAFT — academic and visual owner approval required.**

## Purpose
Improve actual understanding, not simply add formulas or seek PASS. Based on independent NotebookLM R5 suggestions, verified against current CT18, CT19 and CT21 knowledge lessons. Scope is **Đọc & hiểu only**.

## Three bounded additions
1. **CT18 — 3.2A (optional derivation):** Derive `1/AH²=1/AB²+1/AC²` for a right triangle using two area formulas and Pythagore. Explain applicability, original conditions and verify `AB=6, AC=8, BC=10, AH=4.8` by both sides. No new required memorization.
2. **CT19 — 3.4A (optional comparison):** Explicitly distinguish interior-intersecting chords (sum of intercepted arcs divided by 2) and exterior-two-secants (difference of intercepted arcs divided by 2). Include labeled point order and simple numerical examples. Distinguish these from inscribed angles. Mark this as optional enrichment, not automatic promotion to KNTT Core.
3. **CT21 — 3.1A (data literacy):** Distinguish qualitative, discrete quantitative, continuous quantitative and numeric identifiers; give examples, selection of charts, and warn against averaging nominal labels.

## Math + pedagogy checks
- `AB=6 AC=8` gives `BC=10 AH=4.8`; `1/4.8²=1/36+1/64=25/576`.
- Interior angle: `(100°+60°)/2=80°`; exterior angle: `(140°−40°)/2=50°`. Intercepted arcs and near/far secant points must be correctly identified, not inferred from unmarked geometry.
- CT21 classifies numeric codes as identifiers, not numerical measures; statistical tables/charts are chosen according to question and data type.
- Only one new section per topic. Preserve original H2 major-topic headings and all earlier examples/infographics.

## Source-lock safeguards
- CT18 original Git blob SHA `eca50562caaff50a89593a434158618137e9d217`.
- CT19 original Git blob SHA `75c9baa052c1ef91bee54e65edcb3dee513007d2`.
- CT21 original Git blob SHA `e1c2549945fab0524abf0c6ffadb5457d3884bca`.
- Tests pin each proposed full source, strip the exact bounded new section, and verify original SHA. Never silently repin historical source.
- This Wave E modifies Grade-9 longform source-lock test also touched by Wave A PR #527. **Merge must reconcile both Wave A and Wave E source exceptions** while preserving both historical baselines.

## Owner acceptance
- [ ] Review CT18 derivation and example, including conditional right-triangle hypotheses.
- [ ] Review CT19 angle/arc names and ask whether a drawing would further improve comprehension.
- [ ] Review CT21 classification and responsive table readability.
- [ ] Test desktop/mobile topic accordion and all CI gates.
- [ ] Confirm no changes to Core, Practice, Skill, Readiness, learner data, official exam-frequency claims.

**Do not merge or deploy until explicitly authorized.**
