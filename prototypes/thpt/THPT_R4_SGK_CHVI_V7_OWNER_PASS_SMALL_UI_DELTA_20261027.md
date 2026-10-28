# THPT R4 · Owner HTML v7 feedback — accepted with three small UI deltas

**Ngày:** 27/10/2026
**Evidence:** Chủ dự án kiểm tra HTML `Temp_THPT_R4_SGK_Lesson_Cards_Modal_Preview_v7.html` và phản hồi **“về cơ bản là tốt”**, có 3 yêu cầu hiệu chỉnh.
**Decision:** `OWNER_UAT_V7=CONDITIONAL_PASS` for 4 lesson groups/two-card modal pattern; `UI_DELTA_A` approved for the three items below. **Không yêu cầu tạo HTML nghiệm thu mới chỉ để kiểm tra chúng.**
**Release gate:** `NOT_AUTHORIZED` — keep Draft PR #612, no merge/deploy.

## 1. Bài 16: Core action within the SGK lesson

**Owner finding:** `docs/thpt-preview/sgk/chuong-vi/bai-16.md` previously linked to the old Core page, whereas Chapter Practice v7 correctly opened question dialogs.

**Required/implemented change:** Replace only the old lesson Core anchor with `button[data-thpt-open-quiz="b16-core"]` inside the `data-thpt-practice-hub` container. The established R4 modal runtime imports the **same canonical** `THPT-CORE-QF01` from the original SGK Core source and rebinds Check in the modal. **No cloned question/answer**, no new learner mastery/history and no separate Core page in the visible menu. The old internal Core URL may remain functional for legacy links but is not the student default flow.

## 2. Left navigation collapsible, initially collapsed

**Owner requirement:**
- Sections Học theo SGK, từng **lớp** và **chương** are expandable/collapsible.
- Section Học theo Chuyên đề and each **chuyên đề** expandable/collapsible.
- All these groups are **collapsed initially**; accessible by click/touch/keyboard so future 10–12 inventories do not create a long sidebar.

**Implementation:** THPT-route-only script in `docs/assets/javascripts/thpt-r4-preview.js` attaches accessible disclosure buttons to nested MkDocs Material sidebar groups, respects the native Material checkbox/label when available, and defaults nested content to hidden on a new route. CSS in `docs/assets/stylesheets/thpt-r4-preview.css` enforces collapsed visibility and caret/button placement. Retains top global menu and existing links; does not change knowledge tab layout or canonical item relationships. **Technical QA required against generated MkDocs desktop/mobile markup.**

## 3. Homepage without left sidebar

**Owner requirement:** THPT home is a simple choice page and does not display the left sidebar. The left menu appears when entering SGK / Chuyên đề / Thư viện bài tập / Tiến độ học tập / Hướng dẫn.

**Implementation:** `docs/thpt-preview/home.md` frontmatter `hide: [toc,navigation]`; THPT route `home/` body class CSS hides primary sidebar as a fallback. The top header/launcher and five destination tiles remain visible and usable.

## 4. Gates

| Gate | State |
|---|---|
| Golden UI shell, lesson cards/modal overall | **Owner broadly accepted v7** |
| Small UI corrections code | **Implemented in Draft PR #612** |
| MkDocs regression: modal/menus/home | **Check exact-head CI; no claim until success** |
| Additional standalone HTML v8 | **NOT REQUESTED — DO NOT CREATE** |
| Academic clearance new SGK items | NOT_REVIEWED |
| Merge/deploy/official release | NOT_AUTHORIZED |

**Next:** Continue S1-aligned academic authoring and canonical item/assessment infrastructure, separately from release approval. No NotebookLM academic review needed solely for these UI-only fixes.
