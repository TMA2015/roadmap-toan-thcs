# G10 ChVIII · RD1 original private item authoring — metadata-only handoff (31/10/2026)

**STATUS:** `DRAFT_NOT_ACADEMICALLY_REVIEWED` · `DELTA_C_NEW_PRIVATE_ITEMS` · `AUTHOR_STATIC_MATH_QA_PASS` · `NO_RELEASE / NO_SCORE / NO_MASTERY`.
**SCOPE:** `SGK_CHAPTER_READINESS:G10:CHVIII`, B23–B25 only; independent of Topic Readiness and of the existing 28 public formative/Written items.
**PACKET_ID:** `THPT-G10-CHVIII-SGK-CHAPTER-READINESS-RD1-PRIVATE-ITEMS-20261031-R01`.

## Source S1: checked directly, not inferred from an older review

Original owner-connected scanned PDF **SGK Toán 10 KNTT tập 2**: 102 PDF pages, SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`. Direct visual page-image inspection on 31/10/2026: B23 printed **60–65**, B24 **66–71**, B25 **72–75**, Chapter VIII exercises **76**. Original scanned **SBT Toán 10 KNTT tập 2**: 143 PDF pages, SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`; B23 **51–53**, B24 **54–55**, B25 **56–57**, chapter-end **58–60**. Scanned PDF pages are image-only; no OCR-based page claims. For these sections, PDF page (1-based) = printed page + 1.

Existing independent NotebookLM RD0 R01 **outcome-scope-only** PASS is tied to unchanged ChVIII blueprint Git blob `2a786c73c90814eda483dde9edbede64dec33e50`: **12 original outcomes**, 11 CORE_KEEP and 1 OPTIONAL `G10-B25-COEFFICIENT_SUM`. It does **not** approve these new RD1 items. No n≥6 or negative powers in mandatory B25 Core.

## New private author candidate — NOT published to GitHub

- Actual local/owner-handoff file: `Temp_G10_CHVIII_SGK_CHAPTER_READINESS_RD1_PRIVATE_ITEMS_R01_20261031.md`.
- Exact UTF-8 size: **24,572 bytes**; SHA256 **`a17b23a660603df849680f311023ffdaca48617031a5b3eea701551e30e8c4c3`**.
- **15 provisional unique item IDs** `THPT-G10-CHVIII-RD1-01..15`; 14 Core candidates and 1 `OPTIONAL_NO_SCORE` challenge.
- Modes: **4 MCQ_SINGLE, 4 TRUE_FALSE_GROUP, 3 SHORT_EXPLANATION, 4 WRITTEN_RUBRIC**. 15 question/answer pairs, **12/12 unchanged RD0 outcome IDs** covered. All 11 Core outcomes mapped to 01–14; optional coefficient-sum mapped only to 15.
- Public comparison sources consulted: 25 original ChVIII C/P/Application items, source blob `2ae62fada28913ec336b3507684408a1e05a3232`, and 3 original public Written items, source blob `4b85cf5ce9818875f229cb3d745a762b8e1bfa12`. The original `THPT-G10-CHVIII-RD05/RD06` n=6/7 scope-HOLD candidates are **not reused**. **Different stems/IDs alone do not establish structural/exposure independence.**
- Independent Python/SymPy arithmetic and combinatorial probes: **PASS** for 15 author solutions; uniqueness, modes, tier, S1 pin and 12/12 outcome coverage: **PASS**. This is **author QA only**, not NotebookLM item PASS, production scoring QA or learner exposure verification.

## Delta / review / integration gates (Project Source 07 v1.1)

`DELTA_C_NEW_PRIVATE_ITEMS` applies to the new 15 mathematical items, keys, written rubrics and outcome evidence. Do not change source-locked ChVI 54-ID/19-outcome academic PASS, the public ChVII/VIII 36+28 canonical banks, reviewed 35-outcome RD0 R01 scope or Golden R4. Any reviewer math/key/rubric/scope correction must be targeted `DELTA_C_ACADEMIC_MATERIAL` and independently re-reviewed. A source citation or purely presentational correction with identical mathematics may follow scoped technical QA without blanket NotebookLM re-review.

**Next academic gate:** owner may use the actual `Temp_` Markdown file with the separately prepared five-sentence NotebookLM prompt and five Permanent THPT v2.0 sources to obtain **15 item-by-item** correctness, source, tier and public-overlap verdicts. No request to upload immediately; source handoff is available whenever convenient. `ACADEMIC_RD1_ITEM_VERDICT=PENDING`; `EXPOSURE_STRUCTURAL_ISOLATION=NOT_VERIFIED`; `EXACT_REVIEWED_SOURCE_PARITY=NOT_APPLICABLE_YET`.

**Latest owner policy:** Issue [#662](https://github.com/TMA2015/self-learning-math/issues/662) delegates a simplified client-side **technical QA-only** self-check to the release lane, not to academic authoring. Its demo engine and any future self-check scoring are **not** an authorization to publish this unreviewed private bank, register live assessment IDs, write student results or grant Skill Mastery. `FINAL_SUBMIT_PRODUCTION=OFF`, `MASTERY=OFF`, `OWNER_RELEASE_AUTHORIZATION=NO`. This audit branch changes no runtime, learner history, THCS, Firebase, GitHub Pages or deployed pages.

**GitHub:** Draft [#641](https://github.com/TMA2015/self-learning-math/pull/641), metadata-only continuation. PR #612 was merged on 28/10; it is not an open Draft target.
