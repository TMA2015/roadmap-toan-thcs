# NotebookLM Review Packet — Grade 6 Bài 30 Rounding Repair R1

**packet_id:** `MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004`  
**scope:** Bài 30 — Làm tròn và ước lượng; repair Learn + Micro + Practice evidence only  
**release boundary:** ACADEMIC REVIEW ONLY — no merge/deploy/runtime authorization

## 1. Select exactly 4 Sources

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
4. **This packet — MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004**

Do not select other SGK grades/volumes or older review packets.

## 2. Why this repair exists

The reviewed Grade-6 dimension audit found Bài 30 as the clearest direct-evidence gap:

- canonical skill `lam-tron-so` already exists under `NUM-SETS`;
- current card title says “Số thập phân, làm tròn và phần trăm”, but before this candidate the structured card skills omitted `lam-tron-so`;
- there was no Grade-6 micro item tagged `lam-tron-so`;
- Topic02 Practice Bank had no `lam-tron-so` item;
- `uoc-luong` was independently reviewed as a lesson-local application technique, **not** a separate canonical skill.

This candidate does not change taxonomy, mastery/readiness, learner history, or runtime.

## 3. Candidate source locks

- Learning Workspace: `docs/assets/data/curriculum/topic02-learning-workspace.json` — blob `25efe793363b1cbc7636a9d83d1b9260030ebf91`
- Micro bank: `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json` — blob `9c08e1389178ed89ad4905f7776c371cdf35cd56`
- New Practice chunk: `docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json` — blob `9e191dfb04ec4138067a36b73b108b038f2be1bd`
- Practice manifest: `docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json` — blob `4609bcd1c34a338cbd456eb4f3219ba7f89f943f`
- Canonical taxonomy baseline: blob `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4`
- Grade-6 dimension audit baseline: blob `875e86611d76386a6030da10883e35f9de33d6dc`

## 4. Candidate Learn change

Card: `num02-g6-core-5`

### Skills
```text
so-huu-ti-thap-phan | lam-tron-so | phan-tram
```

### KNTT lessons
```text
Lớp 6 · Bài 28–31
```

### Key idea
Khi tính số thập phân, đặt dấu phẩy thẳng cột. Khi làm tròn đến một hàng, nhìn chữ số ngay bên phải: nhỏ hơn 5 thì giữ nguyên, từ 5 trở lên thì tăng chữ số ở hàng làm tròn thêm 1. Ước lượng có thể làm tròn các số trước rồi tính. Với phần trăm, p% = p/100.

### Worked example
**Problem:** Làm tròn 12,347 đến hàng phần trăm, rồi dùng các số đã làm tròn để ước lượng 12,347 + 5,12.

**Solution:** Chữ số hàng phần nghìn của 12,347 là 7 nên 12,347 ≈ 12,35. Số 5,12 đã có hai chữ số thập phân nên giữ 5,12. Tổng ước lượng là 12,35 + 5,12 = 17,47.

### Misconception
Khi làm tròn, chỉ nhìn chữ số ngay bên phải hàng cần làm tròn; không được chỉ cắt bỏ rồi giữ nguyên nếu chữ số đó từ 5 trở lên. Ước lượng cho kết quả gần đúng, không phải đáp số chính xác.

### Summary
Xác định đúng hàng cần làm tròn, áp dụng quy tắc <5 / ≥5 và dùng dấu ≈ cho kết quả gần đúng. Với phần trăm, luôn phân biệt phần trăm giảm với giá trị còn lại.

Review whether this copy:
- correctly teaches the Grade-6 rounding rule;
- distinguishes exact result from estimate using `≈`;
- remains appropriate inside the Bài 28–31 combined card;
- does not turn `uoc-luong` into a separate global skill.

## 5. Candidate Micro items — review all 3

### NUM02MICRO_021
- role: `coverage`
- skill: `lam-tron-so`
- type: `lam-tron-base`
- question: Làm tròn 7,46 đến hàng phần mười.
- options: 0:7,4 | 1:7,5 | 2:7,46 | 3:8,0
- answer index: 1
- explanation: Hàng phần mười là 4; chữ số ngay bên phải là 6 ≥ 5 nên tăng 4 thành 5. Vì vậy 7,46 ≈ 7,5.
- hints: Xác định hàng phần mười trước. / Nhìn chữ số hàng phần trăm: 6 ≥ 5.

