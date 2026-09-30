# NOTEBOOKLM SOURCE — G2 Proven-Skill Expansion R1

**Packet ID:** `MATH-CANONICAL-EVIDENCE-G2-PROVEN-SKILLS-R1-20260930`  
**Date:** 30/09/2026  
**State:** `REVIEW ONLY / G2 OFF / NO RUNTIME CHANGE`  
**Main source lock:** `e4262bcb936517510b7f908d463f1f6faf6dcf59`

## 1. Purpose

G1 production shadow capture is already released and owner-QA accepted for **27 items / 7 canonical skills / max 16 skill-topic units**. This packet does not reopen G1.

G2 proposes only a bounded scope expansion to every Phase-D YES-primary item belonging to the **same seven already-proven skills**:

- combined scope: **101 items**;
- existing G1 subset: **27 items**;
- new G2 delta requiring review: **74 items**;
- canonical skills: **7**;
- max topic-scoped independent units after expansion: **23**;
- no new canonical skill is introduced.

Still OFF: mastery labels/percentages/thresholds, Core Readiness credit, canonical remediation/weak-skill ranking, migration/backfill/regrade, PENDING/formative-only capture, G3 and CĐ08–25 canonical production capture.

## 2. Exact reviewed sources

| Topic | Phase-D audit PR | Overlay blob |
|---|---:|---|
| 04-bieu-thuc-dai-so | #194 | `badef3ac1d335ed727c1a017dd295ed8ce46298f` |
| 05-7-hang-dang-thuc | #195 | `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e` |
| 06-phan-tich-da-thuc | #197 | `a64ec780b62ef6fd40668eb4bbad331024b470aa` |
| 07-phan-thuc-dai-so | #200 | `0318bde17dd140ad2e94563abdbddca90343cc77` |

All **17/17** referenced source-bank blobs still match current `main` exactly.

## 3. Fixed semantics carried from accepted G1

1. At most one canonical assessed skill per event; supporting skills are metadata only.
2. Independent-unit identity = canonical skill + normalized topic + reviewed clone/question.
3. Assisted event is stored but never independent.
4. Any prior exposure makes the same question non-independent later; an unseen sibling can still become the first independent unit when answered unassisted.
5. Cross-topic clone equivalence is false.
6. Legacy Practice write first; canonical observer fail-open; no retry/backfill.
7. Production lane remains `toan-thcs-canonical-evidence-v2`; Beta v1 remains frozen/read-only.
8. Canonical evidence is descriptive only; no mastery or Readiness claims.
9. No historical migration/backfill/regrade.
10. Default outside an approved runtime policy row remains NO_CAPTURE.

## 4. Reconciliation

### Combined by skill
| Canonical skill | Items |
|---|---:|
| `dieu-kien-xac-dinh` | 26 |
| `hang-tu-dong-dang` | 8 |
| `hieu-hai-binh-phuong` | 25 |
| `nhan-tu-chung` | 12 |
| `quy-dong-mau-thuc` | 10 |
| `rut-gon-phan-thuc` | 16 |
| `tinh-gia-tri-phan-thuc` | 4 |

### Combined by topic
| Topic | Items |
|---|---:|
| 04-bieu-thuc-dai-so | 18 |
| 05-7-hang-dang-thuc | 13 |
| 06-phan-tich-da-thuc | 24 |
| 07-phan-thuc-dai-so | 46 |

### Combined by evidence class
| Evidence class | Items |
|---|---:|
| `MCQ_FINAL_ANSWER_ONLY` | 14 |
| `MCQ_FINAL_OUTPUT_ONLY` | 67 |
| `MCQ_METHOD_SELECTION_ONLY` | 11 |
| `MCQ_RECOGNITION_ONLY` | 9 |

Combined independent-unit maximum: **23**.

