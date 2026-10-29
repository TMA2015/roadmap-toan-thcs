# CONTENT_READY — authoring lane candidates

Trong nhánh biên soạn đang có 2 manifest CONTENT_READY theo phạm vi PUBLIC_FORMATIVE_ONLY: G10-SGK-CHVII và G10-SGK-CHVIII. Không phải FULL_LEARNING_PATH.

- [Chương VII](G10-SGK-CHVII.md): B19–B22; 32 formative, 4 Written, 3 SVG D5, 8 D6 cards.
- [Chương VIII](G10-SGK-CHVIII.md): B23–B25; 25 formative, 3 Written, 1 SVG D5, 6 D6 cards.

Đối chiếu học thuật A1–A7: [evidence](../CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md).

Các manifest là con trỏ tới snapshot đã review; không nhân bản item, không bật Readiness/Mastery. Nhánh phát hành phải tích hợp nội dung D6 R02 chính xác vào giao diện, đạt các gate R1–R5 và được chủ dự án cho phép cụ thể trước khi merge/deploy. Số READY trên main chưa thay đổi cho đến khi PR này được hợp nhất đúng thẩm quyền.


## Newly reviewed G10 ChI B01–B02 — academic handoff only

- [G10-SGK-CHI](G10-SGK-CHI.md): B01 Mệnh đề and B02 Tập hợp; public formative source only; 11 outcomes, 7 worked examples, 16 formative + 2 Written, 2 SVG D5 and 4 HELP_ID D6.
- NotebookLM R01 18/18 Academic PASS exact Git blob `95a554e31a613b8e215679fe6790738473d598df`, receipt blob `fece80dcb4b0e17d369e2ecbe12e8d13b672281a`. A1–A7 passed for B01/B02 scoped source.
- This PR carries only reviewed academic assets and manifest pointers. R1–R5, runtime canonical registration/dedup, real mobile SVG QA, secure Readiness and owner release approval remain outside this authoring workstream. No Topic or full chapter Readiness claims.
