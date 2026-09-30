# Skill Taxonomy Phase D — CĐ04–07 closure

**Date:** 2026-09-30  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Scope:** bounded full-bank primary-evidence overlays for CĐ04, CĐ05, CĐ06 and CĐ07.

## Closure result

All four independently reviewed full-bank overlays PASS with zero item revisions.

| Topic | Questions | One primary candidate | Formative-only / no primary | Clone families | NotebookLM verdict |
|---|---:|---:|---:|---:|---|
| CĐ04 | 132 | 120 | 12 | 13 | PASS |
| CĐ05 | 120 | 91 | 29 | 21 | PASS |
| CĐ06 | 120 | 104 | 16 | 17 | PASS |
| CĐ07 | 120 | 112 | 8 | 23 | PASS |
| **Total** | **492** | **427** | **65** | **74** | **PASS** |

The 427 mappings are candidate evidence mappings, not 427 mastery events. The 65 formative-only questions remain intentionally non-primary because the observable MCQ evidence is insufficient to isolate the intended multistep/method/proof/Extension competency.

## Source-locked review records

- CĐ04: PR #194, packet `MATH-SKILL-CORE04-OVERLAY-R1-20260930`, source blob `4db8c7451be599038870d55eee2404af0afb1d37`.
- CĐ05: PR #195, packet `MATH-SKILL-CORE05-OVERLAY-R1-20260930`, source blob `a16a7781d858e55e7ba3e517b66dc9ec9294b3da`.
- CĐ06: PR #197, packet `MATH-SKILL-CORE06-OVERLAY-R1-20260930`, source blob `dff6013a0062e2a81dfafbe35280b4e52ab620c0`.
- CĐ07: PR #200, packet `MATH-SKILL-CORE07-OVERLAY-R1-20260930`, source blob `06a4b8f6f31b356d09a22c8c2e42423a14523d6b`.

## What Phase D establishes

1. Every reviewed question has at most one canonical assessed-skill candidate.
2. Supporting skills, methods, categories, contexts and task families do not receive duplicate mastery credit from the same response.
3. Observable evidence is classified conservatively: recognition, method selection, final output/final answer, argument recognition, or stepwise/written evidence required.
4. Clone families are identified for future evidence de-duplication; questions remain available for practice.
5. Legacy IDs/tags and current learner stores remain unchanged.

## What Phase D does not authorize

- no runtime activation of the canonical taxonomy;
- no rewrite of `toan-thcs-practice-v1`;
- no history backfill/regrade;
- no Core Readiness credit from these overlays;
- no mastery threshold;
- no automatic merge of supporting skills into counters;
- no treatment of clone-family members as independent mastery evidence;
- no promotion of Extension/PENDING or composite items into Core evidence.

## Next gate — bounded pilot design

The next step is a separate additive pilot design using the already-reviewed Phase C canonical registry/compatibility contract and these Phase D overlays. The pilot must:
- keep legacy practice/history untouched;
- write new evidence only to the versioned future evidence path/store;
- start with a small reviewed skill subset, not all 492 questions;
- show evidence/status separately from legacy accuracy;
- de-duplicate clone-family evidence conservatively;
- keep PENDING/NO-counter nodes out of mastery counters;
- support rollback without altering learner history;
- pass schema/regression/browser/device QA before any production activation.

No pilot is activated by this closure document.
