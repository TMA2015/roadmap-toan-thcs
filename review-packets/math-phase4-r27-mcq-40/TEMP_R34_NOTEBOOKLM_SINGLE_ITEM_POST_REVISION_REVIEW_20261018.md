# R34 — Independent Academic Review: single approved MCQ wording revision

**Project:** Self-Learning Math  
**Date:** 2026-10-18  
**Review packet:** `MATH-R34-QUA12V1_121-POST-REVISION-20261018`  
**Original bank packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Expected ID count:** **exactly 1** — `QUA12V1_121`.  
**State:** `REVIEW_REQUESTED_NOT_ACADEMICALLY_APPROVED`.  
**Owner:** explicitly approved the **minimal wording change**, NOT automatic Academic PASS, Entrance10 relabeling or deployment.

## 1. Permanent reviewer sources

Select only the current **Master Plan v1.2.1**, **NotebookLM Math Review Rules v1.2**, **Academic Source & Depth Audit Rules**, with the batch materials below. Deselect obsolete batch sources/older Master Plan versions.

### Batch source authority

- S1 KNTT Mathematics Grade 9, **Tập 2** provided by Project Owner (PDF binary SHA-256 `eda1f0014afff53915190cf893345221b1a5bfa35407d58cec67b527655b597c`): Bài 18 printed pp4–9 (function `y=ax²`); Bài 19 printed pp10–17 (quadratics); GeoGebra practice printed pp113–114 (software plotting/intersection).
- Exact **R34 bank chunk** `docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1-05.json` at R34 Draft PR #520 branch, Git blob SHA `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`.
- Prior authoring/QA provenance is contextual only: R27 historical 40-MCQ source, R33 primary-S1 audit matrix, R33 P0 ambiguity report, R34 owner-approved change receipt.

**Do not cite general secondary tutorial pages as original S1.** Authentic entrance exam S3 is not in this packet; do not assert appearance/frequency in official entrance exams based on memory.

## 2. Exact CURRENT question to review

**ITEM_ID:** `QUA12V1_121`  
**Question:**

> Phương trình hoành độ giao điểm của parabol y=x² và đường thẳng y=3x+4 là phương trình nào?

**Four options (zero-index original IDs):**

| Option index | Answer |
|---:|---|
| 0 — A | `x²−3x−4=0` |
| 1 — B | `x²+3x+4=0` |
| 2 — C | `x²−3x+4=0` |
| 3 — D | `x²+3x−4=0` |

**Canonical answer index:** `0` (A).  
**Unchanged explanation:** `Tại giao điểm ta có x²=3x+4, tương đương x²−3x−4=0.`  
**Legacy skill tag:** `lien-he-do-thi` (legacy only; not proof of reviewed Family/Skill or credit eligibility).  
**Authoring history:** Old embedded `authoring_review.status=PASS` refers to **Practice Implementation W1 R1 on 2026-10-09**, not independent clearance of the R34 revised wording.

### Integrity pins

| Object | Old immutable R27 | New R34 candidate |
|---|---|---|
| Git bank blob SHA | `22c73f3d24020a7db1ead9b8b90c6488c8379ce0` | `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08` |
| Complete item record SHA-256 | `119627613d0e3d0d08a7a582ddf1cebcfb065aa7e1e7f25fd29a5afdd989d863` | `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c` |

Historical R27 source must not be rewritten as though the changed wording had always existed. Reconstruct the old logical source only under the strict before/after blob lock in the R34 QA script.

## 3. Why this revision was necessary

The old sentence was:

> Số giao điểm của parabol y=x² và đường thẳng y=3x+4 bằng số nghiệm thực của phương trình nào?

Under this **root-count wording**, both option A and D have discriminant `Δ=25` and hence two real roots. The count-based answer was nonunique.

The new question asks for the **specific equation of the abscissae of the intersections**: `x²=3x+4` implies `x²−3x−4=0`. No other option follows from equating the two functions.

