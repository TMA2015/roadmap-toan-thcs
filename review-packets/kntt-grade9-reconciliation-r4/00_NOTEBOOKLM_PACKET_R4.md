# NotebookLM Review Packet — KNTT Grade 9 Reconciliation R4

**packet_id:** `MATH-KNTT-G9-RECON-R4-20261004`  
**scope:** Final four Grade-9 exact-ID mismatches + statistics layer audit  
**release boundary:** REVIEW ONLY — no implementation/deploy authorization

## 1. Select exactly 5 Sources

1. NotebookLM Math Review Rules v1.2
2. Self-Learning Math Master Plan v1.2.1
3. SGK Toán 9, tập một — Kết nối tri thức với cuộc sống
4. SGK Toán 9, tập hai — Kết nối tri thức với cuộc sống
5. This packet — `MATH-KNTT-G9-RECON-R4-20261004`

Do not select Grade 6, 7 or 8 textbook PDFs for this review.

## 2. Review exactly these 4 refs

1. `bang-tan-so-tuong-doi`
2. `bieu-do-tan-so`
3. `bieu-do-tan-so-tuong-doi`
4. `bang-tan-so-ghep-nhom`

## 3. Current taxonomy context

Current Grade-9 map Chapter 7: **Tần số và tần số tương đối**.

Current canonical targets already present:
- `bang-tan-so`
- `tan-suat`
- `du-lieu-ghep-nhom`

Current families:
- `STAT-FREQUENCY` — label “Bảng tần số và tần suất” — layer **Core-Support** — skills `bang-tan-so`, `tan-suat`
- `STAT-REPRESENT` — layer **KNTT-Core** — skills `chon-bieu-do`, `chuyen-bang-bieu-do`
- `STAT-CHART-READ` — layer **KNTT-Core**
- `STAT-ADVANCED-DATA` — label “Dữ liệu ghép nhóm và bẫy thang đo” — layer **Entrance10** — skill `du-lieu-ghep-nhom`

There is a possible layer conflict: Grade-9 KNTT Chapter 7 may make some content Core even though the current registry labels it Core-Support or Entrance10.

## 4. Questions

### `bang-tan-so-tuong-doi`
Is this sufficiently represented by existing skill `tan-suat` / family `STAT-FREQUENCY`, or does S1 justify a distinct canonical skill?

### `bieu-do-tan-so`
Should this map to an existing representation/chart family, remain lesson-local, or become a distinct skill?

### `bieu-do-tan-so-tuong-doi`
Should this map to existing `STAT-REPRESENT` + frequency concepts, remain lesson-local, or become a distinct skill?

### `bang-tan-so-ghep-nhom`
Can this map to existing `du-lieu-ghep-nhom`, or does S1 require a more specific canonical identity?

## 5. Layer audit — mandatory

Also review these two current layer decisions against S1 Grade-9 placement:

- `STAT-FREQUENCY`: current layer **Core-Support**
- `STAT-ADVANCED-DATA` / `du-lieu-ghep-nhom`: current layer **Entrance10**

For each, choose:
- `KEEP_LAYER`
- `CHANGE_TO_KNTT_CORE`
- `CHANGE_TO_CORE_SUPPORT`
- `INSUFFICIENT_EVIDENCE`

Do not promote a layer merely because the project map says so; use the two SGK Toán 9 volumes as S1 authority.

## 6. Decision vocabulary for refs

Choose exactly one per ref:
- `MAP_TO_SKILL`
- `MAP_TO_FAMILY`
- `KEEP_LESSON_LOCAL`
- `ADD_CANONICAL_SKILL`
- `ADD_CANONICAL_FAMILY`
- `INSUFFICIENT_EVIDENCE`

Apply the anti-inflation rule. A table/chart variant is not automatically a global assessed skill.

## 7. Required output

Return this machine-checkable block first:

```text
PACKET|MATH-KNTT-G9-RECON-R4-20261004
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_IDS|4
REVIEWED_IDS|4

REF|bang-tan-so-tuong-doi|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|bieu-do-tan-so|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|bieu-do-tan-so-tuong-doi|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|bang-tan-so-ghep-nhom|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>

LAYER|STAT-FREQUENCY|Core-Support|<KEEP_LAYER/CHANGE_TO_KNTT_CORE/CHANGE_TO_CORE_SUPPORT/INSUFFICIENT_EVIDENCE>|<SHORT_REASON>
LAYER|STAT-ADVANCED-DATA|Entrance10|<KEEP_LAYER/CHANGE_TO_KNTT_CORE/CHANGE_TO_CORE_SUPPORT/INSUFFICIENT_EVIDENCE>|<SHORT_REASON>

MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G9_R4_RECONCILIATION_REVIEW_COMPLETE
```

Then provide concise source-based reasoning.

Do not issue the clearance string if fewer than 4 refs are reviewed or either layer audit is missing.
