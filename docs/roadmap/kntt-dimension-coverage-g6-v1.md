# KNTT Dimension Coverage Audit — Grade 6 v1

**Date:** 2026-10-04  
**State:** ACTIVE EVIDENCE AUDIT · G6 WRITTEN BÀI 42 R1 RECONCILED · NO RUNTIME / MASTERY / READINESS CHANGE
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
| LEARN_CONTENT | 23 VERIFIED_DIRECT; 4 VERIFIED_LESSON_LOCAL; 4 VERIFIED_DIRECT_AND_LOCAL; 0 partial |
| MICRO_PRACTICE | 23 VERIFIED_DIRECT; 4 VERIFIED_LESSON_LOCAL; 4 VERIFIED_DIRECT_AND_LOCAL; 0 partial; 0 NONE |
| PRACTICE_BANK | 23 TOPIC_SKILL_EVIDENCE; 4 PARTIAL_TOPIC_EVIDENCE; 4 FAMILY_LEVEL_TOPIC_EVIDENCE; 0 NONE |
| WRITTEN_LIBRARY | 9 `VERIFIED_KNTT_PLACEMENT` rows; 22 `NONE`; 0 candidate-only; 8 canonical Grade-6 Written items |
| READINESS | 1 AUTHORIZED_TOPIC_LEVEL; 1 REVIEWED_STRUCTURED_READINESS; 29 NOT_VERIFIED_STRUCTURED |

## 2A. Written Placement R1 — REVIEWED / RECONCILED 07/10/2026

Independent NotebookLM review passed all three canonical Written placement candidates with clearance `G6_WRITTEN_PLACEMENT_R1_CONTENT_REVIEW_COMPLETE`.

- `WX02-NUM-001` → **Bài 11–12**. Bài 10 prime factorization is supporting computation only.
- `WX02-NUM-002` → **Bài 31**. Bài 28–29 decimal arithmetic is supporting computation only.
- `WX23-PRO-001` → **Bài 43**. Bài 42 outcome/event language is supporting vocabulary only.
- Exactly **3** canonical `kntt_placements` were added; no Written item was cloned and no problem, solution, rubric, skill taxonomy, Readiness, Mastery or learner-history semantics changed.
- The two prerequisite-overlap rows (**Bài 10**, **Bài 28–29**) are now `NONE` in the Written dimension rather than false-positive candidates.

Review receipt: `review-packets/kntt-g6-written-placement-r1/01_NOTEBOOKLM_RESULT_R1.md`.

> The detailed repair sections below preserve their historical Learn/Micro checkpoint wording. This reconciliation supersedes their earlier Written candidate status where applicable.

## 2B. Written Gap Priority R1 — REVIEWED / RECONCILED 07/10/2026

Independent NotebookLM review returned **PASS** with clearance `G6_WRITTEN_GAP_PRIORITY_R1_REVIEW_COMPLETE`.

- **Reuse approved:** `WX21-STA-001` → **Grade 6 · Chapter 9 · Bài 38–41**. The whole task matches bar-chart construction, scale/axes, comparison and data-bounded interpretation.
- **Reuse rejected:** `WX21-STA-002` is **not** promoted to Grade 6 because percentage-growth computation and causal-claim analysis materially exceed the primary Bài 38–41 scope.
- **Anti-overplacement confirmed:** `WX20-GEO-001` remains outside Grade-6 KNTT; `WX23-PRO-002` remains outside Grade-6 KNTT.
- **P0 authoring priorities:** Bài 27; Bài 20; Bài 34–37.
- **P1:** Bài 38–41 reuse-first; Bài 42.
- **P2:** Bài 30; Bài 23–24.
- **Defer by default:** Bài 1–10; Bài 13–19; Bài 25–26; Bài 28–29; Bài 32–33. NONE status alone is not a reason to author a Written item.
- **Wave 1 limit:** at most **3 new items**, one high-value anchor per P0 group unless the next review recommends fewer.

Review receipt: `review-packets/kntt-g6-written-gap-priority-r1/01_NOTEBOOKLM_RESULT_R1.md`.

