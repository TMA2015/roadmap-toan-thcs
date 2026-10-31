# ChV B12 FIG-G10-B12-01 — independent academic correction R02 PASS receipt

**Source:** owner-supplied NotebookLM verdict on 31/10/2026. **FIG ONLY**; not a complete-ChV verdict, release or Mastery permission.

## Source identity and exact correction

- PACKET_ID: `THPT-G10-CHV-B12-FIG01-D5-SYMBOL-BOUND-CORRECTION-DELTA-C-R01-20261031`.
- LESSON_ID `G10-B12`, FIG_ID `FIG-G10-B12-01`, D5 error-bound interval SVG.
- Authoritative source/unchanged R01 parent: `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7`, §7 FIG01.
- Retrieved original `Temp_THPT_G10_CHV_B12_FIG01_D5_MATH_CORRECTION_DELTA_C_R01_20261031.md` from private Library (7,494 bytes, SHA256 `3db807eb7dbc6a0105776561e576f192a72825c4f822d60319558914293479bb`); contains full original and proposed R02 XML. Owner's reviewer report names an `_R01_2.md` upload alias, **whose exact full bytes have not been independently retrieved here**. Do not invent byte-level equivalence between those two Temp filenames.
- Frozen reviewed-effective SVG: `prototypes/thpt/content-drafts/THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg`, Git blob `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52`, standalone UTF-8 file SHA256 `d714f63073428b9f6efe17095eb9ee4ab374fdbe0043133f000c9a6bdf0384bc` (1,767 bytes, trailing newline).
- Compared original R01 XML against the new exact SVG **element by element** (17 nodes): precisely **three text-content changes only** (accessible `<desc>`, formula `y=93`, label `y=374`), with zero geometry/style/coordinate/node changes; accessible `title` unchanged.
- R02 formula now assigns approximate `a=20,0 cm`, measurement accuracy `d=0,1 cm`, possible true-value interval `19,9 ≤ ā ≤ 20,1 cm`; interval center `20,0`, endpoints `19,9/20,1`, shaded zone and bottom `ā` match. Correct derivation `|a−ā|≤d ⟺ a−d≤ā≤a+d`. Do **not** infer `Δ_a=d`.
- Standalone SVG XML parser PASS, raster render 920×445 PASS, visual check PASS for macron and axis placements. This is author source/raster QA; cross-device Safari/Android SVG UAT remains release-lane work.

## Reviewer verdict (scoped)

```text
PACKET_ID|THPT-G10-CHV-B12-FIG01-D5-SYMBOL-BOUND-CORRECTION-DELTA-C-R01-20261031
FIG_ID|FIG-G10-B12-01
FIG_ID_RECONCILIATION|EXPECTED=1|REVIEWED=1|MISSING=0|EXTRA=0
MATH_FORMULA_VERDICT|PASS
SVG_ACCESSIBILITY_VERDICT|PASS
VISUAL_COHERENCE|PASS
NO_SIDE_EFFECTS|PASS
P0|0
P1|0
P2|0
DELTA_CLASS|DELTA_C_ACADEMIC_MATERIAL
MINIMAL_DELTA|REPLACE_ONLY_FIG01_SVG_XML_CODE
ACADEMIC_CLEARANCE_FOR_THIS_FIGURE|YES
ACADEMIC_CHV_OVERALL|NOT_EXTENDED
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
```

**S1 source receipt:** SGK Toán 10 KNTT Tập 1 Bài 12 pp73–77, esp pp74–75; SBT Tập 1 B12 pp72–73; five THPT Permanent Sources v2.0.

## Integration handoff and no-regression contract

- **Only** replace FIG01 R01 XML with the complete Git-pinned R02 standalone SVG above. Keep `FIG-G10-B12-01` unchanged as the single canonical figure resource; don't clone SVGs or re-label ID. Do not directly edit original frozen academic R01 snapshot.
- All 27 original public formative/Written candidate contents, 14 outcomes, `FIG02`, `FIG03`, and reviewed `HELP-G10-B12-01@R02` plus `HELP-G10-B12-02@R02` remain unchanged; no Chapter/Topic Readiness material or key is put in frontend.
- Authoring FIG01 academic correction **closed**. Integration of the corrected B12 learner page and exact source parity, R1–R5, AP/Golden UI, SVG physical-device QA and owner merge/deploy are release lane (currently Draft PR #671 ships only B13/B14 and holds B12). **Do not claim B12 already released**.

**Checkpoint:** `FIG01_R02_ACADEMIC_PASS=YES`, `FIG01_SVG_SOURCE_LOCKED=YES`, `FULL_CHV_PUBLIC_RELEASE=NO`, `MASTERy=OFF`.