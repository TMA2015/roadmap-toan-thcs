# CT08 Content Delta Plan R0

Date: 2026-10-03  
State: **CANDIDATE PLAN / INDEPENDENT REVIEW REQUIRED**

Depends on:
- `01_CT08_CURRENT_SITE_INVENTORY_R0.md`
- `03_S1_KNTT_CT08_EXTRACTION_R0.md`
- `04_S1_SBT_CT08_EXTRACTION_R0.md`
- `05_S2_PEDAGOGICAL_CT08_EXTRACTION_R0.md`
- `06_S3_HANOI_ENTRANCE_CT08_EXTRACTION_R0.md`
- `07_CT08_PROBLEM_TYPE_CATALOGUE_COVERAGE_MATRIX_R0.md`
- `08_CT08_CURRENT_SITE_D1_D6_GAP_AUDIT_R0.md`

Goal:
bring CT08 toward `SELF_LEARNING_READY_V1` with the smallest source-backed changes, preserving IDs/history and the Golden Template.

---

## 1. Non-negotiable boundaries

1. KNTT SGK/SBT defines Core.
2. S2 reference may improve pedagogy but cannot promote content into Core.
3. Hà Nội S3 current sample is only `n=2`; it supports observed transfer statements, not predictions.
4. Preserve all existing Practice IDs and learner history.
5. No backfill/regrade.
6. No Mastery/Readiness scoring change.
7. No universal static-hint quota.
8. No raw question-count target.
9. New learner-facing statements/exercises must be original or permitted.
10. Do not copy CT09 content mechanically; reuse only validated design contracts.

---

# 2. Delta A — learner-facing framing and source boundary

## A1 — promote inequality modeling to the correct Core application layer

Current mismatch:
- KNTT SGK/SBT directly includes real-world first-degree inequality modeling;
- Learning Workspace/Practice Room currently place it in Entrance10.

Change:
- learner-facing label should be Core application / KNTT-Core;
- keep it non-gating if the existing readiness schema does not yet assess it, unless a separate authorized readiness change exists;
- do **not** regrade historical attempts.

This is a content-layer correction, not a scoring migration.

## A2 — reconcile multiple-condition intersection

Choose one reviewed label consistently across:
- knowledge page;
- Learning Workspace;
- Practice Room;
- descriptive taxonomy metadata where technically appropriate.

Candidate:
- **Core-Support / application** rather than Entrance10 or an independent mandatory Core mastery bar.

Reason:
- SBT supports combining conditions;
- evidence does not require elevating it to the same status as direct first-degree inequality solving.

Final label requires NotebookLM confirmation.

## A3 — replace row-level star ranking

Remove the relative 3/4/5-star ranking from the “Dạng bài thi vào lớp 10” table.

Replace with categories such as:
- **KNTT-Core / nền tảng bắt buộc**;
- **Ứng dụng Core**;
- **Đã quan sát trong mẫu Hà Nội 2025–2026**;
- **Mở rộng / Entrance10 / Challenge**.

Keep the generic topic-level Roadmap badge only if the independent reviewer accepts it, consistent with CT09 precedent.

## A4 — bounded notation cleanup

Normalize learner-facing strings in:
- `EQ08V1_047..050`

from double-minus forms such as `x--4` to standard equivalent notation such as `x+4`.

Must preserve:
- question ID;
- correct option index;
- assessed skill;
- answer semantics;
- historical attempt linkage.

---

# 3. Delta B — targeted theory/worked-example depth

## B1 — canonical transform-to-product example

Add one original worked example where the learner must **create** the product form before using zero-product.

Required teaching:
1. recognize common factor/factorization;
2. rewrite as a product;
3. set each factor to zero;
4. collect all roots;
5. quick substitution/check where useful.

## B2 — transformed inequality example

Add one source-aligned example that looks more complex initially but reduces to a first-degree inequality after expansion/cancellation.

Required teaching:
- simplify first;
- identify the actual coefficient of `x`;
- only reverse direction when multiplying/dividing by a negative number;
- represent/interpret the final solution.

## B3 — full one-variable modeling example

Create an original model structurally aligned with current S3 transfer but not copied from an official paper.

Possible context:
- production plan;
- travel time;
- rate/work.

Required:
1. choose one unknown and unit;
2. state condition;
3. express dependent quantity/time;
4. form the equation;
5. solve;
6. check context/units;
7. explain why a tempting alternate model is wrong if useful.

---

# 4. Delta C — deep written anchors

Target: **3 or 4**, not a quota-driven large set.

## C1 — transform to product
Layer: KNTT-Core  
Problem type: PT08-05.

Must require transformation before zero-product.

## C2 — rational equation with domain/candidate rejection
Layer: KNTT-Core  
Problem type: PT08-07.

