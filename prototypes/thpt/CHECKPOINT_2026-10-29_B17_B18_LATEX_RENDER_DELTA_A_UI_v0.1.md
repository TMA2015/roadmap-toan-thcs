# 2026-10-29 — ChVI B17/B18 display TeX rendering

Owner: root selector, desktop/iPhone THCS and THPT navigation accepted PASS after PR #617. Screenshots of B17/B18 show unrendered display formula blocks.

## Diagnosed from published GitHub Pages HTML
- B17: 4 raw display math blocks in paragraph text (missing separating blank lines).
- B18: 8 raw display math blocks in paragraph text (same cause).
- B15 (1 display) and B16 (4 displays) render correctly with blank lines.

## Scope / academic boundary
- Only insert blank lines around 12 B17/B18 display TeX blocks. All TeX characters and worked solutions kept unchanged.
- New exact-source and compiled-HTML guards for B15–B18 run in no-deploy preview, PR QA and deploy pipeline.
- No changes to THCS, original homepage, styles, Gemini, Firebase, learner progress, item IDs, Readiness or Mastery.
- Class DELTA_A_UI: no new academic review; does not expand earlier Academic PASS.
- Do not merge/deploy until owner explicitly authorizes this separate repair release.

## State
- Source prepared for Draft PR / CI, not yet released. Physical device follow-up after explicit merge authorization.