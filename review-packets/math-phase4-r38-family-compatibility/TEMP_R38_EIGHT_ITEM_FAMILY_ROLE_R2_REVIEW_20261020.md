# R38 · 8 more existing questions — independent Skill Family/role review (R2)

**PACKET_ID:** `MATH-R38-8ITEM-FAMILY-ROLE-R2-20261020`  
**Status:** `INDEPENDENT_REVIEW_PENDING` · `NOT_PRODUCTION_APPROVED`  
**Provenance:** Exact source snapshot from `TMA2015/roadmap-toan-thcs` `main`, 2026-10-20; prior candidate/NotebookLM V2 receipts in **Draft PR #524**, commit `48526d4e7fd66b6ea9c71403addae9c1f234e8ef`.  
**Scope:** **8 different existing questions**, not newly authored content: CT02 6, CT04 2; they **do not overlap** the 8 items independently reviewed in R1 / PR #547. Eight items were selected for **different cognitive operations**: rounding with carry, estimation by product, signed-fraction addition, signed-fraction division, identifying an irrational number, defining irrational decimal expansion, factored trinomial divided by binomial, and polynomial factorization by grouping followed by binomial division. No task asks to add or remove Practice inventory.

## 1. Existing review decisions and boundaries

R1 reviewer report `MATH-R38-8ITEM-FAMILY-ROLE-R1-20261020` found **5 role PASS, 1 role REVISE (`NUM02V1_137` → `NUM-FRACTION-OPS`), 2 HOLD (`ALG04V2_133`, `ALG04V2_136`)**, with 8/8 math PASS. Those eight exact IDs are **outside** this R2 packet; R1 is already transcribed into Draft PR #547 as an academic receipt. R1's two ALG binomial-division HOLD verdicts are reason for **heightened scrutiny**, not permission to bulk-HOLD unreviewed siblings.

The original R38 correction V2 `6 PASS, 34 REVISE` covered 40 questions, but academic content/layer approvals are distinct from exact `ASSESSED_SKILL` role. The Project Owner also explicitly HOLDS three Grade-7 arithmetic-square-root items `NUM02V1_142–144` for assessed Family credit: their normal Practice remains available; this R2 packet never includes or changes them.

**Distinguish:**
- An item with a correct answer / KNTT-Core layer is not automatically one-to-one mapped to an assessed Family.
- A Family registry entry that contains a matching `diagnostic_subskill` does **not** independently authorize `ASSESSED_SKILL` mapping.
- There is **no** new S1 primary textbook PDF in this temporary packet. The cited S1 page locators below come from prior independently reviewed claims, not a fresh scan; mark `INSUFFICIENT_S1` if independent authenticated S1 content is not actually available.
- Six existing CT02 items may be `NUM-SETS` by registry diagnostic subskill, but reviewers must say whether their *dominant cognitive operations* justify the broad Family role or require `HOLD` / more exact subskill governance.
- Two CT04 items use **binomial divisors**; the existing Family `ALG-DIV-MONOMIAL` explicitly says `Chia đa thức cho đơn thức`. Decide these two **individually**; do not silently widen its assessed definition or manufacture a new 132nd Family.

## 2. Exact sources and identity locks

| Role | Path/ref | Git blob SHA |
|---|---|---|
| Current Practice bank | `docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json` · main | `74e9be4dedcc5c39376455a1c428f1f3ed2bceae` |
| Current Practice bank | `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json` · main | `c39c177609cd5440de98b81461896c80f7166121` |
| Current Practice bank | `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json` · main | `34e52b7900f77815e0bff79ba82fdb491d6794b3` |
| 131-family Registry (runtime disabled) | `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json` · main | `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4` |
| Historical candidate/verdict evidence | `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json` · PR #524 | `5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad` |
| Historical candidate/verdict evidence | `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_NOTEBOOKLM_CORRECTION_V2_40_VERDICT_INTAKE_20261018.json` · PR #524 | `b9208d49e59eb7705f16b641ebad28d0fa6154ae` |

