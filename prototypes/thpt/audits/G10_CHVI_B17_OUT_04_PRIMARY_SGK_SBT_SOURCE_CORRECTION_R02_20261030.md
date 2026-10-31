# B17_OUT_04 · Direct S1 SGK/SBT correction for Core tier (R02, 2026-10-30)

**AUDIT:** `DELTA_B_SOURCE_EQUIVALENT` for citation, plus proposed `DELTA_C_ACADEMIC_MATERIAL` for the student-facing tier note (requires independent review). The existing 29-ID verdict remains archived unchanged, and no protected test item or student state is changed.

## Direct original-book primary-source receipt

- **SGK Toán 10 KNTT Tập 2**, owner Drive `1v28SYkWsnxg9qUmn-JEmYaEDcCdZWJgf`, 102-page scan SHA256 `ee8a00392e1c9fc5b213e574666cf1f8487548737e138573f28a988c640fafe6`. All printed B17 pp19–24 (PDF pp20–25, 1-based) were visually inspected. **SGK p23 Ví dụ 3** is a garden-fencing example with **fixed coefficients** and no parameter m (`2x²−20x+48≤0`): the earlier NotebookLM citation **as parameter evidence is wrong**. **SGK p24 Bài tập 6.17** explicitly asks to find m making `x²+(m+1)x+2m+3>0` for all real x, where leading coefficient **a=1 is fixed nonzero**.
- **SBT Toán 10 KNTT Tập 2**, owner Drive `1Ca0XQ7KGuZWViVg2LOru3CoQ1UsFpd4P`, 143-page scan SHA256 `3cb33690e0627b9e8ac467c23625b7feb7d05a8422293db0e1b26e44ca6a78c7`. All printed B17 pp16–18 (PDF pp17–19) were visually inspected. **SBT p17 Ví dụ 3** asks for m to make `x²+2(m−2)x+2m−1≥0` for all real x, leading a=1; **SBT p18 Bài 6.24** includes fixed nonzero leading coefficients a=−1 and a=1 in two parts, both with universal sign requirements.
- Original textbook PDFs and scanned pages are **not committed to public GitHub**; this document only cites page numbers, brief mathematics, and exact source-file fingerprints.

## Reviewer and snapshot reconciliation

- The owner's current 29-ID ChVI/ChIX report repeats the **previously submitted** independent reviewer verdict, already archived as `G10_CHVI_CHIX_RD0_R01_OWNER_NOTEBOOKLM_SCOPE_PASS_RECEIPT_20261030.md` (original upload SHA256 `c66bfab96d0170de72b5dcf327375dc2e17656357d2e6b2c3d1e1c04ef907fc7`). It is **not** a new verdict for the separately requested 1-ID delta. The original ChVI RD0 R01 blueprint Git blob `2b7e04d8fd279879a44a41e1810a345feb8873ac` remains frozen.
- Its existing `B17_OUT_04=CORE_KEEP` with **fixed leading coefficient a≠0** is **supported by verified S1 SGK exercise 6.17 p24 and SBT p17–18**. Correct the citation `SGK p23 Ví dụ 3` -> `SGK p24 Bài tập 6.17`; retain the canonical outcome ID and original reviewer result. No new independent Academic PASS issued.
- The current student B17 page `docs/thpt-preview/sgk/chuong-vi/bai-17.md`, main Git blob `2511190850579c6d83d4e38476be880dd77e38a0`, already gives a correct parameter example with a=1, **but misleadingly labels all parameter inequalities non-Core**. This learner-facing tier note needs a targeted academic delta to avoid contradicting verified SGK p24.

## Smallest proposed learner-note delta (NOT applied to site)

Current: "Phần bất phương trình có tham số là nội dung luyện tập mở rộng, không phải kiến thức Core bắt buộc của SGK."

**Proposed:** "Tìm tham số để tam thức bậc hai luôn dương/không âm (hoặc luôn âm/không dương) với mọi số thực, khi hệ số bậc hai a cố định khác 0, thuộc phạm vi vận dụng Core của Bài 17 (SGK tr.24, bài 6.17; SBT tr.17 Ví dụ 3 và tr.18 bài 6.24). Nếu a phụ thuộc tham số và có thể bằng 0, cần xét thêm trường hợp biểu thức không còn là tam thức bậc hai; đó là dạng nâng cao, không phải Core bắt buộc." Reviewer should validate strict and nonstrict cases before adoption.

**R02 independent review handoff:** `Temp_G10_CHVI_B17_OUT04_D1_SCOPE_AND_S1_REFERENCE_DELTA_R02_20261030.md`, 6,365 bytes SHA256 `46cb139f5434b1198c0b7a3920dc8f0b878d98426968c0e7c9bff63a9203fb9d`. Review only one ID and student-tier wording; not a redo of 29 outcomes.

`B17_FIXED_A_CORE_S1_EVIDENCE=VISUALLY_VERIFIED` · `B17_R01_CORE_KEEP=UNCHANGED` · `SOURCE_CITATION_CORRECTION=DELTA_B` · `STUDENT_TIER_NOTE_CORRECTION=DELTA_C_REVIEW_PENDING` · `ASSESSMENT_ITEM_BANK=NOT_REVIEWED` · `NO_SCORE/NO_MASTERY` · `NO_MERGE_DEPLOY`.
## Reviewer disposition — one-outcome R02 PASS, implementation isolated

- New owner-provided NotebookLM verdict `THPT-G10-CHVI-B17_OUT_04-S1-REFERENCE-AND-D1-TIER-DELTA-R02-20261030` independently confirms all source pinpoints in this file, `B17_OUT_04=CORE_KEEP` with fixed `a≠0`, `D1_MINIMAL_REPLACEMENT_VERDICT=PASS`, `ACADEMIC_DELTA_VERDICT=PASS`, `EXPECTED=REVIEWED=1/1`, `P0=0/P1=0/P2=1`. The R01 29-ID original review remains preserved. The one note block now exists in separate [Draft PR #649](https://github.com/TMA2015/self-learning-math/pull/649), **not merged into `main`**. Its isolated academic change did not modify formulas, solutions or assessment items; the correct SGK reference is p24 Bài 6.17. The note is academic PASS only, **not** a release/Readiness/Mastery PASS.