### Existing G1 regression subset
`RAT07V1_009`, `RAT07V1_010`, `RAT07V1_017`, `RAT07V1_018`, `RAT07V1_047`, `RAT07V1_055`, `RAT07V1_048`, `RAT07V1_056`, `RAT07V1_049`, `RAT07V1_057`, `RAT07V1_115`, `RAT07V1_116`, `ALG04V2_013`, `ALG04V2_014`, `ALG04V2_089`, `ALG04V2_090`, `ID05V1_021`, `ID05V1_022`, `ID05V1_081`, `ID05V1_087`, `ID05V1_120`, `FAC06V1_001`, `FAC06V1_002`, `FAC06V1_021`, `FAC06V1_022`, `RAT07V1_071`, `RAT07V1_072`

Machine reconciliation confirms all 27 existing G1 rows match the reviewed Phase-D canonical skill, evidence class, clone family, source file/blob and overlay blob.

## 5. G2 delta — review all 74 items 1:1

For every item below, return exactly one verdict: **PASS**, **REVISION_REQUIRED**, or **INSUFFICIENT_EVIDENCE**. Omission means **NOT_REVIEWED**, never implicit PASS.


### 04-bieu-thuc-dai-so

#### ALG04V2_015
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(5 m^{2} n^{2}\)?
- correct option: \(- m^{2} n^{2}\)

#### ALG04V2_016
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(- 7 x y^{4}\)?
- correct option: \(3 x y^{4}\)

#### ALG04V2_017
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(2 a^{3}\)?
- correct option: \(- 5 a^{3}\)

#### ALG04V2_018
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(x^{2} y^{2}\)?
- correct option: \(- 8 x^{2} y^{2}\)

#### ALG04V2_019
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(- 3 p q^{2}\)?
- correct option: \(6 p q^{2}\)

#### ALG04V2_020
- canonical_skill_id: `hang-tu-dong-dang`
- evidence_class: `MCQ_RECOGNITION_ONLY`
- unit component: `ALG04-DONGDANG-013-020`
- supporting_skills: none
- prompt_demand_stage: `recognition_interpretation`
- legacy_skill_tags: `hang-tu-dong-dang`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-01.json` @ `216a464a1935bd5d1d00147e9386eb2ee224f27b`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Hạng tử nào đồng dạng với \(4 m n\)?
- correct option: \(- 7 m n\)

#### ALG04V2_091
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{3x - 9}\) xác định khi nào?
- correct option: \(x\ne 3\)

#### ALG04V2_092
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{4x + 8}\) xác định khi nào?
- correct option: \(x\ne -2\)

#### ALG04V2_093
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{5x - 10}\) xác định khi nào?
- correct option: \(x\ne 2\)

#### ALG04V2_094
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{2x - 4}\) xác định khi nào?
- correct option: \(x\ne 2\)

#### ALG04V2_095
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{3x + 6}\) xác định khi nào?
- correct option: \(x\ne -2\)

#### ALG04V2_096
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{6x - 18}\) xác định khi nào?
- correct option: \(x\ne 3\)

#### ALG04V2_097
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{7x + 14}\) xác định khi nào?
- correct option: \(x\ne -2\)

#### ALG04V2_098
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `ALG04-DKXD-LINEAR-089-098`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/04-bieu-thuc-dai-so-v2-04.json` @ `92f879459581ac21a0bf80ddb369efbbcb07088f`
- reviewed overlay: PR #194 @ `badef3ac1d335ed727c1a017dd295ed8ce46298f`
- question: Biểu thức \(\dfrac{x+1}{4x - 12}\) xác định khi nào?
- correct option: \(x\ne 3\)


### 05-7-hang-dang-thuc

#### ID05V1_023
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(4 x^{2} - 9\) thành nhân tử.
- correct option: \((2 x - 3)(2 x + 3)\)

#### ID05V1_024
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(9 x^{2} - 4\) thành nhân tử.
- correct option: \((3 x - 2)(3 x + 2)\)

#### ID05V1_025
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(16 x^{2} - 25\) thành nhân tử.
- correct option: \((4 x - 5)(4 x + 5)\)

#### ID05V1_026
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(25 x^{2} - 9\) thành nhân tử.
- correct option: \((5 x - 3)(5 x + 3)\)

#### ID05V1_027
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(4 x^{2} - 49\) thành nhân tử.
- correct option: \((2 x - 7)(2 x + 7)\)

#### ID05V1_028
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(36 x^{2} - 1\) thành nhân tử.
- correct option: \((6 x - 1)(6 x + 1)\)

