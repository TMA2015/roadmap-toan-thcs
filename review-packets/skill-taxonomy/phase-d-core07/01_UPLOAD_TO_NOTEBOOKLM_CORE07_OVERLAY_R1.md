# NotebookLM source — Skill Taxonomy Phase D / CĐ07 full-bank primary-evidence overlay R1

**Packet ID:** `MATH-SKILL-CORE07-OVERLAY-R1-20260930`  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Overlay Git blob:** `0318bde17dd140ad2e94563abdbddca90343cc77`

## Scope

Review the full current CĐ07 bank: **120/120 questions** (`RAT07V1_001–120`). The goal is to assign at most one canonical assessed skill per question, preserve supporting/category/task metadata, represent the observable evidence of one MCQ conservatively, and keep composite/Extension items formative-only where the current answer cannot isolate the intended competency.

This packet does **not** change question content, answer keys, legacy tags, learner history, Core Readiness or runtime counters.

## Source locks

- `07-phan-thuc-dai-so-v1-01.json`: blob `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- `07-phan-thuc-dai-so-v1-02.json`: blob `2294a3f9d93b01b70036167713a3940fea367dca`
- `07-phan-thuc-dai-so-v1-03.json`: blob `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- `07-phan-thuc-dai-so-v1-04.json`: blob `b1ba2cc3664cfc2cda13fdafe4655f744130c833`

Reviewed upstream gates:
- Phase A `MATH-SKILL-TAXONOMY-39-R1-20260930`: PASS 39/39, 9/9 clone families.
- Phase B `MATH-SKILL-CODE52-R1-20260930`: PASS 52/52 codes, 55/55 occurrences, 0 revisions.
- CĐ04 full-bank overlay: PASS 132/132.
- CĐ05 full-bank overlay: PASS 120/120.
- CĐ06 full-bank overlay: PASS 120/120, 17/17 clone families.

## Candidate mapping summary

- 120 questions total.
- **112 questions** have one canonical assessed-skill candidate.
- **8 questions intentionally have no primary assessed skill**:
  - `RAT07V1_109–114`: composite multi-operation rational-expression output; final MCQ result does not isolate each step.
  - `RAT07V1_119–120`: `tim-gia-tri-nguyen` remains Extension / counter PENDING under Phase A/B.
- No runtime or Core Readiness credit.

Primary candidate counts:
- `nhan-biet-phan-thuc`: 8
- `dieu-kien-xac-dinh`: 16
- `hai-phan-thuc-bang-nhau`: 6
- `doi-dau-phan-thuc`: 8
- `phan-tich-tu-mau`: 8
- `rut-gon-phan-thuc`: 16
- `giu-dieu-kien-ban-dau`: 8
- `quy-dong-mau-thuc`: 10
- `cong-tru-phan-thuc`: 12
- `nhan-phan-thuc`: 8
- `chia-phan-thuc`: 8
- `tinh-gia-tri-phan-thuc`: 4

## Special decisions to inspect carefully

- `RAT07V1_001–008`: primary `nhan-biet-phan-thuc`; evidence `MCQ_RECOGNITION_ONLY`.
- `RAT07V1_017–024`: primary `dieu-kien-xac-dinh`; `phan-tich-tu-mau` is supporting only.
- `RAT07V1_025–030`: primary `hai-phan-thuc-bang-nhau`; `giu-dieu-kien-ban-dau` supporting/diagnostic only from the same answer.
- `RAT07V1_031–038`: primary `doi-dau-phan-thuc`; recognition-only evidence.
- `RAT07V1_039–046`: primary `phan-tich-tu-mau`; clone grouping is deliberately narrow because factorization methods differ.
- `RAT07V1_047–062`: primary `rut-gon-phan-thuc`; `phan-tich-tu-mau` supporting. Eight scale/structure pairs are proposed as clone families.
- `RAT07V1_063–070`: primary `giu-dieu-kien-ban-dau` as the Phase-B-approved diagnostic skill; evidence is recognition only.
- `RAT07V1_071–080`: primary `quy-dong-mau-thuc`; evidence `MCQ_METHOD_SELECTION_ONLY` because the prompt asks for a suitable common denominator.
- `RAT07V1_081–092`: primary `cong-tru-phan-thuc`; `quy-dong-mau-thuc` supporting only.
- `RAT07V1_093–100`: primary `nhan-phan-thuc`; `rut-gon-phan-thuc` supporting only.
- `RAT07V1_101–108`: primary `chia-phan-thuc`; `rut-gon-phan-thuc` supporting only.
- `RAT07V1_109–114`: **no primary**; intended task `rut-gon-phan-thuc-nhieu-phep-tinh`; `FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED`. Phase A already accepted the six-item clone family and final-output limitation.
- `RAT07V1_115–118`: primary `tinh-gia-tri-phan-thuc`; numeric final-answer evidence only.
- `RAT07V1_119–120`: **no primary**; Extension `tim-gia-tri-nguyen` remains PENDING; `FORMATIVE_ONLY_EXTENSION_LAYER_PENDING`. Phase A already accepted their extension-only pending status and clone family.

