# CĐ02/CĐ23 seven-gap release reconciliation — 30/09/2026

**Academic packet:** `MATH-CORE02-23-GAP-R1-20260930`  
**Reviewed source blob:** `9695c998aade401f4c4129aa25ac6a8392a41b2b`  
**Independent verdict:** `PASS` (7/7)  
**Audit provenance:** Draft PR #185 — review-only, not production.

## Approved append-only release scope

CĐ02:
- `NUM02MICRO_016` → `luy-thua`
- `NUM02MICRO_017` → `phan-tich-thua-so-nguyen-to`
- `NUM02MICRO_018` → `bcnn`
- `NUM02MICRO_019` → `gia-tri-tuyet-doi`
- `NUM02MICRO_020` → `quy-dong-so-sanh-phan-so`

CĐ23:
- `PRO23MICRO_016` → card 3 `kiem-tra-xac-suat`
- `PRO23MICRO_017` → card 5 `xac-suat-co-dien`

All seven are `KNTT-Core`, `micro_role=coverage`, formative opportunities only.

## Data-preservation contract

- Existing `NUM02MICRO_001–015` canonical record blob: `675b1312713c3e040f6695fd20c68db3b49e656a`.
- Existing `PRO23MICRO_001–015` canonical record blob: `8be2c67391b4efe86fbe2f9612fb98588e6d3240`.
- Existing learner localStorage and attempt records are not migrated, rewritten or regraded.
- Existing Core Readiness banks are not modified.
- Adding a coverage opportunity does not grant mastery and does not retroactively create a past attempt.
- CĐ23 remains within reviewed simple-probability scope; no advanced tree/non-replacement extension is introduced.

## Expected post-release state

- CĐ02 micro bank: 20 items; every declared card skill has at least one dedicated formative item.
- CĐ23 micro bank: 17 items; every declared card skill has at least one dedicated formative item.
- Original first three items in each card retain Base → Trap → Apply order. New items follow with `coverage` role.
- Cards, URLs, routes and learner identifiers remain stable.

## Release gates

Dedicated test `scripts/test-core02-23-seven-gap-release.js` verifies old-record canonical blobs, exact new IDs/oracles/scope/provenance, append-only roles and zero remaining declared-skill gaps. Existing CĐ02/CĐ23 Golden tests and the standalone route regression suite must also pass, followed by strict MkDocs and browser QA.
