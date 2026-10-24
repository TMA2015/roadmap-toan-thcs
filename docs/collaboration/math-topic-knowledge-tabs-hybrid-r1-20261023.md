# Self-Learning Math — Hybrid horizontal tabs for long KNOWLEDGE topic pages (R1)

**Doc ID:** MATH-TOPIC-READING-UX-TABS-R1-20261023  
**Scope:** knowledge **page only**, vertical topic spine; separate from short SGK Core and all three existing interactive assessment contexts.  
**State:** DESIGN_CANDIDATE / INTERACTIVE_STANDALONE_PROTOTYPE / OWNER_VISUAL_QA_PENDING / NO_SITE_CHANGES.  
**Date:** 2026-10-23.  
**Owner's UX request:** topic pages are too long; specifically sections **3. Kiến thức cốt lõi** and **5. Các dạng bài cần nắm vững** should have short intros followed by ~5 horizontally selectable subtopics with Prev/Next at the bottom. Learner must always know **where they are** in the topic. Keep current site flow, content and assistance unless improvement is proven.

## 1. Observed, not assumed

- `docs/kien-thuc/10-ham-so-do-thi/index.md` remains a very long linear 11-section article with multiple headers, formulas, examples and diagrams; its **academic content should not be deleted**.
- `docs/templates/chuyen-de.md` *already contains an authoring example* with MkDocs Material/PyMdown `=== "Mức 1 ..."` tabs. This establishes availability of some CSS/tab patterns, **not** proof that the owner-remembered live tab already exists within a specific released topic's core knowledge section. A sample of topic pages (02,05,10,12,14,19,21,23) did not identify that recalled specific implementation.
- Existing `topic-workspace.css` supports sticky anchors and some collapsible cards, and shared `site-design-system.css` supports light/dark palette and responsive layout. **Reuse implementation; don't add a framework for tabs**.
- Earlier standalone `math_knowledge_design_preview_r0.html` was a **short KNTT Core lesson + 3-choice outer hub** mock. Current R1 standalone preview addresses the **different, long topic KNOWLEDGE page**. The two should not be confused.

## 2. Design decision candidate: HYBRID, not tabs for the whole page

**Top-level page remains vertical with 4–5 visible anchorable zones**; only information-dense sibling subsections become tabs:

1. Compact title, purpose, grade span + buttons (Learn / Practice / Readiness destinations remain unchanged).
2. Short 'knowledge map'/prerequisites/learning objectives.
3. **Kiến thức cốt lõi**: 1 short intro + up to **3–6 meaningfully named horizontal tabs**, each one reading unit. Each tab presents **Ý chính → Vì sao / điều kiện → công thức chuẩn → hình/ví dụ → lỗi dễ nhầm** as needed. End has **Trước / Tiếp**, section position e.g. `3/5`.
4. **Các dạng bài cần nắm vững**: short intro + **3–6 named tabs** organized by real problem-solving methods, each `Dấu hiệu → Cách chọn phương pháp → Ví dụ/đối chiếu → Bẫy`. Do not put full Practice bank inside knowledge page.
5. **What next**: direct links to existing guided topic Practice, source-mapped lesson Core, independent readiness, canonical Written library, related prerequisites.

Keep original 11 **academic inventory categories** in source/QA mapping; present through fewer learner-visible zones. Other categories (exam note, errors, prerequisites, completion, related links) are woven in without losing their data truth.

### Why not all tabs or all accordions?

- One mega-tabs layout across every 11 full page sections hides orientation and leads to excessive nesting.
- Pure long vertical article repeats the current problem.
- Accordion-only can turn every reading section into a "click to find" exercise and loses the sense of order.
- **Recommended hybrid**: top-level short page scroll + local 3–6 tabs in *only two dense areas*, a compact **sticky section navigation**, and Prev/Next inside tab. Visible child titles and `x / n` progress show the learner's position.

### Responsive behavior

- Desktop: all 3–6 tabs visible where labels fit, selected tab clear; content one or two columns where an actual figure helps.
- iPad 820px: tabs may **horizontally scroll in one row**, no cramped two-line rows or unreadable text; large tappable targets and clear indicator there are more labels. Ensure active tab is scrolled into view.
- Phone 390px: swipe or horizontally scroll tab strip, buttons minimum 44px, single-column contents; Prev/Next provides an alternate way to navigate even when a tab label is initially offscreen. **No body horizontal overflow**.
- If a meaningful group exceeds 6–7 topics, split into 2–3 semantic clusters and provide a local index; do not add a dense 11-tab row.

## 3. Interaction and data requirements

