# Self-Learning Math — checkpoint after CT07 P1 release · 2026-10-20

**Repository:** `TMA2015/roadmap-toan-thcs`  
**Nature:** current-work checkpoint for academic coordination; **no production configuration change**. Checked against current GitHub PR/branch and two canonical data files on 2026-10-20. This supersedes the older R22 **status narrative** only; the governance Master Plan v1.2.1 and NotebookLM Review Rules v1.2 remain authoritative.

## Completed and verified

- PR [#543](https://github.com/TMA2015/roadmap-toan-thcs/pull/543): W3C NotebookLM placement 14/14 and Written authoring 2/2 receipts recorded.
- PR [#544](https://github.com/TMA2015/roadmap-toan-thcs/pull/544): two CT07 optional Written anchors published, canonical Written Library **67→69**; no self-report to readiness promotion.
- PR [#545](https://github.com/TMA2015/roadmap-toan-thcs/pull/545): W3A/B/C closure and D1–D6 academic review: 40/40, 15 Core Cards, 360 historic MCQ at that snapshot, 12 CT05–07 Written, D1/D2/D3/D4/D6 PASS, D5 **INSUFFICIENT_SOURCE** without verified authentic S3 examination corpus. Reviewed a single CT07 P1 concept probe.
- PR [#546](https://github.com/TMA2015/roadmap-toan-thcs/pull/546): **MERGED**, merge SHA `20506194af4ffdc9d5b861d345ee0a858bacdb56`, both Roadmap PR Quality and Primary Skill Overlay checks SUCCESS. Exactly one authoring-approved `RAT07V1_121` appended to a fifth Practice shard. CT07 120→121, CT05–07 360→361; CT07 manifest and new-question blobs are **identical on `main` and `gh-pages`**. Written remains 69. No historical question overwritten, no automatic Skill/Readiness mapping or learner regrade.

## Currently open workstreams (independent Drafts — do not merge by CI alone)

| PR | Focus | Observed status / blocker |
|---|---|---|
| [#535](https://github.com/TMA2015/roadmap-toan-thcs/pull/535) | 25-topic integrated Knowledge A–G proposal | Draft, CI SUCCESS; independent review reportedly 25/25 PASS (per its stacked PR #536), but release still needs explicit Owner signoff and desktop/iPad Safari visual acceptance; base has moved |
| [#536](https://github.com/TMA2015/roadmap-toan-thcs/pull/536) | CT13/14 two drawing/sketch cues *on top of #535* | Draft, CI SUCCESS; content added after #535's review is not covered by the earlier NotebookLM PASS, requires independent source-specific review and Owner approval |
| [#525](https://github.com/TMA2015/roadmap-toan-thcs/pull/525) | One live formative Practice counter & Skill Map | Draft, CI SUCCESS; learner-facing runtime change, no history migration, separate Readiness. Do not activate before explicit Owner acceptance and scoped UI/device checks |
| [#524](https://github.com/TMA2015/roadmap-toan-thcs/pull/524) | R38: 40 existing MCQs → Skill Family candidates | Draft, CI SUCCESS, **no production Skill credit**; owner Holds three Grade-7 principal-square-root assessed mappings, 37 other candidates need per-ID Family-role scrutiny and optional identity gates |
| [#523](https://github.com/TMA2015/roadmap-toan-thcs/pull/523) | R37 stable source-option IDs, 40 questions | Draft and QA only; these identities not yet approved/committed to learner evidence |
| [#522](https://github.com/TMA2015/roadmap-toan-thcs/pull/522) | R36 provenance blockers | Draft QA-only |

Additional knowledge A–G source PRs #527–534 and older review hold PR #518 remain open; do not merge individually over the reviewed integration without reconciliation.

## Next chosen action: one eight-item academic review, no new content volume

Build **one** `TEMP_R38_EIGHT_ITEM_FAMILY_ROLE_REVIEW_20261020.md` from exact SHA-pinned current canonical source + 131-family Registry + V2 reviewer/triage evidence, on a new documentation-only review branch. Eight existing items, three topics:

- CT02 `NUM02V1_137`, `NUM02V1_138` — order vs fraction operations, and power of rational number.
- CT03 `RAT03V1_121`–`124` — direct proportionality vs ratio/scale; avoid using an Entrance10 Family for KNTT-Core.
- CT04 `ALG04V2_133`, `ALG04V2_136` — polynomial **binomial divisor** versus existing `ALG-DIV-MONOMIAL` Family label.

R38 reviewer correction V2 found 6 PASS/34 REVISE among 40, but **0** item→assessed-Family associations signed by Owner. The three Grade-7 square-root IDs `NUM02V1_142–144` remain Owner-HOLD; do not draft new Family by implication. Eight items are a review batch, **not eight newly written questions**.

Independent NotebookLM gate: 8/8 unique exact IDs, item-specific mathematics and Family-role verdict including HOLD where source evidence is missing. No new question IDs, existing math content edits, Skill/Readiness, history, retroactive credit or merge authorization. Keep this packet temporary, do not add it as a permanent source; replace the old temporary R38 packet when reviewing.

## Coordination rules

- Prefer review batches of **5–10 genuinely distinct questions** when there is a source-proven content need; avoid padding structurally equivalent clones.
- Two learning paths and one canonical item library. Keep ordinary Practice formative, independent Readiness and Written self-report separate.
- S1 KNTT bounds Core, S3 provenance required for exam-frequency statements. NotebookLM is independent reviewer, Owner authorizes releases, green CI is a technical check only.
- Math may use public GitHub Actions; never touch unrelated private English workflows.
