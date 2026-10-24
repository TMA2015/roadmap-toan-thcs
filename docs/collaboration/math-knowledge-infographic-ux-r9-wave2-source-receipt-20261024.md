# Knowledge UX/Infographic wave 2 — CĐ02 / CĐ03 / CĐ06 / CĐ09 (R9)

**Owner instruction:** Continue after R8 real-render visual approval; do not deploy incomplete knowledge pages.  
**Status:** `REAL_SOURCE_PREVIEWS_AUTHORED / STATIC_HEADING_PARITY_PASS / NATIVE_BUILD_QA_PENDING / INDEPENDENT_GRAPH_MATH_REVIEW_PENDING`.  
**Code review PR:** #574 (`design/math-knowledge-pages-and-hub-r0-20261023`), Draft; **no production routes/content or learner data changed**.

## Source inventory / review decisions

Each proposed page includes **the full original topic lesson**, with one focused layout/method comparison and one corrected active learning link. The old full-text SVG files remain present in `docs/assets/infographics/`, but are hidden **in the proposed learning flow only**. Exact source heading lists `##`, `### 3.` and `### Dạng` were compared, same order and number as the original.

| Topic | Source `index.md` main SHA | Preview file | Infographics removed from preview flow | Visual kept | Knowledge change |
|---|---|---|---|---|---|
| CĐ02 Số & phép tính | `a5ab9fe7` | `docs/kien-thuc/02-so-va-phep-tinh/preview-composition-r9.md` | 02-01 tổng quan; 02-02 kiến thức; 02-03 dạng bài (**3**) | 02-04 trục số, giá trị tuyệt đối | §3.3 same-/different-sign addition and multiplication/division presented side-by-side in two small tables, same facts & worked calculations |
| CĐ03 Tỉ lệ | `8276948e` | `docs/kien-thuc/03-ti-le-ti-le-thuc/preview-composition-r9.md` | 03-01 tổng quan; 03-02 kiến thức; 03-03 dạng bài (**3**) | 03-04 contrast of direct/inverse proportionality | §3.11 comparison labels in proper math notation and explicit nonzero ratio denominator; existing visual + table retained |
| CĐ06 Phân tích đa thức | `866420ac` | `docs/kien-thuc/06-phan-tich-da-thuc/preview-composition-r9.md` | 06-01 tổng quan; 06-03 dạng/lỗi sai (**2**) | 06-02 choose-method decision flow | §3.7 original four short ASCII steps replaced by legible two-column checklist, **not** four mandatory solution operations |
| CĐ09 Hệ phương trình | `48775e98` | `docs/kien-thuc/09-he-phuong-trinh/preview-composition-r9.md` | 09-01 tổng quan; 09-02 text-only method recap; 09-03 thực tế/lỗi sai (**3**) | 09-04 three intersection cases graph | §3.4A same two approaches and answer, with MathJax table instead of raw code-delimiter expressions |

**Wave count:** 11 text-dense infographic display instances hidden from preview; four actual mathematical SVG figures retained; all original SVG assets unchanged. This is a selected design test, not a statement that every hidden infographic is always useless; any print-sheet role should be separately source-locked and surfaced at the appropriate conclusion/recap.

## Exact active learning links (verified from main repository)

| Teaching unit | Existing Practice manifest skill | Approved canonical Written |
|---|---|---|
| CĐ02 §3.3 rule of signs | `so-nguyen-phep-tinh` (bank 147) | `WX02-NUM-004` (anchor, includes number-line and integer operations; **adjacent** reinforcement, not dedicated pure sign-rules proof) |
| CĐ03 §3.11 direct vs inverse | `phan-biet-thuan-nghich` (bank 124) | `WX03-RAT-002` (inverse-ratio application; not a full survey of both kinds) |
| CĐ06 §3.7 method choice | `phoi-hop-phuong-phap` (bank 120) | `WX06-FAC-002` (continue factoring with identity) |
| CĐ09 §3.4A method contrast | `chon-phuong-phap` (bank 129) | `WX09-SYS-001` (addition and checking solution, **not** side-by-side method score) |

Link discipline: each deep link opens a *real existing skill/approved Written item*. A paper exercise with **related but not identical** scope is described accurately. Do not label every link as complete coverage of the lesson's comparative theme or use it in Readiness scoring.

## Technical contract and known risk

1. Markdown preview files are extra child pages under `docs/kien-thuc/<topic>/preview-composition-r9.md`, not active `index.md`. Links to assets from their built URL require one more `../` than original source. Source SVG `![...](../../assets/)` references therefore changed to preview-specific `../../../assets/` (the original assets aren't edited).
2. Page-specific stylesheet `math-knowledge-composition-v1.css` only on preview; no global CSS or theme mutation.
3. New/converted formulae use Markdown MathJax-supported inline notation within tables rather than math commands written inside raw HTML that GitHub fails to typeset.
4. New CI coverage in `scripts/test-math-knowledge-native-render-r3.js` verifies all **eight** full-source preview routes on real `mkdocs build --strict` HTML, including CSS files, image path existence, built math wrappers, retained SVGs, absence of known orphaned captions and existing learning-action labels.
5. Explicitly **not yet tested**: correct underlying mathematical labels on every retained SVG in independent academic review; physical iPad Safari; full DOM screenshots at 200% zoom; long-page print with all tabs; measured total learning effort.
6. No original published topic `index.md`, bank questions, canonical written records (87 items), Tutor integration, scores, Readiness, bookmarks, home entry page or Firebase authentication changed.

## Decision gates

- **R9 CI** exact head `Roadmap PR Quality` must PASS for the newly added content and QA script; older R8 PASS is not a substitute.
- Owner to judge rendered appearance **on built MkDocs output**, not GitHub blob view (which doesn't load custom CSS/MathJax). Offer the same built-preview approach used for prior R8 review.
- If eight-page batch passes, repeat selectively for next topic group; preserve source-specific proof logic and images.
- No merge until owner approves production promotion and final regression checks on the actual learner routes.
