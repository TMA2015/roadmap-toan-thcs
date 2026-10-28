# THPT Topic Probability G12 B18–B19 · NotebookLM R0 receipt with one exact-snapshot discrepancy

**Date:** 2026-10-28. **Source:** Owner-provided independent NotebookLM report `THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0`. **Scope:** academic review of G12 content, not release clearance. **A material mismatch is flagged for targeted EX-G12-B19-02 snapshot reconciliation; do not silently substitute numerical inputs or answers**.

## Original reviewer result (verbatim machine-readable fields)

```text
PACKET_ID|THPT-TOPIC-PROBABILITY-G12-B18-B19-D1D4-AUTHORING-20261028-R0
MASTER_PLAN_VERSION|THPT-v2.0
PERMANENT_SOURCE_SET|01-05_THPT_PERMANENT_v2.0_ONLY
SOURCE_RECEIPT_G12_SGK|SGK_TOAN_12_TAP_2_KNTT,TRANG_42-58(CHUP_VI_B18_B19)
SOURCE_RECEIPT_G12_SBT|SBT_TOAN_12_TAP_2_KNTT,TRANG_40-64(CHUP_VI_B18_B19)
GRADE_SCOPE_RECONCILIATION|G12_CORE_VALIDATED(BAYES_CONDITIONAL_BELONGS_TO_G12)
KNOWLEDGE_REGISTER|PASS(4/4_MODULES)
EXAMPLE_REGISTER|PASS(4/4_EXAMPLES)
OUTCOME_ALIGNMENT_G12|8/8_CANONICAL_OUTCOMES_MAPPED
ITEM_RECONCILIATION|EXPECTED=12|REVIEWED=12|MISSING=0|UNEXPECTED=0|DUPLICATED=0
PREVIOUS_VERDICTS_PRESERVED|G10_FOUNDATION_PASS;G11_SEGMENT_PASS
LESSON_B18_VERDICT|PASS
LESSON_B19_VERDICT|PASS
ACADEMIC_OVERALL_G12_SEGMENT|PASS
TOPIC_10_12_OVERALL_STATUS|INCOMPLETE_PENDING_TOPIC_READINESS
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

**Source receipt printed pages:**
- SGK Toán 12 KNTT Tập 2 ChVI B18 pp.42–49, B19 pp.50–56, chapter-end pp.57–58;
- SBT Tập 2 B18 pp.40–48, B19 pp.49–58, chapter-end pp.59–64.
- G12 4 Knowledge modules; 4 D2 examples; 8 outcomes; 12 item IDs (10 Practice + 2 Written including one Anchor tag). Reviewer marks all 12 items PASS and P0=0. Original G10 and G11 separate snapshot PASS retained.

## Important review discrepancy — EX-G12-B19-02 (targeted independent check REQUIRED)

| Field | Exact authored G12 Knowledge snapshot, Git blob `8a47a34cc4d06972c2922cf79e1d013045fee311` | NotebookLM reviewer D2 example summary |
|---|---|---|
| Choosing X, Y | `P(X)=1/3, P(Y)=2/3` | `P(X)=2/5, P(Y)=3/5` |
| Box X | 2 red, 3 blue, so `P(R|X)=2/5` | reviewer says `P(R|X)=1/2`, but also describes X as 2 red, 3 blue (internally inconsistent) |
| Box Y | 3 red, 1 blue, so `P(R|Y)=3/4` | 3 red, 1 blue, `P(R|Y)=3/4` |
| Answer to `P(Y|R)` | `15/19` | `9/13` |

**Math check of original:** `P(R)=(1/3)(2/5)+(2/3)(3/4)=2/15+1/2=19/30`. `P(Y|R)=((2/3)(3/4))/(19/30)=15/19` **correct for original**.

**Review report:** `P(R)=(2/5)(1/2)+(3/5)(3/4)=13/20`, `P(Y|R)=9/13` **correct for different chosen probabilities**, but doesn't match authored X 2 red/3 blue. The receipt thus has a **snapshot/source fidelity mismatch**, rather than a proved original arithmetic error. `EX-G12-B19-02=HOLD_REVIEW_RECONCILIATION` at authoring acceptance level until reviewer explicitly verifies the exact original. Preserve all G12 reviewer-reported PASS fields as history, but do NOT advertise **4/4 exact example acceptance** or whole G12 final content signoff while that one ID is inconsistent.

**Next packet:** a real `Temp_` Markdown single-example delta with original exact stem/key/solution, reviewer conflicting summary, Git blob/verified primary source pages. This is `DELTA_C_SNAPSHOT_MISMATCH` gate because numerical condition, key and explanation differ between reviewer description and source; do not edit authoring example stem or answer unless S1 review shows actual error. It is NOT a rerun of unchanged 12 item bank.

## Reviewer-approved academic role adjustment (metadata only)

- `THPT-G12-B19-P05` three-branch total-probability/Bayes Practice **PASS mathematically**, but **`curriculum_layer: SUPPORT_EXTENSION`**, not mandatory G12 SGK Core. This is placement/academic-level metadata; do **not** assume `SUPPORT_EXTENSION` is a runtime enum or rewrite its stem/key/answer.
- `THPT-G12-CHVI-W19-ANCHOR-01`: `anchor_tag=true` on a single Written item. No duplicate key/attempt ID.
- These two placement facts are tracked in `THPT_TOPIC_PROBABILITY_G12_REVIEWER_ROLE_OVERLAY_v0.1.md`; reviewed source files stay frozen.

## Immutable release boundary

- G10 G11 scoped PASS unchanged. G12 R0: 4/4 modules, 8 outcomes, 12/12 items and **reported** 4/4 examples PASS, **EX-G12-B19-02 requires exact-source reviewer check**.
- Topic Readiness cross-grade **NOT_AUTHORED/NOT_REVIEWED**, no public held-out key, no production activation.
- Distinct Topic has exactly three sections Knowledge/Practice/Topic Readiness, no Topic Core. One canonical ID/key/history across SGK Core and Topic basic practice via role mapping; cross-route exposure tracked. No hints/answers/correctness before Final Submit in protected Readiness.
- This conversation academic content only; other conversation website, Golden UI R4, D6, secure scoring, merge/deploy. Academic clearance for release NO.

```text
G10_FOUNDATION|PASS_RETAINED
G11_SEGMENT|PASS_RETAINED
G12_R0_REPORT|PASS_REPORTED
G12_D1_MODULES|4_OF_4_PASS
G12_D2_EXAMPLES|3_SCOPED_CONSISTENT_1_EX_G12_B19_02_SNAPSHOT_HOLD
G12_D3D4_ITEMS|12_OF_12_PASS_REVIEWER
G12_OUTCOMES|8_OF_8
G12_B19_P05_LAYER|SUPPORT_EXTENSION
TOPIC_10_12_OVERALL|INCOMPLETE_PENDING_TOPIC_READINESS_AND_EX_RECONCILIATION
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
