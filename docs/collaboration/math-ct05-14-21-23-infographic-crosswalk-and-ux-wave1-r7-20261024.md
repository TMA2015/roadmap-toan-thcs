# Self-Learning Math — Infographic/source-alignment & content layout Wave 1 (CT05/14/21/23)

**Receipt:** MATH-KNOWLEDGE-UX-INFO-W1-R7-20261024  
**Date:** 2026-10-24  
**Owner instruction:** proceed after checks; cross-check/tune infographics; reorganize knowledge so short parallel ideas and short processes read together; preserve original facts, diagrams, exercise destinations, and current three interactive contexts.  
**Status:** `SOURCE_STRUCTURE_PASS / LINK_MAPPING_PASS / VISUAL_QA_PENDING / ACADEMIC_GRAPHIC_QA_PENDING / DEPLOYMENT_HOLD`.  
**Branch:** PR #574, separate design-only work, no published `docs/kien-thuc/<topic>/index.md` changed, no canonical learner question/mastery/Readiness/written data changed.

## 1. First-wave files

| Topic | Full-source preview (not live index) | Original text-focused SVGs archived from reading flow | Real mathematical diagrams kept | New visual |
| --- | --- | --- | --- | --- |
| **CT05** Hằng đẳng thức | `docs/kien-thuc/05-7-hang-dang-thuc/preview-composition-r2.md` | `05-01`, `05-02`, `05-03`, `05-04` | none formerly inline | `05-05-mo-hinh-dien-tich-binh-phuong-r2.svg` |
| **CT14** Tam giác | `docs/kien-thuc/14-tam-giac/preview-composition-r2.md` | `14-01`, `14-02`, `14-03`, `14-04` | 2 existing real geometry SVGs under `assets/geometry/14` | no |
| **CT21** Thống kê | `docs/kien-thuc/21-thong-ke/preview-composition-r2.md` | `21-01`, `21-02`, `21-03` | 8 existing real statistics/graph SVGs under `assets/statistics/21` | no |
| **CT23** Xác suất | `docs/kien-thuc/23-xac-suat/preview-composition-r2.md` | `23-01`, `23-02`, `23-03` | 4 existing sample space/experiment/probability tree SVGs under `assets/probability/23` | no |

**Totals:** 14 old *text-only* infographic display instances hidden **in previews only**, **zero original assets deleted**; 14 actual geometry/statistics/probability figures retained + 1 new mathematics diagram. This is a *display policy*, not erasure or final educational judgment. Existing SVG labels and source versions remain available for the final side-by-side review.

## 2. Exact duplicate-content decisions

| SVG group | Repeated information in official article | Why alter its learner placement | Better purpose |
| --- | --- | --- | --- |
| CT05/01–04 | Seven formulas, steps for recognition, method names, common mistakes, recap labels | Every identity and example already in §3/§5; redundant full-screen summary immediately before derivations | Short optional after-lesson recap; not an initial giant image |
| CT14/01–04 | Side/angle facts, triangle classes, Pythagoras, inequalities and validity reminders | Theory also explains individually; actual geometry figures are stronger evidence for shapes | Use actual labeled geometry; source-locked recap optional |
| CT21/01–03 | Frequency/frequency rate definitions, sample-quality checklist, type of chart selection | The source has tables and eight actual plot graphics; repeated text increases page length | Use plots and source-selectable text; concise method map if independently useful |
| CT23/01–03 | Sample space, event, (n(A)/n(\Omega)), tree strategy and error checklist | Text already in §3, real probability tree and experiment stabilization figure exist | Use precise tree and data figure; optional end-of-chapter reminder |

**Important anti-drift:** SVG hardcoded lists/counts must not be used to define canonical problem-type counts. If a concept/source condition changes, mark dependent figures for source re-review.

## 3. New original CT05 mathematical diagram: academic caveat

`docs/assets/infographics/05/05-05-mo-hinh-dien-tich-binh-phuong-r2.svg`
- Diagram divides a square of side (a+b) into (a\times a), two (a\times b), and (b\times b) areas.
- Graphical construction is **defined for** (a>0,b>0); its *area reasoning* shows ((a+b)^2=a^2+ab+ab+b^2=a^2+2ab+b^2).
- **The algebraic identity is valid for all real** (a,b), regardless of whether a drawn rectangle has positive side lengths.
- Diagram role is `concept_visual`, not `text_recap`; includes SVG `title` and `desc` for screen-reader/semantic source review.
- **Review still needed:** confirm the displayed geometry/sizes/labels, legibility and area illustration on physical iPad and small screens; do not claim independent NotebookLM PASS. Do not delete the original seven-formula explanation.