## Clone-family candidates

**23 proposed families:**
- RAT07-RECOGNIZE-001-008
- RAT07-DOMAIN-LINEAR-009-016
- RAT07-DOMAIN-QUADRATIC-017-024
- RAT07-EQUALITY-DOMAIN-025-030
- RAT07-SIGN-031-038
- RAT07-FACTOR-DIFFSQ-039-042
- RAT07-FACTOR-PERFECTSQ-041-046
- RAT07-SIMPLIFY-047-055
- RAT07-SIMPLIFY-048-056
- RAT07-SIMPLIFY-049-057
- RAT07-SIMPLIFY-050-058
- RAT07-SIMPLIFY-051-059
- RAT07-SIMPLIFY-052-060
- RAT07-SIMPLIFY-053-061
- RAT07-SIMPLIFY-054-062
- RAT07-DOMAIN-PRESERVE-063-070
- RAT07-COMMON-DENOMINATOR-071-080
- RAT07-ADD-081-086
- RAT07-SUBTRACT-087-092
- RAT07-MULTIPLY-093-100
- RAT07-DIVIDE-101-108
- RAT07-COMPOSITE-109-114
- RAT07-INTEGER-119-120

The `RAT07-COMPOSITE-109-114` and `RAT07-INTEGER-119-120` memberships were already independently accepted in Phase A. The other families are full-bank de-dup candidates and must be reviewed for whether their granularity is too broad or too narrow.

## Full candidate overlay

