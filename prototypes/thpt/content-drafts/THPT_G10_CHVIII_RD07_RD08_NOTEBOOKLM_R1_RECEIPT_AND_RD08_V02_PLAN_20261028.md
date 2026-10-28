# NotebookLM receipt · ChVIII B25 readiness RD07/RD08 · R1 (2026-10-28)

**User-provided independent reviewer verdict** · `PACKET_ID=THPT-G10-CHVIII-B25-READINESS-CORE-REPLACEMENTS-20261028-R1` · `PERMANENT_SOURCE_SET=01-05_THPT_PERMANENT_v2.0_ONLY`.

## Exact reviewer record

```text
SOURCE_RECEIPT_B25|SGK_TOAN_10_TAP_2_KNTT,TRANG_72-79;SBT_TOAN_10_TAP_2_KNTT,TRANG_55-59
ITEM_THPT-G10-CHVIII-RD07|PASS
ITEM_THPT-G10-CHVIII-RD08|HOLD
ID_RECONCILIATION|EXPECTED=2|REVIEWED=2|MISSING=0|UNEXPECTED=0|DUPLICATED=0
ACADEMIC_OVERALL|HOLD_REVISIONS_REQUIRED
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```

- `THPT-G10-CHVIII-RD07`: Math, scoped Core n=5, rubric /4 and held-out reviewer `PASS` for the **reviewed RD07 snapshot only**, placement candidate `CHVIII-READ-B25-01`. **Not live, no scoring/mastery, no server-side readiness validation claimed**.
- `THPT-G10-CHVIII-RD08`: Math of original v0.1 correct but `HOLD` due to near-clone of exposed worked example `EX-G10-B25-02` (same `f(1)` coefficient-sum exercise with simple value change). Slot `CHVIII-READ-B25-02` remains `HOLD_NOT_ACTIVE`. No Academic PASS transfers to this candidate.
- Independent cross-check of reviewer's proposed change: original bank `THPT-G10-B25-P04` already asks a coefficient in the **exact polynomial** recommended by NotebookLM as RD08 replacement, `(x-2)^5`. Although other requested outputs would differ, this proposal would reuse an already visible Practice expression in held-out Readiness. **Do not adopt this reviewer example verbatim as an automatic fix.**
- New mathematically verified `RD08` candidate **revision v0.2**, still same single pre-release canonical ID and same slot, uses a new inverse-coefficient-to-parameter plus second coefficient plus coefficient-sum task, proposed rubric /6. No stem/key/rubric of v0.2 in this GitHub receipt. Real private review Markdown: `Temp_THPT_G10_CHVIII_RD08_REVISION_V02_DELTA_REVIEW_20261028.md`. `RD08_V02_REVIEW=REQUIRED`, `RD08_V02_ACADEMIC=NOT_REVIEWED`. As v0.1 was never published, revision may retain ID subject to reviewer provenance / immutable-ID rules; if the reviewer requires new ID due to exposure, follow that, don't fake PASS.

## Item and chapter status / provenance

| ID or group | Scope | Status |
|---|---|---|
| `CHVII-RD01,RD03..RD08` | ChVII SGK chapter Readiness candidates | Original maths-snapshot PASS, still inactive |
| `CHVII-RD02` | Old ChVII slot | RETIRED_EXPOSED_CANDIDATE permanently |
| `CHVII-RD09` | Replaces ChVII-RD02 slot | Delta reviewer Math/Rubric/Heldout PASS, still inactive |
| `CHVIII-RD01..RD04` | ChVIII chapter Readiness candidates | Original maths-snapshot PASS, still inactive |
| `CHVIII-RD05,RD06` | Scope extension only | Math PASS but not eligible for mandatory Core Readiness |
| `CHVIII-RD07` | Core replacement for RD05 | Delta reviewer PASS, still inactive |
| `CHVIII-RD08` v0.1 | Core replacement for RD06 | Reviewer HOLD due to near-clone, no release |
| `CHVIII-RD08` v0.2 | Same unshipped item candidate revision | Authored privately; mathematics preflight done, **awaits delta reviewer verdict** |

**14 planned mandatory chapter Readiness slots**: ChVII 8 reviewed academic-math PASS candidates; ChVIII 5 reviewed academic-math PASS candidates and one RD08 slot still HOLD. Thus **13/14 reviewer-PASS candidate slots, one HOLD**, with **0 active production slots**. This is not authorization to grade mastery.

**63 existing C/P/Application/Written IDs** remain `D3_D4_NOT_REVIEWED` despite 35/35 outcome S1 receipts and D1–D2 scoped PASS. No Topic Readiness PASS from SGK results. B25 item tiering R01 and B22-C01 scope caveat unchanged. Existing answer keys/attempts/mastery IDs unchanged. No merging or deploying.

## Changeset gate

```text
BASE_ACADEMIC_PACKET|THPT-G10-CHVIII-B25-READINESS-CORE-REPLACEMENTS-20261028-R1
AFFECTED_ITEM_IDS|THPT-G10-CHVIII-RD07;THPT-G10-CHVIII-RD08
DELTA_CLASS|DELTA_C_ACADEMIC_MATERIAL
RD07_VERDICT|PASS_SCOPED_CANDIDATE_ONLY
RD08_V01_VERDICT|HOLD
RD08_V02_VERDICT|NOT_REVIEWED_YET
RD08_REVIEWER_SUGGESTION_EXPOSURE_COLLISION|B25-P04_SAME_POLYNOMIAL
READINESS_CHVIII_SLOTS|5_PASS_CANDIDATES_1_HOLD
READINESS_CHVII_SLOTS|8_PASS_CANDIDATES_0_HOLD
D3_D4_BANK_63|NOT_REVIEWED
ANSWER_KEY_EXPOSED_IN_PUBLIC_GITHUB_BY_THIS_CHANGE|NO
MERGE_DEPLOY|NO
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
```
