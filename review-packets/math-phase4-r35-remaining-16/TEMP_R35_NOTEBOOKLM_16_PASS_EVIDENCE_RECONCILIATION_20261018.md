# R35 — Reconciliation of independent 16-item NotebookLM verdict (provisional, not Owner Academic PASS)

**Packet:** `MATH-R35-R27-REMAINING-16-20261018`  
**Date:** 2026-10-18  
**Scope:** `NUM02V1_133–144` (12) and `RAT03V1_121–124` (4) only. The other 24 R27 IDs already have separate Owner academic decisions under R33.  
**Source:** NotebookLM report supplied by Project Owner in conversation; `TEMP_R35_NOTEBOOKLM_16_VERDICT_CLAIMS_TRANSCRIPTION_20261018.json` is a *structured transcription* of the pasted text, not an exact original export.

## Independent reviewer recommendations and independently checked mathematics

NotebookLM marks **16/16 PASS**, zero REVISE, zero INSUFFICIENT_EVIDENCE, with **16 `KNTT-Core` candidate primary layers**. A separate arithmetic and option-level sanity check of the exact R27 bank has found no incorrect intended answers or duplicate correct answer choices in these 16 questions. That is **not a new Owner Academic PASS**, nor a claim that all SGK citations have been verified against the original publisher exercise pages.

The report is internally inconsistent about **evidence type count**:

| Count basis | STRUCTURAL_CLONE | CONCEPT_BASE | EXACT_MATCH |
|---|---:|---:|---:|
| The 16 **individual rows** | **14** | **2** | 0 |
| Report's summary block | **13** | **3** | 0 |

**Single discrepancy:** `NUM02V1_144` (find `x=√16`) is explicitly marked **`STRUCTURAL_CLONE`** in its table row, but included among the three `CONCEPT_BASE` IDs in the narrative summary. Do **not** silently change the source report. Treat its type as `EVIDENCE_TYPE_HOLD` pending a specific owner choice; the other 15 reported row labels do not conflict with the summary's named concept IDs.

## Source/page crosschecks: distinguish S1 from supporting S2

- The authoritative **official NXBGD Toán 7 tập 1 and tập 2 e-book** pages are accessible as original page images. Original printed **T1 p30** includes the `Luyện tập 1` exercise `√16` and the definition of the nonnegative arithmetic square root. Original printed **T1 p36** has **Bài 2.13**, a set-partition task for rational/irrational numbers. The R35 `NUM02V1_144` has the **same number and square-root fact** as p30 `Luyện tập 1a`, but it uses a different MCQ stem, so `EXACT_MATCH` would overstate verbatim identity. Whether that is treated as `STRUCTURAL_CLONE` or `CONCEPT_BASE` requires a consistent definition.
- Crosschecked S2 transcriptions (not substitute original S1 scans): `Bài 1.7` printed p13 uses rational-number arithmetic with distinct numbers; `Bài 2.7d` printed p32 asks for the arithmetic square root of **121**, supporting `NUM02V1_142`; `Bài 2.13` p36 has a different set of rational/irrational numbers, supporting the structure of `NUM02V1_141`.
- KNTT Toán 7 T2 Bài 20 printed pp4–7 covers ratio/proportion; Bài 22 printed pp11–14 covers directly proportional quantities. These topics support the relevant 4 CT03 questions, but task-specific same-reasoning comparisons against **all four exact original S1 activities** are not fully independently completed in this intake.

Primary SGK publisher links:

- Toán 7 tập 1: https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-7-tap-mot.4714106181
- Toán 7 tập 2: https://taphuan.nxbgd.vn/tap-huan/doc-sach/sgk-toan-7-tap-hai.4700015846

S2 crosscheck locators (support only):

- Bài 1.7 p13: https://loigiaihay.com/giai-bai-17-trang-13-sgk-toan-7-tap-1-ket-noi-tri-thuc-a105351.html
- Bài 2.7 p32: https://loigiaihay.com/giai-bai-27-trang-32-sgk-toan-7-tap-1-ket-noi-tri-thuc-a105460.html
- Bài 2.13 p36: https://loigiaihay.com/giai-bai-213-trang-36-sgk-toan-7-tap-1-ket-noi-tri-thuc-a105482.html

## Academic review decisions separated from technical QA

| Gate | Status |
|---|---|
| Exact 16 historical R27 IDs and source hashes | QA source-locked in R35 |
| NotebookLM mathematical reviewer verdict | **16 PASS received** |
| Independent arithmetic sanity check | **16 intended answers confirmed** |
| Reviewer summary vs per-row type counts | **FAIL — 14/2 vs 13/3** |
| Specific `NUM02V1_144` evidence type | **HOLD: STRUCTURAL_CLONE vs CONCEPT_BASE** |
| 16 primary-layer candidates | **KNTT-Core proposed, not owner-approved** |
| Direct primary SGK same-structure checks | **Partial; do not claim 16/16 verified** |
| Owner Academic PASS on these 16 | **NOT AUTHORIZED** |
| Bank edits, runtime promotion, Skill/Readiness/Mastery, backfill/deploy | **NOT AUTHORIZED** |

**Next step:** Reconcile the sole evidence-type discrepancy for `NUM02V1_144`, close direct S1 evidence checks where still partial, and seek Owner approval as an *academic decision separate from deployment*. No need to redo the 24 already approved questions.
