# Learner-experience evidence standard R1 — Self-Learning Math

**Standard ID:** `MATH-UX-EVIDENCE-R1-20261014`  
**Authority:** Implementation/QA supplement under Master Plan v1.2.1, Golden Learning Architecture, Academic Depth D1–D6, Written Library Contract v1. Never overrides those rules.  
**Target:** family/friends THCS V1. Designed to be reusable in a *future separately scoped* THPT, SAT or ACT Math program.  
**Status:** `TECHNICAL_A2_SMOKE_PASS_PR434 / NOTEBOOKLM_UX_REVIEW_OPEN / HUMAN_A2_OPEN`.

## Three evidence lanes, no substitution

| Lane | Method | May demonstrate | Cannot demonstrate |
| --- | --- | --- | --- |
| **T — Technical simulation** | Isolated synthetic Playwright Chrome desktop/390px; deterministic test answer keys inside QA only; AI outage; saved-state regression | Paths/buttons, visible authored wrong-answer explanations, post-submit-only Readiness reviews, deep links, localStorage separation | Child comprehension, correct mathematics across entire bank, full offline/PWA reliability, assistive tech usability |
| **N — Independent UX/document review** | NotebookLM receives current site structure, learner-facing copy, exact source routes, screenshots and audit packet; cites supplied sources | Plausible information-architecture friction, age-language mismatch, missing instructions, inconsistency and research questions | Direct observation of a child, browser interaction proofs, verified numerical math accuracy outside attached evidence |
| **H — Human learner observation (A2)** | Owner/observer assigns one grade-matched task without coaching; notes observed clicks/speech/help | Actual task completion, learner comprehension, confusion and need for help *within tested age/device/task* | Generalization to all students, universality across all grade/topic/device combinations |

A PASS in lane T or N is **not** a human A2 PASS. Findings may be OPEN, PASS, BLOCKED, UNCLEAR, NOT_TESTED; `APPROVED` must be scoped to reviewed facts, not all of V1.

## Repeatable learner tasks

- **A2-6:** From homepage, find a Grade-6 chapter on number/operations; choose matching grade-labelled Core card; read teaching; answer one intentionally wrong question; independently explain why; find Practice and self-check; return to the intended lesson.
- **A2-8:** From homepage, find Grade-8 rational expressions; choose a suitable Grade-8 Core card; explain why denominators cannot equal 0; fail one practice question; find authored feedback and relevant remediation; distinguish independent Readiness before vs after Submit.
- **A2-7/9:** Follow the current `release-readiness-a2-learner-qa-r1.md` Grade-7 triangle and Grade-9 systems cross-checks; two separate Grade-9/10 external learner forms remain separately OPEN.
- **Outage task:** With Gemini/Firebase transport blocked in isolated testing (not a full device-offline guarantee), learning/authoring content and answer explanations should continue; no auto-retry, no real provider charges.
- **Progress task:** A learner distinguishes local device activity from mastery and can explain why another browser does not automatically show their history.

## Shared UX acceptance rubric (per journey)

For every task record **grade, viewport/device, starting URL, user-assigned goal, step, observed action, expected consequence, actual consequence, wrong-answer `item_id`, explanation visible?, learner restates misconception?, remediation destination, number of prompts/help, errors/screenshots, verdict and confidence**.

The reviewer/observer must score separately:
1. **Findability:** Can learner independently choose `Học theo lớp` vs `Học theo chuyên đề` and correct grade/chapter?
2. **Scope clarity:** Correct KNTT Grade/Core versus cross-grade/Entrance10/Challenge, including a clear start for a shared-topic Core.
3. **Teaching depth:** D1 idea, D2 examples, D3 hands-on practice, D4 written, D5 authenticated exam transfer when claimed, D6 assistance and remediation.
4. **Feedback loop:** Wrong answer identifies a mathematical reason, not only a color or correctness flag. If explanation is thin, log the specific item without inventing replacement mathematics.
5. **Independent assessment:** Readiness never reveals keys/help before submission; formative attempts never silently become assessment evidence.
6. **Next action:** A wrong answer has an actionable review or practice path grounded in the actual item/skill, not speculative mastery.
7. **Responsive/accessible:** Touch/keyboard/large text labels and controls are observable in the tested device only.
8. **Persistence and provenance:** Same-browser saved state survives navigation; no silent resets/merges, no implied cloud sync, no unverified frequency or content accreditation.

## Triage and change gates

- **P0:** blocks a learning path, changes/corrupts learner records, exposes protected answers before submission or silently regrades history. Stop release and open focused fix.
- **P1:** reproducible grade-context confusion, a dead end after an incorrect answer, inability to use authored explanation without AI, or serious misleading learner labels.
- **P2:** non-blocking navigational friction, wording, count/display drift or stylistic inconsistency.
- **Academic blocker:** any newly authored/revised answer, condition, grade placement, method, assessment or item metadata goes through academic provenance and NotebookLM math review *separately from UX*. Neither reviewer nor CI directly authorizes activation.
- **Remediation:** source-lock an issue ID + exact route/item ID, change only the smallest learner-facing slice, test at desk/mobile, compare persisted history byte-for-byte and issue a release receipt.

## Anchor and shared Written Library contract

Keep canonical anchor IDs `A25-001` etc and published source routes in CĐ25; separate historical `WX*` exercise IDs are *not* interchangeable. Surface references/filters without copying or pretending all anchors are already imported into the 63-item Written Library. A future catalog crosswalk must prove one authoritative problem/solution/rubric source, stable IDs, accurate grade placement, roles `ROUTINE_PRACTICE`, `DEEP_ANCHOR`, `TRANSFER`, `ENTRANCE10`, `CHALLENGE`, and no learner-history migration without reviewed plan.

## Portability contract: THPT / SAT / ACT (future)

Retain **One Knowledge Graph → Multiple curriculum/exam overlays**, not two duplicate content banks. Keep stable semantic skill/item IDs with source provenance, qualification `KNTT-THCS` / separately reviewed `THPT` / `SAT` / `ACT`, true placement vs prerequisites, item version lineage, authored explanation, evidence roles, and readiness domains. Do **not** equate grade skills with SAT/ACT blueprint categories by label similarity, infer exam importance from authored-bank counts, reuse score semantics across credentials or assume content has been approved for a new qualification. Create new official-source mapping, age-appropriate UX tasks, reviewer packet and independent human assessment gates for each future overlay.

## Current closure snapshot

PR #434 public Math CI run `38534515613` SUCCESS for Grade 6/8 desktop/390px authored Core/Practice wrong-answer feedback, blocked AI transport, post-submit Readiness and safe remediation. Technical T representative scope **PASS**; N NotebookLM **OPEN** and H A2 **OPEN**. Count/name/navigation links under separate bounded UX PR must also pass its final SHA CI. Never use private English Actions quota, public Math artifacts or billing for this standard.
