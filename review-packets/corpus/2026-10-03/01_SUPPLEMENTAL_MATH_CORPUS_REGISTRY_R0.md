# Supplemental Math Corpus Registry R0 — Owner Upload 2026-10-03

Date: 2026-10-03  
State: **INGESTED / PROVENANCE-CLASSIFIED / NO LEARNER-FACING EDIT**

Owner uploads:
- `lớp 6.zip`
- `lớp 7.zip`
- `Lớp 8.zip`
- `lớp 9 thi vào 10.zip`

This registry stores metadata/findings only. The uploaded binaries are not copied into the repository.

---

## 1. Corpus size and integrity

Raw uploaded files:
- 85

Exact-hash duplicates:
- 5 duplicate copies

Unique documents:
- **80**
  - 79 PDF
  - 1 legacy DOC

Unique PDF page total:
- **2,051 pages**

Unique documents by actual grade/scope:
- Grade 6: **30**
- Grade 7: **11**
- Grade 8: **11**
- Grade 9 / entrance-to-10: **28**

### Archive-placement issue

The Grade-6 ZIP contains **six Grade-7 semester-2 files**:
- đề số 5, 6, 7, 8, 9, 10.

Five of those (6–10) are exact duplicates of files in the Grade-7 ZIP.

The Grade-7 đề số 5 copy appears only in the Grade-6 ZIP.

Frequency analyses must use the deduplicated actual-grade registry, never raw ZIP counts.

---

## 2. Provenance classification

### S2 — compiled/reference/practice material

The overwhelming majority of the Grade 6–8 semester files are explicitly authored/compiled by:

`BAN CHUYÊN MÔN LOIGIAIHAY.COM`

These are valuable **exam-like practice/reference material**, but they are **not provenance-verified original school semester papers**.

Therefore:
- use for problem-type discovery/pedagogy;
- do not count them as authentic school-exam frequency evidence.

The Grade-9 archive also contains substantial S2 material:
- commercial/review books;
- topic packets;
- compiled Hanoi reference sets;
- author-created specialist practice sets;
- method/reference documents.

Examples:
- `Chinh Phục Toán 9...`
- `Chuyên đề bất phương trình bậc nhất một ẩn...`
- `Chuyên đề căn thức...`
- `Chuyên đề hệ phương trình...`
- 11 Loigiaihay Hanoi-2025 reference papers;
- `Một số đề ôn tập thi tuyển sinh vào lớp 10 chuyên...`
- `Phương pháp giải bài toán thực tế bằng bất đẳng thức`.

These belong to S2/reference unless separately tied to an official original paper.

### S3 — official current assessment

Verified official/source-identifiable items in the Grade-9 archive include:

1. **Hà Nội 2025–2026 non-specialized entrance Mathematics**
   - official Sở GDĐT header;
   - already used in the existing CT08 S3 R0 extraction.

2. **Hà Nội 2026–2027 non-specialized entrance Mathematics**
   - official Sở GDĐT header;
   - already used in the existing CT08 S3 R0 extraction.

3. **ĐHQG Hà Nội — THPT Chuyên KHXH&NV 2026**
   - official admissions paper;
   - separate specialized-school corpus, not pooled with Hanoi general entrance.

4. **ĐHQG Hà Nội — THPT Chuyên KHTN 2026, Vòng 1**
   - official paper;
   - specialized/challenge corpus.

5. **ĐHQG Hà Nội — THPT Chuyên KHTN 2026, Vòng 2**
   - official paper/solution reproduction carrying official source identity;
   - specialized/challenge corpus.

### S3-MOCK — provenance-verifiable school mock exams

Keep separate from official entrance exams:

1. **THCS Cầu Giấy — thi thử vào 10 chuyên lần 1, 14/05/2026**
   - UBND phường Yên Hòa / Trường THCS Cầu Giấy header;
   - 150-minute specialist mock.

2. **THCS Cầu Giấy — thi thử vào 10 lần 3, 2025–2026**
   - institution header;
   - 120-minute general mock.

3. **Liên trường THCS Nguyễn Tri Phương / Thống Nhất / Hoàng Hoa Thám — thi thử tháng 5, 2026–2027**
   - multi-school header;
   - 120-minute general mock.

Mock papers may support authentic-transfer examples, but must not share the denominator of official entrance-frequency statistics.

### PROVENANCE_UNCERTAIN

The legacy DOC:
- `de_thi_vao_10_cba11.doc`

contains a 2022–2023 entrance-style paper but no sufficiently clear original institution/provenance in the extracted document.

Keep for structure discovery only unless provenance is later established.

---

## 3. Text-extraction status

Most PDFs contain extractable text.

Four short official/mock image PDFs required render/visual inspection for provenance:
- Cầu Giấy specialist mock lần 1;
- Liên trường mock tháng 5;
- KHXH&NV 2026;
- KHTN 2026 vòng 1.

Their original pages were inspected visually; no OCR was needed for the current CT08 evidence decisions.

Two large study/reference PDFs have sparse opening-page text but substantial extractable text later:
- `Chinh Phục Toán 9...`
- `Một số đề ôn tập thi chuyên...`

They remain S2; exhaustive OCR is not required for the current CT08 Core audit.

---

## 4. Grade-6 / Grade-7 / Grade-8 semester-source conclusion

The uploaded Grade 6–8 “semester exam” corpus is highly useful as **S2 exam-like practice**, but it does **not** currently resolve authentic school-semester frequency because the files are mostly Loigiaihay-authored/compiled sets.

Therefore:

`SCHOOL_SEMESTER_FREQUENCY_GAP = STILL_INSUFFICIENT_SOURCE_FOR_AUTHENTIC_FREQUENCY`

This is a provenance conclusion, not a criticism of the educational usefulness of the files.

---

## 5. Reuse policy for later topics

The deduplicated corpus should be reused topic-by-topic:

- Grade 6 material → foundation/CT02+ audits;
- Grade 7 material → middle-spine audits;
- Grade 8 material → equation/function/geometry audits;
- Grade 9 + entrance material → CT08–CT25 and Entrance10 transfer.

For each topic:
- map problems to the topic catalogue;
- distinguish new structure vs numerical variant;
- preserve exam-type/provenance class;
- calculate frequency only within declared homogeneous subcorpora.

No raw ZIP/file count may be used as a frequency denominator.