## 3. Registry excerpts — actual authorized **definitions**, NOT active credit

```json
[
  {
    "family_id": "NUM-SETS",
    "label_vi": "Tập hợp số và biểu diễn số",
    "layer": "KNTT-Core",
    "topics": [
      "CT02"
    ],
    "diagnostic_subskills": [
      "tap-hop-so",
      "so-huu-ti-thap-phan",
      "lam-tron-so",
      "so-vo-ti"
    ],
    "runtime_enabled": false
  },
  {
    "family_id": "NUM-FRACTION-OPS",
    "label_vi": "Phép tính phân số",
    "layer": "KNTT-Core",
    "topics": [
      "CT02"
    ],
    "diagnostic_subskills": [
      "phep-tinh-phan-so",
      "phep-tinh-so-huu-ti"
    ],
    "runtime_enabled": false
  },
  {
    "family_id": "ALG-DIV-MONOMIAL",
    "label_vi": "Chia đa thức cho đơn thức",
    "layer": "KNTT-Core",
    "topics": [
      "CT04"
    ],
    "diagnostic_subskills": [
      "chia-da-thuc-cho-don-thuc",
      "chia-da-thuc-mot-bien"
    ],
    "runtime_enabled": false
  }
]
```

## 4. Eight exact questions — full source-locked text/options/answer/explanation

### 1/8 — `NUM02V1_124` (CT02)

**Exact question:** Làm tròn 0,996 đến hàng phần trăm.

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | 0,99 | Incorrect |
| B · slot 1 | 1,00 | **Correct** |
| C · slot 2 | 0,996 | Incorrect |
| D · slot 3 | 1,06 | Incorrect |

