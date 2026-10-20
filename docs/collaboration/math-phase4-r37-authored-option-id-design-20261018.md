# Math R37 — Authored option identity design for 40 R27 MCQs (QA-only prototype)

**Date:** 2026-10-18  
**Previous gates:** R33 + R35 Owner academic source/layer decisions cover 40/40 items; R36 historical taxonomy preflight is independent and remains a draft. No R37 artifact is approved to enter a live practice bank.  
**Design file:** `review-packets/math-phase4-r37-option-identity/TEMP_R37_40MCQ_160_STATIC_OPTION_BINDING_PROPOSAL_20261018.json`.

## Problem

The 40 original MCQs each contain four authored option strings in an array and `answer: 0` as the positional canonical answer. Existing `tags.skill` strings are **legacy tags**, not newly reviewed Skill Family assignments. The `R19` exact-action identity envelope expects a stable `option_id` and a **64-character SHA-256** `source_sha256`; historical bank Git blob identifiers are **40-character SHA-1** and must not be substituted for it. Without stable authored options bound at presentation time, a shuffled display index or simple boolean `correct` cannot prove which wrong option a learner selected.

## Proposed, not yet authorized: versioned authored-option binding

Each *authored source slot* (the order in its pinned canonical authoring JSON, **not** display position) is assigned one **candidate** stable token:

```
OPT_<EXACT_ITEM_ID>_V1_S<AUTHORED_SLOT>
Example: OPT_NUM02V1_121_V1_S0
```

There are exactly **40 source-pinned records / 160 proposed option tokens**. The static proposal binds each token to `item_id`, original authored slot, **exact option text**, and `correct` derived from the canonical answer. This is a **reviewable frozen snapshot**, not an automatic ID generator at runtime and not a production edit. The format satisfies R19's nonempty URL-safe token constraints. A future schema may adopt opaque UUID-like tokens instead, but it must maintain the same binding invariants.

The read-only prototype `math-v2-r37-static-option-identity-review.js` and test:

1. Verify all 40 original R27 receipts and all current bank contents. The R34 correction is the **sole** allowed change to `QUA12V1_121` stem. Sibling `QUA12V1_122–123` still match their historical record despite sharing R34's bank-file SHA.
2. Demand exact `option_id + item_id + authored_slot + text + correct` for all 160 choices, unique within/between 40 items. Any copy edit, answer/key edit, canonical option reorder or bank SHA drift **fails closed** until a new reviewed snapshot is issued.
3. Compute **current per-item `source_sha256 = sha256(JSON.stringify(exact current record))`**, a 64-digit identifier distinct from the bank Git blob SHA. R34's revised wording changes the per-item source digest as expected; its option tokens may remain unchanged because the authored options remain unchanged.
4. When rendering, attach the original `option_id` to the option before any display shuffle. Reorder **whole bound option objects** only; never derive an identity from `displayIndex` after permutation.
5. Resolve a submission by `option_id`, source digest and exact item, and derive correctness from the reviewed option binding. Different selections during one presentation must be detected by the R19 compare contract, which **must not** write to old R16 / learner stores.
6. Verify 40×multiple display orders and the existing R19 sandboxed capture: 160 tokens remain distinguishable, two different answer actions share the same submission key but have distinct fingerprints, and neither one commits.
7. Keep the **131-family registry** and **3,114-row legacy compiled policy** unchanged. Newer bank `tags.skill` alone cannot grant assessed Skill Family role. Layer classifications are academic metadata, not Skill credit eligibility.

## Update and review discipline

**Before future question or option text edits:** The source version and digest must change. No tool should silently regenerate production IDs from current positions. A reviewer must compare the old and new authored alternatives, determine whether their semantics are preserved or replaced, and version the signed mapping. Reordering canonical bank arrays without stored option identities requires an explicit reviewed migration rather than guessing which old slot corresponds to which new choice. A stem-only revision, such as R34, can retain option IDs if the unchanged alternatives are individually verified.

