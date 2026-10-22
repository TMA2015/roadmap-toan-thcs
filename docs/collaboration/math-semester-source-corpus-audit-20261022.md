# Self-Learning Math — Grade 6–9 Semester/Entrance Source Corpus Audit R1

**Audit date:** 2026-10-22  
**Status:** `SOURCE_INVENTORY_RECONCILED | SELECTIVE_CONTENT_REVIEW | NOT_EXAM_FREQUENCY_CLEARED`  
**Purpose:** use supplied term exams and related references as independent **structural coverage** evidence for the canonical Written Exercise Library, not as new master curriculum or as blindly trusted answer keys.  
**Boundary:** documentary-only; no raw copyrighted PDFs imported to the public repository, no live content/ID/filter/learner-history/Readiness change.

## 1. Exact archive inventory

The owner re-uploaded four ZIP archives to the ongoing Math review. All archive entries were inspected; PDF page counts used PyMuPDF; 79 SHA-256 hashes were computed from **file contents** (not just filenames). Results below supersede the older remembered 80-document / 2,051-page figure.

| Archive | Files | PDF / other | PDF pages counted |
|---|---:|---|---|
| `lớp 6(1).zip` | 30 | 30 PDF | Included in 2,042 |
| `lớp 7(1).zip` | 10 | 10 PDF | Included in 2,042 |
| `Lớp 8(1).zip` | 11 | 11 PDF | Included in 2,042 |
| `lớp 9 thi vào 10(1).zip` | 28 | 27 PDF + 1 .doc | Included in 2,042 |
| **All** | **79** | **78 PDFs + 1 DOC** | **2,042 PDF pages** |

Exactly **79 distinct SHA-256 content hashes**; no exact byte-identical duplicates in the newly supplied four archives. **Near-duplicate/structural-clone detection remains unreviewed.** The one old-format .doc was not reliably page-counted; do not add a guessed page count to the 2,042 PDF pages.

Archive SHA-256:
- Grade 6: `011e46f3c0f5f862717c5719c4c3ee2d5acf1aefb875f385359772d924ec05fd`
- Grade 7: `ee64dd0353846c6482b2d359e6c627aba19f87d8367130fb56fc1956be32c64d`
- Grade 8: `e65b0aada1167364910b43710e2fe86dfa7f1d26b73ef409d3d3cef8f4ac371e`
- Grade 9/Entrance10: `a77ae69e8b0444999011fdb55daa1a6dfb74e65cc40ac77e3e6c0c46492665f6`

## 2. Source class and grade/semester availability

These are **classification counts of files**, not counts of actual schools, unique official papers or verified question types.

| Label (filename + opening-page metadata; not final provenance clearance) | Count |
|---|---:|
| Semester exam-style PDFs | **45** |
| Semester review/outline PDFs | **4** |
| Topic/reference PDFs | **9** |
| Entrance mock/reference compilations | **16** |
| Files labelled entrance/admission exam | **5** |
| **TOTAL** | **79** |

Semester-style PDFs by grade:

| Grade | HK1 | HK2 | Total |
|---|---:|---:|---:|
| 6 | 14 | 13 | 27 |
| 7 | 0 | 9 | 9 |
| 8 | 2 | 7 | 9 |
| 9 | 0 | 0 | 0 |
| **Total** | **16** | **29** | **45** |

All 45 semester-style PDFs visibly carry Loigiaihay.com branding on their first page. Several explicitly state that they were **compiled by the site's academic team**, so they belong to **S2 prepared/reference assessments** unless independently supported by official school-source provenance. Do **not** present their content counts as prevalence in real school examinations.

The Grade 9 archive is mostly specialized or general **entrance-to-Grade-10** preparation and exam-labelled materials, not Grade 9 HK1/HK2 school exams. Even an apparent official Hà Nội admissions scan inside a third-party PDF wrapper needs authentic provenance validation before entering an S3 denominator.

Missing source strata: Grade 7 HK1, Grade 9 HK1/HK2. Do not interpret their absence as a curriculum gap.

## 3. Exam-content spot checks — specific evidence (no frequency extrapolation)

The following examples were extracted from the PDF question sections and checked against rendered page images where decisive. They are **qualitative structural comparisons** to existing catalog items, not exact copied questions, not claimed exam frequencies.

