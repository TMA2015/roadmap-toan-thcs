# NotebookLM Review Packet — Grade 6 Written KNTT Placement R1

**packet_id:** `MATH-KNTT-G6-WRITTEN-PLACEMENT-R1-20261006`  
**scope:** Review true KNTT curriculum placement for three already academically approved canonical Written exercises  
**release boundary:** ACADEMIC REVIEW ONLY — do not mutate the Written Library from this review result alone

## 1. Select exactly 6 Sources

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **Written Exercise Library Contract v1**
4. **SGK Toán 6, tập một — Kết nối tri thức với cuộc sống**
5. **SGK Toán 6, tập hai — Kết nối tri thức với cuộc sống**
6. **This packet — MATH-KNTT-G6-WRITTEN-PLACEMENT-R1-20261006**

Do not select older Written placement drafts or unrelated grades.

## 2. Why this review exists

The canonical Written Library already contains approved exercises. The current library intentionally has **no `kntt_placements` field**, so Grade-6 Dimension Audit can only call them candidate matches.

The Written Exercise Library Contract requires:
- one canonical item, not cloned copies;
- `kntt_placements` for **true curriculum placement**;
- topic/skill links are separate from KNTT placement;
- a prerequisite or supporting skill **must not automatically create a curriculum placement**;
- multiple placements require real curriculum evidence.

The Grade-6 re-rank found three likely true placements and two false-positive matches caused by prerequisite/supporting-skill overlap. This packet asks NotebookLM to independently verify those distinctions before repository mutation.

## 3. Source locks

- Written Library: `docs/assets/data/written-exercises/written-exercise-library-v1.json` — blob `e9ab1f2ad3a3f5a63461694b0f08271b13fe161f`
- Grade-6 semantic reconciliation: `docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json` — blob `38aa6e86781ac63e1481aa0080c3fbc2d819885b`
- Grade-6 Dimension Audit: `docs/assets/data/curriculum/kntt-dimension-coverage-g6-v1.json` — blob `3af22554d7b2ae472a35a8b0452aaf9a8a9b6e87`
- Placement candidate artifact: `docs/assets/data/curriculum/kntt-g6-written-placement-r1.json` — blob `55e920bc24df73ab549c162cf7422e47b35a9bb7`

All three exercises below already have `academic_review.status = APPROVED`. This packet reviews **curriculum placement**, not whether a new Written exercise should be authored.

---

## 4. Candidate A — WX02-NUM-001

**Title:** Nhiều phần quà giống nhau nhất: vì sao phải dùng ƯCLN?  
**Current topic:** CT02 — Số và phép tính  
**Skills:** `ucln`, `phan-tich-thua-so-nguyen-to`  
**Grade overlay:** 6  
**Existing academic review:** APPROVED

### Problem

Có 36 bút và 48 quyển vở. Muốn chia thành **nhiều phần quà giống nhau nhất**, dùng hết cả hai loại.

1. Giải thích vì sao số phần quà phải là ước chung của 36 và 48.
2. Tìm số phần quà nhiều nhất.
3. Tính số bút và số vở trong mỗi phần quà.

### Existing solution logic

- Number of identical groups must divide both 36 and 48.
- Because the problem asks for the **greatest** possible number of groups, use ƯCLN.
- `ƯCLN(36,48)=12`.
- Each group has 3 pens and 4 notebooks.
- Prime-factorization is used as one method to compute the ƯCLN.

### Proposed true KNTT placement

```yaml
kntt_placements:
  - grade: 6
    chapter: 2
    lesson: "Bài 11–12 — Ước chung, ƯCLN; bội chung, BCNN và ứng dụng"
```

### Placement boundary to review

**Approve as Bài 11–12 if justified.**

**Reject Bài 10 placement** unless the exercise's curriculum purpose is genuinely “Số nguyên tố và hợp số; phân tích ra thừa số nguyên tố”.

The working hypothesis is:
- ƯCLN application = true curriculum purpose;
- prime factorization = supporting method / prerequisite;
- therefore Bài 10 must **not** become a second KNTT placement.

---

## 5. Candidate B — WX02-NUM-002

**Title:** Giảm 15%: tính đúng đại lượng ở từng bước  
**Current topic:** CT02 — Số và phép tính  
**Skills:** `phan-tram`, `so-huu-ti-thap-phan`  
**Grade overlay:** 6  
**Existing academic review:** APPROVED

### Problem

Một món hàng có giá niêm yết 800 000 đồng và được giảm 15% giá ban đầu.

1. Tính số tiền được giảm.
2. Tính số tiền phải trả.
3. Kiểm tra kết quả bằng cách tính trực tiếp 85% của giá ban đầu.

### Existing solution logic