- Clicking a tab changes **display only**; no attempt, grading, progress, mastery or Readiness value can change.
- Prev/Next cycles **only within same academic section**, not auto-advance into unrelated skills, no forced unlocking; first/last controls disabled correctly.
- Switching from bottom of a long tab via the footer returns to **the top of the current tab group**; direct tab click should not unexpectedly jump the page. Preserve contextual section label and `3/5`.
- Deep links such as `#kt-3` and `#db-2` preserve which tab is visible. Browser back should restore previous tab. Avoid using existing historical lesson ids for tab ids.
- Keyboard `ArrowLeft/Right/Home/End` and clearly visible focus; correctly bound `role=tablist`, `role=tab`, `role=tabpanel`, aria-selected/controls/labelledby. Allow screen-reader navigation.
- **Without JavaScript:** make all reading subsections available linearly (graceful fallback); print/export shows **all subsections**, not only selected tab; search/highlighting/deep-link SEO should not lose hidden content.
- Responsive equations, diagrams, zoom/200% text, reduced motion, light/dark, iPad real-device checks. Never show an incorrect stylized math plot to fill an empty graphic box.
- First tab may be active by default; don't secretly resume reading state without explicit control just because progress is stored. Deep link route is enough.
- Use the current provider-neutral Gemini Tutor unchanged in Learn/Practice, never inside independent Readiness.

## 4. Testable prototype (external single-file HTML only)

`math_topic_knowledge_tabs_preview_r1.html` (conversation deliverable, **not** added to GitHub/production): 
- `Kiến thức cốt lõi`: 5 labelled tabs ("Hàm số là gì?", "Nhận biết parabol", "Đỉnh và sự biến thiên", "Giao điểm đồ thị", "Cầu nối lớp 12").
- `Các dạng bài`: 4 labelled tabs ("Đọc và giải thích đồ thị", "Tìm đỉnh và trục", "Biện luận giao điểm", "Mô hình hóa thực tế").
- Section-sticky navigation and subtab Prev/Next, selected state, `x/n` counters, keyboard navigation, hash history Back, print-all stylesheet, no-JS fallback, dark toggle.
- This is **representative UX prose/figures for comparison**, NOT the audited final grade-specific curriculum content, not a real scoring/practice bank, and doesn't include source book scans.
- Automated Chromium/Playwright isolated tests executed at **1365px / 820px / 390px**: initial two active panels, no root horizontal overflow, tab changes, footer Prev/Next, deep-link fragment, browser history Back, arrow keyboard, no uncaught page JS errors: **PASS** (local preview only). Real physical iPad and tutor/site navigation QA remain pending.

## 5. Claude external framework and attached spreadsheet handling

Owner also pasted a Claude 24-topic + H00 (=25 visible entries) external proposal and attached a 7-sheet `Bo_chuyen_de_Toan_THPT.xlsx` containing `Tổng quan`, `Chuyên đề THPT`, `Mapping KNTT`, `Lớp phủ SAT-ACT`, `Mỏ neo tư duy`, `Kế hoạch & việc cần làm`, `Nguyên tắc thiết kế`. **Reference only**; not a canonical curriculum or source-locked `PASS`.
- Claude's H00 navigation entry could be a **page**, not counted as a separate canonical Core skill/topic to force a marketing-friendly 25 topics.
- Proposed SAT/ACT `exam_alignment` tags are conceptually good **metadata overlay**, not a third curriculum, third study route or extra learner-facing menu per item. Requires official blueprints and item-level tagging. Source-only KNTT core and graduated international exercises remain distinct.
- Do not assume a child is "soon Grade10" based solely on Claude's unsupported inference; pacing must be owner-driven. No rushed rollout before design/source review.
- The three **question formats** (MCQ, true/false quartet, short answer) are not the existing **three interactive learning contexts** (KNTT Core/Micro, topic Practice, independent Readiness); never conflate. Add missing response formats only after platform-wide technical QA if needed.
- Claude's generic warning "never expose a Gemini API key in static client" does NOT imply the existing site has leaked a secret. Current `firebase-gemini-config.js` contains **Firebase Web App public configuration**; `firebase-gemini-v1.js` uses Firebase AI + App Check controls and provider adapter. Verify quotas/security before changes, don't invent a new Cloudflare proxy now.
- Source statuses for SAT/ACT, topic prerequisite edges and grade placements remain draft until independently reviewed.

## 6. Prototype acceptance criteria before any site integration

**Must-pass UX:** Owner can (a) find where they are without scrolling back to top, (b) navigate to a specific concept in at most two deliberate actions, (c) reach adjacent tab via bottom footer, (d) return via browser Back, (e) read long formulas and diagrams comfortably on physical iPad, (f) print/save all sections without missing hidden tabs, (g) reach the same three existing interactive learning contexts.

**Must-pass compatibility:** No existing routes or MKDocs top-level nav changes; no duplicated Learn or assessment banks; no unauthorized new page mastery; all existing THCS texts survive and deep links (including section links) are audited before optional later migration.

**No unapproved change:** PR #574 remains Draft and **docs only**. No global CSS/JS changes, live theme swap, site-root change, learner evidence migration or silent merge. If accepted, prototype one actual THPT topic page, run source-locked academic check, PC/iPad QA and narrow scoped CSS before scaling.

**Design conclusion:** Current Owner tab idea is **strong enough to prototype** and aligns with existing infrastructure. Use **two local tab groups** with Prev/Next and a compact persistent section map, rather than tabbing the whole page or hiding all theory inside accordions.