#### ID05V1_029
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(9 x^{2} - 25\) thành nhân tử.
- correct option: \((3 x - 5)(3 x + 5)\)

#### ID05V1_030
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `ID05-HIEU-HAI-BP-021-030`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`, `phan-tich-hdt`
- source: `docs/assets/data/practice/05-7-hang-dang-thuc-v1-01.json` @ `6bb054851b281e495b02a55bf65008a08ad82218`
- reviewed overlay: PR #195 @ `6d2a872d229c8c34cf2232ed55c9ef2a2a64468e`
- question: Phân tích \(49 x^{2} - 4\) thành nhân tử.
- correct option: \((7 x - 2)(7 x + 2)\)


### 06-phan-tich-da-thuc

#### FAC06V1_003
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(8 x^{3} - 4 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(4x(2x^2-1)\)

#### FAC06V1_004
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(10 x^{3} + 20 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(10x^2(x+2)\)

#### FAC06V1_005
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(18 x^{3} + 24 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(6x^2(3x+4)\)

#### FAC06V1_006
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(20 x^{3} - 8 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(4x(5x^2-2)\)

#### FAC06V1_007
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(12 x^{3} - 24 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(12x(x^2-2)\)

#### FAC06V1_008
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(8 x^{4} + 12 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(4x^2(2x^2+3)\)

#### FAC06V1_009
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(10 x^{2} - 2 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(2x(5x-1)\)

#### FAC06V1_010
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(20 x^{3} - 15 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(5x^2(4x-3)\)

#### FAC06V1_011
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(12 x^{3} - 6 x\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(6x(2x^2-1)\)

#### FAC06V1_012
- canonical_skill_id: `nhan-tu-chung`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-NHAN-TU-CHUNG-001-012`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `nhan-tu-chung`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích đa thức \(20 x^{4} - 20 x^{2}\) thành nhân tử bằng cách đặt nhân tử chung lớn nhất.
- correct option: \(20x^2(x^2-1)\)

#### FAC06V1_023
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(x^{2} - 25\) thành nhân tử.
- correct option: \((x-5)(x+5)\)

#### FAC06V1_024
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(9x^2-16\) thành nhân tử.
- correct option: \((3x-4)(3x+4)\)

#### FAC06V1_025
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(x^2-36\) thành nhân tử.
- correct option: \((x-6)(x+6)\)

#### FAC06V1_026
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(9 x^{2} - 25\) thành nhân tử.
- correct option: \((3x-5)(3x+5)\)

#### FAC06V1_027
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(16 x^{2} - 1\) thành nhân tử.
- correct option: \((4x-1)(4x+1)\)

#### FAC06V1_028
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(9 x^{2} - 4\) thành nhân tử.
- correct option: \((3x-2)(3x+2)\)

#### FAC06V1_029
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(25x^2-4\) thành nhân tử.
- correct option: \((5x-2)(5x+2)\)

#### FAC06V1_030
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-01.json` @ `1c2dd47977aa016cd24ce07d64215c213641f27f`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(x^{2} - 4\) thành nhân tử.
- correct option: \((x-2)(x+2)\)

#### FAC06V1_031
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-02.json` @ `fb9459c3728f2679a3f5eb74f14a6df35be9f63d`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(25 x^{2} - 25\) thành nhân tử.
- correct option: \((5x-5)(5x+5)\)

#### FAC06V1_032
- canonical_skill_id: `hieu-hai-binh-phuong`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `FAC06-HIEU-HAI-BP-021-032`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `hieu-hai-binh-phuong`
- source: `docs/assets/data/practice/06-phan-tich-da-thuc-v1-02.json` @ `fb9459c3728f2679a3f5eb74f14a6df35be9f63d`
- reviewed overlay: PR #197 @ `a64ec780b62ef6fd40668eb4bbad331024b470aa`
- question: Phân tích \(25 x^{2} - 9\) thành nhân tử.
- correct option: \((5x-3)(5x+3)\)


### 07-phan-thuc-dai-so

#### RAT07V1_011
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x-3}\).
- correct option: \(x\ne 3\)

