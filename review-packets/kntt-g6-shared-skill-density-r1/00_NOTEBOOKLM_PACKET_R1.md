# NotebookLM Review Packet — Grade 6 Shared-Skill Density Repair R1

**packet_id:** `MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006`  
**scope:** Grade 6 KNTT Bài 13–17, Bài 25–26, Bài 28–29 — repair explicit Learn + Micro lesson evidence inside existing canonical skills  
**release boundary:** ACADEMIC REVIEW ONLY — no merge/deploy/runtime authorization

## 1. Select exactly 5 Sources

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 6, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
5. **This packet — MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006**

Do not select older repair packets or unrelated grades.

## 2. Why this repair exists

After the Grade-6 Dimension Audit closed all clear `PARTIAL_LOCAL_OR_FAMILY` Learn rows, 7 rows remained `PARTIAL_SHARED_SKILL`:

- Bài 13, 14, 15, 16, 17 — shared canonical `so-nguyen-phep-tinh` / `gia-tri-tuyet-doi`;
- Bài 25–26 — shared canonical `phep-tinh-phan-so`;
- Bài 28–29 — shared canonical `so-huu-ti-thap-phan`.

Re-ranking found that these are not merely audit-label noise. The current combined Core cards use the correct canonical skills, but some exact KNTT lesson demands are not explicit enough in Learn/Micro evidence.

This candidate therefore **densifies existing Core cards and adds direct Micro evidence only**.

It does **not**:
- create a new canonical skill;
- change Practice Bank;
- change Written Library;
- change Readiness;
- activate taxonomy runtime;
- regrade/migrate learner history;
- change Mastery semantics.

## 3. Candidate source locks

- Learning Workspace: `docs/assets/data/curriculum/topic02-learning-workspace.json` — blob `956087701533dd50c61f653f61e969392216e57f`
- Micro bank: `docs/assets/data/practice/02-so-va-phep-tinh-micro-v1.json` — blob `b6ec952b786f897ef6f45301208dcd9d55bde98b`
- Grade-6 semantic reconciliation: `docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json` — blob `2aeb046dab8655bbaa3e1af922239f841c796752`
- Grade-6 dimension audit candidate: `docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json` — blob `d0fda0114eb04fb1f7946ac0f0c2f62c0bdabd29`
- Topic02 Practice manifest baseline, unchanged: `docs/assets/data/practice/02-so-va-phep-tinh-v1.manifest.json` — blob `4609bcd1c34a338cbd456eb4f3219ba7f89f943f`

## 4. Semantic boundary to verify first

The existing reviewed reconciliation intentionally maps the historical Grade-6 lesson details into existing broad canonical skills:

### Bài 13–17
Canonical:
- `so-nguyen-phep-tinh`
- `gia-tri-tuyet-doi`

Historical detail such as:
- `so-nguyen-truc-so`
- `so-sanh-so-nguyen`
- `cong-tru-so-nguyen`
- `quy-tac-dau-ngoac`
- `nhan-so-nguyen`
- `chia-het-so-nguyen`
- `uoc-boi-so-nguyen`

must **not** be promoted into new canonical skills by this packet.

### Bài 25–26
Canonical:
- `phep-tinh-phan-so`

Historical `cong-tru-phan-so` and `nhan-chia-phan-so` remain sub-granularity inside this canonical skill.

### Bài 28–29
Canonical:
- `so-huu-ti-thap-phan`

Historical `so-thap-phan` is a direct alias; `phep-tinh-so-thap-phan` remains aggregated granularity inside the canonical skill.

Review whether this anti-duplication boundary remains academically defensible and whether all candidate Micro tags respect it.

## 5. Candidate Learn card A — num02-g6-core-3

**Title:** Số nguyên: biểu diễn, so sánh và phép tính  
**KNTT lessons:** Lớp 6 · Bài 13–17  
**Skills:** `so-nguyen-phep-tinh`, `gia-tri-tuyet-doi`

### Key idea
Tập hợp số nguyên gồm số nguyên âm, số 0 và số nguyên dương. Trên trục số, số nằm bên trái nhỏ hơn số nằm bên phải; hai số đối nằm khác phía 0 và có cùng giá trị tuyệt đối. Khi cộng, trừ, nhân và chia số nguyên, phải theo đúng quy tắc dấu. Khi bỏ dấu ngoặc, chú ý dấu đứng trước ngoặc. Với phép chia hết trong số nguyên, nếu a = b × q với q nguyên và b ≠ 0 thì a chia hết cho b; b là ước của a và a là bội của b.

### Worked example
**Problem:** a) Số đối của −7 là gì và so sánh −5 với −2. b) Tính 6 − (−9) và 8 − (3 − 5). c) Tính (−24) : 6. d) 3 có là ước của −12 không?

**Solution:** a) Số đối của −7 là 7; trên trục số −5 nằm bên trái −2 nên −5 < −2. b) 6 − (−9) = 15; 8 − (3 − 5) = 8 − (−2) = 10. c) (−24) : 6 = −4. d) Có, vì −12 = 3 × (−4).

