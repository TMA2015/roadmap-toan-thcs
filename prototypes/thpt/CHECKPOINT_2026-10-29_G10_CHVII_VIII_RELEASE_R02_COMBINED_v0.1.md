# THPT G10 ChVII–VIII — Release Engineering Checkpoint · 2026-10-29

STATE: RELEASE_READY_CONDITIONAL / OWNER_AUTHORIZATION_GRANTED_FOR_PUBLIC_FORMATIVE_ONLY / NOT_YET_DEPLOYED
BASE_AUTHORING_PR: #624 @ 2d8ec4d9e8dcfd22d970aa19c034449211e67c14
PACKETS: G10-SGK-CHVII, G10-SGK-CHVIII
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY (NOT FULL_LEARNING_PATH)
SOURCE_CHVII: PR #620 @ 0c2640c736ec1a78c25c53bd08021b10252890a4
SOURCE_CHVIII: PR #621 @ 5f1760b10c4303cd2126389495c1e3a4e151e2eb
SOURCE_D6_R02_REVIEWED_BLOB: 03755fb8e4a192df833820b2b01617de74035076
CANONICAL_BANK_VII_BLOB: 2b191d7abba7a4f5bd79d4c122673cd53a45495b
CANONICAL_BANK_VIII_BLOB: 2ae62fada28913ec336b3507684408a1e05a3232
READY_MANIFESTS: 2 / 2 by authoring scope only

## Implementation performed on isolated technical branch

1. Reused exact public formative source: ChVII 32 items + ChVIII 25 items; 7 shared Written and four D5 figures, preserving canonical IDs/keys/solutions.
2. Combined seven B19–B25 lesson routes, Practice, Written, student-first MkDocs R4 navigation from existing Draft release sources. No duplicate exercise bank.
3. Inserted all 14 approved R02 learner D6 cards (two per lesson) with original mathematics/conditions and links to existing canonical formative or Written items.
4. Added optional query deep link to open a particular existing public formative item without scoring; no new backend, account, progress or storage key.
5. Preserved existing release-queue validator and Chapter VI guards in CI; added ChVII–VIII exact-head QA scripts and technical D6 link/static assertions.

## Release gates — evidence boundary

- R1: integrated into an isolated branch based on authoring ready PR #624, NOT merged into main. Final current-main reconciliation awaits authoring merge/owner-approved sequence.
- R2: GitHub Actions and browser QA on the exact final candidate HEAD required; do not reuse CI of #620/#621.
- R3: student-visible pages must have no authoring labels, and all 14 help cards/links must work on desktop and mobile.
- R4: chapter Readiness stays information-only/inactive; no protected question/key/rubric in static site. No skill mastery/score.
- R5: ONLY project owner can approve exact PR and scope for merge/deploy; still NOT_GRANTED.
- P1/P2: pending real deployment and physical device acceptance.

Academic PASS of D6 R02 is *only* for those 14 cards; overall CONTENT_READY refers to PUBLIC_FORMATIVE_ONLY. Do not advertise independent Chapter Readiness, Topic completion or Mastery.

## Owner authorization and final release checkpoint, 2026-10-29

- Owner explicitly authorizes ChVII–VIII PUBLIC_FORMATIVE_ONLY merge/deploy **only after exact final-head CI PASS**. No activation of Tự kiểm tra, TOPIC or Mastery.
- PR #624 source manifest merged to main @ 573fbdd4444f2e5c612f50e902f428b6064f6970. PR #625 retains all canonical 57 formative + 7 Written, reviewed 14 D6 cards and 4 SVG.
- On previous content HEAD 2de9b30f6793323ac54fd63a840ebebb781ddd2b, THPT Preview #40882054456 and Roadmap PR Quality #40882054200 reported SUCCESS. After final release metadata merge commit, rerun both CI and verify live results before merging.
- R1/R3/R4 evidence preserved; R2 is conditional on final HEAD tests, R5 granted for exact scope. P1 must be entered after deploy receipt; P2 physical device QA separate.
