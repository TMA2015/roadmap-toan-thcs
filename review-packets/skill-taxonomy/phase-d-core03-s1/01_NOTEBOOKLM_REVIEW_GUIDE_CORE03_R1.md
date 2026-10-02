# NotebookLM review guide — CT03 S1 full-bank overlay R1

Packet ID: `MATH-SKILL-CORE03-S1-OVERLAY-R1-20261002`

## Upload these 2 temporary sources

1. `00_CT03_OVERLAY_SOURCE.md`
   - NotebookLM-readable rendering of all 120 mappings
   - source JSON remains repo provenance only and is **not** uploaded to NotebookLM
2. this review guide: `01_NOTEBOOKLM_REVIEW_GUIDE_CORE03_R1.md`

Use only these selected review sources plus the already-frozen permanent project sources.

## Academic boundary

- 120 Practice items.
- Candidate summary: 118 primary + 2 formative-only.
- Max 1 primary assessed skill per one-answer MCQ.
- `doi-don-vi-ti-so` supports `ti-so`; no separate mastery.
- `he-so-ti-le-thuan` / `he-so-ti-le-nghich` merge to parent direct/inverse proportion skills.
- `ti-le-ban-do`, `chuyen-dong-ti-le`, `nang-suat-ti-le` are contexts, not mastery skills.
- `ti-so-phan-tram` aliases shared canonical `phan-tram`.
- `mo-hinh-ti-le` remains an Entrance10 skill, but current MCQs 117–120 do not isolate full model construction. It must not receive primary MCQ evidence merely because the tag appears.
- RAT03V1_105 and RAT03V1_113 are proposed formative-only because their final answers do not isolate a stable canonical proportion skill.
- Legacy questions, answers, IDs and tags remain unchanged.
- No runtime, Readiness/mastery, history backfill or migration is authorized.

## CT03 S1 taxonomy rows

```json
[
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
  }
]
```

## Required output

Return only machine-checkable lines:

`PACKET|MATH-SKILL-CORE03-S1-OVERLAY-R1-20261002|PASS`
or `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

`COVERAGE|120|<reviewed_count>|<revision_count>|<missing_count>`

If revisions:
`FIX|<question_id>|<field>|<current>|<corrected>|<reason>`
Otherwise:
`FIX_COUNT|0`

Review all 17 clone families from the overlay:
`CLONE|<family_id>|PASS`
or
`CLONE|<family_id>|REVISE|<corrected membership>|<reason>`

Checks:
`CHECK|009_014|PASS`
`CHECK|056_058|PASS`
`CHECK|062_063_069|PASS`
`CHECK|074_075|PASS`
`CHECK|083_086|PASS`
`CHECK|091_098|PASS`
`CHECK|099_104|PASS`
`CHECK|105_113|PASS`
`CHECK|106_116|PASS`
`CHECK|117_120|PASS`

Counts:
`COUNT|MAPPED_PRIMARY|118`
`COUNT|FORMATIVE_ONLY|2`
and one `COUNT|PRIMARY|<skill_id>|<count>` for each primary skill in the overlay summary.

Architecture:
`ARCH_1|PASS` max one primary per MCQ
`ARCH_2|PASS` coefficient tags merge to parent proportion skills
`ARCH_3|PASS` map/motion/productivity remain contexts
`ARCH_4|PASS` percent-ratio aliases shared canonical phan-tram
`ARCH_5|PASS` mo-hinh-ti-le gets no MCQ primary from contextual final-answer items
`ARCH_6|PASS` 105 and 113 may remain formative-only
`ARCH_7|PASS` clone families are evidence de-dup only
`ARCH_8|PASS` legacy content/answers/tags unchanged
`ARCH_9|PASS` no runtime/Readiness/mastery/history backfill
`ARCH_10|PASS` modeling still needs written evidence for full certification

Final:
`AUTHORIZATION|CLEARED_FOR_CT03_S1_RECONCILIATION`
or
`AUTHORIZATION|BLOCKED_PENDING_REVISIONS`

No prose or markdown tables outside these lines.
