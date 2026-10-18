# R33 — Post-R34 merge reconciliation and academic hold (2026-10-18)

**Project:** Self-Learning Math  
**Historical R27 packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**R33 scope:** exactly 24 original IDs in R30/R31; the other 16 original items are unchanged.  
**R34 fix merged on `main`:** PR #520, squash commit `dd4a88ea55d396557d88062609be221740faeff8`; public Math post-merge CI run [39106835775](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39106835775) = **SUCCESS**.

## 1. Why this reconciliation exists

R33 began before PR #520 fixed the ambiguous MCQ `QUA12V1_121`. R34 has since changed **only** its question stem in the canonical bank and was merged with the owner's explicit permission. R33 records and its original R27 historical references must remain **byte-for-byte historically honest**, not quietly rekeyed to R34. R34's strictly pinned reversible source adapter verifies the approved live blob `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08` and original `22c73f3d24020a7db1ead9b8b90c6488c8379ce0`. For that one item:

- Historical R27 item SHA-256: `119627613d0e3d0d08a7a582ddf1cebcfb065aa7e1e7f25fd29a5afdd989d863`.
- Corrected R34 item SHA-256: `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c`.
- Four options, answer A (index 0), explanation and all metadata were preserved; only the stem was changed.
- NotebookLM re-review reported **content correctness, unique answer, explanation = PASS** on the corrected R34 SHA. This is reviewer advice, not automatic owner Academic PASS.

Old R33 documents showing `P0_UNIQUE_ANSWER` as *unfixed* are **historical**; the current P0 wording defect is resolved in live bank on main. R33's historical source-locked R27 question remains unchanged in archived review proofs.

## 2. Scope and provenance now reconciled

- R33 has evidence-locator comparison for **24/24 targeted IDs** against actual SGK KNTT original material: 12 Toán 6 (original user-provided Toán 6 tập 2 PDF), 9 Toán 7 (original NXBGD page views), and 3 Toán 9 (original user-provided Toán 9 tập 2 PDF).
- 16 original secondary-citation flags are recorded as *issues to adjudicate*, not 16 mathematical errors. Reviewer claims of 21 PASS/3 REVISE from R32 are not accepted verbatim.
- R33's **8 STRUCTURAL_CLONE, 16 CONCEPT_BASE, 0 EXACT_MATCH** matrix is an **editorial proposal** only. 21 proposed Grade 6/7 Core placements are likewise provisional. The 3 Grade-9 IDs remain `LAYER_HOLD`.
- Specifically for corrected `QUA12V1_121`: R34's independent reviewer claimed `STRUCTURAL_CLONE` and `Entrance10`. Original Grade-9 textbook Bài 18/19 and GeoGebra pp113–114 support the necessary concepts and a related graphical intersection activity but do not establish the **same algebraic-method exercise**. `CONCEPT_BASE` is the safer editorial evidence-type proposal until more direct S1 is shown.
- Verified official exam examples provide a **positive** S3 point (TP.HCM 2024 Bài 1(b): algebraic line/parabola intersections) and a **negative** point (Hà Nội 2025: no such task). Neither proves national prevalence. Entrance10 can be a valid transfer/entrance-preparation *candidate* under Master Plan v1.2.1, but the owner's layer choice remains unapproved.

## 3. Gates

| Gate | Current status |
|---|---|
| R34 canonical wording repair | **MERGED**; old count-ambiguity eliminated |
| Main R34 CI after merge | **SUCCESS** on `dd4a88ea55d396557d88062609be221740faeff8` |
| R33 primary-S1 page access and ID tracing | **24/24 accounted for**, distinct from academic clearance |
| R33 evidence class `EXACT_MATCH / STRUCTURAL_CLONE / CONCEPT_BASE` | **24 editorial candidates; not authorized** |
| Grade 9 primary layer for `QUA12V1_121–123` | **LAYER_HOLD** (Core-Support vs Entrance10 unresolved) |
| Owner academic signoff for R33 24-row matrix | **PENDING** |
| Skill, Readiness, Mastery, learner-history writes, backfill | **NOT AUTHORIZED** |
| Merge of R33 and R32 academic QA files | **NOT AUTHORIZED by a green CI alone** |

### Mechanical scope

PR #519 can be safely brought up to date with `main` as a **QA-only branch** while retaining R34 and R33 QA checks. It must not replace the corrected live question or rewrite the old R27 source hashes. A dedicated test should verify both source generations simultaneously.

**No new academic PASS, layer activation, option/answer edit, Skill/Readiness/Mastery credit, learner history change or production write is implied by this reconciliation.**
