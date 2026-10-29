# THPT — Retrospective A1–A7 inventory audit · 29/10/2026

Baseline: Draft PR #622, process/thpt-release-queue-checklists-20261029. Audit on independent authoring branch content/thpt-queue-retro-audit-20261029, inherited from PR #622 HEAD. All eight new manifests refer to reviewed academic SOURCE_COMMIT b99297c1470d9ef3f273c8393a39427172c38fba; this is not an integration commit on main.

## Canonical packet coverage

| Manifest | A pass | HOLD | Reviewed/historical scope |
|---|---:|---|---|
| [G10-SGK-CHI](inventory/G10-SGK-CHI.md) | 6/7 | A5 | B01–02, 16 teaching, RD08, 2 SVG |
| [G10-SGK-CHII](inventory/G10-SGK-CHII.md) | 6/7 | A5 | B03–04, 18 teaching, RD10, 2 SVG |
| [G10-SGK-CHIII](inventory/G10-SGK-CHIII.md) | 6/7 | A5 | B05–06, 18 teaching, RD12, 2 SVG |
| [G10-SGK-CHIV](inventory/G10-SGK-CHIV.md) | 6/7 | A5 | B07–11, 45 teaching, RD23, 4 SVG |
| [G10-SGK-CHV](inventory/G10-SGK-CHV.md) | 6/7 | A5 | B12–14, 27 teaching, RD17, 4 SVG |
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | 6/7 | A5 | 54 reviewed IDs, 18 RD inactive, PUBLISHED_SCOPED prior |
| [G10-SGK-CHVII](inventory/G10-SGK-CHVII.md) | 6/7 | A5 | 36 teaching, 3 SVG, integration #620 pending |
| [G10-SGK-CHVIII](inventory/G10-SGK-CHVIII.md) | 6/7 | A5 | 28 teaching, FIG04, integration #621 pending |
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | 5/7 | A5/A6 | 16 teaching, RD06; D5 missing, delta missing |
| [G11-SGK-CHVIII](inventory/G11-SGK-CHVIII.md) | 5/7 | A5/A6 | B28–30, 10 teaching placements, RD06 PASS |
| [G12-SGK-CHVI](inventory/G12-SGK-CHVI.md) | 4/7 | A4/A5/A6 | B18–19, 12 teaching; 6 RD blueprint only |
| [TOPIC-PROB-G10-G12](inventory/TOPIC-PROB-G10-G12.md) | 6/7 | A5 | 25 outcomes, 38 teaching placements, 12 Topic RD PASS |

12 packets (4 from PR #622, 8 newly added). No duplicate packet IDs for historical PR #614/#615. Exactly zero verified CONTENT_READY, therefore ready/ remains empty. A scoped NotebookLM PASS is not automatically a six-dimensional independent learning-path PASS or website release permission.

## Prior reviewed snapshots preserved, no unnecessary reviewer repeat

- G10 ChI–V: B01–B14, 124 reviewed D3/D4 canonical teaching item IDs, 70 held-out SGK Chapter Readiness IDs academically PASS and inactive, and 14 reviewed SVG figures. Reviewed source snapshots and lesson/outcome registers are linked from each manifest with source commit and reviewer receipt; there is no separate overall five-chapter reviewer verdict.
- G10 ChVI–IX: retain the four existing PR #622 manifests, including ChVI historical PUBLISHED_SCOPED only, ChVII–VIII integration dependencies #620/#621, and ChIX D5/final-delta gates.
- G11 ChVIII: scoped D1–D4 10 canonical teaching placements and six independent SGK Readiness academic PASS, D5/D6 not proven. G12 ChVI: D1–D4 accepted teaching snapshot, but its six SGK Chapter Readiness positions are blueprint only, not item PASS.
- TOPIC Probability G10–G12: independent PASS_WITH_SCOPE_TIERING, 25 outcomes, 38 canonical teaching placements and 12 heldout Topic Readiness items. Earlier G12 EX-B19-02 review snapshot discrepancy was reconciled in R1; B19-P05 stays SUPPORT_EXTENSION. This Topic Readiness is not SGK Chapter Readiness.

## What blocks A5 (and other missing gates)

A5_D1_D6_SCOPE requires a full lesson/outcome evidence matrix across theory (D1), worked examples (D2), canonical Core/Practice (D3), Written and rubric (D4), diagrams/application/evidence (D5), and gap recovery/remediation and self-study support (D6). A few D5 SVG PASS reports are evidence for visuals, not proof of all D5/D6 requirements. Do not mark A5 PASS without scope-complete evidence. Browser/device/THCS regression QA is separately tracked under R1–R4, not a substitute for academic D6.

G10 ChI–V: audit D6 remediation and D5 applied evidence per lesson/outcome, explicitly record outcome-to-example/Core/Practice/Written/visual/remedy gaps. G11 ChVIII: also resolve A6 delta and cross-route canonical placement. G12 ChVI: also resolve A4 by producing and reviewing actual independent SGK Readiness items (blueprint does not count) and A6 source/delta equivalence. G10 ChIX: D5 and final delta. TOPIC Probability: ensure all three independent Topic sections have complete D1–D6 coverage. Keep previously reviewed unchanged snapshots PASS; re-review only affected DELTA_C math changes.

## Architecture and security

SGK_CHAPTER and TOPIC are independent complete learning paths. TOPIC menu has precisely three sections Kiến thức / Luyện tập / Tự kiểm tra, no separate Core. One canonical item/key/solution/Written/Anchor/history is reused by placement, never copied. Public manifests include IDs, version hashes, receipt links, counts and A/R/P checkboxes only; no protected heldout questions/keys/rubrics.

Preserve five Permanent THPT Sources v2.0 and original SGK/SBT KNTT S1, review handoff protocol 06 and delta policy 07 v1.1. Owner's current Math architecture is GitHub static site with existing Gemini transport, no new student accounts, Firebase Auth or backend/Worker/D1. No private Readiness runtime or Mastery enabled. Final Submit must not reveal hints, Tutor, answer or per-item correctness prematurely; static JavaScript cannot guarantee hidden keys absolutely.

Only move an identical existing manifest inventory/ → ready/ when all A1–A7 are evidenced for its exact RELEASE_SCOPE, then require release-lane R1–R5 and explicit owner merge/deploy approval. No production website edits, no deploy, no new academic verdict issued in this retrospective audit.