### Misconception
Không được xem mọi dấu “−” là giống nhau: dấu âm của một số, phép trừ và dấu đứng trước ngoặc có vai trò khác nhau. Khi chia, không được chia cho 0; dấu của thương tuân theo quy tắc cùng dấu/khác dấu.

### Summary
Đọc đúng vị trí và dấu của số nguyên trước; sau đó chọn đúng quy tắc cho cộng–trừ, dấu ngoặc, nhân–chia và quan hệ ước–bội.

Review:
- Bài 13: tập hợp số nguyên, số đối, trục số, thứ tự, giá trị tuyệt đối;
- Bài 14: cộng/trừ số nguyên;
- Bài 15: quy tắc dấu ngoặc;
- Bài 16: nhân số nguyên;
- Bài 17: chia hết, ước/bội số nguyên;
- wording, conditions and Grade-6 appropriateness;
- whether one combined card remains concise enough while explicitly covering the 5 KNTT lessons.

## 6. Candidate Learn card B — num02-g6-core-4

**KNTT lessons:** Lớp 6 · Bài 23–27  
**Skills unchanged:** `rut-gon-phan-so`, `quy-dong-so-sanh-phan-so`, `phep-tinh-phan-so`

### New operation coverage inside the key idea
When adding/subtracting fractions: use a common denominator.  
When multiplying: numerator × numerator and denominator × denominator.  
When dividing by a nonzero fraction: multiply by its reciprocal.

### Worked operation examples
- `2/3 × 9/4 = 18/12 = 3/2`
- `5/6 ÷ 10/9 = 5/6 × 9/10 = 3/4`

Existing reviewed Bài 23–24 and Bài 27 content is preserved.

Review:
- Bài 25–26 completeness across addition, subtraction, multiplication and division;
- division-by-zero boundary;
- whether the copy remains consistent with the previously released Bài 23–24 / Bài 27 material.

## 7. Candidate Learn card C — num02-g6-core-5

**Title:** Số thập phân, phép tính, làm tròn và phần trăm  
**KNTT lessons:** Lớp 6 · Bài 28–31  
**Skills unchanged:** `so-huu-ti-thap-phan`, `lam-tron-so`, `phan-tram`

### Key operation rules added
- addition/subtraction: align decimal separators;
- multiplication: multiply as natural numbers, then restore the decimal position according to the total decimal places;
- division by a nonzero decimal: shift the decimal separator in both dividend and divisor by the same number of places until the divisor becomes a natural number.

### Worked examples
- `3,7 − 1,85 = 1,85`
- `1,2 × 0,5 = 0,6`
- `4,2 ÷ 0,6 = 7`
- rounding example `12,347 ≈ 12,35` is preserved.

Review:
- correctness of Grade-6 decimal-operation rules;
- whether division wording is sufficiently precise;
- whether using `so-huu-ti-thap-phan` remains consistent with the reviewed reconciliation;
- whether the Bài 30 rounding and Bài 31 percentage boundaries remain intact.

## 8. Candidate Micro items — review all 11

### NUM02MICRO_042 — Bài 13
- skill: `so-nguyen-phep-tinh`
- type: `so-doi-so-nguyen`
- question: Số đối của −7 là số nào?
- options: 0:7 | 1:−7 | 2:0 | 3:1/7
- answer index: 0
- explanation: Hai số đối có tổng bằng 0, nên số đối của −7 là 7.

### NUM02MICRO_043 — Bài 13
- skill: `so-nguyen-phep-tinh`
- type: `thu-tu-so-nguyen`
- question: Khẳng định nào đúng?
- options: 0:−5 < −2 | 1:−5 > −2 | 2:−5 = −2 | 3:Không thể so sánh −5 và −2
- answer index: 0
- explanation: Trên trục số, −5 nằm bên trái −2 nên −5 < −2.

### NUM02MICRO_044 — Bài 14
- skill: `so-nguyen-phep-tinh`
- type: `tru-so-nguyen`
- question: Tính 6 − (−9).
- options: 0:15 | 1:−3 | 2:3 | 3:−15
- answer index: 0
- explanation: Trừ một số âm tương đương cộng số đối của nó: 6 − (−9) = 15.

### NUM02MICRO_045 — Bài 15
- skill: `so-nguyen-phep-tinh`
- type: `quy-tac-dau-ngoac`
- question: Tính 8 − (3 − 5).
- options: 0:10 | 1:6 | 2:0 | 3:−10
- answer index: 0
- explanation: 3 − 5 = −2, nên 8 − (−2) = 10.

### NUM02MICRO_046 — Bài 17
- skill: `so-nguyen-phep-tinh`
- type: `chia-so-nguyen`
- question: Tính (−24) : 6.
- options: 0:−4 | 1:4 | 2:−18 | 3:18
- answer index: 0
- explanation: Hai số khác dấu cho thương âm; 24 : 6 = 4.