No Wave-1 exercise text is authored by this reconciliation; new items require their own candidate + independent review cycle.

## 2C. Written Wave 1 R1 — REVIEWED / RECONCILED 07/10/2026

Independent NotebookLM review returned **PASS** for all three Wave-1 deep Written anchors with clearance `G6_WRITTEN_WAVE1_R1_CONTENT_REVIEW_COMPLETE`.

- `WX02-NUM-003` → **Bài 27 — Hai bài toán về phân số**.
- `WX20-GEO-003` → **Bài 20 — Chu vi và diện tích một số tứ giác đã học**.
- `WX13-LIN-003` → genuine dual placement in **Bài 34–35** and **Bài 36–37**.
- Exactly **3** new canonical items were appended; no existing Written item was cloned or rewritten.
- All three remain self-marked/formative only. No automatic Readiness/Mastery credit, learner-history regrade, new canonical skill, or runtime-taxonomy change.
- Grade-6 Written coverage now contains **7 canonical items with KNTT placements**, covering **8 verified lesson rows** because `WX13-LIN-003` validly assesses two lesson groups.

Review receipt: `review-packets/kntt-g6-written-wave1-r1/01_NOTEBOOKLM_RESULT_R1.md`.

## 2D. Written Bài 42 R1 — REVIEWED / RECONCILED 08/10/2026

Independent NotebookLM review returned **PASS** for `WX23-PRO-003` with clearance `G6_WRITTEN_BAI42_R1_CONTENT_REVIEW_COMPLETE`.

- `WX23-PRO-003` → **Grade 6 · Chapter 9 · Bài 42 — Kết quả có thể và sự kiện trong trò chơi, thí nghiệm**.
- The item explicitly distinguishes a concrete outcome from a Grade-6 **sự kiện** and asks the learner to explain why one outcome may satisfy multiple events.
- The Grade-6 term **sự kiện** is preserved; Grade-7 **biến cố** is not introduced.
- The task explicitly stops before Bài 43 probability calculation.
- `ket-qua-co-the` and `su-kien-don-gian` remain lesson-local under `PROB-EVENT`; no canonical skill is created.
- Written self-check remains formative only. No Readiness/Mastery credit, learner-history regrade, or runtime-taxonomy change.
- Grade-6 Written coverage is now **8 canonical items with KNTT placements**, covering **9 verified lesson rows**.

Review receipt: `review-packets/kntt-g6-written-bai42-r1/01_NOTEBOOKLM_RESULT_R1.md`.

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

This historical repair closed the **Learn + lesson-local Micro** gap. The later independently reviewed Written Bài 42 R1 now adds `WX23-PRO-003` as `VERIFIED_KNTT_PLACEMENT`; CT23 Readiness remains unchanged and no mastery/readiness claim is inferred.

### C. Bài 4–5 — Cộng, trừ, nhân, chia số tự nhiên và tính chất — REPAIRED R1

The Grade-6 lesson-local Learn/Micro gap is now repaired under the low-risk source-confirmed review policy.

- `cong-tru-so-tu-nhien` and `nhan-chia-so-tu-nhien` remain lesson-local concepts under family `NUM-INTEGER-OPS`, matching the already-reviewed Grade-6 reconciliation.
- Learn card `num02-g6-core-1` now explicitly teaches natural-number operations/properties together with the existing order-of-operations content.
- Grade-6 Micro now contains `NUM02MICRO_024–026` for subtraction, multiplication properties, and distributive-property application.
- These items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; no duplicate canonical skill or mastery/readiness credit is created.
- A new NotebookLM round was not required because the taxonomy/family decision had already passed independent review and the added arithmetic is deterministic.
- Practice remains `FAMILY_LEVEL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

This repair closes the **Learn + lesson-local Micro** gap only.

### D. Bài 8 — Quan hệ chia hết và tính chất — REPAIRED R1

The Grade-6 lesson-local Learn/Micro gap is now repaired under the low-risk source-confirmed review policy.

- `quan-he-chia-het` and `tinh-chat-chia-het` remain lesson-local concepts under family `NUM-DIV-PRIME`.
- Learn card `num02-g6-core-2` now explicitly teaches the divisibility relation and the sum/difference divisibility properties before continuing to divisibility tests, primes, ƯCLN and BCNN.
- Grade-6 Micro now contains `NUM02MICRO_027–029` for direct divisibility recognition, divisibility of a sum, and divisibility of a difference.
- These items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; no duplicate canonical skill or mastery/readiness credit is created.
- A new NotebookLM round was not required because the lesson/family placement is already semantically reconciled and the added divisibility arithmetic is deterministic.
- Practice remains `FAMILY_LEVEL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

