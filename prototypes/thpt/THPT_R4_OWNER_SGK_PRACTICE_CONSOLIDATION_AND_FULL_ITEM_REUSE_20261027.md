# THPT R4 — Owner decision: one SGK chapter Practice entry + full canonical item reuse

**Owner acceptance context:** 27/10/2026 · R4 Offline v5 reviewed by owner.  
**Decision class:** `DELTA_A_UI` for navigation/consolidation; `ARCHITECTURE_CLARIFICATION` for exercise placement and assessment-exposure safeguards.  
**Applies to:** SGK KNTT Chapter VI and future KNTT chapters; the vertical Topic branch remains exactly 3 sections.  
**Canonical authority:** `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md` owner clarification §§3A–3B.  
**Status:** Owner architecture decision recorded; PR #612 remains Draft, no release, no new Academic PASS.

## 1. Student-facing navigation

### SGK KNTT
- Lesson content retains `Kiến thức → Core → Luyện tập/Vận dụng`; Core cards remain reachable within lesson or the chapter practice table.
- Chapter has **Luyện tập / Vận dụng** and **Tự kiểm tra cuối chương** as the two visible chapter activities.
- **Do not show `Thư viện Core` as a separate left-menu entry.** Existing Core bank/source page and canonical `THPT-CORE-QF01` are not deleted, renamed or cloned; old Core library URL remains usable.
- **Do not show `Bài tập cuối chương` as another left-menu entry.** These cumulative problems are part of Chapter Practice/Application, where learners may open hints/solutions. A separate internal backing URL may remain for detailed content; it is linked from the Practice hub.
- **Readiness is not practice:** score and explanations only after Final Submit; chapter and topic are separate assessment scopes.

### Chuyên đề
Only **Kiến thức → Luyện tập → Tự kiểm tra**, no Core, no extra library tab. Keep adaptive knowledge tabs one/two levels and approved Golden UI typography.

## 2. Broader canonical bank sharing

One `item_id`, one canonical question, answer key, version, solution, rubric, with any number of **eligible** `placement_id`/role mappings:

- `SGK_CORE` ↔ `SGK_PRACTICE` ↔ `TOPIC_PRACTICE`.
- `SGK_CHAPTER_APPLICATION` ↔ `TOPIC_PRACTICE` at an appropriate level.
- `SGK_CHAPTER_READINESS` ↔ `TOPIC_READINESS` **when the same item legitimately satisfies both scope/outcome matrices**. This is permitted bank reuse, *not* an instruction to show an already seen question again to the same learner and count it as independent proof.
- `SGK_WRITTEN` ↔ `TOPIC_WRITTEN` ↔ `WRITTEN_ANCHOR` label as appropriate.

No duplicate item/answer/rubric/attempt history. Store attempt context, assessment scope, assignment, learner exposure and solution/hint view state. Before using a previously exposed exact item in no-hint Readiness, choose alternate held-out item when possible; intentional re-exposure must not be counted as a fresh independent mastery demonstration by default.

A `CORE` and a `READINESS` placement for the same canonical item are technically possible **only with assessment hygiene**. Full conditions and precedence are in the v2.0 GitHub architecture contract.

## 3. Files changed / preview

- `mkdocs.thpt-preview.yml`: removes Core library and end-of-chapter exercise entries from left nav; keeps SGK chapter Practice and Readiness.
- `docs/thpt-preview/sgk/chuong-vi.md`: removes standalone cumulative exercise tile and describes shared chapter practice.
- `docs/thpt-preview/sgk/chuong-vi/luyen-tap.md`: labels cumulative exercises under chapter practice.
- `docs/thpt-preview/sgk/chuong-vi/bai-tap-cuoi-chuong.md`: retained internal detail/source of 8 draft questions, no independent menu mode.
- `docs/thpt-preview/sgk/core/index.md`: legacy link hub only, no left-menu item.
- `scripts/test-thpt-r4-preview-browser.js`: nav assertions.
- `Temp_THPT_R4_SGK_Consolidated_Practice_Cross_Route_v6.html`: standalone owner visual preview (external file, not committed).
- `THPT_DUAL_COMPLETE_PATHS_SHARED_ITEMS_OWNER_CONTRACT_v2.0.md`: updated to support all compatible roles and cross-readiness use with exposure control.

## 4. Evidence and release gates

- Offline HTML v6 local Chromium checks: desktop 1440×900, iPad 820×1180, iPhone 390×844 — clean sidebar, 8 cumulative exercises under chapter Practice, separate no-hint chapter Readiness, no scroll overflow or JS page errors: **PASS**.
- **MkDocs QA needs exact-head CI status; check it live.** Code changes were restricted to layout, labels, compatibility pages, tests and contract; no mathematics or answer keys changed.
- `SGK_CHAPTER_READINESS` 4 questions remain `TECHNICAL_DEMO_ONLY`, `mastery_credit:false`, not reviewed, not a full chapter assessment. `TOPIC_READINESS` two questions remain technical demo.
- New SGK B15/B17/B18 and cumulative 8 items remain **DRAFT_NOT_ACADEMICALLY_REVIEWED**. B16 math academic PASS applies only to reviewed snapshot and items; no implicit review of new roles/scopes.
- **No merge/deploy and no automatic Academic PASS.**

## 5. Immediate next development

Build canonical placement/assessment eligibility schema and chapter-level outcome matrix, with tests demonstrating one item assigned to multiple practice/assessment contexts without duplicate answer/history, respecting evidence-exposure separation. Prepare academic batch only once real source-verified coverage and items exist, following Project Sources 06/07.
