# NotebookLM Review Packet — Grade 6 Topic23 Readiness R1

**packet_id:** `MATH-KNTT-G6-PROB23-READINESS-R1-20261006`  
**scope:** Grade 6 KNTT Bài 43 — Xác suất thực nghiệm; review the existing structured Readiness candidate only  
**release boundary:** ACADEMIC REVIEW ONLY — no deploy/runtime authorization

## 1. Select exactly 4 Sources

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
4. **This packet — MATH-KNTT-G6-PROB23-READINESS-R1-20261006**

Do not select older Topic23 packets or unrelated grades.

## 2. Why this review exists

The Grade-6 non-Learn Dimension Audit found:

- **Bài 43 — Xác suất thực nghiệm:** there is an existing structured Readiness assessment with four explicit Grade-6 MCQs, all tagged `xac-suat-thuc-nghiem`. It has deterministic technical QA but has not yet received independent second-person academic review.
- **Bài 42 — Kết quả có thể và sự kiện:** the current Grade-6 Readiness candidate has **no direct Bài 42 event/outcome item**. Therefore Bài 42 must remain `NOT_VERIFIED_STRUCTURED` and must not be promoted by this packet.

This review is intentionally narrow: review the existing Bài 43 Grade-6 Readiness candidate. Do not author new Bài 42 items.

## 3. Source lock

Assessment:
- path: `docs/assets/data/assessment/23-xac-suat-core-v1.json`
- blob: `6ecf6eb6545fbb8e01465ccac76db0d5c60b7485`
- assessment_id: `PROB23-CORE-READY-V1`

Policy:
- feedback: after submit
- hints: false
- tutor: false
- hard gate: false
- target minutes: 20
- readiness threshold: 0.8
- minimum answered ratio: 0.8
- states: `READY`, `REVIEW_RECOMMENDED`, `MORE_EVIDENCE_NEEDED`

The complete assessment has 12 items: 4 Grade 6, 4 Grade 7, 4 Grade 8. This packet reviews **only the 4 Grade-6 items**.

## 4. Candidate Grade-6 items

### PRO23READY_001
- lesson target: Bài 43
- skill: `xac-suat-thuc-nghiem`
- question: Tung đồng xu 40 lần, mặt ngửa xuất hiện 12 lần. Xác suất thực nghiệm của mặt ngửa là bao nhiêu?
- options:
  0. 3/10
  1. 1/2
  2. 12/28
  3. 28/40
- answer index: 0
- explanation: Tỉ số quan sát là 12/40 = 3/10.

### PRO23READY_002
- lesson target: Bài 43
- skill: `xac-suat-thuc-nghiem`
- question: Trong 20 lượt quay có 7 lượt đỏ và 13 lượt xanh. Xác suất thực nghiệm của ô xanh là bao nhiêu?
- options:
  0. 7/20
  1. 13/7
  2. 13/20
  3. 1/2
- answer index: 2
- explanation: Có 13 lần xanh trong tổng 20 lượt: 13/20.

### PRO23READY_003
- lesson target: Bài 43
- skill: `xac-suat-thuc-nghiem`
- question: Một thí nghiệm thực hiện 60 lần, sự kiện A xuất hiện 18 lần. Tần số tương đối của A là bao nhiêu?
- options:
  0. 0,18
  1. 0,3
  2. 0,6
  3. 3,0
- answer index: 1
- explanation: Tần số tương đối bằng 18/60 = 0,3.

### PRO23READY_004
- lesson target: Bài 43
- skill: `xac-suat-thuc-nghiem`
- question: Một đồng xu được tung 30 lần, có 12 lần ngửa. Kết luận nào đúng về dãy thử này?
- options:
  0. Xác suất thực nghiệm của ngửa bằng 12/30
  1. Lần tiếp theo chắc chắn ra sấp
  2. Xác suất thực nghiệm của ngửa bằng 12/18
  3. Tung thêm 10 lần phải có đúng 5 lần ngửa
- answer index: 0
- explanation: Giá trị thực nghiệm chỉ mô tả 12 lần ngửa trong 30 lần quan sát, không bảo đảm kết quả tiếp theo.

## 5. What to review

For all four items verify:
- mathematical correctness;
- answer uniqueness;
- Grade-6 KNTT Bài 43 placement;
- whether `xac-suat-thuc-nghiem` is the correct canonical skill;
- distractor quality;
- explanation accuracy;
- whether the set provides reasonable independent Readiness evidence for Bài 43;
- whether the no-hints/no-Tutor/feedback-after-submit policy is appropriate for controlled Readiness.

Also verify this boundary:
- **Bài 42 must NOT be promoted** from this assessment because none of the four Grade-6 items directly assesses `ket-qua-co-the` / `su-kien-don-gian`.

## 6. Readiness evidence boundary

Readiness is assessment evidence, separate from ordinary Practice/Micro evidence.

A PASS may authorize repository reconciliation to:
- mark **Bài 43** as reviewed structured Readiness evidence;
- keep the assessment soft (no hard lock);
- keep Bài 42 unverified.

A PASS must NOT authorize:
- new Bài 42 items;
- changes to Mastery semantics;
- historical learner regrade/backfill;
- hints/Tutor during Readiness;
- promotion of Written self-check into Readiness credit;
- mass rollout to other topics/grades.

## 7. Required output

Return this machine-checkable block first:

```text
PACKET|MATH-KNTT-G6-PROB23-READINESS-R1-20261006
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
POLICY|CONTROLLED_SOFT_READINESS|PASS|REVISE|<SHORT_REASON>
EXPECTED_ITEMS|4
REVIEWED_ITEMS|4
ITEM|PRO23READY_001|PASS|REVISE|<SHORT_REASON>
ITEM|PRO23READY_002|PASS|REVISE|<SHORT_REASON>
ITEM|PRO23READY_003|PASS|REVISE|<SHORT_REASON>
ITEM|PRO23READY_004|PASS|REVISE|<SHORT_REASON>
PLACEMENT|BAI43_EXPERIMENTAL_PROBABILITY|PASS|REVISE|<SHORT_REASON>
BOUNDARY|BAI42_NOT_COVERED|PASS|REVISE|<SHORT_REASON>
READINESS_EVIDENCE|BAI43|PASS|REVISE|<SHORT_REASON>
MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G6_PROB23_READINESS_R1_CONTENT_REVIEW_COMPLETE
```

Then provide concise source-based reasoning and exact corrections for every `REVISE` line.

Do not issue the clearance string if any expected item was not reviewed or if Bài 42 is incorrectly treated as covered.
