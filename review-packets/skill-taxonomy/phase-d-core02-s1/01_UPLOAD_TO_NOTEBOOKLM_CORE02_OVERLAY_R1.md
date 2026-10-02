# SOURCE PACKET — NotebookLM Academic Review — CT02 Full-Bank Primary-Skill Overlay S1 R1

Packet ID: `MATH-SKILL-CORE02-S1-OVERLAY-R1-20261002`

## Purpose

Independently review all **120/120 CĐ02 Practice questions** and the proposed conservative primary-skill overlay.

This is a review-only artifact. It does not activate runtime canonical evidence, Readiness credit, mastery labels/thresholds, migration, backfill or regrade.

## Source lock

- production main checkpoint: `8d802d726b555854a75f9eed44e6ed0f44686860`
- CT02 manifest blob: `c3e592de17203a5ccb9f589fd8501e8dd0a6c417`
- overlay candidate blob: `d0661c2dfae454f89afbcf3069017ff370c451ab`
- S1 reconciled taxonomy blob: `ede79dc59bf3bb6512687362463bb07f1d9dbc84`
- S1 NotebookLM PASS receipt blob: `53997c92a1705c2d2def00ace3bde63304a7eff7`
- v2 design contract blob: `3c8c5a082c990814c3ed9a1465172c72697735b3`

CT02 source chunks are locked inside the overlay under `source_files`.

## Academic boundary

S1 R1 already passed NotebookLM at taxonomy level:
- 87/87 S1 rows PASS;
- 8/8 proposed written gaps PASS;
- ARCH_1..ARCH_12 PASS;
- CT02/CT03 explicitly remain provisional pending full item-level review.

For CT02 specifically:
- `so-huu-ti-thap-phan` remains `REVIEW_REQUIRED`; do not force it into a canonical primary just to maximize coverage.
- `can-bac-hai` maps to Core-Support `can-bac-hai-so-hoc`; do not promote it to CT02 Core mastery.
- a one-answer MCQ may have at most one primary assessed-skill candidate;
- if a final answer mixes multiple independently meaningful capabilities, `FORMATIVE_ONLY_NO_PRIMARY` is valid;
- legacy IDs/tags/questions/answers are immutable in this review;
- clone families are for future evidence de-duplication only, not deletion of practice items.

## Special items to inspect

- `NUM02V1_018`: order of operations primary; exponent supporting.
- `NUM02V1_028`: exponent primary; order of operations supporting.
- `NUM02V1_029`: order of operations primary; exponent supporting.
- `NUM02V1_059`: UCLN + BCNN relation; proposed formative-only composite.
- `NUM02V1_060`: prime factorization primary; prime-number concept supporting.
- `NUM02V1_069`, `086`, `089`: unresolved rational/decimal tag must not steal primary from the observable target.
- `NUM02V1_082`, `090`, `119`, `120`: proposed formative-only composites.
- `NUM02V1_083–085`, `087–088`: no canonical primary while `so-huu-ti-thap-phan` remains REVIEW_REQUIRED.
- `NUM02V1_103–108`, `117`: Core-Support square-root items, no CT02 Core primary.

## CT02 S1 taxonomy rows

```json
[
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
  }
]
```

## Candidate overlay under review

