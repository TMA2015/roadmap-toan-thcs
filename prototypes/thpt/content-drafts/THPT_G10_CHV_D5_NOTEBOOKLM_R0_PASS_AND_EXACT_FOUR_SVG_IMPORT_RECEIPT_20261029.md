# Toán 10 KNTT Chương V · NotebookLM D5 R0 PASS and exact four-SVG import receipt · 2026-10-29

**Independent NotebookLM verdict provided by owner**, exact packet `THPT-G10-CHV-D5_STATS_FOUR_FIGS-20261029-R0` covering only four original statistical diagrams, source SVG code and actual PNG renders. Original reviewer attachment: `Văn bản đã dán (1)(20261029-103502).txt`. SGK/SBT Toán 10 KNTT Tập 1 S1 pages and five permanent THPT v2.0 sources. **No independent full-Chapter-V synthesis verdict nor permission for website merge/deploy or learner Mastery is given by this D5 PASS.**

```text
PACKET_ID|THPT-G10-CHV-D5_STATS_FOUR_FIGS-20261029-R0
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G10_SGK|SGK_TOAN_10_TAP_1_KNTT,TRANG_73-90
SOURCE_RECEIPT_G10_SBT|SBT_TOAN_10_TAP_1_KNTT,TRANG_69-88
PREVIOUS_VERDICTS_PRESERVED|G10_CHIV_ALL_READINESS_D1D5_PASS;G10_CHV_B12_B14_D1D4_PASS;G10_CHV_PRIVATE_READINESS_17ITEMS_PASS
SVG_REGISTER|EXPECTED=4|REVIEWED=4|MISSING=0|UNEXPECTED=0|DUPLICATED=0
FIG01_APPROX_ERROR_INTERVAL_MATH|PASS
FIG02_ORDERED_QUARTILES_MATH|PASS
FIG03_IQR_OUTLIER_BOX_MATH|PASS
FIG04_VARIANCE_SAMPLES_MATH|PASS
READABILITY_AND_CONTRAST|PASS
SOURCE_RENDER_FIDELITY|PASS
P0_ERRORS|0
P1_WARNINGS|0
P2_NOTICES|2
MINIMAL_DELTA|REGISTER_4_APPROVED_SVG_SOURCES_FOR_CHAPTER_V;MAINTAIN_SVG_TITLE_DESC_ACCESSIBILITY
ACADEMIC_OVERALL_G10_CHV_D5|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

## Independent exact-source import into academic visual library

The original user-to-NotebookLM archive **was actually checked in local runtime**, both names `Temp_THPT_G10_CHV_D5_4FIG_9FILES_NOTEBOOKLM_20261029.zip` and `Temp_G10_Chuong_V_D5_NotebookLM_REUPLOAD.zip` were byte-identical, size **224,568 bytes**, SHA256 `09ea858dcff4c312b428b82e0d5ed6943f96e4844197f9abb97a55103ed45085`. ZIP CRC PASSED, all 9 `Temp_` files were present. Exact original four standalone SVGs are embedded as unmodified code in the four Markdown sources (matching when trimming fenced-code formatting); 4 separate PNG and one review dossier were included.

| Figure ID | Approved exact original SVG now at `prototypes/thpt/visuals/` on academic branch | Original SHA256 | Git blob SHA1 verified after readback |
|---|---|---|---|
| `FIG01_APPROX_ERROR_INTERVAL` | `THPT_G10_CHV_D5_FIG01_APPROX_ERROR_INTERVAL_R0.svg` | `938b9a82f9ba47219e3fd1aabc71662c3387640ef1c38f9612a8a5bedfb16def` | `0d9586b469f96452efdd3c2394095e40a9074854` |
| `FIG02_ORDERED_QUARTILES` | `THPT_G10_CHV_D5_FIG02_ORDERED_QUARTILES_R0.svg` | `f30cc6b915256814b98074bbb565ad4af86f4ec9295897887297e53fe3e5e6a9` | `b18b15e1e0a1e466e48b9e4fc143553c7c5b8258` |
| `FIG03_IQR_OUTLIER_BOX` | `THPT_G10_CHV_D5_FIG03_IQR_OUTLIER_BOX_R0.svg` | `3012f67899c99af03400d7fcdc0ab281a8577e5d6bcf5e3190c7eb14629580f5` | `c7c1720e2afdc349b47ca4e54f002e7eb826ef70` |
| `FIG04_VARIANCE_SAMPLES` | `THPT_G10_CHV_D5_FIG04_VARIANCE_SAMPLES_R0.svg` | `7a2fd2e3ea4a726827b9e6027bf5fb919f6cad12a469037438f493eb599084cc` | `e1c5e8c4891f02ce6416a005c65adba0d0fb9866` |

The **four GitHub Git blob hashes each exactly match** the known original local `git hash-object` fingerprints and fetched content from GitHub equals the submitted original SVG text. Each XML parses and contains actual SVG `<title id="svgTitle">` and `<desc id="svgDesc">` accessibility nodes. No math/source changes occurred, so reviewer PASS is preserved on the original snapshot and no new academic DELTA_C is introduced by import.

### Scientific values verified by NotebookLM

- B12 FIG01: `a=12.4 cm`, `d=0.3 cm`, true-value interval `[12.1,12.7] cm`, upper relative error about `2.42%`. Distinguish error bound from measured actual error.
- B13 FIG02: sorted sample `1,3,4,6,8,10,12`, median `Q2=6` excluded for odd `n=7`, `Q1=3, Q3=10, IQR=7`, mean `44/7`.
- B14 FIG03: sample `2,3,4,5,7,8,9,12,23`; `Q1=3.5, Q2=7, Q3=10.5`, IQR=7, fences `-7` and `21`, `23` genuine outlier.
- B14 FIG04: samples A `3,5,7,9`, B `0,4,8,12`, same mean 6, variance with divisor `n=4` A `5`, B `20`; standard deviations about 2.24 and 4.47.

**Reviewer P2:** preserve accessible SVG `<title>` and `<desc>` and preserve exact original SVG source. Notes do not impose a substantive mathematical correction.

## Cross-component status and release gates

- Independent **ChV B12–B14 D1/D2 PASS**: 13 Knowledge modules, 17 worked examples, 17 outcomes.
- Independent **ChV B12–B14 D3/D4 PASS 27/27** canonical taught exercises: 9 SGK Core, 15 Practice/Application, 3 Written.
- Independent **PRIVATE Chapter V SGK_CHAPTER_READINESS PASS 17/17**, nonclone PASS, full 17-outcome coverage; **RUNTIME_ACTIVE=0**, private questions/keys/rubrics NOT in GitHub. Reviewer full answer table not imported.
- Independent **ChV D5 PASS 4/4** SVG and render fidelity, original SVG imported. This establishes **all documented ChV academic components individually PASS**, but no single external `ACADEMIC_OVERALL_G10_CHV_FULL=PASS` review has been issued. D6 website/browser, source-to-page parity and release QA remain untested for this new content.
- Owner's current binding architecture for Math: **single GitHub-static site, existing Gemini transport, NO new student accounts, Firebase Auth, Cloudflare Worker/D1 or backend**. A NotebookLM recommendation for server-side protected Readiness does not authorize an architectural change. Client-side Final Submit may suppress hints/feedback until submit but cannot claim absolute confidentiality or verified mastery; do not publish protected heldouts into public GitHub without owner-approved assessment redesign.
- SGK path and vertical Topic path must each be independently complete. Topic menu precisely **Kiến thức / Luyện tập / Tự kiểm tra**, no Topic Core. Reuse legitimate teaching item IDs by `placement`, not duplicated questions or graded independent evidence. Golden UI R4 and THCS site remain unchanged in this academic authoring branch.

```text
G10_CHV_D1_D2|SCOPED_NOTEBOOKLM_PASS
G10_CHV_D3_D4_27|SCOPED_NOTEBOOKLM_PASS
G10_CHV_PRIVATE_CHAPTER_READINESS_17|SCOPED_NOTEBOOKLM_PASS_NOT_ACTIVE
G10_CHV_D5_4_SVG|SCOPED_NOTEBOOKLM_PASS_EXACT_IMPORTED
G10_CHV_WHOLE_CHAPTER_EXTERNAL_SYNTHESIS|NOT_ISSUED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
