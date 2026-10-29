# THPT academic checkpoint 2026-10-29 v2.8 · G10 ChIV D1–D5 components PASS, B12–B13 new D1D2 authoring ready

**Owner roadmap:** Complete G10 ChI–V in SGK horizontal pathway, preserving prior G10 ChVI–IX scoped review work; then G11/G12. Academic-source-only workstream `TMA2015/self-learning-math`, branch `content/thpt-g10-chix-academic-authoring-20261028`. **No self-issued external global chapter PASS; no merge/deploy or Mastery.** Golden UI THPT R4, THCS, progress/browser storage/Firebase untouched.

## 1. Reviewer D5 verdict: actual four FIG sources approved and exact imported

```text
PACKET_ID|THPT-G10-CHIV-D5_VECTOR_FOUR_FIGS-20261029-R0
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G10_SGK|SGK_TOAN_10_TAP_1_KNTT,TRANG_46-72
SOURCE_RECEIPT_G10_SBT|SBT_TOAN_10_TAP_1_KNTT,TRANG_46-83
PREVIOUS_VERDICTS_PRESERVED|G10_CHIV_B07_B11_D1D2_PASS;G10_CHIV_B07_B11_D3D4_45ITEMS_PASS;G10_CHIV_PRIVATE_READINESS_23ITEMS_PASS
SVG_REGISTER|EXPECTED=4|REVIEWED=4|MISSING=0|UNEXPECTED=0|DUPLICATED=0
FIG_CHIV_01_DIRECTION_SCALAR_MATH|PASS
FIG_CHIV_02_ADDITION_RESULTANT_MATH|PASS
FIG_CHIV_03_COORDINATES_MIDPOINT_MATH|PASS
FIG_CHIV_04_DOT_PRODUCT_WORK_MATH|PASS
READABILITY_AND_CONTRAST|PASS
SOURCE_RENDER_FIDELITY|PASS
P0_ERRORS|0
P1_WARNINGS|0
P2_NOTICES|2
MINIMAL_DELTA|REGISTER_4_APPROVED_SVG_SOURCES_FOR_CHAPTER_IV;MAINTAIN_SVG_TITLE_DESC_ACCESSIBILITY
ACADEMIC_OVERALL_G10_CHIV_D5|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Official academic review receipt:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_D5_NOTEBOOKLM_R0_PASS_AND_FOUR_EXACT_SVG_IMPORT_RECEIPT_20261029.md`. Four exact original SVG assets now preserved with **verified Git blob hash readback** in `prototypes/thpt/visuals/`:
- `THPT_G10_CHIV_D5_FIG01_VECTOR_DIRECTION_SCALAR_R0.svg` blob `9f5a47d5cf9ee79709dc5dfa6d813fcf5fe6a584`, original SVG SHA256 `baa07565e6e94c9c64e0c9e92ad21ad62e05ed8585cdb6b71b19174a2738dc9a`.
- `THPT_G10_CHIV_D5_FIG02_VECTOR_ADDITION_RESULTANT_R0.svg` blob `441f2542fcd9072e650a2023cc3d4bf23c2d4b05`, SHA256 `e22dd4204d10221c61d65f06035ad3adeb496f8a6bd36ef1434208b1925f4a03`.
- `THPT_G10_CHIV_D5_FIG03_VECTOR_COORDINATES_R0.svg` blob `b852f5e79734585a05d1d4e3e6d7c7c599db0a75`, SHA256 `fa286d8b91f2b504be90058c9c93b9f96308f30271de2f34a5cb8f908a959f36`.
- `THPT_G10_CHIV_D5_FIG04_DOT_PRODUCT_ANGLE_R0.svg` blob `1dfee350db062f8e4bdd0e44066b0ba850039fe8`, SHA256 `b165edce47c198263113de7bd2a91b6769c4063da6c01658862e7e00454f0f3c`.

**Audit finding:** NotebookLM prose `III.1` makes one mistaken inference `AB=DC`; approved original FIG01 actual SVG visibly and textually gives **`AB=CD`**, correct for both arrows pointing right. This error is strictly in *reviewer narrative*, not educational SVG; original source not changed, no source academic delta or re-review necessary. Record text erratum, preserve original FIG01. Reviewer P2: preserve SVG `<title>` and `<desc>`; all four have both.

## 2. Scoped G10 ChIV academic components now separately PASS (not release)