### NUM02MICRO_022
- role: `coverage`
- skill: `lam-tron-so`
- type: `lam-tron-trap`
- question: Làm tròn 8,375 đến hàng phần trăm.
- options: 0:8,37 | 1:8,38 | 2:8,4 | 3:8,375
- answer index: 1
- explanation: Hàng phần trăm là 7; chữ số hàng phần nghìn là 5 nên tăng 7 thành 8. Do đó 8,375 ≈ 8,38.
- hints: Muốn làm tròn đến hàng phần trăm, nhìn hàng phần nghìn. / Chữ số cần nhìn là 5, nên phải tăng hàng phần trăm thêm 1.

### NUM02MICRO_023
- role: `coverage`
- skill: `lam-tron-so`
- type: `uoc-luong-tu-lam-tron`
- question: Ước lượng 19,8 × 5,1 bằng cách làm tròn mỗi thừa số đến số nguyên gần nhất.
- options: 0:90 | 1:100 | 2:110 | 3:120
- answer index: 1
- explanation: 19,8 ≈ 20 và 5,1 ≈ 5, nên 19,8 × 5,1 được ước lượng bởi 20 × 5 = 100. Đây là kỹ thuật ước lượng dựa trên làm tròn.
- hints: Làm tròn 19,8 và 5,1 đến số nguyên trước. / 20 × 5 = 100.


Check mathematical correctness, answer uniqueness, misconception quality, and Base/Trap/Apply coverage of the Bài 30 demand. `NUM02MICRO_023` uses estimation as an application of `lam-tron-so`; do not create an `uoc-luong` skill.

## 6. Candidate Practice items — review all 12

### NUM02V1_121
- skill: `lam-tron-so`
- type: `lam-tron-phan-muoi`
- difficulty: `basic`
- question: Làm tròn 5,83 đến hàng phần mười.
- options: 0:5,8 | 1:5,9 | 2:5,83 | 3:6,0
- answer index: 0
- explanation: Chữ số hàng phần trăm là 3 < 5 nên giữ nguyên hàng phần mười: 5,83 ≈ 5,8.

### NUM02V1_122
- skill: `lam-tron-so`
- type: `lam-tron-phan-tram`
- difficulty: `basic`
- question: Làm tròn 12,349 đến hàng phần trăm.
- options: 0:12,34 | 1:12,35 | 2:12,3 | 3:12,349
- answer index: 1
- explanation: Chữ số hàng phần nghìn là 9 ≥ 5 nên tăng hàng phần trăm từ 4 lên 5: 12,349 ≈ 12,35.

### NUM02V1_123
- skill: `lam-tron-so`
- type: `lam-tron-moc-5`
- difficulty: `intermediate`
- question: Làm tròn 4,265 đến hàng phần trăm.
- options: 0:4,26 | 1:4,27 | 2:4,3 | 3:4,265
- answer index: 1
- explanation: Chữ số hàng phần nghìn là 5 nên tăng hàng phần trăm từ 6 lên 7: 4,265 ≈ 4,27.

### NUM02V1_124
- skill: `lam-tron-so`
- type: `lam-tron-nho-nho`
- difficulty: `intermediate`
- question: Làm tròn 0,996 đến hàng phần trăm.
- options: 0:0,99 | 1:1,00 | 2:0,996 | 3:1,06
- answer index: 1
- explanation: Hàng phần nghìn là 6 nên 0,99 được làm tròn tăng lên thành 1,00.

### NUM02V1_125
- skill: `lam-tron-so`
- type: `lam-tron-don-vi`
- difficulty: `basic`
- question: Làm tròn 73,486 đến hàng đơn vị.
- options: 0:73 | 1:74 | 2:73,5 | 3:74,5
- answer index: 0
- explanation: Chữ số hàng phần mười là 4 < 5 nên giữ nguyên hàng đơn vị: 73,486 ≈ 73.

### NUM02V1_126
- skill: `lam-tron-so`
- type: `lam-tron-don-vi`
- difficulty: `basic`
- question: Làm tròn 73,586 đến hàng đơn vị.
- options: 0:73 | 1:74 | 2:73,6 | 3:74,6
- answer index: 1
- explanation: Chữ số hàng phần mười là 5 nên tăng hàng đơn vị từ 3 lên 4: 73,586 ≈ 74.

### NUM02V1_127
- skill: `lam-tron-so`
- type: `lam-tron-do-luong`
- difficulty: `intermediate`
- question: Một đoạn dây dài 2,746 m. Làm tròn độ dài đến hàng phần trăm mét.
- options: 0:2,74 m | 1:2,75 m | 2:2,7 m | 3:2,746 m
- answer index: 1
- explanation: Chữ số hàng phần nghìn là 6 ≥ 5 nên 2,746 m ≈ 2,75 m.

