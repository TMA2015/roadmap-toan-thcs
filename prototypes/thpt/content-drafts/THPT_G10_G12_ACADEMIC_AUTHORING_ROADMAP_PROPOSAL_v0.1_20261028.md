# DỰ THẢO LỘ TRÌNH PHÁT TRIỂN HỌC LIỆU THPT 10–12 · 28/10/2026 · v0.1

**Proposal for owner review, NOT an owner-approved new academic rule.** Applies to *academic authoring only* in this conversation. Website implementation, D6, backend protected keys, merge and deploy belong to the other conversation. Governing source `08_THPT_DUAL_COMPLETE_LEARNING_PATHS_AND_SHARED_RESOURCES_v2.0.md` has precedence over older R2/R4 contradictions.

## Why authoring seemed to jump from grade 10 to grade 12

The original pilot was **SGK Toán 10** (B16/Chapter VI), then expanded to ChVII–IX. From Chapter IX Probability, authoring followed the **vertical Topic Xác suất** through G10 foundations, G11 probability rules and G12 conditional probability/Bayes to complete one independent cross-grade learning journey. That was a bounded **topic-pilot exception**, **NOT** a decision to skip remaining Grade 10 chapters or to declare Grades 11–12 broadly complete.

The project has a settled **two-pathway learning architecture**, but a full chapter-by-chapter 10–12 **academic coverage tracker and work order have not yet been owner-approved**. This document proposes the missing sequencing control.

## Priority and stages — one academic completion unit per SGK chapter

| Stage | Academic work | Exit criterion / guard |
|---|---|---|
| **0. Freeze and reconcile existing pilots** | Preserve exact reviewer-pass snapshots of SGK G10 ChVII–IX, G11 ChVIII, Topic Probability; record latest G12 SGK ChVI D1D4 PASS and its 6 empty Readiness slots | No duplicate canonical content, no false whole-grade PASS; no need to re-review unchanged snapshots |
| **1. Finish Grade 10 SGK first — highest priority** | Reconcile full Grade 10 SGK/SBT chapter inventory from original sources; **finish G10 Chapter VI B15–B18**, then systematically cover **all remaining unreviewed G10 chapters** from Tập 1 and Tập 2. Existing reviewed ChVII–IX are preserved, not authored again | Each G10 chapter has S1 outcome receipt, complete per-lesson Knowledge + worked D2 + Core + Practice/Application + private **end-of-chapter** Readiness independently reviewed; figures as applicable |
| **2. Grade 11 SGK breadth** | After Grade 10 academic coverage, cover every G11 chapter in SGK order. Preserve G11 ChVIII B28–B30 + 6 private Chapter Readiness reviewer PASS; fill other chapters | Full G11 coverage matrix and every chapter independently complete, no implied coverage from Topic |
| **3. Grade 12 SGK breadth** | Complete G12 ChVI B18–B19 **6 new private SGK chapter-end Readiness** (currently blueprint only) as a bounded pilot closure; other G12 chapters are **not opened ahead of Grade 10 priority**. After G11, fill all remaining G12 chapters in SGK sequence | Whole Grade 12 independently complete only after source and per-chapter reviewer evidence |
| **4. Complete other vertical Topics** | Reuse linked G10–G12 skills/examples/SVGs/items from completed SGK sources and author the **independent** Topic Knowledge/Practice/Topic Readiness where source coverage permits. Topic Xác suất is a previously completed academic reference model, not proof other Topics are done | Each Topic self-contained, outcome matrix across applicable grades, 3 sections exactly; held-out **Topic** Readiness independently reviewed |

**Recommended discipline:** do not open a new Grade 11/12 chapter as the main authoring work while Grade 10 academic coverage remains incomplete. A cross-grade Topic may be authored ahead of the normal sequence **only when explicitly scoped as a finite pilot**, not by silently changing grade priorities. Optional small cleanup of six SGK G12 ChVI Readiness slots may close already-started Probability work; it must not grow into other G12 chapters.

## Current verified snapshot — not a full grade percentage

