# W2B Wave 1 — Owner Preview QA approval (2026-10-16)

**PR:** #468, isolated Preview `/preview/w2b-wave1-468/kien-thuc/04-bieu-thuc-dai-so/bai-tap/`.

**Academic source:** `04-WR-10` from NotebookLM W2B academic PASS. **Immutable proposed Practice variant:** `ALG04-RICH-W2B-01-V1`.

## Owner receipt

Following the request to check three input cases in question 4/4, the owner replied **"pass."** This is explicit owner approval of the three requested cases on the isolated Preview:

| Test | Four input cells | Expected result | Owner verdict |
| --- | --- | --- | --- |
| Correct | `0`, `0`, `-2`, `-2` | Chính xác | PASS |
| Incorrect | `1`, `0`, `-2`, `-2` | Chưa đúng | PASS |
| Incomplete | `0`, `0`, `-2`, empty fourth | Chưa tính lượt, must fill in | PASS |

**Evidence type:** owner textual PASS acknowledgment; the owner did not attach individual screenshots in this acceptance message. This receipt does not claim direct production-browser observation.

## Release boundary

Prior to this receipt the PR #468 head `127f3fa4b94f6df8733075de04cd4156b7a7068a` completed both independent GitHub checks successfully: `verify` and `preview`. Final release still requires removing the branch-only preview publishing workflow, exact final-head CI SUCCESS, merge with branch-head lease, GitHub Pages deploy and published v6 source verification.

No existing MCQ, Micro, historical Practice attempts, independent Core Readiness, or canonical Written item may be rewritten. The interactive four-field grade is formative; it does not prove the complete written algebraic derivation.
