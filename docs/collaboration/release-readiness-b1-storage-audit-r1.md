# Release Readiness B1 — Browser data durability audit R1

**Audit ID:** `MATH-RELEASE-READINESS-B1-R1-20261011`  
**Target:** Free-first family-use Self-Learning Math V1  
**Status:** `SOURCE_AUDIT_COMPLETE_BROWSER_QA_PENDING`; not a backup/restore implementation or V1 release clearance.  
**Read-only scope:** Source inventory + synthetic/disposable-profile tests. No production localStorage migration, reset or grading changes.

## Confirmed browser-local storage inventory (source-level)

The following keys are used in the shipped or staged scripts. **This is an implementation inventory, not a claim that every pilot is active on every page.**

| Key / pattern | Purpose and owner | Data sensitivity / risk |
| --- | --- | --- |
| `toan-thcs-practice-v1` | Practice answers, tag counters and observed signals; `learner-evidence-v1.js`, `practice-engine-v2.js` and legacy practice engine share this key. | **Critical learner evidence**; same-key writers must preserve compatibility. |
| `toan-thcs-assessment-v1` | Independent Core Readiness attempts, latest and best; `assessment-engine-v1.js` (up to 20 attempts per assessment). | **Critical independent assessment**, must never be conflated with assisted Practice. |
| `toan-thcs-assessment-v2` | One-skill assessment pilot events; `skill-assessment-pilot-v1/v2/v3.js`. | Historic/pilot evidence, separate from Readiness v1. |
| `toan-thcs-remediation-v1` | Skill remediation history; `practice-engine-v2.js`. | Learner recovery context. |
| `toan-thcs-taxonomy-v2-evidence-v1` | Taxonomy v2 canonical-family evidence observation; `taxonomy-v2-evidence-observer-v1.js` and Skill Map reader. | Keep separated from legacy Practice percentages. |
| `toan-thcs-canonical-evidence-v2` | Canonical G1/G2 evidence; `canonical-evidence-observer-v2.js`. | Separate schema, explicitly no v1 auto-backfill. |
| `toan-thcs-canonical-evidence-v1` | Earlier canonical evidence beta/pilot; `canonical-evidence-pilot-v1/v2.js`; referenced as older storage by v2 policy. | Preserve for historical rollback, **no silent migration**. |
| `roadmap:exam-v1:EXAM25-01`, `-02`, `-03` | Timed mock attempt checkpoints; `topic25-exam-engine-v1.js`. | Test session progress; may be time-sensitive during an exam. |
| `roadmap:exam-history-v1` | Topic 25 mock history; `topic25-exam-engine-v1.js`. | Review history, separate from mastery. |
| `roadmap.ui.focus.v1` | Visual focus preference; `knowledge-ui-v1.js`. | Non-critical user preference. |
| `roadmap.home.style.v1` | Home visual theme preference; `study-scene-v1.js`. | Non-critical user preference. |

No universal user-facing **Export/Import/Backup/Restore** workflow was found in the 36 `docs/assets/javascripts/*.js` scripts reviewed or filenames in the live repository tree (1,665 paths). This is **not proof that no third-party/browser backup can exist**; it is a scope statement about this project implementation.

## Source-confirmed current safeguards

- Practice, remediation, Readiness, canonical and taxonomy stores catch malformed JSON **when reading** and use a fresh/normalized fallback.
- G1/G2 Canonical and Taxonomy v2 observers implement guarded/fail-open capture policies: they must not alter the legacy grade/result semantics when an observer cannot capture evidence.
- Mock exam engine uses `safeRead`/`safeWrite` and recovers to a new attempt when checkpoint format is invalid.
- Core Readiness only saves attempts after **Submit**; a page load or navigating between choices must not be counted as a completed assessment.
- Practice/Gemini and floating reading Tutor have explicit error copy stating deterministic lesson/practice remains usable when AI fails.
- The website already displays on Practice that progress is saved **in this browser**, not synchronized across devices.

## Risks that remain open

