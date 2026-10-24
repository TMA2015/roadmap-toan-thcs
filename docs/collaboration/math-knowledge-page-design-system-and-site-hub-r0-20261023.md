# Self-Learning Math — Knowledge Page Design Standard + Outer Hub R0

**Doc ID:** MATH-LEARN-PRESENTATION-AND-HUB-R0-20261023  
**Status:** DESIGN_PROPOSAL_ONLY / NOT_VISUALLY_ACCEPTED / NO_CODE_CHANGE / NO_DEPLOY  
**First golden sample:** KNTT Grade10 Chapter VI, Lesson 16 "Hàm số bậc hai" (academic/source validation pending).  
**Future reuse:** THCS knowledge *presentation* only, after measured improvement and manual owner acceptance; never remove canonical source text or adjust learner history.

## 0. Existing implementation inspected, not guessed

| Existing file or interface | Direct observation | Design implication |
| --- | --- | --- |
| `docs/kien-thuc/10-ham-so-do-thi/index.md` | Long sequential 11-section topic page; full knowledge, infographics, step text, examples and repeated subheadings | **Content completeness is valuable**; information density/reading route needs progressive presentation |
| `docs/templates/chuyen-de.md` | 11-item academically useful authoring source template | Keep as **audit/authoring content inventory**; do **not** force every section to appear equally prominent |
| `docs/kien-thuc/10-ham-so-do-thi/core/index.md` | Separates "Bài giảng" and "Luyện tập" and has link to topic Readiness | Reuse existing short in-card teaching + 3 distinct practice contexts; no fourth practice engine |
| `docs/assets/stylesheets/site-design-system.css` | Current system font `system-ui, Segoe UI`; primary `#344bc8`, base text `#14213d`, surfaces and dark mode tokens | Reuse CSS variables and Material/MkDocs shell; avoid a parallel color system |
| `docs/assets/stylesheets/topic-workspace.css` | Existing core/skill cards and collapsible sections, sticky topic menu and 44px actions | Build within available components and improve where needed, no new framework requirement |
| `docs/index.md` | Rich THCS homepage with optional standard/playful presentation | Preserve as **THCS entry** when outer hub eventually takes root |
| `docs/ai/ai-tutor-core-contract.md` & Firebase Gemini JS | Provider-neutral Tutor restrictions; Gemini/Firebase integration actually present | Keep the existing Tutor available during learning; independent Readiness remains no-Tutor |
| `mkdocs.yml` | Single GitHub Pages-compatible MkDocs Material navigation; currently root home is THCS | Treat migration of `/` as a breaking UI/route change requiring tests |

## 1. Invariants: current product, not a new learning site

**Two learning routes, one canonical body of content**, with separate contexts:
1. **Topic vertical learning/practice** — guided subskills, transfer and mixed practice, hints.
2. **KNTT lesson horizontal Core/Micro** — short theory + examples + immediate, scaffolded check.
3. **Topic independent Readiness** — no hints or Gemini/AI reveal, no item correctness until Final Submit; soft/no locks.
**Additional single canonical Written Library** — on-paper solving + progressive thinking assistance + worked solution/rubric, no self-scored mastery.
Gemini Tutor present as existing assistance in learning and practice; not a fourth curriculum or a silent grader of paper.

## 2. Content information architecture

### 2.1 Learner sees 5 clear zones on a long TOPIC KNOWLEDGE page (not mandatory extra tabs)

