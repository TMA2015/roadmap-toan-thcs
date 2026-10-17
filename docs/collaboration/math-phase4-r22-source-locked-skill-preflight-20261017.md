# Math Phase 4 R22 — kiểm tra nguồn gốc ánh xạ câu hỏi → Skill

**Date:** 2026-10-17 · **Scope:** QA-only technical source integrity audit, NO LEARNER CUTOVER.

## Kết nối với giai đoạn hợp nhất bộ đếm

R18–R21 have provided a synthetic-only event ledger and parent counter comparison. R22 addresses the next essential question: **which reviewed Skill/Family can an exact real question source be associated with?** It does not turn a correct multiple-choice answer into a mastery declaration.

Existing reviewed source:
- `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`: 131 reviewed families; state `I0_DURABLE_REGISTRY_RUNTIME_DISABLED`.
- `docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json`: 24 compiled topic policies, CT02–CT25; 3,114 original policy rows. Historical index summary: 2,900 `FAMILY_LINK_REVIEWED`, 214 `FORMATIVE_ONLY_NO_FAMILY`.
- Per-topic `ctXX-r1.json` links each question ID and original source chunk to a **Git blob SHA-1**, legacy skill tags, reviewed Family role and evidence category.
- The policy itself explicitly has `runtime_enabled:false`, `learner_data_write_enabled:false`, `independent_credit_authorized:false`. These are binding safety boundaries, not toggles R22 overrides.

## R22 QA source-lock audit

`scripts/prototypes/math-v2-source-locked-skill-audit-r22.js` walks the compiled historical policy slice and performs a read-only comparison to the **current repository file bytes**:
1. Recompute exact Git blob SHA for each policy-declared question chunk and compare with the declared source blob and per-item source SHA.
2. Confirm question IDs are unique, the policy counts match, and each referenced item still exists in its exact declared file.
3. Require source question `tags.skill` to agree exactly with compiled policy `legacy_skill_tags`; never infer or rename a Skill from convenient similar text.
4. Check the MCQ answer key is structurally an in-range option index; this is **not mathematical re-review** or trusted production scoring.
5. For intact records classify:
   - `SOURCE_LOCKED_FAMILY_QA_ONLY`: reviewed family association exists and is still source-matched.
   - `SOURCE_LOCKED_NO_FAMILY_QA_ONLY`: original policy explicitly chose no Family/Skill credit. **Do not fill this gap using raw tags**.
   - `*_HOLD`: changed source, missing ID, mismatched tags, malformed answer or inconsistent policy; no Skill attribution.
6. Output only aggregate QA diagnostics, per-topic counts and small examples. Never write events, learner scores, v1 history, or R20 database.

A source-locked Family is **not automatically an assessed Skill credit**: mapping roles include METHODS, CONTEXT, CATEGORY, supporting tags, and partial MCQ evidence. R22 neither attributes every tag to a separate count nor awards Ready/Mastery/Readiness, regardless of correctness.

## Incomplete coverage is expected and must be explicit

The 3,114 policy rows are a historical compiled slice, **not the entire latest interactive Practice player**. For example, the current CĐ02 v4 manifest declares 149 questions, and CĐ04 v6 declares 142, including later rich-answer additions absent from the old base coverage. R22 does NOT claim that a 3,114-row audit covers all latest Practice questions.

Also, source-backed option arrays use a positional `answer` index. They do **not** provide reviewed canonical stable option IDs needed for the R19/R20 exact-action capture. R22 checks valid indices but marks `canonical_option_ids_verified:false`, prohibiting production migration or trusted cross-version dedup.

**QA PASS meaning:** the auditor preserves explicit `HOLD` statuses and does not silently invent skill links. The count of fully source-locked records is reported by the actual CI; no blanket “all 3,114 verified” claim is made in advance.

## Tests and owner gate

`scripts/test-math-v2-source-locked-skill-audit-r22.js` validates the full source set and CT02 sample, changed source SHA, changed legacy tags, no-family handling, protected runtime flags, unchanged site/Practice loader, and no storage/network writes.

Only after public Math full PR CI PASS may QA-only audit files be merged into `main`. This release changes **neither** academic source banks **nor** real UI. Later separate work must reconcile latest manifests, confirm canonical option identities and source-derived grade calculations, and receive parent QA/authorization for PC/iPad Safari before activating learner Skill counters.
