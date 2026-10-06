# Project Handoff — Self-Learning Math

> **CURRENT ARCHITECTURE CHECKPOINT — 04/10/2026.**  
> Canonical Master Plan: **v1.2.1 — One Knowledge Graph · Two Learning Paths + Shared Written Exercise Library**.  
> Path A = **Học theo lớp / KNTT Course Map**; Path B = **Học theo chuyên đề / 25 Vertical Spine**. Both reuse the same canonical skills/items; do not build parallel knowledge banks.  
> Written Exercise Library is one canonical store with two learner entry paths. KNTT filtering uses curriculum placement (`kntt_placements`); topic filtering uses `topic_placements`; lower-grade knowledge used inside a problem belongs in `prerequisite_skills` unless it is a true curriculum placement.  
> Core Cards prioritize concept essence / Base→Trap→Apply. Topic Practice prioritizes foundation, connections, transfer, mixed skills and remediation; do not rebuild a second Core curriculum inside Practice Room.  
> **NotebookLM:** the current permanent Master Plan source in the existing Notebook is still v1.1. **Do not use it for the next new independent review.** Before the next NotebookLM review, export the canonical Master Plan as the matching new permanent source and replace the old v1.1 source. This refresh is intentionally deferred until that review is actually needed.  
> CT08 P1-A is live, but Owner QA remains open due to UX/render/navigation/naming/Practice-room issues discovered after release. Do not start CT08 P1-B/P1-C until those architecture/UX issues are reconciled with v1.2.1.
> **KNTT Coverage Matrix 6–9 v1 framework is now created.** It reconciles the four reviewed grade overlays against the current Taxonomy v2 + Knowledge Graph skill universe. Do not interpret unresolved refs as confirmed missing curriculum; Grade 6 especially contains legacy-ID/granularity noise. Next mapping task is explicit ID/family/gap reconciliation, starting Grade 6.

> **KNTT Coverage Matrix PR #308 merged:** exact framework head `c573f0656e4439e1487a1627b1549abe51e9c529` passed full CI/browser QA and was squash-merged to main as `cc214f5be75ff1da490b177dce91cc5af5954223`.
> **Grade 6 reconciliation R1 is now drafted on a separate governance branch.** 35 unresolved refs are classified as 16 canonical-skill matches, 12 canonical-family/lesson-local matches, 5 needs-review and 2 gap candidates (`lam-tron`, `uoc-luong`). Do not create new skills yet; independently review the 7 non-closed cases first.
> **NotebookLM packet prepared:** `review-packets/kntt-grade6-reconciliation-r1/00_NOTEBOOKLM_PACKET_R1.md`. Review exactly the 5 NEEDS_REVIEW + 2 GAP_CANDIDATE cases; use current Rules v1.2 + Master Plan v1.2.1 + official NXB GDVN SGK Toán 6 tập một/tập hai. No S1 evidence = no Core taxonomy addition.
> **Grade 6 reconciliation R1 CLOSED / NotebookLM PASS 7/7:** clearance `G6_R1_RECONCILIATION_REVIEW_COMPLETE`. Final: 18 canonical-skill, 16 canonical-family, 1 lesson-local; no remaining review/gap cases. One reviewed identity added to durable Taxonomy v2: `lam-tron-so` under `NUM-SETS`. No runtime, learner-history, Mastery/Readiness or learner-facing change. Next reconciliation pass: Grade 7.
> **Grade 7 reconciliation R2 CLOSED / NotebookLM PASS 5/5:** clearance `G7_R2_RECONCILIATION_REVIEW_COMPLETE`. Final: 6 canonical-skill, 4 canonical-family, 1 lesson-local; no remaining review/gap cases. Three reviewed identities added to durable Taxonomy v2: `phep-tinh-so-huu-ti` under `NUM-FRACTION-OPS`, `so-vo-ti` under `NUM-SETS`, `chia-da-thuc-mot-bien` under current `ALG-DIV-MONOMIAL`. No runtime, learner-history, Mastery/Readiness or learner-facing change. Next reconciliation pass: Grade 8.
> **Grade 8 reconciliation R3 CLOSED / no new identity:** 3 exact-ID mismatches -> 2 canonical-family + 1 lesson-local. `bieu-thuc-nhieu-phep-tinh` remains reviewed COMPOSITE_TASK; `ket-qua-co-the` and `ket-qua-thuan-loi` map to `PROB-EVENT` family. No NotebookLM round required because no new skill/family/Core promotion is proposed. No runtime, learner-history, Mastery/Readiness or learner-facing change. Next reconciliation pass: Grade 9 R4.
> **Grade 9 reconciliation R4 drafted — final 6–9 matrix gate:** 4 remaining Grade-9 exact-ID mismatches are isolated in Chapter 7 statistics: `bang-tan-so-tuong-doi`, `bieu-do-tan-so`, `bieu-do-tan-so-tuong-doi`, `bang-tan-so-ghep-nhom`. Mandatory NotebookLM review must also audit current layers `STAT-FREQUENCY=Core-Support` and `STAT-ADVANCED-DATA=Entrance10` against Grade-9 KNTT S1 before any layer change. Packet: `review-packets/kntt-grade9-reconciliation-r4/00_NOTEBOOKLM_PACKET_R4.md`. No taxonomy/layer/runtime/history/Mastery/Readiness change before clearance.
> **KNTT Coverage Matrix 6–9 semantic reconciliation CLOSED:** Grade 9 R4 NotebookLM PASS 4/4 + 2/2 layer audit, clearance `G9_R4_RECONCILIATION_REVIEW_COMPLETE`. Final G9: 2 canonical-skill + 2 canonical-family, no new identity. Reviewed layer corrections: `STAT-FREQUENCY: Core-Support→KNTT-Core`; `STAT-ADVANCED-DATA: Entrance10→KNTT-Core`. Grades 6–9 are all semantically reconciled; raw exact-ID mismatches remain traceability only. Runtime/history/Mastery/Readiness unchanged. Next matrix phase: audit separate coverage dimensions SKILL_MAP / LEARN_CONTENT / MICRO_PRACTICE / PRACTICE_BANK / WRITTEN_LIBRARY / READINESS where authorized.


> **Owner transfer rule:** whenever the owner must move review/source files manually (especially NotebookLM), do not only name paths. If multiple local/project files are required, provide a directly downloadable ZIP. For external sources, provide exact clickable source links. Avoid making the owner search the repository or web for named files.

## Khôi phục trong cuộc trò chuyện mới

