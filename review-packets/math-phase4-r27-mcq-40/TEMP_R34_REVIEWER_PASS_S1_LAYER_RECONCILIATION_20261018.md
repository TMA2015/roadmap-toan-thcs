# R34 — Independent NotebookLM result reconciliation (not an owner academic PASS)

**Packet:** `MATH-R34-QUA12V1_121-POST-REVISION-20261018`  
**ID:** `QUA12V1_121` (exactly one).  
**Bank Git blob:** `89b50fb32c6ebd04d57e41f6c2d5ae1f70384c08`  
**Corrected record SHA-256:** `6c7e6d4d8f66802da30d1f6d9829fffdee4f814aba94745a0d62b0a6d80b467c`  
**Source of review:** Project Owner pasted a NotebookLM independent review report into the conversation. Structured transcription (not the original report file) at `TEMP_R34_USER_SUBMITTED_NOTEBOOKLM_VERDICT_TRANSCRIPTION_20261018.json`. The report spells the packet filename with a final date digit missing; the actual review packet is `TEMP_R34_NOTEBOOKLM_SINGLE_ITEM_POST_REVISION_REVIEW_20261018.md`.

## A. Claims that can be independently corroborated now

**Mathematical correctness and unique answer — verified.**

The corrected question asks for the *specific equation of the abscissae of the intersections*. Setting `x²=3x+4` gives `x²−3x−4=0`, option A / index 0. Options B, C and D are not the equation obtained by equating the two named curves; the old root-count ambiguity is eliminated. The unchanged explanation supports this derivation.

**Source and change integrity — verified by repository QA.**

The report's current bank blob and item SHA-256 match the exact R34 approved version. Four options in original order, answer index 0, unchanged explanation, ID, tags and two neighboring questions are confirmed. The R27 historical blob remains independently source-locked. Public Math CI on commit `cf6571934176151a98b1b53506135c3755198745` has completed **SUCCESS** (run `39104671160`). The current branch may be ahead after adding this audit receipt; its CI must be checked separately.

**Recorded reviewer verdict:** `CONTENT_CORRECTNESS=PASS`, `ANSWER_UNIQUENESS=PASS`, `EXPLANATION=PASS`, `S1_CITATION=PASS`, `OVERALL_ITEM_VERDICT=PASS`. This is a *reviewer recommendation*, not a newly authorized Owner Academic PASS. No production authorization.

## B. Claims that cannot be promoted without more specific evidence

**Evidence type `STRUCTURAL_CLONE` — disputed as a strict SGK comparison.**

The cited SGK Toán 9 KNTT T2 Bài 18 pp4–9 establishes `y=ax²`; Bài 19 pp10–17 teaches quadratic equations; the GeoGebra activity printed p113–114 involves finding line–parabola intersection using software. The reviewer has *not cited an SGK task using the same manual step of setting the two expressions equal to form the abscissa equation*. The evidence supports necessary underlying concepts and a related graph-intersection theme, but not automatically a same-reasoning `STRUCTURAL_CLONE`. For now record `CONCEPT_BASE` as the **editorial alternative**, not as an applied canonical field, and keep the exact source-alignment question open until a closer S1 item is produced.

**`Entrance10` layer — unsupported S3 frequency claim.**

The NotebookLM prose asserts that this problem form is compulsory in *most* official Grade-10 entrance exams nationwide. It gives no list of real official papers, years, localities, denominator, sample definition, or duplicate controls. Under `02_NOTEBOOKLM_MATH_REVIEW_RULES_v1.2.md` §§3–5 and `04_ACADEMIC_SOURCE_AND_DEPTH_AUDIT_RULES.md` §§6–7, this frequency statement must be rejected as **INSUFFICIENT_S3_EVIDENCE**. Entrance10 may remain a proposed layer for transfer reasoning, but is **NOT APPROVED**; a genre label by itself is not official exam corpus evidence.

An S1 `CITATION=PASS` can be accepted as *accurate prerequisite page references* without treating the same pages as evidence of an exact or same-step clone. Academic correctness and layer classification are distinct gates.

## B2. Targeted authentic S3 source check (two official exam documents; not a prevalence sample)

Two externally published **official exam documents** were inspected, kept in distinct locality/year strata (not blended as a representative sample):

