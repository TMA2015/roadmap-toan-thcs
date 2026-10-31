# G11 KNTT SGK Chapter III — whole-chapter R01 academic authoring QA / NotebookLM handoff

**STATUS:** `AUTHOR_QA_PASS`, `NOTEBOOKLM_ACADEMIC_CHAPTER_III=PENDING`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. **This manifest does not certify Academic PASS or release QA.**

## 1. Exact chapter and source

- `PACKET_ID=THPT-G11-CHIII-B08-B09-WHOLE-CHAPTER-AUTHORING-R01-20261031`, grade 11 KNTT Volume 1 Chapter III. B08 Mẫu số liệu ghép nhóm and B09 Các số đặc trưng đo xu thế trung tâm, plus end-of-chapter Readiness. Source is one SGK horizontal path, NOT Topic Readiness.
- **SGK S1 page receipt checked against the textbook PDF/table of contents**: B08 printed 58–61, B09 62–68, end ChIII 69. **SBT KNTT Toán 11 Tập 1 exact printed B08/B09/end-ChIII pages remain unverified in this authoring session**: NotebookLM must check the SBT S1 PDF supplied by owner. Never invent a page interval.
- **Exact PUBLIC D1–D6 source and NotebookLM Temp:** `prototypes/thpt/content-drafts/THPT_G11_CHIII_B08_B09_D1_D6_COMPLETE_AUTHORING_R01_20261031.md` and `prototypes/thpt/review-packets/Temp_THPT_G11_CHIII_B08_B09_D1_D6_WHOLE_CHAPTER_R01_20261031.md`, **same Git blob `b902499d4aa546e77c362a250acff6361adc8661`**. Source originally saved as `Temp_G11_CHIII_B08_B09_D1_D6_COMPLETE_R01_20261031.md`, UTF-8 SHA256 `eca14fc4c485f4568b127aad4a45907c74b4c1520f2abe14f316eb00c50feee7`. The repo authoring and Temp blobs have the same content; the private-library source original remains independently archived.
- **Exact new SVG source** under `prototypes/thpt/content-drafts/svg/`: `FIG-G11-B08-01_R01.svg` blob `ef440d8b314bbbf74a21d624843a38577b040876`, `FIG-G11-B09-01_R01.svg` blob `84b570e65c5cdf63871be984b2c186508591bce9`, and `FIG-G11-B09-02_R01.svg` blob `9cf54f86f54a81070bfc75a2782c3ab48b1842da`. All three SVG XML are ALSO embedded verbatim in the public review Markdown; **do not upload additional SVG files to NotebookLM**.
- **PRIVATE separate protected source:** `Temp_G11_CHIII_B08_B09_PRIVATE_RD0_RD1_21_ITEMS_R01_20261031.md` original SHA256 `6844efba013ab9ba93741db9f4e8db7bde6ea017f1a1ac0e5a36192c82333cee`; PDF transport `Temp_G11_CHIII_B08_B09_PRIVATE_RD0_RD1_21_ITEMS_R01_20261031.pdf`, 5 text-layer pages, SHA256 `4f7311a783d94b488c56889e2230450ab4100e555a3a517a529b36275679a3d0`. Only one of MD/PDF is needed as second NotebookLM source; PDF recommended. Private stems, keys, solutions/rubrics **not committed to GitHub**.
- **Private Library custody**: `Math App/THPT_Academic_Review_Archive`, original public source, private source MD+PDF, 3 original SVG XML, internal SHA manifest and QA log — eight exact files; independently materialized and byte/SHA-verified `RESTORE_PASS=8/8`. Full original source manifests are private, **not a JSON NotebookLM review source**.

## 2. D1–D6 + readiness contents of one complete chapter

| Component | B08 + B09 R01 authoring snapshot |
|---|---|
| RD0 outcomes | 14 (five B08, eight B09, one ChIII integrated) |
| D1 theory | Complete grouped table, class boundaries/frequencies; grouped mean, cumulative, median, Q1/Q2/Q3, modal estimation and source limitations |
| D2 worked examples | 10 (four B08, six B09) |
| D3 public canonical Core/Practice | 28 (five Core + eight Practice B08; five Core + ten Practice B09) |
| D4 shared Written/Anchor | Four unique canonical Written (two B08 + two B09), Anchor as label only, rubric 4x1pt |
| Total public canonical IDs | 32; one `item_id` one answer/solution, no duplicate placements |
| D5 | 3 standalone XML/SVG figure IDs with accessible text and full XML in review source |
| D6 | 6 five-step targeted HELP_IDs (three each B08/B09) and return-to-practice |
| Private SGK_CHAPTER_READINESS | 21 distinct RD1 candidates, each original stem/answer/solution and 4x1-point rubric; protected separate source |

## 3. Verified author QA (not independent Academic PASS)

- Independent Python arithmetic with exact rational fractions, 10 grouped-data test samples (mean, median, quartiles, mode): **50/50** exact value checks PASS; source/ID/rubric/graphic linkage checks plus specific count, boundary and modal checks bring the total to **73/73 PASS**.
- Source readback: 32/32 unique public IDs; 21/21 unique private IDs; 0 overlapping IDs; each of 14 outcomes has public or independent RD1 evidence. 21/21 RD1 have 4 explicit 1-point rubric criteria and worked solutions; 3 SVG source XML parse without error and visual render reviewed, 6 D6 cards retained.
- Manual author fixes were incorporated **before** snapshot freeze: corrected draft arithmetic and improved structurally similar protected items. None of these pre-review fixes requires a delta NotebookLM review; current R01 is the effective first review snapshot. **The reviewer must independently examine anti-clone structure and all math, not accept author QA alone.**
- Figure note: grouped-frequency bars describe **only equal-width sample A**, cumulative points are labelled discrete table summaries, and the quartiles figure explicitly identifies estimates rather than exact raw sample values. Reviewer checks visual axis mapping and mathematical labels.

## 4. ONE whole-chapter NotebookLM independent review

**Use exactly two Temp sources:** 1) public whole-chapter Markdown `Temp_THPT_G11_CHIII_B08_B09_D1_D6_WHOLE_CHAPTER_R01_20261031.md` from GitHub Raw; 2) private five-page PDF `Temp_G11_CHIII_B08_B09_PRIVATE_RD0_RD1_21_ITEMS_R01_20261031.pdf` from owner file link. The required five Permanent THPT Sources v2.0 and SGK/SBT KNTT remain enabled in NotebookLM; no reupload needed.

Return independent verdict per lesson, outcome and canonical item for **14 outcomes, 32 public formative/Written candidates, 21 protected RD1, 3 SVG, 6 D6**, SBT exact printed-page receipt, grouped-statistics formula and conditions including multi-modal/tie/equal-width restrictions, and structural independence vs public exposure. Provide `SOURCE_RECEIPT`, `ID_RECONCILIATION`, P0/P1/P2, `MINIMAL_DELTA`, and `ACADEMIC_CHAPTER_III=PASS/FIX/BLOCK` for this exact source snapshot.

**After verdict:** If PASS, promote exact reviewed RD1 to canonical with immutable source/receipt SHA and RESTORE_PASS; if material Delta_C, re-review only the affected academic scope. Then one A1–A7 handoff manifest to A6. Never present this source as released or officially scoring before R1–R5 and explicit owner approval.

`ACADEMIC_CHAPTER_III=PENDING_NOTEBOOKLM`; `AUTHOR_QA_PASS=73_OF_73`; `PUBLIC_CANONICAL=32`; `PRIVATE_RD1=21`; `SOURCE_ARCHIVE_RESTORE=8_OF_8`; `RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`.