This repair closes the **Learn + lesson-local Micro** gap only.

### E. Bài 27 — Hai bài toán về phân số — REPAIRED R1

The Grade-6 lesson-local problem-type Learn/Micro gap is now repaired under the low-risk source-confirmed review policy.

- `tim-gia-tri-phan-so-cua-so` and `tim-so-khi-biet-gia-tri-phan-so` remain `PROBLEM_TYPE` evidence under family `NUM-FRACTION-OPS`, not new canonical skills.
- Learn card `num02-g6-core-4` now explicitly distinguishes the two inverse problem types: multiply to find a fraction of a known number; divide by the fraction to recover the original number.
- Grade-6 Micro now contains `NUM02MICRO_030–032`, covering both problem types and one real-world inverse application.
- These items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; no duplicate skill counter or mastery/readiness credit is created.
- A new NotebookLM round was not required because the problem-type/family placement is already semantically reconciled and the added fraction arithmetic is deterministic.
- Practice remains `FAMILY_LEVEL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

This repair closes the **Learn + lesson-local problem-type Micro** gap only.

### F. Bài 38–41 — Grade-6 statistics — REPAIRED R1

The Learn/Micro gap for the aggregated Grade-6 statistics row is now repaired and independently reviewed.

- Existing Grade-6 direct Micro evidence remains for `doc-bieu-do-cot` and `nhan-xet-du-lieu`.
- `STA21MICRO_016` adds direct Grade-6 evidence for `thu-thap-du-lieu`.
- `STA21MICRO_017` adds direct Grade-6 evidence for `doc-bieu-do-cot-kep`.
- `STA21MICRO_018–020` add lesson-local formative evidence for `du-lieu`, `bang-thong-ke`, and `bieu-do-tranh`.
- The three local identities remain under `STAT-DATA`, `STAT-REPRESENT`, and `STAT-CHART-READ`; they do not become new canonical learner skills.
- Local items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`.
- NotebookLM reviewed both Learn cards, all five new Micro items, both direct skill mappings, all three local boundaries, and the shared Grade-6/Grade-8 card boundary: **PASS**.
- Clearance: `G6_STATISTICS_CONTENT_REVIEW_COMPLETE`.
- Review receipt: `review-packets/kntt-g6-statistics-r1/01_NOTEBOOKLM_RESULT_R1.md`.
- Practice Bank remains unchanged at 132 questions.
- Existing STA21 Readiness remains `AUTHORIZED_TOPIC_LEVEL` for the full Grade 6–8 topic; it is not promoted into a Grade-6-only readiness claim.

The audit therefore records Learn and Micro as `VERIFIED_DIRECT_AND_LOCAL`. Practice remains `PARTIAL_TOPIC_EVIDENCE`, Written remains `NONE`, and Readiness keeps its existing topic-level scope.

### G. Bài 31 — Tỉ số, phần trăm — EXISTING MULTI-TOPIC EVIDENCE RECONCILED R1

No new academic content is required for Bài 31. The previous gap was an **audit blind spot** caused by inspecting only the primary Topic03 workspace.

The KNTT row already explicitly spans:

- primary `03-ti-le-ti-le-thuc`;
- secondary `02-so-va-phep-tinh`;
- secondary `24-bai-toan-thuc-te`.

Across the existing deployed sources:

