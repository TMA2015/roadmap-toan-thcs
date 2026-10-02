# SOURCE PACKET — Skill Taxonomy v2 / Batch S1 R1

Packet ID: `MATH-SKILL-TAXONOMY-V2-S1-R1-20261002`

## Review purpose

Review the proposed consolidation of **87 legacy skill/tag rows** across **CĐ02–CĐ07**.

This is a **taxonomy / coverage review only**:
- no runtime migration;
- no legacy tag deletion/rename;
- no learner-history rewrite;
- no mastery activation;
- no exam-frequency claim.

CĐ04–CĐ07 inherit full-bank Phase D review evidence. CĐ02–CĐ03 do **not** yet have a full 240-item primary-role overlay, so any CT02/CT03 row that depends on fine-grained item semantics must remain provisional.

## Source lock

- main checkpoint: `8d802d726b555854a75f9eed44e6ed0f44686860`
- design contract blob: `a3db93e1b6dd0b1b842f1b4bc871a6177fb8c892`
- S1 candidate blob: `5411c8ef71648982d8a6bb5fafb935734c91366a`
- minimal-policy blob: `aa18eb40ac354d04e40aa645b17724a3824723ae`
- Phase D CĐ04–07 closure blob: `d4e8d029787139697e50dd55401a2c7f9bc3787a`
- G2 academic PASS receipt blob: `406b5134f0f329c0371fe1fc9f9b1c177ebe1a1f`

## Critical interpretation rules

1. **87 legacy tags are not presumed to be 87 canonical mastery skills.**
2. A canonical skill should be independently learnable, diagnosable, remediable and reusable.
3. Methods, contexts, categories and composite task families should not get separate mastery credit merely because they are tagged.
4. Distinct misconception/remediation patterns are a reason **not** to over-merge.
5. Core priority and exam frequency are separate. Exam-frequency fields intentionally remain `PENDING_OFFICIAL_CORPUS`.
6. Written-library coverage is judged by problem-type need, not “two exercises per topic”.
7. Proof/modeling/multistep written ability cannot be certified from a one-answer MCQ alone.
8. Existing G2 canonical evidence for seven proven skills is a protected compatibility boundary; this packet does not invalidate it.
9. CT02/CT03 taxonomy decisions may be accepted as provisional but must not authorize canonical runtime evidence until a full question-level audit is completed.
10. Shared canonical identity across topics is allowed when the mathematical capability is genuinely the same.

## Owner-approved v2 design contract

# Skill Taxonomy v2 — Design Contract

**Status:** owner-approved design direction; review-only taxonomy work; no runtime migration.  
**Date:** 2026-10-02.

## Goal

The taxonomy should be **small enough to be understandable and actionable**, but detailed enough that a learner can see a meaningful weakness and receive a specific remediation action.

A canonical skill is not created for every formula, context, method, problem variant or exam trick.

## Canonical-skill admission test

A candidate should normally satisfy most of these:

1. It expresses an independent learner capability.
2. It is reusable across multiple questions/problems or is an important prerequisite.
3. It can be diagnosed separately.
4. It has a distinct remediation action or error pattern.
5. It can be evidenced by more than one item/variant.

If two tags have the same mathematical target, same error pattern and same remediation, prefer **MERGE / ALIAS / method-context role** rather than separate mastery.

If two tags have meaningfully different errors and remediation, keep them separate even when they often co-occur.

## Role model

- `ASSESSED_SKILL`: independent learner capability.
- `SUPPORTING_SKILL`: meaningful prerequisite/substep, not automatically a separate mastery credit on a composite item.
- `METHOD`: procedure/representation used to solve another target.
- `CONTEXT`: motion, productivity, map, real-world setting, etc.
- `CATEGORY`: broad family/grouping label.
- `COMPOSITE_TASK`: multi-step task family, not an atomic prerequisite.
- `EXTENSION_SKILL`: independently assessable optional skill in Entrance10 / Specialized-Challenge / THPT-Bridge.

Role is evidence-dependent; a tag may be primary in one assessment and supporting in another.

## Layer and importance

Keep separate axes:

- curriculum/Core requirement;
- foundation/prerequisite value;
- Entrance10 application relevance;
- Specialized-Challenge relevance;
- exam frequency.

**Do not infer exam frequency from the authored Practice bank.** Frequency/priority from exams requires a defined authentic exam corpus with year, location/population and denominator.

## Evidence model

MCQ evidence, independent after-submit Readiness evidence and written-step rubric evidence are not equivalent.

A one-answer MCQ does not by itself certify:
- a full proof;
- a complete modeling process;
- all intermediate transformations in a long solution;
- an independent written derivation.

Legacy question IDs, legacy skill tags, localStorage/history and existing canonical evidence are preserved during taxonomy review.

## Problem-type and Written Library coverage

Taxonomy review must map canonical skills to problem types and identify the best evidence mode:

- `MCQ_SUFFICIENT_FOR_TARGET`
- `BOTH_USEFUL`
- `WRITTEN_RECOMMENDED`
- `WRITTEN_REQUIRED_FOR_FULL_SKILL`

The Written Exercise Library is **not complete merely because a topic has two exercises**. Add paper-first items when an important problem type requires written reasoning, modeling, proof, multi-step transformation or rubric-scored work.

