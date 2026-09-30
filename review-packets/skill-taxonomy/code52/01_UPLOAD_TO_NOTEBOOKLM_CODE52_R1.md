# NotebookLM source — Skill Taxonomy Phase B: 52 legacy codes CĐ04–07

**Packet ID:** `MATH-SKILL-CODE52-R1-20260930`  
**State:** `READ_ONLY / PROPOSAL_ONLY / NOT_RUNTIME_ENABLED`  
**Candidate register blob:** `7a11789e90a1dfa4f92ef893939c518003b55792`

## Goal

Decide code-level semantics for the 52 unique legacy skill codes used by CĐ04–07 **without changing runtime**. The central rule is: semantic validity, learner-facing counter suitability, and evidence readiness are separate decisions.

A curriculum skill may be legitimate even if current MCQ evidence is insufficient for mastery. Conversely, a frequently occurring tag can be only a parent category, method or context and should not automatically become a learner mastery counter.

## Source locks and prior reviewed evidence

- `skill-code-role-register-04-07-v1.json` blob: `7a11789e90a1dfa4f92ef893939c518003b55792`
- Phase A 39-item receipt: blob `ffd84f5f248015c35fe800c7ac09bdc01abc4a60`; verdict PASS 39/39, 9/9 clone families.
- Representative skill-role pilot `skill-role-pilot-04-11-v1.json` blob: `513b8e6a4f40ee2ac1f23147f1e52b28f5c7bc03`.
- Preliminary taxonomy audit `skill-taxonomy-audit-v1.json` blob: `abe671a7e685374f9e3731f3fa4f84dfcc7b3cc3`; historical snapshot reports 346 unique legacy codes, but this packet reviews only the 52 CĐ04–07 codes.

## Candidate role model

- `semantic_kind_candidate`: skill / diagnostic_skill / composite_skill / parent_category / method / context / task_family / extension_skill.
- `canonical_counter_candidate`: YES / NO / PENDING.
- `evidence_readiness_candidate`: what current evidence can support; it does **not** redefine the curriculum skill.
- Same item must not create independent mastery credit for both primary and supporting/method/category tags.
- No source-authored frequency is an exam-frequency estimate.

## Prior representative decisions that constrain this packet

1. `tinh-phan-phoi` was reviewed as **method** on representative `ALG04V2_051`; current bank shows 26/26 co-occurrence with `nhan-bieu-thuc`.
2. `bai-toan-thuc-te` was reviewed as **context** for `lap-bieu-thuc`.
3. `bo-ngoac-dau` can be a supporting skill on a composite addition/subtraction item but remains independently assessable with a dedicated micro-test.
4. `nhan-dang-hdt` was reviewed as a broad category when a specific pattern (`binh-phuong-hoan-chinh`) is the target.
5. `phan-tich-hdt` was reviewed as a broad category when `hieu-hai-binh-phuong` is the specific target.
6. `giu-dieu-kien-ban-dau` can be supporting on a two-rational-expression equality item but has separate direct evidence and remains independently assessable.
7. Phase A PASS keeps `RAT07V1_119–120` pending Extension and treats `RAT07V1_109–114` as one clone family with final-output-only evidence.
8. Phase A PASS accepts `phan-tich-da-thuc-hoan-toan` only as a **new output candidate** for FAC06V1_077–092; it does not authorize renaming every `phoi-hop-phuong-phap` tag.

## Three shared legacy codes requiring explicit cross-topic decision

- `dieu-kien-xac-dinh`: CĐ04 + CĐ07.
- `hieu-hai-binh-phuong`: CĐ05 + CĐ06.
- `binh-phuong-hoan-chinh`: CĐ05 + CĐ06.

Candidate interpretation is one canonical mathematical concept with topic-specific task demand. Confirm or reject this explicitly.

## Candidate 52-code registry

