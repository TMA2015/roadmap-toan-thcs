# Self-Learning Math — R11 Knowledge UX / Infographic source audit, wave 4

**Review date:** 2026-10-24 · **Design branch / PR:** `design/math-knowledge-pages-and-hub-r0-20261023`, Draft #574.  
**Status:** `SOURCE_HEADINGS_PASS / ACADEMIC_EDITS_MINIMAL / CI_PENDING / LIVE_DEPLOYMENT_HOLD`.  
**Owner intent:** continue after previous rendered samples accepted; compact mathematically meaningful concepts, avoid redundant text-filled infographics, preserve real diagrams, link suitable existing activities.

## Four full-source previews (not live topic routes)

| Topic / actual source | Preview | Archived from reading flow only | Visuals retained in exact topic |
|---|---|---|---|
| CT12 · `docs/kien-thuc/12-phuong-trinh-bac-hai-viete/index.md` | `preview-composition-r11.md` | 12-01, 12-02, 12-03, 12-04 = 4 text-heavy SVGs | **12-05**: 3 cases of quadratic Δ as genuine intersections of parabola & Ox |
| CT13 · `docs/kien-thuc/13-goc-va-duong-thang/index.md` | `preview-composition-r11.md` | 13-01, 13-02, 13-03 = 3 text-heavy SVGs | Three geometry drawings: opposite angles, parallel lines cut by transversal, alternate interior angles |
| CT15 · `docs/kien-thuc/15-duong-dong-quy/index.md` | `preview-composition-r11.md` | 15-01, 15-02, 15-03, 15-04 = 4 text-heavy SVGs | Four different line-concurrency centers: centroid, orthocenter, incenter, circumcenter |
| CT16 · `docs/kien-thuc/16-tu-giac/index.md` | `preview-composition-r11.md` | 16-01, 16-02, 16-03, 16-04 = 4 text-heavy SVGs | Five shape diagrams: trapezoid, parallelogram, rectangle, rhombus, square |

**Wave total:** **15 text-heavy SVG display instances suppressed only in draft previews**, **13 mathematical SVG figures retained**, **zero SVG source files deleted**, zero original `index.md` files edited.

Source order parity validated against source `main`: full ordered list of Markdown H2..H5 headers, **excluding only deliberately archived infographic headings**, identical in each preview. Source facts remain, with one hand-reviewed concept/formula display adjustment per topic.

## Educational presentation revisions

- CT12 §3.2: the three Δ rows now typeset as math with bold conclusions; keep original Δ→parabola visual right after classification. `Δ>0` two real roots, `Δ=0` one repeated real root, `Δ<0` no real root; no new rule inferred from diagram.
- CT13 §3.8–3.9: consolidate two vertically stretched ASCII arrows into concise descriptions plus **side-by-side logical directions**: (a\parallel b\Rightarrow) corresponding angle relation (property), converse suitable angle relation (Rightarrow a\parallel b) (parallel criterion) under transversal assumptions. Important: they are two deductions, not sequential mechanical steps. Retain the full separate reasoned explanations and original actual figures.
- CT15 §3.2: orthocenter position in acute/right/obtuse triangles shown side-by-side, without changing definitions; geometry figures kept and four centers remain distinct. Source §3.5 recognition table retained as-is.
- CT16 §3.6: comparison of **alternative** tests for a square starting from verified rectangle vs verified rhombus; all four original alternatives retained. Keep real figures, original detailed shape definitions and §3.7 sign-identification table.

**Mathematical cautions:** a visual should not be used as a hidden premise for proofs. All logically directional converses must preserve stated assumptions. No "every rhombus has equal diagonals", "every rectangle has perpendicular diagonals", or "all four triangle centers coincide". CT15 orthocenter outside obtuse triangle is a separate case from its circumcenter; both have direct geometry figures.

## Linked learner actions — existing library only

| Reading unit | Active Practice `focus` skill from actual manifest | Published Written exercise ID | Link role |
|---|---|---|---|
| CT12 §3.2 Δ / roots | `tinh-delta` | `WX12-QUA-001` | Work out discriminant and quadratic solution |
| CT13 §3.9 proof of parallel | `dau-hieu-song-song` | `WX13-LIN-001` | Opposite logical direction: angle condition → parallel |
| CT15 §3.5 selecting 4 centers | `phan-biet-bon-tam` | `WX15-CEN-002` | Incenter vs circumcenter and their different distance claims |
| CT16 §3.6 square recognition | `hvuong-dau-hieu` | `WX16-QUAD-002` | Stepwise proof toward square, not a claim that diagram alone suffices |

No new exercises, answer keys, method IDs, Readiness score calculation, Firebase/Tutor integration, or learner state writes. **Live** `index.md` pages remain unchanged.

## Technical and release gates

- CSS opt-in preview stylesheet `math-knowledge-composition-v1.css` is already proven in R9/R10; not globally registered.
- Native MkDocs source-asset resolver should use `../../assets/` for Markdown images; raw HTML `<img src>` uses `../../../assets/` for nested published preview route only. Original sources are untouched.
- `scripts/test-math-knowledge-native-render-r3.js` extended to **16** preview route/content/maths/asset checks including the four R11 pages and retained figure requirements.
- `scripts/test-math-knowledge-wave4-r11-browser.py` runs Chromium at **1365px desktop / 820px iPad-size / 390px phone** for **4×3=12** checks covering real rendered page, CSS, two verified actions, all 13 SVG loads, no body-level horizontal overflow and no JS page errors.
- These tests are integrated in existing GitHub Actions QA without uploading artifacts (as required by Math-only isolation rules).
- **Pending at initial report time:** exact-head CI overall PASS, physical iPad Safari, interactive deep-link route recheck and Owner review of actual rendered layout.
- **HOLD:** Do not merge or replace any official topic route. Once rendered visuals are approved, follow staged controlled promotion with source-parity review; no blind markdown mass formatter and no canonical bank change.