Do not add written exercises just to satisfy a numeric quota.

## Compatibility

- Never silently rename/delete legacy tag IDs.
- Use additive canonical mapping / alias metadata first.
- Preserve learner history.
- Do not retroactively sum historical counters across aliases without sufficient event-level evidence.
- Knowledge Graph remains selective; it is not a copy of every legacy tag.


## Existing minimal taxonomy policy

# Quy tắc tinh gọn Skill Taxonomy — bản định hướng 1.0

**Phạm vi:** Toán THCS, ưu tiên kiến thức nền và ứng dụng thiết thực. **Trạng thái:** quyết định định hướng; chưa duyệt từng skill, chưa thay đổi runtime/ngân hàng/Knowledge Graph. Ngày 26/09/2026.

## Đơn vị cần đo

Một `assessed_skill` là **đầu ra học sinh có thể thể hiện độc lập**, đủ rõ để nhận biết lỗi và có một hành động ôn bù cụ thể. Không bắt buộc định danh mọi công thức, bước trung gian hoặc biến thể đề. Câu kiểm tra một kết quả tổng hợp **không tự chứng minh** học sinh thành thạo mọi thao tác đã dùng.

| Vai trò | Ý nghĩa | Có cộng mastery riêng theo một câu ghép? |
|---|---|---|
| `assessed_skill` | Kỹ năng chính được câu hỏi/rubric đo | Có, nếu câu hỏi đo thích hợp |
| `supporting_skill` | Kiến thức/thao tác cần dùng nhưng câu hiện tại chưa đo tách biệt | Không |
| `method` | Cách giải, biểu diễn, thủ thuật | Không tự động |
| `context` | Tình huống: chuyển động, bài toán số, thực tế... | Không |
| `extension` | Nhánh nâng cao tùy chọn; có thể có năng lực được đo riêng trong nhánh | Không nhập vào Core Readiness |

Một mục có thể là kỹ năng chính trong câu này nhưng là kiến thức hỗ trợ trong câu khác. **Vai trò gắn với câu hỏi và mục đích đo, không áp một phân loại cố định cho mọi lần xuất hiện của một ID.** Tối đa một `assessed_skill` chính cho câu trắc nghiệm một điểm; nếu có rubric chấm từng bước thì mỗi bước có thể cung cấp bằng chứng riêng, không đếm trùng một câu.

## Quy tắc thêm/bớt

Thêm skill đo độc lập chỉ khi: (1) là yêu cầu đáng học hoặc ứng dụng hữu ích; (2) có lỗi học sinh cần ôn khác biệt; (3) có thể kiểm tra riêng; (4) cho phép đưa khuyến nghị học cụ thể. Nếu không đạt, giữ ở method/context/nhóm hiển thị, không tạo mastery. Không chạy theo tổng số node, tag, độ khó hay danh sách kỹ thuật thi chuyên.

**Ưu tiên 3 vòng:** nền theo chuẩn KNTT/Chương trình GDPT → ứng dụng thực tế & lộ trình thi vào 10 → nhánh tự chọn (Specialized-Challenge/THPT-Bridge). Mức nền tảng và tần suất thi là hai trục tách biệt. Không suy diễn tần suất từ một bộ bài tự soạn hay vài đề thi.

## Kết nối dữ liệu đang có

- Giữ nguyên `question.id`, mọi `tags.skill` hiện hành và khóa `toan-thcs-practice-v1`; đây là dữ liệu lịch sử.
- Practice Engine và Learner Evidence hiện cộng mọi tag kỹ năng khi làm một câu; **đó là thống kê tag lịch sử, không tự động là mastery tách biệt**. Không cộng các bộ đếm alias, không chia ngược điểm cũ khi thiếu nhật ký đủ chi tiết.
- Giai đoạn đầu xây **mapping chỉ đọc**, lựa chọn primary/support/context ở câu có bằng chứng. Khi thay engine sau này, lưu bằng chứng mới tách nguồn, giữ nguyên dữ liệu cũ, làm regression và chỉ chuyển sang kết quả mới khi đã xác minh.
- Knowledge Graph là bản đồ **chọn lọc** của năng lực nền/điểm nối có giá trị tự học; không phải ảnh chụp toàn bộ `tags.skill`. Chỉ thêm prerequisite có căn cứ, không khóa đường học.
- Gemini là kênh phản biện tham khảo: mọi ý kiến phải đối chiếu câu hỏi thật và nguồn chương trình, không cần cố hoàn thiện một ontology bao trùm toàn bộ toán học.

## Đợt pilot đầu tiên

Chỉ xét 10 cặp tag tại [bản đối soát câu nguồn](gemini-pair-audit-04-11-2026-09-26.md), dùng [pilot JSON](../assets/data/curriculum/skill-role-pilot-04-11-v1.json) để giữ quyết định ở lớp dữ liệu. Có thể gộp hiển thị hoặc đổi vai trò tag trước khi đụng vào ID/hồ sơ học sinh. Cần rà soát theo **toàn bộ câu gắn tag** trước khi áp dụng một rule cho mọi câu, đặc biệt khi hai tập câu chỉ giao nhau một phần.


