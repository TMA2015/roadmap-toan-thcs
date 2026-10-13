# Self-Learning Math THCS V1 — Learner-experience readiness audit R2

**Audit:** `MATH-FAMILY-V1-LEARNER-EXPERIENCE-R2-20261013`  
**Date:** 13/10/2026  
**Status:** `SOURCE_REVIEW_COMPLETE / PEDAGOGICAL_HUMAN_A2_OPEN / NO_RUNTIME_CHANGE`  
**Source-locked implementation:** public `TMA2015/roadmap-toan-thcs` `main` `afb76376ea05909f18511bf7d856997f290996bb`  
**Target:** high-quality **family/friends THCS V1**, not public/commercial launch; **not** a computed readiness score.

## Source precedence and audit boundaries

Governance: Master Plan v1.2.1 (*One Knowledge Graph, Two Learning Paths, One Written Library*), Golden learning cycle `Orient → Foundation → Learn → Practise → Self-check → Analyse errors → Remediate / Space review → Continue`, Academic Depth D1–D6. Current implementation and QA proof come from GitHub `main`, not the 04/10 handoff or historical drafts.

This is a **read-only static/product audit** reconciled with the released technical QA; it is **not** new curricular research, NotebookLM clearance, a representative new browser test or a student-comprehension PASS. Review does not authorize question generation, content merging/splitting, grade-layer promotion, force-unlock/lock rules, diagnosis-to-mastery conversions, accounts, Firebase changes, history rewrites, or English private GitHub Actions use.

### Evidence assessed (current source)

