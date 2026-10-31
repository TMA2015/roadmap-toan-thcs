# G10-SGK-CHVI — Chương VI — B15–18

PACKET_ID: G10-SGK-CHVI
LEARNING_PATH: SGK_CHAPTER
RELEASE_SCOPE: PUBLIC_FORMATIVE_ONLY
STATE: PUBLISHED_SCOPED
SOURCE_COMMIT: 3ad8d87297f3dcc2e65b3d29350ba1ef933e3043
REVIEW_RECEIPT: prototypes/thpt/THPT_G10_CHVI_NOTEBOOKLM_ACADEMIC_VERDICT_RECEIPT_20261028.md @ main
CURRENT_PR: merged prior public scope #612; UI #617–619; new D6 authoring Draft #642 / technical Draft #643 (NOT merged/deployed)
CONTENTS: 54 reviewed (28 formative + 8 Written + 18 private Readiness); Readiness 0 active

## A — nhánh biên soạn/review
- [x] A1_SOURCE_SNAPSHOT — SHA gói nội dung nguồn / từng file được khóa.
- [x] A2_SGK_SBT_SCOPE — SGK/SBT KNTT S1, đúng trang và phạm vi bài.
- [x] A3_NOTEBOOKLM_VERDICT — NotebookLM verdict theo đúng snapshot và phạm vi; không suy rộng PASS.
- [x] A4_ITEM_OUTCOME_IDS — LESSON/OUTCOME/ITEM canonical đối chiếu không trùng; Anchor là Written.
- [x] A5_D1_D6_SCOPE — **AUTHORING SOURCE ONLY, PUBLIC_FORMATIVE_ONLY B15–B18**: D1–D5 nguồn 54-item batch cũ (28 public formative/application + 8 Written; 18 Readiness vẫn EXCLUDED) cùng D6 8/8 thẻ R01 được NotebookLM PASS riêng; 19/19 outcomes, không nhân bản canonical. Evidence: `prototypes/thpt/release-queue/CHVI_B15_B18_A5_PUBLIC_FORMATIVE_SOURCE_AUDIT_R02_20261031.md`. **Không** xác nhận 8 thẻ D6 đã phát hành/live, không tự cấp Chapter/Topic Readiness hoặc Mastery; R1–R5/P2 cho D6 vẫn chặn.
- [x] A6_DELTA_RESOLVED — Mọi thay đổi sau review đã có log A/B/C/D và review lại nếu cần.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — Public formative không chứa đáp án/keys held-out; SGK/Topic đúng scope.

## R — nhánh phát hành
- [x] R1_INTEGRATED_CURRENT_MAIN — Đúng content SHA được tích hợp lên nhánh current main, không clone câu.
- [x] R2_EXACT_HEAD_CI — CI/browser/MathJax/deep link/THCS PASS trên commit tích hợp cuối.
- [x] R3_CLEAN_STUDENT_UI — Chỉ nội dung học sinh; review/QA nằm trong checkpoint.
- [x] R4_ASSESSMENT_SAFETY — Không lộ đáp án trước Final Submit; demo không Mastery.
- [x] R5_OWNER_APPROVAL — Chủ dự án cho phép merge/deploy đúng PR, phạm vi và điều kiện.

## P — sau phát hành
- [x] P1_DEPLOY_RECEIPT — Deploy workflow và HTML gh-pages xác nhận.
- [x] P2_DEVICE_UAT — Owner desktop/mobile thực tế xác nhận, hoặc ghi rõ pending.

BLOCKER/NEXT: A5 authoring source audit PASS for PUBLIC_FORMATIVE_ONLY **only**. New 8 D6 are reviewed SOURCE CANDIDATES on Draft #642 and technically staged on #643, not yet in main/live website. Release lane must integrate/QA after owner permission: exact-final-head dual CI, physical Safari/Android P2, existing learner state/links, no Mastery or Chapter/Topic Readiness activation.
ACADEMIC_NOTE: Những ô A3 đã đánh dấu chỉ là verdict đúng snapshot/phạm vi, không chứng minh A5 tự động hoàn tất.
## 31/10/2026 — Scoped A5 authoring closure (not a D6 release)

- Source-only A5 corrected based on complete D1–D6 audit receipt `CHVI_B15_B18_A5_PUBLIC_FORMATIVE_SOURCE_AUDIT_R02_20261031.md` on authoring Draft #642. NotebookLM independently PASSed older D1–D5 and scoped D6 8/8 R01; no new mathematical author verdict, zero item edits, 19/19 outcome map, 36 public IDs retained.
- This manifest is a **proposed source-scope reconciliation on a Draft authoring branch**. Main remains a published historical formative slice without the new D6; CI PASS on #643 only validates that staged candidate head, not deployment or physical UAT.
- `A1_TO_A7_AUTHORING_SOURCE_COMPLETE_FOR_PUBLIC_FORMATIVE_ONLY`; `CHVI_NEW_D6_RELEASE_AUTHORIZATION=NO`; `MASTERY_ACTIVATION=NO`; `CHAPTER_READINESS_RELEASE=NO`.
