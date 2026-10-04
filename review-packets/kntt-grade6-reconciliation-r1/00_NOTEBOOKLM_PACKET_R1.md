# NotebookLM Review Packet — KNTT Grade 6 Reconciliation R1

**packet_id:** `MATH-KNTT-G6-RECON-R1-20261004`  
**scope:** Only the 7 unresolved academic decisions remaining after Grade-6 R1 identity reconciliation  
**candidate branch:** `governance/kntt-grade6-reconciliation-r1-20261004`  
**candidate data:** `docs/assets/data/curriculum/kntt-grade6-reconciliation-r1.json`  
**candidate blob:** `935abf3bad87d0a313f1176a7d121b1fe903af83`  
**release boundary:** REVIEW ONLY — no implementation/deploy authorization

## 1. Exact NotebookLM Sources to select

Select exactly **5 Sources** for this review:

1. **NotebookLM Math Review Rules v1.2**
2. **Self-Learning Math Master Plan v1.2.1**
3. **Official NXB GDVN — SGK Toán 6, tập một**
4. **Official NXB GDVN — SGK Toán 6, tập hai**
5. **This packet — MATH-KNTT-G6-RECON-R1-20261004**

Official publisher provenance:
- Toán 6, tập một: `https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/toan-6-tap-mot-940011379.940011379`
- Toán 6, tập hai: `https://taphuan.nxbgd.vn/tap-huan/chi-tiet-sach/toan-6-tap-hai-939957508.939957508`

Do **not** select the obsolete Master Plan v1.1 together with v1.2.1.

If either official SGK source is unavailable in the Notebook, return `INSUFFICIENT_EVIDENCE` for any decision that would add/promote a canonical Core skill/family. Do not substitute a study-guide website for S1.

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

## 3. Current R1 result

The Grade-6 framework began with **35 unresolved historical refs**.

R1 currently classifies:
- 16 `CANONICAL_SKILL`
- 12 `CANONICAL_FAMILY`
- 5 `NEEDS_REVIEW`
- 2 `GAP_CANDIDATE`

The 28 already reconciled refs are **out of scope for this packet** unless the official SGK directly contradicts a candidate decision.

## 4. The 7 expected review IDs

Review exactly these seven refs, 1:1:

1. `cong-tru-so-tu-nhien`
2. `nhan-chia-so-tu-nhien`
3. `hon-so-duong`
4. `phep-tinh-so-thap-phan`
5. `bang-thong-ke`
6. `lam-tron`
7. `uoc-luong`

Missing, duplicate, or unexpected IDs must be reported.

## 5. Current project evidence

### A. Natural-number operations — Bài 4–5

Historical KNTT ref:
- `cong-tru-so-tu-nhien`
- `nhan-chia-so-tu-nhien`

Current candidate:
- skill `so-nguyen-phep-tinh`
- family `NUM-INTEGER-OPS`

Why R1 did **not** auto-map:
- current family label is **Số nguyên và phép tính**;
- current Grade-6 Topic02 Learning Workspace uses `so-nguyen-phep-tinh` for **Bài 13–17**, the integer block;
- the current Bài 1–7 card uses `tap-hop-so`, `thu-tu-phep-tinh`, `luy-thua`, so Bài 4–5 natural-number operations are not explicitly represented by a dedicated current skill.

Review question:
- Is natural-number arithmetic a separate canonical Grade-6 skill/family?
- Or should it be deliberately absorbed into an existing broader identity without harming diagnostic usefulness?

### B. `hon-so-duong` — Bài 23–24

Current candidate family:
- `NUM-FRACTION-FORM` — Rút gọn, quy đồng và so sánh phân số.

Why R1 did **not** auto-map:
- current family/subskills do not explicitly name mixed-number representation;
- current Grade-6 fraction card covers Bài 23–27 with `rut-gon-phan-so`, `quy-dong-so-sanh-phan-so`, `phep-tinh-phan-so`;
- the older reviewed Grade-6 mapping explicitly listed hỗn số dương among skills that still needed supplementation/refinement.

Review question:
- Should mixed-number representation remain lesson-local under NUM-FRACTION-FORM?
- Or is a canonical skill/family addition justified?

### C. `phep-tinh-so-thap-phan` — Bài 28–29

Current candidate:
- skill `so-huu-ti-thap-phan`
- family `NUM-SETS`

Why R1 did **not** auto-map:
- the learner-facing Grade-6 decimal card explicitly teaches decimal calculation;
- however the registry identity `so-huu-ti-thap-phan` sits under **Tập hợp số và biểu diễn số**;
- the registry's own legacy mapping for `so-huu-ti-thap-phan` is marked `REVIEW_REQUIRED` rather than a clean canonical candidate.

Review question:
- Is decimal arithmetic sufficiently represented by the current broad skill/family?
- Or should arithmetic have its own canonical identity?

