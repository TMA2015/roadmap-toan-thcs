# Self-Learning Math — Source-verified exam crosswalk for the 8-item written pilot

**Date:** 2026-10-22  
**Status:** `SOURCE_CROSSWALK_PRELIMINARY` — not an independent academic verdict or frequency claim.  
**Linked packet:** `MATH-WRITTEN-QUALITY-8PILOT-20261022-R0` (eight canonical items).  
**Source corpus:** 4 owner ZIP uploads: 79 file-content hashes matched an accompanying 79-row CSV manifest, zero missing/extra/hash-mismatched internal members. Archive sizes correspond exactly to four ZIP files visible through the owner's connected Google Drive folder. **Google Drive bytes have not been cryptographically matched to the uploads:** identical sizes alone do not prove identical content.

## 1. Eight-way comparison (EXACT item IDs)

All corpus examples are **third-party-distributed references** pending provenance verification. For Loigiaihay-branded school-term PDF compilations, treat as prepared S2 sources, **not an authentic S3 school-test denominator**.

| Canonical item | Compared source / page | Relationship | Academic review focus |
|---|---|---|---|
| `WX02-NUM-001` (G6 GCD/ƯCLN) | G6 HK1 `de-kiem-tra-hoc-ki-1-toan-6-de-so-1-ket-noi-tri-thuc-1669026331.pdf`, **page 2, tự luận Bài 3(a)**; source SHA-256 `947704901fd7fb74...` | `MATCHED_FAMILY` — greatest divisor plus explicit greatest requirement, not same scenario as equal gifts | Ask learner to justify why GCD rather than LCM, state integer/divisibility conditions and final units |
| `WX02-NUM-003` (G6 fractions) | G6 HK2 `de-kiem-tra-hoc-ki-2-toan-6-de-so-1-ket-noi-tri-thuc-1713575020.pdf`, **page 2, tự luận Bài 3**; SHA `f269fe37d0da1788...` | `ADJACENT_NOT_EQUIVALENT` — a part of total followed by a percentage of the **remainder**, whereas pilot uses part-of-plan / whole-from-part | Ensure the phrase `của số còn lại` is explicitly distinguished from `của toàn bộ`. No false exact-duplicate claim |
| `WX13-LIN-001` (G7 parallel lines) | No directly matching *source-verified* question found in the inspected Grade-7 HK2 sample. | `NO_DIRECT_MATCH_VERIFIED` | Review proof-by-criterion vs proof from visual appearance; do not force a Grade-7 HK2 match to a Grade-7 chapter-3 skill |
| `WX03-RAT-002` (G7 inverse proportionality) | G7 HK2 `de-kiem-tra-hoc-ki-2-toan-7-de-so-1-ket-noi-tri-thuc-1746416741.pdf`, **page 2, tự luận Bài 2**; SHA `1e042d4762bfc73f...` | `MATCHED_FAMILY_HIGHER_REASONING` — three equal-work teams, 4/6/8 days and one between-team difference, vs two population counts and constant product in pilot | Existing item teaches key relation; later evaluate *separate deeper sibling* requiring 3-variable inverse ratios, not merely number replacement |
| `WX16-QUAD-001` (G8 quadrilaterals) | G8 HK1 `de-kiem-tra-hoc-ki-1-toan-8-de-so-1-ket-noi-tri-thuc-1735005901.pdf`, **page 4, tự luận Bài 4(a–c)**; SHA `07d1d9ec86698657...` | `ADJACENT_LONGER_PROOF` — a rectangle is given and several linked claims about midpoints/parallelogram/perpendicularity/inequality are proved. Pilot instead proves a quadrilateral is a rectangle. Not same proposition | Retain base proof; separately test whether available anchors teach multi-step geometry; do not silently rewrite pilot into copied source paper |
| `WX07-RAT-001` (G8 rational fractions) | No direct item-level match verified among specifically inspected paper questions in this batch. | `NO_DIRECT_MATCH_VERIFIED` | Original-domain retention is sound learning target; curriculum placement remains grounded on S1, not paper-name inference |
| `WX09-SYS-003` (G9 two-product count/cost) | G9-to-10 `de-thi-vao-10-mon-toan-ha-noi-2026-co-dap-an-va-loi-giai-chi-tiet-1780208820.pdf`, **page 1, Câu III.2**; SHA `11da43fb6d182b1a...` | `MATCHED_FAMILY` — total number of two kinds of flowers and combined cost vs tickets and price. This is **entrance exam labelled**, not school-semester | Evaluate whether learner can independently select 2 unknowns, derive 2 equations, solve and verify units/nonnegative integers; do not infer frequency |
| `WX19-CIR-002` (G9 cyclic quadrilateral) | Same G9 entrance-labelled PDF, **page 2, Câu IV.2(a)**; source SHA `11da43fb6d182b1a...` | `SAME_BROAD_CONCLUSION_DIFFERENT_GEOMETRY` — prove four points concyclic using a right-angle construction, not opposite-angle sum as in pilot | Core proof by supplementary opposite angles is not enough evidence of multitechnique geometry; evaluate another complementary proof anchor after review |