```json
{
  "schema": "primary-skill-overlay-core07-phase-d-r1",
  "status": "CHATGPT_CANDIDATE_PENDING_INDEPENDENT_REVIEW",
  "as_of": "2026-09-30",
  "topic": "07-phan-thuc-dai-so",
  "source_files": {
    "07-phan-thuc-dai-so-v1-01.json": {
      "blob": "3bf6305a57286b92c9c6a2486c94eadcff0d9163",
      "question_count": 30
    },
    "07-phan-thuc-dai-so-v1-02.json": {
      "blob": "2294a3f9d93b01b70036167713a3940fea367dca",
      "question_count": 30
    },
    "07-phan-thuc-dai-so-v1-03.json": {
      "blob": "9297d644a65c09b8c8ca8cc4b3f81cc194764360",
      "question_count": 30
    },
    "07-phan-thuc-dai-so-v1-04.json": {
      "blob": "b1ba2cc3664cfc2cda13fdafe4655f744130c833",
      "question_count": 30
    }
  },
  "academic_basis": {
    "phase_a": "MATH-SKILL-TAXONOMY-39-R1-20260930 PASS",
    "phase_b": "MATH-SKILL-CODE52-R1-20260930 PASS",
    "core04": "MATH-SKILL-CORE04-OVERLAY-R1-20260930 PASS",
    "core05": "MATH-SKILL-CORE05-OVERLAY-R1-20260930 PASS",
    "core06": "MATH-SKILL-CORE06-OVERLAY-R1-20260930 PASS"
  },
  "rules": {
    "one_assessed_skill_max_per_question": true,
    "supporting_skill_not_second_mastery_event": true,
    "pending_extension_or_composite_not_independent_mastery": true,
    "clone_family_not_multiple_independent_mastery_events": true,
    "legacy_question_content_answer_tags_immutable": true,
    "runtime_enabled": false,
    "no_history_backfill": true
  },
  "summary": {
    "questions": 120,
    "mapped_primary": 112,
    "formative_only_without_primary": 8,
    "primary_counts": {
      "nhan-biet-phan-thuc": 8,
      "dieu-kien-xac-dinh": 16,
      "hai-phan-thuc-bang-nhau": 6,
      "doi-dau-phan-thuc": 8,
      "phan-tich-tu-mau": 8,
      "rut-gon-phan-thuc": 16,
      "giu-dieu-kien-ban-dau": 8,
      "quy-dong-mau-thuc": 10,
      "cong-tru-phan-thuc": 12,
      "nhan-phan-thuc": 8,
      "chia-phan-thuc": 8,
      "tinh-gia-tri-phan-thuc": 4
    },
    "clone_families": [
      {
        "id": "RAT07-RECOGNIZE-001-008",
        "count": 8,
        "ids": [
          "RAT07V1_001",
          "RAT07V1_002",
          "RAT07V1_003",
          "RAT07V1_004",
          "RAT07V1_005",
          "RAT07V1_006",
          "RAT07V1_007",
          "RAT07V1_008"
        ]
      },
      {
        "id": "RAT07-DOMAIN-LINEAR-009-016",
        "count": 8,
        "ids": [
          "RAT07V1_009",
          "RAT07V1_010",
          "RAT07V1_011",
          "RAT07V1_012",
          "RAT07V1_013",
          "RAT07V1_014",
          "RAT07V1_015",
          "RAT07V1_016"
        ]
      },
      {
        "id": "RAT07-DOMAIN-QUADRATIC-017-024",
        "count": 8,
        "ids": [
          "RAT07V1_017",
          "RAT07V1_018",
          "RAT07V1_019",
          "RAT07V1_020",
          "RAT07V1_021",
          "RAT07V1_022",
          "RAT07V1_023",
          "RAT07V1_024"
        ]
      },
      {
        "id": "RAT07-EQUALITY-DOMAIN-025-030",
        "count": 6,
        "ids": [
          "RAT07V1_025",
          "RAT07V1_026",
          "RAT07V1_027",
          "RAT07V1_028",
          "RAT07V1_029",
          "RAT07V1_030"
        ]
      },
      {
        "id": "RAT07-SIGN-031-038",
        "count": 8,
        "ids": [
          "RAT07V1_031",
          "RAT07V1_032",
          "RAT07V1_033",
          "RAT07V1_034",
          "RAT07V1_035",
          "RAT07V1_036",
          "RAT07V1_037",
          "RAT07V1_038"
        ]
      },
      {
        "id": "RAT07-FACTOR-DIFFSQ-039-042",
        "count": 2,
        "ids": [
          "RAT07V1_039",
          "RAT07V1_042"
        ]
      },
      {
        "id": "RAT07-FACTOR-PERFECTSQ-041-046",
        "count": 2,
        "ids": [
          "RAT07V1_041",
          "RAT07V1_046"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-047-055",
        "count": 2,
        "ids": [
          "RAT07V1_047",
          "RAT07V1_055"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-048-056",
        "count": 2,
        "ids": [
          "RAT07V1_048",
          "RAT07V1_056"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-049-057",
        "count": 2,
        "ids": [
          "RAT07V1_049",
          "RAT07V1_057"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-050-058",
        "count": 2,
        "ids": [
          "RAT07V1_050",
          "RAT07V1_058"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-051-059",
        "count": 2,
        "ids": [
          "RAT07V1_051",
          "RAT07V1_059"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-052-060",
        "count": 2,
        "ids": [
          "RAT07V1_052",
          "RAT07V1_060"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-053-061",
        "count": 2,
        "ids": [
          "RAT07V1_053",
          "RAT07V1_061"
        ]
      },
      {
        "id": "RAT07-SIMPLIFY-054-062",
        "count": 2,
        "ids": [
          "RAT07V1_054",
          "RAT07V1_062"
        ]
      },
      {
        "id": "RAT07-DOMAIN-PRESERVE-063-070",
        "count": 8,
        "ids": [
          "RAT07V1_063",
          "RAT07V1_064",
          "RAT07V1_065",
          "RAT07V1_066",
          "RAT07V1_067",
          "RAT07V1_068",
          "RAT07V1_069",
          "RAT07V1_070"
        ]
      },
      {
        "id": "RAT07-COMMON-DENOMINATOR-071-080",
        "count": 10,
        "ids": [
          "RAT07V1_071",
          "RAT07V1_072",
          "RAT07V1_073",
          "RAT07V1_074",
          "RAT07V1_075",
          "RAT07V1_076",
          "RAT07V1_077",
          "RAT07V1_078",
          "RAT07V1_079",
          "RAT07V1_080"
        ]
      },
      {
        "id": "RAT07-ADD-081-086",
        "count": 6,
        "ids": [
          "RAT07V1_081",
          "RAT07V1_082",
          "RAT07V1_083",
          "RAT07V1_084",
          "RAT07V1_085",
          "RAT07V1_086"
        ]
      },
      {
        "id": "RAT07-SUBTRACT-087-092",
        "count": 6,
        "ids": [
          "RAT07V1_087",
          "RAT07V1_088",
          "RAT07V1_089",
          "RAT07V1_090",
          "RAT07V1_091",
          "RAT07V1_092"
        ]
      },
      {
        "id": "RAT07-MULTIPLY-093-100",
        "count": 8,
        "ids": [
          "RAT07V1_093",
          "RAT07V1_094",
          "RAT07V1_095",
          "RAT07V1_096",
          "RAT07V1_097",
          "RAT07V1_098",
          "RAT07V1_099",
          "RAT07V1_100"
        ]
      },
      {
        "id": "RAT07-DIVIDE-101-108",
        "count": 8,
        "ids": [
          "RAT07V1_101",
          "RAT07V1_102",
          "RAT07V1_103",
          "RAT07V1_104",
          "RAT07V1_105",
          "RAT07V1_106",
          "RAT07V1_107",
          "RAT07V1_108"
        ]
      },
      {
        "id": "RAT07-COMPOSITE-109-114",
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
        "id": "RAT07-INTEGER-119-120",
        "count": 2,
        "ids": [
          "RAT07V1_119",
          "RAT07V1_120"
        ]
      }
    ],
    "runtime_enabled": 0
  },
  "items": [
    {
      "question_id": "RAT07V1_001",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{x+1}{x-2}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_002",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{2x^2-3}{x+4}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_003",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(x^2+3x+1\\) là:",
      "correct_option": "Có thể xem là phân thức với mẫu 1",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_004",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{5}{x^2-9}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_005",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{x}{3}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_006",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{x^2+1}{2x-5}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_007",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(7\\) là:",
      "correct_option": "Có thể xem là phân thức với mẫu 1",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_008",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "nhan-biet-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-biet-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-RECOGNIZE-001-008",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về \\(\\frac{0}{x+1}\\) là:",
      "correct_option": "Phân thức đại số",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_009",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-5}\\).",
      "correct_option": "\\(x\\ne 5\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_010",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-4}\\).",
      "correct_option": "\\(x\\ne 4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_011",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-3}\\).",
      "correct_option": "\\(x\\ne 3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_012",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-2}\\).",
      "correct_option": "\\(x\\ne 2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_013",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-1}\\).",
      "correct_option": "\\(x\\ne 1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_014",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+1}\\).",
      "correct_option": "\\(x\\ne -1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_015",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+2}\\).",
      "correct_option": "\\(x\\ne -2\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_016",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-LINEAR-009-016",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x+3}\\).",
      "correct_option": "\\(x\\ne -3\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_017",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + x - 6}\\).",
      "correct_option": "\\(x\\ne -3,\\;x\\ne 2\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_018",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - x - 6}\\).",
      "correct_option": "\\(x\\ne -2,\\;x\\ne 3\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_019",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + 3 x - 4}\\).",
      "correct_option": "\\(x\\ne -4,\\;x\\ne 1\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_020",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - 3 x - 4}\\).",
      "correct_option": "\\(x\\ne -1,\\;x\\ne 4\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_021",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + 3 x - 10}\\).",
      "correct_option": "\\(x\\ne -5,\\;x\\ne 2\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_022",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - 3 x - 10}\\).",
      "correct_option": "\\(x\\ne -2,\\;x\\ne 5\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_023",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + x - 12}\\).",
      "correct_option": "\\(x\\ne -4,\\;x\\ne 3\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_024",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "dieu-kien-xac-dinh",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "dieu-kien-xac-dinh",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-QUADRATIC-017-024",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} - x - 12}\\).",
      "correct_option": "\\(x\\ne -3,\\;x\\ne 4\\)",
      "note": "The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_025",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{x+1}{x-2}\\) và \\(\\frac{2x+2}{2x-4}\\) bằng nhau trên miền \\(x\\ne2\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_026",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{x-3}{x+1}\\) và \\(\\frac{3x-9}{3x+3}\\) bằng nhau trên miền \\(x\\ne-1\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_027",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{2x}{x+4}\\) và \\(\\frac{6x}{3x+12}\\) bằng nhau trên miền \\(x\\ne-4\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_028",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{x+2}{2x-1}\\) và \\(\\frac{4x+8}{8x-4}\\) bằng nhau trên miền \\(x\\ne\\frac12\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_029",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{3-x}{x+5}\\) và \\(\\frac{6-2x}{2x+10}\\) bằng nhau trên miền \\(x\\ne-5\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_030",
      "source_file": "07-phan-thuc-dai-so-v1-01.json",
      "legacy_skill_tags": [
        "hai-phan-thuc-bang-nhau",
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "hai-phan-thuc-bang-nhau",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "giu-dieu-kien-ban-dau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-EQUALITY-DOMAIN-025-030",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Chọn khẳng định đúng:",
      "correct_option": "\\(\\frac{x^2-1}{x-1}\\) và \\(x+1\\) bằng nhau trên miền \\(x\\ne1\\).",
      "note": "Equality recognition is primary; preserving the original domain is diagnostic/supporting evidence, not a second mastery event.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_031",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-1}=-\\frac{1}{1-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_032",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-2}=-\\frac{1}{2-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_033",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-3}=-\\frac{1}{3-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_034",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-4}=-\\frac{1}{4-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_035",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-5}=-\\frac{1}{5-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_036",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-6}=-\\frac{1}{6-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_037",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-7}=-\\frac{1}{7-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_038",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "doi-dau-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "doi-dau-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-SIGN-031-038",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Đẳng thức đổi dấu nào đúng?",
      "correct_option": "\\(\\frac{1}{x-8}=-\\frac{1}{8-x}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_039",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-FACTOR-DIFFSQ-039-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 9\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(x - 3\\right) \\left(x + 3\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_040",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 4 x\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(x \\left(x - 4\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_041",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-FACTOR-PERFECTSQ-041-046",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} + 6 x + 9\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(x + 3\\right)^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_042",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-FACTOR-DIFFSQ-039-042",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(4 x^{2} - 25\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(2 x - 5\\right) \\left(2 x + 5\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_043",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{2} - 5 x + 6\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(x - 3\\right) \\left(x - 2\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_044",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{3} - 4 x\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(x \\left(x - 2\\right) \\left(x + 2\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_045",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(x^{3} + 8\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(x + 2\\right) \\left(x^{2} - 2 x + 4\\right)\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_046",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "phan-tich-tu-mau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-FACTOR-PERFECTSQ-041-046",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Phân tích \\(9 x^{2} - 12 x + 4\\) thành nhân tử để chuẩn bị rút gọn phân thức.",
      "correct_option": "\\(\\left(3 x - 2\\right)^{2}\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_047",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-047-055",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{2} - 9}{x^{2} - 3 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x + 3}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_048",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-048-056",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{2} - 4}{x^{2} + 2 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 2}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_049",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-049-057",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{2} - 1}{x^{2} + x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 1}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_050",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-050-058",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{2} - 6 x + 9}{x^{2} - 9}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 3}{x + 3}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_051",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-051-059",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{2} + 4 x + 4}{x^{2} - 4}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x + 2}{x - 2}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_052",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-052-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{4 x^{2} - 9}{2 x^{2} - 3 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{2 x + 3}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_053",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-053-061",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{9 x^{2} - 1}{3 x^{2} + x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{3 x - 1}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_054",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-054-062",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{x^{3} - 4 x}{x^{2} - 4}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(x\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_055",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-047-055",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{2} - 18}{2 x^{2} - 6 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x + 3}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_056",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-048-056",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{2} - 8}{2 x^{2} + 4 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 2}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_057",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-049-057",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{2} - 2}{2 x^{2} + 2 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 1}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_058",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-050-058",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{2} - 12 x + 18}{2 x^{2} - 18}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x - 3}{x + 3}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_059",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-051-059",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{2} + 8 x + 8}{2 x^{2} - 8}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{x + 2}{x - 2}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_060",
      "source_file": "07-phan-thuc-dai-so-v1-02.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-052-060",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{8 x^{2} - 18}{4 x^{2} - 6 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{2 x + 3}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_061",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-053-061",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{18 x^{2} - 2}{6 x^{2} + 2 x}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{3 x - 1}{x}\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_062",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "rut-gon-phan-thuc",
        "phan-tich-tu-mau"
      ],
      "canonical_assessed_skill_candidate": "rut-gon-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "phan-tich-tu-mau"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SIMPLIFY-054-062",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Rút gọn \\(\\frac{2 x^{3} - 8 x}{2 x^{2} - 8}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(x\\)",
      "note": "Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_063",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-4}{x-2}=x+2\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne2\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_064",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-9}{x-3}=x+3\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne3\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_065",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-1}{x-1}=x+1\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne1\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_066",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2+2x}{x}=x+2\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_067",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-5x}{x}=x-5\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_068",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{(x-4)(x+1)}{x-4}=x+1\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne4\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_069",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{(x+3)(x-2)}{x+3}=x-2\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne-3\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_070",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "giu-dieu-kien-ban-dau"
      ],
      "canonical_assessed_skill_candidate": "giu-dieu-kien-ban-dau",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "recognition_interpretation",
      "observable_evidence_class": "MCQ_RECOGNITION_ONLY",
      "clone_family_candidate": "RAT07-DOMAIN-PRESERVE-063-070",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x(x-7)}{x}=x-7\\) là:",
      "correct_option": "Đúng khi giữ điều kiện ban đầu \\(x\\ne0\\).",
      "note": "Phase B classifies giu-dieu-kien-ban-dau as a diagnostic skill with direct diagnostic MCQ support.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_071",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-1}\\) và \\(\\frac1{x-2}\\) là:",
      "correct_option": "\\((x-1)(x-2)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_072",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-1}\\) và \\(\\frac1{x-3}\\) là:",
      "correct_option": "\\((x-1)(x-3)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_073",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-2}\\) và \\(\\frac1{x-3}\\) là:",
      "correct_option": "\\((x-2)(x-3)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_074",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-2}\\) và \\(\\frac1{x-5}\\) là:",
      "correct_option": "\\((x-2)(x-5)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_075",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-3}\\) và \\(\\frac1{x-4}\\) là:",
      "correct_option": "\\((x-3)(x-4)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_076",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-3}\\) và \\(\\frac1{x-5}\\) là:",
      "correct_option": "\\((x-3)(x-5)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_077",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-4}\\) và \\(\\frac1{x-5}\\) là:",
      "correct_option": "\\((x-4)(x-5)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_078",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-1}\\) và \\(\\frac1{x-4}\\) là:",
      "correct_option": "\\((x-1)(x-4)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_079",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-2}\\) và \\(\\frac1{x-7}\\) là:",
      "correct_option": "\\((x-2)(x-7)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_080",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "quy-dong-mau-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "method_selection",
      "observable_evidence_class": "MCQ_METHOD_SELECTION_ONLY",
      "clone_family_candidate": "RAT07-COMMON-DENOMINATOR-071-080",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-3}\\) và \\(\\frac1{x-7}\\) là:",
      "correct_option": "\\((x-3)(x-7)\\)",
      "note": "Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_081",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{1}{2x}\\).",
      "correct_option": "\\(\\frac{3}{2x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_082",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{2}{2x}\\).",
      "correct_option": "\\(\\frac{2}{x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_083",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{3}{2x}\\).",
      "correct_option": "\\(\\frac{5}{2x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_084",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{4}{2x}\\).",
      "correct_option": "\\(\\frac{3}{x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_085",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{5}{2x}\\).",
      "correct_option": "\\(\\frac{7}{2x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_086",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-ADD-081-086",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac1x+\\frac{6}{2x}\\).",
      "correct_option": "\\(\\frac{4}{x}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_087",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+2}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{2}{x(x+2)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_088",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+3}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{3}{x(x+3)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_089",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+4}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{4}{x(x+4)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_090",
      "source_file": "07-phan-thuc-dai-so-v1-03.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+5}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{5}{x(x+5)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_091",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+6}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{6}{x(x+6)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_092",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "cong-tru-phan-thuc",
        "quy-dong-mau-thuc"
      ],
      "canonical_assessed_skill_candidate": "cong-tru-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "quy-dong-mau-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-SUBTRACT-087-092",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac1x-\\frac1{x+7}\\) (giữ điều kiện xác định ban đầu).",
      "correct_option": "\\(\\frac{7}{x(x+7)}\\)",
      "note": "Common-denominator work is supporting; one final MCQ output must not double-credit quy-dong-mau-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_093",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-1}{x-1}\\cdot\\frac1{x+1}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_094",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-4}{x-2}\\cdot\\frac1{x+2}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_095",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-9}{x-3}\\cdot\\frac1{x+3}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_096",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-16}{x-4}\\cdot\\frac1{x+4}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_097",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-25}{x-5}\\cdot\\frac1{x+5}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_098",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-36}{x-6}\\cdot\\frac1{x+6}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_099",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-49}{x-7}\\cdot\\frac1{x+7}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_100",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "nhan-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "nhan-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-MULTIPLY-093-100",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính và rút gọn \\(\\frac{x^2-64}{x-8}\\cdot\\frac1{x+8}\\) (với biểu thức xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_101",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+1}{x-1}:\\frac{(x+1)^2}{x^2-1}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_102",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+2}{x-2}:\\frac{(x+2)^2}{x^2-4}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_103",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+3}{x-3}:\\frac{(x+3)^2}{x^2-9}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_104",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+4}{x-4}:\\frac{(x+4)^2}{x^2-16}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_105",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+5}{x-5}:\\frac{(x+5)^2}{x^2-25}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_106",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+6}{x-6}:\\frac{(x+6)^2}{x^2-36}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_107",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+7}{x-7}:\\frac{(x+7)^2}{x^2-49}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_108",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "chia-phan-thuc",
        "rut-gon-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "chia-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [
        "rut-gon-phan-thuc"
      ],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-DIVIDE-101-108",
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính \\(\\frac{x+8}{x-8}:\\frac{(x+8)^2}{x^2-64}\\) (trên miền xác định).",
      "correct_option": "\\(1\\)",
      "note": "Simplification is supporting; one final MCQ output must not double-credit rut-gon-phan-thuc.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_109",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-1}+\\frac1{x+1}\\right)\\cdot\\frac{x^2-1}{2x}\\) (với \\(x\\ne0,\\;x\\ne1,\\;x\\ne-1\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_110",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-2}+\\frac1{x+2}\\right)\\cdot\\frac{x^2-4}{2x}\\) (với \\(x\\ne0,\\;x\\ne2,\\;x\\ne-2\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_111",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-3}+\\frac1{x+3}\\right)\\cdot\\frac{x^2-9}{2x}\\) (với \\(x\\ne0,\\;x\\ne3,\\;x\\ne-3\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_112",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-4}+\\frac1{x+4}\\right)\\cdot\\frac{x^2-16}{2x}\\) (với \\(x\\ne0,\\;x\\ne4,\\;x\\ne-4\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_113",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-5}+\\frac1{x+5}\\right)\\cdot\\frac{x^2-25}{2x}\\) (với \\(x\\ne0,\\;x\\ne5,\\;x\\ne-5\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_114",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "bieu-thuc-nhieu-phep-tinh",
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "rut-gon-phan-thuc-nhieu-phep-tinh",
      "supporting_skills": [
        "cong-tru-phan-thuc",
        "nhan-phan-thuc"
      ],
      "metadata_only_tags": [
        "bieu-thuc-nhieu-phep-tinh"
      ],
      "task_family_candidate": "bieu-thuc-nhieu-phep-tinh",
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-COMPOSITE-109-114",
      "credit_mode_candidate": "FORMATIVE_ONLY_STEPWISE_EVIDENCE_REQUIRED",
      "correct_option_index": 0,
      "question": "Rút gọn \\(A=\\left(\\frac1{x-6}+\\frac1{x+6}\\right)\\cdot\\frac{x^2-36}{2x}\\) (với \\(x\\ne0,\\;x\\ne6,\\;x\\ne-6\\)).",
      "correct_option": "\\(1\\)",
      "note": "Phase A PASS: RAT07V1_109–114 are one parameterized clone family; final output does not establish independent multistep execution of addition, multiplication and domain handling.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_115",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(A=\\frac{x + 1}{x - 2}\\) tại \\(x=3\\).",
      "correct_option": "\\(4\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_116",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(A=\\frac{x^{2} - 1}{x + 1}\\) tại \\(x=2\\).",
      "correct_option": "\\(1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_117",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(A=\\frac{2 x}{x + 3}\\) tại \\(x=3\\).",
      "correct_option": "\\(1\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_118",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tinh-gia-tri-phan-thuc"
      ],
      "canonical_assessed_skill_candidate": "tinh-gia-tri-phan-thuc",
      "intended_competency_or_task": null,
      "supporting_skills": [],
      "metadata_only_tags": [],
      "task_family_candidate": null,
      "prompt_demand_stage": "independent_worked_solution",
      "observable_evidence_class": "MCQ_FINAL_ANSWER_ONLY",
      "clone_family_candidate": null,
      "credit_mode_candidate": "EVIDENCE_EVENT_CANDIDATE_NOT_MASTERY",
      "correct_option_index": 0,
      "question": "Tính giá trị của \\(A=\\frac{x^{2} - 4}{x - 2}\\) tại \\(x=5\\).",
      "correct_option": "\\(7\\)",
      "note": "",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_119",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tim-gia-tri-nguyen"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "phan-thuc-gia-tri-nguyen",
      "supporting_skills": [],
      "metadata_only_tags": [
        "tim-gia-tri-nguyen"
      ],
      "task_family_candidate": "tim-gia-tri-nguyen",
      "prompt_demand_stage": "transfer",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-INTEGER-119-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_EXTENSION_LAYER_PENDING",
      "correct_option_index": 0,
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+1}{x-2}\\) là số nguyên.",
      "correct_option": "\\(x\\in\\{-1,1,3,5\\}\\)",
      "note": "Phase A PASS keeps RAT07V1_119–120 extension_only_pending_layer_check; Phase B classifies tim-gia-tri-nguyen as an extension skill with counter PENDING.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    },
    {
      "question_id": "RAT07V1_120",
      "source_file": "07-phan-thuc-dai-so-v1-04.json",
      "legacy_skill_tags": [
        "tim-gia-tri-nguyen"
      ],
      "canonical_assessed_skill_candidate": null,
      "intended_competency_or_task": "phan-thuc-gia-tri-nguyen",
      "supporting_skills": [],
      "metadata_only_tags": [
        "tim-gia-tri-nguyen"
      ],
      "task_family_candidate": "tim-gia-tri-nguyen",
      "prompt_demand_stage": "transfer",
      "observable_evidence_class": "MCQ_FINAL_OUTPUT_ONLY",
      "clone_family_candidate": "RAT07-INTEGER-119-120",
      "credit_mode_candidate": "FORMATIVE_ONLY_EXTENSION_LAYER_PENDING",
      "correct_option_index": 0,
      "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+2}{x-3}\\) là số nguyên.",
      "correct_option": "\\(x\\in\\{-2,2,4,8\\}\\)",
      "note": "Phase A PASS keeps RAT07V1_119–120 extension_only_pending_layer_check; Phase B classifies tim-gia-tri-nguyen as an extension skill with counter PENDING.",
      "runtime_enabled": false,
      "core_readiness_credit": false,
      "legacy_tags_unchanged": true
    }
  ]
}
```

## Required independent review

Review **120/120 question mappings** and all **23 clone-family candidates**.

For every question verify:
1. at most one canonical assessed skill;
2. assessed skill follows requested output, not every tag/method involved;
3. supporting/diagnostic/task metadata are appropriate and do not create duplicate mastery credit;
4. `observable_evidence_class` matches what one MCQ response can establish;
5. composite and Extension/PENDING items do not silently become Core/mastery evidence;
6. clone-family granularity is neither too broad nor too narrow;
7. legacy tags are preserved as metadata and not reinterpreted retroactively.

Return:
- Packet ID + verdict `PASS`, `REVISIONS_REQUIRED`, or `INSUFFICIENT_EVIDENCE`.
- Coverage 120/120, or list missing IDs.
- Revision table only: ID | field | current | corrected | reason. If none, say 0 revisions.
- Clone-family table for all 23 families: PASS/REVISE + corrected membership if needed.
- Explicit decisions for 001–008, 017–030, 031–046, 047–062, 063–080, 081–108, 109–114, 115–118, and 119–120.
- Final counts by canonical assessed skill + formative-only count.
- Explicit confirmation: no runtime activation, no legacy tag rewrite, no history backfill/regrade, no Core Readiness credit, no mastery threshold.
