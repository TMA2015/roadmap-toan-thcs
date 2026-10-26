# THPT R3 — Giữ nguyên kiến trúc giao diện THCS, mở rộng cùng một website

**Decision ID:** THPT-UX-R3-OWNER-CORRECTION-20261026  
**Status:** OWNER-DIRECTED_DESIGN / NOT IMPLEMENTED / NO DEPLOY / DRAFT PR #612.  
**Priority:** This R3 **supersedes the site shell/navigation/page hierarchy in R0/R1/R2 standalone HTML mockups**. R2's content principle (two complete knowledge routes, shared Core with three entry points, distinct Practice/Readiness/Written) **remains valid**. No THCS redesign and no new UI framework.

## 0. What the screenshots show / required reuse

The owner supplied six screenshots of the **accepted THCS MkDocs Material** experience and proposed simple cover. Refer to them as **design evidence**:

1. Existing navy top brand + global nav (`Trang chủ`, `Học theo lớp`, `Học theo chuyên đề`, `Thư viện bài tập`, `Tiến độ học tập`, `Hướng dẫn`).
2. THCS topic library overview, persistent left topic sidebar and right TOC (to be removed only for THPT topic knowledge view).
3. THCS **topic accordion catalog with group cards** and per-topic links.
4. THCS topic learning shell: four top destinations (`Core`, `Kiến thức`, `Luyện tập`, `Tự kiểm tra`), in-content quick navigation, left sidebar.
5. Simple 3-card outer programme landing: THCS (existing), THPT (new), SAT/ACT (future only).
6. THCS searchable accordion/card catalog: input `Tìm chuyên đề`, grouped topic cards.

**Non-negotiable:** Reuse the exact existing MkDocs Material site shell, branding, typography, navy header, search, light/dark toggles, top nav style, left sidebar navigation, familiar topic accordion/cards, tabs and 4-route learning workspace. **Do NOT ship** R1/R2's alternative standalone `G Learning · Toán THPT` header, new color/navigation design, or one-off HTML microsite as the eventual THPT product. Prototype components must be evaluated **inside existing shell**, with minimal scoped CSS additions.

## 1. Global site flow

```text
                 Self-Learning Math (SAME REPOSITORY / SAME WEBSITE)
                                      |
                   /  Simple 3-card programme cover  /
                   /              |                 \
           TOÁN THCS           TOÁN THPT          SAT / ACT
         existing accepted     new phase         "Chưa phát hành"
          experience               |
                         THPT TRANG CHỦ (SIMPLE)
                      [Học theo SGK KNTT]
                      [Học theo chuyên đề]
                      [Thư viện bài tập]
                      [Tiến độ học tập]
                      [Hướng dẫn] when needed
```

- Programme cover is **one routing page** as in screenshot 5, not a new educational UX. No long goals/map/explanations. SAT/ACT is a truthful future-status card, not a working route.
- **All existing THCS deep links and student state must continue working**. When the cover becomes the root `/`, place the accepted former THCS homepage at a stable THCS route and preserve any old root-only assumptions with redirects/links/tests. This root migration needs isolated acceptance; NOT to be edited in this Draft.
- Within THPT, the top bar uses **same nav and consistent labels as THCS**, updating only destinations. THPT home has only navigation links/cards, not a knowledge-tree hero.

## 2. THPT “Học theo SGK KNTT” (horizontal axis)

**Landing:** a dedicated `Tổng quan học theo SGK` page analogous to screenshot 6, with search `Tìm chương` and expandable **three grade windows/cards** (Lớp 10 / 11 / 12). Each grade reveals its chapters (source-verified exact chapter name/order). Clicking a chapter or lesson opens corresponding page. Counts reflect actual validated content; unbuilt items get honest `Chưa có nội dung` status and no dead links.

**Left sidebar (persistent):**

