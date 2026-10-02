# Skill Taxonomy v2 — I3A full CT02 shadow release receipt

Date: 2026-10-02

## Scope

I3A expands the proven I2 shadow lane from a 12-row CT02 canary to the **entire reviewed CT02 Practice policy**.

No mastery, Readiness, backfill/regrade, or normal learner-facing Taxonomy v2 UI is enabled.

## Accepted implementation

PR: **#274**  
Exact tested HEAD: `02b39d0cf27ad2815b4f0305cda506a21ab032b7`  
Roadmap PR Quality run: **37025889031 — SUCCESS**  
Squash merge to `main`: `c1940bda496caeed2e4f269c1e9e087145a96275`  
Deploy MkDocs: **37026596985 — SUCCESS**  
GitHub Pages deployed branch: `gh-pages` @ `71c5900059fe1ace8c8b6f3431ae3124bde92dfb`

## Runtime scope

Policy:
`docs/assets/data/curriculum/taxonomy-v2-runtime/i3a-full-ct02-r1.json`

Observer:
`docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js`

Store:
`toan-thcs-taxonomy-v2-evidence-v1`

CT02 reviewed rows:
- total: **120**
- active family-linked shadow rows: **103**
- formative / NO_FAMILY guard rows: **17**
- learner-facing families: **10 KNTT-Core**
- maximum independent units after clone de-dup: **75**

Families:
- NUM-SETS
- NUM-INTEGER-OPS
- NUM-ABS
- NUM-ORDER
- NUM-POWER
- NUM-DIV-PRIME
- NUM-GCD-LCM
- NUM-FRACTION-FORM
- NUM-FRACTION-OPS
- NUM-PERCENT

## Preserved evidence semantics

- same isolated Taxonomy v2 store as I2;
- prior I2 events, seen-question indexes and independent-unit indexes remain valid;
- no migration and no backfill;
- legacy Practice write happens first;
- Canonical Evidence G2 remains separate and unchanged;
- Taxonomy v2 lane is independently fail-open;
- assisted attempts are stored but are not independent evidence;
- exact repeats are not independent;
- clone-equivalent siblings cannot inflate independent evidence;
- wrong first-unassisted answers may be negative independent evidence;
- all 17 NO_FAMILY rows are explicit no-write guards;
- family mastery threshold remains null;
- Core Readiness credit remains false;
- normal learner UI change remains false.

## Automated QA

Exact tested HEAD passed:
- I0 registry regression;
- I1 3,114-row policy regression;
- historical I2 canary invariants;
- I3A exact 120-row CT02 reconciliation;
- 103/17 active/guard boundary;
- 10-family / 75-independent-unit boundary;
- I2 store continuity;
- source-bank and source-policy locks;
- G2 isolation;
- strict MkDocs build;
- real-Practice browser QA.

Real-browser QA additionally confirmed:
- a question that was outside the I2 12-row canary now captures under I3A;
- newly opened families across all four CT02 source files capture;
- representative NO_FAMILY rows remain no-write guards;
- existing I2 evidence survives;
- forced I3A policy failure leaves legacy Practice unchanged;
- debug UI remains available only with `?taxonomyV2Debug=1`.

## Post-deploy artifact verification

Verified on deployed `gh-pages`:
- observer contains the I3A build and loads `i3a-full-ct02-r1.json`;
- deployed I3A policy reports `I3A_FULL_CT02_SHADOW_ACTIVE`, `active_rows = 103`, `no_capture_guard_rows = 17`;
- deployed CT02 Practice HTML loads the Taxonomy v2 observer.

## Current gate

**LIVE_I3A_PENDING_OWNER_PRODUCTION_QA**

Do not expand to CT03 or beyond until owner production QA closes this live full-CT02 gate.


## Owner production QA

**PASS**

Owner verified the live I3A production rollout:
- debug panel loaded with `policy_ready: true` and `policy_error: null`;
- after Practice work, store reported `recent_events: 8`, `seen_questions: 8`, `independent_units: 7`;
- last capture was `NUM02V1_100` -> `NUM-FRACTION-OPS` / `phep-tinh-phan-so`, with `independent_evidence: true` and `independent_reason: "first_unseen_unit"`;
- normal CT02 Practice without the debug query parameter showed no Taxonomy v2 QA panel.

Owner QA receipt:
`review-packets/skill-taxonomy/implementation/I3A_FULL_CT02_SHADOW_OWNER_QA_PASS.md`

Final I3A verdict: **DONE / OWNER PRODUCTION QA PASS**.
