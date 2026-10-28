# CHECKPOINT 2026-10-28 v0.5 · THPT Topic Xác suất G10 + G11 PASS, G12 B18–B19 authored for S1 academic review

**Authoring conversation only** · branch `content/thpt-g10-chix-academic-authoring-20261028`. Website, Golden UI, D6, secured assessment runtime, merging, deployment all belong to separate release conversation. **NO_MERGE_DEPLOY** from this workstream.

## 1. Independent academic verdicts received (snapshot-specific)

**G10 Foundation** reviewer `THPT-TOPIC-PROBABILITY-G10-FOUNDATION-D1D4-20261028-R0`: five Knowledge modules PASS, 10/10 outcome alignment, 16/16 shared canonical Practice placements PASS, no copied ID/answer/attempt. **This is not Topic 10–12 overall PASS.**

**G11 Segment** reviewer `THPT-TOPIC-PROBABILITY-G11-B28-B30-D1D4-AUTHORING-20261028-R0`:
```text
SOURCE_RECEIPT_G11_SGK|SGK_TOAN_11_TAP_2_KNTT,TRANG_63-82
SOURCE_RECEIPT_G11_SBT|SBT_TOAN_11_TAP_2_KNTT,TRANG_42-55
SOURCE_RECEIPT_G12_CHECK|SGK_TOAN_12_TAP_2_KNTT,TRANG_42-58(B18_B19_BAYES_CONDITION)
G11_MODULES_ACADEMIC|PASS(4/4_MODULES)
G11_EXAMPLES_ACADEMIC|PASS(3/3_EXAMPLES)
OUTCOME_ALIGNMENT_G11|7/7_CANONICAL_OUTCOMES_MAPPED
ITEM_RECONCILIATION|EXPECTED=10|REVIEWED=10|MISSING=0|UNEXPECTED=0|DUPLICATED=0
G10_FOUNDATION_STATUS|PASS_RETAINED(PREVIOUS_VERDICT_PRESERVED)
G11_SEGMENT_ACADEMIC|PASS
TOPIC_10_12_OVERALL_STATUS|INCOMPLETE_PENDING_G12_AND_TOPIC_READINESS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```
- B28 SGK pp.63–69; B29 pp.70–74; B30 pp.75–79, G11 Chapter VIII end pp.80–82.
- Formal conditional probability, general multiplication, total probability, Bayes are **G12 B18–B19**, not G11 Core. The G10 review P1 scope language was corrected by original S1 G11 reviewer.
- G11 scoped PASS receipt `prototypes/thpt/content-drafts/THPT_TOPIC_PROBABILITY_G11_B28_B30_NOTEBOOKLM_D1D4_PASS_R0_RECEIPT_20261028.md`. Original 4+3+7+10 authored source files remain unchanged. Anchor only tag on single G11 Written ID.

## 2. New G12 source-containing actual authored candidate bank (D1–D4)

**Packet:** `THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0`.
- GitHub `prototypes/thpt/content-drafts/THPT_TOPIC_XAC_SUAT_G12_B18_B19_KNOWLEDGE_D1D2_AUTHORING_v0.1.md`; blob SHA `8a47a34cc4d06972c2922cf79e1d013045fee311`: full **4 G12 self-contained Knowledge modules** `KT-G12-01..04`, **4 solved worked examples** `EX-G12-B18-01/02, EX-G12-B19-01/02`, **8 unique candidate outcome IDs**. Explicitly distinguishes positive denominator, general vs independent multiplication, total probability, Bayes, two-branch vs multi-branch curriculum layer.
- GitHub `prototypes/thpt/shared-items/THPT_TOPIC_XAC_SUAT_G12_B18_B19_PRACTICE_WRITTEN_12ITEM_CANDIDATES_v0.1.md`; blob SHA `156061dd3bb240ddac21183df21a12637e1b5b09`: **12 unique candidate item IDs**, five short Practice B18, five short Practice B19, two Written including **one Anchor tag**, each full stem/key/solution/hint and Written rubrics (/6 and /8). One canonical item ID/answer/history if later cross-placed in SGK; not duplicated.
- Preflight source syntax ID reconciliation 4/4 modules, 4/4 examples, 8/8 proposed outcomes, 12/12 candidate items, two Written one Anchor. Independently validated key rational arithmetic on example + item models. **Not independent academic PASS, no item source S1 review yet.**
- **Explicit academic risks to ask NotebookLM:** G12 SBT printed pages unknown, near-clones G12 B18-P01/W18-01 to EX18-01; B18-P03 to EX18-02; B19-P01/P02 to EX19-01/02. B19-P05 **three-branch** potential optional extension (do not activate as mandatory Core without original S1). Review full problem stem, key, solution and rubric, and Core depth against original S1. A routing statement erroneously suggesting mutually exclusive branches were independent was removed **before** snapshot; now correctly says exactly one of three routes.

