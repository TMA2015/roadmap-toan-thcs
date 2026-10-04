# KNTT Coverage Matrix 6–9 — Framework v1

**Date:** 2026-10-04  
**State:** FRAMEWORK / RECONCILIATION ONLY / NO LEARNER-FACING CHANGE  
**Architecture:** One Knowledge Graph · Two Learning Paths

## 1. Purpose

This matrix reconciles the four previously reviewed KNTT grade overlays with the **current** canonical skill universe.

It is not a new curriculum and does not create a second skill bank.

Target structure:

`Grade → Chapter → Lesson → skill → related Vertical-Spine topic → coverage status`

The detailed machine-readable matrix is:

`docs/assets/data/curriculum/kntt-coverage-matrix-6-9-v1.json`

## 2. Important interpretation rule

A skill reference that does not match the current skill universe is **not automatically a missing curriculum skill**.

It may be:
- a legacy ID whose concept now exists under a newer canonical ID;
- a historical map granularity that was later consolidated into a skill family;
- a genuine curriculum coverage gap.

Therefore this matrix uses **RECONCILE** states rather than labeling every unmatched reference as MISSING.

## 3. Status definitions

- **CURRENT_MAPPED** — all historical skill references for the row match the current taxonomy/knowledge-graph skill universe.
- **CURRENT_MAPPED_ITEM_REVIEW** — refs exist, but the reviewed grade map still requires item-level Core/placement review for some skills.
- **PARTIAL_RECONCILE** — some refs match and some still need ID/content reconciliation.
- **RECONCILE_REQUIRED** — none of the historical refs directly match current IDs; this is an ID/schema warning, not proof of missing content.

These statuses measure **mapping reconciliation**, not complete learner-facing Course Map implementation.

## 4. Whole-project snapshot

| Grade | Chapters | Curriculum rows | Current-mapped refs | Unresolved refs | Row status |
|---|---:|---:|---:|---:|---|
| 6 | 9 | 31 | 31/66 | 35 | RECONCILE_REQUIRED: 13; CURRENT_MAPPED: 13; PARTIAL_RECONCILE: 5 |
| 7 | 10 | 21 | 76/87 | 11 | PARTIAL_RECONCILE: 7; CURRENT_MAPPED: 14 |
| 8 | 10 | 16 | 100/103 | 3 | CURRENT_MAPPED: 14; PARTIAL_RECONCILE: 2 |
| 9 | 10 | 10 | 96/100 | 4 | CURRENT_MAPPED: 7; CURRENT_MAPPED_ITEM_REVIEW: 2; PARTIAL_RECONCILE: 1 |

Across all grades:
- **78** curriculum rows/groups;
- **48** currently map cleanly;
- **2** map to current skills but still require item-level review;
- **15** are partially reconciled;
- **13** require ID/schema reconciliation.

## 5. Why old `proposed_skills` cannot be copied forward

The older grade maps captured a valid checkpoint, but the project has evolved.

| Grade | Historically proposed | Already present now | Still unresolved |
|---|---:|---:|---:|
| 7 | 22 | 12 | 10 |
| 8 | 8 | 6 | 2 |
| 9 | 27 | 23 | 4 |

This is why the new Coverage Matrix must reconcile against current taxonomy/graph state instead of treating old `proposed_skills` as current gaps.

## 6. Grade-by-grade reconciliation priorities

### Grade 6

- Curriculum rows: **31** across **9** chapters.
- Direct current skill matches: **31/66** unique historical refs.
- Unresolved refs: **35**.
- **Priority:** ID/granularity reconciliation first. Grade 6 uses the oldest map schema and many labels predate the current taxonomy; do not interpret 35 unresolved refs as 35 missing skills.

Unresolved historical refs:

- `tap-hop`
- `ghi-so-tu-nhien`
- `thu-tu-so-tu-nhien`
- `cong-tru-so-tu-nhien`
- `nhan-chia-so-tu-nhien`
- `quan-he-chia-het`
- `tinh-chat-chia-het`
- `so-nguyen-to-hop-so`
- `uoc-chung-ucln`
- `boi-chung-bcnn`
- `bai-toan-ucln-bcnn`
- `so-nguyen-truc-so`
- `so-sanh-so-nguyen`
- `cong-tru-so-nguyen`
- `quy-tac-dau-ngoac`
- `nhan-so-nguyen`
- `chia-het-so-nguyen`
- `uoc-boi-so-nguyen`
- `phan-so-bang-nhau`
- `so-sanh-phan-so`
- `hon-so-duong`
- `cong-tru-phan-so`
- `nhan-chia-phan-so`
- `tim-gia-tri-phan-so-cua-so`
- `tim-so-khi-biet-gia-tri-phan-so`
- `so-thap-phan`
- `phep-tinh-so-thap-phan`
- `lam-tron`
- `uoc-luong`
- `bai-toan-phan-tram`
- `du-lieu`
- `bang-thong-ke`
- `bieu-do-tranh`
- `ket-qua-co-the`
- `su-kien-don-gian`