## Phase D full-bank closure for CĐ04–CĐ07

# Skill Taxonomy Phase D — CĐ04–07 closure

**Date:** 2026-09-30  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Scope:** bounded full-bank primary-evidence overlays for CĐ04, CĐ05, CĐ06 and CĐ07.

## Closure result

All four independently reviewed full-bank overlays PASS with zero item revisions.

| Topic | Questions | One primary candidate | Formative-only / no primary | Clone families | NotebookLM verdict |
|---|---:|---:|---:|---:|---|
| CĐ04 | 132 | 120 | 12 | 13 | PASS |
| CĐ05 | 120 | 91 | 29 | 21 | PASS |
| CĐ06 | 120 | 104 | 16 | 17 | PASS |
| CĐ07 | 120 | 112 | 8 | 23 | PASS |
| **Total** | **492** | **427** | **65** | **74** | **PASS** |

The 427 mappings are candidate evidence mappings, not 427 mastery events. The 65 formative-only questions remain intentionally non-primary because the observable MCQ evidence is insufficient to isolate the intended multistep/method/proof/Extension competency.

## Source-locked review records

- CĐ04: PR #194, packet `MATH-SKILL-CORE04-OVERLAY-R1-20260930`, source blob `4db8c7451be599038870d55eee2404af0afb1d37`.
- CĐ05: PR #195, packet `MATH-SKILL-CORE05-OVERLAY-R1-20260930`, source blob `a16a7781d858e55e7ba3e517b66dc9ec9294b3da`.
- CĐ06: PR #197, packet `MATH-SKILL-CORE06-OVERLAY-R1-20260930`, source blob `dff6013a0062e2a81dfafbe35280b4e52ab620c0`.
- CĐ07: PR #200, packet `MATH-SKILL-CORE07-OVERLAY-R1-20260930`, source blob `06a4b8f6f31b356d09a22c8c2e42423a14523d6b`.

## What Phase D establishes

1. Every reviewed question has at most one canonical assessed-skill candidate.
2. Supporting skills, methods, categories, contexts and task families do not receive duplicate mastery credit from the same response.
3. Observable evidence is classified conservatively: recognition, method selection, final output/final answer, argument recognition, or stepwise/written evidence required.
4. Clone families are identified for future evidence de-duplication; questions remain available for practice.
5. Legacy IDs/tags and current learner stores remain unchanged.

## What Phase D does not authorize

- no runtime activation of the canonical taxonomy;
- no rewrite of `toan-thcs-practice-v1`;
- no history backfill/regrade;
- no Core Readiness credit from these overlays;
- no mastery threshold;
- no automatic merge of supporting skills into counters;
- no treatment of clone-family members as independent mastery evidence;
- no promotion of Extension/PENDING or composite items into Core evidence.

## Next gate — bounded pilot design

The next step is a separate additive pilot design using the already-reviewed Phase C canonical registry/compatibility contract and these Phase D overlays. The pilot must:
- keep legacy practice/history untouched;
- write new evidence only to the versioned future evidence path/store;
- start with a small reviewed skill subset, not all 492 questions;
- show evidence/status separately from legacy accuracy;
- de-duplicate clone-family evidence conservatively;
- keep PENDING/NO-counter nodes out of mastery counters;
- support rollback without altering learner history;
- pass schema/regression/browser/device QA before any production activation.

No pilot is activated by this closure document.


## Existing G2 academic gate

# NotebookLM G2 R1 — PASS receipt

**Date:** 2026-09-30  
**Packet:** `MATH-CANONICAL-EVIDENCE-G2-PROVEN-SKILLS-R1-20260930`  
**Source packet blob:** `95b32fa4b5ebebdc88886cc9725b7b90ae991e46`

## Compact completion result

The owner supplied the required compact recheck output.

Machine reconciliation of that output:

- `OVERALL|PASS`
- coverage declaration: `74|74|0|0|0`
- exactly **74 unique G2 delta question IDs** present;
- expected-vs-returned ID set: **74/74 exact match**;
- duplicate delta IDs: **0**;
- `ARCH_1` through `ARCH_8`: **8/8 PASS**;
- final authorization: `CLEARED_FOR_SEPARATE_G2_TECHNICAL_IMPLEMENTATION_QA`.

## Gate decision

**ACADEMIC REVIEW GATE: PASS**

The G2 proven-skill expansion is academically cleared for a **separate technical implementation/QA stage** only.

Approved boundary for that technical stage:

- existing G1: 27 items;
- G2 delta: 74 items;
- combined: 101 items;
- same 7 proven canonical skills;
- max 23 topic-scoped independent units.

## Still not authorized

This PASS does **not** authorize:

- production deployment;
- G3;
- mastery labels/percentages/thresholds;
- Core Readiness credit;
- canonical remediation or weak-skill ranking;
- migration/backfill/regrade;
- PENDING/formative-only capture;
- canonical production capture outside the approved CĐ04–07 / seven-skill G2 boundary.

A separate technical implementation and exact-HEAD QA gate is required before any production release decision.


## S1 candidate under review