```json
{
  "schema": "primary-skill-overlay-core02-s1-phase-d-r1",
  "status": "CHATGPT_CANDIDATE_PENDING_NOTEBOOKLM_REVIEW",
  "as_of": "2026-10-02",
  "topic": "02-so-va-phep-tinh",
  "source_manifest": "docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json",
  "source_manifest_blob": "c3e592de17203a5ccb9f589fd8501e8dd0a6c417",
  "source_files": {
    "02-so-va-phep-tinh-v1-01.json": {
      "blob": "42bbc54fafede2294ae3d2a39b6196533a886463",
      "question_count": 30
    },
    "02-so-va-phep-tinh-v1-02.json": {
      "blob": "34cd88e67336ef7fec0d4d45201a786f3450657b",
      "question_count": 30
    },
    "02-so-va-phep-tinh-v1-03.json": {
      "blob": "7ec0f1ef494acb96be3863101d86721a87ef09cf",
      "question_count": 30
    },
    "02-so-va-phep-tinh-v1-04.json": {
      "blob": "556fca88c5aef7b207e57153330c1dc284ac3955",
      "question_count": 30
    }
  },
  "academic_basis": {
    "s1_taxonomy": "MATH-SKILL-TAXONOMY-V2-S1-R1-20261002 NotebookLM PASS 87/87",
    "s1_reconciled_blob": "ede79dc59bf3bb6512687362463bb07f1d9dbc84",
    "phase_d_pattern": "CĐ04–CĐ07 full-bank overlay schema and conservative evidence rules"
  },
  "rules": {
    "one_assessed_skill_max_per_question": true,
    "supporting_method_context_category_not_independent_mastery": true,
    "pending_or_composite_items_formative_only": true,
    "clone_family_not_multiple_independent_mastery_events": true,
    "legacy_question_content_answer_tags_immutable": true,
    "runtime_enabled": false,
    "no_history_backfill": true,
    "ct02_core_support_not_promoted_to_core_mastery": true
  },
  "summary": {
    "questions": 120,
    "mapped_primary": 103,
    "formative_only_without_primary": 17,
    "primary_counts": {
      "tap-hop-so": 6,
      "so-nguyen-phep-tinh": 11,
      "gia-tri-tuyet-doi": 3,
      "thu-tu-phep-tinh": 5,
      "luy-thua": 8,
      "dau-hieu-chia-het": 8,
      "so-nguyen-to": 4,
      "phan-tich-thua-so-nguyen-to": 3,
      "ucln": 9,
      "bcnn": 7,
      "rut-gon-phan-so": 6,
      "quy-dong-so-sanh-phan-so": 7,
      "phep-tinh-phan-so": 11,
      "phan-tram": 15
    },
    "clone_families": [
      {
        "id": "NUM02-SET-RECOG-001-005",
        "count": 4,
        "ids": [
          "NUM02V1_001",
          "NUM02V1_002",
          "NUM02V1_003",
          "NUM02V1_005"
        ]
      },
      {
        "id": "NUM02-INT-ADD-007-008",
        "count": 2,
        "ids": [
          "NUM02V1_007",
          "NUM02V1_008"
        ]
      },
      {
        "id": "NUM02-INT-MUL-009-010",
        "count": 2,
        "ids": [
          "NUM02V1_009",
          "NUM02V1_010"
        ]
      },
      {
        "id": "NUM02-INT-ADDSUB-012-014",
        "count": 3,
        "ids": [
          "NUM02V1_012",
          "NUM02V1_013",
          "NUM02V1_014"
        ]
      },
      {
        "id": "NUM02-ABS-EVAL-015-016",
        "count": 2,
        "ids": [
          "NUM02V1_015",
          "NUM02V1_016"
        ]
      },
      {
        "id": "NUM02-PRIME-FACTOR-041-042",
        "count": 2,
        "ids": [
          "NUM02V1_041",
          "NUM02V1_042"
        ]
      },
      {
        "id": "NUM02-GCD-CALC-045-047-051-052",
        "count": 5,
        "ids": [
          "NUM02V1_045",
          "NUM02V1_046",
          "NUM02V1_047",
          "NUM02V1_051",
          "NUM02V1_052"
        ]
      },
      {
        "id": "NUM02-GCD-GROUP-049-050-114",
        "count": 3,
        "ids": [
          "NUM02V1_049",
          "NUM02V1_050",
          "NUM02V1_114"
        ]
      },
      {
        "id": "NUM02-LCM-CALC-053-055",
        "count": 3,
        "ids": [
          "NUM02V1_053",
          "NUM02V1_054",
          "NUM02V1_055"
        ]
      },
      {
        "id": "NUM02-LCM-CYCLE-056-057-115",
        "count": 3,
        "ids": [
          "NUM02V1_056",
          "NUM02V1_057",
          "NUM02V1_115"
        ]
      },
      {
        "id": "NUM02-FRAC-SIMPLIFY-061-062-064-066",
        "count": 4,
        "ids": [
          "NUM02V1_061",
          "NUM02V1_062",
          "NUM02V1_064",
          "NUM02V1_066"
        ]
      },
      {
        "id": "NUM02-FRAC-ADD-073-075",
        "count": 2,
        "ids": [
          "NUM02V1_073",
          "NUM02V1_075"
        ]
      },
      {
        "id": "NUM02-PERCENT-CONVERT-091-092",
        "count": 2,
        "ids": [
          "NUM02V1_091",
          "NUM02V1_092"
        ]
      },
      {
        "id": "NUM02-PERCENT-OF-093-094-110-118",
        "count": 4,
        "ids": [
          "NUM02V1_093",
          "NUM02V1_094",
          "NUM02V1_110",
          "NUM02V1_118"
        ]
      },
      {
        "id": "NUM02-ROOT-CALC-103-104",
        "count": 2,
        "ids": [
          "NUM02V1_103",
          "NUM02V1_104"
        ]
      },
      {
        "id": "NUM02-INTEGER-CONTEXT-112-113",
        "count": 2,
        "ids": [
          "NUM02V1_112",
          "NUM02V1_113"
        ]
      }
    ],
    "runtime_enabled": 0
  },
  "items": [
    {
      "question_id": "NUM02V1_001",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "NUM02-SET-RECOG-001-005",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào thuộc tập số tự nhiên \\(\\mathbb{N}\\)?",
      "correct_option": "\\(7\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_002",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "NUM02-SET-RECOG-001-005",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào thuộc \\(\\mathbb{Z}\\) nhưng không thuộc \\(\\mathbb{N}\\)?",
      "correct_option": "\\(-4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_003",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "NUM02-SET-RECOG-001-005",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào là số hữu tỉ?",
      "correct_option": "\\(\\frac{7}{11}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_004",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khẳng định nào đúng?",
      "correct_option": "\\(\\mathbb{N}\\subset\\mathbb{Z}\\subset\\mathbb{Q}\\subset\\mathbb{R}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_005",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "NUM02-SET-RECOG-001-005",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào là số vô tỉ?",
      "correct_option": "\\(\\sqrt5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_006",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số đối của \\(-12\\) là:",
      "correct_option": "\\(12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_007",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-ADD-007-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\((-8)+(-5)\\).",
      "correct_option": "\\(-13\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_008",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-ADD-007-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(14+(-19)\\).",
      "correct_option": "\\(-5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_009",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-MUL-009-010",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\((-7)\\cdot 6\\).",
      "correct_option": "\\(-42\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_010",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-MUL-009-010",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\((-9)\\cdot(-4)\\).",
      "correct_option": "\\(36\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_011",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\((-45):9\\).",
      "correct_option": "\\(-5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_012",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-ADDSUB-012-014",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(48-73+25\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_013",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-ADDSUB-012-014",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(-18-(-7)\\).",
      "correct_option": "\\(-11\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_014",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INT-ADDSUB-012-014",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(25+(-8)-12\\).",
      "correct_option": "\\(5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_015",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "gia-tri-tuyet-doi"
      ],
      "canonical_assessed_skill_candidate": "gia-tri-tuyet-doi",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-ABS-EVAL-015-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giá trị của \\(|-17|\\) là:",
      "correct_option": "\\(17\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_016",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "gia-tri-tuyet-doi"
      ],
      "canonical_assessed_skill_candidate": "gia-tri-tuyet-doi",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-ABS-EVAL-015-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(|-8|+|3|\\).",
      "correct_option": "\\(11\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_017",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "gia-tri-tuyet-doi"
      ],
      "canonical_assessed_skill_candidate": "gia-tri-tuyet-doi",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nguyên \\(x\\) thỏa \\(|x|=6\\) là:",
      "correct_option": "\\(x=6\\) hoặc \\(x=-6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_018",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "thu-tu-phep-tinh",
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "thu-tu-phep-tinh",
      "supporting_skills": [
        "luy-thua"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(18-2\\cdot3^2\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_019",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "thu-tu-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(36:(3\\cdot2)+4\\).",
      "correct_option": "\\(10\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_020",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "thu-tu-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(5+[12-2(3+1)]\\).",
      "correct_option": "\\(9\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_021",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giá trị của \\(2^5\\) là:",
      "correct_option": "\\(32\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_022",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(3^2\\cdot3^4\\).",
      "correct_option": "\\(3^6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_023",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((2^3)^4\\).",
      "correct_option": "\\(2^{12}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_024",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Với \\(a\\ne0\\), \\(a^7:a^3\\) bằng:",
      "correct_option": "\\(a^4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_025",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Với \\(a\\ne0\\), giá trị của \\(a^0\\) là:",
      "correct_option": "\\(1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_026",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giá trị của \\((-2)^4\\) là:",
      "correct_option": "\\(16\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_027",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giá trị của \\(-2^4\\) là:",
      "correct_option": "\\(-16\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_028",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua",
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "luy-thua",
      "supporting_skills": [
        "thu-tu-phep-tinh"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(2^3+3^2\\).",
      "correct_option": "\\(17\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_029",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "luy-thua",
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "thu-tu-phep-tinh",
      "supporting_skills": [
        "luy-thua"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(4^2-2^3\\cdot2\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_030",
      "source_file": "02-so-va-phep-tinh-v1-01.json",
      "legacy_skill_tags": [
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "thu-tu-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính nhanh \\(37\\cdot25+63\\cdot25\\).",
      "correct_option": "\\(2500\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_031",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào chia hết cho 2?",
      "correct_option": "\\(348\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_032",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào chia hết cho 5?",
      "correct_option": "\\(1245\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_033",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào chia hết cho 9?",
      "correct_option": "\\(423\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_034",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số \\(57x\\) chia hết cho 3. Chữ số \\(x\\) có thể là:",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_035",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào chia hết đồng thời cho 2 và 5?",
      "correct_option": "\\(1230\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_036",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào chia hết cho 3 nhưng không chia hết cho 9?",
      "correct_option": "\\(123\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_037",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số dư của \\(58\\) khi chia cho \\(7\\) là:",
      "correct_option": "\\(2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_038",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "dau-hieu-chia-het"
      ],
      "canonical_assessed_skill_candidate": "dau-hieu-chia-het",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nếu một số chia hết cho 9 thì chắc chắn số đó chia hết cho:",
      "correct_option": "\\(3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_039",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào là số nguyên tố?",
      "correct_option": "\\(29\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_040",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào là hợp số?",
      "correct_option": "\\(35\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_041",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-thua-so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-thua-so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PRIME-FACTOR-041-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(84\\) ra thừa số nguyên tố.",
      "correct_option": "\\(2^2\\cdot3\\cdot7\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_042",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-thua-so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-thua-so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PRIME-FACTOR-041-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(180\\) ra thừa số nguyên tố.",
      "correct_option": "\\(2^2\\cdot3^2\\cdot5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_043",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số \\(1\\) là:",
      "correct_option": "Không phải số nguyên tố cũng không phải hợp số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_044",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-to",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nguyên tố chẵn duy nhất là:",
      "correct_option": "\\(2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_045",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-CALC-045-047-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "ƯCLN\\((18,24)\\) bằng:",
      "correct_option": "\\(6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_046",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-CALC-045-047-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "ƯCLN\\((45,60)\\) bằng:",
      "correct_option": "\\(15\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_047",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-CALC-045-047-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "ƯCLN\\((84,126)\\) bằng:",
      "correct_option": "\\(42\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_048",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nếu ƯCLN\\((a,b)=1\\), ta nói \\(a,b\\) là:",
      "correct_option": "Hai số nguyên tố cùng nhau",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_049",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-GROUP-049-050-114",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "36 nam và 48 nữ chia thành nhiều nhóm nhất, mỗi nhóm có số nam như nhau và số nữ như nhau. Số nhóm là:",
      "correct_option": "\\(12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_050",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-GROUP-049-050-114",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Có 24 bút đỏ và 36 bút xanh chia đều vào nhiều túi nhất, mỗi túi cùng số bút mỗi màu. Số túi là:",
      "correct_option": "\\(12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_051",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-CALC-045-047-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "ƯCLN\\((72,90)\\) bằng:",
      "correct_option": "\\(18\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_052",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-CALC-045-047-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "ƯCLN\\((35,64)\\) bằng:",
      "correct_option": "\\(1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_053",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CALC-053-055",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "BCNN\\((6,8)\\) bằng:",
      "correct_option": "\\(24\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_054",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CALC-053-055",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "BCNN\\((12,18)\\) bằng:",
      "correct_option": "\\(36\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_055",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CALC-053-055",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "BCNN\\((84,126)\\) bằng:",
      "correct_option": "\\(252\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_056",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CYCLE-056-057-115",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hai đèn chớp lần lượt mỗi 6 giây và 8 giây. Cùng chớp lúc đầu, sau ít nhất bao lâu lại cùng chớp?",
      "correct_option": "\\(24\\) giây",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_057",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CYCLE-056-057-115",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một xe buýt A qua bến mỗi 12 phút, xe B mỗi 18 phút. Cùng qua lúc 7:00, lần tiếp theo cùng qua sau:",
      "correct_option": "\\(36\\) phút",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_058",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số tự nhiên nhỏ nhất lớn hơn 100, chia 12 dư 5 và chia 18 cũng dư 5 là:",
      "correct_option": "\\(113\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_059",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "ucln",
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "ucln",
        "bcnn"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "gcd-lcm-composite-relation",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Tích của ƯCLN và BCNN của 12 và 18 bằng:",
      "correct_option": "\\(216\\)",
      "note": "Final-option MCQ combines multiple independently meaningful capabilities; keep formative-only rather than duplicate primary evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_060",
      "source_file": "02-so-va-phep-tinh-v1-02.json",
      "legacy_skill_tags": [
        "so-nguyen-to",
        "phan-tich-thua-so-nguyen-to"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-thua-so-nguyen-to",
      "supporting_skills": [
        "so-nguyen-to"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số tự nhiên nhỏ nhất có đúng ba thừa số nguyên tố khác nhau và chia hết cho 6 là:",
      "correct_option": "\\(30\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_061",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-SIMPLIFY-061-062-064-066",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{18}{24}\\).",
      "correct_option": "\\(\\frac34\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_062",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-SIMPLIFY-061-062-064-066",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{-21}{28}\\).",
      "correct_option": "\\(-\\frac34\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_063",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân số nào bằng \\(\\frac25\\)?",
      "correct_option": "\\(\\frac{6}{15}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_064",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-SIMPLIFY-061-062-064-066",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân số tối giản của \\(\\frac{36}{54}\\) là:",
      "correct_option": "\\(\\frac23\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_065",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Muốn rút gọn một phân số, ta chia cả tử và mẫu cho:",
      "correct_option": "Cùng một ước chung khác 0",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_066",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-so"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-SIMPLIFY-061-062-064-066",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân số \\(\\frac{14}{-21}\\) viết với mẫu dương ở dạng tối giản là:",
      "correct_option": "\\(-\\frac23\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_067",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "So sánh \\(\\frac34\\) và \\(\\frac56\\).",
      "correct_option": "\\(\\frac34<\\frac56\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_068",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số lớn hơn là:",
      "correct_option": "\\(-\\frac23\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_069",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so",
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Sắp xếp tăng dần đúng là:",
      "correct_option": "\\(-1,25<-\\frac65<0<\\frac34\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_070",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân số nào lớn nhất?",
      "correct_option": "\\(\\frac78\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_071",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu số chung nhỏ nhất của \\(\\frac{1}{6}\\) và \\(\\frac{5}{8}\\) là:",
      "correct_option": "\\(24\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_072",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Quy đồng \\(\\frac23\\) và \\(\\frac56\\) theo mẫu 6, ta được:",
      "correct_option": "\\(\\frac46\\) và \\(\\frac56\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_073",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-ADD-073-075",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac34+\\frac56\\).",
      "correct_option": "\\(\\frac{19}{12}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_074",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac78-\\frac14\\).",
      "correct_option": "\\(\\frac58\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_075",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-FRAC-ADD-073-075",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(-\\frac23+\\frac56\\).",
      "correct_option": "\\(\\frac16\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_076",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac35\\cdot\\frac{10}{9}\\).",
      "correct_option": "\\(\\frac23\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_077",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac47:\\frac23\\).",
      "correct_option": "\\(\\frac67\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_078",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(1-\\frac38\\).",
      "correct_option": "\\(\\frac58\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_079",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac12+\\frac13-\\frac16\\).",
      "correct_option": "\\(\\frac23\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_080",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\left(\\frac34-\\frac12\\right):\\frac58\\).",
      "correct_option": "\\(\\frac25\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_081",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so",
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [
        "thu-tu-phep-tinh"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(2-\\frac35\\cdot\\frac56\\).",
      "correct_option": "\\(\\frac32\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_082",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so",
        "luy-thua",
        "thu-tu-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "phep-tinh-phan-so",
        "luy-thua",
        "thu-tu-phep-tinh"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "mixed-power-fraction-order-composite",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Tính \\(A=2^3-3\\left(\\frac12-\\frac56\\right)+\\frac74\\).",
      "correct_option": "\\(\\frac{43}{4}\\)",
      "note": "Final-option MCQ combines multiple independently meaningful capabilities; keep formative-only rather than duplicate primary evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_083",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "rational-decimal-provisional",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Số thập phân \\(0,25\\) bằng phân số nào?",
      "correct_option": "\\(\\frac14\\)",
      "note": "S1 keeps so-huu-ti-thap-phan as REVIEW_REQUIRED; no canonical primary until question-level reconciliation establishes a stable target.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_084",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "rational-decimal-provisional",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Phân số \\(\\frac38\\) viết dưới dạng thập phân là:",
      "correct_option": "\\(0,375\\)",
      "note": "S1 keeps so-huu-ti-thap-phan as REVIEW_REQUIRED; no canonical primary until question-level reconciliation establishes a stable target.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_085",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "rational-decimal-provisional",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Số \\(0,333\\ldots\\) bằng:",
      "correct_option": "\\(\\frac13\\)",
      "note": "S1 keeps so-huu-ti-thap-phan as REVIEW_REQUIRED; no canonical primary until question-level reconciliation establishes a stable target.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_086",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan",
        "tap-hop-so"
      ],
      "canonical_assessed_skill_candidate": "tap-hop-so",
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số nào là số hữu tỉ?",
      "correct_option": "\\(1,272727\\ldots\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_087",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "rational-decimal-provisional",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Tính \\(1,2+0,35\\).",
      "correct_option": "\\(1,55\\)",
      "note": "S1 keeps so-huu-ti-thap-phan as REVIEW_REQUIRED; no canonical primary until question-level reconciliation establishes a stable target.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_088",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "rational-decimal-provisional",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Tính \\(4,8:0,6\\).",
      "correct_option": "\\(8\\)",
      "note": "S1 keeps so-huu-ti-thap-phan as REVIEW_REQUIRED; no canonical primary until question-level reconciliation establishes a stable target.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_089",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan",
        "quy-dong-so-sanh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-so-sanh-phan-so",
      "supporting_skills": [
        "so-huu-ti-thap-phan"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Số lớn hơn giữa \\(0,7\\) và \\(\\frac23\\) là:",
      "correct_option": "\\(0,7\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_090",
      "source_file": "02-so-va-phep-tinh-v1-03.json",
      "legacy_skill_tags": [
        "so-huu-ti-thap-phan",
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "so-huu-ti-thap-phan",
        "phep-tinh-phan-so"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "mixed-decimal-fraction-operation",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Tính \\(2,5-\\frac34\\).",
      "correct_option": "\\(1,75\\)",
      "note": "Final-option MCQ combines multiple independently meaningful capabilities; keep formative-only rather than duplicate primary evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_091",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-CONVERT-091-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "\\(25\\%\\) viết dưới dạng số thập phân là:",
      "correct_option": "\\(0,25\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_092",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-CONVERT-091-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "\\(0,4\\) viết dưới dạng phần trăm là:",
      "correct_option": "\\(40\\%\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_093",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-OF-093-094-110-118",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "\\(15\\%\\) của 200 bằng:",
      "correct_option": "\\(30\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_094",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-OF-093-094-110-118",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một số bằng 40% của 250. Số đó là:",
      "correct_option": "\\(100\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_095",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "80 tăng 25% thì được:",
      "correct_option": "\\(100\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_096",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "500 giảm 20% thì còn:",
      "correct_option": "\\(400\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_097",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một món hàng 800.000đ giảm 15%. Giá mới là:",
      "correct_option": "680.000đ",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_098",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một giá trị tăng từ 120 lên 150. Tỉ lệ tăng là:",
      "correct_option": "\\(25\\%\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_099",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một món hàng giảm 15% rồi giảm tiếp 10% trên giá mới. Tổng mức giảm so với giá ban đầu là:",
      "correct_option": "\\(23,5\\%\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_100",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tăng 20% rồi giảm 20% trên giá mới, so với ban đầu kết quả:",
      "correct_option": "Giảm 4%",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_101",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Trong lớp 40 học sinh có 18 nữ. Tỉ lệ học sinh nữ là:",
      "correct_option": "\\(45\\%\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_102",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một số sau khi tăng 10% thành 220. Số ban đầu là:",
      "correct_option": "\\(200\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_103",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-ROOT-CALC-103-104",
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "\\(\\sqrt{49}\\) bằng:",
      "correct_option": "\\(7\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_104",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-ROOT-CALC-103-104",
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "\\(\\sqrt{0}\\) bằng:",
      "correct_option": "\\(0\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_105",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Số nào có căn bậc hai số học bằng 12?",
      "correct_option": "\\(144\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_106",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "So sánh \\(\\sqrt{16}\\) và 5.",
      "correct_option": "\\(\\sqrt{16}<5\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_107",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Giá trị của \\(\\sqrt{81}+\\sqrt{25}\\) là:",
      "correct_option": "\\(14\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_108",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Khẳng định nào đúng?",
      "correct_option": "\\(\\sqrt{25}=5\\)",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_109",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một bể đang có \\(\\frac35\\) dung tích nước, dùng đi \\(\\frac14\\) lượng nước đang có. Phần dung tích còn lại là:",
      "correct_option": "\\(\\frac9{20}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_110",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-OF-093-094-110-118",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một quãng đường 120 km, xe đã đi 35%. Quãng đường đã đi là:",
      "correct_option": "42 km",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_111",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so"
      ],
      "canonical_assessed_skill_candidate": "phep-tinh-phan-so",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một cuốn sách 240 trang, Minh đọc \\(\\frac38\\) số trang. Minh đã đọc:",
      "correct_option": "90 trang",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_112",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INTEGER-CONTEXT-112-113",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhiệt độ buổi sáng là \\(-3^\\circ C\\), trưa tăng 8°C. Nhiệt độ trưa là:",
      "correct_option": "\\(5^\\circ C\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_113",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "so-nguyen-phep-tinh"
      ],
      "canonical_assessed_skill_candidate": "so-nguyen-phep-tinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-INTEGER-CONTEXT-112-113",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một thang máy ở tầng 4 đi xuống 7 tầng. Nếu tầng trệt là 0, thang máy đến tầng:",
      "correct_option": "\\(-3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_114",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "ucln"
      ],
      "canonical_assessed_skill_candidate": "ucln",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-GCD-GROUP-049-050-114",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một đội có 24 nam và 36 nữ cần chia thành các nhóm giống nhau, số nhóm nhiều nhất là:",
      "correct_option": "12 nhóm",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_115",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "bcnn"
      ],
      "canonical_assessed_skill_candidate": "bcnn",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-LCM-CYCLE-056-057-115",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hai chuông reo theo chu kì 8 phút và 12 phút. Cùng reo lúc 8:00, lần tiếp theo cùng reo lúc:",
      "correct_option": "8:24",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_116",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một sản phẩm giá 1.200.000đ tăng 10%. Giá mới là:",
      "correct_option": "1.320.000đ",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_117",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "can-bac-hai"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "can-bac-hai-so-hoc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "can-bac-hai"
      ],
      "task_family_candidate": "core-support-square-root",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Một mảnh đất hình vuông có diện tích 144 m². Cạnh mảnh đất dài:",
      "correct_option": "12 m",
      "note": "S1 moves this legacy tag to Core-Support as can-bac-hai-so-hoc; no CT02 Core mastery primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_118",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": "phan-tram",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "NUM02-PERCENT-OF-093-094-110-118",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một cửa hàng bán 60% của 250 sản phẩm. Số sản phẩm đã bán là:",
      "correct_option": "150",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_119",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so",
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "phep-tinh-phan-so",
        "phan-tram"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "mixed-fraction-percent-realworld",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Một người có 600.000đ, dùng \\(\\frac25\\) số tiền rồi dùng tiếp 20% số tiền ban đầu. Số tiền còn lại là:",
      "correct_option": "240.000đ",
      "note": "Final-option MCQ combines multiple independently meaningful capabilities; keep formative-only rather than duplicate primary evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "NUM02V1_120",
      "source_file": "02-so-va-phep-tinh-v1-04.json",
      "legacy_skill_tags": [
        "phep-tinh-phan-so",
        "phan-tram"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "phep-tinh-phan-so",
        "phan-tram"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "mixed-fraction-percent-realworld",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "FORMATIVE_ONLY_NO_PRIMARY",
      "correct_option_index": 0,
      "question": "Một lớp có 48 học sinh. \\(\\frac14\\) học sinh đạt loại A, 37,5% đạt loại B. Số học sinh còn lại là:",
      "correct_option": "18",
      "note": "Final-option MCQ combines multiple independently meaningful capabilities; keep formative-only rather than duplicate primary evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    }
  ]
}

```


