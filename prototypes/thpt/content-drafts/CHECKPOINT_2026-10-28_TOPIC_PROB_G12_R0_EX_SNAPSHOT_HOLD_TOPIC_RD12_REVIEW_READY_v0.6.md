# CHECKPOINT · 2026-10-28 · THPT Topic Probability 10–12 academic content R0 / private Topic Readiness candidates v0.6

**Division of responsibility (owner decision):** this conversation **ONLY academic source verification, content authoring, NotebookLM review receipts and scoped deltas**. Separate conversation handles Golden UI R4 website route/integration, backend secure grading, D6, merge and deploy. All work isolated in `content/thpt-g10-chix-academic-authoring-20261028`. Do not touch PR #612 integration or release.

## 1. Reviewer receipt received — G12 B18/B19 R0

```text
PACKET_ID|THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G12_SGK|SGK_TOAN_12_TAP_2_KNTT,TRANG_42-58(CHUP_VI_B18_B19)
SOURCE_RECEIPT_G12_SBT|SBT_TOAN_12_TAP_2_KNTT,TRANG_40-64(CHUP_VI_B18_B19)
GRADE_SCOPE_RECONCILIATION|G12_CORE_VALIDATED(BAYES_CONDITIONAL_BELONGS_TO_G12)
KNOWLEDGE_REGISTER|PASS(4/4_MODULES)
EXAMPLE_REGISTER|PASS(4/4_EXAMPLES) -- REVIEWER_REPORTED
OUTCOME_ALIGNMENT_G12|8/8_CANONICAL_OUTCOMES_MAPPED
ITEM_RECONCILIATION|EXPECTED=12|REVIEWED=12|MISSING=0|UNEXPECTED=0|DUPLICATED=0
PREVIOUS_VERDICTS_PRESERVED|G10_FOUNDATION_PASS;G11_SEGMENT_PASS
LESSON_B18_VERDICT|PASS
LESSON_B19_VERDICT|PASS
ACADEMIC_OVERALL_G12_SEGMENT|PASS -- REVIEWER_REPORTED
TOPIC_10_12_OVERALL_STATUS|INCOMPLETE_PENDING_TOPIC_READINESS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

Reviewer SGK G12 Tập 2 ChVI B18 printed pp.42–49, B19 pp.50–56, end chapter pp.57–58; SBT B18 pp.40–48, B19 pp.49–58, end chapter pp.59–64. Prior G10 and G11 review PASS snapshots preserved, with no modifications to those canonical item bodies.

## 2. One EX-G12-B19-02 reviewer summary mismatch — IMPORTANT HOLD

Original exact reviewed authoring source `prototypes/thpt/content-drafts/THPT_TOPIC_XAC_SUAT_G12_B18_B19_KNOWLEDGE_D1D2_AUTHORING_v0.1.md`, Git blob `8a47a34cc4d06972c2922cf79e1d013045fee311`:
- Choose X with probability 1/3, Y probability 2/3; X has 2 red/3 blue, Y 3 red/1 blue. Hence `P(R) = (1/3)(2/5) + (2/3)(3/4) = 19/30`, Bayes `P(Y|R)=15/19`.
- Reviewer R0 report **instead used** choose X=2/5, Y=3/5 and X red probability 1/2, yielding `P(R)=13/20` and `P(Y|R)=9/13`, while also describing X as 2 red/3 blue, an internal inconsistency.
- Two different tasks have different answers; no reason to alter correct original. `EX-G12-B19-02=HOLD_EXACT_SNAPSHOT_RECONCILIATION` until NotebookLM reviews **exact original text**, rather than blindly inheriting reviewer reported 4/4. This is a source/snapshot audit delta, not proof of incorrect original math.
- Targeted review file is a real local **`Temp_THPT_TOPIC_PROBABILITY_G12_EX_B19_02_SOURCE_MISMATCH_DELTA_20261028.md`** (contains full original and reviewer mismatch), with short same-message prompt. Owner can return corrected reviewer receipt. No public GitHub modifications of EX source.
- Receipt: `prototypes/thpt/content-drafts/THPT_TOPIC_PROBABILITY_G12_NOTEBOOKLM_R0_PASS_WITH_EX_B19_02_SNAPSHOT_HOLD_RECEIPT_20261028.md`.

## 3. G12 P05 academic layer adjustment

- `THPT-G12-B19-P05` is **mathematically PASS**, but its 3-branch total-probability/Bayes problem is **SUPPORT_EXTENSION**, not mandatory G12 SGK Core. Zero changes to canonical stem, key, rubric or history.
- `THPT-G12-CHVI-W19-ANCHOR-01` is one canonical Written item with exactly one Anchor tag.
- Academic-only overlay: `prototypes/thpt/shared-items/THPT_TOPIC_PROBABILITY_G12_REVIEWER_ROLE_OVERLAY_v0.1.md`. Do not assume reviewer curriculum-layer labels are runtime-supported enums. Original 12-item bank remains immutable at blob `156061dd3bb240ddac21183df21a12637e1b5b09`.

## 4. Cross-grade Topic Readiness genuinely authored, PRIVATE

- New **12 unique canonical candidate IDs** `THPT-TOPIC-PROB-RD01..RD12`, G10 four / G11 four / G12 four. **25 unique outcome IDs** from the reviewed source segments, mapping provisional and subject to outcome-level NotebookLM audit.
- Full new 12 stems/keys/solutions/rubrics exist only in **PRIVATE `Temp_THPT_TOPIC_PROBABILITY_G10_G12_TWELVE_PRIVATE_TOPIC_READINESS_CANDIDATES_20261028.md`**. This file is NOT committed to GitHub. Independent arithmetic preflight verified ID uniqueness and representative counts; it is NOT an academic PASS.
- GitHub contains **only metadata index** `prototypes/thpt/content-drafts/THPT_TOPIC_PROBABILITY_G10_G12_PRIVATE_READINESS_12_SLOTS_25_OUTCOMES_v0.1.md`, no heldout private key/answer/stem/rubric.
- Academic review packet `THPT-TOPIC-PROBABILITY-G10-G12-HELDOUT-12-20261028-R0`, expected 12 items, 25 mapped outcomes, held-out independence against 38 public G10+G11+G12 Practice items and their taught examples, as well as 6 separately protected G10 SGK Chapter IX Readiness candidates.
- Reviewer must **HOLD** near clones, check new question depth, not assume PASS simply because 25/25 ID references are present; replace/substantially change any near-clones and re-review DELTA_C.
- All 12 **NOT REVIEWED** and **0 active**, no secure grading backend or release gate approved. SGK chapter-end and Topic Readiness remain separate. Topic Knowledge/Practice/Topic Readiness exactly three parts, no Topic Core page.

## 5. Cross-grade academic overview

| Segment | Academic position |
|---|---|
| G10 Topic Foundation | 5 Knowledge modules / 10 outcomes / 16 reused canonical Practice placements **PASS** |
| G11 Topic | 4 modules / 3 examples / 7 outcomes / 10 original canonical Practice items **PASS** |
| G12 Topic | 4 modules / 8 outcomes / 12 canonical Practice items reviewer **PASS**; 4 examples reported PASS, but 1 example **EX-G12-B19-02 snapshot HOLD** |
| Topic Readiness | 12 new PRIVATE candidates for 25 outcomes, **NOT REVIEWED** |
| Overall Topic 10–12 | **NOT_YET_PASS; held by the example mismatch + Topic Readiness** |

**Academic-only branch:** no learner-facing route, master scoring, Key exposure, Golden UI design, merge or deploy. Golden UI R4 and two complete SGK and Topic paths preserved. Content items may be shared through role/placement mapping with one ID/key/history only.

```text
TOPIC_G10_SEGMENT|PASS_RETAINED
TOPIC_G11_SEGMENT|PASS_RETAINED
TOPIC_G12_R0|PASS_REVIEWER_REPORTED_EXCEPT_EX_B19_02_SOURCE_FIDELITY_HOLD
G12_B19_P05|SUPPORT_EXTENSION_OVERLAY
G12_EX_B19_02|HOLD_DELTA_R1
TOPIC_OUTCOMES|25_CANDIDATE_COVERAGE_MAPPING
TOPIC_READINESS|12_UNIQUE_NEW_PRIVATE_CANDIDATES_NOT_REVIEWED
TOPIC_READINESS_ACTIVE|0
ACADEMIC_OVERALL_TOPIC_10_12|NOT_YET_PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
