# CT09 Source Census R0 — Hệ phương trình

Date: 2026-10-03  
Status: **SOURCE CENSUS ONLY / NO FREQUENCY CLAIMS YET**

This file registers candidate sources for the CT09 pilot. It does not yet classify problem types or claim that a form is common.

## S1 — Curriculum / textbook

### S1-KNTT9-SYSTEMS
- Class: S1
- Status: AVAILABLE_AND_MAPPED
- Owner package: `KNTT TOAN 9.zip`
- Source: SGK Toán 9 tập 1 — Kết nối tri thức với cuộc sống.
- CT09 mapping: Chapter I, printed pp.5–25.
- Scope visibly confirmed: concept of linear equations/systems, substitution, elimination, common practice, solving problems by setting up systems, end-of-chapter exercises.
- Intended use: confirm Core scope, terminology, method expectations and layer boundaries.
- Reuse mode: REFERENCE_ONLY.
- Registry: `03_S1_KNTT_SOURCE_REGISTRY_R0.md`

### S1-KNTT9-WORKBOOK-SYSTEMS
- Class: S1
- Status: AVAILABLE_AND_EXTRACTED
- Source: SBT Toán 9 tập 1 — Kết nối tri thức với cuộc sống.
- CT09 mapping: Chương I, printed pp.4–19.
- Scope confirmed: concept/representation, substitution, elimination, solution-count structures, calculator use, coefficient/parameter-lite practice, modeling by systems, end-of-chapter mixed review.
- Reuse mode: REFERENCE_ONLY.
- Extraction: `05_S1_KNTT_SBT_CT09_EXTRACTION_R0.md`
- SBT Toán 9 tập 2 also received and registered for later Grade 9 topic audits.

## S2 — Pedagogical/reference sources

Status: AWAITING_OWNER_SELECTION.

Target:
- 1–3 trusted reference/advanced-practice sources;
- prefer sources explaining methods/problem types, not only answer dumps.

Each source will be registered separately before extraction.

## S3 — Authentic assessment: Hanoi grade-10 entrance exams

The following are official Hanoi Department of Education publication pages with attached Math exam/answer files.

### S3-HN10-2026
- Exam year: entrance for school year 2026–2027
- Issuer: Sở Giáo dục và Đào tạo Hà Nội
- Publication date: 2026-06-02
- Provenance:
  https://hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctfull/552/16984
- Status: CANDIDATE_ACCEPTED_FOR_CORPUS
- Extraction: NOT_STARTED

### S3-HN10-2025
- Exam year: entrance for school year 2025–2026
- Issuer: Sở Giáo dục và Đào tạo Hà Nội
- Publication date: 2025-06-11
- Provenance:
  https://hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctfull/552/16329
- Status: CANDIDATE_ACCEPTED_FOR_CORPUS
- Extraction: NOT_STARTED

### S3-HN10-2024
- Exam year: entrance for school year 2024–2025
- Issuer: Sở Giáo dục và Đào tạo Hà Nội
- Publication date: 2024-06-13
- Provenance:
  https://www.hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctfull/552/15448
- Status: CANDIDATE_ACCEPTED_FOR_CORPUS
- Extraction: NOT_STARTED

### S3-HN10-2023
- Exam year: entrance for school year 2023–2024
- Issuer: Sở Giáo dục và Đào tạo Hà Nội
- Publication date: 2023-06-15
- Provenance:
  https://www.hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky-thi-tuye/ctfull/552/14551
- Status: CANDIDATE_ACCEPTED_FOR_CORPUS
- Extraction: NOT_STARTED

## S3 — Hanoi school semester/final exams

Status: SOURCE DISCOVERY STARTED.

Selection rule for the pilot:
- provenance must be clear;
- use a small cross-school sample rather than one school only;
- prefer recent Grade 9 exams;
- record school/year/semester;
- do not use school reputation as a proxy for academic authority.

### Secondary discovery index: Loigiaihay — KNTT Grade 9 exam collection

- Site: https://loigiaihay.com/de-thi-de-kiem-tra-toan-lop-9-ket-noi-tri-thuc-c1984.html
- Publisher/site: Loigiaihay.com
- Source role: SECONDARY_DISCOVERY_INDEX / EXAM_STYLE_REFERENCE
- Program filter: **Kết nối tri thức** only for the current project.
- Accessibility check: PASS. Full problem text and detailed solutions are viewable for many entries.
- Collection currently exposes:
  - beginning-of-year survey exams, including named schools;
  - 5 generic midterm-1 sets;
  - 5 generic semester-1 exam sets plus a review outline;
  - 5 generic midterm-2 sets;
  - 5 generic semester-2 sets.
- Named Hanoi school entries currently visible include:
  - THCS–THPT Newton;
  - THCS–THPT Tạ Quang Bửu;
  - THCS&THPT Lương Thế Vinh.
- Cross-grade usefulness: the same site also has KNTT Mathematics exam collections for Grades 6, 7 and 8, so it may later support the 25-topic audit beyond CT09.

#### Classification rule

Loigiaihay is **not itself an official assessment issuer**. Therefore:

1. Generic items named only “Đề số 1…5” are treated as **S2 exam-style/pedagogical reference**, not as S3 frequency evidence.
2. An item carrying a school/test identity may become an **S3 candidate** only after provenance is verified against the original school/issuer, downloadable scan metadata, or another traceable primary source.
3. Loigiaihay answer explanations may be useful for method/error analysis, but are secondary explanations and never override S1 curriculum authority.
4. No “hay gặp / phổ biến” claim may be computed from Loigiaihay's editorial set counts alone.

#### CT09 evidence already observable on the site

Without making frequency claims, accessible KNTT Grade 9 pages visibly contain CT09-relevant structures such as:
- recognition of a linear equation in two variables;
- checking/identifying a system solution;
- selecting a system that models a two-unknown word problem;
- direct solving of systems;
- school survey items containing systems of equations.

These observations justify using the site for **problem-type discovery**, while final frequency counts remain restricted to verified S3 items.

## S4 — Challenge

Not needed to validate Core CT09 in the first pass.

Use only if the owner later wants a separate Specialized-Challenge audit.

## Source sufficiency checkpoint

Do not start final CT09 frequency/coverage claims until:
- S1 SGK + SBT extraction is complete — **DONE**;
- at least one S2 pedagogical source is registered;
- S3 Hanoi entrance corpus is extracted;
- selected school-test S3 sample is documented, or explicitly deferred.

S1 source sufficiency for CT09 is now adequate for the next comparison stage.

## Next extraction output

For each accepted source, extract only:
- distinct CT09 problem types;
- structural variants;
- canonical/classical candidates;
- common errors;
- direct/multistep/synthesis role;
- source location;
- evidence for curriculum/frequency/pedagogical claims.

Do not copy the full source into the site.
