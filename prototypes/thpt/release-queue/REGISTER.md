# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G11-SGK-CHI-B01-B02](ready/G11-SGK-CHI-B01-B02.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | source #627 merged; release #650 R1–R5 evidence, exact-final-head CI before merge/deploy; B01–B02 only |
| [G10-SGK-CHIV-B09-B11](ready/G10-SGK-CHIV-B09-B11.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY B09–B11 | source #637 merged; release #648 R1–R5 candidate QA PASS, final metadata-head dual CI required |
| [G10-SGK-CHIV](ready/G10-SGK-CHIV.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | source #634 merged; release #645 R1–R5 evidence completed, exact-final-head CI recheck before merge/deploy |
| [G10-SGK-CHIII](ready/G10-SGK-CHIII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | academic source #633 merged; release #644 only after both exact-final-head CI SUCCESS |
| [G10-SGK-CHII](ready/G10-SGK-CHII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | #631 authoring merged; #636 combined release, dual exact-head CI mandatory before merge |
| [G10-SGK-CHI](ready/G10-SGK-CHI.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | authoring #628 merged, release #635 exact-head CI pending |
| [G10-SGK-CHV](ready/G10-SGK-CHV.md) | SGK_CHAPTER | CONTENT_READY | PUBLIC_FORMATIVE_ONLY B12–B14 (B13/B14 published #671; B12 #677 R2 pending) | source #639 A1–A7 / B12 reviewed R02, release #677 |
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](ready/G10-SGK-CHVII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | merged/deployed #625, source #624 |
| [G10-SGK-CHVIII](ready/G10-SGK-CHVIII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | merged/deployed #625, source #624 |
| [G10-SGK-CHIX](ready/G10-SGK-CHIX.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | authoring #626 merged; release #630 conditional R1–R5 |

**Đã phát hành trên website theo phạm vi `PUBLIC_FORMATIVE_ONLY`: ChVI–VIII (ChVII–VIII merged #625, Deploy MkDocs #40888628016 SUCCESS, HTML trên `gh-pages` đã xác minh). ChVII–VIII vẫn có trạng thái manifest kỹ thuật `RELEASE_READY` trong ready/ theo validator hiện hành dù P1 đã xác nhận; không tự đổi nhãn sang `PUBLISHED_SCOPED` khi chưa chuyển manifest sang inventory/ kèm P1. ChIX đã merge #630 và Deploy MkDocs #40915896874 SUCCESS; P1 đã đối chiếu trực tiếp `gh-pages` các trang, bank và SVG. ChI B01–B02 là `RELEASE_READY` trên PR #635, chỉ merge khi hai CI trên HEAD kết hợp SUCCESS.**

**Cổng A1–A7 mới của ChVII/VIII:** [CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). ChVII–VIII đã dùng đúng bản D6 R02 và có bằng chứng P1 deploy sau PR #625. Nội dung Tự kiểm tra cuối chương/Mastery vẫn chưa kích hoạt.

**Đối chiếu bằng chứng lịch sử sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**Nguồn ChIX mới:** [hồ sơ A1–A7 B26–B27](CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). Hai SVG D5 và bốn thẻ D6 nguồn R01 đã phát hành trong #630; Tự kiểm tra/Mastery vẫn không kích hoạt. **PR lịch sử:** #614/#615/#616 và #620/#621 không được merge như gói học liệu độc lập.
**G10 ChI B01–B02:** A1–A7 đã có Academic PASS đúng snapshot 2026-10-29, hồ sơ tại [CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md](CHI_B01_B02_A1A7_SCOPED_EVIDENCE_20261029.md). Chưa phải công bố chương hoàn chỉnh; R1–R5 do nhánh phát hành #635 kiểm tra. ChIX đã triển khai #630 P1 PASS, nhưng nhãn manifest `RELEASE_READY` trong ready/ chưa chuyển quy ước historical inventory.

**30/10/2026 — ChI B01–B02:** authoring #628 đã merge và A1–A7 được giữ đúng snapshot. Ứng viên website #635 đã kiểm tra 16/16 original canonical + 2 Written/Anchor, 7 ví dụ, 2 SVG và 4 HELP_ID. R2 chỉ chốt khi exact combined HEAD CI PASS; P1/P2 ghi nhận riêng sau deploy.

**30/10/2026 — Handoff ChII B03–B04:** Academic NotebookLM R01 18/18, 10/10 outcomes, D1–D6 PASS trong phạm vi PUBLIC_FORMATIVE_ONLY, snapshot blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122` giữ nguyên. Manifest tại `ready/G10-SGK-CHII.md` có A1–A7 nhưng chưa có R1–R5, không tự cấp Mastery/Readiness. Release Draft #636 đã đối chiếu với `main` có ChI #635, cả hai CI trên HEAD `e74ef9f7273c94f39efcfbc0749297730786072b` SUCCESS. Chưa merge/deploy cho ChII.

**30/10/2026 ChII R1–R5:** G10 B03/B04 R01 Academic PASS (exact Temp Git blob `acea9776d1c7534a4cd0cd28e98db26dedf0c122`), original 18 canonical candidates, 2 SVG, 4 HELP_ID. Source #631 merged; release #636 combined clean UI #640 and both SGK chapters. Owner authorized release *only after* two exact-final-head workflows SUCCESS. P1/P2 postdeploy remain separate. No Readiness/Mastery.

**30/10/2026 — ChIII B05–B06 authoring handoff:** Academic PASS 18/18, 10/10 outcomes, D1–D6 PASS on exact source blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`. Source PR #633 integrated onto main including released ChII #636; CONTENT_READY only. No Chapter/Topic Readiness or Mastery; R1–R5 pending release lane.

**30/10/2026 ChIII R1–R5:** Source #633 merged main `1643c60e3638cbc180c6580b54111a64e07cf663`; exact source blob `6320aeaa89bd51c514b07461e01fad5e3aca833f`. Release #644 integrates 16 canonical formative (7 A–D MCQ, 9 short-response), 2 Written incl Anchor, 2 original SVG, 4 D6 HELP_ID. Owner permission covers PUBLIC_FORMATIVE_ONLY **after** both exact final-head CI PASS; P1/P2 postdeploy separate, no Readiness/Mastery.

**30/10/2026 — ChIV B07/B08 academic handoff:** 18/18 NotebookLM R01 PASS, D1–D6 10/10 outcomes, snapshot Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`. Authoring #634 source-only, no website/Readiness/Mastery. R1–R5 requires separate release PR and exact-head CI.