```text
HỌC THEO SGK KNTT
  Tổng quan SGK
  Lớp 10
     Chương I ...
     ...
     Chương VI ...
          Bài 15 ...
          Bài 16. Hàm số bậc hai
          Bài 17 ...
          Bài 18 ...
  Lớp 11
     Chương I ...
     ...
  Lớp 12
     ...
  THƯ VIỆN CORE  ← LAST NAV ITEM ON SGK SIDEBAR
```

**Chapter content:** class/chapter/lesson context with chapter-level tabs or equivalent compact lesson chooser, responsive at phone width, **each lesson has its own canonical deep-link URL**. The **lesson's own knowledge page is fully sufficient for the SGK unit** (short, consistent names: `Khái niệm/Định nghĩa`, `Tính chất/Công thức/Đồ thị`, `Ví dụ`, `Luyện tập`, `Vận dụng`, only when relevant), then **Core cards below** (no duplicate Knowledge tab). No forced exit to the vertical topic route to understand a basic concept.

## 3. THPT “Học theo chuyên đề” (vertical axis)

**Landing:** a dedicated `Tổng quan chuyên đề THPT` page analogous to accepted screenshot 3/6: search topic names; grouped accordion/card list of **all academically verified THPT topics** with clear names and navigation. Do not invent a “Chuyên đề 01 — Giới thiệu/Bản đồ Toán THPT” just to teach students how to use the site; **first listed topic is an actual academic topic**.

**Left sidebar:** persistent overview then **topic groups → individual topics**, expandable to each topic's **four destinations**. Topic numbering and grouping are established by independent S1/NotebookLM curriculum review, **not copied** from THCS 25-topic inventory.

**Within every topic**, show the same four THCS-style top workspace destinations:

| Main destination | Content / behavior |
|---|---|
| **01 Thẻ Core** | Canonical skill cards grouped by topic. Same IDs, answers and progress as linked below SGK lessons and in SGK Core library; hints allowed. |
| **02 Kiến thức** | A **self-contained but leaner** theory page, reviewed, with relevant charts and a quick in-page section navigation. Do NOT include Core/Practice/Readiness duplicate content here. |
| **03 Luyện tập** | Interactive guided topic Practice, hints and feedback, own item identities. |
| **04 Tự kiểm tra** | Interactive independent Readiness. No hints, no per-question correction, no solutions until **Final Submit**; review/explanation only afterward. **Criteria to pass / mục tiêu cần đạt** belongs on this route (suggested placement below test introduction / next to rubric). |

**Written library and anchor problems:** One site-level `Thư viện bài tập` containing written-paper prompts, optional hints, worked solutions and self-review rubric; **mỏ neo is a Written subtype**. Knowledge problem-family tabs link to these exact items. It is not a fifth mandatory workspace tab and not a second copy of the bank. Keep existing shared Core three entry points: SGK lesson, SGK Core library, topic Core.

## 4. THPT topic “Kiến thức” page: only essential sections

Keep a simple **in-content horizontal quick-nav (anchor buttons/scroll-to)** and **LEFT sidebar**; omit the RIGHT MkDocs table-of-contents pane on THPT topic knowledge pages to reduce clutter. Retain the same responsive reading width, typography, semantic tab system and correct MathJax as accepted THCS; no new separate page style.

### Content order (semantic, optional only when valuable)

**A. Bản đồ kiến thức** — short, informative prerequisite/within-topic/next concepts diagram; omit if it becomes a decorative duplicate. No separate placeholder topic for the map.

**B. Kiến thức** — definitions/conditions/properties/theorems/formulas and precise teaching diagrams; use **tabs by meaningful subknowledge groups**, with a per-topic variable number of tabs (THCS semantics). Enough to learn the entire topic independently from SGK route.

**C. Kiến thức liên quan** — *genuine* vertical and horizontal connections: prerequisite, related same-grade concept, next concept; provenance links to SGK and other topics. Also covers `truy nguyên kiến thức` and next-learning, replacing a separate “Liên kết Roadmap” section.

