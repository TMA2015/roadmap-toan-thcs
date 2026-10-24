# Self-Learning Math — Knowledge reading / infographic R10 wave 3

**Date:** 2026-10-24 · **Design branch:** `design/math-knowledge-pages-and-hub-r0-20261023` · **Draft PR:** #574.  
**Scope:** Four additional real-topic content previews; **not** production `index.md`, not new questions, no edits to approved Written catalog, scores, Firebase or AI tutor.  
**QA state:** source headings verified; actual MkDocs build and Chromium 12-case R10 CI required before marking technical PASS; physical iPad Safari and Owner approval required before rollout.

## 1. Source-backed UI decisions

| Topic | Source topic | Current standalone preview | SVG(s) hidden **only in preview** | SVG(s) kept | Teaching improvement |
|:---|:---|:---|:---|:---|:---|
| CT04 Biểu thức đại số | `docs/kien-thuc/04-bieu-thuc-dai-so/index.md` | `preview-composition-r10.md` | `04-01`, `04-02`, `04-03` (3 text-based recap SVGs) | no prior true mathematical graphic | §3.3 *Trừ đa thức* two necessary sequential steps (bỏ ngoặc → thu gọn) presented together, with original full examples following |
| CT07 Phân thức đại số | `docs/kien-thuc/07-phan-thuc-dai-so/index.md` | `preview-composition-r10.md` | `07-01`, `07-02`, `07-03`, `07-04` (4 text/formula recap SVGs) | none formerly diagrammatic | §3.4 parallel purpose/conditions of quy đồng ↔ rút gọn, with original domain-warning paragraph still present |
| CT08 Phương trình & bất phương trình | `docs/kien-thuc/08-phuong-trinh-bat-phuong-trinh/index.md` | `preview-composition-r10.md` | `08-01`, `08-02`, `08-03`, `08-04` (4 text-only recaps) | `08-05` open/closed endpoint number line and `08-06` intersection of solution sets | §3.4 compact sign-rule reference table, while preserving §3.5A parameter-sign warning and all full examples |
| CT11 Căn thức | `docs/kien-thuc/11-can-thuc/index.md` | `preview-composition-r10.md` | `11-01`, `11-02`, `11-03`, `11-04` (4 text-based summary cards) | no prior true explanatory diagram | §3.2 compare $\sqrt{A}$ (requires $A\ge0$) vs $1/\sqrt A$ (requires $A>0$); explain why denominator must not equal zero |

**TOTAL:** 15 old mainly-text SVG instances hidden from R10 reading flow, two genuinely visual number-line SVGs retained at their learning positions. Original 17 SVG files still exist unchanged on branch and main. No claim that the hidden images must be deleted or cannot be repurposed as optional recap/print aids later. The table does not count source code snippets as infographics.

**Heading parity:** individually checked against GitHub `main` source for each topic (full `##`, numbered `### 3.` and `### Dạng` sequence). Preserved:
- CT04: 12 top-level sections, 6 §3 knowledge subsections, 3 §5 named methods.
- CT07: 12 / 5 / 10.
- CT08: 12 / 8 / 0 **because §5 uses tabbed learning levels rather than `### Dạng` headings**; tabs remain unchanged. Do not infer absent problem methods.
- CT11: 12 / 10 / 10.

## 2. Only verified teaching-to-practice connections

Existing Practice manifests and approved Written exercise objects were read from `main`. No new exercises or keys have been created.

| Teaching unit | Actual active Practice skill (manifest) | Actual approved Written ID | Coverage caveat |
|---|---|---|---|
| CT04 §3.3 bỏ ngoặc → thu gọn | `cong-tru-da-thuc` (v6 manifest, 142 questions) | `WX04-ALG-001` | close/exact: polynomial subtraction and signs |
| CT07 §3.4 equivalence/rational simplification | `rut-gon-phan-thuc` (v1 manifest, 121 questions) | `WX07-RAT-001` | close: simplify with original domain |
| CT08 §3.4 multiply inequality by known-sign constants | `tinh-chat-thu-tu-phep-nhan` (v1 manifest, 132 questions) | `WX08-EQI-002` | close: change-direction then number-line check |
| CT11 §3.2 radicand and denominator domains | `dkxd-can` (v1 manifest, 132 questions) | `WX11-RAD-001` | close: domain and square-root absolute value |

**Link convention:** Preview uses `../bai-tap/?mode=remediation&focus=<manifest skill>` and `../../../luyen-tap/tu-luan/?topic=CTxx#wx...` inside HTML. Browser checking required; deep links are not promises of perfect exercise-family coverage.

## 3. Academic/UX invariants

- Old theory/cases/proofs/step order still present; conversion localized to one chosen passage per topic. Source screenshot double-check required before mass promotion.
- **Bước** means sequential actions; **Cách** means alternate methods. CT04 uses two *steps*, CT07 compares two distinct operations.
- CT07 mathematical equivalence must be understood on shared domain; don't imply cancellation restores excluded points. Multiplication by an extra polynomial factor can restrict the expression domain.
- CT08 sign rule requires *known sign* for multiplier; never divide by an expression containing unknown sign without splitting cases.
- CT11 distinguish root defined on $A\ge0$ vs reciprocal root on $A>0$; don't confuse root of a square with its signed base.
- Mobile standard: no smaller core font to force wide tables; let Markdown/MkDocs tables use responsive handling. Focus/keyboard, dark mode and printing remain separate visual release checks.

## 4. Required automated gates before technical acceptance

- `mkdocs build --strict`, then `scripts/test-math-knowledge-native-render-r3.js` now has **12** total full-source preview cases (R8 4 + R9 4 + R10 4).
- Chromium `scripts/test-math-knowledge-wave3-r10-browser.py` checks **4 topics × 3 viewport sizes (1365, 820, 390)**: built route and heading, opt-in CSS, exact real Practice + approved Written action, SVG decode for both CT08 visuals, no top-level page overflow or JS errors. No screenshot artifact/cache usage; comply with repo Math-only CI isolation gate.
- Existing full browser regression suite, no score/answer changes.
- Non-automated: inspect exact formula MathJax and content parity on actual site/real device; owner accept visuals; independent academic check for newly-authored academic content if ever created, not introduced by this wave.

**Deployment gate:** remain in Draft PR #574 and do **not** merge/promote preview into official topic `index.md` until Owner checks the actual rendered pages.