Đọc tài liệu này trước, cùng [Master Plan canonical v1.2.1](https://github.com/TMA2015/roadmap-toan-thcs/blob/main/governance/TOAN_THCS_MASTER_PLAN.md), [Golden Template](../huong-dan/golden-template-hoc-luyen-kiem-tra.md), `assets/data/collaboration/task-registry.json` và GitHub `main`. Kiểm tra mở/merge/deploy theo commit thực tế. Quyết định được duyệt và trạng thái mới ghi ở đây có ưu tiên cao hơn tường thuật cũ, nhưng không thay được bằng chứng source/code. Sau mỗi mốc QA/định hướng/merge/deploy, cập nhật checkpoint này và registry/context có liên quan.

## Skill Taxonomy v2 — ACTIVE PROGRAM CHECKPOINT (02/10/2026)

### Durable taxonomy rules
- Không đồng nhất **Concept / Canonical skill / Problem type / Individual question**.
- Learner-facing skill family phải ít hơn diagnostic subskills; không tạo một mastery bar cho mỗi legacy tag.
- Chỉ giữ family khi điểm yếu dẫn tới remediation cụ thể; METHOD / CONTEXT / CATEGORY / COMPOSITE_TASK / SUPPORTING_SKILL không tự động trở thành learner mastery.
- Core / Core-Support / THPT-Bridge / Entrance10 / Specialized-Challenge là các trục riêng; optional/Bridge không gate Core.
- Exam frequency/importance **không** suy từ authored Practice bank; trạng thái vẫn `PENDING_OFFICIAL_CORPUS`.
- Written Library coverage được bổ sung theo problem-type gap thật, không theo quota mỗi topic.
- Tất cả legacy IDs, learner history và old tags được bảo toàn; không backfill/regrade.
- Canonical Evidence G2 hiện tại vẫn là protected boundary; Skill Taxonomy v2 chưa được phép bật runtime.

### NotebookLM review workflow — source-version rule updated 04/10/2026
- **NotebookLM** là independent academic reviewer; không dùng Gemini thay thế cho vòng audit này.
- Permanent rules source hiện hành vẫn là `00_NOTEBOOK_MATH_PERMANENT_v1.1.md` trừ khi quy tắc riêng được tăng phiên bản.
- **Master Plan permanent source phải khớp canonical Master Plan.** File `01_TOAN_THCS_MASTER_PLAN_v1.1.md` trong Notebook hiện đã lỗi thời sau Master Plan v1.2.x; phải thay bằng bản phát hành đồng phiên bản trước vòng review mới tiếp theo. Không chọn cả bản cũ và bản mới cùng lúc.
- Prompt phải ghi **đúng tổng số selected Sources** theo dạng: `2 permanent + N batch = total`.
- Chỉ upload các định dạng NotebookLM hỗ trợ; với pipeline hiện tại ưu tiên **Markdown/TXT/CSV**. JSON chỉ giữ trong GitHub cho provenance/machine-check, **không dùng làm NotebookLM Source**.
- Batch lớn được phép nếu vẫn giữ topic-local source/overlay để sửa cục bộ. Đã xác nhận:
  - CT09–CT12 combined: **492/492 PASS**;
  - CT13–CT20 combined: **1,146/1,146 PASS**.
- Output phải machine-checkable; nếu chat có nguy cơ truncate, NotebookLM có thể tạo Markdown artifact theo cùng contract.
- Permanent Sources và batch Sources phải được chọn rõ ràng; các `gemini-catalogue-*` không được chọn trừ khi một packet mới yêu cầu rõ.
- **NotebookLM delivery UX:** khi có từ 2 batch Sources trở lên, đóng gói các Source cần upload thành **một ZIP duy nhất** để owner tải một lần; không đóng gói lại permanent Sources nếu chúng đã có trong Notebook. Prompt ngắn phải **hiển thị trực tiếp trong chat**, không bắt owner mở file prompt riêng.

### S1 — CT02–CT07 — ACADEMICALLY CLOSED
- Family consolidation: **87 legacy tags → 39 learner-facing families** = 33 Core + 6 optional.
- NotebookLM family review: **39/39 PASS**, 0 mapping fixes, 8/8 written-family links PASS, ARCH_1..ARCH_10 PASS.
- CT02 full-bank: **120/120 PASS**, 103 primary + 17 formative-only.
- CT03 full-bank: **120/120 PASS**, 118 primary + 2 formative-only.
- CT04–CT07 prior Phase D: **492/492 reviewed**, 427 primary + 65 formative-only, 74 clone families; NotebookLM PASS.
- Combined S1 question-level evidence basis: **732 questions reviewed**.
- No runtime activation.

### S2 — CT08–CT12 — ACADEMICALLY CLOSED
- Family review: **75 legacy tags → 29 learner-facing families** = 20 Core + 9 optional.
- NotebookLM: 29/29 families PASS, 0 mapping fixes, 9/9 written gaps PASS, CROSS_1..4 PASS.
- CT08 full-bank: **132/132 PASS**.
- CT09–CT12 combined: **492/492 PASS**, 59/59 clone families PASS.
- S2 total: **624/624 PASS, 0 revisions**.
- Final registry: `review-packets/skill-taxonomy/S2_FINAL_ACADEMIC_REGISTRY_R1.json`.
- No runtime activation.

### S3 — CT13–CT20 — ACADEMICALLY CLOSED
- Family review: **162 legacy tags → 44 learner-facing families** = 38 Core + 1 Core-Support + 5 optional.
- `CT20:nhan-dang-cong-cu` is intentionally METHOD / NO_FAMILY.
- Family NotebookLM review: 44/44 PASS, 0 mapping fixes, 9/9 written gaps PASS, 7/7 cross-topic reuse checks PASS.
- Final full-bank review source set: exactly **11 selected Sources**:
  - permanent `00_NOTEBOOK_MATH_PERMANENT_v1.1.md`;
  - permanent `01_TOAN_THCS_MASTER_PLAN_v1.1.md`;
  - 8 CT13–CT20 overlay Markdown Sources;
  - `09_NOTEBOOKLM_COMBINED_REVIEW_GUIDE.md`.
- Final item audit: **1,146/1,146 PASS**, 0 revisions, 165/165 clone-family candidates PASS, 20/20 topic checks PASS, ARCH_1..ARCH_14 PASS.
- Evidence split: **1,136 mapped-family items + 10 CT20 formative/no-family method items**.
- Authorization: `CLEARED_FOR_S3_CT13_20_RECONCILIATION`.
- Final registry: `review-packets/skill-taxonomy/S3_FINAL_ACADEMIC_REGISTRY_R1.json`.
- Review PR #266: latest checked Roadmap PR Quality **SUCCESS**.
- No runtime activation.

### S4 — CT21–CT25 — ACADEMICALLY CLOSED
- Scope: **612 Practice questions / 62 legacy mappings**.
- Family-level NotebookLM review: **19/19 PASS**, **0 mapping fixes**, **4/4 written gaps PASS**, CROSS_1..4 PASS, ARCH_1..12 PASS.
- Full-bank NotebookLM audit:
  - CT21 **132/132 PASS**
  - CT22 **120/120 PASS**
  - CT23 **120/120 PASS**
  - CT24 **120/120 PASS**
  - CT25 **120/120 PASS**
  - combined **612/612 PASS**
  - revisions **0**
  - missing **0**
  - clone-family candidates **66/66 PASS**
  - BOUNDARY_1..8 PASS
  - ARCH_1..12 PASS
  - authorization `CLEARED_FOR_S4_CT21_25_RECONCILIATION`
- Evidence boundary:
  - **492** mapped-family evidence rows;
  - **120** intentional NO_FAMILY rows;
  - CT22 remains **THPT-Bridge / non-gating**;
  - CT24 = 80 mapped-family + 40 context/NO_FAMILY rows;
  - CT25 = 40 mapped-family + 80 CATEGORY/NO_FAMILY rows;
  - EXAM-STRATEGY / EXAM-REVIEW remain optional Entrance10;
  - MCQ evidence does not substitute for required written reasoning.
- Final S4 registry: `review-packets/skill-taxonomy/S4_FINAL_ACADEMIC_REGISTRY_R1.json`.
- S4 closure: `review-packets/skill-taxonomy/S4_ACADEMIC_CLOSURE_20261002.md`.
- Review branch: `review/skill-taxonomy-v2-s4-ct21-25-combined-r1-20261002`.
- Draft PR: **#268**.
- No runtime/mastery/Readiness/history migration was authorized by S4 closure.

### Whole-project cross-batch reconciliation — CT02–CT25 — ACADEMICALLY CLOSED
- Draft PR: **#269**.
- NotebookLM result:
  - **131/131** family definitions PASS;
  - **386/386** legacy mappings PASS;
  - **5/5** CT24 canonical reuse mappings PASS;
  - **20** intentional NO_FAMILY mappings PASS;
  - `hieu-hai-binh-phuong`: PASS_AS_CONTEXTUAL_REUSE between ID-STRUCTURE and FAC-IDENTITY;
  - `binh-phuong-hoan-chinh`: PASS_AS_CONTEXTUAL_REUSE between ID-STRUCTURE and FAC-IDENTITY;
  - FIX_COUNT **0**;
  - ARCH_1..16 PASS;
  - OVERALL PASS;
  - authorization `CLEARED_FOR_TAXONOMY_V2_IMPLEMENTATION_PLANNING`.
- Academic closure receipt: `review-packets/skill-taxonomy/TAXONOMY_V2_ACADEMIC_CLOSURE_20261002.md`.
- This closes the **academic taxonomy design**, not runtime activation.

### Skill Taxonomy v2 implementation — I0 DONE
- Approved plan R1: `docs/roadmap/skill-taxonomy-v2-implementation-plan-r1.md`.
- I0 PR: **#271**.
- Exact tested HEAD: `ae8b7264fedbbe62e16b7d2d6a98634341554aa1`.
- Roadmap PR Quality: run **37013490363 — SUCCESS**.
- Squash merge to main: `a8b619a2b1ed5d572f615cd7178e0906978eaa6a`.
- Durable registry:
  - path: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json`
  - blob: `c2f2e5b8d78a58d874f88524861326223fdbdf45`
  - **131** family definitions / **131 unique IDs**
  - **386** legacy mapping rows
  - **20** intentional NO_FAMILY mappings
  - **14** total CROSS_TOPIC_REUSE mappings across S1–S4
  - exactly **5** explicit CT24 canonical-reuse mappings
  - reviewed Practice basis: **3,114 questions**
- I0 QA specifically locks:
  - S1–S4 source registry blob SHAs;
  - the two approved contextual diagnostic-subskill overlaps;
  - legacy store `toan-thcs-practice-v1`;
  - Canonical Evidence G2 store `toan-thcs-canonical-evidence-v2`;
  - G2 boundary **101 rows / 7 skills / CĐ04–07**;
  - no Taxonomy v2 runtime JS reads/writes the proposed new store.
- Source-preservation edge case fixed during CI: CT20 `nhan-dang-cong-cu` remains METHOD / NO_FAMILY with `layer: null`; no layer was invented.
- Technical receipt: `review-packets/skill-taxonomy/implementation/I0_DURABLE_REGISTRY_TECHNICAL_CHECKPOINT.md`.
- **No learner UI change. No learner-data write. No backfill/regrade. No mastery/Readiness activation.**

### Skill Taxonomy v2 — I1 DONE
- Task: `MATH-SKILL-TAXONOMY-V2-I1-001`.
- PR: **#272**.
- Exact tested HEAD: `35128a591e60e7737c00d2f63d3713b8d50d43ad`.
- Roadmap PR Quality: run **37016671647 — SUCCESS**.
- Squash merge to main: `144772d4464aa03d79ddcaf543dcc4fc7a956145`.
- Runtime-disabled index:
  - `docs/assets/data/curriculum/taxonomy-v2-runtime/index-r1.json`
  - blob `592075ed951a55c7b0c6b81255e1ca51c9672339`
- Compiled scope:
  - **24** topic policy files: CT02 → CT25;
  - **3,114** reviewed question rows / **3,114 unique IDs**;
  - **2,900** family-linked rows;
  - **214** formative / NO_FAMILY rows;
  - largest topic policy **195 rows**;
  - no monolithic 3,114-row runtime payload.
- I1 CI verifies current Practice bank Git blob SHAs, exact question-ID coverage, exact legacy skill tags, family/layer consistency, source overlay locks, and global ID uniqueness.
- Existing `toan-thcs-practice-v1` and Canonical Evidence G2 `toan-thcs-canonical-evidence-v2` remain unchanged.
- No runtime JS loads `taxonomy-v2-runtime/`.
- No runtime JS accesses proposed `toan-thcs-taxonomy-v2-evidence-v1`.
- Technical receipt: `review-packets/skill-taxonomy/implementation/I1_TOPIC_POLICY_COMPILATION_TECHNICAL_CHECKPOINT.md`.

### Skill Taxonomy v2 — I2 CT02 shadow canary — DONE
- Task: `MATH-SKILL-TAXONOMY-V2-I2-001`.
- PR: **#273**.
- Exact tested HEAD: `53d6e0b90a6ceded5ace55b1c6d616c667928b3a`.
- Automated QA and deploy: **PASS**.
- Owner production QA: **PASS**.
  - debug policy loaded with `policy_ready: true` / `policy_error: null`;
  - non-canary `NUM02V1_119` correctly returned `not_in_i2_canary`;
  - normal learner UI showed no Taxonomy v2 QA panel.
- Owner QA receipt: `review-packets/skill-taxonomy/implementation/I2_CT02_SHADOW_CANARY_OWNER_QA_PASS.md`.
- I2 evidence remains valid in the same isolated store and is preserved by I3A.

### Skill Taxonomy v2 — I3A full CT02 shadow — DONE
- Task: `MATH-SKILL-TAXONOMY-V2-I3-001`.
- PR: **#274**.
- Exact tested HEAD: `02b39d0cf27ad2815b4f0305cda506a21ab032b7`.
- Roadmap PR Quality: **37025889031 — SUCCESS**.
- Squash merge: `c1940bda496caeed2e4f269c1e9e087145a96275`.
- Deploy MkDocs: **37026596985 — SUCCESS**.
- Deployed artifact verification: **PASS**.
- Runtime scope:
  - CT02 total **120** rows;
  - **103** family-linked active;
  - **17** formative / NO_FAMILY no-write guards;
  - **10** KNTT-Core learner families;
  - maximum **75** independent units after clone de-dup.
- Owner production QA: **PASS**.
  - `policy_ready: true`, `policy_error: null`;
  - observed store: **8 events / 8 seen questions / 7 independent units**;
  - last capture: `NUM02V1_100` -> `NUM-FRACTION-OPS` / `phep-tinh-phan-so`;
  - `independent_evidence: true`, `first_unseen_unit`;
  - normal learner UI showed no Taxonomy v2 panel.
- Owner QA receipt: `review-packets/skill-taxonomy/implementation/I3A_FULL_CT02_SHADOW_OWNER_QA_PASS.md`.
- I3A status: **DONE**.
- Still OFF: mastery, Readiness, backfill/regrade, learner-facing Taxonomy v2 UI.

### Skill Taxonomy v2 — I3B CT02–CT03 shadow — LIVE / OWNER QA PENDING
- Task: `MATH-SKILL-TAXONOMY-V2-I3B-001`.
- PR: **#275**.
- Exact tested HEAD: `b3c650955fc4481cff121702542ba57c4296140d`.
- Roadmap PR Quality: **37030103708 — SUCCESS**.
- Squash merge: `a49ea5832206e7cd43df0440e241799d246a9916`.
- Deploy MkDocs: **37030799961 — SUCCESS**.
- Deployed artifact verification: **PASS**.
- Policy: `docs/assets/data/curriculum/taxonomy-v2-runtime/i3b-ct02-03-r1.json`.
- Combined runtime scope:
  - **240** rows total;
  - **221** family-linked active;
  - **19** formative / NO_FAMILY no-write guards;
  - **16** unique KNTT-Core learner families;
  - maximum **149** independent units after topic-scoped clone de-dup.
- Per-topic scope:
  - CT02: **120 = 103 active + 17 guards**;
  - CT03: **120 = 118 active + 2 guards**.
- CT03 adds seven family lanes: RATIO-BASIC, RATIO-PROP, RATIO-SPLIT, RATIO-DIRECT, RATIO-INVERSE, RATIO-DISTINGUISH, and canonical reuse NUM-PERCENT.
- Cross-topic NUM-PERCENT evidence units remain topic-scoped, so CT02 and CT03 evidence does not collapse into one unit.
- Same isolated store `toan-thcs-taxonomy-v2-evidence-v1` preserves I2/I3A evidence.
- Runtime boundaries remain: legacy Practice first; G2 unchanged; fail-open; assisted/repeat/clone de-dup preserved; NO_FAMILY no-write; no mastery/Readiness/backfill/UI.
- Release receipt: `review-packets/skill-taxonomy/implementation/I3B_CT02_03_SHADOW_RELEASE_RECEIPT.md`.
- Current gate: **OWNER PRODUCTION QA**.
- **No CT04+ expansion is authorized until this gate is closed.**

## Written Library Expansion B7 — CLOSED DONE / owner QA PASS (02/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B7-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B7-R1-20261001`.
- Review PR: #254 (Draft; provenance/review only; do not merge as implementation).
- Review exact HEAD before receipt: `15eb19db0073455483b9576998cb1f9f93846ca6`.
- Review preflight: Roadmap PR Quality `36897216442` **SUCCESS**.
- Owner-supplied NotebookLM result: **OVERALL PASS; 2/2 items PASS; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - `WX21-STA-001` — CORE_BASE: table → bar chart → evidence-bounded conclusion;
  - `WX21-STA-002` — CORE_APPLY: two-series comparison → percentage increase → reject unsupported causal inference.
- Implementation branch: `feature/written-library-expansion-b7-20261001`.
- Intended catalog after append: **44 items / 22 topics**, preserving all 42 published IDs.
- CT21 boundary: five-card KNTT-Core only; do not promote frequency/tần suất, grouped data, CT22 characteristic measures/THPT-Bridge, or CT25 Entrance10.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `b8aa8617212d5435d6e92311f2599e55880c1630`, Roadmap PR Quality `36898694706` **SUCCESS**; strict MkDocs build PASS; browser interaction + visual previews PASS.
- Owner explicitly authorized **controlled production release** on 02/10/2026.
- Final exact-head QA after saved authorization checkpoint: `f0df2011ab9694b06c30ffda1b7fa872d2dc1fda`, Roadmap PR Quality `36899579636` **SUCCESS**; strict MkDocs build PASS; browser interaction + visual previews PASS.
- No base drift before merge: `main` remained `0bb3ee85e6bb57a7ab86dce88bf25eeee16a677d`.
- PR #255 production merge: `47adffd87b654a1bd2b6854ddbc270bbf31dfa62`.
- Deploy MkDocs `36900375742`: **SUCCESS**, including **Deploy to GitHub Pages**.
- Production catalog verified on `main`: **44 items / 22 topics**, with CĐ21 exactly `WX21-STA-001` and `WX21-STA-002`.
- Owner production QA: **PASS on iPad and desktop** — production rendering checked by owner; supplied screenshots show the CĐ21 item, Guidance panel, $50\%$ calculation, 5-point rubric and evidence-boundary explanation rendering correctly.
- B7 status: **CLOSED DONE**.
- Normal Core Written Library expansion stops here at **44 items / 22 topics**; CT01 remains roadmap/navigation, CT22 remains THPT-Bridge, and CT25 remains separate Entrance10/tổng hợp.
- Next priority: resume **skill-taxonomy consolidation / duplicate removal / importance and coverage review**, including the independent Gemini review requested earlier.

## Written Library Expansion B6 — CLOSED DONE / owner QA PASS (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B6-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B6-R1-20261001`.
- Review PR: #251 (provenance/review only; do not merge as implementation).
- Review exact HEAD: `a0d7b879a8e01da0bd5f1bf07dd6336d0e2dd8ad`.
- Review preflight: Roadmap PR Quality `36889335146` **SUCCESS**.
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - CĐ02: `WX02-NUM-001`, `WX02-NUM-002`;
  - CĐ03: `WX03-RAT-001`, `WX03-RAT-002`;
  - CĐ20: `WX20-GEO-001`, `WX20-GEO-002`.
- Implementation branch: `feature/written-library-expansion-b6-20261001`.
- Intended catalog after append: **42 items / 21 topics**, preserving all 36 currently published IDs.
- CĐ02 remains the **grade-6 Core journey**; no cross-grade completion claim.
- CĐ20 remains **Core measurement/solid geometry**; no Entrance10 proof-chain promotion.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `39b2bd2b1cf260a7a57cc695eee898b1e9cdd5c7`, Roadmap PR Quality `36890766907` **SUCCESS**.
- Earlier run `36890557226` failed only on a regression string assertion for `WX03-RAT-001`; test assertion fixed, **no academic content changed**.
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA after saved authorization checkpoint: `1d195ee31302419927d6e03616af82bea5e1bef1`, Roadmap PR Quality `36892813423` **SUCCESS**.
- PR #252 production merge: `6dadcb1fb969380dc6fb5f7c241740dc769ae919`.
- Deploy MkDocs `36893580607`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Production catalog verified on `main`: **42 items / 21 topics** — CĐ02, CĐ03, CĐ04, CĐ05, CĐ06, CĐ07, CĐ08, CĐ09, CĐ10, CĐ11, CĐ12, CĐ13, CĐ14, CĐ15, CĐ16, CĐ17, CĐ18, CĐ19, CĐ20, CĐ23, CĐ24.
- Owner production QA: **PASS on both iPad and desktop** — CĐ02/CĐ03/CĐ20 are present and each exposes exactly 2 items.
- B6 status: **CLOSED DONE**.
- Architecture scope remains: CĐ02 grade-6 Core journey; CĐ20 Core measurement/solid geometry.
- Next academic scope: **Written Library B7 for CĐ21 Thống kê only**. CĐ22 remains THPT-Bridge; CĐ25 remains Entrance10/tổng hợp and is not forced into the normal Core append.

## Written Library Expansion B5 — PRODUCTION RELEASED / owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B5-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B5-R1-20261001`.
- Review PR: #249 (provenance/review only; do not merge as implementation).
- Review exact HEAD: `d63cd562bdf8414d2803bd2214cd20e5a8333ff8`.
- Review preflight: Roadmap PR Quality `36884636667` **SUCCESS**.
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - CĐ04: `WX04-ALG-001`, `WX04-ALG-002`;
  - CĐ05: `WX05-IDN-001`, `WX05-IDN-002`;
  - CĐ06: `WX06-FAC-001`, `WX06-FAC-002`.
- Implementation branch: `feature/written-library-expansion-b5-20261001`.
- Intended catalog after append: **36 items / 18 topics**, preserving all 30 currently published IDs.
- Architecture note: **CĐ22 remains THPT-Bridge**, not a THCS Core milestone, and is not forced into this library.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `6d1fe8c752f98477f2790555a5d452b58e477928`, Roadmap PR Quality `36885670750` **SUCCESS**.
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA after saved authorization checkpoint: `6f5ad2fb23e6cbce07e26b80901ca05297a73978`, Roadmap PR Quality `36886706322` **SUCCESS**.
- PR #250 production merge: `798cc58919aa15cd69fa28aeb5132929047f3113`.
- Deploy MkDocs `36887406960`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Production catalog verified on `main`: **36 items / 18 topics** — CĐ04, CĐ05, CĐ06, CĐ07, CĐ08, CĐ09, CĐ10, CĐ11, CĐ12, CĐ13, CĐ14, CĐ15, CĐ16, CĐ17, CĐ18, CĐ19, CĐ23, CĐ24.
- Owner production QA: **PASS on iPad and desktop**. B5 task closed.
- Architecture note remains: **CĐ22 is THPT-Bridge**, not forced into the THCS Core Written Library.

## Written Library Expansion B4 — PRODUCTION RELEASED / owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B4-001`.
- Review PR: **#247 Draft** — provenance/review only; **do not merge as implementation**.
- Review branch: `review/written-library-expansion-b4-r1-20261001`.
- Base production checkpoint: `28b1561a49ab4d935ba6167aa9d7bf1350fc0788`.
- Exact review HEAD / source-lock: `fc11593309acc9a4aa6926a7d28b387263cbe6f8`.
- Candidate blob: `1184135a82b038cd1d03623107ed8cccc33837da`.
- Packet ID: `MATH-WRITTEN-LIBRARY-EXPANSION-B4-R1-20261001`.
- Scope — exactly 6 candidates:
  - CĐ13: `WX13-LIN-001`, `WX13-LIN-002`;
  - CĐ15: `WX15-CEN-001`, `WX15-CEN-002`;
  - CĐ23: `WX23-PRO-001`, `WX23-PRO-002`.
- Design: one `CORE_BASE` + one `CORE_APPLY` per topic.
- Academic boundaries:
  - CĐ13: theorem direction, GT/KL, explicit proof grounds; no diagram inference.
  - CĐ15: centroid ratio; median vs perpendicular bisector; incenter distance-to-side-lines vs circumcenter distance-to-vertices.
  - CĐ23: **KNTT-Core only**; equal-likelihood check + classical/experimental probability. No complement-event/tree/two-dice/no-replacement extension machinery.
- NotebookLM source file: `review-packets/written-exercise-library/27_UPLOAD_TO_NOTEBOOKLM_WRITTEN_EXPANSION_B4_R1.md`.
- NotebookLM prompt: `review-packets/written-exercise-library/28_COPY_TO_NOTEBOOKLM_WRITTEN_EXPANSION_B4_R1.txt`.
- Production is unchanged: **24 items / 12 topics**.
- No runtime/UI/deploy change; no automatic Readiness/mastery credit; no canonical-evidence/G3 change.
- Roadmap PR Quality `36879068239`: **SUCCESS**.
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Implementation branch: `feature/written-library-expansion-b4-20261001`.
- Intended catalog after append: **30 items / 15 topics**, preserving all 24 currently published IDs.
- Technical QA: exact HEAD `9dc51f28a670fc8748a670f3d876793940623114`, Roadmap PR Quality `36880519503` **SUCCESS**.
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA after saved authorization checkpoint: `027e18ea8953de4986399d999363a5e13be6db93`, Roadmap PR Quality `36881591932` **SUCCESS**.
- PR #248 production merge: `83db880966bd0dcfaf594811ff30abff1e9edd9a`.
- Deploy MkDocs `36882280354`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Production catalog verified on `main`: **30 items / 15 topics** — CĐ07, CĐ08, CĐ09, CĐ10, CĐ11, CĐ12, CĐ13, CĐ14, CĐ15, CĐ16, CĐ17, CĐ18, CĐ19, CĐ23, CĐ24.
- Owner production QA: **PASS on iPad and desktop**. B4 task closed.

## Written Library Expansion B3 — PRODUCTION RELEASED / owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B3-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B3-R1-20261001`.
- Review PR: #245 (provenance/review only; do not merge as implementation).
- Review preflight: exact HEAD `08da2d3df55dc1cd22aae1f8edabe15894deeb77`, Roadmap PR Quality `36870959157` **SUCCESS**.
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - CĐ10: `WX10-FUN-001`, `WX10-FUN-002`;
  - CĐ11: `WX11-RAD-001`, `WX11-RAD-002`;
  - CĐ12: `WX12-QUA-001`, `WX12-QUA-002`.
- Implementation branch: `feature/written-library-expansion-b3-20261001`.
- Implementation PR: #246 (Draft).
- Intended catalog after append: **24 items / 12 topics**, preserving all 18 currently published IDs.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `030687f95a6a174b4ae42a54c0d32acbfc728ed1`, Roadmap PR Quality `36875117900` **SUCCESS**; duplicate same-head run `36875088705` also **SUCCESS**.
- Intermediate technical fixes only: relaxed unsupported `>=4` solution-step harness assumption to `>=3` with stronger step integrity checks; reconciled proposed B3 batch metadata to `PUBLISHED`. **No reviewed academic content changed.**
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA after saved authorization checkpoint: `1795377603e40b1b41d22a20ffc4f518d8afbf35`, Roadmap PR Quality `36876254236` **SUCCESS**.
- PR #246 production merge: `2a6204c9ee4134471ea678fcc07347439e22faae`.
- Deploy MkDocs `36876967991`: **SUCCESS**, including `Deploy to GitHub Pages`.
- Production catalog verified on `main`: **24 items / 12 topics** — CĐ07, CĐ08, CĐ09, CĐ10, CĐ11, CĐ12, CĐ14, CĐ16, CĐ17, CĐ18, CĐ19, CĐ24.
- Owner production QA: **PASS on iPad and desktop**. B3 task closed.

## Written Library intro-copy refresh — PRODUCTION RELEASED (01/10/2026)

- Owner production QA closed B2: CĐ09/CĐ16/CĐ18 are visible and each has 2 exercises.
- Production intro was stale: it still hard-coded `Pilot v1`, `6 bài`, and only CĐ07/CĐ14/CĐ24.
- Durable rule: **the library intro must not hard-code current exercise count or topic list**. Current coverage belongs to the live catalog/filter UI.
- Replacement copy keeps the paper-first workflow and tells learners to use filters for currently available topics/types/levels.
- B2 catalog batch metadata is reconciled from `TECHNICAL_IMPLEMENTATION_CANDIDATE` to `PUBLISHED`.
- Exact-head QA: `3f459683f8fe1bff52c1f32eb645e3b24a792b89`, Roadmap PR Quality `36869043055` **SUCCESS**.
- PR #244 merge: `aa813c19fab105c5e0f3ef12a982f98406fac5de`.
- Deploy MkDocs `36869588454`: **SUCCESS**.
- Owner production spot-QA: **PASS**. Task closed.

## Written Library Expansion B2 — PRODUCTION RELEASED / owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B2-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B2-R1-20261001`.
- Review PR: #242 (provenance/review only; do not merge as implementation).
- Review preflight: exact HEAD `df054642bcdaaacf74723702d6a0d20ec894a80f`, Roadmap PR Quality `36864002108` **SUCCESS**.
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_10 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - CĐ09: `WX09-SYS-001`, `WX09-SYS-002`;
  - CĐ16: `WX16-QUAD-001`, `WX16-QUAD-002`;
  - CĐ18: `WX18-TRI-001`, `WX18-TRI-002`.
- Implementation branch: `feature/written-library-expansion-b2-20261001`.
- Intended catalog after append: **18 items / 9 topics**, preserving all 12 currently published IDs.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `e1598d6febb719ead3de2a42fe78436ccb0eedb1`, Roadmap PR Quality `36865069195` **SUCCESS**.
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA: `de16484dc41e32a48515ba853c5d40c4c0ba1a83`, Roadmap PR Quality `36866360773` **SUCCESS**.
- PR #243 production merge: `ebd8c5e3f17805ddfd281826956c4d4de799cd5e`.
- Deploy MkDocs `36866917887`: **SUCCESS**, including the `Deploy to GitHub Pages` step.
- Production catalog: **18 items / 9 topics** — CĐ07, CĐ08, CĐ09, CĐ14, CĐ16, CĐ17, CĐ18, CĐ19, CĐ24.
- Owner production QA: **PENDING**; refresh `/luyen-tap/` and confirm CĐ09/CĐ16/CĐ18 each expose exactly 2 items.

## Written Library topic-filter numeric order fix — RELEASED (01/10/2026)

- Owner confirmed B1 production expansion is present: CĐ08, CĐ17 and CĐ19 each show 2 exercises.
- UX issue found: topic dropdown followed catalog append order rather than topic number.
- Durable rule: **topic filter options are sorted numerically by CĐ/CT number, independent of catalog insertion/append order**.
- PR #241 exact tested HEAD: `f7d6954a404542f08efa6e2928a21e925a004abb`.
- Roadmap PR Quality `36862512366`: **SUCCESS**.
- Production merge: `3e30e66b041b0ca92f8b706e07f8568511471e9b`.
- Deploy MkDocs `36863005816`: **SUCCESS**.
- Regression test now asserts numeric ascending topic-option order.
- Expected current dropdown order: CĐ07 → CĐ08 → CĐ14 → CĐ17 → CĐ19 → CĐ24.
- Owner order spot-QA: **PASS**. Task closed.

## Written Library Expansion B1 — PRODUCTION RELEASED / owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-LIBRARY-EXPANSION-B1-001`.
- Academic packet: `MATH-WRITTEN-LIBRARY-EXPANSION-B1-R1-20261001`.
- Review PR: #239 (provenance/review only; do not merge as implementation).
- NotebookLM result supplied by owner: **OVERALL PASS; 6/6 items PASS; 0 revisions; ARCH_1–ARCH_8 PASS**.
- Authorization: `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Approved candidates:
  - CĐ08: `WX08-EQI-001`, `WX08-EQI-002`;
  - CĐ17: `WX17-SIM-001`, `WX17-SIM-002`;
  - CĐ19: `WX19-CIR-001`, `WX19-CIR-002`.
- Implementation branch: `feature/written-library-expansion-b1-20261001`.
- Intended catalog after append: **12 items / 6 topics**, preserving the original six pilot items.
- Self-marking only; no automatic Readiness/mastery credit; no canonical-evidence/G3 expansion.
- Technical QA: exact HEAD `bc5cbd9a3c9971ff5d20ef1bc446d6d0f212da09`, Roadmap PR Quality `36859348005` **SUCCESS**. First run `36859229839` failed only because the test harness still expected six IDs; catalog content was already correct.
- Owner explicitly authorized **controlled production release** on 01/10/2026.
- Final exact-head QA: `86b065ec8479688ea7e4eb643202e1ae18556a63`, Roadmap PR Quality `36860254512` **SUCCESS**.
- PR #240 production merge: `6f506f1f0434d1f06099a4e78c2f669ffe2e9257`.
- Deploy MkDocs `36860706849`: **SUCCESS**, including the `Deploy to GitHub Pages` step.
- Expected production catalog: **12 items / 6 topics** — CĐ07, CĐ08, CĐ14, CĐ17, CĐ19, CĐ24.
- Owner production QA: **PENDING**; refresh `/luyen-tap/` and confirm 12 items plus new topic filters/cards.

## Patch 1 owner spot-QA partial update (01/10/2026)

- **PASS:** quick shortcut displays `7 + 25` and includes **Thư viện bài tập**.
- **PASS:** compact horizontal **Hướng dẫn / Rubric / Lỗi thường gặp** row; owner production screenshot approved the layout.
- Still to spot-check by owner:
  - topic **Các dạng bài** link opens the library with the correct topic filter.
- Automated exact-head browser QA for both remaining behaviors already PASS; owner visual/real-device acceptance remains separate.

## Learner-help disclosure toggle — OWNER QA PASS; CLOSED DONE (30/09/2026)

- Task: `MATH-HELP-DISCLOSURE-TOGGLE-001`.
- Owner-approved scope is **UI disclosure only**: collapsing does not erase viewed hints, full-solution state, assistance classification, attempts, readiness/history or canonical evidence.
- Implementation PR #227, exact tested HEAD `e55667c5a0db5b034e832feeef1d95334d63aa01`.
- Roadmap PR Quality run `36719189942`: **SUCCESS**.
- New desktop/mobile browser regression confirms:
  - Practice help opens → closes → reopens with the same button;
  - Core hint 1 → hint 2 → **Thu gọn gợi ý** → **Xem lại gợi ý (2/2)**;
  - collapsing/reopening creates no phantom attempt;
  - after a real answer, viewed hints remain recorded (`hints_used >= 2`, `hinted_attempts = 1`);
  - legacy sentinel data remains unchanged.
- PR #227 production merge: `fb571ec78cfaf56f82d7dd81b719481dc4296e2b`.
- Deploy MkDocs run `36719709094`: **SUCCESS**.
- Owner spot-QA: **PASS on desktop and iPad**. Practice help and Core hint disclosure behavior matches the approved UX rule. Task `MATH-HELP-DISCLOSURE-TOGGLE-001` is CLOSED DONE.

## Written Library Patch 1 — compact actions + shortcut + topic deep links (01/10/2026)

Owner production QA on desktop+iPad confirmed the six-item pilot works and is the intended learning experience.

Approved follow-up:
- replace the three stacked **Hướng dẫn / Rubric / Lỗi thường gặp** disclosures with one **three-column horizontal action row**; revealed content stays full-width below the row;
- keep toggles presentation-only: no learner-data/Readiness/mastery write;
- add **Thư viện bài tập** to the header quick shortcuts, changing the compact launcher from **6 + 25** to **7 + 25**;
- on topic lesson pages, add a compact CTA immediately after **Các dạng bài** when the published written catalog contains items for that topic;
- CTA deep-links to `/luyen-tap/?topic=CTxx`, so the topic filter is applied automatically;
- do not show an empty-topic CTA for topics that do not yet have written-library items. As the JSON catalog grows, links appear automatically without editing source-locked lesson Markdown.

Task: `MATH-WRITTEN-LIBRARY-UX-PATCH-001`.
Branch: `fix/written-library-compact-links-shortcut-20261001`.
Status: **PRODUCTION RELEASED / owner spot-QA pending**.

Release provenance:
- exact tested HEAD: `8be3c40482dcf48545fa49e27cfccaa1822b8b16`;
- Roadmap PR Quality `36841009154`: **SUCCESS**;
- PR #237 merge: `a80343a5ceba56957af3002f4b128e9fb5545c8e`;
- Deploy MkDocs `36841498180`: **SUCCESS**.

## Written Exercise Library v1 pilot — PRODUCTION RELEASED; owner QA pending (01/10/2026)

- Task: `MATH-WRITTEN-EXERCISE-LIBRARY-001`.
- Branch: `feature/written-exercise-library-pilot-20261001`.
- Exactly six candidate items:
  - CĐ07: `WX07-RAT-001`, `WX07-RAT-002`;
  - CĐ14: `WX14-TRI-001`, `WX14-TRI-002`;
  - CĐ24: `WX24-MOD-001`, `WX24-MOD-002`.
- Coverage contract: one `CORE_BASE` + one `CORE_APPLY` per pilot topic.
- UI: central `/luyen-tap/` library; filters by topic, **problem type**, level and text search; query parameters can preselect filters for future deep links from “Các dạng bài”.
- Each item: paper-first prompt → collapsible step-by-step solution → rubric → common mistakes → remediation links.
- CĐ14 has two dedicated SVG orientation figures; figures are not hypotheses.
- Self-marking only; **no automatic Readiness/mastery credit**.
- Catalog blob: `bf926501b512a85fc2f0b73786784aa4cbe26f81`.
- NotebookLM packet: `MATH-WRITTEN-LIBRARY-PILOT-R1-20261001`.
- Upload source: `review-packets/written-exercise-library/01_UPLOAD_TO_NOTEBOOKLM_WRITTEN_PILOT_R1.md`.
- Prompt: `review-packets/written-exercise-library/02_COPY_TO_NOTEBOOKLM_WRITTEN_PILOT_R1.txt`.
- NotebookLM R1 result: **OVERALL PASS; COVERAGE 6/6; ARCH_1–ARCH_6 PASS**; authorization `CLEARED_FOR_SEPARATE_TECHNICAL_IMPLEMENTATION_QA`.
- Prior exact implementation HEAD `c4616821fb6ce491977b9c1fe1e791bcb3e50e39` already passed Roadmap PR Quality `36825618122`, Skill assessment `36825618194`, and branding `36825617988`.
- Exact authorized HEAD `ad0234e4bf367b4b28d17664a687fbf3a0931a02` passed Roadmap PR Quality `36832354851`, Skill assessment `36832355939`, and branding `36832354918`.
- Owner explicitly authorized controlled production release.
- PR #234 merged as `56739479516bafe00340594cb161f5251fb9e3e9`.
- Deploy MkDocs `36833487797`: **SUCCESS**.
- Current gate: owner production QA on `/luyen-tap/` before task closure.

## Final owner-QA cleanup + product-completeness observations (01/10/2026)

- **CĐ02 Grade6 end-to-end:** owner PASS on desktop+iPad; `G6-T02-OWNER-UX-001` → DONE.
- **CĐ21/CĐ24/CĐ25:** owner PASS on desktop+iPad; together with prior CĐ02/CĐ23 acceptance, `MATH-UI-BATCH-A-OWNER-QA-001` → DONE.
- The 30/09 housekeeping list is now **4/4 owner-QA debts cleared**.

### Navigation/rendering patch staged

- Owner screenshot exposed raw Markdown in **Tiếp tục học**. Audit found the same source pattern in **CĐ02 and CĐ04–13**. Final implementation **does not modify those source-locked lesson files**; it keeps `attr_list` and uses the narrow `hooks/topic_markdown_fixes.py` build hook, then verifies the built HTML contains rendered buttons with no raw Markdown leakage.
- Practice footer navigation is standardized across **CĐ02–25**: **previous topic → same-topic learning/self-check → next topic**. CĐ25 has no next topic.
- Regression: `scripts/test-topic-roadmap-navigation.py`.
- PR #232 exact tested HEAD `891c1dea7eda264f1da918590ddf1c7ad1aa8fb2`: Roadmap PR Quality `36821844162` **SUCCESS**; Skill assessment `36821844031` **SUCCESS**; branding `36821844317` **SUCCESS**.
- Production merge `a1dce90e0436351ea109bd6dbe4c6697dafcff3f`; Deploy MkDocs `36822248798` **SUCCESS**.
- Owner production spot-QA: **PASS**. Task `MATH-TOPIC-NAV-FIX-001` → **DONE**.

### UX backlog

- `MATH-TOPIC-NAV-DEDUP-001`: compare the top four-step stepper with the in-topic quick menu. Keep both for now; this is not release-blocking.

### Written Exercise Library v1

Owner identified a real academic gap: many **Các dạng bài** sections describe methods but do not show enough concrete written problems, while interactive Practice is skill-oriented.

Preferred direction:
- paper-first problems;
- one **Core Base** item per problem type when sufficient;
- optional second **Core Apply** item;
- hidden step-by-step solution;
- rubric;
- common mistakes + remediation links;
- anchor problems surfaced in the same library without duplicating existing A25 sources;
- append-only expansion later;
- no requirement for typed long answers, handwriting upload, AI grading, or Readiness credit.

Design contract: `docs/collaboration/written-exercise-library-v1.md`.
Recommended first pilot: **CĐ07 + CĐ14 + CĐ24, two items each**.
Task: `MATH-WRITTEN-EXERCISE-LIBRARY-001`.

## Owner QA cleanup — CĐ03 + CĐ07 PASS (01/10/2026)

- **CĐ03 standalone Core:** owner confirmed **PASS on desktop and iPad**, no observed errors. Task `MATH-CORE03-OWNER-QA-001` → **DONE**.
- **CĐ07 current Core:** owner confirmed **PASS on desktop and iPad**, no observed errors. Acceptance is for the current **5 cards + 17 micro / 11/11 declared skill opportunities** baseline. Task `C07-MICRO15-001` → **DONE**; the old “15-item pilot” scope is no longer used.
- These device acceptances do not alter academic/evidence semantics and do not reopen G2.
- **Owner QA still open:** `G6-T02-OWNER-UX-001` (Grade6 CĐ02 full journey/Readiness) and `MATH-UI-BATCH-A-OWNER-QA-001` (remaining CĐ21/CĐ24/CĐ25).

## End-of-day housekeeping — project paused on stable baseline (30/09/2026)

### Real owner-QA debt to clear next

1. `MATH-CORE03-OWNER-QA-001` — **CĐ03 standalone Core**, desktop+iPad. Academic R2 / CI / deploy already PASS; owner acceptance is the missing gate.
2. `C07-MICRO15-001` — migrated from the obsolete 15-item pilot label to the **current CĐ07 17-item Core baseline**. G2 production QA tested CĐ07 Practice/canonical capture, not the whole Core micro journey; owner Core acceptance is still not explicit.
3. `G6-T02-OWNER-UX-001` — **CĐ02 Grade6 end-to-end journey/Readiness** only. CĐ02 card functions were already accepted on desktop+iPad, so do not repeat basic card QA; check chapter link → cards → hints → after-submit Readiness → next-topic.
4. `MATH-UI-BATCH-A-OWNER-QA-001` — remaining **CĐ21/CĐ24/CĐ25** owner acceptance. CĐ02/CĐ23 card basics are already accepted and should not be re-tested merely to close Batch A.

### Retired as stale/superseded

- `CONTENT-PILOT-001` — sample Core/Entrance10/Challenge pipeline pilot is superseded by the much later released production content pipeline.
- `GEO-BATCH-16-18-GEMINI-REVIEW-001` — retired **without claiming an independent Gemini/NotebookLM PASS**. Current handoff freezes CĐ16–18 as released baseline (“Không làm lại”); reopen only on new concrete defect evidence.

### Valid non-blocking backlog

- `BENCH-CAP-001` — capability benchmark; useful but not a release gate.
- `GEO-LIB-001` — reusable spec-driven SVG library/semantic geometry validation; umbrella intentionally remains OPEN.
- `ALG-REVIEW-04-11-GEMINI-001` — older independent-review backlog; do not run blindly before reconciling scope/routing with the current NotebookLM/source-locked process.
- `GEO13-GEMINI-REVIEW-001` — same: optional independent academic backlog, not blocking current production baseline.
- `G6-T03-SCOPE-001` — valid future Grade6/Grade7 scope separation work.

### Repository hygiene note

There are still many historical open PRs, mostly **audit/provenance drafts**. Do not bulk-merge them. Several older implementation/design PRs are clearly superseded, but closing/deleting provenance branches should be a separate hygiene action after verifying every blob/reference needed by handoff and review receipts. No such cleanup is required to resume product work.

### Pause rule

- **G2 stays CLOSED DONE.**
- **G3 is OFF.**
- No new mastery/Readiness, canonical remediation/ranking, migration/backfill/regrade or broader canonical capture is authorized.
- Resume tomorrow from the owner-QA list above, then decide the next substantive phase.

## Phase G2 — RELEASED + OWNER PRODUCTION QA PASS; G2 CLOSED DONE (30/09/2026)

- Academic review packet `MATH-CANONICAL-EVIDENCE-G2-PROVEN-SKILLS-R1-20260930`: NotebookLM compact recheck **74/74 delta item PASS + 8/8 architecture PASS**; authorization limited to separate technical implementation/QA.
- G2 audit/review provenance: PR #223; source blob `95b32fa4b5ebebdc88886cc9725b7b90ae991e46`.
- Technical implementation [PR #224](https://github.com/TMA2015/roadmap-toan-thcs/pull/224), exact tested HEAD `56892b0d5b8a9791e99e48e4f9022412097e764b`.
- Exact-head Roadmap PR Quality run `36708260947`: **SUCCESS**. Verified **101 = 27 G1 + 74 G2**, 7 proven skills, max 23 topic-scoped units, manifest↔policy 101/101, G1 regression subset, source/tag/blob locks, clone/repeat, assisted/unassisted, negative evidence, cross-topic identity, standalone units, strict MkDocs build and real Practice browser QA across CĐ04–07.
- QA artifact `11093235811`, digest `sha256:e1a971357be742e5f3da39c93fea0326e199152902c96fc169c8506b960eb916`.
- Owner explicitly authorized controlled production release for the exact tested HEAD on 30/09/2026.
- PR #224 squash merge: `3c235e4e23ed6adf33fbba8ff7f01737b709fac7`.
- Deploy MkDocs run `36713507743`: **SUCCESS**, including the GitHub Pages deploy step.
- Production store remains `toan-thcs-canonical-evidence-v2`; Beta v1 remains frozen/read-only; no migration/backfill/regrade; normal learner UI unchanged.
- **Owner production QA: PASS.** Live screenshots confirm `canonical-evidence-g2-proven-skills-20260930`, `policy_ready=true`, `policy_error=null`, store `toan-thcs-canonical-evidence-v2`, a five-event observed session, successful `RAT07V1_115` capture, and correct `RAT07V1_114 -> not_in_g2_policy` exclusion. Exact-head automated browser QA had already directly captured representative G2 delta rows. Task `MATH-CANONICAL-EVIDENCE-PRODUCTIONIZATION-G2-001` is CLOSED DONE.
- **Still OFF:** G3, mastery labels/percentages/thresholds, Core Readiness credit, canonical remediation/weak-skill ranking, PENDING/formative-only capture, and canonical production capture outside this exact CĐ04–07 / seven-skill G2 boundary.
- **Separate UX follow-up discovered during owner QA:** learner help/solution disclosure controls should support collapsing after expansion; track separately from canonical-evidence acceptance.

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

## Phase G1 — RELEASED + OWNER PRODUCTION QA PASS; G1 CLOSED DONE (30/09/2026)

- Phase G academic review [PR #214](https://github.com/TMA2015/roadmap-toan-thcs/pull/214): NotebookLM **PASS, 0 revisions, 9/9 architecture questions PASS**.
- Controlled release [PR #217](https://github.com/TMA2015/roadmap-toan-thcs/pull/217): exact reconciled release HEAD `3473f4383df990da04404a24659732e38c5422c6`; release-head Roadmap `36700956876`, Skill `36700957023`, Branding `36700956882` all **SUCCESS**.
- Production merge `74b38fd2361c11ebc76eee743bf505e938bc48b0`; Deploy MkDocs `36701320498` **SUCCESS**.
- G1 scope remains **27 exact Beta-proven Practice items / 7 canonical skills / max 16 skill-topic units**, shadow capture only.
- Production store is `toan-thcs-canonical-evidence-v2`; Beta v1 remains frozen/read-only, no migration/backfill.
- Owner production QA final screenshot confirms **real production capture**:
  - `policy_ready = true`
  - `policy_error = null`
  - `recent_events = 3`
  - `seen_questions = 3`
  - `independent_units = 3`
  - `last_capture.captured = true`
  - `last_capture.question_id = RAT07V1_055`
  - `canonical_skill_id = rut-gon-phan-thuc`
  - `independent_evidence = true`
  - `independent_reason = first_unseen_unit`
- This closes the prior partial-QA gate: actual live Practice → canonical-v2 shadow capture is now directly observed.
- **Task `MATH-CANONICAL-EVIDENCE-PRODUCTIONIZATION-G1-001` = DONE.**
- **G2/G3 remain OFF.** Do not expand automatically. The next conversation should start a separate G2 design/review gate for the same seven proven skills before any runtime expansion.

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


> **NotebookLM source-transfer + selection protocol (owner-confirmed 2026-10-04):**
> - The owner keeps a persistent Math Notebook containing permanent governance sources plus reusable Grade 6–9 textbook PDFs.
> - For each review, always state explicitly: **KEEP**, **REPLACE/ADD**, **SELECT FOR THIS REVIEW**, and **DESELECT / leave unselected**.
> - If exactly **1 new local/project source file** is needed, provide a direct download link to that file.
> - If **2 or more new local/project source files** are needed, package them into one directly downloadable ZIP to reduce source-selection mistakes.
> - Do not make the owner search the repo or web for named files.
> - NotebookLM prompts should be short and pasted directly into ChatGPT chat for easy copy/paste; do not hide the only usable prompt inside a packet file.
> - Permanent sources normally retained: current NotebookLM Math Review Rules + current Master Plan. When either canonical permanent source is superseded, explicitly say which old file to replace/remove and provide the new file.
> - Reusable SGK PDFs may stay in the Notebook across batches; only the grade/volume(s) relevant to the current review should be selected.
> - Batch review packet/source files are temporary and should be replaced by the next batch packet unless explicitly reused.

> **KNTT dimension coverage audit — Grade 6 pilot drafted:** after Grades 6–9 semantic reconciliation closed, the matrix now audits six separate dimensions instead of equating skill-ID presence with self-learning readiness. Grade 6 = 31 rows: SKILL_MAP 31/31 semantic; Learn 9 direct-verified / 22 partial; Micro 14 direct-verified / 12 partial / 3 family-level-only / 2 none; Practice 21 topic-skill / 5 partial / 4 family-level / 1 none; Written 5 candidate-only + 26 none because current Written Library has 0 `kntt_placements`; Readiness 1 authorized topic-level / 2 pending / 28 not verified structured. Priority gaps: Bài 30 `lam-tron-so` missing Learn skill metadata + micro + Practice evidence; Bài 42 outcome/event lacks direct Grade-6 micro and CT23 readiness remains pending. This audit is read-only; no content/runtime/history/Mastery/Readiness change. Next gate: CI → merge audit framework → repair Bài 30 first before mass expansion.

> **Grade 6 Bài 30 rounding repair R1 candidate READY / NotebookLM pending:** branch `content/kntt-g6-bai30-rounding-repair-r1-20261004`. Candidate adds reviewed canonical `lam-tron-so` to Grade-6 Learn card 5, updates teaching copy, adds micro `NUM02MICRO_021–023`, and adds Practice `NUM02V1_121–132` in new chunk `02-so-va-phep-tinh-v1-05.json` (bank candidate 120→132). `uoc-luong` remains lesson-local; no `uoc-luong` skill is created. Packet: `review-packets/kntt-g6-bai30-rounding-r1/00_NOTEBOOKLM_PACKET_R1.md`, id `MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004`. Do not open/merge release PR until NotebookLM clearance `G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE`; no runtime/history/Mastery/Readiness change.

## Duy trì trạng thái

Cập nhật GitHub sau mỗi mốc quyết định, QA, merge, deploy hoặc nghiệm thu; lịch sử Git giữ bản cũ. Không có bộ đếm đáng tin cậy để cảnh báo chính xác giới hạn chat; chủ động chốt checkpoint khi phiên dài. Câu khôi phục: **“Đọc Project Handoff trên GitHub, đối chiếu main và tiếp tục.”**

> **Grade 6 Bài 30 rounding repair R1 — CLOSED / DEPLOYED:** packet `MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004` passed NotebookLM with clearance `G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE`; Learn PASS, 3/3 Micro PASS, 12/12 Practice PASS, manifest PASS, no missing/duplicate/unexpected IDs. Grade-6 Dimension Audit now records Bài 30 Learn=`VERIFIED_DIRECT`, Micro=`VERIFIED_DIRECT`, Practice=`TOPIC_SKILL_EVIDENCE`; Written=`NONE` and Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `4f0c649daba6aa1bb2bb16a8179316516e192dbd` passed Roadmap PR Quality run `37197968630`; PR #314 squash-merged to main as `29e6f2977fb7ad775e05d2441779e824d3f22a1a`; Deploy MkDocs run `37198340047` SUCCESS. `uoc-luong` remains lesson-local. No runtime/history/Mastery/Readiness semantic change. Next Grade-6 direct-evidence repair target: Bài 42 outcome/event Micro evidence.

> **Grade 6 Bài 42 outcome/event repair R1 — CLOSED / DEPLOYED:** packet `MATH-KNTT-G6-BAI42-EVENT-OUTCOME-R1-20261004` passed NotebookLM with clearance `G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE`; Learn PASS, 3/3 Micro PASS, Grade-6 terminology PASS, Bài 42/Bài 43 boundary PASS, lesson-local/no-canonical-skill boundary PASS, no missing/duplicate/unexpected IDs. Dimension Audit records Bài 42 Learn=`VERIFIED_LESSON_LOCAL`, Micro=`VERIFIED_LESSON_LOCAL`; Practice=`FAMILY_LEVEL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`PENDING_REVIEW` remain intentionally open. Exact PR head `0e0482d4eb689a7cbf49edd9de087d05a338bf4a` passed Roadmap PR Quality run `37200642250`; PR #316 squash-merged to main as `df109e36eded185c1e871ea31fe7ed8761e3bb41`; Deploy MkDocs run `37200951441` SUCCESS. No taxonomy/runtime/history/Mastery/Readiness semantic change. Next Grade-6 content-repair targets: Bài 4-5, Bài 8 and Bài 27, starting with Bài 4-5 unless a smaller deterministic repair is identified.

> **G-Learning Firebase shared-project architecture recorded:** Firebase Project display name is now `G-Learning`; stable Project ID remains `roadmap-toan-ai`. Existing Math Web App nickname is `Self-Learning-Math` with unchanged App ID `1:789845564404:web:a066df0deed80d2d58b7a1`. Planned `Self-Learning-English` will be a separate Web App in the same Firebase project with its own App ID/config. Shared Auth/Firestore may be reused later, but Math/English learner data must be explicitly namespaced. This naming update does not require a Math runtime/config migration. Architecture record: `docs/roadmap/g-learning-firebase-architecture-v1.md`.
> **Grade 6 Bài 4–5 natural-number operations repair R1 — CLOSED / DEPLOYED:** existing Grade-6 reconciliation already NotebookLM-PASSed `cong-tru-so-tu-nhien` and `nhan-chia-so-tu-nhien` as lesson-local concepts under `NUM-INTEGER-OPS`; the low-risk repair added Learn content and `NUM02MICRO_024–026` with deterministic oracles 5 625, 3 700, 2 500 using `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit records Learn=`VERIFIED_LESSON_LOCAL`, Micro=`VERIFIED_LESSON_LOCAL`; Practice=`FAMILY_LEVEL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `57c7b0d3e7a66ead2c03e3c1add7e7eee500ffa0` passed Roadmap PR Quality run `37202435362`; PR #318 squash-merged to main as `5a9e5a6640351eb10ed7ea4a2844559e12908ec8`; Deploy MkDocs run `37202741012` SUCCESS. No new NotebookLM round was required under the owner-approved risk-based review policy. Next Grade-6 content-repair targets: Bài 8 and Bài 27, starting with Bài 8.

> **Grade 6 Bài 8 divisibility repair R1 — CLOSED / DEPLOYED:** `quan-he-chia-het` and `tinh-chat-chia-het` remain lesson-local under `NUM-DIV-PRIME`; the low-risk repair added explicit Learn content and `NUM02MICRO_027–029` with deterministic oracles 84 divisible by 7, 18+30 divisible by 6, and 72−24 divisible by 8 using `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit records Learn=`VERIFIED_LESSON_LOCAL`, Micro=`VERIFIED_LESSON_LOCAL`; Practice=`FAMILY_LEVEL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `1b210b43cc19e2fe0a826c96df52394207a4f067` passed Roadmap PR Quality run `37206351120`; PR #320 squash-merged to main as `86d2be1d7b3dc2fbf26221b1740aa94a5af96562`; Deploy MkDocs run `37207645623` SUCCESS. No new NotebookLM round was required under the owner-approved risk-based review policy. Next Grade-6 content-repair target: Bài 27.

> **Grade 6 Bài 27 fraction-problem repair R1 — CLOSED / DEPLOYED:** `tim-gia-tri-phan-so-cua-so` and `tim-so-khi-biet-gia-tri-phan-so` remain `PROBLEM_TYPE` evidence under `NUM-FRACTION-OPS`; the low-risk repair added Learn content and `NUM02MICRO_030–032` with deterministic oracles 24, 27 and 24 plants using `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit records Learn=`VERIFIED_LESSON_LOCAL`, Micro=`VERIFIED_LESSON_LOCAL`; Practice=`FAMILY_LEVEL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `ca36ce20ca8b25627aaafd0eb25bb0baa078b6db` passed Roadmap PR Quality run `37208511308`; PR #322 squash-merged to main as `6b2690a5a5af4dea2146f987182625517eb25b48`; Deploy MkDocs run `37208859308` SUCCESS. Grade-6 `FAMILY_LEVEL_ONLY` Micro rows are now 0. Next Grade-6 repair target: Bài 38–41 statistics.

> **Grade 6 Bài 38–41 statistics repair R1 — CLOSED / DEPLOYED:** NotebookLM PASS with clearance `G6_STATISTICS_CONTENT_REVIEW_COMPLETE`; both Learn cards, 5/5 new Micro, both direct mappings, all three lesson-local boundaries and the shared Grade-6/Grade-8 card boundary passed. Dimension Audit records Learn=`VERIFIED_DIRECT_AND_LOCAL`, Micro=`VERIFIED_DIRECT_AND_LOCAL`; Practice=`PARTIAL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`AUTHORIZED_TOPIC_LEVEL` remain intentionally scoped. Implementation head `148eea8073e0daeebb227e9582d1d508ba3f1ea9` passed Roadmap PR Quality run `37211413748`; PR #324 merged as `c3ee3cf72b27abd2499935f804b7e36596775e0e`. The first deploy exposed only a stale 15-item CĐ21 Readiness source guard; hotfix PR #325 changed that technical guard to 20, passed QA run `37211994829`, merged as `b09df6c0911b25d75c48570fb6dfcc1fb058398d`, and Deploy MkDocs run `37212404188` succeeded. No academic/runtime/history/Mastery/Readiness semantic change in the hotfix. Next Grade-6 target: Bài 31 direct `phan-tram` Learn/Micro gap.

> **Grade 6 Bài 31 multi-topic evidence reconciliation R1 — CLOSED / DEPLOYED:** the prior `phan-tram` gap was an audit blind spot, not a content gap. Existing Topic03 + Topic02 evidence covers `ti-so`, `ti-so-phan-tram`, and `phan-tram`; no duplicate content was created. Dimension Audit records Learn=`VERIFIED_DIRECT`, Micro=`VERIFIED_DIRECT`, Practice=`TOPIC_SKILL_EVIDENCE`; Written remains `CANDIDATE_ONLY_NO_KNTT_PLACEMENT`, Readiness=`NOT_VERIFIED_STRUCTURED`. Exact PR head `ba83342c0728c474826612358fae717d4c8a5923` passed Roadmap PR Quality run `37216371481`; PR #327 merged as `d359dae54750f7462f861510ce9e019b42c4f818`; Deploy MkDocs run `37216769394` SUCCESS. Next Grade-6 content wave: Bài 1–3, Bài 11–12 and Bài 23–24 lesson-local/problem-type evidence.

> **Grade 6 Bài 1–3 natural-number basics repair R1 — CLOSED / DEPLOYED:** existing Grade-6 reconciliation keeps `ghi-so-tu-nhien` and `thu-tu-so-tu-nhien` as lesson-local concepts under `NUM-SETS`; the low-risk repair expanded `num02-g6-core-1` and added `NUM02MICRO_033–035` with deterministic oracles 5 000, 58 203 < 58 230, and 10 000 using `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit records Learn=`VERIFIED_DIRECT_AND_LOCAL`, Micro=`VERIFIED_DIRECT_AND_LOCAL`; Practice=`PARTIAL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `99d9c9b39a9923b64715de3d9945bb7f7ecbba21` passed Roadmap PR Quality run `37218608145`; PR #329 squash-merged to main as `9df50dc52c950ed91c12b93e9735f9fc4b344609`; Deploy MkDocs run `37252652987` SUCCESS. No new NotebookLM round was required under the owner-approved risk-based review policy. Next Grade-6 content target: Bài 11–12.

> **Grade 6 Bài 11–12 UCLN/BCNN application repair R1 — CLOSED / DEPLOYED:** existing Grade-6 reconciliation keeps `bai-toan-ucln-bcnn` as a `PROBLEM_TYPE` under `NUM-GCD-LCM`; the low-risk repair expanded `num02-g6-core-2` and added `NUM02MICRO_036–038` with deterministic oracles 14 groups, 36 minutes, and BCNN for earliest repeated simultaneous cycles using `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit records Learn=`VERIFIED_DIRECT_AND_LOCAL`, Micro=`VERIFIED_DIRECT_AND_LOCAL`; Practice=`PARTIAL_TOPIC_EVIDENCE`, Written=`CANDIDATE_ONLY_NO_KNTT_PLACEMENT`, Readiness=`NOT_VERIFIED_STRUCTURED` remain intentionally open. Exact PR head `a84cea191f100e54392dd3e170186e8f3da617df` passed Roadmap PR Quality run `37253267413`; PR #331 squash-merged to main as `87f394c42143d20fa13be8a33581351895191812`; Deploy MkDocs run `37253645516` SUCCESS. No new NotebookLM round was required under the owner-approved risk-based review policy. Next Grade-6 content target: Bài 23–24.


> **Homepage learner orientation slider v1 — CLOSED / DEPLOYED:** owner approved replacing the former four large 2×2 start cards with a manual four-frame learner-orientation slider plus four compact entry points. Frames: (1) Cây Toán học — trục ngang/trục dọc; (2) two canonical learning paths — Học theo lớp / Học theo chuyên đề; (3) Core → Luyện tập → Tự kiểm tra; (4) Bài tự luận kết nối kỹ năng hiện tại + kiến thức nền. Desktop uses four compact buttons in one row; mobile uses 2×2. Slider has arrows, dots, keyboard Left/Right/Home/End and swipe; no autoplay. Exact head `74b5884a94eeb642500fd48a310883df4216c5ad` passed Roadmap PR Quality run `37317335950`, G Learning branding QA `37317335847`, Skill assessment pilot QA `37317335843`, strict MkDocs and full browser regression. PR #334 squash-merged to main as `9c73104f11e146c9e759d48a1764b6d7b2eec847`. Deployment verified directly on `gh-pages`: built `index.html` contains the new orientation section and deployed slider JS/CSS contain the expected swipe/keyboard/compact-entry implementation. No academic-content, Practice, Written Library, taxonomy, learner-history, Mastery or Readiness semantic change. Bài 23–24 remains separate and should be rebuilt from the new `main` before release.


> **Homepage four-part learning guide infographic gallery v1 — CLOSED / DEPLOYED:** owner-approved guide is now placed directly below the homepage orientation slider + compact entry buttons and before “Phương pháp học”. The four-card sequence is: (1) **Cây Toán học** — trục dọc/trục ngang/Core Cards/bài tự luận; (2) **Làm một chiếc diều giấy** — đời sống analogy for foundational + current skills; (3) **Học Toán trong hệ thống này như thế nào?** — chọn đường học/Core/Luyện tập/Bài tự luận; (4) **Hỗn số và phân số · Lớp 6** — concrete math walkthrough. Cards open an accessible full-screen lightbox and collapse to one column on small screens. Intermediate mobile visual QA exposed deferred thumbnail painting; this was corrected before release by removing deferred image decode and adding explicit phone image-load/decode browser assertions. Exact final head `246b0e1cecac452a129802b4306709119995259b` passed Roadmap PR Quality run `37331382188` including strict MkDocs and browser interaction QA. PR #336 squash-merged as `cb2027bebb9973972efed616d5431d08bd4420ad`; Deploy MkDocs run `37332567541` SUCCESS. `gh-pages` verification confirms `#hieu-cach-hoc`, four gallery cards, all four WebP assets, and gallery JS/CSS are live. No academic-content, Practice, Written Library, taxonomy, learner-history, Mastery or Readiness semantic change. Closure PR #337 records this release checkpoint. Next content work remains clean rebuild/release of Grade-6 Bài 23–24 from the new main.


> **Homepage learning-guide 4:3 harmonization + canonical stats refresh — CLOSED / DEPLOYED:** owner supplied new landscape 4:3 editions for guide 03 (**Học Toán trong hệ thống này như thế nào?**) and guide 04 (**Hỗn số và Phân số · Lớp 6**); guides 01–02 remain unchanged. All four guide previews now share the same 4:3 landscape frame on desktop and mobile. Homepage summary is corrected to **25 chuyên đề xuyên lớp · 2 lộ trình học · 6–9 học theo KNTT · 3 không gian học**. The convenience discovery section remains four cards but is renamed **“Bốn nhóm nội dung, một bức tranh thống nhất”** rather than presenting those four cards as canonical knowledge streams. Exact head `a392aa44e4e5e499a91366af64030dc03a775f50` passed Roadmap PR Quality run `37338129617` including strict MkDocs and browser visual/interaction QA with explicit 4:3 assertions on desktop/phone. PR #338 squash-merged as `a67f61c7b8ca0c8d140d5c6964dc4481702dd475`; Deploy MkDocs run `37339287162` SUCCESS. `gh-pages` verification confirms the updated WebPs, four landscape cards, canonical stats and new wording are live. No academic item, Practice, Written Library, taxonomy, learner-history, Mastery or Readiness semantic change. Closure PR #339 records this release checkpoint. Next content target remains clean Bài 23–24 rebuild/release from current main.


> **Grade 6 Bài 23–24 fraction-form repair R1 — CLEAN REBUILD / technical QA pending:** prior PR #333 contained the intended 13-file academic/test/state diff but inherited stacked branch history. A new release branch is rebuilt directly from current main `9cd7f6b0d387563514dcece2f71b93656dd41ce4`. The 11 academic/test files are carried exactly from the prior candidate because current main still matched the old PR base for those paths; registry and handoff are reconciled on top of current main so the homepage releases are preserved. Academic scope is unchanged: `phan-so-bang-nhau` and `hon-so-duong` remain lesson-local concepts under `NUM-FRACTION-FORM`; Learn card `num02-g6-core-4` is expanded; `NUM02MICRO_039–041` are added with deterministic oracles **6/8 · 7/3 · 2 3/4**, role `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`. Dimension Audit candidate status: Learn=`VERIFIED_DIRECT_AND_LOCAL`, Micro=`VERIFIED_DIRECT_AND_LOCAL`; Practice=`PARTIAL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED`. No new canonical skill, Practice Bank change, Written/Readiness claim, taxonomy activation, learner-history migration/regrade, or Mastery/Readiness semantic change. Next gate: full Roadmap PR Quality on the clean branch; merge only after all required checks pass.


> **Grade 6 Bài 23–24 fraction-form repair R1 — CLOSED / DEPLOYED:** the prior stacked-history PR #333 was not merged. A clean replacement was rebuilt directly from current main, preserving the exact intended academic/test changes while reconciling newer project-state files. Academic scope is unchanged: `phan-so-bang-nhau` and `hon-so-duong` remain lesson-local concepts under `NUM-FRACTION-FORM`; Learn card `num02-g6-core-4` is expanded; `NUM02MICRO_039–041` use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, `gates_core=false`, with deterministic oracles **6/8 · 7/3 · 2 3/4**. Dimension Audit records Learn=`VERIFIED_DIRECT_AND_LOCAL`, Micro=`VERIFIED_DIRECT_AND_LOCAL`; Practice=`PARTIAL_TOPIC_EVIDENCE`, Written=`NONE`, Readiness=`NOT_VERIFIED_STRUCTURED` remain open. Exact clean head `90db12f6af49ff633672c6a38563b38595070196` passed Roadmap PR Quality run `37341312230`; PR #340 squash-merged as `0867c1361b35699de4c337957df42033c9e9c102`; Deploy MkDocs run `37342413444` SUCCESS. `gh-pages` verification confirms `NUM02MICRO_039–041`, the two lesson-local targets and Bài 23–24 `VERIFIED_DIRECT_AND_LOCAL` coverage are live. PR #333 is closed unmerged as superseded. Grade 6 now has 0 clear `PARTIAL_LOCAL_OR_FAMILY` Learn rows; next work is shared-skill/placement re-ranking before new content authoring.


> **Grade 6 shared-skill density R1 — ACADEMIC REVIEW PENDING:** re-rank of the 7 remaining `PARTIAL_SHARED_SKILL` rows shows a real explicit Learn/Micro density gap rather than a pure audit-label problem. Candidate branch `feature/g6-shared-skill-density-r1-20261006` keeps all canonical skills unchanged and expands existing Topic02 Grade-6 cards `num02-g6-core-3/4/5`. It adds direct Micro `NUM02MICRO_042–052` for exact KNTT demands across Bài 13–17, Bài 25–26 and Bài 28–29. Practice/Written/Readiness/history/Mastery/runtime taxonomy are untouched. Dimension Audit statuses are intentionally **not promoted yet**. Required next gate: independent NotebookLM review packet `MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006`; only PASS + clearance permits status promotion and release QA.


> **Grade 6 shared-skill density R1 — NOTEBOOKLM PASS / release QA pending:** NotebookLM independently reviewed all 3 Learn cards (`num02-g6-core-3/4/5`) and all 11 Micro items (`NUM02MICRO_042–052`) with **0 REVISE** and clearance `G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE`. Anti-inflation passed: no new canonical skill is authorized. Repository reconciliation promotes the 7 shared-skill Learn rows and corresponding Micro rows to `VERIFIED_DIRECT`, while Practice/Written/Readiness/history/Mastery/runtime taxonomy remain unchanged. The reviewed Micro bytes are intentionally preserved exactly at blob `b6ec952b786f897ef6f45301208dcd9d55bde98b`; PASS metadata lives in the separate review receipt, so the academic source lock remains auditable. A clean release branch is being used for final technical QA before merge/deploy.
