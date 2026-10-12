# NOTEBOOKLM SOURCE — Phase G / Canonical Evidence Productionization & Scale R1

**Packet ID:** `MATH-CANONICAL-EVIDENCE-PRODUCTIONIZATION-G1-R1-20260930`  
**State:** `READ_ONLY / DESIGN_ONLY / NOT_RUNTIME_ENABLED`  
**Design blob:** `9302ba28e1c9bf506a290b7b05f6defee2d38e92`

## 1. Accepted baseline

Phase E / Beta v4 and Phase F / Beta v5 are both production-released and owner-QA PASS.

The accepted pilot system proved:
- one canonical primary per response;
- supporting/legacy secondary tags do not create a second canonical event;
- clone-family de-dup;
- negative first-unassisted evidence;
- cross-topic canonical identity;
- evidence-class/topic breakdown;
- append-only canonical history during the pilots;
- no mastery/readiness overclaim.

Current canonical Beta store:
`toan-thcs-canonical-evidence-v1`.

Current Practice legacy store:
`toan-thcs-practice-v1`.

## 2. Why a new production gate is required

Normal Practice Room currently writes every legacy `tags.skill` into `toan-thcs-practice-v1`. Canonical Beta logic is separate.

Directly connecting Practice to canonical-v1 is **not** proposed because:

1. canonical-v1 keeps only the last **500 events**; at scale, an old event could fall out and a previously seen question/unit could later be misclassified as new;
2. v1 contains Beta provenance rather than clean production-Practice history;
3. Beta v4 and v5 used different raw topic identifiers (`07-phan-thuc-dai-so` vs `CĐ04/CĐ05/CĐ06/CĐ07`);
4. production integration introduces hints/full-solution assistance semantics that the isolated Beta pages did not need to solve.

Therefore Phase G proposes a new production store, **without migrating or deleting v1**.

## 3. Proposed production store v2

New key:
`toan-thcs-canonical-evidence-v2`

Beta v1 is frozen read-only provenance. No migration/backfill from v1.

v2 stores:
- `recent_events`: bounded recent descriptive history, proposed max 1000;
- `seen_questions`: persistent compact index, not truncated with recent events;
- `independent_units`: persistent compact index of the first independent evidence for each canonical skill + normalized topic + evidence unit.

Truncating `recent_events` must **never** erase de-dup memory.

Default learner-facing production summaries use v2 only. v1 may remain visible in parent/QA history but does not block or inflate production evidence.

## 4. Normalized topic and evidence-unit identity

All new production events use topic slugs such as:
- `04-bieu-thuc-dai-so`
- `05-7-hang-dang-thuc`
- `06-phan-tich-da-thuc`
- `07-phan-thuc-dai-so`

Existing v1 events are not rewritten; aliases may normalize them only at read/display time.

Production independent-unit identity is:

`canonical_skill_id + normalized_topic_key + clone_family`

or, for singleton items:

`canonical_skill_id + normalized_topic_key + question_id`.

This explicitly forbids accidental cross-topic clone de-dup.

Important machine finding: in CĐ05, structural clone families `ID05-FORMULA-RECOGNITION-075-078` and `ID05-SQUARE-AB-RECOGNITION-079-080` contain multiple canonical skills. Therefore clone-family name alone is insufficient; the unit key **must** be skill-scoped.

## 5. Assistance semantics

Practice supplies:
- `hintsUsed`;
- `fullSolutionViewed`;
- practice mode.

Proposal:
- hint or full-solution attempt is stored as descriptive canonical evidence;
- assisted event has `independent_evidence=false`;
- same exact question is then considered seen and cannot later become independent;
- an **unseen sibling** in the same clone family may later become the first independent unit if that unit has no independent event yet;
- first unassisted attempt on a new unit remains independent even when wrong;
- supporting skills / secondary legacy tags never get a second event.

This “unseen sibling after assisted exposure” rule is intentionally submitted for independent academic review.

## 6. Integration architecture

New module:
`RoadmapCanonicalEvidenceObserver`

Normal Practice sequence:

1. existing legacy Practice write succeeds exactly as today;
2. canonical observer is called second;
3. observer checks an explicit runtime policy row for the exact question;
4. if eligible, append to canonical-v2;
5. if canonical capture fails, **Practice still succeeds**;
6. no automatic retry/backfill is performed.

