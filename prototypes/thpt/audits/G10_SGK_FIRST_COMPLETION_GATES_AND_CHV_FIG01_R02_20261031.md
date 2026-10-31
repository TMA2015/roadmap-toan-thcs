# DECISION LOCK — Finish full G10 SGK path BEFORE Topic authoring (31/10/2026)

**Owner priority (latest, explicit):** complete the full Grade 10 SGK KNTT learning program B01–B27 / nine chapters before resuming the vertical Topic track. Do not use earlier '9 chapter candidate Readiness PASS' to declare a Grade-10 website or its independent horizontal learning journey complete. This directive overrides our previous self-directed move to Topic Functions PR #672.

## 1. Definition of completion — each gate separate

| Gate | Evidence or decision | 31/10 status |
|---|---|---|
| `G10_SGK_A1_A7_AUTHORING` | full D1–D6 per chapter, examples, Core/Practice/Application, Written/Anchor, SVG, D6, SGK/SBT source register, canonical IDs, scope-limited independent academic receipt | Prior chapter-specific PASS evidence exists; final nine-chapter **source-to-learner-path** reconciliation remains OPEN |
| `G10_SGK_CHAPTER_RD1_SOURCE` | private canonical final assessment material per chapter with independent RD0/RD1 scoped receipts, exact SHA and restore | 9/9 chapter candidate sets (141 original candidate item IDs) source-restored; academic clearance remains per-snapshot, not runtime |
| `G10_SGK_CONTENT_INTEGRATION` | real learner flow Chapter I–IX: all 27 lessons, complete core/practice, diagrams, written and remediation; tested deep links and Golden AP | NOT COMPLETE: ChV B12–B14 source is still Draft #639; release #671 only integrates B13–B14, B12 excluded. ChVI reviewed 8 D6 are staged in release Draft #668 |
| `G10_SGK_CHAPTER_SELF_CHECK` | real Chapter Readiness final-submit controls and independent evidence gate | NOT ACTIVATED: Issue #662 synthetic QA-only; chapter/Topic scoring and Mastery not authorized |
| `G10_SGK_RELEASE_QA` | exact integration commit QA desktop/iPhone, THCS regression, link parity, explicit owner merge/deploy | Release lane; not passed for full 9-chapter combined scope |
| `G10_TOPIC_VERTICAL` | independent Topic learning path complete | **ON HOLD BY OWNER SEQUENCE until full SGK completion**, do not integrate or request further Topic academic batches |

## 2. Narrow B12 source academic blocker now closed (do not conflate with integration)

- The B12 FIG01 R01 SVG incorrectly swapped approximate `a` and true `ā`. Independent owner NotebookLM corrected R02 report: `ACADEMIC_CLEARANCE_FOR_THIS_FIGURE=YES`, only FIG-G10-B12-01; `P0/P1/P2=0`, `DELTA_C`, no changed 27 public questions or FIG02/FIG03.
- Git-pinned correct R02 SVG (authoring Draft #639): `prototypes/thpt/content-drafts/THPT_G10_B12_ERROR_INTERVAL_D5_R02_REVIEWED.svg` blob `fede1bb23334ff7bd66a6f5a6adc39cf856c5d52`; full UTF-8 source SHA256 `d714f63073428b9f6efe17095eb9ee4ab374fdbe0043133f000c9a6bdf0384bc`. It changes exactly 3 SVG text nodes; all geometry/style unchanged. Reviewer receipt: `THPT_G10_CHV_B12_FIG01_D5_R02_OWNER_NOTEBOOKLM_PASS_RECEIPT_20261031.md`.
- Correct mathematics: `a=20,0 cm`, `d=0,1 cm`, `19,9≤ā≤20,1 cm`. This closes **FIG01 academic correction**, not full ChV publisher `R1–R5` gates, nor grants ChV-wide new clearance.
- Next release owner: reconcile #671 B13/B14 partial scope with #639 full B12–14 source + exact new FIG01, two already independently reviewed B12 HELP01/02, and 9 remaining canonical B12 public items. Do not simply claim #671 current-head already contains B12. Exact-head QA plus explicit owner authorization for merge/deploy remain required.

## 3. Planned execution order locked by owner

1. Authoring lane: complete a **single per-chapter A1–A7 final source-to-learner-path audit** for Chapters I–IX, starting ChV B12–B14 and ChVI B15–B18 gaps. Reuse every earlier PASSed asset and retained shared item. A previously PASSed Math question is not re-reviewed because an adjacent SVG or UI layout changed.
2. Release lane: integrate full nine-chapter SGK student learning path on exact final head; source-locked FIG01 corrected; all seven other academic source groups not duplicated. Release gate R1–R5 and owner authorization apply.
3. Authoring lane: after this SGK milestone is materially completed, resume independent vertical Topic learning-path authoring from frozen draft PR #672; pre-review private Topic batch must not be claimed PASSED by SGK receipts.
4. Future authoring: build and review entire new chapter (D1–D6+RD0/RD1+source/comparator) **once per complete chapter**, consolidate only material Delta_C corrections; after independent verdict promote to canonical and verify storage restore. Don't repeat small fragmented reviews unnecessarily.

## 4. Status codes

```text
OWNER_PRIORITY|G10_SGK_FIRST_THEN_TOPICS
G10_9_CHAPTER_CANDIDATE_READINESS_ACADEMIC|REVIEWED_AND_SOURCE_RESTORED
CHV_FIG01_R02_ACADEMIC|PASS_SCOPED
G10_SGK_WHOLE_PATH_AUTHORING_RECONCILIATION|IN_PROGRESS
G10_SGK_WHOLE_PATH_WEBSITE|NOT_COMPLETE
TOPIC_FUNCTIONS_PR672|DRAFT_FROZEN_NO_FURTHER_AUTHORING_BEFORE_G10_SGK
READINESS_OFFICIAL_ACTIVATION|NO
MASTERY_ACTIVATION|NO
MERGE_DEPLOY|NO_AUTOMATIC_PERMISSION
```
