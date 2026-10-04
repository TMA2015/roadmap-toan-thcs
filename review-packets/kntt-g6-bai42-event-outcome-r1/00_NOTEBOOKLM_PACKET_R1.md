# NotebookLM Review Packet — Grade 6 Bài 42 Event / Outcome Repair R1

**packet_id:** `MATH-KNTT-G6-BAI42-EVENT-OUTCOME-R1-20261004`  
**scope:** KNTT Grade 6 · Bài 42 — *Kết quả có thể và sự kiện trong trò chơi, thí nghiệm*  
**repair boundary:** Learn + Grade-6 lesson-local Micro evidence only  
**release boundary:** ACADEMIC REVIEW ONLY — no merge/deploy/runtime authorization

## 1. Select exactly 4 Sources

Select exactly these 4 sources in the Math Notebook:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
4. **This packet — MATH-KNTT-G6-BAI42-EVENT-OUTCOME-R1-20261004**

Do **not** select old review packets, other SGK grades, or the old Master Plan v1.1.

## 2. Why this repair exists

The current Grade-6 Dimension Coverage Audit records Bài 42 as:

- `SKILL_MAP = VERIFIED_SEMANTIC`
- `LEARN_CONTENT = PARTIAL_LOCAL_OR_FAMILY`
- `MICRO_PRACTICE = NONE`
- `PRACTICE_BANK = FAMILY_LEVEL_TOPIC_EVIDENCE`
- `WRITTEN_LIBRARY = NONE`
- `READINESS = PENDING_REVIEW`

The semantic reconciliation is already closed:

- `ket-qua-co-the` → family `PROB-EVENT`, role `LESSON_LOCAL_CONCEPT`
- `su-kien-don-gian` → family `PROB-EVENT`, role `LESSON_LOCAL_CONCEPT`

The reviewed Grade-6 boundary deliberately **does not** promote either expression into a new canonical learner skill.

Bài 43 experimental-probability evidence must not substitute for direct Bài 42 learning evidence.

## 3. Candidate source locks

