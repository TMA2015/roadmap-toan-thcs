# Math Phase 4 R11 — Parent-only V2 Canary Page (PC / iPad)

**Date:** 2026-10-17 · **Release status:** PR CANDIDATE / QA DATA ONLY

## QA R11 real-progress backup schema rejection (2026-10-17)

An owner tested a real `Tiến độ học tập` backup on the R11 QA import page and received the opaque error `INVALID_BACKUP_SNAPSHOT`. This **is the correct rejection**, not a failed conversion or evidence of lost student history.

- Existing production learner backup: `schema: self-learning-math-local-backup-v1`, `app: self-learning-math`, saved `entries` of legacy localStorage records.
- Isolated R11 test backup: `schema: math-v2-journal-backup-r10`, `learner_scope: QA_OWNER_R11`, `events` and `pending` IndexedDB rows.
- No source-grade, count or timestamp reconstruction is attempted. R11 does **not** import, merge or overwrite genuine learner backup entries.
- The R11 import page now labels the incompatible source in Vietnamese and directs the owner to retain the real-progress backup for its **separate real-progress restore facility**. Other JSON types receive a similarly clear unsupported-format notice. A candidate QA-format file still receives the full R10 SHA-256 and scope checks.
- Automated desktop/390px browser QA uses **synthetic metadata-only** production-schema JSON to verify rejection on a device that already has events, then confirms counters and the complete QA journal/outbox remain unchanged. Never expose actual family backup contents to test logs.

This is an error-message / import-type safety improvement, **not** a bridge between old real learner progress and new V2 evidence.

## Scope

A standalone, unlinked test page is added at `docs/qa/math-v2-owner-canary.html`. It deliberately avoids the main learner navigation and the global MkDocs script loader. It does not introduce logins, paid APIs, any data upload, any real Math lesson scoring, or any migration of existing Practice/Readiness data.

The page uses *the exact reviewed R6/R8/R9/R10 JavaScript sources*, mirrored into `docs/qa/math-v2-canary/` solely so a static-hosted test page can load the already-reviewed implementations. `scripts/test-math-v2-owner-canary-r11.js` ensures all four distribution copies remain byte-identical to their canonical prototype sources. **Never diverge the copies or load them globally.**

The fixed canary data scope is `QA_OWNER_R11` in the isolated database `math-v2-qa-journal-r6`. It is intentionally **not** the production Practice/Readiness or canonical skill database, and is unsuitable for multi-person real learning.

## R11 import UX regression fix (2026-10-17)

A parent reported that **Kiểm tra và nhập tệp** remained disabled on the receiving PC despite a selected JSON backup and both replacement acknowledgments. The cause was a UI-only precondition: the Import button was disabled until **Bắt đầu thử nghiệm** had separately been pressed on that tab.

The test page now makes file selection sufficient to unlock the Import action. Clicking Import explicitly initializes the **same isolated QA database** when needed, then runs the **unchanged R10 signature/scope validation and guarded restore**. The two replacement consents are still mandatory when the target already contains QA events. Merely choosing the file never imports it.

Browser QA covers initial disabled-without-file, direct import into a fresh receiving browser without pressing Start, reloading, replacement safeguards and tampered-file rejection. This does **not** change any real learner page or widen the QA data scope.

## Parent test flow

1. Open the separate QA page in a normal browser (not private browsing). Before pressing **Bắt đầu thử nghiệm**, no journal write action is enabled.
2. Press **Bắt đầu**, then try:
   - Practice · Trả lời đúng
   - Practice · Trả lời sai
   - Readiness · Nộp bài thử
   - Written · Tự đối chiếu
3. Check four independent counters plus the pending outbox count. The Readiness canary has **no actual grade**, explicitly reports missing grading rather than 0 points, and Written never grants Core Readiness.
4. Reload the QA page. The counters should remain, read from the same IndexedDB journal.
5. Press **Xuất tệp sao lưu JSON**. Move that download to a second device using the family's own file transfer; the site neither transmits the file nor syncs accounts.
6. On the second device, open the same test page, enable the canary, choose the JSON file, and import. The same QA counters should appear and persist after reload.
7. If the target device already contains canary data, export its snapshot first and explicitly acknowledge replacement via both checkboxes. Do **not** silently add or overwrite two independent device logs.
8. A corrupted backup must be rejected by SHA-256 validation. An aborted or unavailable IndexedDB save must never be reported as successfully saved; a retry retains the same test event ID where the browser allows session storage.

## QA and release boundary

`scripts/test-math-v2-owner-canary-r11-browser.py` runs the actual UI in disposable Chromium desktop 1365px and narrow 390px contexts, including button gating, source isolation, separate counts, file download, isolated-device restore, tamper rejection, replacement confirmation, reload and no mobile horizontal overflow. This is **not** a substitute for real iPad Safari QA.

Owner acceptance of a real PC/iPad test is still required before the production learner cutover. This page is only a manual test artifact, not a public dashboard replacing the learner's current progress. Keep the page out of the normal menu; no canonical Core credit, old grade rewriting, or deletion of legacy stores is authorized.

### Known limits

- A static page can run locally on the device only if the browser allows IndexedDB; private mode and restrictive iOS storage settings may deny it. Failure must be visible.
- Backup integrity (SHA-256) does not authenticate the person providing a file.
- A test file may contain QA history; do not put names or identifiable learner information into it.
- The fixed QA scope is for **one synthetic learner** and intentionally does not provide cloud synchronization.
- A failed write retry is kept in sessionStorage if supported; journal-first production integration still needs durable submission intent handling, backup of live journal and real grading semantics.
- The full site deployment URL should be confirmed after merge; do not assume GitHub Pages or Firebase automatically published the QA page.
