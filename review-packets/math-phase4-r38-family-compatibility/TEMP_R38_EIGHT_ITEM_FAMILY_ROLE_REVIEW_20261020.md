# R38 · Eight disputed existing MCQ → Skill Family role audits (one NotebookLM source)

**PACKET_ID:** `MATH-R38-8ITEM-FAMILY-ROLE-R1-20261020`  
**Source snapshot:** `TMA2015/roadmap-toan-thcs` main, 2026-10-20, original Source-Locked R38 Draft PR #524, head SHA `48526d4e7fd66b6ea9c71403addae9c1f234e8ef`.  
**Status:** `INDEPENDENT_ITEM_ROLE_REVIEW_REQUESTED` · **not independently approved** · **no production release authorization**.  
**Expected:** **8 existing** question IDs, no newly authored MCQs; 2 CT02 + 4 CT03 + 2 CT04. This is a single focused **8-item batch** in line with Owner preference, not a claim that 8 new exercises should be added.

## A. Why these eight, and what is already approved

The previous R38 reviewer correction V2 classified 40 existing candidate items: 6 reviewer PASS, 31 REVISE-to-existing-Family, 3 new-Family-or-HOLD. However **no one-to-one assessed Skill Family mapping has Project Owner approval**, and the corrected family candidate does not in itself grant formative/assessment credit. The 3 Grade-7 square-root IDs `NUM02V1_142–144` are under an **explicit Owner HOLD** for *assessed Family mapping*; they must remain visible for ordinary Practice and **are outside this 8-item packet**.

These eight come from the existing 12 disputed item worklist, selected by **different mapping hazards**:
- `NUM02V1_137` can test fraction arithmetic with order-of-operations; V2's `NUM-ORDER` is disputed as its **primary assessed Family**, versus `NUM-FRACTION-OPS`.
- `NUM02V1_138` is a rational-base integer power, candidate `NUM-POWER`.
- `RAT03V1_121–124` contain direct proportion, map scale and unit conversion; the legacy tag `mo-hinh-ti-le` must **not** silently activate `RATIO-MODEL` (Entrance10) for KNTT-Core items.
- `ALG04V2_133` and `ALG04V2_136` are division by **binomials**; the existing `ALG-DIV-MONOMIAL` Family label is *division by monomial*. Its reviewed diagnostic subskill `chia-da-thuc-mot-bien` may be adjacent, but must not be silently assumed to confer assessed Skill credit. Other four ALG04 items remain unresolved outside this packet.

**No-change baseline:** All eight current stem texts, authored options, answer indexes, explanations, source-layer approvals and canonical IDs are immutable here. Their individual academic **content/layer** approval from R33/R35 is not the same as assessed Skill-Family membership. A correct answer to normal Practice is not Readiness or verified mastery.

## B. Evidence provenance and locks

| Evidence | Exact current source | Git blob SHA-1 | Role |
|---|---|---|---|
| Practice questions | `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json` | `c39c177609cd5440de98b81461896c80f7166121` | Canonical current authored text/options/answer/explanations |
| Practice questions | `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json` | `759fd83900fa5b64d5db7f6deb2197c343c46732` | Canonical current authored text/options/answer/explanations |
| Practice questions | `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json` | `34e52b7900f77815e0bff79ba82fdb491d6794b3` | Canonical current authored text/options/answer/explanations |
| Skill Family Registry, 131 disabled families | `docs/assets/data/curriculum/skill-taxonomy-v2-registry-r1.json` | `90e58fa666a0cea4ae41ff7ef82a3cbf80ca11e4` | Candidate registry identities/labels/layers/subskills |
| R38 prior review metadata | `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_40MCQ_CANDIDATE_SKILL_FAMILY_REVIEW_20261018.json` | `5fb3e14814a349af6dc0be3ccdd57fc51cc7ebad` | Previous candidate & V2 reviewer verdict only |
| R38 prior review metadata | `review-packets/math-phase4-r38-family-compatibility/TEMP_R38_NOTEBOOKLM_CORRECTION_V2_40_VERDICT_INTAKE_20261018.json` | `b9208d49e59eb7705f16b641ebad28d0fa6154ae` | Previous candidate & V2 reviewer verdict only |