**Solution/explanation in live bank:** Hàng phần nghìn là 6 nên 0,99 được làm tròn tăng lên thành 1,00.

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["lam-tron-so"],"type":"lam-tron-nho-nho"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json`, SHA `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** Bài 30, tr.35; quy tắc làm tròn  
**Prior candidate:** `NUM-SETS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-SETS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 2/8 — `NUM02V1_130` (CT02)

**Exact question:** Ước lượng 4,98 × 20,1 bằng cách làm tròn mỗi thừa số đến số nguyên gần nhất.

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | 80 | Incorrect |
| B · slot 1 | 90 | Incorrect |
| C · slot 2 | 100 | **Correct** |
| D · slot 3 | 110 | Incorrect |

**Solution/explanation in live bank:** 4,98 ≈ 5 và 20,1 ≈ 20, nên tích được ước lượng là 5 × 20 = 100.

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["lam-tron-so"],"type":"uoc-luong-tich"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-05.json`, SHA `74e9be4dedcc5c39376455a1c428f1f3ed2bceae`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** Bài 30, tr.37; Ví dụ 2 (ước lượng tích)  
**Prior candidate:** `NUM-SETS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-SETS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 3/8 — `NUM02V1_133` (CT02)

**Exact question:** Tính \(-\frac25+\frac3{10}\).

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | \(-\frac1{10}\) | **Correct** |
| B · slot 1 | \(\frac1{10}\) | Incorrect |
| C · slot 2 | \(-\frac7{10}\) | Incorrect |
| D · slot 3 | \(\frac7{10}\) | Incorrect |

**Solution/explanation in live bank:** Quy đồng: \(-2/5=-4/10\), nên tổng bằng \(-1/10\).

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["phep-tinh-so-huu-ti"],"type":"phep-tinh-so-huu-ti"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`, SHA `c39c177609cd5440de98b81461896c80f7166121`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `STRUCTURAL_CLONE`; **previously cited S1 locator (not independently page-verified by this packet):** T1 Bài 2 tr10–11; Bài 1.7a tr13  
**Prior candidate:** `NUM-FRACTION-OPS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-FRACTION-OPS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 4/8 — `NUM02V1_136` (CT02)

**Exact question:** Tính \(\frac38:\left(-\frac9{16}\right)\).

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | \(-\frac23\) | **Correct** |
| B · slot 1 | \(\frac23\) | Incorrect |
| C · slot 2 | \(-\frac{27}{128}\) | Incorrect |
| D · slot 3 | \(-\frac32\) | Incorrect |

**Solution/explanation in live bank:** Nhân với nghịch đảo: \((3/8)(-16/9)=-2/3\).

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["phep-tinh-so-huu-ti"],"type":"phep-tinh-so-huu-ti"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`, SHA `c39c177609cd5440de98b81461896c80f7166121`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `STRUCTURAL_CLONE`; **previously cited S1 locator (not independently page-verified by this packet):** T1 Bài 2 tr12–13  
**Prior candidate:** `NUM-FRACTION-OPS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-FRACTION-OPS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 5/8 — `NUM02V1_139` (CT02)

**Exact question:** Số nào là số vô tỉ?

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | \(\sqrt3\) | **Correct** |
| B · slot 1 | \(0,75\) | Incorrect |
| C · slot 2 | \(-2\) | Incorrect |
| D · slot 3 | \(0,(6)\) | Incorrect |

**Solution/explanation in live bank:** \(\sqrt3\) là số vô tỉ; các số còn lại là hữu tỉ.

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["so-vo-ti"],"type":"so-vo-ti"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`, SHA `c39c177609cd5440de98b81461896c80f7166121`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** T1 Bài 6 tr29–30  
**Prior candidate:** `NUM-SETS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-SETS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 6/8 — `NUM02V1_140` (CT02)

**Exact question:** Khẳng định nào đúng?

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn. | **Correct** |
| B · slot 1 | Mọi số thập phân vô hạn đều vô tỉ. | Incorrect |
| C · slot 2 | Mọi căn bậc hai đều vô tỉ. | Incorrect |
| D · slot 3 | Số vô tỉ không thuộc tập số thực. | Incorrect |

**Solution/explanation in live bank:** Số vô tỉ có biểu diễn thập phân vô hạn không tuần hoàn và vẫn thuộc tập số thực.

**Exact authored tags, not assessed mapping authorization:** `{"topic":"so-va-phep-tinh","skill":["so-vo-ti"],"type":"so-vo-ti"}`  
**Source bank:** `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`, SHA `c39c177609cd5440de98b81461896c80f7166121`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** T1 Bài 6 tr29–30; Bài 7 tr33–34  
**Prior candidate:** `NUM-SETS`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `NUM-SETS`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 7/8 — `ALG04V2_135` (CT04)

**Exact question:** Tính \((2x^2+5x+2):(2x+1)\).

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | \(x+2\) | **Correct** |
| B · slot 1 | \(2x+2\) | Incorrect |
| C · slot 2 | \(x+1\) | Incorrect |
| D · slot 3 | \(x-2\) | Incorrect |

**Solution/explanation in live bank:** \((2x+1)(x+2)=2x^2+5x+2\).

**Exact authored tags, not assessed mapping authorization:** `{"topic":"bieu-thuc-dai-so","skill":["chia-da-thuc-mot-bien"],"type":"chia-da-thuc-mot-bien"}`  
**Source bank:** `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json`, SHA `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** Bài 28, tr.40–42; Bài 7.32 tr.43  
**Prior candidate:** `ALG-DIV-MONOMIAL`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `ALG-DIV-MONOMIAL`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

### 8/8 — `ALG04V2_137` (CT04)

**Exact question:** Tính \((x^3+x^2-x-1):(x+1)\).

| Original option | Text | Key |
|---|---|---|
| A · slot 0 | \(x^2-1\) | **Correct** |
| B · slot 1 | \(x^2+1\) | Incorrect |
| C · slot 2 | \(x^2-x-1\) | Incorrect |
| D · slot 3 | \(x^2+x-1\) | Incorrect |