### Source-quality flag

The source PDF G6 HK2 `de-kiem-tra-hoc-ki-2-toan-6-de-so-1-ket-noi-tri-thuc-1713575020.pdf` has **one confirmed internal answer-key mismatch** on page 1 Câu 3 vs page 3 answer/explanation. The task asks even-face empirical probability from frequencies 12,14,15,9; independent computation gives `(14+9)/(12+14+15+9)=23/50`, **D**, while supplied answer table says **B** and the prose answer addresses a different flower survey. This validates a **source answer key is untrusted until checked** rule, not an error-rate or defect finding about any published WX item.

## 2. Next narrowly scoped candidate themes to investigate (not new exercise requests)

1. **Grade 6 segment/midpoint reasoning:** G6 HK2 sample page 2 written Bài 4 contains opposite rays, between-ness, segment lengths, midpoint and an additional proof. Compare first with existing `WX13-LIN-003`; improve reusable proof scaffolding only if structurally insufficient.
2. **Grade 7 multi-team inverse proportionality:** compare the 3-team source with `WX03-RAT-002` and topic's existing questions before deciding a multi-step written sibling is justified.
3. **Grade 7 chained triangle proof:** G7 HK2 sample page 2 Bài 4 has four claims including congruence, parallel segment construction, collinearity and a perimeter inequality. Compare with existing `WX14-TRI-001/002/003` and other anchors. Do not count surface-different claims as new families without reasoning-level analysis.
4. **Grade 8 chained geometric reasoning:** G8 HK1 written Bài 4 uses a given rectangle, midpoints, a new parallelogram, perpendicularity and a concluding inequality. Not a duplicate of basic `WX16-QUAD-001`.
5. **Grade 9 circular configurations:** entrance-labelled Grade 9 Câu IV.2(a–c) asks multistage geometry; existing `WX19-CIR-002` proves cyclicity via opposite angles. Compare proof techniques and cognitive load, not the shared final phrase `cùng thuộc một đường tròn`.

## 3. Audit and release requirements

- Match items by *mathematical structure*, not only terms in text; keep `MATCHED_FAMILY`, `ADJACENT` and `NO_DIRECT_MATCH_VERIFIED` distinct.
- Only the exact canonical current `kntt_placements` and separately checked S1 textbook evidence determine class/chapter/lesson, not exam papers or prerequisite skill tags.
- Any future new/changed content requires correct original math, self-check rubric and non-spoiling hints; if it uses source inspiration, author original numbers/contexts/proofs and do not publish the source paper itself.
- The existing eight-ID NotebookLM review packet remains unchanged. External source evidence is a **supplemental input**, not independent approval; verdict still pending.
- **No production code, catalog item, ID, student record, Readiness or rubric semantic changes in this phase.**


## 4. Eight-item structural self-study preflight, checked against the canonical GitHub catalog

Catalog blob: `5141a40bf1b8f8763257857d3b805d681a0956fa`. The eight selected IDs are present and unique in that catalog.

- **All 8**: nonempty source refs, catalog KNTT placement, fully worked solution representation (four explanation steps on each of 6 standard items, full worked solutions on 2 anchors), nonempty common-error list, remediation, and rubric points summing to the declared total.
- **2 anchors** (`WX02-NUM-003`, `WX09-SYS-003`): three progressive hints each, explicit why-this-method explanation, five-point self-check rubric each.
- **6 standard exercises** (`WX02-NUM-001`, `WX13-LIN-001`, `WX03-RAT-002`, `WX16-QUAD-001`, `WX07-RAT-001`, `WX19-CIR-002`): complete 4-step `solution_steps`, but **no dedicated `hint_steps`**. This is not an error by itself: review selective non-spoiling hints at genuine reasoning bottlenecks only.
- **0/8 catalog figure references**. For geometry items (`WX13-LIN-001`, `WX16-QUAD-001`, `WX19-CIR-002`), independently decide whether a diagram or an explicit student drawing instruction would improve learning; do not impose figures on every exercise or permit diagrams to create unstated assumptions.
- Spot-checked calculation/proof paths: G6 GCD(36,48)=12 and fraction plan 120/remaining 18; G7 parallel-line converse and four-person/15-day to six-person/10-day inverse relation; G8 parallelogram→rectangle and rational domain `x≠0,3`; G9 ticket system 24/16 and cyclic quadrilateral opposite-angle 62°. **No apparent P0 arithmetic/logic contradiction in these spot checks**, but the result is **not a fresh full independent academic PASS**; verify source authority, lesson placement and pedagogical efficacy separately.

**Pilot decision gate:** `PREFLIGHT_STRUCTURAL_OK | DEEP_PEDAGOGICAL_REVIEW_PENDING | NOTEBOOKLM_VERDICT_PENDING | NO_CONTENT_WRITE`.
