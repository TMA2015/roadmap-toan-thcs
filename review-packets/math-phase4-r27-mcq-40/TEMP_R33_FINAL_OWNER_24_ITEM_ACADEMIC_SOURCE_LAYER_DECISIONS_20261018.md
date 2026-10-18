# R33 — Final owner decision: 24/24 academic source and layer labels

**Date:** 2026-10-18. **Scope:** academic classifications only for 24 specified R27 IDs.

The owner first approved 21 Grade 6–7 items as `KNTT-Core` (8 `STRUCTURAL_CLONE`, 13 `CONCEPT_BASE`) and subsequently approved three Grade 9 CT12 items (`QUA12V1_121–123`) as **`CONCEPT_BASE + Entrance10`**.

| Scope | Approved IDs | Evidence type | Primary layer |
|---|---:|---|---|
| Grade 6 rounding | 12 | 4 structural, 8 concept | KNTT-Core |
| Grade 7 absolute value | 3 | 2 structural, 1 concept | KNTT-Core |
| Grade 7 polynomial division | 6 | 2 structural, 4 concept | KNTT-Core |
| Grade 9 graph / intersection | 3 | 3 concept | Entrance10 |
| **Total** | **24** | **8 structural, 16 concept** | **21 Core, 3 Entrance10** |

## Versioned authority

- Previous owner approval of 21 Core IDs: `TEMP_R33_OWNER_APPROVED_21_CORE_ITEM_ACADEMIC_SIGNOFF_20261018.json`, Git blob `56135833a3d8764169719dded28be6b9c0b29eed`. Its CT12 pending fields represent the older decision state.
- Later owner approval of 3 CT12: `TEMP_R33_OWNER_APPROVED_CT12_CONCEPT_BASE_ENTRANCE10_20261018.json`, Git blob `35204f5baa654850c4b424dffb659bd89056b1be`.
- The corrected `QUA12V1_121` question has been merged via R34; live bank blob `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`, corrected record SHA-256 `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c`. Historical R27 records remain the older verified snapshot.
- The three CT12 items are classified `CONCEPT_BASE` because original KNTT textbook Bài 18, Bài 19 and GeoGebra pp113–114 support underlying concepts, without matching the manual algebraic problem exactly. Entrance10 is justified as a transfer/preparation layer, **not** from an unsupported claim about appearance in most official exams.
- The independent NotebookLM review table's 11/13 evidence counts are different from its 12/12 header totals. This final decision uses per-item source review, not the erroneous header.

This approval applies only to academic source evidence types and primary curriculum labels. It **does not** edit the live bank, enable Skill, Readiness or Mastery credit, modify learner history, or authorize merging/deployment. The 16 other R27 IDs remain outside its scope. Draft PR #519 remains held for its own merge decision and exact-head QA.
