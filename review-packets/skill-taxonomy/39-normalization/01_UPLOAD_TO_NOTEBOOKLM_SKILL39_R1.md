# NotebookLM source — Skill Taxonomy Phase A: 39 flagged CĐ04–07 items

**Packet ID:** `MATH-SKILL-TAXONOMY-39-R1-20260930`  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Normalization register Git blob:** `16f07cc699b63afe3d9ef9c8ffecdb2e644df922`

## Purpose

Review the first bounded normalization layer for the 39 CĐ04–07 questions already isolated by the B01–B07 audit. This is **not** a global 346-code taxonomy migration and must not change learner counters, tags, Readiness or mastery.

The proposal separates five things that were previously easy to conflate:

1. mathematical concept/reference;
2. prompt task demand;
3. what the submitted MCQ answer actually evidences;
4. clone/parameterized family;
5. what extra evidence would be required before any future mastery claim.

## Source locks

The register is built only from these current-main sources:

- `primary-skill-decision-register-39-v1.json` — blob `097701804f9de8966af027b72449c5f7fdda2fbe`
- `primary-skill-review-queue-04-05-v1.json` — blob `289e6f6c643a308ae6a0d255ce80fc7680a97846`
- `primary-skill-review-queue-06-07-v1.json` — blob `73d3bd84fcec987e40827cfe9dc228ab643b8441`
- B01–B07 reconciliation ledger: `review-packets/skill-taxonomy/B01-B07-CURRENT-RECONCILIATION-20260930.md`

## Existing decision status that must be preserved unless source evidence disproves it

- 39 total items.
- 19 `scoped_primary_candidate`.
- 18 `formative_only_requires_new_evidence`.
- 2 `extension_only_pending_layer_check`.
- 0 runtime-enabled.
- 0 Core Readiness credit.

The 16 CĐ06 complete-factorization questions propose one **candidate output skill** `phan-tich-da-thuc-hoan-toan`; this is not permission to rename legacy `phoi-hop-phuong-phap` or to claim written-process mastery from MCQ output selection.

## Controlled vocabulary proposed

**Prompt demand stage**
- `recognition_interpretation`
- `selecting_procedure`
- `executing_substep`
- `building_complete_model`
- `independent_worked_solution`
- `transfer`

**Observable evidence**
- `MCQ_RECOGNITION_ONLY`
- `MCQ_METHOD_SELECTION_ONLY`
- `MCQ_ARGUMENT_RECOGNITION_ONLY`
- `MCQ_FINAL_OUTPUT_ONLY`
- `MCQ_FINAL_ANSWER_ONLY`

A prompt may ask for a full computation/proof while the **observable evidence** from a multiple-choice response is only final-output recognition. Do not upgrade evidence class merely because the mathematical task itself is multistep.

## Clone-family proposal

The register proposes these families for conservative future evidence counting:

- `ID05-PROOF-RECOGNITION-116-118`: 3 near-template identity-recognition items.
- Four separate 4-item CĐ06 complete-factorization parameterized families:
  - `FAC06-COMPLETE-DIFFSQ-077-081-085-089`
  - `FAC06-COMPLETE-PERFECTSQ-078-082-086-090`
  - `FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091`
  - `FAC06-COMPLETE-QUADRATIC-080-084-088-092`
- `FAC06-DIVISIBILITY-113-116`: 4 recognition items using consecutive-integer divisibility arguments.
- `FAC06-DIFFSQ-NUMERIC-117-120`: 4 parameterized fast-calculation items.
- `RAT07-COMPOSITE-109-114`: 6 parameterized rational-expression items with final result 1.
- `RAT07-INTEGER-119-120`: 2 parameterized integer-value items.

Candidate policy: items in one clone family must **not** automatically count as separate independent mastery evidence. This policy is not implemented.

## Full 39-item normalization proposal

