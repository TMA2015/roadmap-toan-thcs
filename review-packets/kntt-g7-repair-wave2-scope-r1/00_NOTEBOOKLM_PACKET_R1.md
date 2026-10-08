# NotebookLM Review Packet — Grade 7 Repair Wave 2 Scope R1

**packet_id:** `MATH-KNTT-G7-REPAIR-WAVE2-SCOPE-R1-20261008`  
**scope:** Independent authorization of the next Grade-7 repair wave after Wave 1 R1 was academically cleared, merged, QA-verified and deployed  
**release boundary:** SCOPE AUTHORIZATION ONLY — do not author, merge, deploy, create skills, or promote Readiness/Mastery from this packet alone

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 7, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 7, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 7 Repair Wave 2 Scope R1**

Do not select older Grade-7 review packets as separate Sources. Their reviewed decisions needed here are embedded below.

## 2. Closed baseline

Prior independent priority review is closed:

- packet: `MATH-KNTT-G7-GAP-PRIORITY-R1-20261008`
- verdict: PASS
- clearance: `G7_GAP_PRIORITY_R1_REVIEW_COMPLETE`
- anti-inflation: PASS
- no new canonical skills

Wave 1 R1 is also closed:

- groups: `BAI1_3;BAI5_7;BAI26_28`
- content: 3 Learn + 12 Micro + 18 Practice
- NotebookLM content review: PASS
- clearance: `G7_REPAIR_W1_R1_CONTENT_REVIEW_COMPLETE`
- repository CI: PASS
- browser/visual QA: PASS
- merged/deployed from `main`
- merge commit: `561524a103bb060b9f518535cbe67da5016084ed`

Do not reopen Wave 1 unless this packet finds a direct curriculum conflict.

## 3. Already-reviewed remaining priorities

The prior priority review materially decided the remaining groups as follows:

### Candidate A — Bài 4 · Thứ tự phép tính và quy tắc chuyển vế

Prior reviewed decision:

- priority: **P1**
- repair dimensions: **LEARN;MICRO**
- direct canonical skill: `thu-tu-phep-tinh`
- `quy-tac-chuyen-ve` remains a reviewed **lesson-local technique**, not a new canonical skill
- Practice evidence was already adequate enough that no Practice repair was authorized
- Written/Readiness were not authorized

Question for Wave 2: Is this still an appropriate bounded repair, and should it enter the next wave?

### Candidate B — Bài 18–19 · Biểu đồ quạt tròn và biểu đồ đoạn thẳng

Prior reviewed decision:

- priority: **P1**
- repair dimensions: **MICRO only**
- the specific gap is explicit `chuyen-bang-bieu-do` micro evidence
- Learn and Practice evidence were judged educationally adequate
- representation-production details remain under reviewed family `STAT-REPRESENT`
- no new canonical skill
- Written/Readiness were not authorized

Question for Wave 2: Is a compact Micro-only repair worthwhile now, without expanding Learn/Practice merely for symmetry?

### Candidate C — Bài 22–23 · Đại lượng tỉ lệ thuận/nghịch và ứng dụng

Prior reviewed decision:

- priority: **P1**
- repair dimensions: **LEARN;MICRO**
- missing explicit step: `mo-hinh-ti-le`
- Practice already contains modelling evidence and therefore no Practice repair was authorized
- Written/Readiness were not authorized

Question for Wave 2: Should the next wave add only Learn + Micro alignment for proportional modelling?

## 4. Deferred lower-priority boundary

### Bài 8

- prior priority: **P2**
- possible dimension: **MICRO**
- gap: small explicit Grade-7 density gap around `goc-phu-bu`
- keep out of Wave 2 unless there is a strong curriculum reason to replace a P1 group

### Bài 24–25

- prior decision: **DEFER**
- dimensions: **NONE**
- existing evidence judged educationally adequate
- do not revive merely for symmetry or count completion

## 5. Required decision

Review whether the **second repair wave** should be:

- `BAI4` → `LEARN;MICRO`
- `BAI18_19` → `MICRO`
- `BAI22_23` → `LEARN;MICRO`

Maximum: **3 lesson groups**. Fewer than 3 is allowed.

For each group, confirm that the prior dimension decision still reflects Grade-7 KNTT self-learning value and does not duplicate adequate evidence.

Explicitly decide whether `BAI8` remains deferred to a later density wave and whether `BAI24_25` remains DEFER/NONE.

## 6. Anti-inflation and protected boundaries

This scope review must not authorize:

- Written merely because Grade-7 Written placement is empty;
- Readiness merely because structured Grade-7 coverage is incomplete;
- Practice for `BAI4`, `BAI18_19`, or `BAI22_23` unless current reviewed evidence is demonstrably insufficient;
- any new canonical skill;
- promotion of `quy-tac-chuyen-ve` to a global skill;
- regrading learner history;
- changing Mastery/Readiness semantics;
- runtime taxonomy activation.

## 7. Required machine-checkable output

Return this block **first**:

```text
PACKET|MATH-KNTT-G7-REPAIR-WAVE2-SCOPE-R1-20261008
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
PRIOR_REVIEW|G7_GAP_PRIORITY_R1_REVIEW_COMPLETE|PASS|REVISE
WAVE1_STATUS|CLOSED|PASS|REVISE
CANDIDATE|BAI4|P1|LEARN;MICRO|PASS|REVISE|<SHORT_REASON>
CANDIDATE|BAI18_19|P1|MICRO|PASS|REVISE|<SHORT_REASON>
CANDIDATE|BAI22_23|P1|LEARN;MICRO|PASS|REVISE|<SHORT_REASON>
DEFER|BAI8|P2|MICRO|PASS|REVISE|<SHORT_REASON>
DEFER|BAI24_25|DEFER|NONE|PASS|REVISE|<SHORT_REASON>
SECOND_REPAIR_WAVE|<LESSON_GROUPS_SEMICOLON_SEPARATED>
MAX_GROUPS_WAVE2|3
WRITTEN_POLICY|NO_QUOTA_EXPANSION|PASS|REVISE|<SHORT_REASON>
READINESS_POLICY|NO_QUOTA_EXPANSION|PASS|REVISE|<SHORT_REASON>
NEW_CANONICAL_SKILLS|NONE|<IDS>
MISSING_DECISIONS|NONE|<ROWS>
CLEARANCE|G7_REPAIR_WAVE2_SCOPE_R1_REVIEW_COMPLETE
```

Then provide concise reasoning.

Do **not** issue `G7_REPAIR_WAVE2_SCOPE_R1_REVIEW_COMPLETE` unless all five remaining groups and the protected boundaries are materially reviewed.

## 8. What a PASS authorizes

A PASS with clearance authorizes **candidate authoring only** for the selected Wave 2 lesson groups and exactly the approved dimensions.

It does **not** authorize merge/deploy. Candidate content must still receive a separate independent NotebookLM content review before merge.
