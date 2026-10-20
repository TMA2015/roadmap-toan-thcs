# Math R38 — 40 MCQs: independent Skill Family mapping review packet (QA only)

**Review ID:** `MATH-R38-R27-40-SKILL-FAMILY-PREFLIGHT-20261018`  
**Scope:** all 40 original R27 IDs already academically source/layer approved through R33/R35. **Do not repeat item-content approval** and do not re-evaluate the other 3,114 historical policy questions.  
**Exact per-item records and current bank SHA pins:** `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json`.  
**Registry source:** `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json` (Git blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`), 131 reviewed families, **runtime disabled**.

## Why this review is needed

R33+R35 authorized 40 **academic MCQ item classifications**, not 40 Skill Family mappings. The existing Taxonomy v2 policy contains 3,114 **different historical question IDs**; new R27 questions do not automatically inherit an `ASSESSED_SKILL` role from the legacy `tags.skill` string. In addition, proposed R37 stable option identities are **only a QA design**, not authored identities in the live bank.

Eight source-tag groups / 40 items partition as follows:

| Topic / legacy tag | Items | Existing registry evidence | Candidate or BLOCKER |
|---|---:|---|---|
| CT02 `lam-tron-so` | 12 | `NUM-SETS` lists diagnostic subskill, no exact assessed legacy row | **12 SUBSKILL REVIEW** |
| CT02 `phep-tinh-so-huu-ti` | 6 | `NUM-FRACTION-OPS` diagnostic subskill, no exact row | **6 SUBSKILL REVIEW** |
| CT02 `so-vo-ti` | 3 | `NUM-SETS` diagnostic subskill, no exact row | **3 SUBSKILL REVIEW** |
| CT02 `can-bac-hai-so-hoc` | 3 | No exact assessed family; existing `can-bac-hai` marked `SUPPORTING_SKILL`, `family_id=null` | **3 NO-ASSESSMENT-FAMILY HOLD** |
| CT02 `gia-tri-tuyet-doi` | 3 | Exact `NUM-ABS` / `ASSESSED_SKILL` / Core mapping | **3 COMPATIBLE CANDIDATES** |
| CT03 `mo-hinh-ti-le` | 4 | Exact old `RATIO-MODEL` role exists but is **Entrance10**, while these four new items are owner-approved **KNTT-Core** | **4 LAYER-CONFLICT HOLD** |
| CT04 `chia-da-thuc-mot-bien` | 6 | `ALG-DIV-MONOMIAL` diagnostic subskill; family name's narrower meaning also merits academic check | **6 SUBSKILL REVIEW** |
| CT12 `lien-he-do-thi` | 3 | Exact `QUAD-GRAPH` / `ASSESSED_SKILL` / Entrance10 mapping | **3 COMPATIBLE CANDIDATES** |
| **Total** | **40** | **6 exact legacy-compatible, 27 subskill-only, 3 without family, 4 layer conflicts** | **0 new assessed mappings approved** |

### Narrow solution proposal for CT03 — review per actual question, not legacy tag

The four Grade 7 Core questions are **not all automatically** instances of the older Entrance10 `RATIO-MODEL` Family:

- `RAT03V1_121` — recipe amounts proportional to people: candidate `RATIO-DIRECT` (KNTT-Core).
- `RAT03V1_123` — notebooks at constant unit price: candidate `RATIO-DIRECT` (KNTT-Core).
- `RAT03V1_122` — distance from a map scale: candidate `RATIO-BASIC` (KNTT-Core).
- `RAT03V1_124` — model to real-object scale: candidate `RATIO-BASIC` (KNTT-Core).

These are **four item-specific proposals**, not an authorization to rewrite `tags.skill`, merge new family policy rows or award any individual Skill credit. Source judgment should confirm the exact mathematical reasoning before selecting `ASSESSED_SKILL`, `SUPPORTING_SKILL`, `CONTEXT` or `FORMATIVE_ONLY`.

### Specific question for 3 square-root items

`NUM02V1_142–144` directly calculate/identify arithmetic square roots. The reviewed registry has neither an exact `can-bac-hai-so-hoc` assessed mapping nor a reviewed Family with that exact diagnostic subskill. Independent reviewers must choose **one evidence-grounded solution**: attach to a semantically justified existing reviewed Family in an appropriate role, propose a new Family for later review, or retain formative-only status. **Do not create a Family automatically**, and do not rewrite the original owner-approved `KNTT-Core` *curriculum layer* into a Skill Family conclusion.

## Independent review output required

For **every one of the 40 IDs**, check the existing 131-family definitions, original math method/level and exact question evidence in the accompanying JSON; decide proposed `family_id` (or `null`), role `ASSESSED_SKILL / SUPPORTING_SKILL / CONTEXT / FORMATIVE_ONLY`, and `PASS / REVISE / INSUFFICIENT_EVIDENCE`. Justify 3 square-root items and 4 CT03 conflicts explicitly. A source-compatible or semantic family candidate is **not an owner-approved Skill mapping**.

The current GitHub QA test `test-math-v2-r38-40mcq-skill-family-compatibility.js` verifies 40 exact current bank items and source pins, the three owner approval receipts, the registry status and **6/27/3/4** candidate partition. It fails on fake approvals, source drift, topic/role/layermismatches or a CT03 promotion to Entrance10.

### Protected boundaries

`R38_FAMILY_MAPPING_APPROVED=0`; `R19_STABLE_OPTIONS_IN_LIVE_BANK=false`; `SKILL/READINESS/MASTERY_ENABLED=false`; `RUNTIME_CREDIT/LEARNER_HISTORY_WRITE=false`; `CANONICAL_BANK/TAXONOMY_MODIFIED=false`; `BACKFILL=false`; `MERGE/RELEASE_AUTO_AUTHORIZED=false`.

**R38 is a preparation-for-review packet, not a release or progress migration.**