## Required NotebookLM output

Return exactly this compact structure.

1. `PACKET|MATH-SKILL-CORE02-S1-OVERLAY-R1-20261002|PASS`
   or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

2. `COVERAGE|120|<reviewed_count>|<revision_count>|<missing_count>`

3. If revisions exist, one line per changed item:
`FIX|<question_id>|<field>|<current>|<corrected>|<reason>`
If none:
`FIX_COUNT|0`

4. Review all 16 clone-family candidates. Return one line each:
`CLONE|<family_id>|PASS`
or
`CLONE|<family_id>|REVISE|<exact corrected membership>|<reason>`

5. Return explicit checks:
`CHECK|018|PASS`
`CHECK|028|PASS`
`CHECK|029|PASS`
`CHECK|059|PASS`
`CHECK|060|PASS`
`CHECK|069|PASS`
`CHECK|082|PASS`
`CHECK|083_090|PASS`
`CHECK|103_108_117|PASS`
`CHECK|119_120|PASS`

6. Return final count lines:
`COUNT|MAPPED_PRIMARY|103`
`COUNT|FORMATIVE_ONLY|17`
and one `COUNT|PRIMARY|<skill_id>|<count>` line for each entry in overlay.summary.primary_counts.

7. Architecture:
`ARCH_1|PASS` max one primary per MCQ  
`ARCH_2|PASS` methods/supporting/composites get no duplicate mastery  
`ARCH_3|PASS` unresolved so-huu-ti-thap-phan is not forced into canonical primary  
`ARCH_4|PASS` can-bac-hai remains Core-Support / no CT02 Core primary  
`ARCH_5|PASS` composite final-answer items may remain formative-only  
`ARCH_6|PASS` clone families are future evidence de-dup only  
`ARCH_7|PASS` legacy question content/answers/tags remain unchanged  
`ARCH_8|PASS` no runtime, Readiness credit, mastery threshold or history backfill

8. Final:
`AUTHORIZATION|CLEARED_FOR_CT02_S1_RECONCILIATION`
or
`AUTHORIZATION|BLOCKED_PENDING_REVISIONS`

Do not add prose or markdown tables outside these lines.

