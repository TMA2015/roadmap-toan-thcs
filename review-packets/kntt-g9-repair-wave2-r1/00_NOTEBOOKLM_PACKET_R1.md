# NotebookLM Review Packet — Grade 9 Repair Wave 2 CH6 R1

**packet_id:** `MATH-KNTT-G9-REPAIR-W2-R1-20261009`  
**authorization:** `G9_GAP_PRIORITY_R1_REVIEW_COMPLETE`  
**scope:** Candidate content review for Grade-9 Chapter 6 — symmetric expressions in the roots only  
**candidate counts:** 1 Learn card + 4 Micro items; 0 Practice; 0 Written; 0 Readiness; 0 new canonical skills

## 1. Select exactly 5 Sources

Use exactly:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 9, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 9, tập hai — Kết nối tri thức với cuộc sống**
5. **00_NOTEBOOKLM_PACKET_R1.md — NotebookLM Review Packet — Grade 9 Repair Wave 2 CH6 R1**

Do not add older review packets separately.

## 2. Authorized scope

Prior independent scope review already PASSed:

- `bieu-thuc-doi-xung` → **CORE_LEARN_MICRO**
- `dau-nghiem` → **CORE_SUPPORT_ONLY**
- `lien-he-do-thi` → **CORE_SUPPORT_ONLY**
- Practice → **NO_QUOTA_EXPANSION**
- Written → **NO_QUOTA_EXPANSION**
- Readiness → **NO_QUOTA_EXPANSION**
- new canonical skills → **NONE**

Review only the candidate below. Reject any accidental promotion of `dau-nghiem` or `lien-he-do-thi` into Grade-9 Core Learn/Micro.

## 3. Candidate Learn card

```json
{
  "id": "qua12-core-g9-6",
  "order": 6,
  "title": "Biểu thức đối xứng theo hai nghiệm",
  "kntt_lessons": ["Lớp 9 · Chương 6"],
  "layer": "KNTT-Core",
  "skills": ["bieu-thuc-doi-xung", "tong-tich-nghiem"],
  "prerequisites": ["tong-tich-nghiem"],
  "micro_practice": ["QUA12MICRO_016","QUA12MICRO_017","QUA12MICRO_018","QUA12MICRO_019"],
  "teaching_copy": {
    "key_idea": "Nếu phương trình bậc hai có hai nghiệm thực x₁, x₂, đặt S=x₁+x₂=-b/a và P=x₁x₂=c/a. Nhiều biểu thức đối xứng có thể đổi về S và P nên không cần giải riêng từng nghiệm: x₁²+x₂²=S²-2P; (x₁-x₂)²=S²-4P; 1/x₁+1/x₂=S/P khi P≠0; x₁³+x₂³=S³-3PS.",
    "worked_example": {
      "problem": "Cho x²-5x+3=0 có hai nghiệm x₁,x₂. Tính x₁²+x₂² mà không giải phương trình.",
      "solution": "Theo Viète, S=x₁+x₂=5 và P=x₁x₂=3. Do đó x₁²+x₂²=S²-2P=25-6=19."
    },
    "misconception": "Giải phương trình dài dòng khi chỉ cần S,P; dùng công thức S/P mà quên điều kiện P≠0; hoặc nhầm (x₁-x₂)² với S²-2P.",
    "summary": "Đổi biểu thức đối xứng về S=x₁+x₂ và P=x₁x₂ trước, rồi thay Viète; chỉ giải nghiệm riêng khi thật sự cần."
  }
}
```

## 4. Candidate Micro items

```text
QUA12MICRO_016
Question: Phương trình x²-5x+3=0 có hai nghiệm x₁,x₂. Giá trị x₁²+x₂² bằng:
Options: 19 | 25 | 22 | 16
Answer: 19
Explanation: S=5, P=3, nên x₁²+x₂²=S²-2P=19.

QUA12MICRO_017
Question: Với hai nghiệm x₁,x₂ có S=x₁+x₂=6 và P=x₁x₂=5, giá trị (x₁-x₂)² bằng:
Options: 16 | 26 | 36 | 10
Answer: 16
Explanation: (x₁-x₂)²=S²-4P=36-20=16.

QUA12MICRO_018
Question: Phương trình x²-4x+2=0 có hai nghiệm x₁,x₂. Giá trị 1/x₁+1/x₂ bằng:
Options: 2 | 4 | 1/2 | 6
Answer: 2
Explanation: S=4, P=2≠0, nên 1/x₁+1/x₂=S/P=2.

QUA12MICRO_019
Question: Phương trình x²-3x+1=0 có hai nghiệm x₁,x₂. Giá trị x₁³+x₂³ bằng:
Options: 18 | 24 | 9 | 21
Answer: 18
Explanation: S=3, P=1, nên x₁³+x₂³=S³-3PS=27-9=18.
```

## 5. Review questions

Return PASS only if all are true:

1. The Learn card is truly within Grade-9 KNTT Chapter 6.
2. Every identity is mathematically correct and stated with required conditions.
3. The four Micro items have exactly one correct answer and appropriate Grade-9 difficulty.
4. `bieu-thuc-doi-xung` is legitimately promoted to Core Learn/Micro.
5. `dau-nghiem` and `lien-he-do-thi` remain support-only and are not promoted.
6. No Practice/Written/Readiness/taxonomy expansion is needed.

## 6. Required machine-checkable response

```text
PACKET|MATH-KNTT-G9-REPAIR-W2-R1-20261009
OVERALL|PASS|REVISIONS_REQUIRED
SCOPE_CLEARANCE|G9_GAP_PRIORITY_R1_REVIEW_COMPLETE|PASS|FAIL
GROUP|CH6|PASS|REVISIONS_REQUIRED
LEARN|CH6|1|PASS|REVISIONS_REQUIRED
MICRO|CH6|4|PASS|REVISIONS_REQUIRED
ITEM_REVIEW|CH6|bieu-thuc-doi-xung|CORE_LEARN_MICRO|PASS|REVISIONS_REQUIRED
BOUNDARY|dau-nghiem|CORE_SUPPORT_ONLY|PASS|FAIL
BOUNDARY|lien-he-do-thi|CORE_SUPPORT_ONLY|PASS|FAIL
BOUNDARY|NO_PRACTICE|PASS|FAIL
BOUNDARY|NO_WRITTEN|PASS|FAIL
BOUNDARY|NO_READINESS|PASS|FAIL
BOUNDARY|NO_NEW_CANONICAL_SKILL|PASS|FAIL
MISSING_DECISIONS|NONE|...
CLEARANCE|G9_REPAIR_W2_R1_CONTENT_REVIEW_COMPLETE
```
