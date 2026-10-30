# G10 KNTT ChVII–VIII — S1 direct scanned-PDF pagination reconciliation (2026-10-30)

**SCOPE:** SOURCE_CITATION_ONLY · `DELTA_B_SOURCE_METADATA` · audit Draft PR #641. **No mathematics, stem, answer, rubric, canonical item/outcome ID, Readiness bank or runtime changed.**

## Source identity and method

The two original **user-connected Google Drive PDFs** were fetched as complete original bytes, SHA256-verified and independently inspected as page images (not OCR or extracted text; both files contain image-only pages). Page thumbnails located lesson/chapter headings; higher-resolution page images confirmed the actual **printed page number in the footer** at each boundary. PDF page indexes are **1-based**. For both exact files below, `PDF_PAGE = PRINTED_PAGE + 1` across the inspected ChVII–VIII region.

| S1 source | Google Drive file | Original byte SHA256 | PDF pages |
|---|---|---|---:|
| SGK Toán 10 KNTT tập 2 | Owner-connected SGK PDF (private Drive ID intentionally omitted) | `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6` | 102 |
| SBT Toán 10 KNTT tập 2 | Owner-connected SBT PDF (private Drive ID intentionally omitted) | `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7` | 143 |

**No textbook scans or copyrighted page images are copied to public GitHub.** This receipt records original file SHA256, page boundaries and the visual verification method; private Drive file IDs and download URLs are intentionally not disclosed.

## SGK Toán 10 tập 2 — verified printed-page boundaries

| Section | PDF page range (1-based) | Printed-page range | Boundary evidence |
|---|---|---|---|
| ChVII · B19 Phương trình đường thẳng | 31–36 | **30–35** | PDF 31 shows ChVII cover + B19; footer `30`; PDF 37 begins B20 |
| ChVII · B20 Vị trí tương đối của hai đường thẳng, góc và khoảng cách | 37–43 | **36–42** | PDF 37 begins B20, footer `36`; PDF 44 begins B21 |
| ChVII · B21 Đường tròn trong mặt phẳng tọa độ | 44–48 | **43–47** | PDF 44 begins B21, footer `43`; PDF 49 begins B22 |
| ChVII · B22 Ba đường conic | 49–58 | **48–57** | PDF 49 begins B22, footer `48`; PDF 59 begins chapter exercises |
| ChVII · Bài tập cuối chương VII | 59–60 | **58–59** | PDF 59 footer `58`, PDF 60 footer `59` |
| ChVIII · B23 Quy tắc đếm | 61–66 | **60–65** | PDF 61 begins ChVIII cover + B23, footer `60`; PDF 67 begins B24 |
| ChVIII · B24 Hoán vị, chỉnh hợp và tổ hợp | 67–72 | **66–71** | PDF 67 begins B24, footer `66`; PDF 73 begins B25 |
| ChVIII · B25 Nhị thức Newton | 73–76 | **72–75** | PDF 73 begins B25, footer `72`; PDF 77 begins chapter exercises |
| ChVIII · Bài tập cuối chương VIII | 77 | **76** | PDF 77 footer `76`; PDF 78 begins ChIX/B26, footer `77` |

## SBT Toán 10 tập 2 — verified printed-page boundaries

| Section | PDF page range (1-based) | Printed-page range | Boundary evidence |
|---|---|---|---|
| ChVII · B19 | 29–32 | **28–31** | PDF 29 begins ChVII/B19, footer `28`; PDF 33 begins B20 |
| ChVII · B20 | 33–39 | **32–38** | PDF 33 begins B20, footer `32`; PDF 40 begins B21 |
| ChVII · B21 | 40–42 | **39–41** | PDF 40 begins B21, footer `39`; PDF 43 begins B22 |
| ChVII · B22 | 43–47 | **42–46** | PDF 43 begins B22, footer `42`; PDF 48 begins exercises |
| ChVII · Bài tập cuối chương VII | 48–51 | **47–50** | PDF 48 begins exercises, footer `47`; PDF 52 begins ChVIII |
| ChVIII · B23 | 52–54 | **51–53** | PDF 52 begins ChVIII/B23, footer `51`; PDF 55 begins B24 |
| ChVIII · B24 | 55–56 | **54–55** | PDF 55 begins B24, footer `54`; PDF 57 begins B25 |
| ChVIII · B25 | 57–58 | **56–57** | PDF 57 begins B25, footer `56`; PDF 59 begins exercises |
| ChVIII · Bài tập cuối chương VIII | 59–61 | **58–60** | PDF 59 begins exercises, footer `58`; PDF 62 begins ChIX/B26, footer `61` |

## Disposition of the conflicting earlier claims

1. The NotebookLM RD0 R01 reviewer receipt asserted **SGK ChVII B19 p29–37 / B20 p38–44 / B21 p45–51 / B22 p52–58 / ChVIII B23 p62–68 / B24 p69–75 / B25 p76–79**. These ranges **do not match** the visually verified page headings/footers of the exact SGK Drive PDF identified above. `REVIEWER_PAGE_SCOPE_RESOLVED=YES` remains archived as the reviewer's assertion, **not independently accepted** for page citations.
2. Earlier repository visual receipt (ChVII B19 p29–34, B20 p35–41, B21 p42–46, B22 p47–56; ChVIII B23 p59–64, B24 p65–71, B25 p72–77) also differs from the original Drive PDF at multiple boundaries. It is historical evidence, not an authoritative citation for this file version.
3. **`S1_PAGINATION_CONFLICT_HOLD=RESOLVED_FOR_EXACT_DRIVE_PDFS`** by direct visual source inspection. However **`PUBLISHED_CITATION_PATCH=NOT_DONE`**: any existing learner-facing citation must be located, compared and corrected as a scoped metadata delta with QA; never mass-replace lesson content, overwrite frozen academic snapshots or silently change reviewer records.
4. This is **not** a new NotebookLM academic verdict. Existing ChVII–VIII RD0 R01 35/35 **scope-only PASS** stays tied to its frozen reviewed outcome blueprint; the held-out `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `NOT_ACTIVE`, `NO_SCORE/NO_MASTERY`, `NO_MERGE/DEPLOY` gates remain unchanged.
5. If another edition/file is substituted, re-verify its SHA256 and printed page boundaries independently. Do not assume a universal PDF page offset.

**Recommended next technical action:** audit all public ChVII/VIII SGK/SBT citation strings on current main against the table above; apply only demonstrably wrong page references via separate QA-controlled metadata delta, preserving exact reviewed mathematical bodies.
