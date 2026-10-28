# CHECKPOINT v1.1 · 2026-10-28 · Toán 10 KNTT ChVII–VIII · P07 accepted, D5 visual review pack ready

**Workstream:** content authoring only, isolated branch `content/thpt-g10-chvii-chviii-authoring-20261028` originally forked from Draft PR #612. Never merge/deploy or edit Chapter VI integration / Golden UI R4 / production scoring on this branch.

## Latest owner-supplied reviewer result (new)

```text
PACKET_ID|THPT-G10-CHVII-VIII-D3D4-63-R01-P07-DELTA-20261028
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_B25|SGK_TOAN_10_TAP_2_KNTT,TRANG_72-79;SBT_TOAN_10_TAP_2_KNTT,TRANG_55-59
SOURCE_RECEIPT_B22|SGK_TOAN_10_TAP_2_KNTT,TRANG_47-56;SBT_TOAN_10_TAP_2_KNTT,TRANG_41-45
ITEM_THPT-G10-B25-P07|PASS
CONSTANT_TERM_CORE_GAP|CLOSED
B22_ELIP_CORE_STATUS|PASS_VIA_P01_W22
ID_RECONCILIATION|EXPECTED=1|REVIEWED=1|MISSING=0|UNEXPECTED=0|DUPLICATED=0
ACADEMIC_OVERALL_DELTA|PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

- Original **63** canonical practice/written items (ChVII 36, ChVIII 27) D3/D4 review `PASS_WITH_RECLASSIFICATION`. The original item snapshots are unchanged and not cloned. Item 64 `THPT-G10-B25-P07` is the new single canonical entry; its own D3/D4 delta now independently PASS.
- Outcome `G10-B25-CONSTANT_TERM` **Core practice GAP CLOSED** via P07, with `THPT-G10-B25-P02` still optional extension. Secondary `G10-B25-COEFFICIENT_SIGN` P07 mapping also accepted.
- `G10-B22-ELLIPSE_PARAMETERS` Core remains PASS via `THPT-G10-B22-P01` and `THPT-G10-CHVII-W22-01` without `B22-C01` Core. Reviewer optional P2 about adding a pure ellipse-reading Core Entry item is NOT required for current outcome closure; any new content needs new canonical ID and Delta_C review.
- Four preserved curriculum-layer flags (reviewer scope, **not verified runtime enum constants**): `B22-C01=ELECTIVE_SPECIALIZED`; `B25-P02=SUPPORT_EXTENSION`; `B25-P05=SUPPORT_EXTENSION`; `B25-P06=ELECTIVE_SPECIALIZED`.
- Canonical outcome matrix **v0.4** `prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.4.md` has 35/35 exact outcome IDs and 64 unique underlying item candidates. Original v0.2/v0.3 preserved as historical snapshots; new P07 item body remains in a *single* file `prototypes/thpt/shared-items/THPT_G10_CHVII_CHVIII_D3D4_R01_RECLASSIFICATION_AND_CONSTANT_TERM_DELTA_v0.3.md`.
- Academic clearance for release **NO**, no entire chapter Academic PASS by authoring workstream.

## D5 visual audit handoff READY — reviewer verdict PENDING

**Local real NotebookLM Markdown handoff:** `Temp_THPT_G10_CHVII_CHVIII_D5_FOUR_SVG_REVIEW_20261028.md` (not committed; temporary). This source contains **four complete original SVG XML snapshot blocks**, their GitHub blob SHA, linked canonical item, mathematical claim, printed S1 page range and known pre-review concern. Each original file's bytes were independently reconstructed and **SHA-1 verified to match the original GitHub blob hash exactly**. Each parses as valid XML and carries `title` and `desc`. This is **preflight source fidelity**, **NOT D5 Academic PASS or mobile QA**.

| File | Item | Risk to review |
|---|---|---|
| `visuals/THPT_G10_B19_LINE_INTERSECTION_DRAFT.svg` | B19-P06 | Plots d1,d2 and intersection correctly as an illustration, BUT does not illustrate perpendicular d3 required in the full P06 solution |
| `visuals/THPT_G10_B21_CIRCLE_TANGENT_DRAFT.svg` | B21-P03 | Check geometry of circle/tangent and orthogonality/labels |
| `visuals/THPT_G10_B22_PARABOLA_FOCUS_DIRECTRIX_DRAFT.svg` | B22-P06 | Verify coordinates, symmetry, directrix, MF=distance-to-directrix, label placement |
| `visuals/THPT_G10_B23_COUNTING_TREE_DRAFT.svg` | B23-C02 | Verify exactly six non-duplicate outcomes, responsive small text/tree |

**Renderer preflight finding:** local SVG render via CairoSVG displayed Unicode minus `−` as a **missing-glyph square** in some labels in the B19/B21/B22 diagrams. This is a **potential font fallback / cross-device visual issue**; do not assert it occurs in browsers without real device tests, and do not self-assign D5 verdict. Request reviewer P2 and D6 mobile/browser QA; do not silently modify SVGs or Golden UI R4.

**Expected reviewer packet:** `THPT-G10-CHVII-VIII-D5-FOUR-SVG-BATCH-20261028-R0`, expected figures 4 reviewed 4, per-figure PASS/HOLD/FAIL, S1 receipts, mathematical correctness, incomplete-scope risk, accessibility, labels/ticks, P0/P1/P2, minimal delta. Use 5 current Permanent THPT v2.0 only. Reviewer may mark mobile rendering status HOLD where unavailable.

## Unchanged remaining gates

- D1/D2 B19–B25 scoped PASS for 7 lessons; D3/D4 64 unique existing P/W items now covered by historic R01 + one scoped P07 delta. Not full D1–D6.
- ChVII 8/8 and ChVIII 6/6 independently reviewed eligible chapter-end Readiness *candidate* slots, but 0 active server-side secure slots; RD02 retired and never reissued, ChVIII RD05/RD06 optional extension, RD07/RD08 replacement snapshots independently PASS.
- Topic 10–12 still requires its own complete Knowledge/Practice/Topic Readiness path: NO Topic Core page; same canonical item reused as SGK Core and Topic basic Practice by mapping only; exposure-controlled readiness. SGK chapter-end Readiness distinct from Topic Readiness.
- Golden UI R4 / 1/2-level Knowledge tabs untouched. D6 browser scoring, Final Submit and security unverified; no auto merge/deploy, student mastery/credit, or whole chapter academic PASS.

```text
D1_D2=SCOPED_PASS
D3_D4_ORIGINAL_63=PASS_WITH_RECLASSIFICATION
D3_D4_NEW_P07=PASS_DELTA
D3_D4_UNIQUE_ITEMS=64
CANONICAL_OUTCOMES=35
B25_CONSTANT_TERM_CORE_GAP=CLOSED
B22_ELLIPSE_CORE=PASS_VIA_P01_W22
SGK_CHAPTER_READINESS_REVIEW_CANDIDATES=14_OF_14
SGK_CHAPTER_READINESS_ACTIVATED=0
D5_FOUR_SVG=PACKET_READY_VERDICT_PENDING
D6=NOT_QA
ACADEMIC_CLEARANCE_FOR_RELEASE=NO
MERGE_DEPLOY=NO
```
