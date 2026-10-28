# Owner decision — THPT official site deployment conditional approval

**Recorded:** 28/10/2026  
**Owner message:** “Nếu trang chính thức đạt các điều kiện kiểm tra, tôi đồng ý triển khai.”  
**Interpretation:** `OWNER_DEPLOYMENT_INTENT=CONDITIONALLY_APPROVED`, not immediate release authorisation. This does **not** imply that the Preview branch, backend, learner records or the entire Toán 10–12 curriculum already pass release QA.

## Required release gates (ALL must pass before any merge/deploy)

| Gate | Acceptance evidence required | Current state |
|---|---|---|
| Approved content integration | Exact reviewed ChVI source/version to rendered SGK B15–18 and public canonical item register; no incorrect answer/rubric/ID | Partial: 19/19 structural outcomes, 36 public formative/Written item IDs, deeper equivalence QA still required |
| Independent SGK Chapter Readiness | 18 held-out reviewed items delivered securely; keys/stems not exposed in public source/client ahead of eligibility; no hints, correctness or answers before Final Submit | **NOT READY** — preview uses 4-item technical no-credit demo |
| Cross-route evidence integrity | Per-learner exposure/attempt ledger; same canonical item across SGK/Topic; exclude already-exposed item from independent readiness without explicit policy; idempotent outcome/mastery | **NOT READY** |
| Technical / browser and real-device QA | Full preview + security tests, responsive desktop/tablet/phone, navigation and no broken functionality | MkDocs Preview QA PASS for prior integration commit; production/real-device QA pending |
| Official route/hosting/privacy | Confirm THPT site path and production hosting configuration, access, secrets, environment, data collection, rollback/recovery | **NOT DECIDED / NOT DEPLOYED** |
| Release candidate/owner acceptance | Present actual release candidate and checklist; owner has pre-approved deployment **if all checks pass**, but any material scope change requires a new decision | **CONDITIONAL ONLY** |

## Deployment and repository policy

- Keep THPT as its own **learning site/section**, independently navigable with Home, SGK, Topic, Library, Progress, Guide; reusing the same repo/project is acceptable. A separate repository, Firebase project, domain or subdomain is **not** demanded by this decision.
- Never deploy an insecure academic assessment or ship 18 held-out Readiness item bodies/keys in public GitHub/JS. If a secure delivery solution is unavailable, do not silently weaken the exam; document the blocker and ask owner about an explicitly scoped phased launch that excludes graded readiness.
- Before release, produce and archive a full QA record, deployment plan, rollback plan and destination. Don't claim `TECHNICAL_QA_PASS`, `ACADEMIC_PASS` for unrevised content, or `OWNER_UAT_PASS` from this conditional agreement.
- **At present:** `MERGE=NO`, `DEPLOY=NO`, `OFFICIAL_THPT_SITE=NOT_LIVE`. This receipt records conditional owner intent, not an executed release.

**Sources of truth:** Project Source 08 (Dual Complete Paths v2.0), NotebookLM reviewed ChVI snapshot/receipt, current PR #612 checkpoints and owner conditional approval. No Golden UI R4 changes.
