# NOTEBOOKLM SOURCE — Skill Taxonomy Phase F / Canonical Evidence Multi-topic Expansion R1

**Packet ID:** `MATH-SKILL-PHASE-F-EXPANSION-R1-20260930`  
**State:** `READ_ONLY / DESIGN_ONLY / NOT_RUNTIME_ENABLED`  
**Purpose:** independent review of the next bounded expansion after Phase E / Beta v4 was academically reviewed, technically QA'd, released, and owner-accepted in production.

## 1. Accepted baseline

- Project Context baseline: `v1.0.74`.
- Phase E / Beta v4 is accepted in production: 12 CĐ07 items, 3 canonical skills, maximum 7 independent evidence units.
- Accepted store: `toan-thcs-canonical-evidence-v1`.
- Beta v4 config blob: `bdb1239c6d032f47183f8b9b70dd82e9b4aff9e4`.
- Beta v4 reviewed manifest blob: `f962acaff602b9b6bbe827bb2667f68004b5b109`.
- Existing v4 canonical events are valid prospective events. Phase F must not rewrite, migrate, backfill or regrade them.
- Legacy stores remain outside canonical history: `toan-thcs-practice-v1`, `toan-thcs-assessment-v1`, `toan-thcs-assessment-v2`.

## 2. Phase F bounded scope

- **15 new items** across CĐ04–CĐ07.
- **5 canonical skills in this batch**: one existing v4 skill is extended (`dieu-kien-xac-dinh`), four are new to canonical runtime (`hang-tu-dong-dang`, `hieu-hai-binh-phuong`, `nhan-tu-chung`, `quy-dong-mau-thuc`).
- If later accepted and implemented, canonical runtime would cover **7 unique skills total** (3 v4 skills +4 new).
- **Maximum 9 new independent evidence units** under current clone-family de-dup.
- **6 clone-family groups +3 singleton units**.
- Evidence classes in the 15 items: 7 `MCQ_FINAL_OUTPUT_ONLY`, 2 `MCQ_FINAL_ANSWER_ONLY`, 3 `MCQ_RECOGNITION_ONLY`, 3 `MCQ_METHOD_SELECTION_ONLY`.
- There are **0 canonical supporting-skill occurrences** in this selected batch; legacy secondary tags are intentionally tested as non-event metadata.

| Canonical skill | Topic(s) | New items | Max new units | Design purpose |
|---|---|---:|---:|---|
| `dieu-kien-xac-dinh` | CĐ04, CĐ07-existing-v4 | 2 | 1 | Test prospective cross-topic aggregation under the same canonical skill. CĐ04 final-answer evidence must remain distinguishable from existing CĐ07 final-output evidence; no old CĐ04 history is backfilled. |
| `hang-tu-dong-dang` | CĐ04 | 2 | 1 | Introduce recognition-only evidence while retaining clone-family de-dup. |
| `hieu-hai-binh-phuong` | CĐ05, CĐ06 | 7 | 5 | Stress-test one canonical skill across two topics and three evidence classes: final-output, recognition-only and method-selection-only. Legacy secondary tags must not create second canonical events. |
| `nhan-tu-chung` | CĐ06 | 2 | 1 | Add a clean procedural final-output skill as a control for the multi-topic expansion. |
| `quy-dong-mau-thuc` | CĐ07 | 2 | 1 | Introduce method-selection-only evidence as a distinct descriptive evidence type, never equivalent to full execution. |

## 3. Source lock

- CĐ04 Phase D overlay blob `badef3ac1d335ed727c1a017dd295ed8ce46298f` — `docs/assets/data/curriculum/primary-skill-overlay-core04-phase-d-r1.json`.
- CĐ05 Phase D overlay blob `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e` — `docs/assets/data/curriculum/primary-skill-overlay-core05-phase-d-r1.json`.
- CĐ06 Phase D overlay blob `a64ec780b62ef6fd40668eb4bbad331024b470aa` — `docs/assets/data/curriculum/primary-skill-overlay-core06-phase-d-r1.json`.
- CĐ07 Phase D overlay blob `0318bde17dd140ad2e94563abdbddca90343cc77` — `docs/assets/data/curriculum/primary-skill-overlay-core07-phase-d-r1.json`.

