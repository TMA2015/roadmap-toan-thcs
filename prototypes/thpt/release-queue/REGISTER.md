# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHIII](ready/G10-SGK-CHIII.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY | #633 source-only D1–D6 NotebookLM 18/18 PASS, B05–B06 only |
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](ready/G10-SGK-CHVII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | #625 (scoped technical release; source #624 merged)
| [G10-SGK-CHVIII](ready/G10-SGK-CHVIII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | #625 (scoped technical release; source #624 merged)
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | SGK_CHAPTER | ACADEMIC_PARTIAL | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |

**RELEASE_READY có điều kiện: 2 (ChVII, ChVIII) · chỉ PUBLIC_FORMATIVE_ONLY.** PR #624 source merged @ 573fbdd4444f2e5c612f50e902f428b6064f6970; owner approved #625 conditional on exact-head dual CI SUCCESS. RELEASE_READY is pre-deploy; PUBLISHED_SCOPED only after observed Pages deploy. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Cổng A1–A7 mới của ChVII/VIII:** [CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). Nhánh phát hành phải lấy nguyên bản D6 R02 đã review và QA lại exact head; source manifests đã merge vào main qua PR #624; quyền merge/deploy #625 được chủ dự án cấp có điều kiện exact-head CI PASS, chỉ phạm vi PUBLIC_FORMATIVE_ONLY.

**Đối chiếu bằng chứng lịch sử sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.

**G10 ChIII B05–B06 authoring:** [ready manifest](ready/G10-SGK-CHIII.md), 18 candidate IDs, 10 outcomes, 2 SVG, 4 D6. Reviewer Academic PASS exact R01 source blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`, report blob `3fb823c4353d368ae5a9c14f03c7309933d47e6f`. A1–A7 checked only for PUBLIC_FORMATIVE_ONLY B05/B06. [Evidence](CHIII_B05_B06_PUBLIC_FORMATIVE_A1A7_EVIDENCE_20261029.md). R1–R5 unchecked and full chapter readiness/Topic not approved. This authoring row is not merged into main.
