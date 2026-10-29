# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](inventory/G10-SGK-CHVII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #620 (current); #614 (old source, not a second packet) |
| [G10-SGK-CHVIII](inventory/G10-SGK-CHVIII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #621 (depends #620); #615 old source |
| [G10-SGK-CHIX](ready/G10-SGK-CHIX.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |

**CONTENT_READY trên nhánh ứng viên ChIX: 1 — G10-SGK-CHIX, chỉ PUBLIC_FORMATIVE_ONLY, chưa merge main.** Phát hành mới chỉ khi A1–A7 đã hoàn tất; nhánh phát hành phải đạt R1–R5 và có owner approval. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Đối chiếu bằng chứng sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**G10 ChIX A1–A7 bàn giao học liệu:** [CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). R1–R5 vẫn HOLD; hai SVG D5 và 4 D6 phải được tích hợp đúng snapshot, sửa trích dẫn SBT, kiểm FIG02 mobile, không bật Readiness/Mastery. PR #624 độc lập đang đề xuất 2 gói ChVII–VIII; trước khi merge song song các PR cần đối chiếu REGISTER để bảo toàn cả 3 hàng READY, không ghi đè.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.