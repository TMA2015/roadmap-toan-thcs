# Skill Taxonomy v2 — I2 CT02 shadow canary controlled release

Date: 2026-10-02

## Release state

**LIVE_CANARY_PENDING_OWNER_PRODUCTION_QA**

PR: **#273**  
Exact tested HEAD: `53d6e0b90a6ceded5ace55b1c6d616c667928b3a`  
Roadmap PR Quality: **37019025938 — SUCCESS**  
Skill assessment pilot QA: **37019026358 — SUCCESS**  
G Learning branding QA: **37019026822 — SUCCESS**  
Squash merge to `main`: `e45ec7e4c5f8900f96a61ba82f9c060b94e7c8cb`  
Deploy MkDocs: **37019804305 — SUCCESS**
GitHub Pages deployed branch: `gh-pages` @ `3b04dce9ec61211818732d6cbb6d387afe893606`

Post-deploy artifact verification:
- deployed observer file exists and contains the isolated store + `I2_CANARY_ACTIVE` boundary;
- deployed CT02 canary policy exists with `I2_SHADOW_CANARY_ACTIVE` and `active_rows = 12`;
- deployed CT02 Practice HTML loads `taxonomy-v2-evidence-observer-v1.js`.

## Live canary scope

Policy:
- path: `docs/assets/data/curriculum/taxonomy-v2-runtime/i2-canary-ct02-r1.json`
- blob: `b2786b1d044b9360bf53bd6b3ee9afcffaf243ae`

Observer:
- path: `docs/assets/javascripts/taxonomy-v2-evidence-observer-v1.js`
- blob: `06d4342ba1a8f8b48d9d348bafa48592ff7e13bb`

Practice integration:
- `docs/assets/javascripts/practice-engine-v2.js`
- blob: `d114cb80631a3d69f07eb1bf88a4629f014ae9c6`

New isolated store:
- `toan-thcs-taxonomy-v2-evidence-v1`
- schema: `taxonomy-v2-evidence-store-v1`
- no migration
- no history backfill

Canary is bounded to CT02:
- 12 active Practice questions;
- 4 KNTT-Core learner families: NUM-SETS, NUM-INTEGER-OPS, NUM-ABS, NUM-ORDER;
- 2 explicit NO_FAMILY negative guards;
- maximum 8 topic-scoped independent units after clone de-dup;
- default capture is NO_CAPTURE.

## Runtime semantics

- legacy Practice write remains first;
- existing Canonical Evidence G2 observer/store remains separate and unchanged;
- Taxonomy v2 capture is independently fail-open;
- assisted attempts may be stored but are not independent;
- exact repeats are not independent;
- clone-equivalent siblings cannot inflate independent evidence;
- first wrong unassisted attempt may be valid negative evidence;
- NO_FAMILY rows never write Taxonomy v2 evidence events;
- no mastery threshold;
- no Core Readiness credit;
- no learner-facing Taxonomy v2 UI;
- debug UI exists only behind `?taxonomyV2Debug=1`.

## Automated QA result

Exact-head automated QA passed:
- policy/source locks;
- I0/I1 regression boundaries;
- store isolation;
- legacy-write-first ordering;
- assistance / repeat / clone / negative evidence;
- NO_FAMILY no-write;
- outside-canary no-capture;
- I2 policy fail-open with identical legacy Practice result;
- G2-store sentinel unchanged;
- real Practice browser integration on mobile + desktop;
- strict MkDocs build.

## Remaining gate

Owner production QA is still required before I2 is marked DONE.

Recommended owner QA:
1. Open CT02 Practice with `?taxonomyV2Debug=1`.
2. Confirm the panel title is **QA · Skill Taxonomy v2 I2 Canary** and `policy_ready: true`.
3. Complete a canary question if one is served and confirm `last_capture.captured: true`; or complete a non-canary CT02 question and confirm reason `not_in_i2_canary`.
4. Normal CT02 Practice without the query parameter must show no Taxonomy v2 panel and behave exactly as before.

No expansion beyond this canary is authorized until the owner-production gate is closed.
