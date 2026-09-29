# Self-Learning Math — B01–B07 source-locked review reconciliation

**As of:** 30/09/2026 · **main snapshot:** `4cfa70ff999eb469ac4e33dadb6447abae1c7383` · **Status:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`. This document consolidates evidence in historical draft PRs #146–155, not a new NotebookLM review and not a blanket independent verification of all practice banks. Refresh source blobs before any code merge.

## Scope and provenance

| Round | Review packet / receipt | Confirmed source-locked coverage | Honest outcome |
|---|---|---:|---|
| B01 | [#146](https://github.com/TMA2015/roadmap-toan-thcs/pull/146), [receipt in #147](https://github.com/TMA2015/roadmap-toan-thcs/pull/147) | 10 representative items; 8 shared-code cases are contextual flags | Reviewer report has contradictory pass/expected counts; do not state machine-readable PASS or mapping implemented. |
| B02 | [#147](https://github.com/TMA2015/roadmap-toan-thcs/pull/147) | 39 flagged CĐ04–07 item IDs in text table | Report exceptions; JSON incomplete. 19 primary candidates / 18 formative / 2 extension are *candidate groups*, not evidence credits. |
| B03 | [#148](https://github.com/TMA2015/roadmap-toan-thcs/pull/148) | 26 CĐ14/15 items | Textual 26/26 review, truncated machine-readable blocks; two concepts, clone clusters, corrected micro-test proposal still unapproved. |
| B04 | [#149](https://github.com/TMA2015/roadmap-toan-thcs/pull/149) | 41 unique CĐ04/07 IDs (32+9 pasted table rows) | Recognizing source domain versus retaining the *original* domain is separate task demand; no 41-item parseable independent JSON. |
| B05 | [#150](https://github.com/TMA2015/roadmap-toan-thcs/pull/150) | 51 CĐ08/11 IDs | 45 PASS, 6 REVISION_REQUIRED; source-based correction of an erroneous reviewer statement about `EQ08V1_067`, whose solution set is `{-2}`. |
| B06 | [#152](https://github.com/TMA2015/roadmap-toan-thcs/pull/152) | 71 CĐ08/09/24 IDs | Reviewer reported 71 PASS, but independent source reconciliation: **69 PASS + 2 REVISION_REQUIRED** (`MOD24V1__058`, `__069`). |
| B07 | [#154](https://github.com/TMA2015/roadmap-toan-thcs/pull/154) | 59 selected CĐ24 IDs (26+13+20); **not** the entire 135-item bank | Reviewer 58+1; independent source reconciliation **57 PASS + 2 REVISION_REQUIRED** (`MOD24V1__024`, `__040`). No further B07 NotebookLM phase outstanding. |

Coverage rows from different rounds may overlap and contain exact micro/bank clones; **do not sum them as distinct mastered skills**. The snapshot `skill-taxonomy-audit-v1.json` (dated 26/09) reported 346 unique legacy manifest skill codes, 354 topic-skill occurrences and 41 selected graph nodes. **41 graph nodes ≠ 41 skills across 25 topics**. These are dated counts, not independently refreshed totals at this checkpoint.

## Ten isolated academic fixes — exact preflight against current main

Source diff inspection at `4cfa70ff999eb469ac4e33dadb6447abae1c7383` compared every draft file with current `main`. All six source files had exactly the expected changed records, with unchanged ordered question IDs, unchanged answer indices and `tags`; no unrelated question record changed in each respective file. This is **diff integrity**, not browser QA or permission to deploy. PR #153 and #155 both touch CĐ24 bank part 02; a future integrator must reconcile both patches on a fresh branch.

| Draft | Exact record IDs | Candidate edit | Current main Git blob(s) |
|---|---|---|---|
| [#151](https://github.com/TMA2015/roadmap-toan-thcs/pull/151) | `EQ08V1_047–050`, `RAD11V1_014/021` | Render `x--n` as `x+n`; remove redundant `+0` in radicals, same conditions and keys. | CĐ08 part02 `717e6988da610c382e744118fe4aca0c20d40244`; CĐ11 part01 `0aebcf174f74d19e18d9786ee850ae563cf40afc` |
| [#153](https://github.com/TMA2015/roadmap-toan-thcs/pull/153) | `MOD24V1__058/069` | Make second age-model distractor not algebraically equivalent; adjust 40-item total to 298,000 VND for nonnegative integer 26 pens/14 notebooks. | CĐ24 part02 `03535d510cd91cd52df48312325536edc5bb4423`; part03 `d3054fdb6da255cfd7cf571015e0a10f2903f467` |
| [#155](https://github.com/TMA2015/roadmap-toan-thcs/pull/155) | `MOD24V1__024/040` | Explicitly define whole trip 120 km split into two equal halves (2.5 h); require `x≥2` to discuss two hours' share of one job. | CĐ24 part01 `2099b3e03210d58c7dca4e55fc8e2d88f0db5d06`; part02 `03535d510cd91cd52df48312325536edc5bb4423` |

**Do not merge these historical draft branches as a batch.** They are based on an older snapshot; this document records the preflight only. Any production fix requires explicit approval, fresh source verification, exact changed-record audit, math/MathJax render, schema and regression QA, strict build and controlled release. Preserve ID, original assessment mapping and historical evidence; do not regrade stored attempts silently.

## Taxonomy normalization contract (proposal, not activated)

Separate these axes in a *read-only* proposal before changing `assessed_skill`:

1. **Concept:** one canonical mathematical principle with prerequisites/downstream links; aliases of the same concept do not create new counter IDs. Domain `mẫu≠0` can be shared between CĐ04/07 without claiming both tasks are identical.
2. **Task demand:** recognition/interpretation → selecting a procedure → executing a substep → building a complete model → independent worked solution or proof → transfer. A selected MCQ answer cannot alone certify writing a proof, deriving all original-domain constraints, or constructing a full two-equation system.
3. **Evidence:** formative micro/practice, independent after-submit readiness, and written-step rubric are distinct sources; record hint/solution exposure, source item version, primary assessed skill and clone family. No retroactive counter summation or automatic mastery.
4. **Context vs assessed skill:** motion, productivity, age and revenue can be contexts; each item's actual mathematical demand decides its primary skill. `MOD24MICRO_011/012` and corresponding bank copies measure one component equation, not independently constructing a full system.
5. **Layer and relevance:** KNTT Core / Support / Entrance10 / Challenge / THPT-Bridge must have source-grounded mapping. Exam frequency/priority requires a defined official exam corpus with location, years, population and denominator; do not infer from self-authored banks.
6. **Clone/near-clone:** retain formative practice when useful but count independent assessment evidence conservatively. B06 verifies three exact CĐ24 micro/bank pairs; B07 nine pairs; B03 has two concentrated 8-item geometry families.

## Decision gates / next work

- **Gate A — Academic corrections:** source-safe ten-item draft preflight complete; approval + controlled QA/release pending. These are content fixes, not a skill-taxonomy migration.
- **Gate B — Canonical skill registry:** reconcile B01–B07 read-only overlays at question level, with source blobs and explicit `RECOGNITION_ONLY`, `FORMATIVE`, `WRITTEN_EVIDENCE_REQUIRED`, `EXTENSION` flags. Record disagreements/exceptions, avoid accepting incomplete JSON as authoritative.
- **Gate C — Pilot:** only when academic decision register is signed off, test an additive, versioned view for a small set of skills; do not alter the original 346-code snapshot or learner stores. Distinguish coverage from mastery.
- **Gate D — Exam corpus:** independently collect appropriately dated authentic Entrance10/specialized questions before assigning frequency weights. Core priority derives primarily from curriculum/prerequisites, not exam popularity alone.

Historical review packets remain in their draft PRs for provenance; no question bank, UI runtime, readiness score or localStorage mutation is part of this report.