**R19 event readiness remains BLOCKED** until owner approves an actual canonical schema carrying option identities, runtime presentation binds them *before* shuffle, and atomic durable action capture is implemented and tested across retries, browser reloads and device cases. A QA-only simulation does not substitute for these gates.

## Strictly protected boundaries

- `CANONICAL_BANK_OPTION_IDS_PERSISTED=false`; `REVIEWED_OPTION_ID_AUTHORIZED=false`
- `R19_DURABLE_WRITER_ENABLED=false`; `SKILL_FAMILY_MAPPING_APPROVED=false`
- `REAL_LEARNER_SKILL_CREDIT_ENABLED=false`; `READINESS_MASTERY_ENABLED=false`
- `HISTORICAL_REGRADING_OR_BACKFILL=false`; `SITE_UI_DEPLOYMENT_CHANGE=false`
- `MERGE_AUTHORIZED_BY_GREEN_CI=false`

The R37 Draft PR may serve as a design review and QA evidence packet, but *not* as permission for production schema edits. The next decision should approve or reject this scheme before writing actual `option_ids` to live banks.


## Additional Skill Family mapping risk found in the existing 131-family registry

A separate read-only comparison of the eight original R27 legacy tag groups against `skill-taxonomy-v2-registry-r1.json` (blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`) reveals **academic item-layer PASS does not imply an existing exact assessed-family row**:

| Group | # | Registry candidate and existing relationship | Current gate |
|---|---:|---|---|
| CT02 `lam-tron-so` | 12 | `NUM-SETS` includes it as a *diagnostic subskill*, no exact legacy mapping | **REVIEW** |
| CT02 `phep-tinh-so-huu-ti` | 6 | `NUM-FRACTION-OPS` includes it as a diagnostic subskill, no exact legacy mapping | **REVIEW** |
| CT02 `so-vo-ti` | 3 | `NUM-SETS` diagnostic subskill, no exact legacy mapping | **REVIEW** |
| CT02 `can-bac-hai-so-hoc` | 3 | No exact family diagnostic subskill. Existing `can-bac-hai` mapping is `SUPPORTING_SKILL` with `family_id=null` | **NO ASSESSED FAMILY HOLD** |
| CT02 `gia-tri-tuyet-doi` | 3 | Exact `NUM-ABS` / `ASSESSED_SKILL` / Core legacy mapping | **CANDIDATE ONLY** |
| CT03 `mo-hinh-ti-le` | 4 | Exact old `RATIO-MODEL` / `ASSESSED_SKILL`, but **Entrance10** while owner approved these 4 questions **KNTT-Core** | **LAYER CONFLICT HOLD** |
| CT04 `chia-da-thuc-mot-bien` | 6 | `ALG-DIV-MONOMIAL` diagnostic subskill but not exact legacy mapping | **REVIEW** |
| CT12 `lien-he-do-thi` | 3 | Exact `QUAD-GRAPH` / `ASSESSED_SKILL` / Entrance10 legacy mapping | **CANDIDATE ONLY** |

**Illustrative resolution for review, not a new approval:** the four CT03 word problems have materially different reasoning. `RAT03V1_121` (baking quantity) and `RAT03V1_123` (unit price) use **direct proportionality** (candidate `RATIO-DIRECT`, KNTT-Core); `RAT03V1_122` (map scale) and `RAT03V1_124` (model scale) use **basic ratio/scale** (candidate `RATIO-BASIC`, KNTT-Core). This split better respects the owner's *item* layer approval than importing the older tag's Entrance10 family into all four. It must receive independent per-item Skill Family review and owner authorization before it can change policy or award credit.

**Readiness status:** exactly **0/40 new MCQs may automatically earn a reviewed Skill credit** merely from the mappings described here, including the 6 with exact legacy mapping. R37's 160 proposed stable option tokens solve only a *necessary identity precondition* in a QA simulation, not the independent source-to-Skill Family, retry/durability, device validation, or owner approval gates.

