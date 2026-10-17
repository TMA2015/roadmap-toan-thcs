# Math Phase 4 R21 — parent view for old/new Skill counters (read-only QA)

**Date:** 2026-10-17 · **Status:** QA CANDIDATE / NOT A LEARNER RELEASE

## Scope of the actual owner's question

Yes: Phase 4 is unifying how Skill progress is recorded and counted, not moving learners to a new dashboard yet. R20 #506 merged with full public Math QA/deploy PASS, proving that a QA-only Practice event can be stored atomically once and attributed to 1..N skills while the global unique-attempt total remains one.

R21 provides a **separate, unlinked, noindex parent preview** at `/qa/math-v2-parent-comparison-r21.html`. It uses only **embedded synthetic** V1-shaped per-item aggregates and V2 R20-shaped events. The helper is pure: no localStorage, IndexedDB, network, account, real backup input, import, migration, or learner score writes. Neither `practice-engine-v2.js` nor the site menu/config imports the R21 module.

## Comparison principles

1. **Equal numbers are not sufficient**: two totals both being two do not establish that the underlying attempts are the same; display `NOT_COMPARABLE` without shared event identities.
2. A synthetic paired sample may report `QA_MATCH` only when an explicit **synthetic-only proof lists every canonical event ID with the same item ID and correctness**, and the replayed per-item aggregates exactly agree with the V1-shaped test figures. This verifies the *algorithm*, not real legacy lineage.
3. Deliberately mismatched synthetic answers or missing proof rows return `QA_MISMATCH`. Corrupt counts, duplicate event IDs and out-of-scope events produce `INSUFFICIENT_EVIDENCE` instead of 0 or a match.
4. V2 per-skill formative attempted/correct totals are projected from source-declared `skill_ids` on distinct event IDs. One multi-skill answer contributes to each relevant Skill; the **sum of Skill attempts is not the global attempt count**. This is not a mastery score.
5. Readiness and Written are always marked `NOT_COMPARABLE` by R21 because the R20 prototype currently stores only Practice MCQ evidence. Written self-check does not become independently graded Readiness.
6. Real V1 per-question **aggregates** lack corresponding per-attempt v2 IDs, so no authentic V1 device backup can pass the paired proof; do **not** transfer a synthetic fixture PASS into a claim that PC/iPad histories have been reconciled.

## What the parent may safely try

Open the unlisted QA page on desktop or iPad; choose one of three buttons:
- Same numbers but no proven common attempts → **Chưa thể đối chiếu**.
- Fully linked synthetic attempts → **Khớp trong bộ dữ liệu MẪU**.
- Altered synthetic aggregate despite same event set → **Không khớp trong bộ dữ liệu MẪU**.

All results and per-Skill counts are clearly labelled *synthetic*. The preview intentionally has **no file selector**. No private real learner backup should be uploaded to it.

## QA gate

Node test `scripts/test-math-v2-parent-comparison-r21.js` checks exact synthetic lineage, unsupported parity, mismatch, corrupt counts, scope and duplicate protection, separate evidence lanes, no-loader/no-storage contract. Browser test `scripts/test-math-v2-parent-comparison-r21-browser.py` checks PC-width 1365px and mobile 390px, all three outcomes, Skill overlap, overflow, no new IndexedDB database, unchanged localStorage sentinel and no real Practice score. The tests are included in the existing public Math Roadmap PR Quality workflow.

**No deployment approval for live v2 Skill counters.** Next step (separate task/owner decision) is source-backed mapping from approved course content to stable skill IDs and source-derived grading, then real-device Safari/PC tests, privacy-safe backups, and an explicit learner cutover plan. Do not sum historical real PC/iPad counters or silently migrate V1.