### Grade 7

- Curriculum rows: **21** across **10** chapters.
- Direct current skill matches: **76/87** unique historical refs.
- Unresolved refs: **11**.
- **Priority:** reconcile the remaining old proposed/legacy refs, especially rational-number operations, real-number concepts, chart construction, one-variable polynomial identity, and simple probability naming.

Unresolved historical refs:

- `phep-tinh-so-huu-ti`
- `quy-tac-chuyen-ve`
- `can-bac-hai`
- `so-thap-phan-vo-han-tuan-hoan`
- `so-vo-ti`
- `tap-hop-so-thuc`
- `ve-bieu-do-quat-tron`
- `ve-bieu-do-doan-thang`
- `da-thuc-mot-bien`
- `chia-da-thuc-mot-bien`
- `xac-suat-bien-co-don-gian`

### Grade 8

- Curriculum rows: **16** across **10** chapters.
- Direct current skill matches: **100/103** unique historical refs.
- Unresolved refs: **3**.
- **Priority:** only a small residual set remains; reconcile the compound rational-expression label and probability vocabulary before declaring the overlay clean.

Unresolved historical refs:

- `bieu-thuc-nhieu-phep-tinh`
- `ket-qua-co-the`
- `ket-qua-thuan-loi`

### Grade 9

- Curriculum rows: **10** across **10** chapters.
- Direct current skill matches: **96/100** unique historical refs.
- Unresolved refs: **4**.
- **Priority:** the main explicit residual is Chapter 7 frequency/relative-frequency representation; Chapters 6 and 8 also retain item-level Core review flags from the historical map.

Unresolved historical refs:

- `bang-tan-so-tuong-doi`
- `bieu-do-tan-so`
- `bieu-do-tan-so-tuong-doi`
- `bang-tan-so-ghep-nhom`

## 7. Recommended reconciliation sequence

### R1 — Normalize Grade 6 IDs first
Grade 6 has the highest legacy-ID noise. Build an explicit alias/reconciliation table:

`historical_ref → canonical_skill / family / genuine_gap / needs_review`

Do **not** rename canonical current skills merely to match the old map.

### R2 — Close Grade 7 residuals
Separate:
- genuine missing KNTT concepts;
- aliases to current skill/family names;
- content already covered but at broader/narrower granularity.

### R3 — Close Grade 8 residuals
This should be a small bounded pass.

### R4 — Review Grade 9 Chapter 7 + historical item-review flags
Grade 9 is already structurally close to the current skill universe, but mapping must not be declared complete until the frequency/relative-frequency block and item-review flags are reconciled.

## 8. Coverage dimensions to add after ID reconciliation

Once mapping identity is clean, expand each row with separate dimensions instead of one overloaded “coverage” flag:

- **SKILL_MAP** — canonical skill mapping exists;
- **LEARN_CONTENT** — learner-facing lesson/Core Card coverage exists;
- **MICRO_PRACTICE** — Base/Trap/Apply or equivalent exists;
- **PRACTICE_BANK** — usable interactive practice exists;
- **WRITTEN_LIBRARY** — suitable written items exist;
- **READINESS** — assessment evidence exists where authorized.

This prevents a row from being marked “covered” merely because a skill ID exists.

## 9. Relationship to the two learning paths

The matrix belongs to the **Học theo lớp / KNTT Course Map** path, but every skill/item should still point to the shared canonical graph and 25-topic spine.

No new parallel content tree is authorized.

## 10. Protected boundaries

This framework:
- does not change learner UI;
- does not create or rename current canonical skills;
- does not change Practice/Readiness scoring;
- does not migrate history;
- does not activate Taxonomy v2 runtime;
- does not authorize mass content generation.

Next step is **reconciliation**, not expansion.