**This argument is the authoring team's preliminary mathematical check, not the independent reviewer verdict.** Reviewer should explicitly verify it, look for any new ambiguity and challenge the distractors.

## 4. Independent reviewer requirements

Review only `QUA12V1_121`, not the other 39 R27 IDs. For this ID, verify independently:

1. **Mathematical validity** — domain/conditions for real points, equivalent equation transformations, whether any options are algebraically equivalent to the intended abscissa equation.
2. **Unique answer and distractors** — exactly one option correct **under the new wording**, other three clearly wrong; the distractor D should not remain ambiguously valid.
3. **Explanation quality** — supports the chosen option, uses appropriate grade-level reasoning, no hidden steps necessary to distinguish options.
4. **Primary S1 source placement** — separate directly taught KNTT Grade-9 skills from a composite algebraic line–parabola task. Identify exact printed page(s) for each supporting concept/method and distinguish a **GeoGebra intersection activity** from **manual derivation** of the intersection equation.
5. **Evidence type** — choose `EXACT_MATCH`, `STRUCTURAL_CLONE`, or `CONCEPT_BASE`, with textbook comparison (not just same topic label).
6. **Curriculum layer** — separately judge `KNTT-Core`, `Core-Support`, or `Entrance10` under v1.2.1; explain the inference limits if S1/S3 is insufficient. Difficulty is not the same as layer.
7. **Change integrity** — confirm four option IDs/texts, keyed answer index, explanation, tags and neighboring two questions stay unchanged. **No QA code may treat a previous W1 authoring PASS as post-revision academic PASS.**

## 5. Required verdict output (machine-readable)

Return all rows (exactly one) in the following format, with specific evidence and no generic blanket PASS:

```text
PACKET_ID|MATH-R34-QUA12V1_121-POST-REVISION-20261018
TOTAL_INPUT_IDS|1
TOTAL_OUTPUT_VERDICTS|1
SOURCE_BANK_BLOB|89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08
SOURCE_RECORD_SHA256|6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c
ITEM_ID|QUA12V1_121
CONTENT_CORRECTNESS|PASS/REVISE/INSUFFICIENT_EVIDENCE
ANSWER_UNIQUENESS|PASS/REVISE/INSUFFICIENT_EVIDENCE
EXPLANATION|PASS/REVISE/INSUFFICIENT_EVIDENCE
S1_CITATION|PASS/REVISE/INSUFFICIENT_EVIDENCE
EVIDENCE_TYPE|EXACT_MATCH/STRUCTURAL_CLONE/CONCEPT_BASE/INSUFFICIENT_EVIDENCE
PRIMARY_LAYER_PROPOSAL|KNTT-Core/Core-Support/Entrance10/LAYER_HOLD
OVERALL_ITEM_VERDICT|PASS/REVISE/INSUFFICIENT_EVIDENCE
S1_PAGE_AND_ACTIVITY|<exact original textbook citation>
RATIONALE|<item-specific justification>
REQUESTED_ACTION|<exact minimal action or NONE>
ACADEMIC_PASS_AUTHORIZED|FALSE
PRODUCTION_SKILL_COUNTER_AUTHORIZED|FALSE
RELEASE_AUTHORIZED|FALSE
```

NotebookLM's `OVERALL_ITEM_VERDICT=PASS` means **independent reviewer recommendation**, NOT Project Owner academic signoff or production authorization.

## 6. Separate gates

- **R34 technical QA:** already PASS on commit `28ab4112459139a712ec05d891415b521ce8e0fe` (full PR Quality run `39103852380`).
- **Independent academic reviewer:** pending; use *this exact corrected candidate*.
- **Project Owner acceptance:** pending subsequent independent result.
- **R33 24-ID SGK classification:** separate unresolved review, especially `QUA12V1_121–123`; R34 does not decide all three.
- **No auto merge/deploy, no ID reindex, no option changes, no history backfill, no Taxonomy/Skill/Readiness/Mastery change.**

**Release status:** `ACADEMIC_HOLD_POST_REVISION`.