**Solution/explanation in live bank:** Nhóm hạng tử: \(x^2(x+1)-1(x+1)=(x+1)(x^2-1)\).

**Exact authored tags, not assessed mapping authorization:** `{"topic":"bieu-thuc-dai-so","skill":["chia-da-thuc-mot-bien"],"type":"chia-da-thuc-mot-bien"}`  
**Source bank:** `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json`, SHA `34e52b7900f77815e0bff79ba82fdb491d6794b3`  
**Prior approved curriculum layer:** `KNTT-Core`; authoring task classification `CONCEPT_BASE`; **previously cited S1 locator (not independently page-verified by this packet):** Bài 28, tr.40–42; Bài 7.32b tr.43  
**Prior candidate:** `ALG-DIV-MONOMIAL`, provisional status `SUBSKILL_ONLY_REVIEW`.  
**Prior NotebookLM V2 suggestion:** `ALG-DIV-MONOMIAL`, `ASSESSED_SKILL`, V2 verdict `REVISE`. **No production mapping permission.**

## 5. Independent reviewer tasks and exact output

Review **each** 8/8 (no family-wide blanket approval). Validate the individual task demand, mathematically unique key, correct Layer, the precise `ASSESSED_SKILL` **primary role** versus supporting method, alignment with current actual Registry Family definitions and independently available KNTT S1.

**Critical contrasts:**
- `NUM02V1_124`: decimal **carry to 1.00**; `NUM02V1_130`: estimate a **product** through rounding; do both actually fit broad `NUM-SETS` for assessed role, or only its diagnostic subskill?
- `NUM02V1_133` signed fraction **addition** and `NUM02V1_136` signed fraction **division**; evaluate `NUM-FRACTION-OPS` individually (not by similarity to R1 NUM02V1_137).
- `NUM02V1_139` recognizes an irrational value; `NUM02V1_140` tests irrational nonterminating nonrepeating decimal definition; decide whether `NUM-SETS` primary assessed fits each.
- `ALG04V2_135`: factor trinomial divided by binomial `2x+1`; `ALG04V2_137`: grouping a cubic divided by binomial `x+1`. Reviewer must explicitly reconcile **binomial vs monomial** Family-name mismatch, as in R1, without automatically assuming same verdict.

For each ID give `MATH:PASS/REVISION_REQUIRED`, `S1:PASS/INSUFFICIENT_S1`, `FAMILY:<existing registry family or HOLD_NO_ASSESSED_FAMILY>`, `ASSESSED_ROLE:PASS/REVISE/HOLD`, `ITEM_VERDICT:PASS/REVISION_REQUIRED/INSUFFICIENT_EVIDENCE`, plus 1–2 sentences explaining the decisive operation and evidence. If an item is HOLD, keep it available for normal Practice; no reassignment or regrade.

```text
PACKET_ID|MATH-R38-8ITEM-FAMILY-ROLE-R2-20261020
EXPECTED=8
REVIEWED=8
NUM02V1_124 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_130 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_133 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_136 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_139 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_140 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
ALG04V2_135 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
ALG04V2_137 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS_FOR_ITEM_ROLE_REVIEW / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_PRODUCTION_SKILL_CREDIT
```

## 6. Hard release boundaries

Use this **single Markdown file** as the sole temporary NotebookLM source together with existing permanent governance and actual S1 materials where available; do not add the preliminary JSON sources separately. Review does not authorize live production Family associations, new MCQ, option-ID editing, Skill/Node Runtime flags, automatic feedback causal signals, mastery/readiness credit, learner history changes, or merge. Original 131 Family registry and all previous source/answers/IDs stay unchanged; prior R1 and three Owner-HOLD items are excluded and protected. Owner signoff and exact stable option-ID/atomic evidence device QA remain future separate gates.