Canonical failure must never rollback or corrupt `toan-thcs-practice-v1`.

Current remediation, weak-skill ranking and Core Readiness remain based on their existing data paths. Phase G does not switch them to canonical evidence.

## 7. Explicit rollout tiers

Phase D CĐ04–07 closed with:
- 492 total questions;
- 427 primary mappings;
- 411 primary items whose canonical node status is YES;
- 16 PENDING primary items (`phan-tich-da-thuc-hoan-toan`);
- 65 formative-only/no-primary items;
- 36 YES canonical skills;
- **91** skill-scoped independent evidence units across the 411 YES items.

### G1 — Canary shadow capture
Exactly the **27 items already proven in Beta v4/v5**:
- 7 canonical skills;
- max 16 skill/topic-scoped independent units;
- no normal learner-facing UI change;
- owner/QA debug surface only.

### G2 — Proven-skill expansion
After G1 owner QA:
- expand the same 7 proven skills to all Phase-D YES primary items for those skills;
- combined scope: 101 items;
- 23 skill/topic-scoped units;
- 74 additional items beyond G1.

### G3 — Remaining reviewed YES skills
After G2:
- additional 310 items;
- additional 29 skills;
- additional 68 units;
- activate in bounded batches, never all at once.

### Blocked
- 16 PENDING items: no capture;
- 65 formative-only items: no canonical primary event.

No CĐ08–25 canonical production capture is authorized by this packet.

## 8. Runtime policy contract

Each question row must carry:
- question_id;
- normalized_topic_key;
- canonical_skill_id;
- evidence_class;
- clone_family;
- supporting_skills;
- source_file + source_blob;
- reviewed Phase-D overlay blob;
- capture_status.

Capture statuses:
- `G1_CANARY_ACTIVE`
- `G2_PROVEN_SKILL_ELIGIBLE`
- `G3_REVIEWED_ELIGIBLE`
- `BLOCKED_PENDING`
- `FORMATIVE_ONLY`

Default is **NO_CAPTURE**.

Canonical primary comes only from the reviewed Phase-D overlay, never from legacy tag order.

## 9. Required G1 QA before any release

Must include:
- exact 27-row source/overlay reconciliation;
- legacy-write-first + canonical-fail-open tests;
- proof that legacy Practice behavior/data is identical with observer success or forced observer failure;
- no writes to assessment-v1, assessment-v2 or frozen canonical-v1;
- hint/full-solution assisted-event tests;
- negative first-unassisted evidence;
- same-question repeat + topic-scoped clone de-dup;
- shared-skill cross-topic tests;
- `ID05V1_120` legacy-tag-order test;
- retention stress test proving `recent_events` truncation cannot erase indexes;
- synthetic storage-size test;
- desktop/mobile Practice Room browser QA on CĐ04–07;
- owner real-device QA before any G2 expansion.

## 10. Safety boundaries

Still OFF:
- mastery threshold / mastery percentage / Mastered labels;
- Core Readiness credit;
- canonical-driven remediation or weak-skill ranking;
- historical backfill/regrade/migration;
- automatic expansion outside runtime policy;
- PENDING/NO/Extension counters;
- exam-frequency weighting inferred from authored-bank frequency.

## 11. Independent review questions

1. Is freezing beta-v1 and starting clean production-v2 preferable to reusing v1 at scale?
2. Is `recent_events + seen_questions + independent_units` sufficient to prevent retention-induced false “new evidence”?
3. Is the assisted rule academically sound: same question blocked after assistance, but an unseen sibling may later become the first independent unit?
4. Is skill + normalized topic + clone/question the correct independent-unit identity?
5. Is legacy-write-first / canonical-fail-open acceptable if no retry/backfill occurs?
6. Is G1 bounded appropriately to exactly 27 already-proven items with no normal learner UI change?
7. Is the sequence 27 → 101 → remaining 310 sufficiently conservative?
8. Should beta-v1 history stay excluded from default production learner summaries?
9. Are the G1 QA requirements sufficient?

## 12. Required verdict

Return exactly one overall verdict:

`PASS` or `REVISIONS_REQUIRED`.

If PASS, this only authorizes **technical implementation/QA of G1 canary shadow capture**. It does not authorize automatic deployment or G2/G3 expansion.