```json
{
  "schema": "skill-normalization-register-39-v1",
  "status": "READ_ONLY_PROPOSAL_PENDING_INDEPENDENT_REVIEW",
  "as_of": "2026-09-30",
  "scope": "39 previously flagged CĐ04–07 items only; not the global 346-code taxonomy",
  "source_locks": {
    "decision_register": {
      "path": "docs/assets/data/curriculum/primary-skill-decision-register-39-v1.json",
      "blob": "097701804f9de8966af027b72449c5f7fdda2fbe"
    },
    "review_queue_04_05": {
      "path": "docs/assets/data/curriculum/primary-skill-review-queue-04-05-v1.json",
      "blob": "289e6f6c643a308ae6a0d255ce80fc7680a97846"
    },
    "review_queue_06_07": {
      "path": "docs/assets/data/curriculum/primary-skill-review-queue-06-07-v1.json",
      "blob": "73d3bd84fcec987e40827cfe9dc228ab643b8441"
    },
    "b01_b07_ledger": "review-packets/skill-taxonomy/B01-B07-CURRENT-RECONCILIATION-20260930.md"
  },
  "contract": {
    "concept": "Canonical mathematical idea/reference; concept aliases do not automatically create a new learner counter.",
    "prompt_demand_stage": [
      "recognition_interpretation",
      "selecting_procedure",
      "executing_substep",
      "building_complete_model",
      "independent_worked_solution",
      "transfer"
    ],
    "observable_evidence": "What the submitted answer can actually establish; MCQ final answer/method selection is weaker than written process/proof evidence.",
    "clone_family": "Parameterized/near-template items are grouped so future mastery pilots can avoid counting repetitions as independent evidence.",
    "compatibility": "No legacy IDs/tags/localStorage/readiness counters are changed by this proposal."
  },
  "summary": {
    "total_items": 39,
    "decision_statuses": {
      "total": 39,
      "scoped_primary_candidate": 19,
      "formative_only_requires_new_evidence": 18,
      "extension_only_pending_layer_check": 2,
      "selected_candidate": 19,
      "runtime_enabled": 0,
      "core_readiness_credit": 0
    },
    "observable_evidence_counts": {
      "MCQ_RECOGNITION_ONLY": 5,
      "MCQ_METHOD_SELECTION_ONLY": 2,
      "MCQ_FINAL_OUTPUT_ONLY": 24,
      "MCQ_ARGUMENT_RECOGNITION_ONLY": 4,
      "MCQ_FINAL_ANSWER_ONLY": 4
    },
    "prompt_demand_counts": {
      "recognition_interpretation": 9,
      "selecting_procedure": 2,
      "independent_worked_solution": 26,
      "transfer": 2
    },
    "clone_families": [
      {
        "family": "ID05-PROOF-RECOGNITION-116-118",
        "count": 3,
        "ids": [
          "ID05V1_116",
          "ID05V1_117",
          "ID05V1_118"
        ]
      },
      {
        "family": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
        "count": 4,
        "ids": [
          "FAC06V1_077",
          "FAC06V1_081",
          "FAC06V1_085",
          "FAC06V1_089"
        ]
      },
      {
        "family": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
        "count": 4,
        "ids": [
          "FAC06V1_078",
          "FAC06V1_082",
          "FAC06V1_086",
          "FAC06V1_090"
        ]
      },
      {
        "family": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
        "count": 4,
        "ids": [
          "FAC06V1_079",
          "FAC06V1_083",
          "FAC06V1_087",
          "FAC06V1_091"
        ]
      },
      {
        "family": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
        "count": 4,
        "ids": [
          "FAC06V1_080",
          "FAC06V1_084",
          "FAC06V1_088",
          "FAC06V1_092"
        ]
      },
      {
        "family": "FAC06-DIVISIBILITY-113-116",
        "count": 4,
        "ids": [
          "FAC06V1_113",
          "FAC06V1_114",
          "FAC06V1_115",
          "FAC06V1_116"
        ]
      },
      {
        "family": "FAC06-DIFFSQ-NUMERIC-117-120",
        "count": 4,
        "ids": [
          "FAC06V1_117",
          "FAC06V1_118",
          "FAC06V1_119",
          "FAC06V1_120"
        ]
      },
      {
        "family": "RAT07-COMPOSITE-109-114",
        "count": 6,
        "ids": [
          "RAT07V1_109",
          "RAT07V1_110",
          "RAT07V1_111",
          "RAT07V1_112",
          "RAT07V1_113",
          "RAT07V1_114"
        ]
      },
      {
        "family": "RAT07-INTEGER-119-120",
        "count": 2,
        "ids": [
          "RAT07V1_119",
          "RAT07V1_120"
        ]
      }
    ],
    "runtime_enabled": 0,
    "core_readiness_credit": 0
  },
  "limitations": [
    "This register is a ChatGPT normalization proposal, not an independent academic verdict.",
    "Concept references with canonical_skill_candidate=null are descriptive references only; they do not create new runtime skills.",
    "Clone families are conservative candidate groupings from source-locked question wording; exact/near-clone strength requires independent review.",
    "No exam-frequency or importance weight is inferred from these authored banks.",
    "No mastery threshold is proposed here."
  ],
  "items": [
    {
      "question_id": "ALG04V2_009",
      "topic": "04-bieu-thuc-dai-so",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "nhan-biet-da-thuc",
      "concept_reference_candidate": "nhan-biet-da-thuc",
      "learner_facing_scope_label": "Nhận biết cấu trúc đa thức (hạng tử tự do)",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn đúng hạng tử không chứa biến trong một đa thức đã cho.",
      "does_not_establish": [
        "Nhận biết đầy đủ mọi thành phần đa thức",
        "Thành thạo thu gọn đa thức"
      ],
      "clone_family_candidate": null,
      "clone_strength_candidate": "unique",
      "family_evidence_policy_candidate": "NO_FAMILY_DEDUP_REQUIRED",
      "mastery_gate_candidate": "ADDITIONAL_PARALLEL_ITEMS_BEFORE_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Hạng tử tự do của \\(5x^2-4x+11\\) là gì?",
      "correct_option": "11",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ALG04V2_010",
      "topic": "04-bieu-thuc-dai-so",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "source_blob_sha": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "nhan-biet-don-thuc",
      "concept_reference_candidate": "nhan-biet-don-thuc",
      "learner_facing_scope_label": "Nhận biết cấu trúc đơn thức (phần biến)",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn đúng phần biến của đơn thức có hệ số âm.",
      "does_not_establish": [
        "Xác định hệ số và bậc của đơn thức",
        "Thành thạo mọi dạng đơn thức"
      ],
      "clone_family_candidate": null,
      "clone_strength_candidate": "unique",
      "family_evidence_policy_candidate": "NO_FAMILY_DEDUP_REQUIRED",
      "mastery_gate_candidate": "ADDITIONAL_PARALLEL_ITEMS_BEFORE_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phần biến của đơn thức \\(-8a^2b^5\\) là gì?",
      "correct_option": "\\(a^2b^5\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ID05V1_116",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hang-dang-thuc-khai-trien-va-chung-minh",
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "clone_family_candidate": "ID05-PROOF-RECOGNITION-116-118",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(a,b\\)?",
      "correct_option": "\\((a+b)^2+(a-b)^2=2(a^2+b^2)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ID05V1_117",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hang-dang-thuc-khai-trien-va-chung-minh",
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "clone_family_candidate": "ID05-PROOF-RECOGNITION-116-118",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(x,y\\)?",
      "correct_option": "\\((x+y)^2-(x-y)^2=4xy\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ID05V1_118",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hang-dang-thuc-khai-trien-va-chung-minh",
      "learner_facing_scope_label": "Nhận diện đẳng thức đúng sau khai triển",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "observable_answer_evidence": "Nhận diện một đẳng thức đúng từ bốn lựa chọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "clone_family_candidate": "ID05-PROOF-RECOGNITION-116-118",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(x,y\\)?",
      "correct_option": "\\((x+y)^3+(x-y)^3=2x(x^2+3y^2)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ID05V1_119",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "chung-minh-hdt"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hang-dang-thuc-khai-trien-va-chung-minh",
      "learner_facing_scope_label": "Chọn phương pháp bắt đầu chứng minh",
      "prompt_demand_stage": "selecting_procedure",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "observable_answer_evidence": "Chọn thao tác khai triển hai bình phương và thu gọn.",
      "does_not_establish": [
        "Tự trình bày chứng minh tổng quát",
        "Tự thực hiện đầy đủ các bước khai triển"
      ],
      "clone_family_candidate": null,
      "clone_strength_candidate": "unique",
      "family_evidence_policy_candidate": "NO_FAMILY_DEDUP_REQUIRED",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Để chứng minh \\((a+b)^2-(a-b)^2=4ab\\), bước phù hợp nhất là:",
      "correct_option": "Khai triển hai bình phương rồi thu gọn",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "ID05V1_120",
      "topic": "05-7-hang-dang-thuc",
      "source_file": "05-7-hang-dang-thuc-v1-04.json",
      "source_blob_sha": "c1edbbe7eba0d144a32d54cb384eb1ec09f156c8",
      "queue_source": "primary-skill-review-queue-04-05-v1.json",
      "legacy_skill_tags": [
        "phan-tich-hdt",
        "hieu-hai-binh-phuong"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "hieu-hai-binh-phuong",
      "concept_reference_candidate": "hieu-hai-binh-phuong",
      "learner_facing_scope_label": "Nhận dạng và áp dụng hiệu hai bình phương (bước đầu)",
      "prompt_demand_stage": "selecting_procedure",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "observable_answer_evidence": "Chọn bước đầu đúng để tách x⁴−16 thành tích.",
      "does_not_establish": [
        "Phân tích hoàn toàn đa thức bậc bốn",
        "Thành thạo mọi HĐT"
      ],
      "clone_family_candidate": null,
      "clone_strength_candidate": "unique",
      "family_evidence_policy_candidate": "NO_FAMILY_DEDUP_REQUIRED",
      "mastery_gate_candidate": "ADDITIONAL_EXECUTION_EVIDENCE_REQUIRED",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Bước ĐẦU TIÊN thích hợp khi phân tích \\(x^4-16\\) thành nhân tử là:",
      "correct_option": "Hiệu hai bình phương: \\((x^2-4)(x^2+4)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_077",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 48 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x-4)(x+4)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_078",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 12 x^{2} + 18 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x+3)^2\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_079",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - 4 x - 12\\) thành nhân tử.",
      "correct_option": "\\((x+3)(x-2)(x+2)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_080",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + 8 x^{2} + 12 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+2)(x+6)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_081",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(2 x^{3} - 18 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x-3)(x+3)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_082",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 18 x^{2} + 27 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x+3)^2\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_083",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - x - 3\\) thành nhân tử.",
      "correct_option": "\\((x+3)(x-1)(x+1)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_084",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + 6 x^{2} + 5 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+1)(x+5)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_085",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(4 x^{3} - 36 x\\) thành nhân tử.",
      "correct_option": "\\(4x(x-3)(x+3)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_086",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 6 x^{2} + 3 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x+1)^2\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_087",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^3+2x^2-9x-18\\) thành nhân tử.",
      "correct_option": "\\((x+2)(x-3)(x+3)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_088",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + 9 x^{2} + 18 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+3)(x+6)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_089",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 3 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x-1)(x+1)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_090",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "source_blob_sha": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 8 x^{2} + 8 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x+2)^2\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_091",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^{3} + x^{2} - 4 x - 4\\) thành nhân tử.",
      "correct_option": "\\((x+1)(x-2)(x+2)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_092",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "decision_status": "scoped_primary_candidate",
      "canonical_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "concept_reference_candidate": "phan-tich-da-thuc-hoan-toan",
      "learner_facing_scope_label": "Chọn kết quả phân tích đa thức hoàn toàn",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Nhận diện dạng tích đã phân tích hoàn toàn; phân biệt đáp án trung gian hoặc thiếu nhân tử.",
      "does_not_establish": [
        "Đã tự thực hiện đúng mọi phương pháp trung gian",
        "Đã biết chứng minh sự phân tích bằng các bước viết"
      ],
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_OR_STEPWISE_EVIDENCE_REQUIRED_FOR_FULL_EXECUTION",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Phân tích hoàn toàn \\(x^3+4x^2+3x\\) thành nhân tử.",
      "correct_option": "\\(x(x+1)(x+3)\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_113",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-tich-da-thuc-ung-dung-chia-het",
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+n\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2+n=n(n+1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_114",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-tich-da-thuc-ung-dung-chia-het",
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2-n\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2-n=n(n-1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_115",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-tich-da-thuc-ung-dung-chia-het",
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^3-n\\) luôn chia hết cho 6?",
      "correct_option": "\\(n^3-n=n(n-1)(n+1)\\), tích ba số nguyên liên tiếp chia hết cho 6.",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_116",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-tich-da-thuc-ung-dung-chia-het",
      "learner_facing_scope_label": "Nhận diện lập luận chia hết từ dạng tích",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "observable_answer_evidence": "Chọn lập luận đúng về tích hai hoặc ba số nguyên liên tiếp.",
      "does_not_establish": [
        "Tự trình bày chứng minh chia hết",
        "Thành thạo tất cả vận dụng phân tích đa thức"
      ],
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "clone_strength_candidate": "near_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "WRITTEN_EVIDENCE_REQUIRED_FOR_PROOF",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+3n+2\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2+3n+2=(n+1)(n+2)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_117",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hieu-hai-binh-phuong-tinh-nhanh",
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "METHOD_EVIDENCE_REQUIRED_BEFORE_METHOD_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Tính nhanh \\(105^2-95^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2000\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_118",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hieu-hai-binh-phuong-tinh-nhanh",
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "METHOD_EVIDENCE_REQUIRED_BEFORE_METHOD_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Tính nhanh \\(106^2-94^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2400\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_119",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hieu-hai-binh-phuong-tinh-nhanh",
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "METHOD_EVIDENCE_REQUIRED_BEFORE_METHOD_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Tính nhanh \\(107^2-93^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2800\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "FAC06V1_120",
      "topic": "06-phan-tich-da-thuc",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "source_blob_sha": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "hieu-hai-binh-phuong-tinh-nhanh",
      "learner_facing_scope_label": "Tính kết quả số từ hiệu hai bình phương",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "observable_answer_evidence": "Chọn đúng giá trị số của phép tính đã cho.",
      "does_not_establish": [
        "Đã dùng phương pháp phân tích nhân tử",
        "Đã chọn được HĐT thích hợp độc lập"
      ],
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "METHOD_EVIDENCE_REQUIRED_BEFORE_METHOD_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Tính nhanh \\(108^2-92^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(3200\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_109",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-1}+\\frac1{x+1}\\right)\\cdot\\frac{x^2-1}{2x}\\) (với \\(x\\ne0,\\;x\\ne1,\\;x\\ne-1\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_110",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-2}+\\frac1{x+2}\\right)\\cdot\\frac{x^2-4}{2x}\\) (với \\(x\\ne0,\\;x\\ne2,\\;x\\ne-2\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_111",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-3}+\\frac1{x+3}\\right)\\cdot\\frac{x^2-9}{2x}\\) (với \\(x\\ne0,\\;x\\ne3,\\;x\\ne-3\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_112",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-4}+\\frac1{x+4}\\right)\\cdot\\frac{x^2-16}{2x}\\) (với \\(x\\ne0,\\;x\\ne4,\\;x\\ne-4\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_113",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-5}+\\frac1{x+5}\\right)\\cdot\\frac{x^2-25}{2x}\\) (với \\(x\\ne0,\\;x\\ne5,\\;x\\ne-5\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_114",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "decision_status": "formative_only_requires_new_evidence",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "learner_facing_scope_label": "Rút gọn biểu thức phân thức nhiều phép tính (đầu ra)",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn kết quả cuối bằng 1 trên miền xác định đã nêu.",
      "does_not_establish": [
        "Làm đúng độc lập cả bước cộng, nhân và điều kiện xác định",
        "Nắm chắc dạng bài khác ngoài mẫu đồng nhất 6 câu"
      ],
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "STEPWISE_EVIDENCE_REQUIRED_FOR_MULTISTEP_MASTERY",
      "layer_decision": "NO_LAYER_CHANGE_PROPOSED",
      "question": "Rút gọn \\(A=\\left(\\frac1{x-6}+\\frac1{x+6}\\right)\\cdot\\frac{x^2-36}{2x}\\) (với \\(x\\ne0,\\;x\\ne6,\\;x\\ne-6\\)).",
      "correct_option": "\\(1\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_119",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "tim-gia-tri-nguyen"
      ],
      "decision_status": "extension_only_pending_layer_check",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-thuc-gia-tri-nguyen",
      "learner_facing_scope_label": "Tìm giá trị nguyên của phân thức",
      "prompt_demand_stage": "transfer",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ],
      "clone_family_candidate": "RAT07-INTEGER-119-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "EXTENSION_LAYER_REVIEW_AND_ADDITIONAL_EVIDENCE_REQUIRED",
      "layer_decision": "PENDING_EXTENSION_LAYER_CHECK",
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+1}{x-2}\\) là số nguyên.",
      "correct_option": "\\(x\\in\\{-1,1,3,5\\}\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    },
    {
      "question_id": "RAT07V1_120",
      "topic": "07-phan-thuc-dai-so",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "source_blob_sha": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "queue_source": "primary-skill-review-queue-06-07-v1.json",
      "legacy_skill_tags": [
        "tim-gia-tri-nguyen"
      ],
      "decision_status": "extension_only_pending_layer_check",
      "canonical_skill_candidate": null,
      "concept_reference_candidate": "phan-thuc-gia-tri-nguyen",
      "learner_facing_scope_label": "Tìm giá trị nguyên của phân thức",
      "prompt_demand_stage": "transfer",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "observable_answer_evidence": "Chọn tập x nguyên bằng cách xét ước của một số nguyên.",
      "does_not_establish": [
        "Đáp ứng Core Readiness chung",
        "Thành thạo mọi bài toán phân thức có tham số nguyên"
      ],
      "clone_family_candidate": "RAT07-INTEGER-119-120",
      "clone_strength_candidate": "parameterized_template_family",
      "family_evidence_policy_candidate": "DO_NOT_SUM_SAME_FAMILY_AS_INDEPENDENT_MASTERY_EVIDENCE",
      "mastery_gate_candidate": "EXTENSION_LAYER_REVIEW_AND_ADDITIONAL_EVIDENCE_REQUIRED",
      "layer_decision": "PENDING_EXTENSION_LAYER_CHECK",
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+2}{x-3}\\) là số nguyên.",
      "correct_option": "\\(x\\in\\{-2,2,4,8\\}\\)",
      "answer_index": 0,
      "runtime_enabled": false,
      "core_readiness_credit": false
    }
  ]
}

```

