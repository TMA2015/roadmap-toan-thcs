# Self-Learning Math — Family Progress Dashboard + Local Backup R1

**Workstream:** `MATH-PROGRESS-LOCAL-BACKUP-R1-20261011`  
**Goal:** high-quality private family learning (free-first, no account/server/billing); manually transfer progress among PC, iPad and phones; a useful Math learning dashboard independent of the English app.  
**Source:** `main` checkpoint `99a17c110328142ce004405ebb0191dcf6d08d63`.  
**Status:** `TECHNICAL_QA_PASS_DEPLOYED_OWNER_DEVICE_QA_PENDING`.

## Scope

- `/tien-do-hoc-tap/`: a learner-facing, read-only dashboard with four **descriptive** counters: Practice attempts, distinct Practice question IDs, submitted Core Readiness assessments, and independent Taxonomy v2 evidence units.
- Separate panels show most practiced legacy tags (correct/attempted) and recent submitted Readiness results. No new grading, aggregate mastery, thresholds or readiness gates.
- Local-only manual backup/restore in the same page, independent of Firebase/Gemini. Exports only known browser storage keys; no network calls, no user accounts.
- User experience: file download on source device, transfer file manually (AirDrop, cable, email/file manager etc.), select file on destination device, review conflicts, restore.
- **Default = ADD_MISSING_ONLY**. An existing key is preserved even if its value differs. Conflict `REPLACE` requires a **fresh downloaded backup of destination data**, an explicit checkbox and a final confirmation. No automatic merge of counters, timestamps or grade history.

## Contract and safety

1. `schema=self-learning-math-local-backup-v1`, `version=1`, `app=self-learning-math`, `created_at`, `entries`, `sha256`.
2. The checksum is SHA-256 over the canonical serialized payload fields, ensuring file-integrity detection (it is **not** encryption or authentication).
3. Max file = 12 MiB; fixed allowlist of 13 browser keys (Practice, remediation, independent Readiness, pilot, canonical/taxonomy evidence, three mock exams and UI preferences). Unknown keys/unsupported schemas or malformed JSON are rejected, not executed.
4. Files preserve original stored JSON strings byte-for-byte per key. Restore never reconstructs answers, regrades, migrates v1→v2 or joins Practice and independent evidence. Backup refuses malformed stored JSON instead of silently discarding it.
5. On write failure the utility attempts rollback of keys already written and reports a partial rollback problem if recovery fails. Browser storage limits, private browsing and user deletion remain possible.
6. If a device already contains learning records in one key, default import **does not merge** another student's record in that key. To move an existing account between machines, the receiving user must choose the explicit replacement path after making their own safety backup.
7. This is **not automatic synchronization**. Two simultaneously edited copies can diverge; the user decides which snapshot to restore.
8. The backup file contains potentially sensitive learning history; it must be stored privately. SHA-256 does not prevent disclosure or forged exports.

## Known limitations and future opportunities

- No family-profile selector. Multiple learners on the same browser/origin still share storage; independent browser profiles are needed until a separately designed multi-profile feature is approved.
- Backup validates known top-level storage schemas and file integrity, not semantic validity of every historic attempt. Rehydration is validated by the existing runtime loader on page load; do not assert full data migration or universal 100% restore before real-device QA.
- Current dashboard shows local device activity, not lesson completion per grade, total study hours, universal skill mastery, or independent exam success certification. More detailed recommendations require separately reviewed evidence sources and pedagogical rules.
- Practice success counters include retakes and hinted answers; they cannot stand in for independent Readiness evidence.
- The owner and daughter can continue human learner A2 testing **in parallel** with this engineering rollout; do not block the learning process waiting for a formal study.

## QA gates

- `scripts/test-math-progress-backup-v1.js`: contract, SHA-256, unauthorized key, tamper rejection, missing-only, conflict acknowledgment and storage error rollback; plus separated dashboard calculations.
- `scripts/test-math-progress-backup-v1-browser.py`: creates backup in a desktop browser profile, transfers synthetic file to a different mobile browser profile, verifies default preservation of existing work, explicit replacement, integrity failure rejection, and responsive UI.
- Full public-repo GitHub PR Quality and Pages build/deploy.
- Owner manual test: perform download → transfer → file upload across **real** Windows/Android/iOS/iPadOS browsers with TEST data. Verify download availability and file-picker UX; do not test by overwriting real learning history.

## Future THPT / SAT / ACT constraint

Keep backup envelopes/versioned namespaces extensible, but do not add THPT/SAT/ACT data blindly to this THCS allowlist. New content tracks need explicit scoped storage keys, curriculum/assessment semantics and non-destructive migration evidence. This R1 feature does not implement that extension.

## Handoff

Branch: `feature/local-backup-dashboard-r1-20261011`.  
PR: **#416 MERGED** — https://github.com/TMA2015/roadmap-toan-thcs/pull/416. Squash merge SHA: `d9095bccf2ca3c22477258beb398576923fcfa11`.
- Roadmap PR Quality run `38158837473`: **SUCCESS**, including Node contract and browser QA.
- Skill assessment pilot QA `38158837457`: **SUCCESS**; branding QA `38158837487`: **SUCCESS**.
- Deploy MkDocs run `38159291713`: **SUCCESS**, HTML+JS+CSS confirmed on `gh-pages`.
- User URL: https://tma2015.github.io/roadmap-toan-thcs/tien-do-hoc-tap/
- Owner real-device PC/iPhone/iPad transfer QA: **NOT YET CONFIRMED**.
- A2 learner journey observation: **OPEN / CONTINUES IN PARALLEL**.  
Checkpoint: `docs/collaboration/release-readiness-checkpoint-20261011.md`.  
Next: CI feedback → targeted fixes → merge only if green → verify live Pages → manual owner QA for real phone/PC.
