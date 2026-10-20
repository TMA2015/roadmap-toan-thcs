# W3B R3 — Live canonical reconciliation of 14 reviewed historical exercises

**Date:** 2026-10-20 · **Current published baseline:** `main` `1f84a335ae6844ea51819b5601a08813afa7dda9` (after Skill counter release). **Evidence:** Owner-supplied 14/14 NotebookLM `PASS_FOR_PLACEMENT_REVIEW`, archived in [W3B receipt](MATH-CT05-07-W3B-20261019_NOTEBOOKLM_VERDICT_RECEIPT.md). This is an **implementation triage**, not new NotebookLM mathematics review or release authorization.

## Exact current state

- Existing Written Library: **65 published exercises** on baseline, of which `WX05-IDN-001`, `WX05-IDN-002`, `WX06-FAC-001`, `WX06-FAC-002`, `WX05-ENT-001` and `WX06-CH-001` are relevant. In particular, the last two were **already published in W3A**; do not recreate them.
- Existing Practice: **120 CT05 + 120 CT06** original MCQs inspected (eight unmodified JSON question source files). Match classification below means **question prompt matches**, not answer options containing coincidentally similar expressions.
- Historical authored source: `docs/kien-thuc/05-7-hang-dang-thuc/bai-tap.md` @ Git blob `ff4a8019b0f43e4eea0660bed0926abd89fa4c14`; `docs/kien-thuc/06-phan-tich-da-thuc/bai-tap.md` @ `00e983516ba2025b2bec54d506462553e4ca9647`. Retain unchanged.
- A shared `source_refs` pointer is **lineage/related context, not proof of exact question duplication**. A mathematically similar MCQ is also not a written proof exercise.
- NotebookLM's source/classification verdict is recorded without revision. R3 below makes **separate implementation decisions based on actual deployed content**.

## ID-level reconciliation

| Source ID | NotebookLM role | Live evidence and differentiation | R3 minimal disposition (no production change yet) |
|---|---|---|---|
| `05-WR-03` | CONVERT_INTERACTIVE | Related written `WX05-IDN-001`; exact source prompt `x²+8x+16` **not found as a question stem** in current CT05 120 MCQs; expression does appear as an *option* of `ID05V1_012` — not exact question coverage | `REUSE_WRITTEN_CONTEXT`; defer new MCQ until incremental diagnostic value proved |
| `05-WR-04` | CONVERT_INTERACTIVE | Related `WX05-IDN-002`; `25x²−9y²` not located as an exact question stem in current CT05 bank | `REUSE_WRITTEN_CONTEXT`; hold optional MCQ density request, do not clone WX |
| `05-WR-06` | CONVERT_INTERACTIVE | **Exact MCQ** `ID05V1_041`: khai triển `(x−3)³`, correct `x³−9x²+27x−27` | `REUSE_EXACT_PRACTICE`; add **no** MCQ |
| `05-WR-07` | CONVERT_INTERACTIVE | `x³+64` factorization **not found as an exact question stem** in 120 CT05 bank (same-skill items exist) | `HOLD_NEW_MCQ`; consider only if a distinct misconception/coverage gap is demonstrated |
| `05-WR-08` | CONVERT_INTERACTIVE | **Exact MCQ** `ID05V1_058`: factor `8x³−27` with matching correct factorization | `REUSE_EXACT_PRACTICE`; add **no** MCQ |
| `05-WR-09` | CONVERT_INTERACTIVE | **Exact MCQ** `ID05V1_091`: `101²`, correct `10201` | `REUSE_EXACT_PRACTICE`; do not create redundant numeric fill-in merely because possible |
| `05-WR-10` | ARCHIVE_DUPLICATE | Source-ref links to `WX05-IDN-002`; reviewer's duplication type **structural**, not exact-source deletion authority | `LINK_EXISTING_WX`; continue hiding old paper block in learner Practice; **preserve source** |
| `05-ENT-02` | KEEP_WRITTEN | No canonical WX source-ref for `x+y=10, xy=21, x²+y²`; distinct from `WX05-ENT-001` | `DRAFT_WX05-ENT-002`; optional Entrance10-type paper task, **not Core gating**; authoring review required |
| `05-CH-01` | KEEP_WRITTEN | No canonical WX source-ref for `a+b+c=0` cubic proof; distinct from published `WX06-CH-001` | `DRAFT_WX05-CH-001`; `Specialized-Challenge`, **not compulsory Core**; authoring review required |
| `06-WR-01` | CONVERT_INTERACTIVE | Source-ref links to `WX06-FAC-001`; current CT06 bank has the basic common-factor method, but **not a located exact `6x²+9x` stem** | `REUSE_WRITTEN_CONTEXT`; optional MCQ only if adds real skill diagnosis |
| `06-WR-04` | CONVERT_INTERACTIVE | `x²+6x+9−y²` not located as an exact CT06 question stem | `HOLD_NEW_MCQ`; check differentiated multi-step value before adding |
| `06-WR-05` | CONVERT_INTERACTIVE | `1−8x³` not located as an exact CT06 question stem | `HOLD_NEW_MCQ`; inspect existing cube-factorization density first |
| `06-WR-06` | ARCHIVE_DUPLICATE | Source-ref links to `WX06-FAC-002` with structural grouping focus, not necessarily identical numbers/problem | `LINK_EXISTING_WX`; old paper remains **source-locked** |
| `06-WR-07` | CONVERT_INTERACTIVE | `x²−xy−2x+2y` not located as an exact CT06 question stem | `HOLD_NEW_MCQ`; potential targeted sign-change misconception, author only if evidence supports |

**Disposition partition:** **3** `REUSE_EXACT_PRACTICE` + **3** `REUSE_WRITTEN_CONTEXT` + **2** `LINK_EXISTING_WX` + **4** `HOLD_NEW_MCQ` + **2** `DRAFT_NEW_WX` = **14** unique original source IDs. The five existing canonical WX lineage links are not assumed to make all five expressions exact duplicates.

## Authoring and acceptance gates

- **New paper candidate `WX05-ENT-002`:** original exercise \(x+y=10,\,xy=21\Rightarrow x^2+y^2=58\). The result is algebraically sound; a newly authored multi-step solution, hints, mistake analysis, and rubric require **separate independent authoring review** before append-only publication. Grade 8 is the *prerequisite curriculum*; the `Entrance10` tag describes optional practice placement, **not an asserted S3 entrance-exam frequency**.
- **New paper candidate `WX05-CH-001`:** from \(a+b+c=0\), show \(a^3+b^3+c^3=3abc\). This is **optional specialized challenge**, not KNTT compulsory Core. Require independent review of new hint/solution/rubric.
- **Four MCQ holds:** compare active bank's question types and levels in a separate density/skill-gap assessment before creating any ID. If authorized later, use canonical MCQ answer contract; do not deploy algebraic-expression free text without audited equivalence checking.
- **W3C is still NOT_REVIEWED:** 14 other historic IDs must not be marked PASS from W3B.
- **Nothing deploys here.** Keep all 240 MCQs, 65 WX, Core and Written self-check, Skill counter, Readiness and local progress untouched. No speculative source retirement, score migration, automatic mastery or runtime changes.

Related draft authoring packet: [W3B R0 two paper task drafts](MATH-CT05-07-W3B-R0_TWO_WRITTEN_AUTHORING_CANDIDATES.md). Owner approval and distinct authoring verdict are needed before any student-visible append.