- `docs/index.md`; `docs/hoc-theo-lop/index.md`; `docs/huong-dan/index.md`; `docs/tien-do-hoc-tap/index.md`.
- `docs/assets/javascripts/class-learning-v1.js`, `topic-workspace-v1.js`, `practice-engine-v2.js`, `assessment-engine-v1.js`, `math-progress-dashboard-v1.js`, `skill-priority-preview-r1.js`.
- `docs/collaboration/release-readiness-audit-r1.md` and `release-readiness-a2-learner-qa-r1.md`, previous B1/B2 source-locked CI and owner visual/backup observations.
- Family-user device visual observation **13/10/2026**: desktop Ctrl + wheel zoom to 200%, enlarged type on iPad and iPhone (very large, not maximum), no visible overflow or broken text; recorded as an owner scope-limited observation in [PR #429](https://github.com/TMA2015/roadmap-toan-thcs/pull/429). Separate technical root-font 200% Chromium QA was released via PR #428. Neither is a VoiceOver/TalkBack or universal device certification.

## What works in source and has existing technical tests

1. **Two paths, one content system.** Homepage, KNTT Grade 6–9 chapter panels and the 25-topic path are present. R1 source QA counted 39 grade/chapter entries and 46 Core links. Four sample grade routes have desktop/mobile automated navigation through Core teaching, Practice and *unsubmitted* Readiness. These prove **availability/navigation**, not student understanding.
2. **Learn (D1/D2/D6 technical support).** Core Cards expose `Bài giảng`, `Luyện tập`, concept/conditions, worked examples, misconception and micro-practice. The micro player can give deterministic hints, reveal worked steps/explanations and records assisted use separately; where reviewed teaching copy is absent it directs learners to the full Core section, **not** an invented solution. These are affordances; explanation *quality across items* was not independently sampled here.
3. **Practice (D3/D6).** `practice-engine-v2.js` gives per-answer feedback, hints, reworked explanation, topic skill rows and “Luyện điểm yếu”. It has a conservative diagnosis path: minimum **3 attempts** for a tag, low observed accuracy threshold **<75%**, with separate kinds of evidence and no prerequisite weakness deduced solely from failure at the target skill. Non-AI guidance is available without Gemini.
4. **Independent Core Readiness.** `assessment-engine-v1.js` renders summary **only after submission**, review of each answer and up to three `Luyện lại` deep links for missed skills. Readiness evidence is stored independently of formative Practice; readiness remains *soft*, not a learning lock. B1 R2 synthetic corrupt/denied-localStorage safeguards are released.
5. **Progress transparency.** Dashboard deliberately reports activity counts, distinct Practice questions, submitted Readiness attempts and observed skill tags from **this browser only**. It does not claim automatic mastery, mix formative and assessment scores, or silently sync devices. Manual guarded JSON backup/restore was owner-reported working desktop→iPhone; failures on other real devices are outside observed proof.

## Prioritized learner-facing gaps — validate before coding

| ID | Priority | Source-verified fact or evidence gap | Required next proof / bounded decision |
| --- | --- | --- | --- |
| `V1-LX-01` | **P1 A2** | KNTT Grade→Chapter links point mainly to **shared cross-grade topic Core pages**, not a unique lesson-only player. Grade/lesson labels are present, with an explicit warning that not all cards in a topic belong to the selected grade. This is **not a broken link**. | Observe a real Grade-6 and Grade-8 learner entering a chapter, choosing the **correct grade-labelled card independently**, then returning to their intended lesson. If confused, prioritize a grade-context highlight/filter or an explicit “Bắt đầu bằng thẻ…” link that reuses the same card IDs; do **not** fork content. |
| `V1-LX-02` | **P1 A2 / D2 D6** | Source has non-AI hints/solutions and a truthful fallback when a card lacks per-card teaching copy. Existing route smoke does not validate if a **wrong answer explanation** is understandable for all four grade sample domains. | Independently try wrong answers in G6 arithmetic, G7 geometry, G8 domain restrictions, G9 systems. Record whether the child can say *what went wrong*, identify the condition/step and act on a next link. Log missing/thin explanation by `item_id`, not synthetic global pass; new math wording requires NotebookLM review. |
| `V1-LX-03` | **P1 UX clarity** | Practice has evidenced weak-skill/remediation options **inside a topic**. But Dashboard “Tiếp tục học” lists static path links and “Kỹ năng đã luyện” shows top eight tags by attempts; it does **not** give a reliable personalized “next exact lesson” suggestion. The separate priority preview is curriculum importance, **not** individual weakness. | Test if learners understand where to review after missing an item. A small, explicit “Luyện lại kỹ năng trong bài vừa làm” deep link might be acceptable only when grounded in a recorded answer/skill. Never call ≤2 attempts a confirmed weakness; never infer weak prerequisites from one wrong target question. Avoid a new recommendation algorithm in this audit. |
| `V1-LX-04` | **P1 A2** | Primary homepage hero emphasizes **25 topics** and Roadmap, while `Học theo lớp` exists elsewhere. The guide currently proposes reading Roadmap and guide before choosing path. These may be reasonable for older students but add decisions for younger learners; confusion **not yet observed**. | Give task only (“Find your Grade 6 school chapter”) without navigation coaching. If repeatedly blocked, trial a clear two-choice homepage entry (`Học bài đang học ở trường` / `Ôn nền tảng theo chuyên đề`), linking to existing routes; no second graph. |
| `V1-LX-05` | **P1 offline/no-AI** | Practice and Core do supply deterministic non-AI explanation, but four-route automated smoke **does not simulate unavailable AI provider or broken AI network**. | Isolated browser outage QA on one Grade-6 and Grade-8 task, ensuring Core content, answers, explanations and remediation work without Gemini. No real Gemini calls or Firebase/billing changes. |
| `V1-LX-06` | **P2 honest progress** | Dashboard labels distinguish activities from mastery and explicitly warns that users sharing a browser/origin can mix records; manual transfer is separate from online sync. | Do not add profiles/cloud. During real-family QA, verify a learner knows saved progress is device-local and recognizes what manual backup protects; keep B1 device-corruption tests isolated. |
| `V1-LX-07` | **P1 gate, no substitute** | The A2 protocol `release-readiness-a2-learner-qa-r1.md` still records required **Grade 6/8** learner scenarios + **Grade 7/9** cross-checks as requiring human observation. Owner also expects two separate **Grade 9/10 learner feedback forms**, not yet returned. | Grade 9/10 forms inform broader UX but **do not automatically substitute** unobserved G6/G8 tasks. Only record `A2_PASS` for scope actually performed by real learners; distinguish `PASS / BLOCKED / UNCLEAR` and required help. |

## Next execution sequence (one bounded gate at a time)

1. **Technical A2-feedback smoke (no academic edits):** define and run deterministic wrong-answer flow for representative G6/G8 Core Micro, Practice, Readiness after Submit, including preserved learner state in isolated profiles. Confirm that an answer explanation and actionable return route appear; do not test semantic mathematical correctness by DOM alone.
2. **Outage robustness:** explicitly disable the AI/network path in the isolated browser, then ensure Core → Practice → self-check still works with authored, non-AI content. Report exact failing URLs and UI states, no new AI/paid work.
3. **Real learner observation:** use existing [A2 learner protocol](release-readiness-a2-learner-qa-r1.md) for short age-appropriate G6/G8 tasks and the separate two G9/G10 learner forms when available. No name/account/medical or other sensitive student data needed.
4. **Issue triage:** promote only reproducible **blocked** interactions to P0/P1 fixes. If comprehension is unclear, record **OPEN/UNCLEAR** and ask what the child did, not assume broken content. NotebookLM independent academic review applies to substantive new/revised math explanations, not documentation or CSS.
5. **V1 release decision:** update R1 score-free readiness gate with technical PASS, evidence-limited owner device checks, A2 results, and outstanding conditions. Do not advertise universal self-learning effectiveness solely from test counts or GitHub CI.

## Protected constraints

- **No additional question quotas, curriculum changes, score backfills, history migrations, skill reclassification, or fabricated learner observations.** A2 is intentionally not closed.
- All GitHub commands/CI remain confined to **public `TMA2015/roadmap-toan-thcs`** on standard public runners. Do not dispatch, reference, upload artifacts to or otherwise consume **private Self-Learning English** quota or shared Actions artifact/cache storage.
- Historical count and quality estimates are baseline audit descriptions, not a real-time learner-success metric. Future THPT/SAT/ACT adaptation is separate design work, not a V1 blocker.