1. **Know where I am (top 1 screen):** breadcrumb `Toán THPT › Chuyên đề Hàm số`; topic title + one-sentence practical why; small "Lớp 10→12" provenance; **3 links** `Học kiến thức` | `Luyện kỹ năng` | `Tự kiểm tra` (the destinations already have separate semantics). All CTAs remain optional; no forced progression.
2. **Bản đồ 1 màn hình**: at most 3–6 tightly named concepts with their grade chips/prerequisite `Cần biết trước`; arrows only when truly meaningful. Can expand source/integrated map. Do not prepend 8 decorative infographics before the first concept.
3. **Kiến thức theo từng khối học được:** short section with `Ý chính` -> `Vì sao / Điều kiện` -> `Công thức được typeset` -> `Ví dụ 1 có hình nếu cần` -> `Lỗi dễ nhầm`. Use the same section pattern throughout.
4. **Dạng bài & chọn cách làm:** compact guide matching genuine canonical method families. One worked strategy anchor, NOT another full duplicate exercise library. Complex details and optional SAT/ACT bridges may be collapsible, default core remains visible.
5. **What next?** concise contextual links `Luyện ngay`, `Ôn kiến thức nền`, `Thử tự kiểm tra`, `Bài tự luận`. Avoid dense uncurated related-link matrices.

The original 11 academic inventory categories remain mapped to this view: map/objectives (zones 1–2); theory/errors (3); prior/next (2,5); types/exam notes (4); interactive training/readiness (direct links to existing destinations, not duplicate banks); completion status (only from real evidence). **A collapsed detail never changes data truth**.

### 2.2 Core KNTT Lesson: lighter than the topic overview

```text
[Toán THPT / Lớp 10 / Chương VI / Bài 16]
HÀM SỐ BẬC HAI             [Nền tảng KNTT]

Học xong, em có thể:
(1) nhận đỉnh/trục; (2) đọc biến thiên; (3) giải một tình huống.

[1. Ý chính, biểu thức, điều kiện]     [Đồ thị đúng tỉ lệ, có nhãn]
[2. Vì sao điều này đúng?]            [Ví dụ Base -> Trap -> Apply]
[3. Micro nhanh: 1–3 câu ngắn]         [Gợi ý nếu cần]
----------------------------------------------------------
[Tiếp tục: Luyện kỹ năng] [Bài tự luận] [Ôn điều kiện]
```

- First viewport (820px tablet and desktop): title, goals, **first actual concept** and a useful illustration or short example, without tall ornamental hero. At 390px phone, preserve readable single-column vertical flow.
- Use **MathJax/approved renderer** for mathematics, not `inline code backticks` to render important formulas. TeX source clean and accessible. Long formulas may horizontally scroll inside a scoped wrapper, never clip a page or force horizontal viewport scrolling.
- Tutor help is a secondary action, not large decoration. Student may view hint/solution by choice in Core/Micro/Practice; assisted evidence remains formative.
- Core content does not include the full 8–10 question topic Readiness nor a cloned Written Library.

## 3. Proposed visual tokens for the reading surface (to prototype, not live CSS)

**Foundational font:** use existing `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif` for Vietnamese and cross-device consistency; **no paid/external font dependency**. Formulas: existing mathematical renderer + glyph fallback, no unverified font downloads. Optional future alternative font requires independent Vietnamese diacritics/math/iPad glyph QA.

| Element | First-pass proposed scale | Note |
| --- | --- | --- |
| Main readable text | **16–18px**, preferred ~17px | no tiny 0.7rem body copy in teaching zones |
| Phone text | **at least 16px** | avoid forced zoom for input/copy |
| H1 page title | **28–32px**, phone 25–28px | 1 clear H1, stable line-height |
| H2 section | **22–24px** | section count restrained |
| H3 concept | **18–20px** | not five tiny nested headings |
| Labels/captions | **14–15px**, no essential information solely in tiny text | captions legible on iPad |
| Reading line height | **1.6–1.75** | no visually compressed paragraphs |
| Paragraph line width | **~62–78 characters**, content column max ~760–820px | tables/diagrams can be wider when necessary |
| Touch targets | **>=44x44 CSS px** | links/buttons on touch devices |
| Section rhythm | **24–32px** vertical separation, 12–18px within a concept block | use consistent 8px spacing scale |

### Color system: extend, don't replace existing site design

