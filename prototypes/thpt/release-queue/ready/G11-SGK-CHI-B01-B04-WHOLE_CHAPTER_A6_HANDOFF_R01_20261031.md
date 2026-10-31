# G11-SGK-CHI · ONE full chapter Academic PASS effective-source handoff to A6

**Scope:** Toán 11 KNTT Tập 1 Chương I B01–B04 · `PACKET_ID=THPT-G11-CHI-B01-B04-WHOLE-CHAPTER-AUTHORING-R01-20261031`.
**Status:** `A1_A7_ACADEMIC_SOURCE_READY=YES`; `A6_INTEGRATION=NOT_YET_RELEASED`; `ACADEMIC_CHAPTER_I=PASS`; `RELEASE_AUTHORIZATION=NO`; `SYSTEM_HOLD=YES`; `MASTERY_ACTIVATION=NO`.

## Single authoritative source combination — no repeated late source hunting

| Resource | Exact reviewed source | Version/status |
|---|---|---|
| B01/B02 D1–D6, 18 public items, 2 SVG, 4 D6 | `prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B02_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `f0e737f2d07a27f233615345b60070319d5bd00f` | preserved old R01 PASS |
| B03/B04 D1–D6, 28 public items, four SVG, four D6 | `prototypes/thpt/content-drafts/THPT_G11_CHI_B03_B04_D1D6_AUTHORING_R01_20261031.md`, Git blob `0cbcf95b4e50e6a436e7505655db32018705e41f` | new R01 Academic PASS |
| Complete public chapter review and 46 canonical public item ID source | `prototypes/thpt/content-drafts/THPT_G11_CHI_B01_B04_FULL_CHAPTER_D1_D6_REVIEW_SOURCE_R01_20261031.md`, Git blob `599d12ac7c2252001f881833c39978f94112cee4` | R01 Academic PASS; original source content unchanged |
| Four new graph sources | `prototypes/thpt/content-drafts/svg/FIG-G11-B03-01_R01.svg` … `FIG-G11-B03-04_R01.svg` | 4/4 PASS; source refs match full chapter XML |
| Chapter RD0 26 outcome + private RD1 20 stems/keys/solutions/rubrics | PRIVATE Library `Math App/THPT_Academic_Review_Archive/_INTERNAL_G11_CHI_R01_20_RD1_CANONICAL_ACADEMIC_PASS_20261031.md`, SHA256 `b34b5f232b41e03eaddd1c3566ce2f73881ec09f8b3449432814b763d754f107` | 20/20 PASS, source-restored; **never commit to public repo** |
| Post-review evidence | `prototypes/thpt/content-drafts/G11_CHI_B01_B04_R01_NOTEBOOKLM_ACADEMIC_PASS_SOURCE_LOCK_20261031.md` (this Draft PR) + private original summary and source-lock manifest | 3/3 RESTORE PASS, no new deltas |

**S1 accepted source pages:** SGK 11 KNTT Tập 1 B01 5–16, B02 17–21, B03 22–30, B04 31–39, ChI exercise 40–41. SBT B01 4–7, B02 8–10, B03 **11–18**, B04 **19–24**, ChI exercise 25–30 (confirmed in owner NotebookLM receipt).

## Item-level counting and no-clone contract

- **26 outcome IDs** (10 previous + 16 new) and **46 public canonical item IDs** (18 previous + 28 new, including 4 Written/Anchor total). No double-register of one item by placement. Reuse original B01/B02 SVG/D6 unchanged; four additional B03 SVG and four new D6. Chapter-end held-out RD1 has **20 different private IDs**, no reusing a student-exposed Core/Practice exercise as independent evidence.
- Written/Anchor remain shared one-bank items; do not turn Anchor into a duplicate repository. Each canonical item retains exact stem, answer, worked solution and rubric.

## A6 R1–R5 final chapter QA (release ownership)

1. **R1:** integrate ALL B01–B04 chapter pages into existing single unified website; verify SGK Core+Practice+Written/Anchor, graphs, D6, internal/relative/deep links; exact-source SHA and 46 canonical public IDs; avoid merging old partial B01/B02 with a second cloned bank.
2. **R2:** math/render QA on desktop+iPhone, sin/cos/tan/cot SVG axis/asymptotes labels, font and fallback; all 26 outcome coverage, 8 D6 and 6 images as approved. Regression test THCS Golden, existing THPT navigation/AP and student progress.
3. **R3:** end-of-chapter Final Submit controls with **no hint, AI Tutor, answer, right/wrong notice, solution or rubric before submission**. Do not copy private assessment keys into public JS merely to claim readiness; check exposure mechanism and independent evidence boundary.
4. **R4:** no new Mastery or official stored scoring until separately validated and authorized; do not change Firebase/Gemini/localStorage learner history keys without explicit plan and approval.
5. **R5:** require owner **explicit** merge/deploy permission after exact-head QA; record deployed commit and actual devices. `SYSTEM_HOLD=YES` until that verification. Never equate Academy PASS with website published.

**Post-publication freeze:** complete chapter first; ordinary late authoring avoided, serious critical math defect goes through issue/DELTA_C/owner QA. Next authoring lane chapter: G11 SGK **ChII**, no Topic work.
