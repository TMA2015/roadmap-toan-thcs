# W9 — Single Owner Acceptance / Release Decision

**Review packet:** MATH-W9-CONSOLIDATED-NOTEBOOKLM-ONE-UPLOAD-R1-20261021  
**Status:** `ACADEMIC_PASS | DRAFT_TECH_QA_IN_PROGRESS_AFTER_DEPLOY_GUARD | OWNER_RELEASE_AUTHORIZATION_REQUIRED`  
**PR:** https://github.com/TMA2015/roadmap-toan-thcs/pull/567  
**Owner:** one decision about this **entire coherent W9 wave**; never request separate approvals for each item or regression test.

## What would change for the learner

1. **Written — easier to find relevant work:** Existing shared library adds **Lớp → Chương → Bài học** dropdowns driven exclusively by independently SGK-verified `kntt_placements` (do not equate advisory `grade_overlay` with verified grade). The existing topic, problem type, level, anchor/standard and search access stays available; old links and IDs remain.
2. **Existing Written — reuse first:** Eighteen unchanged original Grade7–9 Written problems get reviewed classroom placement metadata (6 per grade). Same 74 originals, with original problems, solutions and rubrics unchanged. The one existing `WX21-STA-001` advisory grade becomes 6 and is routed precisely to **SGK Toán 6 Tập 2, Chương IX, Bài 40 (Biểu đồ cột)**, not the old broad Bài38–41 group.
3. **Grade6 absolute value — small distinct practice addition:** Three independent-reviewed MCQs `NUM02MICRO_065`, `066`, `067` linked to existing `num02-g6-core-3`, plus one connected-skill Written `WX02-NUM-004` with selective hints, step-by-step solution, method rationale, frequent mistakes and a five-point self-check rubric. This is not an official Readiness/Mastery assessment.
4. **Do NOT imply a complete KNTT program or that all 212 one-tagged Core-card skills require more content.** Source coverage audit is evidence for targeted authoring, not a question quota.
5. **Grade9 independent Readiness Draft #565 is excluded from this W9 release** and requires its own academic/accounting authorization. Grade6 live mixed quiz remains unchanged.

## Independent academic and technical gates

| Gate | Recorded status | Source of truth |
|---|---|---|
| Original 18 Written — mathematical correctness | PASS 18/18, Owner-provided NotebookLM receipt | `review-packets/math-w9-core-coverage/02_NOTEBOOKLM_W9_S1_RECHECK_OWNER_RECEIPT_20261022.md` |
| Original 18 Written — SGK S1 Grade/Chapter/Lesson | VERIFIED 18/18 as reported by NotebookLM | Same receipt, with SGK volume/lesson/page references |
| Grade6 NUM-ABS proposed 3 Micro + 1 Written | PASS 4/4 as reported by NotebookLM | Same receipt; source candidate items in original W9 one-upload packet |
| Original 74 Written mathematics/solutions/rubrics | Immutable per-item fingerprints and historical source tests | `scripts/data/w9-core-original-math-lock-r1.json` and `scripts/test-w9-reviewed-written-numabs-candidate-r1.js` |
| Original Grade6 NUM02 64 Micro IDs/keys | Immutable per-item records | Same source-locked QA |
| Learner UX on browser | CI-emulated desktop/390px mobile/820px iPad PASS at previous head | `scripts/test-w9-reviewed-written-grade-browser-r1.py`, main QA workflow |
| Latest exact-head CI | **RECHECK after production guard addition** | PR #567 GitHub Actions |
| Actual physical iPad Safari, release | **NOT YET OWNER-OBSERVED** | Request one limited post-release smoke check |
| Owner release authorization | **NO_LIVE_RELEASE — CLOSED** | Original NotebookLM report and PR body |

**Important release integrity correction:** `published_scope.exercise_count=74` reflects the historical live library, while PR candidate JSON contains 75 Written records. The 75th is marked `candidate_scope` and `NO_LIVE_RELEASE`. Merely merging this Draft without promotion would incorrectly expose a not-yet-authorized candidate. To prevent accidental deployment, this PR adds `scripts/guard-w9-candidate-publication-r1.js --deploy` to the actual **main → MkDocs → GitHub Pages** deployment workflow. It fails closed on ANY pending Writer candidate or mismatch between published and physical bank counts. PR CI exercises `--candidate-check` and must PASS while production gate is closed.

## Single Owner release decision and deployment sequence

**Decision requested only after final exact-head CI PASS:** Approve or decline **all of W9 PR #567** as the combined Practice/Core + Written navigation release; this is *not* a request to publish W8 Grade9 Readiness.

If Owner explicitly approves this one wave:

1. Convert the one `WX02-NUM-004` from Owner-gated candidate into an authorized published Written entry; adjust `published_scope.exercise_count` from 74 to 75, record an Owner-approval receipt and close or remove pending `candidate_scope` appropriately. Preserve the original 74 IDs/payloads and all historical attempts.
2. Revise only those candidate hold-specific QA expectations so they now test the **authorized 75th** rather than mistakenly holding it. The production `--deploy` guard must PASS under the new authorized schema, while history and no-Readiness checks still PASS.
3. Re-run **final exact-head full-project CI** including desktop/mobile/tablet-browser tests and source locks. Merge only after success and Owner approval. Verify GitHub Pages build/deployment state.
4. Ask Owner **one concise physical iPad acceptance check**: open Writing Library; select Grade6 / ChIII / Bài13–14; open the absolute-value Written; show hints + solution; confirm filters and math readability. Also sample Grade7/8/9 filters on desktop. Record resulting observed PASS / issue in PR and checkpoint.
5. Preserve separation of W8 Grade9 Readiness, which remains preview-only without its own authorization.

If Owner does **not** approve release, leave #567 Draft and production page unchanged; source decisions and tests remain archived with the project checkpoint.

**No multiple tiny approval questions. No further full NotebookLM rerun is required unless the source math or curriculum classification changes.**
