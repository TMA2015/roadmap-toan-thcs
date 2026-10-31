# Toán 10 KNTT — ONE-BATCH SGK 9-chapter academic closure and A6 release intake

**As-of 31/10/2026 · exact main inspected:** `70666bb468131ad3c09b6d33ca25f523afff56d5`.
**Owner directive:** aggregate all real leftover G10 SGK issues in one final completion batch; no ordinary reopening of already published chapters. Preserve reviewed source. **SGK G10→G11→G12 first; Topic authoring HOLD**.
**This is a source/QA handoff, not a new whole-grade NotebookLM verdict, technical release approval, or confirmation that all 9 chapter self-checks work on the website.**

## 1. Source-of-truth consolidation by chapter

| Chương | Bài SGK | Public academic source | Private RD1 academic snapshot | Current site chapter-end |
|---|---|---|---|---|
| I | B01–02 | 18 public items / D1–D6 R01 PASS | 14 R02 PASS | Chưa mở |
| II | B03–04 | 18 public items / D1–D6 R01 PASS | 14 R01 PASS | Chưa mở |
| III | B05–06 | 18 public items / D1–D6 R01 PASS | 14 R01 PASS | Chưa mở |
| IV | B07–11 | 45 public items / D1–D6 B07–08 + B09–11 scoped PASS | 21 R01 PASS | Chưa mở |
| V | B12–14 | 27 public items / R01 base + three independently reviewed scoped R02 assets | 18 R01 PASS | Chưa mở; B12 not on main |
| VI | B15–18 | 36 public/Shared-Written assets, 8 additional reviewed D6 source | 18 R0 math + R1 rubric PASS | 4-question technical demo only |
| VII | B19–22 | 36 public assets, D1–D6 scoped PASS | 22 R03 PASS | Chưa mở |
| VIII | B23–25 | 28 public assets, D1–D6 scoped PASS | 14 R01 PASS | Chưa mở |
| IX | B26–27 | 16 public assets, D1–D6 scoped PASS | 6 R0 PASS | Chưa mở |
| **Total** | **27 lessons** | **242 public item-candidate entries across scoped receipts** | **141 uniquely identified RD1 candidates** | **8 unopened + 1 demo** |

**Precision:** 242 is a **sum of source receipt quantities**, not independent proof of globally unique public bank IDs or website accessibility. 141 RD1 are approved **academic candidate items with private exact canonical sources**, not activated independent exams. Archived SHA registry: `prototypes/thpt/audits/G10_9CH_27LESSONS_SGK_READINESS_ACADEMIC_METADATA_REGISTER_20261031.json` on authoring audit PR #641; this batch's machine-readable gap register: `prototypes/thpt/audits/G10_SGK_9CH_ONE_BATCH_SOURCE_AND_RELEASE_GAP_REGISTER_20261031.json`.

**Source custody:** all nine private RD1 effective chapter sources were previously restored and SHA-matched; do NOT copy private question/key/rubric source into public GitHub, public JS, screenshot or CI artifacts merely to close the release checklist. Distinct readiness scopes: SGK_CHAPTER_READINESS != TOPIC_READINESS. No new question content or academic delta in this batch.

## 2. Real main-site audit (not just old checkpoint) — the three release groups

### A. P1 — Chương V Bài 12 absent from main

- On main, G10 chapter folders provide **26 lesson Markdown pages out of expected 27**. All chapters except V have the expected lesson pages. ChV currently has B13/B14 + Practice + inactive Self-check, and **no `docs/thpt-preview/sgk/chuong-v/bai-12.md`**. The ChV hub and Practice still explicitly exclude B12.
- PR #671 was actually **MERGED**, scope B13/B14 only. No claim that B12 was merged with it.
- Complete B12 academic source is READY on Draft authoring **PR #639** with ONE effective resolver: `prototypes/thpt/release-queue/ready/G10-SGK-CHV-EFFECTIVE-R02-SINGLE-SOURCE-MANIFEST_20261031.md` on branch `content/thpt-g10-chv-b12-b14-s1-d1d2-authoring-20261030`, immutable receipt Git blob `8cd9bf1059b628f2fba95fb24900bb200b93b599`.
- Resolver pins original R01 **27 total canonical items** (24 formative + 3 Written, B12 share 8 formative +1 Written), **14 outcomes, 9 examples, FIG01/02/03, six HELP_IDs**. Three exact overrides only: **FIG-G10-B12-01@R02** XML Git blob `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52`, `HELP-G10-B12-01@R02` blob `2cecaba020881a560bc33251c38d55cc10a05516`, `HELP-G10-B12-02@R02` blob `913400d6aff63befac95a8a47a00870663dd0096`. Independent NotebookLM PASS for these scoped correction snapshots; original unchanged 27 items keep original scoped PASS. **No new academic review** for unchanged content.
- **A6 action:** integrate B12 with exact reviewed FIG01+HELP overrides into existing B13/B14 chapter, link B12 Core/Practice/Written in hub and chapter practice, verify canonical dedup, correct SVG on desktop/mobile and no old R01 text. Full ChV R1–R5 after integration. Do not overwrite previously merged B13/B14 content with a stale all-ChV snapshot.

