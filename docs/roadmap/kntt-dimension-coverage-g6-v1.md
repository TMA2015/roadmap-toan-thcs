# KNTT Dimension Coverage Audit — Grade 6 v1

**Date:** 2026-10-04  
**State:** ACTIVE EVIDENCE AUDIT · BÀI 30 + BÀI 42 + BÀI 4–5 REPAIRED R1 · NO RUNTIME / MASTERY / READINESS CHANGE  
**Input:** semantically reconciled Grade-6 KNTT matrix (31 rows)

## 1. Why this audit exists

The KNTT Coverage Matrix is now semantically reconciled for Grades 6–9, but a mapped skill ID does **not** prove the self-learning path is complete.

This pilot audits six separate dimensions for each Grade-6 KNTT row:

1. `SKILL_MAP`
2. `LEARN_CONTENT`
3. `MICRO_PRACTICE`
4. `PRACTICE_BANK`
5. `WRITTEN_LIBRARY`
6. `READINESS`

The audit is deliberately conservative. Topic-level evidence is not promoted to lesson-level coverage.

## 2. Grade-6 snapshot

| Dimension | Current result |
|---|---|
| SKILL_MAP | 31/31 `VERIFIED_SEMANTIC` |
| LEARN_CONTENT | 10 VERIFIED_DIRECT; 2 VERIFIED_LESSON_LOCAL; 19 partial in different forms |
| MICRO_PRACTICE | 15 VERIFIED_DIRECT; 2 VERIFIED_LESSON_LOCAL; 12 PARTIAL; 2 FAMILY_LEVEL_ONLY; 0 NONE |
| PRACTICE_BANK | 22 TOPIC_SKILL_EVIDENCE; 5 PARTIAL_TOPIC_EVIDENCE; 4 FAMILY_LEVEL_TOPIC_EVIDENCE; 0 NONE |
| WRITTEN_LIBRARY | 5 CANDIDATE_ONLY_NO_KNTT_PLACEMENT; 26 NONE |
| READINESS | 1 AUTHORIZED_TOPIC_LEVEL; 2 PENDING_REVIEW; 28 NOT_VERIFIED_STRUCTURED |

## 3. Most important findings

### A. Bài 30 — Làm tròn và ước lượng — REPAIRED R1

The original direct-evidence gap is now repaired and independently reviewed.

- `lam-tron-so` remains the reviewed canonical skill under `NUM-SETS`.
- Learn card `num02-g6-core-5` now explicitly includes `lam-tron-so` and teaches the rounding rule plus estimation distinction.
- Grade-6 Micro now contains reviewed items `NUM02MICRO_021–023`.
- Topic02 Practice now contains reviewed items `NUM02V1_121–132` in chunk `02-so-va-phep-tinh-v1-05.json`.
- `uoc-luong` remains lesson-local; no `uoc-luong` canonical skill was created.
- NotebookLM result: **PASS**, 3/3 Micro + 12/12 Practice, clearance `G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE`.
- Review receipt: `review-packets/kntt-g6-bai30-rounding-r1/01_NOTEBOOKLM_RESULT_R1.md`.

This repair closes **Learn / Micro / Practice direct evidence only**. Written Library remains `NONE` and Readiness remains `NOT_VERIFIED_STRUCTURED`; no mastery/readiness claim is inferred.

### B. Bài 42 — Kết quả có thể và sự kiện — REPAIRED R1

The original Grade-6 lesson-local learning-evidence gap is now repaired and independently reviewed.

- `ket-qua-co-the` and `su-kien-don-gian` remain reviewed lesson-local concepts under family `PROB-EVENT`.
- Learn card `prob23-core-1` now explicitly teaches possible outcomes and Grade-6 `sự kiện`, then clearly bridges to Bài 43 experimental probability.
- Grade-6 Micro now contains reviewed items `PRO23MICRO_018–020`.
- These items use `evidence_role=LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`, so they do not create a new canonical skill counter or grant mastery/readiness credit.
- Grade-6 terminology `sự kiện` is preserved; it is not replaced by Grade-7 canonical `biến cố`.
- Practice Bank remains unchanged at 120 questions and is still classified only as `FAMILY_LEVEL_TOPIC_EVIDENCE` for this row.
- NotebookLM result: **PASS**, 3/3 Micro, terminology/boundary PASS, clearance `G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE`.
- Review receipt: `review-packets/kntt-g6-bai42-event-outcome-r1/01_NOTEBOOKLM_RESULT_R1.md`.