Existing light tokens: text `--roadmap-ink:#14213d`; secondary `--roadmap-muted:#586782`; border `--roadmap-line:#e1e8f2`; card `--roadmap-surface:#fff`; soft surface `--roadmap-soft:#f5f8fd`; navigation `--roadmap-indigo:#344bc8`. Preserve current dark-mode variables in CSS.

**Proposed semantic meanings:**
- Indigo/blue: navigation, interactive links and current-course wayfinding;
- restrained green/teal: "Ý chính", constructive progress or already-verified correctness **only when true**, not every chapter heading;
- warm amber: common misconception/important conditions, with clear icon/text in addition to color;
- neutral white/soft slate: most explanation cards.
Do not use many color cards or gradients in teaching copy. Standard/light theme remains first priority; dark mode must retain legible contrast. WCAG AA color contrast aspiration: >=4.5:1 ordinary text, >=3:1 large text and meaningful boundaries. Validate both themes and hover/focus (do not infer from hex alone).

### Diagrams/image language

1. **Educational SVG first**: precise coordinate grids with axes/arrows/scales/legend, parabolas plotted from actual data, figures use conventional geometry markings; preserve visible labels on iPad at normal zoom.
2. **Context photographs sparingly**: only when needed for a real-world modelling question. Purely decorative images must not precede the actual explanation.
3. Use consistent diagram insets, stroke weights, label sizing, palette (blue primary curves, warm secondary comparison, dashed construction guides), aspect ratio only when mathematically suitable. Do not distort aspect ratio to fit a generic card.
4. Never communicate domain/solution/conditions exclusively by color or an image; include textual/formula equivalent and useful `alt` text, real caption naming the insight; optional expand/zoom for dense geometry.
5. Asset QA: clean rendering, no overlap/clipped graph labels, no wrong intercepts/asymptotes, no ambiguous ASCII graphs, no imprecise mathematical illustrations, SVG accessibility verified.
6. Reusable *diagram templates*: function plot, transform comparison, sign chart/number line, geometric construction, Oxy/Oxyz, probability tree, distribution chart. Original notebook/publisher PDFs are references, **not rehosted screenshots**.

## 4. Site-level outer hub — clean 3-track portal

This is **a separate navigation layer**, not a fourth learning track or a re-platforming:

```text
Self-Learning Math    Tự học Toán, hiểu bản chất.
----------------------------------------------
[ TOÁN THCS  · Lớp 6–9     ]  [ Vào học → ]
  25 chuyên đề / SGK KNTT / Ôn thi vào 10. ACTIVE

[ TOÁN THPT  · Lớp 10–12  ]
  Chuyên đề xuyên lớp / SGK KNTT / Tự luận. PREPARING

[ SAT / ACT  · Optional   ]
  Kiến thức và bài tập theo chuẩn quốc tế. PLANNED

[ Logic / Reasoning ... ] additional future track, not displayed until real scope exists.
```

Three **equal-purpose, large clickable course cards** with a one-sentence description and truthful availability. Only THCS is active until THPT/SAT content is truly available; do not create dead `href="#"` CTAs or an artificial waitlist. Proposed home is intentionally shorter/quieter than existing THCS rich home.

**Safest GitHub Pages/MkDocs migration route:**
- Keep **existing** THCS deep content paths `/kien-thuc/`, `/hoc-theo-lop/`, `/luyen-tap/`, `/tien-do-hoc-tap/` and all known link/recovery semantics intact.
- New root `docs/index.md` *eventually* becomes outer hub. Move/rehost the current root **presentation** into `docs/thcs/index.md` as the THCS home, carefully convert relative paths and asset URLs. Preserve optional current standard/playful home style in THCS (do not silently remove a user choice).
- New `/thpt/` and `/sat-act/` are future *namespaced landing routes*, with independent curriculum/evidence/version identities. No obligation to deploy until there's real content.
- No forced login, no unsolicited redirect based on hidden preference. Optional visible `Vào nhanh Toán THCS` shortcut from root; opening the site should make the three options obvious. A current learner with a saved bookmark to any THCS deep page must continue to reach it.
- Do **not** retroactively merge THCS and THPT localStorage attempt IDs, readiness roles, backups or progression. Routing/UI change MUST NOT alter learner scores.
- Retain one GitHub Pages/MkDocs implementation **unless** actual constraints demonstrate the need for another repository/site. Avoid app migration.
- Navigation scopes per track: back to three-track hub clearly exposed; no gigantic combined 6–12 + SAT global nav. Search and breadcrumbs should show context and avoid confusing grades.

