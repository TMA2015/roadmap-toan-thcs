# Phase G productionization R1 — machine preflight

**State:** source/architecture consistency only; not an academic verdict.

## Exact artifacts

- Design JSON blob: `9302ba28e1c9bf506a290b7b05f6defee2d38e92`.
- NotebookLM source blob: `1d2b4fbb736002a6c3ef9e8329e6d4605346ebe1`.

## Reviewed inventory reconciliation

- Phase D CĐ04–07 total: **492** items.
- YES primary items: **411**.
- YES canonical skills: **36**.
- PENDING primary items: **16**.
- Formative-only / no-primary items: **65**.
- Skill/topic-scoped independent units across the 411 YES items: **91**.
- G1 canary: **27 unique items**, all present in accepted Beta v4/v5 scopes and all map to Phase-D YES canonical skills.
- G1 canonical skills: **7**.
- G1 max independent units under skill + topic + clone/question identity: **16**.
- G2 combined seven-skill scope: **101 items / 23 units**.
- G3 additional reviewed YES scope: **310 items / 29 skills / 68 units**.

## Important unit-key finding

Structural clone-family name alone is insufficient. Two CĐ05 structural families contain multiple canonical skills:
- `ID05-FORMULA-RECOGNITION-075-078`
- `ID05-SQUARE-AB-RECOGNITION-079-080`

Therefore production de-dup must include `canonical_skill_id` and normalized topic in the unit identity.

## Current runtime source locks

- Practice engine v2: `d37455471a9c823395234bb266336e54b6452ec9`
- Learner evidence v1: `cc7a256687986e6d04832a0141a82ecb085ffae4`
- Practice auto-loader: `809ef48bc254ff6cd298f4132e6192e18cef36a3`
- Canonical Beta core v1: `3898152db8ae70e331b6fbb7a7e1e1b4a855aead`
- Canonical Beta multi-topic v2: `7492fde5064e668b9c1aac538724d93ea3bb3f0b`

## Runtime state

- No Phase G runtime code exists.
- No store v2 is created.
- No Practice Engine interception exists.
- No migration/backfill exists.
- Mastery/Readiness remain OFF.