**NotebookLM handoff real two files, not ZIP:**
1. `Temp_THPT_TOPIC_XAC_SUAT_G12_B18_B19_KNOWLEDGE_S1_REVIEW_20261028.md`
2. `Temp_THPT_TOPIC_XAC_SUAT_G12_B18_B19_TWELVE_CANONICAL_ITEMS_D3D4_REVIEW_20261028.md`
Both actual UTF-8 Markdown snapshots generated and verified, full text mathematically authored, mirrored to source GitHub; deliver **two individual direct links + 3–6 sentence NotebookLM prompt** in same reply. No JSON.

## 3. Sources verified vs pending (do not misstate)

| Scope | Actual source status |
|---|---|
| G10 SGK/SBT | notebook reviewed PASS scoped |
| G11 SGK/SBT | notebook S1 receipt SGK G11 T2 63–82, SBT G11 T2 42–55 |
| G12 SGK | G11 reviewer **S1 boundary receipt only** SGK G12 T2 B18/B19 pp.42–58; not full B18/B19 D1-D4 review |
| **G12 SBT** | **DIRECT SOURCE RECEIPT PENDING**, do not invent printed pages |
| Full Topic Xác suất 10–12 | **NOT_YET_PASS** due to G12 and Topic Readiness |

No new G12 figures claimed D5 PASS. No G12 SGK Core placement review claimed. G12 Topic practice source content is **public practice**, not protected assessment.

## 4. Next actions and learning safety

- Receive NotebookLM S1 G12 scope + item-level D1–D4 PASS/HOLD. Treat substantive corrections as `DELTA_C_ACADEMIC_MATERIAL` and rereview only affected files/IDs. Do not silently infer PASS.
- Then build **separate Topic Readiness** with new held-out canonical IDs covering valid G10/G11/G12 outcomes, private key/no GitHub stems. Do **not** copy six G10 `SGK_CHAPTER_READINESS` items (RD01..RD06) or exposed G11/G12 Practice items into Topic Readiness. No hint/Tutor/correctness before Final Submit, backend security remains other conversation's job.
- Full Topic has **exactly Knowledge / Practice / Topic Readiness**, NO separate Topic Core page; Golden UI adaptive Knowledge 1–2 levels maintained, no runtime code changes in academic workstream. One canonical ID per item cross-route, shared exposure history, no automatic mastery.
- D5 visual audit if reviewer requests a specific diagram; D6 release conversation only.

```text
TOPIC_G10_FOUNDATION|PASS_SCOPED
TOPIC_G11_SEGMENT|PASS_SCOPED
TOPIC_G12_KNOWLEDGE|4_NOT_REVIEWED
TOPIC_G12_EXAMPLES|4_NOT_REVIEWED
TOPIC_G12_OUTCOMES|8_NOT_REVIEWED
TOPIC_G12_ITEMS|12_UNIQUE_NOT_REVIEWED
TOPIC_G12_SBT_RECEIPT|PENDING
TOPIC_READINESS|NOT_AUTHORED
TOPIC_10_12_OVERALL|NOT_YET_PASS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
