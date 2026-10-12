# Phase E canonical evidence pilot R1 — machine preflight

**State:** bounded technical preflight only; not an independent academic review and not runtime approval.

## Source locks

- Manifest blob: `f962acaff602b9b6bbe827bb2667f68004b5b109`
- NotebookLM source blob: `18c58eb3c11c7c8ca7e3da1091b6a87787ffa75b`
- Phase D CĐ07 overlay blob: `0318bde17dd140ad2e94563abdbddca90343cc77`
- Source bank blobs:
  - `07-phan-thuc-dai-so-v1-01.json`: `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
  - `07-phan-thuc-dai-so-v1-02.json`: `2294a3f9d93b01b70036167713a3940fea367dca`
  - `07-phan-thuc-dai-so-v1-04.json`: `b1ba2cc3664cfc2cda13fdafe4655f744130c833`

## Machine reconciliation

- 12 selected item IDs / 12 unique IDs.
- 3 canonical primary skills.
- 7 evidence-unit keys under the proposed clone-family rule.
- 5 two-item clone-family pairs + 2 no-clone singleton items.
- 8 supporting-skill occurrences, all retained as metadata-only in the manifest.
- All 12 manifest question texts, ordered options, answer indices and ordered legacy skill tags match the current source banks exactly.
- All 12 keep `runtime_enabled=false` and `core_readiness_credit=false`.

## Storage collision preflight

Current main already uses `toan-thcs-assessment-v2` in the older Beta v3 skill-assessment path:
- pilot config blob `1079f8fca330d7486464e9114d6ef33230e18938`;
- `skill-assessment-pilot-v3.js` blob `859e20e5c14c2da15aa17448b15b4a642dca759c`.

The old v3 script normalizes/saves that key as `one-skill-assessment-events-v2`, so a second incompatible schema on the same key is unsafe. R1 therefore proposes `toan-thcs-canonical-evidence-v1` and leaves all three existing stores untouched.

## Boundary

This preflight checks consistency and source preservation. It does not independently certify the pedagogical/evidence decisions; that remains the NotebookLM gate.