### B. P1 — Chương VI reviewed eight D6 helpers not yet released

- On main, B15–B18 lessons and shared Formative/Applied/Written exist. Eight reviewed D6 cards were staged on **Draft source PR #642 / technical PRs #643 and #668**, not verified as merged into main. Exact reviewer source snapshot and unique HELP_ID mapping live on #642; do not clone canonical practice/answers or revisit 54 original reviewed ChVI items.
- **A6 action:** consume **one** chosen up-to-date technical release candidate, reconcile main conflicts and exact eight help-to-practice return IDs; run source-to-render/technical QA. Do not merge both #643 and #668 blindly or activate Mastery as a side effect.

### C. P1 — All 9 chapter-end Self-check routes still not ready for official assessment

- Main has exactly **9 `tu-kiem-tra-chuong.md` pages**. **ChI, II, III, IV, V, VII, VIII, IX** explicitly say unopened/not active; **ChVI** has `TECHNICAL_DEMO_ONLY`, 4 questions, `mastery_credit: false`. This is **not** the source-locked private independent RD1 bank.
- The original academic review of 141 RD1 candidates remains valid **per chapter/source snapshot**; these are not code releases and should not be re-reviewed simply because the frontend has placeholders.
- **A6 action:** use owner-directed simplified SGK end-of-chapter self-check flow from [Issue #662] without overengineering browser anti-hacker controls; no visible hints, answers, correctness, AI Tutor before Final Submit. Keep demo/no official score/Mastery until explicitly validated. Do not leak private answer/key material in public JS without an independently approved deployment mechanism; preserve local learner state and THCS/Firebase/Gemini.
- Evaluate the full **nine chapter routes as ONE final release QA matrix**, but protect and version each chapter independently. Only owner can approve the actual R5 merge/deploy. `TOPIC_READINESS` stays independent and HOLD.

## 3. A1–A7 academic consolidated disposition

- **A1 Snapshot:** 9 chapter source receipts and privately retained RD1 canonical snapshots are known; ChV complete effective resolver pinned to exact Git blobs, ChVI D6 source pin reviewed.
- **A2 S1:** Original SGK/SBT KNTT source receipts exist for individual chapter reviews. No new S1 theory or formula introduced in this batch.
- **A3 Academic:** Prior D1–D6 source receipts and 9 separate RD0/RD1 verdicts remain source-scoped; *this batch does not self-certify a new unified NotebookLM PASS for all G10*.
- **A4 Canonical:** Preserve one `item_id` per item and Written/Anchor shared identity; the 141 private assessment candidates remain outside public bank. Do not merge ChVI alternative 20 with effective old18 or reinstate retired exposed ChVII RD02.
- **A5 D1–D6:** Reviewed chapter sources retained; only known public source-to-site gaps are B12 and D6 ChVI, not missing newly authored mathematical content. No new item counts are fabricated to cover UI gaps.
- **A6 Delta:** No new material math/answer/rubric edits in this batch. B12 FIG01 and HELP R02 deltas already received independent scoped verdicts. No extra NotebookLM review required for unchanged source.
- **A7 Hand-off:** Chapter sources ready for integration via exact pointers, but do **not mark G10_SGK_FULL_RELEASE_COMPLETE** until actual lesson paths, Core, full chapter Self-check and independent QA pass on release head.

## 4. ONE BATCH acceptance matrix (release R1–R5, owned by A6)

| R gate | Must establish across all 9 chapters |
|---|---|
| R1 source | B12 exact R02 source integrated; 27 lesson links; 9 practice hubs; single canonical item IDs; ChVI eight D6 exact source; nine RD1 source/placement boundaries respected |
| R2 correctness/UI | Each chapter D1–D6 rendered; SVG mathematical labels/desktop+phone verified, Core/Practice/Applied/Written links and fallback text; THCS/Golden unaffected; exact-final-head CI |
| R3 independent checks | Nine clear chapter Self-check entry points (or honestly marked not active); Final Submit no pre-submit leak; no fake official grades |
| R4 data safety | No unverified Mastery update, no automatic practice-score credit, learner history/progress keys and Firebase/Gemini unchanged |
| R5 authorization | Explicit owner permission for the final exact integration state; record published commit and post-release device QA before marking complete |

## 5. Post-release freeze / next grade

**This is the one consolidated cleanup pass for G10 SGK.** Any future incidental discrepancy should be handled by A6 if it is integration/presentation and does not alter mathematics; do not repeatedly request source reviews from A1–A7. Once chapter release accepted, authoring freezes the version and advances to **G11 SGK ChI**, not to Topic. Only a verified serious academic incident qualifies for scoped Delta_C revision of a published chapter.

```text
G10_SGK_AUTHORING_REVIEWED_ASSETS|REUSED_NO_MATERIAL_CHANGES
MAIN_CHAPTERS|9
MAIN_LESSON_PAGES|26_OF_27
B12_ACADEMIC_SOURCE|READY_R01_PLUS_SCOPED_R02
CHVI_D6_8|ACADEMIC_PASS_RELEASE_DRAFT
CHAPTER_SELF_CHECK_MAIN|8_UNOPENED_1_DEMO
PRIVATE_RD1_CANDIDATES|141_SOURCE_LOCKED
ONE_BATCH_A6_HANDOFF|READY_FOR_RELEASE_ENGINEERING
ACADEMIC_REVIEW_REQUIRED_THIS_BATCH|NO_NEW_MATH
RELEASE_AUTHORIZATION|NO
MASTERY_ACTIVATION|NO
FULL_G10_SGK_WEBSITE|NOT_COMPLETE
```
## 6. Exact source entrypoints for a release engineer (do not search old chat attachments)

| Chapter | SGK public reviewed authoring source locator | RD1 private source / review evidence |
|---|---|---|
| I | `prototypes/thpt/release-queue/ready/G10-SGK-CHI.md` on main, frozen D1–D6 blob `95a554e31a613b8e215679fe6790738473d598df` | Private ChI R02 14 candidates, SHA256 `a3c3410555b86b2186bcfe342f3cb084475a37c4777d2fb9b1c8562433d40d32`; metadata Draft #669 |
| II | `prototypes/thpt/release-queue/ready/G10-SGK-CHII.md` on main | Private ChII R01 14 candidates SHA `679dbdb7ee293b7879c63dc391edce0c36097cc7522eaddc0daffae3623309b3` |
| III | `prototypes/thpt/release-queue/ready/G10-SGK-CHIII.md` on main | Private ChIII R01 14 candidates SHA `1f4e6eb5af786d8d0502d9d71a8d84290d364fd9c25be28adadf32bd05adaa1e` |
| IV | `prototypes/thpt/release-queue/ready/G10-SGK-CHIV.md` AND `G10-SGK-CHIV-B09-B11.md` on main (two source-scoped lesson groups) | Private ChIV R01 21 candidates SHA `14868ed2fff5bdca0da7ea4b6e20f917c356880c28d86c425c7d0c8686196e41` |
| V | **Draft #639** `prototypes/thpt/release-queue/ready/G10-SGK-CHV-EFFECTIVE-R02-SINGLE-SOURCE-MANIFEST_20261031.md`, blob `8cd9bf1059b628f2fba95fb24900bb200b93b599` | Private ChV R01 18 candidates SHA `efc16a92ac7c168d34b2353276137d13a25478008e4e5e42817135e153eb111e` |
| VI | `prototypes/thpt/release-queue/inventory/G10-SGK-CHVI.md` on authoring Draft **#642**, plus 8 D6 source and QA receipt there; current public pages remain on main | Private ChVI old18 math/R1 rubric PASS SHA `a25ae92a4cb01122189bab2f4a22f7427838d5d7d7361a2cb9e9855571c9a154`; 20-item alternative **excluded** |
| VII | `prototypes/thpt/release-queue/ready/G10-SGK-CHVII.md` on main | Private ChVII R03 22 candidates SHA `1698c220a7d507eacf0774de09f7fdd5ae5711bbdd900d943ddeb365b4670bd4`; retired old RD02 **excluded** |
| VIII | `prototypes/thpt/release-queue/ready/G10-SGK-CHVIII.md` on main | Private ChVIII R01 14 candidates SHA `c33e116b51c6da274e9ecce64f9885f820cf3e4aaa49cac61e80b554b268d601` |
| IX | `prototypes/thpt/release-queue/ready/G10-SGK-CHIX.md` on main | Private ChIX R0 6 candidates SHA `d27e8361d3356ac9f0b224aaa3cbaea61ad02eed4510a8a3489b89ebd4cc5a96` |

**Private bank location is deliberately not a public download URL:** ChatGPT Library `Math App/THPT_Academic_Review_Archive`; A6 must use an authorized source handoff, not public HTML or a transient ChatGPT Temp link. Only the named effective source snapshots may be integrated. All pointers in this section are **source receipts**, not statements that the corresponding release head or independent testing engine has passed R1–R5.

**Metadata correction:** Legacy `ready/G10-SGK-CHVII.md` and `CHVIII.md` include an inherited `B19–B25` / `7/7` scope string. The current actual Grade 10 lesson directories are ChVII B19–B22 (4), ChVIII B23–B25 (3). Treat the inherited strings as stale *manifest prose* and this whole-grade S1 chapter crosswalk as the correct lesson-range index; do not alter mathematical material or request NotebookLM review solely to fix the label.