- Source bank `04-bieu-thuc-dai-so-v2-01.json` blob `216a464a1935bd5d1d00147e9386eb2ee224f27b`.
- Source bank `04-bieu-thuc-dai-so-v2-03.json` blob `42d57ec1c5a65cf331eb07d7b681b479dc203775`.
- Source bank `05-7-hang-dang-thuc-v1-01.json` blob `6bb054851b281e495b02a55bf65008a08ad82218`.
- Source bank `05-7-hang-dang-thuc-v1-03.json` blob `fa18b11a46d5aad8e47813d3cc83549cd5769ac4`.
- Source bank `05-7-hang-dang-thuc-v1-04.json` blob `c1edbbe7eba0d144a32d54cb384eb1ec09f156c8`.
- Source bank `06-phan-tich-da-thuc-v1-01.json` blob `1c2dd47977aa016cd24ce07d64215c213641f27f`.
- Source bank `07-phan-thuc-dai-so-v1-03.json` blob `9297d644a65c09b8c8ca8cc4b3f81cc194764360`.

## 4. Exact 15-item set

### ALG04V2_013 — CĐ04 Biểu thức đại số

- Source: `04-bieu-thuc-dai-so-v2-01.json` blob `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- Reviewed overlay blob: `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- Canonical primary: `hang-tu-dong-dang`
- Canonical supporting skills: none
- Legacy skill tags: `hang-tu-dong-dang`
- Evidence class: `MCQ_RECOGNITION_ONLY`
- Clone family: `ALG04-DONGDANG-013-020`
- Difficulty: `basic`
- Question: Hạng tử nào đồng dạng với \(3 x^{2} y\)?
- Options:
  - **[correct]** \(- 2 x^{2} y\)
  - \(5 x y^{2}\)
  - \(7 x^{2}\)
  - \(x^{3} y\)
- Explanation: Hạng tử đồng dạng phải có đúng cùng phần biến. \(- 2 x^{2} y\) có cùng phần biến với \(3 x^{2} y\).
- Runtime / Core Readiness now: `false / false`.

### ALG04V2_014 — CĐ04 Biểu thức đại số

- Source: `04-bieu-thuc-dai-so-v2-01.json` blob `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- Reviewed overlay blob: `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- Canonical primary: `hang-tu-dong-dang`
- Canonical supporting skills: none
- Legacy skill tags: `hang-tu-dong-dang`
- Evidence class: `MCQ_RECOGNITION_ONLY`
- Clone family: `ALG04-DONGDANG-013-020`
- Difficulty: `basic`
- Question: Hạng tử nào đồng dạng với \(- 4 a b^{3}\)?
- Options:
  - **[correct]** \(9 a b^{3}\)
  - \(- 4 a^{2} b^{3}\)
  - \(2 a b^{2}\)
  - \(4 a^{3} b\)
- Explanation: Hạng tử đồng dạng phải có đúng cùng phần biến. \(9 a b^{3}\) có cùng phần biến với \(- 4 a b^{3}\).
- Runtime / Core Readiness now: `false / false`.

### ALG04V2_089 — CĐ04 Biểu thức đại số

- Source: `04-bieu-thuc-dai-so-v2-03.json` blob `42d57ec1c5a65cf331eb07d7b681b479dc203775`
- Reviewed overlay blob: `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- Canonical primary: `dieu-kien-xac-dinh`
- Canonical supporting skills: none
- Legacy skill tags: `dieu-kien-xac-dinh`
- Evidence class: `MCQ_FINAL_ANSWER_ONLY`
- Clone family: `ALG04-DKXD-LINEAR-089-098`
- Difficulty: `basic`
- Question: Biểu thức \(\dfrac{x+1}{x - 2}\) xác định khi nào?
- Options:
  - **[correct]** \(x\ne 2\)
  - \(x=2\)
  - \(x\ne -2\)
  - \(x>2\)
- Explanation: Mẫu phải khác 0: \(x - 2\ne0\). Suy ra \(x\ne 2\).
- Runtime / Core Readiness now: `false / false`.

### ALG04V2_090 — CĐ04 Biểu thức đại số

- Source: `04-bieu-thuc-dai-so-v2-03.json` blob `42d57ec1c5a65cf331eb07d7b681b479dc203775`
- Reviewed overlay blob: `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- Canonical primary: `dieu-kien-xac-dinh`
- Canonical supporting skills: none
- Legacy skill tags: `dieu-kien-xac-dinh`
- Evidence class: `MCQ_FINAL_ANSWER_ONLY`
- Clone family: `ALG04-DKXD-LINEAR-089-098`
- Difficulty: `basic`
- Question: Biểu thức \(\dfrac{x+1}{2x + 6}\) xác định khi nào?
- Options:
  - **[correct]** \(x\ne -3\)
  - \(x=-3\)
  - \(x\ne 3\)
  - \(x>-3\)
