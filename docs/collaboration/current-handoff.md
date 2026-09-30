# Project Handoff — Self-Learning Math

> **CURRENT CHECKPOINT — 30/09/2026, Phase G1 CONTROLLED PRODUCTION RELEASE LIVE; OWNER PRODUCTION QA PENDING.** Tên sản phẩm: **Self-Learning Math**, thuộc **G Learning**; AI Tutor là một tính năng. PR #217 release merged `74b38fd2361c11ebc76eee743bf505e938bc48b0`; Deploy MkDocs `36701320498` SUCCESS. G1 shadow capture is live for exact 27 approved Practice items only. G2/G3 remain OFF until owner QA PASS.

## Khôi phục trong cuộc trò chuyện mới

Đọc tài liệu này trước, cùng [Master Plan v1.1.1](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/governance/TOAN_THCS_MASTER_PLAN.md), [Golden Template](../huong-dan/golden-template-hoc-luyen-kiem-tra.md), `assets/data/collaboration/task-registry.json` và GitHub `main`. Kiểm tra mở/merge/deploy theo commit thực tế. Quyết định được duyệt và trạng thái mới ghi ở đây có ưu tiên cao hơn tường thuật cũ, nhưng không thay được bằng chứng source/code. Sau mỗi mốc QA/định hướng/merge/deploy, cập nhật checkpoint này và registry/context có liên quan.

## Phase G1 — Practice shadow canary technical QA PASS, chưa deploy (30/09/2026)

