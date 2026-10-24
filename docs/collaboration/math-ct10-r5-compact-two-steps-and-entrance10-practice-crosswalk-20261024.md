# CĐ10 R5 — Compact graph-drawing steps + verified Entrance10 practice crosswalk

**Date:** 2026-10-24  
**Owner brief:** preserve attractive R4 overall knowledge tabs; (a) change mislabeled "Cách 1/2" to **two complementary steps** and arrange concise algebra horizontally when screen permits; (b) §6 "Dạng bài thi vào lớp 10" must display actual learning destination and direct action, but only if a corresponding item/skill exists; avoid fabricated links.

**Status:** DESIGN_IMPLEMENTED_ON_DRAFT / INDEPENDENT_ACADEMIC_AND_REAL_MKDOCS_BROWSER_QA_PENDING / NOT_DEPLOYED.

## Files

- **New real-source draft** `docs/kien-thuc/10-ham-so-do-thi/preview-tabs-r5.md` alongside R4 (R4 source unchanged).
- **New scoped CSS** `docs/assets/stylesheets/math-topic-knowledge-tabs-pilot-r5.css`, extending only R4 preview CSS. Includes two horizontal step-cards with arrow, three-part worked example, correct narrow-screen vertical fallback, accessible four-column exam table and narrow-screen cards.
- **Standalone owner preview** `math_topic_cd10_steps_exam_links_r5.html` (delivered via conversation attachment; not committed). Loads **pinned original CĐ10 Markdown** from GitHub, but applies local editorial R5 transformations for comparison. Internet required on owner's PC. No learner data storage/writes.
- **Existing native tab JS** `math-topic-knowledge-tabs-pilot-r4.js` reused unchanged; no new practice engine, Gemini or scoring logic.
- **Production knowledge source** `docs/kien-thuc/10-ham-so-do-thi/index.md` unmodified; previous 120 question bank, 87 canonical Written items, skills, answers and Readiness untouched.

## Math/pedagogy correction

The old source gave "Cách 1 — Cho x=0" and "Cách 2 — Cho y=0". These are NOT competing alternatives for drawing one line; they are two **complementary point-finding steps**. New UI presents them side by side on desktop, vertically with down-arrow on phones:

- `y=ax+b`, `a != 0`, Step1 `x=0 -> A(0;b)`.
- Step2, **when `b !=0`**, `y=0 -> x=-b/a -> B(-b/a;0)`.
- Mark A and B and draw the line.
- **Critical degeneracy:** if `b=0`, the two intercept operations both give `O(0;0)`, not two distinct points. Instead choose `x=1 -> B(1;a)`. This condition **was not explicit in old source** and must pass academic QA prior to promoting to main.
- Worked example `y=2x-4`: A(0;-4) -> B(2;0) -> connect.

## §6 crosswalk: ten original source lines, six currently with exact active destinations

Source curriculum/exam priorities (3–5 stars) remain attributed to Roadmap's *editorial priority*, **not published exam frequency**. Four columns in native page: Dạng bài / Ưu tiên / Vị trí bài luyện / Mở bài. Responsive stacked cards on phone.

| Source entrance exam type | Active exact destination checked (code/bank) | Action status |
| --- | --- | --- |
| Tính giá trị hàm số | `CT10 Practice` focus skill `tinh-gia-tri-ham` | `READY` |
| Kiểm tra điểm thuộc đồ thị | `CT10 Practice` focus `diem-thuoc-do-thi` | `READY` |
| Vẽ đường thẳng | `CT10 Practice` focus `ve-do-thi-ham-bac-nhat`; `WX10-FUN-001` | `READY` |
| Tìm giao điểm hai đường thẳng | `CT10 Practice` focus `giao-diem-do-thi`; anchor `WX10-FUN-003` | `READY` (Entrance10) |
| Tìm tham số để đường thẳng qua điểm | no exact active skill type + no dedicated canonical written | `PENDING_EXACT_ITEM` |
| Song song / cắt nhau / trùng nhau | `CT10 Practice` focus `vi-tri-hai-duong-thang` | `READY` |
| Bài toán tham số với hệ số góc | no exact active skill type + no dedicated canonical written | `PENDING_EXACT_ITEM` |
| Liên hệ giao điểm với hệ phương trình | `CT10 Practice` focus `lien-he-he-phuong-trinh`; anchor `WX10-FUN-003` | `READY` (Entrance10) |
| Đường thẳng và parabol | legacy `10-CH-01` exists as archived Markdown only and build hook hides it; no exact active question/written item | `PENDING_EXACT_ITEM` (extension, prerequisite CĐ12) |
| Mô hình hóa bằng đồ thị | some `CT24` modelling Written exists but **not verified as graph modelling**; no actual matching task | `PENDING_EXACT_ITEM` |

**Evidence route:** `docs/assets/javascripts/practice-engine-v2.js` `applyRequestedFocus` accepts `?mode=remediation&focus=<existing_skill>` and starts a topic-specific interactive session; source manifest `docs/assets/data/practice/10-ham-so-do-thi-v1.manifest.json` declares each of six matched skills and has 120 questions. `docs/assets/javascripts/written-exercise-library-v1.js` filters by `?topic=CT10` and scrolls to a valid `#wx10-fun-00X` after async render; each cited id is academically approved in 87-item library.

**Caveat:** The `mode=remediation` focus is an existing **guided Practice**, so any real completed learner attempt naturally uses existing formative evidence; it is NOT an independent Readiness exam, not a new score mode, and has no new database write code. Exact live navigation by a browser remains a separate QA gate.

**Four gaps**, *not* a claim the whole cross-repo curriculum lacks all such items: type #5/#7/#9/#10 in §6. Propose independent source-locked item authoring/QA; no fabricated active buttons.

## UX accessibility and local QA

- Data-backed draft source counts: five Knowledge and five Problem method tabs remain; 11 original large sections maintained; one `<table>` with **10** source exam types, **six rows with actions**, **nine actual anchors** (some rows offer both Practice and Written), **four explicit empty rows**.
- Responsive CSS uses a two-column step comparison on >=720 CSS pixels and collapses to vertical arrow flow on small screens. Table becomes semantic visually stacked cards on <=720px; touch targets >=43–44px.
- Standalone HTML JavaScript passed `node --check`.
- Browser test of standalone HTML with **format-matching artificial fixture** (source length 17,506, 11 main sections, 8 Knowledge, 11 Types) at **1365 / 820 / 390px**, assertions: 5+5 tabs, actual two step cards, ten exam rows, 9 active anchor elements, 4 pending entries, no uncaught JS exceptions or horizontal viewport overflow → **PASS, fixture only**. Browser cannot access external GitHub source in testing environment; not evidence of authentic full-content R5 rendering.
- **Still required:** exact native MkDocs built output math in inline HTML cards with MathJax, print-all including hidden tabs, real rendering of SVG and a physical iPad pass. Do **not** call this `PRODUCTION_QA_PASS` or source-locked academic `OVERALL|PASS`.

## Gate

No changes to original `index.md`, no bank/learner data migration. Keep Draft PR #574 separated from production. Owner can inspect the R5 standalone compared to R4, then decide whether to integrate into live topic knowledge page. Missing content enters canonical bank only after independent review and explicit owner release.
