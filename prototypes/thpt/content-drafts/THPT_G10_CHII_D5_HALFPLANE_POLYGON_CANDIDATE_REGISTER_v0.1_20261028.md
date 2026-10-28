# SGK G10 ChII B03–B04 · D5 authentic visual candidate register v0.1 · 2026-10-28

**Status:** `D5_GRAPHICS_2_NEW_UNREVIEWED`. This is a **metadata-only public review register**; actual SVG authoring source and PNGs are bundled for NotebookLM, not imported into `prototypes/thpt/visuals/` before its independent academic verdict.

```text
PACKET_ID|THPT-G10-CHII-D5_HALFPLANE_POLYGON_SVG-20261028-R0
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G10_SGK|SGK_TOAN_10_TAP_1_KNTT,TRANG_22-32
SOURCE_RECEIPT_G10_SBT|SBT_TOAN_10_TAP_1_KNTT,TRANG_16-24
D5_SVG_CANDIDATES|2
D5_PNG_RENDERED_PREVIEWS|2
D5_REVIEW_MD|1
D5_EXTERNAL_VERDICT|NOT_YET
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

## Exact local source and review transport

| Figure | Full editable SVG source is embedded in NotebookLM-supported MD file | Rendered PNG preview | SHA256 of actual SVG source |
|---|---|---|---|
| `FIG-CHII-01` B03 halfplanes, inclusivity | `Temp_THPT_G10_CHII_D5_B03_HALFPLANE_BOUNDARIES_20261028_SVG_SOURCE.md` | `Temp_THPT_G10_CHII_D5_B03_HALFPLANE_BOUNDARIES_20261028.png` | `f5b9e902bbcd76b3d90e1c35f40674f789018e3e88ca4165fa351aac84c64b57` |
| `FIG-CHII-02` B04 feasible polygons, extrema | `Temp_THPT_G10_CHII_D5_B04_FEASIBLE_POLYGONS_20261028_SVG_SOURCE.md` | `Temp_THPT_G10_CHII_D5_B04_FEASIBLE_POLYGONS_20261028.png` | `80989f0bee488f87ebd2e98c0e1644f80333e9e39e148e9355d83da1b1ac39e4` |

**Review dossier Markdown:** `Temp_THPT_G10_CHII_D5_HALFPLANE_POLYGON_ACADEMIC_REVIEW_20261028.md`.

**Real five-file compressed owner-to-NotebookLM transfer:** `Temp_THPT_G10_CHII_D5_HALFPLANE_POLYGON_5FILES_NOTEBOOKLM_20261028.zip` — **236872 bytes**, SHA-256 `93044593947fe24ea7b2af4518c5a4f7073bb8c5510eaa920b0cb48e8c61f49b`. **UNZIP and upload all five supported files: 3 .md and 2 .png.** Raw `.svg` is **NOT** NotebookLM supported; the Markdown embeds the actual complete SVG code. These five files are NOT the existing Permanent Sources and do NOT contain held-out Chapter Readiness stems/keys/rubrics.

## Reviewer target geometry (candidate internal-only preflight)

- `FIG-CHII-01`: side-by-side graphs `2x−y≤3` (solid included boundary) and `2x−y<3` (dashed excluded boundary), both with O in the shaded solution region; `x+2y>0` (dashed boundary **through O**, O not a valid test point) with T(0,1) interior. Full solution regions are unbounded; green tint clipped to graph viewport. Distinguish a **filled test point** from an excluded boundary point (hollow circle). First panel explicitly prints `0≤3`, second prints `0<3`.
- `FIG-CHII-02`: closed triangular feasible region for `x≥0,y≥0,x+2y≤8`, vertices O(0,0),A(8,0),B(0,4). Closed quadrilateral for `x≥0,y≥0,2x+y≤6,x+y≤4`, vertices O(0,0),A(3,0),B(2,2),C(0,4). Filled vertex markers indicate included boundary. Linear objective `G=x+3y` reaches max 12 at C(0,4) on the **closed, bounded** polygon.
- Both SVGs include `<title>` and `<desc>`, and were actually rendered via CairoSVG at 1.5×. Original image previews were inspected locally. Candidate internal graph QA does **not** replace NotebookLM independent visual academic PASS.

## Scope and next gates

Previous independent verdicts preserved: B03/B04 D1D2 PASS, six worked D2 examples/11 outcomes; D3D4 18/18 PASS, six Core; separately held-out **SGK_CHAPTER_READINESS 10/10 PASS** in latest NotebookLM R0. Note `THPT-G10-B04-P04` stays `SUPPORT_EXTENSION`, and RD10 conceptual unbounded-region challenge was accepted by reviewer; neither is a new D5 review result.

Do not import D5 SVG to official academic asset directory or claim entire ChII PASS before independent reviewer verifies both. This workstream neither registers protected server keys nor changes website Golden UI R4, D6, PR merge/deploy or learner mastery. Two independent pathways remain: SGK Knowledge/Core/Practice and **chapter-end** Readiness; Topic has exactly 3 sections Knowledge/Practice/Topic Readiness and no Topic Core, shared canonical ID/key/history via mapping only.

```text
G10_CHII_D1D2|NOTEBOOKLM_PASS
G10_CHII_D3D4|NOTEBOOKLM_PASS_18_OF_18
G10_CHII_PRIVATE_SGK_CHAPTER_READINESS|NOTEBOOKLM_PASS_10_OF_10_NOT_ACTIVE
G10_CHII_D5|TWO_SVG_REVIEW_READY_NOT_PASS
G10_CHII_WHOLE_CHAPTER|NOT_YET_PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
