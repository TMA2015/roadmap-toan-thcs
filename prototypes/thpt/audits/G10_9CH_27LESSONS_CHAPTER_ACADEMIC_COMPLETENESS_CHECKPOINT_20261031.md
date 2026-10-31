# Toán 10 KNTT — 9-chapter SGK academic snapshot closure & chapter-batch policy (31/10/2026)

**Authoring audit, not a new NotebookLM overall verdict; not a website release or a claim that the Topic learning path is complete.**

## 1. Current academic snapshot inventory

| Chapter | SGK lessons | Reviewed outcome IDs* | Effective private RD1 candidate items | Source version |
|---|---:|---:|---:|---|
| CHI | 2 | 11 | 14 | R02 |
| CHII | 2 | 10 | 14 | R01 |
| CHIII | 2 | 10 | 14 | R01 |
| CHIV | 5 | 24 | 21 | R01 |
| CHV | 3 | 14 | 18 | R01 |
| CHVI | 4 | 19 | 18 | R1 |
| CHVII | 4 | 23 | 22 | R03 |
| CHVIII | 3 | 12 | 14 | R01 |
| CHIX | 2 | 10 | 6 | R0 |
| **Total** | **27** | **133** | **141 unique IDs** | **9 frozen chapter sets** |

\* 133 = per-chapter outcome register cardinalities **including** Support, Optional and merged coverage. It is NOT 133 separately scored Core skills. No double count of one canonical question across placements.

These totals reconcile **previously owner-delivered independent NotebookLM verdicts**: ChI R02 14/14; ChII & ChIII R01 14/14 each; ChIV R01 21/21; ChV R01 18/18; ChVI original R0 18/18 with separately reviewed 18 R1 rubrics; ChVII R03 22/22 (10 repaired, 12 retained); ChVIII R01 14/14; ChIX R0 6/6. Academic clearances remain **snapshot-specific**.

**Source custody:** seven new per-chapter, private canonical item libraries for ChI–V, VII–VIII were promoted from their exact reviewer-approved item text with zero edited stem/answer/solution/rubric, with manifest and 14/14 write/read-back exact SHA checks (7 canonical + 7 original manifests), then final seven restore-PASS manifests re-uploaded and checked. ChVI and ChIX already had private canonical and restore PASS. The nine-chapter private master ledger was also restored byte-identically.

**Private store:** ChatGPT Library `Math App / THPT_Academic_Review_Archive`. No private item/question/solution/rubric published to this repository. Public metadata register at `prototypes/thpt/audits/G10_9CH_27LESSONS_SGK_READINESS_ACADEMIC_METADATA_REGISTER_20261031.json` pins source and effective canonical SHA. Private master register SHA256 `be262ea8c7846c34ee22889228d1255da1f86387848e29c306be821b6437494a` (restore PASS).

## 2. Source strategy — do not re-review already approved material

- Existing **PUBLIC_FORMATIVE_ONLY** D1–D6 sources for B01–B27 are reviewed in the previous per-chapter authoring receipts: ChI–IV and VII–IX on the corresponding `ready/G10-SGK-*` manifests; ChV on Draft authoring PR #639 and ChVI D6 source extension on Draft PR #642. Some technical integrations are Draft; this is **not** a production assertion.
- For each of the nine SGK chapters, a distinct RD0/RD1 candidate set already has academic review receipts. Do **not** request another NotebookLM pass merely to aggregate receipts into a chapter dossier; verify the prior source hashes, scope and outcome mapping.
- The authoritative ChVI candidate set is the **recovered 18 original canonical IDs** with R1 detailed rubrics that received independent PASS. Twenty alternative `THPT-G10-CHVI-RD1-01..20` remain **excluded/quarantined** and are not an unresolved blocker for the existing, reviewed old18 bank, because they are not selected for deployment or official evaluation. Do not silently substitute or double-register them.
- ChVII R03 structural anti-clone reviewer PASS applies to the new 22-item snapshot; the retired exposed `THPT-G10-CHVII-RD02` stays retired. ChVIII R01 preserves 13 Core-candidate items and one Optional no-Core-score; ChI SET_EQUALITY remains merged, not separately scored.
- If a source is equivalent after formatting/citation only, classify `DELTA_A_UI` / `DELTA_B_SOURCE_EQUIVALENT` and record a proof; do not demand a new chapter review. If mathematical content, conditions, grading or coverage genuinely change (`DELTA_C`), batch all affected changes **once per chapter** at the next review gate; `DELTA_D` blocks only the affected scope.

## 3. New authoring flow for remaining G10 program (then future G11/G12)

1. **Close entire chapter before asking NotebookLM:** one coherent packet with D1 theory and necessary graphics, D2 worked examples, D3 Core/Practice/Application, D4 shared Written/Anchor, D5 visual proof, D6 remediation, RD0 Chapter Outcome Matrix, RD1 independent test candidates, canonical item/skill/HELP/figure mapping, SGK/SBT S1 page receipt, Public Formative comparator and Delta log.
2. **Single review per complete chapter snapshot**: review D1–D6 + final Chapter Readiness together when newly authored; reviewer reports verdicts *per lesson, outcome and item* so an actual P0/P1/P2 can be fixed locally without restarting unaffected work. After all revisions in the chapter are assembled, at most a scoped batch delta request for remaining material; no arbitrary repeated 'one HELP/one rubric' review cycles.
3. **Prevent review-loss on day of verdict:** before NotebookLM send, archive complete exact Temp and the original canonical input, SHA256/bytes/IDs; immediately after PASS, promote one canonical item per `item_id`, archive raw reviewer report, verify source-to-canonical verbatim math/rubric parity and restore both from private Library. **A1/A6 source gate cannot close without restore PASS.**
4. **Treat SGK Chapter and Topic as independent curricula:** G10 SGK horizontal 9-chapter academic candidates are inventoried here. `TOPIC_READINESS` and complete vertical Topic modules must be audited separately across grades/skills; no transfer of SGK readiness PASS. Topic practice may share canonical public items via placement but not clone them.
5. **Release branch remains separate:** old/demo/new Readiness 0 activated by this work; no pre-Final-Submit feedback/hints/AI; no official score/Mastery writes; exact-head CI, learner testing, THCS regressions, and owner-specific merge/deploy permission stay in R1–R5.

## 4. Open work, framed as distinct gates rather than endless academic re-review

- **G10 SGK D1–D6 + RD authoring snapshots:** reviewed and now source-locked at candidate level for nine chapters. This is not a blanket S1 full-path Final PASS newly granted today; each receipt remains authoritative for its own scope.
- **G10 Topic vertical independent completion:** still requires its own inventory, topic-by-topic D1–D6 completeness, independent Topic Readiness and outcome mapping. Do not label entire grade10 website or both complete paths finished yet.
- **Live website assessment:** remains release-lane work (Issue #662 and relevant Draft PRs). No code/production changes in this authoring audit.

**Checkpoint:** `G10_SGK_RD_SOURCE_CUSTODY=9/9`, `CANDIDATE_ITEMS=141`, `CHAPTER_SCOPED_ACADEMIC_RECEIPTS=PRESENT`, `TOPIC_PATH=SEPARATE_AUDIT_REQUIRED`, `RELEASE_AUTHORIZATION=NO`, `MASTERY_ACTIVATION=NO`.
