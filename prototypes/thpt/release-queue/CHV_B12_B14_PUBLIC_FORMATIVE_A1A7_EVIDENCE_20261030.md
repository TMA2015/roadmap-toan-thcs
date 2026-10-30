# Toán 10 KNTT · Chương V B12–B14 — bằng chứng A1–A7 (30/10/2026)

**PACKET_ID:** `G10-SGK-CHV` · **R01:** `THPT-G10-CHV-B12-B14-D1D6-AUTHORING-20261030-R01`
**LEARNING_PATH:** SGK_CHAPTER · **RELEASE_SCOPE:** PUBLIC_FORMATIVE_ONLY B12–B14 · **AUTHORING ONLY**.

## 1. Snapshot gốc và reviewer độc lập

- Original Temp Markdown: `Temp_THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01.md` — **44,126 bytes**, SHA256 `77a189bb1aa199f3b81b8915903f85bae6659729849251ad92fa092761fd850c`.
- Git exact source `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7`. Verified byte-exact to original Temp; R01 content unchanged after review.
- Owner-provided independent NotebookLM review receipt (LF-normalized, no changed source words) `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261030.md`, blob `7a20d601c5e3e6ef184bcb44e4e7e214e8a06baf`.
- Reviewer used 5 THPT Permanent Sources v2.0 and S1 original SGK/SBT Toán 10 KNTT tập 1: SGK B12 pp.73–77, B13 pp.78–83, B14 pp.84–88; SBT B12 pp.72–73, B13 pp.74–77, B14 pp.78–80. SGK cuối chương pp.89–90, SBT pp.81–84 **not cleared as independent Chapter Readiness**.

## 2. Independent academic findings

- `LESSON_B12=PASS`, `LESSON_B13=PASS`, `LESSON_B14=PASS`, `D1–D6_OVERALL=PASS`; `OUTCOME_MATRIX=14/14 FULL`, `ITEMS=27/27 PASS` (6 SGK_CORE + 18 SGK_PRACTICE + 3 WRITTEN, one Anchor tag); D2 9 examples, D5 3 SVG, D6 6 HELP_ID.
- Exactly 27 `item_id` reconciled source vs reviewer (no missing, duplicate or unexpected item); 14/14 listed outcome IDs found in both; six D6 HELP IDs found; original three SVG code blocks match Git SVG files exactly after trim.
- Reviewer confirms KNTT B12 notation: `a` approximate, `\bar a` true; relative-error denominator is `|a|` (approximate, nonzero), and `d` bounds true absolute error rather than equalling it. Quartiles follow KNTT split rules; variance divides by `n`; outlier inequalities strict.
- `PACKET_VERDICT=PASS`; `ACADEMIC_CLEARANCE_FOR_THIS_DELTA=YES`; `MINIMAL_DELTA=0`; `P0=0`, `P1=0`, `P2=1`.
- Reviewer P2-1, **not yet closed**: register 27 item IDs into real shared canonical bank and test 3 SVG responsive on actual devices in release R1/R2. Anchor is label on Written, not separate copy.
- SVG source blobs: B12 `0cdc5c7354a7d82c9747a2db90fedbf4ec7d4a5e`, B13 `acaf49296892e35c48fb2b4a5b335a7d26643336`, B14 `98ab8375e496468e8f7fbc79f6cacc03d08a4645`.
- Reference-only item/outcome register `prototypes/thpt/shared-items/THPT_G10_CHV_B12_B14_CANONICAL_ID_REGISTER_R01.md` (no duplicate stems, answers or rubrics). Canonical live-bank registration requires release R1 and latest-main collision check.

## 3. Academic gate record — B12/B13/B14 formative only

