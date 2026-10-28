# THPT · Protected Readiness service (PREVIEW ONLY — NOT DEPLOYED)

## What has actually been implemented

- `assessment-service.mjs`: server-side guarded start/resume/Final Submit, no answer or hint in question delivery, score and explanation only after Final Submit, same retry returns **same stored score**, no credit/mastery.
- `worker.mjs`: Cloudflare Worker HTTP interface with **verified Firebase ID token**, strict permitted website origin, D1 private item/answer loading and persistent attempt/exposure logs. User identity comes from verified token **never** from a client-supplied learner ID.
- `schema.sql`: private question bank, disabled-by-default versions, answer keys stored only in D1, one attempt per learner/bank/version, per-learner canonical item exposure shared between SGK and Chuyên đề.
- `scripts/test-thpt-readiness-secure.mjs`: isolated real Node QA for no pre-submit key/solution leakage, no cross-learner access, no reused exposed items between SGK and Topic, complete answers, immutable first score, duplicate submit, version drift, blocked/unsafe items and no unconfigured API.
- `.github/workflows/thpt-r4-preview-quality.yml`: runs this security preflight automatically on changes.

**Nothing is deployed.** The current browser-facing Chapter VI four-question `TECHNICAL_DEMO_ONLY` page remains unchanged, and its test answers are not actual academic Readiness. The 18 NotebookLM-reviewed held-out ChVI items (including stems, keys, solutions, rubrics) are **not** in these files, nor in public JavaScript/GitHub. Do not place them here.

## Exact API contract — no student traffic yet

- `POST /v1/assessment/start`: Firebase `Authorization: Bearer <ID token>`, JSON `{"bank_id":"PRIVATE_APPROVED_BANK_ID"}`; returns attempt ID, version, canonical item IDs, questions and answer choices. Does **not** return keys/solutions/correctness or mastery.
- `POST /v1/assessment/submit`: same token, JSON `{"attempt_id":"...","answers":{"ITEM_ID":0}}`. All answers required. **Only after Final Submit**, grade and explanations are returned and stored once, even if the request repeats.
- Previously seen canonical items across SGK/Topic cannot be used in a new independently scored attempt. An unfinished attempt can resume, but not become two independent grades.

This QA service supports **single-choice** questions with an objective answer key, and **written/short-response** submissions with a reviewer-verified private rubric. Written answers are stored privately, but returned as **PENDING_MANUAL_RUBRIC_REVIEW** with **no score, solution, or mastery** until the separately approved rubric-grading workflow exists. The approved ChVI bank includes open-answer questions; **do not convert them to multiple-choice, guess mathematical equivalence, or turn a pending response into mastery**. Until the actual question formats, rubric handling and D6 QA pass, the whole bank remains inactive.

## First production activation blockers

1. Choose and configure an authorized **private Cloudflare Worker + D1** instance, compatible with the shared G Learning website; verify free quotas and account permissions before deployment. Configure `FIREBASE_PROJECT_ID`, `ALLOWED_ORIGIN` (exact **https** origin), `DB` D1 binding; Firebase Auth must be established for intended learners. **No credentials, actual DB IDs or private exam imports in GitHub.**
2. Import reviewed original 18 held-out items **privately**, check exact 54-ID review receipt/ChVI Readiness subset, item-level math/rubric and unique canonical IDs. Keep bank `active=0` until every release gate passes. Any previously exposed item is `blocked=1`, not simply hidden.
3. Extend protected grading with the **actual reviewed answer types**, exact-equivalence rules, written rubric/manual review if needed. No subjective-response autograding by guessing or converting to MCQ without DELTA_C review.
4. Validate cross-route exposure instrumentation. Existing public/static formative pages can be viewed without an authenticated log, so absence of a logged view **does not prove absence of exposure**. Independently held-out and no leaked/conceptually cloned question checks remain mandatory.
5. End-to-end test protected bank with *non-secret synthetic fixtures*: real Firebase token, Worker/D1 transactions and cross-user concurrency, network payload inspection, double submit/reload, history & restart, revocation and rate limits, origin/CORS, no answers before Final Submit, mobile browsers, failure rollback. The pure Node/mock tests do **not** prove these production guarantees. Add service-side request logging without storing tokens/answers or sensitive personal data.
6. Decide learner data retention/privacy/access control, hosting route/rollback and owner UAT. Only then may `active=1` and mastery integration be separately approved. Do not claim that this service alone grants mastery or readiness.

## Status

```text
ENGINE_DOMAIN_AND_API_SOURCE|IMPLEMENTED_IN_DRAFT_PR
SECURE_SERVICE_UNIT_QA|AUTOMATED_NODE_TESTS
WORKER_D1_DEPLOYED|NO
PRODUCTION_AUTH_CONNECTED|NO
PRIVATE_ACADEMIC_BANK_IMPORTED|NO
CHVI_REVIEWED_READINESS_ITEMS_ACTIVE|0
OPEN_RESPONSE_SUBMISSION|PRIVATE_PENDING_MANUAL_REVIEW
FULL_MIXED_RESPONSE_GRADING|NOT_IMPLEMENTED
CROSS_ROUTE_PUBLIC_EXPOSURE_COMPLETE|NO
REAL_DEVICE_AND_SERVER_SECURITY_D6|NOT_PASSED
MASTERY_CREDIT|OFF
MERGE_DEPLOY|NO
```

This is the first **implementable engineering step** towards the previously missing secure assessment gate; it is **not a complete or authorized THPT first-release assessment**.