| Academic area | Snapshot status (as of owner-provided verdicts on 28/10/2026) | What remains |
|---|---|---|
| SGK G10 ChVI | B16 reviewed scoped PASS, B15/B17/B18 drafts from older checkpoint | Full S1 outcomes, D1–D5 and chapter-end Readiness reconciliation, academic review |
| SGK G10 ChVII–VIII | D1–D5 scoped NotebookLM PASS; 4 SVG reviewed PASS; end-of-chapter candidates reviewed in separate packets | Keep exact snapshots; release, route/browser/device QA is separate |
| SGK G10 ChIX | B26/B27 D1–D4 PASS; six private SGK chapter-end Readiness PASS | No protected runtime claimed |
| Topic Xác suất G10–12 | Full independent Knowledge/Practice/12 private Topic Readiness `PASS_WITH_SCOPE_TIERING` academic | Protected key / UI D6 belongs to other conversation |
| SGK G11 ChVIII | B28–B30 D1–D4 PASS; six private Chapter Readiness PASS | No whole-grade G11 acceptance |
| SGK G12 ChVI | B18/B19 D1–D4 and 12 shared placements **PASS** according to latest independent packet; P05 extension | **6 SGK Chapter Readiness blueprint slots only**, not authored/reviewed |
| Other G10/G11/G12 SGK chapters, other Topics | **Coverage inventory not yet reconciled** in this proposal | Inventory from real SGK/SBT before reporting overall completion |

### Required one-chapter authoring gates

1. **S1 first:** identify the exact SGK/SBT printed pages, lesson list and expected outcome IDs; make a short source/coverage matrix, no invented page numbers.
2. **D1–D2:** write complete Knowledge, conditions, formulas, examples, pitfalls and figures, sufficient for learners entering **this route alone**.
3. **D3–D4:** author/reuse one canonical item set (Core immediately after SGK lesson, Practice/Application, Written/Anchor), map roles and tier optional items, no duplicate ID/key/history.
4. **Chapter Readiness:** distinct PRIVATE held-out questions, independently reviewed; avoid exposed Practice/Topic questions; never publish keys to GitHub, never show hint/correctness/Tutor before **Final Submit**.
5. **D5 academic quality:** figures/diagrams if needed, plus original SVG and math review; do not generate decorative SVG if not required.
6. **NotebookLM receipts / delta:** use Permanent 01–05 v2.0 ONLY; send real Temp_ MD/TXT + short prompt simultaneously, per `06`; review batch/changes per `07 v1.1`. Track explicit P0/P1/P2 / source receipts and exact reviewed snapshots.
7. **Handoff to separate website conversation:** after chapter academic gates PASS, hand off IDs, placements, scope/review receipts and asset paths, *never public private assessment keys*. Deployment and owner sign-off are separate from academic review.

**Meaning of “chapter finished”:** academically complete and reviewed ≠ integrated and released. Final tracker must have separate fields `ACADEMIC_REVIEW`, `PRIVATE_ASSESSMENT_PROTECTION`, `D6_BROWSER_DEVICE`, `OWNER_RELEASE`.

## Next priority after this proposal

1. Record latest SGK G12 ChVI D1–D4 independent reviewer PASS with explicit six Readiness slots still blueprint.
2. **Return to Grade 10**: build actual full-chapter coverage inventory; start with Chapter VI B15–B18 and recover earlier B16 scope delta, then advance remaining unreviewed chapters in textbook order. Do not repeat ChVII–IX academic packets already passed.
3. Put Topic and G11/G12 partial snapshots on **maintenance only** until Grade 10 SGK reaches academic completeness. Optional G12 Chapter VI six-question pilot cleanup can be a short strictly bounded task.
4. Update a human-readable grade-by-chapter progress matrix after every reviewer verdict (states: `NOT_STARTED`, `DRAFT`, `REVIEW_PENDING`, `PASS_SCOPED`, `HOLD`, `RELEASE_NO`), without assigning a fake completion percentage before textbook inventory reconciled.

```text
ROADMAP_STATUS|PROPOSED_PENDING_OWNER_ACK
DEFAULT_ACADEMIC_PRIORITY|GRADE_10_FIRST_THEN_11_THEN_12
VERTICAL_TOPIC_WORK|BOUNDED_WHEN_GROUNDED_IN_S1
CURRENT_G12_SGK_CHVI|D1D4_PASS_READINESS_BLUEPRINT_ONLY
OTHER_CONVERSATION|WEBSITE_D6_AND_RELEASE
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
