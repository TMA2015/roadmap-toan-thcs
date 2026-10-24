# Self-Learning Math — R12 / Wave 5 knowledge layout & infographic crosswalk

**As of 2026-10-24. Draft work only** under PR #574; none of the four official `docs/kien-thuc/*/index.md` files edited. No learner attempts, Core/Readiness, sanctioned 87 Written item objects, Gemini, authentication or score logs changed.

**Project UX standard:** use side-by-side concepts and compact math notation only where this clarifies *logically parallel* knowledge. Keep full proofs, original mathematical conditions, useful geometry, source sections, exact question IDs and existing learning progression. Do not infer that every infographic with text is redundant: strategy/argument flow graphics can help readers.

## Source/preview preservation audit

| Topic | Full content preview | Hidden text-dense SVGs **only in preview display** | Images preserved | Formatting edit |
| --- | --- | --- | --- | --- |
| CT17 Thales & đồng dạng | `docs/kien-thuc/17-thales-dong-dang/preview-composition-r12.md` | 17-01,02,03,04 (**4**) | 3 actual geometry SVGs | §3.5 three similarity conditions g-g / c-g-c / c-c-c in one comparison table. Preserve matching vertices and the included-angle requirement |
| CT18 Hệ thức lượng | `docs/kien-thuc/18-he-thuc-luong/preview-composition-r12.md` | 18-01,04 (**2**) | **11** SVGs (8 previously separate geometry figures and 18-02/03 concept-with-illustration SVGs among them) | §3.3 sin/cos/tan definitions in 3-column comparative math table; definitions depend on chosen acute angle |
| CT19 Đường tròn | `docs/kien-thuc/19-duong-tron/preview-composition-r12.md` | 19-01,02,03,04 (**4**) | **4** source-linked geometry diagrams | §3.4 equal 180° sums of both opposite-angle pairs in a cyclic quadrilateral in a 2-column math table |
| CT20 Hình học tổng hợp | `docs/kien-thuc/20-hinh-hoc-tong-hop/preview-composition-r12.md` | 20-01,04 (**2**) | **11** illustrations: 9 geometry/solid graphics + strategy maps 20-02 and 20-03 | §3.2 three logically separate teaching bridges organized as data → math step → outcome; this is **not** a single compulsory 3-step method |

**Source-image receipt:** 41 original displayed figures → **29 retained**, **12 text-heavy infographic display instances hidden only from draft reading flow**; all SVG source files untouched in main and branch. Original non-infographic H2..H5 headings remain exactly same *ordered strings* per source. The "hidden SVG" decision is reversible and does not imply retirement of independent after-lesson summary or printable recaps.

**Semantic nuance:** 18-02 height theorem and 18-03 trigonometric sides do contain meaningful labelled figures; retained intentionally. 20-02 method selection and 20-03 chain-of-proof visual maps retained even though they have text, because their visual purpose is navigational/metacognitive. Never force them into an unlinked five-column wall of text.

## Linked real learner destinations (not newly authored exercises)

All 4 `focus` skills were verified against active practice manifest and all 4 Written IDs against canonical library on `main`.

| Unit | Existing skill | Approved canonical Written ID |
| --- | --- | --- |
| CT17 §3.5 similarity | `dong-dang-gg` | `WX17-SIM-002` |
| CT18 §3.3 acute trig ratios | `sin` | `WX18-TRI-001` |
| CT19 §3.4 cyclic quadrilateral | `dau-hieu-noi-tiep` | `WX19-CIR-002` |
| CT20 §3.6 cone volume | `the-tich-hinh-non` | `WX20-GEO-002` |

Deep links use `../bai-tap/?mode=remediation&focus=` and a true Written `?topic=CTxx#wx...` route; they are **contextual practice access**, not Readiness or a claim that one target tests all of the enclosing topic.

## Source & technical gate records

- R11 prior entire GitHub Actions run `40061253521` PASS as verified at R12 start. It is not evidence that the R12 new code passes.
- R12 four full real-source page previews created and linked from GitHub Draft PR #574. Native MkDocs QA expanded from 16 to **20 source-locked preview pages** (`scripts/test-math-knowledge-native-render-r3.js`).
- Separate `scripts/test-math-knowledge-wave5-r12-browser.py` checks 4 topics x desktop 1365px / tablet-size 820px / phone 390px, verifying actual output URLs, CSS application, the 4 paired learning actions, all 18 explicitly enumerated essential SVGs among the 29 retained, no document overflow and no JS errors.
- R12 browser tests are included in `.github/workflows/qa-pr.yml`; no upload-artifact or GitHub Actions caching (repository isolation contract).
- Markdown embedded images stay `../../assets/` **source-relative** so MkDocs rewrites them; raw HTML SVG uses `../../../assets/` as built-URL-relative (critical distinction validated in prior R9 CI).
- Source titles/exceptions to MathJax tables retained; `mkdocs build --strict` and current exact-head CI remain formal acceptance requirements.
- Further acceptance: review actual MkDocs-rendered topic pages and math/diagram placement at PC/tablet/phone, line breaks, dark mode, print and original knowledge crosslinks. Avoid assessing the GitHub Markdown blob as if it were MkDocs.
- **Owner release gate:** No modifications to the official 25 topic index routes or publishing until stage-specific visual/academic signoff. PR remains open DRAFT.

## Backlog after R12

Twenty preview pages at stage-specific R3/R9/R10/R11/R12 have now been authored, **plus separate CT10 tabbed preview R6** (CT10 is not yet promoted). The remaining five official topic entry points for *first-pass topic-wide authoring review* are CT01 (map/hub; do not clutter), CT10 (tab pilot needing final integration QA), CT22 (statistics characteristic quantities), CT24 (modelling), CT25 (Entrance10 synthesis). Treat CT01 as architecture/navigation, not a standard theory/method textbook page. Completion of 25 preview candidates is distinct from website deployment and from final infographic academic parity.

**R12 verdict:** `CONTENT_STRUCTURE_AND_IMAGE_PRESERVATION_PASS / NEW_NATIVE_CI_PENDING / DEPLOYMENT_HOLD`.
