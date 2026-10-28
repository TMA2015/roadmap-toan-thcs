# CHECKPOINT 2026-10-28 — G10 Chapters VII & VIII exercise bank while ChVI review awaits owner

**Owner direction:** Người dùng chưa tiện thao tác NotebookLM, nên giữ nguyên gói review Chương VI đã bàn giao, tiếp tục phát triển ngân hàng cho chương khác **ngay**; không trì hoãn để chờ review ChVI.  
**Repository:** `TMA2015/roadmap-toan-thcs`, Draft PR #612; Golden UI R4 locked; không merge/deploy, không cấp Academic PASS.

## 1. Sản phẩm đã tạo

| Chương | Bài SGK | SGK/SBT scan pages (printed) | Core | Practice | Vận dụng | Written | Anchor labels | Assessment |
|---|---|---|---:|---:|---:|---:|---:|---|
| VII · Phương pháp tọa độ trong mặt phẳng | 19–22 | SGK 29–60 / SBT 27–49 | 8 | 12 | 4 | 4 | 1 | 8 outcome slots, **không có đề/đáp án** |
| VIII · Đại số tổ hợp | 23–25 | SGK 60–79 / SBT 50–59 | 6 | 9 | 3 | 3 | 1 | 6 outcome slots, **không có đề/đáp án** |
| **Tổng mới** | **7 bài** | | **14** | **21** | **7** | **7** | **2** | **14 blueprint slots** |

**49 item candidates có đề + khóa + lời giải** (= 42 Core/Practice/Application + 7 Written), tất cả đều có `item_id` riêng. *Anchor không phải item phụ*: 2 trong 7 bài Written được gắn `anchor_tag=true`. Các blueprint readiness **không** phải 14 item nữa.

### Source receipts
- `THPT_G10_CHVII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md`
- `THPT_G10_CHVIII_S1_VISUAL_SOURCE_RECEIPT_AND_SCOPE_20261028.md`

### Canonical candidates
- `shared-items/THPT_G10_CHVII_B19_B22_CORE_PRACTICE_CANDIDATES_v0.1.md`
- `shared-items/THPT_G10_CHVII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md`
- `shared-items/THPT_G10_CHVIII_B23_B25_CORE_PRACTICE_CANDIDATES_v0.1.md`
- `shared-items/THPT_G10_CHVIII_WRITTEN_ANCHOR_CANDIDATES_v0.1.md`
- `shared-items/THPT_G10_CHVII_CHVIII_READINESS_BLUEPRINT_NO_ITEMS_v0.1.md`

## 2. Provisional academic coverage: lesson to item ID

| Lesson | Skill/outcome groups from S1 visual review | Core | Practice/Application | Written |
|---|---|---|---|---|
| B19 | Vector pháp tuyến/chỉ phương; PT tham số/tổng quát; đường qua 1–2 điểm; mô hình tuyến tính | C01–C02 | P01–P04 | CHVII-W19-01 |
| B20 | Vị trí tương đối, giao điểm, vuông góc, góc giữa đường và khoảng cách điểm–đường | C01–C02 | P01–P04 | CHVII-W20-01 |
| B21 | PT đường tròn, tâm/bán kính, đường kính, tiếp tuyến, qua ba điểm | C01–C02 | P01–P04 | CHVII-W21-ANCHOR-01 |
| B22 | Elip, hypebol, parabol, tiêu điểm/trục/tiệm cận/đường chuẩn | C01–C02 | P01–P04 | CHVII-W22-01 |
| B23 | Quy tắc cộng, nhân, rời nhau/độc lập, nhiều bước | C01–C02 | P01–P04 | CHVIII-W23-01 |
| B24 | Hoán vị, chỉnh hợp, tổ hợp, có/không xét thứ tự, chia nhóm | C01–C02 | P01–P04 | CHVIII-W24-ANCHOR-01 |
| B25 | Công thức Newton, hệ số đơn thức, số hạng không chứa x, dấu | C01–C02 | P01–P04 | CHVIII-W25-01 |

**Đây là ma trận *dự kiến*, không phải ma trận D1–D6 đã được NotebookLM duyệt**. Chưa tuyên bố mọi đồ thị/hình/chứng minh hoặc độ khó đều đã đạt chuẩn chiều sâu.

## 3. QA và phạm vi tiếp xúc

- Original scanned PDFs were rendered visually; page start/end of B19–25 and end-of-chapter sections were checked; **not OCR**. Detailed figure-to-outcome/each-SBT-exercise audit remains PENDING.
- Independent mathematics spot checks: **22/22 PASS**, gồm đường thẳng, khoảng cách, phương trình đường tròn, tiêu điểm, phép đếm và hệ số Newton.
- Automated `scripts/test-thpt-g10-chvii-chviii-draft-bank.cjs` tests **24+18 item rows**, **7 Written IDs**, uniqueness against **25 ChVI candidate IDs**, and 14 Readiness blueprint slots without question/answer keys. Test integrated into THPT MkDocs QA; exact-head CI needs verification before declaring QA overall PASS.
- **Repo có thể công khai:** không lưu bài kiểm tra chưa phát hành có answer key. Readiness is a no-stem/no-key blueprint only; candidate Core/Practice answers already visible in source are NOT eligible as fresh held-out assessment evidence.
- Không chạm Golden UI R4, không tạo route mới, không cập nhật người học/điểm/mastery.

## 4. Next academic actions

1. Cứ giữ package ChVI `Temp_THPT_G10_CHVI_NOTEBOOKLM_REVIEW_BATCH_20261028.zip` để owner tự nạp khi thuận tiện; không gửi lại/đòi review ngay.
2. Tiếp tục biên soạn Knowledge đầy đủ và graph/SVG của ChVII và ChVIII trước review; đối chiếu sâu từng activity/figures trong SGK/SBT, bổ sung đa dạng khó khăn và bài tập cuối chương.
3. Sau khi ngân hàng đủ độ sâu, tạo riêng `Temp_` review packet cho ChVII hoặc ChVIII, theo Project Sources 06+07 v1.1. Việc NotebookLM xét SGK ChVI không tự cấp clearance cho hai chương này.
4. Khi có phản hồi ChVI, xử lý delta theo từng scope, không merge/deploy không xin phép.

**Gates:** `G10_CHVII_CHVIII_ITEM_DRAFT=49_UNREVIEWED`; `READINESS=14_BLUEPRINT_SLOTS_NOT_ITEMS`; `WRITTEN=7`; `ACADEMIC_CLEARANCE=NO`; `CHVI_REVIEW_USER_PENDING`; `MERGE_DEPLOY=NO`.
