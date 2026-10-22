# NotebookLM source — Skill Taxonomy Phase D / CĐ06 full-bank primary-evidence overlay R1

**Packet ID:** `MATH-SKILL-CORE06-OVERLAY-R1-20260930`  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Overlay Git blob:** `a64ec780b62ef6fd40668eb4bbad331024b470aa`

## Scope

Review the full current CĐ06 bank: **120/120 questions** (`FAC06V1_001–120`). The goal is to assign at most one canonical assessed skill per question, while preserving supporting/category/task metadata and keeping PENDING/application/proof-like items formative-only when one MCQ response cannot isolate the intended competency.

This packet does **not** change question content, answer keys, legacy tags, learner history, Core Readiness or runtime counters.

## Source locks

- `06-phan-tich-da-thuc-v1-01.json`: blob `1c2dd47977aa016cd24ce07d64215c213641f27f`
- `06-phan-tich-da-thuc-v1-02.json`: blob `fb9459c3728f2679a3f5eb74f14a6df35be9f63d`
- `06-phan-tich-da-thuc-v1-03.json`: blob `ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457`
- `06-phan-tich-da-thuc-v1-04.json`: blob `281e90b8c791d3047c4c0413a2fea58958bd2323`

Reviewed upstream gates:
- Phase A `MATH-SKILL-TAXONOMY-39-R1-20260930`: PASS 39/39, 9/9 clone families.
- Phase B `MATH-SKILL-CODE52-R1-20260930`: PASS 52/52 codes, 55/55 occurrences, 0 revisions.
- CĐ04 full-bank overlay: PASS 132/132.
- CĐ05 full-bank overlay: PASS 120/120, 21/21 clone families.

## Candidate mapping summary

- 120 questions total.
- 104 questions have one canonical assessed-skill candidate.
- 16 questions intentionally have **no primary assessed skill**:
  - `FAC06V1_093–100`: `kiem-tra-phan-tich` stays PENDING task-family; recognition only.
  - `FAC06V1_113–116`: application/divisibility argument recognition; written proof evidence required.
  - `FAC06V1_117–120`: final numeric answers only; method use is not observable.
- No runtime or Core Readiness credit.

Primary candidate counts:
- `nhan-tu-chung`: 12
- `doi-dau-nhan-tu-chung`: 8
- `hieu-hai-binh-phuong`: 12
- `binh-phuong-hoan-chinh`: 10
- `tong-hai-lap-phuong`: 4
- `hieu-hai-lap-phuong`: 6
- `nhom-hang-tu`: 12
- `tach-hang-tu-giua`: 12
- `phan-tich-da-thuc-hoan-toan`: 16
- `giai-pt-bang-nhan-tu`: 12

## Special decisions to inspect carefully

- `FAC06V1_013–020`: primary `doi-dau-nhan-tu-chung`, supporting `nhan-tu-chung`.
- `FAC06V1_043,049,051,052`: primary `tong-hai-lap-phuong`; broad legacy `tong-hieu-lap-phuong` metadata-only.
- `FAC06V1_044–048,050`: primary `hieu-hai-lap-phuong`; broad legacy `tong-hieu-lap-phuong` metadata-only.
- `FAC06V1_077–092`: primary candidate `phan-tich-da-thuc-hoan-toan` exactly as Phase A/B approved, but credit remains `FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED`.
- `FAC06V1_093–100`: no primary; `FORMATIVE_ONLY_PENDING_TASK_FAMILY`, `MCQ_RECOGNITION_ONLY`.
- `FAC06V1_101–112`: primary `giai-pt-bang-nhan-tu`; observable evidence is only `MCQ_FINAL_ANSWER_ONLY`, so correct answer is evidence, not mastery.
- `FAC06V1_113–116`: no primary; `MCQ_ARGUMENT_RECOGNITION_ONLY`; written divisibility proof required.
- `FAC06V1_117–120`: no primary; `MCQ_FINAL_ANSWER_ONLY`; difference-of-squares method is not observable.

## Clone-family candidates

