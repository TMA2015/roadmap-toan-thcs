# CĐ07 Core — R2 academic review result and reconciliation

**Verdict:** PASS (owner-provided NotebookLM R2 review in the conversation, 29 September 2026). This record preserves the review provenance and explicit metadata discrepancy instead of silently renaming the original report.

## Source identity and discrepancy

- Source document actually supplied to NotebookLM: \`content-staging/reviews/MATH-CORE07-TEACH-R2-20260929-NOTEBOOKLM.txt\`, Git blob \`446f984a1e38f260fec3e8568712c8fda4bbfa23\`.
- **As returned by NotebookLM**, the report header says \`MATH-CORE07-TEACH-R2-20260928\` and cites a TXT file with a \`20260928\` suffix, although the source created, uploaded and requested here has suffix \`20260929\`. This is an unresolved **report metadata/date mismatch**. It is recorded as such, not treated as a distinct file or a claim that the nonexistent \`20260928\` file was reviewed.
- The substantive report names all five exact IDs, matches all of the requested changes, and states PASS with no new mathematical/pedagogical faults. Review applies to the R2 content of the \`20260929\` source, not to any additional unidentified file.
- Independently reconciled candidate snapshot before approval metadata: \`docs/assets/data/curriculum/topic07-learning-workspace.json\` Git blob \`089db87f244c295922516b7b0ae6d2a5e77ce37b\`.
- Existing 15-item micro question bank: \`docs/assets/data/practice/07-phan-thuc-dai-so-micro-v1.json\` Git blob \`077d3e46a345343cf9219c7f46fa6b56a38d3b42\`.
- Academic context sources selected in NotebookLM: \`01_TOAN_THCS_MASTER_PLAN_v1.1.md\`, \`00_NOTEBOOK_MATH_PERMANENT_v1.1.md\`, and the R2 TXT above. The R1 TXT source was replaced. No claim that the textbook PDFs were part of this R2 selection.

## Explicit owner-supplied R2 results

| Stable card | R2 | Reviewed resolution |
|---|---|---|
| \`pt07-core-1\` | CONFIRMED | Defines fraction equality through \(AD=BC\) on the common domain \(B\ne0,D\ne0\), and states domain checking before substitution. |
| \`pt07-core-2\` | CONFIRMED | Explicit sign identities correct; previous worked example preserves \(x\ne0,4\). |
| \`pt07-core-3\` | CONFIRMED | Defines auxiliary multiplier as MTC ÷ old denominator and expands both numerator/denominator multiplications in the example. |
| \`pt07-core-4\` | CONFIRMED | Prior PASS content preserved, including the \(-2(x-1)=-2x+2\) pitfall. |
| \`pt07-core-5\` | CONFIRMED | Correct term “phân thức chia / số chia”; \(C\ne0,D\ne0\); example excludes \(x=0,-1\). |

The owner-supplied report states **overall PASS**: all three R1 blockers resolved, both earlier PASS cards retained, and no new mathematical or pedagogical errors observed. This result certifies the source-locked five teaching copies only. It is not a blanket approval for future generated chapters, bank changes, the whole Grade 8 syllabus, or a substitute for real-device visual QA.

## Controlled integration

- Mark precisely five \`teaching_copy\` records \`APPROVED\` with \`academic_review_ref\` pointing to this review record, and preserve the exact source snapshot and report header alias.
- Do not change original teaching content, question IDs, answer keys, scoring algorithm, or learner evidence as part of approval bookkeeping.
- Gate production on \`node scripts/test-core07-teaching-coverage.js --release\`, all PR workflows, \`mkdocs build --strict\`, and smoke tests of old and new URLs.
- #160: independent page pilot; #161: approved R2 teaching content and review gate. Merge in that order only after verifying the respective exact HEADs. Owner's real Safari QA remains post-release acceptance.