### NUM02MICRO_047 — Bài 17
- skill: `so-nguyen-phep-tinh`
- type: `uoc-boi-so-nguyen`
- question: Khẳng định nào đúng?
- options: 0:3 là ước của −12 | 1:−12 không là bội của 3 | 2:0 là ước của −12 | 3:5 là ước của −12
- answer index: 0
- explanation: −12 = 3 × (−4), nên 3 là ước của −12 và −12 là bội của 3.

### NUM02MICRO_048 — Bài 25–26
- skill: `phep-tinh-phan-so`
- type: `nhan-phan-so`
- question: Tính 2/3 × 9/4.
- options: 0:3/2 | 1:11/7 | 2:1/6 | 3:6/13
- answer index: 0

### NUM02MICRO_049 — Bài 25–26
- skill: `phep-tinh-phan-so`
- type: `chia-phan-so`
- question: Tính 5/6 ÷ 10/9.
- options: 0:3/4 | 1:4/3 | 2:1/3 | 3:15/16
- answer index: 0

### NUM02MICRO_050 — Bài 28–29
- skill: `so-huu-ti-thap-phan`
- type: `tru-so-thap-phan`
- question: Tính 3,7 − 1,85.
- options: 0:1,85 | 1:2,15 | 2:1,95 | 3:2,85
- answer index: 0

### NUM02MICRO_051 — Bài 28–29
- skill: `so-huu-ti-thap-phan`
- type: `nhan-so-thap-phan`
- question: Tính 1,2 × 0,5.
- options: 0:0,6 | 1:6 | 2:0,06 | 3:1,7
- answer index: 0

### NUM02MICRO_052 — Bài 28–29
- skill: `so-huu-ti-thap-phan`
- type: `chia-so-thap-phan`
- question: Tính 4,2 ÷ 0,6.
- options: 0:7 | 1:0,7 | 2:70 | 3:6
- answer index: 0

For every item verify:
- mathematical correctness;
- answer uniqueness;
- Grade-6 KNTT placement;
- canonical skill tag appropriateness;
- distractor plausibility;
- explanation/hint correctness;
- no accidental new skill identity.

## 9. Existing evidence that should be considered, not duplicated

### Bài 13–17 existing Micro
- `NUM02MICRO_007` — integer addition;
- `NUM02MICRO_008` — integer multiplication;
- `NUM02MICRO_009` — applied integer addition;
- `NUM02MICRO_019` — absolute value.

Therefore this packet intentionally adds no new Bài 16 multiplication item.

### Bài 25–26 existing Micro
- `NUM02MICRO_011` — subtraction of fractions;
- `NUM02MICRO_012` — addition of fractions.

Therefore this packet adds multiplication and division only.

### Bài 28–29 existing Micro
- `NUM02MICRO_013` — decimal addition.

Therefore this packet adds subtraction, multiplication and division only.

Review whether this is a reasonable anti-inflation choice.

## 10. Audit status boundary

Current statuses intentionally remain:
- 7 × Learn = `PARTIAL_SHARED_SKILL`;
- 7 × Micro = `PARTIAL`.

A PASS from this review should authorize later repository reconciliation to:
- promote only rows whose exact lesson demand is now adequately explicit;
- preserve Practice/Written/Readiness statuses;
- avoid any new canonical skill.

Do **not** infer release or runtime authorization from the academic PASS.

## 11. Protected boundaries

This review must not authorize:
- new canonical skills for integer sub-lessons, fraction operation subtypes or decimal operation subtypes;
- Practice Bank expansion;
- Written Library placement;
- Readiness/Mastery changes;
- learner-history backfill/regrade;
- taxonomy runtime activation;
- mass rollout to other grades/topics.

## 12. Required output

Return this machine-checkable block first:

```text
PACKET|MATH-KNTT-G6-SHARED-SKILL-DENSITY-R1-20261006
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
BOUNDARY|NO_NEW_CANONICAL_SKILLS|PASS|REVISE|<SHORT_REASON>
LEARN|num02-g6-core-3|PASS|REVISE|<SHORT_REASON>
LEARN|num02-g6-core-4|PASS|REVISE|<SHORT_REASON>
LEARN|num02-g6-core-5|PASS|REVISE|<SHORT_REASON>
EXPECTED_MICRO|11
REVIEWED_MICRO|11
ITEM|NUM02MICRO_042|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_043|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_044|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_045|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_046|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_047|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_048|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_049|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_050|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_051|PASS|REVISE|<SHORT_REASON>
ITEM|NUM02MICRO_052|PASS|REVISE|<SHORT_REASON>
ANTI_INFLATION|EXISTING_EVIDENCE_REUSED|PASS|REVISE|<SHORT_REASON>
AUDIT_PROMOTION_BOUNDARY|PASS|REVISE|<SHORT_REASON>
MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G6_SHARED_SKILL_DENSITY_R1_CONTENT_REVIEW_COMPLETE
```

Then give concise source-based reasoning and exact corrections for every `REVISE` line.

Do not issue the clearance string if any expected Learn card or Micro item was not reviewed.