## Required independent review

Review every one of the 39 items and the family proposal.

For each item verify:
- concept reference is not broader than the question;
- `canonical_skill_candidate` is retained only where the existing decision register already allows one;
- prompt-demand stage is appropriate;
- observable evidence class matches what one MCQ response can actually prove;
- `mastery_gate_candidate` is conservative enough;
- layer status is not silently upgraded;
- no old tag or learner evidence is being reinterpreted retroactively.

For each clone family verify:
- items are similar enough to warrant conservative de-duplication;
- families are not merged too broadly;
- items that are mathematically distinct enough for separate evidence are not incorrectly collapsed.

Special checks:
1. `ID05V1_116–119`: recognition/method selection must not certify proof-writing mastery.
2. `FAC06V1_077–092`: distinguish “prompt asks to factor completely” from “MCQ answer only shows final-output selection”; assess whether the four 4-item clone families are the right granularity.
3. `FAC06V1_113–116`: argument recognition must not certify an independently written divisibility proof.
4. `FAC06V1_117–120`: final numerical answer must not prove the student used factorization.
5. `RAT07V1_109–114`: six near-identical final-result-1 items must not yield six independent mastery events.
6. `RAT07V1_119–120`: verify they remain pending extension-layer review, not Core Readiness.

Return:
- packet ID + verdict `PASS`, `REVISIONS_REQUIRED` or `INSUFFICIENT_EVIDENCE`;
- coverage count: exactly 39/39, or list missing IDs;
- table of all IDs requiring changes: ID | field | current proposal | corrected proposal | reason;
- family table: family | PASS/REVISE | corrected membership if needed | evidence-counting note;
- final counts by decision status and observable-evidence class;
- explicit statement that nothing in this review authorizes runtime/mastery migration.
