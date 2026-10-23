# Self-Learning Math — THPT R1 source availability and fail-closed intake

**Packet:** MATH-THPT-SOURCE-INTAKE-R1-20261023  
**Date:** 2026-10-23  
**State:** RESEARCH_ONLY / SOURCE_INTAKE_PARTIAL / SGK_HOLD / NO_LESSON_AUTHORING / NO_DEPLOY  
**Baseline:** THCS `main@680e248d4d2cff59fa69b4cbd1fe2be1083f8d1f` after PR #572 post-87 audit closure.

## 1. What R1 actually verified

This is an **availability/provenance check**, not the promised grade 10–12 S1 curriculum mapping.

| Source | Source authority | Observed 2026-10-23 | Permitted use |
| --- | --- | --- | --- |
| Chương trình GDPT **môn Toán** attached to TT 32/2018/TT-BGDĐT (26 Dec 2018) | S1 normative programme | Public education-school government portal identifies the Math-specific programme and PDF attachment; full PDF pages and precise class 10–12 outcomes **not independently read/verified** in this R1 | Record provenance and locate precise programme; do not yet assert page-level outcomes |
| Chương trình GDPT tổng thể | S1 general framework | Official ministry publication located in R0; **not the same document as the subject-specific Math programme** | Cross-cutting principles only; not a substitute for Math's class-by-class objectives |
| KNTT Toán 10 SGK tập 1/2 | S1 textbook, needed | Connected Drive folder titled `KNTT TOAN 10` was found; **zero files returned** by an exact parent-folder listing; targeted title searches did not establish both volumes | HOLD all book-specific lesson names, ranges, page citations and KNTT-Core placement |
| KNTT Toán 11/12 SGK tập 1/2 | S1 textbook, needed | Targeted connected Drive title searches did not identify verified matching six-volume stock; **not proof the files do not exist elsewhere** | HOLD class 11/12 KNTT placement |
| Chuyên đề học tập lựa chọn lớp 10–12 | S1 for optional source/layer decisions | No original corresponding KNTT books/page mappings verified | Keep elective/specialist layer separate, HOLD placements |
| Official 2025+ THPT examination structure | S3 assessment-policy evidence | Cục Quản lý chất lượng's official HTML announcement gives MCQ, 4-part True/False and short-answer response types, Math 90 minutes; the 34-question figure was a **published demonstration** and explicitly could change | Version the assessment format by effective year; never redefine curriculum Core |

**Public, provenance-identified entry pages** (URLs are public, no private Drive links or IDs):

- Math subject programme attachment index at public school education portal: https://thcsandong.haiphong.edu.vn/van-ban-bo-gddt/chuong-trinh-giao-duc-pho-thong-mon-toan-ban-hanh-kem-theo-thong-tu-so-322018tt/vbct/20343/91425
- Official 2018 *general* programme PDF used in R0 (not the subject-specific Math programme): https://moet.gov.vn/content/tintuc/Lists/News/Attachments/8421/chuong-trinh-tong-the-ctgdpt-2018.pdf
- Cục Quản lý chất lượng, 2025 exam format: https://vqa.moet.gov.vn/vi/news/thong-bao/cau-truc-dinh-dang-de-thi-tot-nghiep-thpt-tu-nam-2025-74.html

These public pages locate documents. They **do not** substitute for inspecting the original, accessible, edition-verified six KNTT books and the Math subject-programme pages. Educational portal metadata may contain typos (e.g., date fields); treat the signed original as authoritative.

## 2. Required six-volume SGK intake inventory

| ID | Source required | Availability in this R1 | Chapter/lesson/page verification |
| --- | --- | --- | --- |
| S1-KNTT-G10-V1 | KNTT Toán 10 tập 1 | NOT_ACQUIRED | NOT_REVIEWED |
| S1-KNTT-G10-V2 | KNTT Toán 10 tập 2 | NOT_ACQUIRED | NOT_REVIEWED |
| S1-KNTT-G11-V1 | KNTT Toán 11 tập 1 | NOT_ACQUIRED | NOT_REVIEWED |
| S1-KNTT-G11-V2 | KNTT Toán 11 tập 2 | NOT_ACQUIRED | NOT_REVIEWED |
| S1-KNTT-G12-V1 | KNTT Toán 12 tập 1 | NOT_ACQUIRED | NOT_REVIEWED |
| S1-KNTT-G12-V2 | KNTT Toán 12 tập 2 | NOT_ACQUIRED | NOT_REVIEWED |

"NOT_ACQUIRED" means **not verified as source and not processed for this packet**; it does not allege that the owner has no such file anywhere. Do not include user-private Drive file IDs, content or share URLs in repository provenance.

## 3. Fail-closed academic mapping protocol

Before creating any class 10 Core Card, question, written item, published navigation or pilot, require:

1. Verify the subject-specific **Chương trình GDPT môn Toán** applicable source, text, year, and precise class 10–12 outcome references.
2. Acquire the appropriate original **KNTT SGK** volume with publisher/edition, grade, volume, chapter, lesson, page references; verify mathematical conditions in context. Distinguish core textbook pages from selectable supplementary specialist books.
3. Build the `grade → chapter → lesson → canonical skill` mapping with source page references and explicit `KNTT-Core`/support/optional/exam role.
4. Separately record the `grade9 prerequisite → grade10 skill` bridge as prerequisites, **not** duplicate THCS/THPT Skill identity or retrospective evidence.
5. Obtain source-locked, item-by-item NotebookLM academic review with expected IDs; classify PASS/REVISE/INSUFFICIENT_EVIDENCE/NOT_REVIEWED. Academic PASS alone never authorizes production.
6. Only then design a **small Grade 10 pilot** (candidate: propositions/sets *if source verified*, not an approved placement), preserving the shared golden Learn → Practice → independent Readiness boundaries and separate Written self-check.

## 4. Product & data isolation

- Proposed THPT architecture: **one THPT knowledge/skill graph** with two learning paths (KNTT course map and cross-grade topic spine), as a research hypothesis **not** a product release decision.
- Separate class 10–12 canonical skill/item identities and learner-evidence namespace from THCS. Never infer completion of THPT from THCS scores or backfill/migrate historical attempts.
- Three exam-question contracts should be investigated as separate versions: MCQ; four independent True/False propositions; numeric/short answer with exact tolerance/format rules. These are **future technical design questions**, not active assessors.
- Preserve free-first/local-first, no forced account, no paid APIs, PC/iPad support. Do not create a repository, site, Firebase app, auth pipeline or new deployment in this research wave.
- No mass-generated lessons or unverified exam-frequency statements; no republication of copyrighted textbook pages.

## 5. Exact next gate

**S1_HOLD**: Acquire and verify at least the **Math subject programme** plus the first authentic Toán 10 KNTT volume before an official source-mapped Grade 10 pilot can begin. All six volumes are required before claiming an overall 10–12 course-coverage map.

Until then: `NO_THPT_LESSONS`, `NO_THPT_QUESTION_BANK`, `NO_THPT_RELEASE`, `THCS_PRODUCTION_UNCHANGED`. This source-gate document is allowed as a **Draft research PR only**, not a product activation.
