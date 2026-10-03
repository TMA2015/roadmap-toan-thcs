# B07 — Final reconciliation (all three phases)

**Source main SHA:** `88143e6b2690edfe721f8d74d2dbcb251bc55ab3`; B07 stage SHA `4c059bc165b25fae61810e8eb2c4a938cfc3862b`. Status: `PROPOSAL_ONLY`.

B07 contains 59 unique original questions in the selected CĐ24 tags: A 26/26, B 13/13, C 20/20. NotebookLM: 58 PASS + 1 REVISION_REQUIRED. Source-based independent reconciliation: **57 PASS + 2 REVISION_REQUIRED**. No missing or duplicated item ID, though nine pairs are exact clones across micro/bank. The B07 source does not cover the entire 135-question topic bank.

Issues:
- `MOD24V1__024`: ambiguity whether 120 km denotes whole trip or first half. Intended 2.5h requires 60km in each half; if first half 120km, total is 5h.
- `MOD24V1__040`: model for a **single job** gives fraction 2/x after two hours only when x>=2. Source merely states x>0; for 0<x<2 the job is completed before two hours.
- Three source answers at index 1: `MOD24V1__122`, `MOD24V1__125`, `MOD24V1__126`. Others index 0 in the locked bank, not necessarily the displayed option after UI shuffling.
- The new rounding micro-test proposed by NotebookLM Phase B is non-diagnostic: both strategies in its own example produce 37,000 VND. Do not import unchanged.
- Nine exact micro/bank clone pairs verified by equal question, options, answer index and explanation. Formative repeats may remain but are not nine extra independent assessments.

Proposed changes for the two original bank questions are kept in separate **Draft PR #155**. No merge, deployment, ID/tag/answer-index change, learner counter migration or skill engine enablement. Ledger JSON stores all 59 exact original IDs and their source SHAs. The previous B06 draft corrections remain in PR #153; earlier B05 notation fix in PR #151. Keep all academic review results `PROPOSAL_ONLY`.

**Handoff:** No further NotebookLM phase is outstanding for B07. Do not rerun A/B/C. Next project is the English project in its own chat. Math resumes from this final review ledger only when the owner requests it.
