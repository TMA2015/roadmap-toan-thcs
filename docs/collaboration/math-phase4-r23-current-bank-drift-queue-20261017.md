# Math Phase 4 R23 — Current Practice catalog vs historical Skill policy

**Date:** 2026-10-17 · **Status:** Read-only engineering QA · no student rollout.

## Objective

R22 audited the 3,114 question IDs in 24 academically compiled Skill Taxonomy v2 topic policies (CT02–CT25). It found:

- **2,750** rows with historically reviewed Family associations and unchanged source Git blobs (QA candidates only).
- **214** rows explicitly classified formative-only/no Family.
- **150** source-lock holds because their **source file Git blob SHA changed**.

**Important distinction:** A changed source blob does NOT prove each of its 150 historical items changed text or became mathematically wrong. Even whitespace or addition of a new question changes the blob. R23 does not override those holds or silently promote old Skill tags to reviewed evidence.

## R23 technical change

`scripts/prototypes/math-v2-practice-manifest-drift-r23.js` runs purely from repository files and imports the R22 read-only audit. For each CT02–CT25 topic, it:

1. Locates versioned manifest files and selects the **highest numeric version as a catalog candidate**. It does not assume that version is the currently deployed Practice player.
2. Checks the actual topic `bai-tap.md` for a direct `data-practice-bank-v2` reference to that manifest. A manifest absent from the page is marked **candidate-only**, not asserted live.
3. Loads all declared question chunks from the selected manifest. Duplicate item IDs or a declared question-count mismatch fail closed.
4. Compares every candidate question ID against the exact historical policy question IDs, partitioning records into **shared historical IDs**, **new unreviewed IDs**, and **historical IDs absent from the newer candidate**. Missing in a candidate does not mean deleted across the site.
5. Separates newly added simple MCQ items from `response_type + answer_contract` rich-answer questions, which need a different validated scoring/identity contract.
6. Reports changes in exact source-chunk Git blobs, moved question IDs, page references, and a short per-topic review queue. Source drift remains blocked; no changed file is approved automatically.
7. Prints machine-readable aggregates and affected topic summaries in GitHub CI logs. No current learner localStorage/IndexedDB, no network, no writes, no alterations of test content or taxonomy mapping.

## Interpretation and limits

The highest-version manifest is an **available catalog**, not a guarantee of learner exposure. Some topic pages don't directly include that manifest; some newer rich responses might be accessible through other routes. Those cases need a separate live wiring audit.

R23 does **not** recover the previous historical version of a modified source chunk, compare per-question text, regrade mathematics, or issue NotebookLM PASS. The 150 rows remain on HOLD until original and current question payloads can be compared and any required academic review is approved.

Also, structural validity of the `answer` index is not proof of mathematical correctness or a persistent canonical option ID. Readiness and Written self-reports remain distinct evidence lanes.

## Acceptance gate and next action

`scripts/test-math-v2-practice-manifest-drift-r23.js` asserts the R22 baseline (2,750 / 214 / 150), partitions every latest-manifest candidate without double counting, identifies CT02 v4 and CT04 v6, keeps non-referenced manifests candidate-only, and forbids student data reads/writes.

Public Math PR Quality must PASS at the exact head SHA before QA-only merge. No student production code or source items are edited, no score is reset or migrated.

**After R23:** Review individual old/current question versions for the drifted source chunks, and route previously unreviewed new MCQ/rich items through separate source/academic QA. Never award core Skill Mastery from a historical Family label alone.