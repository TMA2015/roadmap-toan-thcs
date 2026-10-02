# Skill Taxonomy v2 — I3B CT02–CT03 shadow release receipt

Date: 2026-10-02

## Scope

I3B expands the proven Taxonomy v2 shadow lane from full CT02 to **CT02 + CT03**.

No mastery, Readiness, backfill/regrade, or normal learner-facing Taxonomy v2 UI is enabled.

## Accepted implementation

PR: **#275**  
Exact tested HEAD: `b3c650955fc4481cff121702542ba57c4296140d`  
Roadmap PR Quality run: **37030103708 — SUCCESS**  
Squash merge to `main`: `a49ea5832206e7cd43df0440e241799d246a9916`  
Deploy MkDocs: **37030799961 — SUCCESS**  
GitHub Pages deployed branch: `gh-pages` @ `31e5074e82d87586501d24a8b04226859aee87c8`

## Runtime scope

Policy:
`docs/assets/data/curriculum/taxonomy-v2-runtime/i3b-ct02-03-r1.json`

Observer:
`docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js`

Store:
`toan-thcs-taxonomy-v2-evidence-v1`

Combined reviewed scope:
- total rows: **240**
- active family-linked rows: **221**
- formative / NO_FAMILY guard rows: **19**
- unique learner-facing Core families: **16**
- maximum independent units after topic-scoped clone de-dup: **149**

Per topic:
- CT02: **120 = 103 active + 17 guards**
- CT03: **120 = 118 active + 2 guards**

## CT03 families

- RATIO-BASIC
- RATIO-PROP
- RATIO-SPLIT
- RATIO-DIRECT
- RATIO-INVERSE
- RATIO-DISTINGUISH
- NUM-PERCENT (approved cross-topic canonical reuse)

## Cross-topic reuse rule

`NUM-PERCENT` is reused by CT02 and CT03, but independent evidence-unit keys remain topic-scoped. CT02 and CT03 evidence therefore aggregate to the same learner family without collapsing distinct topic evidence units.

## Preserved evidence semantics

- same isolated Taxonomy v2 store as I2/I3A;
- prior CT02 evidence is preserved;
- no migration and no historical backfill;
- legacy Practice write happens first;
- Canonical Evidence G2 remains separate and unchanged;
- Taxonomy v2 lane is independently fail-open;
- assisted attempts are stored but are not independent evidence;
- exact repeats are not independent;
- clone-equivalent siblings cannot inflate independent evidence;
- wrong first-unassisted answers may be negative independent evidence;
- all NO_FAMILY rows are explicit no-write guards;
- family mastery threshold remains null;
- Core Readiness credit remains false;
- normal learner UI change remains false.

## Automated QA

Exact tested HEAD passed:
- I0 registry regression;
- I1 3,114-row policy regression;
- historical I2 canary invariants;
- historical I3A full-CT02 invariants;
- I3B exact 240-row reconciliation;
- exact CT02/CT03 source-policy blob locks;
- 221/19 active/guard boundary;
- 16-family / 149-independent-unit boundary;
- CT02 evidence-store continuity;
- CT03 source-policy provenance;
- cross-topic NUM-PERCENT topic scoping;
- G2 isolation;
- strict MkDocs build;
- real-Practice browser QA.

Real-browser QA additionally confirmed:
- all seven CT03 family lanes can capture;
- the two CT03 NO_FAMILY rows remain no-write guards;
- CT02 remains active under the same I3B policy;
- prior CT02 evidence survives;
- forced I3B policy failure leaves legacy Practice unchanged;
- normal learner UI remains unchanged.

## Post-deploy artifact verification

Verified on deployed `gh-pages`:
- observer contains the I3B build and loads `i3b-ct02-03-r1.json`;
- deployed policy reports `I3B_CT02_CT03_SHADOW_ACTIVE`, `active_rows = 221`, `no_capture_guard_rows = 19`, `family_count = 16`;
- deployed CT02 Practice HTML loads the Taxonomy v2 observer;
- deployed CT03 Practice HTML loads the Taxonomy v2 observer.

## Current gate

**LIVE_I3B_PENDING_OWNER_PRODUCTION_QA**

Do not expand to CT04 or beyond until owner production QA closes this live CT02–CT03 gate.
