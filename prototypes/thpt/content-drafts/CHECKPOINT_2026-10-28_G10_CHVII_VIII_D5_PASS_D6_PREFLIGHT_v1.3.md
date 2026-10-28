# Checkpoint v1.3 — 2026-10-28 — Toán 10 Chương VII–VIII

**Branch:** content/thpt-g10-chvii-chviii-authoring-20261028 (independent academic content work; PR #612 integration untouched).

## Academic results
- Source S1 outcome register: 35/35 reviewer-reconciled.
- D1–D2: seven lessons B19–B25 reviewed PASS within their snapshots.
- D3–D4: original 63 items PASS_WITH_RECLASSIFICATION; new B25-P07 separately PASS, total 64 distinct canonical IDs. B25 constant-term Core gap CLOSED. B22 ellipse Core PASS using B22-P01 and W22-01.
- SGK Chapter Readiness: 14/14 academically reviewed candidates, 0 active in production. ChVII-RD02 remains retired, and ChVIII-RD05/RD06 remain optional extension.
- **D5 reviewer packet THPT-G10-CHVII-VIII-D5-THREE-SVG-REVISION-20261028-R1: FIG01 PASS, FIG02 PASS, FIG03 PASS; FIG04 PASS retained from R0. D5 academic overall PASS.**
- D5 approved source SHA: FIG01 8964b708aac7cf56d1848db9d469f2573ce40873; FIG02 08e22fbc8ed90db7ccc48d782eb270404f057226; FIG03 e28c6500b486ee755fad0fc164d48969fd891c55; FIG04 f24fcdf80d2a4ffc935a415197b30f48a54b4817.

## Updated documentation
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_D5_R1_PASS_RECEIPT_20261028.md`: exact independent D5 result.
- `prototypes/thpt/visuals/README_THPT_G10_CHVII_CHVIII_DIAGRAMS_v0.1.md`: current status now 4/4 D5 PASS.
- `prototypes/thpt/visuals/THPT_G10_CHVII_CHVIII_VISUAL_ASSET_PLACEMENT_MANIFEST_D5_PASS_v0.1.md`: metadata-only references to four SVGs linked to the correct canonical exercise IDs; **not live integration**.
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_D6_PREFLIGHT_GOLDEN_UI_SECURITY_DEVICE_QA_v0.1.md`: 20 D6 test cases, separating verified source from untested browser, user-flow and release gates.

## D6 next gate and restrictions
The current preview tree still chiefly contains ChVI and function-topic pilot pages, not verified full ChVII–VIII learner routes. Therefore the D6 browser/device/end-to-end verdict is **NOT TESTED**; neither Chrome Mobile nor iPhone/iPad Safari on real devices has been signed off. The integration of SVGs, timing of showing solutions, Final Submit behavior, assessment independence, and cross-path exposure checks remain unverified.

Keep Golden UI R4, its 1/2-level knowledge tabs, SGK separate chapter-end Readiness and Topic exactly Knowledge/Practice/Topic Readiness (no Topic Core). One canonical ID per item; map roles/placements without duplicating answers or histories. Do not reuse seen Practice exercises as independent Readiness evidence.

```text
D5_ACADEMIC|PASS_4_OF_4
D6_PREFLIGHT|CHECKLIST_READY
D6_RUNTIME_BROWSER_DEVICE|NOT_TESTED
D6_RELEASE_GATE|HOLD
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
OWNER_ACADEMIC_PASS_WHOLE_CHAPTER|NOT_GRANTED
MERGE_DEPLOY|NO
```
