# Self-Learning Math — Knowledge Depth Wave C (2026-10-19)

**DRAFT / Owner academic + visual approval required.** Improve learner-facing **01 · Đọc & hiểu**, not Core, Practice, Skill, Readiness, assessment, exam claims, or learner data.

## Evidence and intent
- NotebookLM independent R4 review of CT14–16, checked against the existing full pages in `main`.
- Current teaching copy already defines triangle types, altitude, perpendicular bisector, and parallelogram recognition. Therefore do not duplicate these definitions: fill only the demonstrated explanation/transfer gaps.

## Changes to review
1. **CT14 — 3.8 Right triangles:** Two additional congruence choices, hypotenuse–acute angle and adjacent leg–acute angle, with corresponding-vertex matching and the reason the second follows ASA (`g.c.g`).
2. **CT15 — 3.2 Altitude vs perpendicular bisector:** Contrast table comparing "through vertex" and "through midpoint" plus counterexample `BC=8`, `BH=3`, `HC=5`; the foot `H` is not the midpoint.
3. **CT16 — 3.6A Rectangle ↔ median to the hypotenuse:** Derive direct and converse using reflection across `M` to construct rectangle `ABDC`; a numeric example `BC=10`, `AM=5`; warn that equal legs alone do not establish an isosceles trapezoid under the page's inclusive trapezoid convention.

## Academic proof checks
- CT14: Both triangles must be right angled at stated corresponding vertices. Included-leg angle proof is proper `g.c.g`, the other via two angles plus corresponding hypotenuse.
- CT15: `BH=3`, `HC=5` sum to `BC=8`; midpoint would divide it `4+4`.
- CT16: `ABDC` diagonals `AD`, `BC` have common midpoint `M`. With angle `BAC=90°`, parallelogram `ABDC` is rectangle; conversely equal diagonals in a parallelogram imply rectangle.

## Release safeguards
- Only three `index.md` learner pages, two scoped regression tests, and this review document.
- Historical SHA of each of CT14–16 is **unchanged**. Regression gates reconstruct the original exact source after removing only the new appendix, and separately pin the newly authored full-source SHA.
- Maintain original major H2 section hierarchy and closed accordion behavior.
- No deployment or merge until Owner verifies math, legibility (including mobile), and topic navigation.

## Owner checklist
- [ ] CT14 corresponding corners and each congruence theorem explained and applied correctly.
- [ ] CT15 comparison table legible, especially narrow/mobile layout.
- [ ] CT16 constructed rectangle diagram mental steps understandable; converse is not applied without a midpoint.
- [ ] H2/H3/H4 headings show correctly in knowledge accordion.
- [ ] All Math PR checks pass; no change to learner statistics, assessments, or historical evidence.
