# Math — 4-Topic Exercise Conversion Academic Review Packet R1

**Packet ID:** \`MATH-EXERCISE-RECLASSIFY-W1-20261014\`  
**Target:** CĐ02, CĐ03, CĐ04, CĐ21 legacy question placement and **candidate** interactive answer formats.  
**Source lock:** the original \`docs/kien-thuc/<topic>/bai-tap.md\` pages on 2026-10-14, plus the existing \`assets/data/practice/*-micro-v1.json\`, topic Practice manifests and the Shared Written Library.  
**Status:** \`REVIEW_REQUESTED / NO_CONTENT_IMPORTED / NO_ANSWERS_REPLACED\`.

## Reviewer instructions and boundaries

This is an **academic** review under the NotebookLM Math Review Rules v1.2 and Master Plan v1.2.1, **not** the optional NotebookLM UX consultation. Review **each legacy item** and propose \`REUSE_EXISTING\`, \`ADAPT_INTERACTIVE\`, \`KEEP_PAPER_WRITTEN\`, \`MOVE_TO_INDEPENDENT_CHECK\`, or \`BLOCK_INSUFFICIENT_EVIDENCE\`. A question appearing under “Core KNTT” **does not itself prove** an exact grade/lesson placement.

For any \`ADAPT_INTERACTIVE\` decision, require a source-validated grade/skill mapping, the exact answer domain, correct answer/acceptable equivalents, input parser policy, units, common errors, feedback, version lineage and why that format measures the intended learning objective. For \`REUSE_EXISTING\`, give the *actual matching question ID* in the approved bank—never infer a match from similar words. For \`KEEP_PAPER_WRITTEN\`, provide a stepwise reasoning rubric and destination canonical Written item or proposed new ID.

**Do not import revised questions or expose answers through pre-submit Readiness.** No new historical grade/attempt credit. If the KNTT official grade/lesson or source review evidence is absent, mark \`INSUFFICIENT EVIDENCE\` and request it. Readiness/composite mode requires a separate blueprint and independent academic review even if formative items are approved.

## A. Representative source-locked items and proposed scope

### CĐ02: Số và phép tính

| Source item | Original question (verbatim mathematical task) | Existing authored solution | Conversion candidate | Critical review |
|---|---|---|---|---|
| \`02-G6-WR-01\` | “Tính \(24-3\cdot2^2+18:3\).” | \(2^2=4\), \(24-12+6=18\) | \`numeric\`, grade 6 practice/Core micro if placement confirmed | Test precedence misconceptions; check for reviewed duplicate |
| \`02-G6-WR-02\` | “Có 36 bút và 48 quyển vở. Chia được nhiều nhất bao nhiêu phần quà giống nhau để dùng hết hai loại?” | \(\mathrm{ƯCLN}(36,48)=12\); each: 3 pens, 4 notebooks | \`numeric\` for number of groups, plus worked feedback | Final number alone does **not** evidence correct gcd method |
| \`02-G6-WR-03\` | “Tính \(\frac56-\frac7{15}\).” | \(\frac{11}{30}\) | \`rational\` exact, accept mathematically equivalent fractions | Avoid floating point drift and string-only marking |
| \`02-G6-WR-04\` | “Một món hàng giá 800 000 đồng được giảm 15% giá ban đầu. Tính giá cần trả.” | \(680\,000\) đồng | \`numeric\` with explicit currency/unit contract | Accept \`680000\` and reviewed formatting; do not guess ambiguous unit |
| \`02-M2-03\` | “Sắp xếp tăng dần: \(-1,25;-\frac65;0;\frac34\).” | Check legacy \`Đáp án nhanh\` (no independent per-item key in heading) | \`order_steps\` / ordered number IDs | Integer/rational comparisons and equivalent input; must review actual key |

### CĐ03: Tỉ lệ và tỉ lệ thức

| Source item | Original question | Existing authored answer source | Conversion candidate | Critical review |
|---|---|---|---|---|
| \`03-M1-01\` | “Lập tỉ lệ thức từ \(3\cdot20=4\cdot15\).” | Legacy sheet + answer block, not independent machine key | \`match_pairs\`, or structured relation builder | **Multiple equivalent proportions**; do not accept just one text string as only valid |
| \`03-M1-02\` | “Tìm \(x\): \(\frac{x}{12}=\frac58\).” | Legacy quick answers | \`rational\` exact | Strict equivalence, distinguish numerator/denominator errors |
| \`03-M3-01\` | “Bản đồ tỉ lệ 1:50.000. Hai điểm cách 7,2 cm trên bản đồ. Khoảng cách thật bao nhiêu km?” | Legacy selected guidance | \`numeric\` with \`km\` unit | Confirm conversions and multiple valid unit representations |
| \`03-M4-01\` | “Ba lớp quyên góp theo tỉ lệ 3:4:5, tổng 1.440 quyển. Tính số của từng lớp.” | Legacy quick answers | Three-field \`fill_blank\` | Score each component only with a reviewed rubric; order of classes matters |

### CĐ04: Biểu thức và biến đổi đại số

| Source item | Original question | Existing authored solution | Conversion candidate | Critical review |
|---|---|---|---|---|
| \`04-WR-01\` | “Cho \(P(x)=4x^3-2x+7\). Xác định bậc, hệ số của \(x^3\) và hạng tử tự do.” | 3; 4; 7 | 3-part typed \`fill_blank\` | Distinct fields: degree, coefficient, constant; all numeric exact |
| \`04-WR-02\` | “Thu gọn \(3x^2y-5xy^2+2x^2y+xy^2\).” | \(5x^2y-4xy^2\) | Typed coefficients for \`x²y\` and \`xy²\`, **or** paper | No general symbolic equivalence via naive string regex |
| \`04-WR-03\` | “Cho \(A=2x^2-x+3\), \(B=x^2+4x-1\). Tính \(A-B\).” | \(x^2-5x+4\) | 3 coefficient fields if learning goal is signs; **or** paper | Authored wrong-reason feedback for minus signs |
| \`04-CH-01\` | “Chứng minh \((x+1)(x+2)-x(x+3)\) không phụ thuộc vào \(x\).” | Expansion yields constant \(2\) | \`KEEP_PAPER_WRITTEN\` | Must explain cancellation and independence, not just enter “2” |

### CĐ21: Thống kê

| Source item | Original question | Existing authored solution | Conversion candidate | Critical review |
|---|---|---|---|---|
| \`21-WR-01\` | “Mã lớp 6A, 6B là dữ liệu gì? Số sách mượn 2, 4, 3 là dữ liệu gì?” | Category vs numerical data | \`match_pairs\` | Avoid mere label ambiguity; source curriculum grade mapping |
| \`21-WR-02\` | “Dữ liệu giả định từ biểu đồ cột: tổ A 14 cuốn, tổ B 20 cuốn. Chênh lệch là bao nhiêu?” | 6 cuốn | \`numeric\` with answer unit | Do not claim this evaluates authentic chart reading unless chart evidence exists |
| \`21-M1-01\` | “Tần số của một giá trị là gì?” | Legacy sheet answer section | \`single_choice\` only if option distractors reviewed, otherwise paper | Reuse existing suitable concept check before adding clone |
| \`21-M2-01\` | “Dữ liệu \(6,7,8,8,9,8,7\). Lập bảng tần số.” | Legacy answer section | \`fill_blank\` structured frequency table, or paper | Validate order and all frequency counts; consider equivalence of row ordering |
| \`21-M3-01\` | “Dữ liệu điểm: \(6,7,7,8,8,8,9,9,10,8\). Lập bảng tần số và kiểm tra tổng.” | Legacy answer section | structured table, **or** paper with rubric | Count validation alone ≠ evidence of reasoning |
| \`21-M4-01\` | “Cho dữ liệu \(5,6,6,7,7,7,8,8,8,8,9,9\). Lập bảng tần số và tần suất phần trăm.” | Legacy answer section | structured table with rational/percentage policy, **or** paper | Rounding, denominator, and multi-field scoring need explicit policy |

**All above are candidate formats, not approved math imports.** Where solution is not reproduced above, consult the complete attached original Markdown (including the original answer block) before deciding. The independent reviewer is not allowed to synthesize missing original answers as if they were sourced from the repository.

## A.1. Cross-reference findings from currently published Micro banks

**Evidence status: source-confirmed candidate matches, not independent academic approval of conversion.**

| Legacy item | Existing Micro item | Exact source comparison | Recommended triage |
| --- | --- | --- | --- |
| `04-WR-02` | `ALG04MICRO_005` (CĐ04 Micro) | **Exactly the same mathematical task:** both use \(\;3x^2y-5xy^2+2x^2y+xy^2\;\), with the same simplified result \(5x^2y-4xy^2\). The published Micro has four options and `card_id=alg04-core-2`. | `REUSE_EXISTING` for current single-choice practice, pending validation of its academic receipt and KNTT placement. An additional coefficient-entry version is a distinct *reviewed* item, not silent rewriting. |
| `02-G6-WR-02` | `NUM02MICRO_006` (CĐ02 Micro) | **Same gcd/gift problem family but different numbers:** legacy 36 pens/48 notebooks; Micro 24 pens/36 notebooks. Both currently result in 12 groups; this does not make their problem stems identical. | Check whether the existing family achieves the intended learning objective before adding a new near-clone. If added, keep a new ID and family/variant relationship. |
| `21-WR-02` | `STA21MICRO_004` (CĐ21 Micro) | **Similar bar-data difference skill, different datasets:** legacy compares 14 vs 20 books; Micro compares 12/15/8/10 tests, with answer 7. | Candidate skill/family overlap, **not** exact duplicate. The selected input type and evidence of true chart interpretation require review. |
| `03-M1-02` | `RAT03MICRO_005` (CĐ03 Micro) | **Same solve-a-proportion skill, different equations:** legacy \(x/12=5/8\); Micro \(x/8=3/4\), Micro `card_id=rat03-core-g7-2` and targeted R2 NotebookLM receipt. | Reuse existing reviewed skill example before inventing a near-duplicate; convert legacy only if it adds coverage/answer-mode value. |

**Source references:** `docs/kien-thuc/04-bieu-thuc-dai-so/bai-tap.md#04-WR-02`, `docs/assets/data/practice/04-bieu-thuc-dai-so-micro-v1.json#ALG04MICRO_005`; similarly exact legacy and `*-micro-v1.json` files for CĐ02/03/21. **Question-level Micro approval status is not uniform**; verify source-specific receipts before promoting any reused item to independent assessment. Existing published bank presence alone does not certify a new role.

