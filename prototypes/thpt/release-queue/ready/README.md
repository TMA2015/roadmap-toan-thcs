# RELEASE_READY — G10 ChVII–VIII (bounded formative only)

PR #624 đã hợp nhất nguồn A1–A7 vào main; hai manifest đã chuyển RELEASE_READY theo đúng PUBLIC_FORMATIVE_ONLY trên nhánh PR #625. Owner cho phép merge/deploy có điều kiện hai workflow CI cuối cùng PASS. Không phải FULL_LEARNING_PATH.

- [Chương VII](G10-SGK-CHVII.md): B19–B22; 32 formative, 4 Written, 3 SVG D5, 8 D6 cards.
- [Chương VIII](G10-SGK-CHVIII.md): B23–B25; 25 formative, 3 Written, 1 SVG D5, 6 D6 cards.

Đối chiếu học thuật A1–A7: [evidence](../CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md).

Các manifest là con trỏ tới snapshot đã review; không nhân bản item, không bật Readiness/Mastery. Nhánh phát hành phải tích hợp nội dung D6 R02 chính xác vào giao diện, đạt các gate R1–R5 và được chủ dự án cho phép cụ thể trước khi merge/deploy. Không được suy PUBLISHED_SCOPED hoặc deploy thành công cho đến khi CI cuối, merge PR #625 và kiểm tra Pages thực tế hoàn tất. P2 thiết bị thật vẫn phải ghi riêng.


## Học liệu mới ChIII B05–B06 đã PASS (chỉ authoring)

- [G10-SGK-CHIII](G10-SGK-CHIII.md): B05–B06, D1–D6 (6 ví dụ, 16 formative + 2 Written, 2 SVG, 4 HELP_ID), 10 outcomes. Độc lập NotebookLM PASS 18/18 theo nguồn gốc R01 Git blob `6320aeaa89bd51c514b07461e01fad5e3aca833f` và report blob `3fb823c4353d368ae5a9c14f03c7309933d47e6f`.
- [Biên bản A1–A7](../CHIII_B05_B06_PUBLIC_FORMATIVE_A1A7_EVIDENCE_20261029.md): PASS đúng Bài 5–6 PUBLIC_FORMATIVE_ONLY. Đây là candidate trên Draft PR #633, chưa merge main; R1–R5 giữ nguyên chưa kiểm tra, P2 đăng ký 18 ID production và QA SVG thiết bị thật thuộc nhánh phát hành.
- Không nhận là hoàn thành Chương III SGK Readiness, TOPIC path, Mastery hoặc quyền merge/deploy.