### D. `bang-thong-ke` — Bài 38–41

Current candidates:
- family `STAT-REPRESENT`
- family `STAT-CHART-READ`

Why R1 did **not** auto-map:
- current Topic21 learner card is titled **Đọc bảng dữ liệu, biểu đồ cột và cột kép**;
- its canonical skills are `doc-bieu-do-cot` and `doc-bieu-do-cot-kep`;
- there is no exact canonical skill for reading/using a statistical table;
- the older reviewed Grade-6 mapping explicitly lists `bảng thống kê` in Grade-6 Core.

Review question:
- Is table reading best kept lesson-local under an existing family?
- Or is a stable canonical skill justified?

### E. `lam-tron` — Bài 30

Current R1 status:
- `GAP_CANDIDATE`

Evidence:
- Grade-6 KNTT map explicitly identifies **Bài 30: Làm tròn và ước lượng**;
- current Grade-6 Topic02 card title also includes **làm tròn**;
- locked Taxonomy v2 has no `lam-tron`, `xap-xi`, or equivalent family/skill;
- current card skills are only `so-huu-ti-thap-phan` and `phan-tram`.

Review question:
- Does S1 support rounding as a distinct canonical competency?
- If yes, should it be its own skill or part of a small rounding/estimation family?

### F. `uoc-luong` — Bài 30

Current R1 status:
- `GAP_CANDIDATE`

Evidence:
- Grade-6 KNTT map explicitly includes **ước lượng** in Bài 30;
- locked Taxonomy v2 has no direct estimation identity.

Review question:
- Does S1 support estimation as a distinct canonical competency?
- Should it share a family with rounding, remain lesson-local, or have its own skill?

## 6. Decision vocabulary

For each of the seven refs, choose exactly one:

- `MAP_TO_SKILL` — map to an existing canonical skill; name it.
- `MAP_TO_FAMILY` — map to an existing canonical family; name it; finer wording stays lesson-local/problem-type.
- `KEEP_LESSON_LOCAL` — Core concept is real, but no global assessed-skill identity should be created.
- `ADD_CANONICAL_SKILL` — S1 + diagnostic usefulness justify a new skill.
- `ADD_CANONICAL_FAMILY` — S1 + structure justify a new family.
- `INSUFFICIENT_EVIDENCE` — sources do not support a safe decision.

Do not recommend a new skill merely because a phrase appears as a lesson heading.

## 7. Review criteria

For each decision check:

1. **S1 Core boundary** — is the knowledge/skill actually required in Grade 6 KNTT?
2. **Mathematical identity** — is it genuinely distinct from an existing canonical skill?
3. **Diagnostic value** — would a separate skill produce actionable learner evidence?
4. **Anti-duplication** — would a new skill overlap heavily with an existing skill/family?
5. **Cross-grade stability** — will the identity remain useful beyond one lesson heading?
6. **Problem type vs skill** — is this a task structure rather than a competency?
7. **Granularity** — neither too broad to diagnose nor so narrow that the taxonomy explodes.

## 8. Required output

Return a machine-checkable block first:

```text
PACKET|MATH-KNTT-G6-RECON-R1-20261004
OVERALL|PASS|REVISION_REQUIRED|INSUFFICIENT_EVIDENCE
EXPECTED_IDS|7
REVIEWED_IDS|7

REF|cong-tru-so-tu-nhien|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|nhan-chia-so-tu-nhien|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|hon-so-duong|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|phep-tinh-so-thap-phan|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|bang-thong-ke|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|lam-tron|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>
REF|uoc-luong|<DECISION>|<TARGET_OR_NEW_ID_OR_NONE>|<P0/P1/P2>|<SHORT_REASON>

MISSING_IDS|NONE
DUPLICATE_IDS|NONE
UNEXPECTED_IDS|NONE
CLEARANCE|G6_R1_RECONCILIATION_REVIEW_COMPLETE
```

Then provide concise reasoning, citing the selected Sources.

If `REVIEWED_IDS` is not 7, or any expected ID is absent, do not issue the clearance string.

## 9. Prompt to paste into NotebookLM

Review packet `MATH-KNTT-G6-RECON-R1-20261004`.

Use ONLY the 5 selected Sources listed in the packet. Treat the official NXB GDVN SGK Toán 6 tập một/tập hai as S1 curriculum authority. Review exactly the seven expected refs and no others.

Your job is to decide taxonomy identity/granularity, not to rewrite lessons or add content. Respect the anti-inflation rule: a KNTT lesson phrase is not automatically a global assessed skill. Distinguish canonical skill, canonical family, lesson-local concept, and problem type.

Return the exact machine-checkable format from Section 8, followed by concise source-based reasoning. If S1 evidence is insufficient for a proposed Core taxonomy addition, return INSUFFICIENT_EVIDENCE for that ref. Do not infer implementation or deployment authorization beyond the explicit clearance string.
