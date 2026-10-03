# NotebookLM Review Guide — S2 Combined Full-Bank Audit CT09–CT12 R1

Packet ID: `MATH-SKILL-S2-CT09-12-COMBINED-R1-20261002`

## Scope

- CT09: 120 questions
- CT10: 120 questions
- CT11: 132 questions
- CT12: 120 questions
- **Combined: 492 questions**
- All four overlays passed machine preflight: unique IDs, no missing primary/family, no clone-membership duplicates, no runtime/Readiness/legacy changes.

## Temporary Sources to select

1. `00_CT09_OVERLAY_SOURCE.md`
2. `01_CT10_OVERLAY_SOURCE.md`
3. `02_CT11_OVERLAY_SOURCE.md`
4. `03_CT12_OVERLAY_SOURCE.md`
5. this review guide

The JSON overlays remain GitHub provenance only and are not uploaded to NotebookLM.

## Core academic rules

- Max one primary diagnostic skill per one-answer MCQ.
- Learner-facing family remains broader than diagnostic subskill.
- Context/method/support tags do not create duplicate learner mastery.
- Modeling, graph-drawing, construction and multistep parameter MCQs may be partial evidence only; keep written-evidence requirements intact.
- Optional Entrance10 / Specialized-Challenge evidence does not gate Core.
- Cross-topic links (system↔graph, square-root home, quadratic↔graph) must not create duplicate learner-facing families.
- Clone families are future evidence de-duplication guidance only.
- Legacy questions, answers, IDs and tags are immutable; no runtime/history migration is authorized.

## Topic-specific review focus

### CT09
- `nghiem-he` supports solution-method items rather than stealing primary from the method.
- `y-nghia-hinh-hoc` supports `so-nghiem-he` in current final-answer items.
- `bai-toan-so`, `chuyen-dong-he`, `nang-suat-he` remain contexts under `lap-he-bai-toan`.
- 89–120 system-selection MCQs are partial modeling evidence only.
- `tham-so-he` remains optional Entrance10 evidence.

### CT10
- `bang-gia-tri` and `toa-do-diem` may be primary diagnostics but remain inside broader families.
- 83–92 select valid points for drawing: partial graph-drawing evidence only.
- `lien-he-he-phuong-trinh` supports `giao-diem-do-thi`, avoiding duplicate system mastery.
- Parabola membership/opening items map to diagnostic subskills inside `PARABOLA-BASIC`.

### CT11
- CT11 is the canonical home for `can-bac-hai-so-hoc`; this remains coherent with S1 Core-Support.
- method-like transformations can be diagnostic primaries when directly isolated, without becoming separate learner families.
- 115–117 radical-equation MCQs are partial evidence only; full written certification remains required.

### CT12
- distinguish `tinh-delta` from `so-nghiem-delta` where the prompt isolates the latter.
- `cong-thuc-nghiem`, `delta-phay`, `nham-nghiem` remain diagnostic/method subskills within `QUAD-SOLVE`.
- 97–104 equation construction and 105–112 parameter conditions are partial evidence where full reasoning matters.
- 119–120 graph/root relation must remain cross-topic coherent with CT10.

## Required output

Return only machine-checkable lines.

`BATCH|MATH-SKILL-S2-CT09-12-COMBINED-R1-20261002|PASS`
or replace PASS with `REVISIONS_REQUIRED` / `INSUFFICIENT_EVIDENCE`.

`TOPIC|CT09|PASS` or `TOPIC|CT09|REVISIONS_REQUIRED`
`COVERAGE|CT09|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT10|PASS` or `TOPIC|CT10|REVISIONS_REQUIRED`
`COVERAGE|CT10|120|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT11|PASS` or `TOPIC|CT11|REVISIONS_REQUIRED`
`COVERAGE|CT11|132|<reviewed_count>|<revision_count>|<missing_count>`
`TOPIC|CT12|PASS` or `TOPIC|CT12|REVISIONS_REQUIRED`
`COVERAGE|CT12|120|<reviewed_count>|<revision_count>|<missing_count>`
`COVERAGE|COMBINED|492|<reviewed_count>|<revision_count>|<missing_count>`

If revisions exist:
`FIX|<topic>|<question_id>|<field>|<current>|<corrected>|<reason>`
If none: `FIX_COUNT|0`

