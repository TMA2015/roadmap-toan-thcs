# G11 SGK Chapter IV B10–B14 — whole-chapter R01 authoring & one-batch NotebookLM QA manifest

**As of 31/10/2026 · REVIEW_STATUS=NOT_YET_NOTEBOOKLM_PASS · RELEASE_AUTHORIZATION=NO · MASTERY_ACTIVATION=NO.**

## 1. Authoring snapshot source (one entire chapter, not piecemeal)

- `PACKET_ID=THPT-G11-CHIV-B10-B14-WHOLE-CHAPTER-AUTHORING-R01-20261031`.
- All five SGK KNTT Toán 11 Volume 1 lessons: B10 Đường thẳng và mặt phẳng trong không gian (index 70–77); B11 Hai đường thẳng song song (78–83); B12 Đường thẳng và mặt phẳng song song (84–87); B13 Hai mặt phẳng song song (88–94); B14 Phép chiếu song song (95–101); end exercises (102–103). **These page indices are corroborated against public SGK contents, NOT personally checked from owner original S1 scan.** NotebookLM must directly verify original SGK and especially all SBT chapter printed pages; no SBT pages invented.
- **Exact public full-chapter source:** `prototypes/thpt/content-drafts/THPT_G11_CHIV_B10_B14_D1_D6_FULL_AUTHORING_R01_20261031.md`, Git blob **`f376c37dc4b98fe229f3151357da1d2701cab15e`**.
- **Exact public NotebookLM source** `prototypes/thpt/review-packets/Temp_THPT_G11_CHIV_B10_B14_D1_D6_FINAL_R01_20261031.md`, Git blob **`f376c37dc4b98fe229f3151357da1d2701cab15e`** (byte-identical including trailing LF). Local final public UTF8 **57,946 bytes, SHA256 `78df094930db65e70641bddd5c164a8170a943f29ba07a573251f6024b0384a9`**.
- **PRIVATE RD0/RD1 original reviewer source** `Temp_THPT_G11_CHIV_B10_B14_PRIVATE_RD0_RD1_22_REVIEW_LOCK_R01_20261031.md`, 23,426 bytes, SHA256 **`41bdb1977855e9fcb5594f865bf9374ae681eb337487a1b2f3dd11e5bc8fad72`**. Kept in ChatGPT Library `/Math App/THPT_Academic_Review_Archive/`, not public GitHub.
- **PRIVATE transport PDF** `Temp_THPT_G11_CHIV_B10_B14_PRIVATE_RD0_RD1_22_REVIEW_LOCK_R01_20261031.pdf`, 46,440 bytes, SHA256 **`7e1e4341c8e56919394f87661ccc08cf5a0223c833b798e9aea1bcc3f2ecd937`**. Eight pages with text layer; all 22/22 RD1 IDs found by PDF text extraction and sample pages manually viewed. **PDF byte hash differs from original Markdown** as expected.

## 2. Complete academic content and canonical inventory

| Component | Whole chapter authoring candidate |
|---|---|
| RD0 | 22 outcome IDs: B10 5; B11 4; B12 4; B13 4; B14 4; 1 integrated |
| D1 | Definitions/conditions, full lesson theory: incidence and sections; coplanar/skew; line–plane/plane–plane parallel tests; projections with nondegenerate hypotheses |
| D2 | 20 solved examples (4 each B10–14), includes false-inference traps |
| D3 | 10 canonical SGK Core and 20 Practice/Application IDs, each with stem, answer and worked solution |
| D4 | 10 canonical Written/Anchor with four explicit 1-point rubric criteria; Anchor is just Written tag |
| D5 | 5 SVG sources `FIG-G11-B10-01` … `FIG-G11-B14-01`, with `<title>`, `<desc>`, hidden edges / line–plane conditions and nonmeasurement disclaimer |
| D6 | 10 distinct HELP_IDs (two per lesson) with misconception, condition, correction, worked microcheck, explicit return canonical ID |
| SGK_CHAPTER_READINESS | 22 **PRIVATE held-out** RD1 canonical candidate IDs, one per outcome; original stem, solution and rubric /4 for each |
| Public comparator | 40 unique public IDs, no private stem/key/solution in this PR |

## 3. Exact SVG source Git blobs