| ID | Priority | Evidence / interpretation | Required next gate |
| --- | --- | --- | --- |
| `RR-B1-01` | **P1 / release blocker for durable use** | No tested user-facing backup/restore across the separate learner stores. Clearing site data, device loss or switching browser can lose history. | Design/approve a **local-only, free** manual backup and conflict-aware restore flow; test it with synthetic and real-device *test-only* data before promising recoverability. |
| `RR-B1-02` | **P1** | Several `JSON.parse` failures silently fall back to empty state. That avoids a crash, but the next valid write could replace unparseable historic data. | Design non-destructive corrupt-data handling/quarantine and dry-run restore preview; never silently clear a corrupt key. |
| `RR-B1-03` | **P1/P2** | `localStorage.setItem` errors are handled by the mock-exam and pilot modules, but not uniformly in Practice/Readiness/learner-evidence. Browser quota/private mode can throw and confuse the submit/feedback flow. | Test denied writes in a disposable browser context; protect student-facing feedback and say explicitly when a result was not saved. |
| `RR-B1-04` | **P1** | Legacy Practice, Readiness, V2 pilots, canonical observer v1/v2 and taxonomy evidence have distinct schemas and history rules. | Any backup contract must preserve original raw versioned records, keep keyed namespaces isolated and **never regrade/backfill** upon restore. |
| `RR-B1-05` | **P2** | UI contains a Gemini outage fallback; an offline/blocked-provider scenario needs browser verification. | Verify learning/practice/readiness functions without provider; keep live paid/secret/security config untouched. |
| `RR-B1-06` | **P2** | Site and assets require a reachable host to load. LocalStorage persistence alone does not imply offline learning or multi-device sync. | Set clear family-use expectations; neither offline-first nor cloud account is part of current V1 commitment. |

## Test-only B1 browser gate

The script `scripts/test-release-readiness-b1-browser.py` covers on an **isolated Playwright profile**:

1. Seed **synthetic** Practice, Readiness, assessment-pilot, canonical, taxonomy, remediation and exam-history stores.
2. Visit Core → Practice → Readiness → Skill Map without submitting; require exact synthetic store preservation.
3. Use a separate disposable profile to inject invalid JSON into five keys; require those routes to remain navigable without JS crashes (this validates usability fallback, **not recovery**).
4. Make AI CDN transport unavailable and verify the ordinary lesson still loads; if an optional AI control mounts locally, exercise its error copy. Absence of a local mounted Tutor must be reported as *not tested*, not PASS.

**Outside this gate:** true backup/export/import, cross-device continuity, data recovery after browser deletion, provider outages on the production domain, storage-quota exceptions, real-device learner comprehension. Keep all these OPEN until proven.

## Recommended **future** solution — approval required before writing runtime code

A single *manual*, local-only "Sao lưu tiến độ" and "Khôi phục tiến độ" utility may be the simplest solution for the family scope, with:
- explicit user initiation; no cloud, billing, account, server or tracking;
- a versioned export envelope, timestamp, origin/version info and **allowlist of known store keys**, not all browser storage;
- a locally generated file, checked before restoration for size/schema/version, preserving unknown historical content without running it as code;
- a dry-run preview of what would be replaced/added; confirmation with *backup-before-replace* default;
- no history recomputation/regrading, no creation of new attempts or quiz submissions;
- clear security language: anyone with the exported file could see its learner activity history, so store it privately.

**No implementation is authorized by this document.** A separate design/approval, isolated QA, then a new PR is required.

## Release decision

`B1_TECHNICAL_INVENTORY=COMPLETE`  
`B1_BROWSER_SMOKE=PENDING`  
`B1_RESTORE_VERIFIED=NO`  
`B1_CROSS_DEVICE_SYNC=NOT_SUPPORTED`  
`B1_RELEASE_GATE=OPEN`

Checkpoint: `docs/collaboration/release-readiness-checkpoint-20261011.md`. No new NotebookLM academic review is required for this technical inventory.