- [x] A1_SOURCE_SNAPSHOT — exact original Git blob/SHA256; SVGs unchanged.
- [x] A2_SGK_SBT_SCOPE — independently confirmed S1 original-book pages and academic limits.
- [x] A3_NOTEBOOKLM_VERDICT — 27/27 PASS, D1–D6 PASS, Academic Clearance YES for exact R01.
- [x] A4_ITEM_OUTCOME_IDS — 27 reviewed item identities match source; 14 outcome IDs, 6 HELP; production registration delegated to R1.
- [x] A5_D1_D6_SCOPE — 3 lessons with 9 D2, 24 formative, 3 Written, 3 SVG and 6 HELP PASS in public formative scope.
- [x] A6_DELTA_RESOLVED — MINIMAL_DELTA=0; no post-review material change or P0/P1.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — public formative and voluntarily checked Written only, no held-out Readiness keys or Mastery writes.

## 4. Separate release gate

- [ ] R1_INTEGRATED_CURRENT_MAIN — dedup and register canonical item IDs; one shared Written/Anchor bank.
- [ ] R2_EXACT_HEAD_CI — responsive SVG actual device, desktop/mobile browser, links, Golden R4 and THCS regression on integration commit.
- [ ] R3_CLEAN_STUDENT_UI — remove reviewer/author metadata in learner UI.
- [ ] R4_ASSESSMENT_SAFETY — independent Final Submit Readiness and Mastery remain disabled/unreviewed.
- [ ] R5_OWNER_APPROVAL — explicit owner authorization required for integration/merge/deploy.

**CONCLUSION:** `A1–A7=PASS_B12_B14_PUBLIC_FORMATIVE_ONLY`; `CONTENT_READY=YES_AUTHORING_ONLY`; `RELEASE_READY=NO`; `FULL_CHV_SGK_CHAPTER_READINESS=NO`; `TOPIC=NOT_REVIEWED`.

## 30/10 subsequent scoped academic correction — HELP-G10-B12-02 R02

**This addendum overrides only the historical R01 HELP02 D6 clearance claim in §§2–3 above.** Keep original 27/27 R01 item clearance, 14/14 outcome scope, other 5 D6 helpers, D1–D5 and SVG records unchanged; preserve the prior NotebookLM R01 report as a historical snapshot, not an assertion that its flawed HELP02 may be deployed.

- Owner-returned independent NotebookLM `THPT-G10-CHV-B12-D6-HELP02-DELTA-C-20261030-R02-CANDIDATE`: R01 `HELP-G10-B12-02` had an overlooked **P1 mathematical notation/denominator error**, whereas replacement **R02 `HELP02_VERDICT=PASS`, `ACADEMIC_CLEARANCE=YES` for the single card**, `DELTA_C_ACADEMIC_MATERIAL`. S1 SGK 10 KNTT T1 B12 pp73–77 (p75), SBT pp72–73.
- **Mandatory overlay before R1**: `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_D6_HELP02_R02_CANONICAL_SOURCE_OVERLAY_20261030.md` [Git blob `913400d6aff63befac95a8a47a00870663dd0096`]; **owner reviewer receipt** `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_D6_HELP02_R02_OWNER_NOTEBOOKLM_PASS_RECEIPT_20261030.md`. R01 frozen source Git blob `49502fe39cf0a67f6a3e973a77f94164150637a7` stays unchanged and **must not be used for HELP02**.
- Static check: correct `a\ne0`, `\delta_a=\Delta_a/|a|`, `\Delta_a\le d\implies\delta_a\le d/|a|`, no equality without actual error; original practice item `THPT-G10-B12-P06` same ID/stem/answer/solution/version. Overlay has exactly one HELP02 with five steps, **not six plus a seventh**. Full Temp byte parity not yet evidenced in authoring conversation; source-lock and release R1–R5 remain separate.
- **Interpret historical checklist:** the previous `A6_DELTA_RESOLVED` claim `MINIMAL_DELTA=0` applies only to findings known at R01 review time, **not** to later HELP02 discovery. Current **authoring A6** is satisfied by *scoped R02 reviewer clearance + replacement overlay*, with **R1 replacement and source-byte verification not yet completed**. `ASSESSMENT_ITEM_BANK=NOT_REVIEWED`, `NO_SCORE/NO_MASTERY`, `NO_MERGE_DEPLOY`.