- Explanation: Mẫu phải khác 0: \(2x + 6\ne0\). Suy ra \(x\ne -3\).
- Runtime / Core Readiness now: `false / false`.

### ID05V1_021 — CĐ05 7 hằng đẳng thức

- Source: `05-7-hang-dang-thuc-v1-01.json` blob `6bb054851b281e495b02a55bf65008a08ad82218`
- Reviewed overlay blob: `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `ID05-HIEU-HAI-BP-021-030`
- Difficulty: `basic`
- Question: Phân tích \(x^{2} - 16\) thành nhân tử.
- Options:
  - **[correct]** \((x - 4)(x + 4)\)
  - \((x - 4)^2\)
  - \((x + 4)^2\)
  - \((x - 4)(x - 4)\)
- Explanation: Nhận dạng \(A^2-B^2=(A-B)(A+B)\) với \(A=x,\ B=4\).
- Runtime / Core Readiness now: `false / false`.

### ID05V1_022 — CĐ05 7 hằng đẳng thức

- Source: `05-7-hang-dang-thuc-v1-01.json` blob `6bb054851b281e495b02a55bf65008a08ad82218`
- Reviewed overlay blob: `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `ID05-HIEU-HAI-BP-021-030`
- Difficulty: `basic`
- Question: Phân tích \(x^{2} - 81\) thành nhân tử.
- Options:
  - **[correct]** \((x - 9)(x + 9)\)
  - \((x - 9)^2\)
  - \((x + 9)^2\)
  - \((x - 9)(x - 9)\)
- Explanation: Nhận dạng \(A^2-B^2=(A-B)(A+B)\) với \(A=x,\ B=9\).
- Runtime / Core Readiness now: `false / false`.

### ID05V1_081 — CĐ05 7 hằng đẳng thức

- Source: `05-7-hang-dang-thuc-v1-03.json` blob `fa18b11a46d5aad8e47813d3cc83549cd5769ac4`
- Reviewed overlay blob: `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`, `nhan-dang-hdt`
- Evidence class: `MCQ_RECOGNITION_ONLY`
- Clone family: none / singleton
- Difficulty: `basic`
- Question: Khi áp dụng hằng đẳng thức cho \(4x^2-25\), chọn đúng \(A,B\).
- Options:
  - **[correct]** \(A=2x,\ B=5\)
  - \(A=4x,\ B=25\)
  - \(A=2x,\ B=25\)
  - \(A=4x,\ B=5\)
- Explanation: Xác định toàn bộ biểu thức đóng vai trò \(A\) và \(B\), không chỉ lấy hệ số hay biến riêng lẻ.
- Runtime / Core Readiness now: `false / false`.

### ID05V1_087 — CĐ05 7 hằng đẳng thức