### NUM02V1_128
- skill: `lam-tron-so`
- type: `lam-tron-thuc-te`
- difficulty: `intermediate`
- question: Một món hàng có giá 48.650 đồng. Làm tròn giá đến nghìn đồng gần nhất.
- options: 0:48.000 đồng | 1:49.000 đồng | 2:48.650 đồng | 3:50.000 đồng
- answer index: 1
- explanation: Khi làm tròn đến nghìn đồng, nhìn hàng trăm: 6 ≥ 5 nên 48.650 đồng ≈ 49.000 đồng.

### NUM02V1_129
- skill: `lam-tron-so`
- type: `uoc-luong-tong`
- difficulty: `intermediate`
- question: Ước lượng 19,8 + 30,3 bằng cách làm tròn mỗi số đến số nguyên gần nhất.
- options: 0:40 | 1:49 | 2:50 | 3:51
- answer index: 2
- explanation: 19,8 ≈ 20 và 30,3 ≈ 30, nên tổng được ước lượng là 20 + 30 = 50.

### NUM02V1_130
- skill: `lam-tron-so`
- type: `uoc-luong-tich`
- difficulty: `intermediate`
- question: Ước lượng 4,98 × 20,1 bằng cách làm tròn mỗi thừa số đến số nguyên gần nhất.
- options: 0:80 | 1:90 | 2:100 | 3:110
- answer index: 2
- explanation: 4,98 ≈ 5 và 20,1 ≈ 20, nên tích được ước lượng là 5 × 20 = 100.

### NUM02V1_131
- skill: `lam-tron-so`
- type: `giai-thich-quy-tac`
- difficulty: `intermediate`
- question: Vì sao 6,241 làm tròn đến hàng phần trăm bằng 6,24?
- options: 0:Vì chữ số hàng phần nghìn là 1 < 5 nên giữ nguyên hàng phần trăm. | 1:Vì luôn bỏ tất cả chữ số sau hàng phần trăm. | 2:Vì chữ số hàng phần mười là 2 < 5. | 3:Vì 6,241 nhỏ hơn 6,25.
- answer index: 0
- explanation: Muốn làm tròn đến hàng phần trăm, phải nhìn chữ số ngay bên phải là hàng phần nghìn. Ở đây chữ số đó là 1 < 5.

### NUM02V1_132
- skill: `lam-tron-so`
- type: `dao-nguoc-lam-tron`
- difficulty: `advanced`
- question: Số nào sau đây khi làm tròn đến hàng phần mười thì được 6,4?
- options: 0:6,34 | 1:6,36 | 2:6,45 | 3:6,52
- answer index: 1
- explanation: 6,36 có chữ số hàng phần trăm là 6 nên làm tròn đến hàng phần mười được 6,4. Các lựa chọn còn lại lần lượt cho 6,3; 6,5; 6,5.


Review:
- answer correctness and uniqueness;
- Grade-6 appropriateness;
- structural diversity rather than clone inflation;
- clear distinction between direct rounding and estimation applications;
- no unsupported negative-number/advanced approximation rule;
- distractor plausibility.

## 7. Manifest candidate

- question_count: `132`
- new source: `02-so-va-phep-tinh-v1-05.json`
- new skill label: `lam-tron-so = Làm tròn số`
- skill group: `C. Phân số, số hữu tỉ và làm tròn`

Confirm that `lam-tron-so` is Core and that grouping does not imply `uoc-luong` is a canonical skill.

## 8. Protected boundaries

Review must not authorize:
- a new `uoc-luong` skill;
- taxonomy runtime activation;
- learner-history migration or regrade;
- Mastery/Readiness semantic change;
- automatic readiness credit from these formative items;
- mass rollout to other grades/topics.

## 9. Required output

Return the machine-checkable block first:

```text
PACKET|MATH-KNTT-G6-BAI30-ROUNDING-R1-20261004
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
LEARN|PASS|REVISE|<SHORT_REASON>
EXPECTED_MICRO|3
REVIEWED_MICRO|3
ITEM|NUM02MICRO_021|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_022|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_023|PASS|REVISE|<SHORT_REASON>
EXPECTED_PRACTICE|12
REVIEWED_PRACTICE|12
ITEM|NUM02V1_121|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_122|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_123|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_124|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_125|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_126|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_127|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_128|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_129|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_130|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_131|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02V1_132|PASS|REVISE|<SHORT_REASON>
TAGGING|UOC_LUONG_LESSON_LOCAL|PASS|REVISE|<SHORT_REASON>
MANIFEST|PASS|REVISE|<SHORT_REASON>
MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G6_BAI30_ROUNDING_CONTENT_REVIEW_COMPLETE
```

Then provide concise source-based reasoning and exact corrections for every `REVISE` line.

Do not issue the clearance string if any expected item was not reviewed.