```json
{
  "schema": "skill-code-role-register-04-07-v1",
  "status": "READ_ONLY_CHATGPT_CANDIDATE_PENDING_INDEPENDENT_REVIEW",
  "as_of": "2026-09-30",
  "scope": "52 unique legacy skill codes used by CĐ04–07 banks; no global taxonomy migration",
  "source_snapshot": "cf0ed223712b17ef601a392c6fd80f9276cfc852",
  "contract": {
    "semantic_kind_values": [
      "skill",
      "diagnostic_skill",
      "composite_skill",
      "parent_category",
      "method",
      "context",
      "task_family",
      "extension_skill"
    ],
    "canonical_counter_values": [
      "YES",
      "NO",
      "PENDING"
    ],
    "principle": "A valid curriculum skill can exist even when the current MCQ evidence is too weak for mastery. Semantic kind and evidence readiness are separate.",
    "compatibility": "No code rename, tag rewrite, learner-store migration, counter merge or regrade is authorized by this register."
  },
  "summary": {
    "unique_codes": 52,
    "topic_occurrences": 55,
    "shared_codes": [
      "dieu-kien-xac-dinh",
      "hieu-hai-binh-phuong",
      "binh-phuong-hoan-chinh"
    ],
    "new_skill_candidates": [
      {
        "code": "phan-tich-da-thuc-hoan-toan",
        "semantic_kind_candidate": "skill",
        "canonical_counter_candidate": "PENDING",
        "evidence_readiness_candidate": "MCQ_FINAL_OUTPUT_ONLY_STEPWISE_EVIDENCE_REQUIRED",
        "source_items": "FAC06V1_077–092",
        "source_review": "Skill Taxonomy Phase A 39/39 PASS",
        "runtime_enabled": false
      }
    ],
    "runtime_enabled": 0,
    "learner_migration": false
  },
  "relationships_candidates": [
    {
      "from": "tinh-phan-phoi",
      "to": "nhan-bieu-thuc",
      "type": "METHOD_OF",
      "scope": "CĐ04 current bank / representative review"
    },
    {
      "from": "bai-toan-thuc-te",
      "to": "lap-bieu-thuc",
      "type": "CONTEXT_FOR",
      "scope": "CĐ04 reviewed representative"
    },
    {
      "from": "bo-ngoac-dau",
      "to": "cong-tru-da-thuc",
      "type": "SUPPORTING_ON_COMPOSITE_ITEMS_BUT_INDEPENDENTLY_ASSESSABLE",
      "scope": "CĐ04"
    },
    {
      "from": "nhan-dang-hdt",
      "to": "binh-phuong-hoan-chinh",
      "type": "PARENT_CATEGORY_OF_SPECIFIC_PATTERN_ON_REVIEWED_SAMPLE",
      "scope": "CĐ05"
    },
    {
      "from": "phan-tich-hdt",
      "to": "hieu-hai-binh-phuong",
      "type": "PARENT_CATEGORY_OF_SPECIFIC_IDENTITY_ON_REVIEWED_SAMPLE",
      "scope": "CĐ05"
    },
    {
      "from": "tong-hieu-lap-phuong",
      "to": [
        "tong-hai-lap-phuong",
        "hieu-hai-lap-phuong"
      ],
      "type": "PARENT_CATEGORY_CANDIDATE",
      "scope": "CĐ06→CĐ05 concept reconciliation"
    },
    {
      "from": "phoi-hop-phuong-phap",
      "to": "phan-tich-da-thuc-hoan-toan",
      "type": "LEGACY_BROAD_LABEL_TO_NEW_OUTPUT_CANDIDATE_FOR_REVIEWED_16_ONLY",
      "scope": "FAC06V1_077–092"
    },
    {
      "from": "giu-dieu-kien-ban-dau",
      "to": "hai-phan-thuc-bang-nhau",
      "type": "SUPPORTING_ON_REPRESENTATIVE_BUT_INDEPENDENTLY_ASSESSABLE",
      "scope": "CĐ07"
    }
  ],
  "codes": [
    {
      "code": "bai-toan-thuc-te",
      "semantic_kind_candidate": "context",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "CONTEXT_TAG_ONLY",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 10
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Prior representative review: context for lap-bieu-thuc, not an assessment target."
      ]
    },
    {
      "code": "bien-doi-nhieu-buoc",
      "semantic_kind_candidate": "task_family",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "FORMATIVE_ONLY_BROAD_COMPOSITE",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "bieu-thuc-nhieu-phep-tinh",
      "semantic_kind_candidate": "composite_skill",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "FORMATIVE_ONLY_CLONE_DIVERSITY_REQUIRED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 6
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Phase A marks RAT07V1_109–114 as one clone family with MCQ_FINAL_OUTPUT_ONLY; no mastery counter yet."
      ]
    },
    {
      "code": "binh-phuong-hieu",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 16
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "binh-phuong-hoan-chinh",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED_SHARED_CONCEPT",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 16
        },
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 10
        }
      ],
      "cross_topic_merge_candidate": true,
      "notes": [
        "Same legacy code appears in two topics; candidate is one canonical concept with topic-specific task demand. Independent code-level review required before canonical merge."
      ]
    },
    {
      "code": "binh-phuong-tong",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 18
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "bo-ngoac-dau",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_DIAGNOSTIC_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 26
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "chia-da-thuc-cho-don-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "chia-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "chung-minh-hdt",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "WRITTEN_EVIDENCE_REQUIRED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 4
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "cong-tru-da-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 14
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "cong-tru-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 18
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "dieu-kien-xac-dinh",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED_SHARED_CONCEPT",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 10
        },
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 16
        }
      ],
      "cross_topic_merge_candidate": true,
      "notes": [
        "Same legacy code appears in two topics; candidate is one canonical concept with topic-specific task demand. Independent code-level review required before canonical merge."
      ]
    },
    {
      "code": "doi-dau-nhan-tu-chung",
      "semantic_kind_candidate": "diagnostic_skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_DIAGNOSTIC_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "doi-dau-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "giai-phuong-trinh-hdt",
      "semantic_kind_candidate": "composite_skill",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "FINAL_OUTPUT_ONLY_STEP_EVIDENCE_NEEDED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 5
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "giai-pt-bang-nhan-tu",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "giu-dieu-kien-ban-dau",
      "semantic_kind_candidate": "diagnostic_skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_DIAGNOSTIC_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 14
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "hai-phan-thuc-bang-nhau",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 6
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "hang-tu-dong-dang",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_DIAGNOSTIC_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 24
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "he-so-bac",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "hieu-hai-binh-phuong",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED_SHARED_CONCEPT",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 19
        },
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": true,
      "notes": [
        "Same legacy code appears in two topics; candidate is one canonical concept with topic-specific task demand. Independent code-level review required before canonical merge."
      ]
    },
    {
      "code": "hieu-hai-lap-phuong",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "kiem-tra-phan-tich",
      "semantic_kind_candidate": "task_family",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "RECOGNITION_TASK_NOT_FULL_EXECUTION",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "lap-bieu-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 10
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "lap-phuong-hieu",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 11
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "lap-phuong-tong",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 11
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-biet-da-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 6
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-biet-don-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 6
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-biet-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-bieu-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 26
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-dang-hdt",
      "semantic_kind_candidate": "parent_category",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "CATEGORY_NOT_SEPARATE_COUNTER",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 21
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Prior representative review: general category; specific pattern binh-phuong-hoan-chinh was assessed on reviewed sample."
      ]
    },
    {
      "code": "nhan-dang-lap-phuong",
      "semantic_kind_candidate": "diagnostic_skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_DIAGNOSTIC_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 4
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 14
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhan-tu-chung",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 20
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "nhom-hang-tu",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "phan-tich-hdt",
      "semantic_kind_candidate": "parent_category",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "CATEGORY_NOT_SEPARATE_COUNTER",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 30
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Prior representative review: broad category; specific identity such as hieu-hai-binh-phuong is the assessed target on reviewed sample."
      ]
    },
    {
      "code": "phan-tich-tu-mau",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 32
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "phoi-hop-phuong-phap",
      "semantic_kind_candidate": "parent_category",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "BROAD_LEGACY_LABEL_REPLACEMENT_OUTPUT_CANDIDATE_REVIEWED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 16
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Phase A 39-item review retained a new output candidate phan-tich-da-thuc-hoan-toan for FAC06V1_077–092; do not rename all legacy occurrences automatically."
      ]
    },
    {
      "code": "quy-dong-mau-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 22
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "rut-gon-hdt",
      "semantic_kind_candidate": "task_family",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "COMPOSITE_FINAL_OUTPUT_NEEDS_DIVERSE_EVIDENCE",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "rut-gon-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 32
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tach-hang-tu-giua",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "thu-gon-da-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 30
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tim-gia-tri-nguyen",
      "semantic_kind_candidate": "extension_skill",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "EXTENSION_LAYER_PENDING",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 2
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Phase A PASS keeps RAT07V1_119–120 extension_only_pending_layer_check."
      ]
    },
    {
      "code": "tinh-gia-tri-bieu-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tinh-gia-tri-phan-thuc",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "07-phan-thuc-dai-so",
          "count": 4
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tinh-nhanh-hdt",
      "semantic_kind_candidate": "task_family",
      "canonical_counter_candidate": "PENDING",
      "evidence_readiness_candidate": "FINAL_ANSWER_DOES_NOT_PROVE_METHOD",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 10
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tinh-phan-phoi",
      "semantic_kind_candidate": "method",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "METHOD_TAG_ONLY_ON_CURRENT_BANK",
      "topic_occurrences": [
        {
          "topic": "04-bieu-thuc-dai-so",
          "count": 26
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Prior representative review: method for nhan-bieu-thuc; current CĐ04 bank count is 26/26 co-occurrence with nhan-bieu-thuc."
      ]
    },
    {
      "code": "tong-hai-lap-phuong",
      "semantic_kind_candidate": "skill",
      "canonical_counter_candidate": "YES",
      "evidence_readiness_candidate": "DIRECT_MCQ_SUPPORTED",
      "topic_occurrences": [
        {
          "topic": "05-7-hang-dang-thuc",
          "count": 12
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "tong-hieu-lap-phuong",
      "semantic_kind_candidate": "parent_category",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "PARENT_OF_SUM_AND_DIFFERENCE_CUBE_SKILLS_CANDIDATE",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 10
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": []
    },
    {
      "code": "ung-dung-phan-tich",
      "semantic_kind_candidate": "parent_category",
      "canonical_counter_candidate": "NO",
      "evidence_readiness_candidate": "MIXED_APPLICATION_DEMANDS_NOT_ONE_COUNTER",
      "topic_occurrences": [
        {
          "topic": "06-phan-tich-da-thuc",
          "count": 8
        }
      ],
      "cross_topic_merge_candidate": null,
      "notes": [
        "Phase A shows heterogeneous evidence families: divisibility-argument recognition and numerical difference-of-squares calculation."
      ]
    }
  ]
}

```

