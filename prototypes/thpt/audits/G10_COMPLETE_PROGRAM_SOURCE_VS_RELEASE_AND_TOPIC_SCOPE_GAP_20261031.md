# G10 27 lessons — academic source vs published SGK vs independent Topic scope (31/10/2026)

**Purpose:** determine the actual remaining work for the complete Grade 10 program without repeating already PASSED NotebookLM content. Source audited on live main and G10 9-chapter authoring manifests. Scope-only review, no new independent verdict.

## A. SGK horizontal path — academic source evidence

- **9 chapters / 27 lessons:** I B01–B02; II B03–B04; III B05–B06; IV B07–B11; V B12–B14; VI B15–B18; VII B19–B22; VIII B23–B25; IX B26–B27.
- Existing reviewed public-formative/D1–D6 authoring receipts cover every chapter on its historical snapshot: ready manifests ChI–IV,VII–IX; ChV B12–B14 current **Draft authoring PR #639** has CONTENT_READY 27 canonical/14 outcomes with reviewed D6, but **main** currently lacks a `docs/thpt-preview/sgk/chuong-v/` directory or navigation tile; ChVI authoring scoped D6 on Draft PR #642, technical integration on Draft #643.
- Existing Chapter Readiness source snapshots: **9/9 independently reviewed** (141 unique candidate item IDs, 133 outcome entries including merged/support/optional). Exact source/canonical hashes and per-chapter metadata are in `G10_9CH_27LESSONS_SGK_READINESS_ACADEMIC_METADATA_REGISTER_20261031.json`. Nine sets are privately persisted and restored; **NONE** is declared officially scoring or Mastery-active by this audit.
- **Do not claim `G10_FULL_WEBSITE_PATH_COMPLETE`**: ChV public integration and formal readiness runtime are release-lane matters, and A1–A7 whole-chapter academic source receipt aggregation does not itself supply tested learner UI.

## B. Actual existing Topic vertical path on main

- `docs/thpt-preview/chuyen-de/index.md` currently lists **one topic only** (`Hàm số và đồ thị · Hàm số bậc hai`). This is a partial pilot, not coverage for Grade 10 or three-year vertical Topic learning.
- Existing topic `ham-so/` has correct **three student sections** `kien-thuc.md` / `luyen-tap.md` / `tu-kiem-tra.md`; the `core.md` compatibility alias is not a fourth topic menu section. Source knowledge page declares `pilot_scope: PILOT_PARTIAL_G10`, and self-test declares `demo_scope: TECHNICAL_DEMO_ONLY`, `mastery_credit: false`.
- **No other topic directories exist on main**. SGK Core/Practice item reuse can feed Topic Practice through placement but does NOT by itself complete independent Topic Knowledge, stratified Practice, Topic Readiness or independent Topic Academic PASS.
- Academic next-phase domain crosswalk can cover Logic/Sets (ChI), inequalities and linear programming (ChII), triangle relations (ChIII), vectors (ChIV), numerical/statistical description (ChV), functions and quadratics (ChVI), coordinates and conics (ChVII), counting/binomial (ChVIII), and classical probability (ChIX). **These are candidate strands for grouping across Grades 10–12, not an owner-approved one-topic-per-chapter taxonomy or new menu proposal.** A proper topic may span multiple chapters/grades.

## C. Non-duplication and review workflow agreed with owner

1. **Reuse** every academically PASSed D1–D6 element and the one canonical public `item_id` across placements; Written/Anchor remain one library.
2. For each still-incomplete Topic strand (or any future new SGK chapter), construct the **complete** independent journey (theory/graphics/examples, stratified practice by skill/type/level, remediation D1–D6 and its own final self-check) with full S1 crosswalk and explicit Scope-to-Outcome matrix **before** NotebookLM review.
3. Review one **whole-chapter or whole-topic cohesive snapshot** at a time with a single batch and item/outcome verdicts. Delta_A/B provenance corrections remain author QA; only real DELTA_C affected content goes to a **consolidated scoped batch**, DELTA_D blocks the affected portion. Do not restart an entire PASSed chapter for a display or citation update.
4. Immediately after PASS, promote to the permanent canonical source, preserve original reviewer report and Temp, compute hashes and restore both. No authoring `CONTENT_READY` claim on only a reviewer summary or transient download URL.
5. Topic Readiness differs from SGK Chapter Readiness: do not cross-credit or copy the held-out assessment. No hint, Tutor or feedback before Final Submit. Mastery remains off until separately authorized release QA.

## D. Next authorized authoring work (not release tasks)

- **SGK Grade 10 academic archiving: COMPLETED candidate-source custody for nine chapters**, with no new review requested. Future authoring changes to those sources should be motivated by a real identified S1 gap or substantial Delta_C, not arbitrary extra item counts.
- **Topic independent source: NOT COMPLETE.** Build a grade10-including Topic crosswalk and complete the existing `Hàm số và đồ thị` pilot as the first full vertical Topic academic source before review; do not silently convert the pilot demo into a scored assessment. Other Topic strands follow as cohesive full-topic authoring batches, avoiding any new repository or backend.
- **Release integration: separate lane** owns ChV navigation/learner UI, D6 on ChVI Draft PRs, and official Readiness/Final Submit/score/Mastery gates; no unapproved merge/deploy from authoring.

**Checkpoint status:** `G10_SGK_REVIEWED_CHAPTER_SOURCES=9/9`; `G10_PRIVATE_READINESS_CANONICAL=9/9_RESTORED`; `G10_TOPIC_INDEPENDENT=PARTIAL_PILOT_ONLY`; `G10_SGK_COMPLETE_PUBLICATION=NOT_ASSERTED`; `RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`.
