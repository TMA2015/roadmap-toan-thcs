# Checkpoint học liệu Toán 10 KNTT — Chương IV Bài 7–8 (2026-10-29)

**Nhánh:** AUTHORING_ONLY · Chưa NotebookLM review · KHÔNG merge/deploy, KHÔNG website/engine/scoring/Firebase/Gemini/Mastery.
**Packet:** `THPT-G10-CHIV-B07-B08-D1D6-AUTHORING-20261029-R01`; `RELEASE_SCOPE_CANDIDATE=PUBLIC_FORMATIVE_ONLY`. Toàn ChIV gồm B07–B11, nội dung mới chỉ B07/B08.

## S1 receipts trực tiếp từ PDF SGK/SBT KNTT Toán 10 tập 1
- SGK B07 “Các khái niệm mở đầu” **trang in 46–50**, B08 “Tổng và hiệu của hai vectơ” **51–54**.
- SBT B07 **45–47**, B08 **48–50**; đã đọc trang lý thuyết, ví dụ và câu hỏi theo các trang đó.
- Các B09–B11 của ChIV có phạm vi riêng; không sử dụng PASS B07/B08 để chứng nhận chúng.
- Chú ý về quy ước sách S1: SBT B07 trang in 45 ghi rõ vectơ-không được quy ước cùng phương, cùng hướng với mọi vectơ. Đã giữ nguyên ý nghĩa này trong D1/D3 và tránh gọi “vectơ đối” như định nghĩa Core B07 (giải thích chính thức ở B08).

## Asset source-locked
- Temp thật: `Temp_THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01.md`, 34.592 bytes, SHA256 `55a9bd4df29e57de82df9d68a18b60e29a31ef57264884633c2f2cac08d2eaa6`.
- Git mirror byte-exact: `prototypes/thpt/content-drafts/THPT_G10_CHIV_B07_B08_D1D6_AUTHORING_R01_SNAPSHOT.md` Git blob `42b206e31421b33860a1bf697d2d04b7aba992cf`.
- B07 SVG `prototypes/thpt/visuals/THPT_G10_B07_PARALLELOGRAM_EQUAL_OPPOSITE_D5_R01.svg`, Git blob `55ec9add04cb79da2cad7703b3897271e5b3436a`.
- B08 SVG `prototypes/thpt/visuals/THPT_G10_B08_TRIANGLE_PARALLELOGRAM_SUM_D5_R01.svg`, Git blob `3d7550c8667ed8ea629563b8078ae3dfbc680135`. Cả hai SVG đúng nguyên XML có trong Temp, parse và CairoSVG render PNG. Chưa phải mobile QA thiết bị thật.

## D1–D6 đầy đủ về bản thảo (chưa reviewer PASS)
- D1: B07 khái niệm/độ dài/hướng/bằng nhau/vectơ-không/ứng dụng, B08 cộng-trừ theo quy tắc ba điểm và hình bình hành, trung điểm, trọng tâm, hợp lực.
- D2: 6 ví dụ giải mẫu (B07:3, B08:3), giải chi tiết kèm sai lầm thường gặp.
- D3: 16 formative (4 SGK_CORE + 12 SGK_PRACTICE/Application), mỗi câu có item_id, outcome, role, level, đáp án, gợi ý và lời giải.
- D4: 2 Written (`THPT-G10-CHIV-W07` và `THPT-G10-CHIV-W08-ANCHOR`) có giải và rubric 7 điểm, Anchor là nhãn trong Written.
- D5: 2 SVG nguồn thật; D6: 4 HELP_ID với 5 bước chẩn đoán–sửa sai.
- 10 outcome/skill ID ứng viên, 18 unique candidate item IDs (trong gói) và 4 helper IDs (không phải item).
- QA tác giả `/mnt/data/test_g10_chiv_packet.py`: **55/55 PASS** (đại số vectơ với tọa độ thử, trung điểm/trọng tâm, toán ứng dụng, structure/reconciliations/rubric, SVG XML, exact inclusion); chưa được NotebookLM thẩm định.
- GitHub main search: chưa xác nhận full bank-wide dedup; production runtime registration không thuộc làn này.

## Gate và next
- `A1_SOURCE_SNAPSHOT=PASS_LOCAL`, `A2_SGK_SBT_SCOPE=AUTHOR_DIRECT_SOURCE_READ`, `A4_ITEM_OUTCOME_IDS=PASS_WITHIN_PACKET`, `A7_PUBLIC_PRIVATE_BOUNDARY=PASS`.
- `A3_NOTEBOOKLM_VERDICT=HOLD`, `A5_D1_D6_SCOPE=HOLD_REVIEW`, `A6_DELTA_RESOLVED=HOLD`; **ACADEMIC_PASS=NOT_ISSUED / CONTENT_READY=NO**.
- Không chứa câu/keys Readiness độc lập; không ghi điểm Mastery từ luyện tập hoặc xem lời giải.
- **Next:** chủ dự án chuyển file Temp này kèm prompt ngắn đến NotebookLM (đúng 5 Permanent THPT v2.0); nhận verdict theo từng B07/B08, outcome, item, figure và HELP_ID; xử lý delta theo source 07, chỉ khi A1–A7 đầy đủ mới chuyển manifest inventory → ready. R1–R5 thuộc nhánh phát hành riêng.
