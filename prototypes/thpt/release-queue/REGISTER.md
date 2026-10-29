# THPT — Danh mục học liệu & audit A1–A7 (29/10/2026)

**Một packet_id = một gói học liệu canonical theo đúng RELEASE_SCOPE.** PR cũ/chồng nhau là cùng gói, không tính nhân đôi. Tất cả hàng sau là dữ liệu kiểm kê/điều phối, không tự cấp Academic PASS.

| Gói | Hành trình | Trạng thái | Phạm vi | PR / nguồn |
|---|---|---|---|---|
| [G10-SGK-CHVI](inventory/G10-SGK-CHVI.md) | SGK_CHAPTER | PUBLISHED_SCOPED | PUBLIC_FORMATIVE_ONLY | merged #612; UI #617–619 |
| [G10-SGK-CHVII](inventory/G10-SGK-CHVII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #620 (current); #614 (old source, not a second packet) |
| [G10-SGK-CHVIII](inventory/G10-SGK-CHVIII.md) | SGK_CHAPTER | INTEGRATING | PUBLIC_FORMATIVE_ONLY | #621 (depends #620); #615 old source |
| [G10-SGK-CHIX](inventory/G10-SGK-CHIX.md) | SGK_CHAPTER | ACADEMIC_PARTIAL | PUBLIC_FORMATIVE_ONLY | #616 (dependent old draft) |

| [G10-SGK-CHI](inventory/G10-SGK-CHI.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | ChI B01–B02; A5 HOLD (D6/remediation) |
| [G10-SGK-CHII](inventory/G10-SGK-CHII.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | ChII B03–B04; A5 HOLD (D6/remediation) |
| [G10-SGK-CHIII](inventory/G10-SGK-CHIII.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | ChIII B05–B06; A5 HOLD (D6/remediation) |
| [G10-SGK-CHIV](inventory/G10-SGK-CHIV.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | ChIV B07–B11; 45 items, RD23 và 4 SVG đã review; A5 HOLD |
| [G10-SGK-CHV](inventory/G10-SGK-CHV.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | ChV B12–B14; 27 items, RD17 và 4 SVG đã review; A5 HOLD |
| [G11-SGK-CHVIII](inventory/G11-SGK-CHVIII.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | G11 B28–B30; 10 canonical và 6 Readiness PASS; A5/A6 HOLD |
| [G12-SGK-CHVI](inventory/G12-SGK-CHVI.md) | SGK_CHAPTER | INVENTORY | FULL_LEARNING_PATH | G12 B18–B19; D1–D4 PASS, 6 Readiness blueprint; A4/A5/A6 HOLD |
| [TOPIC-PROB-G10-G12](inventory/TOPIC-PROB-G10-G12.md) | TOPIC | INVENTORY | FULL_LEARNING_PATH | Xác suất 10–12 PASS_WITH_SCOPE_TIERING; 12 Topic Readiness PASS; A5 HOLD |

**CONTENT_READY hiện tại: 0.** Phát hành mới chỉ khi A1–A7 đã hoàn tất; nhánh phát hành phải đạt R1–R5 và có owner approval. ChVI là PUBLISHED_SCOPED lịch sử, không coi Tự kiểm tra/Mastery hoàn thiện.

**Nhánh Chuyên đề:** chưa có packet đạt cổng riêng; không suy luận từ SGK. Khi có batch TOPIC thực tế, dùng PACKET_TEMPLATE.md tạo một hàng, không thêm gói rỗng.

**PR lịch sử:** #614/#615 là những nhánh cũ của #620/#621; #616 đang theo snapshot cũ và sẽ cần tái tích hợp trước release.
## Đối soát hồi tố 29/10/2026 — hồ sơ học liệu đã NotebookLM thẩm định

**Tổng 12 gói canonical:** 4 manifest nguyên trạng thuộc PR #622 (ChVI–IX lớp 10), cùng **8 manifest mới** trong `inventory/`: ChI–V lớp 10, ChVIII lớp 11, ChVI lớp 12, chuyên đề Xác suất xuyên lớp 10–12. PR #614/#615 là nguồn lịch sử của #620/#621, không tạo packet trùng.

- **CONTENT_READY = 0**, giữ `ready/` trống. ChI–V lớp 10 và TOPIC Xác suất: **A1/A2/A3/A4/A6/A7 PASS (6/7)** nhưng **A5 HOLD** do chưa kiểm toán đủ D1–D6 theo hành trình độc lập. G11: 5/7, thiếu A5/A6. G12: 4/7, thiếu A4/A5/A6 (6 Chapter Readiness mới là blueprint). ChVI–IX giữ các blocker ghi trong manifest gốc PR #622.
- Tất cả PASS NotebookLM cũ được **bảo lưu đúng source snapshot**; không kiểm duyệt lại nếu không thay đổi toán học mức `DELTA_C`. SOURCE_COMMIT các gói mới trỏ tới nhánh học thuật, không khẳng định tích hợp trên main.
- Không có đề/khóa/rubric Readiness bảo mật trong queue; Written/Anchor và item canonical chỉ trỏ tới nguồn qua ID/commit. Không tự tạo backend/tài khoản; mọi R1–R5 thuộc nhánh phát hành và chủ dự án.
- `RELEASE_SCOPE: FULL_LEARNING_PATH` là **phạm vi mục tiêu**, không phải chứng nhận hoàn thiện. Đọc `RETROSPECTIVE_A1_A7_AUDIT_20261029.md` để biết blocker theo từng gói.
