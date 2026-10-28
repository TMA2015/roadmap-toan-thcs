# THPT R4 — SGK Chapter Practice: Two Lesson Cards + Modal QA

**Date:** 2026-10-27
**Owner direction:** Render SGK chapter Practice/Application as an ordered list of SGK lessons with two activity cards each: **Core** and **Luyện tập**. Each card has a lesson heading, “Nền tảng” description and **one Luyện tập button**. Clicking opens a same-page modal (rather than navigating away). Remove the 3-column table and long standalone cumulative-exercise list from the main practice page; remove the SGK overview “Mở thư viện Core” text link. Topic branch remains Kiến thức / Luyện tập / Tự kiểm tra.

## 1. UI

- Page `docs/thpt-preview/sgk/chuong-vi/luyen-tap.md`: keep the approved eyebrow, title and introductory paragraph, followed by B15, B16, B17 and B18 groups. Each group displays two grade-colored cards with one action button each.
- **Grade themes reserved:** Lớp 10 indigo/blue, Lớp 11 teal/green, Lớp 12 violet. No new lesson content for 11/12 is claimed.
- Buttons open `dialog.thpt-r4-practice-dialog`: title Chương VI/Bài, question navigation for demos, optional hint and immediate formative Check, Esc/Close/backdrop close and focus return; correct answer shown after Check only.
- **B16 Core & Practice:** modal imports existing DOM question from the same SGK Core or Topic Practice source URL. There is still one canonical item/answer source and no newly duplicated runtime record; imported form rebinds the existing R4 JS handler.
- **B15/B17/B18:** minimal interactive *technical demo questions* to test modal UX, **not canonical/Academic PASS**, no mastery/attempt storage.
- The eight unreviewed cumulative A1–A4/B1–B4 problems remain stored in the one backing source `bai-tap-cuoi-chuong.md`. Each **Luyện tập** modal loads its matching questions on demand (B15: A1; B16: A2/B3; B17: A3/A4/B4; B18: B1/B2), with learner-openable explanations. No separate sidebar or independent readiness entry for those problems.
- Standalone owner preview `Temp_THPT_R4_SGK_Lesson_Cards_Modal_Preview_v7.html` provides the same eight card/modal flows offline; it is a snapshot of UI, not deployed data-sharing engine.

## 2. QA gates

- Browser tests cover four lesson groups/eight cards, no old table, no navigation on modal open, draft Core check, B16 Core import and answer after Check, B16 Practice import, and loading of three cumulative B17 problems.
- Offline HTML v7 locally tested at desktop (1440), tablet (820) and phone (390) widths: all eight cards open and close their dialogs, eight cumulative exercises are accessible via matching Practice modals, no horizontal overflow, no script error. Verified no “Mở thư viện Core theo SGK” link in UI.
- GitHub CI status must be checked at exact branch HEAD; do not call MkDocs PASS until workflow finishes.
- Owner visual sign-off for **v7** is **PENDING**; v3/v5 prior PASS is not falsely propagated to a new modal design.

## 3. Safety and academic limits

No new Academic PASS. B16 unchanged reviewed item remains PASS only within its original source scope. B15/B17/B18 technical demo questions and eight cumulative drafts remain NOT_REVIEWED. SGK Readiness remains separate and does not reveal before Final Submit. **Do not merge/deploy** without owner approval.

**Delta:** `DELTA_A_UI` for cards/modal, with unreviewed explicit technical demo UX; no NotebookLM rereview of B16 math. The full production canonical placement/attempt/exposure engine remains future work, not an implied feature of this pilot.
