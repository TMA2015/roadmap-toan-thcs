# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](inventory/G10-SGK-CHVII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #620 (current); #614 (old source, not a second packet) |
| [G10-SGK-CHVIII](inventory/G10-SGK-CHVIII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #621 (depends #620); #615 old source |
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | SGK_CHAPTER | ACADEMIC_PARTIAL | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |

**CONTENT_READY hiện tại: 0.** Phát hành mới chỉ khi A1–A7 đã hoàn tất; nhánh phát hành phải đạt R1–R5 và có owner approval. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Đối chiếu bằng chứng sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.