| Source PDF (exact leading filename) | Observed section | Canonical existing WX relation | Judgment |
|---|---|---|---|
| Grade 6 HK1 `de-kiem-tra-hoc-ki-1-toan-6-de-so-1-` | **Page 2, written Bài 3:** largest common divisor / divisibility conditions | `WX02-NUM-001`: real-world greatest-common-divisor group count | **MATCHED_PROBLEM_FAMILY**, different question context/data |
| Grade 6 HK2 `de-kiem-tra-hoc-ki-2-toan-6-de-so-1-` | **Page 2, written Bài 3:** sequential fraction + percentage of a remainder | `WX02-NUM-003`: fraction of whole versus whole from a part | **ADJACENT_STRUCTURAL_APPLICATION**, not exact duplicate |
| Grade 7 HK2 `de-kiem-tra-hoc-ki-2-toan-7-de-so-1-` | **Page 2, written Bài 2:** teams, common workload, equal productivity and inverse proportionality | `WX03-RAT-002`: person-days inverse relationship | **MATCHED_PROBLEM_FAMILY**, paper multi-team variant is richer |
| Grade 7 HK2 same paper | **Page 2, written Bài 4:** isosceles triangle proof using congruence and multiple propositions | `WX14-TRI-001` / topic CT14, not a direct match to pilot `WX13-LIN-001` | **ADJACENT_LONGER_PROOF**, consider structural diversity in future audit |
| Grade 8 HK1 `de-kiem-tra-hoc-ki-1-toan-8-de-so-1-` | **Pages 3–4, written Bài 4:** rectangle and a multi-claim quadrilateral proof | `WX16-QUAD-001`: chained quadrilateral criteria | **ADJACENT_GEOMETRIC_REASONING**, different premises and goal |
| Grade 8 HK2 `de-thi-hoc-ki-2-toan-8-de-so-1-` | **Page 5, written Bài 2:** real-world motion model, unknown distance, times and speed change | `WX24-MOD-001`, currently topic-discoverable without `kntt_placements` | **MATCHED_MODELING_FAMILY**, consider placement only with S1 KNTT |
| Grade 9 / Hanoi 2026 `de-thi-vao-10-mon-toan-ha-noi-2026-` | **Page 1, Câu III.2:** two flower types, total count and total payment | `WX09-SYS-003`: tickets total count and revenue | **MATCHED_PROBLEM_FAMILY**, *not* a semester exam |
| Grade 9 / Hanoi 2026 same PDF | **Page 2, Câu IV.2(a):** prove four points concyclic through geometry | `WX19-CIR-002`: opposite-angle cyclic criterion | **SAME_BROAD_TOPIC_ONLY**; proof technique differs, not an exact match |
| Grade 9 / Hanoi 2025 `de-thi-vao-10-mon-toan-ha-noi-2025-` | **Page 1, Câu III.2:** two price-list amounts and different discounts, solve original prices | `WX09-SYS-004`: price list and discounted prices | **MATCHED_MODELING_FAMILY**, distinct from direct count/price system |

These observations support learning design: preserve short concept examples **and** deeper multistep written siblings. They do **not** authorize adding all paper questions, declaring one structure frequent, or inferring missing skills from the number of unmatched papers.

## 4. Confirmed quality warning: prepared exam answer inconsistency

**Source:** Grade 6 HK2 `de-kiem-tra-hoc-ki-2-toan-6-de-so-1-ket-noi-tri-thuc-1713575020.pdf`, content SHA-256 prefix `f269fe37d0da17884e61`.

- **Page 1, MCQ Câu 3** states results of a 4-faced die trial with face frequencies 12 (face 1), 14 (face 2), 15 (face 3), 9 (face 4), total 50. The probability of an **even-numbered face** is `(14 + 9)/50 = 23/50` = **choice D**.
- **Page 3 answer table** instead marks **Câu 3 = B**, equal to `14/50`.
- The same page's explanation of Câu 3 describes a **flower-preference survey of 30 students**, unrelated to the supplied dice question.
- Verified by direct PDF **page-image** inspection as well as extracted text, not an OCR or parsing inference.

**Disposition:** `SOURCE_ANSWER_KEY_CONFLICT_CONFIRMED | ISOLATE_FROM_UNREVIEWED_REUSE`. Do not inherit prepared-source answer keys without independent item-level validation. This is **one confirmed mismatch**, not a quantified error rate over 45 or 79 sources. It also does not imply any of the 75 live written-library answers are wrong.

## 5. Follow-on audit / decision gates

1. **S1 curriculum alignment**: match semester/problem objectives to KNTT Core by verified grade/chapter/lesson; record scope vs prerequisite separately, no mass promotion into `kntt_placements`. In particular, topic-first `WX24-MOD-001` must not be moved to the Grade-8 filter on the strength of a prepared paper alone.
2. **D4 reasoning diversity**: use the verified **problem family**, not problem counts, to check for missing real multistep structures (e.g., class 7 inverse proportional *three-team* reasoning, Grade 8 proof chains, Grade 9 counts-and-costs versus discounts).
3. **D6 learning support**: test a minimal new hint ladder only where first reasoning decisions fail; use paper-first, detailed self-rubric, common mistakes, remediation, no auto mastery.
4. **Review 8 locked items** already staged at `review-packets/written-exercise-library/MATH-WRITTEN-QUALITY-8PILOT-20261022-NOTEBOOKLM.md` with new source observations; NotebookLM verdicts must reconcile all 8 exact IDs.
5. **Provenance audit** on source official claims; keep mock/reference/official denominators separate. No corpus-backed 'exam frequency' or 'importance score' is currently approved.

## 6. Release safety

Only documentation changes are authorized in the current draft PR. **No canonical exercise edits, source excerpts republished, mass additions, learner grade/course placements, ID remapping, Readiness changes, student-history writes or production deployment.** The parent/owner must separately authorize a source-locked minimal content delta after independent academic review.
