# R24 — Historical/current question delta evidence for Skill source-lock holds

**Date:** 2026-10-17  
**Purpose:** Precise input to independent academic/source review; NO auto-approval, NO learner migration, NO mastery credit.  
**Parent phase:** Skill counter unification, R22 #508 and R23 #509 both merged after full Math public CI PASS.

## Provenance and method

R22 compiled source-lock policy: \`docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json\` (CT02–CT25; **3,114** historical question IDs).  
R23 compares 24 latest-version Practice *catalog candidates*, not presumed live bank routes; **3,173 distinct candidate IDs = 3,114 historic + 59 additional**. The 59 are **49 MCQ + 10 rich typed-answer** and remain outside the approved historical Skill source-lock. There were **0 missing historical IDs** in catalog candidates.

R22 held **150 historical questions** because the original Git blob SHA differed from the current source chunk. We compared each of these items by exact question ID against the historical immutable Git blob stored in the repository and the current \`main\` file. For each item, we compared its full JSON payload, then separated the exact changed fields. The comparison was read-only; no bank, tag, grading key, or learner history changed.

## The five changed source chunks

| Topic | Chunk | Historical blob SHA | Current blob SHA | Question count | Actual item differences |
|---|---|---|---|---:|---|
| CT08 | \`08-phuong-trinh-bat-phuong-trinh-v1-02.json\` | \`717e6988da610c382e744118fe4aca0c20d40244\` | \`0eda14ac65f06d0cd5d281893ab70d395f3bab37\` | 30 | 26 identical; 4 question stems + explanations revised |
| CT09 | \`09-he-phuong-trinh-v1-01.json\` | \`f74f701f23c2c2fa03e7e6f2162954d52ec0586f\` | \`a7e9b39e85d0b52449661e101d2b3ad2106b9f18\` | 30 | \`variant_group\` added to all 30 |
| CT09 | \`09-he-phuong-trinh-v1-02.json\` | \`ea101b62695d37174dfc257e6d49e5b09a45893e\` | \`b6dc363399cc9f030256b93251e5e9faf449df87\` | 30 | \`variant_group\` added to all 30 |
| CT09 | \`09-he-phuong-trinh-v1-03.json\` | \`18e4f5e4d00956e3f6a0a979cf5d59f5afb506e3\` | \`0ba5cb4b23d0b668c5f0ce83a1efd70883c0e7bc\` | 30 | \`variant_group\` added to all 30 |
| CT09 | \`09-he-phuong-trinh-v1-04.json\` | \`09e3c0269d42addb9a21b3fecf6fe4c3e811ce2f\` | \`e980933d5a432d86084f0c471fd5ce1b1fc9c2da\` | 30 | \`variant_group\` added to all 30 |

**150 holds = 26 bit-for-bit equal item JSONs + 4 changed educational texts + 120 metadata-only changes.** No historical IDs were added/removed within these five chunks.

For CT09, the fields \`question\`, \`options\`, \`answer\`, \`tags\`, \`difficulty\`, and \`explanation\` were unchanged on all 120 items, but the added \`variant_group\` may influence how practice variants are grouped. Its values need a separate *engineering grouping/coverage review*; metadata-only does not automatically mean behavioral irrelevance.

## Four CT08 item-level changes requiring academic disposition

The displayed \`options\`, \`answer\` (index 0), \`tags\` and \`difficulty\` did **not** change. Only the denominator notation in the question and its accompanying explanation changed:

| ID | Historical denominator | Current denominator | Answer option retained | Review concern |
|---|---|---|---|---|
| \`EQ08V1_047\` | \`x--4\` | \`x+4\` | \(x\ne -4\) | Check corrected notation renders clearly and has same domain |
| \`EQ08V1_048\` | \`x--3\` | \`x+3\` | \(x\ne -3\) | Check domain and distractors |
| \`EQ08V1_049\` | \`x--2\` | \`x+2\` | \(x\ne -2\) | Check domain and distractors |
| \`EQ08V1_050\` | \`x--1\` | \`x+1\` | \(x\ne -1\) | Check domain and distractors |

Full question pattern before/after: “Điều kiện xác định của phương trình \(\frac{x+1}{x--n}=2\) là:” → “Điều kiện xác định của phương trình \(\frac{x+1}{x+n}=2\) là:”, with \(n\in\{4,3,2,1\}\). Corresponding explanations change the denominator from \`x--n\` to \`x+n\` and continue to require \(x\ne -n\).

It *appears* that the edit normalizes ambiguous double-minus TeX rather than changing the intended domain or grading key. **That is a review hypothesis, not a NotebookLM PASS.** Do not mark the four revised questions academically cleared without independent signoff.

## Required review decisions

1. **Academic:** Independently verify the four current CT08 question renderings, single unambiguous correct choice, plausible distractors, explanation, target diagnostic skill \`dkxd-phuong-trinh-mau\`, and evidence class. Record PASS / REVISE / HOLD by exact ID, not group-by-assumption.
2. **Engineering:** Verify all CT09 \`variant_group\` values follow the currently approved grouping/dedup policy. Review conflicts across items and randomized sessions before treating them as purely passive metadata.
3. **Source integrity:** Decide whether an explicitly reviewed policy refresh is warranted. If so, regenerate correct per-chunk Git blob pins without touching historical learner data, keep stable question IDs and grading keys, and test exact-source identity. Do not simply swap all SHA values to make R22 PASS.
4. **New content:** Triage R23's 59 additional item IDs by exact live-route status, response type, source version, academic status, Skill role and answer option identity. Rich answers need their own response/grading contract.
5. **Rollout:** Even after review, R20 Skill counters are QA-only. No Readiness/Mastery authorization, no silent migration or score writes on PC/iPad.

## Independent NotebookLM review prompt

> Please independently audit the current 4 CT08 question edits EQ08V1_047–050 against KNTT mathematics and unambiguous answer keys, using the original/current exact source anchors above. Classify each ID PASS, REVISE, or HOLD with the precise reason. Separately evaluate whether the 120 CT09 \`variant_group\` metadata additions require grouped-item/dedup technical testing rather than academic regrading. Do not infer approval for 59 new items or for production Skill mastery. Return a compact evidence-based verdict and any remaining owner/engineering gates.

**Packet status: REVIEW INPUT — no NotebookLM verdict received.**
