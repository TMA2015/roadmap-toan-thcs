# W3A-WR — Post-review implementation gate R2 (CĐ05–07)

**Date:** 2026-10-17 · **Review packet:** `MATH-CT05-07-W3A-WR-R1-20261016` · **Decision source:** [NotebookLM receipt](MATH-CT05-07-W3A-WR-R1-20261016_NOTEBOOKLM_VERDICT_RECEIPT.md) · **Academic verdict:** `PASS_FOR_AUTHORING_REVIEW` (3/3). **Release status:** NOT APPROVED / NO PRODUCTION CHANGE.

## Recovery after interrupted response

GitHub `main` was confirmed at `84aeed994fffa105bcaadb63cd17466155cc7a87` (#479) when the latest review was received; the follow-up response was interrupted before any W3A-WR verdict registration or production edits. Source W3A-WR and W3B/W3C Markdown packets, 63 published WX exercises and all Core/Practice banks were intact.

## One source ID → exactly one canonical destination

| Original ID | Reviewer conclusion | Canonical proposal | Deployment condition |
|---|---|---|---|
| `05-ENT-01` | `APPROVE_NEW_WX` | **new** `WX05-ENT-001`, CT05, `learning_layer=Entrance10`, `level=ENTRANCE10`, written self-check only | Owner accepts candidate; new WX has complete problem, solution steps, hints if available, 4-point rubric, source_ref and academic receipt |
| `06-CH-01` | `APPROVE_NEW_WX` | **new** `WX06-CH-001`, CT06, `learning_layer=Specialized-Challenge`, proposed `level=CHALLENGE` | **BLOCKED by current UI/QA vocabulary** until Challenge metadata/filter support is reviewed, implemented and tested; do not disguise as `Entrance10` or `KNTT-Core` |
| `07-WR-11` | `PLACE_CORE_ONLY` | **reuse** existing `pt07-core-2`, not another Core Card and **no new WX** | Add a concise “Vì sao giữ ĐKXĐ?” trap/example to existing teaching copy, preserving its original approved explanation, ID, skills and existing Core Micro items |

### Crucial technical finding for Challenge

The production library is `docs/assets/data/written-exercises/written-exercise-library-v1.json`, with 63 published exercises, `status=ACTIVE_APPEND_ONLY`. `scripts/test-written-exercise-library-v1.js` currently accepts only `KNTT-Core`, `Core-Support`, `Entrance10` for `learning_layer`. The learner page selector in `docs/assets/javascripts/written-exercise-library-v1.js` offers `CORE_BASE`, `CORE_APPLY`, `ENTRANCE10` only. However CT06 learning workspace already recognizes the non-gating extension `fac06-challenge-1` at layer `Specialized-Challenge`.

Therefore, **do not directly append** `WX06-CH-001` while metadata and filters are inconsistent. The smallest complete fix is to add `Specialized-Challenge` to the library layer contract, `CHALLENGE` to its level selector, a readable learner label “Thử thách”, and source-lock QA ensuring challenge tasks never count as compulsory Core readiness. It must remain a **written paper exercise in the shared library**, not a new third exercise format or a duplicate datastore.

### CT07 existing coverage

`pt07-core-2` already teaches **“Đẳng thức sau rút gọn chỉ đúng trên miền xác định ban đầu”**, with worked example `(x^2-16)/(x^2-4x)` and exclusion of `x=0,4`. The reviewer-approved `07-WR-11` example `(x^2-4)/(x-2)` can clarify *why* an excluded value remains excluded; it is an **enhancement to an existing card**, not an extra duplicated card. `WX07-RAT-001` and `RAT07V1_063` stay canonical.

### Academic/source caveat

The submitted NotebookLM review reports SGK KNTT Toán 8 page ranges (T1 Ch. II pp. 34–40/42–46 and T2 Ch. VI pp. 10–14). These are **reviewer-reported S1 evidence**, not page scans reverified by the assistant. Do not interpret the citation for the Grade 8 prerequisite identities as making Sophie Germain a compulsory KNTT skill. The specific Challenge boundary is decisive.

## Recommended next change set (separate PR, after owner acceptance)

1. Implement the new `WX05-ENT-001` only as an append-only self-marked written item with canonical `source_refs=...#05-ENT-01`; 4-point rubric `1.5+1+1.5`. Do not modify existing IDs.
2. Implement controlled support for Challenge **before** appending `WX06-CH-001`, or hold Challenge until its own supported follow-up release. Its `4`-point rubric is `2+2` and `gates_core=false`.
3. Enrich only `pt07-core-2.teaching_copy` with a distinct short causal illustration for `07-WR-11`; retain Core Micro ID/answer keys and do not add a third WX.
4. Update `published_scope.exercise_count`, topic/layer counts and append-only batch metadata **only if** the actually approved WX are published; keep catalog totals accurate.
5. Unit QA: mathematical identity, rubric sum, duplicate problem IDs, all source refs; browser QA: written filter visibility including Challenge, Core conceptual text, 390px responsive, no scoring/readiness regression, no losing device-local records; verify `gh-pages` after merge.
6. No migration of storage, scorer, lesson counters, Mastery, Readiness or user history as part of these editorial changes. Counter unification remains a separate engineering gate.

## Decision needed before learner-facing implementation

**Owner acceptance:** accept two new written items in the shared library and one explanatory enrichment in existing Core, **with Challenge layer support first**. This is a narrowly scoped approval request, not a request to re-review the mathematics that NotebookLM already marked PASS.

**Current PR scope:** archive the owner verdict, document these constraints and test unchanged production. No source old Markdown, live bank, Core, Written library, scores or student data modified.