### Clone-family review
`CLONE|CT09|SYS09-TWO-VAR-001-006|PASS` or `CLONE|CT09|SYS09-TWO-VAR-001-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-TWO-VAR-007-012|PASS` or `CLONE|CT09|SYS09-TWO-VAR-007-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-SOLVE-013-028|PASS` or `CLONE|CT09|SYS09-SOLVE-013-028|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-SOLUTION-COUNT-029-040|PASS` or `CLONE|CT09|SYS09-SOLUTION-COUNT-029-040|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-METHOD-041-044|PASS` or `CLONE|CT09|SYS09-METHOD-041-044|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-METHOD-045-048|PASS` or `CLONE|CT09|SYS09-METHOD-045-048|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-METHOD-049-052|PASS` or `CLONE|CT09|SYS09-METHOD-049-052|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-PRETRANSFORM-053-058|PASS` or `CLONE|CT09|SYS09-PRETRANSFORM-053-058|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-PRETRANSFORM-059-064|PASS` or `CLONE|CT09|SYS09-PRETRANSFORM-059-064|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-CHECK-065-070|PASS` or `CLONE|CT09|SYS09-CHECK-065-070|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-CHECK-071-076|PASS` or `CLONE|CT09|SYS09-CHECK-071-076|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-PARAM-077-088|PASS` or `CLONE|CT09|SYS09-PARAM-077-088|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-MODEL-NUMBER-089-100|PASS` or `CLONE|CT09|SYS09-MODEL-NUMBER-089-100|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-MODEL-MOTION-101-110|PASS` or `CLONE|CT09|SYS09-MODEL-MOTION-101-110|REVISE|<corrected membership>|<reason>`
`CLONE|CT09|SYS09-MODEL-RATE-111-120|PASS` or `CLONE|CT09|SYS09-MODEL-RATE-111-120|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-VALUE-001-006|PASS` or `CLONE|CT10|FUN10-VALUE-001-006|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-VALUE-007-012|PASS` or `CLONE|CT10|FUN10-VALUE-007-012|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-CONCEPT-013-016|PASS` or `CLONE|CT10|FUN10-CONCEPT-013-016|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-CONCEPT-017-020|PASS` or `CLONE|CT10|FUN10-CONCEPT-017-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-TABLE-021-030|PASS` or `CLONE|CT10|FUN10-TABLE-021-030|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-LINEAR-RECOG-051-055|PASS` or `CLONE|CT10|FUN10-LINEAR-RECOG-051-055|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-LINEAR-RECOG-056-060|PASS` or `CLONE|CT10|FUN10-LINEAR-RECOG-056-060|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-COEFFICIENTS-061-066|PASS` or `CLONE|CT10|FUN10-COEFFICIENTS-061-066|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-COEFFICIENTS-067-072|PASS` or `CLONE|CT10|FUN10-COEFFICIENTS-067-072|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-DRAW-083-087|PASS` or `CLONE|CT10|FUN10-DRAW-083-087|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-DRAW-088-092|PASS` or `CLONE|CT10|FUN10-DRAW-088-092|REVISE|<corrected membership>|<reason>`
`CLONE|CT10|FUN10-INTERSECTION-103-110|PASS` or `CLONE|CT10|FUN10-INTERSECTION-103-110|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-SQRT-001-010|PASS` or `CLONE|CT11|RAD11-SQRT-001-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-DOMAIN-011-022|PASS` or `CLONE|CT11|RAD11-DOMAIN-011-022|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-DOMAIN-DENOM-023-032|PASS` or `CLONE|CT11|RAD11-DOMAIN-DENOM-023-032|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-ABS-033-037|PASS` or `CLONE|CT11|RAD11-ABS-033-037|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-ABS-038-042|PASS` or `CLONE|CT11|RAD11-ABS-038-042|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-EXTRACT-043-048|PASS` or `CLONE|CT11|RAD11-EXTRACT-043-048|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-EXTRACT-049-054|PASS` or `CLONE|CT11|RAD11-EXTRACT-049-054|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-QUOTIENT-055-059|PASS` or `CLONE|CT11|RAD11-QUOTIENT-055-059|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-QUOTIENT-060-064|PASS` or `CLONE|CT11|RAD11-QUOTIENT-060-064|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-INTO-065-074|PASS` or `CLONE|CT11|RAD11-INTO-065-074|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-LIKE-075-086|PASS` or `CLONE|CT11|RAD11-LIKE-075-086|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-MULTDIV-087-096|PASS` or `CLONE|CT11|RAD11-MULTDIV-087-096|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-RATIONALIZE-SIMPLE-097-106|PASS` or `CLONE|CT11|RAD11-RATIONALIZE-SIMPLE-097-106|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-RATIONALIZE-CONJ-107-114|PASS` or `CLONE|CT11|RAD11-RATIONALIZE-CONJ-107-114|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-EQ-115-117|PASS` or `CLONE|CT11|RAD11-EQ-115-117|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-COMPARE-118-120|PASS` or `CLONE|CT11|RAD11-COMPARE-118-120|REVISE|<corrected membership>|<reason>`
`CLONE|CT11|RAD11-CUBEROOT-121-132|PASS` or `CLONE|CT11|RAD11-CUBEROOT-121-132|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-RECOG-001-005|PASS` or `CLONE|CT12|QUA12-RECOG-001-005|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-RECOG-006-010|PASS` or `CLONE|CT12|QUA12-RECOG-006-010|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-COEFF-011-020|PASS` or `CLONE|CT12|QUA12-COEFF-011-020|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-DELTA-021-034|PASS` or `CLONE|CT12|QUA12-DELTA-021-034|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-SOLVE-035-043|PASS` or `CLONE|CT12|QUA12-SOLVE-035-043|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-SOLVE-044-052|PASS` or `CLONE|CT12|QUA12-SOLVE-044-052|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-DELTA-PRIME-053-062|PASS` or `CLONE|CT12|QUA12-DELTA-PRIME-053-062|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-MENTAL-063-067|PASS` or `CLONE|CT12|QUA12-MENTAL-063-067|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-MENTAL-068-072|PASS` or `CLONE|CT12|QUA12-MENTAL-068-072|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-VIETE-073-084|PASS` or `CLONE|CT12|QUA12-VIETE-073-084|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-SYMMETRIC-085-096|PASS` or `CLONE|CT12|QUA12-SYMMETRIC-085-096|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-BUILD-097-104|PASS` or `CLONE|CT12|QUA12-BUILD-097-104|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-PARAM-105-112|PASS` or `CLONE|CT12|QUA12-PARAM-105-112|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-SIGN-113-118|PASS` or `CLONE|CT12|QUA12-SIGN-113-118|REVISE|<corrected membership>|<reason>`
`CLONE|CT12|QUA12-GRAPH-119-120|PASS` or `CLONE|CT12|QUA12-GRAPH-119-120|REVISE|<corrected membership>|<reason>`

