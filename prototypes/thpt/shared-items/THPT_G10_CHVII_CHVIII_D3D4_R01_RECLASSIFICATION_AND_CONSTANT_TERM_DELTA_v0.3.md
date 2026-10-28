# Toán 10 KNTT · ChVII–VIII · D3/D4 R01 Reclassification & New Core Constant-Term Candidate v0.3

**Date:** 2026-10-28 · **Content-only authoring branch:** `content/thpt-g10-chvii-chviii-authoring-20261028`
**Source reviewer:** Owner-supplied NotebookLM academic review `THPT-G10-CHVII-VIII-D3D4-63-CANONICAL-BANK-20261028-R01`.
**Governance:** academic content only; NO_MERGE, NO_DEPLOY, NO_ACADEMIC_PASS_BY_ASSISTANT. No changes to Chapter VI integration, Golden UI R4, THCS, answer engine or learner history.

## 1. Exact reviewed snapshot and reconciliation

- **Original academic packet:** 63 canonical IDs, `EXPECTED=63, REVIEWED=63, MISSING=0, UNEXPECTED=0, DUPLICATED=0`. ChVII 36/36 and ChVIII 27/27 `PASS_WITH_RECLASSIFICATION`, no math P0 reported. 35/35 canonical outcome rows checked.
- **Review source receipts:** SGK Toán 10 KNTT Tập 2: ChVII printed 29–58, ChVIII printed 59–79; SBT: ChVII printed 27–49, ChVIII printed 50–59.
- Reviewer `ACADEMIC_OVERALL_CHVII=PASS` and `ACADEMIC_OVERALL_CHVIII=PASS` are **D3/D4 snapshot-scoped only**, with mandatory P1 adjustments; `ACADEMIC_CLEARANCE_FOR_RELEASE=NO`.
- **Original 63-item snapshot stays immutable** in the five v0.1/v0.2 shared-items files. This file is the **single canonical source for the newly authored P07** and the additive curriculum-role correction overlay, not a copy of the 63 original item stems/keys.
- New `THPT-G10-B25-P07` is **ID #64** in the authoring candidate pool, and is **NOT included in the reviewed 63**. A new DELTA_C review must evaluate P07 and the final Core coverage mapping. There are no 64 reviewed items.

## 2. Reviewer-determined academic scope override for existing IDs

| Canonical ID | Original snapshot role | Academic reviewer classification | Effective authoring placement until secure integration |
|---|---|---|---|
| `THPT-G10-B22-C01` | `SGK_CORE` | `ELECTIVE_SPECIALIZED`, eccentricity of ellipse e=c/a | **Not eligible for mandatory SGK Core**. Preserve original ID/stem/key; optional specialized Practice/Topic placement only if standalone topic scope supports it. |
| `THPT-G10-B25-P02` | `SGK_PRACTICE` | `SUPPORT_EXTENSION` for exponent 6 and x^-1 | Optional extension Practice; not mandatory Core evidence |
| `THPT-G10-B25-P05` | `SGK_PRACTICE` | `SUPPORT_EXTENSION` for exponent 6 | Optional extension Practice; not mandatory Core evidence |
| `THPT-G10-B25-P06` | `SGK_PRACTICE` | `ELECTIVE_SPECIALIZED` for exponent 7 and even/odd coefficient-sum strategy | Optional specialized Practice; not mandatory Core evidence |

These are **academic metadata classifications and placement blocks**, NOT a claim that production's `curriculum_layer` enum currently accepts `ELECTIVE_SPECIALIZED` or `SUPPORT_EXTENSION`. No runtime writes. The reviewer's math verdict for these four is retained with the new scope; no answer, rubric, canonical ID, or history is changed. If a downstream exporter consumes the older v0.1/v0.2 register without applying this overlay, **fail closed for mandatory-Core activation** of these four IDs.

**Separate coverage risk:** after removing `B22-C01` from mandatory SGK Core, B22's ellipse Core placement may be thin. Review this at the next B22 targeted source/coverage audit; do not create a near-clone of existing examples or silently award Core coverage.

## 3. New unique canonical practice candidate: THPT-G10-B25-P07

| Field | Value |
|---|---|
| `canonical_item_id` | **THPT-G10-B25-P07** |
| `chapter/lesson` | ChVIII / B25 Nhị thức Newton |
| `outcomes` | `G10-B25-CONSTANT_TERM`; supporting `G10-B25-COEFFICIENT_SIGN` |
| `sgk_candidate_role` | `SGK_PRACTICE`, **CORE_ELIGIBLE_CANDIDATE** at normal practice level (no separate SGK_CORE claim) |
| `topic_placement` | `TOPIC_PRACTICE` only when standalone Topic source scope is confirmed; no Topic Core tab |
| `curriculum_level` | Basic–intermediate, n=5, integer nonnegative powers |
| `status` | **NEW_CANDIDATE_AWAITING_NOTEBOOKLM_DELTA_C**, not among 63 previously reviewed |
| `source_receipt` | SGK Toán 10 KNTT Tập 2 B25 printed pp.72–77; SBT B25 pp.55–56; reviewer suggested a new basic constant-term item |
| `public_exposure` | Practice with hints/solution; never claim held-out Readiness eligibility |