- Phase G academic audit [PR #214](https://github.com/TMA2015/roadmap-toan-thcs/pull/214): NotebookLM **PASS, 0 revisions, 9/9 architecture questions PASS**.
- Draft staging [PR #217](https://github.com/TMA2015/roadmap-toan-thcs/pull/217), exact tested HEAD `540be8b17ffb12dd26c8dee459ff8874a57156b5`. **Chưa merge, chưa deploy.**
- G1 scope: **27 exact Beta-proven Practice items / 7 canonical skills / max 16 skill-topic units**, shadow capture only; no normal learner UI change.
- Production data: new `toan-thcs-canonical-evidence-v2`; Beta `toan-thcs-canonical-evidence-v1` frozen/read-only, no migration/backfill.
- v2 keeps bounded `recent_events` but persistent `seen_questions` + `independent_units`; retention test kept 1105 indexes after trimming events to 1000.
- Practice integration: legacy write first; canonical observer second/fail-open. Forced observer failure produced **identical legacy Practice stats**.
- Exact-head QA: Roadmap `36698929683` **SUCCESS**; Skill assessment `36698929574` **SUCCESS**; Branding `36698929696` **SUCCESS**.
- Browser: actual Practice CĐ04–07 PASS; assistance/unseen-sibling transfer, negative evidence, cross-topic identity, `ID05V1_120` tag-order boundary and store isolation PASS.
- Artifact `11089467337`, digest `sha256:bbd5da8d5f0aecece709f4e17601fe57a3b76fcbd2f6d1db41e9b36f20f382fe`.
- First Roadmap run failed only because of Playwright test-call syntax; corrected test rerun PASS. Không waive product assertion.
- **Owner release decision:** **APPROVED** on 30/09/2026 for a controlled G1 production release.
- **Pre-release requirement now:** reconcile PR #217 with latest `main`, rerun Roadmap + Skill assessment + Branding QA on the exact release HEAD, then merge/deploy only if all PASS.
- **Production release:** PR #217 exact release HEAD `3473f4383df990da04404a24659732e38c5422c6` passed Roadmap `36700956876`, Skill `36700957023`, Branding `36700956882`; squash merge `74b38fd2361c11ebc76eee743bf505e938bc48b0`; Deploy MkDocs `36701320498` **SUCCESS**.
- **Current gate:** owner real-device/browser production QA of v2 shadow capture. G2 remains blocked until explicit owner QA PASS.
- G2/G3, mastery/readiness, canonical remediation/ranking, migration/backfill/regrade and broader capture remain **OFF**.

## Canonical Evidence Beta v4 — RELEASED + OWNER QA PASS (30/09/2026)

- Academic audit [PR #202](https://github.com/TMA2015/roadmap-toan-thcs/pull/202): NotebookLM **PASS 12/12, 0 revisions**.
- Controlled release [PR #203](https://github.com/TMA2015/roadmap-toan-thcs/pull/203), exact release HEAD `83bcd263f36c45f007bcaf67f19c19f272541f77`; release-head Roadmap/Skill/Branding QA đều SUCCESS.
- Production merge `5873253c3f3dad1d9066a61e408ff0bc760b5a74`; Deploy MkDocs `36681408115` SUCCESS. Post-release checkpoint PR #205 merge `79cdc8d187f5ddb1dfca97409abfa39a8dde2f8d`.
- Owner production QA: **PASS** từ 6 ảnh của một session hoàn chỉnh 12 câu.
- Ảnh xác nhận: submit → `Đã nộp · Chỉ xem`; primary/supporting hiển thị đúng; clone-repeat không tăng evidence unit; singleton tạo unit mới; tổng 12 attempts → đúng **7 independent evidence units**; có review/retry/history; không có Mastered/Not mastered, mastery %, Readiness credit hay hard gate.
- Store mới riêng `toan-thcs-canonical-evidence-v1`; automated browser sentinel trước release xác nhận ba store cũ không bị ghi lại.
- Non-blocking UX candidate: từ `metadata` và `đơn vị bằng chứng độc lập` hơi kỹ thuật với học sinh; có thể polish copy sau nhưng không phải lỗi release.
- **Pilot task MATH-SKILL-PILOT-001 CLOSED DONE.** Bất kỳ mở rộng sang nhiều skill/câu hơn, Practice Engine, mastery hoặc Readiness đều là gate mới, không tự động suy từ PASS này.

## Phase F canonical evidence — R1 ready for NotebookLM (30/09/2026)

- Beta v4 bounded pilot đã **RELEASED + OWNER QA PASS**; task `MATH-SKILL-PILOT-001` đóng DONE.
- Copy/UX polish [PR #207](https://github.com/TMA2015/roadmap-toan-thcs/pull/207) đã QA PASS, merge `197c990903d2be6f7df2d49483a24b4c75038c92`, Deploy MkDocs `36685589573` SUCCESS. Chỉ đổi wording/UI: bỏ `metadata` và raw clone-family ID khỏi learner card, không đổi evidence/storage/taxonomy semantics.
- Phase F draft audit [PR #208](https://github.com/TMA2015/roadmap-toan-thcs/pull/208): **15 new items / CĐ04–07 / 5 canonical skills / max 9 independent evidence units**, 6 clone groups +3 singleton.
- Mục tiêu Phase F: kiểm prospective cross-topic canonical identity, mixed evidence classes, legacy-tag boundary và append-only reuse của `toan-thcs-canonical-evidence-v1`.
- Hai case chính: `dieu-kien-xac-dinh` nối prospective CĐ04 với canonical CĐ07 đã có; `hieu-hai-binh-phuong` dùng chung CĐ05+CĐ06 và có final-output / recognition / method-selection evidence.
- Packet NotebookLM: `MATH-SKILL-PHASE-F-EXPANSION-R1-20260930`; source blob `70d044f1de98f5b283a3e54fdecfd07fb25d82bd`; manifest blob `5a5b339d7372068dd692b9a03dc1277758a6b6d5`.
- Machine preflight: 15/15 source match, 0 errors; runtime/readiness OFF.
- **Gate hiện tại:** chờ NotebookLM PASS/REVISIONS_REQUIRED. Không viết Beta v5 runtime trước gate này.

## Phase F / Canonical Evidence Beta v5 — RELEASED + OWNER QA PASS (30/09/2026)

- Academic audit [PR #208](https://github.com/TMA2015/roadmap-toan-thcs/pull/208): NotebookLM **PASS 15/15, 0 revisions**.
- Controlled release [PR #210](https://github.com/TMA2015/roadmap-toan-thcs/pull/210), exact release HEAD `5017ffc134b9bd076771fa5496d8fb23149fb20b`; release-head Roadmap/Skill/Branding QA đều SUCCESS.
- Production merge `371b4980586ae684729060ae1a4c8dc1443cb45d`; Deploy MkDocs `36691324129` SUCCESS. Release checkpoint PR #212 merge `97ce64a87072c870541a8f7ed544e87ea3aa3e1c`.
- Owner production QA: **PASS** từ 7 ảnh của một session hoàn chỉnh 15 câu.
- Owner dùng cùng browser/profile với vòng Beta v4 nhưng mở Beta v5 trong page mới. Điều này vẫn dùng cùng origin storage; ảnh tổng kết hiển thị **27 canonical events = 12 v4 cũ + 15 v5 mới**, xác nhận prospective continuity v4→v5 trên cùng store.
- Ảnh xác nhận: topic động CĐ04→CĐ07; `ID05V1_120` primary **Hiệu hai bình phương** chứ không theo legacy tag đầu; cùng canonical skill `hieu-hai-binh-phuong` xuất hiện ở CĐ05+CĐ06; `FAC06V1_022` clone-repeat không tăng unit; tổng lượt v5 báo đúng **9 new independent checks**; không có mastery/readiness overclaim.
- Store canonical giữ `toan-thcs-canonical-evidence-v1`; legacy-store byte isolation vẫn dựa trên release-head browser sentinel tự động đã PASS.
- **Task `MATH-SKILL-PHASE-F-EXPANSION-001` CLOSED DONE.** Bất kỳ rollout rộng hơn, mastery, Readiness hoặc Practice Engine đều là gate mới, không tự động suy từ PASS này.

## Mốc mới nhất — CĐ03 và 7 gap kỹ năng đã đóng (30/09/2026)

- **CĐ03:** academic R2 PASS và [PR #183](https://github.com/TMA2015/roadmap-toan-thcs/pull/183) đã phát hành 5 thẻ +15 micro, route/menu bốn bước; deploy run `36662797203` SUCCESS. Owner desktop/iPad QA riêng vẫn OPEN.
- **CĐ02/CĐ23:** NotebookLM packet `MATH-CORE02-23-GAP-R1-20260930`, source blob `9695c998aade401f4c4129aa25ac6a8392a41b2b`, review **7/7 PASS**. [PR #186](https://github.com/TMA2015/roadmap-toan-thcs/pull/186) merge `0f00e939e1dc4dd3a2035d4e1bd0e116fc5d3809`; PR Quality PASS và Deploy MkDocs run `36664825146` SUCCESS.
- Append-only: CĐ02 thêm `NUM02MICRO_016–020` cho `luy-thua`, `phan-tich-thua-so-nguyen-to`, `bcnn`, `gia-tri-tuyet-doi`, `quy-dong-so-sanh-phan-so`; CĐ23 thêm `PRO23MICRO_016–017` cho card 3 `kiem-tra-xac-suat` và card 5 `xac-suat-co-dien`.
- CĐ02 hiện **20 micro**, CĐ23 **17 micro**; mọi skill đã khai báo trong từng card đều có ít nhất một cơ hội luyện riêng. 30 record gốc được kiểm bằng canonical blob và giữ nguyên; Readiness/localStorage/lịch sử học sinh không migrate hoặc regrade. `coverage ≠ mastery`.
- Audit [PR #185](https://github.com/TMA2015/roadmap-toan-thcs/pull/185) vẫn là provenance review-only, không merge làm release.
- **Owner QA CĐ02/CĐ23:** chủ dự án đã kiểm tra chức năng các thẻ Core/Ứng dụng trên **iPad và desktop** và xác nhận **ổn**. Phạm vi xác nhận này áp dụng cho chức năng thẻ ở CĐ02/CĐ23; không suy rộng sang iPhone hoặc các route Batch A khác.

## Mốc nền — Batch A chuẩn hóa luồng học (30/09/2026)

- [PR #178](https://github.com/TMA2015/roadmap-toan-thcs/pull/178) merge tại `c1b461885d7da1bd3cafef34f357c04c493df3b0`, [GitHub Pages Deploy](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36606931537) **SUCCESS**; ba workflow PR (Roadmap QA, G Learning branding, Skill assessment pilot) PASS. **Owner device QA cho bản Batch A vẫn OPEN**, không suy từ nghiệm thu CĐ19–20 trước đó.
- CĐ**02/21/23/24/25** đã có trang học độc lập `/core/`, top stepper bốn bước, menu trái và link lớp, cùng Soft Academic Cards hai modal Bài giảng/Luyện tập. Một nguồn route `docs/assets/javascripts/topic-learning-routes-v1.js` dùng chung cho stepper và workspace (22 route đang tồn tại); không thêm nút bốn bước cho CĐ03/CĐ22 khi chưa có học liệu/trang thật. CĐ01 là tổng quan.
- 5 workspace JSON + 5 micro-bank JSON được khóa Git blob, **25 cards + 75 item** nguyên bản; ID, `card_id`, tags, đáp án, tầng học và `toan-thcs-practice-v1` không bị viết lại. CĐ02 chỉ KNTT Core lớp 6; CĐ24 là **Core-Support**, CĐ25 là **Entrance10**. CĐ22 giữ nhánh tự chọn **THPT-Bridge**.
- Trình duyệt desktop/mobile đã kiểm tra các route, modal, mở/đóng/chuyển câu không tạo lượt làm, trả lời mới ghi đúng một lượt, dữ liệu sentinel cũ còn nguyên; kiểm thử 25 trang và strict MkDocs PASS. CI/browser không thay xác nhận của chủ dự án trên iPad/iPhone.
- **Khoảng trống được phát hiện, không được che:** CĐ02 khai báo 15 skill occurrences nhưng 5 skill chưa có câu riêng trong 4 thẻ: `luy-thua`, `phan-tich-thua-so-nguyen-to`, `bcnn`, `gia-tri-tuyet-doi`, `quy-dong-so-sanh-phan-so`; CĐ23 có hai thiếu sót **theo thẻ**: `kiem-tra-xac-suat` tại card 3, `xac-suat-co-dien` tại card 5. Giữ cảnh báo hiển thị thật, không tự tính mastery/cấp credit hoặc tạo câu giả. Xây ứng viên bổ sung theo review học thuật riêng.

### Bước tiếp tục sau mốc này

1. **B01–B07 skill taxonomy:** quay lại read-only/source-locked reconciliation đã lưu; chuẩn hóa concept / task-demand / evidence / clone-family trước khi thay đổi runtime hoặc mastery. Không cộng gộp coverage thành mastery.
2. **Owner QA CĐ03:** kiểm tra desktop/iPad thực tế trang Core mới; xác nhận stepper bốn bước, menu trái, 5 thẻ, modal Bài giảng/Luyện tập, MathJax và không có phantom attempt.
3. **Owner QA Batch A:** trạng thái riêng vẫn OPEN nếu chưa có xác nhận thiết bị cho đúng bản Batch A #178; không kế thừa xác nhận CĐ19–20/CĐ03.
4. **Không mở lại 7 gap CĐ02/23:** academic gate và release đã đóng PASS; chỉ sửa lại nếu có bằng chứng lỗi mới hoặc owner QA phát hiện vấn đề.

### Batch B CĐ03 — academic R2 PASS, đã triển khai

- NotebookLM R1 kiểm đủ **5/5 cards + 15/15 micro** và trả `REVISIONS_REQUIRED`; targeted R2 packet `MATH-CORE03-R2-20260930` trên source blob `a84c2740169070d6919bc8d2f274d10fb914fa32` sau đó trả **PASS**. R2 xác nhận 6/6 mục thay đổi PASS và hồi quy 4/4 card + 10/10 micro không đổi PASS.
- Ranh giới Grade 6 đã khóa: Core assessed chỉ `ti-so`, `ti-so-phan-tram`; `doi-don-vi-ti-so` là Prerequisite/Core-Support. `RAT03MICRO_002` là `FORMATIVE_SUPPORT_ONLY`, `gates_core=false`, không cấp Core Readiness. Grade 7 Core giữ 9 kỹ năng tỉ lệ thức/dãy tỉ số/tỉ lệ thuận-nghịch.
- [PR #183](https://github.com/TMA2015/roadmap-toan-thcs/pull/183) merge bằng squash commit `03e27855e1499cc2f674be2b83ebdb2fb35a0d29`. Ba PR workflow **SUCCESS** và [Deploy MkDocs run 36662797203](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36662797203) **SUCCESS**.
- CĐ03 nay có `topic03-learning-workspace.json`, 5 thẻ, micro bank riêng `RAT03MICRO_001–015`, trang `/core/`, top stepper bốn bước, menu trái và link Học theo lớp cho lớp 6/7. 120 câu `RAT03V1_001–120`, manifest cũ, Practice/Readiness và dữ liệu `toan-thcs-practice-v1` không bị migrate/regrade.
- Draft PR #180 tiếp tục là provenance/audit-only, **không merge làm release**. Owner real-device QA cho CĐ03 vẫn là cổng riêng sau deploy.

## Quyết định không được tự làm lệch

- 25 chuyên đề là một Vertical Spine G6–G9, lớp/KNTT là overlay. Có thể mở rộng THPT, SAT/ACT, logic sau này; chia thêm thẻ CĐ20 không tạo chuyên đề thứ 26.
- Học theo **Đọc & hiểu → Core theo chặng → Practice Room → Core Readiness**. Core có trợ giúp; Readiness độc lập, không hint/Tutor, chỉ feedback sau Submit; practice/assessment evidence tách biệt, không khóa cứng.
- Giữ **Soft Academic Cards** đã nghiệm thu: header/body rõ, màu nhấn nhẹ, tối đa ba cột khung rộng, responsive tablet/mobile; bài/lớp, tiên quyết, coverage chính xác; hai nút **Bài giảng / Luyện tập** mở modal riêng, chuyển mode và câu. Mở/đóng/xem câu không ghi thêm attempt; chỉ chọn đáp án mới ghi.
- Số micro theo số skill thực tế, không cố định ba; một item có một assessed skill chính, supporting skill không tính điểm; coverage không phải mastery. Không đổi ID, legacy `card_id`, URL, localStorage, readiness, ảnh/SVG đã duyệt hoặc menu sáu nhóm +25 lối tắt khi không có migration/QA riêng.
- Phân biệt independent academic text review, bounded self-audit, QA render/browser, GitHub deploy và owner real-device acceptance; không đánh đồng.

## Phát hành và nghiệm thu đã có

| Phạm vi | Mốc và bằng chứng | Giới hạn |
|---|---|---|
| **CĐ03** | PR #183, merge `03e27855e1499cc2f674be2b83ebdb2fb35a0d29`; NotebookLM targeted R2 PASS; 5 thẻ + 15 micro; Deploy run 36662797203 SUCCESS | Owner desktop/iPad QA chưa ghi nhận; `RAT03MICRO_002` support-only, không tính Core Readiness |
| CĐ04–06 | PR #166 Core riêng, dual-modal, self-audit | Không suy ra độc lập NotebookLM |
| CĐ07 | Pilot, 5 bài giảng R2, 17 micro, 11/11 cơ hội skill | Coverage ≠ mastery |
| CĐ08–12 | PR #167; 25 bài giảng, bốn item gap | Item cũ được giữ |
| CĐ13–15 | PR #168; 15 giảng, chín item mới; owner đã kiểm tra thiết bị | Tách audit nguồn và thiết bị |
| CĐ16–18 | PR #169, merge `8a13c6c2f076fe360ada6bbaf51d09997e538a4c`; 15 giảng, 46 micro, 36/36 cơ hội skill | Không làm lại |
| **CĐ19** | [PR #173](https://github.com/TMA2015/roadmap-toan-thcs/pull/173) merge `607b521635653ae89df68ed1890869a331721da3`; năm bài giảng R2, 17 micro, 14/14 cơ hội skill | 15 item gốc không được tái kiểm định chỉ từ packet |
| **CĐ20** | [PR #174](https://github.com/TMA2015/roadmap-toan-thcs/pull/174) merge `4cfa70ff999eb469ac4e33dadb6447abae1c7383`; 10 thẻ v2, 29 skill, 15 câu cũ +14 item mới; CI và [Deploy MkDocs](https://github.com/TMA2015/roadmap-toan-thcs/actions/runs/36599072769) SUCCESS | Năm giảng mới/14 câu text review, năm giảng legacy/hint self-audit; không đồng nghĩa SVG được NotebookLM chứng nhận |

**Owner device acceptance 29/09/2026:** chủ dự án xác nhận “đã kiểm tra trên iPad, desktop. ok” cho **CĐ19–20**. Ghi `OWNER_ACCEPTED_IPAD_DESKTOP` cho phiên bản đã xuất bản. **Không suy diễn đã test iPhone**, cũng không tự gán xác nhận riêng cho từng edge case về lưu tiến độ nếu owner chưa chỉ rõ. QA browser/CI trước phát hành là bằng chứng riêng.

**CĐ20 history contract:** workspace v1 năm thẻ và 15 item cũ bảo toàn; v2 là display overlay riêng, không migration hoặc tính lại mẫu số cũ; `GEO20MICRO_011` vẫn thuộc `geo20-core-4`. `geo20-core-2b` chỉ có hai skill/hai câu, không sinh câu giả. Hoán vị đáp án của 14 câu mới có kiểm thử 4/4/3/3 và provenance, không sửa option text.

**Audit-only [PR #170](https://github.com/TMA2015/roadmap-toan-thcs/pull/170)** vẫn là hồ sơ nguồn/receipt độc lập, không merge thành release. CĐ19 R2 5+2 PASS, CĐ20 Part A 10/10, Part B 19/19 text/math PASS, nhưng phạm vi không gồm SVG rendered hay năm giảng legacy. Master Plan v1.1.1 ở PR #171 và cơ chế handoff PR #172 đã merge. Không chạy lại các vòng review đã đóng khi source không thay.

## Skill Taxonomy Phase D — CĐ04–07 CLOSED PASS (30/09/2026)

- Bốn full-bank overlay CĐ04–07 đã được NotebookLM phản biện độc lập theo packet source-locked và đều **PASS, 0 item revisions**.
- Tổng cộng **492/492 questions**: **427** câu có đúng một canonical assessed-skill candidate; **65** câu giữ formative-only/no-primary; **74/74 clone-family proposals PASS**.
- CĐ07 cuối cùng: [PR #200](https://github.com/TMA2015/roadmap-toan-thcs/pull/200), packet `MATH-SKILL-CORE07-OVERLAY-R1-20260930`, source blob `06a4b8f6f31b356d09a22c8c2e42423a14523d6b`; 120/120, 112 primary + 8 formative-only, 23/23 clone families PASS.
- 65 câu formative-only **không phải khoảng trống cần ép lấp**: chúng phản ánh giới hạn bằng chứng của MCQ đối với composite/method/proof/Extension. Supporting skill không nhận mastery event thứ hai từ cùng một answer.
- **Không runtime/migration/mastery:** không đổi legacy ID/tag, không backfill/regrade, không Core Readiness credit, không mastery threshold, không sửa learner store.
- Hồ sơ closure: `review-packets/skill-taxonomy/PHASE_D_04_07_CLOSURE_20260930.md`.
- **Bước tiếp theo:** thiết kế pilot additive, phạm vi nhỏ, dựa trên Phase C canonical registry + compatibility contract; chưa bật production/runtime.

## Skill Taxonomy Phase D — CĐ06 full-bank overlay PASS (30/09/2026)

- Draft audit [PR #197](https://github.com/TMA2015/roadmap-toan-thcs/pull/197), packet `MATH-SKILL-CORE06-OVERLAY-R1-20260930`, source blob `dff6013a0062e2a81dfafbe35280b4e52ab620c0`, overlay blob `a64ec780b62ef6fd40668eb4bbad331024b470aa`.
- NotebookLM kiểm đủ **120/120 questions**, **0 revisions**, **17/17 clone-family PASS**.
- 104 câu có đúng một canonical assessed-skill candidate; **16 câu FAC06V1_093–100, 113–116, 117–120** giữ formative-only vì current MCQ không cô lập task/method/written-proof competency.
- `FAC06V1_077–092` giữ primary candidate `phan-tich-da-thuc-hoan-toan` theo Phase A/B nhưng vẫn `FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED`; `101–112` có primary `giai-pt-bang-nhan-tu` nhưng final-answer evidence không đồng nghĩa mastery quy trình.
- **Không runtime/migration/mastery:** legacy tags giữ nguyên, không backfill/regrade, không Core Readiness credit, không mastery threshold.
- **Bước tiếp theo:** CĐ07 đã PASS; Phase D CĐ04–07 đã đóng. Chuyển sang pilot additive riêng, chưa bật runtime.

## Skill Taxonomy Phase D — CĐ05 full-bank overlay PASS (30/09/2026)

- Draft audit [PR #195](https://github.com/TMA2015/roadmap-toan-thcs/pull/195), packet `MATH-SKILL-CORE05-OVERLAY-R1-20260930`, source blob `a16a7781d858e55e7ba3e517b66dc9ec9294b3da`.
- NotebookLM kiểm đủ **120/120 questions**, **0 revisions**, **21/21 clone-family PASS**.
- 91 câu có đúng một canonical assessed-skill candidate; **29 câu ID05V1_091–119** giữ formative-only vì current MCQ không cô lập được method/composite/proof competency.
- Các quyết định 079/080, 082–084, 090, 091–100, 101–115, 116–119 và 120 đều được xác nhận đúng proposal.
- **Không runtime/migration/mastery:** legacy tags giữ nguyên, không backfill/regrade, không Core Readiness credit, không mastery threshold.
- **Bước tiếp theo:** CĐ06 đã đóng PASS; chuyển sang CĐ07 full-bank overlay — cổng cuối của Phase D CĐ04–07.

## Skill Taxonomy Phase D — CĐ04 full-bank overlay PASS (30/09/2026)

- Draft audit [PR #194](https://github.com/TMA2015/roadmap-toan-thcs/pull/194), packet `MATH-SKILL-CORE04-OVERLAY-R1-20260930`, source blob `4db8c7451be599038870d55eee2404af0afb1d37`.
- NotebookLM kiểm đủ **132/132 questions**, **0 revisions**, **13/13 clone-family PASS**.
- 120 câu có đúng một canonical assessed-skill candidate; **12 câu ALG04V2_099–110** giữ `FORMATIVE_ONLY_COMPOSITE`, không primary skill vì `bien-doi-nhieu-buoc` vẫn PENDING.
- Mapping đặc biệt được xác nhận: 009 → `nhan-biet-da-thuc`; 010 → `nhan-biet-don-thuc` (he-so-bac metadata); 011 → `he-so-bac` + thu-gon supporting; 012 → `thu-gon-da-thuc`.
- Các block 037–050, 051–076, 111–120, 121–132 và toàn bộ clone-family memberships đều PASS.
- **Không runtime/migration/mastery:** legacy tags giữ nguyên, không backfill/regrade, không Core Readiness credit, không mastery threshold.
- **Bước tiếp theo:** áp dụng cùng quy trình bounded full-bank overlay cho CĐ05, rồi CĐ06 và CĐ07.

## Skill Taxonomy Phase B — 52 legacy codes CĐ04–07 đã PASS (30/09/2026)

- Draft audit [PR #191](https://github.com/TMA2015/roadmap-toan-thcs/pull/191), packet `MATH-SKILL-CODE52-R1-20260930`, source blob `b77f810b4c57a0bdca5038e6722b4ac968f71a5d`.
- NotebookLM kiểm đủ **52/52 unique codes + 55/55 topic-code occurrences**, **0 revisions**.
- Phân loại ngữ nghĩa PASS: 35 skill, 3 diagnostic_skill, 2 composite_skill, 5 parent_category, 1 method, 1 context, 4 task_family, 1 extension_skill. Learner-counter candidate: **38 YES / 7 NO / 7 PENDING**.
- Ba mã dùng xuyên chuyên đề đều được xác nhận **MERGE_ONE_CONCEPT** nhưng giữ task-demand theo topic: `dieu-kien-xac-dinh`, `hieu-hai-binh-phuong`, `binh-phuong-hoan-chinh`.
- 8/8 relationship candidates PASS. `phan-tich-da-thuc-hoan-toan` được APPROVED làm canonical output-skill candidate cho đúng `FAC06V1_077–092`, nhưng counter vẫn PENDING vì MCQ chỉ cho final-output evidence; không đổi toàn bộ tag `phoi-hop-phuong-phap`.
- `chung-minh-hdt` được giữ là competency hợp lệ nhưng cần written evidence trước mastery. `tim-gia-tri-nguyen` giữ Extension.
- **Không migration:** runtime off, không đổi legacy tags/IDs, không gộp counter hiện hành, không regrade/localStorage rewrite, không mastery threshold.
- **Bước tiếp theo Phase C:** thiết kế canonical registry + compatibility layer dùng store v2 riêng, one-assessed-skill-per-evidence, không backfill lịch sử; PENDING/NO không xuất hiện như mastery counter.

## Skill Taxonomy Phase A — 39 item CĐ04–07 đã PASS (30/09/2026)

- Draft audit [PR #189](https://github.com/TMA2015/roadmap-toan-thcs/pull/189), packet `MATH-SKILL-TAXONOMY-39-R1-20260930`, source blob `3bb663e2eefeb2907b4915963c10387ddf3e504d`.
- NotebookLM kiểm đủ **39/39 items**, **0 item revisions**, và **9/9 clone-family PASS**. Trạng thái quyết định giữ nguyên: 19 `scoped_primary_candidate`, 18 `formative_only_requires_new_evidence`, 2 `extension_only_pending_layer_check`.
- Lớp bằng chứng đã được tách khỏi độ khó của prompt: 5 `MCQ_RECOGNITION_ONLY`, 2 `MCQ_METHOD_SELECTION_ONLY`, 24 `MCQ_FINAL_OUTPUT_ONLY`, 4 `MCQ_ARGUMENT_RECOGNITION_ONLY`, 4 `MCQ_FINAL_ANSWER_ONLY`.
- Clone-family chỉ dùng để **không đếm lặp thành bằng chứng mastery độc lập** trong pilot tương lai; không xóa câu luyện tập. `RAT07V1_119–120` vẫn pending Extension.
- **Không bật runtime:** `runtime_enabled=0`, `core_readiness_credit=0`; không đổi legacy ID/tag, localStorage hay regrade lịch sử.
- **Bước tiếp theo:** Phase B code-level registry cho **52 legacy skill codes CĐ04–07**. Tách code nào là assessed skill thực, category/parent, method, context, supporting skill hoặc Extension; ba code dùng xuyên topic (`dieu-kien-xac-dinh`, `hieu-hai-binh-phuong`, `binh-phuong-hoan-chinh`) phải được kiểm semantics trước khi coi là cùng một canonical concept.

## Học thuật B01–B07 — hồ sơ tồn tại trước Batch A (chưa bật runtime)

1. **Skill taxonomy / assessed-skill audit:** bắt đầu bằng read-only/source-locked reconciliation của 39 mục CĐ04–07 và các cụm B01–B07, tránh trộn `41 graph nodes` với hệ thống skill toàn chương trình. Đối chiếu các [draft PR #146–155](https://github.com/TMA2015/roadmap-toan-thcs/pulls) và file hiện hành, không mặc định draft đã merge hoặc review toàn bộ item. Phân biệt kỹ năng cốt lõi, kỹ năng phụ thuộc, context, kỹ năng tổng hợp và Extension; soát trùng, nhãn quá rộng, câu trùng phương pháp và độ bao phủ.
2. Tách kết luận đã được NotebookLM/Gemini phản biện khỏi self-audit; các câu sửa học thuật trong PR #151/#153/#155 vẫn là draft, không nhập riêng hoặc tự thay đáp án/kho câu vì nhận định ở một báo cáo.
3. Phân tầng ưu tiên Core/Entrance10/Challenge theo mapping chuẩn, sau đó mới đối chiếu corpus đề thi có nguồn/địa phương/năm để nói về tần suất; tuyệt đối không tự suy tần suất từ ngân hàng tự biên soạn.
4. Lập một bản quyết định read-only đề xuất trước khi thay taxonomy runtime; giữ nguyên ID, tags lịch sử và dữ liệu học sinh cho đến khi có cơ chế compatibility/evidence riêng. Sau quyết định, ghi PR/QA và cập nhật handoff.

**B01–B07 evidence ledger (read-only):** [bản tổng hợp và kiểm tra mười câu sửa nguồn](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/review-packets/skill-taxonomy/B01-B07-CURRENT-RECONCILIATION-20260930.md). Bản này chỉ tổng hợp phản biện và preflight, chưa bật taxonomy hay sửa ngân hàng.

## Duy trì trạng thái

Cập nhật GitHub sau mỗi mốc quyết định, QA, merge, deploy hoặc nghiệm thu; lịch sử Git giữ bản cũ. Không có bộ đếm đáng tin cậy để cảnh báo chính xác giới hạn chat; chủ động chốt checkpoint khi phiên dài. Câu khôi phục: **“Đọc Project Handoff trên GitHub, đối chiếu main và tiếp tục.”**
