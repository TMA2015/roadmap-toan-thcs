# CHECKPOINT 2026-10-28 · THPT G10 ChIX B26–B27 Academic Authoring v0.1

**Conversation responsibility:** Academic content research, authoring, NotebookLM handoff/review and academically scoped deltas **ONLY**. Another conversation owns **website integration, D6 runtime/browser/device QA, merge and deployment**. This authoring branch **must not** add student-facing routes or change Golden UI R4, readiness runtime, score/mastery, PR #612, or deploy.

**Branch:** `content/thpt-g10-chix-academic-authoring-20261028`, created from the post-D5 checkpoint `content/thpt-g10-chvii-chviii-authoring-20261028`. Chapters VII–VIII D1–D5 reviewer results and 64 reviewed item snapshots remain untouched; PR #612 is separate Draft integration.

## 1. Scope of new academic batch

- ChIX *Tính xác suất theo định nghĩa cổ điển*: B26 *Biến cố và định nghĩa cổ điển của xác suất*; B27 *Thực hành tính xác suất theo định nghĩa cổ điển*.
- Sources currently available to this batch: publicly indexed **secondary web versions** of SGK contents, B26 approximately printed pages 77–82, B27 83–87, chapter-end practice 88–89; SBT Chapter IX pages **not yet confirmed on original source**. A targeted Google Drive search did not locate the user's original Chapter IX SGK/SBT PDFs in this turn. Treat **official S1 direct source receipt as PENDING**, not pass. Original SGK/SBT on NotebookLM must be independently consulted to confirm page ranges, every outcome, method boundary and scope.
- Supporting reference URLs (not substitute for original SGK/SBT): `https://sgkvn.com/lop-10-13/ket-noi-tri-thuc-voi-cuoc-song-3/chuong-ix-tinh-xac-suat-theo-dinh-nghia-co-dien-3255/bai-26-bien-co-va-dinh-nghia-co-dien-cua-xac-suat-12097.html`; `https://sachgiaokhoa.aistudybuddy.net/sach-online/lop-10/toan-10-tap-2/`; `https://montoan.com.vn/sbt-toan-tap-2-ket-noi-tri-thuc-voi-cuoc-song-20467`.
- **Packet ID:** `THPT-G10-CHIX-B26-B27-D1D2-D3D4-AUTHORING-20261028-R0`.
- Expected independent academic reviewer verdict: 2 lessons, 10 unique outcome IDs, 5 distinct worked examples, 16 unique canonical item IDs (B26 8 + B27 8), two Written including exactly one Anchor tag. The 6 Chapter IX Readiness **blueprint slots are not items and have NO answer keys**. No Topic Readiness candidate items were authored.

## 2. Real authored source files committed on this new branch

1. `prototypes/thpt/content-drafts/THPT_G10_CHIX_B26_B27_D1D2_KNOWLEDGE_AUTHORING_v0.1.md` — full self-contained B26/B27 Knowledge D1, 5 worked examples D2, 10-outcome matrix, source-status warning, instructional path requirements, and independent review questions.
2. `prototypes/thpt/shared-items/THPT_G10_CHIX_B26_B27_CORE_PRACTICE_WRITTEN_CANDIDATES_v0.1.md` — 16 **genuine original** Core/Practice/Applied/Written item candidates with stem, answer, full worked solution, relevant hint and /6 or /8 rubric for Written. Exactly one Anchor is a **tag** on a Written item, not a duplicate.
3. Two local user-downloadable NotebookLM Markdown review files mirror the exact committed source content: `Temp_THPT_G10_CHIX_B26_B27_D1D2_KNOWLEDGE_REVIEW_20261028.md` and `Temp_THPT_G10_CHIX_B26_B27_D3D4_16ITEMS_REVIEW_20261028.md`. Since 2 files, provide **2 direct download links and a short 3–6 sentence prompt in the same answer** under project protocol 06; no ZIP or JSON.
4. Internal preflight verified 10 unique outcomes, 5 unique examples, 16 unique item IDs (8 each lesson), 2 Written with one Anchor tag, and arithmetic on representative combination/event problems; **these checks are not NotebookLM PASS**.

## 3. Scope and known risks

- **S1 must be verified directly**: our page/lesson indexes are secondary at this stage; never turn approximate page ranges into official reviewer receipt.
- Check assumptions of uniform elementary outcomes for every example/item. `B27-C01` was edited before commit to distinguish it from the near-clone `B26-P02` by using no-replacement red/blue draws; reviewer must still check `B27-P03` for structural overlap.
- Reviewer should assess whether the *small-probability principle* and multi-step probability calculation require different phrasing/tiering in KNTT Core; distinguish probability without replacement vs more advanced conditional-probability formalism.
- Chapter IX SGK learning route must be **independent** (Knowledge, per-lesson Core, Practice/Application, **chapter-end Readiness**). Topic route must be independently complete (Knowledge, Practice, Topic Readiness) with **NO separate Topic Core page**. Reuse only one canonical item/answer/history through placement mapping. No AI hint, answer, correctness or solution leak before Final Submit in either kind of readiness.
- **No held-out Readiness item key/public stem** in this GitHub batch; six proposed `CHIX-READ-01..06` are blueprint slots only and cannot earn mastery.
- No actual complete grade 10–12 vertical Topic route has been asserted by this candidate pilot.
- No figure SVG has been created as part of this new batch; add only when a validated learning outcome requires it, via a separate D5 audit.

## 4. Exit gates

```text
CHIX_B26_B27_D1D2|AUTHORING_COMPLETE_NOT_REVIEWED
CHIX_D3_D4_CANONICAL_CANDIDATES|16_UNIQUE_NOT_REVIEWED
CHIX_OUTCOMES|10_CANDIDATES_NOT_REVIEWED
CHIX_WRITTEN|2_CANDIDATES_1_ANCHOR_TAG
CHIX_CHAPTER_READINESS|6_BLUEPRINT_SLOTS_NO_ITEMS
CHIX_TOPIC_READINESS|NOT_AUTHORED
CHIX_DIRECT_ORIGINAL_S1_RECEIPT|PENDING
NOTEBOOKLM_PACKET|TWO_REAL_TEMP_MARKDOWN_FILES_READY
CHVII_VIII_D1_TO_D5|PRIOR_REVIEWED_SNAPSHOTS_UNCHANGED
D6|OTHER_CONVERSATION
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
