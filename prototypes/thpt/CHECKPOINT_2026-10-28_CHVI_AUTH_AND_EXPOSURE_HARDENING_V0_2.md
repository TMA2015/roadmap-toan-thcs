# THPT ChVI · Protected Readiness hardening v0.2 — 28/10/2026

**Integration lane:** Draft PR #612 · `feature/thpt-g10-b16-knowledge-pilot-r1-20261026`  
**Owner instruction:** verify latest status and continue actual coding. No merge/deploy or academic self-PASS.

## Completed security changes, with evidence

1. **Offline signed Firebase JWT verification test**: `scripts/test-thpt-readiness-worker-auth.mjs`. This generates a synthetic RSA key, signs real RS256 JWTs, intercepts the public-key endpoint locally and verifies token signature, audience/project, expiry, issue time, origin restrictions, missing auth, blocked routes and CORS. It does **not** authenticate a real user, deploy Cloudflare, or call Firebase.
2. **Inactive private bank protection**: `services/thpt-readiness/worker.mjs` now returns `BANK_NOT_AVAILABLE` **before fetching any protected question/answer rows**. Regression detected this issue and prompted a real code fix.
3. **Origin restriction**: configure `ALLOWED_ORIGIN` only as a strict HTTPS origin, no path/query; invalid configuration fails closed.
4. **Shared-device exposure accounting**: `docs/assets/javascripts/thpt-formative-exposure-v1.js` no longer caches success for a canonical ID across accounts. Both learners' events reach the server independently. Idempotency is owned by authenticated D1 `(uid,item_id,role,event)` constraints, never the shared browser cache.
5. **Browser regression**: `scripts/test-thpt-r4-preview-browser.js` exercises two synthetic user identities on one device and verifies the same canonical ID is transmitted separately; repeat events may generate repeated requests but must not create repeat events in D1.
6. **CI integration**: `.github/workflows/thpt-r4-preview-quality.yml` runs the new Worker signed-JWT test, existing synthetic protected Readiness tests, real SQLite schema tests and R4 browser regression. No actual held-out questions/keys used.

**Evidence:** [THPT R4 QA run #40684301964 — SUCCESS](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/40684301964) on exact code commit `174663310bab429b3b5ddd3053ef55df32c2f8cb`. Roadmap PR Quality `#40684301960` was **in progress** at last read, not claimed PASS.

## Deliberate limits / unresolved production gates

- **18 real ChVI held-out questions:** remain outside public GitHub/client, **0 activated**; no real private import, no key or rubric disclosure.
- **Authentication:** real Firebase learner login, account management/revocation and deployment credentials **not connected**; only synthetic signed-token tests passed.
- **Cloudflare Worker / D1:** source/schema and SQLite compatibility tests PASS; actual connected staging and concurrent production DB tests **not yet completed**.
- **Written review:** submitted free-text answer stays private, awaiting manual rubric review; **no automatic mastery/grade**.
- **Uninstrumented older/anonymous study views:** not proof of being unseen; no false readiness assertion. Metadata-only 36 public canonical IDs remain distinct from 18 held-out IDs.
- **Golden UI R4:** retained; separate 3-part Topic and SGK complete learning paths unchanged.
- **Site release:** official THPT hosting configuration, privacy/retention, device QA and rollback still pending; owner's approval remains conditional.

```text
JWT_SIGNATURE_SYNTHETIC|PASS
PRIVATE_INACTIVE_BANK_NO_ITEM_READ|PASS
RESTRICTED_HTTPS_ORIGIN|PASS
SHARED_BROWSER_MULTI_LEARNER_EXPOSURE|PASS
D1_SYNTHETIC_TRANSACTION|PASS
CHVI_READINESS_REAL_ACTIVE|0
REAL_FIREBASE_AUTH|NOT_CONNECTED
CLOUDFLARE_D1_STAGING|NOT_DEPLOYED
WRITTEN_RUBRIC_GRADING|HOLD
THPT_R4_CI|PASS_AT_174663310
ROADMAP_PR_QUALITY|IN_PROGRESS_AT_CHECK
MERGE_DEPLOY|NO
```