| Figure | Git blob | Meaning |
|---|---|---|
| FIG-G11-B10-01 | `ffd7788a36442efae9067f61bc891d360bd65151` | Tetrahedron, common line of two planes |
| FIG-G11-B11-01 | `ab6bd565f48e9addf190e02b0e9d729011d21c52` | Parallel edges and skew edges in triangular prism |
| FIG-G11-B12-01 | `4f0972621fa04af55232a46c46448998ee241ba6` | Midsegment parallel to base plane |
| FIG-G11-B13-01 | `153327ce6ceaf9c2f1110e3939fa464442dd7cb0` | Parallel planes in parallelepiped |
| FIG-G11-B14-01 | `c7c1f862228c51443d8021c63870990052009679` | Parallel projection and preserved collinearity/ratios |

All SVG XML is also embedded **verbatim** inside the public D1–D6 review Markdown, so user needs **only two NotebookLM sources**, no extra SVG uploads.

## 4. Author QA and source custody, candid boundaries

- Structured author QA: **40/40 unique public IDs**, **22/22 unique RD1 IDs**, **22/22 RD0 mapped**, 10/10 Written rubrics, 22/22 RD1 four-point rubrics, 10/10 HELP IDs, 5/5 SVG XML parsed, 5/5 SVG accessible `<title>/<desc>`, no invalid control bytes. Five SVG rendered and inspected; the B10 tetrahedron projected vertex positions were corrected **before** this snapshot to avoid apparent overlapping edges.
- Private PDF: eight pages, selectable text, 22/22 RD1 IDs extracted; first and last page rendered and visually inspected. Checks of selected geometry/algebraic ratios and logic PASS as **author checks**, not an independent proof of all 62 items.
- Text-similarity scan across 22 private vs 40 public item prompts: highest char-n-gram cosine score ~0.43; no exact prompt duplicates. **Similarity scan is NOT a rigorous anti-clone clearance.** NotebookLM must independently assess conceptual/stem/parameter/solution-path exposure.
- **SOURCE CUSTODY RESTORE PASS**: exact final 57,946-byte public Markdown, 23,327-byte private MD and 46,293-byte PDF were uploaded to private Library under separate final filenames, then downloaded and SHA256 matched **3/3**. Earlier stale public/private Library copies and outdated B10 image were renamed `_SUPERSEDED_...` to avoid ambiguous effective sources.
- Source gap: exact original SGK/SBT S1 printed pages and mathematical figure hypotheses require independent reviewer validation; NO academic PASS should be declared from this author QA. The source is all-five-lesson candidate R01, ready for **ONE** whole-chapter independent NotebookLM batch.

## 5. Final-review and release boundary

- Add **two Temp sources** in the same NotebookLM THPT notebook: public full D1–D6 Markdown (GitHub Raw or final local copy) and PRIVATE RD0/RD1 eight-page PDF. Keep exactly five Permanent THPT Sources v2.0 and all six SGK/SBT PDFs for grades 10–12.
- Reviewer must inspect B10–B14 entire S1 scope, answer/solution/rubric and SVG correctness; check source-page receipts of SBT; 22 outcomes, all 40 public IDs and 22 held-out private items, structural exposure; return item/outcome verdict P0/P1/P2 and `ACADEMIC_CHAPTER_IV=PASS/FIX/BLOCK` for the source SHA above.
- Until independent PASS and source-lock, `ACADEMIC_CHAPTER_IV=PENDING`, `A1_A7_AUTHORING=COMPLETE_CANDIDATE_ONLY`, `A6_HANDOFF=NOT_YET`, `SYSTEM_HOLD=YES`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`. **Do not** merge/deploy or use this private bank in browser runtime. After PASS, promote exact 22 items to canonical and independently restore SHA prior to A6 handoff, then proceed G11 Chapter V.

**Owner rule:** all SGK G10→G11→G12 chapters are authored/reviewed whole and immutable before release handoff. No Topic authoring now.

**Final pre-review author QA note:** RD1-04 original candidate solution was revised to use only Thales/elementary similarity instead of an advanced Menelaus shortcut, with the same mathematically derived conclusion. This correction occurred BEFORE independent NotebookLM submission; it is part of the final locked private R01 snapshot. Earlier private MD/PDF aliases are superseded, their files do not authorize a different candidate snapshot. Full final private MD+PDF Library read-back SHA256 PASS 2/2; original public source unchanged at blob `f376c37dc4b98fe229f3151357da1d2701cab15e`.
