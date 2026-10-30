# Học liệu THPT — đã phát hành và sẵn sàng bàn giao

## PUBLISHED_SCOPED · PUBLIC_FORMATIVE_ONLY

- [Chương VII](G10-SGK-CHVII.md): B19–B22; 32 formative + 4 Written, 3 reviewed SVG D5, 8 reviewed D6 cards.
- [Chương VIII](G10-SGK-CHVIII.md): B23–B25; 25 formative + 3 Written, 1 reviewed SVG D5, 6 reviewed D6 cards.
- Nguồn academic A1–A7: [hồ sơ ChVII–VIII](../CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md); merged #624, technical release merged #625; Deploy MkDocs #40888628016 SUCCESS, checked deployed `gh-pages` HTML and canonical bank blobs.
- P2 owner mobile Safari navigation issue addressed by merged/deployed PR #629; physical Safari retest remains separate.

## RELEASE_READY · đã triển khai theo phạm vi (P1 PASS)

- [Chương IX](G10-SGK-CHIX.md): B26–B27, `PUBLIC_FORMATIVE_ONLY`, **14 canonical formative + 2 Written (1 Anchor tag)**, 5 worked examples, 2 reviewed D5 SVG and 4 reviewed D6 HELP_ID.
- Academic receipts: D1–D4 16/16 + D5/D6 R01 reviewed and locked to Temp mirror Git blob `6ac3c0762d9cf8b41ab614e2163979d9770a436f`; [hồ sơ A1–A7](../CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md); source page-citation equivalent addendum included in authoring #626.
- **Không phải FULL_LEARNING_PATH**: sáu SGK Chapter Readiness ứng viên được giữ riêng, không công bố/chấm điểm. TOPIC_READINESS và Mastery chưa được kích hoạt.
- Technical release #630 đã merge, Deploy MkDocs #40915896874 SUCCESS và P1 có biên bản kiểm tra trực tiếp trên nhánh `gh-pages`. Owner nghiệm thu menu Chọn chương trình/Trang chủ THPT P2 PASS riêng; không suy rộng P2 cho nội dung ChIX.

Một packet canonical duy nhất trên mỗi phạm vi; không nhân đôi câu hỏi, không mở Readiness/Mastery chỉ vì gói `CONTENT_READY`. Trạng thái thực tế từng chương tra trong [REGISTER](../REGISTER.md).

## G10 Chương I B01–B02 · RELEASE_READY (chờ CI cuối và deploy)

- [Gói học thuật A1–A7](G10-SGK-CHI.md), phạm vi `PUBLIC_FORMATIVE_ONLY`: 16 câu Core/Practice, 2 Written (một Anchor), 7 ví dụ, 2 SVG, 4 thẻ D6.
- [Hồ sơ chi tiết](../CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md), source reviewed exact blob `95a554e31a613b8e215679fe6790738473d598df`, NotebookLM receipt `fece80dcb4b0e17d369e2ecbe12e8d13b672281a`.
- Kỹ thuật tích hợp trong Draft release #635, có 16/16 original source-locked canonical IDs và browser regression. Owner đã cấp quyền phát hành có điều kiện cho mọi packet đủ gate. Chỉ merge/deploy nếu hai workflow CI trên HEAD cuối cùng đều SUCCESS; không tự bật Chapter/Topic Readiness hoặc Mastery.

## G10 Chương II B03–B04 · RELEASE_READY (chờ hai CI exact HEAD)

- [Manifest](G10-SGK-CHII.md): 16 formative original A–D, 2 Written (một Anchor), 6 ví dụ, 2 SVG, 4 HELP_ID, 10/10 outcome; NotebookLM R01 PASS 18/18 chính snapshot blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122`.
- Hồ sơ [A1–A7](../CHII_B03_B04_PUBLIC_FORMATIVE_A1A7_EVIDENCE_20261029.md) PASS theo đúng `PUBLIC_FORMATIVE_ONLY`; **R1–R5 được chuẩn bị trên release PR #636; yêu cầu hai CI trên HEAD cuối cùng SUCCESS trước merge/deploy**, xử lý trong Draft #636. Tự kiểm tra chương, Topic và Mastery chưa kích hoạt.

## G10 Chương III B05–B06 · RELEASE_READY (exact-head CI gate)

- [Gói B05–B06](G10-SGK-CHIII.md): 16 formative + 2 Written, 6 worked examples, 2 D5 source SVG, 4 HELP_ID D6, 10/10 outcomes. Independent NotebookLM R01 Academic PASS exact source blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`.
- Source #633 merged, release #644 stages Golden R4 learner pages; both exact-head workflows must PASS before merge/deploy. Readiness, Topic and Mastery remain inactive.

## G10 Chương IV B07–B08 · RELEASE_READY (final CI recheck required)

- [Gói B07–B08](G10-SGK-CHIV.md): 16 Core/Practice, 2 Written (1 Anchor), 6 D2 examples, 2 SVG D5 source-locked, 4 D6 HELP_ID, 10/10 outcomes. Independent NotebookLM R01 PASS exact blob `42b206e31421b33860a1bf697d2d04b7aba992cf`.
- Source #634 merged main; release #645 combines original bank, Golden R4, #647 UI and improved SGK/Topic search. Dual CI SUCCESS on b5a14224 (THPT Preview #41029330154; Roadmap Quality #41029330166). R1–R5 evidence recorded, but the metadata-only final HEAD must also pass both workflows before merge/deploy. No Chapter/Topic Readiness or Mastery.

## RELEASE_READY — Chương IV, Bài 9–11 (cần QA cuối)

- [G10-SGK-CHIV-B09-B11](G10-SGK-CHIV-B09-B11.md) đã NotebookLM PASS 27/27 item, 14/14 outcome, D1–D6 B09–B11; snapshot Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`, biên bản reviewer blob `f13acb74206c00cb489e533df7792870f88830e3`.
- [Hồ sơ A1–A7](../CHIV_B09_B11_PUBLIC_FORMATIVE_A1A7_EVIDENCE_20261030.md). Source #637 merged main 160fd4fd; release #648 stages 24 canonical public items + 3 Written, 3 original SVG, 6 D6. THPT QA #41037205213 and Roadmap QA #41037205250 both SUCCESS on candidate 8ac012cc; exact-final-head CI still required after metadata commit. Physical-device P2 remains open.
- Gói B07–B08 đã merged/deployed #645; B09–B11 extends the **same** SGK ChIV learning path and canonical bank convention without duplicate item IDs. R1–R5 documented for release candidate #648, but final-head CI and P1 deploy receipt remain separate. Chapter/Topic Readiness and Mastery inactive.

## CONTENT_READY — G11 Chương I B01–B02 (academic handoff)

- [G11 ChI B01–B02](G11-SGK-CHI-B01-B02.md): 16 public formative + 2 Written/Anchor, 7 worked examples, 2 source-locked D5 SVG, 4 D6 HELP; 10/10 outcomes, owner NotebookLM R01 18/18 academic PASS on immutable Git blob `f0e737f2d07a27f233615345b60070319d5bd00f`.
- Source PR #627 is authoring-only; exact original academic blobs are preserved. Release R1–R5, exact-head CI and P1/P2 are separate and not yet claimed. No Chapter/Topic Readiness or Mastery.