## 5. Prototype before deploying: accept only a demonstrably better result

### A. Knowledge-page pilot
- Candidate `Toán 10 KNTT Chương VI Bài 16`, used in **isolated preview**, not production authoring; academic formula/source verification separate.
- Preserve content truth (definition, a != 0, domain R; vertex, symmetry, a-sign, range, simple examples) and compare with older THCS concept page in UX, not only aesthetics.
- Student can answer **where am I / what is the concept / why true / what can I do next** in the first viewport; direct action `Luyện kỹ năng` is easily findable.
- No formula shown as raw code, no cropped formula, no empty placeholder image, no duplicate full-scale practice bank.
- One consistent component vocabulary across lesson, topic theory, example, condition, misconception and "learn next".

### B. Independent usability/technical QA
- Viewports **390px phone**, **820px touch/iPad-like tablet**, **1365px desktop**; real physical iPad owner acceptance later.
- Zoom/text at **200%**, screen reader headings/alt/text navigation as appropriate; key CTA focus states, no horizontal page overflow, no overlapped sticky nav, 44px touch.
- Light and dark themes, reduced motion, large equations/images; no downloadable font assets required.
- Verify links incl. old THCS bookmarks, browser history/back nav, lesson navigation, scroll, existing Tutor availability and independent Readiness block.
- Run existing full exact-head GitHub PR QA before release, with screenshot inspection/manual parent review; no learner-data writes, no new Firebase authorization.
- Test **comparative tasks** on old vs prototype: find a concept, identify meaning/conditions, find a worked example, start guided practice and return from readiness. Goal is fewer steps/misclicks and better reading comprehension; no arbitrary performance claim.
- Optional screenshot visual diff for desktop/tablet/mobile; check educational correctness of diagrams separately from general appearance.
- Avoid globally changing `site-design-system.css` until local-scoped prototype confirmed. Design tokens can be added under `.math-knowledge-page` namespace first.

## 6. Execution waves (no automatic release)

- **Wave D0 [current]:** record owner confirmed direction and inspect existing site/source. Create this proposal **docs only** on a separate Draft PR; site unaffected.
- **Wave D1:** isolated visual/content prototype of **one** THPT KNTT Core + one topic knowledge overview; source-locked by SGK original; compare desktop/mobile/iPad and Owner signoff.
- **Wave D2:** implement accepted scoped component CSS and templates + regression QA on protected branch; academic content separately independently reviewed; no migration of old source data.
- **Wave D3:** 3-track root hub only when course entry content/truthful status, THCS rich home relocation and old deep-route tests are all ready. Prepare rollback if redirects/assets break.
- **Wave D4:** after THPT teaching pilot and verified superiority, selectively remap 25 THCS knowledge *presentation* pages using source-preserving transformations + golden tests. This is a **distinct authorization gate**.

## 7. Acceptance / non-acceptance summary

**Accept now:** principles and direction, low-friction two-axis design, one reading standard for Math knowledge, preference for a simple three-choice outer hub.  
**Not yet accepted:** actual pixel/component choice, exact colors beyond existing safe token starting point, any specific mockup, theme relocation, rollout timetable, THPT/ACT readiness or THCS refactor.  
**Protected:** 25 THCS topics, 87 released Written, all approved Core/Practice/Readiness question IDs and learner evidence, current Gemini Tutor, class pages and bookmarks. Independent Grade9 Readiness #565 remains a separate owner approval decision.