Use only if the reviewer judges `WX08-EQI-001` insufficient as the deep anchor.

Must teach:
- domain;
- denominator clearing on valid domain;
- candidate roots;
- explicit rejection.

## C3 — authentic one-variable equation model
Layer: KNTT-Core  
Problem type: PT08-15.

Must require more than translating one sentence.

## C4 — inequality model with contextual/discrete bound
Layer: KNTT-Core / Core-Support depending exact prompt  
Problem types: PT08-16/17.

Must require:
- variable + units/condition;
- inequality construction;
- solve;
- integer/physical interpretation where appropriate.

### Written-anchor contract

Each new deep anchor should contain:
- Gợi ý 1 — identify data/unknown;
- Gợi ý 2 — method/relation;
- Gợi ý 3 — first concrete step;
- full solution;
- why this method;
- common errors;
- self-check rubric;
- prerequisite/remediation route;
- easier sibling where genuinely useful.

This remains self-check, not automatic written mastery.

---

# 5. Delta D — interactive rebalance

## D1 — structural variant groups

Add non-evidence structural grouping metadata to the 132 historical questions.

Examples:
- direct linear equation;
- multi-step expand/collect;
- product already factored;
- denominator-domain;
- rational solve;
- sign-reversal inequality;
- number-line;
- equation model;
- inequality model.

Session selection should prefer structural diversity when enough groups exist.

No ID rewrite.

## D2 — small targeted additions only

Candidate additions:
- PT08-05 transform-to-product: 1–2;
- PT08-11 inequality recognition/solution: 1;
- PT08-13 transform/cancel inequality: 1–2.

Final number should be based on independent review, likely **3–5 total**.

Do not add questions to already dense routine families merely to keep counts symmetrical.

## D3 — selective hints

For new interactive items:
- add 2-step hints when the reasoning bottleneck benefits.

For 132 historical items:
- do not retrofit hints universally;
- later add only when observed learner-error data or a specific audit justifies it.

---

# 6. Delta E — exam/authentic wording

Replace relative star ranking with conservative wording.

Allowed:
- KNTT-Core because Bài 4–6 requires it;
- in official Hà Nội 2025–2026 current sample, one-variable equation modeling appears in 2/2 reviewed papers;
- one 2025 radical-expression task uses an inequality as cross-topic transfer;
- sample is small and descriptive.

Not allowed:
- “always”;
- “certain to appear”;
- inferred probability;
- claims that 0/2 makes a KNTT Core family unimportant.

School-semester/final-test frequency remains:
`INSUFFICIENT_SOURCE`.

---

# 7. Proposed implementation slices

## P1-A — framing + theory
- correct inequality-modeling layer;
- reconcile multi-condition layer;
- replace row-level stars;
- normalize `x--n` notation;
- add transform-to-product and transformed-inequality worked examples;
- add/deepen one-variable modeling example.

## P1-B — written anchors
- 3–4 independently reviewed deep anchors;
- progressive hints/rubrics/remediation;
- preserve existing short written practice.

## P1-C — interactive rebalance
- structural variant groups;
- only 3–5 source-backed thin-family additions if approved;
- anti-clone selector QA;
- selective hints on new items.

Each slice:
- separate technical gate;
- owner QA before closure.

---

# 8. Acceptance criteria for reconsidering SELF_LEARNING_READY_V1

CT08 may be reconsidered after:

- D1 source-layer conflicts are closed;
- D2 has a transform-to-product example, transformed-inequality example and sufficiently deep model example;
- D3 structural diversity is represented honestly and delivery avoids near-clone concentration;
- D4 contains enough deep Core written anchors for independent transfer;
- D5 row-level ranking is source-disciplined and current S3 wording is conservative;
- D6 key written/modeling bottlenecks have reliable static non-AI help;
- learner-facing mathematical notation is clean;
- no unresolved P0/P1 remains.

Optional parameter/extremum/substitution challenge content does not gate Core.

---

# 9. Independent review questions

NotebookLM should explicitly decide:

1. Is `lap-bat-phuong-trinh` KNTT-Core application?
2. Should `giao-tap-nghiem` be Core-Support rather than Entrance10/full Core?
3. Are D1–D6 gap findings justified?
4. Is the row-level star table a P1 source-discipline issue even with its disclaimer?
5. Are 3–4 written anchors enough, and which ones are necessary?
6. Are 3–5 interactive additions enough, with no need for mass expansion?
7. Is selective hinting correct?
8. Is `x--n` cleanup safe without re-ID/regrade?
9. Does current S3 wording remain conservative?
10. Are optional parameter/challenge forms correctly non-gating?

A PASS authorizes **CT08 pilot implementation only**, not mass rollout.
