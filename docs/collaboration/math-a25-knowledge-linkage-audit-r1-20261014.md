# CĐ25 examples — curriculum-placement versus knowledge-relations audit R1

**Audit date:** 2026-10-14. **Sources:** `assets/data/anchors/anchor-catalog-v1.json` (11 A25 entries), `written-exercises/written-exercise-library-v1.json` (63 WX entries), canonical CĐ25 page and topic index pages. **Scope:** read-only navigation/classification; no new academic placement approval.

## Student-facing naming decision

- **Bài mỏ neo** = learning role: an exemplar students can revisit to learn a transferable mathematical method.
- **Bài toán kinh điển** = editorial selection: the ten A25 anchor exemplars highlighted as a practical collection.
- In CĐ25 these are **the same ten selected A25 problems**, *not two disjoint 10-question banks*. The A25 catalog has **11 total**, with one additional item.
- In the separate shared Written Library, **ten other deep-written examples `WX*`** also use `exercise_kind:anchor` and are not interchangeable with the A25 IDs. One canonical source per problem.
- Render for learners: **Bài mẫu tiêu biểu (bài mỏ neo)**; preserve editorial/classification terms and IDs for development, export, academic review and provenance.

## A25 — source-backed direct topic relations

All 11 `A25` records have `grade_overlay:[9]` as the **Grade-9/Entrance10 learning context**. This does not mean every prerequisite originates in Grade 9.

| A25 | Example | Existing `topic_ids` (not certified primary grade placements) |
| --- | --- | --- |
| 001 | Biểu thức căn và điều kiện | CT11 |
| 002 | Viète, biểu thức đối xứng | CT12 |
| 003 | Lập hệ bài toán vé | CT09, CT24 |
| 004 | Đường cao tam giác vuông | CT17, CT18 |
| 005 | Tối ưu tích | CT04 |
| 006 | Căn thức và tính nguyên | CT11 |
| 007 | Tham số, biệt thức, Viète | CT12 |
| 008 | Tiếp tuyến và cát tuyến | CT19, CT17 |
| 009 | Trực tâm, hai tứ giác nội tiếp | CT19, CT15 |
| 010 | Làm chung, năng suất | CT03, CT24 |
| 011 | Parabol, đường thẳng, Viète | CT10, CT12 |

The **CT03 link** is a cross-grade knowledge connection (ratios/rates); it must **not** promote the A25-010 exam question to mandatory Grade-6/7 Core. The **CT17–CT18 links** expose a Grade-8/9 geometric learning progression but are not a claim that each test item has approved KNTT Grade-8 placement.

No A25 `topic_ids` record currently directly points at CT02 or CT13 even though intuitive prerequisite relations could exist. **Do not fabricate those links** or quietly rewrite official curriculum placements. Add explicit prerequisite-to-A25 crosswalks only with source-backed academic review.

## Shared WX deep-anchors

The 63 published Written examples include **10 `exercise_kind:anchor`**: 6 in CT09 Grade 9 and 4 in Grade 6: `WX02-NUM-003`, `WX20-GEO-003`, `WX13-LIN-003`, `WX23-PRO-003`. This proves the *pedagogical anchor role* is not restricted to Grade 9. It does not authorize treating the Grade-9 A25 exam collection as Grade-6 Core.

## Navigation decision, no content duplication

- Keep the two user-approved entry points: CĐ25 and the Shared Written Library.
- A25 cards refer to exactly one canonical CĐ25 article or deep-dive page; the 10 classic examples are a selection from the same 11 A25 records.
- Topic lesson index pages display read-only optional pointers to the A25 records listed in their already reviewed `topic_ids`. Explicit note: **ôn thi vào lớp 10, không bắt buộc, không cộng điểm Readiness/Core**.
- The reverse pointer from each A25 card links back to the corresponding knowledge topic. No independent answer key, rewritten question, new grade metadata or learning-event writes.
- Editors' admission standards belong in collapsible guidance, not in student-facing instructions.

## Future requirements

Before claiming complete cross-grade prerequisite coverage: establish an audited `primary_placement` + `prerequisite_skills` + `topic_relations` crosswalk (including CT02 if educationally appropriate), check graph correctness and grade progression, run NotebookLM **academic** review on any new placement or explanation. UX NotebookLM *opinions* remain optional and are **not** a release gate; independent human learner observation remains OPEN.
