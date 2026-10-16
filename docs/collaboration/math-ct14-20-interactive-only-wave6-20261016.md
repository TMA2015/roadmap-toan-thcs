# Math Content & UX Cleanup — CT14–20 Wave 6

**Date:** 2026-10-16 · **Baseline:** `8bbeb923626de32c48e2e8fdc049a1ac428fe7e7` · **Review scope:** 7 topics.
**Release classification:** UI VISIBILITY_HIDE ONLY. Old paper exercises and their solutions are retained untouched in authored Git Markdown; none are academically retired, counted as migrated, or declared NotebookLM PASS.

## Coverage

| Chuyên đề | Old paper IDs (source-locked) | Existing interactive questions | Already published WX |
|---|---:|---:|---:|
| 14-tam-giac | 13 | 140 | 3 |
| 15-duong-dong-quy | 11 | 124 | 2 |
| 16-tu-giac | 12 | 120 | 4 |
| 17-thales-dong-dang | 12 | 132 | 3 |
| 18-he-thuc-luong | 12 | 132 | 3 |
| 19-duong-tron | 12 | 147 | 4 |
| 20-hinh-hoc-tong-hop | 12 | 195 | 3 |
| **Tổng** | **84** | **990** | **22** |

The MkDocs publication hook maps each authored source to exactly ONE existing manifest. It renders the approved three-action learner banner, one ten-question Practice player, and links to the canonical Written Library + independent Readiness. No question bank, option, answer key, skill tag, learner progress or grading logic is touched.

## Academic follow-up (NOT completed by UI release)

- Index and compare all 84 paper source IDs against Core explanations/micro, canonical MCQ and Written Library, using the **mathematical structure** rather than shared keywords alone.
- Proof and construction exercises from geometry should remain written tasks where multi-step reasoning is essential.
- Disposition values to authorize only after review: CORE, PRACTICE_INTERACTIVE, WRITTEN, ARCHIVE_DUPLICATE. Everything remains PENDING until reviewed. NotebookLM review required for substantive changes or new academic content.

## QA gate

- Git blob hashes of all seven authored `bai-tap.md` sources; uniqueness and exact manifest counts across 990 questions.
- Desktop 1365px and mobile 390px browser load: one working Practice player, one short dynamic `Bộ đề N câu` subtitle, valid library/Readiness links, no learner-visible paper drawers, no writes to an unrelated localStorage sentinel.
- Keep previous source-lock regressions and Math learning flows active. Change nonpilot test to synthetic nonmatching path to avoid repeatedly rewriting it when the next topic moves.
- Publish only after exact-head public Math PR QA PASS and verify `gh-pages` HTML for all seven paths. No private English Actions.