- Source: `05-7-hang-dang-thuc-v1-03.json` blob `fa18b11a46d5aad8e47813d3cc83549cd5769ac4`
- Reviewed overlay blob: `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: none / singleton
- Difficulty: `intermediate`
- Question: Nhận dạng và viết \(25x^2-49\) dưới dạng gọn nhất bằng hằng đẳng thức.
- Options:
  - **[correct]** \((5x-7)(5x+7)\)
  - \((5x-7)^2\)
  - \((25x-49)(25x+49)\)
  - \((5x+7)^2\)
- Explanation: So sánh biểu thức với đúng mẫu hằng đẳng thức và kiểm tra hệ số/dấu.
- Runtime / Core Readiness now: `false / false`.

### ID05V1_120 — CĐ05 7 hằng đẳng thức

- Source: `05-7-hang-dang-thuc-v1-04.json` blob `c1edbbe7eba0d144a32d54cb384eb1ec09f156c8`
- Reviewed overlay blob: `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `phan-tich-hdt`, `hieu-hai-binh-phuong`
- Evidence class: `MCQ_METHOD_SELECTION_ONLY`
- Clone family: none / singleton
- Difficulty: `intermediate`
- Question: Bước ĐẦU TIÊN thích hợp khi phân tích \(x^4-16\) thành nhân tử là:
- Options:
  - **[correct]** Hiệu hai bình phương: \((x^2-4)(x^2+4)\)
  - Tổng hai bình phương
  - Bình phương của một tổng
  - Lập phương của một hiệu
- Explanation: Trước hết nhận dạng \(x^4-16=(x^2)^2-4^2=(x^2-4)(x^2+4)\) (hiệu hai bình phương). Nếu yêu cầu phân tích hoàn toàn thì còn \(x^2-4=(x-2)(x+2)\), nên kết quả cuối là \((x-2)(x+2)(x^2+4)\). Câu trắc nghiệm hiện chỉ đo bước đầu.
- Runtime / Core Readiness now: `false / false`.

### FAC06V1_001 — CĐ06 Phân tích đa thức

