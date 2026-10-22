# NOTEBOOKLM SOURCE — Skill Taxonomy Phase E / CĐ07 Canonical Evidence Pilot R1

**Packet ID:** `MATH-SKILL-CANONICAL-EVIDENCE-PILOT-R1-20260930`
**State:** `READ_ONLY / DESIGN_ONLY / NOT_RUNTIME_ENABLED`
**Purpose:** independent review of a deliberately small evidence-architecture pilot. This is **not** a mastery study, not an exam-frequency claim, and not authorization to change production.

## 1. Source lock and prior gates

- Project main checkpoint after Phase D closure: `be22486bd8a7640a440d32518ae06e3db67563eb`.
- Phase C canonical registry: PR #193, blob `32bebf7750292314d1cb33083a9fcf5b1815a8fd`.
- Phase C compatibility design: blob `4263bb8ef0aa2103d946e7485007fb1979f2f1a4`.
- Phase D CĐ07 full-bank overlay: PR #200, overlay blob `0318bde17dd140ad2e94563abdbddca90343cc77`.
- CĐ07 NotebookLM Phase D source blob `06a4b8f6f31b356d09a22c8c2e42423a14523d6b`; verdict PASS 120/120, 0 revisions, 23/23 clone families.
- Phase D CĐ04–07 closure: 492/492 reviewed, 427 one-primary mappings, 65 formative-only, 74/74 clone-family proposals PASS, 0 item revisions.

## 2. Non-negotiable evidence rules

1. One scored response may create **at most one assessed canonical-skill event**.
2. Supporting skills/methods/categories/contexts remain metadata only; they never receive a second mastery/evidence event from the same answer.
3. A correct MCQ answer is evidence, not mastery. There is no mastery threshold in this pilot.
4. Clone-family membership limits independent evidence: another question in an already-seen clone family may still be practiced and logged, but is not a new independent evidence unit.
5. No historical backfill, regrade, reinterpretation, or synthesis from old learner stores.
6. No Core Readiness credit, hard gate, Extension/PENDING node, or NO-counter node is included.

## 3. Storage collision discovered after Phase C

Phase C originally reserved `toan-thcs-assessment-v2` for future canonical evidence. A source audit now shows this key is already used by the existing deployed Beta v3 skill-assessment pilot:
- config blob `1079f8fca330d7486464e9114d6ef33230e18938` declares `new_storage_key: toan-thcs-assessment-v2`;
- `skill-assessment-pilot-v3.js` blob `859e20e5c14c2da15aa17448b15b4a642dca759c` reads/writes that key and normalizes it to schema `one-skill-assessment-events-v2`.

Reusing that key for a different canonical event schema risks schema collision and old-code normalization/truncation. Therefore R1 proposes a **new separate key**: `toan-thcs-canonical-evidence-v1`. Existing stores `toan-thcs-practice-v1`, `toan-thcs-assessment-v1`, and `toan-thcs-assessment-v2` remain untouched. No migration and no dual-write.

This is a technical compatibility correction to Phase C, not a change to the reviewed academic taxonomy.

## 4. Why CĐ07 and why exactly these 12 items

The pilot is intentionally small and tests evidence semantics rather than breadth:

| Canonical skill | Items | Max independent evidence units | What it tests |
|---|---:|---:|---|
| `dieu-kien-xac-dinh` | 4 | 2 | Shared canonical concept with CĐ04, but **only CĐ07 task demand** is used here; two clone families; some items have supporting `phan-tich-tu-mau`. |
| `rut-gon-phan-thuc` | 6 | 3 | Three reviewed clone pairs; every item uses supporting `phan-tich-tu-mau`, which must not receive a second event. |
| `tinh-gia-tri-phan-thuc` | 2 | 2 | No clone family; final-answer-only evidence; verifies that even clean single-skill MCQ remains evidence, not mastery. |
| **Total** | **12** | **7** | Architecture/de-dup pilot only. |

