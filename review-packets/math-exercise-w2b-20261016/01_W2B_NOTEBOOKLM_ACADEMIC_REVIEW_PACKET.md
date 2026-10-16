# W2B — Independent academic review request: 12 still-unreviewed source problems

**Packet:** `MATH-EXERCISE-RECLASSIFY-W2B-20261016`  
**Review state:** NOT_STARTED. **No PASS/REVISE verdict exists yet.**  
**Repository source lock:** `455cf2d42b31f54a118e49120893e982fa96dcf6`.  
**Total legacy corpus:** 75 IDs; W1 reviewed 19, W2A reviewed another 12. **44 remain unreviewed**, including the 12 selected below. Academic review of W2B would leave 32 pending, provided every selected ID is actually evaluated.

## Authoritative review sources and boundaries

Select the current NotebookLM Math Rules v1.2, Master Plan v1.2.1, Golden Template, Academic Source & Depth Audit, and Written Exercise Library Contract, together with relevant original KNTT textbooks/official curriculum (S1). Replace old temporary W1/W2A packets in NotebookLM rather than accumulating versions. If an S1 school-grade claim cannot be verified, state INSUFFICIENT_EVIDENCE with missing source.

Review task stems and authored answer snippets in `02_W2B_VERBATIM_TWELVE_SOURCE_EXTRACTS.md`. These are repository-authored working materials, **not** independent proof of S1 placement, correctness or learner-grade suitability. Keep one Knowledge Graph, two learner pathways, and one Shared Written Exercise Library. An existing MCQ that gives the correct number is not sufficient evidence of full written reasoning.

## Exact 12 sources (in required verdict order)

| Source ID | Topic | Existing first source line (for orientation) |
| --- | --- | --- |
| `02-M3-01` | `02-so-va-phep-tinh` | 36 nam và 48 nữ được chia thành nhiều nhóm nhất sao cho mỗi nhóm có số nam bằng nhau và số nữ bằng nhau. Có bao nhiêu nhóm? |
| `02-M4-01` | `02-so-va-phep-tinh` | Tìm số tự nhiên nhỏ nhất lớn hơn 100, chia 12 dư 5 và chia 18 cũng dư 5. |
| `02-M4-03` | `02-so-va-phep-tinh` | Tìm số tự nhiên nhỏ nhất có đúng ba thừa số nguyên tố khác nhau và chia hết cho 6. |
| `03-M2-02` | `03-ti-le-ti-le-thuc` | Nếu 6 quyển vở giá 54.000đ, 10 quyển cùng loại giá bao nhiêu? |
| `03-M3-02` | `03-ti-le-ti-le-thuc` | Một công thức dùng bột và đường theo tỉ lệ 5:2. Có 750 g bột thì cần bao nhiêu gam đường? |
| `03-M3-03` | `03-ti-le-ti-le-thuc` | 12 máy làm 1 lô hàng trong 8 giờ. Với cùng năng suất, 16 máy cần bao lâu? |
| `04-WR-08` | `04-bieu-thuc-dai-so` | Cho \(A=(x^3-2x^2):x^2\), \(x\ne0\). Tính \(A\) tại \(x=5\). |
| `04-WR-09` | `04-bieu-thuc-dai-so` | Xác định bậc của \(P=5x^4-5x^4+2x^3-3x+1\). |
| `04-WR-10` | `04-bieu-thuc-dai-so` | Rút gọn \(M=(x+1)(x-2)-x(x-1)\), rồi tính tại \(x=4\). |
| `21-M2-08` | `21-thong-ke` | Một bảng ghi chiều cao dùng lẫn cm và m. Nêu lỗi và cách sửa. |
| `21-M3-06` | `21-thong-ke` | Một biểu đồ cột có trục dọc bắt đầu từ 90 thay vì 0, khiến chênh lệch trông rất lớn. Nêu rủi ro khi diễn giải. |
| `21-M4-04` | `21-thong-ke` | Một nhóm muốn khảo sát thời gian dùng điện thoại của toàn trường nhưng chỉ hỏi một lớp chuyên Tin. Hãy đánh giá tính đại diện và đề xuất cách chọn mẫu hợp lý hơn. |

## Independent reviewer tasks

For every one of the 12 IDs, independently check the source mathematics, authored answer/solution, assumptions and domain conditions, exact KNTT Grade / Chapter / Lesson grounding from an actual cited S1 source, cognitive depth, hints, frequent misconceptions and whether all requested reasoning can be meaningfully assessed through deterministic interaction.

Pay particular attention to these distinct structural issues:

- `02-M3-01`: equal-size group counts versus group composition; do not conflate them
- `02-M4-01`: smallest integer greater than 100 satisfying two remainder conditions; justify minimality
- `02-M4-03`: exactly three **distinct** prime divisors versus multiplicity of prime factors
- `03-M2-02`, `03-M3-02`, `03-M3-03`: separate direct proportion, mass units and inverse-work assumptions; detect identical live MCQ clones
- `04-WR-08`: division by polynomial term, nonzero-variable domain and evaluation
- `04-WR-09`: cancellation of highest-degree terms before degree identification
- `04-WR-10`: expand, simplify and evaluate; avoid credit for only final substitution
- `21-M2-08`: incompatible cm/m input units and correction rationale
- `21-M3-06`: misleading truncated bar-chart axis and scope of interpretation
- `21-M4-04`: biased sample and an actually representative sampling remedy

For each ID return all fields:

```text
source_id:
academic_verdict: PASS | REVISE | INSUFFICIENT_EVIDENCE
question_math_correct: YES | NO | UNCLEAR
original_answer_or_proof: ...
s1_grade_chapter_lesson: ... [citation] OR UNKNOWN
kntt_layer: KNTT-Core | Core-Support | Entrance10 | Challenge | UNKNOWN
cognitive_objective: ...
misconception_or_trap: ...
duplicate_status: VERIFIED_EXACT (cite grounded bank ID) | SIMILAR_FAMILY (evidence) | UNVERIFIED
recommended_route: REUSE_EXISTING | KEEP_WRITTEN | REVISE | CANDIDATE_INTERACTIVE | BLOCK
answer_contract_if_nominated: fields, correct/wrong/incomplete/invalid and equivalent forms; NOT release approval
written_rubric_if_needed: ...
source_confidence_and_missing_evidence: ...
```

Final response must provide **exactly 12 row verdicts in the table order above**, counts PASS/REVISE/INSUFFICIENT_EVIDENCE, corrections where needed, and one overall academic packet verdict. Do not infer `duplicate_status=NO_DUPLICATE` without the live complete bank; NotebookLM may mark UNVERIFIED and request a code-side scan.

**Strict release separation:** No code implementation, new question IDs, AI grader, mastery change, Readiness credit, source mutation or 12-item bulk import is authorized by a review packet or a raw academic PASS alone. The five separate W1 R2a REVISE items remain blocked until separately cleared.
