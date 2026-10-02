# Skill Taxonomy v2 — I1 topic-local policy compilation technical checkpoint

Date: 2026-10-02

## Scope

I1 only: compile the academically reviewed CT02–CT25 Practice overlays into static, topic-local policy files.

No observer, no learner-facing UI, no learner-data write, no mastery/Readiness activation.

## Accepted implementation

PR: **#272**  
Exact tested HEAD: `35128a591e60e7737c00d2f63d3713b8d50d43ad`  
Roadmap PR Quality run: **37016671647 — SUCCESS**  
Squash merge to `main`: `144772d4464aa03d79ddcaf543dcc4fc7a956145`

Runtime-disabled index:
- path: `docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json`
- blob: `592075ed951a55c7b0c6b81255e1ca51c9672339`
- schema: `skill-taxonomy-v2-runtime-index-r1`
- status: `I1_COMPILED_RUNTIME_DISABLED`

## Compiled scope

- topic policy files: **24** (`ct02-r1.json` … `ct25-r1.json`)
- reviewed Practice rows: **3,114**
- family-linked rows: **2,900**
- formative / NO_FAMILY rows: **214**
- largest single topic policy: **195 rows**
- global question IDs: **3,114 unique**
- one monolithic 3,114-row browser policy: **not created**

## Provenance

The policies compile only academically closed item-level sources:

- CT02–03: reconciled S1 full-bank overlays.
- CT04–07: Phase D full-bank overlays, validated by the Phase D closure PASS / zero revisions.
- CT08–12: reconciled S2 full-bank overlays.
- CT13–20: reconciled S3 full-bank overlays.
- CT21–25: S4 combined full-bank overlays with NotebookLM PASS receipt.

Every policy row includes:
- question ID and topic ID;
- source Practice file + Git blob SHA;
- legacy skill tags;
- reviewed source primary / diagnostic ID where applicable;
- learner family ID or explicit NO_FAMILY;
- family layer;
- mapping role;
- evidence class;
- clone family;
- runtime/independent-credit flags OFF.

## QA invariants

The dedicated I1 CI test verifies:

1. all 24 topic policies exist in CT02→CT25 order;
2. total rows = 3,114 and IDs are globally unique;
3. family-linked total = 2,900;
4. NO_FAMILY/formative total = 214;
5. every current Practice source file has the exact reviewed Git blob SHA;
6. every source question ID is represented exactly once in its topic policy;
7. policy legacy skill tags exactly match the source bank tags;
8. every family ID exists in the I0 registry;
9. family layer equals the registry layer;
10. NO_FAMILY rows expose no diagnostic mastery ID;
11. source overlay blobs are locked;
12. I0 registry remains runtime-disabled;
13. Canonical Evidence G2 remains 101 rows / 7 skills / CĐ04–07;
14. G2 mastery threshold and Readiness credit remain OFF;
15. no runtime JavaScript loads `taxonomy-v2-runtime/`;
16. no runtime JavaScript accesses `toan-thcs-taxonomy-v2-evidence-v1`.

The final exact HEAD passed the complete Roadmap PR Quality workflow including strict MkDocs build and browser regression QA.

## Compiler reconciliation note

During I1 compilation, the initial resolver correctly exposed cases where a reviewed primary diagnostic is more specific than, or shared by, multiple legacy mappings that all converge on the same learner family. The compiler logic was tightened to accept a mapping only when the relevant legacy/canonical candidates agree on one family; ambiguous family convergence remains a hard failure. Final counts match every closed full-bank audit.

## Protected runtime boundary

- `runtime_enabled = false`
- `learner_data_write_enabled = false`
- `independent_credit_authorized = false`
- `history_backfill_enabled = false`
- `mastery_thresholds_enabled = false`
- `readiness_enabled = false`
- existing `toan-thcs-practice-v1` unchanged
- existing `toan-thcs-canonical-evidence-v2` unchanged
- proposed `toan-thcs-taxonomy-v2-evidence-v1` still unused

## Next gate

**I2 — shadow observer canary.**

I2 is the first phase that would introduce new runtime code and write new Taxonomy v2 evidence. It requires a separate controlled implementation/release gate; I1 does not authorize it automatically.