## Representative evidence for all 55 topic-code occurrences

One representative item is shown per topic-code occurrence. Counts are full current-bank tag occurrence counts; examples are evidence for semantics, not proof that every item carrying the code is homogeneous.

```json
[
  {
    "code": "nhan-biet-don-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 6,
    "representative_id": "ALG04V2_001",
    "question": "Trong đơn thức \\(- 5 x^{2} y\\), hệ số là bao nhiêu?",
    "correct": "-5",
    "co_tags": [
      "nhan-biet-don-thuc",
      "he-so-bac"
    ]
  },
  {
    "code": "he-so-bac",
    "topic": "04-bieu-thuc-dai-so",
    "count": 8,
    "representative_id": "ALG04V2_002",
    "question": "Trong đơn thức \\(3 x^{2} y^{3}\\), bậc là bao nhiêu?",
    "correct": "5",
    "co_tags": [
      "nhan-biet-don-thuc",
      "he-so-bac"
    ]
  },
  {
    "code": "nhan-biet-da-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 6,
    "representative_id": "ALG04V2_006",
    "question": "Biểu thức nào sau đây là đa thức một biến \\(x\\)?",
    "correct": "\\(3 x^{3} - 2 x + 5\\)",
    "co_tags": [
      "nhan-biet-da-thuc"
    ]
  },
  {
    "code": "thu-gon-da-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 30,
    "representative_id": "ALG04V2_021",
    "question": "Thu gọn \\(3x^2 + 4x + 1 - x^2 - 2x\\).",
    "correct": "\\(2 x^{2} + 2 x + 1\\)",
    "co_tags": [
      "thu-gon-da-thuc",
      "hang-tu-dong-dang"
    ]
  },
  {
    "code": "hang-tu-dong-dang",
    "topic": "04-bieu-thuc-dai-so",
    "count": 24,
    "representative_id": "ALG04V2_013",
    "question": "Hạng tử nào đồng dạng với \\(3 x^{2} y\\)?",
    "correct": "\\(- 2 x^{2} y\\)",
    "co_tags": [
      "hang-tu-dong-dang"
    ]
  },
  {
    "code": "cong-tru-da-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 14,
    "representative_id": "ALG04V2_037",
    "question": "Rút gọn \\((5x + 2) - (-x + 2)\\).",
    "correct": "\\(6 x\\)",
    "co_tags": [
      "cong-tru-da-thuc",
      "bo-ngoac-dau"
    ]
  },
  {
    "code": "bo-ngoac-dau",
    "topic": "04-bieu-thuc-dai-so",
    "count": 26,
    "representative_id": "ALG04V2_037",
    "question": "Rút gọn \\((5x + 2) - (-x + 2)\\).",
    "correct": "\\(6 x\\)",
    "co_tags": [
      "cong-tru-da-thuc",
      "bo-ngoac-dau"
    ]
  },
  {
    "code": "nhan-bieu-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 26,
    "representative_id": "ALG04V2_051",
    "question": "Khai triển \\(4x(x + 3)\\).",
    "correct": "\\(4 x^{2} + 12 x\\)",
    "co_tags": [
      "nhan-bieu-thuc",
      "tinh-phan-phoi"
    ]
  },
  {
    "code": "tinh-phan-phoi",
    "topic": "04-bieu-thuc-dai-so",
    "count": 26,
    "representative_id": "ALG04V2_051",
    "question": "Khai triển \\(4x(x + 3)\\).",
    "correct": "\\(4 x^{2} + 12 x\\)",
    "co_tags": [
      "nhan-bieu-thuc",
      "tinh-phan-phoi"
    ]
  },
  {
    "code": "tinh-gia-tri-bieu-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 12,
    "representative_id": "ALG04V2_077",
    "question": "Tính giá trị của \\(2x^2 + x + 1\\) tại \\(x=1\\).",
    "correct": "\\(4\\)",
    "co_tags": [
      "tinh-gia-tri-bieu-thuc"
    ]
  },
  {
    "code": "dieu-kien-xac-dinh",
    "topic": "04-bieu-thuc-dai-so",
    "count": 10,
    "representative_id": "ALG04V2_089",
    "question": "Biểu thức \\(\\dfrac{x+1}{x - 2}\\) xác định khi nào?",
    "correct": "\\(x\\ne 2\\)",
    "co_tags": [
      "dieu-kien-xac-dinh"
    ]
  },
  {
    "code": "bien-doi-nhieu-buoc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 12,
    "representative_id": "ALG04V2_099",
    "question": "Rút gọn \\(-2(-x + 2) + 2(-2x - 1)\\).",
    "correct": "\\(- 2 x - 6\\)",
    "co_tags": [
      "bien-doi-nhieu-buoc",
      "bo-ngoac-dau",
      "thu-gon-da-thuc"
    ]
  },
  {
    "code": "bai-toan-thuc-te",
    "topic": "04-bieu-thuc-dai-so",
    "count": 10,
    "representative_id": "ALG04V2_111",
    "question": "Một hình chữ nhật (với \\(x>1\\)) có chiều dài \\(2x+3\\), chiều rộng \\(x-1\\). Chu vi là biểu thức nào?",
    "correct": "\\(6x+4\\)",
    "co_tags": [
      "bai-toan-thuc-te",
      "lap-bieu-thuc"
    ]
  },
  {
    "code": "lap-bieu-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 10,
    "representative_id": "ALG04V2_111",
    "question": "Một hình chữ nhật (với \\(x>1\\)) có chiều dài \\(2x+3\\), chiều rộng \\(x-1\\). Chu vi là biểu thức nào?",
    "correct": "\\(6x+4\\)",
    "co_tags": [
      "bai-toan-thuc-te",
      "lap-bieu-thuc"
    ]
  },
  {
    "code": "chia-da-thuc-cho-don-thuc",
    "topic": "04-bieu-thuc-dai-so",
    "count": 12,
    "representative_id": "ALG04V2_121",
    "question": "Thực hiện \\((6x^3-3x^2):3x\\), với \\(x\\ne0\\).",
    "correct": "\\(2x^2-x\\)",
    "co_tags": [
      "chia-da-thuc-cho-don-thuc"
    ]
  },
  {
    "code": "binh-phuong-tong",
    "topic": "05-7-hang-dang-thuc",
    "count": 18,
    "representative_id": "ID05V1_001",
    "question": "Khai triển \\((x+2)^2\\).",
    "correct": "\\(x^{2} + 4 x + 4\\)",
    "co_tags": [
      "binh-phuong-tong"
    ]
  },
  {
    "code": "binh-phuong-hieu",
    "topic": "05-7-hang-dang-thuc",
    "count": 16,
    "representative_id": "ID05V1_011",
    "question": "Khai triển \\((x-2)^2\\).",
    "correct": "\\(x^{2} - 4 x + 4\\)",
    "co_tags": [
      "binh-phuong-hieu"
    ]
  },
  {
    "code": "hieu-hai-binh-phuong",
    "topic": "05-7-hang-dang-thuc",
    "count": 19,
    "representative_id": "ID05V1_021",
    "question": "Phân tích \\(x^{2} - 16\\) thành nhân tử.",
    "correct": "\\((x - 4)(x + 4)\\)",
    "co_tags": [
      "hieu-hai-binh-phuong",
      "phan-tich-hdt"
    ]
  },
  {
    "code": "phan-tich-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 30,
    "representative_id": "ID05V1_021",
    "question": "Phân tích \\(x^{2} - 16\\) thành nhân tử.",
    "correct": "\\((x - 4)(x + 4)\\)",
    "co_tags": [
      "hieu-hai-binh-phuong",
      "phan-tich-hdt"
    ]
  },
  {
    "code": "lap-phuong-tong",
    "topic": "05-7-hang-dang-thuc",
    "count": 11,
    "representative_id": "ID05V1_031",
    "question": "Khai triển \\((x+1)^3\\).",
    "correct": "\\(x^{3} + 3 x^{2} + 3 x + 1\\)",
    "co_tags": [
      "lap-phuong-tong"
    ]
  },
  {
    "code": "lap-phuong-hieu",
    "topic": "05-7-hang-dang-thuc",
    "count": 11,
    "representative_id": "ID05V1_039",
    "question": "Khai triển \\((x-1)^3\\).",
    "correct": "\\(x^{3} - 3 x^{2} + 3 x - 1\\)",
    "co_tags": [
      "lap-phuong-hieu"
    ]
  },
  {
    "code": "tong-hai-lap-phuong",
    "topic": "05-7-hang-dang-thuc",
    "count": 12,
    "representative_id": "ID05V1_047",
    "question": "Phân tích \\(x^{3} + 1\\) thành nhân tử.",
    "correct": "\\((x + 1)(x^{2} - x + 1)\\)",
    "co_tags": [
      "tong-hai-lap-phuong",
      "phan-tich-hdt"
    ]
  },
  {
    "code": "hieu-hai-lap-phuong",
    "topic": "05-7-hang-dang-thuc",
    "count": 12,
    "representative_id": "ID05V1_054",
    "question": "Phân tích \\(x^{3} - 1\\) thành nhân tử.",
    "correct": "\\((x - 1)(x^{2} + x + 1)\\)",
    "co_tags": [
      "hieu-hai-lap-phuong",
      "phan-tich-hdt"
    ]
  },
  {
    "code": "binh-phuong-hoan-chinh",
    "topic": "05-7-hang-dang-thuc",
    "count": 16,
    "representative_id": "ID05V1_061",
    "question": "Viết \\(x^{2} + 4 x + 4\\) dưới dạng bình phương của một tổng hoặc hiệu.",
    "correct": "\\((x + 2)^2\\)",
    "co_tags": [
      "binh-phuong-hoan-chinh",
      "nhan-dang-hdt"
    ]
  },
  {
    "code": "nhan-dang-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 21,
    "representative_id": "ID05V1_061",
    "question": "Viết \\(x^{2} + 4 x + 4\\) dưới dạng bình phương của một tổng hoặc hiệu.",
    "correct": "\\((x + 2)^2\\)",
    "co_tags": [
      "binh-phuong-hoan-chinh",
      "nhan-dang-hdt"
    ]
  },
  {
    "code": "nhan-dang-lap-phuong",
    "topic": "05-7-hang-dang-thuc",
    "count": 4,
    "representative_id": "ID05V1_082",
    "question": "Khi áp dụng hằng đẳng thức cho \\(8x^3+27\\), chọn đúng \\(A,B\\).",
    "correct": "\\(A=2x,\\ B=3\\)",
    "co_tags": [
      "tong-hai-lap-phuong",
      "nhan-dang-lap-phuong"
    ]
  },
  {
    "code": "tinh-nhanh-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 10,
    "representative_id": "ID05V1_091",
    "question": "Tính nhanh \\(101^2\\).",
    "correct": "\\(10201\\)",
    "co_tags": [
      "tinh-nhanh-hdt",
      "binh-phuong-tong"
    ]
  },
  {
    "code": "rut-gon-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 12,
    "representative_id": "ID05V1_101",
    "question": "Rút gọn \\((x+2)^2-(x-2)^2\\).",
    "correct": "\\(8 x\\)",
    "co_tags": [
      "rut-gon-hdt",
      "binh-phuong-tong",
      "binh-phuong-hieu"
    ]
  },
  {
    "code": "giai-phuong-trinh-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 5,
    "representative_id": "ID05V1_111",
    "question": "Giải phương trình \\((x+1)^2-(x-1)^2=20\\).",
    "correct": "\\(x=5\\)",
    "co_tags": [
      "giai-phuong-trinh-hdt",
      "rut-gon-hdt"
    ]
  },
  {
    "code": "chung-minh-hdt",
    "topic": "05-7-hang-dang-thuc",
    "count": 4,
    "representative_id": "ID05V1_116",
    "question": "Sau khi khai triển, đẳng thức nào đúng với mọi \\(a,b\\)?",
    "correct": "\\((a+b)^2+(a-b)^2=2(a^2+b^2)\\)",
    "co_tags": [
      "chung-minh-hdt"
    ]
  },
  {
    "code": "nhan-tu-chung",
    "topic": "06-phan-tich-da-thuc",
    "count": 20,
    "representative_id": "FAC06V1_001",
    "question": "Phân tích đa thức \\(20 x^{4} - 5 x^{2}\\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.",
    "correct": "\\(5x^2(4x^2-1)\\)",
    "co_tags": [
      "nhan-tu-chung"
    ]
  },
  {
    "code": "doi-dau-nhan-tu-chung",
    "topic": "06-phan-tich-da-thuc",
    "count": 8,
    "representative_id": "FAC06V1_013",
    "question": "Phân tích \\(4x(x-2)+5(2-x)\\) thành nhân tử.",
    "correct": "\\((x-2)(4x-5)\\)",
    "co_tags": [
      "doi-dau-nhan-tu-chung",
      "nhan-tu-chung"
    ]
  },
  {
    "code": "hieu-hai-binh-phuong",
    "topic": "06-phan-tich-da-thuc",
    "count": 12,
    "representative_id": "FAC06V1_021",
    "question": "Phân tích \\(4 x^{2} - 25\\) thành nhân tử.",
    "correct": "\\((2x-5)(2x+5)\\)",
    "co_tags": [
      "hieu-hai-binh-phuong"
    ]
  },
  {
    "code": "binh-phuong-hoan-chinh",
    "topic": "06-phan-tich-da-thuc",
    "count": 10,
    "representative_id": "FAC06V1_033",
    "question": "Phân tích \\(4 x^{2} - 20 x + 25\\) thành nhân tử.",
    "correct": "\\((2x-5)^2\\)",
    "co_tags": [
      "binh-phuong-hoan-chinh"
    ]
  },
  {
    "code": "tong-hieu-lap-phuong",
    "topic": "06-phan-tich-da-thuc",
    "count": 10,
    "representative_id": "FAC06V1_043",
    "question": "Phân tích \\(8 x^{3} + 8\\) thành nhân tử.",
    "correct": "\\((2x+2)(4x^2-4x+4)\\)",
    "co_tags": [
      "tong-hieu-lap-phuong"
    ]
  },
  {
    "code": "nhom-hang-tu",
    "topic": "06-phan-tich-da-thuc",
    "count": 12,
    "representative_id": "FAC06V1_053",
    "question": "Phân tích \\(4x^2-16x+1x-4\\) bằng phương pháp nhóm hạng tử.",
    "correct": "\\((4x+1)(x-4)\\)",
    "co_tags": [
      "nhom-hang-tu"
    ]
  },
  {
    "code": "tach-hang-tu-giua",
    "topic": "06-phan-tich-da-thuc",
    "count": 12,
    "representative_id": "FAC06V1_065",
    "question": "Phân tích \\(x^{2} + 5 x + 6\\) thành nhân tử bằng cách tách hạng tử giữa.",
    "correct": "\\((x+2)(x+3)\\)",
    "co_tags": [
      "tach-hang-tu-giua"
    ]
  },
  {
    "code": "phoi-hop-phuong-phap",
    "topic": "06-phan-tich-da-thuc",
    "count": 16,
    "representative_id": "FAC06V1_077",
    "question": "Phân tích hoàn toàn \\(3 x^{3} - 48 x\\) thành nhân tử.",
    "correct": "\\(3x(x-4)(x+4)\\)",
    "co_tags": [
      "phoi-hop-phuong-phap"
    ]
  },
  {
    "code": "kiem-tra-phan-tich",
    "topic": "06-phan-tich-da-thuc",
    "count": 8,
    "representative_id": "FAC06V1_093",
    "question": "Đẳng thức phân tích nào dưới đây đúng?",
    "correct": "\\(x^{2} - 9=(x - 3)(x + 3)\\)",
    "co_tags": [
      "kiem-tra-phan-tich"
    ]
  },
  {
    "code": "giai-pt-bang-nhan-tu",
    "topic": "06-phan-tich-da-thuc",
    "count": 12,
    "representative_id": "FAC06V1_101",
    "question": "Giải phương trình \\(x^{2} - 4 x=0\\) bằng phân tích nhân tử.",
    "correct": "\\(x=0\\;\\text{hoặc}\\;x=4\\)",
    "co_tags": [
      "giai-pt-bang-nhan-tu"
    ]
  },
  {
    "code": "ung-dung-phan-tich",
    "topic": "06-phan-tich-da-thuc",
    "count": 8,
    "representative_id": "FAC06V1_113",
    "question": "Với mọi số nguyên \\(n\\), vì sao \\(n^2+n\\) luôn chia hết cho 2?",
    "correct": "\\(n^2+n=n(n+1)\\), tích hai số nguyên liên tiếp luôn chẵn.",
    "co_tags": [
      "ung-dung-phan-tich"
    ]
  },
  {
    "code": "nhan-biet-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 8,
    "representative_id": "RAT07V1_001",
    "question": "Nhận xét đúng về \\(\\frac{x+1}{x-2}\\) là:",
    "correct": "Phân thức đại số",
    "co_tags": [
      "nhan-biet-phan-thuc"
    ]
  },
  {
    "code": "dieu-kien-xac-dinh",
    "topic": "07-phan-thuc-dai-so",
    "count": 16,
    "representative_id": "RAT07V1_009",
    "question": "Tìm điều kiện xác định của \\(\\frac{x+1}{x-5}\\).",
    "correct": "\\(x\\ne 5\\)",
    "co_tags": [
      "dieu-kien-xac-dinh"
    ]
  },
  {
    "code": "phan-tich-tu-mau",
    "topic": "07-phan-thuc-dai-so",
    "count": 32,
    "representative_id": "RAT07V1_017",
    "question": "Tìm điều kiện xác định của \\(\\frac{x+2}{x^{2} + x - 6}\\).",
    "correct": "\\(x\\ne -3,\\;x\\ne 2\\)",
    "co_tags": [
      "dieu-kien-xac-dinh",
      "phan-tich-tu-mau"
    ]
  },
  {
    "code": "hai-phan-thuc-bang-nhau",
    "topic": "07-phan-thuc-dai-so",
    "count": 6,
    "representative_id": "RAT07V1_025",
    "question": "Chọn khẳng định đúng:",
    "correct": "\\(\\frac{x+1}{x-2}\\) và \\(\\frac{2x+2}{2x-4}\\) bằng nhau trên miền \\(x\\ne2\\).",
    "co_tags": [
      "hai-phan-thuc-bang-nhau",
      "giu-dieu-kien-ban-dau"
    ]
  },
  {
    "code": "giu-dieu-kien-ban-dau",
    "topic": "07-phan-thuc-dai-so",
    "count": 14,
    "representative_id": "RAT07V1_063",
    "question": "Nhận xét đúng về phép rút gọn \\(\\frac{x^2-4}{x-2}=x+2\\) là:",
    "correct": "Đúng khi giữ điều kiện ban đầu \\(x\\ne2\\).",
    "co_tags": [
      "giu-dieu-kien-ban-dau"
    ]
  },
  {
    "code": "doi-dau-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 8,
    "representative_id": "RAT07V1_031",
    "question": "Đẳng thức đổi dấu nào đúng?",
    "correct": "\\(\\frac{1}{x-1}=-\\frac{1}{1-x}\\)",
    "co_tags": [
      "doi-dau-phan-thuc"
    ]
  },
  {
    "code": "rut-gon-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 32,
    "representative_id": "RAT07V1_047",
    "question": "Rút gọn \\(\\frac{x^{2} - 9}{x^{2} - 3 x}\\) (giữ điều kiện xác định ban đầu).",
    "correct": "\\(\\frac{x + 3}{x}\\)",
    "co_tags": [
      "rut-gon-phan-thuc",
      "phan-tich-tu-mau"
    ]
  },
  {
    "code": "quy-dong-mau-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 22,
    "representative_id": "RAT07V1_071",
    "question": "Mẫu thức chung phù hợp của \\(\\frac1{x-1}\\) và \\(\\frac1{x-2}\\) là:",
    "correct": "\\((x-1)(x-2)\\)",
    "co_tags": [
      "quy-dong-mau-thuc"
    ]
  },
  {
    "code": "cong-tru-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 18,
    "representative_id": "RAT07V1_081",
    "question": "Tính và rút gọn \\(\\frac1x+\\frac{1}{2x}\\).",
    "correct": "\\(\\frac{3}{2x}\\)",
    "co_tags": [
      "cong-tru-phan-thuc",
      "quy-dong-mau-thuc"
    ]
  },
  {
    "code": "nhan-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 14,
    "representative_id": "RAT07V1_093",
    "question": "Tính và rút gọn \\(\\frac{x^2-1}{x-1}\\cdot\\frac1{x+1}\\) (với biểu thức xác định).",
    "correct": "\\(1\\)",
    "co_tags": [
      "nhan-phan-thuc",
      "rut-gon-phan-thuc"
    ]
  },
  {
    "code": "chia-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 8,
    "representative_id": "RAT07V1_101",
    "question": "Tính \\(\\frac{x+1}{x-1}:\\frac{(x+1)^2}{x^2-1}\\) (trên miền xác định).",
    "correct": "\\(1\\)",
    "co_tags": [
      "chia-phan-thuc",
      "rut-gon-phan-thuc"
    ]
  },
  {
    "code": "bieu-thuc-nhieu-phep-tinh",
    "topic": "07-phan-thuc-dai-so",
    "count": 6,
    "representative_id": "RAT07V1_109",
    "question": "Rút gọn \\(A=(\\frac1{x-1}+\\frac1{x+1})\\cdot\\frac{x^2-1}{2x}\\) (với \\(x\\ne0,\\;x\\ne1,\\;x\\ne-1\\)).",
    "correct": "\\(1\\)",
    "co_tags": [
      "bieu-thuc-nhieu-phep-tinh",
      "cong-tru-phan-thuc",
      "nhan-phan-thuc"
    ]
  },
  {
    "code": "tinh-gia-tri-phan-thuc",
    "topic": "07-phan-thuc-dai-so",
    "count": 4,
    "representative_id": "RAT07V1_115",
    "question": "Tính giá trị của \\(A=\\frac{x + 1}{x - 2}\\) tại \\(x=3\\).",
    "correct": "\\(4\\)",
    "co_tags": [
      "tinh-gia-tri-phan-thuc"
    ]
  },
  {
    "code": "tim-gia-tri-nguyen",
    "topic": "07-phan-thuc-dai-so",
    "count": 2,
    "representative_id": "RAT07V1_119",
    "question": "Với x nguyên, tìm các giá trị để \\(\\frac{x+1}{x-2}\\) là số nguyên.",
    "correct": "\\(x\\in\\{-1,1,3,5\\}\\)",
    "co_tags": [
      "tim-gia-tri-nguyen"
    ]
  }
]
```

