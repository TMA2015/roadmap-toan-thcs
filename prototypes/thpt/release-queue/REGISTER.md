# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHI](ready/G10-SGK-CHI.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | ChI B01–B02 R01 Academic PASS; authoring-only #628 |
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](ready/G10-SGK-CHVII.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #620 (current); #614 (old source, not a second packet) |
| [G10-SGK-CHVIII](ready/G10-SGK-CHVIII.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #621 (depends #620); #615 old source |
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | SGK_CHAPTER | ACADEMIC_PARTIAL | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |

**CONTENT_READY trong nhánh ứng viên authoring: 2 (ChVII, ChVIII) · chỉ PUBLIC_FORMATIVE_ONLY.** Phát hành mới chỉ khi A1–A7 đã hoàn tất; nhánh phát hành phải đạt R1–R5 và có owner approval. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Cổng A1–A7 mới của ChVII/VIII:** [CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). Nhánh phát hành phải lấy nguyên bản D6 R02 đã review và QA lại exact head; đây chưa phải MERGED CONTENT_READY trên main và không là quyền merge/deploy.

**Đối chiếu bằng chứng lịch sử sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.

**G10 ChI B01–B02:** R01 reviewer Academic PASS 18/18 and D1–D6 scoped; moved single manifest to [ready/G10-SGK-CHI.md](ready/G10-SGK-CHI.md). A1–A7 checked, R1–R5 pending for release lane; no Chapter/Topic Readiness or Mastery. Evidence [CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md](CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md). This authoring PR must be reconciled with current main before any merge; no production release action in this lane.
