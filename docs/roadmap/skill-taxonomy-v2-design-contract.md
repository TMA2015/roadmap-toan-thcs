# Skill Taxonomy v2 — Design Contract

**Status:** owner-approved design direction; review-only taxonomy work; no runtime migration.  
**Date:** 2026-10-02.

## Goal

The taxonomy should be **small enough to be understandable and actionable**, but detailed enough that a learner can see a meaningful weakness and receive a specific remediation action.

A canonical skill is not created for every formula, context, method, problem variant or exam trick.

## Canonical-skill admission test

A candidate should normally satisfy most of these:

1. It expresses an independent learner capability.
2. It is reusable across multiple questions/problems or is an important prerequisite.
3. It can be diagnosed separately.
4. It has a distinct remediation action or error pattern.
5. It can be evidenced by more than one item/variant.

If two tags have the same mathematical target, same error pattern and same remediation, prefer **MERGE / ALIAS / method-context role** rather than separate mastery.

If two tags have meaningfully different errors and remediation, keep them separate even when they often co-occur.

## Role model

- `ASSESSED_SKILL`: independent learner capability.
- `SUPPORTING_SKILL`: meaningful prerequisite/substep, not automatically a separate mastery credit on a composite item.
- `METHOD`: procedure/representation used to solve another target.
- `CONTEXT`: motion, productivity, map, real-world setting, etc.
- `CATEGORY`: broad family/grouping label.
- `COMPOSITE_TASK`: multi-step task family, not an atomic prerequisite.
- `EXTENSION_SKILL`: independently assessable optional skill in Entrance10 / Specialized-Challenge / THPT-Bridge.

Role is evidence-dependent; a tag may be primary in one assessment and supporting in another.

## Layer and importance

Keep separate axes:

- curriculum/Core requirement;
- foundation/prerequisite value;
- Entrance10 application relevance;
- Specialized-Challenge relevance;
- exam frequency.

**Do not infer exam frequency from the authored Practice bank.** Frequency/priority from exams requires a defined authentic exam corpus with year, location/population and denominator.

## Evidence model

MCQ evidence, independent after-submit Readiness evidence and written-step rubric evidence are not equivalent.

A one-answer MCQ does not by itself certify:
- a full proof;
- a complete modeling process;
- all intermediate transformations in a long solution;
- an independent written derivation.

Legacy question IDs, legacy skill tags, localStorage/history and existing canonical evidence are preserved during taxonomy review.

## Problem-type and Written Library coverage

Taxonomy review must map canonical skills to problem types and identify the best evidence mode:

- `MCQ_SUFFICIENT_FOR_TARGET`
- `BOTH_USEFUL`
- `WRITTEN_RECOMMENDED`
- `WRITTEN_REQUIRED_FOR_FULL_SKILL`

The Written Exercise Library is **not complete merely because a topic has two exercises**. Add paper-first items when an important problem type requires written reasoning, modeling, proof, multi-step transformation or rubric-scored work.

Do not add written exercises just to satisfy a numeric quota.

## Compatibility

- Never silently rename/delete legacy tag IDs.
- Use additive canonical mapping / alias metadata first.
- Preserve learner history.
- Do not retroactively sum historical counters across aliases without sufficient event-level evidence.
- Knowledge Graph remains selective; it is not a copy of every legacy tag.


## NotebookLM source strategy

NotebookLM is the academic reviewer for this project.

Use two source classes:
- **Permanent/Frozen sources:** stable project rules, curriculum/boundary references and durable review contracts.
- **Temporary batch sources:** the current source-locked review packet and only the supporting files genuinely needed for that batch.

NotebookLM may support many sources (the owner reports up to 50 in the current product), but **source count is not a target**. Prefer the smallest source set that gives complete academic context. Add more sources only when they materially improve evidence coverage or disambiguation; avoid redundant or overlapping sources that can dilute the review.

Long instructions, expected IDs and output contracts belong in Sources. Keep the chat prompt compact; the current successful S1 pattern used a 560-character / 69-word prompt.
