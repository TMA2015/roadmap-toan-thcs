# Phase F expansion R1 — machine preflight

**State:** design/source consistency only; not an independent academic verdict.

## Locked counts

- 15 selected IDs / 15 unique IDs.
- 4 topics: CĐ04–CĐ07.
- 5 canonical skills in batch.
- 4 new-to-runtime skills + 1 existing v4 skill extended.
- 9 evidence-unit keys under reviewed clone-family rule.
- 6 clone-family groups + 3 singleton units.
- Evidence classes: 7 final-output, 2 final-answer, 3 recognition-only, 3 method-selection-only.
- Canonical supporting-skill occurrences: 0.
- All selected mappings keep `runtime_enabled=false` and `core_readiness_credit=false`.

## Source/overlay locks

- CĐ04 overlay `badef3ac1d335ed727c1a017dd295ed8ce46298f`.
- CĐ05 overlay `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`.
- CĐ06 overlay `a64ec780b62ef6fd40668eb4bbad331024b470aa`.
- CĐ07 overlay `0318bde17dd140ad2e94563abdbddca90343cc77`.
- Every selected item was copied from its exact current bank source with question/options/answer/legacy tags preserved.

## Architecture boundary

- Existing accepted store remains `toan-thcs-canonical-evidence-v1`.
- Phase F proposes append-only new canonical events; no legacy store conversion.
- Beta v4 remains frozen; proposed future surface is separate Beta v5.
- Mixed evidence classes must stay explicitly labeled; no weighted mastery score.
