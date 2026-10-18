# R34 — Owner-approved revision of QUA12V1_121 (one-field source delta)

**Project:** Self-Learning Math  
**Date:** 2026-10-18  
**Original review packet:** `MATH-R27-NEW-MCQ-40-20261018`  
**Owner approval in active conversation:** approved the proposed rewording, **keeping all four options and answer A**.  
**Scope:** Only `QUA12V1_121` within the 3-question file `docs/assets/data/practice/12-phuong-trinh-bac-hai-viete-v1-05.json`.  
**Branch:** `fix/math-r34-qua12v1-121-question-20261018` — independently based on `main`.  
**Merge gate:** QA and independent academic re-review required; no unilateral release.

## Exactly approved text delta

**BEFORE (P0 non-unique real-root-count MCQ):**

> Số giao điểm của parabol y=x² và đường thẳng y=3x+4 bằng số nghiệm thực của phương trình nào?

**AFTER (unique equation-of-abscissae MCQ):**

> Phương trình hoành độ giao điểm của parabol y=x² và đường thẳng y=3x+4 là phương trình nào?

The four options remain in exactly the same order:

- A / zero-index 0: `x²−3x−4=0` — **correct**
- B / zero-index 1: `x²+3x+4=0`
- C / zero-index 2: `x²−3x+4=0`
- D / zero-index 3: `x²+3x−4=0`

**Why:** Previously option A and D both had two real roots (`Δ=25`) and the question only asked for **the number of real roots**. Now it asks for the actual abscissa equation `x²=3x+4` → `x²−3x−4=0`, which only A represents.

The original explanation is retained and exactly matches new wording: `Tại giao điểm ta có x²=3x+4, tương đương x²−3x−4=0.`

## SHA and historical-source strategy

| Object | Historical/original | New owner-approved live candidate |
|---|---|---|
| QUA12-V1 chunk Git blob SHA | `22c73f3d24020a7db1ead9b8b90c6488c8379ce0` | `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08` |
| Exact QUA12V1_121 record SHA-256 | `119627613d0e3d0d08a7a582ddf1cebcfb065aa7e1e7f25fd29a5afdd989d863` | `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c` |
| R27/R29/R30/R31 *historical receipts* | remain unchanged, original Git blob SHA still applies **to the archived logical baseline** | new active live source blob is separately pinned |

The archived logical baseline is verified without copying copyrighted/legacy bank snapshots into the repository: a **strict, one-field reversal** of the approved new question text is permitted only if the live blob equals the new pinned SHA and the reconstructed original bytes equal the historical original pinned SHA. The existing `R27.inspect()` still reports the original R27 source identity for old review receipts; `R34.audit()` separately asserts current live question identity, current record SHA-256, legacy record SHA-256, and exactly one approved text delta. R26 evaluates the live file independently; therefore the bridge compares R26's **current source SHA** to the new live blob, rather than mislabeling it as original. No other source hashes are rewritten.

**Important:** The embedded `authoring_review.status=PASS` in the unchanged question record is from the earlier Practice Implementation W1 review (2026-10-09). It must not be interpreted as a **new academic re-review PASS of the modified item**. R34 marks the revised item as pending independent re-review. The 3 CT12 layer decisions and R33 owner academic metadata gate remain outstanding.

## QA and safety

`node scripts/test-math-v2-r34-owner-approved-wording-delta.js` covers:

- SHA-lock of original and corrected source file.
- Exactly one modified question field, no changes to other two questions, options, order, answer index, explanation, tags, difficulty, or original authoring metadata.
- Same 40-ID historical R27 source review reconstructed with original packet content unchanged, and unaffected R29–R31 claims.
- Recomputed old/new per-record SHA-256 and regression tests that altered options/question/whitespace are rejected.
- Arithmetic argument for non-unique old count-based question and unique new abscissa-equation choice.
- Zero learner data read/write, no policy / Skill / Readiness / Mastery activation, no migrations or backfills.

**Unresolved release requirements:** public Math PR Quality PASS on exact latest commit, independent academic re-review of corrected MCQ and CT12 layer, explicit approval to merge into `main`/deploy. A green CI alone does not satisfy academic clearance.

**Explicit boundary:** approval of wording **does not** amount to a blanket R27/R33 24-item PASS, to CT12 `Entrance10` classification, or authorization of historical student mastery credit.
