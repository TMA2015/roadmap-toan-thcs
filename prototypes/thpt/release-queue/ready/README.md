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

## G10 Chương III B05–B06 · CONTENT_READY (academic handoff)

- [Gói B05–B06](G10-SGK-CHIII.md): 16 formative + 2 Written, 6 worked examples, 2 D5 source SVG, 4 HELP_ID D6, 10/10 outcomes. Independent NotebookLM R01 Academic PASS exact source blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`.
- Source #633 contains no student release, no Readiness/Topic/Mastery; release must independently pass R1–R5 on new combined head and owner-approved scope.
