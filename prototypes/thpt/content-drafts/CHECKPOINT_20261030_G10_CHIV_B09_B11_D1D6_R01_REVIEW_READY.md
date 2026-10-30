# Academic authoring checkpoint · Toán 10 ChIV Bài 9–11 · 2026-10-30

**LANE:** AUTHORING_ONLY · **SCOPE:** `PUBLIC_FORMATIVE_ONLY`, không phải toàn chương ChIV FULL_LEARNING_PATH, Topic, SGK_CHAPTER_READINESS hoặc TOPIC_READINESS. Không được tự merge/deploy, không điều chỉnh website/THCS/Firebase/Gemini/Mastery.

## Source receipt / frozen snapshot

- **PACKET_ID:** `THPT-G10-CHIV-B09-B11-D1D6-AUTHORING-20261030-R01`.
- **Temp file thật:** `Temp_THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01.md`, 46,174 bytes, SHA256 `c3def779161b8c55cc3de8c05be630c388d94f26f8463ce25b04d2feddb11444`; UTF-8 Markdown, 493 dòng.
- **Exact Git mirror:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_D1D6_AUTHORING_R01_SNAPSHOT.md`, Git blob `a9f6fab820559a8da98a5a42cd9902dbf9891f34`, kiểm từng byte (đảm bảo cả LF cuối file).
- **Academic basis S1:** bản scan gốc SGK Toán 10 KNTT tập 1 ChIV B09 pp.55–59, B10 pp.60–65, B11 pp.66–70, bài tập cuối chương pp.71–72; SBT B09 pp.51–54, B10 pp.55–58, B11 pp.59–65, bài tập cuối chương pp.66–71. Render/inspect từng trang nội dung từ PDF nguồn của chủ dự án; tác giả không tự thay NotebookLM S1 verdict.
- **D1–D2 base:** `prototypes/thpt/content-drafts/THPT_G10_CHIV_B09_B11_S1_D1D2_PREFLIGHT_v0.1.md`, prior commit `4c4e6c3103d41ff3efcfcb0f1baf34489a1c21bc`; bản này đã được mở rộng *materially* và R01 mới bắt buộc review như DELTA_C.

## Source artifacts and candidate inventory

- D1: đủ ba B09/B10/B11 theo SGK, nhấn mạnh điều kiện vectơ khác 0, trường hợp k=0, công thức tọa độ và dấu tích vô hướng.
- D2: 9 ví dụ, 3/Bài.
- D3: 24 formative (6 SGK Core, 18 SGK Practice) với đề, lựa chọn nếu MCQ, đáp án, hint chỉ dùng luyện tập, worked solution, outcome, role/placement, độ khó và content_version.
- D4: 3 Written, trong đó W11 nhãn Anchor trên cùng thư viện Written, rubric 7 điểm mỗi bài.
- D5: 3 SVG nguồn, fig B09 `8670fd4815f89a1f56e824cdab2d2d3696299422`, fig B10 `fb293bfb7c89b1247ebea310a1f97e04ea1ebab0`, fig B11 `9b16fbab2be9be385076b759675e98241811ac7f`. XML parse PASS, xuất PNG CairoSVG PASS và xem kiểm vị trí hình/dấu/toạ độ.
- D6: 6 thẻ Help (2/Bài), không làm lộ key Readiness, không tạo item.
- Outcome: 14 ứng viên (B09:5/B10:5/B11:4), dùng `skill_id` dự kiến theo bài; cuối cùng phải soát canonical skill bank. Đúng 27 candidate `item_id` độc nhất, kiểm tên và role. Dùng chung item canonical thay vì nhân bản khi thêm Topic placement.
- Registry tham chiếu, không copy thân câu/keys: `prototypes/thpt/shared-items/THPT_G10_CHIV_B09_B11_CANONICAL_ID_REGISTER_R01.md`, blob `f481dcafee2c50540e88fb5b93f089089a9b387b`.

## Author QA — KHÔNG phải NotebookLM Academic PASS

- 15 kiểm tra bất biến toán học bằng SymPy/Python cho tích vô hướng, phương trình vuông góc, tam giác, tọa độ trung điểm/trọng tâm, công (J), độ dài, góc 120° và dấu.
- Kiểm dữ liệu: 27 unique item IDs (6 Core + 18 Practice + 3 Written), 14 outcomes, 9 examples, 3 SVG, 6 HELP; mỗi rubric Written cộng đúng 7 điểm; đúng 1 Anchor tag; không có held-out Readiness.
- Kiểm XML SVG (3/3) và render PNG (3/3); sửa màu mũi tên/ghi chú SVG B09 **trước** khi khóa R01. Không có bằng chứng browser/mobile runtime UI hoặc device UAT.

## A1–A7

- [x] A1_SOURCE_SNAPSHOT — exact local Temp SHA256 / Git blob parity, original XML unchanged after freeze.
- [x] A2_SGK_SBT_SCOPE — tác giả đối chiếu trực tiếp S1 printed pages SGK/SBT nêu trên; cần reviewer xác minh độc lập.
- [ ] A3_NOTEBOOKLM_VERDICT — New academic content DELTA_C; owner has NOT delivered verdict for R01.
- [x] A4_ITEM_OUTCOME_IDS — 27 candidate item IDs unique within packet, 14 candidate skill/outcome IDs, 6 HELP IDs; final global bank collisions require R1.
- [ ] A5_D1_D6_SCOPE — đủ thành phần mới ở authoring; độc lập D1–D6 and S1 depth PASS chưa có.
- [ ] A6_DELTA_RESOLVED — chưa nhận findings và chưa có MINIMAL_DELTA / ACADEMIC_CLEARANCE.
- [x] A7_PUBLIC_PRIVATE_BOUNDARY — chỉ formative public, không protected Readiness keys hoặc Mastery.

**R1–R5:** NOT_STARTED, **NO MERGE/DEPLOY**. **P2_DEVICE_UAT:** NOT_DONE.

**NEXT:** chủ dự án gửi chính file Temp R01 và prompt ngắn cho NotebookLM, nhận verdict theo Bài/outcome/item/figure/help, xử lý delta theo Project source 07, chỉ chuyển scoped manifest sang ready sau A1–A7 PASS. Tiếp theo, cân nhắc học liệu Readiness ChIV qua quy trình bảo vệ riêng và nhánh TOPIC độc lập, không suy từ formative PASS.
