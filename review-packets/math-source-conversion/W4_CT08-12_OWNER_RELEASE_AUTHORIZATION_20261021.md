# W4 — Project Owner authorization for five Written exercises

**Date:** 2026-10-21 (Vietnam local date)  
**Original review packet:** `MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020`  
**Independent NotebookLM receipt:** `review-packets/math-source-conversion/W4_CT08-12_NOTEBOOKLM_INDEPENDENT_VERDICT_RECEIPT_20261020.md`  
**Release PR:** [#550](https://github.com/TMA2015/roadmap-toan-thcs/pull/550).

## Owner decision (subsequent to NotebookLM)

After the QA-only implementation PR was prepared, the Project Owner expressly replied **“phát hành”** (“release”) to the assistant's question: *“Bạn có phê duyệt phát hành cả 5 bài tự luận W4 sau khi toàn bộ QA đạt PASS không? Nếu đồng ý, tôi sẽ coi đây là phê duyệt có điều kiện, chỉ phát hành khi kiểm thử hoàn tất thành công.”*

This is **explicit conditional publication authorization** for only the five previously independently reviewed Written proposals, effective **after** full PR technical/browser QA is PASS. It supersedes the packet's old `AUTHORIZATION|NO_LIVE_RELEASE` **only for the specified five content items and release workflow**; it does **not** turn an academic reviewer into the Project Owner, approve new items, or waive technical gates.

**Exactly five allowed canonical item IDs:** `WX08-EQI-003`, `WX09-SYS-009`, `WX10-FUN-003`, `WX11-RAD-004`, `WX12-QUA-003`.

**Expected live transition:** append exactly five to previously published 69 (69→74), original 69 records immutable. Keep historical original exercises and MCQ banks intact. Source-to-item mapping: `08-WR-03`, `09-WR-05`, `10-ENT-02`, `11-ENT-01`, `12-ENT-02`.

**Three reviewed REUSE outcomes without new canonical IDs:** `08-WR-10` (existing analogue MCQ `EQ08V1_108`), `09-WR-02` (existing `SYS09V1_033`), and `11-WR-10` (existing cube-root Practice family). Source originals remain present; an MCQ attempt does not imply completing a different paper exercise.

**Scope protected:** all Written items are self-marked only (`auto_readiness_credit=false`); Entrance10 items are optional and do not gate Core; no Skill Family activation, student attempt mutation, retroactive credit, MCQ changes, Readiness/Mastery, app authentication, or unrelated branch merge.

**QA / release rule:** maintain PR #550 as unmerged until all necessary GitHub CI including desktop and 390px mobile Written interaction tests PASS. Then make it ready for review/merge using exact tested head SHA. Verify `main` and `gh-pages` both have canonical 74 and matching source artifact blobs. If QA fails, fix and re-run before merging. A completed code merge **alone** does not prove a client successfully fetched an updated public HTTP response.

```text
RELEASE_PACKET|MATH-W4-CT08-12-8SOURCE-CONVERSION-R0-20261020
OWNER_DECISION|APPROVE_RELEASE
APPROVAL_SOURCE|OWNER_CHAT_20261021_Phat_Hanh
APPROVED_WRITTEN_IDS|WX08-EQI-003,WX09-SYS-009,WX10-FUN-003,WX11-RAD-004,WX12-QUA-003
APPROVED_COUNT=5
APPROVAL_CONDITIONAL_ON|FULL_PR_QA_PASS
CORE_GATE|UNCHANGED
READINESS_AND_MASTERY|NO_AUTO_CREDIT
REUSE_ONLY|08-WR-10,09-WR-02,11-WR-10
OTHER_PENDING_PRS|NOT_AUTHORIZED
```