#### RAT07V1_012
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x-2}\).
- correct option: \(x\ne 2\)

#### RAT07V1_013
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x-1}\).
- correct option: \(x\ne 1\)

#### RAT07V1_014
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x+1}\).
- correct option: \(x\ne -1\)

#### RAT07V1_015
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x+2}\).
- correct option: \(x\ne -2\)

#### RAT07V1_016
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-LINEAR-009-016`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+1}{x+3}\).
- correct option: \(x\ne -3\)

#### RAT07V1_019
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} + 3 x - 4}\).
- correct option: \(x\ne -4,\;x\ne 1\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_020
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} - 3 x - 4}\).
- correct option: \(x\ne -1,\;x\ne 4\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_021
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} + 3 x - 10}\).
- correct option: \(x\ne -5,\;x\ne 2\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_022
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} - 3 x - 10}\).
- correct option: \(x\ne -2,\;x\ne 5\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_023
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} + x - 12}\).
- correct option: \(x\ne -4,\;x\ne 3\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_024
- canonical_skill_id: `dieu-kien-xac-dinh`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-DOMAIN-QUADRATIC-017-024`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `dieu-kien-xac-dinh`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-01.json` @ `3bf6305a57286b92c9c6a2486c94eadcff0d9163`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tìm điều kiện xác định của \(\frac{x+2}{x^{2} - x - 12}\).
- correct option: \(x\ne -3,\;x\ne 4\)
- review note: The requested output is the original domain; factorization is supporting work, not a second assessed-skill credit from the same answer.

#### RAT07V1_050
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-050-058`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{x^{2} - 6 x + 9}{x^{2} - 9}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{x - 3}{x + 3}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_051
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-051-059`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{x^{2} + 4 x + 4}{x^{2} - 4}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{x + 2}{x - 2}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_052
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-052-060`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{4 x^{2} - 9}{2 x^{2} - 3 x}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{2 x + 3}{x}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_053
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-053-061`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{9 x^{2} - 1}{3 x^{2} + x}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{3 x - 1}{x}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_054
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-054-062`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{x^{3} - 4 x}{x^{2} - 4}\) (giữ điều kiện xác định ban đầu).
- correct option: \(x\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_058
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-050-058`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{2 x^{2} - 12 x + 18}{2 x^{2} - 18}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{x - 3}{x + 3}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_059
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-051-059`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{2 x^{2} + 8 x + 8}{2 x^{2} - 8}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{x + 2}{x - 2}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_060
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-052-060`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-02.json` @ `2294a3f9d93b01b70036167713a3940fea367dca`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{8 x^{2} - 18}{4 x^{2} - 6 x}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{2 x + 3}{x}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_061
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-053-061`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{18 x^{2} - 2}{6 x^{2} + 2 x}\) (giữ điều kiện xác định ban đầu).
- correct option: \(\frac{3 x - 1}{x}\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_062
- canonical_skill_id: `rut-gon-phan-thuc`
- evidence_class: `MCQ_FINAL_OUTPUT_ONLY`
- unit component: `RAT07-SIMPLIFY-054-062`
- supporting_skills: `phan-tich-tu-mau`
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `rut-gon-phan-thuc`, `phan-tich-tu-mau`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Rút gọn \(\frac{2 x^{3} - 8 x}{2 x^{2} - 8}\) (giữ điều kiện xác định ban đầu).
- correct option: \(x\)
- review note: Factorization is supporting work; the requested output is the simplified rational expression while preserving the original domain.

#### RAT07V1_073
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-2}\) và \(\frac1{x-3}\) là:
- correct option: \((x-2)(x-3)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_074
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-2}\) và \(\frac1{x-5}\) là:
- correct option: \((x-2)(x-5)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_075
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-3}\) và \(\frac1{x-4}\) là:
- correct option: \((x-3)(x-4)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_076
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-3}\) và \(\frac1{x-5}\) là:
- correct option: \((x-3)(x-5)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_077
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-4}\) và \(\frac1{x-5}\) là:
- correct option: \((x-4)(x-5)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_078
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-1}\) và \(\frac1{x-4}\) là:
- correct option: \((x-1)(x-4)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_079
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-2}\) và \(\frac1{x-7}\) là:
- correct option: \((x-2)(x-7)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_080
- canonical_skill_id: `quy-dong-mau-thuc`
- evidence_class: `MCQ_METHOD_SELECTION_ONLY`
- unit component: `RAT07-COMMON-DENOMINATOR-071-080`
- supporting_skills: none
- prompt_demand_stage: `method_selection`
- legacy_skill_tags: `quy-dong-mau-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-03.json` @ `9297d644a65c09b8c8ca8cc4b3f81cc194764360`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Mẫu thức chung phù hợp của \(\frac1{x-3}\) và \(\frac1{x-7}\) là:
- correct option: \((x-3)(x-7)\)
- review note: Selecting a suitable common denominator is aligned evidence for this skill but does not by itself establish full execution mastery.

#### RAT07V1_117
- canonical_skill_id: `tinh-gia-tri-phan-thuc`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `RAT07V1_117`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `tinh-gia-tri-phan-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json` @ `b1ba2cc3664cfc2cda13fdafe4655f744130c833`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tính giá trị của \(A=\frac{2 x}{x + 3}\) tại \(x=3\).
- correct option: \(1\)

#### RAT07V1_118
- canonical_skill_id: `tinh-gia-tri-phan-thuc`
- evidence_class: `MCQ_FINAL_ANSWER_ONLY`
- unit component: `RAT07V1_118`
- supporting_skills: none
- prompt_demand_stage: `independent_worked_solution`
- legacy_skill_tags: `tinh-gia-tri-phan-thuc`
- source: `docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json` @ `b1ba2cc3664cfc2cda13fdafe4655f744130c833`
- reviewed overlay: PR #200 @ `0318bde17dd140ad2e94563abdbddca90343cc77`
- question: Tính giá trị của \(A=\frac{x^{2} - 4}{x - 2}\) tại \(x=5\).
- correct option: \(7\)

## 6. Required architecture checks

Return PASS/FAIL with a source-based reason for each:

1. **Delta eligibility:** all 74 are legitimate Phase-D primary-evidence candidates for exactly the same seven proven skills, with no PENDING/formative-only leakage.
2. **Primary mapping:** each prompt supports its stated canonical skill as the assessed skill, not merely a supporting concept/tag/context.
3. **Evidence class:** each MCQ evidence class is conservative for what the response visibly demonstrates.
4. **De-dup identity:** clone/question unit assignments remain safe under skill + topic + clone/question, including structural families containing multiple canonical skills.
5. **Cross-topic semantics:** same-skill appearances across CĐ04–07 stay topic-scoped and are not treated as cross-topic clone equivalents.
6. **Combined boundary:** reconciliation is correctly **101 items / 7 skills / max 23 units**, leaving the existing 27 G1 rows unchanged.
7. **G1 regression boundary:** G2 can be implemented as an allowlist/policy expansion without changing assistance semantics, legacy-write-first/fail-open, v2 store semantics or normal learner UI.
8. **Safety boundary:** mastery/Readiness/remediation/ranking, migration/backfill/regrade, PENDING/formative-only capture, G3 and CĐ08–25 rollout remain OFF.

## 7. Required response format

Start with exactly one:

`OVERALL: PASS`  
or  
`OVERALL: REVISIONS_REQUIRED`

Then:

### A. Coverage
- Expected delta IDs: 74
- Reviewed: N/74
- PASS: N
- REVISION_REQUIRED: N
- INSUFFICIENT_EVIDENCE: N
- NOT_REVIEWED: N

### B. Item verdicts
Exactly 74 rows:
`question_id | verdict | issue (if any) | correction/recommendation (if any)`

### C. Architecture checks
All 8 checks, each PASS/FAIL with reason.

### D. Final authorization
Only if all 74 are explicitly reviewed with no unresolved revision/insufficient-evidence issue and all 8 architecture checks PASS, state that the packet is academically cleared for a **separate technical implementation/QA stage of G2**.

Do not authorize production deployment, G3, mastery, Readiness, remediation/ranking, migration/backfill/regrade or broader capture.