Deliberately including both members of several clone families is **not** a request to count them twice. It is a test that the second member is correctly marked `clone_family_repeat`.

## 5. Exact 12-item source-locked set

### RAT07V1_009

- Source: `07-phan-thuc-dai-so-v1-01.json` blob `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- Canonical assessed skill: `dieu-kien-xac-dinh`
- Supporting skills: none
- Legacy skill tags: `dieu-kien-xac-dinh`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-DOMAIN-LINEAR-009-016`
- Difficulty metadata: `basic`
- Question: Tìm điều kiện xác định của \(\frac{x+1}{x-5}\).
- Options:
  - **[correct]** \(x\ne 5\)
  - \(x=5\)
  - \(x\ne -5\)
  - Mọi x
- Explanation: Mẫu phải khác 0, nên loại x=5.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_010

- Source: `07-phan-thuc-dai-so-v1-01.json` blob `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- Canonical assessed skill: `dieu-kien-xac-dinh`
- Supporting skills: none
- Legacy skill tags: `dieu-kien-xac-dinh`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-DOMAIN-LINEAR-009-016`
- Difficulty metadata: `basic`
- Question: Tìm điều kiện xác định của \(\frac{x+1}{x-4}\).
- Options:
  - **[correct]** \(x\ne 4\)
  - \(x=4\)
  - \(x\ne -4\)
  - Mọi x
- Explanation: Mẫu phải khác 0, nên loại x=4.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_017

- Source: `07-phan-thuc-dai-so-v1-01.json` blob `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- Canonical assessed skill: `dieu-kien-xac-dinh`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-DOMAIN-QUADRATIC-017-024`
- Difficulty metadata: `intermediate`
- Question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} + x - 6}\).
- Options:
  - **[correct]** \(x\ne -3,\;x\ne 2\)
  - \(x=-3\;\text{hoặc}\;x=2\)
  - \(x\ne -1\)
  - Mọi x
- Explanation: Phân tích mẫu thành \((x+3)(x-2)\). Mẫu khác 0 khi \(x\ne -3\) và \(x\ne 2\).
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_018

- Source: `07-phan-thuc-dai-so-v1-01.json` blob `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- Canonical assessed skill: `dieu-kien-xac-dinh`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-DOMAIN-QUADRATIC-017-024`
- Difficulty metadata: `intermediate`
- Question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} - x - 6}\).
- Options:
  - **[correct]** \(x\ne -2,\;x\ne 3\)
  - \(x=-2\;\text{hoặc}\;x=3\)
  - \(x\ne 1\)
  - Mọi x
