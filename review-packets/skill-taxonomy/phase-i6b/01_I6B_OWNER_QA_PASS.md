# Skill Taxonomy v2 — I6B Public Skill Map Owner QA

Date: 2026-10-03
Status: **OWNER QA PASS — BROADER LEARNER-FACING ACTIVATION**
Route: `/ban-do-ky-nang/`

## Release checkpoint

- PR #285 merged.
- Merge SHA: `95b86cd6015dc4437686d60cc6d15ca879565213`.
- Roadmap PR Quality #571: PASS.
- Skill assessment pilot QA #135: PASS.
- G Learning branding QA #109: PASS.
- Deploy MkDocs run #37093047806: PASS.
- gh-pages SHA: `ed2275f5a711208b18be0c14208f9befba7f689b`.

## Owner visual QA evidence

Owner screenshots of the public learner route confirm:

1. Public product naming is correct:
   - page heading is **Bản đồ kỹ năng**;
   - header uses **Bản đồ kỹ năng**;
   - no learner-visible `I6`, `Controlled QA`, or `Skill Taxonomy v2` wording is visible.

2. Summary counts remain coherent:
   - 42 independent Practice units;
   - 18 correct;
   - 28 families with observed evidence;
   - 103 families with no observed evidence;
   - total = 131 families.

3. Topic filtering works on the public route:
   - example screenshot: CĐ09 · Hệ phương trình;
   - 4/131 families shown for the selected topic;
   - Core family cards render normally.

4. Layer filtering works:
   - **Kiến thức hỗ trợ** filter shows 6/131 families;
   - family grouping by topic remains clear and readable.

5. Evidence-only filtering works:
   - checked state shows 28/131 families;
   - sparse cards show counts such as 2/2, 0/1, 1/1;
   - no raw percentage is shown for N <= 2.

6. Learner-facing evidence explanations remain correct:
   - no evidence does not mean weak;
   - sparse evidence is explained as 1–2 independent units;
   - N >= 3 may show percentage only as descriptive data;
   - wrong independent evidence is retained;
   - hint/solution-assisted attempts do not become independent evidence.

7. Product limits remain visible:
   - no mastery/weak label;
   - no overall readiness score;
   - no historical regrade/backfill;
   - MCQ proof/modeling/construction/multistep evidence remains partial;
   - optional/Bridge/Challenge layers do not reduce Core.

8. Legacy Practice statistics remain separated from the new Skill Map.

9. No visible font, layout, card, or horizontal-overflow problem appears in the submitted owner screenshots.

## Closure decision

I6B broader learner-facing activation is **OWNER QA PASS** and may be closed.

This closes the initial learner-facing Skill Map activation cycle only.

Still not authorized:
- Mastery;
- Readiness;
- historical backfill/regrade;
- automatic written scoring.

Any future Mastery/Readiness work requires a new explicitly reviewed gate.