- Topic03 Grade-6 card `rat03-core-g6-1` directly covers `ti-so` and `ti-so-phan-tram`.
- Topic03 Micro directly covers those skills through `RAT03MICRO_001` and `RAT03MICRO_003`.
- Topic02 Grade-6 card `num02-g6-core-5`, placed at **Lớp 6 · Bài 28–31**, directly includes canonical `phan-tram`.
- Topic02 Micro `NUM02MICRO_014–015` directly exercises `phan-tram`, including “25% của 200” and a discount application.
- The existing Grade-6 semantic reconciliation had already resolved historical `bai-toan-phan-tram` to canonical `phan-tram` under family `NUM-PERCENT`.

Therefore the row is now recorded as:

- Learn = `VERIFIED_DIRECT`;
- Micro = `VERIFIED_DIRECT`;
- Practice = `TOPIC_SKILL_EVIDENCE` when Topic03 and Topic02 manifests are considered together.

This is an **audit reconciliation only**. It deliberately avoids cloning `phan-tram` content into Topic03 merely to satisfy a single-primary-topic audit assumption. No NotebookLM round is required because no academic content, answer, taxonomy identity or semantic placement is being authored or changed.

Written remains `CANDIDATE_ONLY_NO_KNTT_PLACEMENT`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

### H. Bài 1–3 — Tập hợp; cách ghi và thứ tự số tự nhiên — REPAIRED R1

The Grade-6 direct + lesson-local Learn/Micro gap is now repaired under the owner-approved low-risk review policy.