| Scope | Independent academic result |
|---|---|
| D1 Theory B07–B11 | PASS 17 knowledge modules, 23 canonical outcomes |
| D2 Example B07–B11 | PASS 21 solved examples |
| D3/D4 B07–B11 | PASS **45/45** unique teaching Core/Practice/Written IDs (15 Core, 25 Practice including `B09-P05` optional SUPPORT_EXTENSION, 5 Written) |
| PRIVATE SGK Readiness end of ChIV | PASS **23/23**, heldout nonclone PASS, **NOT ACTIVE** |
| Genuine D5 | PASS **4/4** SVG+render fidelity; exact source imported |
| Whole-ChIV external synthesis | **NOT ISSUED** (do not self-award a nonexistent `ACADEMIC_OVERALL_G10_CHIV_FULL`) |
| Release/deploy/mastery | **NO** |

Earlier G10 ChI–III academic component results untouched. Two self-sufficient routes: SGK Knowledge/Core/Practice + end-Chapter `SGK_CHAPTER_READINESS`; Topic exactly 3 menu sections **Kiến thức/Luyện tập/Tự kiểm tra** (no Topic Core). Share one canonical teaching item by placement only, protected Readiness questions never published to GitHub/client or reused from seen practice. No hint, Tutor, correctness/answers/scores before Final Submit; no demo Mastery. Secure runtime integration outside this academic workstream.

## 3. Open G10 ChV — actual B12/B13 D1/D2 original NEW review candidate

**Official chapter name** `Chương V. Các số đặc trưng của mẫu số liệu không ghép nhóm`; three S2-indexed lessons B12 `Số gần đúng và sai số`, B13 `Các số đặc trưng đo xu thế trung tâm`, B14 `Các số đặc trưng đo độ phân tán`. Initial batch `B12–B13` for independent reviewer; `B14` separate following verdict.

```text
NEXT_PACKET_ID|THPT-G10-CHV-B12_B13-S1-D1D2-20261029-R0
B12|4_D1_KNOWLEDGE;5_D2_WORKED_EXAMPLES;5_CANDIDATE_OUTCOMES
B13|4_D1_KNOWLEDGE;5_D2_WORKED_EXAMPLES;5_CANDIDATE_OUTCOMES
TOTAL|8_D1;10_D2;10_OUTCOME_CANDIDATES
LOCAL_ARITHMETIC_QA|PASS_NOT_EXTERNAL
SGK_PAGE_HINT_S2_ONLY|B12_PP73-77;B13_PP78-83;B14_PP84-88;CHAPTER_END_PP89-90
SOURCE_RECEIPT_G10_SGK_S1|PENDING_NOTEBOOKLM_ORIGINAL
SOURCE_RECEIPT_G10_SBT_S1|PENDING_NOTEBOOKLM_ORIGINAL
ACADEMIC_OVERALL_G10_CHV_B12_B13_D1D2|NOT_REVIEWED
```

Full original `Temp_THPT_G10_CHV_B12_B13_S1_D1D2_REVIEW_20261029.md` 16,655 UTF8 bytes, SHA256 `b30bd5392af591f9f81722a2d7ed6f43d112d40c58d6d15849a90862cd7c7968`. GitHub exact original authoring source `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B13_S1_D1D2_KNOWLEDGE_AUTHORING_v0.1.md` Git blob `8fcacb06cc2c354358f875123cda8c3ad4ee8d17`, readback exact. **B12** number approximation, absolute/relative error, precision d, rounding and calculator reporting. **B13** mean/frequency, median even/odd, quartiles (exclude median for odd n, reviewer verify S1), modes, outlier sensitivity. 8 Knowledge + 10 genuine worked examples and 10 proposed outcome IDs. These source pages and scopes are **S2 preliminary indexed guidance only**; NotebookLM original SGK/SBT S1 must issue exact printed SOURCE_RECEIPT before academic PASS. Never invent SBT page numbers.

**Mandatory handoff**: one genuine `Temp_` Markdown file directly linked to owner **plus short 3–6 sentence NotebookLM prompt in same answer**, per file 06. Reviewer returns per B12/B13 lesson, KT, EX, outcome, P0/P1/P2, corrected S1 receipt and HOLD/DELTA where needed. Only after accepted B12/B13 draft B14 D1D2, then all 3 B12–B14 canonical Core/Practice/Written items, protected Chapter V Readiness, authentic D5 statistical graphics with independent reviews. No Chapter V assessment release.

```text
G10_CHIV_D1D5_AND_SGK_CHAPTER_READINESS|ALL_INDEPENDENT_SCOPED_COMPONENT_PASS
G10_CHIV_WHOLE_EXTERNAL_VERDICT|NOT_ISSUED
G10_CHV_B12_B13_D1D2|NEW_AUTHORED_REVIEW_PENDING
G10_CHV_B14_D1D2|NOT_AUTHORED
G10_CHV_D3D6|NOT_AUTHORED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
