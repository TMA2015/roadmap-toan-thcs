# Math R36 — Next technical gate after 40/40 academic MCQ signoff

**Date:** 2026-10-18  
**Repo base:** `main` `ebf244fb79997c88d9fba59f71da6246d22c450e`, following R35 PR #521 merge. Post-merge public Math deploy CI [#39132109955](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/39132109955) **SUCCESS**.  
**Scope:** read-only preflight on original 40 R27 items and current Practice manifests. No approved code path to student counters is created.

## Academic evidence status versus technical identity readiness

The *academic* audit has two separate Owner receipts:

- **R33:** 24 IDs approved for source/layer (21 `KNTT-Core` and 3 `Entrance10`); 8 `STRUCTURAL_CLONE`, 16 `CONCEPT_BASE`.
- **R35:** 16 further IDs, all `KNTT-Core`; 14 `STRUCTURAL_CLONE`, 2 `CONCEPT_BASE`.

Combined **40 item IDs = 37 Core + 3 Entrance10, 22 structural clones + 18 concept-based questions**. This is **not** a statement that 40 unique mathematical problem-solving structures are covered. It is also not a reviewed Skill Family map, a certified Readiness assessment blueprint, or authority to write back older attempts.

## What must be verified technically

1. Match every historical R27 ID to its *current* canonical bank, keeping original Git blob and exact item digest. R34 `QUA12V1_121` is the sole permitted **stem delta**; assert the revised current live bank blob exactly and unchanged options/answer/explanation.
2. Verify the precise two R33 and one R35 dated academic owner receipts; exclude duplicate/extra IDs.
3. Determine whether the 40 items appear in historical compiled Taxonomy v2 `index-r1.json` (3,114 old policy rows) or only in later Practice manifest sources. `R22 SOURCE_LOCKED_FAMILY_QA_ONLY` on older items **does not automatically cover new R27 items**.
4. The R19 exact-action capture contract requires `item_id`, 64-character SHA-256 `source_sha256`, **stable authored `option_id`**, `presentation_id`, `action_id` and `correct`. These MCQs have **positional string options and integer answer indices**. A display index, shuffled position or answer text is **not** yet a reviewed canonical option ID. A 40-digit Git blob SHA-1 is not interchangeable with the 64-character SHA-256 contract.
5. The R23 highest-version Practice manifest is a *candidate*. It must not be declared the currently loaded learner route merely because a manifest exists, or because a historical item ID appears in it.
6. Registry `runtime_enabled=false`, `readiness_enabled=false`, `mastery_thresholds_enabled=false` and `history_backfill_enabled=false` remain absolute boundaries.

The audit `scripts/prototypes/math-v2-r36-r27-40-option-provenance-preflight.js` computes a **read-only**, repeatable report with the first five findings and fails closed on bank, Owner receipt, policy, and R34 source changes. Its companion Node test includes negative tests against falsely enabling runtime/Readiness.

## Recommended next implementation phase (not approved by QA)

Prepare an *option identity design* assigning a stable, source-bound identity to each **authored** alternative **before** presentation/shuffle. Review how to handle future copy edits, changed keys, source revisions and repeated displays. Add source-to-Skill Family assessments independently from this option-identity design; a pre-existing `tags.skill` legacy string is not automatically an approved mathematical Skill ID.

**Do not** automatically write `option_ids` to canonical banks, retroactively synthesize learner option actions, enable runtime counters, or treat the academic 40/40 closure as an R19/R20 exact-event migration approval.

### No changes in this PR

- No question text, options, answer index, item IDs or legacy tags.
- No learner history, cookie/local storage, Safari migration, Skill/Readiness/Mastery/independent assessment credit.
- No live taxonomy, question loader or grading logic.
- No private English GitHub Actions.

The Project Owner must explicitly approve any future **canonical bank schema change or learner runtime activation** after review, separate from merging this QA-only evidence packet.
