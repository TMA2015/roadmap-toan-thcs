# CĐ10 Hàm số và đồ thị — Full-source, long-knowledge tab trial R2 (2026-10-24)

**Type:** design + source structure validation, **not** curriculum approval; Owner/physical-iPad acceptance pending.
**Scope:** THCS `docs/kien-thuc/10-ham-so-do-thi/index.md`, immutable GitHub `main` commit `680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f`; content was **read and inspected directly**, not reconstructed from model memory. Existing source unchanged. No changes to live MkDocs CSS, route, grades, Core, Practice, Readiness, Written, Gemini, progress.

## Source inventory receipt

- `index.md`: JS UTF-16 length **17506**, **877 source lines**, exactly **11** `##` numbered main sections.
- Section 3 ("Kiến thức cốt lõi"): **8** numbered subsections (`3.1` to `3.8`).
- Section 5 ("Các dạng bài cần nắm vững"): **11** numbered problem-type subsections (Dạng 1 to Dạng 11).
- Exactly **9** SVG image references, all corresponding files verified present under `docs/assets/infographics/10/`. Do not substitute generic stock illustrations or re-render fake diagrams.
- Preserve full original section content **without summarization/removal**; use a view transformation only. No duplicate question bank. Existing links to topic guided Practice, independent Readiness and class KNTT lesson Core retain their meanings.

## Design transformation (all source subsections accounted for)

**Section 3 → five local horizontal tabs:**
| Tab | Actual numbered source blocks |
|---|---|
| Khái niệm & bảng giá trị | 3.1–3.2 |
| Tọa độ & điểm trên đồ thị | 3.3–3.4 |
| Hàm số bậc nhất | 3.5 |
| Quan hệ & giao điểm | 3.6–3.7 |
| Parabol và mở rộng | 3.8 |

**Section 5 → five local horizontal tabs:**
| Tab | Actual problem types |
|---|---|
| Tính giá trị & kiểm tra điểm | Dạng 1–3 |
| Vẽ và đọc đường thẳng | Dạng 4–6 |
| Quan hệ giữa hai đường | Dạng 7–8 |
| Tham số trong phương trình | Dạng 9–10 |
| Đường thẳng & parabol | Dạng 11 |

All other **9 source main sections** remain visible as headings/panels in their original sequence, including 4,6–11. Each group has a status/count and previous/next controls. Page-level sticky navigation stays available. Local tab selection changes only DOM presentation, no learning evidence writes.

## Preview deliverable

File produced in conversation: `math_topic_cd10_real_content_tabs_r2.html` — **not committed to repo** and not production content. Unlike previous sample mock, this HTML pulls the complete real Markdown once from pinned GitHub raw source; the text is not fabricated and the source file is not rewritten. **Requires Internet** to load the verified pinned Markdown and nine source SVG images when the viewer opens it. It checks UTF-16 source length to detect accidental switching to another revision; errors produce an explicit notice rather than silently showing a fake lesson.

**Technical limitation transparently recorded:** The sandbox browser environment for this run blocks network navigation; therefore actual remote source + SVG rendering was **not** visually verified by this browser. The preview uses local self-contained HTML/JS with a simple Markdown renderer rather than the exact MkDocs/pymdownx Markdown pipeline, so raw **text source is preserved**, but rich admonition, nested lists, cross-links and math presentation still require comparison against deployed MkDocs and physical iPad before claiming visual fidelity or 100% confidence.

## Isolated interaction QA

Run Chromium at 1365px desktop, 820px tablet, 390px mobile, using a synthetic *format-matching fixture* (11 sections, 8 and 11 blocks, expected 17506 JS-length units) because network fetch is blocked in environment. The tests demonstrated:
- zero uncaught page JS errors;
- zero horizontal viewport overflow on three sizes;
- 5 + 5 tabs, 9 non-tab main sections;
- selected-tab visibility updates and correct `aria-selected`;
- Prev/Next from bottom switches tabs and returns to section start;
- URL fragment deep link and browser Back restoration;
- keyboard ArrowRight tab navigation.

**QA conclusion:** functional-interaction pilot PASS on fixture; **real-source visual QA and Owner/iPad visual acceptance STILL PENDING**. Screenshots generated in sandbox are fixture-based and must **not** be presented as screenshot proof of real-source rendering.

## Evaluation guide for owner

Open the HTML with Internet. If status shows **"Đã tải đủ nguồn thật: 11 mục chính · 8 tiểu mục kiến thức · 11 dạng bài"**, inspect the third Knowledge tab, first/last problem-tab, nine diagrams, page stickiness, arrows, math notation and scrolling. Use `In toàn bộ` and check nothing hidden is lost in print. Compare with live page. If source fails to load, do **not** interpret a blank preview as a design decision.

Owner has previously approved *design direction*, **not** this full real-content prototype; do not roll to THPT/THCS in bulk yet.

## Next

1. Owner PC/iPad review on this true-source content, adjust subtab grouping and reading depth if needed.
2. If accepted, build a **native MkDocs-scoped THCS CT10 preview** on an isolated Draft PR stage using identical actual source, with full template math/image/admonition rendering; compare original vs new and run CI/physical iPad.
3. Only then establish final reusable knowledge-page component system for THPT, source-locked academic audit and later optional THCS migration.
