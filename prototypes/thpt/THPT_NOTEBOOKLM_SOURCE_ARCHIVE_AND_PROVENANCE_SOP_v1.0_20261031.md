# THPT NotebookLM — Durable review-source archive and evidence-based provenance SOP v1.0

**Effective:** 31/10/2026. **Lane:** A1–A7 educational content authoring. **Owner instruction:** standard-compliant academic evidence is resolved by the content team; **do not request owner approval for ordinary source/parity decisions**. Owner approval remains mandatory for actual release, major scope changes and modifications to learning data.

**Authority order:** owner decision > THPT Dual Complete Learning Paths Project Source 08 v2.0 > NotebookLM handoff Source 06 v1.0 > batch/delta Source 07 v1.1 > this SOP. This SOP adds source-retention controls; it does not relax math review, item independence, scoring or release gates.

## 1. Permanent, recoverable source of truth BEFORE asking NotebookLM to review

Each unique \`PACKET_ID\` and each reviewer run \`Rxx\` must have an **immutable source snapshot** and a **machine-readable local/private manifest** recording \`packet_id\`, \`source_version\`, original basename, file size, SHA-256 of exact bytes, expected outcome/item/HELP/figure IDs, source authority, prior review lineage, revision class, archive location and review state.

- **Public, non-sensitive formative content:** persist complete exact academic source on the existing authorized GitHub **authoring** branch; pin the **full Git blob SHA**, commit and UTF-8 SHA-256, with a fixed versioned path. Never mutate that frozen snapshot in place; use a new Rxx version if math/rubric changes.
- **Unpublished Chapter/Topic Readiness questions, answers, rubrics or proprietary review source:** **DO NOT put the text in the public GitHub repository**. Persist exact file bytes in the private ChatGPT Library path \`/Math App/THPT_Academic_Review_Archive/\` (or another approved non-public artifact store), with a private SHA-256 manifest. Public GitHub stores **only non-secret packet ID, file checksum/byte count, approval scope and safe decision receipt**. Do not expose source text, keys, or private download locations as public website artifacts.
- **Immediately after archive write:** list/read archive metadata to prove the file exists, size matches; for critical reconstruction, perform a restore into the working container and recompute SHA-256. **Archive failure means NO NEW REVIEW HANDOFF.**
- **Before outputting a user-facing link:** confirm exact \`/mnt/data\` file exists. One/two Temp Markdown or TXT files => one/two links; 3+ => Temp ZIP (decompress before uploading). If the NotebookLM UI cannot ingest Markdown, create a PDF/DOCX transport from the **same source** and include a source hash manifest; the PDF is not evidence of byte-identical Markdown.
- **Do not rely on** a chat attachment, a transient \`/mnt/data\` path, a review Studio report, or an unverified filename *as the sole copy*. These can become inaccessible in later conversations.

## 2. Review receipt must bind to content, not just the headline verdict

On the owner's NotebookLM report, store (a) the complete owner-supplied review text/file, if available, (b) scope, review \`PACKET_ID\`, 5 permanent sources v2.0 and S1 SGK/SBT receipt, (c) \`ITEM_VERDICT\` and \`OUTCOME_MATRIX\` reconciliation, (d) severity and \`MINIMAL_DELTA\`, (e) source hashes and where **actual byte parity was / was not** verified.

Mark exact scope state \`AUTHORED\` / \`NOTEBOOKLM_REVIEWED\` / \`CONTENT_READY\` / \`PR_INTEGRATED\` / \`QA_PASS\` / \`PUBLISHED\`. Do not collapse these states or infer Topic PASS from Chapter PASS. A PDF transport and Markdown reviewer response can be academically equivalent while having different bytes.

## 3. Standards-based resolution of a missing *historical Temp file*

When a historical Temp cannot be recovered:

1. Verify an **immutable effective source snapshot** exists (complete exact reviewed learner text/conditions/key/rubric as relevant), pinned by Git blob/hash, unique canonical/HELP IDs and unchanged linked item IDs.
2. Verify external NotebookLM reviewer **explicitly** checked the effective source for the affected item, with \`SOURCE_EQUIVALENCE_VERDICT=PASS\` / accepted delta and \`P0=P1=0\`; ensure mathematical statements, inequalities, answers, conditions, steps and mappings match.
3. Verify no substantive academic source change (\`DELTA_A\` or documented \`DELTA_B_SOURCE_EQUIVALENT\`) and the previously reviewed source for all unaffected items is unchanged.
4. Preserve \`HISTORICAL_TEMP_BYTE_PARITY=NOT_VERIFIED\` **forever unless the original exact bytes are recovered**. This is **not** an academic P0 or release blocker by itself when step 1–3 support alternate provenance.
5. Record \`EFFECTIVE_SOURCE_PROVENANCE=ACCEPTED_BY_EVIDENCE\`, the exact blob/review receipt, reviewer scope, checklist and responsible lane. **Do not ask the owner to decide which mathematically correct source to use.** No automatic permission to merge/deploy, activate grading or Mastery.
6. If source/answer/rubric differs materially, effective text is incomplete, reviewer verdict conflicts, or there is no trustworthy full reviewed effective source, classify \`DELTA_C\` or \`DELTA_D\` and request scoped academic re-review. Escalate to owner only for real product-scope/release/data decisions.

## 4. CHV B12 HELP02 R02 application (31/10/2026)

- Effective, single-use five-step source: \`prototypes/thpt/content-drafts/THPT_G10_CHV_B12_D6_HELP02_R02_CANONICAL_SOURCE_OVERLAY_20261030.md\`, immutable Git blob \`913400d6aff63befac95a8a47a00870663dd0096\`.
- Independent scoped owner NotebookLM R02 PASS and corroborating R03 \`PACKET_ID=THPT-G10-CHV-B12-HELP02-R02-EFFECTIVE-SOURCE-VERIFY-R03-20261031\`: \`SOURCE_EQUIVALENCE_VERDICT=PASS\`, \`D6_FIVE_STEP_VERDICT=PASS\`, \`FORMULA_AND_CONDITION_VERDICT=PASS\`, \`P0/P1/P2=0\`, \`MINIMAL_DELTA=0\`; original \`THPT-G10-B12-P06\` unchanged.
- Effective mathematics: approximate \`a != 0\`; relative error is \`Delta_a / |a|\`; from \`Delta_a <= d\` derive only \`delta_a <= d/|a|\`, not equality.
- Frozen unaffected R01 authoring snapshot \`49502fe39cf0a67f6a3e973a77f94164150637a7\`; HELP01 R02 separately independently approved \`2cecaba020881a560bc33251c38d55cc10a05516\`. Exactly 6 canonical D6 HELP_IDs, 27 old public canonical items/14 outcomes preserved.
- **Decision:** \`EFFECTIVE_SOURCE_PROVENANCE=ACCEPTED_BY_EVIDENCE\` **only for HELP-G10-B12-02@R02**; \`HISTORICAL_TEMP_BYTE_PARITY=NOT_VERIFIED\`; \`NOTEBOOKLM_REREVIEW=NOT_REQUIRED_NO_MATERIAL_DELTA\`; \`CHV_AUTHORING_A1_A7=CONTENT_READY_PUBLIC_FORMATIVE_ONLY\`.
- **Separate release gates:** R1 checks content-integrated blob and canonical dedup on actual head; R2 CI/mobile/THCS; R3 learner UI; R4 self-check safety; R5 owner release permission. None is granted here.

## 5. Bootstrap recovery archive performed on 31/10/2026

Created private Library folder \`/Math App/THPT_Academic_Review_Archive\` and verified listing of 10 exact working review-source files plus a \`THPT_PRIVATE_REVIEW_ARCHIVE_MANIFEST_20261031.json\` with SHA-256/byte counts, including CHI RD0/RD1, CHIX outcome crosswalk, CHII–CHV RD1, CHVII R03, CHVIII RD1 and original CHVI Temp batch ZIP. These **private source bytes stay outside GitHub**. Archive is a recoverable backup, not independent academic PASS and not an authorization to release.

**Operational checkpoint template:** \`PACKET_ID | ORIGINAL_FILE | ARCHIVE_POINTER | SHA256 | GIT_BLOB_IF_PUBLIC | REVIEWER_VERDICT | OUTCOME_ITEM_RECONCILIATION | DELTA_CLASS | NOTEBOOKLM_REREVIEW | RELEASE_STATUS\`.

This file is a process addendum, not a replacement for five permanent NotebookLM sources v2.0 or the Math App project sources 06–08.


## 6. Mandatory post-PASS canonicalization — never leave reviewed content in Temp-only state

**Root-cause incident, G10 ChIX R0 on 28/10/2026:** At ~17:32 ICT a standalone ChatGPT sandbox markdown was sent as `Temp_THPT_G10_CHIX_SGK_CHAPTER_READINESS_6_HELDOUT_CANDIDATES_REVIEW_20261028.md`. NotebookLM later referenced `Temp_THPT_G10_CHIX_SGK_CHAPTER_READINESS_6_HELDOUT_CANDIDATE.md` (slightly different historical filename) and independently PASSed six held-out RD01–RD06. However only metadata/IDs/verdicts were retained in GitHub: **no durable exact reviewed 6-item canonical source** was captured; file-only sandbox delivery expired from the next workflow context. This is an authoring asset-control failure, distinct from the correctly retained 16 PUBLIC_FORMATIVE_ONLY items for B26–B27.

For **every** NotebookLM PASS, authoring MUST execute in the same review intake workflow, before marking A1–A7 content handoff COMPLETE:

1. Identify exact reviewer-tested `PACKET_ID`, source file(s), SHA-256 and set of canonical `item_id`, `outcome_id`, `HELP_ID`; resolve/record all filename aliases **as aliases only**.
2. Create/pin **the production-ready canonical reviewed content**, not just the verdict metadata. Public learning items and reviewed shared content -> versioned existing GitHub authoring repo source with content, answer/solution/rubric and source blob. Unreleased independent Readiness candidates -> versioned **private canonical item bank file**, stored in the private Math App Library archive with full original stem/key/solution/rubric and crosswalk. No separate repo/backend required. Canonical item identity remains 1 item/1 `item_id` regardless of placement.
3. Treat `Temp_*.md` as **NotebookLM transport/source evidence only**: keep its exact bytes in the same archive for traceability, but release must consume the **source-locked canonical bank**, not depend on a sandbox download URL or the Temp filename.
4. Cross-check counts and content parity `REVIEWED_ITEM_IDS = CANONICAL_ITEM_IDS`, no duplicate or unexpected IDs, independent reviewer verdict applies to exactly this byte/semantic snapshot; explicitly mark what changed in presentation.
5. **Restore test:** re-read the stored final canonical asset from the durable store and check exact byte digest/size; do not mark `A1_SOURCE_SNAPSHOT` or `A6_HANDOFF_COMPLETE` until RESTORE_PASS and manifests point to a live source. If restore fails, keep `AUTHORING_BLOCKED_SOURCE_NOT_PERSISTED`.
6. On later DELTA_C edit, create a new version and independently review affected content only; never overwrite the already PASS version, never inherit prior PASS.
7. A technical release-lane change to browser answer secrecy/security may alter future public placement under owner-approved architectural policy, but **does not remove source archival/academic QA requirements**. Do not conflate static self-check scoring with independently protected Skill Mastery.
8. Final handoff includes three independently checkable fields: `ACADEMIC_PASS_SNAPSHOT`, `CANONICAL_SOURCE_RESTORE_PASS`, `RELEASE_AUTHORIZATION` (usually NO). A PASS report alone is never sufficient to certify canonical asset custody.

**Legacy remediation CLOSED for G10 ChIX, 31/10/2026:** Owner recovered the complete original six-item R0 authoring Temp (18,127 bytes, SHA256 `4f1da6dcbd85ba84c272450acbf6e64856732047586567754b1737584a7c4b32`). Exact six original item blocks (full stems/keys/solutions/rubrics) were promoted unchanged to a **private canonical source** (12,448 bytes, SHA256 `d27e8361d3356ac9f0b224aaa3cbaea61ad02eed4510a8a3489b89ebd4cc5a96`). Original Temp, canonical file and SHA256 manifest were stored in `/Math App/THPT_Academic_Review_Archive/` and independently restored with exact byte parity 3/3 PASS; 6/6 item IDs and 10/10 outcomes reconcile with the independent NotebookLM R0 verdict. Only the stored academic-source custody problem is now **CLOSED**. Source reviewer did not provide its historic upload hash; do not fabricate retroactive input-byte parity. No release/Readiness/Mastery activation is authorized.

**Required executable pre-handoff check:** `node scripts/check-thpt-canonical-custody.cjs <PRIVATE_TEMP.md> <PRIVATE_CANONICAL.md> <PRIVATE_MANIFEST.json>`. The validator is included on the G10 audit authoring Draft PR #641 (script contains **no** private stems/answers) and checks exact source/canonical SHA, complete item block parity, unique ID registry, required stem/key/solution/rubric sections, independent verdict, `RESTORE_PASS`, and no release/Mastery authority. Run locally against the **restored** private files; do not print their contents into CI logs or upload them as public CI artifacts. When other source templates differ, adapt parser and add negative QA fixtures *before* using them in a future batch.

**No premature A1–A7 closure:** mark `CANONICAL_SOURCE_RESTORE_PASS=YES` only after actual archive restoration checks; NotebookLM PASS alone never establishes this. Release R1–R5 stay with release lane; source authoring cannot merge/deploy.
