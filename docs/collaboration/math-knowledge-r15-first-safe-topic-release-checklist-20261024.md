# R15 — CT14 only: academic-safe final-route release candidate

**Status:** Draft GitHub PR #575, independent of design PR #574. **Not merged, not deployed. No production website changes.**

## Governance discovery

The first release attempt tried presenting CT05, CT14, CT21, CT23 on actual `index.md` routes. Ordinary CI correctly blocked modifications of previously reviewed academic source files:

- **CT21**: Grade-9 reconciliation `scripts/test-kntt-dimension-coverage-g9-v1.js` enforces full current historical source SHA `27b0938c5ee263a8c60dd73cf6d42d3d52d0d89a`.
- **CT23**: Same Grade-9 coverage inventory protects the approved two-dice example and historical source. Its current source SHA is `1b69ae97f0597a3c7b521ecb315cf2a5d3d82187`.
- **CT05**: Approved Wave F adds teaching case Dạng 2A; `scripts/test-math-knowledge-depth-wave-f-20261019.js` enforces complete source SHA `6e34411e59ebf8589ba8ee14f2464edd5c0e822f`.

**Resolution:** all three source files have been restored byte-for-byte from `main` on R15. Their proposed designs continue only in PR #574. Existing source-lock tests have **NOT** been disabled or softened. R15 adds a separate audit test for all three baseline source SHAs. Do not try to merge a modified CT05/CT21/CT23 until a formally approved academic source-revision flow exists.

## Actual staged diff: CT14 only

`docs/kien-thuc/14-tam-giac/index.md` is the **sole** proposed live-topic file modified in Draft PR #575.

- Source main original blob SHA: `f9fae782453f7126b39f123d728188d49787c149`. Restored exactly by declining/closing this draft, or after an eventual merge via a reviewed revert.
- Source of design: `docs/kien-thuc/14-tam-giac/preview-composition-r3.md` in design PR #574, adjusted only for official URL depth and without the draft banner.
- Retains triangle definitions, KNTT source exposition and two original illustrative geometry SVGs (triangle and Pythagoras); four text-heavy infographic placements are hidden *in this candidate* (no SVG source file deleted).
- Replaces short vertical side/angle labels with a compact native Markdown table. Adds exactly one contextual link panel: existing Practice skill `so-sanh-canh-goc`, canonical Written ID `WX14-TRI-003`.
- Adds opt-in CSS `docs/assets/stylesheets/math-knowledge-composition-v1.css`, **not** globally loaded for any other topic.
- All links are rewritten for final `/kien-thuc/14-tam-giac/` path, unlike nested `preview-composition-r3/` path.

## Checklist

1. [ ] CI PASS at **latest exact Draft PR #575 head**. Legacy tests and `mkdocs build --strict` must all pass.
2. [ ] New static QA verifies CT14 final-page SVGs, MathJax wrappers, CSS asset, Practice and Written link targets; validates CT05/21/23 immutable original source SHAs.
3. [ ] New Chromium QA runs CT14 at 1365/820/390 px and checks CSS, decoded geometry SVG, actual Practice `?mode=remediation&focus=so-sanh-canh-goc`, Written `?topic=CT14#wx14-tri-003`, no horizontal overflow or JS page errors. Browser GET requests are read-only.
4. [ ] Independent academic source/visual review must verify no fact, worked reasoning, special case or diagram premise is lost; NotebookLM review used if required by current source governance. A CI PASS is **not** academic PASS.
5. [ ] Parent/Owner inspects **built HTML**, not Markdown on GitHub, preferably real iPad Safari, phone + desktop, light/dark, print and keyboard focus.
6. [ ] Owner explicitly authorizes merge/deployment of this single-topic PR before publication.
7. [ ] After approved deploy, smoke-test CT14 live routes and fall back using revert PR if needed. **Never force-push `main` or erase learner progress**.

## Release scope versus design scope

- R14: all 25 THCS topics have draft candidates on #574.
- R15: only CT14 has an academically unblocked **actual-route** candidate on #575, pending CI/Owner QA. This narrowing is expected to respect academic source SHA locks, not a failure of the visual design.
- CT05/21/23 stay as **design-only** until permission for controlled source changes is recorded. Their original sources and all canonical banks remain intact.

No changes to question banks, 87 Written records, Readiness, learner attempts, Firebase, Gemini, authentication, GitHub Actions artifact storage or current public site.