### Verified counts
`COUNT|CT09|MAPPED_PRIMARY|120`
`COUNT|CT09|FORMATIVE_ONLY|0`
`COUNT|CT09|PRIMARY|nghiem-pt-hai-an|12`
`COUNT|CT09|PRIMARY|giai-he-the|12`
`COUNT|CT09|PRIMARY|giai-he-cong|4`
`COUNT|CT09|PRIMARY|so-nghiem-he|12`
`COUNT|CT09|PRIMARY|chon-phuong-phap|12`
`COUNT|CT09|PRIMARY|bien-doi-truoc-giai|12`
`COUNT|CT09|PRIMARY|kiem-tra-nghiem-he|12`
`COUNT|CT09|PRIMARY|tham-so-he|12`
`COUNT|CT09|PRIMARY|lap-he-bai-toan|32`
`COUNT|CT10|MAPPED_PRIMARY|120`
`COUNT|CT10|FORMATIVE_ONLY|0`
`COUNT|CT10|PRIMARY|tinh-gia-tri-ham|12`
`COUNT|CT10|PRIMARY|khai-niem-ham-so|8`
`COUNT|CT10|PRIMARY|bang-gia-tri|10`
`COUNT|CT10|PRIMARY|toa-do-diem|10`
`COUNT|CT10|PRIMARY|diem-thuoc-do-thi|10`
`COUNT|CT10|PRIMARY|nhan-biet-ham-bac-nhat|10`
`COUNT|CT10|PRIMARY|he-so-goc|6`
`COUNT|CT10|PRIMARY|tung-do-goc|6`
`COUNT|CT10|PRIMARY|dong-nghich-bien|10`
`COUNT|CT10|PRIMARY|ve-do-thi-ham-bac-nhat|10`
`COUNT|CT10|PRIMARY|vi-tri-hai-duong-thang|10`
`COUNT|CT10|PRIMARY|giao-diem-do-thi|8`
`COUNT|CT10|PRIMARY|diem-thuoc-parabol|5`
`COUNT|CT10|PRIMARY|doi-xung-parabol|5`
`COUNT|CT11|MAPPED_PRIMARY|132`
`COUNT|CT11|FORMATIVE_ONLY|0`
`COUNT|CT11|PRIMARY|can-bac-hai-so-hoc|10`
`COUNT|CT11|PRIMARY|dkxd-can|22`
`COUNT|CT11|PRIMARY|can-binh-phuong|10`
`COUNT|CT11|PRIMARY|khai-phuong-tich|12`
`COUNT|CT11|PRIMARY|khai-phuong-thuong|10`
`COUNT|CT11|PRIMARY|dua-thua-so-vao|10`
`COUNT|CT11|PRIMARY|can-dong-dang|12`
`COUNT|CT11|PRIMARY|nhan-chia-can|10`
`COUNT|CT11|PRIMARY|truc-can-mau-don|10`
`COUNT|CT11|PRIMARY|truc-can-lien-hop|8`
`COUNT|CT11|PRIMARY|tim-x-can|3`
`COUNT|CT11|PRIMARY|so-sanh-can|3`
`COUNT|CT11|PRIMARY|can-bac-ba|12`
`COUNT|CT12|MAPPED_PRIMARY|120`
`COUNT|CT12|FORMATIVE_ONLY|0`
`COUNT|CT12|PRIMARY|nhan-dang-pt-bac-hai|10`
`COUNT|CT12|PRIMARY|he-so-abc|10`
`COUNT|CT12|PRIMARY|tinh-delta|7`
`COUNT|CT12|PRIMARY|so-nghiem-delta|7`
`COUNT|CT12|PRIMARY|giai-pt-bac-hai|18`
`COUNT|CT12|PRIMARY|delta-phay|10`
`COUNT|CT12|PRIMARY|nham-nghiem|10`
`COUNT|CT12|PRIMARY|tong-tich-nghiem|12`
`COUNT|CT12|PRIMARY|bieu-thuc-doi-xung|12`
`COUNT|CT12|PRIMARY|lap-pt-tu-nghiem|8`
`COUNT|CT12|PRIMARY|tham-so-so-nghiem|8`
`COUNT|CT12|PRIMARY|dau-nghiem|6`
`COUNT|CT12|PRIMARY|lien-he-do-thi|2`

