# G10 Chapter V D5 — 4 original statistical SVG review candidate register · 2026-10-29

**PACKET_ID:** `THPT-G10-CHV-D5_STATS_FOUR_FIGS-20261029-R0`. `D5_STATUS=AUTHOR_PREFLIGHT_PASS_NOTEBOOKLM_PENDING`; no independent PASS or official approved SVG source import. Actual generated SVGs and PNG renders are **review-source candidates only** and not yet added to `prototypes/thpt/visuals` for released learning pages.

## Relevant independent reviewer outcomes

- ChV B12–B14 D1/D2 reviewed PASS: 13 knowledge modules, 17 worked examples, 17 canonical outcomes.
- ChV B12–B14 D3/D4 reviewed PASS: 27 distinct canonical teaching items, 9 Core, 15 Practice/Application, 3 Written.
- ChV PRIVATE `SGK_CHAPTER_READINESS`: **17/17 PASS** from actual `THPT-G10-CHV-SGK-CHAPTER-READINESS-17-HELDOUT-20261029-R0`; heldout nonclone PASS and 17/17 outcome coverage, 0 active; academic receipt `THPT_G10_CHV_PRIVATE_READINESS_17_NOTEBOOKLM_R0_PASS_RECEIPT_20261029.md`. Do not expose those confidential questions, answers or rubrics in D5 assets or public code.
- SGK Toán 10 KNTT Tập 1 ChV S1 pp.73–90; SBT KNTT Tập 1 pp.69–88; five THPT Permanent Sources v2.0 only.

## Candidate figures (full source and render are in actual Temp review ZIP, not on GitHub)

| Fig candidate ID | Lesson and facts shown | SVG source SHA-256 | Academic status |
|---|---|---|---|
| `FIG01_APPROX_ERROR_INTERVAL` | B12: a=12.4 cm d=0.3 cm, [12.1;12.7] cm, d/|a|≈2.42% | `938b9a82f9ba47219e3fd1aabc71662c3387640ef1c38f9612a8a5bedfb16def` | `PENDING_NOTEBOOKLM_R0` |
| `FIG02_ORDERED_QUARTILES` | B13: [1,3,4,6,8,10,12], n7, Q1=3, Q2=6, Q3=10, mean 44/7 | `f30cc6b915256814b98074bbb565ad4af86f4ec9295897887297e53fe3e5e6a9` | `PENDING_NOTEBOOKLM_R0` |
| `FIG03_IQR_OUTLIER_BOX` | B14: [2,3,4,5,7,8,9,12,23], Q1=3.5 Q2=7 Q3=10.5, 1.5IQR fences -7 and 21, 23 outlier | `3012f67899c99af03400d7fcdc0ab281a8577e5d6bcf5e3190c7eb14629580f5` | `PENDING_NOTEBOOKLM_R0` |
| `FIG04_VARIANCE_SAMPLES` | B14: same mean6, A=[3,5,7,9] variance5, B=[0,4,8,12] variance20, standard deviations sqrt5 and sqrt20 | `7a2fd2e3ea4a726827b9e6027bf5fb919f6cad12a469037438f493eb599084cc` | `PENDING_NOTEBOOKLM_R0` |

```text
REVIEW_PACKAGE|Temp_THPT_G10_CHV_D5_4FIG_9FILES_NOTEBOOKLM_20261029.zip
ZIP_SIZE_BYTES|224568
ZIP_SHA256|09ea858dcff4c312b428b82e0d5ed6943f96e4844197f9abb97a55103ed45085
EMBEDDED_ORIGINAL_SVG_SOURCE_MD|4
ACTUAL_PNG_RENDERS|4
ACCOMPANYING_ACADEMIC_DOSSIER_MD|1
TOTAL_TEMP_FILES|9
SVG_ROOT_TITLE_DESC_QA|4_OF_4_PASS
PNG_DIMENSIONS|1240x760_EACH
ZIP_CRC|PASS
MATH_AUTHOR_PREFLIGHT|PASS_NOT_INDEPENDENT
ACADEMIC_OVERALL_G10_CHV_D5|PENDING_NOTEBOOKLM
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

The 9 files in the ZIP all begin `Temp_`. **Unzip and import each of 9 supported `.md`/PNG source files individually**; the ZIP itself is not assumed readable in NotebookLM. Each `Temp_*SVG_SOURCE.md` contains complete source code with code-fence and original source SHA, the corresponding PNG is generated from that exact SVG using CairoSVG. A separate dossier provides actual S1, mathematical facts, expected IDs, reviewer checklists and output verdict. This follows `06_NOTEBOOKLM_REVIEW_HANDOFF_PROTOCOL_v1.0.md`. The 4 figures are new `DELTA_C_ACADEMIC_MATERIAL`; internal QA **does not** grant NotebookLM D5 PASS.

**Architecture owner ruling:** this Math website is STATIC GitHub with existing Gemini transport, **NO new student accounts, Firebase Auth, Cloudflare Worker, D1 or new backend**, per owner correction `prototypes/thpt/THPT_OWNER_CORRECTION_NO_STUDENT_ACCOUNTS_20261028.md` on `main`. Independent NotebookLM report suggesting a server for Readiness is NOT owner approval to implement one. Protected Readiness is unactivated. Do not copy private question data or reviewer table into public GitHub, and never claim a static browser can offer absolute key secrecy. No assessment runtime/Mastery work, no Golden R4 or THCS modifications, no PR merge/deploy without owner approval.