- Explanation: Phân tích mẫu thành \((x+2)(x-3)\). Mẫu khác 0 khi \(x\ne -2\) và \(x\ne 3\).
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_047

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-047-055`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{x^{2} - 9}{x^{2} - 3 x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x + 3}{x}\)
  - \(\frac{x}{x + 3}\)
  - \(\frac{x^{2} - 9}{x^{2} - 2 x}\)
  - \(\frac{x^{2} + x - 9}{x^{2} - 3 x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne 3\). Kết quả \(\frac{x + 3}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_055

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-047-055`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{2 x^{2} - 18}{2 x^{2} - 6 x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x + 3}{x}\)
  - \(\frac{x}{x + 3}\)
  - \(\frac{2 x^{2} - 18}{2 x^{2} - 5 x}\)
  - \(\frac{2 x^{2} + x - 18}{2 x^{2} - 6 x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne 3\). Kết quả \(\frac{x + 3}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_048

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-048-056`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{x^{2} - 4}{x^{2} + 2 x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x - 2}{x}\)
  - \(\frac{x}{x - 2}\)
  - \(\frac{x^{2} - 4}{x^{2} + 3 x}\)
  - \(\frac{x^{2} + x - 4}{x^{2} + 2 x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne -2\). Kết quả \(\frac{x - 2}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_056

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-048-056`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{2 x^{2} - 8}{2 x^{2} + 4 x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x - 2}{x}\)
  - \(\frac{x}{x - 2}\)
  - \(\frac{2 x^{2} - 8}{2 x^{2} + 5 x}\)
  - \(\frac{2 x^{2} + x - 8}{2 x^{2} + 4 x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne -2\). Kết quả \(\frac{x - 2}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_049

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-049-057`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{x^{2} - 1}{x^{2} + x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x - 1}{x}\)
  - \(\frac{x}{x - 1}\)
  - \(\frac{x^{2} - 1}{x^{2} + 2 x}\)
  - \(\frac{x^{2} + x - 1}{x^{2} + x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne -1\). Kết quả \(\frac{x - 1}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_057

- Source: `07-phan-thuc-dai-so-v1-02.json` blob `2294a3f9d93b01b70036167713a3940fea367dca`
- Canonical assessed skill: `rut-gon-phan-thuc`
- Supporting skills: `phan-tich-tu-mau`
- Legacy skill tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- Evidence class: `MCQ_FINAL_OUTPUT_ONLY`
- Clone family: `RAT07-SIMPLIFY-049-057`
- Difficulty metadata: `intermediate`
- Question: Rút gọn \(\frac{2 x^{2} - 2}{2 x^{2} + 2 x}\) (giữ điều kiện xác định ban đầu).
- Options:
  - **[correct]** \(\frac{x - 1}{x}\)
  - \(\frac{x}{x - 1}\)
  - \(\frac{2 x^{2} - 2}{2 x^{2} + 3 x}\)
  - \(\frac{2 x^{2} + x - 2}{2 x^{2} + 2 x}\)
- Explanation: Phân tích tử và mẫu thành nhân tử, triệt tiêu nhân tử chung trên miền \(x\ne 0,\;x\ne -1\). Kết quả \(\frac{x - 1}{x}\) chỉ tương đương với phân thức ban đầu trên miền này.
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_115

- Source: `07-phan-thuc-dai-so-v1-04.json` blob `b1ba2cc3664cfc2cda13fdafe4655f744130c833`
- Canonical assessed skill: `tinh-gia-tri-phan-thuc`
- Supporting skills: none
- Legacy skill tags: `tinh-gia-tri-phan-thuc`
- Evidence class: `MCQ_FINAL_ANSWER_ONLY`
- Clone family: none
- Difficulty metadata: `basic`
- Question: Tính giá trị của \(A=\frac{x + 1}{x - 2}\) tại \(x=3\).
- Options:
  - **[correct]** \(4\)
  - \(5\)
  - \(3\)
  - Không thể phân tích thêm
- Explanation: Trước hết kiểm tra mẫu của \(A=\frac{x + 1}{x - 2}\) không bằng 0 tại \(x=3\). Thay số vào phân thức và tính được \(4\).
- Runtime/Core Readiness now: `false / false`.

### RAT07V1_116

- Source: `07-phan-thuc-dai-so-v1-04.json` blob `b1ba2cc3664cfc2cda13fdafe4655f744130c833`
- Canonical assessed skill: `tinh-gia-tri-phan-thuc`
- Supporting skills: none
- Legacy skill tags: `tinh-gia-tri-phan-thuc`
- Evidence class: `MCQ_FINAL_ANSWER_ONLY`
- Clone family: none
- Difficulty metadata: `basic`
- Question: Tính giá trị của \(A=\frac{x^{2} - 1}{x + 1}\) tại \(x=2\).
- Options:
  - **[correct]** \(1\)
  - \(2\)
  - \(0\)
  - Không thể phân tích thêm
- Explanation: Trước hết kiểm tra mẫu của \(A=\frac{x^{2} - 1}{x + 1}\) không bằng 0 tại \(x=2\). Thay số vào phân thức và tính được \(1\).
- Runtime/Core Readiness now: `false / false`.

## 6. Proposed canonical evidence-event contract

Future event schema: `canonical-skill-evidence-event-v1`.

Required fields:
`event_id`, `pilot_version`, `question_id`, `canonical_skill_id`, `topic`, `evidence_class`, `clone_family`, `correct`, `attempted_at`, `content_version`, `source_file`, `source_blob`, `assisted`, `attempt_kind`, `independent_evidence`, `independent_reason`, `supporting_skills`.

Rules:
- exactly one `canonical_skill_id` per event;
- `supporting_skills` are metadata-only;
- `correct=false` on a first unassisted new evidence unit is still an independent evidence event;
- no `mastery`, `mastery_score`, `ready`, or threshold field is produced;
- existing history is never converted to canonical events.

## 7. Independent-evidence de-dup policy

Evidence-unit key = `clone_family` when present; otherwise `question_id`.

| Situation | independent_evidence | independent_reason |
|---|---|---|
| First unassisted attempt in a never-seen evidence unit | `true` | `first_unseen_unit` |
| Same question attempted again | `false` | `repeat_question` |
| Different question but same clone family already has prior independent event | `false` | `clone_family_repeat` |
| Attempt after hint/feedback/solution exposure | `false` | `assisted` |

Examples expected from this set:
- `RAT07V1_009` then `010`: at most one independent event for `RAT07-DOMAIN-LINEAR-009-016`.
- `RAT07V1_017` then `018`: at most one independent event for `RAT07-DOMAIN-QUADRATIC-017-024`; `phan-tich-tu-mau` gets no separate event.
- `047` + `055`, `048` + `056`, `049` + `057`: each pair supplies at most one independent `rut-gon-phan-thuc` evidence unit.
- `115` and `116`: no clone family, so each question can be one distinct independent evidence unit on first unassisted exposure.

## 8. Learner-facing summary policy

Allowed descriptive outputs only:
- raw attempts;
- distinct questions;
- first-unassisted evidence units;
- first-unassisted correct evidence units.

Prohibited in R1:
- `Mastered / Not mastered`;
- mastery percentage;
- hard readiness gate;
- combined score with old Beta v3 or legacy practice history;
- inferred historical canonical evidence.

## 9. Proposed implementation only AFTER this review passes

- Separate opt-in **Beta v4** page, not Practice Engine interception in the first release.
- Existing bank questions are loaded unchanged from their reviewed source files.
- No hints/Tutor on this dedicated page in R1, to keep first-exposure semantics simple.
- New store: `toan-thcs-canonical-evidence-v1`.
- Old Beta v3 remains untouched; no migration.
- Before production: schema/unit tests, immutable-store sentinel tests, strict MkDocs, desktop/mobile browser QA, then owner real-device QA.
- Any later integration into normal Practice Room or learner skill dashboard is a **separate gate**.

## 10. Questions for independent review

Please review the academic/evidence design, not merely formatting:
1. Are all 12 primary-skill mappings, supporting-skill roles, evidence classes and clone families consistent with the already-PASS CĐ07 overlay?
2. Is the 3-skill / 12-item scope appropriately bounded for testing evidence semantics without pretending to prove mastery or full curriculum coverage?
3. Is clone-family de-dup conservative enough? In particular, should a second unseen item from the same clone family remain non-independent?
4. Is `dieu-kien-xac-dinh` handled correctly as one canonical shared concept while this pilot preserves only the CĐ07 task demand and does not aggregate old CĐ04 history?
5. Is it academically safe for `tinh-gia-tri-phan-thuc` final-answer MCQ to produce an evidence event while explicitly never implying mastery?
6. Does the proposed learner-facing summary avoid overclaiming?
7. Identify any item that must be removed/replaced or any evidence rule that must be revised.

Return a strict verdict: `PASS` or `REVISIONS_REQUIRED`. If revisions are required, list only concrete changes. Also return a 12/12 item audit table and explicit decisions for the 7 maximum independent evidence units.

## 11. Safety boundary

This packet does **not** authorize runtime activation. Even a PASS only approves the design for technical implementation/QA. It does not authorize mastery thresholds, migration, Core Readiness credit, or automatic rollout to all CĐ04–07 questions.
