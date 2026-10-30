# G10 KNTT Chương IV B07–B11 · public-formative D1–D6 authoring handoff · 2026-10-30

**PURPOSE:** consolidate *source-scoped authoring evidence* for five SGK lessons before an independent release lane imports canonical assets onto a fresh `main`. This is **not** a new review packet, combined-chapter Academic PASS, released website or held-out Readiness bank. `RELEASE_SCOPE=PUBLIC_FORMATIVE_ONLY`, `AUTHORING_CONTENT_SCOPED=YES`, `R1_R5=PENDING`, `NOT_ACTIVE_CHAPTER_READINESS`, `NO_SCORE/NO_MASTERY`.

## 1. Exact independently reviewed sources (never clone item content)

1. **B07–B08 authoring batch:** reviewer-approved Git snapshot `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md` Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`, original Temp SHA256 `55a9bd4df29e57de82df9d68a18b60e29a31ef57264884633c2f2cac08d2eaa6`. Independent owner NotebookLM receipt `THPT_G10_CHIV_B07_B08_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261029.md` blob `cf4df6ecb603adb258ab5de03f9defa2c695369f`. **18/18 public canonical items** and 10/10 outcomes PASS only for B07–B08. Authoring PR #634 **MERGED**; technical release candidate #645 **Draft** (at handoff inspection), no deploy or broad permission asserted.
2. **B09–B11 authoring batch:** reviewer-approved Git snapshot `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md` Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`, original Temp SHA256 `c3def779161b8c55cc3de8c05be630c388d94f26f8463ce25b04d2feddb11444`. Independent owner NotebookLM receipt `THPT_G10_CHIV_B09_B11_NOTEBOOKLM_D1D6_R01_PASS_RECEIPT_20261030.md` blob `f13acb74206c00cb489e533df7792870f88830e3`. **27/27 public canonical items** and 14/14 outcomes PASS only for B09–B11; authoring PR #637 **Draft**; not merged/deployed.
3. **Independent Chapter Readiness RD0:** ChIV R01 outcome-only blob `7a300fb047b670053b4061dc0339dcf0c708863d`, NotebookLM scope PASS 24/24, but **no actual held-out test**, independent item bank, answer key protection, scoring or Mastery. Historical read-only evidence cannot be taken as live student readiness.

## 2. S1/academic evidence inventory by SGK lesson

| Lesson | SGK KNTT T1 printed pp | SBT KNTT T1 printed pp | Outcome targets in public authoring | Formative canonical items (2 Core + 6 Practice) | Written (Anchor only a tag) | D2 examples | D5 original SVG | D6 HELP_ID | Source batch |
|---|---|---|---:|---:|---:|---:|---:|---:|---|
| B07 | 46–50 | 45–47 | 5 | 8 | 1 | 3 | 1 | 2 | B07-B08 |
| B08 | 51–54 | 48–50 | 5 | 8 | 1 | 3 | 1 | 2 | B07-B08 |
| B09 | 55–59 | 51–54 | 5 | 8 | 1 | 3 | 1 | 2 | B09-B11 |
| B10 | 60–65 | 55–58 | 5 | 8 | 1 | 3 | 1 | 2 | B09-B11 |
| B11 | 66–70 | 59–65 | 4 | 8 | 1 | 3 | 1 | 2 | B09-B11 |
| **TOTAL** | — | — | **24** | **40** | **5** | **15** | **5** | **10** | **45 unique public items** |

**D1:** SGK definitions, conditions, formulas, visuals and examples independently scoped PASS *in the two separate reviewed batches*, not as a newly generated combined-chapter snapshot. Exact primary images and SVG bytes are linked by those immutable sources; Written/Anchor rubric also stored in the canonical authoring source once. No duplicate bank.

## 3. Cross-snapshot ID and source-equivalent alias decision

