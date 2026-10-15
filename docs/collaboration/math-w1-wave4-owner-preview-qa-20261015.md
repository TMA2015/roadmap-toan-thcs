# Math W1 wave4 — owner preview screenshot QA receipt (2026-10-15)

Branch: `feature/math-w1-wave4-frequency-tables-20261015`; PR #462. Owner supplied three screenshots from the isolated W1 wave4 preview in Math App chat on 2026-10-15; no additional owner assertion of a live production test is implied.

## Directly observed owner evidence
1. `STA21-RICH-W1-01-V1` / source `21-M2-01`: values 6/7/8/9 entered as frequencies `1,2,3,1`. UI displays **✓ Chính xác**, with totals 7.
2. `STA21-RICH-W1-02-V1` / source `21-M3-01`: values 6/7/8/9/10 entered as `1,2,4,2,1`, total field empty. UI displays **“Em hãy nhập đầy đủ các ô trước khi chấm. Lượt này chưa được tính.”** The form remains available.
3. Same M3 item after filling total `10`: UI displays **✓ Chính xác** and verifies `1+2+4+2+1=10`.

Owner screenshots demonstrate: two-column frequency table, clear labels, correct answer feedback, protected incomplete submission and source-faithful explanation. They do **not** demonstrate an incorrect fully-filled table, persistence after refresh or unchanged independent Readiness; those remain automated test gates.

## Release scope
- Two additive, immutable Practice (formative) variants, never independent Core Readiness.
- Retain all original source markdown and 132 old MCQs.
- `21-M4-01` frequency-percentage combined response is still **R2a REVISE**, not cleared.
- CI failure on an earlier wave4 head came from a shadow Skill Taxonomy browser fixture intercepting the old CT21 manifest `21-thong-ke-v1.manifest.json` while the live Practice loader uses v2; fixture updated to v2 without changing its evidence checks.

**Owner visual/functional QA: PASS for the three pictured scenarios.**

**Merge/release gate: do not merge until exact-head PR CI succeeds.** Retire isolated preview-only workflow before merge; after merge verify GitHub Pages deployment and published manifest/new chunks.
