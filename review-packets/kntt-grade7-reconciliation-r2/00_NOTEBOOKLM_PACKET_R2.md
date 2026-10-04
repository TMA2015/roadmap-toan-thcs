# NotebookLM Review Packet — KNTT Grade 7 Reconciliation R2

**packet_id:** `MATH-KNTT-G7-RECON-R2-20261004`  
**scope:** Only the 5 unresolved academic decisions remaining after Grade-7 R2 draft reconciliation  
**candidate branch:** `governance/kntt-grade7-reconciliation-r2-20261004`  
**candidate data:** `docs/assets/data/curriculum/kntt-grade7-reconciliation-r2.json`  
**candidate blob:** `f00ea486b895679d7118d70f584cd19206a53195`  
**release boundary:** REVIEW ONLY — no implementation/deploy authorization

## 1. Exact NotebookLM Sources to select

Select exactly **5 Sources**:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **SGK Toán 7, tập một — Kết nối tri thức với cuộc sống**
4. **SGK Toán 7, tập hai — Kết nối tri thức với cuộc sống**
5. **This packet — MATH-KNTT-G7-RECON-R2-20261004**

Do not select Grade 6, 8 or 9 textbook PDFs for this review.  
Do not select obsolete Master Plan versions.

If the two Grade-7 SGK sources are unavailable, return `INSUFFICIENT_EVIDENCE` for any decision that would add/promote a canonical Core skill/family.

## 2. Protected boundaries

This review must not:
- rename historical item IDs;
- change learner history;
- backfill/regrade attempts;
- change Mastery/Readiness semantics;
- activate Taxonomy v2 runtime;
- mass-create skills;
- promote optional content into Core without S1 evidence.

The review decides taxonomy identity/granularity only.

## 3. Current R2 draft result

Grade 7 begins with **11 historical exact-ID mismatches**.

R2 has already closed six without adding a new identity:
- `can-bac-hai` -> `can-bac-hai-so-hoc` / `RAD-BASIC`
- `so-thap-phan-vo-han-tuan-hoan` -> `so-huu-ti-thap-phan` / `NUM-SETS`
- `ve-bieu-do-quat-tron` -> family `STAT-REPRESENT`
- `ve-bieu-do-doan-thang` -> family `STAT-REPRESENT`
- `da-thuc-mot-bien` -> family `ALG-STRUCTURE`
- `xac-suat-bien-co-don-gian` -> `xac-suat-co-dien` / `PROB-CLASSICAL`

These six are out of scope unless S1 directly contradicts them.

## 4. Review exactly these 5 refs

1. `phep-tinh-so-huu-ti`
2. `quy-tac-chuyen-ve`
3. `so-vo-ti`
4. `tap-hop-so-thuc`
5. `chia-da-thuc-mot-bien`

Missing, duplicate or unexpected IDs must be reported.

## 5. Current project evidence and questions

### A. `phep-tinh-so-huu-ti` — Chương 1, Bài 1–3

S1 scope in the Grade-7 map:
- tập hợp số hữu tỉ;
- cộng, trừ, nhân, chia số hữu tỉ;
- lũy thừa với số mũ tự nhiên của số hữu tỉ.

Current candidates:
- skill `so-huu-ti-thap-phan`
- family `NUM-SETS`
- possible new identity `phep-tinh-so-huu-ti`

Why R2 did not auto-map:
- `so-huu-ti-thap-phan` primarily expresses number-set/representation identity;
- its historical registry mapping is itself marked `REVIEW_REQUIRED`;
- arithmetic errors may be diagnostically distinct from recognizing/representing rational numbers.

Review question:
- Should rational-number arithmetic be absorbed into the existing broad identity/family, or does it justify a stable canonical skill?

### B. `quy-tac-chuyen-ve` — Chương 1, Bài 4

Current candidates:
- skill `bien-doi-pt-nhieu-buoc`
- family `EQ-BASIC`
- possible new identity `quy-tac-chuyen-ve`

Why R2 did not auto-map:
- Grade 7 teaches the rule while solving for an unknown rational number;
- current `EQ-BASIC` is a later equation-solving family;
- the concept is a prerequisite for equations but is not identical to all multi-step equation transformation.

Review question:
- Map to EQ-BASIC, keep lesson-local as a prerequisite technique, or create a stable cross-grade skill?

### C. `so-vo-ti` — Chương 2, Bài 5–7

Current candidate:
- family `NUM-SETS`
- possible new identity `so-vo-ti`

Why R2 did not auto-map:
- irrational numbers are a foundational number-set concept;
- current NUM-SETS has `tap-hop-so`, `so-huu-ti-thap-phan`, `lam-tron-so`, but no irrational-number identity.

Review question:
- Is family-level coverage sufficient, or does irrational-number recognition/representation merit a canonical skill?

### D. `tap-hop-so-thuc` — Chương 2, Bài 5–7

Current candidate:
- family `NUM-SETS`
- possible new identity `tap-hop-so-thuc`

Why R2 did not auto-map:
- the real-number set is a stable cross-grade concept;
- however a separate global skill may overlap strongly with `tap-hop-so`, rational/irrational number concepts and later radical work.

Review question:
- Map to NUM-SETS / an existing skill, keep lesson-local, or add a distinct canonical real-number-set skill?

### E. `chia-da-thuc-mot-bien` — Chương 7, Bài 26–28

Current candidates:
- skill `chia-da-thuc-cho-don-thuc`
- family `ALG-DIV-MONOMIAL`
- possible new identity `chia-da-thuc-mot-bien`

Important prior project evidence:
- the reviewed Grade-7 mapping explicitly recorded that the Practice Bank did **not** have a sufficiently clear skill for general univariate-polynomial division;
- `ALG-DIV-MONOMIAL` is narrower: division of a polynomial by a monomial.

Review question:
- Does S1 Grade 7 require a canonical identity broader than `chia-da-thuc-cho-don-thuc`, or should this remain lesson-local/family-level until evidence supports a separate assessed skill?

## 6. Decision vocabulary

For each ref choose exactly one:

- `MAP_TO_SKILL`
- `MAP_TO_FAMILY`
- `KEEP_LESSON_LOCAL`
- `ADD_CANONICAL_SKILL`
- `ADD_CANONICAL_FAMILY`
- `INSUFFICIENT_EVIDENCE`

If mapping to an existing target, name it.  
If adding a new identity, propose a stable ID.

Do not recommend a new skill merely because a phrase appears as a lesson heading.

## 7. Review criteria

For each case check:
1. S1 Core boundary;
2. mathematical identity;
3. diagnostic value;
4. overlap/duplication;
5. cross-grade stability;
6. problem type vs skill;
7. granularity.

## 8. Required output

Return this machine-checkable block first:

```text
PACKET|MATH-KNTT-G7-RECON-R2-20261004
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_IDS|5
REVIEWED_IDS|5

REF|phep-tinh-so-huu-ti|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|quy-tac-chuyen-ve|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|so-vo-ti|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|tap-hop-so-thuc|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|chia-da-thuc-mot-bien|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>

MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G7_R2_RECONCILIATION_REVIEW_COMPLETE
```

Then give concise source-based reasoning.

If `REVIEWED_IDS` is not 5, or an expected ID is absent, do not issue the clearance string.