```json
{
  "schema": "skill-taxonomy-v2-s1-candidate-r1",
  "packet_id": "MATH-SKILL-TAXONOMY-V2-S1-R1-20261002",
  "status": "REVIEW_ONLY_PROPOSAL_NOT_RUNTIME_ENABLED",
  "as_of": "2026-10-02",
  "source_main_sha": "8d802d726b555854a75f9eed44e6ed0f44686860",
  "scope": {
    "topics": [
      "CT02",
      "CT03",
      "CT04",
      "CT05",
      "CT06",
      "CT07"
    ],
    "practice_questions": 732,
    "legacy_tag_rows": 87,
    "current_written_items": 12,
    "phase_d_full_bank_reviewed_topics": [
      "CT04",
      "CT05",
      "CT06",
      "CT07"
    ],
    "phase_d_reviewed_questions": 492,
    "ct02_ct03_question_level_primary_overlay": "PENDING"
  },
  "invariants": {
    "legacy_skill_ids_unchanged": true,
    "learner_history_preserved": true,
    "runtime_unchanged": true,
    "no_new_mastery_activation": true,
    "exam_frequency": "PENDING_OFFICIAL_CORPUS",
    "written_library_rule": "coverage-by-problem-type, not fixed exercise quota per topic"
  },
  "manifest_locks": {
    "CT02": {
      "path": "docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json",
      "sha": "c3e592de17203a5ccb9f589fd8501e8dd0a6c417",
      "question_count": 120
    },
    "CT03": {
      "path": "docs/assets/data/practice/03-ti-le-ti-le-thuc-v1.manifest.json",
      "sha": "4645eb69493281702a19a36453f999d1114736f3",
      "question_count": 120
    },
    "CT04": {
      "path": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json",
      "sha": "bd0ebbfa60402d321d06f7ca6195e56d67f589bb",
      "question_count": 132
    },
    "CT05": {
      "path": "docs/assets/data/practice/05-7-hang-dang-thuc-v1.manifest.json",
      "sha": "f77d823b03395452aa8f722c9a0f2fd919e47c99",
      "question_count": 120
    },
    "CT06": {
      "path": "docs/assets/data/practice/06-phan-tich-da-thuc-v1.manifest.json",
      "sha": "2a4cb1d6492a3c1f66f7111035fab989a9a7f055",
      "question_count": 120
    },
    "CT07": {
      "path": "docs/assets/data/practice/07-phan-thuc-dai-so-v1.manifest.json",
      "sha": "5939cac274f5133c474423b949340d136e976e5d",
      "question_count": 120
    }
  },
  "existing_proven_canonical_g2": [
    "dieu-kien-xac-dinh",
    "rut-gon-phan-thuc",
    "tinh-gia-tri-phan-thuc",
    "hang-tu-dong-dang",
    "hieu-hai-binh-phuong",
    "nhan-tu-chung",
    "quy-dong-mau-thuc"
  ],
  "rows": [
    {
      "topic_id": "CT02",
      "legacy_id": "tap-hop-so",
      "label": "Tập hợp số",
      "question_count": 6,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tap-hop-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "so-nguyen-phep-tinh",
      "label": "Số nguyên và phép tính",
      "question_count": 11,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "so-nguyen-phep-tinh",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "gia-tri-tuyet-doi",
      "label": "Giá trị tuyệt đối",
      "question_count": 3,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "gia-tri-tuyet-doi",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "thu-tu-phep-tinh",
      "label": "Thứ tự thực hiện phép tính",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "thu-tu-phep-tinh",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "luy-thua",
      "label": "Lũy thừa",
      "question_count": 11,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "luy-thua",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "dau-hieu-chia-het",
      "label": "Dấu hiệu chia hết",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "dau-hieu-chia-het",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "so-nguyen-to",
      "label": "Số nguyên tố – hợp số",
      "question_count": 5,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "so-nguyen-to",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "phan-tich-thua-so-nguyen-to",
      "label": "Phân tích thừa số nguyên tố",
      "question_count": 3,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phan-tich-thua-so-nguyen-to",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "ucln",
      "label": "ƯCLN",
      "question_count": 10,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "ucln",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "bcnn",
      "label": "BCNN",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "bcnn",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "rut-gon-phan-so",
      "label": "Rút gọn phân số",
      "question_count": 6,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "rut-gon-phan-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "quy-dong-so-sanh-phan-so",
      "label": "Quy đồng – so sánh phân số",
      "question_count": 7,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "quy-dong-so-sanh-phan-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "phep-tinh-phan-so",
      "label": "Phép tính phân số",
      "question_count": 15,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phep-tinh-phan-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "so-huu-ti-thap-phan",
      "label": "Số hữu tỉ – số thập phân",
      "question_count": 9,
      "proposed_action": "REVIEW_REQUIRED",
      "proposed_role": "REVIEW_REQUIRED",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "phan-tram",
      "label": "Phần trăm",
      "question_count": 17,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phan-tram",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT02",
      "legacy_id": "can-bac-hai",
      "label": "Căn bậc hai nền tảng",
      "question_count": 7,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "SUPPORTING_SKILL",
      "canonical_candidate": "can-bac-hai-so-hoc",
      "proposed_layer": "Core-Support",
      "foundation_priority": "LOW",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-so",
      "label": "Tỉ số",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "ti-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "doi-don-vi-ti-so",
      "label": "Đổi đơn vị khi lập tỉ số",
      "question_count": 6,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "SUPPORTING_SKILL",
      "canonical_candidate": "ti-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-le-thuc",
      "label": "Tỉ lệ thức",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "ti-le-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "tim-x-ti-le-thuc",
      "label": "Tìm số chưa biết trong tỉ lệ thức",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tim-x-ti-le-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "day-ti-so-bang-nhau",
      "label": "Dãy tỉ số bằng nhau",
      "question_count": 14,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "day-ti-so-bang-nhau",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "chia-theo-ti-le",
      "label": "Chia theo tỉ lệ",
      "question_count": 20,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "chia-theo-ti-le",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-le-thuan",
      "label": "Đại lượng tỉ lệ thuận",
      "question_count": 11,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "ti-le-thuan",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "he-so-ti-le-thuan",
      "label": "Hệ số tỉ lệ thuận",
      "question_count": 6,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "SUPPORTING_SKILL",
      "canonical_candidate": "ti-le-thuan",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-le-nghich",
      "label": "Đại lượng tỉ lệ nghịch",
      "question_count": 19,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "ti-le-nghich",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "he-so-ti-le-nghich",
      "label": "Hệ số tỉ lệ nghịch",
      "question_count": 4,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "SUPPORTING_SKILL",
      "canonical_candidate": "ti-le-nghich",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "phan-biet-thuan-nghich",
      "label": "Phân biệt tỉ lệ thuận – nghịch",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phan-biet-thuan-nghich",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-le-ban-do",
      "label": "Tỉ lệ bản đồ",
      "question_count": 9,
      "proposed_action": "RETAG_CONTEXT",
      "proposed_role": "CONTEXT",
      "canonical_candidate": "ti-so",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "ti-so-phan-tram",
      "label": "Tỉ số phần trăm",
      "question_count": 6,
      "proposed_action": "ALIAS_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phan-tram",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "chuyen-dong-ti-le",
      "label": "Tỉ lệ trong bài toán chuyển động",
      "question_count": 6,
      "proposed_action": "RETAG_CONTEXT",
      "proposed_role": "CONTEXT",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "nang-suat-ti-le",
      "label": "Tỉ lệ trong bài toán năng suất",
      "question_count": 6,
      "proposed_action": "RETAG_CONTEXT",
      "proposed_role": "CONTEXT",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT03",
      "legacy_id": "mo-hinh-ti-le",
      "label": "Mô hình hóa bằng tỉ lệ",
      "question_count": 4,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "mo-hinh-ti-le",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "nhan-biet-don-thuc",
      "label": "Nhận biết đơn thức",
      "question_count": 6,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-biet-don-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "nhan-biet-da-thuc",
      "label": "Nhận biết đa thức",
      "question_count": 6,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-biet-da-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "he-so-bac",
      "label": "Hệ số và bậc",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "he-so-bac",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "hang-tu-dong-dang",
      "label": "Hạng tử đồng dạng",
      "question_count": 24,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "hang-tu-dong-dang",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "thu-gon-da-thuc",
      "label": "Thu gọn đa thức",
      "question_count": 30,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "thu-gon-da-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "cong-tru-da-thuc",
      "label": "Cộng – trừ đa thức",
      "question_count": 14,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "cong-tru-da-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "bo-ngoac-dau",
      "label": "Bỏ ngoặc và dấu",
      "question_count": 26,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "bo-ngoac-dau",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "nhan-bieu-thuc",
      "label": "Nhân biểu thức",
      "question_count": 26,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-bieu-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "tinh-phan-phoi",
      "label": "Tính phân phối",
      "question_count": 26,
      "proposed_action": "RETAG_METHOD",
      "proposed_role": "METHOD",
      "canonical_candidate": "nhan-bieu-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "tinh-gia-tri-bieu-thuc",
      "label": "Tính giá trị biểu thức",
      "question_count": 12,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tinh-gia-tri-bieu-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "dieu-kien-xac-dinh",
      "label": "Điều kiện xác định",
      "question_count": 10,
      "proposed_action": "KEEP_SHARED",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "dieu-kien-xac-dinh",
      "proposed_layer": "Core-Support",
      "foundation_priority": "LOW",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "bien-doi-nhieu-buoc",
      "label": "Biến đổi nhiều bước",
      "question_count": 12,
      "proposed_action": "RETAG_COMPOSITE",
      "proposed_role": "COMPOSITE_TASK",
      "canonical_candidate": null,
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "lap-bieu-thuc",
      "label": "Lập biểu thức",
      "question_count": 10,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "lap-bieu-thuc",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "bai-toan-thuc-te",
      "label": "Bài toán thực tế",
      "question_count": 10,
      "proposed_action": "RETAG_CONTEXT",
      "proposed_role": "CONTEXT",
      "canonical_candidate": null,
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT04",
      "legacy_id": "chia-da-thuc-cho-don-thuc",
      "label": "Chia đa thức cho đơn thức",
      "question_count": 12,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "chia-da-thuc-cho-don-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "binh-phuong-tong",
      "label": "Bình phương của một tổng",
      "question_count": 18,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "binh-phuong-tong-hieu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "binh-phuong-hieu",
      "label": "Bình phương của một hiệu",
      "question_count": 16,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "binh-phuong-tong-hieu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "hieu-hai-binh-phuong",
      "label": "Hiệu hai bình phương",
      "question_count": 19,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "hieu-hai-binh-phuong",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "lap-phuong-tong",
      "label": "Lập phương của một tổng",
      "question_count": 11,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "lap-phuong-tong-hieu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "lap-phuong-hieu",
      "label": "Lập phương của một hiệu",
      "question_count": 11,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "lap-phuong-tong-hieu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "tong-hai-lap-phuong",
      "label": "Tổng hai lập phương",
      "question_count": 12,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tong-hieu-hai-lap-phuong",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "hieu-hai-lap-phuong",
      "label": "Hiệu hai lập phương",
      "question_count": 12,
      "proposed_action": "MERGE_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tong-hieu-hai-lap-phuong",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "nhan-dang-hdt",
      "label": "Nhận dạng cấu trúc hằng đẳng thức",
      "question_count": 21,
      "proposed_action": "RETAG_CATEGORY",
      "proposed_role": "CATEGORY",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "binh-phuong-hoan-chinh",
      "label": "Nhận dạng bình phương hoàn chỉnh",
      "question_count": 16,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "binh-phuong-hoan-chinh",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "nhan-dang-lap-phuong",
      "label": "Nhận dạng cấu trúc lập phương",
      "question_count": 4,
      "proposed_action": "RETAG_CATEGORY",
      "proposed_role": "CATEGORY",
      "canonical_candidate": "lap-phuong-tong-hieu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "phan-tich-hdt",
      "label": "Phân tích biểu thức bằng hằng đẳng thức",
      "question_count": 30,
      "proposed_action": "RETAG_CATEGORY",
      "proposed_role": "CATEGORY",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "tinh-nhanh-hdt",
      "label": "Tính nhanh bằng hằng đẳng thức",
      "question_count": 10,
      "proposed_action": "RETAG_METHOD",
      "proposed_role": "METHOD",
      "canonical_candidate": null,
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "rut-gon-hdt",
      "label": "Rút gọn bằng hằng đẳng thức",
      "question_count": 12,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "rut-gon-hdt",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "chung-minh-hdt",
      "label": "Chứng minh đẳng thức",
      "question_count": 4,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "EXTENSION_SKILL",
      "canonical_candidate": "chung-minh-dang-thuc",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT05",
      "legacy_id": "giai-phuong-trinh-hdt",
      "label": "Giải phương trình bằng hằng đẳng thức",
      "question_count": 5,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "METHOD",
      "canonical_candidate": "pt-bac-nhat",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "nhan-tu-chung",
      "label": "Đặt nhân tử chung",
      "question_count": 20,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-tu-chung",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "doi-dau-nhan-tu-chung",
      "label": "Đổi dấu để tạo nhân tử chung",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "doi-dau-nhan-tu-chung",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "hieu-hai-binh-phuong",
      "label": "Hiệu hai bình phương",
      "question_count": 12,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "hieu-hai-binh-phuong",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "binh-phuong-hoan-chinh",
      "label": "Bình phương hoàn chỉnh",
      "question_count": 10,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "binh-phuong-hoan-chinh",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "tong-hieu-lap-phuong",
      "label": "Tổng – hiệu hai lập phương",
      "question_count": 10,
      "proposed_action": "ALIAS_CANDIDATE",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tong-hieu-hai-lap-phuong",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "nhom-hang-tu",
      "label": "Nhóm hạng tử",
      "question_count": 12,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhom-hang-tu",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "tach-hang-tu-giua",
      "label": "Tách hạng tử giữa",
      "question_count": 12,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "EXTENSION_SKILL",
      "canonical_candidate": "tach-hang-tu-giua",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "phoi-hop-phuong-phap",
      "label": "Phối hợp nhiều phương pháp",
      "question_count": 16,
      "proposed_action": "ALIAS_CANDIDATE",
      "proposed_role": "COMPOSITE_TASK",
      "canonical_candidate": "phan-tich-da-thuc-hoan-toan",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "kiem-tra-phan-tich",
      "label": "Kiểm tra kết quả phân tích",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "kiem-tra-phan-tich",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "giai-pt-bang-nhan-tu",
      "label": "Giải phương trình bằng nhân tử",
      "question_count": 12,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "EXTENSION_SKILL",
      "canonical_candidate": "pt-tich",
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT06",
      "legacy_id": "ung-dung-phan-tich",
      "label": "Vận dụng phân tích nhân tử",
      "question_count": 8,
      "proposed_action": "RETAG_CONTEXT",
      "proposed_role": "CONTEXT",
      "canonical_candidate": null,
      "proposed_layer": "Core-Support",
      "foundation_priority": "LOW",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "nhan-biet-phan-thuc",
      "label": "Nhận biết phân thức",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-biet-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "dieu-kien-xac-dinh",
      "label": "Điều kiện xác định",
      "question_count": 16,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "dieu-kien-xac-dinh",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "hai-phan-thuc-bang-nhau",
      "label": "Hai phân thức bằng nhau",
      "question_count": 6,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "hai-phan-thuc-bang-nhau",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "doi-dau-phan-thuc",
      "label": "Đổi dấu phân thức",
      "question_count": 8,
      "proposed_action": "RETAG_METHOD",
      "proposed_role": "METHOD",
      "canonical_candidate": "rut-gon-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "phan-tich-tu-mau",
      "label": "Phân tích tử và mẫu",
      "question_count": 32,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "phan-tich-tu-mau",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "rut-gon-phan-thuc",
      "label": "Rút gọn phân thức",
      "question_count": 32,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "rut-gon-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "giu-dieu-kien-ban-dau",
      "label": "Giữ điều kiện xác định ban đầu",
      "question_count": 14,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "giu-dieu-kien-ban-dau",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "quy-dong-mau-thuc",
      "label": "Quy đồng mẫu thức",
      "question_count": 22,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "quy-dong-mau-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "cong-tru-phan-thuc",
      "label": "Cộng – trừ phân thức",
      "question_count": 18,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "cong-tru-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "nhan-phan-thuc",
      "label": "Nhân phân thức",
      "question_count": 14,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "nhan-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "chia-phan-thuc",
      "label": "Chia phân thức",
      "question_count": 8,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "chia-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "bieu-thuc-nhieu-phep-tinh",
      "label": "Biểu thức hữu tỉ nhiều phép tính",
      "question_count": 6,
      "proposed_action": "RETAG_COMPOSITE",
      "proposed_role": "COMPOSITE_TASK",
      "canonical_candidate": null,
      "proposed_layer": "Entrance10",
      "foundation_priority": "MEDIUM",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "tinh-gia-tri-phan-thuc",
      "label": "Tính giá trị phân thức",
      "question_count": 4,
      "proposed_action": "KEEP",
      "proposed_role": "ASSESSED_SKILL",
      "canonical_candidate": "tinh-gia-tri-phan-thuc",
      "proposed_layer": "KNTT-Core",
      "foundation_priority": "HIGH",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    },
    {
      "topic_id": "CT07",
      "legacy_id": "tim-gia-tri-nguyen",
      "label": "Tìm giá trị nguyên",
      "question_count": 2,
      "proposed_action": "MOVE_LAYER",
      "proposed_role": "EXTENSION_SKILL",
      "canonical_candidate": "tim-gia-tri-nguyen",
      "proposed_layer": "Specialized-Challenge",
      "foundation_priority": "LOW",
      "exam_priority": "PENDING_OFFICIAL_CORPUS",
      "runtime_change": false,
      "legacy_id_change": false
    }
  ],
  "current_written_coverage": [
    {
      "exercise_id": "WX07-RAT-001",
      "topic_id": "CT07",
      "level": "CORE_BASE",
      "problem_type_id": "rat-simplify-domain",
      "problem_type_title": "Rút gọn phân thức và giữ điều kiện xác định",
      "skills": [
        "dieu-kien-xac-dinh",
        "phan-tich-da-thuc",
        "rut-gon-phan-thuc"
      ]
    },
    {
      "exercise_id": "WX07-RAT-002",
      "topic_id": "CT07",
      "level": "CORE_APPLY",
      "problem_type_id": "rat-multi-operation",
      "problem_type_title": "Biểu thức phân thức nhiều phép tính",
      "skills": [
        "dieu-kien-xac-dinh",
        "quy-dong-mau-thuc",
        "cong-tru-phan-thuc",
        "rut-gon-phan-thuc"
      ]
    },
    {
      "exercise_id": "WX04-ALG-001",
      "topic_id": "CT04",
      "level": "CORE_BASE",
      "problem_type_id": "polynomial-subtraction-signs",
      "problem_type_title": "Trừ đa thức và bỏ ngoặc đúng dấu",
      "skills": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ]
    },
    {
      "exercise_id": "WX04-ALG-002",
      "topic_id": "CT04",
      "level": "CORE_APPLY",
      "problem_type_id": "polynomial-divide-monomial-evaluate",
      "problem_type_title": "Chia đa thức cho đơn thức rồi tính giá trị",
      "skills": [
        "chia-da-thuc-cho-don-thuc",
        "tinh-gia-tri-bieu-thuc"
      ]
    },
    {
      "exercise_id": "WX05-IDN-001",
      "topic_id": "CT05",
      "level": "CORE_BASE",
      "problem_type_id": "perfect-square-reverse-identification",
      "problem_type_title": "Nhận dạng bình phương hoàn chỉnh",
      "skills": [
        "binh-phuong-hieu",
        "binh-phuong-hoan-chinh",
        "nhan-dang-hdt"
      ]
    },
    {
      "exercise_id": "WX05-IDN-002",
      "topic_id": "CT05",
      "level": "CORE_APPLY",
      "problem_type_id": "difference-of-squares-structured-simplify",
      "problem_type_title": "Rút gọn bằng hiệu hai bình phương",
      "skills": [
        "hieu-hai-binh-phuong",
        "nhan-dang-hdt",
        "rut-gon-hdt"
      ]
    },
    {
      "exercise_id": "WX06-FAC-001",
      "topic_id": "CT06",
      "level": "CORE_BASE",
      "problem_type_id": "factor-common-sign-flip",
      "problem_type_title": "Đổi dấu để tạo nhân tử chung",
      "skills": [
        "nhan-tu-chung",
        "doi-dau-nhan-tu-chung"
      ]
    },
    {
      "exercise_id": "WX06-FAC-002",
      "topic_id": "CT06",
      "level": "CORE_APPLY",
      "problem_type_id": "factor-grouping-then-identity",
      "problem_type_title": "Nhóm hạng tử rồi tiếp tục bằng hằng đẳng thức",
      "skills": [
        "nhom-hang-tu",
        "phoi-hop-phuong-phap",
        "hieu-hai-binh-phuong",
        "kiem-tra-phan-tich"
      ]
    },
    {
      "exercise_id": "WX02-NUM-001",
      "topic_id": "CT02",
      "level": "CORE_BASE",
      "problem_type_id": "gcd-max-equal-groups",
      "problem_type_title": "Chọn ƯCLN cho bài toán chia nhiều nhóm nhất",
      "skills": [
        "ucln",
        "phan-tich-thua-so-nguyen-to"
      ]
    },
    {
      "exercise_id": "WX02-NUM-002",
      "topic_id": "CT02",
      "level": "CORE_APPLY",
      "problem_type_id": "percentage-discount-two-step",
      "problem_type_title": "Phần trăm: phân biệt số tiền giảm và giá phải trả",
      "skills": [
        "phan-tram",
        "so-huu-ti-thap-phan"
      ]
    },
    {
      "exercise_id": "WX03-RAT-001",
      "topic_id": "CT03",
      "level": "CORE_BASE",
      "problem_type_id": "divide-total-by-ratio",
      "problem_type_title": "Chia một tổng theo tỉ lệ",
      "skills": [
        "day-ti-so-bang-nhau",
        "chia-theo-ti-le"
      ]
    },
    {
      "exercise_id": "WX03-RAT-002",
      "topic_id": "CT03",
      "level": "CORE_APPLY",
      "problem_type_id": "inverse-proportion-workers-days",
      "problem_type_title": "Nhận dạng và giải bài toán tỉ lệ nghịch",
      "skills": [
        "ti-le-nghich",
        "he-so-ti-le-nghich",
        "phan-biet-thuan-nghich"
      ]
    }
  ],
  "proposed_written_gaps": [
    {
      "id": "S1-WR-CT02-BCNN-001",
      "topic_id": "CT02",
      "layer": "KNTT-Core",
      "problem_type": "BCNN scheduling / repeating-cycle word problem",
      "skills": [
        "bcnn"
      ],
      "need": "WRITTEN_RECOMMENDED"
    },
    {
      "id": "S1-WR-CT03-DIRECT-001",
      "topic_id": "CT03",
      "layer": "KNTT-Core",
      "problem_type": "Direct-proportion multistep word problem with units",
      "skills": [
        "ti-le-thuan"
      ],
      "need": "WRITTEN_RECOMMENDED"
    },
    {
      "id": "S1-WR-CT03-MODEL-001",
      "topic_id": "CT03",
      "layer": "Entrance10",
      "problem_type": "Build a proportional model from a real situation",
      "skills": [
        "mo-hinh-ti-le"
      ],
      "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
    },
    {
      "id": "S1-WR-CT04-MODEL-001",
      "topic_id": "CT04",
      "layer": "Entrance10",
      "problem_type": "Build an algebraic expression from a word problem",
      "skills": [
        "lap-bieu-thuc"
      ],
      "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
    },
    {
      "id": "S1-WR-CT05-PROOF-001",
      "topic_id": "CT05",
      "layer": "Entrance10",
      "problem_type": "Prove an identity with stepwise algebra",
      "skills": [
        "chung-minh-hdt"
      ],
      "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
    },
    {
      "id": "S1-WR-CT06-EQ-001",
      "topic_id": "CT06",
      "layer": "Entrance10",
      "problem_type": "Factor completely then solve by zero-product reasoning",
      "skills": [
        "giai-pt-bang-nhan-tu"
      ],
      "need": "WRITTEN_RECOMMENDED"
    },
    {
      "id": "S1-WR-CT06-MIDTERM-001",
      "topic_id": "CT06",
      "layer": "Entrance10",
      "problem_type": "Factor a quadratic by splitting the middle term",
      "skills": [
        "tach-hang-tu-giua"
      ],
      "need": "WRITTEN_RECOMMENDED"
    },
    {
      "id": "S1-WR-CT07-INTEGER-001",
      "topic_id": "CT07",
      "layer": "Specialized-Challenge",
      "problem_type": "Find integer values making a rational expression integer",
      "skills": [
        "tim-gia-tri-nguyen"
      ],
      "need": "WRITTEN_REQUIRED_FOR_FULL_SKILL"
    }
  ],
  "review_focus": [
    "Do not equate all 87 legacy tags with 87 mastery skills.",
    "Check every merge/alias candidate for distinct misconception/remediation value.",
    "Preserve shared canonical identity across topics where the mathematics is truly the same.",
    "Keep Core / Entrance10 / Specialized-Challenge boundaries source-grounded.",
    "Review whether each proposed written gap genuinely needs paper-first evidence.",
    "CT02/CT03 require a later full 240-item question-level role audit before canonical evidence activation."
  ]
}

```
