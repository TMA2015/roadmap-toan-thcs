# NotebookLM source — Skill Taxonomy Phase D / CĐ04 full-bank primary-evidence overlay R1

**Packet ID:** `MATH-SKILL-CORE04-OVERLAY-R1-20260930`  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Overlay Git blob:** `badef3ac1d335ed727c1a017dd295ed8ce46298f`

## Scope

Review the full current CĐ04 bank: **132/132 questions** (`ALG04V2_001–132`). The goal is to assign at most one canonical assessed skill per question, while preserving supporting skill / method / context / metadata roles and marking composite questions formative-only when one MCQ answer cannot isolate a single skill.

This packet does **not** change any question, answer, tag, learner record, Core Readiness score or runtime counter.

## Source locks

- `04-bieu-thuc-dai-so-v2-01.json`: blob `216a464a1935bd5d1d00147e9386eb2ee224f27b` — 30 questions
- `04-bieu-thuc-dai-so-v2-02.json`: blob `8a84956d7c1bfa718e1b38943619395113068fb6` — 30 questions
- `04-bieu-thuc-dai-so-v2-03.json`: blob `42d57ec1c5a65cf331eb07d7b681b479dc203775` — 30 questions
- `04-bieu-thuc-dai-so-v2-04.json`: blob `92f879459581ac21a0bf80ddb369efbbcb07088f` — 30 questions
- `04-bieu-thuc-dai-so-v2-05.json`: blob `df7ea6d85961dc264696a0a1400820e5078d5ce5` — 12 questions

Reviewed upstream gates:
- Phase A `MATH-SKILL-TAXONOMY-39-R1-20260930`: PASS 39/39, 9/9 clone families.
- Phase B `MATH-SKILL-CODE52-R1-20260930`: PASS 52/52 codes, 55/55 occurrences, 0 revisions.
- Phase B confirmed: `tinh-phan-phoi` is METHOD_OF `nhan-bieu-thuc`; `bai-toan-thuc-te` is CONTEXT_FOR `lap-bieu-thuc`; `bo-ngoac-dau` may support `cong-tru-da-thuc` while remaining independently assessable; `bien-doi-nhieu-buoc` is PENDING task-family, not an approved counter.

## Candidate mapping summary

- 132 questions total.
- 120 questions have one canonical assessed-skill candidate.
- 12 questions `ALG04V2_099–110` are intentionally **formative-only without primary assessed skill**, because each final-output MCQ combines `bo-ngoac-dau` + `thu-gon-da-thuc` under PENDING task-family `bien-doi-nhieu-buoc`.
- No runtime or Core Readiness credit.

Primary candidate counts:
- `he-so-bac`: 7
- `nhan-biet-don-thuc`: 2
- `nhan-biet-da-thuc`: 2
- `thu-gon-da-thuc`: 17
- `hang-tu-dong-dang`: 8
- `cong-tru-da-thuc`: 14
- `nhan-bieu-thuc`: 26
- `tinh-gia-tri-bieu-thuc`: 12
- `dieu-kien-xac-dinh`: 10
- `lap-bieu-thuc`: 10
- `chia-da-thuc-cho-don-thuc`: 12

## Special item decisions to inspect carefully

- `ALG04V2_009`: keep reviewed scoped primary `nhan-biet-da-thuc` for free-term recognition.
- `ALG04V2_010`: keep reviewed scoped primary `nhan-biet-don-thuc`; legacy `he-so-bac` is metadata only for this item.
- `ALG04V2_011`: candidate primary `he-so-bac`, with `thu-gon-da-thuc` supporting because the requested answer is degree after simplification.
- `ALG04V2_012`: candidate primary `thu-gon-da-thuc`; `nhan-biet-da-thuc` metadata only.
- `ALG04V2_037–050`: `cong-tru-da-thuc` primary, `bo-ngoac-dau` supporting.
- `ALG04V2_051–076`: `nhan-bieu-thuc` primary, `tinh-phan-phoi` method.
- `ALG04V2_099–110`: no primary, formative-only composite.
- `ALG04V2_111–120`: `lap-bieu-thuc` primary, `bai-toan-thuc-te` context.
- `ALG04V2_121–132`: `chia-da-thuc-cho-don-thuc` primary.

## Clone-family candidate policy