## 4. Knowledge source preservation and exercised learning pathways

**Programmatic topic heading receipt (live main source ↔ preview R2):**
- CT05: 8 numbered §3 concept headings and 9 §5 method headings — **exact ordered labels preserved**.
- CT14: 10 numbered §3 headings (including 3.6A, 3.8A) and 10 §5 method headings — preserved.
- CT21: 11 numbered §3 headings (including 3.1A, 3.6A/B) and 9 §5 method headings — preserved.
- CT23: 9 numbered §3 headings (including 3.4A) and 8 §5 method headings — preserved.
- Other 4.2 explanation/CĐ05, 3.1 CĐ14, 3.4 CĐ21 and 3.4A CĐ23 have exactly **one deliberate semantic formatting conversion** each from prior R6; no equations/answer keys rewritten by this wave.
- Parent original `index.md` files are immutable on this Draft branch. The source comparison is **structure/heading**-complete; *not* a formal proof of byte-identical mathematical facts under rendered HTML.

**Direct practice links added in previews using actual manifest skills and approved Written IDs only:**

| Knowledge unit | Verified active Practice skill | Verified canonical Written item | What learner sees |
| --- | --- | --- | --- |
| CT05 §4.2 expand ↔ recognize | `nhan-dang-hdt` (120-question CT05 bank) | `WX05-IDN-001` | `Luyện ngay` + `Làm tự luận` |
| CT14 §3.5 angle ↔ side | `so-sanh-canh-goc` (140-question CT14 bank) | `WX14-TRI-003` | `Luyện ngay` + `Làm tự luận` |
| CT21 §3.4 table frequency | `bang-tan-so` (134-question CT21 bank) | **No exact matching canonical Written** is implied by this source unit | `Luyện ngay` only |
| CT23 §3.4A empirical vs classic | `xac-suat-thuc-nghiem` (120-question CT23 bank) | `WX23-PRO-001` | `Luyện ngay` + `Làm tự luận` |

**Actual routing:** Practice `../bai-tap/?mode=remediation&focus=<skill>` from a `preview-composition-r2/` route; Written `../../../luyen-tap/tu-luan/?topic=CTxx#wx...` uses the existing catalog loader/async hash scroll. These are supported routes *according to GitHub source code*, but real deployed preview-link browser checks still pending. Do **not** treat legacy local paper Markdown as active because build hook replaces such practice pages.

**New shared style:** `docs/assets/stylesheets/math-knowledge-composition-v1.css`: opt-in scoped compare/step/principle and linked-practice components, responsive two-to-one column and 44px targets; no global CSS injection, no scoring JavaScript.

## 5. Outstanding QA gates before migrating the original `index.md` pages

1. [ ] Current PR exact-head GitHub Actions `Roadmap PR Quality` **PASS**; old runs cancelled by new commits are NOT passes.
2. [ ] Native MkDocs build and real rendered screenshot of all four candidate pages + CT10 R6; compare against source live page on PC/iPad/phone, check images/MathJax and dark mode.
3. [ ] Confirm image paths/relative links under `preview-composition-r2/` nested output vs root `index/` routes. **Promoting a preview source into `index.md` requires rewriting relative resource and Practice/Written paths**; cannot copy blindly.
4. [ ] Verify 15 retained/new diagram SVG math labels, axes/shapes, alt text and readibility. Spot-check all facts before final infographic status `RETIRED_FROM_READING_FLOW`.
5. [ ] Check print/export renders hidden material and retains all figures.
6. [ ] Parent/Owner acceptance of real rendered pages with long content.
7. [ ] When publishing any *new* mathematical facts/question/keys, run independent NotebookLM academic packet `OVERALL|PASS` and explicit Owner signoff. Formatting alone still requires source parity.
8. [ ] Staged rollout of remaining 20 topic pages based on R6 inventory; no global blind Markdown rewriter.

**Current verdict:** `WAVE1_SOURCE_STRUCTURE_PASS`, `VISUAL/CI/OWNER_RELEASE_HOLD`. Further knowledge-page design work allowed on this Draft branch only; **no merge or deployed homepage/learning change yet**.
