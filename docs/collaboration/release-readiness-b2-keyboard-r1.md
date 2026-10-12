# B2 R1 — Keyboard activation and responsive continuity QA

**Project:** Self-Learning Math (public repository Math only)  
**Scope:** family-use THCS V1, Grade 6 topic `02-so-va-phep-tinh` and local Dashboard  
**Status:** `TEST_CANDIDATE / CI_PENDING / HUMAN_A2_OPEN`  
**Baseline:** `6c5e169a8bb9188bdb84e6d5f72966f21f0b8202`

## Purpose

Continue Release Readiness R1/B2 automated accessibility and product consistency work while waiting for the two Grade 9/10 student feedback forms. This is a **test-only** follow-up, not academic authoring, learner-data migration, a Mastery decision, or an accessibility certification.

## Deterministic browser paths

- Fresh disposable Chromium profiles at desktop 1365×900 and phone-sized 390×844, no real learner history.
- Practice: focus answer button and activate by **Enter**, confirm feedback, next controls, absence of false save warning, and a newly written Practice record.
- Readiness: focus and choose radio by **Space**, confirm no pre-submission history write, focus Submit and activate by **Enter** (accept incomplete-answers confirmation), check result visible and independent Readiness persistence.
- Cross-lane invariant: a Readiness submission **must not mutate** the saved Practice payload.
- Dashboard: semantic accessible heading and link; focus and open “Học theo lớp 6–9” with Enter, keep two histories byte-for-byte unchanged; no browser JS pageerrors or horizontal overflow in the resulting route.
- Existing B1 R2 failed-save, backup/restore, release-readiness and other public Math QA tests remain unchanged.

Source: `scripts/test-release-readiness-b2-keyboard-browser.py` added to public Math `qa-pr.yml`.

## Boundaries / owner gates

**Open:** actual iOS Safari/VoiceOver, Android/TalkBack, keyboard-only TAB traversal from homepage, 200% browser zoom, mathematical diagram readability, touch targets/handedness, assistive-device spoken math, and authentic Grades 6–9 learner task comprehension. No amount of isolated Chromium automation establishes these PASS.

This B2 test never accesses `self-learning-english`, invokes private English GitHub Actions, uploads screenshot artifacts, changes grades, writes real learner data, touches Firebase, or changes academic content. GitHub public runner and no-artifact guard R1 apply.

After QA: if findings expose real issues, fix only within a separate, narrowly reviewed Math PR. Do not infer `B2_PASS` for the entire application from these representative journeys.