This repair closes the **Learn + lesson-local Micro** gap only. Written Library remains `NONE`; CT23 Readiness remains `PENDING_REVIEW`; no mastery/readiness claim is inferred.

### C. Bài 4–5 — Cộng, trừ, nhân, chia số tự nhiên và tính chất — REPAIRED R1

The Grade-6 lesson-local Learn/Micro gap is now repaired under the low-risk source-confirmed review policy.

- `cong-tru-so-tu-nhien` and `nhan-chia-so-tu-nhien` remain lesson-local concepts under family `NUM-INTEGER-OPS`, matching the already-reviewed Grade-6 reconciliation.
- Learn card `num02-g6-core-1` now explicitly teaches natural-number operations/properties together with the existing order-of-operations content.
- Grade-6 Micro now contains `NUM02MICRO_024–026` for subtraction, multiplication properties, and distributive-property application.
- These items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; no duplicate canonical skill or mastery/readiness credit is created.
- A new NotebookLM round was not required because the taxonomy/family decision had already passed independent review and the added arithmetic is deterministic.
- Practice remains `FAMILY_LEVEL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

This repair closes the **Learn + lesson-local Micro** gap only.

### D. Family-level rows that need more precise practice evidence

Two rows are currently family-level rather than lesson-specific in micro/practice:

- Bài 8
- Bài 27

This is not automatically a taxonomy problem. It means the current evidence is too broad to prove those lesson demands are practised distinctly.

### E. Grade-6 statistics is only partially covered at micro level

Bài 38–41 has a strong topic workspace and Practice Bank, but Grade-6 micro evidence covers only a subset of the row's direct skills. Family-local concepts such as statistical table / pictogram language also remain broader than the current canonical counters.

### F. Written Library placement gap

The current shared Written Exercise Library contains **50 reviewed exercises**, but **0 exercises currently have `kntt_placements`**.

Five Grade-6 rows have plausible skill-matched candidates, but they are intentionally classified only as:

`CANDIDATE_ONLY_NO_KNTT_PLACEMENT`

until the library adopts the placement contract. Topic + grade overlay must not be treated as true KNTT lesson placement.

## 4. Priority rows

- **Ch.2 Bài 8 — Quan hệ chia hết và tính chất:** Learn=PARTIAL_LOCAL_OR_FAMILY; Micro=FAMILY_LEVEL_ONLY; Practice=FAMILY_LEVEL_TOPIC_EVIDENCE; Readiness=NOT_VERIFIED_STRUCTURED.
- **Ch.6 Bài 27 — Hai bài toán về phân số:** Learn=PARTIAL_LOCAL_OR_FAMILY; Micro=FAMILY_LEVEL_ONLY; Practice=FAMILY_LEVEL_TOPIC_EVIDENCE; Readiness=NOT_VERIFIED_STRUCTURED.
- **Ch.9 Bài 38-41 — Dữ liệu, thu thập dữ liệu, bảng thống kê, biểu đồ tranh, biểu đồ cột và cột kép:** Learn=PARTIAL_LOCAL_OR_FAMILY; Micro=PARTIAL; Practice=PARTIAL_TOPIC_EVIDENCE; Readiness=AUTHORIZED_TOPIC_LEVEL.

## 5. Full row table

| Chapter | Lesson | Learn | Micro | Practice | Written | Readiness |
|---:|---|---|---|---|---|---|
| 1 | Bài 1-3 | PARTIAL_LOCAL_OR_FAMILY | PARTIAL | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 4-5 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 6 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 7 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 8 | PARTIAL_LOCAL_OR_FAMILY | FAMILY_LEVEL_ONLY | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 9 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 10 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | CANDIDATE_ONLY_NO_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 11-12 | PARTIAL_LOCAL_OR_FAMILY | PARTIAL | PARTIAL_TOPIC_EVIDENCE | CANDIDATE_ONLY_NO_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 13 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 14 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 15 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 16 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 17 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 18 | PARTIAL_PLACEMENT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 19 | PARTIAL_PLACEMENT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 20 | PARTIAL_PLACEMENT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 5 | Bài 21 | PARTIAL_PLACEMENT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 5 | Bài 22 | PARTIAL_PLACEMENT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 23-24 | PARTIAL_LOCAL_OR_FAMILY | PARTIAL | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 25-26 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 27 | PARTIAL_LOCAL_OR_FAMILY | FAMILY_LEVEL_ONLY | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 28-29 | PARTIAL_SHARED_SKILL | PARTIAL | TOPIC_SKILL_EVIDENCE | CANDIDATE_ONLY_NO_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 30 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 31 | PARTIAL_MISSING_DIRECT_SKILL | PARTIAL | PARTIAL_TOPIC_EVIDENCE | CANDIDATE_ONLY_NO_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 32 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 33 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 34-35 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 36-37 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 9 | Bài 38-41 | PARTIAL_LOCAL_OR_FAMILY | PARTIAL | PARTIAL_TOPIC_EVIDENCE | NONE | AUTHORIZED_TOPIC_LEVEL |
| 9 | Bài 42 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | PENDING_REVIEW |
| 9 | Bài 43 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | CANDIDATE_ONLY_NO_KNTT_PLACEMENT | PENDING_REVIEW |

## 6. Interpretation rules

- **VERIFIED_DIRECT** = explicit structured evidence matches the row's direct canonical skill(s).
- **VERIFIED_LESSON_LOCAL** = explicit structured evidence directly covers reviewed lesson-local concepts without creating or crediting a canonical assessed skill.
- **PARTIAL_LOCAL_OR_FAMILY** = lesson exists, but part of its identity remains family/lesson-local rather than directly evidenced.
- **PARTIAL_SHARED_SKILL** = a broad canonical skill spans multiple KNTT lessons, so evidence cannot distinguish the exact lesson demand.
- **PARTIAL_PLACEMENT** = content exists but KNTT placement is broad (for example “Lớp 6–9”) rather than exact.
- **TOPIC_SKILL_EVIDENCE** = Practice Bank contains the skill at topic level; this does not prove Grade-6 lesson placement.
- **CANDIDATE_ONLY_NO_KNTT_PLACEMENT** = written exercise matches grade/topic/skill but lacks canonical KNTT placement metadata.
- **NOT_VERIFIED_STRUCTURED** = this audit did not find an explicit structured readiness asset; it does not claim no informal self-check exists anywhere on the site.

## 7. Recommended next order

1. Review Bài 8 and Bài 27 for lesson-specific micro/problem-type evidence without inflating taxonomy.
2. Complete Grade-6 statistics micro coverage.
3. Migrate the Shared Written Exercise Library toward canonical `kntt_placements` before claiming KNTT written coverage.
4. Only after Learn/Practice gaps are reconciled should Readiness expansion be considered.
5. Keep Bài 30 Written/Readiness dimensions open until they receive their own evidence; the R1 repair must not be promoted into a mastery/readiness claim.
6. Keep Bài 42 Practice at family/topic level and Readiness pending until separate evidence is reviewed; the lesson-local repair must not be promoted into a canonical skill or mastery/readiness claim.
7. Keep Bài 4–5 Practice at family/topic level and Readiness open; the source-confirmed lesson-local repair must not be promoted into a canonical skill or mastery/readiness claim.

## 8. Protected boundaries

This audit does not:
- generate new content;
- create/rename taxonomy identities;
- alter Practice or Readiness scoring;
- migrate learner history;
- activate taxonomy runtime;
- grant mastery/readiness credit;
- change learner-facing UI.