**Đề (D3 · Luyện tập):** Trong khai triển nhị thức \((4x-3)^5\), hãy tìm **số hạng không chứa \(x\)** mà **không cần khai triển toàn bộ**. Giải thích vì sao chỉ có đúng một số hạng như vậy.

**Đáp án canonical:** **\(-243\)**, tức số hạng tự do bằng \(-243\) (không phải số mũ hoặc hệ số đi kèm \(x\)).

**Lời giải:** Theo nhị thức Newton, số hạng tương ứng với chọn \(k\) thừa số \(4x\) là
\[
T_k=\binom{5}{k}(4x)^k(-3)^{5-k},\qquad k=0,1,2,3,4,5.
\]
Số mũ của \(x\) bằng \(k\); vì \(k\geq 0\), điều kiện số hạng **không chứa \(x\)** là \(k=0\), và đây là giá trị duy nhất. Số hạng tự do:
\[
T_0=\binom50 (4x)^0 (-3)^5=\boxed{-243}.
\]

**Hint chỉ dành cho Practice (không bao giờ dùng khi làm Readiness):** Trong \((4x-3)^5\), số hạng không có \(x\) xuất hiện khi không chọn thừa số nào chứa \(x\).

**Rubric gợi ý (để reviewer kiểm tra, không áp dụng máy chấm):** /4 điểm: nhận ra số hạng phải có mũ \(x^0\) (1), lập/giải đúng \(k=0\) (1), tính chính xác \((-3)^5\) (1), giải thích tính duy nhất và kết luận rõ số hạng tự do (1). Với Practice tương tác, có thể chấp nhận câu trả lời tương đương \(-243\); rubric dùng cho câu giải thích nếu bài yêu cầu, không đưa thành hạ tầng scoring mới.

**Preflight only (not academic review):** SymPy expansion \((4x-3)^5=1024x^5-3840x^4+5760x^3-4320x^2+1620x-243\), constant coefficient \(-243\). Exact expression \((4x-3)^5\) not found in the extracted 63 item/solution snapshots. A new D3/D4 academic verdict is still required.

## 4. Outcome mapping overlay — no new skill/outcome ID

Original matrix `THPT_G10_CHVII_CHVIII_OUTCOME_PLACEMENT_MATRIX_v0.2.md` mapped:
`G10-B25-CONSTANT_TERM -> THPT-G10-B25-P02` (**OPTIONAL_EXTENSION only** after reviewer tiering).

**Candidate effective mapping after this delta:**
`G10-B25-CONSTANT_TERM -> [THPT-G10-B25-P02 (OPTIONAL_EXTENSION, reviewer reviewed), THPT-G10-B25-P07 (CORE_ELIGIBLE_PRACTICE_CANDIDATE, DELTA_REVIEW_PENDING)]`.

`G10-B25-COEFFICIENT_SIGN` also may refer to P07 as secondary evidence **only after** the P07 delta review. Outcome ID set remains exactly **35**, with one new canonical item ID in the extended registry. The earlier reviewer determination `G10-B25-CONSTANT_TERM=PARTIAL/GAP` is only provisionally addressed until the new item is reviewed.

## 5. Review and release gates

- `DELTA_CLASS=DELTA_C_ACADEMIC_MATERIAL`: one **new** item and its outcome mapping/placement. Need exact one-ID NotebookLM academic delta review per 06/07; no automatic Core gap closure or batch-wide re-review of 63 unchanged items.
- Reviewer should confirm n=5 SGK Core boundary, exact answer/solution/hint, distinctness from B25-C/P/W practice/exposed examples and RD08 v0.2, appropriate rubric/difficulty, and whether the item demonstrates the outcome at sufficient depth. Check B22 mandatory ellipse Core gap separately.
- Maintain Chapter VII/Chapter VIII D1–D2 PASS snapshot; 14/14 chapter Readiness candidates previously reviewed and **0/14 deployed**. Do not reuse this new exposed Practice item as Readiness evidence.
- Must preserve Golden UI R4, two independent SGK and Topic learning paths, no dedicated Topic Core page, one canonical item per role/placement mapping, and no learner credit/score/merge/deploy.

```text
REVIEWER_PACK_ID|THPT-G10-CHVII-VIII-D3D4-63-CANONICAL-BANK-20261028-R01
EXISTING_REVIEWED_CANONICAL_IDS|63
EXISTING_BANK_REVIEW|CHVII_36_PASS_WITH_RECLASSIFICATION;CHVIII_27_PASS_WITH_RECLASSIFICATION
NEW_ITEM_ID|THPT-G10-B25-P07
NEW_ITEM_ACADEMIC|NOT_REVIEWED
TOTAL_AUTHORING_CANDIDATE_ITEM_IDS|64
OUTCOME_IDS|35_UNCHANGED
CONSTANT_TERM_CORE_GAP|P07_CANDIDATE_PENDING_DELTA
ACADEMIC_CLEARANCE_FOR_RELEASE|NO
MERGE_DEPLOY|NO
```