- Source: `06-phan-tich-da-thuc-v1-01.json` blob `1c2dd47977aa016cd24ce07d64215c213641f27f`
- Reviewed overlay blob: `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- Canonical primary: `nhan-tu-chung`
- Canonical supporting skills: none
- Legacy skill tags: `nhan-tu-chung`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `FAC06-NHAN-TU-CHUNG-001-012`
- Difficulty: `basic`
- Question: Phân tích đa thức \(20 x^{4} - 5 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- Options:
  - **[correct]** \(5x^2(4x^2-1)\)
  - \(5x^2(4x^2+1)\)
  - \(4x^2(4x^2-1)\)
  - \(5x^3(4x^2-1)\)
- Explanation: Nhân tử chung lớn nhất là \(5x^2\). Đưa nhân tử đó ra ngoài ngoặc rồi chia từng hạng tử cho nó.
- Runtime / Core Readiness now: `false / false`.

### FAC06V1_002 — CĐ06 Phân tích đa thức

- Source: `06-phan-tich-da-thuc-v1-01.json` blob `1c2dd47977aa016cd24ce07d64215c213641f27f`
- Reviewed overlay blob: `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- Canonical primary: `nhan-tu-chung`
- Canonical supporting skills: none
- Legacy skill tags: `nhan-tu-chung`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `FAC06-NHAN-TU-CHUNG-001-012`
- Difficulty: `basic`
- Question: Phân tích đa thức \(24 x^{3} + 6 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- Options:
  - **[correct]** \(6x(4x^2+1)\)
  - \(6x(4x^2-1)\)
  - \(5x(4x^2+1)\)
  - \(6x^2(4x^2+1)\)
- Explanation: Nhân tử chung lớn nhất là \(6x\). Đưa nhân tử đó ra ngoài ngoặc rồi chia từng hạng tử cho nó.
- Runtime / Core Readiness now: `false / false`.

### FAC06V1_021 — CĐ06 Phân tích đa thức

- Source: `06-phan-tich-da-thuc-v1-01.json` blob `1c2dd47977aa016cd24ce07d64215c213641f27f`
- Reviewed overlay blob: `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `FAC06-HIEU-HAI-BP-021-032`
- Difficulty: `basic`
- Question: Phân tích \(4 x^{2} - 25\) thành nhân tử.
- Options:
  - **[correct]** \((2x-5)(2x+5)\)
  - \((2x-5)^2\)
  - \((2x+5)^2\)
  - \((2x-5)(2x-5)\)
- Explanation: Đây là hiệu hai bình phương: \((2x)^2-5^2=(2x-5)(2x+5)\).
- Runtime / Core Readiness now: `false / false`.

### FAC06V1_022 — CĐ06 Phân tích đa thức

- Source: `06-phan-tich-da-thuc-v1-01.json` blob `1c2dd47977aa016cd24ce07d64215c213641f27f`
- Reviewed overlay blob: `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- Canonical primary: `hieu-hai-binh-phuong`
- Canonical supporting skills: none
- Legacy skill tags: `hieu-hai-binh-phuong`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `FAC06-HIEU-HAI-BP-021-032`
- Difficulty: `basic`
- Question: Phân tích \(16 x^{2} - 9\) thành nhân tử.
- Options:
  - **[correct]** \((4x-3)(4x+3)\)
  - \((4x-3)^2\)
  - \((4x+3)^2\)
  - \((4x-3)(4x-3)\)
- Explanation: Đây là hiệu hai bình phương: \((4x)^2-3^2=(4x-3)(4x+3)\).
- Runtime / Core Readiness now: `false / false`.

### RAT07V1_071 — CĐ07 Phân thức đại số

- Source: `07-phan-thuc-dai-so-v1-03.json` blob `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- Reviewed overlay blob: `0318bde17dd140ad2e94563abdbddca90343cc77`
- Canonical primary: `quy-dong-mau-thuc`
- Canonical supporting skills: none
- Legacy skill tags: `quy-dong-mau-thuc`
- Evidence class: `MCQ_METHOD_SELECTION_ONLY`
- Clone family: `RAT07-COMMON-DENOMINATOR-071-080`
- Difficulty: `basic`
- Question: Mẫu thức chung phù hợp của \(\frac1{x-1}\) và \(\frac1{x-2}\) là:
- Options:
  - **[correct]** \((x-1)(x-2)\)
  - \(x-3\)
  - \((x-3)^2\)
  - \(x^2-2\)
- Explanation: Hai mẫu \(x-1\) và \(x-2\) là hai nhân tử khác nhau, nên chọn mẫu thức chung \((x-1)(x-2)\), với \(x\ne1,\;x\ne2\).
- Runtime / Core Readiness now: `false / false`.

### RAT07V1_072 — CĐ07 Phân thức đại số

- Source: `07-phan-thuc-dai-so-v1-03.json` blob `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- Reviewed overlay blob: `0318bde17dd140ad2e94563abdbddca90343cc77`
- Canonical primary: `quy-dong-mau-thuc`
- Canonical supporting skills: none
- Legacy skill tags: `quy-dong-mau-thuc`
- Evidence class: `MCQ_METHOD_SELECTION_ONLY`
- Clone family: `RAT07-COMMON-DENOMINATOR-071-080`
- Difficulty: `basic`
- Question: Mẫu thức chung phù hợp của \(\frac1{x-1}\) và \(\frac1{x-3}\) là:
- Options:
  - **[correct]** \((x-1)(x-3)\)
  - \(x-4\)
  - \((x-4)^2\)
  - \(x^2-3\)
- Explanation: Hai mẫu \(x-1\) và \(x-3\) là hai nhân tử khác nhau, nên chọn mẫu thức chung \((x-1)(x-3)\), với \(x\ne1,\;x\ne3\).
- Runtime / Core Readiness now: `false / false`.

## 5. Prospective cross-topic aggregation rule

Phase F proposes **prospective aggregation only**:
- A new canonical event for the same `canonical_skill_id` may appear in the same skill history even when it comes from a different topic.
- Every event retains `topic` and `evidence_class`; these dimensions must remain inspectable.
- Existing accepted v4 canonical events may appear with later Phase F canonical events because both were actually collected prospectively in the canonical store.
- **No legacy history from CĐ04–07 is converted into canonical events.**
- Clone de-dup remains based on the reviewed `clone_family` when present; no cross-topic clone equivalence is invented.

Two deliberate cross-topic cases:
1. `dieu-kien-xac-dinh`: v4 already has CĐ07 final-output evidence; Phase F adds CĐ04 final-answer evidence. Same canonical skill, different topic/evidence class.
2. `hieu-hai-binh-phuong`: Phase F includes CĐ05 and CĐ06, including final-output, recognition-only and method-selection-only evidence under one canonical skill.

## 6. Evidence-class display boundary

Because Phase F intentionally mixes evidence classes, an unqualified total can be misleading. Proposed learner labels:
- `MCQ_RECOGNITION_ONLY` → **Nhận biết**
- `MCQ_METHOD_SELECTION_ONLY` → **Chọn cách làm**
- `MCQ_FINAL_OUTPUT_ONLY` → **Kết quả cuối**
- `MCQ_FINAL_ANSWER_ONLY` → **Đáp án cuối**

Proposed rule: a skill-level descriptive total may be shown only when an evidence-class breakdown is available in the same summary/detail. There is **no weighting** between classes, no combined mastery score, and no threshold.

Example only: `Hiệu hai bình phương — 5 mẫu bài kiểm tra lần đầu: Kết quả cuối 3, Nhận biết 1, Chọn cách làm 1.` This is a descriptive inventory, not a proficiency score.

## 7. Legacy-tag boundary — critical cases

Canonical primary always comes from the reviewed Phase D overlay, **never** from tag order and never from every legacy skill tag.
- `ID05V1_021`: legacy `hieu-hai-binh-phuong`, `phan-tich-hdt` → canonical primary `hieu-hai-binh-phuong`; no second event for the secondary legacy tag.
- `ID05V1_081`: legacy `hieu-hai-binh-phuong`, `nhan-dang-hdt` → canonical primary `hieu-hai-binh-phuong`; no second event for the secondary legacy tag.
- `ID05V1_120`: legacy `phan-tich-hdt`, `hieu-hai-binh-phuong` → canonical primary `hieu-hai-binh-phuong`; no second event for the secondary legacy tag. Canonical primary is deliberately NOT the first legacy tag.

In particular, `ID05V1_120` deliberately has legacy tag order `phan-tich-hdt` first, but the reviewed canonical primary is `hieu-hai-binh-phuong`. Runtime must follow the reviewed overlay.

## 8. Proposed implementation only AFTER independent PASS

- New separate opt-in **Beta v5 multi-topic page**; accepted Beta v4 page remains unchanged as a frozen control.
- Append to the existing canonical store `toan-thcs-canonical-evidence-v1` using the same event schema; do not create a competing canonical store.
- New event `pilot_version`: `phase-f-beta-v5-r1-20260930`.
- Topic label must be dynamic per item; no hard-coded CĐ07 on the new page.
- Existing v4 canonical history may be displayed read-only alongside new canonical events; legacy stores are never converted.
- Same-question repeat / clone-family repeat / assisted semantics remain unchanged.
- Before any production release: source-lock tests, event-schema tests, cross-topic aggregation tests, evidence-class-summary tests, immutable legacy-store sentinels, desktop/mobile browser QA, then owner device QA.

## 9. Safety boundaries

- No production runtime in this design PR
- No mastery or readiness score
- No historical backfill/regrade/migration
- No Practice Engine interception
- No PENDING/NO/Extension nodes
- No automatic expansion beyond the 15 selected items
- No exam-frequency or importance weighting inferred from authored-bank frequency

## 10. Independent review questions

1. Are all 15 mappings and clone families consistent with the already-PASS Phase D overlays?
2. Is prospective cross-topic aggregation for dieu-kien-xac-dinh and hieu-hai-binh-phuong academically defensible when topic and evidence_class remain explicit?
3. Should recognition-only and method-selection-only events be retained under the same canonical skill as final-output events if the UI always exposes evidence-class breakdown and never computes mastery?
4. Is append-only reuse of toan-thcs-canonical-evidence-v1 preferable to a new store, given the event schema is unchanged and v4 is already accepted?
5. Do any legacy secondary tags in the selected CĐ05 items warrant a second event? The proposal says no.
6. Is 15 items / 5 skills / max 9 new evidence units still appropriately bounded for Phase F?
7. What exact revisions, if any, are required before technical implementation?

## 11. Required verdict

Return exactly one overall verdict: `PASS` or `REVISIONS_REQUIRED`.
If revisions are required, list only concrete changes. Review all 15 items, all 9 maximum evidence units, the two cross-topic aggregation cases, the mixed evidence-class display policy, and the legacy-tag special cases.

A PASS authorizes only a later technical implementation/QA gate for Beta v5. It does **not** authorize automatic deployment, mastery/readiness integration, or expansion beyond these 15 items.