- Existing direct canonical skill `tap-hop-so` remains unchanged under family `NUM-SETS`.
- Reviewed lesson-local `ghi-so-tu-nhien` and `thu-tu-so-tu-nhien` remain `LESSON_LOCAL_CONCEPT` identities under `NUM-SETS`; no duplicate canonical skills are created.
- Learn card `num02-g6-core-1` now explicitly teaches place value / writing natural numbers and comparison / order of natural numbers while preserving the later Bài 4–7 operation content.
- Grade-6 Micro now adds `NUM02MICRO_033–035`: place value in 35 407, comparison 58 203 < 58 230, and the successor of 9 999.
- These local items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; they do not create learner skill counters or mastery/readiness credit.
- No new NotebookLM round was required because the family/local placement was already independently reconciled and the new natural-number representation/order answers are deterministic.
- Practice remains `PARTIAL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

The row is therefore recorded as Learn=`VERIFIED_DIRECT_AND_LOCAL` and Micro=`VERIFIED_DIRECT_AND_LOCAL`.

### I. Bài 11–12 — ƯCLN, BCNN và bài toán áp dụng — REPAIRED R1

The Grade-6 direct + problem-type Learn/Micro gap is now repaired under the owner-approved low-risk review policy.

- Existing direct canonical skills `ucln` and `bcnn` remain unchanged under family `NUM-GCD-LCM`.
- Reviewed `bai-toan-ucln-bcnn` remains a `PROBLEM_TYPE` under `NUM-GCD-LCM`, not a new canonical skill.
- Learn card `num02-g6-core-2` now explicitly teaches the modelling distinction: equal-group / maximum common partition problems → ƯCLN; earliest repeated simultaneous cycle / smallest common multiple problems → BCNN.
- Existing direct Micro remains for `ucln` and `bcnn`.
- Grade-6 Micro now adds `NUM02MICRO_036–038`: one maximum equal-group problem, one repeated-cycle problem, and one model-selection item.
- These local items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; they do not create learner skill counters or mastery/readiness credit.
- No new NotebookLM round was required because the problem-type/family placement was already independently reconciled and the new GCD/LCM applications are deterministic.
- Practice remains `PARTIAL_TOPIC_EVIDENCE`; Written remains `CANDIDATE_ONLY_NO_KNTT_PLACEMENT`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

The row is therefore recorded as Learn=`VERIFIED_DIRECT_AND_LOCAL` and Micro=`VERIFIED_DIRECT_AND_LOCAL`.

### J. Bài 23–24 — Phân số bằng nhau, so sánh và hỗn số dương — REPAIRED R1

The Grade-6 direct + lesson-local Learn/Micro gap is now repaired under the owner-approved low-risk review policy.

- Existing direct canonical skills `rut-gon-phan-so` and `quy-dong-so-sanh-phan-so` remain unchanged.
- Reviewed `phan-so-bang-nhau` and `hon-so-duong` remain `LESSON_LOCAL_CONCEPT` identities under family `NUM-FRACTION-FORM`; no duplicate canonical skills are created.
- Learn card `num02-g6-core-4` now explicitly teaches equivalent fractions and conversion between positive mixed numbers and improper fractions while preserving the later fraction-operation and Bài 27 content.
- Existing direct Micro remains for fraction reduction and comparison.
- Grade-6 Micro now adds `NUM02MICRO_039–041`: one equivalent-fraction item and two mixed-number conversion items.
- These local items use `LESSON_LOCAL_CORE_FORMATIVE`, `tags.skill=[]`, and `gates_core=false`; they do not create learner skill counters or mastery/readiness credit.
- No new NotebookLM round was required because the local/family placement was already independently reconciled and the new representation conversions are deterministic.
- Practice remains `PARTIAL_TOPIC_EVIDENCE`; Written remains `NONE`; Readiness remains `NOT_VERIFIED_STRUCTURED`.

The row is therefore recorded as Learn=`VERIFIED_DIRECT_AND_LOCAL` and Micro=`VERIFIED_DIRECT_AND_LOCAL`.

### K. Written Library placement gap

The current shared Written Exercise Library contains **50 reviewed exercises**, but **0 exercises currently have `kntt_placements`**.

Five Grade-6 rows have plausible skill-matched candidates, but they are intentionally classified only as:

`CANDIDATE_ONLY_NO_KNTT_PLACEMENT`

until the library adopts the placement contract. Topic + grade overlay must not be treated as true KNTT lesson placement.

## 4. Priority rows

- **Ch.3 Bài 13–17 — Số nguyên:** all clear lesson-local/family gaps are now closed. These rows remain `PARTIAL_SHARED_SKILL` / `PARTIAL` because several KNTT lessons share the broad canonical `so-nguyen-phep-tinh`; they now require a re-ranking/reconciliation pass before any new content is authored.

## 5. Full row table

| Chapter | Lesson | Learn | Micro | Practice | Written | Readiness |
|---:|---|---|---|---|---|---|
| 1 | Bài 1-3 | VERIFIED_DIRECT_AND_LOCAL | VERIFIED_DIRECT_AND_LOCAL | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 4-5 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 6 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 1 | Bài 7 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 8 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 9 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 10 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 2 | Bài 11-12 | VERIFIED_DIRECT_AND_LOCAL | VERIFIED_DIRECT_AND_LOCAL | PARTIAL_TOPIC_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 13 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 14 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 15 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 16 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 3 | Bài 17 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 18 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 19 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 4 | Bài 20 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 5 | Bài 21 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 5 | Bài 22 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 23-24 | VERIFIED_DIRECT_AND_LOCAL | VERIFIED_DIRECT_AND_LOCAL | PARTIAL_TOPIC_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 25-26 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 6 | Bài 27 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 28-29 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 30 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 7 | Bài 31 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 32 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 33 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | NONE | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 34-35 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 8 | Bài 36-37 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 9 | Bài 38-41 | VERIFIED_DIRECT_AND_LOCAL | VERIFIED_DIRECT_AND_LOCAL | PARTIAL_TOPIC_EVIDENCE | VERIFIED_KNTT_PLACEMENT | AUTHORIZED_TOPIC_LEVEL |
| 9 | Bài 42 | VERIFIED_LESSON_LOCAL | VERIFIED_LESSON_LOCAL | FAMILY_LEVEL_TOPIC_EVIDENCE | VERIFIED_KNTT_PLACEMENT | NOT_VERIFIED_STRUCTURED |
| 9 | Bài 43 | VERIFIED_DIRECT | VERIFIED_DIRECT | TOPIC_SKILL_EVIDENCE | VERIFIED_KNTT_PLACEMENT | REVIEWED_STRUCTURED_READINESS |

## 6. Interpretation rules

- **VERIFIED_DIRECT** = explicit structured evidence matches the row's direct canonical skill(s).
- **VERIFIED_LESSON_LOCAL** = explicit structured evidence directly covers reviewed lesson-local concepts or problem types without creating or crediting a canonical assessed skill.
- **VERIFIED_DIRECT_AND_LOCAL** = all direct canonical skill demands for the row are explicitly evidenced and the reviewed lesson-local concepts/representations are also explicitly evidenced without creating extra canonical skills.
- **PARTIAL_LOCAL_OR_FAMILY** = lesson exists, but part of its identity remains family/lesson-local rather than directly evidenced.
- **PARTIAL_SHARED_SKILL** = a broad canonical skill spans multiple KNTT lessons, so evidence cannot distinguish the exact lesson demand.
- **PARTIAL_PLACEMENT** = content exists but KNTT placement is broad (for example “Lớp 6–9”) rather than exact.
- **TOPIC_SKILL_EVIDENCE** = Practice Bank contains the skill at topic level; this does not prove Grade-6 lesson placement.
- **CANDIDATE_ONLY_NO_KNTT_PLACEMENT** = written exercise matches grade/topic/skill but lacks canonical KNTT placement metadata.
- **NOT_VERIFIED_STRUCTURED** = this audit did not find an explicit structured readiness asset; it does not claim no informal self-check exists anywhere on the site.

## 7. Recommended next order

1. Re-rank the `PARTIAL_SHARED_SKILL` rows Bài 13–17 and Bài 25–26 before authoring more Grade-6 content; distinguish true content gaps from intentionally shared canonical skills.
2. Reconcile the `PARTIAL_PLACEMENT` rows Bài 18–22 against exact KNTT placement before duplicating existing geometry content.
3. Migrate the Shared Written Exercise Library toward canonical `kntt_placements` before claiming KNTT written coverage.
4. Only after Learn/Practice gaps are reconciled should Readiness expansion be considered.
5. Keep Bài 30 Written/Readiness dimensions open until they receive their own evidence; the R1 repair must not be promoted into a mastery/readiness claim.
6. Keep Bài 42 Practice at family/topic level and Readiness unchanged; the reviewed Written anchor must remain formative and must not be promoted into a canonical skill or mastery/readiness claim.
7. Keep Bài 4–5 Practice at family/topic level and Readiness open; the source-confirmed lesson-local repair must not be promoted into a canonical skill or mastery/readiness claim.
8. Keep Bài 8 Practice at family/topic level and Readiness open; the source-confirmed lesson-local repair must not be promoted into a canonical skill or mastery/readiness claim.
9. Keep Bài 27 Practice at family/topic level and Readiness open; its problem-type evidence must not be promoted into canonical skills or mastery/readiness credit.
10. Keep Bài 38–41 Practice at topic-level partial evidence and keep STA21 Readiness at its existing Grade 6–8 topic scope; the reviewed Learn/Micro repair must not be promoted into a Grade-6-only readiness claim.12. Keep Bài 11–12 Practice at topic-level partial evidence; Written remains candidate-only without KNTT placement and Readiness remains open. The problem-type repair must not be promoted into a new canonical skill or mastery/readiness credit.
13. Keep Bài 23–24 Practice at topic-level partial evidence and keep Written/Readiness open; the equivalent-fraction/mixed-number lesson-local repair must not be promoted into new canonical skills or mastery/readiness credit.

## 8. Protected boundaries

This audit does not:
- generate new content;
- create/rename taxonomy identities;
- alter Practice or Readiness scoring;
- migrate learner history;
- activate taxonomy runtime;
- grant mastery/readiness credit;
- change learner-facing UI.

11. Keep Bài 1–3 Practice at topic-level partial evidence and keep Written/Readiness open; its lesson-local repair must not be promoted into new canonical skills or mastery/readiness credit.

## 4. Shared-skill re-rank R1 — 2026-10-06

The remaining `PARTIAL_SHARED_SKILL` rows were re-inspected against the actual Grade-6 Topic02 Learn cards and Micro bank.

| Queue | KNTT rows | Current evidence | Re-rank conclusion |
|---|---|---|---|
| P0 | Bài 13–17 | broad canonical `so-nguyen-phep-tinh` + `gia-tri-tuyet-doi`; existing Micro mainly addition, multiplication, application and absolute value | **real explicit-density gap**, not audit noise. Bài 15 and Bài 17 have no exact lesson Micro; Bài 13–14 are incomplete; Bài 16 has existing multiplication evidence but remains in the same review packet. |
| P0 | Bài 25–26 | canonical `phep-tinh-phan-so`; existing Micro covers addition/subtraction | **real explicit-density gap** for multiplication/division. |
| P1 | Bài 28–29 | canonical `so-huu-ti-thap-phan`; existing Micro covers decimal addition | **real explicit-density gap** for subtraction/multiplication/division. |

The candidate repair therefore **reuses existing canonical skills** and densifies only Learn + Micro. It does not create a parallel KNTT skill taxonomy.

Candidate scope:
- Learn cards: `num02-g6-core-3`, `num02-g6-core-4`, `num02-g6-core-5`;
- new Micro: `NUM02MICRO_042–052`;
- Practice Bank: unchanged;
- Written Library: unchanged;
- Readiness: unchanged;
- learner history / Mastery / runtime taxonomy: unchanged.

Academic status remains **pending independent NotebookLM review**. Current row statuses stay `PARTIAL_SHARED_SKILL` / `PARTIAL` until a PASS receipt with clearance is reconciled.


## 5. Independent academic review result — 2026-10-06

NotebookLM reviewed packet `MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006` and returned **PASS** with clearance:

`G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE`

Review coverage:
- 3/3 Learn cards passed;
- 11/11 Micro items `NUM02MICRO_042–052` passed;
- 0 REVISE;
- no new canonical skill;
- existing evidence reuse / anti-inflation passed;
- audit promotion boundary passed.

Repository reconciliation therefore promotes the seven `PARTIAL_SHARED_SKILL` Learn rows and the seven corresponding `PARTIAL` Micro rows to `VERIFIED_DIRECT`.

Protected dimensions remain unchanged:
- Practice Bank;
- Written Library;
- Readiness;
- learner history;
- Mastery;
- runtime taxonomy.

Review receipt: `review-packets/kntt-g6-shared-skill-density-r1/01_NOTEBOOKLM_RESULT_R1.md`.

The reviewed Micro file is kept byte-identical to the candidate reviewed by NotebookLM; review metadata is stored in the separate receipt rather than mutating the reviewed source after clearance.


## 6. Topic20 Grade-6 placement re-rank R1 — 2026-10-06

The five remaining `PARTIAL_PLACEMENT` Learn rows are **not content gaps**.

Root cause:
- `topic20-learning-workspace.json` is intentionally immutable and keeps the historical five broad `Lớp 6–9` cards;
- the released `topic20-core-display-v2.json` already partitions the same 29 canonical skills into 10 display cards;
- Grade-6 cards `geo20-core-1a` and `geo20-core-1b` were independently reviewed in the existing CĐ20 Part-B review;
- legacy `geo20-core-1` remains source-locked and supplies the remaining Grade-6 skills;
- Grade-6 reconciliation already fixes the exact KNTT semantic targets for Bài 18–22.

The audit-only placement overlay `docs/assets/data/curriculum/kntt-g6-topic20-placement-r1.json` therefore maps:

| KNTT lesson | Existing display-card evidence |
|---|---|
| Bài 18 | `geo20-core-1` + `geo20-core-1a` |
| Bài 19 | `geo20-core-1a` |
| Bài 20 | `geo20-core-1` + `geo20-core-1b` |
| Bài 21 | `geo20-core-1` |
| Bài 22 | `geo20-core-1b` |

Every lesson's mapped skill union must equal its reviewed canonical direct-skill target exactly.

This reconciliation changes **audit placement only**. It does not mutate the legacy workspace, display-card content, Micro bank, Practice Bank, Written Library, Readiness, learner history, Mastery, or runtime taxonomy. A new academic review round is not required because no academic content is authored or changed.