- Authoring sources contain 10 B07/B08 + 14 B09/B11 = **24 unique** reviewed public outcome IDs. RD0 independently reviewed ChIV also has **24** target IDs; **23 exact name matches** and **1 verified source-equivalent label**. All 45 reviewed public item IDs are distinct across the two authoring batches (10 Core + 30 Practice + 5 Written). This audit does NOT establish zero collision with every deployed item on latest `main`; that remains R1.
- **Canonical public skill ID is `G10-B08-OPPOSITE-SUBTRACTION`**, preserved from original B07/B08 R01 source and draft release JS #645. **RD0 coverage label `G10-B08-OPPOSITE`** refers to the same *opposite vectors + subtraction* competency on SGK B08 pp52–53/SBT pp48–49. The source-equivalent alias is **audit-only lookup**; do not rename the reviewed RD0 snapshot, add a new active skill, change original public candidate IDs, expose a private question or modify browser persistence/learner skill history. Details and field-level source evidence: [24-ID crosswalk](../audits/G10_CHIV_B07_B11_CROSS_BATCH_CANONICAL_OUTCOME_RECONCILIATION_20261030.md).
- `DELTA_B_SOURCE_EQUIVALENT`: changes only this metadata mapping, no mathematical statement, answer, rubric, item placement or hierarchy; `NOTEBOOKLM_REREVIEW=NOT_REQUIRED_WITH_REASON:SOURCE_EQUIVALENT_METADATA`; `RUNTIME_ALIAS_DEPLOY=HOLD` pending latest-main source integration QA and owner release authorization.

## 4. B09–B11 and Chapter IV release handoff acceptance

- **R1 canonical asset integration**: on a fresh base containing current merged B07/B08 source, place 24 B09–B11 formative items and 3 Written with their existing canonical `item_id`, unchanged `content_version`, worked solutions, and one Written/Anchor library; compare against every **current-main** canonical ID. Apply the one source-equivalent *audit* crosswalk only if the runtime read model supports aliases safely and with owner approval; otherwise keep the RD0 label outside the runtime and preserve the single public skill key.
- **R2 exact-head QA**: tests on integration commit, D1 formula/MkDocs MathJax, 3 original B09–B11 SVGs, 6 HELP_ID, content hashes, links, Golden R4 desktop/mobile, THCS/regression, Safari physical device and UAT; do not substitute old source PR passing tests for final combined release head.
- **R3 student clean UI**: learner sees SGK knowledge, worked examples, public Core and Practice, original SVG and Written; no NotebookLM labels, academic versioning, internal reviewer notes or PR references.
- **R4 assessment integrity**: public formative can show opt-in explanations, but Chapter/Topic Readiness is separate, blocked on independently reviewed protected item bank and validated post-Final Submit engine. Any demo is `NO_SCORE/NO_MASTERY`; no browser progress key or Firebase/Gemini changes.
- **R5 owner approval**: requires explicit permission for precise combined release scope and exact-head green CI. **No merge/deploy in this authoring handoff.**

## 5. QA and hold log

```text
CHIV_AUTHORING_SOURCE_BATCHES_INDEPENDENT_PASS|2_OF_2
CHIV_SOURCE_LESSONS_D1_D6_COVERED_IN_TWO_PACKETS|5_OF_5
CHIV_PUBLIC_ITEM_IDS|45_OF_45_UNIQUE_WITHIN_TWO_PACKETS
CHIV_PUBLIC_OUTCOME_IDS|24_UNIQUE
CHIV_RD0_SCOPE_OUTCOME_IDS|24_REVIEWER_PASS
CHIV_RD0_TO_PUBLIC_EXACT_STRINGS|23
CHIV_RD0_TO_PUBLIC_SOURCE_EQUIVALENT_ALIAS|1
CHIV_PUBLIC_SOURCE_SOURCE_SHA_CHANGED|NO
RUNTIME_CANONICAL_BANK_DEDUP|PENDING
RUNTIME_ALIAS_DEPLOY|HOLD
ASSESSMENT_ITEM_BANK|NOT_REVIEWED
RELEASE_AUTHORIZATION|NO
```

**NEXT:** release integration is a separate branch/PR following existing project R1–R5, not direct commit to this authoring branch as student runtime. B09–B11 authoring packet is academically ready in its reviewed scope, not yet released; maintain Chapter IV separate from Topic Readiness.
