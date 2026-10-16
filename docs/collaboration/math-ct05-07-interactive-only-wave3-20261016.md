# Math P0 Wave 3 — CĐ05/06/07 interactive-only Practice

**Date:** 2026-10-16 · **Base main:** `e8a328fab2dfc6bb3dd33a07fb865607c5467f89`
**Owner priority:** Consolidate legacy paper exercises without mixing them into student Practice.

## Completed in this candidate

- CĐ05, CĐ06, CĐ07 source `docs/kien-thuc/<slug>/bai-tap.md` files remain unchanged, byte for byte. **13 + 13 + 14 = 40** historical paper source exercise IDs are preserved for future academic item disposition; hidden on public Practice pages *only* during reclassification, not academically retired.
- Three existing interactive banks are pinned to v1 manifests with 120 questions each; no question, choice, answer key, canonical ID, tagging, remediation weight or assessment mode changed.
- Narrow MkDocs `on_page_markdown` transformation renders a student-first banner, direct interactive practice player and three routes: start a session; find paper problems at the filtered Written Library; independent Readiness. No long paper/answer sections or duplicate outer Practice H2.
- The previously used automatic Practice loader sees a published direct `data-practice-bank-v2` marker and does not insert another player.
- The shared runtime calculates `Bộ đề N câu` dynamically, so later bank increases do not require a hardcoded counter.
- Source-locked Wave 1 test uses CĐ08 as its unchanged nonpilot control. The new Wave 2 tests check original Git blob SHAs, 40 IDs, each bank's actual 120 unique question IDs, one player, mobile/desktop functional load, no loss of old source material and no localStorage mutation on navigation.

## Academic disposition remains OPEN

Do **not** count these 40 sources as migrated or approved for publication in the Shared Written Library. For every original item, compare its mathematical structure with existing Core, interactive MCQ/Micro/rich response and WX catalog. Assign `CORE`, `PRACTICE`, `WRITTEN` or `ARCHIVE_DUPLICATE`; record canonical owner and source ID, use NotebookLM review for substantive new/changed math and integrate only after QA.

## Release gates

1. PR exact-head full public Math QA PASS (strict build, source-ID integrity and browser 1365/390px).
2. Existing CĐ02/03/04/21, CĐ22 and Written Library/Readiness tests remain PASS.
3. No tests trigger private English Actions, no data or scoring migration.
4. Merge only at accepted HEAD. Verify published `gh-pages` HTML for CĐ05/06/07 after merge, not merely `main`.

**Next:** Academic triage & conversion of this 40-item batch; then other topic groups in separate source-locked waves.
