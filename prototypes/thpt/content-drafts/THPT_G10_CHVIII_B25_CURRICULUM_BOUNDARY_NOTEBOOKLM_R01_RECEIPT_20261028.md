# G10 B25 · NotebookLM Curriculum Scope Boundary R01 — verdict receipt

**Date:** 2026-10-28. **Source:** owner-provided independent NotebookLM review. **PACKET_ID:** `THPT-G10-CHVIII-B25-CORE-BOUNDARY-DELTA-20261028-R01`. **Permanent sources:** 01–05 THPT v2.0 only. This document records **the reviewer's determination**, not independent browsing of every SGK page, release authorization, or engine schema change. GitHub branch: `content/thpt-g10-chvii-chviii-authoring-20261028`.

## Verdict: exact six IDs
```text
SOURCE_RECEIPT_B25|SGK_TOAN_10_TAP_2_KNTT,TRANG_72-77;SBT_TOAN_10_TAP_2_KNTT,TRANG_55-56
ITEM_THPT-G10-B25-C01|CORE_ELIGIBLE
ITEM_THPT-G10-B25-C02|CORE_ELIGIBLE
ITEM_THPT-G10-B25-P02|OPTIONAL_EXTENSION
ITEM_THPT-G10-B25-P06|OPTIONAL_EXTENSION
ITEM_THPT-G10-CHVIII-RD05|OPTIONAL_EXTENSION
ITEM_THPT-G10-CHVIII-RD06|OPTIONAL_EXTENSION
ID_RECONCILIATION|EXPECTED=6|REVIEWED=6|MISSING=0|UNEXPECTED=0|DUPLICATED=0
ACADEMIC_OVERALL|PASS_WITH_SCOPE_TIERING
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

| Canonical item | Reviewer math finding | Approved curriculum scope (for authoring) | Action |
|---|---|---|---|
| `THPT-G10-B25-C01` | correct coefficient (a+b)^4 | `CORE_ELIGIBLE` | Keep candidate SGK Core |
| `THPT-G10-B25-C02` | correct coefficient (1+x)^5 | `CORE_ELIGIBLE` | Keep candidate SGK Core |
| `THPT-G10-B25-P02` | correct; power 6 and reciprocal term | `OPTIONAL_EXTENSION` | Review-only layer marker, do not mandate |
| `THPT-G10-B25-P06` | correct; power 7 and odd coefficient summation | `OPTIONAL_EXTENSION` | Review-only layer marker, do not mandate |
| `THPT-G10-CHVIII-RD05` | prior Math PASS retained; power 6 | `OPTIONAL_EXTENSION` | Remove from **mandatory SGK Chapter VIII Readiness slot** (candidate only; no live slot currently) |
| `THPT-G10-CHVIII-RD06` | prior Math PASS retained; powers 6/7 and proof | `OPTIONAL_EXTENSION` | Remove from **mandatory SGK Chapter VIII Readiness slot** (candidate only; no live slot currently) |

## Reviewer S1 rationale and scope

Reviewer's determination: Grade 10 KNTT mandatory core Newton expansion works with n=4 and n=5; n>=6, rational Laurent-like powers, and f(1)/f(-1) odd/even coefficient-sum strategy are elective extensions (SGK printed pp.72–77, SBT pp.55–56). Preserve old math verdict and canonical identity and treat the optional items as extension references, not mandatory mastery/Readiness evidence. The classification is an **academic-role delta**; it does not overwrite the exercise text/keys or remap shared item identities.

The NotebookLM recommendation to simplify an n=6 stem by changing to n=5 changes math content and answer, so **do not edit an existing canonical item in place for Readiness**. Use **new, unique held-out assessment IDs** for the new basic-scope questions, review under `DELTA_C_ACADEMIC_MATERIAL`; no automatic PASS. Prior `RD05` and `RD06` stay valid optional-extensional math candidates (not retired for exposure). Exact protected new stems/keys/solutions must be delivered only in owner-side Temp_ packets, not static GitHub/browser code.

## Suggested tier labels: metadata only, no schema claim
- `THPT-G10-B25-P02`: reviewer recommends `curriculum_layer: SUPPORT_EXTENSION` (not a verified runtime enum).
- `THPT-G10-B25-P06`: reviewer recommends `curriculum_layer: ELECTIVE_SPECIALIZED` (not a verified runtime enum).
- `RD05/RD06`: `OPTIONAL_EXTENSION`, **mandatory chapter Readiness ineligible**.
- `B25-C01/C02`: `CORE_ELIGIBLE` as authoring-level placement evidence, not release approval.
- `THPT-G10-B22-C01`: prior P1 flag for eccentricity remains unresolved separately; do not extend current B25 verdict to B22.

## Updated gates
```text
BASE_ACADEMIC_PACKET|THPT-G10-CHVIII-B25-CORE-BOUNDARY-DELTA-20261028-R01
DELTA_CLASS|DELTA_C_ACADEMIC_MATERIAL
CHANGED_MATH_STEM|NO
CHANGED_ANSWER_KEY|NO
CHANGED_CANONICAL_ID|NO
B25_CORE_TWO_ITEMS|CORE_ELIGIBLE_SCOPED
B25_OPTIONAL_PRACTICE_TWO_ITEMS|OPTIONAL_EXTENSION_SCOPED
CHVIII_RD05_RD06|OPTIONAL_EXTENSION_NOT_MANDATORY_READINESS
REPLACEMENT_CORE_READINESS|NEW_IDS_AND_DELTA_REVIEW_REQUIRED
D3_D4_ALL_63|NOT_REVIEWED
RELEASE_CLEARANCE|NO
ACADEMIC_PASS_WHOLE_CHAPTER|NO
MERGE_DEPLOY|NO
```