**D. Dạng bài** — central section with tabs/cards for **all distinguishable problem families**, each including recognition cues, method, a representative example, typical mistakes (where relevant), links to exact Practice or Written/Anchor item IDs. **Exam problems must not become an unrelated standalone section.** Use a `Thi tốt nghiệp THPT` tab/filter **inside Dạng bài**, showing grounded mapped problem families with exam-year/source labels where available; do not arbitrarily claim any example is from a real exam. Other special university admission tests, if desired later, use separate explicit source metadata rather than calling all exam formats one “Đại học” exam.

**E. Lỗi sai thường gặp** — short, retained when it prevents recurring errors; can also be local to a type tab instead of a standalone long section.

**No duplicated lower sections:** remove `Luyện tập tiếp theo` (redundant to destination 03), `Tự kiểm tra mức độ sẵn sàng` (redundant to destination 04), `Liên kết Roadmap` (replaced by Kiến thức liên quan), `Điều kiện hoàn thành` (criterion belongs to Readiness), and unnecessary repeat of separate `Mục tiêu cần đạt`. If a 1-line purpose at top improves orientation, okay; **full competency/acceptance criteria displayed on Readiness**. Do not use the old 11-section template as mandatory display furniture.

### Exam-subtab semantics

- Topic problem types constitute ONE academically complete family inventory. The `Thi tốt nghiệp THPT` subtab is a **filter/view of those existing families**, with the **same content format**, not a separate duplicate set of “unusual” types. 2026 official examination name is `Kỳ thi tốt nghiệp THPT`, not a single universal university admission exam. Reference: https://xaydungchinhsach.chinhphu.vn/van-ban-hop-nhat-so-02-vbhn-bgddt-quy-che-thi-tot-nghiep-trung-hoc-pho-thong-119260419130804242.htm .
- Owner correctly notes that THCS `Dạng bài thi vào 10` should conceptually be a tab/filter **inside Dạng bài** too. Record this as a **separate future THCS UX follow-up**, because THCS #578 has been accepted and closed; **do not silently reopen/redesign THCS** as part of THPT R3. Preserve its original URLs/data in any later edit.

## 5. Non-negotiable data and QA invariants

1. One project, one repo, **same MkDocs Material shell**, isolated `/thpt/` content and data namespaces; do not modify THCS site by merging an unreviewed THPT design.
2. Both SGK lesson and vertical topic knowledge routes academically self-sufficient for their **declared unit/scope**; lawful subject-matter overlap okay.
3. Shared Core `id`/item/key/revision/attempt truly one canonical record, not three copies. Practice separate, Readiness independent no hints, Written/Anchor paper + self-rubric.
4. Header/nav/left sidebar across THPT pages consistent with THCS; right TOC omitted only for the specified THPT lesson/topic displays where in-page quick navigation covers it, not forcibly stripped from existing THCS docs.
5. Maths and visual QA: real diagram correctness, MathJax, keyboard and Back/Forward, no sideways scrolling, 390px phone, 820px tablet, desktop; dark/print; no infographic quota.
6. Release gates: academic review in owner's new NotebookLM THPT (SGK/SBT Grade 10 sources already located) → R3 **site-shell-based** visual demo/owner signoff → exact-head CI/Browser QA → scoped release. Root cover/deep-link migration is a separate guarded milestone, not a hidden side effect.

## 6. Draft status / supersession

- Earlier `prototypes/thpt/g10-b16-knowledge-pilot-r1.html` and `g10-b16-dual-path-full-learning-r2.html` are **reference-only superseded UX drafts** because they recreated a separate site shell. Their pedagogical exercises/flow ideas are not sufficient for final visual approval.
- **R3 is a written architecture contract only**, until a page built inside the existing THCS MkDocs Material UI is reviewed. Do not merge PR #612 or publish these standalone files based on prior R1/R2 static checks.
- First R3 implementation scope should be one owner-visible combined shell demo: programme cover, THPT simple home, SGK catalog + left sidebar, topic catalog + left sidebar, topic 4-way workspace and concise theory, Bài 16 under Ch VI with shared Core, Practice/Readiness/Written links; everything else an honest unbuilt placeholder.
