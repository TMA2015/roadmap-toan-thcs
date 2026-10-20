# W3 D1–D6 P1 — Source-grounded minimal-delta triage + one CT07 optional diagnostic candidate

**Packet ID:** \`MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020\`  
**Status:** \`TRIAGE_PREPARED / CT07_CANDIDATE_AUTHORING_NOT_REVIEWED / NO_DEPLOY_AUTHORIZATION\`.  
**Input academic report:** Owner-submitted independent NotebookLM \`MATH-CT05-07-W3-CLOSURE-DEPTH-D1D6-R0-20261020\`, \`40/40\`, \`OVERALL|PASS_FOR_DEPTH_REVIEW\`, 3×(D1/D2/D3/D4/D6 PASS; D5 INSUFFICIENT_SOURCE), no P0 math errors reported. Receipt: \`MATH-CT05-07-W3-D1D6-R1_NOTEBOOKLM_VERDICT_RECEIPT.md\`.

**Review-only, unchanged baseline:** 15 Core Cards, 360 CT05–07 Practice MCQs (120/topic), 12 CT05–07 Written in shared library of 69. No migration, no count change, no runtime scoring, no newly allocated canonical MCQ ID.

## P1-01 — distinguish Roadmap review priority from real exam frequency

Exam-frequency or past-exam probability claims require an actual provenance-verifiable **S3 exam corpus** and clear period/population/denominator. Nothing in this packet supplies one: every D5 cell therefore stays \`INSUFFICIENT_SOURCE\`, *regardless of* the general D1/D2/D3/D4/D6 PASS.

Verified current live theory text from \`main\`:
- \`docs/kien-thuc/05-7-hang-dang-thuc/index.md\`, \`## 🚀 6. Dạng bài thi vào lớp 10\`: table column **Mức ưu tiên Roadmap**, explanatory note: *“Mức sao thể hiện mức ưu tiên ôn tập trong Roadmap, không phải cam kết dạng bài xuất hiện trong mọi đề thi.”* It does **not** say the stars are S3 measured frequency.
- \`docs/kien-thuc/06-phan-tich-da-thuc/index.md\`, \`## 🚀 6\`: *“Mức sao dưới đây thể hiện mức ưu tiên ôn tập của Roadmap.”* This is study priority, not authenticated annual exam frequency.
- \`docs/kien-thuc/07-phan-thuc-dai-so/index.md\`, \`## 🚀 6\`: table labelled **Mức ưu tiên Roadmap**, not statistical exam incidence.

**Decision:** \`NO_LIVE_COPY_CHANGE_NOW\` for these three verified pages. Add a clear evidence limitation in the academic review receipt and later S3 audit. Do **not** delete editorial Roadmap study-priority stars solely because NotebookLM says no S3 frequency evidence. If other UI reports claim actual exam percentage/counts, verify their exact wording and provenance separately; no sweeping claim that the whole website is free of this issue.

## P1-02 — CT07 nonzero divisor: precise evidence and genuine diagnostic gap

**Already present in \`main\`:**
- \`docs/assets/data/curriculum/topic07-learning-workspace.json#pt07-core-5\` states that fraction division by \(\frac{C}{D}\) requires both \(D\ne0\) and \(C\ne0\); example \(T=\frac{x^2-1}{2x}:\frac{x+1}{3x}\) preserves \(x\ne0,-1\).
- \`docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json\` contains \`RAT07MICRO_013\`–\`015\` for the relevant Core 5; Micro 014/015 ask for **calculation** with domain already stated, and do not require choosing the nonzero-divisor restriction independently.
- \`docs/assets/data/practice/07-phan-thuc-dai-so-v1-04.json\` contains **eight isomorphic division items** \`RAT07V1_101\`–\`108\`; each evaluates an analogous expression with variable parameter \(1,\ldots,8\), output \(1\), correct option index 0. All explanations mention **the divisor must be nonzero** and the correct original domain \(x\ne\pm k\). But none of these eight is a standalone **select the full original domain** question: the MCQ options are algebraic result expressions, not alternative sets of excluded \(x\) values.
- Source \`docs/kien-thuc/07-phan-thuc-dai-so/bai-tap.md#07-WR-09\` is academically placement-reviewed and emphasizes the extra **divisor numerator** restriction \(x\ne1\), over and above original denominators \(x\ne-1\).

**Decision:** \`NEEDS_DISTINCT_DIAGNOSTIC\` narrowly for recognition of a zero-valued **divisor**, not for adding routine rational-division arithmetic volume. Do not append eight more clones or change any old option/ID, grade, learner score, skill threshold or user history. A single proposed focused **new MCQ** could address this if its independent authoring and owner release gates PASS. Alternative \`NO_CHANGE\` if independent review determines Core Card feedback already sufficient.

## One newly authored concept-probe candidate — academic authoring only (NOT LIVE)

**Temporary candidate ID (not a released MCQ ID):** \`P1-CT07-DIV-DOMAIN-R0\`  
**Topic/layer:** CT07 · KNTT-Core · Bài 24 · \`chia-phan-thuc\` / \`dieu-kien-xac-dinh\`. This tests **Core concept knowledge** only, not Entrance10/Challenge nor automatic remediation.
**Source lineage:** \`07-WR-09\` and current \`pt07-core-5\`; this item is deliberately **question-type distinct** from \`RAT07V1_101\`–\`108\`, which assess computed results rather than independently chosen denominator-and-divisor restrictions.

### Student-facing item

Cho biểu thức
\[
Q=\frac{x^2-1}{x^2+2x+1}:\frac{x-1}{x+1}.
\]
Với \(x\in\mathbb R\), **điều kiện xác định đầy đủ của biểu thức ban đầu** là gì?

### Exact four options and reasoning evidence

- **A.** \(x\ne-1\). **Incorrect**: checks original denominators only, omits \(x\ne1\) that keeps the **divisor nonzero**. Diagnostic signal: \`missing_nonzero_divisor\`.
- **B.** \(x\ne1\). **Incorrect**: checks divisor numerator but forgets denominator \(x+1\ne0\). Signal: \`missing_original_denominator\`.
- **C.** \(x\ne-1\) **và** \(x\ne1\). **Correct.** Both the original denominator \(x^2+2x+1=(x+1)^2\ne0\) and divisor denominator \(x+1\ne0\) imply \(x\ne-1\); the divisor \(\frac{x-1}{x+1}\ne0\) additionally implies \(x\ne1\).
- **D.** Mọi \(x\in\mathbb R\). **Incorrect**: cancels first and illegitimately extends the domain. Signal: \`lost_initial_domain\`.

**Correct option:** \`C\` (zero-based index \`2\`). **Domain:** \(\mathbb R\setminus\{-1,1\}\). Note: the quotient simplifies to \(1\) *only on this original domain*, so the simplistic answer “all real \(x\)” is false.

**Short progressive non-answer-spoiling feedback (if UI supports it):** “Viết điều kiện để mọi mẫu ban đầu khác 0; sau đó xét riêng điều kiện **phân thức làm số chia khác 0**, chứ không chỉ mẫu của nó.” Distractor signals are **candidate content tags, not pre-approved causal learner diagnoses**. Do not add them to live Skill/Readiness without separate registry evidence and rule review.

### Independent authoring review requested

Assess this single candidate with exact **four options, answer uniqueness, original-domain logic, diagnostic distinctness from 8 existing arithmetic-result MCQs and Micro Core 5, S1 Core placement, misconception feedback, and compatibility with existing MCQ answer contract**. If review suggests current material already tests the missing capability sufficiently, return \`NO_CHANGE\` instead of a new question.

Return a minimal verdict:

\`\`\`text
PACKET_ID|MATH-CT05-07-W3-D1D6-P1-MINIMAL-DELTA-R0-20261020
EXPECTED=1
REVIEWED=1
CANDIDATE_ID|P1-CT07-DIV-DOMAIN-R0
MATH|PASS / REVISION_REQUIRED
OPTION_UNIQUENESS|PASS / REVISION_REQUIRED
DISTINCT_FROM_CURRENT_MCQ|PASS / NO_CHANGE / REVISION_REQUIRED
S1_CORE_PLACEMENT|PASS / INSUFFICIENT_EVIDENCE
FEEDBACK_AND_HINTS|PASS / REVISION_REQUIRED
P1_01_D5|NO_LIVE_COPY_CHANGE / PRECISE_REVISION_REQUIRED
OVERALL|PASS_FOR_AUTHORING_REVIEW / NO_CHANGE / REVISION_REQUIRED / INSUFFICIENT_EVIDENCE
PRECISE_REVISIONS|...
\`\`\`

**Release boundary:** Neither \`PASS_FOR_DEPTH_REVIEW\` nor any authoring PASS is production authorization. If a new question is warranted, separately choose a canonical ID from the current ID allocation policy, write an implementation PR that **appends** without editing any of 360 existing CT05–07 MCQ records, passes unit/visual/browser QA and receives explicit Owner approval to publish. No live changes from this temporary packet.
