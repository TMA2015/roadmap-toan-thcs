# THPT — Danh mục học liệu (snapshot 2026-10-29)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](ready/G10-SGK-CHVII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | merged/deployed #625, source #624 |
| [G10-SGK-CHVIII](ready/G10-SGK-CHVIII.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | merged/deployed #625, source #624 |
| [G10-SGK-CHIX](ready/G10-SGK-CHIX.md) | SGK_CHAPTER | RELEASE_READY | PUBLIC_FORMATIVE_ONLY | authoring #626 merged; release #630 conditional R1–R5 |

**Đã phát hành trên website theo phạm vi `PUBLIC_FORMATIVE_ONLY`: ChVI–VIII (ChVII–VIII merged #625, Deploy MkDocs #40888628016 SUCCESS, HTML trên `gh-pages` đã xác minh). ChVII–VIII vẫn có trạng thái manifest kỹ thuật `RELEASE_READY` trong ready/ theo validator hiện hành dù P1 đã xác nhận; không tự đổi nhãn sang `PUBLISHED_SCOPED` khi chưa chuyển manifest sang inventory/ kèm P1. ChIX hiện là một gói `RELEASE_READY` trên ứng viên #630, chỉ được merge/deploy khi cả hai CI trên HEAD cuối SUCCESS; quyền phát hành PUBLIC_FORMATIVE_ONLY đã được chủ dự án cấp.**

**Cổng A1–A7 mới của ChVII/VIII:** [CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md](CHVII_VIII_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). ChVII–VIII đã dùng đúng bản D6 R02 và có bằng chứng P1 deploy sau PR #625. Nội dung Tự kiểm tra cuối chương/Mastery vẫn chưa kích hoạt.

**Đối chiếu bằng chứng lịch sử sau PR #620/#621 và kiểm soát D6:** [ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md](ACADEMIC_AND_D6_GATE_EVIDENCE_20261029.md). Tài liệu này chỉ là checkpoint/QA evidence, không nâng A5 hoặc thêm gói READY.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**Nguồn ChIX mới:** [hồ sơ A1–A7 B26–B27](CHIX_B26_B27_PUBLIC_FORMATIVE_A1_A7_FINAL_EVIDENCE_20261029.md). Hai SVG D5 và bốn thẻ D6 nguồn R01 được tích hợp trong ứng viên kỹ thuật #630; chưa phát hành. **PR lịch sử:** #614/#615/#616 và #620/#621 không được merge như gói học liệu độc lập.