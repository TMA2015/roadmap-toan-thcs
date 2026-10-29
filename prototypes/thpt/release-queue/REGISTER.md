# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](ready/G10-SGK-CHVII.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #620 (current); #614 (old source, not a second packet) |
| [G10-SGK-CHVIII](ready/G10-SGK-CHVIII.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #621 (depends #620); #615 old source |
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | SGK_CHAPTER | ACADEMIC_PARTIAL | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |
| [G11-SGK-CHI-B01-B02](ready/G11-SGK-CHI-B01-B02.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | authoring handoff: G11 B01–B02 R01 reviewed (release PR not created) |

**CONTENT_READY trên nhánh bàn giao này: 3 gói (G10 ChVII/VIII + G11 ChI B01–02), chỉ PUBLIC_FORMATIVE_ONLY; không là quyền merge/deploy.** Phát hành mới chỉ khi A1–A7 đã hoàn tất; nhánh phát hành phải đạt R1–R5 và có owner approval. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Cổng A1–A7 mới của ChVII/VIII:** [CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). Nhánh phát hành phải lấy nguyên bản D6 R02 đã review và QA lại exact head; hai gói ChVII/VIII đã được PR #624 merge trên main tại thời điểm kiểm tra mới nhất, nhưng vẫn không là quyền merge/deploy các học liệu đó lên website.

**Đối chiếu bằng chứng lịch sử sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.

**G11 B01–B02 authoring R01:** [manifest A1–A7 riêng](ready/G11-SGK-CHI-B01-B02.md) — 18 candidate IDs (16 formative + 2 Written), 7 examples, 2 SVG, 4 HELP_ID, NotebookLM academic scoped PASS. Không suy rộng sang B03/B04, chapter Readiness, TOPIC. P2 đăng ký ID vào canonical release bank và mobile SVG QA vẫn do nhánh phát hành làm.