**S1 availability:** Source packet includes *reviewer-reported textbook locators*, not complete authenticated textbook pages. NotebookLM must use its independently supplied authoritative KNTT SGK/SBT material (if actually available) for curriculum and assessed-skill boundary decisions. Otherwise return `INSUFFICIENT_S1` and HOLD; do not invent a citation or import an Entrance10 Family to Core.

**R38 prior V2 verdict is not automatically final:** All 8 selected prior V2 rows are `REVISE` for role, and the source-local triage explicitly questions some choices. This packet requests independent, **per-ID** resolution.

## C. Exact existing Family Registry entries (no proposed new Family registered)

```json
[
  {
    "family_id": "NUM-ORDER",
    "label_vi": "Thứ tự thực hiện phép tính",
    "layer": "KNTT-Core",
    "topics": [
      "CT02"
    ],
    "diagnostic_subskills": [
      "thu-tu-phep-tinh"
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
    "family_id": "NUM-POWER",
    "label_vi": "Lũy thừa",
    "layer": "KNTT-Core",
    "topics": [
      "CT02"
    ],
    "diagnostic_subskills": [
      "luy-thua"
    ],
    "runtime_enabled": false
  },
  {
    "family_id": "RATIO-DIRECT",
    "label_vi": "Đại lượng tỉ lệ thuận",
    "layer": "KNTT-Core",
    "topics": [
      "CT03"
    ],
    "diagnostic_subskills": [
      "ti-le-thuan",
      "he-so-ti-le-thuan"
    ],
    "runtime_enabled": false
  },
  {
    "family_id": "RATIO-BASIC",
    "label_vi": "Tỉ số và ứng dụng tỉ số",
    "layer": "KNTT-Core",
    "topics": [
      "CT03"
    ],
    "diagnostic_subskills": [
      "ti-so",
      "doi-don-vi-ti-so",
      "ti-le-ban-do"
    ],
    "runtime_enabled": false
  },
  {
    "family_id": "RATIO-MODEL",
    "label_vi": "Mô hình hóa bằng tỉ lệ",
    "layer": "Entrance10",
    "topics": [
      "CT03"
    ],
    "diagnostic_subskills": [
      "mo-hinh-ti-le"
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

**Interpretation caution:** `diagnostic_subskills` membership is not equivalent to an independently authorized `ASSESSED_SKILL` role, and a shared topic is not enough. Particularly `RATIO-MODEL` is Entrance10, incompatible with silently relabeling KNTT-Core items.

## D. Eight canonical questions: full exact text, options, keys and review dilemmas

### 1/8 · `NUM02V1_137` · CT02

**Authoritative current item (verbatim from `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`; blob `c39c177609cd5440de98b81461896c80f7166121`):**

> Tính \(1-\frac23\cdot\left(-\frac34\right)\).

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | \(\frac32\) | **YES** |
| B (zero-based 1) | \(\frac12\) | No |
| C (zero-based 2) | \(-\frac32\) | No |
| D (zero-based 3) | \(0\) | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T1 Bài 2 tr11–12; Bài 4 tr20
- **Current authored tags:** `{"topic":"so-va-phep-tinh","skill":["phep-tinh-so-huu-ti"],"type":"phep-tinh-so-huu-ti"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** Tích bằng \(-1/2\), nên \(1-(-1/2)=3/2\).
- **Initial R38 candidate:** `NUM-FRACTION-OPS` · status `SUBSKILL_ONLY_REVIEW`.
- **NotebookLM V2 corrected candidate:** `NUM-ORDER`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** NUM-ORDER — **MISMATCH**: arithmetic, not comparison/ordering; re-evaluate NUM-FRACTION-OPS, no auto reassignment.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 2/8 · `NUM02V1_138` · CT02

**Authoritative current item (verbatim from `docs/assets/data/practice/02-so-va-phep-tinh-v1-06.json`; blob `c39c177609cd5440de98b81461896c80f7166121`):**

> Giá trị của \(\left(-\frac12\right)^3\) là:

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | \(-\frac18\) | **YES** |
| B (zero-based 1) | \(\frac18\) | No |
| C (zero-based 2) | \(-\frac16\) | No |
| D (zero-based 3) | \(\frac16\) | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T1 Bài 3 tr16–18
- **Current authored tags:** `{"topic":"so-va-phep-tinh","skill":["phep-tinh-so-huu-ti"],"type":"phep-tinh-so-huu-ti"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** Lũy thừa bậc lẻ giữ dấu âm: \((-1/2)^3=-1/8\).
- **Initial R38 candidate:** `NUM-FRACTION-OPS` · status `SUBSKILL_ONLY_REVIEW`.
- **NotebookLM V2 corrected candidate:** `NUM-POWER`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** NUM-POWER — **PLAUSIBLE** primary power-of-rational demand; await exact subskill/role signoff.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 3/8 · `RAT03V1_121` · CT03

**Authoritative current item (verbatim from `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json`; blob `759fd83900fa5b64d5db7f6deb2197c343c46732`):**

> Một công thức cho 4 người cần 300 g bột. Giữ nguyên tỉ lệ, để làm cho 10 người cần bao nhiêu gam bột?

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | 750 g | **YES** |
| B (zero-based 1) | 600 g | No |
| C (zero-based 2) | 900 g | No |
| D (zero-based 3) | 1200 g | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T2 Bài 22 tr11–13
- **Current authored tags:** `{"topic":"ti-le-ti-le-thuc","skill":["mo-hinh-ti-le"],"type":"mo-hinh-ti-le"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** Lượng bột tỉ lệ thuận với số người: 300×10/4=750 g.
- **Initial R38 candidate:** `RATIO-DIRECT` · status `LAYER_CONFLICT_ITEM_SPLIT_REVIEW`.
- **NotebookLM V2 corrected candidate:** `RATIO-DIRECT`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** RATIO-DIRECT — **PLAUSIBLE** direct proportion; legacy RATIO-MODEL Entrance10 cannot be inherited.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 4/8 · `RAT03V1_122` · CT03

**Authoritative current item (verbatim from `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json`; blob `759fd83900fa5b64d5db7f6deb2197c343c46732`):**

> Trên bản đồ tỉ lệ 1:50 000, đoạn đường AB dài 3 cm. Độ dài thực tế của AB là:

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | 1,5 km | **YES** |
| B (zero-based 1) | 150 km | No |
| C (zero-based 2) | 15 km | No |
| D (zero-based 3) | 0,15 km | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T2 Bài 20 tr4; Bài 22 tr11–13
- **Current authored tags:** `{"topic":"ti-le-ti-le-thuc","skill":["mo-hinh-ti-le"],"type":"mo-hinh-ti-le"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** 3 cm trên bản đồ ứng với 3×50 000=150 000 cm=1,5 km.
- **Initial R38 candidate:** `RATIO-BASIC` · status `LAYER_CONFLICT_ITEM_SPLIT_REVIEW`.
- **NotebookLM V2 corrected candidate:** `RATIO-BASIC`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** RATIO-BASIC — **PLAUSIBLE** ratio scale, but conversion and map representation need explicit Family-scope check.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 5/8 · `RAT03V1_123` · CT03

**Authoritative current item (verbatim from `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json`; blob `759fd83900fa5b64d5db7f6deb2197c343c46732`):**

> 5 quyển vở cùng loại có giá 60 nghìn đồng. Nếu đơn giá không đổi, 8 quyển vở có giá:

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | 96 nghìn đồng | **YES** |
| B (zero-based 1) | 72 nghìn đồng | No |
| C (zero-based 2) | 100 nghìn đồng | No |
| D (zero-based 3) | 120 nghìn đồng | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T2 Bài 22 tr11–13
- **Current authored tags:** `{"topic":"ti-le-ti-le-thuc","skill":["mo-hinh-ti-le"],"type":"mo-hinh-ti-le"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** Một quyển giá 60:5=12 nghìn đồng; 8 quyển giá 8×12=96 nghìn đồng.
- **Initial R38 candidate:** `RATIO-DIRECT` · status `LAYER_CONFLICT_ITEM_SPLIT_REVIEW`.
- **NotebookLM V2 corrected candidate:** `RATIO-DIRECT`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** RATIO-DIRECT — **PLAUSIBLE** direct proportionality/unit rate.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 6/8 · `RAT03V1_124` · CT03

**Authoritative current item (verbatim from `docs/assets/data/practice/03-ti-le-ti-le-thuc-v1-05.json`; blob `759fd83900fa5b64d5db7f6deb2197c343c46732`):**

> Một mô hình dài 12 cm biểu diễn vật thật dài 3 m. Tỉ lệ mô hình:vật thật là:

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | 1:25 | **YES** |
| B (zero-based 1) | 1:4 | No |
| C (zero-based 2) | 4:1 | No |
| D (zero-based 3) | 1:250 | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: T2 Bài 20 tr4–5
- **Current authored tags:** `{"topic":"ti-le-ti-le-thuc","skill":["mo-hinh-ti-le"],"type":"mo-hinh-ti-le"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** Đổi 3 m=300 cm. Tỉ lệ là 12:300=1:25.
- **Initial R38 candidate:** `RATIO-BASIC` · status `LAYER_CONFLICT_ITEM_SPLIT_REVIEW`.
- **NotebookLM V2 corrected candidate:** `RATIO-BASIC`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** RATIO-BASIC — **PLAUSIBLE** ratio reduction after converting units.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 7/8 · `ALG04V2_133` · CT04

**Authoritative current item (verbatim from `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json`; blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`):**

> Tính \((x^2+3x+2):(x+1)\).

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | \(x+2\) | **YES** |
| B (zero-based 1) | \(x+1\) | No |
| C (zero-based 2) | \(x-2\) | No |
| D (zero-based 3) | \(x^2+2\) | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `CONCEPT_BASE`; **reviewer-reported S1 locator**: Bài 28, tr.40–42 phương pháp; Bài 7.32 tr.43
- **Current authored tags:** `{"topic":"bieu-thuc-dai-so","skill":["chia-da-thuc-mot-bien"],"type":"chia-da-thuc-mot-bien"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** \((x+1)(x+2)=x^2+3x+2\).
- **Initial R38 candidate:** `ALG-DIV-MONOMIAL` · status `SUBSKILL_ONLY_REVIEW`.
- **NotebookLM V2 corrected candidate:** `ALG-DIV-MONOMIAL`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** ALG-DIV-MONOMIAL — **FAMILY-NAME MISMATCH**: divisor x+1 is a binomial, not a monomial.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

### 8/8 · `ALG04V2_136` · CT04

**Authoritative current item (verbatim from `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-06.json`; blob `34e52b7900f77815e0bff79ba82fdb491d6794b3`):**

> Tính \((x^3-8):(x-2)\).

| Canonical source option slot | Exact option text | Correct? |
|---|---|---|
| A (zero-based 0) | \(x^2+2x+4\) | **YES** |
| B (zero-based 1) | \(x^2-2x+4\) | No |
| C (zero-based 2) | \(x^2+4\) | No |
| D (zero-based 3) | \(x^2+2\) | No |

- **Current approved item layer:** `KNTT-Core`; prior item evidence `STRUCTURAL_CLONE`; **reviewer-reported S1 locator**: Luyện tập chung, tr.45; Bài 7.39a
- **Current authored tags:** `{"topic":"bieu-thuc-dai-so","skill":["chia-da-thuc-mot-bien"],"type":"chia-da-thuc-mot-bien"}` (legacy metadata; no proof of assessed Family membership).
- **Existing full solution/explanation:** \(x^3-8=(x-2)(x^2+2x+4)\).
- **Initial R38 candidate:** `ALG-DIV-MONOMIAL` · status `SUBSKILL_ONLY_REVIEW`.
- **NotebookLM V2 corrected candidate:** `ALG-DIV-MONOMIAL`; **previous verdict:** `REVISE`, **submitted role:** `ASSESSED_SKILL`; mapping remains unapproved.
- **Previous source-locked disputed triage:** ALG-DIV-MONOMIAL — **FAMILY-NAME MISMATCH**: divisor x−2 binomial; difference of cubes.
- **Task for independent reviewer:** Assess the **dominant cognitive operation** required for choosing the unique correct option; distinguish correct mathematics from defensible assigned Skill Family/role. If no existing Family and role fit safely, mark `HOLD_NO_ASSESSED_FAMILY`. Any alternate Family must exist in the displayed 131-family registry and be properly scoped. Give source-grounded reasons.

## E. Mandatory independent eight-item result

For each exact ID, return:
- `CONTENT_MATH` PASS / REVISION_REQUIRED (do **not** silently edit source)
- `S1_LAYER` PASS / INSUFFICIENT_S1 (item layer already Owner-approved, this rechecks role boundaries)
- `FAMILY_ID` exact existing Registry ID **or** `HOLD_NO_ASSESSED_FAMILY` (never invent new Family)
- `ASSESSED_ROLE` PASS / REVISE / HOLD, with a one-sentence mathematical skill-role justification; distinguish primary vs secondary method
- `RATIONALE`: use exact question ID and quote/snippet of the mathematical demand
- `DISTINCTNESS`: optional note about isomorphic arithmetic, but do not add MCQs by count.

**Special gates:** `NUM02V1_137` must explicitly adjudicate `NUM-ORDER` versus `NUM-FRACTION-OPS`; `RAT03V1_121–124` must not inherit mismatched Entrance10 `RATIO-MODEL`; `ALG04V2_133/_136` must explicitly address divisor is a **binomial** whereas `ALG-DIV-MONOMIAL` says **monomial**. Avoid globally approving sibling IDs `ALG04V2_134/_135/_137/_138` from reviewing just two examples. Preserve R38's three Grade-7 square-root **HOLD** decisions.

```text
PACKET_ID|MATH-R38-8ITEM-FAMILY-ROLE-R1-20261020
EXPECTED=8
REVIEWED=8
NUM02V1_137 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
NUM02V1_138 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
RAT03V1_121 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
RAT03V1_122 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
RAT03V1_123 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
RAT03V1_124 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
ALG04V2_133 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
ALG04V2_136 | MATH:... | S1:... | FAMILY:... | ASSESSED_ROLE:... | ITEM_VERDICT:...
MISSING_IDS|none
DUPLICATE_IDS|none
UNEXPECTED_IDS|none
OVERALL|PASS_FOR_ITEM_ROLE_REVIEW / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
AUTHORIZATION|NO_PRODUCTION_SKILL_CREDIT
```

## F. Boundaries

- This **single Markdown** file is the one temporary NotebookLM review source; do not submit the R38 JSON/transcription files as separate NotebookLM sources. Keep the permanent current Master Plan v1.2.1 and NotebookLM Review Rules v1.2 selected; add KNTT S1 evidence only where available.
- Prior NotebookLM reviews and GitHub CI support academic provenance but do not imply Owner signoff of these 8 exact Family relationships.
- **No canonical MCQ bank modifications**, answer/option reorder, new IDs, 131-family Registry changes, taxonomy activation, Skill/Readiness/Mastery credit, retroactive regrade, learner data writes or production release.
- Outcomes remain candidates until separate Owner mapping approval **and** R37/R19 option-ID/attempt provenance and device/UI gates. The Grade-7 root HOLD and all other pending candidates remain unchanged.
