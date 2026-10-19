# Self-Learning Math — Knowledge Depth Wave F (2026-10-19)

**DRAFT / OWNER REVIEW REQUIRED.** Scope is only the learner-facing **Đọc & hiểu** knowledge of CT02–CT06, plus source-integrity and numeric QA; does not alter Core, Practice, Skill, Readiness, assessment, or learner history.

## Why this batch
NotebookLM R2/R2-RECONCILED contained valuable educational suggestions but also flagged several examples/conditions that already existed. The goal is **not to inflate teaching length** or force five PASS grades: add only specific examples that close a cognitive gap found in the current Markdown, while retaining correct explanations already present.

## Five changes
1. **CT02, new 3.8A:** Explain choice of ƯCLN vs BCNN using exactly the same two integers, 24 and 36, in two different word problems. Verify both arithmetic results and units: 12 identical bags (2 blue + 3 red per bag) vs a common 72-second flash cycle. Explicitly rule out automatic choosing based on keyword "chia".
2. **CT03, new 3.4A (optional):** Show how `x/a=y/b=k` supports a weighted expression `mx+ny=(ma+nb)k`; solve `x/2=y/3`, `2x+3y=26` to get `x=4,y=6` and verify the two original conditions.
3. **CT04, new 3.2A:** Explain why polynomial degree must be assessed **after collecting like terms** with cancellation of cubic terms. Contrast with the zero polynomial, which is not assigned a degree under the stated school convention.
4. **CT05, new Dạng 2A (optional):** Two-way recognition of a square containing a fractional coefficient: `(x/2-1)^2=x^2/4-x+1`. Check the middle term `-2AB` and distinguish numeric substitution as a check, not a proof.
5. **CT06, new 3.6A (optional):** Explain `ac`-method splitting on `6x²+11x+3`, choose `9+2=11`, `9·2=6·3=18`; factor as `(3x+1)(2x+3)`, then expand back. Warn it is not a universal factorization method for integer factors.

## Frozen-source provenance
Keep each pre-wave Git blob SHA fixed, not repinned:
- CT02: `612a5aa39ba27d6852e7b890c22aac613de1c574`
- CT03: `b501e304c0f4b9bda16205f80aef9ae6105c4319`
- CT04: `32b349af4d4e0091d3d45c5557195f9a6c2c7d44`
- CT05: `476ab48a1451f38c01face72454f7874fdd8be3f`
- CT06: `9b33506c46235eec49b189c1b80a16ae261201f9`

The new `scripts/test-math-knowledge-depth-wave-f-20261019.js` requires exact amended blobs, reconstructs each original source by deleting only the added subsection, compares to the original SHA, and performs independent arithmetic checks. The test is wired into existing Math PR CI via `test-core04-06-teaching-rollout.js`.

## Review/acceptance
- [ ] Student understands which *question* distinguishes ƯCLN from BCNN; correct units.
- [ ] Ratio `x=4,y=6` satisfies both given expressions without dividing by zero.
- [ ] Polynomial degree and zero polynomial explanation is consistent with current pedagogy.
- [ ] Fractional hằng đẳng thức is recognizable in both directions.
- [ ] `ac` splitting is clearly optional and not a claimed universal integer-factoring algorithm.
- [ ] New subsections appear inside the correct H2 accordion groups on desktop/mobile; formulas render.
- [ ] Math CI PASS and full source locks remain unchanged.
- [ ] No assessment, learner history, Core, Practice, Skill, Readiness, exam frequency, or deploy change.

**Do not merge or deploy without explicit Owner academic and visual authorization.**