## Independent review requirements

Review all **52 unique codes** and all **55 topic-code occurrences**.

For each code decide:
1. `semantic_kind_candidate`: PASS or corrected value.
2. `canonical_counter_candidate`: YES / NO / PENDING.
3. `evidence_readiness_candidate`: whether current bank can support a learner counter/mastery claim, or needs dedicated / stepwise / written evidence.
4. whether legacy code remains useful as metadata even when it should not be a mastery counter.
5. whether any proposed parent/method/context relationship is too broad.

Special decisions:
- Confirm/reject the 3 shared-code canonical merges.
- Decide whether `tong-hieu-lap-phuong` should be a parent/category over `tong-hai-lap-phuong` + `hieu-hai-lap-phuong`.
- Decide whether `phoi-hop-phuong-phap` should stay a broad legacy category and whether `phan-tich-da-thuc-hoan-toan` is a valid new canonical output skill candidate.
- Decide whether `chung-minh-hdt` is a valid canonical competency whose current MCQs are insufficient (written evidence required), rather than deleting the skill.
- Decide whether `bien-doi-nhieu-buoc`, `tinh-nhanh-hdt`, `rut-gon-hdt`, `giai-phuong-trinh-hdt`, `kiem-tra-phan-tich`, `ung-dung-phan-tich`, `bieu-thuc-nhieu-phep-tinh` are canonical skills, task families, parent/application labels, or should remain PENDING.
- Keep `tim-gia-tri-nguyen` outside Core unless source evidence justifies a different layer.

Return:
1. Packet ID + verdict `PASS`, `REVISIONS_REQUIRED`, or `INSUFFICIENT_EVIDENCE`.
2. Coverage: 52/52 unique codes and 55/55 topic-code occurrences, or list missing.
3. Revision table only: code | field | current candidate | corrected candidate | reason.
4. Shared-code table for the 3 cross-topic codes: MERGE_ONE_CONCEPT / KEEP_SEPARATE + reason + task-demand note.
5. Relationship table for all 8 relationship candidates in the register: PASS/REVISE.
6. Decision for new candidate `phan-tich-da-thuc-hoan-toan`.
7. Final counts by semantic kind and canonical-counter status.
8. Explicit confirmation that this review authorizes **no runtime migration, tag rewrite, counter merge, history regrade or mastery threshold**.
