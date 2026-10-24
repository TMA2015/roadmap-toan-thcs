# Self-Learning Math — R13: first-pass Knowledge candidate coverage for all 25 THCS topics

**Date:** 2026-10-24 · **Status:** `SOURCE_READING_PARITY_PASS / EXACT_HEAD_CI_PENDING / OWNER_RENDERED_REVIEW_PENDING / DEPLOYMENT_HOLD` · **PR:** #574 Draft. This is a source-preserving UX pilot, **not** a release.

## Important distinction

- Every official knowledge page `docs/kien-thuc/<topic>/index.md` remains the existing original on GitHub `main`. GitHub PR #574 contains **only additional preview Markdown pages** alongside these originals. Existing live site/navigation, 87 approved Written items, all Practice and Core questions, scores, profiles, Readiness evidence, Gemini and authentication unchanged.
- **Coverage** now means *a source-backed view candidate exists for each of 25 THCS topics* (24 per-topic preview-composition pages + CT10's separately approved tab preview). Coverage is **not** 25 topics fully QA-approved or migrated.
- All candidate topic originals have different pedagogical purposes. CT01 is a curriculum graph/wayfinding page. CT10 has 5 theory + 5 methods tabs and 10 exam-type rows. CT22/24/25 use subject-specific compact layouts.

## R13 actual source decisions

| Topic | Preview | Source-to-rendering edit | Text SVGs hidden in candidate only | Important figure(s) kept | Practice/Written truth |
| --- | --- | --- | --- | --- | --- |
| **CT01** Bản đồ chương trình | `docs/kien-thuc/01-ban-do-chuong-trinh/preview-composition-r13.md` | §3.7 three learner states into a compact **2-column navigational** table | **0** | `01-overview.svg`, knowledge prerequisites and back-navigation links kept | **No invented Practice button**; map is navigation |
| **CT22** Đại lượng đặc trưng | `docs/kien-thuc/22-dai-luong-dac-trung/preview-composition-r13.md` | §3.6 compare mean **12.4** vs median **8** of `7,8,8,9,30` in side-by-side table, with explicit outlier effect | **3**: 22-01,02,03 | 3 actual statistics SVGs, including outlier visualization | Real skill `so-sanh-trung-binh-trung-vi`; **NO canonical CT22 Written exists**, so none linked |
| **CT24** Bài toán thực tế | `docs/kien-thuc/24-bai-toan-thuc-te/preview-composition-r13.md` | §3.1 four successive phases of modelling represented in a **2-column step/meaning table** (not four narrow columns) | **3**: 24-01,02,04 | 3 modelling example SVGs and 24-03 *choose model* decision/map visual remain | Real Practice skill `chuyen-dong`, canonical `WX24-MOD-001` |
| **CT25** Tổng hợp ôn thi 10 | `docs/kien-thuc/25-tong-hop-on-thi-10/preview-composition-r13.md` | §3.2 three study phases compact into a 2-column phase/objective table, retaining every original objective | **3**: 25-01,02,04 | 3 existing visual review/priority/3-phase SVGs and useful `25-03` error-remediation cycle remain | Real Practice skill `phan-loai-loi`; **NO canonical CT25 Written exists**, so none linked |
| **CT10** Hàm số và đồ thị | `docs/kien-thuc/10-ham-so-do-thi/preview-tabs-r6.md` (CT10 architecture differs) | Preserves two separate 5-tab groups; compact working example displays `2x-4=0⇒x=2`; 10 entrance10 rows. **R13 minor fix**: four links labelled Luyện kỹ năng now deep-link exact real skills and display **Luyện ngay**; two pending practice pseudo-links replaced by **nonclickable** status. | Older CT10 design had already consolidated early duplicated info SVGs into a useful formula-to-graph visual | Six educational SVGs retained in previous tab pilot | Six Entrance10 table verified CTAs + four §5 exact deep links; no misleading clickable pending links |

**R13 in three ordinary subject topics:** 9 summary-text infographic *display instances* hidden from the draft only; SVG originals preserved. CT01 overview infographic deliberately retained, CT10's prior graphic editorial choices unchanged. No new math questions, keys or unsafe assumptions. Source semantics maintained. Code source headings (`##` plus subheadings) held in same order for CT01/22/24/25.

## Historical wave coverage table

- **R8/R7 source pilots**: CT05, CT14, CT21, CT23 (4).
- **R9**: CT02, CT03, CT06, CT09 (+4 = 8).
- **R10**: CT04, CT07, CT08, CT11 (+4 = 12).
- **R11**: CT12, CT13, CT15, CT16 (+4 = 16).
- **R12**: CT17, CT18, CT19, CT20 (+4 = 20).
- **R13**: CT01, CT22, CT24, CT25 (+4 = **24** full-source preview-composition pages) plus **CT10** alternate tab preview = **all 25 have a preview candidate**.

**Important:** CT01 map and CT10 tabs are purposely different and should not be converted into plain universal topic tables; lessons, skill taxonomy and Readiness continue to use current architecture. The user approved the overall design direction and earlier CT10 visual concept, not automatic migration into production.

## New QA / release gates

- `scripts/test-math-knowledge-native-render-r3.js`: **25** separate full-source candidate HTML checks after `mkdocs build --strict`, including 24 regular preview route assets + CT10 `preview-tabs-r6`.
- `scripts/test-math-knowledge-wave6-r13-browser.py`: 5 specific candidates × **1365 / 820 / 390** viewport widths = **15** real built MkDocs browser QA cases, including two five-tab groups, four source-aligned page layouts, correct number of active practice links (CT01:0, CT22:1, CT24:2, CT25:1; CT10:6 exam table plus other topic skills), SVG decoding, no JS page error and no body overflow.
- **No GitHub Actions artifact/cache uploads**.
- Still required before production: latest exact-head GitHub Actions `PASS`, full MathJax & dark-mode/print tests, independent academic parity review for every hidden infographic vs native text and retained diagrams, Owner acceptance on *rendered site* (GitHub Markdown blob is not equivalent), coherent scheme for 25 official routes, recovery/rollback, and explicit release authorization.
- Site hub with separate THCS / THPT / SAT–ACT entry choices is a **separate future architecture change**, not part of this R13 preview wave.
- Confirm PR remains **DRAFT** and `docs/kien-thuc/*/index.md` unchanged.

**Do not announce final deployment or claim all 25 live pages upgraded.** Source authoring completion and production delivery are separate.