## 30/10 · Final authoring academic closure after HELP01 and HELP02 R02 independent PASS

**This is an addendum overriding *only* the previous HELP01 `ACADEMIC_PARTIAL` status and two defective R01 D6 claims; previous R01 reviewer evidence remains as original history, not as proof its two faulty helper bodies can be deployed.**

- Owner-provided independent NotebookLM **HELP01@R02** verdict: `THPT-G10-CHV-B12-D6-HELP01-DELTA-C-R02-20261030-CANDIDATE`; single `HELP-G10-B12-01`, `G10-B12-ABS_ERROR`; 5-step review `PASS`; `ACADEMIC_DELTA_VERDICT=PASS`; historical error `P1` now resolved with **R02 P0/P1/P2=0/0/0**; `THPT-G10-B12-C02` canonical source 100% unchanged. Reviewed real Temp SHA256 `926fa47af4f43637c375cf4169457784df2d225a0529b6266ecc3202e564651f`, 6,706 bytes; Git candidate source blob `43ef063e150c647e0b5025e131b6b0f14d092576`, exact five-step canonical overlay blob `2cecaba020881a560bc33251c38d55cc10a05516`.
- Prior owner-provided independent NotebookLM **HELP02@R02** scoped PASS retained for `HELP-G10-B12-02`, `G10-B12-REL_ERROR`, linked original `THPT-G10-B12-P06` unchanged. Overlay blob `913400d6aff63befac95a8a47a00870663dd0096`. Old R01 P1 wrong relative-error denominator `d/|\bar a|` must never be integrated. Exact original HELP02 Temp bytes were unavailable in this authoring chat: **release R1 must verify hash/content against original reviewer Temp before implementation**.
- **Six canonical D6 source precedence** (no duplicate HELP or item IDs): four unaffected original R01 B13/B14 cards + HELP01@R02 + HELP02@R02. Map `prototypes/thpt/content-drafts/THPT_G10_CHV_B12_B14_D6_EFFECTIVE_CANONICAL_SOURCE_MAP_R02_20261030.md`; original R01 source blob `49502fe39cf0a67f6a3e973a77f94164150637a7` unchanged and R01 review receipt blob `7a20d601c5e3e6ef184bcb44e4e7e214e8a06baf` unchanged. Other academic D1–D5 B12, all B13/B14, 27 item candidate IDs, formulas/answers/rubrics, 3 D5 SVGs unchanged.
- **Current scoped authoring A gates**: `A1_SOURCE_SNAPSHOT=PASS` (frozen base + two versioned overlays/source map), `A2_SGK_SBT_SCOPE=PASS` (original source p74–75 and SBT p72–73 for B12 corrections), `A3_NOTEBOOKLM_VERDICT=PASS` on their **respective exact scopes** (R01 unaffected + 2 scoped R02), `A4_ITEM_OUTCOME_IDS=PASS` (27 public IDs and 14 outcomes per historical reviewed batch, not newly runtime-registered), `A5_D1_D6_SCOPE=PASS` for reviewed effective public content, `A6_DELTA_RESOLVED=PASS` for both academic P1 corrections, `A7_PUBLIC_PRIVATE_BOUNDARY=PASS` (no held-out key/Readiness/Mastery).
- `G10-SGK-CHV` is **one** canonical packet in `ready/G10-SGK-CHV.md`, `STATE=CONTENT_READY` **authoring only**; moved back from `inventory/ACADEMIC_PARTIAL` after independent R02 PASS. This does **not** imply whole chapter `CHAPTER_COMPLETE`, official assessment, independent student testing, release QA or deploy. `R1–R5=PENDING`, linked R02 Temp HELP02 byte parity and current-bank registration/desktop-mobile-SVG UAT pending, `RELEASE_AUTHORIZATION=NO`.