17 proposed families:
- FAC06-NHAN-TU-CHUNG-001-012
- FAC06-DOI-DAU-NTC-013-020
- FAC06-HIEU-HAI-BP-021-032
- FAC06-BP-HOANCHINH-033-042
- FAC06-TONG-HAI-LP-043-049-051-052
- FAC06-HIEU-HAI-LP-044-050
- FAC06-NHOM-HANG-TU-053-064
- FAC06-TACH-HANG-TU-GIUA-065-076
- FAC06-COMPLETE-DIFFSQ-077-081-085-089
- FAC06-COMPLETE-PERFECTSQ-078-082-086-090
- FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091
- FAC06-COMPLETE-QUADRATIC-080-084-088-092
- FAC06-CHECK-FACTOR-093-100
- FAC06-EQ-COMMON-FACTOR-101-107-111
- FAC06-EQ-MONIC-QUADRATIC-102-112
- FAC06-DIVISIBILITY-113-116
- FAC06-DIFFSQ-NUMERIC-117-120

The four `FAC06-COMPLETE-...` families and the two application families 113–116 / 117–120 were already independently accepted in Phase A; re-check their use inside this full-bank overlay.

## Full candidate overlay

```json
{
  "schema": "primary-skill-overlay-core06-phase-d-r1",
  "status": "CHATGPT_CANDIDATE_PENDING_INDEPENDENT_REVIEW",
  "as_of": "2026-09-30",
  "topic": "06-phan-tich-da-thuc",
  "source_files": {
    "06-phan-tich-da-thuc-v1-01.json": {
      "blob": "1c2dd47977aa016cd24ce07d64215c213641f27f",
      "question_count": 30
    },
    "06-phan-tich-da-thuc-v1-02.json": {
      "blob": "fb9459c3728f2679a3f5eb74f14a6df35be9f63d",
      "question_count": 30
    },
    "06-phan-tich-da-thuc-v1-03.json": {
      "blob": "ce11cc3aa3e9e7511cbe3ccd06af703ec0bef457",
      "question_count": 30
    },
    "06-phan-tich-da-thuc-v1-04.json": {
      "blob": "281e90b8c791d3047c4c0413a2fea58958bd2323",
      "question_count": 30
    }
  },
  "academic_basis": {
    "phase_a": "MATH-SKILL-TAXONOMY-39-R1-20260930 PASS",
    "phase_b": "MATH-SKILL-CODE52-R1-20260930 PASS",
    "core04": "MATH-SKILL-CORE04-OVERLAY-R1-20260930 PASS",
    "core05": "MATH-SKILL-CORE05-OVERLAY-R1-20260930 PASS"
  },
  "rules": {
    "one_assessed_skill_max_per_question": true,
    "pending_task_or_parent_category_not_independent_mastery": true,
    "approved_pending_output_skill_can_be_primary_but_remains_formative_until_stepwise_evidence": true,
    "clone_family_not_multiple_independent_mastery_events": true,
    "legacy_question_content_answer_tags_immutable": true,
    "runtime_enabled": false,
    "no_history_backfill": true
  },
  "summary": {
    "questions": 120,
    "mapped_primary": 104,
    "formative_only_without_primary": 16,
    "primary_counts": {
      "nhan-tu-chung": 12,
      "doi-dau-nhan-tu-chung": 8,
      "hieu-hai-binh-phuong": 12,
      "binh-phuong-hoan-chinh": 10,
      "tong-hai-lap-phuong": 4,
      "hieu-hai-lap-phuong": 6,
      "nhom-hang-tu": 12,
      "tach-hang-tu-giua": 12,
      "phan-tich-da-thuc-hoan-toan": 16,
      "giai-pt-bang-nhan-tu": 12
    },
    "clone_families": [
      {
        "id": "FAC06-NHAN-TU-CHUNG-001-012",
        "count": 12,
        "ids": [
          "FAC06V1_001",
          "FAC06V1_002",
          "FAC06V1_003",
          "FAC06V1_004",
          "FAC06V1_005",
          "FAC06V1_006",
          "FAC06V1_007",
          "FAC06V1_008",
          "FAC06V1_009",
          "FAC06V1_010",
          "FAC06V1_011",
          "FAC06V1_012"
        ]
      },
      {
        "id": "FAC06-DOI-DAU-NTC-013-020",
        "count": 8,
        "ids": [
          "FAC06V1_013",
          "FAC06V1_014",
          "FAC06V1_015",
          "FAC06V1_016",
          "FAC06V1_017",
          "FAC06V1_018",
          "FAC06V1_019",
          "FAC06V1_020"
        ]
      },
      {
        "id": "FAC06-HIEU-HAI-BP-021-032",
        "count": 12,
        "ids": [
          "FAC06V1_021",
          "FAC06V1_022",
          "FAC06V1_023",
          "FAC06V1_024",
          "FAC06V1_025",
          "FAC06V1_026",
          "FAC06V1_027",
          "FAC06V1_028",
          "FAC06V1_029",
          "FAC06V1_030",
          "FAC06V1_031",
          "FAC06V1_032"
        ]
      },
      {
        "id": "FAC06-BP-HOANCHINH-033-042",
        "count": 10,
        "ids": [
          "FAC06V1_033",
          "FAC06V1_034",
          "FAC06V1_035",
          "FAC06V1_036",
          "FAC06V1_037",
          "FAC06V1_038",
          "FAC06V1_039",
          "FAC06V1_040",
          "FAC06V1_041",
          "FAC06V1_042"
        ]
      },
      {
        "id": "FAC06-TONG-HAI-LP-043-049-051-052",
        "count": 4,
        "ids": [
          "FAC06V1_043",
          "FAC06V1_049",
          "FAC06V1_051",
          "FAC06V1_052"
        ]
      },
      {
        "id": "FAC06-HIEU-HAI-LP-044-050",
        "count": 6,
        "ids": [
          "FAC06V1_044",
          "FAC06V1_045",
          "FAC06V1_046",
          "FAC06V1_047",
          "FAC06V1_048",
          "FAC06V1_050"
        ]
      },
      {
        "id": "FAC06-NHOM-HANG-TU-053-064",
        "count": 12,
        "ids": [
          "FAC06V1_053",
          "FAC06V1_054",
          "FAC06V1_055",
          "FAC06V1_056",
          "FAC06V1_057",
          "FAC06V1_058",
          "FAC06V1_059",
          "FAC06V1_060",
          "FAC06V1_061",
          "FAC06V1_062",
          "FAC06V1_063",
          "FAC06V1_064"
        ]
      },
      {
        "id": "FAC06-TACH-HANG-TU-GIUA-065-076",
        "count": 12,
        "ids": [
          "FAC06V1_065",
          "FAC06V1_066",
          "FAC06V1_067",
          "FAC06V1_068",
          "FAC06V1_069",
          "FAC06V1_070",
          "FAC06V1_071",
          "FAC06V1_072",
          "FAC06V1_073",
          "FAC06V1_074",
          "FAC06V1_075",
          "FAC06V1_076"
        ]
      },
      {
        "id": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
        "count": 4,
        "ids": [
          "FAC06V1_077",
          "FAC06V1_081",
          "FAC06V1_085",
          "FAC06V1_089"
        ]
      },
      {
        "id": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
        "count": 4,
        "ids": [
          "FAC06V1_078",
          "FAC06V1_082",
          "FAC06V1_086",
          "FAC06V1_090"
        ]
      },
      {
        "id": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
        "count": 4,
        "ids": [
          "FAC06V1_079",
          "FAC06V1_083",
          "FAC06V1_087",
          "FAC06V1_091"
        ]
      },
      {
        "id": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
        "count": 4,
        "ids": [
          "FAC06V1_080",
          "FAC06V1_084",
          "FAC06V1_088",
          "FAC06V1_092"
        ]
      },
      {
        "id": "FAC06-CHECK-FACTOR-093-100",
        "count": 8,
        "ids": [
          "FAC06V1_093",
          "FAC06V1_094",
          "FAC06V1_095",
          "FAC06V1_096",
          "FAC06V1_097",
          "FAC06V1_098",
          "FAC06V1_099",
          "FAC06V1_100"
        ]
      },
      {
        "id": "FAC06-EQ-COMMON-FACTOR-101-107-111",
        "count": 3,
        "ids": [
          "FAC06V1_101",
          "FAC06V1_107",
          "FAC06V1_111"
        ]
      },
      {
        "id": "FAC06-EQ-MONIC-QUADRATIC-102-112",
        "count": 9,
        "ids": [
          "FAC06V1_102",
          "FAC06V1_103",
          "FAC06V1_104",
          "FAC06V1_105",
          "FAC06V1_106",
          "FAC06V1_108",
          "FAC06V1_109",
          "FAC06V1_110",
          "FAC06V1_112"
        ]
      },
      {
        "id": "FAC06-DIVISIBILITY-113-116",
        "count": 4,
        "ids": [
          "FAC06V1_113",
          "FAC06V1_114",
          "FAC06V1_115",
          "FAC06V1_116"
        ]
      },
      {
        "id": "FAC06-DIFFSQ-NUMERIC-117-120",
        "count": 4,
        "ids": [
          "FAC06V1_117",
          "FAC06V1_118",
          "FAC06V1_119",
          "FAC06V1_120"
        ]
      }
    ],
    "runtime_enabled": 0
  },
  "items": [
    {
      "question_id": "FAC06V1_001",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(20 x^{4} - 5 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(5x^2(4x^2-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_002",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(24 x^{3} + 6 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(6x(4x^2+1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_003",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(8 x^{3} - 4 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(4x(2x^2-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_004",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(10 x^{3} + 20 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(10x^2(x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_005",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(18 x^{3} + 24 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(6x^2(3x+4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_006",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(20 x^{3} - 8 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(4x(5x^2-2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_007",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(12 x^{3} - 24 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(12x(x^2-2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_008",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(8 x^{4} + 12 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(4x^2(2x^2+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_009",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(10 x^{2} - 2 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(2x(5x-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_010",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(20 x^{3} - 15 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(5x^2(4x-3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_011",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(12 x^{3} - 6 x\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(6x(2x^2-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_012",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHAN-TU-CHUNG-001-012",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích đa thức \\(20 x^{4} - 20 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
      "correct_option": "\\(20x^2(x^2-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_013",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x(x-2)+5(2-x)\\) thành nhân tử.",
      "correct_option": "\\((x-2)(4x-5)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_014",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(2x(x-4)+1(4-x)\\) thành nhân tử.",
      "correct_option": "\\((x-4)(2x-1)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_015",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x(x-1)+3(1-x)\\) thành nhân tử.",
      "correct_option": "\\((x-1)(4x-3)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_016",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(5x(x-2)+4(2-x)\\) thành nhân tử.",
      "correct_option": "\\((x-2)(5x-4)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_017",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x(x-1)+1(1-x)\\) thành nhân tử.",
      "correct_option": "\\((x-1)(4x-1)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_018",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x(x-4)+5(4-x)\\) thành nhân tử.",
      "correct_option": "\\((x-4)(4x-5)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_019",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(2x(x-5)+5(5-x)\\) thành nhân tử.",
      "correct_option": "\\((x-5)(2x-5)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_020",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "doi-dau-nhan-tu-chung",
        "nhan-tu-chung"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-nhan-tu-chung",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "nhan-tu-chung"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-DOI-DAU-NTC-013-020",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x(x-5)+2(5-x)\\) thành nhân tử.",
      "correct_option": "\\((x-5)(4x-2)\\)",
      "note": "Diagnostic skill is independently assessable; common-factor extraction is supporting.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_021",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4 x^{2} - 25\\) thành nhân tử.",
      "correct_option": "\\((2x-5)(2x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_022",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(16 x^{2} - 9\\) thành nhân tử.",
      "correct_option": "\\((4x-3)(4x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_023",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 25\\) thành nhân tử.",
      "correct_option": "\\((x-5)(x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_024",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9x^2-16\\) thành nhân tử.",
      "correct_option": "\\((3x-4)(3x+4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_025",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^2-36\\) thành nhân tử.",
      "correct_option": "\\((x-6)(x+6)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_026",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} - 25\\) thành nhân tử.",
      "correct_option": "\\((3x-5)(3x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_027",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(16 x^{2} - 1\\) thành nhân tử.",
      "correct_option": "\\((4x-1)(4x+1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_028",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} - 4\\) thành nhân tử.",
      "correct_option": "\\((3x-2)(3x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_029",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(25x^2-4\\) thành nhân tử.",
      "correct_option": "\\((5x-2)(5x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_030",
      "source_file": "06-phan-tich-da-thuc-v1-01.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 4\\) thành nhân tử.",
      "correct_option": "\\((x-2)(x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_031",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(25 x^{2} - 25\\) thành nhân tử.",
      "correct_option": "\\((5x-5)(5x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_032",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "hieu-hai-binh-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-binh-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-BP-021-032",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(25 x^{2} - 9\\) thành nhân tử.",
      "correct_option": "\\((5x-3)(5x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_033",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4 x^{2} - 20 x + 25\\) thành nhân tử.",
      "correct_option": "\\((2x-5)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_034",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 4 x + 4\\) thành nhân tử.",
      "correct_option": "\\((x+2)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_035",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4 x^{2} + 16 x + 16\\) thành nhân tử.",
      "correct_option": "\\((2x+4)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_036",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 6 x + 9\\) thành nhân tử.",
      "correct_option": "\\((x-3)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_037",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^2+14x+49\\) thành nhân tử.",
      "correct_option": "\\((x+7)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_038",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} + 30 x + 25\\) thành nhân tử.",
      "correct_option": "\\((3x+5)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_039",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9x^2-24x+16\\) thành nhân tử.",
      "correct_option": "\\((3x-4)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_040",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 2 x + 1\\) thành nhân tử.",
      "correct_option": "\\((x-1)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_041",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} + 24 x + 16\\) thành nhân tử.",
      "correct_option": "\\((3x+4)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_042",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "binh-phuong-hoan-chinh"
      ],
      "canonical_assessed_skill_candidate": "binh-phuong-hoan-chinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-BP-HOANCHINH-033-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} + 12 x + 4\\) thành nhân tử.",
      "correct_option": "\\((3x+2)^2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_043",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "tong-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TONG-HAI-LP-043-049-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(8 x^{3} + 8\\) thành nhân tử.",
      "correct_option": "\\((2x+2)(4x^2-4x+4)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_044",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(8 x^{3} - 1\\) thành nhân tử.",
      "correct_option": "\\((2x-1)(4x^2+2x+1)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_045",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^3-27\\) thành nhân tử.",
      "correct_option": "\\((x-3)(x^2+3x+9)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_046",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{3} - 64\\) thành nhân tử.",
      "correct_option": "\\((x-4)(1x^2+4x+16)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_047",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(27 x^{3} - 64\\) thành nhân tử.",
      "correct_option": "\\((3x-4)(9x^2+12x+16)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_048",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(27 x^{3} - 8\\) thành nhân tử.",
      "correct_option": "\\((3x-2)(9x^2+6x+4)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_049",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "tong-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TONG-HAI-LP-043-049-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(8x^3+27\\) thành nhân tử.",
      "correct_option": "\\((2x+3)(4x^2-6x+9)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_050",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "hieu-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-HIEU-HAI-LP-044-050",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(64x^3-125\\) thành nhân tử.",
      "correct_option": "\\((4x-5)(16x^2+20x+25)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_051",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "tong-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TONG-HAI-LP-043-049-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{3} + 8\\) thành nhân tử.",
      "correct_option": "\\((x+2)(1x^2-2x+4)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_052",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "tong-hieu-lap-phuong"
      ],
      "canonical_assessed_skill_candidate": "tong-hai-lap-phuong",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "tong-hieu-lap-phuong"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TONG-HAI-LP-043-049-051-052",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(8 x^{3} + 1\\) thành nhân tử.",
      "correct_option": "\\((2x+1)(4x^2-2x+1)\\)",
      "note": "Phase B treats tong-hieu-lap-phuong as a parent category; use the specific sum/difference cube identity as primary.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_053",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x^2-16x+1x-4\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((4x+1)(x-4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_054",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x^2-16x+3x-12\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((4x+3)(x-4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_055",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2+9x+2x+6\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+2)(x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_056",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2-3x+5x-5\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+5)(x-1)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_057",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2+6x+3x+6\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+3)(x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_058",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(2x^2-6x+5x-15\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((2x+5)(x-3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_059",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4x^2-12x+2x-6\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((4x+2)(x-3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_060",
      "source_file": "06-phan-tich-da-thuc-v1-02.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2+9x+3x+9\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+3)(x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_061",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(2x^2+6x+5x+15\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((2x+5)(x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_062",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(2x^2-4x+1x-2\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((2x+1)(x-2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_063",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2+6x+2x+4\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+2)(x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_064",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "nhom-hang-tu"
      ],
      "canonical_assessed_skill_candidate": "nhom-hang-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-NHOM-HANG-TU-053-064",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(3x^2-12x+2x-8\\) bằng phương pháp nhóm hạng tử.",
      "correct_option": "\\((3x+2)(x-4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_065",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 5 x + 6\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+2)(x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_066",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 7 x + 10\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+2)(x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_067",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 7 x + 12\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+3)(x+4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_068",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 7 x + 6\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+1)(x+6)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_069",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + x - 6\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-2)(x+3)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_070",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 2 x - 15\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-3)(x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_071",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 6 x + 8\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-2)(x-4)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_072",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 4 x - 5\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-1)(x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_073",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 9 x + 20\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+4)(x+5)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_074",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 9 x + 14\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x+2)(x+7)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_075",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 2 x - 8\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-4)(x+2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_076",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "tach-hang-tu-giua"
      ],
      "canonical_assessed_skill_candidate": "tach-hang-tu-giua",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-TACH-HANG-TU-GIUA-065-076",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 7 x + 10\\) thành nhân tử bằng cách tách hạng tử giữa.",
      "correct_option": "\\((x-5)(x-2)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_077",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 48 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x-4)(x+4)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_078",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 12 x^{2} + 18 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x+3)^2\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_079",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - 4 x - 12\\) thành nhân tử.",
      "correct_option": "\\((x+3)(x-2)(x+2)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_080",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + 8 x^{2} + 12 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+2)(x+6)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_081",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(2 x^{3} - 18 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x-3)(x+3)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_082",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 18 x^{2} + 27 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x+3)^2\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_083",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + 3 x^{2} - x - 3\\) thành nhân tử.",
      "correct_option": "\\((x+3)(x-1)(x+1)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_084",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + 6 x^{2} + 5 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+1)(x+5)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_085",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(4 x^{3} - 36 x\\) thành nhân tử.",
      "correct_option": "\\(4x(x-3)(x+3)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_086",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(3 x^{3} + 6 x^{2} + 3 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x+1)^2\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_087",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^3+2x^2-9x-18\\) thành nhân tử.",
      "correct_option": "\\((x+2)(x-3)(x+3)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_088",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + 9 x^{2} + 18 x\\) thành nhân tử.",
      "correct_option": "\\(x(x+3)(x+6)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_089",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-DIFFSQ-077-081-085-089",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(3 x^{3} - 3 x\\) thành nhân tử.",
      "correct_option": "\\(3x(x-1)(x+1)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_090",
      "source_file": "06-phan-tich-da-thuc-v1-03.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-PERFECTSQ-078-082-086-090",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(2 x^{3} + 8 x^{2} + 8 x\\) thành nhân tử.",
      "correct_option": "\\(2x(x+2)^2\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_091",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-GROUP-DIFFSQ-079-083-087-091",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^{3} + x^{2} - 4 x - 4\\) thành nhân tử.",
      "correct_option": "\\((x+1)(x-2)(x+2)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_092",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "phoi-hop-phuong-phap"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-da-thuc-hoan-toan",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [
        "phoi-hop-phuong-phap"
      ],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "FAC06-COMPLETE-QUADRATIC-080-084-088-092",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Phân tích hoàn toàn \\(x^3+4x^2+3x\\) thành nhân tử.",
      "correct_option": "\\(x(x+1)(x+3)\\)",
      "note": "Phase A/B approved this output-skill candidate for FAC06V1_077–092 only; final-output MCQ does not establish independent multistep execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_093",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(x^{2} - 9=\\left(x - 3\\right) \\left(x + 3\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_094",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(2 x^{2} + 6 x=2 x \\left(x + 3\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_095",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(x^{2} + 6 x + 9=\\left(x + 3\\right)^{2}\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_096",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(x^{3} - 4 x=x \\left(x - 2\\right) \\left(x + 2\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_097",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(x^{2} - 5 x + 6=\\left(x - 3\\right) \\left(x - 2\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_098",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(4 x^{2} - 25=\\left(2 x - 5\\right) \\left(2 x + 5\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_099",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(x^{3} + 8=\\left(x + 2\\right) \\left(x^{2} - 2 x + 4\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_100",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "kiem-tra-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "kiem-tra-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "kiem-tra-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-CHECK-FACTOR-093-100",
      "credit_mode_candidate": "FORMATIVE_ONLY_PENDING_TASK_FAMILY",
      "correct_option_index": 0,
      "question": "Đẳng thức phân tích nào dưới đây đúng?",
      "correct_option": "\\(3 x^{2} + 9 x=3 x \\left(x + 3\\right)\\)",
      "note": "Phase B keeps kiem-tra-phan-tich as PENDING task-family; recognition of a correct factorization is not full factorization execution.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_101",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-COMMON-FACTOR-101-107-111",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 4 x\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=0\\;\\text{hoặc}\\;x=4\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_102",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 7 x + 10\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=2\\;\\text{hoặc}\\;x=5\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_103",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} + x - 6\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=-3\\;\\text{hoặc}\\;x=2\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_104",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 7 x + 6\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=1\\;\\text{hoặc}\\;x=6\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_105",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} + 7 x + 10\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=-2\\;\\text{hoặc}\\;x=-5\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_106",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 10 x + 21\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=3\\;\\text{hoặc}\\;x=7\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_107",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-COMMON-FACTOR-101-107-111",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} + 4 x\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=0\\;\\text{hoặc}\\;x=-4\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_108",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 3 x - 4\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=-1\\;\\text{hoặc}\\;x=4\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_109",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} + x - 6\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=2\\;\\text{hoặc}\\;x=-3\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_110",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 4 x - 5\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=5\\;\\text{hoặc}\\;x=-1\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_111",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-COMMON-FACTOR-101-107-111",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} - 6 x\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=0\\;\\text{hoặc}\\;x=6\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_112",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "giai-pt-bang-nhan-tu"
      ],
      "canonical_assessed_skill_candidate": "giai-pt-bang-nhan-tu",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-EQ-MONIC-QUADRATIC-102-112",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Giải phương trình \\(x^{2} + x - 12\\) \\(=0\\) bằng phân tích nhân tử.",
      "correct_option": "\\(x=-4\\;\\text{hoặc}\\;x=3\\)",
      "note": "Canonical skill is valid, but a final-root MCQ does not prove the written factorization process; correct response is evidence, not mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_113",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "lap-luan-chia-het-bang-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "credit_mode_candidate": "FORMATIVE_ONLY_WRITTEN_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+n\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2+n=n(n+1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "note": "Phase A reviewed these as argument recognition only; independent divisibility proof requires written evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_114",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "lap-luan-chia-het-bang-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "credit_mode_candidate": "FORMATIVE_ONLY_WRITTEN_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2-n\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2-n=n(n-1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "note": "Phase A reviewed these as argument recognition only; independent divisibility proof requires written evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_115",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "lap-luan-chia-het-bang-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "credit_mode_candidate": "FORMATIVE_ONLY_WRITTEN_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^3-n\\) luôn chia hết cho 6?",
      "correct_option": "\\(n^3-n=n(n-1)(n+1)\\), tích ba số nguyên liên tiếp chia hết cho 6.",
      "note": "Phase A reviewed these as argument recognition only; independent divisibility proof requires written evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_116",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "lap-luan-chia-het-bang-phan-tich",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_ARGUMENT_RECOGNITION_ONLY",
      "clone_family_candidate": "FAC06-DIVISIBILITY-113-116",
      "credit_mode_candidate": "FORMATIVE_ONLY_WRITTEN_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+3n+2\\) luôn chia hết cho 2?",
      "correct_option": "\\(n^2+3n+2=(n+1)(n+2)\\), tích hai số nguyên liên tiếp luôn chẵn.",
      "note": "Phase A reviewed these as argument recognition only; independent divisibility proof requires written evidence.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_117",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "hieu-hai-binh-phuong-tinh-nhanh",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_METHOD_NOT_OBSERVED",
      "correct_option_index": 0,
      "question": "Tính nhanh \\(105^2-95^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2000\\)",
      "note": "Phase A reviewed these as final numeric answers only; the response does not establish that difference-of-squares factorization was used.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_118",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "hieu-hai-binh-phuong-tinh-nhanh",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_METHOD_NOT_OBSERVED",
      "correct_option_index": 0,
      "question": "Tính nhanh \\(106^2-94^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2400\\)",
      "note": "Phase A reviewed these as final numeric answers only; the response does not establish that difference-of-squares factorization was used.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_119",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "hieu-hai-binh-phuong-tinh-nhanh",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_METHOD_NOT_OBSERVED",
      "correct_option_index": 0,
      "question": "Tính nhanh \\(107^2-93^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(2800\\)",
      "note": "Phase A reviewed these as final numeric answers only; the response does not establish that difference-of-squares factorization was used.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "FAC06V1_120",
      "source_file": "06-phan-tich-da-thuc-v1-04.json",
      "legacy_skill_tags": [
        "ung-dung-phan-tich"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "hieu-hai-binh-phuong-tinh-nhanh",
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": "ung-dung-phan-tich",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": "FAC06-DIFFSQ-NUMERIC-117-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_METHOD_NOT_OBSERVED",
      "correct_option_index": 0,
      "question": "Tính nhanh \\(108^2-92^2\\) bằng phân tích nhân tử.",
      "correct_option": "\\(3200\\)",
      "note": "Phase A reviewed these as final numeric answers only; the response does not establish that difference-of-squares factorization was used.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    }
  ]
}

```

## Required independent review

Review **120/120 question mappings** and all **17 clone-family candidates**.

For every question verify:
1. at most one canonical assessed skill;
2. assessed skill follows requested output, not every tag/method involved;
3. supporting/parent/task metadata are appropriate;
4. observable evidence class matches what one MCQ response can establish;
5. PENDING/application/proof items do not silently become mastery evidence;
6. clone-family granularity is neither too broad nor too narrow;
7. legacy tags are preserved as metadata and not reinterpreted retroactively.

Return:
- Packet ID + verdict `PASS`, `REVISIONS_REQUIRED`, or `INSUFFICIENT_EVIDENCE`.
- Coverage 120/120, or list missing IDs.
- Revision table only: ID | field | current | corrected | reason. If none, say 0 revisions.
- Clone-family table for all 17 families: PASS/REVISE + corrected membership if needed.
- Explicit decisions for 013–020, 043–052, 077–092, 093–100, 101–112, 113–116, and 117–120.
- Final counts by canonical assessed skill + formative-only count.
- Explicit confirmation: no runtime activation, no legacy tag rewrite, no history backfill/regrade, no Core Readiness credit, no mastery threshold.