### Topic checks
`CHECK|CT09|SOLVE_METHOD_SUPPORT|PASS`
`CHECK|CT09|CONTEXTS_MODELING_PARTIAL|PASS`
`CHECK|CT09|PARAM_OPTIONAL|PASS`
`CHECK|CT10|TABLE_POINT_DIAGNOSTICS|PASS`
`CHECK|CT10|GRAPH_DRAWING_PARTIAL|PASS`
`CHECK|CT10|SYSTEM_GRAPH_LINK|PASS`
`CHECK|CT11|SQRT_CANONICAL_HOME|PASS`
`CHECK|CT11|TRANSFORM_METHODS|PASS`
`CHECK|CT11|RADICAL_EQUATION_PARTIAL|PASS`
`CHECK|CT12|DELTA_VS_ROOT_COUNT|PASS`
`CHECK|CT12|VIETE_SUBSKILLS|PASS`
`CHECK|CT12|CONSTRUCTION_PARAM_PARTIAL|PASS`
`CHECK|CT12|GRAPH_ROOT_LINK|PASS`

### Architecture
`ARCH_1|PASS`
`ARCH_2|PASS`
`ARCH_3|PASS`
`ARCH_4|PASS`
`ARCH_5|PASS`
`ARCH_6|PASS`
`ARCH_7|PASS`
`ARCH_8|PASS`
`ARCH_9|PASS`
`ARCH_10|PASS`
`ARCH_11|PASS`
`ARCH_12|PASS`
Meanings:
1 one primary max per MCQ
2 learner families broader than diagnostic subskills
3 support/method/context do not duplicate learner mastery
4 CT09 modeling evidence remains partial where appropriate
5 CT10 graph drawing evidence remains partial where appropriate
6 CT11 radical-equation evidence remains partial where appropriate
7 CT12 construction/parameter evidence remains partial where appropriate
8 cross-topic family links remain non-duplicative
9 optional layers do not gate Core
10 clone families are de-dup guidance only
11 legacy content/answers/tags/history preserved
12 no runtime/Readiness/mastery migration implied

Finally:
`OVERALL|PASS` or `OVERALL|REVISIONS_REQUIRED`
`AUTHORIZATION|CLEARED_FOR_S2_CT09_12_RECONCILIATION` or `AUTHORIZATION|BLOCKED_PENDING_REVISIONS`

If the chat response would be truncated, create a Markdown artifact containing exactly the same machine-checkable lines and return that file instead. Do not omit clone/count/check lines.