| Exam document | Actual task | Relevance to R34 | Source provenance |
|---|---|---|---|
| TP.HCM, general Grade-10 entrance, **07/06/2024**, *official examination* | Bài 1(b) asks to find the coordinates of intersections of parabol `y=−x²` and line `y=−3x+2` **by calculation**, which requires equating the two function expressions | **Positive S3 authentic example** of the composite line–parabol intersection method; NOT identical question or numbers to R34 | [Official paper facsimile published by Thanh Niên](https://images2.thanhnien.vn/528068263637045248/2024/6/11/de-thi-ts10-nam-hoc-2024-2025-mon-toan-1718094330432471608733.pdf), printed page 1, Bài 1; original paper visibly labeled *Sở GDĐT TP.HCM — ĐỀ CHÍNH THỨC* |
| Hà Nội, general Grade-10 entrance, **08/06/2025**, *official examination* | Full two-page paper does **not** include a line–parabol intersection task | **Negative S3 verified example**; mathematical prerequisites (quadratic equations, etc.) appear elsewhere but not the composite intersection exercise | [Sở GDĐT Hà Nội source article](https://hanoi.edu.vn/phong-quan-ly-thi-va-kdcl/ha-noi-cong-bo-de-thi-va-dap-an-cac-mon-toan-ngu-van-ngoai-ngu-khong-chuyen-ky/ctfull/552/16329), attached [official PDF](https://quantrisgd.shieldix.app/data/doc/2025/hanoi/qlt_kdcl/2025_6/11/1-detoankhong-chuyen_116202515.pdf), pages 1–2 |

**Bounded inference:** These are **2 deliberately selected examples from different cities/years**, not a population sample; a crude count `1/2` is **not** a nationwide rate and must not be used to claim “most,” “mandatory,” or school-wide exam frequency. The positive paper demonstrates *authentic transfer/exam use* for an algebraic intersection problem; the negative paper demonstrates it is *not universal*. No assertion about specialist-school papers or mock papers is inferred.

**Master Plan v1.2.1:** `Entrance10` is defined as *transfer, applications, Grade-10 entrance preparation*. It **does not require** the item to occur in most official papers, and exam frequency does not redefine `KNTT-Core`. Therefore **`Entrance10` is a plausible editorial layer candidate for R34 on the basis of composite method and one authentic S3 example**, but the choice between `Core-Support` and `Entrance10` must be made through the Project Owner's curriculum-layer gate. The existing recorded `approved_primary_layer=null` remains correct; the report's unsubstantiated nationwide frequency sentence stays rejected.

The S3 exam example does **not** change the **S1 textbook evidence-type** conclusion: original KNTT Grade-9 textbook examples observed so far show foundational function/quadratic methods and GeoGebra intersection activity; `STRUCTURAL_CLONE` remains unverified as a same-manual-method *SGK* clone. Candidate `CONCEPT_BASE` remains unchanged.

---

## C. Decision matrix (this reconciliation)

| Gate | Status | Application |
|---|---|---|
| Reviewer content correctness | `PASS_REPORTED_AND_MATH_CONFIRMED` | Record reviewer outcome; no live extra credit |
| Reviewer answer uniqueness | `PASS_REPORTED_AND_MATH_CONFIRMED` | Old P0 phrasing resolved |
| Reviewer explanation | `PASS_REPORTED_AND_CONFIRMED` | Original explanation retained |
| Current source integrity | `MATCH_CONFIRMED` | Blob and item SHA match |
| S1 page references | `CONCEPTUAL_REFERENCES_CONFIRMED` | Grade 9 source-page grounding; exact method still requires careful classification |
| Evidence class `STRUCTURAL_CLONE` | `HOLD_DIRECT_STRUCTURAL_S1_EVIDENCE` | Candidate `CONCEPT_BASE`, not applied |
| Reviewer layer `Entrance10` | `HOLD_AUTHENTIC_S3_AND_OWNER_LAYER_DECISION` | No production layer write |
| Owner final Academic PASS | `NOT_YET_AUTHORIZED` | Unchanged |
| Merge / production / learner history | `NOT_AUTHORIZED` | No effect |

**Action:** Preserve the user-supplied R34 review report and positive mathematical verdict, but do not silently approve source type, exam frequency claim, or curriculum layer. Keep Draft PR #520 while the Project Owner reviews the two qualifications; do not retroactively change R27/R33 historical receipts. No new NotebookLM review is required for the already corrected mathematics unless evidence of another issue arises.

**Safeguards:** `academic_pass_authorized=false`, `production_skill_counter_authorized=false`, `curriculum_layer_change_authorized=false`, `release_authorized=false`, `history_backfill_authorized=false`.
