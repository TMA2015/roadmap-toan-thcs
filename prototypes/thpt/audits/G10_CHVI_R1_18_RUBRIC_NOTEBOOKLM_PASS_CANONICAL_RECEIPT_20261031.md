# G10 ChVI — 18 Readiness R1 rubric academic PASS & privately restored canonical (31/10/2026)

**Status:** `AUTHORING_ACADEMIC_PASS_SCOPED_RUBRIC_R1`; source custody `RESTORE_PASS`; **NOT** `RELEASED`, `MASTERY_ACTIVE`, `SGK_CHAPTER_READINESS_ACTIVE`, or `TOPIC_READINESS_ACTIVE`.

## 1. Independent reviewer source receipt and reconciliation

- Reviewer-provided original pasted file: `Văn bản đã dán (1)(20261031-090752).txt`, 11,601 bytes, SHA256 `6a2c9240387d87fe7db406aa7a34364370ec7b9462de9e9b0d6687e278336fbd`; unchanged original archived privately.
- `PACKET_ID=THPT-G10-CHVI-READINESS-R0-RUBRIC-DELTA-C-R01-20261031`, base `THPT-G10-CHVI-KNTT-BATCH-CANDIDATE-20261028`. Reviewer cited 5/5 THPT Permanent Sources v2.0 and SGK/SBT KNTT Toán 10 Tập 2 (B15–B18).
- **Exactly 18/18** new point-by-point scoring rubrics individually PASS: B15 5; B16 5; B17 4; B18 4. `MISSING=0`, `DUPLICATED=0`, `P0=0`, `P1=0`, `P2=0`, `MINIMAL_DELTA=0`, `ACADEMIC_RUBRIC_R01=PASS`.
- Original 18 question stem/key/solutions unchanged from historical R0 exact reviewed five-Temp ZIP (SHA256 `704f23d50278f9d36270d4b065b3d8f72e08ffbd00f3ac3fbe41a66fb40b2960`; original `Temp_03` SHA256 `3ee7d0cdf3c50fbbac9b1af5487f9dd1dcba8f33c5224e6bb5e859966c33cdce`). Original mathematics R0 and *new rubric R1* have separate independently recorded PASS sources.
- Source Markdown Temp exact bytes: `Temp_G10_CHVI_R0_18ITEM_RUBRIC_DELTA_C_REVIEW_R01_20261031.md`, **15,311 bytes**, SHA256 `4d2eb7534e904f2eeefdba94f0411885f2fb8e7ce52623ce422498133c426259`.
- PDF **transport** actually imported by reviewer: `Temp_G10_CHVI_R0_18ITEM_RUBRIC_DELTA_C_REVIEW_R01_20261031.pdf`, **88,917 bytes**, SHA256 `2d60042d370e4cb04f3d1a84db13e5c260bd9d61ad2130c861478f24d9ec646b`.
- **PAPERWORK CORRECTION, NOT ACADEMIC DELTA:** reviewer reported `4d2eb753...` as SHA256 of *PDF*, but that hash belongs to Markdown, not PDF. The reviewer packet ID and 18 ID lines match the actual PDF/Markdown academic source. This receipt separately pins both digests, does not rewrite the reviewer report, and does **not** infer byte-identity between PDF and Markdown.

## 2. Terminology correction applies to reviewer paraphrase ONLY

- In the reviewer summary for `THPT-G10-B15-R01`, the phrase **“nguyên tắc đơn ánh (mỗi x có đúng 1 y)”** is terminologically incorrect: *đơn ánh* means injective, whereas the rubric tests the **function assignment condition** that every input has a unique output.
- The **exact reviewed R1 canonical rubric already states correctly:** `Lý giải tiêu chuẩn mỗi x ứng với đúng một y (1đ)`. The underlying R0 answer/solution also correctly identifies duplicate `(2;5)` as consistent with being a function.
- Therefore **no edit** to 18 reviewed scoring criteria, questions, keys or solutions is needed. The original NotebookLM reviewer prose stays intact in private archive; this receipt corrects its explanatory label for downstream users. `DELTA_A_METADATA_ONLY` (report clarification), no academic re-review requested.

## 3. Effective canonical source custody

- The 18-item **effective R1 canonical content** is an **exact byte copy** of the 18-question R1 candidate *after* its independent rubric PASS, with original `CHƯA REVIEW` note left **unaltered in item text** for byte parity. Its current reviewed status is authoritative in this outside-the-items receipt + private manifest, not inferred from an old candidate header.
- Private canonical file: `_INTERNAL_THPT_G10_CHVI_R1_CANONICAL_18ITEM_REVIEWED_20261031.md`, **13,044 bytes**, SHA256 `a25ae92a4cb01122189bab2f4a22f7427838d5d7d7361a2cb9e9855571c9a154`. Contains the full 18 question stem/key/solution/rubrics, **not committed to public GitHub**.
- Private v2 manifest: `_INTERNAL_G10_CHVI_R1_REVIEWED_CANONICAL_MANIFEST_v2_20261031.json`, **14,389 bytes**, SHA256 `d263c274c0c6b82e69a3b8d43d76fd485dfcf2233182c1c6e9c091ace108ed5c`; explicitly `ACADEMIC_RUBRIC_R1=NOTEBOOKLM_PASS_18_OF_18_SCOPED`, `archive_status=RESTORE_PASS`.
- All three new objects (verdict raw, R1 canonical, v2 manifest) uploaded to private `/Math App/THPT_Academic_Review_Archive/` and independently read back with byte hashes PASS (3/3). The previous R0 source, candidate R1, Temp MD/PDF and manifest v1 stay there as immutable academic history.
- Re-ran source-level `115/115` QA: 18 original item body text-and-hash matches; 18 rubric criteria sets exactly 4 points; review packet equals final R1 canonical item bodies; no answer/key changes; original 18 IDs unchanged. No new canonical ID added.

## 4. Readiness separation, exposure and release gates

- **`ACADEMIC_PASS_SNAPSHOT=YES`** for ChVI old18 R0 (math) plus R1 (rubrics). `CANONICAL_SOURCE_RESTORE_PASS=YES`. **A1/A2/A3/A4/A6/A7 source-custody gates** for this *old18 Readiness candidate bank* have evidence; **not** formal website Chapter-Readiness or score activation.
- Old18 vs newer alternative20 `THPT-G10-CHVI-RD1-01..20` distinct bank still **EXPOSURE_DEDUP=HOLD`**. Do not merge banks, silently reuse IDs or infer independent exposure safety for the newer 20.
- The 18 old candidates are not part of public `G10-SGK-CHVI` `PUBLIC_FORMATIVE_ONLY` release; a separate authenticated/other runtime design is not asserted. The owner's separate simplification decision is on Issue #662, **release lane**, not the academic author.
- **`RELEASE_AUTHORIZATION=NO`**, **`MASTERY_ACTIVATION=NO`**. Do not modify saved student learning history, Firebase, Gemini, Golden UI, Chapter/Topic Readiness or deploy/merge from this authoring receipt.

**Checkpoint:** `CHVI_R0_18_ITEM_MATH=ACADEMIC_PASS`; `CHVI_R1_18_RUBRICS=ACADEMIC_PASS`; `CANONICAL_R1_PRIVATE_SOURCE=RESTORE_PASS`; `NEW20_COMPARISON=HOLD`; `WEBSITE_RELEASE=NO`.