- `15% = 15/100 = 0,15`.
- Discount = 120 000 đồng.
- Final price = 680 000 đồng.
- Verify with `85%` of the original price.

### Proposed true KNTT placement

```yaml
kntt_placements:
  - grade: 6
    chapter: 7
    lesson: "Bài 31 — Tỉ số và tỉ số phần trăm; bài toán phần trăm"
```

### Placement boundary to review

**Approve as Bài 31 if justified.**

**Reject Bài 28–29 placement** unless decimal calculation itself is the curriculum purpose.

The working hypothesis is:
- percentage discount = true curriculum purpose;
- decimal arithmetic = supporting computation;
- therefore Bài 28–29 must **not** become a second KNTT placement.

---

## 6. Candidate C — WX23-PRO-001

**Title:** Tính từ dữ liệu quan sát, không biến thành lời tiên đoán chắc chắn  
**Current topic:** CT23 — Xác suất  
**Skills:** `xac-suat-thuc-nghiem`, `kiem-tra-xac-suat`  
**Grade overlay:** 6, 7, 8  
**Existing academic review:** APPROVED

### Problem

Một đồng xu được tung 40 lần, trong đó xuất hiện mặt ngửa 23 lần.

1. Tính xác suất thực nghiệm của biến cố A: “xuất hiện mặt ngửa”.
2. Kiểm tra kết quả có nằm trong khoảng hợp lệ của xác suất hay không.
3. Giải thích vì sao kết quả trên **không** có nghĩa rằng lần tung tiếp theo chắc chắn sẽ ra ngửa.

### Existing solution logic

- Experimental probability = `23/40 = 0,575`.
- Check `0 ≤ 0,575 ≤ 1`.
- Interpret the value as observed relative frequency, not a deterministic prediction.

### Proposed true KNTT placement

```yaml
kntt_placements:
  - grade: 6
    chapter: 9
    lesson: "Bài 43 — Xác suất thực nghiệm"
```

### Placement boundary to review

**Approve as Bài 43 if justified.**

**Reject Bài 42 placement** unless the task primarily assesses “Kết quả có thể và sự kiện trong trò chơi, thí nghiệm”.

The working hypothesis is:
- experimental probability and interpretation = true curriculum purpose;
- possible-outcome/event vocabulary is not the task's primary assessment target;
- therefore Bài 42 must **not** become a second KNTT placement.

---

## 7. Anti-duplication / anti-overplacement boundary

For each exercise answer two separate questions:

1. **What is the true KNTT lesson placement?**
2. **Which other lesson knowledge is merely prerequisite/supporting computation?**

Do not give an exercise multiple KNTT placements merely because multiple skills appear in its solution.

A PASS should authorize adding exactly one Grade-6 `kntt_placements` entry to each of the three existing canonical items.

A PASS must not authorize:
- cloning any exercise;
- changing problem, solution or rubric;
- adding a new canonical skill;
- granting Readiness credit;
- adding extra KNTT placements based only on prerequisite overlap;
- mass-tagging other Written items.

---

## 8. Required output

Return this machine-checkable block first:

```text
PACKET|MATH-KNTT-G6-WRITTEN-PLACEMENT-R1-20261006
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
CONTRACT|TRUE_PLACEMENT_NOT_PREREQUISITE_OVERLAP|PASS|REVISE|<SHORT_REASON>
EXPECTED_ITEMS|3
REVIEWED_ITEMS|3
ITEM|WX02-NUM-001|PASS|REVISE|<SHORT_REASON>
PLACEMENT|WX02-NUM-001|BAI11_12|PASS|REVISE|<SHORT_REASON>
BOUNDARY|WX02-NUM-001|BAI10_NOT_PLACEMENT|PASS|REVISE|<SHORT_REASON>
ITEM|WX02-NUM-002|PASS|REVISE|<SHORT_REASON>
PLACEMENT|WX02-NUM-002|BAI31|PASS|REVISE|<SHORT_REASON>
BOUNDARY|WX02-NUM-002|BAI28_29_NOT_PLACEMENT|PASS|REVISE|<SHORT_REASON>
ITEM|WX23-PRO-001|PASS|REVISE|<SHORT_REASON>
PLACEMENT|WX23-PRO-001|BAI43|PASS|REVISE|<SHORT_REASON>
BOUNDARY|WX23-PRO-001|BAI42_NOT_PLACEMENT|PASS|REVISE|<SHORT_REASON>
KNTT_PLACEMENT_COUNT|3
FALSE_POSITIVE_PLACEMENT_COUNT|2
MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G6_WRITTEN_PLACEMENT_R1_CONTENT_REVIEW_COMPLETE
```

Then provide concise source-based reasoning for each true placement and each rejected false-positive placement.

Do not issue the clearance string unless all three items and all five placement/boundary decisions were reviewed.