## B. Critical crosswalk questions for approval

1. Which of these items are already substantively present under a verified, review-passed \`item_id\` in Core Micro, Topic Practice or Shared Written? Show actual IDs, source excerpts and a dedup verdict.
2. Which KNTT class/chapter/lesson *officially* owns the skill tested? Is this a **Core placement**, a prerequisite in a prior class or just an Entrance10/Challenge overlay?
3. Is right-answer-only scoring enough for each intended objective? If not, mark \`KEEP_PAPER_WRITTEN\` or require reviewed structured work fields.
4. Which numeric/rational conventions count as correct? Explicitly define fractions, decimals, units, tolerance, locale comma/dot, rejection vs wrong answers and accessible alternatives.
5. Which self-written exercises are useful for genuine reasoning and should be canonicalized in the 63-item Shared Written Library? Propose reference IDs; do not duplicate content.
6. Which legacy quick-answer groups could become per-topic independent checks? Require source KNTT scope and no pre-submit answer exposure, and **do not use mixed-grade Readiness scores as a single-grade mastery verdict**.

## C. Required item-by-item response format

For every item in Section A, return:

\`\`\`text
source_id:
source_file_and_heading:
academic_scope: grade/chapter/lesson (CITED) or UNKNOWN
decision: REUSE_EXISTING | ADAPT_INTERACTIVE | KEEP_PAPER_WRITTEN | MOVE_TO_INDEPENDENT_CHECK | BLOCK
canonical_reuse_id: actual verified ID or NONE
proposed_response_type: if approved candidate
correct_value_and_accepted_equivalents: cite source; no invention
misconception_and_feedback_evidence:
changed_math_or_placement_requires_review: YES/NO
review_result: PASS | REVISE | INSUFFICIENT_EVIDENCE | NOT_REVIEWED
reason_and_citations:
\`\`\`

**Packet verdict** must distinguish \`ACADEMIC_ITEMS_PASS\`, \`REVISIONS_REQUIRED\`, \`INSUFFICIENT_EVIDENCE\`. A positive opinion on presentation alone is not academic approval of new grading or curriculum mapping.

## D. NotebookLM source setup

**Permanent:** current Master Plan v1.2.1, NotebookLM Math Review Rules v1.2, Academic Source and Depth Audit Rules, Golden Learning Architecture, Shared Written Library Contract. Replace superseded versions rather than keeping contradictory permanent baselines.

**Temporary for this round:** this review packet plus the **four source pages** \`docs/kien-thuc/02-so-va-phep-tinh/bai-tap.md\`, \`03-ti-le-ti-le-thuc/bai-tap.md\`, \`04-bieu-thuc-dai-so/bai-tap.md\`, \`21-thong-ke/bai-tap.md\`; plus any exact reviewed Core Micro/Practice item subsets and official KNTT documents necessary to establish grade placement and reuse. If a source cannot be verified, explicitly return \`INSUFFICIENT_EVIDENCE\`. No UX-only NotebookLM review is required.

**Do not** issue a code/content release based on this packet until the academic receipt is reconciled with item versions and the owner approves the reviewed changes.
