# Phase F / Beta v5 — owner production QA PASS

**Date:** 2026-09-30  
**State:** `PRODUCTION_RELEASED / OWNER_QA_PASS`

Owner supplied seven screenshots from a completed production Beta v5 session, using the same browser/profile as the prior Beta v4 test but opening the Beta v5 route in a new page/tab. That is a valid persistence test because the canonical store is origin-scoped rather than page-scoped.

## Visual / interaction confirmations

Observed production behavior matches the reviewed Phase F contract:

- CĐ04 item `ALG04V2_089` displays dynamic topic `CĐ04 · Biểu thức đại số`, primary `Điều kiện xác định`, evidence class `Đáp án cuối`, and records a new independent check.
- CĐ05 item `ID05V1_120` displays primary `Hiệu hai bình phương` and evidence class `Chọn cách làm`, confirming canonical primary follows the reviewed overlay rather than first legacy tag `phan-tich-hdt`.
- CĐ06 item `FAC06V1_021` displays the same canonical skill `Hiệu hai bình phương` with evidence class `Kết quả cuối`, confirming the same canonical skill spans CĐ05 and CĐ06 prospectively.
- CĐ06 item `FAC06V1_022` explicitly reports that it is very similar to a previous item and therefore the attempt is stored but does **not** add another independent check, confirming clone-family de-dup.
- CĐ07 item `RAT07V1_071` displays dynamic topic `CĐ07 · Phân thức đại số`, primary `Quy đồng mẫu thức`, and evidence class `Chọn cách làm`.
- Submitted questions show `Đã nộp · Chỉ xem` while previous/next navigation remains usable.
- The completed 15-item session reports **13/15 correct** and exactly **9 new independent checks**, matching the reviewed Phase F maximum.
- The summary lists the two missed items for review and exposes a retry action.
- `Lịch sử Canonical Evidence (27 lượt)` is visible. The owner previously completed 12 Beta v4 attempts in the same browser/profile, so 27 = 12 v4 + 15 v5, directly confirming prospective v4→v5 continuity in the same canonical store even though Beta v5 was opened in a new page.
- The learner-facing copy states that Beta v5 continues the same canonical history while Practice, Readiness and Beta v3 remain unchanged.
- No mastery percentage, Mastered/Not mastered label, Core Readiness credit or hard readiness gate is visible.

## What owner screenshots do and do not prove

The screenshots directly support cross-page canonical continuity, dynamic topic/evidence-class presentation, clone-family behavior, canonical-primary boundary and the 9-new-unit summary.

They do not independently inspect raw browser storage bytes for the three legacy stores. That isolation remains supported by the exact release-head automated browser sentinels, which passed before production release.

## Acceptance decision

Owner production QA: **PASS**.

The bounded Phase F / Beta v5 pilot is accepted in production. This closes `MATH-SKILL-PHASE-F-EXPANSION-001`.

This acceptance does **not** authorize:
- automatic expansion beyond the reviewed 15 Phase F items;
- mastery thresholds or weighted evidence scoring;
- Core Readiness integration;
- Practice Engine interception;
- historical backfill/regrade/migration;
- PENDING/NO/Extension counters.

Any broader canonical-evidence rollout is a new design/review gate.