- Learning Workspace candidate: `docs/assets/data/curriculum/topic23-learning-workspace.json` — blob `443169587e0ba663bc694122ee4a37e456793c70`
- Micro candidate: `docs/assets/data/practice/23-xac-suat-micro-v1.json` — blob `022034fc2a4ad4991197fe60d5f936f8ecd4faca`
- Practice manifest unchanged: `docs/assets/data/practice/23-xac-suat-v1.manifest.json` — blob `7b936f2e5a01ce0937fc2cfd6ae391d4cbf741fb`
- Grade-6 reconciliation baseline: `docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json` — blob `f351524183f847f44af56872d28c7ddd7d5e788a`
- Grade-6 Dimension Audit baseline: `docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json` — blob `9f5d2e588a12fa9886ef69119b2973be79751e13`
- Canonical Taxonomy v2 baseline: `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json` — blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`

No Practice Bank question is added or changed in this candidate.

## 4. Candidate architecture boundary

The candidate uses a dedicated lesson-local evidence contract:

```text
evidence_role = LESSON_LOCAL_CORE_FORMATIVE
gates_core = false
tags.skill = []
lesson_local_targets = [reviewed Bài 42 local concept IDs]
```

Meaning:

- the material is **KNTT Core curriculum content** for Bài 42;
- it is formative learning evidence attached to the lesson;
- it does **not** write a new learner-facing mastery skill;
- it does **not** grant Core mastery/readiness credit;
- it does **not** map Grade-6 “sự kiện” directly to Grade-7 canonical skill `bien-co`;
- learner question-level history may record that the question was attempted, but there is no new skill-tag counter for these lesson-local concepts.

Please review whether this is academically faithful to the Grade-6 / Grade-7 boundary.

## 5. Candidate Learn change — card `prob23-core-1`

### Title

```text
Kết quả có thể, sự kiện và xác suất thực nghiệm
```

### Existing canonical assessed skill — unchanged

```text
xac-suat-thuc-nghiem
```

No canonical skill is added.

### Lesson-local concepts

```text
ket-qua-co-the | PROB-EVENT | LESSON_LOCAL_CONCEPT | Grade 6 | Bài 42
su-kien-don-gian | PROB-EVENT | LESSON_LOCAL_CONCEPT | Grade 6 | Bài 42
```

### Key idea

> Trong một trò chơi hoặc thí nghiệm, trước hết ta liệt kê các kết quả có thể xảy ra. Một sự kiện là điều ta quan tâm; sự kiện xảy ra khi kết quả nhận được thỏa điều mô tả. Khi lặp lại thí nghiệm nhiều lần, xác suất thực nghiệm của một sự kiện bằng số lần sự kiện xảy ra chia cho tổng số lần thực hiện.

### Worked example

**Problem:** Gieo một xúc xắc sáu mặt.  
a) Nêu các kết quả có thể.  
b) Xét sự kiện “số chấm lớn hơn 4”; những kết quả nào làm sự kiện xảy ra?  
c) Nếu gieo 20 lần và sự kiện xảy ra 7 lần thì xác suất thực nghiệm của sự kiện bằng bao nhiêu?

**Solution:**  
a) Các kết quả có thể là 1, 2, 3, 4, 5, 6.  
b) Sự kiện xảy ra khi kết quả là 5 hoặc 6.  
c) Xác suất thực nghiệm là 7/20.

### Misconception

> Không nhầm một kết quả cụ thể với một sự kiện: một sự kiện có thể xảy ra bởi một hoặc nhiều kết quả. Cũng không dùng số kết quả có thể để thay cho số lần sự kiện thực sự xảy ra khi tính xác suất thực nghiệm.

### Summary

> Bài 42: xác định kết quả có thể và nhận biết khi một sự kiện xảy ra. Bài 43: sau nhiều lần thử, dùng tần số xảy ra thực tế để tính xác suất thực nghiệm.

## 6. Candidate Grade-6 Micro items

### `PRO23MICRO_018`

**Role:** coverage  
**Lesson-local target:** `ket-qua-co-the`  
**Difficulty:** basic

**Question:**  
Gieo một xúc xắc sáu mặt một lần. Tập hợp đầy đủ các kết quả có thể là:

A. `{1; 2; 3; 4; 5; 6}`  
B. `{1; 2; 3; 4; 5}`  
C. `{0; 1; 2; 3; 4; 5}`  
D. `{2; 4; 6}`

**Correct:** A

**Explanation:**  
Một xúc xắc sáu mặt có thể xuất hiện 1, 2, 3, 4, 5 hoặc 6 chấm, nên phải liệt kê đủ cả sáu kết quả.

### `PRO23MICRO_019`

**Role:** coverage  
**Lesson-local target:** `su-kien-don-gian`  
**Difficulty:** intermediate

**Question:**  
Gieo một xúc xắc sáu mặt một lần. Xét sự kiện “số chấm xuất hiện lớn hơn 4”. Những kết quả nào làm sự kiện xảy ra?

A. `{5; 6}`  
B. `{4; 5; 6}`  
C. `{1; 2; 3; 4}`  
D. `{6}`

**Correct:** A

**Explanation:**  
Trong các kết quả 1, 2, 3, 4, 5, 6, chỉ 5 và 6 lớn hơn 4. Vì vậy sự kiện xảy ra khi kết quả là 5 hoặc 6.

### `PRO23MICRO_020`

**Role:** coverage  
**Lesson-local targets:** `ket-qua-co-the`, `su-kien-don-gian`  
**Difficulty:** intermediate

**Question:**  
Một vòng quay có bốn ô ghi A, B, C, D. Quay một lần. Xét sự kiện “kim không dừng ở A”. Tập hợp các kết quả làm sự kiện xảy ra là:

A. `{B; C; D}`  
B. `{A}`  
C. `{A; B; C; D}`  
D. `{C; D}`

**Correct:** A

**Explanation:**  
Các kết quả có thể là A, B, C, D. Sự kiện “không dừng ở A” xảy ra khi kết quả là B, C hoặc D.

## 7. Explicit non-goals

This candidate does **not**:

- add `ket-qua-co-the` to canonical Taxonomy v2;
- add `su-kien-don-gian` to canonical Taxonomy v2;
- relabel either concept as Grade-7 `bien-co`;
- add/change Practice Bank items;
- approve the existing CT23 Readiness draft;
- change Readiness scoring;
- activate Taxonomy v2 runtime;
- backfill/regrade learner history;
- change Mastery semantics;
- claim Written Library coverage.

## 8. Review questions

Review all of the following:

1. Does the Learn copy accurately represent Bài 42 in the selected Grade-6 SGK source?
2. Does the Learn copy preserve the boundary between Bài 42 and Bài 43?
3. Are `PRO23MICRO_018–020` mathematically correct, deterministic, age-appropriate and non-ambiguous?
4. Do the three items provide enough direct formative evidence for:
   - identifying possible outcomes;
   - connecting a simple event to the outcomes that make it occur?
5. Is Grade-6 wording “sự kiện” used correctly without prematurely forcing Grade-7 canonical vocabulary `bien-co`?
6. Is it academically justified to keep both local refs under `PROB-EVENT` rather than creating new canonical skills?
7. Is the non-mastery evidence boundary (`tags.skill=[]`, `gates_core=false`) consistent with the anti-inflation principle?
8. Does any candidate statement accidentally teach probability calculation inside Bài 42 in a way that should belong only to Bài 43? The integrated worked example may bridge into Bài 43 because the existing card spans Bài 42–43; flag it if the bridge is pedagogically misleading.
9. Are any distractors weak, misleading, or based on terminology not supported by the selected SGK?

## 9. Required output contract

Return **all lines**, even if PASS.

```text
PACKET|MATH-KNTT-G6-BAI42-EVENT-OUTCOME-R1-20261004
OVERALL|PASS|REVISE
LEARN|PASS|REVISE
EXPECTED_MICRO|3
REVIEWED_MICRO|3
ITEM|PRO23MICRO_018|PASS|REVISE
ITEM|PRO23MICRO_019|PASS|REVISE
ITEM|PRO23MICRO_020|PASS|REVISE
BOUNDARY|LESSON_LOCAL_NO_CANONICAL_SKILL|PASS|REVISE
TERMINOLOGY|G6_SU_KIEN_NOT_G7_BIEN_CO|PASS|REVISE
B42_B43_BOUNDARY|PASS|REVISE
PRACTICE_BANK_CHANGE|NONE
MISSING_IDS|NONE|<comma-separated IDs>
DUPLICATE_IDS|NONE|<comma-separated IDs>
UNEXPECTED_IDS|NONE|<comma-separated IDs>
CLEARANCE|G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE|WITHHELD
```

If any item is `REVISE`, also return one correction block per affected item:

```text
CORRECTION|<ID or LEARN or BOUNDARY>|<problem>|<exact recommended correction>
```

A PASS must include exactly:

```text
CLEARANCE|G6_BAI42_EVENT_OUTCOME_CONTENT_REVIEW_COMPLETE
```

Do not authorize merge/deployment. Repository QA remains a separate gate after academic reconciliation.