Clone families are conservative evidence de-duplication candidates only. They do not remove practice questions and are not active in runtime.

Proposed families:
- ALG04-HESO-BAC-DONTHUC-001-004 (4)
- ALG04-HESO-BAC-DATHUC-007-008 (2)
- ALG04-DONGDANG-013-020 (8)
- ALG04-THUGON-021-036 (16)
- ALG04-CONGTRU-037-050 (14)
- ALG04-NHAN-MONOMIAL-LINEAR-051-060 (10)
- ALG04-NHAN-MONOMIAL-QUADRATIC-061-064 (4)
- ALG04-NHAN-BINOMIAL-065-076 (12)
- ALG04-GIATRI-077-088 (12)
- ALG04-DKXD-LINEAR-089-098 (10)
- ALG04-COMPOSITE-099-110 (12)
- ALG04-CHIA-DATHUC-UNIVARIATE (7)
- ALG04-CHIA-DATHUC-MULTIVARIATE (5)

Questions 111–120 are intentionally not grouped into one clone family because the modeling contexts are diverse; reviewer may propose narrower families if academically warranted.

## Full candidate overlay

```json
{
  "schema": "primary-skill-overlay-core04-phase-d-r1",
  "status": "CHATGPT_CANDIDATE_PENDING_INDEPENDENT_REVIEW",
  "as_of": "2026-09-30",
  "topic": "04-bieu-thuc-dai-so",
  "source_manifest": "docs/assets/data/practice/04-bieu-thuc-dai-so-v2.manifest.json",
  "source_files": {
    "04-bieu-thuc-dai-so-v2-01.json": {
      "blob": "216a464a1935bd5d1d00147e9386eb2ee224f27b",
      "question_count": 30
    },
    "04-bieu-thuc-dai-so-v2-02.json": {
      "blob": "8a84956d7c1bfa718e1b38943619395113068fb6",
      "question_count": 30
    },
    "04-bieu-thuc-dai-so-v2-03.json": {
      "blob": "42d57ec1c5a65cf331eb07d7b681b479dc203775",
      "question_count": 30
    },
    "04-bieu-thuc-dai-so-v2-04.json": {
      "blob": "92f879459581ac21a0bf80ddb369efbbcb07088f",
      "question_count": 30
    },
    "04-bieu-thuc-dai-so-v2-05.json": {
      "blob": "df7ea6d85961dc264696a0a1400820e5078d5ce5",
      "question_count": 12
    }
  },
  "academic_basis": {
    "phase_a": "MATH-SKILL-TAXONOMY-39-R1-20260930 PASS",
    "phase_b": "MATH-SKILL-CODE52-R1-20260930 PASS",
    "phase_c": "canonical registry/compatibility design; runtime disabled"
  },
  "rules": {
    "one_assessed_skill_max_per_question": true,
    "supporting_method_context_category_not_independent_mastery": true,
    "pending_composite_items_formative_only": true,
    "clone_family_not_multiple_independent_mastery_events": true,
    "legacy_question_content_answer_tags_immutable": true,
    "runtime_enabled": false,
    "no_history_backfill": true
  },
  "summary": {
    "questions": 132,
    "mapped_primary": 120,
    "formative_only_without_primary": 12,
    "primary_counts": {
      "he-so-bac": 7,
      "nhan-biet-don-thuc": 2,
      "nhan-biet-da-thuc": 2,
      "thu-gon-da-thuc": 17,
      "hang-tu-dong-dang": 8,
      "cong-tru-da-thuc": 14,
      "nhan-bieu-thuc": 26,
      "tinh-gia-tri-bieu-thuc": 12,
      "dieu-kien-xac-dinh": 10,
      "lap-bieu-thuc": 10,
      "chia-da-thuc-cho-don-thuc": 12
    },
    "clone_families": [
      {
        "id": "ALG04-HESO-BAC-DONTHUC-001-004",
        "count": 4,
        "ids": [
          "ALG04V2_001",
          "ALG04V2_002",
          "ALG04V2_003",
          "ALG04V2_004"
        ]
      },
      {
        "id": "ALG04-HESO-BAC-DATHUC-007-008",
        "count": 2,
        "ids": [
          "ALG04V2_007",
          "ALG04V2_008"
        ]
      },
      {
        "id": "ALG04-DONGDANG-013-020",
        "count": 8,
        "ids": [
          "ALG04V2_013",
          "ALG04V2_014",
          "ALG04V2_015",
          "ALG04V2_016",
          "ALG04V2_017",
          "ALG04V2_018",
          "ALG04V2_019",
          "ALG04V2_020"
        ]
      },
      {
        "id": "ALG04-THUGON-021-036",
        "count": 16,
        "ids": [
          "ALG04V2_021",
          "ALG04V2_022",
          "ALG04V2_023",
          "ALG04V2_024",
          "ALG04V2_025",
          "ALG04V2_026",
          "ALG04V2_027",
          "ALG04V2_028",
          "ALG04V2_029",
          "ALG04V2_030",
          "ALG04V2_031",
          "ALG04V2_032",
          "ALG04V2_033",
          "ALG04V2_034",
          "ALG04V2_035",
          "ALG04V2_036"
        ]
      },
      {
        "id": "ALG04-CONGTRU-037-050",
        "count": 14,
        "ids": [
          "ALG04V2_037",
          "ALG04V2_038",
          "ALG04V2_039",
          "ALG04V2_040",
          "ALG04V2_041",
          "ALG04V2_042",
          "ALG04V2_043",
          "ALG04V2_044",
          "ALG04V2_045",
          "ALG04V2_046",
          "ALG04V2_047",
          "ALG04V2_048",
          "ALG04V2_049",
          "ALG04V2_050"
        ]
      },
      {
        "id": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
        "count": 10,
        "ids": [
          "ALG04V2_051",
          "ALG04V2_052",
          "ALG04V2_053",
          "ALG04V2_054",
          "ALG04V2_055",
          "ALG04V2_056",
          "ALG04V2_057",
          "ALG04V2_058",
          "ALG04V2_059",
          "ALG04V2_060"
        ]
      },
      {
        "id": "ALG04-NHAN-MONOMIAL-QUADRATIC-061-064",
        "count": 4,
        "ids": [
          "ALG04V2_061",
          "ALG04V2_062",
          "ALG04V2_063",
          "ALG04V2_064"
        ]
      },
      {
        "id": "ALG04-NHAN-BINOMIAL-065-076",
        "count": 12,
        "ids": [
          "ALG04V2_065",
          "ALG04V2_066",
          "ALG04V2_067",
          "ALG04V2_068",
          "ALG04V2_069",
          "ALG04V2_070",
          "ALG04V2_071",
          "ALG04V2_072",
          "ALG04V2_073",
          "ALG04V2_074",
          "ALG04V2_075",
          "ALG04V2_076"
        ]
      },
      {
        "id": "ALG04-GIATRI-077-088",
        "count": 12,
        "ids": [
          "ALG04V2_077",
          "ALG04V2_078",
          "ALG04V2_079",
          "ALG04V2_080",
          "ALG04V2_081",
          "ALG04V2_082",
          "ALG04V2_083",
          "ALG04V2_084",
          "ALG04V2_085",
          "ALG04V2_086",
          "ALG04V2_087",
          "ALG04V2_088"
        ]
      },
      {
        "id": "ALG04-DKXD-LINEAR-089-098",
        "count": 10,
        "ids": [
          "ALG04V2_089",
          "ALG04V2_090",
          "ALG04V2_091",
          "ALG04V2_092",
          "ALG04V2_093",
          "ALG04V2_094",
          "ALG04V2_095",
          "ALG04V2_096",
          "ALG04V2_097",
          "ALG04V2_098"
        ]
      },
      {
        "id": "ALG04-COMPOSITE-099-110",
        "count": 12,
        "ids": [
          "ALG04V2_099",
          "ALG04V2_100",
          "ALG04V2_101",
          "ALG04V2_102",
          "ALG04V2_103",
          "ALG04V2_104",
          "ALG04V2_105",
          "ALG04V2_106",
          "ALG04V2_107",
          "ALG04V2_108",
          "ALG04V2_109",
          "ALG04V2_110"
        ]
      },
      {
        "id": "ALG04-CHIA-DATHUC-UNIVARIATE",
        "count": 7,
        "ids": [
          "ALG04V2_121",
          "ALG04V2_122",
          "ALG04V2_124",
          "ALG04V2_126",
          "ALG04V2_127",
          "ALG04V2_131",
          "ALG04V2_132"
        ]
      },
      {
        "id": "ALG04-CHIA-DATHUC-MULTIVARIATE",
        "count": 5,
        "ids": [
          "ALG04V2_123",
          "ALG04V2_125",
          "ALG04V2_128",
          "ALG04V2_129",
          "ALG04V2_130"
        ]
      }
    ],
    "runtime_enabled": 0
  },
  "items": [
    {
      "question_id": "ALG04V2_001",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-don-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DONTHUC-001-004",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Trong đơn thức \\(- 5 x^{2} y\\), hệ số là bao nhiêu?",
      "correct_option": "-5",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_002",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-don-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DONTHUC-001-004",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Trong đơn thức \\(3 x^{2} y^{3}\\), bậc là bao nhiêu?",
      "correct_option": "5",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_003",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-don-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DONTHUC-001-004",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Trong đơn thức \\(- 7 a^{4} b^{2}\\), bậc là bao nhiêu?",
      "correct_option": "6",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_004",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-don-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DONTHUC-001-004",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Trong đơn thức \\(9 m n^{3}\\), hệ số là bao nhiêu?",
      "correct_option": "9",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_005",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-don-thuc",
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
      "question": "Biểu thức nào sau đây là đơn thức?",
      "correct_option": "\\(- 4 x^{2} y\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_006",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-da-thuc",
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
      "question": "Biểu thức nào sau đây là đa thức một biến \\(x\\)?",
      "correct_option": "\\(3 x^{3} - 2 x + 5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_007",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DATHUC-007-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đa thức \\(P(x)=4x^5-3x^2+x-7\\) có bậc bằng bao nhiêu?",
      "correct_option": "5",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_008",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "nhan-biet-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-HESO-BAC-DATHUC-007-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hệ số của \\(x^3\\) trong \\(2x^4-6x^3+x-1\\) là gì?",
      "correct_option": "-6",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_009",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-da-thuc",
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
      "question": "Hạng tử tự do của \\(5x^2-4x+11\\) là gì?",
      "correct_option": "11",
      "note": "Preserve prior reviewed scoped-primary decision: free-term recognition stays under nhan-biet-da-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_010",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-don-thuc",
        "he-so-bac"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "he-so-bac"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phần biến của đơn thức \\(-8a^2b^5\\) là gì?",
      "correct_option": "\\(a^2b^5\\)",
      "note": "Preserve prior reviewed decision: he-so-bac is not assessed by the variable-part question.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_011",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc",
        "he-so-bac",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": "he-so-bac",
      "supporting_skills": [
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "nhan-biet-da-thuc"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Sau khi thu gọn, đa thức \\(3x^4-x^4+2x^2-2x^2+7\\) có bậc bằng bao nhiêu?",
      "correct_option": "4",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_012",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "nhan-biet-da-thuc",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [
        "nhan-biet-da-thuc"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Sau khi thu gọn, biểu thức \\(5x^2-5x^2+3x-3x+9\\) bằng gì?",
      "correct_option": "9",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_013",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(3 x^{2} y\\)?",
      "correct_option": "\\(- 2 x^{2} y\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_014",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(- 4 a b^{3}\\)?",
      "correct_option": "\\(9 a b^{3}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_015",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(5 m^{2} n^{2}\\)?",
      "correct_option": "\\(- m^{2} n^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_016",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(- 7 x y^{4}\\)?",
      "correct_option": "\\(3 x y^{4}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_017",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(2 a^{3}\\)?",
      "correct_option": "\\(- 5 a^{3}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_018",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(x^{2} y^{2}\\)?",
      "correct_option": "\\(- 8 x^{2} y^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_019",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(- 3 p q^{2}\\)?",
      "correct_option": "\\(6 p q^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_020",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "hang-tu-dong-dang",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "ALG04-DONGDANG-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Hạng tử nào đồng dạng với \\(4 m n\\)?",
      "correct_option": "\\(- 7 m n\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_021",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(3x^2 + 4x + 1 - x^2 - 2x\\).",
      "correct_option": "\\(2 x^{2} + 2 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_022",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(2x^2 - 2x - 3 + 5x^2 + 2x\\).",
      "correct_option": "\\(7 x^{2} - 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_023",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(-4x^2 + 3x + 1 + x^2 + x\\).",
      "correct_option": "\\(- 3 x^{2} + 4 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_024",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(4x^2 + 4x + 3 + x^2 + 3x\\).",
      "correct_option": "\\(5 x^{2} + 7 x + 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_025",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(-4x^2 - 3x - 2 + 3x^2 + 4x\\).",
      "correct_option": "\\(- x^{2} + x - 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_026",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(3x^2 - 2x + 3 + 4x^2 + 3x\\).",
      "correct_option": "\\(7 x^{2} + x + 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_027",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(6x^2 + 3x + 3 + 2x^2 + 3x\\).",
      "correct_option": "\\(8 x^{2} + 6 x + 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_028",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(-4x^2 + 3x + 3 + 3x^2 + 2x\\).",
      "correct_option": "\\(- x^{2} + 5 x + 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_029",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(2x^2 - x + 1 + 3x^2 + 3x\\).",
      "correct_option": "\\(5 x^{2} + 2 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_030",
      "source_file": "04-bieu-thuc-dai-so-v2-01.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(5x^2 + 2x - 3 + 4x^2 + 2x\\).",
      "correct_option": "\\(9 x^{2} + 4 x - 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_031",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(4x^2 + 4x + 3 - 3x^2 + 3x\\).",
      "correct_option": "\\(x^{2} + 7 x + 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_032",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(-3x^2 + 5x - 3 + x^2 - 2x\\).",
      "correct_option": "\\(- 2 x^{2} + 3 x - 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_033",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(6x^2 - 2x - 2 + x^2 + x\\).",
      "correct_option": "\\(7 x^{2} - x - 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_034",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(2x^2 + 4x + 1 + 4x^2 - 2x\\).",
      "correct_option": "\\(6 x^{2} + 2 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_035",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(-2x^2 + x + 2 - 3x^2 - x\\).",
      "correct_option": "\\(2 - 5 x^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_036",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "thu-gon-da-thuc",
        "hang-tu-dong-dang"
      ],
      "canonical_assessed_skill_candidate": "thu-gon-da-thuc",
      "supporting_skills": [
        "hang-tu-dong-dang"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-THUGON-021-036",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thu gọn \\(5x^2 + 5x - 1 - 2x^2 + 4x\\).",
      "correct_option": "\\(3 x^{2} + 9 x - 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_037",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((5x + 2) - (-x + 2)\\).",
      "correct_option": "\\(6 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_038",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x + 1) + (-x - 1)\\).",
      "correct_option": "\\(3 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_039",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x - 3) - (x + 2)\\).",
      "correct_option": "\\(3 x - 5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_040",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((3x + 4) + (-2x + 2)\\).",
      "correct_option": "\\(x + 6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_041",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((2x + 2) - (2x + 2)\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_042",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((5x - 3) + (-2x + 3)\\).",
      "correct_option": "\\(3 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_043",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x - 1) - (4x - 1)\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_044",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((3x + 3) + (x + 1)\\).",
      "correct_option": "\\(4 x + 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_045",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((-2x - 1) - (x - 2)\\).",
      "correct_option": "\\(1 - 3 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_046",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x - 2) + (3x + 1)\\).",
      "correct_option": "\\(7 x - 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_047",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((5x + 2) - (x - 2)\\).",
      "correct_option": "\\(4 x + 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_048",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((-2x + 4) + (x + 3)\\).",
      "correct_option": "\\(7 - x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_049",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x - 1) - (-2x - 1)\\).",
      "correct_option": "\\(6 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_050",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "cong-tru-da-thuc",
        "bo-ngoac-dau"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-da-thuc",
      "supporting_skills": [
        "bo-ngoac-dau"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CONGTRU-037-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\((4x + 3) + (4x - 2)\\).",
      "correct_option": "\\(8 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_051",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(4x(x + 3)\\).",
      "correct_option": "\\(4 x^{2} + 12 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_052",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(4x(x + 2)\\).",
      "correct_option": "\\(4 x^{2} + 8 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_053",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-3x(-x + 1)\\).",
      "correct_option": "\\(3 x^{2} - 3 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_054",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-2x(x + 4)\\).",
      "correct_option": "\\(- 2 x^{2} - 8 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_055",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-3x(2x - 2)\\).",
      "correct_option": "\\(- 6 x^{2} + 6 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_056",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-3x(x - 2)\\).",
      "correct_option": "\\(- 3 x^{2} + 6 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_057",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-4x(2x + 3)\\).",
      "correct_option": "\\(- 8 x^{2} - 12 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_058",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(3x(-2x - 1)\\).",
      "correct_option": "\\(- 6 x^{2} - 3 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_059",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(2x(2x - 3)\\).",
      "correct_option": "\\(4 x^{2} - 6 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_060",
      "source_file": "04-bieu-thuc-dai-so-v2-02.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-LINEAR-051-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-2x(2x + 4)\\).",
      "correct_option": "\\(- 4 x^{2} - 8 x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_061",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-QUADRATIC-061-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-2x^2(2x + 2)\\).",
      "correct_option": "\\(- 4 x^{3} - 4 x^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_062",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-QUADRATIC-061-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(2x^2(2x - 3)\\).",
      "correct_option": "\\(4 x^{3} - 6 x^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_063",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-QUADRATIC-061-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(-2x^2(2x - 1)\\).",
      "correct_option": "\\(- 4 x^{3} + 2 x^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_064",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-MONOMIAL-QUADRATIC-061-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\(3x^2(2x - 2)\\).",
      "correct_option": "\\(6 x^{3} - 6 x^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_065",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((x - 1)(x - 1)\\).",
      "correct_option": "\\(x^{2} - 2 x + 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_066",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((2x + 4)(x + 3)\\).",
      "correct_option": "\\(2 x^{2} + 10 x + 12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_067",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((2x + 4)(2x - 1)\\).",
      "correct_option": "\\(4 x^{2} + 6 x - 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_068",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((3x + 2)(x + 4)\\).",
      "correct_option": "\\(3 x^{2} + 14 x + 8\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_069",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((3x + 4)(2x + 3)\\).",
      "correct_option": "\\(6 x^{2} + 17 x + 12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_070",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((3x - 3)(x + 4)\\).",
      "correct_option": "\\(3 x^{2} + 9 x - 12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_071",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((x - 2)(2x - 3)\\).",
      "correct_option": "\\(2 x^{2} - 7 x + 6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_072",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((2x - 2)(x + 2)\\).",
      "correct_option": "\\(2 x^{2} + 2 x - 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_073",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((3x - 3)(3x - 3)\\).",
      "correct_option": "\\(9 x^{2} - 18 x + 9\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_074",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((x + 3)(3x - 2)\\).",
      "correct_option": "\\(3 x^{2} + 7 x - 6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_075",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((x - 2)(3x + 2)\\).",
      "correct_option": "\\(3 x^{2} - 4 x - 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_076",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "nhan-bieu-thuc",
        "tinh-phan-phoi"
      ],
      "canonical_assessed_skill_candidate": "nhan-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [
        "tinh-phan-phoi"
      ],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-NHAN-BINOMIAL-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Khai triển \\((x - 1)(3x + 4)\\).",
      "correct_option": "\\(3 x^{2} + x - 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_077",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(2x^2 + x + 1\\) tại \\(x=1\\).",
      "correct_option": "\\(4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_078",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(x^2 + x - 2\\) tại \\(x=1\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_079",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-2x^2 - 3x + 3\\) tại \\(x=-2\\).",
      "correct_option": "\\(1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_080",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-2x^2 + 2x\\) tại \\(x=-3\\).",
      "correct_option": "\\(-24\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_081",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-2x^2 + 2x\\) tại \\(x=3\\).",
      "correct_option": "\\(-12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_082",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(3x^2 - 3x + 1\\) tại \\(x=-2\\).",
      "correct_option": "\\(19\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_083",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-x^2 - 2x + 3\\) tại \\(x=4\\).",
      "correct_option": "\\(-21\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_084",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-x^2 + x\\) tại \\(x=3\\).",
      "correct_option": "\\(-6\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_085",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(2x^2 - 2x - 1\\) tại \\(x=1\\).",
      "correct_option": "\\(-1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_086",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-2x^2 + 3x - 1\\) tại \\(x=1\\).",
      "correct_option": "\\(0\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_087",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(-x^2 - 3x + 1\\) tại \\(x=-2\\).",
      "correct_option": "\\(3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_088",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-GIATRI-077-088",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(3x^2 + 3x + 2\\) tại \\(x=-3\\).",
      "correct_option": "\\(20\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_089",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{x - 2}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_090",
      "source_file": "04-bieu-thuc-dai-so-v2-03.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{2x + 6}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne -3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_091",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{3x - 9}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_092",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{4x + 8}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne -2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_093",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{5x - 10}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_094",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{2x - 4}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_095",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{3x + 6}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne -2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_096",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{6x - 18}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_097",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{7x + 14}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne -2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_098",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "ALG04-DKXD-LINEAR-089-098",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Biểu thức \\(\\dfrac{x+1}{4x - 12}\\) xác định khi nào?",
      "correct_option": "\\(x\\ne 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_099",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(-2(-x + 2) + 2(-2x - 1)\\).",
      "correct_option": "\\(- 2 x - 6\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_100",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(2(2x - 1) + 3(2x - 1)\\).",
      "correct_option": "\\(10 x - 5\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_101",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(3(-x - 3) - 2(x - 1)\\).",
      "correct_option": "\\(- 5 x - 7\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_102",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(-3(-x - 2) + 4(2x - 1)\\).",
      "correct_option": "\\(11 x + 2\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_103",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(3(x + 3) + 3(2x + 1)\\).",
      "correct_option": "\\(9 x + 12\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_104",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(2(-2x - 1) + 4(-x - 2)\\).",
      "correct_option": "\\(- 8 x - 10\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_105",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(3(3x - 2) - 2(x - 2)\\).",
      "correct_option": "\\(7 x - 2\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_106",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(-3(-2x - 1) + 3(3x - 3)\\).",
      "correct_option": "\\(15 x - 6\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_107",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(3(-2x - 3) - 2(-x - 2)\\).",
      "correct_option": "\\(- 4 x - 5\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_108",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(-2(x - 1) + 4(3x + 2)\\).",
      "correct_option": "\\(10 x + 10\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_109",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(2(-x + 3) + 2(-x - 3)\\).",
      "correct_option": "\\(- 4 x\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_110",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bien-doi-nhieu-buoc",
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "supporting_skills": [
        "bo-ngoac-dau",
        "thu-gon-da-thuc"
      ],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": "bien-doi-nhieu-buoc",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-COMPOSITE-099-110",
      "credit_mode_candidate": "FORMATIVE_ONLY_COMPOSITE",
      "correct_option_index": 0,
      "question": "Rút gọn \\(4(-x - 1) + 3(2x + 2)\\).",
      "correct_option": "\\(2 x + 2\\)",
      "note": "Phase B keeps bien-doi-nhieu-buoc PENDING; final-output MCQ cannot isolate which subskill produced an error.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_111",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một hình chữ nhật (với \\(x>1\\)) có chiều dài \\(2x+3\\), chiều rộng \\(x-1\\). Chu vi là biểu thức nào?",
      "correct_option": "\\(6x+4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_112",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một hình chữ nhật có chiều dài \\(x+5\\), chiều rộng \\(x+2\\). Diện tích là biểu thức nào sau khi khai triển?",
      "correct_option": "\\(x^2+7x+10\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_113",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mỗi quyển vở giá \\(x\\) nghìn đồng. Mua 5 quyển và thêm một cây bút 12 nghìn đồng thì tổng tiền là:",
      "correct_option": "\\(5x+12\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_114",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một số có chữ số hàng chục là \\(a\\), hàng đơn vị là \\(b\\). Số đó được biểu diễn bởi:",
      "correct_option": "\\(10a+b\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_115",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tuổi của An là \\(x\\). Bình hơn An 4 tuổi. Tổng số tuổi của hai bạn là:",
      "correct_option": "\\(2x+4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_116",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Với \\(x>1\\), một tam giác có ba cạnh lần lượt \\(x+1\\), \\(2x\\), \\(x+3\\). Chu vi là:",
      "correct_option": "\\(4x+4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_117",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Với \\(x\\ge20\\), một cửa hàng giảm 20 nghìn đồng cho món hàng giá \\(x\\) nghìn đồng. Mua 3 món sau giảm có tổng giá:",
      "correct_option": "\\(3x-60\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_118",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một xe đi trong 3 giờ với vận tốc \\(x+5\\) km/h. Quãng đường đi được là:",
      "correct_option": "\\(3x+15\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_119",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Một mảnh vườn hình vuông có cạnh \\(x+2\\). Diện tích sau khi khai triển là:",
      "correct_option": "\\(x^2+4x+4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_120",
      "source_file": "04-bieu-thuc-dai-so-v2-04.json",
      "legacy_skill_tags": [
        "bai-toan-thuc-te",
        "lap-bieu-thuc"
      ],
      "canonical_assessed_skill_candidate": "lap-bieu-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [
        "bai-toan-thuc-te"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "building_complete_model",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Có \\(x\\) học sinh, mỗi học sinh được phát 3 quyển vở và lớp được phát thêm 5 quyển dự phòng. Tổng số vở là:",
      "correct_option": "\\(3x+5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_121",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((6x^3-3x^2):3x\\), với \\(x\\ne0\\).",
      "correct_option": "\\(2x^2-x\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_122",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((8x^2+4x):4x\\), với \\(x\\ne0\\).",
      "correct_option": "\\(2x+1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_123",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-MULTIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((12x^3y-6x^2y^2+3xy):(3xy)\\), với \\(xy\\ne 0\\).",
      "correct_option": "\\(4x^2-2xy+1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_124",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((-6x^3+9x^2):(-3x^2)\\), với \\(x\\ne0\\).",
      "correct_option": "\\(2x-3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_125",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-MULTIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((15a^2b-10ab^2):(5ab)\\), với \\(ab\\ne 0\\).",
      "correct_option": "\\(3a-2b\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_126",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((x^3+x^2):x^2\\), với \\(x\\ne0\\).",
      "correct_option": "\\(x+1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_127",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((4x^4-8x^2):(4x^2)\\), với \\(x\\ne0\\).",
      "correct_option": "\\(x^2-2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_128",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-MULTIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((9m^3n^2+3m^2n):(3m^2n)\\), với \\(mn\\ne 0\\).",
      "correct_option": "\\(3mn+1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_129",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-MULTIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((2x^2y+4xy^2):(2xy)\\), với \\(xy\\ne 0\\).",
      "correct_option": "\\(x+2y\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_130",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-MULTIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((a^3b^2-a^2b^3):(a^2b^2)\\), với \\(ab\\ne 0\\).",
      "correct_option": "\\(a-b\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_131",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((6x^3-12x^2+18x):(6x)\\), với \\(x\\ne0\\).",
      "correct_option": "\\(x^2-2x+3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "ALG04V2_132",
      "source_file": "04-bieu-thuc-dai-so-v2-05.json",
      "legacy_skill_tags": [
        "chia-da-thuc-cho-don-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-da-thuc-cho-don-thuc",
      "supporting_skills": [],
      "method_tags": [],
      "context_tags": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "ALG04-CHIA-DATHUC-UNIVARIATE",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Thực hiện \\((x^3-4x):x\\), với \\(x\\ne0\\).",
      "correct_option": "\\(x^2-4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    }
  ]
}

```

## Required independent review

Review **132/132 question mappings** and all 13 clone-family candidates.

For every question verify:
1. at most one assessed canonical skill;
2. assessed skill matches the requested output, not merely every method/tag involved;
3. supporting/method/context/metadata roles are appropriate;
4. `observable_evidence_class` matches what one MCQ answer can establish;
5. composite/PENDING items are not silently turned into mastery evidence;
6. clone family is not too broad or too narrow;
7. legacy tags remain metadata and are not retroactively reinterpreted.

Return:
- Packet ID + verdict `PASS`, `REVISIONS_REQUIRED`, or `INSUFFICIENT_EVIDENCE`.
- Coverage 132/132, or list missing IDs.
- Revision table only: ID | field | current | corrected | reason. If none, say 0 revisions.
- Clone-family table for all 13 proposed families: PASS/REVISE + corrected membership if needed.
- Explicit confirmation on `ALG04V2_009`, `010`, `011`, `012`, and `099–110`.
- Final counts by canonical assessed skill + formative-only count.
- Explicit confirmation: no runtime activation, no legacy tag rewrite, no history backfill/regrade, no mastery threshold.
