# THPT integration lane — incoming ChVII/VIII NotebookLM-reviewed material (2026-10-28)

**Integration owner lane:** Draft PR #612 on `feature/thpt-g10-b16-knowledge-pilot-r1-20261026`.  
**Authoring source lane:** `content/thpt-g10-chvii-chviii-authoring-20261028`.  
**Next authoring lane:** `content/thpt-g10-chix-academic-authoring-20261028`.  
**Handoff status:** `REVIEW_RECEIPTS_ACKNOWLEDGED_METADATA_ONLY` — **NO cherry-pick, merge, deploy, release entitlement or canonical item cloning**.

## 1. Evidence received from academic authoring branch

Source files:
- `prototypes/thpt/content-drafts/CHECKPOINT_2026-10-28_G10_CHVII_VIII_D5_PASS_D6_PREFLIGHT_v1.3.md`
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_D1D2_RD_RECEIPT_AND_RECONCILIATION_20261028.md`
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_DELTA_R1_RECEIPT_20261028.md`
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_P07_DELTA_PASS_AND_OUTCOME_RECEIPT_20261028.md`
- `prototypes/thpt/content-drafts/THPT_G10_CHVIII_RD08_V02_NOTEBOOKLM_DELTA_PASS_RECEIPT_20261028.md`
- `prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_D5_R1_PASS_RECEIPT_20261028.md`
- `prototypes/thpt/THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.4.md`

| Material and scope | Reconciled result | Integration decision |
|---|---|---|
| G10 SGK ChVII B19–B22, ChVIII B23–B25 D1/D2 knowledge and worked examples | 7 lesson snapshots NotebookLM PASS | Intake for separate knowledge-page comparison; NOT yet learner route PASS |
| G10 ChVII/VIII canonical S1 outcomes | **35/35** outcome IDs with reviewer-reported S1 source receipts | Use as outcome mapping; not whole-chapter D1–D6 PASS |
| D3/D4 Core/Practice/Application/Written bank | **Original 63** reviewed `PASS_WITH_RECLASSIFICATION`; **new B25-P07** separately Delta PASS; **64** unique candidates total (ChVII 36, ChVIII 28) | Preserve original canonical IDs and reviewer classification; no release or mastery |
| SGK Chapter Readiness | **14/14 eligible candidate slots** academically reviewed after targeted replacements; **0 active** | Held-out questions/keys remain outside public GitHub/client; secure server/evidence gate required |
| Educational SVGs D5 | **4/4** academic PASS (FIG01–03 R1, FIG04 retained PASS R0) | Attach only at permitted formative placements; browser/device and answer-exposure QA pending |
| D6 app/browser/device/security integration | **NOT TESTED** for ChVII/VIII | Mandatory QA hard HOLD |

### Important narrowly scoped exceptions
1. `THPT-G10-CHVII-RD02` is permanently **RETIRED_EXPOSED_CANDIDATE** due answer/exposure risk; eligible replacement `RD09` has a scoped independent PASS. Never reissue RD02 in a held-out bank, even with a new answer.
2. Original `CHVIII-RD05` and `CHVIII-RD06` are optional extension, not mandatory Core Chapter Readiness. The 14 mandatory slots are covered by reviewed replacements `RD07` and `RD08 v0.2`. `RD08 v0.1` is superseded/HOLD.
3. Original bank requires academic role corrections: `B22-C01` specialist/non-mandatory, `B25-P02`, `B25-P05` optional support, `B25-P06` specialist. These academic layer labels **are not approved production runtime enum values**.
4. `B25-P07` is a **new distinct canonical Practice ID**, reviewed to close the constant-term Core-coverage gap. Do not rewrite or duplicate the original B25-P02.
5. SVGs FIG01–03 can disclose answers to their paired Practice exercises; keep them behind allowed practice reveal/solution controls. FIG04 counting-tree leaves are also answer-bearing in a Core context.

## 2. Scope of new Chapter IX branch

The branch `content/thpt-g10-chix-academic-authoring-20261028` contains B26/B27 authoring candidates (10 provisional outcomes, five worked examples, **16** Core/Practice/Written candidate IDs with two Written and one Anchor tag), plus six **blueprint-only** Chapter Readiness slots. Its checkpoint explicitly says `ACADEMIC_NOT_REVIEWED`, original S1 Chapter IX direct source receipt **PENDING**, NotebookLM handoff prepared. **Do not include these 16 candidates in reviewed totals or claim NotebookLM PASS for ChIX.**

## 3. First-release coordination / next actions

- Preserve current ChVI Draft PR #612 integration: **36 public formative/Written canonical IDs and 19/19 approved SGK knowledge outcome structural mapping**; 18 ChVI held-out Chapter Readiness candidates have academic PASS but **zero protected released items**. Preview GitHub CI PASS does not satisfy production release gates.
- **First release remains ChVI-based**, pending protected backend Readiness delivery/key storage, exposure ledger across SGK and Topic, Final Submit gating, production QA, real-device owner UAT and hosting/rollback. Do **not** silently broaden first-release scope to ChVII/VIII or claim the cross-grade Topic route passed.
- AFTER first release (per owner), this integration conversation consolidates QA workflow into 3 stages (academic review; automated app/security testing; owner UAT/controlled release), tests the process, then uses it for subsequent approved integration waves.
- **Next content release candidate after the first ChVI launch:** ingest the scoped ChVII/VIII approved branch using a separate integration workstream and D6 20-case test matrix, keeping canonical IDs and reviewed SVG SHAs; do not copy raw held-out stems, rubric or keys into public repo/browser. Review any mathematics-changing integration delta by Project Source 07.
- Do not edit Golden UI R4, THCS 7+25 shortcuts, old learner records, or production route for purposes of merely recording this intake.

```text
CURRENT_PR_612|DRAFT_UNMERGED
CHVI_PUBLIC_REVIEWED_ITEMS|36_PREVIEW_ONLY
CHVI_APPROVED_SGK_OUTCOMES|19_OF_19_SNAPSHOT_STRUCTURAL_MAPPED
CHVI_SECURE_READINESS|NOT_RELEASED
CHVII_VIII_LESSON_D1D2|7_SCOPED_PASS
CHVII_VIII_S1_OUTCOME_RECEIPTS|35_OF_35
CHVII_VIII_D3D4|63_PASS_WITH_RECLASSIFICATION_PLUS_1_DELTA_PASS
CHVII_VIII_SGK_READINESS|14_OF_14_ELIGIBLE_CANDIDATES_REVIEWED_ZERO_ACTIVE
CHVII_VIII_D5_SVG|4_OF_4_ACADEMIC_PASS
CHVII_VIII_D6_RUNTIME_DEVICE|NOT_TESTED
CHIX_B26_B27|16_CANDIDATES_NOT_REVIEWED
MERGE_DEPLOY|NO
```
