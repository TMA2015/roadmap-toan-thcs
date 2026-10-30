# G10 Chương V B12–B14 · D1–D6 R01 · academic authoring checkpoint

**PACKET_ID:** `THPT-G10-CHV-B12-B14-D1D6-AUTHORING-20261030-R01`  
**STATUS:** `ACADEMIC_PARTIAL / NOTEBOOKLM_NOT_REVIEWED` · **LEARNING_PATH:** SGK_CHAPTER · **RELEASE_SCOPE:** PUBLIC_FORMATIVE_ONLY · **R1–R5:** NOT_STARTED.

## Hoàn thành (authoring)

- Đối chiếu trực tiếp nguồn S1 bản scan: SGK Toán 10 KNTT tập 1 B12 pp.73–77, B13 pp.78–83, B14 pp.84–88, bài tập cuối chương pp.89–90; SBT B12 pp.72–73, B13 pp.74–77, B14 pp.78–80, bài tập cuối chương pp.81–84.
- Snapshot được giao thực tế: `Temp_THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01.md`, **44.126 bytes / 615 lines**, SHA256 `77a189bb1aa199f3b81b8915903f85bae6659729849251ad92fa092761fd850c`. Git mirror đúng nguyên byte tại `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7`.
- D1: 3 SGK lessons, 14 proposed outcomes; D2: 9 worked examples; D3: 24 unique formative (6 Core, 18 Practice), all item stems/options where relevant, keys, public hints and worked solutions; D4: 3 Written, 1 Anchor-tag on Written, 3 rubrics each 7 points; D5: 3 actual SVG sources (also fully embedded as XML in Temp); D6: 6 five-step remediation cards with existing item_id links.
- Source-locked figures: `THPT_G10_B12_ERROR_INTERVAL_D5_R01.svg` blob `0cdc5c7354a7d82c9747a2db90fedbf4ec7d4a5e`, `THPT_G10_B13_QUARTILES_D5_R01.svg` blob `acaf49296892e35c48fb2b4a5b335a7d26643336`, `THPT_G10_B14_DISPERSION_D5_R01.svg` blob `98ab8375e496468e8f7fbc79f6cacc03d08a4645`. 3/3 XML parse and CairoSVG PNG render, visually inspected. No real-device/web QA claimed.
- Canonical *reference-only* register: `prototypes/thpt/shared-items/THPT_G10_CHV_B12_B14_CANONICAL_ID_REGISTER_R01.md`, Git blob `c5c33643021ca5ff5b7d7a226d30fe032591f830`. 27 IDs unique within snapshot, 14 outcomes and 6 HELPs; no production runtime bank registration or global collision proof.
- **Important S1 fix done BEFORE R01 freeze:** KNTT denotes `a` as near value and `a_bar` as actual/true; relative error `delta=Delta/abs(a)` uses the **near value** denominator. Original preflight had swapped labels and used true-value denominators. New R01 D1, B12-P01/P03, Written W12 and HELP now match actual SGK/SBT. This is NEW DELTA_C academic source and **requires NotebookLM review**. No reviewer PASS imported from any other chapter.

## Author QA (not NotebookLM)
- **28/28 scripted checks PASS**: arithmetic, percent, quartiles, variance, outliers, rubric/role/ID metadata, XML and figure coordinates.
- Six MCQ have explicit single choice and key-letter metadata; 18 other formative have exact short-answer or explanation keys.
- No private held-out readiness stems/answers; no score or Mastery writes.
- Approval cannot be inferred from author QA or source preflight, even though full D1–D6 draft is ready for independent review.

## Gates / next

- [x] A1_SOURCE_SNAPSHOT — original byte-exact Temp and SVG source locked.
- [x] A2_SGK_SBT_SCOPE — author direct scans; independent source verification pending.
- [ ] A3_NOTEBOOKLM_VERDICT — not received.
- [x] A4_ITEM_OUTCOME_IDS — 27 local unique candidate IDs + 14 outcomes.
- [ ] A5_D1_D6_SCOPE — full candidate, reviewer validation pending.
- [ ] A6_DELTA_RESOLVED — new material review findings pending.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — public formative only; no held-out assessment or Mastery.

**NEXT:** send real Temp markdown + short prompt to NotebookLM, receive D1–D6 verdict by lesson/outcome/item/figure/help. Resolve P0/P1/material deltas and only then consider authoring `CONTENT_READY`; R1–R5 belong to separate release lane, no merge/deploy.
