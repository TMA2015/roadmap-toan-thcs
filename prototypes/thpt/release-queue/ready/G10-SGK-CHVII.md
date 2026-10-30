# G10-SGK-CHVII — Chương VII — B19–22

PACKET_ID: G10-SGK-CHVII
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY
STATE: RELEASE_READY
SOURCE_COMMIT: d84053c3104bc13f2d6945234a3689cbaa6491a4
REVIEW_RECEIPT: prototypes/thpt/content-drafts/THPT_G10_CHVII_VIII_NOTEBOOKLM_D1D2_RD_RECEIPT_AND_RECONCILIATION_20261028.md [blob bd7ee513cef2a8a2a6bc44436cec488cf5384eb0] + THPT_G10_CHVII_VIII_NOTEBOOKLM_DELTA_R1_RECEIPT_20261028.md [blob f0be344d381b44e81a4a3669ad716d1b53423246] + THPT_G10_CHVII_VIII_NOTEBOOKLM_D5_R1_PASS_RECEIPT_20261028.md [blob 89037a16782fef9f0b9352974899eae395816e4a] (source branch content/thpt-g10-chvii-chviii-authoring-20261028); plus THPT_G10_CHVII_VIII_D6_NOTEBOOKLM_R02_PASS_RECEIPT_20261029.md [blob cd53c1f6d3fe225e9508f3f7f513a70c319b2612] on content/thpt-g10-chvii-chviii-authoring-20261028; approved source R02 blob 03755fb8e4a192df833820b2b01617de74035076; consolidated A1-A7 evidence CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md [authoring commit ef6434b20934e68fd58e5018f6cff03f6bc417f6]; D3D4 reviewer receipt 5cdf04e9b0a6cc9e6dfb645ee20b3994e072e7b1 and B25 P07 e63563121d6a67acf7185331e67b33e9acdb5a5c
CURRENT_PR: #625 (combined technical release candidate on current main); authoring #624; sources #620 (historic #614)
CONTENTS: 36 = 32 formative + 4 Written (1 Anchor); 3 D5 SVG

## A — nhánh biên soạn/review
- [x] A1_SOURCE_SNAPSHOT — SHA gói nội dung nguồn / từng file được khóa.
- [x] A2_SGK_SBT_SCOPE — SGK/SBT KNTT S1, đúng trang và phạm vi bài.
- [x] A3_NOTEBOOKLM_VERDICT — NotebookLM verdict theo đúng snapshot và phạm vi; không suy rộng PASS.
- [x] A4_ITEM_OUTCOME_IDS — LESSON/OUTCOME/ITEM canonical đối chiếu không trùng; Anchor là Written.
- [x] A5_D1_D6_SCOPE — 7/7 bài B19–B25: D1/D2 lessons, D3/D4 64 canonical public IDs, D5 4 reviewed SVG, D6 14/14 HELP_ID R02 PASS. CHVII chỉ PUBLIC_FORMATIVE_ONLY, không FULL_LEARNING_PATH hay Chapter Readiness activation; xem CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md.
- [x] A6_DELTA_RESOLVED — D3D4 reclassification & B25-P07 delta reviewed; SVG footer removal and Written prerequisite/microcopy are DELTA_A_UI or DELTA_B_SOURCE_EQUIVALENT (math/keys/rubric unchanged); D5 reviewed original SHA, D6 R02 PASS exact SHA; logged in A1-A7 evidence.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — Ready scope excludes ALL held-out Readiness; no client-held keys; 0 independent assessments active; SGK_CHAPTER and TOPIC evaluation separate.

## R — nhánh phát hành
- [x] R1_INTEGRATED_CURRENT_MAIN — PR #625 source branch reconciled with current main via explicit second-parent merge of commit 573fbdd4444f2e5c612f50e902f428b6064f6970; exact public formative source blobs preserved, canonical IDs unchanged; final integration QA required.
- [x] R2_EXACT_HEAD_CI — Release gate condition: **both** THPT R4 Preview and Roadmap PR Quality must report SUCCESS on final PR #625 HEAD after this checkpoint commit. Prior source HEAD 2de9b30f6793323ac54fd63a840ebebb781ddd2b passed runs #40882054456 and #40882054200. Release operator MUST verify exact final SHA and green statuses before merge.
- [x] R3_CLEAN_STUDENT_UI — 14 exact R02 D6 learner cards collapsed by default; source-parity 14/14; browser smoke desktop/iPhone/iPad emulation, THPT R4 route/nav, MathJax, solution-open figures and clean student-facing labels all passed CI #40879262630. Real-device UAT belongs to P2, remains pending.
- [x] R4_ASSESSMENT_SAFETY — PUBLIC_FORMATIVE_ONLY bank (57 formative + 7 shared Written) with no protected Readiness stems/answer keys, no active chapter/topic assessment or Mastery scoring. Chapter-end Readiness is information-only; validated in CI #40879262630 and #40879262741, no student-storage/Firebase change.
- [x] R5_OWNER_APPROVAL — Owner explicitly authorized 2026-10-29 merge/deploy of G10 SGK ChVII–VIII **PUBLIC_FORMATIVE_ONLY**, conditional on final exact-head CI PASS; excludes independent Tự kiểm tra, TOPIC_READINESS, Skill Mastery, protected item keys; no other scope.

## P — sau phát hành
- [ ] P1_DEPLOY_RECEIPT — Deploy workflow và HTML gh-pages xác nhận.
- [ ] P2_DEVICE_UAT — Owner desktop/mobile thực tế xác nhận, hoặc ghi rõ pending.

BLOCKER/NEXT: Owner scope approval granted conditionally. DO NOT MERGE until both final-head CI workflows SUCCESS and exact source/manifest reconciliation confirmed; after merge verify deploy workflow and real Pages HTML. P2 owner device UAT remains pending. Not FULL_LEARNING_PATH.
ACADEMIC_NOTE: CONTENT_READY is only the public formative source packet and learner support attachments. NotebookLM PASS is per D1/D2, D3/D4, D5, D6 exact snapshots; no new blanket chapter Academic PASS. Do not deploy, activate Readiness, or merge without R1-R5 and owner approval.